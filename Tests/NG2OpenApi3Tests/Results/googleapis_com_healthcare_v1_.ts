import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Activates the latest revision of the specified Consent by committing a new revision with `state` updated to `ACTIVE`. If the latest revision of the given Consent is in the `ACTIVE` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the given consent is in the `REJECTED` or `REVOKED` state. */
	export interface ActivateConsentRequest {

		/** Required. The resource name of the Consent artifact that contains documentation of the user's consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. If the draft Consent had a Consent artifact, this Consent artifact overwrites it. */
		consentArtifact?: string | null;

		/** Timestamp in UTC of when this Consent is considered expired. */
		expireTime?: string | null;

		/** The time to live for this Consent from when it is marked as active. */
		ttl?: string | null;
	}

	/** Activates the latest revision of the specified Consent by committing a new revision with `state` updated to `ACTIVE`. If the latest revision of the given Consent is in the `ACTIVE` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the given consent is in the `REJECTED` or `REVOKED` state. */
	export interface ActivateConsentRequestFormProperties {

		/** Required. The resource name of the Consent artifact that contains documentation of the user's consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. If the draft Consent had a Consent artifact, this Consent artifact overwrites it. */
		consentArtifact: FormControl<string | null | undefined>,

		/** Timestamp in UTC of when this Consent is considered expired. */
		expireTime: FormControl<string | null | undefined>,

		/** The time to live for this Consent from when it is marked as active. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateActivateConsentRequestFormGroup() {
		return new FormGroup<ActivateConsentRequestFormProperties>({
			consentArtifact: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to analyze healthcare entities in a document. */
	export interface AnalyzeEntitiesRequest {

		/** Optional. Alternative output format to be generated based on the results of analysis. */
		alternativeOutputFormat?: AnalyzeEntitiesRequestAlternativeOutputFormat | null;

		/** document_content is a document to be annotated. */
		documentContent?: string | null;

		/** A list of licensed vocabularies to use in the request, in addition to the default unlicensed vocabularies. */
		licensedVocabularies?: Array<string>;
	}

	/** The request to analyze healthcare entities in a document. */
	export interface AnalyzeEntitiesRequestFormProperties {

		/** Optional. Alternative output format to be generated based on the results of analysis. */
		alternativeOutputFormat: FormControl<AnalyzeEntitiesRequestAlternativeOutputFormat | null | undefined>,

		/** document_content is a document to be annotated. */
		documentContent: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeEntitiesRequestFormGroup() {
		return new FormGroup<AnalyzeEntitiesRequestFormProperties>({
			alternativeOutputFormat: new FormControl<AnalyzeEntitiesRequestAlternativeOutputFormat | null | undefined>(undefined),
			documentContent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnalyzeEntitiesRequestAlternativeOutputFormat { ALTERNATIVE_OUTPUT_FORMAT_UNSPECIFIED = 0, FHIR_BUNDLE = 1 }


	/** Includes recognized entity mentions and relationships between them. */
	export interface AnalyzeEntitiesResponse {

		/** The union of all the candidate entities that the entity_mentions in this response could link to. These are UMLS concepts or normalized mention content. */
		entities?: Array<Entity>;

		/** The `entity_mentions` field contains all the annotated medical entities that were mentioned in the provided document. */
		entityMentions?: Array<EntityMention>;

		/** The FHIR bundle ([`R4`](http://hl7.org/fhir/R4/bundle.html)) that includes all the entities, the entity mentions, and the relationships in JSON format. */
		fhirBundle?: string | null;

		/** relationships contains all the binary relationships that were identified between entity mentions within the provided document. */
		relationships?: Array<EntityMentionRelationship>;
	}

	/** Includes recognized entity mentions and relationships between them. */
	export interface AnalyzeEntitiesResponseFormProperties {

		/** The FHIR bundle ([`R4`](http://hl7.org/fhir/R4/bundle.html)) that includes all the entities, the entity mentions, and the relationships in JSON format. */
		fhirBundle: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeEntitiesResponseFormGroup() {
		return new FormGroup<AnalyzeEntitiesResponseFormProperties>({
			fhirBundle: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The candidate entities that an entity mention could link to. */
	export interface Entity {

		/** entity_id is a first class field entity_id uniquely identifies this concept and its meta-vocabulary. For example, "UMLS/C0000970". */
		entityId?: string | null;

		/** preferred_term is the preferred term for this concept. For example, "Acetaminophen". For ad hoc entities formed by normalization, this is the most popular unnormalized string. */
		preferredTerm?: string | null;

		/** Vocabulary codes are first-class fields and differentiated from the concept unique identifier (entity_id). vocabulary_codes contains the representation of this concept in particular vocabularies, such as ICD-10, SNOMED-CT and RxNORM. These are prefixed by the name of the vocabulary, followed by the unique code within that vocabulary. For example, "RXNORM/A10334543". */
		vocabularyCodes?: Array<string>;
	}

	/** The candidate entities that an entity mention could link to. */
	export interface EntityFormProperties {

		/** entity_id is a first class field entity_id uniquely identifies this concept and its meta-vocabulary. For example, "UMLS/C0000970". */
		entityId: FormControl<string | null | undefined>,

		/** preferred_term is the preferred term for this concept. For example, "Acetaminophen". For ad hoc entities formed by normalization, this is the most popular unnormalized string. */
		preferredTerm: FormControl<string | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			entityId: new FormControl<string | null | undefined>(undefined),
			preferredTerm: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An entity mention in the document. */
	export interface EntityMention {

		/** A feature of an entity mention. */
		certaintyAssessment?: Feature;

		/** The model's confidence in this entity mention annotation. A number between 0 and 1. */
		confidence?: number | null;

		/** linked_entities are candidate ontological concepts that this entity mention may refer to. They are sorted by decreasing confidence. */
		linkedEntities?: Array<LinkedEntity>;

		/** mention_id uniquely identifies each entity mention in a single response. */
		mentionId?: string | null;

		/** A feature of an entity mention. */
		subject?: Feature;

		/** A feature of an entity mention. */
		temporalAssessment?: Feature;

		/** A span of text in the provided document. */
		text?: TextSpan;

		/** The semantic type of the entity: UNKNOWN_ENTITY_TYPE, ALONE, ANATOMICAL_STRUCTURE, ASSISTED_LIVING, BF_RESULT, BM_RESULT, BM_UNIT, BM_VALUE, BODY_FUNCTION, BODY_MEASUREMENT, COMPLIANT, DOESNOT_FOLLOWUP, FAMILY, FOLLOWSUP, LABORATORY_DATA, LAB_RESULT, LAB_UNIT, LAB_VALUE, MEDICAL_DEVICE, MEDICINE, MED_DOSE, MED_DURATION, MED_FORM, MED_FREQUENCY, MED_ROUTE, MED_STATUS, MED_STRENGTH, MED_TOTALDOSE, MED_UNIT, NON_COMPLIANT, OTHER_LIVINGSTATUS, PROBLEM, PROCEDURE, PROCEDURE_RESULT, PROC_METHOD, REASON_FOR_NONCOMPLIANCE, SEVERITY, SUBSTANCE_ABUSE, UNCLEAR_FOLLOWUP. */
		type?: string | null;
	}

	/** An entity mention in the document. */
	export interface EntityMentionFormProperties {

		/** The model's confidence in this entity mention annotation. A number between 0 and 1. */
		confidence: FormControl<number | null | undefined>,

		/** mention_id uniquely identifies each entity mention in a single response. */
		mentionId: FormControl<string | null | undefined>,

		/** The semantic type of the entity: UNKNOWN_ENTITY_TYPE, ALONE, ANATOMICAL_STRUCTURE, ASSISTED_LIVING, BF_RESULT, BM_RESULT, BM_UNIT, BM_VALUE, BODY_FUNCTION, BODY_MEASUREMENT, COMPLIANT, DOESNOT_FOLLOWUP, FAMILY, FOLLOWSUP, LABORATORY_DATA, LAB_RESULT, LAB_UNIT, LAB_VALUE, MEDICAL_DEVICE, MEDICINE, MED_DOSE, MED_DURATION, MED_FORM, MED_FREQUENCY, MED_ROUTE, MED_STATUS, MED_STRENGTH, MED_TOTALDOSE, MED_UNIT, NON_COMPLIANT, OTHER_LIVINGSTATUS, PROBLEM, PROCEDURE, PROCEDURE_RESULT, PROC_METHOD, REASON_FOR_NONCOMPLIANCE, SEVERITY, SUBSTANCE_ABUSE, UNCLEAR_FOLLOWUP. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEntityMentionFormGroup() {
		return new FormGroup<EntityMentionFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			mentionId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A feature of an entity mention. */
	export interface Feature {

		/** The model's confidence in this feature annotation. A number between 0 and 1. */
		confidence?: number | null;

		/** The value of this feature annotation. Its range depends on the type of the feature. */
		value?: string | null;
	}

	/** A feature of an entity mention. */
	export interface FeatureFormProperties {

		/** The model's confidence in this feature annotation. A number between 0 and 1. */
		confidence: FormControl<number | null | undefined>,

		/** The value of this feature annotation. Its range depends on the type of the feature. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFeatureFormGroup() {
		return new FormGroup<FeatureFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EntityMentions can be linked to multiple entities using a LinkedEntity message lets us add other fields, e.g. confidence. */
	export interface LinkedEntity {

		/** entity_id is a concept unique identifier. These are prefixed by a string that identifies the entity coding system, followed by the unique identifier within that system. For example, "UMLS/C0000970". This also supports ad hoc entities, which are formed by normalizing entity mention content. */
		entityId?: string | null;
	}

	/** EntityMentions can be linked to multiple entities using a LinkedEntity message lets us add other fields, e.g. confidence. */
	export interface LinkedEntityFormProperties {

		/** entity_id is a concept unique identifier. These are prefixed by a string that identifies the entity coding system, followed by the unique identifier within that system. For example, "UMLS/C0000970". This also supports ad hoc entities, which are formed by normalizing entity mention content. */
		entityId: FormControl<string | null | undefined>,
	}
	export function CreateLinkedEntityFormGroup() {
		return new FormGroup<LinkedEntityFormProperties>({
			entityId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A span of text in the provided document. */
	export interface TextSpan {

		/** The unicode codepoint index of the beginning of this span. */
		beginOffset?: number | null;

		/** The original text contained in this span. */
		content?: string | null;
	}

	/** A span of text in the provided document. */
	export interface TextSpanFormProperties {

		/** The unicode codepoint index of the beginning of this span. */
		beginOffset: FormControl<number | null | undefined>,

		/** The original text contained in this span. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateTextSpanFormGroup() {
		return new FormGroup<TextSpanFormProperties>({
			beginOffset: new FormControl<number | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines directed relationship from one entity mention to another. */
	export interface EntityMentionRelationship {

		/** The model's confidence in this annotation. A number between 0 and 1. */
		confidence?: number | null;

		/** object_id is the id of the object entity mention. */
		objectId?: string | null;

		/** subject_id is the id of the subject entity mention. */
		subjectId?: string | null;
	}

	/** Defines directed relationship from one entity mention to another. */
	export interface EntityMentionRelationshipFormProperties {

		/** The model's confidence in this annotation. A number between 0 and 1. */
		confidence: FormControl<number | null | undefined>,

		/** object_id is the id of the object entity mention. */
		objectId: FormControl<string | null | undefined>,

		/** subject_id is the id of the subject entity mention. */
		subjectId: FormControl<string | null | undefined>,
	}
	export function CreateEntityMentionRelationshipFormGroup() {
		return new FormGroup<EntityMentionRelationshipFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
			subjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Archives the specified User data mapping. */
	export interface ArchiveUserDataMappingRequest {
	}

	/** Archives the specified User data mapping. */
	export interface ArchiveUserDataMappingRequestFormProperties {
	}
	export function CreateArchiveUserDataMappingRequestFormGroup() {
		return new FormGroup<ArchiveUserDataMappingRequestFormProperties>({
		});

	}


	/** Archives the specified User data mapping. */
	export interface ArchiveUserDataMappingResponse {
	}

	/** Archives the specified User data mapping. */
	export interface ArchiveUserDataMappingResponseFormProperties {
	}
	export function CreateArchiveUserDataMappingResponseFormGroup() {
		return new FormGroup<ArchiveUserDataMappingResponseFormProperties>({
		});

	}


	/** An attribute value for a Consent or User data mapping. Each Attribute must have a corresponding AttributeDefinition in the consent store that defines the default and allowed values. */
	export interface Attribute {

		/** Indicates the name of an attribute defined in the consent store. */
		attributeDefinitionId?: string | null;

		/** Required. The value of the attribute. Must be an acceptable value as defined in the consent store. For example, if the consent store defines "data type" with acceptable values "questionnaire" and "step-count", when the attribute name is data type, this field must contain one of those values. */
		values?: Array<string>;
	}

	/** An attribute value for a Consent or User data mapping. Each Attribute must have a corresponding AttributeDefinition in the consent store that defines the default and allowed values. */
	export interface AttributeFormProperties {

		/** Indicates the name of an attribute defined in the consent store. */
		attributeDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			attributeDefinitionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A client-defined consent attribute. */
	export interface AttributeDefinition {

		/** Required. Possible values for the attribute. The number of allowed values must not exceed 500. An empty list is invalid. The list can only be expanded after creation. */
		allowedValues?: Array<string>;

		/** Required. The category of the attribute. The value of this field cannot be changed after creation. */
		category?: AttributeDefinitionCategory | null;

		/** Optional. Default values of the attribute in Consents. If no default values are specified, it defaults to an empty value. */
		consentDefaultValues?: Array<string>;

		/** Optional. Default value of the attribute in User data mappings. If no default value is specified, it defaults to an empty value. This field is only applicable to attributes of the category `RESOURCE`. */
		dataMappingDefaultValue?: string | null;

		/** Optional. A description of the attribute. */
		description?: string | null;

		/** Resource name of the Attribute definition, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/attributeDefinitions/{attribute_definition_id}`. Cannot be changed after creation. */
		name?: string | null;
	}

	/** A client-defined consent attribute. */
	export interface AttributeDefinitionFormProperties {

		/** Required. The category of the attribute. The value of this field cannot be changed after creation. */
		category: FormControl<AttributeDefinitionCategory | null | undefined>,

		/** Optional. Default value of the attribute in User data mappings. If no default value is specified, it defaults to an empty value. This field is only applicable to attributes of the category `RESOURCE`. */
		dataMappingDefaultValue: FormControl<string | null | undefined>,

		/** Optional. A description of the attribute. */
		description: FormControl<string | null | undefined>,

		/** Resource name of the Attribute definition, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/attributeDefinitions/{attribute_definition_id}`. Cannot be changed after creation. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAttributeDefinitionFormGroup() {
		return new FormGroup<AttributeDefinitionFormProperties>({
			category: new FormControl<AttributeDefinitionCategory | null | undefined>(undefined),
			dataMappingDefaultValue: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttributeDefinitionCategory { CATEGORY_UNSPECIFIED = 0, RESOURCE = 1, REQUEST = 2 }


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


	/** Mask a string by replacing its characters with a fixed character. */
	export interface CharacterMaskConfig {

		/** Character to mask the sensitive values. If not supplied, defaults to "*". */
		maskingCharacter?: string | null;
	}

	/** Mask a string by replacing its characters with a fixed character. */
	export interface CharacterMaskConfigFormProperties {

		/** Character to mask the sensitive values. If not supplied, defaults to "*". */
		maskingCharacter: FormControl<string | null | undefined>,
	}
	export function CreateCharacterMaskConfigFormGroup() {
		return new FormGroup<CharacterMaskConfigFormProperties>({
			maskingCharacter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use. */
	export interface CheckDataAccessRequest {

		/** List of resource names of Consent resources. */
		consentList?: ConsentList;

		/** Required. The unique identifier of the resource to check access for. This identifier must correspond to a User data mapping in the given consent store. */
		dataId?: string | null;

		/** The values of request attributes associated with this access request. */
		requestAttributes?: {[id: string]: string };

		/** Optional. The view for CheckDataAccessResponse. If unspecified, defaults to `BASIC` and returns `consented` as `TRUE` or `FALSE`. */
		responseView?: CheckDataAccessRequestResponseView | null;
	}

	/** Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use. */
	export interface CheckDataAccessRequestFormProperties {

		/** Required. The unique identifier of the resource to check access for. This identifier must correspond to a User data mapping in the given consent store. */
		dataId: FormControl<string | null | undefined>,

		/** The values of request attributes associated with this access request. */
		requestAttributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The view for CheckDataAccessResponse. If unspecified, defaults to `BASIC` and returns `consented` as `TRUE` or `FALSE`. */
		responseView: FormControl<CheckDataAccessRequestResponseView | null | undefined>,
	}
	export function CreateCheckDataAccessRequestFormGroup() {
		return new FormGroup<CheckDataAccessRequestFormProperties>({
			dataId: new FormControl<string | null | undefined>(undefined),
			requestAttributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			responseView: new FormControl<CheckDataAccessRequestResponseView | null | undefined>(undefined),
		});

	}


	/** List of resource names of Consent resources. */
	export interface ConsentList {

		/** The resource names of the Consents to evaluate against, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. */
		consents?: Array<string>;
	}

	/** List of resource names of Consent resources. */
	export interface ConsentListFormProperties {
	}
	export function CreateConsentListFormGroup() {
		return new FormGroup<ConsentListFormProperties>({
		});

	}

	export enum CheckDataAccessRequestResponseView { RESPONSE_VIEW_UNSPECIFIED = 0, BASIC = 1, FULL = 2 }


	/** Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use. */
	export interface CheckDataAccessResponse {

		/** The resource names of all evaluated Consents mapped to their evaluation. */
		consentDetails?: {[id: string]: ConsentEvaluation };

		/** Whether the requested resource is consented for the given use. */
		consented?: boolean | null;
	}

	/** Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use. */
	export interface CheckDataAccessResponseFormProperties {

		/** The resource names of all evaluated Consents mapped to their evaluation. */
		consentDetails: FormControl<{[id: string]: ConsentEvaluation } | null | undefined>,

		/** Whether the requested resource is consented for the given use. */
		consented: FormControl<boolean | null | undefined>,
	}
	export function CreateCheckDataAccessResponseFormGroup() {
		return new FormGroup<CheckDataAccessResponseFormProperties>({
			consentDetails: new FormControl<{[id: string]: ConsentEvaluation } | null | undefined>(undefined),
			consented: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The detailed evaluation of a particular Consent. */
	export interface ConsentEvaluation {

		/** The evaluation result. */
		evaluationResult?: ConsentEvaluationEvaluationResult | null;
	}

	/** The detailed evaluation of a particular Consent. */
	export interface ConsentEvaluationFormProperties {

		/** The evaluation result. */
		evaluationResult: FormControl<ConsentEvaluationEvaluationResult | null | undefined>,
	}
	export function CreateConsentEvaluationFormGroup() {
		return new FormGroup<ConsentEvaluationFormProperties>({
			evaluationResult: new FormControl<ConsentEvaluationEvaluationResult | null | undefined>(undefined),
		});

	}

	export enum ConsentEvaluationEvaluationResult { EVALUATION_RESULT_UNSPECIFIED = 0, NOT_APPLICABLE = 1, NO_MATCHING_POLICY = 2, NO_SATISFIED_POLICY = 3, HAS_SATISFIED_POLICY = 4 }


	/** Represents a user's consent. */
	export interface Consent {

		/** Required. The resource name of the Consent artifact that contains proof of the end user's consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. */
		consentArtifact?: string | null;

		/** Timestamp in UTC of when this Consent is considered expired. */
		expireTime?: string | null;

		/** Optional. User-supplied key-value pairs used to organize Consent resources. Metadata keys must: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - begin with a letter - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes Metadata values must be: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes No more than 64 metadata entries can be associated with a given consent. */
		metadata?: {[id: string]: string };

		/** Resource name of the Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. Cannot be changed after creation. */
		name?: string | null;

		/** Optional. Represents a user's consent in terms of the resources that can be accessed and under what conditions. */
		policies?: Array<GoogleCloudHealthcareV1ConsentPolicy>;

		/** Output only. The timestamp that the revision was created. */
		revisionCreateTime?: string | null;

		/** Output only. The revision ID of the Consent. The format is an 8-character hexadecimal string. Refer to a specific revision of a Consent by appending `@{revision_id}` to the Consent's resource name. */
		revisionId?: string | null;

		/** Required. Indicates the current state of this Consent. */
		state?: ConsentState | null;

		/** Input only. The time to live for this Consent from when it is created. */
		ttl?: string | null;

		/** Required. User's UUID provided by the client. */
		userId?: string | null;
	}

	/** Represents a user's consent. */
	export interface ConsentFormProperties {

		/** Required. The resource name of the Consent artifact that contains proof of the end user's consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. */
		consentArtifact: FormControl<string | null | undefined>,

		/** Timestamp in UTC of when this Consent is considered expired. */
		expireTime: FormControl<string | null | undefined>,

		/** Optional. User-supplied key-value pairs used to organize Consent resources. Metadata keys must: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - begin with a letter - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes Metadata values must be: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes No more than 64 metadata entries can be associated with a given consent. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource name of the Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. Cannot be changed after creation. */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp that the revision was created. */
		revisionCreateTime: FormControl<string | null | undefined>,

		/** Output only. The revision ID of the Consent. The format is an 8-character hexadecimal string. Refer to a specific revision of a Consent by appending `@{revision_id}` to the Consent's resource name. */
		revisionId: FormControl<string | null | undefined>,

		/** Required. Indicates the current state of this Consent. */
		state: FormControl<ConsentState | null | undefined>,

		/** Input only. The time to live for this Consent from when it is created. */
		ttl: FormControl<string | null | undefined>,

		/** Required. User's UUID provided by the client. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateConsentFormGroup() {
		return new FormGroup<ConsentFormProperties>({
			consentArtifact: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revisionCreateTime: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ConsentState | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a user's consent in terms of the resources that can be accessed and under what conditions. */
	export interface GoogleCloudHealthcareV1ConsentPolicy {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		authorizationRule?: Expr;

		/** The resources that this policy applies to. A resource is a match if it matches all the attributes listed here. If empty, this policy applies to all User data mappings for the given user. */
		resourceAttributes?: Array<Attribute>;
	}

	/** Represents a user's consent in terms of the resources that can be accessed and under what conditions. */
	export interface GoogleCloudHealthcareV1ConsentPolicyFormProperties {
	}
	export function CreateGoogleCloudHealthcareV1ConsentPolicyFormGroup() {
		return new FormGroup<GoogleCloudHealthcareV1ConsentPolicyFormProperties>({
		});

	}

	export enum ConsentState { STATE_UNSPECIFIED = 0, ACTIVE = 1, ARCHIVED = 2, REVOKED = 3, DRAFT = 4, REJECTED = 5 }


	/** Documentation of a user's consent. */
	export interface ConsentArtifact {

		/** Optional. Screenshots, PDFs, or other binary information documenting the user's consent. */
		consentContentScreenshots?: Array<Image>;

		/** Optional. An string indicating the version of the consent information shown to the user. */
		consentContentVersion?: string | null;

		/** User signature. */
		guardianSignature?: Signature;

		/** Optional. Metadata associated with the Consent artifact. For example, the consent locale or user agent version. */
		metadata?: {[id: string]: string };

		/** Resource name of the Consent artifact, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. Cannot be changed after creation. */
		name?: string | null;

		/** Required. User's UUID provided by the client. */
		userId?: string | null;

		/** User signature. */
		userSignature?: Signature;

		/** User signature. */
		witnessSignature?: Signature;
	}

	/** Documentation of a user's consent. */
	export interface ConsentArtifactFormProperties {

		/** Optional. An string indicating the version of the consent information shown to the user. */
		consentContentVersion: FormControl<string | null | undefined>,

		/** Optional. Metadata associated with the Consent artifact. For example, the consent locale or user agent version. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource name of the Consent artifact, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. Cannot be changed after creation. */
		name: FormControl<string | null | undefined>,

		/** Required. User's UUID provided by the client. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateConsentArtifactFormGroup() {
		return new FormGroup<ConsentArtifactFormProperties>({
			consentContentVersion: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Raw bytes representing consent artifact content. */
	export interface Image {

		/** Input only. Points to a Cloud Storage URI containing the consent artifact content. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The Cloud Healthcare API service account must have the `roles/storage.objectViewer` Cloud IAM role for this Cloud Storage location. The consent artifact content at this URI is copied to a Cloud Storage location managed by the Cloud Healthcare API. Responses to fetching requests return the consent artifact content in raw_bytes. */
		gcsUri?: string | null;

		/** Consent artifact content represented as a stream of bytes. This field is populated when returned in GetConsentArtifact response, but not included in CreateConsentArtifact and ListConsentArtifact response. */
		rawBytes?: string | null;
	}

	/** Raw bytes representing consent artifact content. */
	export interface ImageFormProperties {

		/** Input only. Points to a Cloud Storage URI containing the consent artifact content. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The Cloud Healthcare API service account must have the `roles/storage.objectViewer` Cloud IAM role for this Cloud Storage location. The consent artifact content at this URI is copied to a Cloud Storage location managed by the Cloud Healthcare API. Responses to fetching requests return the consent artifact content in raw_bytes. */
		gcsUri: FormControl<string | null | undefined>,

		/** Consent artifact content represented as a stream of bytes. This field is populated when returned in GetConsentArtifact response, but not included in CreateConsentArtifact and ListConsentArtifact response. */
		rawBytes: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			gcsUri: new FormControl<string | null | undefined>(undefined),
			rawBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User signature. */
	export interface Signature {

		/** Raw bytes representing consent artifact content. */
		image?: Image;

		/** Optional. Metadata associated with the user's signature. For example, the user's name or the user's title. */
		metadata?: {[id: string]: string };

		/** Optional. Timestamp of the signature. */
		signatureTime?: string | null;

		/** Required. User's UUID provided by the client. */
		userId?: string | null;
	}

	/** User signature. */
	export interface SignatureFormProperties {

		/** Optional. Metadata associated with the user's signature. For example, the user's name or the user's title. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Timestamp of the signature. */
		signatureTime: FormControl<string | null | undefined>,

		/** Required. User's UUID provided by the client. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateSignatureFormGroup() {
		return new FormGroup<SignatureFormProperties>({
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			signatureTime: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a consent store. */
	export interface ConsentStore {

		/** Optional. Default time to live for Consents created in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents. */
		defaultConsentTtl?: string | null;

		/** Optional. If `true`, UpdateConsent creates the Consent if it does not already exist. If unspecified, defaults to `false`. */
		enableConsentCreateOnUpdate?: boolean | null;

		/** Optional. User-supplied key-value pairs used to organize consent stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}. Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}. No more than 64 labels can be associated with a given store. For more information: https://cloud.google.com/healthcare/docs/how-tos/labeling-resources */
		labels?: {[id: string]: string };

		/** Resource name of the consent store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}`. Cannot be changed after creation. */
		name?: string | null;
	}

	/** Represents a consent store. */
	export interface ConsentStoreFormProperties {

		/** Optional. Default time to live for Consents created in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents. */
		defaultConsentTtl: FormControl<string | null | undefined>,

		/** Optional. If `true`, UpdateConsent creates the Consent if it does not already exist. If unspecified, defaults to `false`. */
		enableConsentCreateOnUpdate: FormControl<boolean | null | undefined>,

		/** Optional. User-supplied key-value pairs used to organize consent stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}. Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}. No more than 64 labels can be associated with a given store. For more information: https://cloud.google.com/healthcare/docs/how-tos/labeling-resources */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource name of the consent store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}`. Cannot be changed after creation. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConsentStoreFormGroup() {
		return new FormGroup<ConsentStoreFormProperties>({
			defaultConsentTtl: new FormControl<string | null | undefined>(undefined),
			enableConsentCreateOnUpdate: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new message. */
	export interface CreateMessageRequest {

		/** A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard. */
		message?: Message;
	}

	/** Creates a new message. */
	export interface CreateMessageRequestFormProperties {
	}
	export function CreateCreateMessageRequestFormGroup() {
		return new FormGroup<CreateMessageRequestFormProperties>({
		});

	}


	/** A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard. */
	export interface Message {

		/** Output only. The datetime when the message was created. Set by the server. */
		createTime?: string | null;

		/** Raw message bytes. */
		data?: string | null;

		/** User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. */
		labels?: {[id: string]: string };

		/** The message type for this message. MSH-9.1. */
		messageType?: string | null;

		/** Resource name of the Message, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server. */
		name?: string | null;

		/** The content of a HL7v2 message in a structured format. */
		parsedData?: ParsedData;

		/** All patient IDs listed in the PID-2, PID-3, and PID-4 segments of this message. */
		patientIds?: Array<PatientId>;

		/** The content of an HL7v2 message in a structured format as specified by a schema. */
		schematizedData?: SchematizedData;

		/** The hospital that this message came from. MSH-4. */
		sendFacility?: string | null;

		/** The datetime the sending application sent this message. MSH-7. */
		sendTime?: string | null;
	}

	/** A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard. */
	export interface MessageFormProperties {

		/** Output only. The datetime when the message was created. Set by the server. */
		createTime: FormControl<string | null | undefined>,

		/** Raw message bytes. */
		data: FormControl<string | null | undefined>,

		/** User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The message type for this message. MSH-9.1. */
		messageType: FormControl<string | null | undefined>,

		/** Resource name of the Message, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server. */
		name: FormControl<string | null | undefined>,

		/** The hospital that this message came from. MSH-4. */
		sendFacility: FormControl<string | null | undefined>,

		/** The datetime the sending application sent this message. MSH-7. */
		sendTime: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			messageType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sendFacility: new FormControl<string | null | undefined>(undefined),
			sendTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The content of a HL7v2 message in a structured format. */
	export interface ParsedData {
		segments?: Array<Segment>;
	}

	/** The content of a HL7v2 message in a structured format. */
	export interface ParsedDataFormProperties {
	}
	export function CreateParsedDataFormGroup() {
		return new FormGroup<ParsedDataFormProperties>({
		});

	}


	/** A segment in a structured format. */
	export interface Segment {

		/** A mapping from the positional location to the value. The key string uses zero-based indexes separated by dots to identify Fields, components and sub-components. A bracket notation is also used to identify different instances of a repeated field. Regex for key: (\d+)(\[\d+\])?(.\d+)?(.\d+)? Examples of (key, value) pairs: * (0.1, "hemoglobin") denotes that the first component of Field 0 has the value "hemoglobin". * (1.1.2, "CBC") denotes that the second sub-component of the first component of Field 1 has the value "CBC". * (1[0].1, "HbA1c") denotes that the first component of the first Instance of Field 1, which is repeated, has the value "HbA1c". */
		fields?: {[id: string]: string };

		/** A string that indicates the type of segment. For example, EVN or PID. */
		segmentId?: string | null;

		/** Set ID for segments that can be in a set. This can be empty if it's missing or isn't applicable. */
		setId?: string | null;
	}

	/** A segment in a structured format. */
	export interface SegmentFormProperties {

		/** A mapping from the positional location to the value. The key string uses zero-based indexes separated by dots to identify Fields, components and sub-components. A bracket notation is also used to identify different instances of a repeated field. Regex for key: (\d+)(\[\d+\])?(.\d+)?(.\d+)? Examples of (key, value) pairs: * (0.1, "hemoglobin") denotes that the first component of Field 0 has the value "hemoglobin". * (1.1.2, "CBC") denotes that the second sub-component of the first component of Field 1 has the value "CBC". * (1[0].1, "HbA1c") denotes that the first component of the first Instance of Field 1, which is repeated, has the value "HbA1c". */
		fields: FormControl<{[id: string]: string } | null | undefined>,

		/** A string that indicates the type of segment. For example, EVN or PID. */
		segmentId: FormControl<string | null | undefined>,

		/** Set ID for segments that can be in a set. This can be empty if it's missing or isn't applicable. */
		setId: FormControl<string | null | undefined>,
	}
	export function CreateSegmentFormGroup() {
		return new FormGroup<SegmentFormProperties>({
			fields: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			segmentId: new FormControl<string | null | undefined>(undefined),
			setId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A patient identifier and associated type. */
	export interface PatientId {

		/** ID type. For example, MRN or NHS. */
		type?: string | null;

		/** The patient's unique identifier. */
		value?: string | null;
	}

	/** A patient identifier and associated type. */
	export interface PatientIdFormProperties {

		/** ID type. For example, MRN or NHS. */
		type: FormControl<string | null | undefined>,

		/** The patient's unique identifier. */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePatientIdFormGroup() {
		return new FormGroup<PatientIdFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The content of an HL7v2 message in a structured format as specified by a schema. */
	export interface SchematizedData {

		/** JSON output of the parser. */
		data?: string | null;

		/** The error output of the parser. */
		error?: string | null;
	}

	/** The content of an HL7v2 message in a structured format as specified by a schema. */
	export interface SchematizedDataFormProperties {

		/** JSON output of the parser. */
		data: FormControl<string | null | undefined>,

		/** The error output of the parser. */
		error: FormControl<string | null | undefined>,
	}
	export function CreateSchematizedDataFormGroup() {
		return new FormGroup<SchematizedDataFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output (for example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`). */
	export interface CryptoHashConfig {

		/** An AES 128/192/256 bit key. Causes the hash to be computed based on this key. A default key is generated for each Deidentify operation and is used when neither `crypto_key` nor `kms_wrapped` is specified. Must not be set if `kms_wrapped` is set. */
		cryptoKey?: string | null;

		/** Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. The key must grant the Cloud IAM permission `cloudkms.cryptoKeyVersions.useToDecrypt` to the project's Cloud Healthcare Service Agent service account. For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key). */
		kmsWrapped?: KmsWrappedCryptoKey;
	}

	/** Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output (for example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`). */
	export interface CryptoHashConfigFormProperties {

		/** An AES 128/192/256 bit key. Causes the hash to be computed based on this key. A default key is generated for each Deidentify operation and is used when neither `crypto_key` nor `kms_wrapped` is specified. Must not be set if `kms_wrapped` is set. */
		cryptoKey: FormControl<string | null | undefined>,
	}
	export function CreateCryptoHashConfigFormGroup() {
		return new FormGroup<CryptoHashConfigFormProperties>({
			cryptoKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. The key must grant the Cloud IAM permission `cloudkms.cryptoKeyVersions.useToDecrypt` to the project's Cloud Healthcare Service Agent service account. For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key). */
	export interface KmsWrappedCryptoKey {

		/** Required. The resource name of the KMS CryptoKey to use for unwrapping. For example, `projects/{project_id}/locations/{location_id}/keyRings/{keyring}/cryptoKeys/{key}`. */
		cryptoKey?: string | null;

		/** Required. The wrapped data crypto key. */
		wrappedKey?: string | null;
	}

	/** Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. The key must grant the Cloud IAM permission `cloudkms.cryptoKeyVersions.useToDecrypt` to the project's Cloud Healthcare Service Agent service account. For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key). */
	export interface KmsWrappedCryptoKeyFormProperties {

		/** Required. The resource name of the KMS CryptoKey to use for unwrapping. For example, `projects/{project_id}/locations/{location_id}/keyRings/{keyring}/cryptoKeys/{key}`. */
		cryptoKey: FormControl<string | null | undefined>,

		/** Required. The wrapped data crypto key. */
		wrappedKey: FormControl<string | null | undefined>,
	}
	export function CreateKmsWrappedCryptoKeyFormGroup() {
		return new FormGroup<KmsWrappedCryptoKeyFormProperties>({
			cryptoKey: new FormControl<string | null | undefined>(undefined),
			wrappedKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message representing a health dataset. A health dataset represents a collection of healthcare data pertaining to one or more patients. This may include multiple modalities of healthcare data, such as electronic medical records or medical imaging data. */
	export interface Dataset {

		/** Resource name of the dataset, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`. */
		name?: string | null;

		/** The default timezone used by this dataset. Must be a either a valid IANA time zone name such as "America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources, such as HL7 messages, where no explicit timezone is specified. */
		timeZone?: string | null;
	}

	/** A message representing a health dataset. A health dataset represents a collection of healthcare data pertaining to one or more patients. This may include multiple modalities of healthcare data, such as electronic medical records or medical imaging data. */
	export interface DatasetFormProperties {

		/** Resource name of the dataset, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`. */
		name: FormControl<string | null | undefined>,

		/** The default timezone used by this dataset. Must be a either a valid IANA time zone name such as "America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources, such as HL7 messages, where no explicit timezone is specified. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination. */
	export interface DateShiftConfig {

		/** An AES 128/192/256 bit key. The date shift is computed based on this key and the patient ID. If the patient ID is empty for a DICOM resource, the date shift is computed based on this key and the study instance UID. If `crypto_key` is not set, then `kms_wrapped` is used to calculate the date shift. If neither is set, a default key is generated for each de-identify operation. Must not be set if `kms_wrapped` is set. */
		cryptoKey?: string | null;

		/** Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. The key must grant the Cloud IAM permission `cloudkms.cryptoKeyVersions.useToDecrypt` to the project's Cloud Healthcare Service Agent service account. For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key). */
		kmsWrapped?: KmsWrappedCryptoKey;
	}

	/** Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination. */
	export interface DateShiftConfigFormProperties {

		/** An AES 128/192/256 bit key. The date shift is computed based on this key and the patient ID. If the patient ID is empty for a DICOM resource, the date shift is computed based on this key and the study instance UID. If `crypto_key` is not set, then `kms_wrapped` is used to calculate the date shift. If neither is set, a default key is generated for each de-identify operation. Must not be set if `kms_wrapped` is set. */
		cryptoKey: FormControl<string | null | undefined>,
	}
	export function CreateDateShiftConfigFormGroup() {
		return new FormGroup<DateShiftConfigFormProperties>({
			cryptoKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains configuration for streaming de-identified FHIR export. */
	export interface DeidentifiedStoreDestination {

		/** Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime. */
		config?: DeidentifyConfig;

		/** The full resource name of a Cloud Healthcare FHIR store, for example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`. */
		store?: string | null;
	}

	/** Contains configuration for streaming de-identified FHIR export. */
	export interface DeidentifiedStoreDestinationFormProperties {

		/** The full resource name of a Cloud Healthcare FHIR store, for example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`. */
		store: FormControl<string | null | undefined>,
	}
	export function CreateDeidentifiedStoreDestinationFormGroup() {
		return new FormGroup<DeidentifiedStoreDestinationFormProperties>({
			store: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime. */
	export interface DeidentifyConfig {

		/** Specifies the parameters needed for de-identification of DICOM stores. */
		dicom?: DicomConfig;

		/** Specifies how to handle de-identification of a FHIR store. */
		fhir?: FhirConfig;

		/** Specifies how to handle de-identification of image pixels. */
		image?: ImageConfig;
		text?: TextConfig;

		/** Ensures in-flight data remains in the region of origin during de-identification. Using this option results in a significant reduction of throughput, and is not compatible with `LOCATION` or `ORGANIZATION_NAME` infoTypes. `LOCATION` must be excluded within TextConfig, and must also be excluded within ImageConfig if image redaction is required. */
		useRegionalDataProcessing?: boolean | null;
	}

	/** Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime. */
	export interface DeidentifyConfigFormProperties {

		/** Ensures in-flight data remains in the region of origin during de-identification. Using this option results in a significant reduction of throughput, and is not compatible with `LOCATION` or `ORGANIZATION_NAME` infoTypes. `LOCATION` must be excluded within TextConfig, and must also be excluded within ImageConfig if image redaction is required. */
		useRegionalDataProcessing: FormControl<boolean | null | undefined>,
	}
	export function CreateDeidentifyConfigFormGroup() {
		return new FormGroup<DeidentifyConfigFormProperties>({
			useRegionalDataProcessing: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the parameters needed for de-identification of DICOM stores. */
	export interface DicomConfig {

		/** Tag filtering profile that determines which tags to keep/remove. */
		filterProfile?: DicomConfigFilterProfile | null;

		/** List of tags to be filtered. */
		keepList?: TagFilterList;

		/** List of tags to be filtered. */
		removeList?: TagFilterList;

		/** If true, skip replacing StudyInstanceUID, SeriesInstanceUID, SOPInstanceUID, and MediaStorageSOPInstanceUID and leave them untouched. The Cloud Healthcare API regenerates these UIDs by default based on the DICOM Standard's reasoning: "Whilst these UIDs cannot be mapped directly to an individual out of context, given access to the original images, or to a database of the original images containing the UIDs, it would be possible to recover the individual's identity." http://dicom.nema.org/medical/dicom/current/output/chtml/part15/sect_E.3.9.html */
		skipIdRedaction?: boolean | null;
	}

	/** Specifies the parameters needed for de-identification of DICOM stores. */
	export interface DicomConfigFormProperties {

		/** Tag filtering profile that determines which tags to keep/remove. */
		filterProfile: FormControl<DicomConfigFilterProfile | null | undefined>,

		/** If true, skip replacing StudyInstanceUID, SeriesInstanceUID, SOPInstanceUID, and MediaStorageSOPInstanceUID and leave them untouched. The Cloud Healthcare API regenerates these UIDs by default based on the DICOM Standard's reasoning: "Whilst these UIDs cannot be mapped directly to an individual out of context, given access to the original images, or to a database of the original images containing the UIDs, it would be possible to recover the individual's identity." http://dicom.nema.org/medical/dicom/current/output/chtml/part15/sect_E.3.9.html */
		skipIdRedaction: FormControl<boolean | null | undefined>,
	}
	export function CreateDicomConfigFormGroup() {
		return new FormGroup<DicomConfigFormProperties>({
			filterProfile: new FormControl<DicomConfigFilterProfile | null | undefined>(undefined),
			skipIdRedaction: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DicomConfigFilterProfile { TAG_FILTER_PROFILE_UNSPECIFIED = 0, MINIMAL_KEEP_LIST_PROFILE = 1, ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE = 2, KEEP_ALL_PROFILE = 3, DEIDENTIFY_TAG_CONTENTS = 4 }


	/** List of tags to be filtered. */
	export interface TagFilterList {

		/** Tags to be filtered. Tags must be DICOM Data Elements, File Meta Elements, or Directory Structuring Elements, as defined at: http://dicom.nema.org/medical/dicom/current/output/html/part06.html#table_6-1,. They may be provided by "Keyword" or "Tag". For example "PatientID", "00100010". */
		tags?: Array<string>;
	}

	/** List of tags to be filtered. */
	export interface TagFilterListFormProperties {
	}
	export function CreateTagFilterListFormGroup() {
		return new FormGroup<TagFilterListFormProperties>({
		});

	}


	/** Specifies how to handle de-identification of a FHIR store. */
	export interface FhirConfig {

		/** The behaviour for handling FHIR extensions that aren't otherwise specified for de-identification. If true, all extensions are preserved during de-identification by default. If false or unspecified, all extensions are removed during de-identification by default. */
		defaultKeepExtensions?: boolean | null;

		/** Specifies FHIR paths to match and how to transform them. Any field that is not matched by a FieldMetadata is passed through to the output dataset unmodified. All extensions will be processed according to `default_keep_extensions`. */
		fieldMetadataList?: Array<FieldMetadata>;
	}

	/** Specifies how to handle de-identification of a FHIR store. */
	export interface FhirConfigFormProperties {

		/** The behaviour for handling FHIR extensions that aren't otherwise specified for de-identification. If true, all extensions are preserved during de-identification by default. If false or unspecified, all extensions are removed during de-identification by default. */
		defaultKeepExtensions: FormControl<boolean | null | undefined>,
	}
	export function CreateFhirConfigFormGroup() {
		return new FormGroup<FhirConfigFormProperties>({
			defaultKeepExtensions: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies FHIR paths to match, and how to handle de-identification of matching fields. */
	export interface FieldMetadata {

		/** Deidentify action for one field. */
		action?: FieldMetadataAction | null;

		/** List of paths to FHIR fields to be redacted. Each path is a period-separated list where each component is either a field name or FHIR type name, for example: Patient, HumanName. For "choice" types (those defined in the FHIR spec with the form: field[x]) we use two separate components. For example, "deceasedAge.unit" is matched by "Deceased.Age.unit". Supported types are: AdministrativeGenderCode, Base64Binary, Boolean, Code, Date, DateTime, Decimal, HumanName, Id, Instant, Integer, LanguageCode, Markdown, Oid, PositiveInt, String, UnsignedInt, Uri, Uuid, Xhtml. */
		paths?: Array<string>;
	}

	/** Specifies FHIR paths to match, and how to handle de-identification of matching fields. */
	export interface FieldMetadataFormProperties {

		/** Deidentify action for one field. */
		action: FormControl<FieldMetadataAction | null | undefined>,
	}
	export function CreateFieldMetadataFormGroup() {
		return new FormGroup<FieldMetadataFormProperties>({
			action: new FormControl<FieldMetadataAction | null | undefined>(undefined),
		});

	}

	export enum FieldMetadataAction { ACTION_UNSPECIFIED = 0, TRANSFORM = 1, INSPECT_AND_TRANSFORM = 2, DO_NOT_TRANSFORM = 3 }


	/** Specifies how to handle de-identification of image pixels. */
	export interface ImageConfig {

		/** Determines how to redact text from image. */
		textRedactionMode?: ImageConfigTextRedactionMode | null;
	}

	/** Specifies how to handle de-identification of image pixels. */
	export interface ImageConfigFormProperties {

		/** Determines how to redact text from image. */
		textRedactionMode: FormControl<ImageConfigTextRedactionMode | null | undefined>,
	}
	export function CreateImageConfigFormGroup() {
		return new FormGroup<ImageConfigFormProperties>({
			textRedactionMode: new FormControl<ImageConfigTextRedactionMode | null | undefined>(undefined),
		});

	}

	export enum ImageConfigTextRedactionMode { TEXT_REDACTION_MODE_UNSPECIFIED = 0, REDACT_ALL_TEXT = 1, REDACT_SENSITIVE_TEXT = 2, REDACT_NO_TEXT = 3 }

	export interface TextConfig {

		/** Transformations to apply to the detected data, overridden by `exclude_info_types`. */
		additionalTransformations?: Array<InfoTypeTransformation>;

		/** InfoTypes to skip transforming, overriding `additional_transformations`. */
		excludeInfoTypes?: Array<string>;

		/** The transformations to apply to the detected data. Deprecated. Use `additional_transformations` instead. */
		transformations?: Array<InfoTypeTransformation>;
	}
	export interface TextConfigFormProperties {
	}
	export function CreateTextConfigFormGroup() {
		return new FormGroup<TextConfigFormProperties>({
		});

	}


	/** A transformation to apply to text that is identified as a specific info_type. */
	export interface InfoTypeTransformation {

		/** Mask a string by replacing its characters with a fixed character. */
		characterMaskConfig?: CharacterMaskConfig;

		/** Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output (for example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`). */
		cryptoHashConfig?: CryptoHashConfig;

		/** Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination. */
		dateShiftConfig?: DateShiftConfig;

		/** InfoTypes to apply this transformation to. If this is not specified, the transformation applies to any info_type. */
		infoTypes?: Array<string>;

		/** Define how to redact sensitive values. Default behaviour is erase. For example, "My name is Jane." becomes "My name is ." */
		redactConfig?: RedactConfig;

		/** When using the INSPECT_AND_TRANSFORM action, each match is replaced with the name of the info_type. For example, "My name is Jane" becomes "My name is [PERSON_NAME]." The TRANSFORM action is equivalent to redacting. */
		replaceWithInfoTypeConfig?: ReplaceWithInfoTypeConfig;
	}

	/** A transformation to apply to text that is identified as a specific info_type. */
	export interface InfoTypeTransformationFormProperties {
	}
	export function CreateInfoTypeTransformationFormGroup() {
		return new FormGroup<InfoTypeTransformationFormProperties>({
		});

	}


	/** Define how to redact sensitive values. Default behaviour is erase. For example, "My name is Jane." becomes "My name is ." */
	export interface RedactConfig {
	}

	/** Define how to redact sensitive values. Default behaviour is erase. For example, "My name is Jane." becomes "My name is ." */
	export interface RedactConfigFormProperties {
	}
	export function CreateRedactConfigFormGroup() {
		return new FormGroup<RedactConfigFormProperties>({
		});

	}


	/** When using the INSPECT_AND_TRANSFORM action, each match is replaced with the name of the info_type. For example, "My name is Jane" becomes "My name is [PERSON_NAME]." The TRANSFORM action is equivalent to redacting. */
	export interface ReplaceWithInfoTypeConfig {
	}

	/** When using the INSPECT_AND_TRANSFORM action, each match is replaced with the name of the info_type. For example, "My name is Jane" becomes "My name is [PERSON_NAME]." The TRANSFORM action is equivalent to redacting. */
	export interface ReplaceWithInfoTypeConfigFormProperties {
	}
	export function CreateReplaceWithInfoTypeConfigFormGroup() {
		return new FormGroup<ReplaceWithInfoTypeConfigFormProperties>({
		});

	}


	/** Redacts identifying information from the specified dataset. */
	export interface DeidentifyDatasetRequest {

		/** Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime. */
		config?: DeidentifyConfig;

		/** The name of the dataset resource to create and write the redacted data to. * The destination dataset must not exist. * The destination dataset must be in the same location as the source dataset. De-identifying data across multiple locations is not supported. */
		destinationDataset?: string | null;

		/** Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified. */
		gcsConfigUri?: string | null;
	}

	/** Redacts identifying information from the specified dataset. */
	export interface DeidentifyDatasetRequestFormProperties {

		/** The name of the dataset resource to create and write the redacted data to. * The destination dataset must not exist. * The destination dataset must be in the same location as the source dataset. De-identifying data across multiple locations is not supported. */
		destinationDataset: FormControl<string | null | undefined>,

		/** Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified. */
		gcsConfigUri: FormControl<string | null | undefined>,
	}
	export function CreateDeidentifyDatasetRequestFormGroup() {
		return new FormGroup<DeidentifyDatasetRequestFormProperties>({
			destinationDataset: new FormControl<string | null | undefined>(undefined),
			gcsConfigUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new DICOM store with sensitive information de-identified. */
	export interface DeidentifyDicomStoreRequest {

		/** Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime. */
		config?: DeidentifyConfig;

		/** The name of the DICOM store to create and write the redacted data to. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`. * The destination dataset must exist. * The source dataset and destination dataset must both reside in the same location. De-identifying data across multiple locations is not supported. * The destination DICOM store must not exist. * The caller must have the necessary permissions to create the destination DICOM store. */
		destinationStore?: string | null;

		/** Specifies the filter configuration for DICOM resources. */
		filterConfig?: DicomFilterConfig;

		/** Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified. */
		gcsConfigUri?: string | null;
	}

	/** Creates a new DICOM store with sensitive information de-identified. */
	export interface DeidentifyDicomStoreRequestFormProperties {

		/** The name of the DICOM store to create and write the redacted data to. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`. * The destination dataset must exist. * The source dataset and destination dataset must both reside in the same location. De-identifying data across multiple locations is not supported. * The destination DICOM store must not exist. * The caller must have the necessary permissions to create the destination DICOM store. */
		destinationStore: FormControl<string | null | undefined>,

		/** Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified. */
		gcsConfigUri: FormControl<string | null | undefined>,
	}
	export function CreateDeidentifyDicomStoreRequestFormGroup() {
		return new FormGroup<DeidentifyDicomStoreRequestFormProperties>({
			destinationStore: new FormControl<string | null | undefined>(undefined),
			gcsConfigUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the filter configuration for DICOM resources. */
	export interface DicomFilterConfig {

		/** The Cloud Storage location of the filter configuration file. The `gcs_uri` must be in the format `gs://bucket/path/to/object`. The filter configuration file must contain a list of resource paths separated by newline characters (\n or \r\n). Each resource path must be in the format "/studies/{studyUID}[/series/{seriesUID}[/instances/{instanceUID}]]" The Cloud Healthcare API service account must have the `roles/storage.objectViewer` Cloud IAM role for this Cloud Storage location. */
		resourcePathsGcsUri?: string | null;
	}

	/** Specifies the filter configuration for DICOM resources. */
	export interface DicomFilterConfigFormProperties {

		/** The Cloud Storage location of the filter configuration file. The `gcs_uri` must be in the format `gs://bucket/path/to/object`. The filter configuration file must contain a list of resource paths separated by newline characters (\n or \r\n). Each resource path must be in the format "/studies/{studyUID}[/series/{seriesUID}[/instances/{instanceUID}]]" The Cloud Healthcare API service account must have the `roles/storage.objectViewer` Cloud IAM role for this Cloud Storage location. */
		resourcePathsGcsUri: FormControl<string | null | undefined>,
	}
	export function CreateDicomFilterConfigFormGroup() {
		return new FormGroup<DicomFilterConfigFormProperties>({
			resourcePathsGcsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new FHIR store with sensitive information de-identified. */
	export interface DeidentifyFhirStoreRequest {

		/** Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime. */
		config?: DeidentifyConfig;

		/** The name of the FHIR store to create and write the redacted data to. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`. * The destination dataset must exist. * The source dataset and destination dataset must both reside in the same location. De-identifying data across multiple locations is not supported. * The destination FHIR store must exist. * The caller must have the healthcare.fhirResources.update permission to write to the destination FHIR store. */
		destinationStore?: string | null;

		/** Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified. */
		gcsConfigUri?: string | null;

		/** Filter configuration. */
		resourceFilter?: FhirFilter;

		/** If true, skips resources that are created or modified after the de-identify operation is created. */
		skipModifiedResources?: boolean | null;
	}

	/** Creates a new FHIR store with sensitive information de-identified. */
	export interface DeidentifyFhirStoreRequestFormProperties {

		/** The name of the FHIR store to create and write the redacted data to. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`. * The destination dataset must exist. * The source dataset and destination dataset must both reside in the same location. De-identifying data across multiple locations is not supported. * The destination FHIR store must exist. * The caller must have the healthcare.fhirResources.update permission to write to the destination FHIR store. */
		destinationStore: FormControl<string | null | undefined>,

		/** Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified. */
		gcsConfigUri: FormControl<string | null | undefined>,

		/** If true, skips resources that are created or modified after the de-identify operation is created. */
		skipModifiedResources: FormControl<boolean | null | undefined>,
	}
	export function CreateDeidentifyFhirStoreRequestFormGroup() {
		return new FormGroup<DeidentifyFhirStoreRequestFormProperties>({
			destinationStore: new FormControl<string | null | undefined>(undefined),
			gcsConfigUri: new FormControl<string | null | undefined>(undefined),
			skipModifiedResources: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Filter configuration. */
	export interface FhirFilter {

		/** A list of FHIR resources. */
		resources?: Resources;
	}

	/** Filter configuration. */
	export interface FhirFilterFormProperties {
	}
	export function CreateFhirFilterFormGroup() {
		return new FormGroup<FhirFilterFormProperties>({
		});

	}


	/** A list of FHIR resources. */
	export interface Resources {

		/** List of resources IDs. For example, "Patient/1234". */
		resources?: Array<string>;
	}

	/** A list of FHIR resources. */
	export interface ResourcesFormProperties {
	}
	export function CreateResourcesFormGroup() {
		return new FormGroup<ResourcesFormProperties>({
		});

	}


	/** Contains a summary of the Deidentify operation. */
	export interface DeidentifySummary {
	}

	/** Contains a summary of the Deidentify operation. */
	export interface DeidentifySummaryFormProperties {
	}
	export function CreateDeidentifySummaryFormGroup() {
		return new FormGroup<DeidentifySummaryFormProperties>({
		});

	}


	/** Represents a DICOM store. */
	export interface DicomStore {

		/** User-supplied key-value pairs used to organize DICOM stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. */
		labels?: {[id: string]: string };

		/** Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`. */
		name?: string | null;

		/** Specifies where to send notifications upon changes to a data store. */
		notificationConfig?: NotificationConfig;

		/** Optional. A list of streaming configs used to configure the destination of streaming exports for every DICOM instance insertion in this DICOM store. After a new config is added to `stream_configs`, DICOM instance insertions are streamed to the new destination. When a config is removed from `stream_configs`, the server stops streaming to that destination. Each config must contain a unique destination. */
		streamConfigs?: Array<GoogleCloudHealthcareV1DicomStreamConfig>;
	}

	/** Represents a DICOM store. */
	export interface DicomStoreFormProperties {

		/** User-supplied key-value pairs used to organize DICOM stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDicomStoreFormGroup() {
		return new FormGroup<DicomStoreFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies where to send notifications upon changes to a data store. */
	export interface NotificationConfig {

		/** The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. PubsubMessage.Data contains the resource name. PubsubMessage.MessageId is the ID of this message. It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message was published. Notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. Cloud Healthcare API service account must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. If a notification can't be published to Pub/Sub, errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). If the number of errors exceeds a certain rate, some aren't submitted. Note that not all operations trigger notifications, see [Configuring Pub/Sub notifications](https://cloud.google.com/healthcare/docs/how-tos/pubsub) for specific details. */
		pubsubTopic?: string | null;

		/** Indicates whether or not to send Pub/Sub notifications on bulk import. Only supported for DICOM imports. */
		sendForBulkImport?: boolean | null;
	}

	/** Specifies where to send notifications upon changes to a data store. */
	export interface NotificationConfigFormProperties {

		/** The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. PubsubMessage.Data contains the resource name. PubsubMessage.MessageId is the ID of this message. It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message was published. Notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. Cloud Healthcare API service account must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. If a notification can't be published to Pub/Sub, errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). If the number of errors exceeds a certain rate, some aren't submitted. Note that not all operations trigger notifications, see [Configuring Pub/Sub notifications](https://cloud.google.com/healthcare/docs/how-tos/pubsub) for specific details. */
		pubsubTopic: FormControl<string | null | undefined>,

		/** Indicates whether or not to send Pub/Sub notifications on bulk import. Only supported for DICOM imports. */
		sendForBulkImport: FormControl<boolean | null | undefined>,
	}
	export function CreateNotificationConfigFormGroup() {
		return new FormGroup<NotificationConfigFormProperties>({
			pubsubTopic: new FormControl<string | null | undefined>(undefined),
			sendForBulkImport: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** StreamConfig specifies configuration for a streaming DICOM export. */
	export interface GoogleCloudHealthcareV1DicomStreamConfig {

		/** The BigQuery table where the server writes the output. */
		bigqueryDestination?: GoogleCloudHealthcareV1DicomBigQueryDestination;
	}

	/** StreamConfig specifies configuration for a streaming DICOM export. */
	export interface GoogleCloudHealthcareV1DicomStreamConfigFormProperties {
	}
	export function CreateGoogleCloudHealthcareV1DicomStreamConfigFormGroup() {
		return new FormGroup<GoogleCloudHealthcareV1DicomStreamConfigFormProperties>({
		});

	}


	/** The BigQuery table where the server writes the output. */
	export interface GoogleCloudHealthcareV1DicomBigQueryDestination {

		/** Use `write_disposition` instead. If `write_disposition` is specified, this parameter is ignored. force=false is equivalent to write_disposition=WRITE_EMPTY and force=true is equivalent to write_disposition=WRITE_TRUNCATE. */
		force?: boolean | null;

		/** BigQuery URI to a table, up to 2000 characters long, in the format `bq://projectId.bqDatasetId.tableId` */
		tableUri?: string | null;

		/** Determines whether the existing table in the destination is to be overwritten or appended to. If a write_disposition is specified, the `force` parameter is ignored. */
		writeDisposition?: GoogleCloudHealthcareV1DicomBigQueryDestinationWriteDisposition | null;
	}

	/** The BigQuery table where the server writes the output. */
	export interface GoogleCloudHealthcareV1DicomBigQueryDestinationFormProperties {

		/** Use `write_disposition` instead. If `write_disposition` is specified, this parameter is ignored. force=false is equivalent to write_disposition=WRITE_EMPTY and force=true is equivalent to write_disposition=WRITE_TRUNCATE. */
		force: FormControl<boolean | null | undefined>,

		/** BigQuery URI to a table, up to 2000 characters long, in the format `bq://projectId.bqDatasetId.tableId` */
		tableUri: FormControl<string | null | undefined>,

		/** Determines whether the existing table in the destination is to be overwritten or appended to. If a write_disposition is specified, the `force` parameter is ignored. */
		writeDisposition: FormControl<GoogleCloudHealthcareV1DicomBigQueryDestinationWriteDisposition | null | undefined>,
	}
	export function CreateGoogleCloudHealthcareV1DicomBigQueryDestinationFormGroup() {
		return new FormGroup<GoogleCloudHealthcareV1DicomBigQueryDestinationFormProperties>({
			force: new FormControl<boolean | null | undefined>(undefined),
			tableUri: new FormControl<string | null | undefined>(undefined),
			writeDisposition: new FormControl<GoogleCloudHealthcareV1DicomBigQueryDestinationWriteDisposition | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudHealthcareV1DicomBigQueryDestinationWriteDisposition { WRITE_DISPOSITION_UNSPECIFIED = 0, WRITE_EMPTY = 1, WRITE_TRUNCATE = 2, WRITE_APPEND = 3 }


	/** DicomStoreMetrics contains metrics describing a DICOM store. */
	export interface DicomStoreMetrics {

		/** Total blob storage bytes for all instances in the store. */
		blobStorageSizeBytes?: string | null;

		/** Number of instances in the store. */
		instanceCount?: string | null;

		/** Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`. */
		name?: string | null;

		/** Number of series in the store. */
		seriesCount?: string | null;

		/** Total structured storage bytes for all instances in the store. */
		structuredStorageSizeBytes?: string | null;

		/** Number of studies in the store. */
		studyCount?: string | null;
	}

	/** DicomStoreMetrics contains metrics describing a DICOM store. */
	export interface DicomStoreMetricsFormProperties {

		/** Total blob storage bytes for all instances in the store. */
		blobStorageSizeBytes: FormControl<string | null | undefined>,

		/** Number of instances in the store. */
		instanceCount: FormControl<string | null | undefined>,

		/** Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`. */
		name: FormControl<string | null | undefined>,

		/** Number of series in the store. */
		seriesCount: FormControl<string | null | undefined>,

		/** Total structured storage bytes for all instances in the store. */
		structuredStorageSizeBytes: FormControl<string | null | undefined>,

		/** Number of studies in the store. */
		studyCount: FormControl<string | null | undefined>,
	}
	export function CreateDicomStoreMetricsFormGroup() {
		return new FormGroup<DicomStoreMetricsFormProperties>({
			blobStorageSizeBytes: new FormControl<string | null | undefined>(undefined),
			instanceCount: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			seriesCount: new FormControl<string | null | undefined>(undefined),
			structuredStorageSizeBytes: new FormControl<string | null | undefined>(undefined),
			studyCount: new FormControl<string | null | undefined>(undefined),
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


	/** Evaluate a user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, causing slight delays between the time mappings are created or updated and when they are included in EvaluateUserConsents results. */
	export interface EvaluateUserConsentsRequest {

		/** List of resource names of Consent resources. */
		consentList?: ConsentList;

		/** Optional. Limit on the number of User data mappings to return in a single response. If not specified, 100 is used. May not be larger than 1000. */
		pageSize?: number | null;

		/** Optional. Token to retrieve the next page of results, or empty to get the first page. */
		pageToken?: string | null;

		/** Required. The values of request attributes associated with this access request. */
		requestAttributes?: {[id: string]: string };

		/** Optional. The values of resource attributes associated with the resources being requested. If no values are specified, then all resources are queried. */
		resourceAttributes?: {[id: string]: string };

		/** Optional. The view for EvaluateUserConsentsResponse. If unspecified, defaults to `BASIC` and returns `consented` as `TRUE` or `FALSE`. */
		responseView?: CheckDataAccessRequestResponseView | null;

		/** Required. User ID to evaluate consents for. */
		userId?: string | null;
	}

	/** Evaluate a user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, causing slight delays between the time mappings are created or updated and when they are included in EvaluateUserConsents results. */
	export interface EvaluateUserConsentsRequestFormProperties {

		/** Optional. Limit on the number of User data mappings to return in a single response. If not specified, 100 is used. May not be larger than 1000. */
		pageSize: FormControl<number | null | undefined>,

		/** Optional. Token to retrieve the next page of results, or empty to get the first page. */
		pageToken: FormControl<string | null | undefined>,

		/** Required. The values of request attributes associated with this access request. */
		requestAttributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The values of resource attributes associated with the resources being requested. If no values are specified, then all resources are queried. */
		resourceAttributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The view for EvaluateUserConsentsResponse. If unspecified, defaults to `BASIC` and returns `consented` as `TRUE` or `FALSE`. */
		responseView: FormControl<CheckDataAccessRequestResponseView | null | undefined>,

		/** Required. User ID to evaluate consents for. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateUserConsentsRequestFormGroup() {
		return new FormGroup<EvaluateUserConsentsRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			requestAttributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			resourceAttributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			responseView: new FormControl<CheckDataAccessRequestResponseView | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EvaluateUserConsentsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. This token is valid for 72 hours after it is created. */
		nextPageToken?: string | null;

		/** The consent evaluation result for each `data_id`. */
		results?: Array<Result>;
	}
	export interface EvaluateUserConsentsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. This token is valid for 72 hours after it is created. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateUserConsentsResponseFormGroup() {
		return new FormGroup<EvaluateUserConsentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The consent evaluation result for a single `data_id`. */
	export interface Result {

		/** The resource names of all evaluated Consents mapped to their evaluation. */
		consentDetails?: {[id: string]: ConsentEvaluation };

		/** Whether the resource is consented for the given use. */
		consented?: boolean | null;

		/** The unique identifier of the evaluated resource. */
		dataId?: string | null;
	}

	/** The consent evaluation result for a single `data_id`. */
	export interface ResultFormProperties {

		/** The resource names of all evaluated Consents mapped to their evaluation. */
		consentDetails: FormControl<{[id: string]: ConsentEvaluation } | null | undefined>,

		/** Whether the resource is consented for the given use. */
		consented: FormControl<boolean | null | undefined>,

		/** The unique identifier of the evaluated resource. */
		dataId: FormControl<string | null | undefined>,
	}
	export function CreateResultFormGroup() {
		return new FormGroup<ResultFormProperties>({
			consentDetails: new FormControl<{[id: string]: ConsentEvaluation } | null | undefined>(undefined),
			consented: new FormControl<boolean | null | undefined>(undefined),
			dataId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Exports data from the specified DICOM store. If a given resource, such as a DICOM object with the same SOPInstance UID, already exists in the output, it is overwritten with the version in the source dataset. Exported DICOM data persists when the DICOM store from which it was exported is deleted. */
	export interface ExportDicomDataRequest {

		/** The BigQuery table where the server writes the output. */
		bigqueryDestination?: GoogleCloudHealthcareV1DicomBigQueryDestination;

		/** The Cloud Storage location where the server writes the output and the export configuration. */
		gcsDestination?: GoogleCloudHealthcareV1DicomGcsDestination;
	}

	/** Exports data from the specified DICOM store. If a given resource, such as a DICOM object with the same SOPInstance UID, already exists in the output, it is overwritten with the version in the source dataset. Exported DICOM data persists when the DICOM store from which it was exported is deleted. */
	export interface ExportDicomDataRequestFormProperties {
	}
	export function CreateExportDicomDataRequestFormGroup() {
		return new FormGroup<ExportDicomDataRequestFormProperties>({
		});

	}


	/** The Cloud Storage location where the server writes the output and the export configuration. */
	export interface GoogleCloudHealthcareV1DicomGcsDestination {

		/** MIME types supported by DICOM spec. Each file is written in the following format: `.../{study_id}/{series_id}/{instance_id}[/{frame_number}].{extension}` The frame_number component exists only for multi-frame instances. Supported MIME types are consistent with supported formats in DICOMweb: https://cloud.google.com/healthcare/docs/dicom#retrieve_transaction. Specifically, the following are supported: - application/dicom; transfer-syntax=1.2.840.10008.1.2.1 (uncompressed DICOM) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.50 (DICOM with embedded JPEG Baseline) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.90 (DICOM with embedded JPEG 2000 Lossless Only) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.91 (DICOM with embedded JPEG 2000) - application/dicom; transfer-syntax=* (DICOM with no transcoding) - application/octet-stream; transfer-syntax=1.2.840.10008.1.2.1 (raw uncompressed PixelData) - application/octet-stream; transfer-syntax=* (raw PixelData in whatever format it was uploaded in) - image/jpeg; transfer-syntax=1.2.840.10008.1.2.4.50 (Consumer JPEG) - image/png The following extensions are used for output files: - application/dicom -> .dcm - image/jpeg -> .jpg - image/png -> .png - application/octet-stream -> no extension If unspecified, the instances are exported in the original DICOM format they were uploaded in. */
		mimeType?: string | null;

		/** The Cloud Storage destination to export to. URI for a Cloud Storage directory where the server writes the result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`). If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`. */
		uriPrefix?: string | null;
	}

	/** The Cloud Storage location where the server writes the output and the export configuration. */
	export interface GoogleCloudHealthcareV1DicomGcsDestinationFormProperties {

		/** MIME types supported by DICOM spec. Each file is written in the following format: `.../{study_id}/{series_id}/{instance_id}[/{frame_number}].{extension}` The frame_number component exists only for multi-frame instances. Supported MIME types are consistent with supported formats in DICOMweb: https://cloud.google.com/healthcare/docs/dicom#retrieve_transaction. Specifically, the following are supported: - application/dicom; transfer-syntax=1.2.840.10008.1.2.1 (uncompressed DICOM) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.50 (DICOM with embedded JPEG Baseline) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.90 (DICOM with embedded JPEG 2000 Lossless Only) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.91 (DICOM with embedded JPEG 2000) - application/dicom; transfer-syntax=* (DICOM with no transcoding) - application/octet-stream; transfer-syntax=1.2.840.10008.1.2.1 (raw uncompressed PixelData) - application/octet-stream; transfer-syntax=* (raw PixelData in whatever format it was uploaded in) - image/jpeg; transfer-syntax=1.2.840.10008.1.2.4.50 (Consumer JPEG) - image/png The following extensions are used for output files: - application/dicom -> .dcm - image/jpeg -> .jpg - image/png -> .png - application/octet-stream -> no extension If unspecified, the instances are exported in the original DICOM format they were uploaded in. */
		mimeType: FormControl<string | null | undefined>,

		/** The Cloud Storage destination to export to. URI for a Cloud Storage directory where the server writes the result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`). If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`. */
		uriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudHealthcareV1DicomGcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudHealthcareV1DicomGcsDestinationFormProperties>({
			mimeType: new FormControl<string | null | undefined>(undefined),
			uriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns additional information in regards to a completed DICOM store export. */
	export interface ExportDicomDataResponse {
	}

	/** Returns additional information in regards to a completed DICOM store export. */
	export interface ExportDicomDataResponseFormProperties {
	}
	export function CreateExportDicomDataResponseFormGroup() {
		return new FormGroup<ExportDicomDataResponseFormProperties>({
		});

	}


	/** Request to schedule an export. */
	export interface ExportMessagesRequest {

		/** The end of the range in `send_time` (MSH.7, https://www.hl7.org/documentcenter/public_temp_2E58C1F9-1C23-BA17-0C6126475344DA9D/wg/conf/HL7MSH.htm) to process. If not specified, the time when the export is scheduled is used. This value has to come after the `start_time` defined below. Only messages whose `send_time` lies in the range `start_time` (inclusive) to `end_time` (exclusive) are exported. */
		endTime?: string | null;

		/** Restricts messages exported to those matching a filter, only applicable to PubsubDestination. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in the `yyyy-mm-dd` format. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, and is just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The following fields and functions are available for filtering: * `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. * `send_date` or `sendDate`, the `yyyy-mm-dd` date the message was sent in the dataset's time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. * `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. * `create_time`, the timestamp when the message was created in the HL7v2 store. Use the RFC3339 time format for comparisons. For example, `create_time < "2017-01-02T00:00:00-05:00"`. * `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. Note: The filter will be applied to every message in the HL7v2 store whose `send_time` lies in the range defined by the `start_time` and the `end_time`. Even if the filter only matches a small set of messages, the export operation can still take a long time to finish when a lot of messages are between the specified `start_time` and `end_time` range. */
		filter?: string | null;

		/** The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location. */
		gcsDestination?: GcsDestination;

		/** The Pub/Sub output destination. The Cloud Healthcare Service Agent requires the `roles/pubsub.publisher` Cloud IAM role on the Pub/Sub topic. */
		pubsubDestination?: PubsubDestination;

		/** The start of the range in `send_time` (MSH.7, https://www.hl7.org/documentcenter/public_temp_2E58C1F9-1C23-BA17-0C6126475344DA9D/wg/conf/HL7MSH.htm) to process. If not specified, the UNIX epoch (1970-01-01T00:00:00Z) is used. This value has to come before the `end_time` defined below. Only messages whose `send_time` lies in the range `start_time` (inclusive) to `end_time` (exclusive) are exported. */
		startTime?: string | null;
	}

	/** Request to schedule an export. */
	export interface ExportMessagesRequestFormProperties {

		/** The end of the range in `send_time` (MSH.7, https://www.hl7.org/documentcenter/public_temp_2E58C1F9-1C23-BA17-0C6126475344DA9D/wg/conf/HL7MSH.htm) to process. If not specified, the time when the export is scheduled is used. This value has to come after the `start_time` defined below. Only messages whose `send_time` lies in the range `start_time` (inclusive) to `end_time` (exclusive) are exported. */
		endTime: FormControl<string | null | undefined>,

		/** Restricts messages exported to those matching a filter, only applicable to PubsubDestination. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in the `yyyy-mm-dd` format. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, and is just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The following fields and functions are available for filtering: * `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. * `send_date` or `sendDate`, the `yyyy-mm-dd` date the message was sent in the dataset's time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. * `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. * `create_time`, the timestamp when the message was created in the HL7v2 store. Use the RFC3339 time format for comparisons. For example, `create_time < "2017-01-02T00:00:00-05:00"`. * `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. Note: The filter will be applied to every message in the HL7v2 store whose `send_time` lies in the range defined by the `start_time` and the `end_time`. Even if the filter only matches a small set of messages, the export operation can still take a long time to finish when a lot of messages are between the specified `start_time` and `end_time` range. */
		filter: FormControl<string | null | undefined>,

		/** The start of the range in `send_time` (MSH.7, https://www.hl7.org/documentcenter/public_temp_2E58C1F9-1C23-BA17-0C6126475344DA9D/wg/conf/HL7MSH.htm) to process. If not specified, the UNIX epoch (1970-01-01T00:00:00Z) is used. This value has to come before the `end_time` defined below. Only messages whose `send_time` lies in the range `start_time` (inclusive) to `end_time` (exclusive) are exported. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateExportMessagesRequestFormGroup() {
		return new FormGroup<ExportMessagesRequestFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location. */
	export interface GcsDestination {

		/** The format of the exported HL7v2 message files. */
		contentStructure?: GcsDestinationContentStructure | null;

		/** Specifies the parts of the Message resource to include in the export. If not specified, FULL is used. */
		messageView?: GcsDestinationMessageView | null;

		/** URI of an existing Cloud Storage directory where the server writes result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`. If there is no trailing slash, the service appends one when composing the object path. */
		uriPrefix?: string | null;
	}

	/** The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location. */
	export interface GcsDestinationFormProperties {

		/** The format of the exported HL7v2 message files. */
		contentStructure: FormControl<GcsDestinationContentStructure | null | undefined>,

		/** Specifies the parts of the Message resource to include in the export. If not specified, FULL is used. */
		messageView: FormControl<GcsDestinationMessageView | null | undefined>,

		/** URI of an existing Cloud Storage directory where the server writes result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`. If there is no trailing slash, the service appends one when composing the object path. */
		uriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGcsDestinationFormGroup() {
		return new FormGroup<GcsDestinationFormProperties>({
			contentStructure: new FormControl<GcsDestinationContentStructure | null | undefined>(undefined),
			messageView: new FormControl<GcsDestinationMessageView | null | undefined>(undefined),
			uriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GcsDestinationContentStructure { CONTENT_STRUCTURE_UNSPECIFIED = 0, MESSAGE_JSON = 1 }

	export enum GcsDestinationMessageView { MESSAGE_VIEW_UNSPECIFIED = 0, RAW_ONLY = 1, PARSED_ONLY = 2, FULL = 3, SCHEMATIZED_ONLY = 4, BASIC = 5 }


	/** The Pub/Sub output destination. The Cloud Healthcare Service Agent requires the `roles/pubsub.publisher` Cloud IAM role on the Pub/Sub topic. */
	export interface PubsubDestination {

		/** The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that Pub/Sub messages are published on. Supplied by the client. The `PubsubMessage` contains the following fields: * `PubsubMessage.Data` contains the resource name. * `PubsubMessage.MessageId` is the ID of this notification. It is guaranteed to be unique within the topic. * `PubsubMessage.PublishTime` is the time when the message was published. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. The Cloud Healthcare API service account, service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com, must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. */
		pubsubTopic?: string | null;
	}

	/** The Pub/Sub output destination. The Cloud Healthcare Service Agent requires the `roles/pubsub.publisher` Cloud IAM role on the Pub/Sub topic. */
	export interface PubsubDestinationFormProperties {

		/** The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that Pub/Sub messages are published on. Supplied by the client. The `PubsubMessage` contains the following fields: * `PubsubMessage.Data` contains the resource name. * `PubsubMessage.MessageId` is the ID of this notification. It is guaranteed to be unique within the topic. * `PubsubMessage.PublishTime` is the time when the message was published. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. The Cloud Healthcare API service account, service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com, must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. */
		pubsubTopic: FormControl<string | null | undefined>,
	}
	export function CreatePubsubDestinationFormGroup() {
		return new FormGroup<PubsubDestinationFormProperties>({
			pubsubTopic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Final response for the export operation. This structure is included in the response to describe the detailed outcome. */
	export interface ExportMessagesResponse {
	}

	/** Final response for the export operation. This structure is included in the response to describe the detailed outcome. */
	export interface ExportMessagesResponseFormProperties {
	}
	export function CreateExportMessagesResponseFormGroup() {
		return new FormGroup<ExportMessagesResponseFormProperties>({
		});

	}


	/** Request to export resources. */
	export interface ExportResourcesRequest {

		/** If provided, only resources updated after this time are exported. The time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, `2015-02-07T13:28:17.239+02:00` or `2017-01-01T00:00:00Z`. The time must be specified to the second and include a time zone. */
		_since?: string | null;

		/** String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are exported. */
		_type?: string | null;

		/** The configuration for exporting to BigQuery. */
		bigqueryDestination?: GoogleCloudHealthcareV1FhirBigQueryDestination;

		/** The configuration for exporting to Cloud Storage. */
		gcsDestination?: GoogleCloudHealthcareV1FhirGcsDestination;
	}

	/** Request to export resources. */
	export interface ExportResourcesRequestFormProperties {

		/** If provided, only resources updated after this time are exported. The time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, `2015-02-07T13:28:17.239+02:00` or `2017-01-01T00:00:00Z`. The time must be specified to the second and include a time zone. */
		_since: FormControl<string | null | undefined>,

		/** String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are exported. */
		_type: FormControl<string | null | undefined>,
	}
	export function CreateExportResourcesRequestFormGroup() {
		return new FormGroup<ExportResourcesRequestFormProperties>({
			_since: new FormControl<string | null | undefined>(undefined),
			_type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for exporting to BigQuery. */
	export interface GoogleCloudHealthcareV1FhirBigQueryDestination {

		/** BigQuery URI to an existing dataset, up to 2000 characters long, in the format `bq://projectId.bqDatasetId`. */
		datasetUri?: string | null;

		/** If this flag is `TRUE`, all tables are deleted from the dataset before the new exported tables are written. If the flag is not set and the destination dataset contains tables, the export call returns an error. If `write_disposition` is specified, this parameter is ignored. force=false is equivalent to write_disposition=WRITE_EMPTY and force=true is equivalent to write_disposition=WRITE_TRUNCATE. */
		force?: boolean | null;

		/** Configuration for the FHIR BigQuery schema. Determines how the server generates the schema. */
		schemaConfig?: SchemaConfig;

		/** Determines if existing data in the destination dataset is overwritten, appended to, or not written if the tables contain data. If a write_disposition is specified, the `force` parameter is ignored. */
		writeDisposition?: GoogleCloudHealthcareV1DicomBigQueryDestinationWriteDisposition | null;
	}

	/** The configuration for exporting to BigQuery. */
	export interface GoogleCloudHealthcareV1FhirBigQueryDestinationFormProperties {

		/** BigQuery URI to an existing dataset, up to 2000 characters long, in the format `bq://projectId.bqDatasetId`. */
		datasetUri: FormControl<string | null | undefined>,

		/** If this flag is `TRUE`, all tables are deleted from the dataset before the new exported tables are written. If the flag is not set and the destination dataset contains tables, the export call returns an error. If `write_disposition` is specified, this parameter is ignored. force=false is equivalent to write_disposition=WRITE_EMPTY and force=true is equivalent to write_disposition=WRITE_TRUNCATE. */
		force: FormControl<boolean | null | undefined>,

		/** Determines if existing data in the destination dataset is overwritten, appended to, or not written if the tables contain data. If a write_disposition is specified, the `force` parameter is ignored. */
		writeDisposition: FormControl<GoogleCloudHealthcareV1DicomBigQueryDestinationWriteDisposition | null | undefined>,
	}
	export function CreateGoogleCloudHealthcareV1FhirBigQueryDestinationFormGroup() {
		return new FormGroup<GoogleCloudHealthcareV1FhirBigQueryDestinationFormProperties>({
			datasetUri: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
			writeDisposition: new FormControl<GoogleCloudHealthcareV1DicomBigQueryDestinationWriteDisposition | null | undefined>(undefined),
		});

	}


	/** Configuration for the FHIR BigQuery schema. Determines how the server generates the schema. */
	export interface SchemaConfig {

		/** Configuration for FHIR BigQuery time-partitioned tables. */
		lastUpdatedPartitionConfig?: TimePartitioning;

		/** The depth for all recursive structures in the output analytics schema. For example, `concept` in the CodeSystem resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called `concept.concept` but not `concept.concept.concept`. If not specified or set to 0, the server will use the default value 2. The maximum depth allowed is 5. */
		recursiveStructureDepth?: string | null;

		/** Specifies the output schema type. Schema type is required. */
		schemaType?: SchemaConfigSchemaType | null;
	}

	/** Configuration for the FHIR BigQuery schema. Determines how the server generates the schema. */
	export interface SchemaConfigFormProperties {

		/** The depth for all recursive structures in the output analytics schema. For example, `concept` in the CodeSystem resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called `concept.concept` but not `concept.concept.concept`. If not specified or set to 0, the server will use the default value 2. The maximum depth allowed is 5. */
		recursiveStructureDepth: FormControl<string | null | undefined>,

		/** Specifies the output schema type. Schema type is required. */
		schemaType: FormControl<SchemaConfigSchemaType | null | undefined>,
	}
	export function CreateSchemaConfigFormGroup() {
		return new FormGroup<SchemaConfigFormProperties>({
			recursiveStructureDepth: new FormControl<string | null | undefined>(undefined),
			schemaType: new FormControl<SchemaConfigSchemaType | null | undefined>(undefined),
		});

	}


	/** Configuration for FHIR BigQuery time-partitioned tables. */
	export interface TimePartitioning {

		/** Number of milliseconds for which to keep the storage for a partition. */
		expirationMs?: string | null;

		/** Type of partitioning. */
		type?: TimePartitioningType | null;
	}

	/** Configuration for FHIR BigQuery time-partitioned tables. */
	export interface TimePartitioningFormProperties {

		/** Number of milliseconds for which to keep the storage for a partition. */
		expirationMs: FormControl<string | null | undefined>,

		/** Type of partitioning. */
		type: FormControl<TimePartitioningType | null | undefined>,
	}
	export function CreateTimePartitioningFormGroup() {
		return new FormGroup<TimePartitioningFormProperties>({
			expirationMs: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TimePartitioningType | null | undefined>(undefined),
		});

	}

	export enum TimePartitioningType { PARTITION_TYPE_UNSPECIFIED = 0, HOUR = 1, DAY = 2, MONTH = 3, YEAR = 4 }

	export enum SchemaConfigSchemaType { SCHEMA_TYPE_UNSPECIFIED = 0, ANALYTICS = 1, ANALYTICS_V2 = 2 }


	/** The configuration for exporting to Cloud Storage. */
	export interface GoogleCloudHealthcareV1FhirGcsDestination {

		/** URI for a Cloud Storage directory where result files should be written, in the format of `gs://{bucket-id}/{path/to/destination/dir}`. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`. */
		uriPrefix?: string | null;
	}

	/** The configuration for exporting to Cloud Storage. */
	export interface GoogleCloudHealthcareV1FhirGcsDestinationFormProperties {

		/** URI for a Cloud Storage directory where result files should be written, in the format of `gs://{bucket-id}/{path/to/destination/dir}`. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`. */
		uriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudHealthcareV1FhirGcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudHealthcareV1FhirGcsDestinationFormProperties>({
			uriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response when all resources export successfully. This structure is included in the response to describe the detailed outcome after the operation finishes successfully. */
	export interface ExportResourcesResponse {
	}

	/** Response when all resources export successfully. This structure is included in the response to describe the detailed outcome after the operation finishes successfully. */
	export interface ExportResourcesResponseFormProperties {
	}
	export function CreateExportResourcesResponseFormGroup() {
		return new FormGroup<ExportResourcesResponseFormProperties>({
		});

	}


	/** Contains the configuration for FHIR notifications. */
	export interface FhirNotificationConfig {

		/** The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. The notification is a `PubsubMessage` with the following fields: * `PubsubMessage.Data` contains the resource name. * `PubsubMessage.MessageId` is the ID of this notification. It is guaranteed to be unique within the topic. * `PubsubMessage.PublishTime` is the time when the message was published. Note that notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. The Cloud Healthcare API service account, service-@gcp-sa-healthcare.iam.gserviceaccount.com, must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail (https://cloud.google.com/healthcare-api/docs/permissions-healthcare-api-gcp-products#dicom_fhir_and_hl7v2_store_cloud_pubsub_permissions). If a notification can't be published to Pub/Sub, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare-api/docs/how-tos/logging). */
		pubsubTopic?: string | null;

		/** Whether to send full FHIR resource to this Pub/Sub topic. */
		sendFullResource?: boolean | null;

		/** Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource. Note that setting this to true does not guarantee that all previous resources will be sent in the format of full FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be sent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full previous resource as a separate operation. */
		sendPreviousResourceOnDelete?: boolean | null;
	}

	/** Contains the configuration for FHIR notifications. */
	export interface FhirNotificationConfigFormProperties {

		/** The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. The notification is a `PubsubMessage` with the following fields: * `PubsubMessage.Data` contains the resource name. * `PubsubMessage.MessageId` is the ID of this notification. It is guaranteed to be unique within the topic. * `PubsubMessage.PublishTime` is the time when the message was published. Note that notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. The Cloud Healthcare API service account, service-@gcp-sa-healthcare.iam.gserviceaccount.com, must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail (https://cloud.google.com/healthcare-api/docs/permissions-healthcare-api-gcp-products#dicom_fhir_and_hl7v2_store_cloud_pubsub_permissions). If a notification can't be published to Pub/Sub, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare-api/docs/how-tos/logging). */
		pubsubTopic: FormControl<string | null | undefined>,

		/** Whether to send full FHIR resource to this Pub/Sub topic. */
		sendFullResource: FormControl<boolean | null | undefined>,

		/** Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource. Note that setting this to true does not guarantee that all previous resources will be sent in the format of full FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be sent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full previous resource as a separate operation. */
		sendPreviousResourceOnDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateFhirNotificationConfigFormGroup() {
		return new FormGroup<FhirNotificationConfigFormProperties>({
			pubsubTopic: new FormControl<string | null | undefined>(undefined),
			sendFullResource: new FormControl<boolean | null | undefined>(undefined),
			sendPreviousResourceOnDelete: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a FHIR store. */
	export interface FhirStore {

		/** Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. */
		complexDataTypeReferenceParsing?: FhirStoreComplexDataTypeReferenceParsing | null;

		/** If true, overrides the default search behavior for this FHIR store to `handling=strict` which returns an error for unrecognized search parameters. If false, uses the FHIR specification default `handling=lenient` which ignores unrecognized search parameters. The handling can always be changed from the default on an individual API call by setting the HTTP header `Prefer: handling=strict` or `Prefer: handling=lenient`. */
		defaultSearchHandlingStrict?: boolean | null;

		/** Immutable. Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store creation. The default value is false, meaning that the API enforces referential integrity and fails the requests that result in inconsistent state in the FHIR store. When this field is set to true, the API skips referential integrity checks. Consequently, operations that rely on references, such as GetPatientEverything, do not return all the results if broken references exist. */
		disableReferentialIntegrity?: boolean | null;

		/** Immutable. Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation of FHIR store. If set to false, which is the default behavior, all write operations cause historical versions to be recorded automatically. The historical versions can be fetched through the history APIs, but cannot be updated. If set to true, no historical versions are kept. The server sends errors for attempts to read the historical versions. */
		disableResourceVersioning?: boolean | null;

		/** Whether this FHIR store has the [updateCreate capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate). This determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to update a non-existent resource return errors. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud audit logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. */
		enableUpdateCreate?: boolean | null;

		/** User-supplied key-value pairs used to organize FHIR stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. */
		labels?: {[id: string]: string };

		/** Output only. Resource name of the FHIR store, of the form `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`. */
		name?: string | null;

		/** Specifies where to send notifications upon changes to a data store. */
		notificationConfig?: NotificationConfig;

		/** Specifies where and whether to send notifications upon changes to a FHIR store. */
		notificationConfigs?: Array<FhirNotificationConfig>;

		/** A list of streaming configs that configure the destinations of streaming export for every resource mutation in this FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next resource mutation is streamed to the new location in addition to the existing ones. When a location is removed from the list, the server stops streaming to that location. Before adding a new config, you must add the required [`bigquery.dataEditor`](https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor) role to your project's **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/iam/docs/service-accounts). Some lag (typically on the order of dozens of seconds) is expected before the results show up in the streaming destination. */
		streamConfigs?: Array<StreamConfig>;

		/** Contains the configuration for FHIR profiles and validation. */
		validationConfig?: ValidationConfig;

		/** Immutable. The FHIR specification version that this FHIR store supports natively. This field is immutable after store creation. Requests are rejected if they contain FHIR resources of a different version. Version is required for every FHIR store. */
		version?: FhirStoreVersion | null;
	}

	/** Represents a FHIR store. */
	export interface FhirStoreFormProperties {

		/** Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. */
		complexDataTypeReferenceParsing: FormControl<FhirStoreComplexDataTypeReferenceParsing | null | undefined>,

		/** If true, overrides the default search behavior for this FHIR store to `handling=strict` which returns an error for unrecognized search parameters. If false, uses the FHIR specification default `handling=lenient` which ignores unrecognized search parameters. The handling can always be changed from the default on an individual API call by setting the HTTP header `Prefer: handling=strict` or `Prefer: handling=lenient`. */
		defaultSearchHandlingStrict: FormControl<boolean | null | undefined>,

		/** Immutable. Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store creation. The default value is false, meaning that the API enforces referential integrity and fails the requests that result in inconsistent state in the FHIR store. When this field is set to true, the API skips referential integrity checks. Consequently, operations that rely on references, such as GetPatientEverything, do not return all the results if broken references exist. */
		disableReferentialIntegrity: FormControl<boolean | null | undefined>,

		/** Immutable. Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation of FHIR store. If set to false, which is the default behavior, all write operations cause historical versions to be recorded automatically. The historical versions can be fetched through the history APIs, but cannot be updated. If set to true, no historical versions are kept. The server sends errors for attempts to read the historical versions. */
		disableResourceVersioning: FormControl<boolean | null | undefined>,

		/** Whether this FHIR store has the [updateCreate capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate). This determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to update a non-existent resource return errors. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud audit logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. */
		enableUpdateCreate: FormControl<boolean | null | undefined>,

		/** User-supplied key-value pairs used to organize FHIR stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Resource name of the FHIR store, of the form `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The FHIR specification version that this FHIR store supports natively. This field is immutable after store creation. Requests are rejected if they contain FHIR resources of a different version. Version is required for every FHIR store. */
		version: FormControl<FhirStoreVersion | null | undefined>,
	}
	export function CreateFhirStoreFormGroup() {
		return new FormGroup<FhirStoreFormProperties>({
			complexDataTypeReferenceParsing: new FormControl<FhirStoreComplexDataTypeReferenceParsing | null | undefined>(undefined),
			defaultSearchHandlingStrict: new FormControl<boolean | null | undefined>(undefined),
			disableReferentialIntegrity: new FormControl<boolean | null | undefined>(undefined),
			disableResourceVersioning: new FormControl<boolean | null | undefined>(undefined),
			enableUpdateCreate: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<FhirStoreVersion | null | undefined>(undefined),
		});

	}

	export enum FhirStoreComplexDataTypeReferenceParsing { COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED = 0, DISABLED = 1, ENABLED = 2 }


	/** Contains configuration for streaming FHIR export. */
	export interface StreamConfig {

		/** The configuration for exporting to BigQuery. */
		bigqueryDestination?: GoogleCloudHealthcareV1FhirBigQueryDestination;

		/** Contains configuration for streaming de-identified FHIR export. */
		deidentifiedStoreDestination?: DeidentifiedStoreDestination;

		/** Supply a FHIR resource type (such as "Patient" or "Observation"). See https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats an empty list as an intent to stream all the supported resource types in this FHIR store. */
		resourceTypes?: Array<string>;
	}

	/** Contains configuration for streaming FHIR export. */
	export interface StreamConfigFormProperties {
	}
	export function CreateStreamConfigFormGroup() {
		return new FormGroup<StreamConfigFormProperties>({
		});

	}


	/** Contains the configuration for FHIR profiles and validation. */
	export interface ValidationConfig {

		/** Whether to disable FHIRPath validation for incoming resources. Set this to true to disable checking incoming resources for conformance against FHIRPath requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced. */
		disableFhirpathValidation?: boolean | null;

		/** Whether to disable profile validation for this FHIR store. Set this to true to disable checking incoming resources for conformance against structure definitions in this FHIR store. */
		disableProfileValidation?: boolean | null;

		/** Whether to disable reference type validation for incoming resources. Set this to true to disable checking incoming resources for conformance against reference type requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced. */
		disableReferenceTypeValidation?: boolean | null;

		/** Whether to disable required fields validation for incoming resources. Set this to true to disable checking incoming resources for conformance against required fields requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced. */
		disableRequiredFieldValidation?: boolean | null;

		/** A list of implementation guide URLs in this FHIR store that are used to configure the profiles to use for validation. For example, to use the US Core profiles for validation, set `enabled_implementation_guides` to `["http://hl7.org/fhir/us/core/ImplementationGuide/ig"]`. If `enabled_implementation_guides` is empty or omitted, then incoming resources are only required to conform to the base FHIR profiles. Otherwise, a resource must conform to at least one profile listed in the `global` property of one of the enabled ImplementationGuides. The Cloud Healthcare API does not currently enforce all of the rules in a StructureDefinition. The following rules are supported: - min/max - minValue/maxValue - maxLength - type - fixed[x] - pattern[x] on simple types - slicing, when using "value" as the discriminator type When a URL cannot be resolved (for example, in a type assertion), the server does not return an error. */
		enabledImplementationGuides?: Array<string>;
	}

	/** Contains the configuration for FHIR profiles and validation. */
	export interface ValidationConfigFormProperties {

		/** Whether to disable FHIRPath validation for incoming resources. Set this to true to disable checking incoming resources for conformance against FHIRPath requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced. */
		disableFhirpathValidation: FormControl<boolean | null | undefined>,

		/** Whether to disable profile validation for this FHIR store. Set this to true to disable checking incoming resources for conformance against structure definitions in this FHIR store. */
		disableProfileValidation: FormControl<boolean | null | undefined>,

		/** Whether to disable reference type validation for incoming resources. Set this to true to disable checking incoming resources for conformance against reference type requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced. */
		disableReferenceTypeValidation: FormControl<boolean | null | undefined>,

		/** Whether to disable required fields validation for incoming resources. Set this to true to disable checking incoming resources for conformance against required fields requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced. */
		disableRequiredFieldValidation: FormControl<boolean | null | undefined>,
	}
	export function CreateValidationConfigFormGroup() {
		return new FormGroup<ValidationConfigFormProperties>({
			disableFhirpathValidation: new FormControl<boolean | null | undefined>(undefined),
			disableProfileValidation: new FormControl<boolean | null | undefined>(undefined),
			disableReferenceTypeValidation: new FormControl<boolean | null | undefined>(undefined),
			disableRequiredFieldValidation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FhirStoreVersion { VERSION_UNSPECIFIED = 0, DSTU2 = 1, STU3 = 2, R4 = 3 }


	/** Count of resources and total storage size by type for a given FHIR store. */
	export interface FhirStoreMetric {

		/** The total count of FHIR resources in the store of this resource type. */
		count?: string | null;

		/** The FHIR resource type this metric applies to. */
		resourceType?: string | null;

		/** The total amount of structured storage used by FHIR resources of this resource type in the store. */
		structuredStorageSizeBytes?: string | null;
	}

	/** Count of resources and total storage size by type for a given FHIR store. */
	export interface FhirStoreMetricFormProperties {

		/** The total count of FHIR resources in the store of this resource type. */
		count: FormControl<string | null | undefined>,

		/** The FHIR resource type this metric applies to. */
		resourceType: FormControl<string | null | undefined>,

		/** The total amount of structured storage used by FHIR resources of this resource type in the store. */
		structuredStorageSizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateFhirStoreMetricFormGroup() {
		return new FormGroup<FhirStoreMetricFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			structuredStorageSizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of metrics for a given FHIR store. */
	export interface FhirStoreMetrics {

		/** List of FhirStoreMetric by resource type. */
		metrics?: Array<FhirStoreMetric>;

		/** The resource name of the FHIR store to get metrics for, in the format `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`. */
		name?: string | null;
	}

	/** List of metrics for a given FHIR store. */
	export interface FhirStoreMetricsFormProperties {

		/** The resource name of the FHIR store to get metrics for, in the format `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFhirStoreMetricsFormGroup() {
		return new FormGroup<FhirStoreMetricsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A (sub) field of a type. */
	export interface Field {

		/** The maximum number of times this field can be repeated. 0 or -1 means unbounded. */
		maxOccurs?: number | null;

		/** The minimum number of times this field must be present/repeated. */
		minOccurs?: number | null;

		/** The name of the field. For example, "PID-1" or just "1". */
		name?: string | null;

		/** The HL7v2 table this field refers to. For example, PID-15 (Patient's Primary Language) usually refers to table "0296". */
		table?: string | null;

		/** The type of this field. A Type with this name must be defined in an Hl7TypesConfig. */
		type?: string | null;
	}

	/** A (sub) field of a type. */
	export interface FieldFormProperties {

		/** The maximum number of times this field can be repeated. 0 or -1 means unbounded. */
		maxOccurs: FormControl<number | null | undefined>,

		/** The minimum number of times this field must be present/repeated. */
		minOccurs: FormControl<number | null | undefined>,

		/** The name of the field. For example, "PID-1" or just "1". */
		name: FormControl<string | null | undefined>,

		/** The HL7v2 table this field refers to. For example, PID-15 (Patient's Primary Language) usually refers to table "0296". */
		table: FormControl<string | null | undefined>,

		/** The type of this field. A Type with this name must be defined in an Hl7TypesConfig. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			maxOccurs: new FormControl<number | null | undefined>(undefined),
			minOccurs: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the configuration for importing data from Cloud Storage. */
	export interface GcsSource {

		/** Points to a Cloud Storage URI containing file(s) to import. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * `*` to match 0 or more non-separator characters * `**` to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .ndjson), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.ndjson` imports all files with `.ndjson` extensions in `my-directory/` and its sub-directories. * `?` to match 1 character Files matching the wildcard are expected to contain content only, no metadata. */
		uri?: string | null;
	}

	/** Specifies the configuration for importing data from Cloud Storage. */
	export interface GcsSourceFormProperties {

		/** Points to a Cloud Storage URI containing file(s) to import. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * `*` to match 0 or more non-separator characters * `**` to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .ndjson), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.ndjson` imports all files with `.ndjson` extensions in `my-directory/` and its sub-directories. * `?` to match 1 character Files matching the wildcard are expected to contain content only, no metadata. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGcsSourceFormGroup() {
		return new FormGroup<GcsSourceFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Cloud Storage location for export. */
	export interface GoogleCloudHealthcareV1ConsentGcsDestination {

		/** URI for a Cloud Storage directory where the server writes result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket and directory referenced in `uri_prefix`. */
		uriPrefix?: string | null;
	}

	/** The Cloud Storage location for export. */
	export interface GoogleCloudHealthcareV1ConsentGcsDestinationFormProperties {

		/** URI for a Cloud Storage directory where the server writes result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket and directory referenced in `uri_prefix`. */
		uriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudHealthcareV1ConsentGcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudHealthcareV1ConsentGcsDestinationFormProperties>({
			uriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of the DeidentifyDicomStore operation. */
	export interface GoogleCloudHealthcareV1DeidentifyDeidentifyDicomStoreSummary {
	}

	/** Contains a summary of the DeidentifyDicomStore operation. */
	export interface GoogleCloudHealthcareV1DeidentifyDeidentifyDicomStoreSummaryFormProperties {
	}
	export function CreateGoogleCloudHealthcareV1DeidentifyDeidentifyDicomStoreSummaryFormGroup() {
		return new FormGroup<GoogleCloudHealthcareV1DeidentifyDeidentifyDicomStoreSummaryFormProperties>({
		});

	}


	/** Contains a summary of the DeidentifyFhirStore operation. */
	export interface GoogleCloudHealthcareV1DeidentifyDeidentifyFhirStoreSummary {
	}

	/** Contains a summary of the DeidentifyFhirStore operation. */
	export interface GoogleCloudHealthcareV1DeidentifyDeidentifyFhirStoreSummaryFormProperties {
	}
	export function CreateGoogleCloudHealthcareV1DeidentifyDeidentifyFhirStoreSummaryFormGroup() {
		return new FormGroup<GoogleCloudHealthcareV1DeidentifyDeidentifyFhirStoreSummaryFormProperties>({
		});

	}


	/** Specifies the configuration for importing data from Cloud Storage. */
	export interface GoogleCloudHealthcareV1DicomGcsSource {

		/** Points to a Cloud Storage URI containing file(s) with content only. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * '*' to match 0 or more non-separator characters * '**' to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .dcm), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.dcm` imports all files with .dcm extensions in `my-directory/` and its sub-directories. * '?' to match 1 character. All other URI formats are invalid. Files matching the wildcard are expected to contain content only, no metadata. */
		uri?: string | null;
	}

	/** Specifies the configuration for importing data from Cloud Storage. */
	export interface GoogleCloudHealthcareV1DicomGcsSourceFormProperties {

		/** Points to a Cloud Storage URI containing file(s) with content only. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * '*' to match 0 or more non-separator characters * '**' to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .dcm), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.dcm` imports all files with .dcm extensions in `my-directory/` and its sub-directories. * '?' to match 1 character. All other URI formats are invalid. Files matching the wildcard are expected to contain content only, no metadata. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudHealthcareV1DicomGcsSourceFormGroup() {
		return new FormGroup<GoogleCloudHealthcareV1DicomGcsSourceFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the configuration for importing data from Cloud Storage. */
	export interface GoogleCloudHealthcareV1FhirGcsSource {

		/** Points to a Cloud Storage URI containing file(s) to import. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * `*` to match 0 or more non-separator characters * `**` to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .ndjson), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.ndjson` imports all files with `.ndjson` extensions in `my-directory/` and its sub-directories. * `?` to match 1 character Files matching the wildcard are expected to contain content only, no metadata. */
		uri?: string | null;
	}

	/** Specifies the configuration for importing data from Cloud Storage. */
	export interface GoogleCloudHealthcareV1FhirGcsSourceFormProperties {

		/** Points to a Cloud Storage URI containing file(s) to import. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * `*` to match 0 or more non-separator characters * `**` to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .ndjson), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.ndjson` imports all files with `.ndjson` extensions in `my-directory/` and its sub-directories. * `?` to match 1 character Files matching the wildcard are expected to contain content only, no metadata. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudHealthcareV1FhirGcsSourceFormGroup() {
		return new FormGroup<GoogleCloudHealthcareV1FhirGcsSourceFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Construct representing a logical group or a segment. */
	export interface GroupOrSegment {

		/** An HL7v2 logical group construct. */
		group?: SchemaGroup;

		/** An HL7v2 Segment. */
		segment?: SchemaSegment;
	}

	/** Construct representing a logical group or a segment. */
	export interface GroupOrSegmentFormProperties {
	}
	export function CreateGroupOrSegmentFormGroup() {
		return new FormGroup<GroupOrSegmentFormProperties>({
		});

	}


	/** An HL7v2 logical group construct. */
	export interface SchemaGroup {

		/** True indicates that this is a choice group, meaning that only one of its segments can exist in a given message. */
		choice?: boolean | null;

		/** The maximum number of times this group can be repeated. 0 or -1 means unbounded. */
		maxOccurs?: number | null;

		/** Nested groups and/or segments. */
		members?: Array<GroupOrSegment>;

		/** The minimum number of times this group must be present/repeated. */
		minOccurs?: number | null;

		/** The name of this group. For example, "ORDER_DETAIL". */
		name?: string | null;
	}

	/** An HL7v2 logical group construct. */
	export interface SchemaGroupFormProperties {

		/** True indicates that this is a choice group, meaning that only one of its segments can exist in a given message. */
		choice: FormControl<boolean | null | undefined>,

		/** The maximum number of times this group can be repeated. 0 or -1 means unbounded. */
		maxOccurs: FormControl<number | null | undefined>,

		/** The minimum number of times this group must be present/repeated. */
		minOccurs: FormControl<number | null | undefined>,

		/** The name of this group. For example, "ORDER_DETAIL". */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSchemaGroupFormGroup() {
		return new FormGroup<SchemaGroupFormProperties>({
			choice: new FormControl<boolean | null | undefined>(undefined),
			maxOccurs: new FormControl<number | null | undefined>(undefined),
			minOccurs: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An HL7v2 Segment. */
	export interface SchemaSegment {

		/** The maximum number of times this segment can be present in this group. 0 or -1 means unbounded. */
		maxOccurs?: number | null;

		/** The minimum number of times this segment can be present in this group. */
		minOccurs?: number | null;

		/** The Segment type. For example, "PID". */
		type?: string | null;
	}

	/** An HL7v2 Segment. */
	export interface SchemaSegmentFormProperties {

		/** The maximum number of times this segment can be present in this group. 0 or -1 means unbounded. */
		maxOccurs: FormControl<number | null | undefined>,

		/** The minimum number of times this segment can be present in this group. */
		minOccurs: FormControl<number | null | undefined>,

		/** The Segment type. For example, "PID". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSchemaSegmentFormGroup() {
		return new FormGroup<SchemaSegmentFormProperties>({
			maxOccurs: new FormControl<number | null | undefined>(undefined),
			minOccurs: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Root config message for HL7v2 schema. This contains a schema structure of groups and segments, and filters that determine which messages to apply the schema structure to. */
	export interface Hl7SchemaConfig {

		/** Map from each HL7v2 message type and trigger event pair, such as ADT_A04, to its schema configuration root group. */
		messageSchemaConfigs?: {[id: string]: SchemaGroup };

		/** Each VersionSource is tested and only if they all match is the schema used for the message. */
		version?: Array<VersionSource>;
	}

	/** Root config message for HL7v2 schema. This contains a schema structure of groups and segments, and filters that determine which messages to apply the schema structure to. */
	export interface Hl7SchemaConfigFormProperties {

		/** Map from each HL7v2 message type and trigger event pair, such as ADT_A04, to its schema configuration root group. */
		messageSchemaConfigs: FormControl<{[id: string]: SchemaGroup } | null | undefined>,
	}
	export function CreateHl7SchemaConfigFormGroup() {
		return new FormGroup<Hl7SchemaConfigFormProperties>({
			messageSchemaConfigs: new FormControl<{[id: string]: SchemaGroup } | null | undefined>(undefined),
		});

	}


	/** Describes a selector for extracting and matching an MSH field to a value. */
	export interface VersionSource {

		/** The field to extract from the MSH segment. For example, "3.1" or "18[1].1". */
		mshField?: string | null;

		/** The value to match with the field. For example, "My Application Name" or "2.3". */
		value?: string | null;
	}

	/** Describes a selector for extracting and matching an MSH field to a value. */
	export interface VersionSourceFormProperties {

		/** The field to extract from the MSH segment. For example, "3.1" or "18[1].1". */
		mshField: FormControl<string | null | undefined>,

		/** The value to match with the field. For example, "My Application Name" or "2.3". */
		value: FormControl<string | null | undefined>,
	}
	export function CreateVersionSourceFormGroup() {
		return new FormGroup<VersionSourceFormProperties>({
			mshField: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Root config for HL7v2 datatype definitions for a specific HL7v2 version. */
	export interface Hl7TypesConfig {

		/** The HL7v2 type definitions. */
		type?: Array<Type>;

		/** The version selectors that this config applies to. A message must match ALL version sources to apply. */
		version?: Array<VersionSource>;
	}

	/** Root config for HL7v2 datatype definitions for a specific HL7v2 version. */
	export interface Hl7TypesConfigFormProperties {
	}
	export function CreateHl7TypesConfigFormGroup() {
		return new FormGroup<Hl7TypesConfigFormProperties>({
		});

	}


	/** A type definition for some HL7v2 type (incl. Segments and Datatypes). */
	export interface Type {

		/** The (sub) fields this type has (if not primitive). */
		fields?: Array<Field>;

		/** The name of this type. This would be the segment or datatype name. For example, "PID" or "XPN". */
		name?: string | null;

		/** If this is a primitive type then this field is the type of the primitive For example, STRING. Leave unspecified for composite types. */
		primitive?: TypePrimitive | null;
	}

	/** A type definition for some HL7v2 type (incl. Segments and Datatypes). */
	export interface TypeFormProperties {

		/** The name of this type. This would be the segment or datatype name. For example, "PID" or "XPN". */
		name: FormControl<string | null | undefined>,

		/** If this is a primitive type then this field is the type of the primitive For example, STRING. Leave unspecified for composite types. */
		primitive: FormControl<TypePrimitive | null | undefined>,
	}
	export function CreateTypeFormGroup() {
		return new FormGroup<TypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			primitive: new FormControl<TypePrimitive | null | undefined>(undefined),
		});

	}

	export enum TypePrimitive { PRIMITIVE_UNSPECIFIED = 0, STRING = 1, VARIES = 2, UNESCAPED_STRING = 3 }


	/** Specifies where and whether to send notifications upon changes to a data store. */
	export interface Hl7V2NotificationConfig {

		/** Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The following fields and functions are available for filtering: * `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. * `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset's time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. * `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. * `create_time`, the timestamp when the message was created in the HL7v2 store. Use the RFC3339 time format for comparisons. For example, `create_time < "2017-01-02T00:00:00-05:00"`. * `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. * `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, `PatientId("123456", "MRN")`. * `labels.x`, a string value of the label with key `x` as set using the Message.labels map. For example, `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label. For example, `labels."priority":*`. */
		filter?: string | null;

		/** The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. The notification is a `PubsubMessage` with the following fields: * `PubsubMessage.Data` contains the resource name. * `PubsubMessage.MessageId` is the ID of this notification. It's guaranteed to be unique within the topic. * `PubsubMessage.PublishTime` is the time when the message was published. Note that notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. The Cloud Healthcare API service account, service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com, must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. If a notification cannot be published to Pub/Sub, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). */
		pubsubTopic?: string | null;
	}

	/** Specifies where and whether to send notifications upon changes to a data store. */
	export interface Hl7V2NotificationConfigFormProperties {

		/** Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The following fields and functions are available for filtering: * `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. * `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset's time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. * `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. * `create_time`, the timestamp when the message was created in the HL7v2 store. Use the RFC3339 time format for comparisons. For example, `create_time < "2017-01-02T00:00:00-05:00"`. * `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. * `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, `PatientId("123456", "MRN")`. * `labels.x`, a string value of the label with key `x` as set using the Message.labels map. For example, `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label. For example, `labels."priority":*`. */
		filter: FormControl<string | null | undefined>,

		/** The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. The notification is a `PubsubMessage` with the following fields: * `PubsubMessage.Data` contains the resource name. * `PubsubMessage.MessageId` is the ID of this notification. It's guaranteed to be unique within the topic. * `PubsubMessage.PublishTime` is the time when the message was published. Note that notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. The Cloud Healthcare API service account, service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com, must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. If a notification cannot be published to Pub/Sub, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). */
		pubsubTopic: FormControl<string | null | undefined>,
	}
	export function CreateHl7V2NotificationConfigFormGroup() {
		return new FormGroup<Hl7V2NotificationConfigFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			pubsubTopic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an HL7v2 store. */
	export interface Hl7V2Store {

		/** User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. */
		labels?: {[id: string]: string };

		/** Resource name of the HL7v2 store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`. */
		name?: string | null;

		/** A list of notification configs. Each configuration uses a filter to determine whether to publish a message (both Ingest & Create) on the corresponding notification destination. Only the message name is sent as part of the notification. Supplied by the client. */
		notificationConfigs?: Array<Hl7V2NotificationConfig>;

		/** The configuration for the parser. It determines how the server parses the messages. */
		parserConfig?: ParserConfig;

		/** Determines whether to reject duplicate messages. A duplicate message is a message with the same raw bytes as a message that has already been ingested/created in this HL7v2 store. The default value is false, meaning that the store accepts the duplicate messages and it also returns the same ACK message in the IngestMessageResponse as has been returned previously. Note that only one resource is created in the store. When this field is set to true, CreateMessage/IngestMessage requests with a duplicate message will be rejected by the store, and IngestMessageErrorDetail returns a NACK message upon rejection. */
		rejectDuplicateMessage?: boolean | null;
	}

	/** Represents an HL7v2 store. */
	export interface Hl7V2StoreFormProperties {

		/** User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource name of the HL7v2 store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`. */
		name: FormControl<string | null | undefined>,

		/** Determines whether to reject duplicate messages. A duplicate message is a message with the same raw bytes as a message that has already been ingested/created in this HL7v2 store. The default value is false, meaning that the store accepts the duplicate messages and it also returns the same ACK message in the IngestMessageResponse as has been returned previously. Note that only one resource is created in the store. When this field is set to true, CreateMessage/IngestMessage requests with a duplicate message will be rejected by the store, and IngestMessageErrorDetail returns a NACK message upon rejection. */
		rejectDuplicateMessage: FormControl<boolean | null | undefined>,
	}
	export function CreateHl7V2StoreFormGroup() {
		return new FormGroup<Hl7V2StoreFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rejectDuplicateMessage: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The configuration for the parser. It determines how the server parses the messages. */
	export interface ParserConfig {

		/** Determines whether messages with no header are allowed. */
		allowNullHeader?: boolean | null;

		/** A schema package contains a set of schemas and type definitions. */
		schema?: SchemaPackage;

		/** Byte(s) to use as the segment terminator. If this is unset, '\r' is used as segment terminator, matching the HL7 version 2 specification. */
		segmentTerminator?: string | null;

		/** Immutable. Determines the version of both the default parser to be used when `schema` is not given, as well as the schematized parser used when `schema` is specified. This field is immutable after HL7v2 store creation. */
		version?: ParserConfigVersion | null;
	}

	/** The configuration for the parser. It determines how the server parses the messages. */
	export interface ParserConfigFormProperties {

		/** Determines whether messages with no header are allowed. */
		allowNullHeader: FormControl<boolean | null | undefined>,

		/** Byte(s) to use as the segment terminator. If this is unset, '\r' is used as segment terminator, matching the HL7 version 2 specification. */
		segmentTerminator: FormControl<string | null | undefined>,

		/** Immutable. Determines the version of both the default parser to be used when `schema` is not given, as well as the schematized parser used when `schema` is specified. This field is immutable after HL7v2 store creation. */
		version: FormControl<ParserConfigVersion | null | undefined>,
	}
	export function CreateParserConfigFormGroup() {
		return new FormGroup<ParserConfigFormProperties>({
			allowNullHeader: new FormControl<boolean | null | undefined>(undefined),
			segmentTerminator: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<ParserConfigVersion | null | undefined>(undefined),
		});

	}


	/** A schema package contains a set of schemas and type definitions. */
	export interface SchemaPackage {

		/** Flag to ignore all min_occurs restrictions in the schema. This means that incoming messages can omit any group, segment, field, component, or subcomponent. */
		ignoreMinOccurs?: boolean | null;

		/** Schema configs that are layered based on their VersionSources that match the incoming message. Schema configs present in higher indices override those in lower indices with the same message type and trigger event if their VersionSources all match an incoming message. */
		schemas?: Array<Hl7SchemaConfig>;

		/** Determines how messages that fail to parse are handled. */
		schematizedParsingType?: SchemaPackageSchematizedParsingType | null;

		/** Schema type definitions that are layered based on their VersionSources that match the incoming message. Type definitions present in higher indices override those in lower indices with the same type name if their VersionSources all match an incoming message. */
		types?: Array<Hl7TypesConfig>;

		/** Determines how unexpected segments (segments not matched to the schema) are handled. */
		unexpectedSegmentHandling?: SchemaPackageUnexpectedSegmentHandling | null;
	}

	/** A schema package contains a set of schemas and type definitions. */
	export interface SchemaPackageFormProperties {

		/** Flag to ignore all min_occurs restrictions in the schema. This means that incoming messages can omit any group, segment, field, component, or subcomponent. */
		ignoreMinOccurs: FormControl<boolean | null | undefined>,

		/** Determines how messages that fail to parse are handled. */
		schematizedParsingType: FormControl<SchemaPackageSchematizedParsingType | null | undefined>,

		/** Determines how unexpected segments (segments not matched to the schema) are handled. */
		unexpectedSegmentHandling: FormControl<SchemaPackageUnexpectedSegmentHandling | null | undefined>,
	}
	export function CreateSchemaPackageFormGroup() {
		return new FormGroup<SchemaPackageFormProperties>({
			ignoreMinOccurs: new FormControl<boolean | null | undefined>(undefined),
			schematizedParsingType: new FormControl<SchemaPackageSchematizedParsingType | null | undefined>(undefined),
			unexpectedSegmentHandling: new FormControl<SchemaPackageUnexpectedSegmentHandling | null | undefined>(undefined),
		});

	}

	export enum SchemaPackageSchematizedParsingType { SCHEMATIZED_PARSING_TYPE_UNSPECIFIED = 0, SOFT_FAIL = 1, HARD_FAIL = 2 }

	export enum SchemaPackageUnexpectedSegmentHandling { UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED = 0, FAIL = 1, SKIP = 2, PARSE = 3 }

	export enum ParserConfigVersion { PARSER_VERSION_UNSPECIFIED = 0, V1 = 1, V2 = 2, V3 = 3 }


	/** Count of messages and total storage size by type for a given HL7 store. */
	export interface Hl7V2StoreMetric {

		/** The total count of HL7v2 messages in the store for the given message type. */
		count?: string | null;

		/** The Hl7v2 message type this metric applies to, such as `ADT` or `ORU`. */
		messageType?: string | null;

		/** The total amount of structured storage used by HL7v2 messages of this message type in the store. */
		structuredStorageSizeBytes?: string | null;
	}

	/** Count of messages and total storage size by type for a given HL7 store. */
	export interface Hl7V2StoreMetricFormProperties {

		/** The total count of HL7v2 messages in the store for the given message type. */
		count: FormControl<string | null | undefined>,

		/** The Hl7v2 message type this metric applies to, such as `ADT` or `ORU`. */
		messageType: FormControl<string | null | undefined>,

		/** The total amount of structured storage used by HL7v2 messages of this message type in the store. */
		structuredStorageSizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateHl7V2StoreMetricFormGroup() {
		return new FormGroup<Hl7V2StoreMetricFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			messageType: new FormControl<string | null | undefined>(undefined),
			structuredStorageSizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of metrics for a given HL7v2 store. */
	export interface Hl7V2StoreMetrics {

		/** List of HL7v2 store metrics by message type. */
		metrics?: Array<Hl7V2StoreMetric>;

		/** The resource name of the HL7v2 store to get metrics for, in the format `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`. */
		name?: string | null;
	}

	/** List of metrics for a given HL7v2 store. */
	export interface Hl7V2StoreMetricsFormProperties {

		/** The resource name of the HL7v2 store to get metrics for, in the format `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHl7V2StoreMetricsFormGroup() {
		return new FormGroup<Hl7V2StoreMetricsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface HttpBody {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType?: string | null;

		/** The HTTP request/response body as raw binary. */
		data?: string | null;

		/** Application specific response metadata. Must be set in the first response for streaming APIs. */
		extensions?: Array<string>;
	}

	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface HttpBodyFormProperties {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType: FormControl<string | null | undefined>,

		/** The HTTP request/response body as raw binary. */
		data: FormControl<string | null | undefined>,
	}
	export function CreateHttpBodyFormGroup() {
		return new FormGroup<HttpBodyFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Imports data into the specified DICOM store. Returns an error if any of the files to import are not DICOM files. This API accepts duplicate DICOM instances by ignoring the newly-pushed instance. It does not overwrite. */
	export interface ImportDicomDataRequest {

		/** Specifies the configuration for importing data from Cloud Storage. */
		gcsSource?: GoogleCloudHealthcareV1DicomGcsSource;
	}

	/** Imports data into the specified DICOM store. Returns an error if any of the files to import are not DICOM files. This API accepts duplicate DICOM instances by ignoring the newly-pushed instance. It does not overwrite. */
	export interface ImportDicomDataRequestFormProperties {
	}
	export function CreateImportDicomDataRequestFormGroup() {
		return new FormGroup<ImportDicomDataRequestFormProperties>({
		});

	}


	/** Returns additional information in regards to a completed DICOM store import. */
	export interface ImportDicomDataResponse {
	}

	/** Returns additional information in regards to a completed DICOM store import. */
	export interface ImportDicomDataResponseFormProperties {
	}
	export function CreateImportDicomDataResponseFormGroup() {
		return new FormGroup<ImportDicomDataResponseFormProperties>({
		});

	}


	/** Request to import messages. */
	export interface ImportMessagesRequest {

		/** Specifies the configuration for importing data from Cloud Storage. */
		gcsSource?: GcsSource;
	}

	/** Request to import messages. */
	export interface ImportMessagesRequestFormProperties {
	}
	export function CreateImportMessagesRequestFormGroup() {
		return new FormGroup<ImportMessagesRequestFormProperties>({
		});

	}


	/** Final response of importing messages. This structure is included in the response to describe the detailed outcome. It is only included when the operation finishes successfully. */
	export interface ImportMessagesResponse {
	}

	/** Final response of importing messages. This structure is included in the response to describe the detailed outcome. It is only included when the operation finishes successfully. */
	export interface ImportMessagesResponseFormProperties {
	}
	export function CreateImportMessagesResponseFormGroup() {
		return new FormGroup<ImportMessagesResponseFormProperties>({
		});

	}


	/** Request to import resources. */
	export interface ImportResourcesRequest {

		/** The content structure in the source location. If not specified, the server treats the input source files as BUNDLE. */
		contentStructure?: ImportResourcesRequestContentStructure | null;

		/** Specifies the configuration for importing data from Cloud Storage. */
		gcsSource?: GoogleCloudHealthcareV1FhirGcsSource;
	}

	/** Request to import resources. */
	export interface ImportResourcesRequestFormProperties {

		/** The content structure in the source location. If not specified, the server treats the input source files as BUNDLE. */
		contentStructure: FormControl<ImportResourcesRequestContentStructure | null | undefined>,
	}
	export function CreateImportResourcesRequestFormGroup() {
		return new FormGroup<ImportResourcesRequestFormProperties>({
			contentStructure: new FormControl<ImportResourcesRequestContentStructure | null | undefined>(undefined),
		});

	}

	export enum ImportResourcesRequestContentStructure { CONTENT_STRUCTURE_UNSPECIFIED = 0, BUNDLE = 1, RESOURCE = 2, BUNDLE_PRETTY = 3, RESOURCE_PRETTY = 4 }


	/** Final response of importing resources. This structure is included in the response to describe the detailed outcome after the operation finishes successfully. */
	export interface ImportResourcesResponse {
	}

	/** Final response of importing resources. This structure is included in the response to describe the detailed outcome after the operation finishes successfully. */
	export interface ImportResourcesResponseFormProperties {
	}
	export function CreateImportResourcesResponseFormGroup() {
		return new FormGroup<ImportResourcesResponseFormProperties>({
		});

	}


	/** Ingests a message into the specified HL7v2 store. */
	export interface IngestMessageRequest {

		/** A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard. */
		message?: Message;
	}

	/** Ingests a message into the specified HL7v2 store. */
	export interface IngestMessageRequestFormProperties {
	}
	export function CreateIngestMessageRequestFormGroup() {
		return new FormGroup<IngestMessageRequestFormProperties>({
		});

	}


	/** Acknowledges that a message has been ingested into the specified HL7v2 store. */
	export interface IngestMessageResponse {

		/** HL7v2 ACK message. */
		hl7Ack?: string | null;

		/** A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard. */
		message?: Message;
	}

	/** Acknowledges that a message has been ingested into the specified HL7v2 store. */
	export interface IngestMessageResponseFormProperties {

		/** HL7v2 ACK message. */
		hl7Ack: FormControl<string | null | undefined>,
	}
	export function CreateIngestMessageResponseFormGroup() {
		return new FormGroup<IngestMessageResponseFormProperties>({
			hl7Ack: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAttributeDefinitionsResponse {

		/** The returned Attribute definitions. The maximum number of attributes returned is determined by the value of page_size in the ListAttributeDefinitionsRequest. */
		attributeDefinitions?: Array<AttributeDefinition>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}
	export interface ListAttributeDefinitionsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttributeDefinitionsResponseFormGroup() {
		return new FormGroup<ListAttributeDefinitionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConsentArtifactsResponse {

		/** The returned Consent artifacts. The maximum number of artifacts returned is determined by the value of page_size in the ListConsentArtifactsRequest. */
		consentArtifacts?: Array<ConsentArtifact>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}
	export interface ListConsentArtifactsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConsentArtifactsResponseFormGroup() {
		return new FormGroup<ListConsentArtifactsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConsentRevisionsResponse {

		/** The returned Consent revisions. The maximum number of revisions returned is determined by the value of `page_size` in the ListConsentRevisionsRequest. */
		consents?: Array<Consent>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}
	export interface ListConsentRevisionsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConsentRevisionsResponseFormGroup() {
		return new FormGroup<ListConsentRevisionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConsentStoresResponse {

		/** The returned consent stores. The maximum number of stores returned is determined by the value of page_size in the ListConsentStoresRequest. */
		consentStores?: Array<ConsentStore>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}
	export interface ListConsentStoresResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConsentStoresResponseFormGroup() {
		return new FormGroup<ListConsentStoresResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConsentsResponse {

		/** The returned Consents. The maximum number of Consents returned is determined by the value of page_size in the ListConsentsRequest. */
		consents?: Array<Consent>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}
	export interface ListConsentsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConsentsResponseFormGroup() {
		return new FormGroup<ListConsentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists the available datasets. */
	export interface ListDatasetsResponse {

		/** The first page of datasets. */
		datasets?: Array<Dataset>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** Lists the available datasets. */
	export interface ListDatasetsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsResponseFormGroup() {
		return new FormGroup<ListDatasetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists the DICOM stores in the given dataset. */
	export interface ListDicomStoresResponse {

		/** The returned DICOM stores. Won't be more DICOM stores than the value of page_size in the request. */
		dicomStores?: Array<DicomStore>;

		/** Token to retrieve the next page of results or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** Lists the DICOM stores in the given dataset. */
	export interface ListDicomStoresResponseFormProperties {

		/** Token to retrieve the next page of results or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDicomStoresResponseFormGroup() {
		return new FormGroup<ListDicomStoresResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists the FHIR stores in the given dataset. */
	export interface ListFhirStoresResponse {

		/** The returned FHIR stores. Won't be more FHIR stores than the value of page_size in the request. */
		fhirStores?: Array<FhirStore>;

		/** Token to retrieve the next page of results or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** Lists the FHIR stores in the given dataset. */
	export interface ListFhirStoresResponseFormProperties {

		/** Token to retrieve the next page of results or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFhirStoresResponseFormGroup() {
		return new FormGroup<ListFhirStoresResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists the HL7v2 stores in the given dataset. */
	export interface ListHl7V2StoresResponse {

		/** The returned HL7v2 stores. Won't be more HL7v2 stores than the value of page_size in the request. */
		hl7V2Stores?: Array<Hl7V2Store>;

		/** Token to retrieve the next page of results or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** Lists the HL7v2 stores in the given dataset. */
	export interface ListHl7V2StoresResponseFormProperties {

		/** Token to retrieve the next page of results or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListHl7V2StoresResponseFormGroup() {
		return new FormGroup<ListHl7V2StoresResponseFormProperties>({
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


	/** Lists the messages in the specified HL7v2 store. */
	export interface ListMessagesResponse {

		/** The returned Messages. Won't be more Messages than the value of page_size in the request. See view for populated fields. */
		hl7V2Messages?: Array<Message>;

		/** Token to retrieve the next page of results or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** Lists the messages in the specified HL7v2 store. */
	export interface ListMessagesResponseFormProperties {

		/** Token to retrieve the next page of results or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMessagesResponseFormGroup() {
		return new FormGroup<ListMessagesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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

	export interface ListUserDataMappingsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The returned User data mappings. The maximum number of User data mappings returned is determined by the value of page_size in the ListUserDataMappingsRequest. */
		userDataMappings?: Array<UserDataMapping>;
	}
	export interface ListUserDataMappingsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserDataMappingsResponseFormGroup() {
		return new FormGroup<ListUserDataMappingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maps a resource to the associated user and Attributes. */
	export interface UserDataMapping {

		/** Output only. Indicates the time when this mapping was archived. */
		archiveTime?: string | null;

		/** Output only. Indicates whether this mapping is archived. */
		archived?: boolean | null;

		/** Required. A unique identifier for the mapped resource. */
		dataId?: string | null;

		/** Resource name of the User data mapping, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/userDataMappings/{user_data_mapping_id}`. */
		name?: string | null;

		/** Attributes of the resource. Only explicitly set attributes are displayed here. Attribute definitions with defaults set implicitly apply to these User data mappings. Attributes listed here must be single valued, that is, exactly one value is specified for the field "values" in each Attribute. */
		resourceAttributes?: Array<Attribute>;

		/** Required. User's UUID provided by the client. */
		userId?: string | null;
	}

	/** Maps a resource to the associated user and Attributes. */
	export interface UserDataMappingFormProperties {

		/** Output only. Indicates the time when this mapping was archived. */
		archiveTime: FormControl<string | null | undefined>,

		/** Output only. Indicates whether this mapping is archived. */
		archived: FormControl<boolean | null | undefined>,

		/** Required. A unique identifier for the mapped resource. */
		dataId: FormControl<string | null | undefined>,

		/** Resource name of the User data mapping, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/userDataMappings/{user_data_mapping_id}`. */
		name: FormControl<string | null | undefined>,

		/** Required. User's UUID provided by the client. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserDataMappingFormGroup() {
		return new FormGroup<UserDataMappingFormProperties>({
			archiveTime: new FormControl<string | null | undefined>(undefined),
			archived: new FormControl<boolean | null | undefined>(undefined),
			dataId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OperationMetadata provides information about the operation execution. Returned in the long-running operation's metadata field. */
	export interface OperationMetadata {

		/** The name of the API method that initiated the operation. */
		apiMethodName?: string | null;

		/** Specifies if cancellation was requested for the operation. */
		cancelRequested?: boolean | null;

		/** ProgressCounter provides counters to describe an operation's progress. */
		counter?: ProgressCounter;

		/** The time at which the operation was created by the API. */
		createTime?: string | null;

		/** The time at which execution was completed. */
		endTime?: string | null;

		/** A link to audit and error logs in the log viewer. Error logs are generated only by some operations, listed at [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging). */
		logsUrl?: string | null;
	}

	/** OperationMetadata provides information about the operation execution. Returned in the long-running operation's metadata field. */
	export interface OperationMetadataFormProperties {

		/** The name of the API method that initiated the operation. */
		apiMethodName: FormControl<string | null | undefined>,

		/** Specifies if cancellation was requested for the operation. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** The time at which the operation was created by the API. */
		createTime: FormControl<string | null | undefined>,

		/** The time at which execution was completed. */
		endTime: FormControl<string | null | undefined>,

		/** A link to audit and error logs in the log viewer. Error logs are generated only by some operations, listed at [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging). */
		logsUrl: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiMethodName: new FormControl<string | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			logsUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ProgressCounter provides counters to describe an operation's progress. */
	export interface ProgressCounter {

		/** The number of units that failed in the operation. */
		failure?: string | null;

		/** The number of units that are pending in the operation. */
		pending?: string | null;

		/** The number of units that succeeded in the operation. */
		success?: string | null;
	}

	/** ProgressCounter provides counters to describe an operation's progress. */
	export interface ProgressCounterFormProperties {

		/** The number of units that failed in the operation. */
		failure: FormControl<string | null | undefined>,

		/** The number of units that are pending in the operation. */
		pending: FormControl<string | null | undefined>,

		/** The number of units that succeeded in the operation. */
		success: FormControl<string | null | undefined>,
	}
	export function CreateProgressCounterFormGroup() {
		return new FormGroup<ProgressCounterFormProperties>({
			failure: new FormControl<string | null | undefined>(undefined),
			pending: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
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


	/** Queries all data_ids that are consented for a given use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging] (https://cloud.google.com/healthcare/docs/how-tos/logging) and [QueryAccessibleData] for a sample log entry). */
	export interface QueryAccessibleDataRequest {

		/** The Cloud Storage location for export. */
		gcsDestination?: GoogleCloudHealthcareV1ConsentGcsDestination;

		/** The values of request attributes associated with this access request. */
		requestAttributes?: {[id: string]: string };

		/** Optional. The values of resource attributes associated with the type of resources being requested. If no values are specified, then all resource types are included in the output. */
		resourceAttributes?: {[id: string]: string };
	}

	/** Queries all data_ids that are consented for a given use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging] (https://cloud.google.com/healthcare/docs/how-tos/logging) and [QueryAccessibleData] for a sample log entry). */
	export interface QueryAccessibleDataRequestFormProperties {

		/** The values of request attributes associated with this access request. */
		requestAttributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The values of resource attributes associated with the type of resources being requested. If no values are specified, then all resource types are included in the output. */
		resourceAttributes: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateQueryAccessibleDataRequestFormGroup() {
		return new FormGroup<QueryAccessibleDataRequestFormProperties>({
			requestAttributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			resourceAttributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Response for successful QueryAccessibleData operations. This structure is included in the response upon operation completion. */
	export interface QueryAccessibleDataResponse {

		/** List of files, each of which contains a list of data_id(s) that are consented for a specified use in the request. */
		gcsUris?: Array<string>;
	}

	/** Response for successful QueryAccessibleData operations. This structure is included in the response upon operation completion. */
	export interface QueryAccessibleDataResponseFormProperties {
	}
	export function CreateQueryAccessibleDataResponseFormGroup() {
		return new FormGroup<QueryAccessibleDataResponseFormProperties>({
		});

	}


	/** Rejects the latest revision of the specified Consent by committing a new revision with `state` updated to `REJECTED`. If the latest revision of the given Consent is in the `REJECTED` state, no new revision is committed. */
	export interface RejectConsentRequest {

		/** Optional. The resource name of the Consent artifact that contains documentation of the user's rejection of the draft Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. If the draft Consent had a Consent artifact, this Consent artifact overwrites it. */
		consentArtifact?: string | null;
	}

	/** Rejects the latest revision of the specified Consent by committing a new revision with `state` updated to `REJECTED`. If the latest revision of the given Consent is in the `REJECTED` state, no new revision is committed. */
	export interface RejectConsentRequestFormProperties {

		/** Optional. The resource name of the Consent artifact that contains documentation of the user's rejection of the draft Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. If the draft Consent had a Consent artifact, this Consent artifact overwrites it. */
		consentArtifact: FormControl<string | null | undefined>,
	}
	export function CreateRejectConsentRequestFormGroup() {
		return new FormGroup<RejectConsentRequestFormProperties>({
			consentArtifact: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Revokes the latest revision of the specified Consent by committing a new revision with `state` updated to `REVOKED`. If the latest revision of the given Consent is in the `REVOKED` state, no new revision is committed. */
	export interface RevokeConsentRequest {

		/** Optional. The resource name of the Consent artifact that contains proof of the user's revocation of the Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. */
		consentArtifact?: string | null;
	}

	/** Revokes the latest revision of the specified Consent by committing a new revision with `state` updated to `REVOKED`. If the latest revision of the given Consent is in the `REVOKED` state, no new revision is committed. */
	export interface RevokeConsentRequestFormProperties {

		/** Optional. The resource name of the Consent artifact that contains proof of the user's revocation of the Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. */
		consentArtifact: FormControl<string | null | undefined>,
	}
	export function CreateRevokeConsentRequestFormGroup() {
		return new FormGroup<RevokeConsentRequestFormProperties>({
			consentArtifact: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to search the resources in the specified FHIR store. */
	export interface SearchResourcesRequest {

		/** The FHIR resource type to search, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)). */
		resourceType?: string | null;
	}

	/** Request to search the resources in the specified FHIR store. */
	export interface SearchResourcesRequestFormProperties {

		/** The FHIR resource type to search, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)). */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesRequestFormGroup() {
		return new FormGroup<SearchResourcesRequestFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SeriesMetrics contains metrics describing a DICOM series. */
	export interface SeriesMetrics {

		/** Total blob storage bytes for all instances in the series. */
		blobStorageSizeBytes?: string | null;

		/** Number of instances in the series. */
		instanceCount?: string | null;

		/** The series resource path. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}/dicomWeb/studies/{study_uid}/series/{series_uid}`. */
		series?: string | null;

		/** Total structured storage bytes for all instances in the series. */
		structuredStorageSizeBytes?: string | null;
	}

	/** SeriesMetrics contains metrics describing a DICOM series. */
	export interface SeriesMetricsFormProperties {

		/** Total blob storage bytes for all instances in the series. */
		blobStorageSizeBytes: FormControl<string | null | undefined>,

		/** Number of instances in the series. */
		instanceCount: FormControl<string | null | undefined>,

		/** The series resource path. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}/dicomWeb/studies/{study_uid}/series/{series_uid}`. */
		series: FormControl<string | null | undefined>,

		/** Total structured storage bytes for all instances in the series. */
		structuredStorageSizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateSeriesMetricsFormGroup() {
		return new FormGroup<SeriesMetricsFormProperties>({
			blobStorageSizeBytes: new FormControl<string | null | undefined>(undefined),
			instanceCount: new FormControl<string | null | undefined>(undefined),
			series: new FormControl<string | null | undefined>(undefined),
			structuredStorageSizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** StudyMetrics contains metrics describing a DICOM study. */
	export interface StudyMetrics {

		/** Total blob storage bytes for all instances in the study. */
		blobStorageSizeBytes?: string | null;

		/** Number of instances in the study. */
		instanceCount?: string | null;

		/** Number of series in the study. */
		seriesCount?: string | null;

		/** Total structured storage bytes for all instances in the study. */
		structuredStorageSizeBytes?: string | null;

		/** The study resource path. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}/dicomWeb/studies/{study_uid}`. */
		study?: string | null;
	}

	/** StudyMetrics contains metrics describing a DICOM study. */
	export interface StudyMetricsFormProperties {

		/** Total blob storage bytes for all instances in the study. */
		blobStorageSizeBytes: FormControl<string | null | undefined>,

		/** Number of instances in the study. */
		instanceCount: FormControl<string | null | undefined>,

		/** Number of series in the study. */
		seriesCount: FormControl<string | null | undefined>,

		/** Total structured storage bytes for all instances in the study. */
		structuredStorageSizeBytes: FormControl<string | null | undefined>,

		/** The study resource path. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}/dicomWeb/studies/{study_uid}`. */
		study: FormControl<string | null | undefined>,
	}
	export function CreateStudyMetricsFormGroup() {
		return new FormGroup<StudyMetricsFormProperties>({
			blobStorageSizeBytes: new FormControl<string | null | undefined>(undefined),
			instanceCount: new FormControl<string | null | undefined>(undefined),
			seriesCount: new FormControl<string | null | undefined>(undefined),
			structuredStorageSizeBytes: new FormControl<string | null | undefined>(undefined),
			study: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Checks if a particular data_id of a User data mapping in the specified consent store is consented for the specified use.
		 * Post v1/{consentStore}:checkDataAccess
		 * @param {string} consentStore Required. Name of the consent store where the requested data_id is stored, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}`.
		 * @return {CheckDataAccessResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_checkDataAccess(consentStore: string, requestBody: CheckDataAccessRequest): Observable<CheckDataAccessResponse> {
			return this.http.post<CheckDataAccessResponse>(this.baseUri + 'v1/' + (consentStore == null ? '' : encodeURIComponent(consentStore)) + ':checkDataAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Evaluates the user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, which can cause a slight delay between the time mappings are created or updated and when they are included in EvaluateUserConsents results.
		 * Post v1/{consentStore}:evaluateUserConsents
		 * @param {string} consentStore Required. Name of the consent store to retrieve User data mappings from.
		 * @return {EvaluateUserConsentsResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_evaluateUserConsents(consentStore: string, requestBody: EvaluateUserConsentsRequest): Observable<EvaluateUserConsentsResponse> {
			return this.http.post<EvaluateUserConsentsResponse>(this.baseUri + 'v1/' + (consentStore == null ? '' : encodeURIComponent(consentStore)) + ':evaluateUserConsents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Queries all data_ids that are consented for a specified use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. If the request is successful, a detailed response is returned of type QueryAccessibleDataResponse, contained in the response field when the operation finishes. The metadata field type is OperationMetadata. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). For example, the following sample log entry shows a `failed to evaluate consent policy` error that occurred during a QueryAccessibleData call to consent store `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}`. ```json jsonPayload: { @type: "type.googleapis.com/google.cloud.healthcare.logging.QueryAccessibleDataLogEntry" error: { code: 9 message: "failed to evaluate consent policy" } resourceName: "projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}" } logName: "projects/{project_id}/logs/healthcare.googleapis.com%2Fquery_accessible_data" operation: { id: "projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/operations/{operation_id}" producer: "healthcare.googleapis.com/QueryAccessibleData" } receiveTimestamp: "TIMESTAMP" resource: { labels: { consent_store_id: "{consent_store_id}" dataset_id: "{dataset_id}" location: "{location_id}" project_id: "{project_id}" } type: "healthcare_consent_store" } severity: "ERROR" timestamp: "TIMESTAMP" ```
		 * Post v1/{consentStore}:queryAccessibleData
		 * @param {string} consentStore Required. Name of the consent store to retrieve User data mappings from.
		 * @return {Operation} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_queryAccessibleData(consentStore: string, requestBody: QueryAccessibleDataRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (consentStore == null ? '' : encodeURIComponent(consentStore)) + ':queryAccessibleData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an HL7v2 message.
		 * Delete v1/{name}
		 * @param {string} name The resource name of the HL7v2 message to delete.
		 * @return {Empty} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_messages_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @param {GcsDestinationMessageView} view Specifies which parts of the Message resource to return in the response. When unspecified, equivalent to FULL.
		 * @return {Operation} Successful response
		 */
		Healthcare_projects_locations_datasets_operations_get(name: string, view: GcsDestinationMessageView | null | undefined): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Update the message. The contents of the message in Message.data and data extracted from the contents such as Message.create_time cannot be altered. Only the Message.labels field is allowed to be updated. The labels in the request are merged with the existing set of labels. Existing labels with the same keys are updated.
		 * Patch v1/{name}
		 * @param {string} name Resource name of the Message, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server.
		 * @param {string} updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
		 * @return {Message} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_messages_patch(name: string, updateMask: string | null | undefined, requestBody: Message): Observable<Message> {
			return this.http.patch<Message>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the entire contents of a resource. Implements the FHIR standard update interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#update), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#update), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#update)). If the specified resource does not exist and the FHIR store has enable_update_create set, creates the resource with the client-specified ID. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud Audit Logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. The resource must contain an `id` element having an identical value to the ID in the REST path of the request. On success, the response body contains a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `update`, see [Updating a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#updating_a_fhir_resource).
		 * Put v1/{name}
		 * @param {string} name The name of the resource to update.
		 * @return {HttpBody} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_update(name: string, requestBody: HttpBody): Observable<HttpBody> {
			return this.http.put<HttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a Patient resource and resources related to that patient. Implements the FHIR extended operation Patient-everything ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/patient-operations.html#everything), [STU3](http://hl7.org/implement/standards/fhir/STU3/patient-operations.html#everything), [R4](http://hl7.org/implement/standards/fhir/R4/patient-operations.html#everything)). On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the operation. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. The resources in scope for the response are: * The patient resource itself. * All the resources directly referenced by the patient resource. * Resources directly referencing the patient resource that meet the inclusion criteria. The inclusion criteria are based on the membership rules in the patient compartment definition ([DSTU2](http://hl7.org/fhir/DSTU2/compartment-patient.html), [STU3](http://www.hl7.org/fhir/stu3/compartmentdefinition-patient.html), [R4](http://hl7.org/fhir/R4/compartmentdefinition-patient.html)), which details the eligible resource types and referencing search parameters. For samples that show how to call `Patient-everything`, see [Getting all patient compartment resources](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#getting_all_patient_compartment_resources).
		 * Get v1/{name}/$everything
		 * @param {string} name Name of the `Patient` resource for which the information is required.
		 * @param {number} _count Maximum number of resources in a page. If not specified, 100 is used. May not be larger than 1000.
		 * @param {string} _page_token Used to retrieve the next or previous page of results when using pagination. Set `_page_token` to the value of _page_token set in next or previous page links' url. Next and previous page are returned in the response bundle's links field, where `link.relation` is "previous" or "next". Omit `_page_token` if no previous request has been made.
		 * @param {string} _since If provided, only resources updated after this time are returned. The time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, `2015-02-07T13:28:17.239+02:00` or `2017-01-01T00:00:00Z`. The time must be specified to the second and include a time zone.
		 * @param {string} _type String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are returned. Specifying multiple `_type` parameters isn't supported. For example, the result of `_type=Observation&_type=Encounter` is undefined. Use `_type=Observation,Encounter` instead.
		 * @param {string} end The response includes records prior to the end date. The date uses the format YYYY-MM-DD. If no end date is provided, all records subsequent to the start date are in scope.
		 * @param {string} start The response includes records subsequent to the start date. The date uses the format YYYY-MM-DD. If no start date is provided, all records prior to the end date are in scope.
		 * @return {HttpBody} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_Patient_everything(name: string, _count: number | null | undefined, _page_token: string | null | undefined, _since: string | null | undefined, _type: string | null | undefined, end: string | null | undefined, start: string | null | undefined): Observable<HttpBody> {
			return this.http.get<HttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/$everything&_count=' + _count + '&_page_token=' + (_page_token == null ? '' : encodeURIComponent(_page_token)) + '&_since=' + (_since == null ? '' : encodeURIComponent(_since)) + '&_type=' + (_type == null ? '' : encodeURIComponent(_type)) + '&end=' + (end == null ? '' : encodeURIComponent(end)) + '&start=' + (start == null ? '' : encodeURIComponent(start)), {});
		}

		/**
		 * Deletes all the historical versions of a resource (excluding the current version) from the FHIR store. To remove all versions of a resource, first delete the current version and then call this method. This is not a FHIR standard operation. For samples that show how to call `Resource-purge`, see [Deleting historical versions of a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#deleting_historical_versions_of_a_fhir_resource).
		 * Delete v1/{name}/$purge
		 * @param {string} name The name of the resource to purge.
		 * @return {Empty} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_Resource_purge(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/$purge', {});
		}

		/**
		 * Lists all the versions of a resource (including the current version and deleted versions) from the FHIR store. Implements the per-resource form of the FHIR standard history interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#history), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#history), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#history)). On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `history`, containing the version history sorted from most recent to oldest versions. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `history`, see [Listing FHIR resource versions](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#listing_fhir_resource_versions).
		 * Get v1/{name}/_history
		 * @param {string} name The name of the resource to retrieve.
		 * @param {string} _at Only include resource versions that were current at some point during the time period specified in the date time value. The date parameter format is yyyy-mm-ddThh:mm:ss[Z|(+|-)hh:mm] Clients may specify any of the following: * An entire year: `_at=2019` * An entire month: `_at=2019-01` * A specific day: `_at=2019-01-20` * A specific second: `_at=2018-12-31T23:59:58Z`
		 * @param {number} _count The maximum number of search results on a page. If not specified, 100 is used. May not be larger than 1000.
		 * @param {string} _page_token Used to retrieve the first, previous, next, or last page of resource versions when using pagination. Value should be set to the value of `_page_token` set in next or previous page links' URLs. Next and previous page are returned in the response bundle's links field, where `link.relation` is "previous" or "next". Omit `_page_token` if no previous request has been made.
		 * @param {string} _since Only include resource versions that were created at or after the given instant in time. The instant in time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz (for example 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z). The time must be specified to the second and include a time zone.
		 * @return {HttpBody} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_history(name: string, _at: string | null | undefined, _count: number | null | undefined, _page_token: string | null | undefined, _since: string | null | undefined): Observable<HttpBody> {
			return this.http.get<HttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/_history&_at=' + (_at == null ? '' : encodeURIComponent(_at)) + '&_count=' + _count + '&_page_token=' + (_page_token == null ? '' : encodeURIComponent(_page_token)) + '&_since=' + (_since == null ? '' : encodeURIComponent(_since)), {});
		}

		/**
		 * Gets the FHIR capability statement ([STU3](http://hl7.org/implement/standards/fhir/STU3/capabilitystatement.html), [R4](http://hl7.org/implement/standards/fhir/R4/capabilitystatement.html)), or the [conformance statement](http://hl7.org/implement/standards/fhir/DSTU2/conformance.html) in the DSTU2 case for the store, which contains a description of functionality supported by the server. Implements the FHIR standard capabilities interaction ([STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#capabilities), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#capabilities)), or the [conformance interaction](http://hl7.org/implement/standards/fhir/DSTU2/http.html#conformance) in the DSTU2 case. On success, the response body contains a JSON-encoded representation of a `CapabilityStatement` resource.
		 * Get v1/{name}/fhir/metadata
		 * @param {string} name Name of the FHIR store to retrieve the capabilities for.
		 * @return {HttpBody} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_capabilities(name: string): Observable<HttpBody> {
			return this.http.get<HttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/fhir/metadata', {});
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
		Healthcare_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
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
		Healthcare_projects_locations_datasets_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Activates the latest revision of the specified Consent by committing a new revision with `state` updated to `ACTIVE`. If the latest revision of the specified Consent is in the `ACTIVE` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the specified Consent is in the `REJECTED` or `REVOKED` state.
		 * Post v1/{name}:activate
		 * @param {string} name Required. The resource name of the Consent to activate, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. An INVALID_ARGUMENT error occurs if `revision_id` is specified in the name.
		 * @return {Consent} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_consents_activate(name: string, requestBody: ActivateConsentRequest): Observable<Consent> {
			return this.http.post<Consent>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Archives the specified User data mapping.
		 * Post v1/{name}:archive
		 * @param {string} name Required. The resource name of the User data mapping to archive.
		 * @return {ArchiveUserDataMappingResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_userDataMappings_archive(name: string, requestBody: ArchiveUserDataMappingRequest): Observable<ArchiveUserDataMappingResponse> {
			return this.http.post<ArchiveUserDataMappingResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':archive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Healthcare_projects_locations_datasets_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified revision of a Consent. An INVALID_ARGUMENT error occurs if the specified revision is the latest revision.
		 * Delete v1/{name}:deleteRevision
		 * @param {string} name Required. The resource name of the Consent revision to delete, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}@{revision_id}`. An INVALID_ARGUMENT error occurs if `revision_id` is not specified in the name.
		 * @return {Empty} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_consents_deleteRevision(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':deleteRevision', {});
		}

		/**
		 * Exports the messages to a destination. To filter messages to be exported, define a filter using the start and end time, relative to the message generation time (MSH.7). This API returns an Operation that can be used to track the status of the job by calling GetOperation. Immediate fatal errors appear in the error field. Otherwise, when the operation finishes, a detailed response of type ExportMessagesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.
		 * Post v1/{name}:export
		 * @param {string} name The name of the source HL7v2 store, in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7v2Stores/{hl7v2_store_id}`
		 * @return {Operation} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_export(name: string, requestBody: ExportMessagesRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets metrics associated with the DICOM store.
		 * Get v1/{name}:getDICOMStoreMetrics
		 * @param {string} name The resource name of the DICOM store to get metrics for.
		 * @return {DicomStoreMetrics} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_getDICOMStoreMetrics(name: string): Observable<DicomStoreMetrics> {
			return this.http.get<DicomStoreMetrics>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':getDICOMStoreMetrics', {});
		}

		/**
		 * Gets metrics associated with the FHIR store.
		 * Get v1/{name}:getFHIRStoreMetrics
		 * @param {string} name The resource name of the FHIR store to get metrics for.
		 * @return {FhirStoreMetrics} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_getFHIRStoreMetrics(name: string): Observable<FhirStoreMetrics> {
			return this.http.get<FhirStoreMetrics>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':getFHIRStoreMetrics', {});
		}

		/**
		 * Gets metrics associated with the HL7v2 store.
		 * Get v1/{name}:getHL7v2StoreMetrics
		 * @param {string} name The resource name of the HL7v2 store to get metrics for, in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.
		 * @return {Hl7V2StoreMetrics} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_getHL7v2StoreMetrics(name: string): Observable<Hl7V2StoreMetrics> {
			return this.http.get<Hl7V2StoreMetrics>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':getHL7v2StoreMetrics', {});
		}

		/**
		 * Import messages to the HL7v2 store by loading data from the specified sources. This method is optimized to load large quantities of data using import semantics that ignore some HL7v2 store configuration options and are not suitable for all use cases. It is primarily intended to load data into an empty HL7v2 store that is not being used by other clients. An existing message will be overwritten if a duplicate message is imported. A duplicate message is a message with the same raw bytes as a message that already exists in this HL7v2 store. When a message is overwritten, its labels will also be overwritten. The import operation is idempotent unless the input data contains multiple valid messages with the same raw bytes but different labels. In that case, after the import completes, the store contains exactly one message with those raw bytes but there is no ordering guarantee on which version of the labels it has. The operation result counters do not count duplicated raw bytes as an error and count one success for each message in the input, which might result in a success count larger than the number of messages in the HL7v2 store. If some messages fail to import, for example due to parsing errors, successfully imported messages are not rolled back. This method returns an Operation that can be used to track the status of the import by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a response of type ImportMessagesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.
		 * Post v1/{name}:import
		 * @param {string} name The name of the target HL7v2 store, in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7v2Stores/{hl7v2_store_id}`
		 * @return {Operation} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_import(name: string, requestBody: ImportMessagesRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the revisions of the specified Consent in reverse chronological order.
		 * Get v1/{name}:listRevisions
		 * @param {string} name Required. The resource name of the Consent to retrieve revisions for.
		 * @param {string} filter Optional. Restricts the revisions returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Fields available for filtering are: - user_id. For example, `filter='user_id="user123"'`. - consent_artifact - state - revision_create_time - metadata. For example, `filter=Metadata(\"testkey\")=\"value\"` or `filter=HasMetadata(\"testkey\")`.
		 * @param {number} pageSize Optional. Limit on the number of revisions to return in a single response. If not specified, 100 is used. May not be larger than 1000.
		 * @param {string} pageToken Optional. Token to retrieve the next page of results or empty if there are no more results in the list.
		 * @return {ListConsentRevisionsResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_consents_listRevisions(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListConsentRevisionsResponse> {
			return this.http.get<ListConsentRevisionsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':listRevisions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Rejects the latest revision of the specified Consent by committing a new revision with `state` updated to `REJECTED`. If the latest revision of the specified Consent is in the `REJECTED` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the specified Consent is in the `ACTIVE` or `REVOKED` state.
		 * Post v1/{name}:reject
		 * @param {string} name Required. The resource name of the Consent to reject, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. An INVALID_ARGUMENT error occurs if `revision_id` is specified in the name.
		 * @return {Consent} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_consents_reject(name: string, requestBody: RejectConsentRequest): Observable<Consent> {
			return this.http.post<Consent>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':reject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revokes the latest revision of the specified Consent by committing a new revision with `state` updated to `REVOKED`. If the latest revision of the specified Consent is in the `REVOKED` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the given consent is in `DRAFT` or `REJECTED` state.
		 * Post v1/{name}:revoke
		 * @param {string} name Required. The resource name of the Consent to revoke, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. An INVALID_ARGUMENT error occurs if `revision_id` is specified in the name.
		 * @return {Consent} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_consents_revoke(name: string, requestBody: RevokeConsentRequest): Observable<Consent> {
			return this.http.post<Consent>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':revoke', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Analyze heathcare entity in a document. Its response includes the recognized entity mentions and the relationships between them. AnalyzeEntities uses context aware models to detect entities.
		 * Post v1/{nlpService}:analyzeEntities
		 * @param {string} nlpService The resource name of the service of the form: "projects/{project_id}/locations/{location_id}/services/nlp".
		 * @return {AnalyzeEntitiesResponse} Successful response
		 */
		Healthcare_projects_locations_services_nlp_analyzeEntities(nlpService: string, requestBody: AnalyzeEntitiesRequest): Observable<AnalyzeEntitiesResponse> {
			return this.http.post<AnalyzeEntitiesResponse>(this.baseUri + 'v1/' + (nlpService == null ? '' : encodeURIComponent(nlpService)) + ':analyzeEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Attribute definitions in the specified consent store.
		 * Get v1/{parent}/attributeDefinitions
		 * @param {string} parent Required. Name of the consent store to retrieve Attribute definitions from.
		 * @param {string} filter Optional. Restricts the attributes returned to those matching a filter. The only field available for filtering is `category`. For example, `filter=category=\"REQUEST\"`.
		 * @param {number} pageSize Optional. Limit on the number of Attribute definitions to return in a single response. If not specified, 100 is used. May not be larger than 1000.
		 * @param {string} pageToken Optional. Token to retrieve the next page of results or empty to get the first page.
		 * @return {ListAttributeDefinitionsResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_attributeDefinitions_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAttributeDefinitionsResponse> {
			return this.http.get<ListAttributeDefinitionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attributeDefinitions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Attribute definition in the parent consent store.
		 * Post v1/{parent}/attributeDefinitions
		 * @param {string} parent Required. The name of the consent store that this Attribute definition belongs to.
		 * @param {string} attributeDefinitionId Required. The ID of the Attribute definition to create. The string must match the following regex: `_a-zA-Z{0,255}` and must not be a reserved keyword within the Common Expression Language as listed on https://github.com/google/cel-spec/blob/master/doc/langdef.md.
		 * @return {AttributeDefinition} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_attributeDefinitions_create(parent: string, attributeDefinitionId: string | null | undefined, requestBody: AttributeDefinition): Observable<AttributeDefinition> {
			return this.http.post<AttributeDefinition>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attributeDefinitions&attributeDefinitionId=' + (attributeDefinitionId == null ? '' : encodeURIComponent(attributeDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Consent artifacts in the specified consent store.
		 * Get v1/{parent}/consentArtifacts
		 * @param {string} parent Required. Name of the consent store to retrieve consent artifacts from.
		 * @param {string} filter Optional. Restricts the artifacts returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The fields available for filtering are: - user_id. For example, `filter=user_id=\"user123\"`. - consent_content_version - metadata. For example, `filter=Metadata(\"testkey\")=\"value\"` or `filter=HasMetadata(\"testkey\")`.
		 * @param {number} pageSize Optional. Limit on the number of consent artifacts to return in a single response. If not specified, 100 is used. May not be larger than 1000.
		 * @param {string} pageToken Optional. The next_page_token value returned from the previous List request, if any.
		 * @return {ListConsentArtifactsResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_consentArtifacts_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListConsentArtifactsResponse> {
			return this.http.get<ListConsentArtifactsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/consentArtifacts&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Consent artifact in the parent consent store.
		 * Post v1/{parent}/consentArtifacts
		 * @param {string} parent Required. The name of the consent store this Consent artifact belongs to.
		 * @return {ConsentArtifact} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_consentArtifacts_create(parent: string, requestBody: ConsentArtifact): Observable<ConsentArtifact> {
			return this.http.post<ConsentArtifact>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/consentArtifacts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the consent stores in the specified dataset.
		 * Get v1/{parent}/consentStores
		 * @param {string} parent Required. Name of the dataset.
		 * @param {string} filter Optional. Restricts the stores returned to those matching a filter. Only filtering on labels is supported. For example, `filter=labels.key=value`.
		 * @param {number} pageSize Optional. Limit on the number of consent stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.
		 * @param {string} pageToken Optional. Token to retrieve the next page of results, or empty to get the first page.
		 * @return {ListConsentStoresResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListConsentStoresResponse> {
			return this.http.get<ListConsentStoresResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/consentStores&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new consent store in the parent dataset. Attempting to create a consent store with the same ID as an existing store fails with an ALREADY_EXISTS error.
		 * Post v1/{parent}/consentStores
		 * @param {string} parent Required. The name of the dataset this consent store belongs to.
		 * @param {string} consentStoreId Required. The ID of the consent store to create. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`. Cannot be changed after creation.
		 * @return {ConsentStore} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_create(parent: string, consentStoreId: string | null | undefined, requestBody: ConsentStore): Observable<ConsentStore> {
			return this.http.post<ConsentStore>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/consentStores&consentStoreId=' + (consentStoreId == null ? '' : encodeURIComponent(consentStoreId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Consent in the given consent store, returning each Consent's latest revision.
		 * Get v1/{parent}/consents
		 * @param {string} parent Required. Name of the consent store to retrieve Consents from.
		 * @param {string} filter Optional. Restricts the Consents returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The fields available for filtering are: - user_id. For example, `filter='user_id="user123"'`. - consent_artifact - state - revision_create_time - metadata. For example, `filter=Metadata(\"testkey\")=\"value\"` or `filter=HasMetadata(\"testkey\")`.
		 * @param {number} pageSize Optional. Limit on the number of Consents to return in a single response. If not specified, 100 is used. May not be larger than 1000.
		 * @param {string} pageToken Optional. The next_page_token value returned from the previous List request, if any.
		 * @return {ListConsentsResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_consents_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListConsentsResponse> {
			return this.http.get<ListConsentsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/consents&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Consent in the parent consent store.
		 * Post v1/{parent}/consents
		 * @param {string} parent Required. Name of the consent store.
		 * @return {Consent} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_consents_create(parent: string, requestBody: Consent): Observable<Consent> {
			return this.http.post<Consent>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/consents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the health datasets in the current project.
		 * Get v1/{parent}/datasets
		 * @param {string} parent The name of the project whose datasets should be listed. For example, `projects/{project_id}/locations/{location_id}`.
		 * @param {number} pageSize The maximum number of items to return. If not specified, 100 is used. May not be larger than 1000.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListDatasetsResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDatasetsResponse> {
			return this.http.get<ListDatasetsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datasets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new health dataset. Results are returned through the Operation interface which returns either an `Operation.response` which contains a Dataset or `Operation.error`. The metadata field type is OperationMetadata.
		 * Post v1/{parent}/datasets
		 * @param {string} parent The name of the project where the server creates the dataset. For example, `projects/{project_id}/locations/{location_id}`.
		 * @param {string} datasetId The ID of the dataset that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
		 * @return {Operation} Successful response
		 */
		Healthcare_projects_locations_datasets_create(parent: string, datasetId: string | null | undefined, requestBody: Dataset): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datasets&datasetId=' + (datasetId == null ? '' : encodeURIComponent(datasetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the DICOM stores in the given dataset.
		 * Get v1/{parent}/dicomStores
		 * @param {string} parent Name of the dataset.
		 * @param {string} filter Restricts stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported. For example, `labels.key=value`.
		 * @param {number} pageSize Limit on the number of DICOM stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.
		 * @param {string} pageToken The next_page_token value returned from the previous List request, if any.
		 * @return {ListDicomStoresResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDicomStoresResponse> {
			return this.http.get<ListDicomStoresResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dicomStores&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new DICOM store within the parent dataset.
		 * Post v1/{parent}/dicomStores
		 * @param {string} parent The name of the dataset this DICOM store belongs to.
		 * @param {string} dicomStoreId The ID of the DICOM store that is being created. Any string value up to 256 characters in length.
		 * @return {DicomStore} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_create(parent: string, dicomStoreId: string | null | undefined, requestBody: DicomStore): Observable<DicomStore> {
			return this.http.post<DicomStore>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dicomStores&dicomStoreId=' + (dicomStoreId == null ? '' : encodeURIComponent(dicomStoreId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DeleteInstance deletes an instance associated with the given study, series, and SOP Instance UID. Delete requests are equivalent to the GET requests specified in the Retrieve transaction. Study and series search results can take a few seconds to be updated after an instance is deleted using DeleteInstance. For samples that show how to call DeleteInstance, see [Delete a study, series, or instance](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#delete-dicom).
		 * Delete v1/{parent}/dicomWeb/{dicomWebPath}
		 * @param {string} parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
		 * @param {string} dicomWebPath The path of the DeleteInstance request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}`.
		 * @return {Empty} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_studies_series_instances_delete(parent: string, dicomWebPath: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dicomWeb/' + (dicomWebPath == null ? '' : encodeURIComponent(dicomWebPath)), {});
		}

		/**
		 * RetrieveRenderedFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers in an acceptable Rendered Media Type. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveRenderedFrames, see [Rendered resources](https://cloud.google.com/healthcare/docs/dicom#rendered_resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveRenderedFrames, see [Retrieve consumer image formats](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-consumer).
		 * Get v1/{parent}/dicomWeb/{dicomWebPath}
		 * @param {string} parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
		 * @param {string} dicomWebPath The path of the RetrieveRenderedFrames DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/frames/{frame_list}/rendered`.
		 * @return {HttpBody} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_studies_series_instances_frames_retrieveRendered(parent: string, dicomWebPath: string): Observable<HttpBody> {
			return this.http.get<HttpBody>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dicomWeb/' + (dicomWebPath == null ? '' : encodeURIComponent(dicomWebPath)), {});
		}

		/**
		 * StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). See [Store Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5). For details on the implementation of StoreInstances, see [Store transaction](https://cloud.google.com/healthcare/docs/dicom#store_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call StoreInstances, see [Store DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#store-dicom).
		 * Post v1/{parent}/dicomWeb/{dicomWebPath}
		 * @param {string} parent The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
		 * @param {string} dicomWebPath The path of the StoreInstances DICOMweb request. For example, `studies/[{study_uid}]`. Note that the `study_uid` is optional.
		 * @return {HttpBody} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_studies_storeInstances(parent: string, dicomWebPath: string, requestBody: HttpBody): Observable<HttpBody> {
			return this.http.post<HttpBody>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dicomWeb/' + (dicomWebPath == null ? '' : encodeURIComponent(dicomWebPath)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Executes all the requests in the given Bundle. Implements the FHIR standard batch/transaction interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#transaction), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#transaction), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#transaction)). Supports all interactions within a bundle, except search. This method accepts Bundles of type `batch` and `transaction`, processing them according to the batch processing rules ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.1), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.1), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#brules)) and transaction processing rules ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.2), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.2), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#trules)). The request body must contain a JSON-encoded FHIR `Bundle` resource, and the request headers must contain `Content-Type: application/fhir+json`. For a batch bundle or a successful transaction, the response body contains a JSON-encoded representation of a `Bundle` resource of type `batch-response` or `transaction-response` containing one entry for each entry in the request, with the outcome of processing the entry. In the case of an error for a transaction bundle, the response body contains a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. This method checks permissions for each request in the bundle. The `executeBundle` permission is required to call this method, but you must also grant sufficient permissions to execute the individual requests in the bundle. For example, if the bundle contains a request to create a FHIR resource, the caller must also have been granted the `healthcare.fhirResources.create` permission. You can use audit logs to view the permissions for `executeBundle` and each request in the bundle. For more information, see [Viewing Cloud Audit logs](https://cloud.google.com/healthcare-api/docs/how-tos/audit-logging). For samples that show how to call `executeBundle`, see [Managing FHIR resources using FHIR bundles](https://cloud.google.com/healthcare/docs/how-tos/fhir-bundles).
		 * Post v1/{parent}/fhir
		 * @param {string} parent Name of the FHIR store in which this bundle will be executed.
		 * @return {HttpBody} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_executeBundle(parent: string, requestBody: HttpBody): Observable<HttpBody> {
			return this.http.post<HttpBody>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for resources in the given FHIR store according to criteria specified as query parameters. Implements the FHIR standard search interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#search), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#search), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#search)) using the search semantics described in the FHIR Search specification ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/search.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/search.html), [R4](http://hl7.org/implement/standards/fhir/R4/search.html)). Supports four methods of search defined by the specification: * `GET [base]?[parameters]` to search across all resources. * `GET [base]/[type]?[parameters]` to search resources of a specified type. * `POST [base]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method across all resources. * `POST [base]/[type]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method for the specified type. The `GET` and `POST` methods do not support compartment searches. The `POST` method does not support `application/x-www-form-urlencoded` search parameters. On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the search. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. The server's capability statement, retrieved through capabilities, indicates what search parameters are supported on each FHIR resource. A list of all search parameters defined by the specification can be found in the FHIR Search Parameter Registry ([STU3](http://hl7.org/implement/standards/fhir/STU3/searchparameter-registry.html), [R4](http://hl7.org/implement/standards/fhir/R4/searchparameter-registry.html)). FHIR search parameters for DSTU2 can be found on each resource's definition page. Supported search modifiers: `:missing`, `:exact`, `:contains`, `:text`, `:in`, `:not-in`, `:above`, `:below`, `:[type]`, `:not`, and `recurse` (DSTU2 and STU3) or `:iterate` (R4). Supported search result parameters: `_sort`, `_count`, `_include`, `_revinclude`, `_summary=text`, `_summary=data`, and `_elements`. The maximum number of search results returned defaults to 100, which can be overridden by the `_count` parameter up to a maximum limit of 1000. The server might return fewer resources than requested to prevent excessively large responses. If there are additional results, the returned `Bundle` contains a link of `relation` "next", which has a `_page_token` parameter for an opaque pagination token that can be used to retrieve the next page. Resources with a total size larger than 5MB or a field count larger than 50,000 might not be fully searchable as the server might trim its generated search index in those cases. Note: FHIR resources are indexed asynchronously, so there might be a slight delay between the time a resource is created or changed, and the time when the change reflects in search results. The only exception is resource identifier data, which is indexed synchronously as a special index. As a result, searching using resource identifier is not subject to indexing delay. To use the special synchronous index, the search term for identifier should be in the pattern `identifier=[system]|[value]` or `identifier=[value]`, and any of the following search result parameters can be used: * `_count` * `_include` * `_revinclude` * `_summary` * `_elements` If your query contains any other search parameters, the standard asynchronous index will be used instead. Note that searching against the special index is optimized for resolving a small number of matches. The search isn't optimized if your identifier search criteria matches a large number (i.e. more than 2,000) of resources. For a search query that will match a large number of resources, you can avoiding using the special synchronous index by including an additional `_sort` parameter in your query. Use `_sort=-_lastUpdated` if you want to keep the default sorting order. Note: The special synchronous identifier index are currently disabled for DocumentReference and DocumentManifest searches. For samples and detailed information, see [Searching for FHIR resources](https://cloud.google.com/healthcare/docs/how-tos/fhir-search) and [Advanced FHIR search features](https://cloud.google.com/healthcare/docs/how-tos/fhir-advanced-search).
		 * Post v1/{parent}/fhir/_search
		 * @param {string} parent Name of the FHIR store to retrieve resources from.
		 * @return {HttpBody} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_search(parent: string, requestBody: SearchResourcesRequest): Observable<HttpBody> {
			return this.http.post<HttpBody>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir/_search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for resources in the given FHIR store according to criteria specified as query parameters. Implements the FHIR standard search interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#search), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#search), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#search)) using the search semantics described in the FHIR Search specification ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/search.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/search.html), [R4](http://hl7.org/implement/standards/fhir/R4/search.html)). Supports four methods of search defined by the specification: * `GET [base]?[parameters]` to search across all resources. * `GET [base]/[type]?[parameters]` to search resources of a specified type. * `POST [base]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method across all resources. * `POST [base]/[type]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method for the specified type. The `GET` and `POST` methods do not support compartment searches. The `POST` method does not support `application/x-www-form-urlencoded` search parameters. On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the search. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. The server's capability statement, retrieved through capabilities, indicates what search parameters are supported on each FHIR resource. A list of all search parameters defined by the specification can be found in the FHIR Search Parameter Registry ([STU3](http://hl7.org/implement/standards/fhir/STU3/searchparameter-registry.html), [R4](http://hl7.org/implement/standards/fhir/R4/searchparameter-registry.html)). FHIR search parameters for DSTU2 can be found on each resource's definition page. Supported search modifiers: `:missing`, `:exact`, `:contains`, `:text`, `:in`, `:not-in`, `:above`, `:below`, `:[type]`, `:not`, and `recurse` (DSTU2 and STU3) or `:iterate` (R4). Supported search result parameters: `_sort`, `_count`, `_include`, `_revinclude`, `_summary=text`, `_summary=data`, and `_elements`. The maximum number of search results returned defaults to 100, which can be overridden by the `_count` parameter up to a maximum limit of 1000. The server might return fewer resources than requested to prevent excessively large responses. If there are additional results, the returned `Bundle` contains a link of `relation` "next", which has a `_page_token` parameter for an opaque pagination token that can be used to retrieve the next page. Resources with a total size larger than 5MB or a field count larger than 50,000 might not be fully searchable as the server might trim its generated search index in those cases. Note: FHIR resources are indexed asynchronously, so there might be a slight delay between the time a resource is created or changed, and the time when the change reflects in search results. The only exception is resource identifier data, which is indexed synchronously as a special index. As a result, searching using resource identifier is not subject to indexing delay. To use the special synchronous index, the search term for identifier should be in the pattern `identifier=[system]|[value]` or `identifier=[value]`, and any of the following search result parameters can be used: * `_count` * `_include` * `_revinclude` * `_summary` * `_elements` If your query contains any other search parameters, the standard asynchronous index will be used instead. Note that searching against the special index is optimized for resolving a small number of matches. The search isn't optimized if your identifier search criteria matches a large number (i.e. more than 2,000) of resources. For a search query that will match a large number of resources, you can avoiding using the special synchronous index by including an additional `_sort` parameter in your query. Use `_sort=-_lastUpdated` if you want to keep the default sorting order. Note: The special synchronous identifier index are currently disabled for DocumentReference and DocumentManifest searches. For samples and detailed information, see [Searching for FHIR resources](https://cloud.google.com/healthcare/docs/how-tos/fhir-search) and [Advanced FHIR search features](https://cloud.google.com/healthcare/docs/how-tos/fhir-advanced-search).
		 * Post v1/{parent}/fhir/{resourceType}/_search
		 * @param {string} parent Name of the FHIR store to retrieve resources from.
		 * @param {string} resourceType The FHIR resource type to search, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
		 * @return {HttpBody} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_search_type(parent: string, resourceType: string, requestBody: SearchResourcesRequest): Observable<HttpBody> {
			return this.http.post<HttpBody>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/_search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a FHIR resource that match an identifier search query. Implements the FHIR standard conditional delete interaction, limited to searching by resource identifier. If multiple resources match, 412 Precondition Failed error will be returned. Search term for identifier should be in the pattern `identifier=system|value` or `identifier=value` - similar to the `search` method on resources with a specific identifier. Note: Unless resource versioning is disabled by setting the disable_resource_versioning flag on the FHIR store, the deleted resource is moved to a history repository that can still be retrieved through vread and related methods, unless they are removed by the purge method. For samples that show how to call `conditionalDelete`, see [Conditionally deleting a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#conditionally_deleting_a_fhir_resource).
		 * Delete v1/{parent}/fhir/{type}
		 * @param {string} parent The name of the FHIR store this resource belongs to.
		 * @param {string} type The FHIR resource type to delete, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
		 * @return {Empty} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_conditionalDelete(parent: string, type: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir/' + (type == null ? '' : encodeURIComponent(type)), {});
		}

		/**
		 * If a resource is found with the identifier specified in the query parameters, updates part of that resource by applying the operations specified in a [JSON Patch](http://jsonpatch.com/) document. Implements the FHIR standard conditional patch interaction, limited to searching by resource identifier. DSTU2 doesn't define a conditional patch method, but the server supports it in the same way it supports STU3. Search term for identifier should be in the pattern `identifier=system|value` or `identifier=value` - similar to the `search` method on resources with a specific identifier. If the search criteria identify more than one match, the request returns a `412 Precondition Failed` error. The request body must contain a JSON Patch document, and the request headers must contain `Content-Type: application/json-patch+json`. On success, the response body contains a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `conditionalPatch`, see [Conditionally patching a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#conditionally_patching_a_fhir_resource).
		 * Patch v1/{parent}/fhir/{type}
		 * @param {string} parent The name of the FHIR store this resource belongs to.
		 * @param {string} type The FHIR resource type to update, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
		 * @return {HttpBody} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_conditionalPatch(parent: string, type: string, requestBody: HttpBody): Observable<HttpBody> {
			return this.http.patch<HttpBody>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir/' + (type == null ? '' : encodeURIComponent(type)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a FHIR resource. Implements the FHIR standard create interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#create), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#create), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#create)), which creates a new resource with a server-assigned resource ID. Also supports the FHIR standard conditional create interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#ccreate), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#ccreate), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#ccreate)), specified by supplying an `If-None-Exist` header containing a FHIR search query, limited to searching by resource identifier. If no resources match this search query, the server processes the create operation as normal. When using conditional create, the search term for identifier should be in the pattern `identifier=system|value` or `identifier=value` - similar to the `search` method on resources with a specific identifier. The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. On success, the response body contains a JSON-encoded representation of the resource as it was created on the server, including the server-assigned resource ID and version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `create`, see [Creating a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#creating_a_fhir_resource).
		 * Post v1/{parent}/fhir/{type}
		 * @param {string} parent The name of the FHIR store this resource belongs to.
		 * @param {string} type The FHIR resource type to create, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.
		 * @return {HttpBody} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_create(parent: string, type: string, requestBody: HttpBody): Observable<HttpBody> {
			return this.http.post<HttpBody>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir/' + (type == null ? '' : encodeURIComponent(type)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * If a resource is found with the identifier specified in the query parameters, updates the entire contents of that resource. Implements the FHIR standard conditional update interaction, limited to searching by resource identifier. Search term for identifier should be in the pattern `identifier=system|value` or `identifier=value` - similar to the `search` method on resources with a specific identifier. If the search criteria identify more than one match, the request returns a `412 Precondition Failed` error. If the search criteria identify zero matches, and the supplied resource body contains an `id`, and the FHIR store has enable_update_create set, creates the resource with the client-specified ID. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud Audit Logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. If the search criteria identify zero matches, and the supplied resource body does not contain an `id`, the resource is created with a server-assigned ID as per the create method. The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. On success, the response body contains a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `conditionalUpdate`, see [Conditionally updating a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#conditionally_updating_a_fhir_resource).
		 * Put v1/{parent}/fhir/{type}
		 * @param {string} parent The name of the FHIR store this resource belongs to.
		 * @param {string} type The FHIR resource type to update, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.
		 * @return {HttpBody} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_conditionalUpdate(parent: string, type: string, requestBody: HttpBody): Observable<HttpBody> {
			return this.http.put<HttpBody>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir/' + (type == null ? '' : encodeURIComponent(type)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates an input FHIR resource's conformance to its profiles and the profiles configured on the FHIR store. Implements the FHIR extended operation $validate ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resource-operations.html#validate), [STU3](http://hl7.org/implement/standards/fhir/STU3/resource-operations.html#validate), or [R4](http://hl7.org/implement/standards/fhir/R4/resource-operation-validate.html)). The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. The `Parameters` input syntax is not supported. The `profile` query parameter can be used to request that the resource only be validated against a specific profile. If a profile with the given URL cannot be found in the FHIR store then an error is returned. Errors generated by validation contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.
		 * Post v1/{parent}/fhir/{type}/$validate
		 * @param {string} parent The name of the FHIR store that holds the profiles being used for validation.
		 * @param {string} type The FHIR resource type of the resource being validated. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), or [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.
		 * @param {string} profile The canonical URL of a profile that this resource should be validated against. For example, to validate a Patient resource against the US Core Patient profile this parameter would be `http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient`. A StructureDefinition with this canonical URL must exist in the FHIR store.
		 * @return {HttpBody} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_Resource_validate(parent: string, type: string, profile: string | null | undefined, requestBody: HttpBody): Observable<HttpBody> {
			return this.http.post<HttpBody>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir/' + (type == null ? '' : encodeURIComponent(type)) + '/$validate&profile=' + (profile == null ? '' : encodeURIComponent(profile)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the FHIR stores in the given dataset.
		 * Get v1/{parent}/fhirStores
		 * @param {string} parent Name of the dataset.
		 * @param {string} filter Restricts stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported, for example `labels.key=value`.
		 * @param {number} pageSize Limit on the number of FHIR stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.
		 * @param {string} pageToken The next_page_token value returned from the previous List request, if any.
		 * @return {ListFhirStoresResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListFhirStoresResponse> {
			return this.http.get<ListFhirStoresResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhirStores&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new FHIR store within the parent dataset.
		 * Post v1/{parent}/fhirStores
		 * @param {string} parent The name of the dataset this FHIR store belongs to.
		 * @param {string} fhirStoreId The ID of the FHIR store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
		 * @return {FhirStore} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_create(parent: string, fhirStoreId: string | null | undefined, requestBody: FhirStore): Observable<FhirStore> {
			return this.http.post<FhirStore>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhirStores&fhirStoreId=' + (fhirStoreId == null ? '' : encodeURIComponent(fhirStoreId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the HL7v2 stores in the given dataset.
		 * Get v1/{parent}/hl7V2Stores
		 * @param {string} parent Name of the dataset.
		 * @param {string} filter Restricts stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported. For example, `labels.key=value`.
		 * @param {number} pageSize Limit on the number of HL7v2 stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.
		 * @param {string} pageToken The next_page_token value returned from the previous List request, if any.
		 * @return {ListHl7V2StoresResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListHl7V2StoresResponse> {
			return this.http.get<ListHl7V2StoresResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hl7V2Stores&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new HL7v2 store within the parent dataset.
		 * Post v1/{parent}/hl7V2Stores
		 * @param {string} parent The name of the dataset this HL7v2 store belongs to.
		 * @param {string} hl7V2StoreId The ID of the HL7v2 store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
		 * @return {Hl7V2Store} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_create(parent: string, hl7V2StoreId: string | null | undefined, requestBody: Hl7V2Store): Observable<Hl7V2Store> {
			return this.http.post<Hl7V2Store>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hl7V2Stores&hl7V2StoreId=' + (hl7V2StoreId == null ? '' : encodeURIComponent(hl7V2StoreId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the messages in the given HL7v2 store with support for filtering. Note: HL7v2 messages are indexed asynchronously, so there might be a slight delay between the time a message is created and when it can be found through a filter.
		 * Get v1/{parent}/messages
		 * @param {string} parent Name of the HL7v2 store to retrieve messages from.
		 * @param {string} filter Restricts messages returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Fields/functions available for filtering are: * `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. * `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset's time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. * `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. * `create_time`, the timestamp when the message was created in the HL7v2 store. Use the RFC3339 time format for comparisons. For example, `create_time < "2017-01-02T00:00:00-05:00"`. * `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. * `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, `PatientId("123456", "MRN")`. * `labels.x`, a string value of the label with key `x` as set using the Message.labels map. For example, `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label. For example, `labels."priority":*`.
		 * @param {string} orderBy Orders messages returned by the specified order_by clause. Syntax: https://cloud.google.com/apis/design/design_patterns#sorting_order Fields available for ordering are: * `send_time`
		 * @param {number} pageSize Limit on the number of messages to return in a single response. If not specified, 100 is used. May not be larger than 1000.
		 * @param {string} pageToken The next_page_token value returned from the previous List request, if any.
		 * @param {GcsDestinationMessageView} view Specifies the parts of the Message to return in the response. When unspecified, equivalent to BASIC. Setting this to anything other than BASIC with a `page_size` larger than the default can generate a large response, which impacts the performance of this method.
		 * @return {ListMessagesResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_messages_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: GcsDestinationMessageView | null | undefined): Observable<ListMessagesResponse> {
			return this.http.get<ListMessagesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/messages&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Parses and stores an HL7v2 message. This method triggers an asynchronous notification to any Pub/Sub topic configured in Hl7V2Store.Hl7V2NotificationConfig, if the filtering matches the message. If an MLLP adapter is configured to listen to a Pub/Sub topic, the adapter transmits the message when a notification is received.
		 * Post v1/{parent}/messages
		 * @param {string} parent The name of the HL7v2 store this message belongs to.
		 * @return {Message} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_messages_create(parent: string, requestBody: CreateMessageRequest): Observable<Message> {
			return this.http.post<Message>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Parses and stores an HL7v2 message. This method triggers an asynchronous notification to any Pub/Sub topic configured in Hl7V2Store.Hl7V2NotificationConfig, if the filtering matches the message. If an MLLP adapter is configured to listen to a Pub/Sub topic, the adapter transmits the message when a notification is received. If the method is successful, it generates a response containing an HL7v2 acknowledgment (`ACK`) message. If the method encounters an error, it returns a negative acknowledgment (`NACK`) message. This behavior is suitable for replying to HL7v2 interface systems that expect these acknowledgments.
		 * Post v1/{parent}/messages:ingest
		 * @param {string} parent The name of the HL7v2 store this message belongs to.
		 * @return {IngestMessageResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_messages_ingest(parent: string, requestBody: IngestMessageRequest): Observable<IngestMessageResponse> {
			return this.http.post<IngestMessageResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/messages:ingest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the User data mappings in the specified consent store.
		 * Get v1/{parent}/userDataMappings
		 * @param {string} parent Required. Name of the consent store to retrieve User data mappings from.
		 * @param {string} filter Optional. Restricts the User data mappings returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The fields available for filtering are: - data_id - user_id. For example, `filter=user_id=\"user123\"`. - archived - archive_time
		 * @param {number} pageSize Optional. Limit on the number of User data mappings to return in a single response. If not specified, 100 is used. May not be larger than 1000.
		 * @param {string} pageToken Optional. Token to retrieve the next page of results, or empty to get the first page.
		 * @return {ListUserDataMappingsResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_userDataMappings_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListUserDataMappingsResponse> {
			return this.http.get<ListUserDataMappingsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userDataMappings&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new User data mapping in the parent consent store.
		 * Post v1/{parent}/userDataMappings
		 * @param {string} parent Required. Name of the consent store.
		 * @return {UserDataMapping} Successful response
		 */
		Healthcare_projects_locations_datasets_consentStores_userDataMappings_create(parent: string, requestBody: UserDataMapping): Observable<UserDataMapping> {
			return this.http.post<UserDataMapping>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userDataMappings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * GetSeriesMetrics returns metrics for a series.
		 * Get v1/{series}:getSeriesMetrics
		 * @param {string} series The series resource path. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}/dicomWeb/studies/{study_uid}/series/{series_uid}`.
		 * @return {SeriesMetrics} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_dicomWeb_studies_series_getSeriesMetrics(series: string): Observable<SeriesMetrics> {
			return this.http.get<SeriesMetrics>(this.baseUri + 'v1/' + (series == null ? '' : encodeURIComponent(series)) + ':getSeriesMetrics', {});
		}

		/**
		 * Creates a new dataset containing de-identified data from the source dataset. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifySummary. If errors occur, error is set. The LRO result may still be successful if de-identification fails for some DICOM instances. The new de-identified dataset will not contain these failed resources. Failed resource totals are tracked in Operation.metadata. Error details are also logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging).
		 * Post v1/{sourceDataset}:deidentify
		 * @param {string} sourceDataset Source dataset resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
		 * @return {Operation} Successful response
		 */
		Healthcare_projects_locations_datasets_deidentify(sourceDataset: string, requestBody: DeidentifyDatasetRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (sourceDataset == null ? '' : encodeURIComponent(sourceDataset)) + ':deidentify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * De-identifies data from the source store and writes it to the destination store. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifyFhirStoreSummary. If errors occur, error is set. Error details are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).
		 * Post v1/{sourceStore}:deidentify
		 * @param {string} sourceStore Source FHIR store resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
		 * @return {Operation} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_deidentify(sourceStore: string, requestBody: DeidentifyFhirStoreRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (sourceStore == null ? '' : encodeURIComponent(sourceStore)) + ':deidentify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * GetStudyMetrics returns metrics for a study.
		 * Get v1/{study}:getStudyMetrics
		 * @param {string} study The study resource path. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}/dicomWeb/studies/{study_uid}`.
		 * @return {StudyMetrics} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_dicomWeb_studies_getStudyMetrics(study: string): Observable<StudyMetrics> {
			return this.http.get<StudyMetrics>(this.baseUri + 'v1/' + (study == null ? '' : encodeURIComponent(study)) + ':getStudyMetrics', {});
		}
	}

}

