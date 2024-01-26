import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateExternalConnectionResult {
		repository?: RepositoryDescription;
	}
	export interface AssociateExternalConnectionResultFormProperties {
	}
	export function CreateAssociateExternalConnectionResultFormGroup() {
		return new FormGroup<AssociateExternalConnectionResultFormProperties>({
		});

	}


	/**  The details of a repository stored in CodeArtifact. A CodeArtifact repository contains a set of package versions, each of which maps to a set of assets. Repositories are polyglot—a single repository can contain packages of any supported type. Each repository exposes endpoints for fetching and publishing packages using tools like the <code>npm</code> CLI, the Maven CLI (<code>mvn</code>), and <code>pip</code>. You can create up to 100 repositories per Amazon Web Services account.  */
	export interface RepositoryDescription {
		name?: string;
		administratorAccount?: string;
		domainName?: string;
		domainOwner?: string;
		arn?: string;
		description?: string;
		upstreams?: Array<UpstreamRepositoryInfo>;
		externalConnections?: Array<RepositoryExternalConnectionInfo>;
		createdTime?: Date;
	}

	/**  The details of a repository stored in CodeArtifact. A CodeArtifact repository contains a set of package versions, each of which maps to a set of assets. Repositories are polyglot—a single repository can contain packages of any supported type. Each repository exposes endpoints for fetching and publishing packages using tools like the <code>npm</code> CLI, the Maven CLI (<code>mvn</code>), and <code>pip</code>. You can create up to 100 repositories per Amazon Web Services account.  */
	export interface RepositoryDescriptionFormProperties {
		name: FormControl<string | null | undefined>,
		administratorAccount: FormControl<string | null | undefined>,
		domainName: FormControl<string | null | undefined>,
		domainOwner: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdTime: FormControl<Date | null | undefined>,
	}
	export function CreateRepositoryDescriptionFormGroup() {
		return new FormGroup<RepositoryDescriptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			administratorAccount: new FormControl<string | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
			domainOwner: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  Information about an upstream repository.  */
	export interface UpstreamRepositoryInfo {
		repositoryName?: string;
	}

	/**  Information about an upstream repository.  */
	export interface UpstreamRepositoryInfoFormProperties {
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateUpstreamRepositoryInfoFormGroup() {
		return new FormGroup<UpstreamRepositoryInfoFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Contains information about the external connection of a repository.  */
	export interface RepositoryExternalConnectionInfo {
		externalConnectionName?: string;
		packageFormat?: PackageFormat;
		status?: ExternalConnectionStatus;
	}

	/**  Contains information about the external connection of a repository.  */
	export interface RepositoryExternalConnectionInfoFormProperties {
		externalConnectionName: FormControl<string | null | undefined>,
		packageFormat: FormControl<PackageFormat | null | undefined>,
		status: FormControl<ExternalConnectionStatus | null | undefined>,
	}
	export function CreateRepositoryExternalConnectionInfoFormGroup() {
		return new FormGroup<RepositoryExternalConnectionInfoFormProperties>({
			externalConnectionName: new FormControl<string | null | undefined>(undefined),
			packageFormat: new FormControl<PackageFormat | null | undefined>(undefined),
			status: new FormControl<ExternalConnectionStatus | null | undefined>(undefined),
		});

	}

	export enum PackageFormat { npm = 0, pypi = 1, maven = 2, nuget = 3, generic = 4 }

	export enum ExternalConnectionStatus { Available = 0 }

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface CopyPackageVersionsResult {
		successfulVersions?: SuccessfulPackageVersionInfoMap;
		failedVersions?: PackageVersionErrorMap;
	}
	export interface CopyPackageVersionsResultFormProperties {
	}
	export function CreateCopyPackageVersionsResultFormGroup() {
		return new FormGroup<CopyPackageVersionsResultFormProperties>({
		});

	}

	export interface SuccessfulPackageVersionInfoMap {
	}
	export interface SuccessfulPackageVersionInfoMapFormProperties {
	}
	export function CreateSuccessfulPackageVersionInfoMapFormGroup() {
		return new FormGroup<SuccessfulPackageVersionInfoMapFormProperties>({
		});

	}

	export interface PackageVersionErrorMap {
	}
	export interface PackageVersionErrorMapFormProperties {
	}
	export function CreatePackageVersionErrorMapFormGroup() {
		return new FormGroup<PackageVersionErrorMapFormProperties>({
		});

	}

	export interface CreateDomainResult {
		domain?: DomainDescription;
	}
	export interface CreateDomainResultFormProperties {
	}
	export function CreateCreateDomainResultFormGroup() {
		return new FormGroup<CreateDomainResultFormProperties>({
		});

	}


	/**  Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you add one or more repositories.  */
	export interface DomainDescription {
		name?: string;
		owner?: string;
		arn?: string;
		status?: DomainStatus;
		createdTime?: Date;
		encryptionKey?: string;
		repositoryCount?: number | null;
		assetSizeBytes?: number | null;
		s3BucketArn?: string;
	}

	/**  Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you add one or more repositories.  */
	export interface DomainDescriptionFormProperties {
		name: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		status: FormControl<DomainStatus | null | undefined>,
		createdTime: FormControl<Date | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,
		repositoryCount: FormControl<number | null | undefined>,
		assetSizeBytes: FormControl<number | null | undefined>,
		s3BucketArn: FormControl<string | null | undefined>,
	}
	export function CreateDomainDescriptionFormGroup() {
		return new FormGroup<DomainDescriptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DomainStatus | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			repositoryCount: new FormControl<number | null | undefined>(undefined),
			assetSizeBytes: new FormControl<number | null | undefined>(undefined),
			s3BucketArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DomainStatus { Active = 0, Deleted = 1 }


	/** A tag is a key-value pair that can be used to manage, search for, or filter resources in CodeArtifact. */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** A tag is a key-value pair that can be used to manage, search for, or filter resources in CodeArtifact. */
	export interface TagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRepositoryResult {
		repository?: RepositoryDescription;
	}
	export interface CreateRepositoryResultFormProperties {
	}
	export function CreateCreateRepositoryResultFormGroup() {
		return new FormGroup<CreateRepositoryResultFormProperties>({
		});

	}


	/**  Information about an upstream repository. A list of <code>UpstreamRepository</code> objects is an input parameter to <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html">CreateRepository</a> and <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdateRepository.html">UpdateRepository</a>.  */
	export interface UpstreamRepository {

		/** Required */
		repositoryName: string;
	}

	/**  Information about an upstream repository. A list of <code>UpstreamRepository</code> objects is an input parameter to <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html">CreateRepository</a> and <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdateRepository.html">UpdateRepository</a>.  */
	export interface UpstreamRepositoryFormProperties {

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateUpstreamRepositoryFormGroup() {
		return new FormGroup<UpstreamRepositoryFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDomainResult {
		domain?: DomainDescription;
	}
	export interface DeleteDomainResultFormProperties {
	}
	export function CreateDeleteDomainResultFormGroup() {
		return new FormGroup<DeleteDomainResultFormProperties>({
		});

	}

	export interface DeleteDomainPermissionsPolicyResult {
		policy?: ResourcePolicy;
	}
	export interface DeleteDomainPermissionsPolicyResultFormProperties {
	}
	export function CreateDeleteDomainPermissionsPolicyResultFormGroup() {
		return new FormGroup<DeleteDomainPermissionsPolicyResultFormProperties>({
		});

	}


	/**  An CodeArtifact resource policy that contains a resource ARN, document details, and a revision.  */
	export interface ResourcePolicy {
		resourceArn?: string;
		revision?: string;
		document?: string;
	}

	/**  An CodeArtifact resource policy that contains a resource ARN, document details, and a revision.  */
	export interface ResourcePolicyFormProperties {
		resourceArn: FormControl<string | null | undefined>,
		revision: FormControl<string | null | undefined>,
		document: FormControl<string | null | undefined>,
	}
	export function CreateResourcePolicyFormGroup() {
		return new FormGroup<ResourcePolicyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			document: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePackageResult {

		/** Details about a package, including its format, namespace, and name. */
		deletedPackage?: PackageSummary;
	}
	export interface DeletePackageResultFormProperties {
	}
	export function CreateDeletePackageResultFormGroup() {
		return new FormGroup<DeletePackageResultFormProperties>({
		});

	}


	/**  Details about a package, including its format, namespace, and name.  */
	export interface PackageSummary {
		format?: PackageFormat;
		namespace?: string;
		package?: string;
		originConfiguration?: PackageOriginConfiguration;
	}

	/**  Details about a package, including its format, namespace, and name.  */
	export interface PackageSummaryFormProperties {
		format: FormControl<PackageFormat | null | undefined>,
		namespace: FormControl<string | null | undefined>,
		package: FormControl<string | null | undefined>,
	}
	export function CreatePackageSummaryFormGroup() {
		return new FormGroup<PackageSummaryFormProperties>({
			format: new FormControl<PackageFormat | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			package: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the package origin configuration of a package. */
	export interface PackageOriginConfiguration {
		restrictions?: PackageOriginRestrictions;
	}

	/** Details about the package origin configuration of a package. */
	export interface PackageOriginConfigurationFormProperties {
	}
	export function CreatePackageOriginConfigurationFormGroup() {
		return new FormGroup<PackageOriginConfigurationFormProperties>({
		});

	}


	/** Details about the origin restrictions set on the package. The package origin restrictions determine how new versions of a package can be added to a specific repository. */
	export interface PackageOriginRestrictions {

		/** Required */
		publish: AllowPublish;

		/** Required */
		upstream: AllowPublish;
	}

	/** Details about the origin restrictions set on the package. The package origin restrictions determine how new versions of a package can be added to a specific repository. */
	export interface PackageOriginRestrictionsFormProperties {

		/** Required */
		publish: FormControl<AllowPublish | null | undefined>,

		/** Required */
		upstream: FormControl<AllowPublish | null | undefined>,
	}
	export function CreatePackageOriginRestrictionsFormGroup() {
		return new FormGroup<PackageOriginRestrictionsFormProperties>({
			publish: new FormControl<AllowPublish | null | undefined>(undefined, [Validators.required]),
			upstream: new FormControl<AllowPublish | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AllowPublish { ALLOW = 0, BLOCK = 1 }

	export interface DeletePackageVersionsResult {
		successfulVersions?: SuccessfulPackageVersionInfoMap;
		failedVersions?: PackageVersionErrorMap;
	}
	export interface DeletePackageVersionsResultFormProperties {
	}
	export function CreateDeletePackageVersionsResultFormGroup() {
		return new FormGroup<DeletePackageVersionsResultFormProperties>({
		});

	}

	export interface DeleteRepositoryResult {
		repository?: RepositoryDescription;
	}
	export interface DeleteRepositoryResultFormProperties {
	}
	export function CreateDeleteRepositoryResultFormGroup() {
		return new FormGroup<DeleteRepositoryResultFormProperties>({
		});

	}

	export interface DeleteRepositoryPermissionsPolicyResult {
		policy?: ResourcePolicy;
	}
	export interface DeleteRepositoryPermissionsPolicyResultFormProperties {
	}
	export function CreateDeleteRepositoryPermissionsPolicyResultFormGroup() {
		return new FormGroup<DeleteRepositoryPermissionsPolicyResultFormProperties>({
		});

	}

	export interface DescribeDomainResult {

		/** Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you add one or more repositories. */
		domain?: DomainDescription;
	}
	export interface DescribeDomainResultFormProperties {
	}
	export function CreateDescribeDomainResultFormGroup() {
		return new FormGroup<DescribeDomainResultFormProperties>({
		});

	}

	export interface DescribePackageResult {

		/** Required */
		package: PackageDescription;
	}
	export interface DescribePackageResultFormProperties {
	}
	export function CreateDescribePackageResultFormGroup() {
		return new FormGroup<DescribePackageResultFormProperties>({
		});

	}


	/** Details about a package. */
	export interface PackageDescription {
		format?: PackageFormat;
		namespace?: string;
		name?: string;
		originConfiguration?: PackageOriginConfiguration;
	}

	/** Details about a package. */
	export interface PackageDescriptionFormProperties {
		format: FormControl<PackageFormat | null | undefined>,
		namespace: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePackageDescriptionFormGroup() {
		return new FormGroup<PackageDescriptionFormProperties>({
			format: new FormControl<PackageFormat | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePackageVersionResult {

		/** Required */
		packageVersion: PackageVersionDescription;
	}
	export interface DescribePackageVersionResultFormProperties {
	}
	export function CreateDescribePackageVersionResultFormGroup() {
		return new FormGroup<DescribePackageVersionResultFormProperties>({
		});

	}


	/**  Details about a package version.  */
	export interface PackageVersionDescription {
		format?: PackageFormat;
		namespace?: string;
		packageName?: string;
		displayName?: string;
		version?: string;
		summary?: string;
		homePage?: string;
		sourceCodeRepository?: string;
		publishedTime?: Date;
		licenses?: Array<LicenseInfo>;
		revision?: string;
		status?: PackageVersionStatus;
		origin?: PackageVersionOrigin;
	}

	/**  Details about a package version.  */
	export interface PackageVersionDescriptionFormProperties {
		format: FormControl<PackageFormat | null | undefined>,
		namespace: FormControl<string | null | undefined>,
		packageName: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
		homePage: FormControl<string | null | undefined>,
		sourceCodeRepository: FormControl<string | null | undefined>,
		publishedTime: FormControl<Date | null | undefined>,
		revision: FormControl<string | null | undefined>,
		status: FormControl<PackageVersionStatus | null | undefined>,
	}
	export function CreatePackageVersionDescriptionFormGroup() {
		return new FormGroup<PackageVersionDescriptionFormProperties>({
			format: new FormControl<PackageFormat | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			homePage: new FormControl<string | null | undefined>(undefined),
			sourceCodeRepository: new FormControl<string | null | undefined>(undefined),
			publishedTime: new FormControl<Date | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PackageVersionStatus | null | undefined>(undefined),
		});

	}


	/**  Details of the license data.  */
	export interface LicenseInfo {
		name?: string;
		url?: string;
	}

	/**  Details of the license data.  */
	export interface LicenseInfoFormProperties {
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateLicenseInfoFormGroup() {
		return new FormGroup<LicenseInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PackageVersionStatus { Published = 0, Unfinished = 1, Unlisted = 2, Archived = 3, Disposed = 4, Deleted = 5 }


	/** Information about how a package version was added to a repository. */
	export interface PackageVersionOrigin {
		domainEntryPoint?: DomainEntryPoint;
		originType?: PackageVersionOriginType;
	}

	/** Information about how a package version was added to a repository. */
	export interface PackageVersionOriginFormProperties {
		originType: FormControl<PackageVersionOriginType | null | undefined>,
	}
	export function CreatePackageVersionOriginFormGroup() {
		return new FormGroup<PackageVersionOriginFormProperties>({
			originType: new FormControl<PackageVersionOriginType | null | undefined>(undefined),
		});

	}


	/** Information about how a package originally entered the CodeArtifact domain. For packages published directly to CodeArtifact, the entry point is the repository it was published to. For packages ingested from an external repository, the entry point is the external connection that it was ingested from. An external connection is a CodeArtifact repository that is connected to an external repository such as the npm registry or NuGet gallery. */
	export interface DomainEntryPoint {
		repositoryName?: string;
		externalConnectionName?: string;
	}

	/** Information about how a package originally entered the CodeArtifact domain. For packages published directly to CodeArtifact, the entry point is the repository it was published to. For packages ingested from an external repository, the entry point is the external connection that it was ingested from. An external connection is a CodeArtifact repository that is connected to an external repository such as the npm registry or NuGet gallery. */
	export interface DomainEntryPointFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		externalConnectionName: FormControl<string | null | undefined>,
	}
	export function CreateDomainEntryPointFormGroup() {
		return new FormGroup<DomainEntryPointFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			externalConnectionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PackageVersionOriginType { INTERNAL = 0, EXTERNAL = 1, UNKNOWN = 2 }

	export interface DescribeRepositoryResult {
		repository?: RepositoryDescription;
	}
	export interface DescribeRepositoryResultFormProperties {
	}
	export function CreateDescribeRepositoryResultFormGroup() {
		return new FormGroup<DescribeRepositoryResultFormProperties>({
		});

	}

	export interface DisassociateExternalConnectionResult {
		repository?: RepositoryDescription;
	}
	export interface DisassociateExternalConnectionResultFormProperties {
	}
	export function CreateDisassociateExternalConnectionResultFormGroup() {
		return new FormGroup<DisassociateExternalConnectionResultFormProperties>({
		});

	}

	export interface DisposePackageVersionsResult {
		successfulVersions?: SuccessfulPackageVersionInfoMap;
		failedVersions?: PackageVersionErrorMap;
	}
	export interface DisposePackageVersionsResultFormProperties {
	}
	export function CreateDisposePackageVersionsResultFormGroup() {
		return new FormGroup<DisposePackageVersionsResultFormProperties>({
		});

	}

	export interface GetAuthorizationTokenResult {
		authorizationToken?: string;
		expiration?: Date;
	}
	export interface GetAuthorizationTokenResultFormProperties {
		authorizationToken: FormControl<string | null | undefined>,
		expiration: FormControl<Date | null | undefined>,
	}
	export function CreateGetAuthorizationTokenResultFormGroup() {
		return new FormGroup<GetAuthorizationTokenResultFormProperties>({
			authorizationToken: new FormControl<string | null | undefined>(undefined),
			expiration: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetDomainPermissionsPolicyResult {
		policy?: ResourcePolicy;
	}
	export interface GetDomainPermissionsPolicyResultFormProperties {
	}
	export function CreateGetDomainPermissionsPolicyResultFormGroup() {
		return new FormGroup<GetDomainPermissionsPolicyResultFormProperties>({
		});

	}

	export interface GetPackageVersionAssetResult {
		asset?: string;
	}
	export interface GetPackageVersionAssetResultFormProperties {
		asset: FormControl<string | null | undefined>,
	}
	export function CreateGetPackageVersionAssetResultFormGroup() {
		return new FormGroup<GetPackageVersionAssetResultFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPackageVersionReadmeResult {
		format?: PackageFormat;
		namespace?: string;
		package?: string;
		version?: string;
		versionRevision?: string;
		readme?: string;
	}
	export interface GetPackageVersionReadmeResultFormProperties {
		format: FormControl<PackageFormat | null | undefined>,
		namespace: FormControl<string | null | undefined>,
		package: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		versionRevision: FormControl<string | null | undefined>,
		readme: FormControl<string | null | undefined>,
	}
	export function CreateGetPackageVersionReadmeResultFormGroup() {
		return new FormGroup<GetPackageVersionReadmeResultFormProperties>({
			format: new FormControl<PackageFormat | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			package: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			versionRevision: new FormControl<string | null | undefined>(undefined),
			readme: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRepositoryEndpointResult {
		repositoryEndpoint?: string;
	}
	export interface GetRepositoryEndpointResultFormProperties {
		repositoryEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateGetRepositoryEndpointResultFormGroup() {
		return new FormGroup<GetRepositoryEndpointResultFormProperties>({
			repositoryEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRepositoryPermissionsPolicyResult {
		policy?: ResourcePolicy;
	}
	export interface GetRepositoryPermissionsPolicyResultFormProperties {
	}
	export function CreateGetRepositoryPermissionsPolicyResultFormGroup() {
		return new FormGroup<GetRepositoryPermissionsPolicyResultFormProperties>({
		});

	}

	export interface ListDomainsResult {
		domains?: Array<DomainSummary>;
		nextToken?: string;
	}
	export interface ListDomainsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsResultFormGroup() {
		return new FormGroup<ListDomainsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about a domain, including its name, Amazon Resource Name (ARN), and status. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListDomains.html">ListDomains</a> operation returns a list of <code>DomainSummary</code> objects.  */
	export interface DomainSummary {
		name?: string;
		owner?: string;
		arn?: string;
		status?: DomainStatus;
		createdTime?: Date;
		encryptionKey?: string;
	}

	/**  Information about a domain, including its name, Amazon Resource Name (ARN), and status. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListDomains.html">ListDomains</a> operation returns a list of <code>DomainSummary</code> objects.  */
	export interface DomainSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		status: FormControl<DomainStatus | null | undefined>,
		createdTime: FormControl<Date | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,
	}
	export function CreateDomainSummaryFormGroup() {
		return new FormGroup<DomainSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DomainStatus | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPackageVersionAssetsResult {
		format?: PackageFormat;
		namespace?: string;
		package?: string;
		version?: string;
		versionRevision?: string;
		nextToken?: string;
		assets?: Array<AssetSummary>;
	}
	export interface ListPackageVersionAssetsResultFormProperties {
		format: FormControl<PackageFormat | null | undefined>,
		namespace: FormControl<string | null | undefined>,
		package: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		versionRevision: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPackageVersionAssetsResultFormGroup() {
		return new FormGroup<ListPackageVersionAssetsResultFormProperties>({
			format: new FormControl<PackageFormat | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			package: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			versionRevision: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Contains details about a package version asset.  */
	export interface AssetSummary {

		/** Required */
		name: string;
		size?: number | null;
		hashes?: AssetHashes;
	}

	/**  Contains details about a package version asset.  */
	export interface AssetSummaryFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		size: FormControl<number | null | undefined>,
	}
	export function CreateAssetSummaryFormGroup() {
		return new FormGroup<AssetSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AssetHashes {
	}
	export interface AssetHashesFormProperties {
	}
	export function CreateAssetHashesFormGroup() {
		return new FormGroup<AssetHashesFormProperties>({
		});

	}

	export interface ListPackageVersionDependenciesResult {
		format?: PackageFormat;
		namespace?: string;
		package?: string;
		version?: string;
		versionRevision?: string;
		nextToken?: string;
		dependencies?: Array<PackageDependency>;
	}
	export interface ListPackageVersionDependenciesResultFormProperties {
		format: FormControl<PackageFormat | null | undefined>,
		namespace: FormControl<string | null | undefined>,
		package: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		versionRevision: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPackageVersionDependenciesResultFormGroup() {
		return new FormGroup<ListPackageVersionDependenciesResultFormProperties>({
			format: new FormControl<PackageFormat | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			package: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			versionRevision: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Details about a package dependency.  */
	export interface PackageDependency {
		namespace?: string;
		package?: string;
		dependencyType?: string;
		versionRequirement?: string;
	}

	/**  Details about a package dependency.  */
	export interface PackageDependencyFormProperties {
		namespace: FormControl<string | null | undefined>,
		package: FormControl<string | null | undefined>,
		dependencyType: FormControl<string | null | undefined>,
		versionRequirement: FormControl<string | null | undefined>,
	}
	export function CreatePackageDependencyFormGroup() {
		return new FormGroup<PackageDependencyFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined),
			package: new FormControl<string | null | undefined>(undefined),
			dependencyType: new FormControl<string | null | undefined>(undefined),
			versionRequirement: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPackageVersionsResult {
		defaultDisplayVersion?: string;
		format?: PackageFormat;
		namespace?: string;
		package?: string;
		versions?: Array<PackageVersionSummary>;
		nextToken?: string;
	}
	export interface ListPackageVersionsResultFormProperties {
		defaultDisplayVersion: FormControl<string | null | undefined>,
		format: FormControl<PackageFormat | null | undefined>,
		namespace: FormControl<string | null | undefined>,
		package: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPackageVersionsResultFormGroup() {
		return new FormGroup<ListPackageVersionsResultFormProperties>({
			defaultDisplayVersion: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<PackageFormat | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			package: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Details about a package version, including its status, version, and revision. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a> operation returns a list of <code>PackageVersionSummary</code> objects.  */
	export interface PackageVersionSummary {

		/** Required */
		version: string;
		revision?: string;

		/** Required */
		status: PackageVersionStatus;
		origin?: PackageVersionOrigin;
	}

	/**  Details about a package version, including its status, version, and revision. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a> operation returns a list of <code>PackageVersionSummary</code> objects.  */
	export interface PackageVersionSummaryFormProperties {

		/** Required */
		version: FormControl<string | null | undefined>,
		revision: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<PackageVersionStatus | null | undefined>,
	}
	export function CreatePackageVersionSummaryFormGroup() {
		return new FormGroup<PackageVersionSummaryFormProperties>({
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revision: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PackageVersionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPackagesResult {
		packages?: Array<PackageSummary>;
		nextToken?: string;
	}
	export interface ListPackagesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPackagesResultFormGroup() {
		return new FormGroup<ListPackagesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRepositoriesResult {
		repositories?: Array<RepositorySummary>;
		nextToken?: string;
	}
	export interface ListRepositoriesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRepositoriesResultFormGroup() {
		return new FormGroup<ListRepositoriesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Details about a repository, including its Amazon Resource Name (ARN), description, and domain information. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositories.html">ListRepositories</a> operation returns a list of <code>RepositorySummary</code> objects.  */
	export interface RepositorySummary {
		name?: string;
		administratorAccount?: string;
		domainName?: string;
		domainOwner?: string;
		arn?: string;
		description?: string;
		createdTime?: Date;
	}

	/**  Details about a repository, including its Amazon Resource Name (ARN), description, and domain information. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositories.html">ListRepositories</a> operation returns a list of <code>RepositorySummary</code> objects.  */
	export interface RepositorySummaryFormProperties {
		name: FormControl<string | null | undefined>,
		administratorAccount: FormControl<string | null | undefined>,
		domainName: FormControl<string | null | undefined>,
		domainOwner: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdTime: FormControl<Date | null | undefined>,
	}
	export function CreateRepositorySummaryFormGroup() {
		return new FormGroup<RepositorySummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			administratorAccount: new FormControl<string | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
			domainOwner: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListRepositoriesInDomainResult {
		repositories?: Array<RepositorySummary>;
		nextToken?: string;
	}
	export interface ListRepositoriesInDomainResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRepositoriesInDomainResultFormGroup() {
		return new FormGroup<ListRepositoriesInDomainResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResult {
		tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResultFormProperties {
	}
	export function CreateListTagsForResourceResultFormGroup() {
		return new FormGroup<ListTagsForResourceResultFormProperties>({
		});

	}

	export interface PublishPackageVersionResult {
		format?: PackageFormat;
		namespace?: string;
		package?: string;
		version?: string;
		versionRevision?: string;
		status?: PackageVersionStatus;
		asset?: AssetSummary;
	}
	export interface PublishPackageVersionResultFormProperties {
		format: FormControl<PackageFormat | null | undefined>,
		namespace: FormControl<string | null | undefined>,
		package: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		versionRevision: FormControl<string | null | undefined>,
		status: FormControl<PackageVersionStatus | null | undefined>,
	}
	export function CreatePublishPackageVersionResultFormGroup() {
		return new FormGroup<PublishPackageVersionResultFormProperties>({
			format: new FormControl<PackageFormat | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			package: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			versionRevision: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PackageVersionStatus | null | undefined>(undefined),
		});

	}

	export interface PutDomainPermissionsPolicyResult {
		policy?: ResourcePolicy;
	}
	export interface PutDomainPermissionsPolicyResultFormProperties {
	}
	export function CreatePutDomainPermissionsPolicyResultFormGroup() {
		return new FormGroup<PutDomainPermissionsPolicyResultFormProperties>({
		});

	}

	export interface PutPackageOriginConfigurationResult {
		originConfiguration?: PackageOriginConfiguration;
	}
	export interface PutPackageOriginConfigurationResultFormProperties {
	}
	export function CreatePutPackageOriginConfigurationResultFormGroup() {
		return new FormGroup<PutPackageOriginConfigurationResultFormProperties>({
		});

	}

	export enum AllowUpstream { ALLOW = 0, BLOCK = 1 }

	export interface PutRepositoryPermissionsPolicyResult {
		policy?: ResourcePolicy;
	}
	export interface PutRepositoryPermissionsPolicyResultFormProperties {
	}
	export function CreatePutRepositoryPermissionsPolicyResultFormGroup() {
		return new FormGroup<PutRepositoryPermissionsPolicyResultFormProperties>({
		});

	}

	export interface TagResourceResult {
	}
	export interface TagResourceResultFormProperties {
	}
	export function CreateTagResourceResultFormGroup() {
		return new FormGroup<TagResourceResultFormProperties>({
		});

	}

	export interface UntagResourceResult {
	}
	export interface UntagResourceResultFormProperties {
	}
	export function CreateUntagResourceResultFormGroup() {
		return new FormGroup<UntagResourceResultFormProperties>({
		});

	}

	export interface UpdatePackageVersionsStatusResult {
		successfulVersions?: SuccessfulPackageVersionInfoMap;
		failedVersions?: PackageVersionErrorMap;
	}
	export interface UpdatePackageVersionsStatusResultFormProperties {
	}
	export function CreateUpdatePackageVersionsStatusResultFormGroup() {
		return new FormGroup<UpdatePackageVersionsStatusResultFormProperties>({
		});

	}

	export interface UpdateRepositoryResult {
		repository?: RepositoryDescription;
	}
	export interface UpdateRepositoryResultFormProperties {
	}
	export function CreateUpdateRepositoryResultFormGroup() {
		return new FormGroup<UpdateRepositoryResultFormProperties>({
		});

	}

	export interface AssociateExternalConnectionRequest {
	}
	export interface AssociateExternalConnectionRequestFormProperties {
	}
	export function CreateAssociateExternalConnectionRequestFormGroup() {
		return new FormGroup<AssociateExternalConnectionRequestFormProperties>({
		});

	}

	export interface PackageVersionRevisionMap {
	}
	export interface PackageVersionRevisionMapFormProperties {
	}
	export function CreatePackageVersionRevisionMapFormGroup() {
		return new FormGroup<PackageVersionRevisionMapFormProperties>({
		});

	}

	export interface CopyPackageVersionsRequest {
		versions?: Array<string>;
		versionRevisions?: PackageVersionRevisionMap;
		allowOverwrite?: boolean | null;
		includeFromUpstream?: boolean | null;
	}
	export interface CopyPackageVersionsRequestFormProperties {
		allowOverwrite: FormControl<boolean | null | undefined>,
		includeFromUpstream: FormControl<boolean | null | undefined>,
	}
	export function CreateCopyPackageVersionsRequestFormGroup() {
		return new FormGroup<CopyPackageVersionsRequestFormProperties>({
			allowOverwrite: new FormControl<boolean | null | undefined>(undefined),
			includeFromUpstream: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDomainRequest {
		encryptionKey?: string;
		tags?: Array<Tag>;
	}
	export interface CreateDomainRequestFormProperties {
		encryptionKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainRequestFormGroup() {
		return new FormGroup<CreateDomainRequestFormProperties>({
			encryptionKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRepositoryRequest {
		description?: string;
		upstreams?: Array<UpstreamRepository>;
		tags?: Array<Tag>;
	}
	export interface CreateRepositoryRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateRepositoryRequestFormGroup() {
		return new FormGroup<CreateRepositoryRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDomainPermissionsPolicyRequest {
	}
	export interface DeleteDomainPermissionsPolicyRequestFormProperties {
	}
	export function CreateDeleteDomainPermissionsPolicyRequestFormGroup() {
		return new FormGroup<DeleteDomainPermissionsPolicyRequestFormProperties>({
		});

	}

	export interface DeleteDomainRequest {
	}
	export interface DeleteDomainRequestFormProperties {
	}
	export function CreateDeleteDomainRequestFormGroup() {
		return new FormGroup<DeleteDomainRequestFormProperties>({
		});

	}

	export interface DeletePackageRequest {
	}
	export interface DeletePackageRequestFormProperties {
	}
	export function CreateDeletePackageRequestFormGroup() {
		return new FormGroup<DeletePackageRequestFormProperties>({
		});

	}

	export interface DeletePackageVersionsRequest {

		/** Required */
		versions: Array<string>;
		expectedStatus?: PackageVersionStatus;
	}
	export interface DeletePackageVersionsRequestFormProperties {
		expectedStatus: FormControl<PackageVersionStatus | null | undefined>,
	}
	export function CreateDeletePackageVersionsRequestFormGroup() {
		return new FormGroup<DeletePackageVersionsRequestFormProperties>({
			expectedStatus: new FormControl<PackageVersionStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteRepositoryPermissionsPolicyRequest {
	}
	export interface DeleteRepositoryPermissionsPolicyRequestFormProperties {
	}
	export function CreateDeleteRepositoryPermissionsPolicyRequestFormGroup() {
		return new FormGroup<DeleteRepositoryPermissionsPolicyRequestFormProperties>({
		});

	}

	export interface DeleteRepositoryRequest {
	}
	export interface DeleteRepositoryRequestFormProperties {
	}
	export function CreateDeleteRepositoryRequestFormGroup() {
		return new FormGroup<DeleteRepositoryRequestFormProperties>({
		});

	}

	export interface DescribeDomainRequest {
	}
	export interface DescribeDomainRequestFormProperties {
	}
	export function CreateDescribeDomainRequestFormGroup() {
		return new FormGroup<DescribeDomainRequestFormProperties>({
		});

	}

	export interface DescribePackageRequest {
	}
	export interface DescribePackageRequestFormProperties {
	}
	export function CreateDescribePackageRequestFormGroup() {
		return new FormGroup<DescribePackageRequestFormProperties>({
		});

	}

	export interface DescribePackageVersionRequest {
	}
	export interface DescribePackageVersionRequestFormProperties {
	}
	export function CreateDescribePackageVersionRequestFormGroup() {
		return new FormGroup<DescribePackageVersionRequestFormProperties>({
		});

	}

	export interface DescribeRepositoryRequest {
	}
	export interface DescribeRepositoryRequestFormProperties {
	}
	export function CreateDescribeRepositoryRequestFormGroup() {
		return new FormGroup<DescribeRepositoryRequestFormProperties>({
		});

	}

	export interface DisassociateExternalConnectionRequest {
	}
	export interface DisassociateExternalConnectionRequestFormProperties {
	}
	export function CreateDisassociateExternalConnectionRequestFormGroup() {
		return new FormGroup<DisassociateExternalConnectionRequestFormProperties>({
		});

	}

	export interface DisposePackageVersionsRequest {

		/** Required */
		versions: Array<string>;
		versionRevisions?: PackageVersionRevisionMap;
		expectedStatus?: PackageVersionStatus;
	}
	export interface DisposePackageVersionsRequestFormProperties {
		expectedStatus: FormControl<PackageVersionStatus | null | undefined>,
	}
	export function CreateDisposePackageVersionsRequestFormGroup() {
		return new FormGroup<DisposePackageVersionsRequestFormProperties>({
			expectedStatus: new FormControl<PackageVersionStatus | null | undefined>(undefined),
		});

	}

	export interface GetAuthorizationTokenRequest {
	}
	export interface GetAuthorizationTokenRequestFormProperties {
	}
	export function CreateGetAuthorizationTokenRequestFormGroup() {
		return new FormGroup<GetAuthorizationTokenRequestFormProperties>({
		});

	}

	export interface GetDomainPermissionsPolicyRequest {
	}
	export interface GetDomainPermissionsPolicyRequestFormProperties {
	}
	export function CreateGetDomainPermissionsPolicyRequestFormGroup() {
		return new FormGroup<GetDomainPermissionsPolicyRequestFormProperties>({
		});

	}

	export interface GetPackageVersionAssetRequest {
	}
	export interface GetPackageVersionAssetRequestFormProperties {
	}
	export function CreateGetPackageVersionAssetRequestFormGroup() {
		return new FormGroup<GetPackageVersionAssetRequestFormProperties>({
		});

	}

	export interface GetPackageVersionReadmeRequest {
	}
	export interface GetPackageVersionReadmeRequestFormProperties {
	}
	export function CreateGetPackageVersionReadmeRequestFormGroup() {
		return new FormGroup<GetPackageVersionReadmeRequestFormProperties>({
		});

	}

	export interface GetRepositoryEndpointRequest {
	}
	export interface GetRepositoryEndpointRequestFormProperties {
	}
	export function CreateGetRepositoryEndpointRequestFormGroup() {
		return new FormGroup<GetRepositoryEndpointRequestFormProperties>({
		});

	}

	export interface GetRepositoryPermissionsPolicyRequest {
	}
	export interface GetRepositoryPermissionsPolicyRequestFormProperties {
	}
	export function CreateGetRepositoryPermissionsPolicyRequestFormGroup() {
		return new FormGroup<GetRepositoryPermissionsPolicyRequestFormProperties>({
		});

	}

	export enum HashAlgorithm { MD5 = 0, 'SHA-1' = 1, 'SHA-256' = 2, 'SHA-512' = 3 }

	export interface ListDomainsRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListDomainsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsRequestFormGroup() {
		return new FormGroup<ListDomainsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPackageVersionAssetsRequest {
	}
	export interface ListPackageVersionAssetsRequestFormProperties {
	}
	export function CreateListPackageVersionAssetsRequestFormGroup() {
		return new FormGroup<ListPackageVersionAssetsRequestFormProperties>({
		});

	}

	export interface ListPackageVersionDependenciesRequest {
	}
	export interface ListPackageVersionDependenciesRequestFormProperties {
	}
	export function CreateListPackageVersionDependenciesRequestFormGroup() {
		return new FormGroup<ListPackageVersionDependenciesRequestFormProperties>({
		});

	}

	export enum PackageVersionSortType { PUBLISHED_TIME = 0 }

	export interface ListPackageVersionsRequest {
	}
	export interface ListPackageVersionsRequestFormProperties {
	}
	export function CreateListPackageVersionsRequestFormGroup() {
		return new FormGroup<ListPackageVersionsRequestFormProperties>({
		});

	}

	export interface ListPackagesRequest {
	}
	export interface ListPackagesRequestFormProperties {
	}
	export function CreateListPackagesRequestFormGroup() {
		return new FormGroup<ListPackagesRequestFormProperties>({
		});

	}

	export interface ListRepositoriesInDomainRequest {
	}
	export interface ListRepositoriesInDomainRequestFormProperties {
	}
	export function CreateListRepositoriesInDomainRequestFormGroup() {
		return new FormGroup<ListRepositoriesInDomainRequestFormProperties>({
		});

	}

	export interface ListRepositoriesRequest {
	}
	export interface ListRepositoriesRequestFormProperties {
	}
	export function CreateListRepositoriesRequestFormGroup() {
		return new FormGroup<ListRepositoriesRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export enum PackageVersionErrorCode { ALREADY_EXISTS = 0, MISMATCHED_REVISION = 1, MISMATCHED_STATUS = 2, NOT_ALLOWED = 3, NOT_FOUND = 4, SKIPPED = 5 }


	/** l An error associated with package.  */
	export interface PackageVersionError {
		errorCode?: PackageVersionErrorCode;
		errorMessage?: string;
	}

	/** l An error associated with package.  */
	export interface PackageVersionErrorFormProperties {
		errorCode: FormControl<PackageVersionErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreatePackageVersionErrorFormGroup() {
		return new FormGroup<PackageVersionErrorFormProperties>({
			errorCode: new FormControl<PackageVersionErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublishPackageVersionRequest {

		/** Required */
		assetContent: string;
	}
	export interface PublishPackageVersionRequestFormProperties {

		/** Required */
		assetContent: FormControl<string | null | undefined>,
	}
	export function CreatePublishPackageVersionRequestFormGroup() {
		return new FormGroup<PublishPackageVersionRequestFormProperties>({
			assetContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutDomainPermissionsPolicyRequest {

		/** Required */
		domain: string;
		domainOwner?: string;
		policyRevision?: string;

		/** Required */
		policyDocument: string;
	}
	export interface PutDomainPermissionsPolicyRequestFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
		domainOwner: FormControl<string | null | undefined>,
		policyRevision: FormControl<string | null | undefined>,

		/** Required */
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreatePutDomainPermissionsPolicyRequestFormGroup() {
		return new FormGroup<PutDomainPermissionsPolicyRequestFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainOwner: new FormControl<string | null | undefined>(undefined),
			policyRevision: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutPackageOriginConfigurationRequest {

		/** Required */
		restrictions: PackageOriginRestrictions;
	}
	export interface PutPackageOriginConfigurationRequestFormProperties {
	}
	export function CreatePutPackageOriginConfigurationRequestFormGroup() {
		return new FormGroup<PutPackageOriginConfigurationRequestFormProperties>({
		});

	}

	export interface PutRepositoryPermissionsPolicyRequest {
		policyRevision?: string;

		/** Required */
		policyDocument: string;
	}
	export interface PutRepositoryPermissionsPolicyRequestFormProperties {
		policyRevision: FormControl<string | null | undefined>,

		/** Required */
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreatePutRepositoryPermissionsPolicyRequestFormGroup() {
		return new FormGroup<PutRepositoryPermissionsPolicyRequestFormProperties>({
			policyRevision: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Contains the revision and status of a package version.  */
	export interface SuccessfulPackageVersionInfo {
		revision?: string;
		status?: PackageVersionStatus;
	}

	/**  Contains the revision and status of a package version.  */
	export interface SuccessfulPackageVersionInfoFormProperties {
		revision: FormControl<string | null | undefined>,
		status: FormControl<PackageVersionStatus | null | undefined>,
	}
	export function CreateSuccessfulPackageVersionInfoFormGroup() {
		return new FormGroup<SuccessfulPackageVersionInfoFormProperties>({
			revision: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PackageVersionStatus | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdatePackageVersionsStatusRequest {

		/** Required */
		versions: Array<string>;
		versionRevisions?: PackageVersionRevisionMap;
		expectedStatus?: PackageVersionStatus;

		/** Required */
		targetStatus: PackageVersionStatus;
	}
	export interface UpdatePackageVersionsStatusRequestFormProperties {
		expectedStatus: FormControl<PackageVersionStatus | null | undefined>,

		/** Required */
		targetStatus: FormControl<PackageVersionStatus | null | undefined>,
	}
	export function CreateUpdatePackageVersionsStatusRequestFormGroup() {
		return new FormGroup<UpdatePackageVersionsStatusRequestFormProperties>({
			expectedStatus: new FormControl<PackageVersionStatus | null | undefined>(undefined),
			targetStatus: new FormControl<PackageVersionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRepositoryRequest {
		description?: string;
		upstreams?: Array<UpstreamRepository>;
	}
	export interface UpdateRepositoryRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRepositoryRequestFormGroup() {
		return new FormGroup<UpdateRepositoryRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds an existing external connection to a repository. One external connection is allowed per repository.</p> <note> <p>A repository can have one or more upstream repositories, or an external connection.</p> </note>
		 * Post v1/repository/external-connection#domain&repository&external-connection
		 * @param {string} domain The name of the domain that contains the repository.
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository to which the external connection is added. 
		 * @param {string} external_connection <p> The name of the external connection to add to the repository. The following values are supported: </p> <ul> <li> <p> <code>public:npmjs</code> - for the npm public repository. </p> </li> <li> <p> <code>public:nuget-org</code> - for the NuGet Gallery. </p> </li> <li> <p> <code>public:pypi</code> - for the Python Package Index. </p> </li> <li> <p> <code>public:maven-central</code> - for Maven Central. </p> </li> <li> <p> <code>public:maven-googleandroid</code> - for the Google Android repository. </p> </li> <li> <p> <code>public:maven-gradleplugins</code> - for the Gradle plugins repository. </p> </li> <li> <p> <code>public:maven-commonsware</code> - for the CommonsWare Android repository. </p> </li> <li> <p> <code>public:maven-clojars</code> - for the Clojars repository. </p> </li> </ul>
		 * @return {AssociateExternalConnectionResult} Success
		 */
		AssociateExternalConnection(domain: string, domain_owner: string | null | undefined, repository: string, external_connection: string): Observable<AssociateExternalConnectionResult> {
			return this.http.post<AssociateExternalConnectionResult>(this.baseUri + 'v1/repository/external-connection#domain&repository&external-connection?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&external_connection=' + (external_connection == null ? '' : encodeURIComponent(external_connection)), null, {});
		}

		/**
		 * Removes an existing external connection from a repository.
		 * Delete v1/repository/external-connection#domain&repository&external-connection
		 * @param {string} domain The name of the domain that contains the repository from which to remove the external repository. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository The name of the repository from which the external connection will be removed. 
		 * @param {string} external_connection The name of the external connection to be removed from the repository. 
		 * @return {DisassociateExternalConnectionResult} Success
		 */
		DisassociateExternalConnection(domain: string, domain_owner: string | null | undefined, repository: string, external_connection: string): Observable<DisassociateExternalConnectionResult> {
			return this.http.delete<DisassociateExternalConnectionResult>(this.baseUri + 'v1/repository/external-connection#domain&repository&external-connection?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&external_connection=' + (external_connection == null ? '' : encodeURIComponent(external_connection)), {});
		}

		/**
		 * <p> Copies package versions from one repository to another repository in the same domain. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>
		 * Post v1/package/versions/copy#domain&source-repository&destination-repository&format&package
		 * @param {string} domain  The name of the domain that contains the source and destination repositories. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} source_repository  The name of the repository that contains the package versions to be copied. 
		 * @param {string} destination_repository  The name of the repository into which package versions are copied. 
		 * @param {PackageFormat} format  The format of the package versions to be copied. 
		 * @param {string} namespace <p>The namespace of the package versions to be copied. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. The namespace is required when copying Maven package versions. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>
		 * @param {string} _package  The name of the package that contains the versions to be copied. 
		 * @return {CopyPackageVersionsResult} Success
		 */
		CopyPackageVersions(domain: string, domain_owner: string | null | undefined, source_repository: string, destination_repository: string, format: PackageFormat, namespace: string | null | undefined, _package: string, requestBody: CopyPackageVersionsPostBody): Observable<CopyPackageVersionsResult> {
			return this.http.post<CopyPackageVersionsResult>(this.baseUri + 'v1/package/versions/copy#domain&source-repository&destination-repository&format&package?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&source_repository=' + (source_repository == null ? '' : encodeURIComponent(source_repository)) + '&destination_repository=' + (destination_repository == null ? '' : encodeURIComponent(destination_repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&_package=' + (_package == null ? '' : encodeURIComponent(_package)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Creates a domain. CodeArtifact <i>domains</i> make it easier to manage multiple repositories across an organization. You can use a domain to apply permissions across many repositories owned by different Amazon Web Services accounts. An asset is stored only once in a domain, even if it's in multiple repositories. </p> <p>Although you can have multiple domains, we recommend a single production domain that contains all published artifacts so that your development teams can find and share packages. You can use a second pre-production domain to test changes to the production domain configuration. </p>
		 * Post v1/domain#domain
		 * @param {string} domain  The name of the domain to create. All domain names in an Amazon Web Services Region that are in the same Amazon Web Services account must be unique. The domain name is used as the prefix in DNS hostnames. Do not use sensitive information in a domain name because it is publicly discoverable. 
		 * @return {CreateDomainResult} Success
		 */
		CreateDomain(domain: string, requestBody: CreateDomainPostBody): Observable<CreateDomainResult> {
			return this.http.post<CreateDomainResult>(this.baseUri + 'v1/domain#domain?domain=' + (domain == null ? '' : encodeURIComponent(domain)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a domain. You cannot delete a domain that contains repositories. If you want to delete a domain with repositories, first delete its repositories.
		 * Delete v1/domain#domain
		 * @param {string} domain  The name of the domain to delete. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @return {DeleteDomainResult} Success
		 */
		DeleteDomain(domain: string, domain_owner: string | null | undefined): Observable<DeleteDomainResult> {
			return this.http.delete<DeleteDomainResult>(this.baseUri + 'v1/domain#domain?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)), {});
		}

		/**
		 * Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainDescription.html">DomainDescription</a> object that contains information about the requested domain.
		 * Get v1/domain#domain
		 * @param {string} domain  A string that specifies the name of the requested domain. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @return {DescribeDomainResult} Success
		 */
		DescribeDomain(domain: string, domain_owner: string | null | undefined): Observable<DescribeDomainResult> {
			return this.http.get<DescribeDomainResult>(this.baseUri + 'v1/domain#domain?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)), {});
		}

		/**
		 * Creates a repository.
		 * Post v1/repository#domain&repository
		 * @param {string} domain  The name of the domain that contains the created repository. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository to create. 
		 * @return {CreateRepositoryResult} Success
		 */
		CreateRepository(domain: string, domain_owner: string | null | undefined, repository: string, requestBody: CreateRepositoryPostBody): Observable<CreateRepositoryResult> {
			return this.http.post<CreateRepositoryResult>(this.baseUri + 'v1/repository#domain&repository?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a repository.
		 * Delete v1/repository#domain&repository
		 * @param {string} domain  The name of the domain that contains the repository to delete. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository to delete. 
		 * @return {DeleteRepositoryResult} Success
		 */
		DeleteRepository(domain: string, domain_owner: string | null | undefined, repository: string): Observable<DeleteRepositoryResult> {
			return this.http.delete<DeleteRepositoryResult>(this.baseUri + 'v1/repository#domain&repository?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)), {});
		}

		/**
		 * Returns a <code>RepositoryDescription</code> object that contains detailed information about the requested repository.
		 * Get v1/repository#domain&repository
		 * @param {string} domain  The name of the domain that contains the repository to describe. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  A string that specifies the name of the requested repository. 
		 * @return {DescribeRepositoryResult} Success
		 */
		DescribeRepository(domain: string, domain_owner: string | null | undefined, repository: string): Observable<DescribeRepositoryResult> {
			return this.http.get<DescribeRepositoryResult>(this.baseUri + 'v1/repository#domain&repository?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)), {});
		}

		/**
		 * Update the properties of a repository.
		 * Put v1/repository#domain&repository
		 * @param {string} domain  The name of the domain associated with the repository to update. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository to update. 
		 * @return {UpdateRepositoryResult} Success
		 */
		UpdateRepository(domain: string, domain_owner: string | null | undefined, repository: string, requestBody: UpdateRepositoryPutBody): Observable<UpdateRepositoryResult> {
			return this.http.put<UpdateRepositoryResult>(this.baseUri + 'v1/repository#domain&repository?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the resource policy set on a domain.
		 * Delete v1/domain/permissions/policy#domain
		 * @param {string} domain  The name of the domain associated with the resource policy to be deleted. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} policy_revision  The current revision of the resource policy to be deleted. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy. 
		 * @return {DeleteDomainPermissionsPolicyResult} Success
		 */
		DeleteDomainPermissionsPolicy(domain: string, domain_owner: string | null | undefined, policy_revision: string | null | undefined): Observable<DeleteDomainPermissionsPolicyResult> {
			return this.http.delete<DeleteDomainPermissionsPolicyResult>(this.baseUri + 'v1/domain/permissions/policy#domain?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&policy_revision=' + (policy_revision == null ? '' : encodeURIComponent(policy_revision)), {});
		}

		/**
		 * <p> Returns the resource policy attached to the specified domain. </p> <note> <p> The policy is a resource-based policy, not an identity-based policy. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies and resource-based policies </a> in the <i>IAM User Guide</i>. </p> </note>
		 * Get v1/domain/permissions/policy#domain
		 * @param {string} domain  The name of the domain to which the resource policy is attached. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @return {GetDomainPermissionsPolicyResult} Success
		 */
		GetDomainPermissionsPolicy(domain: string, domain_owner: string | null | undefined): Observable<GetDomainPermissionsPolicyResult> {
			return this.http.get<GetDomainPermissionsPolicyResult>(this.baseUri + 'v1/domain/permissions/policy#domain?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)), {});
		}

		/**
		 * Deletes a package and all associated package versions. A deleted package cannot be restored. To delete one or more package versions, use the <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeletePackageVersions.html">DeletePackageVersions</a> API.
		 * Delete v1/package#domain&repository&format&package
		 * @param {string} domain The name of the domain that contains the package to delete.
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository The name of the repository that contains the package to delete.
		 * @param {PackageFormat} format The format of the requested package to delete.
		 * @param {string} namespace <p>The namespace of the package to delete. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. The namespace is required when deleting Maven package versions. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>.</p> </li> <li> <p> Python and NuGet packages do not contain corresponding components, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>
		 * @param {string} _package The name of the package to delete.
		 * @return {DeletePackageResult} Success
		 */
		DeletePackage(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat, namespace: string | null | undefined, _package: string): Observable<DeletePackageResult> {
			return this.http.delete<DeletePackageResult>(this.baseUri + 'v1/package#domain&repository&format&package?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&_package=' + (_package == null ? '' : encodeURIComponent(_package)), {});
		}

		/**
		 * Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDescription.html">PackageDescription</a> object that contains information about the requested package.
		 * Get v1/package#domain&repository&format&package
		 * @param {string} domain The name of the domain that contains the repository that contains the package.
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository The name of the repository that contains the requested package. 
		 * @param {PackageFormat} format A format that specifies the type of the requested package.
		 * @param {string} namespace <p>The namespace of the requested package. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. The namespace is required when requesting Maven packages. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>
		 * @param {string} _package The name of the requested package.
		 * @return {DescribePackageResult} Success
		 */
		DescribePackage(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat, namespace: string | null | undefined, _package: string): Observable<DescribePackageResult> {
			return this.http.get<DescribePackageResult>(this.baseUri + 'v1/package#domain&repository&format&package?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&_package=' + (_package == null ? '' : encodeURIComponent(_package)), {});
		}

		/**
		 * <p>Sets the package origin configuration for a package.</p> <p>The package origin configuration determines how new versions of a package can be added to a repository. You can allow or block direct publishing of new package versions, or ingestion and retaining of new package versions from an external connection or upstream source. For more information about package origin controls and configuration, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/package-origin-controls.html">Editing package origin controls</a> in the <i>CodeArtifact User Guide</i>.</p> <p> <code>PutPackageOriginConfiguration</code> can be called on a package that doesn't yet exist in the repository. When called on a package that does not exist, a package is created in the repository with no versions and the requested restrictions are set on the package. This can be used to preemptively block ingesting or retaining any versions from external connections or upstream repositories, or to block publishing any versions of the package into the repository before connecting any package managers or publishers to the repository.</p>
		 * Post v1/package#domain&repository&format&package
		 * @param {string} domain The name of the domain that contains the repository that contains the package.
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository The name of the repository that contains the package.
		 * @param {PackageFormat} format A format that specifies the type of the package to be updated.
		 * @param {string} namespace <p>The namespace of the package to be updated. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>
		 * @param {string} _package The name of the package to be updated.
		 * @return {PutPackageOriginConfigurationResult} Success
		 */
		PutPackageOriginConfiguration(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat, namespace: string | null | undefined, _package: string, requestBody: PutPackageOriginConfigurationPostBody): Observable<PutPackageOriginConfigurationResult> {
			return this.http.post<PutPackageOriginConfigurationResult>(this.baseUri + 'v1/package#domain&repository&format&package?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&_package=' + (_package == null ? '' : encodeURIComponent(_package)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes one or more versions of a package. A deleted package version cannot be restored in your repository. If you want to remove a package version from your repository and be able to restore it later, set its status to <code>Archived</code>. Archived packages cannot be downloaded from a repository and don't show up with list package APIs (for example, <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a>), but you can restore them using <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html">UpdatePackageVersionsStatus</a>.
		 * Post v1/package/versions/delete#domain&repository&format&package
		 * @param {string} domain  The name of the domain that contains the package to delete. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository that contains the package versions to delete. 
		 * @param {PackageFormat} format  The format of the package versions to delete. 
		 * @param {string} namespace <p>The namespace of the package versions to be deleted. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. The namespace is required when deleting Maven package versions. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>
		 * @param {string} _package  The name of the package with the versions to delete. 
		 * @return {DeletePackageVersionsResult} Success
		 */
		DeletePackageVersions(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat, namespace: string | null | undefined, _package: string, requestBody: DeletePackageVersionsPostBody): Observable<DeletePackageVersionsResult> {
			return this.http.post<DeletePackageVersionsResult>(this.baseUri + 'v1/package/versions/delete#domain&repository&format&package?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&_package=' + (_package == null ? '' : encodeURIComponent(_package)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Deletes the resource policy that is set on a repository. After a resource policy is deleted, the permissions allowed and denied by the deleted policy are removed. The effect of deleting a resource policy might not be immediate. </p> <important> <p> Use <code>DeleteRepositoryPermissionsPolicy</code> with caution. After a policy is deleted, Amazon Web Services users, roles, and accounts lose permissions to perform the repository actions granted by the deleted policy. </p> </important>
		 * Delete v1/repository/permissions/policies#domain&repository
		 * @param {string} domain  The name of the domain that contains the repository associated with the resource policy to be deleted. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository that is associated with the resource policy to be deleted 
		 * @param {string} policy_revision  The revision of the repository's resource policy to be deleted. This revision is used for optimistic locking, which prevents others from accidentally overwriting your changes to the repository's resource policy. 
		 * @return {DeleteRepositoryPermissionsPolicyResult} Success
		 */
		DeleteRepositoryPermissionsPolicy(domain: string, domain_owner: string | null | undefined, repository: string, policy_revision: string | null | undefined): Observable<DeleteRepositoryPermissionsPolicyResult> {
			return this.http.delete<DeleteRepositoryPermissionsPolicyResult>(this.baseUri + 'v1/repository/permissions/policies#domain&repository?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&policy_revision=' + (policy_revision == null ? '' : encodeURIComponent(policy_revision)), {});
		}

		/**
		 * Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a> object that contains information about the requested package version.
		 * Get v1/package/version#domain&repository&format&package&version
		 * @param {string} domain  The name of the domain that contains the repository that contains the package version. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository that contains the package version. 
		 * @param {PackageFormat} format  A format that specifies the type of the requested package version. 
		 * @param {string} namespace <p>The namespace of the requested package version. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>
		 * @param {string} _package  The name of the requested package version. 
		 * @param {string} version  A string that contains the package version (for example, <code>3.5.2</code>). 
		 * @return {DescribePackageVersionResult} Success
		 */
		DescribePackageVersion(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat, namespace: string | null | undefined, _package: string, version: string): Observable<DescribePackageVersionResult> {
			return this.http.get<DescribePackageVersionResult>(this.baseUri + 'v1/package/version#domain&repository&format&package&version?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&_package=' + (_package == null ? '' : encodeURIComponent(_package)) + '&version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * <p> Deletes the assets in package versions and sets the package versions' status to <code>Disposed</code>. A disposed package version cannot be restored in your repository because its assets are deleted. </p> <p> To view all disposed package versions in a repository, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a> and set the <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html#API_ListPackageVersions_RequestSyntax">status</a> parameter to <code>Disposed</code>. </p> <p> To view information about a disposed package version, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackageVersion.html">DescribePackageVersion</a>. </p>
		 * Post v1/package/versions/dispose#domain&repository&format&package
		 * @param {string} domain  The name of the domain that contains the repository you want to dispose. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository that contains the package versions you want to dispose. 
		 * @param {PackageFormat} format  A format that specifies the type of package versions you want to dispose. 
		 * @param {string} namespace <p>The namespace of the package versions to be disposed. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>
		 * @param {string} _package  The name of the package with the versions you want to dispose. 
		 * @return {DisposePackageVersionsResult} Success
		 */
		DisposePackageVersions(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat, namespace: string | null | undefined, _package: string, requestBody: DisposePackageVersionsPostBody): Observable<DisposePackageVersionsResult> {
			return this.http.post<DisposePackageVersionsResult>(this.baseUri + 'v1/package/versions/dispose#domain&repository&format&package?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&_package=' + (_package == null ? '' : encodeURIComponent(_package)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Generates a temporary authorization token for accessing repositories in the domain. This API requires the <code>codeartifact:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions. For more information about authorization tokens, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html">CodeArtifact authentication and tokens</a>. </p> <note> <p>CodeArtifact authorization tokens are valid for a period of 12 hours when created with the <code>login</code> command. You can call <code>login</code> periodically to refresh the token. When you create an authorization token with the <code>GetAuthorizationToken</code> API, you can set a custom authorization period, up to a maximum of 12 hours, with the <code>durationSeconds</code> parameter.</p> <p>The authorization period begins after <code>login</code> or <code>GetAuthorizationToken</code> is called. If <code>login</code> or <code>GetAuthorizationToken</code> is called while assuming a role, the token lifetime is independent of the maximum session duration of the role. For example, if you call <code>sts assume-role</code> and specify a session duration of 15 minutes, then generate a CodeArtifact authorization token, the token will be valid for the full authorization period even though this is longer than the 15-minute session duration.</p> <p>See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> for more information on controlling session duration. </p> </note>
		 * Post v1/authorization-token#domain
		 * @param {string} domain  The name of the domain that is in scope for the generated authorization token. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {number} duration The time, in seconds, that the generated authorization token is valid. Valid values are <code>0</code> and any number between <code>900</code> (15 minutes) and <code>43200</code> (12 hours). A value of <code>0</code> will set the expiration of the authorization token to the same expiration of the user's role's temporary credentials.
		 * @return {GetAuthorizationTokenResult} Success
		 */
		GetAuthorizationToken(domain: string, domain_owner: string | null | undefined, duration: number | null | undefined): Observable<GetAuthorizationTokenResult> {
			return this.http.post<GetAuthorizationTokenResult>(this.baseUri + 'v1/authorization-token#domain?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&duration=' + duration, null, {});
		}

		/**
		 * Returns an asset (or file) that is in a package. For example, for a Maven package version, use <code>GetPackageVersionAsset</code> to download a <code>JAR</code> file, a <code>POM</code> file, or any other assets in the package version.
		 * Get v1/package/version/asset#domain&repository&format&package&version&asset
		 * @param {string} domain  The name of the domain that contains the repository that contains the package version with the requested asset. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The repository that contains the package version with the requested asset. 
		 * @param {PackageFormat} format  A format that specifies the type of the package version with the requested asset file. 
		 * @param {string} namespace <p>The namespace of the package version with the requested asset file. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>
		 * @param {string} _package  The name of the package that contains the requested asset. 
		 * @param {string} version  A string that contains the package version (for example, <code>3.5.2</code>). 
		 * @param {string} asset  The name of the requested asset. 
		 * @param {string} revision  The name of the package version revision that contains the requested asset. 
		 * @return {GetPackageVersionAssetResult} Success
		 */
		GetPackageVersionAsset(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat, namespace: string | null | undefined, _package: string, version: string, asset: string, revision: string | null | undefined): Observable<GetPackageVersionAssetResult> {
			return this.http.get<GetPackageVersionAssetResult>(this.baseUri + 'v1/package/version/asset#domain&repository&format&package&version&asset?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&_package=' + (_package == null ? '' : encodeURIComponent(_package)) + '&version=' + (version == null ? '' : encodeURIComponent(version)) + '&asset=' + (asset == null ? '' : encodeURIComponent(asset)) + '&revision=' + (revision == null ? '' : encodeURIComponent(revision)), {});
		}

		/**
		 * <p> Gets the readme file or descriptive text for a package version. </p> <p> The returned text might contain formatting. For example, it might contain formatting for Markdown or reStructuredText. </p>
		 * Get v1/package/version/readme#domain&repository&format&package&version
		 * @param {string} domain  The name of the domain that contains the repository that contains the package version with the requested readme file. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The repository that contains the package with the requested readme file. 
		 * @param {PackageFormat} format  A format that specifies the type of the package version with the requested readme file. 
		 * @param {string} namespace <p>The namespace of the package version with the requested readme file. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> </ul>
		 * @param {string} _package  The name of the package version that contains the requested readme file. 
		 * @param {string} version  A string that contains the package version (for example, <code>3.5.2</code>). 
		 * @return {GetPackageVersionReadmeResult} Success
		 */
		GetPackageVersionReadme(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat, namespace: string | null | undefined, _package: string, version: string): Observable<GetPackageVersionReadmeResult> {
			return this.http.get<GetPackageVersionReadmeResult>(this.baseUri + 'v1/package/version/readme#domain&repository&format&package&version?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&_package=' + (_package == null ? '' : encodeURIComponent(_package)) + '&version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * <p> Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each package format: </p> <ul> <li> <p> <code>maven</code> </p> </li> <li> <p> <code>npm</code> </p> </li> <li> <p> <code>nuget</code> </p> </li> <li> <p> <code>pypi</code> </p> </li> </ul>
		 * Get v1/repository/endpoint#domain&repository&format
		 * @param {string} domain  The name of the domain that contains the repository. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain that contains the repository. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository. 
		 * @param {PackageFormat} format  Returns which endpoint of a repository to return. A repository has one endpoint for each package format. 
		 * @return {GetRepositoryEndpointResult} Success
		 */
		GetRepositoryEndpoint(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat): Observable<GetRepositoryEndpointResult> {
			return this.http.get<GetRepositoryEndpointResult>(this.baseUri + 'v1/repository/endpoint#domain&repository&format?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format, {});
		}

		/**
		 * Returns the resource policy that is set on a repository.
		 * Get v1/repository/permissions/policy#domain&repository
		 * @param {string} domain  The name of the domain containing the repository whose associated resource policy is to be retrieved. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository whose associated resource policy is to be retrieved. 
		 * @return {GetRepositoryPermissionsPolicyResult} Success
		 */
		GetRepositoryPermissionsPolicy(domain: string, domain_owner: string | null | undefined, repository: string): Observable<GetRepositoryPermissionsPolicyResult> {
			return this.http.get<GetRepositoryPermissionsPolicyResult>(this.baseUri + 'v1/repository/permissions/policy#domain&repository?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)), {});
		}

		/**
		 * <p> Sets the resource policy on a repository that specifies permissions to access it. </p> <p> When you call <code>PutRepositoryPermissionsPolicy</code>, the resource policy on the repository is ignored when evaluting permissions. This ensures that the owner of a repository cannot lock themselves out of the repository, which would prevent them from being able to update the resource policy. </p>
		 * Put v1/repository/permissions/policy#domain&repository
		 * @param {string} domain  The name of the domain containing the repository to set the resource policy on. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository to set the resource policy on. 
		 * @return {PutRepositoryPermissionsPolicyResult} Success
		 */
		PutRepositoryPermissionsPolicy(domain: string, domain_owner: string | null | undefined, repository: string, requestBody: PutRepositoryPermissionsPolicyPutBody): Observable<PutRepositoryPermissionsPolicyResult> {
			return this.http.put<PutRepositoryPermissionsPolicyResult>(this.baseUri + 'v1/repository/permissions/policy#domain&repository?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">DomainSummary</a> objects for all domains owned by the Amazon Web Services account that makes this call. Each returned <code>DomainSummary</code> object contains information about a domain.
		 * Post v1/domains
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDomainsResult} Success
		 */
		ListDomains(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDomainsPostBody): Observable<ListDomainsResult> {
			return this.http.post<ListDomainsResult>(this.baseUri + 'v1/domains?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">AssetSummary</a> objects for assets in a package version.
		 * Post v1/package/version/assets#domain&repository&format&package&version
		 * @param {string} domain  The name of the domain that contains the repository associated with the package version assets. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository that contains the package that contains the requested package version assets. 
		 * @param {PackageFormat} format  The format of the package that contains the requested package version assets. 
		 * @param {string} namespace <p>The namespace of the package version that contains the requested package version assets. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>
		 * @param {string} _package  The name of the package that contains the requested package version assets. 
		 * @param {string} version  A string that contains the package version (for example, <code>3.5.2</code>). 
		 * @param {number} max_results  The maximum number of results to return per page. 
		 * @param {string} next_token  The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPackageVersionAssetsResult} Success
		 */
		ListPackageVersionAssets(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat, namespace: string | null | undefined, _package: string, version: string, max_results: number | null | undefined, next_token: string | null | undefined, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<ListPackageVersionAssetsResult> {
			return this.http.post<ListPackageVersionAssetsResult>(this.baseUri + 'v1/package/version/assets#domain&repository&format&package&version?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&_package=' + (_package == null ? '' : encodeURIComponent(_package)) + '&version=' + (version == null ? '' : encodeURIComponent(version)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), null, {});
		}

		/**
		 * Returns the direct dependencies for a package version. The dependencies are returned as <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html">PackageDependency</a> objects. CodeArtifact extracts the dependencies for a package version from the metadata file for the package format (for example, the <code>package.json</code> file for npm packages and the <code>pom.xml</code> file for Maven). Any package version dependencies that are not listed in the configuration file are not returned.
		 * Post v1/package/version/dependencies#domain&repository&format&package&version
		 * @param {string} domain  The name of the domain that contains the repository that contains the requested package version dependencies. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository that contains the requested package version. 
		 * @param {PackageFormat} format  The format of the package with the requested dependencies. 
		 * @param {string} namespace <p>The namespace of the package version with the requested dependencies. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>
		 * @param {string} _package  The name of the package versions' package. 
		 * @param {string} version  A string that contains the package version (for example, <code>3.5.2</code>). 
		 * @param {string} next_token  The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
		 * @return {ListPackageVersionDependenciesResult} Success
		 */
		ListPackageVersionDependencies(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat, namespace: string | null | undefined, _package: string, version: string, next_token: string | null | undefined): Observable<ListPackageVersionDependenciesResult> {
			return this.http.post<ListPackageVersionDependenciesResult>(this.baseUri + 'v1/package/version/dependencies#domain&repository&format&package&version?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&_package=' + (_package == null ? '' : encodeURIComponent(_package)) + '&version=' + (version == null ? '' : encodeURIComponent(version)) + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)), null, {});
		}

		/**
		 * Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html">PackageVersionSummary</a> objects for package versions in a repository that match the request parameters. Package versions of all statuses will be returned by default when calling <code>list-package-versions</code> with no <code>--status</code> parameter.
		 * Post v1/package/versions#domain&repository&format&package
		 * @param {string} domain  The name of the domain that contains the repository that contains the requested package versions. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository that contains the requested package versions. 
		 * @param {PackageFormat} format  The format of the package versions you want to list. 
		 * @param {string} namespace <p>The namespace of the package that contains the requested package versions. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>
		 * @param {string} _package  The name of the package for which you want to request package versions. 
		 * @param {PackageVersionStatus} status  A string that filters the requested package versions by status. 
		 * @param {PackageVersionSortType} sortBy  How to sort the requested list of package versions. 
		 * @param {number} max_results  The maximum number of results to return per page. 
		 * @param {string} next_token  The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
		 * @param {PackageVersionOriginType} originType The <code>originType</code> used to filter package versions. Only package versions with the provided <code>originType</code> will be returned.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPackageVersionsResult} Success
		 */
		ListPackageVersions(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat, namespace: string | null | undefined, _package: string, status: PackageVersionStatus | null | undefined, sortBy: PackageVersionSortType | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, originType: PackageVersionOriginType | null | undefined, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<ListPackageVersionsResult> {
			return this.http.post<ListPackageVersionsResult>(this.baseUri + 'v1/package/versions#domain&repository&format&package?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&_package=' + (_package == null ? '' : encodeURIComponent(_package)) + '&status=' + status + '&sortBy=' + sortBy + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&originType=' + originType + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), null, {});
		}

		/**
		 * Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html">PackageSummary</a> objects for packages in a repository that match the request parameters.
		 * Post v1/packages#domain&repository
		 * @param {string} domain  The name of the domain that contains the repository that contains the requested packages. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The name of the repository that contains the requested packages. 
		 * @param {PackageFormat} format The format used to filter requested packages. Only packages from the provided format will be returned.
		 * @param {string} namespace <p>The namespace prefix used to filter requested packages. Only packages with a namespace that starts with the provided string value are returned. Note that although this option is called <code>--namespace</code> and not <code>--namespace-prefix</code>, it has prefix-matching behavior.</p> <p>Each package format uses namespace as follows:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>
		 * @param {string} package_prefix  A prefix used to filter requested packages. Only packages with names that start with <code>packagePrefix</code> are returned. 
		 * @param {number} max_results  The maximum number of results to return per page. 
		 * @param {string} next_token  The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
		 * @param {AllowPublish} publish The value of the <code>Publish</code> package origin control restriction used to filter requested packages. Only packages with the provided restriction are returned. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a>.
		 * @param {AllowPublish} upstream The value of the <code>Upstream</code> package origin control restriction used to filter requested packages. Only packages with the provided restriction are returned. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a>.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPackagesResult} Success
		 */
		ListPackages(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat | null | undefined, namespace: string | null | undefined, package_prefix: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, publish: AllowPublish | null | undefined, upstream: AllowPublish | null | undefined, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<ListPackagesResult> {
			return this.http.post<ListPackagesResult>(this.baseUri + 'v1/packages#domain&repository?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&package_prefix=' + (package_prefix == null ? '' : encodeURIComponent(package_prefix)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&publish=' + publish + '&upstream=' + upstream + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), null, {});
		}

		/**
		 * Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a> objects. Each <code>RepositorySummary</code> contains information about a repository in the specified Amazon Web Services account and that matches the input parameters.
		 * Post v1/repositories
		 * @param {string} repository_prefix  A prefix used to filter returned repositories. Only repositories with names that start with <code>repositoryPrefix</code> are returned.
		 * @param {number} max_results  The maximum number of results to return per page. 
		 * @param {string} next_token  The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRepositoriesResult} Success
		 */
		ListRepositories(repository_prefix: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<ListRepositoriesResult> {
			return this.http.post<ListRepositoriesResult>(this.baseUri + 'v1/repositories?repository_prefix=' + (repository_prefix == null ? '' : encodeURIComponent(repository_prefix)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), null, {});
		}

		/**
		 * Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a> objects. Each <code>RepositorySummary</code> contains information about a repository in the specified domain and that matches the input parameters.
		 * Post v1/domain/repositories#domain
		 * @param {string} domain  The name of the domain that contains the returned list of repositories. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} administrator_account  Filter the list of repositories to only include those that are managed by the Amazon Web Services account ID. 
		 * @param {string} repository_prefix  A prefix used to filter returned repositories. Only repositories with names that start with <code>repositoryPrefix</code> are returned. 
		 * @param {number} max_results  The maximum number of results to return per page. 
		 * @param {string} next_token  The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRepositoriesInDomainResult} Success
		 */
		ListRepositoriesInDomain(domain: string, domain_owner: string | null | undefined, administrator_account: string | null | undefined, repository_prefix: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<ListRepositoriesInDomainResult> {
			return this.http.post<ListRepositoriesInDomainResult>(this.baseUri + 'v1/domain/repositories#domain?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&administrator_account=' + (administrator_account == null ? '' : encodeURIComponent(administrator_account)) + '&repository_prefix=' + (repository_prefix == null ? '' : encodeURIComponent(repository_prefix)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), null, {});
		}

		/**
		 * Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in CodeArtifact.
		 * Post v1/tags#resourceArn
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource to get tags for.
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResult> {
			return this.http.post<ListTagsForResourceResult>(this.baseUri + 'v1/tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), null, {});
		}

		/**
		 * <p>Creates a new package version containing one or more assets (or files).</p> <p>The <code>unfinished</code> flag can be used to keep the package version in the <code>Unfinished</code> state until all of its assets have been uploaded (see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status.html#package-version-status">Package version status</a> in the <i>CodeArtifact user guide</i>). To set the package version’s status to <code>Published</code>, omit the <code>unfinished</code> flag when uploading the final asset, or set the status using <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html">UpdatePackageVersionStatus</a>. Once a package version’s status is set to <code>Published</code>, it cannot change back to <code>Unfinished</code>.</p> <note> <p>Only generic packages can be published using this API. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-generic.html">Using generic packages</a> in the <i>CodeArtifact User Guide</i>.</p> </note>
		 * Post v1/package/version/publish#domain&repository&format&package&version&asset&x-amz-content-sha256
		 * @param {string} domain The name of the domain that contains the repository that contains the package version to publish.
		 * @param {string} domain_owner The 12-digit account number of the AWS account that owns the domain. It does not include dashes or spaces.
		 * @param {string} repository The name of the repository that the package version will be published to.
		 * @param {PackageFormat} format <p>A format that specifies the type of the package version with the requested asset file.</p> <p>The only supported value is <code>generic</code>.</p>
		 * @param {string} namespace The namespace of the package version to publish.
		 * @param {string} _package The name of the package version to publish.
		 * @param {string} version The package version to publish (for example, <code>3.5.2</code>).
		 * @param {string} asset The name of the asset to publish. Asset names can include Unicode letters and numbers, and the following special characters: <code>~ ! @ ^ &amp; ( ) - ` _ + [ ] { } ; , . `</code> 
		 * @param {boolean} unfinished <p>Specifies whether the package version should remain in the <code>unfinished</code> state. If omitted, the package version status will be set to <code>Published</code> (see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status">Package version status</a> in the <i>CodeArtifact User Guide</i>).</p> <p>Valid values: <code>unfinished</code> </p>
		 * @return {PublishPackageVersionResult} Success
		 */
		PublishPackageVersion(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat, namespace: string | null | undefined, _package: string, version: string, asset: string, unfinished: boolean | null | undefined, requestBody: PublishPackageVersionPostBody): Observable<PublishPackageVersionResult> {
			return this.http.post<PublishPackageVersionResult>(this.baseUri + 'v1/package/version/publish#domain&repository&format&package&version&asset&x-amz-content-sha256?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&_package=' + (_package == null ? '' : encodeURIComponent(_package)) + '&version=' + (version == null ? '' : encodeURIComponent(version)) + '&asset=' + (asset == null ? '' : encodeURIComponent(asset)) + '&unfinished=' + unfinished, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Sets a resource policy on a domain that specifies permissions to access it. </p> <p> When you call <code>PutDomainPermissionsPolicy</code>, the resource policy on the domain is ignored when evaluting permissions. This ensures that the owner of a domain cannot lock themselves out of the domain, which would prevent them from being able to update the resource policy. </p>
		 * Put v1/domain/permissions/policy
		 * @return {PutDomainPermissionsPolicyResult} Success
		 */
		PutDomainPermissionsPolicy(requestBody: PutDomainPermissionsPolicyPutBody): Observable<PutDomainPermissionsPolicyResult> {
			return this.http.put<PutDomainPermissionsPolicyResult>(this.baseUri + 'v1/domain/permissions/policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or updates tags for a resource in CodeArtifact.
		 * Post v1/tag#resourceArn
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource that you want to add or update tags for.
		 * @return {TagResourceResult} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResult> {
			return this.http.post<TagResourceResult>(this.baseUri + 'v1/tag#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a resource in CodeArtifact.
		 * Post v1/untag#resourceArn
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource that you want to remove tags from.
		 * @return {UntagResourceResult} Success
		 */
		UntagResource(resourceArn: string, requestBody: UntagResourcePostBody): Observable<UntagResourceResult> {
			return this.http.post<UntagResourceResult>(this.baseUri + 'v1/untag#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the status of one or more versions of a package. Using <code>UpdatePackageVersionsStatus</code>, you can update the status of package versions to <code>Archived</code>, <code>Published</code>, or <code>Unlisted</code>. To set the status of a package version to <code>Disposed</code>, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisposePackageVersions.html">DisposePackageVersions</a>.
		 * Post v1/package/versions/update_status#domain&repository&format&package
		 * @param {string} domain  The name of the domain that contains the repository that contains the package versions with a status to be updated. 
		 * @param {string} domain_owner  The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. 
		 * @param {string} repository  The repository that contains the package versions with the status you want to update. 
		 * @param {PackageFormat} format  A format that specifies the type of the package with the statuses to update. 
		 * @param {string} namespace <p>The namespace of the package version to be updated. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>
		 * @param {string} _package  The name of the package with the version statuses to update. 
		 * @return {UpdatePackageVersionsStatusResult} Success
		 */
		UpdatePackageVersionsStatus(domain: string, domain_owner: string | null | undefined, repository: string, format: PackageFormat, namespace: string | null | undefined, _package: string, requestBody: UpdatePackageVersionsStatusPostBody): Observable<UpdatePackageVersionsStatusResult> {
			return this.http.post<UpdatePackageVersionsStatusResult>(this.baseUri + 'v1/package/versions/update_status#domain&repository&format&package?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&domain_owner=' + (domain_owner == null ? '' : encodeURIComponent(domain_owner)) + '&repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&format=' + format + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&_package=' + (_package == null ? '' : encodeURIComponent(_package)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CopyPackageVersionsPostBody {

		/**
		 * <p> The versions of the package to be copied. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>
		 * Maximum items: 100
		 */
		versions?: Array<string>;

		/** <p> A list of key-value pairs. The keys are package versions and the values are package version revisions. A <code>CopyPackageVersion</code> operation succeeds if the specified versions in the source repository match the specified package version revision. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note> */
		versionRevisions?: {[id: string]: string };

		/** Set to true to overwrite a package version that already exists in the destination repository. If set to false and the package version already exists in the destination repository, the package version is returned in the <code>failedVersions</code> field of the response with an <code>ALREADY_EXISTS</code> error code. */
		allowOverwrite?: boolean | null;

		/** Set to true to copy packages from repositories that are upstream from the source repository to the destination repository. The default setting is false. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. */
		includeFromUpstream?: boolean | null;
	}
	export interface CopyPackageVersionsPostBodyFormProperties {

		/** <p> A list of key-value pairs. The keys are package versions and the values are package version revisions. A <code>CopyPackageVersion</code> operation succeeds if the specified versions in the source repository match the specified package version revision. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note> */
		versionRevisions: FormControl<{[id: string]: string } | null | undefined>,

		/** Set to true to overwrite a package version that already exists in the destination repository. If set to false and the package version already exists in the destination repository, the package version is returned in the <code>failedVersions</code> field of the response with an <code>ALREADY_EXISTS</code> error code. */
		allowOverwrite: FormControl<boolean | null | undefined>,

		/** Set to true to copy packages from repositories that are upstream from the source repository to the destination repository. The default setting is false. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. */
		includeFromUpstream: FormControl<boolean | null | undefined>,
	}
	export function CreateCopyPackageVersionsPostBodyFormGroup() {
		return new FormGroup<CopyPackageVersionsPostBodyFormProperties>({
			versionRevisions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			allowOverwrite: new FormControl<boolean | null | undefined>(undefined),
			includeFromUpstream: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBody {

		/**
		 * <p> The encryption key for the domain. This is used to encrypt content stored in a domain. An encryption key can be a key ID, a key Amazon Resource Name (ARN), a key alias, or a key alias ARN. To specify an <code>encryptionKey</code>, your IAM role must have <code>kms:DescribeKey</code> and <code>kms:CreateGrant</code> permissions on the encryption key that is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestSyntax">DescribeKey</a> in the <i>Key Management Service API Reference</i> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">Key Management Service API Permissions Reference</a> in the <i>Key Management Service Developer Guide</i>. </p> <important> <p> CodeArtifact supports only symmetric CMKs. Do not associate an asymmetric CMK with your domain. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>. </p> </important>
		 * Max length: 1011
		 * Min length: 1
		 */
		encryptionKey?: string | null;

		/**
		 * One or more tag key-value pairs for the domain.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface CreateDomainPostBodyFormProperties {

		/**
		 * <p> The encryption key for the domain. This is used to encrypt content stored in a domain. An encryption key can be a key ID, a key Amazon Resource Name (ARN), a key alias, or a key alias ARN. To specify an <code>encryptionKey</code>, your IAM role must have <code>kms:DescribeKey</code> and <code>kms:CreateGrant</code> permissions on the encryption key that is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestSyntax">DescribeKey</a> in the <i>Key Management Service API Reference</i> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">Key Management Service API Permissions Reference</a> in the <i>Key Management Service Developer Guide</i>. </p> <important> <p> CodeArtifact supports only symmetric CMKs. Do not associate an asymmetric CMK with your domain. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>. </p> </important>
		 * Max length: 1011
		 * Min length: 1
		 */
		encryptionKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainPostBodyFormGroup() {
		return new FormGroup<CreateDomainPostBodyFormProperties>({
			encryptionKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('\S+')]),
		});

	}

	export interface CreateRepositoryPostBody {

		/**
		 * A description of the created repository.
		 * Max length: 1000
		 */
		description?: string | null;

		/** A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. */
		upstreams?: Array<UpstreamRepository>;

		/**
		 * One or more tag key-value pairs for the repository.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface CreateRepositoryPostBodyFormProperties {

		/**
		 * A description of the created repository.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateRepositoryPostBodyFormGroup() {
		return new FormGroup<CreateRepositoryPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('\P{C}*')]),
		});

	}

	export interface UpdateRepositoryPutBody {

		/**
		 * An updated repository description.
		 * Max length: 1000
		 */
		description?: string | null;

		/** A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. */
		upstreams?: Array<UpstreamRepository>;
	}
	export interface UpdateRepositoryPutBodyFormProperties {

		/**
		 * An updated repository description.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRepositoryPutBodyFormGroup() {
		return new FormGroup<UpdateRepositoryPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('\P{C}*')]),
		});

	}

	export interface PutPackageOriginConfigurationPostBody {

		/**
		 * Details about the origin restrictions set on the package. The package origin restrictions determine how new versions of a package can be added to a specific repository.
		 * Required
		 */
		restrictions: PutPackageOriginConfigurationPostBodyRestrictions;
	}
	export interface PutPackageOriginConfigurationPostBodyFormProperties {
	}
	export function CreatePutPackageOriginConfigurationPostBodyFormGroup() {
		return new FormGroup<PutPackageOriginConfigurationPostBodyFormProperties>({
		});

	}

	export interface PutPackageOriginConfigurationPostBodyRestrictions {
		publish?: AllowPublish;
		upstream?: AllowPublish;
	}
	export interface PutPackageOriginConfigurationPostBodyRestrictionsFormProperties {
		publish: FormControl<AllowPublish | null | undefined>,
		upstream: FormControl<AllowPublish | null | undefined>,
	}
	export function CreatePutPackageOriginConfigurationPostBodyRestrictionsFormGroup() {
		return new FormGroup<PutPackageOriginConfigurationPostBodyRestrictionsFormProperties>({
			publish: new FormControl<AllowPublish | null | undefined>(undefined),
			upstream: new FormControl<AllowPublish | null | undefined>(undefined),
		});

	}

	export interface DeletePackageVersionsPostBody {

		/**
		 * An array of strings that specify the versions of the package to delete.
		 * Required
		 * Maximum items: 100
		 */
		versions: Array<string>;

		/** The expected status of the package version to delete. */
		expectedStatus?: PackageVersionStatus | null;
	}
	export interface DeletePackageVersionsPostBodyFormProperties {

		/** The expected status of the package version to delete. */
		expectedStatus: FormControl<PackageVersionStatus | null | undefined>,
	}
	export function CreateDeletePackageVersionsPostBodyFormGroup() {
		return new FormGroup<DeletePackageVersionsPostBodyFormProperties>({
			expectedStatus: new FormControl<PackageVersionStatus | null | undefined>(undefined),
		});

	}

	export interface DisposePackageVersionsPostBody {

		/**
		 * The versions of the package you want to dispose.
		 * Required
		 * Maximum items: 100
		 */
		versions: Array<string>;

		/** The revisions of the package versions you want to dispose. */
		versionRevisions?: {[id: string]: string };

		/** The expected status of the package version to dispose. */
		expectedStatus?: PackageVersionStatus | null;
	}
	export interface DisposePackageVersionsPostBodyFormProperties {

		/** The revisions of the package versions you want to dispose. */
		versionRevisions: FormControl<{[id: string]: string } | null | undefined>,

		/** The expected status of the package version to dispose. */
		expectedStatus: FormControl<PackageVersionStatus | null | undefined>,
	}
	export function CreateDisposePackageVersionsPostBodyFormGroup() {
		return new FormGroup<DisposePackageVersionsPostBodyFormProperties>({
			versionRevisions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			expectedStatus: new FormControl<PackageVersionStatus | null | undefined>(undefined),
		});

	}

	export interface PutRepositoryPermissionsPolicyPutBody {

		/**
		 * Sets the revision of the resource policy that specifies permissions to access the repository. This revision is used for optimistic locking, which prevents others from overwriting your changes to the repository's resource policy.
		 * Max length: 100
		 * Min length: 1
		 */
		policyRevision?: string | null;

		/**
		 * A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided repository.
		 * Required
		 * Max length: 7168
		 * Min length: 1
		 */
		policyDocument: string;
	}
	export interface PutRepositoryPermissionsPolicyPutBodyFormProperties {

		/**
		 * Sets the revision of the resource policy that specifies permissions to access the repository. This revision is used for optimistic locking, which prevents others from overwriting your changes to the repository's resource policy.
		 * Max length: 100
		 * Min length: 1
		 */
		policyRevision: FormControl<string | null | undefined>,

		/**
		 * A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided repository.
		 * Required
		 * Max length: 7168
		 * Min length: 1
		 */
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreatePutRepositoryPermissionsPolicyPutBodyFormGroup() {
		return new FormGroup<PutRepositoryPermissionsPolicyPutBodyFormProperties>({
			policyRevision: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('\S+')]),
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(7168), Validators.pattern('[\P{C}\s]+')]),
		});

	}

	export interface ListDomainsPostBody {

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2000
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListDomainsPostBodyFormProperties {

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2000
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsPostBodyFormGroup() {
		return new FormGroup<ListDomainsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000), Validators.pattern('\S+')]),
		});

	}

	export interface PublishPackageVersionPostBody {

		/**
		 * The content of the asset to publish.
		 * Required
		 */
		assetContent: string;
	}
	export interface PublishPackageVersionPostBodyFormProperties {

		/**
		 * The content of the asset to publish.
		 * Required
		 */
		assetContent: FormControl<string | null | undefined>,
	}
	export function CreatePublishPackageVersionPostBodyFormGroup() {
		return new FormGroup<PublishPackageVersionPostBodyFormProperties>({
			assetContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutDomainPermissionsPolicyPutBody {

		/**
		 * The name of the domain on which to set the resource policy.
		 * Required
		 * Max length: 50
		 * Min length: 2
		 */
		domain: string;

		/**
		 * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
		 * Max length: 12
		 * Min length: 12
		 */
		domainOwner?: string | null;

		/**
		 * The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy.
		 * Max length: 100
		 * Min length: 1
		 */
		policyRevision?: string | null;

		/**
		 * A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided domain.
		 * Required
		 * Max length: 7168
		 * Min length: 1
		 */
		policyDocument: string;
	}
	export interface PutDomainPermissionsPolicyPutBodyFormProperties {

		/**
		 * The name of the domain on which to set the resource policy.
		 * Required
		 * Max length: 50
		 * Min length: 2
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
		 * Max length: 12
		 * Min length: 12
		 */
		domainOwner: FormControl<string | null | undefined>,

		/**
		 * The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy.
		 * Max length: 100
		 * Min length: 1
		 */
		policyRevision: FormControl<string | null | undefined>,

		/**
		 * A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided domain.
		 * Required
		 * Max length: 7168
		 * Min length: 1
		 */
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreatePutDomainPermissionsPolicyPutBodyFormGroup() {
		return new FormGroup<PutDomainPermissionsPolicyPutBodyFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[a-z][a-z0-9\-]{0,48}[a-z0-9]')]),
			domainOwner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12}')]),
			policyRevision: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('\S+')]),
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(7168), Validators.pattern('[\P{C}\s]+')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags you want to modify or add to the resource.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

	export interface UntagResourcePostBody {

		/**
		 * The tag key for each tag that you want to remove from the resource.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tagKeys: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
		});

	}

	export interface UpdatePackageVersionsStatusPostBody {

		/**
		 * An array of strings that specify the versions of the package with the statuses to update.
		 * Required
		 * Maximum items: 100
		 */
		versions: Array<string>;

		/** A map of package versions and package version revisions. The map <code>key</code> is the package version (for example, <code>3.5.2</code>), and the map <code>value</code> is the package version revision. */
		versionRevisions?: {[id: string]: string };

		/** The package version’s expected status before it is updated. If <code>expectedStatus</code> is provided, the package version's status is updated only if its status at the time <code>UpdatePackageVersionsStatus</code> is called matches <code>expectedStatus</code>. */
		expectedStatus?: PackageVersionStatus | null;

		/**
		 * The status you want to change the package version status to.
		 * Required
		 */
		targetStatus: PackageVersionStatus;
	}
	export interface UpdatePackageVersionsStatusPostBodyFormProperties {

		/** A map of package versions and package version revisions. The map <code>key</code> is the package version (for example, <code>3.5.2</code>), and the map <code>value</code> is the package version revision. */
		versionRevisions: FormControl<{[id: string]: string } | null | undefined>,

		/** The package version’s expected status before it is updated. If <code>expectedStatus</code> is provided, the package version's status is updated only if its status at the time <code>UpdatePackageVersionsStatus</code> is called matches <code>expectedStatus</code>. */
		expectedStatus: FormControl<PackageVersionStatus | null | undefined>,

		/**
		 * The status you want to change the package version status to.
		 * Required
		 */
		targetStatus: FormControl<PackageVersionStatus | null | undefined>,
	}
	export function CreateUpdatePackageVersionsStatusPostBodyFormGroup() {
		return new FormGroup<UpdatePackageVersionsStatusPostBodyFormProperties>({
			versionRevisions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			expectedStatus: new FormControl<PackageVersionStatus | null | undefined>(undefined),
			targetStatus: new FormControl<PackageVersionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

}

