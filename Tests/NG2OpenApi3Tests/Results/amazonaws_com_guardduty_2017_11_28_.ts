import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptAdministratorInvitationResponse {
	}
	export interface AcceptAdministratorInvitationResponseFormProperties {
	}
	export function CreateAcceptAdministratorInvitationResponseFormGroup() {
		return new FormGroup<AcceptAdministratorInvitationResponseFormProperties>({
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
		});

	}


	/** This output is deprecated, use AcceptAdministratorInvitationResponse instead */
	export interface AcceptInvitationResponse {
	}

	/** This output is deprecated, use AcceptAdministratorInvitationResponse instead */
	export interface AcceptInvitationResponseFormProperties {
	}
	export function CreateAcceptInvitationResponseFormGroup() {
		return new FormGroup<AcceptInvitationResponseFormProperties>({
		});

	}

	export interface ArchiveFindingsResponse {
	}
	export interface ArchiveFindingsResponseFormProperties {
	}
	export function CreateArchiveFindingsResponseFormGroup() {
		return new FormGroup<ArchiveFindingsResponseFormProperties>({
		});

	}

	export interface CreateDetectorResponse {
		DetectorId?: string;
		UnprocessedDataSources?: UnprocessedDataSourcesResult;
	}
	export interface CreateDetectorResponseFormProperties {
		DetectorId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDetectorResponseFormGroup() {
		return new FormGroup<CreateDetectorResponseFormProperties>({
			DetectorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the names of the data sources that couldn't be enabled. */
	export interface UnprocessedDataSourcesResult {
		MalwareProtection?: MalwareProtectionConfigurationResult;
	}

	/** Specifies the names of the data sources that couldn't be enabled. */
	export interface UnprocessedDataSourcesResultFormProperties {
	}
	export function CreateUnprocessedDataSourcesResultFormGroup() {
		return new FormGroup<UnprocessedDataSourcesResultFormProperties>({
		});

	}


	/** An object that contains information on the status of all Malware Protection data sources. */
	export interface MalwareProtectionConfigurationResult {
		ScanEc2InstanceWithFindings?: ScanEc2InstanceWithFindingsResult;
		ServiceRole?: string;
	}

	/** An object that contains information on the status of all Malware Protection data sources. */
	export interface MalwareProtectionConfigurationResultFormProperties {
		ServiceRole: FormControl<string | null | undefined>,
	}
	export function CreateMalwareProtectionConfigurationResultFormGroup() {
		return new FormGroup<MalwareProtectionConfigurationResultFormProperties>({
			ServiceRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains information on the status of whether Malware Protection for EC2 instances with findings will be enabled as a data source. */
	export interface ScanEc2InstanceWithFindingsResult {
		EbsVolumes?: EbsVolumesResult;
	}

	/** An object that contains information on the status of whether Malware Protection for EC2 instances with findings will be enabled as a data source. */
	export interface ScanEc2InstanceWithFindingsResultFormProperties {
	}
	export function CreateScanEc2InstanceWithFindingsResultFormGroup() {
		return new FormGroup<ScanEc2InstanceWithFindingsResultFormProperties>({
		});

	}


	/** Describes the configuration of scanning EBS volumes as a data source. */
	export interface EbsVolumesResult {
		Status?: DataSourceStatus;
		Reason?: string;
	}

	/** Describes the configuration of scanning EBS volumes as a data source. */
	export interface EbsVolumesResultFormProperties {
		Status: FormControl<DataSourceStatus | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateEbsVolumesResultFormGroup() {
		return new FormGroup<EbsVolumesResultFormProperties>({
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataSourceStatus { ENABLED = 0, DISABLED = 1 }


	/** Describes whether S3 data event logs will be enabled as a data source. */
	export interface S3LogsConfiguration {

		/** Required */
		Enable: boolean;
	}

	/** Describes whether S3 data event logs will be enabled as a data source. */
	export interface S3LogsConfigurationFormProperties {

		/** Required */
		Enable: FormControl<boolean | null | undefined>,
	}
	export function CreateS3LogsConfigurationFormGroup() {
		return new FormGroup<S3LogsConfigurationFormProperties>({
			Enable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes whether any Kubernetes data sources are enabled. */
	export interface KubernetesConfiguration {

		/** Required */
		AuditLogs: KubernetesAuditLogsConfiguration;
	}

	/** Describes whether any Kubernetes data sources are enabled. */
	export interface KubernetesConfigurationFormProperties {
	}
	export function CreateKubernetesConfigurationFormGroup() {
		return new FormGroup<KubernetesConfigurationFormProperties>({
		});

	}


	/** Describes whether Kubernetes audit logs are enabled as a data source. */
	export interface KubernetesAuditLogsConfiguration {

		/** Required */
		Enable: boolean;
	}

	/** Describes whether Kubernetes audit logs are enabled as a data source. */
	export interface KubernetesAuditLogsConfigurationFormProperties {

		/** Required */
		Enable: FormControl<boolean | null | undefined>,
	}
	export function CreateKubernetesAuditLogsConfigurationFormGroup() {
		return new FormGroup<KubernetesAuditLogsConfigurationFormProperties>({
			Enable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes whether Malware Protection will be enabled as a data source. */
	export interface MalwareProtectionConfiguration {
		ScanEc2InstanceWithFindings?: ScanEc2InstanceWithFindings;
	}

	/** Describes whether Malware Protection will be enabled as a data source. */
	export interface MalwareProtectionConfigurationFormProperties {
	}
	export function CreateMalwareProtectionConfigurationFormGroup() {
		return new FormGroup<MalwareProtectionConfigurationFormProperties>({
		});

	}


	/** Describes whether Malware Protection for EC2 instances with findings will be enabled as a data source. */
	export interface ScanEc2InstanceWithFindings {
		EbsVolumes?: boolean | null;
	}

	/** Describes whether Malware Protection for EC2 instances with findings will be enabled as a data source. */
	export interface ScanEc2InstanceWithFindingsFormProperties {
		EbsVolumes: FormControl<boolean | null | undefined>,
	}
	export function CreateScanEc2InstanceWithFindingsFormGroup() {
		return new FormGroup<ScanEc2InstanceWithFindingsFormProperties>({
			EbsVolumes: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about a GuardDuty feature. */
	export interface DetectorFeatureConfiguration {
		Name?: DetectorFeature;
		Status?: DataSourceStatus;
		AdditionalConfiguration?: Array<DetectorAdditionalConfiguration>;
	}

	/** Contains information about a GuardDuty feature. */
	export interface DetectorFeatureConfigurationFormProperties {
		Name: FormControl<DetectorFeature | null | undefined>,
		Status: FormControl<DataSourceStatus | null | undefined>,
	}
	export function CreateDetectorFeatureConfigurationFormGroup() {
		return new FormGroup<DetectorFeatureConfigurationFormProperties>({
			Name: new FormControl<DetectorFeature | null | undefined>(undefined),
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined),
		});

	}

	export enum DetectorFeature { S3_DATA_EVENTS = 0, EKS_AUDIT_LOGS = 1, EBS_MALWARE_PROTECTION = 2, RDS_LOGIN_EVENTS = 3, EKS_RUNTIME_MONITORING = 4, LAMBDA_NETWORK_LOGS = 5 }


	/** Information about the additional configuration for a feature in your GuardDuty account. */
	export interface DetectorAdditionalConfiguration {
		Name?: FeatureAdditionalConfiguration;
		Status?: DataSourceStatus;
	}

	/** Information about the additional configuration for a feature in your GuardDuty account. */
	export interface DetectorAdditionalConfigurationFormProperties {
		Name: FormControl<FeatureAdditionalConfiguration | null | undefined>,
		Status: FormControl<DataSourceStatus | null | undefined>,
	}
	export function CreateDetectorAdditionalConfigurationFormGroup() {
		return new FormGroup<DetectorAdditionalConfigurationFormProperties>({
			Name: new FormControl<FeatureAdditionalConfiguration | null | undefined>(undefined),
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined),
		});

	}

	export enum FeatureAdditionalConfiguration { EKS_ADDON_MANAGEMENT = 0 }

	export interface CreateFilterResponse {

		/** Required */
		Name: string;
	}
	export interface CreateFilterResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateFilterResponseFormGroup() {
		return new FormGroup<CreateFilterResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Criterion {
	}
	export interface CriterionFormProperties {
	}
	export function CreateCriterionFormGroup() {
		return new FormGroup<CriterionFormProperties>({
		});

	}

	export interface CreateIPSetResponse {

		/** Required */
		IpSetId: string;
	}
	export interface CreateIPSetResponseFormProperties {

		/** Required */
		IpSetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateIPSetResponseFormGroup() {
		return new FormGroup<CreateIPSetResponseFormProperties>({
			IpSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMembersResponse {

		/** Required */
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface CreateMembersResponseFormProperties {
	}
	export function CreateCreateMembersResponseFormGroup() {
		return new FormGroup<CreateMembersResponseFormProperties>({
		});

	}


	/** Contains information about the accounts that weren't processed. */
	export interface UnprocessedAccount {

		/** Required */
		AccountId: string;

		/** Required */
		Result: string;
	}

	/** Contains information about the accounts that weren't processed. */
	export interface UnprocessedAccountFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		Result: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedAccountFormGroup() {
		return new FormGroup<UnprocessedAccountFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Result: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the account. */
	export interface AccountDetail {

		/** Required */
		AccountId: string;

		/** Required */
		Email: string;
	}

	/** Contains information about the account. */
	export interface AccountDetailFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		Email: FormControl<string | null | undefined>,
	}
	export function CreateAccountDetailFormGroup() {
		return new FormGroup<AccountDetailFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePublishingDestinationResponse {

		/** Required */
		DestinationId: string;
	}
	export interface CreatePublishingDestinationResponseFormProperties {

		/** Required */
		DestinationId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePublishingDestinationResponseFormGroup() {
		return new FormGroup<CreatePublishingDestinationResponseFormProperties>({
			DestinationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSampleFindingsResponse {
	}
	export interface CreateSampleFindingsResponseFormProperties {
	}
	export function CreateCreateSampleFindingsResponseFormGroup() {
		return new FormGroup<CreateSampleFindingsResponseFormProperties>({
		});

	}

	export interface CreateThreatIntelSetResponse {

		/** Required */
		ThreatIntelSetId: string;
	}
	export interface CreateThreatIntelSetResponseFormProperties {

		/** Required */
		ThreatIntelSetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateThreatIntelSetResponseFormGroup() {
		return new FormGroup<CreateThreatIntelSetResponseFormProperties>({
			ThreatIntelSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeclineInvitationsResponse {

		/** Required */
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface DeclineInvitationsResponseFormProperties {
	}
	export function CreateDeclineInvitationsResponseFormGroup() {
		return new FormGroup<DeclineInvitationsResponseFormProperties>({
		});

	}

	export interface DeleteDetectorResponse {
	}
	export interface DeleteDetectorResponseFormProperties {
	}
	export function CreateDeleteDetectorResponseFormGroup() {
		return new FormGroup<DeleteDetectorResponseFormProperties>({
		});

	}

	export interface DeleteFilterResponse {
	}
	export interface DeleteFilterResponseFormProperties {
	}
	export function CreateDeleteFilterResponseFormGroup() {
		return new FormGroup<DeleteFilterResponseFormProperties>({
		});

	}

	export interface DeleteIPSetResponse {
	}
	export interface DeleteIPSetResponseFormProperties {
	}
	export function CreateDeleteIPSetResponseFormGroup() {
		return new FormGroup<DeleteIPSetResponseFormProperties>({
		});

	}

	export interface DeleteInvitationsResponse {

		/** Required */
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface DeleteInvitationsResponseFormProperties {
	}
	export function CreateDeleteInvitationsResponseFormGroup() {
		return new FormGroup<DeleteInvitationsResponseFormProperties>({
		});

	}

	export interface DeleteMembersResponse {

		/** Required */
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface DeleteMembersResponseFormProperties {
	}
	export function CreateDeleteMembersResponseFormGroup() {
		return new FormGroup<DeleteMembersResponseFormProperties>({
		});

	}

	export interface DeletePublishingDestinationResponse {
	}
	export interface DeletePublishingDestinationResponseFormProperties {
	}
	export function CreateDeletePublishingDestinationResponseFormGroup() {
		return new FormGroup<DeletePublishingDestinationResponseFormProperties>({
		});

	}

	export interface DeleteThreatIntelSetResponse {
	}
	export interface DeleteThreatIntelSetResponseFormProperties {
	}
	export function CreateDeleteThreatIntelSetResponseFormGroup() {
		return new FormGroup<DeleteThreatIntelSetResponseFormProperties>({
		});

	}

	export interface DescribeMalwareScansResponse {

		/** Required */
		Scans: Array<Scan>;
		NextToken?: string;
	}
	export interface DescribeMalwareScansResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMalwareScansResponseFormGroup() {
		return new FormGroup<DescribeMalwareScansResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a malware scan. */
	export interface Scan {
		DetectorId?: string;
		AdminDetectorId?: string;
		ScanId?: string;
		ScanStatus?: ScanStatus;
		FailureReason?: string;
		ScanStartTime?: Date;
		ScanEndTime?: Date;
		TriggerDetails?: TriggerDetails;
		ResourceDetails?: ResourceDetails;
		ScanResultDetails?: ScanResultDetails;
		AccountId?: string;
		TotalBytes?: number | null;
		FileCount?: number | null;
		AttachedVolumes?: Array<VolumeDetail>;
		ScanType?: ScanType;
	}

	/** Contains information about a malware scan. */
	export interface ScanFormProperties {
		DetectorId: FormControl<string | null | undefined>,
		AdminDetectorId: FormControl<string | null | undefined>,
		ScanId: FormControl<string | null | undefined>,
		ScanStatus: FormControl<ScanStatus | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		ScanStartTime: FormControl<Date | null | undefined>,
		ScanEndTime: FormControl<Date | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		TotalBytes: FormControl<number | null | undefined>,
		FileCount: FormControl<number | null | undefined>,
		ScanType: FormControl<ScanType | null | undefined>,
	}
	export function CreateScanFormGroup() {
		return new FormGroup<ScanFormProperties>({
			DetectorId: new FormControl<string | null | undefined>(undefined),
			AdminDetectorId: new FormControl<string | null | undefined>(undefined),
			ScanId: new FormControl<string | null | undefined>(undefined),
			ScanStatus: new FormControl<ScanStatus | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			ScanStartTime: new FormControl<Date | null | undefined>(undefined),
			ScanEndTime: new FormControl<Date | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			TotalBytes: new FormControl<number | null | undefined>(undefined),
			FileCount: new FormControl<number | null | undefined>(undefined),
			ScanType: new FormControl<ScanType | null | undefined>(undefined),
		});

	}

	export enum ScanStatus { RUNNING = 0, COMPLETED = 1, FAILED = 2, SKIPPED = 3 }


	/** Represents the reason the scan was triggered. */
	export interface TriggerDetails {
		GuardDutyFindingId?: string;
		Description?: string;
	}

	/** Represents the reason the scan was triggered. */
	export interface TriggerDetailsFormProperties {
		GuardDutyFindingId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateTriggerDetailsFormGroup() {
		return new FormGroup<TriggerDetailsFormProperties>({
			GuardDutyFindingId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the resources that were scanned in the scan entry. */
	export interface ResourceDetails {
		InstanceArn?: string;
	}

	/** Represents the resources that were scanned in the scan entry. */
	export interface ResourceDetailsFormProperties {
		InstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateResourceDetailsFormGroup() {
		return new FormGroup<ResourceDetailsFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of the scan. */
	export interface ScanResultDetails {
		ScanResult?: ScanResult;
	}

	/** Represents the result of the scan. */
	export interface ScanResultDetailsFormProperties {
		ScanResult: FormControl<ScanResult | null | undefined>,
	}
	export function CreateScanResultDetailsFormGroup() {
		return new FormGroup<ScanResultDetailsFormProperties>({
			ScanResult: new FormControl<ScanResult | null | undefined>(undefined),
		});

	}

	export enum ScanResult { CLEAN = 0, INFECTED = 1 }


	/** Contains EBS volume details. */
	export interface VolumeDetail {
		VolumeArn?: string;
		VolumeType?: string;
		DeviceName?: string;
		VolumeSizeInGB?: number | null;
		EncryptionType?: string;
		SnapshotArn?: string;
		KmsKeyArn?: string;
	}

	/** Contains EBS volume details. */
	export interface VolumeDetailFormProperties {
		VolumeArn: FormControl<string | null | undefined>,
		VolumeType: FormControl<string | null | undefined>,
		DeviceName: FormControl<string | null | undefined>,
		VolumeSizeInGB: FormControl<number | null | undefined>,
		EncryptionType: FormControl<string | null | undefined>,
		SnapshotArn: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateVolumeDetailFormGroup() {
		return new FormGroup<VolumeDetailFormProperties>({
			VolumeArn: new FormControl<string | null | undefined>(undefined),
			VolumeType: new FormControl<string | null | undefined>(undefined),
			DeviceName: new FormControl<string | null | undefined>(undefined),
			VolumeSizeInGB: new FormControl<number | null | undefined>(undefined),
			EncryptionType: new FormControl<string | null | undefined>(undefined),
			SnapshotArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScanType { GUARDDUTY_INITIATED = 0, ON_DEMAND = 1 }


	/** Represents a condition that when matched will be added to the response of the operation. Irrespective of using any filter criteria, an administrator account can view the scan entries for all of its member accounts. However, each member account can view the scan entries only for their own account. */
	export interface FilterCriterion {
		CriterionKey?: CriterionKey;
		FilterCondition?: FilterCondition;
	}

	/** Represents a condition that when matched will be added to the response of the operation. Irrespective of using any filter criteria, an administrator account can view the scan entries for all of its member accounts. However, each member account can view the scan entries only for their own account. */
	export interface FilterCriterionFormProperties {
		CriterionKey: FormControl<CriterionKey | null | undefined>,
	}
	export function CreateFilterCriterionFormGroup() {
		return new FormGroup<FilterCriterionFormProperties>({
			CriterionKey: new FormControl<CriterionKey | null | undefined>(undefined),
		});

	}

	export enum CriterionKey { EC2_INSTANCE_ARN = 0, SCAN_ID = 1, ACCOUNT_ID = 2, GUARDDUTY_FINDING_ID = 3, SCAN_START_TIME = 4, SCAN_STATUS = 5, SCAN_TYPE = 6 }


	/** Contains information about the condition. */
	export interface FilterCondition {
		EqualsValue?: string;
		GreaterThan?: number | null;
		LessThan?: number | null;
	}

	/** Contains information about the condition. */
	export interface FilterConditionFormProperties {
		EqualsValue: FormControl<string | null | undefined>,
		GreaterThan: FormControl<number | null | undefined>,
		LessThan: FormControl<number | null | undefined>,
	}
	export function CreateFilterConditionFormGroup() {
		return new FormGroup<FilterConditionFormProperties>({
			EqualsValue: new FormControl<string | null | undefined>(undefined),
			GreaterThan: new FormControl<number | null | undefined>(undefined),
			LessThan: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OrderBy { ASC = 0, DESC = 1 }

	export interface DescribeOrganizationConfigurationResponse {
		AutoEnable?: boolean | null;

		/** Required */
		MemberAccountLimitReached: boolean;
		DataSources?: OrganizationDataSourceConfigurationsResult;
		Features?: Array<OrganizationFeatureConfigurationResult>;
		NextToken?: string;
		AutoEnableOrganizationMembers?: AutoEnableMembers;
	}
	export interface DescribeOrganizationConfigurationResponseFormProperties {
		AutoEnable: FormControl<boolean | null | undefined>,

		/** Required */
		MemberAccountLimitReached: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		AutoEnableOrganizationMembers: FormControl<AutoEnableMembers | null | undefined>,
	}
	export function CreateDescribeOrganizationConfigurationResponseFormGroup() {
		return new FormGroup<DescribeOrganizationConfigurationResponseFormProperties>({
			AutoEnable: new FormControl<boolean | null | undefined>(undefined),
			MemberAccountLimitReached: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			AutoEnableOrganizationMembers: new FormControl<AutoEnableMembers | null | undefined>(undefined),
		});

	}


	/** An object that contains information on which data sources are automatically enabled for new members within the organization. */
	export interface OrganizationDataSourceConfigurationsResult {

		/** Required */
		S3Logs: OrganizationS3LogsConfigurationResult;
		Kubernetes?: OrganizationKubernetesConfigurationResult;
		MalwareProtection?: OrganizationMalwareProtectionConfigurationResult;
	}

	/** An object that contains information on which data sources are automatically enabled for new members within the organization. */
	export interface OrganizationDataSourceConfigurationsResultFormProperties {
	}
	export function CreateOrganizationDataSourceConfigurationsResultFormGroup() {
		return new FormGroup<OrganizationDataSourceConfigurationsResultFormProperties>({
		});

	}


	/** The current configuration of S3 data event logs as a data source for the organization. */
	export interface OrganizationS3LogsConfigurationResult {

		/** Required */
		AutoEnable: boolean;
	}

	/** The current configuration of S3 data event logs as a data source for the organization. */
	export interface OrganizationS3LogsConfigurationResultFormProperties {

		/** Required */
		AutoEnable: FormControl<boolean | null | undefined>,
	}
	export function CreateOrganizationS3LogsConfigurationResultFormGroup() {
		return new FormGroup<OrganizationS3LogsConfigurationResultFormProperties>({
			AutoEnable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The current configuration of all Kubernetes data sources for the organization. */
	export interface OrganizationKubernetesConfigurationResult {

		/** Required */
		AuditLogs: OrganizationKubernetesAuditLogsConfigurationResult;
	}

	/** The current configuration of all Kubernetes data sources for the organization. */
	export interface OrganizationKubernetesConfigurationResultFormProperties {
	}
	export function CreateOrganizationKubernetesConfigurationResultFormGroup() {
		return new FormGroup<OrganizationKubernetesConfigurationResultFormProperties>({
		});

	}


	/** The current configuration of Kubernetes audit logs as a data source for the organization. */
	export interface OrganizationKubernetesAuditLogsConfigurationResult {

		/** Required */
		AutoEnable: boolean;
	}

	/** The current configuration of Kubernetes audit logs as a data source for the organization. */
	export interface OrganizationKubernetesAuditLogsConfigurationResultFormProperties {

		/** Required */
		AutoEnable: FormControl<boolean | null | undefined>,
	}
	export function CreateOrganizationKubernetesAuditLogsConfigurationResultFormGroup() {
		return new FormGroup<OrganizationKubernetesAuditLogsConfigurationResultFormProperties>({
			AutoEnable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that contains information on the status of all Malware Protection data source for an organization. */
	export interface OrganizationMalwareProtectionConfigurationResult {
		ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindingsResult;
	}

	/** An object that contains information on the status of all Malware Protection data source for an organization. */
	export interface OrganizationMalwareProtectionConfigurationResultFormProperties {
	}
	export function CreateOrganizationMalwareProtectionConfigurationResultFormGroup() {
		return new FormGroup<OrganizationMalwareProtectionConfigurationResultFormProperties>({
		});

	}


	/** An object that contains information on the status of scanning EC2 instances with findings for an organization. */
	export interface OrganizationScanEc2InstanceWithFindingsResult {
		EbsVolumes?: OrganizationEbsVolumesResult;
	}

	/** An object that contains information on the status of scanning EC2 instances with findings for an organization. */
	export interface OrganizationScanEc2InstanceWithFindingsResultFormProperties {
	}
	export function CreateOrganizationScanEc2InstanceWithFindingsResultFormGroup() {
		return new FormGroup<OrganizationScanEc2InstanceWithFindingsResultFormProperties>({
		});

	}


	/** An object that contains information on the status of whether EBS volumes scanning will be enabled as a data source for an organization. */
	export interface OrganizationEbsVolumesResult {
		AutoEnable?: boolean | null;
	}

	/** An object that contains information on the status of whether EBS volumes scanning will be enabled as a data source for an organization. */
	export interface OrganizationEbsVolumesResultFormProperties {
		AutoEnable: FormControl<boolean | null | undefined>,
	}
	export function CreateOrganizationEbsVolumesResultFormGroup() {
		return new FormGroup<OrganizationEbsVolumesResultFormProperties>({
			AutoEnable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of features which will be configured for the organization. */
	export interface OrganizationFeatureConfigurationResult {
		Name?: DetectorFeature;
		AutoEnable?: OrgFeatureStatus;
		AdditionalConfiguration?: Array<OrganizationAdditionalConfigurationResult>;
	}

	/** A list of features which will be configured for the organization. */
	export interface OrganizationFeatureConfigurationResultFormProperties {
		Name: FormControl<DetectorFeature | null | undefined>,
		AutoEnable: FormControl<OrgFeatureStatus | null | undefined>,
	}
	export function CreateOrganizationFeatureConfigurationResultFormGroup() {
		return new FormGroup<OrganizationFeatureConfigurationResultFormProperties>({
			Name: new FormControl<DetectorFeature | null | undefined>(undefined),
			AutoEnable: new FormControl<OrgFeatureStatus | null | undefined>(undefined),
		});

	}

	export enum OrgFeatureStatus { NEW = 0, NONE = 1 }


	/** A list of additional configuration which will be configured for the organization. */
	export interface OrganizationAdditionalConfigurationResult {
		Name?: FeatureAdditionalConfiguration;
		AutoEnable?: OrgFeatureStatus;
	}

	/** A list of additional configuration which will be configured for the organization. */
	export interface OrganizationAdditionalConfigurationResultFormProperties {
		Name: FormControl<FeatureAdditionalConfiguration | null | undefined>,
		AutoEnable: FormControl<OrgFeatureStatus | null | undefined>,
	}
	export function CreateOrganizationAdditionalConfigurationResultFormGroup() {
		return new FormGroup<OrganizationAdditionalConfigurationResultFormProperties>({
			Name: new FormControl<FeatureAdditionalConfiguration | null | undefined>(undefined),
			AutoEnable: new FormControl<OrgFeatureStatus | null | undefined>(undefined),
		});

	}

	export enum AutoEnableMembers { NEW = 0, ALL = 1, NONE = 2 }

	export interface DescribePublishingDestinationResponse {

		/** Required */
		DestinationId: string;

		/** Required */
		DestinationType: DestinationType;

		/** Required */
		Status: PublishingStatus;

		/** Required */
		PublishingFailureStartTimestamp: number;

		/** Required */
		DestinationProperties: DestinationProperties;
	}
	export interface DescribePublishingDestinationResponseFormProperties {

		/** Required */
		DestinationId: FormControl<string | null | undefined>,

		/** Required */
		DestinationType: FormControl<DestinationType | null | undefined>,

		/** Required */
		Status: FormControl<PublishingStatus | null | undefined>,

		/** Required */
		PublishingFailureStartTimestamp: FormControl<number | null | undefined>,
	}
	export function CreateDescribePublishingDestinationResponseFormGroup() {
		return new FormGroup<DescribePublishingDestinationResponseFormProperties>({
			DestinationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationType: new FormControl<DestinationType | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<PublishingStatus | null | undefined>(undefined, [Validators.required]),
			PublishingFailureStartTimestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DestinationType { S3 = 0 }

	export enum PublishingStatus { PENDING_VERIFICATION = 0, PUBLISHING = 1, UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY = 2, STOPPED = 3 }


	/** Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
	export interface DestinationProperties {
		DestinationArn?: string;
		KmsKeyArn?: string;
	}

	/** Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
	export interface DestinationPropertiesFormProperties {
		DestinationArn: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateDestinationPropertiesFormGroup() {
		return new FormGroup<DestinationPropertiesFormProperties>({
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisableOrganizationAdminAccountResponse {
	}
	export interface DisableOrganizationAdminAccountResponseFormProperties {
	}
	export function CreateDisableOrganizationAdminAccountResponseFormGroup() {
		return new FormGroup<DisableOrganizationAdminAccountResponseFormProperties>({
		});

	}

	export interface DisassociateFromAdministratorAccountResponse {
	}
	export interface DisassociateFromAdministratorAccountResponseFormProperties {
	}
	export function CreateDisassociateFromAdministratorAccountResponseFormGroup() {
		return new FormGroup<DisassociateFromAdministratorAccountResponseFormProperties>({
		});

	}


	/** This output is deprecated, use DisassociateFromAdministratorAccountResponse instead */
	export interface DisassociateFromMasterAccountResponse {
	}

	/** This output is deprecated, use DisassociateFromAdministratorAccountResponse instead */
	export interface DisassociateFromMasterAccountResponseFormProperties {
	}
	export function CreateDisassociateFromMasterAccountResponseFormGroup() {
		return new FormGroup<DisassociateFromMasterAccountResponseFormProperties>({
		});

	}

	export interface DisassociateMembersResponse {

		/** Required */
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface DisassociateMembersResponseFormProperties {
	}
	export function CreateDisassociateMembersResponseFormGroup() {
		return new FormGroup<DisassociateMembersResponseFormProperties>({
		});

	}

	export interface EnableOrganizationAdminAccountResponse {
	}
	export interface EnableOrganizationAdminAccountResponseFormProperties {
	}
	export function CreateEnableOrganizationAdminAccountResponseFormGroup() {
		return new FormGroup<EnableOrganizationAdminAccountResponseFormProperties>({
		});

	}

	export interface GetAdministratorAccountResponse {

		/** Required */
		Administrator: Administrator;
	}
	export interface GetAdministratorAccountResponseFormProperties {
	}
	export function CreateGetAdministratorAccountResponseFormGroup() {
		return new FormGroup<GetAdministratorAccountResponseFormProperties>({
		});

	}


	/** Contains information about the administrator account and invitation. */
	export interface Administrator {
		AccountId?: string;
		InvitationId?: string;
		RelationshipStatus?: string;
		InvitedAt?: string;
	}

	/** Contains information about the administrator account and invitation. */
	export interface AdministratorFormProperties {
		AccountId: FormControl<string | null | undefined>,
		InvitationId: FormControl<string | null | undefined>,
		RelationshipStatus: FormControl<string | null | undefined>,
		InvitedAt: FormControl<string | null | undefined>,
	}
	export function CreateAdministratorFormGroup() {
		return new FormGroup<AdministratorFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			InvitationId: new FormControl<string | null | undefined>(undefined),
			RelationshipStatus: new FormControl<string | null | undefined>(undefined),
			InvitedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCoverageStatisticsResponse {
		CoverageStatistics?: CoverageStatistics;
	}
	export interface GetCoverageStatisticsResponseFormProperties {
	}
	export function CreateGetCoverageStatisticsResponseFormGroup() {
		return new FormGroup<GetCoverageStatisticsResponseFormProperties>({
		});

	}


	/** Information about the coverage statistics for a resource. */
	export interface CoverageStatistics {
		CountByResourceType?: CountByResourceType;
		CountByCoverageStatus?: CountByCoverageStatus;
	}

	/** Information about the coverage statistics for a resource. */
	export interface CoverageStatisticsFormProperties {
	}
	export function CreateCoverageStatisticsFormGroup() {
		return new FormGroup<CoverageStatisticsFormProperties>({
		});

	}

	export interface CountByResourceType {
	}
	export interface CountByResourceTypeFormProperties {
	}
	export function CreateCountByResourceTypeFormGroup() {
		return new FormGroup<CountByResourceTypeFormProperties>({
		});

	}

	export interface CountByCoverageStatus {
	}
	export interface CountByCoverageStatusFormProperties {
	}
	export function CreateCountByCoverageStatusFormGroup() {
		return new FormGroup<CountByCoverageStatusFormProperties>({
		});

	}


	/** Represents a condition that when matched will be added to the response of the operation. */
	export interface CoverageFilterCriterion {
		CriterionKey?: CoverageFilterCriterionKey;
		FilterCondition?: CoverageFilterCondition;
	}

	/** Represents a condition that when matched will be added to the response of the operation. */
	export interface CoverageFilterCriterionFormProperties {
		CriterionKey: FormControl<CoverageFilterCriterionKey | null | undefined>,
	}
	export function CreateCoverageFilterCriterionFormGroup() {
		return new FormGroup<CoverageFilterCriterionFormProperties>({
			CriterionKey: new FormControl<CoverageFilterCriterionKey | null | undefined>(undefined),
		});

	}

	export enum CoverageFilterCriterionKey { ACCOUNT_ID = 0, CLUSTER_NAME = 1, RESOURCE_TYPE = 2, COVERAGE_STATUS = 3, ADDON_VERSION = 4 }


	/** Represents a condition that when matched will be added to the response of the operation. */
	export interface CoverageFilterCondition {
		Equals?: Array<string>;
		NotEquals?: Array<string>;
	}

	/** Represents a condition that when matched will be added to the response of the operation. */
	export interface CoverageFilterConditionFormProperties {
	}
	export function CreateCoverageFilterConditionFormGroup() {
		return new FormGroup<CoverageFilterConditionFormProperties>({
		});

	}

	export enum CoverageStatisticsType { COUNT_BY_RESOURCE_TYPE = 0, COUNT_BY_COVERAGE_STATUS = 1 }

	export interface GetDetectorResponse {
		CreatedAt?: string;
		FindingPublishingFrequency?: FindingPublishingFrequency;

		/** Required */
		ServiceRole: string;

		/** Required */
		Status: DataSourceStatus;
		UpdatedAt?: string;
		DataSources?: DataSourceConfigurationsResult;
		Tags?: TagMap;
		Features?: Array<DetectorFeatureConfigurationResult>;
	}
	export interface GetDetectorResponseFormProperties {
		CreatedAt: FormControl<string | null | undefined>,
		FindingPublishingFrequency: FormControl<FindingPublishingFrequency | null | undefined>,

		/** Required */
		ServiceRole: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<DataSourceStatus | null | undefined>,
		UpdatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetDetectorResponseFormGroup() {
		return new FormGroup<GetDetectorResponseFormProperties>({
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			FindingPublishingFrequency: new FormControl<FindingPublishingFrequency | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined, [Validators.required]),
			UpdatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }


	/** Contains information on the status of data sources for the detector. */
	export interface DataSourceConfigurationsResult {

		/** Required */
		CloudTrail: CloudTrailConfigurationResult;

		/** Required */
		DNSLogs: DNSLogsConfigurationResult;

		/** Required */
		FlowLogs: FlowLogsConfigurationResult;

		/** Required */
		S3Logs: S3LogsConfigurationResult;
		Kubernetes?: KubernetesConfigurationResult;
		MalwareProtection?: MalwareProtectionConfigurationResult;
	}

	/** Contains information on the status of data sources for the detector. */
	export interface DataSourceConfigurationsResultFormProperties {
	}
	export function CreateDataSourceConfigurationsResultFormGroup() {
		return new FormGroup<DataSourceConfigurationsResultFormProperties>({
		});

	}


	/** Contains information on the status of CloudTrail as a data source for the detector. */
	export interface CloudTrailConfigurationResult {

		/** Required */
		Status: DataSourceStatus;
	}

	/** Contains information on the status of CloudTrail as a data source for the detector. */
	export interface CloudTrailConfigurationResultFormProperties {

		/** Required */
		Status: FormControl<DataSourceStatus | null | undefined>,
	}
	export function CreateCloudTrailConfigurationResultFormGroup() {
		return new FormGroup<CloudTrailConfigurationResultFormProperties>({
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information on the status of DNS logs as a data source. */
	export interface DNSLogsConfigurationResult {

		/** Required */
		Status: DataSourceStatus;
	}

	/** Contains information on the status of DNS logs as a data source. */
	export interface DNSLogsConfigurationResultFormProperties {

		/** Required */
		Status: FormControl<DataSourceStatus | null | undefined>,
	}
	export function CreateDNSLogsConfigurationResultFormGroup() {
		return new FormGroup<DNSLogsConfigurationResultFormProperties>({
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information on the status of VPC flow logs as a data source. */
	export interface FlowLogsConfigurationResult {

		/** Required */
		Status: DataSourceStatus;
	}

	/** Contains information on the status of VPC flow logs as a data source. */
	export interface FlowLogsConfigurationResultFormProperties {

		/** Required */
		Status: FormControl<DataSourceStatus | null | undefined>,
	}
	export function CreateFlowLogsConfigurationResultFormGroup() {
		return new FormGroup<FlowLogsConfigurationResultFormProperties>({
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes whether S3 data event logs will be enabled as a data source. */
	export interface S3LogsConfigurationResult {

		/** Required */
		Status: DataSourceStatus;
	}

	/** Describes whether S3 data event logs will be enabled as a data source. */
	export interface S3LogsConfigurationResultFormProperties {

		/** Required */
		Status: FormControl<DataSourceStatus | null | undefined>,
	}
	export function CreateS3LogsConfigurationResultFormGroup() {
		return new FormGroup<S3LogsConfigurationResultFormProperties>({
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes whether any Kubernetes logs will be enabled as a data source. */
	export interface KubernetesConfigurationResult {

		/** Required */
		AuditLogs: KubernetesAuditLogsConfigurationResult;
	}

	/** Describes whether any Kubernetes logs will be enabled as a data source. */
	export interface KubernetesConfigurationResultFormProperties {
	}
	export function CreateKubernetesConfigurationResultFormGroup() {
		return new FormGroup<KubernetesConfigurationResultFormProperties>({
		});

	}


	/** Describes whether Kubernetes audit logs are enabled as a data source. */
	export interface KubernetesAuditLogsConfigurationResult {

		/** Required */
		Status: DataSourceStatus;
	}

	/** Describes whether Kubernetes audit logs are enabled as a data source. */
	export interface KubernetesAuditLogsConfigurationResultFormProperties {

		/** Required */
		Status: FormControl<DataSourceStatus | null | undefined>,
	}
	export function CreateKubernetesAuditLogsConfigurationResultFormGroup() {
		return new FormGroup<KubernetesAuditLogsConfigurationResultFormProperties>({
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** Contains information about a GuardDuty feature. */
	export interface DetectorFeatureConfigurationResult {
		Name?: DetectorFeatureResult;
		Status?: DataSourceStatus;
		UpdatedAt?: Date;
		AdditionalConfiguration?: Array<DetectorAdditionalConfigurationResult>;
	}

	/** Contains information about a GuardDuty feature. */
	export interface DetectorFeatureConfigurationResultFormProperties {
		Name: FormControl<DetectorFeatureResult | null | undefined>,
		Status: FormControl<DataSourceStatus | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDetectorFeatureConfigurationResultFormGroup() {
		return new FormGroup<DetectorFeatureConfigurationResultFormProperties>({
			Name: new FormControl<DetectorFeatureResult | null | undefined>(undefined),
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DetectorFeatureResult { FLOW_LOGS = 0, CLOUD_TRAIL = 1, DNS_LOGS = 2, S3_DATA_EVENTS = 3, EKS_AUDIT_LOGS = 4, EBS_MALWARE_PROTECTION = 5, RDS_LOGIN_EVENTS = 6, EKS_RUNTIME_MONITORING = 7, LAMBDA_NETWORK_LOGS = 8 }


	/** Information about the additional configuration. */
	export interface DetectorAdditionalConfigurationResult {
		Name?: FeatureAdditionalConfiguration;
		Status?: DataSourceStatus;
		UpdatedAt?: Date;
	}

	/** Information about the additional configuration. */
	export interface DetectorAdditionalConfigurationResultFormProperties {
		Name: FormControl<FeatureAdditionalConfiguration | null | undefined>,
		Status: FormControl<DataSourceStatus | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDetectorAdditionalConfigurationResultFormGroup() {
		return new FormGroup<DetectorAdditionalConfigurationResultFormProperties>({
			Name: new FormControl<FeatureAdditionalConfiguration | null | undefined>(undefined),
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetFilterResponse {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		Action: FilterAction;
		Rank?: number | null;

		/** Required */
		FindingCriteria: FindingCriteria;
		Tags?: TagMap;
	}
	export interface GetFilterResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Action: FormControl<FilterAction | null | undefined>,
		Rank: FormControl<number | null | undefined>,
	}
	export function CreateGetFilterResponseFormGroup() {
		return new FormGroup<GetFilterResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<FilterAction | null | undefined>(undefined, [Validators.required]),
			Rank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FilterAction { NOOP = 0, ARCHIVE = 1 }


	/** Contains information about the criteria used for querying findings. */
	export interface FindingCriteria {
		Criterion?: Criterion;
	}

	/** Contains information about the criteria used for querying findings. */
	export interface FindingCriteriaFormProperties {
	}
	export function CreateFindingCriteriaFormGroup() {
		return new FormGroup<FindingCriteriaFormProperties>({
		});

	}

	export interface GetFindingsResponse {

		/** Required */
		Findings: Array<Finding>;
	}
	export interface GetFindingsResponseFormProperties {
	}
	export function CreateGetFindingsResponseFormGroup() {
		return new FormGroup<GetFindingsResponseFormProperties>({
		});

	}


	/** Contains information about the finding, which is generated when abnormal or suspicious activity is detected. */
	export interface Finding {

		/** Required */
		AccountId: string;

		/** Required */
		Arn: string;
		Confidence?: number | null;

		/** Required */
		CreatedAt: string;
		Description?: string;

		/** Required */
		Id: string;
		Partition?: string;

		/** Required */
		Region: string;

		/** Required */
		Resource: Resource;

		/** Required */
		SchemaVersion: string;
		Service?: Service;

		/** Required */
		Severity: number;
		Title?: string;

		/** Required */
		Type: string;

		/** Required */
		UpdatedAt: string;
	}

	/** Contains information about the finding, which is generated when abnormal or suspicious activity is detected. */
	export interface FindingFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Confidence: FormControl<number | null | undefined>,

		/** Required */
		CreatedAt: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		Partition: FormControl<string | null | undefined>,

		/** Required */
		Region: FormControl<string | null | undefined>,

		/** Required */
		SchemaVersion: FormControl<string | null | undefined>,

		/** Required */
		Severity: FormControl<number | null | undefined>,
		Title: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<string | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<string | null | undefined>,
	}
	export function CreateFindingFormGroup() {
		return new FormGroup<FindingFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Confidence: new FormControl<number | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Partition: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SchemaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Severity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Title: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the Amazon Web Services resource associated with the activity that prompted GuardDuty to generate a finding. */
	export interface Resource {
		AccessKeyDetails?: AccessKeyDetails;
		S3BucketDetails?: Array<S3BucketDetail>;
		InstanceDetails?: InstanceDetails;
		EksClusterDetails?: EksClusterDetails;
		KubernetesDetails?: KubernetesDetails;
		ResourceType?: string;
		EbsVolumeDetails?: EbsVolumeDetails;
		EcsClusterDetails?: EcsClusterDetails;
		ContainerDetails?: Container;
		RdsDbInstanceDetails?: RdsDbInstanceDetails;
		RdsDbUserDetails?: RdsDbUserDetails;
		LambdaDetails?: LambdaDetails;
	}

	/** Contains information about the Amazon Web Services resource associated with the activity that prompted GuardDuty to generate a finding. */
	export interface ResourceFormProperties {
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the access keys. */
	export interface AccessKeyDetails {
		AccessKeyId?: string;
		PrincipalId?: string;
		UserName?: string;
		UserType?: string;
	}

	/** Contains information about the access keys. */
	export interface AccessKeyDetailsFormProperties {
		AccessKeyId: FormControl<string | null | undefined>,
		PrincipalId: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		UserType: FormControl<string | null | undefined>,
	}
	export function CreateAccessKeyDetailsFormGroup() {
		return new FormGroup<AccessKeyDetailsFormProperties>({
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
			PrincipalId: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			UserType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information on the S3 bucket. */
	export interface S3BucketDetail {
		Arn?: string;
		Name?: string;
		Type?: string;
		CreatedAt?: Date;
		Owner?: Owner;
		Tags?: Array<Tag>;
		DefaultServerSideEncryption?: DefaultServerSideEncryption;
		PublicAccess?: PublicAccess;
	}

	/** Contains information on the S3 bucket. */
	export interface S3BucketDetailFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateS3BucketDetailFormGroup() {
		return new FormGroup<S3BucketDetailFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains information on the owner of the bucket. */
	export interface Owner {
		Id?: string;
	}

	/** Contains information on the owner of the bucket. */
	export interface OwnerFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateOwnerFormGroup() {
		return new FormGroup<OwnerFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a tag associated with the EC2 instance. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** Contains information about a tag associated with the EC2 instance. */
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


	/** Contains information on the server side encryption method used in the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">S3 Server-Side Encryption</a> for more information. */
	export interface DefaultServerSideEncryption {
		EncryptionType?: string;
		KmsMasterKeyArn?: string;
	}

	/** Contains information on the server side encryption method used in the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">S3 Server-Side Encryption</a> for more information. */
	export interface DefaultServerSideEncryptionFormProperties {
		EncryptionType: FormControl<string | null | undefined>,
		KmsMasterKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateDefaultServerSideEncryptionFormGroup() {
		return new FormGroup<DefaultServerSideEncryptionFormProperties>({
			EncryptionType: new FormControl<string | null | undefined>(undefined),
			KmsMasterKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the public access policies that apply to the S3 bucket. */
	export interface PublicAccess {
		PermissionConfiguration?: PermissionConfiguration;
		EffectivePermission?: string;
	}

	/** Describes the public access policies that apply to the S3 bucket. */
	export interface PublicAccessFormProperties {
		EffectivePermission: FormControl<string | null | undefined>,
	}
	export function CreatePublicAccessFormGroup() {
		return new FormGroup<PublicAccessFormProperties>({
			EffectivePermission: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about how permissions are configured for the S3 bucket. */
	export interface PermissionConfiguration {
		BucketLevelPermissions?: BucketLevelPermissions;
		AccountLevelPermissions?: AccountLevelPermissions;
	}

	/** Contains information about how permissions are configured for the S3 bucket. */
	export interface PermissionConfigurationFormProperties {
	}
	export function CreatePermissionConfigurationFormGroup() {
		return new FormGroup<PermissionConfigurationFormProperties>({
		});

	}


	/** Contains information about the bucket level permissions for the S3 bucket. */
	export interface BucketLevelPermissions {
		AccessControlList?: AccessControlList;
		BucketPolicy?: BucketPolicy;
		BlockPublicAccess?: BlockPublicAccess;
	}

	/** Contains information about the bucket level permissions for the S3 bucket. */
	export interface BucketLevelPermissionsFormProperties {
	}
	export function CreateBucketLevelPermissionsFormGroup() {
		return new FormGroup<BucketLevelPermissionsFormProperties>({
		});

	}


	/** Contains information on the current access control policies for the bucket. */
	export interface AccessControlList {
		AllowsPublicReadAccess?: boolean | null;
		AllowsPublicWriteAccess?: boolean | null;
	}

	/** Contains information on the current access control policies for the bucket. */
	export interface AccessControlListFormProperties {
		AllowsPublicReadAccess: FormControl<boolean | null | undefined>,
		AllowsPublicWriteAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateAccessControlListFormGroup() {
		return new FormGroup<AccessControlListFormProperties>({
			AllowsPublicReadAccess: new FormControl<boolean | null | undefined>(undefined),
			AllowsPublicWriteAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information on the current bucket policies for the S3 bucket. */
	export interface BucketPolicy {
		AllowsPublicReadAccess?: boolean | null;
		AllowsPublicWriteAccess?: boolean | null;
	}

	/** Contains information on the current bucket policies for the S3 bucket. */
	export interface BucketPolicyFormProperties {
		AllowsPublicReadAccess: FormControl<boolean | null | undefined>,
		AllowsPublicWriteAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateBucketPolicyFormGroup() {
		return new FormGroup<BucketPolicyFormProperties>({
			AllowsPublicReadAccess: new FormControl<boolean | null | undefined>(undefined),
			AllowsPublicWriteAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information.  */
	export interface BlockPublicAccess {
		IgnorePublicAcls?: boolean | null;
		RestrictPublicBuckets?: boolean | null;
		BlockPublicAcls?: boolean | null;
		BlockPublicPolicy?: boolean | null;
	}

	/** Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information.  */
	export interface BlockPublicAccessFormProperties {
		IgnorePublicAcls: FormControl<boolean | null | undefined>,
		RestrictPublicBuckets: FormControl<boolean | null | undefined>,
		BlockPublicAcls: FormControl<boolean | null | undefined>,
		BlockPublicPolicy: FormControl<boolean | null | undefined>,
	}
	export function CreateBlockPublicAccessFormGroup() {
		return new FormGroup<BlockPublicAccessFormProperties>({
			IgnorePublicAcls: new FormControl<boolean | null | undefined>(undefined),
			RestrictPublicBuckets: new FormControl<boolean | null | undefined>(undefined),
			BlockPublicAcls: new FormControl<boolean | null | undefined>(undefined),
			BlockPublicPolicy: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about the account level permissions on the S3 bucket. */
	export interface AccountLevelPermissions {
		BlockPublicAccess?: BlockPublicAccess;
	}

	/** Contains information about the account level permissions on the S3 bucket. */
	export interface AccountLevelPermissionsFormProperties {
	}
	export function CreateAccountLevelPermissionsFormGroup() {
		return new FormGroup<AccountLevelPermissionsFormProperties>({
		});

	}


	/** Contains information about the details of an instance. */
	export interface InstanceDetails {
		AvailabilityZone?: string;
		IamInstanceProfile?: IamInstanceProfile;
		ImageDescription?: string;
		ImageId?: string;
		InstanceId?: string;
		InstanceState?: string;
		InstanceType?: string;
		OutpostArn?: string;
		LaunchTime?: string;
		NetworkInterfaces?: Array<NetworkInterface>;
		Platform?: string;
		ProductCodes?: Array<ProductCode>;
		Tags?: Array<Tag>;
	}

	/** Contains information about the details of an instance. */
	export interface InstanceDetailsFormProperties {
		AvailabilityZone: FormControl<string | null | undefined>,
		ImageDescription: FormControl<string | null | undefined>,
		ImageId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		InstanceState: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		OutpostArn: FormControl<string | null | undefined>,
		LaunchTime: FormControl<string | null | undefined>,
		Platform: FormControl<string | null | undefined>,
	}
	export function CreateInstanceDetailsFormGroup() {
		return new FormGroup<InstanceDetailsFormProperties>({
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			ImageDescription: new FormControl<string | null | undefined>(undefined),
			ImageId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			InstanceState: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			OutpostArn: new FormControl<string | null | undefined>(undefined),
			LaunchTime: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the EC2 instance profile. */
	export interface IamInstanceProfile {
		Arn?: string;
		Id?: string;
	}

	/** Contains information about the EC2 instance profile. */
	export interface IamInstanceProfileFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateIamInstanceProfileFormGroup() {
		return new FormGroup<IamInstanceProfileFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the elastic network interface of the EC2 instance. */
	export interface NetworkInterface {
		Ipv6Addresses?: Array<string>;
		NetworkInterfaceId?: string;
		PrivateDnsName?: string;
		PrivateIpAddress?: string;
		PrivateIpAddresses?: Array<PrivateIpAddressDetails>;
		PublicDnsName?: string;
		PublicIp?: string;
		SecurityGroups?: Array<SecurityGroup>;
		SubnetId?: string;
		VpcId?: string;
	}

	/** Contains information about the elastic network interface of the EC2 instance. */
	export interface NetworkInterfaceFormProperties {
		NetworkInterfaceId: FormControl<string | null | undefined>,
		PrivateDnsName: FormControl<string | null | undefined>,
		PrivateIpAddress: FormControl<string | null | undefined>,
		PublicDnsName: FormControl<string | null | undefined>,
		PublicIp: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
			PrivateDnsName: new FormControl<string | null | undefined>(undefined),
			PrivateIpAddress: new FormControl<string | null | undefined>(undefined),
			PublicDnsName: new FormControl<string | null | undefined>(undefined),
			PublicIp: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains other private IP address information of the EC2 instance. */
	export interface PrivateIpAddressDetails {
		PrivateDnsName?: string;
		PrivateIpAddress?: string;
	}

	/** Contains other private IP address information of the EC2 instance. */
	export interface PrivateIpAddressDetailsFormProperties {
		PrivateDnsName: FormControl<string | null | undefined>,
		PrivateIpAddress: FormControl<string | null | undefined>,
	}
	export function CreatePrivateIpAddressDetailsFormGroup() {
		return new FormGroup<PrivateIpAddressDetailsFormProperties>({
			PrivateDnsName: new FormControl<string | null | undefined>(undefined),
			PrivateIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the security groups associated with the EC2 instance. */
	export interface SecurityGroup {
		GroupId?: string;
		GroupName?: string;
	}

	/** Contains information about the security groups associated with the EC2 instance. */
	export interface SecurityGroupFormProperties {
		GroupId: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateSecurityGroupFormGroup() {
		return new FormGroup<SecurityGroupFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the product code for the EC2 instance. */
	export interface ProductCode {
		Code?: string;
		ProductType?: string;
	}

	/** Contains information about the product code for the EC2 instance. */
	export interface ProductCodeFormProperties {
		Code: FormControl<string | null | undefined>,
		ProductType: FormControl<string | null | undefined>,
	}
	export function CreateProductCodeFormGroup() {
		return new FormGroup<ProductCodeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			ProductType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the EKS cluster involved in a Kubernetes finding. */
	export interface EksClusterDetails {
		Name?: string;
		Arn?: string;
		VpcId?: string;
		Status?: string;
		Tags?: Array<Tag>;
		CreatedAt?: Date;
	}

	/** Details about the EKS cluster involved in a Kubernetes finding. */
	export interface EksClusterDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateEksClusterDetailsFormGroup() {
		return new FormGroup<EksClusterDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Details about Kubernetes resources such as a Kubernetes user or workload resource involved in a Kubernetes finding. */
	export interface KubernetesDetails {
		KubernetesUserDetails?: KubernetesUserDetails;
		KubernetesWorkloadDetails?: KubernetesWorkloadDetails;
	}

	/** Details about Kubernetes resources such as a Kubernetes user or workload resource involved in a Kubernetes finding. */
	export interface KubernetesDetailsFormProperties {
	}
	export function CreateKubernetesDetailsFormGroup() {
		return new FormGroup<KubernetesDetailsFormProperties>({
		});

	}


	/** Details about the Kubernetes user involved in a Kubernetes finding. */
	export interface KubernetesUserDetails {
		Username?: string;
		Uid?: string;
		Groups?: Array<string>;
		SessionName?: Array<string>;
	}

	/** Details about the Kubernetes user involved in a Kubernetes finding. */
	export interface KubernetesUserDetailsFormProperties {
		Username: FormControl<string | null | undefined>,
		Uid: FormControl<string | null | undefined>,
	}
	export function CreateKubernetesUserDetailsFormGroup() {
		return new FormGroup<KubernetesUserDetailsFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			Uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the Kubernetes workload involved in a Kubernetes finding. */
	export interface KubernetesWorkloadDetails {
		Name?: string;
		Type?: string;
		Uid?: string;
		Namespace?: string;
		HostNetwork?: boolean | null;
		Containers?: Array<Container>;
		Volumes?: Array<Volume>;
	}

	/** Details about the Kubernetes workload involved in a Kubernetes finding. */
	export interface KubernetesWorkloadDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Uid: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		HostNetwork: FormControl<boolean | null | undefined>,
	}
	export function CreateKubernetesWorkloadDetailsFormGroup() {
		return new FormGroup<KubernetesWorkloadDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Uid: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
			HostNetwork: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details of a container. */
	export interface Container {
		ContainerRuntime?: string;
		Id?: string;
		Name?: string;
		Image?: string;
		ImagePrefix?: string;
		VolumeMounts?: Array<VolumeMount>;
		SecurityContext?: SecurityContext;
	}

	/** Details of a container. */
	export interface ContainerFormProperties {
		ContainerRuntime: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Image: FormControl<string | null | undefined>,
		ImagePrefix: FormControl<string | null | undefined>,
	}
	export function CreateContainerFormGroup() {
		return new FormGroup<ContainerFormProperties>({
			ContainerRuntime: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Image: new FormControl<string | null | undefined>(undefined),
			ImagePrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container volume mount. */
	export interface VolumeMount {
		Name?: string;
		MountPath?: string;
	}

	/** Container volume mount. */
	export interface VolumeMountFormProperties {
		Name: FormControl<string | null | undefined>,
		MountPath: FormControl<string | null | undefined>,
	}
	export function CreateVolumeMountFormGroup() {
		return new FormGroup<VolumeMountFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			MountPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container security context. */
	export interface SecurityContext {
		Privileged?: boolean | null;
	}

	/** Container security context. */
	export interface SecurityContextFormProperties {
		Privileged: FormControl<boolean | null | undefined>,
	}
	export function CreateSecurityContextFormGroup() {
		return new FormGroup<SecurityContextFormProperties>({
			Privileged: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Volume used by the Kubernetes workload. */
	export interface Volume {
		Name?: string;
		HostPath?: HostPath;
	}

	/** Volume used by the Kubernetes workload. */
	export interface VolumeFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a pre-existing file or directory on the host machine that the volume maps to. */
	export interface HostPath {
		Path?: string;
	}

	/** Represents a pre-existing file or directory on the host machine that the volume maps to. */
	export interface HostPathFormProperties {
		Path: FormControl<string | null | undefined>,
	}
	export function CreateHostPathFormGroup() {
		return new FormGroup<HostPathFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains list of scanned and skipped EBS volumes with details. */
	export interface EbsVolumeDetails {
		ScannedVolumeDetails?: Array<VolumeDetail>;
		SkippedVolumeDetails?: Array<VolumeDetail>;
	}

	/** Contains list of scanned and skipped EBS volumes with details. */
	export interface EbsVolumeDetailsFormProperties {
	}
	export function CreateEbsVolumeDetailsFormGroup() {
		return new FormGroup<EbsVolumeDetailsFormProperties>({
		});

	}


	/** Contains information about the details of the ECS Cluster. */
	export interface EcsClusterDetails {
		Name?: string;
		Arn?: string;
		Status?: string;
		ActiveServicesCount?: number | null;
		RegisteredContainerInstancesCount?: number | null;
		RunningTasksCount?: number | null;
		Tags?: Array<Tag>;
		TaskDetails?: EcsTaskDetails;
	}

	/** Contains information about the details of the ECS Cluster. */
	export interface EcsClusterDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		ActiveServicesCount: FormControl<number | null | undefined>,
		RegisteredContainerInstancesCount: FormControl<number | null | undefined>,
		RunningTasksCount: FormControl<number | null | undefined>,
	}
	export function CreateEcsClusterDetailsFormGroup() {
		return new FormGroup<EcsClusterDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			ActiveServicesCount: new FormControl<number | null | undefined>(undefined),
			RegisteredContainerInstancesCount: new FormControl<number | null | undefined>(undefined),
			RunningTasksCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about the task in an ECS cluster. */
	export interface EcsTaskDetails {
		Arn?: string;
		DefinitionArn?: string;
		Version?: string;
		TaskCreatedAt?: Date;
		StartedAt?: Date;
		StartedBy?: string;
		Tags?: Array<Tag>;
		Volumes?: Array<Volume>;
		Containers?: Array<Container>;
		Group?: string;
	}

	/** Contains information about the task in an ECS cluster. */
	export interface EcsTaskDetailsFormProperties {
		Arn: FormControl<string | null | undefined>,
		DefinitionArn: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		TaskCreatedAt: FormControl<Date | null | undefined>,
		StartedAt: FormControl<Date | null | undefined>,
		StartedBy: FormControl<string | null | undefined>,
		Group: FormControl<string | null | undefined>,
	}
	export function CreateEcsTaskDetailsFormGroup() {
		return new FormGroup<EcsTaskDetailsFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DefinitionArn: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			TaskCreatedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
			StartedBy: new FormControl<string | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the resource type <code>RDSDBInstance</code> involved in a GuardDuty finding. */
	export interface RdsDbInstanceDetails {
		DbInstanceIdentifier?: string;
		Engine?: string;
		EngineVersion?: string;
		DbClusterIdentifier?: string;
		DbInstanceArn?: string;
		Tags?: Array<Tag>;
	}

	/** Contains information about the resource type <code>RDSDBInstance</code> involved in a GuardDuty finding. */
	export interface RdsDbInstanceDetailsFormProperties {
		DbInstanceIdentifier: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		DbClusterIdentifier: FormControl<string | null | undefined>,
		DbInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateRdsDbInstanceDetailsFormGroup() {
		return new FormGroup<RdsDbInstanceDetailsFormProperties>({
			DbInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			DbClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			DbInstanceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the user and authentication details for a database instance involved in the finding. */
	export interface RdsDbUserDetails {
		User?: string;
		Application?: string;
		Database?: string;
		Ssl?: string;
		AuthMethod?: string;
	}

	/** Contains information about the user and authentication details for a database instance involved in the finding. */
	export interface RdsDbUserDetailsFormProperties {
		User: FormControl<string | null | undefined>,
		Application: FormControl<string | null | undefined>,
		Database: FormControl<string | null | undefined>,
		Ssl: FormControl<string | null | undefined>,
		AuthMethod: FormControl<string | null | undefined>,
	}
	export function CreateRdsDbUserDetailsFormGroup() {
		return new FormGroup<RdsDbUserDetailsFormProperties>({
			User: new FormControl<string | null | undefined>(undefined),
			Application: new FormControl<string | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined),
			Ssl: new FormControl<string | null | undefined>(undefined),
			AuthMethod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the Lambda function involved in the finding. */
	export interface LambdaDetails {
		FunctionArn?: string;
		FunctionName?: string;
		Description?: string;
		LastModifiedAt?: Date;
		RevisionId?: string;
		FunctionVersion?: string;
		Role?: string;
		VpcConfig?: VpcConfig;
		Tags?: Array<Tag>;
	}

	/** Information about the Lambda function involved in the finding. */
	export interface LambdaDetailsFormProperties {
		FunctionArn: FormControl<string | null | undefined>,
		FunctionName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastModifiedAt: FormControl<Date | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
		FunctionVersion: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
	}
	export function CreateLambdaDetailsFormGroup() {
		return new FormGroup<LambdaDetailsFormProperties>({
			FunctionArn: new FormControl<string | null | undefined>(undefined),
			FunctionName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastModifiedAt: new FormControl<Date | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
			FunctionVersion: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Amazon Virtual Private Cloud configuration details associated with your Lambda function. */
	export interface VpcConfig {
		SubnetIds?: Array<string>;
		VpcId?: string;
		SecurityGroups?: Array<SecurityGroup>;
	}

	/** Amazon Virtual Private Cloud configuration details associated with your Lambda function. */
	export interface VpcConfigFormProperties {
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigFormGroup() {
		return new FormGroup<VpcConfigFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains additional information about the generated finding. */
	export interface Service {
		Action?: Action;
		Evidence?: Evidence;
		Archived?: boolean | null;
		Count?: number | null;
		DetectorId?: string;
		EventFirstSeen?: string;
		EventLastSeen?: string;
		ResourceRole?: string;
		ServiceName?: string;
		UserFeedback?: string;
		AdditionalInfo?: ServiceAdditionalInfo;
		FeatureName?: string;
		EbsVolumeScanDetails?: EbsVolumeScanDetails;
		RuntimeDetails?: RuntimeDetails;
	}

	/** Contains additional information about the generated finding. */
	export interface ServiceFormProperties {
		Archived: FormControl<boolean | null | undefined>,
		Count: FormControl<number | null | undefined>,
		DetectorId: FormControl<string | null | undefined>,
		EventFirstSeen: FormControl<string | null | undefined>,
		EventLastSeen: FormControl<string | null | undefined>,
		ResourceRole: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		UserFeedback: FormControl<string | null | undefined>,
		FeatureName: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			Archived: new FormControl<boolean | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
			DetectorId: new FormControl<string | null | undefined>(undefined),
			EventFirstSeen: new FormControl<string | null | undefined>(undefined),
			EventLastSeen: new FormControl<string | null | undefined>(undefined),
			ResourceRole: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			UserFeedback: new FormControl<string | null | undefined>(undefined),
			FeatureName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about actions. */
	export interface Action {
		ActionType?: string;
		AwsApiCallAction?: AwsApiCallAction;
		DnsRequestAction?: DnsRequestAction;
		NetworkConnectionAction?: NetworkConnectionAction;
		PortProbeAction?: PortProbeAction;
		KubernetesApiCallAction?: KubernetesApiCallAction;
		RdsLoginAttemptAction?: RdsLoginAttemptAction;
	}

	/** Contains information about actions. */
	export interface ActionFormProperties {
		ActionType: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			ActionType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the API action. */
	export interface AwsApiCallAction {
		Api?: string;
		CallerType?: string;
		DomainDetails?: DomainDetails;
		ErrorCode?: string;
		UserAgent?: string;
		RemoteIpDetails?: RemoteIpDetails;
		ServiceName?: string;
		RemoteAccountDetails?: RemoteAccountDetails;
		AffectedResources?: AffectedResources;
	}

	/** Contains information about the API action. */
	export interface AwsApiCallActionFormProperties {
		Api: FormControl<string | null | undefined>,
		CallerType: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		UserAgent: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
	}
	export function CreateAwsApiCallActionFormGroup() {
		return new FormGroup<AwsApiCallActionFormProperties>({
			Api: new FormControl<string | null | undefined>(undefined),
			CallerType: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			UserAgent: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the domain. */
	export interface DomainDetails {
		Domain?: string;
	}

	/** Contains information about the domain. */
	export interface DomainDetailsFormProperties {
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateDomainDetailsFormGroup() {
		return new FormGroup<DomainDetailsFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the remote IP address of the connection. */
	export interface RemoteIpDetails {
		City?: City;
		Country?: Country;
		GeoLocation?: GeoLocation;
		IpAddressV4?: string;
		Organization?: Organization;
	}

	/** Contains information about the remote IP address of the connection. */
	export interface RemoteIpDetailsFormProperties {
		IpAddressV4: FormControl<string | null | undefined>,
	}
	export function CreateRemoteIpDetailsFormGroup() {
		return new FormGroup<RemoteIpDetailsFormProperties>({
			IpAddressV4: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the city associated with the IP address. */
	export interface City {
		CityName?: string;
	}

	/** Contains information about the city associated with the IP address. */
	export interface CityFormProperties {
		CityName: FormControl<string | null | undefined>,
	}
	export function CreateCityFormGroup() {
		return new FormGroup<CityFormProperties>({
			CityName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the country where the remote IP address is located. */
	export interface Country {
		CountryCode?: string;
		CountryName?: string;
	}

	/** Contains information about the country where the remote IP address is located. */
	export interface CountryFormProperties {
		CountryCode: FormControl<string | null | undefined>,
		CountryName: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			CountryCode: new FormControl<string | null | undefined>(undefined),
			CountryName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the location of the remote IP address. */
	export interface GeoLocation {
		Lat?: number | null;
		Lon?: number | null;
	}

	/** Contains information about the location of the remote IP address. */
	export interface GeoLocationFormProperties {
		Lat: FormControl<number | null | undefined>,
		Lon: FormControl<number | null | undefined>,
	}
	export function CreateGeoLocationFormGroup() {
		return new FormGroup<GeoLocationFormProperties>({
			Lat: new FormControl<number | null | undefined>(undefined),
			Lon: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about the ISP organization of the remote IP address. */
	export interface Organization {
		Asn?: string;
		AsnOrg?: string;
		Isp?: string;
		Org?: string;
	}

	/** Contains information about the ISP organization of the remote IP address. */
	export interface OrganizationFormProperties {
		Asn: FormControl<string | null | undefined>,
		AsnOrg: FormControl<string | null | undefined>,
		Isp: FormControl<string | null | undefined>,
		Org: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
			Asn: new FormControl<string | null | undefined>(undefined),
			AsnOrg: new FormControl<string | null | undefined>(undefined),
			Isp: new FormControl<string | null | undefined>(undefined),
			Org: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about the remote Amazon Web Services account that made the API call. */
	export interface RemoteAccountDetails {
		AccountId?: string;
		Affiliated?: boolean | null;
	}

	/** Contains details about the remote Amazon Web Services account that made the API call. */
	export interface RemoteAccountDetailsFormProperties {
		AccountId: FormControl<string | null | undefined>,
		Affiliated: FormControl<boolean | null | undefined>,
	}
	export function CreateRemoteAccountDetailsFormGroup() {
		return new FormGroup<RemoteAccountDetailsFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			Affiliated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AffectedResources {
	}
	export interface AffectedResourcesFormProperties {
	}
	export function CreateAffectedResourcesFormGroup() {
		return new FormGroup<AffectedResourcesFormProperties>({
		});

	}


	/** Contains information about the DNS_REQUEST action described in this finding. */
	export interface DnsRequestAction {
		Domain?: string;
		Protocol?: string;
		Blocked?: boolean | null;
	}

	/** Contains information about the DNS_REQUEST action described in this finding. */
	export interface DnsRequestActionFormProperties {
		Domain: FormControl<string | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
		Blocked: FormControl<boolean | null | undefined>,
	}
	export function CreateDnsRequestActionFormGroup() {
		return new FormGroup<DnsRequestActionFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
			Blocked: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about the NETWORK_CONNECTION action described in the finding. */
	export interface NetworkConnectionAction {
		Blocked?: boolean | null;
		ConnectionDirection?: string;
		LocalPortDetails?: LocalPortDetails;
		Protocol?: string;
		LocalIpDetails?: LocalIpDetails;
		RemoteIpDetails?: RemoteIpDetails;
		RemotePortDetails?: RemotePortDetails;
	}

	/** Contains information about the NETWORK_CONNECTION action described in the finding. */
	export interface NetworkConnectionActionFormProperties {
		Blocked: FormControl<boolean | null | undefined>,
		ConnectionDirection: FormControl<string | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConnectionActionFormGroup() {
		return new FormGroup<NetworkConnectionActionFormProperties>({
			Blocked: new FormControl<boolean | null | undefined>(undefined),
			ConnectionDirection: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the port for the local connection. */
	export interface LocalPortDetails {
		Port?: number | null;
		PortName?: string;
	}

	/** Contains information about the port for the local connection. */
	export interface LocalPortDetailsFormProperties {
		Port: FormControl<number | null | undefined>,
		PortName: FormControl<string | null | undefined>,
	}
	export function CreateLocalPortDetailsFormGroup() {
		return new FormGroup<LocalPortDetailsFormProperties>({
			Port: new FormControl<number | null | undefined>(undefined),
			PortName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the local IP address of the connection. */
	export interface LocalIpDetails {
		IpAddressV4?: string;
	}

	/** Contains information about the local IP address of the connection. */
	export interface LocalIpDetailsFormProperties {
		IpAddressV4: FormControl<string | null | undefined>,
	}
	export function CreateLocalIpDetailsFormGroup() {
		return new FormGroup<LocalIpDetailsFormProperties>({
			IpAddressV4: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the remote port. */
	export interface RemotePortDetails {
		Port?: number | null;
		PortName?: string;
	}

	/** Contains information about the remote port. */
	export interface RemotePortDetailsFormProperties {
		Port: FormControl<number | null | undefined>,
		PortName: FormControl<string | null | undefined>,
	}
	export function CreateRemotePortDetailsFormGroup() {
		return new FormGroup<RemotePortDetailsFormProperties>({
			Port: new FormControl<number | null | undefined>(undefined),
			PortName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the PORT_PROBE action described in the finding. */
	export interface PortProbeAction {
		Blocked?: boolean | null;
		PortProbeDetails?: Array<PortProbeDetail>;
	}

	/** Contains information about the PORT_PROBE action described in the finding. */
	export interface PortProbeActionFormProperties {
		Blocked: FormControl<boolean | null | undefined>,
	}
	export function CreatePortProbeActionFormGroup() {
		return new FormGroup<PortProbeActionFormProperties>({
			Blocked: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about the port probe details. */
	export interface PortProbeDetail {
		LocalPortDetails?: LocalPortDetails;
		LocalIpDetails?: LocalIpDetails;
		RemoteIpDetails?: RemoteIpDetails;
	}

	/** Contains information about the port probe details. */
	export interface PortProbeDetailFormProperties {
	}
	export function CreatePortProbeDetailFormGroup() {
		return new FormGroup<PortProbeDetailFormProperties>({
		});

	}


	/** Information about the Kubernetes API call action described in this finding. */
	export interface KubernetesApiCallAction {
		RequestUri?: string;
		Verb?: string;
		SourceIps?: Array<string>;
		UserAgent?: string;
		RemoteIpDetails?: RemoteIpDetails;
		StatusCode?: number | null;
		Parameters?: string;
	}

	/** Information about the Kubernetes API call action described in this finding. */
	export interface KubernetesApiCallActionFormProperties {
		RequestUri: FormControl<string | null | undefined>,
		Verb: FormControl<string | null | undefined>,
		UserAgent: FormControl<string | null | undefined>,
		StatusCode: FormControl<number | null | undefined>,
		Parameters: FormControl<string | null | undefined>,
	}
	export function CreateKubernetesApiCallActionFormGroup() {
		return new FormGroup<KubernetesApiCallActionFormProperties>({
			RequestUri: new FormControl<string | null | undefined>(undefined),
			Verb: new FormControl<string | null | undefined>(undefined),
			UserAgent: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<number | null | undefined>(undefined),
			Parameters: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates that a login attempt was made to the potentially compromised database from a remote IP address. */
	export interface RdsLoginAttemptAction {
		RemoteIpDetails?: RemoteIpDetails;
		LoginAttributes?: Array<LoginAttribute>;
	}

	/** Indicates that a login attempt was made to the potentially compromised database from a remote IP address. */
	export interface RdsLoginAttemptActionFormProperties {
	}
	export function CreateRdsLoginAttemptActionFormGroup() {
		return new FormGroup<RdsLoginAttemptActionFormProperties>({
		});

	}


	/** Information about the login attempts. */
	export interface LoginAttribute {
		User?: string;
		Application?: string;
		FailedLoginAttempts?: number | null;
		SuccessfulLoginAttempts?: number | null;
	}

	/** Information about the login attempts. */
	export interface LoginAttributeFormProperties {
		User: FormControl<string | null | undefined>,
		Application: FormControl<string | null | undefined>,
		FailedLoginAttempts: FormControl<number | null | undefined>,
		SuccessfulLoginAttempts: FormControl<number | null | undefined>,
	}
	export function CreateLoginAttributeFormGroup() {
		return new FormGroup<LoginAttributeFormProperties>({
			User: new FormControl<string | null | undefined>(undefined),
			Application: new FormControl<string | null | undefined>(undefined),
			FailedLoginAttempts: new FormControl<number | null | undefined>(undefined),
			SuccessfulLoginAttempts: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about the reason that the finding was generated. */
	export interface Evidence {
		ThreatIntelligenceDetails?: Array<ThreatIntelligenceDetail>;
	}

	/** Contains information about the reason that the finding was generated. */
	export interface EvidenceFormProperties {
	}
	export function CreateEvidenceFormGroup() {
		return new FormGroup<EvidenceFormProperties>({
		});

	}


	/** An instance of a threat intelligence detail that constitutes evidence for the finding. */
	export interface ThreatIntelligenceDetail {
		ThreatListName?: string;
		ThreatNames?: Array<string>;
	}

	/** An instance of a threat intelligence detail that constitutes evidence for the finding. */
	export interface ThreatIntelligenceDetailFormProperties {
		ThreatListName: FormControl<string | null | undefined>,
	}
	export function CreateThreatIntelligenceDetailFormGroup() {
		return new FormGroup<ThreatIntelligenceDetailFormProperties>({
			ThreatListName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional information about the generated finding. */
	export interface ServiceAdditionalInfo {
		Value?: string;
		Type?: string;
	}

	/** Additional information about the generated finding. */
	export interface ServiceAdditionalInfoFormProperties {
		Value: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateServiceAdditionalInfoFormGroup() {
		return new FormGroup<ServiceAdditionalInfoFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details from the malware scan that created a finding. */
	export interface EbsVolumeScanDetails {
		ScanId?: string;
		ScanStartedAt?: Date;
		ScanCompletedAt?: Date;
		TriggerFindingId?: string;
		Sources?: Array<string>;
		ScanDetections?: ScanDetections;
		ScanType?: ScanType;
	}

	/** Contains details from the malware scan that created a finding. */
	export interface EbsVolumeScanDetailsFormProperties {
		ScanId: FormControl<string | null | undefined>,
		ScanStartedAt: FormControl<Date | null | undefined>,
		ScanCompletedAt: FormControl<Date | null | undefined>,
		TriggerFindingId: FormControl<string | null | undefined>,
		ScanType: FormControl<ScanType | null | undefined>,
	}
	export function CreateEbsVolumeScanDetailsFormGroup() {
		return new FormGroup<EbsVolumeScanDetailsFormProperties>({
			ScanId: new FormControl<string | null | undefined>(undefined),
			ScanStartedAt: new FormControl<Date | null | undefined>(undefined),
			ScanCompletedAt: new FormControl<Date | null | undefined>(undefined),
			TriggerFindingId: new FormControl<string | null | undefined>(undefined),
			ScanType: new FormControl<ScanType | null | undefined>(undefined),
		});

	}


	/** Contains a complete view providing malware scan result details. */
	export interface ScanDetections {
		ScannedItemCount?: ScannedItemCount;
		ThreatsDetectedItemCount?: ThreatsDetectedItemCount;
		HighestSeverityThreatDetails?: HighestSeverityThreatDetails;
		ThreatDetectedByName?: ThreatDetectedByName;
	}

	/** Contains a complete view providing malware scan result details. */
	export interface ScanDetectionsFormProperties {
	}
	export function CreateScanDetectionsFormGroup() {
		return new FormGroup<ScanDetectionsFormProperties>({
		});

	}


	/** Total number of scanned files. */
	export interface ScannedItemCount {
		TotalGb?: number | null;
		Files?: number | null;
		Volumes?: number | null;
	}

	/** Total number of scanned files. */
	export interface ScannedItemCountFormProperties {
		TotalGb: FormControl<number | null | undefined>,
		Files: FormControl<number | null | undefined>,
		Volumes: FormControl<number | null | undefined>,
	}
	export function CreateScannedItemCountFormGroup() {
		return new FormGroup<ScannedItemCountFormProperties>({
			TotalGb: new FormControl<number | null | undefined>(undefined),
			Files: new FormControl<number | null | undefined>(undefined),
			Volumes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains total number of infected files. */
	export interface ThreatsDetectedItemCount {
		Files?: number | null;
	}

	/** Contains total number of infected files. */
	export interface ThreatsDetectedItemCountFormProperties {
		Files: FormControl<number | null | undefined>,
	}
	export function CreateThreatsDetectedItemCountFormGroup() {
		return new FormGroup<ThreatsDetectedItemCountFormProperties>({
			Files: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains details of the highest severity threat detected during scan and number of infected files. */
	export interface HighestSeverityThreatDetails {
		Severity?: string;
		ThreatName?: string;
		Count?: number | null;
	}

	/** Contains details of the highest severity threat detected during scan and number of infected files. */
	export interface HighestSeverityThreatDetailsFormProperties {
		Severity: FormControl<string | null | undefined>,
		ThreatName: FormControl<string | null | undefined>,
		Count: FormControl<number | null | undefined>,
	}
	export function CreateHighestSeverityThreatDetailsFormGroup() {
		return new FormGroup<HighestSeverityThreatDetailsFormProperties>({
			Severity: new FormControl<string | null | undefined>(undefined),
			ThreatName: new FormControl<string | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains details about identified threats organized by threat name. */
	export interface ThreatDetectedByName {
		ItemCount?: number | null;
		UniqueThreatNameCount?: number | null;
		Shortened?: boolean | null;
		ThreatNames?: Array<ScanThreatName>;
	}

	/** Contains details about identified threats organized by threat name. */
	export interface ThreatDetectedByNameFormProperties {
		ItemCount: FormControl<number | null | undefined>,
		UniqueThreatNameCount: FormControl<number | null | undefined>,
		Shortened: FormControl<boolean | null | undefined>,
	}
	export function CreateThreatDetectedByNameFormGroup() {
		return new FormGroup<ThreatDetectedByNameFormProperties>({
			ItemCount: new FormControl<number | null | undefined>(undefined),
			UniqueThreatNameCount: new FormControl<number | null | undefined>(undefined),
			Shortened: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains files infected with the given threat providing details of malware name and severity. */
	export interface ScanThreatName {
		Name?: string;
		Severity?: string;
		ItemCount?: number | null;
		FilePaths?: Array<ScanFilePath>;
	}

	/** Contains files infected with the given threat providing details of malware name and severity. */
	export interface ScanThreatNameFormProperties {
		Name: FormControl<string | null | undefined>,
		Severity: FormControl<string | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
	}
	export function CreateScanThreatNameFormGroup() {
		return new FormGroup<ScanThreatNameFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<string | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains details of infected file including name, file path and hash. */
	export interface ScanFilePath {
		FilePath?: string;
		VolumeArn?: string;
		Hash?: string;
		FileName?: string;
	}

	/** Contains details of infected file including name, file path and hash. */
	export interface ScanFilePathFormProperties {
		FilePath: FormControl<string | null | undefined>,
		VolumeArn: FormControl<string | null | undefined>,
		Hash: FormControl<string | null | undefined>,
		FileName: FormControl<string | null | undefined>,
	}
	export function CreateScanFilePathFormGroup() {
		return new FormGroup<ScanFilePathFormProperties>({
			FilePath: new FormControl<string | null | undefined>(undefined),
			VolumeArn: new FormControl<string | null | undefined>(undefined),
			Hash: new FormControl<string | null | undefined>(undefined),
			FileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the process and any required context values for a specific finding. */
	export interface RuntimeDetails {
		Process?: ProcessDetails;
		Context?: RuntimeContext;
	}

	/** Information about the process and any required context values for a specific finding. */
	export interface RuntimeDetailsFormProperties {
	}
	export function CreateRuntimeDetailsFormGroup() {
		return new FormGroup<RuntimeDetailsFormProperties>({
		});

	}


	/** Information about the observed process. */
	export interface ProcessDetails {
		Name?: string;
		ExecutablePath?: string;
		ExecutableSha256?: string;
		NamespacePid?: number | null;
		Pwd?: string;
		Pid?: number | null;
		StartTime?: Date;
		Uuid?: string;
		ParentUuid?: string;
		User?: string;
		UserId?: number | null;
		Euid?: number | null;
		Lineage?: Array<LineageObject>;
	}

	/** Information about the observed process. */
	export interface ProcessDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		ExecutablePath: FormControl<string | null | undefined>,
		ExecutableSha256: FormControl<string | null | undefined>,
		NamespacePid: FormControl<number | null | undefined>,
		Pwd: FormControl<string | null | undefined>,
		Pid: FormControl<number | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		Uuid: FormControl<string | null | undefined>,
		ParentUuid: FormControl<string | null | undefined>,
		User: FormControl<string | null | undefined>,
		UserId: FormControl<number | null | undefined>,
		Euid: FormControl<number | null | undefined>,
	}
	export function CreateProcessDetailsFormGroup() {
		return new FormGroup<ProcessDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ExecutablePath: new FormControl<string | null | undefined>(undefined),
			ExecutableSha256: new FormControl<string | null | undefined>(undefined),
			NamespacePid: new FormControl<number | null | undefined>(undefined),
			Pwd: new FormControl<string | null | undefined>(undefined),
			Pid: new FormControl<number | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			Uuid: new FormControl<string | null | undefined>(undefined),
			ParentUuid: new FormControl<string | null | undefined>(undefined),
			User: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<number | null | undefined>(undefined),
			Euid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the runtime process details. */
	export interface LineageObject {
		StartTime?: Date;
		NamespacePid?: number | null;
		UserId?: number | null;
		Name?: string;
		Pid?: number | null;
		Uuid?: string;
		ExecutablePath?: string;
		Euid?: number | null;
		ParentUuid?: string;
	}

	/** Information about the runtime process details. */
	export interface LineageObjectFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		NamespacePid: FormControl<number | null | undefined>,
		UserId: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Pid: FormControl<number | null | undefined>,
		Uuid: FormControl<string | null | undefined>,
		ExecutablePath: FormControl<string | null | undefined>,
		Euid: FormControl<number | null | undefined>,
		ParentUuid: FormControl<string | null | undefined>,
	}
	export function CreateLineageObjectFormGroup() {
		return new FormGroup<LineageObjectFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			NamespacePid: new FormControl<number | null | undefined>(undefined),
			UserId: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Pid: new FormControl<number | null | undefined>(undefined),
			Uuid: new FormControl<string | null | undefined>(undefined),
			ExecutablePath: new FormControl<string | null | undefined>(undefined),
			Euid: new FormControl<number | null | undefined>(undefined),
			ParentUuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional information about the suspicious activity. */
	export interface RuntimeContext {
		ModifyingProcess?: ProcessDetails;
		ModifiedAt?: Date;
		ScriptPath?: string;
		LibraryPath?: string;
		LdPreloadValue?: string;
		SocketPath?: string;
		RuncBinaryPath?: string;
		ReleaseAgentPath?: string;
		MountSource?: string;
		MountTarget?: string;
		FileSystemType?: string;
		Flags?: Array<string>;
		ModuleName?: string;
		ModuleFilePath?: string;
		ModuleSha256?: string;
		ShellHistoryFilePath?: string;
		TargetProcess?: ProcessDetails;
		AddressFamily?: string;
		IanaProtocolNumber?: number | null;
		MemoryRegions?: Array<string>;
	}

	/** Additional information about the suspicious activity. */
	export interface RuntimeContextFormProperties {
		ModifiedAt: FormControl<Date | null | undefined>,
		ScriptPath: FormControl<string | null | undefined>,
		LibraryPath: FormControl<string | null | undefined>,
		LdPreloadValue: FormControl<string | null | undefined>,
		SocketPath: FormControl<string | null | undefined>,
		RuncBinaryPath: FormControl<string | null | undefined>,
		ReleaseAgentPath: FormControl<string | null | undefined>,
		MountSource: FormControl<string | null | undefined>,
		MountTarget: FormControl<string | null | undefined>,
		FileSystemType: FormControl<string | null | undefined>,
		ModuleName: FormControl<string | null | undefined>,
		ModuleFilePath: FormControl<string | null | undefined>,
		ModuleSha256: FormControl<string | null | undefined>,
		ShellHistoryFilePath: FormControl<string | null | undefined>,
		AddressFamily: FormControl<string | null | undefined>,
		IanaProtocolNumber: FormControl<number | null | undefined>,
	}
	export function CreateRuntimeContextFormGroup() {
		return new FormGroup<RuntimeContextFormProperties>({
			ModifiedAt: new FormControl<Date | null | undefined>(undefined),
			ScriptPath: new FormControl<string | null | undefined>(undefined),
			LibraryPath: new FormControl<string | null | undefined>(undefined),
			LdPreloadValue: new FormControl<string | null | undefined>(undefined),
			SocketPath: new FormControl<string | null | undefined>(undefined),
			RuncBinaryPath: new FormControl<string | null | undefined>(undefined),
			ReleaseAgentPath: new FormControl<string | null | undefined>(undefined),
			MountSource: new FormControl<string | null | undefined>(undefined),
			MountTarget: new FormControl<string | null | undefined>(undefined),
			FileSystemType: new FormControl<string | null | undefined>(undefined),
			ModuleName: new FormControl<string | null | undefined>(undefined),
			ModuleFilePath: new FormControl<string | null | undefined>(undefined),
			ModuleSha256: new FormControl<string | null | undefined>(undefined),
			ShellHistoryFilePath: new FormControl<string | null | undefined>(undefined),
			AddressFamily: new FormControl<string | null | undefined>(undefined),
			IanaProtocolNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFindingsStatisticsResponse {

		/** Required */
		FindingStatistics: FindingStatistics;
	}
	export interface GetFindingsStatisticsResponseFormProperties {
	}
	export function CreateGetFindingsStatisticsResponseFormGroup() {
		return new FormGroup<GetFindingsStatisticsResponseFormProperties>({
		});

	}


	/** Contains information about finding statistics. */
	export interface FindingStatistics {
		CountBySeverity?: CountBySeverity;
	}

	/** Contains information about finding statistics. */
	export interface FindingStatisticsFormProperties {
	}
	export function CreateFindingStatisticsFormGroup() {
		return new FormGroup<FindingStatisticsFormProperties>({
		});

	}

	export interface CountBySeverity {
	}
	export interface CountBySeverityFormProperties {
	}
	export function CreateCountBySeverityFormGroup() {
		return new FormGroup<CountBySeverityFormProperties>({
		});

	}

	export enum FindingStatisticType { COUNT_BY_SEVERITY = 0 }

	export interface GetIPSetResponse {

		/** Required */
		Name: string;

		/** Required */
		Format: IpSetFormat;

		/** Required */
		Location: string;

		/** Required */
		Status: IpSetStatus;
		Tags?: TagMap;
	}
	export interface GetIPSetResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Format: FormControl<IpSetFormat | null | undefined>,

		/** Required */
		Location: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<IpSetStatus | null | undefined>,
	}
	export function CreateGetIPSetResponseFormGroup() {
		return new FormGroup<GetIPSetResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<IpSetFormat | null | undefined>(undefined, [Validators.required]),
			Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<IpSetStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IpSetFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export enum IpSetStatus { INACTIVE = 0, ACTIVATING = 1, ACTIVE = 2, DEACTIVATING = 3, ERROR = 4, DELETE_PENDING = 5, DELETED = 6 }

	export interface GetInvitationsCountResponse {
		InvitationsCount?: number | null;
	}
	export interface GetInvitationsCountResponseFormProperties {
		InvitationsCount: FormControl<number | null | undefined>,
	}
	export function CreateGetInvitationsCountResponseFormGroup() {
		return new FormGroup<GetInvitationsCountResponseFormProperties>({
			InvitationsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMalwareScanSettingsResponse {
		ScanResourceCriteria?: ScanResourceCriteria;
		EbsSnapshotPreservation?: EbsSnapshotPreservation;
	}
	export interface GetMalwareScanSettingsResponseFormProperties {
		EbsSnapshotPreservation: FormControl<EbsSnapshotPreservation | null | undefined>,
	}
	export function CreateGetMalwareScanSettingsResponseFormGroup() {
		return new FormGroup<GetMalwareScanSettingsResponseFormProperties>({
			EbsSnapshotPreservation: new FormControl<EbsSnapshotPreservation | null | undefined>(undefined),
		});

	}


	/** Contains information about criteria used to filter resources before triggering malware scan. */
	export interface ScanResourceCriteria {
		Include?: ScanCriterion;
		Exclude?: ScanCriterion;
	}

	/** Contains information about criteria used to filter resources before triggering malware scan. */
	export interface ScanResourceCriteriaFormProperties {
	}
	export function CreateScanResourceCriteriaFormGroup() {
		return new FormGroup<ScanResourceCriteriaFormProperties>({
		});

	}


	/** Represents a map of resource properties that match specified conditions and values when triggering malware scans. */
	export interface ScanCriterion {
	}

	/** Represents a map of resource properties that match specified conditions and values when triggering malware scans. */
	export interface ScanCriterionFormProperties {
	}
	export function CreateScanCriterionFormGroup() {
		return new FormGroup<ScanCriterionFormProperties>({
		});

	}

	export enum EbsSnapshotPreservation { NO_RETENTION = 0, RETENTION_WITH_FINDING = 1 }


	/** This output is deprecated, use GetAdministratorAccountResponse instead */
	export interface GetMasterAccountResponse {

		/** Required */
		Master: Master;
	}

	/** This output is deprecated, use GetAdministratorAccountResponse instead */
	export interface GetMasterAccountResponseFormProperties {
	}
	export function CreateGetMasterAccountResponseFormGroup() {
		return new FormGroup<GetMasterAccountResponseFormProperties>({
		});

	}


	/** Contains information about the administrator account and invitation. */
	export interface Master {
		AccountId?: string;
		InvitationId?: string;
		RelationshipStatus?: string;
		InvitedAt?: string;
	}

	/** Contains information about the administrator account and invitation. */
	export interface MasterFormProperties {
		AccountId: FormControl<string | null | undefined>,
		InvitationId: FormControl<string | null | undefined>,
		RelationshipStatus: FormControl<string | null | undefined>,
		InvitedAt: FormControl<string | null | undefined>,
	}
	export function CreateMasterFormGroup() {
		return new FormGroup<MasterFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			InvitationId: new FormControl<string | null | undefined>(undefined),
			RelationshipStatus: new FormControl<string | null | undefined>(undefined),
			InvitedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMemberDetectorsResponse {

		/** Required */
		MemberDataSourceConfigurations: Array<MemberDataSourceConfiguration>;

		/** Required */
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface GetMemberDetectorsResponseFormProperties {
	}
	export function CreateGetMemberDetectorsResponseFormGroup() {
		return new FormGroup<GetMemberDetectorsResponseFormProperties>({
		});

	}


	/** Contains information on which data sources are enabled for a member account. */
	export interface MemberDataSourceConfiguration {

		/** Required */
		AccountId: string;
		DataSources?: DataSourceConfigurationsResult;
		Features?: Array<MemberFeaturesConfigurationResult>;
	}

	/** Contains information on which data sources are enabled for a member account. */
	export interface MemberDataSourceConfigurationFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateMemberDataSourceConfigurationFormGroup() {
		return new FormGroup<MemberDataSourceConfigurationFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the features for the member account. */
	export interface MemberFeaturesConfigurationResult {
		Name?: DetectorFeature;
		Status?: DataSourceStatus;
		UpdatedAt?: Date;
		AdditionalConfiguration?: Array<MemberAdditionalConfigurationResult>;
	}

	/** Contains information about the features for the member account. */
	export interface MemberFeaturesConfigurationResultFormProperties {
		Name: FormControl<DetectorFeature | null | undefined>,
		Status: FormControl<DataSourceStatus | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateMemberFeaturesConfigurationResultFormGroup() {
		return new FormGroup<MemberFeaturesConfigurationResultFormProperties>({
			Name: new FormControl<DetectorFeature | null | undefined>(undefined),
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the additional configuration for the member account. */
	export interface MemberAdditionalConfigurationResult {
		Name?: FeatureAdditionalConfiguration;
		Status?: DataSourceStatus;
		UpdatedAt?: Date;
	}

	/** Information about the additional configuration for the member account. */
	export interface MemberAdditionalConfigurationResultFormProperties {
		Name: FormControl<FeatureAdditionalConfiguration | null | undefined>,
		Status: FormControl<DataSourceStatus | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateMemberAdditionalConfigurationResultFormGroup() {
		return new FormGroup<MemberAdditionalConfigurationResultFormProperties>({
			Name: new FormControl<FeatureAdditionalConfiguration | null | undefined>(undefined),
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetMembersResponse {

		/** Required */
		Members: Array<Member>;

		/** Required */
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface GetMembersResponseFormProperties {
	}
	export function CreateGetMembersResponseFormGroup() {
		return new FormGroup<GetMembersResponseFormProperties>({
		});

	}


	/** Contains information about the member account.  */
	export interface Member {

		/** Required */
		AccountId: string;
		DetectorId?: string;

		/** Required */
		MasterId: string;

		/** Required */
		Email: string;

		/** Required */
		RelationshipStatus: string;
		InvitedAt?: string;

		/** Required */
		UpdatedAt: string;
		AdministratorId?: string;
	}

	/** Contains information about the member account.  */
	export interface MemberFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,
		DetectorId: FormControl<string | null | undefined>,

		/** Required */
		MasterId: FormControl<string | null | undefined>,

		/** Required */
		Email: FormControl<string | null | undefined>,

		/** Required */
		RelationshipStatus: FormControl<string | null | undefined>,
		InvitedAt: FormControl<string | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<string | null | undefined>,
		AdministratorId: FormControl<string | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DetectorId: new FormControl<string | null | undefined>(undefined),
			MasterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RelationshipStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InvitedAt: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AdministratorId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRemainingFreeTrialDaysResponse {
		Accounts?: Array<AccountFreeTrialInfo>;
		UnprocessedAccounts?: Array<UnprocessedAccount>;
	}
	export interface GetRemainingFreeTrialDaysResponseFormProperties {
	}
	export function CreateGetRemainingFreeTrialDaysResponseFormGroup() {
		return new FormGroup<GetRemainingFreeTrialDaysResponseFormProperties>({
		});

	}


	/** Provides details of the GuardDuty member account that uses a free trial service. */
	export interface AccountFreeTrialInfo {
		AccountId?: string;
		DataSources?: DataSourcesFreeTrial;
		Features?: Array<FreeTrialFeatureConfigurationResult>;
	}

	/** Provides details of the GuardDuty member account that uses a free trial service. */
	export interface AccountFreeTrialInfoFormProperties {
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateAccountFreeTrialInfoFormGroup() {
		return new FormGroup<AccountFreeTrialInfoFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about which data sources are enabled for the GuardDuty member account. */
	export interface DataSourcesFreeTrial {
		CloudTrail?: DataSourceFreeTrial;
		DnsLogs?: DataSourceFreeTrial;
		FlowLogs?: DataSourceFreeTrial;
		S3Logs?: DataSourceFreeTrial;
		Kubernetes?: KubernetesDataSourceFreeTrial;
		MalwareProtection?: MalwareProtectionDataSourceFreeTrial;
	}

	/** Contains information about which data sources are enabled for the GuardDuty member account. */
	export interface DataSourcesFreeTrialFormProperties {
	}
	export function CreateDataSourcesFreeTrialFormGroup() {
		return new FormGroup<DataSourcesFreeTrialFormProperties>({
		});

	}


	/** Contains information about which data sources are enabled for the GuardDuty member account. */
	export interface DataSourceFreeTrial {
		FreeTrialDaysRemaining?: number | null;
	}

	/** Contains information about which data sources are enabled for the GuardDuty member account. */
	export interface DataSourceFreeTrialFormProperties {
		FreeTrialDaysRemaining: FormControl<number | null | undefined>,
	}
	export function CreateDataSourceFreeTrialFormGroup() {
		return new FormGroup<DataSourceFreeTrialFormProperties>({
			FreeTrialDaysRemaining: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides details about the Kubernetes resources when it is enabled as a data source. */
	export interface KubernetesDataSourceFreeTrial {
		AuditLogs?: DataSourceFreeTrial;
	}

	/** Provides details about the Kubernetes resources when it is enabled as a data source. */
	export interface KubernetesDataSourceFreeTrialFormProperties {
	}
	export function CreateKubernetesDataSourceFreeTrialFormGroup() {
		return new FormGroup<KubernetesDataSourceFreeTrialFormProperties>({
		});

	}


	/** Provides details about Malware Protection when it is enabled as a data source. */
	export interface MalwareProtectionDataSourceFreeTrial {
		ScanEc2InstanceWithFindings?: DataSourceFreeTrial;
	}

	/** Provides details about Malware Protection when it is enabled as a data source. */
	export interface MalwareProtectionDataSourceFreeTrialFormProperties {
	}
	export function CreateMalwareProtectionDataSourceFreeTrialFormGroup() {
		return new FormGroup<MalwareProtectionDataSourceFreeTrialFormProperties>({
		});

	}


	/** Contains information about the free trial period for a feature. */
	export interface FreeTrialFeatureConfigurationResult {
		Name?: DetectorFeatureResult;
		FreeTrialDaysRemaining?: number | null;
	}

	/** Contains information about the free trial period for a feature. */
	export interface FreeTrialFeatureConfigurationResultFormProperties {
		Name: FormControl<DetectorFeatureResult | null | undefined>,
		FreeTrialDaysRemaining: FormControl<number | null | undefined>,
	}
	export function CreateFreeTrialFeatureConfigurationResultFormGroup() {
		return new FormGroup<FreeTrialFeatureConfigurationResultFormProperties>({
			Name: new FormControl<DetectorFeatureResult | null | undefined>(undefined),
			FreeTrialDaysRemaining: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetThreatIntelSetResponse {

		/** Required */
		Name: string;

		/** Required */
		Format: IpSetFormat;

		/** Required */
		Location: string;

		/** Required */
		Status: IpSetStatus;
		Tags?: TagMap;
	}
	export interface GetThreatIntelSetResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Format: FormControl<IpSetFormat | null | undefined>,

		/** Required */
		Location: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<IpSetStatus | null | undefined>,
	}
	export function CreateGetThreatIntelSetResponseFormGroup() {
		return new FormGroup<GetThreatIntelSetResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<IpSetFormat | null | undefined>(undefined, [Validators.required]),
			Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<IpSetStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetUsageStatisticsResponse {
		UsageStatistics?: UsageStatistics;
		NextToken?: string;
	}
	export interface GetUsageStatisticsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetUsageStatisticsResponseFormGroup() {
		return new FormGroup<GetUsageStatisticsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the result of GuardDuty usage. If a UsageStatisticType is provided the result for other types will be null.  */
	export interface UsageStatistics {
		SumByAccount?: Array<UsageAccountResult>;
		SumByDataSource?: Array<UsageDataSourceResult>;
		SumByResource?: Array<UsageResourceResult>;
		TopResources?: Array<UsageResourceResult>;
		SumByFeature?: Array<UsageFeatureResult>;
	}

	/** Contains the result of GuardDuty usage. If a UsageStatisticType is provided the result for other types will be null.  */
	export interface UsageStatisticsFormProperties {
	}
	export function CreateUsageStatisticsFormGroup() {
		return new FormGroup<UsageStatisticsFormProperties>({
		});

	}


	/** Contains information on the total of usage based on account IDs. */
	export interface UsageAccountResult {
		AccountId?: string;
		Total?: Total;
	}

	/** Contains information on the total of usage based on account IDs. */
	export interface UsageAccountResultFormProperties {
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateUsageAccountResultFormGroup() {
		return new FormGroup<UsageAccountResultFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the total usage with the corresponding currency unit for that value. */
	export interface Total {
		Amount?: string;
		Unit?: string;
	}

	/** Contains the total usage with the corresponding currency unit for that value. */
	export interface TotalFormProperties {
		Amount: FormControl<string | null | undefined>,
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateTotalFormGroup() {
		return new FormGroup<TotalFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information on the result of usage based on data source type. */
	export interface UsageDataSourceResult {
		DataSource?: DataSource;
		Total?: Total;
	}

	/** Contains information on the result of usage based on data source type. */
	export interface UsageDataSourceResultFormProperties {
		DataSource: FormControl<DataSource | null | undefined>,
	}
	export function CreateUsageDataSourceResultFormGroup() {
		return new FormGroup<UsageDataSourceResultFormProperties>({
			DataSource: new FormControl<DataSource | null | undefined>(undefined),
		});

	}

	export enum DataSource { FLOW_LOGS = 0, CLOUD_TRAIL = 1, DNS_LOGS = 2, S3_LOGS = 3, KUBERNETES_AUDIT_LOGS = 4, EC2_MALWARE_SCAN = 5 }


	/** Contains information on the sum of usage based on an Amazon Web Services resource. */
	export interface UsageResourceResult {
		Resource?: string;
		Total?: Total;
	}

	/** Contains information on the sum of usage based on an Amazon Web Services resource. */
	export interface UsageResourceResultFormProperties {
		Resource: FormControl<string | null | undefined>,
	}
	export function CreateUsageResourceResultFormGroup() {
		return new FormGroup<UsageResourceResultFormProperties>({
			Resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the result of the total usage based on the feature. */
	export interface UsageFeatureResult {
		Feature?: UsageFeature;
		Total?: Total;
	}

	/** Contains information about the result of the total usage based on the feature. */
	export interface UsageFeatureResultFormProperties {
		Feature: FormControl<UsageFeature | null | undefined>,
	}
	export function CreateUsageFeatureResultFormGroup() {
		return new FormGroup<UsageFeatureResultFormProperties>({
			Feature: new FormControl<UsageFeature | null | undefined>(undefined),
		});

	}

	export enum UsageFeature { FLOW_LOGS = 0, CLOUD_TRAIL = 1, DNS_LOGS = 2, S3_DATA_EVENTS = 3, EKS_AUDIT_LOGS = 4, EBS_MALWARE_PROTECTION = 5, RDS_LOGIN_EVENTS = 6, LAMBDA_NETWORK_LOGS = 7, EKS_RUNTIME_MONITORING = 8 }

	export interface InviteMembersResponse {

		/** Required */
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface InviteMembersResponseFormProperties {
	}
	export function CreateInviteMembersResponseFormGroup() {
		return new FormGroup<InviteMembersResponseFormProperties>({
		});

	}

	export interface ListCoverageResponse {

		/** Required */
		Resources: Array<CoverageResource>;
		NextToken?: string;
	}
	export interface ListCoverageResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCoverageResponseFormGroup() {
		return new FormGroup<ListCoverageResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the resource of the GuardDuty account. */
	export interface CoverageResource {
		ResourceId?: string;
		DetectorId?: string;
		AccountId?: string;
		ResourceDetails?: CoverageResourceDetails;
		CoverageStatus?: CoverageStatus;
		Issue?: string;
		UpdatedAt?: Date;
	}

	/** Information about the resource of the GuardDuty account. */
	export interface CoverageResourceFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		DetectorId: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		CoverageStatus: FormControl<CoverageStatus | null | undefined>,
		Issue: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCoverageResourceFormGroup() {
		return new FormGroup<CoverageResourceFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			DetectorId: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			CoverageStatus: new FormControl<CoverageStatus | null | undefined>(undefined),
			Issue: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the resource for each individual EKS cluster. */
	export interface CoverageResourceDetails {
		EksClusterDetails?: CoverageEksClusterDetails;
		ResourceType?: ResourceType;
	}

	/** Information about the resource for each individual EKS cluster. */
	export interface CoverageResourceDetailsFormProperties {
		ResourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateCoverageResourceDetailsFormGroup() {
		return new FormGroup<CoverageResourceDetailsFormProperties>({
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
		});

	}


	/** Information about the EKS cluster that has a coverage status. */
	export interface CoverageEksClusterDetails {
		ClusterName?: string;
		CoveredNodes?: number | null;
		CompatibleNodes?: number | null;
		AddonDetails?: AddonDetails;
	}

	/** Information about the EKS cluster that has a coverage status. */
	export interface CoverageEksClusterDetailsFormProperties {
		ClusterName: FormControl<string | null | undefined>,
		CoveredNodes: FormControl<number | null | undefined>,
		CompatibleNodes: FormControl<number | null | undefined>,
	}
	export function CreateCoverageEksClusterDetailsFormGroup() {
		return new FormGroup<CoverageEksClusterDetailsFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined),
			CoveredNodes: new FormControl<number | null | undefined>(undefined),
			CompatibleNodes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the installed EKS add-on (GuardDuty security agent). */
	export interface AddonDetails {
		AddonVersion?: string;
		AddonStatus?: string;
	}

	/** Information about the installed EKS add-on (GuardDuty security agent). */
	export interface AddonDetailsFormProperties {
		AddonVersion: FormControl<string | null | undefined>,
		AddonStatus: FormControl<string | null | undefined>,
	}
	export function CreateAddonDetailsFormGroup() {
		return new FormGroup<AddonDetailsFormProperties>({
			AddonVersion: new FormControl<string | null | undefined>(undefined),
			AddonStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceType { EKS = 0 }

	export enum CoverageStatus { HEALTHY = 0, UNHEALTHY = 1 }

	export enum CoverageSortKey { ACCOUNT_ID = 0, CLUSTER_NAME = 1, COVERAGE_STATUS = 2, ISSUE = 3, ADDON_VERSION = 4, UPDATED_AT = 5 }

	export interface ListDetectorsResponse {

		/** Required */
		DetectorIds: Array<string>;
		NextToken?: string;
	}
	export interface ListDetectorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDetectorsResponseFormGroup() {
		return new FormGroup<ListDetectorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFiltersResponse {

		/** Required */
		FilterNames: Array<string>;
		NextToken?: string;
	}
	export interface ListFiltersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFiltersResponseFormGroup() {
		return new FormGroup<ListFiltersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFindingsResponse {

		/** Required */
		FindingIds: Array<string>;
		NextToken?: string;
	}
	export interface ListFindingsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsResponseFormGroup() {
		return new FormGroup<ListFindingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIPSetsResponse {

		/** Required */
		IpSetIds: Array<string>;
		NextToken?: string;
	}
	export interface ListIPSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIPSetsResponseFormGroup() {
		return new FormGroup<ListIPSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInvitationsResponse {
		Invitations?: Array<Invitation>;
		NextToken?: string;
	}
	export interface ListInvitationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInvitationsResponseFormGroup() {
		return new FormGroup<ListInvitationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the invitation to become a member account. */
	export interface Invitation {
		AccountId?: string;
		InvitationId?: string;
		RelationshipStatus?: string;
		InvitedAt?: string;
	}

	/** Contains information about the invitation to become a member account. */
	export interface InvitationFormProperties {
		AccountId: FormControl<string | null | undefined>,
		InvitationId: FormControl<string | null | undefined>,
		RelationshipStatus: FormControl<string | null | undefined>,
		InvitedAt: FormControl<string | null | undefined>,
	}
	export function CreateInvitationFormGroup() {
		return new FormGroup<InvitationFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			InvitationId: new FormControl<string | null | undefined>(undefined),
			RelationshipStatus: new FormControl<string | null | undefined>(undefined),
			InvitedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMembersResponse {
		Members?: Array<Member>;
		NextToken?: string;
	}
	export interface ListMembersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembersResponseFormGroup() {
		return new FormGroup<ListMembersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationAdminAccountsResponse {
		AdminAccounts?: Array<AdminAccount>;
		NextToken?: string;
	}
	export interface ListOrganizationAdminAccountsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationAdminAccountsResponseFormGroup() {
		return new FormGroup<ListOrganizationAdminAccountsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The account within the organization specified as the GuardDuty delegated administrator. */
	export interface AdminAccount {
		AdminAccountId?: string;
		AdminStatus?: AdminStatus;
	}

	/** The account within the organization specified as the GuardDuty delegated administrator. */
	export interface AdminAccountFormProperties {
		AdminAccountId: FormControl<string | null | undefined>,
		AdminStatus: FormControl<AdminStatus | null | undefined>,
	}
	export function CreateAdminAccountFormGroup() {
		return new FormGroup<AdminAccountFormProperties>({
			AdminAccountId: new FormControl<string | null | undefined>(undefined),
			AdminStatus: new FormControl<AdminStatus | null | undefined>(undefined),
		});

	}

	export enum AdminStatus { ENABLED = 0, DISABLE_IN_PROGRESS = 1 }

	export interface ListPublishingDestinationsResponse {

		/** Required */
		Destinations: Array<Destination>;
		NextToken?: string;
	}
	export interface ListPublishingDestinationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPublishingDestinationsResponseFormGroup() {
		return new FormGroup<ListPublishingDestinationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the publishing destination, including the ID, type, and status. */
	export interface Destination {

		/** Required */
		DestinationId: string;

		/** Required */
		DestinationType: DestinationType;

		/** Required */
		Status: PublishingStatus;
	}

	/** Contains information about the publishing destination, including the ID, type, and status. */
	export interface DestinationFormProperties {

		/** Required */
		DestinationId: FormControl<string | null | undefined>,

		/** Required */
		DestinationType: FormControl<DestinationType | null | undefined>,

		/** Required */
		Status: FormControl<PublishingStatus | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			DestinationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationType: new FormControl<DestinationType | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<PublishingStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ListThreatIntelSetsResponse {

		/** Required */
		ThreatIntelSetIds: Array<string>;
		NextToken?: string;
	}
	export interface ListThreatIntelSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThreatIntelSetsResponseFormGroup() {
		return new FormGroup<ListThreatIntelSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMalwareScanResponse {
		ScanId?: string;
	}
	export interface StartMalwareScanResponseFormProperties {
		ScanId: FormControl<string | null | undefined>,
	}
	export function CreateStartMalwareScanResponseFormGroup() {
		return new FormGroup<StartMalwareScanResponseFormProperties>({
			ScanId: new FormControl<string | null | undefined>(undefined),
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

	export interface StartMonitoringMembersResponse {

		/** Required */
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface StartMonitoringMembersResponseFormProperties {
	}
	export function CreateStartMonitoringMembersResponseFormGroup() {
		return new FormGroup<StartMonitoringMembersResponseFormProperties>({
		});

	}

	export interface StopMonitoringMembersResponse {

		/** Required */
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface StopMonitoringMembersResponseFormProperties {
	}
	export function CreateStopMonitoringMembersResponseFormGroup() {
		return new FormGroup<StopMonitoringMembersResponseFormProperties>({
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

	export interface UnarchiveFindingsResponse {
	}
	export interface UnarchiveFindingsResponseFormProperties {
	}
	export function CreateUnarchiveFindingsResponseFormGroup() {
		return new FormGroup<UnarchiveFindingsResponseFormProperties>({
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

	export interface UpdateDetectorResponse {
	}
	export interface UpdateDetectorResponseFormProperties {
	}
	export function CreateUpdateDetectorResponseFormGroup() {
		return new FormGroup<UpdateDetectorResponseFormProperties>({
		});

	}

	export interface UpdateFilterResponse {

		/** Required */
		Name: string;
	}
	export interface UpdateFilterResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFilterResponseFormGroup() {
		return new FormGroup<UpdateFilterResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFindingsFeedbackResponse {
	}
	export interface UpdateFindingsFeedbackResponseFormProperties {
	}
	export function CreateUpdateFindingsFeedbackResponseFormGroup() {
		return new FormGroup<UpdateFindingsFeedbackResponseFormProperties>({
		});

	}

	export interface UpdateIPSetResponse {
	}
	export interface UpdateIPSetResponseFormProperties {
	}
	export function CreateUpdateIPSetResponseFormGroup() {
		return new FormGroup<UpdateIPSetResponseFormProperties>({
		});

	}

	export interface UpdateMalwareScanSettingsResponse {
	}
	export interface UpdateMalwareScanSettingsResponseFormProperties {
	}
	export function CreateUpdateMalwareScanSettingsResponseFormGroup() {
		return new FormGroup<UpdateMalwareScanSettingsResponseFormProperties>({
		});

	}

	export interface UpdateMemberDetectorsResponse {

		/** Required */
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface UpdateMemberDetectorsResponseFormProperties {
	}
	export function CreateUpdateMemberDetectorsResponseFormGroup() {
		return new FormGroup<UpdateMemberDetectorsResponseFormProperties>({
		});

	}


	/** Contains information about the features for the member account. */
	export interface MemberFeaturesConfiguration {
		Name?: DetectorFeature;
		Status?: DataSourceStatus;
		AdditionalConfiguration?: Array<MemberAdditionalConfiguration>;
	}

	/** Contains information about the features for the member account. */
	export interface MemberFeaturesConfigurationFormProperties {
		Name: FormControl<DetectorFeature | null | undefined>,
		Status: FormControl<DataSourceStatus | null | undefined>,
	}
	export function CreateMemberFeaturesConfigurationFormGroup() {
		return new FormGroup<MemberFeaturesConfigurationFormProperties>({
			Name: new FormControl<DetectorFeature | null | undefined>(undefined),
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined),
		});

	}


	/** Information about the additional configuration for the member account. */
	export interface MemberAdditionalConfiguration {
		Name?: FeatureAdditionalConfiguration;
		Status?: DataSourceStatus;
	}

	/** Information about the additional configuration for the member account. */
	export interface MemberAdditionalConfigurationFormProperties {
		Name: FormControl<FeatureAdditionalConfiguration | null | undefined>,
		Status: FormControl<DataSourceStatus | null | undefined>,
	}
	export function CreateMemberAdditionalConfigurationFormGroup() {
		return new FormGroup<MemberAdditionalConfigurationFormProperties>({
			Name: new FormControl<FeatureAdditionalConfiguration | null | undefined>(undefined),
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateOrganizationConfigurationResponse {
	}
	export interface UpdateOrganizationConfigurationResponseFormProperties {
	}
	export function CreateUpdateOrganizationConfigurationResponseFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationResponseFormProperties>({
		});

	}


	/** Describes whether S3 data event logs will be automatically enabled for new members of the organization. */
	export interface OrganizationS3LogsConfiguration {

		/** Required */
		AutoEnable: boolean;
	}

	/** Describes whether S3 data event logs will be automatically enabled for new members of the organization. */
	export interface OrganizationS3LogsConfigurationFormProperties {

		/** Required */
		AutoEnable: FormControl<boolean | null | undefined>,
	}
	export function CreateOrganizationS3LogsConfigurationFormGroup() {
		return new FormGroup<OrganizationS3LogsConfigurationFormProperties>({
			AutoEnable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Organization-wide Kubernetes data sources configurations. */
	export interface OrganizationKubernetesConfiguration {

		/** Required */
		AuditLogs: OrganizationKubernetesAuditLogsConfiguration;
	}

	/** Organization-wide Kubernetes data sources configurations. */
	export interface OrganizationKubernetesConfigurationFormProperties {
	}
	export function CreateOrganizationKubernetesConfigurationFormGroup() {
		return new FormGroup<OrganizationKubernetesConfigurationFormProperties>({
		});

	}


	/** Organization-wide Kubernetes audit logs configuration. */
	export interface OrganizationKubernetesAuditLogsConfiguration {

		/** Required */
		AutoEnable: boolean;
	}

	/** Organization-wide Kubernetes audit logs configuration. */
	export interface OrganizationKubernetesAuditLogsConfigurationFormProperties {

		/** Required */
		AutoEnable: FormControl<boolean | null | undefined>,
	}
	export function CreateOrganizationKubernetesAuditLogsConfigurationFormGroup() {
		return new FormGroup<OrganizationKubernetesAuditLogsConfigurationFormProperties>({
			AutoEnable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Organization-wide Malware Protection configurations. */
	export interface OrganizationMalwareProtectionConfiguration {
		ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindings;
	}

	/** Organization-wide Malware Protection configurations. */
	export interface OrganizationMalwareProtectionConfigurationFormProperties {
	}
	export function CreateOrganizationMalwareProtectionConfigurationFormGroup() {
		return new FormGroup<OrganizationMalwareProtectionConfigurationFormProperties>({
		});

	}


	/** Organization-wide EC2 instances with findings scan configuration. */
	export interface OrganizationScanEc2InstanceWithFindings {
		EbsVolumes?: OrganizationEbsVolumes;
	}

	/** Organization-wide EC2 instances with findings scan configuration. */
	export interface OrganizationScanEc2InstanceWithFindingsFormProperties {
	}
	export function CreateOrganizationScanEc2InstanceWithFindingsFormGroup() {
		return new FormGroup<OrganizationScanEc2InstanceWithFindingsFormProperties>({
		});

	}


	/** Organization-wide EBS volumes scan configuration. */
	export interface OrganizationEbsVolumes {
		AutoEnable?: boolean | null;
	}

	/** Organization-wide EBS volumes scan configuration. */
	export interface OrganizationEbsVolumesFormProperties {
		AutoEnable: FormControl<boolean | null | undefined>,
	}
	export function CreateOrganizationEbsVolumesFormGroup() {
		return new FormGroup<OrganizationEbsVolumesFormProperties>({
			AutoEnable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of features which will be configured for the organization. */
	export interface OrganizationFeatureConfiguration {
		Name?: DetectorFeature;
		AutoEnable?: OrgFeatureStatus;
		AdditionalConfiguration?: Array<OrganizationAdditionalConfiguration>;
	}

	/** A list of features which will be configured for the organization. */
	export interface OrganizationFeatureConfigurationFormProperties {
		Name: FormControl<DetectorFeature | null | undefined>,
		AutoEnable: FormControl<OrgFeatureStatus | null | undefined>,
	}
	export function CreateOrganizationFeatureConfigurationFormGroup() {
		return new FormGroup<OrganizationFeatureConfigurationFormProperties>({
			Name: new FormControl<DetectorFeature | null | undefined>(undefined),
			AutoEnable: new FormControl<OrgFeatureStatus | null | undefined>(undefined),
		});

	}


	/** A list of additional configurations which will be configured for the organization. */
	export interface OrganizationAdditionalConfiguration {
		Name?: FeatureAdditionalConfiguration;
		AutoEnable?: OrgFeatureStatus;
	}

	/** A list of additional configurations which will be configured for the organization. */
	export interface OrganizationAdditionalConfigurationFormProperties {
		Name: FormControl<FeatureAdditionalConfiguration | null | undefined>,
		AutoEnable: FormControl<OrgFeatureStatus | null | undefined>,
	}
	export function CreateOrganizationAdditionalConfigurationFormGroup() {
		return new FormGroup<OrganizationAdditionalConfigurationFormProperties>({
			Name: new FormControl<FeatureAdditionalConfiguration | null | undefined>(undefined),
			AutoEnable: new FormControl<OrgFeatureStatus | null | undefined>(undefined),
		});

	}

	export interface UpdatePublishingDestinationResponse {
	}
	export interface UpdatePublishingDestinationResponseFormProperties {
	}
	export function CreateUpdatePublishingDestinationResponseFormGroup() {
		return new FormGroup<UpdatePublishingDestinationResponseFormProperties>({
		});

	}

	export interface UpdateThreatIntelSetResponse {
	}
	export interface UpdateThreatIntelSetResponseFormProperties {
	}
	export function CreateUpdateThreatIntelSetResponseFormGroup() {
		return new FormGroup<UpdateThreatIntelSetResponseFormProperties>({
		});

	}

	export interface AcceptAdministratorInvitationRequest {

		/** Required */
		AdministratorId: string;

		/** Required */
		InvitationId: string;
	}
	export interface AcceptAdministratorInvitationRequestFormProperties {

		/** Required */
		AdministratorId: FormControl<string | null | undefined>,

		/** Required */
		InvitationId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptAdministratorInvitationRequestFormGroup() {
		return new FormGroup<AcceptAdministratorInvitationRequestFormProperties>({
			AdministratorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InvitationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This input is deprecated, use AcceptAdministratorInvitationRequest instead */
	export interface AcceptInvitationRequest {

		/** Required */
		MasterId: string;

		/** Required */
		InvitationId: string;
	}

	/** This input is deprecated, use AcceptAdministratorInvitationRequest instead */
	export interface AcceptInvitationRequestFormProperties {

		/** Required */
		MasterId: FormControl<string | null | undefined>,

		/** Required */
		InvitationId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationRequestFormGroup() {
		return new FormGroup<AcceptInvitationRequestFormProperties>({
			MasterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InvitationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArchiveFindingsRequest {

		/** Required */
		FindingIds: Array<string>;
	}
	export interface ArchiveFindingsRequestFormProperties {
	}
	export function CreateArchiveFindingsRequestFormGroup() {
		return new FormGroup<ArchiveFindingsRequestFormProperties>({
		});

	}


	/** Contains information about the condition. */
	export interface Condition {
		Eq?: Array<string>;
		Neq?: Array<string>;
		Gt?: number | null;
		Gte?: number | null;
		Lt?: number | null;
		Lte?: number | null;
		Equals?: Array<string>;
		NotEquals?: Array<string>;
		GreaterThan?: number | null;
		GreaterThanOrEqual?: number | null;
		LessThan?: number | null;
		LessThanOrEqual?: number | null;
	}

	/** Contains information about the condition. */
	export interface ConditionFormProperties {
		Gt: FormControl<number | null | undefined>,
		Gte: FormControl<number | null | undefined>,
		Lt: FormControl<number | null | undefined>,
		Lte: FormControl<number | null | undefined>,
		GreaterThan: FormControl<number | null | undefined>,
		GreaterThanOrEqual: FormControl<number | null | undefined>,
		LessThan: FormControl<number | null | undefined>,
		LessThanOrEqual: FormControl<number | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			Gt: new FormControl<number | null | undefined>(undefined),
			Gte: new FormControl<number | null | undefined>(undefined),
			Lt: new FormControl<number | null | undefined>(undefined),
			Lte: new FormControl<number | null | undefined>(undefined),
			GreaterThan: new FormControl<number | null | undefined>(undefined),
			GreaterThanOrEqual: new FormControl<number | null | undefined>(undefined),
			LessThan: new FormControl<number | null | undefined>(undefined),
			LessThanOrEqual: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the criteria used in the filter. */
	export interface CoverageFilterCriteria {
		FilterCriterion?: Array<CoverageFilterCriterion>;
	}

	/** Represents the criteria used in the filter. */
	export interface CoverageFilterCriteriaFormProperties {
	}
	export function CreateCoverageFilterCriteriaFormGroup() {
		return new FormGroup<CoverageFilterCriteriaFormProperties>({
		});

	}


	/** Information about the sorting criteria used in the coverage statistics. */
	export interface CoverageSortCriteria {
		AttributeName?: CoverageSortKey;
		OrderBy?: OrderBy;
	}

	/** Information about the sorting criteria used in the coverage statistics. */
	export interface CoverageSortCriteriaFormProperties {
		AttributeName: FormControl<CoverageSortKey | null | undefined>,
		OrderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateCoverageSortCriteriaFormGroup() {
		return new FormGroup<CoverageSortCriteriaFormProperties>({
			AttributeName: new FormControl<CoverageSortKey | null | undefined>(undefined),
			OrderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}


	/** Contains information about which data sources are enabled. */
	export interface DataSourceConfigurations {
		S3Logs?: S3LogsConfiguration;
		Kubernetes?: KubernetesConfiguration;
		MalwareProtection?: MalwareProtectionConfiguration;
	}

	/** Contains information about which data sources are enabled. */
	export interface DataSourceConfigurationsFormProperties {
	}
	export function CreateDataSourceConfigurationsFormGroup() {
		return new FormGroup<DataSourceConfigurationsFormProperties>({
		});

	}

	export interface CreateDetectorRequest {

		/** Required */
		Enable: boolean;
		ClientToken?: string;
		FindingPublishingFrequency?: FindingPublishingFrequency;
		DataSources?: DataSourceConfigurations;
		Tags?: TagMap;
		Features?: Array<DetectorFeatureConfiguration>;
	}
	export interface CreateDetectorRequestFormProperties {

		/** Required */
		Enable: FormControl<boolean | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		FindingPublishingFrequency: FormControl<FindingPublishingFrequency | null | undefined>,
	}
	export function CreateCreateDetectorRequestFormGroup() {
		return new FormGroup<CreateDetectorRequestFormProperties>({
			Enable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			FindingPublishingFrequency: new FormControl<FindingPublishingFrequency | null | undefined>(undefined),
		});

	}

	export interface CreateFilterRequest {

		/** Required */
		Name: string;
		Description?: string;
		Action?: FilterAction;
		Rank?: number | null;

		/** Required */
		FindingCriteria: FindingCriteria;
		ClientToken?: string;
		Tags?: TagMap;
	}
	export interface CreateFilterRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Action: FormControl<FilterAction | null | undefined>,
		Rank: FormControl<number | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateFilterRequestFormGroup() {
		return new FormGroup<CreateFilterRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<FilterAction | null | undefined>(undefined),
			Rank: new FormControl<number | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIPSetRequest {

		/** Required */
		Name: string;

		/** Required */
		Format: IpSetFormat;

		/** Required */
		Location: string;

		/** Required */
		Activate: boolean;
		ClientToken?: string;
		Tags?: TagMap;
	}
	export interface CreateIPSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Format: FormControl<IpSetFormat | null | undefined>,

		/** Required */
		Location: FormControl<string | null | undefined>,

		/** Required */
		Activate: FormControl<boolean | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateIPSetRequestFormGroup() {
		return new FormGroup<CreateIPSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<IpSetFormat | null | undefined>(undefined, [Validators.required]),
			Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Activate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMembersRequest {

		/** Required */
		AccountDetails: Array<AccountDetail>;
	}
	export interface CreateMembersRequestFormProperties {
	}
	export function CreateCreateMembersRequestFormGroup() {
		return new FormGroup<CreateMembersRequestFormProperties>({
		});

	}

	export interface CreatePublishingDestinationRequest {

		/** Required */
		DestinationType: DestinationType;

		/** Required */
		DestinationProperties: DestinationProperties;
		ClientToken?: string;
	}
	export interface CreatePublishingDestinationRequestFormProperties {

		/** Required */
		DestinationType: FormControl<DestinationType | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePublishingDestinationRequestFormGroup() {
		return new FormGroup<CreatePublishingDestinationRequestFormProperties>({
			DestinationType: new FormControl<DestinationType | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSampleFindingsRequest {
		FindingTypes?: Array<string>;
	}
	export interface CreateSampleFindingsRequestFormProperties {
	}
	export function CreateCreateSampleFindingsRequestFormGroup() {
		return new FormGroup<CreateSampleFindingsRequestFormProperties>({
		});

	}

	export enum ThreatIntelSetFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export interface CreateThreatIntelSetRequest {

		/** Required */
		Name: string;

		/** Required */
		Format: IpSetFormat;

		/** Required */
		Location: string;

		/** Required */
		Activate: boolean;
		ClientToken?: string;
		Tags?: TagMap;
	}
	export interface CreateThreatIntelSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Format: FormControl<IpSetFormat | null | undefined>,

		/** Required */
		Location: FormControl<string | null | undefined>,

		/** Required */
		Activate: FormControl<boolean | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateThreatIntelSetRequestFormGroup() {
		return new FormGroup<CreateThreatIntelSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<IpSetFormat | null | undefined>(undefined, [Validators.required]),
			Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Activate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeclineInvitationsRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface DeclineInvitationsRequestFormProperties {
	}
	export function CreateDeclineInvitationsRequestFormGroup() {
		return new FormGroup<DeclineInvitationsRequestFormProperties>({
		});

	}

	export interface DeleteDetectorRequest {
	}
	export interface DeleteDetectorRequestFormProperties {
	}
	export function CreateDeleteDetectorRequestFormGroup() {
		return new FormGroup<DeleteDetectorRequestFormProperties>({
		});

	}

	export interface DeleteFilterRequest {
	}
	export interface DeleteFilterRequestFormProperties {
	}
	export function CreateDeleteFilterRequestFormGroup() {
		return new FormGroup<DeleteFilterRequestFormProperties>({
		});

	}

	export interface DeleteIPSetRequest {
	}
	export interface DeleteIPSetRequestFormProperties {
	}
	export function CreateDeleteIPSetRequestFormGroup() {
		return new FormGroup<DeleteIPSetRequestFormProperties>({
		});

	}

	export interface DeleteInvitationsRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface DeleteInvitationsRequestFormProperties {
	}
	export function CreateDeleteInvitationsRequestFormGroup() {
		return new FormGroup<DeleteInvitationsRequestFormProperties>({
		});

	}

	export interface DeleteMembersRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface DeleteMembersRequestFormProperties {
	}
	export function CreateDeleteMembersRequestFormGroup() {
		return new FormGroup<DeleteMembersRequestFormProperties>({
		});

	}

	export interface DeletePublishingDestinationRequest {
	}
	export interface DeletePublishingDestinationRequestFormProperties {
	}
	export function CreateDeletePublishingDestinationRequestFormGroup() {
		return new FormGroup<DeletePublishingDestinationRequestFormProperties>({
		});

	}

	export interface DeleteThreatIntelSetRequest {
	}
	export interface DeleteThreatIntelSetRequestFormProperties {
	}
	export function CreateDeleteThreatIntelSetRequestFormGroup() {
		return new FormGroup<DeleteThreatIntelSetRequestFormProperties>({
		});

	}


	/** Represents the criteria to be used in the filter for describing scan entries. */
	export interface FilterCriteria {
		FilterCriterion?: Array<FilterCriterion>;
	}

	/** Represents the criteria to be used in the filter for describing scan entries. */
	export interface FilterCriteriaFormProperties {
	}
	export function CreateFilterCriteriaFormGroup() {
		return new FormGroup<FilterCriteriaFormProperties>({
		});

	}


	/** Contains information about the criteria used for sorting findings. */
	export interface SortCriteria {
		AttributeName?: string;
		OrderBy?: OrderBy;
	}

	/** Contains information about the criteria used for sorting findings. */
	export interface SortCriteriaFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		OrderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateSortCriteriaFormGroup() {
		return new FormGroup<SortCriteriaFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			OrderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface DescribeMalwareScansRequest {
		NextToken?: string;
		MaxResults?: number | null;
		FilterCriteria?: FilterCriteria;
		SortCriteria?: SortCriteria;
	}
	export interface DescribeMalwareScansRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeMalwareScansRequestFormGroup() {
		return new FormGroup<DescribeMalwareScansRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeOrganizationConfigurationRequest {
	}
	export interface DescribeOrganizationConfigurationRequestFormProperties {
	}
	export function CreateDescribeOrganizationConfigurationRequestFormGroup() {
		return new FormGroup<DescribeOrganizationConfigurationRequestFormProperties>({
		});

	}

	export interface DescribePublishingDestinationRequest {
	}
	export interface DescribePublishingDestinationRequestFormProperties {
	}
	export function CreateDescribePublishingDestinationRequestFormGroup() {
		return new FormGroup<DescribePublishingDestinationRequestFormProperties>({
		});

	}

	export enum FeatureStatus { ENABLED = 0, DISABLED = 1 }

	export enum DetectorStatus { ENABLED = 0, DISABLED = 1 }

	export interface DisableOrganizationAdminAccountRequest {

		/** Required */
		AdminAccountId: string;
	}
	export interface DisableOrganizationAdminAccountRequestFormProperties {

		/** Required */
		AdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDisableOrganizationAdminAccountRequestFormGroup() {
		return new FormGroup<DisableOrganizationAdminAccountRequestFormProperties>({
			AdminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateFromAdministratorAccountRequest {
	}
	export interface DisassociateFromAdministratorAccountRequestFormProperties {
	}
	export function CreateDisassociateFromAdministratorAccountRequestFormGroup() {
		return new FormGroup<DisassociateFromAdministratorAccountRequestFormProperties>({
		});

	}


	/** This input is deprecated, use DisassociateFromAdministratorAccountRequest instead */
	export interface DisassociateFromMasterAccountRequest {
	}

	/** This input is deprecated, use DisassociateFromAdministratorAccountRequest instead */
	export interface DisassociateFromMasterAccountRequestFormProperties {
	}
	export function CreateDisassociateFromMasterAccountRequestFormGroup() {
		return new FormGroup<DisassociateFromMasterAccountRequestFormProperties>({
		});

	}

	export interface DisassociateMembersRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface DisassociateMembersRequestFormProperties {
	}
	export function CreateDisassociateMembersRequestFormGroup() {
		return new FormGroup<DisassociateMembersRequestFormProperties>({
		});

	}

	export interface EnableOrganizationAdminAccountRequest {

		/** Required */
		AdminAccountId: string;
	}
	export interface EnableOrganizationAdminAccountRequestFormProperties {

		/** Required */
		AdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateEnableOrganizationAdminAccountRequestFormGroup() {
		return new FormGroup<EnableOrganizationAdminAccountRequestFormProperties>({
			AdminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Feedback { USEFUL = 0, NOT_USEFUL = 1 }

	export enum FreeTrialFeatureResult { FLOW_LOGS = 0, CLOUD_TRAIL = 1, DNS_LOGS = 2, S3_DATA_EVENTS = 3, EKS_AUDIT_LOGS = 4, EBS_MALWARE_PROTECTION = 5, RDS_LOGIN_EVENTS = 6, EKS_RUNTIME_MONITORING = 7, LAMBDA_NETWORK_LOGS = 8 }

	export interface GetAdministratorAccountRequest {
	}
	export interface GetAdministratorAccountRequestFormProperties {
	}
	export function CreateGetAdministratorAccountRequestFormGroup() {
		return new FormGroup<GetAdministratorAccountRequestFormProperties>({
		});

	}

	export interface GetCoverageStatisticsRequest {
		FilterCriteria?: CoverageFilterCriteria;

		/** Required */
		StatisticsType: Array<CoverageStatisticsType>;
	}
	export interface GetCoverageStatisticsRequestFormProperties {
	}
	export function CreateGetCoverageStatisticsRequestFormGroup() {
		return new FormGroup<GetCoverageStatisticsRequestFormProperties>({
		});

	}

	export interface GetDetectorRequest {
	}
	export interface GetDetectorRequestFormProperties {
	}
	export function CreateGetDetectorRequestFormGroup() {
		return new FormGroup<GetDetectorRequestFormProperties>({
		});

	}

	export interface GetFilterRequest {
	}
	export interface GetFilterRequestFormProperties {
	}
	export function CreateGetFilterRequestFormGroup() {
		return new FormGroup<GetFilterRequestFormProperties>({
		});

	}

	export interface GetFindingsRequest {

		/** Required */
		FindingIds: Array<string>;
		SortCriteria?: SortCriteria;
	}
	export interface GetFindingsRequestFormProperties {
	}
	export function CreateGetFindingsRequestFormGroup() {
		return new FormGroup<GetFindingsRequestFormProperties>({
		});

	}

	export interface GetFindingsStatisticsRequest {

		/** Required */
		FindingStatisticTypes: Array<FindingStatisticType>;
		FindingCriteria?: FindingCriteria;
	}
	export interface GetFindingsStatisticsRequestFormProperties {
	}
	export function CreateGetFindingsStatisticsRequestFormGroup() {
		return new FormGroup<GetFindingsStatisticsRequestFormProperties>({
		});

	}

	export interface GetIPSetRequest {
	}
	export interface GetIPSetRequestFormProperties {
	}
	export function CreateGetIPSetRequestFormGroup() {
		return new FormGroup<GetIPSetRequestFormProperties>({
		});

	}

	export interface GetInvitationsCountRequest {
	}
	export interface GetInvitationsCountRequestFormProperties {
	}
	export function CreateGetInvitationsCountRequestFormGroup() {
		return new FormGroup<GetInvitationsCountRequestFormProperties>({
		});

	}

	export interface GetMalwareScanSettingsRequest {
	}
	export interface GetMalwareScanSettingsRequestFormProperties {
	}
	export function CreateGetMalwareScanSettingsRequestFormGroup() {
		return new FormGroup<GetMalwareScanSettingsRequestFormProperties>({
		});

	}


	/** This input is deprecated, use GetAdministratorAccountRequest instead */
	export interface GetMasterAccountRequest {
	}

	/** This input is deprecated, use GetAdministratorAccountRequest instead */
	export interface GetMasterAccountRequestFormProperties {
	}
	export function CreateGetMasterAccountRequestFormGroup() {
		return new FormGroup<GetMasterAccountRequestFormProperties>({
		});

	}

	export interface GetMemberDetectorsRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface GetMemberDetectorsRequestFormProperties {
	}
	export function CreateGetMemberDetectorsRequestFormGroup() {
		return new FormGroup<GetMemberDetectorsRequestFormProperties>({
		});

	}

	export interface GetMembersRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface GetMembersRequestFormProperties {
	}
	export function CreateGetMembersRequestFormGroup() {
		return new FormGroup<GetMembersRequestFormProperties>({
		});

	}

	export interface GetRemainingFreeTrialDaysRequest {
		AccountIds?: Array<string>;
	}
	export interface GetRemainingFreeTrialDaysRequestFormProperties {
	}
	export function CreateGetRemainingFreeTrialDaysRequestFormGroup() {
		return new FormGroup<GetRemainingFreeTrialDaysRequestFormProperties>({
		});

	}

	export interface GetThreatIntelSetRequest {
	}
	export interface GetThreatIntelSetRequestFormProperties {
	}
	export function CreateGetThreatIntelSetRequestFormGroup() {
		return new FormGroup<GetThreatIntelSetRequestFormProperties>({
		});

	}

	export enum ThreatIntelSetStatus { INACTIVE = 0, ACTIVATING = 1, ACTIVE = 2, DEACTIVATING = 3, ERROR = 4, DELETE_PENDING = 5, DELETED = 6 }

	export enum UsageStatisticType { SUM_BY_ACCOUNT = 0, SUM_BY_DATA_SOURCE = 1, SUM_BY_RESOURCE = 2, TOP_RESOURCES = 3, SUM_BY_FEATURES = 4 }


	/** Contains information about the criteria used to query usage statistics. */
	export interface UsageCriteria {
		AccountIds?: Array<string>;
		DataSources?: Array<DataSource>;
		Resources?: Array<string>;
		Features?: Array<UsageFeature>;
	}

	/** Contains information about the criteria used to query usage statistics. */
	export interface UsageCriteriaFormProperties {
	}
	export function CreateUsageCriteriaFormGroup() {
		return new FormGroup<UsageCriteriaFormProperties>({
		});

	}

	export interface GetUsageStatisticsRequest {

		/** Required */
		UsageStatisticType: UsageStatisticType;

		/** Required */
		UsageCriteria: UsageCriteria;
		Unit?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetUsageStatisticsRequestFormProperties {

		/** Required */
		UsageStatisticType: FormControl<UsageStatisticType | null | undefined>,
		Unit: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetUsageStatisticsRequestFormGroup() {
		return new FormGroup<GetUsageStatisticsRequestFormProperties>({
			UsageStatisticType: new FormControl<UsageStatisticType | null | undefined>(undefined, [Validators.required]),
			Unit: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InviteMembersRequest {

		/** Required */
		AccountIds: Array<string>;
		DisableEmailNotification?: boolean | null;
		Message?: string;
	}
	export interface InviteMembersRequestFormProperties {
		DisableEmailNotification: FormControl<boolean | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInviteMembersRequestFormGroup() {
		return new FormGroup<InviteMembersRequestFormProperties>({
			DisableEmailNotification: new FormControl<boolean | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCoverageRequest {
		NextToken?: string;
		MaxResults?: number | null;
		FilterCriteria?: CoverageFilterCriteria;
		SortCriteria?: CoverageSortCriteria;
	}
	export interface ListCoverageRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCoverageRequestFormGroup() {
		return new FormGroup<ListCoverageRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDetectorsRequest {
	}
	export interface ListDetectorsRequestFormProperties {
	}
	export function CreateListDetectorsRequestFormGroup() {
		return new FormGroup<ListDetectorsRequestFormProperties>({
		});

	}

	export interface ListFiltersRequest {
	}
	export interface ListFiltersRequestFormProperties {
	}
	export function CreateListFiltersRequestFormGroup() {
		return new FormGroup<ListFiltersRequestFormProperties>({
		});

	}

	export interface ListFindingsRequest {
		FindingCriteria?: FindingCriteria;
		SortCriteria?: SortCriteria;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListFindingsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsRequestFormGroup() {
		return new FormGroup<ListFindingsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIPSetsRequest {
	}
	export interface ListIPSetsRequestFormProperties {
	}
	export function CreateListIPSetsRequestFormGroup() {
		return new FormGroup<ListIPSetsRequestFormProperties>({
		});

	}

	export interface ListInvitationsRequest {
	}
	export interface ListInvitationsRequestFormProperties {
	}
	export function CreateListInvitationsRequestFormGroup() {
		return new FormGroup<ListInvitationsRequestFormProperties>({
		});

	}

	export interface ListMembersRequest {
	}
	export interface ListMembersRequestFormProperties {
	}
	export function CreateListMembersRequestFormGroup() {
		return new FormGroup<ListMembersRequestFormProperties>({
		});

	}

	export interface ListOrganizationAdminAccountsRequest {
	}
	export interface ListOrganizationAdminAccountsRequestFormProperties {
	}
	export function CreateListOrganizationAdminAccountsRequestFormGroup() {
		return new FormGroup<ListOrganizationAdminAccountsRequestFormProperties>({
		});

	}

	export interface ListPublishingDestinationsRequest {
	}
	export interface ListPublishingDestinationsRequestFormProperties {
	}
	export function CreateListPublishingDestinationsRequestFormGroup() {
		return new FormGroup<ListPublishingDestinationsRequestFormProperties>({
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

	export interface ListThreatIntelSetsRequest {
	}
	export interface ListThreatIntelSetsRequestFormProperties {
	}
	export function CreateListThreatIntelSetsRequestFormGroup() {
		return new FormGroup<ListThreatIntelSetsRequestFormProperties>({
		});

	}


	/** Represents key, value pair to be matched against given resource property. */
	export interface ScanConditionPair {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** Represents key, value pair to be matched against given resource property. */
	export interface ScanConditionPairFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateScanConditionPairFormGroup() {
		return new FormGroup<ScanConditionPairFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrgFeatureAdditionalConfiguration { EKS_ADDON_MANAGEMENT = 0 }

	export enum OrgFeature { S3_DATA_EVENTS = 0, EKS_AUDIT_LOGS = 1, EBS_MALWARE_PROTECTION = 2, RDS_LOGIN_EVENTS = 3, EKS_RUNTIME_MONITORING = 4, LAMBDA_NETWORK_LOGS = 5 }


	/** An object that contains information on which data sources will be configured to be automatically enabled for new members within the organization. */
	export interface OrganizationDataSourceConfigurations {
		S3Logs?: OrganizationS3LogsConfiguration;
		Kubernetes?: OrganizationKubernetesConfiguration;
		MalwareProtection?: OrganizationMalwareProtectionConfiguration;
	}

	/** An object that contains information on which data sources will be configured to be automatically enabled for new members within the organization. */
	export interface OrganizationDataSourceConfigurationsFormProperties {
	}
	export function CreateOrganizationDataSourceConfigurationsFormGroup() {
		return new FormGroup<OrganizationDataSourceConfigurationsFormProperties>({
		});

	}


	/** Contains information about the condition. */
	export interface ScanCondition {

		/** Required */
		MapEquals: Array<ScanConditionPair>;
	}

	/** Contains information about the condition. */
	export interface ScanConditionFormProperties {
	}
	export function CreateScanConditionFormGroup() {
		return new FormGroup<ScanConditionFormProperties>({
		});

	}


	/** An enum value representing possible resource properties to match with given scan condition. */
	export enum ScanCriterionKey { EC2_INSTANCE_TAG = 0 }

	export interface StartMalwareScanRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface StartMalwareScanRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateStartMalwareScanRequestFormGroup() {
		return new FormGroup<StartMalwareScanRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartMonitoringMembersRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface StartMonitoringMembersRequestFormProperties {
	}
	export function CreateStartMonitoringMembersRequestFormGroup() {
		return new FormGroup<StartMonitoringMembersRequestFormProperties>({
		});

	}

	export interface StopMonitoringMembersRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface StopMonitoringMembersRequestFormProperties {
	}
	export function CreateStopMonitoringMembersRequestFormGroup() {
		return new FormGroup<StopMonitoringMembersRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UnarchiveFindingsRequest {

		/** Required */
		FindingIds: Array<string>;
	}
	export interface UnarchiveFindingsRequestFormProperties {
	}
	export function CreateUnarchiveFindingsRequestFormGroup() {
		return new FormGroup<UnarchiveFindingsRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateDetectorRequest {
		Enable?: boolean | null;
		FindingPublishingFrequency?: FindingPublishingFrequency;
		DataSources?: DataSourceConfigurations;
		Features?: Array<DetectorFeatureConfiguration>;
	}
	export interface UpdateDetectorRequestFormProperties {
		Enable: FormControl<boolean | null | undefined>,
		FindingPublishingFrequency: FormControl<FindingPublishingFrequency | null | undefined>,
	}
	export function CreateUpdateDetectorRequestFormGroup() {
		return new FormGroup<UpdateDetectorRequestFormProperties>({
			Enable: new FormControl<boolean | null | undefined>(undefined),
			FindingPublishingFrequency: new FormControl<FindingPublishingFrequency | null | undefined>(undefined),
		});

	}

	export interface UpdateFilterRequest {
		Description?: string;
		Action?: FilterAction;
		Rank?: number | null;
		FindingCriteria?: FindingCriteria;
	}
	export interface UpdateFilterRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Action: FormControl<FilterAction | null | undefined>,
		Rank: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFilterRequestFormGroup() {
		return new FormGroup<UpdateFilterRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<FilterAction | null | undefined>(undefined),
			Rank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateFindingsFeedbackRequest {

		/** Required */
		FindingIds: Array<string>;

		/** Required */
		Feedback: Feedback;
		Comments?: string;
	}
	export interface UpdateFindingsFeedbackRequestFormProperties {

		/** Required */
		Feedback: FormControl<Feedback | null | undefined>,
		Comments: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFindingsFeedbackRequestFormGroup() {
		return new FormGroup<UpdateFindingsFeedbackRequestFormProperties>({
			Feedback: new FormControl<Feedback | null | undefined>(undefined, [Validators.required]),
			Comments: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIPSetRequest {
		Name?: string;
		Location?: string;
		Activate?: boolean | null;
	}
	export interface UpdateIPSetRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
		Activate: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateIPSetRequestFormGroup() {
		return new FormGroup<UpdateIPSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			Activate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateMalwareScanSettingsRequest {
		ScanResourceCriteria?: ScanResourceCriteria;
		EbsSnapshotPreservation?: EbsSnapshotPreservation;
	}
	export interface UpdateMalwareScanSettingsRequestFormProperties {
		EbsSnapshotPreservation: FormControl<EbsSnapshotPreservation | null | undefined>,
	}
	export function CreateUpdateMalwareScanSettingsRequestFormGroup() {
		return new FormGroup<UpdateMalwareScanSettingsRequestFormProperties>({
			EbsSnapshotPreservation: new FormControl<EbsSnapshotPreservation | null | undefined>(undefined),
		});

	}

	export interface UpdateMemberDetectorsRequest {

		/** Required */
		AccountIds: Array<string>;
		DataSources?: DataSourceConfigurations;
		Features?: Array<MemberFeaturesConfiguration>;
	}
	export interface UpdateMemberDetectorsRequestFormProperties {
	}
	export function CreateUpdateMemberDetectorsRequestFormGroup() {
		return new FormGroup<UpdateMemberDetectorsRequestFormProperties>({
		});

	}

	export interface UpdateOrganizationConfigurationRequest {
		AutoEnable?: boolean | null;
		DataSources?: OrganizationDataSourceConfigurations;
		Features?: Array<OrganizationFeatureConfiguration>;
		AutoEnableOrganizationMembers?: AutoEnableMembers;
	}
	export interface UpdateOrganizationConfigurationRequestFormProperties {
		AutoEnable: FormControl<boolean | null | undefined>,
		AutoEnableOrganizationMembers: FormControl<AutoEnableMembers | null | undefined>,
	}
	export function CreateUpdateOrganizationConfigurationRequestFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationRequestFormProperties>({
			AutoEnable: new FormControl<boolean | null | undefined>(undefined),
			AutoEnableOrganizationMembers: new FormControl<AutoEnableMembers | null | undefined>(undefined),
		});

	}

	export interface UpdatePublishingDestinationRequest {
		DestinationProperties?: DestinationProperties;
	}
	export interface UpdatePublishingDestinationRequestFormProperties {
	}
	export function CreateUpdatePublishingDestinationRequestFormGroup() {
		return new FormGroup<UpdatePublishingDestinationRequestFormProperties>({
		});

	}

	export interface UpdateThreatIntelSetRequest {
		Name?: string;
		Location?: string;
		Activate?: boolean | null;
	}
	export interface UpdateThreatIntelSetRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
		Activate: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateThreatIntelSetRequestFormGroup() {
		return new FormGroup<UpdateThreatIntelSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			Activate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Accepts the invitation to be a member account and get monitored by a GuardDuty administrator account that sent the invitation.
		 * Post detector/{detectorId}/administrator
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {AcceptAdministratorInvitationResponse} Success
		 */
		AcceptAdministratorInvitation(detectorId: string, requestBody: AcceptAdministratorInvitationPostBody): Observable<AcceptAdministratorInvitationResponse> {
			return this.http.post<AcceptAdministratorInvitationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/administrator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the details for the GuardDuty administrator account associated with the current GuardDuty member account.
		 * Get detector/{detectorId}/administrator
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {GetAdministratorAccountResponse} Success
		 */
		GetAdministratorAccount(detectorId: string): Observable<GetAdministratorAccountResponse> {
			return this.http.get<GetAdministratorAccountResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/administrator', {});
		}

		/**
		 * Accepts the invitation to be monitored by a GuardDuty administrator account.
		 * Post detector/{detectorId}/master
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {AcceptInvitationResponse} Success
		 */
		AcceptInvitation(detectorId: string, requestBody: AcceptInvitationPostBody): Observable<AcceptInvitationResponse> {
			return this.http.post<AcceptInvitationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/master', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the details for the GuardDuty administrator account associated with the current GuardDuty member account.
		 * Get detector/{detectorId}/master
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {GetMasterAccountResponse} Success
		 */
		GetMasterAccount(detectorId: string): Observable<GetMasterAccountResponse> {
			return this.http.get<GetMasterAccountResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/master', {});
		}

		/**
		 * <p>Archives GuardDuty findings that are specified by the list of finding IDs.</p> <note> <p>Only the administrator account can archive findings. Member accounts don't have permission to archive findings from their accounts.</p> </note>
		 * Post detector/{detectorId}/findings/archive
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings you want to archive.
		 * @return {ArchiveFindingsResponse} Success
		 */
		ArchiveFindings(detectorId: string, requestBody: ArchiveFindingsPostBody): Observable<ArchiveFindingsResponse> {
			return this.http.post<ArchiveFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/archive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a single Amazon GuardDuty detector. A detector is a resource that represents the GuardDuty service. To start using GuardDuty, you must create a detector in each Region where you enable the service. You can have only one detector per account per Region. All data sources are enabled in a new detector by default.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
		 * Post detector
		 * @return {CreateDetectorResponse} Success
		 */
		CreateDetector(requestBody: CreateDetectorPostBody): Observable<CreateDetectorResponse> {
			return this.http.post<CreateDetectorResponse>(this.baseUri + 'detector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists detectorIds of all the existing Amazon GuardDuty detector resources.
		 * Get detector
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDetectorsResponse} Success
		 */
		ListDetectors(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDetectorsResponse> {
			return this.http.get<ListDetectorsResponse>(this.baseUri + 'detector?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a filter using the specified finding criteria. The maximum number of saved filters per Amazon Web Services account per Region is 100. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_limits.html">Quotas for GuardDuty</a>.
		 * Post detector/{detectorId}/filter
		 * @param {string} detectorId The ID of the detector belonging to the GuardDuty account that you want to create a filter for.
		 * @return {CreateFilterResponse} Success
		 */
		CreateFilter(detectorId: string, requestBody: CreateFilterPostBody): Observable<CreateFilterResponse> {
			return this.http.post<CreateFilterResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of the current filters.
		 * Get detector/{detectorId}/filter
		 * @param {string} detectorId The unique ID of the detector that the filter is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFiltersResponse} Success
		 */
		ListFilters(detectorId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListFiltersResponse> {
			return this.http.get<ListFiltersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new IPSet, which is called a trusted IP list in the console user interface. An IPSet is a list of IP addresses that are trusted for secure communication with Amazon Web Services infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are included in IPSets. Only users from the administrator account can use this operation.
		 * Post detector/{detectorId}/ipset
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to create an IPSet for.
		 * @return {CreateIPSetResponse} Success
		 */
		CreateIPSet(detectorId: string, requestBody: CreateIPSetPostBody): Observable<CreateIPSetResponse> {
			return this.http.post<CreateIPSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the IPSets returned are the IPSets from the associated administrator account.
		 * Get detector/{detectorId}/ipset
		 * @param {string} detectorId The unique ID of the detector that the IPSet is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIPSetsResponse} Success
		 */
		ListIPSets(detectorId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListIPSetsResponse> {
			return this.http.get<ListIPSetsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates member accounts of the current Amazon Web Services account by specifying a list of Amazon Web Services account IDs. This step is a prerequisite for managing the associated member accounts either by invitation or through an organization.</p> <p>As a delegated administrator, using <code>CreateMembers</code> will enable GuardDuty in the added member accounts, with the exception of the organization delegated administrator account. A delegated administrator must enable GuardDuty prior to being added as a member.</p> <p>If you are adding accounts by invitation, before using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html">InviteMembers</a>, use <code>CreateMembers</code> after GuardDuty has been enabled in potential member accounts.</p> <p>If you disassociate a member from a GuardDuty delegated administrator, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html">InviteMembers</a> API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html">DeleteMembers</a> API. </p>
		 * Post detector/{detectorId}/member
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to associate member accounts with.
		 * @return {CreateMembersResponse} Success
		 */
		CreateMembers(detectorId: string, requestBody: CreateMembersPostBody): Observable<CreateMembersResponse> {
			return this.http.post<CreateMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists details about all member accounts for the current GuardDuty administrator account.
		 * Get detector/{detectorId}/member
		 * @param {string} detectorId The unique ID of the detector the member is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} onlyAssociated Specifies whether to only return associated members or to return all members (including members who haven't been invited yet or have been disassociated). Member accounts must have been previously associated with the GuardDuty administrator account using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html"> <code>Create Members</code> </a>. 
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMembersResponse} Success
		 */
		ListMembers(detectorId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, onlyAssociated: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListMembersResponse> {
			return this.http.get<ListMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&onlyAssociated=' + (onlyAssociated == null ? '' : encodeURIComponent(onlyAssociated)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a publishing destination to export findings to. The resource to export findings to must exist before you use this operation.
		 * Post detector/{detectorId}/publishingDestination
		 * @param {string} detectorId The ID of the GuardDuty detector associated with the publishing destination.
		 * @return {CreatePublishingDestinationResponse} Success
		 */
		CreatePublishingDestination(detectorId: string, requestBody: CreatePublishingDestinationPostBody): Observable<CreatePublishingDestinationResponse> {
			return this.http.post<CreatePublishingDestinationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of publishing destinations associated with the specified <code>detectorId</code>.
		 * Get detector/{detectorId}/publishingDestination
		 * @param {string} detectorId The ID of the detector to retrieve publishing destinations for.
		 * @param {number} maxResults The maximum number of results to return in the response.
		 * @param {string} nextToken A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPublishingDestinationsResponse} Success
		 */
		ListPublishingDestinations(detectorId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPublishingDestinationsResponse> {
			return this.http.get<ListPublishingDestinationsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Generates sample findings of types specified by the list of finding types. If 'NULL' is specified for <code>findingTypes</code>, the API generates sample findings of all supported finding types.
		 * Post detector/{detectorId}/findings/create
		 * @param {string} detectorId The ID of the detector to create sample findings for.
		 * @return {CreateSampleFindingsResponse} Success
		 */
		CreateSampleFindings(detectorId: string, requestBody: CreateSampleFindingsPostBody): Observable<CreateSampleFindingsResponse> {
			return this.http.post<CreateSampleFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses. GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator account can use this operation.
		 * Post detector/{detectorId}/threatintelset
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to create a threatIntelSet for.
		 * @return {CreateThreatIntelSetResponse} Success
		 */
		CreateThreatIntelSet(detectorId: string, requestBody: CreateThreatIntelSetPostBody): Observable<CreateThreatIntelSetResponse> {
			return this.http.post<CreateThreatIntelSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the ThreatIntelSets associated with the administrator account are returned.
		 * Get detector/{detectorId}/threatintelset
		 * @param {string} detectorId The unique ID of the detector that the threatIntelSet is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter to paginate results in the response. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListThreatIntelSetsResponse} Success
		 */
		ListThreatIntelSets(detectorId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListThreatIntelSetsResponse> {
			return this.http.get<ListThreatIntelSetsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Declines invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs.
		 * Post invitation/decline
		 * @return {DeclineInvitationsResponse} Success
		 */
		DeclineInvitations(requestBody: DeclineInvitationsPostBody): Observable<DeclineInvitationsResponse> {
			return this.http.post<DeclineInvitationsResponse>(this.baseUri + 'invitation/decline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon GuardDuty detector that is specified by the detector ID.
		 * Delete detector/{detectorId}
		 * @param {string} detectorId The unique ID of the detector that you want to delete.
		 * @return {DeleteDetectorResponse} Success
		 */
		DeleteDetector(detectorId: string): Observable<DeleteDetectorResponse> {
			return this.http.delete<DeleteDetectorResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)), {});
		}

		/**
		 * <p>Retrieves an Amazon GuardDuty detector specified by the detectorId.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
		 * Get detector/{detectorId}
		 * @param {string} detectorId The unique ID of the detector that you want to get.
		 * @return {GetDetectorResponse} Success
		 */
		GetDetector(detectorId: string): Observable<GetDetectorResponse> {
			return this.http.get<GetDetectorResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)), {});
		}

		/**
		 * <p>Updates the Amazon GuardDuty detector specified by the detectorId.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
		 * Post detector/{detectorId}
		 * @param {string} detectorId The unique ID of the detector to update.
		 * @return {UpdateDetectorResponse} Success
		 */
		UpdateDetector(detectorId: string, requestBody: UpdateDetectorPostBody): Observable<UpdateDetectorResponse> {
			return this.http.post<UpdateDetectorResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the filter specified by the filter name.
		 * Delete detector/{detectorId}/filter/{filterName}
		 * @param {string} detectorId The unique ID of the detector that the filter is associated with.
		 * @param {string} filterName The name of the filter that you want to delete.
		 * @return {DeleteFilterResponse} Success
		 */
		DeleteFilter(detectorId: string, filterName: string): Observable<DeleteFilterResponse> {
			return this.http.delete<DeleteFilterResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter/' + (filterName == null ? '' : encodeURIComponent(filterName)), {});
		}

		/**
		 * Returns the details of the filter specified by the filter name.
		 * Get detector/{detectorId}/filter/{filterName}
		 * @param {string} detectorId The unique ID of the detector that the filter is associated with.
		 * @param {string} filterName The name of the filter you want to get.
		 * @return {GetFilterResponse} Success
		 */
		GetFilter(detectorId: string, filterName: string): Observable<GetFilterResponse> {
			return this.http.get<GetFilterResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter/' + (filterName == null ? '' : encodeURIComponent(filterName)), {});
		}

		/**
		 * Updates the filter specified by the filter name.
		 * Post detector/{detectorId}/filter/{filterName}
		 * @param {string} detectorId The unique ID of the detector that specifies the GuardDuty service where you want to update a filter.
		 * @param {string} filterName The name of the filter.
		 * @return {UpdateFilterResponse} Success
		 */
		UpdateFilter(detectorId: string, filterName: string, requestBody: UpdateFilterPostBody): Observable<UpdateFilterResponse> {
			return this.http.post<UpdateFilterResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter/' + (filterName == null ? '' : encodeURIComponent(filterName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the IPSet specified by the <code>ipSetId</code>. IPSets are called trusted IP lists in the console user interface.
		 * Delete detector/{detectorId}/ipset/{ipSetId}
		 * @param {string} detectorId The unique ID of the detector associated with the IPSet.
		 * @param {string} ipSetId The unique ID of the IPSet to delete.
		 * @return {DeleteIPSetResponse} Success
		 */
		DeleteIPSet(detectorId: string, ipSetId: string): Observable<DeleteIPSetResponse> {
			return this.http.delete<DeleteIPSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset/' + (ipSetId == null ? '' : encodeURIComponent(ipSetId)), {});
		}

		/**
		 * Retrieves the IPSet specified by the <code>ipSetId</code>.
		 * Get detector/{detectorId}/ipset/{ipSetId}
		 * @param {string} detectorId The unique ID of the detector that the IPSet is associated with.
		 * @param {string} ipSetId The unique ID of the IPSet to retrieve.
		 * @return {GetIPSetResponse} Success
		 */
		GetIPSet(detectorId: string, ipSetId: string): Observable<GetIPSetResponse> {
			return this.http.get<GetIPSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset/' + (ipSetId == null ? '' : encodeURIComponent(ipSetId)), {});
		}

		/**
		 * Updates the IPSet specified by the IPSet ID.
		 * Post detector/{detectorId}/ipset/{ipSetId}
		 * @param {string} detectorId The detectorID that specifies the GuardDuty service whose IPSet you want to update.
		 * @param {string} ipSetId The unique ID that specifies the IPSet that you want to update.
		 * @return {UpdateIPSetResponse} Success
		 */
		UpdateIPSet(detectorId: string, ipSetId: string, requestBody: UpdateIPSetPostBody): Observable<UpdateIPSetResponse> {
			return this.http.post<UpdateIPSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset/' + (ipSetId == null ? '' : encodeURIComponent(ipSetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs.
		 * Post invitation/delete
		 * @return {DeleteInvitationsResponse} Success
		 */
		DeleteInvitations(requestBody: DeleteInvitationsPostBody): Observable<DeleteInvitationsResponse> {
			return this.http.post<DeleteInvitationsResponse>(this.baseUri + 'invitation/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes GuardDuty member accounts (to the current GuardDuty administrator account) specified by the account IDs.</p> <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to <code>ALL</code>, you'll receive an error if you attempt to disable GuardDuty for a member account in your organization.</p>
		 * Post detector/{detectorId}/member/delete
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account whose members you want to delete.
		 * @return {DeleteMembersResponse} Success
		 */
		DeleteMembers(detectorId: string, requestBody: DeleteMembersPostBody): Observable<DeleteMembersResponse> {
			return this.http.post<DeleteMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the publishing definition with the specified <code>destinationId</code>.
		 * Delete detector/{detectorId}/publishingDestination/{destinationId}
		 * @param {string} detectorId The unique ID of the detector associated with the publishing destination to delete.
		 * @param {string} destinationId The ID of the publishing destination to delete.
		 * @return {DeletePublishingDestinationResponse} Success
		 */
		DeletePublishingDestination(detectorId: string, destinationId: string): Observable<DeletePublishingDestinationResponse> {
			return this.http.delete<DeletePublishingDestinationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination/' + (destinationId == null ? '' : encodeURIComponent(destinationId)), {});
		}

		/**
		 * Returns information about the publishing destination specified by the provided <code>destinationId</code>.
		 * Get detector/{detectorId}/publishingDestination/{destinationId}
		 * @param {string} detectorId The unique ID of the detector associated with the publishing destination to retrieve.
		 * @param {string} destinationId The ID of the publishing destination to retrieve.
		 * @return {DescribePublishingDestinationResponse} Success
		 */
		DescribePublishingDestination(detectorId: string, destinationId: string): Observable<DescribePublishingDestinationResponse> {
			return this.http.get<DescribePublishingDestinationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination/' + (destinationId == null ? '' : encodeURIComponent(destinationId)), {});
		}

		/**
		 * Updates information about the publishing destination specified by the <code>destinationId</code>.
		 * Post detector/{detectorId}/publishingDestination/{destinationId}
		 * @param {string} detectorId The ID of the detector associated with the publishing destinations to update.
		 * @param {string} destinationId The ID of the publishing destination to update.
		 * @return {UpdatePublishingDestinationResponse} Success
		 */
		UpdatePublishingDestination(detectorId: string, destinationId: string, requestBody: UpdatePublishingDestinationPostBody): Observable<UpdatePublishingDestinationResponse> {
			return this.http.post<UpdatePublishingDestinationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination/' + (destinationId == null ? '' : encodeURIComponent(destinationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the ThreatIntelSet specified by the ThreatIntelSet ID.
		 * Delete detector/{detectorId}/threatintelset/{threatIntelSetId}
		 * @param {string} detectorId The unique ID of the detector that the threatIntelSet is associated with.
		 * @param {string} threatIntelSetId The unique ID of the threatIntelSet that you want to delete.
		 * @return {DeleteThreatIntelSetResponse} Success
		 */
		DeleteThreatIntelSet(detectorId: string, threatIntelSetId: string): Observable<DeleteThreatIntelSetResponse> {
			return this.http.delete<DeleteThreatIntelSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset/' + (threatIntelSetId == null ? '' : encodeURIComponent(threatIntelSetId)), {});
		}

		/**
		 * Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.
		 * Get detector/{detectorId}/threatintelset/{threatIntelSetId}
		 * @param {string} detectorId The unique ID of the detector that the threatIntelSet is associated with.
		 * @param {string} threatIntelSetId The unique ID of the threatIntelSet that you want to get.
		 * @return {GetThreatIntelSetResponse} Success
		 */
		GetThreatIntelSet(detectorId: string, threatIntelSetId: string): Observable<GetThreatIntelSetResponse> {
			return this.http.get<GetThreatIntelSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset/' + (threatIntelSetId == null ? '' : encodeURIComponent(threatIntelSetId)), {});
		}

		/**
		 * Updates the ThreatIntelSet specified by the ThreatIntelSet ID.
		 * Post detector/{detectorId}/threatintelset/{threatIntelSetId}
		 * @param {string} detectorId The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to update.
		 * @param {string} threatIntelSetId The unique ID that specifies the ThreatIntelSet that you want to update.
		 * @return {UpdateThreatIntelSetResponse} Success
		 */
		UpdateThreatIntelSet(detectorId: string, threatIntelSetId: string, requestBody: UpdateThreatIntelSetPostBody): Observable<UpdateThreatIntelSetResponse> {
			return this.http.post<UpdateThreatIntelSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset/' + (threatIntelSetId == null ? '' : encodeURIComponent(threatIntelSetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of malware scans. Each member account can view the malware scans for their own accounts. An administrator can view the malware scans for all the member accounts.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
		 * Post detector/{detectorId}/malware-scans
		 * @param {string} detectorId The unique ID of the detector that the request is associated with.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeMalwareScansResponse} Success
		 */
		DescribeMalwareScans(detectorId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeMalwareScansPostBody): Observable<DescribeMalwareScansResponse> {
			return this.http.post<DescribeMalwareScansResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/malware-scans&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the account selected as the delegated administrator for GuardDuty.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
		 * Get detector/{detectorId}/admin
		 * @param {string} detectorId The ID of the detector to retrieve information about the delegated administrator from.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill <code>nextToken</code> in the request with the value of <code>NextToken</code> from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeOrganizationConfigurationResponse} Success
		 */
		DescribeOrganizationConfiguration(detectorId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<DescribeOrganizationConfigurationResponse> {
			return this.http.get<DescribeOrganizationConfigurationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/admin&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Configures the delegated administrator account with the provided values. You must provide the value for either <code>autoEnableOrganizationMembers</code> or <code>autoEnable</code>. </p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
		 * Post detector/{detectorId}/admin
		 * @param {string} detectorId The ID of the detector that configures the delegated administrator.
		 * @return {UpdateOrganizationConfigurationResponse} Success
		 */
		UpdateOrganizationConfiguration(detectorId: string, requestBody: UpdateOrganizationConfigurationPostBody): Observable<UpdateOrganizationConfigurationResponse> {
			return this.http.post<UpdateOrganizationConfigurationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/admin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables an Amazon Web Services account within the Organization as the GuardDuty delegated administrator.
		 * Post admin/disable
		 * @return {DisableOrganizationAdminAccountResponse} Success
		 */
		DisableOrganizationAdminAccount(requestBody: DisableOrganizationAdminAccountPostBody): Observable<DisableOrganizationAdminAccountResponse> {
			return this.http.post<DisableOrganizationAdminAccountResponse>(this.baseUri + 'admin/disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates the current GuardDuty member account from its administrator account.</p> <p>When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html">CreateMembers</a> API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html">InviteMembers</a> API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html">DeleteMembers</a> API. </p> <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to <code>ALL</code>, you'll receive an error if you attempt to disable GuardDuty in a member account.</p>
		 * Post detector/{detectorId}/administrator/disassociate
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {DisassociateFromAdministratorAccountResponse} Success
		 */
		DisassociateFromAdministratorAccount(detectorId: string): Observable<DisassociateFromAdministratorAccountResponse> {
			return this.http.post<DisassociateFromAdministratorAccountResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/administrator/disassociate', null, {});
		}

		/**
		 * <p>Disassociates the current GuardDuty member account from its administrator account.</p> <p>When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html">CreateMembers</a> API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html">InviteMembers</a> API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html">DeleteMembers</a> API.</p>
		 * Post detector/{detectorId}/master/disassociate
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {DisassociateFromMasterAccountResponse} Success
		 */
		DisassociateFromMasterAccount(detectorId: string): Observable<DisassociateFromMasterAccountResponse> {
			return this.http.post<DisassociateFromMasterAccountResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/master/disassociate', null, {});
		}

		/**
		 * <p>Disassociates GuardDuty member accounts (from the current administrator account) specified by the account IDs.</p> <p>When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html">CreateMembers</a> API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html">InviteMembers</a> API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html">DeleteMembers</a> API. </p> <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to <code>ALL</code>, you'll receive an error if you attempt to disassociate a member account before removing them from your Amazon Web Services organization.</p>
		 * Post detector/{detectorId}/member/disassociate
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account whose members you want to disassociate from the administrator account.
		 * @return {DisassociateMembersResponse} Success
		 */
		DisassociateMembers(detectorId: string, requestBody: DisassociateMembersPostBody): Observable<DisassociateMembersResponse> {
			return this.http.post<DisassociateMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/disassociate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables an Amazon Web Services account within the organization as the GuardDuty delegated administrator.
		 * Post admin/enable
		 * @return {EnableOrganizationAdminAccountResponse} Success
		 */
		EnableOrganizationAdminAccount(requestBody: EnableOrganizationAdminAccountPostBody): Observable<EnableOrganizationAdminAccountResponse> {
			return this.http.post<EnableOrganizationAdminAccountResponse>(this.baseUri + 'admin/enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves aggregated statistics for your account. If you are a GuardDuty administrator, you can retrieve the statistics for all the resources associated with the active member accounts in your organization who have enabled EKS Runtime Monitoring and have the GuardDuty agent running on their EKS nodes.
		 * Post detector/{detectorId}/coverage/statistics
		 * @param {string} detectorId The unique ID of the GuardDuty detector associated to the coverage statistics.
		 * @return {GetCoverageStatisticsResponse} Success
		 */
		GetCoverageStatistics(detectorId: string, requestBody: GetCoverageStatisticsPostBody): Observable<GetCoverageStatisticsResponse> {
			return this.http.post<GetCoverageStatisticsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/coverage/statistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes Amazon GuardDuty findings specified by finding IDs.
		 * Post detector/{detectorId}/findings/get
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings you want to retrieve.
		 * @return {GetFindingsResponse} Success
		 */
		GetFindings(detectorId: string, requestBody: GetFindingsPostBody): Observable<GetFindingsResponse> {
			return this.http.post<GetFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Amazon GuardDuty findings statistics for the specified detector ID.
		 * Post detector/{detectorId}/findings/statistics
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings' statistics you want to retrieve.
		 * @return {GetFindingsStatisticsResponse} Success
		 */
		GetFindingsStatistics(detectorId: string, requestBody: GetFindingsStatisticsPostBody): Observable<GetFindingsStatisticsResponse> {
			return this.http.post<GetFindingsStatisticsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/statistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the count of all GuardDuty membership invitations that were sent to the current member account except the currently accepted invitation.
		 * Get invitation/count
		 * @return {GetInvitationsCountResponse} Success
		 */
		GetInvitationsCount(): Observable<GetInvitationsCountResponse> {
			return this.http.get<GetInvitationsCountResponse>(this.baseUri + 'invitation/count', {});
		}

		/**
		 * <p>Returns the details of the malware scan settings.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
		 * Get detector/{detectorId}/malware-scan-settings
		 * @param {string} detectorId The unique ID of the detector that the scan setting is associated with.
		 * @return {GetMalwareScanSettingsResponse} Success
		 */
		GetMalwareScanSettings(detectorId: string): Observable<GetMalwareScanSettingsResponse> {
			return this.http.get<GetMalwareScanSettingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/malware-scan-settings', {});
		}

		/**
		 * <p>Updates the malware scan settings.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
		 * Post detector/{detectorId}/malware-scan-settings
		 * @param {string} detectorId The unique ID of the detector that specifies the GuardDuty service where you want to update scan settings.
		 * @return {UpdateMalwareScanSettingsResponse} Success
		 */
		UpdateMalwareScanSettings(detectorId: string, requestBody: UpdateMalwareScanSettingsPostBody): Observable<UpdateMalwareScanSettingsResponse> {
			return this.http.post<UpdateMalwareScanSettingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/malware-scan-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes which data sources are enabled for the member account's detector.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
		 * Post detector/{detectorId}/member/detector/get
		 * @param {string} detectorId The detector ID for the administrator account.
		 * @return {GetMemberDetectorsResponse} Success
		 */
		GetMemberDetectors(detectorId: string, requestBody: GetMemberDetectorsPostBody): Observable<GetMemberDetectorsResponse> {
			return this.http.post<GetMemberDetectorsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/detector/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves GuardDuty member accounts (of the current GuardDuty administrator account) specified by the account IDs.
		 * Post detector/{detectorId}/member/get
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account whose members you want to retrieve.
		 * @return {GetMembersResponse} Success
		 */
		GetMembers(detectorId: string, requestBody: GetMembersPostBody): Observable<GetMembersResponse> {
			return this.http.post<GetMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the number of days left for each data source used in the free trial period.
		 * Post detector/{detectorId}/freeTrial/daysRemaining
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {GetRemainingFreeTrialDaysResponse} Success
		 */
		GetRemainingFreeTrialDays(detectorId: string, requestBody: GetRemainingFreeTrialDaysPostBody): Observable<GetRemainingFreeTrialDaysResponse> {
			return this.http.post<GetRemainingFreeTrialDaysResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/freeTrial/daysRemaining', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Amazon GuardDuty usage statistics over the last 30 days for the specified detector ID. For newly enabled detectors or data sources, the cost returned will include only the usage so far under 30 days. This may differ from the cost metrics in the console, which project usage over 30 days to provide a monthly cost estimate. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/monitoring_costs.html#usage-calculations">Understanding How Usage Costs are Calculated</a>.
		 * Post detector/{detectorId}/usage/statistics
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose usage statistics you want to retrieve.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetUsageStatisticsResponse} Success
		 */
		GetUsageStatistics(detectorId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetUsageStatisticsPostBody): Observable<GetUsageStatisticsResponse> {
			return this.http.post<GetUsageStatisticsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/usage/statistics&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Invites Amazon Web Services accounts to become members of an organization administered by the Amazon Web Services account that invokes this API. If you are using Amazon Web Services Organizations to manager your GuardDuty environment, this step is not needed. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_organizations.html">Managing accounts with Amazon Web Services Organizations</a>.</p> <p>To invite Amazon Web Services accounts, the first step is to ensure that GuardDuty has been enabled in the potential member accounts. You can now invoke this API to add accounts by invitation. The invited accounts can either accept or decline the invitation from their GuardDuty accounts. Each invited Amazon Web Services account can choose to accept the invitation from only one Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_invitations.html">Managing GuardDuty accounts by invitation</a>.</p> <p>After the invite has been accepted and you choose to disassociate a member account (by using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateMembers.html">DisassociateMembers</a>) from your account, the details of the member account obtained by invoking <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html">CreateMembers</a>, including the associated email addresses, will be retained. This is done so that you can invoke InviteMembers without the need to invoke <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html">CreateMembers</a> again. To remove the details associated with a member account, you must also invoke <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html">DeleteMembers</a>. </p>
		 * Post detector/{detectorId}/member/invite
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to invite members with.
		 * @return {InviteMembersResponse} Success
		 */
		InviteMembers(detectorId: string, requestBody: InviteMembersPostBody): Observable<InviteMembersResponse> {
			return this.http.post<InviteMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/invite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists coverage details for your GuardDuty account. If you're a GuardDuty administrator, you can retrieve all resources associated with the active member accounts in your organization.</p> <p>Make sure the accounts have EKS Runtime Monitoring enabled and GuardDuty agent running on their EKS nodes.</p>
		 * Post detector/{detectorId}/coverage
		 * @param {string} detectorId The unique ID of the detector whose coverage details you want to retrieve.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCoverageResponse} Success
		 */
		ListCoverage(detectorId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCoveragePostBody): Observable<ListCoverageResponse> {
			return this.http.post<ListCoverageResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/coverage&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Amazon GuardDuty findings for the specified detector ID.
		 * Post detector/{detectorId}/findings
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings you want to list.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFindingsResponse} Success
		 */
		ListFindings(detectorId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFindingsPostBody): Observable<ListFindingsResponse> {
			return this.http.post<ListFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GuardDuty membership invitations that were sent to the current Amazon Web Services account.
		 * Get invitation
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInvitationsResponse} Success
		 */
		ListInvitations(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListInvitationsResponse> {
			return this.http.get<ListInvitationsResponse>(this.baseUri + 'invitation?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the accounts configured as GuardDuty delegated administrators.
		 * Get admin
		 * @param {number} maxResults The maximum number of results to return in the response.
		 * @param {string} nextToken A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOrganizationAdminAccountsResponse} Success
		 */
		ListOrganizationAdminAccounts(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListOrganizationAdminAccountsResponse> {
			return this.http.get<ListOrganizationAdminAccountsResponse>(this.baseUri + 'admin?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists tags for a resource. Tagging is currently supported for detectors, finding filters, IP sets, threat intel sets, publishing destination, with a limit of 50 tags per resource. When invoked, this operation returns all assigned tags for a given resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the given GuardDuty resource. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds tags to a resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Initiates the malware scan. Invoking this API will automatically create the <a href="https://docs.aws.amazon.com/guardduty/latest/ug/slr-permissions-malware-protection.html">Service-linked role </a> in the corresponding account.
		 * Post malware-scan/start
		 * @return {StartMalwareScanResponse} Success
		 */
		StartMalwareScan(requestBody: StartMalwareScanPostBody): Observable<StartMalwareScanResponse> {
			return this.http.post<StartMalwareScanResponse>(this.baseUri + 'malware-scan/start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Turns on GuardDuty monitoring of the specified member accounts. Use this operation to restart monitoring of accounts that you stopped monitoring with the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StopMonitoringMembers.html">StopMonitoringMembers</a> operation.
		 * Post detector/{detectorId}/member/start
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty administrator account associated with the member accounts to monitor.
		 * @return {StartMonitoringMembersResponse} Success
		 */
		StartMonitoringMembers(detectorId: string, requestBody: StartMonitoringMembersPostBody): Observable<StartMonitoringMembersResponse> {
			return this.http.post<StartMonitoringMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops GuardDuty monitoring for the specified member accounts. Use the <code>StartMonitoringMembers</code> operation to restart monitoring for those accounts.</p> <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to <code>ALL</code>, you'll receive an error if you attempt to stop monitoring the member accounts in your organization.</p>
		 * Post detector/{detectorId}/member/stop
		 * @param {string} detectorId The unique ID of the detector associated with the GuardDuty administrator account that is monitoring member accounts.
		 * @return {StopMonitoringMembersResponse} Success
		 */
		StopMonitoringMembers(detectorId: string, requestBody: StopMonitoringMembersPostBody): Observable<StopMonitoringMembersResponse> {
			return this.http.post<StopMonitoringMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unarchives GuardDuty findings specified by the <code>findingIds</code>.
		 * Post detector/{detectorId}/findings/unarchive
		 * @param {string} detectorId The ID of the detector associated with the findings to unarchive.
		 * @return {UnarchiveFindingsResponse} Success
		 */
		UnarchiveFindings(detectorId: string, requestBody: UnarchiveFindingsPostBody): Observable<UnarchiveFindingsResponse> {
			return this.http.post<UnarchiveFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/unarchive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the resource to remove tags from.
		 * @param {Array<string>} tagKeys The tag keys to remove from the resource.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Marks the specified GuardDuty findings as useful or not useful.
		 * Post detector/{detectorId}/findings/feedback
		 * @param {string} detectorId The ID of the detector associated with the findings to update feedback for.
		 * @return {UpdateFindingsFeedbackResponse} Success
		 */
		UpdateFindingsFeedback(detectorId: string, requestBody: UpdateFindingsFeedbackPostBody): Observable<UpdateFindingsFeedbackResponse> {
			return this.http.post<UpdateFindingsFeedbackResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/feedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Contains information on member accounts to be updated.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
		 * Post detector/{detectorId}/member/detector/update
		 * @param {string} detectorId The detector ID of the administrator account.
		 * @return {UpdateMemberDetectorsResponse} Success
		 */
		UpdateMemberDetectors(detectorId: string, requestBody: UpdateMemberDetectorsPostBody): Observable<UpdateMemberDetectorsResponse> {
			return this.http.post<UpdateMemberDetectorsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/detector/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AcceptAdministratorInvitationPostBody {

		/**
		 * The account ID of the GuardDuty administrator account whose invitation you're accepting.
		 * Required
		 */
		administratorId: string;

		/**
		 * The value that is used to validate the administrator account to the member account.
		 * Required
		 */
		invitationId: string;
	}
	export interface AcceptAdministratorInvitationPostBodyFormProperties {

		/**
		 * The account ID of the GuardDuty administrator account whose invitation you're accepting.
		 * Required
		 */
		administratorId: FormControl<string | null | undefined>,

		/**
		 * The value that is used to validate the administrator account to the member account.
		 * Required
		 */
		invitationId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptAdministratorInvitationPostBodyFormGroup() {
		return new FormGroup<AcceptAdministratorInvitationPostBodyFormProperties>({
			administratorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			invitationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AcceptInvitationPostBody {

		/**
		 * The account ID of the GuardDuty administrator account whose invitation you're accepting.
		 * Required
		 */
		masterId: string;

		/**
		 * The value that is used to validate the administrator account to the member account.
		 * Required
		 */
		invitationId: string;
	}
	export interface AcceptInvitationPostBodyFormProperties {

		/**
		 * The account ID of the GuardDuty administrator account whose invitation you're accepting.
		 * Required
		 */
		masterId: FormControl<string | null | undefined>,

		/**
		 * The value that is used to validate the administrator account to the member account.
		 * Required
		 */
		invitationId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationPostBodyFormGroup() {
		return new FormGroup<AcceptInvitationPostBodyFormProperties>({
			masterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			invitationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArchiveFindingsPostBody {

		/**
		 * The IDs of the findings that you want to archive.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<string>;
	}
	export interface ArchiveFindingsPostBodyFormProperties {
	}
	export function CreateArchiveFindingsPostBodyFormGroup() {
		return new FormGroup<ArchiveFindingsPostBodyFormProperties>({
		});

	}

	export interface CreateDetectorPostBody {

		/**
		 * A Boolean value that specifies whether the detector is to be enabled.
		 * Required
		 */
		enable: boolean;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string | null;

		/** A value that specifies how frequently updated findings are exported. */
		findingPublishingFrequency?: FindingPublishingFrequency | null;

		/** Contains information about which data sources are enabled. */
		dataSources?: CreateDetectorPostBodyDataSources;

		/** The tags to be added to a new detector resource. */
		tags?: {[id: string]: string };

		/** A list of features that will be configured for the detector. */
		features?: Array<DetectorFeatureConfiguration>;
	}
	export interface CreateDetectorPostBodyFormProperties {

		/**
		 * A Boolean value that specifies whether the detector is to be enabled.
		 * Required
		 */
		enable: FormControl<boolean | null | undefined>,

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A value that specifies how frequently updated findings are exported. */
		findingPublishingFrequency: FormControl<FindingPublishingFrequency | null | undefined>,

		/** The tags to be added to a new detector resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDetectorPostBodyFormGroup() {
		return new FormGroup<CreateDetectorPostBodyFormProperties>({
			enable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			findingPublishingFrequency: new FormControl<FindingPublishingFrequency | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateDetectorPostBodyDataSources {
		S3Logs?: S3LogsConfiguration;
		Kubernetes?: KubernetesConfiguration;
		MalwareProtection?: MalwareProtectionConfiguration;
	}
	export interface CreateDetectorPostBodyDataSourcesFormProperties {
	}
	export function CreateCreateDetectorPostBodyDataSourcesFormGroup() {
		return new FormGroup<CreateDetectorPostBodyDataSourcesFormProperties>({
		});

	}

	export interface CreateFilterPostBody {

		/**
		 * The name of the filter. Valid characters include period (.), underscore (_), dash (-), and alphanumeric characters. A whitespace is considered to be an invalid character.
		 * Required
		 * Max length: 64
		 * Min length: 3
		 */
		name: string;

		/**
		 * The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses (<code>{ }</code>, <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace.
		 * Max length: 512
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Specifies the action that is to be applied to the findings that match the filter.
		 * Max length: 300
		 * Min length: 1
		 */
		action?: FilterAction | null;

		/**
		 * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
		 * Minimum: 1
		 * Maximum: 100
		 */
		rank?: number | null;

		/**
		 * Contains information about the criteria used for querying findings.
		 * Required
		 */
		findingCriteria: CreateFilterPostBodyFindingCriteria;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string | null;

		/** The tags to be added to a new filter resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateFilterPostBodyFormProperties {

		/**
		 * The name of the filter. Valid characters include period (.), underscore (_), dash (-), and alphanumeric characters. A whitespace is considered to be an invalid character.
		 * Required
		 * Max length: 64
		 * Min length: 3
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses (<code>{ }</code>, <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace.
		 * Max length: 512
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Specifies the action that is to be applied to the findings that match the filter.
		 * Max length: 300
		 * Min length: 1
		 */
		action: FormControl<FilterAction | null | undefined>,

		/**
		 * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
		 * Minimum: 1
		 * Maximum: 100
		 */
		rank: FormControl<number | null | undefined>,

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The tags to be added to a new filter resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateFilterPostBodyFormGroup() {
		return new FormGroup<CreateFilterPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(64)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512)]),
			action: new FormControl<FilterAction | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(300)]),
			rank: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateFilterPostBodyFindingCriteria {
		Criterion?: Criterion;
	}
	export interface CreateFilterPostBodyFindingCriteriaFormProperties {
	}
	export function CreateCreateFilterPostBodyFindingCriteriaFormGroup() {
		return new FormGroup<CreateFilterPostBodyFindingCriteriaFormProperties>({
		});

	}

	export interface CreateIPSetPostBody {

		/**
		 * <p>The user-friendly name to identify the IPSet.</p> <p> Allowed characters are alphanumeric, whitespace, dash (-), and underscores (_).</p>
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: string;

		/**
		 * The format of the file that contains the IPSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		format: IpSetFormat;

		/**
		 * The URI of the file that contains the IPSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		location: string;

		/**
		 * A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet.
		 * Required
		 */
		activate: boolean;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string | null;

		/** The tags to be added to a new IP set resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateIPSetPostBodyFormProperties {

		/**
		 * <p>The user-friendly name to identify the IPSet.</p> <p> Allowed characters are alphanumeric, whitespace, dash (-), and underscores (_).</p>
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The format of the file that contains the IPSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		format: FormControl<IpSetFormat | null | undefined>,

		/**
		 * The URI of the file that contains the IPSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet.
		 * Required
		 */
		activate: FormControl<boolean | null | undefined>,

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The tags to be added to a new IP set resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateIPSetPostBodyFormGroup() {
		return new FormGroup<CreateIPSetPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300)]),
			format: new FormControl<IpSetFormat | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300)]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300)]),
			activate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateMembersPostBody {

		/**
		 * A list of account ID and email address pairs of the accounts that you want to associate with the GuardDuty administrator account.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountDetails: Array<AccountDetail>;
	}
	export interface CreateMembersPostBodyFormProperties {
	}
	export function CreateCreateMembersPostBodyFormGroup() {
		return new FormGroup<CreateMembersPostBodyFormProperties>({
		});

	}

	export interface CreatePublishingDestinationPostBody {

		/**
		 * The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		destinationType: DestinationType;

		/**
		 * Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.
		 * Required
		 */
		destinationProperties: CreatePublishingDestinationPostBodyDestinationProperties;

		/**
		 * The idempotency token for the request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string | null;
	}
	export interface CreatePublishingDestinationPostBodyFormProperties {

		/**
		 * The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		destinationType: FormControl<DestinationType | null | undefined>,

		/**
		 * The idempotency token for the request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePublishingDestinationPostBodyFormGroup() {
		return new FormGroup<CreatePublishingDestinationPostBodyFormProperties>({
			destinationType: new FormControl<DestinationType | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
		});

	}

	export interface CreatePublishingDestinationPostBodyDestinationProperties {
		DestinationArn?: string;
		KmsKeyArn?: string;
	}
	export interface CreatePublishingDestinationPostBodyDestinationPropertiesFormProperties {
		DestinationArn: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePublishingDestinationPostBodyDestinationPropertiesFormGroup() {
		return new FormGroup<CreatePublishingDestinationPostBodyDestinationPropertiesFormProperties>({
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSampleFindingsPostBody {

		/**
		 * The types of sample findings to generate.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingTypes?: Array<string>;
	}
	export interface CreateSampleFindingsPostBodyFormProperties {
	}
	export function CreateCreateSampleFindingsPostBodyFormGroup() {
		return new FormGroup<CreateSampleFindingsPostBodyFormProperties>({
		});

	}

	export interface CreateThreatIntelSetPostBody {

		/**
		 * A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: string;

		/**
		 * The format of the file that contains the ThreatIntelSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		format: IpSetFormat;

		/**
		 * The URI of the file that contains the ThreatIntelSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		location: string;

		/**
		 * A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet.
		 * Required
		 */
		activate: boolean;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string | null;

		/** The tags to be added to a new threat list resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateThreatIntelSetPostBodyFormProperties {

		/**
		 * A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The format of the file that contains the ThreatIntelSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		format: FormControl<IpSetFormat | null | undefined>,

		/**
		 * The URI of the file that contains the ThreatIntelSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet.
		 * Required
		 */
		activate: FormControl<boolean | null | undefined>,

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The tags to be added to a new threat list resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateThreatIntelSetPostBodyFormGroup() {
		return new FormGroup<CreateThreatIntelSetPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300)]),
			format: new FormControl<IpSetFormat | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300)]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300)]),
			activate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface DeclineInvitationsPostBody {

		/**
		 * A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member account that you want to decline invitations from.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface DeclineInvitationsPostBodyFormProperties {
	}
	export function CreateDeclineInvitationsPostBodyFormGroup() {
		return new FormGroup<DeclineInvitationsPostBodyFormProperties>({
		});

	}

	export interface UpdateDetectorPostBody {

		/** Specifies whether the detector is enabled or not enabled. */
		enable?: boolean | null;

		/** An enum value that specifies how frequently findings are exported, such as to CloudWatch Events. */
		findingPublishingFrequency?: FindingPublishingFrequency | null;

		/** Contains information about which data sources are enabled. */
		dataSources?: UpdateDetectorPostBodyDataSources;

		/** Provides the features that will be updated for the detector. */
		features?: Array<DetectorFeatureConfiguration>;
	}
	export interface UpdateDetectorPostBodyFormProperties {

		/** Specifies whether the detector is enabled or not enabled. */
		enable: FormControl<boolean | null | undefined>,

		/** An enum value that specifies how frequently findings are exported, such as to CloudWatch Events. */
		findingPublishingFrequency: FormControl<FindingPublishingFrequency | null | undefined>,
	}
	export function CreateUpdateDetectorPostBodyFormGroup() {
		return new FormGroup<UpdateDetectorPostBodyFormProperties>({
			enable: new FormControl<boolean | null | undefined>(undefined),
			findingPublishingFrequency: new FormControl<FindingPublishingFrequency | null | undefined>(undefined),
		});

	}

	export interface UpdateDetectorPostBodyDataSources {
		S3Logs?: S3LogsConfiguration;
		Kubernetes?: KubernetesConfiguration;
		MalwareProtection?: MalwareProtectionConfiguration;
	}
	export interface UpdateDetectorPostBodyDataSourcesFormProperties {
	}
	export function CreateUpdateDetectorPostBodyDataSourcesFormGroup() {
		return new FormGroup<UpdateDetectorPostBodyDataSourcesFormProperties>({
		});

	}

	export interface UpdateFilterPostBody {

		/**
		 * The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses (<code>{ }</code>, <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace.
		 * Max length: 512
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Specifies the action that is to be applied to the findings that match the filter.
		 * Max length: 300
		 * Min length: 1
		 */
		action?: FilterAction | null;

		/**
		 * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
		 * Minimum: 1
		 * Maximum: 100
		 */
		rank?: number | null;

		/** Contains information about the criteria used for querying findings. */
		findingCriteria?: UpdateFilterPostBodyFindingCriteria;
	}
	export interface UpdateFilterPostBodyFormProperties {

		/**
		 * The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses (<code>{ }</code>, <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace.
		 * Max length: 512
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Specifies the action that is to be applied to the findings that match the filter.
		 * Max length: 300
		 * Min length: 1
		 */
		action: FormControl<FilterAction | null | undefined>,

		/**
		 * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
		 * Minimum: 1
		 * Maximum: 100
		 */
		rank: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFilterPostBodyFormGroup() {
		return new FormGroup<UpdateFilterPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512)]),
			action: new FormControl<FilterAction | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(300)]),
			rank: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface UpdateFilterPostBodyFindingCriteria {
		Criterion?: Criterion;
	}
	export interface UpdateFilterPostBodyFindingCriteriaFormProperties {
	}
	export function CreateUpdateFilterPostBodyFindingCriteriaFormGroup() {
		return new FormGroup<UpdateFilterPostBodyFindingCriteriaFormProperties>({
		});

	}

	export interface UpdateIPSetPostBody {

		/**
		 * The unique ID that specifies the IPSet that you want to update.
		 * Max length: 300
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The updated URI of the file that contains the IPSet.
		 * Max length: 300
		 * Min length: 1
		 */
		location?: string | null;

		/** The updated Boolean value that specifies whether the IPSet is active or not. */
		activate?: boolean | null;
	}
	export interface UpdateIPSetPostBodyFormProperties {

		/**
		 * The unique ID that specifies the IPSet that you want to update.
		 * Max length: 300
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The updated URI of the file that contains the IPSet.
		 * Max length: 300
		 * Min length: 1
		 */
		location: FormControl<string | null | undefined>,

		/** The updated Boolean value that specifies whether the IPSet is active or not. */
		activate: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateIPSetPostBodyFormGroup() {
		return new FormGroup<UpdateIPSetPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(300)]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(300)]),
			activate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteInvitationsPostBody {

		/**
		 * A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member account that you want to delete invitations from.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface DeleteInvitationsPostBodyFormProperties {
	}
	export function CreateDeleteInvitationsPostBodyFormGroup() {
		return new FormGroup<DeleteInvitationsPostBodyFormProperties>({
		});

	}

	export interface DeleteMembersPostBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts that you want to delete.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface DeleteMembersPostBodyFormProperties {
	}
	export function CreateDeleteMembersPostBodyFormGroup() {
		return new FormGroup<DeleteMembersPostBodyFormProperties>({
		});

	}

	export interface UpdatePublishingDestinationPostBody {

		/** Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
		destinationProperties?: UpdatePublishingDestinationPostBodyDestinationProperties;
	}
	export interface UpdatePublishingDestinationPostBodyFormProperties {
	}
	export function CreateUpdatePublishingDestinationPostBodyFormGroup() {
		return new FormGroup<UpdatePublishingDestinationPostBodyFormProperties>({
		});

	}

	export interface UpdatePublishingDestinationPostBodyDestinationProperties {
		DestinationArn?: string;
		KmsKeyArn?: string;
	}
	export interface UpdatePublishingDestinationPostBodyDestinationPropertiesFormProperties {
		DestinationArn: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePublishingDestinationPostBodyDestinationPropertiesFormGroup() {
		return new FormGroup<UpdatePublishingDestinationPostBodyDestinationPropertiesFormProperties>({
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateThreatIntelSetPostBody {

		/**
		 * The unique ID that specifies the ThreatIntelSet that you want to update.
		 * Max length: 300
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The updated URI of the file that contains the ThreateIntelSet.
		 * Max length: 300
		 * Min length: 1
		 */
		location?: string | null;

		/** The updated Boolean value that specifies whether the ThreateIntelSet is active or not. */
		activate?: boolean | null;
	}
	export interface UpdateThreatIntelSetPostBodyFormProperties {

		/**
		 * The unique ID that specifies the ThreatIntelSet that you want to update.
		 * Max length: 300
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The updated URI of the file that contains the ThreateIntelSet.
		 * Max length: 300
		 * Min length: 1
		 */
		location: FormControl<string | null | undefined>,

		/** The updated Boolean value that specifies whether the ThreateIntelSet is active or not. */
		activate: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateThreatIntelSetPostBodyFormGroup() {
		return new FormGroup<UpdateThreatIntelSetPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(300)]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(300)]),
			activate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeMalwareScansPostBody {

		/** You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data. */
		nextToken?: string | null;

		/**
		 * You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number | null;

		/** Represents the criteria to be used in the filter for describing scan entries. */
		filterCriteria?: DescribeMalwareScansPostBodyFilterCriteria;

		/** Contains information about the criteria used for sorting findings. */
		sortCriteria?: DescribeMalwareScansPostBodySortCriteria;
	}
	export interface DescribeMalwareScansPostBodyFormProperties {

		/** You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeMalwareScansPostBodyFormGroup() {
		return new FormGroup<DescribeMalwareScansPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface DescribeMalwareScansPostBodyFilterCriteria {
		FilterCriterion?: Array<FilterCriterion>;
	}
	export interface DescribeMalwareScansPostBodyFilterCriteriaFormProperties {
	}
	export function CreateDescribeMalwareScansPostBodyFilterCriteriaFormGroup() {
		return new FormGroup<DescribeMalwareScansPostBodyFilterCriteriaFormProperties>({
		});

	}

	export interface DescribeMalwareScansPostBodySortCriteria {
		AttributeName?: string;
		OrderBy?: OrderBy;
	}
	export interface DescribeMalwareScansPostBodySortCriteriaFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		OrderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateDescribeMalwareScansPostBodySortCriteriaFormGroup() {
		return new FormGroup<DescribeMalwareScansPostBodySortCriteriaFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			OrderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface UpdateOrganizationConfigurationPostBody {

		/** <p>Indicates whether to automatically enable member accounts in the organization.</p> <p>Even though this is still supported, we recommend using <code>AutoEnableOrganizationMembers</code> to achieve the similar results.</p> */
		autoEnable?: boolean | null;

		/** An object that contains information on which data sources will be configured to be automatically enabled for new members within the organization. */
		dataSources?: UpdateOrganizationConfigurationPostBodyDataSources;

		/** A list of features that will be configured for the organization. */
		features?: Array<OrganizationFeatureConfiguration>;

		/** <p>Indicates the auto-enablement configuration of GuardDuty for the member accounts in the organization. </p> <ul> <li> <p> <code>NEW</code>: Indicates that when a new account joins the organization, they will have GuardDuty enabled automatically. </p> </li> <li> <p> <code>ALL</code>: Indicates that all accounts in the Amazon Web Services Organization have GuardDuty enabled automatically. This includes <code>NEW</code> accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty.</p> </li> <li> <p> <code>NONE</code>: Indicates that GuardDuty will not be automatically enabled for any accounts in the organization. GuardDuty must be managed for each account individually by the administrator.</p> </li> </ul> */
		autoEnableOrganizationMembers?: AutoEnableMembers | null;
	}
	export interface UpdateOrganizationConfigurationPostBodyFormProperties {

		/** <p>Indicates whether to automatically enable member accounts in the organization.</p> <p>Even though this is still supported, we recommend using <code>AutoEnableOrganizationMembers</code> to achieve the similar results.</p> */
		autoEnable: FormControl<boolean | null | undefined>,

		/** <p>Indicates the auto-enablement configuration of GuardDuty for the member accounts in the organization. </p> <ul> <li> <p> <code>NEW</code>: Indicates that when a new account joins the organization, they will have GuardDuty enabled automatically. </p> </li> <li> <p> <code>ALL</code>: Indicates that all accounts in the Amazon Web Services Organization have GuardDuty enabled automatically. This includes <code>NEW</code> accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty.</p> </li> <li> <p> <code>NONE</code>: Indicates that GuardDuty will not be automatically enabled for any accounts in the organization. GuardDuty must be managed for each account individually by the administrator.</p> </li> </ul> */
		autoEnableOrganizationMembers: FormControl<AutoEnableMembers | null | undefined>,
	}
	export function CreateUpdateOrganizationConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationPostBodyFormProperties>({
			autoEnable: new FormControl<boolean | null | undefined>(undefined),
			autoEnableOrganizationMembers: new FormControl<AutoEnableMembers | null | undefined>(undefined),
		});

	}

	export interface UpdateOrganizationConfigurationPostBodyDataSources {
		S3Logs?: OrganizationS3LogsConfiguration;
		Kubernetes?: OrganizationKubernetesConfiguration;
		MalwareProtection?: OrganizationMalwareProtectionConfiguration;
	}
	export interface UpdateOrganizationConfigurationPostBodyDataSourcesFormProperties {
	}
	export function CreateUpdateOrganizationConfigurationPostBodyDataSourcesFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationPostBodyDataSourcesFormProperties>({
		});

	}

	export interface DisableOrganizationAdminAccountPostBody {

		/**
		 * The Amazon Web Services Account ID for the organizations account to be disabled as a GuardDuty delegated administrator.
		 * Required
		 */
		adminAccountId: string;
	}
	export interface DisableOrganizationAdminAccountPostBodyFormProperties {

		/**
		 * The Amazon Web Services Account ID for the organizations account to be disabled as a GuardDuty delegated administrator.
		 * Required
		 */
		adminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDisableOrganizationAdminAccountPostBodyFormGroup() {
		return new FormGroup<DisableOrganizationAdminAccountPostBodyFormProperties>({
			adminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateMembersPostBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts that you want to disassociate from the administrator account.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface DisassociateMembersPostBodyFormProperties {
	}
	export function CreateDisassociateMembersPostBodyFormGroup() {
		return new FormGroup<DisassociateMembersPostBodyFormProperties>({
		});

	}

	export interface EnableOrganizationAdminAccountPostBody {

		/**
		 * The Amazon Web Services Account ID for the organization account to be enabled as a GuardDuty delegated administrator.
		 * Required
		 */
		adminAccountId: string;
	}
	export interface EnableOrganizationAdminAccountPostBodyFormProperties {

		/**
		 * The Amazon Web Services Account ID for the organization account to be enabled as a GuardDuty delegated administrator.
		 * Required
		 */
		adminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateEnableOrganizationAdminAccountPostBodyFormGroup() {
		return new FormGroup<EnableOrganizationAdminAccountPostBodyFormProperties>({
			adminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCoverageStatisticsPostBody {

		/** Represents the criteria used in the filter. */
		filterCriteria?: GetCoverageStatisticsPostBodyFilterCriteria;

		/**
		 * Represents the statistics type used to aggregate the coverage details.
		 * Required
		 */
		statisticsType: Array<CoverageStatisticsType>;
	}
	export interface GetCoverageStatisticsPostBodyFormProperties {
	}
	export function CreateGetCoverageStatisticsPostBodyFormGroup() {
		return new FormGroup<GetCoverageStatisticsPostBodyFormProperties>({
		});

	}

	export interface GetCoverageStatisticsPostBodyFilterCriteria {
		FilterCriterion?: Array<CoverageFilterCriterion>;
	}
	export interface GetCoverageStatisticsPostBodyFilterCriteriaFormProperties {
	}
	export function CreateGetCoverageStatisticsPostBodyFilterCriteriaFormGroup() {
		return new FormGroup<GetCoverageStatisticsPostBodyFilterCriteriaFormProperties>({
		});

	}

	export interface GetFindingsPostBody {

		/**
		 * The IDs of the findings that you want to retrieve.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<string>;

		/** Contains information about the criteria used for sorting findings. */
		sortCriteria?: GetFindingsPostBodySortCriteria;
	}
	export interface GetFindingsPostBodyFormProperties {
	}
	export function CreateGetFindingsPostBodyFormGroup() {
		return new FormGroup<GetFindingsPostBodyFormProperties>({
		});

	}

	export interface GetFindingsPostBodySortCriteria {
		AttributeName?: string;
		OrderBy?: OrderBy;
	}
	export interface GetFindingsPostBodySortCriteriaFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		OrderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateGetFindingsPostBodySortCriteriaFormGroup() {
		return new FormGroup<GetFindingsPostBodySortCriteriaFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			OrderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface GetFindingsStatisticsPostBody {

		/**
		 * The types of finding statistics to retrieve.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		findingStatisticTypes: Array<FindingStatisticType>;

		/** Contains information about the criteria used for querying findings. */
		findingCriteria?: GetFindingsStatisticsPostBodyFindingCriteria;
	}
	export interface GetFindingsStatisticsPostBodyFormProperties {
	}
	export function CreateGetFindingsStatisticsPostBodyFormGroup() {
		return new FormGroup<GetFindingsStatisticsPostBodyFormProperties>({
		});

	}

	export interface GetFindingsStatisticsPostBodyFindingCriteria {
		Criterion?: Criterion;
	}
	export interface GetFindingsStatisticsPostBodyFindingCriteriaFormProperties {
	}
	export function CreateGetFindingsStatisticsPostBodyFindingCriteriaFormGroup() {
		return new FormGroup<GetFindingsStatisticsPostBodyFindingCriteriaFormProperties>({
		});

	}

	export interface UpdateMalwareScanSettingsPostBody {

		/** Contains information about criteria used to filter resources before triggering malware scan. */
		scanResourceCriteria?: UpdateMalwareScanSettingsPostBodyScanResourceCriteria;

		/** An enum value representing possible snapshot preservation settings. */
		ebsSnapshotPreservation?: EbsSnapshotPreservation | null;
	}
	export interface UpdateMalwareScanSettingsPostBodyFormProperties {

		/** An enum value representing possible snapshot preservation settings. */
		ebsSnapshotPreservation: FormControl<EbsSnapshotPreservation | null | undefined>,
	}
	export function CreateUpdateMalwareScanSettingsPostBodyFormGroup() {
		return new FormGroup<UpdateMalwareScanSettingsPostBodyFormProperties>({
			ebsSnapshotPreservation: new FormControl<EbsSnapshotPreservation | null | undefined>(undefined),
		});

	}

	export interface UpdateMalwareScanSettingsPostBodyScanResourceCriteria {
		Include?: ScanCriterion;
		Exclude?: ScanCriterion;
	}
	export interface UpdateMalwareScanSettingsPostBodyScanResourceCriteriaFormProperties {
	}
	export function CreateUpdateMalwareScanSettingsPostBodyScanResourceCriteriaFormGroup() {
		return new FormGroup<UpdateMalwareScanSettingsPostBodyScanResourceCriteriaFormProperties>({
		});

	}

	export interface GetMemberDetectorsPostBody {

		/**
		 * The account ID of the member account.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface GetMemberDetectorsPostBodyFormProperties {
	}
	export function CreateGetMemberDetectorsPostBodyFormGroup() {
		return new FormGroup<GetMemberDetectorsPostBodyFormProperties>({
		});

	}

	export interface GetMembersPostBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts that you want to describe.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface GetMembersPostBodyFormProperties {
	}
	export function CreateGetMembersPostBodyFormGroup() {
		return new FormGroup<GetMembersPostBodyFormProperties>({
		});

	}

	export interface GetRemainingFreeTrialDaysPostBody {

		/**
		 * A list of account identifiers of the GuardDuty member account.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds?: Array<string>;
	}
	export interface GetRemainingFreeTrialDaysPostBodyFormProperties {
	}
	export function CreateGetRemainingFreeTrialDaysPostBodyFormGroup() {
		return new FormGroup<GetRemainingFreeTrialDaysPostBodyFormProperties>({
		});

	}

	export interface GetUsageStatisticsPostBody {

		/**
		 * The type of usage statistics to retrieve.
		 * Required
		 */
		usageStatisticsType: UsageStatisticType;

		/**
		 * Contains information about the criteria used to query usage statistics.
		 * Required
		 */
		usageCriteria: GetUsageStatisticsPostBodyUsageCriteria;

		/** The currency unit you would like to view your usage statistics in. Current valid values are USD. */
		unit?: string | null;

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number | null;

		/** A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page. */
		nextToken?: string | null;
	}
	export interface GetUsageStatisticsPostBodyFormProperties {

		/**
		 * The type of usage statistics to retrieve.
		 * Required
		 */
		usageStatisticsType: FormControl<UsageStatisticType | null | undefined>,

		/** The currency unit you would like to view your usage statistics in. Current valid values are USD. */
		unit: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults: FormControl<number | null | undefined>,

		/** A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetUsageStatisticsPostBodyFormGroup() {
		return new FormGroup<GetUsageStatisticsPostBodyFormProperties>({
			usageStatisticsType: new FormControl<UsageStatisticType | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUsageStatisticsPostBodyUsageCriteria {
		AccountIds?: Array<string>;
		DataSources?: Array<DataSource>;
		Resources?: Array<string>;
		Features?: Array<UsageFeature>;
	}
	export interface GetUsageStatisticsPostBodyUsageCriteriaFormProperties {
	}
	export function CreateGetUsageStatisticsPostBodyUsageCriteriaFormGroup() {
		return new FormGroup<GetUsageStatisticsPostBodyUsageCriteriaFormProperties>({
		});

	}

	export interface InviteMembersPostBody {

		/**
		 * A list of account IDs of the accounts that you want to invite to GuardDuty as members.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;

		/** A Boolean value that specifies whether you want to disable email notification to the accounts that you are inviting to GuardDuty as members. */
		disableEmailNotification?: boolean | null;

		/** The invitation message that you want to send to the accounts that you're inviting to GuardDuty as members. */
		message?: string | null;
	}
	export interface InviteMembersPostBodyFormProperties {

		/** A Boolean value that specifies whether you want to disable email notification to the accounts that you are inviting to GuardDuty as members. */
		disableEmailNotification: FormControl<boolean | null | undefined>,

		/** The invitation message that you want to send to the accounts that you're inviting to GuardDuty as members. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInviteMembersPostBodyFormGroup() {
		return new FormGroup<InviteMembersPostBodyFormProperties>({
			disableEmailNotification: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCoveragePostBody {

		/** A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number | null;

		/** Represents the criteria used in the filter. */
		filterCriteria?: ListCoveragePostBodyFilterCriteria;

		/** Information about the sorting criteria used in the coverage statistics. */
		sortCriteria?: ListCoveragePostBodySortCriteria;
	}
	export interface ListCoveragePostBodyFormProperties {

		/** A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCoveragePostBodyFormGroup() {
		return new FormGroup<ListCoveragePostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface ListCoveragePostBodyFilterCriteria {
		FilterCriterion?: Array<CoverageFilterCriterion>;
	}
	export interface ListCoveragePostBodyFilterCriteriaFormProperties {
	}
	export function CreateListCoveragePostBodyFilterCriteriaFormGroup() {
		return new FormGroup<ListCoveragePostBodyFilterCriteriaFormProperties>({
		});

	}

	export interface ListCoveragePostBodySortCriteria {
		AttributeName?: CoverageSortKey;
		OrderBy?: OrderBy;
	}
	export interface ListCoveragePostBodySortCriteriaFormProperties {
		AttributeName: FormControl<CoverageSortKey | null | undefined>,
		OrderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateListCoveragePostBodySortCriteriaFormGroup() {
		return new FormGroup<ListCoveragePostBodySortCriteriaFormProperties>({
			AttributeName: new FormControl<CoverageSortKey | null | undefined>(undefined),
			OrderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface ListFindingsPostBody {

		/** Contains information about the criteria used for querying findings. */
		findingCriteria?: ListFindingsPostBodyFindingCriteria;

		/** Contains information about the criteria used for sorting findings. */
		sortCriteria?: ListFindingsPostBodySortCriteria;

		/**
		 * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number | null;

		/** You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data. */
		nextToken?: string | null;
	}
	export interface ListFindingsPostBodyFormProperties {

		/**
		 * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults: FormControl<number | null | undefined>,

		/** You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsPostBodyFormGroup() {
		return new FormGroup<ListFindingsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFindingsPostBodyFindingCriteria {
		Criterion?: Criterion;
	}
	export interface ListFindingsPostBodyFindingCriteriaFormProperties {
	}
	export function CreateListFindingsPostBodyFindingCriteriaFormGroup() {
		return new FormGroup<ListFindingsPostBodyFindingCriteriaFormProperties>({
		});

	}

	export interface ListFindingsPostBodySortCriteria {
		AttributeName?: string;
		OrderBy?: OrderBy;
	}
	export interface ListFindingsPostBodySortCriteriaFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		OrderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateListFindingsPostBodySortCriteriaFormGroup() {
		return new FormGroup<ListFindingsPostBodySortCriteriaFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			OrderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to be added to a resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to be added to a resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartMalwareScanPostBody {

		/**
		 * Amazon Resource Name (ARN) of the resource for which you invoked the API.
		 * Required
		 */
		resourceArn: string;
	}
	export interface StartMalwareScanPostBodyFormProperties {

		/**
		 * Amazon Resource Name (ARN) of the resource for which you invoked the API.
		 * Required
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateStartMalwareScanPostBodyFormGroup() {
		return new FormGroup<StartMalwareScanPostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:[A-Za-z-]+:[A-Za-z0-9]+:[A-Za-z0-9-]+:\d+:(([A-Za-z0-9-]+)[:\/])?[A-Za-z0-9-]*$')]),
		});

	}

	export interface StartMonitoringMembersPostBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts to start monitoring.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface StartMonitoringMembersPostBodyFormProperties {
	}
	export function CreateStartMonitoringMembersPostBodyFormGroup() {
		return new FormGroup<StartMonitoringMembersPostBodyFormProperties>({
		});

	}

	export interface StopMonitoringMembersPostBody {

		/**
		 * A list of account IDs for the member accounts to stop monitoring.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface StopMonitoringMembersPostBodyFormProperties {
	}
	export function CreateStopMonitoringMembersPostBodyFormGroup() {
		return new FormGroup<StopMonitoringMembersPostBodyFormProperties>({
		});

	}

	export interface UnarchiveFindingsPostBody {

		/**
		 * The IDs of the findings to unarchive.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<string>;
	}
	export interface UnarchiveFindingsPostBodyFormProperties {
	}
	export function CreateUnarchiveFindingsPostBodyFormGroup() {
		return new FormGroup<UnarchiveFindingsPostBodyFormProperties>({
		});

	}

	export interface UpdateFindingsFeedbackPostBody {

		/**
		 * The IDs of the findings that you want to mark as useful or not useful.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<string>;

		/**
		 * The feedback for the finding.
		 * Required
		 */
		feedback: Feedback;

		/** Additional feedback about the GuardDuty findings. */
		comments?: string | null;
	}
	export interface UpdateFindingsFeedbackPostBodyFormProperties {

		/**
		 * The feedback for the finding.
		 * Required
		 */
		feedback: FormControl<Feedback | null | undefined>,

		/** Additional feedback about the GuardDuty findings. */
		comments: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFindingsFeedbackPostBodyFormGroup() {
		return new FormGroup<UpdateFindingsFeedbackPostBodyFormProperties>({
			feedback: new FormControl<Feedback | null | undefined>(undefined, [Validators.required]),
			comments: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMemberDetectorsPostBody {

		/**
		 * A list of member account IDs to be updated.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;

		/** Contains information about which data sources are enabled. */
		dataSources?: UpdateMemberDetectorsPostBodyDataSources;

		/** A list of features that will be updated for the specified member accounts. */
		features?: Array<MemberFeaturesConfiguration>;
	}
	export interface UpdateMemberDetectorsPostBodyFormProperties {
	}
	export function CreateUpdateMemberDetectorsPostBodyFormGroup() {
		return new FormGroup<UpdateMemberDetectorsPostBodyFormProperties>({
		});

	}

	export interface UpdateMemberDetectorsPostBodyDataSources {
		S3Logs?: S3LogsConfiguration;
		Kubernetes?: KubernetesConfiguration;
		MalwareProtection?: MalwareProtectionConfiguration;
	}
	export interface UpdateMemberDetectorsPostBodyDataSourcesFormProperties {
	}
	export function CreateUpdateMemberDetectorsPostBodyDataSourcesFormGroup() {
		return new FormGroup<UpdateMemberDetectorsPostBodyDataSourcesFormProperties>({
		});

	}

}

