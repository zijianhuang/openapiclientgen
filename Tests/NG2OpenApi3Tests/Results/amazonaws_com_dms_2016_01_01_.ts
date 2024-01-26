import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** <p/> */
	export interface AddTagsToResourceResponse {
	}

	/** <p/> */
	export interface AddTagsToResourceResponseFormProperties {
	}
	export function CreateAddTagsToResourceResponseFormGroup() {
		return new FormGroup<AddTagsToResourceResponseFormProperties>({
		});

	}


	/** Associates a set of tags with an DMS resource. */
	export interface AddTagsToResourceMessage {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}

	/** Associates a set of tags with an DMS resource. */
	export interface AddTagsToResourceMessageFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsToResourceMessageFormGroup() {
		return new FormGroup<AddTagsToResourceMessageFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A user-defined key-value pair that describes metadata added to an DMS resource and that is used by operations such as the following:</p> <ul> <li> <p> <code>AddTagsToResource</code> </p> </li> <li> <p> <code>ListTagsForResource</code> </p> </li> <li> <p> <code>RemoveTagsFromResource</code> </p> </li> </ul> */
	export interface Tag {
		Key?: string;
		Value?: string;
		ResourceArn?: string;
	}

	/** <p>A user-defined key-value pair that describes metadata added to an DMS resource and that is used by operations such as the following:</p> <ul> <li> <p> <code>AddTagsToResource</code> </p> </li> <li> <p> <code>ListTagsForResource</code> </p> </li> <li> <p> <code>RemoveTagsFromResource</code> </p> </li> </ul> */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceNotFoundFault {
	}
	export interface ResourceNotFoundFaultFormProperties {
	}
	export function CreateResourceNotFoundFaultFormGroup() {
		return new FormGroup<ResourceNotFoundFaultFormProperties>({
		});

	}


	/** <p/> */
	export interface ApplyPendingMaintenanceActionResponse {
		ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
	}

	/** <p/> */
	export interface ApplyPendingMaintenanceActionResponseFormProperties {
	}
	export function CreateApplyPendingMaintenanceActionResponseFormGroup() {
		return new FormGroup<ApplyPendingMaintenanceActionResponseFormProperties>({
		});

	}


	/** Identifies an DMS resource and any pending actions for it. */
	export interface ResourcePendingMaintenanceActions {
		ResourceIdentifier?: string;
		PendingMaintenanceActionDetails?: Array<PendingMaintenanceAction>;
	}

	/** Identifies an DMS resource and any pending actions for it. */
	export interface ResourcePendingMaintenanceActionsFormProperties {
		ResourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateResourcePendingMaintenanceActionsFormGroup() {
		return new FormGroup<ResourcePendingMaintenanceActionsFormProperties>({
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a maintenance action pending for an DMS resource, including when and how it will be applied. This data type is a response element to the <code>DescribePendingMaintenanceActions</code> operation. */
	export interface PendingMaintenanceAction {
		Action?: string;
		AutoAppliedAfterDate?: Date;
		ForcedApplyDate?: Date;
		OptInStatus?: string;
		CurrentApplyDate?: Date;
		Description?: string;
	}

	/** Describes a maintenance action pending for an DMS resource, including when and how it will be applied. This data type is a response element to the <code>DescribePendingMaintenanceActions</code> operation. */
	export interface PendingMaintenanceActionFormProperties {
		Action: FormControl<string | null | undefined>,
		AutoAppliedAfterDate: FormControl<Date | null | undefined>,
		ForcedApplyDate: FormControl<Date | null | undefined>,
		OptInStatus: FormControl<string | null | undefined>,
		CurrentApplyDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreatePendingMaintenanceActionFormGroup() {
		return new FormGroup<PendingMaintenanceActionFormProperties>({
			Action: new FormControl<string | null | undefined>(undefined),
			AutoAppliedAfterDate: new FormControl<Date | null | undefined>(undefined),
			ForcedApplyDate: new FormControl<Date | null | undefined>(undefined),
			OptInStatus: new FormControl<string | null | undefined>(undefined),
			CurrentApplyDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ApplyPendingMaintenanceActionMessage {

		/** Required */
		ReplicationInstanceArn: string;

		/** Required */
		ApplyAction: string;

		/** Required */
		OptInType: string;
	}

	/** <p/> */
	export interface ApplyPendingMaintenanceActionMessageFormProperties {

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		ApplyAction: FormControl<string | null | undefined>,

		/** Required */
		OptInType: FormControl<string | null | undefined>,
	}
	export function CreateApplyPendingMaintenanceActionMessageFormGroup() {
		return new FormGroup<ApplyPendingMaintenanceActionMessageFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplyAction: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OptInType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchStartRecommendationsResponse {
		ErrorEntries?: Array<BatchStartRecommendationsErrorEntry>;
	}
	export interface BatchStartRecommendationsResponseFormProperties {
	}
	export function CreateBatchStartRecommendationsResponseFormGroup() {
		return new FormGroup<BatchStartRecommendationsResponseFormProperties>({
		});

	}


	/** Provides information about the errors that occurred during the analysis of the source database. */
	export interface BatchStartRecommendationsErrorEntry {
		DatabaseId?: string;
		Message?: string;
		Code?: string;
	}

	/** Provides information about the errors that occurred during the analysis of the source database. */
	export interface BatchStartRecommendationsErrorEntryFormProperties {
		DatabaseId: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
	}
	export function CreateBatchStartRecommendationsErrorEntryFormGroup() {
		return new FormGroup<BatchStartRecommendationsErrorEntryFormProperties>({
			DatabaseId: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchStartRecommendationsRequest {
		Data?: Array<StartRecommendationsRequestEntry>;
	}
	export interface BatchStartRecommendationsRequestFormProperties {
	}
	export function CreateBatchStartRecommendationsRequestFormGroup() {
		return new FormGroup<BatchStartRecommendationsRequestFormProperties>({
		});

	}


	/** Provides information about the source database to analyze and provide target recommendations according to the specified requirements. */
	export interface StartRecommendationsRequestEntry {

		/** Required */
		DatabaseId: string;

		/** Required */
		Settings: RecommendationSettings;
	}

	/** Provides information about the source database to analyze and provide target recommendations according to the specified requirements. */
	export interface StartRecommendationsRequestEntryFormProperties {

		/** Required */
		DatabaseId: FormControl<string | null | undefined>,
	}
	export function CreateStartRecommendationsRequestEntryFormGroup() {
		return new FormGroup<StartRecommendationsRequestEntryFormProperties>({
			DatabaseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides information about the required target engine settings. */
	export interface RecommendationSettings {

		/** Required */
		InstanceSizingType: string;

		/** Required */
		WorkloadType: string;
	}

	/** Provides information about the required target engine settings. */
	export interface RecommendationSettingsFormProperties {

		/** Required */
		InstanceSizingType: FormControl<string | null | undefined>,

		/** Required */
		WorkloadType: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationSettingsFormGroup() {
		return new FormGroup<RecommendationSettingsFormProperties>({
			InstanceSizingType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkloadType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidResourceStateFault {
	}
	export interface InvalidResourceStateFaultFormProperties {
	}
	export function CreateInvalidResourceStateFaultFormGroup() {
		return new FormGroup<InvalidResourceStateFaultFormProperties>({
		});

	}

	export interface AccessDeniedFault {
	}
	export interface AccessDeniedFaultFormProperties {
	}
	export function CreateAccessDeniedFaultFormGroup() {
		return new FormGroup<AccessDeniedFaultFormProperties>({
		});

	}


	/** <p/> */
	export interface CancelReplicationTaskAssessmentRunResponse {
		ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
	}

	/** <p/> */
	export interface CancelReplicationTaskAssessmentRunResponseFormProperties {
	}
	export function CreateCancelReplicationTaskAssessmentRunResponseFormGroup() {
		return new FormGroup<CancelReplicationTaskAssessmentRunResponseFormProperties>({
		});

	}


	/** <p>Provides information that describes a premigration assessment run that you have started using the <code>StartReplicationTaskAssessmentRun</code> operation.</p> <p>Some of the information appears based on other operations that can return the <code>ReplicationTaskAssessmentRun</code> object.</p> */
	export interface ReplicationTaskAssessmentRun {
		ReplicationTaskAssessmentRunArn?: string;
		ReplicationTaskArn?: string;
		Status?: string;
		ReplicationTaskAssessmentRunCreationDate?: Date;
		AssessmentProgress?: ReplicationTaskAssessmentRunProgress;
		LastFailureMessage?: string;
		ServiceAccessRoleArn?: string;
		ResultLocationBucket?: string;
		ResultLocationFolder?: string;
		ResultEncryptionMode?: string;
		ResultKmsKeyArn?: string;
		AssessmentRunName?: string;
	}

	/** <p>Provides information that describes a premigration assessment run that you have started using the <code>StartReplicationTaskAssessmentRun</code> operation.</p> <p>Some of the information appears based on other operations that can return the <code>ReplicationTaskAssessmentRun</code> object.</p> */
	export interface ReplicationTaskAssessmentRunFormProperties {
		ReplicationTaskAssessmentRunArn: FormControl<string | null | undefined>,
		ReplicationTaskArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		ReplicationTaskAssessmentRunCreationDate: FormControl<Date | null | undefined>,
		LastFailureMessage: FormControl<string | null | undefined>,
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		ResultLocationBucket: FormControl<string | null | undefined>,
		ResultLocationFolder: FormControl<string | null | undefined>,
		ResultEncryptionMode: FormControl<string | null | undefined>,
		ResultKmsKeyArn: FormControl<string | null | undefined>,
		AssessmentRunName: FormControl<string | null | undefined>,
	}
	export function CreateReplicationTaskAssessmentRunFormGroup() {
		return new FormGroup<ReplicationTaskAssessmentRunFormProperties>({
			ReplicationTaskAssessmentRunArn: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskAssessmentRunCreationDate: new FormControl<Date | null | undefined>(undefined),
			LastFailureMessage: new FormControl<string | null | undefined>(undefined),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			ResultLocationBucket: new FormControl<string | null | undefined>(undefined),
			ResultLocationFolder: new FormControl<string | null | undefined>(undefined),
			ResultEncryptionMode: new FormControl<string | null | undefined>(undefined),
			ResultKmsKeyArn: new FormControl<string | null | undefined>(undefined),
			AssessmentRunName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The progress values reported by the <code>AssessmentProgress</code> response element. */
	export interface ReplicationTaskAssessmentRunProgress {
		IndividualAssessmentCount?: number | null;
		IndividualAssessmentCompletedCount?: number | null;
	}

	/** The progress values reported by the <code>AssessmentProgress</code> response element. */
	export interface ReplicationTaskAssessmentRunProgressFormProperties {
		IndividualAssessmentCount: FormControl<number | null | undefined>,
		IndividualAssessmentCompletedCount: FormControl<number | null | undefined>,
	}
	export function CreateReplicationTaskAssessmentRunProgressFormGroup() {
		return new FormGroup<ReplicationTaskAssessmentRunProgressFormProperties>({
			IndividualAssessmentCount: new FormControl<number | null | undefined>(undefined),
			IndividualAssessmentCompletedCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CancelReplicationTaskAssessmentRunMessage {

		/** Required */
		ReplicationTaskAssessmentRunArn: string;
	}

	/** <p/> */
	export interface CancelReplicationTaskAssessmentRunMessageFormProperties {

		/** Required */
		ReplicationTaskAssessmentRunArn: FormControl<string | null | undefined>,
	}
	export function CreateCancelReplicationTaskAssessmentRunMessageFormGroup() {
		return new FormGroup<CancelReplicationTaskAssessmentRunMessageFormProperties>({
			ReplicationTaskAssessmentRunArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDataProviderResponse {
		DataProvider?: DataProvider;
	}
	export interface CreateDataProviderResponseFormProperties {
	}
	export function CreateCreateDataProviderResponseFormGroup() {
		return new FormGroup<CreateDataProviderResponseFormProperties>({
		});

	}


	/** Provides information that defines a data provider. */
	export interface DataProvider {
		DataProviderName?: string;
		DataProviderArn?: string;
		DataProviderCreationTime?: Date;
		Description?: string;
		Engine?: string;
		Settings?: DataProviderSettings;
	}

	/** Provides information that defines a data provider. */
	export interface DataProviderFormProperties {
		DataProviderName: FormControl<string | null | undefined>,
		DataProviderArn: FormControl<string | null | undefined>,
		DataProviderCreationTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
	}
	export function CreateDataProviderFormGroup() {
		return new FormGroup<DataProviderFormProperties>({
			DataProviderName: new FormControl<string | null | undefined>(undefined),
			DataProviderArn: new FormControl<string | null | undefined>(undefined),
			DataProviderCreationTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information that defines a data provider. */
	export interface DataProviderSettings {

		/** Provides information that defines a PostgreSQL data provider. */
		PostgreSqlSettings?: PostgreSqlDataProviderSettings;

		/** Provides information that defines a MySQL data provider. */
		MySqlSettings?: MySqlDataProviderSettings;

		/** Provides information that defines an Oracle data provider. */
		OracleSettings?: OracleDataProviderSettings;

		/** Provides information that defines a Microsoft SQL Server data provider. */
		MicrosoftSqlServerSettings?: MicrosoftSqlServerDataProviderSettings;
	}

	/** Provides information that defines a data provider. */
	export interface DataProviderSettingsFormProperties {
	}
	export function CreateDataProviderSettingsFormGroup() {
		return new FormGroup<DataProviderSettingsFormProperties>({
		});

	}


	/** Provides information that defines a PostgreSQL data provider. */
	export interface PostgreSqlDataProviderSettings {
		ServerName?: string;
		Port?: number | null;
		DatabaseName?: string;
		SslMode?: DmsSslModeValue;
		CertificateArn?: string;
	}

	/** Provides information that defines a PostgreSQL data provider. */
	export interface PostgreSqlDataProviderSettingsFormProperties {
		ServerName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		SslMode: FormControl<DmsSslModeValue | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreatePostgreSqlDataProviderSettingsFormGroup() {
		return new FormGroup<PostgreSqlDataProviderSettingsFormProperties>({
			ServerName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			SslMode: new FormControl<DmsSslModeValue | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DmsSslModeValue { none = 0, require = 1, 'verify-ca' = 2, 'verify-full' = 3 }


	/** Provides information that defines a MySQL data provider. */
	export interface MySqlDataProviderSettings {
		ServerName?: string;
		Port?: number | null;
		SslMode?: DmsSslModeValue;
		CertificateArn?: string;
	}

	/** Provides information that defines a MySQL data provider. */
	export interface MySqlDataProviderSettingsFormProperties {
		ServerName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		SslMode: FormControl<DmsSslModeValue | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateMySqlDataProviderSettingsFormGroup() {
		return new FormGroup<MySqlDataProviderSettingsFormProperties>({
			ServerName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			SslMode: new FormControl<DmsSslModeValue | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information that defines an Oracle data provider. */
	export interface OracleDataProviderSettings {
		ServerName?: string;
		Port?: number | null;
		DatabaseName?: string;
		SslMode?: DmsSslModeValue;
		CertificateArn?: string;
		AsmServer?: string;
		SecretsManagerOracleAsmSecretId?: string;
		SecretsManagerOracleAsmAccessRoleArn?: string;
		SecretsManagerSecurityDbEncryptionSecretId?: string;
		SecretsManagerSecurityDbEncryptionAccessRoleArn?: string;
	}

	/** Provides information that defines an Oracle data provider. */
	export interface OracleDataProviderSettingsFormProperties {
		ServerName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		SslMode: FormControl<DmsSslModeValue | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
		AsmServer: FormControl<string | null | undefined>,
		SecretsManagerOracleAsmSecretId: FormControl<string | null | undefined>,
		SecretsManagerOracleAsmAccessRoleArn: FormControl<string | null | undefined>,
		SecretsManagerSecurityDbEncryptionSecretId: FormControl<string | null | undefined>,
		SecretsManagerSecurityDbEncryptionAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateOracleDataProviderSettingsFormGroup() {
		return new FormGroup<OracleDataProviderSettingsFormProperties>({
			ServerName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			SslMode: new FormControl<DmsSslModeValue | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			AsmServer: new FormControl<string | null | undefined>(undefined),
			SecretsManagerOracleAsmSecretId: new FormControl<string | null | undefined>(undefined),
			SecretsManagerOracleAsmAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			SecretsManagerSecurityDbEncryptionSecretId: new FormControl<string | null | undefined>(undefined),
			SecretsManagerSecurityDbEncryptionAccessRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information that defines a Microsoft SQL Server data provider. */
	export interface MicrosoftSqlServerDataProviderSettings {
		ServerName?: string;
		Port?: number | null;
		DatabaseName?: string;
		SslMode?: DmsSslModeValue;
		CertificateArn?: string;
	}

	/** Provides information that defines a Microsoft SQL Server data provider. */
	export interface MicrosoftSqlServerDataProviderSettingsFormProperties {
		ServerName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		SslMode: FormControl<DmsSslModeValue | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateMicrosoftSqlServerDataProviderSettingsFormGroup() {
		return new FormGroup<MicrosoftSqlServerDataProviderSettingsFormProperties>({
			ServerName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			SslMode: new FormControl<DmsSslModeValue | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataProviderMessage {
		DataProviderName?: string;
		Description?: string;

		/** Required */
		Engine: string;

		/** Required */
		Settings: DataProviderSettings;
		Tags?: Array<Tag>;
	}
	export interface CreateDataProviderMessageFormProperties {
		DataProviderName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Engine: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataProviderMessageFormGroup() {
		return new FormGroup<CreateDataProviderMessageFormProperties>({
			DataProviderName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceQuotaExceededFault {
	}
	export interface ResourceQuotaExceededFaultFormProperties {
	}
	export function CreateResourceQuotaExceededFaultFormGroup() {
		return new FormGroup<ResourceQuotaExceededFaultFormProperties>({
		});

	}

	export interface ResourceAlreadyExistsFault {
	}
	export interface ResourceAlreadyExistsFaultFormProperties {
	}
	export function CreateResourceAlreadyExistsFaultFormGroup() {
		return new FormGroup<ResourceAlreadyExistsFaultFormProperties>({
		});

	}


	/** <p/> */
	export interface CreateEndpointResponse {
		Endpoint?: Endpoint;
	}

	/** <p/> */
	export interface CreateEndpointResponseFormProperties {
	}
	export function CreateCreateEndpointResponseFormGroup() {
		return new FormGroup<CreateEndpointResponseFormProperties>({
		});

	}


	/** <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul> */
	export interface Endpoint {
		EndpointIdentifier?: string;
		EndpointType?: ReplicationEndpointTypeValue;
		EngineName?: string;
		EngineDisplayName?: string;
		Username?: string;
		ServerName?: string;
		Port?: number | null;
		DatabaseName?: string;
		ExtraConnectionAttributes?: string;
		Status?: string;
		KmsKeyId?: string;
		EndpointArn?: string;
		CertificateArn?: string;
		SslMode?: DmsSslModeValue;
		ServiceAccessRoleArn?: string;
		ExternalTableDefinition?: string;
		ExternalId?: string;
		DynamoDbSettings?: DynamoDbSettings;
		S3Settings?: S3Settings;
		DmsTransferSettings?: DmsTransferSettings;
		MongoDbSettings?: MongoDbSettings;
		KinesisSettings?: KinesisSettings;
		KafkaSettings?: KafkaSettings;
		ElasticsearchSettings?: ElasticsearchSettings;
		NeptuneSettings?: NeptuneSettings;
		RedshiftSettings?: RedshiftSettings;
		PostgreSQLSettings?: PostgreSQLSettings;
		MySQLSettings?: MySQLSettings;
		OracleSettings?: OracleSettings;
		SybaseSettings?: SybaseSettings;
		MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;
		IBMDb2Settings?: IBMDb2Settings;

		/** Provides information that defines a DocumentDB endpoint. */
		DocDbSettings?: DocDbSettings;
		RedisSettings?: RedisSettings;
		GcpMySQLSettings?: GcpMySQLSettings;
		TimestreamSettings?: TimestreamSettings;
	}

	/** <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul> */
	export interface EndpointFormProperties {
		EndpointIdentifier: FormControl<string | null | undefined>,
		EndpointType: FormControl<ReplicationEndpointTypeValue | null | undefined>,
		EngineName: FormControl<string | null | undefined>,
		EngineDisplayName: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		ExtraConnectionAttributes: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		EndpointArn: FormControl<string | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
		SslMode: FormControl<DmsSslModeValue | null | undefined>,
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		ExternalTableDefinition: FormControl<string | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			EndpointIdentifier: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<ReplicationEndpointTypeValue | null | undefined>(undefined),
			EngineName: new FormControl<string | null | undefined>(undefined),
			EngineDisplayName: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			ExtraConnectionAttributes: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			EndpointArn: new FormControl<string | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			SslMode: new FormControl<DmsSslModeValue | null | undefined>(undefined),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			ExternalTableDefinition: new FormControl<string | null | undefined>(undefined),
			ExternalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReplicationEndpointTypeValue { source = 0, target = 1 }


	/** Provides the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint. */
	export interface DynamoDbSettings {

		/** Required */
		ServiceAccessRoleArn: string;
	}

	/** Provides the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint. */
	export interface DynamoDbSettingsFormProperties {

		/** Required */
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateDynamoDbSettingsFormGroup() {
		return new FormGroup<DynamoDbSettingsFormProperties>({
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings for exporting data to Amazon S3.  */
	export interface S3Settings {
		ServiceAccessRoleArn?: string;
		ExternalTableDefinition?: string;
		CsvRowDelimiter?: string;
		CsvDelimiter?: string;
		BucketFolder?: string;
		BucketName?: string;
		CompressionType?: CompressionTypeValue;
		EncryptionMode?: EncryptionModeValue;
		ServerSideEncryptionKmsKeyId?: string;
		DataFormat?: DataFormatValue;
		EncodingType?: EncodingTypeValue;
		DictPageSizeLimit?: number | null;
		RowGroupLength?: number | null;
		DataPageSize?: number | null;
		ParquetVersion?: ParquetVersionValue;
		EnableStatistics?: boolean | null;
		IncludeOpForFullLoad?: boolean | null;
		CdcInsertsOnly?: boolean | null;
		TimestampColumnName?: string;
		ParquetTimestampInMillisecond?: boolean | null;
		CdcInsertsAndUpdates?: boolean | null;
		DatePartitionEnabled?: boolean | null;
		DatePartitionSequence?: DatePartitionSequenceValue;
		DatePartitionDelimiter?: DatePartitionDelimiterValue;
		UseCsvNoSupValue?: boolean | null;
		CsvNoSupValue?: string;
		PreserveTransactions?: boolean | null;
		CdcPath?: string;
		UseTaskStartTimeForFullLoadTimestamp?: boolean | null;
		CannedAclForObjects?: CannedAclForObjectsValue;
		AddColumnName?: boolean | null;
		CdcMaxBatchInterval?: number | null;
		CdcMinFileSize?: number | null;
		CsvNullValue?: string;
		IgnoreHeaderRows?: number | null;
		MaxFileSize?: number | null;
		Rfc4180?: boolean | null;
		DatePartitionTimezone?: string;
		AddTrailingPaddingCharacter?: boolean | null;
		ExpectedBucketOwner?: string;
		GlueCatalogGeneration?: boolean | null;
	}

	/** Settings for exporting data to Amazon S3.  */
	export interface S3SettingsFormProperties {
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		ExternalTableDefinition: FormControl<string | null | undefined>,
		CsvRowDelimiter: FormControl<string | null | undefined>,
		CsvDelimiter: FormControl<string | null | undefined>,
		BucketFolder: FormControl<string | null | undefined>,
		BucketName: FormControl<string | null | undefined>,
		CompressionType: FormControl<CompressionTypeValue | null | undefined>,
		EncryptionMode: FormControl<EncryptionModeValue | null | undefined>,
		ServerSideEncryptionKmsKeyId: FormControl<string | null | undefined>,
		DataFormat: FormControl<DataFormatValue | null | undefined>,
		EncodingType: FormControl<EncodingTypeValue | null | undefined>,
		DictPageSizeLimit: FormControl<number | null | undefined>,
		RowGroupLength: FormControl<number | null | undefined>,
		DataPageSize: FormControl<number | null | undefined>,
		ParquetVersion: FormControl<ParquetVersionValue | null | undefined>,
		EnableStatistics: FormControl<boolean | null | undefined>,
		IncludeOpForFullLoad: FormControl<boolean | null | undefined>,
		CdcInsertsOnly: FormControl<boolean | null | undefined>,
		TimestampColumnName: FormControl<string | null | undefined>,
		ParquetTimestampInMillisecond: FormControl<boolean | null | undefined>,
		CdcInsertsAndUpdates: FormControl<boolean | null | undefined>,
		DatePartitionEnabled: FormControl<boolean | null | undefined>,
		DatePartitionSequence: FormControl<DatePartitionSequenceValue | null | undefined>,
		DatePartitionDelimiter: FormControl<DatePartitionDelimiterValue | null | undefined>,
		UseCsvNoSupValue: FormControl<boolean | null | undefined>,
		CsvNoSupValue: FormControl<string | null | undefined>,
		PreserveTransactions: FormControl<boolean | null | undefined>,
		CdcPath: FormControl<string | null | undefined>,
		UseTaskStartTimeForFullLoadTimestamp: FormControl<boolean | null | undefined>,
		CannedAclForObjects: FormControl<CannedAclForObjectsValue | null | undefined>,
		AddColumnName: FormControl<boolean | null | undefined>,
		CdcMaxBatchInterval: FormControl<number | null | undefined>,
		CdcMinFileSize: FormControl<number | null | undefined>,
		CsvNullValue: FormControl<string | null | undefined>,
		IgnoreHeaderRows: FormControl<number | null | undefined>,
		MaxFileSize: FormControl<number | null | undefined>,
		Rfc4180: FormControl<boolean | null | undefined>,
		DatePartitionTimezone: FormControl<string | null | undefined>,
		AddTrailingPaddingCharacter: FormControl<boolean | null | undefined>,
		ExpectedBucketOwner: FormControl<string | null | undefined>,
		GlueCatalogGeneration: FormControl<boolean | null | undefined>,
	}
	export function CreateS3SettingsFormGroup() {
		return new FormGroup<S3SettingsFormProperties>({
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			ExternalTableDefinition: new FormControl<string | null | undefined>(undefined),
			CsvRowDelimiter: new FormControl<string | null | undefined>(undefined),
			CsvDelimiter: new FormControl<string | null | undefined>(undefined),
			BucketFolder: new FormControl<string | null | undefined>(undefined),
			BucketName: new FormControl<string | null | undefined>(undefined),
			CompressionType: new FormControl<CompressionTypeValue | null | undefined>(undefined),
			EncryptionMode: new FormControl<EncryptionModeValue | null | undefined>(undefined),
			ServerSideEncryptionKmsKeyId: new FormControl<string | null | undefined>(undefined),
			DataFormat: new FormControl<DataFormatValue | null | undefined>(undefined),
			EncodingType: new FormControl<EncodingTypeValue | null | undefined>(undefined),
			DictPageSizeLimit: new FormControl<number | null | undefined>(undefined),
			RowGroupLength: new FormControl<number | null | undefined>(undefined),
			DataPageSize: new FormControl<number | null | undefined>(undefined),
			ParquetVersion: new FormControl<ParquetVersionValue | null | undefined>(undefined),
			EnableStatistics: new FormControl<boolean | null | undefined>(undefined),
			IncludeOpForFullLoad: new FormControl<boolean | null | undefined>(undefined),
			CdcInsertsOnly: new FormControl<boolean | null | undefined>(undefined),
			TimestampColumnName: new FormControl<string | null | undefined>(undefined),
			ParquetTimestampInMillisecond: new FormControl<boolean | null | undefined>(undefined),
			CdcInsertsAndUpdates: new FormControl<boolean | null | undefined>(undefined),
			DatePartitionEnabled: new FormControl<boolean | null | undefined>(undefined),
			DatePartitionSequence: new FormControl<DatePartitionSequenceValue | null | undefined>(undefined),
			DatePartitionDelimiter: new FormControl<DatePartitionDelimiterValue | null | undefined>(undefined),
			UseCsvNoSupValue: new FormControl<boolean | null | undefined>(undefined),
			CsvNoSupValue: new FormControl<string | null | undefined>(undefined),
			PreserveTransactions: new FormControl<boolean | null | undefined>(undefined),
			CdcPath: new FormControl<string | null | undefined>(undefined),
			UseTaskStartTimeForFullLoadTimestamp: new FormControl<boolean | null | undefined>(undefined),
			CannedAclForObjects: new FormControl<CannedAclForObjectsValue | null | undefined>(undefined),
			AddColumnName: new FormControl<boolean | null | undefined>(undefined),
			CdcMaxBatchInterval: new FormControl<number | null | undefined>(undefined),
			CdcMinFileSize: new FormControl<number | null | undefined>(undefined),
			CsvNullValue: new FormControl<string | null | undefined>(undefined),
			IgnoreHeaderRows: new FormControl<number | null | undefined>(undefined),
			MaxFileSize: new FormControl<number | null | undefined>(undefined),
			Rfc4180: new FormControl<boolean | null | undefined>(undefined),
			DatePartitionTimezone: new FormControl<string | null | undefined>(undefined),
			AddTrailingPaddingCharacter: new FormControl<boolean | null | undefined>(undefined),
			ExpectedBucketOwner: new FormControl<string | null | undefined>(undefined),
			GlueCatalogGeneration: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CompressionTypeValue { none = 0, gzip = 1 }

	export enum EncryptionModeValue { 'sse-s3' = 0, 'sse-kms' = 1 }

	export enum DataFormatValue { csv = 0, parquet = 1 }

	export enum EncodingTypeValue { plain = 0, 'plain-dictionary' = 1, 'rle-dictionary' = 2 }

	export enum ParquetVersionValue { 'parquet-1-0' = 0, 'parquet-2-0' = 1 }

	export enum DatePartitionSequenceValue { YYYYMMDD = 0, YYYYMMDDHH = 1, YYYYMM = 2, MMYYYYDD = 3, DDMMYYYY = 4 }

	export enum DatePartitionDelimiterValue { SLASH = 0, UNDERSCORE = 1, DASH = 2, NONE = 3 }

	export enum CannedAclForObjectsValue { none = 0, private = 1, 'public-read' = 2, 'public-read-write' = 3, 'authenticated-read' = 4, 'aws-exec-read' = 5, 'bucket-owner-read' = 6, 'bucket-owner-full-control' = 7 }


	/**  The settings in JSON format for the DMS Transfer type source endpoint.  */
	export interface DmsTransferSettings {
		ServiceAccessRoleArn?: string;
		BucketName?: string;
	}

	/**  The settings in JSON format for the DMS Transfer type source endpoint.  */
	export interface DmsTransferSettingsFormProperties {
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		BucketName: FormControl<string | null | undefined>,
	}
	export function CreateDmsTransferSettingsFormGroup() {
		return new FormGroup<DmsTransferSettingsFormProperties>({
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			BucketName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information that defines a MongoDB endpoint. */
	export interface MongoDbSettings {
		Username?: string;
		Password?: string;
		ServerName?: string;
		Port?: number | null;
		DatabaseName?: string;
		AuthType?: AuthTypeValue;
		AuthMechanism?: AuthMechanismValue;
		NestingLevel?: NestingLevelValue;
		ExtractDocId?: string;
		DocsToInvestigate?: string;
		AuthSource?: string;
		KmsKeyId?: string;
		SecretsManagerAccessRoleArn?: string;
		SecretsManagerSecretId?: string;
		UseUpdateLookUp?: boolean | null;
		ReplicateShardCollections?: boolean | null;
	}

	/** Provides information that defines a MongoDB endpoint. */
	export interface MongoDbSettingsFormProperties {
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		AuthType: FormControl<AuthTypeValue | null | undefined>,
		AuthMechanism: FormControl<AuthMechanismValue | null | undefined>,
		NestingLevel: FormControl<NestingLevelValue | null | undefined>,
		ExtractDocId: FormControl<string | null | undefined>,
		DocsToInvestigate: FormControl<string | null | undefined>,
		AuthSource: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		SecretsManagerAccessRoleArn: FormControl<string | null | undefined>,
		SecretsManagerSecretId: FormControl<string | null | undefined>,
		UseUpdateLookUp: FormControl<boolean | null | undefined>,
		ReplicateShardCollections: FormControl<boolean | null | undefined>,
	}
	export function CreateMongoDbSettingsFormGroup() {
		return new FormGroup<MongoDbSettingsFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			AuthType: new FormControl<AuthTypeValue | null | undefined>(undefined),
			AuthMechanism: new FormControl<AuthMechanismValue | null | undefined>(undefined),
			NestingLevel: new FormControl<NestingLevelValue | null | undefined>(undefined),
			ExtractDocId: new FormControl<string | null | undefined>(undefined),
			DocsToInvestigate: new FormControl<string | null | undefined>(undefined),
			AuthSource: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			SecretsManagerAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			SecretsManagerSecretId: new FormControl<string | null | undefined>(undefined),
			UseUpdateLookUp: new FormControl<boolean | null | undefined>(undefined),
			ReplicateShardCollections: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AuthTypeValue { no = 0, password = 1 }

	export enum AuthMechanismValue { default = 0, mongodb_cr = 1, scram_sha_1 = 2 }

	export enum NestingLevelValue { none = 0, one = 1 }


	/** Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
	export interface KinesisSettings {
		StreamArn?: string;
		MessageFormat?: MessageFormatValue;
		ServiceAccessRoleArn?: string;
		IncludeTransactionDetails?: boolean | null;
		IncludePartitionValue?: boolean | null;
		PartitionIncludeSchemaTable?: boolean | null;
		IncludeTableAlterOperations?: boolean | null;
		IncludeControlDetails?: boolean | null;
		IncludeNullAndEmpty?: boolean | null;
		NoHexPrefix?: boolean | null;
	}

	/** Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
	export interface KinesisSettingsFormProperties {
		StreamArn: FormControl<string | null | undefined>,
		MessageFormat: FormControl<MessageFormatValue | null | undefined>,
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		IncludeTransactionDetails: FormControl<boolean | null | undefined>,
		IncludePartitionValue: FormControl<boolean | null | undefined>,
		PartitionIncludeSchemaTable: FormControl<boolean | null | undefined>,
		IncludeTableAlterOperations: FormControl<boolean | null | undefined>,
		IncludeControlDetails: FormControl<boolean | null | undefined>,
		IncludeNullAndEmpty: FormControl<boolean | null | undefined>,
		NoHexPrefix: FormControl<boolean | null | undefined>,
	}
	export function CreateKinesisSettingsFormGroup() {
		return new FormGroup<KinesisSettingsFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined),
			MessageFormat: new FormControl<MessageFormatValue | null | undefined>(undefined),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			IncludeTransactionDetails: new FormControl<boolean | null | undefined>(undefined),
			IncludePartitionValue: new FormControl<boolean | null | undefined>(undefined),
			PartitionIncludeSchemaTable: new FormControl<boolean | null | undefined>(undefined),
			IncludeTableAlterOperations: new FormControl<boolean | null | undefined>(undefined),
			IncludeControlDetails: new FormControl<boolean | null | undefined>(undefined),
			IncludeNullAndEmpty: new FormControl<boolean | null | undefined>(undefined),
			NoHexPrefix: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum MessageFormatValue { json = 0, 'json-unformatted' = 1 }


	/** Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
	export interface KafkaSettings {
		Broker?: string;
		Topic?: string;
		MessageFormat?: MessageFormatValue;
		IncludeTransactionDetails?: boolean | null;
		IncludePartitionValue?: boolean | null;
		PartitionIncludeSchemaTable?: boolean | null;
		IncludeTableAlterOperations?: boolean | null;
		IncludeControlDetails?: boolean | null;
		MessageMaxBytes?: number | null;
		IncludeNullAndEmpty?: boolean | null;
		SecurityProtocol?: KafkaSecurityProtocol;
		SslClientCertificateArn?: string;
		SslClientKeyArn?: string;
		SslClientKeyPassword?: string;
		SslCaCertificateArn?: string;
		SaslUsername?: string;
		SaslPassword?: string;
		NoHexPrefix?: boolean | null;
		SaslMechanism?: KafkaSaslMechanism;
		SslEndpointIdentificationAlgorithm?: KafkaSslEndpointIdentificationAlgorithm;
	}

	/** Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
	export interface KafkaSettingsFormProperties {
		Broker: FormControl<string | null | undefined>,
		Topic: FormControl<string | null | undefined>,
		MessageFormat: FormControl<MessageFormatValue | null | undefined>,
		IncludeTransactionDetails: FormControl<boolean | null | undefined>,
		IncludePartitionValue: FormControl<boolean | null | undefined>,
		PartitionIncludeSchemaTable: FormControl<boolean | null | undefined>,
		IncludeTableAlterOperations: FormControl<boolean | null | undefined>,
		IncludeControlDetails: FormControl<boolean | null | undefined>,
		MessageMaxBytes: FormControl<number | null | undefined>,
		IncludeNullAndEmpty: FormControl<boolean | null | undefined>,
		SecurityProtocol: FormControl<KafkaSecurityProtocol | null | undefined>,
		SslClientCertificateArn: FormControl<string | null | undefined>,
		SslClientKeyArn: FormControl<string | null | undefined>,
		SslClientKeyPassword: FormControl<string | null | undefined>,
		SslCaCertificateArn: FormControl<string | null | undefined>,
		SaslUsername: FormControl<string | null | undefined>,
		SaslPassword: FormControl<string | null | undefined>,
		NoHexPrefix: FormControl<boolean | null | undefined>,
		SaslMechanism: FormControl<KafkaSaslMechanism | null | undefined>,
		SslEndpointIdentificationAlgorithm: FormControl<KafkaSslEndpointIdentificationAlgorithm | null | undefined>,
	}
	export function CreateKafkaSettingsFormGroup() {
		return new FormGroup<KafkaSettingsFormProperties>({
			Broker: new FormControl<string | null | undefined>(undefined),
			Topic: new FormControl<string | null | undefined>(undefined),
			MessageFormat: new FormControl<MessageFormatValue | null | undefined>(undefined),
			IncludeTransactionDetails: new FormControl<boolean | null | undefined>(undefined),
			IncludePartitionValue: new FormControl<boolean | null | undefined>(undefined),
			PartitionIncludeSchemaTable: new FormControl<boolean | null | undefined>(undefined),
			IncludeTableAlterOperations: new FormControl<boolean | null | undefined>(undefined),
			IncludeControlDetails: new FormControl<boolean | null | undefined>(undefined),
			MessageMaxBytes: new FormControl<number | null | undefined>(undefined),
			IncludeNullAndEmpty: new FormControl<boolean | null | undefined>(undefined),
			SecurityProtocol: new FormControl<KafkaSecurityProtocol | null | undefined>(undefined),
			SslClientCertificateArn: new FormControl<string | null | undefined>(undefined),
			SslClientKeyArn: new FormControl<string | null | undefined>(undefined),
			SslClientKeyPassword: new FormControl<string | null | undefined>(undefined),
			SslCaCertificateArn: new FormControl<string | null | undefined>(undefined),
			SaslUsername: new FormControl<string | null | undefined>(undefined),
			SaslPassword: new FormControl<string | null | undefined>(undefined),
			NoHexPrefix: new FormControl<boolean | null | undefined>(undefined),
			SaslMechanism: new FormControl<KafkaSaslMechanism | null | undefined>(undefined),
			SslEndpointIdentificationAlgorithm: new FormControl<KafkaSslEndpointIdentificationAlgorithm | null | undefined>(undefined),
		});

	}

	export enum KafkaSecurityProtocol { plaintext = 0, 'ssl-authentication' = 1, 'ssl-encryption' = 2, 'sasl-ssl' = 3 }

	export enum KafkaSaslMechanism { 'scram-sha-512' = 0, plain = 1 }

	export enum KafkaSslEndpointIdentificationAlgorithm { none = 0, https = 1 }


	/** Provides information that defines an OpenSearch endpoint. */
	export interface ElasticsearchSettings {

		/** Required */
		ServiceAccessRoleArn: string;

		/** Required */
		EndpointUri: string;
		FullLoadErrorPercentage?: number | null;
		ErrorRetryDuration?: number | null;
		UseNewMappingType?: boolean | null;
	}

	/** Provides information that defines an OpenSearch endpoint. */
	export interface ElasticsearchSettingsFormProperties {

		/** Required */
		ServiceAccessRoleArn: FormControl<string | null | undefined>,

		/** Required */
		EndpointUri: FormControl<string | null | undefined>,
		FullLoadErrorPercentage: FormControl<number | null | undefined>,
		ErrorRetryDuration: FormControl<number | null | undefined>,
		UseNewMappingType: FormControl<boolean | null | undefined>,
	}
	export function CreateElasticsearchSettingsFormGroup() {
		return new FormGroup<ElasticsearchSettingsFormProperties>({
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FullLoadErrorPercentage: new FormControl<number | null | undefined>(undefined),
			ErrorRetryDuration: new FormControl<number | null | undefined>(undefined),
			UseNewMappingType: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information that defines an Amazon Neptune endpoint. */
	export interface NeptuneSettings {
		ServiceAccessRoleArn?: string;

		/** Required */
		S3BucketName: string;

		/** Required */
		S3BucketFolder: string;
		ErrorRetryDuration?: number | null;
		MaxFileSize?: number | null;
		MaxRetryCount?: number | null;
		IamAuthEnabled?: boolean | null;
	}

	/** Provides information that defines an Amazon Neptune endpoint. */
	export interface NeptuneSettingsFormProperties {
		ServiceAccessRoleArn: FormControl<string | null | undefined>,

		/** Required */
		S3BucketName: FormControl<string | null | undefined>,

		/** Required */
		S3BucketFolder: FormControl<string | null | undefined>,
		ErrorRetryDuration: FormControl<number | null | undefined>,
		MaxFileSize: FormControl<number | null | undefined>,
		MaxRetryCount: FormControl<number | null | undefined>,
		IamAuthEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateNeptuneSettingsFormGroup() {
		return new FormGroup<NeptuneSettingsFormProperties>({
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BucketFolder: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ErrorRetryDuration: new FormControl<number | null | undefined>(undefined),
			MaxFileSize: new FormControl<number | null | undefined>(undefined),
			MaxRetryCount: new FormControl<number | null | undefined>(undefined),
			IamAuthEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information that defines an Amazon Redshift endpoint. */
	export interface RedshiftSettings {
		AcceptAnyDate?: boolean | null;
		AfterConnectScript?: string;
		BucketFolder?: string;
		BucketName?: string;
		CaseSensitiveNames?: boolean | null;
		CompUpdate?: boolean | null;
		ConnectionTimeout?: number | null;
		DatabaseName?: string;
		DateFormat?: string;
		EmptyAsNull?: boolean | null;
		EncryptionMode?: EncryptionModeValue;
		ExplicitIds?: boolean | null;
		FileTransferUploadStreams?: number | null;
		LoadTimeout?: number | null;
		MaxFileSize?: number | null;
		Password?: string;
		Port?: number | null;
		RemoveQuotes?: boolean | null;
		ReplaceInvalidChars?: string;
		ReplaceChars?: string;
		ServerName?: string;
		ServiceAccessRoleArn?: string;
		ServerSideEncryptionKmsKeyId?: string;
		TimeFormat?: string;
		TrimBlanks?: boolean | null;
		TruncateColumns?: boolean | null;
		Username?: string;
		WriteBufferSize?: number | null;
		SecretsManagerAccessRoleArn?: string;
		SecretsManagerSecretId?: string;
		MapBooleanAsBoolean?: boolean | null;
	}

	/** Provides information that defines an Amazon Redshift endpoint. */
	export interface RedshiftSettingsFormProperties {
		AcceptAnyDate: FormControl<boolean | null | undefined>,
		AfterConnectScript: FormControl<string | null | undefined>,
		BucketFolder: FormControl<string | null | undefined>,
		BucketName: FormControl<string | null | undefined>,
		CaseSensitiveNames: FormControl<boolean | null | undefined>,
		CompUpdate: FormControl<boolean | null | undefined>,
		ConnectionTimeout: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		DateFormat: FormControl<string | null | undefined>,
		EmptyAsNull: FormControl<boolean | null | undefined>,
		EncryptionMode: FormControl<EncryptionModeValue | null | undefined>,
		ExplicitIds: FormControl<boolean | null | undefined>,
		FileTransferUploadStreams: FormControl<number | null | undefined>,
		LoadTimeout: FormControl<number | null | undefined>,
		MaxFileSize: FormControl<number | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		RemoveQuotes: FormControl<boolean | null | undefined>,
		ReplaceInvalidChars: FormControl<string | null | undefined>,
		ReplaceChars: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		ServerSideEncryptionKmsKeyId: FormControl<string | null | undefined>,
		TimeFormat: FormControl<string | null | undefined>,
		TrimBlanks: FormControl<boolean | null | undefined>,
		TruncateColumns: FormControl<boolean | null | undefined>,
		Username: FormControl<string | null | undefined>,
		WriteBufferSize: FormControl<number | null | undefined>,
		SecretsManagerAccessRoleArn: FormControl<string | null | undefined>,
		SecretsManagerSecretId: FormControl<string | null | undefined>,
		MapBooleanAsBoolean: FormControl<boolean | null | undefined>,
	}
	export function CreateRedshiftSettingsFormGroup() {
		return new FormGroup<RedshiftSettingsFormProperties>({
			AcceptAnyDate: new FormControl<boolean | null | undefined>(undefined),
			AfterConnectScript: new FormControl<string | null | undefined>(undefined),
			BucketFolder: new FormControl<string | null | undefined>(undefined),
			BucketName: new FormControl<string | null | undefined>(undefined),
			CaseSensitiveNames: new FormControl<boolean | null | undefined>(undefined),
			CompUpdate: new FormControl<boolean | null | undefined>(undefined),
			ConnectionTimeout: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			DateFormat: new FormControl<string | null | undefined>(undefined),
			EmptyAsNull: new FormControl<boolean | null | undefined>(undefined),
			EncryptionMode: new FormControl<EncryptionModeValue | null | undefined>(undefined),
			ExplicitIds: new FormControl<boolean | null | undefined>(undefined),
			FileTransferUploadStreams: new FormControl<number | null | undefined>(undefined),
			LoadTimeout: new FormControl<number | null | undefined>(undefined),
			MaxFileSize: new FormControl<number | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			RemoveQuotes: new FormControl<boolean | null | undefined>(undefined),
			ReplaceInvalidChars: new FormControl<string | null | undefined>(undefined),
			ReplaceChars: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			ServerSideEncryptionKmsKeyId: new FormControl<string | null | undefined>(undefined),
			TimeFormat: new FormControl<string | null | undefined>(undefined),
			TrimBlanks: new FormControl<boolean | null | undefined>(undefined),
			TruncateColumns: new FormControl<boolean | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			WriteBufferSize: new FormControl<number | null | undefined>(undefined),
			SecretsManagerAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			SecretsManagerSecretId: new FormControl<string | null | undefined>(undefined),
			MapBooleanAsBoolean: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information that defines a PostgreSQL endpoint. */
	export interface PostgreSQLSettings {
		AfterConnectScript?: string;
		CaptureDdls?: boolean | null;
		MaxFileSize?: number | null;
		DatabaseName?: string;
		DdlArtifactsSchema?: string;
		ExecuteTimeout?: number | null;
		FailTasksOnLobTruncation?: boolean | null;
		HeartbeatEnable?: boolean | null;
		HeartbeatSchema?: string;
		HeartbeatFrequency?: number | null;
		Password?: string;
		Port?: number | null;
		ServerName?: string;
		Username?: string;
		SlotName?: string;
		PluginName?: PluginNameValue;
		SecretsManagerAccessRoleArn?: string;
		SecretsManagerSecretId?: string;
		TrimSpaceInChar?: boolean | null;
		MapBooleanAsBoolean?: boolean | null;
		MapJsonbAsClob?: boolean | null;
		MapLongVarcharAs?: LongVarcharMappingType;
		DatabaseMode?: DatabaseMode;
		BabelfishDatabaseName?: string;
	}

	/** Provides information that defines a PostgreSQL endpoint. */
	export interface PostgreSQLSettingsFormProperties {
		AfterConnectScript: FormControl<string | null | undefined>,
		CaptureDdls: FormControl<boolean | null | undefined>,
		MaxFileSize: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		DdlArtifactsSchema: FormControl<string | null | undefined>,
		ExecuteTimeout: FormControl<number | null | undefined>,
		FailTasksOnLobTruncation: FormControl<boolean | null | undefined>,
		HeartbeatEnable: FormControl<boolean | null | undefined>,
		HeartbeatSchema: FormControl<string | null | undefined>,
		HeartbeatFrequency: FormControl<number | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		SlotName: FormControl<string | null | undefined>,
		PluginName: FormControl<PluginNameValue | null | undefined>,
		SecretsManagerAccessRoleArn: FormControl<string | null | undefined>,
		SecretsManagerSecretId: FormControl<string | null | undefined>,
		TrimSpaceInChar: FormControl<boolean | null | undefined>,
		MapBooleanAsBoolean: FormControl<boolean | null | undefined>,
		MapJsonbAsClob: FormControl<boolean | null | undefined>,
		MapLongVarcharAs: FormControl<LongVarcharMappingType | null | undefined>,
		DatabaseMode: FormControl<DatabaseMode | null | undefined>,
		BabelfishDatabaseName: FormControl<string | null | undefined>,
	}
	export function CreatePostgreSQLSettingsFormGroup() {
		return new FormGroup<PostgreSQLSettingsFormProperties>({
			AfterConnectScript: new FormControl<string | null | undefined>(undefined),
			CaptureDdls: new FormControl<boolean | null | undefined>(undefined),
			MaxFileSize: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			DdlArtifactsSchema: new FormControl<string | null | undefined>(undefined),
			ExecuteTimeout: new FormControl<number | null | undefined>(undefined),
			FailTasksOnLobTruncation: new FormControl<boolean | null | undefined>(undefined),
			HeartbeatEnable: new FormControl<boolean | null | undefined>(undefined),
			HeartbeatSchema: new FormControl<string | null | undefined>(undefined),
			HeartbeatFrequency: new FormControl<number | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			SlotName: new FormControl<string | null | undefined>(undefined),
			PluginName: new FormControl<PluginNameValue | null | undefined>(undefined),
			SecretsManagerAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			SecretsManagerSecretId: new FormControl<string | null | undefined>(undefined),
			TrimSpaceInChar: new FormControl<boolean | null | undefined>(undefined),
			MapBooleanAsBoolean: new FormControl<boolean | null | undefined>(undefined),
			MapJsonbAsClob: new FormControl<boolean | null | undefined>(undefined),
			MapLongVarcharAs: new FormControl<LongVarcharMappingType | null | undefined>(undefined),
			DatabaseMode: new FormControl<DatabaseMode | null | undefined>(undefined),
			BabelfishDatabaseName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PluginNameValue { 'no-preference' = 0, 'test-decoding' = 1, pglogical = 2 }

	export enum LongVarcharMappingType { wstring = 0, clob = 1, nclob = 2 }

	export enum DatabaseMode { default = 0, babelfish = 1 }


	/** Provides information that defines a MySQL endpoint. */
	export interface MySQLSettings {
		AfterConnectScript?: string;
		CleanSourceMetadataOnMismatch?: boolean | null;
		DatabaseName?: string;
		EventsPollInterval?: number | null;
		TargetDbType?: TargetDbType;
		MaxFileSize?: number | null;
		ParallelLoadThreads?: number | null;
		Password?: string;
		Port?: number | null;
		ServerName?: string;
		ServerTimezone?: string;
		Username?: string;
		SecretsManagerAccessRoleArn?: string;
		SecretsManagerSecretId?: string;
	}

	/** Provides information that defines a MySQL endpoint. */
	export interface MySQLSettingsFormProperties {
		AfterConnectScript: FormControl<string | null | undefined>,
		CleanSourceMetadataOnMismatch: FormControl<boolean | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		EventsPollInterval: FormControl<number | null | undefined>,
		TargetDbType: FormControl<TargetDbType | null | undefined>,
		MaxFileSize: FormControl<number | null | undefined>,
		ParallelLoadThreads: FormControl<number | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		ServerTimezone: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		SecretsManagerAccessRoleArn: FormControl<string | null | undefined>,
		SecretsManagerSecretId: FormControl<string | null | undefined>,
	}
	export function CreateMySQLSettingsFormGroup() {
		return new FormGroup<MySQLSettingsFormProperties>({
			AfterConnectScript: new FormControl<string | null | undefined>(undefined),
			CleanSourceMetadataOnMismatch: new FormControl<boolean | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			EventsPollInterval: new FormControl<number | null | undefined>(undefined),
			TargetDbType: new FormControl<TargetDbType | null | undefined>(undefined),
			MaxFileSize: new FormControl<number | null | undefined>(undefined),
			ParallelLoadThreads: new FormControl<number | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			ServerTimezone: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			SecretsManagerAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			SecretsManagerSecretId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TargetDbType { 'specific-database' = 0, 'multiple-databases' = 1 }


	/** Provides information that defines an Oracle endpoint. */
	export interface OracleSettings {
		AddSupplementalLogging?: boolean | null;
		ArchivedLogDestId?: number | null;
		AdditionalArchivedLogDestId?: number | null;
		ExtraArchivedLogDestIds?: Array<number> | null;
		AllowSelectNestedTables?: boolean | null;
		ParallelAsmReadThreads?: number | null;
		ReadAheadBlocks?: number | null;
		AccessAlternateDirectly?: boolean | null;
		UseAlternateFolderForOnline?: boolean | null;
		OraclePathPrefix?: string;
		UsePathPrefix?: string;
		ReplacePathPrefix?: boolean | null;
		EnableHomogenousTablespace?: boolean | null;
		DirectPathNoLog?: boolean | null;
		ArchivedLogsOnly?: boolean | null;
		AsmPassword?: string;
		AsmServer?: string;
		AsmUser?: string;
		CharLengthSemantics?: CharLengthSemantics;
		DatabaseName?: string;
		DirectPathParallelLoad?: boolean | null;
		FailTasksOnLobTruncation?: boolean | null;
		NumberDatatypeScale?: number | null;
		Password?: string;
		Port?: number | null;
		ReadTableSpaceName?: boolean | null;
		RetryInterval?: number | null;
		SecurityDbEncryption?: string;
		SecurityDbEncryptionName?: string;
		ServerName?: string;
		SpatialDataOptionToGeoJsonFunctionName?: string;
		StandbyDelayTime?: number | null;
		Username?: string;
		UseBFile?: boolean | null;
		UseDirectPathFullLoad?: boolean | null;
		UseLogminerReader?: boolean | null;
		SecretsManagerAccessRoleArn?: string;
		SecretsManagerSecretId?: string;
		SecretsManagerOracleAsmAccessRoleArn?: string;
		SecretsManagerOracleAsmSecretId?: string;
		TrimSpaceInChar?: boolean | null;
		ConvertTimestampWithZoneToUTC?: boolean | null;
		OpenTransactionWindow?: number | null;
	}

	/** Provides information that defines an Oracle endpoint. */
	export interface OracleSettingsFormProperties {
		AddSupplementalLogging: FormControl<boolean | null | undefined>,
		ArchivedLogDestId: FormControl<number | null | undefined>,
		AdditionalArchivedLogDestId: FormControl<number | null | undefined>,
		AllowSelectNestedTables: FormControl<boolean | null | undefined>,
		ParallelAsmReadThreads: FormControl<number | null | undefined>,
		ReadAheadBlocks: FormControl<number | null | undefined>,
		AccessAlternateDirectly: FormControl<boolean | null | undefined>,
		UseAlternateFolderForOnline: FormControl<boolean | null | undefined>,
		OraclePathPrefix: FormControl<string | null | undefined>,
		UsePathPrefix: FormControl<string | null | undefined>,
		ReplacePathPrefix: FormControl<boolean | null | undefined>,
		EnableHomogenousTablespace: FormControl<boolean | null | undefined>,
		DirectPathNoLog: FormControl<boolean | null | undefined>,
		ArchivedLogsOnly: FormControl<boolean | null | undefined>,
		AsmPassword: FormControl<string | null | undefined>,
		AsmServer: FormControl<string | null | undefined>,
		AsmUser: FormControl<string | null | undefined>,
		CharLengthSemantics: FormControl<CharLengthSemantics | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		DirectPathParallelLoad: FormControl<boolean | null | undefined>,
		FailTasksOnLobTruncation: FormControl<boolean | null | undefined>,
		NumberDatatypeScale: FormControl<number | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		ReadTableSpaceName: FormControl<boolean | null | undefined>,
		RetryInterval: FormControl<number | null | undefined>,
		SecurityDbEncryption: FormControl<string | null | undefined>,
		SecurityDbEncryptionName: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		SpatialDataOptionToGeoJsonFunctionName: FormControl<string | null | undefined>,
		StandbyDelayTime: FormControl<number | null | undefined>,
		Username: FormControl<string | null | undefined>,
		UseBFile: FormControl<boolean | null | undefined>,
		UseDirectPathFullLoad: FormControl<boolean | null | undefined>,
		UseLogminerReader: FormControl<boolean | null | undefined>,
		SecretsManagerAccessRoleArn: FormControl<string | null | undefined>,
		SecretsManagerSecretId: FormControl<string | null | undefined>,
		SecretsManagerOracleAsmAccessRoleArn: FormControl<string | null | undefined>,
		SecretsManagerOracleAsmSecretId: FormControl<string | null | undefined>,
		TrimSpaceInChar: FormControl<boolean | null | undefined>,
		ConvertTimestampWithZoneToUTC: FormControl<boolean | null | undefined>,
		OpenTransactionWindow: FormControl<number | null | undefined>,
	}
	export function CreateOracleSettingsFormGroup() {
		return new FormGroup<OracleSettingsFormProperties>({
			AddSupplementalLogging: new FormControl<boolean | null | undefined>(undefined),
			ArchivedLogDestId: new FormControl<number | null | undefined>(undefined),
			AdditionalArchivedLogDestId: new FormControl<number | null | undefined>(undefined),
			AllowSelectNestedTables: new FormControl<boolean | null | undefined>(undefined),
			ParallelAsmReadThreads: new FormControl<number | null | undefined>(undefined),
			ReadAheadBlocks: new FormControl<number | null | undefined>(undefined),
			AccessAlternateDirectly: new FormControl<boolean | null | undefined>(undefined),
			UseAlternateFolderForOnline: new FormControl<boolean | null | undefined>(undefined),
			OraclePathPrefix: new FormControl<string | null | undefined>(undefined),
			UsePathPrefix: new FormControl<string | null | undefined>(undefined),
			ReplacePathPrefix: new FormControl<boolean | null | undefined>(undefined),
			EnableHomogenousTablespace: new FormControl<boolean | null | undefined>(undefined),
			DirectPathNoLog: new FormControl<boolean | null | undefined>(undefined),
			ArchivedLogsOnly: new FormControl<boolean | null | undefined>(undefined),
			AsmPassword: new FormControl<string | null | undefined>(undefined),
			AsmServer: new FormControl<string | null | undefined>(undefined),
			AsmUser: new FormControl<string | null | undefined>(undefined),
			CharLengthSemantics: new FormControl<CharLengthSemantics | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			DirectPathParallelLoad: new FormControl<boolean | null | undefined>(undefined),
			FailTasksOnLobTruncation: new FormControl<boolean | null | undefined>(undefined),
			NumberDatatypeScale: new FormControl<number | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			ReadTableSpaceName: new FormControl<boolean | null | undefined>(undefined),
			RetryInterval: new FormControl<number | null | undefined>(undefined),
			SecurityDbEncryption: new FormControl<string | null | undefined>(undefined),
			SecurityDbEncryptionName: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			SpatialDataOptionToGeoJsonFunctionName: new FormControl<string | null | undefined>(undefined),
			StandbyDelayTime: new FormControl<number | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			UseBFile: new FormControl<boolean | null | undefined>(undefined),
			UseDirectPathFullLoad: new FormControl<boolean | null | undefined>(undefined),
			UseLogminerReader: new FormControl<boolean | null | undefined>(undefined),
			SecretsManagerAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			SecretsManagerSecretId: new FormControl<string | null | undefined>(undefined),
			SecretsManagerOracleAsmAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			SecretsManagerOracleAsmSecretId: new FormControl<string | null | undefined>(undefined),
			TrimSpaceInChar: new FormControl<boolean | null | undefined>(undefined),
			ConvertTimestampWithZoneToUTC: new FormControl<boolean | null | undefined>(undefined),
			OpenTransactionWindow: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CharLengthSemantics { default = 0, char = 1, byte = 2 }


	/** Provides information that defines a SAP ASE endpoint. */
	export interface SybaseSettings {
		DatabaseName?: string;
		Password?: string;
		Port?: number | null;
		ServerName?: string;
		Username?: string;
		SecretsManagerAccessRoleArn?: string;
		SecretsManagerSecretId?: string;
	}

	/** Provides information that defines a SAP ASE endpoint. */
	export interface SybaseSettingsFormProperties {
		DatabaseName: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		SecretsManagerAccessRoleArn: FormControl<string | null | undefined>,
		SecretsManagerSecretId: FormControl<string | null | undefined>,
	}
	export function CreateSybaseSettingsFormGroup() {
		return new FormGroup<SybaseSettingsFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			SecretsManagerAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			SecretsManagerSecretId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information that defines a Microsoft SQL Server endpoint. */
	export interface MicrosoftSQLServerSettings {
		Port?: number | null;
		BcpPacketSize?: number | null;
		DatabaseName?: string;
		ControlTablesFileGroup?: string;
		Password?: string;
		QuerySingleAlwaysOnNode?: boolean | null;
		ReadBackupOnly?: boolean | null;
		SafeguardPolicy?: SafeguardPolicy;
		ServerName?: string;
		Username?: string;
		UseBcpFullLoad?: boolean | null;
		UseThirdPartyBackupDevice?: boolean | null;
		SecretsManagerAccessRoleArn?: string;
		SecretsManagerSecretId?: string;
		TrimSpaceInChar?: boolean | null;
		TlogAccessMode?: TlogAccessMode;
		ForceLobLookup?: boolean | null;
	}

	/** Provides information that defines a Microsoft SQL Server endpoint. */
	export interface MicrosoftSQLServerSettingsFormProperties {
		Port: FormControl<number | null | undefined>,
		BcpPacketSize: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		ControlTablesFileGroup: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		QuerySingleAlwaysOnNode: FormControl<boolean | null | undefined>,
		ReadBackupOnly: FormControl<boolean | null | undefined>,
		SafeguardPolicy: FormControl<SafeguardPolicy | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		UseBcpFullLoad: FormControl<boolean | null | undefined>,
		UseThirdPartyBackupDevice: FormControl<boolean | null | undefined>,
		SecretsManagerAccessRoleArn: FormControl<string | null | undefined>,
		SecretsManagerSecretId: FormControl<string | null | undefined>,
		TrimSpaceInChar: FormControl<boolean | null | undefined>,
		TlogAccessMode: FormControl<TlogAccessMode | null | undefined>,
		ForceLobLookup: FormControl<boolean | null | undefined>,
	}
	export function CreateMicrosoftSQLServerSettingsFormGroup() {
		return new FormGroup<MicrosoftSQLServerSettingsFormProperties>({
			Port: new FormControl<number | null | undefined>(undefined),
			BcpPacketSize: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			ControlTablesFileGroup: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			QuerySingleAlwaysOnNode: new FormControl<boolean | null | undefined>(undefined),
			ReadBackupOnly: new FormControl<boolean | null | undefined>(undefined),
			SafeguardPolicy: new FormControl<SafeguardPolicy | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			UseBcpFullLoad: new FormControl<boolean | null | undefined>(undefined),
			UseThirdPartyBackupDevice: new FormControl<boolean | null | undefined>(undefined),
			SecretsManagerAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			SecretsManagerSecretId: new FormControl<string | null | undefined>(undefined),
			TrimSpaceInChar: new FormControl<boolean | null | undefined>(undefined),
			TlogAccessMode: new FormControl<TlogAccessMode | null | undefined>(undefined),
			ForceLobLookup: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum SafeguardPolicy { 'rely-on-sql-server-replication-agent' = 0, 'exclusive-automatic-truncation' = 1, 'shared-automatic-truncation' = 2 }

	export enum TlogAccessMode { BackupOnly = 0, PreferBackup = 1, PreferTlog = 2, TlogOnly = 3 }


	/** Provides information that defines an IBM Db2 LUW endpoint. */
	export interface IBMDb2Settings {
		DatabaseName?: string;
		Password?: string;
		Port?: number | null;
		ServerName?: string;
		SetDataCaptureChanges?: boolean | null;
		CurrentLsn?: string;
		MaxKBytesPerRead?: number | null;
		Username?: string;
		SecretsManagerAccessRoleArn?: string;
		SecretsManagerSecretId?: string;
	}

	/** Provides information that defines an IBM Db2 LUW endpoint. */
	export interface IBMDb2SettingsFormProperties {
		DatabaseName: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		SetDataCaptureChanges: FormControl<boolean | null | undefined>,
		CurrentLsn: FormControl<string | null | undefined>,
		MaxKBytesPerRead: FormControl<number | null | undefined>,
		Username: FormControl<string | null | undefined>,
		SecretsManagerAccessRoleArn: FormControl<string | null | undefined>,
		SecretsManagerSecretId: FormControl<string | null | undefined>,
	}
	export function CreateIBMDb2SettingsFormGroup() {
		return new FormGroup<IBMDb2SettingsFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			SetDataCaptureChanges: new FormControl<boolean | null | undefined>(undefined),
			CurrentLsn: new FormControl<string | null | undefined>(undefined),
			MaxKBytesPerRead: new FormControl<number | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			SecretsManagerAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			SecretsManagerSecretId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information that defines a DocumentDB endpoint. */
	export interface DocDbSettings {
		Username?: string;
		Password?: string;
		ServerName?: string;
		Port?: number | null;
		DatabaseName?: string;
		NestingLevel?: NestingLevelValue;
		ExtractDocId?: boolean | null;
		DocsToInvestigate?: number | null;
		KmsKeyId?: string;
		SecretsManagerAccessRoleArn?: string;
		SecretsManagerSecretId?: string;
		UseUpdateLookUp?: boolean | null;
		ReplicateShardCollections?: boolean | null;
	}

	/** Provides information that defines a DocumentDB endpoint. */
	export interface DocDbSettingsFormProperties {
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		NestingLevel: FormControl<NestingLevelValue | null | undefined>,
		ExtractDocId: FormControl<boolean | null | undefined>,
		DocsToInvestigate: FormControl<number | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		SecretsManagerAccessRoleArn: FormControl<string | null | undefined>,
		SecretsManagerSecretId: FormControl<string | null | undefined>,
		UseUpdateLookUp: FormControl<boolean | null | undefined>,
		ReplicateShardCollections: FormControl<boolean | null | undefined>,
	}
	export function CreateDocDbSettingsFormGroup() {
		return new FormGroup<DocDbSettingsFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			NestingLevel: new FormControl<NestingLevelValue | null | undefined>(undefined),
			ExtractDocId: new FormControl<boolean | null | undefined>(undefined),
			DocsToInvestigate: new FormControl<number | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			SecretsManagerAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			SecretsManagerSecretId: new FormControl<string | null | undefined>(undefined),
			UseUpdateLookUp: new FormControl<boolean | null | undefined>(undefined),
			ReplicateShardCollections: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information that defines a Redis target endpoint. */
	export interface RedisSettings {

		/** Required */
		ServerName: string;

		/** Required */
		Port: number;
		SslSecurityProtocol?: SslSecurityProtocolValue;
		AuthType?: RedisAuthTypeValue;
		AuthUserName?: string;
		AuthPassword?: string;
		SslCaCertificateArn?: string;
	}

	/** Provides information that defines a Redis target endpoint. */
	export interface RedisSettingsFormProperties {

		/** Required */
		ServerName: FormControl<string | null | undefined>,

		/** Required */
		Port: FormControl<number | null | undefined>,
		SslSecurityProtocol: FormControl<SslSecurityProtocolValue | null | undefined>,
		AuthType: FormControl<RedisAuthTypeValue | null | undefined>,
		AuthUserName: FormControl<string | null | undefined>,
		AuthPassword: FormControl<string | null | undefined>,
		SslCaCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateRedisSettingsFormGroup() {
		return new FormGroup<RedisSettingsFormProperties>({
			ServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SslSecurityProtocol: new FormControl<SslSecurityProtocolValue | null | undefined>(undefined),
			AuthType: new FormControl<RedisAuthTypeValue | null | undefined>(undefined),
			AuthUserName: new FormControl<string | null | undefined>(undefined),
			AuthPassword: new FormControl<string | null | undefined>(undefined),
			SslCaCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SslSecurityProtocolValue { plaintext = 0, 'ssl-encryption' = 1 }

	export enum RedisAuthTypeValue { none = 0, 'auth-role' = 1, 'auth-token' = 2 }


	/** Settings in JSON format for the source GCP MySQL endpoint. */
	export interface GcpMySQLSettings {
		AfterConnectScript?: string;
		CleanSourceMetadataOnMismatch?: boolean | null;
		DatabaseName?: string;
		EventsPollInterval?: number | null;
		TargetDbType?: TargetDbType;
		MaxFileSize?: number | null;
		ParallelLoadThreads?: number | null;
		Password?: string;
		Port?: number | null;
		ServerName?: string;
		ServerTimezone?: string;
		Username?: string;
		SecretsManagerAccessRoleArn?: string;
		SecretsManagerSecretId?: string;
	}

	/** Settings in JSON format for the source GCP MySQL endpoint. */
	export interface GcpMySQLSettingsFormProperties {
		AfterConnectScript: FormControl<string | null | undefined>,
		CleanSourceMetadataOnMismatch: FormControl<boolean | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		EventsPollInterval: FormControl<number | null | undefined>,
		TargetDbType: FormControl<TargetDbType | null | undefined>,
		MaxFileSize: FormControl<number | null | undefined>,
		ParallelLoadThreads: FormControl<number | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		ServerTimezone: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		SecretsManagerAccessRoleArn: FormControl<string | null | undefined>,
		SecretsManagerSecretId: FormControl<string | null | undefined>,
	}
	export function CreateGcpMySQLSettingsFormGroup() {
		return new FormGroup<GcpMySQLSettingsFormProperties>({
			AfterConnectScript: new FormControl<string | null | undefined>(undefined),
			CleanSourceMetadataOnMismatch: new FormControl<boolean | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			EventsPollInterval: new FormControl<number | null | undefined>(undefined),
			TargetDbType: new FormControl<TargetDbType | null | undefined>(undefined),
			MaxFileSize: new FormControl<number | null | undefined>(undefined),
			ParallelLoadThreads: new FormControl<number | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			ServerTimezone: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			SecretsManagerAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			SecretsManagerSecretId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information that defines an Amazon Timestream endpoint. */
	export interface TimestreamSettings {

		/** Required */
		DatabaseName: string;

		/** Required */
		MemoryDuration: number;

		/** Required */
		MagneticDuration: number;
		CdcInsertsAndUpdates?: boolean | null;
		EnableMagneticStoreWrites?: boolean | null;
	}

	/** Provides information that defines an Amazon Timestream endpoint. */
	export interface TimestreamSettingsFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		MemoryDuration: FormControl<number | null | undefined>,

		/** Required */
		MagneticDuration: FormControl<number | null | undefined>,
		CdcInsertsAndUpdates: FormControl<boolean | null | undefined>,
		EnableMagneticStoreWrites: FormControl<boolean | null | undefined>,
	}
	export function CreateTimestreamSettingsFormGroup() {
		return new FormGroup<TimestreamSettingsFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemoryDuration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MagneticDuration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CdcInsertsAndUpdates: new FormControl<boolean | null | undefined>(undefined),
			EnableMagneticStoreWrites: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateEndpointMessage {

		/** Required */
		EndpointIdentifier: string;

		/** Required */
		EndpointType: ReplicationEndpointTypeValue;

		/** Required */
		EngineName: string;
		Username?: string;
		Password?: string;
		ServerName?: string;
		Port?: number | null;
		DatabaseName?: string;
		ExtraConnectionAttributes?: string;
		KmsKeyId?: string;
		Tags?: Array<Tag>;
		CertificateArn?: string;
		SslMode?: DmsSslModeValue;
		ServiceAccessRoleArn?: string;
		ExternalTableDefinition?: string;
		DynamoDbSettings?: DynamoDbSettings;
		S3Settings?: S3Settings;
		DmsTransferSettings?: DmsTransferSettings;
		MongoDbSettings?: MongoDbSettings;
		KinesisSettings?: KinesisSettings;
		KafkaSettings?: KafkaSettings;
		ElasticsearchSettings?: ElasticsearchSettings;
		NeptuneSettings?: NeptuneSettings;

		/** Provides information that defines an Amazon Redshift endpoint. */
		RedshiftSettings?: RedshiftSettings;
		PostgreSQLSettings?: PostgreSQLSettings;
		MySQLSettings?: MySQLSettings;
		OracleSettings?: OracleSettings;
		SybaseSettings?: SybaseSettings;
		MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;
		IBMDb2Settings?: IBMDb2Settings;
		ResourceIdentifier?: string;

		/** Provides information that defines a DocumentDB endpoint. */
		DocDbSettings?: DocDbSettings;
		RedisSettings?: RedisSettings;
		GcpMySQLSettings?: GcpMySQLSettings;
		TimestreamSettings?: TimestreamSettings;
	}

	/** <p/> */
	export interface CreateEndpointMessageFormProperties {

		/** Required */
		EndpointIdentifier: FormControl<string | null | undefined>,

		/** Required */
		EndpointType: FormControl<ReplicationEndpointTypeValue | null | undefined>,

		/** Required */
		EngineName: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		ExtraConnectionAttributes: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
		SslMode: FormControl<DmsSslModeValue | null | undefined>,
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		ExternalTableDefinition: FormControl<string | null | undefined>,
		ResourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointMessageFormGroup() {
		return new FormGroup<CreateEndpointMessageFormProperties>({
			EndpointIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointType: new FormControl<ReplicationEndpointTypeValue | null | undefined>(undefined, [Validators.required]),
			EngineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			ExtraConnectionAttributes: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			SslMode: new FormControl<DmsSslModeValue | null | undefined>(undefined),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			ExternalTableDefinition: new FormControl<string | null | undefined>(undefined),
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface KMSKeyNotAccessibleFault {
	}
	export interface KMSKeyNotAccessibleFaultFormProperties {
	}
	export function CreateKMSKeyNotAccessibleFaultFormGroup() {
		return new FormGroup<KMSKeyNotAccessibleFaultFormProperties>({
		});

	}

	export interface S3AccessDeniedFault {
	}
	export interface S3AccessDeniedFaultFormProperties {
	}
	export function CreateS3AccessDeniedFaultFormGroup() {
		return new FormGroup<S3AccessDeniedFaultFormProperties>({
		});

	}


	/** <p/> */
	export interface CreateEventSubscriptionResponse {
		EventSubscription?: EventSubscription;
	}

	/** <p/> */
	export interface CreateEventSubscriptionResponseFormProperties {
	}
	export function CreateCreateEventSubscriptionResponseFormGroup() {
		return new FormGroup<CreateEventSubscriptionResponseFormProperties>({
		});

	}


	/** Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
	export interface EventSubscription {
		CustomerAwsId?: string;
		CustSubscriptionId?: string;
		SnsTopicArn?: string;
		Status?: string;
		SubscriptionCreationTime?: string;
		SourceType?: string;
		SourceIdsList?: Array<string>;
		EventCategoriesList?: Array<string>;
		Enabled?: boolean | null;
	}

	/** Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
	export interface EventSubscriptionFormProperties {
		CustomerAwsId: FormControl<string | null | undefined>,
		CustSubscriptionId: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		SubscriptionCreationTime: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventSubscriptionFormGroup() {
		return new FormGroup<EventSubscriptionFormProperties>({
			CustomerAwsId: new FormControl<string | null | undefined>(undefined),
			CustSubscriptionId: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			SubscriptionCreationTime: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;

		/** Required */
		SnsTopicArn: string;
		SourceType?: string;
		EventCategories?: Array<string>;
		SourceIds?: Array<string>;
		Enabled?: boolean | null;
		Tags?: Array<Tag>;
	}

	/** <p/> */
	export interface CreateEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,

		/** Required */
		SnsTopicArn: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateEventSubscriptionMessageFormGroup() {
		return new FormGroup<CreateEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SNSInvalidTopicFault {
	}
	export interface SNSInvalidTopicFaultFormProperties {
	}
	export function CreateSNSInvalidTopicFaultFormGroup() {
		return new FormGroup<SNSInvalidTopicFaultFormProperties>({
		});

	}

	export interface SNSNoAuthorizationFault {
	}
	export interface SNSNoAuthorizationFaultFormProperties {
	}
	export function CreateSNSNoAuthorizationFaultFormGroup() {
		return new FormGroup<SNSNoAuthorizationFaultFormProperties>({
		});

	}

	export interface KMSAccessDeniedFault {
	}
	export interface KMSAccessDeniedFaultFormProperties {
	}
	export function CreateKMSAccessDeniedFaultFormGroup() {
		return new FormGroup<KMSAccessDeniedFaultFormProperties>({
		});

	}

	export interface KMSDisabledFault {
	}
	export interface KMSDisabledFaultFormProperties {
	}
	export function CreateKMSDisabledFaultFormGroup() {
		return new FormGroup<KMSDisabledFaultFormProperties>({
		});

	}

	export interface KMSInvalidStateFault {
	}
	export interface KMSInvalidStateFaultFormProperties {
	}
	export function CreateKMSInvalidStateFaultFormGroup() {
		return new FormGroup<KMSInvalidStateFaultFormProperties>({
		});

	}

	export interface KMSNotFoundFault {
	}
	export interface KMSNotFoundFaultFormProperties {
	}
	export function CreateKMSNotFoundFaultFormGroup() {
		return new FormGroup<KMSNotFoundFaultFormProperties>({
		});

	}

	export interface KMSThrottlingFault {
	}
	export interface KMSThrottlingFaultFormProperties {
	}
	export function CreateKMSThrottlingFaultFormGroup() {
		return new FormGroup<KMSThrottlingFaultFormProperties>({
		});

	}

	export interface CreateFleetAdvisorCollectorResponse {
		CollectorReferencedId?: string;
		CollectorName?: string;
		Description?: string;
		ServiceAccessRoleArn?: string;
		S3BucketName?: string;
	}
	export interface CreateFleetAdvisorCollectorResponseFormProperties {
		CollectorReferencedId: FormControl<string | null | undefined>,
		CollectorName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
	}
	export function CreateCreateFleetAdvisorCollectorResponseFormGroup() {
		return new FormGroup<CreateFleetAdvisorCollectorResponseFormProperties>({
			CollectorReferencedId: new FormControl<string | null | undefined>(undefined),
			CollectorName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFleetAdvisorCollectorRequest {

		/** Required */
		CollectorName: string;
		Description?: string;

		/** Required */
		ServiceAccessRoleArn: string;

		/** Required */
		S3BucketName: string;
	}
	export interface CreateFleetAdvisorCollectorRequestFormProperties {

		/** Required */
		CollectorName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		ServiceAccessRoleArn: FormControl<string | null | undefined>,

		/** Required */
		S3BucketName: FormControl<string | null | undefined>,
	}
	export function CreateCreateFleetAdvisorCollectorRequestFormGroup() {
		return new FormGroup<CreateFleetAdvisorCollectorRequestFormProperties>({
			CollectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface S3ResourceNotFoundFault {
	}
	export interface S3ResourceNotFoundFaultFormProperties {
	}
	export function CreateS3ResourceNotFoundFaultFormGroup() {
		return new FormGroup<S3ResourceNotFoundFaultFormProperties>({
		});

	}

	export interface CreateInstanceProfileResponse {
		InstanceProfile?: InstanceProfile;
	}
	export interface CreateInstanceProfileResponseFormProperties {
	}
	export function CreateCreateInstanceProfileResponseFormGroup() {
		return new FormGroup<CreateInstanceProfileResponseFormProperties>({
		});

	}


	/** Provides information that defines an instance profile. */
	export interface InstanceProfile {
		InstanceProfileArn?: string;
		AvailabilityZone?: string;
		KmsKeyArn?: string;
		PubliclyAccessible?: boolean | null;
		NetworkType?: string;
		InstanceProfileName?: string;
		Description?: string;
		InstanceProfileCreationTime?: Date;
		SubnetGroupIdentifier?: string;
		VpcSecurityGroups?: Array<string>;
	}

	/** Provides information that defines an instance profile. */
	export interface InstanceProfileFormProperties {
		InstanceProfileArn: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		NetworkType: FormControl<string | null | undefined>,
		InstanceProfileName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		InstanceProfileCreationTime: FormControl<Date | null | undefined>,
		SubnetGroupIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateInstanceProfileFormGroup() {
		return new FormGroup<InstanceProfileFormProperties>({
			InstanceProfileArn: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			NetworkType: new FormControl<string | null | undefined>(undefined),
			InstanceProfileName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			InstanceProfileCreationTime: new FormControl<Date | null | undefined>(undefined),
			SubnetGroupIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateInstanceProfileMessage {
		AvailabilityZone?: string;
		KmsKeyArn?: string;
		PubliclyAccessible?: boolean | null;
		Tags?: Array<Tag>;
		NetworkType?: string;
		InstanceProfileName?: string;
		Description?: string;
		SubnetGroupIdentifier?: string;
		VpcSecurityGroups?: Array<string>;
	}
	export interface CreateInstanceProfileMessageFormProperties {
		AvailabilityZone: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		NetworkType: FormControl<string | null | undefined>,
		InstanceProfileName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		SubnetGroupIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateInstanceProfileMessageFormGroup() {
		return new FormGroup<CreateInstanceProfileMessageFormProperties>({
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			NetworkType: new FormControl<string | null | undefined>(undefined),
			InstanceProfileName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			SubnetGroupIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMigrationProjectResponse {
		MigrationProject?: MigrationProject;
	}
	export interface CreateMigrationProjectResponseFormProperties {
	}
	export function CreateCreateMigrationProjectResponseFormGroup() {
		return new FormGroup<CreateMigrationProjectResponseFormProperties>({
		});

	}


	/** Provides information that defines a migration project. */
	export interface MigrationProject {
		MigrationProjectName?: string;
		MigrationProjectArn?: string;
		MigrationProjectCreationTime?: Date;
		SourceDataProviderDescriptors?: Array<DataProviderDescriptor>;
		TargetDataProviderDescriptors?: Array<DataProviderDescriptor>;
		InstanceProfileArn?: string;
		InstanceProfileName?: string;
		TransformationRules?: string;
		Description?: string;
		SchemaConversionApplicationAttributes?: SCApplicationAttributes;
	}

	/** Provides information that defines a migration project. */
	export interface MigrationProjectFormProperties {
		MigrationProjectName: FormControl<string | null | undefined>,
		MigrationProjectArn: FormControl<string | null | undefined>,
		MigrationProjectCreationTime: FormControl<Date | null | undefined>,
		InstanceProfileArn: FormControl<string | null | undefined>,
		InstanceProfileName: FormControl<string | null | undefined>,
		TransformationRules: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateMigrationProjectFormGroup() {
		return new FormGroup<MigrationProjectFormProperties>({
			MigrationProjectName: new FormControl<string | null | undefined>(undefined),
			MigrationProjectArn: new FormControl<string | null | undefined>(undefined),
			MigrationProjectCreationTime: new FormControl<Date | null | undefined>(undefined),
			InstanceProfileArn: new FormControl<string | null | undefined>(undefined),
			InstanceProfileName: new FormControl<string | null | undefined>(undefined),
			TransformationRules: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a data provider. */
	export interface DataProviderDescriptor {
		SecretsManagerSecretId?: string;
		SecretsManagerAccessRoleArn?: string;
		DataProviderName?: string;
		DataProviderArn?: string;
	}

	/** Information about a data provider. */
	export interface DataProviderDescriptorFormProperties {
		SecretsManagerSecretId: FormControl<string | null | undefined>,
		SecretsManagerAccessRoleArn: FormControl<string | null | undefined>,
		DataProviderName: FormControl<string | null | undefined>,
		DataProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateDataProviderDescriptorFormGroup() {
		return new FormGroup<DataProviderDescriptorFormProperties>({
			SecretsManagerSecretId: new FormControl<string | null | undefined>(undefined),
			SecretsManagerAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			DataProviderName: new FormControl<string | null | undefined>(undefined),
			DataProviderArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information that defines a schema conversion application. */
	export interface SCApplicationAttributes {
		S3BucketPath?: string;
		S3BucketRoleArn?: string;
	}

	/** Provides information that defines a schema conversion application. */
	export interface SCApplicationAttributesFormProperties {
		S3BucketPath: FormControl<string | null | undefined>,
		S3BucketRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateSCApplicationAttributesFormGroup() {
		return new FormGroup<SCApplicationAttributesFormProperties>({
			S3BucketPath: new FormControl<string | null | undefined>(undefined),
			S3BucketRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMigrationProjectMessage {
		MigrationProjectName?: string;

		/** Required */
		SourceDataProviderDescriptors: Array<DataProviderDescriptorDefinition>;

		/** Required */
		TargetDataProviderDescriptors: Array<DataProviderDescriptorDefinition>;

		/** Required */
		InstanceProfileIdentifier: string;
		TransformationRules?: string;
		Description?: string;
		Tags?: Array<Tag>;
		SchemaConversionApplicationAttributes?: SCApplicationAttributes;
	}
	export interface CreateMigrationProjectMessageFormProperties {
		MigrationProjectName: FormControl<string | null | undefined>,

		/** Required */
		InstanceProfileIdentifier: FormControl<string | null | undefined>,
		TransformationRules: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateMigrationProjectMessageFormGroup() {
		return new FormGroup<CreateMigrationProjectMessageFormProperties>({
			MigrationProjectName: new FormControl<string | null | undefined>(undefined),
			InstanceProfileIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TransformationRules: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a data provider. */
	export interface DataProviderDescriptorDefinition {

		/** Required */
		DataProviderIdentifier: string;
		SecretsManagerSecretId?: string;
		SecretsManagerAccessRoleArn?: string;
	}

	/** Information about a data provider. */
	export interface DataProviderDescriptorDefinitionFormProperties {

		/** Required */
		DataProviderIdentifier: FormControl<string | null | undefined>,
		SecretsManagerSecretId: FormControl<string | null | undefined>,
		SecretsManagerAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateDataProviderDescriptorDefinitionFormGroup() {
		return new FormGroup<DataProviderDescriptorDefinitionFormProperties>({
			DataProviderIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretsManagerSecretId: new FormControl<string | null | undefined>(undefined),
			SecretsManagerAccessRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateReplicationConfigResponse {
		ReplicationConfig?: ReplicationConfig;
	}

	/** <p/> */
	export interface CreateReplicationConfigResponseFormProperties {
	}
	export function CreateCreateReplicationConfigResponseFormGroup() {
		return new FormGroup<CreateReplicationConfigResponseFormProperties>({
		});

	}


	/** This object provides configuration information about a serverless replication. */
	export interface ReplicationConfig {
		ReplicationConfigIdentifier?: string;
		ReplicationConfigArn?: string;
		SourceEndpointArn?: string;
		TargetEndpointArn?: string;
		ReplicationType?: MigrationTypeValue;
		ComputeConfig?: ComputeConfig;
		ReplicationSettings?: string;
		SupplementalSettings?: string;
		TableMappings?: string;
		ReplicationConfigCreateTime?: Date;
		ReplicationConfigUpdateTime?: Date;
	}

	/** This object provides configuration information about a serverless replication. */
	export interface ReplicationConfigFormProperties {
		ReplicationConfigIdentifier: FormControl<string | null | undefined>,
		ReplicationConfigArn: FormControl<string | null | undefined>,
		SourceEndpointArn: FormControl<string | null | undefined>,
		TargetEndpointArn: FormControl<string | null | undefined>,
		ReplicationType: FormControl<MigrationTypeValue | null | undefined>,
		ReplicationSettings: FormControl<string | null | undefined>,
		SupplementalSettings: FormControl<string | null | undefined>,
		TableMappings: FormControl<string | null | undefined>,
		ReplicationConfigCreateTime: FormControl<Date | null | undefined>,
		ReplicationConfigUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateReplicationConfigFormGroup() {
		return new FormGroup<ReplicationConfigFormProperties>({
			ReplicationConfigIdentifier: new FormControl<string | null | undefined>(undefined),
			ReplicationConfigArn: new FormControl<string | null | undefined>(undefined),
			SourceEndpointArn: new FormControl<string | null | undefined>(undefined),
			TargetEndpointArn: new FormControl<string | null | undefined>(undefined),
			ReplicationType: new FormControl<MigrationTypeValue | null | undefined>(undefined),
			ReplicationSettings: new FormControl<string | null | undefined>(undefined),
			SupplementalSettings: new FormControl<string | null | undefined>(undefined),
			TableMappings: new FormControl<string | null | undefined>(undefined),
			ReplicationConfigCreateTime: new FormControl<Date | null | undefined>(undefined),
			ReplicationConfigUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum MigrationTypeValue { 'full-load' = 0, cdc = 1, 'full-load-and-cdc' = 2 }


	/** Configuration parameters for provisioning an DMS Serverless replication. */
	export interface ComputeConfig {
		AvailabilityZone?: string;
		DnsNameServers?: string;
		KmsKeyId?: string;
		MaxCapacityUnits?: number | null;
		MinCapacityUnits?: number | null;
		MultiAZ?: boolean | null;
		PreferredMaintenanceWindow?: string;
		ReplicationSubnetGroupId?: string;
		VpcSecurityGroupIds?: Array<string>;
	}

	/** Configuration parameters for provisioning an DMS Serverless replication. */
	export interface ComputeConfigFormProperties {
		AvailabilityZone: FormControl<string | null | undefined>,
		DnsNameServers: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		MaxCapacityUnits: FormControl<number | null | undefined>,
		MinCapacityUnits: FormControl<number | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		ReplicationSubnetGroupId: FormControl<string | null | undefined>,
	}
	export function CreateComputeConfigFormGroup() {
		return new FormGroup<ComputeConfigFormProperties>({
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			DnsNameServers: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			MaxCapacityUnits: new FormControl<number | null | undefined>(undefined),
			MinCapacityUnits: new FormControl<number | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			ReplicationSubnetGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateReplicationConfigMessage {

		/** Required */
		ReplicationConfigIdentifier: string;

		/** Required */
		SourceEndpointArn: string;

		/** Required */
		TargetEndpointArn: string;

		/** Required */
		ComputeConfig: ComputeConfig;

		/** Required */
		ReplicationType: MigrationTypeValue;

		/** Required */
		TableMappings: string;
		ReplicationSettings?: string;
		SupplementalSettings?: string;
		ResourceIdentifier?: string;
		Tags?: Array<Tag>;
	}

	/** <p/> */
	export interface CreateReplicationConfigMessageFormProperties {

		/** Required */
		ReplicationConfigIdentifier: FormControl<string | null | undefined>,

		/** Required */
		SourceEndpointArn: FormControl<string | null | undefined>,

		/** Required */
		TargetEndpointArn: FormControl<string | null | undefined>,

		/** Required */
		ReplicationType: FormControl<MigrationTypeValue | null | undefined>,

		/** Required */
		TableMappings: FormControl<string | null | undefined>,
		ReplicationSettings: FormControl<string | null | undefined>,
		SupplementalSettings: FormControl<string | null | undefined>,
		ResourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateReplicationConfigMessageFormGroup() {
		return new FormGroup<CreateReplicationConfigMessageFormProperties>({
			ReplicationConfigIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceEndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetEndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationType: new FormControl<MigrationTypeValue | null | undefined>(undefined, [Validators.required]),
			TableMappings: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationSettings: new FormControl<string | null | undefined>(undefined),
			SupplementalSettings: new FormControl<string | null | undefined>(undefined),
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReplicationSubnetGroupDoesNotCoverEnoughAZs {
	}
	export interface ReplicationSubnetGroupDoesNotCoverEnoughAZsFormProperties {
	}
	export function CreateReplicationSubnetGroupDoesNotCoverEnoughAZsFormGroup() {
		return new FormGroup<ReplicationSubnetGroupDoesNotCoverEnoughAZsFormProperties>({
		});

	}

	export interface InvalidSubnet {
	}
	export interface InvalidSubnetFormProperties {
	}
	export function CreateInvalidSubnetFormGroup() {
		return new FormGroup<InvalidSubnetFormProperties>({
		});

	}


	/** <p/> */
	export interface CreateReplicationInstanceResponse {
		ReplicationInstance?: ReplicationInstance;
	}

	/** <p/> */
	export interface CreateReplicationInstanceResponseFormProperties {
	}
	export function CreateCreateReplicationInstanceResponseFormGroup() {
		return new FormGroup<CreateReplicationInstanceResponseFormProperties>({
		});

	}


	/** Provides information that defines a replication instance. */
	export interface ReplicationInstance {
		ReplicationInstanceIdentifier?: string;
		ReplicationInstanceClass?: string;
		ReplicationInstanceStatus?: string;
		AllocatedStorage?: number | null;
		InstanceCreateTime?: Date;
		VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
		AvailabilityZone?: string;
		ReplicationSubnetGroup?: ReplicationSubnetGroup;
		PreferredMaintenanceWindow?: string;
		PendingModifiedValues?: ReplicationPendingModifiedValues;
		MultiAZ?: boolean | null;
		EngineVersion?: string;
		AutoMinorVersionUpgrade?: boolean | null;
		KmsKeyId?: string;
		ReplicationInstanceArn?: string;
		ReplicationInstancePublicIpAddress?: string;
		ReplicationInstancePrivateIpAddress?: string;
		ReplicationInstancePublicIpAddresses?: Array<string>;
		ReplicationInstancePrivateIpAddresses?: Array<string>;
		ReplicationInstanceIpv6Addresses?: Array<string>;
		PubliclyAccessible?: boolean | null;
		SecondaryAvailabilityZone?: string;
		FreeUntil?: Date;
		DnsNameServers?: string;
		NetworkType?: string;
	}

	/** Provides information that defines a replication instance. */
	export interface ReplicationInstanceFormProperties {
		ReplicationInstanceIdentifier: FormControl<string | null | undefined>,
		ReplicationInstanceClass: FormControl<string | null | undefined>,
		ReplicationInstanceStatus: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		InstanceCreateTime: FormControl<Date | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		ReplicationInstancePublicIpAddress: FormControl<string | null | undefined>,
		ReplicationInstancePrivateIpAddress: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		SecondaryAvailabilityZone: FormControl<string | null | undefined>,
		FreeUntil: FormControl<Date | null | undefined>,
		DnsNameServers: FormControl<string | null | undefined>,
		NetworkType: FormControl<string | null | undefined>,
	}
	export function CreateReplicationInstanceFormGroup() {
		return new FormGroup<ReplicationInstanceFormProperties>({
			ReplicationInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceClass: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceStatus: new FormControl<string | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			InstanceCreateTime: new FormControl<Date | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined),
			ReplicationInstancePublicIpAddress: new FormControl<string | null | undefined>(undefined),
			ReplicationInstancePrivateIpAddress: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			SecondaryAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			FreeUntil: new FormControl<Date | null | undefined>(undefined),
			DnsNameServers: new FormControl<string | null | undefined>(undefined),
			NetworkType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the status of a security group associated with the virtual private cloud (VPC) hosting your replication and DB instances. */
	export interface VpcSecurityGroupMembership {
		VpcSecurityGroupId?: string;
		Status?: string;
	}

	/** Describes the status of a security group associated with the virtual private cloud (VPC) hosting your replication and DB instances. */
	export interface VpcSecurityGroupMembershipFormProperties {
		VpcSecurityGroupId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateVpcSecurityGroupMembershipFormGroup() {
		return new FormGroup<VpcSecurityGroupMembershipFormProperties>({
			VpcSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroups</code> operation. */
	export interface ReplicationSubnetGroup {
		ReplicationSubnetGroupIdentifier?: string;
		ReplicationSubnetGroupDescription?: string;
		VpcId?: string;
		SubnetGroupStatus?: string;
		Subnets?: Array<Subnet>;
		SupportedNetworkTypes?: Array<string>;
	}

	/** Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroups</code> operation. */
	export interface ReplicationSubnetGroupFormProperties {
		ReplicationSubnetGroupIdentifier: FormControl<string | null | undefined>,
		ReplicationSubnetGroupDescription: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		SubnetGroupStatus: FormControl<string | null | undefined>,
	}
	export function CreateReplicationSubnetGroupFormGroup() {
		return new FormGroup<ReplicationSubnetGroupFormProperties>({
			ReplicationSubnetGroupIdentifier: new FormControl<string | null | undefined>(undefined),
			ReplicationSubnetGroupDescription: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			SubnetGroupStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** In response to a request by the <code>DescribeReplicationSubnetGroups</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status. */
	export interface Subnet {
		SubnetIdentifier?: string;
		SubnetAvailabilityZone?: AvailabilityZone;
		SubnetStatus?: string;
	}

	/** In response to a request by the <code>DescribeReplicationSubnetGroups</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status. */
	export interface SubnetFormProperties {
		SubnetIdentifier: FormControl<string | null | undefined>,
		SubnetStatus: FormControl<string | null | undefined>,
	}
	export function CreateSubnetFormGroup() {
		return new FormGroup<SubnetFormProperties>({
			SubnetIdentifier: new FormControl<string | null | undefined>(undefined),
			SubnetStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The name of an Availability Zone for use during database migration. <code>AvailabilityZone</code> is an optional parameter to the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html"> <code>CreateReplicationInstance</code> </a> operation, and it’s value relates to the Amazon Web Services Region of an endpoint. For example, the availability zone of an endpoint in the us-east-1 region might be us-east-1a, us-east-1b, us-east-1c, or us-east-1d. */
	export interface AvailabilityZone {
		Name?: string;
	}

	/** The name of an Availability Zone for use during database migration. <code>AvailabilityZone</code> is an optional parameter to the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html"> <code>CreateReplicationInstance</code> </a> operation, and it’s value relates to the Amazon Web Services Region of an endpoint. For example, the availability zone of an endpoint in the us-east-1 region might be us-east-1a, us-east-1b, us-east-1c, or us-east-1d. */
	export interface AvailabilityZoneFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityZoneFormGroup() {
		return new FormGroup<AvailabilityZoneFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the values of pending modifications to a replication instance. This data type is an object of the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html"> <code>ReplicationInstance</code> </a> user-defined data type.  */
	export interface ReplicationPendingModifiedValues {
		ReplicationInstanceClass?: string;
		AllocatedStorage?: number | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string;
		NetworkType?: string;
	}

	/** Provides information about the values of pending modifications to a replication instance. This data type is an object of the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html"> <code>ReplicationInstance</code> </a> user-defined data type.  */
	export interface ReplicationPendingModifiedValuesFormProperties {
		ReplicationInstanceClass: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		NetworkType: FormControl<string | null | undefined>,
	}
	export function CreateReplicationPendingModifiedValuesFormGroup() {
		return new FormGroup<ReplicationPendingModifiedValuesFormProperties>({
			ReplicationInstanceClass: new FormControl<string | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			NetworkType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateReplicationInstanceMessage {

		/** Required */
		ReplicationInstanceIdentifier: string;
		AllocatedStorage?: number | null;

		/** Required */
		ReplicationInstanceClass: string;
		VpcSecurityGroupIds?: Array<string>;
		AvailabilityZone?: string;
		ReplicationSubnetGroupIdentifier?: string;
		PreferredMaintenanceWindow?: string;
		MultiAZ?: boolean | null;
		EngineVersion?: string;
		AutoMinorVersionUpgrade?: boolean | null;
		Tags?: Array<Tag>;
		KmsKeyId?: string;
		PubliclyAccessible?: boolean | null;
		DnsNameServers?: string;
		ResourceIdentifier?: string;
		NetworkType?: string;
	}

	/** <p/> */
	export interface CreateReplicationInstanceMessageFormProperties {

		/** Required */
		ReplicationInstanceIdentifier: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,

		/** Required */
		ReplicationInstanceClass: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		ReplicationSubnetGroupIdentifier: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		DnsNameServers: FormControl<string | null | undefined>,
		ResourceIdentifier: FormControl<string | null | undefined>,
		NetworkType: FormControl<string | null | undefined>,
	}
	export function CreateCreateReplicationInstanceMessageFormGroup() {
		return new FormGroup<CreateReplicationInstanceMessageFormProperties>({
			ReplicationInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			ReplicationInstanceClass: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			ReplicationSubnetGroupIdentifier: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			DnsNameServers: new FormControl<string | null | undefined>(undefined),
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined),
			NetworkType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InsufficientResourceCapacityFault {
	}
	export interface InsufficientResourceCapacityFaultFormProperties {
	}
	export function CreateInsufficientResourceCapacityFaultFormGroup() {
		return new FormGroup<InsufficientResourceCapacityFaultFormProperties>({
		});

	}

	export interface StorageQuotaExceededFault {
	}
	export interface StorageQuotaExceededFaultFormProperties {
	}
	export function CreateStorageQuotaExceededFaultFormGroup() {
		return new FormGroup<StorageQuotaExceededFaultFormProperties>({
		});

	}


	/** <p/> */
	export interface CreateReplicationSubnetGroupResponse {
		ReplicationSubnetGroup?: ReplicationSubnetGroup;
	}

	/** <p/> */
	export interface CreateReplicationSubnetGroupResponseFormProperties {
	}
	export function CreateCreateReplicationSubnetGroupResponseFormGroup() {
		return new FormGroup<CreateReplicationSubnetGroupResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface CreateReplicationSubnetGroupMessage {

		/** Required */
		ReplicationSubnetGroupIdentifier: string;

		/** Required */
		ReplicationSubnetGroupDescription: string;

		/** Required */
		SubnetIds: Array<string>;
		Tags?: Array<Tag>;
	}

	/** <p/> */
	export interface CreateReplicationSubnetGroupMessageFormProperties {

		/** Required */
		ReplicationSubnetGroupIdentifier: FormControl<string | null | undefined>,

		/** Required */
		ReplicationSubnetGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateReplicationSubnetGroupMessageFormGroup() {
		return new FormGroup<CreateReplicationSubnetGroupMessageFormProperties>({
			ReplicationSubnetGroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationSubnetGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface CreateReplicationTaskResponse {
		ReplicationTask?: ReplicationTask;
	}

	/** <p/> */
	export interface CreateReplicationTaskResponseFormProperties {
	}
	export function CreateCreateReplicationTaskResponseFormGroup() {
		return new FormGroup<CreateReplicationTaskResponseFormProperties>({
		});

	}


	/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
	export interface ReplicationTask {
		ReplicationTaskIdentifier?: string;
		SourceEndpointArn?: string;
		TargetEndpointArn?: string;
		ReplicationInstanceArn?: string;
		MigrationType?: MigrationTypeValue;
		TableMappings?: string;
		ReplicationTaskSettings?: string;
		Status?: string;
		LastFailureMessage?: string;
		StopReason?: string;
		ReplicationTaskCreationDate?: Date;
		ReplicationTaskStartDate?: Date;
		CdcStartPosition?: string;
		CdcStopPosition?: string;
		RecoveryCheckpoint?: string;
		ReplicationTaskArn?: string;
		ReplicationTaskStats?: ReplicationTaskStats;
		TaskData?: string;
		TargetReplicationInstanceArn?: string;
	}

	/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
	export interface ReplicationTaskFormProperties {
		ReplicationTaskIdentifier: FormControl<string | null | undefined>,
		SourceEndpointArn: FormControl<string | null | undefined>,
		TargetEndpointArn: FormControl<string | null | undefined>,
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		MigrationType: FormControl<MigrationTypeValue | null | undefined>,
		TableMappings: FormControl<string | null | undefined>,
		ReplicationTaskSettings: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		LastFailureMessage: FormControl<string | null | undefined>,
		StopReason: FormControl<string | null | undefined>,
		ReplicationTaskCreationDate: FormControl<Date | null | undefined>,
		ReplicationTaskStartDate: FormControl<Date | null | undefined>,
		CdcStartPosition: FormControl<string | null | undefined>,
		CdcStopPosition: FormControl<string | null | undefined>,
		RecoveryCheckpoint: FormControl<string | null | undefined>,
		ReplicationTaskArn: FormControl<string | null | undefined>,
		TaskData: FormControl<string | null | undefined>,
		TargetReplicationInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateReplicationTaskFormGroup() {
		return new FormGroup<ReplicationTaskFormProperties>({
			ReplicationTaskIdentifier: new FormControl<string | null | undefined>(undefined),
			SourceEndpointArn: new FormControl<string | null | undefined>(undefined),
			TargetEndpointArn: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined),
			MigrationType: new FormControl<MigrationTypeValue | null | undefined>(undefined),
			TableMappings: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskSettings: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			LastFailureMessage: new FormControl<string | null | undefined>(undefined),
			StopReason: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskCreationDate: new FormControl<Date | null | undefined>(undefined),
			ReplicationTaskStartDate: new FormControl<Date | null | undefined>(undefined),
			CdcStartPosition: new FormControl<string | null | undefined>(undefined),
			CdcStopPosition: new FormControl<string | null | undefined>(undefined),
			RecoveryCheckpoint: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined),
			TaskData: new FormControl<string | null | undefined>(undefined),
			TargetReplicationInstanceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task. */
	export interface ReplicationTaskStats {
		FullLoadProgressPercent?: number | null;
		ElapsedTimeMillis?: number | null;
		TablesLoaded?: number | null;
		TablesLoading?: number | null;
		TablesQueued?: number | null;
		TablesErrored?: number | null;
		FreshStartDate?: Date;
		StartDate?: Date;
		StopDate?: Date;
		FullLoadStartDate?: Date;
		FullLoadFinishDate?: Date;
	}

	/** In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task. */
	export interface ReplicationTaskStatsFormProperties {
		FullLoadProgressPercent: FormControl<number | null | undefined>,
		ElapsedTimeMillis: FormControl<number | null | undefined>,
		TablesLoaded: FormControl<number | null | undefined>,
		TablesLoading: FormControl<number | null | undefined>,
		TablesQueued: FormControl<number | null | undefined>,
		TablesErrored: FormControl<number | null | undefined>,
		FreshStartDate: FormControl<Date | null | undefined>,
		StartDate: FormControl<Date | null | undefined>,
		StopDate: FormControl<Date | null | undefined>,
		FullLoadStartDate: FormControl<Date | null | undefined>,
		FullLoadFinishDate: FormControl<Date | null | undefined>,
	}
	export function CreateReplicationTaskStatsFormGroup() {
		return new FormGroup<ReplicationTaskStatsFormProperties>({
			FullLoadProgressPercent: new FormControl<number | null | undefined>(undefined),
			ElapsedTimeMillis: new FormControl<number | null | undefined>(undefined),
			TablesLoaded: new FormControl<number | null | undefined>(undefined),
			TablesLoading: new FormControl<number | null | undefined>(undefined),
			TablesQueued: new FormControl<number | null | undefined>(undefined),
			TablesErrored: new FormControl<number | null | undefined>(undefined),
			FreshStartDate: new FormControl<Date | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			StopDate: new FormControl<Date | null | undefined>(undefined),
			FullLoadStartDate: new FormControl<Date | null | undefined>(undefined),
			FullLoadFinishDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateReplicationTaskMessage {

		/** Required */
		ReplicationTaskIdentifier: string;

		/** Required */
		SourceEndpointArn: string;

		/** Required */
		TargetEndpointArn: string;

		/** Required */
		ReplicationInstanceArn: string;

		/** Required */
		MigrationType: MigrationTypeValue;

		/** Required */
		TableMappings: string;
		ReplicationTaskSettings?: string;
		CdcStartTime?: Date;
		CdcStartPosition?: string;
		CdcStopPosition?: string;
		Tags?: Array<Tag>;
		TaskData?: string;
		ResourceIdentifier?: string;
	}

	/** <p/> */
	export interface CreateReplicationTaskMessageFormProperties {

		/** Required */
		ReplicationTaskIdentifier: FormControl<string | null | undefined>,

		/** Required */
		SourceEndpointArn: FormControl<string | null | undefined>,

		/** Required */
		TargetEndpointArn: FormControl<string | null | undefined>,

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		MigrationType: FormControl<MigrationTypeValue | null | undefined>,

		/** Required */
		TableMappings: FormControl<string | null | undefined>,
		ReplicationTaskSettings: FormControl<string | null | undefined>,
		CdcStartTime: FormControl<Date | null | undefined>,
		CdcStartPosition: FormControl<string | null | undefined>,
		CdcStopPosition: FormControl<string | null | undefined>,
		TaskData: FormControl<string | null | undefined>,
		ResourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateReplicationTaskMessageFormGroup() {
		return new FormGroup<CreateReplicationTaskMessageFormProperties>({
			ReplicationTaskIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceEndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetEndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MigrationType: new FormControl<MigrationTypeValue | null | undefined>(undefined, [Validators.required]),
			TableMappings: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationTaskSettings: new FormControl<string | null | undefined>(undefined),
			CdcStartTime: new FormControl<Date | null | undefined>(undefined),
			CdcStartPosition: new FormControl<string | null | undefined>(undefined),
			CdcStopPosition: new FormControl<string | null | undefined>(undefined),
			TaskData: new FormControl<string | null | undefined>(undefined),
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteCertificateResponse {
		Certificate?: Certificate;
	}
	export interface DeleteCertificateResponseFormProperties {
	}
	export function CreateDeleteCertificateResponseFormGroup() {
		return new FormGroup<DeleteCertificateResponseFormProperties>({
		});

	}


	/** The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance. */
	export interface Certificate {
		CertificateIdentifier?: string;
		CertificateCreationDate?: Date;
		CertificatePem?: string;
		CertificateWallet?: string;
		CertificateArn?: string;
		CertificateOwner?: string;
		ValidFromDate?: Date;
		ValidToDate?: Date;
		SigningAlgorithm?: string;
		KeyLength?: number | null;
	}

	/** The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance. */
	export interface CertificateFormProperties {
		CertificateIdentifier: FormControl<string | null | undefined>,
		CertificateCreationDate: FormControl<Date | null | undefined>,
		CertificatePem: FormControl<string | null | undefined>,
		CertificateWallet: FormControl<string | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
		CertificateOwner: FormControl<string | null | undefined>,
		ValidFromDate: FormControl<Date | null | undefined>,
		ValidToDate: FormControl<Date | null | undefined>,
		SigningAlgorithm: FormControl<string | null | undefined>,
		KeyLength: FormControl<number | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			CertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			CertificateCreationDate: new FormControl<Date | null | undefined>(undefined),
			CertificatePem: new FormControl<string | null | undefined>(undefined),
			CertificateWallet: new FormControl<string | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			CertificateOwner: new FormControl<string | null | undefined>(undefined),
			ValidFromDate: new FormControl<Date | null | undefined>(undefined),
			ValidToDate: new FormControl<Date | null | undefined>(undefined),
			SigningAlgorithm: new FormControl<string | null | undefined>(undefined),
			KeyLength: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteCertificateMessage {

		/** Required */
		CertificateArn: string;
	}
	export interface DeleteCertificateMessageFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCertificateMessageFormGroup() {
		return new FormGroup<DeleteCertificateMessageFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteConnectionResponse {
		Connection?: Connection;
	}

	/** <p/> */
	export interface DeleteConnectionResponseFormProperties {
	}
	export function CreateDeleteConnectionResponseFormGroup() {
		return new FormGroup<DeleteConnectionResponseFormProperties>({
		});

	}


	/** Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued. */
	export interface Connection {
		ReplicationInstanceArn?: string;
		EndpointArn?: string;
		Status?: string;
		LastFailureMessage?: string;
		EndpointIdentifier?: string;
		ReplicationInstanceIdentifier?: string;
	}

	/** Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued. */
	export interface ConnectionFormProperties {
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		EndpointArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		LastFailureMessage: FormControl<string | null | undefined>,
		EndpointIdentifier: FormControl<string | null | undefined>,
		ReplicationInstanceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined),
			EndpointArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			LastFailureMessage: new FormControl<string | null | undefined>(undefined),
			EndpointIdentifier: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DeleteConnectionMessage {

		/** Required */
		EndpointArn: string;

		/** Required */
		ReplicationInstanceArn: string;
	}

	/** <p/> */
	export interface DeleteConnectionMessageFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConnectionMessageFormGroup() {
		return new FormGroup<DeleteConnectionMessageFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDataProviderResponse {
		DataProvider?: DataProvider;
	}
	export interface DeleteDataProviderResponseFormProperties {
	}
	export function CreateDeleteDataProviderResponseFormGroup() {
		return new FormGroup<DeleteDataProviderResponseFormProperties>({
		});

	}

	export interface DeleteDataProviderMessage {

		/** Required */
		DataProviderIdentifier: string;
	}
	export interface DeleteDataProviderMessageFormProperties {

		/** Required */
		DataProviderIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataProviderMessageFormGroup() {
		return new FormGroup<DeleteDataProviderMessageFormProperties>({
			DataProviderIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteEndpointResponse {
		Endpoint?: Endpoint;
	}

	/** <p/> */
	export interface DeleteEndpointResponseFormProperties {
	}
	export function CreateDeleteEndpointResponseFormGroup() {
		return new FormGroup<DeleteEndpointResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteEndpointMessage {

		/** Required */
		EndpointArn: string;
	}

	/** <p/> */
	export interface DeleteEndpointMessageFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEndpointMessageFormGroup() {
		return new FormGroup<DeleteEndpointMessageFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteEventSubscriptionResponse {
		EventSubscription?: EventSubscription;
	}

	/** <p/> */
	export interface DeleteEventSubscriptionResponseFormProperties {
	}
	export function CreateDeleteEventSubscriptionResponseFormGroup() {
		return new FormGroup<DeleteEventSubscriptionResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;
	}

	/** <p/> */
	export interface DeleteEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventSubscriptionMessageFormGroup() {
		return new FormGroup<DeleteEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteCollectorRequest {

		/** Required */
		CollectorReferencedId: string;
	}
	export interface DeleteCollectorRequestFormProperties {

		/** Required */
		CollectorReferencedId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCollectorRequestFormGroup() {
		return new FormGroup<DeleteCollectorRequestFormProperties>({
			CollectorReferencedId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CollectorNotFoundFault {
	}
	export interface CollectorNotFoundFaultFormProperties {
	}
	export function CreateCollectorNotFoundFaultFormGroup() {
		return new FormGroup<CollectorNotFoundFaultFormProperties>({
		});

	}

	export interface DeleteFleetAdvisorDatabasesResponse {
		DatabaseIds?: Array<string>;
	}
	export interface DeleteFleetAdvisorDatabasesResponseFormProperties {
	}
	export function CreateDeleteFleetAdvisorDatabasesResponseFormGroup() {
		return new FormGroup<DeleteFleetAdvisorDatabasesResponseFormProperties>({
		});

	}

	export interface DeleteFleetAdvisorDatabasesRequest {

		/** Required */
		DatabaseIds: Array<string>;
	}
	export interface DeleteFleetAdvisorDatabasesRequestFormProperties {
	}
	export function CreateDeleteFleetAdvisorDatabasesRequestFormGroup() {
		return new FormGroup<DeleteFleetAdvisorDatabasesRequestFormProperties>({
		});

	}

	export interface InvalidOperationFault {
	}
	export interface InvalidOperationFaultFormProperties {
	}
	export function CreateInvalidOperationFaultFormGroup() {
		return new FormGroup<InvalidOperationFaultFormProperties>({
		});

	}

	export interface DeleteInstanceProfileResponse {
		InstanceProfile?: InstanceProfile;
	}
	export interface DeleteInstanceProfileResponseFormProperties {
	}
	export function CreateDeleteInstanceProfileResponseFormGroup() {
		return new FormGroup<DeleteInstanceProfileResponseFormProperties>({
		});

	}

	export interface DeleteInstanceProfileMessage {

		/** Required */
		InstanceProfileIdentifier: string;
	}
	export interface DeleteInstanceProfileMessageFormProperties {

		/** Required */
		InstanceProfileIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInstanceProfileMessageFormGroup() {
		return new FormGroup<DeleteInstanceProfileMessageFormProperties>({
			InstanceProfileIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMigrationProjectResponse {
		MigrationProject?: MigrationProject;
	}
	export interface DeleteMigrationProjectResponseFormProperties {
	}
	export function CreateDeleteMigrationProjectResponseFormGroup() {
		return new FormGroup<DeleteMigrationProjectResponseFormProperties>({
		});

	}

	export interface DeleteMigrationProjectMessage {

		/** Required */
		MigrationProjectIdentifier: string;
	}
	export interface DeleteMigrationProjectMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMigrationProjectMessageFormGroup() {
		return new FormGroup<DeleteMigrationProjectMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteReplicationConfigResponse {
		ReplicationConfig?: ReplicationConfig;
	}

	/** <p/> */
	export interface DeleteReplicationConfigResponseFormProperties {
	}
	export function CreateDeleteReplicationConfigResponseFormGroup() {
		return new FormGroup<DeleteReplicationConfigResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteReplicationConfigMessage {

		/** Required */
		ReplicationConfigArn: string;
	}

	/** <p/> */
	export interface DeleteReplicationConfigMessageFormProperties {

		/** Required */
		ReplicationConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReplicationConfigMessageFormGroup() {
		return new FormGroup<DeleteReplicationConfigMessageFormProperties>({
			ReplicationConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteReplicationInstanceResponse {
		ReplicationInstance?: ReplicationInstance;
	}

	/** <p/> */
	export interface DeleteReplicationInstanceResponseFormProperties {
	}
	export function CreateDeleteReplicationInstanceResponseFormGroup() {
		return new FormGroup<DeleteReplicationInstanceResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteReplicationInstanceMessage {

		/** Required */
		ReplicationInstanceArn: string;
	}

	/** <p/> */
	export interface DeleteReplicationInstanceMessageFormProperties {

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReplicationInstanceMessageFormGroup() {
		return new FormGroup<DeleteReplicationInstanceMessageFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteReplicationSubnetGroupResponse {
	}

	/** <p/> */
	export interface DeleteReplicationSubnetGroupResponseFormProperties {
	}
	export function CreateDeleteReplicationSubnetGroupResponseFormGroup() {
		return new FormGroup<DeleteReplicationSubnetGroupResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteReplicationSubnetGroupMessage {

		/** Required */
		ReplicationSubnetGroupIdentifier: string;
	}

	/** <p/> */
	export interface DeleteReplicationSubnetGroupMessageFormProperties {

		/** Required */
		ReplicationSubnetGroupIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReplicationSubnetGroupMessageFormGroup() {
		return new FormGroup<DeleteReplicationSubnetGroupMessageFormProperties>({
			ReplicationSubnetGroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteReplicationTaskResponse {
		ReplicationTask?: ReplicationTask;
	}

	/** <p/> */
	export interface DeleteReplicationTaskResponseFormProperties {
	}
	export function CreateDeleteReplicationTaskResponseFormGroup() {
		return new FormGroup<DeleteReplicationTaskResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteReplicationTaskMessage {

		/** Required */
		ReplicationTaskArn: string;
	}

	/** <p/> */
	export interface DeleteReplicationTaskMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReplicationTaskMessageFormGroup() {
		return new FormGroup<DeleteReplicationTaskMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteReplicationTaskAssessmentRunResponse {
		ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
	}

	/** <p/> */
	export interface DeleteReplicationTaskAssessmentRunResponseFormProperties {
	}
	export function CreateDeleteReplicationTaskAssessmentRunResponseFormGroup() {
		return new FormGroup<DeleteReplicationTaskAssessmentRunResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteReplicationTaskAssessmentRunMessage {

		/** Required */
		ReplicationTaskAssessmentRunArn: string;
	}

	/** <p/> */
	export interface DeleteReplicationTaskAssessmentRunMessageFormProperties {

		/** Required */
		ReplicationTaskAssessmentRunArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReplicationTaskAssessmentRunMessageFormGroup() {
		return new FormGroup<DeleteReplicationTaskAssessmentRunMessageFormProperties>({
			ReplicationTaskAssessmentRunArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DescribeAccountAttributesResponse {
		AccountQuotas?: Array<AccountQuota>;
		UniqueAccountIdentifier?: string;
	}

	/** <p/> */
	export interface DescribeAccountAttributesResponseFormProperties {
		UniqueAccountIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountAttributesResponseFormGroup() {
		return new FormGroup<DescribeAccountAttributesResponseFormProperties>({
			UniqueAccountIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a quota for an Amazon Web Services account, for example the number of replication instances allowed. */
	export interface AccountQuota {
		AccountQuotaName?: string;
		Used?: number | null;
		Max?: number | null;
	}

	/** Describes a quota for an Amazon Web Services account, for example the number of replication instances allowed. */
	export interface AccountQuotaFormProperties {
		AccountQuotaName: FormControl<string | null | undefined>,
		Used: FormControl<number | null | undefined>,
		Max: FormControl<number | null | undefined>,
	}
	export function CreateAccountQuotaFormGroup() {
		return new FormGroup<AccountQuotaFormProperties>({
			AccountQuotaName: new FormControl<string | null | undefined>(undefined),
			Used: new FormControl<number | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeAccountAttributesMessage {
	}

	/** <p/> */
	export interface DescribeAccountAttributesMessageFormProperties {
	}
	export function CreateDescribeAccountAttributesMessageFormGroup() {
		return new FormGroup<DescribeAccountAttributesMessageFormProperties>({
		});

	}


	/** <p/> */
	export interface DescribeApplicableIndividualAssessmentsResponse {
		IndividualAssessmentNames?: Array<string>;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeApplicableIndividualAssessmentsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicableIndividualAssessmentsResponseFormGroup() {
		return new FormGroup<DescribeApplicableIndividualAssessmentsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeApplicableIndividualAssessmentsMessage {
		ReplicationTaskArn?: string;
		ReplicationInstanceArn?: string;
		SourceEngineName?: string;
		TargetEngineName?: string;
		MigrationType?: MigrationTypeValue;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeApplicableIndividualAssessmentsMessageFormProperties {
		ReplicationTaskArn: FormControl<string | null | undefined>,
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		SourceEngineName: FormControl<string | null | undefined>,
		TargetEngineName: FormControl<string | null | undefined>,
		MigrationType: FormControl<MigrationTypeValue | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicableIndividualAssessmentsMessageFormGroup() {
		return new FormGroup<DescribeApplicableIndividualAssessmentsMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined),
			SourceEngineName: new FormControl<string | null | undefined>(undefined),
			TargetEngineName: new FormControl<string | null | undefined>(undefined),
			MigrationType: new FormControl<MigrationTypeValue | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCertificatesResponse {
		Marker?: string;
		Certificates?: Array<Certificate>;
	}
	export interface DescribeCertificatesResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCertificatesResponseFormGroup() {
		return new FormGroup<DescribeCertificatesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCertificatesMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}
	export interface DescribeCertificatesMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCertificatesMessageFormGroup() {
		return new FormGroup<DescribeCertificatesMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies the name and value of a filter object. This filter is used to limit the number and type of DMS objects that are returned for a particular <code>Describe*</code> call or similar operation. Filters are used as an optional parameter for certain API operations.  */
	export interface Filter {

		/** Required */
		Name: string;

		/** Required */
		Values: Array<string>;
	}

	/** Identifies the name and value of a filter object. This filter is used to limit the number and type of DMS objects that are returned for a particular <code>Describe*</code> call or similar operation. Filters are used as an optional parameter for certain API operations.  */
	export interface FilterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DescribeConnectionsResponse {
		Marker?: string;
		Connections?: Array<Connection>;
	}

	/** <p/> */
	export interface DescribeConnectionsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectionsResponseFormGroup() {
		return new FormGroup<DescribeConnectionsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeConnectionsMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeConnectionsMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectionsMessageFormGroup() {
		return new FormGroup<DescribeConnectionsMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConversionConfigurationResponse {
		MigrationProjectIdentifier?: string;
		ConversionConfiguration?: string;
	}
	export interface DescribeConversionConfigurationResponseFormProperties {
		MigrationProjectIdentifier: FormControl<string | null | undefined>,
		ConversionConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConversionConfigurationResponseFormGroup() {
		return new FormGroup<DescribeConversionConfigurationResponseFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined),
			ConversionConfiguration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConversionConfigurationMessage {

		/** Required */
		MigrationProjectIdentifier: string;
	}
	export interface DescribeConversionConfigurationMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConversionConfigurationMessageFormGroup() {
		return new FormGroup<DescribeConversionConfigurationMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDataProvidersResponse {
		Marker?: string;
		DataProviders?: Array<DataProvider>;
	}
	export interface DescribeDataProvidersResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataProvidersResponseFormGroup() {
		return new FormGroup<DescribeDataProvidersResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDataProvidersMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}
	export interface DescribeDataProvidersMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataProvidersMessageFormGroup() {
		return new FormGroup<DescribeDataProvidersMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEndpointSettingsResponse {
		Marker?: string;
		EndpointSettings?: Array<EndpointSetting>;
	}
	export interface DescribeEndpointSettingsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointSettingsResponseFormGroup() {
		return new FormGroup<DescribeEndpointSettingsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Endpoint settings. */
	export interface EndpointSetting {
		Name?: string;
		Type?: EndpointSettingTypeValue;
		EnumValues?: Array<string>;
		Sensitive?: boolean | null;
		Units?: string;
		Applicability?: string;
		IntValueMin?: number | null;
		IntValueMax?: number | null;
		DefaultValue?: string;
	}

	/** Endpoint settings. */
	export interface EndpointSettingFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<EndpointSettingTypeValue | null | undefined>,
		Sensitive: FormControl<boolean | null | undefined>,
		Units: FormControl<string | null | undefined>,
		Applicability: FormControl<string | null | undefined>,
		IntValueMin: FormControl<number | null | undefined>,
		IntValueMax: FormControl<number | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
	}
	export function CreateEndpointSettingFormGroup() {
		return new FormGroup<EndpointSettingFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EndpointSettingTypeValue | null | undefined>(undefined),
			Sensitive: new FormControl<boolean | null | undefined>(undefined),
			Units: new FormControl<string | null | undefined>(undefined),
			Applicability: new FormControl<string | null | undefined>(undefined),
			IntValueMin: new FormControl<number | null | undefined>(undefined),
			IntValueMax: new FormControl<number | null | undefined>(undefined),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EndpointSettingTypeValue { string = 0, boolean = 1, integer = 2, enum = 3 }

	export interface DescribeEndpointSettingsMessage {

		/** Required */
		EngineName: string;
		MaxRecords?: number | null;
		Marker?: string;
	}
	export interface DescribeEndpointSettingsMessageFormProperties {

		/** Required */
		EngineName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointSettingsMessageFormGroup() {
		return new FormGroup<DescribeEndpointSettingsMessageFormProperties>({
			EngineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEndpointTypesResponse {
		Marker?: string;
		SupportedEndpointTypes?: Array<SupportedEndpointType>;
	}

	/** <p/> */
	export interface DescribeEndpointTypesResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointTypesResponseFormGroup() {
		return new FormGroup<DescribeEndpointTypesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported. */
	export interface SupportedEndpointType {
		EngineName?: string;
		SupportsCDC?: boolean | null;
		EndpointType?: ReplicationEndpointTypeValue;
		ReplicationInstanceEngineMinimumVersion?: string;
		EngineDisplayName?: string;
	}

	/** Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported. */
	export interface SupportedEndpointTypeFormProperties {
		EngineName: FormControl<string | null | undefined>,
		SupportsCDC: FormControl<boolean | null | undefined>,
		EndpointType: FormControl<ReplicationEndpointTypeValue | null | undefined>,
		ReplicationInstanceEngineMinimumVersion: FormControl<string | null | undefined>,
		EngineDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateSupportedEndpointTypeFormGroup() {
		return new FormGroup<SupportedEndpointTypeFormProperties>({
			EngineName: new FormControl<string | null | undefined>(undefined),
			SupportsCDC: new FormControl<boolean | null | undefined>(undefined),
			EndpointType: new FormControl<ReplicationEndpointTypeValue | null | undefined>(undefined),
			ReplicationInstanceEngineMinimumVersion: new FormControl<string | null | undefined>(undefined),
			EngineDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEndpointTypesMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeEndpointTypesMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointTypesMessageFormGroup() {
		return new FormGroup<DescribeEndpointTypesMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEndpointsResponse {
		Marker?: string;
		Endpoints?: Array<Endpoint>;
	}

	/** <p/> */
	export interface DescribeEndpointsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointsResponseFormGroup() {
		return new FormGroup<DescribeEndpointsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEndpointsMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeEndpointsMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointsMessageFormGroup() {
		return new FormGroup<DescribeEndpointsMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEngineVersionsResponse {
		EngineVersions?: Array<EngineVersion>;
		Marker?: string;
	}
	export interface DescribeEngineVersionsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEngineVersionsResponseFormGroup() {
		return new FormGroup<DescribeEngineVersionsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a replication instance version. */
	export interface EngineVersion {
		Version?: string;
		Lifecycle?: string;
		ReleaseStatus?: ReleaseStatusValues;
		LaunchDate?: Date;
		AutoUpgradeDate?: Date;
		DeprecationDate?: Date;
		ForceUpgradeDate?: Date;
		AvailableUpgrades?: Array<string>;
	}

	/** Provides information about a replication instance version. */
	export interface EngineVersionFormProperties {
		Version: FormControl<string | null | undefined>,
		Lifecycle: FormControl<string | null | undefined>,
		ReleaseStatus: FormControl<ReleaseStatusValues | null | undefined>,
		LaunchDate: FormControl<Date | null | undefined>,
		AutoUpgradeDate: FormControl<Date | null | undefined>,
		DeprecationDate: FormControl<Date | null | undefined>,
		ForceUpgradeDate: FormControl<Date | null | undefined>,
	}
	export function CreateEngineVersionFormGroup() {
		return new FormGroup<EngineVersionFormProperties>({
			Version: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<string | null | undefined>(undefined),
			ReleaseStatus: new FormControl<ReleaseStatusValues | null | undefined>(undefined),
			LaunchDate: new FormControl<Date | null | undefined>(undefined),
			AutoUpgradeDate: new FormControl<Date | null | undefined>(undefined),
			DeprecationDate: new FormControl<Date | null | undefined>(undefined),
			ForceUpgradeDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReleaseStatusValues { beta = 0, prod = 1 }

	export interface DescribeEngineVersionsMessage {
		MaxRecords?: number | null;
		Marker?: string;
	}
	export interface DescribeEngineVersionsMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEngineVersionsMessageFormGroup() {
		return new FormGroup<DescribeEngineVersionsMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEventCategoriesResponse {
		EventCategoryGroupList?: Array<EventCategoryGroup>;
	}

	/** <p/> */
	export interface DescribeEventCategoriesResponseFormProperties {
	}
	export function CreateDescribeEventCategoriesResponseFormGroup() {
		return new FormGroup<DescribeEventCategoriesResponseFormProperties>({
		});

	}


	/** Lists categories of events subscribed to, and generated by, the applicable DMS resource type. This data type appears in response to the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_EventCategoryGroup.html"> <code>DescribeEventCategories</code> </a> action. */
	export interface EventCategoryGroup {
		SourceType?: string;
		EventCategories?: Array<string>;
	}

	/** Lists categories of events subscribed to, and generated by, the applicable DMS resource type. This data type appears in response to the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_EventCategoryGroup.html"> <code>DescribeEventCategories</code> </a> action. */
	export interface EventCategoryGroupFormProperties {
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateEventCategoryGroupFormGroup() {
		return new FormGroup<EventCategoryGroupFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEventCategoriesMessage {
		SourceType?: string;
		Filters?: Array<Filter>;
	}

	/** <p/> */
	export interface DescribeEventCategoriesMessageFormProperties {
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventCategoriesMessageFormGroup() {
		return new FormGroup<DescribeEventCategoriesMessageFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEventSubscriptionsResponse {
		Marker?: string;
		EventSubscriptionsList?: Array<EventSubscription>;
	}

	/** <p/> */
	export interface DescribeEventSubscriptionsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventSubscriptionsResponseFormGroup() {
		return new FormGroup<DescribeEventSubscriptionsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEventSubscriptionsMessage {
		SubscriptionName?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeEventSubscriptionsMessageFormProperties {
		SubscriptionName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventSubscriptionsMessageFormGroup() {
		return new FormGroup<DescribeEventSubscriptionsMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEventsResponse {
		Marker?: string;
		Events?: Array<Event>;
	}

	/** <p/> */
	export interface DescribeEventsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsResponseFormGroup() {
		return new FormGroup<DescribeEventsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an identifiable significant activity that affects a replication instance or task. This object can provide the message, the available event categories, the date and source of the event, and the DMS resource type. */
	export interface Event {
		SourceIdentifier?: string;
		SourceType?: SourceType;
		Message?: string;
		EventCategories?: Array<string>;
		Date?: Date;
	}

	/** Describes an identifiable significant activity that affects a replication instance or task. This object can provide the message, the available event categories, the date and source of the event, and the DMS resource type. */
	export interface EventFormProperties {
		SourceIdentifier: FormControl<string | null | undefined>,
		SourceType: FormControl<SourceType | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Date: FormControl<Date | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			SourceIdentifier: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<SourceType | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SourceType { 'replication-instance' = 0 }


	/** <p/> */
	export interface DescribeEventsMessage {
		SourceIdentifier?: string;
		SourceType?: SourceType;
		StartTime?: Date;
		EndTime?: Date;
		Duration?: number | null;
		EventCategories?: Array<string>;
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeEventsMessageFormProperties {
		SourceIdentifier: FormControl<string | null | undefined>,
		SourceType: FormControl<SourceType | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsMessageFormGroup() {
		return new FormGroup<DescribeEventsMessageFormProperties>({
			SourceIdentifier: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<SourceType | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeExtensionPackAssociationsResponse {
		Marker?: string;
		Requests?: Array<SchemaConversionRequest>;
	}
	export interface DescribeExtensionPackAssociationsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExtensionPackAssociationsResponseFormGroup() {
		return new FormGroup<DescribeExtensionPackAssociationsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a schema conversion action. */
	export interface SchemaConversionRequest {
		Status?: string;
		RequestIdentifier?: string;
		MigrationProjectArn?: string;

		/** Provides error information about a project. */
		Error?: ErrorDetails;

		/** Provides information about a metadata model assessment exported to SQL. */
		ExportSqlDetails?: ExportSqlDetails;
	}

	/** Provides information about a schema conversion action. */
	export interface SchemaConversionRequestFormProperties {
		Status: FormControl<string | null | undefined>,
		RequestIdentifier: FormControl<string | null | undefined>,
		MigrationProjectArn: FormControl<string | null | undefined>,
	}
	export function CreateSchemaConversionRequestFormGroup() {
		return new FormGroup<SchemaConversionRequestFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
			RequestIdentifier: new FormControl<string | null | undefined>(undefined),
			MigrationProjectArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides error information about a project. */
	export interface ErrorDetails {
		defaultErrorDetails?: DefaultErrorDetails;
	}

	/** Provides error information about a project. */
	export interface ErrorDetailsFormProperties {
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
		});

	}


	/** Provides error information about a schema conversion operation. */
	export interface DefaultErrorDetails {
		Message?: string;
	}

	/** Provides error information about a schema conversion operation. */
	export interface DefaultErrorDetailsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDefaultErrorDetailsFormGroup() {
		return new FormGroup<DefaultErrorDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a metadata model assessment exported to SQL. */
	export interface ExportSqlDetails {
		S3ObjectKey?: string;
		ObjectURL?: string;
	}

	/** Provides information about a metadata model assessment exported to SQL. */
	export interface ExportSqlDetailsFormProperties {
		S3ObjectKey: FormControl<string | null | undefined>,
		ObjectURL: FormControl<string | null | undefined>,
	}
	export function CreateExportSqlDetailsFormGroup() {
		return new FormGroup<ExportSqlDetailsFormProperties>({
			S3ObjectKey: new FormControl<string | null | undefined>(undefined),
			ObjectURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeExtensionPackAssociationsMessage {

		/** Required */
		MigrationProjectIdentifier: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number | null;
	}
	export interface DescribeExtensionPackAssociationsMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeExtensionPackAssociationsMessageFormGroup() {
		return new FormGroup<DescribeExtensionPackAssociationsMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetAdvisorCollectorsResponse {
		Collectors?: Array<CollectorResponse>;
		NextToken?: string;
	}
	export interface DescribeFleetAdvisorCollectorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetAdvisorCollectorsResponseFormGroup() {
		return new FormGroup<DescribeFleetAdvisorCollectorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a Fleet Advisor collector. */
	export interface CollectorResponse {
		CollectorReferencedId?: string;
		CollectorName?: string;
		CollectorVersion?: string;
		VersionStatus?: VersionStatus;
		Description?: string;
		S3BucketName?: string;
		ServiceAccessRoleArn?: string;

		/** Describes the last Fleet Advisor collector health check. */
		CollectorHealthCheck?: CollectorHealthCheck;
		LastDataReceived?: string;
		RegisteredDate?: string;
		CreatedDate?: string;
		ModifiedDate?: string;

		/** Describes a Fleet Advisor collector inventory. */
		InventoryData?: InventoryData;
	}

	/** Describes a Fleet Advisor collector. */
	export interface CollectorResponseFormProperties {
		CollectorReferencedId: FormControl<string | null | undefined>,
		CollectorName: FormControl<string | null | undefined>,
		CollectorVersion: FormControl<string | null | undefined>,
		VersionStatus: FormControl<VersionStatus | null | undefined>,
		Description: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		LastDataReceived: FormControl<string | null | undefined>,
		RegisteredDate: FormControl<string | null | undefined>,
		CreatedDate: FormControl<string | null | undefined>,
		ModifiedDate: FormControl<string | null | undefined>,
	}
	export function CreateCollectorResponseFormGroup() {
		return new FormGroup<CollectorResponseFormProperties>({
			CollectorReferencedId: new FormControl<string | null | undefined>(undefined),
			CollectorName: new FormControl<string | null | undefined>(undefined),
			CollectorVersion: new FormControl<string | null | undefined>(undefined),
			VersionStatus: new FormControl<VersionStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			LastDataReceived: new FormControl<string | null | undefined>(undefined),
			RegisteredDate: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<string | null | undefined>(undefined),
			ModifiedDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VersionStatus { UP_TO_DATE = 0, OUTDATED = 1, UNSUPPORTED = 2 }


	/** Describes the last Fleet Advisor collector health check. */
	export interface CollectorHealthCheck {
		CollectorStatus?: CollectorStatus;
		LocalCollectorS3Access?: boolean | null;
		WebCollectorS3Access?: boolean | null;
		WebCollectorGrantedRoleBasedAccess?: boolean | null;
	}

	/** Describes the last Fleet Advisor collector health check. */
	export interface CollectorHealthCheckFormProperties {
		CollectorStatus: FormControl<CollectorStatus | null | undefined>,
		LocalCollectorS3Access: FormControl<boolean | null | undefined>,
		WebCollectorS3Access: FormControl<boolean | null | undefined>,
		WebCollectorGrantedRoleBasedAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateCollectorHealthCheckFormGroup() {
		return new FormGroup<CollectorHealthCheckFormProperties>({
			CollectorStatus: new FormControl<CollectorStatus | null | undefined>(undefined),
			LocalCollectorS3Access: new FormControl<boolean | null | undefined>(undefined),
			WebCollectorS3Access: new FormControl<boolean | null | undefined>(undefined),
			WebCollectorGrantedRoleBasedAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CollectorStatus { UNREGISTERED = 0, ACTIVE = 1 }


	/** Describes a Fleet Advisor collector inventory. */
	export interface InventoryData {
		NumberOfDatabases?: number | null;
		NumberOfSchemas?: number | null;
	}

	/** Describes a Fleet Advisor collector inventory. */
	export interface InventoryDataFormProperties {
		NumberOfDatabases: FormControl<number | null | undefined>,
		NumberOfSchemas: FormControl<number | null | undefined>,
	}
	export function CreateInventoryDataFormGroup() {
		return new FormGroup<InventoryDataFormProperties>({
			NumberOfDatabases: new FormControl<number | null | undefined>(undefined),
			NumberOfSchemas: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetAdvisorCollectorsRequest {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		NextToken?: string;
	}
	export interface DescribeFleetAdvisorCollectorsRequestFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetAdvisorCollectorsRequestFormGroup() {
		return new FormGroup<DescribeFleetAdvisorCollectorsRequestFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetAdvisorDatabasesResponse {
		Databases?: Array<DatabaseResponse>;
		NextToken?: string;
	}
	export interface DescribeFleetAdvisorDatabasesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetAdvisorDatabasesResponseFormGroup() {
		return new FormGroup<DescribeFleetAdvisorDatabasesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a database in a Fleet Advisor collector inventory. */
	export interface DatabaseResponse {
		DatabaseId?: string;
		DatabaseName?: string;
		IpAddress?: string;
		NumberOfSchemas?: number | null;
		Server?: ServerShortInfoResponse;
		SoftwareDetails?: DatabaseInstanceSoftwareDetailsResponse;
		Collectors?: Array<CollectorShortInfoResponse>;
	}

	/** Describes a database in a Fleet Advisor collector inventory. */
	export interface DatabaseResponseFormProperties {
		DatabaseId: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		NumberOfSchemas: FormControl<number | null | undefined>,
	}
	export function CreateDatabaseResponseFormGroup() {
		return new FormGroup<DatabaseResponseFormProperties>({
			DatabaseId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			NumberOfSchemas: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a server in a Fleet Advisor collector inventory. */
	export interface ServerShortInfoResponse {
		ServerId?: string;
		IpAddress?: string;
		ServerName?: string;
	}

	/** Describes a server in a Fleet Advisor collector inventory. */
	export interface ServerShortInfoResponseFormProperties {
		ServerId: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
	}
	export function CreateServerShortInfoResponseFormGroup() {
		return new FormGroup<ServerShortInfoResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an inventory database instance for a Fleet Advisor collector. */
	export interface DatabaseInstanceSoftwareDetailsResponse {
		Engine?: string;
		EngineVersion?: string;
		EngineEdition?: string;
		ServicePack?: string;
		SupportLevel?: string;
		OsArchitecture?: number | null;
		Tooltip?: string;
	}

	/** Describes an inventory database instance for a Fleet Advisor collector. */
	export interface DatabaseInstanceSoftwareDetailsResponseFormProperties {
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		EngineEdition: FormControl<string | null | undefined>,
		ServicePack: FormControl<string | null | undefined>,
		SupportLevel: FormControl<string | null | undefined>,
		OsArchitecture: FormControl<number | null | undefined>,
		Tooltip: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseInstanceSoftwareDetailsResponseFormGroup() {
		return new FormGroup<DatabaseInstanceSoftwareDetailsResponseFormProperties>({
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			EngineEdition: new FormControl<string | null | undefined>(undefined),
			ServicePack: new FormControl<string | null | undefined>(undefined),
			SupportLevel: new FormControl<string | null | undefined>(undefined),
			OsArchitecture: new FormControl<number | null | undefined>(undefined),
			Tooltip: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Briefly describes a Fleet Advisor collector. */
	export interface CollectorShortInfoResponse {
		CollectorReferencedId?: string;
		CollectorName?: string;
	}

	/** Briefly describes a Fleet Advisor collector. */
	export interface CollectorShortInfoResponseFormProperties {
		CollectorReferencedId: FormControl<string | null | undefined>,
		CollectorName: FormControl<string | null | undefined>,
	}
	export function CreateCollectorShortInfoResponseFormGroup() {
		return new FormGroup<CollectorShortInfoResponseFormProperties>({
			CollectorReferencedId: new FormControl<string | null | undefined>(undefined),
			CollectorName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetAdvisorDatabasesRequest {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		NextToken?: string;
	}
	export interface DescribeFleetAdvisorDatabasesRequestFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetAdvisorDatabasesRequestFormGroup() {
		return new FormGroup<DescribeFleetAdvisorDatabasesRequestFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetAdvisorLsaAnalysisResponse {
		Analysis?: Array<FleetAdvisorLsaAnalysisResponse>;
		NextToken?: string;
	}
	export interface DescribeFleetAdvisorLsaAnalysisResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetAdvisorLsaAnalysisResponseFormGroup() {
		return new FormGroup<DescribeFleetAdvisorLsaAnalysisResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a large-scale assessment (LSA) analysis run by a Fleet Advisor collector. */
	export interface FleetAdvisorLsaAnalysisResponse {
		LsaAnalysisId?: string;
		Status?: string;
	}

	/** Describes a large-scale assessment (LSA) analysis run by a Fleet Advisor collector. */
	export interface FleetAdvisorLsaAnalysisResponseFormProperties {
		LsaAnalysisId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateFleetAdvisorLsaAnalysisResponseFormGroup() {
		return new FormGroup<FleetAdvisorLsaAnalysisResponseFormProperties>({
			LsaAnalysisId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetAdvisorLsaAnalysisRequest {
		MaxRecords?: number | null;
		NextToken?: string;
	}
	export interface DescribeFleetAdvisorLsaAnalysisRequestFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetAdvisorLsaAnalysisRequestFormGroup() {
		return new FormGroup<DescribeFleetAdvisorLsaAnalysisRequestFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetAdvisorSchemaObjectSummaryResponse {
		FleetAdvisorSchemaObjects?: Array<FleetAdvisorSchemaObjectResponse>;
		NextToken?: string;
	}
	export interface DescribeFleetAdvisorSchemaObjectSummaryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetAdvisorSchemaObjectSummaryResponseFormGroup() {
		return new FormGroup<DescribeFleetAdvisorSchemaObjectSummaryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a schema object in a Fleet Advisor collector inventory. */
	export interface FleetAdvisorSchemaObjectResponse {
		SchemaId?: string;
		ObjectType?: string;
		NumberOfObjects?: number | null;
		CodeLineCount?: number | null;
		CodeSize?: number | null;
	}

	/** Describes a schema object in a Fleet Advisor collector inventory. */
	export interface FleetAdvisorSchemaObjectResponseFormProperties {
		SchemaId: FormControl<string | null | undefined>,
		ObjectType: FormControl<string | null | undefined>,
		NumberOfObjects: FormControl<number | null | undefined>,
		CodeLineCount: FormControl<number | null | undefined>,
		CodeSize: FormControl<number | null | undefined>,
	}
	export function CreateFleetAdvisorSchemaObjectResponseFormGroup() {
		return new FormGroup<FleetAdvisorSchemaObjectResponseFormProperties>({
			SchemaId: new FormControl<string | null | undefined>(undefined),
			ObjectType: new FormControl<string | null | undefined>(undefined),
			NumberOfObjects: new FormControl<number | null | undefined>(undefined),
			CodeLineCount: new FormControl<number | null | undefined>(undefined),
			CodeSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetAdvisorSchemaObjectSummaryRequest {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		NextToken?: string;
	}
	export interface DescribeFleetAdvisorSchemaObjectSummaryRequestFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetAdvisorSchemaObjectSummaryRequestFormGroup() {
		return new FormGroup<DescribeFleetAdvisorSchemaObjectSummaryRequestFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetAdvisorSchemasResponse {
		FleetAdvisorSchemas?: Array<SchemaResponse>;
		NextToken?: string;
	}
	export interface DescribeFleetAdvisorSchemasResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetAdvisorSchemasResponseFormGroup() {
		return new FormGroup<DescribeFleetAdvisorSchemasResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a schema in a Fleet Advisor collector inventory. */
	export interface SchemaResponse {
		CodeLineCount?: number | null;
		CodeSize?: number | null;
		Complexity?: string;
		Server?: ServerShortInfoResponse;
		DatabaseInstance?: DatabaseShortInfoResponse;
		SchemaId?: string;
		SchemaName?: string;

		/** Describes a schema in a Fleet Advisor collector inventory. */
		OriginalSchema?: SchemaShortInfoResponse;
		Similarity?: number | null;
	}

	/** Describes a schema in a Fleet Advisor collector inventory. */
	export interface SchemaResponseFormProperties {
		CodeLineCount: FormControl<number | null | undefined>,
		CodeSize: FormControl<number | null | undefined>,
		Complexity: FormControl<string | null | undefined>,
		SchemaId: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		Similarity: FormControl<number | null | undefined>,
	}
	export function CreateSchemaResponseFormGroup() {
		return new FormGroup<SchemaResponseFormProperties>({
			CodeLineCount: new FormControl<number | null | undefined>(undefined),
			CodeSize: new FormControl<number | null | undefined>(undefined),
			Complexity: new FormControl<string | null | undefined>(undefined),
			SchemaId: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			Similarity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a database in a Fleet Advisor collector inventory. */
	export interface DatabaseShortInfoResponse {
		DatabaseId?: string;
		DatabaseName?: string;
		DatabaseIpAddress?: string;
		DatabaseEngine?: string;
	}

	/** Describes a database in a Fleet Advisor collector inventory. */
	export interface DatabaseShortInfoResponseFormProperties {
		DatabaseId: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		DatabaseIpAddress: FormControl<string | null | undefined>,
		DatabaseEngine: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseShortInfoResponseFormGroup() {
		return new FormGroup<DatabaseShortInfoResponseFormProperties>({
			DatabaseId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			DatabaseIpAddress: new FormControl<string | null | undefined>(undefined),
			DatabaseEngine: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a schema in a Fleet Advisor collector inventory. */
	export interface SchemaShortInfoResponse {
		SchemaId?: string;
		SchemaName?: string;
		DatabaseId?: string;
		DatabaseName?: string;
		DatabaseIpAddress?: string;
	}

	/** Describes a schema in a Fleet Advisor collector inventory. */
	export interface SchemaShortInfoResponseFormProperties {
		SchemaId: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		DatabaseId: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		DatabaseIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateSchemaShortInfoResponseFormGroup() {
		return new FormGroup<SchemaShortInfoResponseFormProperties>({
			SchemaId: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			DatabaseId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			DatabaseIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetAdvisorSchemasRequest {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		NextToken?: string;
	}
	export interface DescribeFleetAdvisorSchemasRequestFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetAdvisorSchemasRequestFormGroup() {
		return new FormGroup<DescribeFleetAdvisorSchemasRequestFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeInstanceProfilesResponse {
		Marker?: string;
		InstanceProfiles?: Array<InstanceProfile>;
	}
	export interface DescribeInstanceProfilesResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstanceProfilesResponseFormGroup() {
		return new FormGroup<DescribeInstanceProfilesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeInstanceProfilesMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}
	export interface DescribeInstanceProfilesMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstanceProfilesMessageFormGroup() {
		return new FormGroup<DescribeInstanceProfilesMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMetadataModelAssessmentsResponse {
		Marker?: string;
		Requests?: Array<SchemaConversionRequest>;
	}
	export interface DescribeMetadataModelAssessmentsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMetadataModelAssessmentsResponseFormGroup() {
		return new FormGroup<DescribeMetadataModelAssessmentsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMetadataModelAssessmentsMessage {

		/** Required */
		MigrationProjectIdentifier: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number | null;
	}
	export interface DescribeMetadataModelAssessmentsMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeMetadataModelAssessmentsMessageFormGroup() {
		return new FormGroup<DescribeMetadataModelAssessmentsMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeMetadataModelConversionsResponse {
		Marker?: string;
		Requests?: Array<SchemaConversionRequest>;
	}
	export interface DescribeMetadataModelConversionsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMetadataModelConversionsResponseFormGroup() {
		return new FormGroup<DescribeMetadataModelConversionsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMetadataModelConversionsMessage {

		/** Required */
		MigrationProjectIdentifier: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number | null;
	}
	export interface DescribeMetadataModelConversionsMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeMetadataModelConversionsMessageFormGroup() {
		return new FormGroup<DescribeMetadataModelConversionsMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeMetadataModelExportsAsScriptResponse {
		Marker?: string;
		Requests?: Array<SchemaConversionRequest>;
	}
	export interface DescribeMetadataModelExportsAsScriptResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMetadataModelExportsAsScriptResponseFormGroup() {
		return new FormGroup<DescribeMetadataModelExportsAsScriptResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMetadataModelExportsAsScriptMessage {

		/** Required */
		MigrationProjectIdentifier: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number | null;
	}
	export interface DescribeMetadataModelExportsAsScriptMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeMetadataModelExportsAsScriptMessageFormGroup() {
		return new FormGroup<DescribeMetadataModelExportsAsScriptMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeMetadataModelExportsToTargetResponse {
		Marker?: string;
		Requests?: Array<SchemaConversionRequest>;
	}
	export interface DescribeMetadataModelExportsToTargetResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMetadataModelExportsToTargetResponseFormGroup() {
		return new FormGroup<DescribeMetadataModelExportsToTargetResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMetadataModelExportsToTargetMessage {

		/** Required */
		MigrationProjectIdentifier: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number | null;
	}
	export interface DescribeMetadataModelExportsToTargetMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeMetadataModelExportsToTargetMessageFormGroup() {
		return new FormGroup<DescribeMetadataModelExportsToTargetMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeMetadataModelImportsResponse {
		Marker?: string;
		Requests?: Array<SchemaConversionRequest>;
	}
	export interface DescribeMetadataModelImportsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMetadataModelImportsResponseFormGroup() {
		return new FormGroup<DescribeMetadataModelImportsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMetadataModelImportsMessage {

		/** Required */
		MigrationProjectIdentifier: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number | null;
	}
	export interface DescribeMetadataModelImportsMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeMetadataModelImportsMessageFormGroup() {
		return new FormGroup<DescribeMetadataModelImportsMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeMigrationProjectsResponse {
		Marker?: string;
		MigrationProjects?: Array<MigrationProject>;
	}
	export interface DescribeMigrationProjectsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMigrationProjectsResponseFormGroup() {
		return new FormGroup<DescribeMigrationProjectsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMigrationProjectsMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}
	export interface DescribeMigrationProjectsMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMigrationProjectsMessageFormGroup() {
		return new FormGroup<DescribeMigrationProjectsMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeOrderableReplicationInstancesResponse {
		OrderableReplicationInstances?: Array<OrderableReplicationInstance>;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeOrderableReplicationInstancesResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrderableReplicationInstancesResponseFormGroup() {
		return new FormGroup<DescribeOrderableReplicationInstancesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** In response to the <code>DescribeOrderableReplicationInstances</code> operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage. */
	export interface OrderableReplicationInstance {
		EngineVersion?: string;
		ReplicationInstanceClass?: string;
		StorageType?: string;
		MinAllocatedStorage?: number | null;
		MaxAllocatedStorage?: number | null;
		DefaultAllocatedStorage?: number | null;
		IncludedAllocatedStorage?: number | null;
		AvailabilityZones?: Array<string>;
		ReleaseStatus?: ReleaseStatusValues;
	}

	/** In response to the <code>DescribeOrderableReplicationInstances</code> operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage. */
	export interface OrderableReplicationInstanceFormProperties {
		EngineVersion: FormControl<string | null | undefined>,
		ReplicationInstanceClass: FormControl<string | null | undefined>,
		StorageType: FormControl<string | null | undefined>,
		MinAllocatedStorage: FormControl<number | null | undefined>,
		MaxAllocatedStorage: FormControl<number | null | undefined>,
		DefaultAllocatedStorage: FormControl<number | null | undefined>,
		IncludedAllocatedStorage: FormControl<number | null | undefined>,
		ReleaseStatus: FormControl<ReleaseStatusValues | null | undefined>,
	}
	export function CreateOrderableReplicationInstanceFormGroup() {
		return new FormGroup<OrderableReplicationInstanceFormProperties>({
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceClass: new FormControl<string | null | undefined>(undefined),
			StorageType: new FormControl<string | null | undefined>(undefined),
			MinAllocatedStorage: new FormControl<number | null | undefined>(undefined),
			MaxAllocatedStorage: new FormControl<number | null | undefined>(undefined),
			DefaultAllocatedStorage: new FormControl<number | null | undefined>(undefined),
			IncludedAllocatedStorage: new FormControl<number | null | undefined>(undefined),
			ReleaseStatus: new FormControl<ReleaseStatusValues | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeOrderableReplicationInstancesMessage {
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeOrderableReplicationInstancesMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrderableReplicationInstancesMessageFormGroup() {
		return new FormGroup<DescribeOrderableReplicationInstancesMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribePendingMaintenanceActionsResponse {
		PendingMaintenanceActions?: Array<ResourcePendingMaintenanceActions>;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribePendingMaintenanceActionsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribePendingMaintenanceActionsResponseFormGroup() {
		return new FormGroup<DescribePendingMaintenanceActionsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribePendingMaintenanceActionsMessage {
		ReplicationInstanceArn?: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number | null;
	}

	/** <p/> */
	export interface DescribePendingMaintenanceActionsMessageFormProperties {
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribePendingMaintenanceActionsMessageFormGroup() {
		return new FormGroup<DescribePendingMaintenanceActionsMessageFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeRecommendationLimitationsResponse {
		NextToken?: string;
		Limitations?: Array<Limitation>;
	}
	export interface DescribeRecommendationLimitationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecommendationLimitationsResponseFormGroup() {
		return new FormGroup<DescribeRecommendationLimitationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides information about the limitations of target Amazon Web Services engines.</p> <p>Your source database might include features that the target Amazon Web Services engine doesn't support. Fleet Advisor lists these features as limitations. You should consider these limitations during database migration. For each limitation, Fleet Advisor recommends an action that you can take to address or avoid this limitation.</p> */
	export interface Limitation {
		DatabaseId?: string;
		EngineName?: string;
		Name?: string;
		Description?: string;
		Impact?: string;
		Type?: string;
	}

	/** <p>Provides information about the limitations of target Amazon Web Services engines.</p> <p>Your source database might include features that the target Amazon Web Services engine doesn't support. Fleet Advisor lists these features as limitations. You should consider these limitations during database migration. For each limitation, Fleet Advisor recommends an action that you can take to address or avoid this limitation.</p> */
	export interface LimitationFormProperties {
		DatabaseId: FormControl<string | null | undefined>,
		EngineName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Impact: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateLimitationFormGroup() {
		return new FormGroup<LimitationFormProperties>({
			DatabaseId: new FormControl<string | null | undefined>(undefined),
			EngineName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Impact: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRecommendationLimitationsRequest {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		NextToken?: string;
	}
	export interface DescribeRecommendationLimitationsRequestFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecommendationLimitationsRequestFormGroup() {
		return new FormGroup<DescribeRecommendationLimitationsRequestFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRecommendationsResponse {
		NextToken?: string;
		Recommendations?: Array<Recommendation>;
	}
	export interface DescribeRecommendationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecommendationsResponseFormGroup() {
		return new FormGroup<DescribeRecommendationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides information that describes a recommendation of a target engine.</p> <p>A <i>recommendation</i> is a set of possible Amazon Web Services target engines that you can choose to migrate your source on-premises database. In this set, Fleet Advisor suggests a single target engine as the right sized migration destination. To determine this rightsized migration destination, Fleet Advisor uses the inventory metadata and metrics from data collector. You can use recommendations before the start of migration to save costs and reduce risks.</p> <p>With recommendations, you can explore different target options and compare metrics, so you can make an informed decision when you choose the migration target.</p> */
	export interface Recommendation {
		DatabaseId?: string;
		EngineName?: string;
		CreatedDate?: string;
		Status?: string;
		Preferred?: boolean | null;
		Settings?: RecommendationSettings;
		Data?: RecommendationData;
	}

	/** <p>Provides information that describes a recommendation of a target engine.</p> <p>A <i>recommendation</i> is a set of possible Amazon Web Services target engines that you can choose to migrate your source on-premises database. In this set, Fleet Advisor suggests a single target engine as the right sized migration destination. To determine this rightsized migration destination, Fleet Advisor uses the inventory metadata and metrics from data collector. You can use recommendations before the start of migration to save costs and reduce risks.</p> <p>With recommendations, you can explore different target options and compare metrics, so you can make an informed decision when you choose the migration target.</p> */
	export interface RecommendationFormProperties {
		DatabaseId: FormControl<string | null | undefined>,
		EngineName: FormControl<string | null | undefined>,
		CreatedDate: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Preferred: FormControl<boolean | null | undefined>,
	}
	export function CreateRecommendationFormGroup() {
		return new FormGroup<RecommendationFormProperties>({
			DatabaseId: new FormControl<string | null | undefined>(undefined),
			EngineName: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Preferred: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information about the target engine for the specified source database. */
	export interface RecommendationData {
		RdsEngine?: RdsRecommendation;
	}

	/** Provides information about the target engine for the specified source database. */
	export interface RecommendationDataFormProperties {
	}
	export function CreateRecommendationDataFormGroup() {
		return new FormGroup<RecommendationDataFormProperties>({
		});

	}


	/** Provides information that describes a recommendation of a target engine on Amazon RDS. */
	export interface RdsRecommendation {
		RequirementsToTarget?: RdsRequirements;
		TargetConfiguration?: RdsConfiguration;
	}

	/** Provides information that describes a recommendation of a target engine on Amazon RDS. */
	export interface RdsRecommendationFormProperties {
	}
	export function CreateRdsRecommendationFormGroup() {
		return new FormGroup<RdsRecommendationFormProperties>({
		});

	}


	/** Provides information that describes the requirements to the target engine on Amazon RDS. */
	export interface RdsRequirements {
		EngineEdition?: string;
		InstanceVcpu?: number | null;
		InstanceMemory?: number | null;
		StorageSize?: number | null;
		StorageIops?: number | null;
		DeploymentOption?: string;
		EngineVersion?: string;
	}

	/** Provides information that describes the requirements to the target engine on Amazon RDS. */
	export interface RdsRequirementsFormProperties {
		EngineEdition: FormControl<string | null | undefined>,
		InstanceVcpu: FormControl<number | null | undefined>,
		InstanceMemory: FormControl<number | null | undefined>,
		StorageSize: FormControl<number | null | undefined>,
		StorageIops: FormControl<number | null | undefined>,
		DeploymentOption: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
	}
	export function CreateRdsRequirementsFormGroup() {
		return new FormGroup<RdsRequirementsFormProperties>({
			EngineEdition: new FormControl<string | null | undefined>(undefined),
			InstanceVcpu: new FormControl<number | null | undefined>(undefined),
			InstanceMemory: new FormControl<number | null | undefined>(undefined),
			StorageSize: new FormControl<number | null | undefined>(undefined),
			StorageIops: new FormControl<number | null | undefined>(undefined),
			DeploymentOption: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information that describes the configuration of the recommended target engine on Amazon RDS. */
	export interface RdsConfiguration {
		EngineEdition?: string;
		InstanceType?: string;
		InstanceVcpu?: number | null;
		InstanceMemory?: number | null;
		StorageType?: string;
		StorageSize?: number | null;
		StorageIops?: number | null;
		DeploymentOption?: string;
		EngineVersion?: string;
	}

	/** Provides information that describes the configuration of the recommended target engine on Amazon RDS. */
	export interface RdsConfigurationFormProperties {
		EngineEdition: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		InstanceVcpu: FormControl<number | null | undefined>,
		InstanceMemory: FormControl<number | null | undefined>,
		StorageType: FormControl<string | null | undefined>,
		StorageSize: FormControl<number | null | undefined>,
		StorageIops: FormControl<number | null | undefined>,
		DeploymentOption: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
	}
	export function CreateRdsConfigurationFormGroup() {
		return new FormGroup<RdsConfigurationFormProperties>({
			EngineEdition: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			InstanceVcpu: new FormControl<number | null | undefined>(undefined),
			InstanceMemory: new FormControl<number | null | undefined>(undefined),
			StorageType: new FormControl<string | null | undefined>(undefined),
			StorageSize: new FormControl<number | null | undefined>(undefined),
			StorageIops: new FormControl<number | null | undefined>(undefined),
			DeploymentOption: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRecommendationsRequest {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		NextToken?: string;
	}
	export interface DescribeRecommendationsRequestFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecommendationsRequestFormGroup() {
		return new FormGroup<DescribeRecommendationsRequestFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeRefreshSchemasStatusResponse {
		RefreshSchemasStatus?: RefreshSchemasStatus;
	}

	/** <p/> */
	export interface DescribeRefreshSchemasStatusResponseFormProperties {
	}
	export function CreateDescribeRefreshSchemasStatusResponseFormGroup() {
		return new FormGroup<DescribeRefreshSchemasStatusResponseFormProperties>({
		});

	}


	/** Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation. */
	export interface RefreshSchemasStatus {
		EndpointArn?: string;
		ReplicationInstanceArn?: string;
		Status?: RefreshSchemasStatusTypeValue;
		LastRefreshDate?: Date;
		LastFailureMessage?: string;
	}

	/** Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation. */
	export interface RefreshSchemasStatusFormProperties {
		EndpointArn: FormControl<string | null | undefined>,
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		Status: FormControl<RefreshSchemasStatusTypeValue | null | undefined>,
		LastRefreshDate: FormControl<Date | null | undefined>,
		LastFailureMessage: FormControl<string | null | undefined>,
	}
	export function CreateRefreshSchemasStatusFormGroup() {
		return new FormGroup<RefreshSchemasStatusFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<RefreshSchemasStatusTypeValue | null | undefined>(undefined),
			LastRefreshDate: new FormControl<Date | null | undefined>(undefined),
			LastFailureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RefreshSchemasStatusTypeValue { successful = 0, failed = 1, refreshing = 2 }


	/** <p/> */
	export interface DescribeRefreshSchemasStatusMessage {

		/** Required */
		EndpointArn: string;
	}

	/** <p/> */
	export interface DescribeRefreshSchemasStatusMessageFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRefreshSchemasStatusMessageFormGroup() {
		return new FormGroup<DescribeRefreshSchemasStatusMessageFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DescribeReplicationConfigsResponse {
		Marker?: string;
		ReplicationConfigs?: Array<ReplicationConfig>;
	}

	/** <p/> */
	export interface DescribeReplicationConfigsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationConfigsResponseFormGroup() {
		return new FormGroup<DescribeReplicationConfigsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationConfigsMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeReplicationConfigsMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationConfigsMessageFormGroup() {
		return new FormGroup<DescribeReplicationConfigsMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeReplicationInstanceTaskLogsResponse {
		ReplicationInstanceArn?: string;
		ReplicationInstanceTaskLogs?: Array<ReplicationInstanceTaskLog>;
		Marker?: string;
	}
	export interface DescribeReplicationInstanceTaskLogsResponseFormProperties {
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationInstanceTaskLogsResponseFormGroup() {
		return new FormGroup<DescribeReplicationInstanceTaskLogsResponseFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata for a replication instance task log. */
	export interface ReplicationInstanceTaskLog {
		ReplicationTaskName?: string;
		ReplicationTaskArn?: string;
		ReplicationInstanceTaskLogSize?: number | null;
	}

	/** Contains metadata for a replication instance task log. */
	export interface ReplicationInstanceTaskLogFormProperties {
		ReplicationTaskName: FormControl<string | null | undefined>,
		ReplicationTaskArn: FormControl<string | null | undefined>,
		ReplicationInstanceTaskLogSize: FormControl<number | null | undefined>,
	}
	export function CreateReplicationInstanceTaskLogFormGroup() {
		return new FormGroup<ReplicationInstanceTaskLogFormProperties>({
			ReplicationTaskName: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceTaskLogSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeReplicationInstanceTaskLogsMessage {

		/** Required */
		ReplicationInstanceArn: string;
		MaxRecords?: number | null;
		Marker?: string;
	}
	export interface DescribeReplicationInstanceTaskLogsMessageFormProperties {

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationInstanceTaskLogsMessageFormGroup() {
		return new FormGroup<DescribeReplicationInstanceTaskLogsMessageFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationInstancesResponse {
		Marker?: string;
		ReplicationInstances?: Array<ReplicationInstance>;
	}

	/** <p/> */
	export interface DescribeReplicationInstancesResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationInstancesResponseFormGroup() {
		return new FormGroup<DescribeReplicationInstancesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationInstancesMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeReplicationInstancesMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationInstancesMessageFormGroup() {
		return new FormGroup<DescribeReplicationInstancesMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationSubnetGroupsResponse {
		Marker?: string;
		ReplicationSubnetGroups?: Array<ReplicationSubnetGroup>;
	}

	/** <p/> */
	export interface DescribeReplicationSubnetGroupsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationSubnetGroupsResponseFormGroup() {
		return new FormGroup<DescribeReplicationSubnetGroupsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationSubnetGroupsMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeReplicationSubnetGroupsMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationSubnetGroupsMessageFormGroup() {
		return new FormGroup<DescribeReplicationSubnetGroupsMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationTableStatisticsResponse {
		ReplicationConfigArn?: string;
		Marker?: string;
		ReplicationTableStatistics?: Array<TableStatistics>;
	}

	/** <p/> */
	export interface DescribeReplicationTableStatisticsResponseFormProperties {
		ReplicationConfigArn: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationTableStatisticsResponseFormGroup() {
		return new FormGroup<DescribeReplicationTableStatisticsResponseFormProperties>({
			ReplicationConfigArn: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a collection of table statistics in response to a request by the <code>DescribeTableStatistics</code> operation. */
	export interface TableStatistics {
		SchemaName?: string;
		TableName?: string;
		Inserts?: number | null;
		Deletes?: number | null;
		Updates?: number | null;
		Ddls?: number | null;
		AppliedInserts?: number | null;
		AppliedDeletes?: number | null;
		AppliedUpdates?: number | null;
		AppliedDdls?: number | null;
		FullLoadRows?: number | null;
		FullLoadCondtnlChkFailedRows?: number | null;
		FullLoadErrorRows?: number | null;
		FullLoadStartTime?: Date;
		FullLoadEndTime?: Date;
		FullLoadReloaded?: boolean | null;
		LastUpdateTime?: Date;
		TableState?: string;
		ValidationPendingRecords?: number | null;
		ValidationFailedRecords?: number | null;
		ValidationSuspendedRecords?: number | null;
		ValidationState?: string;
		ValidationStateDetails?: string;
	}

	/** Provides a collection of table statistics in response to a request by the <code>DescribeTableStatistics</code> operation. */
	export interface TableStatisticsFormProperties {
		SchemaName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		Inserts: FormControl<number | null | undefined>,
		Deletes: FormControl<number | null | undefined>,
		Updates: FormControl<number | null | undefined>,
		Ddls: FormControl<number | null | undefined>,
		AppliedInserts: FormControl<number | null | undefined>,
		AppliedDeletes: FormControl<number | null | undefined>,
		AppliedUpdates: FormControl<number | null | undefined>,
		AppliedDdls: FormControl<number | null | undefined>,
		FullLoadRows: FormControl<number | null | undefined>,
		FullLoadCondtnlChkFailedRows: FormControl<number | null | undefined>,
		FullLoadErrorRows: FormControl<number | null | undefined>,
		FullLoadStartTime: FormControl<Date | null | undefined>,
		FullLoadEndTime: FormControl<Date | null | undefined>,
		FullLoadReloaded: FormControl<boolean | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
		TableState: FormControl<string | null | undefined>,
		ValidationPendingRecords: FormControl<number | null | undefined>,
		ValidationFailedRecords: FormControl<number | null | undefined>,
		ValidationSuspendedRecords: FormControl<number | null | undefined>,
		ValidationState: FormControl<string | null | undefined>,
		ValidationStateDetails: FormControl<string | null | undefined>,
	}
	export function CreateTableStatisticsFormGroup() {
		return new FormGroup<TableStatisticsFormProperties>({
			SchemaName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			Inserts: new FormControl<number | null | undefined>(undefined),
			Deletes: new FormControl<number | null | undefined>(undefined),
			Updates: new FormControl<number | null | undefined>(undefined),
			Ddls: new FormControl<number | null | undefined>(undefined),
			AppliedInserts: new FormControl<number | null | undefined>(undefined),
			AppliedDeletes: new FormControl<number | null | undefined>(undefined),
			AppliedUpdates: new FormControl<number | null | undefined>(undefined),
			AppliedDdls: new FormControl<number | null | undefined>(undefined),
			FullLoadRows: new FormControl<number | null | undefined>(undefined),
			FullLoadCondtnlChkFailedRows: new FormControl<number | null | undefined>(undefined),
			FullLoadErrorRows: new FormControl<number | null | undefined>(undefined),
			FullLoadStartTime: new FormControl<Date | null | undefined>(undefined),
			FullLoadEndTime: new FormControl<Date | null | undefined>(undefined),
			FullLoadReloaded: new FormControl<boolean | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			TableState: new FormControl<string | null | undefined>(undefined),
			ValidationPendingRecords: new FormControl<number | null | undefined>(undefined),
			ValidationFailedRecords: new FormControl<number | null | undefined>(undefined),
			ValidationSuspendedRecords: new FormControl<number | null | undefined>(undefined),
			ValidationState: new FormControl<string | null | undefined>(undefined),
			ValidationStateDetails: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationTableStatisticsMessage {

		/** Required */
		ReplicationConfigArn: string;
		MaxRecords?: number | null;
		Marker?: string;
		Filters?: Array<Filter>;
	}

	/** <p/> */
	export interface DescribeReplicationTableStatisticsMessageFormProperties {

		/** Required */
		ReplicationConfigArn: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationTableStatisticsMessageFormGroup() {
		return new FormGroup<DescribeReplicationTableStatisticsMessageFormProperties>({
			ReplicationConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationTaskAssessmentResultsResponse {
		Marker?: string;
		BucketName?: string;
		ReplicationTaskAssessmentResults?: Array<ReplicationTaskAssessmentResult>;
	}

	/** <p/> */
	export interface DescribeReplicationTaskAssessmentResultsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
		BucketName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationTaskAssessmentResultsResponseFormGroup() {
		return new FormGroup<DescribeReplicationTaskAssessmentResultsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			BucketName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The task assessment report in JSON format.  */
	export interface ReplicationTaskAssessmentResult {
		ReplicationTaskIdentifier?: string;
		ReplicationTaskArn?: string;
		ReplicationTaskLastAssessmentDate?: Date;
		AssessmentStatus?: string;
		AssessmentResultsFile?: string;
		AssessmentResults?: string;
		S3ObjectUrl?: string;
	}

	/**  The task assessment report in JSON format.  */
	export interface ReplicationTaskAssessmentResultFormProperties {
		ReplicationTaskIdentifier: FormControl<string | null | undefined>,
		ReplicationTaskArn: FormControl<string | null | undefined>,
		ReplicationTaskLastAssessmentDate: FormControl<Date | null | undefined>,
		AssessmentStatus: FormControl<string | null | undefined>,
		AssessmentResultsFile: FormControl<string | null | undefined>,
		AssessmentResults: FormControl<string | null | undefined>,
		S3ObjectUrl: FormControl<string | null | undefined>,
	}
	export function CreateReplicationTaskAssessmentResultFormGroup() {
		return new FormGroup<ReplicationTaskAssessmentResultFormProperties>({
			ReplicationTaskIdentifier: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskLastAssessmentDate: new FormControl<Date | null | undefined>(undefined),
			AssessmentStatus: new FormControl<string | null | undefined>(undefined),
			AssessmentResultsFile: new FormControl<string | null | undefined>(undefined),
			AssessmentResults: new FormControl<string | null | undefined>(undefined),
			S3ObjectUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationTaskAssessmentResultsMessage {
		ReplicationTaskArn?: string;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeReplicationTaskAssessmentResultsMessageFormProperties {
		ReplicationTaskArn: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationTaskAssessmentResultsMessageFormGroup() {
		return new FormGroup<DescribeReplicationTaskAssessmentResultsMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationTaskAssessmentRunsResponse {
		Marker?: string;
		ReplicationTaskAssessmentRuns?: Array<ReplicationTaskAssessmentRun>;
	}

	/** <p/> */
	export interface DescribeReplicationTaskAssessmentRunsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationTaskAssessmentRunsResponseFormGroup() {
		return new FormGroup<DescribeReplicationTaskAssessmentRunsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationTaskAssessmentRunsMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeReplicationTaskAssessmentRunsMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationTaskAssessmentRunsMessageFormGroup() {
		return new FormGroup<DescribeReplicationTaskAssessmentRunsMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationTaskIndividualAssessmentsResponse {
		Marker?: string;
		ReplicationTaskIndividualAssessments?: Array<ReplicationTaskIndividualAssessment>;
	}

	/** <p/> */
	export interface DescribeReplicationTaskIndividualAssessmentsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationTaskIndividualAssessmentsResponseFormGroup() {
		return new FormGroup<DescribeReplicationTaskIndividualAssessmentsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information that describes an individual assessment from a premigration assessment run. */
	export interface ReplicationTaskIndividualAssessment {
		ReplicationTaskIndividualAssessmentArn?: string;
		ReplicationTaskAssessmentRunArn?: string;
		IndividualAssessmentName?: string;
		Status?: string;
		ReplicationTaskIndividualAssessmentStartDate?: Date;
	}

	/** Provides information that describes an individual assessment from a premigration assessment run. */
	export interface ReplicationTaskIndividualAssessmentFormProperties {
		ReplicationTaskIndividualAssessmentArn: FormControl<string | null | undefined>,
		ReplicationTaskAssessmentRunArn: FormControl<string | null | undefined>,
		IndividualAssessmentName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		ReplicationTaskIndividualAssessmentStartDate: FormControl<Date | null | undefined>,
	}
	export function CreateReplicationTaskIndividualAssessmentFormGroup() {
		return new FormGroup<ReplicationTaskIndividualAssessmentFormProperties>({
			ReplicationTaskIndividualAssessmentArn: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskAssessmentRunArn: new FormControl<string | null | undefined>(undefined),
			IndividualAssessmentName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskIndividualAssessmentStartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationTaskIndividualAssessmentsMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeReplicationTaskIndividualAssessmentsMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationTaskIndividualAssessmentsMessageFormGroup() {
		return new FormGroup<DescribeReplicationTaskIndividualAssessmentsMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationTasksResponse {
		Marker?: string;
		ReplicationTasks?: Array<ReplicationTask>;
	}

	/** <p/> */
	export interface DescribeReplicationTasksResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationTasksResponseFormGroup() {
		return new FormGroup<DescribeReplicationTasksResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationTasksMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
		WithoutSettings?: boolean | null;
	}

	/** <p/> */
	export interface DescribeReplicationTasksMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		WithoutSettings: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeReplicationTasksMessageFormGroup() {
		return new FormGroup<DescribeReplicationTasksMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			WithoutSettings: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationsResponse {
		Marker?: string;
		Replications?: Array<Replication>;
	}

	/** <p/> */
	export interface DescribeReplicationsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationsResponseFormGroup() {
		return new FormGroup<DescribeReplicationsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information that describes a serverless replication created by the <code>CreateReplication</code> operation. */
	export interface Replication {
		ReplicationConfigIdentifier?: string;
		ReplicationConfigArn?: string;
		SourceEndpointArn?: string;
		TargetEndpointArn?: string;
		ReplicationType?: MigrationTypeValue;
		Status?: string;
		ProvisionData?: ProvisionData;
		StopReason?: string;
		FailureMessages?: Array<string>;
		ReplicationStats?: ReplicationStats;
		StartReplicationType?: string;
		CdcStartTime?: Date;
		CdcStartPosition?: string;
		CdcStopPosition?: string;
		RecoveryCheckpoint?: string;
		ReplicationCreateTime?: Date;
		ReplicationUpdateTime?: Date;
		ReplicationLastStopTime?: Date;
	}

	/** Provides information that describes a serverless replication created by the <code>CreateReplication</code> operation. */
	export interface ReplicationFormProperties {
		ReplicationConfigIdentifier: FormControl<string | null | undefined>,
		ReplicationConfigArn: FormControl<string | null | undefined>,
		SourceEndpointArn: FormControl<string | null | undefined>,
		TargetEndpointArn: FormControl<string | null | undefined>,
		ReplicationType: FormControl<MigrationTypeValue | null | undefined>,
		Status: FormControl<string | null | undefined>,
		StopReason: FormControl<string | null | undefined>,
		StartReplicationType: FormControl<string | null | undefined>,
		CdcStartTime: FormControl<Date | null | undefined>,
		CdcStartPosition: FormControl<string | null | undefined>,
		CdcStopPosition: FormControl<string | null | undefined>,
		RecoveryCheckpoint: FormControl<string | null | undefined>,
		ReplicationCreateTime: FormControl<Date | null | undefined>,
		ReplicationUpdateTime: FormControl<Date | null | undefined>,
		ReplicationLastStopTime: FormControl<Date | null | undefined>,
	}
	export function CreateReplicationFormGroup() {
		return new FormGroup<ReplicationFormProperties>({
			ReplicationConfigIdentifier: new FormControl<string | null | undefined>(undefined),
			ReplicationConfigArn: new FormControl<string | null | undefined>(undefined),
			SourceEndpointArn: new FormControl<string | null | undefined>(undefined),
			TargetEndpointArn: new FormControl<string | null | undefined>(undefined),
			ReplicationType: new FormControl<MigrationTypeValue | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			StopReason: new FormControl<string | null | undefined>(undefined),
			StartReplicationType: new FormControl<string | null | undefined>(undefined),
			CdcStartTime: new FormControl<Date | null | undefined>(undefined),
			CdcStartPosition: new FormControl<string | null | undefined>(undefined),
			CdcStopPosition: new FormControl<string | null | undefined>(undefined),
			RecoveryCheckpoint: new FormControl<string | null | undefined>(undefined),
			ReplicationCreateTime: new FormControl<Date | null | undefined>(undefined),
			ReplicationUpdateTime: new FormControl<Date | null | undefined>(undefined),
			ReplicationLastStopTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about provisioning resources for an DMS serverless replication. */
	export interface ProvisionData {
		ProvisionState?: string;
		ProvisionedCapacityUnits?: number | null;
		DateProvisioned?: Date;
		IsNewProvisioningAvailable?: boolean | null;
		DateNewProvisioningDataAvailable?: Date;
		ReasonForNewProvisioningData?: string;
	}

	/** Information about provisioning resources for an DMS serverless replication. */
	export interface ProvisionDataFormProperties {
		ProvisionState: FormControl<string | null | undefined>,
		ProvisionedCapacityUnits: FormControl<number | null | undefined>,
		DateProvisioned: FormControl<Date | null | undefined>,
		IsNewProvisioningAvailable: FormControl<boolean | null | undefined>,
		DateNewProvisioningDataAvailable: FormControl<Date | null | undefined>,
		ReasonForNewProvisioningData: FormControl<string | null | undefined>,
	}
	export function CreateProvisionDataFormGroup() {
		return new FormGroup<ProvisionDataFormProperties>({
			ProvisionState: new FormControl<string | null | undefined>(undefined),
			ProvisionedCapacityUnits: new FormControl<number | null | undefined>(undefined),
			DateProvisioned: new FormControl<Date | null | undefined>(undefined),
			IsNewProvisioningAvailable: new FormControl<boolean | null | undefined>(undefined),
			DateNewProvisioningDataAvailable: new FormControl<Date | null | undefined>(undefined),
			ReasonForNewProvisioningData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This object provides a collection of statistics about a serverless replication. */
	export interface ReplicationStats {
		FullLoadProgressPercent?: number | null;
		ElapsedTimeMillis?: number | null;
		TablesLoaded?: number | null;
		TablesLoading?: number | null;
		TablesQueued?: number | null;
		TablesErrored?: number | null;
		FreshStartDate?: Date;
		StartDate?: Date;
		StopDate?: Date;
		FullLoadStartDate?: Date;
		FullLoadFinishDate?: Date;
	}

	/** This object provides a collection of statistics about a serverless replication. */
	export interface ReplicationStatsFormProperties {
		FullLoadProgressPercent: FormControl<number | null | undefined>,
		ElapsedTimeMillis: FormControl<number | null | undefined>,
		TablesLoaded: FormControl<number | null | undefined>,
		TablesLoading: FormControl<number | null | undefined>,
		TablesQueued: FormControl<number | null | undefined>,
		TablesErrored: FormControl<number | null | undefined>,
		FreshStartDate: FormControl<Date | null | undefined>,
		StartDate: FormControl<Date | null | undefined>,
		StopDate: FormControl<Date | null | undefined>,
		FullLoadStartDate: FormControl<Date | null | undefined>,
		FullLoadFinishDate: FormControl<Date | null | undefined>,
	}
	export function CreateReplicationStatsFormGroup() {
		return new FormGroup<ReplicationStatsFormProperties>({
			FullLoadProgressPercent: new FormControl<number | null | undefined>(undefined),
			ElapsedTimeMillis: new FormControl<number | null | undefined>(undefined),
			TablesLoaded: new FormControl<number | null | undefined>(undefined),
			TablesLoading: new FormControl<number | null | undefined>(undefined),
			TablesQueued: new FormControl<number | null | undefined>(undefined),
			TablesErrored: new FormControl<number | null | undefined>(undefined),
			FreshStartDate: new FormControl<Date | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			StopDate: new FormControl<Date | null | undefined>(undefined),
			FullLoadStartDate: new FormControl<Date | null | undefined>(undefined),
			FullLoadFinishDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationsMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeReplicationsMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationsMessageFormGroup() {
		return new FormGroup<DescribeReplicationsMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeSchemasResponse {
		Marker?: string;
		Schemas?: Array<string>;
	}

	/** <p/> */
	export interface DescribeSchemasResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSchemasResponseFormGroup() {
		return new FormGroup<DescribeSchemasResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeSchemasMessage {

		/** Required */
		EndpointArn: string;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeSchemasMessageFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSchemasMessageFormGroup() {
		return new FormGroup<DescribeSchemasMessageFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeTableStatisticsResponse {
		ReplicationTaskArn?: string;
		TableStatistics?: Array<TableStatistics>;
		Marker?: string;
	}

	/** <p/> */
	export interface DescribeTableStatisticsResponseFormProperties {
		ReplicationTaskArn: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTableStatisticsResponseFormGroup() {
		return new FormGroup<DescribeTableStatisticsResponseFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeTableStatisticsMessage {

		/** Required */
		ReplicationTaskArn: string;
		MaxRecords?: number | null;
		Marker?: string;
		Filters?: Array<Filter>;
	}

	/** <p/> */
	export interface DescribeTableStatisticsMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTableStatisticsMessageFormGroup() {
		return new FormGroup<DescribeTableStatisticsMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportMetadataModelAssessmentResponse {
		PdfReport?: ExportMetadataModelAssessmentResultEntry;
		CsvReport?: ExportMetadataModelAssessmentResultEntry;
	}
	export interface ExportMetadataModelAssessmentResponseFormProperties {
	}
	export function CreateExportMetadataModelAssessmentResponseFormGroup() {
		return new FormGroup<ExportMetadataModelAssessmentResponseFormProperties>({
		});

	}


	/** Provides information about an exported metadata model assessment. */
	export interface ExportMetadataModelAssessmentResultEntry {
		S3ObjectKey?: string;
		ObjectURL?: string;
	}

	/** Provides information about an exported metadata model assessment. */
	export interface ExportMetadataModelAssessmentResultEntryFormProperties {
		S3ObjectKey: FormControl<string | null | undefined>,
		ObjectURL: FormControl<string | null | undefined>,
	}
	export function CreateExportMetadataModelAssessmentResultEntryFormGroup() {
		return new FormGroup<ExportMetadataModelAssessmentResultEntryFormProperties>({
			S3ObjectKey: new FormControl<string | null | undefined>(undefined),
			ObjectURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportMetadataModelAssessmentMessage {

		/** Required */
		MigrationProjectIdentifier: string;

		/** Required */
		SelectionRules: string;
		FileName?: string;
		AssessmentReportTypes?: Array<AssessmentReportType>;
	}
	export interface ExportMetadataModelAssessmentMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,

		/** Required */
		SelectionRules: FormControl<string | null | undefined>,
		FileName: FormControl<string | null | undefined>,
	}
	export function CreateExportMetadataModelAssessmentMessageFormGroup() {
		return new FormGroup<ExportMetadataModelAssessmentMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SelectionRules: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssessmentReportType { pdf = 0, csv = 1 }

	export interface ImportCertificateResponse {
		Certificate?: Certificate;
	}
	export interface ImportCertificateResponseFormProperties {
	}
	export function CreateImportCertificateResponseFormGroup() {
		return new FormGroup<ImportCertificateResponseFormProperties>({
		});

	}

	export interface ImportCertificateMessage {

		/** Required */
		CertificateIdentifier: string;
		CertificatePem?: string;
		CertificateWallet?: string;
		Tags?: Array<Tag>;
	}
	export interface ImportCertificateMessageFormProperties {

		/** Required */
		CertificateIdentifier: FormControl<string | null | undefined>,
		CertificatePem: FormControl<string | null | undefined>,
		CertificateWallet: FormControl<string | null | undefined>,
	}
	export function CreateImportCertificateMessageFormGroup() {
		return new FormGroup<ImportCertificateMessageFormProperties>({
			CertificateIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CertificatePem: new FormControl<string | null | undefined>(undefined),
			CertificateWallet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidCertificateFault {
	}
	export interface InvalidCertificateFaultFormProperties {
	}
	export function CreateInvalidCertificateFaultFormGroup() {
		return new FormGroup<InvalidCertificateFaultFormProperties>({
		});

	}


	/** <p/> */
	export interface ListTagsForResourceResponse {
		TagList?: Array<Tag>;
	}

	/** <p/> */
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface ListTagsForResourceMessage {
		ResourceArn?: string;
		ResourceArnList?: Array<string>;
	}

	/** <p/> */
	export interface ListTagsForResourceMessageFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceMessageFormGroup() {
		return new FormGroup<ListTagsForResourceMessageFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyConversionConfigurationResponse {
		MigrationProjectIdentifier?: string;
	}
	export interface ModifyConversionConfigurationResponseFormProperties {
		MigrationProjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateModifyConversionConfigurationResponseFormGroup() {
		return new FormGroup<ModifyConversionConfigurationResponseFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyConversionConfigurationMessage {

		/** Required */
		MigrationProjectIdentifier: string;

		/** Required */
		ConversionConfiguration: string;
	}
	export interface ModifyConversionConfigurationMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,

		/** Required */
		ConversionConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateModifyConversionConfigurationMessageFormGroup() {
		return new FormGroup<ModifyConversionConfigurationMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConversionConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyDataProviderResponse {
		DataProvider?: DataProvider;
	}
	export interface ModifyDataProviderResponseFormProperties {
	}
	export function CreateModifyDataProviderResponseFormGroup() {
		return new FormGroup<ModifyDataProviderResponseFormProperties>({
		});

	}

	export interface ModifyDataProviderMessage {

		/** Required */
		DataProviderIdentifier: string;
		DataProviderName?: string;
		Description?: string;
		Engine?: string;
		ExactSettings?: boolean | null;
		Settings?: DataProviderSettings;
	}
	export interface ModifyDataProviderMessageFormProperties {

		/** Required */
		DataProviderIdentifier: FormControl<string | null | undefined>,
		DataProviderName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		ExactSettings: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyDataProviderMessageFormGroup() {
		return new FormGroup<ModifyDataProviderMessageFormProperties>({
			DataProviderIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataProviderName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			ExactSettings: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ModifyEndpointResponse {
		Endpoint?: Endpoint;
	}

	/** <p/> */
	export interface ModifyEndpointResponseFormProperties {
	}
	export function CreateModifyEndpointResponseFormGroup() {
		return new FormGroup<ModifyEndpointResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyEndpointMessage {

		/** Required */
		EndpointArn: string;
		EndpointIdentifier?: string;
		EndpointType?: ReplicationEndpointTypeValue;
		EngineName?: string;
		Username?: string;
		Password?: string;
		ServerName?: string;
		Port?: number | null;
		DatabaseName?: string;
		ExtraConnectionAttributes?: string;
		CertificateArn?: string;
		SslMode?: DmsSslModeValue;
		ServiceAccessRoleArn?: string;
		ExternalTableDefinition?: string;
		DynamoDbSettings?: DynamoDbSettings;
		S3Settings?: S3Settings;
		DmsTransferSettings?: DmsTransferSettings;
		MongoDbSettings?: MongoDbSettings;
		KinesisSettings?: KinesisSettings;
		KafkaSettings?: KafkaSettings;
		ElasticsearchSettings?: ElasticsearchSettings;
		NeptuneSettings?: NeptuneSettings;

		/** Provides information that defines an Amazon Redshift endpoint. */
		RedshiftSettings?: RedshiftSettings;
		PostgreSQLSettings?: PostgreSQLSettings;
		MySQLSettings?: MySQLSettings;
		OracleSettings?: OracleSettings;
		SybaseSettings?: SybaseSettings;
		MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;
		IBMDb2Settings?: IBMDb2Settings;
		DocDbSettings?: DocDbSettings;
		RedisSettings?: RedisSettings;
		ExactSettings?: boolean | null;
		GcpMySQLSettings?: GcpMySQLSettings;
		TimestreamSettings?: TimestreamSettings;
	}

	/** <p/> */
	export interface ModifyEndpointMessageFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
		EndpointIdentifier: FormControl<string | null | undefined>,
		EndpointType: FormControl<ReplicationEndpointTypeValue | null | undefined>,
		EngineName: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		ExtraConnectionAttributes: FormControl<string | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
		SslMode: FormControl<DmsSslModeValue | null | undefined>,
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		ExternalTableDefinition: FormControl<string | null | undefined>,
		ExactSettings: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyEndpointMessageFormGroup() {
		return new FormGroup<ModifyEndpointMessageFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointIdentifier: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<ReplicationEndpointTypeValue | null | undefined>(undefined),
			EngineName: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			ExtraConnectionAttributes: new FormControl<string | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			SslMode: new FormControl<DmsSslModeValue | null | undefined>(undefined),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			ExternalTableDefinition: new FormControl<string | null | undefined>(undefined),
			ExactSettings: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ModifyEventSubscriptionResponse {
		EventSubscription?: EventSubscription;
	}

	/** <p/> */
	export interface ModifyEventSubscriptionResponseFormProperties {
	}
	export function CreateModifyEventSubscriptionResponseFormGroup() {
		return new FormGroup<ModifyEventSubscriptionResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;
		SnsTopicArn?: string;
		SourceType?: string;
		EventCategories?: Array<string>;
		Enabled?: boolean | null;
	}

	/** <p/> */
	export interface ModifyEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyEventSubscriptionMessageFormGroup() {
		return new FormGroup<ModifyEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ModifyInstanceProfileResponse {
		InstanceProfile?: InstanceProfile;
	}
	export interface ModifyInstanceProfileResponseFormProperties {
	}
	export function CreateModifyInstanceProfileResponseFormGroup() {
		return new FormGroup<ModifyInstanceProfileResponseFormProperties>({
		});

	}

	export interface ModifyInstanceProfileMessage {

		/** Required */
		InstanceProfileIdentifier: string;
		AvailabilityZone?: string;
		KmsKeyArn?: string;
		PubliclyAccessible?: boolean | null;
		NetworkType?: string;
		InstanceProfileName?: string;
		Description?: string;
		SubnetGroupIdentifier?: string;
		VpcSecurityGroups?: Array<string>;
	}
	export interface ModifyInstanceProfileMessageFormProperties {

		/** Required */
		InstanceProfileIdentifier: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		NetworkType: FormControl<string | null | undefined>,
		InstanceProfileName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		SubnetGroupIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateModifyInstanceProfileMessageFormGroup() {
		return new FormGroup<ModifyInstanceProfileMessageFormProperties>({
			InstanceProfileIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			NetworkType: new FormControl<string | null | undefined>(undefined),
			InstanceProfileName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			SubnetGroupIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyMigrationProjectResponse {
		MigrationProject?: MigrationProject;
	}
	export interface ModifyMigrationProjectResponseFormProperties {
	}
	export function CreateModifyMigrationProjectResponseFormGroup() {
		return new FormGroup<ModifyMigrationProjectResponseFormProperties>({
		});

	}

	export interface ModifyMigrationProjectMessage {

		/** Required */
		MigrationProjectIdentifier: string;
		MigrationProjectName?: string;
		SourceDataProviderDescriptors?: Array<DataProviderDescriptorDefinition>;
		TargetDataProviderDescriptors?: Array<DataProviderDescriptorDefinition>;
		InstanceProfileIdentifier?: string;
		TransformationRules?: string;
		Description?: string;
		SchemaConversionApplicationAttributes?: SCApplicationAttributes;
	}
	export interface ModifyMigrationProjectMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,
		MigrationProjectName: FormControl<string | null | undefined>,
		InstanceProfileIdentifier: FormControl<string | null | undefined>,
		TransformationRules: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateModifyMigrationProjectMessageFormGroup() {
		return new FormGroup<ModifyMigrationProjectMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MigrationProjectName: new FormControl<string | null | undefined>(undefined),
			InstanceProfileIdentifier: new FormControl<string | null | undefined>(undefined),
			TransformationRules: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyReplicationConfigResponse {
		ReplicationConfig?: ReplicationConfig;
	}
	export interface ModifyReplicationConfigResponseFormProperties {
	}
	export function CreateModifyReplicationConfigResponseFormGroup() {
		return new FormGroup<ModifyReplicationConfigResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyReplicationConfigMessage {

		/** Required */
		ReplicationConfigArn: string;
		ReplicationConfigIdentifier?: string;
		ReplicationType?: MigrationTypeValue;
		TableMappings?: string;
		ReplicationSettings?: string;
		SupplementalSettings?: string;
		ComputeConfig?: ComputeConfig;
		SourceEndpointArn?: string;
		TargetEndpointArn?: string;
	}

	/** <p/> */
	export interface ModifyReplicationConfigMessageFormProperties {

		/** Required */
		ReplicationConfigArn: FormControl<string | null | undefined>,
		ReplicationConfigIdentifier: FormControl<string | null | undefined>,
		ReplicationType: FormControl<MigrationTypeValue | null | undefined>,
		TableMappings: FormControl<string | null | undefined>,
		ReplicationSettings: FormControl<string | null | undefined>,
		SupplementalSettings: FormControl<string | null | undefined>,
		SourceEndpointArn: FormControl<string | null | undefined>,
		TargetEndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateModifyReplicationConfigMessageFormGroup() {
		return new FormGroup<ModifyReplicationConfigMessageFormProperties>({
			ReplicationConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationConfigIdentifier: new FormControl<string | null | undefined>(undefined),
			ReplicationType: new FormControl<MigrationTypeValue | null | undefined>(undefined),
			TableMappings: new FormControl<string | null | undefined>(undefined),
			ReplicationSettings: new FormControl<string | null | undefined>(undefined),
			SupplementalSettings: new FormControl<string | null | undefined>(undefined),
			SourceEndpointArn: new FormControl<string | null | undefined>(undefined),
			TargetEndpointArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ModifyReplicationInstanceResponse {
		ReplicationInstance?: ReplicationInstance;
	}

	/** <p/> */
	export interface ModifyReplicationInstanceResponseFormProperties {
	}
	export function CreateModifyReplicationInstanceResponseFormGroup() {
		return new FormGroup<ModifyReplicationInstanceResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyReplicationInstanceMessage {

		/** Required */
		ReplicationInstanceArn: string;
		AllocatedStorage?: number | null;
		ApplyImmediately?: boolean | null;
		ReplicationInstanceClass?: string;
		VpcSecurityGroupIds?: Array<string>;
		PreferredMaintenanceWindow?: string;
		MultiAZ?: boolean | null;
		EngineVersion?: string;
		AllowMajorVersionUpgrade?: boolean | null;
		AutoMinorVersionUpgrade?: boolean | null;
		ReplicationInstanceIdentifier?: string;
		NetworkType?: string;
	}

	/** <p/> */
	export interface ModifyReplicationInstanceMessageFormProperties {

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		ApplyImmediately: FormControl<boolean | null | undefined>,
		ReplicationInstanceClass: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AllowMajorVersionUpgrade: FormControl<boolean | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		ReplicationInstanceIdentifier: FormControl<string | null | undefined>,
		NetworkType: FormControl<string | null | undefined>,
	}
	export function CreateModifyReplicationInstanceMessageFormGroup() {
		return new FormGroup<ModifyReplicationInstanceMessageFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			ApplyImmediately: new FormControl<boolean | null | undefined>(undefined),
			ReplicationInstanceClass: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AllowMajorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			ReplicationInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			NetworkType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpgradeDependencyFailureFault {
	}
	export interface UpgradeDependencyFailureFaultFormProperties {
	}
	export function CreateUpgradeDependencyFailureFaultFormGroup() {
		return new FormGroup<UpgradeDependencyFailureFaultFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyReplicationSubnetGroupResponse {
		ReplicationSubnetGroup?: ReplicationSubnetGroup;
	}

	/** <p/> */
	export interface ModifyReplicationSubnetGroupResponseFormProperties {
	}
	export function CreateModifyReplicationSubnetGroupResponseFormGroup() {
		return new FormGroup<ModifyReplicationSubnetGroupResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyReplicationSubnetGroupMessage {

		/** Required */
		ReplicationSubnetGroupIdentifier: string;
		ReplicationSubnetGroupDescription?: string;

		/** Required */
		SubnetIds: Array<string>;
	}

	/** <p/> */
	export interface ModifyReplicationSubnetGroupMessageFormProperties {

		/** Required */
		ReplicationSubnetGroupIdentifier: FormControl<string | null | undefined>,
		ReplicationSubnetGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateModifyReplicationSubnetGroupMessageFormGroup() {
		return new FormGroup<ModifyReplicationSubnetGroupMessageFormProperties>({
			ReplicationSubnetGroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationSubnetGroupDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubnetAlreadyInUse {
	}
	export interface SubnetAlreadyInUseFormProperties {
	}
	export function CreateSubnetAlreadyInUseFormGroup() {
		return new FormGroup<SubnetAlreadyInUseFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyReplicationTaskResponse {
		ReplicationTask?: ReplicationTask;
	}

	/** <p/> */
	export interface ModifyReplicationTaskResponseFormProperties {
	}
	export function CreateModifyReplicationTaskResponseFormGroup() {
		return new FormGroup<ModifyReplicationTaskResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyReplicationTaskMessage {

		/** Required */
		ReplicationTaskArn: string;
		ReplicationTaskIdentifier?: string;
		MigrationType?: MigrationTypeValue;
		TableMappings?: string;
		ReplicationTaskSettings?: string;
		CdcStartTime?: Date;
		CdcStartPosition?: string;
		CdcStopPosition?: string;
		TaskData?: string;
	}

	/** <p/> */
	export interface ModifyReplicationTaskMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,
		ReplicationTaskIdentifier: FormControl<string | null | undefined>,
		MigrationType: FormControl<MigrationTypeValue | null | undefined>,
		TableMappings: FormControl<string | null | undefined>,
		ReplicationTaskSettings: FormControl<string | null | undefined>,
		CdcStartTime: FormControl<Date | null | undefined>,
		CdcStartPosition: FormControl<string | null | undefined>,
		CdcStopPosition: FormControl<string | null | undefined>,
		TaskData: FormControl<string | null | undefined>,
	}
	export function CreateModifyReplicationTaskMessageFormGroup() {
		return new FormGroup<ModifyReplicationTaskMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationTaskIdentifier: new FormControl<string | null | undefined>(undefined),
			MigrationType: new FormControl<MigrationTypeValue | null | undefined>(undefined),
			TableMappings: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskSettings: new FormControl<string | null | undefined>(undefined),
			CdcStartTime: new FormControl<Date | null | undefined>(undefined),
			CdcStartPosition: new FormControl<string | null | undefined>(undefined),
			CdcStopPosition: new FormControl<string | null | undefined>(undefined),
			TaskData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface MoveReplicationTaskResponse {
		ReplicationTask?: ReplicationTask;
	}

	/** <p/> */
	export interface MoveReplicationTaskResponseFormProperties {
	}
	export function CreateMoveReplicationTaskResponseFormGroup() {
		return new FormGroup<MoveReplicationTaskResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface MoveReplicationTaskMessage {

		/** Required */
		ReplicationTaskArn: string;

		/** Required */
		TargetReplicationInstanceArn: string;
	}

	/** <p/> */
	export interface MoveReplicationTaskMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,

		/** Required */
		TargetReplicationInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateMoveReplicationTaskMessageFormGroup() {
		return new FormGroup<MoveReplicationTaskMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RebootReplicationInstanceResponse {
		ReplicationInstance?: ReplicationInstance;
	}
	export interface RebootReplicationInstanceResponseFormProperties {
	}
	export function CreateRebootReplicationInstanceResponseFormGroup() {
		return new FormGroup<RebootReplicationInstanceResponseFormProperties>({
		});

	}

	export interface RebootReplicationInstanceMessage {

		/** Required */
		ReplicationInstanceArn: string;
		ForceFailover?: boolean | null;
		ForcePlannedFailover?: boolean | null;
	}
	export interface RebootReplicationInstanceMessageFormProperties {

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		ForceFailover: FormControl<boolean | null | undefined>,
		ForcePlannedFailover: FormControl<boolean | null | undefined>,
	}
	export function CreateRebootReplicationInstanceMessageFormGroup() {
		return new FormGroup<RebootReplicationInstanceMessageFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForceFailover: new FormControl<boolean | null | undefined>(undefined),
			ForcePlannedFailover: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface RefreshSchemasResponse {
		RefreshSchemasStatus?: RefreshSchemasStatus;
	}

	/** <p/> */
	export interface RefreshSchemasResponseFormProperties {
	}
	export function CreateRefreshSchemasResponseFormGroup() {
		return new FormGroup<RefreshSchemasResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface RefreshSchemasMessage {

		/** Required */
		EndpointArn: string;

		/** Required */
		ReplicationInstanceArn: string;
	}

	/** <p/> */
	export interface RefreshSchemasMessageFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateRefreshSchemasMessageFormGroup() {
		return new FormGroup<RefreshSchemasMessageFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface ReloadReplicationTablesResponse {
		ReplicationConfigArn?: string;
	}

	/** <p/> */
	export interface ReloadReplicationTablesResponseFormProperties {
		ReplicationConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateReloadReplicationTablesResponseFormGroup() {
		return new FormGroup<ReloadReplicationTablesResponseFormProperties>({
			ReplicationConfigArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ReloadReplicationTablesMessage {

		/** Required */
		ReplicationConfigArn: string;

		/** Required */
		TablesToReload: Array<TableToReload>;
		ReloadOption?: ReloadOptionValue;
	}

	/** <p/> */
	export interface ReloadReplicationTablesMessageFormProperties {

		/** Required */
		ReplicationConfigArn: FormControl<string | null | undefined>,
		ReloadOption: FormControl<ReloadOptionValue | null | undefined>,
	}
	export function CreateReloadReplicationTablesMessageFormGroup() {
		return new FormGroup<ReloadReplicationTablesMessageFormProperties>({
			ReplicationConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReloadOption: new FormControl<ReloadOptionValue | null | undefined>(undefined),
		});

	}


	/** Provides the name of the schema and table to be reloaded. */
	export interface TableToReload {

		/** Required */
		SchemaName: string;

		/** Required */
		TableName: string;
	}

	/** Provides the name of the schema and table to be reloaded. */
	export interface TableToReloadFormProperties {

		/** Required */
		SchemaName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateTableToReloadFormGroup() {
		return new FormGroup<TableToReloadFormProperties>({
			SchemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReloadOptionValue { 'data-reload' = 0, 'validate-only' = 1 }

	export interface ReloadTablesResponse {
		ReplicationTaskArn?: string;
	}
	export interface ReloadTablesResponseFormProperties {
		ReplicationTaskArn: FormControl<string | null | undefined>,
	}
	export function CreateReloadTablesResponseFormGroup() {
		return new FormGroup<ReloadTablesResponseFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReloadTablesMessage {

		/** Required */
		ReplicationTaskArn: string;

		/** Required */
		TablesToReload: Array<TableToReload>;
		ReloadOption?: ReloadOptionValue;
	}
	export interface ReloadTablesMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,
		ReloadOption: FormControl<ReloadOptionValue | null | undefined>,
	}
	export function CreateReloadTablesMessageFormGroup() {
		return new FormGroup<ReloadTablesMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReloadOption: new FormControl<ReloadOptionValue | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface RemoveTagsFromResourceResponse {
	}

	/** <p/> */
	export interface RemoveTagsFromResourceResponseFormProperties {
	}
	export function CreateRemoveTagsFromResourceResponseFormGroup() {
		return new FormGroup<RemoveTagsFromResourceResponseFormProperties>({
		});

	}


	/** Removes one or more tags from an DMS resource. */
	export interface RemoveTagsFromResourceMessage {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}

	/** Removes one or more tags from an DMS resource. */
	export interface RemoveTagsFromResourceMessageFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsFromResourceMessageFormGroup() {
		return new FormGroup<RemoveTagsFromResourceMessageFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RunFleetAdvisorLsaAnalysisResponse {
		LsaAnalysisId?: string;
		Status?: string;
	}
	export interface RunFleetAdvisorLsaAnalysisResponseFormProperties {
		LsaAnalysisId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateRunFleetAdvisorLsaAnalysisResponseFormGroup() {
		return new FormGroup<RunFleetAdvisorLsaAnalysisResponseFormProperties>({
			LsaAnalysisId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartExtensionPackAssociationResponse {
		RequestIdentifier?: string;
	}
	export interface StartExtensionPackAssociationResponseFormProperties {
		RequestIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStartExtensionPackAssociationResponseFormGroup() {
		return new FormGroup<StartExtensionPackAssociationResponseFormProperties>({
			RequestIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartExtensionPackAssociationMessage {

		/** Required */
		MigrationProjectIdentifier: string;
	}
	export interface StartExtensionPackAssociationMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStartExtensionPackAssociationMessageFormGroup() {
		return new FormGroup<StartExtensionPackAssociationMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartMetadataModelAssessmentResponse {
		RequestIdentifier?: string;
	}
	export interface StartMetadataModelAssessmentResponseFormProperties {
		RequestIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStartMetadataModelAssessmentResponseFormGroup() {
		return new FormGroup<StartMetadataModelAssessmentResponseFormProperties>({
			RequestIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMetadataModelAssessmentMessage {

		/** Required */
		MigrationProjectIdentifier: string;

		/** Required */
		SelectionRules: string;
	}
	export interface StartMetadataModelAssessmentMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,

		/** Required */
		SelectionRules: FormControl<string | null | undefined>,
	}
	export function CreateStartMetadataModelAssessmentMessageFormGroup() {
		return new FormGroup<StartMetadataModelAssessmentMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SelectionRules: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartMetadataModelConversionResponse {
		RequestIdentifier?: string;
	}
	export interface StartMetadataModelConversionResponseFormProperties {
		RequestIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStartMetadataModelConversionResponseFormGroup() {
		return new FormGroup<StartMetadataModelConversionResponseFormProperties>({
			RequestIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMetadataModelConversionMessage {

		/** Required */
		MigrationProjectIdentifier: string;

		/** Required */
		SelectionRules: string;
	}
	export interface StartMetadataModelConversionMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,

		/** Required */
		SelectionRules: FormControl<string | null | undefined>,
	}
	export function CreateStartMetadataModelConversionMessageFormGroup() {
		return new FormGroup<StartMetadataModelConversionMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SelectionRules: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartMetadataModelExportAsScriptResponse {
		RequestIdentifier?: string;
	}
	export interface StartMetadataModelExportAsScriptResponseFormProperties {
		RequestIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStartMetadataModelExportAsScriptResponseFormGroup() {
		return new FormGroup<StartMetadataModelExportAsScriptResponseFormProperties>({
			RequestIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMetadataModelExportAsScriptMessage {

		/** Required */
		MigrationProjectIdentifier: string;

		/** Required */
		SelectionRules: string;

		/** Required */
		Origin: OriginTypeValue;
		FileName?: string;
	}
	export interface StartMetadataModelExportAsScriptMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,

		/** Required */
		SelectionRules: FormControl<string | null | undefined>,

		/** Required */
		Origin: FormControl<OriginTypeValue | null | undefined>,
		FileName: FormControl<string | null | undefined>,
	}
	export function CreateStartMetadataModelExportAsScriptMessageFormGroup() {
		return new FormGroup<StartMetadataModelExportAsScriptMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SelectionRules: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Origin: new FormControl<OriginTypeValue | null | undefined>(undefined, [Validators.required]),
			FileName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OriginTypeValue { SOURCE = 0, TARGET = 1 }

	export interface StartMetadataModelExportToTargetResponse {
		RequestIdentifier?: string;
	}
	export interface StartMetadataModelExportToTargetResponseFormProperties {
		RequestIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStartMetadataModelExportToTargetResponseFormGroup() {
		return new FormGroup<StartMetadataModelExportToTargetResponseFormProperties>({
			RequestIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMetadataModelExportToTargetMessage {

		/** Required */
		MigrationProjectIdentifier: string;

		/** Required */
		SelectionRules: string;
		OverwriteExtensionPack?: boolean | null;
	}
	export interface StartMetadataModelExportToTargetMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,

		/** Required */
		SelectionRules: FormControl<string | null | undefined>,
		OverwriteExtensionPack: FormControl<boolean | null | undefined>,
	}
	export function CreateStartMetadataModelExportToTargetMessageFormGroup() {
		return new FormGroup<StartMetadataModelExportToTargetMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SelectionRules: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OverwriteExtensionPack: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartMetadataModelImportResponse {
		RequestIdentifier?: string;
	}
	export interface StartMetadataModelImportResponseFormProperties {
		RequestIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStartMetadataModelImportResponseFormGroup() {
		return new FormGroup<StartMetadataModelImportResponseFormProperties>({
			RequestIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMetadataModelImportMessage {

		/** Required */
		MigrationProjectIdentifier: string;

		/** Required */
		SelectionRules: string;

		/** Required */
		Origin: OriginTypeValue;
		Refresh?: boolean | null;
	}
	export interface StartMetadataModelImportMessageFormProperties {

		/** Required */
		MigrationProjectIdentifier: FormControl<string | null | undefined>,

		/** Required */
		SelectionRules: FormControl<string | null | undefined>,

		/** Required */
		Origin: FormControl<OriginTypeValue | null | undefined>,
		Refresh: FormControl<boolean | null | undefined>,
	}
	export function CreateStartMetadataModelImportMessageFormGroup() {
		return new FormGroup<StartMetadataModelImportMessageFormProperties>({
			MigrationProjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SelectionRules: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Origin: new FormControl<OriginTypeValue | null | undefined>(undefined, [Validators.required]),
			Refresh: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartRecommendationsRequest {

		/** Required */
		DatabaseId: string;

		/** Required */
		Settings: RecommendationSettings;
	}
	export interface StartRecommendationsRequestFormProperties {

		/** Required */
		DatabaseId: FormControl<string | null | undefined>,
	}
	export function CreateStartRecommendationsRequestFormGroup() {
		return new FormGroup<StartRecommendationsRequestFormProperties>({
			DatabaseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface StartReplicationResponse {
		Replication?: Replication;
	}

	/** <p/> */
	export interface StartReplicationResponseFormProperties {
	}
	export function CreateStartReplicationResponseFormGroup() {
		return new FormGroup<StartReplicationResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface StartReplicationMessage {

		/** Required */
		ReplicationConfigArn: string;

		/** Required */
		StartReplicationType: string;
		CdcStartTime?: Date;
		CdcStartPosition?: string;
		CdcStopPosition?: string;
	}

	/** <p/> */
	export interface StartReplicationMessageFormProperties {

		/** Required */
		ReplicationConfigArn: FormControl<string | null | undefined>,

		/** Required */
		StartReplicationType: FormControl<string | null | undefined>,
		CdcStartTime: FormControl<Date | null | undefined>,
		CdcStartPosition: FormControl<string | null | undefined>,
		CdcStopPosition: FormControl<string | null | undefined>,
	}
	export function CreateStartReplicationMessageFormGroup() {
		return new FormGroup<StartReplicationMessageFormProperties>({
			ReplicationConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartReplicationType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CdcStartTime: new FormControl<Date | null | undefined>(undefined),
			CdcStartPosition: new FormControl<string | null | undefined>(undefined),
			CdcStopPosition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface StartReplicationTaskResponse {
		ReplicationTask?: ReplicationTask;
	}

	/** <p/> */
	export interface StartReplicationTaskResponseFormProperties {
	}
	export function CreateStartReplicationTaskResponseFormGroup() {
		return new FormGroup<StartReplicationTaskResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface StartReplicationTaskMessage {

		/** Required */
		ReplicationTaskArn: string;

		/** Required */
		StartReplicationTaskType: StartReplicationTaskTypeValue;
		CdcStartTime?: Date;
		CdcStartPosition?: string;
		CdcStopPosition?: string;
	}

	/** <p/> */
	export interface StartReplicationTaskMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,

		/** Required */
		StartReplicationTaskType: FormControl<StartReplicationTaskTypeValue | null | undefined>,
		CdcStartTime: FormControl<Date | null | undefined>,
		CdcStartPosition: FormControl<string | null | undefined>,
		CdcStopPosition: FormControl<string | null | undefined>,
	}
	export function CreateStartReplicationTaskMessageFormGroup() {
		return new FormGroup<StartReplicationTaskMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartReplicationTaskType: new FormControl<StartReplicationTaskTypeValue | null | undefined>(undefined, [Validators.required]),
			CdcStartTime: new FormControl<Date | null | undefined>(undefined),
			CdcStartPosition: new FormControl<string | null | undefined>(undefined),
			CdcStopPosition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StartReplicationTaskTypeValue { 'start-replication' = 0, 'resume-processing' = 1, 'reload-target' = 2 }


	/** <p/> */
	export interface StartReplicationTaskAssessmentResponse {
		ReplicationTask?: ReplicationTask;
	}

	/** <p/> */
	export interface StartReplicationTaskAssessmentResponseFormProperties {
	}
	export function CreateStartReplicationTaskAssessmentResponseFormGroup() {
		return new FormGroup<StartReplicationTaskAssessmentResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface StartReplicationTaskAssessmentMessage {

		/** Required */
		ReplicationTaskArn: string;
	}

	/** <p/> */
	export interface StartReplicationTaskAssessmentMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,
	}
	export function CreateStartReplicationTaskAssessmentMessageFormGroup() {
		return new FormGroup<StartReplicationTaskAssessmentMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface StartReplicationTaskAssessmentRunResponse {
		ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
	}

	/** <p/> */
	export interface StartReplicationTaskAssessmentRunResponseFormProperties {
	}
	export function CreateStartReplicationTaskAssessmentRunResponseFormGroup() {
		return new FormGroup<StartReplicationTaskAssessmentRunResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface StartReplicationTaskAssessmentRunMessage {

		/** Required */
		ReplicationTaskArn: string;

		/** Required */
		ServiceAccessRoleArn: string;

		/** Required */
		ResultLocationBucket: string;
		ResultLocationFolder?: string;
		ResultEncryptionMode?: string;
		ResultKmsKeyArn?: string;

		/** Required */
		AssessmentRunName: string;
		IncludeOnly?: Array<string>;
		Exclude?: Array<string>;
	}

	/** <p/> */
	export interface StartReplicationTaskAssessmentRunMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,

		/** Required */
		ServiceAccessRoleArn: FormControl<string | null | undefined>,

		/** Required */
		ResultLocationBucket: FormControl<string | null | undefined>,
		ResultLocationFolder: FormControl<string | null | undefined>,
		ResultEncryptionMode: FormControl<string | null | undefined>,
		ResultKmsKeyArn: FormControl<string | null | undefined>,

		/** Required */
		AssessmentRunName: FormControl<string | null | undefined>,
	}
	export function CreateStartReplicationTaskAssessmentRunMessageFormGroup() {
		return new FormGroup<StartReplicationTaskAssessmentRunMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResultLocationBucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResultLocationFolder: new FormControl<string | null | undefined>(undefined),
			ResultEncryptionMode: new FormControl<string | null | undefined>(undefined),
			ResultKmsKeyArn: new FormControl<string | null | undefined>(undefined),
			AssessmentRunName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface KMSFault {
	}
	export interface KMSFaultFormProperties {
	}
	export function CreateKMSFaultFormGroup() {
		return new FormGroup<KMSFaultFormProperties>({
		});

	}

	export interface StopReplicationResponse {
		Replication?: Replication;
	}
	export interface StopReplicationResponseFormProperties {
	}
	export function CreateStopReplicationResponseFormGroup() {
		return new FormGroup<StopReplicationResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface StopReplicationMessage {

		/** Required */
		ReplicationConfigArn: string;
	}

	/** <p/> */
	export interface StopReplicationMessageFormProperties {

		/** Required */
		ReplicationConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateStopReplicationMessageFormGroup() {
		return new FormGroup<StopReplicationMessageFormProperties>({
			ReplicationConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface StopReplicationTaskResponse {
		ReplicationTask?: ReplicationTask;
	}

	/** <p/> */
	export interface StopReplicationTaskResponseFormProperties {
	}
	export function CreateStopReplicationTaskResponseFormGroup() {
		return new FormGroup<StopReplicationTaskResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface StopReplicationTaskMessage {

		/** Required */
		ReplicationTaskArn: string;
	}

	/** <p/> */
	export interface StopReplicationTaskMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,
	}
	export function CreateStopReplicationTaskMessageFormGroup() {
		return new FormGroup<StopReplicationTaskMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface TestConnectionResponse {
		Connection?: Connection;
	}

	/** <p/> */
	export interface TestConnectionResponseFormProperties {
	}
	export function CreateTestConnectionResponseFormGroup() {
		return new FormGroup<TestConnectionResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface TestConnectionMessage {

		/** Required */
		ReplicationInstanceArn: string;

		/** Required */
		EndpointArn: string;
	}

	/** <p/> */
	export interface TestConnectionMessageFormProperties {

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateTestConnectionMessageFormGroup() {
		return new FormGroup<TestConnectionMessageFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface UpdateSubscriptionsToEventBridgeResponse {
		Result?: string;
	}

	/** <p/> */
	export interface UpdateSubscriptionsToEventBridgeResponseFormProperties {
		Result: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubscriptionsToEventBridgeResponseFormGroup() {
		return new FormGroup<UpdateSubscriptionsToEventBridgeResponseFormProperties>({
			Result: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface UpdateSubscriptionsToEventBridgeMessage {
		ForceMove?: boolean | null;
	}

	/** <p/> */
	export interface UpdateSubscriptionsToEventBridgeMessageFormProperties {
		ForceMove: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSubscriptionsToEventBridgeMessageFormGroup() {
		return new FormGroup<UpdateSubscriptionsToEventBridgeMessageFormProperties>({
			ForceMove: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds metadata tags to an DMS resource, including replication instance, endpoint, subnet group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
		 * Post #X-Amz-Target=AmazonDMSv20160101.AddTagsToResource
		 * @return {AddTagsToResourceResponse} Success
		 */
		AddTagsToResource(requestBody: AddTagsToResourceMessage): Observable<AddTagsToResourceResponse> {
			return this.http.post<AddTagsToResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a pending maintenance action to a resource (for example, to a replication instance).
		 * Post #X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction
		 * @return {ApplyPendingMaintenanceActionResponse} Success
		 */
		ApplyPendingMaintenanceAction(requestBody: ApplyPendingMaintenanceActionMessage): Observable<ApplyPendingMaintenanceActionResponse> {
			return this.http.post<ApplyPendingMaintenanceActionResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the analysis of up to 20 source databases to recommend target engines for each source database. This is a batch version of <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartRecommendations.html">StartRecommendations</a>.</p> <p>The result of analysis of each source database is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations
		 * @return {BatchStartRecommendationsResponse} Success
		 */
		BatchStartRecommendations(requestBody: BatchStartRecommendationsRequest): Observable<BatchStartRecommendationsResponse> {
			return this.http.post<BatchStartRecommendationsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Cancels a single premigration assessment run.</p> <p>This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun
		 * @return {CancelReplicationTaskAssessmentRunResponse} Success
		 */
		CancelReplicationTaskAssessmentRun(requestBody: CancelReplicationTaskAssessmentRunMessage): Observable<CancelReplicationTaskAssessmentRunResponse> {
			return this.http.post<CancelReplicationTaskAssessmentRunResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a data provider using the provided settings. A data provider stores a data store type and location information about your database.
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateDataProvider
		 * @return {CreateDataProviderResponse} Success
		 */
		CreateDataProvider(requestBody: CreateDataProviderMessage): Observable<CreateDataProviderResponse> {
			return this.http.post<CreateDataProviderResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateDataProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an endpoint using the provided settings.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>CreateEndpoint</code> API call. Specifying <code>DatabaseName</code> when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateEndpoint
		 * @return {CreateEndpointResponse} Success
		 */
		CreateEndpoint(requestBody: CreateEndpointMessage): Observable<CreateEndpointResponse> {
			return this.http.post<CreateEndpointResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Creates an DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don't specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your DMS sources. If you don't specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all DMS sources belonging to your customer account.</p> <p>For more information about DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> </p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription
		 * @return {CreateEventSubscriptionResponse} Success
		 */
		CreateEventSubscription(requestBody: CreateEventSubscriptionMessage): Observable<CreateEventSubscriptionResponse> {
			return this.http.post<CreateEventSubscriptionResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Fleet Advisor collector using the specified parameters.
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector
		 * @return {CreateFleetAdvisorCollectorResponse} Success
		 */
		CreateFleetAdvisorCollector(requestBody: CreateFleetAdvisorCollectorRequest): Observable<CreateFleetAdvisorCollectorResponse> {
			return this.http.post<CreateFleetAdvisorCollectorResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates the instance profile using the specified parameters.
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateInstanceProfile
		 * @return {CreateInstanceProfileResponse} Success
		 */
		CreateInstanceProfile(requestBody: CreateInstanceProfileMessage): Observable<CreateInstanceProfileResponse> {
			return this.http.post<CreateInstanceProfileResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateInstanceProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates the migration project using the specified parameters.</p> <p>You can run this action only after you create an instance profile and data providers using <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateInstanceProfile.html">CreateInstanceProfile</a> and <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateDataProvider.html">CreateDataProvider</a>.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateMigrationProject
		 * @return {CreateMigrationProjectResponse} Success
		 */
		CreateMigrationProject(requestBody: CreateMigrationProjectMessage): Observable<CreateMigrationProjectResponse> {
			return this.http.post<CreateMigrationProjectResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateMigrationProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a configuration that you can later provide to configure and start an DMS Serverless replication. You can also provide options to validate the configuration inputs before you start the replication.
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateReplicationConfig
		 * @return {CreateReplicationConfigResponse} Success
		 */
		CreateReplicationConfig(requestBody: CreateReplicationConfigMessage): Observable<CreateReplicationConfigResponse> {
			return this.http.post<CreateReplicationConfigResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateReplicationConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates the replication instance using the specified parameters.</p> <p>DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use DMS</a>.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance
		 * @return {CreateReplicationInstanceResponse} Success
		 */
		CreateReplicationInstance(requestBody: CreateReplicationInstanceMessage): Observable<CreateReplicationInstanceResponse> {
			return this.http.post<CreateReplicationInstanceResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p> <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p> <p>If a replication subnet group exists in your Amazon Web Services account, the CreateReplicationSubnetGroup action returns the following error message: The Replication Subnet Group already exists. In this case, delete the existing replication subnet group. To do so, use the <a href="https://docs.aws.amazon.com/en_us/dms/latest/APIReference/API_DeleteReplicationSubnetGroup.html">DeleteReplicationSubnetGroup</a> action. Optionally, choose Subnet groups in the DMS console, then choose your subnet group. Next, choose Delete from Actions.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup
		 * @return {CreateReplicationSubnetGroupResponse} Success
		 */
		CreateReplicationSubnetGroup(requestBody: CreateReplicationSubnetGroupMessage): Observable<CreateReplicationSubnetGroupResponse> {
			return this.http.post<CreateReplicationSubnetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a replication task using the specified parameters.
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask
		 * @return {CreateReplicationTaskResponse} Success
		 */
		CreateReplicationTask(requestBody: CreateReplicationTaskMessage): Observable<CreateReplicationTaskResponse> {
			return this.http.post<CreateReplicationTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified certificate.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteCertificate
		 * @return {DeleteCertificateResponse} Success
		 */
		DeleteCertificate(requestBody: DeleteCertificateMessage): Observable<DeleteCertificateResponse> {
			return this.http.post<DeleteCertificateResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the connection between a replication instance and an endpoint.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteConnection
		 * @return {DeleteConnectionResponse} Success
		 */
		DeleteConnection(requestBody: DeleteConnectionMessage): Observable<DeleteConnectionResponse> {
			return this.http.post<DeleteConnectionResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified data provider.</p> <note> <p>All migration projects associated with the data provider must be deleted or modified before you can delete the data provider.</p> </note>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteDataProvider
		 * @return {DeleteDataProviderResponse} Success
		 */
		DeleteDataProvider(requestBody: DeleteDataProviderMessage): Observable<DeleteDataProviderResponse> {
			return this.http.post<DeleteDataProviderResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteDataProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint
		 * @return {DeleteEndpointResponse} Success
		 */
		DeleteEndpoint(requestBody: DeleteEndpointMessage): Observable<DeleteEndpointResponse> {
			return this.http.post<DeleteEndpointResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an DMS event subscription.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription
		 * @return {DeleteEventSubscriptionResponse} Success
		 */
		DeleteEventSubscription(requestBody: DeleteEventSubscriptionMessage): Observable<DeleteEventSubscriptionResponse> {
			return this.http.post<DeleteEventSubscriptionResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified Fleet Advisor collector.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector
		 * @return {void} Success
		 */
		DeleteFleetAdvisorCollector(requestBody: DeleteCollectorRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified Fleet Advisor collector databases.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases
		 * @return {DeleteFleetAdvisorDatabasesResponse} Success
		 */
		DeleteFleetAdvisorDatabases(requestBody: DeleteFleetAdvisorDatabasesRequest): Observable<DeleteFleetAdvisorDatabasesResponse> {
			return this.http.post<DeleteFleetAdvisorDatabasesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified instance profile.</p> <note> <p>All migration projects associated with the instance profile must be deleted or modified before you can delete the instance profile.</p> </note>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteInstanceProfile
		 * @return {DeleteInstanceProfileResponse} Success
		 */
		DeleteInstanceProfile(requestBody: DeleteInstanceProfileMessage): Observable<DeleteInstanceProfileResponse> {
			return this.http.post<DeleteInstanceProfileResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteInstanceProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified migration project.</p> <note> <p>The migration project must be closed before you can delete it.</p> </note>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteMigrationProject
		 * @return {DeleteMigrationProjectResponse} Success
		 */
		DeleteMigrationProject(requestBody: DeleteMigrationProjectMessage): Observable<DeleteMigrationProjectResponse> {
			return this.http.post<DeleteMigrationProjectResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteMigrationProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an DMS Serverless replication configuration. This effectively deprovisions any and all replications that use this configuration. You can't delete the configuration for an DMS Serverless replication that is ongoing. You can delete the configuration when the replication is in a non-RUNNING and non-STARTING state.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteReplicationConfig
		 * @return {DeleteReplicationConfigResponse} Success
		 */
		DeleteReplicationConfig(requestBody: DeleteReplicationConfigMessage): Observable<DeleteReplicationConfigResponse> {
			return this.http.post<DeleteReplicationConfigResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance
		 * @return {DeleteReplicationInstanceResponse} Success
		 */
		DeleteReplicationInstance(requestBody: DeleteReplicationInstanceMessage): Observable<DeleteReplicationInstanceResponse> {
			return this.http.post<DeleteReplicationInstanceResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a subnet group.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup
		 * @return {DeleteReplicationSubnetGroupResponse} Success
		 */
		DeleteReplicationSubnetGroup(requestBody: DeleteReplicationSubnetGroupMessage): Observable<DeleteReplicationSubnetGroupResponse> {
			return this.http.post<DeleteReplicationSubnetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified replication task.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask
		 * @return {DeleteReplicationTaskResponse} Success
		 */
		DeleteReplicationTask(requestBody: DeleteReplicationTaskMessage): Observable<DeleteReplicationTaskResponse> {
			return this.http.post<DeleteReplicationTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the record of a single premigration assessment run.</p> <p>This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun
		 * @return {DeleteReplicationTaskAssessmentRunResponse} Success
		 */
		DeleteReplicationTaskAssessmentRun(requestBody: DeleteReplicationTaskAssessmentRunMessage): Observable<DeleteReplicationTaskAssessmentRunResponse> {
			return this.http.post<DeleteReplicationTaskAssessmentRunResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all of the DMS attributes for a customer account. These attributes include DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region.</p> <p>This command does not take any parameters.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes
		 * @return {DescribeAccountAttributesResponse} Success
		 */
		DescribeAccountAttributes(requestBody: DescribeAccountAttributesMessage): Observable<DescribeAccountAttributesResponse> {
			return this.http.post<DescribeAccountAttributesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters.</p> <p>If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run.</p> <p>To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task.</p> <p>If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeApplicableIndividualAssessmentsResponse} Success
		 */
		DescribeApplicableIndividualAssessments(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeApplicableIndividualAssessmentsMessage): Observable<DescribeApplicableIndividualAssessmentsResponse> {
			return this.http.post<DescribeApplicableIndividualAssessmentsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a description of the certificate.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeCertificates
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeCertificatesResponse} Success
		 */
		DescribeCertificates(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeCertificatesMessage): Observable<DescribeCertificatesResponse> {
			return this.http.post<DescribeCertificatesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeConnections
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeConnectionsResponse} Success
		 */
		DescribeConnections(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeConnectionsMessage): Observable<DescribeConnectionsResponse> {
			return this.http.post<DescribeConnectionsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeConnections?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns configuration parameters for a schema conversion project.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeConversionConfiguration
		 * @return {DescribeConversionConfigurationResponse} Success
		 */
		DescribeConversionConfiguration(requestBody: DescribeConversionConfigurationMessage): Observable<DescribeConversionConfigurationResponse> {
			return this.http.post<DescribeConversionConfigurationResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeConversionConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of data providers for your account in the current region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeDataProviders
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeDataProvidersResponse} Success
		 */
		DescribeDataProviders(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeDataProvidersMessage): Observable<DescribeDataProvidersResponse> {
			return this.http.post<DescribeDataProvidersResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeDataProviders?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEndpointSettingsResponse} Success
		 */
		DescribeEndpointSettings(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeEndpointSettingsMessage): Observable<DescribeEndpointSettingsResponse> {
			return this.http.post<DescribeEndpointSettingsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the type of endpoints available.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEndpointTypesResponse} Success
		 */
		DescribeEndpointTypes(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeEndpointTypesMessage): Observable<DescribeEndpointTypesResponse> {
			return this.http.post<DescribeEndpointTypesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the endpoints for your account in the current region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEndpointsResponse} Success
		 */
		DescribeEndpoints(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeEndpointsMessage): Observable<DescribeEndpointsResponse> {
			return this.http.post<DescribeEndpointsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the replication instance versions used in the project.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEngineVersions
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEngineVersionsResponse} Success
		 */
		DescribeEngineVersions(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeEngineVersionsMessage): Observable<DescribeEngineVersionsResponse> {
			return this.http.post<DescribeEngineVersionsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEngineVersions?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories
		 * @return {DescribeEventCategoriesResponse} Success
		 */
		DescribeEventCategories(requestBody: DescribeEventCategoriesMessage): Observable<DescribeEventCategoriesResponse> {
			return this.http.post<DescribeEventCategoriesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEventSubscriptionsResponse} Success
		 */
		DescribeEventSubscriptions(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeEventSubscriptionsMessage): Observable<DescribeEventSubscriptionsResponse> {
			return this.http.post<DescribeEventSubscriptionsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEvents
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEventsResponse} Success
		 */
		DescribeEvents(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeEventsMessage): Observable<DescribeEventsResponse> {
			return this.http.post<DescribeEventsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEvents?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of extension pack associations for the specified migration project. An extension pack is an add-on module that emulates functions present in a source database that are required when converting objects to the target database.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeExtensionPackAssociations
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeExtensionPackAssociationsResponse} Success
		 */
		DescribeExtensionPackAssociations(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeExtensionPackAssociationsMessage): Observable<DescribeExtensionPackAssociationsResponse> {
			return this.http.post<DescribeExtensionPackAssociationsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeExtensionPackAssociations?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the Fleet Advisor collectors in your account.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeFleetAdvisorCollectorsResponse} Success
		 */
		DescribeFleetAdvisorCollectors(MaxRecords: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeFleetAdvisorCollectorsRequest): Observable<DescribeFleetAdvisorCollectorsResponse> {
			return this.http.post<DescribeFleetAdvisorCollectorsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of Fleet Advisor databases in your account.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeFleetAdvisorDatabasesResponse} Success
		 */
		DescribeFleetAdvisorDatabases(MaxRecords: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeFleetAdvisorDatabasesRequest): Observable<DescribeFleetAdvisorDatabasesResponse> {
			return this.http.post<DescribeFleetAdvisorDatabasesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeFleetAdvisorLsaAnalysisResponse} Success
		 */
		DescribeFleetAdvisorLsaAnalysis(MaxRecords: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeFleetAdvisorLsaAnalysisRequest): Observable<DescribeFleetAdvisorLsaAnalysisResponse> {
			return this.http.post<DescribeFleetAdvisorLsaAnalysisResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides descriptions of the schemas discovered by your Fleet Advisor collectors.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeFleetAdvisorSchemaObjectSummaryResponse} Success
		 */
		DescribeFleetAdvisorSchemaObjectSummary(MaxRecords: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeFleetAdvisorSchemaObjectSummaryRequest): Observable<DescribeFleetAdvisorSchemaObjectSummaryResponse> {
			return this.http.post<DescribeFleetAdvisorSchemaObjectSummaryResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of schemas detected by Fleet Advisor Collectors in your account.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeFleetAdvisorSchemasResponse} Success
		 */
		DescribeFleetAdvisorSchemas(MaxRecords: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeFleetAdvisorSchemasRequest): Observable<DescribeFleetAdvisorSchemasResponse> {
			return this.http.post<DescribeFleetAdvisorSchemasResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of instance profiles for your account in the current region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeInstanceProfiles
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeInstanceProfilesResponse} Success
		 */
		DescribeInstanceProfiles(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeInstanceProfilesMessage): Observable<DescribeInstanceProfilesResponse> {
			return this.http.post<DescribeInstanceProfilesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeInstanceProfiles?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of metadata model assessments for your account in the current region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeMetadataModelAssessments
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeMetadataModelAssessmentsResponse} Success
		 */
		DescribeMetadataModelAssessments(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeMetadataModelAssessmentsMessage): Observable<DescribeMetadataModelAssessmentsResponse> {
			return this.http.post<DescribeMetadataModelAssessmentsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeMetadataModelAssessments?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of metadata model conversions for a migration project.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeMetadataModelConversions
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeMetadataModelConversionsResponse} Success
		 */
		DescribeMetadataModelConversions(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeMetadataModelConversionsMessage): Observable<DescribeMetadataModelConversionsResponse> {
			return this.http.post<DescribeMetadataModelConversionsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeMetadataModelConversions?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of metadata model exports.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeMetadataModelExportsAsScript
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeMetadataModelExportsAsScriptResponse} Success
		 */
		DescribeMetadataModelExportsAsScript(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeMetadataModelExportsAsScriptMessage): Observable<DescribeMetadataModelExportsAsScriptResponse> {
			return this.http.post<DescribeMetadataModelExportsAsScriptResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeMetadataModelExportsAsScript?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of metadata model exports.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeMetadataModelExportsToTarget
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeMetadataModelExportsToTargetResponse} Success
		 */
		DescribeMetadataModelExportsToTarget(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeMetadataModelExportsToTargetMessage): Observable<DescribeMetadataModelExportsToTargetResponse> {
			return this.http.post<DescribeMetadataModelExportsToTargetResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeMetadataModelExportsToTarget?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of metadata model imports.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeMetadataModelImports
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeMetadataModelImportsResponse} Success
		 */
		DescribeMetadataModelImports(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeMetadataModelImportsMessage): Observable<DescribeMetadataModelImportsResponse> {
			return this.http.post<DescribeMetadataModelImportsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeMetadataModelImports?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of migration projects for your account in the current region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeMigrationProjects
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeMigrationProjectsResponse} Success
		 */
		DescribeMigrationProjects(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeMigrationProjectsMessage): Observable<DescribeMigrationProjectsResponse> {
			return this.http.post<DescribeMigrationProjectsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeMigrationProjects?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the replication instance types that can be created in the specified region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeOrderableReplicationInstancesResponse} Success
		 */
		DescribeOrderableReplicationInstances(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeOrderableReplicationInstancesMessage): Observable<DescribeOrderableReplicationInstancesResponse> {
			return this.http.post<DescribeOrderableReplicationInstancesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For internal use only
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribePendingMaintenanceActionsResponse} Success
		 */
		DescribePendingMaintenanceActions(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribePendingMaintenanceActionsMessage): Observable<DescribePendingMaintenanceActionsResponse> {
			return this.http.post<DescribePendingMaintenanceActionsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of limitations for recommendations of target Amazon Web Services engines.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeRecommendationLimitationsResponse} Success
		 */
		DescribeRecommendationLimitations(MaxRecords: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeRecommendationLimitationsRequest): Observable<DescribeRecommendationLimitationsResponse> {
			return this.http.post<DescribeRecommendationLimitationsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of target engine recommendations for your source databases.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeRecommendationsResponse} Success
		 */
		DescribeRecommendations(MaxRecords: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeRecommendationsRequest): Observable<DescribeRecommendationsResponse> {
			return this.http.post<DescribeRecommendationsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the status of the RefreshSchemas operation.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus
		 * @return {DescribeRefreshSchemasStatusResponse} Success
		 */
		DescribeRefreshSchemasStatus(requestBody: DescribeRefreshSchemasStatusMessage): Observable<DescribeRefreshSchemasStatusResponse> {
			return this.http.post<DescribeRefreshSchemasStatusResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns one or more existing DMS Serverless replication configurations as a list of structures.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationConfigs
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationConfigsResponse} Success
		 */
		DescribeReplicationConfigs(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationConfigsMessage): Observable<DescribeReplicationConfigsResponse> {
			return this.http.post<DescribeReplicationConfigsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationConfigs?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the task logs for the specified task.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationInstanceTaskLogsResponse} Success
		 */
		DescribeReplicationInstanceTaskLogs(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationInstanceTaskLogsMessage): Observable<DescribeReplicationInstanceTaskLogsResponse> {
			return this.http.post<DescribeReplicationInstanceTaskLogsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about replication instances for your account in the current region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationInstancesResponse} Success
		 */
		DescribeReplicationInstances(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationInstancesMessage): Observable<DescribeReplicationInstancesResponse> {
			return this.http.post<DescribeReplicationInstancesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the replication subnet groups.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationSubnetGroupsResponse} Success
		 */
		DescribeReplicationSubnetGroups(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationSubnetGroupsMessage): Observable<DescribeReplicationSubnetGroupsResponse> {
			return this.http.post<DescribeReplicationSubnetGroupsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns table and schema statistics for one or more provisioned replications that use a given DMS Serverless replication configuration.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTableStatistics
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationTableStatisticsResponse} Success
		 */
		DescribeReplicationTableStatistics(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationTableStatisticsMessage): Observable<DescribeReplicationTableStatisticsResponse> {
			return this.http.post<DescribeReplicationTableStatisticsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTableStatistics?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results.</p> <p>For more information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationTaskAssessmentResultsResponse} Success
		 */
		DescribeReplicationTaskAssessmentResults(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationTaskAssessmentResultsMessage): Observable<DescribeReplicationTaskAssessmentResultsResponse> {
			return this.http.post<DescribeReplicationTaskAssessmentResultsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a paginated list of premigration assessment runs based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.</p> <note> <p>This operation doesn't return information about individual assessments. For this information, see the <code>DescribeReplicationTaskIndividualAssessments</code> operation. </p> </note>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationTaskAssessmentRunsResponse} Success
		 */
		DescribeReplicationTaskAssessmentRuns(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationTaskAssessmentRunsMessage): Observable<DescribeReplicationTaskAssessmentRunsResponse> {
			return this.http.post<DescribeReplicationTaskAssessmentRunsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a paginated list of individual assessments based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationTaskIndividualAssessmentsResponse} Success
		 */
		DescribeReplicationTaskIndividualAssessments(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationTaskIndividualAssessmentsMessage): Observable<DescribeReplicationTaskIndividualAssessmentsResponse> {
			return this.http.post<DescribeReplicationTaskIndividualAssessmentsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about replication tasks for your account in the current region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationTasksResponse} Success
		 */
		DescribeReplicationTasks(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationTasksMessage): Observable<DescribeReplicationTasksResponse> {
			return this.http.post<DescribeReplicationTasksResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details on replication progress by returning status information for one or more provisioned DMS Serverless replications.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplications
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationsResponse} Success
		 */
		DescribeReplications(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationsMessage): Observable<DescribeReplicationsResponse> {
			return this.http.post<DescribeReplicationsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplications?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the schema for the specified endpoint.</p> <p/>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeSchemas
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeSchemasResponse} Success
		 */
		DescribeSchemas(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeSchemasMessage): Observable<DescribeSchemasResponse> {
			return this.http.post<DescribeSchemasResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeTableStatisticsResponse} Success
		 */
		DescribeTableStatistics(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeTableStatisticsMessage): Observable<DescribeTableStatisticsResponse> {
			return this.http.post<DescribeTableStatisticsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Saves a copy of a database migration assessment report to your Amazon S3 bucket. DMS can save your assessment report as a comma-separated value (CSV) or a PDF file.
		 * Post #X-Amz-Target=AmazonDMSv20160101.ExportMetadataModelAssessment
		 * @return {ExportMetadataModelAssessmentResponse} Success
		 */
		ExportMetadataModelAssessment(requestBody: ExportMetadataModelAssessmentMessage): Observable<ExportMetadataModelAssessmentResponse> {
			return this.http.post<ExportMetadataModelAssessmentResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ExportMetadataModelAssessment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Uploads the specified certificate.
		 * Post #X-Amz-Target=AmazonDMSv20160101.ImportCertificate
		 * @return {ImportCertificateResponse} Success
		 */
		ImportCertificate(requestBody: ImportCertificateMessage): Observable<ImportCertificateResponse> {
			return this.http.post<ImportCertificateResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ImportCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all metadata tags attached to an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
		 * Post #X-Amz-Target=AmazonDMSv20160101.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceMessage): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the specified schema conversion configuration using the provided parameters.
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyConversionConfiguration
		 * @return {ModifyConversionConfigurationResponse} Success
		 */
		ModifyConversionConfiguration(requestBody: ModifyConversionConfigurationMessage): Observable<ModifyConversionConfigurationResponse> {
			return this.http.post<ModifyConversionConfigurationResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyConversionConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the specified data provider using the provided settings.</p> <note> <p>You must remove the data provider from all migration projects before you can modify it.</p> </note>
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyDataProvider
		 * @return {ModifyDataProviderResponse} Success
		 */
		ModifyDataProvider(requestBody: ModifyDataProviderMessage): Observable<ModifyDataProviderResponse> {
			return this.http.post<ModifyDataProviderResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyDataProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the specified endpoint.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>ModifyEndpoint</code> API call. Specifying <code>DatabaseName</code> when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint
		 * @return {ModifyEndpointResponse} Success
		 */
		ModifyEndpoint(requestBody: ModifyEndpointMessage): Observable<ModifyEndpointResponse> {
			return this.http.post<ModifyEndpointResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies an existing DMS event notification subscription.
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription
		 * @return {ModifyEventSubscriptionResponse} Success
		 */
		ModifyEventSubscription(requestBody: ModifyEventSubscriptionMessage): Observable<ModifyEventSubscriptionResponse> {
			return this.http.post<ModifyEventSubscriptionResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the specified instance profile using the provided parameters.</p> <note> <p>All migration projects associated with the instance profile must be deleted or modified before you can modify the instance profile.</p> </note>
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyInstanceProfile
		 * @return {ModifyInstanceProfileResponse} Success
		 */
		ModifyInstanceProfile(requestBody: ModifyInstanceProfileMessage): Observable<ModifyInstanceProfileResponse> {
			return this.http.post<ModifyInstanceProfileResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyInstanceProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the specified migration project using the provided parameters.</p> <note> <p>The migration project must be closed before you can modify it.</p> </note>
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyMigrationProject
		 * @return {ModifyMigrationProjectResponse} Success
		 */
		ModifyMigrationProject(requestBody: ModifyMigrationProjectMessage): Observable<ModifyMigrationProjectResponse> {
			return this.http.post<ModifyMigrationProjectResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyMigrationProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies an existing DMS Serverless replication configuration that you can use to start a replication. This command includes input validation and logic to check the state of any replication that uses this configuration. You can only modify a replication configuration before any replication that uses it has started. As soon as you have initially started a replication with a given configuiration, you can't modify that configuration, even if you stop it.</p> <p>Other run statuses that allow you to run this command include FAILED and CREATED. A provisioning state that allows you to run this command is FAILED_PROVISION.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyReplicationConfig
		 * @return {ModifyReplicationConfigResponse} Success
		 */
		ModifyReplicationConfig(requestBody: ModifyReplicationConfigMessage): Observable<ModifyReplicationConfigResponse> {
			return this.http.post<ModifyReplicationConfigResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance
		 * @return {ModifyReplicationInstanceResponse} Success
		 */
		ModifyReplicationInstance(requestBody: ModifyReplicationInstanceMessage): Observable<ModifyReplicationInstanceResponse> {
			return this.http.post<ModifyReplicationInstanceResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the settings for the specified replication subnet group.
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup
		 * @return {ModifyReplicationSubnetGroupResponse} Success
		 */
		ModifyReplicationSubnetGroup(requestBody: ModifyReplicationSubnetGroupMessage): Observable<ModifyReplicationSubnetGroupResponse> {
			return this.http.post<ModifyReplicationSubnetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the specified replication task.</p> <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the <i>Database Migration Service User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask
		 * @return {ModifyReplicationTaskResponse} Success
		 */
		ModifyReplicationTask(requestBody: ModifyReplicationTaskMessage): Observable<ModifyReplicationTaskResponse> {
			return this.http.post<ModifyReplicationTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.
		 * Post #X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask
		 * @return {MoveReplicationTaskResponse} Success
		 */
		MoveReplicationTask(requestBody: MoveReplicationTaskMessage): Observable<MoveReplicationTaskResponse> {
			return this.http.post<MoveReplicationTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.
		 * Post #X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance
		 * @return {RebootReplicationInstanceResponse} Success
		 */
		RebootReplicationInstance(requestBody: RebootReplicationInstanceMessage): Observable<RebootReplicationInstanceResponse> {
			return this.http.post<RebootReplicationInstanceResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.
		 * Post #X-Amz-Target=AmazonDMSv20160101.RefreshSchemas
		 * @return {RefreshSchemasResponse} Success
		 */
		RefreshSchemas(requestBody: RefreshSchemasMessage): Observable<RefreshSchemasResponse> {
			return this.http.post<RefreshSchemasResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Reloads the target database table with the source data for a given DMS Serverless replication configuration.</p> <p>You can only use this operation with a task in the RUNNING state, otherwise the service will throw an <code>InvalidResourceStateFault</code> exception.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.ReloadReplicationTables
		 * @return {ReloadReplicationTablesResponse} Success
		 */
		ReloadReplicationTables(requestBody: ReloadReplicationTablesMessage): Observable<ReloadReplicationTablesResponse> {
			return this.http.post<ReloadReplicationTablesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ReloadReplicationTables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Reloads the target database table with the source data. </p> <p>You can only use this operation with a task in the <code>RUNNING</code> state, otherwise the service will throw an <code>InvalidResourceStateFault</code> exception.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.ReloadTables
		 * @return {ReloadTablesResponse} Success
		 */
		ReloadTables(requestBody: ReloadTablesMessage): Observable<ReloadTablesResponse> {
			return this.http.post<ReloadTablesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ReloadTables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes metadata tags from an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
		 * Post #X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceResponse} Success
		 */
		RemoveTagsFromResource(requestBody: RemoveTagsFromResourceMessage): Observable<RemoveTagsFromResourceResponse> {
			return this.http.post<RemoveTagsFromResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.
		 * Post #X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis
		 * @return {RunFleetAdvisorLsaAnalysisResponse} Success
		 */
		RunFleetAdvisorLsaAnalysis(): Observable<RunFleetAdvisorLsaAnalysisResponse> {
			return this.http.post<RunFleetAdvisorLsaAnalysisResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis', null, {});
		}

		/**
		 * Applies the extension pack to your target database. An extension pack is an add-on module that emulates functions present in a source database that are required when converting objects to the target database.
		 * Post #X-Amz-Target=AmazonDMSv20160101.StartExtensionPackAssociation
		 * @return {StartExtensionPackAssociationResponse} Success
		 */
		StartExtensionPackAssociation(requestBody: StartExtensionPackAssociationMessage): Observable<StartExtensionPackAssociationResponse> {
			return this.http.post<StartExtensionPackAssociationResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StartExtensionPackAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a database migration assessment report by assessing the migration complexity for your source database. A database migration assessment report summarizes all of the schema conversion tasks. It also details the action items for database objects that can't be converted to the database engine of your target database instance.
		 * Post #X-Amz-Target=AmazonDMSv20160101.StartMetadataModelAssessment
		 * @return {StartMetadataModelAssessmentResponse} Success
		 */
		StartMetadataModelAssessment(requestBody: StartMetadataModelAssessmentMessage): Observable<StartMetadataModelAssessmentResponse> {
			return this.http.post<StartMetadataModelAssessmentResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StartMetadataModelAssessment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Converts your source database objects to a format compatible with the target database.
		 * Post #X-Amz-Target=AmazonDMSv20160101.StartMetadataModelConversion
		 * @return {StartMetadataModelConversionResponse} Success
		 */
		StartMetadataModelConversion(requestBody: StartMetadataModelConversionMessage): Observable<StartMetadataModelConversionResponse> {
			return this.http.post<StartMetadataModelConversionResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StartMetadataModelConversion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Saves your converted code to a file as a SQL script, and stores this file on your Amazon S3 bucket.
		 * Post #X-Amz-Target=AmazonDMSv20160101.StartMetadataModelExportAsScript
		 * @return {StartMetadataModelExportAsScriptResponse} Success
		 */
		StartMetadataModelExportAsScript(requestBody: StartMetadataModelExportAsScriptMessage): Observable<StartMetadataModelExportAsScriptResponse> {
			return this.http.post<StartMetadataModelExportAsScriptResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StartMetadataModelExportAsScript', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies converted database objects to your target database.
		 * Post #X-Amz-Target=AmazonDMSv20160101.StartMetadataModelExportToTarget
		 * @return {StartMetadataModelExportToTargetResponse} Success
		 */
		StartMetadataModelExportToTarget(requestBody: StartMetadataModelExportToTargetMessage): Observable<StartMetadataModelExportToTargetResponse> {
			return this.http.post<StartMetadataModelExportToTargetResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StartMetadataModelExportToTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Loads the metadata for all the dependent database objects of the parent object.</p> <p>This operation uses your project's Amazon S3 bucket as a metadata cache to improve performance.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.StartMetadataModelImport
		 * @return {StartMetadataModelImportResponse} Success
		 */
		StartMetadataModelImport(requestBody: StartMetadataModelImportMessage): Observable<StartMetadataModelImportResponse> {
			return this.http.post<StartMetadataModelImportResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StartMetadataModelImport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the analysis of your source database to provide recommendations of target engines.</p> <p>You can create recommendations for multiple source databases using <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_BatchStartRecommendations.html">BatchStartRecommendations</a>.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.StartRecommendations
		 * @return {void} Success
		 */
		StartRecommendations(requestBody: StartRecommendationsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StartRecommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * For a given DMS Serverless replication configuration, DMS connects to the source endpoint and collects the metadata to analyze the replication workload. Using this metadata, DMS then computes and provisions the required capacity and starts replicating to the target endpoint using the server resources that DMS has provisioned for the DMS Serverless replication.
		 * Post #X-Amz-Target=AmazonDMSv20160101.StartReplication
		 * @return {StartReplicationResponse} Success
		 */
		StartReplication(requestBody: StartReplicationMessage): Observable<StartReplicationResponse> {
			return this.http.post<StartReplicationResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StartReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the replication task.</p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the <i>Database Migration Service User Guide.</i> </p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.StartReplicationTask
		 * @return {StartReplicationTaskResponse} Success
		 */
		StartReplicationTask(requestBody: StartReplicationTaskMessage): Observable<StartReplicationTaskResponse> {
			return this.http.post<StartReplicationTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Starts the replication task assessment for unsupported data types in the source database. </p> <p>You can only use this operation for a task if the following conditions are true:</p> <ul> <li> <p>The task must be in the <code>stopped</code> state.</p> </li> <li> <p>The task must have successful connections to the source and target.</p> </li> </ul> <p>If either of these conditions are not met, an <code>InvalidResourceStateFault</code> error will result. </p> <p>For information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment
		 * @return {StartReplicationTaskAssessmentResponse} Success
		 */
		StartReplicationTaskAssessment(requestBody: StartReplicationTaskAssessmentMessage): Observable<StartReplicationTaskAssessmentResponse> {
			return this.http.post<StartReplicationTaskAssessmentResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a new premigration assessment run for one or more individual assessments of a migration task.</p> <p>The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun
		 * @return {StartReplicationTaskAssessmentRunResponse} Success
		 */
		StartReplicationTaskAssessmentRun(requestBody: StartReplicationTaskAssessmentRunMessage): Observable<StartReplicationTaskAssessmentRunResponse> {
			return this.http.post<StartReplicationTaskAssessmentRunResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For a given DMS Serverless replication configuration, DMS stops any and all ongoing DMS Serverless replications. This command doesn't deprovision the stopped replications.
		 * Post #X-Amz-Target=AmazonDMSv20160101.StopReplication
		 * @return {StopReplicationResponse} Success
		 */
		StopReplication(requestBody: StopReplicationMessage): Observable<StopReplicationResponse> {
			return this.http.post<StopReplicationResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StopReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the replication task.
		 * Post #X-Amz-Target=AmazonDMSv20160101.StopReplicationTask
		 * @return {StopReplicationTaskResponse} Success
		 */
		StopReplicationTask(requestBody: StopReplicationTaskMessage): Observable<StopReplicationTaskResponse> {
			return this.http.post<StopReplicationTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests the connection between the replication instance and the endpoint.
		 * Post #X-Amz-Target=AmazonDMSv20160101.TestConnection
		 * @return {TestConnectionResponse} Success
		 */
		TestConnection(requestBody: TestConnectionMessage): Observable<TestConnectionResponse> {
			return this.http.post<TestConnectionResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.TestConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.6 or higher. If any replication instances are from versions earlier than 3.4.6, the operation raises an error and tells you to upgrade these instances to version 3.4.6 or higher. To enable migration regardless of version, set the <code>Force</code> option to true. However, if you don't upgrade instances earlier than version 3.4.6, some types of events might not be available when you use Amazon EventBridge.</p> <p>To call this operation, make sure that you have certain permissions added to your user account. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html#CHAP_Events-migrate-to-eventbridge">Migrating event subscriptions to Amazon EventBridge</a> in the <i>Amazon Web Services Database Migration Service User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge
		 * @return {UpdateSubscriptionsToEventBridgeResponse} Success
		 */
		UpdateSubscriptionsToEventBridge(requestBody: UpdateSubscriptionsToEventBridgeMessage): Observable<UpdateSubscriptionsToEventBridgeResponse> {
			return this.http.post<UpdateSubscriptionsToEventBridgeResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddTagsToResourceX_Amz_Target { 'AmazonDMSv20160101.AddTagsToResource' = 0 }

	export enum ApplyPendingMaintenanceActionX_Amz_Target { 'AmazonDMSv20160101.ApplyPendingMaintenanceAction' = 0 }

	export enum BatchStartRecommendationsX_Amz_Target { 'AmazonDMSv20160101.BatchStartRecommendations' = 0 }

	export enum CancelReplicationTaskAssessmentRunX_Amz_Target { 'AmazonDMSv20160101.CancelReplicationTaskAssessmentRun' = 0 }

	export enum CreateDataProviderX_Amz_Target { 'AmazonDMSv20160101.CreateDataProvider' = 0 }

	export enum CreateEndpointX_Amz_Target { 'AmazonDMSv20160101.CreateEndpoint' = 0 }

	export enum CreateEventSubscriptionX_Amz_Target { 'AmazonDMSv20160101.CreateEventSubscription' = 0 }

	export enum CreateFleetAdvisorCollectorX_Amz_Target { 'AmazonDMSv20160101.CreateFleetAdvisorCollector' = 0 }

	export enum CreateInstanceProfileX_Amz_Target { 'AmazonDMSv20160101.CreateInstanceProfile' = 0 }

	export enum CreateMigrationProjectX_Amz_Target { 'AmazonDMSv20160101.CreateMigrationProject' = 0 }

	export enum CreateReplicationConfigX_Amz_Target { 'AmazonDMSv20160101.CreateReplicationConfig' = 0 }

	export enum CreateReplicationInstanceX_Amz_Target { 'AmazonDMSv20160101.CreateReplicationInstance' = 0 }

	export enum CreateReplicationSubnetGroupX_Amz_Target { 'AmazonDMSv20160101.CreateReplicationSubnetGroup' = 0 }

	export enum CreateReplicationTaskX_Amz_Target { 'AmazonDMSv20160101.CreateReplicationTask' = 0 }

	export enum DeleteCertificateX_Amz_Target { 'AmazonDMSv20160101.DeleteCertificate' = 0 }

	export enum DeleteConnectionX_Amz_Target { 'AmazonDMSv20160101.DeleteConnection' = 0 }

	export enum DeleteDataProviderX_Amz_Target { 'AmazonDMSv20160101.DeleteDataProvider' = 0 }

	export enum DeleteEndpointX_Amz_Target { 'AmazonDMSv20160101.DeleteEndpoint' = 0 }

	export enum DeleteEventSubscriptionX_Amz_Target { 'AmazonDMSv20160101.DeleteEventSubscription' = 0 }

	export enum DeleteFleetAdvisorCollectorX_Amz_Target { 'AmazonDMSv20160101.DeleteFleetAdvisorCollector' = 0 }

	export enum DeleteFleetAdvisorDatabasesX_Amz_Target { 'AmazonDMSv20160101.DeleteFleetAdvisorDatabases' = 0 }

	export enum DeleteInstanceProfileX_Amz_Target { 'AmazonDMSv20160101.DeleteInstanceProfile' = 0 }

	export enum DeleteMigrationProjectX_Amz_Target { 'AmazonDMSv20160101.DeleteMigrationProject' = 0 }

	export enum DeleteReplicationConfigX_Amz_Target { 'AmazonDMSv20160101.DeleteReplicationConfig' = 0 }

	export enum DeleteReplicationInstanceX_Amz_Target { 'AmazonDMSv20160101.DeleteReplicationInstance' = 0 }

	export enum DeleteReplicationSubnetGroupX_Amz_Target { 'AmazonDMSv20160101.DeleteReplicationSubnetGroup' = 0 }

	export enum DeleteReplicationTaskX_Amz_Target { 'AmazonDMSv20160101.DeleteReplicationTask' = 0 }

	export enum DeleteReplicationTaskAssessmentRunX_Amz_Target { 'AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun' = 0 }

	export enum DescribeAccountAttributesX_Amz_Target { 'AmazonDMSv20160101.DescribeAccountAttributes' = 0 }

	export enum DescribeApplicableIndividualAssessmentsX_Amz_Target { 'AmazonDMSv20160101.DescribeApplicableIndividualAssessments' = 0 }

	export enum DescribeCertificatesX_Amz_Target { 'AmazonDMSv20160101.DescribeCertificates' = 0 }

	export enum DescribeConnectionsX_Amz_Target { 'AmazonDMSv20160101.DescribeConnections' = 0 }

	export enum DescribeConversionConfigurationX_Amz_Target { 'AmazonDMSv20160101.DescribeConversionConfiguration' = 0 }

	export enum DescribeDataProvidersX_Amz_Target { 'AmazonDMSv20160101.DescribeDataProviders' = 0 }

	export enum DescribeEndpointSettingsX_Amz_Target { 'AmazonDMSv20160101.DescribeEndpointSettings' = 0 }

	export enum DescribeEndpointTypesX_Amz_Target { 'AmazonDMSv20160101.DescribeEndpointTypes' = 0 }

	export enum DescribeEndpointsX_Amz_Target { 'AmazonDMSv20160101.DescribeEndpoints' = 0 }

	export enum DescribeEngineVersionsX_Amz_Target { 'AmazonDMSv20160101.DescribeEngineVersions' = 0 }

	export enum DescribeEventCategoriesX_Amz_Target { 'AmazonDMSv20160101.DescribeEventCategories' = 0 }

	export enum DescribeEventSubscriptionsX_Amz_Target { 'AmazonDMSv20160101.DescribeEventSubscriptions' = 0 }

	export enum DescribeEventsX_Amz_Target { 'AmazonDMSv20160101.DescribeEvents' = 0 }

	export enum DescribeExtensionPackAssociationsX_Amz_Target { 'AmazonDMSv20160101.DescribeExtensionPackAssociations' = 0 }

	export enum DescribeFleetAdvisorCollectorsX_Amz_Target { 'AmazonDMSv20160101.DescribeFleetAdvisorCollectors' = 0 }

	export enum DescribeFleetAdvisorDatabasesX_Amz_Target { 'AmazonDMSv20160101.DescribeFleetAdvisorDatabases' = 0 }

	export enum DescribeFleetAdvisorLsaAnalysisX_Amz_Target { 'AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis' = 0 }

	export enum DescribeFleetAdvisorSchemaObjectSummaryX_Amz_Target { 'AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary' = 0 }

	export enum DescribeFleetAdvisorSchemasX_Amz_Target { 'AmazonDMSv20160101.DescribeFleetAdvisorSchemas' = 0 }

	export enum DescribeInstanceProfilesX_Amz_Target { 'AmazonDMSv20160101.DescribeInstanceProfiles' = 0 }

	export enum DescribeMetadataModelAssessmentsX_Amz_Target { 'AmazonDMSv20160101.DescribeMetadataModelAssessments' = 0 }

	export enum DescribeMetadataModelConversionsX_Amz_Target { 'AmazonDMSv20160101.DescribeMetadataModelConversions' = 0 }

	export enum DescribeMetadataModelExportsAsScriptX_Amz_Target { 'AmazonDMSv20160101.DescribeMetadataModelExportsAsScript' = 0 }

	export enum DescribeMetadataModelExportsToTargetX_Amz_Target { 'AmazonDMSv20160101.DescribeMetadataModelExportsToTarget' = 0 }

	export enum DescribeMetadataModelImportsX_Amz_Target { 'AmazonDMSv20160101.DescribeMetadataModelImports' = 0 }

	export enum DescribeMigrationProjectsX_Amz_Target { 'AmazonDMSv20160101.DescribeMigrationProjects' = 0 }

	export enum DescribeOrderableReplicationInstancesX_Amz_Target { 'AmazonDMSv20160101.DescribeOrderableReplicationInstances' = 0 }

	export enum DescribePendingMaintenanceActionsX_Amz_Target { 'AmazonDMSv20160101.DescribePendingMaintenanceActions' = 0 }

	export enum DescribeRecommendationLimitationsX_Amz_Target { 'AmazonDMSv20160101.DescribeRecommendationLimitations' = 0 }

	export enum DescribeRecommendationsX_Amz_Target { 'AmazonDMSv20160101.DescribeRecommendations' = 0 }

	export enum DescribeRefreshSchemasStatusX_Amz_Target { 'AmazonDMSv20160101.DescribeRefreshSchemasStatus' = 0 }

	export enum DescribeReplicationConfigsX_Amz_Target { 'AmazonDMSv20160101.DescribeReplicationConfigs' = 0 }

	export enum DescribeReplicationInstanceTaskLogsX_Amz_Target { 'AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs' = 0 }

	export enum DescribeReplicationInstancesX_Amz_Target { 'AmazonDMSv20160101.DescribeReplicationInstances' = 0 }

	export enum DescribeReplicationSubnetGroupsX_Amz_Target { 'AmazonDMSv20160101.DescribeReplicationSubnetGroups' = 0 }

	export enum DescribeReplicationTableStatisticsX_Amz_Target { 'AmazonDMSv20160101.DescribeReplicationTableStatistics' = 0 }

	export enum DescribeReplicationTaskAssessmentResultsX_Amz_Target { 'AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults' = 0 }

	export enum DescribeReplicationTaskAssessmentRunsX_Amz_Target { 'AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns' = 0 }

	export enum DescribeReplicationTaskIndividualAssessmentsX_Amz_Target { 'AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments' = 0 }

	export enum DescribeReplicationTasksX_Amz_Target { 'AmazonDMSv20160101.DescribeReplicationTasks' = 0 }

	export enum DescribeReplicationsX_Amz_Target { 'AmazonDMSv20160101.DescribeReplications' = 0 }

	export enum DescribeSchemasX_Amz_Target { 'AmazonDMSv20160101.DescribeSchemas' = 0 }

	export enum DescribeTableStatisticsX_Amz_Target { 'AmazonDMSv20160101.DescribeTableStatistics' = 0 }

	export enum ExportMetadataModelAssessmentX_Amz_Target { 'AmazonDMSv20160101.ExportMetadataModelAssessment' = 0 }

	export enum ImportCertificateX_Amz_Target { 'AmazonDMSv20160101.ImportCertificate' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AmazonDMSv20160101.ListTagsForResource' = 0 }

	export enum ModifyConversionConfigurationX_Amz_Target { 'AmazonDMSv20160101.ModifyConversionConfiguration' = 0 }

	export enum ModifyDataProviderX_Amz_Target { 'AmazonDMSv20160101.ModifyDataProvider' = 0 }

	export enum ModifyEndpointX_Amz_Target { 'AmazonDMSv20160101.ModifyEndpoint' = 0 }

	export enum ModifyEventSubscriptionX_Amz_Target { 'AmazonDMSv20160101.ModifyEventSubscription' = 0 }

	export enum ModifyInstanceProfileX_Amz_Target { 'AmazonDMSv20160101.ModifyInstanceProfile' = 0 }

	export enum ModifyMigrationProjectX_Amz_Target { 'AmazonDMSv20160101.ModifyMigrationProject' = 0 }

	export enum ModifyReplicationConfigX_Amz_Target { 'AmazonDMSv20160101.ModifyReplicationConfig' = 0 }

	export enum ModifyReplicationInstanceX_Amz_Target { 'AmazonDMSv20160101.ModifyReplicationInstance' = 0 }

	export enum ModifyReplicationSubnetGroupX_Amz_Target { 'AmazonDMSv20160101.ModifyReplicationSubnetGroup' = 0 }

	export enum ModifyReplicationTaskX_Amz_Target { 'AmazonDMSv20160101.ModifyReplicationTask' = 0 }

	export enum MoveReplicationTaskX_Amz_Target { 'AmazonDMSv20160101.MoveReplicationTask' = 0 }

	export enum RebootReplicationInstanceX_Amz_Target { 'AmazonDMSv20160101.RebootReplicationInstance' = 0 }

	export enum RefreshSchemasX_Amz_Target { 'AmazonDMSv20160101.RefreshSchemas' = 0 }

	export enum ReloadReplicationTablesX_Amz_Target { 'AmazonDMSv20160101.ReloadReplicationTables' = 0 }

	export enum ReloadTablesX_Amz_Target { 'AmazonDMSv20160101.ReloadTables' = 0 }

	export enum RemoveTagsFromResourceX_Amz_Target { 'AmazonDMSv20160101.RemoveTagsFromResource' = 0 }

	export enum RunFleetAdvisorLsaAnalysisX_Amz_Target { 'AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis' = 0 }

	export enum StartExtensionPackAssociationX_Amz_Target { 'AmazonDMSv20160101.StartExtensionPackAssociation' = 0 }

	export enum StartMetadataModelAssessmentX_Amz_Target { 'AmazonDMSv20160101.StartMetadataModelAssessment' = 0 }

	export enum StartMetadataModelConversionX_Amz_Target { 'AmazonDMSv20160101.StartMetadataModelConversion' = 0 }

	export enum StartMetadataModelExportAsScriptX_Amz_Target { 'AmazonDMSv20160101.StartMetadataModelExportAsScript' = 0 }

	export enum StartMetadataModelExportToTargetX_Amz_Target { 'AmazonDMSv20160101.StartMetadataModelExportToTarget' = 0 }

	export enum StartMetadataModelImportX_Amz_Target { 'AmazonDMSv20160101.StartMetadataModelImport' = 0 }

	export enum StartRecommendationsX_Amz_Target { 'AmazonDMSv20160101.StartRecommendations' = 0 }

	export enum StartReplicationX_Amz_Target { 'AmazonDMSv20160101.StartReplication' = 0 }

	export enum StartReplicationTaskX_Amz_Target { 'AmazonDMSv20160101.StartReplicationTask' = 0 }

	export enum StartReplicationTaskAssessmentX_Amz_Target { 'AmazonDMSv20160101.StartReplicationTaskAssessment' = 0 }

	export enum StartReplicationTaskAssessmentRunX_Amz_Target { 'AmazonDMSv20160101.StartReplicationTaskAssessmentRun' = 0 }

	export enum StopReplicationX_Amz_Target { 'AmazonDMSv20160101.StopReplication' = 0 }

	export enum StopReplicationTaskX_Amz_Target { 'AmazonDMSv20160101.StopReplicationTask' = 0 }

	export enum TestConnectionX_Amz_Target { 'AmazonDMSv20160101.TestConnection' = 0 }

	export enum UpdateSubscriptionsToEventBridgeX_Amz_Target { 'AmazonDMSv20160101.UpdateSubscriptionsToEventBridge' = 0 }

}

