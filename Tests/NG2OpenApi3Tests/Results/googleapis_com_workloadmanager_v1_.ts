import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
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


	/** LINT.IfChange Message describing Evaluation object */
	export interface Evaluation {

		/** Output only. [Output only] Create time stamp */
		createTime?: string | null;

		/** The Cloud Storage bucket name for custom rules. */
		customRulesBucket?: string | null;

		/** Description of the Evaluation */
		description?: string | null;

		/** Labels as key value pairs */
		labels?: {[id: string]: string };

		/** name of resource names have the form 'projects/{project_id}/locations/{location_id}/evaluations/{evaluation_id}' */
		name?: string | null;

		/** Message describing resource filters */
		resourceFilter?: ResourceFilter;

		/** Message describing resource status */
		resourceStatus?: ResourceStatus;

		/** the name of the rule */
		ruleNames?: Array<string>;

		/** Output only. [Output only] The updated rule ids if exist. */
		ruleVersions?: Array<string>;

		/** crontab format schedule for scheduled evaluation, currently only support the following schedule: "0 1 * * *", "0 6 * * *", "0 12 * * *", "0 0 1 * *", "0 0 7 * *", */
		schedule?: string | null;

		/** Output only. [Output only] Update time stamp */
		updateTime?: string | null;
	}

	/** LINT.IfChange Message describing Evaluation object */
	export interface EvaluationFormProperties {

		/** Output only. [Output only] Create time stamp */
		createTime: FormControl<string | null | undefined>,

		/** The Cloud Storage bucket name for custom rules. */
		customRulesBucket: FormControl<string | null | undefined>,

		/** Description of the Evaluation */
		description: FormControl<string | null | undefined>,

		/** Labels as key value pairs */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** name of resource names have the form 'projects/{project_id}/locations/{location_id}/evaluations/{evaluation_id}' */
		name: FormControl<string | null | undefined>,

		/** crontab format schedule for scheduled evaluation, currently only support the following schedule: "0 1 * * *", "0 6 * * *", "0 12 * * *", "0 0 1 * *", "0 0 7 * *", */
		schedule: FormControl<string | null | undefined>,

		/** Output only. [Output only] Update time stamp */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationFormGroup() {
		return new FormGroup<EvaluationFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			customRulesBucket: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			schedule: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message describing resource filters */
	export interface ResourceFilter {

		/** Message describing compute engine instance filter */
		gceInstanceFilter?: GceInstanceFilter;

		/** The label used for filter resource */
		inclusionLabels?: {[id: string]: string };

		/** The id pattern for filter resource */
		resourceIdPatterns?: Array<string>;

		/** The scopes of evaluation resource */
		scopes?: Array<string>;
	}

	/** Message describing resource filters */
	export interface ResourceFilterFormProperties {

		/** The label used for filter resource */
		inclusionLabels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateResourceFilterFormGroup() {
		return new FormGroup<ResourceFilterFormProperties>({
			inclusionLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Message describing compute engine instance filter */
	export interface GceInstanceFilter {

		/** Service account of compute engine */
		serviceAccounts?: Array<string>;
	}

	/** Message describing compute engine instance filter */
	export interface GceInstanceFilterFormProperties {
	}
	export function CreateGceInstanceFilterFormGroup() {
		return new FormGroup<GceInstanceFilterFormProperties>({
		});

	}


	/** Message describing resource status */
	export interface ResourceStatus {

		/** Historical: Used before 2023-05-22 the new version of rule id if exists */
		rulesNewerVersions?: Array<string>;

		/** State of the resource */
		state?: ResourceStatusState | null;
	}

	/** Message describing resource status */
	export interface ResourceStatusFormProperties {

		/** State of the resource */
		state: FormControl<ResourceStatusState | null | undefined>,
	}
	export function CreateResourceStatusFormGroup() {
		return new FormGroup<ResourceStatusFormProperties>({
			state: new FormControl<ResourceStatusState | null | undefined>(undefined),
		});

	}

	export enum ResourceStatusState { STATE_UNSPECIFIED = 0, CREATING = 1, ACTIVE = 2, DELETING = 3 }


	/** Message describing Execution object */
	export interface Execution {

		/** Output only. [Output only] End time stamp */
		endTime?: string | null;

		/** Output only. [Output only] Evaluation ID */
		evaluationId?: string | null;

		/** Output only. [Output only] Inventory time stamp */
		inventoryTime?: string | null;

		/** Labels as key value pairs */
		labels?: {[id: string]: string };

		/** The name of execution resource. The format is projects/{project}/locations/{location}/evaluations/{evaluation}/executions/{execution} */
		name?: string | null;

		/** type represent whether the execution executed directly by user or scheduled according evaluation.schedule field. */
		runType?: ExecutionRunType | null;

		/** Output only. [Output only] Start time stamp */
		startTime?: string | null;

		/** Output only. [Output only] State */
		state?: ExecutionState | null;
	}

	/** Message describing Execution object */
	export interface ExecutionFormProperties {

		/** Output only. [Output only] End time stamp */
		endTime: FormControl<string | null | undefined>,

		/** Output only. [Output only] Evaluation ID */
		evaluationId: FormControl<string | null | undefined>,

		/** Output only. [Output only] Inventory time stamp */
		inventoryTime: FormControl<string | null | undefined>,

		/** Labels as key value pairs */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of execution resource. The format is projects/{project}/locations/{location}/evaluations/{evaluation}/executions/{execution} */
		name: FormControl<string | null | undefined>,

		/** type represent whether the execution executed directly by user or scheduled according evaluation.schedule field. */
		runType: FormControl<ExecutionRunType | null | undefined>,

		/** Output only. [Output only] Start time stamp */
		startTime: FormControl<string | null | undefined>,

		/** Output only. [Output only] State */
		state: FormControl<ExecutionState | null | undefined>,
	}
	export function CreateExecutionFormGroup() {
		return new FormGroup<ExecutionFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			evaluationId: new FormControl<string | null | undefined>(undefined),
			inventoryTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			runType: new FormControl<ExecutionRunType | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ExecutionState | null | undefined>(undefined),
		});

	}

	export enum ExecutionRunType { TYPE_UNSPECIFIED = 0, ONE_TIME = 1, SCHEDULED = 2 }

	export enum ExecutionState { STATE_UNSPECIFIED = 0, RUNNING = 1, SUCCEEDED = 2, FAILED = 3 }


	/** Message describing the result of an execution */
	export interface ExecutionResult {

		/** the document url of the rule */
		documentationUrl?: string | null;

		/** Message represent resource in execution result */
		resource?: Resource;

		/** the rule which violate in execution */
		rule?: string | null;

		/** severity of violation */
		severity?: string | null;

		/** Message describing the violdation in execution result */
		violationDetails?: ViolationDetails;

		/** the violation message of an execution */
		violationMessage?: string | null;
	}

	/** Message describing the result of an execution */
	export interface ExecutionResultFormProperties {

		/** the document url of the rule */
		documentationUrl: FormControl<string | null | undefined>,

		/** the rule which violate in execution */
		rule: FormControl<string | null | undefined>,

		/** severity of violation */
		severity: FormControl<string | null | undefined>,

		/** the violation message of an execution */
		violationMessage: FormControl<string | null | undefined>,
	}
	export function CreateExecutionResultFormGroup() {
		return new FormGroup<ExecutionResultFormProperties>({
			documentationUrl: new FormControl<string | null | undefined>(undefined),
			rule: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			violationMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message represent resource in execution result */
	export interface Resource {

		/** the name of the resource */
		name?: string | null;

		/** the service account accosiate with resource */
		serviceAccount?: string | null;

		/** the type of reresource */
		type?: string | null;
	}

	/** Message represent resource in execution result */
	export interface ResourceFormProperties {

		/** the name of the resource */
		name: FormControl<string | null | undefined>,

		/** the service account accosiate with resource */
		serviceAccount: FormControl<string | null | undefined>,

		/** the type of reresource */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message describing the violdation in execution result */
	export interface ViolationDetails {

		/** the name of asset */
		asset?: string | null;

		/** observed */
		observed?: {[id: string]: string };

		/** the service account associate with resource */
		serviceAccount?: string | null;
	}

	/** Message describing the violdation in execution result */
	export interface ViolationDetailsFormProperties {

		/** the name of asset */
		asset: FormControl<string | null | undefined>,

		/** observed */
		observed: FormControl<{[id: string]: string } | null | undefined>,

		/** the service account associate with resource */
		serviceAccount: FormControl<string | null | undefined>,
	}
	export function CreateViolationDetailsFormGroup() {
		return new FormGroup<ViolationDetailsFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			observed: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A presentation of host resource usage where the workload runs. */
	export interface Insight {

		/** Required. The instance id where the insight is generated from */
		instanceId?: string | null;

		/** The schema of SAP system discovery data. */
		sapDiscovery?: SapDiscovery;

		/** A presentation of SAP workload insight. The schema of SAP workloads validation related data. */
		sapValidation?: SapValidation;

		/** Output only. [Output only] Create time stamp */
		sentTime?: string | null;

		/** A presentation of SQLServer workload insight. The schema of SqlServer workloads validation related data. */
		sqlserverValidation?: SqlserverValidation;
	}

	/** A presentation of host resource usage where the workload runs. */
	export interface InsightFormProperties {

		/** Required. The instance id where the insight is generated from */
		instanceId: FormControl<string | null | undefined>,

		/** Output only. [Output only] Create time stamp */
		sentTime: FormControl<string | null | undefined>,
	}
	export function CreateInsightFormGroup() {
		return new FormGroup<InsightFormProperties>({
			instanceId: new FormControl<string | null | undefined>(undefined),
			sentTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The schema of SAP system discovery data. */
	export interface SapDiscovery {

		/** Message describing the system component. */
		applicationLayer?: SapDiscoveryComponent;

		/** Message describing the system component. */
		databaseLayer?: SapDiscoveryComponent;

		/** Message describing SAP discovery system metadata */
		metadata?: SapDiscoveryMetadata;

		/** Optional. The GCP project number that this SapSystem belongs to. */
		projectNumber?: string | null;

		/** Output only. A combination of database SID, database instance URI and tenant DB name to make a unique identifier per-system. */
		systemId?: string | null;

		/** Required. Unix timestamp this system has been updated last. */
		updateTime?: string | null;
	}

	/** The schema of SAP system discovery data. */
	export interface SapDiscoveryFormProperties {

		/** Optional. The GCP project number that this SapSystem belongs to. */
		projectNumber: FormControl<string | null | undefined>,

		/** Output only. A combination of database SID, database instance URI and tenant DB name to make a unique identifier per-system. */
		systemId: FormControl<string | null | undefined>,

		/** Required. Unix timestamp this system has been updated last. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateSapDiscoveryFormGroup() {
		return new FormGroup<SapDiscoveryFormProperties>({
			projectNumber: new FormControl<string | null | undefined>(undefined),
			systemId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message describing the system component. */
	export interface SapDiscoveryComponent {

		/** A set of properties describing an SAP Application layer. */
		applicationProperties?: SapDiscoveryComponentApplicationProperties;

		/** A set of properties describing an SAP Database layer. */
		databaseProperties?: SapDiscoveryComponentDatabaseProperties;

		/** Optional. A list of host URIs that are part of the HA configuration if present. An empty list indicates the component is not configured for HA. */
		haHosts?: Array<string>;

		/** Required. Pantheon Project in which the resources reside. */
		hostProject?: string | null;

		/** Optional. The resources in a component. */
		resources?: Array<SapDiscoveryResource>;

		/** Optional. The SAP identifier, used by the SAP software and helps differentiate systems for customers. */
		sid?: string | null;

		/** Optional. The detected topology of the component. */
		topologyType?: SapDiscoveryComponentTopologyType | null;
	}

	/** Message describing the system component. */
	export interface SapDiscoveryComponentFormProperties {

		/** Required. Pantheon Project in which the resources reside. */
		hostProject: FormControl<string | null | undefined>,

		/** Optional. The SAP identifier, used by the SAP software and helps differentiate systems for customers. */
		sid: FormControl<string | null | undefined>,

		/** Optional. The detected topology of the component. */
		topologyType: FormControl<SapDiscoveryComponentTopologyType | null | undefined>,
	}
	export function CreateSapDiscoveryComponentFormGroup() {
		return new FormGroup<SapDiscoveryComponentFormProperties>({
			hostProject: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			topologyType: new FormControl<SapDiscoveryComponentTopologyType | null | undefined>(undefined),
		});

	}


	/** A set of properties describing an SAP Application layer. */
	export interface SapDiscoveryComponentApplicationProperties {

		/** Optional. Indicates whether this is a Java or ABAP Netweaver instance. true means it is ABAP, false means it is Java. */
		abap?: boolean | null;

		/** Required. Type of the application. Netweaver, etc. */
		applicationType?: SapDiscoveryComponentApplicationPropertiesApplicationType | null;

		/** Optional. Resource URI of the recognized ASCS host of the application. */
		ascsUri?: string | null;

		/** Optional. Kernel version for Netweaver running in the system. */
		kernelVersion?: string | null;

		/** Optional. Resource URI of the recognized shared NFS of the application. May be empty if the application server has only a single node. */
		nfsUri?: string | null;
	}

	/** A set of properties describing an SAP Application layer. */
	export interface SapDiscoveryComponentApplicationPropertiesFormProperties {

		/** Optional. Indicates whether this is a Java or ABAP Netweaver instance. true means it is ABAP, false means it is Java. */
		abap: FormControl<boolean | null | undefined>,

		/** Required. Type of the application. Netweaver, etc. */
		applicationType: FormControl<SapDiscoveryComponentApplicationPropertiesApplicationType | null | undefined>,

		/** Optional. Resource URI of the recognized ASCS host of the application. */
		ascsUri: FormControl<string | null | undefined>,

		/** Optional. Kernel version for Netweaver running in the system. */
		kernelVersion: FormControl<string | null | undefined>,

		/** Optional. Resource URI of the recognized shared NFS of the application. May be empty if the application server has only a single node. */
		nfsUri: FormControl<string | null | undefined>,
	}
	export function CreateSapDiscoveryComponentApplicationPropertiesFormGroup() {
		return new FormGroup<SapDiscoveryComponentApplicationPropertiesFormProperties>({
			abap: new FormControl<boolean | null | undefined>(undefined),
			applicationType: new FormControl<SapDiscoveryComponentApplicationPropertiesApplicationType | null | undefined>(undefined),
			ascsUri: new FormControl<string | null | undefined>(undefined),
			kernelVersion: new FormControl<string | null | undefined>(undefined),
			nfsUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SapDiscoveryComponentApplicationPropertiesApplicationType { APPLICATION_TYPE_UNSPECIFIED = 0, NETWEAVER = 1 }


	/** A set of properties describing an SAP Database layer. */
	export interface SapDiscoveryComponentDatabaseProperties {

		/** Required. Type of the database. HANA, DB2, etc. */
		databaseType?: SapDiscoveryComponentDatabasePropertiesDatabaseType | null;

		/** Optional. The version of the database software running in the system. */
		databaseVersion?: string | null;

		/** Required. URI of the recognized primary instance of the database. */
		primaryInstanceUri?: string | null;

		/** Optional. URI of the recognized shared NFS of the database. May be empty if the database has only a single node. */
		sharedNfsUri?: string | null;
	}

	/** A set of properties describing an SAP Database layer. */
	export interface SapDiscoveryComponentDatabasePropertiesFormProperties {

		/** Required. Type of the database. HANA, DB2, etc. */
		databaseType: FormControl<SapDiscoveryComponentDatabasePropertiesDatabaseType | null | undefined>,

		/** Optional. The version of the database software running in the system. */
		databaseVersion: FormControl<string | null | undefined>,

		/** Required. URI of the recognized primary instance of the database. */
		primaryInstanceUri: FormControl<string | null | undefined>,

		/** Optional. URI of the recognized shared NFS of the database. May be empty if the database has only a single node. */
		sharedNfsUri: FormControl<string | null | undefined>,
	}
	export function CreateSapDiscoveryComponentDatabasePropertiesFormGroup() {
		return new FormGroup<SapDiscoveryComponentDatabasePropertiesFormProperties>({
			databaseType: new FormControl<SapDiscoveryComponentDatabasePropertiesDatabaseType | null | undefined>(undefined),
			databaseVersion: new FormControl<string | null | undefined>(undefined),
			primaryInstanceUri: new FormControl<string | null | undefined>(undefined),
			sharedNfsUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SapDiscoveryComponentDatabasePropertiesDatabaseType { DATABASE_TYPE_UNSPECIFIED = 0, HANA = 1, MAX_DB = 2, DB2 = 3 }


	/** Message describing a resource. */
	export interface SapDiscoveryResource {

		/** A set of properties only present for an instance type resource */
		instanceProperties?: SapDiscoveryResourceInstanceProperties;

		/** Optional. A list of resource URIs related to this resource. */
		relatedResources?: Array<string>;

		/** Required. ComputeInstance, ComputeDisk, VPC, Bare Metal server, etc. */
		resourceKind?: SapDiscoveryResourceResourceKind | null;

		/** Required. The type of this resource. */
		resourceType?: SapDiscoveryResourceResourceType | null;

		/** Required. URI of the resource, includes project, location, and name. */
		resourceUri?: string | null;

		/** Required. Unix timestamp of when this resource last had its discovery data updated. */
		updateTime?: string | null;
	}

	/** Message describing a resource. */
	export interface SapDiscoveryResourceFormProperties {

		/** Required. ComputeInstance, ComputeDisk, VPC, Bare Metal server, etc. */
		resourceKind: FormControl<SapDiscoveryResourceResourceKind | null | undefined>,

		/** Required. The type of this resource. */
		resourceType: FormControl<SapDiscoveryResourceResourceType | null | undefined>,

		/** Required. URI of the resource, includes project, location, and name. */
		resourceUri: FormControl<string | null | undefined>,

		/** Required. Unix timestamp of when this resource last had its discovery data updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateSapDiscoveryResourceFormGroup() {
		return new FormGroup<SapDiscoveryResourceFormProperties>({
			resourceKind: new FormControl<SapDiscoveryResourceResourceKind | null | undefined>(undefined),
			resourceType: new FormControl<SapDiscoveryResourceResourceType | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of properties only present for an instance type resource */
	export interface SapDiscoveryResourceInstanceProperties {

		/** Optional. A list of instance URIs that are part of a cluster with this one. */
		clusterInstances?: Array<string>;

		/** Optional. A virtual hostname of the instance if it has one. */
		virtualHostname?: string | null;
	}

	/** A set of properties only present for an instance type resource */
	export interface SapDiscoveryResourceInstancePropertiesFormProperties {

		/** Optional. A virtual hostname of the instance if it has one. */
		virtualHostname: FormControl<string | null | undefined>,
	}
	export function CreateSapDiscoveryResourceInstancePropertiesFormGroup() {
		return new FormGroup<SapDiscoveryResourceInstancePropertiesFormProperties>({
			virtualHostname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SapDiscoveryResourceResourceKind { RESOURCE_KIND_UNSPECIFIED = 0, RESOURCE_KIND_INSTANCE = 1, RESOURCE_KIND_DISK = 2, RESOURCE_KIND_ADDRESS = 3, RESOURCE_KIND_FILESTORE = 4, RESOURCE_KIND_HEALTH_CHECK = 5, RESOURCE_KIND_FORWARDING_RULE = 6, RESOURCE_KIND_BACKEND_SERVICE = 7, RESOURCE_KIND_SUBNETWORK = 8, RESOURCE_KIND_NETWORK = 9, RESOURCE_KIND_PUBLIC_ADDRESS = 10, RESOURCE_KIND_INSTANCE_GROUP = 11 }

	export enum SapDiscoveryResourceResourceType { RESOURCE_TYPE_UNSPECIFIED = 0, RESOURCE_TYPE_COMPUTE = 1, RESOURCE_TYPE_STORAGE = 2, RESOURCE_TYPE_NETWORK = 3 }

	export enum SapDiscoveryComponentTopologyType { TOPOLOGY_TYPE_UNSPECIFIED = 0, TOPOLOGY_SCALE_UP = 1, TOPOLOGY_SCALE_OUT = 2 }


	/** Message describing SAP discovery system metadata */
	export interface SapDiscoveryMetadata {

		/** Optional. Customer region string for customer's use. Does not represent GCP region. */
		customerRegion?: string | null;

		/** Optional. Customer defined, something like "E-commerce pre prod" */
		definedSystem?: string | null;

		/** Optional. Should be "prod", "QA", "dev", "staging", etc. */
		environmentType?: string | null;

		/** Optional. This SAP product name */
		sapProduct?: string | null;
	}

	/** Message describing SAP discovery system metadata */
	export interface SapDiscoveryMetadataFormProperties {

		/** Optional. Customer region string for customer's use. Does not represent GCP region. */
		customerRegion: FormControl<string | null | undefined>,

		/** Optional. Customer defined, something like "E-commerce pre prod" */
		definedSystem: FormControl<string | null | undefined>,

		/** Optional. Should be "prod", "QA", "dev", "staging", etc. */
		environmentType: FormControl<string | null | undefined>,

		/** Optional. This SAP product name */
		sapProduct: FormControl<string | null | undefined>,
	}
	export function CreateSapDiscoveryMetadataFormGroup() {
		return new FormGroup<SapDiscoveryMetadataFormProperties>({
			customerRegion: new FormControl<string | null | undefined>(undefined),
			definedSystem: new FormControl<string | null | undefined>(undefined),
			environmentType: new FormControl<string | null | undefined>(undefined),
			sapProduct: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A presentation of SAP workload insight. The schema of SAP workloads validation related data. */
	export interface SapValidation {

		/** Required. The project_id of the cloud project that the Insight data comes from. */
		projectId?: string | null;

		/** Optional. A list of SAP validation metrics data. */
		validationDetails?: Array<SapValidationValidationDetail>;

		/** Optional. The zone of the instance that the Insight data comes from. */
		zone?: string | null;
	}

	/** A presentation of SAP workload insight. The schema of SAP workloads validation related data. */
	export interface SapValidationFormProperties {

		/** Required. The project_id of the cloud project that the Insight data comes from. */
		projectId: FormControl<string | null | undefined>,

		/** Optional. The zone of the instance that the Insight data comes from. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateSapValidationFormGroup() {
		return new FormGroup<SapValidationFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message describing the SAP validation metrics. */
	export interface SapValidationValidationDetail {

		/** Optional. The pairs of metrics data: field name & field value. */
		details?: {[id: string]: string };

		/** Optional. Was there a SAP system detected for this validation type. */
		isPresent?: boolean | null;

		/** Optional. The SAP system that the validation data is from. */
		sapValidationType?: SapValidationValidationDetailSapValidationType | null;
	}

	/** Message describing the SAP validation metrics. */
	export interface SapValidationValidationDetailFormProperties {

		/** Optional. The pairs of metrics data: field name & field value. */
		details: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Was there a SAP system detected for this validation type. */
		isPresent: FormControl<boolean | null | undefined>,

		/** Optional. The SAP system that the validation data is from. */
		sapValidationType: FormControl<SapValidationValidationDetailSapValidationType | null | undefined>,
	}
	export function CreateSapValidationValidationDetailFormGroup() {
		return new FormGroup<SapValidationValidationDetailFormProperties>({
			details: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			isPresent: new FormControl<boolean | null | undefined>(undefined),
			sapValidationType: new FormControl<SapValidationValidationDetailSapValidationType | null | undefined>(undefined),
		});

	}

	export enum SapValidationValidationDetailSapValidationType { SAP_VALIDATION_TYPE_UNSPECIFIED = 0, SYSTEM = 1, COROSYNC = 2, PACEMAKER = 3, HANA = 4, NETWEAVER = 5, HANA_SECURITY = 6, CUSTOM = 7 }


	/** A presentation of SQLServer workload insight. The schema of SqlServer workloads validation related data. */
	export interface SqlserverValidation {

		/** Optional. The agent version collected this data point */
		agentVersion?: string | null;

		/** Required. The instance_name of the instance that the Insight data comes from. According to https://linter.aip.dev/122/name-suffix: field names should not use the _name suffix unless the field would be ambiguous without it. */
		instance?: string | null;

		/** Required. The project_id of the cloud project that the Insight data comes from. */
		projectId?: string | null;

		/** Optional. A list of SqlServer validation metrics data. */
		validationDetails?: Array<SqlserverValidationValidationDetail>;
	}

	/** A presentation of SQLServer workload insight. The schema of SqlServer workloads validation related data. */
	export interface SqlserverValidationFormProperties {

		/** Optional. The agent version collected this data point */
		agentVersion: FormControl<string | null | undefined>,

		/** Required. The instance_name of the instance that the Insight data comes from. According to https://linter.aip.dev/122/name-suffix: field names should not use the _name suffix unless the field would be ambiguous without it. */
		instance: FormControl<string | null | undefined>,

		/** Required. The project_id of the cloud project that the Insight data comes from. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateSqlserverValidationFormGroup() {
		return new FormGroup<SqlserverValidationFormProperties>({
			agentVersion: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message describing the Sqlserver validation metrics. */
	export interface SqlserverValidationValidationDetail {

		/** Required. Details wraps map that represents collected data names and values. */
		details?: Array<SqlserverValidationDetails>;

		/** Optional. The Sqlserver system that the validation data is from. */
		type?: SqlserverValidationValidationDetailType | null;
	}

	/** Message describing the Sqlserver validation metrics. */
	export interface SqlserverValidationValidationDetailFormProperties {

		/** Optional. The Sqlserver system that the validation data is from. */
		type: FormControl<SqlserverValidationValidationDetailType | null | undefined>,
	}
	export function CreateSqlserverValidationValidationDetailFormGroup() {
		return new FormGroup<SqlserverValidationValidationDetailFormProperties>({
			type: new FormControl<SqlserverValidationValidationDetailType | null | undefined>(undefined),
		});

	}


	/** Message containing collected data names and values. */
	export interface SqlserverValidationDetails {

		/** Required. Collected data is in format. */
		fields?: {[id: string]: string };
	}

	/** Message containing collected data names and values. */
	export interface SqlserverValidationDetailsFormProperties {

		/** Required. Collected data is in format. */
		fields: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSqlserverValidationDetailsFormGroup() {
		return new FormGroup<SqlserverValidationDetailsFormProperties>({
			fields: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum SqlserverValidationValidationDetailType { SQLSERVER_VALIDATION_TYPE_UNSPECIFIED = 0, OS = 1, DB_LOG_DISK_SEPARATION = 2, DB_MAX_PARALLELISM = 3, DB_CXPACKET_WAITS = 4, DB_TRANSACTION_LOG_HANDLING = 5, DB_VIRTUAL_LOG_FILE_COUNT = 6, DB_BUFFER_POOL_EXTENSION = 7, DB_MAX_SERVER_MEMORY = 8, INSTANCE_METRICS = 9, DB_INDEX_FRAGMENTATION = 10, DB_TABLE_INDEX_COMPRESSION = 11, DB_BACKUP_POLICY = 12 }


	/** Message for response to listing Evaluations */
	export interface ListEvaluationsResponse {

		/** The list of Evaluation */
		evaluations?: Array<Evaluation>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Message for response to listing Evaluations */
	export interface ListEvaluationsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEvaluationsResponseFormGroup() {
		return new FormGroup<ListEvaluationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for response of list execution results */
	export interface ListExecutionResultsResponse {

		/** The versions from the specified publisher. */
		executionResults?: Array<ExecutionResult>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Message for response of list execution results */
	export interface ListExecutionResultsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionResultsResponseFormGroup() {
		return new FormGroup<ListExecutionResultsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for response to listing Executions */
	export interface ListExecutionsResponse {

		/** The list of Execution */
		executions?: Array<Execution>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Message for response to listing Executions */
	export interface ListExecutionsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionsResponseFormGroup() {
		return new FormGroup<ListExecutionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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


	/** Mesesage of response of list rules */
	export interface ListRulesResponse {

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** all rules in response */
		rules?: Array<Rule>;
	}

	/** Mesesage of response of list rules */
	export interface ListRulesResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRulesResponseFormGroup() {
		return new FormGroup<ListRulesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message represent a rule */
	export interface Rule {

		/** descrite rule in plain language */
		description?: string | null;

		/** the name display in UI */
		displayName?: string | null;

		/** the message template for rule */
		errorMessage?: string | null;

		/** rule name */
		name?: string | null;

		/** the primary category */
		primaryCategory?: string | null;

		/** the remediation for the rule */
		remediation?: string | null;

		/** Output only. the version of the rule */
		revisionId?: string | null;

		/** the secondary category */
		secondaryCategory?: string | null;

		/** the severity of the rule */
		severity?: string | null;

		/** the docuement url for the rule */
		uri?: string | null;
	}

	/** Message represent a rule */
	export interface RuleFormProperties {

		/** descrite rule in plain language */
		description: FormControl<string | null | undefined>,

		/** the name display in UI */
		displayName: FormControl<string | null | undefined>,

		/** the message template for rule */
		errorMessage: FormControl<string | null | undefined>,

		/** rule name */
		name: FormControl<string | null | undefined>,

		/** the primary category */
		primaryCategory: FormControl<string | null | undefined>,

		/** the remediation for the rule */
		remediation: FormControl<string | null | undefined>,

		/** Output only. the version of the rule */
		revisionId: FormControl<string | null | undefined>,

		/** the secondary category */
		secondaryCategory: FormControl<string | null | undefined>,

		/** the severity of the rule */
		severity: FormControl<string | null | undefined>,

		/** the docuement url for the rule */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primaryCategory: new FormControl<string | null | undefined>(undefined),
			remediation: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			secondaryCategory: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for response to list scanned resources */
	export interface ListScannedResourcesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** All scanned resources in response */
		scannedResources?: Array<ScannedResource>;
	}

	/** Message for response to list scanned resources */
	export interface ListScannedResourcesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListScannedResourcesResponseFormGroup() {
		return new FormGroup<ListScannedResourcesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message of scanned resource */
	export interface ScannedResource {

		/** resource name */
		resource?: string | null;
	}

	/** Message of scanned resource */
	export interface ScannedResourceFormProperties {

		/** resource name */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateScannedResourceFormGroup() {
		return new FormGroup<ScannedResourceFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for creating a Execution */
	export interface RunEvaluationRequest {

		/** Message describing Execution object */
		execution?: Execution;

		/** Required. Id of the requesting object If auto-generating Id server-side, remove this field and execution_id from the method_signature of Create RPC */
		executionId?: string | null;

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Message for creating a Execution */
	export interface RunEvaluationRequestFormProperties {

		/** Required. Id of the requesting object If auto-generating Id server-side, remove this field and execution_id from the method_signature of Create RPC */
		executionId: FormControl<string | null | undefined>,

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateRunEvaluationRequestFormGroup() {
		return new FormGroup<RunEvaluationRequestFormProperties>({
			executionId: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for sending the data insights. */
	export interface WriteInsightRequest {

		/** A presentation of host resource usage where the workload runs. */
		insight?: Insight;

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Request for sending the data insights. */
	export interface WriteInsightRequestFormProperties {

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateWriteInsightRequestFormGroup() {
		return new FormGroup<WriteInsightRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for write insights request. */
	export interface WriteInsightResponse {
	}

	/** The response for write insights request. */
	export interface WriteInsightResponseFormProperties {
	}
	export function CreateWriteInsightResponseFormGroup() {
		return new FormGroup<WriteInsightResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Write the data insights to workload manager data warehouse.
		 * Post v1/{location}/insights:writeInsight
		 * @param {string} location Required. The GCP location. The format is: projects/{project}/locations/{location}.
		 * @return {WriteInsightResponse} Successful response
		 */
		Workloadmanager_projects_locations_insights_writeInsight(location: string, requestBody: WriteInsightRequest): Observable<WriteInsightResponse> {
			return this.http.post<WriteInsightResponse>(this.baseUri + 'v1/' + (location == null ? '' : encodeURIComponent(location)) + '/insights:writeInsight', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Workloadmanager_projects_locations_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Workloadmanager_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Creates a new Execution in a given project and location.
		 * Post v1/{name}/executions:run
		 * @param {string} name Required. The resource name of the Execution using the form: 'projects/{project}/locations/{location}/evaluations/{evaluation}/executions/{execution}'
		 * @return {Operation} Successful response
		 */
		Workloadmanager_projects_locations_evaluations_executions_run(name: string, requestBody: RunEvaluationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/executions:run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Workloadmanager_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Workloadmanager_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Workloadmanager_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Evaluations in a given project and location.
		 * Get v1/{parent}/evaluations
		 * @param {string} parent Required. Parent value for ListEvaluationsRequest
		 * @param {string} filter Filtering results
		 * @param {string} orderBy Hint for how to order the results
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {ListEvaluationsResponse} Successful response
		 */
		Workloadmanager_projects_locations_evaluations_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListEvaluationsResponse> {
			return this.http.get<ListEvaluationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/evaluations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Evaluation in a given project and location.
		 * Post v1/{parent}/evaluations
		 * @param {string} parent Required. The resource prefix of the evaluation location using the form: `projects/{project_id}/locations/{location_id}`
		 * @param {string} evaluationId Required. Id of the requesting object
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Workloadmanager_projects_locations_evaluations_create(parent: string, evaluationId: string | null | undefined, requestId: string | null | undefined, requestBody: Evaluation): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/evaluations&evaluationId=' + (evaluationId == null ? '' : encodeURIComponent(evaluationId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Executions in a given project and location.
		 * Get v1/{parent}/executions
		 * @param {string} parent Required. The resource prefix of the Execution using the form: 'projects/{project}/locations/{location}/evaluations/{evaluation}'
		 * @param {string} filter Filtering results
		 * @param {string} orderBy Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {ListExecutionsResponse} Successful response
		 */
		Workloadmanager_projects_locations_evaluations_executions_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListExecutionsResponse> {
			return this.http.get<ListExecutionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/executions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List the running result of a single Execution.
		 * Get v1/{parent}/results
		 * @param {string} parent Required. The execution results. Format: {parent}/evaluations/executions/results
		 * @param {string} filter Filtering results
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {ListExecutionResultsResponse} Successful response
		 */
		Workloadmanager_projects_locations_evaluations_executions_results_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListExecutionResultsResponse> {
			return this.http.get<ListExecutionResultsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/results&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists rules in a given project.
		 * Get v1/{parent}/rules
		 * @param {string} parent Required. The [project] on which to execute the request. The format is: projects/{project_id}/locations/{location} Currently, the pre-defined rules are global available to all projects and all regions
		 * @param {string} customRulesBucket The Cloud Storage bucket name for custom rules.
		 * @param {string} filter Filter based on primary_category, secondary_category
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {ListRulesResponse} Successful response
		 */
		Workloadmanager_projects_locations_rules_list(parent: string, customRulesBucket: string | null | undefined, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRulesResponse> {
			return this.http.get<ListRulesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rules&customRulesBucket=' + (customRulesBucket == null ? '' : encodeURIComponent(customRulesBucket)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List all scanned resources for a single Execution.
		 * Get v1/{parent}/scannedResources
		 * @param {string} parent Required. parent for ListScannedResourcesRequest
		 * @param {string} filter Filtering results
		 * @param {string} orderBy Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @param {string} rule rule name
		 * @return {ListScannedResourcesResponse} Successful response
		 */
		Workloadmanager_projects_locations_evaluations_executions_scannedResources_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, rule: string | null | undefined): Observable<ListScannedResourcesResponse> {
			return this.http.get<ListScannedResourcesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/scannedResources&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rule=' + (rule == null ? '' : encodeURIComponent(rule)), {});
		}
	}

}

