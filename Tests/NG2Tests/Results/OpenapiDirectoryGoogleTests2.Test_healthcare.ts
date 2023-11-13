import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * Specifies the audit configuration for a service.
	 * The configuration determines which permission types are logged, and what
	 * identities, if any, are exempted from logging.
	 * An AuditConfig must have one or more AuditLogConfigs.
	 * If there are AuditConfigs for both `allServices` and a specific service,
	 * the union of the two AuditConfigs is used for that service: the log_types
	 * specified in each AuditConfig are enabled, and the exempted_members in each
	 * AuditLogConfig are exempted.
	 * Example Policy with multiple AuditConfigs:
	 *     {
	 *       "audit_configs": [
	 *         {
	 *           "service": "allServices"
	 *           "audit_log_configs": [
	 *             {
	 *               "log_type": "DATA_READ",
	 *               "exempted_members": [
	 *                 "user:jose@example.com"
	 *               ]
	 *             },
	 *             {
	 *               "log_type": "DATA_WRITE",
	 *             },
	 *             {
	 *               "log_type": "ADMIN_READ",
	 *             }
	 *           ]
	 *         },
	 *         {
	 *           "service": "sampleservice.googleapis.com"
	 *           "audit_log_configs": [
	 *             {
	 *               "log_type": "DATA_READ",
	 *             },
	 *             {
	 *               "log_type": "DATA_WRITE",
	 *               "exempted_members": [
	 *                 "user:aliya@example.com"
	 *               ]
	 *             }
	 *           ]
	 *         }
	 *       ]
	 *     }
	 * For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ
	 * logging. It also exempts jose@example.com from DATA_READ logging, and
	 * aliya@example.com from DATA_WRITE logging.
	 */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig> | null;

		/**
		 * Specifies a service that will be enabled for audit logging.
		 * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
		 * `allServices` is a special value that covers all services.
		 */
		service?: string | null;
	}


	/**
	 * Provides the configuration for logging a type of permissions.
	 * Example:
	 *     {
	 *       "audit_log_configs": [
	 *         {
	 *           "log_type": "DATA_READ",
	 *           "exempted_members": [
	 *             "user:jose@example.com"
	 *           ]
	 *         },
	 *         {
	 *           "log_type": "DATA_WRITE",
	 *         }
	 *       ]
	 *     }
	 * This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting
	 * jose@example.com from DATA_READ logging.
	 */
	export interface AuditLogConfig {

		/**
		 * Specifies the identities that do not cause logging for this type of
		 * permission.
		 * Follows the same format of Binding.members.
		 */
		exemptedMembers?: Array<string> | null;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType | null;
	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


	/** Associates `members` with a `role`. */
	export interface Binding {

		/**
		 * Represents a textual expression in the Common Expression Language (CEL)
		 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
		 * are documented at https://github.com/google/cel-spec.
		 * Example (Comparison):
		 * title: "Summary size limit"
		 * description: "Determines if a summary is less than 100 chars"
		 * expression: "document.summary.size() < 100"
		 * Example (Equality):
		 * title: "Requestor is owner"
		 * description: "Determines if requestor is the document owner"
		 * expression: "document.owner == request.auth.claims.email"
		 * Example (Logic):
		 * title: "Public documents"
		 * description: "Determine whether the document should be publicly visible"
		 * expression: "document.type != 'private' && document.type != 'internal'"
		 * Example (Data Manipulation):
		 * title: "Notification string"
		 * description: "Create a notification string with a timestamp."
		 * expression: "'New message received at ' + string(document.create_time)"
		 * The exact variables and functions that may be referenced within an expression
		 * are determined by the service that evaluates it. See the service
		 * documentation for additional information.
		 */
		condition?: Expr | null;

		/**
		 * Specifies the identities requesting access for a Cloud Platform resource.
		 * `members` can have the following values:
		 * * `allUsers`: A special identifier that represents anyone who is
		 * on the internet; with or without a Google account.
		 * * `allAuthenticatedUsers`: A special identifier that represents anyone
		 * who is authenticated with a Google account or a service account.
		 * * `user:{emailid}`: An email address that represents a specific Google
		 * account. For example, `alice@example.com` .
		 * * `serviceAccount:{emailid}`: An email address that represents a service
		 * account. For example, `my-other-app@appspot.gserviceaccount.com`.
		 * * `group:{emailid}`: An email address that represents a Google group.
		 * For example, `admins@example.com`.
		 * * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a user that has been recently deleted. For
		 * example, `alice@example.com?uid=123456789012345678901`. If the user is
		 * recovered, this value reverts to `user:{emailid}` and the recovered user
		 * retains the role in the binding.
		 * * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus
		 * unique identifier) representing a service account that has been recently
		 * deleted. For example,
		 * `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.
		 * If the service account is undeleted, this value reverts to
		 * `serviceAccount:{emailid}` and the undeleted service account retains the
		 * role in the binding.
		 * * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a Google group that has been recently
		 * deleted. For example, `admins@example.com?uid=123456789012345678901`. If
		 * the group is recovered, this value reverts to `group:{emailid}` and the
		 * recovered group retains the role in the binding.
		 * * `domain:{domain}`: The G Suite domain (primary) that represents all the
		 * users of that domain. For example, `google.com` or `example.com`.
		 */
		members?: Array<string> | null;

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role?: string | null;
	}


	/**
	 * Represents a textual expression in the Common Expression Language (CEL)
	 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
	 * are documented at https://github.com/google/cel-spec.
	 * Example (Comparison):
	 *     title: "Summary size limit"
	 *     description: "Determines if a summary is less than 100 chars"
	 *     expression: "document.summary.size() < 100"
	 * Example (Equality):
	 *     title: "Requestor is owner"
	 *     description: "Determines if requestor is the document owner"
	 *     expression: "document.owner == request.auth.claims.email"
	 * Example (Logic):
	 *     title: "Public documents"
	 *     description: "Determine whether the document should be publicly visible"
	 *     expression: "document.type != 'private' && document.type != 'internal'"
	 * Example (Data Manipulation):
	 *     title: "Notification string"
	 *     description: "Create a notification string with a timestamp."
	 *     expression: "'New message received at ' + string(document.create_time)"
	 * The exact variables and functions that may be referenced within an expression
	 * are determined by the service that evaluates it. See the service
	 * documentation for additional information.
	 */
	export interface Expr {

		/**
		 * Optional. Description of the expression. This is a longer text which
		 * describes the expression, e.g. when hovered over it in a UI.
		 */
		description?: string | null;

		/**
		 * Textual representation of an expression in Common Expression Language
		 * syntax.
		 */
		expression?: string | null;

		/**
		 * Optional. String indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location?: string | null;

		/**
		 * Optional. Title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
		title?: string | null;
	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}


	/** Mask a string by replacing its characters with a fixed character. */
	export interface CharacterMaskConfig {

		/** Character to mask the sensitive values. If not supplied, defaults to "*". */
		maskingCharacter?: string | null;
	}


	/** Creates a new message. */
	export interface CreateMessageRequest {

		/**
		 * A complete HL7v2 message.
		 * See http://www.hl7.org/implement/standards/index.cfm?ref=common for details
		 * on the standard.
		 */
		message?: Message | null;
	}


	/**
	 * A complete HL7v2 message.
	 * See http://www.hl7.org/implement/standards/index.cfm?ref=common for details
	 * on the standard.
	 */
	export interface Message {

		/** Output only. The datetime when the message was created. Set by the server. */
		createTime?: string | null;

		/** Raw message bytes. */
		data?: string | null;

		/**
		 * User-supplied key-value pairs used to organize HL7v2 stores.
		 * Label keys must be between 1 and 63 characters long, have a UTF-8 encoding
		 * of maximum 128 bytes, and must conform to the
		 * following PCRE regular expression:
		 * \p{Ll}\p{Lo}{0,62}
		 * Label values are optional, must be between 1 and 63 characters long, have
		 * a UTF-8 encoding of maximum 128 bytes, and must conform to the
		 * following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
		 * No more than 64 labels can be associated with a given store.
		 */
		labels?: {[id: string]: string } | null;

		/** The message type for this message. MSH-9.1. */
		messageType?: string | null;

		/**
		 * Resource name of the Message, of the form
		 * `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`.
		 * Assigned by the server.
		 */
		name?: string | null;

		/** The content of an HL7v2 message in a structured format. */
		parsedData?: ParsedData | null;

		/**
		 * All patient IDs listed in the PID-2, PID-3, and PID-4 segments of this
		 * message.
		 */
		patientIds?: Array<PatientId> | null;

		/**
		 * The content of an HL7v2 message in a structured format as specified by a
		 * schema.
		 */
		schematizedData?: SchematizedData | null;

		/** The hospital that this message came from. MSH-4. */
		sendFacility?: string | null;

		/** The datetime the sending application sent this message. MSH-7. */
		sendTime?: string | null;
	}


	/** The content of an HL7v2 message in a structured format. */
	export interface ParsedData {
		segments?: Array<Segment> | null;
	}


	/** A segment in a structured format. */
	export interface Segment {

		/**
		 * A mapping from the positional location to the value.
		 * The key string uses zero-based indexes separated by dots to identify
		 * Fields, components and sub-components. A bracket notation is also used to
		 * identify different instances of a repeated field.
		 * Regex for key: (\d+)(\[\d+\])?(.\d+)?(.\d+)?
		 * Examples of (key, value) pairs:
		 * * (0.1, "hemoglobin") denotes that the first component of Field 0 has the
		 * value "hemoglobin".
		 * * (1.1.2, "CBC") denotes that the second sub-component of the first
		 * component of Field 1 has the value "CBC".
		 * * (1[0].1, "HbA1c") denotes that the first component of the
		 * first Instance of Field 1, which is repeated, has the value "HbA1c".
		 */
		fields?: {[id: string]: string } | null;

		/** A string that indicates the type of segment. For example, EVN or PID. */
		segmentId?: string | null;

		/**
		 * Set ID for segments that can be in a set. This can be empty if it's
		 * missing or isn't applicable.
		 */
		setId?: string | null;
	}


	/** A patient identifier and associated type. */
	export interface PatientId {

		/** ID type. For example, MRN or NHS. */
		type?: string | null;

		/** The patient's unique identifier. */
		value?: string | null;
	}


	/**
	 * The content of an HL7v2 message in a structured format as specified by a
	 * schema.
	 */
	export interface SchematizedData {

		/** JSON output of the parser. */
		data?: string | null;

		/** The error output of the parser. */
		error?: string | null;
	}


	/**
	 * Pseudonymization method that generates surrogates via cryptographic hashing.
	 * Uses SHA-256.
	 * Outputs a base64-encoded representation of the hashed output
	 * (for example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`).
	 */
	export interface CryptoHashConfig {

		/**
		 * An AES 128/192/256 bit key. Causes the hash to be computed based on this
		 * key. A default key is generated for each Deidentify operation and is used
		 * wherever crypto_key is not specified.
		 */
		cryptoKey?: string | null;
	}


	/**
	 * A message representing a health dataset.
	 * A health dataset represents a collection of healthcare data pertaining to one
	 * or more patients. This may include multiple modalities of healthcare data,
	 * such as electronic medical records or medical imaging data.
	 */
	export interface Dataset {

		/**
		 * Output only. Resource name of the dataset, of the form
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
		 */
		name?: string | null;

		/**
		 * The default timezone used by this dataset. Must be a either a valid IANA
		 * time zone name such as "America/New_York" or empty, which defaults to UTC.
		 * This is used for parsing times in resources, such as HL7 messages, where no
		 * explicit timezone is specified.
		 */
		timeZone?: string | null;
	}


	/**
	 * Shift a date forward or backward in time by a random amount which is
	 * consistent for a given patient and crypto key combination.
	 */
	export interface DateShiftConfig {

		/**
		 * An AES 128/192/256 bit key. Causes the shift to be computed based on this
		 * key and the patient ID. A default key is generated for each
		 * Deidentify operation and is used wherever crypto_key is not specified.
		 */
		cryptoKey?: string | null;
	}


	/**
	 * Configures de-id options specific to different types of content.
	 * Each submessage customizes the handling of an
	 * https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are
	 * applied in a nested manner at runtime.
	 */
	export interface DeidentifyConfig {

		/** Specifies the parameters needed for de-identification of DICOM stores. */
		dicom?: DicomConfig | null;

		/** Specifies how to handle de-identification of a FHIR store. */
		fhir?: FhirConfig | null;

		/** Specifies how to handle de-identification of image pixels. */
		image?: ImageConfig | null;
		text?: TextConfig | null;
	}


	/** Specifies the parameters needed for de-identification of DICOM stores. */
	export interface DicomConfig {

		/** Tag filtering profile that determines which tags to keep/remove. */
		filterProfile?: DicomConfigFilterProfile | null;

		/** List of tags to be filtered. */
		keepList?: TagFilterList | null;

		/** List of tags to be filtered. */
		removeList?: TagFilterList | null;

		/**
		 * If true, skip replacing StudyInstanceUID, SeriesInstanceUID,
		 * SOPInstanceUID, and MediaStorageSOPInstanceUID and leave them untouched.
		 * The Cloud Healthcare API regenerates these UIDs by default based on the
		 * DICOM Standard's reasoning: "Whilst these UIDs cannot be mapped directly
		 * to an individual out of context, given access to the original images, or
		 * to a database of the original images containing the UIDs, it would be
		 * possible to recover the individual's identity."
		 * http://dicom.nema.org/medical/dicom/current/output/chtml/part15/sect_E.3.9.html
		 */
		skipIdRedaction?: boolean | null;
	}

	export enum DicomConfigFilterProfile { TAG_FILTER_PROFILE_UNSPECIFIED = 0, MINIMAL_KEEP_LIST_PROFILE = 1, ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE = 2, KEEP_ALL_PROFILE = 3, DEIDENTIFY_TAG_CONTENTS = 4 }


	/** List of tags to be filtered. */
	export interface TagFilterList {

		/**
		 * Tags to be filtered. Tags must be DICOM Data Elements, File Meta
		 * Elements, or Directory Structuring Elements, as defined at:
		 * http://dicom.nema.org/medical/dicom/current/output/html/part06.html#table_6-1,.
		 * They may be provided by "Keyword" or "Tag". For example "PatientID",
		 * "00100010".
		 */
		tags?: Array<string> | null;
	}


	/** Specifies how to handle de-identification of a FHIR store. */
	export interface FhirConfig {

		/**
		 * Specifies FHIR paths to match and how to transform them. Any field that
		 * is not matched by a FieldMetadata is passed through to the output
		 * dataset unmodified. All extensions are removed in the output.
		 * If a field can be matched by more than one FieldMetadata, the first
		 * FieldMetadata.Action is applied.
		 */
		fieldMetadataList?: Array<FieldMetadata> | null;
	}


	/**
	 * Specifies FHIR paths to match, and how to handle de-identification of
	 * matching fields.
	 */
	export interface FieldMetadata {

		/** Deidentify action for one field. */
		action?: FieldMetadataAction | null;

		/**
		 * List of paths to FHIR fields to redact. Each path is a
		 * period-separated list where each component is either a field name or
		 * FHIR type name. All types begin with an upper case letter. For example,
		 * the resource field "Patient.Address.city", which uses a string type,
		 * can be matched by "Patient.Address.String". Path also supports partial
		 * matching. For example, "Patient.Address.city" can be matched by
		 * "Address.city" (Patient omitted). Partial matching and type matching
		 * can be combined, for example "Patient.Address.city" can be matched by
		 * "Address.String". For "choice" types (those defined in the FHIR spec
		 * with the form: field[x]), use two separate components. For example,
		 * "deceasedAge.unit" is matched by "Deceased.Age.unit". Supported types
		 * are: AdministrativeGenderCode, Code, Date, DateTime, Decimal,
		 * HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml.
		 * The sub-type for HumanName(for example HumanName.given,
		 * HumanName.family) can be omitted.
		 */
		paths?: Array<string> | null;
	}

	export enum FieldMetadataAction { ACTION_UNSPECIFIED = 0, TRANSFORM = 1, INSPECT_AND_TRANSFORM = 2, DO_NOT_TRANSFORM = 3 }


	/** Specifies how to handle de-identification of image pixels. */
	export interface ImageConfig {

		/** Determines how to redact text from image. */
		textRedactionMode?: ImageConfigTextRedactionMode | null;
	}

	export enum ImageConfigTextRedactionMode { TEXT_REDACTION_MODE_UNSPECIFIED = 0, REDACT_ALL_TEXT = 1, REDACT_SENSITIVE_TEXT = 2, REDACT_NO_TEXT = 3 }

	export interface TextConfig {

		/** The transformations to apply to the detected data. */
		transformations?: Array<InfoTypeTransformation> | null;
	}


	/**
	 * A transformation to apply to text that is identified as a specific
	 * info_type.
	 */
	export interface InfoTypeTransformation {

		/** Mask a string by replacing its characters with a fixed character. */
		characterMaskConfig?: CharacterMaskConfig | null;

		/**
		 * Pseudonymization method that generates surrogates via cryptographic hashing.
		 * Uses SHA-256.
		 * Outputs a base64-encoded representation of the hashed output
		 * (for example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`).
		 */
		cryptoHashConfig?: CryptoHashConfig | null;

		/**
		 * Shift a date forward or backward in time by a random amount which is
		 * consistent for a given patient and crypto key combination.
		 */
		dateShiftConfig?: DateShiftConfig | null;

		/**
		 * InfoTypes to apply this transformation to. If this is not specified, this
		 * transformation becomes the default transformation, and is used for any
		 * info_type that is not specified in another transformation.
		 */
		infoTypes?: Array<string> | null;

		/**
		 * Define how to redact sensitive values. Default behaviour is erase.
		 * For example, "My name is Jane." becomes "My name is ."
		 */
		redactConfig?: RedactConfig | null;

		/**
		 * When using the
		 * INSPECT_AND_TRANSFORM
		 * action, each match is replaced with the name of the info_type. For example,
		 * "My name is Jane" becomes "My name is [PERSON_NAME]." The
		 * TRANSFORM
		 * action is equivalent to redacting.
		 */
		replaceWithInfoTypeConfig?: ReplaceWithInfoTypeConfig | null;
	}


	/**
	 * Define how to redact sensitive values. Default behaviour is erase.
	 * For example, "My name is Jane." becomes "My name is ."
	 */
	export interface RedactConfig {
	}


	/**
	 * When using the
	 * INSPECT_AND_TRANSFORM
	 * action, each match is replaced with the name of the info_type. For example,
	 * "My name is Jane" becomes "My name is [PERSON_NAME]." The
	 * TRANSFORM
	 * action is equivalent to redacting.
	 */
	export interface ReplaceWithInfoTypeConfig {
	}


	/** Redacts identifying information from the specified dataset. */
	export interface DeidentifyDatasetRequest {

		/**
		 * Configures de-id options specific to different types of content.
		 * Each submessage customizes the handling of an
		 * https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are
		 * applied in a nested manner at runtime.
		 */
		config?: DeidentifyConfig | null;

		/**
		 * The name of the dataset resource to create and write the redacted data to.
		 * * The destination dataset must not exist.
		 * * The destination dataset must be in the same project and location as the
		 * source dataset. De-identifying data across multiple projects or locations
		 * is not supported.
		 */
		destinationDataset?: string | null;
	}


	/** Creates a new DICOM store with sensitive information de-identified. */
	export interface DeidentifyDicomStoreRequest {

		/**
		 * Configures de-id options specific to different types of content.
		 * Each submessage customizes the handling of an
		 * https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are
		 * applied in a nested manner at runtime.
		 */
		config?: DeidentifyConfig | null;

		/**
		 * The name of the DICOM store to create and write the redacted data to.
		 * For example,
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
		 * * The destination dataset must exist.
		 * * The source dataset and destination dataset must both reside in the same
		 * project. De-identifying data across multiple projects is not supported.
		 * * The destination DICOM store must not exist.
		 * * The caller must have the necessary permissions to create the destination
		 * DICOM store.
		 */
		destinationStore?: string | null;

		/** Specifies the filter configuration for DICOM resources. */
		filterConfig?: DicomFilterConfig | null;
	}


	/** Specifies the filter configuration for DICOM resources. */
	export interface DicomFilterConfig {

		/**
		 * The Cloud Storage location of the filter configuration file.
		 * The `gcs_uri` must be in the format `gs://bucket/path/to/object`.
		 * The filter configuration file must contain a list of resource paths
		 * separated by newline characters (\n or \r\n). Each resource path
		 * must be in the format
		 * "/studies/{studyUID}[/series/{seriesUID}[/instances/{instanceUID}]]"
		 * The Cloud Healthcare API service account must have the
		 * `roles/storage.objectViewer` Cloud IAM role for this Cloud Storage
		 * location.
		 */
		resourcePathsGcsUri?: string | null;
	}


	/** Contains the status of the Deidentify operation. */
	export interface DeidentifyErrorDetails {

		/** Number of resources that failed to process. */
		failureResourceCount?: string | null;

		/** Number of stores that failed to process. */
		failureStoreCount?: string | null;

		/** Number of resources successfully processed. */
		successResourceCount?: string | null;

		/** Number of stores successfully processed. */
		successStoreCount?: string | null;
	}


	/** Creates a new FHIR store with sensitive information de-identified. */
	export interface DeidentifyFhirStoreRequest {

		/**
		 * Configures de-id options specific to different types of content.
		 * Each submessage customizes the handling of an
		 * https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are
		 * applied in a nested manner at runtime.
		 */
		config?: DeidentifyConfig | null;

		/**
		 * The name of the FHIR store to create and write the redacted data to.
		 * For example,
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
		 * * The destination dataset must exist.
		 * * The source dataset and destination dataset must both reside in the same
		 * project. De-identifying data across multiple projects is not supported.
		 * * The destination FHIR store must exist.
		 * * The caller must have the healthcare.fhirResources.update permission to
		 * write to the destination FHIR store.
		 */
		destinationStore?: string | null;

		/** Filter configuration. */
		resourceFilter?: FhirFilter | null;
	}


	/** Filter configuration. */
	export interface FhirFilter {

		/** A list of FHIR resources. */
		resources?: Resources | null;
	}


	/** A list of FHIR resources. */
	export interface Resources {

		/** List of resources IDs. For example, "Patient/1234". */
		resources?: Array<string> | null;
	}


	/** Contains a detailed summary of the Deidentify operation. */
	export interface DeidentifySummary {

		/**
		 * Number of resources that failed to process.
		 * The failures might be caused by:
		 * * Invalid user input data
		 * * Transient errors that could be skipped
		 */
		failureResourceCount?: string | null;

		/** Number of resources successfully processed. */
		successResourceCount?: string | null;

		/** Number of stores successfully processed. */
		successStoreCount?: string | null;
	}


	/** Represents a DICOM store. */
	export interface DicomStore {

		/**
		 * User-supplied key-value pairs used to organize DICOM stores.
		 * Label keys must be between 1 and 63 characters long, have a UTF-8 encoding
		 * of maximum 128 bytes, and must conform to the
		 * following PCRE regular expression:
		 * \p{Ll}\p{Lo}{0,62}
		 * Label values are optional, must be between 1 and 63 characters long, have
		 * a UTF-8 encoding of maximum 128 bytes, and must conform to the
		 * following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
		 * No more than 64 labels can be associated with a given store.
		 */
		labels?: {[id: string]: string } | null;

		/**
		 * Output only. Resource name of the DICOM store, of the form
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
		 */
		name?: string | null;

		/** Specifies where to send notifications upon changes to a data store. */
		notificationConfig?: NotificationConfig | null;
	}


	/** Specifies where to send notifications upon changes to a data store. */
	export interface NotificationConfig {

		/**
		 * The [Cloud Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that
		 * notifications of changes are published on. Supplied by the client.
		 * PubsubMessage.Data contains the resource name.
		 * PubsubMessage.MessageId is the ID of this message. It is guaranteed to be
		 * unique within the topic.
		 * PubsubMessage.PublishTime is the time at which the message was published.
		 * Notifications are only sent if the topic is
		 * non-empty. [Topic
		 * names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped
		 * to a project. cloud-healthcare@system.gserviceaccount.com must have
		 * publisher permissions on the given Cloud Pub/Sub topic. Not having adequate
		 * permissions causes the calls that send notifications to fail.
		 * If a notification can't be published to Cloud Pub/Sub, errors are logged to
		 * Stackdriver (see [Viewing
		 * logs](/healthcare/docs/how-tos/stackdriver-logging)). If the number of
		 * errors exceeds a certain rate, some aren't submitted.
		 */
		pubsubTopic?: string | null;
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/**
	 * Structure to describe the error encountered during batch operation on one
	 * resource. This is used both for sample errors in operation response, and
	 * for format of errors in error reports.
	 */
	export interface ErrorDetail {

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status | null;

		/** The identifier of the resource. */
		resource?: string | null;
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string> | null;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}


	/**
	 * Exports data from the specified DICOM store.
	 * If a given resource, such as a DICOM object with the same SOPInstance UID,
	 * already exists in the output, it is overwritten with the version
	 * in the source dataset.
	 * Exported DICOM data persists when the DICOM store from which it was
	 * exported is deleted.
	 */
	export interface ExportDicomDataRequest {

		/** The BigQuery table where the server writes the output. */
		bigqueryDestination?: GoogleCloudHealthcareV1beta1DicomBigQueryDestination | null;

		/**
		 * The Cloud Storage location where the server writes the output and the export
		 * configuration.
		 */
		gcsDestination?: GoogleCloudHealthcareV1beta1DicomGcsDestination | null;
	}


	/** The BigQuery table where the server writes the output. */
	export interface GoogleCloudHealthcareV1beta1DicomBigQueryDestination {

		/**
		 * If the destination table already exists and this flag is `TRUE`, the table
		 * is overwritten by the contents of the DICOM store. If the flag is not
		 * set and the destination table already exists, the export call returns an
		 * error.
		 */
		force?: boolean | null;

		/**
		 * BigQuery URI to a table, up to 2000 characters long, in the format
		 * `bq://projectId.bqDatasetId.tableId`
		 */
		tableUri?: string | null;
	}


	/**
	 * The Cloud Storage location where the server writes the output and the export
	 * configuration.
	 */
	export interface GoogleCloudHealthcareV1beta1DicomGcsDestination {

		/**
		 * MIME types supported by DICOM spec.
		 * Each file is written in the following format:
		 * `.../{study_id}/{series_id}/{instance_id}[/{frame_number}].{extension}`
		 * The frame_number component exists only for multi-frame instances.
		 * Supported MIME types are consistent with supported formats in DICOMweb:
		 * https://cloud.google.com/healthcare/docs/dicom#retrieve_transaction.
		 * Specifically, the following are supported:
		 * - application/dicom; transfer-syntax=1.2.840.10008.1.2.1
		 * (uncompressed DICOM)
		 * - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.50
		 * (DICOM with embedded JPEG Baseline)
		 * - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.90
		 * (DICOM with embedded JPEG 2000 Lossless Only)
		 * - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.91
		 * (DICOM with embedded JPEG 2000)h
		 * - application/dicom; transfer-syntax=*
		 * (DICOM with no transcoding)
		 * - application/octet-stream; transfer-syntax=1.2.840.10008.1.2.1
		 * (raw uncompressed PixelData)
		 * - application/octet-stream; transfer-syntax=*
		 * (raw PixelData in whatever format it was uploaded in)
		 * - image/jpeg; transfer-syntax=1.2.840.10008.1.2.4.50
		 * (Consumer JPEG)
		 * - image/png
		 * The following extensions are used for output files:
		 * - application/dicom -> .dcm
		 * - image/jpeg -> .jpg
		 * - image/png -> .png
		 * - application/octet-stream -> no extension
		 * If unspecified, the instances are exported in the original
		 * DICOM format they were uploaded in.
		 */
		mimeType?: string | null;

		/**
		 * The Cloud Storage destination to export to.
		 * URI for a Cloud Storage directory where the server writes the result files,
		 * in the format `gs://{bucket-id}/{path/to/destination/dir}`). If there is no
		 * trailing slash, the service appends one when composing the object path.
		 * The user is responsible for creating the Cloud Storage bucket referenced in
		 * `uri_prefix`.
		 */
		uriPrefix?: string | null;
	}


	/** Returns additional information in regards to a completed DICOM store export. */
	export interface ExportDicomDataResponse {
	}


	/** Request to export resources. */
	export interface ExportResourcesRequest {

		/** The configuration for exporting to BigQuery. */
		bigqueryDestination?: GoogleCloudHealthcareV1beta1FhirBigQueryDestination | null;

		/** The configuration for exporting to Cloud Storage. */
		gcsDestination?: GoogleCloudHealthcareV1beta1FhirRestGcsDestination | null;
	}


	/** The configuration for exporting to BigQuery. */
	export interface GoogleCloudHealthcareV1beta1FhirBigQueryDestination {

		/**
		 * BigQuery URI to a dataset, up to 2000 characters long, in the format
		 * `bq://projectId.bqDatasetId`
		 */
		datasetUri?: string | null;

		/**
		 * If this flag is `TRUE`, all tables will be deleted from the dataset before
		 * the new exported tables are written. If the flag is not set and the
		 * destination dataset contains tables, the export call returns an error.
		 */
		force?: boolean | null;

		/**
		 * Configuration for the FHIR BigQuery schema. Determines how the server
		 * generates the schema.
		 */
		schemaConfig?: SchemaConfig | null;
	}


	/**
	 * Configuration for the FHIR BigQuery schema. Determines how the server
	 * generates the schema.
	 */
	export interface SchemaConfig {

		/**
		 * The depth for all recursive structures in the output analytics
		 * schema. For example, `concept` in the CodeSystem resource is a recursive
		 * structure; when the depth is 2, the CodeSystem table will have a column
		 * called `concept.concept` but not `concept.concept.concept`. If not
		 * specified or set to 0, the server will use the default value 2. The
		 * maximum depth allowed is 5.
		 */
		recursiveStructureDepth?: string | null;

		/**
		 * Specifies the output schema type. If unspecified, the default is
		 * `LOSSLESS`.
		 */
		schemaType?: SchemaConfigSchemaType | null;
	}

	export enum SchemaConfigSchemaType { SCHEMA_TYPE_UNSPECIFIED = 0, LOSSLESS = 1, ANALYTICS = 2 }


	/** The configuration for exporting to Cloud Storage. */
	export interface GoogleCloudHealthcareV1beta1FhirRestGcsDestination {

		/**
		 * URI for a Cloud Storage directory where result files should be written (in
		 * the format `gs://{bucket-id}/{path/to/destination/dir}`). If there is no
		 * trailing slash, the service will append one when composing the object path.
		 * The user is responsible for creating the Cloud Storage bucket referenced in
		 * `uri_prefix`.
		 */
		uriPrefix?: string | null;
	}


	/** Represents a FHIR store. */
	export interface FhirStore {

		/**
		 * If true, overrides the default search behavior for this FHIR store to
		 * `handling=strict` which returns an error for unrecognized search
		 * parameters. If false, uses the FHIR specification default
		 * `handling=lenient` which ignores unrecognized search parameters.
		 * The handling can always be changed from the default on an individual API
		 * call by setting the HTTP header `Prefer: handling=strict` or
		 * `Prefer: handling=lenient`.
		 */
		defaultSearchHandlingStrict?: boolean | null;

		/**
		 * Whether to disable referential integrity in this FHIR store. This field is
		 * immutable after FHIR store creation.
		 * The default value is false, meaning that the API enforces referential
		 * integrity and fails the requests that result in inconsistent state in
		 * the FHIR store.
		 * When this field is set to true, the API skips referential integrity
		 * checks. Consequently, operations that rely on references, such as
		 * GetPatientEverything, do not return all the results if broken references
		 * exist.
		 */
		disableReferentialIntegrity?: boolean | null;

		/**
		 * Whether to disable resource versioning for this FHIR store. This field can
		 * not be changed after the creation of FHIR store.
		 * If set to false, which is the default behavior, all write operations
		 * cause historical versions to be recorded automatically. The historical
		 * versions can be fetched through the history APIs, but cannot be updated.
		 * If set to true, no historical versions are kept. The server sends
		 * errors for attempts to read the historical versions.
		 */
		disableResourceVersioning?: boolean | null;

		/**
		 * Whether this FHIR store has the [updateCreate
		 * capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate).
		 * This determines if the client can use an Update operation to create a new
		 * resource with a client-specified ID. If false, all IDs are server-assigned
		 * through the Create operation and attempts to update a non-existent resource
		 * return errors. Please treat the audit logs with appropriate levels of
		 * care if client-specified resource IDs contain sensitive data such as
		 * patient identifiers, those IDs are part of the FHIR resource path
		 * recorded in Cloud audit logs and Cloud Pub/Sub notifications.
		 */
		enableUpdateCreate?: boolean | null;

		/**
		 * User-supplied key-value pairs used to organize FHIR stores.
		 * Label keys must be between 1 and 63 characters long, have a UTF-8 encoding
		 * of maximum 128 bytes, and must conform to the
		 * following PCRE regular expression:
		 * \p{Ll}\p{Lo}{0,62}
		 * Label values are optional, must be between 1 and 63 characters long, have
		 * a UTF-8 encoding of maximum 128 bytes, and must conform to the
		 * following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
		 * No more than 64 labels can be associated with a given store.
		 */
		labels?: {[id: string]: string } | null;

		/**
		 * Output only. Resource name of the FHIR store, of the form
		 * `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
		 */
		name?: string | null;

		/** Specifies where to send notifications upon changes to a data store. */
		notificationConfig?: NotificationConfig | null;

		/**
		 * A list of streaming configs that configure the destinations of streaming
		 * export for every resource mutation in this FHIR store. Each store is
		 * allowed to have up to 10 streaming configs.
		 * After a new config is added, the next resource mutation is streamed to
		 * the new location in addition to the existing ones.
		 * When a location is removed from the list, the server stops
		 * streaming to that location. Before adding a new config, you must add the
		 * required
		 * [`bigquery.dataEditor`](https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor)
		 * role to your project's **Cloud Healthcare Service Agent**
		 * [service account](https://cloud.google.com/iam/docs/service-accounts).
		 * Some lag (typically on the order of dozens of seconds) is expected before
		 * the results show up in the streaming destination.
		 */
		streamConfigs?: Array<StreamConfig> | null;

		/**
		 * The FHIR specification version that this FHIR store supports natively. This
		 * field is immutable after store creation. Requests are rejected if they
		 * contain FHIR resources of a different version.
		 * An empty value is treated as STU3.
		 */
		version?: FhirStoreVersion | null;
	}


	/** This structure contains configuration for streaming FHIR export. */
	export interface StreamConfig {

		/** The configuration for exporting to BigQuery. */
		bigqueryDestination?: GoogleCloudHealthcareV1beta1FhirBigQueryDestination | null;

		/**
		 * Supply a FHIR resource type (such as "Patient" or "Observation").
		 * See https://www.hl7.org/fhir/valueset-resource-types.html for a list of
		 * all FHIR resource types.
		 * The server treats an empty list as an intent to stream all the
		 * supported resource types in this FHIR store.
		 */
		resourceTypes?: Array<string> | null;
	}

	export enum FhirStoreVersion { VERSION_UNSPECIFIED = 0, DSTU2 = 1, STU3 = 2, R4 = 3 }


	/** A (sub) field of a type. */
	export interface Field {

		/**
		 * The maximum number of times this field can be repeated. 0 or -1 means
		 * unbounded.
		 */
		maxOccurs?: number | null;

		/** The minimum number of times this field must be present/repeated. */
		minOccurs?: number | null;

		/** The name of the field. For example, "PID-1" or just "1". */
		name?: string | null;

		/**
		 * The HL7v2 table this field refers to. For example, PID-15 (Patient's
		 * Primary Language) usually refers to table "0296".
		 */
		table?: string | null;

		/**
		 * The type of this field. A Type with this name must be defined in an
		 * Hl7TypesConfig.
		 */
		type?: string | null;
	}


	/** Contains a summary of the DeidentifyDicomStore operation. */
	export interface GoogleCloudHealthcareV1beta1DeidentifyDeidentifyDicomStoreSummary {

		/** Number of objects that processing failed for. */
		failureResourceCount?: string | null;

		/** Number of objects successfully processed. */
		successResourceCount?: string | null;
	}


	/** Contains a summary of the DeidentifyFhirStore operation. */
	export interface GoogleCloudHealthcareV1beta1DeidentifyDeidentifyFhirStoreSummary {

		/** Number of resources successfully processed. */
		successResourceCount?: string | null;
	}


	/** Specifies the configuration for importing data from Cloud Storage. */
	export interface GoogleCloudHealthcareV1beta1DicomGcsSource {

		/**
		 * Points to a Cloud Storage URI containing file(s) with
		 * content only. The URI must be in the following format:
		 * `gs://{bucket_id}/{object_id}`. The URI can include wildcards in
		 * `object_id` and thus identify multiple files. Supported wildcards:
		 * '*' to match 0 or more non-separator characters
		 * '**' to match 0 or more characters (including separators). Must be used at
		 * the end of a path and with no other wildcards in the
		 * path. Can also be used with a file extension (such as .dcm), which
		 * imports all files with the extension in the specified directory and
		 * its sub-directories. For example,
		 * `gs://my-bucket/my-directory/**.dcm` imports all files with .dcm
		 * extensions in `my-directory/` and its sub-directories.
		 * '?' to match 1 character
		 * All other URI formats are invalid.
		 * Files matching the wildcard are expected to contain content only, no
		 * metadata.
		 */
		uri?: string | null;
	}


	/**
	 * Response when errors occur while exporting resources.
	 * This structure is included in the
	 * error
	 * details to describe the detailed outcome. It is
	 * only included when the operation finishes with errors.
	 */
	export interface GoogleCloudHealthcareV1beta1FhirRestExportResourcesErrorDetails {

		/** The number of resources that had errors. */
		errorCount?: string | null;

		/**
		 * The name of the FHIR store where resources have been exported, in the
		 * format
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
		 */
		fhirStore?: string | null;

		/**
		 * The total number of resources included in the export operation. This is
		 * the sum of the success and error counts.
		 */
		resourceCount?: string | null;

		/** The number of resources that were exported. */
		successCount?: string | null;
	}


	/**
	 * Response when all resources export successfully.
	 * This structure will be included in the
	 * response to describe the detailed
	 * outcome. It will only be included when the operation finishes successfully.
	 */
	export interface GoogleCloudHealthcareV1beta1FhirRestExportResourcesResponse {

		/**
		 * The name of the FHIR store where resources have been exported, in the
		 * format
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
		 */
		fhirStore?: string | null;

		/** The total number of resources exported from the requested FHIR store. */
		resourceCount?: string | null;
	}


	/** Specifies the configuration for importing data from Cloud Storage. */
	export interface GoogleCloudHealthcareV1beta1FhirRestGcsSource {

		/**
		 * Points to a Cloud Storage URI containing file(s) to import.
		 * The URI must be in the following format: `gs://{bucket_id}/{object_id}`.
		 * The URI can include wildcards in `object_id` and thus identify multiple
		 * files. Supported wildcards:
		 * *  `*` to match 0 or more non-separator characters
		 * *  `**` to match 0 or more characters (including separators). Must be used
		 * at the end of a path and with no other wildcards in the
		 * path. Can also be used with a file extension (such as .ndjson), which
		 * imports all files with the extension in the specified directory and
		 * its sub-directories. For example, `gs://my-bucket/my-directory/**.ndjson`
		 * imports all files with `.ndjson` extensions in `my-directory/` and its
		 * sub-directories.
		 * *  `?` to match 1 character
		 * Files matching the wildcard are expected to contain content only, no
		 * metadata.
		 */
		uri?: string | null;
	}


	/**
	 * Error response of importing resources.
	 * This structure will be included in the
	 * error
	 * details to describe the detailed error. It will
	 * only be included when the operation finishes with some failure.
	 */
	export interface GoogleCloudHealthcareV1beta1FhirRestImportResourcesErrorDetails {

		/** The number of resources that had errors. */
		errorCount?: string | null;

		/**
		 * The name of the FHIR store where resources have been imported, in the
		 * format
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
		 */
		fhirStore?: string | null;

		/**
		 * The total number of resources included in the source data. This is the sum
		 * of the success and error counts.
		 */
		inputSize?: string | null;

		/** The number of resources that have been imported. */
		successCount?: string | null;
	}


	/**
	 * Final response of importing resources.
	 * This structure will be included in the
	 * response to describe the detailed
	 * outcome. It will only be included when the operation finishes successfully.
	 */
	export interface GoogleCloudHealthcareV1beta1FhirRestImportResourcesResponse {

		/**
		 * The name of the FHIR store where the resources have been imported, in the
		 * format
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
		 */
		fhirStore?: string | null;

		/** The total number of resources included in the source data. */
		inputSize?: string | null;
	}


	/** Construct representing a logical group or a segment. */
	export interface GroupOrSegment {

		/** An HL7v2 logical group construct. */
		group?: SchemaGroup | null;

		/** An HL7v2 Segment. */
		segment?: SchemaSegment | null;
	}


	/** An HL7v2 logical group construct. */
	export interface SchemaGroup {

		/**
		 * True indicates that this is a choice group, meaning that only one of its
		 * segments can exist in a given message.
		 */
		choice?: boolean | null;

		/**
		 * The maximum number of times this group can be repeated. 0 or -1 means
		 * unbounded.
		 */
		maxOccurs?: number | null;

		/** Nested groups and/or segments. */
		members?: Array<GroupOrSegment> | null;

		/** The minimum number of times this group must be present/repeated. */
		minOccurs?: number | null;

		/** The name of this group. For example, "ORDER_DETAIL". */
		name?: string | null;
	}


	/** An HL7v2 Segment. */
	export interface SchemaSegment {

		/**
		 * The maximum number of times this segment can be present in this group.
		 * 0 or -1 means unbounded.
		 */
		maxOccurs?: number | null;

		/** The minimum number of times this segment can be present in this group. */
		minOccurs?: number | null;

		/** The Segment type. For example, "PID". */
		type?: string | null;
	}


	/**
	 * Root config message for HL7v2 schema. This contains a schema structure of
	 * groups and segments, and filters that determine which messages to apply the
	 * schema structure to.
	 */
	export interface Hl7SchemaConfig {

		/**
		 * Map from each HL7v2 message type and trigger event pair, such as ADT_A04,
		 * to its schema configuration root group.
		 */
		messageSchemaConfigs?: {[id: string]: SchemaGroup } | null;

		/**
		 * Each VersionSource is tested and only if they all match is the schema used
		 * for the message.
		 */
		version?: Array<VersionSource> | null;
	}


	/** Describes a selector for extracting and matching an MSH field to a value. */
	export interface VersionSource {

		/** The field to extract from the MSH segment. For example, "3.1" or "18[1].1". */
		mshField?: string | null;

		/**
		 * The value to match with the field. For example, "My Application Name" or
		 * "2.3".
		 */
		value?: string | null;
	}


	/** Root config for HL7v2 datatype definitions for a specific HL7v2 version. */
	export interface Hl7TypesConfig {

		/** The HL7v2 type definitions. */
		type?: Array<Type> | null;

		/**
		 * The version selectors that this config applies to. A message must match
		 * ALL version sources to apply.
		 */
		version?: Array<VersionSource> | null;
	}


	/** A type definition for some HL7v2 type (incl. Segments and Datatypes). */
	export interface Type {

		/** The (sub) fields this type has (if not primitive). */
		fields?: Array<Field> | null;

		/**
		 * The name of this type. This would be the segment or datatype name.
		 * For example, "PID" or "XPN".
		 */
		name?: string | null;

		/**
		 * If this is a primitive type then this field is the type of the primitive
		 * For example, STRING. Leave unspecified for composite types.
		 */
		primitive?: TypePrimitive | null;
	}

	export enum TypePrimitive { PRIMITIVE_UNSPECIFIED = 0, STRING = 1, VARIES = 2, UNESCAPED_STRING = 3 }


	/**
	 * Specifies where and whether to send notifications upon changes to a
	 * data store.
	 */
	export interface Hl7V2NotificationConfig {

		/**
		 * Restricts notifications sent for messages matching a filter. If this is
		 * empty, all messages are matched. Syntax:
		 * https://cloud.google.com/appengine/docs/standard/python/search/query_strings
		 * Fields/functions available for filtering are:
		 * *  `message_type`, from the MSH-9.1 field. For example,
		 * `NOT message_type = "ADT"`.
		 * *  `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in
		 * the dataset's time_zone, from the MSH-7 segment. For example,
		 * `send_date < "2017-01-02"`.
		 * *  `send_time`, the timestamp when the message was sent, using the
		 * RFC3339 time format for comparisons, from the MSH-7 segment. For example,
		 * `send_time < "2017-01-02T00:00:00-05:00"`.
		 * *  `send_facility`, the care center that the message came from, from the
		 * MSH-4 segment. For example, `send_facility = "ABC"`.
		 * *  `PatientId(value, type)`, which matches if the message lists a patient
		 * having an ID of the given value and type in the PID-2, PID-3, or PID-4
		 * segments. For example, `PatientId("123456", "MRN")`.
		 * *  `labels.x`, a string value of the label with key `x` as set using the
		 * Message.labels
		 * map. For example, `labels."priority"="high"`. The operator `:*` can be
		 * used to assert the existence of a label. For example,
		 * `labels."priority":*`.
		 */
		filter?: string | null;

		/**
		 * The [Cloud Pubsub](https://cloud.google.com/pubsub/docs/) topic that
		 * notifications of changes are published on. Supplied by the client. The
		 * notification is a `PubsubMessage` with the following fields:
		 * *  `PubsubMessage.Data` contains the resource name.
		 * *  `PubsubMessage.MessageId` is the ID of this notification. It is
		 * guaranteed to be unique within the topic.
		 * *  `PubsubMessage.PublishTime` is the time at which the message was
		 * published.
		 * Note that notifications are only sent if the topic is non-empty. [Topic
		 * names](https://cloud.google.com/pubsub/docs/overview#names) must be
		 * scoped to a project. cloud-healthcare@system.gserviceaccount.com must
		 * have publisher permissions on the given Pubsub topic. Not having adequate
		 * permissions causes the calls that send notifications to fail.
		 * If a notification cannot be published to Cloud Pub/Sub, errors will be
		 * logged to Stackdriver (see [Viewing logs](/healthcare/docs/how-
		 * tos/stackdriver-logging)).
		 */
		pubsubTopic?: string | null;
	}


	/** Represents an HL7v2 store. */
	export interface Hl7V2Store {

		/**
		 * User-supplied key-value pairs used to organize HL7v2 stores.
		 * Label keys must be between 1 and 63 characters long, have a UTF-8 encoding
		 * of maximum 128 bytes, and must conform to the
		 * following PCRE regular expression:
		 * \p{Ll}\p{Lo}{0,62}
		 * Label values are optional, must be between 1 and 63 characters long, have
		 * a UTF-8 encoding of maximum 128 bytes, and must conform to the
		 * following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
		 * No more than 64 labels can be associated with a given store.
		 */
		labels?: {[id: string]: string } | null;

		/**
		 * Output only. Resource name of the HL7v2 store, of the form
		 * `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.
		 */
		name?: string | null;

		/** Specifies where to send notifications upon changes to a data store. */
		notificationConfig?: NotificationConfig | null;

		/**
		 * A list of notification configs. Each configuration uses a filter to
		 * determine whether to publish a message (both Ingest & Create) on
		 * the corresponding notification destination. Only the message name is sent
		 * as part of the notification. Supplied by the client.
		 */
		notificationConfigs?: Array<Hl7V2NotificationConfig> | null;

		/**
		 * The configuration for the parser. It determines how the server parses the
		 * messages.
		 */
		parserConfig?: ParserConfig | null;

		/**
		 * Determines whether duplicate messages should be rejected. A duplicate
		 * message is a message with the same raw bytes as a message that has already
		 * been ingested/created in this HL7v2 store.
		 * The default value is false, meaning that the store accepts the duplicate
		 * messages and it also returns the same ACK message in the
		 * IngestMessageResponse as has been returned previously. Note that only
		 * one resource is created in the store.
		 * When this field is set to true,
		 * CreateMessage/IngestMessage
		 * requests with a duplicate message will be rejected by the store, and
		 * IngestMessageErrorDetail returns a NACK message upon rejection.
		 */
		rejectDuplicateMessage?: boolean | null;
	}


	/**
	 * The configuration for the parser. It determines how the server parses the
	 * messages.
	 */
	export interface ParserConfig {

		/** Determines whether messages with no header are allowed. */
		allowNullHeader?: boolean | null;

		/** A schema package contains a set of schemas and type definitions. */
		schema?: SchemaPackage | null;

		/**
		 * Byte(s) to use as the segment terminator. If this is unset, '\r' is
		 * used as segment terminator, matching the HL7 version 2
		 * specification.
		 */
		segmentTerminator?: string | null;
	}


	/** A schema package contains a set of schemas and type definitions. */
	export interface SchemaPackage {

		/**
		 * Flag to ignore all min_occurs restrictions in the schema. This means that
		 * incoming messages can omit any group, segment, field, component, or
		 * subcomponent.
		 */
		ignoreMinOccurs?: boolean | null;

		/**
		 * Schema configs that are layered based on their VersionSources that
		 * match the incoming message. Schema configs present in higher indices
		 * override those in lower indices with the same message type and trigger
		 * event if their VersionSources all match an incoming message.
		 */
		schemas?: Array<Hl7SchemaConfig> | null;

		/** Determines how messages that don't parse successfully are handled. */
		schematizedParsingType?: SchemaPackageSchematizedParsingType | null;

		/**
		 * Schema type definitions that are layered based on their VersionSources
		 * that match the incoming message. Type definitions present in higher indices
		 * override those in lower indices with the same type name if their
		 * VersionSources all match an incoming message.
		 */
		types?: Array<Hl7TypesConfig> | null;
	}

	export enum SchemaPackageSchematizedParsingType { SCHEMATIZED_PARSING_TYPE_UNSPECIFIED = 0, SOFT_FAIL = 1, HARD_FAIL = 2 }


	/**
	 * Message that represents an arbitrary HTTP body. It should only be used for
	 * payload formats that can't be represented as JSON, such as raw binary or
	 * an HTML page.
	 * This message can be used both in streaming and non-streaming API methods in
	 * the request as well as the response.
	 * It can be used as a top-level request field, which is convenient if one
	 * wants to extract parameters from either the URL or HTTP template into the
	 * request fields and also want access to the raw HTTP body.
	 * Example:
	 *     message GetResourceRequest {
	 *       // A unique request id.
	 *       string request_id = 1;
	 *       // The raw HTTP body is bound to this field.
	 *       google.api.HttpBody http_body = 2;
	 *     }
	 *     service ResourceService {
	 *       rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);
	 *       rpc UpdateResource(google.api.HttpBody) returns
	 *       (google.protobuf.Empty);
	 *     }
	 * Example with streaming methods:
	 *     service CaldavService {
	 *       rpc GetCalendar(stream google.api.HttpBody)
	 *         returns (stream google.api.HttpBody);
	 *       rpc UpdateCalendar(stream google.api.HttpBody)
	 *         returns (stream google.api.HttpBody);
	 *     }
	 * Use of this type only changes how the request and response bodies are
	 * handled, all other features will continue to work unchanged.
	 */
	export interface HttpBody {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType?: string | null;

		/** The HTTP request/response body as raw binary. */
		data?: string | null;

		/**
		 * Application specific response metadata. Must be set in the first response
		 * for streaming APIs.
		 */
		extensions?: Array<string> | null;
	}


	/** Returns the errors encountered during DICOM store import. */
	export interface ImportDicomDataErrorDetails {

		/**
		 * Deprecated. Use only for debugging purposes.
		 * Contains sample errors encountered in imports of individual resources.
		 * For example, a Cloud Storage object.
		 */
		sampleErrors?: Array<ErrorDetail> | null;
	}


	/**
	 * Imports data into the specified DICOM store.
	 * Returns an error if any of the files to import are not DICOM files. This
	 * API accepts duplicate DICOM instances by ignoring the newly-pushed instance.
	 * It does not overwrite.
	 */
	export interface ImportDicomDataRequest {

		/** Specifies the configuration for importing data from Cloud Storage. */
		gcsSource?: GoogleCloudHealthcareV1beta1DicomGcsSource | null;
	}


	/** Returns additional information in regards to a completed DICOM store import. */
	export interface ImportDicomDataResponse {
	}


	/** Request to import resources. */
	export interface ImportResourcesRequest {

		/**
		 * The content structure in the source location. If not specified, the server
		 * treats the input source files as BUNDLE.
		 */
		contentStructure?: ImportResourcesRequestContentStructure | null;

		/** Specifies the configuration for importing data from Cloud Storage. */
		gcsSource?: GoogleCloudHealthcareV1beta1FhirRestGcsSource | null;
	}

	export enum ImportResourcesRequestContentStructure { CONTENT_STRUCTURE_UNSPECIFIED = 0, BUNDLE = 1, RESOURCE = 2, BUNDLE_PRETTY = 3, RESOURCE_PRETTY = 4 }


	/** Ingests a message into the specified HL7v2 store. */
	export interface IngestMessageRequest {

		/**
		 * A complete HL7v2 message.
		 * See http://www.hl7.org/implement/standards/index.cfm?ref=common for details
		 * on the standard.
		 */
		message?: Message | null;
	}


	/**
	 * Acknowledges that a message has been ingested into the specified
	 * HL7v2 store.
	 */
	export interface IngestMessageResponse {

		/** HL7v2 ACK message. */
		hl7Ack?: string | null;

		/**
		 * A complete HL7v2 message.
		 * See http://www.hl7.org/implement/standards/index.cfm?ref=common for details
		 * on the standard.
		 */
		message?: Message | null;
	}


	/** Lists the available datasets. */
	export interface ListDatasetsResponse {

		/** The first page of datasets. */
		datasets?: Array<Dataset> | null;

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
	}


	/** Lists the DICOM stores in the given dataset. */
	export interface ListDicomStoresResponse {

		/**
		 * The returned DICOM stores. Won't be more DICOM stores than the value of
		 * page_size in the request.
		 */
		dicomStores?: Array<DicomStore> | null;

		/**
		 * Token to retrieve the next page of results or empty if there are no more
		 * results in the list.
		 */
		nextPageToken?: string | null;
	}


	/** Lists the FHIR stores in the given dataset. */
	export interface ListFhirStoresResponse {

		/**
		 * The returned FHIR stores. Won't be more FHIR stores than the value of
		 * page_size in the request.
		 */
		fhirStores?: Array<FhirStore> | null;

		/**
		 * Token to retrieve the next page of results or empty if there are no more
		 * results in the list.
		 */
		nextPageToken?: string | null;
	}


	/** Lists the HL7v2 stores in the given dataset. */
	export interface ListHl7V2StoresResponse {

		/**
		 * The returned HL7v2 stores. Won't be more HL7v2 stores than the value of
		 * page_size in the request.
		 */
		hl7V2Stores?: Array<Hl7V2Store> | null;

		/**
		 * Token to retrieve the next page of results or empty if there are no more
		 * results in the list.
		 */
		nextPageToken?: string | null;
	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location> | null;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}


	/** A resource that represents Google Cloud Platform location. */
	export interface Location {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName?: string | null;

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels?: {[id: string]: string } | null;

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/**
		 * Service-specific metadata. For example the available capacity at the given
		 * location.
		 */
		metadata?: {[id: string]: any } | null;

		/**
		 * Resource name for the location, which may vary between implementations.
		 * For example: `"projects/example-project/locations/us-east1"`
		 */
		name?: string | null;
	}


	/** Lists the messages in the specified HL7v2 store. */
	export interface ListMessagesResponse {

		/**
		 * The returned Messages. Won't be more Messages than the value of
		 * page_size in the request. See
		 * view for
		 * populated fields.
		 */
		hl7V2Messages?: Array<Message> | null;

		/**
		 * Token to retrieve the next page of results or empty if there are no more
		 * results in the list.
		 */
		nextPageToken?: string | null;
	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation> | null;
	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status | null;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any } | null;

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string | null;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any } | null;
	}


	/**
	 * OperationMetadata provides information about the operation execution.
	 * Returned in the long-running operation's metadata field.
	 */
	export interface OperationMetadata {

		/** The name of the API method that initiated the operation. */
		apiMethodName?: string | null;

		/** Specifies if cancellation was requested for the operation. */
		cancelRequested?: boolean | null;

		/** ProgressCounter provides counters to describe an operation's progress. */
		counter?: ProgressCounter | null;

		/** The time at which the operation was created by the API. */
		createTime?: string | null;

		/** The time at which execution was completed. */
		endTime?: string | null;

		/**
		 * A link to audit and error logs in the log viewer. Error logs are generated
		 * only by some operations, listed at
		 * https://cloud.google.com/healthcare/docs/how-tos/stackdriver-logging.
		 */
		logsUrl?: string | null;
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


	/**
	 * An Identity and Access Management (IAM) policy, which specifies access
	 * controls for Google Cloud resources.
	 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
	 * `members` to a single `role`. Members can be user accounts, service accounts,
	 * Google groups, and domains (such as G Suite). A `role` is a named list of
	 * permissions; each `role` can be an IAM predefined role or a user-created
	 * custom role.
	 * Optionally, a `binding` can specify a `condition`, which is a logical
	 * expression that allows access to a resource only if the expression evaluates
	 * to `true`. A condition can add constraints based on attributes of the
	 * request, the resource, or both.
	 * **JSON example:**
	 *     {
	 *       "bindings": [
	 *         {
	 *           "role": "roles/resourcemanager.organizationAdmin",
	 *           "members": [
	 *             "user:mike@example.com",
	 *             "group:admins@example.com",
	 *             "domain:google.com",
	 *             "serviceAccount:my-project-id@appspot.gserviceaccount.com"
	 *           ]
	 *         },
	 *         {
	 *           "role": "roles/resourcemanager.organizationViewer",
	 *           "members": ["user:eve@example.com"],
	 *           "condition": {
	 *             "title": "expirable access",
	 *             "description": "Does not grant access after Sep 2020",
	 *             "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
	 *           }
	 *         }
	 *       ],
	 *       "etag": "BwWWja0YfJA=",
	 *       "version": 3
	 *     }
	 * **YAML example:**
	 *     bindings:
	 *     - members:
	 *       - user:mike@example.com
	 *       - group:admins@example.com
	 *       - domain:google.com
	 *       - serviceAccount:my-project-id@appspot.gserviceaccount.com
	 *       role: roles/resourcemanager.organizationAdmin
	 *     - members:
	 *       - user:eve@example.com
	 *       role: roles/resourcemanager.organizationViewer
	 *       condition:
	 *         title: expirable access
	 *         description: Does not grant access after Sep 2020
	 *         expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
	 *     - etag: BwWWja0YfJA=
	 *     - version: 3
	 * For a description of IAM and its features, see the
	 * [IAM documentation](https://cloud.google.com/iam/docs/).
	 */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig> | null;

		/**
		 * Associates a list of `members` to a `role`. Optionally, may specify a
		 * `condition` that determines how and when the `bindings` are applied. Each
		 * of the `bindings` must contain at least one member.
		 */
		bindings?: Array<Binding> | null;

		/**
		 * `etag` is used for optimistic concurrency control as a way to help
		 * prevent simultaneous updates of a policy from overwriting each other.
		 * It is strongly suggested that systems make use of the `etag` in the
		 * read-modify-write cycle to perform policy updates in order to avoid race
		 * conditions: An `etag` is returned in the response to `getIamPolicy`, and
		 * systems are expected to put that etag in the request to `setIamPolicy` to
		 * ensure that their change will be applied to the same version of the policy.
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 */
		etag?: string | null;

		/**
		 * Specifies the format of the policy.
		 * Valid values are `0`, `1`, and `3`. Requests that specify an invalid value
		 * are rejected.
		 * Any operation that affects conditional role bindings must specify version
		 * `3`. This requirement applies to the following operations:
		 * * Getting a policy that includes a conditional role binding
		 * * Adding a conditional role binding to a policy
		 * * Changing a conditional role binding in a policy
		 * * Removing any role binding, with or without a condition, from a policy
		 * that includes conditions
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 * If a policy does not include any conditions, operations on that policy may
		 * specify any valid version or leave the field unset.
		 */
		version?: number | null;
	}


	/** Request to search the resources in the specified FHIR store. */
	export interface SearchResourcesRequest {

		/**
		 * The FHIR resource type to search, such as Patient or Observation. For a
		 * complete list, see the FHIR Resource Index
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
		 */
		resourceType?: string | null;
	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/**
		 * An Identity and Access Management (IAM) policy, which specifies access
		 * controls for Google Cloud resources.
		 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
		 * `members` to a single `role`. Members can be user accounts, service accounts,
		 * Google groups, and domains (such as G Suite). A `role` is a named list of
		 * permissions; each `role` can be an IAM predefined role or a user-created
		 * custom role.
		 * Optionally, a `binding` can specify a `condition`, which is a logical
		 * expression that allows access to a resource only if the expression evaluates
		 * to `true`. A condition can add constraints based on attributes of the
		 * request, the resource, or both.
		 * **JSON example:**
		 * {
		 * "bindings": [
		 * {
		 * "role": "roles/resourcemanager.organizationAdmin",
		 * "members": [
		 * "user:mike@example.com",
		 * "group:admins@example.com",
		 * "domain:google.com",
		 * "serviceAccount:my-project-id@appspot.gserviceaccount.com"
		 * ]
		 * },
		 * {
		 * "role": "roles/resourcemanager.organizationViewer",
		 * "members": ["user:eve@example.com"],
		 * "condition": {
		 * "title": "expirable access",
		 * "description": "Does not grant access after Sep 2020",
		 * "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
		 * }
		 * }
		 * ],
		 * "etag": "BwWWja0YfJA=",
		 * "version": 3
		 * }
		 * **YAML example:**
		 * bindings:
		 * - members:
		 * - user:mike@example.com
		 * - group:admins@example.com
		 * - domain:google.com
		 * - serviceAccount:my-project-id@appspot.gserviceaccount.com
		 * role: roles/resourcemanager.organizationAdmin
		 * - members:
		 * - user:eve@example.com
		 * role: roles/resourcemanager.organizationViewer
		 * condition:
		 * title: expirable access
		 * description: Does not grant access after Sep 2020
		 * expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
		 * - etag: BwWWja0YfJA=
		 * - version: 3
		 * For a description of IAM and its features, see the
		 * [IAM documentation](https://cloud.google.com/iam/docs/).
		 */
		policy?: Policy | null;

		/**
		 * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
		 * the fields in the mask will be modified. If no mask is provided, the
		 * following default mask is used:
		 * paths: "bindings, etag"
		 * This field is only used by Cloud IAM.
		 */
		updateMask?: string | null;
	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/**
		 * The set of permissions to check for the `resource`. Permissions with
		 * wildcards (such as '*' or 'storage.*') are not allowed. For more
		 * information see
		 * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
		 */
		permissions?: Array<string> | null;
	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/**
		 * A subset of `TestPermissionsRequest.permissions` that the caller is
		 * allowed.
		 */
		permissions?: Array<string> | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes an HL7v2 message.
		 * Delete v1beta1/{name}
		 * @param {string} name The resource name of the HL7v2 message to delete.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_messages_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an HL7v2 message.
		 * Get v1beta1/{name}
		 * @param {string} name The resource name of the HL7v2 message to retrieve.
		 * @param {Healthcare_projects_locations_datasets_hl7V2Stores_messages_getView} view Specifies which parts of the Message resource to return in the response.
		 * When unspecified, equivalent to FULL.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_messages_get(name: string, view: Healthcare_projects_locations_datasets_hl7V2Stores_messages_getView | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the message.
		 * The contents of the message in Message.data and data extracted from
		 * the contents such as Message.create_time cannot be altered. Only the
		 * Message.labels field is allowed to be updated. The labels in the
		 * request are merged with the existing set of labels. Existing labels with
		 * the same keys are updated.
		 * Patch v1beta1/{name}
		 * @param {string} name Resource name of the Message, of the form
		 * `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`.
		 * Assigned by the server.
		 * @param {string} updateMask The update mask applies to the resource. For the `FieldMask` definition,
		 * see
		 * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_messages_patch(name: string, updateMask: string | null | undefined, requestBody: Message): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the entire contents of a resource.
		 * Implements the FHIR standard update interaction
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#update),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#update),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#update)).
		 * If the specified resource does
		 * not exist and the FHIR store has
		 * enable_update_create set, creates the
		 * resource with the client-specified ID.
		 * The request body must contain a JSON-encoded FHIR resource, and the request
		 * headers must contain `Content-Type: application/fhir+json`. The resource
		 * must contain an `id` element having an identical value to the ID in the
		 * REST path of the request.
		 * On success, the response body will contain a JSON-encoded representation
		 * of the updated resource, including the server-assigned version ID.
		 * Errors generated by the FHIR store will contain a JSON-encoded
		 * `OperationOutcome` resource describing the reason for the error. If the
		 * request cannot be mapped to a valid API method on a FHIR store, a generic
		 * GCP error might be returned instead.
		 * Put v1beta1/{name}
		 * @param {string} name The name of the resource to update.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_update(name: string, requestBody: HttpBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * On success, the response body will contain a JSON-encoded representation
		 * of a `Bundle` resource of type `searchset`, containing the results of the
		 * operation.
		 * Errors generated by the FHIR store will contain a JSON-encoded
		 * `OperationOutcome` resource describing the reason for the error. If the
		 * request cannot be mapped to a valid API method on a FHIR store, a generic
		 * GCP error might be returned instead.
		 * Get v1beta1/{name}/$everything
		 * @param {string} name Name of the `Patient` resource for which the information is required.
		 * @param {number} _count Maximum number of resources in a page. Defaults to 100.
		 * @param {string} _page_token Used to retrieve the next or previous page of results
		 * when using pagination. Value should be set to the value of page_token set
		 * in next or previous page links' urls. Next and previous page are returned
		 * in the response bundle's links field, where `link.relation` is "previous"
		 * or "next".
		 * Omit `page_token` if no previous request has been made.
		 * @param {string} end The response includes records prior to the end date. If no end date is
		 * provided, all records subsequent to the start date are in scope.
		 * @param {string} start The response includes records subsequent to the start date. If no start
		 * date is provided, all records prior to the end date are in scope.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_Patient_everything(name: string, _count: number | null | undefined, _page_token: string | null | undefined, end: string | null | undefined, start: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/$everything&_count=' + _count + '&_page_token=' + (_page_token == null ? '' : encodeURIComponent(_page_token)) + '&end=' + (end == null ? '' : encodeURIComponent(end)) + '&start=' + (start == null ? '' : encodeURIComponent(start)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes all the historical versions of a resource (excluding the current
		 * version) from the FHIR store. To remove all versions of a resource, first
		 * delete the current version and then call this method.
		 * This is not a FHIR standard operation.
		 * Delete v1beta1/{name}/$purge
		 * @param {string} name The name of the resource to purge.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_Resource_purge(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/$purge', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the versions of a resource (including the current version and
		 * deleted versions) from the FHIR store.
		 * Implements the per-resource form of the FHIR standard history interaction
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#history),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#history),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#history)).
		 * On success, the response body will contain a JSON-encoded representation
		 * of a `Bundle` resource of type `history`, containing the version history
		 * sorted from most recent to oldest versions.
		 * Errors generated by the FHIR store will contain a JSON-encoded
		 * `OperationOutcome` resource describing the reason for the error. If the
		 * request cannot be mapped to a valid API method on a FHIR store, a generic
		 * GCP error might be returned instead.
		 * Get v1beta1/{name}/_history
		 * @param {string} name The name of the resource to retrieve.
		 * @param {string} _at Only include resource versions that were current at some point during the
		 * time period specified in the date time value. The date parameter format is
		 * yyyy-mm-ddThh:mm:ss[Z|(+|-)hh:mm]
		 * Clients may specify any of the following:
		 * *  An entire year: `_at=2019`
		 * *  An entire month: `_at=2019-01`
		 * *  A specific day: `_at=2019-01-20`
		 * *  A specific second: `_at=2018-12-31T23:59:58Z`
		 * @param {number} _count The maximum number of search results on a page. Defaults to 1000.
		 * @param {string} _page_token Used to retrieve the first, previous, next, or last page of resource
		 * versions when using pagination. Value should be set to the value of
		 * `_page_token` set in next or previous page links' URLs. Next and previous
		 * page are returned in the response bundle's links field, where
		 * `link.relation` is "previous" or "next".
		 * Omit `_page_token` if no previous request has been made.
		 * @param {string} _since Only include resource versions that were created at or after the given
		 * instant in time. The instant in time uses the format
		 * YYYY-MM-DDThh:mm:ss.sss+zz:zz (for example 2015-02-07T13:28:17.239+02:00 or
		 * 2017-01-01T00:00:00Z). The time must be specified to the second and
		 * include a time zone.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_history(name: string, _at: string | null | undefined, _count: number | null | undefined, _page_token: string | null | undefined, _since: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/_history&_at=' + (_at == null ? '' : encodeURIComponent(_at)) + '&_count=' + _count + '&_page_token=' + (_page_token == null ? '' : encodeURIComponent(_page_token)) + '&_since=' + (_since == null ? '' : encodeURIComponent(_since)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the FHIR capability statement
		 * ([STU3](http://hl7.org/implement/standards/fhir/STU3/capabilitystatement.html),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/capabilitystatement.html)),
		 * or the [conformance
		 * statement](http://hl7.org/implement/standards/fhir/DSTU2/conformance.html)
		 * in the DSTU2 case for the store, which contains a description of
		 * functionality supported by the server.
		 * Implements the FHIR standard capabilities interaction
		 * ([STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#capabilities),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#capabilities)),
		 * or the [conformance
		 * interaction](http://hl7.org/implement/standards/fhir/DSTU2/http.html#conformance)
		 * in the DSTU2 case.
		 * On success, the response body will contain a JSON-encoded representation
		 * of a `CapabilityStatement` resource.
		 * Get v1beta1/{name}/fhir/metadata
		 * @param {string} name Name of the FHIR store to retrieve the capabilities for.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_capabilities(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/fhir/metadata', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1beta1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the
		 * server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * NOTE: the `name` binding allows API services to override the binding
		 * to use different resource name schemes, such as `users/operations`. To
		 * override the binding, API services can add a binding such as
		 * `"/v1/{name=users/*}/operations"` to their service configuration.
		 * For backwards compatibility, the default name includes the operations
		 * collection id, however overriding users must ensure the name binding
		 * is the parent resource, without the operations collection id.
		 * Get v1beta1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation.  The server
		 * makes a best effort to cancel the operation, but success is not
		 * guaranteed.  If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
		 * Operations.GetOperation or
		 * other methods to check whether the cancellation succeeded or whether the
		 * operation completed despite cancellation. On successful cancellation,
		 * the operation is not deleted; instead, it becomes an operation with
		 * an Operation.error value with a google.rpc.Status.code of 1,
		 * corresponding to `Code.CANCELLED`.
		 * Post v1beta1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports data to the specified destination by copying it from the DICOM
		 * store.
		 * Errors are also logged to Stackdriver Logging. For more information,
		 * see [Viewing logs](/healthcare/docs/how-tos/stackdriver-logging).
		 * The metadata field type is
		 * OperationMetadata.
		 * Post v1beta1/{name}:export
		 * @param {string} name The DICOM store resource name from which to export the data. For
		 * example,
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_export(name: string, requestBody: ExportDicomDataRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Imports data into the DICOM store by copying it from the specified source.
		 * For errors, the Operation is populated with error details (in the form
		 * of ImportDicomDataErrorDetails in error.details), which hold
		 * finer-grained error information. Errors are also logged to Stackdriver
		 * Logging. For more information,
		 * see [Viewing logs](/healthcare/docs/how-tos/stackdriver-logging).
		 * The metadata field type is
		 * OperationMetadata.
		 * Post v1beta1/{name}:import
		 * @param {string} name The name of the DICOM store resource into which the data is imported.
		 * For example,
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_import(name: string, requestBody: ImportDicomDataRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the health datasets in the current project.
		 * Get v1beta1/{parent}/datasets
		 * @param {string} parent The name of the project whose datasets should be listed.
		 * For example, `projects/{project_id}/locations/{location_id}`.
		 * @param {number} pageSize The maximum number of items to return. Capped to 100 if not specified.
		 * May not be larger than 1000.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datasets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new health dataset. Results are returned through the
		 * Operation interface which returns either an
		 * `Operation.response` which contains a Dataset or
		 * `Operation.error`. The metadata
		 * field type is OperationMetadata.
		 * A Google Cloud Platform project can contain up to 500 datasets across all
		 * regions.
		 * Post v1beta1/{parent}/datasets
		 * @param {string} parent The name of the project where the server creates the dataset. For
		 * example, `projects/{project_id}/locations/{location_id}`.
		 * @param {string} datasetId The ID of the dataset that is being created.
		 * The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_create(parent: string, datasetId: string | null | undefined, requestBody: Dataset): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datasets&datasetId=' + (datasetId == null ? '' : encodeURIComponent(datasetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the DICOM stores in the given dataset.
		 * Get v1beta1/{parent}/dicomStores
		 * @param {string} parent Name of the dataset.
		 * @param {string} filter Restricts stores returned to those matching a filter. Syntax:
		 * https://cloud.google.com/appengine/docs/standard/python/search/query_strings
		 * Only filtering on labels is supported. For example, `labels.key=value`.
		 * @param {number} pageSize Limit on the number of DICOM stores to return in a single response.
		 * If zero the default page size of 100 is used.
		 * @param {string} pageToken The next_page_token value returned from the previous List request, if any.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dicomStores&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new DICOM store within the parent dataset.
		 * Post v1beta1/{parent}/dicomStores
		 * @param {string} parent The name of the dataset this DICOM store belongs to.
		 * @param {string} dicomStoreId The ID of the DICOM store that is being created.
		 * Any string value up to 256 characters in length.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_create(parent: string, dicomStoreId: string | null | undefined, requestBody: DicomStore): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dicomStores&dicomStoreId=' + (dicomStoreId == null ? '' : encodeURIComponent(dicomStoreId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * DeleteInstance deletes an instance associated with the given study, series,
		 * and SOP Instance UID. Delete requests are equivalent to the GET requests
		 * specified in the Retrieve transaction.
		 * Delete v1beta1/{parent}/dicomWeb/{dicomWebPath}
		 * @param {string} parent The name of the DICOM store that is being accessed. For example,
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
		 * @param {string} dicomWebPath The path of the DeleteInstance request. For example,
		 * `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}`.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_studies_series_instances_delete(parent: string, dicomWebPath: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dicomWeb/' + (dicomWebPath == null ? '' : encodeURIComponent(dicomWebPath)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * RetrieveRenderedFrames returns instances associated with the given study,
		 * series, SOP Instance UID and frame numbers in an acceptable Rendered Media
		 * Type. See
		 * http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4.
		 * Get v1beta1/{parent}/dicomWeb/{dicomWebPath}
		 * @param {string} parent The name of the DICOM store that is being accessed. For example,
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
		 * @param {string} dicomWebPath The path of the RetrieveRenderedFrames DICOMweb request. For example,
		 * `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/frames/{frame_list}/rendered`.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_studies_series_instances_frames_retrieveRendered(parent: string, dicomWebPath: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dicomWeb/' + (dicomWebPath == null ? '' : encodeURIComponent(dicomWebPath)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * StoreInstances stores DICOM instances associated with study instance unique
		 * identifiers (SUID). See
		 * http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5.
		 * Post v1beta1/{parent}/dicomWeb/{dicomWebPath}
		 * @param {string} parent The name of the DICOM store that is being accessed. For example,
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
		 * @param {string} dicomWebPath The path of the StoreInstances DICOMweb request. For example,
		 * `studies/[{study_uid}]`. Note that the `study_uid` is optional.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_studies_storeInstances(parent: string, dicomWebPath: string, requestBody: HttpBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dicomWeb/' + (dicomWebPath == null ? '' : encodeURIComponent(dicomWebPath)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Searches for resources in the given FHIR store according to criteria
		 * specified as query parameters.
		 * Implements the FHIR standard search interaction
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#search),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#search),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#search))
		 * using the search semantics described in the FHIR Search specification
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/search.html),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/search.html),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/search.html)).
		 * Supports three methods of search defined by the specification:
		 * *  `GET [base]?[parameters]` to search across all resources.
		 * *  `GET [base]/[type]?[parameters]` to search resources of a specified
		 * type.
		 * *  `POST [base]/[type]/_search?[parameters]` as an alternate form having
		 * the same semantics as the `GET` method.
		 * The `GET` methods do not support compartment searches. The `POST` method
		 * does not support `application/x-www-form-urlencoded` search parameters.
		 * On success, the response body will contain a JSON-encoded representation
		 * of a `Bundle` resource of type `searchset`, containing the results of the
		 * search.
		 * Errors generated by the FHIR store will contain a JSON-encoded
		 * `OperationOutcome` resource describing the reason for the error. If the
		 * request cannot be mapped to a valid API method on a FHIR store, a generic
		 * GCP error might be returned instead.
		 * The server's capability statement, retrieved through
		 * capabilities, indicates what search parameters
		 * are supported on each FHIR resource. A list of all search parameters
		 * defined by the specification can be found in the FHIR Search Parameter
		 * Registry
		 * ([STU3](http://hl7.org/implement/standards/fhir/STU3/searchparameter-registry.html),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/searchparameter-registry.html)).
		 * FHIR search parameters for DSTU2 can be found on each resource's definition
		 * page.
		 * Supported search modifiers: `:missing`, `:exact`, `:contains`, `:text`,
		 * `:in`, `:not-in`, `:above`, `:below`, `:[type]`, `:not`, and `:recurse`.
		 * Supported search result parameters: `_sort`, `_count`, `_include`,
		 * `_revinclude`, `_summary=text`, `_summary=data`, and `_elements`.
		 * The maximum number of search results returned defaults to 100, which can
		 * be overridden by the `_count` parameter up to a maximum limit of 1000. If
		 * there are additional results, the returned `Bundle` will contain
		 * pagination links.
		 * Resources with a total size larger than 5MB or a field count larger than
		 * 50,000 might not be fully searchable as the server might trim its generated
		 * search index in those cases.
		 * Note: FHIR resources are indexed asynchronously, so there might be a slight
		 * delay between the time a resource is created or changes and when the change
		 * is reflected in search results.
		 * Get v1beta1/{parent}/fhir
		 * @param {string} parent Name of the FHIR store to retrieve resources from.
		 * @param {string} resourceType The FHIR resource type to search, such as Patient or Observation. For a
		 * complete list, see the FHIR Resource Index
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_search(parent: string, resourceType: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Executes all the requests in the given Bundle.
		 * Implements the FHIR standard batch/transaction interaction
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#transaction),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#transaction),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#transaction)).
		 * Supports all interactions within a bundle, except search. This method
		 * accepts Bundles of type `batch` and `transaction`, processing them
		 * according to the batch processing rules
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.1),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.1),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#brules))
		 * and transaction processing rules
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.2),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.2),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#trules)).
		 * The request body must contain a JSON-encoded FHIR `Bundle` resource, and
		 * the request headers must contain `Content-Type: application/fhir+json`.
		 * For a batch bundle or a successful transaction the response body will
		 * contain a JSON-encoded representation of a `Bundle` resource of type
		 * `batch-response` or `transaction-response` containing one entry for each
		 * entry in the request, with the outcome of processing the entry. In the
		 * case of an error for a transaction bundle, the response body will contain
		 * a JSON-encoded `OperationOutcome` resource describing the reason for the
		 * error. If the request cannot be mapped to a valid API method on a FHIR
		 * store, a generic GCP error might be returned instead.
		 * Post v1beta1/{parent}/fhir
		 * @param {string} parent Name of the FHIR store in which this bundle will be executed.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_executeBundle(parent: string, requestBody: HttpBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the N most recent `Observation` resources for a subject matching
		 * search criteria specified as query parameters, grouped by
		 * `Observation.code`, sorted from most recent to oldest.
		 * Implements the FHIR extended operation Observation-lastn
		 * ([STU3](http://hl7.org/implement/standards/fhir/STU3/observation-operations.html#lastn),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/observation-operations.html#lastn)).
		 * DSTU2 doesn't define the Observation-lastn method, but the server supports
		 * it the same way it supports STU3.
		 * Search terms are provided as query parameters following the same pattern as
		 * the search method. The following search parameters must
		 * be provided:
		 * - `subject` or `patient` to specify a subject for the Observation.
		 * - `code`, `category` or any of the composite parameters that include
		 * `code`.
		 * Any other valid Observation search parameters can also be provided. This
		 * operation accepts an additional query parameter `max`, which specifies N,
		 * the maximum number of Observations to return from each group, with a
		 * default of 1.
		 * Searches with over 1000 results are rejected. Results are counted before
		 * grouping and limiting the results with `max`. To stay within the limit,
		 * constrain these searches using Observation search parameters such as
		 * `_lastUpdated` or `date`.
		 * On success, the response body will contain a JSON-encoded representation
		 * of a `Bundle` resource of type `searchset`, containing the results of the
		 * operation.
		 * Errors generated by the FHIR store will contain a JSON-encoded
		 * `OperationOutcome` resource describing the reason for the error. If the
		 * request cannot be mapped to a valid API method on a FHIR store, a generic
		 * GCP error might be returned instead.
		 * Get v1beta1/{parent}/fhir/Observation/$lastn
		 * @param {string} parent Name of the FHIR store to retrieve resources from.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_Observation_lastn(parent: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir/Observation/$lastn', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Searches for resources in the given FHIR store according to criteria
		 * specified as query parameters.
		 * Implements the FHIR standard search interaction
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#search),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#search),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#search))
		 * using the search semantics described in the FHIR Search specification
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/search.html),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/search.html),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/search.html)).
		 * Supports three methods of search defined by the specification:
		 * *  `GET [base]?[parameters]` to search across all resources.
		 * *  `GET [base]/[type]?[parameters]` to search resources of a specified
		 * type.
		 * *  `POST [base]/[type]/_search?[parameters]` as an alternate form having
		 * the same semantics as the `GET` method.
		 * The `GET` methods do not support compartment searches. The `POST` method
		 * does not support `application/x-www-form-urlencoded` search parameters.
		 * On success, the response body will contain a JSON-encoded representation
		 * of a `Bundle` resource of type `searchset`, containing the results of the
		 * search.
		 * Errors generated by the FHIR store will contain a JSON-encoded
		 * `OperationOutcome` resource describing the reason for the error. If the
		 * request cannot be mapped to a valid API method on a FHIR store, a generic
		 * GCP error might be returned instead.
		 * The server's capability statement, retrieved through
		 * capabilities, indicates what search parameters
		 * are supported on each FHIR resource. A list of all search parameters
		 * defined by the specification can be found in the FHIR Search Parameter
		 * Registry
		 * ([STU3](http://hl7.org/implement/standards/fhir/STU3/searchparameter-registry.html),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/searchparameter-registry.html)).
		 * FHIR search parameters for DSTU2 can be found on each resource's definition
		 * page.
		 * Supported search modifiers: `:missing`, `:exact`, `:contains`, `:text`,
		 * `:in`, `:not-in`, `:above`, `:below`, `:[type]`, `:not`, and `:recurse`.
		 * Supported search result parameters: `_sort`, `_count`, `_include`,
		 * `_revinclude`, `_summary=text`, `_summary=data`, and `_elements`.
		 * The maximum number of search results returned defaults to 100, which can
		 * be overridden by the `_count` parameter up to a maximum limit of 1000. If
		 * there are additional results, the returned `Bundle` will contain
		 * pagination links.
		 * Resources with a total size larger than 5MB or a field count larger than
		 * 50,000 might not be fully searchable as the server might trim its generated
		 * search index in those cases.
		 * Note: FHIR resources are indexed asynchronously, so there might be a slight
		 * delay between the time a resource is created or changes and when the change
		 * is reflected in search results.
		 * Post v1beta1/{parent}/fhir/_search
		 * @param {string} parent Name of the FHIR store to retrieve resources from.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_search(parent: string, requestBody: SearchResourcesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir/_search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes FHIR resources that match a search query.
		 * Implements the FHIR standard conditional delete interaction
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.12.1),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.13.1),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#3.1.0.7.1)).
		 * If multiple resources match, all of them will be deleted.
		 * Search terms are provided as query parameters following the same pattern as
		 * the search method.
		 * Note: Unless resource versioning is disabled by setting the
		 * disable_resource_versioning flag
		 * on the FHIR store, the deleted resources will be moved to a history
		 * repository that can still be retrieved through vread
		 * and related methods, unless they are removed by the
		 * purge method.
		 * Delete v1beta1/{parent}/fhir/{type}
		 * @param {string} parent The name of the FHIR store this resource belongs to.
		 * @param {string} type The FHIR resource type to delete, such as Patient or Observation. For a
		 * complete list, see the FHIR Resource Index
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_conditionalDelete(parent: string, type: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir/' + (type == null ? '' : encodeURIComponent(type)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * If a resource is found based on the search criteria specified in the query
		 * parameters, updates part of that resource by applying the operations
		 * specified in a [JSON Patch](http://jsonpatch.com/) document.
		 * Implements the FHIR standard conditional patch interaction
		 * ([STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#patch),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#patch)).
		 * DSTU2 doesn't define a conditional patch method, but the server supports it
		 * in the same way it supports STU3.
		 * Search terms are provided as query parameters following the same pattern as
		 * the search method.
		 * If the search criteria identify more than one match, the request will
		 * return a `412 Precondition Failed` error.
		 * The request body must contain a JSON Patch document, and the request
		 * headers must contain `Content-Type: application/json-patch+json`.
		 * On success, the response body will contain a JSON-encoded representation
		 * of the updated resource, including the server-assigned version ID.
		 * Errors generated by the FHIR store will contain a JSON-encoded
		 * `OperationOutcome` resource describing the reason for the error. If the
		 * request cannot be mapped to a valid API method on a FHIR store, a generic
		 * GCP error might be returned instead.
		 * Patch v1beta1/{parent}/fhir/{type}
		 * @param {string} parent The name of the FHIR store this resource belongs to.
		 * @param {string} type The FHIR resource type to update, such as Patient or Observation. For a
		 * complete list, see the FHIR Resource Index
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_conditionalPatch(parent: string, type: string, requestBody: HttpBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir/' + (type == null ? '' : encodeURIComponent(type)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a FHIR resource.
		 * Implements the FHIR standard create interaction
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#create),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#create),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#create)),
		 * which creates a new resource with a server-assigned resource ID.
		 * Also supports the FHIR standard conditional create interaction
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#ccreate),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#ccreate),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#ccreate)),
		 * specified by supplying an `If-None-Exist` header containing a FHIR search
		 * query. If no resources match this search query, the server processes the
		 * create operation as normal.
		 * The request body must contain a JSON-encoded FHIR resource, and the request
		 * headers must contain `Content-Type: application/fhir+json`.
		 * On success, the response body will contain a JSON-encoded representation
		 * of the resource as it was created on the server, including the
		 * server-assigned resource ID and version ID.
		 * Errors generated by the FHIR store will contain a JSON-encoded
		 * `OperationOutcome` resource describing the reason for the error. If the
		 * request cannot be mapped to a valid API method on a FHIR store, a generic
		 * GCP error might be returned instead.
		 * Post v1beta1/{parent}/fhir/{type}
		 * @param {string} parent The name of the FHIR store this resource belongs to.
		 * @param {string} type The FHIR resource type to create, such as Patient or Observation. For a
		 * complete list, see the FHIR Resource Index
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
		 * Must match the resource type in the provided content.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_create(parent: string, type: string, requestBody: HttpBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir/' + (type == null ? '' : encodeURIComponent(type)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * If a resource is found based on the search criteria specified in the query
		 * parameters, updates the entire contents of that resource.
		 * Implements the FHIR standard conditional update interaction
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.10.2),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#cond-update),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#cond-update)).
		 * Search terms are provided as query parameters following the same pattern as
		 * the search method.
		 * If the search criteria identify more than one match, the request will
		 * return a `412 Precondition Failed` error.
		 * If the search criteria identify zero matches, and the supplied resource
		 * body contains an `id`, and the FHIR store has
		 * enable_update_create set, creates the
		 * resource with the client-specified ID. If the search criteria identify zero
		 * matches, and the supplied resource body does not contain an `id`, the
		 * resource will be created with a server-assigned ID as per the
		 * create method.
		 * The request body must contain a JSON-encoded FHIR resource, and the request
		 * headers must contain `Content-Type: application/fhir+json`.
		 * On success, the response body will contain a JSON-encoded representation
		 * of the updated resource, including the server-assigned version ID.
		 * Errors generated by the FHIR store will contain a JSON-encoded
		 * `OperationOutcome` resource describing the reason for the error. If the
		 * request cannot be mapped to a valid API method on a FHIR store, a generic
		 * GCP error might be returned instead.
		 * Put v1beta1/{parent}/fhir/{type}
		 * @param {string} parent The name of the FHIR store this resource belongs to.
		 * @param {string} type The FHIR resource type to update, such as Patient or Observation. For a
		 * complete list, see the FHIR Resource Index
		 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html),
		 * [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html),
		 * [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
		 * Must match the resource type in the provided content.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_fhir_conditionalUpdate(parent: string, type: string, requestBody: HttpBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhir/' + (type == null ? '' : encodeURIComponent(type)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the FHIR stores in the given dataset.
		 * Get v1beta1/{parent}/fhirStores
		 * @param {string} parent Name of the dataset.
		 * @param {string} filter Restricts stores returned to those matching a filter. Syntax:
		 * https://cloud.google.com/appengine/docs/standard/python/search/query_strings
		 * Only filtering on labels is supported, for example `labels.key=value`.
		 * @param {number} pageSize Limit on the number of FHIR stores to return in a single response.  If zero
		 * the default page size of 100 is used.
		 * @param {string} pageToken The next_page_token value returned from the previous List request, if any.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhirStores&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new FHIR store within the parent dataset.
		 * Post v1beta1/{parent}/fhirStores
		 * @param {string} parent The name of the dataset this FHIR store belongs to.
		 * @param {string} fhirStoreId The ID of the FHIR store that is being created.
		 * The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_fhirStores_create(parent: string, fhirStoreId: string | null | undefined, requestBody: FhirStore): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fhirStores&fhirStoreId=' + (fhirStoreId == null ? '' : encodeURIComponent(fhirStoreId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the HL7v2 stores in the given dataset.
		 * Get v1beta1/{parent}/hl7V2Stores
		 * @param {string} parent Name of the dataset.
		 * @param {string} filter Restricts stores returned to those matching a filter. Syntax:
		 * https://cloud.google.com/appengine/docs/standard/python/search/query_strings
		 * Only filtering on labels is supported. For example, `labels.key=value`.
		 * @param {number} pageSize Limit on the number of HL7v2 stores to return in a single response.
		 * If zero the default page size of 100 is used.
		 * @param {string} pageToken The next_page_token value returned from the previous List request, if any.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hl7V2Stores&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new HL7v2 store within the parent dataset.
		 * Post v1beta1/{parent}/hl7V2Stores
		 * @param {string} parent The name of the dataset this HL7v2 store belongs to.
		 * @param {string} hl7V2StoreId The ID of the HL7v2 store that is being created.
		 * The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_create(parent: string, hl7V2StoreId: string | null | undefined, requestBody: Hl7V2Store): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hl7V2Stores&hl7V2StoreId=' + (hl7V2StoreId == null ? '' : encodeURIComponent(hl7V2StoreId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the messages in the given HL7v2 store with support for filtering.
		 * Note: HL7v2 messages are indexed asynchronously, so there might be a slight
		 * delay between the time a message is created and when it can be found
		 * through a filter.
		 * Get v1beta1/{parent}/messages
		 * @param {string} parent Name of the HL7v2 store to retrieve messages from.
		 * @param {string} filter Restricts messages returned to those matching a filter. Syntax:
		 * https://cloud.google.com/appengine/docs/standard/python/search/query_strings
		 * Fields/functions available for filtering are:
		 * *  `message_type`, from the MSH-9.1 field. For example,
		 * `NOT message_type = "ADT"`.
		 * *  `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in
		 * the dataset's time_zone, from the MSH-7 segment. For example,
		 * `send_date < "2017-01-02"`.
		 * *  `send_time`, the timestamp when the message was sent, using the
		 * RFC3339 time format for comparisons, from the MSH-7 segment. For example,
		 * `send_time < "2017-01-02T00:00:00-05:00"`.
		 * *  `send_facility`, the care center that the message came from, from the
		 * MSH-4 segment. For example, `send_facility = "ABC"`.
		 * *  `PatientId(value, type)`, which matches if the message lists a patient
		 * having an ID of the given value and type in the PID-2, PID-3, or PID-4
		 * segments. For example, `PatientId("123456", "MRN")`.
		 * *  `labels.x`, a string value of the label with key `x` as set using the
		 * Message.labels
		 * map. For example, `labels."priority"="high"`. The operator `:*` can be used
		 * to assert the existence of a label. For example, `labels."priority":*`.
		 * @param {string} orderBy Orders messages returned by the specified order_by clause.
		 * Syntax: https://cloud.google.com/apis/design/design_patterns#sorting_order
		 * Fields available for ordering are:
		 * *  `send_time`
		 * @param {number} pageSize Limit on the number of messages to return in a single response.
		 * If zero the default page size of 100 is used.
		 * @param {string} pageToken The next_page_token value returned from the previous List request, if any.
		 * @param {Healthcare_projects_locations_datasets_hl7V2Stores_messages_getView} view Specifies the parts of the Message to return in the response.
		 * When unspecified, equivalent to BASIC. Setting this to anything other than
		 * BASIC with a `page_size` larger than the default can generate a large
		 * response, which impacts the performance of this method.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_messages_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Healthcare_projects_locations_datasets_hl7V2Stores_messages_getView | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/messages&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a message and sends a notification to the Cloud Pub/Sub topic. If
		 * configured, the MLLP adapter listens to messages created by this method and
		 * sends those back to the hospital. A successful response indicates the
		 * message has been persisted to storage and a Cloud Pub/Sub notification has
		 * been sent. Sending to the hospital by the MLLP adapter happens
		 * asynchronously.
		 * Post v1beta1/{parent}/messages
		 * @param {string} parent The name of the dataset this message belongs to.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_messages_create(parent: string, requestBody: CreateMessageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Ingests a new HL7v2 message from the hospital and sends a notification to
		 * the Cloud Pub/Sub topic. Return is an HL7v2 ACK message if the message was
		 * successfully stored. Otherwise an error is returned.
		 * Post v1beta1/{parent}/messages:ingest
		 * @param {string} parent The name of the HL7v2 store this message belongs to.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_hl7V2Stores_messages_ingest(parent: string, requestBody: IngestMessageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/messages:ingest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the access control policy for a resource.
		 * Returns an empty policy if the resource exists and does not have a policy
		 * set.
		 * Get v1beta1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The policy format version to be returned.
		 * Valid values are 0, 1, and 3. Requests specifying an invalid value will be
		 * rejected.
		 * Requests for policies with any conditional bindings must specify version 3.
		 * Policies without any conditional bindings may specify any valid value or
		 * leave the field unset.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_annotationStores_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any
		 * existing policy.
		 * Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
		 * Post v1beta1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_annotationStores_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns permissions that a caller has on the specified resource.
		 * If the resource does not exist, this will return an empty set of
		 * permissions, not a NOT_FOUND error.
		 * Note: This operation is designed to be used for building permission-aware
		 * UIs and command-line tools, not for authorization checking. This operation
		 * may "fail open" without warning.
		 * Post v1beta1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_annotationStores_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new dataset containing de-identified data from the source
		 * dataset. The metadata field type
		 * is OperationMetadata.
		 * If the request is successful, the
		 * response field type is
		 * DeidentifySummary.
		 * If errors occur,
		 * error
		 * details field type is
		 * DeidentifyErrorDetails.
		 * The LRO result may still be successful if de-identification fails for some
		 * DICOM instances. The new de-identified dataset will not contain these
		 * failed resources. Failed resource totals are tracked in
		 * DeidentifySummary.failure_resource_count.
		 * Error details are also logged to Stackdriver Logging. For more information,
		 * see [Viewing logs](/healthcare/docs/how-tos/stackdriver-logging).
		 * Post v1beta1/{sourceDataset}:deidentify
		 * @param {string} sourceDataset Source dataset resource name. For example,
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_deidentify(sourceDataset: string, requestBody: DeidentifyDatasetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (sourceDataset == null ? '' : encodeURIComponent(sourceDataset)) + ':deidentify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * De-identifies data from the source store and writes it to the destination
		 * store. The metadata field type
		 * is OperationMetadata.
		 * If the request is successful, the
		 * response field type is
		 * DeidentifyDicomStoreSummary. If errors occur,
		 * error
		 * details field type is
		 * DeidentifyErrorDetails.
		 * The LRO result may still be successful if de-identification fails for some
		 * DICOM instances. The output DICOM store will not contain
		 * these failed resources. Failed resource totals are tracked in
		 * DeidentifySummary.failure_resource_count.
		 * Error details are also logged to Stackdriver
		 * (see [Viewing logs](/healthcare/docs/how-tos/stackdriver-logging)).
		 * Post v1beta1/{sourceStore}:deidentify
		 * @param {string} sourceStore Source DICOM store resource name. For example,
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
		 * @return {void} Successful response
		 */
		Healthcare_projects_locations_datasets_dicomStores_deidentify(sourceStore: string, requestBody: DeidentifyDicomStoreRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (sourceStore == null ? '' : encodeURIComponent(sourceStore)) + ':deidentify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Healthcare_projects_locations_datasets_hl7V2Stores_messages_getView { MESSAGE_VIEW_UNSPECIFIED = 0, RAW_ONLY = 1, PARSED_ONLY = 2, FULL = 3, BASIC = 4 }

}

