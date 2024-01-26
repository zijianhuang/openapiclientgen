import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A task to execute on the completion of a job. See https://cloud.google.com/dlp/docs/concepts-actions to learn more. */
	export interface GooglePrivacyDlpV2Action {

		/** Create a de-identified copy of the requested table or files. A TransformationDetail will be created for each transformation. If any rows in BigQuery are skipped during de-identification (transformation errors or row size exceeds BigQuery insert API limits) they are placed in the failure output table. If the original row exceeds the BigQuery insert API limit it will be truncated when written to the failure output table. The failure output table can be set in the action.deidentify.output.big_query_output.deidentified_failure_output_table field, if no table is set, a table will be automatically created in the same project and dataset as the original table. Compatible with: Inspect */
		deidentify?: GooglePrivacyDlpV2Deidentify;

		/** Sends an email when the job completes. The email goes to IAM project owners and technical [Essential Contacts](https://cloud.google.com/resource-manager/docs/managing-notification-contacts). */
		jobNotificationEmails?: GooglePrivacyDlpV2JobNotificationEmails;

		/** Publish a message into a given Pub/Sub topic when DlpJob has completed. The message contains a single field, `DlpJobName`, which is equal to the finished job's [`DlpJob.name`](https://cloud.google.com/dlp/docs/reference/rest/v2/projects.dlpJobs#DlpJob). Compatible with: Inspect, Risk */
		pubSub?: GooglePrivacyDlpV2PublishToPubSub;

		/** Publish findings of a DlpJob to Data Catalog. In Data Catalog, tag templates are applied to the resource that Cloud DLP scanned. Data Catalog tag templates are stored in the same project and region where the BigQuery table exists. For Cloud DLP to create and apply the tag template, the Cloud DLP service agent must have the `roles/datacatalog.tagTemplateOwner` permission on the project. The tag template contains fields summarizing the results of the DlpJob. Any field values previously written by another DlpJob are deleted. InfoType naming patterns are strictly enforced when using this feature. Findings are persisted in Data Catalog storage and are governed by service-specific policies for Data Catalog. For more information, see [Service Specific Terms](https://cloud.google.com/terms/service-terms). Only a single instance of this action can be specified. This action is allowed only if all resources being scanned are BigQuery tables. Compatible with: Inspect */
		publishFindingsToCloudDataCatalog?: GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog;

		/** Publish the result summary of a DlpJob to [Security Command Center](https://cloud.google.com/security-command-center). This action is available for only projects that belong to an organization. This action publishes the count of finding instances and their infoTypes. The summary of findings are persisted in Security Command Center and are governed by [service-specific policies for Security Command Center](https://cloud.google.com/terms/service-terms). Only a single instance of this action can be specified. Compatible with: Inspect */
		publishSummaryToCscc?: GooglePrivacyDlpV2PublishSummaryToCscc;

		/** Enable Stackdriver metric dlp.googleapis.com/finding_count. This will publish a metric to stack driver on each infotype requested and how many findings were found for it. CustomDetectors will be bucketed as 'Custom' under the Stackdriver label 'info_type'. */
		publishToStackdriver?: GooglePrivacyDlpV2PublishToStackdriver;

		/** If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk */
		saveFindings?: GooglePrivacyDlpV2SaveFindings;
	}

	/** A task to execute on the completion of a job. See https://cloud.google.com/dlp/docs/concepts-actions to learn more. */
	export interface GooglePrivacyDlpV2ActionFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ActionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ActionFormProperties>({
		});

	}


	/** Create a de-identified copy of the requested table or files. A TransformationDetail will be created for each transformation. If any rows in BigQuery are skipped during de-identification (transformation errors or row size exceeds BigQuery insert API limits) they are placed in the failure output table. If the original row exceeds the BigQuery insert API limit it will be truncated when written to the failure output table. The failure output table can be set in the action.deidentify.output.big_query_output.deidentified_failure_output_table field, if no table is set, a table will be automatically created in the same project and dataset as the original table. Compatible with: Inspect */
	export interface GooglePrivacyDlpV2Deidentify {

		/** Required. User settable Cloud Storage bucket and folders to store de-identified files. This field must be set for cloud storage deidentification. The output Cloud Storage bucket must be different from the input bucket. De-identified files will overwrite files in the output path. Form of: gs://bucket/folder/ or gs://bucket */
		cloudStorageOutput?: string | null;

		/** List of user-specified file type groups to transform. If specified, only the files with these filetypes will be transformed. If empty, all supported files will be transformed. Supported types may be automatically added over time. If a file type is set in this field that isn't supported by the Deidentify action then the job will fail and will not be successfully created/started. Currently the only filetypes supported are: IMAGES, TEXT_FILES, CSV, TSV. */
		fileTypesToTransform?: Array<string>;

		/** User specified templates and configs for how to deidentify structured, unstructures, and image files. User must provide either a unstructured deidentify template or at least one redact image config. */
		transformationConfig?: GooglePrivacyDlpV2TransformationConfig;

		/** Config for storing transformation details. */
		transformationDetailsStorageConfig?: GooglePrivacyDlpV2TransformationDetailsStorageConfig;
	}

	/** Create a de-identified copy of the requested table or files. A TransformationDetail will be created for each transformation. If any rows in BigQuery are skipped during de-identification (transformation errors or row size exceeds BigQuery insert API limits) they are placed in the failure output table. If the original row exceeds the BigQuery insert API limit it will be truncated when written to the failure output table. The failure output table can be set in the action.deidentify.output.big_query_output.deidentified_failure_output_table field, if no table is set, a table will be automatically created in the same project and dataset as the original table. Compatible with: Inspect */
	export interface GooglePrivacyDlpV2DeidentifyFormProperties {

		/** Required. User settable Cloud Storage bucket and folders to store de-identified files. This field must be set for cloud storage deidentification. The output Cloud Storage bucket must be different from the input bucket. De-identified files will overwrite files in the output path. Form of: gs://bucket/folder/ or gs://bucket */
		cloudStorageOutput: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DeidentifyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeidentifyFormProperties>({
			cloudStorageOutput: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User specified templates and configs for how to deidentify structured, unstructures, and image files. User must provide either a unstructured deidentify template or at least one redact image config. */
	export interface GooglePrivacyDlpV2TransformationConfig {

		/** De-identify template. If this template is specified, it will serve as the default de-identify template. This template cannot contain `record_transformations` since it can be used for unstructured content such as free-form text files. If this template is not set, a default `ReplaceWithInfoTypeConfig` will be used to de-identify unstructured content. */
		deidentifyTemplate?: string | null;

		/** Image redact template. If this template is specified, it will serve as the de-identify template for images. If this template is not set, all findings in the image will be redacted with a black box. */
		imageRedactTemplate?: string | null;

		/** Structured de-identify template. If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables. If this template is not set but the `deidentify_template` is set, then `deidentify_template` will also apply to the structured content. If neither template is set, a default `ReplaceWithInfoTypeConfig` will be used to de-identify structured content. */
		structuredDeidentifyTemplate?: string | null;
	}

	/** User specified templates and configs for how to deidentify structured, unstructures, and image files. User must provide either a unstructured deidentify template or at least one redact image config. */
	export interface GooglePrivacyDlpV2TransformationConfigFormProperties {

		/** De-identify template. If this template is specified, it will serve as the default de-identify template. This template cannot contain `record_transformations` since it can be used for unstructured content such as free-form text files. If this template is not set, a default `ReplaceWithInfoTypeConfig` will be used to de-identify unstructured content. */
		deidentifyTemplate: FormControl<string | null | undefined>,

		/** Image redact template. If this template is specified, it will serve as the de-identify template for images. If this template is not set, all findings in the image will be redacted with a black box. */
		imageRedactTemplate: FormControl<string | null | undefined>,

		/** Structured de-identify template. If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables. If this template is not set but the `deidentify_template` is set, then `deidentify_template` will also apply to the structured content. If neither template is set, a default `ReplaceWithInfoTypeConfig` will be used to de-identify structured content. */
		structuredDeidentifyTemplate: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TransformationConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TransformationConfigFormProperties>({
			deidentifyTemplate: new FormControl<string | null | undefined>(undefined),
			imageRedactTemplate: new FormControl<string | null | undefined>(undefined),
			structuredDeidentifyTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Config for storing transformation details. */
	export interface GooglePrivacyDlpV2TransformationDetailsStorageConfig {

		/** Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`. */
		table?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** Config for storing transformation details. */
	export interface GooglePrivacyDlpV2TransformationDetailsStorageConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2TransformationDetailsStorageConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TransformationDetailsStorageConfigFormProperties>({
		});

	}


	/** Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`. */
	export interface GooglePrivacyDlpV2BigQueryTable {

		/** Dataset ID of the table. */
		datasetId?: string | null;

		/** The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call. */
		projectId?: string | null;

		/** Name of the table. */
		tableId?: string | null;
	}

	/** Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`. */
	export interface GooglePrivacyDlpV2BigQueryTableFormProperties {

		/** Dataset ID of the table. */
		datasetId: FormControl<string | null | undefined>,

		/** The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call. */
		projectId: FormControl<string | null | undefined>,

		/** Name of the table. */
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2BigQueryTableFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BigQueryTableFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sends an email when the job completes. The email goes to IAM project owners and technical [Essential Contacts](https://cloud.google.com/resource-manager/docs/managing-notification-contacts). */
	export interface GooglePrivacyDlpV2JobNotificationEmails {
	}

	/** Sends an email when the job completes. The email goes to IAM project owners and technical [Essential Contacts](https://cloud.google.com/resource-manager/docs/managing-notification-contacts). */
	export interface GooglePrivacyDlpV2JobNotificationEmailsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2JobNotificationEmailsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2JobNotificationEmailsFormProperties>({
		});

	}


	/** Publish a message into a given Pub/Sub topic when DlpJob has completed. The message contains a single field, `DlpJobName`, which is equal to the finished job's [`DlpJob.name`](https://cloud.google.com/dlp/docs/reference/rest/v2/projects.dlpJobs#DlpJob). Compatible with: Inspect, Risk */
	export interface GooglePrivacyDlpV2PublishToPubSub {

		/** Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}. */
		topic?: string | null;
	}

	/** Publish a message into a given Pub/Sub topic when DlpJob has completed. The message contains a single field, `DlpJobName`, which is equal to the finished job's [`DlpJob.name`](https://cloud.google.com/dlp/docs/reference/rest/v2/projects.dlpJobs#DlpJob). Compatible with: Inspect, Risk */
	export interface GooglePrivacyDlpV2PublishToPubSubFormProperties {

		/** Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2PublishToPubSubFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PublishToPubSubFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Publish findings of a DlpJob to Data Catalog. In Data Catalog, tag templates are applied to the resource that Cloud DLP scanned. Data Catalog tag templates are stored in the same project and region where the BigQuery table exists. For Cloud DLP to create and apply the tag template, the Cloud DLP service agent must have the `roles/datacatalog.tagTemplateOwner` permission on the project. The tag template contains fields summarizing the results of the DlpJob. Any field values previously written by another DlpJob are deleted. InfoType naming patterns are strictly enforced when using this feature. Findings are persisted in Data Catalog storage and are governed by service-specific policies for Data Catalog. For more information, see [Service Specific Terms](https://cloud.google.com/terms/service-terms). Only a single instance of this action can be specified. This action is allowed only if all resources being scanned are BigQuery tables. Compatible with: Inspect */
	export interface GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog {
	}

	/** Publish findings of a DlpJob to Data Catalog. In Data Catalog, tag templates are applied to the resource that Cloud DLP scanned. Data Catalog tag templates are stored in the same project and region where the BigQuery table exists. For Cloud DLP to create and apply the tag template, the Cloud DLP service agent must have the `roles/datacatalog.tagTemplateOwner` permission on the project. The tag template contains fields summarizing the results of the DlpJob. Any field values previously written by another DlpJob are deleted. InfoType naming patterns are strictly enforced when using this feature. Findings are persisted in Data Catalog storage and are governed by service-specific policies for Data Catalog. For more information, see [Service Specific Terms](https://cloud.google.com/terms/service-terms). Only a single instance of this action can be specified. This action is allowed only if all resources being scanned are BigQuery tables. Compatible with: Inspect */
	export interface GooglePrivacyDlpV2PublishFindingsToCloudDataCatalogFormProperties {
	}
	export function CreateGooglePrivacyDlpV2PublishFindingsToCloudDataCatalogFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PublishFindingsToCloudDataCatalogFormProperties>({
		});

	}


	/** Publish the result summary of a DlpJob to [Security Command Center](https://cloud.google.com/security-command-center). This action is available for only projects that belong to an organization. This action publishes the count of finding instances and their infoTypes. The summary of findings are persisted in Security Command Center and are governed by [service-specific policies for Security Command Center](https://cloud.google.com/terms/service-terms). Only a single instance of this action can be specified. Compatible with: Inspect */
	export interface GooglePrivacyDlpV2PublishSummaryToCscc {
	}

	/** Publish the result summary of a DlpJob to [Security Command Center](https://cloud.google.com/security-command-center). This action is available for only projects that belong to an organization. This action publishes the count of finding instances and their infoTypes. The summary of findings are persisted in Security Command Center and are governed by [service-specific policies for Security Command Center](https://cloud.google.com/terms/service-terms). Only a single instance of this action can be specified. Compatible with: Inspect */
	export interface GooglePrivacyDlpV2PublishSummaryToCsccFormProperties {
	}
	export function CreateGooglePrivacyDlpV2PublishSummaryToCsccFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PublishSummaryToCsccFormProperties>({
		});

	}


	/** Enable Stackdriver metric dlp.googleapis.com/finding_count. This will publish a metric to stack driver on each infotype requested and how many findings were found for it. CustomDetectors will be bucketed as 'Custom' under the Stackdriver label 'info_type'. */
	export interface GooglePrivacyDlpV2PublishToStackdriver {
	}

	/** Enable Stackdriver metric dlp.googleapis.com/finding_count. This will publish a metric to stack driver on each infotype requested and how many findings were found for it. CustomDetectors will be bucketed as 'Custom' under the Stackdriver label 'info_type'. */
	export interface GooglePrivacyDlpV2PublishToStackdriverFormProperties {
	}
	export function CreateGooglePrivacyDlpV2PublishToStackdriverFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PublishToStackdriverFormProperties>({
		});

	}


	/** If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk */
	export interface GooglePrivacyDlpV2SaveFindings {

		/** Cloud repository for storing output. */
		outputConfig?: GooglePrivacyDlpV2OutputStorageConfig;
	}

	/** If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk */
	export interface GooglePrivacyDlpV2SaveFindingsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2SaveFindingsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2SaveFindingsFormProperties>({
		});

	}


	/** Cloud repository for storing output. */
	export interface GooglePrivacyDlpV2OutputStorageConfig {

		/** Schema used for writing the findings for Inspect jobs. This field is only used for Inspect and must be unspecified for Risk jobs. Columns are derived from the `Finding` object. If appending to an existing table, any columns from the predefined schema that are missing will be added. No columns in the existing table will be deleted. If unspecified, then all available columns will be used for a new table or an (existing) table with no schema, and no changes will be made to an existing table that has a schema. Only for use with external storage. */
		outputSchema?: GooglePrivacyDlpV2OutputStorageConfigOutputSchema | null;

		/** Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`. */
		table?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** Cloud repository for storing output. */
	export interface GooglePrivacyDlpV2OutputStorageConfigFormProperties {

		/** Schema used for writing the findings for Inspect jobs. This field is only used for Inspect and must be unspecified for Risk jobs. Columns are derived from the `Finding` object. If appending to an existing table, any columns from the predefined schema that are missing will be added. No columns in the existing table will be deleted. If unspecified, then all available columns will be used for a new table or an (existing) table with no schema, and no changes will be made to an existing table that has a schema. Only for use with external storage. */
		outputSchema: FormControl<GooglePrivacyDlpV2OutputStorageConfigOutputSchema | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2OutputStorageConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2OutputStorageConfigFormProperties>({
			outputSchema: new FormControl<GooglePrivacyDlpV2OutputStorageConfigOutputSchema | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2OutputStorageConfigOutputSchema { OUTPUT_SCHEMA_UNSPECIFIED = 0, BASIC_COLUMNS = 1, GCS_COLUMNS = 2, DATASTORE_COLUMNS = 3, BIG_QUERY_COLUMNS = 4, ALL_COLUMNS = 5 }


	/** The results of an Action. */
	export interface GooglePrivacyDlpV2ActionDetails {

		/** The results of a Deidentify action from an inspect job. */
		deidentifyDetails?: GooglePrivacyDlpV2DeidentifyDataSourceDetails;
	}

	/** The results of an Action. */
	export interface GooglePrivacyDlpV2ActionDetailsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ActionDetailsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ActionDetailsFormProperties>({
		});

	}


	/** The results of a Deidentify action from an inspect job. */
	export interface GooglePrivacyDlpV2DeidentifyDataSourceDetails {

		/** Summary of what was modified during a transformation. */
		deidentifyStats?: GooglePrivacyDlpV2DeidentifyDataSourceStats;

		/** De-identification options. */
		requestedOptions?: GooglePrivacyDlpV2RequestedDeidentifyOptions;
	}

	/** The results of a Deidentify action from an inspect job. */
	export interface GooglePrivacyDlpV2DeidentifyDataSourceDetailsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DeidentifyDataSourceDetailsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeidentifyDataSourceDetailsFormProperties>({
		});

	}


	/** Summary of what was modified during a transformation. */
	export interface GooglePrivacyDlpV2DeidentifyDataSourceStats {

		/** Number of successfully applied transformations. */
		transformationCount?: string | null;

		/** Number of errors encountered while trying to apply transformations. */
		transformationErrorCount?: string | null;

		/** Total size in bytes that were transformed in some way. */
		transformedBytes?: string | null;
	}

	/** Summary of what was modified during a transformation. */
	export interface GooglePrivacyDlpV2DeidentifyDataSourceStatsFormProperties {

		/** Number of successfully applied transformations. */
		transformationCount: FormControl<string | null | undefined>,

		/** Number of errors encountered while trying to apply transformations. */
		transformationErrorCount: FormControl<string | null | undefined>,

		/** Total size in bytes that were transformed in some way. */
		transformedBytes: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DeidentifyDataSourceStatsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeidentifyDataSourceStatsFormProperties>({
			transformationCount: new FormControl<string | null | undefined>(undefined),
			transformationErrorCount: new FormControl<string | null | undefined>(undefined),
			transformedBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** De-identification options. */
	export interface GooglePrivacyDlpV2RequestedDeidentifyOptions {

		/** DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more. */
		snapshotDeidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;

		/** DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more. */
		snapshotImageRedactTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;

		/** DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more. */
		snapshotStructuredDeidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;
	}

	/** De-identification options. */
	export interface GooglePrivacyDlpV2RequestedDeidentifyOptionsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RequestedDeidentifyOptionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RequestedDeidentifyOptionsFormProperties>({
		});

	}


	/** DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more. */
	export interface GooglePrivacyDlpV2DeidentifyTemplate {

		/** Output only. The creation timestamp of an inspectTemplate. */
		createTime?: string | null;

		/** The configuration that controls how the data will change. */
		deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;

		/** Short description (max 256 chars). */
		description?: string | null;

		/** Display name (max 256 chars). */
		displayName?: string | null;

		/** Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID` */
		name?: string | null;

		/** Output only. The last update timestamp of an inspectTemplate. */
		updateTime?: string | null;
	}

	/** DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more. */
	export interface GooglePrivacyDlpV2DeidentifyTemplateFormProperties {

		/** Output only. The creation timestamp of an inspectTemplate. */
		createTime: FormControl<string | null | undefined>,

		/** Short description (max 256 chars). */
		description: FormControl<string | null | undefined>,

		/** Display name (max 256 chars). */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID` */
		name: FormControl<string | null | undefined>,

		/** Output only. The last update timestamp of an inspectTemplate. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DeidentifyTemplateFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeidentifyTemplateFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration that controls how the data will change. */
	export interface GooglePrivacyDlpV2DeidentifyConfig {

		/** A type of transformation that is applied over images. */
		imageTransformations?: GooglePrivacyDlpV2ImageTransformations;

		/** A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type. */
		infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations;

		/** A type of transformation that is applied over structured data such as a table. */
		recordTransformations?: GooglePrivacyDlpV2RecordTransformations;

		/** How to handle transformation errors during de-identification. A transformation error occurs when the requested transformation is incompatible with the data. For example, trying to de-identify an IP address using a `DateShift` transformation would result in a transformation error, since date info cannot be extracted from an IP address. Information about any incompatible transformations, and how they were handled, is returned in the response as part of the `TransformationOverviews`. */
		transformationErrorHandling?: GooglePrivacyDlpV2TransformationErrorHandling;
	}

	/** The configuration that controls how the data will change. */
	export interface GooglePrivacyDlpV2DeidentifyConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DeidentifyConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeidentifyConfigFormProperties>({
		});

	}


	/** A type of transformation that is applied over images. */
	export interface GooglePrivacyDlpV2ImageTransformations {
		transforms?: Array<GooglePrivacyDlpV2ImageTransformation>;
	}

	/** A type of transformation that is applied over images. */
	export interface GooglePrivacyDlpV2ImageTransformationsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ImageTransformationsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ImageTransformationsFormProperties>({
		});

	}


	/** Configuration for determining how redaction of images should occur. */
	export interface GooglePrivacyDlpV2ImageTransformation {

		/** Apply transformation to all findings. */
		allInfoTypes?: GooglePrivacyDlpV2AllInfoTypes;

		/** Apply to all text. */
		allText?: GooglePrivacyDlpV2AllText;

		/** Represents a color in the RGB color space. */
		redactionColor?: GooglePrivacyDlpV2Color;

		/** Apply transformation to the selected info_types. */
		selectedInfoTypes?: GooglePrivacyDlpV2SelectedInfoTypes;
	}

	/** Configuration for determining how redaction of images should occur. */
	export interface GooglePrivacyDlpV2ImageTransformationFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ImageTransformationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ImageTransformationFormProperties>({
		});

	}


	/** Apply transformation to all findings. */
	export interface GooglePrivacyDlpV2AllInfoTypes {
	}

	/** Apply transformation to all findings. */
	export interface GooglePrivacyDlpV2AllInfoTypesFormProperties {
	}
	export function CreateGooglePrivacyDlpV2AllInfoTypesFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2AllInfoTypesFormProperties>({
		});

	}


	/** Apply to all text. */
	export interface GooglePrivacyDlpV2AllText {
	}

	/** Apply to all text. */
	export interface GooglePrivacyDlpV2AllTextFormProperties {
	}
	export function CreateGooglePrivacyDlpV2AllTextFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2AllTextFormProperties>({
		});

	}


	/** Represents a color in the RGB color space. */
	export interface GooglePrivacyDlpV2Color {

		/** The amount of blue in the color as a value in the interval [0, 1]. */
		blue?: number | null;

		/** The amount of green in the color as a value in the interval [0, 1]. */
		green?: number | null;

		/** The amount of red in the color as a value in the interval [0, 1]. */
		red?: number | null;
	}

	/** Represents a color in the RGB color space. */
	export interface GooglePrivacyDlpV2ColorFormProperties {

		/** The amount of blue in the color as a value in the interval [0, 1]. */
		blue: FormControl<number | null | undefined>,

		/** The amount of green in the color as a value in the interval [0, 1]. */
		green: FormControl<number | null | undefined>,

		/** The amount of red in the color as a value in the interval [0, 1]. */
		red: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ColorFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ColorFormProperties>({
			blue: new FormControl<number | null | undefined>(undefined),
			green: new FormControl<number | null | undefined>(undefined),
			red: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Apply transformation to the selected info_types. */
	export interface GooglePrivacyDlpV2SelectedInfoTypes {

		/** Required. InfoTypes to apply the transformation to. Required. Provided InfoType must be unique within the ImageTransformations message. */
		infoTypes?: Array<GooglePrivacyDlpV2InfoType>;
	}

	/** Apply transformation to the selected info_types. */
	export interface GooglePrivacyDlpV2SelectedInfoTypesFormProperties {
	}
	export function CreateGooglePrivacyDlpV2SelectedInfoTypesFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2SelectedInfoTypesFormProperties>({
		});

	}


	/** Type of information detected by the API. */
	export interface GooglePrivacyDlpV2InfoType {

		/** Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$_-]{1,64}`. */
		name?: string | null;

		/** Score is calculated from of all elements in the data profile. A higher level means the data is more sensitive. */
		sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;

		/** Optional version name for this InfoType. */
		version?: string | null;
	}

	/** Type of information detected by the API. */
	export interface GooglePrivacyDlpV2InfoTypeFormProperties {

		/** Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$_-]{1,64}`. */
		name: FormControl<string | null | undefined>,

		/** Optional version name for this InfoType. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InfoTypeFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Score is calculated from of all elements in the data profile. A higher level means the data is more sensitive. */
	export interface GooglePrivacyDlpV2SensitivityScore {

		/** The sensitivity score applied to the resource. */
		score?: GooglePrivacyDlpV2SensitivityScoreScore | null;
	}

	/** Score is calculated from of all elements in the data profile. A higher level means the data is more sensitive. */
	export interface GooglePrivacyDlpV2SensitivityScoreFormProperties {

		/** The sensitivity score applied to the resource. */
		score: FormControl<GooglePrivacyDlpV2SensitivityScoreScore | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2SensitivityScoreFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2SensitivityScoreFormProperties>({
			score: new FormControl<GooglePrivacyDlpV2SensitivityScoreScore | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2SensitivityScoreScore { SENSITIVITY_SCORE_UNSPECIFIED = 0, SENSITIVITY_LOW = 1, SENSITIVITY_MODERATE = 2, SENSITIVITY_HIGH = 3 }


	/** A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type. */
	export interface GooglePrivacyDlpV2InfoTypeTransformations {

		/** Required. Transformation for each infoType. Cannot specify more than one for a given infoType. */
		transformations?: Array<GooglePrivacyDlpV2InfoTypeTransformation>;
	}

	/** A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type. */
	export interface GooglePrivacyDlpV2InfoTypeTransformationsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2InfoTypeTransformationsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeTransformationsFormProperties>({
		});

	}


	/** A transformation to apply to text that is identified as a specific info_type. */
	export interface GooglePrivacyDlpV2InfoTypeTransformation {

		/** InfoTypes to apply the transformation to. An empty list will cause this transformation to apply to all findings that correspond to infoTypes that were requested in `InspectConfig`. */
		infoTypes?: Array<GooglePrivacyDlpV2InfoType>;

		/** A rule for transforming a value. */
		primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation;
	}

	/** A transformation to apply to text that is identified as a specific info_type. */
	export interface GooglePrivacyDlpV2InfoTypeTransformationFormProperties {
	}
	export function CreateGooglePrivacyDlpV2InfoTypeTransformationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeTransformationFormProperties>({
		});

	}


	/** A rule for transforming a value. */
	export interface GooglePrivacyDlpV2PrimitiveTransformation {

		/** Generalization function that buckets values based on ranges. The ranges and replacement values are dynamically provided by the user for custom behavior, such as 1-30 -> LOW 31-65 -> MEDIUM 66-100 -> HIGH This can be used on data of type: number, long, string, timestamp. If the bound `Value` type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more. */
		bucketingConfig?: GooglePrivacyDlpV2BucketingConfig;

		/** Partially mask a string by replacing a given number of characters with a fixed character. Masking can start from the beginning or end of the string. This can be used on data of any type (numbers, longs, and so on) and when de-identifying structured data we'll attempt to preserve the original data's type. (This allows you to take a long like 123 and modify it to a string like **3. */
		characterMaskConfig?: GooglePrivacyDlpV2CharacterMaskConfig;

		/** Pseudonymization method that generates deterministic encryption for the given input. Outputs a base64 encoded representation of the encrypted output. Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297. */
		cryptoDeterministicConfig?: GooglePrivacyDlpV2CryptoDeterministicConfig;

		/** Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. The key size must be either 32 or 64 bytes. Outputs a base64 encoded representation of the hashed output (for example, L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=). Currently, only string and integer values can be hashed. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. */
		cryptoHashConfig?: GooglePrivacyDlpV2CryptoHashConfig;

		/** Replaces an identifier with a surrogate using Format Preserving Encryption (FPE) with the FFX mode of operation; however when used in the `ReidentifyContent` API method, it serves the opposite function by reversing the surrogate back into the original identifier. The identifier must be encoded as ASCII. For a given crypto key and context, the same identifier will be replaced with the same surrogate. Identifiers must be at least two characters long. In the case that the identifier is the empty string, it will be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. Note: We recommend using CryptoDeterministicConfig for all use cases which do not require preserving the input alphabet space and size, plus warrant referential integrity. */
		cryptoReplaceFfxFpeConfig?: GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig;

		/** Shifts dates by random number of days, with option to be consistent for the same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting to learn more. */
		dateShiftConfig?: GooglePrivacyDlpV2DateShiftConfig;

		/** Buckets values based on fixed size ranges. The Bucketing transformation can provide all of this functionality, but requires more configuration. This message is provided as a convenience to the user for simple bucketing strategies. The transformed value will be a hyphenated string of {lower_bound}-{upper_bound}. For example, if lower_bound = 10 and upper_bound = 20, all values that are within this bucket will be replaced with "10-20". This can be used on data of type: double, long. If the bound Value type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more. */
		fixedSizeBucketingConfig?: GooglePrivacyDlpV2FixedSizeBucketingConfig;

		/** Redact a given value. For example, if used with an `InfoTypeTransformation` transforming PHONE_NUMBER, and input 'My phone number is 206-555-0123', the output would be 'My phone number is '. */
		redactConfig?: GooglePrivacyDlpV2RedactConfig;

		/** Replace each input value with a given `Value`. */
		replaceConfig?: GooglePrivacyDlpV2ReplaceValueConfig;

		/** Replace each input value with a value randomly selected from the dictionary. */
		replaceDictionaryConfig?: GooglePrivacyDlpV2ReplaceDictionaryConfig;

		/** Replace each matching finding with the name of the info_type. */
		replaceWithInfoTypeConfig?: GooglePrivacyDlpV2ReplaceWithInfoTypeConfig;

		/** For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a portion of the value. */
		timePartConfig?: GooglePrivacyDlpV2TimePartConfig;
	}

	/** A rule for transforming a value. */
	export interface GooglePrivacyDlpV2PrimitiveTransformationFormProperties {
	}
	export function CreateGooglePrivacyDlpV2PrimitiveTransformationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PrimitiveTransformationFormProperties>({
		});

	}


	/** Generalization function that buckets values based on ranges. The ranges and replacement values are dynamically provided by the user for custom behavior, such as 1-30 -> LOW 31-65 -> MEDIUM 66-100 -> HIGH This can be used on data of type: number, long, string, timestamp. If the bound `Value` type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more. */
	export interface GooglePrivacyDlpV2BucketingConfig {

		/** Set of buckets. Ranges must be non-overlapping. */
		buckets?: Array<GooglePrivacyDlpV2Bucket>;
	}

	/** Generalization function that buckets values based on ranges. The ranges and replacement values are dynamically provided by the user for custom behavior, such as 1-30 -> LOW 31-65 -> MEDIUM 66-100 -> HIGH This can be used on data of type: number, long, string, timestamp. If the bound `Value` type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more. */
	export interface GooglePrivacyDlpV2BucketingConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2BucketingConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BucketingConfigFormProperties>({
		});

	}


	/** Bucket is represented as a range, along with replacement values. */
	export interface GooglePrivacyDlpV2Bucket {

		/** Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data. */
		max?: GooglePrivacyDlpV2Value;

		/** Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data. */
		min?: GooglePrivacyDlpV2Value;

		/** Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data. */
		replacementValue?: GooglePrivacyDlpV2Value;
	}

	/** Bucket is represented as a range, along with replacement values. */
	export interface GooglePrivacyDlpV2BucketFormProperties {
	}
	export function CreateGooglePrivacyDlpV2BucketFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BucketFormProperties>({
		});

	}


	/** Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data. */
	export interface GooglePrivacyDlpV2Value {

		/** boolean */
		booleanValue?: boolean | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		dateValue?: GoogleTypeDate;

		/** day of week */
		dayOfWeekValue?: GooglePrivacyDlpV2ValueDayOfWeekValue | null;

		/** float */
		floatValue?: number | null;

		/** integer */
		integerValue?: string | null;

		/** string */
		stringValue?: string | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		timeValue?: GoogleTypeTimeOfDay;

		/** timestamp */
		timestampValue?: string | null;
	}

	/** Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data. */
	export interface GooglePrivacyDlpV2ValueFormProperties {

		/** boolean */
		booleanValue: FormControl<boolean | null | undefined>,

		/** day of week */
		dayOfWeekValue: FormControl<GooglePrivacyDlpV2ValueDayOfWeekValue | null | undefined>,

		/** float */
		floatValue: FormControl<number | null | undefined>,

		/** integer */
		integerValue: FormControl<string | null | undefined>,

		/** string */
		stringValue: FormControl<string | null | undefined>,

		/** timestamp */
		timestampValue: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ValueFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ValueFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			dayOfWeekValue: new FormControl<GooglePrivacyDlpV2ValueDayOfWeekValue | null | undefined>(undefined),
			floatValue: new FormControl<number | null | undefined>(undefined),
			integerValue: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
			timestampValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDate {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeDateFormGroup() {
		return new FormGroup<GoogleTypeDateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2ValueDayOfWeekValue { DAY_OF_WEEK_UNSPECIFIED = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6, SUNDAY = 7 }


	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface GoogleTypeTimeOfDay {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours?: number | null;

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes?: number | null;

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos?: number | null;

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface GoogleTypeTimeOfDayFormProperties {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours: FormControl<number | null | undefined>,

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes: FormControl<number | null | undefined>,

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos: FormControl<number | null | undefined>,

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeTimeOfDayFormGroup() {
		return new FormGroup<GoogleTypeTimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Partially mask a string by replacing a given number of characters with a fixed character. Masking can start from the beginning or end of the string. This can be used on data of any type (numbers, longs, and so on) and when de-identifying structured data we'll attempt to preserve the original data's type. (This allows you to take a long like 123 and modify it to a string like **3. */
	export interface GooglePrivacyDlpV2CharacterMaskConfig {

		/** When masking a string, items in this list will be skipped when replacing characters. For example, if the input string is `555-555-5555` and you instruct Cloud DLP to skip `-` and mask 5 characters with `*`, Cloud DLP returns `***-**5-5555`. */
		charactersToIgnore?: Array<GooglePrivacyDlpV2CharsToIgnore>;

		/** Character to use to mask the sensitive values—for example, `*` for an alphabetic string such as a name, or `0` for a numeric string such as ZIP code or credit card number. This string must have a length of 1. If not supplied, this value defaults to `*` for strings, and `0` for digits. */
		maskingCharacter?: string | null;

		/** Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally. If `number_to_mask` is negative, this denotes inverse masking. Cloud DLP masks all but a number of characters. For example, suppose you have the following values: - `masking_character` is `*` - `number_to_mask` is `-4` - `reverse_order` is `false` - `CharsToIgnore` includes `-` - Input string is `1234-5678-9012-3456` The resulting de-identified string is `****-****-****-3456`. Cloud DLP masks all but the last four characters. If `reverse_order` is `true`, all but the first four characters are masked as `1234-****-****-****`. */
		numberToMask?: number | null;

		/** Mask characters in reverse order. For example, if `masking_character` is `0`, `number_to_mask` is `14`, and `reverse_order` is `false`, then the input string `1234-5678-9012-3456` is masked as `00000000000000-3456`. If `masking_character` is `*`, `number_to_mask` is `3`, and `reverse_order` is `true`, then the string `12345` is masked as `12***`. */
		reverseOrder?: boolean | null;
	}

	/** Partially mask a string by replacing a given number of characters with a fixed character. Masking can start from the beginning or end of the string. This can be used on data of any type (numbers, longs, and so on) and when de-identifying structured data we'll attempt to preserve the original data's type. (This allows you to take a long like 123 and modify it to a string like **3. */
	export interface GooglePrivacyDlpV2CharacterMaskConfigFormProperties {

		/** Character to use to mask the sensitive values—for example, `*` for an alphabetic string such as a name, or `0` for a numeric string such as ZIP code or credit card number. This string must have a length of 1. If not supplied, this value defaults to `*` for strings, and `0` for digits. */
		maskingCharacter: FormControl<string | null | undefined>,

		/** Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally. If `number_to_mask` is negative, this denotes inverse masking. Cloud DLP masks all but a number of characters. For example, suppose you have the following values: - `masking_character` is `*` - `number_to_mask` is `-4` - `reverse_order` is `false` - `CharsToIgnore` includes `-` - Input string is `1234-5678-9012-3456` The resulting de-identified string is `****-****-****-3456`. Cloud DLP masks all but the last four characters. If `reverse_order` is `true`, all but the first four characters are masked as `1234-****-****-****`. */
		numberToMask: FormControl<number | null | undefined>,

		/** Mask characters in reverse order. For example, if `masking_character` is `0`, `number_to_mask` is `14`, and `reverse_order` is `false`, then the input string `1234-5678-9012-3456` is masked as `00000000000000-3456`. If `masking_character` is `*`, `number_to_mask` is `3`, and `reverse_order` is `true`, then the string `12345` is masked as `12***`. */
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CharacterMaskConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CharacterMaskConfigFormProperties>({
			maskingCharacter: new FormControl<string | null | undefined>(undefined),
			numberToMask: new FormControl<number | null | undefined>(undefined),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Characters to skip when doing deidentification of a value. These will be left alone and skipped. */
	export interface GooglePrivacyDlpV2CharsToIgnore {

		/** Characters to not transform when masking. */
		charactersToSkip?: string | null;

		/** Common characters to not transform when masking. Useful to avoid removing punctuation. */
		commonCharactersToIgnore?: GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnore | null;
	}

	/** Characters to skip when doing deidentification of a value. These will be left alone and skipped. */
	export interface GooglePrivacyDlpV2CharsToIgnoreFormProperties {

		/** Characters to not transform when masking. */
		charactersToSkip: FormControl<string | null | undefined>,

		/** Common characters to not transform when masking. Useful to avoid removing punctuation. */
		commonCharactersToIgnore: FormControl<GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnore | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CharsToIgnoreFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CharsToIgnoreFormProperties>({
			charactersToSkip: new FormControl<string | null | undefined>(undefined),
			commonCharactersToIgnore: new FormControl<GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnore | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnore { COMMON_CHARS_TO_IGNORE_UNSPECIFIED = 0, NUMERIC = 1, ALPHA_UPPER_CASE = 2, ALPHA_LOWER_CASE = 3, PUNCTUATION = 4, WHITESPACE = 5 }


	/** Pseudonymization method that generates deterministic encryption for the given input. Outputs a base64 encoded representation of the encrypted output. Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297. */
	export interface GooglePrivacyDlpV2CryptoDeterministicConfig {

		/** General identifier of a data field in a storage service. */
		context?: GooglePrivacyDlpV2FieldId;

		/** This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK. */
		cryptoKey?: GooglePrivacyDlpV2CryptoKey;

		/** Type of information detected by the API. */
		surrogateInfoType?: GooglePrivacyDlpV2InfoType;
	}

	/** Pseudonymization method that generates deterministic encryption for the given input. Outputs a base64 encoded representation of the encrypted output. Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297. */
	export interface GooglePrivacyDlpV2CryptoDeterministicConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2CryptoDeterministicConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CryptoDeterministicConfigFormProperties>({
		});

	}


	/** General identifier of a data field in a storage service. */
	export interface GooglePrivacyDlpV2FieldId {

		/** Name describing the field. */
		name?: string | null;
	}

	/** General identifier of a data field in a storage service. */
	export interface GooglePrivacyDlpV2FieldIdFormProperties {

		/** Name describing the field. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2FieldIdFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2FieldIdFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK. */
	export interface GooglePrivacyDlpV2CryptoKey {

		/** Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. Authorization requires the following IAM permissions when sending a request to perform a crypto transformation using a KMS-wrapped crypto key: dlp.kms.encrypt For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key). Note: When you use Cloud KMS for cryptographic operations, [charges apply](https://cloud.google.com/kms/pricing). */
		kmsWrapped?: GooglePrivacyDlpV2KmsWrappedCryptoKey;

		/** Use this to have a random data crypto key generated. It will be discarded after the request finishes. */
		transient?: GooglePrivacyDlpV2TransientCryptoKey;

		/** Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible. */
		unwrapped?: GooglePrivacyDlpV2UnwrappedCryptoKey;
	}

	/** This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK. */
	export interface GooglePrivacyDlpV2CryptoKeyFormProperties {
	}
	export function CreateGooglePrivacyDlpV2CryptoKeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CryptoKeyFormProperties>({
		});

	}


	/** Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. Authorization requires the following IAM permissions when sending a request to perform a crypto transformation using a KMS-wrapped crypto key: dlp.kms.encrypt For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key). Note: When you use Cloud KMS for cryptographic operations, [charges apply](https://cloud.google.com/kms/pricing). */
	export interface GooglePrivacyDlpV2KmsWrappedCryptoKey {

		/** Required. The resource name of the KMS CryptoKey to use for unwrapping. */
		cryptoKeyName?: string | null;

		/** Required. The wrapped data crypto key. */
		wrappedKey?: string | null;
	}

	/** Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. Authorization requires the following IAM permissions when sending a request to perform a crypto transformation using a KMS-wrapped crypto key: dlp.kms.encrypt For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key). Note: When you use Cloud KMS for cryptographic operations, [charges apply](https://cloud.google.com/kms/pricing). */
	export interface GooglePrivacyDlpV2KmsWrappedCryptoKeyFormProperties {

		/** Required. The resource name of the KMS CryptoKey to use for unwrapping. */
		cryptoKeyName: FormControl<string | null | undefined>,

		/** Required. The wrapped data crypto key. */
		wrappedKey: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2KmsWrappedCryptoKeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KmsWrappedCryptoKeyFormProperties>({
			cryptoKeyName: new FormControl<string | null | undefined>(undefined),
			wrappedKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Use this to have a random data crypto key generated. It will be discarded after the request finishes. */
	export interface GooglePrivacyDlpV2TransientCryptoKey {

		/** Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
		name?: string | null;
	}

	/** Use this to have a random data crypto key generated. It will be discarded after the request finishes. */
	export interface GooglePrivacyDlpV2TransientCryptoKeyFormProperties {

		/** Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TransientCryptoKeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TransientCryptoKeyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible. */
	export interface GooglePrivacyDlpV2UnwrappedCryptoKey {

		/** Required. A 128/192/256 bit key. */
		key?: string | null;
	}

	/** Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible. */
	export interface GooglePrivacyDlpV2UnwrappedCryptoKeyFormProperties {

		/** Required. A 128/192/256 bit key. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2UnwrappedCryptoKeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2UnwrappedCryptoKeyFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. The key size must be either 32 or 64 bytes. Outputs a base64 encoded representation of the hashed output (for example, L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=). Currently, only string and integer values can be hashed. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. */
	export interface GooglePrivacyDlpV2CryptoHashConfig {

		/** This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK. */
		cryptoKey?: GooglePrivacyDlpV2CryptoKey;
	}

	/** Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. The key size must be either 32 or 64 bytes. Outputs a base64 encoded representation of the hashed output (for example, L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=). Currently, only string and integer values can be hashed. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. */
	export interface GooglePrivacyDlpV2CryptoHashConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2CryptoHashConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CryptoHashConfigFormProperties>({
		});

	}


	/** Replaces an identifier with a surrogate using Format Preserving Encryption (FPE) with the FFX mode of operation; however when used in the `ReidentifyContent` API method, it serves the opposite function by reversing the surrogate back into the original identifier. The identifier must be encoded as ASCII. For a given crypto key and context, the same identifier will be replaced with the same surrogate. Identifiers must be at least two characters long. In the case that the identifier is the empty string, it will be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. Note: We recommend using CryptoDeterministicConfig for all use cases which do not require preserving the input alphabet space and size, plus warrant referential integrity. */
	export interface GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig {

		/** Common alphabets. */
		commonAlphabet?: GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabet | null;

		/** General identifier of a data field in a storage service. */
		context?: GooglePrivacyDlpV2FieldId;

		/** This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK. */
		cryptoKey?: GooglePrivacyDlpV2CryptoKey;

		/** This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range [2, 95]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ~`!@#$%^&*()_-+={[}]|\:;"'<,>.?/ */
		customAlphabet?: string | null;

		/** The native way to select the alphabet. Must be in the range [2, 95]. */
		radix?: number | null;

		/** Type of information detected by the API. */
		surrogateInfoType?: GooglePrivacyDlpV2InfoType;
	}

	/** Replaces an identifier with a surrogate using Format Preserving Encryption (FPE) with the FFX mode of operation; however when used in the `ReidentifyContent` API method, it serves the opposite function by reversing the surrogate back into the original identifier. The identifier must be encoded as ASCII. For a given crypto key and context, the same identifier will be replaced with the same surrogate. Identifiers must be at least two characters long. In the case that the identifier is the empty string, it will be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. Note: We recommend using CryptoDeterministicConfig for all use cases which do not require preserving the input alphabet space and size, plus warrant referential integrity. */
	export interface GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigFormProperties {

		/** Common alphabets. */
		commonAlphabet: FormControl<GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabet | null | undefined>,

		/** This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range [2, 95]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ~`!@#$%^&*()_-+={[}]|\:;"'<,>.?/ */
		customAlphabet: FormControl<string | null | undefined>,

		/** The native way to select the alphabet. Must be in the range [2, 95]. */
		radix: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CryptoReplaceFfxFpeConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigFormProperties>({
			commonAlphabet: new FormControl<GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabet | null | undefined>(undefined),
			customAlphabet: new FormControl<string | null | undefined>(undefined),
			radix: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabet { FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED = 0, NUMERIC = 1, HEXADECIMAL = 2, UPPER_CASE_ALPHA_NUMERIC = 3, ALPHA_NUMERIC = 4 }


	/** Shifts dates by random number of days, with option to be consistent for the same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting to learn more. */
	export interface GooglePrivacyDlpV2DateShiftConfig {

		/** General identifier of a data field in a storage service. */
		context?: GooglePrivacyDlpV2FieldId;

		/** This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK. */
		cryptoKey?: GooglePrivacyDlpV2CryptoKey;

		/** Required. For example, -5 means shift date to at most 5 days back in the past. */
		lowerBoundDays?: number | null;

		/** Required. Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction. For example, 3 means shift date to at most 3 days into the future. */
		upperBoundDays?: number | null;
	}

	/** Shifts dates by random number of days, with option to be consistent for the same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting to learn more. */
	export interface GooglePrivacyDlpV2DateShiftConfigFormProperties {

		/** Required. For example, -5 means shift date to at most 5 days back in the past. */
		lowerBoundDays: FormControl<number | null | undefined>,

		/** Required. Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction. For example, 3 means shift date to at most 3 days into the future. */
		upperBoundDays: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DateShiftConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DateShiftConfigFormProperties>({
			lowerBoundDays: new FormControl<number | null | undefined>(undefined),
			upperBoundDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Buckets values based on fixed size ranges. The Bucketing transformation can provide all of this functionality, but requires more configuration. This message is provided as a convenience to the user for simple bucketing strategies. The transformed value will be a hyphenated string of {lower_bound}-{upper_bound}. For example, if lower_bound = 10 and upper_bound = 20, all values that are within this bucket will be replaced with "10-20". This can be used on data of type: double, long. If the bound Value type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more. */
	export interface GooglePrivacyDlpV2FixedSizeBucketingConfig {

		/** Required. Size of each bucket (except for minimum and maximum buckets). So if `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works. */
		bucketSize?: number | null;

		/** Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data. */
		lowerBound?: GooglePrivacyDlpV2Value;

		/** Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data. */
		upperBound?: GooglePrivacyDlpV2Value;
	}

	/** Buckets values based on fixed size ranges. The Bucketing transformation can provide all of this functionality, but requires more configuration. This message is provided as a convenience to the user for simple bucketing strategies. The transformed value will be a hyphenated string of {lower_bound}-{upper_bound}. For example, if lower_bound = 10 and upper_bound = 20, all values that are within this bucket will be replaced with "10-20". This can be used on data of type: double, long. If the bound Value type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more. */
	export interface GooglePrivacyDlpV2FixedSizeBucketingConfigFormProperties {

		/** Required. Size of each bucket (except for minimum and maximum buckets). So if `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works. */
		bucketSize: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2FixedSizeBucketingConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2FixedSizeBucketingConfigFormProperties>({
			bucketSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Redact a given value. For example, if used with an `InfoTypeTransformation` transforming PHONE_NUMBER, and input 'My phone number is 206-555-0123', the output would be 'My phone number is '. */
	export interface GooglePrivacyDlpV2RedactConfig {
	}

	/** Redact a given value. For example, if used with an `InfoTypeTransformation` transforming PHONE_NUMBER, and input 'My phone number is 206-555-0123', the output would be 'My phone number is '. */
	export interface GooglePrivacyDlpV2RedactConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RedactConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RedactConfigFormProperties>({
		});

	}


	/** Replace each input value with a given `Value`. */
	export interface GooglePrivacyDlpV2ReplaceValueConfig {

		/** Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data. */
		newValue?: GooglePrivacyDlpV2Value;
	}

	/** Replace each input value with a given `Value`. */
	export interface GooglePrivacyDlpV2ReplaceValueConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ReplaceValueConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ReplaceValueConfigFormProperties>({
		});

	}


	/** Replace each input value with a value randomly selected from the dictionary. */
	export interface GooglePrivacyDlpV2ReplaceDictionaryConfig {

		/** Message defining a list of words or phrases to search for in the data. */
		wordList?: GooglePrivacyDlpV2WordList;
	}

	/** Replace each input value with a value randomly selected from the dictionary. */
	export interface GooglePrivacyDlpV2ReplaceDictionaryConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ReplaceDictionaryConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ReplaceDictionaryConfigFormProperties>({
		});

	}


	/** Message defining a list of words or phrases to search for in the data. */
	export interface GooglePrivacyDlpV2WordList {

		/** Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required] */
		words?: Array<string>;
	}

	/** Message defining a list of words or phrases to search for in the data. */
	export interface GooglePrivacyDlpV2WordListFormProperties {
	}
	export function CreateGooglePrivacyDlpV2WordListFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2WordListFormProperties>({
		});

	}


	/** Replace each matching finding with the name of the info_type. */
	export interface GooglePrivacyDlpV2ReplaceWithInfoTypeConfig {
	}

	/** Replace each matching finding with the name of the info_type. */
	export interface GooglePrivacyDlpV2ReplaceWithInfoTypeConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ReplaceWithInfoTypeConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ReplaceWithInfoTypeConfigFormProperties>({
		});

	}


	/** For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a portion of the value. */
	export interface GooglePrivacyDlpV2TimePartConfig {

		/** The part of the time to keep. */
		partToExtract?: GooglePrivacyDlpV2TimePartConfigPartToExtract | null;
	}

	/** For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a portion of the value. */
	export interface GooglePrivacyDlpV2TimePartConfigFormProperties {

		/** The part of the time to keep. */
		partToExtract: FormControl<GooglePrivacyDlpV2TimePartConfigPartToExtract | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TimePartConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TimePartConfigFormProperties>({
			partToExtract: new FormControl<GooglePrivacyDlpV2TimePartConfigPartToExtract | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2TimePartConfigPartToExtract { TIME_PART_UNSPECIFIED = 0, YEAR = 1, MONTH = 2, DAY_OF_MONTH = 3, DAY_OF_WEEK = 4, WEEK_OF_YEAR = 5, HOUR_OF_DAY = 6 }


	/** A type of transformation that is applied over structured data such as a table. */
	export interface GooglePrivacyDlpV2RecordTransformations {

		/** Transform the record by applying various field transformations. */
		fieldTransformations?: Array<GooglePrivacyDlpV2FieldTransformation>;

		/** Configuration defining which records get suppressed entirely. Records that match any suppression rule are omitted from the output. */
		recordSuppressions?: Array<GooglePrivacyDlpV2RecordSuppression>;
	}

	/** A type of transformation that is applied over structured data such as a table. */
	export interface GooglePrivacyDlpV2RecordTransformationsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RecordTransformationsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RecordTransformationsFormProperties>({
		});

	}


	/** The transformation to apply to the field. */
	export interface GooglePrivacyDlpV2FieldTransformation {

		/** A condition for determining whether a transformation should be applied to a field. */
		condition?: GooglePrivacyDlpV2RecordCondition;

		/** Required. Input field(s) to apply the transformation to. When you have columns that reference their position within a list, omit the index from the FieldId. FieldId name matching ignores the index. For example, instead of "contact.nums[0].type", use "contact.nums.type". */
		fields?: Array<GooglePrivacyDlpV2FieldId>;

		/** A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type. */
		infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations;

		/** A rule for transforming a value. */
		primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation;
	}

	/** The transformation to apply to the field. */
	export interface GooglePrivacyDlpV2FieldTransformationFormProperties {
	}
	export function CreateGooglePrivacyDlpV2FieldTransformationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2FieldTransformationFormProperties>({
		});

	}


	/** A condition for determining whether a transformation should be applied to a field. */
	export interface GooglePrivacyDlpV2RecordCondition {

		/** An expression, consisting of an operator and conditions. */
		expressions?: GooglePrivacyDlpV2Expressions;
	}

	/** A condition for determining whether a transformation should be applied to a field. */
	export interface GooglePrivacyDlpV2RecordConditionFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RecordConditionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RecordConditionFormProperties>({
		});

	}


	/** An expression, consisting of an operator and conditions. */
	export interface GooglePrivacyDlpV2Expressions {

		/** A collection of conditions. */
		conditions?: GooglePrivacyDlpV2Conditions;

		/** The operator to apply to the result of conditions. Default and currently only supported value is `AND`. */
		logicalOperator?: GooglePrivacyDlpV2ExpressionsLogicalOperator | null;
	}

	/** An expression, consisting of an operator and conditions. */
	export interface GooglePrivacyDlpV2ExpressionsFormProperties {

		/** The operator to apply to the result of conditions. Default and currently only supported value is `AND`. */
		logicalOperator: FormControl<GooglePrivacyDlpV2ExpressionsLogicalOperator | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ExpressionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ExpressionsFormProperties>({
			logicalOperator: new FormControl<GooglePrivacyDlpV2ExpressionsLogicalOperator | null | undefined>(undefined),
		});

	}


	/** A collection of conditions. */
	export interface GooglePrivacyDlpV2Conditions {

		/** A collection of conditions. */
		conditions?: Array<GooglePrivacyDlpV2Condition>;
	}

	/** A collection of conditions. */
	export interface GooglePrivacyDlpV2ConditionsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ConditionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ConditionsFormProperties>({
		});

	}


	/** The field type of `value` and `field` do not need to match to be considered equal, but not all comparisons are possible. EQUAL_TO and NOT_EQUAL_TO attempt to compare even with incompatible types, but all other comparisons are invalid with incompatible types. A `value` of type: - `string` can be compared against all other types - `boolean` can only be compared against other booleans - `integer` can be compared against doubles or a string if the string value can be parsed as an integer. - `double` can be compared against integers or a string if the string can be parsed as a double. - `Timestamp` can be compared against strings in RFC 3339 date string format. - `TimeOfDay` can be compared against timestamps and strings in the format of 'HH:mm:ss'. If we fail to compare do to type mismatch, a warning will be given and the condition will evaluate to false. */
	export interface GooglePrivacyDlpV2Condition {

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;

		/** Required. Operator used to compare the field or infoType to the value. */
		operator?: GooglePrivacyDlpV2ConditionOperator | null;

		/** Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data. */
		value?: GooglePrivacyDlpV2Value;
	}

	/** The field type of `value` and `field` do not need to match to be considered equal, but not all comparisons are possible. EQUAL_TO and NOT_EQUAL_TO attempt to compare even with incompatible types, but all other comparisons are invalid with incompatible types. A `value` of type: - `string` can be compared against all other types - `boolean` can only be compared against other booleans - `integer` can be compared against doubles or a string if the string value can be parsed as an integer. - `double` can be compared against integers or a string if the string can be parsed as a double. - `Timestamp` can be compared against strings in RFC 3339 date string format. - `TimeOfDay` can be compared against timestamps and strings in the format of 'HH:mm:ss'. If we fail to compare do to type mismatch, a warning will be given and the condition will evaluate to false. */
	export interface GooglePrivacyDlpV2ConditionFormProperties {

		/** Required. Operator used to compare the field or infoType to the value. */
		operator: FormControl<GooglePrivacyDlpV2ConditionOperator | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ConditionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ConditionFormProperties>({
			operator: new FormControl<GooglePrivacyDlpV2ConditionOperator | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2ConditionOperator { RELATIONAL_OPERATOR_UNSPECIFIED = 0, EQUAL_TO = 1, NOT_EQUAL_TO = 2, GREATER_THAN = 3, LESS_THAN = 4, GREATER_THAN_OR_EQUALS = 5, LESS_THAN_OR_EQUALS = 6, EXISTS = 7 }

	export enum GooglePrivacyDlpV2ExpressionsLogicalOperator { LOGICAL_OPERATOR_UNSPECIFIED = 0, AND = 1 }


	/** Configuration to suppress records whose suppression conditions evaluate to true. */
	export interface GooglePrivacyDlpV2RecordSuppression {

		/** A condition for determining whether a transformation should be applied to a field. */
		condition?: GooglePrivacyDlpV2RecordCondition;
	}

	/** Configuration to suppress records whose suppression conditions evaluate to true. */
	export interface GooglePrivacyDlpV2RecordSuppressionFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RecordSuppressionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RecordSuppressionFormProperties>({
		});

	}


	/** How to handle transformation errors during de-identification. A transformation error occurs when the requested transformation is incompatible with the data. For example, trying to de-identify an IP address using a `DateShift` transformation would result in a transformation error, since date info cannot be extracted from an IP address. Information about any incompatible transformations, and how they were handled, is returned in the response as part of the `TransformationOverviews`. */
	export interface GooglePrivacyDlpV2TransformationErrorHandling {

		/** Skips the data without modifying it if the requested transformation would cause an error. For example, if a `DateShift` transformation were applied an an IP address, this mode would leave the IP address unchanged in the response. */
		leaveUntransformed?: GooglePrivacyDlpV2LeaveUntransformed;

		/** Throw an error and fail the request when a transformation error occurs. */
		throwError?: GooglePrivacyDlpV2ThrowError;
	}

	/** How to handle transformation errors during de-identification. A transformation error occurs when the requested transformation is incompatible with the data. For example, trying to de-identify an IP address using a `DateShift` transformation would result in a transformation error, since date info cannot be extracted from an IP address. Information about any incompatible transformations, and how they were handled, is returned in the response as part of the `TransformationOverviews`. */
	export interface GooglePrivacyDlpV2TransformationErrorHandlingFormProperties {
	}
	export function CreateGooglePrivacyDlpV2TransformationErrorHandlingFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TransformationErrorHandlingFormProperties>({
		});

	}


	/** Skips the data without modifying it if the requested transformation would cause an error. For example, if a `DateShift` transformation were applied an an IP address, this mode would leave the IP address unchanged in the response. */
	export interface GooglePrivacyDlpV2LeaveUntransformed {
	}

	/** Skips the data without modifying it if the requested transformation would cause an error. For example, if a `DateShift` transformation were applied an an IP address, this mode would leave the IP address unchanged in the response. */
	export interface GooglePrivacyDlpV2LeaveUntransformedFormProperties {
	}
	export function CreateGooglePrivacyDlpV2LeaveUntransformedFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LeaveUntransformedFormProperties>({
		});

	}


	/** Throw an error and fail the request when a transformation error occurs. */
	export interface GooglePrivacyDlpV2ThrowError {
	}

	/** Throw an error and fail the request when a transformation error occurs. */
	export interface GooglePrivacyDlpV2ThrowErrorFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ThrowErrorFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ThrowErrorFormProperties>({
		});

	}


	/** Request message for ActivateJobTrigger. */
	export interface GooglePrivacyDlpV2ActivateJobTriggerRequest {
	}

	/** Request message for ActivateJobTrigger. */
	export interface GooglePrivacyDlpV2ActivateJobTriggerRequestFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ActivateJobTriggerRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ActivateJobTriggerRequestFormProperties>({
		});

	}


	/** Catch-all for all other tables not specified by other filters. Should always be last, except for single-table configurations, which will only have a TableReference target. */
	export interface GooglePrivacyDlpV2AllOtherBigQueryTables {
	}

	/** Catch-all for all other tables not specified by other filters. Should always be last, except for single-table configurations, which will only have a TableReference target. */
	export interface GooglePrivacyDlpV2AllOtherBigQueryTablesFormProperties {
	}
	export function CreateGooglePrivacyDlpV2AllOtherBigQueryTablesFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2AllOtherBigQueryTablesFormProperties>({
		});

	}


	/** Result of a risk analysis operation request. */
	export interface GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails {

		/** Result of the categorical stats computation. */
		categoricalStatsResult?: GooglePrivacyDlpV2CategoricalStatsResult;

		/** Result of the δ-presence computation. Note that these results are an estimation, not exact values. */
		deltaPresenceEstimationResult?: GooglePrivacyDlpV2DeltaPresenceEstimationResult;

		/** Result of the k-anonymity computation. */
		kAnonymityResult?: GooglePrivacyDlpV2KAnonymityResult;

		/** Result of the reidentifiability analysis. Note that these results are an estimation, not exact values. */
		kMapEstimationResult?: GooglePrivacyDlpV2KMapEstimationResult;

		/** Result of the l-diversity computation. */
		lDiversityResult?: GooglePrivacyDlpV2LDiversityResult;

		/** Result of the numerical stats computation. */
		numericalStatsResult?: GooglePrivacyDlpV2NumericalStatsResult;

		/** Risk analysis options. */
		requestedOptions?: GooglePrivacyDlpV2RequestedRiskAnalysisOptions;

		/** Privacy metric to compute for reidentification risk analysis. */
		requestedPrivacyMetric?: GooglePrivacyDlpV2PrivacyMetric;

		/** Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`. */
		requestedSourceTable?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** Result of a risk analysis operation request. */
	export interface GooglePrivacyDlpV2AnalyzeDataSourceRiskDetailsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2AnalyzeDataSourceRiskDetailsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2AnalyzeDataSourceRiskDetailsFormProperties>({
		});

	}


	/** Result of the categorical stats computation. */
	export interface GooglePrivacyDlpV2CategoricalStatsResult {

		/** Histogram of value frequencies in the column. */
		valueFrequencyHistogramBuckets?: Array<GooglePrivacyDlpV2CategoricalStatsHistogramBucket>;
	}

	/** Result of the categorical stats computation. */
	export interface GooglePrivacyDlpV2CategoricalStatsResultFormProperties {
	}
	export function CreateGooglePrivacyDlpV2CategoricalStatsResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CategoricalStatsResultFormProperties>({
		});

	}


	/** Histogram of value frequencies in the column. */
	export interface GooglePrivacyDlpV2CategoricalStatsHistogramBucket {

		/** Total number of values in this bucket. */
		bucketSize?: string | null;

		/** Total number of distinct values in this bucket. */
		bucketValueCount?: string | null;

		/** Sample of value frequencies in this bucket. The total number of values returned per bucket is capped at 20. */
		bucketValues?: Array<GooglePrivacyDlpV2ValueFrequency>;

		/** Lower bound on the value frequency of the values in this bucket. */
		valueFrequencyLowerBound?: string | null;

		/** Upper bound on the value frequency of the values in this bucket. */
		valueFrequencyUpperBound?: string | null;
	}

	/** Histogram of value frequencies in the column. */
	export interface GooglePrivacyDlpV2CategoricalStatsHistogramBucketFormProperties {

		/** Total number of values in this bucket. */
		bucketSize: FormControl<string | null | undefined>,

		/** Total number of distinct values in this bucket. */
		bucketValueCount: FormControl<string | null | undefined>,

		/** Lower bound on the value frequency of the values in this bucket. */
		valueFrequencyLowerBound: FormControl<string | null | undefined>,

		/** Upper bound on the value frequency of the values in this bucket. */
		valueFrequencyUpperBound: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CategoricalStatsHistogramBucketFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CategoricalStatsHistogramBucketFormProperties>({
			bucketSize: new FormControl<string | null | undefined>(undefined),
			bucketValueCount: new FormControl<string | null | undefined>(undefined),
			valueFrequencyLowerBound: new FormControl<string | null | undefined>(undefined),
			valueFrequencyUpperBound: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A value of a field, including its frequency. */
	export interface GooglePrivacyDlpV2ValueFrequency {

		/** How many times the value is contained in the field. */
		count?: string | null;

		/** Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data. */
		value?: GooglePrivacyDlpV2Value;
	}

	/** A value of a field, including its frequency. */
	export interface GooglePrivacyDlpV2ValueFrequencyFormProperties {

		/** How many times the value is contained in the field. */
		count: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ValueFrequencyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ValueFrequencyFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the δ-presence computation. Note that these results are an estimation, not exact values. */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationResult {

		/** The intervals [min_probability, max_probability) do not overlap. If a value doesn't correspond to any such interval, the associated frequency is zero. For example, the following records: {min_probability: 0, max_probability: 0.1, frequency: 17} {min_probability: 0.2, max_probability: 0.3, frequency: 42} {min_probability: 0.3, max_probability: 0.4, frequency: 99} mean that there are no record with an estimated probability in [0.1, 0.2) nor larger or equal to 0.4. */
		deltaPresenceEstimationHistogram?: Array<GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket>;
	}

	/** Result of the δ-presence computation. Note that these results are an estimation, not exact values. */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationResultFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DeltaPresenceEstimationResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeltaPresenceEstimationResultFormProperties>({
		});

	}


	/** A DeltaPresenceEstimationHistogramBucket message with the following values: min_probability: 0.1 max_probability: 0.2 frequency: 42 means that there are 42 records for which δ is in [0.1, 0.2). An important particular case is when min_probability = max_probability = 1: then, every individual who shares this quasi-identifier combination is in the dataset. */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket {

		/** Number of records within these probability bounds. */
		bucketSize?: string | null;

		/** Total number of distinct quasi-identifier tuple values in this bucket. */
		bucketValueCount?: string | null;

		/** Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20. */
		bucketValues?: Array<GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues>;

		/** Always greater than or equal to min_probability. */
		maxProbability?: number | null;

		/** Between 0 and 1. */
		minProbability?: number | null;
	}

	/** A DeltaPresenceEstimationHistogramBucket message with the following values: min_probability: 0.1 max_probability: 0.2 frequency: 42 means that there are 42 records for which δ is in [0.1, 0.2). An important particular case is when min_probability = max_probability = 1: then, every individual who shares this quasi-identifier combination is in the dataset. */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucketFormProperties {

		/** Number of records within these probability bounds. */
		bucketSize: FormControl<string | null | undefined>,

		/** Total number of distinct quasi-identifier tuple values in this bucket. */
		bucketValueCount: FormControl<string | null | undefined>,

		/** Always greater than or equal to min_probability. */
		maxProbability: FormControl<number | null | undefined>,

		/** Between 0 and 1. */
		minProbability: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucketFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucketFormProperties>({
			bucketSize: new FormControl<string | null | undefined>(undefined),
			bucketValueCount: new FormControl<string | null | undefined>(undefined),
			maxProbability: new FormControl<number | null | undefined>(undefined),
			minProbability: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A tuple of values for the quasi-identifier columns. */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues {

		/** The estimated probability that a given individual sharing these quasi-identifier values is in the dataset. This value, typically called δ, is the ratio between the number of records in the dataset with these quasi-identifier values, and the total number of individuals (inside *and* outside the dataset) with these quasi-identifier values. For example, if there are 15 individuals in the dataset who share the same quasi-identifier values, and an estimated 100 people in the entire population with these values, then δ is 0.15. */
		estimatedProbability?: number | null;

		/** The quasi-identifier values. */
		quasiIdsValues?: Array<GooglePrivacyDlpV2Value>;
	}

	/** A tuple of values for the quasi-identifier columns. */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValuesFormProperties {

		/** The estimated probability that a given individual sharing these quasi-identifier values is in the dataset. This value, typically called δ, is the ratio between the number of records in the dataset with these quasi-identifier values, and the total number of individuals (inside *and* outside the dataset) with these quasi-identifier values. For example, if there are 15 individuals in the dataset who share the same quasi-identifier values, and an estimated 100 people in the entire population with these values, then δ is 0.15. */
		estimatedProbability: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValuesFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValuesFormProperties>({
			estimatedProbability: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Result of the k-anonymity computation. */
	export interface GooglePrivacyDlpV2KAnonymityResult {

		/** Histogram of k-anonymity equivalence classes. */
		equivalenceClassHistogramBuckets?: Array<GooglePrivacyDlpV2KAnonymityHistogramBucket>;
	}

	/** Result of the k-anonymity computation. */
	export interface GooglePrivacyDlpV2KAnonymityResultFormProperties {
	}
	export function CreateGooglePrivacyDlpV2KAnonymityResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KAnonymityResultFormProperties>({
		});

	}


	/** Histogram of k-anonymity equivalence classes. */
	export interface GooglePrivacyDlpV2KAnonymityHistogramBucket {

		/** Total number of equivalence classes in this bucket. */
		bucketSize?: string | null;

		/** Total number of distinct equivalence classes in this bucket. */
		bucketValueCount?: string | null;

		/** Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20. */
		bucketValues?: Array<GooglePrivacyDlpV2KAnonymityEquivalenceClass>;

		/** Lower bound on the size of the equivalence classes in this bucket. */
		equivalenceClassSizeLowerBound?: string | null;

		/** Upper bound on the size of the equivalence classes in this bucket. */
		equivalenceClassSizeUpperBound?: string | null;
	}

	/** Histogram of k-anonymity equivalence classes. */
	export interface GooglePrivacyDlpV2KAnonymityHistogramBucketFormProperties {

		/** Total number of equivalence classes in this bucket. */
		bucketSize: FormControl<string | null | undefined>,

		/** Total number of distinct equivalence classes in this bucket. */
		bucketValueCount: FormControl<string | null | undefined>,

		/** Lower bound on the size of the equivalence classes in this bucket. */
		equivalenceClassSizeLowerBound: FormControl<string | null | undefined>,

		/** Upper bound on the size of the equivalence classes in this bucket. */
		equivalenceClassSizeUpperBound: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2KAnonymityHistogramBucketFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KAnonymityHistogramBucketFormProperties>({
			bucketSize: new FormControl<string | null | undefined>(undefined),
			bucketValueCount: new FormControl<string | null | undefined>(undefined),
			equivalenceClassSizeLowerBound: new FormControl<string | null | undefined>(undefined),
			equivalenceClassSizeUpperBound: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The set of columns' values that share the same ldiversity value */
	export interface GooglePrivacyDlpV2KAnonymityEquivalenceClass {

		/** Size of the equivalence class, for example number of rows with the above set of values. */
		equivalenceClassSize?: string | null;

		/** Set of values defining the equivalence class. One value per quasi-identifier column in the original KAnonymity metric message. The order is always the same as the original request. */
		quasiIdsValues?: Array<GooglePrivacyDlpV2Value>;
	}

	/** The set of columns' values that share the same ldiversity value */
	export interface GooglePrivacyDlpV2KAnonymityEquivalenceClassFormProperties {

		/** Size of the equivalence class, for example number of rows with the above set of values. */
		equivalenceClassSize: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2KAnonymityEquivalenceClassFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KAnonymityEquivalenceClassFormProperties>({
			equivalenceClassSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the reidentifiability analysis. Note that these results are an estimation, not exact values. */
	export interface GooglePrivacyDlpV2KMapEstimationResult {

		/** The intervals [min_anonymity, max_anonymity] do not overlap. If a value doesn't correspond to any such interval, the associated frequency is zero. For example, the following records: {min_anonymity: 1, max_anonymity: 1, frequency: 17} {min_anonymity: 2, max_anonymity: 3, frequency: 42} {min_anonymity: 5, max_anonymity: 10, frequency: 99} mean that there are no record with an estimated anonymity of 4, 5, or larger than 10. */
		kMapEstimationHistogram?: Array<GooglePrivacyDlpV2KMapEstimationHistogramBucket>;
	}

	/** Result of the reidentifiability analysis. Note that these results are an estimation, not exact values. */
	export interface GooglePrivacyDlpV2KMapEstimationResultFormProperties {
	}
	export function CreateGooglePrivacyDlpV2KMapEstimationResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KMapEstimationResultFormProperties>({
		});

	}


	/** A KMapEstimationHistogramBucket message with the following values: min_anonymity: 3 max_anonymity: 5 frequency: 42 means that there are 42 records whose quasi-identifier values correspond to 3, 4 or 5 people in the overlying population. An important particular case is when min_anonymity = max_anonymity = 1: the frequency field then corresponds to the number of uniquely identifiable records. */
	export interface GooglePrivacyDlpV2KMapEstimationHistogramBucket {

		/** Number of records within these anonymity bounds. */
		bucketSize?: string | null;

		/** Total number of distinct quasi-identifier tuple values in this bucket. */
		bucketValueCount?: string | null;

		/** Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20. */
		bucketValues?: Array<GooglePrivacyDlpV2KMapEstimationQuasiIdValues>;

		/** Always greater than or equal to min_anonymity. */
		maxAnonymity?: string | null;

		/** Always positive. */
		minAnonymity?: string | null;
	}

	/** A KMapEstimationHistogramBucket message with the following values: min_anonymity: 3 max_anonymity: 5 frequency: 42 means that there are 42 records whose quasi-identifier values correspond to 3, 4 or 5 people in the overlying population. An important particular case is when min_anonymity = max_anonymity = 1: the frequency field then corresponds to the number of uniquely identifiable records. */
	export interface GooglePrivacyDlpV2KMapEstimationHistogramBucketFormProperties {

		/** Number of records within these anonymity bounds. */
		bucketSize: FormControl<string | null | undefined>,

		/** Total number of distinct quasi-identifier tuple values in this bucket. */
		bucketValueCount: FormControl<string | null | undefined>,

		/** Always greater than or equal to min_anonymity. */
		maxAnonymity: FormControl<string | null | undefined>,

		/** Always positive. */
		minAnonymity: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2KMapEstimationHistogramBucketFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KMapEstimationHistogramBucketFormProperties>({
			bucketSize: new FormControl<string | null | undefined>(undefined),
			bucketValueCount: new FormControl<string | null | undefined>(undefined),
			maxAnonymity: new FormControl<string | null | undefined>(undefined),
			minAnonymity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A tuple of values for the quasi-identifier columns. */
	export interface GooglePrivacyDlpV2KMapEstimationQuasiIdValues {

		/** The estimated anonymity for these quasi-identifier values. */
		estimatedAnonymity?: string | null;

		/** The quasi-identifier values. */
		quasiIdsValues?: Array<GooglePrivacyDlpV2Value>;
	}

	/** A tuple of values for the quasi-identifier columns. */
	export interface GooglePrivacyDlpV2KMapEstimationQuasiIdValuesFormProperties {

		/** The estimated anonymity for these quasi-identifier values. */
		estimatedAnonymity: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2KMapEstimationQuasiIdValuesFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KMapEstimationQuasiIdValuesFormProperties>({
			estimatedAnonymity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the l-diversity computation. */
	export interface GooglePrivacyDlpV2LDiversityResult {

		/** Histogram of l-diversity equivalence class sensitive value frequencies. */
		sensitiveValueFrequencyHistogramBuckets?: Array<GooglePrivacyDlpV2LDiversityHistogramBucket>;
	}

	/** Result of the l-diversity computation. */
	export interface GooglePrivacyDlpV2LDiversityResultFormProperties {
	}
	export function CreateGooglePrivacyDlpV2LDiversityResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LDiversityResultFormProperties>({
		});

	}


	/** Histogram of l-diversity equivalence class sensitive value frequencies. */
	export interface GooglePrivacyDlpV2LDiversityHistogramBucket {

		/** Total number of equivalence classes in this bucket. */
		bucketSize?: string | null;

		/** Total number of distinct equivalence classes in this bucket. */
		bucketValueCount?: string | null;

		/** Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20. */
		bucketValues?: Array<GooglePrivacyDlpV2LDiversityEquivalenceClass>;

		/** Lower bound on the sensitive value frequencies of the equivalence classes in this bucket. */
		sensitiveValueFrequencyLowerBound?: string | null;

		/** Upper bound on the sensitive value frequencies of the equivalence classes in this bucket. */
		sensitiveValueFrequencyUpperBound?: string | null;
	}

	/** Histogram of l-diversity equivalence class sensitive value frequencies. */
	export interface GooglePrivacyDlpV2LDiversityHistogramBucketFormProperties {

		/** Total number of equivalence classes in this bucket. */
		bucketSize: FormControl<string | null | undefined>,

		/** Total number of distinct equivalence classes in this bucket. */
		bucketValueCount: FormControl<string | null | undefined>,

		/** Lower bound on the sensitive value frequencies of the equivalence classes in this bucket. */
		sensitiveValueFrequencyLowerBound: FormControl<string | null | undefined>,

		/** Upper bound on the sensitive value frequencies of the equivalence classes in this bucket. */
		sensitiveValueFrequencyUpperBound: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2LDiversityHistogramBucketFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LDiversityHistogramBucketFormProperties>({
			bucketSize: new FormControl<string | null | undefined>(undefined),
			bucketValueCount: new FormControl<string | null | undefined>(undefined),
			sensitiveValueFrequencyLowerBound: new FormControl<string | null | undefined>(undefined),
			sensitiveValueFrequencyUpperBound: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The set of columns' values that share the same ldiversity value. */
	export interface GooglePrivacyDlpV2LDiversityEquivalenceClass {

		/** Size of the k-anonymity equivalence class. */
		equivalenceClassSize?: string | null;

		/** Number of distinct sensitive values in this equivalence class. */
		numDistinctSensitiveValues?: string | null;

		/** Quasi-identifier values defining the k-anonymity equivalence class. The order is always the same as the original request. */
		quasiIdsValues?: Array<GooglePrivacyDlpV2Value>;

		/** Estimated frequencies of top sensitive values. */
		topSensitiveValues?: Array<GooglePrivacyDlpV2ValueFrequency>;
	}

	/** The set of columns' values that share the same ldiversity value. */
	export interface GooglePrivacyDlpV2LDiversityEquivalenceClassFormProperties {

		/** Size of the k-anonymity equivalence class. */
		equivalenceClassSize: FormControl<string | null | undefined>,

		/** Number of distinct sensitive values in this equivalence class. */
		numDistinctSensitiveValues: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2LDiversityEquivalenceClassFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LDiversityEquivalenceClassFormProperties>({
			equivalenceClassSize: new FormControl<string | null | undefined>(undefined),
			numDistinctSensitiveValues: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the numerical stats computation. */
	export interface GooglePrivacyDlpV2NumericalStatsResult {

		/** Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data. */
		maxValue?: GooglePrivacyDlpV2Value;

		/** Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data. */
		minValue?: GooglePrivacyDlpV2Value;

		/** List of 99 values that partition the set of field values into 100 equal sized buckets. */
		quantileValues?: Array<GooglePrivacyDlpV2Value>;
	}

	/** Result of the numerical stats computation. */
	export interface GooglePrivacyDlpV2NumericalStatsResultFormProperties {
	}
	export function CreateGooglePrivacyDlpV2NumericalStatsResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2NumericalStatsResultFormProperties>({
		});

	}


	/** Risk analysis options. */
	export interface GooglePrivacyDlpV2RequestedRiskAnalysisOptions {

		/** Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more. */
		jobConfig?: GooglePrivacyDlpV2RiskAnalysisJobConfig;
	}

	/** Risk analysis options. */
	export interface GooglePrivacyDlpV2RequestedRiskAnalysisOptionsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RequestedRiskAnalysisOptionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RequestedRiskAnalysisOptionsFormProperties>({
		});

	}


	/** Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more. */
	export interface GooglePrivacyDlpV2RiskAnalysisJobConfig {

		/** Actions to execute at the completion of the job. Are executed in the order provided. */
		actions?: Array<GooglePrivacyDlpV2Action>;

		/** Privacy metric to compute for reidentification risk analysis. */
		privacyMetric?: GooglePrivacyDlpV2PrivacyMetric;

		/** Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`. */
		sourceTable?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more. */
	export interface GooglePrivacyDlpV2RiskAnalysisJobConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RiskAnalysisJobConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RiskAnalysisJobConfigFormProperties>({
		});

	}


	/** Privacy metric to compute for reidentification risk analysis. */
	export interface GooglePrivacyDlpV2PrivacyMetric {

		/** Compute numerical stats over an individual column, including number of distinct values and value count distribution. */
		categoricalStatsConfig?: GooglePrivacyDlpV2CategoricalStatsConfig;

		/** δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead. */
		deltaPresenceEstimationConfig?: GooglePrivacyDlpV2DeltaPresenceEstimationConfig;

		/** k-anonymity metric, used for analysis of reidentification risk. */
		kAnonymityConfig?: GooglePrivacyDlpV2KAnonymityConfig;

		/** Reidentifiability metric. This corresponds to a risk model similar to what is called "journalist risk" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset. */
		kMapEstimationConfig?: GooglePrivacyDlpV2KMapEstimationConfig;

		/** l-diversity metric, used for analysis of reidentification risk. */
		lDiversityConfig?: GooglePrivacyDlpV2LDiversityConfig;

		/** Compute numerical stats over an individual column, including min, max, and quantiles. */
		numericalStatsConfig?: GooglePrivacyDlpV2NumericalStatsConfig;
	}

	/** Privacy metric to compute for reidentification risk analysis. */
	export interface GooglePrivacyDlpV2PrivacyMetricFormProperties {
	}
	export function CreateGooglePrivacyDlpV2PrivacyMetricFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PrivacyMetricFormProperties>({
		});

	}


	/** Compute numerical stats over an individual column, including number of distinct values and value count distribution. */
	export interface GooglePrivacyDlpV2CategoricalStatsConfig {

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;
	}

	/** Compute numerical stats over an individual column, including number of distinct values and value count distribution. */
	export interface GooglePrivacyDlpV2CategoricalStatsConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2CategoricalStatsConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CategoricalStatsConfigFormProperties>({
		});

	}


	/** δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead. */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationConfig {

		/** Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers field must appear in exactly one field of one auxiliary table. */
		auxiliaryTables?: Array<GooglePrivacyDlpV2StatisticalTable>;

		/** Required. Fields considered to be quasi-identifiers. No two fields can have the same tag. */
		quasiIds?: Array<GooglePrivacyDlpV2QuasiId>;

		/** ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code. */
		regionCode?: string | null;
	}

	/** δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead. */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationConfigFormProperties {

		/** ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DeltaPresenceEstimationConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeltaPresenceEstimationConfigFormProperties>({
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An auxiliary table containing statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable). */
	export interface GooglePrivacyDlpV2StatisticalTable {

		/** Required. Quasi-identifier columns. */
		quasiIds?: Array<GooglePrivacyDlpV2QuasiIdentifierField>;

		/** General identifier of a data field in a storage service. */
		relativeFrequency?: GooglePrivacyDlpV2FieldId;

		/** Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`. */
		table?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** An auxiliary table containing statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable). */
	export interface GooglePrivacyDlpV2StatisticalTableFormProperties {
	}
	export function CreateGooglePrivacyDlpV2StatisticalTableFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StatisticalTableFormProperties>({
		});

	}


	/** A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model. */
	export interface GooglePrivacyDlpV2QuasiIdentifierField {

		/** A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below). */
		customTag?: string | null;

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;
	}

	/** A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model. */
	export interface GooglePrivacyDlpV2QuasiIdentifierFieldFormProperties {

		/** A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below). */
		customTag: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2QuasiIdentifierFieldFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2QuasiIdentifierFieldFormProperties>({
			customTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A column with a semantic tag attached. */
	export interface GooglePrivacyDlpV2QuasiId {

		/** A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below). */
		customTag?: string | null;

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;

		/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
		inferred?: GoogleProtobufEmpty;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;
	}

	/** A column with a semantic tag attached. */
	export interface GooglePrivacyDlpV2QuasiIdFormProperties {

		/** A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below). */
		customTag: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2QuasiIdFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2QuasiIdFormProperties>({
			customTag: new FormControl<string | null | undefined>(undefined),
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


	/** k-anonymity metric, used for analysis of reidentification risk. */
	export interface GooglePrivacyDlpV2KAnonymityConfig {

		/** An entity in a dataset is a field or set of fields that correspond to a single person. For example, in medical records the `EntityId` might be a patient identifier, or for financial records it might be an account identifier. This message is used when generalizations or analysis must take into account that multiple rows correspond to the same entity. */
		entityId?: GooglePrivacyDlpV2EntityId;

		/** Set of fields to compute k-anonymity over. When multiple fields are specified, they are considered a single composite key. Structs and repeated data types are not supported; however, nested fields are supported so long as they are not structs themselves or nested within a repeated field. */
		quasiIds?: Array<GooglePrivacyDlpV2FieldId>;
	}

	/** k-anonymity metric, used for analysis of reidentification risk. */
	export interface GooglePrivacyDlpV2KAnonymityConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2KAnonymityConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KAnonymityConfigFormProperties>({
		});

	}


	/** An entity in a dataset is a field or set of fields that correspond to a single person. For example, in medical records the `EntityId` might be a patient identifier, or for financial records it might be an account identifier. This message is used when generalizations or analysis must take into account that multiple rows correspond to the same entity. */
	export interface GooglePrivacyDlpV2EntityId {

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;
	}

	/** An entity in a dataset is a field or set of fields that correspond to a single person. For example, in medical records the `EntityId` might be a patient identifier, or for financial records it might be an account identifier. This message is used when generalizations or analysis must take into account that multiple rows correspond to the same entity. */
	export interface GooglePrivacyDlpV2EntityIdFormProperties {
	}
	export function CreateGooglePrivacyDlpV2EntityIdFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2EntityIdFormProperties>({
		});

	}


	/** Reidentifiability metric. This corresponds to a risk model similar to what is called "journalist risk" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset. */
	export interface GooglePrivacyDlpV2KMapEstimationConfig {

		/** Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers column must appear in exactly one column of one auxiliary table. */
		auxiliaryTables?: Array<GooglePrivacyDlpV2AuxiliaryTable>;

		/** Required. Fields considered to be quasi-identifiers. No two columns can have the same tag. */
		quasiIds?: Array<GooglePrivacyDlpV2TaggedField>;

		/** ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code. */
		regionCode?: string | null;
	}

	/** Reidentifiability metric. This corresponds to a risk model similar to what is called "journalist risk" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset. */
	export interface GooglePrivacyDlpV2KMapEstimationConfigFormProperties {

		/** ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2KMapEstimationConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KMapEstimationConfigFormProperties>({
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An auxiliary table contains statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable). */
	export interface GooglePrivacyDlpV2AuxiliaryTable {

		/** Required. Quasi-identifier columns. */
		quasiIds?: Array<GooglePrivacyDlpV2QuasiIdField>;

		/** General identifier of a data field in a storage service. */
		relativeFrequency?: GooglePrivacyDlpV2FieldId;

		/** Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`. */
		table?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** An auxiliary table contains statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable). */
	export interface GooglePrivacyDlpV2AuxiliaryTableFormProperties {
	}
	export function CreateGooglePrivacyDlpV2AuxiliaryTableFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2AuxiliaryTableFormProperties>({
		});

	}


	/** A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model. */
	export interface GooglePrivacyDlpV2QuasiIdField {

		/** A auxiliary field. */
		customTag?: string | null;

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;
	}

	/** A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model. */
	export interface GooglePrivacyDlpV2QuasiIdFieldFormProperties {

		/** A auxiliary field. */
		customTag: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2QuasiIdFieldFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2QuasiIdFieldFormProperties>({
			customTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A column with a semantic tag attached. */
	export interface GooglePrivacyDlpV2TaggedField {

		/** A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below). */
		customTag?: string | null;

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;

		/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
		inferred?: GoogleProtobufEmpty;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;
	}

	/** A column with a semantic tag attached. */
	export interface GooglePrivacyDlpV2TaggedFieldFormProperties {

		/** A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below). */
		customTag: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TaggedFieldFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TaggedFieldFormProperties>({
			customTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** l-diversity metric, used for analysis of reidentification risk. */
	export interface GooglePrivacyDlpV2LDiversityConfig {

		/** Set of quasi-identifiers indicating how equivalence classes are defined for the l-diversity computation. When multiple fields are specified, they are considered a single composite key. */
		quasiIds?: Array<GooglePrivacyDlpV2FieldId>;

		/** General identifier of a data field in a storage service. */
		sensitiveAttribute?: GooglePrivacyDlpV2FieldId;
	}

	/** l-diversity metric, used for analysis of reidentification risk. */
	export interface GooglePrivacyDlpV2LDiversityConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2LDiversityConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LDiversityConfigFormProperties>({
		});

	}


	/** Compute numerical stats over an individual column, including min, max, and quantiles. */
	export interface GooglePrivacyDlpV2NumericalStatsConfig {

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;
	}

	/** Compute numerical stats over an individual column, including min, max, and quantiles. */
	export interface GooglePrivacyDlpV2NumericalStatsConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2NumericalStatsConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2NumericalStatsConfigFormProperties>({
		});

	}


	/** Target used to match against for discovery with BigQuery tables */
	export interface GooglePrivacyDlpV2BigQueryDiscoveryTarget {

		/** What must take place for a profile to be updated and how frequently it should occur. New tables are scanned as quickly as possible depending on system capacity. */
		cadence?: GooglePrivacyDlpV2DiscoveryGenerationCadence;

		/** Requirements that must be true before a table is scanned in discovery for the first time. There is an AND relationship between the top-level attributes. Additionally, minimum conditions with an OR relationship that must be met before Cloud DLP scans a table can be set (like a minimum row count or a minimum table age). */
		conditions?: GooglePrivacyDlpV2DiscoveryBigQueryConditions;

		/** Do not profile the tables. */
		disabled?: GooglePrivacyDlpV2Disabled;

		/** Determines what tables will have profiles generated within an organization or project. Includes the ability to filter by regular expression patterns on project ID, dataset ID, and table ID. */
		filter?: GooglePrivacyDlpV2DiscoveryBigQueryFilter;
	}

	/** Target used to match against for discovery with BigQuery tables */
	export interface GooglePrivacyDlpV2BigQueryDiscoveryTargetFormProperties {
	}
	export function CreateGooglePrivacyDlpV2BigQueryDiscoveryTargetFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BigQueryDiscoveryTargetFormProperties>({
		});

	}


	/** What must take place for a profile to be updated and how frequently it should occur. New tables are scanned as quickly as possible depending on system capacity. */
	export interface GooglePrivacyDlpV2DiscoveryGenerationCadence {

		/** The cadence at which to update data profiles when a schema is modified. */
		schemaModifiedCadence?: GooglePrivacyDlpV2DiscoverySchemaModifiedCadence;

		/** The cadence at which to update data profiles when a table is modified. */
		tableModifiedCadence?: GooglePrivacyDlpV2DiscoveryTableModifiedCadence;
	}

	/** What must take place for a profile to be updated and how frequently it should occur. New tables are scanned as quickly as possible depending on system capacity. */
	export interface GooglePrivacyDlpV2DiscoveryGenerationCadenceFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DiscoveryGenerationCadenceFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DiscoveryGenerationCadenceFormProperties>({
		});

	}


	/** The cadence at which to update data profiles when a schema is modified. */
	export interface GooglePrivacyDlpV2DiscoverySchemaModifiedCadence {

		/** How frequently profiles may be updated when schemas are modified. Defaults to monthly. */
		frequency?: GooglePrivacyDlpV2DiscoverySchemaModifiedCadenceFrequency | null;

		/** The type of events to consider when deciding if the table's schema has been modified and should have the profile updated. Defaults to NEW_COLUMNS. */
		types?: Array<string>;
	}

	/** The cadence at which to update data profiles when a schema is modified. */
	export interface GooglePrivacyDlpV2DiscoverySchemaModifiedCadenceFormProperties {

		/** How frequently profiles may be updated when schemas are modified. Defaults to monthly. */
		frequency: FormControl<GooglePrivacyDlpV2DiscoverySchemaModifiedCadenceFrequency | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DiscoverySchemaModifiedCadenceFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DiscoverySchemaModifiedCadenceFormProperties>({
			frequency: new FormControl<GooglePrivacyDlpV2DiscoverySchemaModifiedCadenceFrequency | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2DiscoverySchemaModifiedCadenceFrequency { UPDATE_FREQUENCY_UNSPECIFIED = 0, UPDATE_FREQUENCY_NEVER = 1, UPDATE_FREQUENCY_DAILY = 2, UPDATE_FREQUENCY_MONTHLY = 3 }


	/** The cadence at which to update data profiles when a table is modified. */
	export interface GooglePrivacyDlpV2DiscoveryTableModifiedCadence {

		/** How frequently data profiles can be updated when tables are modified. Defaults to never. */
		frequency?: GooglePrivacyDlpV2DiscoverySchemaModifiedCadenceFrequency | null;

		/** The type of events to consider when deciding if the table has been modified and should have the profile updated. Defaults to MODIFIED_TIMESTAMP. */
		types?: Array<string>;
	}

	/** The cadence at which to update data profiles when a table is modified. */
	export interface GooglePrivacyDlpV2DiscoveryTableModifiedCadenceFormProperties {

		/** How frequently data profiles can be updated when tables are modified. Defaults to never. */
		frequency: FormControl<GooglePrivacyDlpV2DiscoverySchemaModifiedCadenceFrequency | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DiscoveryTableModifiedCadenceFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DiscoveryTableModifiedCadenceFormProperties>({
			frequency: new FormControl<GooglePrivacyDlpV2DiscoverySchemaModifiedCadenceFrequency | null | undefined>(undefined),
		});

	}


	/** Requirements that must be true before a table is scanned in discovery for the first time. There is an AND relationship between the top-level attributes. Additionally, minimum conditions with an OR relationship that must be met before Cloud DLP scans a table can be set (like a minimum row count or a minimum table age). */
	export interface GooglePrivacyDlpV2DiscoveryBigQueryConditions {

		/** BigQuery table must have been created after this date. Used to avoid backfilling. */
		createdAfter?: string | null;

		/** There is an OR relationship between these attributes. They are used to determine if a table should be scanned or not in Discovery. */
		orConditions?: GooglePrivacyDlpV2OrConditions;

		/** Restrict discovery to categories of table types. */
		typeCollection?: GooglePrivacyDlpV2DiscoveryBigQueryConditionsTypeCollection | null;

		/** The types of BigQuery tables supported by Cloud DLP. */
		types?: GooglePrivacyDlpV2BigQueryTableTypes;
	}

	/** Requirements that must be true before a table is scanned in discovery for the first time. There is an AND relationship between the top-level attributes. Additionally, minimum conditions with an OR relationship that must be met before Cloud DLP scans a table can be set (like a minimum row count or a minimum table age). */
	export interface GooglePrivacyDlpV2DiscoveryBigQueryConditionsFormProperties {

		/** BigQuery table must have been created after this date. Used to avoid backfilling. */
		createdAfter: FormControl<string | null | undefined>,

		/** Restrict discovery to categories of table types. */
		typeCollection: FormControl<GooglePrivacyDlpV2DiscoveryBigQueryConditionsTypeCollection | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DiscoveryBigQueryConditionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DiscoveryBigQueryConditionsFormProperties>({
			createdAfter: new FormControl<string | null | undefined>(undefined),
			typeCollection: new FormControl<GooglePrivacyDlpV2DiscoveryBigQueryConditionsTypeCollection | null | undefined>(undefined),
		});

	}


	/** There is an OR relationship between these attributes. They are used to determine if a table should be scanned or not in Discovery. */
	export interface GooglePrivacyDlpV2OrConditions {

		/** Minimum age a table must have before Cloud DLP can profile it. Value must be 1 hour or greater. */
		minAge?: string | null;

		/** Minimum number of rows that should be present before Cloud DLP profiles a table */
		minRowCount?: number | null;
	}

	/** There is an OR relationship between these attributes. They are used to determine if a table should be scanned or not in Discovery. */
	export interface GooglePrivacyDlpV2OrConditionsFormProperties {

		/** Minimum age a table must have before Cloud DLP can profile it. Value must be 1 hour or greater. */
		minAge: FormControl<string | null | undefined>,

		/** Minimum number of rows that should be present before Cloud DLP profiles a table */
		minRowCount: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2OrConditionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2OrConditionsFormProperties>({
			minAge: new FormControl<string | null | undefined>(undefined),
			minRowCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2DiscoveryBigQueryConditionsTypeCollection { BIG_QUERY_COLLECTION_UNSPECIFIED = 0, BIG_QUERY_COLLECTION_ALL_TYPES = 1, BIG_QUERY_COLLECTION_ONLY_SUPPORTED_TYPES = 2 }


	/** The types of BigQuery tables supported by Cloud DLP. */
	export interface GooglePrivacyDlpV2BigQueryTableTypes {

		/** A set of BigQuery table types. */
		types?: Array<string>;
	}

	/** The types of BigQuery tables supported by Cloud DLP. */
	export interface GooglePrivacyDlpV2BigQueryTableTypesFormProperties {
	}
	export function CreateGooglePrivacyDlpV2BigQueryTableTypesFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BigQueryTableTypesFormProperties>({
		});

	}


	/** Do not profile the tables. */
	export interface GooglePrivacyDlpV2Disabled {
	}

	/** Do not profile the tables. */
	export interface GooglePrivacyDlpV2DisabledFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DisabledFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DisabledFormProperties>({
		});

	}


	/** Determines what tables will have profiles generated within an organization or project. Includes the ability to filter by regular expression patterns on project ID, dataset ID, and table ID. */
	export interface GooglePrivacyDlpV2DiscoveryBigQueryFilter {

		/** Catch-all for all other tables not specified by other filters. Should always be last, except for single-table configurations, which will only have a TableReference target. */
		otherTables?: GooglePrivacyDlpV2AllOtherBigQueryTables;

		/** Specifies a collection of BigQuery tables. Used for Discovery. */
		tables?: GooglePrivacyDlpV2BigQueryTableCollection;
	}

	/** Determines what tables will have profiles generated within an organization or project. Includes the ability to filter by regular expression patterns on project ID, dataset ID, and table ID. */
	export interface GooglePrivacyDlpV2DiscoveryBigQueryFilterFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DiscoveryBigQueryFilterFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DiscoveryBigQueryFilterFormProperties>({
		});

	}


	/** Specifies a collection of BigQuery tables. Used for Discovery. */
	export interface GooglePrivacyDlpV2BigQueryTableCollection {

		/** A collection of regular expressions to determine what tables to match against. */
		includeRegexes?: GooglePrivacyDlpV2BigQueryRegexes;
	}

	/** Specifies a collection of BigQuery tables. Used for Discovery. */
	export interface GooglePrivacyDlpV2BigQueryTableCollectionFormProperties {
	}
	export function CreateGooglePrivacyDlpV2BigQueryTableCollectionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BigQueryTableCollectionFormProperties>({
		});

	}


	/** A collection of regular expressions to determine what tables to match against. */
	export interface GooglePrivacyDlpV2BigQueryRegexes {

		/** A single BigQuery regular expression pattern to match against one or more tables, datasets, or projects that contain BigQuery tables. */
		patterns?: Array<GooglePrivacyDlpV2BigQueryRegex>;
	}

	/** A collection of regular expressions to determine what tables to match against. */
	export interface GooglePrivacyDlpV2BigQueryRegexesFormProperties {
	}
	export function CreateGooglePrivacyDlpV2BigQueryRegexesFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BigQueryRegexesFormProperties>({
		});

	}


	/** A pattern to match against one or more tables, datasets, or projects that contain BigQuery tables. At least one pattern must be specified. Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub. */
	export interface GooglePrivacyDlpV2BigQueryRegex {

		/** If unset, this property matches all datasets. */
		datasetIdRegex?: string | null;

		/** For organizations, if unset, will match all projects. Has no effect for data profile configurations created within a project. */
		projectIdRegex?: string | null;

		/** If unset, this property matches all tables. */
		tableIdRegex?: string | null;
	}

	/** A pattern to match against one or more tables, datasets, or projects that contain BigQuery tables. At least one pattern must be specified. Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub. */
	export interface GooglePrivacyDlpV2BigQueryRegexFormProperties {

		/** If unset, this property matches all datasets. */
		datasetIdRegex: FormControl<string | null | undefined>,

		/** For organizations, if unset, will match all projects. Has no effect for data profile configurations created within a project. */
		projectIdRegex: FormControl<string | null | undefined>,

		/** If unset, this property matches all tables. */
		tableIdRegex: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2BigQueryRegexFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BigQueryRegexFormProperties>({
			datasetIdRegex: new FormControl<string | null | undefined>(undefined),
			projectIdRegex: new FormControl<string | null | undefined>(undefined),
			tableIdRegex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message defining a field of a BigQuery table. */
	export interface GooglePrivacyDlpV2BigQueryField {

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;

		/** Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`. */
		table?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** Message defining a field of a BigQuery table. */
	export interface GooglePrivacyDlpV2BigQueryFieldFormProperties {
	}
	export function CreateGooglePrivacyDlpV2BigQueryFieldFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BigQueryFieldFormProperties>({
		});

	}


	/** Row key for identifying a record in BigQuery table. */
	export interface GooglePrivacyDlpV2BigQueryKey {

		/** Row number inferred at the time the table was scanned. This value is nondeterministic, cannot be queried, and may be null for inspection jobs. To locate findings within a table, specify `inspect_job.storage_config.big_query_options.identifying_fields` in `CreateDlpJobRequest`. */
		rowNumber?: string | null;

		/** Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`. */
		tableReference?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** Row key for identifying a record in BigQuery table. */
	export interface GooglePrivacyDlpV2BigQueryKeyFormProperties {

		/** Row number inferred at the time the table was scanned. This value is nondeterministic, cannot be queried, and may be null for inspection jobs. To locate findings within a table, specify `inspect_job.storage_config.big_query_options.identifying_fields` in `CreateDlpJobRequest`. */
		rowNumber: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2BigQueryKeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BigQueryKeyFormProperties>({
			rowNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options defining BigQuery table and row identifiers. */
	export interface GooglePrivacyDlpV2BigQueryOptions {

		/** References to fields excluded from scanning. This allows you to skip inspection of entire columns which you know have no findings. When inspecting a table, we recommend that you inspect all columns. Otherwise, findings might be affected because hints from excluded columns will not be used. */
		excludedFields?: Array<GooglePrivacyDlpV2FieldId>;

		/** Table fields that may uniquely identify a row within the table. When `actions.saveFindings.outputConfig.table` is specified, the values of columns specified here are available in the output table under `location.content_locations.record_location.record_key.id_values`. Nested fields such as `person.birthdate.year` are allowed. */
		identifyingFields?: Array<GooglePrivacyDlpV2FieldId>;

		/** Limit scanning only to these fields. When inspecting a table, we recommend that you inspect all columns. Otherwise, findings might be affected because hints from excluded columns will not be used. */
		includedFields?: Array<GooglePrivacyDlpV2FieldId>;

		/** Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted. If not set, or if set to 0, all rows will be scanned. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig. */
		rowsLimit?: string | null;

		/** Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig. Caution: A [known issue](https://cloud.google.com/dlp/docs/known-issues#bq-sampling) is causing the `rowsLimitPercent` field to behave unexpectedly. We recommend using `rowsLimit` instead. */
		rowsLimitPercent?: number | null;
		sampleMethod?: GooglePrivacyDlpV2BigQueryOptionsSampleMethod | null;

		/** Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`. */
		tableReference?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** Options defining BigQuery table and row identifiers. */
	export interface GooglePrivacyDlpV2BigQueryOptionsFormProperties {

		/** Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted. If not set, or if set to 0, all rows will be scanned. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig. */
		rowsLimit: FormControl<string | null | undefined>,

		/** Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig. Caution: A [known issue](https://cloud.google.com/dlp/docs/known-issues#bq-sampling) is causing the `rowsLimitPercent` field to behave unexpectedly. We recommend using `rowsLimit` instead. */
		rowsLimitPercent: FormControl<number | null | undefined>,
		sampleMethod: FormControl<GooglePrivacyDlpV2BigQueryOptionsSampleMethod | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2BigQueryOptionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BigQueryOptionsFormProperties>({
			rowsLimit: new FormControl<string | null | undefined>(undefined),
			rowsLimitPercent: new FormControl<number | null | undefined>(undefined),
			sampleMethod: new FormControl<GooglePrivacyDlpV2BigQueryOptionsSampleMethod | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2BigQueryOptionsSampleMethod { SAMPLE_METHOD_UNSPECIFIED = 0, TOP = 1, RANDOM_START = 2 }


	/** Bounding box encompassing detected text within an image. */
	export interface GooglePrivacyDlpV2BoundingBox {

		/** Height of the bounding box in pixels. */
		height?: number | null;

		/** Left coordinate of the bounding box. (0,0) is upper left. */
		left?: number | null;

		/** Top coordinate of the bounding box. (0,0) is upper left. */
		top?: number | null;

		/** Width of the bounding box in pixels. */
		width?: number | null;
	}

	/** Bounding box encompassing detected text within an image. */
	export interface GooglePrivacyDlpV2BoundingBoxFormProperties {

		/** Height of the bounding box in pixels. */
		height: FormControl<number | null | undefined>,

		/** Left coordinate of the bounding box. (0,0) is upper left. */
		left: FormControl<number | null | undefined>,

		/** Top coordinate of the bounding box. (0,0) is upper left. */
		top: FormControl<number | null | undefined>,

		/** Width of the bounding box in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2BoundingBoxFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BoundingBoxFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Container for bytes to inspect or redact. */
	export interface GooglePrivacyDlpV2ByteContentItem {

		/** Content data to inspect or redact. */
		data?: string | null;

		/** The type of data stored in the bytes string. Default will be TEXT_UTF8. */
		type?: GooglePrivacyDlpV2ByteContentItemType | null;
	}

	/** Container for bytes to inspect or redact. */
	export interface GooglePrivacyDlpV2ByteContentItemFormProperties {

		/** Content data to inspect or redact. */
		data: FormControl<string | null | undefined>,

		/** The type of data stored in the bytes string. Default will be TEXT_UTF8. */
		type: FormControl<GooglePrivacyDlpV2ByteContentItemType | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ByteContentItemFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ByteContentItemFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GooglePrivacyDlpV2ByteContentItemType | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2ByteContentItemType { BYTES_TYPE_UNSPECIFIED = 0, IMAGE = 1, IMAGE_JPEG = 2, IMAGE_BMP = 3, IMAGE_PNG = 4, IMAGE_SVG = 5, TEXT_UTF8 = 6, WORD_DOCUMENT = 7, PDF = 8, POWERPOINT_DOCUMENT = 9, EXCEL_DOCUMENT = 10, AVRO = 11, CSV = 12, TSV = 13 }


	/** The request message for canceling a DLP job. */
	export interface GooglePrivacyDlpV2CancelDlpJobRequest {
	}

	/** The request message for canceling a DLP job. */
	export interface GooglePrivacyDlpV2CancelDlpJobRequestFormProperties {
	}
	export function CreateGooglePrivacyDlpV2CancelDlpJobRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CancelDlpJobRequestFormProperties>({
		});

	}


	/** Message representing a set of files in Cloud Storage. */
	export interface GooglePrivacyDlpV2CloudStorageFileSet {

		/** The url, in the format `gs:///`. Trailing wildcard in the path is allowed. */
		url?: string | null;
	}

	/** Message representing a set of files in Cloud Storage. */
	export interface GooglePrivacyDlpV2CloudStorageFileSetFormProperties {

		/** The url, in the format `gs:///`. Trailing wildcard in the path is allowed. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CloudStorageFileSetFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CloudStorageFileSetFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options defining a file or a set of files within a Cloud Storage bucket. */
	export interface GooglePrivacyDlpV2CloudStorageOptions {

		/** Max number of bytes to scan from a file. If a scanned file's size is bigger than this value then the rest of the bytes are omitted. Only one of `bytes_limit_per_file` and `bytes_limit_per_file_percent` can be specified. This field can't be set if de-identification is requested. For certain file types, setting this field has no effect. For more information, see [Limits on bytes scanned per file](https://cloud.google.com/dlp/docs/supported-file-types#max-byte-size-per-file). */
		bytesLimitPerFile?: string | null;

		/** Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of bytes_limit_per_file and bytes_limit_per_file_percent can be specified. This field can't be set if de-identification is requested. For certain file types, setting this field has no effect. For more information, see [Limits on bytes scanned per file](https://cloud.google.com/dlp/docs/supported-file-types#max-byte-size-per-file). */
		bytesLimitPerFilePercent?: number | null;

		/** Set of files to scan. */
		fileSet?: GooglePrivacyDlpV2FileSet;

		/** List of file type groups to include in the scan. If empty, all files are scanned and available data format processors are applied. In addition, the binary content of the selected files is always scanned as well. Images are scanned only as binary if the specified region does not support image inspection and no file_types were specified. Image inspection is restricted to 'global', 'us', 'asia', and 'europe'. */
		fileTypes?: Array<string>;

		/** Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. */
		filesLimitPercent?: number | null;
		sampleMethod?: GooglePrivacyDlpV2BigQueryOptionsSampleMethod | null;
	}

	/** Options defining a file or a set of files within a Cloud Storage bucket. */
	export interface GooglePrivacyDlpV2CloudStorageOptionsFormProperties {

		/** Max number of bytes to scan from a file. If a scanned file's size is bigger than this value then the rest of the bytes are omitted. Only one of `bytes_limit_per_file` and `bytes_limit_per_file_percent` can be specified. This field can't be set if de-identification is requested. For certain file types, setting this field has no effect. For more information, see [Limits on bytes scanned per file](https://cloud.google.com/dlp/docs/supported-file-types#max-byte-size-per-file). */
		bytesLimitPerFile: FormControl<string | null | undefined>,

		/** Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of bytes_limit_per_file and bytes_limit_per_file_percent can be specified. This field can't be set if de-identification is requested. For certain file types, setting this field has no effect. For more information, see [Limits on bytes scanned per file](https://cloud.google.com/dlp/docs/supported-file-types#max-byte-size-per-file). */
		bytesLimitPerFilePercent: FormControl<number | null | undefined>,

		/** Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. */
		filesLimitPercent: FormControl<number | null | undefined>,
		sampleMethod: FormControl<GooglePrivacyDlpV2BigQueryOptionsSampleMethod | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CloudStorageOptionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CloudStorageOptionsFormProperties>({
			bytesLimitPerFile: new FormControl<string | null | undefined>(undefined),
			bytesLimitPerFilePercent: new FormControl<number | null | undefined>(undefined),
			filesLimitPercent: new FormControl<number | null | undefined>(undefined),
			sampleMethod: new FormControl<GooglePrivacyDlpV2BigQueryOptionsSampleMethod | null | undefined>(undefined),
		});

	}


	/** Set of files to scan. */
	export interface GooglePrivacyDlpV2FileSet {

		/** Message representing a set of files in a Cloud Storage bucket. Regular expressions are used to allow fine-grained control over which files in the bucket to include. Included files are those that match at least one item in `include_regex` and do not match any items in `exclude_regex`. Note that a file that matches items from both lists will _not_ be included. For a match to occur, the entire file path (i.e., everything in the url after the bucket name) must match the regular expression. For example, given the input `{bucket_name: "mybucket", include_regex: ["directory1/.*"], exclude_regex: ["directory1/excluded.*"]}`: * `gs://mybucket/directory1/myfile` will be included * `gs://mybucket/directory1/directory2/myfile` will be included (`.*` matches across `/`) * `gs://mybucket/directory0/directory1/myfile` will _not_ be included (the full path doesn't match any items in `include_regex`) * `gs://mybucket/directory1/excludedfile` will _not_ be included (the path matches an item in `exclude_regex`) If `include_regex` is left empty, it will match all files by default (this is equivalent to setting `include_regex: [".*"]`). Some other common use cases: * `{bucket_name: "mybucket", exclude_regex: [".*\.pdf"]}` will include all files in `mybucket` except for .pdf files * `{bucket_name: "mybucket", include_regex: ["directory/[^/]+"]}` will include all files directly under `gs://mybucket/directory/`, without matching across `/` */
		regexFileSet?: GooglePrivacyDlpV2CloudStorageRegexFileSet;

		/** The Cloud Storage url of the file(s) to scan, in the format `gs:///`. Trailing wildcard in the path is allowed. If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned non-recursively (content in sub-directories will not be scanned). This means that `gs://mybucket/` is equivalent to `gs://mybucket/*`, and `gs://mybucket/directory/` is equivalent to `gs://mybucket/directory/*`. Exactly one of `url` or `regex_file_set` must be set. */
		url?: string | null;
	}

	/** Set of files to scan. */
	export interface GooglePrivacyDlpV2FileSetFormProperties {

		/** The Cloud Storage url of the file(s) to scan, in the format `gs:///`. Trailing wildcard in the path is allowed. If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned non-recursively (content in sub-directories will not be scanned). This means that `gs://mybucket/` is equivalent to `gs://mybucket/*`, and `gs://mybucket/directory/` is equivalent to `gs://mybucket/directory/*`. Exactly one of `url` or `regex_file_set` must be set. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2FileSetFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2FileSetFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message representing a set of files in a Cloud Storage bucket. Regular expressions are used to allow fine-grained control over which files in the bucket to include. Included files are those that match at least one item in `include_regex` and do not match any items in `exclude_regex`. Note that a file that matches items from both lists will _not_ be included. For a match to occur, the entire file path (i.e., everything in the url after the bucket name) must match the regular expression. For example, given the input `{bucket_name: "mybucket", include_regex: ["directory1/.*"], exclude_regex: ["directory1/excluded.*"]}`: * `gs://mybucket/directory1/myfile` will be included * `gs://mybucket/directory1/directory2/myfile` will be included (`.*` matches across `/`) * `gs://mybucket/directory0/directory1/myfile` will _not_ be included (the full path doesn't match any items in `include_regex`) * `gs://mybucket/directory1/excludedfile` will _not_ be included (the path matches an item in `exclude_regex`) If `include_regex` is left empty, it will match all files by default (this is equivalent to setting `include_regex: [".*"]`). Some other common use cases: * `{bucket_name: "mybucket", exclude_regex: [".*\.pdf"]}` will include all files in `mybucket` except for .pdf files * `{bucket_name: "mybucket", include_regex: ["directory/[^/]+"]}` will include all files directly under `gs://mybucket/directory/`, without matching across `/` */
	export interface GooglePrivacyDlpV2CloudStorageRegexFileSet {

		/** The name of a Cloud Storage bucket. Required. */
		bucketName?: string | null;

		/** A list of regular expressions matching file paths to exclude. All files in the bucket that match at least one of these regular expressions will be excluded from the scan. Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub. */
		excludeRegex?: Array<string>;

		/** A list of regular expressions matching file paths to include. All files in the bucket that match at least one of these regular expressions will be included in the set of files, except for those that also match an item in `exclude_regex`. Leaving this field empty will match all files by default (this is equivalent to including `.*` in the list). Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub. */
		includeRegex?: Array<string>;
	}

	/** Message representing a set of files in a Cloud Storage bucket. Regular expressions are used to allow fine-grained control over which files in the bucket to include. Included files are those that match at least one item in `include_regex` and do not match any items in `exclude_regex`. Note that a file that matches items from both lists will _not_ be included. For a match to occur, the entire file path (i.e., everything in the url after the bucket name) must match the regular expression. For example, given the input `{bucket_name: "mybucket", include_regex: ["directory1/.*"], exclude_regex: ["directory1/excluded.*"]}`: * `gs://mybucket/directory1/myfile` will be included * `gs://mybucket/directory1/directory2/myfile` will be included (`.*` matches across `/`) * `gs://mybucket/directory0/directory1/myfile` will _not_ be included (the full path doesn't match any items in `include_regex`) * `gs://mybucket/directory1/excludedfile` will _not_ be included (the path matches an item in `exclude_regex`) If `include_regex` is left empty, it will match all files by default (this is equivalent to setting `include_regex: [".*"]`). Some other common use cases: * `{bucket_name: "mybucket", exclude_regex: [".*\.pdf"]}` will include all files in `mybucket` except for .pdf files * `{bucket_name: "mybucket", include_regex: ["directory/[^/]+"]}` will include all files directly under `gs://mybucket/directory/`, without matching across `/` */
	export interface GooglePrivacyDlpV2CloudStorageRegexFileSetFormProperties {

		/** The name of a Cloud Storage bucket. Required. */
		bucketName: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CloudStorageRegexFileSetFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CloudStorageRegexFileSetFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message representing a single file or path in Cloud Storage. */
	export interface GooglePrivacyDlpV2CloudStoragePath {

		/** A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt */
		path?: string | null;
	}

	/** Message representing a single file or path in Cloud Storage. */
	export interface GooglePrivacyDlpV2CloudStoragePathFormProperties {

		/** A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt */
		path: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CloudStoragePathFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CloudStoragePathFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The profile for a scanned column within a table. */
	export interface GooglePrivacyDlpV2ColumnDataProfile {

		/** The name of the column. */
		column?: string | null;

		/** The infoType details for this column. */
		columnInfoType?: GooglePrivacyDlpV2InfoTypeSummary;

		/** The data type of a given column. */
		columnType?: GooglePrivacyDlpV2ColumnDataProfileColumnType | null;

		/** Score is a summary of all elements in the data profile. A higher number means more risk. */
		dataRiskLevel?: GooglePrivacyDlpV2DataRiskLevel;

		/** The BigQuery dataset ID. */
		datasetId?: string | null;

		/** The BigQuery location where the dataset's data is stored. See https://cloud.google.com/bigquery/docs/locations for supported locations. */
		datasetLocation?: string | null;

		/** The Google Cloud project ID that owns the BigQuery dataset. */
		datasetProjectId?: string | null;

		/** Approximate percentage of entries being null in the column. */
		estimatedNullPercentage?: GooglePrivacyDlpV2ColumnDataProfileEstimatedNullPercentage | null;

		/** Approximate uniqueness of the column. */
		estimatedUniquenessScore?: GooglePrivacyDlpV2ColumnDataProfileEstimatedUniquenessScore | null;

		/** The likelihood that this column contains free-form text. A value close to 1 may indicate the column is likely to contain free-form or natural language text. Range in 0-1. */
		freeTextScore?: number | null;

		/** The name of the profile. */
		name?: string | null;

		/** Other types found within this column. List will be unordered. */
		otherMatches?: Array<GooglePrivacyDlpV2OtherInfoTypeSummary>;

		/** Indicates if a policy tag has been applied to the column. */
		policyState?: GooglePrivacyDlpV2ColumnDataProfilePolicyState | null;

		/** The last time the profile was generated. */
		profileLastGenerated?: string | null;
		profileStatus?: GooglePrivacyDlpV2ProfileStatus;

		/** Score is calculated from of all elements in the data profile. A higher level means the data is more sensitive. */
		sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;

		/** State of a profile. */
		state?: GooglePrivacyDlpV2ColumnDataProfileState | null;

		/** The resource name of the table data profile. */
		tableDataProfile?: string | null;

		/** The resource name of the table this column is within. */
		tableFullResource?: string | null;

		/** The BigQuery table ID. */
		tableId?: string | null;
	}

	/** The profile for a scanned column within a table. */
	export interface GooglePrivacyDlpV2ColumnDataProfileFormProperties {

		/** The name of the column. */
		column: FormControl<string | null | undefined>,

		/** The data type of a given column. */
		columnType: FormControl<GooglePrivacyDlpV2ColumnDataProfileColumnType | null | undefined>,

		/** The BigQuery dataset ID. */
		datasetId: FormControl<string | null | undefined>,

		/** The BigQuery location where the dataset's data is stored. See https://cloud.google.com/bigquery/docs/locations for supported locations. */
		datasetLocation: FormControl<string | null | undefined>,

		/** The Google Cloud project ID that owns the BigQuery dataset. */
		datasetProjectId: FormControl<string | null | undefined>,

		/** Approximate percentage of entries being null in the column. */
		estimatedNullPercentage: FormControl<GooglePrivacyDlpV2ColumnDataProfileEstimatedNullPercentage | null | undefined>,

		/** Approximate uniqueness of the column. */
		estimatedUniquenessScore: FormControl<GooglePrivacyDlpV2ColumnDataProfileEstimatedUniquenessScore | null | undefined>,

		/** The likelihood that this column contains free-form text. A value close to 1 may indicate the column is likely to contain free-form or natural language text. Range in 0-1. */
		freeTextScore: FormControl<number | null | undefined>,

		/** The name of the profile. */
		name: FormControl<string | null | undefined>,

		/** Indicates if a policy tag has been applied to the column. */
		policyState: FormControl<GooglePrivacyDlpV2ColumnDataProfilePolicyState | null | undefined>,

		/** The last time the profile was generated. */
		profileLastGenerated: FormControl<string | null | undefined>,

		/** State of a profile. */
		state: FormControl<GooglePrivacyDlpV2ColumnDataProfileState | null | undefined>,

		/** The resource name of the table data profile. */
		tableDataProfile: FormControl<string | null | undefined>,

		/** The resource name of the table this column is within. */
		tableFullResource: FormControl<string | null | undefined>,

		/** The BigQuery table ID. */
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ColumnDataProfileFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ColumnDataProfileFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			columnType: new FormControl<GooglePrivacyDlpV2ColumnDataProfileColumnType | null | undefined>(undefined),
			datasetId: new FormControl<string | null | undefined>(undefined),
			datasetLocation: new FormControl<string | null | undefined>(undefined),
			datasetProjectId: new FormControl<string | null | undefined>(undefined),
			estimatedNullPercentage: new FormControl<GooglePrivacyDlpV2ColumnDataProfileEstimatedNullPercentage | null | undefined>(undefined),
			estimatedUniquenessScore: new FormControl<GooglePrivacyDlpV2ColumnDataProfileEstimatedUniquenessScore | null | undefined>(undefined),
			freeTextScore: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			policyState: new FormControl<GooglePrivacyDlpV2ColumnDataProfilePolicyState | null | undefined>(undefined),
			profileLastGenerated: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GooglePrivacyDlpV2ColumnDataProfileState | null | undefined>(undefined),
			tableDataProfile: new FormControl<string | null | undefined>(undefined),
			tableFullResource: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The infoType details for this column. */
	export interface GooglePrivacyDlpV2InfoTypeSummary {

		/** Not populated for predicted infotypes. */
		estimatedPrevalence?: number | null;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;
	}

	/** The infoType details for this column. */
	export interface GooglePrivacyDlpV2InfoTypeSummaryFormProperties {

		/** Not populated for predicted infotypes. */
		estimatedPrevalence: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InfoTypeSummaryFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeSummaryFormProperties>({
			estimatedPrevalence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2ColumnDataProfileColumnType { COLUMN_DATA_TYPE_UNSPECIFIED = 0, TYPE_INT64 = 1, TYPE_BOOL = 2, TYPE_FLOAT64 = 3, TYPE_STRING = 4, TYPE_BYTES = 5, TYPE_TIMESTAMP = 6, TYPE_DATE = 7, TYPE_TIME = 8, TYPE_DATETIME = 9, TYPE_GEOGRAPHY = 10, TYPE_NUMERIC = 11, TYPE_RECORD = 12, TYPE_BIGNUMERIC = 13, TYPE_JSON = 14 }


	/** Score is a summary of all elements in the data profile. A higher number means more risk. */
	export interface GooglePrivacyDlpV2DataRiskLevel {

		/** The score applied to the resource. */
		score?: GooglePrivacyDlpV2DataRiskLevelScore | null;
	}

	/** Score is a summary of all elements in the data profile. A higher number means more risk. */
	export interface GooglePrivacyDlpV2DataRiskLevelFormProperties {

		/** The score applied to the resource. */
		score: FormControl<GooglePrivacyDlpV2DataRiskLevelScore | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DataRiskLevelFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DataRiskLevelFormProperties>({
			score: new FormControl<GooglePrivacyDlpV2DataRiskLevelScore | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2DataRiskLevelScore { RISK_SCORE_UNSPECIFIED = 0, RISK_LOW = 1, RISK_MODERATE = 2, RISK_HIGH = 3 }

	export enum GooglePrivacyDlpV2ColumnDataProfileEstimatedNullPercentage { NULL_PERCENTAGE_LEVEL_UNSPECIFIED = 0, NULL_PERCENTAGE_VERY_LOW = 1, NULL_PERCENTAGE_LOW = 2, NULL_PERCENTAGE_MEDIUM = 3, NULL_PERCENTAGE_HIGH = 4 }

	export enum GooglePrivacyDlpV2ColumnDataProfileEstimatedUniquenessScore { UNIQUENESS_SCORE_LEVEL_UNSPECIFIED = 0, UNIQUENESS_SCORE_LOW = 1, UNIQUENESS_SCORE_MEDIUM = 2, UNIQUENESS_SCORE_HIGH = 3 }


	/** Infotype details for other infoTypes found within a column. */
	export interface GooglePrivacyDlpV2OtherInfoTypeSummary {

		/** Approximate percentage of non-null rows that contained data detected by this infotype. */
		estimatedPrevalence?: number | null;

		/** Whether this infoType was excluded from sensitivity and risk analysis due to factors such as low prevalence (subject to change). */
		excludedFromAnalysis?: boolean | null;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;
	}

	/** Infotype details for other infoTypes found within a column. */
	export interface GooglePrivacyDlpV2OtherInfoTypeSummaryFormProperties {

		/** Approximate percentage of non-null rows that contained data detected by this infotype. */
		estimatedPrevalence: FormControl<number | null | undefined>,

		/** Whether this infoType was excluded from sensitivity and risk analysis due to factors such as low prevalence (subject to change). */
		excludedFromAnalysis: FormControl<boolean | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2OtherInfoTypeSummaryFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2OtherInfoTypeSummaryFormProperties>({
			estimatedPrevalence: new FormControl<number | null | undefined>(undefined),
			excludedFromAnalysis: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2ColumnDataProfilePolicyState { COLUMN_POLICY_STATE_UNSPECIFIED = 0, COLUMN_POLICY_TAGGED = 1 }

	export interface GooglePrivacyDlpV2ProfileStatus {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;

		/** Time when the profile generation status was updated */
		timestamp?: string | null;
	}
	export interface GooglePrivacyDlpV2ProfileStatusFormProperties {

		/** Time when the profile generation status was updated */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ProfileStatusFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ProfileStatusFormProperties>({
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
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

	export enum GooglePrivacyDlpV2ColumnDataProfileState { STATE_UNSPECIFIED = 0, RUNNING = 1, DONE = 2 }


	/** Represents a container that may contain DLP findings. Examples of a container include a file, table, or database record. */
	export interface GooglePrivacyDlpV2Container {

		/** A string representation of the full container name. Examples: - BigQuery: 'Project:DataSetId.TableId' - Cloud Storage: 'gs://Bucket/folders/filename.txt' */
		fullPath?: string | null;

		/** Project where the finding was found. Can be different from the project that owns the finding. */
		projectId?: string | null;

		/** The rest of the path after the root. Examples: - For BigQuery table `project_id:dataset_id.table_id`, the relative path is `table_id` - For Cloud Storage file `gs://bucket/folder/filename.txt`, the relative path is `folder/filename.txt` */
		relativePath?: string | null;

		/** The root of the container. Examples: - For BigQuery table `project_id:dataset_id.table_id`, the root is `dataset_id` - For Cloud Storage file `gs://bucket/folder/filename.txt`, the root is `gs://bucket` */
		rootPath?: string | null;

		/** Container type, for example BigQuery or Cloud Storage. */
		type?: string | null;

		/** Findings container modification timestamp, if applicable. For Cloud Storage, this field contains the last file modification timestamp. For a BigQuery table, this field contains the last_modified_time property. For Datastore, this field isn't populated. */
		updateTime?: string | null;

		/** Findings container version, if available ("generation" for Cloud Storage). */
		version?: string | null;
	}

	/** Represents a container that may contain DLP findings. Examples of a container include a file, table, or database record. */
	export interface GooglePrivacyDlpV2ContainerFormProperties {

		/** A string representation of the full container name. Examples: - BigQuery: 'Project:DataSetId.TableId' - Cloud Storage: 'gs://Bucket/folders/filename.txt' */
		fullPath: FormControl<string | null | undefined>,

		/** Project where the finding was found. Can be different from the project that owns the finding. */
		projectId: FormControl<string | null | undefined>,

		/** The rest of the path after the root. Examples: - For BigQuery table `project_id:dataset_id.table_id`, the relative path is `table_id` - For Cloud Storage file `gs://bucket/folder/filename.txt`, the relative path is `folder/filename.txt` */
		relativePath: FormControl<string | null | undefined>,

		/** The root of the container. Examples: - For BigQuery table `project_id:dataset_id.table_id`, the root is `dataset_id` - For Cloud Storage file `gs://bucket/folder/filename.txt`, the root is `gs://bucket` */
		rootPath: FormControl<string | null | undefined>,

		/** Container type, for example BigQuery or Cloud Storage. */
		type: FormControl<string | null | undefined>,

		/** Findings container modification timestamp, if applicable. For Cloud Storage, this field contains the last file modification timestamp. For a BigQuery table, this field contains the last_modified_time property. For Datastore, this field isn't populated. */
		updateTime: FormControl<string | null | undefined>,

		/** Findings container version, if available ("generation" for Cloud Storage). */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ContainerFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ContainerFormProperties>({
			fullPath: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
			rootPath: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GooglePrivacyDlpV2ContentItem {

		/** Container for bytes to inspect or redact. */
		byteItem?: GooglePrivacyDlpV2ByteContentItem;

		/** Structured content to inspect. Up to 50,000 `Value`s per request allowed. See https://cloud.google.com/dlp/docs/inspecting-structured-text#inspecting_a_table to learn more. */
		table?: GooglePrivacyDlpV2Table;

		/** String data to inspect or redact. */
		value?: string | null;
	}
	export interface GooglePrivacyDlpV2ContentItemFormProperties {

		/** String data to inspect or redact. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ContentItemFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ContentItemFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Structured content to inspect. Up to 50,000 `Value`s per request allowed. See https://cloud.google.com/dlp/docs/inspecting-structured-text#inspecting_a_table to learn more. */
	export interface GooglePrivacyDlpV2Table {

		/** Headers of the table. */
		headers?: Array<GooglePrivacyDlpV2FieldId>;

		/** Rows of the table. */
		rows?: Array<GooglePrivacyDlpV2Row>;
	}

	/** Structured content to inspect. Up to 50,000 `Value`s per request allowed. See https://cloud.google.com/dlp/docs/inspecting-structured-text#inspecting_a_table to learn more. */
	export interface GooglePrivacyDlpV2TableFormProperties {
	}
	export function CreateGooglePrivacyDlpV2TableFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TableFormProperties>({
		});

	}


	/** Values of the row. */
	export interface GooglePrivacyDlpV2Row {

		/** Individual cells. */
		values?: Array<GooglePrivacyDlpV2Value>;
	}

	/** Values of the row. */
	export interface GooglePrivacyDlpV2RowFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RowFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RowFormProperties>({
		});

	}


	/** Precise location of the finding within a document, record, image, or metadata container. */
	export interface GooglePrivacyDlpV2ContentLocation {

		/** Name of the container where the finding is located. The top level name is the source file name or table name. Names of some common storage containers are formatted as follows: * BigQuery tables: `{project_id}:{dataset_id}.{table_id}` * Cloud Storage files: `gs://{bucket}/{path}` * Datastore namespace: {namespace} Nested names could be absent if the embedded object has no string identifier (for example, an image contained within a document). */
		containerName?: string | null;

		/** Finding container modification timestamp, if applicable. For Cloud Storage, this field contains the last file modification timestamp. For a BigQuery table, this field contains the last_modified_time property. For Datastore, this field isn't populated. */
		containerTimestamp?: string | null;

		/** Finding container version, if available ("generation" for Cloud Storage). */
		containerVersion?: string | null;

		/** Location of a finding within a document. */
		documentLocation?: GooglePrivacyDlpV2DocumentLocation;

		/** Location of the finding within an image. */
		imageLocation?: GooglePrivacyDlpV2ImageLocation;

		/** Metadata Location */
		metadataLocation?: GooglePrivacyDlpV2MetadataLocation;

		/** Location of a finding within a row or record. */
		recordLocation?: GooglePrivacyDlpV2RecordLocation;
	}

	/** Precise location of the finding within a document, record, image, or metadata container. */
	export interface GooglePrivacyDlpV2ContentLocationFormProperties {

		/** Name of the container where the finding is located. The top level name is the source file name or table name. Names of some common storage containers are formatted as follows: * BigQuery tables: `{project_id}:{dataset_id}.{table_id}` * Cloud Storage files: `gs://{bucket}/{path}` * Datastore namespace: {namespace} Nested names could be absent if the embedded object has no string identifier (for example, an image contained within a document). */
		containerName: FormControl<string | null | undefined>,

		/** Finding container modification timestamp, if applicable. For Cloud Storage, this field contains the last file modification timestamp. For a BigQuery table, this field contains the last_modified_time property. For Datastore, this field isn't populated. */
		containerTimestamp: FormControl<string | null | undefined>,

		/** Finding container version, if available ("generation" for Cloud Storage). */
		containerVersion: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ContentLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ContentLocationFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined),
			containerTimestamp: new FormControl<string | null | undefined>(undefined),
			containerVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of a finding within a document. */
	export interface GooglePrivacyDlpV2DocumentLocation {

		/** Offset of the line, from the beginning of the file, where the finding is located. */
		fileOffset?: string | null;
	}

	/** Location of a finding within a document. */
	export interface GooglePrivacyDlpV2DocumentLocationFormProperties {

		/** Offset of the line, from the beginning of the file, where the finding is located. */
		fileOffset: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DocumentLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DocumentLocationFormProperties>({
			fileOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of the finding within an image. */
	export interface GooglePrivacyDlpV2ImageLocation {

		/** Bounding boxes locating the pixels within the image containing the finding. */
		boundingBoxes?: Array<GooglePrivacyDlpV2BoundingBox>;
	}

	/** Location of the finding within an image. */
	export interface GooglePrivacyDlpV2ImageLocationFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ImageLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ImageLocationFormProperties>({
		});

	}


	/** Metadata Location */
	export interface GooglePrivacyDlpV2MetadataLocation {

		/** Storage metadata label to indicate which metadata entry contains findings. */
		storageLabel?: GooglePrivacyDlpV2StorageMetadataLabel;

		/** Type of metadata containing the finding. */
		type?: GooglePrivacyDlpV2MetadataLocationType | null;
	}

	/** Metadata Location */
	export interface GooglePrivacyDlpV2MetadataLocationFormProperties {

		/** Type of metadata containing the finding. */
		type: FormControl<GooglePrivacyDlpV2MetadataLocationType | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2MetadataLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2MetadataLocationFormProperties>({
			type: new FormControl<GooglePrivacyDlpV2MetadataLocationType | null | undefined>(undefined),
		});

	}


	/** Storage metadata label to indicate which metadata entry contains findings. */
	export interface GooglePrivacyDlpV2StorageMetadataLabel {
		key?: string | null;
	}

	/** Storage metadata label to indicate which metadata entry contains findings. */
	export interface GooglePrivacyDlpV2StorageMetadataLabelFormProperties {
		key: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2StorageMetadataLabelFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StorageMetadataLabelFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2MetadataLocationType { METADATATYPE_UNSPECIFIED = 0, STORAGE_METADATA = 1 }


	/** Location of a finding within a row or record. */
	export interface GooglePrivacyDlpV2RecordLocation {

		/** General identifier of a data field in a storage service. */
		fieldId?: GooglePrivacyDlpV2FieldId;

		/** Message for a unique key indicating a record that contains a finding. */
		recordKey?: GooglePrivacyDlpV2RecordKey;

		/** Location of a finding within a table. */
		tableLocation?: GooglePrivacyDlpV2TableLocation;
	}

	/** Location of a finding within a row or record. */
	export interface GooglePrivacyDlpV2RecordLocationFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RecordLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RecordLocationFormProperties>({
		});

	}


	/** Message for a unique key indicating a record that contains a finding. */
	export interface GooglePrivacyDlpV2RecordKey {

		/** Row key for identifying a record in BigQuery table. */
		bigQueryKey?: GooglePrivacyDlpV2BigQueryKey;

		/** Record key for a finding in Cloud Datastore. */
		datastoreKey?: GooglePrivacyDlpV2DatastoreKey;

		/** Values of identifying columns in the given row. Order of values matches the order of `identifying_fields` specified in the scanning request. */
		idValues?: Array<string>;
	}

	/** Message for a unique key indicating a record that contains a finding. */
	export interface GooglePrivacyDlpV2RecordKeyFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RecordKeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RecordKeyFormProperties>({
		});

	}


	/** Record key for a finding in Cloud Datastore. */
	export interface GooglePrivacyDlpV2DatastoreKey {

		/** A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts. */
		entityKey?: GooglePrivacyDlpV2Key;
	}

	/** Record key for a finding in Cloud Datastore. */
	export interface GooglePrivacyDlpV2DatastoreKeyFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DatastoreKeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DatastoreKeyFormProperties>({
		});

	}


	/** A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts. */
	export interface GooglePrivacyDlpV2Key {

		/** Datastore partition ID. A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. */
		partitionId?: GooglePrivacyDlpV2PartitionId;

		/** The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element's _ancestors_. A path can never be empty, and a path can have at most 100 elements. */
		path?: Array<GooglePrivacyDlpV2PathElement>;
	}

	/** A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts. */
	export interface GooglePrivacyDlpV2KeyFormProperties {
	}
	export function CreateGooglePrivacyDlpV2KeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KeyFormProperties>({
		});

	}


	/** Datastore partition ID. A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. */
	export interface GooglePrivacyDlpV2PartitionId {

		/** If not empty, the ID of the namespace to which the entities belong. */
		namespaceId?: string | null;

		/** The ID of the project to which the entities belong. */
		projectId?: string | null;
	}

	/** Datastore partition ID. A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. */
	export interface GooglePrivacyDlpV2PartitionIdFormProperties {

		/** If not empty, the ID of the namespace to which the entities belong. */
		namespaceId: FormControl<string | null | undefined>,

		/** The ID of the project to which the entities belong. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2PartitionIdFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PartitionIdFormProperties>({
			namespaceId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A (kind, ID/name) pair used to construct a key path. If either name or ID is set, the element is complete. If neither is set, the element is incomplete. */
	export interface GooglePrivacyDlpV2PathElement {

		/** The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future. */
		id?: string | null;

		/** The kind of the entity. A kind matching regex `__.*__` is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be `""`. */
		kind?: string | null;

		/** The name of the entity. A name matching regex `__.*__` is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be `""`. */
		name?: string | null;
	}

	/** A (kind, ID/name) pair used to construct a key path. If either name or ID is set, the element is complete. If neither is set, the element is incomplete. */
	export interface GooglePrivacyDlpV2PathElementFormProperties {

		/** The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future. */
		id: FormControl<string | null | undefined>,

		/** The kind of the entity. A kind matching regex `__.*__` is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be `""`. */
		kind: FormControl<string | null | undefined>,

		/** The name of the entity. A name matching regex `__.*__` is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be `""`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2PathElementFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PathElementFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of a finding within a table. */
	export interface GooglePrivacyDlpV2TableLocation {

		/** The zero-based index of the row where the finding is located. Only populated for resources that have a natural ordering, not BigQuery. In BigQuery, to identify the row a finding came from, populate BigQueryOptions.identifying_fields with your primary key column names and when you store the findings the value of those columns will be stored inside of Finding. */
		rowIndex?: string | null;
	}

	/** Location of a finding within a table. */
	export interface GooglePrivacyDlpV2TableLocationFormProperties {

		/** The zero-based index of the row where the finding is located. Only populated for resources that have a natural ordering, not BigQuery. In BigQuery, to identify the row a finding came from, populate BigQueryOptions.identifying_fields with your primary key column names and when you store the findings the value of those columns will be stored inside of Finding. */
		rowIndex: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TableLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TableLocationFormProperties>({
			rowIndex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CreateDeidentifyTemplate. */
	export interface GooglePrivacyDlpV2CreateDeidentifyTemplateRequest {

		/** DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more. */
		deidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;

		/** Deprecated. This field has no effect. */
		locationId?: string | null;

		/** The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
		templateId?: string | null;
	}

	/** Request message for CreateDeidentifyTemplate. */
	export interface GooglePrivacyDlpV2CreateDeidentifyTemplateRequestFormProperties {

		/** Deprecated. This field has no effect. */
		locationId: FormControl<string | null | undefined>,

		/** The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CreateDeidentifyTemplateRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CreateDeidentifyTemplateRequestFormProperties>({
			locationId: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CreateDiscoveryConfig. */
	export interface GooglePrivacyDlpV2CreateDiscoveryConfigRequest {

		/** The config ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
		configId?: string | null;

		/** Configuration for discovery to scan resources for profile generation. Only one discovery configuration may exist per organization, folder, or project. The generated data profiles are retained according to the [data retention policy] (https://cloud.google.com/dlp/docs/data-profiles#retention). */
		discoveryConfig?: GooglePrivacyDlpV2DiscoveryConfig;
	}

	/** Request message for CreateDiscoveryConfig. */
	export interface GooglePrivacyDlpV2CreateDiscoveryConfigRequestFormProperties {

		/** The config ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
		configId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CreateDiscoveryConfigRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CreateDiscoveryConfigRequestFormProperties>({
			configId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for discovery to scan resources for profile generation. Only one discovery configuration may exist per organization, folder, or project. The generated data profiles are retained according to the [data retention policy] (https://cloud.google.com/dlp/docs/data-profiles#retention). */
	export interface GooglePrivacyDlpV2DiscoveryConfig {

		/** Actions to execute at the completion of scanning. */
		actions?: Array<GooglePrivacyDlpV2DataProfileAction>;

		/** Output only. The creation timestamp of a DiscoveryConfig. */
		createTime?: string | null;

		/** Display name (max 100 chars) */
		displayName?: string | null;

		/** Output only. A stream of errors encountered when the config was activated. Repeated errors may result in the config automatically being paused. Output only field. Will return the last 100 errors. Whenever the config is modified this list will be cleared. */
		errors?: Array<GooglePrivacyDlpV2Error>;

		/** Detection logic for profile generation. Not all template features are used by Discovery. FindingLimits, include_quote and exclude_info_types have no impact on Discovery. Multiple templates may be provided if there is data in multiple regions. At most one template must be specified per-region (including "global"). Each region is scanned using the applicable template. If no region-specific template is specified, but a "global" template is specified, it will be copied to that region and used instead. If no global or region-specific template is provided for a region with data, that region's data will not be scanned. For more information, see https://cloud.google.com/dlp/docs/data-profiles#data-residency. */
		inspectTemplates?: Array<string>;

		/** Output only. The timestamp of the last time this config was executed. */
		lastRunTime?: string | null;

		/** Unique resource name for the DiscoveryConfig, assigned by the service when the DiscoveryConfig is created, for example `projects/dlp-test-project/locations/global/discoveryConfigs/53234423`. */
		name?: string | null;

		/** Project and scan location information. Only set when the parent is an org. */
		orgConfig?: GooglePrivacyDlpV2OrgConfig;

		/** Required. A status for this configuration. */
		status?: GooglePrivacyDlpV2DiscoveryConfigStatus | null;

		/** Target to match against for determining what to scan and how frequently. */
		targets?: Array<GooglePrivacyDlpV2DiscoveryTarget>;

		/** Output only. The last update timestamp of a DiscoveryConfig. */
		updateTime?: string | null;
	}

	/** Configuration for discovery to scan resources for profile generation. Only one discovery configuration may exist per organization, folder, or project. The generated data profiles are retained according to the [data retention policy] (https://cloud.google.com/dlp/docs/data-profiles#retention). */
	export interface GooglePrivacyDlpV2DiscoveryConfigFormProperties {

		/** Output only. The creation timestamp of a DiscoveryConfig. */
		createTime: FormControl<string | null | undefined>,

		/** Display name (max 100 chars) */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The timestamp of the last time this config was executed. */
		lastRunTime: FormControl<string | null | undefined>,

		/** Unique resource name for the DiscoveryConfig, assigned by the service when the DiscoveryConfig is created, for example `projects/dlp-test-project/locations/global/discoveryConfigs/53234423`. */
		name: FormControl<string | null | undefined>,

		/** Required. A status for this configuration. */
		status: FormControl<GooglePrivacyDlpV2DiscoveryConfigStatus | null | undefined>,

		/** Output only. The last update timestamp of a DiscoveryConfig. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DiscoveryConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DiscoveryConfigFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lastRunTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GooglePrivacyDlpV2DiscoveryConfigStatus | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A task to execute when a data profile has been generated. */
	export interface GooglePrivacyDlpV2DataProfileAction {

		/** If set, the detailed data profiles will be persisted to the location of your choice whenever updated. */
		exportData?: GooglePrivacyDlpV2Export;

		/** Send a Pub/Sub message into the given Pub/Sub topic to connect other systems to data profile generation. The message payload data will be the byte serialization of `DataProfilePubSubMessage`. */
		pubSubNotification?: GooglePrivacyDlpV2PubSubNotification;
	}

	/** A task to execute when a data profile has been generated. */
	export interface GooglePrivacyDlpV2DataProfileActionFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DataProfileActionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DataProfileActionFormProperties>({
		});

	}


	/** If set, the detailed data profiles will be persisted to the location of your choice whenever updated. */
	export interface GooglePrivacyDlpV2Export {

		/** Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`. */
		profileTable?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** If set, the detailed data profiles will be persisted to the location of your choice whenever updated. */
	export interface GooglePrivacyDlpV2ExportFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ExportFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ExportFormProperties>({
		});

	}


	/** Send a Pub/Sub message into the given Pub/Sub topic to connect other systems to data profile generation. The message payload data will be the byte serialization of `DataProfilePubSubMessage`. */
	export interface GooglePrivacyDlpV2PubSubNotification {

		/** How much data to include in the Pub/Sub message. If the user wishes to limit the size of the message, they can use resource_name and fetch the profile fields they wish to. Per table profile (not per column). */
		detailOfMessage?: GooglePrivacyDlpV2PubSubNotificationDetailOfMessage | null;

		/** The type of event that triggers a Pub/Sub. At most one `PubSubNotification` per EventType is permitted. */
		event?: GooglePrivacyDlpV2PubSubNotificationEvent | null;

		/** A condition for determining whether a Pub/Sub should be triggered. */
		pubsubCondition?: GooglePrivacyDlpV2DataProfilePubSubCondition;

		/** Cloud Pub/Sub topic to send notifications to. Format is projects/{project}/topics/{topic}. */
		topic?: string | null;
	}

	/** Send a Pub/Sub message into the given Pub/Sub topic to connect other systems to data profile generation. The message payload data will be the byte serialization of `DataProfilePubSubMessage`. */
	export interface GooglePrivacyDlpV2PubSubNotificationFormProperties {

		/** How much data to include in the Pub/Sub message. If the user wishes to limit the size of the message, they can use resource_name and fetch the profile fields they wish to. Per table profile (not per column). */
		detailOfMessage: FormControl<GooglePrivacyDlpV2PubSubNotificationDetailOfMessage | null | undefined>,

		/** The type of event that triggers a Pub/Sub. At most one `PubSubNotification` per EventType is permitted. */
		event: FormControl<GooglePrivacyDlpV2PubSubNotificationEvent | null | undefined>,

		/** Cloud Pub/Sub topic to send notifications to. Format is projects/{project}/topics/{topic}. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2PubSubNotificationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PubSubNotificationFormProperties>({
			detailOfMessage: new FormControl<GooglePrivacyDlpV2PubSubNotificationDetailOfMessage | null | undefined>(undefined),
			event: new FormControl<GooglePrivacyDlpV2PubSubNotificationEvent | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2PubSubNotificationDetailOfMessage { DETAIL_LEVEL_UNSPECIFIED = 0, TABLE_PROFILE = 1, RESOURCE_NAME = 2 }

	export enum GooglePrivacyDlpV2PubSubNotificationEvent { EVENT_TYPE_UNSPECIFIED = 0, NEW_PROFILE = 1, CHANGED_PROFILE = 2, SCORE_INCREASED = 3, ERROR_CHANGED = 4 }


	/** A condition for determining whether a Pub/Sub should be triggered. */
	export interface GooglePrivacyDlpV2DataProfilePubSubCondition {

		/** An expression, consisting of an operator and conditions. */
		expressions?: GooglePrivacyDlpV2PubSubExpressions;
	}

	/** A condition for determining whether a Pub/Sub should be triggered. */
	export interface GooglePrivacyDlpV2DataProfilePubSubConditionFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DataProfilePubSubConditionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DataProfilePubSubConditionFormProperties>({
		});

	}


	/** An expression, consisting of an operator and conditions. */
	export interface GooglePrivacyDlpV2PubSubExpressions {

		/** Conditions to apply to the expression. */
		conditions?: Array<GooglePrivacyDlpV2PubSubCondition>;

		/** The operator to apply to the collection of conditions. */
		logicalOperator?: GooglePrivacyDlpV2PubSubExpressionsLogicalOperator | null;
	}

	/** An expression, consisting of an operator and conditions. */
	export interface GooglePrivacyDlpV2PubSubExpressionsFormProperties {

		/** The operator to apply to the collection of conditions. */
		logicalOperator: FormControl<GooglePrivacyDlpV2PubSubExpressionsLogicalOperator | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2PubSubExpressionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PubSubExpressionsFormProperties>({
			logicalOperator: new FormControl<GooglePrivacyDlpV2PubSubExpressionsLogicalOperator | null | undefined>(undefined),
		});

	}


	/** A condition consisting of a value. */
	export interface GooglePrivacyDlpV2PubSubCondition {

		/** The minimum data risk score that triggers the condition. */
		minimumRiskScore?: GooglePrivacyDlpV2PubSubConditionMinimumRiskScore | null;

		/** The minimum sensitivity level that triggers the condition. */
		minimumSensitivityScore?: GooglePrivacyDlpV2PubSubConditionMinimumRiskScore | null;
	}

	/** A condition consisting of a value. */
	export interface GooglePrivacyDlpV2PubSubConditionFormProperties {

		/** The minimum data risk score that triggers the condition. */
		minimumRiskScore: FormControl<GooglePrivacyDlpV2PubSubConditionMinimumRiskScore | null | undefined>,

		/** The minimum sensitivity level that triggers the condition. */
		minimumSensitivityScore: FormControl<GooglePrivacyDlpV2PubSubConditionMinimumRiskScore | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2PubSubConditionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PubSubConditionFormProperties>({
			minimumRiskScore: new FormControl<GooglePrivacyDlpV2PubSubConditionMinimumRiskScore | null | undefined>(undefined),
			minimumSensitivityScore: new FormControl<GooglePrivacyDlpV2PubSubConditionMinimumRiskScore | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2PubSubConditionMinimumRiskScore { PROFILE_SCORE_BUCKET_UNSPECIFIED = 0, HIGH = 1, MEDIUM_OR_HIGH = 2 }

	export enum GooglePrivacyDlpV2PubSubExpressionsLogicalOperator { LOGICAL_OPERATOR_UNSPECIFIED = 0, OR = 1, AND = 2 }


	/** Details information about an error encountered during job execution or the results of an unsuccessful activation of the JobTrigger. */
	export interface GooglePrivacyDlpV2Error {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		details?: GoogleRpcStatus;

		/** The times the error occurred. List includes the oldest timestamp and the last 9 timestamps. */
		timestamps?: Array<string>;
	}

	/** Details information about an error encountered during job execution or the results of an unsuccessful activation of the JobTrigger. */
	export interface GooglePrivacyDlpV2ErrorFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ErrorFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ErrorFormProperties>({
		});

	}


	/** Project and scan location information. Only set when the parent is an org. */
	export interface GooglePrivacyDlpV2OrgConfig {

		/** The location to begin a discovery scan. Denotes an organization ID or folder ID within an organization. */
		location?: GooglePrivacyDlpV2DiscoveryStartingLocation;

		/** The project that will run the scan. The DLP service account that exists within this project must have access to all resources that are profiled, and the Cloud DLP API must be enabled. */
		projectId?: string | null;
	}

	/** Project and scan location information. Only set when the parent is an org. */
	export interface GooglePrivacyDlpV2OrgConfigFormProperties {

		/** The project that will run the scan. The DLP service account that exists within this project must have access to all resources that are profiled, and the Cloud DLP API must be enabled. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2OrgConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2OrgConfigFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location to begin a discovery scan. Denotes an organization ID or folder ID within an organization. */
	export interface GooglePrivacyDlpV2DiscoveryStartingLocation {

		/** The ID of the Folder within an organization to scan. */
		folderId?: string | null;

		/** The ID of an organization to scan. */
		organizationId?: string | null;
	}

	/** The location to begin a discovery scan. Denotes an organization ID or folder ID within an organization. */
	export interface GooglePrivacyDlpV2DiscoveryStartingLocationFormProperties {

		/** The ID of the Folder within an organization to scan. */
		folderId: FormControl<string | null | undefined>,

		/** The ID of an organization to scan. */
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DiscoveryStartingLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DiscoveryStartingLocationFormProperties>({
			folderId: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2DiscoveryConfigStatus { STATUS_UNSPECIFIED = 0, RUNNING = 1, PAUSED = 2 }


	/** Target used to match against for Discovery. */
	export interface GooglePrivacyDlpV2DiscoveryTarget {

		/** Target used to match against for discovery with BigQuery tables */
		bigQueryTarget?: GooglePrivacyDlpV2BigQueryDiscoveryTarget;
	}

	/** Target used to match against for Discovery. */
	export interface GooglePrivacyDlpV2DiscoveryTargetFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DiscoveryTargetFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DiscoveryTargetFormProperties>({
		});

	}


	/** Request message for CreateDlpJobRequest. Used to initiate long running jobs such as calculating risk metrics or inspecting Google Cloud Storage. */
	export interface GooglePrivacyDlpV2CreateDlpJobRequest {

		/** Controls what and how to inspect for findings. */
		inspectJob?: GooglePrivacyDlpV2InspectJobConfig;

		/** The job id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
		jobId?: string | null;

		/** Deprecated. This field has no effect. */
		locationId?: string | null;

		/** Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more. */
		riskJob?: GooglePrivacyDlpV2RiskAnalysisJobConfig;
	}

	/** Request message for CreateDlpJobRequest. Used to initiate long running jobs such as calculating risk metrics or inspecting Google Cloud Storage. */
	export interface GooglePrivacyDlpV2CreateDlpJobRequestFormProperties {

		/** The job id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
		jobId: FormControl<string | null | undefined>,

		/** Deprecated. This field has no effect. */
		locationId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CreateDlpJobRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CreateDlpJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Controls what and how to inspect for findings. */
	export interface GooglePrivacyDlpV2InspectJobConfig {

		/** Actions to execute at the completion of the job. */
		actions?: Array<GooglePrivacyDlpV2Action>;

		/** Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used. */
		inspectConfig?: GooglePrivacyDlpV2InspectConfig;

		/** If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template. */
		inspectTemplateName?: string | null;

		/** Shared message indicating Cloud storage type. */
		storageConfig?: GooglePrivacyDlpV2StorageConfig;
	}

	/** Controls what and how to inspect for findings. */
	export interface GooglePrivacyDlpV2InspectJobConfigFormProperties {

		/** If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template. */
		inspectTemplateName: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InspectJobConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectJobConfigFormProperties>({
			inspectTemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used. */
	export interface GooglePrivacyDlpV2InspectConfig {

		/** Deprecated and unused. */
		contentOptions?: Array<string>;

		/** CustomInfoTypes provided by the user. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more. */
		customInfoTypes?: Array<GooglePrivacyDlpV2CustomInfoType>;

		/** When true, excludes type information of the findings. This is not used for data profiling. */
		excludeInfoTypes?: boolean | null;

		/** When true, a contextual quote from the data that triggered a finding is included in the response; see Finding.quote. This is not used for data profiling. */
		includeQuote?: boolean | null;

		/** Restricts what info_types to look for. The values must correspond to InfoType values returned by ListInfoTypes or listed at https://cloud.google.com/dlp/docs/infotypes-reference. When no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose a default list of detectors to run, which may change over time. If you need precise control and predictability as to what detectors are run you should specify specific InfoTypes listed in the reference, otherwise a default list will be used, which may change over time. */
		infoTypes?: Array<GooglePrivacyDlpV2InfoType>;

		/** Configuration to control the number of findings returned for inspection. This is not used for de-identification or data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error. */
		limits?: GooglePrivacyDlpV2FindingLimits;

		/** Only returns findings equal to or above this threshold. The default is POSSIBLE. In general, the highest likelihood setting yields the fewest findings in results and the lowest chance of a false positive. For more information, see [Match likelihood](https://cloud.google.com/dlp/docs/likelihood). */
		minLikelihood?: GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null;

		/** Minimum likelihood per infotype. For each infotype, a user can specify a minimum likelihood. The system only returns a finding if its likelihood is above this threshold. If this field is not set, the system uses the InspectConfig min_likelihood. */
		minLikelihoodPerInfoType?: Array<GooglePrivacyDlpV2InfoTypeLikelihood>;

		/** Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end, other rules are executed in the order they are specified for each info type. */
		ruleSet?: Array<GooglePrivacyDlpV2InspectionRuleSet>;
	}

	/** Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used. */
	export interface GooglePrivacyDlpV2InspectConfigFormProperties {

		/** When true, excludes type information of the findings. This is not used for data profiling. */
		excludeInfoTypes: FormControl<boolean | null | undefined>,

		/** When true, a contextual quote from the data that triggered a finding is included in the response; see Finding.quote. This is not used for data profiling. */
		includeQuote: FormControl<boolean | null | undefined>,

		/** Only returns findings equal to or above this threshold. The default is POSSIBLE. In general, the highest likelihood setting yields the fewest findings in results and the lowest chance of a false positive. For more information, see [Match likelihood](https://cloud.google.com/dlp/docs/likelihood). */
		minLikelihood: FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InspectConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectConfigFormProperties>({
			excludeInfoTypes: new FormControl<boolean | null | undefined>(undefined),
			includeQuote: new FormControl<boolean | null | undefined>(undefined),
			minLikelihood: new FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>(undefined),
		});

	}


	/** Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question. */
	export interface GooglePrivacyDlpV2CustomInfoType {

		/** Set of detection rules to apply to all findings of this CustomInfoType. Rules are applied in order that they are specified. Not supported for the `surrogate_type` CustomInfoType. */
		detectionRules?: Array<GooglePrivacyDlpV2DetectionRule>;

		/** Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles. Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase "Sam Johnson" will match all three phrases "sam johnson", "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word "jen" will match the first three letters of the text "jen123" but will return no matches for "jennifer". Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API. */
		dictionary?: GooglePrivacyDlpV2Dictionary;

		/** If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching. */
		exclusionType?: GooglePrivacyDlpV2CustomInfoTypeExclusionType | null;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;

		/** Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to `VERY_LIKELY` if not specified. */
		likelihood?: GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null;

		/** Message defining a custom regular expression. */
		regex?: GooglePrivacyDlpV2Regex;

		/** Score is calculated from of all elements in the data profile. A higher level means the data is more sensitive. */
		sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;

		/** A reference to a StoredInfoType to use with scanning. */
		storedType?: GooglePrivacyDlpV2StoredType;

		/** Message for detecting output from deidentification transformations such as [`CryptoReplaceFfxFpeConfig`](https://cloud.google.com/dlp/docs/reference/rest/v2/organizations.deidentifyTemplates#cryptoreplaceffxfpeconfig). These types of transformations are those that perform pseudonymization, thereby producing a "surrogate" as output. This should be used in conjunction with a field on the transformation such as `surrogate_info_type`. This CustomInfoType does not support the use of `detection_rules`. */
		surrogateType?: GooglePrivacyDlpV2SurrogateType;
	}

	/** Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question. */
	export interface GooglePrivacyDlpV2CustomInfoTypeFormProperties {

		/** If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching. */
		exclusionType: FormControl<GooglePrivacyDlpV2CustomInfoTypeExclusionType | null | undefined>,

		/** Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to `VERY_LIKELY` if not specified. */
		likelihood: FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CustomInfoTypeFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CustomInfoTypeFormProperties>({
			exclusionType: new FormControl<GooglePrivacyDlpV2CustomInfoTypeExclusionType | null | undefined>(undefined),
			likelihood: new FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>(undefined),
		});

	}


	/** Deprecated; use `InspectionRuleSet` instead. Rule for modifying a `CustomInfoType` to alter behavior under certain circumstances, depending on the specific details of the rule. Not supported for the `surrogate_type` custom infoType. */
	export interface GooglePrivacyDlpV2DetectionRule {

		/** The rule that adjusts the likelihood of findings within a certain proximity of hotwords. */
		hotwordRule?: GooglePrivacyDlpV2HotwordRule;
	}

	/** Deprecated; use `InspectionRuleSet` instead. Rule for modifying a `CustomInfoType` to alter behavior under certain circumstances, depending on the specific details of the rule. Not supported for the `surrogate_type` custom infoType. */
	export interface GooglePrivacyDlpV2DetectionRuleFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DetectionRuleFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DetectionRuleFormProperties>({
		});

	}


	/** The rule that adjusts the likelihood of findings within a certain proximity of hotwords. */
	export interface GooglePrivacyDlpV2HotwordRule {

		/** Message defining a custom regular expression. */
		hotwordRegex?: GooglePrivacyDlpV2Regex;

		/** Message for specifying an adjustment to the likelihood of a finding as part of a detection rule. */
		likelihoodAdjustment?: GooglePrivacyDlpV2LikelihoodAdjustment;

		/** Message for specifying a window around a finding to apply a detection rule. */
		proximity?: GooglePrivacyDlpV2Proximity;
	}

	/** The rule that adjusts the likelihood of findings within a certain proximity of hotwords. */
	export interface GooglePrivacyDlpV2HotwordRuleFormProperties {
	}
	export function CreateGooglePrivacyDlpV2HotwordRuleFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HotwordRuleFormProperties>({
		});

	}


	/** Message defining a custom regular expression. */
	export interface GooglePrivacyDlpV2Regex {

		/** The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included. */
		groupIndexes?: Array<number>;

		/** Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. */
		pattern?: string | null;
	}

	/** Message defining a custom regular expression. */
	export interface GooglePrivacyDlpV2RegexFormProperties {

		/** Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. */
		pattern: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2RegexFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RegexFormProperties>({
			pattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for specifying an adjustment to the likelihood of a finding as part of a detection rule. */
	export interface GooglePrivacyDlpV2LikelihoodAdjustment {

		/** Set the likelihood of a finding to a fixed value. */
		fixedLikelihood?: GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null;

		/** Increase or decrease the likelihood by the specified number of levels. For example, if a finding would be `POSSIBLE` without the detection rule and `relative_likelihood` is 1, then it is upgraded to `LIKELY`, while a value of -1 would downgrade it to `UNLIKELY`. Likelihood may never drop below `VERY_UNLIKELY` or exceed `VERY_LIKELY`, so applying an adjustment of 1 followed by an adjustment of -1 when base likelihood is `VERY_LIKELY` will result in a final likelihood of `LIKELY`. */
		relativeLikelihood?: number | null;
	}

	/** Message for specifying an adjustment to the likelihood of a finding as part of a detection rule. */
	export interface GooglePrivacyDlpV2LikelihoodAdjustmentFormProperties {

		/** Set the likelihood of a finding to a fixed value. */
		fixedLikelihood: FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>,

		/** Increase or decrease the likelihood by the specified number of levels. For example, if a finding would be `POSSIBLE` without the detection rule and `relative_likelihood` is 1, then it is upgraded to `LIKELY`, while a value of -1 would downgrade it to `UNLIKELY`. Likelihood may never drop below `VERY_UNLIKELY` or exceed `VERY_LIKELY`, so applying an adjustment of 1 followed by an adjustment of -1 when base likelihood is `VERY_LIKELY` will result in a final likelihood of `LIKELY`. */
		relativeLikelihood: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2LikelihoodAdjustmentFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LikelihoodAdjustmentFormProperties>({
			fixedLikelihood: new FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>(undefined),
			relativeLikelihood: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood { LIKELIHOOD_UNSPECIFIED = 0, VERY_UNLIKELY = 1, UNLIKELY = 2, POSSIBLE = 3, LIKELY = 4, VERY_LIKELY = 5 }


	/** Message for specifying a window around a finding to apply a detection rule. */
	export interface GooglePrivacyDlpV2Proximity {

		/** Number of characters after the finding to consider. */
		windowAfter?: number | null;

		/** Number of characters before the finding to consider. For tabular data, if you want to modify the likelihood of an entire column of findngs, set this to 1. For more information, see [Hotword example: Set the match likelihood of a table column] (https://cloud.google.com/dlp/docs/creating-custom-infotypes-likelihood#match-column-values). */
		windowBefore?: number | null;
	}

	/** Message for specifying a window around a finding to apply a detection rule. */
	export interface GooglePrivacyDlpV2ProximityFormProperties {

		/** Number of characters after the finding to consider. */
		windowAfter: FormControl<number | null | undefined>,

		/** Number of characters before the finding to consider. For tabular data, if you want to modify the likelihood of an entire column of findngs, set this to 1. For more information, see [Hotword example: Set the match likelihood of a table column] (https://cloud.google.com/dlp/docs/creating-custom-infotypes-likelihood#match-column-values). */
		windowBefore: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ProximityFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ProximityFormProperties>({
			windowAfter: new FormControl<number | null | undefined>(undefined),
			windowBefore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles. Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase "Sam Johnson" will match all three phrases "sam johnson", "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word "jen" will match the first three letters of the text "jen123" but will return no matches for "jennifer". Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API. */
	export interface GooglePrivacyDlpV2Dictionary {

		/** Message representing a single file or path in Cloud Storage. */
		cloudStoragePath?: GooglePrivacyDlpV2CloudStoragePath;

		/** Message defining a list of words or phrases to search for in the data. */
		wordList?: GooglePrivacyDlpV2WordList;
	}

	/** Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles. Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase "Sam Johnson" will match all three phrases "sam johnson", "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word "jen" will match the first three letters of the text "jen123" but will return no matches for "jennifer". Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API. */
	export interface GooglePrivacyDlpV2DictionaryFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DictionaryFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DictionaryFormProperties>({
		});

	}

	export enum GooglePrivacyDlpV2CustomInfoTypeExclusionType { EXCLUSION_TYPE_UNSPECIFIED = 0, EXCLUSION_TYPE_EXCLUDE = 1 }


	/** A reference to a StoredInfoType to use with scanning. */
	export interface GooglePrivacyDlpV2StoredType {

		/** Timestamp indicating when the version of the `StoredInfoType` used for inspection was created. Output-only field, populated by the system. */
		createTime?: string | null;

		/** Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`. */
		name?: string | null;
	}

	/** A reference to a StoredInfoType to use with scanning. */
	export interface GooglePrivacyDlpV2StoredTypeFormProperties {

		/** Timestamp indicating when the version of the `StoredInfoType` used for inspection was created. Output-only field, populated by the system. */
		createTime: FormControl<string | null | undefined>,

		/** Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2StoredTypeFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StoredTypeFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for detecting output from deidentification transformations such as [`CryptoReplaceFfxFpeConfig`](https://cloud.google.com/dlp/docs/reference/rest/v2/organizations.deidentifyTemplates#cryptoreplaceffxfpeconfig). These types of transformations are those that perform pseudonymization, thereby producing a "surrogate" as output. This should be used in conjunction with a field on the transformation such as `surrogate_info_type`. This CustomInfoType does not support the use of `detection_rules`. */
	export interface GooglePrivacyDlpV2SurrogateType {
	}

	/** Message for detecting output from deidentification transformations such as [`CryptoReplaceFfxFpeConfig`](https://cloud.google.com/dlp/docs/reference/rest/v2/organizations.deidentifyTemplates#cryptoreplaceffxfpeconfig). These types of transformations are those that perform pseudonymization, thereby producing a "surrogate" as output. This should be used in conjunction with a field on the transformation such as `surrogate_info_type`. This CustomInfoType does not support the use of `detection_rules`. */
	export interface GooglePrivacyDlpV2SurrogateTypeFormProperties {
	}
	export function CreateGooglePrivacyDlpV2SurrogateTypeFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2SurrogateTypeFormProperties>({
		});

	}


	/** Configuration to control the number of findings returned for inspection. This is not used for de-identification or data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error. */
	export interface GooglePrivacyDlpV2FindingLimits {

		/** Configuration of findings limit given for specified infoTypes. */
		maxFindingsPerInfoType?: Array<GooglePrivacyDlpV2InfoTypeLimit>;

		/** Max number of findings that are returned for each item scanned. When set within an InspectContentRequest, this field is ignored. This value isn't a hard limit. If the number of findings for an item reaches this limit, the inspection of that item ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns for the item can be multiple times higher than this value. */
		maxFindingsPerItem?: number | null;

		/** Max number of findings that are returned per request or job. If you set this field in an InspectContentRequest, the resulting maximum value is the value that you set or 3,000, whichever is lower. This value isn't a hard limit. If an inspection reaches this limit, the inspection ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns can be multiple times higher than this value. */
		maxFindingsPerRequest?: number | null;
	}

	/** Configuration to control the number of findings returned for inspection. This is not used for de-identification or data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error. */
	export interface GooglePrivacyDlpV2FindingLimitsFormProperties {

		/** Max number of findings that are returned for each item scanned. When set within an InspectContentRequest, this field is ignored. This value isn't a hard limit. If the number of findings for an item reaches this limit, the inspection of that item ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns for the item can be multiple times higher than this value. */
		maxFindingsPerItem: FormControl<number | null | undefined>,

		/** Max number of findings that are returned per request or job. If you set this field in an InspectContentRequest, the resulting maximum value is the value that you set or 3,000, whichever is lower. This value isn't a hard limit. If an inspection reaches this limit, the inspection ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns can be multiple times higher than this value. */
		maxFindingsPerRequest: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2FindingLimitsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2FindingLimitsFormProperties>({
			maxFindingsPerItem: new FormControl<number | null | undefined>(undefined),
			maxFindingsPerRequest: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Max findings configuration per infoType, per content item or long running DlpJob. */
	export interface GooglePrivacyDlpV2InfoTypeLimit {

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;

		/** Max findings limit for the given infoType. */
		maxFindings?: number | null;
	}

	/** Max findings configuration per infoType, per content item or long running DlpJob. */
	export interface GooglePrivacyDlpV2InfoTypeLimitFormProperties {

		/** Max findings limit for the given infoType. */
		maxFindings: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InfoTypeLimitFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeLimitFormProperties>({
			maxFindings: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration for setting a minimum likelihood per infotype. Used to customize the minimum likelihood level for specific infotypes in the request. For example, use this if you want to lower the precision for PERSON_NAME without lowering the precision for the other infotypes in the request. */
	export interface GooglePrivacyDlpV2InfoTypeLikelihood {

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;

		/** Only returns findings equal to or above this threshold. This field is required or else the configuration fails. */
		minLikelihood?: GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null;
	}

	/** Configuration for setting a minimum likelihood per infotype. Used to customize the minimum likelihood level for specific infotypes in the request. For example, use this if you want to lower the precision for PERSON_NAME without lowering the precision for the other infotypes in the request. */
	export interface GooglePrivacyDlpV2InfoTypeLikelihoodFormProperties {

		/** Only returns findings equal to or above this threshold. This field is required or else the configuration fails. */
		minLikelihood: FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InfoTypeLikelihoodFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeLikelihoodFormProperties>({
			minLikelihood: new FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>(undefined),
		});

	}


	/** Rule set for modifying a set of infoTypes to alter behavior under certain circumstances, depending on the specific details of the rules within the set. */
	export interface GooglePrivacyDlpV2InspectionRuleSet {

		/** List of infoTypes this rule set is applied to. */
		infoTypes?: Array<GooglePrivacyDlpV2InfoType>;

		/** Set of rules to be applied to infoTypes. The rules are applied in order. */
		rules?: Array<GooglePrivacyDlpV2InspectionRule>;
	}

	/** Rule set for modifying a set of infoTypes to alter behavior under certain circumstances, depending on the specific details of the rules within the set. */
	export interface GooglePrivacyDlpV2InspectionRuleSetFormProperties {
	}
	export function CreateGooglePrivacyDlpV2InspectionRuleSetFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectionRuleSetFormProperties>({
		});

	}


	/** A single inspection rule to be applied to infoTypes, specified in `InspectionRuleSet`. */
	export interface GooglePrivacyDlpV2InspectionRule {

		/** The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results. */
		exclusionRule?: GooglePrivacyDlpV2ExclusionRule;

		/** The rule that adjusts the likelihood of findings within a certain proximity of hotwords. */
		hotwordRule?: GooglePrivacyDlpV2HotwordRule;
	}

	/** A single inspection rule to be applied to infoTypes, specified in `InspectionRuleSet`. */
	export interface GooglePrivacyDlpV2InspectionRuleFormProperties {
	}
	export function CreateGooglePrivacyDlpV2InspectionRuleFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectionRuleFormProperties>({
		});

	}


	/** The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results. */
	export interface GooglePrivacyDlpV2ExclusionRule {

		/** Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles. Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase "Sam Johnson" will match all three phrases "sam johnson", "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word "jen" will match the first three letters of the text "jen123" but will return no matches for "jennifer". Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API. */
		dictionary?: GooglePrivacyDlpV2Dictionary;

		/** The rule to exclude findings based on a hotword. For record inspection of tables, column names are considered hotwords. An example of this is to exclude a finding if it belongs to a BigQuery column that matches a specific pattern. */
		excludeByHotword?: GooglePrivacyDlpV2ExcludeByHotword;

		/** List of excluded infoTypes. */
		excludeInfoTypes?: GooglePrivacyDlpV2ExcludeInfoTypes;

		/** How the rule is applied, see MatchingType documentation for details. */
		matchingType?: GooglePrivacyDlpV2ExclusionRuleMatchingType | null;

		/** Message defining a custom regular expression. */
		regex?: GooglePrivacyDlpV2Regex;
	}

	/** The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results. */
	export interface GooglePrivacyDlpV2ExclusionRuleFormProperties {

		/** How the rule is applied, see MatchingType documentation for details. */
		matchingType: FormControl<GooglePrivacyDlpV2ExclusionRuleMatchingType | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ExclusionRuleFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ExclusionRuleFormProperties>({
			matchingType: new FormControl<GooglePrivacyDlpV2ExclusionRuleMatchingType | null | undefined>(undefined),
		});

	}


	/** The rule to exclude findings based on a hotword. For record inspection of tables, column names are considered hotwords. An example of this is to exclude a finding if it belongs to a BigQuery column that matches a specific pattern. */
	export interface GooglePrivacyDlpV2ExcludeByHotword {

		/** Message defining a custom regular expression. */
		hotwordRegex?: GooglePrivacyDlpV2Regex;

		/** Message for specifying a window around a finding to apply a detection rule. */
		proximity?: GooglePrivacyDlpV2Proximity;
	}

	/** The rule to exclude findings based on a hotword. For record inspection of tables, column names are considered hotwords. An example of this is to exclude a finding if it belongs to a BigQuery column that matches a specific pattern. */
	export interface GooglePrivacyDlpV2ExcludeByHotwordFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ExcludeByHotwordFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ExcludeByHotwordFormProperties>({
		});

	}


	/** List of excluded infoTypes. */
	export interface GooglePrivacyDlpV2ExcludeInfoTypes {

		/** InfoType list in ExclusionRule rule drops a finding when it overlaps or contained within with a finding of an infoType from this list. For example, for `InspectionRuleSet.info_types` containing "PHONE_NUMBER"` and `exclusion_rule` containing `exclude_info_types.info_types` with "EMAIL_ADDRESS" the phone number findings are dropped if they overlap with EMAIL_ADDRESS finding. That leads to "555-222-2222@example.org" to generate only a single finding, namely email address. */
		infoTypes?: Array<GooglePrivacyDlpV2InfoType>;
	}

	/** List of excluded infoTypes. */
	export interface GooglePrivacyDlpV2ExcludeInfoTypesFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ExcludeInfoTypesFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ExcludeInfoTypesFormProperties>({
		});

	}

	export enum GooglePrivacyDlpV2ExclusionRuleMatchingType { MATCHING_TYPE_UNSPECIFIED = 0, MATCHING_TYPE_FULL_MATCH = 1, MATCHING_TYPE_PARTIAL_MATCH = 2, MATCHING_TYPE_INVERSE_MATCH = 3 }


	/** Shared message indicating Cloud storage type. */
	export interface GooglePrivacyDlpV2StorageConfig {

		/** Options defining BigQuery table and row identifiers. */
		bigQueryOptions?: GooglePrivacyDlpV2BigQueryOptions;

		/** Options defining a file or a set of files within a Cloud Storage bucket. */
		cloudStorageOptions?: GooglePrivacyDlpV2CloudStorageOptions;

		/** Options defining a data set within Google Cloud Datastore. */
		datastoreOptions?: GooglePrivacyDlpV2DatastoreOptions;

		/** Configuration to control jobs where the content being inspected is outside of Google Cloud Platform. */
		hybridOptions?: GooglePrivacyDlpV2HybridOptions;

		/** Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Cloud Storage and BigQuery. */
		timespanConfig?: GooglePrivacyDlpV2TimespanConfig;
	}

	/** Shared message indicating Cloud storage type. */
	export interface GooglePrivacyDlpV2StorageConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2StorageConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StorageConfigFormProperties>({
		});

	}


	/** Options defining a data set within Google Cloud Datastore. */
	export interface GooglePrivacyDlpV2DatastoreOptions {

		/** A representation of a Datastore kind. */
		kind?: GooglePrivacyDlpV2KindExpression;

		/** Datastore partition ID. A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. */
		partitionId?: GooglePrivacyDlpV2PartitionId;
	}

	/** Options defining a data set within Google Cloud Datastore. */
	export interface GooglePrivacyDlpV2DatastoreOptionsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DatastoreOptionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DatastoreOptionsFormProperties>({
		});

	}


	/** A representation of a Datastore kind. */
	export interface GooglePrivacyDlpV2KindExpression {

		/** The name of the kind. */
		name?: string | null;
	}

	/** A representation of a Datastore kind. */
	export interface GooglePrivacyDlpV2KindExpressionFormProperties {

		/** The name of the kind. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2KindExpressionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KindExpressionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration to control jobs where the content being inspected is outside of Google Cloud Platform. */
	export interface GooglePrivacyDlpV2HybridOptions {

		/** A short description of where the data is coming from. Will be stored once in the job. 256 max length. */
		description?: string | null;

		/** To organize findings, these labels will be added to each finding. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"` */
		labels?: {[id: string]: string };

		/** These are labels that each inspection request must include within their 'finding_labels' map. Request may contain others, but any missing one of these will be rejected. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. No more than 10 keys can be required. */
		requiredFindingLabelKeys?: Array<string>;

		/** Instructions regarding the table content being inspected. */
		tableOptions?: GooglePrivacyDlpV2TableOptions;
	}

	/** Configuration to control jobs where the content being inspected is outside of Google Cloud Platform. */
	export interface GooglePrivacyDlpV2HybridOptionsFormProperties {

		/** A short description of where the data is coming from. Will be stored once in the job. 256 max length. */
		description: FormControl<string | null | undefined>,

		/** To organize findings, these labels will be added to each finding. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"` */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2HybridOptionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HybridOptionsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Instructions regarding the table content being inspected. */
	export interface GooglePrivacyDlpV2TableOptions {

		/** The columns that are the primary keys for table objects included in ContentItem. A copy of this cell's value will stored alongside alongside each finding so that the finding can be traced to the specific row it came from. No more than 3 may be provided. */
		identifyingFields?: Array<GooglePrivacyDlpV2FieldId>;
	}

	/** Instructions regarding the table content being inspected. */
	export interface GooglePrivacyDlpV2TableOptionsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2TableOptionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TableOptionsFormProperties>({
		});

	}


	/** Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Cloud Storage and BigQuery. */
	export interface GooglePrivacyDlpV2TimespanConfig {

		/** When the job is started by a JobTrigger we will automatically figure out a valid start_time to avoid scanning files that have not been modified since the last time the JobTrigger executed. This will be based on the time of the execution of the last run of the JobTrigger or the timespan end_time used in the last run of the JobTrigger. */
		enableAutoPopulationOfTimespanConfig?: boolean | null;

		/** Exclude files, tables, or rows newer than this value. If not set, no upper time limit is applied. */
		endTime?: string | null;

		/** Exclude files, tables, or rows older than this value. If not set, no lower time limit is applied. */
		startTime?: string | null;

		/** General identifier of a data field in a storage service. */
		timestampField?: GooglePrivacyDlpV2FieldId;
	}

	/** Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Cloud Storage and BigQuery. */
	export interface GooglePrivacyDlpV2TimespanConfigFormProperties {

		/** When the job is started by a JobTrigger we will automatically figure out a valid start_time to avoid scanning files that have not been modified since the last time the JobTrigger executed. This will be based on the time of the execution of the last run of the JobTrigger or the timespan end_time used in the last run of the JobTrigger. */
		enableAutoPopulationOfTimespanConfig: FormControl<boolean | null | undefined>,

		/** Exclude files, tables, or rows newer than this value. If not set, no upper time limit is applied. */
		endTime: FormControl<string | null | undefined>,

		/** Exclude files, tables, or rows older than this value. If not set, no lower time limit is applied. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TimespanConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TimespanConfigFormProperties>({
			enableAutoPopulationOfTimespanConfig: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CreateInspectTemplate. */
	export interface GooglePrivacyDlpV2CreateInspectTemplateRequest {

		/** The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more. */
		inspectTemplate?: GooglePrivacyDlpV2InspectTemplate;

		/** Deprecated. This field has no effect. */
		locationId?: string | null;

		/** The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
		templateId?: string | null;
	}

	/** Request message for CreateInspectTemplate. */
	export interface GooglePrivacyDlpV2CreateInspectTemplateRequestFormProperties {

		/** Deprecated. This field has no effect. */
		locationId: FormControl<string | null | undefined>,

		/** The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CreateInspectTemplateRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CreateInspectTemplateRequestFormProperties>({
			locationId: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more. */
	export interface GooglePrivacyDlpV2InspectTemplate {

		/** Output only. The creation timestamp of an inspectTemplate. */
		createTime?: string | null;

		/** Short description (max 256 chars). */
		description?: string | null;

		/** Display name (max 256 chars). */
		displayName?: string | null;

		/** Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used. */
		inspectConfig?: GooglePrivacyDlpV2InspectConfig;

		/** Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`; */
		name?: string | null;

		/** Output only. The last update timestamp of an inspectTemplate. */
		updateTime?: string | null;
	}

	/** The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more. */
	export interface GooglePrivacyDlpV2InspectTemplateFormProperties {

		/** Output only. The creation timestamp of an inspectTemplate. */
		createTime: FormControl<string | null | undefined>,

		/** Short description (max 256 chars). */
		description: FormControl<string | null | undefined>,

		/** Display name (max 256 chars). */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`; */
		name: FormControl<string | null | undefined>,

		/** Output only. The last update timestamp of an inspectTemplate. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InspectTemplateFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectTemplateFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CreateJobTrigger. */
	export interface GooglePrivacyDlpV2CreateJobTriggerRequest {

		/** Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more. */
		jobTrigger?: GooglePrivacyDlpV2JobTrigger;

		/** Deprecated. This field has no effect. */
		locationId?: string | null;

		/** The trigger id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
		triggerId?: string | null;
	}

	/** Request message for CreateJobTrigger. */
	export interface GooglePrivacyDlpV2CreateJobTriggerRequestFormProperties {

		/** Deprecated. This field has no effect. */
		locationId: FormControl<string | null | undefined>,

		/** The trigger id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
		triggerId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CreateJobTriggerRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CreateJobTriggerRequestFormProperties>({
			locationId: new FormControl<string | null | undefined>(undefined),
			triggerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more. */
	export interface GooglePrivacyDlpV2JobTrigger {

		/** Output only. The creation timestamp of a triggeredJob. */
		createTime?: string | null;

		/** User provided description (max 256 chars) */
		description?: string | null;

		/** Display name (max 100 chars) */
		displayName?: string | null;

		/** Output only. A stream of errors encountered when the trigger was activated. Repeated errors may result in the JobTrigger automatically being paused. Will return the last 100 errors. Whenever the JobTrigger is modified this list will be cleared. */
		errors?: Array<GooglePrivacyDlpV2Error>;

		/** Controls what and how to inspect for findings. */
		inspectJob?: GooglePrivacyDlpV2InspectJobConfig;

		/** Output only. The timestamp of the last time this trigger executed. */
		lastRunTime?: string | null;

		/** Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example `projects/dlp-test-project/jobTriggers/53234423`. */
		name?: string | null;

		/** Required. A status for this trigger. */
		status?: GooglePrivacyDlpV2JobTriggerStatus | null;

		/** A list of triggers which will be OR'ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object. */
		triggers?: Array<GooglePrivacyDlpV2Trigger>;

		/** Output only. The last update timestamp of a triggeredJob. */
		updateTime?: string | null;
	}

	/** Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more. */
	export interface GooglePrivacyDlpV2JobTriggerFormProperties {

		/** Output only. The creation timestamp of a triggeredJob. */
		createTime: FormControl<string | null | undefined>,

		/** User provided description (max 256 chars) */
		description: FormControl<string | null | undefined>,

		/** Display name (max 100 chars) */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The timestamp of the last time this trigger executed. */
		lastRunTime: FormControl<string | null | undefined>,

		/** Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example `projects/dlp-test-project/jobTriggers/53234423`. */
		name: FormControl<string | null | undefined>,

		/** Required. A status for this trigger. */
		status: FormControl<GooglePrivacyDlpV2JobTriggerStatus | null | undefined>,

		/** Output only. The last update timestamp of a triggeredJob. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2JobTriggerFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2JobTriggerFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lastRunTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GooglePrivacyDlpV2JobTriggerStatus | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2JobTriggerStatus { STATUS_UNSPECIFIED = 0, HEALTHY = 1, PAUSED = 2, CANCELLED = 3 }


	/** What event needs to occur for a new job to be started. */
	export interface GooglePrivacyDlpV2Trigger {

		/** Job trigger option for hybrid jobs. Jobs must be manually created and finished. */
		manual?: GooglePrivacyDlpV2Manual;

		/** Schedule for inspect job triggers. */
		schedule?: GooglePrivacyDlpV2Schedule;
	}

	/** What event needs to occur for a new job to be started. */
	export interface GooglePrivacyDlpV2TriggerFormProperties {
	}
	export function CreateGooglePrivacyDlpV2TriggerFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TriggerFormProperties>({
		});

	}


	/** Job trigger option for hybrid jobs. Jobs must be manually created and finished. */
	export interface GooglePrivacyDlpV2Manual {
	}

	/** Job trigger option for hybrid jobs. Jobs must be manually created and finished. */
	export interface GooglePrivacyDlpV2ManualFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ManualFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ManualFormProperties>({
		});

	}


	/** Schedule for inspect job triggers. */
	export interface GooglePrivacyDlpV2Schedule {

		/** With this option a job is started on a regular periodic basis. For example: every day (86400 seconds). A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs. This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days. */
		recurrencePeriodDuration?: string | null;
	}

	/** Schedule for inspect job triggers. */
	export interface GooglePrivacyDlpV2ScheduleFormProperties {

		/** With this option a job is started on a regular periodic basis. For example: every day (86400 seconds). A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs. This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days. */
		recurrencePeriodDuration: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ScheduleFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ScheduleFormProperties>({
			recurrencePeriodDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CreateStoredInfoType. */
	export interface GooglePrivacyDlpV2CreateStoredInfoTypeRequest {

		/** Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes. */
		config?: GooglePrivacyDlpV2StoredInfoTypeConfig;

		/** Deprecated. This field has no effect. */
		locationId?: string | null;

		/** The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
		storedInfoTypeId?: string | null;
	}

	/** Request message for CreateStoredInfoType. */
	export interface GooglePrivacyDlpV2CreateStoredInfoTypeRequestFormProperties {

		/** Deprecated. This field has no effect. */
		locationId: FormControl<string | null | undefined>,

		/** The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
		storedInfoTypeId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CreateStoredInfoTypeRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CreateStoredInfoTypeRequestFormProperties>({
			locationId: new FormControl<string | null | undefined>(undefined),
			storedInfoTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes. */
	export interface GooglePrivacyDlpV2StoredInfoTypeConfig {

		/** Description of the StoredInfoType (max 256 characters). */
		description?: string | null;

		/** Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles. Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase "Sam Johnson" will match all three phrases "sam johnson", "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word "jen" will match the first three letters of the text "jen123" but will return no matches for "jennifer". Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API. */
		dictionary?: GooglePrivacyDlpV2Dictionary;

		/** Display name of the StoredInfoType (max 256 characters). */
		displayName?: string | null;

		/** Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements. */
		largeCustomDictionary?: GooglePrivacyDlpV2LargeCustomDictionaryConfig;

		/** Message defining a custom regular expression. */
		regex?: GooglePrivacyDlpV2Regex;
	}

	/** Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes. */
	export interface GooglePrivacyDlpV2StoredInfoTypeConfigFormProperties {

		/** Description of the StoredInfoType (max 256 characters). */
		description: FormControl<string | null | undefined>,

		/** Display name of the StoredInfoType (max 256 characters). */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2StoredInfoTypeConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StoredInfoTypeConfigFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements. */
	export interface GooglePrivacyDlpV2LargeCustomDictionaryConfig {

		/** Message defining a field of a BigQuery table. */
		bigQueryField?: GooglePrivacyDlpV2BigQueryField;

		/** Message representing a set of files in Cloud Storage. */
		cloudStorageFileSet?: GooglePrivacyDlpV2CloudStorageFileSet;

		/** Message representing a single file or path in Cloud Storage. */
		outputPath?: GooglePrivacyDlpV2CloudStoragePath;
	}

	/** Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements. */
	export interface GooglePrivacyDlpV2LargeCustomDictionaryConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2LargeCustomDictionaryConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LargeCustomDictionaryConfigFormProperties>({
		});

	}


	/** The schema of data to be saved to the BigQuery table when the `DataProfileAction` is enabled. */
	export interface GooglePrivacyDlpV2DataProfileBigQueryRowSchema {

		/** The profile for a scanned column within a table. */
		columnProfile?: GooglePrivacyDlpV2ColumnDataProfile;

		/** The profile for a scanned table. */
		tableProfile?: GooglePrivacyDlpV2TableDataProfile;
	}

	/** The schema of data to be saved to the BigQuery table when the `DataProfileAction` is enabled. */
	export interface GooglePrivacyDlpV2DataProfileBigQueryRowSchemaFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DataProfileBigQueryRowSchemaFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DataProfileBigQueryRowSchemaFormProperties>({
		});

	}


	/** The profile for a scanned table. */
	export interface GooglePrivacyDlpV2TableDataProfile {

		/** Snapshot of the configurations used to generate the profile. */
		configSnapshot?: GooglePrivacyDlpV2DataProfileConfigSnapshot;

		/** The time at which the table was created. */
		createTime?: string | null;

		/** Score is a summary of all elements in the data profile. A higher number means more risk. */
		dataRiskLevel?: GooglePrivacyDlpV2DataRiskLevel;

		/** The BigQuery dataset ID. */
		datasetId?: string | null;

		/** The BigQuery location where the dataset's data is stored. See https://cloud.google.com/bigquery/docs/locations for supported locations. */
		datasetLocation?: string | null;

		/** The Google Cloud project ID that owns the BigQuery dataset. */
		datasetProjectId?: string | null;

		/** How the table is encrypted. */
		encryptionStatus?: GooglePrivacyDlpV2TableDataProfileEncryptionStatus | null;

		/** Optional. The time when this table expires. */
		expirationTime?: string | null;

		/** The number of columns skipped in the table because of an error. */
		failedColumnCount?: string | null;

		/** The resource name of the table. https://cloud.google.com/apis/design/resource_names#full_resource_name */
		fullResource?: string | null;

		/** The time when this table was last modified */
		lastModifiedTime?: string | null;

		/** The name of the profile. */
		name?: string | null;

		/** Other infoTypes found in this table's data. */
		otherInfoTypes?: Array<GooglePrivacyDlpV2OtherInfoTypeSummary>;

		/** The infoTypes predicted from this table's data. */
		predictedInfoTypes?: Array<GooglePrivacyDlpV2InfoTypeSummary>;

		/** The last time the profile was generated. */
		profileLastGenerated?: string | null;
		profileStatus?: GooglePrivacyDlpV2ProfileStatus;

		/** The resource name to the project data profile for this table. */
		projectDataProfile?: string | null;

		/** The labels applied to the resource at the time the profile was generated. */
		resourceLabels?: {[id: string]: string };

		/** How broadly a resource has been shared. */
		resourceVisibility?: GooglePrivacyDlpV2TableDataProfileResourceVisibility | null;

		/** Number of rows in the table when the profile was generated. This will not be populated for BigLake tables. */
		rowCount?: string | null;

		/** The number of columns profiled in the table. */
		scannedColumnCount?: string | null;

		/** Score is calculated from of all elements in the data profile. A higher level means the data is more sensitive. */
		sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;

		/** State of a profile. */
		state?: GooglePrivacyDlpV2ColumnDataProfileState | null;

		/** The BigQuery table ID. */
		tableId?: string | null;

		/** The size of the table when the profile was generated. */
		tableSizeBytes?: string | null;
	}

	/** The profile for a scanned table. */
	export interface GooglePrivacyDlpV2TableDataProfileFormProperties {

		/** The time at which the table was created. */
		createTime: FormControl<string | null | undefined>,

		/** The BigQuery dataset ID. */
		datasetId: FormControl<string | null | undefined>,

		/** The BigQuery location where the dataset's data is stored. See https://cloud.google.com/bigquery/docs/locations for supported locations. */
		datasetLocation: FormControl<string | null | undefined>,

		/** The Google Cloud project ID that owns the BigQuery dataset. */
		datasetProjectId: FormControl<string | null | undefined>,

		/** How the table is encrypted. */
		encryptionStatus: FormControl<GooglePrivacyDlpV2TableDataProfileEncryptionStatus | null | undefined>,

		/** Optional. The time when this table expires. */
		expirationTime: FormControl<string | null | undefined>,

		/** The number of columns skipped in the table because of an error. */
		failedColumnCount: FormControl<string | null | undefined>,

		/** The resource name of the table. https://cloud.google.com/apis/design/resource_names#full_resource_name */
		fullResource: FormControl<string | null | undefined>,

		/** The time when this table was last modified */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** The name of the profile. */
		name: FormControl<string | null | undefined>,

		/** The last time the profile was generated. */
		profileLastGenerated: FormControl<string | null | undefined>,

		/** The resource name to the project data profile for this table. */
		projectDataProfile: FormControl<string | null | undefined>,

		/** The labels applied to the resource at the time the profile was generated. */
		resourceLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** How broadly a resource has been shared. */
		resourceVisibility: FormControl<GooglePrivacyDlpV2TableDataProfileResourceVisibility | null | undefined>,

		/** Number of rows in the table when the profile was generated. This will not be populated for BigLake tables. */
		rowCount: FormControl<string | null | undefined>,

		/** The number of columns profiled in the table. */
		scannedColumnCount: FormControl<string | null | undefined>,

		/** State of a profile. */
		state: FormControl<GooglePrivacyDlpV2ColumnDataProfileState | null | undefined>,

		/** The BigQuery table ID. */
		tableId: FormControl<string | null | undefined>,

		/** The size of the table when the profile was generated. */
		tableSizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TableDataProfileFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TableDataProfileFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			datasetId: new FormControl<string | null | undefined>(undefined),
			datasetLocation: new FormControl<string | null | undefined>(undefined),
			datasetProjectId: new FormControl<string | null | undefined>(undefined),
			encryptionStatus: new FormControl<GooglePrivacyDlpV2TableDataProfileEncryptionStatus | null | undefined>(undefined),
			expirationTime: new FormControl<string | null | undefined>(undefined),
			failedColumnCount: new FormControl<string | null | undefined>(undefined),
			fullResource: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profileLastGenerated: new FormControl<string | null | undefined>(undefined),
			projectDataProfile: new FormControl<string | null | undefined>(undefined),
			resourceLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			resourceVisibility: new FormControl<GooglePrivacyDlpV2TableDataProfileResourceVisibility | null | undefined>(undefined),
			rowCount: new FormControl<string | null | undefined>(undefined),
			scannedColumnCount: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GooglePrivacyDlpV2ColumnDataProfileState | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
			tableSizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Snapshot of the configurations used to generate the profile. */
	export interface GooglePrivacyDlpV2DataProfileConfigSnapshot {

		/** Configuration for setting up a job to scan resources for profile generation. Only one data profile configuration may exist per organization, folder, or project. The generated data profiles are retained according to the [data retention policy] (https://cloud.google.com/dlp/docs/data-profiles#retention). */
		dataProfileJob?: GooglePrivacyDlpV2DataProfileJobConfig;

		/** Configuration for discovery to scan resources for profile generation. Only one discovery configuration may exist per organization, folder, or project. The generated data profiles are retained according to the [data retention policy] (https://cloud.google.com/dlp/docs/data-profiles#retention). */
		discoveryConfig?: GooglePrivacyDlpV2DiscoveryConfig;

		/** Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used. */
		inspectConfig?: GooglePrivacyDlpV2InspectConfig;
	}

	/** Snapshot of the configurations used to generate the profile. */
	export interface GooglePrivacyDlpV2DataProfileConfigSnapshotFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DataProfileConfigSnapshotFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DataProfileConfigSnapshotFormProperties>({
		});

	}


	/** Configuration for setting up a job to scan resources for profile generation. Only one data profile configuration may exist per organization, folder, or project. The generated data profiles are retained according to the [data retention policy] (https://cloud.google.com/dlp/docs/data-profiles#retention). */
	export interface GooglePrivacyDlpV2DataProfileJobConfig {

		/** Actions to execute at the completion of the job. */
		dataProfileActions?: Array<GooglePrivacyDlpV2DataProfileAction>;

		/** Detection logic for profile generation. Not all template features are used by profiles. FindingLimits, include_quote and exclude_info_types have no impact on data profiling. Multiple templates may be provided if there is data in multiple regions. At most one template must be specified per-region (including "global"). Each region is scanned using the applicable template. If no region-specific template is specified, but a "global" template is specified, it will be copied to that region and used instead. If no global or region-specific template is provided for a region with data, that region's data will not be scanned. For more information, see https://cloud.google.com/dlp/docs/data-profiles#data-residency. */
		inspectTemplates?: Array<string>;

		/** The data that will be profiled. */
		location?: GooglePrivacyDlpV2DataProfileLocation;

		/** The project that will run the scan. The DLP service account that exists within this project must have access to all resources that are profiled, and the Cloud DLP API must be enabled. */
		projectId?: string | null;
	}

	/** Configuration for setting up a job to scan resources for profile generation. Only one data profile configuration may exist per organization, folder, or project. The generated data profiles are retained according to the [data retention policy] (https://cloud.google.com/dlp/docs/data-profiles#retention). */
	export interface GooglePrivacyDlpV2DataProfileJobConfigFormProperties {

		/** The project that will run the scan. The DLP service account that exists within this project must have access to all resources that are profiled, and the Cloud DLP API must be enabled. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DataProfileJobConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DataProfileJobConfigFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data that will be profiled. */
	export interface GooglePrivacyDlpV2DataProfileLocation {

		/** The ID of the Folder within an organization to scan. */
		folderId?: string | null;

		/** The ID of an organization to scan. */
		organizationId?: string | null;
	}

	/** The data that will be profiled. */
	export interface GooglePrivacyDlpV2DataProfileLocationFormProperties {

		/** The ID of the Folder within an organization to scan. */
		folderId: FormControl<string | null | undefined>,

		/** The ID of an organization to scan. */
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DataProfileLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DataProfileLocationFormProperties>({
			folderId: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2TableDataProfileEncryptionStatus { ENCRYPTION_STATUS_UNSPECIFIED = 0, ENCRYPTION_GOOGLE_MANAGED = 1, ENCRYPTION_CUSTOMER_MANAGED = 2 }

	export enum GooglePrivacyDlpV2TableDataProfileResourceVisibility { RESOURCE_VISIBILITY_UNSPECIFIED = 0, RESOURCE_VISIBILITY_PUBLIC = 1, RESOURCE_VISIBILITY_RESTRICTED = 2 }


	/** Pub/Sub topic message for a DataProfileAction.PubSubNotification event. To receive a message of protocol buffer schema type, convert the message data to an object of this proto class. */
	export interface GooglePrivacyDlpV2DataProfilePubSubMessage {

		/** The event that caused the Pub/Sub message to be sent. */
		event?: GooglePrivacyDlpV2PubSubNotificationEvent | null;

		/** The profile for a scanned table. */
		profile?: GooglePrivacyDlpV2TableDataProfile;
	}

	/** Pub/Sub topic message for a DataProfileAction.PubSubNotification event. To receive a message of protocol buffer schema type, convert the message data to an object of this proto class. */
	export interface GooglePrivacyDlpV2DataProfilePubSubMessageFormProperties {

		/** The event that caused the Pub/Sub message to be sent. */
		event: FormControl<GooglePrivacyDlpV2PubSubNotificationEvent | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DataProfilePubSubMessageFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DataProfilePubSubMessageFormProperties>({
			event: new FormControl<GooglePrivacyDlpV2PubSubNotificationEvent | null | undefined>(undefined),
		});

	}


	/** Message for a date time object. e.g. 2018-01-01, 5th August. */
	export interface GooglePrivacyDlpV2DateTime {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		date?: GoogleTypeDate;

		/** Day of week */
		dayOfWeek?: GooglePrivacyDlpV2ValueDayOfWeekValue | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		time?: GoogleTypeTimeOfDay;

		/** Time zone of the date time object. */
		timeZone?: GooglePrivacyDlpV2TimeZone;
	}

	/** Message for a date time object. e.g. 2018-01-01, 5th August. */
	export interface GooglePrivacyDlpV2DateTimeFormProperties {

		/** Day of week */
		dayOfWeek: FormControl<GooglePrivacyDlpV2ValueDayOfWeekValue | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DateTimeFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DateTimeFormProperties>({
			dayOfWeek: new FormControl<GooglePrivacyDlpV2ValueDayOfWeekValue | null | undefined>(undefined),
		});

	}


	/** Time zone of the date time object. */
	export interface GooglePrivacyDlpV2TimeZone {

		/** Set only if the offset can be determined. Positive for time ahead of UTC. E.g. For "UTC-9", this value is -540. */
		offsetMinutes?: number | null;
	}

	/** Time zone of the date time object. */
	export interface GooglePrivacyDlpV2TimeZoneFormProperties {

		/** Set only if the offset can be determined. Positive for time ahead of UTC. E.g. For "UTC-9", this value is -540. */
		offsetMinutes: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TimeZoneFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TimeZoneFormProperties>({
			offsetMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request to de-identify a ContentItem. */
	export interface GooglePrivacyDlpV2DeidentifyContentRequest {

		/** The configuration that controls how the data will change. */
		deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;

		/** Template to use. Any configuration directly specified in deidentify_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
		deidentifyTemplateName?: string | null;

		/** Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used. */
		inspectConfig?: GooglePrivacyDlpV2InspectConfig;

		/** Template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
		inspectTemplateName?: string | null;
		item?: GooglePrivacyDlpV2ContentItem;

		/** Deprecated. This field has no effect. */
		locationId?: string | null;
	}

	/** Request to de-identify a ContentItem. */
	export interface GooglePrivacyDlpV2DeidentifyContentRequestFormProperties {

		/** Template to use. Any configuration directly specified in deidentify_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
		deidentifyTemplateName: FormControl<string | null | undefined>,

		/** Template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
		inspectTemplateName: FormControl<string | null | undefined>,

		/** Deprecated. This field has no effect. */
		locationId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DeidentifyContentRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeidentifyContentRequestFormProperties>({
			deidentifyTemplateName: new FormControl<string | null | undefined>(undefined),
			inspectTemplateName: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of de-identifying a ContentItem. */
	export interface GooglePrivacyDlpV2DeidentifyContentResponse {
		item?: GooglePrivacyDlpV2ContentItem;

		/** Overview of the modifications that occurred. */
		overview?: GooglePrivacyDlpV2TransformationOverview;
	}

	/** Results of de-identifying a ContentItem. */
	export interface GooglePrivacyDlpV2DeidentifyContentResponseFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DeidentifyContentResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeidentifyContentResponseFormProperties>({
		});

	}


	/** Overview of the modifications that occurred. */
	export interface GooglePrivacyDlpV2TransformationOverview {

		/** Transformations applied to the dataset. */
		transformationSummaries?: Array<GooglePrivacyDlpV2TransformationSummary>;

		/** Total size in bytes that were transformed in some way. */
		transformedBytes?: string | null;
	}

	/** Overview of the modifications that occurred. */
	export interface GooglePrivacyDlpV2TransformationOverviewFormProperties {

		/** Total size in bytes that were transformed in some way. */
		transformedBytes: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TransformationOverviewFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TransformationOverviewFormProperties>({
			transformedBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of a single transformation. Only one of 'transformation', 'field_transformation', or 'record_suppress' will be set. */
	export interface GooglePrivacyDlpV2TransformationSummary {

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;

		/** The field transformation that was applied. If multiple field transformations are requested for a single field, this list will contain all of them; otherwise, only one is supplied. */
		fieldTransformations?: Array<GooglePrivacyDlpV2FieldTransformation>;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;

		/** Configuration to suppress records whose suppression conditions evaluate to true. */
		recordSuppress?: GooglePrivacyDlpV2RecordSuppression;

		/** Collection of all transformations that took place or had an error. */
		results?: Array<GooglePrivacyDlpV2SummaryResult>;

		/** A rule for transforming a value. */
		transformation?: GooglePrivacyDlpV2PrimitiveTransformation;

		/** Total size in bytes that were transformed in some way. */
		transformedBytes?: string | null;
	}

	/** Summary of a single transformation. Only one of 'transformation', 'field_transformation', or 'record_suppress' will be set. */
	export interface GooglePrivacyDlpV2TransformationSummaryFormProperties {

		/** Total size in bytes that were transformed in some way. */
		transformedBytes: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TransformationSummaryFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TransformationSummaryFormProperties>({
			transformedBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection that informs the user the number of times a particular `TransformationResultCode` and error details occurred. */
	export interface GooglePrivacyDlpV2SummaryResult {

		/** Outcome of the transformation. */
		code?: GooglePrivacyDlpV2SummaryResultCode | null;

		/** Number of transformations counted by this result. */
		count?: string | null;

		/** A place for warnings or errors to show up if a transformation didn't work as expected. */
		details?: string | null;
	}

	/** A collection that informs the user the number of times a particular `TransformationResultCode` and error details occurred. */
	export interface GooglePrivacyDlpV2SummaryResultFormProperties {

		/** Outcome of the transformation. */
		code: FormControl<GooglePrivacyDlpV2SummaryResultCode | null | undefined>,

		/** Number of transformations counted by this result. */
		count: FormControl<string | null | undefined>,

		/** A place for warnings or errors to show up if a transformation didn't work as expected. */
		details: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2SummaryResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2SummaryResultFormProperties>({
			code: new FormControl<GooglePrivacyDlpV2SummaryResultCode | null | undefined>(undefined),
			count: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2SummaryResultCode { TRANSFORMATION_RESULT_CODE_UNSPECIFIED = 0, SUCCESS = 1, ERROR = 2 }


	/** Combines all of the information about a DLP job. */
	export interface GooglePrivacyDlpV2DlpJob {

		/** Events that should occur after the job has completed. */
		actionDetails?: Array<GooglePrivacyDlpV2ActionDetails>;

		/** Time when the job was created. */
		createTime?: string | null;

		/** Time when the job finished. */
		endTime?: string | null;

		/** A stream of errors encountered running the job. */
		errors?: Array<GooglePrivacyDlpV2Error>;

		/** The results of an inspect DataSource job. */
		inspectDetails?: GooglePrivacyDlpV2InspectDataSourceDetails;

		/** If created by a job trigger, the resource name of the trigger that instantiated the job. */
		jobTriggerName?: string | null;

		/** Time when the job was last modified by the system. */
		lastModified?: string | null;

		/** The server-assigned name. */
		name?: string | null;

		/** Result of a risk analysis operation request. */
		riskDetails?: GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails;

		/** Time when the job started. */
		startTime?: string | null;

		/** State of a job. */
		state?: GooglePrivacyDlpV2DlpJobState | null;

		/** The type of job. */
		type?: GooglePrivacyDlpV2DlpJobType | null;
	}

	/** Combines all of the information about a DLP job. */
	export interface GooglePrivacyDlpV2DlpJobFormProperties {

		/** Time when the job was created. */
		createTime: FormControl<string | null | undefined>,

		/** Time when the job finished. */
		endTime: FormControl<string | null | undefined>,

		/** If created by a job trigger, the resource name of the trigger that instantiated the job. */
		jobTriggerName: FormControl<string | null | undefined>,

		/** Time when the job was last modified by the system. */
		lastModified: FormControl<string | null | undefined>,

		/** The server-assigned name. */
		name: FormControl<string | null | undefined>,

		/** Time when the job started. */
		startTime: FormControl<string | null | undefined>,

		/** State of a job. */
		state: FormControl<GooglePrivacyDlpV2DlpJobState | null | undefined>,

		/** The type of job. */
		type: FormControl<GooglePrivacyDlpV2DlpJobType | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DlpJobFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DlpJobFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			jobTriggerName: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GooglePrivacyDlpV2DlpJobState | null | undefined>(undefined),
			type: new FormControl<GooglePrivacyDlpV2DlpJobType | null | undefined>(undefined),
		});

	}


	/** The results of an inspect DataSource job. */
	export interface GooglePrivacyDlpV2InspectDataSourceDetails {

		/** Snapshot of the inspection configuration. */
		requestedOptions?: GooglePrivacyDlpV2RequestedOptions;

		/** All result fields mentioned below are updated while the job is processing. */
		result?: GooglePrivacyDlpV2Result;
	}

	/** The results of an inspect DataSource job. */
	export interface GooglePrivacyDlpV2InspectDataSourceDetailsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2InspectDataSourceDetailsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectDataSourceDetailsFormProperties>({
		});

	}


	/** Snapshot of the inspection configuration. */
	export interface GooglePrivacyDlpV2RequestedOptions {

		/** Controls what and how to inspect for findings. */
		jobConfig?: GooglePrivacyDlpV2InspectJobConfig;

		/** The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more. */
		snapshotInspectTemplate?: GooglePrivacyDlpV2InspectTemplate;
	}

	/** Snapshot of the inspection configuration. */
	export interface GooglePrivacyDlpV2RequestedOptionsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RequestedOptionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RequestedOptionsFormProperties>({
		});

	}


	/** All result fields mentioned below are updated while the job is processing. */
	export interface GooglePrivacyDlpV2Result {

		/** Statistics related to processing hybrid inspect requests. */
		hybridStats?: GooglePrivacyDlpV2HybridInspectStatistics;

		/** Statistics of how many instances of each info type were found during inspect job. */
		infoTypeStats?: Array<GooglePrivacyDlpV2InfoTypeStats>;

		/** Total size in bytes that were processed. */
		processedBytes?: string | null;

		/** Estimate of the number of bytes to process. */
		totalEstimatedBytes?: string | null;
	}

	/** All result fields mentioned below are updated while the job is processing. */
	export interface GooglePrivacyDlpV2ResultFormProperties {

		/** Total size in bytes that were processed. */
		processedBytes: FormControl<string | null | undefined>,

		/** Estimate of the number of bytes to process. */
		totalEstimatedBytes: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ResultFormProperties>({
			processedBytes: new FormControl<string | null | undefined>(undefined),
			totalEstimatedBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics related to processing hybrid inspect requests. */
	export interface GooglePrivacyDlpV2HybridInspectStatistics {

		/** The number of hybrid inspection requests aborted because the job ran out of quota or was ended before they could be processed. */
		abortedCount?: string | null;

		/** The number of hybrid requests currently being processed. Only populated when called via method `getDlpJob`. A burst of traffic may cause hybrid inspect requests to be enqueued. Processing will take place as quickly as possible, but resource limitations may impact how long a request is enqueued for. */
		pendingCount?: string | null;

		/** The number of hybrid inspection requests processed within this job. */
		processedCount?: string | null;
	}

	/** Statistics related to processing hybrid inspect requests. */
	export interface GooglePrivacyDlpV2HybridInspectStatisticsFormProperties {

		/** The number of hybrid inspection requests aborted because the job ran out of quota or was ended before they could be processed. */
		abortedCount: FormControl<string | null | undefined>,

		/** The number of hybrid requests currently being processed. Only populated when called via method `getDlpJob`. A burst of traffic may cause hybrid inspect requests to be enqueued. Processing will take place as quickly as possible, but resource limitations may impact how long a request is enqueued for. */
		pendingCount: FormControl<string | null | undefined>,

		/** The number of hybrid inspection requests processed within this job. */
		processedCount: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2HybridInspectStatisticsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HybridInspectStatisticsFormProperties>({
			abortedCount: new FormControl<string | null | undefined>(undefined),
			pendingCount: new FormControl<string | null | undefined>(undefined),
			processedCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics regarding a specific InfoType. */
	export interface GooglePrivacyDlpV2InfoTypeStats {

		/** Number of findings for this infoType. */
		count?: string | null;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;
	}

	/** Statistics regarding a specific InfoType. */
	export interface GooglePrivacyDlpV2InfoTypeStatsFormProperties {

		/** Number of findings for this infoType. */
		count: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InfoTypeStatsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeStatsFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2DlpJobState { JOB_STATE_UNSPECIFIED = 0, PENDING = 1, RUNNING = 2, DONE = 3, CANCELED = 4, FAILED = 5, ACTIVE = 6 }

	export enum GooglePrivacyDlpV2DlpJobType { DLP_JOB_TYPE_UNSPECIFIED = 0, INSPECT_JOB = 1, RISK_ANALYSIS_JOB = 2 }


	/** Represents a piece of potentially sensitive content. */
	export interface GooglePrivacyDlpV2Finding {

		/** Timestamp when finding was detected. */
		createTime?: string | null;

		/** The unique finding id. */
		findingId?: string | null;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;

		/** Time the job started that produced this finding. */
		jobCreateTime?: string | null;

		/** The job that stored the finding. */
		jobName?: string | null;

		/** The labels associated with this `Finding`. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"` */
		labels?: {[id: string]: string };

		/** Confidence of how likely it is that the `info_type` is correct. */
		likelihood?: GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null;

		/** Specifies the location of the finding. */
		location?: GooglePrivacyDlpV2Location;

		/** Resource name in format projects/{project}/locations/{location}/findings/{finding} Populated only when viewing persisted findings. */
		name?: string | null;

		/** The content that was found. Even if the content is not textual, it may be converted to a textual representation here. Provided if `include_quote` is true and the finding is less than or equal to 4096 bytes long. If the finding exceeds 4096 bytes in length, the quote may be omitted. */
		quote?: string | null;

		/** Message for infoType-dependent details parsed from quote. */
		quoteInfo?: GooglePrivacyDlpV2QuoteInfo;

		/** The job that stored the finding. */
		resourceName?: string | null;

		/** Job trigger name, if applicable, for this finding. */
		triggerName?: string | null;
	}

	/** Represents a piece of potentially sensitive content. */
	export interface GooglePrivacyDlpV2FindingFormProperties {

		/** Timestamp when finding was detected. */
		createTime: FormControl<string | null | undefined>,

		/** The unique finding id. */
		findingId: FormControl<string | null | undefined>,

		/** Time the job started that produced this finding. */
		jobCreateTime: FormControl<string | null | undefined>,

		/** The job that stored the finding. */
		jobName: FormControl<string | null | undefined>,

		/** The labels associated with this `Finding`. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"` */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Confidence of how likely it is that the `info_type` is correct. */
		likelihood: FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>,

		/** Resource name in format projects/{project}/locations/{location}/findings/{finding} Populated only when viewing persisted findings. */
		name: FormControl<string | null | undefined>,

		/** The content that was found. Even if the content is not textual, it may be converted to a textual representation here. Provided if `include_quote` is true and the finding is less than or equal to 4096 bytes long. If the finding exceeds 4096 bytes in length, the quote may be omitted. */
		quote: FormControl<string | null | undefined>,

		/** The job that stored the finding. */
		resourceName: FormControl<string | null | undefined>,

		/** Job trigger name, if applicable, for this finding. */
		triggerName: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2FindingFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2FindingFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			findingId: new FormControl<string | null | undefined>(undefined),
			jobCreateTime: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			likelihood: new FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quote: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			triggerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the location of the finding. */
	export interface GooglePrivacyDlpV2Location {

		/** Generic half-open interval [start, end) */
		byteRange?: GooglePrivacyDlpV2Range;

		/** Generic half-open interval [start, end) */
		codepointRange?: GooglePrivacyDlpV2Range;

		/** Represents a container that may contain DLP findings. Examples of a container include a file, table, or database record. */
		container?: GooglePrivacyDlpV2Container;

		/** List of nested objects pointing to the precise location of the finding within the file or record. */
		contentLocations?: Array<GooglePrivacyDlpV2ContentLocation>;
	}

	/** Specifies the location of the finding. */
	export interface GooglePrivacyDlpV2LocationFormProperties {
	}
	export function CreateGooglePrivacyDlpV2LocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LocationFormProperties>({
		});

	}


	/** Generic half-open interval [start, end) */
	export interface GooglePrivacyDlpV2Range {

		/** Index of the last character of the range (exclusive). */
		end?: string | null;

		/** Index of the first character of the range (inclusive). */
		start?: string | null;
	}

	/** Generic half-open interval [start, end) */
	export interface GooglePrivacyDlpV2RangeFormProperties {

		/** Index of the last character of the range (exclusive). */
		end: FormControl<string | null | undefined>,

		/** Index of the first character of the range (inclusive). */
		start: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2RangeFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RangeFormProperties>({
			end: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for infoType-dependent details parsed from quote. */
	export interface GooglePrivacyDlpV2QuoteInfo {

		/** Message for a date time object. e.g. 2018-01-01, 5th August. */
		dateTime?: GooglePrivacyDlpV2DateTime;
	}

	/** Message for infoType-dependent details parsed from quote. */
	export interface GooglePrivacyDlpV2QuoteInfoFormProperties {
	}
	export function CreateGooglePrivacyDlpV2QuoteInfoFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2QuoteInfoFormProperties>({
		});

	}


	/** The request message for finishing a DLP hybrid job. */
	export interface GooglePrivacyDlpV2FinishDlpJobRequest {
	}

	/** The request message for finishing a DLP hybrid job. */
	export interface GooglePrivacyDlpV2FinishDlpJobRequestFormProperties {
	}
	export function CreateGooglePrivacyDlpV2FinishDlpJobRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2FinishDlpJobRequestFormProperties>({
		});

	}


	/** An individual hybrid item to inspect. Will be stored temporarily during processing. */
	export interface GooglePrivacyDlpV2HybridContentItem {

		/** Populate to associate additional data with each finding. */
		findingDetails?: GooglePrivacyDlpV2HybridFindingDetails;
		item?: GooglePrivacyDlpV2ContentItem;
	}

	/** An individual hybrid item to inspect. Will be stored temporarily during processing. */
	export interface GooglePrivacyDlpV2HybridContentItemFormProperties {
	}
	export function CreateGooglePrivacyDlpV2HybridContentItemFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HybridContentItemFormProperties>({
		});

	}


	/** Populate to associate additional data with each finding. */
	export interface GooglePrivacyDlpV2HybridFindingDetails {

		/** Represents a container that may contain DLP findings. Examples of a container include a file, table, or database record. */
		containerDetails?: GooglePrivacyDlpV2Container;

		/** Offset in bytes of the line, from the beginning of the file, where the finding is located. Populate if the item being scanned is only part of a bigger item, such as a shard of a file and you want to track the absolute position of the finding. */
		fileOffset?: string | null;

		/** Labels to represent user provided metadata about the data being inspected. If configured by the job, some key values may be required. The labels associated with `Finding`'s produced by hybrid inspection. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"` */
		labels?: {[id: string]: string };

		/** Offset of the row for tables. Populate if the row(s) being scanned are part of a bigger dataset and you want to keep track of their absolute position. */
		rowOffset?: string | null;

		/** Instructions regarding the table content being inspected. */
		tableOptions?: GooglePrivacyDlpV2TableOptions;
	}

	/** Populate to associate additional data with each finding. */
	export interface GooglePrivacyDlpV2HybridFindingDetailsFormProperties {

		/** Offset in bytes of the line, from the beginning of the file, where the finding is located. Populate if the item being scanned is only part of a bigger item, such as a shard of a file and you want to track the absolute position of the finding. */
		fileOffset: FormControl<string | null | undefined>,

		/** Labels to represent user provided metadata about the data being inspected. If configured by the job, some key values may be required. The labels associated with `Finding`'s produced by hybrid inspection. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"` */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Offset of the row for tables. Populate if the row(s) being scanned are part of a bigger dataset and you want to keep track of their absolute position. */
		rowOffset: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2HybridFindingDetailsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HybridFindingDetailsFormProperties>({
			fileOffset: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			rowOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to search for potentially sensitive info in a custom location. */
	export interface GooglePrivacyDlpV2HybridInspectDlpJobRequest {

		/** An individual hybrid item to inspect. Will be stored temporarily during processing. */
		hybridItem?: GooglePrivacyDlpV2HybridContentItem;
	}

	/** Request to search for potentially sensitive info in a custom location. */
	export interface GooglePrivacyDlpV2HybridInspectDlpJobRequestFormProperties {
	}
	export function CreateGooglePrivacyDlpV2HybridInspectDlpJobRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HybridInspectDlpJobRequestFormProperties>({
		});

	}


	/** Request to search for potentially sensitive info in a custom location. */
	export interface GooglePrivacyDlpV2HybridInspectJobTriggerRequest {

		/** An individual hybrid item to inspect. Will be stored temporarily during processing. */
		hybridItem?: GooglePrivacyDlpV2HybridContentItem;
	}

	/** Request to search for potentially sensitive info in a custom location. */
	export interface GooglePrivacyDlpV2HybridInspectJobTriggerRequestFormProperties {
	}
	export function CreateGooglePrivacyDlpV2HybridInspectJobTriggerRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HybridInspectJobTriggerRequestFormProperties>({
		});

	}


	/** Quota exceeded errors will be thrown once quota has been met. */
	export interface GooglePrivacyDlpV2HybridInspectResponse {
	}

	/** Quota exceeded errors will be thrown once quota has been met. */
	export interface GooglePrivacyDlpV2HybridInspectResponseFormProperties {
	}
	export function CreateGooglePrivacyDlpV2HybridInspectResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HybridInspectResponseFormProperties>({
		});

	}


	/** Configuration for determining how redaction of images should occur. */
	export interface GooglePrivacyDlpV2ImageRedactionConfig {

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;

		/** If true, all text found in the image, regardless whether it matches an info_type, is redacted. Only one should be provided. */
		redactAllText?: boolean | null;

		/** Represents a color in the RGB color space. */
		redactionColor?: GooglePrivacyDlpV2Color;
	}

	/** Configuration for determining how redaction of images should occur. */
	export interface GooglePrivacyDlpV2ImageRedactionConfigFormProperties {

		/** If true, all text found in the image, regardless whether it matches an info_type, is redacted. Only one should be provided. */
		redactAllText: FormControl<boolean | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ImageRedactionConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ImageRedactionConfigFormProperties>({
			redactAllText: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Classification of infoTypes to organize them according to geographic location, industry, and data type. */
	export interface GooglePrivacyDlpV2InfoTypeCategory {

		/** The group of relevant businesses where this infoType is commonly used */
		industryCategory?: GooglePrivacyDlpV2InfoTypeCategoryIndustryCategory | null;

		/** The region or country that issued the ID or document represented by the infoType. */
		locationCategory?: GooglePrivacyDlpV2InfoTypeCategoryLocationCategory | null;

		/** The class of identifiers where this infoType belongs */
		typeCategory?: GooglePrivacyDlpV2InfoTypeCategoryTypeCategory | null;
	}

	/** Classification of infoTypes to organize them according to geographic location, industry, and data type. */
	export interface GooglePrivacyDlpV2InfoTypeCategoryFormProperties {

		/** The group of relevant businesses where this infoType is commonly used */
		industryCategory: FormControl<GooglePrivacyDlpV2InfoTypeCategoryIndustryCategory | null | undefined>,

		/** The region or country that issued the ID or document represented by the infoType. */
		locationCategory: FormControl<GooglePrivacyDlpV2InfoTypeCategoryLocationCategory | null | undefined>,

		/** The class of identifiers where this infoType belongs */
		typeCategory: FormControl<GooglePrivacyDlpV2InfoTypeCategoryTypeCategory | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InfoTypeCategoryFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeCategoryFormProperties>({
			industryCategory: new FormControl<GooglePrivacyDlpV2InfoTypeCategoryIndustryCategory | null | undefined>(undefined),
			locationCategory: new FormControl<GooglePrivacyDlpV2InfoTypeCategoryLocationCategory | null | undefined>(undefined),
			typeCategory: new FormControl<GooglePrivacyDlpV2InfoTypeCategoryTypeCategory | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2InfoTypeCategoryIndustryCategory { INDUSTRY_UNSPECIFIED = 0, FINANCE = 1, HEALTH = 2, TELECOMMUNICATIONS = 3 }

	export enum GooglePrivacyDlpV2InfoTypeCategoryLocationCategory { LOCATION_UNSPECIFIED = 0, GLOBAL = 1, ARGENTINA = 2, AUSTRALIA = 3, BELGIUM = 4, BRAZIL = 5, CANADA = 6, CHILE = 7, CHINA = 8, COLOMBIA = 9, CROATIA = 10, DENMARK = 11, FRANCE = 12, FINLAND = 13, GERMANY = 14, HONG_KONG = 15, INDIA = 16, INDONESIA = 17, IRELAND = 18, ISRAEL = 19, ITALY = 20, JAPAN = 21, KOREA = 22, MEXICO = 23, THE_NETHERLANDS = 24, NEW_ZEALAND = 25, NORWAY = 26, PARAGUAY = 27, PERU = 28, POLAND = 29, PORTUGAL = 30, SINGAPORE = 31, SOUTH_AFRICA = 32, SPAIN = 33, SWEDEN = 34, SWITZERLAND = 35, TAIWAN = 36, THAILAND = 37, TURKEY = 38, UNITED_KINGDOM = 39, UNITED_STATES = 40, URUGUAY = 41, VENEZUELA = 42, INTERNAL = 43 }

	export enum GooglePrivacyDlpV2InfoTypeCategoryTypeCategory { TYPE_UNSPECIFIED = 0, PII = 1, SPII = 2, DEMOGRAPHIC = 3, CREDENTIAL = 4, GOVERNMENT_ID = 5, DOCUMENT = 6, CONTEXTUAL_INFORMATION = 7 }


	/** InfoType description. */
	export interface GooglePrivacyDlpV2InfoTypeDescription {

		/** The category of the infoType. */
		categories?: Array<GooglePrivacyDlpV2InfoTypeCategory>;

		/** Description of the infotype. Translated when language is provided in the request. */
		description?: string | null;

		/** Human readable form of the infoType name. */
		displayName?: string | null;

		/** Internal name of the infoType. */
		name?: string | null;

		/** Score is calculated from of all elements in the data profile. A higher level means the data is more sensitive. */
		sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;

		/** Which parts of the API supports this InfoType. */
		supportedBy?: Array<string>;

		/** A list of available versions for the infotype. */
		versions?: Array<GooglePrivacyDlpV2VersionDescription>;
	}

	/** InfoType description. */
	export interface GooglePrivacyDlpV2InfoTypeDescriptionFormProperties {

		/** Description of the infotype. Translated when language is provided in the request. */
		description: FormControl<string | null | undefined>,

		/** Human readable form of the infoType name. */
		displayName: FormControl<string | null | undefined>,

		/** Internal name of the infoType. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InfoTypeDescriptionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeDescriptionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about each available version for an infotype. */
	export interface GooglePrivacyDlpV2VersionDescription {

		/** Description of the version. */
		description?: string | null;

		/** Name of the version */
		version?: string | null;
	}

	/** Details about each available version for an infotype. */
	export interface GooglePrivacyDlpV2VersionDescriptionFormProperties {

		/** Description of the version. */
		description: FormControl<string | null | undefined>,

		/** Name of the version */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2VersionDescriptionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2VersionDescriptionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to search for potentially sensitive info in a ContentItem. */
	export interface GooglePrivacyDlpV2InspectContentRequest {

		/** Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used. */
		inspectConfig?: GooglePrivacyDlpV2InspectConfig;

		/** Template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
		inspectTemplateName?: string | null;
		item?: GooglePrivacyDlpV2ContentItem;

		/** Deprecated. This field has no effect. */
		locationId?: string | null;
	}

	/** Request to search for potentially sensitive info in a ContentItem. */
	export interface GooglePrivacyDlpV2InspectContentRequestFormProperties {

		/** Template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
		inspectTemplateName: FormControl<string | null | undefined>,

		/** Deprecated. This field has no effect. */
		locationId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InspectContentRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectContentRequestFormProperties>({
			inspectTemplateName: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of inspecting an item. */
	export interface GooglePrivacyDlpV2InspectContentResponse {

		/** All the findings for a single scanned item. */
		result?: GooglePrivacyDlpV2InspectResult;
	}

	/** Results of inspecting an item. */
	export interface GooglePrivacyDlpV2InspectContentResponseFormProperties {
	}
	export function CreateGooglePrivacyDlpV2InspectContentResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectContentResponseFormProperties>({
		});

	}


	/** All the findings for a single scanned item. */
	export interface GooglePrivacyDlpV2InspectResult {

		/** List of findings for an item. */
		findings?: Array<GooglePrivacyDlpV2Finding>;

		/** If true, then this item might have more findings than were returned, and the findings returned are an arbitrary subset of all findings. The findings list might be truncated because the input items were too large, or because the server reached the maximum amount of resources allowed for a single API call. For best results, divide the input into smaller batches. */
		findingsTruncated?: boolean | null;
	}

	/** All the findings for a single scanned item. */
	export interface GooglePrivacyDlpV2InspectResultFormProperties {

		/** If true, then this item might have more findings than were returned, and the findings returned are an arbitrary subset of all findings. The findings list might be truncated because the input items were too large, or because the server reached the maximum amount of resources allowed for a single API call. For best results, divide the input into smaller batches. */
		findingsTruncated: FormControl<boolean | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InspectResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectResultFormProperties>({
			findingsTruncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Summary statistics of a custom dictionary. */
	export interface GooglePrivacyDlpV2LargeCustomDictionaryStats {

		/** Approximate number of distinct phrases in the dictionary. */
		approxNumPhrases?: string | null;
	}

	/** Summary statistics of a custom dictionary. */
	export interface GooglePrivacyDlpV2LargeCustomDictionaryStatsFormProperties {

		/** Approximate number of distinct phrases in the dictionary. */
		approxNumPhrases: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2LargeCustomDictionaryStatsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LargeCustomDictionaryStatsFormProperties>({
			approxNumPhrases: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListDeidentifyTemplates. */
	export interface GooglePrivacyDlpV2ListDeidentifyTemplatesResponse {

		/** List of deidentify templates, up to page_size in ListDeidentifyTemplatesRequest. */
		deidentifyTemplates?: Array<GooglePrivacyDlpV2DeidentifyTemplate>;

		/** If the next page is available then the next page token to be used in the following ListDeidentifyTemplates request. */
		nextPageToken?: string | null;
	}

	/** Response message for ListDeidentifyTemplates. */
	export interface GooglePrivacyDlpV2ListDeidentifyTemplatesResponseFormProperties {

		/** If the next page is available then the next page token to be used in the following ListDeidentifyTemplates request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ListDeidentifyTemplatesResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ListDeidentifyTemplatesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListDiscoveryConfigs. */
	export interface GooglePrivacyDlpV2ListDiscoveryConfigsResponse {

		/** List of configs, up to page_size in ListDiscoveryConfigsRequest. */
		discoveryConfigs?: Array<GooglePrivacyDlpV2DiscoveryConfig>;

		/** If the next page is available then this value is the next page token to be used in the following ListDiscoveryConfigs request. */
		nextPageToken?: string | null;
	}

	/** Response message for ListDiscoveryConfigs. */
	export interface GooglePrivacyDlpV2ListDiscoveryConfigsResponseFormProperties {

		/** If the next page is available then this value is the next page token to be used in the following ListDiscoveryConfigs request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ListDiscoveryConfigsResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ListDiscoveryConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for listing DLP jobs. */
	export interface GooglePrivacyDlpV2ListDlpJobsResponse {

		/** A list of DlpJobs that matches the specified filter in the request. */
		jobs?: Array<GooglePrivacyDlpV2DlpJob>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for listing DLP jobs. */
	export interface GooglePrivacyDlpV2ListDlpJobsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ListDlpJobsResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ListDlpJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to the ListInfoTypes request. */
	export interface GooglePrivacyDlpV2ListInfoTypesResponse {

		/** Set of sensitive infoTypes. */
		infoTypes?: Array<GooglePrivacyDlpV2InfoTypeDescription>;
	}

	/** Response to the ListInfoTypes request. */
	export interface GooglePrivacyDlpV2ListInfoTypesResponseFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ListInfoTypesResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ListInfoTypesResponseFormProperties>({
		});

	}


	/** Response message for ListInspectTemplates. */
	export interface GooglePrivacyDlpV2ListInspectTemplatesResponse {

		/** List of inspectTemplates, up to page_size in ListInspectTemplatesRequest. */
		inspectTemplates?: Array<GooglePrivacyDlpV2InspectTemplate>;

		/** If the next page is available then the next page token to be used in the following ListInspectTemplates request. */
		nextPageToken?: string | null;
	}

	/** Response message for ListInspectTemplates. */
	export interface GooglePrivacyDlpV2ListInspectTemplatesResponseFormProperties {

		/** If the next page is available then the next page token to be used in the following ListInspectTemplates request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ListInspectTemplatesResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ListInspectTemplatesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListJobTriggers. */
	export interface GooglePrivacyDlpV2ListJobTriggersResponse {

		/** List of triggeredJobs, up to page_size in ListJobTriggersRequest. */
		jobTriggers?: Array<GooglePrivacyDlpV2JobTrigger>;

		/** If the next page is available then this value is the next page token to be used in the following ListJobTriggers request. */
		nextPageToken?: string | null;
	}

	/** Response message for ListJobTriggers. */
	export interface GooglePrivacyDlpV2ListJobTriggersResponseFormProperties {

		/** If the next page is available then this value is the next page token to be used in the following ListJobTriggers request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ListJobTriggersResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ListJobTriggersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListStoredInfoTypes. */
	export interface GooglePrivacyDlpV2ListStoredInfoTypesResponse {

		/** If the next page is available then the next page token to be used in the following ListStoredInfoTypes request. */
		nextPageToken?: string | null;

		/** List of storedInfoTypes, up to page_size in ListStoredInfoTypesRequest. */
		storedInfoTypes?: Array<GooglePrivacyDlpV2StoredInfoType>;
	}

	/** Response message for ListStoredInfoTypes. */
	export interface GooglePrivacyDlpV2ListStoredInfoTypesResponseFormProperties {

		/** If the next page is available then the next page token to be used in the following ListStoredInfoTypes request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ListStoredInfoTypesResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ListStoredInfoTypesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** StoredInfoType resource message that contains information about the current version and any pending updates. */
	export interface GooglePrivacyDlpV2StoredInfoType {

		/** Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state. */
		currentVersion?: GooglePrivacyDlpV2StoredInfoTypeVersion;

		/** Resource name. */
		name?: string | null;

		/** Pending versions of the stored info type. Empty if no versions are pending. */
		pendingVersions?: Array<GooglePrivacyDlpV2StoredInfoTypeVersion>;
	}

	/** StoredInfoType resource message that contains information about the current version and any pending updates. */
	export interface GooglePrivacyDlpV2StoredInfoTypeFormProperties {

		/** Resource name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2StoredInfoTypeFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StoredInfoTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state. */
	export interface GooglePrivacyDlpV2StoredInfoTypeVersion {

		/** Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes. */
		config?: GooglePrivacyDlpV2StoredInfoTypeConfig;

		/** Create timestamp of the version. Read-only, determined by the system when the version is created. */
		createTime?: string | null;

		/** Errors that occurred when creating this storedInfoType version, or anomalies detected in the storedInfoType data that render it unusable. Only the five most recent errors will be displayed, with the most recent error appearing first. For example, some of the data for stored custom dictionaries is put in the user's Cloud Storage bucket, and if this data is modified or deleted by the user or another system, the dictionary becomes invalid. If any errors occur, fix the problem indicated by the error message and use the UpdateStoredInfoType API method to create another version of the storedInfoType to continue using it, reusing the same `config` if it was not the source of the error. */
		errors?: Array<GooglePrivacyDlpV2Error>;

		/** Stored info type version state. Read-only, updated by the system during dictionary creation. */
		state?: GooglePrivacyDlpV2StoredInfoTypeVersionState | null;

		/** Statistics for a StoredInfoType. */
		stats?: GooglePrivacyDlpV2StoredInfoTypeStats;
	}

	/** Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state. */
	export interface GooglePrivacyDlpV2StoredInfoTypeVersionFormProperties {

		/** Create timestamp of the version. Read-only, determined by the system when the version is created. */
		createTime: FormControl<string | null | undefined>,

		/** Stored info type version state. Read-only, updated by the system during dictionary creation. */
		state: FormControl<GooglePrivacyDlpV2StoredInfoTypeVersionState | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2StoredInfoTypeVersionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StoredInfoTypeVersionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GooglePrivacyDlpV2StoredInfoTypeVersionState | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2StoredInfoTypeVersionState { STORED_INFO_TYPE_STATE_UNSPECIFIED = 0, PENDING = 1, READY = 2, FAILED = 3, INVALID = 4 }


	/** Statistics for a StoredInfoType. */
	export interface GooglePrivacyDlpV2StoredInfoTypeStats {

		/** Summary statistics of a custom dictionary. */
		largeCustomDictionary?: GooglePrivacyDlpV2LargeCustomDictionaryStats;
	}

	/** Statistics for a StoredInfoType. */
	export interface GooglePrivacyDlpV2StoredInfoTypeStatsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2StoredInfoTypeStatsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StoredInfoTypeStatsFormProperties>({
		});

	}

	export interface GooglePrivacyDlpV2RecordTransformation {

		/** Findings container modification timestamp, if applicable. */
		containerTimestamp?: string | null;

		/** Container version, if available ("generation" for Cloud Storage). */
		containerVersion?: string | null;

		/** General identifier of a data field in a storage service. */
		fieldId?: GooglePrivacyDlpV2FieldId;
	}
	export interface GooglePrivacyDlpV2RecordTransformationFormProperties {

		/** Findings container modification timestamp, if applicable. */
		containerTimestamp: FormControl<string | null | undefined>,

		/** Container version, if available ("generation" for Cloud Storage). */
		containerVersion: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2RecordTransformationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RecordTransformationFormProperties>({
			containerTimestamp: new FormControl<string | null | undefined>(undefined),
			containerVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle. */
	export interface GooglePrivacyDlpV2RedactImageRequest {

		/** Container for bytes to inspect or redact. */
		byteItem?: GooglePrivacyDlpV2ByteContentItem;

		/** The configuration for specifying what content to redact from images. */
		imageRedactionConfigs?: Array<GooglePrivacyDlpV2ImageRedactionConfig>;

		/** Whether the response should include findings along with the redacted image. */
		includeFindings?: boolean | null;

		/** Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used. */
		inspectConfig?: GooglePrivacyDlpV2InspectConfig;

		/** Deprecated. This field has no effect. */
		locationId?: string | null;
	}

	/** Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle. */
	export interface GooglePrivacyDlpV2RedactImageRequestFormProperties {

		/** Whether the response should include findings along with the redacted image. */
		includeFindings: FormControl<boolean | null | undefined>,

		/** Deprecated. This field has no effect. */
		locationId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2RedactImageRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RedactImageRequestFormProperties>({
			includeFindings: new FormControl<boolean | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of redacting an image. */
	export interface GooglePrivacyDlpV2RedactImageResponse {

		/** If an image was being inspected and the InspectConfig's include_quote was set to true, then this field will include all text, if any, that was found in the image. */
		extractedText?: string | null;

		/** All the findings for a single scanned item. */
		inspectResult?: GooglePrivacyDlpV2InspectResult;

		/** The redacted image. The type will be the same as the original image. */
		redactedImage?: string | null;
	}

	/** Results of redacting an image. */
	export interface GooglePrivacyDlpV2RedactImageResponseFormProperties {

		/** If an image was being inspected and the InspectConfig's include_quote was set to true, then this field will include all text, if any, that was found in the image. */
		extractedText: FormControl<string | null | undefined>,

		/** The redacted image. The type will be the same as the original image. */
		redactedImage: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2RedactImageResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RedactImageResponseFormProperties>({
			extractedText: new FormControl<string | null | undefined>(undefined),
			redactedImage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to re-identify an item. */
	export interface GooglePrivacyDlpV2ReidentifyContentRequest {

		/** Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used. */
		inspectConfig?: GooglePrivacyDlpV2InspectConfig;

		/** Template to use. Any configuration directly specified in `inspect_config` will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
		inspectTemplateName?: string | null;
		item?: GooglePrivacyDlpV2ContentItem;

		/** Deprecated. This field has no effect. */
		locationId?: string | null;

		/** The configuration that controls how the data will change. */
		reidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;

		/** Template to use. References an instance of `DeidentifyTemplate`. Any configuration directly specified in `reidentify_config` or `inspect_config` will override those set in the template. The `DeidentifyTemplate` used must include only reversible transformations. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
		reidentifyTemplateName?: string | null;
	}

	/** Request to re-identify an item. */
	export interface GooglePrivacyDlpV2ReidentifyContentRequestFormProperties {

		/** Template to use. Any configuration directly specified in `inspect_config` will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
		inspectTemplateName: FormControl<string | null | undefined>,

		/** Deprecated. This field has no effect. */
		locationId: FormControl<string | null | undefined>,

		/** Template to use. References an instance of `DeidentifyTemplate`. Any configuration directly specified in `reidentify_config` or `inspect_config` will override those set in the template. The `DeidentifyTemplate` used must include only reversible transformations. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
		reidentifyTemplateName: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ReidentifyContentRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ReidentifyContentRequestFormProperties>({
			inspectTemplateName: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			reidentifyTemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of re-identifying an item. */
	export interface GooglePrivacyDlpV2ReidentifyContentResponse {
		item?: GooglePrivacyDlpV2ContentItem;

		/** Overview of the modifications that occurred. */
		overview?: GooglePrivacyDlpV2TransformationOverview;
	}

	/** Results of re-identifying an item. */
	export interface GooglePrivacyDlpV2ReidentifyContentResponseFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ReidentifyContentResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ReidentifyContentResponseFormProperties>({
		});

	}


	/** A flattened description of a `PrimitiveTransformation` or `RecordSuppression`. */
	export interface GooglePrivacyDlpV2TransformationDescription {

		/** A human-readable string representation of the `RecordCondition` corresponding to this transformation. Set if a `RecordCondition` was used to determine whether or not to apply this transformation. Examples: * (age_field > 85) * (age_field <= 18) * (zip_field exists) * (zip_field == 01234) && (city_field != "Springville") * (zip_field == 01234) && (age_field <= 18) && (city_field exists) */
		condition?: string | null;

		/** A description of the transformation. This is empty for a RECORD_SUPPRESSION, or is the output of calling toString() on the `PrimitiveTransformation` protocol buffer message for any other type of transformation. */
		description?: string | null;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;

		/** The transformation type. */
		type?: GooglePrivacyDlpV2TransformationDescriptionType | null;
	}

	/** A flattened description of a `PrimitiveTransformation` or `RecordSuppression`. */
	export interface GooglePrivacyDlpV2TransformationDescriptionFormProperties {

		/** A human-readable string representation of the `RecordCondition` corresponding to this transformation. Set if a `RecordCondition` was used to determine whether or not to apply this transformation. Examples: * (age_field > 85) * (age_field <= 18) * (zip_field exists) * (zip_field == 01234) && (city_field != "Springville") * (zip_field == 01234) && (age_field <= 18) && (city_field exists) */
		condition: FormControl<string | null | undefined>,

		/** A description of the transformation. This is empty for a RECORD_SUPPRESSION, or is the output of calling toString() on the `PrimitiveTransformation` protocol buffer message for any other type of transformation. */
		description: FormControl<string | null | undefined>,

		/** The transformation type. */
		type: FormControl<GooglePrivacyDlpV2TransformationDescriptionType | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TransformationDescriptionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TransformationDescriptionFormProperties>({
			condition: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GooglePrivacyDlpV2TransformationDescriptionType | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2TransformationDescriptionType { TRANSFORMATION_TYPE_UNSPECIFIED = 0, RECORD_SUPPRESSION = 1, REPLACE_VALUE = 2, REPLACE_DICTIONARY = 3, REDACT = 4, CHARACTER_MASK = 5, CRYPTO_REPLACE_FFX_FPE = 6, FIXED_SIZE_BUCKETING = 7, BUCKETING = 8, REPLACE_WITH_INFO_TYPE = 9, TIME_PART = 10, CRYPTO_HASH = 11, DATE_SHIFT = 12, CRYPTO_DETERMINISTIC_CONFIG = 13, REDACT_IMAGE = 14 }


	/** Details about a single transformation. This object contains a description of the transformation, information about whether the transformation was successfully applied, and the precise location where the transformation occurred. These details are stored in a user-specified BigQuery table. */
	export interface GooglePrivacyDlpV2TransformationDetails {

		/** The top level name of the container where the transformation is located (this will be the source file name or table name). */
		containerName?: string | null;

		/** The name of the job that completed the transformation. */
		resourceName?: string | null;
		statusDetails?: GooglePrivacyDlpV2TransformationResultStatus;

		/** Description of transformation. This would only contain more than one element if there were multiple matching transformations and which one to apply was ambiguous. Not set for states that contain no transformation, currently only state that contains no transformation is TransformationResultStateType.METADATA_UNRETRIEVABLE. */
		transformation?: Array<GooglePrivacyDlpV2TransformationDescription>;

		/** Specifies the location of a transformation. */
		transformationLocation?: GooglePrivacyDlpV2TransformationLocation;

		/** The number of bytes that were transformed. If transformation was unsuccessful or did not take place because there was no content to transform, this will be zero. */
		transformedBytes?: string | null;
	}

	/** Details about a single transformation. This object contains a description of the transformation, information about whether the transformation was successfully applied, and the precise location where the transformation occurred. These details are stored in a user-specified BigQuery table. */
	export interface GooglePrivacyDlpV2TransformationDetailsFormProperties {

		/** The top level name of the container where the transformation is located (this will be the source file name or table name). */
		containerName: FormControl<string | null | undefined>,

		/** The name of the job that completed the transformation. */
		resourceName: FormControl<string | null | undefined>,

		/** The number of bytes that were transformed. If transformation was unsuccessful or did not take place because there was no content to transform, this will be zero. */
		transformedBytes: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TransformationDetailsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TransformationDetailsFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			transformedBytes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GooglePrivacyDlpV2TransformationResultStatus {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		details?: GoogleRpcStatus;

		/** Transformation result status type, this will be either SUCCESS, or it will be the reason for why the transformation was not completely successful. */
		resultStatusType?: GooglePrivacyDlpV2TransformationResultStatusResultStatusType | null;
	}
	export interface GooglePrivacyDlpV2TransformationResultStatusFormProperties {

		/** Transformation result status type, this will be either SUCCESS, or it will be the reason for why the transformation was not completely successful. */
		resultStatusType: FormControl<GooglePrivacyDlpV2TransformationResultStatusResultStatusType | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TransformationResultStatusFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TransformationResultStatusFormProperties>({
			resultStatusType: new FormControl<GooglePrivacyDlpV2TransformationResultStatusResultStatusType | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2TransformationResultStatusResultStatusType { STATE_TYPE_UNSPECIFIED = 0, INVALID_TRANSFORM = 1, BIGQUERY_MAX_ROW_SIZE_EXCEEDED = 2, METADATA_UNRETRIEVABLE = 3, SUCCESS = 4 }


	/** Specifies the location of a transformation. */
	export interface GooglePrivacyDlpV2TransformationLocation {

		/** Information about the functionality of the container where this finding occurred, if available. */
		containerType?: GooglePrivacyDlpV2TransformationLocationContainerType | null;

		/** For infotype transformations, link to the corresponding findings ID so that location information does not need to be duplicated. Each findings ID correlates to an entry in the findings output table, this table only gets created when users specify to save findings (add the save findings action to the request). */
		findingId?: string | null;
		recordTransformation?: GooglePrivacyDlpV2RecordTransformation;
	}

	/** Specifies the location of a transformation. */
	export interface GooglePrivacyDlpV2TransformationLocationFormProperties {

		/** Information about the functionality of the container where this finding occurred, if available. */
		containerType: FormControl<GooglePrivacyDlpV2TransformationLocationContainerType | null | undefined>,

		/** For infotype transformations, link to the corresponding findings ID so that location information does not need to be duplicated. Each findings ID correlates to an entry in the findings output table, this table only gets created when users specify to save findings (add the save findings action to the request). */
		findingId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TransformationLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TransformationLocationFormProperties>({
			containerType: new FormControl<GooglePrivacyDlpV2TransformationLocationContainerType | null | undefined>(undefined),
			findingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2TransformationLocationContainerType { TRANSFORM_UNKNOWN_CONTAINER = 0, TRANSFORM_BODY = 1, TRANSFORM_METADATA = 2, TRANSFORM_TABLE = 3 }


	/** Request message for UpdateDeidentifyTemplate. */
	export interface GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest {

		/** DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more. */
		deidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;

		/** Mask to control which fields get updated. */
		updateMask?: string | null;
	}

	/** Request message for UpdateDeidentifyTemplate. */
	export interface GooglePrivacyDlpV2UpdateDeidentifyTemplateRequestFormProperties {

		/** Mask to control which fields get updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2UpdateDeidentifyTemplateRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2UpdateDeidentifyTemplateRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for UpdateDiscoveryConfig. */
	export interface GooglePrivacyDlpV2UpdateDiscoveryConfigRequest {

		/** Configuration for discovery to scan resources for profile generation. Only one discovery configuration may exist per organization, folder, or project. The generated data profiles are retained according to the [data retention policy] (https://cloud.google.com/dlp/docs/data-profiles#retention). */
		discoveryConfig?: GooglePrivacyDlpV2DiscoveryConfig;

		/** Mask to control which fields get updated. */
		updateMask?: string | null;
	}

	/** Request message for UpdateDiscoveryConfig. */
	export interface GooglePrivacyDlpV2UpdateDiscoveryConfigRequestFormProperties {

		/** Mask to control which fields get updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2UpdateDiscoveryConfigRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2UpdateDiscoveryConfigRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for UpdateInspectTemplate. */
	export interface GooglePrivacyDlpV2UpdateInspectTemplateRequest {

		/** The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more. */
		inspectTemplate?: GooglePrivacyDlpV2InspectTemplate;

		/** Mask to control which fields get updated. */
		updateMask?: string | null;
	}

	/** Request message for UpdateInspectTemplate. */
	export interface GooglePrivacyDlpV2UpdateInspectTemplateRequestFormProperties {

		/** Mask to control which fields get updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2UpdateInspectTemplateRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2UpdateInspectTemplateRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for UpdateJobTrigger. */
	export interface GooglePrivacyDlpV2UpdateJobTriggerRequest {

		/** Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more. */
		jobTrigger?: GooglePrivacyDlpV2JobTrigger;

		/** Mask to control which fields get updated. */
		updateMask?: string | null;
	}

	/** Request message for UpdateJobTrigger. */
	export interface GooglePrivacyDlpV2UpdateJobTriggerRequestFormProperties {

		/** Mask to control which fields get updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2UpdateJobTriggerRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2UpdateJobTriggerRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for UpdateStoredInfoType. */
	export interface GooglePrivacyDlpV2UpdateStoredInfoTypeRequest {

		/** Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes. */
		config?: GooglePrivacyDlpV2StoredInfoTypeConfig;

		/** Mask to control which fields get updated. */
		updateMask?: string | null;
	}

	/** Request message for UpdateStoredInfoType. */
	export interface GooglePrivacyDlpV2UpdateStoredInfoTypeRequestFormProperties {

		/** Mask to control which fields get updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2UpdateStoredInfoTypeRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2UpdateStoredInfoTypeRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.
		 * Get v2/infoTypes
		 * @param {string} filter filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.
		 * @param {string} languageCode BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
		 * @param {string} locationId Deprecated. This field has no effect.
		 * @param {string} parent The parent resource name. The format of this value is as follows: locations/ LOCATION_ID
		 * @return {GooglePrivacyDlpV2ListInfoTypesResponse} Successful response
		 */
		Dlp_infoTypes_list(filter: string | null | undefined, languageCode: string | null | undefined, locationId: string | null | undefined, parent: string | null | undefined): Observable<GooglePrivacyDlpV2ListInfoTypesResponse> {
			return this.http.get<GooglePrivacyDlpV2ListInfoTypesResponse>(this.baseUri + 'v2/infoTypes?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Deletes a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
		 * Delete v2/{name}
		 * @param {string} name Required. Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Dlp_projects_storedInfoTypes_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
		 * Get v2/{name}
		 * @param {string} name Required. Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
		 * @return {GooglePrivacyDlpV2StoredInfoType} Successful response
		 */
		Dlp_projects_storedInfoTypes_get(name: string): Observable<GooglePrivacyDlpV2StoredInfoType> {
			return this.http.get<GooglePrivacyDlpV2StoredInfoType>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
		 * Patch v2/{name}
		 * @param {string} name Required. Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
		 * @return {GooglePrivacyDlpV2StoredInfoType} Successful response
		 */
		Dlp_projects_storedInfoTypes_patch(name: string, requestBody: GooglePrivacyDlpV2UpdateStoredInfoTypeRequest): Observable<GooglePrivacyDlpV2StoredInfoType> {
			return this.http.patch<GooglePrivacyDlpV2StoredInfoType>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.
		 * Post v2/{name}:activate
		 * @param {string} name Required. Resource name of the trigger to activate, for example `projects/dlp-test-project/jobTriggers/53234423`.
		 * @return {GooglePrivacyDlpV2DlpJob} Successful response
		 */
		Dlp_projects_locations_jobTriggers_activate(name: string, requestBody: GooglePrivacyDlpV2ActivateJobTriggerRequest): Observable<GooglePrivacyDlpV2DlpJob> {
			return this.http.post<GooglePrivacyDlpV2DlpJob>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
		 * Post v2/{name}:cancel
		 * @param {string} name Required. The name of the DlpJob resource to be cancelled.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Dlp_projects_locations_dlpJobs_cancel(name: string, requestBody: GooglePrivacyDlpV2CancelDlpJobRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run.
		 * Post v2/{name}:finish
		 * @param {string} name Required. The name of the DlpJob resource to be cancelled.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Dlp_projects_locations_dlpJobs_finish(name: string, requestBody: GooglePrivacyDlpV2FinishDlpJobRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':finish', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger.
		 * Post v2/{name}:hybridInspect
		 * @param {string} name Required. Resource name of the trigger to execute a hybrid inspect on, for example `projects/dlp-test-project/jobTriggers/53234423`.
		 * @return {GooglePrivacyDlpV2HybridInspectResponse} Successful response
		 */
		Dlp_projects_locations_jobTriggers_hybridInspect(name: string, requestBody: GooglePrivacyDlpV2HybridInspectJobTriggerRequest): Observable<GooglePrivacyDlpV2HybridInspectResponse> {
			return this.http.post<GooglePrivacyDlpV2HybridInspectResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':hybridInspect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
		 * Post v2/{parent}/content:deidentify
		 * @param {string} parent Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @return {GooglePrivacyDlpV2DeidentifyContentResponse} Successful response
		 */
		Dlp_projects_locations_content_deidentify(parent: string, requestBody: GooglePrivacyDlpV2DeidentifyContentRequest): Observable<GooglePrivacyDlpV2DeidentifyContentResponse> {
			return this.http.post<GooglePrivacyDlpV2DeidentifyContentResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/content:deidentify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images and https://cloud.google.com/dlp/docs/inspecting-text,
		 * Post v2/{parent}/content:inspect
		 * @param {string} parent Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @return {GooglePrivacyDlpV2InspectContentResponse} Successful response
		 */
		Dlp_projects_locations_content_inspect(parent: string, requestBody: GooglePrivacyDlpV2InspectContentRequest): Observable<GooglePrivacyDlpV2InspectContentResponse> {
			return this.http.post<GooglePrivacyDlpV2InspectContentResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/content:inspect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Re-identifies content that has been de-identified. See https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.
		 * Post v2/{parent}/content:reidentify
		 * @param {string} parent Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @return {GooglePrivacyDlpV2ReidentifyContentResponse} Successful response
		 */
		Dlp_projects_locations_content_reidentify(parent: string, requestBody: GooglePrivacyDlpV2ReidentifyContentRequest): Observable<GooglePrivacyDlpV2ReidentifyContentResponse> {
			return this.http.post<GooglePrivacyDlpV2ReidentifyContentResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/content:reidentify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists DeidentifyTemplates. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
		 * Get v2/{parent}/deidentifyTemplates
		 * @param {string} parent Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @param {string} locationId Deprecated. This field has no effect.
		 * @param {string} orderBy Comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name.
		 * @param {number} pageSize Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
		 * @param {string} pageToken Page token to continue retrieval. Comes from the previous call to `ListDeidentifyTemplates`.
		 * @return {GooglePrivacyDlpV2ListDeidentifyTemplatesResponse} Successful response
		 */
		Dlp_projects_locations_deidentifyTemplates_list(parent: string, locationId: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GooglePrivacyDlpV2ListDeidentifyTemplatesResponse> {
			return this.http.get<GooglePrivacyDlpV2ListDeidentifyTemplatesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deidentifyTemplates&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
		 * Post v2/{parent}/deidentifyTemplates
		 * @param {string} parent Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @return {GooglePrivacyDlpV2DeidentifyTemplate} Successful response
		 */
		Dlp_projects_locations_deidentifyTemplates_create(parent: string, requestBody: GooglePrivacyDlpV2CreateDeidentifyTemplateRequest): Observable<GooglePrivacyDlpV2DeidentifyTemplate> {
			return this.http.post<GooglePrivacyDlpV2DeidentifyTemplate>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deidentifyTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists discovery configurations.
		 * Get v2/{parent}/discoveryConfigs
		 * @param {string} parent Required. Parent resource name. The format of this value is as follows: `projects/`PROJECT_ID`/locations/`LOCATION_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @param {string} orderBy Comma separated list of config fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `last_run_time`: corresponds to the last time the DiscoveryConfig ran. - `name`: corresponds to the DiscoveryConfig's name. - `status`: corresponds to DiscoveryConfig's status.
		 * @param {number} pageSize Size of the page. This value can be limited by a server.
		 * @param {string} pageToken Page token to continue retrieval. Comes from the previous call to ListDiscoveryConfigs. `order_by` field must not change for subsequent calls.
		 * @return {GooglePrivacyDlpV2ListDiscoveryConfigsResponse} Successful response
		 */
		Dlp_projects_locations_discoveryConfigs_list(parent: string, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GooglePrivacyDlpV2ListDiscoveryConfigsResponse> {
			return this.http.get<GooglePrivacyDlpV2ListDiscoveryConfigsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/discoveryConfigs&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a config for discovery to scan and profile storage.
		 * Post v2/{parent}/discoveryConfigs
		 * @param {string} parent Required. Parent resource name. The format of this value is as follows: `projects/`PROJECT_ID`/locations/`LOCATION_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @return {GooglePrivacyDlpV2DiscoveryConfig} Successful response
		 */
		Dlp_projects_locations_discoveryConfigs_create(parent: string, requestBody: GooglePrivacyDlpV2CreateDiscoveryConfigRequest): Observable<GooglePrivacyDlpV2DiscoveryConfig> {
			return this.http.post<GooglePrivacyDlpV2DiscoveryConfig>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/discoveryConfigs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
		 * Get v2/{parent}/dlpJobs
		 * @param {string} parent Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @param {string} filter Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect jobs: - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - `trigger_name` - The name of the trigger that created the job. - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * Supported fields for risk analysis jobs: - `state` - RUNNING|CANCELED|FINISHED|FAILED - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * The operator must be `=` or `!=`. Examples: * inspected_storage = cloud_storage AND state = done * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = done OR state = canceled) * end_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters.
		 * @param {string} locationId Deprecated. This field has no effect.
		 * @param {string} orderBy Comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, end_time asc, create_time desc` Supported fields are: - `create_time`: corresponds to the time the job was created. - `end_time`: corresponds to the time the job ended. - `name`: corresponds to the job's name. - `state`: corresponds to `state`
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @param {GooglePrivacyDlpV2DlpJobType} type The type of job. Defaults to `DlpJobType.INSPECT`
		 * @return {GooglePrivacyDlpV2ListDlpJobsResponse} Successful response
		 */
		Dlp_projects_locations_dlpJobs_list(parent: string, filter: string | null | undefined, locationId: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, type: GooglePrivacyDlpV2DlpJobType | null | undefined): Observable<GooglePrivacyDlpV2ListDlpJobsResponse> {
			return this.http.get<GooglePrivacyDlpV2ListDlpJobsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dlpJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&type=' + type, {});
		}

		/**
		 * Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
		 * Post v2/{parent}/dlpJobs
		 * @param {string} parent Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @return {GooglePrivacyDlpV2DlpJob} Successful response
		 */
		Dlp_projects_locations_dlpJobs_create(parent: string, requestBody: GooglePrivacyDlpV2CreateDlpJobRequest): Observable<GooglePrivacyDlpV2DlpJob> {
			return this.http.post<GooglePrivacyDlpV2DlpJob>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dlpJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
		 * Post v2/{parent}/image:redact
		 * @param {string} parent Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @return {GooglePrivacyDlpV2RedactImageResponse} Successful response
		 */
		Dlp_projects_locations_image_redact(parent: string, requestBody: GooglePrivacyDlpV2RedactImageRequest): Observable<GooglePrivacyDlpV2RedactImageResponse> {
			return this.http.post<GooglePrivacyDlpV2RedactImageResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/image:redact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.
		 * Get v2/{parent}/infoTypes
		 * @param {string} parent The parent resource name. The format of this value is as follows: locations/ LOCATION_ID
		 * @param {string} filter filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.
		 * @param {string} languageCode BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
		 * @param {string} locationId Deprecated. This field has no effect.
		 * @return {GooglePrivacyDlpV2ListInfoTypesResponse} Successful response
		 */
		Dlp_locations_infoTypes_list(parent: string, filter: string | null | undefined, languageCode: string | null | undefined, locationId: string | null | undefined): Observable<GooglePrivacyDlpV2ListInfoTypesResponse> {
			return this.http.get<GooglePrivacyDlpV2ListInfoTypesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/infoTypes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)), {});
		}

		/**
		 * Lists InspectTemplates. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
		 * Get v2/{parent}/inspectTemplates
		 * @param {string} parent Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @param {string} locationId Deprecated. This field has no effect.
		 * @param {string} orderBy Comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name.
		 * @param {number} pageSize Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
		 * @param {string} pageToken Page token to continue retrieval. Comes from the previous call to `ListInspectTemplates`.
		 * @return {GooglePrivacyDlpV2ListInspectTemplatesResponse} Successful response
		 */
		Dlp_projects_locations_inspectTemplates_list(parent: string, locationId: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GooglePrivacyDlpV2ListInspectTemplatesResponse> {
			return this.http.get<GooglePrivacyDlpV2ListInspectTemplatesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/inspectTemplates&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
		 * Post v2/{parent}/inspectTemplates
		 * @param {string} parent Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @return {GooglePrivacyDlpV2InspectTemplate} Successful response
		 */
		Dlp_projects_locations_inspectTemplates_create(parent: string, requestBody: GooglePrivacyDlpV2CreateInspectTemplateRequest): Observable<GooglePrivacyDlpV2InspectTemplate> {
			return this.http.post<GooglePrivacyDlpV2InspectTemplate>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/inspectTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists job triggers. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
		 * Get v2/{parent}/jobTriggers
		 * @param {string} parent Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @param {string} filter Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect triggers: - `status` - HEALTHY|PAUSED|CANCELLED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by quotation marks. Nanoseconds are ignored. - 'error_count' - Number of errors that have occurred while running. * The operator must be `=` or `!=` for status and inspected_storage. Examples: * inspected_storage = cloud_storage AND status = HEALTHY * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY) * last_run_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters.
		 * @param {string} locationId Deprecated. This field has no effect.
		 * @param {string} orderBy Comma separated list of triggeredJob fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the JobTrigger was created. - `update_time`: corresponds to the time the JobTrigger was last updated. - `last_run_time`: corresponds to the last time the JobTrigger ran. - `name`: corresponds to the JobTrigger's name. - `display_name`: corresponds to the JobTrigger's display name. - `status`: corresponds to JobTrigger's status.
		 * @param {number} pageSize Size of the page. This value can be limited by a server.
		 * @param {string} pageToken Page token to continue retrieval. Comes from the previous call to ListJobTriggers. `order_by` field must not change for subsequent calls.
		 * @param {GooglePrivacyDlpV2DlpJobType} type The type of jobs. Will use `DlpJobType.INSPECT` if not set.
		 * @return {GooglePrivacyDlpV2ListJobTriggersResponse} Successful response
		 */
		Dlp_projects_locations_jobTriggers_list(parent: string, filter: string | null | undefined, locationId: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, type: GooglePrivacyDlpV2DlpJobType | null | undefined): Observable<GooglePrivacyDlpV2ListJobTriggersResponse> {
			return this.http.get<GooglePrivacyDlpV2ListJobTriggersResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobTriggers&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&type=' + type, {});
		}

		/**
		 * Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
		 * Post v2/{parent}/jobTriggers
		 * @param {string} parent Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @return {GooglePrivacyDlpV2JobTrigger} Successful response
		 */
		Dlp_projects_locations_jobTriggers_create(parent: string, requestBody: GooglePrivacyDlpV2CreateJobTriggerRequest): Observable<GooglePrivacyDlpV2JobTrigger> {
			return this.http.post<GooglePrivacyDlpV2JobTrigger>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobTriggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists stored infoTypes. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
		 * Get v2/{parent}/storedInfoTypes
		 * @param {string} parent Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @param {string} locationId Deprecated. This field has no effect.
		 * @param {string} orderBy Comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, display_name, create_time desc` Supported fields are: - `create_time`: corresponds to the time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name.
		 * @param {number} pageSize Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
		 * @param {string} pageToken Page token to continue retrieval. Comes from the previous call to `ListStoredInfoTypes`.
		 * @return {GooglePrivacyDlpV2ListStoredInfoTypesResponse} Successful response
		 */
		Dlp_projects_storedInfoTypes_list(parent: string, locationId: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GooglePrivacyDlpV2ListStoredInfoTypesResponse> {
			return this.http.get<GooglePrivacyDlpV2ListStoredInfoTypesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/storedInfoTypes&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
		 * Post v2/{parent}/storedInfoTypes
		 * @param {string} parent Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
		 * @return {GooglePrivacyDlpV2StoredInfoType} Successful response
		 */
		Dlp_projects_storedInfoTypes_create(parent: string, requestBody: GooglePrivacyDlpV2CreateStoredInfoTypeRequest): Observable<GooglePrivacyDlpV2StoredInfoType> {
			return this.http.post<GooglePrivacyDlpV2StoredInfoType>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/storedInfoTypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

