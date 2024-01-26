import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Specifies roles and/or permissions to analyze, to determine both the identities possessing them and the resources they control. If multiple values are specified, results will include roles or permissions matching any of them. The total number of roles and permissions should be equal or less than 10. */
	export interface AccessSelector {

		/** Optional. The permissions to appear in result. */
		permissions?: Array<string>;

		/** Optional. The roles to appear in result. */
		roles?: Array<string>;
	}

	/** Specifies roles and/or permissions to analyze, to determine both the identities possessing them and the resources they control. If multiple values are specified, results will include roles or permissions matching any of them. The total number of roles and permissions should be equal or less than 10. */
	export interface AccessSelectorFormProperties {
	}
	export function CreateAccessSelectorFormGroup() {
		return new FormGroup<AccessSelectorFormProperties>({
		});

	}


	/** Represents the metadata of the longrunning operation for the AnalyzeIamPolicyLongrunning RPC. */
	export interface AnalyzeIamPolicyLongrunningMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;
	}

	/** Represents the metadata of the longrunning operation for the AnalyzeIamPolicyLongrunning RPC. */
	export interface AnalyzeIamPolicyLongrunningMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeIamPolicyLongrunningMetadataFormGroup() {
		return new FormGroup<AnalyzeIamPolicyLongrunningMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request message for AssetService.AnalyzeIamPolicyLongrunning. */
	export interface AnalyzeIamPolicyLongrunningRequest {

		/** IAM policy analysis query message. */
		analysisQuery?: IamPolicyAnalysisQuery;

		/** Output configuration for export IAM policy analysis destination. */
		outputConfig?: IamPolicyAnalysisOutputConfig;

		/** Optional. The name of a saved query, which must be in the format of: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id If both `analysis_query` and `saved_analysis_query` are provided, they will be merged together with the `saved_analysis_query` as base and the `analysis_query` as overrides. For more details of the merge behavior, refer to the [MergeFrom](https://developers.google.com/protocol-buffers/docs/reference/cpp/google.protobuf.message#Message.MergeFrom.details) doc. Note that you cannot override primitive fields with default value, such as 0 or empty string, etc., because we use proto3, which doesn't support field presence yet. */
		savedAnalysisQuery?: string | null;
	}

	/** A request message for AssetService.AnalyzeIamPolicyLongrunning. */
	export interface AnalyzeIamPolicyLongrunningRequestFormProperties {

		/** Optional. The name of a saved query, which must be in the format of: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id If both `analysis_query` and `saved_analysis_query` are provided, they will be merged together with the `saved_analysis_query` as base and the `analysis_query` as overrides. For more details of the merge behavior, refer to the [MergeFrom](https://developers.google.com/protocol-buffers/docs/reference/cpp/google.protobuf.message#Message.MergeFrom.details) doc. Note that you cannot override primitive fields with default value, such as 0 or empty string, etc., because we use proto3, which doesn't support field presence yet. */
		savedAnalysisQuery: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeIamPolicyLongrunningRequestFormGroup() {
		return new FormGroup<AnalyzeIamPolicyLongrunningRequestFormProperties>({
			savedAnalysisQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IAM policy analysis query message. */
	export interface IamPolicyAnalysisQuery {

		/** Specifies roles and/or permissions to analyze, to determine both the identities possessing them and the resources they control. If multiple values are specified, results will include roles or permissions matching any of them. The total number of roles and permissions should be equal or less than 10. */
		accessSelector?: AccessSelector;

		/** The IAM conditions context. */
		conditionContext?: ConditionContext;

		/** Specifies an identity for which to determine resource access, based on roles assigned either directly to them or to the groups they belong to, directly or indirectly. */
		identitySelector?: IdentitySelector;

		/** Contains query options. */
		options?: Options;

		/** Specifies the resource to analyze for access policies, which may be set directly on the resource, or on ancestors such as organizations, folders or projects. */
		resourceSelector?: ResourceSelector;

		/** Required. The relative name of the root asset. Only resources and IAM policies within the scope will be analyzed. This can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"). To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id). To know how to get folder or project id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects). */
		scope?: string | null;
	}

	/** IAM policy analysis query message. */
	export interface IamPolicyAnalysisQueryFormProperties {

		/** Required. The relative name of the root asset. Only resources and IAM policies within the scope will be analyzed. This can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"). To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id). To know how to get folder or project id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects). */
		scope: FormControl<string | null | undefined>,
	}
	export function CreateIamPolicyAnalysisQueryFormGroup() {
		return new FormGroup<IamPolicyAnalysisQueryFormProperties>({
			scope: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The IAM conditions context. */
	export interface ConditionContext {

		/** The hypothetical access timestamp to evaluate IAM conditions. Note that this value must not be earlier than the current time; otherwise, an INVALID_ARGUMENT error will be returned. */
		accessTime?: string | null;
	}

	/** The IAM conditions context. */
	export interface ConditionContextFormProperties {

		/** The hypothetical access timestamp to evaluate IAM conditions. Note that this value must not be earlier than the current time; otherwise, an INVALID_ARGUMENT error will be returned. */
		accessTime: FormControl<string | null | undefined>,
	}
	export function CreateConditionContextFormGroup() {
		return new FormGroup<ConditionContextFormProperties>({
			accessTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an identity for which to determine resource access, based on roles assigned either directly to them or to the groups they belong to, directly or indirectly. */
	export interface IdentitySelector {

		/** Required. The identity appear in the form of principals in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding). The examples of supported forms are: "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com". Notice that wildcard characters (such as * and ?) are not supported. You must give a specific identity. */
		identity?: string | null;
	}

	/** Specifies an identity for which to determine resource access, based on roles assigned either directly to them or to the groups they belong to, directly or indirectly. */
	export interface IdentitySelectorFormProperties {

		/** Required. The identity appear in the form of principals in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding). The examples of supported forms are: "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com". Notice that wildcard characters (such as * and ?) are not supported. You must give a specific identity. */
		identity: FormControl<string | null | undefined>,
	}
	export function CreateIdentitySelectorFormGroup() {
		return new FormGroup<IdentitySelectorFormProperties>({
			identity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains query options. */
	export interface Options {

		/** Optional. If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. We highly recommend you use AssetService.AnalyzeIamPolicyLongrunning RPC instead. For example, if the request analyzes for which resources user A has permission P, and there's an IAM policy states user A has iam.serviceAccounts.getAccessToken permission to a service account SA, and there's another IAM policy states service account SA has permission P to a Google Cloud folder F, then user A potentially has access to the Google Cloud folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis. Another example, if the request analyzes for who has permission P to a Google Cloud folder F, and there's an IAM policy states user A has iam.serviceAccounts.actAs permission to a service account SA, and there's another IAM policy states service account SA has permission P to the Google Cloud folder F, then user A potentially has access to the Google Cloud folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis. Only the following permissions are considered in this analysis: * `iam.serviceAccounts.actAs` * `iam.serviceAccounts.signBlob` * `iam.serviceAccounts.signJwt` * `iam.serviceAccounts.getAccessToken` * `iam.serviceAccounts.getOpenIdToken` * `iam.serviceAccounts.implicitDelegation` Default is false. */
		analyzeServiceAccountImpersonation?: boolean | null;

		/** Optional. If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding. If IamPolicyAnalysisQuery.identity_selector is specified, the identity in the result will be determined by the selector, and this flag is not allowed to set. If true, the default max expansion per group is 1000 for AssetService.AnalyzeIamPolicy][]. Default is false. */
		expandGroups?: boolean | null;

		/** Optional. If true and IamPolicyAnalysisQuery.resource_selector is not specified, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy. For example, if the request analyzes for which resources user A has permission P, and the results include an IAM policy with P on a Google Cloud folder, the results will also include resources in that folder with permission P. If true and IamPolicyAnalysisQuery.resource_selector is specified, the resource section of the result will expand the specified resource to include resources lower in the resource hierarchy. Only project or lower resources are supported. Folder and organization resources cannot be used together with this option. For example, if the request analyzes for which users have permission P on a Google Cloud project with this option enabled, the results will include all users who have permission P on that project or any lower resource. If true, the default max expansion per resource is 1000 for AssetService.AnalyzeIamPolicy][] and 100000 for AssetService.AnalyzeIamPolicyLongrunning][]. Default is false. */
		expandResources?: boolean | null;

		/** Optional. If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions. If IamPolicyAnalysisQuery.access_selector is specified, the access section of the result will be determined by the selector, and this flag is not allowed to set. Default is false. */
		expandRoles?: boolean | null;

		/** Optional. If true, the result will output the relevant membership relationships between groups and other groups, and between groups and principals. Default is false. */
		outputGroupEdges?: boolean | null;

		/** Optional. If true, the result will output the relevant parent/child relationships between resources. Default is false. */
		outputResourceEdges?: boolean | null;
	}

	/** Contains query options. */
	export interface OptionsFormProperties {

		/** Optional. If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. We highly recommend you use AssetService.AnalyzeIamPolicyLongrunning RPC instead. For example, if the request analyzes for which resources user A has permission P, and there's an IAM policy states user A has iam.serviceAccounts.getAccessToken permission to a service account SA, and there's another IAM policy states service account SA has permission P to a Google Cloud folder F, then user A potentially has access to the Google Cloud folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis. Another example, if the request analyzes for who has permission P to a Google Cloud folder F, and there's an IAM policy states user A has iam.serviceAccounts.actAs permission to a service account SA, and there's another IAM policy states service account SA has permission P to the Google Cloud folder F, then user A potentially has access to the Google Cloud folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis. Only the following permissions are considered in this analysis: * `iam.serviceAccounts.actAs` * `iam.serviceAccounts.signBlob` * `iam.serviceAccounts.signJwt` * `iam.serviceAccounts.getAccessToken` * `iam.serviceAccounts.getOpenIdToken` * `iam.serviceAccounts.implicitDelegation` Default is false. */
		analyzeServiceAccountImpersonation: FormControl<boolean | null | undefined>,

		/** Optional. If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding. If IamPolicyAnalysisQuery.identity_selector is specified, the identity in the result will be determined by the selector, and this flag is not allowed to set. If true, the default max expansion per group is 1000 for AssetService.AnalyzeIamPolicy][]. Default is false. */
		expandGroups: FormControl<boolean | null | undefined>,

		/** Optional. If true and IamPolicyAnalysisQuery.resource_selector is not specified, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy. For example, if the request analyzes for which resources user A has permission P, and the results include an IAM policy with P on a Google Cloud folder, the results will also include resources in that folder with permission P. If true and IamPolicyAnalysisQuery.resource_selector is specified, the resource section of the result will expand the specified resource to include resources lower in the resource hierarchy. Only project or lower resources are supported. Folder and organization resources cannot be used together with this option. For example, if the request analyzes for which users have permission P on a Google Cloud project with this option enabled, the results will include all users who have permission P on that project or any lower resource. If true, the default max expansion per resource is 1000 for AssetService.AnalyzeIamPolicy][] and 100000 for AssetService.AnalyzeIamPolicyLongrunning][]. Default is false. */
		expandResources: FormControl<boolean | null | undefined>,

		/** Optional. If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions. If IamPolicyAnalysisQuery.access_selector is specified, the access section of the result will be determined by the selector, and this flag is not allowed to set. Default is false. */
		expandRoles: FormControl<boolean | null | undefined>,

		/** Optional. If true, the result will output the relevant membership relationships between groups and other groups, and between groups and principals. Default is false. */
		outputGroupEdges: FormControl<boolean | null | undefined>,

		/** Optional. If true, the result will output the relevant parent/child relationships between resources. Default is false. */
		outputResourceEdges: FormControl<boolean | null | undefined>,
	}
	export function CreateOptionsFormGroup() {
		return new FormGroup<OptionsFormProperties>({
			analyzeServiceAccountImpersonation: new FormControl<boolean | null | undefined>(undefined),
			expandGroups: new FormControl<boolean | null | undefined>(undefined),
			expandResources: new FormControl<boolean | null | undefined>(undefined),
			expandRoles: new FormControl<boolean | null | undefined>(undefined),
			outputGroupEdges: new FormControl<boolean | null | undefined>(undefined),
			outputResourceEdges: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the resource to analyze for access policies, which may be set directly on the resource, or on ancestors such as organizations, folders or projects. */
	export interface ResourceSelector {

		/** Required. The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of a resource of [supported resource types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#analyzable_asset_types). */
		fullResourceName?: string | null;
	}

	/** Specifies the resource to analyze for access policies, which may be set directly on the resource, or on ancestors such as organizations, folders or projects. */
	export interface ResourceSelectorFormProperties {

		/** Required. The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of a resource of [supported resource types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#analyzable_asset_types). */
		fullResourceName: FormControl<string | null | undefined>,
	}
	export function CreateResourceSelectorFormGroup() {
		return new FormGroup<ResourceSelectorFormProperties>({
			fullResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output configuration for export IAM policy analysis destination. */
	export interface IamPolicyAnalysisOutputConfig {

		/** A BigQuery destination. */
		bigqueryDestination?: GoogleCloudAssetV1BigQueryDestination;

		/** A Cloud Storage location. */
		gcsDestination?: GoogleCloudAssetV1GcsDestination;
	}

	/** Output configuration for export IAM policy analysis destination. */
	export interface IamPolicyAnalysisOutputConfigFormProperties {
	}
	export function CreateIamPolicyAnalysisOutputConfigFormGroup() {
		return new FormGroup<IamPolicyAnalysisOutputConfigFormProperties>({
		});

	}


	/** A BigQuery destination. */
	export interface GoogleCloudAssetV1BigQueryDestination {

		/** Required. The BigQuery dataset in format "projects/projectId/datasets/datasetId", to which the analysis results should be exported. If this dataset does not exist, the export call will return an INVALID_ARGUMENT error. */
		dataset?: string | null;

		/** The partition key for BigQuery partitioned table. */
		partitionKey?: GoogleCloudAssetV1BigQueryDestinationPartitionKey | null;

		/** Required. The prefix of the BigQuery tables to which the analysis results will be written. Tables will be created based on this table_prefix if not exist: * _analysis table will contain export operation's metadata. * _analysis_result will contain all the IamPolicyAnalysisResult. When [partition_key] is specified, both tables will be partitioned based on the [partition_key]. */
		tablePrefix?: string | null;

		/** Optional. Specifies the action that occurs if the destination table or partition already exists. The following values are supported: * WRITE_TRUNCATE: If the table or partition already exists, BigQuery overwrites the entire table or all the partitions data. * WRITE_APPEND: If the table or partition already exists, BigQuery appends the data to the table or the latest partition. * WRITE_EMPTY: If the table already exists and contains data, an error is returned. The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Details are at https://cloud.google.com/bigquery/docs/loading-data-local#appending_to_or_overwriting_a_table_using_a_local_file. */
		writeDisposition?: string | null;
	}

	/** A BigQuery destination. */
	export interface GoogleCloudAssetV1BigQueryDestinationFormProperties {

		/** Required. The BigQuery dataset in format "projects/projectId/datasets/datasetId", to which the analysis results should be exported. If this dataset does not exist, the export call will return an INVALID_ARGUMENT error. */
		dataset: FormControl<string | null | undefined>,

		/** The partition key for BigQuery partitioned table. */
		partitionKey: FormControl<GoogleCloudAssetV1BigQueryDestinationPartitionKey | null | undefined>,

		/** Required. The prefix of the BigQuery tables to which the analysis results will be written. Tables will be created based on this table_prefix if not exist: * _analysis table will contain export operation's metadata. * _analysis_result will contain all the IamPolicyAnalysisResult. When [partition_key] is specified, both tables will be partitioned based on the [partition_key]. */
		tablePrefix: FormControl<string | null | undefined>,

		/** Optional. Specifies the action that occurs if the destination table or partition already exists. The following values are supported: * WRITE_TRUNCATE: If the table or partition already exists, BigQuery overwrites the entire table or all the partitions data. * WRITE_APPEND: If the table or partition already exists, BigQuery appends the data to the table or the latest partition. * WRITE_EMPTY: If the table already exists and contains data, an error is returned. The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Details are at https://cloud.google.com/bigquery/docs/loading-data-local#appending_to_or_overwriting_a_table_using_a_local_file. */
		writeDisposition: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1BigQueryDestinationFormGroup() {
		return new FormGroup<GoogleCloudAssetV1BigQueryDestinationFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			partitionKey: new FormControl<GoogleCloudAssetV1BigQueryDestinationPartitionKey | null | undefined>(undefined),
			tablePrefix: new FormControl<string | null | undefined>(undefined),
			writeDisposition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudAssetV1BigQueryDestinationPartitionKey { PARTITION_KEY_UNSPECIFIED = 0, REQUEST_TIME = 1 }


	/** A Cloud Storage location. */
	export interface GoogleCloudAssetV1GcsDestination {

		/** Required. The URI of the Cloud Storage object. It's the same URI that is used by gsutil. Example: "gs://bucket_name/object_name". See [Viewing and Editing Object Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata) for more information. If the specified Cloud Storage object already exists and there is no [hold](https://cloud.google.com/storage/docs/object-holds), it will be overwritten with the analysis result. */
		uri?: string | null;
	}

	/** A Cloud Storage location. */
	export interface GoogleCloudAssetV1GcsDestinationFormProperties {

		/** Required. The URI of the Cloud Storage object. It's the same URI that is used by gsutil. Example: "gs://bucket_name/object_name". See [Viewing and Editing Object Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata) for more information. If the specified Cloud Storage object already exists and there is no [hold](https://cloud.google.com/storage/docs/object-holds), it will be overwritten with the analysis result. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudAssetV1GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response message for AssetService.AnalyzeIamPolicyLongrunning. */
	export interface AnalyzeIamPolicyLongrunningResponse {
	}

	/** A response message for AssetService.AnalyzeIamPolicyLongrunning. */
	export interface AnalyzeIamPolicyLongrunningResponseFormProperties {
	}
	export function CreateAnalyzeIamPolicyLongrunningResponseFormGroup() {
		return new FormGroup<AnalyzeIamPolicyLongrunningResponseFormProperties>({
		});

	}


	/** A response message for AssetService.AnalyzeIamPolicy. */
	export interface AnalyzeIamPolicyResponse {

		/** Represents whether all entries in the main_analysis and service_account_impersonation_analysis have been fully explored to answer the query in the request. */
		fullyExplored?: boolean | null;

		/** An analysis message to group the query and results. */
		mainAnalysis?: IamPolicyAnalysis;

		/** The service account impersonation analysis if AnalyzeIamPolicyRequest.analyze_service_account_impersonation is enabled. */
		serviceAccountImpersonationAnalysis?: Array<IamPolicyAnalysis>;
	}

	/** A response message for AssetService.AnalyzeIamPolicy. */
	export interface AnalyzeIamPolicyResponseFormProperties {

		/** Represents whether all entries in the main_analysis and service_account_impersonation_analysis have been fully explored to answer the query in the request. */
		fullyExplored: FormControl<boolean | null | undefined>,
	}
	export function CreateAnalyzeIamPolicyResponseFormGroup() {
		return new FormGroup<AnalyzeIamPolicyResponseFormProperties>({
			fullyExplored: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An analysis message to group the query and results. */
	export interface IamPolicyAnalysis {

		/** IAM policy analysis query message. */
		analysisQuery?: IamPolicyAnalysisQuery;

		/** A list of IamPolicyAnalysisResult that matches the analysis query, or empty if no result is found. */
		analysisResults?: Array<IamPolicyAnalysisResult>;

		/** Represents whether all entries in the analysis_results have been fully explored to answer the query. */
		fullyExplored?: boolean | null;

		/** A list of non-critical errors happened during the query handling. */
		nonCriticalErrors?: Array<IamPolicyAnalysisState>;
	}

	/** An analysis message to group the query and results. */
	export interface IamPolicyAnalysisFormProperties {

		/** Represents whether all entries in the analysis_results have been fully explored to answer the query. */
		fullyExplored: FormControl<boolean | null | undefined>,
	}
	export function CreateIamPolicyAnalysisFormGroup() {
		return new FormGroup<IamPolicyAnalysisFormProperties>({
			fullyExplored: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists. */
	export interface IamPolicyAnalysisResult {

		/** The access control lists derived from the iam_binding that match or potentially match resource and access selectors specified in the request. */
		accessControlLists?: Array<GoogleCloudAssetV1AccessControlList>;

		/** The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of the resource to which the iam_binding policy attaches. */
		attachedResourceFullName?: string | null;

		/** Represents whether all analyses on the iam_binding have successfully finished. */
		fullyExplored?: boolean | null;

		/** Associates `members`, or principals, with a `role`. */
		iamBinding?: Binding;

		/** The identities and group edges. */
		identityList?: GoogleCloudAssetV1IdentityList;
	}

	/** IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists. */
	export interface IamPolicyAnalysisResultFormProperties {

		/** The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of the resource to which the iam_binding policy attaches. */
		attachedResourceFullName: FormControl<string | null | undefined>,

		/** Represents whether all analyses on the iam_binding have successfully finished. */
		fullyExplored: FormControl<boolean | null | undefined>,
	}
	export function CreateIamPolicyAnalysisResultFormGroup() {
		return new FormGroup<IamPolicyAnalysisResultFormProperties>({
			attachedResourceFullName: new FormControl<string | null | undefined>(undefined),
			fullyExplored: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An access control list, derived from the above IAM policy binding, which contains a set of resources and accesses. May include one item from each set to compose an access control entry. NOTICE that there could be multiple access control lists for one IAM policy binding. The access control lists are created based on resource and access combinations. For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3] */
	export interface GoogleCloudAssetV1AccessControlList {

		/** The accesses that match one of the following conditions: - The access_selector, if it is specified in request; - Otherwise, access specifiers reachable from the policy binding's role. */
		accesses?: Array<GoogleCloudAssetV1Access>;

		/** The Condition evaluation. */
		conditionEvaluation?: ConditionEvaluation;

		/** Resource edges of the graph starting from the policy attached resource to any descendant resources. The Edge.source_node contains the full resource name of a parent resource and Edge.target_node contains the full resource name of a child resource. This field is present only if the output_resource_edges option is enabled in request. */
		resourceEdges?: Array<GoogleCloudAssetV1Edge>;

		/** The resources that match one of the following conditions: - The resource_selector, if it is specified in request; - Otherwise, resources reachable from the policy attached resource. */
		resources?: Array<GoogleCloudAssetV1Resource>;
	}

	/** An access control list, derived from the above IAM policy binding, which contains a set of resources and accesses. May include one item from each set to compose an access control entry. NOTICE that there could be multiple access control lists for one IAM policy binding. The access control lists are created based on resource and access combinations. For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3] */
	export interface GoogleCloudAssetV1AccessControlListFormProperties {
	}
	export function CreateGoogleCloudAssetV1AccessControlListFormGroup() {
		return new FormGroup<GoogleCloudAssetV1AccessControlListFormProperties>({
		});

	}


	/** An IAM role or permission under analysis. */
	export interface GoogleCloudAssetV1Access {

		/** Represents the detailed state of an entity under analysis, such as a resource, an identity or an access. */
		analysisState?: IamPolicyAnalysisState;

		/** The permission. */
		permission?: string | null;

		/** The role. */
		role?: string | null;
	}

	/** An IAM role or permission under analysis. */
	export interface GoogleCloudAssetV1AccessFormProperties {

		/** The permission. */
		permission: FormControl<string | null | undefined>,

		/** The role. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1AccessFormGroup() {
		return new FormGroup<GoogleCloudAssetV1AccessFormProperties>({
			permission: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the detailed state of an entity under analysis, such as a resource, an identity or an access. */
	export interface IamPolicyAnalysisState {

		/** The human-readable description of the cause of failure. */
		cause?: string | null;

		/** The Google standard error code that best describes the state. For example: - OK means the analysis on this entity has been successfully finished; - PERMISSION_DENIED means an access denied error is encountered; - DEADLINE_EXCEEDED means the analysis on this entity hasn't been started in time; */
		code?: IamPolicyAnalysisStateCode | null;
	}

	/** Represents the detailed state of an entity under analysis, such as a resource, an identity or an access. */
	export interface IamPolicyAnalysisStateFormProperties {

		/** The human-readable description of the cause of failure. */
		cause: FormControl<string | null | undefined>,

		/** The Google standard error code that best describes the state. For example: - OK means the analysis on this entity has been successfully finished; - PERMISSION_DENIED means an access denied error is encountered; - DEADLINE_EXCEEDED means the analysis on this entity hasn't been started in time; */
		code: FormControl<IamPolicyAnalysisStateCode | null | undefined>,
	}
	export function CreateIamPolicyAnalysisStateFormGroup() {
		return new FormGroup<IamPolicyAnalysisStateFormProperties>({
			cause: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<IamPolicyAnalysisStateCode | null | undefined>(undefined),
		});

	}

	export enum IamPolicyAnalysisStateCode { OK = 0, CANCELLED = 1, UNKNOWN = 2, INVALID_ARGUMENT = 3, DEADLINE_EXCEEDED = 4, NOT_FOUND = 5, ALREADY_EXISTS = 6, PERMISSION_DENIED = 7, UNAUTHENTICATED = 8, RESOURCE_EXHAUSTED = 9, FAILED_PRECONDITION = 10, ABORTED = 11, OUT_OF_RANGE = 12, UNIMPLEMENTED = 13, INTERNAL = 14, UNAVAILABLE = 15, DATA_LOSS = 16 }


	/** The Condition evaluation. */
	export interface ConditionEvaluation {

		/** The evaluation result. */
		evaluationValue?: ConditionEvaluationEvaluationValue | null;
	}

	/** The Condition evaluation. */
	export interface ConditionEvaluationFormProperties {

		/** The evaluation result. */
		evaluationValue: FormControl<ConditionEvaluationEvaluationValue | null | undefined>,
	}
	export function CreateConditionEvaluationFormGroup() {
		return new FormGroup<ConditionEvaluationFormProperties>({
			evaluationValue: new FormControl<ConditionEvaluationEvaluationValue | null | undefined>(undefined),
		});

	}

	export enum ConditionEvaluationEvaluationValue { EVALUATION_VALUE_UNSPECIFIED = 0, TRUE = 1, FALSE = 2, CONDITIONAL = 3 }


	/** A directional edge. */
	export interface GoogleCloudAssetV1Edge {

		/** The source node of the edge. For example, it could be a full resource name for a resource node or an email of an identity. */
		sourceNode?: string | null;

		/** The target node of the edge. For example, it could be a full resource name for a resource node or an email of an identity. */
		targetNode?: string | null;
	}

	/** A directional edge. */
	export interface GoogleCloudAssetV1EdgeFormProperties {

		/** The source node of the edge. For example, it could be a full resource name for a resource node or an email of an identity. */
		sourceNode: FormControl<string | null | undefined>,

		/** The target node of the edge. For example, it could be a full resource name for a resource node or an email of an identity. */
		targetNode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1EdgeFormGroup() {
		return new FormGroup<GoogleCloudAssetV1EdgeFormProperties>({
			sourceNode: new FormControl<string | null | undefined>(undefined),
			targetNode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Google Cloud resource under analysis. */
	export interface GoogleCloudAssetV1Resource {

		/** Represents the detailed state of an entity under analysis, such as a resource, an identity or an access. */
		analysisState?: IamPolicyAnalysisState;

		/** The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) */
		fullResourceName?: string | null;
	}

	/** A Google Cloud resource under analysis. */
	export interface GoogleCloudAssetV1ResourceFormProperties {

		/** The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) */
		fullResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1ResourceFormGroup() {
		return new FormGroup<GoogleCloudAssetV1ResourceFormProperties>({
			fullResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface Expr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface ExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateExprFormGroup() {
		return new FormGroup<ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The identities and group edges. */
	export interface GoogleCloudAssetV1IdentityList {

		/** Group identity edges of the graph starting from the binding's group members to any node of the identities. The Edge.source_node contains a group, such as `group:parent@google.com`. The Edge.target_node contains a member of the group, such as `group:child@google.com` or `user:foo@google.com`. This field is present only if the output_group_edges option is enabled in request. */
		groupEdges?: Array<GoogleCloudAssetV1Edge>;

		/** Only the identities that match one of the following conditions will be presented: - The identity_selector, if it is specified in request; - Otherwise, identities reachable from the policy binding's members. */
		identities?: Array<GoogleCloudAssetV1Identity>;
	}

	/** The identities and group edges. */
	export interface GoogleCloudAssetV1IdentityListFormProperties {
	}
	export function CreateGoogleCloudAssetV1IdentityListFormGroup() {
		return new FormGroup<GoogleCloudAssetV1IdentityListFormProperties>({
		});

	}


	/** An identity under analysis. */
	export interface GoogleCloudAssetV1Identity {

		/** Represents the detailed state of an entity under analysis, such as a resource, an identity or an access. */
		analysisState?: IamPolicyAnalysisState;

		/** The identity of members, formatted as appear in an [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding). For example, they might be formatted like the following: - user:foo@google.com - group:group1@google.com - serviceAccount:s1@prj1.iam.gserviceaccount.com - projectOwner:some_project_id - domain:google.com - allUsers */
		name?: string | null;
	}

	/** An identity under analysis. */
	export interface GoogleCloudAssetV1IdentityFormProperties {

		/** The identity of members, formatted as appear in an [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding). For example, they might be formatted like the following: - user:foo@google.com - group:group1@google.com - serviceAccount:s1@prj1.iam.gserviceaccount.com - projectOwner:some_project_id - domain:google.com - allUsers */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1IdentityFormGroup() {
		return new FormGroup<GoogleCloudAssetV1IdentityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for resource move analysis. */
	export interface AnalyzeMoveResponse {

		/** The list of analyses returned from performing the intended resource move analysis. The analysis is grouped by different Google Cloud services. */
		moveAnalysis?: Array<MoveAnalysis>;
	}

	/** The response message for resource move analysis. */
	export interface AnalyzeMoveResponseFormProperties {
	}
	export function CreateAnalyzeMoveResponseFormGroup() {
		return new FormGroup<AnalyzeMoveResponseFormProperties>({
		});

	}


	/** A message to group the analysis information. */
	export interface MoveAnalysis {

		/** An analysis result including blockers and warnings. */
		analysis?: MoveAnalysisResult;

		/** The user friendly display name of the analysis. E.g. IAM, organization policy etc. */
		displayName?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;
	}

	/** A message to group the analysis information. */
	export interface MoveAnalysisFormProperties {

		/** The user friendly display name of the analysis. E.g. IAM, organization policy etc. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateMoveAnalysisFormGroup() {
		return new FormGroup<MoveAnalysisFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An analysis result including blockers and warnings. */
	export interface MoveAnalysisResult {

		/** Blocking information that would prevent the target resource from moving to the specified destination at runtime. */
		blockers?: Array<MoveImpact>;

		/** Warning information indicating that moving the target resource to the specified destination might be unsafe. This can include important policy information and configuration changes, but will not block moves at runtime. */
		warnings?: Array<MoveImpact>;
	}

	/** An analysis result including blockers and warnings. */
	export interface MoveAnalysisResultFormProperties {
	}
	export function CreateMoveAnalysisResultFormGroup() {
		return new FormGroup<MoveAnalysisResultFormProperties>({
		});

	}


	/** A message to group impacts of moving the target resource. */
	export interface MoveImpact {

		/** User friendly impact detail in a free form message. */
		detail?: string | null;
	}

	/** A message to group impacts of moving the target resource. */
	export interface MoveImpactFormProperties {

		/** User friendly impact detail in a free form message. */
		detail: FormControl<string | null | undefined>,
	}
	export function CreateMoveImpactFormGroup() {
		return new FormGroup<MoveImpactFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for AssetService.AnalyzeOrgPolicies. */
	export interface AnalyzeOrgPoliciesResponse {

		/** The organization policy constraint definition. */
		constraint?: AnalyzerOrgPolicyConstraint;

		/** The page token to fetch the next page for AnalyzeOrgPoliciesResponse.org_policy_results. */
		nextPageToken?: string | null;

		/** The organization policies under the AnalyzeOrgPoliciesRequest.scope with the AnalyzeOrgPoliciesRequest.constraint. */
		orgPolicyResults?: Array<OrgPolicyResult>;
	}

	/** The response message for AssetService.AnalyzeOrgPolicies. */
	export interface AnalyzeOrgPoliciesResponseFormProperties {

		/** The page token to fetch the next page for AnalyzeOrgPoliciesResponse.org_policy_results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeOrgPoliciesResponseFormGroup() {
		return new FormGroup<AnalyzeOrgPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The organization policy constraint definition. */
	export interface AnalyzerOrgPolicyConstraint {

		/** The definition of a custom constraint. */
		customConstraint?: GoogleCloudAssetV1CustomConstraint;

		/** The definition of a constraint. */
		googleDefinedConstraint?: GoogleCloudAssetV1Constraint;
	}

	/** The organization policy constraint definition. */
	export interface AnalyzerOrgPolicyConstraintFormProperties {
	}
	export function CreateAnalyzerOrgPolicyConstraintFormGroup() {
		return new FormGroup<AnalyzerOrgPolicyConstraintFormProperties>({
		});

	}


	/** The definition of a custom constraint. */
	export interface GoogleCloudAssetV1CustomConstraint {

		/** Allow or deny type. */
		actionType?: GoogleCloudAssetV1CustomConstraintActionType | null;

		/** Organization Policy condition/expression. For example: `resource.instanceName.matches("[production|test]_.*_(\d)+")'` or, `resource.management.auto_upgrade == true` */
		condition?: string | null;

		/** Detailed information about this custom policy constraint. */
		description?: string | null;

		/** One line display name for the UI. */
		displayName?: string | null;

		/** All the operations being applied for this constraint. */
		methodTypes?: Array<string>;

		/** Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example : "organizations/123/customConstraints/custom.createOnlyE2TypeVms" */
		name?: string | null;

		/** The Resource Instance type on which this policy applies to. Format will be of the form : "/" Example: * `compute.googleapis.com/Instance`. */
		resourceTypes?: Array<string>;
	}

	/** The definition of a custom constraint. */
	export interface GoogleCloudAssetV1CustomConstraintFormProperties {

		/** Allow or deny type. */
		actionType: FormControl<GoogleCloudAssetV1CustomConstraintActionType | null | undefined>,

		/** Organization Policy condition/expression. For example: `resource.instanceName.matches("[production|test]_.*_(\d)+")'` or, `resource.management.auto_upgrade == true` */
		condition: FormControl<string | null | undefined>,

		/** Detailed information about this custom policy constraint. */
		description: FormControl<string | null | undefined>,

		/** One line display name for the UI. */
		displayName: FormControl<string | null | undefined>,

		/** Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example : "organizations/123/customConstraints/custom.createOnlyE2TypeVms" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1CustomConstraintFormGroup() {
		return new FormGroup<GoogleCloudAssetV1CustomConstraintFormProperties>({
			actionType: new FormControl<GoogleCloudAssetV1CustomConstraintActionType | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudAssetV1CustomConstraintActionType { ACTION_TYPE_UNSPECIFIED = 0, ALLOW = 1, DENY = 2 }


	/** The definition of a constraint. */
	export interface GoogleCloudAssetV1Constraint {

		/** A `Constraint` that is either enforced or not. For example a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance. */
		booleanConstraint?: GoogleCloudAssetV1BooleanConstraint;

		/** The evaluation behavior of this constraint in the absence of 'Policy'. */
		constraintDefault?: GoogleCloudAssetV1ConstraintConstraintDefault | null;

		/** Detailed description of what this `Constraint` controls as well as how and where it is enforced. */
		description?: string | null;

		/** The human readable name of the constraint. */
		displayName?: string | null;

		/** A `Constraint` that allows or disallows a list of string values, which are configured by an organization's policy administrator with a `Policy`. */
		listConstraint?: GoogleCloudAssetV1ListConstraint;

		/** The unique name of the constraint. Format of the name should be * `constraints/{constraint_name}` For example, `constraints/compute.disableSerialPortAccess`. */
		name?: string | null;
	}

	/** The definition of a constraint. */
	export interface GoogleCloudAssetV1ConstraintFormProperties {

		/** The evaluation behavior of this constraint in the absence of 'Policy'. */
		constraintDefault: FormControl<GoogleCloudAssetV1ConstraintConstraintDefault | null | undefined>,

		/** Detailed description of what this `Constraint` controls as well as how and where it is enforced. */
		description: FormControl<string | null | undefined>,

		/** The human readable name of the constraint. */
		displayName: FormControl<string | null | undefined>,

		/** The unique name of the constraint. Format of the name should be * `constraints/{constraint_name}` For example, `constraints/compute.disableSerialPortAccess`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1ConstraintFormGroup() {
		return new FormGroup<GoogleCloudAssetV1ConstraintFormProperties>({
			constraintDefault: new FormControl<GoogleCloudAssetV1ConstraintConstraintDefault | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `Constraint` that is either enforced or not. For example a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance. */
	export interface GoogleCloudAssetV1BooleanConstraint {
	}

	/** A `Constraint` that is either enforced or not. For example a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance. */
	export interface GoogleCloudAssetV1BooleanConstraintFormProperties {
	}
	export function CreateGoogleCloudAssetV1BooleanConstraintFormGroup() {
		return new FormGroup<GoogleCloudAssetV1BooleanConstraintFormProperties>({
		});

	}

	export enum GoogleCloudAssetV1ConstraintConstraintDefault { CONSTRAINT_DEFAULT_UNSPECIFIED = 0, ALLOW = 1, DENY = 2 }


	/** A `Constraint` that allows or disallows a list of string values, which are configured by an organization's policy administrator with a `Policy`. */
	export interface GoogleCloudAssetV1ListConstraint {

		/** Indicates whether values grouped into categories can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"in:Python"` would match any value in the 'Python' group. */
		supportsIn?: boolean | null;

		/** Indicates whether subtrees of Cloud Resource Manager resource hierarchy can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"under:folders/123"` would match any resource under the 'folders/123' folder. */
		supportsUnder?: boolean | null;
	}

	/** A `Constraint` that allows or disallows a list of string values, which are configured by an organization's policy administrator with a `Policy`. */
	export interface GoogleCloudAssetV1ListConstraintFormProperties {

		/** Indicates whether values grouped into categories can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"in:Python"` would match any value in the 'Python' group. */
		supportsIn: FormControl<boolean | null | undefined>,

		/** Indicates whether subtrees of Cloud Resource Manager resource hierarchy can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"under:folders/123"` would match any resource under the 'folders/123' folder. */
		supportsUnder: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1ListConstraintFormGroup() {
		return new FormGroup<GoogleCloudAssetV1ListConstraintFormProperties>({
			supportsIn: new FormControl<boolean | null | undefined>(undefined),
			supportsUnder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The organization policy result to the query. */
	export interface OrgPolicyResult {

		/** This organization policy message is a modified version of the one defined in the Organization Policy system. This message contains several fields defined in the original organization policy with some new fields for analysis purpose. */
		consolidatedPolicy?: AnalyzerOrgPolicy;

		/** The ordered list of all organization policies from the AnalyzeOrgPoliciesResponse.OrgPolicyResult.consolidated_policy.attached_resource. to the scope specified in the request. If the constraint is defined with default policy, it will also appear in the list. */
		policyBundle?: Array<AnalyzerOrgPolicy>;
	}

	/** The organization policy result to the query. */
	export interface OrgPolicyResultFormProperties {
	}
	export function CreateOrgPolicyResultFormGroup() {
		return new FormGroup<OrgPolicyResultFormProperties>({
		});

	}


	/** This organization policy message is a modified version of the one defined in the Organization Policy system. This message contains several fields defined in the original organization policy with some new fields for analysis purpose. */
	export interface AnalyzerOrgPolicy {

		/** The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of an organization/folder/project resource where this organization policy applies to. For any user defined org policies, this field has the same value as the [attached_resource] field. Only for default policy, this field has the different value. */
		appliedResource?: string | null;

		/** The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of an organization/folder/project resource where this organization policy is set. Notice that some type of constraints are defined with default policy. This field will be empty for them. */
		attachedResource?: string | null;

		/** If `inherit_from_parent` is true, Rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the effective root for evaluation. */
		inheritFromParent?: boolean | null;

		/** Ignores policies set above this resource and restores the default behavior of the constraint at this resource. This field can be set in policies for either list or boolean constraints. If set, `rules` must be empty and `inherit_from_parent` must be set to false. */
		reset?: boolean | null;

		/** List of rules for this organization policy. */
		rules?: Array<GoogleCloudAssetV1Rule>;
	}

	/** This organization policy message is a modified version of the one defined in the Organization Policy system. This message contains several fields defined in the original organization policy with some new fields for analysis purpose. */
	export interface AnalyzerOrgPolicyFormProperties {

		/** The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of an organization/folder/project resource where this organization policy applies to. For any user defined org policies, this field has the same value as the [attached_resource] field. Only for default policy, this field has the different value. */
		appliedResource: FormControl<string | null | undefined>,

		/** The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of an organization/folder/project resource where this organization policy is set. Notice that some type of constraints are defined with default policy. This field will be empty for them. */
		attachedResource: FormControl<string | null | undefined>,

		/** If `inherit_from_parent` is true, Rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the effective root for evaluation. */
		inheritFromParent: FormControl<boolean | null | undefined>,

		/** Ignores policies set above this resource and restores the default behavior of the constraint at this resource. This field can be set in policies for either list or boolean constraints. If set, `rules` must be empty and `inherit_from_parent` must be set to false. */
		reset: FormControl<boolean | null | undefined>,
	}
	export function CreateAnalyzerOrgPolicyFormGroup() {
		return new FormGroup<AnalyzerOrgPolicyFormProperties>({
			appliedResource: new FormControl<string | null | undefined>(undefined),
			attachedResource: new FormControl<string | null | undefined>(undefined),
			inheritFromParent: new FormControl<boolean | null | undefined>(undefined),
			reset: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** This rule message is a customized version of the one defined in the Organization Policy system. In addition to the fields defined in the original organization policy, it contains additional field(s) under specific circumstances to support analysis results. */
	export interface GoogleCloudAssetV1Rule {

		/** Setting this to true means that all values are allowed. This field can be set only in Policies for list constraints. */
		allowAll?: boolean | null;

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Setting this to true means that all values are denied. This field can be set only in Policies for list constraints. */
		denyAll?: boolean | null;

		/** If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. This field can be set only in Policies for boolean constraints. */
		enforce?: boolean | null;

		/** The string values for the list constraints. */
		values?: GoogleCloudAssetV1StringValues;
	}

	/** This rule message is a customized version of the one defined in the Organization Policy system. In addition to the fields defined in the original organization policy, it contains additional field(s) under specific circumstances to support analysis results. */
	export interface GoogleCloudAssetV1RuleFormProperties {

		/** Setting this to true means that all values are allowed. This field can be set only in Policies for list constraints. */
		allowAll: FormControl<boolean | null | undefined>,

		/** Setting this to true means that all values are denied. This field can be set only in Policies for list constraints. */
		denyAll: FormControl<boolean | null | undefined>,

		/** If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. This field can be set only in Policies for boolean constraints. */
		enforce: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1RuleFormGroup() {
		return new FormGroup<GoogleCloudAssetV1RuleFormProperties>({
			allowAll: new FormControl<boolean | null | undefined>(undefined),
			denyAll: new FormControl<boolean | null | undefined>(undefined),
			enforce: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The string values for the list constraints. */
	export interface GoogleCloudAssetV1StringValues {

		/** List of values allowed at this resource. */
		allowedValues?: Array<string>;

		/** List of values denied at this resource. */
		deniedValues?: Array<string>;
	}

	/** The string values for the list constraints. */
	export interface GoogleCloudAssetV1StringValuesFormProperties {
	}
	export function CreateGoogleCloudAssetV1StringValuesFormGroup() {
		return new FormGroup<GoogleCloudAssetV1StringValuesFormProperties>({
		});

	}


	/** The response message for AssetService.AnalyzeOrgPolicyGovernedAssets. */
	export interface AnalyzeOrgPolicyGovernedAssetsResponse {

		/** The organization policy constraint definition. */
		constraint?: AnalyzerOrgPolicyConstraint;

		/** The list of the analyzed governed assets. */
		governedAssets?: Array<GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset>;

		/** The page token to fetch the next page for AnalyzeOrgPolicyGovernedAssetsResponse.governed_assets. */
		nextPageToken?: string | null;
	}

	/** The response message for AssetService.AnalyzeOrgPolicyGovernedAssets. */
	export interface AnalyzeOrgPolicyGovernedAssetsResponseFormProperties {

		/** The page token to fetch the next page for AnalyzeOrgPolicyGovernedAssetsResponse.governed_assets. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeOrgPolicyGovernedAssetsResponseFormGroup() {
		return new FormGroup<AnalyzeOrgPolicyGovernedAssetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google Cloud asset(resource or IAM policy) governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint. */
	export interface GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset {

		/** This organization policy message is a modified version of the one defined in the Organization Policy system. This message contains several fields defined in the original organization policy with some new fields for analysis purpose. */
		consolidatedPolicy?: AnalyzerOrgPolicy;

		/** The IAM policies governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint. */
		governedIamPolicy?: GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy;

		/** The Google Cloud resources governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint. */
		governedResource?: GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource;

		/** The ordered list of all organization policies from the AnalyzeOrgPoliciesResponse.OrgPolicyResult.consolidated_policy.attached_resource to the scope specified in the request. If the constraint is defined with default policy, it will also appear in the list. */
		policyBundle?: Array<AnalyzerOrgPolicy>;
	}

	/** Represents a Google Cloud asset(resource or IAM policy) governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint. */
	export interface GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAssetFormProperties {
	}
	export function CreateGoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAssetFormGroup() {
		return new FormGroup<GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAssetFormProperties>({
		});

	}


	/** The IAM policies governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint. */
	export interface GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy {

		/** The full resource name of the resource on which this IAM policy is set. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Cloud Asset Inventory Resource Name Format](https://cloud.google.com/asset-inventory/docs/resource-name-format) for more information. */
		attachedResource?: string | null;

		/** The folder(s) that this IAM policy belongs to, in the format of folders/{FOLDER_NUMBER}. This field is available when the IAM policy belongs (directly or cascadingly) to one or more folders. */
		folders?: Array<string>;

		/** The organization that this IAM policy belongs to, in the format of organizations/{ORGANIZATION_NUMBER}. This field is available when the IAM policy belongs (directly or cascadingly) to an organization. */
		organization?: string | null;

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;

		/** The project that this IAM policy belongs to, in the format of projects/{PROJECT_NUMBER}. This field is available when the IAM policy belongs to a project. */
		project?: string | null;
	}

	/** The IAM policies governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint. */
	export interface GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicyFormProperties {

		/** The full resource name of the resource on which this IAM policy is set. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Cloud Asset Inventory Resource Name Format](https://cloud.google.com/asset-inventory/docs/resource-name-format) for more information. */
		attachedResource: FormControl<string | null | undefined>,

		/** The organization that this IAM policy belongs to, in the format of organizations/{ORGANIZATION_NUMBER}. This field is available when the IAM policy belongs (directly or cascadingly) to an organization. */
		organization: FormControl<string | null | undefined>,

		/** The project that this IAM policy belongs to, in the format of projects/{PROJECT_NUMBER}. This field is available when the IAM policy belongs to a project. */
		project: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicyFormGroup() {
		return new FormGroup<GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicyFormProperties>({
			attachedResource: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig>;

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateAuditConfigFormGroup() {
		return new FormGroup<AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<AuditLogConfigLogType | null | undefined>,
	}
	export function CreateAuditLogConfigFormGroup() {
		return new FormGroup<AuditLogConfigFormProperties>({
			logType: new FormControl<AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


	/** The Google Cloud resources governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint. */
	export interface GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource {

		/** The folder(s) that this resource belongs to, in the format of folders/{FOLDER_NUMBER}. This field is available when the resource belongs (directly or cascadingly) to one or more folders. */
		folders?: Array<string>;

		/** The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of the Google Cloud resource. */
		fullResourceName?: string | null;

		/** The organization that this resource belongs to, in the format of organizations/{ORGANIZATION_NUMBER}. This field is available when the resource belongs (directly or cascadingly) to an organization. */
		organization?: string | null;

		/** The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of the parent of AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full_resource_name. */
		parent?: string | null;

		/** The project that this resource belongs to, in the format of projects/{PROJECT_NUMBER}. This field is available when the resource belongs to a project. */
		project?: string | null;
	}

	/** The Google Cloud resources governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint. */
	export interface GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResourceFormProperties {

		/** The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of the Google Cloud resource. */
		fullResourceName: FormControl<string | null | undefined>,

		/** The organization that this resource belongs to, in the format of organizations/{ORGANIZATION_NUMBER}. This field is available when the resource belongs (directly or cascadingly) to an organization. */
		organization: FormControl<string | null | undefined>,

		/** The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of the parent of AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full_resource_name. */
		parent: FormControl<string | null | undefined>,

		/** The project that this resource belongs to, in the format of projects/{PROJECT_NUMBER}. This field is available when the resource belongs to a project. */
		project: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResourceFormGroup() {
		return new FormGroup<GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResourceFormProperties>({
			fullResourceName: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for AssetService.AnalyzeOrgPolicyGovernedContainers. */
	export interface AnalyzeOrgPolicyGovernedContainersResponse {

		/** The organization policy constraint definition. */
		constraint?: AnalyzerOrgPolicyConstraint;

		/** The list of the analyzed governed containers. */
		governedContainers?: Array<GoogleCloudAssetV1GovernedContainer>;

		/** The page token to fetch the next page for AnalyzeOrgPolicyGovernedContainersResponse.governed_containers. */
		nextPageToken?: string | null;
	}

	/** The response message for AssetService.AnalyzeOrgPolicyGovernedContainers. */
	export interface AnalyzeOrgPolicyGovernedContainersResponseFormProperties {

		/** The page token to fetch the next page for AnalyzeOrgPolicyGovernedContainersResponse.governed_containers. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeOrgPolicyGovernedContainersResponseFormGroup() {
		return new FormGroup<AnalyzeOrgPolicyGovernedContainersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The organization/folder/project resource governed by organization policies of AnalyzeOrgPolicyGovernedContainersRequest.constraint. */
	export interface GoogleCloudAssetV1GovernedContainer {

		/** This organization policy message is a modified version of the one defined in the Organization Policy system. This message contains several fields defined in the original organization policy with some new fields for analysis purpose. */
		consolidatedPolicy?: AnalyzerOrgPolicy;

		/** The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of an organization/folder/project resource. */
		fullResourceName?: string | null;

		/** The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of the parent of AnalyzeOrgPolicyGovernedContainersResponse.GovernedContainer.full_resource_name. */
		parent?: string | null;

		/** The ordered list of all organization policies from the AnalyzeOrgPoliciesResponse.OrgPolicyResult.consolidated_policy.attached_resource. to the scope specified in the request. If the constraint is defined with default policy, it will also appear in the list. */
		policyBundle?: Array<AnalyzerOrgPolicy>;
	}

	/** The organization/folder/project resource governed by organization policies of AnalyzeOrgPolicyGovernedContainersRequest.constraint. */
	export interface GoogleCloudAssetV1GovernedContainerFormProperties {

		/** The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of an organization/folder/project resource. */
		fullResourceName: FormControl<string | null | undefined>,

		/** The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of the parent of AnalyzeOrgPolicyGovernedContainersResponse.GovernedContainer.full_resource_name. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1GovernedContainerFormGroup() {
		return new FormGroup<GoogleCloudAssetV1GovernedContainerFormProperties>({
			fullResourceName: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy), or a relationship (e.g. an INSTANCE_TO_INSTANCEGROUP relationship). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface Asset {

		/** An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied. */
		accessLevel?: GoogleIdentityAccesscontextmanagerV1AccessLevel;

		/** `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization. */
		accessPolicy?: GoogleIdentityAccesscontextmanagerV1AccessPolicy;

		/** The ancestry path of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the asset is a project, folder, or organization, the ancestry path starts from the asset itself. Example: `["projects/123456789", "folders/5432", "organizations/1234"]` */
		ancestors?: Array<string>;

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType?: string | null;

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		iamPolicy?: Policy;

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		name?: string | null;

		/** A representation of an [organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy). There can be more than one organization policy with different constraints set on a given resource. */
		orgPolicy?: Array<GoogleCloudOrgpolicyV1Policy>;

		/** This API resource represents the available inventory data for a Compute Engine virtual machine (VM) instance at a given point in time. You can use this API resource to determine the inventory data of your VM. For more information, see [Information provided by OS inventory management](https://cloud.google.com/compute/docs/instances/os-inventory-management#data-collected). */
		osInventory?: Inventory;

		/** An asset identifier in Google Cloud which contains its name, type and ancestors. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		relatedAsset?: RelatedAsset;

		/** DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The detailed related assets with the `relationship_type`. */
		relatedAssets?: RelatedAssets;

		/** A representation of a Google Cloud resource. */
		resource?: Resource;

		/** `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project or VPC network can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges. */
		servicePerimeter?: GoogleIdentityAccesscontextmanagerV1ServicePerimeter;

		/** The last update timestamp of an asset. update_time is updated when create/update/delete operation is performed. */
		updateTime?: string | null;
	}

	/** An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy), or a relationship (e.g. an INSTANCE_TO_INSTANCEGROUP relationship). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface AssetFormProperties {

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType: FormControl<string | null | undefined>,

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		name: FormControl<string | null | undefined>,

		/** The last update timestamp of an asset. update_time is updated when create/update/delete operation is performed. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
			assetType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied. */
	export interface GoogleIdentityAccesscontextmanagerV1AccessLevel {

		/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
		basic?: GoogleIdentityAccesscontextmanagerV1BasicLevel;

		/** `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec */
		custom?: GoogleIdentityAccesscontextmanagerV1CustomLevel;

		/** Description of the `AccessLevel` and its use. Does not affect behavior. */
		description?: string | null;

		/** Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`. */
		name?: string | null;

		/** Human readable title. Must be unique within the Policy. */
		title?: string | null;
	}

	/** An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied. */
	export interface GoogleIdentityAccesscontextmanagerV1AccessLevelFormProperties {

		/** Description of the `AccessLevel` and its use. Does not affect behavior. */
		description: FormControl<string | null | undefined>,

		/** Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`. */
		name: FormControl<string | null | undefined>,

		/** Human readable title. Must be unique within the Policy. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1AccessLevelFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1AccessLevelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
	export interface GoogleIdentityAccesscontextmanagerV1BasicLevel {

		/** How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND. */
		combiningFunction?: GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction | null;

		/** Required. A list of requirements for the `AccessLevel` to be granted. */
		conditions?: Array<GoogleIdentityAccesscontextmanagerV1Condition>;
	}

	/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
	export interface GoogleIdentityAccesscontextmanagerV1BasicLevelFormProperties {

		/** How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND. */
		combiningFunction: FormControl<GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1BasicLevelFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1BasicLevelFormProperties>({
			combiningFunction: new FormControl<GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction | null | undefined>(undefined),
		});

	}

	export enum GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction { AND = 0, OR = 1 }


	/** A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction. */
	export interface GoogleIdentityAccesscontextmanagerV1Condition {

		/** `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops. */
		devicePolicy?: GoogleIdentityAccesscontextmanagerV1DevicePolicy;

		/** CIDR block IP subnetwork specification. May be IPv4 or IPv6. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly, for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32" is not. The originating IP of a request must be in one of the listed subnets in order for this Condition to be true. If empty, all IP addresses are allowed. */
		ipSubnetworks?: Array<string>;

		/** The request must be made by one of the provided user or service accounts. Groups are not supported. Syntax: `user:{emailid}` `serviceAccount:{emailid}` If not specified, a request may come from any user. */
		members?: Array<string>;

		/** Whether to negate the Condition. If true, the Condition becomes a NAND over its non-empty fields. Any non-empty field criteria evaluating to false will result in the Condition to be satisfied. Defaults to false. */
		negate?: boolean | null;

		/** The request must originate from one of the provided countries/regions. Must be valid ISO 3166-1 alpha-2 codes. */
		regions?: Array<string>;

		/** A list of other access levels defined in the same `Policy`, referenced by resource name. Referencing an `AccessLevel` which does not exist is an error. All access levels listed must be granted for the Condition to be true. Example: "`accessPolicies/MY_POLICY/accessLevels/LEVEL_NAME"` */
		requiredAccessLevels?: Array<string>;

		/** The request must originate from one of the provided VPC networks in Google Cloud. Cannot specify this field together with `ip_subnetworks`. */
		vpcNetworkSources?: Array<GoogleIdentityAccesscontextmanagerV1VpcNetworkSource>;
	}

	/** A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction. */
	export interface GoogleIdentityAccesscontextmanagerV1ConditionFormProperties {

		/** Whether to negate the Condition. If true, the Condition becomes a NAND over its non-empty fields. Any non-empty field criteria evaluating to false will result in the Condition to be satisfied. Defaults to false. */
		negate: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1ConditionFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1ConditionFormProperties>({
			negate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops. */
	export interface GoogleIdentityAccesscontextmanagerV1DevicePolicy {

		/** Allowed device management levels, an empty list allows all management levels. */
		allowedDeviceManagementLevels?: Array<string>;

		/** Allowed encryptions statuses, an empty list allows all statuses. */
		allowedEncryptionStatuses?: Array<string>;

		/** Allowed OS versions, an empty list allows all types and all versions. */
		osConstraints?: Array<GoogleIdentityAccesscontextmanagerV1OsConstraint>;

		/** Whether the device needs to be approved by the customer admin. */
		requireAdminApproval?: boolean | null;

		/** Whether the device needs to be corp owned. */
		requireCorpOwned?: boolean | null;

		/** Whether or not screenlock is required for the DevicePolicy to be true. Defaults to `false`. */
		requireScreenlock?: boolean | null;
	}

	/** `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops. */
	export interface GoogleIdentityAccesscontextmanagerV1DevicePolicyFormProperties {

		/** Whether the device needs to be approved by the customer admin. */
		requireAdminApproval: FormControl<boolean | null | undefined>,

		/** Whether the device needs to be corp owned. */
		requireCorpOwned: FormControl<boolean | null | undefined>,

		/** Whether or not screenlock is required for the DevicePolicy to be true. Defaults to `false`. */
		requireScreenlock: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1DevicePolicyFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1DevicePolicyFormProperties>({
			requireAdminApproval: new FormControl<boolean | null | undefined>(undefined),
			requireCorpOwned: new FormControl<boolean | null | undefined>(undefined),
			requireScreenlock: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A restriction on the OS type and version of devices making requests. */
	export interface GoogleIdentityAccesscontextmanagerV1OsConstraint {

		/** The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: `"major.minor.patch"`. Examples: `"10.5.301"`, `"9.2.1"`. */
		minimumVersion?: string | null;

		/** Required. The allowed OS type. */
		osType?: GoogleIdentityAccesscontextmanagerV1OsConstraintOsType | null;

		/** Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request. */
		requireVerifiedChromeOs?: boolean | null;
	}

	/** A restriction on the OS type and version of devices making requests. */
	export interface GoogleIdentityAccesscontextmanagerV1OsConstraintFormProperties {

		/** The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: `"major.minor.patch"`. Examples: `"10.5.301"`, `"9.2.1"`. */
		minimumVersion: FormControl<string | null | undefined>,

		/** Required. The allowed OS type. */
		osType: FormControl<GoogleIdentityAccesscontextmanagerV1OsConstraintOsType | null | undefined>,

		/** Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request. */
		requireVerifiedChromeOs: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1OsConstraintFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1OsConstraintFormProperties>({
			minimumVersion: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<GoogleIdentityAccesscontextmanagerV1OsConstraintOsType | null | undefined>(undefined),
			requireVerifiedChromeOs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleIdentityAccesscontextmanagerV1OsConstraintOsType { OS_UNSPECIFIED = 0, DESKTOP_MAC = 1, DESKTOP_WINDOWS = 2, DESKTOP_LINUX = 3, DESKTOP_CHROME_OS = 4, ANDROID = 5, IOS = 6 }


	/** The originating network source in Google Cloud. */
	export interface GoogleIdentityAccesscontextmanagerV1VpcNetworkSource {

		/** Sub-segment ranges inside of a VPC Network. */
		vpcSubnetwork?: GoogleIdentityAccesscontextmanagerV1VpcSubNetwork;
	}

	/** The originating network source in Google Cloud. */
	export interface GoogleIdentityAccesscontextmanagerV1VpcNetworkSourceFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1VpcNetworkSourceFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1VpcNetworkSourceFormProperties>({
		});

	}


	/** Sub-segment ranges inside of a VPC Network. */
	export interface GoogleIdentityAccesscontextmanagerV1VpcSubNetwork {

		/** Required. Network name. If the network is not part of the organization, the `compute.network.get` permission must be granted to the caller. Format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NETWORK_NAME}` Example: `//compute.googleapis.com/projects/my-project/global/networks/network-1` */
		network?: string | null;

		/** CIDR block IP subnetwork specification. The IP address must be an IPv4 address and can be a public or private IP address. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. If empty, all IP addresses are allowed. */
		vpcIpSubnetworks?: Array<string>;
	}

	/** Sub-segment ranges inside of a VPC Network. */
	export interface GoogleIdentityAccesscontextmanagerV1VpcSubNetworkFormProperties {

		/** Required. Network name. If the network is not part of the organization, the `compute.network.get` permission must be granted to the caller. Format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NETWORK_NAME}` Example: `//compute.googleapis.com/projects/my-project/global/networks/network-1` */
		network: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1VpcSubNetworkFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1VpcSubNetworkFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec */
	export interface GoogleIdentityAccesscontextmanagerV1CustomLevel {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		expr?: Expr;
	}

	/** `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec */
	export interface GoogleIdentityAccesscontextmanagerV1CustomLevelFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1CustomLevelFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1CustomLevelFormProperties>({
		});

	}


	/** `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization. */
	export interface GoogleIdentityAccesscontextmanagerV1AccessPolicy {

		/** Output only. An opaque identifier for the current version of the `AccessPolicy`. This will always be a strongly validated etag, meaning that two Access Polices will be identical if and only if their etags are identical. Clients should not expect this to be in any specific format. */
		etag?: string | null;

		/** Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{access_policy}` */
		name?: string | null;

		/** Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}` */
		parent?: string | null;

		/** The scopes of the AccessPolicy. Scopes define which resources a policy can restrict and where its resources can be referenced. For example, policy A with `scopes=["folders/123"]` has the following behavior: - ServicePerimeter can only restrict projects within `folders/123`. - ServicePerimeter within policy A can only reference access levels defined within policy A. - Only one policy can include a given scope; thus, attempting to create a second policy which includes `folders/123` will result in an error. If no scopes are provided, then any resource within the organization can be restricted. Scopes cannot be modified after a policy is created. Policies can only have a single scope. Format: list of `folders/{folder_number}` or `projects/{project_number}` */
		scopes?: Array<string>;

		/** Required. Human readable title. Does not affect behavior. */
		title?: string | null;
	}

	/** `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization. */
	export interface GoogleIdentityAccesscontextmanagerV1AccessPolicyFormProperties {

		/** Output only. An opaque identifier for the current version of the `AccessPolicy`. This will always be a strongly validated etag, meaning that two Access Polices will be identical if and only if their etags are identical. Clients should not expect this to be in any specific format. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{access_policy}` */
		name: FormControl<string | null | undefined>,

		/** Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}` */
		parent: FormControl<string | null | undefined>,

		/** Required. Human readable title. Does not affect behavior. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1AccessPolicyFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1AccessPolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources. */
	export interface GoogleCloudOrgpolicyV1Policy {

		/** Used in `policy_type` to specify how `boolean_policy` will behave at this resource. */
		booleanPolicy?: GoogleCloudOrgpolicyV1BooleanPolicy;

		/** The name of the `Constraint` the `Policy` is configuring, for example, `constraints/serviceuser.services`. A [list of available constraints](/resource-manager/docs/organization-policy/org-policy-constraints) is available. Immutable after creation. */
		constraint?: string | null;

		/** An opaque tag indicating the current version of the `Policy`, used for concurrency control. When the `Policy` is returned from either a `GetPolicy` or a `ListOrgPolicy` request, this `etag` indicates the version of the current `Policy` to use when executing a read-modify-write loop. When the `Policy` is returned from a `GetEffectivePolicy` request, the `etag` will be unset. When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value that was returned from a `GetOrgPolicy` request as part of a read-modify-write loop for concurrency control. Not setting the `etag`in a `SetOrgPolicy` request will result in an unconditional write of the `Policy`. */
		etag?: string | null;

		/** Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset. */
		listPolicy?: GoogleCloudOrgpolicyV1ListPolicy;

		/** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated. */
		restoreDefault?: GoogleCloudOrgpolicyV1RestoreDefault;

		/** The time stamp the `Policy` was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to `SetOrgPolicy` was made for that `Policy`. Any value set by the client will be ignored. */
		updateTime?: string | null;

		/** Version of the `Policy`. Default version is 0; */
		version?: number | null;
	}

	/** Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources. */
	export interface GoogleCloudOrgpolicyV1PolicyFormProperties {

		/** The name of the `Constraint` the `Policy` is configuring, for example, `constraints/serviceuser.services`. A [list of available constraints](/resource-manager/docs/organization-policy/org-policy-constraints) is available. Immutable after creation. */
		constraint: FormControl<string | null | undefined>,

		/** An opaque tag indicating the current version of the `Policy`, used for concurrency control. When the `Policy` is returned from either a `GetPolicy` or a `ListOrgPolicy` request, this `etag` indicates the version of the current `Policy` to use when executing a read-modify-write loop. When the `Policy` is returned from a `GetEffectivePolicy` request, the `etag` will be unset. When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value that was returned from a `GetOrgPolicy` request as part of a read-modify-write loop for concurrency control. Not setting the `etag`in a `SetOrgPolicy` request will result in an unconditional write of the `Policy`. */
		etag: FormControl<string | null | undefined>,

		/** The time stamp the `Policy` was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to `SetOrgPolicy` was made for that `Policy`. Any value set by the client will be ignored. */
		updateTime: FormControl<string | null | undefined>,

		/** Version of the `Policy`. Default version is 0; */
		version: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV1PolicyFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1PolicyFormProperties>({
			constraint: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Used in `policy_type` to specify how `boolean_policy` will behave at this resource. */
	export interface GoogleCloudOrgpolicyV1BooleanPolicy {

		/** If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess` with `constraint_default` set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following behavior: - If the `Policy` at this resource has enforced set to `false`, serial port connection attempts will be allowed. - If the `Policy` at this resource has enforced set to `true`, serial port connection attempts will be refused. - If the `Policy` at this resource is `RestoreDefault`, serial port connection attempts will be allowed. - If no `Policy` is set at this resource or anywhere higher in the resource hierarchy, serial port connection attempts will be allowed. - If no `Policy` is set at this resource, but one exists higher in the resource hierarchy, the behavior is as if the`Policy` were set at this resource. The following examples demonstrate the different possible layerings: Example 1 (nearest `Constraint` wins): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has no `Policy` set. The constraint at `projects/bar` and `organizations/foo` will not be enforced. Example 2 (enforcement gets replaced): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has a `Policy` with: {enforced: true} The constraint at `organizations/foo` is not enforced. The constraint at `projects/bar` is enforced. Example 3 (RestoreDefault): `organizations/foo` has a `Policy` with: {enforced: true} `projects/bar` has a `Policy` with: {RestoreDefault: {}} The constraint at `organizations/foo` is enforced. The constraint at `projects/bar` is not enforced, because `constraint_default` for the `Constraint` is `ALLOW`. */
		enforced?: boolean | null;
	}

	/** Used in `policy_type` to specify how `boolean_policy` will behave at this resource. */
	export interface GoogleCloudOrgpolicyV1BooleanPolicyFormProperties {

		/** If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess` with `constraint_default` set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following behavior: - If the `Policy` at this resource has enforced set to `false`, serial port connection attempts will be allowed. - If the `Policy` at this resource has enforced set to `true`, serial port connection attempts will be refused. - If the `Policy` at this resource is `RestoreDefault`, serial port connection attempts will be allowed. - If no `Policy` is set at this resource or anywhere higher in the resource hierarchy, serial port connection attempts will be allowed. - If no `Policy` is set at this resource, but one exists higher in the resource hierarchy, the behavior is as if the`Policy` were set at this resource. The following examples demonstrate the different possible layerings: Example 1 (nearest `Constraint` wins): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has no `Policy` set. The constraint at `projects/bar` and `organizations/foo` will not be enforced. Example 2 (enforcement gets replaced): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has a `Policy` with: {enforced: true} The constraint at `organizations/foo` is not enforced. The constraint at `projects/bar` is enforced. Example 3 (RestoreDefault): `organizations/foo` has a `Policy` with: {enforced: true} `projects/bar` has a `Policy` with: {RestoreDefault: {}} The constraint at `organizations/foo` is enforced. The constraint at `projects/bar` is not enforced, because `constraint_default` for the `Constraint` is `ALLOW`. */
		enforced: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV1BooleanPolicyFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1BooleanPolicyFormProperties>({
			enforced: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset. */
	export interface GoogleCloudOrgpolicyV1ListPolicy {

		/** The policy all_values state. */
		allValues?: GoogleCloudOrgpolicyV1ListPolicyAllValues | null;

		/** List of values allowed at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`. */
		allowedValues?: Array<string>;

		/** List of values denied at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`. */
		deniedValues?: Array<string>;

		/** Determines the inheritance behavior for this `Policy`. By default, a `ListPolicy` set at a resource supersedes any `Policy` set anywhere up the resource hierarchy. However, if `inherit_from_parent` is set to `true`, then the values from the effective `Policy` of the parent resource are inherited, meaning the values set in this `Policy` are added to the values inherited up the hierarchy. Setting `Policy` hierarchies that inherit both allowed values and denied values isn't recommended in most circumstances to keep the configuration simple and understandable. However, it is possible to set a `Policy` with `allowed_values` set that inherits a `Policy` with `denied_values` set. In this case, the values that are allowed must be in `allowed_values` and not present in `denied_values`. For example, suppose you have a `Constraint` `constraints/serviceuser.services`, which has a `constraint_type` of `list_constraint`, and with `constraint_default` set to `ALLOW`. Suppose that at the Organization level, a `Policy` is applied that restricts the allowed API activations to {`E1`, `E2`}. Then, if a `Policy` is applied to a project below the Organization that has `inherit_from_parent` set to `false` and field all_values set to DENY, then an attempt to activate any API will be denied. The following examples demonstrate different possible layerings for `projects/bar` parented by `organizations/foo`: Example 1 (no inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has `inherit_from_parent` `false` and values: {allowed_values: "E3" allowed_values: "E4"} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E3`, and `E4`. Example 2 (inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {value: "E3" value: "E4" inherit_from_parent: true} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`. Example 3 (inheriting both allowed and denied values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {denied_values: "E1"} The accepted values at `organizations/foo` are `E1`, `E2`. The value accepted at `projects/bar` is `E2`. Example 4 (RestoreDefault): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {RestoreDefault: {}} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 5 (no policy inherits parent policy): `organizations/foo` has no `Policy` set. `projects/bar` has no `Policy` set. The accepted values at both levels are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 6 (ListConstraint allowing all): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: ALLOW} The accepted values at `organizations/foo` are `E1`, E2`. Any value is accepted at `projects/bar`. Example 7 (ListConstraint allowing none): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: DENY} The accepted values at `organizations/foo` are `E1`, E2`. No value is accepted at `projects/bar`. Example 10 (allowed and denied subtrees of Resource Manager hierarchy): Given the following resource hierarchy O1->{F1, F2}; F1->{P1}; F2->{P2, P3}, `organizations/foo` has a `Policy` with values: {allowed_values: "under:organizations/O1"} `projects/bar` has a `Policy` with: {allowed_values: "under:projects/P3"} {denied_values: "under:folders/F2"} The accepted values at `organizations/foo` are `organizations/O1`, `folders/F1`, `folders/F2`, `projects/P1`, `projects/P2`, `projects/P3`. The accepted values at `projects/bar` are `organizations/O1`, `folders/F1`, `projects/P1`. */
		inheritFromParent?: boolean | null;

		/** Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Policy`. If `suggested_value` is not set, it will inherit the value specified higher in the hierarchy, unless `inherit_from_parent` is `false`. */
		suggestedValue?: string | null;
	}

	/** Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset. */
	export interface GoogleCloudOrgpolicyV1ListPolicyFormProperties {

		/** The policy all_values state. */
		allValues: FormControl<GoogleCloudOrgpolicyV1ListPolicyAllValues | null | undefined>,

		/** Determines the inheritance behavior for this `Policy`. By default, a `ListPolicy` set at a resource supersedes any `Policy` set anywhere up the resource hierarchy. However, if `inherit_from_parent` is set to `true`, then the values from the effective `Policy` of the parent resource are inherited, meaning the values set in this `Policy` are added to the values inherited up the hierarchy. Setting `Policy` hierarchies that inherit both allowed values and denied values isn't recommended in most circumstances to keep the configuration simple and understandable. However, it is possible to set a `Policy` with `allowed_values` set that inherits a `Policy` with `denied_values` set. In this case, the values that are allowed must be in `allowed_values` and not present in `denied_values`. For example, suppose you have a `Constraint` `constraints/serviceuser.services`, which has a `constraint_type` of `list_constraint`, and with `constraint_default` set to `ALLOW`. Suppose that at the Organization level, a `Policy` is applied that restricts the allowed API activations to {`E1`, `E2`}. Then, if a `Policy` is applied to a project below the Organization that has `inherit_from_parent` set to `false` and field all_values set to DENY, then an attempt to activate any API will be denied. The following examples demonstrate different possible layerings for `projects/bar` parented by `organizations/foo`: Example 1 (no inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has `inherit_from_parent` `false` and values: {allowed_values: "E3" allowed_values: "E4"} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E3`, and `E4`. Example 2 (inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {value: "E3" value: "E4" inherit_from_parent: true} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`. Example 3 (inheriting both allowed and denied values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {denied_values: "E1"} The accepted values at `organizations/foo` are `E1`, `E2`. The value accepted at `projects/bar` is `E2`. Example 4 (RestoreDefault): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {RestoreDefault: {}} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 5 (no policy inherits parent policy): `organizations/foo` has no `Policy` set. `projects/bar` has no `Policy` set. The accepted values at both levels are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 6 (ListConstraint allowing all): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: ALLOW} The accepted values at `organizations/foo` are `E1`, E2`. Any value is accepted at `projects/bar`. Example 7 (ListConstraint allowing none): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: DENY} The accepted values at `organizations/foo` are `E1`, E2`. No value is accepted at `projects/bar`. Example 10 (allowed and denied subtrees of Resource Manager hierarchy): Given the following resource hierarchy O1->{F1, F2}; F1->{P1}; F2->{P2, P3}, `organizations/foo` has a `Policy` with values: {allowed_values: "under:organizations/O1"} `projects/bar` has a `Policy` with: {allowed_values: "under:projects/P3"} {denied_values: "under:folders/F2"} The accepted values at `organizations/foo` are `organizations/O1`, `folders/F1`, `folders/F2`, `projects/P1`, `projects/P2`, `projects/P3`. The accepted values at `projects/bar` are `organizations/O1`, `folders/F1`, `projects/P1`. */
		inheritFromParent: FormControl<boolean | null | undefined>,

		/** Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Policy`. If `suggested_value` is not set, it will inherit the value specified higher in the hierarchy, unless `inherit_from_parent` is `false`. */
		suggestedValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV1ListPolicyFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1ListPolicyFormProperties>({
			allValues: new FormControl<GoogleCloudOrgpolicyV1ListPolicyAllValues | null | undefined>(undefined),
			inheritFromParent: new FormControl<boolean | null | undefined>(undefined),
			suggestedValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudOrgpolicyV1ListPolicyAllValues { ALL_VALUES_UNSPECIFIED = 0, ALLOW = 1, DENY = 2 }


	/** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated. */
	export interface GoogleCloudOrgpolicyV1RestoreDefault {
	}

	/** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated. */
	export interface GoogleCloudOrgpolicyV1RestoreDefaultFormProperties {
	}
	export function CreateGoogleCloudOrgpolicyV1RestoreDefaultFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1RestoreDefaultFormProperties>({
		});

	}


	/** This API resource represents the available inventory data for a Compute Engine virtual machine (VM) instance at a given point in time. You can use this API resource to determine the inventory data of your VM. For more information, see [Information provided by OS inventory management](https://cloud.google.com/compute/docs/instances/os-inventory-management#data-collected). */
	export interface Inventory {

		/** Inventory items related to the VM keyed by an opaque unique identifier for each inventory item. The identifier is unique to each distinct and addressable inventory item and will change, when there is a new package version. */
		items?: {[id: string]: Item };

		/** Output only. The `Inventory` API resource name. Format: `projects/{project_number}/locations/{location}/instances/{instance_id}/inventory` */
		name?: string | null;

		/** Operating system information for the VM. */
		osInfo?: OsInfo;

		/** Output only. Timestamp of the last reported inventory for the VM. */
		updateTime?: string | null;
	}

	/** This API resource represents the available inventory data for a Compute Engine virtual machine (VM) instance at a given point in time. You can use this API resource to determine the inventory data of your VM. For more information, see [Information provided by OS inventory management](https://cloud.google.com/compute/docs/instances/os-inventory-management#data-collected). */
	export interface InventoryFormProperties {

		/** Inventory items related to the VM keyed by an opaque unique identifier for each inventory item. The identifier is unique to each distinct and addressable inventory item and will change, when there is a new package version. */
		items: FormControl<{[id: string]: Item } | null | undefined>,

		/** Output only. The `Inventory` API resource name. Format: `projects/{project_number}/locations/{location}/instances/{instance_id}/inventory` */
		name: FormControl<string | null | undefined>,

		/** Output only. Timestamp of the last reported inventory for the VM. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateInventoryFormGroup() {
		return new FormGroup<InventoryFormProperties>({
			items: new FormControl<{[id: string]: Item } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single piece of inventory on a VM. */
	export interface Item {

		/** Software package information of the operating system. */
		availablePackage?: SoftwarePackage;

		/** When this inventory item was first detected. */
		createTime?: string | null;

		/** Identifier for this item, unique across items for this VM. */
		id?: string | null;

		/** Software package information of the operating system. */
		installedPackage?: SoftwarePackage;

		/** The origin of this inventory item. */
		originType?: ItemOriginType | null;

		/** The specific type of inventory, correlating to its specific details. */
		type?: ItemType | null;

		/** When this inventory item was last modified. */
		updateTime?: string | null;
	}

	/** A single piece of inventory on a VM. */
	export interface ItemFormProperties {

		/** When this inventory item was first detected. */
		createTime: FormControl<string | null | undefined>,

		/** Identifier for this item, unique across items for this VM. */
		id: FormControl<string | null | undefined>,

		/** The origin of this inventory item. */
		originType: FormControl<ItemOriginType | null | undefined>,

		/** The specific type of inventory, correlating to its specific details. */
		type: FormControl<ItemType | null | undefined>,

		/** When this inventory item was last modified. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			originType: new FormControl<ItemOriginType | null | undefined>(undefined),
			type: new FormControl<ItemType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Software package information of the operating system. */
	export interface SoftwarePackage {

		/** Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers. */
		aptPackage?: VersionedPackage;

		/** Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers. */
		cosPackage?: VersionedPackage;

		/** Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers. */
		googetPackage?: VersionedPackage;

		/** Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering */
		qfePackage?: WindowsQuickFixEngineeringPackage;

		/** Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key */
		windowsApplication?: WindowsApplication;

		/** Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated. */
		wuaPackage?: WindowsUpdatePackage;

		/** Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers. */
		yumPackage?: VersionedPackage;

		/** Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers. */
		zypperPackage?: VersionedPackage;

		/** Details related to a Zypper Patch. */
		zypperPatch?: ZypperPatch;
	}

	/** Software package information of the operating system. */
	export interface SoftwarePackageFormProperties {
	}
	export function CreateSoftwarePackageFormGroup() {
		return new FormGroup<SoftwarePackageFormProperties>({
		});

	}


	/** Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers. */
	export interface VersionedPackage {

		/** The system architecture this package is intended for. */
		architecture?: string | null;

		/** The name of the package. */
		packageName?: string | null;

		/** The version of the package. */
		version?: string | null;
	}

	/** Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers. */
	export interface VersionedPackageFormProperties {

		/** The system architecture this package is intended for. */
		architecture: FormControl<string | null | undefined>,

		/** The name of the package. */
		packageName: FormControl<string | null | undefined>,

		/** The version of the package. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateVersionedPackageFormGroup() {
		return new FormGroup<VersionedPackageFormProperties>({
			architecture: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering */
	export interface WindowsQuickFixEngineeringPackage {

		/** A short textual description of the QFE update. */
		caption?: string | null;

		/** A textual description of the QFE update. */
		description?: string | null;

		/** Unique identifier associated with a particular QFE update. */
		hotFixId?: string | null;

		/** Date that the QFE update was installed. Mapped from installed_on field. */
		installTime?: string | null;
	}

	/** Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering */
	export interface WindowsQuickFixEngineeringPackageFormProperties {

		/** A short textual description of the QFE update. */
		caption: FormControl<string | null | undefined>,

		/** A textual description of the QFE update. */
		description: FormControl<string | null | undefined>,

		/** Unique identifier associated with a particular QFE update. */
		hotFixId: FormControl<string | null | undefined>,

		/** Date that the QFE update was installed. Mapped from installed_on field. */
		installTime: FormControl<string | null | undefined>,
	}
	export function CreateWindowsQuickFixEngineeringPackageFormGroup() {
		return new FormGroup<WindowsQuickFixEngineeringPackageFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			hotFixId: new FormControl<string | null | undefined>(undefined),
			installTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key */
	export interface WindowsApplication {

		/** The name of the application or product. */
		displayName?: string | null;

		/** The version of the product or application in string format. */
		displayVersion?: string | null;

		/** The internet address for technical support. */
		helpLink?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		installDate?: Date;

		/** The name of the manufacturer for the product or application. */
		publisher?: string | null;
	}

	/** Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key */
	export interface WindowsApplicationFormProperties {

		/** The name of the application or product. */
		displayName: FormControl<string | null | undefined>,

		/** The version of the product or application in string format. */
		displayVersion: FormControl<string | null | undefined>,

		/** The internet address for technical support. */
		helpLink: FormControl<string | null | undefined>,

		/** The name of the manufacturer for the product or application. */
		publisher: FormControl<string | null | undefined>,
	}
	export function CreateWindowsApplicationFormGroup() {
		return new FormGroup<WindowsApplicationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			displayVersion: new FormControl<string | null | undefined>(undefined),
			helpLink: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated. */
	export interface WindowsUpdatePackage {

		/** The categories that are associated with this update package. */
		categories?: Array<WindowsUpdateCategory>;

		/** The localized description of the update package. */
		description?: string | null;

		/** A collection of Microsoft Knowledge Base article IDs that are associated with the update package. */
		kbArticleIds?: Array<string>;

		/** The last published date of the update, in (UTC) date and time. */
		lastDeploymentChangeTime?: string | null;

		/** A collection of URLs that provide more information about the update package. */
		moreInfoUrls?: Array<string>;

		/** The revision number of this update package. */
		revisionNumber?: number | null;

		/** A hyperlink to the language-specific support information for the update. */
		supportUrl?: string | null;

		/** The localized title of the update package. */
		title?: string | null;

		/** Gets the identifier of an update package. Stays the same across revisions. */
		updateId?: string | null;
	}

	/** Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated. */
	export interface WindowsUpdatePackageFormProperties {

		/** The localized description of the update package. */
		description: FormControl<string | null | undefined>,

		/** The last published date of the update, in (UTC) date and time. */
		lastDeploymentChangeTime: FormControl<string | null | undefined>,

		/** The revision number of this update package. */
		revisionNumber: FormControl<number | null | undefined>,

		/** A hyperlink to the language-specific support information for the update. */
		supportUrl: FormControl<string | null | undefined>,

		/** The localized title of the update package. */
		title: FormControl<string | null | undefined>,

		/** Gets the identifier of an update package. Stays the same across revisions. */
		updateId: FormControl<string | null | undefined>,
	}
	export function CreateWindowsUpdatePackageFormGroup() {
		return new FormGroup<WindowsUpdatePackageFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			lastDeploymentChangeTime: new FormControl<string | null | undefined>(undefined),
			revisionNumber: new FormControl<number | null | undefined>(undefined),
			supportUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Categories specified by the Windows Update. */
	export interface WindowsUpdateCategory {

		/** The identifier of the windows update category. */
		id?: string | null;

		/** The name of the windows update category. */
		name?: string | null;
	}

	/** Categories specified by the Windows Update. */
	export interface WindowsUpdateCategoryFormProperties {

		/** The identifier of the windows update category. */
		id: FormControl<string | null | undefined>,

		/** The name of the windows update category. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWindowsUpdateCategoryFormGroup() {
		return new FormGroup<WindowsUpdateCategoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details related to a Zypper Patch. */
	export interface ZypperPatch {

		/** The category of the patch. */
		category?: string | null;

		/** The name of the patch. */
		patchName?: string | null;

		/** The severity specified for this patch */
		severity?: string | null;

		/** Any summary information provided about this patch. */
		summary?: string | null;
	}

	/** Details related to a Zypper Patch. */
	export interface ZypperPatchFormProperties {

		/** The category of the patch. */
		category: FormControl<string | null | undefined>,

		/** The name of the patch. */
		patchName: FormControl<string | null | undefined>,

		/** The severity specified for this patch */
		severity: FormControl<string | null | undefined>,

		/** Any summary information provided about this patch. */
		summary: FormControl<string | null | undefined>,
	}
	export function CreateZypperPatchFormGroup() {
		return new FormGroup<ZypperPatchFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			patchName: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ItemOriginType { ORIGIN_TYPE_UNSPECIFIED = 0, INVENTORY_REPORT = 1 }

	export enum ItemType { TYPE_UNSPECIFIED = 0, INSTALLED_PACKAGE = 1, AVAILABLE_PACKAGE = 2 }


	/** Operating system information for the VM. */
	export interface OsInfo {

		/** The system architecture of the operating system. */
		architecture?: string | null;

		/** The VM hostname. */
		hostname?: string | null;

		/** The kernel release of the operating system. */
		kernelRelease?: string | null;

		/** The kernel version of the operating system. */
		kernelVersion?: string | null;

		/** The operating system long name. For example 'Debian GNU/Linux 9' or 'Microsoft Window Server 2019 Datacenter'. */
		longName?: string | null;

		/** The current version of the OS Config agent running on the VM. */
		osconfigAgentVersion?: string | null;

		/** The operating system short name. For example, 'windows' or 'debian'. */
		shortName?: string | null;

		/** The version of the operating system. */
		version?: string | null;
	}

	/** Operating system information for the VM. */
	export interface OsInfoFormProperties {

		/** The system architecture of the operating system. */
		architecture: FormControl<string | null | undefined>,

		/** The VM hostname. */
		hostname: FormControl<string | null | undefined>,

		/** The kernel release of the operating system. */
		kernelRelease: FormControl<string | null | undefined>,

		/** The kernel version of the operating system. */
		kernelVersion: FormControl<string | null | undefined>,

		/** The operating system long name. For example 'Debian GNU/Linux 9' or 'Microsoft Window Server 2019 Datacenter'. */
		longName: FormControl<string | null | undefined>,

		/** The current version of the OS Config agent running on the VM. */
		osconfigAgentVersion: FormControl<string | null | undefined>,

		/** The operating system short name. For example, 'windows' or 'debian'. */
		shortName: FormControl<string | null | undefined>,

		/** The version of the operating system. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateOsInfoFormGroup() {
		return new FormGroup<OsInfoFormProperties>({
			architecture: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			kernelRelease: new FormControl<string | null | undefined>(undefined),
			kernelVersion: new FormControl<string | null | undefined>(undefined),
			longName: new FormControl<string | null | undefined>(undefined),
			osconfigAgentVersion: new FormControl<string | null | undefined>(undefined),
			shortName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An asset identifier in Google Cloud which contains its name, type and ancestors. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface RelatedAsset {

		/** The ancestors of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. Example: `["projects/123456789", "folders/5432", "organizations/1234"]` */
		ancestors?: Array<string>;

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		asset?: string | null;

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType?: string | null;

		/** The unique identifier of the relationship type. Example: `INSTANCE_TO_INSTANCEGROUP` */
		relationshipType?: string | null;
	}

	/** An asset identifier in Google Cloud which contains its name, type and ancestors. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface RelatedAssetFormProperties {

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		asset: FormControl<string | null | undefined>,

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType: FormControl<string | null | undefined>,

		/** The unique identifier of the relationship type. Example: `INSTANCE_TO_INSTANCEGROUP` */
		relationshipType: FormControl<string | null | undefined>,
	}
	export function CreateRelatedAssetFormGroup() {
		return new FormGroup<RelatedAssetFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			assetType: new FormControl<string | null | undefined>(undefined),
			relationshipType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The detailed related assets with the `relationship_type`. */
	export interface RelatedAssets {

		/** The peer resources of the relationship. */
		assets?: Array<RelatedAsset>;

		/** DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`. */
		relationshipAttributes?: RelationshipAttributes;
	}

	/** DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The detailed related assets with the `relationship_type`. */
	export interface RelatedAssetsFormProperties {
	}
	export function CreateRelatedAssetsFormGroup() {
		return new FormGroup<RelatedAssetsFormProperties>({
		});

	}


	/** DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`. */
	export interface RelationshipAttributes {

		/** The detail of the relationship, e.g. `contains`, `attaches` */
		action?: string | null;

		/** The source asset type. Example: `compute.googleapis.com/Instance` */
		sourceResourceType?: string | null;

		/** The target asset type. Example: `compute.googleapis.com/Disk` */
		targetResourceType?: string | null;

		/** The unique identifier of the relationship type. Example: `INSTANCE_TO_INSTANCEGROUP` */
		type?: string | null;
	}

	/** DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`. */
	export interface RelationshipAttributesFormProperties {

		/** The detail of the relationship, e.g. `contains`, `attaches` */
		action: FormControl<string | null | undefined>,

		/** The source asset type. Example: `compute.googleapis.com/Instance` */
		sourceResourceType: FormControl<string | null | undefined>,

		/** The target asset type. Example: `compute.googleapis.com/Disk` */
		targetResourceType: FormControl<string | null | undefined>,

		/** The unique identifier of the relationship type. Example: `INSTANCE_TO_INSTANCEGROUP` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipAttributesFormGroup() {
		return new FormGroup<RelationshipAttributesFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			sourceResourceType: new FormControl<string | null | undefined>(undefined),
			targetResourceType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a Google Cloud resource. */
	export interface Resource {

		/** The content of the resource, in which some sensitive fields are removed and may not be present. */
		data?: {[id: string]: any };

		/** The URL of the discovery document containing the resource's JSON schema. Example: `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryDocumentUri?: string | null;

		/** The JSON schema name listed in the discovery document. Example: `Project` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryName?: string | null;

		/** The location of the resource in Google Cloud, such as its zone and region. For more information, see https://cloud.google.com/about/locations/. */
		location?: string | null;

		/** The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. For Google Cloud assets, this value is the parent resource defined in the [IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: `//cloudresourcemanager.googleapis.com/projects/my_project_123` */
		parent?: string | null;

		/** The REST URL for accessing the resource. An HTTP `GET` request using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123` This value is unspecified for resources without a REST API. */
		resourceUrl?: string | null;

		/** The API version. Example: `v1` */
		version?: string | null;
	}

	/** A representation of a Google Cloud resource. */
	export interface ResourceFormProperties {

		/** The content of the resource, in which some sensitive fields are removed and may not be present. */
		data: FormControl<{[id: string]: any } | null | undefined>,

		/** The URL of the discovery document containing the resource's JSON schema. Example: `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryDocumentUri: FormControl<string | null | undefined>,

		/** The JSON schema name listed in the discovery document. Example: `Project` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryName: FormControl<string | null | undefined>,

		/** The location of the resource in Google Cloud, such as its zone and region. For more information, see https://cloud.google.com/about/locations/. */
		location: FormControl<string | null | undefined>,

		/** The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. For Google Cloud assets, this value is the parent resource defined in the [IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: `//cloudresourcemanager.googleapis.com/projects/my_project_123` */
		parent: FormControl<string | null | undefined>,

		/** The REST URL for accessing the resource. An HTTP `GET` request using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123` This value is unspecified for resources without a REST API. */
		resourceUrl: FormControl<string | null | undefined>,

		/** The API version. Example: `v1` */
		version: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			data: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			discoveryDocumentUri: new FormControl<string | null | undefined>(undefined),
			discoveryName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			resourceUrl: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project or VPC network can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges. */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeter {

		/** Description of the `ServicePerimeter` and its use. Does not affect behavior. */
		description?: string | null;

		/** Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`. */
		name?: string | null;

		/** Perimeter type indicator. A single project or VPC network is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, the restricted service list as well as access level lists must be empty. */
		perimeterType?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType | null;

		/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
		spec?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;

		/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
		status?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;

		/** Human readable title. Must be unique within the Policy. */
		title?: string | null;

		/** Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists for all Service Perimeters, and that spec is identical to the status for those Service Perimeters. When this flag is set, it inhibits the generation of the implicit spec, thereby allowing the user to explicitly provide a configuration ("spec") to use in a dry-run version of the Service Perimeter. This allows the user to test changes to the enforced config ("status") without actually enforcing them. This testing is done through analyzing the differences between currently enforced and suggested restrictions. use_explicit_dry_run_spec must bet set to True if any of the fields in the spec are set to non-default values. */
		useExplicitDryRunSpec?: boolean | null;
	}

	/** `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project or VPC network can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges. */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeterFormProperties {

		/** Description of the `ServicePerimeter` and its use. Does not affect behavior. */
		description: FormControl<string | null | undefined>,

		/** Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`. */
		name: FormControl<string | null | undefined>,

		/** Perimeter type indicator. A single project or VPC network is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, the restricted service list as well as access level lists must be empty. */
		perimeterType: FormControl<GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType | null | undefined>,

		/** Human readable title. Must be unique within the Policy. */
		title: FormControl<string | null | undefined>,

		/** Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists for all Service Perimeters, and that spec is identical to the status for those Service Perimeters. When this flag is set, it inhibits the generation of the implicit spec, thereby allowing the user to explicitly provide a configuration ("spec") to use in a dry-run version of the Service Perimeter. This allows the user to test changes to the enforced config ("status") without actually enforcing them. This testing is done through analyzing the differences between currently enforced and suggested restrictions. use_explicit_dry_run_spec must bet set to True if any of the fields in the spec are set to non-default values. */
		useExplicitDryRunSpec: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1ServicePerimeterFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1ServicePerimeterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			perimeterType: new FormControl<GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			useExplicitDryRunSpec: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType { PERIMETER_TYPE_REGULAR = 0, PERIMETER_TYPE_BRIDGE = 1 }


	/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig {

		/** A list of `AccessLevel` resource names that allow resources within the `ServicePerimeter` to be accessed from the internet. `AccessLevels` listed must be in the same policy as this `ServicePerimeter`. Referencing a nonexistent `AccessLevel` is a syntax error. If no `AccessLevel` names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `"accessPolicies/MY_POLICY/accessLevels/MY_LEVEL"`. For Service Perimeter Bridge, must be empty. */
		accessLevels?: Array<string>;

		/** List of EgressPolicies to apply to the perimeter. A perimeter may have multiple EgressPolicies, each of which is evaluated separately. Access is granted if any EgressPolicy grants it. Must be empty for a perimeter bridge. */
		egressPolicies?: Array<GoogleIdentityAccesscontextmanagerV1EgressPolicy>;

		/** List of IngressPolicies to apply to the perimeter. A perimeter may have multiple IngressPolicies, each of which is evaluated separately. Access is granted if any Ingress Policy grants it. Must be empty for a perimeter bridge. */
		ingressPolicies?: Array<GoogleIdentityAccesscontextmanagerV1IngressPolicy>;

		/** A list of Google Cloud resources that are inside of the service perimeter. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`. */
		resources?: Array<string>;

		/** Google Cloud services that are subject to the Service Perimeter restrictions. For example, if `storage.googleapis.com` is specified, access to the storage buckets inside the perimeter must meet the perimeter's access restrictions. */
		restrictedServices?: Array<string>;

		/** Specifies how APIs are allowed to communicate within the Service Perimeter. */
		vpcAccessibleServices?: GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices;
	}

	/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfigFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1ServicePerimeterConfigFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfigFormProperties>({
		});

	}


	/** Policy for egress from perimeter. EgressPolicies match requests based on `egress_from` and `egress_to` stanzas. For an EgressPolicy to match, both `egress_from` and `egress_to` stanzas must be matched. If an EgressPolicy matches a request, the request is allowed to span the ServicePerimeter boundary. For example, an EgressPolicy can be used to allow VMs on networks within the ServicePerimeter to access a defined set of projects outside the perimeter in certain contexts (e.g. to read data from a Cloud Storage bucket or query against a BigQuery dataset). EgressPolicies are concerned with the *resources* that a request relates as well as the API services and API actions being used. They do not related to the direction of data movement. More detailed documentation for this concept can be found in the descriptions of EgressFrom and EgressTo. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressPolicy {

		/** Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. */
		egressFrom?: GoogleIdentityAccesscontextmanagerV1EgressFrom;

		/** Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter. */
		egressTo?: GoogleIdentityAccesscontextmanagerV1EgressTo;
	}

	/** Policy for egress from perimeter. EgressPolicies match requests based on `egress_from` and `egress_to` stanzas. For an EgressPolicy to match, both `egress_from` and `egress_to` stanzas must be matched. If an EgressPolicy matches a request, the request is allowed to span the ServicePerimeter boundary. For example, an EgressPolicy can be used to allow VMs on networks within the ServicePerimeter to access a defined set of projects outside the perimeter in certain contexts (e.g. to read data from a Cloud Storage bucket or query against a BigQuery dataset). EgressPolicies are concerned with the *resources* that a request relates as well as the API services and API actions being used. They do not related to the direction of data movement. More detailed documentation for this concept can be found in the descriptions of EgressFrom and EgressTo. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressPolicyFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1EgressPolicyFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1EgressPolicyFormProperties>({
		});

	}


	/** Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressFrom {

		/** A list of identities that are allowed access through this [EgressPolicy]. Should be in the format of email address. The email address should represent individual user or service account only. */
		identities?: Array<string>;

		/** Specifies the type of identities that are allowed access to outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType?: GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null;

		/** Whether to enforce traffic restrictions based on `sources` field. If the `sources` fields is non-empty, then this field must be set to `SOURCE_RESTRICTION_ENABLED`. */
		sourceRestriction?: GoogleIdentityAccesscontextmanagerV1EgressFromSourceRestriction | null;

		/** Sources that this EgressPolicy authorizes access from. If this field is not empty, then `source_restriction` must be set to `SOURCE_RESTRICTION_ENABLED`. */
		sources?: Array<GoogleIdentityAccesscontextmanagerV1EgressSource>;
	}

	/** Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressFromFormProperties {

		/** Specifies the type of identities that are allowed access to outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType: FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null | undefined>,

		/** Whether to enforce traffic restrictions based on `sources` field. If the `sources` fields is non-empty, then this field must be set to `SOURCE_RESTRICTION_ENABLED`. */
		sourceRestriction: FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromSourceRestriction | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1EgressFromFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1EgressFromFormProperties>({
			identityType: new FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null | undefined>(undefined),
			sourceRestriction: new FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromSourceRestriction | null | undefined>(undefined),
		});

	}

	export enum GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType { IDENTITY_TYPE_UNSPECIFIED = 0, ANY_IDENTITY = 1, ANY_USER_ACCOUNT = 2, ANY_SERVICE_ACCOUNT = 3 }

	export enum GoogleIdentityAccesscontextmanagerV1EgressFromSourceRestriction { SOURCE_RESTRICTION_UNSPECIFIED = 0, SOURCE_RESTRICTION_ENABLED = 1, SOURCE_RESTRICTION_DISABLED = 2 }


	/** The source that EgressPolicy authorizes access from inside the ServicePerimeter to somewhere outside the ServicePerimeter boundaries. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressSource {

		/** An AccessLevel resource name that allows protected resources inside the ServicePerimeters to access outside the ServicePerimeter boundaries. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If an AccessLevel name is not specified, only resources within the perimeter can be accessed through Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all EgressSources will be allowed. */
		accessLevel?: string | null;
	}

	/** The source that EgressPolicy authorizes access from inside the ServicePerimeter to somewhere outside the ServicePerimeter boundaries. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressSourceFormProperties {

		/** An AccessLevel resource name that allows protected resources inside the ServicePerimeters to access outside the ServicePerimeter boundaries. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If an AccessLevel name is not specified, only resources within the perimeter can be accessed through Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all EgressSources will be allowed. */
		accessLevel: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1EgressSourceFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1EgressSourceFormProperties>({
			accessLevel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressTo {

		/** A list of external resources that are allowed to be accessed. Only AWS and Azure resources are supported. For Amazon S3, the supported format is s3://BUCKET_NAME. For Azure Storage, the supported format is azure://myaccount.blob.core.windows.net/CONTAINER_NAME. A request matches if it contains an external resource in this list (Example: s3://bucket/path). Currently '*' is not allowed. */
		externalResources?: Array<string>;

		/** A list of ApiOperations allowed to be performed by the sources specified in the corresponding EgressFrom. A request matches if it uses an operation/service in this list. */
		operations?: Array<GoogleIdentityAccesscontextmanagerV1ApiOperation>;

		/** A list of resources, currently only projects in the form `projects/`, that are allowed to be accessed by sources defined in the corresponding EgressFrom. A request matches if it contains a resource in this list. If `*` is specified for `resources`, then this EgressTo rule will authorize access to all resources outside the perimeter. */
		resources?: Array<string>;
	}

	/** Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressToFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1EgressToFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1EgressToFormProperties>({
		});

	}


	/** Identification for an API Operation. */
	export interface GoogleIdentityAccesscontextmanagerV1ApiOperation {

		/** API methods or permissions to allow. Method or permission must belong to the service specified by `service_name` field. A single MethodSelector entry with `*` specified for the `method` field will allow all methods AND permissions for the service specified in `service_name`. */
		methodSelectors?: Array<GoogleIdentityAccesscontextmanagerV1MethodSelector>;

		/** The name of the API whose methods or permissions the IngressPolicy or EgressPolicy want to allow. A single ApiOperation with `service_name` field set to `*` will allow all methods AND permissions for all services. */
		serviceName?: string | null;
	}

	/** Identification for an API Operation. */
	export interface GoogleIdentityAccesscontextmanagerV1ApiOperationFormProperties {

		/** The name of the API whose methods or permissions the IngressPolicy or EgressPolicy want to allow. A single ApiOperation with `service_name` field set to `*` will allow all methods AND permissions for all services. */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1ApiOperationFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1ApiOperationFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An allowed method or permission of a service specified in ApiOperation. */
	export interface GoogleIdentityAccesscontextmanagerV1MethodSelector {

		/** A valid method name for the corresponding `service_name` in ApiOperation. If `*` is used as the value for the `method`, then ALL methods and permissions are allowed. */
		method?: string | null;

		/** A valid Cloud IAM permission for the corresponding `service_name` in ApiOperation. */
		permission?: string | null;
	}

	/** An allowed method or permission of a service specified in ApiOperation. */
	export interface GoogleIdentityAccesscontextmanagerV1MethodSelectorFormProperties {

		/** A valid method name for the corresponding `service_name` in ApiOperation. If `*` is used as the value for the `method`, then ALL methods and permissions are allowed. */
		method: FormControl<string | null | undefined>,

		/** A valid Cloud IAM permission for the corresponding `service_name` in ApiOperation. */
		permission: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1MethodSelectorFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1MethodSelectorFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			permission: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressPolicy {

		/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match. */
		ingressFrom?: GoogleIdentityAccesscontextmanagerV1IngressFrom;

		/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match. */
		ingressTo?: GoogleIdentityAccesscontextmanagerV1IngressTo;
	}

	/** Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressPolicyFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1IngressPolicyFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1IngressPolicyFormProperties>({
		});

	}


	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressFrom {

		/** A list of identities that are allowed access through this ingress policy. Should be in the format of email address. The email address should represent individual user or service account only. */
		identities?: Array<string>;

		/** Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType?: GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null;

		/** Sources that this IngressPolicy authorizes access from. */
		sources?: Array<GoogleIdentityAccesscontextmanagerV1IngressSource>;
	}

	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressFromFormProperties {

		/** Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType: FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1IngressFromFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1IngressFromFormProperties>({
			identityType: new FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null | undefined>(undefined),
		});

	}


	/** The source that IngressPolicy authorizes access from. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressSource {

		/** An AccessLevel resource name that allow resources within the ServicePerimeters to be accessed from the internet. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If no AccessLevel names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all IngressSources will be allowed. */
		accessLevel?: string | null;

		/** A Google Cloud resource that is allowed to ingress the perimeter. Requests from these resources will be allowed to access perimeter data. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`. The project may be in any Google Cloud organization, not just the organization that the perimeter is defined in. `*` is not allowed, the case of allowing all Google Cloud resources only is not supported. */
		resource?: string | null;
	}

	/** The source that IngressPolicy authorizes access from. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressSourceFormProperties {

		/** An AccessLevel resource name that allow resources within the ServicePerimeters to be accessed from the internet. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If no AccessLevel names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all IngressSources will be allowed. */
		accessLevel: FormControl<string | null | undefined>,

		/** A Google Cloud resource that is allowed to ingress the perimeter. Requests from these resources will be allowed to access perimeter data. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`. The project may be in any Google Cloud organization, not just the organization that the perimeter is defined in. `*` is not allowed, the case of allowing all Google Cloud resources only is not supported. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1IngressSourceFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1IngressSourceFormProperties>({
			accessLevel: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressTo {

		/** A list of ApiOperations allowed to be performed by the sources specified in corresponding IngressFrom in this ServicePerimeter. */
		operations?: Array<GoogleIdentityAccesscontextmanagerV1ApiOperation>;

		/** A list of resources, currently only projects in the form `projects/`, protected by this ServicePerimeter that are allowed to be accessed by sources defined in the corresponding IngressFrom. If a single `*` is specified, then access to all resources inside the perimeter are allowed. */
		resources?: Array<string>;
	}

	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressToFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1IngressToFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1IngressToFormProperties>({
		});

	}


	/** Specifies how APIs are allowed to communicate within the Service Perimeter. */
	export interface GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices {

		/** The list of APIs usable within the Service Perimeter. Must be empty unless 'enable_restriction' is True. You can specify a list of individual services, as well as include the 'RESTRICTED-SERVICES' value, which automatically includes all of the services protected by the perimeter. */
		allowedServices?: Array<string>;

		/** Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed_services'. */
		enableRestriction?: boolean | null;
	}

	/** Specifies how APIs are allowed to communicate within the Service Perimeter. */
	export interface GoogleIdentityAccesscontextmanagerV1VpcAccessibleServicesFormProperties {

		/** Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed_services'. */
		enableRestriction: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1VpcAccessibleServicesFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1VpcAccessibleServicesFormProperties>({
			enableRestriction: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Attached resource representation, which is defined by the corresponding service provider. It represents an attached resource's payload. */
	export interface AttachedResource {

		/** The type of this attached resource. Example: `osconfig.googleapis.com/Inventory` You can find the supported attached asset types of each resource in this table: `https://cloud.google.com/asset-inventory/docs/supported-asset-types` */
		assetType?: string | null;

		/** Versioned resource representations of this attached resource. This is repeated because there could be multiple versions of the attached resource representations during version migration. */
		versionedResources?: Array<VersionedResource>;
	}

	/** Attached resource representation, which is defined by the corresponding service provider. It represents an attached resource's payload. */
	export interface AttachedResourceFormProperties {

		/** The type of this attached resource. Example: `osconfig.googleapis.com/Inventory` You can find the supported attached asset types of each resource in this table: `https://cloud.google.com/asset-inventory/docs/supported-asset-types` */
		assetType: FormControl<string | null | undefined>,
	}
	export function CreateAttachedResourceFormGroup() {
		return new FormGroup<AttachedResourceFormProperties>({
			assetType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource representation as defined by the corresponding service providing the resource for a given API version. */
	export interface VersionedResource {

		/** JSON representation of the resource as defined by the corresponding service providing this resource. Example: If the resource is an instance provided by Compute Engine, this field will contain the JSON representation of the instance as defined by Compute Engine: `https://cloud.google.com/compute/docs/reference/rest/v1/instances`. You can find the resource definition for each supported resource type in this table: `https://cloud.google.com/asset-inventory/docs/supported-asset-types` */
		resource?: {[id: string]: any };

		/** API version of the resource. Example: If the resource is an instance provided by Compute Engine v1 API as defined in `https://cloud.google.com/compute/docs/reference/rest/v1/instances`, version will be "v1". */
		version?: string | null;
	}

	/** Resource representation as defined by the corresponding service providing the resource for a given API version. */
	export interface VersionedResourceFormProperties {

		/** JSON representation of the resource as defined by the corresponding service providing this resource. Example: If the resource is an instance provided by Compute Engine, this field will contain the JSON representation of the instance as defined by Compute Engine: `https://cloud.google.com/compute/docs/reference/rest/v1/instances`. You can find the resource definition for each supported resource type in this table: `https://cloud.google.com/asset-inventory/docs/supported-asset-types` */
		resource: FormControl<{[id: string]: any } | null | undefined>,

		/** API version of the resource. Example: If the resource is an instance provided by Compute Engine v1 API as defined in `https://cloud.google.com/compute/docs/reference/rest/v1/instances`, version will be "v1". */
		version: FormControl<string | null | undefined>,
	}
	export function CreateVersionedResourceFormGroup() {
		return new FormGroup<VersionedResourceFormProperties>({
			resource: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Batch get assets history response. */
	export interface BatchGetAssetsHistoryResponse {

		/** A list of assets with valid time windows. */
		assets?: Array<TemporalAsset>;
	}

	/** Batch get assets history response. */
	export interface BatchGetAssetsHistoryResponseFormProperties {
	}
	export function CreateBatchGetAssetsHistoryResponseFormGroup() {
		return new FormGroup<BatchGetAssetsHistoryResponseFormProperties>({
		});

	}


	/** An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window. */
	export interface TemporalAsset {

		/** An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy), or a relationship (e.g. an INSTANCE_TO_INSTANCEGROUP relationship). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		asset?: Asset;

		/** Whether the asset has been deleted or not. */
		deleted?: boolean | null;

		/** An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy), or a relationship (e.g. an INSTANCE_TO_INSTANCEGROUP relationship). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		priorAsset?: Asset;

		/** State of prior_asset. */
		priorAssetState?: TemporalAssetPriorAssetState | null;

		/** A time window specified by its `start_time` and `end_time`. */
		window?: TimeWindow;
	}

	/** An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window. */
	export interface TemporalAssetFormProperties {

		/** Whether the asset has been deleted or not. */
		deleted: FormControl<boolean | null | undefined>,

		/** State of prior_asset. */
		priorAssetState: FormControl<TemporalAssetPriorAssetState | null | undefined>,
	}
	export function CreateTemporalAssetFormGroup() {
		return new FormGroup<TemporalAssetFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
			priorAssetState: new FormControl<TemporalAssetPriorAssetState | null | undefined>(undefined),
		});

	}

	export enum TemporalAssetPriorAssetState { PRIOR_ASSET_STATE_UNSPECIFIED = 0, PRESENT = 1, INVALID = 2, DOES_NOT_EXIST = 3, DELETED = 4 }


	/** A time window specified by its `start_time` and `end_time`. */
	export interface TimeWindow {

		/** End time of the time window (inclusive). If not specified, the current timestamp is used instead. */
		endTime?: string | null;

		/** Start time of the time window (exclusive). */
		startTime?: string | null;
	}

	/** A time window specified by its `start_time` and `end_time`. */
	export interface TimeWindowFormProperties {

		/** End time of the time window (inclusive). If not specified, the current timestamp is used instead. */
		endTime: FormControl<string | null | undefined>,

		/** Start time of the time window (exclusive). */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTimeWindowFormGroup() {
		return new FormGroup<TimeWindowFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response message for AssetService.BatchGetEffectiveIamPolicies. */
	export interface BatchGetEffectiveIamPoliciesResponse {

		/** The effective policies for a batch of resources. Note that the results order is the same as the order of BatchGetEffectiveIamPoliciesRequest.names. When a resource does not have any effective IAM policies, its corresponding policy_result will contain empty EffectiveIamPolicy.policies. */
		policyResults?: Array<EffectiveIamPolicy>;
	}

	/** A response message for AssetService.BatchGetEffectiveIamPolicies. */
	export interface BatchGetEffectiveIamPoliciesResponseFormProperties {
	}
	export function CreateBatchGetEffectiveIamPoliciesResponseFormGroup() {
		return new FormGroup<BatchGetEffectiveIamPoliciesResponseFormProperties>({
		});

	}


	/** The effective IAM policies on one resource. */
	export interface EffectiveIamPolicy {

		/** The [full_resource_name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) for which the policies are computed. This is one of the BatchGetEffectiveIamPoliciesRequest.names the caller provides in the request. */
		fullResourceName?: string | null;

		/** The effective policies for the full_resource_name. These policies include the policy set on the full_resource_name and those set on its parents and ancestors up to the BatchGetEffectiveIamPoliciesRequest.scope. Note that these policies are not filtered according to the resource type of the full_resource_name. These policies are hierarchically ordered by PolicyInfo.attached_resource starting from full_resource_name itself to its parents and ancestors, such that policies[i]'s PolicyInfo.attached_resource is the child of policies[i+1]'s PolicyInfo.attached_resource, if policies[i+1] exists. */
		policies?: Array<PolicyInfo>;
	}

	/** The effective IAM policies on one resource. */
	export interface EffectiveIamPolicyFormProperties {

		/** The [full_resource_name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) for which the policies are computed. This is one of the BatchGetEffectiveIamPoliciesRequest.names the caller provides in the request. */
		fullResourceName: FormControl<string | null | undefined>,
	}
	export function CreateEffectiveIamPolicyFormGroup() {
		return new FormGroup<EffectiveIamPolicyFormProperties>({
			fullResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The IAM policy and its attached resource. */
	export interface PolicyInfo {

		/** The full resource name the policy is directly attached to. */
		attachedResource?: string | null;

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;
	}

	/** The IAM policy and its attached resource. */
	export interface PolicyInfoFormProperties {

		/** The full resource name the policy is directly attached to. */
		attachedResource: FormControl<string | null | undefined>,
	}
	export function CreatePolicyInfoFormGroup() {
		return new FormGroup<PolicyInfoFormProperties>({
			attachedResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A BigQuery destination for exporting assets to. */
	export interface BigQueryDestination {

		/** Required. The BigQuery dataset in format "projects/projectId/datasets/datasetId", to which the snapshot result should be exported. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error. Setting the `contentType` for `exportAssets` determines the [schema](/asset-inventory/docs/exporting-to-bigquery#bigquery-schema) of the BigQuery table. Setting `separateTablesPerAssetType` to `TRUE` also influences the schema. */
		dataset?: string | null;

		/** If the destination table already exists and this flag is `TRUE`, the table will be overwritten by the contents of assets snapshot. If the flag is `FALSE` or unset and the destination table already exists, the export call returns an INVALID_ARGUMEMT error. */
		force?: boolean | null;

		/** Specifications of BigQuery partitioned table as export destination. */
		partitionSpec?: PartitionSpec;

		/** If this flag is `TRUE`, the snapshot results will be written to one or multiple tables, each of which contains results of one asset type. The [force] and [partition_spec] fields will apply to each of them. Field [table] will be concatenated with "_" and the asset type names (see https://cloud.google.com/asset-inventory/docs/supported-asset-types for supported asset types) to construct per-asset-type table names, in which all non-alphanumeric characters like "." and "/" will be substituted by "_". Example: if field [table] is "mytable" and snapshot results contain "storage.googleapis.com/Bucket" assets, the corresponding table name will be "mytable_storage_googleapis_com_Bucket". If any of these tables does not exist, a new table with the concatenated name will be created. When [content_type] in the ExportAssetsRequest is `RESOURCE`, the schema of each table will include RECORD-type columns mapped to the nested fields in the Asset.resource.data field of that asset type (up to the 15 nested level BigQuery supports (https://cloud.google.com/bigquery/docs/nested-repeated#limitations)). The fields in >15 nested levels will be stored in JSON format string as a child column of its parent RECORD column. If error occurs when exporting to any table, the whole export call will return an error but the export results that already succeed will persist. Example: if exporting to table_type_A succeeds when exporting to table_type_B fails during one export call, the results in table_type_A will persist and there will not be partial results persisting in a table. */
		separateTablesPerAssetType?: boolean | null;

		/** Required. The BigQuery table to which the snapshot result should be written. If this table does not exist, a new table with the given name will be created. */
		table?: string | null;
	}

	/** A BigQuery destination for exporting assets to. */
	export interface BigQueryDestinationFormProperties {

		/** Required. The BigQuery dataset in format "projects/projectId/datasets/datasetId", to which the snapshot result should be exported. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error. Setting the `contentType` for `exportAssets` determines the [schema](/asset-inventory/docs/exporting-to-bigquery#bigquery-schema) of the BigQuery table. Setting `separateTablesPerAssetType` to `TRUE` also influences the schema. */
		dataset: FormControl<string | null | undefined>,

		/** If the destination table already exists and this flag is `TRUE`, the table will be overwritten by the contents of assets snapshot. If the flag is `FALSE` or unset and the destination table already exists, the export call returns an INVALID_ARGUMEMT error. */
		force: FormControl<boolean | null | undefined>,

		/** If this flag is `TRUE`, the snapshot results will be written to one or multiple tables, each of which contains results of one asset type. The [force] and [partition_spec] fields will apply to each of them. Field [table] will be concatenated with "_" and the asset type names (see https://cloud.google.com/asset-inventory/docs/supported-asset-types for supported asset types) to construct per-asset-type table names, in which all non-alphanumeric characters like "." and "/" will be substituted by "_". Example: if field [table] is "mytable" and snapshot results contain "storage.googleapis.com/Bucket" assets, the corresponding table name will be "mytable_storage_googleapis_com_Bucket". If any of these tables does not exist, a new table with the concatenated name will be created. When [content_type] in the ExportAssetsRequest is `RESOURCE`, the schema of each table will include RECORD-type columns mapped to the nested fields in the Asset.resource.data field of that asset type (up to the 15 nested level BigQuery supports (https://cloud.google.com/bigquery/docs/nested-repeated#limitations)). The fields in >15 nested levels will be stored in JSON format string as a child column of its parent RECORD column. If error occurs when exporting to any table, the whole export call will return an error but the export results that already succeed will persist. Example: if exporting to table_type_A succeeds when exporting to table_type_B fails during one export call, the results in table_type_A will persist and there will not be partial results persisting in a table. */
		separateTablesPerAssetType: FormControl<boolean | null | undefined>,

		/** Required. The BigQuery table to which the snapshot result should be written. If this table does not exist, a new table with the given name will be created. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateBigQueryDestinationFormGroup() {
		return new FormGroup<BigQueryDestinationFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
			separateTablesPerAssetType: new FormControl<boolean | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifications of BigQuery partitioned table as export destination. */
	export interface PartitionSpec {

		/** The partition key for BigQuery partitioned table. */
		partitionKey?: PartitionSpecPartitionKey | null;
	}

	/** Specifications of BigQuery partitioned table as export destination. */
	export interface PartitionSpecFormProperties {

		/** The partition key for BigQuery partitioned table. */
		partitionKey: FormControl<PartitionSpecPartitionKey | null | undefined>,
	}
	export function CreatePartitionSpecFormGroup() {
		return new FormGroup<PartitionSpecFormProperties>({
			partitionKey: new FormControl<PartitionSpecPartitionKey | null | undefined>(undefined),
		});

	}

	export enum PartitionSpecPartitionKey { PARTITION_KEY_UNSPECIFIED = 0, READ_TIME = 1, REQUEST_TIME = 2 }


	/** Create asset feed request. */
	export interface CreateFeedRequest {

		/** An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics. */
		feed?: Feed;

		/** Required. This is the client-assigned asset feed identifier and it needs to be unique under a specific parent project/folder/organization. */
		feedId?: string | null;
	}

	/** Create asset feed request. */
	export interface CreateFeedRequestFormProperties {

		/** Required. This is the client-assigned asset feed identifier and it needs to be unique under a specific parent project/folder/organization. */
		feedId: FormControl<string | null | undefined>,
	}
	export function CreateCreateFeedRequestFormGroup() {
		return new FormGroup<CreateFeedRequestFormProperties>({
			feedId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics. */
	export interface Feed {

		/** A list of the full names of the assets to receive updates. You must specify either or both of asset_names and asset_types. Only asset updates matching specified asset_names or asset_types are exported to the feed. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. For a list of the full names for supported asset types, see [Resource name format](/asset-inventory/docs/resource-name-format). */
		assetNames?: Array<string>;

		/** A list of types of the assets to receive updates. You must specify either or both of asset_names and asset_types. Only asset updates matching specified asset_names or asset_types are exported to the feed. Example: `"compute.googleapis.com/Disk"` For a list of all supported asset types, see [Supported asset types](/asset-inventory/docs/supported-asset-types). */
		assetTypes?: Array<string>;

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Asset content type. If not specified, no content but the asset name and type will be returned. */
		contentType?: FeedContentType | null;

		/** Output configuration for asset feed destination. */
		feedOutputConfig?: FeedOutputConfig;

		/** Required. The format will be projects/{project_number}/feeds/{client-assigned_feed_identifier} or folders/{folder_number}/feeds/{client-assigned_feed_identifier} or organizations/{organization_number}/feeds/{client-assigned_feed_identifier} The client-assigned feed identifier must be unique within the parent project/folder/organization. */
		name?: string | null;

		/** A list of relationship types to output, for example: `INSTANCE_TO_INSTANCEGROUP`. This field should only be specified if content_type=RELATIONSHIP. * If specified: it outputs specified relationship updates on the [asset_names] or the [asset_types]. It returns an error if any of the [relationship_types] doesn't belong to the supported relationship types of the [asset_names] or [asset_types], or any of the [asset_names] or the [asset_types] doesn't belong to the source types of the [relationship_types]. * Otherwise: it outputs the supported relationships of the types of [asset_names] and [asset_types] or returns an error if any of the [asset_names] or the [asset_types] has no replationship support. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types and relationship types. */
		relationshipTypes?: Array<string>;
	}

	/** An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics. */
	export interface FeedFormProperties {

		/** Asset content type. If not specified, no content but the asset name and type will be returned. */
		contentType: FormControl<FeedContentType | null | undefined>,

		/** Required. The format will be projects/{project_number}/feeds/{client-assigned_feed_identifier} or folders/{folder_number}/feeds/{client-assigned_feed_identifier} or organizations/{organization_number}/feeds/{client-assigned_feed_identifier} The client-assigned feed identifier must be unique within the parent project/folder/organization. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFeedFormGroup() {
		return new FormGroup<FeedFormProperties>({
			contentType: new FormControl<FeedContentType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FeedContentType { CONTENT_TYPE_UNSPECIFIED = 0, RESOURCE = 1, IAM_POLICY = 2, ORG_POLICY = 3, ACCESS_POLICY = 4, OS_INVENTORY = 5, RELATIONSHIP = 6 }


	/** Output configuration for asset feed destination. */
	export interface FeedOutputConfig {

		/** A Pub/Sub destination. */
		pubsubDestination?: PubsubDestination;
	}

	/** Output configuration for asset feed destination. */
	export interface FeedOutputConfigFormProperties {
	}
	export function CreateFeedOutputConfigFormGroup() {
		return new FormGroup<FeedOutputConfigFormProperties>({
		});

	}


	/** A Pub/Sub destination. */
	export interface PubsubDestination {

		/** The name of the Pub/Sub topic to publish to. Example: `projects/PROJECT_ID/topics/TOPIC_ID`. */
		topic?: string | null;
	}

	/** A Pub/Sub destination. */
	export interface PubsubDestinationFormProperties {

		/** The name of the Pub/Sub topic to publish to. Example: `projects/PROJECT_ID/topics/TOPIC_ID`. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePubsubDestinationFormGroup() {
		return new FormGroup<PubsubDestinationFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The effective tags and the ancestor resources from which they were inherited. */
	export interface EffectiveTagDetails {

		/** The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of the ancestor from which an effective_tag is inherited, according to [tag inheritance](https://cloud.google.com/resource-manager/docs/tags/tags-overview#inheritance). */
		attachedResource?: string | null;

		/** The effective tags inherited from the attached_resource. Note that tags with the same key but different values may attach to resources at a different hierarchy levels. The lower hierarchy tag value will overwrite the higher hierarchy tag value of the same tag key. In this case, the tag value at the higher hierarchy level will be removed. For more information, see [tag inheritance](https://cloud.google.com/resource-manager/docs/tags/tags-overview#inheritance). */
		effectiveTags?: Array<Tag>;
	}

	/** The effective tags and the ancestor resources from which they were inherited. */
	export interface EffectiveTagDetailsFormProperties {

		/** The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of the ancestor from which an effective_tag is inherited, according to [tag inheritance](https://cloud.google.com/resource-manager/docs/tags/tags-overview#inheritance). */
		attachedResource: FormControl<string | null | undefined>,
	}
	export function CreateEffectiveTagDetailsFormGroup() {
		return new FormGroup<EffectiveTagDetailsFormProperties>({
			attachedResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The key and value for a [tag](https://cloud.google.com/resource-manager/docs/tags/tags-overview), */
	export interface Tag {

		/** TagKey namespaced name, in the format of {ORG_ID}/{TAG_KEY_SHORT_NAME}. */
		tagKey?: string | null;

		/** TagValue namespaced name, in the format of {ORG_ID}/{TAG_KEY_SHORT_NAME}/{TAG_VALUE_SHORT_NAME}. */
		tagValue?: string | null;

		/** TagValue ID, in the format of tagValues/{TAG_VALUE_ID}. */
		tagValueId?: string | null;
	}

	/** The key and value for a [tag](https://cloud.google.com/resource-manager/docs/tags/tags-overview), */
	export interface TagFormProperties {

		/** TagKey namespaced name, in the format of {ORG_ID}/{TAG_KEY_SHORT_NAME}. */
		tagKey: FormControl<string | null | undefined>,

		/** TagValue namespaced name, in the format of {ORG_ID}/{TAG_KEY_SHORT_NAME}/{TAG_VALUE_SHORT_NAME}. */
		tagValue: FormControl<string | null | undefined>,

		/** TagValue ID, in the format of tagValues/{TAG_VALUE_ID}. */
		tagValueId: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			tagKey: new FormControl<string | null | undefined>(undefined),
			tagValue: new FormControl<string | null | undefined>(undefined),
			tagValueId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Explanation about the IAM policy search result. */
	export interface Explanation {

		/** The map from roles to their included permissions that match the permission query (i.e., a query containing `policy.role.permissions:`). Example: if query `policy.role.permissions:compute.disk.get` matches a policy binding that contains owner role, the matched_permissions will be `{"roles/owner": ["compute.disk.get"]}`. The roles can also be found in the returned `policy` bindings. Note that the map is populated only for requests with permission queries. */
		matchedPermissions?: {[id: string]: Permissions };
	}

	/** Explanation about the IAM policy search result. */
	export interface ExplanationFormProperties {

		/** The map from roles to their included permissions that match the permission query (i.e., a query containing `policy.role.permissions:`). Example: if query `policy.role.permissions:compute.disk.get` matches a policy binding that contains owner role, the matched_permissions will be `{"roles/owner": ["compute.disk.get"]}`. The roles can also be found in the returned `policy` bindings. Note that the map is populated only for requests with permission queries. */
		matchedPermissions: FormControl<{[id: string]: Permissions } | null | undefined>,
	}
	export function CreateExplanationFormGroup() {
		return new FormGroup<ExplanationFormProperties>({
			matchedPermissions: new FormControl<{[id: string]: Permissions } | null | undefined>(undefined),
		});

	}


	/** IAM permissions */
	export interface Permissions {

		/** A list of permissions. A sample permission string: `compute.disk.get`. */
		permissions?: Array<string>;
	}

	/** IAM permissions */
	export interface PermissionsFormProperties {
	}
	export function CreatePermissionsFormGroup() {
		return new FormGroup<PermissionsFormProperties>({
		});

	}


	/** Export asset request. */
	export interface ExportAssetsRequest {

		/** A list of asset types to take a snapshot for. For example: "compute.googleapis.com/Disk". Regular expressions are also supported. For example: * "compute.googleapis.com.*" snapshots resources whose asset type starts with "compute.googleapis.com". * ".*Instance" snapshots resources whose asset type ends with "Instance". * ".*Instance.*" snapshots resources whose asset type contains "Instance". See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported asset type, an INVALID_ARGUMENT error will be returned. If specified, only matching assets will be returned, otherwise, it will snapshot all asset types. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types. */
		assetTypes?: Array<string>;

		/** Asset content type. If not specified, no content but the asset name will be returned. */
		contentType?: FeedContentType | null;

		/** Output configuration for export assets destination. */
		outputConfig?: OutputConfig;

		/** Timestamp to take an asset snapshot. This can only be set to a timestamp between the current time and the current time minus 35 days (inclusive). If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query may get different results. */
		readTime?: string | null;

		/** A list of relationship types to export, for example: `INSTANCE_TO_INSTANCEGROUP`. This field should only be specified if content_type=RELATIONSHIP. * If specified: it snapshots specified relationships. It returns an error if any of the [relationship_types] doesn't belong to the supported relationship types of the [asset_types] or if any of the [asset_types] doesn't belong to the source types of the [relationship_types]. * Otherwise: it snapshots the supported relationships for all [asset_types] or returns an error if any of the [asset_types] has no relationship support. An unspecified asset types field means all supported asset_types. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types and relationship types. */
		relationshipTypes?: Array<string>;
	}

	/** Export asset request. */
	export interface ExportAssetsRequestFormProperties {

		/** Asset content type. If not specified, no content but the asset name will be returned. */
		contentType: FormControl<FeedContentType | null | undefined>,

		/** Timestamp to take an asset snapshot. This can only be set to a timestamp between the current time and the current time minus 35 days (inclusive). If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query may get different results. */
		readTime: FormControl<string | null | undefined>,
	}
	export function CreateExportAssetsRequestFormGroup() {
		return new FormGroup<ExportAssetsRequestFormProperties>({
			contentType: new FormControl<FeedContentType | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output configuration for export assets destination. */
	export interface OutputConfig {

		/** A BigQuery destination for exporting assets to. */
		bigqueryDestination?: BigQueryDestination;

		/** A Cloud Storage location. */
		gcsDestination?: GcsDestination;
	}

	/** Output configuration for export assets destination. */
	export interface OutputConfigFormProperties {
	}
	export function CreateOutputConfigFormGroup() {
		return new FormGroup<OutputConfigFormProperties>({
		});

	}


	/** A Cloud Storage location. */
	export interface GcsDestination {

		/** The URI of the Cloud Storage object. It's the same URI that is used by gsutil. Example: "gs://bucket_name/object_name". See [Viewing and Editing Object Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata) for more information. If the specified Cloud Storage object already exists and there is no [hold](https://cloud.google.com/storage/docs/object-holds), it will be overwritten with the exported result. */
		uri?: string | null;

		/** The URI prefix of all generated Cloud Storage objects. Example: "gs://bucket_name/object_name_prefix". Each object URI is in format: "gs://bucket_name/object_name_prefix// and only contains assets for that type. starts from 0. Example: "gs://bucket_name/object_name_prefix/compute.googleapis.com/Disk/0" is the first shard of output objects containing all compute.googleapis.com/Disk assets. An INVALID_ARGUMENT error will be returned if file with the same name "gs://bucket_name/object_name_prefix" already exists. */
		uriPrefix?: string | null;
	}

	/** A Cloud Storage location. */
	export interface GcsDestinationFormProperties {

		/** The URI of the Cloud Storage object. It's the same URI that is used by gsutil. Example: "gs://bucket_name/object_name". See [Viewing and Editing Object Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata) for more information. If the specified Cloud Storage object already exists and there is no [hold](https://cloud.google.com/storage/docs/object-holds), it will be overwritten with the exported result. */
		uri: FormControl<string | null | undefined>,

		/** The URI prefix of all generated Cloud Storage objects. Example: "gs://bucket_name/object_name_prefix". Each object URI is in format: "gs://bucket_name/object_name_prefix// and only contains assets for that type. starts from 0. Example: "gs://bucket_name/object_name_prefix/compute.googleapis.com/Disk/0" is the first shard of output objects containing all compute.googleapis.com/Disk assets. An INVALID_ARGUMENT error will be returned if file with the same name "gs://bucket_name/object_name_prefix" already exists. */
		uriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGcsDestinationFormGroup() {
		return new FormGroup<GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
			uriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BigQuery destination. */
	export interface GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination {

		/** Required. The BigQuery dataset where the query results will be saved. It has the format of "projects/{projectId}/datasets/{datasetId}". */
		dataset?: string | null;

		/** Required. The BigQuery table where the query results will be saved. If this table does not exist, a new table with the given name will be created. */
		table?: string | null;

		/** Specifies the action that occurs if the destination table or partition already exists. The following values are supported: * WRITE_TRUNCATE: If the table or partition already exists, BigQuery overwrites the entire table or all the partitions data. * WRITE_APPEND: If the table or partition already exists, BigQuery appends the data to the table or the latest partition. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. */
		writeDisposition?: string | null;
	}

	/** BigQuery destination. */
	export interface GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestinationFormProperties {

		/** Required. The BigQuery dataset where the query results will be saved. It has the format of "projects/{projectId}/datasets/{datasetId}". */
		dataset: FormControl<string | null | undefined>,

		/** Required. The BigQuery table where the query results will be saved. If this table does not exist, a new table with the given name will be created. */
		table: FormControl<string | null | undefined>,

		/** Specifies the action that occurs if the destination table or partition already exists. The following values are supported: * WRITE_TRUNCATE: If the table or partition already exists, BigQuery overwrites the entire table or all the partitions data. * WRITE_APPEND: If the table or partition already exists, BigQuery appends the data to the table or the latest partition. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. */
		writeDisposition: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestinationFormGroup() {
		return new FormGroup<GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestinationFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			writeDisposition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface GoogleCloudAssetV1p7beta1Asset {

		/** An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied. */
		accessLevel?: GoogleIdentityAccesscontextmanagerV1AccessLevel;

		/** `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization. */
		accessPolicy?: GoogleIdentityAccesscontextmanagerV1AccessPolicy;

		/** The ancestry path of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the asset is a project, folder, or organization, the ancestry path starts from the asset itself. Example: `["projects/123456789", "folders/5432", "organizations/1234"]` */
		ancestors?: Array<string>;

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType?: string | null;

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		iamPolicy?: Policy;

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		name?: string | null;

		/** A representation of an [organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy). There can be more than one organization policy with different constraints set on a given resource. */
		orgPolicy?: Array<GoogleCloudOrgpolicyV1Policy>;

		/** The detailed related assets with the `relationship_type`. */
		relatedAssets?: GoogleCloudAssetV1p7beta1RelatedAssets;

		/** A representation of a Google Cloud resource. */
		resource?: GoogleCloudAssetV1p7beta1Resource;

		/** `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project or VPC network can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges. */
		servicePerimeter?: GoogleIdentityAccesscontextmanagerV1ServicePerimeter;

		/** The last update timestamp of an asset. update_time is updated when create/update/delete operation is performed. */
		updateTime?: string | null;
	}

	/** An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface GoogleCloudAssetV1p7beta1AssetFormProperties {

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType: FormControl<string | null | undefined>,

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		name: FormControl<string | null | undefined>,

		/** The last update timestamp of an asset. update_time is updated when create/update/delete operation is performed. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p7beta1AssetFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1AssetFormProperties>({
			assetType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The detailed related assets with the `relationship_type`. */
	export interface GoogleCloudAssetV1p7beta1RelatedAssets {

		/** The peer resources of the relationship. */
		assets?: Array<GoogleCloudAssetV1p7beta1RelatedAsset>;

		/** The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`. */
		relationshipAttributes?: GoogleCloudAssetV1p7beta1RelationshipAttributes;
	}

	/** The detailed related assets with the `relationship_type`. */
	export interface GoogleCloudAssetV1p7beta1RelatedAssetsFormProperties {
	}
	export function CreateGoogleCloudAssetV1p7beta1RelatedAssetsFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1RelatedAssetsFormProperties>({
		});

	}


	/** An asset identify in Google Cloud which contains its name, type and ancestors. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface GoogleCloudAssetV1p7beta1RelatedAsset {

		/** The ancestors of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. Example: `["projects/123456789", "folders/5432", "organizations/1234"]` */
		ancestors?: Array<string>;

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		asset?: string | null;

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType?: string | null;
	}

	/** An asset identify in Google Cloud which contains its name, type and ancestors. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface GoogleCloudAssetV1p7beta1RelatedAssetFormProperties {

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		asset: FormControl<string | null | undefined>,

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p7beta1RelatedAssetFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1RelatedAssetFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			assetType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`. */
	export interface GoogleCloudAssetV1p7beta1RelationshipAttributes {

		/** The detail of the relationship, e.g. `contains`, `attaches` */
		action?: string | null;

		/** The source asset type. Example: `compute.googleapis.com/Instance` */
		sourceResourceType?: string | null;

		/** The target asset type. Example: `compute.googleapis.com/Disk` */
		targetResourceType?: string | null;

		/** The unique identifier of the relationship type. Example: `INSTANCE_TO_INSTANCEGROUP` */
		type?: string | null;
	}

	/** The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`. */
	export interface GoogleCloudAssetV1p7beta1RelationshipAttributesFormProperties {

		/** The detail of the relationship, e.g. `contains`, `attaches` */
		action: FormControl<string | null | undefined>,

		/** The source asset type. Example: `compute.googleapis.com/Instance` */
		sourceResourceType: FormControl<string | null | undefined>,

		/** The target asset type. Example: `compute.googleapis.com/Disk` */
		targetResourceType: FormControl<string | null | undefined>,

		/** The unique identifier of the relationship type. Example: `INSTANCE_TO_INSTANCEGROUP` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p7beta1RelationshipAttributesFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1RelationshipAttributesFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			sourceResourceType: new FormControl<string | null | undefined>(undefined),
			targetResourceType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a Google Cloud resource. */
	export interface GoogleCloudAssetV1p7beta1Resource {

		/** The content of the resource, in which some sensitive fields are removed and may not be present. */
		data?: {[id: string]: any };

		/** The URL of the discovery document containing the resource's JSON schema. Example: `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryDocumentUri?: string | null;

		/** The JSON schema name listed in the discovery document. Example: `Project` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryName?: string | null;

		/** The location of the resource in Google Cloud, such as its zone and region. For more information, see https://cloud.google.com/about/locations/. */
		location?: string | null;

		/** The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. For Google Cloud assets, this value is the parent resource defined in the [IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: `//cloudresourcemanager.googleapis.com/projects/my_project_123` For third-party assets, this field may be set differently. */
		parent?: string | null;

		/** The REST URL for accessing the resource. An HTTP `GET` request using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123` This value is unspecified for resources without a REST API. */
		resourceUrl?: string | null;

		/** The API version. Example: `v1` */
		version?: string | null;
	}

	/** A representation of a Google Cloud resource. */
	export interface GoogleCloudAssetV1p7beta1ResourceFormProperties {

		/** The content of the resource, in which some sensitive fields are removed and may not be present. */
		data: FormControl<{[id: string]: any } | null | undefined>,

		/** The URL of the discovery document containing the resource's JSON schema. Example: `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryDocumentUri: FormControl<string | null | undefined>,

		/** The JSON schema name listed in the discovery document. Example: `Project` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryName: FormControl<string | null | undefined>,

		/** The location of the resource in Google Cloud, such as its zone and region. For more information, see https://cloud.google.com/about/locations/. */
		location: FormControl<string | null | undefined>,

		/** The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. For Google Cloud assets, this value is the parent resource defined in the [IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: `//cloudresourcemanager.googleapis.com/projects/my_project_123` For third-party assets, this field may be set differently. */
		parent: FormControl<string | null | undefined>,

		/** The REST URL for accessing the resource. An HTTP `GET` request using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123` This value is unspecified for resources without a REST API. */
		resourceUrl: FormControl<string | null | undefined>,

		/** The API version. Example: `v1` */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p7beta1ResourceFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1ResourceFormProperties>({
			data: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			discoveryDocumentUri: new FormControl<string | null | undefined>(undefined),
			discoveryName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			resourceUrl: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A result of IAM Policy search, containing information of an IAM policy. */
	export interface IamPolicySearchResult {

		/** The type of the resource associated with this IAM policy. Example: `compute.googleapis.com/Disk`. To search against the `asset_type`: * specify the `asset_types` field in your search request. */
		assetType?: string | null;

		/** Explanation about the IAM policy search result. */
		explanation?: Explanation;

		/** The folder(s) that the IAM policy belongs to, in the form of folders/{FOLDER_NUMBER}. This field is available when the IAM policy belongs to one or more folders. To search against `folders`: * use a field query. Example: `folders:(123 OR 456)` * use a free text query. Example: `123` * specify the `scope` field as this folder in your search request. */
		folders?: Array<string>;

		/** The organization that the IAM policy belongs to, in the form of organizations/{ORGANIZATION_NUMBER}. This field is available when the IAM policy belongs to an organization. To search against `organization`: * use a field query. Example: `organization:123` * use a free text query. Example: `123` * specify the `scope` field as this organization in your search request. */
		organization?: string | null;

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;

		/** The project that the associated Google Cloud resource belongs to, in the form of projects/{PROJECT_NUMBER}. If an IAM policy is set on a resource (like VM instance, Cloud Storage bucket), the project field will indicate the project that contains the resource. If an IAM policy is set on a folder or orgnization, this field will be empty. To search against the `project`: * specify the `scope` field as this project in your search request. */
		project?: string | null;

		/** The full resource name of the resource associated with this IAM policy. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Cloud Asset Inventory Resource Name Format](https://cloud.google.com/asset-inventory/docs/resource-name-format) for more information. To search against the `resource`: * use a field query. Example: `resource:organizations/123` */
		resource?: string | null;
	}

	/** A result of IAM Policy search, containing information of an IAM policy. */
	export interface IamPolicySearchResultFormProperties {

		/** The type of the resource associated with this IAM policy. Example: `compute.googleapis.com/Disk`. To search against the `asset_type`: * specify the `asset_types` field in your search request. */
		assetType: FormControl<string | null | undefined>,

		/** The organization that the IAM policy belongs to, in the form of organizations/{ORGANIZATION_NUMBER}. This field is available when the IAM policy belongs to an organization. To search against `organization`: * use a field query. Example: `organization:123` * use a free text query. Example: `123` * specify the `scope` field as this organization in your search request. */
		organization: FormControl<string | null | undefined>,

		/** The project that the associated Google Cloud resource belongs to, in the form of projects/{PROJECT_NUMBER}. If an IAM policy is set on a resource (like VM instance, Cloud Storage bucket), the project field will indicate the project that contains the resource. If an IAM policy is set on a folder or orgnization, this field will be empty. To search against the `project`: * specify the `scope` field as this project in your search request. */
		project: FormControl<string | null | undefined>,

		/** The full resource name of the resource associated with this IAM policy. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Cloud Asset Inventory Resource Name Format](https://cloud.google.com/asset-inventory/docs/resource-name-format) for more information. To search against the `resource`: * use a field query. Example: `resource:organizations/123` */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateIamPolicySearchResultFormGroup() {
		return new FormGroup<IamPolicySearchResultFormProperties>({
			assetType: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListAssets response. */
	export interface ListAssetsResponse {

		/** Assets. */
		assets?: Array<Asset>;

		/** Token to retrieve the next page of results. It expires 72 hours after the page token for the first page is generated. Set to empty if there are no remaining results. */
		nextPageToken?: string | null;

		/** Time the snapshot was taken. */
		readTime?: string | null;
	}

	/** ListAssets response. */
	export interface ListAssetsResponseFormProperties {

		/** Token to retrieve the next page of results. It expires 72 hours after the page token for the first page is generated. Set to empty if there are no remaining results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Time the snapshot was taken. */
		readTime: FormControl<string | null | undefined>,
	}
	export function CreateListAssetsResponseFormGroup() {
		return new FormGroup<ListAssetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFeedsResponse {

		/** A list of feeds. */
		feeds?: Array<Feed>;
	}
	export interface ListFeedsResponseFormProperties {
	}
	export function CreateListFeedsResponseFormGroup() {
		return new FormGroup<ListFeedsResponseFormProperties>({
		});

	}


	/** Response of listing saved queries. */
	export interface ListSavedQueriesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** A list of savedQueries. */
		savedQueries?: Array<SavedQuery>;
	}

	/** Response of listing saved queries. */
	export interface ListSavedQueriesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSavedQueriesResponseFormGroup() {
		return new FormGroup<ListSavedQueriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A saved query which can be shared with others or used later. */
	export interface SavedQuery {

		/** The query content. */
		content?: QueryContent;

		/** Output only. The create time of this saved query. */
		createTime?: string | null;

		/** Output only. The account's email address who has created this saved query. */
		creator?: string | null;

		/** The description of this saved query. This value should be fewer than 255 characters. */
		description?: string | null;

		/** Labels applied on the resource. This value should not contain more than 10 entries. The key and value of each entry must be non-empty and fewer than 64 characters. */
		labels?: {[id: string]: string };

		/** Output only. The last update time of this saved query. */
		lastUpdateTime?: string | null;

		/** Output only. The account's email address who has updated this saved query most recently. */
		lastUpdater?: string | null;

		/** The resource name of the saved query. The format must be: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id */
		name?: string | null;
	}

	/** A saved query which can be shared with others or used later. */
	export interface SavedQueryFormProperties {

		/** Output only. The create time of this saved query. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The account's email address who has created this saved query. */
		creator: FormControl<string | null | undefined>,

		/** The description of this saved query. This value should be fewer than 255 characters. */
		description: FormControl<string | null | undefined>,

		/** Labels applied on the resource. This value should not contain more than 10 entries. The key and value of each entry must be non-empty and fewer than 64 characters. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The last update time of this saved query. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** Output only. The account's email address who has updated this saved query most recently. */
		lastUpdater: FormControl<string | null | undefined>,

		/** The resource name of the saved query. The format must be: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSavedQueryFormGroup() {
		return new FormGroup<SavedQueryFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			creator: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			lastUpdater: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The query content. */
	export interface QueryContent {

		/** IAM policy analysis query message. */
		iamPolicyAnalysisQuery?: IamPolicyAnalysisQuery;
	}

	/** The query content. */
	export interface QueryContentFormProperties {
	}
	export function CreateQueryContentFormGroup() {
		return new FormGroup<QueryContentFormProperties>({
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Output configuration query assets. */
	export interface QueryAssetsOutputConfig {

		/** BigQuery destination. */
		bigqueryDestination?: GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination;
	}

	/** Output configuration query assets. */
	export interface QueryAssetsOutputConfigFormProperties {
	}
	export function CreateQueryAssetsOutputConfigFormGroup() {
		return new FormGroup<QueryAssetsOutputConfigFormProperties>({
		});

	}


	/** QueryAssets request. */
	export interface QueryAssetsRequest {

		/** Optional. Reference to the query job, which is from the `QueryAssetsResponse` of previous `QueryAssets` call. */
		jobReference?: string | null;

		/** Output configuration query assets. */
		outputConfig?: QueryAssetsOutputConfig;

		/** Optional. The maximum number of rows to return in the results. Responses are limited to 10 MB and 1000 rows. By default, the maximum row count is 1000. When the byte or row count limit is reached, the rest of the query results will be paginated. The field will be ignored when [output_config] is specified. */
		pageSize?: number | null;

		/** Optional. A page token received from previous `QueryAssets`. The field will be ignored when [output_config] is specified. */
		pageToken?: string | null;

		/** Optional. Queries cloud assets as they appeared at the specified point in time. */
		readTime?: string | null;

		/** A time window specified by its `start_time` and `end_time`. */
		readTimeWindow?: TimeWindow;

		/** Optional. A SQL statement that's compatible with [BigQuery SQL](https://cloud.google.com/bigquery/docs/introduction-sql). */
		statement?: string | null;

		/** Optional. Specifies the maximum amount of time that the client is willing to wait for the query to complete. By default, this limit is 5 min for the first query, and 1 minute for the following queries. If the query is complete, the `done` field in the `QueryAssetsResponse` is true, otherwise false. Like BigQuery [jobs.query API](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query#queryrequest) The call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. The field will be ignored when [output_config] is specified. */
		timeout?: string | null;
	}

	/** QueryAssets request. */
	export interface QueryAssetsRequestFormProperties {

		/** Optional. Reference to the query job, which is from the `QueryAssetsResponse` of previous `QueryAssets` call. */
		jobReference: FormControl<string | null | undefined>,

		/** Optional. The maximum number of rows to return in the results. Responses are limited to 10 MB and 1000 rows. By default, the maximum row count is 1000. When the byte or row count limit is reached, the rest of the query results will be paginated. The field will be ignored when [output_config] is specified. */
		pageSize: FormControl<number | null | undefined>,

		/** Optional. A page token received from previous `QueryAssets`. The field will be ignored when [output_config] is specified. */
		pageToken: FormControl<string | null | undefined>,

		/** Optional. Queries cloud assets as they appeared at the specified point in time. */
		readTime: FormControl<string | null | undefined>,

		/** Optional. A SQL statement that's compatible with [BigQuery SQL](https://cloud.google.com/bigquery/docs/introduction-sql). */
		statement: FormControl<string | null | undefined>,

		/** Optional. Specifies the maximum amount of time that the client is willing to wait for the query to complete. By default, this limit is 5 min for the first query, and 1 minute for the following queries. If the query is complete, the `done` field in the `QueryAssetsResponse` is true, otherwise false. Like BigQuery [jobs.query API](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query#queryrequest) The call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. The field will be ignored when [output_config] is specified. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateQueryAssetsRequestFormGroup() {
		return new FormGroup<QueryAssetsRequestFormProperties>({
			jobReference: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
			statement: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** QueryAssets response. */
	export interface QueryAssetsResponse {

		/** The query response, which can be either an `error` or a valid `response`. If `done` == `false` and the query result is being saved in a output, the output_config field will be set. If `done` == `true`, exactly one of `error`, `query_result` or `output_config` will be set. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Reference to a query job. */
		jobReference?: string | null;

		/** Output configuration query assets. */
		outputConfig?: QueryAssetsOutputConfig;

		/** Execution results of the query. The result is formatted as rows represented by BigQuery compatible [schema]. When pagination is necessary, it will contains the page token to retrieve the results of following pages. */
		queryResult?: QueryResult;
	}

	/** QueryAssets response. */
	export interface QueryAssetsResponseFormProperties {

		/** The query response, which can be either an `error` or a valid `response`. If `done` == `false` and the query result is being saved in a output, the output_config field will be set. If `done` == `true`, exactly one of `error`, `query_result` or `output_config` will be set. */
		done: FormControl<boolean | null | undefined>,

		/** Reference to a query job. */
		jobReference: FormControl<string | null | undefined>,
	}
	export function CreateQueryAssetsResponseFormGroup() {
		return new FormGroup<QueryAssetsResponseFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			jobReference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Execution results of the query. The result is formatted as rows represented by BigQuery compatible [schema]. When pagination is necessary, it will contains the page token to retrieve the results of following pages. */
	export interface QueryResult {

		/** Token to retrieve the next page of the results. */
		nextPageToken?: string | null;

		/** Each row hold a query result in the format of `Struct`. */
		rows?: Array<string>;

		/** BigQuery Compatible table schema. */
		schema?: TableSchema;

		/** Total rows of the whole query results. */
		totalRows?: string | null;
	}

	/** Execution results of the query. The result is formatted as rows represented by BigQuery compatible [schema]. When pagination is necessary, it will contains the page token to retrieve the results of following pages. */
	export interface QueryResultFormProperties {

		/** Token to retrieve the next page of the results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Total rows of the whole query results. */
		totalRows: FormControl<string | null | undefined>,
	}
	export function CreateQueryResultFormGroup() {
		return new FormGroup<QueryResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalRows: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BigQuery Compatible table schema. */
	export interface TableSchema {

		/** Describes the fields in a table. */
		fields?: Array<TableFieldSchema>;
	}

	/** BigQuery Compatible table schema. */
	export interface TableSchemaFormProperties {
	}
	export function CreateTableSchemaFormGroup() {
		return new FormGroup<TableSchemaFormProperties>({
		});

	}


	/** A field in TableSchema. */
	export interface TableFieldSchema {

		/** The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 128 characters. */
		field?: string | null;

		/** Describes the nested schema fields if the type property is set to RECORD. */
		fields?: Array<TableFieldSchema>;

		/** The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE. */
		mode?: string | null;

		/** The field data type. Possible values include * STRING * BYTES * INTEGER * FLOAT * BOOLEAN * TIMESTAMP * DATE * TIME * DATETIME * GEOGRAPHY, * NUMERIC, * BIGNUMERIC, * RECORD (where RECORD indicates that the field contains a nested schema). */
		type?: string | null;
	}

	/** A field in TableSchema. */
	export interface TableFieldSchemaFormProperties {

		/** The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 128 characters. */
		field: FormControl<string | null | undefined>,

		/** The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE. */
		mode: FormControl<string | null | undefined>,

		/** The field data type. Possible values include * STRING * BYTES * INTEGER * FLOAT * BOOLEAN * TIMESTAMP * DATE * TIME * DATETIME * GEOGRAPHY, * NUMERIC, * BIGNUMERIC, * RECORD (where RECORD indicates that the field contains a nested schema). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTableFieldSchemaFormGroup() {
		return new FormGroup<TableFieldSchemaFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The detailed related resource. */
	export interface RelatedResource {

		/** The type of the asset. Example: `compute.googleapis.com/Instance` */
		assetType?: string | null;

		/** The full resource name of the related resource. Example: `//compute.googleapis.com/projects/my_proj_123/zones/instance/instance123` */
		fullResourceName?: string | null;
	}

	/** The detailed related resource. */
	export interface RelatedResourceFormProperties {

		/** The type of the asset. Example: `compute.googleapis.com/Instance` */
		assetType: FormControl<string | null | undefined>,

		/** The full resource name of the related resource. Example: `//compute.googleapis.com/projects/my_proj_123/zones/instance/instance123` */
		fullResourceName: FormControl<string | null | undefined>,
	}
	export function CreateRelatedResourceFormGroup() {
		return new FormGroup<RelatedResourceFormProperties>({
			assetType: new FormControl<string | null | undefined>(undefined),
			fullResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The related resources of the primary resource. */
	export interface RelatedResources {

		/** The detailed related resources of the primary resource. */
		relatedResources?: Array<RelatedResource>;
	}

	/** The related resources of the primary resource. */
	export interface RelatedResourcesFormProperties {
	}
	export function CreateRelatedResourcesFormGroup() {
		return new FormGroup<RelatedResourcesFormProperties>({
		});

	}


	/** A result of Resource Search, containing information of a cloud resource. Next ID: 34 */
	export interface ResourceSearchResult {

		/** The additional searchable attributes of this resource. The attributes may vary from one resource type to another. Examples: `projectId` for Project, `dnsName` for DNS ManagedZone. This field contains a subset of the resource metadata fields that are returned by the List or Get APIs provided by the corresponding Google Cloud service (e.g., Compute Engine). see [API references and supported searchable attributes](https://cloud.google.com/asset-inventory/docs/supported-asset-types) to see which fields are included. You can search values of these fields through free text search. However, you should not consume the field programically as the field names and values may change as the Google Cloud service updates to a new incompatible API version. To search against the `additional_attributes`: * Use a free text query to match the attributes values. Example: to search `additional_attributes = { dnsName: "foobar" }`, you can issue a query `foobar`. */
		additionalAttributes?: {[id: string]: any };

		/** The type of this resource. Example: `compute.googleapis.com/Disk`. To search against the `asset_type`: * Specify the `asset_type` field in your search request. */
		assetType?: string | null;

		/** Attached resources of this resource. For example, an OSConfig Inventory is an attached resource of a Compute Instance. This field is repeated because a resource could have multiple attached resources. This `attached_resources` field is not searchable. Some attributes of the attached resources are exposed in `additional_attributes` field, so as to allow users to search on them. */
		attachedResources?: Array<AttachedResource>;

		/** The create timestamp of this resource, at which the resource was created. The granularity is in seconds. Timestamp.nanos will always be 0. This field is available only when the resource's Protobuf contains it. To search against `create_time`: * Use a field query. - value in seconds since unix epoch. Example: `createTime > 1609459200` - value in date string. Example: `createTime > 2021-01-01` - value in date-time string (must be quoted). Example: `createTime > "2021-01-01T00:00:00"` */
		createTime?: string | null;

		/** One or more paragraphs of text description of this resource. Maximum length could be up to 1M bytes. This field is available only when the resource's Protobuf contains it. To search against the `description`: * Use a field query. Example: `description:"important instance"` * Use a free text query. Example: `"important instance"` */
		description?: string | null;

		/** The display name of this resource. This field is available only when the resource's Protobuf contains it. To search against the `display_name`: * Use a field query. Example: `displayName:"My Instance"` * Use a free text query. Example: `"My Instance"` */
		displayName?: string | null;

		/** The effective tags on this resource. All of the tags that are both attached to and inherited by a resource are collectively called the effective tags. For more information, see [tag inheritance](https://cloud.google.com/resource-manager/docs/tags/tags-overview#inheritance). To search against the `effective_tags`: * Use a field query. Example: - `effectiveTagKeys:"123456789/env*"` - `effectiveTagKeys="123456789/env"` - `effectiveTagKeys:"env"` - `effectiveTagValues:"env"` - `effectiveTagValues:"env/prod"` - `effectiveTagValues:"123456789/env/prod*"` - `effectiveTagValues="123456789/env/prod"` - `effectiveTagValueIds="tagValues/456"` */
		effectiveTags?: Array<EffectiveTagDetails>;

		/** The folder(s) that this resource belongs to, in the form of folders/{FOLDER_NUMBER}. This field is available when the resource belongs to one or more folders. To search against `folders`: * Use a field query. Example: `folders:(123 OR 456)` * Use a free text query. Example: `123` * Specify the `scope` field as this folder in your search request. */
		folders?: Array<string>;

		/** The Cloud KMS [CryptoKey](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys) name or [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions) name. This field only presents for the purpose of backward compatibility. Use the `kms_keys` field to retrieve Cloud KMS key information. This field is available only when the resource's Protobuf contains it and will only be populated for [these resource types](https://cloud.google.com/asset-inventory/docs/legacy-field-names#resource_types_with_the_to_be_deprecated_kmskey_field) for backward compatible purposes. To search against the `kms_key`: * Use a field query. Example: `kmsKey:key` * Use a free text query. Example: `key` */
		kmsKey?: string | null;

		/** The Cloud KMS [CryptoKey](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys) names or [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions) names. This field is available only when the resource's Protobuf contains it. To search against the `kms_keys`: * Use a field query. Example: `kmsKeys:key` * Use a free text query. Example: `key` */
		kmsKeys?: Array<string>;

		/** Labels associated with this resource. See [Labelling and grouping Google Cloud resources](https://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information. This field is available only when the resource's Protobuf contains it. To search against the `labels`: * Use a field query: - query on any label's key or value. Example: `labels:prod` - query by a given label. Example: `labels.env:prod` - query by a given label's existence. Example: `labels.env:*` * Use a free text query. Example: `prod` */
		labels?: {[id: string]: string };

		/** Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`. This field is available only when the resource's Protobuf contains it. To search against the `location`: * Use a field query. Example: `location:us-west*` * Use a free text query. Example: `us-west*` */
		location?: string | null;

		/** The full resource name of this resource. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Cloud Asset Inventory Resource Name Format](https://cloud.google.com/asset-inventory/docs/resource-name-format) for more information. To search against the `name`: * Use a field query. Example: `name:instance1` * Use a free text query. Example: `instance1` */
		name?: string | null;

		/** Network tags associated with this resource. Like labels, network tags are a type of annotations used to group Google Cloud resources. See [Labelling Google Cloud resources](https://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information. This field is available only when the resource's Protobuf contains it. To search against the `network_tags`: * Use a field query. Example: `networkTags:internal` * Use a free text query. Example: `internal` */
		networkTags?: Array<string>;

		/** The organization that this resource belongs to, in the form of organizations/{ORGANIZATION_NUMBER}. This field is available when the resource belongs to an organization. To search against `organization`: * Use a field query. Example: `organization:123` * Use a free text query. Example: `123` * Specify the `scope` field as this organization in your search request. */
		organization?: string | null;

		/** The type of this resource's immediate parent, if there is one. To search against the `parent_asset_type`: * Use a field query. Example: `parentAssetType:"cloudresourcemanager.googleapis.com/Project"` * Use a free text query. Example: `cloudresourcemanager.googleapis.com/Project` */
		parentAssetType?: string | null;

		/** The full resource name of this resource's parent, if it has one. To search against the `parent_full_resource_name`: * Use a field query. Example: `parentFullResourceName:"project-name"` * Use a free text query. Example: `project-name` */
		parentFullResourceName?: string | null;

		/** The project that this resource belongs to, in the form of projects/{PROJECT_NUMBER}. This field is available when the resource belongs to a project. To search against `project`: * Use a field query. Example: `project:12345` * Use a free text query. Example: `12345` * Specify the `scope` field as this project in your search request. */
		project?: string | null;

		/** A map of related resources of this resource, keyed by the relationship type. A relationship type is in the format of {SourceType}_{ACTION}_{DestType}. Example: `DISK_TO_INSTANCE`, `DISK_TO_NETWORK`, `INSTANCE_TO_INSTANCEGROUP`. See [supported relationship types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#supported_relationship_types). */
		relationships?: {[id: string]: RelatedResources };

		/** The actual content of Security Command Center security marks associated with the asset. To search against SCC SecurityMarks field: * Use a field query: - query by a given key value pair. Example: `sccSecurityMarks.foo=bar` - query by a given key's existence. Example: `sccSecurityMarks.foo:*` */
		sccSecurityMarks?: {[id: string]: string };

		/** The state of this resource. Different resources types have different state definitions that are mapped from various fields of different resource types. This field is available only when the resource's Protobuf contains it. Example: If the resource is an instance provided by Compute Engine, its state will include PROVISIONING, STAGING, RUNNING, STOPPING, SUSPENDING, SUSPENDED, REPAIRING, and TERMINATED. See `status` definition in [API Reference](https://cloud.google.com/compute/docs/reference/rest/v1/instances). If the resource is a project provided by Resource Manager, its state will include LIFECYCLE_STATE_UNSPECIFIED, ACTIVE, DELETE_REQUESTED and DELETE_IN_PROGRESS. See `lifecycleState` definition in [API Reference](https://cloud.google.com/resource-manager/reference/rest/v1/projects). To search against the `state`: * Use a field query. Example: `state:RUNNING` * Use a free text query. Example: `RUNNING` */
		state?: string | null;

		/** This field is only present for the purpose of backward compatibility. Use the `tags` field instead. TagKey namespaced names, in the format of {ORG_ID}/{TAG_KEY_SHORT_NAME}. To search against the `tagKeys`: * Use a field query. Example: - `tagKeys:"123456789/env*"` - `tagKeys="123456789/env"` - `tagKeys:"env"` * Use a free text query. Example: - `env` */
		tagKeys?: Array<string>;

		/** This field is only present for the purpose of backward compatibility. Use the `tags` field instead. TagValue IDs, in the format of tagValues/{TAG_VALUE_ID}. To search against the `tagValueIds`: * Use a field query. Example: - `tagValueIds="tagValues/456"` * Use a free text query. Example: - `456` */
		tagValueIds?: Array<string>;

		/** This field is only present for the purpose of backward compatibility. Use the `tags` field instead. TagValue namespaced names, in the format of {ORG_ID}/{TAG_KEY_SHORT_NAME}/{TAG_VALUE_SHORT_NAME}. To search against the `tagValues`: * Use a field query. Example: - `tagValues:"env"` - `tagValues:"env/prod"` - `tagValues:"123456789/env/prod*"` - `tagValues="123456789/env/prod"` * Use a free text query. Example: - `prod` */
		tagValues?: Array<string>;

		/** The tags directly attached to this resource. To search against the `tags`: * Use a field query. Example: - `tagKeys:"123456789/env*"` - `tagKeys="123456789/env"` - `tagKeys:"env"` - `tagValues:"env"` - `tagValues:"env/prod"` - `tagValues:"123456789/env/prod*"` - `tagValues="123456789/env/prod"` - `tagValueIds="tagValues/456"` * Use a free text query. Example: - `env/prod` */
		tags?: Array<Tag>;

		/** The last update timestamp of this resource, at which the resource was last modified or deleted. The granularity is in seconds. Timestamp.nanos will always be 0. This field is available only when the resource's Protobuf contains it. To search against `update_time`: * Use a field query. - value in seconds since unix epoch. Example: `updateTime < 1609459200` - value in date string. Example: `updateTime < 2021-01-01` - value in date-time string (must be quoted). Example: `updateTime < "2021-01-01T00:00:00"` */
		updateTime?: string | null;

		/** Versioned resource representations of this resource. This is repeated because there could be multiple versions of resource representations during version migration. This `versioned_resources` field is not searchable. Some attributes of the resource representations are exposed in `additional_attributes` field, so as to allow users to search on them. */
		versionedResources?: Array<VersionedResource>;
	}

	/** A result of Resource Search, containing information of a cloud resource. Next ID: 34 */
	export interface ResourceSearchResultFormProperties {

		/** The additional searchable attributes of this resource. The attributes may vary from one resource type to another. Examples: `projectId` for Project, `dnsName` for DNS ManagedZone. This field contains a subset of the resource metadata fields that are returned by the List or Get APIs provided by the corresponding Google Cloud service (e.g., Compute Engine). see [API references and supported searchable attributes](https://cloud.google.com/asset-inventory/docs/supported-asset-types) to see which fields are included. You can search values of these fields through free text search. However, you should not consume the field programically as the field names and values may change as the Google Cloud service updates to a new incompatible API version. To search against the `additional_attributes`: * Use a free text query to match the attributes values. Example: to search `additional_attributes = { dnsName: "foobar" }`, you can issue a query `foobar`. */
		additionalAttributes: FormControl<{[id: string]: any } | null | undefined>,

		/** The type of this resource. Example: `compute.googleapis.com/Disk`. To search against the `asset_type`: * Specify the `asset_type` field in your search request. */
		assetType: FormControl<string | null | undefined>,

		/** The create timestamp of this resource, at which the resource was created. The granularity is in seconds. Timestamp.nanos will always be 0. This field is available only when the resource's Protobuf contains it. To search against `create_time`: * Use a field query. - value in seconds since unix epoch. Example: `createTime > 1609459200` - value in date string. Example: `createTime > 2021-01-01` - value in date-time string (must be quoted). Example: `createTime > "2021-01-01T00:00:00"` */
		createTime: FormControl<string | null | undefined>,

		/** One or more paragraphs of text description of this resource. Maximum length could be up to 1M bytes. This field is available only when the resource's Protobuf contains it. To search against the `description`: * Use a field query. Example: `description:"important instance"` * Use a free text query. Example: `"important instance"` */
		description: FormControl<string | null | undefined>,

		/** The display name of this resource. This field is available only when the resource's Protobuf contains it. To search against the `display_name`: * Use a field query. Example: `displayName:"My Instance"` * Use a free text query. Example: `"My Instance"` */
		displayName: FormControl<string | null | undefined>,

		/** The Cloud KMS [CryptoKey](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys) name or [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions) name. This field only presents for the purpose of backward compatibility. Use the `kms_keys` field to retrieve Cloud KMS key information. This field is available only when the resource's Protobuf contains it and will only be populated for [these resource types](https://cloud.google.com/asset-inventory/docs/legacy-field-names#resource_types_with_the_to_be_deprecated_kmskey_field) for backward compatible purposes. To search against the `kms_key`: * Use a field query. Example: `kmsKey:key` * Use a free text query. Example: `key` */
		kmsKey: FormControl<string | null | undefined>,

		/** Labels associated with this resource. See [Labelling and grouping Google Cloud resources](https://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information. This field is available only when the resource's Protobuf contains it. To search against the `labels`: * Use a field query: - query on any label's key or value. Example: `labels:prod` - query by a given label. Example: `labels.env:prod` - query by a given label's existence. Example: `labels.env:*` * Use a free text query. Example: `prod` */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`. This field is available only when the resource's Protobuf contains it. To search against the `location`: * Use a field query. Example: `location:us-west*` * Use a free text query. Example: `us-west*` */
		location: FormControl<string | null | undefined>,

		/** The full resource name of this resource. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Cloud Asset Inventory Resource Name Format](https://cloud.google.com/asset-inventory/docs/resource-name-format) for more information. To search against the `name`: * Use a field query. Example: `name:instance1` * Use a free text query. Example: `instance1` */
		name: FormControl<string | null | undefined>,

		/** The organization that this resource belongs to, in the form of organizations/{ORGANIZATION_NUMBER}. This field is available when the resource belongs to an organization. To search against `organization`: * Use a field query. Example: `organization:123` * Use a free text query. Example: `123` * Specify the `scope` field as this organization in your search request. */
		organization: FormControl<string | null | undefined>,

		/** The type of this resource's immediate parent, if there is one. To search against the `parent_asset_type`: * Use a field query. Example: `parentAssetType:"cloudresourcemanager.googleapis.com/Project"` * Use a free text query. Example: `cloudresourcemanager.googleapis.com/Project` */
		parentAssetType: FormControl<string | null | undefined>,

		/** The full resource name of this resource's parent, if it has one. To search against the `parent_full_resource_name`: * Use a field query. Example: `parentFullResourceName:"project-name"` * Use a free text query. Example: `project-name` */
		parentFullResourceName: FormControl<string | null | undefined>,

		/** The project that this resource belongs to, in the form of projects/{PROJECT_NUMBER}. This field is available when the resource belongs to a project. To search against `project`: * Use a field query. Example: `project:12345` * Use a free text query. Example: `12345` * Specify the `scope` field as this project in your search request. */
		project: FormControl<string | null | undefined>,

		/** A map of related resources of this resource, keyed by the relationship type. A relationship type is in the format of {SourceType}_{ACTION}_{DestType}. Example: `DISK_TO_INSTANCE`, `DISK_TO_NETWORK`, `INSTANCE_TO_INSTANCEGROUP`. See [supported relationship types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#supported_relationship_types). */
		relationships: FormControl<{[id: string]: RelatedResources } | null | undefined>,

		/** The actual content of Security Command Center security marks associated with the asset. To search against SCC SecurityMarks field: * Use a field query: - query by a given key value pair. Example: `sccSecurityMarks.foo=bar` - query by a given key's existence. Example: `sccSecurityMarks.foo:*` */
		sccSecurityMarks: FormControl<{[id: string]: string } | null | undefined>,

		/** The state of this resource. Different resources types have different state definitions that are mapped from various fields of different resource types. This field is available only when the resource's Protobuf contains it. Example: If the resource is an instance provided by Compute Engine, its state will include PROVISIONING, STAGING, RUNNING, STOPPING, SUSPENDING, SUSPENDED, REPAIRING, and TERMINATED. See `status` definition in [API Reference](https://cloud.google.com/compute/docs/reference/rest/v1/instances). If the resource is a project provided by Resource Manager, its state will include LIFECYCLE_STATE_UNSPECIFIED, ACTIVE, DELETE_REQUESTED and DELETE_IN_PROGRESS. See `lifecycleState` definition in [API Reference](https://cloud.google.com/resource-manager/reference/rest/v1/projects). To search against the `state`: * Use a field query. Example: `state:RUNNING` * Use a free text query. Example: `RUNNING` */
		state: FormControl<string | null | undefined>,

		/** The last update timestamp of this resource, at which the resource was last modified or deleted. The granularity is in seconds. Timestamp.nanos will always be 0. This field is available only when the resource's Protobuf contains it. To search against `update_time`: * Use a field query. - value in seconds since unix epoch. Example: `updateTime < 1609459200` - value in date string. Example: `updateTime < 2021-01-01` - value in date-time string (must be quoted). Example: `updateTime < "2021-01-01T00:00:00"` */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateResourceSearchResultFormGroup() {
		return new FormGroup<ResourceSearchResultFormProperties>({
			additionalAttributes: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			assetType: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			kmsKey: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			parentAssetType: new FormControl<string | null | undefined>(undefined),
			parentFullResourceName: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			relationships: new FormControl<{[id: string]: RelatedResources } | null | undefined>(undefined),
			sccSecurityMarks: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Search all IAM policies response. */
	export interface SearchAllIamPoliciesResponse {

		/** Set if there are more results than those appearing in this response; to get the next set of results, call this method again, using this value as the `page_token`. */
		nextPageToken?: string | null;

		/** A list of IAM policies that match the search query. Related information such as the associated resource is returned along with the policy. */
		results?: Array<IamPolicySearchResult>;
	}

	/** Search all IAM policies response. */
	export interface SearchAllIamPoliciesResponseFormProperties {

		/** Set if there are more results than those appearing in this response; to get the next set of results, call this method again, using this value as the `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchAllIamPoliciesResponseFormGroup() {
		return new FormGroup<SearchAllIamPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Search all resources response. */
	export interface SearchAllResourcesResponse {

		/** If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** A list of Resources that match the search query. It contains the resource standard metadata information. */
		results?: Array<ResourceSearchResult>;
	}

	/** Search all resources response. */
	export interface SearchAllResourcesResponseFormProperties {

		/** If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchAllResourcesResponseFormGroup() {
		return new FormGroup<SearchAllResourcesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update asset feed request. */
	export interface UpdateFeedRequest {

		/** An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics. */
		feed?: Feed;

		/** Required. Only updates the `feed` fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. */
		updateMask?: string | null;
	}

	/** Update asset feed request. */
	export interface UpdateFeedRequestFormProperties {

		/** Required. Only updates the `feed` fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFeedRequestFormGroup() {
		return new FormGroup<UpdateFeedRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a saved query.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the saved query to delete. It must be in the format of: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id
		 * @return {Empty} Successful response
		 */
		Cloudasset_savedQueries_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets details about a saved query.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the saved query and it must be in the format of: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id
		 * @return {SavedQuery} Successful response
		 */
		Cloudasset_savedQueries_get(name: string): Observable<SavedQuery> {
			return this.http.get<SavedQuery>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a saved query.
		 * Patch v1/{name}
		 * @param {string} name The resource name of the saved query. The format must be: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id
		 * @param {string} updateMask Required. The list of fields to update.
		 * @return {SavedQuery} Successful response
		 */
		Cloudasset_savedQueries_patch(name: string, updateMask: string | null | undefined, requestBody: SavedQuery): Observable<SavedQuery> {
			return this.http.patch<SavedQuery>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists assets with time and resource types and returns paged results in response.
		 * Get v1/{parent}/assets
		 * @param {string} parent Required. Name of the organization, folder, or project the assets belong to. Format: "organizations/[organization-number]" (such as "organizations/123"), "projects/[project-id]" (such as "projects/my-project-id"), "projects/[project-number]" (such as "projects/12345"), or "folders/[folder-number]" (such as "folders/12345").
		 * @param {Array<string>} assetTypes A list of asset types to take a snapshot for. For example: "compute.googleapis.com/Disk". Regular expression is also supported. For example: * "compute.googleapis.com.*" snapshots resources whose asset type starts with "compute.googleapis.com". * ".*Instance" snapshots resources whose asset type ends with "Instance". * ".*Instance.*" snapshots resources whose asset type contains "Instance". See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported asset type, an INVALID_ARGUMENT error will be returned. If specified, only matching assets will be returned, otherwise, it will snapshot all asset types. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types.
		 * @param {FeedContentType} contentType Asset content type. If not specified, no content but the asset name will be returned.
		 * @param {number} pageSize The maximum number of assets to be returned in a single response. Default is 100, minimum is 1, and maximum is 1000.
		 * @param {string} pageToken The `next_page_token` returned from the previous `ListAssetsResponse`, or unspecified for the first `ListAssetsRequest`. It is a continuation of a prior `ListAssets` call, and the API should return the next page of assets.
		 * @param {string} readTime Timestamp to take an asset snapshot. This can only be set to a timestamp between the current time and the current time minus 35 days (inclusive). If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query may get different results.
		 * @param {Array<string>} relationshipTypes A list of relationship types to output, for example: `INSTANCE_TO_INSTANCEGROUP`. This field should only be specified if content_type=RELATIONSHIP. * If specified: it snapshots specified relationships. It returns an error if any of the [relationship_types] doesn't belong to the supported relationship types of the [asset_types] or if any of the [asset_types] doesn't belong to the source types of the [relationship_types]. * Otherwise: it snapshots the supported relationships for all [asset_types] or returns an error if any of the [asset_types] has no relationship support. An unspecified asset types field means all supported asset_types. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types and relationship types.
		 * @return {ListAssetsResponse} Successful response
		 */
		Cloudasset_assets_list(parent: string, assetTypes: Array<string> | null | undefined, contentType: FeedContentType | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, readTime: string | null | undefined, relationshipTypes: Array<string> | null | undefined): Observable<ListAssetsResponse> {
			return this.http.get<ListAssetsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assets&' + assetTypes?.map(z => `assetTypes=${encodeURIComponent(z)}`).join('&') + '&contentType=' + contentType + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readTime=' + (readTime == null ? '' : encodeURIComponent(readTime)) + '&' + relationshipTypes?.map(z => `relationshipTypes=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Lists all asset feeds in a parent project/folder/organization.
		 * Get v1/{parent}/feeds
		 * @param {string} parent Required. The parent project/folder/organization whose feeds are to be listed. It can only be using project/folder/organization number (such as "folders/12345")", or a project ID (such as "projects/my-project-id").
		 * @return {ListFeedsResponse} Successful response
		 */
		Cloudasset_feeds_list(parent: string): Observable<ListFeedsResponse> {
			return this.http.get<ListFeedsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/feeds', {});
		}

		/**
		 * Creates a feed in a parent project/folder/organization to listen to its asset updates.
		 * Post v1/{parent}/feeds
		 * @param {string} parent Required. The name of the project/folder/organization where this feed should be created in. It can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345").
		 * @return {Feed} Successful response
		 */
		Cloudasset_feeds_create(parent: string, requestBody: CreateFeedRequest): Observable<Feed> {
			return this.http.post<Feed>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/feeds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all saved queries in a parent project/folder/organization.
		 * Get v1/{parent}/savedQueries
		 * @param {string} parent Required. The parent project/folder/organization whose savedQueries are to be listed. It can only be using project/folder/organization number (such as "folders/12345")", or a project ID (such as "projects/my-project-id").
		 * @param {string} filter Optional. The expression to filter resources. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. When `AND` and `OR` are both used in the expression, parentheses must be appropriately used to group the combinations. The expression may also contain regular expressions. See https://google.aip.dev/160 for more information on the grammar.
		 * @param {number} pageSize Optional. The maximum number of saved queries to return per page. The service may return fewer than this value. If unspecified, at most 50 will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListSavedQueries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSavedQueries` must match the call that provided the page token.
		 * @return {ListSavedQueriesResponse} Successful response
		 */
		Cloudasset_savedQueries_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSavedQueriesResponse> {
			return this.http.get<ListSavedQueriesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/savedQueries&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a saved query in a parent project/folder/organization.
		 * Post v1/{parent}/savedQueries
		 * @param {string} parent Required. The name of the project/folder/organization where this saved_query should be created in. It can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345").
		 * @param {string} savedQueryId Required. The ID to use for the saved query, which must be unique in the specified parent. It will become the final component of the saved query's resource name. This value should be 4-63 characters, and valid characters are `a-z-`. Notice that this field is required in the saved query creation, and the `name` field of the `saved_query` will be ignored.
		 * @return {SavedQuery} Successful response
		 */
		Cloudasset_savedQueries_create(parent: string, savedQueryId: string | null | undefined, requestBody: SavedQuery): Observable<SavedQuery> {
			return this.http.post<SavedQuery>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/savedQueries&savedQueryId=' + (savedQueryId == null ? '' : encodeURIComponent(savedQueryId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
		 * Get v1/{parent}:batchGetAssetsHistory
		 * @param {string} parent Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345").
		 * @param {Array<string>} assetNames A list of the full names of the assets. See: https://cloud.google.com/asset-inventory/docs/resource-name-format Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request.
		 * @param {FeedContentType} contentType Optional. The content type.
		 * @param {string} readTimeWindow_endTime End time of the time window (inclusive). If not specified, the current timestamp is used instead.
		 * @param {string} readTimeWindow_startTime Start time of the time window (exclusive).
		 * @param {Array<string>} relationshipTypes Optional. A list of relationship types to output, for example: `INSTANCE_TO_INSTANCEGROUP`. This field should only be specified if content_type=RELATIONSHIP. * If specified: it outputs specified relationships' history on the [asset_names]. It returns an error if any of the [relationship_types] doesn't belong to the supported relationship types of the [asset_names] or if any of the [asset_names]'s types doesn't belong to the source types of the [relationship_types]. * Otherwise: it outputs the supported relationships' history on the [asset_names] or returns an error if any of the [asset_names]'s types has no relationship support. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types and relationship types.
		 * @return {BatchGetAssetsHistoryResponse} Successful response
		 */
		Cloudasset_batchGetAssetsHistory(parent: string, assetNames: Array<string> | null | undefined, contentType: FeedContentType | null | undefined, readTimeWindow_endTime: string | null | undefined, readTimeWindow_startTime: string | null | undefined, relationshipTypes: Array<string> | null | undefined): Observable<BatchGetAssetsHistoryResponse> {
			return this.http.get<BatchGetAssetsHistoryResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':batchGetAssetsHistory&' + assetNames?.map(z => `assetNames=${encodeURIComponent(z)}`).join('&') + '&contentType=' + contentType + '&readTimeWindow_endTime=' + (readTimeWindow_endTime == null ? '' : encodeURIComponent(readTimeWindow_endTime)) + '&readTimeWindow_startTime=' + (readTimeWindow_startTime == null ? '' : encodeURIComponent(readTimeWindow_startTime)) + '&' + relationshipTypes?.map(z => `relationshipTypes=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
		 * Post v1/{parent}:exportAssets
		 * @param {string} parent Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"), or a folder number (such as "folders/123").
		 * @return {Operation} Successful response
		 */
		Cloudasset_exportAssets(parent: string, requestBody: ExportAssetsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':exportAssets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Issue a job that queries assets using a SQL statement compatible with [BigQuery SQL](https://cloud.google.com/bigquery/docs/introduction-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by [BigQuery](https://cloud.google.com/bigquery/docs/best-practices-performance-output). Queries return larger results will result in errors.
		 * Post v1/{parent}:queryAssets
		 * @param {string} parent Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"), or a folder number (such as "folders/123"). Only assets belonging to the `parent` will be returned.
		 * @return {QueryAssetsResponse} Successful response
		 */
		Cloudasset_queryAssets(parent: string, requestBody: QueryAssetsRequest): Observable<QueryAssetsResponse> {
			return this.http.post<QueryAssetsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':queryAssets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.
		 * Get v1/{resource}:analyzeMove
		 * @param {string} resource Required. Name of the resource to perform the analysis against. Only Google Cloud projects are supported as of today. Hence, this can only be a project ID (such as "projects/my-project-id") or a project number (such as "projects/12345").
		 * @param {string} destinationParent Required. Name of the Google Cloud folder or organization to reparent the target resource. The analysis will be performed against hypothetically moving the resource to this specified desitination parent. This can only be a folder number (such as "folders/123") or an organization number (such as "organizations/123").
		 * @param {Cloudasset_analyzeMoveView} view Analysis view indicating what information should be included in the analysis response. If unspecified, the default view is FULL.
		 * @return {AnalyzeMoveResponse} Successful response
		 */
		Cloudasset_analyzeMove(resource: string, destinationParent: string | null | undefined, view: Cloudasset_analyzeMoveView | null | undefined): Observable<AnalyzeMoveResponse> {
			return this.http.get<AnalyzeMoveResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':analyzeMove&destinationParent=' + (destinationParent == null ? '' : encodeURIComponent(destinationParent)) + '&view=' + view, {});
		}

		/**
		 * Gets effective IAM policies for a batch of resources.
		 * Get v1/{scope}/effectiveIamPolicies:batchGet
		 * @param {string} scope Required. Only IAM policies on or below the scope will be returned. This can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"). To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id). To know how to get folder or project id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects).
		 * @param {Array<string>} names Required. The names refer to the [full_resource_names] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of the asset types [supported by search APIs](https://cloud.google.com/asset-inventory/docs/supported-asset-types). A maximum of 20 resources' effective policies can be retrieved in a batch.
		 * @return {BatchGetEffectiveIamPoliciesResponse} Successful response
		 */
		Cloudasset_effectiveIamPolicies_batchGet(scope: string, names: Array<string> | null | undefined): Observable<BatchGetEffectiveIamPoliciesResponse> {
			return this.http.get<BatchGetEffectiveIamPoliciesResponse>(this.baseUri + 'v1/' + (scope == null ? '' : encodeURIComponent(scope)) + '/effectiveIamPolicies:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Analyzes IAM policies to answer which identities have what accesses on which resources.
		 * Get v1/{scope}:analyzeIamPolicy
		 * @param {string} scope Required. The relative name of the root asset. Only resources and IAM policies within the scope will be analyzed. This can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"). To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id). To know how to get folder or project id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects).
		 * @param {Array<string>} analysisQuery_accessSelector_permissions Optional. The permissions to appear in result.
		 * @param {Array<string>} analysisQuery_accessSelector_roles Optional. The roles to appear in result.
		 * @param {string} analysisQuery_conditionContext_accessTime The hypothetical access timestamp to evaluate IAM conditions. Note that this value must not be earlier than the current time; otherwise, an INVALID_ARGUMENT error will be returned.
		 * @param {string} analysisQuery_identitySelector_identity Required. The identity appear in the form of principals in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding). The examples of supported forms are: "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com". Notice that wildcard characters (such as * and ?) are not supported. You must give a specific identity.
		 * @param {boolean} analysisQuery_options_analyzeServiceAccountImpersonation Optional. If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. We highly recommend you use AssetService.AnalyzeIamPolicyLongrunning RPC instead. For example, if the request analyzes for which resources user A has permission P, and there's an IAM policy states user A has iam.serviceAccounts.getAccessToken permission to a service account SA, and there's another IAM policy states service account SA has permission P to a Google Cloud folder F, then user A potentially has access to the Google Cloud folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis. Another example, if the request analyzes for who has permission P to a Google Cloud folder F, and there's an IAM policy states user A has iam.serviceAccounts.actAs permission to a service account SA, and there's another IAM policy states service account SA has permission P to the Google Cloud folder F, then user A potentially has access to the Google Cloud folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis. Only the following permissions are considered in this analysis: * `iam.serviceAccounts.actAs` * `iam.serviceAccounts.signBlob` * `iam.serviceAccounts.signJwt` * `iam.serviceAccounts.getAccessToken` * `iam.serviceAccounts.getOpenIdToken` * `iam.serviceAccounts.implicitDelegation` Default is false.
		 * @param {boolean} analysisQuery_options_expandGroups Optional. If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding. If IamPolicyAnalysisQuery.identity_selector is specified, the identity in the result will be determined by the selector, and this flag is not allowed to set. If true, the default max expansion per group is 1000 for AssetService.AnalyzeIamPolicy][]. Default is false.
		 * @param {boolean} analysisQuery_options_expandResources Optional. If true and IamPolicyAnalysisQuery.resource_selector is not specified, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy. For example, if the request analyzes for which resources user A has permission P, and the results include an IAM policy with P on a Google Cloud folder, the results will also include resources in that folder with permission P. If true and IamPolicyAnalysisQuery.resource_selector is specified, the resource section of the result will expand the specified resource to include resources lower in the resource hierarchy. Only project or lower resources are supported. Folder and organization resources cannot be used together with this option. For example, if the request analyzes for which users have permission P on a Google Cloud project with this option enabled, the results will include all users who have permission P on that project or any lower resource. If true, the default max expansion per resource is 1000 for AssetService.AnalyzeIamPolicy][] and 100000 for AssetService.AnalyzeIamPolicyLongrunning][]. Default is false.
		 * @param {boolean} analysisQuery_options_expandRoles Optional. If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions. If IamPolicyAnalysisQuery.access_selector is specified, the access section of the result will be determined by the selector, and this flag is not allowed to set. Default is false.
		 * @param {boolean} analysisQuery_options_outputGroupEdges Optional. If true, the result will output the relevant membership relationships between groups and other groups, and between groups and principals. Default is false.
		 * @param {boolean} analysisQuery_options_outputResourceEdges Optional. If true, the result will output the relevant parent/child relationships between resources. Default is false.
		 * @param {string} analysisQuery_resourceSelector_fullResourceName Required. The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of a resource of [supported resource types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#analyzable_asset_types).
		 * @param {string} executionTimeout Optional. Amount of time executable has to complete. See JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json). If this field is set with a value less than the RPC deadline, and the execution of your query hasn't finished in the specified execution timeout, you will get a response with partial result. Otherwise, your query's execution will continue until the RPC deadline. If it's not finished until then, you will get a DEADLINE_EXCEEDED error. Default is empty.
		 * @param {string} savedAnalysisQuery Optional. The name of a saved query, which must be in the format of: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id If both `analysis_query` and `saved_analysis_query` are provided, they will be merged together with the `saved_analysis_query` as base and the `analysis_query` as overrides. For more details of the merge behavior, refer to the [MergeFrom](https://developers.google.com/protocol-buffers/docs/reference/cpp/google.protobuf.message#Message.MergeFrom.details) page. Note that you cannot override primitive fields with default value, such as 0 or empty string, etc., because we use proto3, which doesn't support field presence yet.
		 * @return {AnalyzeIamPolicyResponse} Successful response
		 */
		Cloudasset_analyzeIamPolicy(scope: string, analysisQuery_accessSelector_permissions: Array<string> | null | undefined, analysisQuery_accessSelector_roles: Array<string> | null | undefined, analysisQuery_conditionContext_accessTime: string | null | undefined, analysisQuery_identitySelector_identity: string | null | undefined, analysisQuery_options_analyzeServiceAccountImpersonation: boolean | null | undefined, analysisQuery_options_expandGroups: boolean | null | undefined, analysisQuery_options_expandResources: boolean | null | undefined, analysisQuery_options_expandRoles: boolean | null | undefined, analysisQuery_options_outputGroupEdges: boolean | null | undefined, analysisQuery_options_outputResourceEdges: boolean | null | undefined, analysisQuery_resourceSelector_fullResourceName: string | null | undefined, executionTimeout: string | null | undefined, savedAnalysisQuery: string | null | undefined): Observable<AnalyzeIamPolicyResponse> {
			return this.http.get<AnalyzeIamPolicyResponse>(this.baseUri + 'v1/' + (scope == null ? '' : encodeURIComponent(scope)) + ':analyzeIamPolicy&' + analysisQuery_accessSelector_permissions?.map(z => `analysisQuery.accessSelector.permissions=${encodeURIComponent(z)}`).join('&') + '&' + analysisQuery_accessSelector_roles?.map(z => `analysisQuery.accessSelector.roles=${encodeURIComponent(z)}`).join('&') + '&analysisQuery_conditionContext_accessTime=' + (analysisQuery_conditionContext_accessTime == null ? '' : encodeURIComponent(analysisQuery_conditionContext_accessTime)) + '&analysisQuery_identitySelector_identity=' + (analysisQuery_identitySelector_identity == null ? '' : encodeURIComponent(analysisQuery_identitySelector_identity)) + '&analysisQuery_options_analyzeServiceAccountImpersonation=' + analysisQuery_options_analyzeServiceAccountImpersonation + '&analysisQuery_options_expandGroups=' + analysisQuery_options_expandGroups + '&analysisQuery_options_expandResources=' + analysisQuery_options_expandResources + '&analysisQuery_options_expandRoles=' + analysisQuery_options_expandRoles + '&analysisQuery_options_outputGroupEdges=' + analysisQuery_options_outputGroupEdges + '&analysisQuery_options_outputResourceEdges=' + analysisQuery_options_outputResourceEdges + '&analysisQuery_resourceSelector_fullResourceName=' + (analysisQuery_resourceSelector_fullResourceName == null ? '' : encodeURIComponent(analysisQuery_resourceSelector_fullResourceName)) + '&executionTimeout=' + (executionTimeout == null ? '' : encodeURIComponent(executionTimeout)) + '&savedAnalysisQuery=' + (savedAnalysisQuery == null ? '' : encodeURIComponent(savedAnalysisQuery)), {});
		}

		/**
		 * Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.
		 * Post v1/{scope}:analyzeIamPolicyLongrunning
		 * @param {string} scope Required. The relative name of the root asset. Only resources and IAM policies within the scope will be analyzed. This can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"). To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id). To know how to get folder or project id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects).
		 * @return {Operation} Successful response
		 */
		Cloudasset_analyzeIamPolicyLongrunning(scope: string, requestBody: AnalyzeIamPolicyLongrunningRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (scope == null ? '' : encodeURIComponent(scope)) + ':analyzeIamPolicyLongrunning', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Analyzes organization policies under a scope.
		 * Get v1/{scope}:analyzeOrgPolicies
		 * @param {string} scope Required. The organization to scope the request. Only organization policies within the scope will be analyzed. * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456")
		 * @param {string} constraint Required. The name of the constraint to analyze organization policies for. The response only contains analyzed organization policies for the provided constraint.
		 * @param {string} filter The expression to filter AnalyzeOrgPoliciesResponse.org_policy_results. Filtering is currently available for bare literal values and the following fields: * consolidated_policy.attached_resource * consolidated_policy.rules.enforce When filtering by a specific field, the only supported operator is `=`. For example, filtering by consolidated_policy.attached_resource="//cloudresourcemanager.googleapis.com/folders/001" will return all the Organization Policy results attached to "folders/001".
		 * @param {number} pageSize The maximum number of items to return per page. If unspecified, AnalyzeOrgPoliciesResponse.org_policy_results will contain 20 items with a maximum of 200.
		 * @param {string} pageToken The pagination token to retrieve the next page.
		 * @return {AnalyzeOrgPoliciesResponse} Successful response
		 */
		Cloudasset_analyzeOrgPolicies(scope: string, constraint: string | null | undefined, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<AnalyzeOrgPoliciesResponse> {
			return this.http.get<AnalyzeOrgPoliciesResponse>(this.baseUri + 'v1/' + (scope == null ? '' : encodeURIComponent(scope)) + ':analyzeOrgPolicies&constraint=' + (constraint == null ? '' : encodeURIComponent(constraint)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Analyzes organization policies governed assets (Google Cloud resources or policies) under a scope. This RPC supports custom constraints and the following 10 canned constraints: * storage.uniformBucketLevelAccess * iam.disableServiceAccountKeyCreation * iam.allowedPolicyMemberDomains * compute.vmExternalIpAccess * appengine.enforceServiceAccountActAsCheck * gcp.resourceLocations * compute.trustedImageProjects * compute.skipDefaultNetworkCreation * compute.requireOsLogin * compute.disableNestedVirtualization This RPC only returns either resources of types [supported by search APIs](https://cloud.google.com/asset-inventory/docs/supported-asset-types) or IAM policies.
		 * Get v1/{scope}:analyzeOrgPolicyGovernedAssets
		 * @param {string} scope Required. The organization to scope the request. Only organization policies within the scope will be analyzed. The output assets will also be limited to the ones governed by those in-scope organization policies. * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456")
		 * @param {string} constraint Required. The name of the constraint to analyze governed assets for. The analysis only contains analyzed organization policies for the provided constraint.
		 * @param {string} filter The expression to filter AnalyzeOrgPolicyGovernedAssetsResponse.governed_assets. For governed resources, filtering is currently available for bare literal values and the following fields: * governed_resource.project * governed_resource.folders * consolidated_policy.rules.enforce When filtering by `governed_resource.project` or `consolidated_policy.rules.enforce`, the only supported operator is `=`. When filtering by `governed_resource.folders`, the supported operators are `=` and `:`. For example, filtering by `governed_resource.project="projects/12345678"` will return all the governed resources under "projects/12345678", including the project itself if applicable. For governed IAM policies, filtering is currently available for bare literal values and the following fields: * governed_iam_policy.project * governed_iam_policy.folders * consolidated_policy.rules.enforce When filtering by `governed_iam_policy.project` or `consolidated_policy.rules.enforce`, the only supported operator is `=`. When filtering by `governed_iam_policy.folders`, the supported operators are `=` and `:`. For example, filtering by `governed_iam_policy.folders:"folders/12345678"` will return all the governed IAM policies under "folders/001".
		 * @param {number} pageSize The maximum number of items to return per page. If unspecified, AnalyzeOrgPolicyGovernedAssetsResponse.governed_assets will contain 100 items with a maximum of 200.
		 * @param {string} pageToken The pagination token to retrieve the next page.
		 * @return {AnalyzeOrgPolicyGovernedAssetsResponse} Successful response
		 */
		Cloudasset_analyzeOrgPolicyGovernedAssets(scope: string, constraint: string | null | undefined, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<AnalyzeOrgPolicyGovernedAssetsResponse> {
			return this.http.get<AnalyzeOrgPolicyGovernedAssetsResponse>(this.baseUri + 'v1/' + (scope == null ? '' : encodeURIComponent(scope)) + ':analyzeOrgPolicyGovernedAssets&constraint=' + (constraint == null ? '' : encodeURIComponent(constraint)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Analyzes organization policies governed containers (projects, folders or organization) under a scope.
		 * Get v1/{scope}:analyzeOrgPolicyGovernedContainers
		 * @param {string} scope Required. The organization to scope the request. Only organization policies within the scope will be analyzed. The output containers will also be limited to the ones governed by those in-scope organization policies. * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456")
		 * @param {string} constraint Required. The name of the constraint to analyze governed containers for. The analysis only contains organization policies for the provided constraint.
		 * @param {string} filter The expression to filter AnalyzeOrgPolicyGovernedContainersResponse.governed_containers. Filtering is currently available for bare literal values and the following fields: * parent * consolidated_policy.rules.enforce When filtering by a specific field, the only supported operator is `=`. For example, filtering by parent="//cloudresourcemanager.googleapis.com/folders/001" will return all the containers under "folders/001".
		 * @param {number} pageSize The maximum number of items to return per page. If unspecified, AnalyzeOrgPolicyGovernedContainersResponse.governed_containers will contain 100 items with a maximum of 200.
		 * @param {string} pageToken The pagination token to retrieve the next page.
		 * @return {AnalyzeOrgPolicyGovernedContainersResponse} Successful response
		 */
		Cloudasset_analyzeOrgPolicyGovernedContainers(scope: string, constraint: string | null | undefined, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<AnalyzeOrgPolicyGovernedContainersResponse> {
			return this.http.get<AnalyzeOrgPolicyGovernedContainersResponse>(this.baseUri + 'v1/' + (scope == null ? '' : encodeURIComponent(scope)) + ':analyzeOrgPolicyGovernedContainers&constraint=' + (constraint == null ? '' : encodeURIComponent(constraint)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.
		 * Get v1/{scope}:searchAllIamPolicies
		 * @param {string} scope Required. A scope can be a project, a folder, or an organization. The search is limited to the IAM policies within the `scope`. The caller must be granted the [`cloudasset.assets.searchAllIamPolicies`](https://cloud.google.com/asset-inventory/docs/access-control#required_permissions) permission on the desired scope. The allowed values are: * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456")
		 * @param {Array<string>} assetTypes Optional. A list of asset types that the IAM policies are attached to. If empty, it will search the IAM policies that are attached to all the asset types [supported by search APIs](https://cloud.google.com/asset-inventory/docs/supported-asset-types) Regular expressions are also supported. For example: * "compute.googleapis.com.*" snapshots IAM policies attached to asset type starts with "compute.googleapis.com". * ".*Instance" snapshots IAM policies attached to asset type ends with "Instance". * ".*Instance.*" snapshots IAM policies attached to asset type contains "Instance". See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported asset type, an INVALID_ARGUMENT error will be returned.
		 * @param {string} orderBy Optional. A comma-separated list of fields specifying the sorting order of the results. The default order is ascending. Add " DESC" after the field name to indicate descending order. Redundant space characters are ignored. Example: "assetType DESC, resource". Only singular primitive fields in the response are sortable: * resource * assetType * project All the other fields such as repeated fields (e.g., `folders`) and non-primitive fields (e.g., `policy`) are not supported.
		 * @param {number} pageSize Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero or a negative value, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned.
		 * @param {string} pageToken Optional. If present, retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters must be identical to those in the previous call.
		 * @param {string} query Optional. The query statement. See [how to construct a query](https://cloud.google.com/asset-inventory/docs/searching-iam-policies#how_to_construct_a_query) for more information. If not specified or empty, it will search all the IAM policies within the specified `scope`. Note that the query string is compared against each IAM policy binding, including its principals, roles, and IAM conditions. The returned IAM policies will only contain the bindings that match your query. To learn more about the IAM policy structure, see the [IAM policy documentation](https://cloud.google.com/iam/help/allow-policies/structure). Examples: * `policy:amy@gmail.com` to find IAM policy bindings that specify user "amy@gmail.com". * `policy:roles/compute.admin` to find IAM policy bindings that specify the Compute Admin role. * `policy:comp*` to find IAM policy bindings that contain "comp" as a prefix of any word in the binding. * `policy.role.permissions:storage.buckets.update` to find IAM policy bindings that specify a role containing "storage.buckets.update" permission. Note that if callers don't have `iam.roles.get` access to a role's included permissions, policy bindings that specify this role will be dropped from the search results. * `policy.role.permissions:upd*` to find IAM policy bindings that specify a role containing "upd" as a prefix of any word in the role permission. Note that if callers don't have `iam.roles.get` access to a role's included permissions, policy bindings that specify this role will be dropped from the search results. * `resource:organizations/123456` to find IAM policy bindings that are set on "organizations/123456". * `resource=//cloudresourcemanager.googleapis.com/projects/myproject` to find IAM policy bindings that are set on the project named "myproject". * `Important` to find IAM policy bindings that contain "Important" as a word in any of the searchable fields (except for the included permissions). * `resource:(instance1 OR instance2) policy:amy` to find IAM policy bindings that are set on resources "instance1" or "instance2" and also specify user "amy". * `roles:roles/compute.admin` to find IAM policy bindings that specify the Compute Admin role. * `memberTypes:user` to find IAM policy bindings that contain the principal type "user".
		 * @return {SearchAllIamPoliciesResponse} Successful response
		 */
		Cloudasset_searchAllIamPolicies(scope: string, assetTypes: Array<string> | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<SearchAllIamPoliciesResponse> {
			return this.http.get<SearchAllIamPoliciesResponse>(this.baseUri + 'v1/' + (scope == null ? '' : encodeURIComponent(scope)) + ':searchAllIamPolicies&' + assetTypes?.map(z => `assetTypes=${encodeURIComponent(z)}`).join('&') + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.
		 * Get v1/{scope}:searchAllResources
		 * @param {string} scope Required. A scope can be a project, a folder, or an organization. The search is limited to the resources within the `scope`. The caller must be granted the [`cloudasset.assets.searchAllResources`](https://cloud.google.com/asset-inventory/docs/access-control#required_permissions) permission on the desired scope. The allowed values are: * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456")
		 * @param {Array<string>} assetTypes Optional. A list of asset types that this request searches for. If empty, it will search all the asset types [supported by search APIs](https://cloud.google.com/asset-inventory/docs/supported-asset-types). Regular expressions are also supported. For example: * "compute.googleapis.com.*" snapshots resources whose asset type starts with "compute.googleapis.com". * ".*Instance" snapshots resources whose asset type ends with "Instance". * ".*Instance.*" snapshots resources whose asset type contains "Instance". See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported asset type, an INVALID_ARGUMENT error will be returned.
		 * @param {string} orderBy Optional. A comma-separated list of fields specifying the sorting order of the results. The default order is ascending. Add " DESC" after the field name to indicate descending order. Redundant space characters are ignored. Example: "location DESC, name". Only the following fields in the response are sortable: * name * assetType * project * displayName * description * location * createTime * updateTime * state * parentFullResourceName * parentAssetType
		 * @param {number} pageSize Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero or a negative value, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned.
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call.
		 * @param {string} query Optional. The query statement. See [how to construct a query](https://cloud.google.com/asset-inventory/docs/searching-resources#how_to_construct_a_query) for more information. If not specified or empty, it will search all the resources within the specified `scope`. Examples: * `name:Important` to find Google Cloud resources whose name contains `Important` as a word. * `name=Important` to find the Google Cloud resource whose name is exactly `Important`. * `displayName:Impor*` to find Google Cloud resources whose display name contains `Impor` as a prefix of any word in the field. * `location:us-west*` to find Google Cloud resources whose location contains both `us` and `west` as prefixes. * `labels:prod` to find Google Cloud resources whose labels contain `prod` as a key or value. * `labels.env:prod` to find Google Cloud resources that have a label `env` and its value is `prod`. * `labels.env:*` to find Google Cloud resources that have a label `env`. * `tagKeys:env` to find Google Cloud resources that have directly attached tags where the [`TagKey.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey) contains `env`. * `tagValues:prod*` to find Google Cloud resources that have directly attached tags where the [`TagValue.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) contains a word prefixed by `prod`. * `tagValueIds=tagValues/123` to find Google Cloud resources that have directly attached tags where the [`TagValue.name`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) is exactly `tagValues/123`. * `effectiveTagKeys:env` to find Google Cloud resources that have directly attached or inherited tags where the [`TagKey.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey) contains `env`. * `effectiveTagValues:prod*` to find Google Cloud resources that have directly attached or inherited tags where the [`TagValue.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) contains a word prefixed by `prod`. * `effectiveTagValueIds=tagValues/123` to find Google Cloud resources that have directly attached or inherited tags where the [`TagValue.name`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue) is exactly `tagValues/123`. * `kmsKey:key` to find Google Cloud resources encrypted with a customer-managed encryption key whose name contains `key` as a word. This field is deprecated. Use the `kmsKeys` field to retrieve Cloud KMS key information. * `kmsKeys:key` to find Google Cloud resources encrypted with customer-managed encryption keys whose name contains the word `key`. * `relationships:instance-group-1` to find Google Cloud resources that have relationships with `instance-group-1` in the related resource name. * `relationships:INSTANCE_TO_INSTANCEGROUP` to find Compute Engine instances that have relationships of type `INSTANCE_TO_INSTANCEGROUP`. * `relationships.INSTANCE_TO_INSTANCEGROUP:instance-group-1` to find Compute Engine instances that have relationships with `instance-group-1` in the Compute Engine instance group resource name, for relationship type `INSTANCE_TO_INSTANCEGROUP`. * `sccSecurityMarks.key=value` to find Cloud resources that are attached with security marks whose key is `key` and value is `value`. * `sccSecurityMarks.key:*` to find Cloud resources that are attached with security marks whose key is `key`. * `state:ACTIVE` to find Google Cloud resources whose state contains `ACTIVE` as a word. * `NOT state:ACTIVE` to find Google Cloud resources whose state doesn't contain `ACTIVE` as a word. * `createTime<1609459200` to find Google Cloud resources that were created before `2021-01-01 00:00:00 UTC`. `1609459200` is the epoch timestamp of `2021-01-01 00:00:00 UTC` in seconds. * `updateTime>1609459200` to find Google Cloud resources that were updated after `2021-01-01 00:00:00 UTC`. `1609459200` is the epoch timestamp of `2021-01-01 00:00:00 UTC` in seconds. * `Important` to find Google Cloud resources that contain `Important` as a word in any of the searchable fields. * `Impor*` to find Google Cloud resources that contain `Impor` as a prefix of any word in any of the searchable fields. * `Important location:(us-west1 OR global)` to find Google Cloud resources that contain `Important` as a word in any of the searchable fields and are also located in the `us-west1` region or the `global` location.
		 * @param {string} readMask Optional. A comma-separated list of fields that you want returned in the results. The following fields are returned by default if not specified: * `name` * `assetType` * `project` * `folders` * `organization` * `displayName` * `description` * `location` * `labels` * `tags` * `effectiveTags` * `networkTags` * `kmsKeys` * `createTime` * `updateTime` * `state` * `additionalAttributes` * `parentFullResourceName` * `parentAssetType` Some fields of large size, such as `versionedResources`, `attachedResources`, `effectiveTags` etc., are not returned by default, but you can specify them in the `read_mask` parameter if you want to include them. If `"*"` is specified, all [available fields](https://cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources#resourcesearchresult) are returned. Examples: `"name,location"`, `"name,versionedResources"`, `"*"`. Any invalid field path will trigger INVALID_ARGUMENT error.
		 * @return {SearchAllResourcesResponse} Successful response
		 */
		Cloudasset_searchAllResources(scope: string, assetTypes: Array<string> | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined, readMask: string | null | undefined): Observable<SearchAllResourcesResponse> {
			return this.http.get<SearchAllResourcesResponse>(this.baseUri + 'v1/' + (scope == null ? '' : encodeURIComponent(scope)) + ':searchAllResources&' + assetTypes?.map(z => `assetTypes=${encodeURIComponent(z)}`).join('&') + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}
	}

	export enum Cloudasset_analyzeMoveView { ANALYSIS_VIEW_UNSPECIFIED = 0, FULL = 1, BASIC = 2 }

}

