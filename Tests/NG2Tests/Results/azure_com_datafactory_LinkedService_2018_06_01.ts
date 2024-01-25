import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Amazon Marketplace Web Service linked service. */
	export interface AmazonMWSLinkedService {

		/**
		 * Amazon Marketplace Web Service linked service properties.
		 * Required
		 */
		typeProperties: AmazonMWSLinkedServiceTypeProperties;
	}

	/** Amazon Marketplace Web Service linked service. */
	export interface AmazonMWSLinkedServiceFormProperties {
	}
	export function CreateAmazonMWSLinkedServiceFormGroup() {
		return new FormGroup<AmazonMWSLinkedServiceFormProperties>({
		});

	}


	/** Amazon Marketplace Web Service linked service properties. */
	export interface AmazonMWSLinkedServiceTypeProperties {

		/**
		 * The access key id used to access data.
		 * Required
		 */
		accessKeyId: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The endpoint of the Amazon MWS server, (i.e. mws.amazonservices.com)
		 * Required
		 */
		endpoint: string;

		/**
		 * The Amazon Marketplace ID you want to retrieve data from. To retrieve data from multiple Marketplace IDs, separate them with a comma (,). (i.e. A2EUQ1WTGCTBG2)
		 * Required
		 */
		marketplaceID: string;

		/** The base definition of a secret type. */
		mwsAuthToken?: AmazonMWSLinkedServiceTypePropertiesMwsAuthToken;

		/** The base definition of a secret type. */
		secretKey?: AmazonMWSLinkedServiceTypePropertiesSecretKey;

		/**
		 * The Amazon seller ID.
		 * Required
		 */
		sellerID: string;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification?: string | null;
	}

	/** Amazon Marketplace Web Service linked service properties. */
	export interface AmazonMWSLinkedServiceTypePropertiesFormProperties {

		/**
		 * The access key id used to access data.
		 * Required
		 */
		accessKeyId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The endpoint of the Amazon MWS server, (i.e. mws.amazonservices.com)
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,

		/**
		 * The Amazon Marketplace ID you want to retrieve data from. To retrieve data from multiple Marketplace IDs, separate them with a comma (,). (i.e. A2EUQ1WTGCTBG2)
		 * Required
		 */
		marketplaceID: FormControl<string | null | undefined>,

		/**
		 * The Amazon seller ID.
		 * Required
		 */
		sellerID: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification: FormControl<string | null | undefined>,
	}
	export function CreateAmazonMWSLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AmazonMWSLinkedServiceTypePropertiesFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketplaceID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AmazonMWSLinkedServiceTypePropertiesMwsAuthToken {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AmazonMWSLinkedServiceTypePropertiesMwsAuthTokenFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAmazonMWSLinkedServiceTypePropertiesMwsAuthTokenFormGroup() {
		return new FormGroup<AmazonMWSLinkedServiceTypePropertiesMwsAuthTokenFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AmazonMWSLinkedServiceTypePropertiesSecretKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AmazonMWSLinkedServiceTypePropertiesSecretKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAmazonMWSLinkedServiceTypePropertiesSecretKeyFormGroup() {
		return new FormGroup<AmazonMWSLinkedServiceTypePropertiesSecretKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for Amazon Redshift. */
	export interface AmazonRedshiftLinkedService {

		/**
		 * Amazon Redshift linked service properties.
		 * Required
		 */
		typeProperties: AmazonRedshiftLinkedServiceTypeProperties;
	}

	/** Linked service for Amazon Redshift. */
	export interface AmazonRedshiftLinkedServiceFormProperties {
	}
	export function CreateAmazonRedshiftLinkedServiceFormGroup() {
		return new FormGroup<AmazonRedshiftLinkedServiceFormProperties>({
		});

	}


	/** Amazon Redshift linked service properties. */
	export interface AmazonRedshiftLinkedServiceTypeProperties {

		/**
		 * The database name of the Amazon Redshift source. Type: string (or Expression with resultType string).
		 * Required
		 */
		database: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: AmazonRedshiftLinkedServiceTypePropertiesPassword;

		/** The TCP port number that the Amazon Redshift server uses to listen for client connections. The default value is 5439. Type: integer (or Expression with resultType integer). */
		port?: string | null;

		/**
		 * The name of the Amazon Redshift server. Type: string (or Expression with resultType string).
		 * Required
		 */
		server: string;

		/** The username of the Amazon Redshift source. Type: string (or Expression with resultType string). */
		username?: string | null;
	}

	/** Amazon Redshift linked service properties. */
	export interface AmazonRedshiftLinkedServiceTypePropertiesFormProperties {

		/**
		 * The database name of the Amazon Redshift source. Type: string (or Expression with resultType string).
		 * Required
		 */
		database: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The TCP port number that the Amazon Redshift server uses to listen for client connections. The default value is 5439. Type: integer (or Expression with resultType integer). */
		port: FormControl<string | null | undefined>,

		/**
		 * The name of the Amazon Redshift server. Type: string (or Expression with resultType string).
		 * Required
		 */
		server: FormControl<string | null | undefined>,

		/** The username of the Amazon Redshift source. Type: string (or Expression with resultType string). */
		username: FormControl<string | null | undefined>,
	}
	export function CreateAmazonRedshiftLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AmazonRedshiftLinkedServiceTypePropertiesFormProperties>({
			database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AmazonRedshiftLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AmazonRedshiftLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAmazonRedshiftLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<AmazonRedshiftLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for Amazon S3. */
	export interface AmazonS3LinkedService {

		/**
		 * Amazon S3 linked service properties.
		 * Required
		 */
		typeProperties: AmazonS3LinkedServiceTypeProperties;
	}

	/** Linked service for Amazon S3. */
	export interface AmazonS3LinkedServiceFormProperties {
	}
	export function CreateAmazonS3LinkedServiceFormGroup() {
		return new FormGroup<AmazonS3LinkedServiceFormProperties>({
		});

	}


	/** Amazon S3 linked service properties. */
	export interface AmazonS3LinkedServiceTypeProperties {

		/** The access key identifier of the Amazon S3 Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). */
		accessKeyId?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		secretAccessKey?: AmazonS3LinkedServiceTypePropertiesSecretAccessKey;

		/** This value specifies the endpoint to access with the S3 Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). */
		serviceUrl?: string | null;
	}

	/** Amazon S3 linked service properties. */
	export interface AmazonS3LinkedServiceTypePropertiesFormProperties {

		/** The access key identifier of the Amazon S3 Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). */
		accessKeyId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** This value specifies the endpoint to access with the S3 Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). */
		serviceUrl: FormControl<string | null | undefined>,
	}
	export function CreateAmazonS3LinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AmazonS3LinkedServiceTypePropertiesFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			serviceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AmazonS3LinkedServiceTypePropertiesSecretAccessKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AmazonS3LinkedServiceTypePropertiesSecretAccessKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAmazonS3LinkedServiceTypePropertiesSecretAccessKeyFormGroup() {
		return new FormGroup<AmazonS3LinkedServiceTypePropertiesSecretAccessKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure Batch linked service. */
	export interface AzureBatchLinkedService {

		/**
		 * Azure Batch linked service properties.
		 * Required
		 */
		typeProperties: AzureBatchLinkedServiceTypeProperties;
	}

	/** Azure Batch linked service. */
	export interface AzureBatchLinkedServiceFormProperties {
	}
	export function CreateAzureBatchLinkedServiceFormGroup() {
		return new FormGroup<AzureBatchLinkedServiceFormProperties>({
		});

	}


	/** Azure Batch linked service properties. */
	export interface AzureBatchLinkedServiceTypeProperties {

		/** The base definition of a secret type. */
		accessKey?: AzureBatchLinkedServiceTypePropertiesAccessKey;

		/**
		 * The Azure Batch account name. Type: string (or Expression with resultType string).
		 * Required
		 */
		accountName: string;

		/**
		 * The Azure Batch URI. Type: string (or Expression with resultType string).
		 * Required
		 */
		batchUri: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: any;

		/**
		 * The Azure Batch pool name. Type: string (or Expression with resultType string).
		 * Required
		 */
		poolName: string;
	}

	/** Azure Batch linked service properties. */
	export interface AzureBatchLinkedServiceTypePropertiesFormProperties {

		/**
		 * The Azure Batch account name. Type: string (or Expression with resultType string).
		 * Required
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * The Azure Batch URI. Type: string (or Expression with resultType string).
		 * Required
		 */
		batchUri: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: FormControl<any | null | undefined>,

		/**
		 * The Azure Batch pool name. Type: string (or Expression with resultType string).
		 * Required
		 */
		poolName: FormControl<string | null | undefined>,
	}
	export function CreateAzureBatchLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureBatchLinkedServiceTypePropertiesFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			batchUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			linkedServiceName: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			poolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureBatchLinkedServiceTypePropertiesAccessKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureBatchLinkedServiceTypePropertiesAccessKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureBatchLinkedServiceTypePropertiesAccessKeyFormGroup() {
		return new FormGroup<AzureBatchLinkedServiceTypePropertiesAccessKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure Data Lake Storage Gen2 linked service. */
	export interface AzureBlobFSLinkedService {

		/**
		 * Azure Data Lake Storage Gen2 linked service properties.
		 * Required
		 */
		typeProperties: AzureBlobFSLinkedServiceTypeProperties;
	}

	/** Azure Data Lake Storage Gen2 linked service. */
	export interface AzureBlobFSLinkedServiceFormProperties {
	}
	export function CreateAzureBlobFSLinkedServiceFormGroup() {
		return new FormGroup<AzureBlobFSLinkedServiceFormProperties>({
		});

	}


	/** Azure Data Lake Storage Gen2 linked service properties. */
	export interface AzureBlobFSLinkedServiceTypeProperties {

		/** Account key for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string). */
		accountKey?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The ID of the application used to authenticate against the Azure Data Lake Storage Gen2 account. Type: string (or Expression with resultType string). */
		servicePrincipalId?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalKey?: AzureBlobFSLinkedServiceTypePropertiesServicePrincipalKey;

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant?: string | null;

		/**
		 * Endpoint for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: string;
	}

	/** Azure Data Lake Storage Gen2 linked service properties. */
	export interface AzureBlobFSLinkedServiceTypePropertiesFormProperties {

		/** Account key for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string). */
		accountKey: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The ID of the application used to authenticate against the Azure Data Lake Storage Gen2 account. Type: string (or Expression with resultType string). */
		servicePrincipalId: FormControl<string | null | undefined>,

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant: FormControl<string | null | undefined>,

		/**
		 * Endpoint for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobFSLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureBlobFSLinkedServiceTypePropertiesFormProperties>({
			accountKey: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			tenant: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureBlobFSLinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureBlobFSLinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobFSLinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<AzureBlobFSLinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The azure blob storage linked service. */
	export interface AzureBlobStorageLinkedService {

		/**
		 * Azure Blob Storage linked service properties.
		 * Required
		 */
		typeProperties: AzureBlobStorageLinkedServiceTypeProperties;
	}

	/** The azure blob storage linked service. */
	export interface AzureBlobStorageLinkedServiceFormProperties {
	}
	export function CreateAzureBlobStorageLinkedServiceFormGroup() {
		return new FormGroup<AzureBlobStorageLinkedServiceFormProperties>({
		});

	}


	/** Azure Blob Storage linked service properties. */
	export interface AzureBlobStorageLinkedServiceTypeProperties {

		/** Azure Key Vault secret reference. */
		accountKey?: AzureBlobStorageLinkedServiceTypePropertiesAccountKey;

		/** The connection string. It is mutually exclusive with sasUri, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		sasToken?: AzureBlobStorageLinkedServiceTypePropertiesSasToken;

		/** SAS URI of the Azure Blob Storage resource. It is mutually exclusive with connectionString, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference. */
		sasUri?: string | null;

		/** Blob service endpoint of the Azure Blob Storage resource. It is mutually exclusive with connectionString, sasUri property. */
		serviceEndpoint?: string | null;

		/** The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
		servicePrincipalId?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalKey?: AzureBlobStorageLinkedServiceTypePropertiesServicePrincipalKey;

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant?: string | null;
	}

	/** Azure Blob Storage linked service properties. */
	export interface AzureBlobStorageLinkedServiceTypePropertiesFormProperties {

		/** The connection string. It is mutually exclusive with sasUri, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** SAS URI of the Azure Blob Storage resource. It is mutually exclusive with connectionString, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference. */
		sasUri: FormControl<string | null | undefined>,

		/** Blob service endpoint of the Azure Blob Storage resource. It is mutually exclusive with connectionString, sasUri property. */
		serviceEndpoint: FormControl<string | null | undefined>,

		/** The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
		servicePrincipalId: FormControl<string | null | undefined>,

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobStorageLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureBlobStorageLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			sasUri: new FormControl<string | null | undefined>(undefined),
			serviceEndpoint: new FormControl<string | null | undefined>(undefined),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			tenant: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureBlobStorageLinkedServiceTypePropertiesAccountKey {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface AzureBlobStorageLinkedServiceTypePropertiesAccountKeyFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateAzureBlobStorageLinkedServiceTypePropertiesAccountKeyFormGroup() {
		return new FormGroup<AzureBlobStorageLinkedServiceTypePropertiesAccountKeyFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureBlobStorageLinkedServiceTypePropertiesSasToken {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface AzureBlobStorageLinkedServiceTypePropertiesSasTokenFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateAzureBlobStorageLinkedServiceTypePropertiesSasTokenFormGroup() {
		return new FormGroup<AzureBlobStorageLinkedServiceTypePropertiesSasTokenFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureBlobStorageLinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureBlobStorageLinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobStorageLinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<AzureBlobStorageLinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure Data Explorer (Kusto) linked service. */
	export interface AzureDataExplorerLinkedService {

		/**
		 * Azure Data Explorer (Kusto) linked service properties.
		 * Required
		 */
		typeProperties: AzureDataExplorerLinkedServiceTypeProperties;
	}

	/** Azure Data Explorer (Kusto) linked service. */
	export interface AzureDataExplorerLinkedServiceFormProperties {
	}
	export function CreateAzureDataExplorerLinkedServiceFormGroup() {
		return new FormGroup<AzureDataExplorerLinkedServiceFormProperties>({
		});

	}


	/** Azure Data Explorer (Kusto) linked service properties. */
	export interface AzureDataExplorerLinkedServiceTypeProperties {

		/**
		 * Database name for connection. Type: string (or Expression with resultType string).
		 * Required
		 */
		database: string;

		/**
		 * The endpoint of Azure Data Explorer (the engine's endpoint). URL will be in the format https://<clusterName>.<regionName>.kusto.windows.net. Type: string (or Expression with resultType string)
		 * Required
		 */
		endpoint: string;

		/**
		 * The ID of the service principal used to authenticate against Azure Data Explorer. Type: string (or Expression with resultType string).
		 * Required
		 */
		servicePrincipalId: string;

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		servicePrincipalKey: AzureDataExplorerLinkedServiceTypePropertiesServicePrincipalKey;

		/**
		 * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
		 * Required
		 */
		tenant: string;
	}

	/** Azure Data Explorer (Kusto) linked service properties. */
	export interface AzureDataExplorerLinkedServiceTypePropertiesFormProperties {

		/**
		 * Database name for connection. Type: string (or Expression with resultType string).
		 * Required
		 */
		database: FormControl<string | null | undefined>,

		/**
		 * The endpoint of Azure Data Explorer (the engine's endpoint). URL will be in the format https://<clusterName>.<regionName>.kusto.windows.net. Type: string (or Expression with resultType string)
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,

		/**
		 * The ID of the service principal used to authenticate against Azure Data Explorer. Type: string (or Expression with resultType string).
		 * Required
		 */
		servicePrincipalId: FormControl<string | null | undefined>,

		/**
		 * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
		 * Required
		 */
		tenant: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataExplorerLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureDataExplorerLinkedServiceTypePropertiesFormProperties>({
			database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenant: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureDataExplorerLinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureDataExplorerLinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataExplorerLinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<AzureDataExplorerLinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure Data Lake Analytics linked service. */
	export interface AzureDataLakeAnalyticsLinkedService {

		/**
		 * Azure Data Lake Analytics linked service properties.
		 * Required
		 */
		typeProperties: AzureDataLakeAnalyticsLinkedServiceTypeProperties;
	}

	/** Azure Data Lake Analytics linked service. */
	export interface AzureDataLakeAnalyticsLinkedServiceFormProperties {
	}
	export function CreateAzureDataLakeAnalyticsLinkedServiceFormGroup() {
		return new FormGroup<AzureDataLakeAnalyticsLinkedServiceFormProperties>({
		});

	}


	/** Azure Data Lake Analytics linked service properties. */
	export interface AzureDataLakeAnalyticsLinkedServiceTypeProperties {

		/**
		 * The Azure Data Lake Analytics account name. Type: string (or Expression with resultType string).
		 * Required
		 */
		accountName: string;

		/** Azure Data Lake Analytics URI Type: string (or Expression with resultType string). */
		dataLakeAnalyticsUri?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Data Lake Analytics account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string). */
		resourceGroupName?: string | null;

		/** The ID of the application used to authenticate against the Azure Data Lake Analytics account. Type: string (or Expression with resultType string). */
		servicePrincipalId?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalKey?: AzureDataLakeAnalyticsLinkedServiceTypePropertiesServicePrincipalKey;

		/** Data Lake Analytics account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string). */
		subscriptionId?: string | null;

		/**
		 * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
		 * Required
		 */
		tenant: string;
	}

	/** Azure Data Lake Analytics linked service properties. */
	export interface AzureDataLakeAnalyticsLinkedServiceTypePropertiesFormProperties {

		/**
		 * The Azure Data Lake Analytics account name. Type: string (or Expression with resultType string).
		 * Required
		 */
		accountName: FormControl<string | null | undefined>,

		/** Azure Data Lake Analytics URI Type: string (or Expression with resultType string). */
		dataLakeAnalyticsUri: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** Data Lake Analytics account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string). */
		resourceGroupName: FormControl<string | null | undefined>,

		/** The ID of the application used to authenticate against the Azure Data Lake Analytics account. Type: string (or Expression with resultType string). */
		servicePrincipalId: FormControl<string | null | undefined>,

		/** Data Lake Analytics account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string). */
		subscriptionId: FormControl<string | null | undefined>,

		/**
		 * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
		 * Required
		 */
		tenant: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataLakeAnalyticsLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureDataLakeAnalyticsLinkedServiceTypePropertiesFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataLakeAnalyticsUri: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenant: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureDataLakeAnalyticsLinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureDataLakeAnalyticsLinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataLakeAnalyticsLinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<AzureDataLakeAnalyticsLinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure Data Lake Store linked service. */
	export interface AzureDataLakeStoreLinkedService {

		/**
		 * Azure Data Lake Store linked service properties.
		 * Required
		 */
		typeProperties: AzureDataLakeStoreLinkedServiceTypeProperties;
	}

	/** Azure Data Lake Store linked service. */
	export interface AzureDataLakeStoreLinkedServiceFormProperties {
	}
	export function CreateAzureDataLakeStoreLinkedServiceFormGroup() {
		return new FormGroup<AzureDataLakeStoreLinkedServiceFormProperties>({
		});

	}


	/** Azure Data Lake Store linked service properties. */
	export interface AzureDataLakeStoreLinkedServiceTypeProperties {

		/** Data Lake Store account name. Type: string (or Expression with resultType string). */
		accountName?: string | null;

		/**
		 * Data Lake Store service URI. Type: string (or Expression with resultType string).
		 * Required
		 */
		dataLakeStoreUri: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Data Lake Store account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string). */
		resourceGroupName?: string | null;

		/** The ID of the application used to authenticate against the Azure Data Lake Store account. Type: string (or Expression with resultType string). */
		servicePrincipalId?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalKey?: AzureDataLakeStoreLinkedServiceTypePropertiesServicePrincipalKey;

		/** Data Lake Store account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string). */
		subscriptionId?: string | null;

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant?: string | null;
	}

	/** Azure Data Lake Store linked service properties. */
	export interface AzureDataLakeStoreLinkedServiceTypePropertiesFormProperties {

		/** Data Lake Store account name. Type: string (or Expression with resultType string). */
		accountName: FormControl<string | null | undefined>,

		/**
		 * Data Lake Store service URI. Type: string (or Expression with resultType string).
		 * Required
		 */
		dataLakeStoreUri: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** Data Lake Store account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string). */
		resourceGroupName: FormControl<string | null | undefined>,

		/** The ID of the application used to authenticate against the Azure Data Lake Store account. Type: string (or Expression with resultType string). */
		servicePrincipalId: FormControl<string | null | undefined>,

		/** Data Lake Store account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string). */
		subscriptionId: FormControl<string | null | undefined>,

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataLakeStoreLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureDataLakeStoreLinkedServiceTypePropertiesFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			dataLakeStoreUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenant: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureDataLakeStoreLinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureDataLakeStoreLinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataLakeStoreLinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<AzureDataLakeStoreLinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure Databricks linked service. */
	export interface AzureDatabricksLinkedService {

		/**
		 * Azure Databricks linked service properties.
		 * Required
		 */
		typeProperties: AzureDatabricksLinkedServiceTypeProperties;
	}

	/** Azure Databricks linked service. */
	export interface AzureDatabricksLinkedServiceFormProperties {
	}
	export function CreateAzureDatabricksLinkedServiceFormGroup() {
		return new FormGroup<AzureDatabricksLinkedServiceFormProperties>({
		});

	}


	/** Azure Databricks linked service properties. */
	export interface AzureDatabricksLinkedServiceTypeProperties {

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		accessToken: AzureDatabricksLinkedServiceTypePropertiesAccessToken;

		/**
		 * <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
		 * Required
		 */
		domain: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The id of an existing interactive cluster that will be used for all runs of this activity. Type: string (or Expression with resultType string). */
		existingClusterId?: string | null;

		/** The id of an existing instance pool that will be used for all runs of this activity. Type: string (or Expression with resultType string). */
		instancePoolId?: string | null;

		/** Additional tags for cluster resources. This property is ignored in instance pool configurations. */
		newClusterCustomTags?: {[id: string]: any };

		/** The driver node type for the new job cluster. This property is ignored in instance pool configurations. Type: string (or Expression with resultType string). */
		newClusterDriverNodeType?: string | null;

		/** Enable the elastic disk on the new cluster. This property is now ignored, and takes the default elastic disk behavior in Databricks (elastic disks are always enabled). Type: boolean (or Expression with resultType boolean). */
		newClusterEnableElasticDisk?: string | null;

		/** User-defined initialization scripts for the new cluster. Type: array of strings (or Expression with resultType array of strings). */
		newClusterInitScripts?: string | null;

		/** The node type of the new job cluster. This property is required if newClusterVersion is specified and instancePoolId is not specified. If instancePoolId is specified, this property is ignored. Type: string (or Expression with resultType string). */
		newClusterNodeType?: string | null;

		/** If not using an existing interactive cluster, this specifies the number of worker nodes to use for the new job cluster or instance pool. For new job clusters, this a string-formatted Int32, like '1' means numOfWorker is 1 or '1:10' means auto-scale from 1 (min) to 10 (max). For instance pools, this is a string-formatted Int32, and can only specify a fixed number of worker nodes, such as '2'. Required if newClusterVersion is specified. Type: string (or Expression with resultType string). */
		newClusterNumOfWorker?: string | null;

		/** A set of optional, user-specified Spark configuration key-value pairs. */
		newClusterSparkConf?: {[id: string]: any };

		/** A set of optional, user-specified Spark environment variables key-value pairs. */
		newClusterSparkEnvVars?: {[id: string]: any };

		/** If not using an existing interactive cluster, this specifies the Spark version of a new job cluster or instance pool nodes created for each run of this activity. Required if instancePoolId is specified. Type: string (or Expression with resultType string). */
		newClusterVersion?: string | null;
	}

	/** Azure Databricks linked service properties. */
	export interface AzureDatabricksLinkedServiceTypePropertiesFormProperties {

		/**
		 * <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The id of an existing interactive cluster that will be used for all runs of this activity. Type: string (or Expression with resultType string). */
		existingClusterId: FormControl<string | null | undefined>,

		/** The id of an existing instance pool that will be used for all runs of this activity. Type: string (or Expression with resultType string). */
		instancePoolId: FormControl<string | null | undefined>,

		/** Additional tags for cluster resources. This property is ignored in instance pool configurations. */
		newClusterCustomTags: FormControl<{[id: string]: any } | null | undefined>,

		/** The driver node type for the new job cluster. This property is ignored in instance pool configurations. Type: string (or Expression with resultType string). */
		newClusterDriverNodeType: FormControl<string | null | undefined>,

		/** Enable the elastic disk on the new cluster. This property is now ignored, and takes the default elastic disk behavior in Databricks (elastic disks are always enabled). Type: boolean (or Expression with resultType boolean). */
		newClusterEnableElasticDisk: FormControl<string | null | undefined>,

		/** User-defined initialization scripts for the new cluster. Type: array of strings (or Expression with resultType array of strings). */
		newClusterInitScripts: FormControl<string | null | undefined>,

		/** The node type of the new job cluster. This property is required if newClusterVersion is specified and instancePoolId is not specified. If instancePoolId is specified, this property is ignored. Type: string (or Expression with resultType string). */
		newClusterNodeType: FormControl<string | null | undefined>,

		/** If not using an existing interactive cluster, this specifies the number of worker nodes to use for the new job cluster or instance pool. For new job clusters, this a string-formatted Int32, like '1' means numOfWorker is 1 or '1:10' means auto-scale from 1 (min) to 10 (max). For instance pools, this is a string-formatted Int32, and can only specify a fixed number of worker nodes, such as '2'. Required if newClusterVersion is specified. Type: string (or Expression with resultType string). */
		newClusterNumOfWorker: FormControl<string | null | undefined>,

		/** A set of optional, user-specified Spark configuration key-value pairs. */
		newClusterSparkConf: FormControl<{[id: string]: any } | null | undefined>,

		/** A set of optional, user-specified Spark environment variables key-value pairs. */
		newClusterSparkEnvVars: FormControl<{[id: string]: any } | null | undefined>,

		/** If not using an existing interactive cluster, this specifies the Spark version of a new job cluster or instance pool nodes created for each run of this activity. Required if instancePoolId is specified. Type: string (or Expression with resultType string). */
		newClusterVersion: FormControl<string | null | undefined>,
	}
	export function CreateAzureDatabricksLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureDatabricksLinkedServiceTypePropertiesFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			existingClusterId: new FormControl<string | null | undefined>(undefined),
			instancePoolId: new FormControl<string | null | undefined>(undefined),
			newClusterCustomTags: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			newClusterDriverNodeType: new FormControl<string | null | undefined>(undefined),
			newClusterEnableElasticDisk: new FormControl<string | null | undefined>(undefined),
			newClusterInitScripts: new FormControl<string | null | undefined>(undefined),
			newClusterNodeType: new FormControl<string | null | undefined>(undefined),
			newClusterNumOfWorker: new FormControl<string | null | undefined>(undefined),
			newClusterSparkConf: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			newClusterSparkEnvVars: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			newClusterVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureDatabricksLinkedServiceTypePropertiesAccessToken {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureDatabricksLinkedServiceTypePropertiesAccessTokenFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureDatabricksLinkedServiceTypePropertiesAccessTokenFormGroup() {
		return new FormGroup<AzureDatabricksLinkedServiceTypePropertiesAccessTokenFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure File Storage linked service. */
	export interface AzureFileStorageLinkedService {

		/**
		 * Azure File Storage linked service properties.
		 * Required
		 */
		typeProperties: AzureFileStorageLinkedServiceTypeProperties;
	}

	/** Azure File Storage linked service. */
	export interface AzureFileStorageLinkedServiceFormProperties {
	}
	export function CreateAzureFileStorageLinkedServiceFormGroup() {
		return new FormGroup<AzureFileStorageLinkedServiceFormProperties>({
		});

	}


	/** Azure File Storage linked service properties. */
	export interface AzureFileStorageLinkedServiceTypeProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * Host name of the server. Type: string (or Expression with resultType string).
		 * Required
		 */
		host: string;

		/** The base definition of a secret type. */
		password?: AzureFileStorageLinkedServiceTypePropertiesPassword;

		/** User ID to logon the server. Type: string (or Expression with resultType string). */
		userId?: string | null;
	}

	/** Azure File Storage linked service properties. */
	export interface AzureFileStorageLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * Host name of the server. Type: string (or Expression with resultType string).
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** User ID to logon the server. Type: string (or Expression with resultType string). */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateAzureFileStorageLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureFileStorageLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureFileStorageLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureFileStorageLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureFileStorageLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<AzureFileStorageLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure Function linked service. */
	export interface AzureFunctionLinkedService {

		/**
		 * Azure Function linked service properties.
		 * Required
		 */
		typeProperties: AzureFunctionLinkedServiceTypeProperties;
	}

	/** Azure Function linked service. */
	export interface AzureFunctionLinkedServiceFormProperties {
	}
	export function CreateAzureFunctionLinkedServiceFormGroup() {
		return new FormGroup<AzureFunctionLinkedServiceFormProperties>({
		});

	}


	/** Azure Function linked service properties. */
	export interface AzureFunctionLinkedServiceTypeProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The endpoint of the Azure Function App. URL will be in the format https://<accountName>.azurewebsites.net.
		 * Required
		 */
		functionAppUrl: string;

		/** The base definition of a secret type. */
		functionKey?: AzureFunctionLinkedServiceTypePropertiesFunctionKey;
	}

	/** Azure Function linked service properties. */
	export interface AzureFunctionLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The endpoint of the Azure Function App. URL will be in the format https://<accountName>.azurewebsites.net.
		 * Required
		 */
		functionAppUrl: FormControl<string | null | undefined>,
	}
	export function CreateAzureFunctionLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureFunctionLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			functionAppUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureFunctionLinkedServiceTypePropertiesFunctionKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureFunctionLinkedServiceTypePropertiesFunctionKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureFunctionLinkedServiceTypePropertiesFunctionKeyFormGroup() {
		return new FormGroup<AzureFunctionLinkedServiceTypePropertiesFunctionKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure Key Vault linked service. */
	export interface AzureKeyVaultLinkedService {

		/**
		 * Azure Key Vault linked service properties.
		 * Required
		 */
		typeProperties: AzureKeyVaultLinkedServiceTypeProperties;
	}

	/** Azure Key Vault linked service. */
	export interface AzureKeyVaultLinkedServiceFormProperties {
	}
	export function CreateAzureKeyVaultLinkedServiceFormGroup() {
		return new FormGroup<AzureKeyVaultLinkedServiceFormProperties>({
		});

	}


	/** Azure Key Vault linked service properties. */
	export interface AzureKeyVaultLinkedServiceTypeProperties {

		/**
		 * The base URL of the Azure Key Vault. e.g. https://myakv.vault.azure.net Type: string (or Expression with resultType string).
		 * Required
		 */
		baseUrl: string;
	}

	/** Azure Key Vault linked service properties. */
	export interface AzureKeyVaultLinkedServiceTypePropertiesFormProperties {

		/**
		 * The base URL of the Azure Key Vault. e.g. https://myakv.vault.azure.net Type: string (or Expression with resultType string).
		 * Required
		 */
		baseUrl: FormControl<string | null | undefined>,
	}
	export function CreateAzureKeyVaultLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureKeyVaultLinkedServiceTypePropertiesFormProperties>({
			baseUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure ML Studio Web Service linked service. */
	export interface AzureMLLinkedService {

		/**
		 * Azure ML Studio Web Service linked service properties.
		 * Required
		 */
		typeProperties: AzureMLLinkedServiceTypeProperties;
	}

	/** Azure ML Studio Web Service linked service. */
	export interface AzureMLLinkedServiceFormProperties {
	}
	export function CreateAzureMLLinkedServiceFormGroup() {
		return new FormGroup<AzureMLLinkedServiceFormProperties>({
		});

	}


	/** Azure ML Studio Web Service linked service properties. */
	export interface AzureMLLinkedServiceTypeProperties {

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		apiKey: AzureMLLinkedServiceTypePropertiesApiKey;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The Batch Execution REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string).
		 * Required
		 */
		mlEndpoint: string;

		/** The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. Type: string (or Expression with resultType string). */
		servicePrincipalId?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalKey?: AzureMLLinkedServiceTypePropertiesServicePrincipalKey;

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant?: string | null;

		/** The Update Resource REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string). */
		updateResourceEndpoint?: string | null;
	}

	/** Azure ML Studio Web Service linked service properties. */
	export interface AzureMLLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The Batch Execution REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string).
		 * Required
		 */
		mlEndpoint: FormControl<string | null | undefined>,

		/** The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. Type: string (or Expression with resultType string). */
		servicePrincipalId: FormControl<string | null | undefined>,

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant: FormControl<string | null | undefined>,

		/** The Update Resource REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string). */
		updateResourceEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateAzureMLLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureMLLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			mlEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			tenant: new FormControl<string | null | undefined>(undefined),
			updateResourceEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureMLLinkedServiceTypePropertiesApiKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureMLLinkedServiceTypePropertiesApiKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureMLLinkedServiceTypePropertiesApiKeyFormGroup() {
		return new FormGroup<AzureMLLinkedServiceTypePropertiesApiKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureMLLinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureMLLinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureMLLinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<AzureMLLinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure ML Service linked service. */
	export interface AzureMLServiceLinkedService {

		/**
		 * Azure ML Service linked service properties.
		 * Required
		 */
		typeProperties: AzureMLServiceLinkedServiceTypeProperties;
	}

	/** Azure ML Service linked service. */
	export interface AzureMLServiceLinkedServiceFormProperties {
	}
	export function CreateAzureMLServiceLinkedServiceFormGroup() {
		return new FormGroup<AzureMLServiceLinkedServiceFormProperties>({
		});

	}


	/** Azure ML Service linked service properties. */
	export interface AzureMLServiceLinkedServiceTypeProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * Azure ML Service workspace name. Type: string (or Expression with resultType string).
		 * Required
		 */
		mlWorkspaceName: string;

		/**
		 * Azure ML Service workspace resource group name. Type: string (or Expression with resultType string).
		 * Required
		 */
		resourceGroupName: string;

		/** The ID of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. Type: string (or Expression with resultType string). */
		servicePrincipalId?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalKey?: AzureMLServiceLinkedServiceTypePropertiesServicePrincipalKey;

		/**
		 * Azure ML Service workspace subscription ID. Type: string (or Expression with resultType string).
		 * Required
		 */
		subscriptionId: string;

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant?: string | null;
	}

	/** Azure ML Service linked service properties. */
	export interface AzureMLServiceLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * Azure ML Service workspace name. Type: string (or Expression with resultType string).
		 * Required
		 */
		mlWorkspaceName: FormControl<string | null | undefined>,

		/**
		 * Azure ML Service workspace resource group name. Type: string (or Expression with resultType string).
		 * Required
		 */
		resourceGroupName: FormControl<string | null | undefined>,

		/** The ID of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. Type: string (or Expression with resultType string). */
		servicePrincipalId: FormControl<string | null | undefined>,

		/**
		 * Azure ML Service workspace subscription ID. Type: string (or Expression with resultType string).
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant: FormControl<string | null | undefined>,
	}
	export function CreateAzureMLServiceLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureMLServiceLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			mlWorkspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenant: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureMLServiceLinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureMLServiceLinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureMLServiceLinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<AzureMLServiceLinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure Database for MariaDB linked service. */
	export interface AzureMariaDBLinkedService {

		/**
		 * Azure Database for MariaDB linked service properties.
		 * Required
		 */
		typeProperties: AzureMariaDBLinkedServiceTypeProperties;
	}

	/** Azure Database for MariaDB linked service. */
	export interface AzureMariaDBLinkedServiceFormProperties {
	}
	export function CreateAzureMariaDBLinkedServiceFormGroup() {
		return new FormGroup<AzureMariaDBLinkedServiceFormProperties>({
		});

	}


	/** Azure Database for MariaDB linked service properties. */
	export interface AzureMariaDBLinkedServiceTypeProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		pwd?: AzureMariaDBLinkedServiceTypePropertiesPwd;
	}

	/** Azure Database for MariaDB linked service properties. */
	export interface AzureMariaDBLinkedServiceTypePropertiesFormProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,
	}
	export function CreateAzureMariaDBLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureMariaDBLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureMariaDBLinkedServiceTypePropertiesPwd {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface AzureMariaDBLinkedServiceTypePropertiesPwdFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateAzureMariaDBLinkedServiceTypePropertiesPwdFormGroup() {
		return new FormGroup<AzureMariaDBLinkedServiceTypePropertiesPwdFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure MySQL database linked service. */
	export interface AzureMySqlLinkedService {

		/**
		 * Azure MySQL database linked service properties.
		 * Required
		 */
		typeProperties: AzureMySqlLinkedServiceTypeProperties;
	}

	/** Azure MySQL database linked service. */
	export interface AzureMySqlLinkedServiceFormProperties {
	}
	export function CreateAzureMySqlLinkedServiceFormGroup() {
		return new FormGroup<AzureMySqlLinkedServiceFormProperties>({
		});

	}


	/** Azure MySQL database linked service properties. */
	export interface AzureMySqlLinkedServiceTypeProperties {

		/**
		 * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		password?: AzureMySqlLinkedServiceTypePropertiesPassword;
	}

	/** Azure MySQL database linked service properties. */
	export interface AzureMySqlLinkedServiceTypePropertiesFormProperties {

		/**
		 * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,
	}
	export function CreateAzureMySqlLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureMySqlLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureMySqlLinkedServiceTypePropertiesPassword {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface AzureMySqlLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateAzureMySqlLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<AzureMySqlLinkedServiceTypePropertiesPasswordFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure PostgreSQL linked service. */
	export interface AzurePostgreSqlLinkedService {

		/**
		 * Azure PostgreSQL linked service properties.
		 * Required
		 */
		typeProperties: AzurePostgreSqlLinkedServiceTypeProperties;
	}

	/** Azure PostgreSQL linked service. */
	export interface AzurePostgreSqlLinkedServiceFormProperties {
	}
	export function CreateAzurePostgreSqlLinkedServiceFormGroup() {
		return new FormGroup<AzurePostgreSqlLinkedServiceFormProperties>({
		});

	}


	/** Azure PostgreSQL linked service properties. */
	export interface AzurePostgreSqlLinkedServiceTypeProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		password?: AzurePostgreSqlLinkedServiceTypePropertiesPassword;
	}

	/** Azure PostgreSQL linked service properties. */
	export interface AzurePostgreSqlLinkedServiceTypePropertiesFormProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,
	}
	export function CreateAzurePostgreSqlLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzurePostgreSqlLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzurePostgreSqlLinkedServiceTypePropertiesPassword {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface AzurePostgreSqlLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateAzurePostgreSqlLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<AzurePostgreSqlLinkedServiceTypePropertiesPasswordFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for Windows Azure Search Service. */
	export interface AzureSearchLinkedService {

		/**
		 * Windows Azure Search Service linked service properties.
		 * Required
		 */
		typeProperties: AzureSearchLinkedServiceTypeProperties;
	}

	/** Linked service for Windows Azure Search Service. */
	export interface AzureSearchLinkedServiceFormProperties {
	}
	export function CreateAzureSearchLinkedServiceFormGroup() {
		return new FormGroup<AzureSearchLinkedServiceFormProperties>({
		});

	}


	/** Windows Azure Search Service linked service properties. */
	export interface AzureSearchLinkedServiceTypeProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		key?: AzureSearchLinkedServiceTypePropertiesKey;

		/**
		 * URL for Azure Search service. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: string;
	}

	/** Windows Azure Search Service linked service properties. */
	export interface AzureSearchLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * URL for Azure Search service. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAzureSearchLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureSearchLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureSearchLinkedServiceTypePropertiesKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureSearchLinkedServiceTypePropertiesKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureSearchLinkedServiceTypePropertiesKeyFormGroup() {
		return new FormGroup<AzureSearchLinkedServiceTypePropertiesKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure SQL Data Warehouse linked service. */
	export interface AzureSqlDWLinkedService {

		/**
		 * Azure SQL Data Warehouse linked service properties.
		 * Required
		 */
		typeProperties: AzureSqlDWLinkedServiceTypeProperties;
	}

	/** Azure SQL Data Warehouse linked service. */
	export interface AzureSqlDWLinkedServiceFormProperties {
	}
	export function CreateAzureSqlDWLinkedServiceFormGroup() {
		return new FormGroup<AzureSqlDWLinkedServiceFormProperties>({
		});

	}


	/** Azure SQL Data Warehouse linked service properties. */
	export interface AzureSqlDWLinkedServiceTypeProperties {

		/**
		 * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		password?: AzureSqlDWLinkedServiceTypePropertiesPassword;

		/** The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
		servicePrincipalId?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalKey?: AzureSqlDWLinkedServiceTypePropertiesServicePrincipalKey;

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant?: string | null;
	}

	/** Azure SQL Data Warehouse linked service properties. */
	export interface AzureSqlDWLinkedServiceTypePropertiesFormProperties {

		/**
		 * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
		servicePrincipalId: FormControl<string | null | undefined>,

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant: FormControl<string | null | undefined>,
	}
	export function CreateAzureSqlDWLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureSqlDWLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			tenant: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureSqlDWLinkedServiceTypePropertiesPassword {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface AzureSqlDWLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateAzureSqlDWLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<AzureSqlDWLinkedServiceTypePropertiesPasswordFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureSqlDWLinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureSqlDWLinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureSqlDWLinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<AzureSqlDWLinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Microsoft Azure SQL Database linked service. */
	export interface AzureSqlDatabaseLinkedService {

		/**
		 * Azure SQL Database linked service properties.
		 * Required
		 */
		typeProperties: AzureSqlDatabaseLinkedServiceTypeProperties;
	}

	/** Microsoft Azure SQL Database linked service. */
	export interface AzureSqlDatabaseLinkedServiceFormProperties {
	}
	export function CreateAzureSqlDatabaseLinkedServiceFormGroup() {
		return new FormGroup<AzureSqlDatabaseLinkedServiceFormProperties>({
		});

	}


	/** Azure SQL Database linked service properties. */
	export interface AzureSqlDatabaseLinkedServiceTypeProperties {

		/**
		 * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		password?: AzureSqlDatabaseLinkedServiceTypePropertiesPassword;

		/** The ID of the service principal used to authenticate against Azure SQL Database. Type: string (or Expression with resultType string). */
		servicePrincipalId?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalKey?: AzureSqlDatabaseLinkedServiceTypePropertiesServicePrincipalKey;

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant?: string | null;
	}

	/** Azure SQL Database linked service properties. */
	export interface AzureSqlDatabaseLinkedServiceTypePropertiesFormProperties {

		/**
		 * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The ID of the service principal used to authenticate against Azure SQL Database. Type: string (or Expression with resultType string). */
		servicePrincipalId: FormControl<string | null | undefined>,

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant: FormControl<string | null | undefined>,
	}
	export function CreateAzureSqlDatabaseLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureSqlDatabaseLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			tenant: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureSqlDatabaseLinkedServiceTypePropertiesPassword {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface AzureSqlDatabaseLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateAzureSqlDatabaseLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<AzureSqlDatabaseLinkedServiceTypePropertiesPasswordFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureSqlDatabaseLinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureSqlDatabaseLinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureSqlDatabaseLinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<AzureSqlDatabaseLinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure SQL Managed Instance linked service. */
	export interface AzureSqlMILinkedService {

		/**
		 * Azure SQL Managed Instance linked service properties.
		 * Required
		 */
		typeProperties: AzureSqlMILinkedServiceTypeProperties;
	}

	/** Azure SQL Managed Instance linked service. */
	export interface AzureSqlMILinkedServiceFormProperties {
	}
	export function CreateAzureSqlMILinkedServiceFormGroup() {
		return new FormGroup<AzureSqlMILinkedServiceFormProperties>({
		});

	}


	/** Azure SQL Managed Instance linked service properties. */
	export interface AzureSqlMILinkedServiceTypeProperties {

		/**
		 * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		password?: AzureSqlMILinkedServiceTypePropertiesPassword;

		/** The ID of the service principal used to authenticate against Azure SQL Managed Instance. Type: string (or Expression with resultType string). */
		servicePrincipalId?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalKey?: AzureSqlMILinkedServiceTypePropertiesServicePrincipalKey;

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant?: string | null;
	}

	/** Azure SQL Managed Instance linked service properties. */
	export interface AzureSqlMILinkedServiceTypePropertiesFormProperties {

		/**
		 * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The ID of the service principal used to authenticate against Azure SQL Managed Instance. Type: string (or Expression with resultType string). */
		servicePrincipalId: FormControl<string | null | undefined>,

		/** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
		tenant: FormControl<string | null | undefined>,
	}
	export function CreateAzureSqlMILinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureSqlMILinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			tenant: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureSqlMILinkedServiceTypePropertiesPassword {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface AzureSqlMILinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateAzureSqlMILinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<AzureSqlMILinkedServiceTypePropertiesPasswordFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureSqlMILinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface AzureSqlMILinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureSqlMILinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<AzureSqlMILinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The storage account linked service. */
	export interface AzureStorageLinkedService {

		/**
		 * Azure Storage linked service properties.
		 * Required
		 */
		typeProperties: AzureStorageLinkedServiceTypeProperties;
	}

	/** The storage account linked service. */
	export interface AzureStorageLinkedServiceFormProperties {
	}
	export function CreateAzureStorageLinkedServiceFormGroup() {
		return new FormGroup<AzureStorageLinkedServiceFormProperties>({
		});

	}


	/** Azure Storage linked service properties. */
	export interface AzureStorageLinkedServiceTypeProperties {

		/** Azure Key Vault secret reference. */
		accountKey?: AzureStorageLinkedServiceTypePropertiesAccountKey;

		/** The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		sasToken?: AzureStorageLinkedServiceTypePropertiesSasToken;

		/** SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference. */
		sasUri?: string | null;
	}

	/** Azure Storage linked service properties. */
	export interface AzureStorageLinkedServiceTypePropertiesFormProperties {

		/** The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference. */
		sasUri: FormControl<string | null | undefined>,
	}
	export function CreateAzureStorageLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<AzureStorageLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			sasUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureStorageLinkedServiceTypePropertiesAccountKey {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface AzureStorageLinkedServiceTypePropertiesAccountKeyFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateAzureStorageLinkedServiceTypePropertiesAccountKeyFormGroup() {
		return new FormGroup<AzureStorageLinkedServiceTypePropertiesAccountKeyFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureStorageLinkedServiceTypePropertiesSasToken {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface AzureStorageLinkedServiceTypePropertiesSasTokenFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateAzureStorageLinkedServiceTypePropertiesSasTokenFormGroup() {
		return new FormGroup<AzureStorageLinkedServiceTypePropertiesSasTokenFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The azure table storage linked service. */
	export interface AzureTableStorageLinkedService {

		/**
		 * Azure Storage linked service properties.
		 * Required
		 */
		typeProperties: AzureStorageLinkedServiceTypeProperties;
	}

	/** The azure table storage linked service. */
	export interface AzureTableStorageLinkedServiceFormProperties {
	}
	export function CreateAzureTableStorageLinkedServiceFormGroup() {
		return new FormGroup<AzureTableStorageLinkedServiceFormProperties>({
		});

	}


	/** Linked service for Cassandra data source. */
	export interface CassandraLinkedService {

		/**
		 * Cassandra linked service properties.
		 * Required
		 */
		typeProperties: CassandraLinkedServiceTypeProperties;
	}

	/** Linked service for Cassandra data source. */
	export interface CassandraLinkedServiceFormProperties {
	}
	export function CreateCassandraLinkedServiceFormGroup() {
		return new FormGroup<CassandraLinkedServiceFormProperties>({
		});

	}


	/** Cassandra linked service properties. */
	export interface CassandraLinkedServiceTypeProperties {

		/** AuthenticationType to be used for connection. Type: string (or Expression with resultType string). */
		authenticationType?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * Host name for connection. Type: string (or Expression with resultType string).
		 * Required
		 */
		host: string;

		/** The base definition of a secret type. */
		password?: CassandraLinkedServiceTypePropertiesPassword;

		/** The port for the connection. Type: integer (or Expression with resultType integer). */
		port?: string | null;

		/** Username for authentication. Type: string (or Expression with resultType string). */
		username?: string | null;
	}

	/** Cassandra linked service properties. */
	export interface CassandraLinkedServiceTypePropertiesFormProperties {

		/** AuthenticationType to be used for connection. Type: string (or Expression with resultType string). */
		authenticationType: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * Host name for connection. Type: string (or Expression with resultType string).
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** The port for the connection. Type: integer (or Expression with resultType integer). */
		port: FormControl<string | null | undefined>,

		/** Username for authentication. Type: string (or Expression with resultType string). */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCassandraLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<CassandraLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CassandraLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface CassandraLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCassandraLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<CassandraLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Common Data Service for Apps linked service. */
	export interface CommonDataServiceForAppsLinkedService {

		/**
		 * Common Data Service for Apps linked service properties.
		 * Required
		 */
		typeProperties: CommonDataServiceForAppsLinkedServiceTypeProperties;
	}

	/** Common Data Service for Apps linked service. */
	export interface CommonDataServiceForAppsLinkedServiceFormProperties {
	}
	export function CreateCommonDataServiceForAppsLinkedServiceFormGroup() {
		return new FormGroup<CommonDataServiceForAppsLinkedServiceFormProperties>({
		});

	}


	/** Common Data Service for Apps linked service properties. */
	export interface CommonDataServiceForAppsLinkedServiceTypeProperties {

		/**
		 * The authentication type to connect to Common Data Service for Apps server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
		 * Required
		 */
		authenticationType: CommonDataServiceForAppsLinkedServiceTypePropertiesAuthenticationType;

		/**
		 * The deployment type of the Common Data Service for Apps instance. 'Online' for Common Data Service for Apps Online and 'OnPremisesWithIfd' for Common Data Service for Apps on-premises with Ifd. Type: string (or Expression with resultType string).
		 * Required
		 */
		deploymentType: CommonDataServiceForAppsLinkedServiceTypePropertiesDeploymentType;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The host name of the on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
		hostName?: string | null;

		/** The organization name of the Common Data Service for Apps instance. The property is required for on-prem and required for online when there are more than one Common Data Service for Apps instances associated with the user. Type: string (or Expression with resultType string). */
		organizationName?: string | null;

		/** The base definition of a secret type. */
		password?: CommonDataServiceForAppsLinkedServiceTypePropertiesPassword;

		/** The port of on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
		port?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalCredential?: CommonDataServiceForAppsLinkedServiceTypePropertiesServicePrincipalCredential;

		/** The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). */
		servicePrincipalCredentialType?: CommonDataServiceForAppsLinkedServiceTypePropertiesServicePrincipalCredentialType;

		/** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
		servicePrincipalId?: string | null;

		/** The URL to the Microsoft Common Data Service for Apps server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
		serviceUri?: string | null;

		/** User name to access the Common Data Service for Apps instance. Type: string (or Expression with resultType string). */
		username?: string | null;
	}

	/** Common Data Service for Apps linked service properties. */
	export interface CommonDataServiceForAppsLinkedServiceTypePropertiesFormProperties {

		/**
		 * The authentication type to connect to Common Data Service for Apps server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
		 * Required
		 */
		authenticationType: FormControl<CommonDataServiceForAppsLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/**
		 * The deployment type of the Common Data Service for Apps instance. 'Online' for Common Data Service for Apps Online and 'OnPremisesWithIfd' for Common Data Service for Apps on-premises with Ifd. Type: string (or Expression with resultType string).
		 * Required
		 */
		deploymentType: FormControl<CommonDataServiceForAppsLinkedServiceTypePropertiesDeploymentType | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The host name of the on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
		hostName: FormControl<string | null | undefined>,

		/** The organization name of the Common Data Service for Apps instance. The property is required for on-prem and required for online when there are more than one Common Data Service for Apps instances associated with the user. Type: string (or Expression with resultType string). */
		organizationName: FormControl<string | null | undefined>,

		/** The port of on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
		port: FormControl<string | null | undefined>,

		/** The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). */
		servicePrincipalCredentialType: FormControl<CommonDataServiceForAppsLinkedServiceTypePropertiesServicePrincipalCredentialType | null | undefined>,

		/** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
		servicePrincipalId: FormControl<string | null | undefined>,

		/** The URL to the Microsoft Common Data Service for Apps server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
		serviceUri: FormControl<string | null | undefined>,

		/** User name to access the Common Data Service for Apps instance. Type: string (or Expression with resultType string). */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCommonDataServiceForAppsLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<CommonDataServiceForAppsLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<CommonDataServiceForAppsLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			deploymentType: new FormControl<CommonDataServiceForAppsLinkedServiceTypePropertiesDeploymentType | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			hostName: new FormControl<string | null | undefined>(undefined),
			organizationName: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			servicePrincipalCredentialType: new FormControl<CommonDataServiceForAppsLinkedServiceTypePropertiesServicePrincipalCredentialType | null | undefined>(undefined),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			serviceUri: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CommonDataServiceForAppsLinkedServiceTypePropertiesAuthenticationType { Office365 = 0, Ifd = 1, AADServicePrincipal = 2 }

	export enum CommonDataServiceForAppsLinkedServiceTypePropertiesDeploymentType { Online = 0, OnPremisesWithIfd = 1 }

	export interface CommonDataServiceForAppsLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface CommonDataServiceForAppsLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCommonDataServiceForAppsLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<CommonDataServiceForAppsLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CommonDataServiceForAppsLinkedServiceTypePropertiesServicePrincipalCredential {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface CommonDataServiceForAppsLinkedServiceTypePropertiesServicePrincipalCredentialFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCommonDataServiceForAppsLinkedServiceTypePropertiesServicePrincipalCredentialFormGroup() {
		return new FormGroup<CommonDataServiceForAppsLinkedServiceTypePropertiesServicePrincipalCredentialFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CommonDataServiceForAppsLinkedServiceTypePropertiesServicePrincipalCredentialType { ServicePrincipalKey = 0, ServicePrincipalCert = 1 }


	/** Concur Service linked service. */
	export interface ConcurLinkedService {

		/**
		 * Concur Service linked service properties.
		 * Required
		 */
		typeProperties: ConcurLinkedServiceTypeProperties;
	}

	/** Concur Service linked service. */
	export interface ConcurLinkedServiceFormProperties {
	}
	export function CreateConcurLinkedServiceFormGroup() {
		return new FormGroup<ConcurLinkedServiceFormProperties>({
		});

	}


	/** Concur Service linked service properties. */
	export interface ConcurLinkedServiceTypeProperties {

		/**
		 * Application client_id supplied by Concur App Management.
		 * Required
		 */
		clientId: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: ConcurLinkedServiceTypePropertiesPassword;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification?: string | null;

		/**
		 * The user name that you use to access Concur Service.
		 * Required
		 */
		username: string;
	}

	/** Concur Service linked service properties. */
	export interface ConcurLinkedServiceTypePropertiesFormProperties {

		/**
		 * Application client_id supplied by Concur App Management.
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification: FormControl<string | null | undefined>,

		/**
		 * The user name that you use to access Concur Service.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateConcurLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<ConcurLinkedServiceTypePropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConcurLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface ConcurLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateConcurLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<ConcurLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Microsoft Azure Cosmos Database (CosmosDB) linked service. */
	export interface CosmosDbLinkedService {

		/**
		 * CosmosDB linked service properties.
		 * Required
		 */
		typeProperties: CosmosDbLinkedServiceTypeProperties;
	}

	/** Microsoft Azure Cosmos Database (CosmosDB) linked service. */
	export interface CosmosDbLinkedServiceFormProperties {
	}
	export function CreateCosmosDbLinkedServiceFormGroup() {
		return new FormGroup<CosmosDbLinkedServiceFormProperties>({
		});

	}


	/** CosmosDB linked service properties. */
	export interface CosmosDbLinkedServiceTypeProperties {

		/** The endpoint of the Azure CosmosDB account. Type: string (or Expression with resultType string) */
		accountEndpoint?: string | null;

		/** The base definition of a secret type. */
		accountKey?: CosmosDbLinkedServiceTypePropertiesAccountKey;

		/** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString?: string | null;

		/** The name of the database. Type: string (or Expression with resultType string) */
		database?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;
	}

	/** CosmosDB linked service properties. */
	export interface CosmosDbLinkedServiceTypePropertiesFormProperties {

		/** The endpoint of the Azure CosmosDB account. Type: string (or Expression with resultType string) */
		accountEndpoint: FormControl<string | null | undefined>,

		/** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString: FormControl<string | null | undefined>,

		/** The name of the database. Type: string (or Expression with resultType string) */
		database: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,
	}
	export function CreateCosmosDbLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<CosmosDbLinkedServiceTypePropertiesFormProperties>({
			accountEndpoint: new FormControl<string | null | undefined>(undefined),
			connectionString: new FormControl<string | null | undefined>(undefined),
			database: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CosmosDbLinkedServiceTypePropertiesAccountKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface CosmosDbLinkedServiceTypePropertiesAccountKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCosmosDbLinkedServiceTypePropertiesAccountKeyFormGroup() {
		return new FormGroup<CosmosDbLinkedServiceTypePropertiesAccountKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for CosmosDB (MongoDB API) data source. */
	export interface CosmosDbMongoDbApiLinkedService {

		/**
		 * CosmosDB (MongoDB API) linked service properties.
		 * Required
		 */
		typeProperties: CosmosDbMongoDbApiLinkedServiceTypeProperties;
	}

	/** Linked service for CosmosDB (MongoDB API) data source. */
	export interface CosmosDbMongoDbApiLinkedServiceFormProperties {
	}
	export function CreateCosmosDbMongoDbApiLinkedServiceFormGroup() {
		return new FormGroup<CosmosDbMongoDbApiLinkedServiceFormProperties>({
		});

	}


	/** CosmosDB (MongoDB API) linked service properties. */
	export interface CosmosDbMongoDbApiLinkedServiceTypeProperties {

		/**
		 * The CosmosDB (MongoDB API) connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: string;

		/**
		 * The name of the CosmosDB (MongoDB API) database that you want to access. Type: string (or Expression with resultType string).
		 * Required
		 */
		database: string;
	}

	/** CosmosDB (MongoDB API) linked service properties. */
	export interface CosmosDbMongoDbApiLinkedServiceTypePropertiesFormProperties {

		/**
		 * The CosmosDB (MongoDB API) connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/**
		 * The name of the CosmosDB (MongoDB API) database that you want to access. Type: string (or Expression with resultType string).
		 * Required
		 */
		database: FormControl<string | null | undefined>,
	}
	export function CreateCosmosDbMongoDbApiLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<CosmosDbMongoDbApiLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Couchbase server linked service. */
	export interface CouchbaseLinkedService {

		/**
		 * Couchbase server linked service properties.
		 * Required
		 */
		typeProperties: CouchbaseLinkedServiceTypeProperties;
	}

	/** Couchbase server linked service. */
	export interface CouchbaseLinkedServiceFormProperties {
	}
	export function CreateCouchbaseLinkedServiceFormGroup() {
		return new FormGroup<CouchbaseLinkedServiceFormProperties>({
		});

	}


	/** Couchbase server linked service properties. */
	export interface CouchbaseLinkedServiceTypeProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString?: string | null;

		/** Azure Key Vault secret reference. */
		credString?: CouchbaseLinkedServiceTypePropertiesCredString;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;
	}

	/** Couchbase server linked service properties. */
	export interface CouchbaseLinkedServiceTypePropertiesFormProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,
	}
	export function CreateCouchbaseLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<CouchbaseLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CouchbaseLinkedServiceTypePropertiesCredString {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface CouchbaseLinkedServiceTypePropertiesCredStringFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateCouchbaseLinkedServiceTypePropertiesCredStringFormGroup() {
		return new FormGroup<CouchbaseLinkedServiceTypePropertiesCredStringFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Custom linked service. */
	export interface CustomDataSourceLinkedService {

		/**
		 * Custom linked service properties.
		 * Required
		 */
		typeProperties: string;
	}

	/** Custom linked service. */
	export interface CustomDataSourceLinkedServiceFormProperties {

		/**
		 * Custom linked service properties.
		 * Required
		 */
		typeProperties: FormControl<string | null | undefined>,
	}
	export function CreateCustomDataSourceLinkedServiceFormGroup() {
		return new FormGroup<CustomDataSourceLinkedServiceFormProperties>({
			typeProperties: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for DB2 data source. */
	export interface Db2LinkedService {

		/**
		 * DB2 linked service properties.
		 * Required
		 */
		typeProperties: Db2LinkedServiceTypeProperties;
	}

	/** Linked service for DB2 data source. */
	export interface Db2LinkedServiceFormProperties {
	}
	export function CreateDb2LinkedServiceFormGroup() {
		return new FormGroup<Db2LinkedServiceFormProperties>({
		});

	}


	/** DB2 linked service properties. */
	export interface Db2LinkedServiceTypeProperties {

		/** AuthenticationType to be used for connection. */
		authenticationType?: Db2LinkedServiceTypePropertiesAuthenticationType | null;

		/** Certificate Common Name when TLS is enabled. Type: string (or Expression with resultType string). */
		certificateCommonName?: string | null;

		/**
		 * Database name for connection. Type: string (or Expression with resultType string).
		 * Required
		 */
		database: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Under where packages are created when querying database. Type: string (or Expression with resultType string). */
		packageCollection?: string | null;

		/** The base definition of a secret type. */
		password?: Db2LinkedServiceTypePropertiesPassword;

		/**
		 * Server name for connection. Type: string (or Expression with resultType string).
		 * Required
		 */
		server: string;

		/** Username for authentication. Type: string (or Expression with resultType string). */
		username?: string | null;
	}

	/** DB2 linked service properties. */
	export interface Db2LinkedServiceTypePropertiesFormProperties {

		/** AuthenticationType to be used for connection. */
		authenticationType: FormControl<Db2LinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/** Certificate Common Name when TLS is enabled. Type: string (or Expression with resultType string). */
		certificateCommonName: FormControl<string | null | undefined>,

		/**
		 * Database name for connection. Type: string (or Expression with resultType string).
		 * Required
		 */
		database: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** Under where packages are created when querying database. Type: string (or Expression with resultType string). */
		packageCollection: FormControl<string | null | undefined>,

		/**
		 * Server name for connection. Type: string (or Expression with resultType string).
		 * Required
		 */
		server: FormControl<string | null | undefined>,

		/** Username for authentication. Type: string (or Expression with resultType string). */
		username: FormControl<string | null | undefined>,
	}
	export function CreateDb2LinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<Db2LinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<Db2LinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined),
			certificateCommonName: new FormControl<string | null | undefined>(undefined),
			database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			packageCollection: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Db2LinkedServiceTypePropertiesAuthenticationType { Basic = 0 }

	export interface Db2LinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface Db2LinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDb2LinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<Db2LinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Drill server linked service. */
	export interface DrillLinkedService {

		/**
		 * Drill server linked service properties.
		 * Required
		 */
		typeProperties: DrillLinkedServiceTypeProperties;
	}

	/** Drill server linked service. */
	export interface DrillLinkedServiceFormProperties {
	}
	export function CreateDrillLinkedServiceFormGroup() {
		return new FormGroup<DrillLinkedServiceFormProperties>({
		});

	}


	/** Drill server linked service properties. */
	export interface DrillLinkedServiceTypeProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		pwd?: DrillLinkedServiceTypePropertiesPwd;
	}

	/** Drill server linked service properties. */
	export interface DrillLinkedServiceTypePropertiesFormProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,
	}
	export function CreateDrillLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<DrillLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DrillLinkedServiceTypePropertiesPwd {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface DrillLinkedServiceTypePropertiesPwdFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateDrillLinkedServiceTypePropertiesPwdFormGroup() {
		return new FormGroup<DrillLinkedServiceTypePropertiesPwdFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Dynamics AX linked service. */
	export interface DynamicsAXLinkedService {

		/**
		 * Dynamics AX linked service properties.
		 * Required
		 */
		typeProperties: DynamicsAXLinkedServiceTypeProperties;
	}

	/** Dynamics AX linked service. */
	export interface DynamicsAXLinkedServiceFormProperties {
	}
	export function CreateDynamicsAXLinkedServiceFormGroup() {
		return new FormGroup<DynamicsAXLinkedServiceFormProperties>({
		});

	}


	/** Dynamics AX linked service properties. */
	export interface DynamicsAXLinkedServiceTypeProperties {

		/**
		 * Specify the resource you are requesting authorization. Type: string (or Expression with resultType string).
		 * Required
		 */
		aadResourceId: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * Specify the application's client ID. Type: string (or Expression with resultType string).
		 * Required
		 */
		servicePrincipalId: string;

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		servicePrincipalKey: DynamicsAXLinkedServiceTypePropertiesServicePrincipalKey;

		/**
		 * Specify the tenant information (domain name or tenant ID) under which your application resides. Retrieve it by hovering the mouse in the top-right corner of the Azure portal. Type: string (or Expression with resultType string).
		 * Required
		 */
		tenant: string;

		/**
		 * The Dynamics AX (or Dynamics 365 Finance and Operations) instance OData endpoint.
		 * Required
		 */
		url: string;
	}

	/** Dynamics AX linked service properties. */
	export interface DynamicsAXLinkedServiceTypePropertiesFormProperties {

		/**
		 * Specify the resource you are requesting authorization. Type: string (or Expression with resultType string).
		 * Required
		 */
		aadResourceId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * Specify the application's client ID. Type: string (or Expression with resultType string).
		 * Required
		 */
		servicePrincipalId: FormControl<string | null | undefined>,

		/**
		 * Specify the tenant information (domain name or tenant ID) under which your application resides. Retrieve it by hovering the mouse in the top-right corner of the Azure portal. Type: string (or Expression with resultType string).
		 * Required
		 */
		tenant: FormControl<string | null | undefined>,

		/**
		 * The Dynamics AX (or Dynamics 365 Finance and Operations) instance OData endpoint.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateDynamicsAXLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<DynamicsAXLinkedServiceTypePropertiesFormProperties>({
			aadResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenant: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DynamicsAXLinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface DynamicsAXLinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDynamicsAXLinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<DynamicsAXLinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Dynamics CRM linked service. */
	export interface DynamicsCrmLinkedService {

		/**
		 * Dynamics CRM linked service properties.
		 * Required
		 */
		typeProperties: DynamicsCrmLinkedServiceTypeProperties;
	}

	/** Dynamics CRM linked service. */
	export interface DynamicsCrmLinkedServiceFormProperties {
	}
	export function CreateDynamicsCrmLinkedServiceFormGroup() {
		return new FormGroup<DynamicsCrmLinkedServiceFormProperties>({
		});

	}


	/** Dynamics CRM linked service properties. */
	export interface DynamicsCrmLinkedServiceTypeProperties {

		/**
		 * The authentication type to connect to Dynamics CRM server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
		 * Required
		 */
		authenticationType: CommonDataServiceForAppsLinkedServiceTypePropertiesAuthenticationType;

		/**
		 * The deployment type of the Dynamics CRM instance. 'Online' for Dynamics CRM Online and 'OnPremisesWithIfd' for Dynamics CRM on-premises with Ifd. Type: string (or Expression with resultType string).
		 * Required
		 */
		deploymentType: CommonDataServiceForAppsLinkedServiceTypePropertiesDeploymentType;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The host name of the on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
		hostName?: string | null;

		/** The organization name of the Dynamics CRM instance. The property is required for on-prem and required for online when there are more than one Dynamics CRM instances associated with the user. Type: string (or Expression with resultType string). */
		organizationName?: string | null;

		/** The base definition of a secret type. */
		password?: DynamicsCrmLinkedServiceTypePropertiesPassword;

		/** The port of on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
		port?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalCredential?: DynamicsCrmLinkedServiceTypePropertiesServicePrincipalCredential;

		/** The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). */
		servicePrincipalCredentialType?: DynamicsCrmLinkedServiceTypePropertiesServicePrincipalCredentialType;

		/** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
		servicePrincipalId?: string | null;

		/** The URL to the Microsoft Dynamics CRM server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
		serviceUri?: string | null;

		/** User name to access the Dynamics CRM instance. Type: string (or Expression with resultType string). */
		username?: string | null;
	}

	/** Dynamics CRM linked service properties. */
	export interface DynamicsCrmLinkedServiceTypePropertiesFormProperties {

		/**
		 * The authentication type to connect to Dynamics CRM server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
		 * Required
		 */
		authenticationType: FormControl<CommonDataServiceForAppsLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/**
		 * The deployment type of the Dynamics CRM instance. 'Online' for Dynamics CRM Online and 'OnPremisesWithIfd' for Dynamics CRM on-premises with Ifd. Type: string (or Expression with resultType string).
		 * Required
		 */
		deploymentType: FormControl<CommonDataServiceForAppsLinkedServiceTypePropertiesDeploymentType | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The host name of the on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
		hostName: FormControl<string | null | undefined>,

		/** The organization name of the Dynamics CRM instance. The property is required for on-prem and required for online when there are more than one Dynamics CRM instances associated with the user. Type: string (or Expression with resultType string). */
		organizationName: FormControl<string | null | undefined>,

		/** The port of on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
		port: FormControl<string | null | undefined>,

		/** The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). */
		servicePrincipalCredentialType: FormControl<DynamicsCrmLinkedServiceTypePropertiesServicePrincipalCredentialType | null | undefined>,

		/** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
		servicePrincipalId: FormControl<string | null | undefined>,

		/** The URL to the Microsoft Dynamics CRM server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
		serviceUri: FormControl<string | null | undefined>,

		/** User name to access the Dynamics CRM instance. Type: string (or Expression with resultType string). */
		username: FormControl<string | null | undefined>,
	}
	export function CreateDynamicsCrmLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<DynamicsCrmLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<CommonDataServiceForAppsLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			deploymentType: new FormControl<CommonDataServiceForAppsLinkedServiceTypePropertiesDeploymentType | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			hostName: new FormControl<string | null | undefined>(undefined),
			organizationName: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			servicePrincipalCredentialType: new FormControl<DynamicsCrmLinkedServiceTypePropertiesServicePrincipalCredentialType | null | undefined>(undefined),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			serviceUri: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DynamicsCrmLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface DynamicsCrmLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDynamicsCrmLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<DynamicsCrmLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DynamicsCrmLinkedServiceTypePropertiesServicePrincipalCredential {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface DynamicsCrmLinkedServiceTypePropertiesServicePrincipalCredentialFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDynamicsCrmLinkedServiceTypePropertiesServicePrincipalCredentialFormGroup() {
		return new FormGroup<DynamicsCrmLinkedServiceTypePropertiesServicePrincipalCredentialFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DynamicsCrmLinkedServiceTypePropertiesServicePrincipalCredentialType { ServicePrincipalKey = 0, ServicePrincipalCert = 1 }


	/** Dynamics linked service. */
	export interface DynamicsLinkedService {

		/**
		 * Dynamics linked service properties.
		 * Required
		 */
		typeProperties: DynamicsLinkedServiceTypeProperties;
	}

	/** Dynamics linked service. */
	export interface DynamicsLinkedServiceFormProperties {
	}
	export function CreateDynamicsLinkedServiceFormGroup() {
		return new FormGroup<DynamicsLinkedServiceFormProperties>({
		});

	}


	/** Dynamics linked service properties. */
	export interface DynamicsLinkedServiceTypeProperties {

		/**
		 * The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
		 * Required
		 */
		authenticationType: DynamicsLinkedServiceTypePropertiesAuthenticationType;

		/**
		 * The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string).
		 * Required
		 */
		deploymentType: DynamicsLinkedServiceTypePropertiesDeploymentType;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
		hostName?: string | null;

		/** The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string). */
		organizationName?: string | null;

		/** The base definition of a secret type. */
		password?: DynamicsLinkedServiceTypePropertiesPassword;

		/** The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
		port?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalCredential?: DynamicsLinkedServiceTypePropertiesServicePrincipalCredential;

		/** The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). */
		servicePrincipalCredentialType?: DynamicsLinkedServiceTypePropertiesServicePrincipalCredentialType;

		/** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
		servicePrincipalId?: string | null;

		/** The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
		serviceUri?: string | null;

		/** User name to access the Dynamics instance. Type: string (or Expression with resultType string). */
		username?: string | null;
	}

	/** Dynamics linked service properties. */
	export interface DynamicsLinkedServiceTypePropertiesFormProperties {

		/**
		 * The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
		 * Required
		 */
		authenticationType: FormControl<DynamicsLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/**
		 * The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string).
		 * Required
		 */
		deploymentType: FormControl<DynamicsLinkedServiceTypePropertiesDeploymentType | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
		hostName: FormControl<string | null | undefined>,

		/** The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string). */
		organizationName: FormControl<string | null | undefined>,

		/** The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
		port: FormControl<string | null | undefined>,

		/** The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). */
		servicePrincipalCredentialType: FormControl<DynamicsLinkedServiceTypePropertiesServicePrincipalCredentialType | null | undefined>,

		/** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
		servicePrincipalId: FormControl<string | null | undefined>,

		/** The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
		serviceUri: FormControl<string | null | undefined>,

		/** User name to access the Dynamics instance. Type: string (or Expression with resultType string). */
		username: FormControl<string | null | undefined>,
	}
	export function CreateDynamicsLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<DynamicsLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<DynamicsLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			deploymentType: new FormControl<DynamicsLinkedServiceTypePropertiesDeploymentType | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			hostName: new FormControl<string | null | undefined>(undefined),
			organizationName: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			servicePrincipalCredentialType: new FormControl<DynamicsLinkedServiceTypePropertiesServicePrincipalCredentialType | null | undefined>(undefined),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			serviceUri: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DynamicsLinkedServiceTypePropertiesAuthenticationType { Office365 = 0, Ifd = 1, AADServicePrincipal = 2 }

	export enum DynamicsLinkedServiceTypePropertiesDeploymentType { Online = 0, OnPremisesWithIfd = 1 }

	export interface DynamicsLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface DynamicsLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDynamicsLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<DynamicsLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DynamicsLinkedServiceTypePropertiesServicePrincipalCredential {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface DynamicsLinkedServiceTypePropertiesServicePrincipalCredentialFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDynamicsLinkedServiceTypePropertiesServicePrincipalCredentialFormGroup() {
		return new FormGroup<DynamicsLinkedServiceTypePropertiesServicePrincipalCredentialFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DynamicsLinkedServiceTypePropertiesServicePrincipalCredentialType { ServicePrincipalKey = 0, ServicePrincipalCert = 1 }


	/** Eloqua server linked service. */
	export interface EloquaLinkedService {

		/**
		 * Eloqua server linked service properties.
		 * Required
		 */
		typeProperties: EloquaLinkedServiceTypeProperties;
	}

	/** Eloqua server linked service. */
	export interface EloquaLinkedServiceFormProperties {
	}
	export function CreateEloquaLinkedServiceFormGroup() {
		return new FormGroup<EloquaLinkedServiceFormProperties>({
		});

	}


	/** Eloqua server linked service properties. */
	export interface EloquaLinkedServiceTypeProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The endpoint of the Eloqua server. (i.e. eloqua.example.com)
		 * Required
		 */
		endpoint: string;

		/** The base definition of a secret type. */
		password?: EloquaLinkedServiceTypePropertiesPassword;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification?: string | null;

		/**
		 * The site name and user name of your Eloqua account in the form: sitename/username. (i.e. Eloqua/Alice)
		 * Required
		 */
		username: string;
	}

	/** Eloqua server linked service properties. */
	export interface EloquaLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The endpoint of the Eloqua server. (i.e. eloqua.example.com)
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification: FormControl<string | null | undefined>,

		/**
		 * The site name and user name of your Eloqua account in the form: sitename/username. (i.e. Eloqua/Alice)
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateEloquaLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<EloquaLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EloquaLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface EloquaLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEloquaLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<EloquaLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** File system linked service. */
	export interface FileServerLinkedService {

		/**
		 * File system linked service properties.
		 * Required
		 */
		typeProperties: FileServerLinkedServiceTypeProperties;
	}

	/** File system linked service. */
	export interface FileServerLinkedServiceFormProperties {
	}
	export function CreateFileServerLinkedServiceFormGroup() {
		return new FormGroup<FileServerLinkedServiceFormProperties>({
		});

	}


	/** File system linked service properties. */
	export interface FileServerLinkedServiceTypeProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * Host name of the server. Type: string (or Expression with resultType string).
		 * Required
		 */
		host: string;

		/** The base definition of a secret type. */
		password?: FileServerLinkedServiceTypePropertiesPassword;

		/** User ID to logon the server. Type: string (or Expression with resultType string). */
		userId?: string | null;
	}

	/** File system linked service properties. */
	export interface FileServerLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * Host name of the server. Type: string (or Expression with resultType string).
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** User ID to logon the server. Type: string (or Expression with resultType string). */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateFileServerLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<FileServerLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileServerLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface FileServerLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFileServerLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<FileServerLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A FTP server Linked Service. */
	export interface FtpServerLinkedService {

		/**
		 * Properties specific to this linked service type.
		 * Required
		 */
		typeProperties: FtpServerLinkedServiceTypeProperties;
	}

	/** A FTP server Linked Service. */
	export interface FtpServerLinkedServiceFormProperties {
	}
	export function CreateFtpServerLinkedServiceFormGroup() {
		return new FormGroup<FtpServerLinkedServiceFormProperties>({
		});

	}


	/** Properties specific to this linked service type. */
	export interface FtpServerLinkedServiceTypeProperties {

		/** The authentication type to be used to connect to the FTP server. */
		authenticationType?: FtpServerLinkedServiceTypePropertiesAuthenticationType | null;

		/** If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean). */
		enableServerCertificateValidation?: string | null;

		/** If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean). */
		enableSsl?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * Host name of the FTP server. Type: string (or Expression with resultType string).
		 * Required
		 */
		host: string;

		/** The base definition of a secret type. */
		password?: FtpServerLinkedServiceTypePropertiesPassword;

		/** The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0. */
		port?: string | null;

		/** Username to logon the FTP server. Type: string (or Expression with resultType string). */
		userName?: string | null;
	}

	/** Properties specific to this linked service type. */
	export interface FtpServerLinkedServiceTypePropertiesFormProperties {

		/** The authentication type to be used to connect to the FTP server. */
		authenticationType: FormControl<FtpServerLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/** If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean). */
		enableServerCertificateValidation: FormControl<string | null | undefined>,

		/** If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean). */
		enableSsl: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * Host name of the FTP server. Type: string (or Expression with resultType string).
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0. */
		port: FormControl<string | null | undefined>,

		/** Username to logon the FTP server. Type: string (or Expression with resultType string). */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateFtpServerLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<FtpServerLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<FtpServerLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined),
			enableServerCertificateValidation: new FormControl<string | null | undefined>(undefined),
			enableSsl: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FtpServerLinkedServiceTypePropertiesAuthenticationType { Basic = 0, Anonymous = 1 }

	export interface FtpServerLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface FtpServerLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFtpServerLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<FtpServerLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Google AdWords service linked service. */
	export interface GoogleAdWordsLinkedService {

		/**
		 * Google AdWords service linked service properties.
		 * Required
		 */
		typeProperties: GoogleAdWordsLinkedServiceTypeProperties;
	}

	/** Google AdWords service linked service. */
	export interface GoogleAdWordsLinkedServiceFormProperties {
	}
	export function CreateGoogleAdWordsLinkedServiceFormGroup() {
		return new FormGroup<GoogleAdWordsLinkedServiceFormProperties>({
		});

	}


	/** Google AdWords service linked service properties. */
	export interface GoogleAdWordsLinkedServiceTypeProperties {

		/**
		 * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
		 * Required
		 */
		authenticationType: GoogleAdWordsLinkedServiceTypePropertiesAuthenticationType;

		/**
		 * The Client customer ID of the AdWords account that you want to fetch report data for.
		 * Required
		 */
		clientCustomerID: string;

		/** The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string). */
		clientId?: string | null;

		/** The base definition of a secret type. */
		clientSecret?: GoogleAdWordsLinkedServiceTypePropertiesClientSecret;

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		developerToken: GoogleAdWordsLinkedServiceTypePropertiesDeveloperToken;

		/** The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. */
		email?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. */
		keyFilePath?: string | null;

		/** The base definition of a secret type. */
		refreshToken?: GoogleAdWordsLinkedServiceTypePropertiesRefreshToken;

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath?: string | null;

		/** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
		useSystemTrustStore?: string | null;
	}

	/** Google AdWords service linked service properties. */
	export interface GoogleAdWordsLinkedServiceTypePropertiesFormProperties {

		/**
		 * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
		 * Required
		 */
		authenticationType: FormControl<GoogleAdWordsLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/**
		 * The Client customer ID of the AdWords account that you want to fetch report data for.
		 * Required
		 */
		clientCustomerID: FormControl<string | null | undefined>,

		/** The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string). */
		clientId: FormControl<string | null | undefined>,

		/** The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. */
		email: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. */
		keyFilePath: FormControl<string | null | undefined>,

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath: FormControl<string | null | undefined>,

		/** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
		useSystemTrustStore: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdWordsLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<GoogleAdWordsLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<GoogleAdWordsLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			clientCustomerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientId: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			keyFilePath: new FormControl<string | null | undefined>(undefined),
			trustedCertPath: new FormControl<string | null | undefined>(undefined),
			useSystemTrustStore: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAdWordsLinkedServiceTypePropertiesAuthenticationType { ServiceAuthentication = 0, UserAuthentication = 1 }

	export interface GoogleAdWordsLinkedServiceTypePropertiesClientSecret {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface GoogleAdWordsLinkedServiceTypePropertiesClientSecretFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdWordsLinkedServiceTypePropertiesClientSecretFormGroup() {
		return new FormGroup<GoogleAdWordsLinkedServiceTypePropertiesClientSecretFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GoogleAdWordsLinkedServiceTypePropertiesDeveloperToken {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface GoogleAdWordsLinkedServiceTypePropertiesDeveloperTokenFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdWordsLinkedServiceTypePropertiesDeveloperTokenFormGroup() {
		return new FormGroup<GoogleAdWordsLinkedServiceTypePropertiesDeveloperTokenFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GoogleAdWordsLinkedServiceTypePropertiesRefreshToken {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface GoogleAdWordsLinkedServiceTypePropertiesRefreshTokenFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdWordsLinkedServiceTypePropertiesRefreshTokenFormGroup() {
		return new FormGroup<GoogleAdWordsLinkedServiceTypePropertiesRefreshTokenFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Google BigQuery service linked service. */
	export interface GoogleBigQueryLinkedService {

		/**
		 * Google BigQuery service linked service properties.
		 * Required
		 */
		typeProperties: GoogleBigQueryLinkedServiceTypeProperties;
	}

	/** Google BigQuery service linked service. */
	export interface GoogleBigQueryLinkedServiceFormProperties {
	}
	export function CreateGoogleBigQueryLinkedServiceFormGroup() {
		return new FormGroup<GoogleBigQueryLinkedServiceFormProperties>({
		});

	}


	/** Google BigQuery service linked service properties. */
	export interface GoogleBigQueryLinkedServiceTypeProperties {

		/** A comma-separated list of public BigQuery projects to access. */
		additionalProjects?: string | null;

		/**
		 * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
		 * Required
		 */
		authenticationType: GoogleAdWordsLinkedServiceTypePropertiesAuthenticationType;

		/** The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string). */
		clientId?: string | null;

		/** The base definition of a secret type. */
		clientSecret?: GoogleBigQueryLinkedServiceTypePropertiesClientSecret;

		/** The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. */
		email?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. */
		keyFilePath?: string | null;

		/**
		 * The default BigQuery project to query against.
		 * Required
		 */
		project: string;

		/** The base definition of a secret type. */
		refreshToken?: GoogleBigQueryLinkedServiceTypePropertiesRefreshToken;

		/** Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false. */
		requestGoogleDriveScope?: string | null;

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath?: string | null;

		/** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
		useSystemTrustStore?: string | null;
	}

	/** Google BigQuery service linked service properties. */
	export interface GoogleBigQueryLinkedServiceTypePropertiesFormProperties {

		/** A comma-separated list of public BigQuery projects to access. */
		additionalProjects: FormControl<string | null | undefined>,

		/**
		 * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
		 * Required
		 */
		authenticationType: FormControl<GoogleAdWordsLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/** The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string). */
		clientId: FormControl<string | null | undefined>,

		/** The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. */
		email: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. */
		keyFilePath: FormControl<string | null | undefined>,

		/**
		 * The default BigQuery project to query against.
		 * Required
		 */
		project: FormControl<string | null | undefined>,

		/** Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false. */
		requestGoogleDriveScope: FormControl<string | null | undefined>,

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath: FormControl<string | null | undefined>,

		/** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
		useSystemTrustStore: FormControl<string | null | undefined>,
	}
	export function CreateGoogleBigQueryLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<GoogleBigQueryLinkedServiceTypePropertiesFormProperties>({
			additionalProjects: new FormControl<string | null | undefined>(undefined),
			authenticationType: new FormControl<GoogleAdWordsLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			clientId: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			keyFilePath: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestGoogleDriveScope: new FormControl<string | null | undefined>(undefined),
			trustedCertPath: new FormControl<string | null | undefined>(undefined),
			useSystemTrustStore: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleBigQueryLinkedServiceTypePropertiesClientSecret {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface GoogleBigQueryLinkedServiceTypePropertiesClientSecretFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleBigQueryLinkedServiceTypePropertiesClientSecretFormGroup() {
		return new FormGroup<GoogleBigQueryLinkedServiceTypePropertiesClientSecretFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GoogleBigQueryLinkedServiceTypePropertiesRefreshToken {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface GoogleBigQueryLinkedServiceTypePropertiesRefreshTokenFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleBigQueryLinkedServiceTypePropertiesRefreshTokenFormGroup() {
		return new FormGroup<GoogleBigQueryLinkedServiceTypePropertiesRefreshTokenFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for Google Cloud Storage. */
	export interface GoogleCloudStorageLinkedService {

		/**
		 * Google Cloud Storage linked service properties.
		 * Required
		 */
		typeProperties: GoogleCloudStorageLinkedServiceTypeProperties;
	}

	/** Linked service for Google Cloud Storage. */
	export interface GoogleCloudStorageLinkedServiceFormProperties {
	}
	export function CreateGoogleCloudStorageLinkedServiceFormGroup() {
		return new FormGroup<GoogleCloudStorageLinkedServiceFormProperties>({
		});

	}


	/** Google Cloud Storage linked service properties. */
	export interface GoogleCloudStorageLinkedServiceTypeProperties {

		/** The access key identifier of the Google Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). */
		accessKeyId?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		secretAccessKey?: GoogleCloudStorageLinkedServiceTypePropertiesSecretAccessKey;

		/** This value specifies the endpoint to access with the Google Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). */
		serviceUrl?: string | null;
	}

	/** Google Cloud Storage linked service properties. */
	export interface GoogleCloudStorageLinkedServiceTypePropertiesFormProperties {

		/** The access key identifier of the Google Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). */
		accessKeyId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** This value specifies the endpoint to access with the Google Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). */
		serviceUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudStorageLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<GoogleCloudStorageLinkedServiceTypePropertiesFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			serviceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudStorageLinkedServiceTypePropertiesSecretAccessKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface GoogleCloudStorageLinkedServiceTypePropertiesSecretAccessKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudStorageLinkedServiceTypePropertiesSecretAccessKeyFormGroup() {
		return new FormGroup<GoogleCloudStorageLinkedServiceTypePropertiesSecretAccessKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Greenplum Database linked service. */
	export interface GreenplumLinkedService {

		/**
		 * Greenplum Database linked service properties.
		 * Required
		 */
		typeProperties: GreenplumLinkedServiceTypeProperties;
	}

	/** Greenplum Database linked service. */
	export interface GreenplumLinkedServiceFormProperties {
	}
	export function CreateGreenplumLinkedServiceFormGroup() {
		return new FormGroup<GreenplumLinkedServiceFormProperties>({
		});

	}


	/** Greenplum Database linked service properties. */
	export interface GreenplumLinkedServiceTypeProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		pwd?: GreenplumLinkedServiceTypePropertiesPwd;
	}

	/** Greenplum Database linked service properties. */
	export interface GreenplumLinkedServiceTypePropertiesFormProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,
	}
	export function CreateGreenplumLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<GreenplumLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GreenplumLinkedServiceTypePropertiesPwd {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface GreenplumLinkedServiceTypePropertiesPwdFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateGreenplumLinkedServiceTypePropertiesPwdFormGroup() {
		return new FormGroup<GreenplumLinkedServiceTypePropertiesPwdFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** HBase server linked service. */
	export interface HBaseLinkedService {

		/**
		 * HBase server linked service properties.
		 * Required
		 */
		typeProperties: HBaseLinkedServiceTypeProperties;
	}

	/** HBase server linked service. */
	export interface HBaseLinkedServiceFormProperties {
	}
	export function CreateHBaseLinkedServiceFormGroup() {
		return new FormGroup<HBaseLinkedServiceFormProperties>({
		});

	}


	/** HBase server linked service properties. */
	export interface HBaseLinkedServiceTypeProperties {

		/** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
		allowHostNameCNMismatch?: string | null;

		/** Specifies whether to allow self-signed certificates from the server. The default value is false. */
		allowSelfSignedServerCert?: string | null;

		/**
		 * The authentication mechanism to use to connect to the HBase server.
		 * Required
		 */
		authenticationType: HBaseLinkedServiceTypePropertiesAuthenticationType;

		/** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
		enableSsl?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The IP address or host name of the HBase server. (i.e. 192.168.222.160)
		 * Required
		 */
		host: string;

		/** The partial URL corresponding to the HBase server. (i.e. /gateway/sandbox/hbase/version) */
		httpPath?: string | null;

		/** The base definition of a secret type. */
		password?: HBaseLinkedServiceTypePropertiesPassword;

		/** The TCP port that the HBase instance uses to listen for client connections. The default value is 9090. */
		port?: string | null;

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath?: string | null;

		/** The user name used to connect to the HBase instance. */
		username?: string | null;
	}

	/** HBase server linked service properties. */
	export interface HBaseLinkedServiceTypePropertiesFormProperties {

		/** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
		allowHostNameCNMismatch: FormControl<string | null | undefined>,

		/** Specifies whether to allow self-signed certificates from the server. The default value is false. */
		allowSelfSignedServerCert: FormControl<string | null | undefined>,

		/**
		 * The authentication mechanism to use to connect to the HBase server.
		 * Required
		 */
		authenticationType: FormControl<HBaseLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
		enableSsl: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The IP address or host name of the HBase server. (i.e. 192.168.222.160)
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** The partial URL corresponding to the HBase server. (i.e. /gateway/sandbox/hbase/version) */
		httpPath: FormControl<string | null | undefined>,

		/** The TCP port that the HBase instance uses to listen for client connections. The default value is 9090. */
		port: FormControl<string | null | undefined>,

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath: FormControl<string | null | undefined>,

		/** The user name used to connect to the HBase instance. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateHBaseLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<HBaseLinkedServiceTypePropertiesFormProperties>({
			allowHostNameCNMismatch: new FormControl<string | null | undefined>(undefined),
			allowSelfSignedServerCert: new FormControl<string | null | undefined>(undefined),
			authenticationType: new FormControl<HBaseLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			enableSsl: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			httpPath: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			trustedCertPath: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HBaseLinkedServiceTypePropertiesAuthenticationType { Anonymous = 0, Basic = 1 }

	export interface HBaseLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface HBaseLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHBaseLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<HBaseLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** HDInsight linked service. */
	export interface HDInsightLinkedService {

		/**
		 * HDInsight linked service properties.
		 * Required
		 */
		typeProperties: HDInsightLinkedServiceTypeProperties;
	}

	/** HDInsight linked service. */
	export interface HDInsightLinkedServiceFormProperties {
	}
	export function CreateHDInsightLinkedServiceFormGroup() {
		return new FormGroup<HDInsightLinkedServiceFormProperties>({
		});

	}


	/** HDInsight linked service properties. */
	export interface HDInsightLinkedServiceTypeProperties {

		/**
		 * HDInsight cluster URI. Type: string (or Expression with resultType string).
		 * Required
		 */
		clusterUri: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Specify the FileSystem if the main storage for the HDInsight is ADLS Gen2. Type: string (or Expression with resultType string). */
		fileSystem?: string | null;

		/** Linked service reference type. */
		hcatalogLinkedServiceName?: any;

		/** Specify if the HDInsight is created with ESP (Enterprise Security Package). Type: Boolean. */
		isEspEnabled?: string | null;

		/** Linked service reference type. */
		linkedServiceName?: any;

		/** The base definition of a secret type. */
		password?: HDInsightLinkedServiceTypePropertiesPassword;

		/** HDInsight cluster user name. Type: string (or Expression with resultType string). */
		userName?: string | null;
	}

	/** HDInsight linked service properties. */
	export interface HDInsightLinkedServiceTypePropertiesFormProperties {

		/**
		 * HDInsight cluster URI. Type: string (or Expression with resultType string).
		 * Required
		 */
		clusterUri: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** Specify the FileSystem if the main storage for the HDInsight is ADLS Gen2. Type: string (or Expression with resultType string). */
		fileSystem: FormControl<string | null | undefined>,

		/** Linked service reference type. */
		hcatalogLinkedServiceName: FormControl<any | null | undefined>,

		/** Specify if the HDInsight is created with ESP (Enterprise Security Package). Type: Boolean. */
		isEspEnabled: FormControl<string | null | undefined>,

		/** Linked service reference type. */
		linkedServiceName: FormControl<any | null | undefined>,

		/** HDInsight cluster user name. Type: string (or Expression with resultType string). */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateHDInsightLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<HDInsightLinkedServiceTypePropertiesFormProperties>({
			clusterUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			fileSystem: new FormControl<string | null | undefined>(undefined),
			hcatalogLinkedServiceName: new FormControl<any | null | undefined>(undefined),
			isEspEnabled: new FormControl<string | null | undefined>(undefined),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HDInsightLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface HDInsightLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHDInsightLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<HDInsightLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** HDInsight ondemand linked service. */
	export interface HDInsightOnDemandLinkedService {

		/**
		 * HDInsight ondemand linked service properties.
		 * Required
		 */
		typeProperties: HDInsightOnDemandLinkedServiceTypeProperties;
	}

	/** HDInsight ondemand linked service. */
	export interface HDInsightOnDemandLinkedServiceFormProperties {
	}
	export function CreateHDInsightOnDemandLinkedServiceFormGroup() {
		return new FormGroup<HDInsightOnDemandLinkedServiceFormProperties>({
		});

	}


	/** HDInsight ondemand linked service properties. */
	export interface HDInsightOnDemandLinkedServiceTypeProperties {

		/** Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf. */
		HDInsightOnDemandLinkedServiceTypePropertiesAdditionalLinkedServiceNames?: Array<HDInsightOnDemandLinkedServiceTypePropertiesAdditionalLinkedServiceNames>;

		/** The prefix of cluster name, postfix will be distinct with timestamp. Type: string (or Expression with resultType string). */
		clusterNamePrefix?: string | null;

		/** The base definition of a secret type. */
		clusterPassword?: HDInsightOnDemandLinkedServiceTypePropertiesClusterPassword;

		/**
		 * The resource group where the cluster belongs. Type: string (or Expression with resultType string).
		 * Required
		 */
		clusterResourceGroup: string;

		/**
		 * Number of worker/data nodes in the cluster. Suggestion value: 4. Type: string (or Expression with resultType string).
		 * Required
		 */
		clusterSize: string;

		/** The base definition of a secret type. */
		clusterSshPassword?: HDInsightOnDemandLinkedServiceTypePropertiesClusterSshPassword;

		/** The username to SSH remotely connect to cluster’s node (for Linux). Type: string (or Expression with resultType string). */
		clusterSshUserName?: string | null;

		/** The cluster type. Type: string (or Expression with resultType string). */
		clusterType?: string | null;

		/** The username to access the cluster. Type: string (or Expression with resultType string). */
		clusterUserName?: string | null;

		/** Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created. */
		coreConfiguration?: string | null;

		/** Specifies the size of the data node for the HDInsight cluster. */
		dataNodeSize?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster. */
		hBaseConfiguration?: string | null;

		/** Linked service reference type. */
		hcatalogLinkedServiceName?: any;

		/** Specifies the HDFS configuration parameters (hdfs-site.xml) for the HDInsight cluster. */
		hdfsConfiguration?: string | null;

		/** Specifies the size of the head node for the HDInsight cluster. */
		headNodeSize?: string | null;

		/** Specifies the hive configuration parameters (hive-site.xml) for the HDInsight cluster. */
		hiveConfiguration?: string | null;

		/**
		 * The customer’s subscription to host the cluster. Type: string (or Expression with resultType string).
		 * Required
		 */
		hostSubscriptionId: string;

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: any;

		/** Specifies the MapReduce configuration parameters (mapred-site.xml) for the HDInsight cluster. */
		mapReduceConfiguration?: string | null;

		/** Specifies the Oozie configuration parameters (oozie-site.xml) for the HDInsight cluster. */
		oozieConfiguration?: string | null;

		/** Custom script actions to run on HDI ondemand cluster once it's up. Please refer to https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-hadoop-customize-cluster-linux?toc=%2Fen-us%2Fazure%2Fhdinsight%2Fr-server%2FTOC.json&bc=%2Fen-us%2Fazure%2Fbread%2Ftoc.json#understanding-script-actions. */
		scriptActions?: Array<ScriptAction>;

		/** The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string). */
		servicePrincipalId?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalKey?: HDInsightOnDemandLinkedServiceTypePropertiesServicePrincipalKey;

		/** The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string). */
		sparkVersion?: string | null;

		/** Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster. */
		stormConfiguration?: string | null;

		/** The ARM resource ID for the subnet in the vNet. If virtualNetworkId was specified, then this property is required. Type: string (or Expression with resultType string). */
		subnetName?: string | null;

		/**
		 * The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string).
		 * Required
		 */
		tenant: string;

		/**
		 * The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string).
		 * Required
		 */
		timeToLive: string;

		/**
		 * Version of the HDInsight cluster.  Type: string (or Expression with resultType string).
		 * Required
		 */
		version: string;

		/** The ARM resource ID for the vNet to which the cluster should be joined after creation. Type: string (or Expression with resultType string). */
		virtualNetworkId?: string | null;

		/** Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster. */
		yarnConfiguration?: string | null;

		/** Specifies the size of the Zoo Keeper node for the HDInsight cluster. */
		zookeeperNodeSize?: string | null;
	}

	/** HDInsight ondemand linked service properties. */
	export interface HDInsightOnDemandLinkedServiceTypePropertiesFormProperties {

		/** The prefix of cluster name, postfix will be distinct with timestamp. Type: string (or Expression with resultType string). */
		clusterNamePrefix: FormControl<string | null | undefined>,

		/**
		 * The resource group where the cluster belongs. Type: string (or Expression with resultType string).
		 * Required
		 */
		clusterResourceGroup: FormControl<string | null | undefined>,

		/**
		 * Number of worker/data nodes in the cluster. Suggestion value: 4. Type: string (or Expression with resultType string).
		 * Required
		 */
		clusterSize: FormControl<string | null | undefined>,

		/** The username to SSH remotely connect to cluster’s node (for Linux). Type: string (or Expression with resultType string). */
		clusterSshUserName: FormControl<string | null | undefined>,

		/** The cluster type. Type: string (or Expression with resultType string). */
		clusterType: FormControl<string | null | undefined>,

		/** The username to access the cluster. Type: string (or Expression with resultType string). */
		clusterUserName: FormControl<string | null | undefined>,

		/** Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created. */
		coreConfiguration: FormControl<string | null | undefined>,

		/** Specifies the size of the data node for the HDInsight cluster. */
		dataNodeSize: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster. */
		hBaseConfiguration: FormControl<string | null | undefined>,

		/** Linked service reference type. */
		hcatalogLinkedServiceName: FormControl<any | null | undefined>,

		/** Specifies the HDFS configuration parameters (hdfs-site.xml) for the HDInsight cluster. */
		hdfsConfiguration: FormControl<string | null | undefined>,

		/** Specifies the size of the head node for the HDInsight cluster. */
		headNodeSize: FormControl<string | null | undefined>,

		/** Specifies the hive configuration parameters (hive-site.xml) for the HDInsight cluster. */
		hiveConfiguration: FormControl<string | null | undefined>,

		/**
		 * The customer’s subscription to host the cluster. Type: string (or Expression with resultType string).
		 * Required
		 */
		hostSubscriptionId: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: FormControl<any | null | undefined>,

		/** Specifies the MapReduce configuration parameters (mapred-site.xml) for the HDInsight cluster. */
		mapReduceConfiguration: FormControl<string | null | undefined>,

		/** Specifies the Oozie configuration parameters (oozie-site.xml) for the HDInsight cluster. */
		oozieConfiguration: FormControl<string | null | undefined>,

		/** The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string). */
		servicePrincipalId: FormControl<string | null | undefined>,

		/** The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string). */
		sparkVersion: FormControl<string | null | undefined>,

		/** Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster. */
		stormConfiguration: FormControl<string | null | undefined>,

		/** The ARM resource ID for the subnet in the vNet. If virtualNetworkId was specified, then this property is required. Type: string (or Expression with resultType string). */
		subnetName: FormControl<string | null | undefined>,

		/**
		 * The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string).
		 * Required
		 */
		tenant: FormControl<string | null | undefined>,

		/**
		 * The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string).
		 * Required
		 */
		timeToLive: FormControl<string | null | undefined>,

		/**
		 * Version of the HDInsight cluster.  Type: string (or Expression with resultType string).
		 * Required
		 */
		version: FormControl<string | null | undefined>,

		/** The ARM resource ID for the vNet to which the cluster should be joined after creation. Type: string (or Expression with resultType string). */
		virtualNetworkId: FormControl<string | null | undefined>,

		/** Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster. */
		yarnConfiguration: FormControl<string | null | undefined>,

		/** Specifies the size of the Zoo Keeper node for the HDInsight cluster. */
		zookeeperNodeSize: FormControl<string | null | undefined>,
	}
	export function CreateHDInsightOnDemandLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<HDInsightOnDemandLinkedServiceTypePropertiesFormProperties>({
			clusterNamePrefix: new FormControl<string | null | undefined>(undefined),
			clusterResourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterSize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterSshUserName: new FormControl<string | null | undefined>(undefined),
			clusterType: new FormControl<string | null | undefined>(undefined),
			clusterUserName: new FormControl<string | null | undefined>(undefined),
			coreConfiguration: new FormControl<string | null | undefined>(undefined),
			dataNodeSize: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			hBaseConfiguration: new FormControl<string | null | undefined>(undefined),
			hcatalogLinkedServiceName: new FormControl<any | null | undefined>(undefined),
			hdfsConfiguration: new FormControl<string | null | undefined>(undefined),
			headNodeSize: new FormControl<string | null | undefined>(undefined),
			hiveConfiguration: new FormControl<string | null | undefined>(undefined),
			hostSubscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			mapReduceConfiguration: new FormControl<string | null | undefined>(undefined),
			oozieConfiguration: new FormControl<string | null | undefined>(undefined),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			sparkVersion: new FormControl<string | null | undefined>(undefined),
			stormConfiguration: new FormControl<string | null | undefined>(undefined),
			subnetName: new FormControl<string | null | undefined>(undefined),
			tenant: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeToLive: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			virtualNetworkId: new FormControl<string | null | undefined>(undefined),
			yarnConfiguration: new FormControl<string | null | undefined>(undefined),
			zookeeperNodeSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HDInsightOnDemandLinkedServiceTypePropertiesAdditionalLinkedServiceNames {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: HDInsightOnDemandLinkedServiceTypePropertiesAdditionalLinkedServiceNamesType;
	}
	export interface HDInsightOnDemandLinkedServiceTypePropertiesAdditionalLinkedServiceNamesFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: FormControl<HDInsightOnDemandLinkedServiceTypePropertiesAdditionalLinkedServiceNamesType | null | undefined>,
	}
	export function CreateHDInsightOnDemandLinkedServiceTypePropertiesAdditionalLinkedServiceNamesFormGroup() {
		return new FormGroup<HDInsightOnDemandLinkedServiceTypePropertiesAdditionalLinkedServiceNamesFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<HDInsightOnDemandLinkedServiceTypePropertiesAdditionalLinkedServiceNamesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HDInsightOnDemandLinkedServiceTypePropertiesAdditionalLinkedServiceNamesType { LinkedServiceReference = 0 }

	export interface HDInsightOnDemandLinkedServiceTypePropertiesClusterPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface HDInsightOnDemandLinkedServiceTypePropertiesClusterPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHDInsightOnDemandLinkedServiceTypePropertiesClusterPasswordFormGroup() {
		return new FormGroup<HDInsightOnDemandLinkedServiceTypePropertiesClusterPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HDInsightOnDemandLinkedServiceTypePropertiesClusterSshPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface HDInsightOnDemandLinkedServiceTypePropertiesClusterSshPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHDInsightOnDemandLinkedServiceTypePropertiesClusterSshPasswordFormGroup() {
		return new FormGroup<HDInsightOnDemandLinkedServiceTypePropertiesClusterSshPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Custom script action to run on HDI ondemand cluster once it's up. */
	export interface ScriptAction {

		/**
		 * The user provided name of the script action.
		 * Required
		 */
		name: string;

		/** The parameters for the script action. */
		parameters?: string | null;

		/**
		 * The node types on which the script action should be executed.
		 * Required
		 */
		roles: ScriptActionRoles;

		/**
		 * The URI for the script action.
		 * Required
		 */
		uri: string;
	}

	/** Custom script action to run on HDI ondemand cluster once it's up. */
	export interface ScriptActionFormProperties {

		/**
		 * The user provided name of the script action.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The parameters for the script action. */
		parameters: FormControl<string | null | undefined>,

		/**
		 * The node types on which the script action should be executed.
		 * Required
		 */
		roles: FormControl<ScriptActionRoles | null | undefined>,

		/**
		 * The URI for the script action.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateScriptActionFormGroup() {
		return new FormGroup<ScriptActionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<string | null | undefined>(undefined),
			roles: new FormControl<ScriptActionRoles | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScriptActionRoles { Headnode = 0, Workernode = 1, Zookeeper = 2 }

	export interface HDInsightOnDemandLinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface HDInsightOnDemandLinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHDInsightOnDemandLinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<HDInsightOnDemandLinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Hadoop Distributed File System (HDFS) linked service. */
	export interface HdfsLinkedService {

		/**
		 * HDFS linked service properties.
		 * Required
		 */
		typeProperties: HdfsLinkedServiceTypeProperties;
	}

	/** Hadoop Distributed File System (HDFS) linked service. */
	export interface HdfsLinkedServiceFormProperties {
	}
	export function CreateHdfsLinkedServiceFormGroup() {
		return new FormGroup<HdfsLinkedServiceFormProperties>({
		});

	}


	/** HDFS linked service properties. */
	export interface HdfsLinkedServiceTypeProperties {

		/** Type of authentication used to connect to the HDFS. Possible values are: Anonymous and Windows. Type: string (or Expression with resultType string). */
		authenticationType?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: HdfsLinkedServiceTypePropertiesPassword;

		/**
		 * The URL of the HDFS service endpoint, e.g. http://myhostname:50070/webhdfs/v1 . Type: string (or Expression with resultType string).
		 * Required
		 */
		url: string;

		/** User name for Windows authentication. Type: string (or Expression with resultType string). */
		userName?: string | null;
	}

	/** HDFS linked service properties. */
	export interface HdfsLinkedServiceTypePropertiesFormProperties {

		/** Type of authentication used to connect to the HDFS. Possible values are: Anonymous and Windows. Type: string (or Expression with resultType string). */
		authenticationType: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The URL of the HDFS service endpoint, e.g. http://myhostname:50070/webhdfs/v1 . Type: string (or Expression with resultType string).
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/** User name for Windows authentication. Type: string (or Expression with resultType string). */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateHdfsLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<HdfsLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HdfsLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface HdfsLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHdfsLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<HdfsLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Hive Server linked service. */
	export interface HiveLinkedService {

		/**
		 * Hive Server linked service properties.
		 * Required
		 */
		typeProperties: HiveLinkedServiceTypeProperties;
	}

	/** Hive Server linked service. */
	export interface HiveLinkedServiceFormProperties {
	}
	export function CreateHiveLinkedServiceFormGroup() {
		return new FormGroup<HiveLinkedServiceFormProperties>({
		});

	}


	/** Hive Server linked service properties. */
	export interface HiveLinkedServiceTypeProperties {

		/** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
		allowHostNameCNMismatch?: string | null;

		/** Specifies whether to allow self-signed certificates from the server. The default value is false. */
		allowSelfSignedServerCert?: string | null;

		/**
		 * The authentication method used to access the Hive server.
		 * Required
		 */
		authenticationType: HiveLinkedServiceTypePropertiesAuthenticationType;

		/** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
		enableSsl?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * IP address or host name of the Hive server, separated by ';' for multiple hosts (only when serviceDiscoveryMode is enable).
		 * Required
		 */
		host: string;

		/** The partial URL corresponding to the Hive server. */
		httpPath?: string | null;

		/** The base definition of a secret type. */
		password?: HiveLinkedServiceTypePropertiesPassword;

		/** The TCP port that the Hive server uses to listen for client connections. */
		port?: string | null;

		/** The type of Hive server. */
		serverType?: HiveLinkedServiceTypePropertiesServerType | null;

		/** true to indicate using the ZooKeeper service, false not. */
		serviceDiscoveryMode?: string | null;

		/** The transport protocol to use in the Thrift layer. */
		thriftTransportProtocol?: HiveLinkedServiceTypePropertiesThriftTransportProtocol | null;

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath?: string | null;

		/** Specifies whether the driver uses native HiveQL queries,or converts them into an equivalent form in HiveQL. */
		useNativeQuery?: string | null;

		/** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
		useSystemTrustStore?: string | null;

		/** The user name that you use to access Hive Server. */
		username?: string | null;

		/** The namespace on ZooKeeper under which Hive Server 2 nodes are added. */
		zooKeeperNameSpace?: string | null;
	}

	/** Hive Server linked service properties. */
	export interface HiveLinkedServiceTypePropertiesFormProperties {

		/** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
		allowHostNameCNMismatch: FormControl<string | null | undefined>,

		/** Specifies whether to allow self-signed certificates from the server. The default value is false. */
		allowSelfSignedServerCert: FormControl<string | null | undefined>,

		/**
		 * The authentication method used to access the Hive server.
		 * Required
		 */
		authenticationType: FormControl<HiveLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
		enableSsl: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * IP address or host name of the Hive server, separated by ';' for multiple hosts (only when serviceDiscoveryMode is enable).
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** The partial URL corresponding to the Hive server. */
		httpPath: FormControl<string | null | undefined>,

		/** The TCP port that the Hive server uses to listen for client connections. */
		port: FormControl<string | null | undefined>,

		/** The type of Hive server. */
		serverType: FormControl<HiveLinkedServiceTypePropertiesServerType | null | undefined>,

		/** true to indicate using the ZooKeeper service, false not. */
		serviceDiscoveryMode: FormControl<string | null | undefined>,

		/** The transport protocol to use in the Thrift layer. */
		thriftTransportProtocol: FormControl<HiveLinkedServiceTypePropertiesThriftTransportProtocol | null | undefined>,

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath: FormControl<string | null | undefined>,

		/** Specifies whether the driver uses native HiveQL queries,or converts them into an equivalent form in HiveQL. */
		useNativeQuery: FormControl<string | null | undefined>,

		/** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
		useSystemTrustStore: FormControl<string | null | undefined>,

		/** The user name that you use to access Hive Server. */
		username: FormControl<string | null | undefined>,

		/** The namespace on ZooKeeper under which Hive Server 2 nodes are added. */
		zooKeeperNameSpace: FormControl<string | null | undefined>,
	}
	export function CreateHiveLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<HiveLinkedServiceTypePropertiesFormProperties>({
			allowHostNameCNMismatch: new FormControl<string | null | undefined>(undefined),
			allowSelfSignedServerCert: new FormControl<string | null | undefined>(undefined),
			authenticationType: new FormControl<HiveLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			enableSsl: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			httpPath: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			serverType: new FormControl<HiveLinkedServiceTypePropertiesServerType | null | undefined>(undefined),
			serviceDiscoveryMode: new FormControl<string | null | undefined>(undefined),
			thriftTransportProtocol: new FormControl<HiveLinkedServiceTypePropertiesThriftTransportProtocol | null | undefined>(undefined),
			trustedCertPath: new FormControl<string | null | undefined>(undefined),
			useNativeQuery: new FormControl<string | null | undefined>(undefined),
			useSystemTrustStore: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			zooKeeperNameSpace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HiveLinkedServiceTypePropertiesAuthenticationType { Anonymous = 0, Username = 1, UsernameAndPassword = 2, WindowsAzureHDInsightService = 3 }

	export interface HiveLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface HiveLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHiveLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<HiveLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HiveLinkedServiceTypePropertiesServerType { HiveServer1 = 0, HiveServer2 = 1, HiveThriftServer = 2 }

	export enum HiveLinkedServiceTypePropertiesThriftTransportProtocol { Binary = 0, SASL = 1, 'HTTP ' = 2 }


	/** Linked service for an HTTP source. */
	export interface HttpLinkedService {

		/**
		 * Properties specific to this linked service type.
		 * Required
		 */
		typeProperties: HttpLinkedServiceTypeProperties;
	}

	/** Linked service for an HTTP source. */
	export interface HttpLinkedServiceFormProperties {
	}
	export function CreateHttpLinkedServiceFormGroup() {
		return new FormGroup<HttpLinkedServiceFormProperties>({
		});

	}


	/** Properties specific to this linked service type. */
	export interface HttpLinkedServiceTypeProperties {

		/** The authentication type to be used to connect to the HTTP server. */
		authenticationType?: HttpLinkedServiceTypePropertiesAuthenticationType | null;

		/** Thumbprint of certificate for ClientCertificate authentication. Only valid for on-premises copy. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string). */
		certThumbprint?: string | null;

		/** Base64 encoded certificate data for ClientCertificate authentication. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string). */
		embeddedCertData?: string | null;

		/** If true, validate the HTTPS server SSL certificate. Default value is true. Type: boolean (or Expression with resultType boolean). */
		enableServerCertificateValidation?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: HttpLinkedServiceTypePropertiesPassword;

		/**
		 * The base URL of the HTTP endpoint, e.g. http://www.microsoft.com. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: string;

		/** User name for Basic, Digest, or Windows authentication. Type: string (or Expression with resultType string). */
		userName?: string | null;
	}

	/** Properties specific to this linked service type. */
	export interface HttpLinkedServiceTypePropertiesFormProperties {

		/** The authentication type to be used to connect to the HTTP server. */
		authenticationType: FormControl<HttpLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/** Thumbprint of certificate for ClientCertificate authentication. Only valid for on-premises copy. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string). */
		certThumbprint: FormControl<string | null | undefined>,

		/** Base64 encoded certificate data for ClientCertificate authentication. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string). */
		embeddedCertData: FormControl<string | null | undefined>,

		/** If true, validate the HTTPS server SSL certificate. Default value is true. Type: boolean (or Expression with resultType boolean). */
		enableServerCertificateValidation: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The base URL of the HTTP endpoint, e.g. http://www.microsoft.com. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/** User name for Basic, Digest, or Windows authentication. Type: string (or Expression with resultType string). */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateHttpLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<HttpLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<HttpLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined),
			certThumbprint: new FormControl<string | null | undefined>(undefined),
			embeddedCertData: new FormControl<string | null | undefined>(undefined),
			enableServerCertificateValidation: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HttpLinkedServiceTypePropertiesAuthenticationType { Basic = 0, Anonymous = 1, Digest = 2, Windows = 3, ClientCertificate = 4 }

	export interface HttpLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface HttpLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHttpLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<HttpLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Hubspot Service linked service. */
	export interface HubspotLinkedService {

		/**
		 * Hubspot Service linked service properties.
		 * Required
		 */
		typeProperties: HubspotLinkedServiceTypeProperties;
	}

	/** Hubspot Service linked service. */
	export interface HubspotLinkedServiceFormProperties {
	}
	export function CreateHubspotLinkedServiceFormGroup() {
		return new FormGroup<HubspotLinkedServiceFormProperties>({
		});

	}


	/** Hubspot Service linked service properties. */
	export interface HubspotLinkedServiceTypeProperties {

		/** The base definition of a secret type. */
		accessToken?: HubspotLinkedServiceTypePropertiesAccessToken;

		/**
		 * The client ID associated with your Hubspot application.
		 * Required
		 */
		clientId: string;

		/** The base definition of a secret type. */
		clientSecret?: HubspotLinkedServiceTypePropertiesClientSecret;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		refreshToken?: HubspotLinkedServiceTypePropertiesRefreshToken;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification?: string | null;
	}

	/** Hubspot Service linked service properties. */
	export interface HubspotLinkedServiceTypePropertiesFormProperties {

		/**
		 * The client ID associated with your Hubspot application.
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification: FormControl<string | null | undefined>,
	}
	export function CreateHubspotLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<HubspotLinkedServiceTypePropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HubspotLinkedServiceTypePropertiesAccessToken {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface HubspotLinkedServiceTypePropertiesAccessTokenFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHubspotLinkedServiceTypePropertiesAccessTokenFormGroup() {
		return new FormGroup<HubspotLinkedServiceTypePropertiesAccessTokenFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HubspotLinkedServiceTypePropertiesClientSecret {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface HubspotLinkedServiceTypePropertiesClientSecretFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHubspotLinkedServiceTypePropertiesClientSecretFormGroup() {
		return new FormGroup<HubspotLinkedServiceTypePropertiesClientSecretFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HubspotLinkedServiceTypePropertiesRefreshToken {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface HubspotLinkedServiceTypePropertiesRefreshTokenFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHubspotLinkedServiceTypePropertiesRefreshTokenFormGroup() {
		return new FormGroup<HubspotLinkedServiceTypePropertiesRefreshTokenFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Impala server linked service. */
	export interface ImpalaLinkedService {

		/**
		 * Impala server linked service properties.
		 * Required
		 */
		typeProperties: ImpalaLinkedServiceTypeProperties;
	}

	/** Impala server linked service. */
	export interface ImpalaLinkedServiceFormProperties {
	}
	export function CreateImpalaLinkedServiceFormGroup() {
		return new FormGroup<ImpalaLinkedServiceFormProperties>({
		});

	}


	/** Impala server linked service properties. */
	export interface ImpalaLinkedServiceTypeProperties {

		/** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
		allowHostNameCNMismatch?: string | null;

		/** Specifies whether to allow self-signed certificates from the server. The default value is false. */
		allowSelfSignedServerCert?: string | null;

		/**
		 * The authentication type to use.
		 * Required
		 */
		authenticationType: ImpalaLinkedServiceTypePropertiesAuthenticationType;

		/** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
		enableSsl?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The IP address or host name of the Impala server. (i.e. 192.168.222.160)
		 * Required
		 */
		host: string;

		/** The base definition of a secret type. */
		password?: ImpalaLinkedServiceTypePropertiesPassword;

		/** The TCP port that the Impala server uses to listen for client connections. The default value is 21050. */
		port?: string | null;

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath?: string | null;

		/** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
		useSystemTrustStore?: string | null;

		/** The user name used to access the Impala server. The default value is anonymous when using SASLUsername. */
		username?: string | null;
	}

	/** Impala server linked service properties. */
	export interface ImpalaLinkedServiceTypePropertiesFormProperties {

		/** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
		allowHostNameCNMismatch: FormControl<string | null | undefined>,

		/** Specifies whether to allow self-signed certificates from the server. The default value is false. */
		allowSelfSignedServerCert: FormControl<string | null | undefined>,

		/**
		 * The authentication type to use.
		 * Required
		 */
		authenticationType: FormControl<ImpalaLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
		enableSsl: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The IP address or host name of the Impala server. (i.e. 192.168.222.160)
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** The TCP port that the Impala server uses to listen for client connections. The default value is 21050. */
		port: FormControl<string | null | undefined>,

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath: FormControl<string | null | undefined>,

		/** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
		useSystemTrustStore: FormControl<string | null | undefined>,

		/** The user name used to access the Impala server. The default value is anonymous when using SASLUsername. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateImpalaLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<ImpalaLinkedServiceTypePropertiesFormProperties>({
			allowHostNameCNMismatch: new FormControl<string | null | undefined>(undefined),
			allowSelfSignedServerCert: new FormControl<string | null | undefined>(undefined),
			authenticationType: new FormControl<ImpalaLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			enableSsl: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<string | null | undefined>(undefined),
			trustedCertPath: new FormControl<string | null | undefined>(undefined),
			useSystemTrustStore: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImpalaLinkedServiceTypePropertiesAuthenticationType { Anonymous = 0, SASLUsername = 1, UsernameAndPassword = 2 }

	export interface ImpalaLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface ImpalaLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateImpalaLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<ImpalaLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Informix linked service. */
	export interface InformixLinkedService {

		/**
		 * Informix linked service properties.
		 * Required
		 */
		typeProperties: InformixLinkedServiceTypeProperties;
	}

	/** Informix linked service. */
	export interface InformixLinkedServiceFormProperties {
	}
	export function CreateInformixLinkedServiceFormGroup() {
		return new FormGroup<InformixLinkedServiceFormProperties>({
		});

	}


	/** Informix linked service properties. */
	export interface InformixLinkedServiceTypeProperties {

		/** Type of authentication used to connect to the Informix as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
		authenticationType?: string | null;

		/**
		 * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: string;

		/** The base definition of a secret type. */
		credential?: InformixLinkedServiceTypePropertiesCredential;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: InformixLinkedServiceTypePropertiesPassword;

		/** User name for Basic authentication. Type: string (or Expression with resultType string). */
		userName?: string | null;
	}

	/** Informix linked service properties. */
	export interface InformixLinkedServiceTypePropertiesFormProperties {

		/** Type of authentication used to connect to the Informix as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
		authenticationType: FormControl<string | null | undefined>,

		/**
		 * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** User name for Basic authentication. Type: string (or Expression with resultType string). */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateInformixLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<InformixLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<string | null | undefined>(undefined),
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InformixLinkedServiceTypePropertiesCredential {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface InformixLinkedServiceTypePropertiesCredentialFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateInformixLinkedServiceTypePropertiesCredentialFormGroup() {
		return new FormGroup<InformixLinkedServiceTypePropertiesCredentialFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InformixLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface InformixLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateInformixLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<InformixLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Jira Service linked service. */
	export interface JiraLinkedService {

		/**
		 * Jira Service linked service properties.
		 * Required
		 */
		typeProperties: JiraLinkedServiceTypeProperties;
	}

	/** Jira Service linked service. */
	export interface JiraLinkedServiceFormProperties {
	}
	export function CreateJiraLinkedServiceFormGroup() {
		return new FormGroup<JiraLinkedServiceFormProperties>({
		});

	}


	/** Jira Service linked service properties. */
	export interface JiraLinkedServiceTypeProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The IP address or host name of the Jira service. (e.g. jira.example.com)
		 * Required
		 */
		host: string;

		/** The base definition of a secret type. */
		password?: JiraLinkedServiceTypePropertiesPassword;

		/** The TCP port that the Jira server uses to listen for client connections. The default value is 443 if connecting through HTTPS, or 8080 if connecting through HTTP. */
		port?: string | null;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification?: string | null;

		/**
		 * The user name that you use to access Jira Service.
		 * Required
		 */
		username: string;
	}

	/** Jira Service linked service properties. */
	export interface JiraLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The IP address or host name of the Jira service. (e.g. jira.example.com)
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** The TCP port that the Jira server uses to listen for client connections. The default value is 443 if connecting through HTTPS, or 8080 if connecting through HTTP. */
		port: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification: FormControl<string | null | undefined>,

		/**
		 * The user name that you use to access Jira Service.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateJiraLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<JiraLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<string | null | undefined>(undefined),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JiraLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface JiraLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateJiraLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<JiraLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource. */
	export interface LinkedService {

		/** List of tags that can be used for describing the linked service. */
		annotations?: Array<string>;

		/** Integration runtime reference type. */
		connectVia?: any;

		/** Linked service description. */
		description?: string | null;

		/** Definition of all parameters for an entity. */
		parameters?: {[id: string]: LinkedServiceParameters };

		/**
		 * Type of linked service.
		 * Required
		 */
		type: string;
	}

	/** The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource. */
	export interface LinkedServiceFormProperties {

		/** Integration runtime reference type. */
		connectVia: FormControl<any | null | undefined>,

		/** Linked service description. */
		description: FormControl<string | null | undefined>,

		/** Definition of all parameters for an entity. */
		parameters: FormControl<{[id: string]: LinkedServiceParameters } | null | undefined>,

		/**
		 * Type of linked service.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLinkedServiceFormGroup() {
		return new FormGroup<LinkedServiceFormProperties>({
			connectVia: new FormControl<any | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: LinkedServiceParameters } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LinkedServiceParameters {

		/** Default value of parameter. */
		defaultValue?: string | null;

		/**
		 * Parameter type.
		 * Required
		 */
		type: LinkedServiceParametersType;
	}
	export interface LinkedServiceParametersFormProperties {

		/** Default value of parameter. */
		defaultValue: FormControl<string | null | undefined>,

		/**
		 * Parameter type.
		 * Required
		 */
		type: FormControl<LinkedServiceParametersType | null | undefined>,
	}
	export function CreateLinkedServiceParametersFormGroup() {
		return new FormGroup<LinkedServiceParametersFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<LinkedServiceParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LinkedServiceParametersType { Object = 0, String = 1, Int = 2, Float = 3, Bool = 4, Array = 5, SecureString = 6 }


	/** Magento server linked service. */
	export interface MagentoLinkedService {

		/**
		 * Magento server linked service properties.
		 * Required
		 */
		typeProperties: MagentoLinkedServiceTypeProperties;
	}

	/** Magento server linked service. */
	export interface MagentoLinkedServiceFormProperties {
	}
	export function CreateMagentoLinkedServiceFormGroup() {
		return new FormGroup<MagentoLinkedServiceFormProperties>({
		});

	}


	/** Magento server linked service properties. */
	export interface MagentoLinkedServiceTypeProperties {

		/** The base definition of a secret type. */
		accessToken?: MagentoLinkedServiceTypePropertiesAccessToken;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The URL of the Magento instance. (i.e. 192.168.222.110/magento3)
		 * Required
		 */
		host: string;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification?: string | null;
	}

	/** Magento server linked service properties. */
	export interface MagentoLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The URL of the Magento instance. (i.e. 192.168.222.110/magento3)
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification: FormControl<string | null | undefined>,
	}
	export function CreateMagentoLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<MagentoLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MagentoLinkedServiceTypePropertiesAccessToken {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface MagentoLinkedServiceTypePropertiesAccessTokenFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMagentoLinkedServiceTypePropertiesAccessTokenFormGroup() {
		return new FormGroup<MagentoLinkedServiceTypePropertiesAccessTokenFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** MariaDB server linked service. */
	export interface MariaDBLinkedService {

		/**
		 * MariaDB server linked service properties.
		 * Required
		 */
		typeProperties: MariaDBLinkedServiceTypeProperties;
	}

	/** MariaDB server linked service. */
	export interface MariaDBLinkedServiceFormProperties {
	}
	export function CreateMariaDBLinkedServiceFormGroup() {
		return new FormGroup<MariaDBLinkedServiceFormProperties>({
		});

	}


	/** MariaDB server linked service properties. */
	export interface MariaDBLinkedServiceTypeProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		pwd?: MariaDBLinkedServiceTypePropertiesPwd;
	}

	/** MariaDB server linked service properties. */
	export interface MariaDBLinkedServiceTypePropertiesFormProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,
	}
	export function CreateMariaDBLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<MariaDBLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MariaDBLinkedServiceTypePropertiesPwd {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface MariaDBLinkedServiceTypePropertiesPwdFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateMariaDBLinkedServiceTypePropertiesPwdFormGroup() {
		return new FormGroup<MariaDBLinkedServiceTypePropertiesPwdFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Marketo server linked service. */
	export interface MarketoLinkedService {

		/**
		 * Marketo server linked service properties.
		 * Required
		 */
		typeProperties: MarketoLinkedServiceTypeProperties;
	}

	/** Marketo server linked service. */
	export interface MarketoLinkedServiceFormProperties {
	}
	export function CreateMarketoLinkedServiceFormGroup() {
		return new FormGroup<MarketoLinkedServiceFormProperties>({
		});

	}


	/** Marketo server linked service properties. */
	export interface MarketoLinkedServiceTypeProperties {

		/**
		 * The client Id of your Marketo service.
		 * Required
		 */
		clientId: string;

		/** The base definition of a secret type. */
		clientSecret?: MarketoLinkedServiceTypePropertiesClientSecret;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The endpoint of the Marketo server. (i.e. 123-ABC-321.mktorest.com)
		 * Required
		 */
		endpoint: string;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification?: string | null;
	}

	/** Marketo server linked service properties. */
	export interface MarketoLinkedServiceTypePropertiesFormProperties {

		/**
		 * The client Id of your Marketo service.
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The endpoint of the Marketo server. (i.e. 123-ABC-321.mktorest.com)
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification: FormControl<string | null | undefined>,
	}
	export function CreateMarketoLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<MarketoLinkedServiceTypePropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MarketoLinkedServiceTypePropertiesClientSecret {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface MarketoLinkedServiceTypePropertiesClientSecretFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMarketoLinkedServiceTypePropertiesClientSecretFormGroup() {
		return new FormGroup<MarketoLinkedServiceTypePropertiesClientSecretFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Microsoft Access linked service. */
	export interface MicrosoftAccessLinkedService {

		/**
		 * Microsoft Access linked service properties.
		 * Required
		 */
		typeProperties: MicrosoftAccessLinkedServiceTypeProperties;
	}

	/** Microsoft Access linked service. */
	export interface MicrosoftAccessLinkedServiceFormProperties {
	}
	export function CreateMicrosoftAccessLinkedServiceFormGroup() {
		return new FormGroup<MicrosoftAccessLinkedServiceFormProperties>({
		});

	}


	/** Microsoft Access linked service properties. */
	export interface MicrosoftAccessLinkedServiceTypeProperties {

		/** Type of authentication used to connect to the Microsoft Access as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
		authenticationType?: string | null;

		/**
		 * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: string;

		/** The base definition of a secret type. */
		credential?: MicrosoftAccessLinkedServiceTypePropertiesCredential;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: MicrosoftAccessLinkedServiceTypePropertiesPassword;

		/** User name for Basic authentication. Type: string (or Expression with resultType string). */
		userName?: string | null;
	}

	/** Microsoft Access linked service properties. */
	export interface MicrosoftAccessLinkedServiceTypePropertiesFormProperties {

		/** Type of authentication used to connect to the Microsoft Access as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
		authenticationType: FormControl<string | null | undefined>,

		/**
		 * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** User name for Basic authentication. Type: string (or Expression with resultType string). */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateMicrosoftAccessLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<MicrosoftAccessLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<string | null | undefined>(undefined),
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MicrosoftAccessLinkedServiceTypePropertiesCredential {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface MicrosoftAccessLinkedServiceTypePropertiesCredentialFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMicrosoftAccessLinkedServiceTypePropertiesCredentialFormGroup() {
		return new FormGroup<MicrosoftAccessLinkedServiceTypePropertiesCredentialFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MicrosoftAccessLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface MicrosoftAccessLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMicrosoftAccessLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<MicrosoftAccessLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for MongoDb data source. */
	export interface MongoDbLinkedService {

		/**
		 * MongoDB linked service properties.
		 * Required
		 */
		typeProperties: MongoDbLinkedServiceTypeProperties;
	}

	/** Linked service for MongoDb data source. */
	export interface MongoDbLinkedServiceFormProperties {
	}
	export function CreateMongoDbLinkedServiceFormGroup() {
		return new FormGroup<MongoDbLinkedServiceFormProperties>({
		});

	}


	/** MongoDB linked service properties. */
	export interface MongoDbLinkedServiceTypeProperties {

		/** Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean). */
		allowSelfSignedServerCert?: string | null;

		/** Database to verify the username and password. Type: string (or Expression with resultType string). */
		authSource?: string | null;

		/** The authentication type to be used to connect to the MongoDB database. */
		authenticationType?: FtpServerLinkedServiceTypePropertiesAuthenticationType | null;

		/**
		 * The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
		 * Required
		 */
		databaseName: string;

		/** Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean). */
		enableSsl?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: MongoDbLinkedServiceTypePropertiesPassword;

		/** The TCP port number that the MongoDB server uses to listen for client connections. The default value is 27017. Type: integer (or Expression with resultType integer), minimum: 0. */
		port?: string | null;

		/**
		 * The IP address or server name of the MongoDB server. Type: string (or Expression with resultType string).
		 * Required
		 */
		server: string;

		/** Username for authentication. Type: string (or Expression with resultType string). */
		username?: string | null;
	}

	/** MongoDB linked service properties. */
	export interface MongoDbLinkedServiceTypePropertiesFormProperties {

		/** Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean). */
		allowSelfSignedServerCert: FormControl<string | null | undefined>,

		/** Database to verify the username and password. Type: string (or Expression with resultType string). */
		authSource: FormControl<string | null | undefined>,

		/** The authentication type to be used to connect to the MongoDB database. */
		authenticationType: FormControl<FtpServerLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/**
		 * The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
		 * Required
		 */
		databaseName: FormControl<string | null | undefined>,

		/** Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean). */
		enableSsl: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The TCP port number that the MongoDB server uses to listen for client connections. The default value is 27017. Type: integer (or Expression with resultType integer), minimum: 0. */
		port: FormControl<string | null | undefined>,

		/**
		 * The IP address or server name of the MongoDB server. Type: string (or Expression with resultType string).
		 * Required
		 */
		server: FormControl<string | null | undefined>,

		/** Username for authentication. Type: string (or Expression with resultType string). */
		username: FormControl<string | null | undefined>,
	}
	export function CreateMongoDbLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<MongoDbLinkedServiceTypePropertiesFormProperties>({
			allowSelfSignedServerCert: new FormControl<string | null | undefined>(undefined),
			authSource: new FormControl<string | null | undefined>(undefined),
			authenticationType: new FormControl<FtpServerLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enableSsl: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MongoDbLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface MongoDbLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMongoDbLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<MongoDbLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for MongoDB data source. */
	export interface MongoDbV2LinkedService {

		/**
		 * MongoDB linked service properties.
		 * Required
		 */
		typeProperties: MongoDbV2LinkedServiceTypeProperties;
	}

	/** Linked service for MongoDB data source. */
	export interface MongoDbV2LinkedServiceFormProperties {
	}
	export function CreateMongoDbV2LinkedServiceFormGroup() {
		return new FormGroup<MongoDbV2LinkedServiceFormProperties>({
		});

	}


	/** MongoDB linked service properties. */
	export interface MongoDbV2LinkedServiceTypeProperties {

		/**
		 * The MongoDB connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: string;

		/**
		 * The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
		 * Required
		 */
		database: string;
	}

	/** MongoDB linked service properties. */
	export interface MongoDbV2LinkedServiceTypePropertiesFormProperties {

		/**
		 * The MongoDB connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/**
		 * The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
		 * Required
		 */
		database: FormControl<string | null | undefined>,
	}
	export function CreateMongoDbV2LinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<MongoDbV2LinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for MySQL data source. */
	export interface MySqlLinkedService {

		/**
		 * MySQL linked service properties.
		 * Required
		 */
		typeProperties: MySqlLinkedServiceTypeProperties;
	}

	/** Linked service for MySQL data source. */
	export interface MySqlLinkedServiceFormProperties {
	}
	export function CreateMySqlLinkedServiceFormGroup() {
		return new FormGroup<MySqlLinkedServiceFormProperties>({
		});

	}


	/** MySQL linked service properties. */
	export interface MySqlLinkedServiceTypeProperties {

		/**
		 * The connection string.
		 * Required
		 */
		connectionString: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		password?: MySqlLinkedServiceTypePropertiesPassword;
	}

	/** MySQL linked service properties. */
	export interface MySqlLinkedServiceTypePropertiesFormProperties {

		/**
		 * The connection string.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,
	}
	export function CreateMySqlLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<MySqlLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MySqlLinkedServiceTypePropertiesPassword {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface MySqlLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateMySqlLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<MySqlLinkedServiceTypePropertiesPasswordFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Netezza linked service. */
	export interface NetezzaLinkedService {

		/**
		 * Netezza linked service properties.
		 * Required
		 */
		typeProperties: NetezzaLinkedServiceTypeProperties;
	}

	/** Netezza linked service. */
	export interface NetezzaLinkedServiceFormProperties {
	}
	export function CreateNetezzaLinkedServiceFormGroup() {
		return new FormGroup<NetezzaLinkedServiceFormProperties>({
		});

	}


	/** Netezza linked service properties. */
	export interface NetezzaLinkedServiceTypeProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		pwd?: NetezzaLinkedServiceTypePropertiesPwd;
	}

	/** Netezza linked service properties. */
	export interface NetezzaLinkedServiceTypePropertiesFormProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,
	}
	export function CreateNetezzaLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<NetezzaLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetezzaLinkedServiceTypePropertiesPwd {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface NetezzaLinkedServiceTypePropertiesPwdFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateNetezzaLinkedServiceTypePropertiesPwdFormGroup() {
		return new FormGroup<NetezzaLinkedServiceTypePropertiesPwdFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Open Data Protocol (OData) linked service. */
	export interface ODataLinkedService {

		/**
		 * OData linked service properties.
		 * Required
		 */
		typeProperties: ODataLinkedServiceTypeProperties;
	}

	/** Open Data Protocol (OData) linked service. */
	export interface ODataLinkedServiceFormProperties {
	}
	export function CreateODataLinkedServiceFormGroup() {
		return new FormGroup<ODataLinkedServiceFormProperties>({
		});

	}


	/** OData linked service properties. */
	export interface ODataLinkedServiceTypeProperties {

		/** Specify the resource you are requesting authorization to use Directory. Type: string (or Expression with resultType string). */
		aadResourceId?: string | null;

		/** Specify the credential type (key or cert) is used for service principal. */
		aadServicePrincipalCredentialType?: CommonDataServiceForAppsLinkedServiceTypePropertiesServicePrincipalCredentialType | null;

		/** Type of authentication used to connect to the OData service. */
		authenticationType?: ODataLinkedServiceTypePropertiesAuthenticationType | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: ODataLinkedServiceTypePropertiesPassword;

		/** The base definition of a secret type. */
		servicePrincipalEmbeddedCert?: ODataLinkedServiceTypePropertiesServicePrincipalEmbeddedCert;

		/** The base definition of a secret type. */
		servicePrincipalEmbeddedCertPassword?: ODataLinkedServiceTypePropertiesServicePrincipalEmbeddedCertPassword;

		/** Specify the application id of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). */
		servicePrincipalId?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalKey?: ODataLinkedServiceTypePropertiesServicePrincipalKey;

		/** Specify the tenant information (domain name or tenant ID) under which your application resides. Type: string (or Expression with resultType string). */
		tenant?: string | null;

		/**
		 * The URL of the OData service endpoint. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: string;

		/** User name of the OData service. Type: string (or Expression with resultType string). */
		userName?: string | null;
	}

	/** OData linked service properties. */
	export interface ODataLinkedServiceTypePropertiesFormProperties {

		/** Specify the resource you are requesting authorization to use Directory. Type: string (or Expression with resultType string). */
		aadResourceId: FormControl<string | null | undefined>,

		/** Specify the credential type (key or cert) is used for service principal. */
		aadServicePrincipalCredentialType: FormControl<CommonDataServiceForAppsLinkedServiceTypePropertiesServicePrincipalCredentialType | null | undefined>,

		/** Type of authentication used to connect to the OData service. */
		authenticationType: FormControl<ODataLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** Specify the application id of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). */
		servicePrincipalId: FormControl<string | null | undefined>,

		/** Specify the tenant information (domain name or tenant ID) under which your application resides. Type: string (or Expression with resultType string). */
		tenant: FormControl<string | null | undefined>,

		/**
		 * The URL of the OData service endpoint. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/** User name of the OData service. Type: string (or Expression with resultType string). */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateODataLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<ODataLinkedServiceTypePropertiesFormProperties>({
			aadResourceId: new FormControl<string | null | undefined>(undefined),
			aadServicePrincipalCredentialType: new FormControl<CommonDataServiceForAppsLinkedServiceTypePropertiesServicePrincipalCredentialType | null | undefined>(undefined),
			authenticationType: new FormControl<ODataLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			tenant: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ODataLinkedServiceTypePropertiesAuthenticationType { Basic = 0, Anonymous = 1, Windows = 2, AadServicePrincipal = 3, ManagedServiceIdentity = 4 }

	export interface ODataLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface ODataLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateODataLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<ODataLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ODataLinkedServiceTypePropertiesServicePrincipalEmbeddedCert {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface ODataLinkedServiceTypePropertiesServicePrincipalEmbeddedCertFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateODataLinkedServiceTypePropertiesServicePrincipalEmbeddedCertFormGroup() {
		return new FormGroup<ODataLinkedServiceTypePropertiesServicePrincipalEmbeddedCertFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ODataLinkedServiceTypePropertiesServicePrincipalEmbeddedCertPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface ODataLinkedServiceTypePropertiesServicePrincipalEmbeddedCertPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateODataLinkedServiceTypePropertiesServicePrincipalEmbeddedCertPasswordFormGroup() {
		return new FormGroup<ODataLinkedServiceTypePropertiesServicePrincipalEmbeddedCertPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ODataLinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface ODataLinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateODataLinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<ODataLinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Open Database Connectivity (ODBC) linked service. */
	export interface OdbcLinkedService {

		/**
		 * ODBC linked service properties.
		 * Required
		 */
		typeProperties: OdbcLinkedServiceTypeProperties;
	}

	/** Open Database Connectivity (ODBC) linked service. */
	export interface OdbcLinkedServiceFormProperties {
	}
	export function CreateOdbcLinkedServiceFormGroup() {
		return new FormGroup<OdbcLinkedServiceFormProperties>({
		});

	}


	/** ODBC linked service properties. */
	export interface OdbcLinkedServiceTypeProperties {

		/** Type of authentication used to connect to the ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
		authenticationType?: string | null;

		/**
		 * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: string;

		/** The base definition of a secret type. */
		credential?: OdbcLinkedServiceTypePropertiesCredential;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: OdbcLinkedServiceTypePropertiesPassword;

		/** User name for Basic authentication. Type: string (or Expression with resultType string). */
		userName?: string | null;
	}

	/** ODBC linked service properties. */
	export interface OdbcLinkedServiceTypePropertiesFormProperties {

		/** Type of authentication used to connect to the ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
		authenticationType: FormControl<string | null | undefined>,

		/**
		 * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** User name for Basic authentication. Type: string (or Expression with resultType string). */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateOdbcLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<OdbcLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<string | null | undefined>(undefined),
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OdbcLinkedServiceTypePropertiesCredential {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface OdbcLinkedServiceTypePropertiesCredentialFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOdbcLinkedServiceTypePropertiesCredentialFormGroup() {
		return new FormGroup<OdbcLinkedServiceTypePropertiesCredentialFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OdbcLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface OdbcLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOdbcLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<OdbcLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Office365 linked service. */
	export interface Office365LinkedService {

		/**
		 * Office365 linked service properties.
		 * Required
		 */
		typeProperties: Office365LinkedServiceTypeProperties;
	}

	/** Office365 linked service. */
	export interface Office365LinkedServiceFormProperties {
	}
	export function CreateOffice365LinkedServiceFormGroup() {
		return new FormGroup<Office365LinkedServiceFormProperties>({
		});

	}


	/** Office365 linked service properties. */
	export interface Office365LinkedServiceTypeProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * Azure tenant ID to which the Office 365 account belongs. Type: string (or Expression with resultType string).
		 * Required
		 */
		office365TenantId: string;

		/**
		 * Specify the application's client ID. Type: string (or Expression with resultType string).
		 * Required
		 */
		servicePrincipalId: string;

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		servicePrincipalKey: Office365LinkedServiceTypePropertiesServicePrincipalKey;

		/**
		 * Specify the tenant information under which your Azure AD web application resides. Type: string (or Expression with resultType string).
		 * Required
		 */
		servicePrincipalTenantId: string;
	}

	/** Office365 linked service properties. */
	export interface Office365LinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * Azure tenant ID to which the Office 365 account belongs. Type: string (or Expression with resultType string).
		 * Required
		 */
		office365TenantId: FormControl<string | null | undefined>,

		/**
		 * Specify the application's client ID. Type: string (or Expression with resultType string).
		 * Required
		 */
		servicePrincipalId: FormControl<string | null | undefined>,

		/**
		 * Specify the tenant information under which your Azure AD web application resides. Type: string (or Expression with resultType string).
		 * Required
		 */
		servicePrincipalTenantId: FormControl<string | null | undefined>,
	}
	export function CreateOffice365LinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<Office365LinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			office365TenantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			servicePrincipalTenantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Office365LinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface Office365LinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOffice365LinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<Office365LinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Oracle database. */
	export interface OracleLinkedService {

		/**
		 * Oracle database linked service properties.
		 * Required
		 */
		typeProperties: OracleLinkedServiceTypeProperties;
	}

	/** Oracle database. */
	export interface OracleLinkedServiceFormProperties {
	}
	export function CreateOracleLinkedServiceFormGroup() {
		return new FormGroup<OracleLinkedServiceFormProperties>({
		});

	}


	/** Oracle database linked service properties. */
	export interface OracleLinkedServiceTypeProperties {

		/**
		 * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		password?: OracleLinkedServiceTypePropertiesPassword;
	}

	/** Oracle database linked service properties. */
	export interface OracleLinkedServiceTypePropertiesFormProperties {

		/**
		 * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,
	}
	export function CreateOracleLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<OracleLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OracleLinkedServiceTypePropertiesPassword {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface OracleLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateOracleLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<OracleLinkedServiceTypePropertiesPasswordFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Oracle Service Cloud linked service. */
	export interface OracleServiceCloudLinkedService {

		/**
		 * Oracle Service Cloud linked service properties.
		 * Required
		 */
		typeProperties: OracleServiceCloudLinkedServiceTypeProperties;
	}

	/** Oracle Service Cloud linked service. */
	export interface OracleServiceCloudLinkedServiceFormProperties {
	}
	export function CreateOracleServiceCloudLinkedServiceFormGroup() {
		return new FormGroup<OracleServiceCloudLinkedServiceFormProperties>({
		});

	}


	/** Oracle Service Cloud linked service properties. */
	export interface OracleServiceCloudLinkedServiceTypeProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The URL of the Oracle Service Cloud instance.
		 * Required
		 */
		host: string;

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		password: OracleServiceCloudLinkedServiceTypePropertiesPassword;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
		usePeerVerification?: string | null;

		/**
		 * The user name that you use to access Oracle Service Cloud server.
		 * Required
		 */
		username: string;
	}

	/** Oracle Service Cloud linked service properties. */
	export interface OracleServiceCloudLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The URL of the Oracle Service Cloud instance.
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
		usePeerVerification: FormControl<string | null | undefined>,

		/**
		 * The user name that you use to access Oracle Service Cloud server.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateOracleServiceCloudLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<OracleServiceCloudLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OracleServiceCloudLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface OracleServiceCloudLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOracleServiceCloudLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<OracleServiceCloudLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Paypal Service linked service. */
	export interface PaypalLinkedService {

		/**
		 * Paypal Service linked service properties.
		 * Required
		 */
		typeProperties: PaypalLinkedServiceTypeProperties;
	}

	/** Paypal Service linked service. */
	export interface PaypalLinkedServiceFormProperties {
	}
	export function CreatePaypalLinkedServiceFormGroup() {
		return new FormGroup<PaypalLinkedServiceFormProperties>({
		});

	}


	/** Paypal Service linked service properties. */
	export interface PaypalLinkedServiceTypeProperties {

		/**
		 * The client ID associated with your PayPal application.
		 * Required
		 */
		clientId: string;

		/** The base definition of a secret type. */
		clientSecret?: PaypalLinkedServiceTypePropertiesClientSecret;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The URL of the PayPal instance. (i.e. api.sandbox.paypal.com)
		 * Required
		 */
		host: string;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification?: string | null;
	}

	/** Paypal Service linked service properties. */
	export interface PaypalLinkedServiceTypePropertiesFormProperties {

		/**
		 * The client ID associated with your PayPal application.
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The URL of the PayPal instance. (i.e. api.sandbox.paypal.com)
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification: FormControl<string | null | undefined>,
	}
	export function CreatePaypalLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<PaypalLinkedServiceTypePropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaypalLinkedServiceTypePropertiesClientSecret {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface PaypalLinkedServiceTypePropertiesClientSecretFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePaypalLinkedServiceTypePropertiesClientSecretFormGroup() {
		return new FormGroup<PaypalLinkedServiceTypePropertiesClientSecretFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Phoenix server linked service. */
	export interface PhoenixLinkedService {

		/**
		 * Phoenix server linked service properties.
		 * Required
		 */
		typeProperties: PhoenixLinkedServiceTypeProperties;
	}

	/** Phoenix server linked service. */
	export interface PhoenixLinkedServiceFormProperties {
	}
	export function CreatePhoenixLinkedServiceFormGroup() {
		return new FormGroup<PhoenixLinkedServiceFormProperties>({
		});

	}


	/** Phoenix server linked service properties. */
	export interface PhoenixLinkedServiceTypeProperties {

		/** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
		allowHostNameCNMismatch?: string | null;

		/** Specifies whether to allow self-signed certificates from the server. The default value is false. */
		allowSelfSignedServerCert?: string | null;

		/**
		 * The authentication mechanism used to connect to the Phoenix server.
		 * Required
		 */
		authenticationType: PhoenixLinkedServiceTypePropertiesAuthenticationType;

		/** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
		enableSsl?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The IP address or host name of the Phoenix server. (i.e. 192.168.222.160)
		 * Required
		 */
		host: string;

		/** The partial URL corresponding to the Phoenix server. (i.e. /gateway/sandbox/phoenix/version). The default value is hbasephoenix if using WindowsAzureHDInsightService. */
		httpPath?: string | null;

		/** The base definition of a secret type. */
		password?: PhoenixLinkedServiceTypePropertiesPassword;

		/** The TCP port that the Phoenix server uses to listen for client connections. The default value is 8765. */
		port?: string | null;

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath?: string | null;

		/** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
		useSystemTrustStore?: string | null;

		/** The user name used to connect to the Phoenix server. */
		username?: string | null;
	}

	/** Phoenix server linked service properties. */
	export interface PhoenixLinkedServiceTypePropertiesFormProperties {

		/** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
		allowHostNameCNMismatch: FormControl<string | null | undefined>,

		/** Specifies whether to allow self-signed certificates from the server. The default value is false. */
		allowSelfSignedServerCert: FormControl<string | null | undefined>,

		/**
		 * The authentication mechanism used to connect to the Phoenix server.
		 * Required
		 */
		authenticationType: FormControl<PhoenixLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
		enableSsl: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The IP address or host name of the Phoenix server. (i.e. 192.168.222.160)
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** The partial URL corresponding to the Phoenix server. (i.e. /gateway/sandbox/phoenix/version). The default value is hbasephoenix if using WindowsAzureHDInsightService. */
		httpPath: FormControl<string | null | undefined>,

		/** The TCP port that the Phoenix server uses to listen for client connections. The default value is 8765. */
		port: FormControl<string | null | undefined>,

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath: FormControl<string | null | undefined>,

		/** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
		useSystemTrustStore: FormControl<string | null | undefined>,

		/** The user name used to connect to the Phoenix server. */
		username: FormControl<string | null | undefined>,
	}
	export function CreatePhoenixLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<PhoenixLinkedServiceTypePropertiesFormProperties>({
			allowHostNameCNMismatch: new FormControl<string | null | undefined>(undefined),
			allowSelfSignedServerCert: new FormControl<string | null | undefined>(undefined),
			authenticationType: new FormControl<PhoenixLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			enableSsl: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			httpPath: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			trustedCertPath: new FormControl<string | null | undefined>(undefined),
			useSystemTrustStore: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PhoenixLinkedServiceTypePropertiesAuthenticationType { Anonymous = 0, UsernameAndPassword = 1, WindowsAzureHDInsightService = 2 }

	export interface PhoenixLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface PhoenixLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePhoenixLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<PhoenixLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for PostgreSQL data source. */
	export interface PostgreSqlLinkedService {

		/**
		 * PostgreSQL linked service properties.
		 * Required
		 */
		typeProperties: PostgreSqlLinkedServiceTypeProperties;
	}

	/** Linked service for PostgreSQL data source. */
	export interface PostgreSqlLinkedServiceFormProperties {
	}
	export function CreatePostgreSqlLinkedServiceFormGroup() {
		return new FormGroup<PostgreSqlLinkedServiceFormProperties>({
		});

	}


	/** PostgreSQL linked service properties. */
	export interface PostgreSqlLinkedServiceTypeProperties {

		/**
		 * The connection string.
		 * Required
		 */
		connectionString: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		password?: PostgreSqlLinkedServiceTypePropertiesPassword;
	}

	/** PostgreSQL linked service properties. */
	export interface PostgreSqlLinkedServiceTypePropertiesFormProperties {

		/**
		 * The connection string.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,
	}
	export function CreatePostgreSqlLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<PostgreSqlLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostgreSqlLinkedServiceTypePropertiesPassword {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface PostgreSqlLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreatePostgreSqlLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<PostgreSqlLinkedServiceTypePropertiesPasswordFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Presto server linked service. */
	export interface PrestoLinkedService {

		/**
		 * Presto server linked service properties.
		 * Required
		 */
		typeProperties: PrestoLinkedServiceTypeProperties;
	}

	/** Presto server linked service. */
	export interface PrestoLinkedServiceFormProperties {
	}
	export function CreatePrestoLinkedServiceFormGroup() {
		return new FormGroup<PrestoLinkedServiceFormProperties>({
		});

	}


	/** Presto server linked service properties. */
	export interface PrestoLinkedServiceTypeProperties {

		/** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
		allowHostNameCNMismatch?: string | null;

		/** Specifies whether to allow self-signed certificates from the server. The default value is false. */
		allowSelfSignedServerCert?: string | null;

		/**
		 * The authentication mechanism used to connect to the Presto server.
		 * Required
		 */
		authenticationType: PrestoLinkedServiceTypePropertiesAuthenticationType;

		/**
		 * The catalog context for all request against the server.
		 * Required
		 */
		catalog: string;

		/** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
		enableSsl?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The IP address or host name of the Presto server. (i.e. 192.168.222.160)
		 * Required
		 */
		host: string;

		/** The base definition of a secret type. */
		password?: PrestoLinkedServiceTypePropertiesPassword;

		/** The TCP port that the Presto server uses to listen for client connections. The default value is 8080. */
		port?: string | null;

		/**
		 * The version of the Presto server. (i.e. 0.148-t)
		 * Required
		 */
		serverVersion: string;

		/** The local time zone used by the connection. Valid values for this option are specified in the IANA Time Zone Database. The default value is the system time zone. */
		timeZoneID?: string | null;

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath?: string | null;

		/** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
		useSystemTrustStore?: string | null;

		/** The user name used to connect to the Presto server. */
		username?: string | null;
	}

	/** Presto server linked service properties. */
	export interface PrestoLinkedServiceTypePropertiesFormProperties {

		/** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
		allowHostNameCNMismatch: FormControl<string | null | undefined>,

		/** Specifies whether to allow self-signed certificates from the server. The default value is false. */
		allowSelfSignedServerCert: FormControl<string | null | undefined>,

		/**
		 * The authentication mechanism used to connect to the Presto server.
		 * Required
		 */
		authenticationType: FormControl<PrestoLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/**
		 * The catalog context for all request against the server.
		 * Required
		 */
		catalog: FormControl<string | null | undefined>,

		/** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
		enableSsl: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The IP address or host name of the Presto server. (i.e. 192.168.222.160)
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** The TCP port that the Presto server uses to listen for client connections. The default value is 8080. */
		port: FormControl<string | null | undefined>,

		/**
		 * The version of the Presto server. (i.e. 0.148-t)
		 * Required
		 */
		serverVersion: FormControl<string | null | undefined>,

		/** The local time zone used by the connection. Valid values for this option are specified in the IANA Time Zone Database. The default value is the system time zone. */
		timeZoneID: FormControl<string | null | undefined>,

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath: FormControl<string | null | undefined>,

		/** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
		useSystemTrustStore: FormControl<string | null | undefined>,

		/** The user name used to connect to the Presto server. */
		username: FormControl<string | null | undefined>,
	}
	export function CreatePrestoLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<PrestoLinkedServiceTypePropertiesFormProperties>({
			allowHostNameCNMismatch: new FormControl<string | null | undefined>(undefined),
			allowSelfSignedServerCert: new FormControl<string | null | undefined>(undefined),
			authenticationType: new FormControl<PrestoLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			catalog: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enableSsl: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<string | null | undefined>(undefined),
			serverVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeZoneID: new FormControl<string | null | undefined>(undefined),
			trustedCertPath: new FormControl<string | null | undefined>(undefined),
			useSystemTrustStore: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PrestoLinkedServiceTypePropertiesAuthenticationType { Anonymous = 0, LDAP = 1 }

	export interface PrestoLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface PrestoLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePrestoLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<PrestoLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** QuickBooks server linked service. */
	export interface QuickBooksLinkedService {

		/**
		 * QuickBooks server linked service properties.
		 * Required
		 */
		typeProperties: QuickBooksLinkedServiceTypeProperties;
	}

	/** QuickBooks server linked service. */
	export interface QuickBooksLinkedServiceFormProperties {
	}
	export function CreateQuickBooksLinkedServiceFormGroup() {
		return new FormGroup<QuickBooksLinkedServiceFormProperties>({
		});

	}


	/** QuickBooks server linked service properties. */
	export interface QuickBooksLinkedServiceTypeProperties {

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		accessToken: QuickBooksLinkedServiceTypePropertiesAccessToken;

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		accessTokenSecret: QuickBooksLinkedServiceTypePropertiesAccessTokenSecret;

		/**
		 * The company ID of the QuickBooks company to authorize.
		 * Required
		 */
		companyId: string;

		/**
		 * The consumer key for OAuth 1.0 authentication.
		 * Required
		 */
		consumerKey: string;

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		consumerSecret: QuickBooksLinkedServiceTypePropertiesConsumerSecret;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com)
		 * Required
		 */
		endpoint: string;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints?: string | null;
	}

	/** QuickBooks server linked service properties. */
	export interface QuickBooksLinkedServiceTypePropertiesFormProperties {

		/**
		 * The company ID of the QuickBooks company to authorize.
		 * Required
		 */
		companyId: FormControl<string | null | undefined>,

		/**
		 * The consumer key for OAuth 1.0 authentication.
		 * Required
		 */
		consumerKey: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com)
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints: FormControl<string | null | undefined>,
	}
	export function CreateQuickBooksLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<QuickBooksLinkedServiceTypePropertiesFormProperties>({
			companyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			consumerKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuickBooksLinkedServiceTypePropertiesAccessToken {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface QuickBooksLinkedServiceTypePropertiesAccessTokenFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateQuickBooksLinkedServiceTypePropertiesAccessTokenFormGroup() {
		return new FormGroup<QuickBooksLinkedServiceTypePropertiesAccessTokenFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface QuickBooksLinkedServiceTypePropertiesAccessTokenSecret {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface QuickBooksLinkedServiceTypePropertiesAccessTokenSecretFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateQuickBooksLinkedServiceTypePropertiesAccessTokenSecretFormGroup() {
		return new FormGroup<QuickBooksLinkedServiceTypePropertiesAccessTokenSecretFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface QuickBooksLinkedServiceTypePropertiesConsumerSecret {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface QuickBooksLinkedServiceTypePropertiesConsumerSecretFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateQuickBooksLinkedServiceTypePropertiesConsumerSecretFormGroup() {
		return new FormGroup<QuickBooksLinkedServiceTypePropertiesConsumerSecretFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Responsys linked service. */
	export interface ResponsysLinkedService {

		/**
		 * Responsys linked service properties.
		 * Required
		 */
		typeProperties: ResponsysLinkedServiceTypeProperties;
	}

	/** Responsys linked service. */
	export interface ResponsysLinkedServiceFormProperties {
	}
	export function CreateResponsysLinkedServiceFormGroup() {
		return new FormGroup<ResponsysLinkedServiceFormProperties>({
		});

	}


	/** Responsys linked service properties. */
	export interface ResponsysLinkedServiceTypeProperties {

		/**
		 * The client ID associated with the Responsys application. Type: string (or Expression with resultType string).
		 * Required
		 */
		clientId: string;

		/** The base definition of a secret type. */
		clientSecret?: ResponsysLinkedServiceTypePropertiesClientSecret;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The endpoint of the Responsys server.
		 * Required
		 */
		endpoint: string;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
		usePeerVerification?: string | null;
	}

	/** Responsys linked service properties. */
	export interface ResponsysLinkedServiceTypePropertiesFormProperties {

		/**
		 * The client ID associated with the Responsys application. Type: string (or Expression with resultType string).
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The endpoint of the Responsys server.
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
		usePeerVerification: FormControl<string | null | undefined>,
	}
	export function CreateResponsysLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<ResponsysLinkedServiceTypePropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponsysLinkedServiceTypePropertiesClientSecret {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface ResponsysLinkedServiceTypePropertiesClientSecretFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResponsysLinkedServiceTypePropertiesClientSecretFormGroup() {
		return new FormGroup<ResponsysLinkedServiceTypePropertiesClientSecretFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Rest Service linked service. */
	export interface RestServiceLinkedService {

		/**
		 * Rest Service linked service properties.
		 * Required
		 */
		typeProperties: RestServiceLinkedServiceTypeProperties;
	}

	/** Rest Service linked service. */
	export interface RestServiceLinkedServiceFormProperties {
	}
	export function CreateRestServiceLinkedServiceFormGroup() {
		return new FormGroup<RestServiceLinkedServiceFormProperties>({
		});

	}


	/** Rest Service linked service properties. */
	export interface RestServiceLinkedServiceTypeProperties {

		/** The resource you are requesting authorization to use. */
		aadResourceId?: string | null;

		/**
		 * Type of authentication used to connect to the REST service.
		 * Required
		 */
		authenticationType: RestServiceLinkedServiceTypePropertiesAuthenticationType;

		/** Whether to validate server side SSL certificate when connecting to the endpoint.The default value is true. Type: boolean (or Expression with resultType boolean). */
		enableServerCertificateValidation?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: RestServiceLinkedServiceTypePropertiesPassword;

		/** The application's client ID used in AadServicePrincipal authentication type. */
		servicePrincipalId?: string | null;

		/** The base definition of a secret type. */
		servicePrincipalKey?: RestServiceLinkedServiceTypePropertiesServicePrincipalKey;

		/** The tenant information (domain name or tenant ID) used in AadServicePrincipal authentication type under which your application resides. */
		tenant?: string | null;

		/**
		 * The base URL of the REST service.
		 * Required
		 */
		url: string;

		/** The user name used in Basic authentication type. */
		userName?: string | null;
	}

	/** Rest Service linked service properties. */
	export interface RestServiceLinkedServiceTypePropertiesFormProperties {

		/** The resource you are requesting authorization to use. */
		aadResourceId: FormControl<string | null | undefined>,

		/**
		 * Type of authentication used to connect to the REST service.
		 * Required
		 */
		authenticationType: FormControl<RestServiceLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/** Whether to validate server side SSL certificate when connecting to the endpoint.The default value is true. Type: boolean (or Expression with resultType boolean). */
		enableServerCertificateValidation: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The application's client ID used in AadServicePrincipal authentication type. */
		servicePrincipalId: FormControl<string | null | undefined>,

		/** The tenant information (domain name or tenant ID) used in AadServicePrincipal authentication type under which your application resides. */
		tenant: FormControl<string | null | undefined>,

		/**
		 * The base URL of the REST service.
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/** The user name used in Basic authentication type. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateRestServiceLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<RestServiceLinkedServiceTypePropertiesFormProperties>({
			aadResourceId: new FormControl<string | null | undefined>(undefined),
			authenticationType: new FormControl<RestServiceLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			enableServerCertificateValidation: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			servicePrincipalId: new FormControl<string | null | undefined>(undefined),
			tenant: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RestServiceLinkedServiceTypePropertiesAuthenticationType { Anonymous = 0, Basic = 1, AadServicePrincipal = 2, ManagedServiceIdentity = 3 }

	export interface RestServiceLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface RestServiceLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRestServiceLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<RestServiceLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RestServiceLinkedServiceTypePropertiesServicePrincipalKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface RestServiceLinkedServiceTypePropertiesServicePrincipalKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRestServiceLinkedServiceTypePropertiesServicePrincipalKeyFormGroup() {
		return new FormGroup<RestServiceLinkedServiceTypePropertiesServicePrincipalKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for Salesforce. */
	export interface SalesforceLinkedService {

		/**
		 * Salesforce linked service properties.
		 * Required
		 */
		typeProperties: SalesforceLinkedServiceTypeProperties;
	}

	/** Linked service for Salesforce. */
	export interface SalesforceLinkedServiceFormProperties {
	}
	export function CreateSalesforceLinkedServiceFormGroup() {
		return new FormGroup<SalesforceLinkedServiceFormProperties>({
		});

	}


	/** Salesforce linked service properties. */
	export interface SalesforceLinkedServiceTypeProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The URL of Salesforce instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string). */
		environmentUrl?: string | null;

		/** The base definition of a secret type. */
		password?: SalesforceLinkedServiceTypePropertiesPassword;

		/** The base definition of a secret type. */
		securityToken?: SalesforceLinkedServiceTypePropertiesSecurityToken;

		/** The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string). */
		username?: string | null;
	}

	/** Salesforce linked service properties. */
	export interface SalesforceLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The URL of Salesforce instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string). */
		environmentUrl: FormControl<string | null | undefined>,

		/** The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string). */
		username: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<SalesforceLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			environmentUrl: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesforceLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SalesforceLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<SalesforceLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SalesforceLinkedServiceTypePropertiesSecurityToken {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SalesforceLinkedServiceTypePropertiesSecurityTokenFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceLinkedServiceTypePropertiesSecurityTokenFormGroup() {
		return new FormGroup<SalesforceLinkedServiceTypePropertiesSecurityTokenFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Salesforce Marketing Cloud linked service. */
	export interface SalesforceMarketingCloudLinkedService {

		/**
		 * Salesforce Marketing Cloud linked service properties.
		 * Required
		 */
		typeProperties: SalesforceMarketingCloudLinkedServiceTypeProperties;
	}

	/** Salesforce Marketing Cloud linked service. */
	export interface SalesforceMarketingCloudLinkedServiceFormProperties {
	}
	export function CreateSalesforceMarketingCloudLinkedServiceFormGroup() {
		return new FormGroup<SalesforceMarketingCloudLinkedServiceFormProperties>({
		});

	}


	/** Salesforce Marketing Cloud linked service properties. */
	export interface SalesforceMarketingCloudLinkedServiceTypeProperties {

		/**
		 * The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
		 * Required
		 */
		clientId: string;

		/** The base definition of a secret type. */
		clientSecret?: SalesforceMarketingCloudLinkedServiceTypePropertiesClientSecret;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
		usePeerVerification?: string | null;
	}

	/** Salesforce Marketing Cloud linked service properties. */
	export interface SalesforceMarketingCloudLinkedServiceTypePropertiesFormProperties {

		/**
		 * The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
		usePeerVerification: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceMarketingCloudLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<SalesforceMarketingCloudLinkedServiceTypePropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesforceMarketingCloudLinkedServiceTypePropertiesClientSecret {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SalesforceMarketingCloudLinkedServiceTypePropertiesClientSecretFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceMarketingCloudLinkedServiceTypePropertiesClientSecretFormGroup() {
		return new FormGroup<SalesforceMarketingCloudLinkedServiceTypePropertiesClientSecretFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for Salesforce Service Cloud. */
	export interface SalesforceServiceCloudLinkedService {

		/**
		 * Salesforce Service Cloud linked service properties.
		 * Required
		 */
		typeProperties: SalesforceServiceCloudLinkedServiceTypeProperties;
	}

	/** Linked service for Salesforce Service Cloud. */
	export interface SalesforceServiceCloudLinkedServiceFormProperties {
	}
	export function CreateSalesforceServiceCloudLinkedServiceFormGroup() {
		return new FormGroup<SalesforceServiceCloudLinkedServiceFormProperties>({
		});

	}


	/** Salesforce Service Cloud linked service properties. */
	export interface SalesforceServiceCloudLinkedServiceTypeProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The URL of Salesforce Service Cloud instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string). */
		environmentUrl?: string | null;

		/** Extended properties appended to the connection string. Type: string (or Expression with resultType string). */
		extendedProperties?: string | null;

		/** The base definition of a secret type. */
		password?: SalesforceServiceCloudLinkedServiceTypePropertiesPassword;

		/** The base definition of a secret type. */
		securityToken?: SalesforceServiceCloudLinkedServiceTypePropertiesSecurityToken;

		/** The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string). */
		username?: string | null;
	}

	/** Salesforce Service Cloud linked service properties. */
	export interface SalesforceServiceCloudLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The URL of Salesforce Service Cloud instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string). */
		environmentUrl: FormControl<string | null | undefined>,

		/** Extended properties appended to the connection string. Type: string (or Expression with resultType string). */
		extendedProperties: FormControl<string | null | undefined>,

		/** The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string). */
		username: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceServiceCloudLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<SalesforceServiceCloudLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			environmentUrl: new FormControl<string | null | undefined>(undefined),
			extendedProperties: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesforceServiceCloudLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SalesforceServiceCloudLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceServiceCloudLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<SalesforceServiceCloudLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SalesforceServiceCloudLinkedServiceTypePropertiesSecurityToken {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SalesforceServiceCloudLinkedServiceTypePropertiesSecurityTokenFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceServiceCloudLinkedServiceTypePropertiesSecurityTokenFormGroup() {
		return new FormGroup<SalesforceServiceCloudLinkedServiceTypePropertiesSecurityTokenFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** SAP Business Warehouse Linked Service. */
	export interface SapBWLinkedService {

		/**
		 * Properties specific to this linked service type.
		 * Required
		 */
		typeProperties: SapBWLinkedServiceTypeProperties;
	}

	/** SAP Business Warehouse Linked Service. */
	export interface SapBWLinkedServiceFormProperties {
	}
	export function CreateSapBWLinkedServiceFormGroup() {
		return new FormGroup<SapBWLinkedServiceFormProperties>({
		});

	}


	/** Properties specific to this linked service type. */
	export interface SapBWLinkedServiceTypeProperties {

		/**
		 * Client ID of the client on the BW system. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
		 * Required
		 */
		clientId: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: SapBWLinkedServiceTypePropertiesPassword;

		/**
		 * Host name of the SAP BW instance. Type: string (or Expression with resultType string).
		 * Required
		 */
		server: string;

		/**
		 * System number of the BW system. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
		 * Required
		 */
		systemNumber: string;

		/** Username to access the SAP BW server. Type: string (or Expression with resultType string). */
		userName?: string | null;
	}

	/** Properties specific to this linked service type. */
	export interface SapBWLinkedServiceTypePropertiesFormProperties {

		/**
		 * Client ID of the client on the BW system. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * Host name of the SAP BW instance. Type: string (or Expression with resultType string).
		 * Required
		 */
		server: FormControl<string | null | undefined>,

		/**
		 * System number of the BW system. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
		 * Required
		 */
		systemNumber: FormControl<string | null | undefined>,

		/** Username to access the SAP BW server. Type: string (or Expression with resultType string). */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateSapBWLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<SapBWLinkedServiceTypePropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			systemNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SapBWLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SapBWLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSapBWLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<SapBWLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for SAP Cloud for Customer. */
	export interface SapCloudForCustomerLinkedService {

		/**
		 * SAP Cloud for Customer linked service properties.
		 * Required
		 */
		typeProperties: SapCloudForCustomerLinkedServiceTypeProperties;
	}

	/** Linked service for SAP Cloud for Customer. */
	export interface SapCloudForCustomerLinkedServiceFormProperties {
	}
	export function CreateSapCloudForCustomerLinkedServiceFormGroup() {
		return new FormGroup<SapCloudForCustomerLinkedServiceFormProperties>({
		});

	}


	/** SAP Cloud for Customer linked service properties. */
	export interface SapCloudForCustomerLinkedServiceTypeProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: SapCloudForCustomerLinkedServiceTypePropertiesPassword;

		/**
		 * The URL of SAP Cloud for Customer OData API. For example, '[https://[tenantname].crm.ondemand.com/sap/c4c/odata/v1]'. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: string;

		/** The username for Basic authentication. Type: string (or Expression with resultType string). */
		username?: string | null;
	}

	/** SAP Cloud for Customer linked service properties. */
	export interface SapCloudForCustomerLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The URL of SAP Cloud for Customer OData API. For example, '[https://[tenantname].crm.ondemand.com/sap/c4c/odata/v1]'. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/** The username for Basic authentication. Type: string (or Expression with resultType string). */
		username: FormControl<string | null | undefined>,
	}
	export function CreateSapCloudForCustomerLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<SapCloudForCustomerLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SapCloudForCustomerLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SapCloudForCustomerLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSapCloudForCustomerLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<SapCloudForCustomerLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for SAP ERP Central Component(SAP ECC). */
	export interface SapEccLinkedService {

		/**
		 * SAP ECC linked service properties.
		 * Required
		 */
		typeProperties: SapEccLinkedServiceTypeProperties;
	}

	/** Linked service for SAP ERP Central Component(SAP ECC). */
	export interface SapEccLinkedServiceFormProperties {
	}
	export function CreateSapEccLinkedServiceFormGroup() {
		return new FormGroup<SapEccLinkedServiceFormProperties>({
		});

	}


	/** SAP ECC linked service properties. */
	export interface SapEccLinkedServiceTypeProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: SapEccLinkedServiceTypePropertiesPassword;

		/**
		 * The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: string;

		/** The username for Basic authentication. Type: string (or Expression with resultType string). */
		username?: string | null;
	}

	/** SAP ECC linked service properties. */
	export interface SapEccLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/** The username for Basic authentication. Type: string (or Expression with resultType string). */
		username: FormControl<string | null | undefined>,
	}
	export function CreateSapEccLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<SapEccLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SapEccLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SapEccLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSapEccLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<SapEccLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** SAP HANA Linked Service. */
	export interface SapHanaLinkedService {

		/**
		 * Properties specific to this linked service type.
		 * Required
		 */
		typeProperties: SapHanaLinkedServiceProperties;
	}

	/** SAP HANA Linked Service. */
	export interface SapHanaLinkedServiceFormProperties {
	}
	export function CreateSapHanaLinkedServiceFormGroup() {
		return new FormGroup<SapHanaLinkedServiceFormProperties>({
		});

	}


	/** Properties specific to this linked service type. */
	export interface SapHanaLinkedServiceProperties {

		/** The authentication type to be used to connect to the SAP HANA server. */
		authenticationType?: SapHanaLinkedServicePropertiesAuthenticationType | null;

		/** SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: SapHanaLinkedServicePropertiesPassword;

		/**
		 * Host name of the SAP HANA server. Type: string (or Expression with resultType string).
		 * Required
		 */
		server: string;

		/** Username to access the SAP HANA server. Type: string (or Expression with resultType string). */
		userName?: string | null;
	}

	/** Properties specific to this linked service type. */
	export interface SapHanaLinkedServicePropertiesFormProperties {

		/** The authentication type to be used to connect to the SAP HANA server. */
		authenticationType: FormControl<SapHanaLinkedServicePropertiesAuthenticationType | null | undefined>,

		/** SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * Host name of the SAP HANA server. Type: string (or Expression with resultType string).
		 * Required
		 */
		server: FormControl<string | null | undefined>,

		/** Username to access the SAP HANA server. Type: string (or Expression with resultType string). */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateSapHanaLinkedServicePropertiesFormGroup() {
		return new FormGroup<SapHanaLinkedServicePropertiesFormProperties>({
			authenticationType: new FormControl<SapHanaLinkedServicePropertiesAuthenticationType | null | undefined>(undefined),
			connectionString: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SapHanaLinkedServicePropertiesAuthenticationType { Basic = 0, Windows = 1 }

	export interface SapHanaLinkedServicePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SapHanaLinkedServicePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSapHanaLinkedServicePropertiesPasswordFormGroup() {
		return new FormGroup<SapHanaLinkedServicePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** SAP Business Warehouse Open Hub Destination Linked Service. */
	export interface SapOpenHubLinkedService {

		/**
		 * Properties specific to SAP Business Warehouse Open Hub Destination linked service type.
		 * Required
		 */
		typeProperties: SapOpenHubLinkedServiceTypeProperties;
	}

	/** SAP Business Warehouse Open Hub Destination Linked Service. */
	export interface SapOpenHubLinkedServiceFormProperties {
	}
	export function CreateSapOpenHubLinkedServiceFormGroup() {
		return new FormGroup<SapOpenHubLinkedServiceFormProperties>({
		});

	}


	/** Properties specific to SAP Business Warehouse Open Hub Destination linked service type. */
	export interface SapOpenHubLinkedServiceTypeProperties {

		/**
		 * Client ID of the client on the BW system where the open hub destination is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
		 * Required
		 */
		clientId: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Language of the BW system where the open hub destination is located. The default value is EN. Type: string (or Expression with resultType string). */
		language?: string | null;

		/** The base definition of a secret type. */
		password?: SapOpenHubLinkedServiceTypePropertiesPassword;

		/**
		 * Host name of the SAP BW instance where the open hub destination is located. Type: string (or Expression with resultType string).
		 * Required
		 */
		server: string;

		/**
		 * System number of the BW system where the open hub destination is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
		 * Required
		 */
		systemNumber: string;

		/** Username to access the SAP BW server where the open hub destination is located. Type: string (or Expression with resultType string). */
		userName?: string | null;
	}

	/** Properties specific to SAP Business Warehouse Open Hub Destination linked service type. */
	export interface SapOpenHubLinkedServiceTypePropertiesFormProperties {

		/**
		 * Client ID of the client on the BW system where the open hub destination is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** Language of the BW system where the open hub destination is located. The default value is EN. Type: string (or Expression with resultType string). */
		language: FormControl<string | null | undefined>,

		/**
		 * Host name of the SAP BW instance where the open hub destination is located. Type: string (or Expression with resultType string).
		 * Required
		 */
		server: FormControl<string | null | undefined>,

		/**
		 * System number of the BW system where the open hub destination is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
		 * Required
		 */
		systemNumber: FormControl<string | null | undefined>,

		/** Username to access the SAP BW server where the open hub destination is located. Type: string (or Expression with resultType string). */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateSapOpenHubLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<SapOpenHubLinkedServiceTypePropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			systemNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SapOpenHubLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SapOpenHubLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSapOpenHubLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<SapOpenHubLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** SAP Table Linked Service. */
	export interface SapTableLinkedService {

		/**
		 * Properties specific to this linked service type.
		 * Required
		 */
		typeProperties: SapTableLinkedServiceTypeProperties;
	}

	/** SAP Table Linked Service. */
	export interface SapTableLinkedServiceFormProperties {
	}
	export function CreateSapTableLinkedServiceFormGroup() {
		return new FormGroup<SapTableLinkedServiceFormProperties>({
		});

	}


	/** Properties specific to this linked service type. */
	export interface SapTableLinkedServiceTypeProperties {

		/** Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). */
		clientId?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string). */
		language?: string | null;

		/** The Logon Group for the SAP System. Type: string (or Expression with resultType string). */
		logonGroup?: string | null;

		/** The hostname of the SAP Message Server. Type: string (or Expression with resultType string). */
		messageServer?: string | null;

		/** The service name or port number of the Message Server. Type: string (or Expression with resultType string). */
		messageServerService?: string | null;

		/** The base definition of a secret type. */
		password?: SapTableLinkedServiceTypePropertiesPassword;

		/** Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string). */
		server?: string | null;

		/** External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
		sncLibraryPath?: string | null;

		/** SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string). */
		sncMode?: string | null;

		/** Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
		sncMyName?: string | null;

		/** Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
		sncPartnerName?: string | null;

		/** SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string). */
		sncQop?: string | null;

		/** SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string). */
		systemId?: string | null;

		/** System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). */
		systemNumber?: string | null;

		/** Username to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
		userName?: string | null;
	}

	/** Properties specific to this linked service type. */
	export interface SapTableLinkedServiceTypePropertiesFormProperties {

		/** Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). */
		clientId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string). */
		language: FormControl<string | null | undefined>,

		/** The Logon Group for the SAP System. Type: string (or Expression with resultType string). */
		logonGroup: FormControl<string | null | undefined>,

		/** The hostname of the SAP Message Server. Type: string (or Expression with resultType string). */
		messageServer: FormControl<string | null | undefined>,

		/** The service name or port number of the Message Server. Type: string (or Expression with resultType string). */
		messageServerService: FormControl<string | null | undefined>,

		/** Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string). */
		server: FormControl<string | null | undefined>,

		/** External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
		sncLibraryPath: FormControl<string | null | undefined>,

		/** SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string). */
		sncMode: FormControl<string | null | undefined>,

		/** Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
		sncMyName: FormControl<string | null | undefined>,

		/** Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
		sncPartnerName: FormControl<string | null | undefined>,

		/** SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string). */
		sncQop: FormControl<string | null | undefined>,

		/** SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string). */
		systemId: FormControl<string | null | undefined>,

		/** System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). */
		systemNumber: FormControl<string | null | undefined>,

		/** Username to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateSapTableLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<SapTableLinkedServiceTypePropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			logonGroup: new FormControl<string | null | undefined>(undefined),
			messageServer: new FormControl<string | null | undefined>(undefined),
			messageServerService: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
			sncLibraryPath: new FormControl<string | null | undefined>(undefined),
			sncMode: new FormControl<string | null | undefined>(undefined),
			sncMyName: new FormControl<string | null | undefined>(undefined),
			sncPartnerName: new FormControl<string | null | undefined>(undefined),
			sncQop: new FormControl<string | null | undefined>(undefined),
			systemId: new FormControl<string | null | undefined>(undefined),
			systemNumber: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SapTableLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SapTableLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSapTableLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<SapTableLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** ServiceNow server linked service. */
	export interface ServiceNowLinkedService {

		/**
		 * ServiceNow server linked service properties.
		 * Required
		 */
		typeProperties: ServiceNowLinkedServiceTypeProperties;
	}

	/** ServiceNow server linked service. */
	export interface ServiceNowLinkedServiceFormProperties {
	}
	export function CreateServiceNowLinkedServiceFormGroup() {
		return new FormGroup<ServiceNowLinkedServiceFormProperties>({
		});

	}


	/** ServiceNow server linked service properties. */
	export interface ServiceNowLinkedServiceTypeProperties {

		/**
		 * The authentication type to use.
		 * Required
		 */
		authenticationType: ServiceNowLinkedServiceTypePropertiesAuthenticationType;

		/** The client id for OAuth2 authentication. */
		clientId?: string | null;

		/** The base definition of a secret type. */
		clientSecret?: ServiceNowLinkedServiceTypePropertiesClientSecret;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The endpoint of the ServiceNow server. (i.e. <instance>.service-now.com)
		 * Required
		 */
		endpoint: string;

		/** The base definition of a secret type. */
		password?: ServiceNowLinkedServiceTypePropertiesPassword;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification?: string | null;

		/** The user name used to connect to the ServiceNow server for Basic and OAuth2 authentication. */
		username?: string | null;
	}

	/** ServiceNow server linked service properties. */
	export interface ServiceNowLinkedServiceTypePropertiesFormProperties {

		/**
		 * The authentication type to use.
		 * Required
		 */
		authenticationType: FormControl<ServiceNowLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/** The client id for OAuth2 authentication. */
		clientId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The endpoint of the ServiceNow server. (i.e. <instance>.service-now.com)
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification: FormControl<string | null | undefined>,

		/** The user name used to connect to the ServiceNow server for Basic and OAuth2 authentication. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateServiceNowLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<ServiceNowLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<ServiceNowLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			clientId: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceNowLinkedServiceTypePropertiesAuthenticationType { Basic = 0, OAuth2 = 1 }

	export interface ServiceNowLinkedServiceTypePropertiesClientSecret {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface ServiceNowLinkedServiceTypePropertiesClientSecretFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateServiceNowLinkedServiceTypePropertiesClientSecretFormGroup() {
		return new FormGroup<ServiceNowLinkedServiceTypePropertiesClientSecretFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceNowLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface ServiceNowLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateServiceNowLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<ServiceNowLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A linked service for an SSH File Transfer Protocol (SFTP) server.  */
	export interface SftpServerLinkedService {

		/**
		 * Properties specific to this linked service type.
		 * Required
		 */
		typeProperties: SftpServerLinkedServiceTypeProperties;
	}

	/** A linked service for an SSH File Transfer Protocol (SFTP) server.  */
	export interface SftpServerLinkedServiceFormProperties {
	}
	export function CreateSftpServerLinkedServiceFormGroup() {
		return new FormGroup<SftpServerLinkedServiceFormProperties>({
		});

	}


	/** Properties specific to this linked service type. */
	export interface SftpServerLinkedServiceTypeProperties {

		/** The authentication type to be used to connect to the FTP server. */
		authenticationType?: SftpServerLinkedServiceTypePropertiesAuthenticationType | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The SFTP server host name. Type: string (or Expression with resultType string).
		 * Required
		 */
		host: string;

		/** The host key finger-print of the SFTP server. When SkipHostKeyValidation is false, HostKeyFingerprint should be specified. Type: string (or Expression with resultType string). */
		hostKeyFingerprint?: string | null;

		/** The base definition of a secret type. */
		passPhrase?: SftpServerLinkedServiceTypePropertiesPassPhrase;

		/** The base definition of a secret type. */
		password?: SftpServerLinkedServiceTypePropertiesPassword;

		/** The TCP port number that the SFTP server uses to listen for client connections. Default value is 22. Type: integer (or Expression with resultType integer), minimum: 0. */
		port?: string | null;

		/** The base definition of a secret type. */
		privateKeyContent?: SftpServerLinkedServiceTypePropertiesPrivateKeyContent;

		/** The SSH private key file path for SshPublicKey authentication. Only valid for on-premises copy. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. Type: string (or Expression with resultType string). */
		privateKeyPath?: string | null;

		/** If true, skip the SSH host key validation. Default value is false. Type: boolean (or Expression with resultType boolean). */
		skipHostKeyValidation?: string | null;

		/** The username used to log on to the SFTP server. Type: string (or Expression with resultType string). */
		userName?: string | null;
	}

	/** Properties specific to this linked service type. */
	export interface SftpServerLinkedServiceTypePropertiesFormProperties {

		/** The authentication type to be used to connect to the FTP server. */
		authenticationType: FormControl<SftpServerLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The SFTP server host name. Type: string (or Expression with resultType string).
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** The host key finger-print of the SFTP server. When SkipHostKeyValidation is false, HostKeyFingerprint should be specified. Type: string (or Expression with resultType string). */
		hostKeyFingerprint: FormControl<string | null | undefined>,

		/** The TCP port number that the SFTP server uses to listen for client connections. Default value is 22. Type: integer (or Expression with resultType integer), minimum: 0. */
		port: FormControl<string | null | undefined>,

		/** The SSH private key file path for SshPublicKey authentication. Only valid for on-premises copy. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. Type: string (or Expression with resultType string). */
		privateKeyPath: FormControl<string | null | undefined>,

		/** If true, skip the SSH host key validation. Default value is false. Type: boolean (or Expression with resultType boolean). */
		skipHostKeyValidation: FormControl<string | null | undefined>,

		/** The username used to log on to the SFTP server. Type: string (or Expression with resultType string). */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateSftpServerLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<SftpServerLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<SftpServerLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hostKeyFingerprint: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			privateKeyPath: new FormControl<string | null | undefined>(undefined),
			skipHostKeyValidation: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SftpServerLinkedServiceTypePropertiesAuthenticationType { Basic = 0, SshPublicKey = 1 }

	export interface SftpServerLinkedServiceTypePropertiesPassPhrase {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SftpServerLinkedServiceTypePropertiesPassPhraseFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSftpServerLinkedServiceTypePropertiesPassPhraseFormGroup() {
		return new FormGroup<SftpServerLinkedServiceTypePropertiesPassPhraseFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SftpServerLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SftpServerLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSftpServerLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<SftpServerLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SftpServerLinkedServiceTypePropertiesPrivateKeyContent {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SftpServerLinkedServiceTypePropertiesPrivateKeyContentFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSftpServerLinkedServiceTypePropertiesPrivateKeyContentFormGroup() {
		return new FormGroup<SftpServerLinkedServiceTypePropertiesPrivateKeyContentFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Shopify Service linked service. */
	export interface ShopifyLinkedService {

		/**
		 * Shopify Service linked service properties.
		 * Required
		 */
		typeProperties: ShopifyLinkedServiceTypeProperties;
	}

	/** Shopify Service linked service. */
	export interface ShopifyLinkedServiceFormProperties {
	}
	export function CreateShopifyLinkedServiceFormGroup() {
		return new FormGroup<ShopifyLinkedServiceFormProperties>({
		});

	}


	/** Shopify Service linked service properties. */
	export interface ShopifyLinkedServiceTypeProperties {

		/** The base definition of a secret type. */
		accessToken?: ShopifyLinkedServiceTypePropertiesAccessToken;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The endpoint of the Shopify server. (i.e. mystore.myshopify.com)
		 * Required
		 */
		host: string;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification?: string | null;
	}

	/** Shopify Service linked service properties. */
	export interface ShopifyLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The endpoint of the Shopify server. (i.e. mystore.myshopify.com)
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification: FormControl<string | null | undefined>,
	}
	export function CreateShopifyLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<ShopifyLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShopifyLinkedServiceTypePropertiesAccessToken {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface ShopifyLinkedServiceTypePropertiesAccessTokenFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateShopifyLinkedServiceTypePropertiesAccessTokenFormGroup() {
		return new FormGroup<ShopifyLinkedServiceTypePropertiesAccessTokenFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Spark Server linked service. */
	export interface SparkLinkedService {

		/**
		 * Spark Server linked service properties.
		 * Required
		 */
		typeProperties: SparkLinkedServiceTypeProperties;
	}

	/** Spark Server linked service. */
	export interface SparkLinkedServiceFormProperties {
	}
	export function CreateSparkLinkedServiceFormGroup() {
		return new FormGroup<SparkLinkedServiceFormProperties>({
		});

	}


	/** Spark Server linked service properties. */
	export interface SparkLinkedServiceTypeProperties {

		/** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
		allowHostNameCNMismatch?: string | null;

		/** Specifies whether to allow self-signed certificates from the server. The default value is false. */
		allowSelfSignedServerCert?: string | null;

		/**
		 * The authentication method used to access the Spark server.
		 * Required
		 */
		authenticationType: HiveLinkedServiceTypePropertiesAuthenticationType;

		/** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
		enableSsl?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * IP address or host name of the Spark server
		 * Required
		 */
		host: string;

		/** The partial URL corresponding to the Spark server. */
		httpPath?: string | null;

		/** The base definition of a secret type. */
		password?: SparkLinkedServiceTypePropertiesPassword;

		/**
		 * The TCP port that the Spark server uses to listen for client connections.
		 * Required
		 */
		port: string;

		/** The type of Spark server. */
		serverType?: SparkLinkedServiceTypePropertiesServerType | null;

		/** The transport protocol to use in the Thrift layer. */
		thriftTransportProtocol?: HiveLinkedServiceTypePropertiesThriftTransportProtocol | null;

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath?: string | null;

		/** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
		useSystemTrustStore?: string | null;

		/** The user name that you use to access Spark Server. */
		username?: string | null;
	}

	/** Spark Server linked service properties. */
	export interface SparkLinkedServiceTypePropertiesFormProperties {

		/** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
		allowHostNameCNMismatch: FormControl<string | null | undefined>,

		/** Specifies whether to allow self-signed certificates from the server. The default value is false. */
		allowSelfSignedServerCert: FormControl<string | null | undefined>,

		/**
		 * The authentication method used to access the Spark server.
		 * Required
		 */
		authenticationType: FormControl<HiveLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
		enableSsl: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * IP address or host name of the Spark server
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** The partial URL corresponding to the Spark server. */
		httpPath: FormControl<string | null | undefined>,

		/**
		 * The TCP port that the Spark server uses to listen for client connections.
		 * Required
		 */
		port: FormControl<string | null | undefined>,

		/** The type of Spark server. */
		serverType: FormControl<SparkLinkedServiceTypePropertiesServerType | null | undefined>,

		/** The transport protocol to use in the Thrift layer. */
		thriftTransportProtocol: FormControl<HiveLinkedServiceTypePropertiesThriftTransportProtocol | null | undefined>,

		/** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
		trustedCertPath: FormControl<string | null | undefined>,

		/** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
		useSystemTrustStore: FormControl<string | null | undefined>,

		/** The user name that you use to access Spark Server. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateSparkLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<SparkLinkedServiceTypePropertiesFormProperties>({
			allowHostNameCNMismatch: new FormControl<string | null | undefined>(undefined),
			allowSelfSignedServerCert: new FormControl<string | null | undefined>(undefined),
			authenticationType: new FormControl<HiveLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			enableSsl: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			httpPath: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverType: new FormControl<SparkLinkedServiceTypePropertiesServerType | null | undefined>(undefined),
			thriftTransportProtocol: new FormControl<HiveLinkedServiceTypePropertiesThriftTransportProtocol | null | undefined>(undefined),
			trustedCertPath: new FormControl<string | null | undefined>(undefined),
			useSystemTrustStore: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SparkLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SparkLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSparkLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<SparkLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SparkLinkedServiceTypePropertiesServerType { SharkServer = 0, SharkServer2 = 1, SparkThriftServer = 2 }


	/** SQL Server linked service. */
	export interface SqlServerLinkedService {

		/**
		 * SQL Server linked service properties.
		 * Required
		 */
		typeProperties: SqlServerLinkedServiceTypeProperties;
	}

	/** SQL Server linked service. */
	export interface SqlServerLinkedServiceFormProperties {
	}
	export function CreateSqlServerLinkedServiceFormGroup() {
		return new FormGroup<SqlServerLinkedServiceFormProperties>({
		});

	}


	/** SQL Server linked service properties. */
	export interface SqlServerLinkedServiceTypeProperties {

		/**
		 * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: SqlServerLinkedServiceTypePropertiesPassword;

		/** The on-premises Windows authentication user name. Type: string (or Expression with resultType string). */
		userName?: string | null;
	}

	/** SQL Server linked service properties. */
	export interface SqlServerLinkedServiceTypePropertiesFormProperties {

		/**
		 * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The on-premises Windows authentication user name. Type: string (or Expression with resultType string). */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateSqlServerLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<SqlServerLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SqlServerLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SqlServerLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSqlServerLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<SqlServerLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Square Service linked service. */
	export interface SquareLinkedService {

		/**
		 * Square Service linked service properties.
		 * Required
		 */
		typeProperties: SquareLinkedServiceTypeProperties;
	}

	/** Square Service linked service. */
	export interface SquareLinkedServiceFormProperties {
	}
	export function CreateSquareLinkedServiceFormGroup() {
		return new FormGroup<SquareLinkedServiceFormProperties>({
		});

	}


	/** Square Service linked service properties. */
	export interface SquareLinkedServiceTypeProperties {

		/**
		 * The client ID associated with your Square application.
		 * Required
		 */
		clientId: string;

		/** The base definition of a secret type. */
		clientSecret?: SquareLinkedServiceTypePropertiesClientSecret;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The URL of the Square instance. (i.e. mystore.mysquare.com)
		 * Required
		 */
		host: string;

		/**
		 * The redirect URL assigned in the Square application dashboard. (i.e. http://localhost:2500)
		 * Required
		 */
		redirectUri: string;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification?: string | null;
	}

	/** Square Service linked service properties. */
	export interface SquareLinkedServiceTypePropertiesFormProperties {

		/**
		 * The client ID associated with your Square application.
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The URL of the Square instance. (i.e. mystore.mysquare.com)
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/**
		 * The redirect URL assigned in the Square application dashboard. (i.e. http://localhost:2500)
		 * Required
		 */
		redirectUri: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification: FormControl<string | null | undefined>,
	}
	export function CreateSquareLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<SquareLinkedServiceTypePropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			redirectUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SquareLinkedServiceTypePropertiesClientSecret {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SquareLinkedServiceTypePropertiesClientSecretFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSquareLinkedServiceTypePropertiesClientSecretFormGroup() {
		return new FormGroup<SquareLinkedServiceTypePropertiesClientSecretFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for Sybase data source. */
	export interface SybaseLinkedService {

		/**
		 * Sybase linked service properties.
		 * Required
		 */
		typeProperties: SybaseLinkedServiceTypeProperties;
	}

	/** Linked service for Sybase data source. */
	export interface SybaseLinkedServiceFormProperties {
	}
	export function CreateSybaseLinkedServiceFormGroup() {
		return new FormGroup<SybaseLinkedServiceFormProperties>({
		});

	}


	/** Sybase linked service properties. */
	export interface SybaseLinkedServiceTypeProperties {

		/** AuthenticationType to be used for connection. */
		authenticationType?: SapHanaLinkedServicePropertiesAuthenticationType | null;

		/**
		 * Database name for connection. Type: string (or Expression with resultType string).
		 * Required
		 */
		database: string;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: SybaseLinkedServiceTypePropertiesPassword;

		/** Schema name for connection. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/**
		 * Server name for connection. Type: string (or Expression with resultType string).
		 * Required
		 */
		server: string;

		/** Username for authentication. Type: string (or Expression with resultType string). */
		username?: string | null;
	}

	/** Sybase linked service properties. */
	export interface SybaseLinkedServiceTypePropertiesFormProperties {

		/** AuthenticationType to be used for connection. */
		authenticationType: FormControl<SapHanaLinkedServicePropertiesAuthenticationType | null | undefined>,

		/**
		 * Database name for connection. Type: string (or Expression with resultType string).
		 * Required
		 */
		database: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** Schema name for connection. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/**
		 * Server name for connection. Type: string (or Expression with resultType string).
		 * Required
		 */
		server: FormControl<string | null | undefined>,

		/** Username for authentication. Type: string (or Expression with resultType string). */
		username: FormControl<string | null | undefined>,
	}
	export function CreateSybaseLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<SybaseLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<SapHanaLinkedServicePropertiesAuthenticationType | null | undefined>(undefined),
			database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SybaseLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SybaseLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSybaseLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<SybaseLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service for Teradata data source. */
	export interface TeradataLinkedService {

		/**
		 * Teradata linked service properties.
		 * Required
		 */
		typeProperties: TeradataLinkedServiceTypeProperties;
	}

	/** Linked service for Teradata data source. */
	export interface TeradataLinkedServiceFormProperties {
	}
	export function CreateTeradataLinkedServiceFormGroup() {
		return new FormGroup<TeradataLinkedServiceFormProperties>({
		});

	}


	/** Teradata linked service properties. */
	export interface TeradataLinkedServiceTypeProperties {

		/** AuthenticationType to be used for connection. */
		authenticationType?: SapHanaLinkedServicePropertiesAuthenticationType | null;

		/** Teradata ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** The base definition of a secret type. */
		password?: TeradataLinkedServiceTypePropertiesPassword;

		/** Server name for connection. Type: string (or Expression with resultType string). */
		server?: string | null;

		/** Username for authentication. Type: string (or Expression with resultType string). */
		username?: string | null;
	}

	/** Teradata linked service properties. */
	export interface TeradataLinkedServiceTypePropertiesFormProperties {

		/** AuthenticationType to be used for connection. */
		authenticationType: FormControl<SapHanaLinkedServicePropertiesAuthenticationType | null | undefined>,

		/** Teradata ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/** Server name for connection. Type: string (or Expression with resultType string). */
		server: FormControl<string | null | undefined>,

		/** Username for authentication. Type: string (or Expression with resultType string). */
		username: FormControl<string | null | undefined>,
	}
	export function CreateTeradataLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<TeradataLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<SapHanaLinkedServicePropertiesAuthenticationType | null | undefined>(undefined),
			connectionString: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeradataLinkedServiceTypePropertiesPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface TeradataLinkedServiceTypePropertiesPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTeradataLinkedServiceTypePropertiesPasswordFormGroup() {
		return new FormGroup<TeradataLinkedServiceTypePropertiesPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Vertica linked service. */
	export interface VerticaLinkedService {

		/**
		 * Vertica linked service properties.
		 * Required
		 */
		typeProperties: VerticaLinkedServiceTypeProperties;
	}

	/** Vertica linked service. */
	export interface VerticaLinkedServiceFormProperties {
	}
	export function CreateVerticaLinkedServiceFormGroup() {
		return new FormGroup<VerticaLinkedServiceFormProperties>({
		});

	}


	/** Vertica linked service properties. */
	export interface VerticaLinkedServiceTypeProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString?: string | null;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/** Azure Key Vault secret reference. */
		pwd?: VerticaLinkedServiceTypePropertiesPwd;
	}

	/** Vertica linked service properties. */
	export interface VerticaLinkedServiceTypePropertiesFormProperties {

		/** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
		connectionString: FormControl<string | null | undefined>,

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,
	}
	export function CreateVerticaLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<VerticaLinkedServiceTypePropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VerticaLinkedServiceTypePropertiesPwd {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: any;
	}
	export interface VerticaLinkedServiceTypePropertiesPwdFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: FormControl<any | null | undefined>,
	}
	export function CreateVerticaLinkedServiceTypePropertiesPwdFormGroup() {
		return new FormGroup<VerticaLinkedServiceTypePropertiesPwdFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			store: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A WebLinkedService that uses anonymous authentication to communicate with an HTTP endpoint. */
	export interface WebAnonymousAuthentication {
	}

	/** A WebLinkedService that uses anonymous authentication to communicate with an HTTP endpoint. */
	export interface WebAnonymousAuthenticationFormProperties {
	}
	export function CreateWebAnonymousAuthenticationFormGroup() {
		return new FormGroup<WebAnonymousAuthenticationFormProperties>({
		});

	}


	/** A WebLinkedService that uses basic authentication to communicate with an HTTP endpoint. */
	export interface WebBasicAuthentication extends WebLinkedServiceTypeProperties {

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		password: WebBasicAuthenticationPassword;

		/**
		 * User name for Basic authentication. Type: string (or Expression with resultType string).
		 * Required
		 */
		username: string;
	}

	/** A WebLinkedService that uses basic authentication to communicate with an HTTP endpoint. */
	export interface WebBasicAuthenticationFormProperties extends WebLinkedServiceTypePropertiesFormProperties {

		/**
		 * User name for Basic authentication. Type: string (or Expression with resultType string).
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateWebBasicAuthenticationFormGroup() {
		return new FormGroup<WebBasicAuthenticationFormProperties>({
			authenticationType: new FormControl<WebLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebBasicAuthenticationPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface WebBasicAuthenticationPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebBasicAuthenticationPasswordFormGroup() {
		return new FormGroup<WebBasicAuthenticationPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A WebLinkedService that uses client certificate based authentication to communicate with an HTTP endpoint. This scheme follows mutual authentication; the server must also provide valid credentials to the client. */
	export interface WebClientCertificateAuthentication extends WebLinkedServiceTypeProperties {

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		password: WebClientCertificateAuthenticationPassword;

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		pfx: WebClientCertificateAuthenticationPfx;
	}

	/** A WebLinkedService that uses client certificate based authentication to communicate with an HTTP endpoint. This scheme follows mutual authentication; the server must also provide valid credentials to the client. */
	export interface WebClientCertificateAuthenticationFormProperties extends WebLinkedServiceTypePropertiesFormProperties {
	}
	export function CreateWebClientCertificateAuthenticationFormGroup() {
		return new FormGroup<WebClientCertificateAuthenticationFormProperties>({
			authenticationType: new FormControl<WebLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebClientCertificateAuthenticationPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface WebClientCertificateAuthenticationPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebClientCertificateAuthenticationPasswordFormGroup() {
		return new FormGroup<WebClientCertificateAuthenticationPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebClientCertificateAuthenticationPfx {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface WebClientCertificateAuthenticationPfxFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebClientCertificateAuthenticationPfxFormGroup() {
		return new FormGroup<WebClientCertificateAuthenticationPfxFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Web linked service. */
	export interface WebLinkedService {

		/**
		 * Base definition of WebLinkedServiceTypeProperties, this typeProperties is polymorphic based on authenticationType, so not flattened in SDK models.
		 * Required
		 */
		typeProperties: WebLinkedServiceTypeProperties;
	}

	/** Web linked service. */
	export interface WebLinkedServiceFormProperties {
	}
	export function CreateWebLinkedServiceFormGroup() {
		return new FormGroup<WebLinkedServiceFormProperties>({
		});

	}


	/** Base definition of WebLinkedServiceTypeProperties, this typeProperties is polymorphic based on authenticationType, so not flattened in SDK models. */
	export interface WebLinkedServiceTypeProperties {

		/**
		 * Type of authentication used to connect to the web table source.
		 * Required
		 */
		authenticationType: WebLinkedServiceTypePropertiesAuthenticationType;

		/**
		 * The URL of the web service endpoint, e.g. http://www.microsoft.com . Type: string (or Expression with resultType string).
		 * Required
		 */
		url: string;
	}

	/** Base definition of WebLinkedServiceTypeProperties, this typeProperties is polymorphic based on authenticationType, so not flattened in SDK models. */
	export interface WebLinkedServiceTypePropertiesFormProperties {

		/**
		 * Type of authentication used to connect to the web table source.
		 * Required
		 */
		authenticationType: FormControl<WebLinkedServiceTypePropertiesAuthenticationType | null | undefined>,

		/**
		 * The URL of the web service endpoint, e.g. http://www.microsoft.com . Type: string (or Expression with resultType string).
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<WebLinkedServiceTypePropertiesFormProperties>({
			authenticationType: new FormControl<WebLinkedServiceTypePropertiesAuthenticationType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WebLinkedServiceTypePropertiesAuthenticationType { Basic = 0, Anonymous = 1, ClientCertificate = 2 }


	/** Xero Service linked service. */
	export interface XeroLinkedService {

		/**
		 * Xero Service linked service properties.
		 * Required
		 */
		typeProperties: XeroLinkedServiceTypeProperties;
	}

	/** Xero Service linked service. */
	export interface XeroLinkedServiceFormProperties {
	}
	export function CreateXeroLinkedServiceFormGroup() {
		return new FormGroup<XeroLinkedServiceFormProperties>({
		});

	}


	/** Xero Service linked service properties. */
	export interface XeroLinkedServiceTypeProperties {

		/** The base definition of a secret type. */
		consumerKey?: XeroLinkedServiceTypePropertiesConsumerKey;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The endpoint of the Xero server. (i.e. api.xero.com)
		 * Required
		 */
		host: string;

		/** The base definition of a secret type. */
		privateKey?: XeroLinkedServiceTypePropertiesPrivateKey;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification?: string | null;
	}

	/** Xero Service linked service properties. */
	export interface XeroLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The endpoint of the Xero server. (i.e. api.xero.com)
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification: FormControl<string | null | undefined>,
	}
	export function CreateXeroLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<XeroLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface XeroLinkedServiceTypePropertiesConsumerKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface XeroLinkedServiceTypePropertiesConsumerKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateXeroLinkedServiceTypePropertiesConsumerKeyFormGroup() {
		return new FormGroup<XeroLinkedServiceTypePropertiesConsumerKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface XeroLinkedServiceTypePropertiesPrivateKey {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface XeroLinkedServiceTypePropertiesPrivateKeyFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateXeroLinkedServiceTypePropertiesPrivateKeyFormGroup() {
		return new FormGroup<XeroLinkedServiceTypePropertiesPrivateKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Zoho server linked service. */
	export interface ZohoLinkedService {

		/**
		 * Zoho server linked service properties.
		 * Required
		 */
		typeProperties: ZohoLinkedServiceTypeProperties;
	}

	/** Zoho server linked service. */
	export interface ZohoLinkedServiceFormProperties {
	}
	export function CreateZohoLinkedServiceFormGroup() {
		return new FormGroup<ZohoLinkedServiceFormProperties>({
		});

	}


	/** Zoho server linked service properties. */
	export interface ZohoLinkedServiceTypeProperties {

		/** The base definition of a secret type. */
		accessToken?: ZohoLinkedServiceTypePropertiesAccessToken;

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential?: string | null;

		/**
		 * The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private)
		 * Required
		 */
		endpoint: string;

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints?: string | null;

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification?: string | null;

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification?: string | null;
	}

	/** Zoho server linked service properties. */
	export interface ZohoLinkedServiceTypePropertiesFormProperties {

		/** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
		encryptedCredential: FormControl<string | null | undefined>,

		/**
		 * The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private)
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,

		/** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
		useEncryptedEndpoints: FormControl<string | null | undefined>,

		/** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
		useHostVerification: FormControl<string | null | undefined>,

		/** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
		usePeerVerification: FormControl<string | null | undefined>,
	}
	export function CreateZohoLinkedServiceTypePropertiesFormGroup() {
		return new FormGroup<ZohoLinkedServiceTypePropertiesFormProperties>({
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useEncryptedEndpoints: new FormControl<string | null | undefined>(undefined),
			useHostVerification: new FormControl<string | null | undefined>(undefined),
			usePeerVerification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ZohoLinkedServiceTypePropertiesAccessToken {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface ZohoLinkedServiceTypePropertiesAccessTokenFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateZohoLinkedServiceTypePropertiesAccessTokenFormGroup() {
		return new FormGroup<ZohoLinkedServiceTypePropertiesAccessTokenFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

