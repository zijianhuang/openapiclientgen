import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request for acknowledging the violation */
	export interface GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest {

		/** Optional. Acknowledge type of specified violation. */
		acknowledgeType?: GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequestAcknowledgeType | null;

		/** Required. Business justification explaining the need for violation acknowledgement */
		comment?: string | null;

		/** Optional. This field is deprecated and will be removed in future version of the API. Name of the OrgPolicy which was modified with non-compliant change and resulted in this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name} */
		nonCompliantOrgPolicy?: string | null;
	}

	/** Request for acknowledging the violation */
	export interface GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequestFormProperties {

		/** Optional. Acknowledge type of specified violation. */
		acknowledgeType: FormControl<GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequestAcknowledgeType | null | undefined>,

		/** Required. Business justification explaining the need for violation acknowledgement */
		comment: FormControl<string | null | undefined>,

		/** Optional. This field is deprecated and will be removed in future version of the API. Name of the OrgPolicy which was modified with non-compliant change and resulted in this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name} */
		nonCompliantOrgPolicy: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1AcknowledgeViolationRequestFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequestFormProperties>({
			acknowledgeType: new FormControl<GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequestAcknowledgeType | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			nonCompliantOrgPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequestAcknowledgeType { ACKNOWLEDGE_TYPE_UNSPECIFIED = 'ACKNOWLEDGE_TYPE_UNSPECIFIED', SINGLE_VIOLATION = 'SINGLE_VIOLATION', EXISTING_CHILD_RESOURCE_VIOLATIONS = 'EXISTING_CHILD_RESOURCE_VIOLATIONS' }


	/** Response for violation acknowledgement */
	export interface GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse {
	}

	/** Response for violation acknowledgement */
	export interface GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponseFormProperties {
	}
	export function CreateGoogleCloudAssuredworkloadsV1AcknowledgeViolationResponseFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponseFormProperties>({
		});

	}


	/** Response containing the analysis results for the hypothetical resource move. */
	export interface GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse {

		/** List of analysis results for each asset in scope. */
		assetMoveAnalyses?: Array<GoogleCloudAssuredworkloadsV1AssetMoveAnalysis>;

		/** The next page token. Is empty if the last page is reached. */
		nextPageToken?: string | null;
	}

	/** Response containing the analysis results for the hypothetical resource move. */
	export interface GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponseFormProperties {

		/** The next page token. Is empty if the last page is reached. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponseFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents move analysis results for an asset. */
	export interface GoogleCloudAssuredworkloadsV1AssetMoveAnalysis {

		/** List of eligible analyses performed for the asset. */
		analysisGroups?: Array<GoogleCloudAssuredworkloadsV1MoveAnalysisGroup>;

		/** The full resource name of the asset being analyzed. Example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1 */
		asset?: string | null;

		/** Type of the asset being analyzed. Possible values will be among the ones listed [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types). */
		assetType?: string | null;
	}

	/** Represents move analysis results for an asset. */
	export interface GoogleCloudAssuredworkloadsV1AssetMoveAnalysisFormProperties {

		/** The full resource name of the asset being analyzed. Example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1 */
		asset: FormControl<string | null | undefined>,

		/** Type of the asset being analyzed. Possible values will be among the ones listed [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types). */
		assetType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1AssetMoveAnalysisFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1AssetMoveAnalysisFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			assetType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a logical group of checks performed for an asset. If successful, the group contains the analysis result, otherwise it contains an error with the failure reason. */
	export interface GoogleCloudAssuredworkloadsV1MoveAnalysisGroup {

		/** Represents the successful move analysis results for a group. */
		analysisResult?: GoogleCloudAssuredworkloadsV1MoveAnalysisResult;

		/** Name of the analysis group. */
		displayName?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;
	}

	/** Represents a logical group of checks performed for an asset. If successful, the group contains the analysis result, otherwise it contains an error with the failure reason. */
	export interface GoogleCloudAssuredworkloadsV1MoveAnalysisGroupFormProperties {

		/** Name of the analysis group. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1MoveAnalysisGroupFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1MoveAnalysisGroupFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the successful move analysis results for a group. */
	export interface GoogleCloudAssuredworkloadsV1MoveAnalysisResult {

		/** List of blockers. If not resolved, these will result in compliance violations in the target. */
		blockers?: Array<GoogleCloudAssuredworkloadsV1MoveImpact>;

		/** List of warnings. These are risks that may or may not result in compliance violations. */
		warnings?: Array<GoogleCloudAssuredworkloadsV1MoveImpact>;
	}

	/** Represents the successful move analysis results for a group. */
	export interface GoogleCloudAssuredworkloadsV1MoveAnalysisResultFormProperties {
	}
	export function CreateGoogleCloudAssuredworkloadsV1MoveAnalysisResultFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1MoveAnalysisResultFormProperties>({
		});

	}


	/** Represents the impact of moving the asset to the target. */
	export interface GoogleCloudAssuredworkloadsV1MoveImpact {

		/** Explanation of the impact. */
		detail?: string | null;
	}

	/** Represents the impact of moving the asset to the target. */
	export interface GoogleCloudAssuredworkloadsV1MoveImpactFormProperties {

		/** Explanation of the impact. */
		detail: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1MoveImpactFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1MoveImpactFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation metadata to give request details of CreateWorkload. */
	export interface GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata {

		/** Optional. Compliance controls that should be applied to the resources managed by the workload. */
		complianceRegime?: GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadataComplianceRegime | null;

		/** Optional. Time when the operation was created. */
		createTime?: string | null;

		/** Optional. The display name of the workload. */
		displayName?: string | null;

		/** Optional. The parent of the workload. */
		parent?: string | null;
	}

	/** Operation metadata to give request details of CreateWorkload. */
	export interface GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadataFormProperties {

		/** Optional. Compliance controls that should be applied to the resources managed by the workload. */
		complianceRegime: FormControl<GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadataComplianceRegime | null | undefined>,

		/** Optional. Time when the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. The display name of the workload. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. The parent of the workload. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadataFormProperties>({
			complianceRegime: new FormControl<GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadataComplianceRegime | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadataComplianceRegime { COMPLIANCE_REGIME_UNSPECIFIED = 'COMPLIANCE_REGIME_UNSPECIFIED', IL4 = 'IL4', CJIS = 'CJIS', FEDRAMP_HIGH = 'FEDRAMP_HIGH', FEDRAMP_MODERATE = 'FEDRAMP_MODERATE', US_REGIONAL_ACCESS = 'US_REGIONAL_ACCESS', HIPAA = 'HIPAA', HITRUST = 'HITRUST', EU_REGIONS_AND_SUPPORT = 'EU_REGIONS_AND_SUPPORT', CA_REGIONS_AND_SUPPORT = 'CA_REGIONS_AND_SUPPORT', ITAR = 'ITAR', AU_REGIONS_AND_US_SUPPORT = 'AU_REGIONS_AND_US_SUPPORT', ASSURED_WORKLOADS_FOR_PARTNERS = 'ASSURED_WORKLOADS_FOR_PARTNERS', ISR_REGIONS = 'ISR_REGIONS', ISR_REGIONS_AND_SUPPORT = 'ISR_REGIONS_AND_SUPPORT', CA_PROTECTED_B = 'CA_PROTECTED_B', IL5 = 'IL5', IL2 = 'IL2', JP_REGIONS_AND_SUPPORT = 'JP_REGIONS_AND_SUPPORT' }


	/** Response for EnableResourceMonitoring endpoint. */
	export interface GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse {
	}

	/** Response for EnableResourceMonitoring endpoint. */
	export interface GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponseFormProperties {
	}
	export function CreateGoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponseFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponseFormProperties>({
		});

	}


	/** Response of ListViolations endpoint. */
	export interface GoogleCloudAssuredworkloadsV1ListViolationsResponse {

		/** The next page token. Returns empty if reached the last page. */
		nextPageToken?: string | null;

		/** List of Violations under a Workload. */
		violations?: Array<GoogleCloudAssuredworkloadsV1Violation>;
	}

	/** Response of ListViolations endpoint. */
	export interface GoogleCloudAssuredworkloadsV1ListViolationsResponseFormProperties {

		/** The next page token. Returns empty if reached the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1ListViolationsResponseFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1ListViolationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Workload monitoring Violation. */
	export interface GoogleCloudAssuredworkloadsV1Violation {

		/** A boolean that indicates if the violation is acknowledged */
		acknowledged?: boolean | null;

		/** Optional. Timestamp when this violation was acknowledged first. Check exception_contexts to find the last time the violation was acknowledged when there are more than one violations. This field will be absent when acknowledged field is marked as false. */
		acknowledgementTime?: string | null;

		/** Optional. Output only. Violation Id of the org-policy violation due to which the resource violation is caused. Empty for org-policy violations. */
		associatedOrgPolicyViolationId?: string | null;

		/** Output only. Immutable. Audit Log Link for violated resource Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{timeRange}{folder} */
		auditLogLink?: string | null;

		/** Output only. Time of the event which triggered the Violation. */
		beginTime?: string | null;

		/** Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc. */
		category?: string | null;

		/** Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value. */
		description?: string | null;

		/** Output only. Immutable. Audit Log link to find business justification provided for violation exception. Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{protoPayload.methodName}{timeRange}{organization} */
		exceptionAuditLogLink?: string | null;

		/** Output only. List of all the exception detail added for the violation. */
		exceptionContexts?: Array<GoogleCloudAssuredworkloadsV1ViolationExceptionContext>;

		/** Output only. Immutable. Name of the Violation. Format: organizations/{organization}/locations/{location}/workloads/{workload_id}/violations/{violations_id} */
		name?: string | null;

		/** Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name} */
		nonCompliantOrgPolicy?: string | null;

		/** Output only. Immutable. The org-policy-constraint that was incorrectly changed, which resulted in this violation. */
		orgPolicyConstraint?: string | null;

		/** Optional. Output only. Parent project number where resource is present. Empty for org-policy violations. */
		parentProjectNumber?: string | null;

		/** Represents remediation guidance to resolve compliance violation for AssuredWorkload */
		remediation?: GoogleCloudAssuredworkloadsV1ViolationRemediation;

		/** Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty. */
		resolveTime?: string | null;

		/** Optional. Output only. Name of the resource like //storage.googleapis.com/myprojectxyz-testbucket. Empty for org-policy violations. */
		resourceName?: string | null;

		/** Optional. Output only. Type of the resource like compute.googleapis.com/Disk, etc. Empty for org-policy violations. */
		resourceType?: string | null;

		/** Output only. State of the violation */
		state?: GoogleCloudAssuredworkloadsV1ViolationState | null;

		/** Output only. The last time when the Violation record was updated. */
		updateTime?: string | null;

		/** Output only. Type of the violation */
		violationType?: GoogleCloudAssuredworkloadsV1ViolationViolationType | null;
	}

	/** Workload monitoring Violation. */
	export interface GoogleCloudAssuredworkloadsV1ViolationFormProperties {

		/** A boolean that indicates if the violation is acknowledged */
		acknowledged: FormControl<boolean | null | undefined>,

		/** Optional. Timestamp when this violation was acknowledged first. Check exception_contexts to find the last time the violation was acknowledged when there are more than one violations. This field will be absent when acknowledged field is marked as false. */
		acknowledgementTime: FormControl<string | null | undefined>,

		/** Optional. Output only. Violation Id of the org-policy violation due to which the resource violation is caused. Empty for org-policy violations. */
		associatedOrgPolicyViolationId: FormControl<string | null | undefined>,

		/** Output only. Immutable. Audit Log Link for violated resource Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{timeRange}{folder} */
		auditLogLink: FormControl<string | null | undefined>,

		/** Output only. Time of the event which triggered the Violation. */
		beginTime: FormControl<string | null | undefined>,

		/** Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc. */
		category: FormControl<string | null | undefined>,

		/** Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value. */
		description: FormControl<string | null | undefined>,

		/** Output only. Immutable. Audit Log link to find business justification provided for violation exception. Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{protoPayload.methodName}{timeRange}{organization} */
		exceptionAuditLogLink: FormControl<string | null | undefined>,

		/** Output only. Immutable. Name of the Violation. Format: organizations/{organization}/locations/{location}/workloads/{workload_id}/violations/{violations_id} */
		name: FormControl<string | null | undefined>,

		/** Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name} */
		nonCompliantOrgPolicy: FormControl<string | null | undefined>,

		/** Output only. Immutable. The org-policy-constraint that was incorrectly changed, which resulted in this violation. */
		orgPolicyConstraint: FormControl<string | null | undefined>,

		/** Optional. Output only. Parent project number where resource is present. Empty for org-policy violations. */
		parentProjectNumber: FormControl<string | null | undefined>,

		/** Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty. */
		resolveTime: FormControl<string | null | undefined>,

		/** Optional. Output only. Name of the resource like //storage.googleapis.com/myprojectxyz-testbucket. Empty for org-policy violations. */
		resourceName: FormControl<string | null | undefined>,

		/** Optional. Output only. Type of the resource like compute.googleapis.com/Disk, etc. Empty for org-policy violations. */
		resourceType: FormControl<string | null | undefined>,

		/** Output only. State of the violation */
		state: FormControl<GoogleCloudAssuredworkloadsV1ViolationState | null | undefined>,

		/** Output only. The last time when the Violation record was updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. Type of the violation */
		violationType: FormControl<GoogleCloudAssuredworkloadsV1ViolationViolationType | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1ViolationFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1ViolationFormProperties>({
			acknowledged: new FormControl<boolean | null | undefined>(undefined),
			acknowledgementTime: new FormControl<string | null | undefined>(undefined),
			associatedOrgPolicyViolationId: new FormControl<string | null | undefined>(undefined),
			auditLogLink: new FormControl<string | null | undefined>(undefined),
			beginTime: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			exceptionAuditLogLink: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nonCompliantOrgPolicy: new FormControl<string | null | undefined>(undefined),
			orgPolicyConstraint: new FormControl<string | null | undefined>(undefined),
			parentProjectNumber: new FormControl<string | null | undefined>(undefined),
			resolveTime: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudAssuredworkloadsV1ViolationState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			violationType: new FormControl<GoogleCloudAssuredworkloadsV1ViolationViolationType | null | undefined>(undefined),
		});

	}


	/** Violation exception detail. */
	export interface GoogleCloudAssuredworkloadsV1ViolationExceptionContext {

		/** Timestamp when the violation was acknowledged. */
		acknowledgementTime?: string | null;

		/** Business justification provided towards the acknowledgement of the violation. */
		comment?: string | null;

		/** Name of the user (or service account) who acknowledged the violation. */
		userName?: string | null;
	}

	/** Violation exception detail. */
	export interface GoogleCloudAssuredworkloadsV1ViolationExceptionContextFormProperties {

		/** Timestamp when the violation was acknowledged. */
		acknowledgementTime: FormControl<string | null | undefined>,

		/** Business justification provided towards the acknowledgement of the violation. */
		comment: FormControl<string | null | undefined>,

		/** Name of the user (or service account) who acknowledged the violation. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1ViolationExceptionContextFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1ViolationExceptionContextFormProperties>({
			acknowledgementTime: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents remediation guidance to resolve compliance violation for AssuredWorkload */
	export interface GoogleCloudAssuredworkloadsV1ViolationRemediation {

		/** Values that can resolve the violation For example: for list org policy violations, this will either be the list of allowed or denied values */
		compliantValues?: Array<string>;

		/** Instructions to remediate violation */
		instructions?: GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions;

		/** Output only. Reemediation type based on the type of org policy values violated */
		remediationType?: GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationType | null;
	}

	/** Represents remediation guidance to resolve compliance violation for AssuredWorkload */
	export interface GoogleCloudAssuredworkloadsV1ViolationRemediationFormProperties {

		/** Output only. Reemediation type based on the type of org policy values violated */
		remediationType: FormControl<GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationType | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1ViolationRemediationFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1ViolationRemediationFormProperties>({
			remediationType: new FormControl<GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationType | null | undefined>(undefined),
		});

	}


	/** Instructions to remediate violation */
	export interface GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions {

		/** Remediation instructions to resolve violation via cloud console */
		consoleInstructions?: GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole;

		/** Remediation instructions to resolve violation via gcloud cli */
		gcloudInstructions?: GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud;
	}

	/** Instructions to remediate violation */
	export interface GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsFormProperties {
	}
	export function CreateGoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsFormProperties>({
		});

	}


	/** Remediation instructions to resolve violation via cloud console */
	export interface GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole {

		/** Additional urls for more information about steps */
		additionalLinks?: Array<string>;

		/** Link to console page where violations can be resolved */
		consoleUris?: Array<string>;

		/** Steps to resolve violation via cloud console */
		steps?: Array<string>;
	}

	/** Remediation instructions to resolve violation via cloud console */
	export interface GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsoleFormProperties {
	}
	export function CreateGoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsoleFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsoleFormProperties>({
		});

	}


	/** Remediation instructions to resolve violation via gcloud cli */
	export interface GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud {

		/** Additional urls for more information about steps */
		additionalLinks?: Array<string>;

		/** Gcloud command to resolve violation */
		gcloudCommands?: Array<string>;

		/** Steps to resolve violation via gcloud cli */
		steps?: Array<string>;
	}

	/** Remediation instructions to resolve violation via gcloud cli */
	export interface GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloudFormProperties {
	}
	export function CreateGoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloudFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloudFormProperties>({
		});

	}

	export enum GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationType { REMEDIATION_TYPE_UNSPECIFIED = 'REMEDIATION_TYPE_UNSPECIFIED', REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION = 'REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION', REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION = 'REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION', REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION = 'REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION', REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION = 'REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION', REMEDIATION_RESOURCE_VIOLATION = 'REMEDIATION_RESOURCE_VIOLATION' }

	export enum GoogleCloudAssuredworkloadsV1ViolationState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', RESOLVED = 'RESOLVED', UNRESOLVED = 'UNRESOLVED', EXCEPTION = 'EXCEPTION' }

	export enum GoogleCloudAssuredworkloadsV1ViolationViolationType { VIOLATION_TYPE_UNSPECIFIED = 'VIOLATION_TYPE_UNSPECIFIED', ORG_POLICY = 'ORG_POLICY', RESOURCE = 'RESOURCE' }


	/** Response of ListWorkloads endpoint. */
	export interface GoogleCloudAssuredworkloadsV1ListWorkloadsResponse {

		/** The next page token. Return empty if reached the last page. */
		nextPageToken?: string | null;

		/** List of Workloads under a given parent. */
		workloads?: Array<GoogleCloudAssuredworkloadsV1Workload>;
	}

	/** Response of ListWorkloads endpoint. */
	export interface GoogleCloudAssuredworkloadsV1ListWorkloadsResponseFormProperties {

		/** The next page token. Return empty if reached the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1ListWorkloadsResponseFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1ListWorkloadsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Workload object for managing highly regulated workloads of cloud customers. */
	export interface GoogleCloudAssuredworkloadsV1Workload {

		/** Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`. */
		billingAccount?: string | null;

		/** Required. Immutable. Compliance Regime associated with this workload. */
		complianceRegime?: GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadataComplianceRegime | null;

		/** Represents the Compliance Status of this workload */
		complianceStatus?: GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus;

		/** Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke RestrictAllowedResources endpoint to allow your project developers to use these services in their environment. */
		compliantButDisallowedServices?: Array<string>;

		/** Output only. Immutable. The Workload creation timestamp. */
		createTime?: string | null;

		/** Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload */
		displayName?: string | null;

		/** External key management systems(EKM) Provisioning response */
		ekmProvisioningResponse?: GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse;

		/** Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers. */
		enableSovereignControls?: boolean | null;

		/** Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations. */
		etag?: string | null;

		/** Output only. Represents the KAJ enrollment state of the given workload. */
		kajEnrollmentState?: GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentState | null;

		/** Settings specific to the Key Management Service. */
		kmsSettings?: GoogleCloudAssuredworkloadsV1WorkloadKMSSettings;

		/** Optional. Labels applied to the workload. */
		labels?: {[id: string]: string };

		/** Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only. */
		name?: string | null;

		/** Optional. Partner regime associated with this workload. */
		partner?: GoogleCloudAssuredworkloadsV1WorkloadPartner | null;

		/** Permissions granted to the AW Partner SA account for the customer workload */
		partnerPermissions?: GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions;

		/** Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id} */
		provisionedResourcesParent?: string | null;

		/** Output only. Indicates whether resource monitoring is enabled for workload or not. It is true when Resource feed is subscribed to AWM topic and AWM Service Agent Role is binded to AW Service Account for resource Assured workload. */
		resourceMonitoringEnabled?: boolean | null;

		/** Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional. */
		resourceSettings?: Array<GoogleCloudAssuredworkloadsV1WorkloadResourceSettings>;

		/** Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only. */
		resources?: Array<GoogleCloudAssuredworkloadsV1WorkloadResourceInfo>;

		/** Signed Access Approvals (SAA) enrollment response. */
		saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;

		/** Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload. */
		violationNotificationsEnabled?: boolean | null;
	}

	/** A Workload object for managing highly regulated workloads of cloud customers. */
	export interface GoogleCloudAssuredworkloadsV1WorkloadFormProperties {

		/** Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`. */
		billingAccount: FormControl<string | null | undefined>,

		/** Required. Immutable. Compliance Regime associated with this workload. */
		complianceRegime: FormControl<GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadataComplianceRegime | null | undefined>,

		/** Output only. Immutable. The Workload creation timestamp. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers. */
		enableSovereignControls: FormControl<boolean | null | undefined>,

		/** Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Represents the KAJ enrollment state of the given workload. */
		kajEnrollmentState: FormControl<GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentState | null | undefined>,

		/** Optional. Labels applied to the workload. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only. */
		name: FormControl<string | null | undefined>,

		/** Optional. Partner regime associated with this workload. */
		partner: FormControl<GoogleCloudAssuredworkloadsV1WorkloadPartner | null | undefined>,

		/** Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id} */
		provisionedResourcesParent: FormControl<string | null | undefined>,

		/** Output only. Indicates whether resource monitoring is enabled for workload or not. It is true when Resource feed is subscribed to AWM topic and AWM Service Agent Role is binded to AW Service Account for resource Assured workload. */
		resourceMonitoringEnabled: FormControl<boolean | null | undefined>,

		/** Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload. */
		violationNotificationsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1WorkloadFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1WorkloadFormProperties>({
			billingAccount: new FormControl<string | null | undefined>(undefined),
			complianceRegime: new FormControl<GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadataComplianceRegime | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enableSovereignControls: new FormControl<boolean | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			kajEnrollmentState: new FormControl<GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentState | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			partner: new FormControl<GoogleCloudAssuredworkloadsV1WorkloadPartner | null | undefined>(undefined),
			provisionedResourcesParent: new FormControl<string | null | undefined>(undefined),
			resourceMonitoringEnabled: new FormControl<boolean | null | undefined>(undefined),
			violationNotificationsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the Compliance Status of this workload */
	export interface GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus {

		/**
		 * Number of current resource violations which are not acknowledged.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		acknowledgedResourceViolationCount?: number | null;

		/**
		 * Number of current orgPolicy violations which are acknowledged.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		acknowledgedViolationCount?: number | null;

		/**
		 * Number of current resource violations which are acknowledged.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		activeResourceViolationCount?: number | null;

		/**
		 * Number of current orgPolicy violations which are not acknowledged.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		activeViolationCount?: number | null;
	}

	/** Represents the Compliance Status of this workload */
	export interface GoogleCloudAssuredworkloadsV1WorkloadComplianceStatusFormProperties {

		/**
		 * Number of current resource violations which are not acknowledged.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		acknowledgedResourceViolationCount: FormControl<number | null | undefined>,

		/**
		 * Number of current orgPolicy violations which are acknowledged.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		acknowledgedViolationCount: FormControl<number | null | undefined>,

		/**
		 * Number of current resource violations which are acknowledged.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		activeResourceViolationCount: FormControl<number | null | undefined>,

		/**
		 * Number of current orgPolicy violations which are not acknowledged.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		activeViolationCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1WorkloadComplianceStatusFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1WorkloadComplianceStatusFormProperties>({
			acknowledgedResourceViolationCount: new FormControl<number | null | undefined>(undefined),
			acknowledgedViolationCount: new FormControl<number | null | undefined>(undefined),
			activeResourceViolationCount: new FormControl<number | null | undefined>(undefined),
			activeViolationCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** External key management systems(EKM) Provisioning response */
	export interface GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse {

		/** Indicates Ekm provisioning error if any. */
		ekmProvisioningErrorDomain?: GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorDomain | null;

		/** Detailed error message if Ekm provisioning fails */
		ekmProvisioningErrorMapping?: GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorMapping | null;

		/** Indicates Ekm enrollment Provisioning of a given workload. */
		ekmProvisioningState?: GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningState | null;
	}

	/** External key management systems(EKM) Provisioning response */
	export interface GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseFormProperties {

		/** Indicates Ekm provisioning error if any. */
		ekmProvisioningErrorDomain: FormControl<GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorDomain | null | undefined>,

		/** Detailed error message if Ekm provisioning fails */
		ekmProvisioningErrorMapping: FormControl<GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorMapping | null | undefined>,

		/** Indicates Ekm enrollment Provisioning of a given workload. */
		ekmProvisioningState: FormControl<GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningState | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseFormProperties>({
			ekmProvisioningErrorDomain: new FormControl<GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorDomain | null | undefined>(undefined),
			ekmProvisioningErrorMapping: new FormControl<GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorMapping | null | undefined>(undefined),
			ekmProvisioningState: new FormControl<GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorDomain { EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED = 'EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED', UNSPECIFIED_ERROR = 'UNSPECIFIED_ERROR', GOOGLE_SERVER_ERROR = 'GOOGLE_SERVER_ERROR', EXTERNAL_USER_ERROR = 'EXTERNAL_USER_ERROR', EXTERNAL_PARTNER_ERROR = 'EXTERNAL_PARTNER_ERROR', TIMEOUT_ERROR = 'TIMEOUT_ERROR' }

	export enum GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorMapping { EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED = 'EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED', INVALID_SERVICE_ACCOUNT = 'INVALID_SERVICE_ACCOUNT', MISSING_METRICS_SCOPE_ADMIN_PERMISSION = 'MISSING_METRICS_SCOPE_ADMIN_PERMISSION', MISSING_EKM_CONNECTION_ADMIN_PERMISSION = 'MISSING_EKM_CONNECTION_ADMIN_PERMISSION' }

	export enum GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningState { EKM_PROVISIONING_STATE_UNSPECIFIED = 'EKM_PROVISIONING_STATE_UNSPECIFIED', EKM_PROVISIONING_STATE_PENDING = 'EKM_PROVISIONING_STATE_PENDING', EKM_PROVISIONING_STATE_FAILED = 'EKM_PROVISIONING_STATE_FAILED', EKM_PROVISIONING_STATE_COMPLETED = 'EKM_PROVISIONING_STATE_COMPLETED' }

	export enum GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentState { KAJ_ENROLLMENT_STATE_UNSPECIFIED = 'KAJ_ENROLLMENT_STATE_UNSPECIFIED', KAJ_ENROLLMENT_STATE_PENDING = 'KAJ_ENROLLMENT_STATE_PENDING', KAJ_ENROLLMENT_STATE_COMPLETE = 'KAJ_ENROLLMENT_STATE_COMPLETE' }


	/** Settings specific to the Key Management Service. */
	export interface GoogleCloudAssuredworkloadsV1WorkloadKMSSettings {

		/** Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary. */
		nextRotationTime?: string | null;

		/** Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. */
		rotationPeriod?: string | null;
	}

	/** Settings specific to the Key Management Service. */
	export interface GoogleCloudAssuredworkloadsV1WorkloadKMSSettingsFormProperties {

		/** Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary. */
		nextRotationTime: FormControl<string | null | undefined>,

		/** Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. */
		rotationPeriod: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1WorkloadKMSSettingsFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1WorkloadKMSSettingsFormProperties>({
			nextRotationTime: new FormControl<string | null | undefined>(undefined),
			rotationPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudAssuredworkloadsV1WorkloadPartner { PARTNER_UNSPECIFIED = 'PARTNER_UNSPECIFIED', LOCAL_CONTROLS_BY_S3NS = 'LOCAL_CONTROLS_BY_S3NS', SOVEREIGN_CONTROLS_BY_T_SYSTEMS = 'SOVEREIGN_CONTROLS_BY_T_SYSTEMS', SOVEREIGN_CONTROLS_BY_SIA_MINSAIT = 'SOVEREIGN_CONTROLS_BY_SIA_MINSAIT', SOVEREIGN_CONTROLS_BY_PSN = 'SOVEREIGN_CONTROLS_BY_PSN' }


	/** Permissions granted to the AW Partner SA account for the customer workload */
	export interface GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions {

		/** Optional. Allow partner to view violation alerts. */
		assuredWorkloadsMonitoring?: boolean | null;

		/** Allow the partner to view inspectability logs and monitoring violations. */
		dataLogsViewer?: boolean | null;

		/** Optional. Allow partner to view access approval logs. */
		serviceAccessApprover?: boolean | null;
	}

	/** Permissions granted to the AW Partner SA account for the customer workload */
	export interface GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissionsFormProperties {

		/** Optional. Allow partner to view violation alerts. */
		assuredWorkloadsMonitoring: FormControl<boolean | null | undefined>,

		/** Allow the partner to view inspectability logs and monitoring violations. */
		dataLogsViewer: FormControl<boolean | null | undefined>,

		/** Optional. Allow partner to view access approval logs. */
		serviceAccessApprover: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1WorkloadPartnerPermissionsFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissionsFormProperties>({
			assuredWorkloadsMonitoring: new FormControl<boolean | null | undefined>(undefined),
			dataLogsViewer: new FormControl<boolean | null | undefined>(undefined),
			serviceAccessApprover: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represent the custom settings for the resources to be created. */
	export interface GoogleCloudAssuredworkloadsV1WorkloadResourceSettings {

		/** User-assigned resource display name. If not empty it will be used to create a resource with the specified name. */
		displayName?: string | null;

		/** Resource identifier. For a project this represents project_id. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google. */
		resourceId?: string | null;

		/** Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) */
		resourceType?: GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceType | null;
	}

	/** Represent the custom settings for the resources to be created. */
	export interface GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsFormProperties {

		/** User-assigned resource display name. If not empty it will be used to create a resource with the specified name. */
		displayName: FormControl<string | null | undefined>,

		/** Resource identifier. For a project this represents project_id. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google. */
		resourceId: FormControl<string | null | undefined>,

		/** Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) */
		resourceType: FormControl<GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceType | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1WorkloadResourceSettingsFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceType { RESOURCE_TYPE_UNSPECIFIED = 'RESOURCE_TYPE_UNSPECIFIED', CONSUMER_PROJECT = 'CONSUMER_PROJECT', CONSUMER_FOLDER = 'CONSUMER_FOLDER', ENCRYPTION_KEYS_PROJECT = 'ENCRYPTION_KEYS_PROJECT', KEYRING = 'KEYRING' }


	/** Represent the resources that are children of this Workload. */
	export interface GoogleCloudAssuredworkloadsV1WorkloadResourceInfo {

		/** Resource identifier. For a project this represents project_number. */
		resourceId?: string | null;

		/** Indicates the type of resource. */
		resourceType?: GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceType | null;
	}

	/** Represent the resources that are children of this Workload. */
	export interface GoogleCloudAssuredworkloadsV1WorkloadResourceInfoFormProperties {

		/** Resource identifier. For a project this represents project_number. */
		resourceId: FormControl<string | null | undefined>,

		/** Indicates the type of resource. */
		resourceType: FormControl<GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceType | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1WorkloadResourceInfoFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1WorkloadResourceInfoFormProperties>({
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceType | null | undefined>(undefined),
		});

	}


	/** Signed Access Approvals (SAA) enrollment response. */
	export interface GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse {

		/** Indicates SAA enrollment setup error if any. */
		setupErrors?: Array<string>;

		/** Indicates SAA enrollment status of a given workload. */
		setupStatus?: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatus | null;
	}

	/** Signed Access Approvals (SAA) enrollment response. */
	export interface GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseFormProperties {

		/** Indicates SAA enrollment status of a given workload. */
		setupStatus: FormControl<GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatus | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseFormProperties>({
			setupStatus: new FormControl<GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatus | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatus { SETUP_STATE_UNSPECIFIED = 'SETUP_STATE_UNSPECIFIED', STATUS_PENDING = 'STATUS_PENDING', STATUS_COMPLETE = 'STATUS_COMPLETE' }


	/** Request for updating permission settings for a partner workload. */
	export interface GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest {

		/** Optional. The etag of the workload. If this is provided, it must match the server's etag. */
		etag?: string | null;

		/** Permissions granted to the AW Partner SA account for the customer workload */
		partnerPermissions?: GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions;

		/** Required. The list of fields to be updated. E.g. update_mask { paths: "partner_permissions.data_logs_viewer"} */
		updateMask?: string | null;
	}

	/** Request for updating permission settings for a partner workload. */
	export interface GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequestFormProperties {

		/** Optional. The etag of the workload. If this is provided, it must match the server's etag. */
		etag: FormControl<string | null | undefined>,

		/** Required. The list of fields to be updated. E.g. update_mask { paths: "partner_permissions.data_logs_viewer"} */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequestFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for restricting list of available resources in Workload environment. */
	export interface GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest {

		/** Required. The type of restriction for using gcp products in the Workload environment. */
		restrictionType?: GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionType | null;
	}

	/** Request for restricting list of available resources in Workload environment. */
	export interface GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestFormProperties {

		/** Required. The type of restriction for using gcp products in the Workload environment. */
		restrictionType: FormControl<GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionType | null | undefined>,
	}
	export function CreateGoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestFormProperties>({
			restrictionType: new FormControl<GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionType { RESTRICTION_TYPE_UNSPECIFIED = 'RESTRICTION_TYPE_UNSPECIFIED', ALLOW_ALL_GCP_RESOURCES = 'ALLOW_ALL_GCP_RESOURCES', ALLOW_COMPLIANT_RESOURCES = 'ALLOW_COMPLIANT_RESOURCES', APPEND_COMPLIANT_RESOURCES = 'APPEND_COMPLIANT_RESOURCES' }


	/** Response for restricting the list of allowed resources. */
	export interface GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse {
	}

	/** Response for restricting the list of allowed resources. */
	export interface GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponseFormProperties {
	}
	export function CreateGoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponseFormGroup() {
		return new FormGroup<GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponseFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error. In addition to assuredworkloads.workload.delete permission, the user should also have orgpolicy.policy.set permission on the deleted folder to remove Assured Workloads OrgPolicies.
		 * Delete v1/{name}
		 * @param {string} name Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id}
		 * @param {string} etag Optional. The etag of the workload. If this is provided, it must match the server's etag.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Assuredworkloads_organizations_locations_workloads_delete(name: string, etag: string | null | undefined): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)), {});
		}

		/**
		 * Retrieves Assured Workload Violation based on ID.
		 * Get v1/{name}
		 * @param {string} name Required. The resource name of the Violation to fetch (ie. Violation.name). Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation}
		 * @return {GoogleCloudAssuredworkloadsV1Violation} Successful response
		 */
		Assuredworkloads_organizations_locations_workloads_violations_get(name: string): Observable<GoogleCloudAssuredworkloadsV1Violation> {
			return this.http.get<GoogleCloudAssuredworkloadsV1Violation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
		 * Patch v1/{name}
		 * @param {string} name Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only.
		 * @param {string} updateMask Required. The list of fields to be updated.
		 * @return {GoogleCloudAssuredworkloadsV1Workload} Successful response
		 */
		Assuredworkloads_organizations_locations_workloads_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudAssuredworkloadsV1Workload): Observable<GoogleCloudAssuredworkloadsV1Workload> {
			return this.http.patch<GoogleCloudAssuredworkloadsV1Workload>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Assuredworkloads_organizations_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
		 * Post v1/{name}:acknowledge
		 * @param {string} name Required. The resource name of the Violation to acknowledge. Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation}
		 * @return {GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse} Successful response
		 */
		Assuredworkloads_organizations_locations_workloads_violations_acknowledge(name: string, requestBody: GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest): Observable<GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse> {
			return this.http.post<GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':acknowledge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable resource violation monitoring for a workload.
		 * Post v1/{name}:enableResourceMonitoring
		 * @param {string} name Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id}
		 * @return {GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse} Successful response
		 */
		Assuredworkloads_organizations_locations_workloads_enableResourceMonitoring(name: string): Observable<GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse> {
			return this.http.post<GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':enableResourceMonitoring', null, {});
		}

		/**
		 * Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
		 * Patch v1/{name}:mutatePartnerPermissions
		 * @param {string} name Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id}
		 * @return {GoogleCloudAssuredworkloadsV1Workload} Successful response
		 */
		Assuredworkloads_organizations_locations_workloads_mutatePartnerPermissions(name: string, requestBody: GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest): Observable<GoogleCloudAssuredworkloadsV1Workload> {
			return this.http.patch<GoogleCloudAssuredworkloadsV1Workload>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':mutatePartnerPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
		 * Post v1/{name}:restrictAllowedResources
		 * @param {string} name Required. The resource name of the Workload. This is the workloads's relative path in the API, formatted as "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".
		 * @return {GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse} Successful response
		 */
		Assuredworkloads_organizations_locations_workloads_restrictAllowedResources(name: string, requestBody: GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest): Observable<GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse> {
			return this.http.post<GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':restrictAllowedResources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`
		 * Get v1/{parent}/violations
		 * @param {string} parent Required. The Workload name. Format `organizations/{org_id}/locations/{location}/workloads/{workload}`.
		 * @param {string} filter Optional. A custom filter for filtering by the Violations properties.
		 * @param {string} interval_endTime The end of the time window.
		 * @param {string} interval_startTime The start of the time window.
		 * @param {number} pageSize Optional. Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. Page token returned from previous request.
		 * @return {GoogleCloudAssuredworkloadsV1ListViolationsResponse} Successful response
		 */
		Assuredworkloads_organizations_locations_workloads_violations_list(parent: string, filter: string | null | undefined, interval_endTime: string | null | undefined, interval_startTime: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudAssuredworkloadsV1ListViolationsResponse> {
			return this.http.get<GoogleCloudAssuredworkloadsV1ListViolationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/violations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&interval_endTime=' + (interval_endTime == null ? '' : encodeURIComponent(interval_endTime)) + '&interval_startTime=' + (interval_startTime == null ? '' : encodeURIComponent(interval_startTime)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists Assured Workloads under a CRM Node.
		 * Get v1/{parent}/workloads
		 * @param {string} parent Required. Parent Resource to list workloads from. Must be of the form `organizations/{org_id}/locations/{location}`.
		 * @param {string} filter A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests.
		 * @return {GoogleCloudAssuredworkloadsV1ListWorkloadsResponse} Successful response
		 */
		Assuredworkloads_organizations_locations_workloads_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudAssuredworkloadsV1ListWorkloadsResponse> {
			return this.http.get<GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workloads&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates Assured Workload.
		 * Post v1/{parent}/workloads
		 * @param {string} parent Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id}/locations/{location_id}`.
		 * @param {string} externalId Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the identifier will add a label to the workload and contained projects with the identifier as the value.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Assuredworkloads_organizations_locations_workloads_create(parent: string, externalId: string | null | undefined, requestBody: GoogleCloudAssuredworkloadsV1Workload): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workloads&externalId=' + (externalId == null ? '' : encodeURIComponent(externalId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Analyzes a hypothetical move of a source resource to a target workload to surface compliance risks. The analysis is best effort and is not guaranteed to be exhaustive.
		 * Get v1/{target}:analyzeWorkloadMove
		 * @param {string} target Required. The resource ID of the folder-based destination workload. This workload is where the source resource will hypothetically be moved to. Specify the workload's relative resource name, formatted as: "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-2"
		 * @param {Array<string>} assetTypes Optional. List of asset types to be analyzed, including and under the source resource. If empty, all assets are analyzed. The complete list of asset types is available [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types).
		 * @param {number} pageSize Optional. Page size. If a value is not specified, the default value of 10 is used.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. The page token from the previous response. It needs to be passed in the second and following requests.
		 * @param {string} project The source type is a project. Specify the project's relative resource name, formatted as either a project number or a project ID: "projects/{PROJECT_NUMBER}" or "projects/{PROJECT_ID}" For example: "projects/951040570662" when specifying a project number, or "projects/my-project-123" when specifying a project ID.
		 * @return {GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse} Successful response
		 */
		Assuredworkloads_organizations_locations_workloads_analyzeWorkloadMove(target: string, assetTypes: Array<string> | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, project: string | null | undefined): Observable<GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse> {
			return this.http.get<GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse>(this.baseUri + 'v1/' + (target == null ? '' : encodeURIComponent(target)) + ':analyzeWorkloadMove&' + assetTypes?.map(z => `assetTypes=${encodeURIComponent(z)}`).join('&') + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&project=' + (project == null ? '' : encodeURIComponent(project)), {});
		}
	}

}

