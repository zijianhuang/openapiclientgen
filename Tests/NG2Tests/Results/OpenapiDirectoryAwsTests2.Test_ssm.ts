import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AddTagsToResourceResult {
	}

	export interface AddTagsToResourceRequest {
		ResourceType: AddTagsToResourceRequestResourceType;
		ResourceId: string;
		Tags: Array<Tag>;
	}

	export enum AddTagsToResourceRequestResourceType { Document = 0, ManagedInstance = 1, MaintenanceWindow = 2, Parameter = 3, PatchBaseline = 4, OpsItem = 5 }


	/** Metadata that you assign to your AWS resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In Systems Manager, you can apply tags to documents, managed instances, maintenance windows, Parameter Store parameters, and patch baselines. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface InvalidResourceType {
	}

	export interface InvalidResourceId {
	}

	export interface InternalServerError {
	}

	export interface TooManyTagsError {
	}

	export interface TooManyUpdates {
	}


	/** Whether or not the command was successfully canceled. There is no guarantee that a request can be canceled. */
	export interface CancelCommandResult {
	}


	/** <p/> */
	export interface CancelCommandRequest {
		CommandId: string;
		InstanceIds?: Array<string> | null;
	}

	export interface InvalidCommandId {
	}

	export interface InvalidInstanceId {
	}

	export interface DuplicateInstanceId {
	}

	export interface CancelMaintenanceWindowExecutionResult {
		WindowExecutionId?: string | null;
	}

	export interface CancelMaintenanceWindowExecutionRequest {
		WindowExecutionId: string;
	}

	export interface DoesNotExistException {
	}

	export interface CreateActivationResult {
		ActivationId?: string | null;
		ActivationCode?: string | null;
	}

	export interface CreateActivationRequest {
		Description?: string | null;
		DefaultInstanceName?: string | null;
		IamRole: string;
		RegistrationLimit?: number | null;
		ExpirationDate?: Date | null;
		Tags?: Array<Tag> | null;
	}

	export interface CreateAssociationResult {

		/** Describes the parameters for a document. */
		AssociationDescription?: AssociationDescription | null;
	}


	/** Describes the parameters for a document. */
	export interface AssociationDescription {
		Name?: string | null;
		InstanceId?: string | null;
		AssociationVersion?: string | null;
		Date?: Date | null;
		LastUpdateAssociationDate?: Date | null;

		/** Describes an association status. */
		Status?: AssociationStatus | null;

		/** Information about the association. */
		Overview?: AssociationOverview | null;
		DocumentVersion?: string | null;
		AutomationTargetParameterName?: string | null;
		Parameters?: Parameters | null;
		AssociationId?: string | null;
		Targets?: Array<Target> | null;
		ScheduleExpression?: string | null;

		/** An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation | null;
		LastExecutionDate?: Date | null;
		LastSuccessfulExecutionDate?: Date | null;
		AssociationName?: string | null;
		MaxErrors?: string | null;
		MaxConcurrency?: string | null;
		ComplianceSeverity?: AssociationDescriptionComplianceSeverity | null;
		SyncCompliance?: AssociationDescriptionSyncCompliance | null;
		ApplyOnlyAtCronInterval?: boolean | null;
	}


	/** Describes an association status. */
	export interface AssociationStatus {
		Date: Date;
		Name: AssociationStatusName;
		Message: string;
		AdditionalInfo?: string | null;
	}

	export enum AssociationStatusName { Pending = 0, Success = 1, Failed = 2 }


	/** Information about the association. */
	export interface AssociationOverview {
		Status?: string | null;
		DetailedStatus?: string | null;
		AssociationStatusAggregatedCount?: AssociationStatusAggregatedCount | null;
	}

	export interface AssociationStatusAggregatedCount {
	}

	export interface Parameters {
	}


	/** <p>An array of search criteria that targets instances using a Key,Value combination that you specify. </p> <p>Supported formats include the following.</p> <ul> <li> <p> <code>Key=InstanceIds,Values=<i>instance-id-1</i>,<i>instance-id-2</i>,<i>instance-id-3</i> </code> </p> </li> <li> <p> <code>Key=tag:<i>my-tag-key</i>,Values=<i>my-tag-value-1</i>,<i>my-tag-value-2</i> </code> </p> </li> <li> <p> <code>Key=tag-key,Values=<i>my-tag-key-1</i>,<i>my-tag-key-2</i> </code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:Name,Values=<i>resource-group-name</i> </code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:ResourceTypeFilters,Values=<i>resource-type-1</i>,<i>resource-type-2</i> </code> </p> </li> </ul> <p>For example:</p> <ul> <li> <p> <code>Key=InstanceIds,Values=i-02573cafcfEXAMPLE,i-0471e04240EXAMPLE,i-07782c72faEXAMPLE</code> </p> </li> <li> <p> <code>Key=tag:CostCenter,Values=CostCenter1,CostCenter2,CostCenter3</code> </p> </li> <li> <p> <code>Key=tag-key,Values=Name,Instance-Type,CostCenter</code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:Name,Values=ProductionResourceGroup</code> </p> <p>This example demonstrates how to target all resources in the resource group <b>ProductionResourceGroup</b> in your maintenance window.</p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:ResourceTypeFilters,Values=<i>AWS::EC2::INSTANCE</i>,<i>AWS::EC2::VPC</i> </code> </p> <p>This example demonstrates how to target only EC2 instances and VPCs in your maintenance window.</p> </li> <li> <p>(State Manager association targets only) <code>Key=InstanceIds,Values=<i>*</i> </code> </p> <p>This example demonstrates how to target all managed instances in the AWS Region where the association was created.</p> </li> </ul> <p>For information about how to send commands that target instances using <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Targeting multiple instances</a> in the <i>AWS Systems Manager User Guide</i>.</p> */
	export interface Target {
		Key?: string | null;
		Values?: Array<string> | null;
	}


	/** An S3 bucket where you want to store the results of this request. */
	export interface InstanceAssociationOutputLocation {

		/** An S3 bucket where you want to store the results of this request. */
		S3Location?: S3OutputLocation | null;
	}


	/** An S3 bucket where you want to store the results of this request. */
	export interface S3OutputLocation {
		OutputS3Region?: string | null;
		OutputS3BucketName?: string | null;
		OutputS3KeyPrefix?: string | null;
	}

	export enum AssociationDescriptionComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, UNSPECIFIED = 4 }

	export enum AssociationDescriptionSyncCompliance { AUTO = 0, MANUAL = 1 }

	export interface CreateAssociationRequest {
		Name: string;
		DocumentVersion?: string | null;
		InstanceId?: string | null;
		Parameters?: Parameters | null;
		Targets?: Array<Target> | null;
		ScheduleExpression?: string | null;

		/** An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation | null;
		AssociationName?: string | null;
		AutomationTargetParameterName?: string | null;
		MaxErrors?: string | null;
		MaxConcurrency?: string | null;
		ComplianceSeverity?: AssociationDescriptionComplianceSeverity | null;
		SyncCompliance?: AssociationDescriptionSyncCompliance | null;
		ApplyOnlyAtCronInterval?: boolean | null;
	}

	export interface AssociationAlreadyExists {
	}

	export interface AssociationLimitExceeded {
	}

	export interface InvalidDocument {
	}

	export interface InvalidDocumentVersion {
	}

	export interface UnsupportedPlatformType {
	}

	export interface InvalidOutputLocation {
	}

	export interface InvalidParameters {
	}

	export interface InvalidTarget {
	}

	export interface InvalidSchedule {
	}

	export interface CreateAssociationBatchResult {
		Successful?: Array<AssociationDescription> | null;
		Failed?: Array<FailedCreateAssociation> | null;
	}


	/** Describes a failed association. */
	export interface FailedCreateAssociation {

		/** Describes the association of a Systems Manager SSM document and an instance. */
		Entry?: CreateAssociationBatchRequestEntry | null;
		Message?: string | null;
		Fault?: FailedCreateAssociationFault | null;
	}


	/** Describes the association of a Systems Manager SSM document and an instance. */
	export interface CreateAssociationBatchRequestEntry {
		Name: string;
		InstanceId?: string | null;
		Parameters?: Parameters | null;
		AutomationTargetParameterName?: string | null;
		DocumentVersion?: string | null;
		Targets?: Array<Target> | null;
		ScheduleExpression?: string | null;

		/** An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation | null;
		AssociationName?: string | null;
		MaxErrors?: string | null;
		MaxConcurrency?: string | null;
		ComplianceSeverity?: AssociationDescriptionComplianceSeverity | null;
		SyncCompliance?: AssociationDescriptionSyncCompliance | null;
		ApplyOnlyAtCronInterval?: boolean | null;
	}

	export enum FailedCreateAssociationFault { Client = 0, Server = 1, Unknown = 2 }

	export interface CreateAssociationBatchRequest {
		Entries: Array<CreateAssociationBatchRequestEntry>;
	}

	export interface CreateDocumentResult {

		/** Describes a Systems Manager document. */
		DocumentDescription?: DocumentDescription | null;
	}


	/** Describes a Systems Manager document.  */
	export interface DocumentDescription {
		Sha1?: string | null;
		Hash?: string | null;
		HashType?: DocumentDescriptionHashType | null;
		Name?: string | null;
		VersionName?: string | null;
		Owner?: string | null;
		CreatedDate?: Date | null;

		/** The status of a document. */
		Status?: DocumentDescriptionStatus | null;
		StatusInformation?: string | null;
		DocumentVersion?: string | null;
		Description?: string | null;
		Parameters?: Array<DocumentParameter> | null;
		PlatformTypes?: Array<PlatformType> | null;
		DocumentType?: DocumentDescriptionDocumentType | null;
		SchemaVersion?: string | null;
		LatestVersion?: string | null;
		DefaultVersion?: string | null;
		DocumentFormat?: DocumentDescriptionDocumentFormat | null;
		TargetType?: string | null;
		Tags?: Array<Tag> | null;
		AttachmentsInformation?: Array<AttachmentInformation> | null;
		Requires?: Array<DocumentRequires> | null;
	}

	export enum DocumentDescriptionHashType { Sha256 = 0, Sha1 = 1 }

	export enum DocumentDescriptionStatus { Creating = 0, Active = 1, Updating = 2, Deleting = 3, Failed = 4 }


	/** Parameters specified in a System Manager document that run on the server when the command is run.  */
	export interface DocumentParameter {
		Name?: string | null;
		Type?: DocumentParameterType | null;
		Description?: string | null;
		DefaultValue?: string | null;
	}

	export enum DocumentParameterType { String = 0, StringList = 1 }

	export enum PlatformType { Windows = 0, Linux = 1 }

	export enum DocumentDescriptionDocumentType { Command = 0, Policy = 1, Automation = 2, Session = 3, Package = 4, ApplicationConfiguration = 5, ApplicationConfigurationSchema = 6, DeploymentStrategy = 7, ChangeCalendar = 8 }

	export enum DocumentDescriptionDocumentFormat { YAML = 0, JSON = 1, TEXT = 2 }


	/** An attribute of an attachment, such as the attachment name. */
	export interface AttachmentInformation {
		Name?: string | null;
	}


	/** An SSM document required by the current document. */
	export interface DocumentRequires {
		Name: string;
		Version?: string | null;
	}

	export interface CreateDocumentRequest {
		Content: string;
		Requires?: Array<DocumentRequires> | null;
		Attachments?: Array<AttachmentsSource> | null;
		Name: string;
		VersionName?: string | null;
		DocumentType?: DocumentDescriptionDocumentType | null;
		DocumentFormat?: DocumentDescriptionDocumentFormat | null;
		TargetType?: string | null;
		Tags?: Array<Tag> | null;
	}


	/** Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document. */
	export interface AttachmentsSource {
		Key?: AttachmentsSourceKey | null;
		Values?: Array<string> | null;
		Name?: string | null;
	}

	export enum AttachmentsSourceKey { SourceUrl = 0, S3FileUrl = 1, AttachmentReference = 2 }

	export interface DocumentAlreadyExists {
	}

	export interface MaxDocumentSizeExceeded {
	}

	export interface InvalidDocumentContent {
	}

	export interface DocumentLimitExceeded {
	}

	export interface InvalidDocumentSchemaVersion {
	}

	export interface CreateMaintenanceWindowResult {
		WindowId?: string | null;
	}

	export interface CreateMaintenanceWindowRequest {
		Name: string;
		Description?: string | null;
		StartDate?: string | null;
		EndDate?: string | null;
		Schedule: string;
		ScheduleTimezone?: string | null;
		Duration: number;
		Cutoff: number;
		AllowUnassociatedTargets: boolean;
		ClientToken?: string | null;
		Tags?: Array<Tag> | null;
	}

	export interface IdempotentParameterMismatch {
	}

	export interface ResourceLimitExceededException {
	}

	export interface CreateOpsItemResponse {
		OpsItemId?: string | null;
	}

	export interface CreateOpsItemRequest {
		Description: string;
		OperationalData?: OpsItemOperationalData | null;
		Notifications?: Array<OpsItemNotification> | null;
		Priority?: number | null;
		RelatedOpsItems?: Array<RelatedOpsItem> | null;
		Source: string;
		Title: string;
		Tags?: Array<Tag> | null;
		Category?: string | null;
		Severity?: string | null;
	}

	export interface OpsItemOperationalData {
	}


	/** A notification about the OpsItem. */
	export interface OpsItemNotification {
		Arn?: string | null;
	}


	/** An OpsItems that shares something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource. */
	export interface RelatedOpsItem {
		OpsItemId: string;
	}

	export interface OpsItemAlreadyExistsException {
	}

	export interface OpsItemLimitExceededException {
	}

	export interface OpsItemInvalidParameterException {
	}

	export interface CreatePatchBaselineResult {
		BaselineId?: string | null;
	}

	export interface CreatePatchBaselineRequest {
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;
		Name: string;

		/** A set of patch filters, typically used for approval rules. */
		GlobalFilters?: PatchFilterGroup | null;

		/** A set of rules defining the approval rules for a patch baseline. */
		ApprovalRules?: PatchRuleGroup | null;
		ApprovedPatches?: Array<string> | null;
		ApprovedPatchesComplianceLevel?: PatchRuleComplianceLevel | null;
		ApprovedPatchesEnableNonSecurity?: boolean | null;
		RejectedPatches?: Array<string> | null;
		RejectedPatchesAction?: CreatePatchBaselineRequestRejectedPatchesAction | null;
		Description?: string | null;
		Sources?: Array<PatchSource> | null;
		ClientToken?: string | null;
		Tags?: Array<Tag> | null;
	}

	export enum CreatePatchBaselineRequestOperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, UBUNTU = 3, REDHAT_ENTERPRISE_LINUX = 4, SUSE = 5, CENTOS = 6, ORACLE_LINUX = 7, DEBIAN = 8 }


	/** A set of patch filters, typically used for approval rules. */
	export interface PatchFilterGroup {
		PatchFilters: Array<PatchFilter>;
	}


	/** <p> Defines which patches should be included in a patch baseline.</p> <p>A patch filter consists of a key and a set of values. The filter key is a patch property. For example, the available filter keys for WINDOWS are PATCH_SET, PRODUCT, PRODUCT_FAMILY, CLASSIFICATION, and MSRC_SEVERITY. The filter values define a matching criterion for the patch property indicated by the key. For example, if the filter key is PRODUCT and the filter values are ["Office 2013", "Office 2016"], then the filter accepts all patches where product name is either "Office 2013" or "Office 2016". The filter values can be exact values for the patch property given as a key, or a wildcard (*), which matches all values.</p> <p>You can view lists of valid values for the patch properties by running the <code>DescribePatchProperties</code> command. For information about which patch properties can be used with each major operating system, see <a>DescribePatchProperties</a>.</p> */
	export interface PatchFilter {
		Key: PatchFilterKey;
		Values: Array<string>;
	}

	export enum PatchFilterKey { PATCH_SET = 0, PRODUCT = 1, PRODUCT_FAMILY = 2, CLASSIFICATION = 3, MSRC_SEVERITY = 4, PATCH_ID = 5, SECTION = 6, PRIORITY = 7, SEVERITY = 8 }


	/** A set of rules defining the approval rules for a patch baseline. */
	export interface PatchRuleGroup {
		PatchRules: Array<PatchRule>;
	}


	/** Defines an approval rule for a patch baseline. */
	export interface PatchRule {

		/**
		 * A set of patch filters, typically used for approval rules.
		 * Required
		 */
		PatchFilterGroup: PatchFilterGroup;
		ComplianceLevel?: PatchRuleComplianceLevel | null;
		ApproveAfterDays?: number | null;
		ApproveUntilDate?: string | null;
		EnableNonSecurity?: boolean | null;
	}

	export enum PatchRuleComplianceLevel { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }

	export enum CreatePatchBaselineRequestRejectedPatchesAction { ALLOW_AS_DEPENDENCY = 0, BLOCK = 1 }


	/** Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only. */
	export interface PatchSource {
		Name: string;
		Products: Array<string>;
		Configuration: string;
	}

	export interface CreateResourceDataSyncResult {
	}

	export interface CreateResourceDataSyncRequest {
		SyncName: string;

		/** Information about the target S3 bucket for the Resource Data Sync. */
		S3Destination?: ResourceDataSyncS3Destination | null;
		SyncType?: string | null;

		/** Information about the source of the data included in the resource data sync. */
		SyncSource?: ResourceDataSyncSource | null;
	}


	/** Information about the target S3 bucket for the Resource Data Sync. */
	export interface ResourceDataSyncS3Destination {
		BucketName: string;
		Prefix?: string | null;
		SyncFormat: ResourceDataSyncS3DestinationSyncFormat;
		Region: string;
		AWSKMSKeyARN?: string | null;

		/** Synchronize Systems Manager Inventory data from multiple AWS accounts defined in AWS Organizations to a centralized S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different AWS account ID. */
		DestinationDataSharing?: ResourceDataSyncDestinationDataSharing | null;
	}

	export enum ResourceDataSyncS3DestinationSyncFormat { JsonSerDe = 0 }


	/** Synchronize Systems Manager Inventory data from multiple AWS accounts defined in AWS Organizations to a centralized S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different AWS account ID. */
	export interface ResourceDataSyncDestinationDataSharing {
		DestinationDataSharingType?: string | null;
	}


	/** Information about the source of the data included in the resource data sync. */
	export interface ResourceDataSyncSource {
		SourceType: string;

		/** Information about the AwsOrganizationsSource resource data sync source. A sync source of this type can synchronize data from AWS Organizations or, if an AWS Organization is not present, from multiple AWS Regions. */
		AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource | null;
		SourceRegions: Array<string>;
		IncludeFutureRegions?: boolean | null;
	}


	/** Information about the AwsOrganizationsSource resource data sync source. A sync source of this type can synchronize data from AWS Organizations or, if an AWS Organization is not present, from multiple AWS Regions. */
	export interface ResourceDataSyncAwsOrganizationsSource {
		OrganizationSourceType: string;
		OrganizationalUnits?: Array<ResourceDataSyncOrganizationalUnit> | null;
	}


	/** The AWS Organizations organizational unit data source for the sync. */
	export interface ResourceDataSyncOrganizationalUnit {
		OrganizationalUnitId?: string | null;
	}

	export interface ResourceDataSyncCountExceededException {
	}

	export interface ResourceDataSyncAlreadyExistsException {
	}

	export interface ResourceDataSyncInvalidConfigurationException {
	}

	export interface DeleteActivationResult {
	}

	export interface DeleteActivationRequest {
		ActivationId: string;
	}

	export interface InvalidActivationId {
	}

	export interface InvalidActivation {
	}

	export interface DeleteAssociationResult {
	}

	export interface DeleteAssociationRequest {
		Name?: string | null;
		InstanceId?: string | null;
		AssociationId?: string | null;
	}

	export interface AssociationDoesNotExist {
	}

	export interface DeleteDocumentResult {
	}

	export interface DeleteDocumentRequest {
		Name: string;
		DocumentVersion?: string | null;
		VersionName?: string | null;
		Force?: boolean | null;
	}

	export interface InvalidDocumentOperation {
	}

	export interface AssociatedInstances {
	}

	export interface DeleteInventoryResult {
		DeletionId?: string | null;
		TypeName?: string | null;

		/** Information about the delete operation. */
		DeletionSummary?: InventoryDeletionSummary | null;
	}


	/** Information about the delete operation. */
	export interface InventoryDeletionSummary {
		TotalCount?: number | null;
		RemainingCount?: number | null;
		SummaryItems?: Array<InventoryDeletionSummaryItem> | null;
	}


	/** Either a count, remaining count, or a version number in a delete inventory summary. */
	export interface InventoryDeletionSummaryItem {
		Version?: string | null;
		Count?: number | null;
		RemainingCount?: number | null;
	}

	export interface DeleteInventoryRequest {
		TypeName: string;
		SchemaDeleteOption?: DeleteInventoryRequestSchemaDeleteOption | null;
		DryRun?: boolean | null;
		ClientToken?: string | null;
	}

	export enum DeleteInventoryRequestSchemaDeleteOption { DisableSchema = 0, DeleteSchema = 1 }

	export interface InvalidTypeNameException {
	}

	export interface InvalidOptionException {
	}

	export interface InvalidDeleteInventoryParametersException {
	}

	export interface InvalidInventoryRequestException {
	}

	export interface DeleteMaintenanceWindowResult {
		WindowId?: string | null;
	}

	export interface DeleteMaintenanceWindowRequest {
		WindowId: string;
	}

	export interface DeleteParameterResult {
	}

	export interface DeleteParameterRequest {
		Name: string;
	}

	export interface ParameterNotFound {
	}

	export interface DeleteParametersResult {
		DeletedParameters?: Array<string> | null;
		InvalidParameters?: Array<string> | null;
	}

	export interface DeleteParametersRequest {
		Names: Array<string>;
	}

	export interface DeletePatchBaselineResult {
		BaselineId?: string | null;
	}

	export interface DeletePatchBaselineRequest {
		BaselineId: string;
	}

	export interface ResourceInUseException {
	}

	export interface DeleteResourceDataSyncResult {
	}

	export interface DeleteResourceDataSyncRequest {
		SyncName: string;
		SyncType?: string | null;
	}

	export interface ResourceDataSyncNotFoundException {
	}

	export interface DeregisterManagedInstanceResult {
	}

	export interface DeregisterManagedInstanceRequest {
		InstanceId: string;
	}

	export interface DeregisterPatchBaselineForPatchGroupResult {
		BaselineId?: string | null;
		PatchGroup?: string | null;
	}

	export interface DeregisterPatchBaselineForPatchGroupRequest {
		BaselineId: string;
		PatchGroup: string;
	}

	export interface DeregisterTargetFromMaintenanceWindowResult {
		WindowId?: string | null;
		WindowTargetId?: string | null;
	}

	export interface DeregisterTargetFromMaintenanceWindowRequest {
		WindowId: string;
		WindowTargetId: string;
		Safe?: boolean | null;
	}

	export interface TargetInUseException {
	}

	export interface DeregisterTaskFromMaintenanceWindowResult {
		WindowId?: string | null;
		WindowTaskId?: string | null;
	}

	export interface DeregisterTaskFromMaintenanceWindowRequest {
		WindowId: string;
		WindowTaskId: string;
	}

	export interface DescribeActivationsResult {
		ActivationList?: Array<Activation> | null;
		NextToken?: string | null;
	}


	/** An activation registers one or more on-premises servers or virtual machines (VMs) with AWS so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with AWS is called a managed instance. */
	export interface Activation {
		ActivationId?: string | null;
		Description?: string | null;
		DefaultInstanceName?: string | null;
		IamRole?: string | null;
		RegistrationLimit?: number | null;
		RegistrationsCount?: number | null;
		ExpirationDate?: Date | null;
		Expired?: boolean | null;
		CreatedDate?: Date | null;
		Tags?: Array<Tag> | null;
	}

	export interface DescribeActivationsRequest {
		Filters?: Array<DescribeActivationsFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}


	/** Filter for the DescribeActivation API. */
	export interface DescribeActivationsFilter {
		FilterKey?: DescribeActivationsFilterFilterKey | null;
		FilterValues?: Array<string> | null;
	}

	export enum DescribeActivationsFilterFilterKey { ActivationIds = 0, DefaultInstanceName = 1, IamRole = 2 }

	export interface InvalidFilter {
	}

	export interface InvalidNextToken {
	}

	export interface DescribeAssociationResult {

		/** Describes the parameters for a document. */
		AssociationDescription?: AssociationDescription | null;
	}

	export interface DescribeAssociationRequest {
		Name?: string | null;
		InstanceId?: string | null;
		AssociationId?: string | null;
		AssociationVersion?: string | null;
	}

	export interface InvalidAssociationVersion {
	}

	export interface DescribeAssociationExecutionTargetsResult {
		AssociationExecutionTargets?: Array<AssociationExecutionTarget> | null;
		NextToken?: string | null;
	}


	/** Includes information about the specified association execution. */
	export interface AssociationExecutionTarget {
		AssociationId?: string | null;
		AssociationVersion?: string | null;
		ExecutionId?: string | null;
		ResourceId?: string | null;
		ResourceType?: string | null;
		Status?: string | null;
		DetailedStatus?: string | null;
		LastExecutionDate?: Date | null;

		/** Information about the source where the association execution details are stored. */
		OutputSource?: OutputSource | null;
	}


	/** Information about the source where the association execution details are stored. */
	export interface OutputSource {
		OutputSourceId?: string | null;
		OutputSourceType?: string | null;
	}

	export interface DescribeAssociationExecutionTargetsRequest {
		AssociationId: string;
		ExecutionId: string;
		Filters?: Array<AssociationExecutionTargetsFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}


	/** Filters for the association execution. */
	export interface AssociationExecutionTargetsFilter {
		Key: AssociationExecutionTargetsFilterKey;
		Value: string;
	}

	export enum AssociationExecutionTargetsFilterKey { Status = 0, ResourceId = 1, ResourceType = 2 }

	export interface AssociationExecutionDoesNotExist {
	}

	export interface DescribeAssociationExecutionsResult {
		AssociationExecutions?: Array<AssociationExecution> | null;
		NextToken?: string | null;
	}


	/** Includes information about the specified association. */
	export interface AssociationExecution {
		AssociationId?: string | null;
		AssociationVersion?: string | null;
		ExecutionId?: string | null;
		Status?: string | null;
		DetailedStatus?: string | null;
		CreatedTime?: Date | null;
		LastExecutionDate?: Date | null;
		ResourceCountByStatus?: string | null;
	}

	export interface DescribeAssociationExecutionsRequest {
		AssociationId: string;
		Filters?: Array<AssociationExecutionFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}


	/** Filters used in the request. */
	export interface AssociationExecutionFilter {
		Key: AssociationExecutionFilterKey;
		Value: string;
		Type: AssociationExecutionFilterType;
	}

	export enum AssociationExecutionFilterKey { ExecutionId = 0, Status = 1, CreatedTime = 2 }

	export enum AssociationExecutionFilterType { EQUAL = 0, LESS_THAN = 1, GREATER_THAN = 2 }

	export interface DescribeAutomationExecutionsResult {
		AutomationExecutionMetadataList?: Array<AutomationExecutionMetadata> | null;
		NextToken?: string | null;
	}


	/** Details about a specific Automation execution. */
	export interface AutomationExecutionMetadata {
		AutomationExecutionId?: string | null;
		DocumentName?: string | null;
		DocumentVersion?: string | null;
		AutomationExecutionStatus?: AutomationExecutionMetadataAutomationExecutionStatus | null;
		ExecutionStartTime?: Date | null;
		ExecutionEndTime?: Date | null;
		ExecutedBy?: string | null;
		LogFile?: string | null;
		Outputs?: AutomationParameterMap | null;
		Mode?: AutomationExecutionMetadataMode | null;
		ParentAutomationExecutionId?: string | null;
		CurrentStepName?: string | null;
		CurrentAction?: string | null;
		FailureMessage?: string | null;
		TargetParameterName?: string | null;
		Targets?: Array<Target> | null;
		TargetMaps?: Array<TargetMap> | null;

		/** Information about targets that resolved during the Automation execution. */
		ResolvedTargets?: ResolvedTargets | null;
		MaxConcurrency?: string | null;
		MaxErrors?: string | null;
		Target?: string | null;
		AutomationType?: AutomationExecutionMetadataAutomationType | null;
	}

	export enum AutomationExecutionMetadataAutomationExecutionStatus { Pending = 0, InProgress = 1, Waiting = 2, Success = 3, TimedOut = 4, Cancelling = 5, Cancelled = 6, Failed = 7 }

	export interface AutomationParameterMap {
	}

	export enum AutomationExecutionMetadataMode { Auto = 0, Interactive = 1 }

	export interface TargetMap {
	}


	/** Information about targets that resolved during the Automation execution. */
	export interface ResolvedTargets {
		ParameterValues?: Array<string> | null;
		Truncated?: boolean | null;
	}

	export enum AutomationExecutionMetadataAutomationType { CrossAccount = 0, Local = 1 }

	export interface DescribeAutomationExecutionsRequest {
		Filters?: Array<AutomationExecutionFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}


	/** A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned. */
	export interface AutomationExecutionFilter {
		Key: AutomationExecutionFilterKey;
		Values: Array<string>;
	}

	export enum AutomationExecutionFilterKey { DocumentNamePrefix = 0, ExecutionStatus = 1, ExecutionId = 2, ParentExecutionId = 3, CurrentAction = 4, StartTimeBefore = 5, StartTimeAfter = 6, AutomationType = 7, TagKey = 8 }

	export interface InvalidFilterKey {
	}

	export interface InvalidFilterValue {
	}

	export interface DescribeAutomationStepExecutionsResult {
		StepExecutions?: Array<StepExecution> | null;
		NextToken?: string | null;
	}


	/** Detailed information about an the execution state of an Automation step. */
	export interface StepExecution {
		StepName?: string | null;
		Action?: string | null;
		TimeoutSeconds?: number | null;
		OnFailure?: string | null;
		MaxAttempts?: number | null;
		ExecutionStartTime?: Date | null;
		ExecutionEndTime?: Date | null;
		StepStatus?: AutomationExecutionMetadataAutomationExecutionStatus | null;
		ResponseCode?: string | null;
		Inputs?: NormalStringMap | null;
		Outputs?: AutomationParameterMap | null;
		Response?: string | null;
		FailureMessage?: string | null;

		/** Information about an Automation failure. */
		FailureDetails?: FailureDetails | null;
		StepExecutionId?: string | null;
		OverriddenParameters?: AutomationParameterMap | null;
		IsEnd?: boolean | null;
		NextStep?: string | null;
		IsCritical?: boolean | null;
		ValidNextSteps?: Array<string> | null;
		Targets?: Array<Target> | null;

		/** The combination of AWS Regions and accounts targeted by the current Automation execution. */
		TargetLocation?: TargetLocation | null;
	}

	export interface NormalStringMap {
	}


	/** Information about an Automation failure. */
	export interface FailureDetails {
		FailureStage?: string | null;
		FailureType?: string | null;
		Details?: AutomationParameterMap | null;
	}


	/** The combination of AWS Regions and accounts targeted by the current Automation execution. */
	export interface TargetLocation {
		Accounts?: Array<string> | null;
		Regions?: Array<string> | null;
		TargetLocationMaxConcurrency?: string | null;
		TargetLocationMaxErrors?: string | null;
		ExecutionRoleName?: string | null;
	}

	export interface DescribeAutomationStepExecutionsRequest {
		AutomationExecutionId: string;
		Filters?: Array<StepExecutionFilter> | null;
		NextToken?: string | null;
		MaxResults?: number | null;
		ReverseOrder?: boolean | null;
	}


	/** A filter to limit the amount of step execution information returned by the call. */
	export interface StepExecutionFilter {
		Key: StepExecutionFilterKey;
		Values: Array<string>;
	}

	export enum StepExecutionFilterKey { StartTimeBefore = 0, StartTimeAfter = 1, StepExecutionStatus = 2, StepExecutionId = 3, StepName = 4, Action = 5 }

	export interface AutomationExecutionNotFoundException {
	}

	export interface DescribeAvailablePatchesResult {
		Patches?: Array<Patch> | null;
		NextToken?: string | null;
	}


	/** Represents metadata about a patch. */
	export interface Patch {
		Id?: string | null;
		ReleaseDate?: Date | null;
		Title?: string | null;
		Description?: string | null;
		ContentUrl?: string | null;
		Vendor?: string | null;
		ProductFamily?: string | null;
		Product?: string | null;
		Classification?: string | null;
		MsrcSeverity?: string | null;
		KbNumber?: string | null;
		MsrcNumber?: string | null;
		Language?: string | null;
	}

	export interface DescribeAvailablePatchesRequest {
		Filters?: Array<PatchOrchestratorFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}


	/** Defines a filter used in Patch Manager APIs. */
	export interface PatchOrchestratorFilter {
		Key?: string | null;
		Values?: Array<string> | null;
	}

	export interface DescribeDocumentResult {

		/** Describes a Systems Manager document. */
		Document?: DocumentDescription | null;
	}

	export interface DescribeDocumentRequest {
		Name: string;
		DocumentVersion?: string | null;
		VersionName?: string | null;
	}

	export interface DescribeDocumentPermissionResponse {
		AccountIds?: Array<string> | null;

		/** A list of of AWS accounts where the current document is shared and the version shared with each account. */
		AccountSharingInfoList?: Array<AccountSharingInfo> | null;
	}


	/** Information includes the AWS account ID where the current document is shared and the version shared with that account. */
	export interface AccountSharingInfo {
		AccountId?: string | null;

		/**
		 * The document version shared with other accounts. You can share <code>Latest</code>, <code>Default</code> or <code>All versions</code>.
		 * Max length: 8
		 * Pattern: ([$]LATEST|[$]DEFAULT|[$]ALL)
		 */
		SharedDocumentVersion?: string | null;
	}

	export interface DescribeDocumentPermissionRequest {
		Name: string;
		PermissionType: DescribeDocumentPermissionRequestPermissionType;
	}

	export enum DescribeDocumentPermissionRequestPermissionType { Share = 0 }

	export interface InvalidPermissionType {
	}

	export interface DescribeEffectiveInstanceAssociationsResult {
		Associations?: Array<InstanceAssociation> | null;
		NextToken?: string | null;
	}


	/** One or more association documents on the instance.  */
	export interface InstanceAssociation {
		AssociationId?: string | null;
		InstanceId?: string | null;
		Content?: string | null;
		AssociationVersion?: string | null;
	}

	export interface DescribeEffectiveInstanceAssociationsRequest {
		InstanceId: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface DescribeEffectivePatchesForPatchBaselineResult {
		EffectivePatches?: Array<EffectivePatch> | null;
		NextToken?: string | null;
	}


	/** The EffectivePatch structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved. */
	export interface EffectivePatch {

		/** Represents metadata about a patch. */
		Patch?: Patch | null;

		/** Information about the approval status of a patch. */
		PatchStatus?: PatchStatus | null;
	}


	/** Information about the approval status of a patch. */
	export interface PatchStatus {
		DeploymentStatus?: PatchStatusDeploymentStatus | null;
		ComplianceLevel?: PatchRuleComplianceLevel | null;
		ApprovalDate?: Date | null;
	}

	export enum PatchStatusDeploymentStatus { APPROVED = 0, PENDING_APPROVAL = 1, EXPLICIT_APPROVED = 2, EXPLICIT_REJECTED = 3 }

	export interface DescribeEffectivePatchesForPatchBaselineRequest {
		BaselineId: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface UnsupportedOperatingSystem {
	}

	export interface DescribeInstanceAssociationsStatusResult {
		InstanceAssociationStatusInfos?: Array<InstanceAssociationStatusInfo> | null;
		NextToken?: string | null;
	}


	/** Status information about the instance association. */
	export interface InstanceAssociationStatusInfo {
		AssociationId?: string | null;
		Name?: string | null;
		DocumentVersion?: string | null;
		AssociationVersion?: string | null;
		InstanceId?: string | null;
		ExecutionDate?: Date | null;
		Status?: string | null;
		DetailedStatus?: string | null;
		ExecutionSummary?: string | null;
		ErrorCode?: string | null;

		/** The URL of S3 bucket where you want to store the results of this request. */
		OutputUrl?: InstanceAssociationOutputUrl | null;
		AssociationName?: string | null;
	}


	/** The URL of S3 bucket where you want to store the results of this request. */
	export interface InstanceAssociationOutputUrl {

		/** A URL for the S3 bucket where you want to store the results of this request. */
		S3OutputUrl?: S3OutputUrl | null;
	}


	/** A URL for the S3 bucket where you want to store the results of this request. */
	export interface S3OutputUrl {
		OutputUrl?: string | null;
	}

	export interface DescribeInstanceAssociationsStatusRequest {
		InstanceId: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface DescribeInstanceInformationResult {
		InstanceInformationList?: Array<InstanceInformation> | null;
		NextToken?: string | null;
	}


	/** Describes a filter for a specific list of instances.  */
	export interface InstanceInformation {
		InstanceId?: string | null;
		PingStatus?: InstanceInformationPingStatus | null;
		LastPingDateTime?: Date | null;
		AgentVersion?: string | null;
		IsLatestVersion?: boolean | null;
		PlatformType?: PlatformType | null;
		PlatformName?: string | null;
		PlatformVersion?: string | null;
		ActivationId?: string | null;
		IamRole?: string | null;
		RegistrationDate?: Date | null;
		ResourceType?: InstanceInformationResourceType | null;
		Name?: string | null;
		IPAddress?: string | null;
		ComputerName?: string | null;
		AssociationStatus?: string | null;
		LastAssociationExecutionDate?: Date | null;
		LastSuccessfulAssociationExecutionDate?: Date | null;

		/** Status information about the aggregated associations. */
		AssociationOverview?: InstanceAggregatedAssociationOverview | null;
	}

	export enum InstanceInformationPingStatus { Online = 0, ConnectionLost = 1, Inactive = 2 }

	export enum InstanceInformationResourceType { ManagedInstance = 0, Document = 1, EC2Instance = 2 }


	/** Status information about the aggregated associations. */
	export interface InstanceAggregatedAssociationOverview {
		DetailedStatus?: string | null;
		InstanceAssociationStatusAggregatedCount?: InstanceAssociationStatusAggregatedCount | null;
	}

	export interface InstanceAssociationStatusAggregatedCount {
	}

	export interface DescribeInstanceInformationRequest {
		InstanceInformationFilterList?: Array<InstanceInformationFilter> | null;
		Filters?: Array<InstanceInformationStringFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}


	/** <p>Describes a filter for a specific list of instances. You can filter instances information by using tags. You specify tags by using a key-value mapping.</p> <p>Use this action instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The <code>InstanceInformationFilterList</code> method is a legacy method and does not support tags. </p> */
	export interface InstanceInformationFilter {
		key: InstanceInformationFilterKey;
		valueSet: Array<string>;
	}

	export enum InstanceInformationFilterKey { InstanceIds = 0, AgentVersion = 1, PingStatus = 2, PlatformTypes = 3, ActivationIds = 4, IamRole = 5, ResourceType = 6, AssociationStatus = 7 }


	/** The filters to describe or get information about your managed instances. */
	export interface InstanceInformationStringFilter {
		Key: string;
		Values: Array<string>;
	}

	export interface InvalidInstanceInformationFilterValue {
	}

	export interface DescribeInstancePatchStatesResult {
		InstancePatchStates?: Array<InstancePatchState> | null;
		NextToken?: string | null;
	}


	/** Defines the high-level patch compliance state for a managed instance, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the instance. */
	export interface InstancePatchState {
		InstanceId: string;
		PatchGroup: string;
		BaselineId: string;
		SnapshotId?: string | null;
		InstallOverrideList?: string | null;
		OwnerInformation?: string | null;
		InstalledCount?: number | null;
		InstalledOtherCount?: number | null;
		InstalledPendingRebootCount?: number | null;
		InstalledRejectedCount?: number | null;
		MissingCount?: number | null;
		FailedCount?: number | null;
		UnreportedNotApplicableCount?: number | null;
		NotApplicableCount?: number | null;
		OperationStartTime: Date;
		OperationEndTime: Date;
		Operation: InstancePatchStateOperation;
		LastNoRebootInstallOperationTime?: Date | null;
		RebootOption?: InstancePatchStateRebootOption | null;
	}

	export enum InstancePatchStateOperation { Scan = 0, Install = 1 }

	export enum InstancePatchStateRebootOption { RebootIfNeeded = 0, NoReboot = 1 }

	export interface DescribeInstancePatchStatesRequest {
		InstanceIds: Array<string>;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface DescribeInstancePatchStatesForPatchGroupResult {
		InstancePatchStates?: Array<InstancePatchState> | null;
		NextToken?: string | null;
	}

	export interface DescribeInstancePatchStatesForPatchGroupRequest {
		PatchGroup: string;
		Filters?: Array<InstancePatchStateFilter> | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Defines a filter used in DescribeInstancePatchStatesForPatchGroup used to scope down the information returned by the API. */
	export interface InstancePatchStateFilter {
		Key: string;
		Values: Array<string>;
		Type: InstancePatchStateFilterType;
	}

	export enum InstancePatchStateFilterType { Equal = 0, NotEqual = 1, LessThan = 2, GreaterThan = 3 }

	export interface DescribeInstancePatchesResult {
		Patches?: Array<PatchComplianceData> | null;
		NextToken?: string | null;
	}


	/** Information about the state of a patch on a particular instance as it relates to the patch baseline used to patch the instance. */
	export interface PatchComplianceData {
		Title: string;
		KBId: string;
		Classification: string;
		Severity: string;
		State: PatchComplianceDataState;
		InstalledTime: Date;
	}

	export enum PatchComplianceDataState { INSTALLED = 0, INSTALLED_OTHER = 1, INSTALLED_PENDING_REBOOT = 2, INSTALLED_REJECTED = 3, MISSING = 4, NOT_APPLICABLE = 5, FAILED = 6 }

	export interface DescribeInstancePatchesRequest {
		InstanceId: string;
		Filters?: Array<PatchOrchestratorFilter> | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface DescribeInventoryDeletionsResult {
		InventoryDeletions?: Array<InventoryDeletionStatusItem> | null;
		NextToken?: string | null;
	}


	/** Status information returned by the <code>DeleteInventory</code> action. */
	export interface InventoryDeletionStatusItem {
		DeletionId?: string | null;
		TypeName?: string | null;
		DeletionStartTime?: Date | null;
		LastStatus?: InventoryDeletionStatusItemLastStatus | null;
		LastStatusMessage?: string | null;

		/** Information about the delete operation. */
		DeletionSummary?: InventoryDeletionSummary | null;
		LastStatusUpdateTime?: Date | null;
	}

	export enum InventoryDeletionStatusItemLastStatus { InProgress = 0, Complete = 1 }

	export interface DescribeInventoryDeletionsRequest {
		DeletionId?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface InvalidDeletionIdException {
	}

	export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
		WindowExecutionTaskInvocationIdentities?: Array<MaintenanceWindowExecutionTaskInvocationIdentity> | null;
		NextToken?: string | null;
	}


	/** Describes the information about a task invocation for a particular target as part of a task execution performed as part of a maintenance window execution. */
	export interface MaintenanceWindowExecutionTaskInvocationIdentity {
		WindowExecutionId?: string | null;
		TaskExecutionId?: string | null;
		InvocationId?: string | null;
		ExecutionId?: string | null;
		TaskType?: MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null;
		Parameters?: string | null;
		Status?: MaintenanceWindowExecutionTaskInvocationIdentityStatus | null;
		StatusDetails?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		OwnerInformation?: string | null;
		WindowTargetId?: string | null;
	}

	export enum MaintenanceWindowExecutionTaskInvocationIdentityTaskType { RUN_COMMAND = 0, AUTOMATION = 1, STEP_FUNCTIONS = 2, LAMBDA = 3 }

	export enum MaintenanceWindowExecutionTaskInvocationIdentityStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3, TIMED_OUT = 4, CANCELLING = 5, CANCELLED = 6, SKIPPED_OVERLAPPING = 7 }

	export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
		WindowExecutionId: string;
		TaskId: string;
		Filters?: Array<MaintenanceWindowFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}


	/** Filter used in the request. Supported filter keys are Name and Enabled. */
	export interface MaintenanceWindowFilter {
		Key?: string | null;
		Values?: Array<string> | null;
	}

	export interface DescribeMaintenanceWindowExecutionTasksResult {
		WindowExecutionTaskIdentities?: Array<MaintenanceWindowExecutionTaskIdentity> | null;
		NextToken?: string | null;
	}


	/** Information about a task execution performed as part of a maintenance window execution. */
	export interface MaintenanceWindowExecutionTaskIdentity {
		WindowExecutionId?: string | null;
		TaskExecutionId?: string | null;
		Status?: MaintenanceWindowExecutionTaskInvocationIdentityStatus | null;
		StatusDetails?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		TaskArn?: string | null;
		TaskType?: MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null;
	}

	export interface DescribeMaintenanceWindowExecutionTasksRequest {
		WindowExecutionId: string;
		Filters?: Array<MaintenanceWindowFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface DescribeMaintenanceWindowExecutionsResult {
		WindowExecutions?: Array<MaintenanceWindowExecution> | null;
		NextToken?: string | null;
	}


	/** Describes the information about an execution of a maintenance window.  */
	export interface MaintenanceWindowExecution {
		WindowId?: string | null;
		WindowExecutionId?: string | null;
		Status?: MaintenanceWindowExecutionTaskInvocationIdentityStatus | null;
		StatusDetails?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
	}

	export interface DescribeMaintenanceWindowExecutionsRequest {
		WindowId: string;
		Filters?: Array<MaintenanceWindowFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface DescribeMaintenanceWindowScheduleResult {
		ScheduledWindowExecutions?: Array<ScheduledWindowExecution> | null;
		NextToken?: string | null;
	}


	/** Information about a scheduled execution for a maintenance window. */
	export interface ScheduledWindowExecution {
		WindowId?: string | null;
		Name?: string | null;
		ExecutionTime?: string | null;
	}

	export interface DescribeMaintenanceWindowScheduleRequest {
		WindowId?: string | null;
		Targets?: Array<Target> | null;
		ResourceType?: DescribeMaintenanceWindowScheduleRequestResourceType | null;
		Filters?: Array<PatchOrchestratorFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export enum DescribeMaintenanceWindowScheduleRequestResourceType { INSTANCE = 0, RESOURCE_GROUP = 1 }

	export interface DescribeMaintenanceWindowTargetsResult {
		Targets?: Array<MaintenanceWindowTarget> | null;
		NextToken?: string | null;
	}


	/** The target registered with the maintenance window. */
	export interface MaintenanceWindowTarget {
		WindowId?: string | null;
		WindowTargetId?: string | null;
		ResourceType?: DescribeMaintenanceWindowScheduleRequestResourceType | null;
		Targets?: Array<Target> | null;
		OwnerInformation?: string | null;
		Name?: string | null;
		Description?: string | null;
	}

	export interface DescribeMaintenanceWindowTargetsRequest {
		WindowId: string;
		Filters?: Array<MaintenanceWindowFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface DescribeMaintenanceWindowTasksResult {
		Tasks?: Array<MaintenanceWindowTask> | null;
		NextToken?: string | null;
	}


	/** Information about a task defined for a maintenance window. */
	export interface MaintenanceWindowTask {
		WindowId?: string | null;
		WindowTaskId?: string | null;
		TaskArn?: string | null;
		Type?: MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null;
		Targets?: Array<Target> | null;
		TaskParameters?: MaintenanceWindowTaskParameters | null;
		Priority?: number | null;

		/** <p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo | null;
		ServiceRoleArn?: string | null;
		MaxConcurrency?: string | null;
		MaxErrors?: string | null;
		Name?: string | null;
		Description?: string | null;
	}

	export interface MaintenanceWindowTaskParameters {
	}


	/** <p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
	export interface LoggingInfo {
		S3BucketName: string;
		S3KeyPrefix?: string | null;
		S3Region: string;
	}

	export interface DescribeMaintenanceWindowTasksRequest {
		WindowId: string;
		Filters?: Array<MaintenanceWindowFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface DescribeMaintenanceWindowsResult {
		WindowIdentities?: Array<MaintenanceWindowIdentity> | null;
		NextToken?: string | null;
	}


	/** Information about the maintenance window. */
	export interface MaintenanceWindowIdentity {
		WindowId?: string | null;
		Name?: string | null;
		Description?: string | null;
		Enabled?: boolean | null;
		Duration?: number | null;
		Cutoff?: number | null;
		Schedule?: string | null;
		ScheduleTimezone?: string | null;
		EndDate?: string | null;
		StartDate?: string | null;
		NextExecutionTime?: string | null;
	}

	export interface DescribeMaintenanceWindowsRequest {
		Filters?: Array<MaintenanceWindowFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface DescribeMaintenanceWindowsForTargetResult {
		WindowIdentities?: Array<MaintenanceWindowIdentityForTarget> | null;
		NextToken?: string | null;
	}


	/** The maintenance window to which the specified target belongs. */
	export interface MaintenanceWindowIdentityForTarget {
		WindowId?: string | null;
		Name?: string | null;
	}

	export interface DescribeMaintenanceWindowsForTargetRequest {
		Targets: Array<Target>;
		ResourceType: DescribeMaintenanceWindowScheduleRequestResourceType;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface DescribeOpsItemsResponse {
		NextToken?: string | null;
		OpsItemSummaries?: Array<OpsItemSummary> | null;
	}


	/** A count of OpsItems. */
	export interface OpsItemSummary {
		CreatedBy?: string | null;
		CreatedTime?: Date | null;
		LastModifiedBy?: string | null;
		LastModifiedTime?: Date | null;
		Priority?: number | null;
		Source?: string | null;
		Status?: OpsItemSummaryStatus | null;
		OpsItemId?: string | null;
		Title?: string | null;
		OperationalData?: OpsItemOperationalData | null;
		Category?: string | null;
		Severity?: string | null;
	}

	export enum OpsItemSummaryStatus { Open = 0, InProgress = 1, Resolved = 2 }

	export interface DescribeOpsItemsRequest {
		OpsItemFilters?: Array<OpsItemFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}


	/** Describes an OpsItem filter. */
	export interface OpsItemFilter {
		Key: OpsItemFilterKey;
		Values: Array<string>;
		Operator: OpsItemFilterOperator;
	}

	export enum OpsItemFilterKey { Status = 0, CreatedBy = 1, Source = 2, Priority = 3, Title = 4, OpsItemId = 5, CreatedTime = 6, LastModifiedTime = 7, OperationalData = 8, OperationalDataKey = 9, OperationalDataValue = 10, ResourceId = 11, AutomationId = 12, Category = 13, Severity = 14 }

	export enum OpsItemFilterOperator { Equal = 0, Contains = 1, GreaterThan = 2, LessThan = 3 }

	export interface DescribeParametersResult {
		Parameters?: Array<ParameterMetadata> | null;
		NextToken?: string | null;
	}


	/** Metadata includes information like the ARN of the last user and the date/time the parameter was last used. */
	export interface ParameterMetadata {
		Name?: string | null;
		Type?: ParameterMetadataType | null;
		KeyId?: string | null;
		LastModifiedDate?: Date | null;
		LastModifiedUser?: string | null;
		Description?: string | null;
		AllowedPattern?: string | null;
		Version?: number | null;
		Tier?: ParameterMetadataTier | null;
		Policies?: Array<ParameterInlinePolicy> | null;
		DataType?: string | null;
	}

	export enum ParameterMetadataType { String = 0, StringList = 1, SecureString = 2 }

	export enum ParameterMetadataTier { Standard = 0, Advanced = 1, Intelligent_Tiering = 2 }


	/** One or more policies assigned to a parameter. */
	export interface ParameterInlinePolicy {
		PolicyText?: string | null;
		PolicyType?: string | null;
		PolicyStatus?: string | null;
	}

	export interface DescribeParametersRequest {
		Filters?: Array<ParametersFilter> | null;
		ParameterFilters?: Array<ParameterStringFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}


	/** This data type is deprecated. Instead, use <a>ParameterStringFilter</a>. */
	export interface ParametersFilter {
		Key: ParametersFilterKey;
		Values: Array<string>;
	}

	export enum ParametersFilterKey { Name = 0, Type = 1, KeyId = 2 }


	/** <p>One or more filters. Use a filter to return a more specific list of results.</p> <important> <p>The <code>ParameterStringFilter</code> object is used by the <a>DescribeParameters</a> and <a>GetParametersByPath</a> API actions. However, not all of the pattern values listed for <code>Key</code> can be used with both actions.</p> <p>For <code>DescribeActions</code>, all of the listed patterns are valid, with the exception of <code>Label</code>.</p> <p>For <code>GetParametersByPath</code>, the following patterns listed for <code>Key</code> are not valid: <code>Name</code>, <code>Path</code>, and <code>Tier</code>.</p> <p>For examples of CLI commands demonstrating valid parameter filter constructions, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-search.html">Searching for Systems Manager parameters</a> in the <i>AWS Systems Manager User Guide</i>.</p> </important> */
	export interface ParameterStringFilter {
		Key: string;
		Option?: string | null;
		Values?: Array<string> | null;
	}

	export interface InvalidFilterOption {
	}

	export interface DescribePatchBaselinesResult {
		BaselineIdentities?: Array<PatchBaselineIdentity> | null;
		NextToken?: string | null;
	}


	/** Defines the basic information about a patch baseline. */
	export interface PatchBaselineIdentity {
		BaselineId?: string | null;
		BaselineName?: string | null;
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;
		BaselineDescription?: string | null;
		DefaultBaseline?: boolean | null;
	}

	export interface DescribePatchBaselinesRequest {
		Filters?: Array<PatchOrchestratorFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface DescribePatchGroupStateResult {
		Instances?: number | null;
		InstancesWithInstalledPatches?: number | null;
		InstancesWithInstalledOtherPatches?: number | null;
		InstancesWithInstalledPendingRebootPatches?: number | null;
		InstancesWithInstalledRejectedPatches?: number | null;
		InstancesWithMissingPatches?: number | null;
		InstancesWithFailedPatches?: number | null;
		InstancesWithNotApplicablePatches?: number | null;
		InstancesWithUnreportedNotApplicablePatches?: number | null;
	}

	export interface DescribePatchGroupStateRequest {
		PatchGroup: string;
	}

	export interface DescribePatchGroupsResult {
		Mappings?: Array<PatchGroupPatchBaselineMapping> | null;
		NextToken?: string | null;
	}


	/** The mapping between a patch group and the patch baseline the patch group is registered with. */
	export interface PatchGroupPatchBaselineMapping {
		PatchGroup?: string | null;

		/** Defines the basic information about a patch baseline. */
		BaselineIdentity?: PatchBaselineIdentity | null;
	}

	export interface DescribePatchGroupsRequest {
		MaxResults?: number | null;
		Filters?: Array<PatchOrchestratorFilter> | null;
		NextToken?: string | null;
	}

	export interface DescribePatchPropertiesResult {
		Properties?: Array<PatchPropertyEntry> | null;
		NextToken?: string | null;
	}

	export interface PatchPropertyEntry {
	}

	export interface DescribePatchPropertiesRequest {
		OperatingSystem: CreatePatchBaselineRequestOperatingSystem;
		Property: DescribePatchPropertiesRequestProperty;
		PatchSet?: DescribePatchPropertiesRequestPatchSet | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export enum DescribePatchPropertiesRequestProperty { PRODUCT = 0, PRODUCT_FAMILY = 1, CLASSIFICATION = 2, MSRC_SEVERITY = 3, PRIORITY = 4, SEVERITY = 5 }

	export enum DescribePatchPropertiesRequestPatchSet { OS = 0, APPLICATION = 1 }

	export interface DescribeSessionsResponse {
		Sessions?: Array<Session> | null;
		NextToken?: string | null;
	}


	/** Information about a Session Manager connection to an instance. */
	export interface Session {
		SessionId?: string | null;
		Target?: string | null;
		Status?: SessionStatus | null;
		StartDate?: Date | null;
		EndDate?: Date | null;
		DocumentName?: string | null;
		Owner?: string | null;
		Details?: string | null;

		/** Reserved for future use. */
		OutputUrl?: SessionManagerOutputUrl | null;
	}

	export enum SessionStatus { Connected = 0, Connecting = 1, Disconnected = 2, Terminated = 3, Terminating = 4, Failed = 5 }


	/** Reserved for future use. */
	export interface SessionManagerOutputUrl {
		S3OutputUrl?: string | null;
		CloudWatchOutputUrl?: string | null;
	}

	export interface DescribeSessionsRequest {
		State: DescribeSessionsRequestState;
		MaxResults?: number | null;
		NextToken?: string | null;
		Filters?: Array<SessionFilter> | null;
	}

	export enum DescribeSessionsRequestState { Active = 0, History = 1 }


	/** Describes a filter for Session Manager information. */
	export interface SessionFilter {
		key: SessionFilterKey;
		value: string;
	}

	export enum SessionFilterKey { InvokedAfter = 0, InvokedBefore = 1, Target = 2, Owner = 3, Status = 4 }

	export interface GetAutomationExecutionResult {

		/** Detailed information about the current state of an individual Automation execution. */
		AutomationExecution?: AutomationExecution | null;
	}


	/** Detailed information about the current state of an individual Automation execution. */
	export interface AutomationExecution {
		AutomationExecutionId?: string | null;
		DocumentName?: string | null;
		DocumentVersion?: string | null;
		ExecutionStartTime?: Date | null;
		ExecutionEndTime?: Date | null;
		AutomationExecutionStatus?: AutomationExecutionMetadataAutomationExecutionStatus | null;
		StepExecutions?: Array<StepExecution> | null;
		StepExecutionsTruncated?: boolean | null;
		Parameters?: AutomationParameterMap | null;
		Outputs?: AutomationParameterMap | null;
		FailureMessage?: string | null;
		Mode?: AutomationExecutionMetadataMode | null;
		ParentAutomationExecutionId?: string | null;
		ExecutedBy?: string | null;
		CurrentStepName?: string | null;
		CurrentAction?: string | null;
		TargetParameterName?: string | null;
		Targets?: Array<Target> | null;
		TargetMaps?: Array<TargetMap> | null;

		/** Information about targets that resolved during the Automation execution. */
		ResolvedTargets?: ResolvedTargets | null;
		MaxConcurrency?: string | null;
		MaxErrors?: string | null;
		Target?: string | null;
		TargetLocations?: Array<TargetLocation> | null;

		/** An aggregate of step execution statuses displayed in the AWS Console for a multi-Region and multi-account Automation execution. */
		ProgressCounters?: ProgressCounters | null;
	}


	/** An aggregate of step execution statuses displayed in the AWS Console for a multi-Region and multi-account Automation execution. */
	export interface ProgressCounters {
		TotalSteps?: number | null;
		SuccessSteps?: number | null;
		FailedSteps?: number | null;
		CancelledSteps?: number | null;
		TimedOutSteps?: number | null;
	}

	export interface GetAutomationExecutionRequest {
		AutomationExecutionId: string;
	}

	export interface GetCalendarStateResponse {
		State?: GetCalendarStateResponseState | null;
		AtTime?: string | null;
		NextTransitionTime?: string | null;
	}

	export enum GetCalendarStateResponseState { OPEN = 0, CLOSED = 1 }

	export interface GetCalendarStateRequest {
		CalendarNames: Array<string>;
		AtTime?: string | null;
	}

	export interface InvalidDocumentType {
	}

	export interface UnsupportedCalendarException {
	}

	export interface GetCommandInvocationResult {
		CommandId?: string | null;
		InstanceId?: string | null;
		Comment?: string | null;
		DocumentName?: string | null;
		DocumentVersion?: string | null;
		PluginName?: string | null;
		ResponseCode?: number | null;
		ExecutionStartDateTime?: string | null;
		ExecutionElapsedTime?: string | null;
		ExecutionEndDateTime?: string | null;
		Status?: GetCommandInvocationResultStatus | null;
		StatusDetails?: string | null;
		StandardOutputContent?: string | null;
		StandardOutputUrl?: string | null;
		StandardErrorContent?: string | null;
		StandardErrorUrl?: string | null;

		/** Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig | null;
	}

	export enum GetCommandInvocationResultStatus { Pending = 0, InProgress = 1, Delayed = 2, Success = 3, Cancelled = 4, TimedOut = 5, Failed = 6, Cancelling = 7 }


	/** Configuration options for sending command output to CloudWatch Logs. */
	export interface CloudWatchOutputConfig {
		CloudWatchLogGroupName?: string | null;
		CloudWatchOutputEnabled?: boolean | null;
	}

	export interface GetCommandInvocationRequest {
		CommandId: string;
		InstanceId: string;
		PluginName?: string | null;
	}

	export interface InvalidPluginName {
	}

	export interface InvocationDoesNotExist {
	}

	export interface GetConnectionStatusResponse {
		Target?: string | null;
		Status?: GetConnectionStatusResponseStatus | null;
	}

	export enum GetConnectionStatusResponseStatus { Connected = 0, NotConnected = 1 }

	export interface GetConnectionStatusRequest {
		Target: string;
	}

	export interface GetDefaultPatchBaselineResult {
		BaselineId?: string | null;
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;
	}

	export interface GetDefaultPatchBaselineRequest {
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;
	}

	export interface GetDeployablePatchSnapshotForInstanceResult {
		InstanceId?: string | null;
		SnapshotId?: string | null;
		SnapshotDownloadUrl?: string | null;
		Product?: string | null;
	}

	export interface GetDeployablePatchSnapshotForInstanceRequest {
		InstanceId: string;
		SnapshotId: string;
	}

	export interface UnsupportedFeatureRequiredException {
	}

	export interface GetDocumentResult {
		Name?: string | null;
		VersionName?: string | null;
		DocumentVersion?: string | null;

		/** The status of a document. */
		Status?: DocumentDescriptionStatus | null;
		StatusInformation?: string | null;
		Content?: string | null;
		DocumentType?: DocumentDescriptionDocumentType | null;
		DocumentFormat?: DocumentDescriptionDocumentFormat | null;
		Requires?: Array<DocumentRequires> | null;
		AttachmentsContent?: Array<AttachmentContent> | null;
	}


	/** A structure that includes attributes that describe a document attachment. */
	export interface AttachmentContent {
		Name?: string | null;
		Size?: number | null;
		Hash?: string | null;
		HashType?: AttachmentContentHashType | null;
		Url?: string | null;
	}

	export enum AttachmentContentHashType { Sha256 = 0 }

	export interface GetDocumentRequest {
		Name: string;
		VersionName?: string | null;
		DocumentVersion?: string | null;
		DocumentFormat?: DocumentDescriptionDocumentFormat | null;
	}

	export interface GetInventoryResult {
		Entities?: Array<InventoryResultEntity> | null;
		NextToken?: string | null;
	}


	/** Inventory query results. */
	export interface InventoryResultEntity {
		Id?: string | null;
		Data?: InventoryResultItemMap | null;
	}

	export interface InventoryResultItemMap {
	}

	export interface GetInventoryRequest {
		Filters?: Array<InventoryFilter> | null;
		Aggregators?: Array<InventoryAggregator> | null;
		ResultAttributes?: Array<ResultAttribute> | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** One or more filters. Use a filter to return a more specific list of results. */
	export interface InventoryFilter {
		Key: string;
		Values: Array<string>;
		Type?: InventoryFilterType | null;
	}

	export enum InventoryFilterType { Equal = 0, NotEqual = 1, BeginWith = 2, LessThan = 3, GreaterThan = 4, Exists = 5 }


	/** Specifies the inventory type and attribute for the aggregation execution. */
	export interface InventoryAggregator {
		Expression?: string | null;
		Aggregators?: Array<InventoryAggregator> | null;
		Groups?: Array<InventoryGroup> | null;
	}


	/** A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria. */
	export interface InventoryGroup {
		Name: string;
		Filters: Array<InventoryFilter>;
	}


	/** The inventory item result attribute. */
	export interface ResultAttribute {
		TypeName: string;
	}

	export interface InvalidInventoryGroupException {
	}

	export interface InvalidAggregatorException {
	}

	export interface InvalidResultAttributeException {
	}

	export interface GetInventorySchemaResult {
		Schemas?: Array<InventoryItemSchema> | null;
		NextToken?: string | null;
	}


	/** The inventory item schema definition. Users can use this to compose inventory query filters. */
	export interface InventoryItemSchema {
		TypeName: string;
		Version?: string | null;
		Attributes: Array<InventoryItemAttribute>;
		DisplayName?: string | null;
	}


	/** Attributes are the entries within the inventory item content. It contains name and value. */
	export interface InventoryItemAttribute {
		Name: string;
		DataType: InventoryItemAttributeDataType;
	}

	export enum InventoryItemAttributeDataType { _string = 0, number = 1 }

	export interface GetInventorySchemaRequest {
		TypeName?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
		Aggregator?: boolean | null;
		SubType?: boolean | null;
	}

	export interface GetMaintenanceWindowResult {
		WindowId?: string | null;
		Name?: string | null;
		Description?: string | null;
		StartDate?: string | null;
		EndDate?: string | null;
		Schedule?: string | null;
		ScheduleTimezone?: string | null;
		NextExecutionTime?: string | null;
		Duration?: number | null;
		Cutoff?: number | null;
		AllowUnassociatedTargets?: boolean | null;
		Enabled?: boolean | null;
		CreatedDate?: Date | null;
		ModifiedDate?: Date | null;
	}

	export interface GetMaintenanceWindowRequest {
		WindowId: string;
	}

	export interface GetMaintenanceWindowExecutionResult {
		WindowExecutionId?: string | null;
		TaskIds?: Array<string> | null;
		Status?: MaintenanceWindowExecutionTaskInvocationIdentityStatus | null;
		StatusDetails?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
	}

	export interface GetMaintenanceWindowExecutionRequest {
		WindowExecutionId: string;
	}

	export interface GetMaintenanceWindowExecutionTaskResult {
		WindowExecutionId?: string | null;
		TaskExecutionId?: string | null;
		TaskArn?: string | null;
		ServiceRole?: string | null;
		Type?: MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null;
		TaskParameters?: Array<MaintenanceWindowTaskParameters> | null;
		Priority?: number | null;
		MaxConcurrency?: string | null;
		MaxErrors?: string | null;
		Status?: MaintenanceWindowExecutionTaskInvocationIdentityStatus | null;
		StatusDetails?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
	}

	export interface GetMaintenanceWindowExecutionTaskRequest {
		WindowExecutionId: string;
		TaskId: string;
	}

	export interface GetMaintenanceWindowExecutionTaskInvocationResult {
		WindowExecutionId?: string | null;
		TaskExecutionId?: string | null;
		InvocationId?: string | null;
		ExecutionId?: string | null;
		TaskType?: MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null;
		Parameters?: string | null;
		Status?: MaintenanceWindowExecutionTaskInvocationIdentityStatus | null;
		StatusDetails?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		OwnerInformation?: string | null;
		WindowTargetId?: string | null;
	}

	export interface GetMaintenanceWindowExecutionTaskInvocationRequest {
		WindowExecutionId: string;
		TaskId: string;
		InvocationId: string;
	}

	export interface GetMaintenanceWindowTaskResult {
		WindowId?: string | null;
		WindowTaskId?: string | null;
		Targets?: Array<Target> | null;
		TaskArn?: string | null;
		ServiceRoleArn?: string | null;
		TaskType?: MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null;
		TaskParameters?: MaintenanceWindowTaskParameters | null;

		/** The parameters for task execution. */
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters | null;
		Priority?: number | null;
		MaxConcurrency?: string | null;
		MaxErrors?: string | null;

		/** <p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo | null;
		Name?: string | null;
		Description?: string | null;
	}


	/** The parameters for task execution. */
	export interface MaintenanceWindowTaskInvocationParameters {

		/** <p>The parameters for a RUN_COMMAND task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Run Command tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note> */
		RunCommand?: MaintenanceWindowRunCommandParameters | null;

		/** The parameters for an AUTOMATION task type. */
		Automation?: MaintenanceWindowAutomationParameters | null;

		/** <p>The parameters for a STEP_FUNCTIONS task.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Step Functions tasks, Systems Manager ignores any values specified for <code>TaskParameters</code> and <code>LoggingInfo</code>.</p> </note> */
		StepFunctions?: MaintenanceWindowStepFunctionsParameters | null;

		/** <p>The parameters for a LAMBDA task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and LoggingInfo.</p> </note> */
		Lambda?: MaintenanceWindowLambdaParameters | null;
	}


	/** <p>The parameters for a RUN_COMMAND task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Run Command tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note> */
	export interface MaintenanceWindowRunCommandParameters {
		Comment?: string | null;

		/** Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig | null;
		DocumentHash?: string | null;
		DocumentHashType?: DocumentDescriptionHashType | null;
		DocumentVersion?: string | null;

		/** Configurations for sending notifications. */
		NotificationConfig?: NotificationConfig | null;
		OutputS3BucketName?: string | null;
		OutputS3KeyPrefix?: string | null;
		Parameters?: Parameters | null;
		ServiceRoleArn?: string | null;
		TimeoutSeconds?: number | null;
	}


	/** Configurations for sending notifications. */
	export interface NotificationConfig {
		NotificationArn?: string | null;
		NotificationEvents?: Array<NotificationEvent> | null;
		NotificationType?: NotificationConfigNotificationType | null;
	}

	export enum NotificationEvent { All = 0, InProgress = 1, Success = 2, TimedOut = 3, Cancelled = 4, Failed = 5 }

	export enum NotificationConfigNotificationType { Command = 0, Invocation = 1 }


	/** The parameters for an AUTOMATION task type. */
	export interface MaintenanceWindowAutomationParameters {
		DocumentVersion?: string | null;
		Parameters?: AutomationParameterMap | null;
	}


	/** <p>The parameters for a STEP_FUNCTIONS task.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Step Functions tasks, Systems Manager ignores any values specified for <code>TaskParameters</code> and <code>LoggingInfo</code>.</p> </note> */
	export interface MaintenanceWindowStepFunctionsParameters {
		Input?: string | null;
		Name?: string | null;
	}


	/** <p>The parameters for a LAMBDA task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and LoggingInfo.</p> </note> */
	export interface MaintenanceWindowLambdaParameters {
		ClientContext?: string | null;
		Qualifier?: string | null;
		Payload?: string | null;
	}

	export interface GetMaintenanceWindowTaskRequest {
		WindowId: string;
		WindowTaskId: string;
	}

	export interface GetOpsItemResponse {

		/** Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. */
		OpsItem?: OpsItem | null;
	}


	/** Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.  */
	export interface OpsItem {
		CreatedBy?: string | null;
		CreatedTime?: Date | null;
		Description?: string | null;
		LastModifiedBy?: string | null;
		LastModifiedTime?: Date | null;
		Notifications?: Array<OpsItemNotification> | null;
		Priority?: number | null;
		RelatedOpsItems?: Array<RelatedOpsItem> | null;
		Status?: OpsItemSummaryStatus | null;
		OpsItemId?: string | null;
		Version?: string | null;
		Title?: string | null;
		Source?: string | null;
		OperationalData?: OpsItemOperationalData | null;
		Category?: string | null;
		Severity?: string | null;
	}

	export interface GetOpsItemRequest {
		OpsItemId: string;
	}

	export interface OpsItemNotFoundException {
	}

	export interface GetOpsSummaryResult {
		Entities?: Array<OpsEntity> | null;
		NextToken?: string | null;
	}


	/** The result of the query. */
	export interface OpsEntity {
		Id?: string | null;
		Data?: OpsEntityItemMap | null;
	}

	export interface OpsEntityItemMap {
	}

	export interface GetOpsSummaryRequest {
		SyncName?: string | null;
		Filters?: Array<OpsFilter> | null;
		Aggregators?: Array<OpsAggregator> | null;
		ResultAttributes?: Array<OpsResultAttribute> | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** A filter for viewing OpsItem summaries. */
	export interface OpsFilter {
		Key: string;
		Values: Array<string>;
		Type?: InventoryFilterType | null;
	}


	/** One or more aggregators for viewing counts of OpsItems using different dimensions such as <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a few. */
	export interface OpsAggregator {
		AggregatorType?: string | null;
		TypeName?: string | null;
		AttributeName?: string | null;
		Values?: OpsAggregatorValueMap | null;
		Filters?: Array<OpsFilter> | null;
		Aggregators?: Array<OpsAggregator> | null;
	}

	export interface OpsAggregatorValueMap {
	}


	/** The OpsItem data type to return. */
	export interface OpsResultAttribute {
		TypeName: string;
	}

	export interface GetParameterResult {

		/** An Systems Manager parameter in Parameter Store. */
		Parameter?: Parameter | null;
	}


	/** An Systems Manager parameter in Parameter Store. */
	export interface Parameter {
		Name?: string | null;
		Type?: ParameterMetadataType | null;
		Value?: string | null;
		Version?: number | null;
		Selector?: string | null;
		SourceResult?: string | null;
		LastModifiedDate?: Date | null;
		ARN?: string | null;
		DataType?: string | null;
	}

	export interface GetParameterRequest {
		Name: string;
		WithDecryption?: boolean | null;
	}

	export interface InvalidKeyId {
	}

	export interface ParameterVersionNotFound {
	}

	export interface GetParameterHistoryResult {
		Parameters?: Array<ParameterHistory> | null;
		NextToken?: string | null;
	}


	/** Information about parameter usage. */
	export interface ParameterHistory {
		Name?: string | null;
		Type?: ParameterMetadataType | null;
		KeyId?: string | null;
		LastModifiedDate?: Date | null;
		LastModifiedUser?: string | null;
		Description?: string | null;
		Value?: string | null;
		AllowedPattern?: string | null;
		Version?: number | null;
		Labels?: Array<string> | null;
		Tier?: ParameterHistoryTier | null;
		Policies?: Array<ParameterInlinePolicy> | null;
		DataType?: string | null;
	}

	export enum ParameterHistoryTier { Standard = 0, Advanced = 1, Intelligent_Tiering = 2 }

	export interface GetParameterHistoryRequest {
		Name: string;
		WithDecryption?: boolean | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface GetParametersResult {
		Parameters?: Array<Parameter> | null;
		InvalidParameters?: Array<string> | null;
	}

	export interface GetParametersRequest {
		Names: Array<string>;
		WithDecryption?: boolean | null;
	}

	export interface GetParametersByPathResult {
		Parameters?: Array<Parameter> | null;
		NextToken?: string | null;
	}

	export interface GetParametersByPathRequest {
		Path: string;
		Recursive?: boolean | null;
		ParameterFilters?: Array<ParameterStringFilter> | null;
		WithDecryption?: boolean | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface GetPatchBaselineResult {
		BaselineId?: string | null;
		Name?: string | null;
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;

		/** A set of patch filters, typically used for approval rules. */
		GlobalFilters?: PatchFilterGroup | null;

		/** A set of rules defining the approval rules for a patch baseline. */
		ApprovalRules?: PatchRuleGroup | null;
		ApprovedPatches?: Array<string> | null;
		ApprovedPatchesComplianceLevel?: PatchRuleComplianceLevel | null;
		ApprovedPatchesEnableNonSecurity?: boolean | null;
		RejectedPatches?: Array<string> | null;
		RejectedPatchesAction?: CreatePatchBaselineRequestRejectedPatchesAction | null;
		PatchGroups?: Array<string> | null;
		CreatedDate?: Date | null;
		ModifiedDate?: Date | null;
		Description?: string | null;
		Sources?: Array<PatchSource> | null;
	}

	export interface GetPatchBaselineRequest {
		BaselineId: string;
	}

	export interface GetPatchBaselineForPatchGroupResult {
		BaselineId?: string | null;
		PatchGroup?: string | null;
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;
	}

	export interface GetPatchBaselineForPatchGroupRequest {
		PatchGroup: string;
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;
	}


	/** The query result body of the GetServiceSetting API action. */
	export interface GetServiceSettingResult {

		/** <p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> */
		ServiceSetting?: ServiceSetting | null;
	}


	/** <p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> */
	export interface ServiceSetting {
		SettingId?: string | null;
		SettingValue?: string | null;
		LastModifiedDate?: Date | null;
		LastModifiedUser?: string | null;
		ARN?: string | null;
		Status?: string | null;
	}


	/** The request body of the GetServiceSetting API action. */
	export interface GetServiceSettingRequest {
		SettingId: string;
	}

	export interface ServiceSettingNotFound {
	}

	export interface LabelParameterVersionResult {
		InvalidLabels?: Array<string> | null;
		ParameterVersion?: number | null;
	}

	export interface LabelParameterVersionRequest {
		Name: string;
		ParameterVersion?: number | null;
		Labels: Array<string>;
	}

	export interface ParameterVersionLabelLimitExceeded {
	}

	export interface ListAssociationVersionsResult {
		AssociationVersions?: Array<AssociationVersionInfo> | null;
		NextToken?: string | null;
	}


	/** Information about the association version. */
	export interface AssociationVersionInfo {
		AssociationId?: string | null;
		AssociationVersion?: string | null;
		CreatedDate?: Date | null;
		Name?: string | null;
		DocumentVersion?: string | null;
		Parameters?: Parameters | null;
		Targets?: Array<Target> | null;
		ScheduleExpression?: string | null;

		/** An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation | null;
		AssociationName?: string | null;
		MaxErrors?: string | null;
		MaxConcurrency?: string | null;
		ComplianceSeverity?: AssociationDescriptionComplianceSeverity | null;
		SyncCompliance?: AssociationDescriptionSyncCompliance | null;
		ApplyOnlyAtCronInterval?: boolean | null;
	}

	export interface ListAssociationVersionsRequest {
		AssociationId: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface ListAssociationsResult {
		Associations?: Array<Association> | null;
		NextToken?: string | null;
	}


	/** Describes an association of a Systems Manager document and an instance. */
	export interface Association {
		Name?: string | null;
		InstanceId?: string | null;
		AssociationId?: string | null;
		AssociationVersion?: string | null;
		DocumentVersion?: string | null;
		Targets?: Array<Target> | null;
		LastExecutionDate?: Date | null;

		/** Information about the association. */
		Overview?: AssociationOverview | null;
		ScheduleExpression?: string | null;
		AssociationName?: string | null;
	}

	export interface ListAssociationsRequest {
		AssociationFilterList?: Array<AssociationFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}


	/** Describes a filter. */
	export interface AssociationFilter {
		key: AssociationFilterKey;
		value: string;
	}

	export enum AssociationFilterKey { InstanceId = 0, Name = 1, AssociationId = 2, AssociationStatusName = 3, LastExecutedBefore = 4, LastExecutedAfter = 5, AssociationName = 6, ResourceGroupName = 7 }

	export interface ListCommandInvocationsResult {
		CommandInvocations?: Array<CommandInvocation> | null;
		NextToken?: string | null;
	}


	/** An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. A command invocation returns status and detail information about a command you ran.  */
	export interface CommandInvocation {
		CommandId?: string | null;
		InstanceId?: string | null;
		InstanceName?: string | null;
		Comment?: string | null;
		DocumentName?: string | null;
		DocumentVersion?: string | null;
		RequestedDateTime?: Date | null;
		Status?: GetCommandInvocationResultStatus | null;
		StatusDetails?: string | null;
		TraceOutput?: string | null;
		StandardOutputUrl?: string | null;
		StandardErrorUrl?: string | null;
		CommandPlugins?: Array<CommandPlugin> | null;
		ServiceRole?: string | null;

		/** Configurations for sending notifications. */
		NotificationConfig?: NotificationConfig | null;

		/** Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig | null;
	}


	/** Describes plugin details. */
	export interface CommandPlugin {
		Name?: string | null;
		Status?: CommandPluginStatus | null;
		StatusDetails?: string | null;
		ResponseCode?: number | null;
		ResponseStartDateTime?: Date | null;
		ResponseFinishDateTime?: Date | null;
		Output?: string | null;
		StandardOutputUrl?: string | null;
		StandardErrorUrl?: string | null;
		OutputS3Region?: string | null;
		OutputS3BucketName?: string | null;
		OutputS3KeyPrefix?: string | null;
	}

	export enum CommandPluginStatus { Pending = 0, InProgress = 1, Success = 2, TimedOut = 3, Cancelled = 4, Failed = 5 }

	export interface ListCommandInvocationsRequest {
		CommandId?: string | null;
		InstanceId?: string | null;
		MaxResults?: number | null;
		NextToken?: string | null;
		Filters?: Array<CommandFilter> | null;
		Details?: boolean | null;
	}


	/** Describes a command filter. */
	export interface CommandFilter {
		key: CommandFilterKey;
		value: string;
	}

	export enum CommandFilterKey { InvokedAfter = 0, InvokedBefore = 1, Status = 2, ExecutionStage = 3, DocumentName = 4 }

	export interface ListCommandsResult {
		Commands?: Array<Command> | null;
		NextToken?: string | null;
	}


	/** Describes a command request. */
	export interface Command {
		CommandId?: string | null;
		DocumentName?: string | null;
		DocumentVersion?: string | null;
		Comment?: string | null;
		ExpiresAfter?: Date | null;
		Parameters?: Parameters | null;
		InstanceIds?: Array<string> | null;
		Targets?: Array<Target> | null;
		RequestedDateTime?: Date | null;
		Status?: CommandStatus | null;
		StatusDetails?: string | null;
		OutputS3Region?: string | null;
		OutputS3BucketName?: string | null;
		OutputS3KeyPrefix?: string | null;
		MaxConcurrency?: string | null;
		MaxErrors?: string | null;
		TargetCount?: number | null;
		CompletedCount?: number | null;
		ErrorCount?: number | null;
		DeliveryTimedOutCount?: number | null;
		ServiceRole?: string | null;

		/** Configurations for sending notifications. */
		NotificationConfig?: NotificationConfig | null;

		/** Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig | null;
		TimeoutSeconds?: number | null;
	}

	export enum CommandStatus { Pending = 0, InProgress = 1, Success = 2, Cancelled = 3, Failed = 4, TimedOut = 5, Cancelling = 6 }

	export interface ListCommandsRequest {
		CommandId?: string | null;
		InstanceId?: string | null;
		MaxResults?: number | null;
		NextToken?: string | null;
		Filters?: Array<CommandFilter> | null;
	}

	export interface ListComplianceItemsResult {
		ComplianceItems?: Array<ComplianceItem> | null;
		NextToken?: string | null;
	}


	/** Information about the compliance as defined by the resource type. For example, for a patch resource type, <code>Items</code> includes information about the PatchSeverity, Classification, and so on. */
	export interface ComplianceItem {
		ComplianceType?: string | null;
		ResourceType?: string | null;
		ResourceId?: string | null;
		Id?: string | null;
		Title?: string | null;
		Status?: ComplianceItemStatus | null;
		Severity?: PatchRuleComplianceLevel | null;

		/** A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'. */
		ExecutionSummary?: ComplianceExecutionSummary | null;
		Details?: ComplianceItemDetails | null;
	}

	export enum ComplianceItemStatus { COMPLIANT = 0, NON_COMPLIANT = 1 }


	/** A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'. */
	export interface ComplianceExecutionSummary {
		ExecutionTime: Date;
		ExecutionId?: string | null;
		ExecutionType?: string | null;
	}

	export interface ComplianceItemDetails {
	}

	export interface ListComplianceItemsRequest {
		Filters?: Array<ComplianceStringFilter> | null;
		ResourceIds?: Array<string> | null;
		ResourceTypes?: Array<string> | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** One or more filters. Use a filter to return a more specific list of results. */
	export interface ComplianceStringFilter {
		Key?: string | null;
		Values?: Array<string> | null;
		Type?: ComplianceStringFilterType | null;
	}

	export enum ComplianceStringFilterType { EQUAL = 0, NOT_EQUAL = 1, BEGIN_WITH = 2, LESS_THAN = 3, GREATER_THAN = 4 }

	export interface ListComplianceSummariesResult {
		ComplianceSummaryItems?: Array<ComplianceSummaryItem> | null;
		NextToken?: string | null;
	}


	/** A summary of compliance information by compliance type. */
	export interface ComplianceSummaryItem {
		ComplianceType?: string | null;

		/** A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type. */
		CompliantSummary?: CompliantSummary | null;

		/** A summary of resources that are not compliant. The summary is organized according to resource type. */
		NonCompliantSummary?: NonCompliantSummary | null;
	}


	/** A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type. */
	export interface CompliantSummary {
		CompliantCount?: number | null;

		/** The number of managed instances found for each patch severity level defined in the request filter. */
		SeveritySummary?: SeveritySummary | null;
	}


	/** The number of managed instances found for each patch severity level defined in the request filter. */
	export interface SeveritySummary {
		CriticalCount?: number | null;
		HighCount?: number | null;
		MediumCount?: number | null;
		LowCount?: number | null;
		InformationalCount?: number | null;
		UnspecifiedCount?: number | null;
	}


	/** A summary of resources that are not compliant. The summary is organized according to resource type. */
	export interface NonCompliantSummary {
		NonCompliantCount?: number | null;

		/** The number of managed instances found for each patch severity level defined in the request filter. */
		SeveritySummary?: SeveritySummary | null;
	}

	export interface ListComplianceSummariesRequest {
		Filters?: Array<ComplianceStringFilter> | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListDocumentVersionsResult {
		DocumentVersions?: Array<DocumentVersionInfo> | null;
		NextToken?: string | null;
	}


	/** Version information about the document. */
	export interface DocumentVersionInfo {
		Name?: string | null;
		DocumentVersion?: string | null;
		VersionName?: string | null;
		CreatedDate?: Date | null;
		IsDefaultVersion?: boolean | null;
		DocumentFormat?: DocumentDescriptionDocumentFormat | null;

		/** The status of a document. */
		Status?: DocumentDescriptionStatus | null;
		StatusInformation?: string | null;
	}

	export interface ListDocumentVersionsRequest {
		Name: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface ListDocumentsResult {
		DocumentIdentifiers?: Array<DocumentIdentifier> | null;
		NextToken?: string | null;
	}


	/** Describes the name of a Systems Manager document. */
	export interface DocumentIdentifier {
		Name?: string | null;
		Owner?: string | null;
		VersionName?: string | null;
		PlatformTypes?: Array<PlatformType> | null;
		DocumentVersion?: string | null;
		DocumentType?: DocumentDescriptionDocumentType | null;
		SchemaVersion?: string | null;
		DocumentFormat?: DocumentDescriptionDocumentFormat | null;
		TargetType?: string | null;
		Tags?: Array<Tag> | null;
		Requires?: Array<DocumentRequires> | null;
	}

	export interface ListDocumentsRequest {
		DocumentFilterList?: Array<DocumentFilter> | null;
		Filters?: Array<DocumentKeyValuesFilter> | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}


	/** This data type is deprecated. Instead, use <a>DocumentKeyValuesFilter</a>. */
	export interface DocumentFilter {
		key: DocumentFilterKey;
		value: string;
	}

	export enum DocumentFilterKey { Name = 0, Owner = 1, PlatformTypes = 2, DocumentType = 3 }


	/** <p>One or more filters. Use a filter to return a more specific list of documents.</p> <p>For keys, you can specify one or more tags that have been applied to a document. </p> <p>Other valid values include <code>Owner</code>, <code>Name</code>, <code>PlatformTypes</code>, <code>DocumentType</code>, and <code>TargetType</code>.</p> <p>Note that only one Owner can be specified in a request. For example: <code>Key=Owner,Values=Self</code>.</p> <p>If you use Name as a key, you can use a name prefix to return a list of documents. For example, in the AWS CLI, to return a list of all documents that begin with <code>Te</code>, run the following command:</p> <p> <code>aws ssm list-documents --filters Key=Name,Values=Te</code> </p> <p>If you specify more than two keys, only documents that are identified by all the tags are returned in the results. If you specify more than two values for a key, documents that are identified by any of the values are returned in the results.</p> <p>To specify a custom key and value pair, use the format <code>Key=tag:tagName,Values=valueName</code>.</p> <p>For example, if you created a Key called region and are using the AWS CLI to call the <code>list-documents</code> command: </p> <p> <code>aws ssm list-documents --filters Key=tag:region,Values=east,west Key=Owner,Values=Self</code> </p> */
	export interface DocumentKeyValuesFilter {
		Key?: string | null;
		Values?: Array<string> | null;
	}

	export interface ListInventoryEntriesResult {
		TypeName?: string | null;
		InstanceId?: string | null;
		SchemaVersion?: string | null;
		CaptureTime?: string | null;
		Entries?: Array<InventoryItemEntry> | null;
		NextToken?: string | null;
	}

	export interface InventoryItemEntry {
	}

	export interface ListInventoryEntriesRequest {
		InstanceId: string;
		TypeName: string;
		Filters?: Array<InventoryFilter> | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListResourceComplianceSummariesResult {
		ResourceComplianceSummaryItems?: Array<ResourceComplianceSummaryItem> | null;
		NextToken?: string | null;
	}


	/** Compliance summary information for a specific resource.  */
	export interface ResourceComplianceSummaryItem {
		ComplianceType?: string | null;
		ResourceType?: string | null;
		ResourceId?: string | null;
		Status?: ComplianceItemStatus | null;
		OverallSeverity?: PatchRuleComplianceLevel | null;

		/** A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'. */
		ExecutionSummary?: ComplianceExecutionSummary | null;

		/** A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type. */
		CompliantSummary?: CompliantSummary | null;

		/** A summary of resources that are not compliant. The summary is organized according to resource type. */
		NonCompliantSummary?: NonCompliantSummary | null;
	}

	export interface ListResourceComplianceSummariesRequest {
		Filters?: Array<ComplianceStringFilter> | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListResourceDataSyncResult {
		ResourceDataSyncItems?: Array<ResourceDataSyncItem> | null;
		NextToken?: string | null;
	}


	/** Information about a Resource Data Sync configuration, including its current status and last successful sync. */
	export interface ResourceDataSyncItem {
		SyncName?: string | null;
		SyncType?: string | null;

		/** <p>The data type name for including resource data sync state. There are four sync states:</p> <p> <code>OrganizationNotExists</code> (Your organization doesn't exist)</p> <p> <code>NoPermissions</code> (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Explorer.)</p> <p> <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the resource data sync configuration.)</p> <p> <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in AWS Organizations.)</p> */
		SyncSource?: ResourceDataSyncSourceWithState | null;

		/** Information about the target S3 bucket for the Resource Data Sync. */
		S3Destination?: ResourceDataSyncS3Destination | null;
		LastSyncTime?: Date | null;
		LastSuccessfulSyncTime?: Date | null;
		SyncLastModifiedTime?: Date | null;
		LastStatus?: ResourceDataSyncItemLastStatus | null;
		SyncCreatedTime?: Date | null;
		LastSyncStatusMessage?: string | null;
	}


	/** <p>The data type name for including resource data sync state. There are four sync states:</p> <p> <code>OrganizationNotExists</code> (Your organization doesn't exist)</p> <p> <code>NoPermissions</code> (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Explorer.)</p> <p> <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the resource data sync configuration.)</p> <p> <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in AWS Organizations.)</p> */
	export interface ResourceDataSyncSourceWithState {
		SourceType?: string | null;

		/** Information about the AwsOrganizationsSource resource data sync source. A sync source of this type can synchronize data from AWS Organizations or, if an AWS Organization is not present, from multiple AWS Regions. */
		AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource | null;
		SourceRegions?: Array<string> | null;
		IncludeFutureRegions?: boolean | null;
		State?: string | null;
	}

	export enum ResourceDataSyncItemLastStatus { Successful = 0, Failed = 1, InProgress = 2 }

	export interface ListResourceDataSyncRequest {
		SyncType?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListTagsForResourceResult {
		TagList?: Array<Tag> | null;
	}

	export interface ListTagsForResourceRequest {
		ResourceType: AddTagsToResourceRequestResourceType;
		ResourceId: string;
	}

	export interface ModifyDocumentPermissionResponse {
	}

	export interface ModifyDocumentPermissionRequest {
		Name: string;
		PermissionType: DescribeDocumentPermissionRequestPermissionType;
		AccountIdsToAdd?: Array<string> | null;
		AccountIdsToRemove?: Array<string> | null;

		/**
		 * The document version shared with other accounts. You can share <code>Latest</code>, <code>Default</code> or <code>All versions</code>.
		 * Max length: 8
		 * Pattern: ([$]LATEST|[$]DEFAULT|[$]ALL)
		 */
		SharedDocumentVersion?: string | null;
	}

	export interface DocumentPermissionLimit {
	}

	export interface PutComplianceItemsResult {
	}

	export interface PutComplianceItemsRequest {
		ResourceId: string;
		ResourceType: string;
		ComplianceType: string;

		/**
		 * A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.
		 * Required
		 */
		ExecutionSummary: ComplianceExecutionSummary;
		Items: Array<ComplianceItemEntry>;
		ItemContentHash?: string | null;
		UploadType?: PutComplianceItemsRequestUploadType | null;
	}


	/** Information about a compliance item. */
	export interface ComplianceItemEntry {
		Id?: string | null;
		Title?: string | null;
		Severity: PatchRuleComplianceLevel;
		Status: ComplianceItemStatus;
		Details?: ComplianceItemDetails | null;
	}

	export enum PutComplianceItemsRequestUploadType { COMPLETE = 0, PARTIAL = 1 }

	export interface InvalidItemContentException {
	}

	export interface TotalSizeLimitExceededException {
	}

	export interface ItemSizeLimitExceededException {
	}

	export interface ComplianceTypeCountLimitExceededException {
	}

	export interface PutInventoryResult {
		Message?: string | null;
	}

	export interface PutInventoryRequest {
		InstanceId: string;
		Items: Array<InventoryItem>;
	}


	/** Information collected from managed instances based on your inventory policy document */
	export interface InventoryItem {
		TypeName: string;
		SchemaVersion: string;
		CaptureTime: string;
		ContentHash?: string | null;
		Content?: Array<InventoryItemEntry> | null;
		Context?: InventoryItemContentContext | null;
	}

	export interface InventoryItemContentContext {
	}

	export interface ItemContentMismatchException {
	}

	export interface CustomSchemaCountLimitExceededException {
	}

	export interface UnsupportedInventorySchemaVersionException {
	}

	export interface UnsupportedInventoryItemContextException {
	}

	export interface InvalidInventoryItemContextException {
	}

	export interface SubTypeCountLimitExceededException {
	}

	export interface PutParameterResult {
		Version?: number | null;
		Tier?: PutParameterResultTier | null;
	}

	export enum PutParameterResultTier { Standard = 0, Advanced = 1, Intelligent_Tiering = 2 }

	export interface PutParameterRequest {
		Name: string;
		Description?: string | null;
		Value: string;
		Type?: ParameterMetadataType | null;
		KeyId?: string | null;
		Overwrite?: boolean | null;
		AllowedPattern?: string | null;
		Tags?: Array<Tag> | null;
		Tier?: PutParameterRequestTier | null;
		Policies?: string | null;
		DataType?: string | null;
	}

	export enum PutParameterRequestTier { Standard = 0, Advanced = 1, Intelligent_Tiering = 2 }

	export interface ParameterLimitExceeded {
	}

	export interface ParameterAlreadyExists {
	}

	export interface HierarchyLevelLimitExceededException {
	}

	export interface HierarchyTypeMismatchException {
	}

	export interface InvalidAllowedPatternException {
	}

	export interface ParameterMaxVersionLimitExceeded {
	}

	export interface ParameterPatternMismatchException {
	}

	export interface UnsupportedParameterType {
	}

	export interface PoliciesLimitExceededException {
	}

	export interface InvalidPolicyTypeException {
	}

	export interface InvalidPolicyAttributeException {
	}

	export interface IncompatiblePolicyException {
	}

	export interface RegisterDefaultPatchBaselineResult {
		BaselineId?: string | null;
	}

	export interface RegisterDefaultPatchBaselineRequest {
		BaselineId: string;
	}

	export interface RegisterPatchBaselineForPatchGroupResult {
		BaselineId?: string | null;
		PatchGroup?: string | null;
	}

	export interface RegisterPatchBaselineForPatchGroupRequest {
		BaselineId: string;
		PatchGroup: string;
	}

	export interface AlreadyExistsException {
	}

	export interface RegisterTargetWithMaintenanceWindowResult {
		WindowTargetId?: string | null;
	}

	export interface RegisterTargetWithMaintenanceWindowRequest {
		WindowId: string;
		ResourceType: DescribeMaintenanceWindowScheduleRequestResourceType;
		Targets: Array<Target>;
		OwnerInformation?: string | null;
		Name?: string | null;
		Description?: string | null;
		ClientToken?: string | null;
	}

	export interface RegisterTaskWithMaintenanceWindowResult {
		WindowTaskId?: string | null;
	}

	export interface RegisterTaskWithMaintenanceWindowRequest {
		WindowId: string;
		Targets: Array<Target>;
		TaskArn: string;
		ServiceRoleArn?: string | null;
		TaskType: MaintenanceWindowExecutionTaskInvocationIdentityTaskType;
		TaskParameters?: MaintenanceWindowTaskParameters | null;

		/** The parameters for task execution. */
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters | null;
		Priority?: number | null;
		MaxConcurrency: string;
		MaxErrors: string;

		/** <p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo | null;
		Name?: string | null;
		Description?: string | null;
		ClientToken?: string | null;
	}

	export interface FeatureNotAvailableException {
	}

	export interface RemoveTagsFromResourceResult {
	}

	export interface RemoveTagsFromResourceRequest {
		ResourceType: AddTagsToResourceRequestResourceType;
		ResourceId: string;
		TagKeys: Array<string>;
	}


	/** The result body of the ResetServiceSetting API action. */
	export interface ResetServiceSettingResult {

		/** <p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> */
		ServiceSetting?: ServiceSetting | null;
	}


	/** The request body of the ResetServiceSetting API action. */
	export interface ResetServiceSettingRequest {
		SettingId: string;
	}

	export interface ResumeSessionResponse {
		SessionId?: string | null;
		TokenValue?: string | null;
		StreamUrl?: string | null;
	}

	export interface ResumeSessionRequest {
		SessionId: string;
	}

	export interface SendAutomationSignalResult {
	}

	export interface SendAutomationSignalRequest {
		AutomationExecutionId: string;
		SignalType: SendAutomationSignalRequestSignalType;
		Payload?: AutomationParameterMap | null;
	}

	export enum SendAutomationSignalRequestSignalType { Approve = 0, Reject = 1, StartStep = 2, StopStep = 3, Resume = 4 }

	export interface AutomationStepNotFoundException {
	}

	export interface InvalidAutomationSignalException {
	}

	export interface SendCommandResult {

		/** Describes a command request. */
		Command?: Command | null;
	}

	export interface SendCommandRequest {
		InstanceIds?: Array<string> | null;
		Targets?: Array<Target> | null;
		DocumentName: string;
		DocumentVersion?: string | null;
		DocumentHash?: string | null;
		DocumentHashType?: DocumentDescriptionHashType | null;
		TimeoutSeconds?: number | null;
		Comment?: string | null;
		Parameters?: Parameters | null;
		OutputS3Region?: string | null;
		OutputS3BucketName?: string | null;
		OutputS3KeyPrefix?: string | null;
		MaxConcurrency?: string | null;
		MaxErrors?: string | null;
		ServiceRoleArn?: string | null;

		/** Configurations for sending notifications. */
		NotificationConfig?: NotificationConfig | null;

		/** Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig | null;
	}

	export interface InvalidOutputFolder {
	}

	export interface InvalidRole {
	}

	export interface InvalidNotificationConfig {
	}

	export interface StartAssociationsOnceResult {
	}

	export interface StartAssociationsOnceRequest {
		AssociationIds: Array<string>;
	}

	export interface InvalidAssociation {
	}

	export interface StartAutomationExecutionResult {
		AutomationExecutionId?: string | null;
	}

	export interface StartAutomationExecutionRequest {
		DocumentName: string;
		DocumentVersion?: string | null;
		Parameters?: AutomationParameterMap | null;
		ClientToken?: string | null;
		Mode?: AutomationExecutionMetadataMode | null;
		TargetParameterName?: string | null;
		Targets?: Array<Target> | null;
		TargetMaps?: Array<TargetMap> | null;
		MaxConcurrency?: string | null;
		MaxErrors?: string | null;
		TargetLocations?: Array<TargetLocation> | null;
		Tags?: Array<Tag> | null;
	}

	export interface AutomationDefinitionNotFoundException {
	}

	export interface InvalidAutomationExecutionParametersException {
	}

	export interface AutomationExecutionLimitExceededException {
	}

	export interface AutomationDefinitionVersionNotFoundException {
	}

	export interface StartSessionResponse {
		SessionId?: string | null;
		TokenValue?: string | null;
		StreamUrl?: string | null;
	}

	export interface StartSessionRequest {
		Target: string;
		DocumentName?: string | null;
		Parameters?: SessionManagerParameters | null;
	}

	export interface SessionManagerParameters {
	}

	export interface TargetNotConnected {
	}

	export interface StopAutomationExecutionResult {
	}

	export interface StopAutomationExecutionRequest {
		AutomationExecutionId: string;
		Type?: StopAutomationExecutionRequestType | null;
	}

	export enum StopAutomationExecutionRequestType { Complete = 0, Cancel = 1 }

	export interface InvalidAutomationStatusUpdateException {
	}

	export interface TerminateSessionResponse {
		SessionId?: string | null;
	}

	export interface TerminateSessionRequest {
		SessionId: string;
	}

	export interface UpdateAssociationResult {

		/** Describes the parameters for a document. */
		AssociationDescription?: AssociationDescription | null;
	}

	export interface UpdateAssociationRequest {
		AssociationId: string;
		Parameters?: Parameters | null;
		DocumentVersion?: string | null;
		ScheduleExpression?: string | null;

		/** An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation | null;
		Name?: string | null;
		Targets?: Array<Target> | null;
		AssociationName?: string | null;
		AssociationVersion?: string | null;
		AutomationTargetParameterName?: string | null;
		MaxErrors?: string | null;
		MaxConcurrency?: string | null;
		ComplianceSeverity?: AssociationDescriptionComplianceSeverity | null;
		SyncCompliance?: AssociationDescriptionSyncCompliance | null;
		ApplyOnlyAtCronInterval?: boolean | null;
	}

	export interface InvalidUpdate {
	}

	export interface AssociationVersionLimitExceeded {
	}

	export interface UpdateAssociationStatusResult {

		/** Describes the parameters for a document. */
		AssociationDescription?: AssociationDescription | null;
	}

	export interface UpdateAssociationStatusRequest {
		Name: string;
		InstanceId: string;

		/**
		 * Describes an association status.
		 * Required
		 */
		AssociationStatus: AssociationStatus;
	}

	export interface StatusUnchanged {
	}

	export interface UpdateDocumentResult {

		/** Describes a Systems Manager document. */
		DocumentDescription?: DocumentDescription | null;
	}

	export interface UpdateDocumentRequest {
		Content: string;
		Attachments?: Array<AttachmentsSource> | null;
		Name: string;
		VersionName?: string | null;
		DocumentVersion?: string | null;
		DocumentFormat?: DocumentDescriptionDocumentFormat | null;
		TargetType?: string | null;
	}

	export interface DocumentVersionLimitExceeded {
	}

	export interface DuplicateDocumentContent {
	}

	export interface DuplicateDocumentVersionName {
	}

	export interface UpdateDocumentDefaultVersionResult {

		/** A default version of a document. */
		Description?: DocumentDefaultVersionDescription | null;
	}


	/** A default version of a document. */
	export interface DocumentDefaultVersionDescription {
		Name?: string | null;
		DefaultVersion?: string | null;
		DefaultVersionName?: string | null;
	}

	export interface UpdateDocumentDefaultVersionRequest {
		Name: string;
		DocumentVersion: string;
	}

	export interface UpdateMaintenanceWindowResult {
		WindowId?: string | null;
		Name?: string | null;
		Description?: string | null;
		StartDate?: string | null;
		EndDate?: string | null;
		Schedule?: string | null;
		ScheduleTimezone?: string | null;
		Duration?: number | null;
		Cutoff?: number | null;
		AllowUnassociatedTargets?: boolean | null;
		Enabled?: boolean | null;
	}

	export interface UpdateMaintenanceWindowRequest {
		WindowId: string;
		Name?: string | null;
		Description?: string | null;
		StartDate?: string | null;
		EndDate?: string | null;
		Schedule?: string | null;
		ScheduleTimezone?: string | null;
		Duration?: number | null;
		Cutoff?: number | null;
		AllowUnassociatedTargets?: boolean | null;
		Enabled?: boolean | null;
		Replace?: boolean | null;
	}

	export interface UpdateMaintenanceWindowTargetResult {
		WindowId?: string | null;
		WindowTargetId?: string | null;
		Targets?: Array<Target> | null;
		OwnerInformation?: string | null;
		Name?: string | null;
		Description?: string | null;
	}

	export interface UpdateMaintenanceWindowTargetRequest {
		WindowId: string;
		WindowTargetId: string;
		Targets?: Array<Target> | null;
		OwnerInformation?: string | null;
		Name?: string | null;
		Description?: string | null;
		Replace?: boolean | null;
	}

	export interface UpdateMaintenanceWindowTaskResult {
		WindowId?: string | null;
		WindowTaskId?: string | null;
		Targets?: Array<Target> | null;
		TaskArn?: string | null;
		ServiceRoleArn?: string | null;
		TaskParameters?: MaintenanceWindowTaskParameters | null;

		/** The parameters for task execution. */
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters | null;
		Priority?: number | null;
		MaxConcurrency?: string | null;
		MaxErrors?: string | null;

		/** <p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo | null;
		Name?: string | null;
		Description?: string | null;
	}

	export interface UpdateMaintenanceWindowTaskRequest {
		WindowId: string;
		WindowTaskId: string;
		Targets?: Array<Target> | null;
		TaskArn?: string | null;
		ServiceRoleArn?: string | null;
		TaskParameters?: MaintenanceWindowTaskParameters | null;

		/** The parameters for task execution. */
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters | null;
		Priority?: number | null;
		MaxConcurrency?: string | null;
		MaxErrors?: string | null;

		/** <p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo | null;
		Name?: string | null;
		Description?: string | null;
		Replace?: boolean | null;
	}

	export interface UpdateManagedInstanceRoleResult {
	}

	export interface UpdateManagedInstanceRoleRequest {
		InstanceId: string;
		IamRole: string;
	}

	export interface UpdateOpsItemResponse {
	}

	export interface UpdateOpsItemRequest {
		Description?: string | null;
		OperationalData?: OpsItemOperationalData | null;
		OperationalDataToDelete?: Array<string> | null;
		Notifications?: Array<OpsItemNotification> | null;
		Priority?: number | null;
		RelatedOpsItems?: Array<RelatedOpsItem> | null;
		Status?: OpsItemSummaryStatus | null;
		OpsItemId: string;
		Title?: string | null;
		Category?: string | null;
		Severity?: string | null;
	}

	export interface UpdatePatchBaselineResult {
		BaselineId?: string | null;
		Name?: string | null;
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;

		/** A set of patch filters, typically used for approval rules. */
		GlobalFilters?: PatchFilterGroup | null;

		/** A set of rules defining the approval rules for a patch baseline. */
		ApprovalRules?: PatchRuleGroup | null;
		ApprovedPatches?: Array<string> | null;
		ApprovedPatchesComplianceLevel?: PatchRuleComplianceLevel | null;
		ApprovedPatchesEnableNonSecurity?: boolean | null;
		RejectedPatches?: Array<string> | null;
		RejectedPatchesAction?: CreatePatchBaselineRequestRejectedPatchesAction | null;
		CreatedDate?: Date | null;
		ModifiedDate?: Date | null;
		Description?: string | null;
		Sources?: Array<PatchSource> | null;
	}

	export interface UpdatePatchBaselineRequest {
		BaselineId: string;
		Name?: string | null;

		/** A set of patch filters, typically used for approval rules. */
		GlobalFilters?: PatchFilterGroup | null;

		/** A set of rules defining the approval rules for a patch baseline. */
		ApprovalRules?: PatchRuleGroup | null;
		ApprovedPatches?: Array<string> | null;
		ApprovedPatchesComplianceLevel?: PatchRuleComplianceLevel | null;
		ApprovedPatchesEnableNonSecurity?: boolean | null;
		RejectedPatches?: Array<string> | null;
		RejectedPatchesAction?: CreatePatchBaselineRequestRejectedPatchesAction | null;
		Description?: string | null;
		Sources?: Array<PatchSource> | null;
		Replace?: boolean | null;
	}

	export interface UpdateResourceDataSyncResult {
	}

	export interface UpdateResourceDataSyncRequest {
		SyncName: string;
		SyncType: string;

		/**
		 * Information about the source of the data included in the resource data sync.
		 * Required
		 */
		SyncSource: ResourceDataSyncSource;
	}

	export interface ResourceDataSyncConflictException {
	}


	/** The result body of the UpdateServiceSetting API action. */
	export interface UpdateServiceSettingResult {
	}


	/** The request body of the UpdateServiceSetting API action. */
	export interface UpdateServiceSettingRequest {
		SettingId: string;
		SettingValue: string;
	}

	export enum ResourceTypeForTagging { Document = 0, ManagedInstance = 1, MaintenanceWindow = 2, Parameter = 3, PatchBaseline = 4, OpsItem = 5 }

	export enum AssociationComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, UNSPECIFIED = 4 }

	export enum AssociationSyncCompliance { AUTO = 0, MANUAL = 1 }

	export enum AssociationFilterOperatorType { EQUAL = 0, LESS_THAN = 1, GREATER_THAN = 2 }

	export enum AttachmentHashType { Sha256 = 0 }

	export enum AutomationExecutionStatus { Pending = 0, InProgress = 1, Waiting = 2, Success = 3, TimedOut = 4, Cancelling = 5, Cancelled = 6, Failed = 7 }

	export enum ExecutionMode { Auto = 0, Interactive = 1 }

	export enum AutomationType { CrossAccount = 0, Local = 1 }

	export enum CalendarState { OPEN = 0, CLOSED = 1 }

	export enum CommandInvocationStatus { Pending = 0, InProgress = 1, Delayed = 2, Success = 3, Cancelled = 4, TimedOut = 5, Failed = 6, Cancelling = 7 }

	export enum ComplianceStatus { COMPLIANT = 0, NON_COMPLIANT = 1 }

	export enum ComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }

	export enum ComplianceQueryOperatorType { EQUAL = 0, NOT_EQUAL = 1, BEGIN_WITH = 2, LESS_THAN = 3, GREATER_THAN = 4 }

	export enum ComplianceUploadType { COMPLETE = 0, PARTIAL = 1 }

	export enum ConnectionStatus { Connected = 0, NotConnected = 1 }

	export enum DocumentType { Command = 0, Policy = 1, Automation = 2, Session = 3, Package = 4, ApplicationConfiguration = 5, ApplicationConfigurationSchema = 6, DeploymentStrategy = 7, ChangeCalendar = 8 }

	export enum DocumentFormat { YAML = 0, JSON = 1, TEXT = 2 }

	export enum OperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, UBUNTU = 3, REDHAT_ENTERPRISE_LINUX = 4, SUSE = 5, CENTOS = 6, ORACLE_LINUX = 7, DEBIAN = 8 }

	export enum PatchComplianceLevel { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }

	export enum PatchAction { ALLOW_AS_DEPENDENCY = 0, BLOCK = 1 }

	export enum InventorySchemaDeleteOption { DisableSchema = 0, DeleteSchema = 1 }

	export enum DescribeActivationsFilterKeys { ActivationIds = 0, DefaultInstanceName = 1, IamRole = 2 }

	export enum DocumentPermissionType { Share = 0 }

	export enum MaintenanceWindowResourceType { INSTANCE = 0, RESOURCE_GROUP = 1 }

	export enum PatchProperty { PRODUCT = 0, PRODUCT_FAMILY = 1, CLASSIFICATION = 2, MSRC_SEVERITY = 3, PRIORITY = 4, SEVERITY = 5 }

	export enum PatchSet { OS = 0, APPLICATION = 1 }

	export enum SessionState { Active = 0, History = 1 }

	export enum DocumentHashType { Sha256 = 0, Sha1 = 1 }


	/** The status of a document. */
	export enum DocumentStatus { Creating = 0, Active = 1, Updating = 2, Deleting = 3, Failed = 4 }

	export enum Fault { Client = 0, Server = 1, Unknown = 2 }

	export enum MaintenanceWindowExecutionStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3, TIMED_OUT = 4, CANCELLING = 5, CANCELLED = 6, SKIPPED_OVERLAPPING = 7 }

	export enum MaintenanceWindowTaskType { RUN_COMMAND = 0, AUTOMATION = 1, STEP_FUNCTIONS = 2, LAMBDA = 3 }

	export enum PingStatus { Online = 0, ConnectionLost = 1, Inactive = 2 }

	export enum ResourceType { ManagedInstance = 0, Document = 1, EC2Instance = 2 }

	export enum PatchOperationType { Scan = 0, Install = 1 }

	export enum RebootOption { RebootIfNeeded = 0, NoReboot = 1 }

	export enum InstancePatchStateOperatorType { Equal = 0, NotEqual = 1, LessThan = 2, GreaterThan = 3 }

	export enum InventoryAttributeDataType { _string = 0, number = 1 }

	export enum InventoryDeletionStatus { InProgress = 0, Complete = 1 }

	export enum InventoryQueryOperatorType { Equal = 0, NotEqual = 1, BeginWith = 2, LessThan = 3, GreaterThan = 4, Exists = 5 }


	/** The inventory result item. */
	export interface InventoryResultItem {
		TypeName: string;
		SchemaVersion: string;
		CaptureTime?: string | null;
		ContentHash?: string | null;
		Content: Array<InventoryItemEntry>;
	}

	export enum LastResourceDataSyncStatus { Successful = 0, Failed = 1, InProgress = 2 }


	/** Defines the values for a task parameter. */
	export interface MaintenanceWindowTaskParameterValueExpression {
		Values?: Array<string> | null;
	}

	export enum NotificationType { Command = 0, Invocation = 1 }

	export interface OpsEntityItemEntry {
	}


	/** The OpsItem summaries result item. */
	export interface OpsEntityItem {
		CaptureTime?: string | null;
		Content?: Array<OpsEntityItemEntry> | null;
	}

	export enum OpsFilterOperatorType { Equal = 0, NotEqual = 1, BeginWith = 2, LessThan = 3, GreaterThan = 4, Exists = 5 }

	export enum OpsItemStatus { Open = 0, InProgress = 1, Resolved = 2 }

	export enum OpsItemDataType { SearchableString = 0, String = 1 }


	/** An object that defines the value of the key and its type in the OperationalData map. */
	export interface OpsItemDataValue {
		Value?: string | null;
		Type?: OpsItemDataType | null;
	}

	export enum ParameterType { String = 0, StringList = 1, SecureString = 2 }

	export enum ParameterTier { Standard = 0, Advanced = 1, Intelligent_Tiering = 2 }

	export enum PatchDeploymentStatus { APPROVED = 0, PENDING_APPROVAL = 1, EXPLICIT_APPROVED = 2, EXPLICIT_REJECTED = 3 }

	export enum ResourceDataSyncS3Format { JsonSerDe = 0 }

	export enum SignalType { Approve = 0, Reject = 1, StartStep = 2, StopStep = 3, Resume = 4 }

	export enum StopType { Complete = 0, Cancel = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds or overwrites one or more tags for the specified resource. Tags are metadata that you can assign to your documents, managed instances, maintenance windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed instances that helps you track each instance's owner and stack level. For example: Key=Owner and Value=DbAdmin, SysAdmin, or Dev. Or Key=Stack and Value=Production, Pre-Production, or Test.</p> <p>Each resource can have a maximum of 50 tags. </p> <p>We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to and are interpreted strictly as a string of characters. </p> <p>For more information about using tags with EC2 instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2 resources</a> in the <i>Amazon EC2 User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonSSM.AddTagsToResource
		 * @return {AddTagsToResourceResult} Success
		 */
		AddTagsToResource(requestBody: AddTagsToResourceRequest): Observable<AddTagsToResourceResult> {
			return this.http.post<AddTagsToResourceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.AddTagsToResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.
		 * Post #X-Amz-Target=AmazonSSM.CancelCommand
		 * @return {CancelCommandResult} Success
		 */
		CancelCommand(requestBody: CancelCommandRequest): Observable<CancelCommandResult> {
			return this.http.post<CancelCommandResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CancelCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a maintenance window execution that is already in progress and cancels any tasks in the window that have not already starting running. (Tasks already in progress will continue to completion.)
		 * Post #X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution
		 * @return {CancelMaintenanceWindowExecutionResult} Success
		 */
		CancelMaintenanceWindowExecution(requestBody: CancelMaintenanceWindowExecutionRequest): Observable<CancelMaintenanceWindowExecutionResult> {
			return this.http.post<CancelMaintenanceWindowExecutionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates an activation code and activation ID you can use to register your on-premises server or virtual machine (VM) with Systems Manager. Registering these machines with Systems Manager makes it possible to manage them using Systems Manager capabilities. You use the activation code and ID when installing SSM Agent on machines in your hybrid environment. For more information about requirements for managing on-premises instances and VMs using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up AWS Systems Manager for hybrid environments</a> in the <i>AWS Systems Manager User Guide</i>. </p> <note> <p>On-premises servers or VMs that are registered with Systems Manager and EC2 instances that you manage with Systems Manager are all called <i>managed instances</i>.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.CreateActivation
		 * @return {CreateActivationResult} Success
		 */
		CreateActivation(requestBody: CreateActivationRequest): Observable<CreateActivationResult> {
			return this.http.post<CreateActivationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateActivation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates the specified Systems Manager document with the specified instances or targets.</p> <p>When you associate a document with one or more instances, SSM Agent running on the instance processes the document and configures the instance as specified. If you associate a document with an instance that already has an associated document, the system returns the <code>AssociationAlreadyExists</code> exception.</p>
		 * Post #X-Amz-Target=AmazonSSM.CreateAssociation
		 * @return {CreateAssociationResult} Success
		 */
		CreateAssociation(requestBody: CreateAssociationRequest): Observable<CreateAssociationResult> {
			return this.http.post<CreateAssociationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates the specified Systems Manager document with the specified instances or targets.</p> <p>When you associate a document with one or more instances using instance IDs or tags, SSM Agent running on the instance processes the document and configures the instance as specified.</p> <p>If you associate a document with an instance that already has an associated document, the system returns the AssociationAlreadyExists exception.</p>
		 * Post #X-Amz-Target=AmazonSSM.CreateAssociationBatch
		 * @return {CreateAssociationBatchResult} Success
		 */
		CreateAssociationBatch(requestBody: CreateAssociationBatchRequest): Observable<CreateAssociationBatchResult> {
			return this.http.post<CreateAssociationBatchResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateAssociationBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Systems Manager (SSM) document. An SSM document defines the actions that Systems Manager performs on your managed instances. For more information about SSM documents, including information about supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">AWS Systems Manager Documents</a> in the <i>AWS Systems Manager User Guide</i>.
		 * Post #X-Amz-Target=AmazonSSM.CreateDocument
		 * @return {CreateDocumentResult} Success
		 */
		CreateDocument(requestBody: CreateDocumentRequest): Observable<CreateDocumentResult> {
			return this.http.post<CreateDocumentResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new maintenance window.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.CreateMaintenanceWindow
		 * @return {CreateMaintenanceWindowResult} Success
		 */
		CreateMaintenanceWindow(requestBody: CreateMaintenanceWindowRequest): Observable<CreateMaintenanceWindowResult> {
			return this.http.post<CreateMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new OpsItem. You must have permission in AWS Identity and Access Management (IAM) to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
		 * Post #X-Amz-Target=AmazonSSM.CreateOpsItem
		 * @return {CreateOpsItemResponse} Success
		 */
		CreateOpsItem(requestBody: CreateOpsItemRequest): Observable<CreateOpsItemResponse> {
			return this.http.post<CreateOpsItemResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateOpsItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a patch baseline.</p> <note> <p>For information about valid key and value pairs in <code>PatchFilters</code> for each supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.CreatePatchBaseline
		 * @return {CreatePatchBaselineResult} Success
		 */
		CreatePatchBaseline(requestBody: CreatePatchBaselineRequest): Observable<CreatePatchBaselineResult> {
			return this.http.post<CreatePatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreatePatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>A resource data sync helps you view data from multiple sources in a single location. Systems Manager offers two types of resource data sync: <code>SyncToDestination</code> and <code>SyncFromSource</code>.</p> <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to synchronize Inventory data from multiple AWS Regions to a single S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring Resource Data Sync for Inventory</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple AWS Regions to a single S3 bucket. This type can synchronize OpsItems and OpsData from multiple AWS accounts and Regions or <code>EntireOrganization</code> by using AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data. To check the status of a sync, use the <a>ListResourceDataSync</a>.</p> <note> <p>By default, data is not encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy. </p> </note>
		 * Post #X-Amz-Target=AmazonSSM.CreateResourceDataSync
		 * @return {CreateResourceDataSyncResult} Success
		 */
		CreateResourceDataSync(requestBody: CreateResourceDataSyncRequest): Observable<CreateResourceDataSyncResult> {
			return this.http.post<CreateResourceDataSyncResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateResourceDataSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an activation. You are not required to delete an activation. If you delete an activation, you can no longer use it to register additional managed instances. Deleting an activation does not de-register managed instances. You must manually de-register managed instances.
		 * Post #X-Amz-Target=AmazonSSM.DeleteActivation
		 * @return {DeleteActivationResult} Success
		 */
		DeleteActivation(requestBody: DeleteActivationRequest): Observable<DeleteActivationResult> {
			return this.http.post<DeleteActivationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteActivation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates the specified Systems Manager document from the specified instance.</p> <p>When you disassociate a document from an instance, it does not change the configuration of the instance. To change the configuration state of an instance after you disassociate a document, you must create a new document with the desired configuration and associate it with the instance.</p>
		 * Post #X-Amz-Target=AmazonSSM.DeleteAssociation
		 * @return {DeleteAssociationResult} Success
		 */
		DeleteAssociation(requestBody: DeleteAssociationRequest): Observable<DeleteAssociationResult> {
			return this.http.post<DeleteAssociationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the Systems Manager document and all instance associations to the document.</p> <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all instances that are associated with the document.</p>
		 * Post #X-Amz-Target=AmazonSSM.DeleteDocument
		 * @return {DeleteDocumentResult} Success
		 */
		DeleteDocument(requestBody: DeleteDocumentRequest): Observable<DeleteDocumentResult> {
			return this.http.post<DeleteDocumentResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a custom inventory type, or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.
		 * Post #X-Amz-Target=AmazonSSM.DeleteInventory
		 * @return {DeleteInventoryResult} Success
		 */
		DeleteInventory(requestBody: DeleteInventoryRequest): Observable<DeleteInventoryResult> {
			return this.http.post<DeleteInventoryResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteInventory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow
		 * @return {DeleteMaintenanceWindowResult} Success
		 */
		DeleteMaintenanceWindow(requestBody: DeleteMaintenanceWindowRequest): Observable<DeleteMaintenanceWindowResult> {
			return this.http.post<DeleteMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a parameter from the system.
		 * Post #X-Amz-Target=AmazonSSM.DeleteParameter
		 * @return {DeleteParameterResult} Success
		 */
		DeleteParameter(requestBody: DeleteParameterRequest): Observable<DeleteParameterResult> {
			return this.http.post<DeleteParameterResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteParameter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a list of parameters.
		 * Post #X-Amz-Target=AmazonSSM.DeleteParameters
		 * @return {DeleteParametersResult} Success
		 */
		DeleteParameters(requestBody: DeleteParametersRequest): Observable<DeleteParametersResult> {
			return this.http.post<DeleteParametersResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a patch baseline.
		 * Post #X-Amz-Target=AmazonSSM.DeletePatchBaseline
		 * @return {DeletePatchBaselineResult} Success
		 */
		DeletePatchBaseline(requestBody: DeletePatchBaselineRequest): Observable<DeletePatchBaselineResult> {
			return this.http.post<DeletePatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeletePatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Resource Data Sync configuration. After the configuration is deleted, changes to data on managed instances are no longer synced to or from the target. Deleting a sync configuration does not delete data.
		 * Post #X-Amz-Target=AmazonSSM.DeleteResourceDataSync
		 * @return {DeleteResourceDataSyncResult} Success
		 */
		DeleteResourceDataSync(requestBody: DeleteResourceDataSyncRequest): Observable<DeleteResourceDataSyncResult> {
			return this.http.post<DeleteResourceDataSyncResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteResourceDataSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the server or virtual machine from the list of registered servers. You can reregister the instance again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.
		 * Post #X-Amz-Target=AmazonSSM.DeregisterManagedInstance
		 * @return {DeregisterManagedInstanceResult} Success
		 */
		DeregisterManagedInstance(requestBody: DeregisterManagedInstanceRequest): Observable<DeregisterManagedInstanceResult> {
			return this.http.post<DeregisterManagedInstanceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeregisterManagedInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a patch group from a patch baseline.
		 * Post #X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup
		 * @return {DeregisterPatchBaselineForPatchGroupResult} Success
		 */
		DeregisterPatchBaselineForPatchGroup(requestBody: DeregisterPatchBaselineForPatchGroupRequest): Observable<DeregisterPatchBaselineForPatchGroupResult> {
			return this.http.post<DeregisterPatchBaselineForPatchGroupResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a target from a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow
		 * @return {DeregisterTargetFromMaintenanceWindowResult} Success
		 */
		DeregisterTargetFromMaintenanceWindow(requestBody: DeregisterTargetFromMaintenanceWindowRequest): Observable<DeregisterTargetFromMaintenanceWindowResult> {
			return this.http.post<DeregisterTargetFromMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a task from a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow
		 * @return {DeregisterTaskFromMaintenanceWindowResult} Success
		 */
		DeregisterTaskFromMaintenanceWindow(requestBody: DeregisterTaskFromMaintenanceWindowRequest): Observable<DeregisterTaskFromMaintenanceWindowResult> {
			return this.http.post<DeregisterTaskFromMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes details about the activation, such as the date and time the activation was created, its expiration date, the IAM role assigned to the instances in the activation, and the number of instances registered by using this activation.
		 * Post #X-Amz-Target=AmazonSSM.DescribeActivations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeActivationsResult} Success
		 */
		DescribeActivations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeActivationsRequest): Observable<DescribeActivationsResult> {
			return this.http.post<DescribeActivationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeActivations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the association for the specified target or instance. If you created the association by using the <code>Targets</code> parameter, then you must retrieve the association by using the association ID. If you created the association by specifying an instance ID and a Systems Manager document, then you retrieve the association by specifying the document name and the instance ID.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAssociation
		 * @return {DescribeAssociationResult} Success
		 */
		DescribeAssociation(requestBody: DescribeAssociationRequest): Observable<DescribeAssociationResult> {
			return this.http.post<DescribeAssociationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this API action to view information about a specific execution of a specific association.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets
		 * @return {DescribeAssociationExecutionTargetsResult} Success
		 */
		DescribeAssociationExecutionTargets(requestBody: DescribeAssociationExecutionTargetsRequest): Observable<DescribeAssociationExecutionTargetsResult> {
			return this.http.post<DescribeAssociationExecutionTargetsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this API action to view all executions for a specific association ID.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAssociationExecutions
		 * @return {DescribeAssociationExecutionsResult} Success
		 */
		DescribeAssociationExecutions(requestBody: DescribeAssociationExecutionsRequest): Observable<DescribeAssociationExecutionsResult> {
			return this.http.post<DescribeAssociationExecutionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details about all active and terminated Automation executions.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAutomationExecutions
		 * @return {DescribeAutomationExecutionsResult} Success
		 */
		DescribeAutomationExecutions(requestBody: DescribeAutomationExecutionsRequest): Observable<DescribeAutomationExecutionsResult> {
			return this.http.post<DescribeAutomationExecutionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Information about all active and terminated step executions in an Automation workflow.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions
		 * @return {DescribeAutomationStepExecutionsResult} Success
		 */
		DescribeAutomationStepExecutions(requestBody: DescribeAutomationStepExecutionsRequest): Observable<DescribeAutomationStepExecutionsResult> {
			return this.http.post<DescribeAutomationStepExecutionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all patches eligible to be included in a patch baseline.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAvailablePatches
		 * @return {DescribeAvailablePatchesResult} Success
		 */
		DescribeAvailablePatches(requestBody: DescribeAvailablePatchesRequest): Observable<DescribeAvailablePatchesResult> {
			return this.http.post<DescribeAvailablePatchesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAvailablePatches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified Systems Manager document.
		 * Post #X-Amz-Target=AmazonSSM.DescribeDocument
		 * @return {DescribeDocumentResult} Success
		 */
		DescribeDocument(requestBody: DescribeDocumentRequest): Observable<DescribeDocumentResult> {
			return this.http.post<DescribeDocumentResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the permissions for a Systems Manager document. If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's AWS account ID) or publicly (<i>All</i>).
		 * Post #X-Amz-Target=AmazonSSM.DescribeDocumentPermission
		 * @return {DescribeDocumentPermissionResponse} Success
		 */
		DescribeDocumentPermission(requestBody: DescribeDocumentPermissionRequest): Observable<DescribeDocumentPermissionResponse> {
			return this.http.post<DescribeDocumentPermissionResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeDocumentPermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * All associations for the instance(s).
		 * Post #X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations
		 * @return {DescribeEffectiveInstanceAssociationsResult} Success
		 */
		DescribeEffectiveInstanceAssociations(requestBody: DescribeEffectiveInstanceAssociationsRequest): Observable<DescribeEffectiveInstanceAssociationsResult> {
			return this.http.post<DescribeEffectiveInstanceAssociationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Note that this API applies only to Windows patch baselines.
		 * Post #X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline
		 * @return {DescribeEffectivePatchesForPatchBaselineResult} Success
		 */
		DescribeEffectivePatchesForPatchBaseline(requestBody: DescribeEffectivePatchesForPatchBaselineRequest): Observable<DescribeEffectivePatchesForPatchBaselineResult> {
			return this.http.post<DescribeEffectivePatchesForPatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The status of the associations for the instance(s).
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus
		 * @return {DescribeInstanceAssociationsStatusResult} Success
		 */
		DescribeInstanceAssociationsStatus(requestBody: DescribeInstanceAssociationsStatusRequest): Observable<DescribeInstanceAssociationsStatusResult> {
			return this.http.post<DescribeInstanceAssociationsStatusResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes one or more of your instances, including information about the operating system platform, the version of SSM Agent installed on the instance, instance status, and so on.</p> <p>If you specify one or more instance IDs, it returns information for those instances. If you do not specify instance IDs, it returns information for all your instances. If you specify an instance ID that is not valid or an instance that you do not own, you receive an error.</p> <note> <p>The IamRole field for this API action is the Amazon Identity and Access Management (IAM) role assigned to on-premises instances. This call does not return the IAM role for EC2 instances.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstanceInformation
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeInstanceInformationResult} Success
		 */
		DescribeInstanceInformation(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeInstanceInformationRequest): Observable<DescribeInstanceInformationResult> {
			return this.http.post<DescribeInstanceInformationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstanceInformation?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the high-level patch state of one or more instances.
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstancePatchStates
		 * @return {DescribeInstancePatchStatesResult} Success
		 */
		DescribeInstancePatchStates(requestBody: DescribeInstancePatchStatesRequest): Observable<DescribeInstancePatchStatesResult> {
			return this.http.post<DescribeInstancePatchStatesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the high-level patch state for the instances in the specified patch group.
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup
		 * @return {DescribeInstancePatchStatesForPatchGroupResult} Success
		 */
		DescribeInstancePatchStatesForPatchGroup(requestBody: DescribeInstancePatchStatesForPatchGroupRequest): Observable<DescribeInstancePatchStatesForPatchGroupResult> {
			return this.http.post<DescribeInstancePatchStatesForPatchGroupResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the patches on the specified instance and their state relative to the patch baseline being used for the instance.
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstancePatches
		 * @return {DescribeInstancePatchesResult} Success
		 */
		DescribeInstancePatches(requestBody: DescribeInstancePatchesRequest): Observable<DescribeInstancePatchesResult> {
			return this.http.post<DescribeInstancePatchesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstancePatches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a specific delete inventory operation.
		 * Post #X-Amz-Target=AmazonSSM.DescribeInventoryDeletions
		 * @return {DescribeInventoryDeletionsResult} Success
		 */
		DescribeInventoryDeletions(requestBody: DescribeInventoryDeletionsRequest): Observable<DescribeInventoryDeletionsResult> {
			return this.http.post<DescribeInventoryDeletionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations
		 * @return {DescribeMaintenanceWindowExecutionTaskInvocationsResult} Success
		 */
		DescribeMaintenanceWindowExecutionTaskInvocations(requestBody: DescribeMaintenanceWindowExecutionTaskInvocationsRequest): Observable<DescribeMaintenanceWindowExecutionTaskInvocationsResult> {
			return this.http.post<DescribeMaintenanceWindowExecutionTaskInvocationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For a given maintenance window execution, lists the tasks that were run.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks
		 * @return {DescribeMaintenanceWindowExecutionTasksResult} Success
		 */
		DescribeMaintenanceWindowExecutionTasks(requestBody: DescribeMaintenanceWindowExecutionTasksRequest): Observable<DescribeMaintenanceWindowExecutionTasksResult> {
			return this.http.post<DescribeMaintenanceWindowExecutionTasksResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions
		 * @return {DescribeMaintenanceWindowExecutionsResult} Success
		 */
		DescribeMaintenanceWindowExecutions(requestBody: DescribeMaintenanceWindowExecutionsRequest): Observable<DescribeMaintenanceWindowExecutionsResult> {
			return this.http.post<DescribeMaintenanceWindowExecutionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about upcoming executions of a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule
		 * @return {DescribeMaintenanceWindowScheduleResult} Success
		 */
		DescribeMaintenanceWindowSchedule(requestBody: DescribeMaintenanceWindowScheduleRequest): Observable<DescribeMaintenanceWindowScheduleResult> {
			return this.http.post<DescribeMaintenanceWindowScheduleResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the targets registered with the maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets
		 * @return {DescribeMaintenanceWindowTargetsResult} Success
		 */
		DescribeMaintenanceWindowTargets(requestBody: DescribeMaintenanceWindowTargetsRequest): Observable<DescribeMaintenanceWindowTargetsResult> {
			return this.http.post<DescribeMaintenanceWindowTargetsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tasks in a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks
		 * @return {DescribeMaintenanceWindowTasksResult} Success
		 */
		DescribeMaintenanceWindowTasks(requestBody: DescribeMaintenanceWindowTasksRequest): Observable<DescribeMaintenanceWindowTasksResult> {
			return this.http.post<DescribeMaintenanceWindowTasksResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the maintenance windows in an AWS account.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows
		 * @return {DescribeMaintenanceWindowsResult} Success
		 */
		DescribeMaintenanceWindows(requestBody: DescribeMaintenanceWindowsRequest): Observable<DescribeMaintenanceWindowsResult> {
			return this.http.post<DescribeMaintenanceWindowsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the maintenance window targets or tasks that an instance is associated with.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget
		 * @return {DescribeMaintenanceWindowsForTargetResult} Success
		 */
		DescribeMaintenanceWindowsForTarget(requestBody: DescribeMaintenanceWindowsForTargetRequest): Observable<DescribeMaintenanceWindowsForTargetResult> {
			return this.http.post<DescribeMaintenanceWindowsForTargetResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Query a set of OpsItems. You must have permission in AWS Identity and Access Management (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
		 * Post #X-Amz-Target=AmazonSSM.DescribeOpsItems
		 * @return {DescribeOpsItemsResponse} Success
		 */
		DescribeOpsItems(requestBody: DescribeOpsItemsRequest): Observable<DescribeOpsItemsResponse> {
			return this.http.post<DescribeOpsItemsResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeOpsItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get information about a parameter.</p> <note> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.DescribeParameters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeParametersResult} Success
		 */
		DescribeParameters(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeParametersRequest): Observable<DescribeParametersResult> {
			return this.http.post<DescribeParametersResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeParameters?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the patch baselines in your AWS account.
		 * Post #X-Amz-Target=AmazonSSM.DescribePatchBaselines
		 * @return {DescribePatchBaselinesResult} Success
		 */
		DescribePatchBaselines(requestBody: DescribePatchBaselinesRequest): Observable<DescribePatchBaselinesResult> {
			return this.http.post<DescribePatchBaselinesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribePatchBaselines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns high-level aggregated patch compliance state for a patch group.
		 * Post #X-Amz-Target=AmazonSSM.DescribePatchGroupState
		 * @return {DescribePatchGroupStateResult} Success
		 */
		DescribePatchGroupState(requestBody: DescribePatchGroupStateRequest): Observable<DescribePatchGroupStateResult> {
			return this.http.post<DescribePatchGroupStateResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribePatchGroupState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all patch groups that have been registered with patch baselines.
		 * Post #X-Amz-Target=AmazonSSM.DescribePatchGroups
		 * @return {DescribePatchGroupsResult} Success
		 */
		DescribePatchGroups(requestBody: DescribePatchGroupsRequest): Observable<DescribePatchGroupsResult> {
			return this.http.post<DescribePatchGroupsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribePatchGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for actions such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p> <p>The following section lists the properties that can be used in filters for each major operating system type:</p> <dl> <dt>WINDOWS</dt> <dd> <p>Valid properties: PRODUCT, PRODUCT_FAMILY, CLASSIFICATION, MSRC_SEVERITY</p> </dd> <dt>AMAZON_LINUX</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>AMAZON_LINUX_2</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>UBUNTU </dt> <dd> <p>Valid properties: PRODUCT, PRIORITY</p> </dd> <dt>REDHAT_ENTERPRISE_LINUX</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>SUSE</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>CENTOS</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> </dl>
		 * Post #X-Amz-Target=AmazonSSM.DescribePatchProperties
		 * @return {DescribePatchPropertiesResult} Success
		 */
		DescribePatchProperties(requestBody: DescribePatchPropertiesRequest): Observable<DescribePatchPropertiesResult> {
			return this.http.post<DescribePatchPropertiesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribePatchProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.
		 * Post #X-Amz-Target=AmazonSSM.DescribeSessions
		 * @return {DescribeSessionsResponse} Success
		 */
		DescribeSessions(requestBody: DescribeSessionsRequest): Observable<DescribeSessionsResponse> {
			return this.http.post<DescribeSessionsResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeSessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detailed information about a particular Automation execution.
		 * Post #X-Amz-Target=AmazonSSM.GetAutomationExecution
		 * @return {GetAutomationExecutionResult} Success
		 */
		GetAutomationExecution(requestBody: GetAutomationExecutionRequest): Observable<GetAutomationExecutionResult> {
			return this.http.post<GetAutomationExecutionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetAutomationExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the state of the AWS Systems Manager Change Calendar at an optional, specified time. If you specify a time, <code>GetCalendarState</code> returns the state of the calendar at a specific time, and returns the next time that the Change Calendar state will transition. If you do not specify a time, <code>GetCalendarState</code> assumes the current time. Change Calendar entries have two possible states: <code>OPEN</code> or <code>CLOSED</code>. For more information about Systems Manager Change Calendar, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">AWS Systems Manager Change Calendar</a> in the <i>AWS Systems Manager User Guide</i>.
		 * Post #X-Amz-Target=AmazonSSM.GetCalendarState
		 * @return {GetCalendarStateResponse} Success
		 */
		GetCalendarState(requestBody: GetCalendarStateRequest): Observable<GetCalendarStateResponse> {
			return this.http.post<GetCalendarStateResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetCalendarState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns detailed information about command execution for an invocation or plugin.
		 * Post #X-Amz-Target=AmazonSSM.GetCommandInvocation
		 * @return {GetCommandInvocationResult} Success
		 */
		GetCommandInvocation(requestBody: GetCommandInvocationRequest): Observable<GetCommandInvocationResult> {
			return this.http.post<GetCommandInvocationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetCommandInvocation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the Session Manager connection status for an instance to determine whether it is running and ready to receive Session Manager connections.
		 * Post #X-Amz-Target=AmazonSSM.GetConnectionStatus
		 * @return {GetConnectionStatusResponse} Success
		 */
		GetConnectionStatus(requestBody: GetConnectionStatusRequest): Observable<GetConnectionStatusResponse> {
			return this.http.post<GetConnectionStatusResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetConnectionStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the default patch baseline. Note that Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.</p> <p>If you do not specify an operating system value, the default patch baseline for Windows is returned.</p>
		 * Post #X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline
		 * @return {GetDefaultPatchBaselineResult} Success
		 */
		GetDefaultPatchBaseline(requestBody: GetDefaultPatchBaselineRequest): Observable<GetDefaultPatchBaselineResult> {
			return this.http.post<GetDefaultPatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the current snapshot for the patch baseline the instance uses. This API is primarily used by the AWS-RunPatchBaseline Systems Manager document.
		 * Post #X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance
		 * @return {GetDeployablePatchSnapshotForInstanceResult} Success
		 */
		GetDeployablePatchSnapshotForInstance(requestBody: GetDeployablePatchSnapshotForInstanceRequest): Observable<GetDeployablePatchSnapshotForInstanceResult> {
			return this.http.post<GetDeployablePatchSnapshotForInstanceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the contents of the specified Systems Manager document.
		 * Post #X-Amz-Target=AmazonSSM.GetDocument
		 * @return {GetDocumentResult} Success
		 */
		GetDocument(requestBody: GetDocumentRequest): Observable<GetDocumentResult> {
			return this.http.post<GetDocumentResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Query inventory information.
		 * Post #X-Amz-Target=AmazonSSM.GetInventory
		 * @return {GetInventoryResult} Success
		 */
		GetInventory(requestBody: GetInventoryRequest): Observable<GetInventoryResult> {
			return this.http.post<GetInventoryResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetInventory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type.
		 * Post #X-Amz-Target=AmazonSSM.GetInventorySchema
		 * @return {GetInventorySchemaResult} Success
		 */
		GetInventorySchema(requestBody: GetInventorySchemaRequest): Observable<GetInventorySchemaResult> {
			return this.http.post<GetInventorySchemaResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetInventorySchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.GetMaintenanceWindow
		 * @return {GetMaintenanceWindowResult} Success
		 */
		GetMaintenanceWindow(requestBody: GetMaintenanceWindowRequest): Observable<GetMaintenanceWindowResult> {
			return this.http.post<GetMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves details about a specific a maintenance window execution.
		 * Post #X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution
		 * @return {GetMaintenanceWindowExecutionResult} Success
		 */
		GetMaintenanceWindowExecution(requestBody: GetMaintenanceWindowExecutionRequest): Observable<GetMaintenanceWindowExecutionResult> {
			return this.http.post<GetMaintenanceWindowExecutionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the details about a specific task run as part of a maintenance window execution.
		 * Post #X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask
		 * @return {GetMaintenanceWindowExecutionTaskResult} Success
		 */
		GetMaintenanceWindowExecutionTask(requestBody: GetMaintenanceWindowExecutionTaskRequest): Observable<GetMaintenanceWindowExecutionTaskResult> {
			return this.http.post<GetMaintenanceWindowExecutionTaskResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a specific task running on a specific target.
		 * Post #X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation
		 * @return {GetMaintenanceWindowExecutionTaskInvocationResult} Success
		 */
		GetMaintenanceWindowExecutionTaskInvocation(requestBody: GetMaintenanceWindowExecutionTaskInvocationRequest): Observable<GetMaintenanceWindowExecutionTaskInvocationResult> {
			return this.http.post<GetMaintenanceWindowExecutionTaskInvocationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tasks in a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask
		 * @return {GetMaintenanceWindowTaskResult} Success
		 */
		GetMaintenanceWindowTask(requestBody: GetMaintenanceWindowTaskRequest): Observable<GetMaintenanceWindowTaskResult> {
			return this.http.post<GetMaintenanceWindowTaskResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get information about an OpsItem by using the ID. You must have permission in AWS Identity and Access Management (IAM) to view information about an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
		 * Post #X-Amz-Target=AmazonSSM.GetOpsItem
		 * @return {GetOpsItemResponse} Success
		 */
		GetOpsItem(requestBody: GetOpsItemRequest): Observable<GetOpsItemResponse> {
			return this.http.post<GetOpsItemResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetOpsItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View a summary of OpsItems based on specified filters and aggregators.
		 * Post #X-Amz-Target=AmazonSSM.GetOpsSummary
		 * @return {GetOpsSummaryResult} Success
		 */
		GetOpsSummary(requestBody: GetOpsSummaryRequest): Observable<GetOpsSummaryResult> {
			return this.http.post<GetOpsSummaryResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetOpsSummary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get information about a parameter by using the parameter name. Don't confuse this API action with the <a>GetParameters</a> API action.
		 * Post #X-Amz-Target=AmazonSSM.GetParameter
		 * @return {GetParameterResult} Success
		 */
		GetParameter(requestBody: GetParameterRequest): Observable<GetParameterResult> {
			return this.http.post<GetParameterResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetParameter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Query a list of all parameters used by the AWS account.
		 * Post #X-Amz-Target=AmazonSSM.GetParameterHistory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetParameterHistoryResult} Success
		 */
		GetParameterHistory(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetParameterHistoryRequest): Observable<GetParameterHistoryResult> {
			return this.http.post<GetParameterHistoryResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetParameterHistory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get details of a parameter. Don't confuse this API action with the <a>GetParameter</a> API action.
		 * Post #X-Amz-Target=AmazonSSM.GetParameters
		 * @return {GetParametersResult} Success
		 */
		GetParameters(requestBody: GetParametersRequest): Observable<GetParametersResult> {
			return this.http.post<GetParametersResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieve information about one or more parameters in a specific hierarchy. </p> <note> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.GetParametersByPath
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetParametersByPathResult} Success
		 */
		GetParametersByPath(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetParametersByPathRequest): Observable<GetParametersByPathResult> {
			return this.http.post<GetParametersByPathResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetParametersByPath?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a patch baseline.
		 * Post #X-Amz-Target=AmazonSSM.GetPatchBaseline
		 * @return {GetPatchBaselineResult} Success
		 */
		GetPatchBaseline(requestBody: GetPatchBaselineRequest): Observable<GetPatchBaselineResult> {
			return this.http.post<GetPatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetPatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the patch baseline that should be used for the specified patch group.
		 * Post #X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup
		 * @return {GetPatchBaselineForPatchGroupResult} Success
		 */
		GetPatchBaselineForPatchGroup(requestBody: GetPatchBaselineForPatchGroupRequest): Observable<GetPatchBaselineForPatchGroupResult> {
			return this.http.post<GetPatchBaselineForPatchGroupResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> <p>Query the current service setting for the account. </p>
		 * Post #X-Amz-Target=AmazonSSM.GetServiceSetting
		 * @return {GetServiceSettingResult} Success
		 */
		GetServiceSetting(requestBody: GetServiceSettingRequest): Observable<GetServiceSettingResult> {
			return this.http.post<GetServiceSettingResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetServiceSetting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions. </p> <p>Parameter labels have the following requirements and restrictions.</p> <ul> <li> <p>A version of a parameter can have a maximum of 10 labels.</p> </li> <li> <p>You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.</p> </li> <li> <p>You can move a label from one version of a parameter to another.</p> </li> <li> <p>You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.</p> </li> <li> <p>You can't delete a parameter label. If you no longer want to use a parameter label, then you must move it to a different version of a parameter.</p> </li> <li> <p>A label can have a maximum of 100 characters.</p> </li> <li> <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).</p> </li> <li> <p>Labels can't begin with a number, "aws," or "ssm" (not case sensitive). If a label fails to meet these requirements, then the label is not associated with a parameter and the system displays it in the list of InvalidLabels.</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonSSM.LabelParameterVersion
		 * @return {LabelParameterVersionResult} Success
		 */
		LabelParameterVersion(requestBody: LabelParameterVersionRequest): Observable<LabelParameterVersionResult> {
			return this.http.post<LabelParameterVersionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.LabelParameterVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all versions of an association for a specific association ID.
		 * Post #X-Amz-Target=AmazonSSM.ListAssociationVersions
		 * @return {ListAssociationVersionsResult} Success
		 */
		ListAssociationVersions(requestBody: ListAssociationVersionsRequest): Observable<ListAssociationVersionsResult> {
			return this.http.post<ListAssociationVersionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListAssociationVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all State Manager associations in the current AWS account and Region. You can limit the results to a specific State Manager association document or instance by specifying a filter.
		 * Post #X-Amz-Target=AmazonSSM.ListAssociations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAssociationsResult} Success
		 */
		ListAssociations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAssociationsRequest): Observable<ListAssociationsResult> {
			return this.http.post<ListAssociationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListAssociations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. ListCommandInvocations provide status about command execution.
		 * Post #X-Amz-Target=AmazonSSM.ListCommandInvocations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCommandInvocationsResult} Success
		 */
		ListCommandInvocations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCommandInvocationsRequest): Observable<ListCommandInvocationsResult> {
			return this.http.post<ListCommandInvocationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListCommandInvocations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the commands requested by users of the AWS account.
		 * Post #X-Amz-Target=AmazonSSM.ListCommands
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCommandsResult} Success
		 */
		ListCommands(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCommandsRequest): Observable<ListCommandsResult> {
			return this.http.post<ListCommandsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListCommands?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For a specified resource ID, this API action returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter.
		 * Post #X-Amz-Target=AmazonSSM.ListComplianceItems
		 * @return {ListComplianceItemsResult} Success
		 */
		ListComplianceItems(requestBody: ListComplianceItemsRequest): Observable<ListComplianceItemsResult> {
			return this.http.post<ListComplianceItemsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListComplianceItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify.
		 * Post #X-Amz-Target=AmazonSSM.ListComplianceSummaries
		 * @return {ListComplianceSummariesResult} Success
		 */
		ListComplianceSummaries(requestBody: ListComplianceSummariesRequest): Observable<ListComplianceSummariesResult> {
			return this.http.post<ListComplianceSummariesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListComplianceSummaries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all versions for a document.
		 * Post #X-Amz-Target=AmazonSSM.ListDocumentVersions
		 * @return {ListDocumentVersionsResult} Success
		 */
		ListDocumentVersions(requestBody: ListDocumentVersionsRequest): Observable<ListDocumentVersionsResult> {
			return this.http.post<ListDocumentVersionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListDocumentVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all Systems Manager (SSM) documents in the current AWS account and Region. You can limit the results of this request by using a filter.
		 * Post #X-Amz-Target=AmazonSSM.ListDocuments
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDocumentsResult} Success
		 */
		ListDocuments(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDocumentsRequest): Observable<ListDocumentsResult> {
			return this.http.post<ListDocumentsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListDocuments?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A list of inventory items returned by the request.
		 * Post #X-Amz-Target=AmazonSSM.ListInventoryEntries
		 * @return {ListInventoryEntriesResult} Success
		 */
		ListInventoryEntries(requestBody: ListInventoryEntriesRequest): Observable<ListInventoryEntriesResult> {
			return this.http.post<ListInventoryEntriesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListInventoryEntries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.
		 * Post #X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries
		 * @return {ListResourceComplianceSummariesResult} Success
		 */
		ListResourceComplianceSummaries(requestBody: ListResourceComplianceSummariesRequest): Observable<ListResourceComplianceSummariesResult> {
			return this.http.post<ListResourceComplianceSummariesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed.</p> <p>The number of sync configurations might be too large to return using a single call to <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by using the <code>MaxResults</code> parameter. To determine whether there are more sync configurations to list, check the value of <code>NextToken</code> in the output. If there are more sync configurations to list, you can request them by specifying the <code>NextToken</code> returned in the call to the parameter of a subsequent call. </p>
		 * Post #X-Amz-Target=AmazonSSM.ListResourceDataSync
		 * @return {ListResourceDataSyncResult} Success
		 */
		ListResourceDataSync(requestBody: ListResourceDataSyncRequest): Observable<ListResourceDataSyncResult> {
			return this.http.post<ListResourceDataSyncResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListResourceDataSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the tags assigned to the specified resource.
		 * Post #X-Amz-Target=AmazonSSM.ListTagsForResource
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResult> {
			return this.http.post<ListTagsForResourceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Shares a Systems Manager document publicly or privately. If you share a document privately, you must specify the AWS user account IDs for those people who can use the document. If you share a document publicly, you must specify <i>All</i> as the account ID.
		 * Post #X-Amz-Target=AmazonSSM.ModifyDocumentPermission
		 * @return {ModifyDocumentPermissionResponse} Success
		 */
		ModifyDocumentPermission(requestBody: ModifyDocumentPermissionRequest): Observable<ModifyDocumentPermissionResponse> {
			return this.http.post<ModifyDocumentPermissionResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.ModifyDocumentPermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers a compliance type and other compliance details on a designated resource. This action lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request.</p> <p>ComplianceType can be one of the following:</p> <ul> <li> <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.</p> </li> <li> <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p> </li> <li> <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to the instance.</p> </li> <li> <p>Id: The patch, association, or custom compliance ID.</p> </li> <li> <p>Title: A title.</p> </li> <li> <p>Status: The status of the compliance item. For example, <code>approved</code> for patches, or <code>Failed</code> for associations.</p> </li> <li> <p>Severity: A patch severity. For example, <code>critical</code>.</p> </li> <li> <p>DocumentName: A SSM document name. For example, AWS-RunPatchBaseline.</p> </li> <li> <p>DocumentVersion: An SSM document version number. For example, 4.</p> </li> <li> <p>Classification: A patch classification. For example, <code>security updates</code>.</p> </li> <li> <p>PatchBaselineId: A patch baseline ID.</p> </li> <li> <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p> </li> <li> <p>PatchGroup: The name of a patch group.</p> </li> <li> <p>InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonSSM.PutComplianceItems
		 * @return {PutComplianceItemsResult} Success
		 */
		PutComplianceItems(requestBody: PutComplianceItemsRequest): Observable<PutComplianceItemsResult> {
			return this.http.post<PutComplianceItemsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.PutComplianceItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Bulk update custom inventory items on one more instance. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.
		 * Post #X-Amz-Target=AmazonSSM.PutInventory
		 * @return {PutInventoryResult} Success
		 */
		PutInventory(requestBody: PutInventoryRequest): Observable<PutInventoryResult> {
			return this.http.post<PutInventoryResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.PutInventory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add a parameter to the system.
		 * Post #X-Amz-Target=AmazonSSM.PutParameter
		 * @return {PutParameterResult} Success
		 */
		PutParameter(requestBody: PutParameterRequest): Observable<PutParameterResult> {
			return this.http.post<PutParameterResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.PutParameter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Defines the default patch baseline for the relevant operating system.</p> <p>To reset the AWS predefined patch baseline as the default, specify the full patch baseline ARN as the baseline ID value. For example, for CentOS, specify <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of <code>pb-0574b43a65ea646ed</code>.</p>
		 * Post #X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline
		 * @return {RegisterDefaultPatchBaselineResult} Success
		 */
		RegisterDefaultPatchBaseline(requestBody: RegisterDefaultPatchBaselineRequest): Observable<RegisterDefaultPatchBaselineResult> {
			return this.http.post<RegisterDefaultPatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers a patch baseline for a patch group.
		 * Post #X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup
		 * @return {RegisterPatchBaselineForPatchGroupResult} Success
		 */
		RegisterPatchBaselineForPatchGroup(requestBody: RegisterPatchBaselineForPatchGroupRequest): Observable<RegisterPatchBaselineForPatchGroupResult> {
			return this.http.post<RegisterPatchBaselineForPatchGroupResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers a target with a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow
		 * @return {RegisterTargetWithMaintenanceWindowResult} Success
		 */
		RegisterTargetWithMaintenanceWindow(requestBody: RegisterTargetWithMaintenanceWindowRequest): Observable<RegisterTargetWithMaintenanceWindowResult> {
			return this.http.post<RegisterTargetWithMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a new task to a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow
		 * @return {RegisterTaskWithMaintenanceWindowResult} Success
		 */
		RegisterTaskWithMaintenanceWindow(requestBody: RegisterTaskWithMaintenanceWindowRequest): Observable<RegisterTaskWithMaintenanceWindowResult> {
			return this.http.post<RegisterTaskWithMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tag keys from the specified resource.
		 * Post #X-Amz-Target=AmazonSSM.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceResult} Success
		 */
		RemoveTagsFromResource(requestBody: RemoveTagsFromResourceRequest): Observable<RemoveTagsFromResourceResult> {
			return this.http.post<RemoveTagsFromResourceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.RemoveTagsFromResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API action to view the current value. Use the <a>UpdateServiceSetting</a> API action to change the default setting. </p> <p>Reset the service setting for the account to the default value as provisioned by the AWS service team. </p>
		 * Post #X-Amz-Target=AmazonSSM.ResetServiceSetting
		 * @return {ResetServiceSettingResult} Success
		 */
		ResetServiceSetting(requestBody: ResetServiceSettingRequest): Observable<ResetServiceSettingResult> {
			return this.http.post<ResetServiceSettingResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ResetServiceSetting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Reconnects a session to an instance after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.</p> <note> <p>This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It is not intended for any other use.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.ResumeSession
		 * @return {ResumeSessionResponse} Success
		 */
		ResumeSession(requestBody: ResumeSessionRequest): Observable<ResumeSessionResponse> {
			return this.http.post<ResumeSessionResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.ResumeSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends a signal to an Automation execution to change the current behavior or status of the execution.
		 * Post #X-Amz-Target=AmazonSSM.SendAutomationSignal
		 * @return {SendAutomationSignalResult} Success
		 */
		SendAutomationSignal(requestBody: SendAutomationSignalRequest): Observable<SendAutomationSignalResult> {
			return this.http.post<SendAutomationSignalResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.SendAutomationSignal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs commands on one or more managed instances.
		 * Post #X-Amz-Target=AmazonSSM.SendCommand
		 * @return {SendCommandResult} Success
		 */
		SendCommand(requestBody: SendCommandRequest): Observable<SendCommandResult> {
			return this.http.post<SendCommandResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.SendCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this API action to run an association immediately and only one time. This action can be helpful when troubleshooting associations.
		 * Post #X-Amz-Target=AmazonSSM.StartAssociationsOnce
		 * @return {StartAssociationsOnceResult} Success
		 */
		StartAssociationsOnce(requestBody: StartAssociationsOnceRequest): Observable<StartAssociationsOnceResult> {
			return this.http.post<StartAssociationsOnceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.StartAssociationsOnce', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates execution of an Automation document.
		 * Post #X-Amz-Target=AmazonSSM.StartAutomationExecution
		 * @return {StartAutomationExecutionResult} Success
		 */
		StartAutomationExecution(requestBody: StartAutomationExecutionRequest): Observable<StartAutomationExecutionResult> {
			return this.http.post<StartAutomationExecutionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.StartAutomationExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initiates a connection to a target (for example, an instance) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.</p> <note> <p>AWS CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install the Session Manager plugin for the AWS CLI</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>AWS Tools for PowerShell usage: Start-SSMSession is not currently supported by AWS Tools for PowerShell on Windows local machines.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.StartSession
		 * @return {StartSessionResponse} Success
		 */
		StartSession(requestBody: StartSessionRequest): Observable<StartSessionResponse> {
			return this.http.post<StartSessionResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.StartSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stop an Automation that is currently running.
		 * Post #X-Amz-Target=AmazonSSM.StopAutomationExecution
		 * @return {StopAutomationExecutionResult} Success
		 */
		StopAutomationExecution(requestBody: StopAutomationExecutionRequest): Observable<StopAutomationExecutionResult> {
			return this.http.post<StopAutomationExecutionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.StopAutomationExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the instance. A terminated session cannot be resumed.
		 * Post #X-Amz-Target=AmazonSSM.TerminateSession
		 * @return {TerminateSessionResponse} Success
		 */
		TerminateSession(requestBody: TerminateSessionRequest): Observable<TerminateSessionResponse> {
			return this.http.post<TerminateSessionResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.TerminateSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon S3 output. </p> <p>In order to call this API action, your IAM user account, group, or role must be configured with permission to call the <a>DescribeAssociation</a> API action. If you don't have permission to call DescribeAssociation, then you receive the following error: <code>An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: &lt;user_arn&gt; is not authorized to perform: ssm:DescribeAssociation on resource: &lt;resource_arn&gt;</code> </p> <important> <p>When you update an association, the association immediately runs against the specified targets.</p> </important>
		 * Post #X-Amz-Target=AmazonSSM.UpdateAssociation
		 * @return {UpdateAssociationResult} Success
		 */
		UpdateAssociation(requestBody: UpdateAssociationRequest): Observable<UpdateAssociationResult> {
			return this.http.post<UpdateAssociationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the status of the Systems Manager document associated with the specified instance.
		 * Post #X-Amz-Target=AmazonSSM.UpdateAssociationStatus
		 * @return {UpdateAssociationStatusResult} Success
		 */
		UpdateAssociationStatus(requestBody: UpdateAssociationStatusRequest): Observable<UpdateAssociationStatusResult> {
			return this.http.post<UpdateAssociationStatusResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateAssociationStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates one or more values for an SSM document.
		 * Post #X-Amz-Target=AmazonSSM.UpdateDocument
		 * @return {UpdateDocumentResult} Success
		 */
		UpdateDocument(requestBody: UpdateDocumentRequest): Observable<UpdateDocumentResult> {
			return this.http.post<UpdateDocumentResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Set the default version of a document.
		 * Post #X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion
		 * @return {UpdateDocumentDefaultVersionResult} Success
		 */
		UpdateDocumentDefaultVersion(requestBody: UpdateDocumentDefaultVersionRequest): Observable<UpdateDocumentDefaultVersionResult> {
			return this.http.post<UpdateDocumentDefaultVersionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an existing maintenance window. Only specified parameters are modified.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow
		 * @return {UpdateMaintenanceWindowResult} Success
		 */
		UpdateMaintenanceWindow(requestBody: UpdateMaintenanceWindowRequest): Observable<UpdateMaintenanceWindowResult> {
			return this.http.post<UpdateMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the target of an existing maintenance window. You can change the following:</p> <ul> <li> <p>Name</p> </li> <li> <p>Description</p> </li> <li> <p>Owner</p> </li> <li> <p>IDs for an ID target</p> </li> <li> <p>Tags for a Tag target</p> </li> <li> <p>From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see <a>Target</a>.</p> </li> </ul> <note> <p>If a parameter is null, then the corresponding field is not modified.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget
		 * @return {UpdateMaintenanceWindowTargetResult} Success
		 */
		UpdateMaintenanceWindowTarget(requestBody: UpdateMaintenanceWindowTargetRequest): Observable<UpdateMaintenanceWindowTargetResult> {
			return this.http.post<UpdateMaintenanceWindowTargetResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values:</p> <ul> <li> <p>TaskARN. For example, you can change a RUN_COMMAND task from AWS-RunPowerShellScript to AWS-RunShellScript.</p> </li> <li> <p>ServiceRoleArn</p> </li> <li> <p>TaskInvocationParameters</p> </li> <li> <p>Priority</p> </li> <li> <p>MaxConcurrency</p> </li> <li> <p>MaxErrors</p> </li> </ul> <p>If a parameter is null, then the corresponding field is not modified. Also, if you set Replace to true, then all fields required by the <a>RegisterTaskWithMaintenanceWindow</a> action are required for this request. Optional fields that aren't specified are set to null.</p>
		 * Post #X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask
		 * @return {UpdateMaintenanceWindowTaskResult} Success
		 */
		UpdateMaintenanceWindowTask(requestBody: UpdateMaintenanceWindowTaskRequest): Observable<UpdateMaintenanceWindowTaskResult> {
			return this.http.post<UpdateMaintenanceWindowTaskResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes the Amazon Identity and Access Management (IAM) role that is assigned to the on-premises instance or virtual machines (VM). IAM roles are first assigned to these hybrid instances during the activation process. For more information, see <a>CreateActivation</a>.
		 * Post #X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole
		 * @return {UpdateManagedInstanceRoleResult} Success
		 */
		UpdateManagedInstanceRole(requestBody: UpdateManagedInstanceRoleRequest): Observable<UpdateManagedInstanceRoleResult> {
			return this.http.post<UpdateManagedInstanceRoleResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Edit or change an OpsItem. You must have permission in AWS Identity and Access Management (IAM) to update an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
		 * Post #X-Amz-Target=AmazonSSM.UpdateOpsItem
		 * @return {UpdateOpsItemResponse} Success
		 */
		UpdateOpsItem(requestBody: UpdateOpsItemRequest): Observable<UpdateOpsItemResponse> {
			return this.http.post<UpdateOpsItemResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateOpsItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies an existing patch baseline. Fields not specified in the request are left unchanged.</p> <note> <p>For information about valid key and value pairs in <code>PatchFilters</code> for each supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.UpdatePatchBaseline
		 * @return {UpdatePatchBaselineResult} Success
		 */
		UpdatePatchBaseline(requestBody: UpdatePatchBaselineRequest): Observable<UpdatePatchBaselineResult> {
			return this.http.post<UpdatePatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdatePatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Update a resource data sync. After you create a resource data sync for a Region, you can't change the account options for that sync. For example, if you create a sync in the us-east-2 (Ohio) Region and you choose the Include only the current account option, you can't edit that sync later and choose the Include all accounts from my AWS Organizations configuration option. Instead, you must delete the first resource data sync, and create a new one.</p> <note> <p>This API action only supports a resource data sync that was created with a SyncFromSource <code>SyncType</code>.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.UpdateResourceDataSync
		 * @return {UpdateResourceDataSyncResult} Success
		 */
		UpdateResourceDataSync(requestBody: UpdateResourceDataSyncRequest): Observable<UpdateResourceDataSyncResult> {
			return this.http.post<UpdateResourceDataSyncResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateResourceDataSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API action to view the current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> <p>Update the service setting for the account. </p>
		 * Post #X-Amz-Target=AmazonSSM.UpdateServiceSetting
		 * @return {UpdateServiceSettingResult} Success
		 */
		UpdateServiceSetting(requestBody: UpdateServiceSettingRequest): Observable<UpdateServiceSettingResult> {
			return this.http.post<UpdateServiceSettingResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateServiceSetting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddTagsToResourceX_Amz_Target { AmazonSSM_AddTagsToResource = 0 }

	export enum CancelCommandX_Amz_Target { AmazonSSM_CancelCommand = 0 }

	export enum CancelMaintenanceWindowExecutionX_Amz_Target { AmazonSSM_CancelMaintenanceWindowExecution = 0 }

	export enum CreateActivationX_Amz_Target { AmazonSSM_CreateActivation = 0 }

	export enum CreateAssociationX_Amz_Target { AmazonSSM_CreateAssociation = 0 }

	export enum CreateAssociationBatchX_Amz_Target { AmazonSSM_CreateAssociationBatch = 0 }

	export enum CreateDocumentX_Amz_Target { AmazonSSM_CreateDocument = 0 }

	export enum CreateMaintenanceWindowX_Amz_Target { AmazonSSM_CreateMaintenanceWindow = 0 }

	export enum CreateOpsItemX_Amz_Target { AmazonSSM_CreateOpsItem = 0 }

	export enum CreatePatchBaselineX_Amz_Target { AmazonSSM_CreatePatchBaseline = 0 }

	export enum CreateResourceDataSyncX_Amz_Target { AmazonSSM_CreateResourceDataSync = 0 }

	export enum DeleteActivationX_Amz_Target { AmazonSSM_DeleteActivation = 0 }

	export enum DeleteAssociationX_Amz_Target { AmazonSSM_DeleteAssociation = 0 }

	export enum DeleteDocumentX_Amz_Target { AmazonSSM_DeleteDocument = 0 }

	export enum DeleteInventoryX_Amz_Target { AmazonSSM_DeleteInventory = 0 }

	export enum DeleteMaintenanceWindowX_Amz_Target { AmazonSSM_DeleteMaintenanceWindow = 0 }

	export enum DeleteParameterX_Amz_Target { AmazonSSM_DeleteParameter = 0 }

	export enum DeleteParametersX_Amz_Target { AmazonSSM_DeleteParameters = 0 }

	export enum DeletePatchBaselineX_Amz_Target { AmazonSSM_DeletePatchBaseline = 0 }

	export enum DeleteResourceDataSyncX_Amz_Target { AmazonSSM_DeleteResourceDataSync = 0 }

	export enum DeregisterManagedInstanceX_Amz_Target { AmazonSSM_DeregisterManagedInstance = 0 }

	export enum DeregisterPatchBaselineForPatchGroupX_Amz_Target { AmazonSSM_DeregisterPatchBaselineForPatchGroup = 0 }

	export enum DeregisterTargetFromMaintenanceWindowX_Amz_Target { AmazonSSM_DeregisterTargetFromMaintenanceWindow = 0 }

	export enum DeregisterTaskFromMaintenanceWindowX_Amz_Target { AmazonSSM_DeregisterTaskFromMaintenanceWindow = 0 }

	export enum DescribeActivationsX_Amz_Target { AmazonSSM_DescribeActivations = 0 }

	export enum DescribeAssociationX_Amz_Target { AmazonSSM_DescribeAssociation = 0 }

	export enum DescribeAssociationExecutionTargetsX_Amz_Target { AmazonSSM_DescribeAssociationExecutionTargets = 0 }

	export enum DescribeAssociationExecutionsX_Amz_Target { AmazonSSM_DescribeAssociationExecutions = 0 }

	export enum DescribeAutomationExecutionsX_Amz_Target { AmazonSSM_DescribeAutomationExecutions = 0 }

	export enum DescribeAutomationStepExecutionsX_Amz_Target { AmazonSSM_DescribeAutomationStepExecutions = 0 }

	export enum DescribeAvailablePatchesX_Amz_Target { AmazonSSM_DescribeAvailablePatches = 0 }

	export enum DescribeDocumentX_Amz_Target { AmazonSSM_DescribeDocument = 0 }

	export enum DescribeDocumentPermissionX_Amz_Target { AmazonSSM_DescribeDocumentPermission = 0 }

	export enum DescribeEffectiveInstanceAssociationsX_Amz_Target { AmazonSSM_DescribeEffectiveInstanceAssociations = 0 }

	export enum DescribeEffectivePatchesForPatchBaselineX_Amz_Target { AmazonSSM_DescribeEffectivePatchesForPatchBaseline = 0 }

	export enum DescribeInstanceAssociationsStatusX_Amz_Target { AmazonSSM_DescribeInstanceAssociationsStatus = 0 }

	export enum DescribeInstanceInformationX_Amz_Target { AmazonSSM_DescribeInstanceInformation = 0 }

	export enum DescribeInstancePatchStatesX_Amz_Target { AmazonSSM_DescribeInstancePatchStates = 0 }

	export enum DescribeInstancePatchStatesForPatchGroupX_Amz_Target { AmazonSSM_DescribeInstancePatchStatesForPatchGroup = 0 }

	export enum DescribeInstancePatchesX_Amz_Target { AmazonSSM_DescribeInstancePatches = 0 }

	export enum DescribeInventoryDeletionsX_Amz_Target { AmazonSSM_DescribeInventoryDeletions = 0 }

	export enum DescribeMaintenanceWindowExecutionTaskInvocationsX_Amz_Target { AmazonSSM_DescribeMaintenanceWindowExecutionTaskInvocations = 0 }

	export enum DescribeMaintenanceWindowExecutionTasksX_Amz_Target { AmazonSSM_DescribeMaintenanceWindowExecutionTasks = 0 }

	export enum DescribeMaintenanceWindowExecutionsX_Amz_Target { AmazonSSM_DescribeMaintenanceWindowExecutions = 0 }

	export enum DescribeMaintenanceWindowScheduleX_Amz_Target { AmazonSSM_DescribeMaintenanceWindowSchedule = 0 }

	export enum DescribeMaintenanceWindowTargetsX_Amz_Target { AmazonSSM_DescribeMaintenanceWindowTargets = 0 }

	export enum DescribeMaintenanceWindowTasksX_Amz_Target { AmazonSSM_DescribeMaintenanceWindowTasks = 0 }

	export enum DescribeMaintenanceWindowsX_Amz_Target { AmazonSSM_DescribeMaintenanceWindows = 0 }

	export enum DescribeMaintenanceWindowsForTargetX_Amz_Target { AmazonSSM_DescribeMaintenanceWindowsForTarget = 0 }

	export enum DescribeOpsItemsX_Amz_Target { AmazonSSM_DescribeOpsItems = 0 }

	export enum DescribeParametersX_Amz_Target { AmazonSSM_DescribeParameters = 0 }

	export enum DescribePatchBaselinesX_Amz_Target { AmazonSSM_DescribePatchBaselines = 0 }

	export enum DescribePatchGroupStateX_Amz_Target { AmazonSSM_DescribePatchGroupState = 0 }

	export enum DescribePatchGroupsX_Amz_Target { AmazonSSM_DescribePatchGroups = 0 }

	export enum DescribePatchPropertiesX_Amz_Target { AmazonSSM_DescribePatchProperties = 0 }

	export enum DescribeSessionsX_Amz_Target { AmazonSSM_DescribeSessions = 0 }

	export enum GetAutomationExecutionX_Amz_Target { AmazonSSM_GetAutomationExecution = 0 }

	export enum GetCalendarStateX_Amz_Target { AmazonSSM_GetCalendarState = 0 }

	export enum GetCommandInvocationX_Amz_Target { AmazonSSM_GetCommandInvocation = 0 }

	export enum GetConnectionStatusX_Amz_Target { AmazonSSM_GetConnectionStatus = 0 }

	export enum GetDefaultPatchBaselineX_Amz_Target { AmazonSSM_GetDefaultPatchBaseline = 0 }

	export enum GetDeployablePatchSnapshotForInstanceX_Amz_Target { AmazonSSM_GetDeployablePatchSnapshotForInstance = 0 }

	export enum GetDocumentX_Amz_Target { AmazonSSM_GetDocument = 0 }

	export enum GetInventoryX_Amz_Target { AmazonSSM_GetInventory = 0 }

	export enum GetInventorySchemaX_Amz_Target { AmazonSSM_GetInventorySchema = 0 }

	export enum GetMaintenanceWindowX_Amz_Target { AmazonSSM_GetMaintenanceWindow = 0 }

	export enum GetMaintenanceWindowExecutionX_Amz_Target { AmazonSSM_GetMaintenanceWindowExecution = 0 }

	export enum GetMaintenanceWindowExecutionTaskX_Amz_Target { AmazonSSM_GetMaintenanceWindowExecutionTask = 0 }

	export enum GetMaintenanceWindowExecutionTaskInvocationX_Amz_Target { AmazonSSM_GetMaintenanceWindowExecutionTaskInvocation = 0 }

	export enum GetMaintenanceWindowTaskX_Amz_Target { AmazonSSM_GetMaintenanceWindowTask = 0 }

	export enum GetOpsItemX_Amz_Target { AmazonSSM_GetOpsItem = 0 }

	export enum GetOpsSummaryX_Amz_Target { AmazonSSM_GetOpsSummary = 0 }

	export enum GetParameterX_Amz_Target { AmazonSSM_GetParameter = 0 }

	export enum GetParameterHistoryX_Amz_Target { AmazonSSM_GetParameterHistory = 0 }

	export enum GetParametersX_Amz_Target { AmazonSSM_GetParameters = 0 }

	export enum GetParametersByPathX_Amz_Target { AmazonSSM_GetParametersByPath = 0 }

	export enum GetPatchBaselineX_Amz_Target { AmazonSSM_GetPatchBaseline = 0 }

	export enum GetPatchBaselineForPatchGroupX_Amz_Target { AmazonSSM_GetPatchBaselineForPatchGroup = 0 }

	export enum GetServiceSettingX_Amz_Target { AmazonSSM_GetServiceSetting = 0 }

	export enum LabelParameterVersionX_Amz_Target { AmazonSSM_LabelParameterVersion = 0 }

	export enum ListAssociationVersionsX_Amz_Target { AmazonSSM_ListAssociationVersions = 0 }

	export enum ListAssociationsX_Amz_Target { AmazonSSM_ListAssociations = 0 }

	export enum ListCommandInvocationsX_Amz_Target { AmazonSSM_ListCommandInvocations = 0 }

	export enum ListCommandsX_Amz_Target { AmazonSSM_ListCommands = 0 }

	export enum ListComplianceItemsX_Amz_Target { AmazonSSM_ListComplianceItems = 0 }

	export enum ListComplianceSummariesX_Amz_Target { AmazonSSM_ListComplianceSummaries = 0 }

	export enum ListDocumentVersionsX_Amz_Target { AmazonSSM_ListDocumentVersions = 0 }

	export enum ListDocumentsX_Amz_Target { AmazonSSM_ListDocuments = 0 }

	export enum ListInventoryEntriesX_Amz_Target { AmazonSSM_ListInventoryEntries = 0 }

	export enum ListResourceComplianceSummariesX_Amz_Target { AmazonSSM_ListResourceComplianceSummaries = 0 }

	export enum ListResourceDataSyncX_Amz_Target { AmazonSSM_ListResourceDataSync = 0 }

	export enum ListTagsForResourceX_Amz_Target { AmazonSSM_ListTagsForResource = 0 }

	export enum ModifyDocumentPermissionX_Amz_Target { AmazonSSM_ModifyDocumentPermission = 0 }

	export enum PutComplianceItemsX_Amz_Target { AmazonSSM_PutComplianceItems = 0 }

	export enum PutInventoryX_Amz_Target { AmazonSSM_PutInventory = 0 }

	export enum PutParameterX_Amz_Target { AmazonSSM_PutParameter = 0 }

	export enum RegisterDefaultPatchBaselineX_Amz_Target { AmazonSSM_RegisterDefaultPatchBaseline = 0 }

	export enum RegisterPatchBaselineForPatchGroupX_Amz_Target { AmazonSSM_RegisterPatchBaselineForPatchGroup = 0 }

	export enum RegisterTargetWithMaintenanceWindowX_Amz_Target { AmazonSSM_RegisterTargetWithMaintenanceWindow = 0 }

	export enum RegisterTaskWithMaintenanceWindowX_Amz_Target { AmazonSSM_RegisterTaskWithMaintenanceWindow = 0 }

	export enum RemoveTagsFromResourceX_Amz_Target { AmazonSSM_RemoveTagsFromResource = 0 }

	export enum ResetServiceSettingX_Amz_Target { AmazonSSM_ResetServiceSetting = 0 }

	export enum ResumeSessionX_Amz_Target { AmazonSSM_ResumeSession = 0 }

	export enum SendAutomationSignalX_Amz_Target { AmazonSSM_SendAutomationSignal = 0 }

	export enum SendCommandX_Amz_Target { AmazonSSM_SendCommand = 0 }

	export enum StartAssociationsOnceX_Amz_Target { AmazonSSM_StartAssociationsOnce = 0 }

	export enum StartAutomationExecutionX_Amz_Target { AmazonSSM_StartAutomationExecution = 0 }

	export enum StartSessionX_Amz_Target { AmazonSSM_StartSession = 0 }

	export enum StopAutomationExecutionX_Amz_Target { AmazonSSM_StopAutomationExecution = 0 }

	export enum TerminateSessionX_Amz_Target { AmazonSSM_TerminateSession = 0 }

	export enum UpdateAssociationX_Amz_Target { AmazonSSM_UpdateAssociation = 0 }

	export enum UpdateAssociationStatusX_Amz_Target { AmazonSSM_UpdateAssociationStatus = 0 }

	export enum UpdateDocumentX_Amz_Target { AmazonSSM_UpdateDocument = 0 }

	export enum UpdateDocumentDefaultVersionX_Amz_Target { AmazonSSM_UpdateDocumentDefaultVersion = 0 }

	export enum UpdateMaintenanceWindowX_Amz_Target { AmazonSSM_UpdateMaintenanceWindow = 0 }

	export enum UpdateMaintenanceWindowTargetX_Amz_Target { AmazonSSM_UpdateMaintenanceWindowTarget = 0 }

	export enum UpdateMaintenanceWindowTaskX_Amz_Target { AmazonSSM_UpdateMaintenanceWindowTask = 0 }

	export enum UpdateManagedInstanceRoleX_Amz_Target { AmazonSSM_UpdateManagedInstanceRole = 0 }

	export enum UpdateOpsItemX_Amz_Target { AmazonSSM_UpdateOpsItem = 0 }

	export enum UpdatePatchBaselineX_Amz_Target { AmazonSSM_UpdatePatchBaseline = 0 }

	export enum UpdateResourceDataSyncX_Amz_Target { AmazonSSM_UpdateResourceDataSync = 0 }

	export enum UpdateServiceSettingX_Amz_Target { AmazonSSM_UpdateServiceSetting = 0 }

}

