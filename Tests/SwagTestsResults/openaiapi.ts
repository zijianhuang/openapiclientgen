import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AddUploadPartRequest {

		/**
		 * The chunk of bytes for this Part.
		 * Required
		 */
		data: string;
	}


	/** Represents an individual Admin API key in an org. */
	export interface AdminApiKey {

		/**
		 * The object type, which is always `organization.admin_api_key`
		 * Required
		 */
		object: string;

		/**
		 * The identifier, which can be referenced in API endpoints
		 * Required
		 */
		id: string;

		/**
		 * The name of the API key
		 * Required
		 */
		name: string;

		/**
		 * The redacted value of the API key
		 * Required
		 */
		redacted_value: string;

		/** The value of the API key. Only shown on create. */
		value?: string | null;

		/**
		 * The Unix timestamp (in seconds) of when the API key was created
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created_at: string;

		/**
		 * The Unix timestamp (in seconds) of when the API key was last used
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		last_used_at: string;

		/** Required */
		owner: AdminApiKeyOwner;
	}

	export interface AdminApiKeyOwner {

		/** Always `user` */
		type?: string | null;

		/** The object type, which is always organization.user */
		object?: string | null;

		/** The identifier, which can be referenced in API endpoints */
		id?: string | null;

		/** The name of the user */
		name?: string | null;

		/**
		 * The Unix timestamp (in seconds) of when the user was created
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created_at?: string | null;

		/** Always `owner` */
		role?: string | null;
	}

	export interface ApiKeyList {
		object?: string | null;
		data?: Array<AdminApiKey>;
		has_more?: boolean | null;
		first_id?: string | null;
		last_id?: string | null;
	}


	/** Represents an `assistant` that can call the model and use tools. */
	export interface AssistantObject {

		/**
		 * The identifier, which can be referenced in API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The object type, which is always `assistant`.
		 * Required
		 */
		object: AssistantObjectObject;

		/**
		 * The Unix timestamp (in seconds) for when the assistant was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The name of the assistant. The maximum length is 256 characters.
		 * Required
		 * Max length: 256
		 */
		name: string;

		/**
		 * The description of the assistant. The maximum length is 512 characters.
		 * Required
		 * Max length: 512
		 */
		description: string;

		/**
		 * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
		 * Required
		 */
		model: string;

		/**
		 * The system instructions that the assistant uses. The maximum length is 256,000 characters.
		 * Required
		 * Max length: 256000
		 */
		instructions: string;

		/**
		 * A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.
		 * Required
		 * Maximum items: 128
		 * Array member types: AssistantToolsCode, AssistantToolsFileSearch, AssistantToolsFunction
		 */
		tools: Array<any>;

		/**
		 * A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
		 */
		tool_resources?: AssistantObjectTool_resources;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 * Required
		 */
		metadata: Metadata;

		/**
		 * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
		 * Minimum: 0
		 * Maximum: 2
		 */
		temperature?: number | null;

		/**
		 * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
		 * We generally recommend altering this or temperature but not both.
		 * Minimum: 0
		 * Maximum: 1
		 */
		top_p?: number | null;

		/**
		 * Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since `gpt-3.5-turbo-1106`.
		 * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).
		 * Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.
		 * **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.
		 */
		response_format?: AssistantsApiResponseFormatOption;
	}

	export enum AssistantObjectObject { assistant = 0 }

	export interface AssistantObjectTool_resources {
		code_interpreter?: AssistantObjectTool_resourcesCode_interpreter;
		file_search?: AssistantObjectTool_resourcesFile_search;
	}

	export interface AssistantObjectTool_resourcesCode_interpreter {

		/**
		 * A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter`` tool. There can be a maximum of 20 files associated with the tool.
		 * Maximum items: 20
		 */
		file_ids?: Array<string>;
	}

	export interface AssistantObjectTool_resourcesFile_search {

		/**
		 * The ID of the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
		 * Maximum items: 1
		 */
		vector_store_ids?: Array<string>;
	}


	/**
	 * Set of 16 key-value pairs that can be attached to an object. This can be
	 * useful for storing additional information about the object in a structured
	 * format, and querying for objects via API or the dashboard. 
	 * Keys are strings with a maximum length of 64 characters. Values are strings
	 * with a maximum length of 512 characters.
	 */
	export interface Metadata {
	}


	/**
	 * Represents an event emitted when streaming a Run.
	 * Each event in a server-sent events stream has an `event` and `data` property:
	 * ```
	 * event: thread.created
	 * data: {"id": "thread_123", "object": "thread", ...}
	 * ```
	 * We emit events whenever a new object is created, transitions to a new state, or is being
	 * streamed in parts (deltas). For example, we emit `thread.run.created` when a new run
	 * is created, `thread.run.completed` when a run completes, and so on. When an Assistant chooses
	 * to create a message during a run, we emit a `thread.message.created event`, a
	 * `thread.message.in_progress` event, many `thread.message.delta` events, and finally a
	 * `thread.message.completed` event.
	 * We may add additional events over time, so we recommend handling unknown events gracefully
	 * in your code. See the [Assistants API quickstart](/docs/assistants/overview) to learn how to
	 * integrate the Assistants API with streaming.
	 */
	export interface AssistantStreamEvent {
	}

	export enum AssistantSupportedModels { 'gpt-4.1' = 0, 'gpt-4.1-mini' = 1, 'gpt-4.1-nano' = 2, 'gpt-4.1-2025-04-14' = 3, 'gpt-4.1-mini-2025-04-14' = 4, 'gpt-4.1-nano-2025-04-14' = 5, 'o3-mini' = 6, 'o3-mini-2025-01-31' = 7, o1 = 8, 'o1-2024-12-17' = 9, 'gpt-4o' = 10, 'gpt-4o-2024-11-20' = 11, 'gpt-4o-2024-08-06' = 12, 'gpt-4o-2024-05-13' = 13, 'gpt-4o-mini' = 14, 'gpt-4o-mini-2024-07-18' = 15, 'gpt-4.5-preview' = 16, 'gpt-4.5-preview-2025-02-27' = 17, 'gpt-4-turbo' = 18, 'gpt-4-turbo-2024-04-09' = 19, 'gpt-4-0125-preview' = 20, 'gpt-4-turbo-preview' = 21, 'gpt-4-1106-preview' = 22, 'gpt-4-vision-preview' = 23, 'gpt-4' = 24, 'gpt-4-0314' = 25, 'gpt-4-0613' = 26, 'gpt-4-32k' = 27, 'gpt-4-32k-0314' = 28, 'gpt-4-32k-0613' = 29, 'gpt-3.5-turbo' = 30, 'gpt-3.5-turbo-16k' = 31, 'gpt-3.5-turbo-0613' = 32, 'gpt-3.5-turbo-1106' = 33, 'gpt-3.5-turbo-0125' = 34, 'gpt-3.5-turbo-16k-0613' = 35 }

	export interface AssistantToolsCode {

		/**
		 * The type of tool being defined: `code_interpreter`
		 * Required
		 */
		type: AssistantToolsCodeType;
	}

	export enum AssistantToolsCodeType { code_interpreter = 0 }

	export interface AssistantToolsFileSearch {

		/**
		 * The type of tool being defined: `file_search`
		 * Required
		 */
		type: AssistantToolsFileSearchType;

		/** Overrides for the file search tool. */
		file_search?: AssistantToolsFileSearchFile_search;
	}

	export enum AssistantToolsFileSearchType { file_search = 0 }

	export interface AssistantToolsFileSearchFile_search {

		/**
		 * The maximum number of results the file search tool should output. The default is 20 for `gpt-4*` models and 5 for `gpt-3.5-turbo`. This number should be between 1 and 50 inclusive.
		 * Note that the file search tool may output fewer than `max_num_results` results. See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
		 * Minimum: 1
		 * Maximum: 50
		 */
		max_num_results?: number | null;

		/**
		 * The ranking options for the file search. If not specified, the file search tool will use the `auto` ranker and a score_threshold of 0.
		 * See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
		 */
		ranking_options?: FileSearchRankingOptions;
	}


	/**
	 * The ranking options for the file search. If not specified, the file search tool will use the `auto` ranker and a score_threshold of 0.
	 * See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
	 */
	export interface FileSearchRankingOptions {

		/** The ranker to use for the file search. If not specified will use the `auto` ranker. */
		ranker?: FileSearchRankingOptionsRanker | null;

		/**
		 * The score threshold for the file search. All values must be a floating point number between 0 and 1.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		score_threshold: number;
	}

	export enum FileSearchRankingOptionsRanker { auto = 0, default_2024_08_21 = 1 }

	export interface AssistantToolsFileSearchTypeOnly {

		/**
		 * The type of tool being defined: `file_search`
		 * Required
		 */
		type: AssistantToolsFileSearchType;
	}

	export interface AssistantToolsFunction {

		/**
		 * The type of tool being defined: `function`
		 * Required
		 */
		type: AssistantToolsFunctionType;

		/** Required */
		function: FunctionObject;
	}

	export enum AssistantToolsFunctionType { function = 0 }

	export interface FunctionObject {

		/** A description of what the function does, used by the model to choose when and how to call the function. */
		description?: string | null;

		/**
		 * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64.
		 * Required
		 */
		name: string;

		/**
		 * The parameters the functions accepts, described as a JSON Schema object. See the [guide](/docs/guides/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format.
		 * Omitting `parameters` defines a function with an empty parameter list.
		 */
		parameters?: FunctionParameters;

		/** Whether to enable strict schema adherence when generating the function call. If set to true, the model will follow the exact schema defined in the `parameters` field. Only a subset of JSON Schema is supported when `strict` is `true`. Learn more about Structured Outputs in the [function calling guide](docs/guides/function-calling). */
		strict?: boolean | null;
	}


	/**
	 * The parameters the functions accepts, described as a JSON Schema object. See the [guide](/docs/guides/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format. 
	 * Omitting `parameters` defines a function with an empty parameter list.
	 */
	export interface FunctionParameters {
	}


	/**
	 * Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since `gpt-3.5-turbo-1106`.
	 * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).
	 * Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.
	 * **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.
	 */
	export interface AssistantsApiResponseFormatOption {
	}


	/**
	 * Controls which (if any) tool is called by the model.
	 * `none` means the model will not call any tools and instead generates a message.
	 * `auto` is the default value and means the model can pick between generating a message or calling one or more tools.
	 * `required` means the model must call one or more tools before responding to the user.
	 * Specifying a particular tool like `{"type": "file_search"}` or `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.
	 */
	export interface AssistantsApiToolChoiceOption {
	}


	/** Specifies a tool the model should use. Use to force the model to call a specific tool. */
	export interface AssistantsNamedToolChoice {

		/**
		 * The type of the tool. If type is `function`, the function name must be set
		 * Required
		 */
		type: AssistantsNamedToolChoiceType;
		function?: AssistantsNamedToolChoiceFunction;
	}

	export enum AssistantsNamedToolChoiceType { function = 0, code_interpreter = 1, file_search = 2 }

	export interface AssistantsNamedToolChoiceFunction {

		/**
		 * The name of the function to call.
		 * Required
		 */
		name: string;
	}


	/**
	 * The format of the output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`. For `gpt-4o-transcribe` and `gpt-4o-mini-transcribe`, the only supported format is `json`.
	 */
	export enum AudioResponseFormat { json = 0, text = 1, srt = 2, verbose_json = 3, vtt = 4 }


	/** A log of a user action or configuration change within this organization. */
	export interface AuditLog {

		/**
		 * The ID of this log.
		 * Required
		 */
		id: string;

		/**
		 * The event type.
		 * Required
		 */
		type: AuditLogType;

		/**
		 * The Unix timestamp (in seconds) of the event.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		effective_at: number;

		/** The project that the action was scoped to. Absent for actions not scoped to projects. */
		project?: AuditLogProject;

		/**
		 * The actor who performed the audit logged action.
		 * Required
		 */
		actor: AuditLogActor;

		/** The details for events with this `type`. */
		'api_key.created'?: AuditLog_api_key_created_;

		/** The details for events with this `type`. */
		'api_key.updated'?: AuditLog_api_key_updated_;

		/** The details for events with this `type`. */
		'api_key.deleted'?: AuditLog_api_key_deleted_;

		/** The project and fine-tuned model checkpoint that the checkpoint permission was created for. */
		'checkpoint_permission.created'?: AuditLog_checkpoint_permission_created_;

		/** The details for events with this `type`. */
		'checkpoint_permission.deleted'?: AuditLog_checkpoint_permission_deleted_;

		/** The details for events with this `type`. */
		'invite.sent'?: AuditLog_invite_sent_;

		/** The details for events with this `type`. */
		'invite.accepted'?: AuditLog_invite_accepted_;

		/** The details for events with this `type`. */
		'invite.deleted'?: AuditLog_invite_deleted_;

		/** The details for events with this `type`. */
		'login.failed'?: AuditLog_login_failed_;

		/** The details for events with this `type`. */
		'logout.failed'?: AuditLog_logout_failed_;

		/** The details for events with this `type`. */
		'organization.updated'?: AuditLog_organization_updated_;

		/** The details for events with this `type`. */
		'project.created'?: AuditLog_project_created_;

		/** The details for events with this `type`. */
		'project.updated'?: AuditLog_project_updated_;

		/** The details for events with this `type`. */
		'project.archived'?: AuditLog_project_archived_;

		/** The details for events with this `type`. */
		'rate_limit.updated'?: AuditLog_rate_limit_updated_;

		/** The details for events with this `type`. */
		'rate_limit.deleted'?: AuditLog_rate_limit_deleted_;

		/** The details for events with this `type`. */
		'service_account.created'?: AuditLog_service_account_created_;

		/** The details for events with this `type`. */
		'service_account.updated'?: AuditLog_service_account_updated_;

		/** The details for events with this `type`. */
		'service_account.deleted'?: AuditLog_service_account_deleted_;

		/** The details for events with this `type`. */
		'user.added'?: AuditLog_user_added_;

		/** The details for events with this `type`. */
		'user.updated'?: AuditLog_user_updated_;

		/** The details for events with this `type`. */
		'user.deleted'?: AuditLog_user_deleted_;

		/** The details for events with this `type`. */
		'certificate.created'?: AuditLog_certificate_created_;

		/** The details for events with this `type`. */
		'certificate.updated'?: AuditLog_certificate_updated_;

		/** The details for events with this `type`. */
		'certificate.deleted'?: AuditLog_certificate_deleted_;

		/** The details for events with this `type`. */
		'certificates.activated'?: AuditLog_certificates_activated_;

		/** The details for events with this `type`. */
		'certificates.deactivated'?: AuditLog_certificates_deactivated_;
	}

	export enum AuditLogType { 'api_key.created' = 0, 'api_key.updated' = 1, 'api_key.deleted' = 2, 'checkpoint_permission.created' = 3, 'checkpoint_permission.deleted' = 4, 'invite.sent' = 5, 'invite.accepted' = 6, 'invite.deleted' = 7, 'login.succeeded' = 8, 'login.failed' = 9, 'logout.succeeded' = 10, 'logout.failed' = 11, 'organization.updated' = 12, 'project.created' = 13, 'project.updated' = 14, 'project.archived' = 15, 'service_account.created' = 16, 'service_account.updated' = 17, 'service_account.deleted' = 18, 'rate_limit.updated' = 19, 'rate_limit.deleted' = 20, 'user.added' = 21, 'user.updated' = 22, 'user.deleted' = 23 }

	export interface AuditLogProject {

		/** The project ID. */
		id?: string | null;

		/** The project title. */
		name?: string | null;
	}


	/** The actor who performed the audit logged action. */
	export interface AuditLogActor {

		/** The type of actor. Is either `session` or `api_key`. */
		type?: AuditLogActorType | null;

		/** The session in which the audit logged action was performed. */
		session?: AuditLogActorSession;

		/** The API Key used to perform the audit logged action. */
		api_key?: AuditLogActorApiKey;
	}

	export enum AuditLogActorType { session = 0, api_key = 1 }


	/** The session in which the audit logged action was performed. */
	export interface AuditLogActorSession {

		/** The user who performed the audit logged action. */
		user?: AuditLogActorUser;

		/** The IP address from which the action was performed. */
		ip_address?: string | null;
	}


	/** The user who performed the audit logged action. */
	export interface AuditLogActorUser {

		/** The user id. */
		id?: string | null;

		/** The user email. */
		email?: string | null;
	}


	/** The API Key used to perform the audit logged action. */
	export interface AuditLogActorApiKey {

		/** The tracking id of the API key. */
		id?: string | null;

		/** The type of API key. Can be either `user` or `service_account`. */
		type?: AuditLogActorApiKeyType | null;

		/** The user who performed the audit logged action. */
		user?: AuditLogActorUser;

		/** The service account that performed the audit logged action. */
		service_account?: AuditLogActorServiceAccount;
	}

	export enum AuditLogActorApiKeyType { user = 0, service_account = 1 }


	/** The service account that performed the audit logged action. */
	export interface AuditLogActorServiceAccount {

		/** The service account id. */
		id?: string | null;
	}

	export interface AuditLog_api_key_created_ {

		/** The tracking ID of the API key. */
		id?: string | null;

		/** The payload used to create the API key. */
		data?: AuditLog_api_key_created_Data;
	}

	export interface AuditLog_api_key_created_Data {

		/** A list of scopes allowed for the API key, e.g. `["api.model.request"]` */
		scopes?: Array<string>;
	}

	export interface AuditLog_api_key_updated_ {

		/** The tracking ID of the API key. */
		id?: string | null;

		/** The payload used to update the API key. */
		changes_requested?: AuditLog_api_key_updated_Changes_requested;
	}

	export interface AuditLog_api_key_updated_Changes_requested {

		/** A list of scopes allowed for the API key, e.g. `["api.model.request"]` */
		scopes?: Array<string>;
	}

	export interface AuditLog_api_key_deleted_ {

		/** The tracking ID of the API key. */
		id?: string | null;
	}

	export interface AuditLog_checkpoint_permission_created_ {

		/** The ID of the checkpoint permission. */
		id?: string | null;

		/** The payload used to create the checkpoint permission. */
		data?: AuditLog_checkpoint_permission_created_Data;
	}

	export interface AuditLog_checkpoint_permission_created_Data {

		/** The ID of the project that the checkpoint permission was created for. */
		project_id?: string | null;

		/** The ID of the fine-tuned model checkpoint. */
		fine_tuned_model_checkpoint?: string | null;
	}

	export interface AuditLog_checkpoint_permission_deleted_ {

		/** The ID of the checkpoint permission. */
		id?: string | null;
	}

	export interface AuditLog_invite_sent_ {

		/** The ID of the invite. */
		id?: string | null;

		/** The payload used to create the invite. */
		data?: AuditLog_invite_sent_Data;
	}

	export interface AuditLog_invite_sent_Data {

		/** The email invited to the organization. */
		email?: string | null;

		/** The role the email was invited to be. Is either `owner` or `member`. */
		role?: string | null;
	}

	export interface AuditLog_invite_accepted_ {

		/** The ID of the invite. */
		id?: string | null;
	}

	export interface AuditLog_invite_deleted_ {

		/** The ID of the invite. */
		id?: string | null;
	}

	export interface AuditLog_login_failed_ {

		/** The error code of the failure. */
		error_code?: string | null;

		/** The error message of the failure. */
		error_message?: string | null;
	}

	export interface AuditLog_logout_failed_ {

		/** The error code of the failure. */
		error_code?: string | null;

		/** The error message of the failure. */
		error_message?: string | null;
	}

	export interface AuditLog_organization_updated_ {

		/** The organization ID. */
		id?: string | null;

		/** The payload used to update the organization settings. */
		changes_requested?: AuditLog_organization_updated_Changes_requested;
	}

	export interface AuditLog_organization_updated_Changes_requested {

		/** The organization title. */
		title?: string | null;

		/** The organization description. */
		description?: string | null;

		/** The organization name. */
		name?: string | null;
		settings?: AuditLog_organization_updated_Changes_requestedSettings;
	}

	export interface AuditLog_organization_updated_Changes_requestedSettings {

		/** Visibility of the threads page which shows messages created with the Assistants API and Playground. One of `ANY_ROLE`, `OWNERS`, or `NONE`. */
		threads_ui_visibility?: string | null;

		/** Visibility of the usage dashboard which shows activity and costs for your organization. One of `ANY_ROLE` or `OWNERS`. */
		usage_dashboard_visibility?: string | null;
	}

	export interface AuditLog_project_created_ {

		/** The project ID. */
		id?: string | null;

		/** The payload used to create the project. */
		data?: AuditLog_project_created_Data;
	}

	export interface AuditLog_project_created_Data {

		/** The project name. */
		name?: string | null;

		/** The title of the project as seen on the dashboard. */
		title?: string | null;
	}

	export interface AuditLog_project_updated_ {

		/** The project ID. */
		id?: string | null;

		/** The payload used to update the project. */
		changes_requested?: AuditLog_project_updated_Changes_requested;
	}

	export interface AuditLog_project_updated_Changes_requested {

		/** The title of the project as seen on the dashboard. */
		title?: string | null;
	}

	export interface AuditLog_project_archived_ {

		/** The project ID. */
		id?: string | null;
	}

	export interface AuditLog_rate_limit_updated_ {

		/** The rate limit ID */
		id?: string | null;

		/** The payload used to update the rate limits. */
		changes_requested?: AuditLog_rate_limit_updated_Changes_requested;
	}

	export interface AuditLog_rate_limit_updated_Changes_requested {

		/**
		 * The maximum requests per minute.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_requests_per_1_minute?: number | null;

		/**
		 * The maximum tokens per minute.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_tokens_per_1_minute?: number | null;

		/**
		 * The maximum images per minute. Only relevant for certain models.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_images_per_1_minute?: number | null;

		/**
		 * The maximum audio megabytes per minute. Only relevant for certain models.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_audio_megabytes_per_1_minute?: number | null;

		/**
		 * The maximum requests per day. Only relevant for certain models.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_requests_per_1_day?: number | null;

		/**
		 * The maximum batch input tokens per day. Only relevant for certain models.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batch_1_day_max_input_tokens?: number | null;
	}

	export interface AuditLog_rate_limit_deleted_ {

		/** The rate limit ID */
		id?: string | null;
	}

	export interface AuditLog_service_account_created_ {

		/** The service account ID. */
		id?: string | null;

		/** The payload used to create the service account. */
		data?: AuditLog_service_account_created_Data;
	}

	export interface AuditLog_service_account_created_Data {

		/** The role of the service account. Is either `owner` or `member`. */
		role?: string | null;
	}

	export interface AuditLog_service_account_updated_ {

		/** The service account ID. */
		id?: string | null;

		/** The payload used to updated the service account. */
		changes_requested?: AuditLog_service_account_updated_Changes_requested;
	}

	export interface AuditLog_service_account_updated_Changes_requested {

		/** The role of the service account. Is either `owner` or `member`. */
		role?: string | null;
	}

	export interface AuditLog_service_account_deleted_ {

		/** The service account ID. */
		id?: string | null;
	}

	export interface AuditLog_user_added_ {

		/** The user ID. */
		id?: string | null;

		/** The payload used to add the user to the project. */
		data?: AuditLog_user_added_Data;
	}

	export interface AuditLog_user_added_Data {

		/** The role of the user. Is either `owner` or `member`. */
		role?: string | null;
	}

	export interface AuditLog_user_updated_ {

		/** The project ID. */
		id?: string | null;

		/** The payload used to update the user. */
		changes_requested?: AuditLog_user_updated_Changes_requested;
	}

	export interface AuditLog_user_updated_Changes_requested {

		/** The role of the user. Is either `owner` or `member`. */
		role?: string | null;
	}

	export interface AuditLog_user_deleted_ {

		/** The user ID. */
		id?: string | null;
	}

	export interface AuditLog_certificate_created_ {

		/** The certificate ID. */
		id?: string | null;

		/** The name of the certificate. */
		name?: string | null;
	}

	export interface AuditLog_certificate_updated_ {

		/** The certificate ID. */
		id?: string | null;

		/** The name of the certificate. */
		name?: string | null;
	}

	export interface AuditLog_certificate_deleted_ {

		/** The certificate ID. */
		id?: string | null;

		/** The name of the certificate. */
		name?: string | null;

		/** The certificate content in PEM format. */
		certificate?: string | null;
	}

	export interface AuditLog_certificates_activated_ {
		AuditLog_certificates_activated_Certificates?: Array<AuditLog_certificates_activated_Certificates>;
	}

	export interface AuditLog_certificates_activated_Certificates {

		/** The certificate ID. */
		id?: string | null;

		/** The name of the certificate. */
		name?: string | null;
	}

	export interface AuditLog_certificates_deactivated_ {
		AuditLog_certificates_deactivated_Certificates?: Array<AuditLog_certificates_deactivated_Certificates>;
	}

	export interface AuditLog_certificates_deactivated_Certificates {

		/** The certificate ID. */
		id?: string | null;

		/** The name of the certificate. */
		name?: string | null;
	}


	/** The event type. */
	export enum AuditLogEventType { 'api_key.created' = 0, 'api_key.updated' = 1, 'api_key.deleted' = 2, 'checkpoint_permission.created' = 3, 'checkpoint_permission.deleted' = 4, 'invite.sent' = 5, 'invite.accepted' = 6, 'invite.deleted' = 7, 'login.succeeded' = 8, 'login.failed' = 9, 'logout.succeeded' = 10, 'logout.failed' = 11, 'organization.updated' = 12, 'project.created' = 13, 'project.updated' = 14, 'project.archived' = 15, 'service_account.created' = 16, 'service_account.updated' = 17, 'service_account.deleted' = 18, 'rate_limit.updated' = 19, 'rate_limit.deleted' = 20, 'user.added' = 21, 'user.updated' = 22, 'user.deleted' = 23 }


	/** The default strategy. This strategy currently uses a `max_chunk_size_tokens` of `800` and `chunk_overlap_tokens` of `400`. */
	export interface AutoChunkingStrategyRequestParam {

		/**
		 * Always `auto`.
		 * Required
		 */
		type: AutoChunkingStrategyRequestParamType;
	}

	export enum AutoChunkingStrategyRequestParamType { auto = 0 }

	export interface Batch {

		/** Required */
		id: string;

		/**
		 * The object type, which is always `batch`.
		 * Required
		 */
		object: BatchObject;

		/**
		 * The OpenAI API endpoint used by the batch.
		 * Required
		 */
		endpoint: string;
		errors?: BatchErrors;

		/**
		 * The ID of the input file for the batch.
		 * Required
		 */
		input_file_id: string;

		/**
		 * The time frame within which the batch should be processed.
		 * Required
		 */
		completion_window: string;

		/**
		 * The current status of the batch.
		 * Required
		 */
		status: BatchStatus;

		/** The ID of the file containing the outputs of successfully executed requests. */
		output_file_id?: string | null;

		/** The ID of the file containing the outputs of requests with errors. */
		error_file_id?: string | null;

		/**
		 * The Unix timestamp (in seconds) for when the batch was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The Unix timestamp (in seconds) for when the batch started processing.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		in_progress_at?: number | null;

		/**
		 * The Unix timestamp (in seconds) for when the batch will expire.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_at?: number | null;

		/**
		 * The Unix timestamp (in seconds) for when the batch started finalizing.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		finalizing_at?: number | null;

		/**
		 * The Unix timestamp (in seconds) for when the batch was completed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completed_at?: number | null;

		/**
		 * The Unix timestamp (in seconds) for when the batch failed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failed_at?: number | null;

		/**
		 * The Unix timestamp (in seconds) for when the batch expired.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expired_at?: number | null;

		/**
		 * The Unix timestamp (in seconds) for when the batch started cancelling.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cancelling_at?: number | null;

		/**
		 * The Unix timestamp (in seconds) for when the batch was cancelled.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cancelled_at?: number | null;

		/** The request counts for different statuses within the batch. */
		request_counts?: BatchRequest_counts;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;
	}

	export enum BatchObject { batch = 0 }

	export interface BatchErrors {

		/** The object type, which is always `list`. */
		object?: string | null;
		BatchErrorsData?: Array<BatchErrorsData>;
	}

	export interface BatchErrorsData {

		/** An error code identifying the error type. */
		code?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** The name of the parameter that caused the error, if applicable. */
		param?: string | null;

		/**
		 * The line number of the input file where the error occurred, if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		line?: number | null;
	}

	export enum BatchStatus { validating = 0, failed = 1, in_progress = 2, finalizing = 3, completed = 4, expired = 5, cancelling = 6, cancelled = 7 }

	export interface BatchRequest_counts {

		/**
		 * Total number of requests in the batch.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;

		/**
		 * Number of requests that have been completed successfully.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completed: number;

		/**
		 * Number of requests that have failed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failed: number;
	}


	/** The per-line object of the batch input file */
	export interface BatchRequestInput {

		/** A developer-provided per-request id that will be used to match outputs to inputs. Must be unique for each request in a batch. */
		custom_id?: string | null;

		/** The HTTP method to be used for the request. Currently only `POST` is supported. */
		method?: BatchRequestInputMethod | null;

		/** The OpenAI API relative URL to be used for the request. Currently `/v1/chat/completions`, `/v1/embeddings`, and `/v1/completions` are supported. */
		url?: string | null;
	}

	export enum BatchRequestInputMethod { POST = 0 }


	/** The per-line object of the batch output and error files */
	export interface BatchRequestOutput {
		id?: string | null;

		/** A developer-provided per-request id that will be used to match outputs to inputs. */
		custom_id?: string | null;
		response?: BatchRequestOutputResponse;

		/** For requests that failed with a non-HTTP error, this will contain more information on the cause of the failure. */
		error?: BatchRequestOutputError;
	}

	export interface BatchRequestOutputResponse {

		/**
		 * The HTTP status code of the response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code?: number | null;

		/** An unique identifier for the OpenAI API request. Please include this request ID when contacting support. */
		request_id?: string | null;

		/** The JSON body of the response */
		body?: string | null;
	}

	export interface BatchRequestOutputError {

		/** A machine-readable error code. */
		code?: string | null;

		/** A human-readable error message. */
		message?: string | null;
	}


	/** Represents an individual `certificate` uploaded to the organization. */
	export interface Certificate {

		/**
		 * The object type.
		 * - If creating, updating, or getting a specific certificate, the object type is `certificate`.
		 * - If listing, activating, or deactivating certificates for the organization, the object type is `organization.certificate`.
		 * - If listing, activating, or deactivating certificates for a project, the object type is `organization.project.certificate`.
		 * Required
		 */
		object: CertificateObject;

		/**
		 * The identifier, which can be referenced in API endpoints
		 * Required
		 */
		id: string;

		/**
		 * The name of the certificate.
		 * Required
		 */
		name: string;

		/**
		 * The Unix timestamp (in seconds) of when the certificate was uploaded.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/** Required */
		certificate_details: CertificateCertificate_details;

		/** Whether the certificate is currently active at the specified scope. Not returned when getting details for a specific certificate. */
		active?: boolean | null;
	}

	export enum CertificateObject { certificate = 0, 'organization.certificate' = 1, 'organization.project.certificate' = 2 }

	export interface CertificateCertificate_details {

		/**
		 * The Unix timestamp (in seconds) of when the certificate becomes valid.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		valid_at?: number | null;

		/**
		 * The Unix timestamp (in seconds) of when the certificate expires.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_at?: number | null;

		/** The content of the certificate in PEM format. */
		content?: string | null;
	}

	export interface ChatCompletionDeleted {

		/**
		 * The type of object being deleted.
		 * Required
		 */
		object: ChatCompletionDeletedObject;

		/**
		 * The ID of the chat completion that was deleted.
		 * Required
		 */
		id: string;

		/**
		 * Whether the chat completion was deleted.
		 * Required
		 */
		deleted: boolean;
	}

	export enum ChatCompletionDeletedObject { 'chat.completion.deleted' = 0 }


	/**
	 * Specifying a particular function via `{"name": "my_function"}` forces the model to call that function.
	 */
	export interface ChatCompletionFunctionCallOption {

		/**
		 * The name of the function to call.
		 * Required
		 */
		name: string;
	}

	export interface ChatCompletionFunctions {

		/** A description of what the function does, used by the model to choose when and how to call the function. */
		description?: string | null;

		/**
		 * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64.
		 * Required
		 */
		name: string;

		/**
		 * The parameters the functions accepts, described as a JSON Schema object. See the [guide](/docs/guides/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format.
		 * Omitting `parameters` defines a function with an empty parameter list.
		 */
		parameters?: FunctionParameters;
	}


	/**
	 * An object representing a list of Chat Completions.
	 */
	export interface ChatCompletionList {

		/**
		 * The type of this object. It is always set to "list".
		 * Required
		 */
		object: ChatCompletionListObject;

		/**
		 * An array of chat completion objects.
		 * Required
		 */
		data: Array<CreateChatCompletionResponse>;

		/**
		 * The identifier of the first chat completion in the data array.
		 * Required
		 */
		first_id: string;

		/**
		 * The identifier of the last chat completion in the data array.
		 * Required
		 */
		last_id: string;

		/**
		 * Indicates whether there are more Chat Completions available.
		 * Required
		 */
		has_more: boolean;
	}

	export enum ChatCompletionListObject { list = 0 }


	/** Represents a chat completion response returned by model, based on the provided input. */
	export interface CreateChatCompletionResponse {

		/**
		 * A unique identifier for the chat completion.
		 * Required
		 */
		id: string;

		/**
		 * A list of chat completion choices. Can be more than one if `n` is greater than 1.
		 * Required
		 */
		CreateChatCompletionResponseChoices: Array<CreateChatCompletionResponseChoices>;

		/**
		 * The Unix timestamp (in seconds) of when the chat completion was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created: number;

		/**
		 * The model used for the chat completion.
		 * Required
		 */
		model: string;

		/**
		 * Specifies the latency tier to use for processing the request. This parameter is relevant for customers subscribed to the scale tier service:
		 * - If set to 'auto', and the Project is Scale tier enabled, the system
		 * will utilize scale tier credits until they are exhausted.
		 * - If set to 'auto', and the Project is not Scale tier enabled, the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.
		 * - If set to 'default', the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.
		 * - If set to 'flex', the request will be processed with the Flex Processing service tier. [Learn more](/docs/guides/flex-processing).
		 * - When not set, the default behavior is 'auto'.
		 * When this parameter is set, the response body will include the `service_tier` utilized.
		 */
		service_tier?: CreateChatCompletionResponseService_tier | null;

		/**
		 * This fingerprint represents the backend configuration that the model runs with.
		 * Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
		 */
		system_fingerprint?: string | null;

		/**
		 * The object type, which is always `chat.completion`.
		 * Required
		 */
		object: CreateChatCompletionResponseObject;

		/** Usage statistics for the completion request. */
		usage?: CompletionUsage;
	}

	export interface CreateChatCompletionResponseChoices {

		/**
		 * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
		 * `length` if the maximum number of tokens specified in the request was reached,
		 * `content_filter` if content was omitted due to a flag from our content filters,
		 * `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function.
		 * Required
		 */
		finish_reason: CreateChatCompletionResponseChoicesFinish_reason;

		/**
		 * The index of the choice in the list of choices.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * A chat completion message generated by the model.
		 * Required
		 */
		message: ChatCompletionResponseMessage;

		/**
		 * Log probability information for the choice.
		 * Required
		 */
		logprobs: CreateChatCompletionResponseChoicesLogprobs;
	}

	export enum CreateChatCompletionResponseChoicesFinish_reason { stop = 0, length = 1, tool_calls = 2, content_filter = 3, function_call = 4 }


	/** A chat completion message generated by the model. */
	export interface ChatCompletionResponseMessage {

		/**
		 * The contents of the message.
		 * Required
		 */
		content: string;

		/**
		 * The refusal message generated by the model.
		 * Required
		 */
		refusal: string;

		/** The tool calls generated by the model, such as function calls. */
		tool_calls?: Array<ChatCompletionMessageToolCall>;

		/**
		 * Annotations for the message, when applicable, as when using the
		 * [web search tool](/docs/guides/tools-web-search?api-mode=chat).
		 */
		ChatCompletionResponseMessageAnnotations?: Array<ChatCompletionResponseMessageAnnotations>;

		/**
		 * The role of the author of this message.
		 * Required
		 */
		role: AssistantObjectObject;

		/** Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model. */
		function_call?: ChatCompletionResponseMessageFunction_call;

		/**
		 * If the audio output modality is requested, this object contains data
		 * about the audio response from the model. [Learn more](/docs/guides/audio).
		 */
		audio?: ChatCompletionResponseMessageAudio;
	}

	export interface ChatCompletionMessageToolCall {

		/**
		 * The ID of the tool call.
		 * Required
		 */
		id: string;

		/**
		 * The type of the tool. Currently, only `function` is supported.
		 * Required
		 */
		type: AssistantToolsFunctionType;

		/**
		 * The function that the model called.
		 * Required
		 */
		function: ChatCompletionMessageToolCallFunction;
	}

	export interface ChatCompletionMessageToolCallFunction {

		/**
		 * The name of the function to call.
		 * Required
		 */
		name: string;

		/**
		 * The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function.
		 * Required
		 */
		arguments: string;
	}

	export interface ChatCompletionResponseMessageAnnotations {

		/**
		 * The type of the URL citation. Always `url_citation`.
		 * Required
		 */
		type: ChatCompletionResponseMessageAnnotationsType;

		/**
		 * A URL citation when using web search.
		 * Required
		 */
		url_citation: ChatCompletionResponseMessageAnnotationsUrl_citation;
	}

	export enum ChatCompletionResponseMessageAnnotationsType { url_citation = 0 }

	export interface ChatCompletionResponseMessageAnnotationsUrl_citation {

		/**
		 * The index of the last character of the URL citation in the message.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end_index: number;

		/**
		 * The index of the first character of the URL citation in the message.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_index: number;

		/**
		 * The URL of the web resource.
		 * Required
		 */
		url: string;

		/**
		 * The title of the web resource.
		 * Required
		 */
		title: string;
	}

	export interface ChatCompletionResponseMessageFunction_call {

		/**
		 * The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function.
		 * Required
		 */
		arguments: string;

		/**
		 * The name of the function to call.
		 * Required
		 */
		name: string;
	}

	export interface ChatCompletionResponseMessageAudio {

		/**
		 * Unique identifier for this audio response.
		 * Required
		 */
		id: string;

		/**
		 * The Unix timestamp (in seconds) for when this audio response will
		 * no longer be accessible on the server for use in multi-turn
		 * conversations.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_at: number;

		/**
		 * Base64 encoded audio bytes generated by the model, in the format
		 * specified in the request.
		 * Required
		 */
		data: string;

		/**
		 * Transcript of the audio generated by the model.
		 * Required
		 */
		transcript: string;
	}

	export interface CreateChatCompletionResponseChoicesLogprobs {

		/**
		 * A list of message content tokens with log probability information.
		 * Required
		 */
		content: Array<ChatCompletionTokenLogprob>;

		/**
		 * A list of message refusal tokens with log probability information.
		 * Required
		 */
		refusal: Array<ChatCompletionTokenLogprob>;
	}

	export interface ChatCompletionTokenLogprob {

		/**
		 * The token.
		 * Required
		 */
		token: string;

		/**
		 * The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value `-9999.0` is used to signify that the token is very unlikely.
		 * Required
		 * Type: double
		 */
		logprob: number;

		/**
		 * A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be `null` if there is no bytes representation for the token.
		 * Required
		 */
		bytes: Array<number>;

		/**
		 * List of the most likely tokens and their log probability, at this token position. In rare cases, there may be fewer than the number of requested `top_logprobs` returned.
		 * Required
		 */
		ChatCompletionTokenLogprobTop_logprobs: Array<ChatCompletionTokenLogprobTop_logprobs>;
	}

	export interface ChatCompletionTokenLogprobTop_logprobs {

		/**
		 * The token.
		 * Required
		 */
		token: string;

		/**
		 * The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value `-9999.0` is used to signify that the token is very unlikely.
		 * Required
		 * Type: double
		 */
		logprob: number;

		/**
		 * A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be `null` if there is no bytes representation for the token.
		 * Required
		 */
		bytes: Array<number>;
	}

	export enum CreateChatCompletionResponseService_tier { auto = 0, default = 1, flex = 2 }

	export enum CreateChatCompletionResponseObject { 'chat.completion' = 0 }


	/** Usage statistics for the completion request. */
	export interface CompletionUsage {

		/**
		 * Number of tokens in the generated completion.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completion_tokens: number;

		/**
		 * Number of tokens in the prompt.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		prompt_tokens: number;

		/**
		 * Total number of tokens used in the request (prompt + completion).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_tokens: number;

		/** Breakdown of tokens used in a completion. */
		completion_tokens_details?: CompletionUsageCompletion_tokens_details;

		/** Breakdown of tokens used in the prompt. */
		prompt_tokens_details?: CompletionUsagePrompt_tokens_details;
	}

	export interface CompletionUsageCompletion_tokens_details {

		/**
		 * When using Predicted Outputs, the number of tokens in the
		 * prediction that appeared in the completion.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accepted_prediction_tokens?: number | null;

		/**
		 * Audio input tokens generated by the model.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_tokens?: number | null;

		/**
		 * Tokens generated by the model for reasoning.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reasoning_tokens?: number | null;

		/**
		 * When using Predicted Outputs, the number of tokens in the
		 * prediction that did not appear in the completion. However, like
		 * reasoning tokens, these tokens are still counted in the total
		 * completion tokens for purposes of billing, output, and context window
		 * limits.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rejected_prediction_tokens?: number | null;
	}

	export interface CompletionUsagePrompt_tokens_details {

		/**
		 * Audio input tokens present in the prompt.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_tokens?: number | null;

		/**
		 * Cached tokens present in the prompt.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cached_tokens?: number | null;
	}


	/**
	 * An object representing a list of chat completion messages.
	 */
	export interface ChatCompletionMessageList {

		/**
		 * The type of this object. It is always set to "list".
		 * Required
		 */
		object: ChatCompletionListObject;

		/**
		 * An array of chat completion message objects.
		 * Required
		 */
		data: Array<string>;

		/**
		 * The identifier of the first chat message in the data array.
		 * Required
		 */
		first_id: string;

		/**
		 * The identifier of the last chat message in the data array.
		 * Required
		 */
		last_id: string;

		/**
		 * Indicates whether there are more chat messages available.
		 * Required
		 */
		has_more: boolean;
	}

	export interface ChatCompletionMessageToolCallChunk {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/** The ID of the tool call. */
		id?: string | null;

		/** The type of the tool. Currently, only `function` is supported. */
		type?: AssistantToolsFunctionType | null;
		function?: ChatCompletionMessageToolCallChunkFunction;
	}

	export interface ChatCompletionMessageToolCallChunkFunction {

		/** The name of the function to call. */
		name?: string | null;

		/** The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
		arguments?: string | null;
	}


	/** Specifies a tool the model should use. Use to force the model to call a specific function. */
	export interface ChatCompletionNamedToolChoice {

		/**
		 * The type of the tool. Currently, only `function` is supported.
		 * Required
		 */
		type: AssistantToolsFunctionType;

		/** Required */
		function: ChatCompletionNamedToolChoiceFunction;
	}

	export interface ChatCompletionNamedToolChoiceFunction {

		/**
		 * The name of the function to call.
		 * Required
		 */
		name: string;
	}


	/**
	 * Messages sent by the model in response to user messages.
	 */
	export interface ChatCompletionRequestAssistantMessage {

		/**
		 * The contents of the assistant message. Required unless `tool_calls` or `function_call` is specified.
		 */
		content?: string;

		/** The refusal message by the assistant. */
		refusal?: string | null;

		/**
		 * The role of the messages author, in this case `assistant`.
		 * Required
		 */
		role: AssistantObjectObject;

		/** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
		name?: string | null;

		/**
		 * Data about a previous audio response from the model.
		 * [Learn more](/docs/guides/audio).
		 */
		audio?: ChatCompletionRequestAssistantMessageAudio;

		/** The tool calls generated by the model, such as function calls. */
		tool_calls?: Array<ChatCompletionMessageToolCall>;

		/** Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model. */
		function_call?: ChatCompletionRequestAssistantMessageFunction_call;
	}

	export interface ChatCompletionRequestAssistantMessageAudio {

		/**
		 * Unique identifier for a previous audio response from the model.
		 * Required
		 */
		id: string;
	}

	export interface ChatCompletionRequestAssistantMessageFunction_call {

		/**
		 * The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function.
		 * Required
		 */
		arguments: string;

		/**
		 * The name of the function to call.
		 * Required
		 */
		name: string;
	}

	export interface ChatCompletionRequestAssistantMessageContentPart {
	}


	/**
	 * Developer-provided instructions that the model should follow, regardless of
	 * messages sent by the user. With o1 models and newer, `developer` messages
	 * replace the previous `system` messages.
	 */
	export interface ChatCompletionRequestDeveloperMessage {

		/**
		 * The contents of the developer message.
		 * Required
		 */
		content: string;

		/**
		 * The role of the messages author, in this case `developer`.
		 * Required
		 */
		role: ChatCompletionRequestDeveloperMessageRole;

		/** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
		name?: string | null;
	}

	export enum ChatCompletionRequestDeveloperMessageRole { developer = 0 }

	export interface ChatCompletionRequestFunctionMessage {

		/**
		 * The role of the messages author, in this case `function`.
		 * Required
		 */
		role: AssistantToolsFunctionType;

		/**
		 * The contents of the function message.
		 * Required
		 */
		content: string;

		/**
		 * The name of the function to call.
		 * Required
		 */
		name: string;
	}

	export interface ChatCompletionRequestMessage {
	}


	/**
	 * Learn about [audio inputs](/docs/guides/audio).
	 */
	export interface ChatCompletionRequestMessageContentPartAudio {

		/**
		 * The type of the content part. Always `input_audio`.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartAudioType;

		/** Required */
		input_audio: ChatCompletionRequestMessageContentPartAudioInput_audio;
	}

	export enum ChatCompletionRequestMessageContentPartAudioType { input_audio = 0 }

	export interface ChatCompletionRequestMessageContentPartAudioInput_audio {

		/**
		 * Base64 encoded audio data.
		 * Required
		 */
		data: string;

		/**
		 * The format of the encoded audio data. Currently supports "wav" and "mp3".
		 * Required
		 */
		format: ChatCompletionRequestMessageContentPartAudioInput_audioFormat;
	}

	export enum ChatCompletionRequestMessageContentPartAudioInput_audioFormat { wav = 0, mp3 = 1 }


	/**
	 * Learn about [file inputs](/docs/guides/text) for text generation.
	 */
	export interface ChatCompletionRequestMessageContentPartFile {

		/**
		 * The type of the content part. Always `file`.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartFileType;

		/** Required */
		file: ChatCompletionRequestMessageContentPartFileFile;
	}

	export enum ChatCompletionRequestMessageContentPartFileType { file = 0 }

	export interface ChatCompletionRequestMessageContentPartFileFile {

		/**
		 * The name of the file, used when passing the file to the model as a
		 * string.
		 */
		filename?: string | null;

		/**
		 * The base64 encoded file data, used when passing the file to the model
		 * as a string.
		 */
		file_data?: string | null;

		/**
		 * The ID of an uploaded file to use as input.
		 */
		file_id?: string | null;
	}


	/**
	 * Learn about [image inputs](/docs/guides/vision).
	 */
	export interface ChatCompletionRequestMessageContentPartImage {

		/**
		 * The type of the content part.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartImageType;

		/** Required */
		image_url: ChatCompletionRequestMessageContentPartImageImage_url;
	}

	export enum ChatCompletionRequestMessageContentPartImageType { image_url = 0 }

	export interface ChatCompletionRequestMessageContentPartImageImage_url {

		/**
		 * Either a URL of the image or the base64 encoded image data.
		 * Required
		 */
		url: string;

		/** Specifies the detail level of the image. Learn more in the [Vision guide](/docs/guides/vision#low-or-high-fidelity-image-understanding). */
		detail?: ChatCompletionRequestMessageContentPartImageImage_urlDetail | null;
	}

	export enum ChatCompletionRequestMessageContentPartImageImage_urlDetail { auto = 0, low = 1, high = 2 }

	export interface ChatCompletionRequestMessageContentPartRefusal {

		/**
		 * The type of the content part.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartRefusalType;

		/**
		 * The refusal message generated by the model.
		 * Required
		 */
		refusal: string;
	}

	export enum ChatCompletionRequestMessageContentPartRefusalType { refusal = 0 }


	/**
	 * Learn about [text inputs](/docs/guides/text-generation).
	 */
	export interface ChatCompletionRequestMessageContentPartText {

		/**
		 * The type of the content part.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartTextType;

		/**
		 * The text content.
		 * Required
		 */
		text: string;
	}

	export enum ChatCompletionRequestMessageContentPartTextType { text = 0 }


	/**
	 * Developer-provided instructions that the model should follow, regardless of
	 * messages sent by the user. With o1 models and newer, use `developer` messages
	 * for this purpose instead.
	 */
	export interface ChatCompletionRequestSystemMessage {

		/**
		 * The contents of the system message.
		 * Required
		 */
		content: string;

		/**
		 * The role of the messages author, in this case `system`.
		 * Required
		 */
		role: ChatCompletionRequestSystemMessageRole;

		/** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
		name?: string | null;
	}

	export enum ChatCompletionRequestSystemMessageRole { system = 0 }

	export interface ChatCompletionRequestSystemMessageContentPart {
	}

	export interface ChatCompletionRequestToolMessage {

		/**
		 * The role of the messages author, in this case `tool`.
		 * Required
		 */
		role: ChatCompletionRequestToolMessageRole;

		/**
		 * The contents of the tool message.
		 * Required
		 */
		content: string;

		/**
		 * Tool call that this message is responding to.
		 * Required
		 */
		tool_call_id: string;
	}

	export enum ChatCompletionRequestToolMessageRole { tool = 0 }

	export interface ChatCompletionRequestToolMessageContentPart {
	}


	/**
	 * Messages sent by an end user, containing prompts or additional context
	 * information.
	 */
	export interface ChatCompletionRequestUserMessage {

		/**
		 * The contents of the user message.
		 * Required
		 */
		content: string;

		/**
		 * The role of the messages author, in this case `user`.
		 * Required
		 */
		role: ChatCompletionRequestUserMessageRole;

		/** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
		name?: string | null;
	}

	export enum ChatCompletionRequestUserMessageRole { user = 0 }

	export interface ChatCompletionRequestUserMessageContentPart {
	}


	/** The role of the author of a message */
	export enum ChatCompletionRole { developer = 0, system = 1, user = 2, assistant = 3, tool = 4, function = 5 }


	/**
	 * Options for streaming response. Only set this when you set `stream: true`.
	 */
	export interface ChatCompletionStreamOptions {

		/**
		 * If set, an additional chunk will be streamed before the `data: [DONE]`
		 * message. The `usage` field on this chunk shows the token usage statistics
		 * for the entire request, and the `choices` field will always be an empty
		 * array.
		 * All other chunks will also include a `usage` field, but with a null
		 * value. **NOTE:** If the stream is interrupted, you may not receive the
		 * final usage chunk which contains the total token usage for the request.
		 */
		include_usage?: boolean | null;
	}


	/** A chat completion delta generated by streamed model responses. */
	export interface ChatCompletionStreamResponseDelta {

		/** The contents of the chunk message. */
		content?: string | null;

		/** Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model. */
		function_call?: ChatCompletionStreamResponseDeltaFunction_call;
		tool_calls?: Array<ChatCompletionMessageToolCallChunk>;

		/** The role of the author of this message. */
		role?: ChatCompletionStreamResponseDeltaRole | null;

		/** The refusal message generated by the model. */
		refusal?: string | null;
	}

	export interface ChatCompletionStreamResponseDeltaFunction_call {

		/** The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
		arguments?: string | null;

		/** The name of the function to call. */
		name?: string | null;
	}

	export enum ChatCompletionStreamResponseDeltaRole { developer = 0, system = 1, user = 2, assistant = 3, tool = 4 }

	export interface ChatCompletionTool {

		/**
		 * The type of the tool. Currently, only `function` is supported.
		 * Required
		 */
		type: AssistantToolsFunctionType;

		/** Required */
		function: FunctionObject;
	}


	/**
	 * Controls which (if any) tool is called by the model.
	 * `none` means the model will not call any tool and instead generates a message.
	 * `auto` means the model can pick between generating a message or calling one or more tools.
	 * `required` means the model must call one or more tools.
	 * Specifying a particular tool via `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.
	 * `none` is the default when no tools are present. `auto` is the default if tools are present.
	 */
	export interface ChatCompletionToolChoiceOption {
	}


	/** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
	export interface ChunkingStrategyRequestParam {
	}


	/**
	 * A click action.
	 */
	export interface Click {

		/**
		 * Specifies the event type. For a click action, this property is
		 * always set to `click`.
		 * Required
		 */
		type: ClickType;

		/**
		 * Indicates which mouse button was pressed during the click. One of `left`, `right`, `wheel`, `back`, or `forward`.
		 * Required
		 */
		button: ClickButton;

		/**
		 * The x-coordinate where the click occurred.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x: number;

		/**
		 * The y-coordinate where the click occurred.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y: number;
	}

	export enum ClickType { click = 0 }

	export enum ClickButton { left = 0, right = 1, wheel = 2, back = 3, forward = 4 }


	/**
	 * The output of a code interpreter tool call that is a file.
	 */
	export interface CodeInterpreterFileOutput {

		/**
		 * The type of the code interpreter file output. Always `files`.
		 * Required
		 */
		type: CodeInterpreterFileOutputType;

		/** Required */
		CodeInterpreterFileOutputFiles: Array<CodeInterpreterFileOutputFiles>;
	}

	export enum CodeInterpreterFileOutputType { files = 0 }

	export interface CodeInterpreterFileOutputFiles {

		/**
		 * The MIME type of the file.
		 * Required
		 */
		mime_type: string;

		/**
		 * The ID of the file.
		 * Required
		 */
		file_id: string;
	}


	/**
	 * The output of a code interpreter tool call that is text.
	 */
	export interface CodeInterpreterTextOutput {

		/**
		 * The type of the code interpreter text output. Always `logs`.
		 * Required
		 */
		type: CodeInterpreterTextOutputType;

		/**
		 * The logs of the code interpreter tool call.
		 * Required
		 */
		logs: string;
	}

	export enum CodeInterpreterTextOutputType { logs = 0 }


	/**
	 * A tool call to run code.
	 */
	export interface CodeInterpreterToolCall {

		/**
		 * The unique ID of the code interpreter tool call.
		 * Required
		 */
		id: string;

		/**
		 * The type of the code interpreter tool call. Always `code_interpreter_call`.
		 * Required
		 */
		type: CodeInterpreterToolCallType;

		/**
		 * The code to run.
		 * Required
		 */
		code: string;

		/**
		 * The status of the code interpreter tool call.
		 * Required
		 */
		status: CodeInterpreterToolCallStatus;

		/**
		 * The results of the code interpreter tool call.
		 * Required
		 * Array member types: CodeInterpreterTextOutput, CodeInterpreterFileOutput
		 */
		results: Array<any>;
	}

	export enum CodeInterpreterToolCallType { code_interpreter_call = 0 }

	export enum CodeInterpreterToolCallStatus { in_progress = 0, interpreting = 1, completed = 2 }

	export interface CodeInterpreterToolOutput {
	}


	/**
	 * A filter used to compare a specified attribute key to a given value using a defined comparison operation.
	 */
	export interface ComparisonFilter {

		/**
		 * Specifies the comparison operator: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`.
		 * - `eq`: equals
		 * - `ne`: not equal
		 * - `gt`: greater than
		 * - `gte`: greater than or equal
		 * - `lt`: less than
		 * - `lte`: less than or equal
		 * Required
		 */
		type: ComparisonFilterType;

		/**
		 * The key to compare against the value.
		 * Required
		 */
		key: string;

		/**
		 * The value to compare against the attribute key; supports string, number, or boolean types.
		 * Required
		 */
		value: string;
	}

	export enum ComparisonFilterType { eq = 0, ne = 1, gt = 2, gte = 3, lt = 4, lte = 5 }

	export interface CompleteUploadRequest {

		/**
		 * The ordered list of Part IDs.
		 * Required
		 */
		part_ids: Array<string>;

		/**
		 * The optional md5 checksum for the file contents to verify if the bytes uploaded matches what you expect.
		 */
		md5?: string | null;
	}


	/** Combine multiple filters using `and` or `or`. */
	export interface CompoundFilter {

		/**
		 * Type of operation: `and` or `or`.
		 * Required
		 */
		type: CompoundFilterType;

		/**
		 * Array of filters to combine. Items can be `ComparisonFilter` or `CompoundFilter`.
		 * Required
		 * Array member types: ComparisonFilter
		 */
		filters: Array<any>;
	}

	export enum CompoundFilterType { and = 0, or = 1 }

	export interface ComputerAction {
	}


	/**
	 * A computer screenshot image used with the computer use tool.
	 */
	export interface ComputerScreenshotImage {

		/**
		 * Specifies the event type. For a computer screenshot, this property is
		 * always set to `computer_screenshot`.
		 * Required
		 */
		type: ComputerScreenshotImageType;

		/** The URL of the screenshot image. */
		image_url?: string | null;

		/** The identifier of an uploaded file that contains the screenshot. */
		file_id?: string | null;
	}

	export enum ComputerScreenshotImageType { computer_screenshot = 0 }


	/**
	 * A tool call to a computer use tool. See the 
	 * [computer use guide](/docs/guides/tools-computer-use) for more information.
	 */
	export interface ComputerToolCall {

		/**
		 * The type of the computer call. Always `computer_call`.
		 * Required
		 */
		type: ComputerToolCallType;

		/**
		 * The unique ID of the computer call.
		 * Required
		 */
		id: string;

		/**
		 * An identifier used when responding to the tool call with output.
		 * Required
		 */
		call_id: string;

		/** Required */
		action: ComputerAction;

		/**
		 * The pending safety checks for the computer call.
		 * Required
		 */
		pending_safety_checks: Array<ComputerToolCallSafetyCheck>;

		/**
		 * The status of the item. One of `in_progress`, `completed`, or
		 * `incomplete`. Populated when items are returned via API.
		 * Required
		 */
		status: ComputerToolCallStatus;
	}

	export enum ComputerToolCallType { computer_call = 0 }


	/**
	 * A pending safety check for the computer call.
	 */
	export interface ComputerToolCallSafetyCheck {

		/**
		 * The ID of the pending safety check.
		 * Required
		 */
		id: string;

		/**
		 * The type of the pending safety check.
		 * Required
		 */
		code: string;

		/**
		 * Details about the pending safety check.
		 * Required
		 */
		message: string;
	}

	export enum ComputerToolCallStatus { in_progress = 0, completed = 1, incomplete = 2 }


	/**
	 * The output of a computer tool call.
	 */
	export interface ComputerToolCallOutput {

		/**
		 * The type of the computer tool call output. Always `computer_call_output`.
		 * Required
		 */
		type: ComputerToolCallOutputType;

		/**
		 * The ID of the computer tool call output.
		 */
		id?: string | null;

		/**
		 * The ID of the computer tool call that produced the output.
		 * Required
		 */
		call_id: string;

		/**
		 * The safety checks reported by the API that have been acknowledged by the
		 * developer.
		 */
		acknowledged_safety_checks?: Array<ComputerToolCallSafetyCheck>;

		/**
		 * A computer screenshot image used with the computer use tool.
		 * Required
		 */
		output: ComputerScreenshotImage;

		/**
		 * The status of the message input. One of `in_progress`, `completed`, or
		 * `incomplete`. Populated when input items are returned via API.
		 */
		status?: ComputerToolCallStatus | null;
	}

	export enum ComputerToolCallOutputType { computer_call_output = 0 }

	export interface ComputerToolCallOutputResource extends ComputerToolCallOutput {
	}


	/**
	 * Multi-modal input and output contents.
	 */
	export interface Content {
	}


	/**
	 * An x/y coordinate pair, e.g. `{ x: 100, y: 200 }`.
	 */
	export interface Coordinate {

		/**
		 * The x-coordinate.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x: number;

		/**
		 * The y-coordinate.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y: number;
	}


	/** The aggregated costs details of the specific time bucket. */
	export interface CostsResult {

		/** Required */
		object: CostsResultObject;

		/** The monetary value in its associated currency. */
		amount?: CostsResultAmount;

		/** When `group_by=line_item`, this field provides the line item of the grouped costs result. */
		line_item?: string | null;

		/** When `group_by=project_id`, this field provides the project ID of the grouped costs result. */
		project_id?: string | null;
	}

	export enum CostsResultObject { 'organization.costs.result' = 0 }

	export interface CostsResultAmount {

		/**
		 * The numeric value of the cost.
		 * Type: double
		 */
		value?: number | null;

		/** Lowercase ISO-4217 currency e.g. "usd" */
		currency?: string | null;
	}

	export interface CreateAssistantRequest {

		/**
		 * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
		 * Required
		 */
		model: string;

		/**
		 * The name of the assistant. The maximum length is 256 characters.
		 * Max length: 256
		 */
		name?: string | null;

		/**
		 * The description of the assistant. The maximum length is 512 characters.
		 * Max length: 512
		 */
		description?: string | null;

		/**
		 * The system instructions that the assistant uses. The maximum length is 256,000 characters.
		 * Max length: 256000
		 */
		instructions?: string | null;

		/**
		 * **o-series models only**
		 * Constrains effort on reasoning for
		 * [reasoning models](https://platform.openai.com/docs/guides/reasoning).
		 * Currently supported values are `low`, `medium`, and `high`. Reducing
		 * reasoning effort can result in faster responses and fewer tokens used
		 * on reasoning in a response.
		 */
		reasoning_effort?: CreateAssistantRequestReasoning_effort | null;

		/**
		 * A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.
		 * Maximum items: 128
		 * Array member types: AssistantToolsCode, AssistantToolsFileSearch, AssistantToolsFunction
		 */
		tools?: Array<any>;

		/**
		 * A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
		 */
		tool_resources?: CreateAssistantRequestTool_resources;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;

		/**
		 * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
		 * Minimum: 0
		 * Maximum: 2
		 */
		temperature?: number | null;

		/**
		 * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
		 * We generally recommend altering this or temperature but not both.
		 * Minimum: 0
		 * Maximum: 1
		 */
		top_p?: number | null;

		/**
		 * Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since `gpt-3.5-turbo-1106`.
		 * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).
		 * Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.
		 * **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.
		 */
		response_format?: AssistantsApiResponseFormatOption;
	}

	export enum CreateAssistantRequestReasoning_effort { low = 0, medium = 1, high = 2 }

	export interface CreateAssistantRequestTool_resources {
		code_interpreter?: CreateAssistantRequestTool_resourcesCode_interpreter;
		file_search?: CreateAssistantRequestTool_resourcesFile_search;
	}

	export interface CreateAssistantRequestTool_resourcesCode_interpreter {

		/**
		 * A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
		 * Maximum items: 20
		 */
		file_ids?: Array<string>;
	}

	export interface CreateAssistantRequestTool_resourcesFile_search {

		/**
		 * The [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
		 * Maximum items: 1
		 */
		vector_store_ids?: Array<string>;

		/**
		 * A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this assistant. There can be a maximum of 1 vector store attached to the assistant.
		 * Maximum items: 1
		 */
		CreateAssistantRequestTool_resourcesFile_searchVector_stores?: Array<CreateAssistantRequestTool_resourcesFile_searchVector_stores>;
	}

	export interface CreateAssistantRequestTool_resourcesFile_searchVector_stores {

		/**
		 * A list of [file](/docs/api-reference/files) IDs to add to the vector store. There can be a maximum of 10000 files in a vector store.
		 * Maximum items: 10000
		 */
		file_ids?: Array<string>;

		/** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
		chunking_strategy?: string | null;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;
	}

	export interface CreateChatCompletionRequest extends CreateModelResponseProperties {

		/**
		 * A list of messages comprising the conversation so far. Depending on the
		 * [model](/docs/models) you use, different message types (modalities) are
		 * supported, like [text](/docs/guides/text-generation),
		 * [images](/docs/guides/vision), and [audio](/docs/guides/audio).
		 * Required
		 * Minimum items: 1
		 * Array member types: ChatCompletionRequestDeveloperMessage, ChatCompletionRequestSystemMessage, ChatCompletionRequestUserMessage, ChatCompletionRequestAssistantMessage, ChatCompletionRequestToolMessage, ChatCompletionRequestFunctionMessage
		 */
		messages: Array<any>;

		/** Required */
		model: ModelIdsShared;

		/**
		 * Output types that you would like the model to generate.
		 * Most models are capable of generating text, which is the default:
		 * `["text"]`
		 * The `gpt-4o-audio-preview` model can also be used to
		 * [generate audio](/docs/guides/audio). To request that this model generate
		 * both text and audio responses, you can use:
		 * `["text", "audio"]`
		 */
		modalities?: Array<string>;

		/**
		 * **o-series models only**
		 * Constrains effort on reasoning for
		 * [reasoning models](https://platform.openai.com/docs/guides/reasoning).
		 * Currently supported values are `low`, `medium`, and `high`. Reducing
		 * reasoning effort can result in faster responses and fewer tokens used
		 * on reasoning in a response.
		 */
		reasoning_effort?: CreateAssistantRequestReasoning_effort | null;

		/**
		 * An upper bound for the number of tokens that can be generated for a completion, including visible output tokens and [reasoning tokens](/docs/guides/reasoning).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_completion_tokens?: number | null;

		/**
		 * Number between -2.0 and 2.0. Positive values penalize new tokens based on
		 * their existing frequency in the text so far, decreasing the model's
		 * likelihood to repeat the same line verbatim.
		 * Minimum: -2
		 * Maximum: 2
		 */
		frequency_penalty?: number | null;

		/**
		 * Number between -2.0 and 2.0. Positive values penalize new tokens based on
		 * whether they appear in the text so far, increasing the model's likelihood
		 * to talk about new topics.
		 * Minimum: -2
		 * Maximum: 2
		 */
		presence_penalty?: number | null;

		/**
		 * This tool searches the web for relevant results to use in a response.
		 * Learn more about the [web search tool](/docs/guides/tools-web-search?api-mode=chat).
		 */
		web_search_options?: CreateChatCompletionRequestWeb_search_options;

		/**
		 * An integer between 0 and 20 specifying the number of most likely tokens to
		 * return at each token position, each with an associated log probability.
		 * `logprobs` must be set to `true` if this parameter is used.
		 * Minimum: 0
		 * Maximum: 20
		 */
		top_logprobs?: number | null;

		/**
		 * An object specifying the format that the model must output.
		 * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables
		 * Structured Outputs which ensures the model will match your supplied JSON
		 * schema. Learn more in the [Structured Outputs
		 * guide](/docs/guides/structured-outputs).
		 * Setting to `{ "type": "json_object" }` enables the older JSON mode, which
		 * ensures the message the model generates is valid JSON. Using `json_schema`
		 * is preferred for models that support it.
		 */
		response_format?: ResponseFormatText;

		/**
		 * Parameters for audio output. Required when audio output is requested with
		 * `modalities: ["audio"]`. [Learn more](/docs/guides/audio).
		 */
		audio?: CreateChatCompletionRequestAudio;

		/**
		 * Whether or not to store the output of this chat completion request for
		 * use in our [model distillation](/docs/guides/distillation) or
		 * [evals](/docs/guides/evals) products.
		 */
		store?: boolean | null;

		/**
		 * If set to true, the model response data will be streamed to the client
		 * as it is generated using [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format).
		 * See the [Streaming section below](/docs/api-reference/chat/streaming)
		 * for more information, along with the [streaming responses](/docs/guides/streaming-responses)
		 * guide for more information on how to handle the streaming events.
		 */
		stream?: boolean | null;

		/**
		 * Not supported with latest reasoning models `o3` and `o4-mini`.
		 * Up to 4 sequences where the API will stop generating further tokens. The
		 * returned text will not contain the stop sequence.
		 */
		stop?: StopConfiguration;

		/**
		 * Modify the likelihood of specified tokens appearing in the completion.
		 * Accepts a JSON object that maps tokens (specified by their token ID in the
		 * tokenizer) to an associated bias value from -100 to 100. Mathematically,
		 * the bias is added to the logits generated by the model prior to sampling.
		 * The exact effect will vary per model, but values between -1 and 1 should
		 * decrease or increase likelihood of selection; values like -100 or 100
		 * should result in a ban or exclusive selection of the relevant token.
		 */
		logit_bias?: {[id: string]: number };

		/**
		 * Whether to return log probabilities of the output tokens or not. If true,
		 * returns the log probabilities of each output token returned in the
		 * `content` of `message`.
		 */
		logprobs?: boolean | null;

		/**
		 * The maximum number of [tokens](/tokenizer) that can be generated in the
		 * chat completion. This value can be used to control
		 * [costs](https://openai.com/api/pricing/) for text generated via API.
		 * This value is now deprecated in favor of `max_completion_tokens`, and is
		 * not compatible with [o-series models](/docs/guides/reasoning).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_tokens?: number | null;

		/**
		 * How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep `n` as `1` to minimize costs.
		 * Minimum: 1
		 * Maximum: 128
		 */
		n?: number | null;

		/**
		 * Configuration for a [Predicted Output](/docs/guides/predicted-outputs),
		 * which can greatly improve response times when large parts of the model
		 * response are known ahead of time. This is most common when you are
		 * regenerating a file with only minor changes to most of the content.
		 */
		prediction?: PredictionContent;

		/**
		 * This feature is in Beta.
		 * If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.
		 * Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		seed?: string | null;

		/**
		 * Options for streaming response. Only set this when you set `stream: true`.
		 */
		stream_options?: ChatCompletionStreamOptions;

		/**
		 * A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for. A max of 128 functions are supported.
		 */
		tools?: Array<ChatCompletionTool>;

		/**
		 * Controls which (if any) tool is called by the model.
		 * `none` means the model will not call any tool and instead generates a message.
		 * `auto` means the model can pick between generating a message or calling one or more tools.
		 * `required` means the model must call one or more tools.
		 * Specifying a particular tool via `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.
		 * `none` is the default when no tools are present. `auto` is the default if tools are present.
		 */
		tool_choice?: ChatCompletionToolChoiceOption;

		/** Whether to enable [parallel function calling](/docs/guides/function-calling#configuring-parallel-function-calling) during tool use. */
		parallel_tool_calls?: boolean | null;

		/**
		 * Deprecated in favor of `tool_choice`.
		 * Controls which (if any) function is called by the model.
		 * `none` means the model will not call a function and instead generates a
		 * message.
		 * `auto` means the model can pick between generating a message or calling a
		 * function.
		 * Specifying a particular function via `{"name": "my_function"}` forces the
		 * model to call that function.
		 * `none` is the default when no functions are present. `auto` is the default
		 * if functions are present.
		 */
		function_call?: CreateChatCompletionRequestFunction_call;

		/**
		 * Deprecated in favor of `tools`.
		 * A list of functions the model may generate JSON inputs for.
		 * Minimum items: 1
		 * Maximum items: 128
		 */
		functions?: Array<ChatCompletionFunctions>;
	}

	export interface CreateChatCompletionRequestWeb_search_options {

		/**
		 * Approximate location parameters for the search.
		 */
		user_location?: CreateChatCompletionRequestWeb_search_optionsUser_location;

		/**
		 * High level guidance for the amount of context window space to use for the
		 * search. One of `low`, `medium`, or `high`. `medium` is the default.
		 */
		search_context_size?: CreateAssistantRequestReasoning_effort | null;
	}

	export interface CreateChatCompletionRequestWeb_search_optionsUser_location {

		/**
		 * The type of location approximation. Always `approximate`.
		 * Required
		 */
		type: CreateChatCompletionRequestWeb_search_optionsUser_locationType;

		/**
		 * Approximate location parameters for the search.
		 * Required
		 */
		approximate: WebSearchLocation;
	}

	export enum CreateChatCompletionRequestWeb_search_optionsUser_locationType { approximate = 0 }


	/** Approximate location parameters for the search. */
	export interface WebSearchLocation {

		/**
		 * The two-letter
		 * [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the user,
		 * e.g. `US`.
		 */
		country?: string | null;

		/**
		 * Free text input for the region of the user, e.g. `California`.
		 */
		region?: string | null;

		/**
		 * Free text input for the city of the user, e.g. `San Francisco`.
		 */
		city?: string | null;

		/**
		 * The [IANA timezone](https://timeapi.io/documentation/iana-timezones)
		 * of the user, e.g. `America/Los_Angeles`.
		 */
		timezone?: string | null;
	}


	/**
	 * Default response format. Used to generate text responses.
	 */
	export interface ResponseFormatText {

		/**
		 * The type of response format being defined. Always `text`.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartTextType;
	}

	export interface CreateChatCompletionRequestAudio {

		/** Required */
		voice: VoiceIdsShared;

		/**
		 * Specifies the output audio format. Must be one of `wav`, `mp3`, `flac`,
		 * `opus`, or `pcm16`.
		 * Required
		 */
		format: CreateChatCompletionRequestAudioFormat;
	}

	export enum CreateChatCompletionRequestAudioFormat { wav = 0, aac = 1, mp3 = 2, flac = 3, opus = 4, pcm16 = 5 }


	/**
	 * Static predicted output content, such as the content of a text file that is
	 * being regenerated.
	 */
	export interface PredictionContent {

		/**
		 * The type of the predicted content you want to provide. This type is
		 * currently always `content`.
		 * Required
		 */
		type: PredictionContentType;

		/**
		 * The content that should be matched when generating a model response.
		 * If generated tokens would match this content, the entire model response
		 * can be returned much more quickly.
		 * Required
		 */
		content: string;
	}

	export enum PredictionContentType { content = 0 }

	export enum CreateChatCompletionRequestFunction_call { none = 0, auto = 1 }


	/**
	 * Represents a streamed chunk of a chat completion response returned
	 * by the model, based on the provided input. 
	 * [Learn more](/docs/guides/streaming-responses).
	 */
	export interface CreateChatCompletionStreamResponse {

		/**
		 * A unique identifier for the chat completion. Each chunk has the same ID.
		 * Required
		 */
		id: string;

		/**
		 * A list of chat completion choices. Can contain more than one elements if `n` is greater than 1. Can also be empty for the
		 * last chunk if you set `stream_options: {"include_usage": true}`.
		 * Required
		 */
		CreateChatCompletionStreamResponseChoices: Array<CreateChatCompletionStreamResponseChoices>;

		/**
		 * The Unix timestamp (in seconds) of when the chat completion was created. Each chunk has the same timestamp.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created: number;

		/**
		 * The model to generate the completion.
		 * Required
		 */
		model: string;

		/**
		 * Specifies the latency tier to use for processing the request. This parameter is relevant for customers subscribed to the scale tier service:
		 * - If set to 'auto', and the Project is Scale tier enabled, the system
		 * will utilize scale tier credits until they are exhausted.
		 * - If set to 'auto', and the Project is not Scale tier enabled, the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.
		 * - If set to 'default', the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.
		 * - If set to 'flex', the request will be processed with the Flex Processing service tier. [Learn more](/docs/guides/flex-processing).
		 * - When not set, the default behavior is 'auto'.
		 * When this parameter is set, the response body will include the `service_tier` utilized.
		 */
		service_tier?: CreateChatCompletionResponseService_tier | null;

		/**
		 * This fingerprint represents the backend configuration that the model runs with.
		 * Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
		 */
		system_fingerprint?: string | null;

		/**
		 * The object type, which is always `chat.completion.chunk`.
		 * Required
		 */
		object: CreateChatCompletionStreamResponseObject;

		/** Usage statistics for the completion request. */
		usage?: CompletionUsage;
	}

	export interface CreateChatCompletionStreamResponseChoices {

		/**
		 * A chat completion delta generated by streamed model responses.
		 * Required
		 */
		delta: ChatCompletionStreamResponseDelta;

		/** Log probability information for the choice. */
		logprobs?: CreateChatCompletionStreamResponseChoicesLogprobs;

		/**
		 * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
		 * `length` if the maximum number of tokens specified in the request was reached,
		 * `content_filter` if content was omitted due to a flag from our content filters,
		 * `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function.
		 * Required
		 */
		finish_reason: CreateChatCompletionResponseChoicesFinish_reason;

		/**
		 * The index of the choice in the list of choices.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;
	}

	export interface CreateChatCompletionStreamResponseChoicesLogprobs {

		/**
		 * A list of message content tokens with log probability information.
		 * Required
		 */
		content: Array<ChatCompletionTokenLogprob>;

		/**
		 * A list of message refusal tokens with log probability information.
		 * Required
		 */
		refusal: Array<ChatCompletionTokenLogprob>;
	}

	export enum CreateChatCompletionStreamResponseObject { 'chat.completion.chunk' = 0 }

	export interface CreateCompletionRequest {

		/**
		 * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
		 * Required
		 */
		model: string;

		/**
		 * The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.
		 * Note that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.
		 * Required
		 */
		prompt: string;

		/**
		 * Generates `best_of` completions server-side and returns the "best" (the one with the highest log probability per token). Results cannot be streamed.
		 * When used with `n`, `best_of` controls the number of candidate completions and `n` specifies how many to return – `best_of` must be greater than `n`.
		 * **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
		 * Minimum: 0
		 * Maximum: 20
		 */
		best_of?: number | null;

		/**
		 * Echo back the prompt in addition to the completion
		 */
		echo?: boolean | null;

		/**
		 * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
		 * [See more information about frequency and presence penalties.](/docs/guides/text-generation)
		 * Minimum: -2
		 * Maximum: 2
		 */
		frequency_penalty?: number | null;

		/**
		 * Modify the likelihood of specified tokens appearing in the completion.
		 * Accepts a JSON object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
		 * As an example, you can pass `{"50256": -100}` to prevent the <|endoftext|> token from being generated.
		 */
		logit_bias?: {[id: string]: number };

		/**
		 * Include the log probabilities on the `logprobs` most likely output tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.
		 * The maximum value for `logprobs` is 5.
		 * Minimum: 0
		 * Maximum: 5
		 */
		logprobs?: number | null;

		/**
		 * The maximum number of [tokens](/tokenizer) that can be generated in the completion.
		 * The token count of your prompt plus `max_tokens` cannot exceed the model's context length. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens.
		 * Minimum: 0
		 */
		max_tokens?: number | null;

		/**
		 * How many completions to generate for each prompt.
		 * **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
		 * Minimum: 1
		 * Maximum: 128
		 */
		n?: number | null;

		/**
		 * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
		 * [See more information about frequency and presence penalties.](/docs/guides/text-generation)
		 * Minimum: -2
		 * Maximum: 2
		 */
		presence_penalty?: number | null;

		/**
		 * If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.
		 * Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		seed?: string | null;

		/**
		 * Not supported with latest reasoning models `o3` and `o4-mini`.
		 * Up to 4 sequences where the API will stop generating further tokens. The
		 * returned text will not contain the stop sequence.
		 */
		stop?: StopConfiguration;

		/**
		 * Whether to stream back partial progress. If set, tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://cookbook.openai.com/examples/how_to_stream_completions).
		 */
		stream?: boolean | null;

		/**
		 * Options for streaming response. Only set this when you set `stream: true`.
		 */
		stream_options?: ChatCompletionStreamOptions;

		/**
		 * The suffix that comes after a completion of inserted text.
		 * This parameter is only supported for `gpt-3.5-turbo-instruct`.
		 */
		suffix?: string | null;

		/**
		 * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
		 * We generally recommend altering this or `top_p` but not both.
		 * Minimum: 0
		 * Maximum: 2
		 */
		temperature?: number | null;

		/**
		 * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
		 * We generally recommend altering this or `temperature` but not both.
		 * Minimum: 0
		 * Maximum: 1
		 */
		top_p?: number | null;

		/**
		 * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
		 */
		user?: string | null;
	}


	/**
	 * Represents a completion response from the API. Note: both the streamed and non-streamed response objects share the same shape (unlike the chat endpoint).
	 */
	export interface CreateCompletionResponse {

		/**
		 * A unique identifier for the completion.
		 * Required
		 */
		id: string;

		/**
		 * The list of completion choices the model generated for the input prompt.
		 * Required
		 */
		CreateCompletionResponseChoices: Array<CreateCompletionResponseChoices>;

		/**
		 * The Unix timestamp (in seconds) of when the completion was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created: number;

		/**
		 * The model used for completion.
		 * Required
		 */
		model: string;

		/**
		 * This fingerprint represents the backend configuration that the model runs with.
		 * Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
		 */
		system_fingerprint?: string | null;

		/**
		 * The object type, which is always "text_completion"
		 * Required
		 */
		object: CreateCompletionResponseObject;

		/** Usage statistics for the completion request. */
		usage?: CompletionUsage;
	}

	export interface CreateCompletionResponseChoices {

		/**
		 * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
		 * `length` if the maximum number of tokens specified in the request was reached,
		 * or `content_filter` if content was omitted due to a flag from our content filters.
		 * Required
		 */
		finish_reason: CreateCompletionResponseChoicesFinish_reason;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/** Required */
		logprobs: CreateCompletionResponseChoicesLogprobs;

		/** Required */
		text: string;
	}

	export enum CreateCompletionResponseChoicesFinish_reason { stop = 0, length = 1, content_filter = 2 }

	export interface CreateCompletionResponseChoicesLogprobs {
		text_offset?: Array<number>;
		token_logprobs?: Array<number>;
		tokens?: Array<string>;
		top_logprobs?: Array<string>;
	}

	export enum CreateCompletionResponseObject { text_completion = 0 }

	export interface CreateEmbeddingRequest {

		/**
		 * Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for `text-embedding-ada-002`), cannot be an empty string, and any array must be 2048 dimensions or less. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens. Some models may also impose a limit on total number of tokens summed across inputs.
		 * Required
		 */
		input: string;

		/**
		 * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
		 * Required
		 */
		model: string;

		/** The format to return the embeddings in. Can be either `float` or [`base64`](https://pypi.org/project/pybase64/). */
		encoding_format?: CreateEmbeddingRequestEncoding_format | null;

		/**
		 * The number of dimensions the resulting output embeddings should have. Only supported in `text-embedding-3` and later models.
		 * Minimum: 1
		 */
		dimensions?: number | null;

		/**
		 * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
		 */
		user?: string | null;
	}

	export enum CreateEmbeddingRequestEncoding_format { float = 0, base64 = 1 }

	export interface CreateEmbeddingResponse {

		/**
		 * The list of embeddings generated by the model.
		 * Required
		 */
		data: Array<Embedding>;

		/**
		 * The name of the model used to generate the embedding.
		 * Required
		 */
		model: string;

		/**
		 * The object type, which is always "list".
		 * Required
		 */
		object: ChatCompletionListObject;

		/**
		 * The usage information for the request.
		 * Required
		 */
		usage: CreateEmbeddingResponseUsage;
	}


	/**
	 * Represents an embedding vector returned by embedding endpoint.
	 */
	export interface Embedding {

		/**
		 * The index of the embedding in the list of embeddings.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * The embedding vector, which is a list of floats. The length of vector depends on the model as listed in the [embedding guide](/docs/guides/embeddings).
		 * Required
		 */
		embedding: Array<number>;

		/**
		 * The object type, which is always "embedding".
		 * Required
		 */
		object: EmbeddingObject;
	}

	export enum EmbeddingObject { embedding = 0 }

	export interface CreateEmbeddingResponseUsage {

		/**
		 * The number of tokens used by the prompt.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		prompt_tokens: number;

		/**
		 * The total number of tokens used by the request.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_tokens: number;
	}


	/**
	 * A CompletionsRunDataSource object describing a model sampling configuration.
	 */
	export interface CreateEvalCompletionsRunDataSource {

		/**
		 * The type of run data source. Always `completions`.
		 * Required
		 */
		type: CreateEvalCompletionsRunDataSourceType;
		input_messages?: CreateEvalCompletionsRunDataSourceInput_messages;
		sampling_params?: CreateEvalCompletionsRunDataSourceSampling_params;

		/** The name of the model to use for generating completions (e.g. "o3-mini"). */
		model?: string | null;

		/** Required */
		source: EvalJsonlFileContentSource;
	}

	export enum CreateEvalCompletionsRunDataSourceType { completions = 0 }

	export interface CreateEvalCompletionsRunDataSourceInput_messages {

		/**
		 * The type of input messages. Always `template`.
		 * Required
		 */
		type: CreateEvalCompletionsRunDataSourceInput_messagesType;

		/**
		 * A list of chat messages forming the prompt or context. May include variable references to the "item" namespace, ie {{item.name}}.
		 * Required
		 * Array member types: EasyInputMessage, EvalItem
		 */
		template: Array<any>;
	}

	export enum CreateEvalCompletionsRunDataSourceInput_messagesType { template = 0 }

	export interface CreateEvalCompletionsRunDataSourceSampling_params {

		/**
		 * A higher temperature increases randomness in the outputs.
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * The maximum number of tokens in the generated output.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_completion_tokens?: number | null;

		/**
		 * An alternative to temperature for nucleus sampling; 1.0 includes all tokens.
		 * Type: double
		 */
		top_p?: number | null;

		/**
		 * A seed value to initialize the randomness, during sampling.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seed?: number | null;
	}

	export interface EvalJsonlFileContentSource {

		/**
		 * The type of jsonl source. Always `file_content`.
		 * Required
		 */
		type: EvalJsonlFileContentSourceType;

		/**
		 * The content of the jsonl file.
		 * Required
		 */
		EvalJsonlFileContentSourceContent: Array<EvalJsonlFileContentSourceContent>;
	}

	export enum EvalJsonlFileContentSourceType { file_content = 0 }

	export interface EvalJsonlFileContentSourceContent {

		/** Required */
		item: string;
		sample?: string | null;
	}


	/**
	 * A CustomDataSourceConfig object that defines the schema for the data source used for the evaluation runs.
	 * This schema is used to define the shape of the data that will be:
	 * - Used to define your testing criteria and
	 * - What data is required when creating a run
	 */
	export interface CreateEvalCustomDataSourceConfig {

		/**
		 * The type of data source. Always `custom`.
		 * Required
		 */
		type: CreateEvalCustomDataSourceConfigType;

		/**
		 * The json schema for each row in the data source.
		 * Required
		 */
		item_schema: string;

		/** Whether the eval should expect you to populate the sample namespace (ie, by generating responses off of your data source) */
		include_sample_schema?: boolean | null;
	}

	export enum CreateEvalCustomDataSourceConfigType { custom = 0 }


	/** A chat message that makes up the prompt or context. May include variable references to the "item" namespace, ie {{item.name}}. */
	export interface CreateEvalItem {
	}


	/**
	 * A JsonlRunDataSource object with that specifies a JSONL file that matches the eval 
	 */
	export interface CreateEvalJsonlRunDataSource {

		/**
		 * The type of data source. Always `jsonl`.
		 * Required
		 */
		type: CreateEvalJsonlRunDataSourceType;

		/** Required */
		source: EvalJsonlFileContentSource;
	}

	export enum CreateEvalJsonlRunDataSourceType { jsonl = 0 }


	/**
	 * A LabelModelGrader object which uses a model to assign labels to each item
	 * in the evaluation.
	 */
	export interface CreateEvalLabelModelGrader {

		/**
		 * The object type, which is always `label_model`.
		 * Required
		 */
		type: CreateEvalLabelModelGraderType;

		/**
		 * The name of the grader.
		 * Required
		 */
		name: string;

		/**
		 * The model to use for the evaluation. Must support structured outputs.
		 * Required
		 */
		model: string;

		/**
		 * A list of chat messages forming the prompt or context. May include variable references to the "item" namespace, ie {{item.name}}.
		 * Required
		 * Array member types: EvalItem
		 */
		input: Array<any>;

		/**
		 * The labels to classify to each item in the evaluation.
		 * Required
		 */
		labels: Array<string>;

		/**
		 * The labels that indicate a passing result. Must be a subset of labels.
		 * Required
		 */
		passing_labels: Array<string>;
	}

	export enum CreateEvalLabelModelGraderType { label_model = 0 }


	/**
	 * A data source config which specifies the metadata property of your stored completions query.
	 * This is usually metadata like `usecase=chatbot` or `prompt-version=v2`, etc.
	 */
	export interface CreateEvalLogsDataSourceConfig {

		/**
		 * The type of data source. Always `logs`.
		 * Required
		 */
		type: CodeInterpreterTextOutputType;

		/** Metadata filters for the logs data source. */
		metadata?: string | null;
	}

	export interface CreateEvalRequest {

		/** The name of the evaluation. */
		name?: string | null;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;

		/**
		 * The configuration for the data source used for the evaluation runs.
		 * Required
		 */
		data_source_config: string;

		/**
		 * A list of graders for all eval runs in this group.
		 * Required
		 * Array member types: CreateEvalLabelModelGrader, EvalStringCheckGrader, EvalTextSimilarityGrader, EvalPythonGrader, EvalScoreModelGrader
		 */
		testing_criteria: Array<any>;
	}


	/**
	 * A ResponsesRunDataSource object describing a model sampling configuration.
	 */
	export interface CreateEvalResponsesRunDataSource {

		/**
		 * The type of run data source. Always `completions`.
		 * Required
		 */
		type: CreateEvalCompletionsRunDataSourceType;
		input_messages?: CreateEvalResponsesRunDataSourceInput_messages;
		sampling_params?: CreateEvalResponsesRunDataSourceSampling_params;

		/** The name of the model to use for generating completions (e.g. "o3-mini"). */
		model?: string | null;

		/** Required */
		source: EvalJsonlFileContentSource;
	}

	export interface CreateEvalResponsesRunDataSourceInput_messages {

		/**
		 * The type of input messages. Always `template`.
		 * Required
		 */
		type: CreateEvalCompletionsRunDataSourceInput_messagesType;

		/**
		 * A list of chat messages forming the prompt or context. May include variable references to the "item" namespace, ie {{item.name}}.
		 * Required
		 * Array member types: EvalItem
		 */
		template: Array<any>;
	}

	export interface CreateEvalResponsesRunDataSourceSampling_params {

		/**
		 * A higher temperature increases randomness in the outputs.
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * The maximum number of tokens in the generated output.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_completion_tokens?: number | null;

		/**
		 * An alternative to temperature for nucleus sampling; 1.0 includes all tokens.
		 * Type: double
		 */
		top_p?: number | null;

		/**
		 * A seed value to initialize the randomness, during sampling.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seed?: number | null;
	}

	export interface CreateEvalRunRequest {

		/** The name of the run. */
		name?: string | null;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;

		/**
		 * Details about the run's data source.
		 * Required
		 */
		data_source: string;
	}

	export interface CreateFileRequest {

		/**
		 * The File object (not file name) to be uploaded.
		 * Required
		 */
		file: string;

		/**
		 * The intended purpose of the uploaded file. One of: - `assistants`: Used in the Assistants API - `batch`: Used in the Batch API - `fine-tune`: Used for fine-tuning - `vision`: Images used for vision fine-tuning - `user_data`: Flexible file type for any purpose - `evals`: Used for eval data sets
		 * Required
		 */
		purpose: CreateFileRequestPurpose;
	}

	export enum CreateFileRequestPurpose { assistants = 0, batch = 1, 'fine-tune' = 2, vision = 3, user_data = 4, evals = 5 }

	export interface CreateFineTuningCheckpointPermissionRequest {

		/**
		 * The project identifiers to grant access to.
		 * Required
		 */
		project_ids: Array<string>;
	}

	export interface CreateFineTuningJobRequest {

		/**
		 * The name of the model to fine-tune. You can select one of the
		 * [supported models](/docs/guides/fine-tuning#which-models-can-be-fine-tuned).
		 * Required
		 */
		model: string;

		/**
		 * The ID of an uploaded file that contains training data.
		 * See [upload file](/docs/api-reference/files/create) for how to upload a file.
		 * Your dataset must be formatted as a JSONL file. Additionally, you must upload your file with the purpose `fine-tune`.
		 * The contents of the file should differ depending on if the model uses the [chat](/docs/api-reference/fine-tuning/chat-input), [completions](/docs/api-reference/fine-tuning/completions-input) format, or if the fine-tuning method uses the [preference](/docs/api-reference/fine-tuning/preference-input) format.
		 * See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
		 * Required
		 */
		training_file: string;

		/**
		 * The hyperparameters used for the fine-tuning job.
		 * This value is now deprecated in favor of `method`, and should be passed in under the `method` parameter.
		 */
		hyperparameters?: CreateFineTuningJobRequestHyperparameters;

		/**
		 * A string of up to 64 characters that will be added to your fine-tuned model name.
		 * For example, a `suffix` of "custom-model-name" would produce a model name like `ft:gpt-4o-mini:openai:custom-model-name:7p4lURel`.
		 * Min length: 1
		 * Max length: 64
		 */
		suffix?: string | null;

		/**
		 * The ID of an uploaded file that contains validation data.
		 * If you provide this file, the data is used to generate validation
		 * metrics periodically during fine-tuning. These metrics can be viewed in
		 * the fine-tuning results file.
		 * The same data should not be present in both train and validation files.
		 * Your dataset must be formatted as a JSONL file. You must upload your file with the purpose `fine-tune`.
		 * See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
		 */
		validation_file?: string | null;

		/** A list of integrations to enable for your fine-tuning job. */
		CreateFineTuningJobRequestIntegrations?: Array<CreateFineTuningJobRequestIntegrations>;

		/**
		 * The seed controls the reproducibility of the job. Passing in the same seed and job parameters should produce the same results, but may differ in rare cases.
		 * If a seed is not specified, one will be generated for you.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		seed?: number | null;

		/** The method used for fine-tuning. */
		method?: FineTuneMethod;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;
	}

	export interface CreateFineTuningJobRequestHyperparameters {

		/**
		 * Number of examples in each batch. A larger batch size means that model parameters
		 * are updated less frequently, but with lower variance.
		 */
		batch_size?: AutoChunkingStrategyRequestParamType;

		/**
		 * Scaling factor for the learning rate. A smaller learning rate may be useful to avoid
		 * overfitting.
		 */
		learning_rate_multiplier?: AutoChunkingStrategyRequestParamType;

		/**
		 * The number of epochs to train the model for. An epoch refers to one full cycle
		 * through the training dataset.
		 */
		n_epochs?: AutoChunkingStrategyRequestParamType;
	}

	export interface CreateFineTuningJobRequestIntegrations {

		/**
		 * The type of integration to enable. Currently, only "wandb" (Weights and Biases) is supported.
		 * Required
		 */
		type: CreateFineTuningJobRequestIntegrationsType;

		/**
		 * The settings for your integration with Weights and Biases. This payload specifies the project that
		 * metrics will be sent to. Optionally, you can set an explicit display name for your run, add tags
		 * to your run, and set a default entity (team, username, etc) to be associated with your run.
		 * Required
		 */
		wandb: CreateFineTuningJobRequestIntegrationsWandb;
	}

	export enum CreateFineTuningJobRequestIntegrationsType { wandb = 0 }

	export interface CreateFineTuningJobRequestIntegrationsWandb {

		/**
		 * The name of the project that the new run will be created under.
		 * Required
		 */
		project: string;

		/**
		 * A display name to set for the run. If not set, we will use the Job ID as the name.
		 */
		name?: string | null;

		/**
		 * The entity to use for the run. This allows you to set the team or username of the WandB user that you would
		 * like associated with the run. If not set, the default entity for the registered WandB API key is used.
		 */
		entity?: string | null;

		/**
		 * A list of tags to be attached to the newly created run. These tags are passed through directly to WandB. Some
		 * default tags are generated by OpenAI: "openai/finetune", "openai/{base-model}", "openai/{ftjob-abcdef}".
		 */
		tags?: Array<string>;
	}


	/** The method used for fine-tuning. */
	export interface FineTuneMethod {

		/** The type of method. Is either `supervised` or `dpo`. */
		type?: FineTuneMethodType | null;

		/** Configuration for the supervised fine-tuning method. */
		supervised?: FineTuneSupervisedMethod;

		/** Configuration for the DPO fine-tuning method. */
		dpo?: FineTuneDPOMethod;
	}

	export enum FineTuneMethodType { supervised = 0, dpo = 1 }


	/** Configuration for the supervised fine-tuning method. */
	export interface FineTuneSupervisedMethod {

		/** The hyperparameters used for the fine-tuning job. */
		hyperparameters?: FineTuneSupervisedMethodHyperparameters;
	}

	export interface FineTuneSupervisedMethodHyperparameters {

		/**
		 * Number of examples in each batch. A larger batch size means that model parameters are updated less frequently, but with lower variance.
		 */
		batch_size?: AutoChunkingStrategyRequestParamType;

		/**
		 * Scaling factor for the learning rate. A smaller learning rate may be useful to avoid overfitting.
		 */
		learning_rate_multiplier?: AutoChunkingStrategyRequestParamType;

		/**
		 * The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.
		 */
		n_epochs?: AutoChunkingStrategyRequestParamType;
	}


	/** Configuration for the DPO fine-tuning method. */
	export interface FineTuneDPOMethod {

		/** The hyperparameters used for the fine-tuning job. */
		hyperparameters?: FineTuneDPOMethodHyperparameters;
	}

	export interface FineTuneDPOMethodHyperparameters {

		/**
		 * The beta value for the DPO method. A higher beta value will increase the weight of the penalty between the policy and reference model.
		 */
		beta?: AutoChunkingStrategyRequestParamType;

		/**
		 * Number of examples in each batch. A larger batch size means that model parameters are updated less frequently, but with lower variance.
		 */
		batch_size?: AutoChunkingStrategyRequestParamType;

		/**
		 * Scaling factor for the learning rate. A smaller learning rate may be useful to avoid overfitting.
		 */
		learning_rate_multiplier?: AutoChunkingStrategyRequestParamType;

		/**
		 * The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.
		 */
		n_epochs?: AutoChunkingStrategyRequestParamType;
	}

	export interface CreateImageEditRequest {

		/**
		 * The image(s) to edit. Must be a supported image file or an array of images.
		 * For `gpt-image-1`, each image should be a `png`, `webp`, or `jpg` file less
		 * than 25MB. You can provide up to 16 images.
		 * For `dall-e-2`, you can only provide one image, and it should be a square
		 * `png` file less than 4MB.
		 * Required
		 */
		image: string;

		/**
		 * A text description of the desired image(s). The maximum length is 1000 characters for `dall-e-2`, and 32000 characters for `gpt-image-1`.
		 * Required
		 */
		prompt: string;

		/** An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where `image` should be edited. If there are multiple images provided, the mask will be applied on the first image. Must be a valid PNG file, less than 4MB, and have the same dimensions as `image`. */
		mask?: string | null;

		/** The model to use for image generation. Only `dall-e-2` and `gpt-image-1` are supported. Defaults to `dall-e-2` unless a parameter specific to `gpt-image-1` is used. */
		model?: string;

		/**
		 * The number of images to generate. Must be between 1 and 10.
		 * Minimum: 1
		 * Maximum: 10
		 */
		n?: number | null;

		/** The size of the generated images. Must be one of `1024x1024`, `1536x1024` (landscape), `1024x1536` (portrait), or `auto` (default value) for `gpt-image-1`, and one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`. */
		size?: CreateImageEditRequestSize | null;

		/** The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated. This parameter is only supported for `dall-e-2`, as `gpt-image-1` will always return base64-encoded images. */
		response_format?: CreateImageEditRequestResponse_format | null;

		/**
		 * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
		 */
		user?: string | null;

		/**
		 * The quality of the image that will be generated. `high`, `medium` and `low` are only supported for `gpt-image-1`. `dall-e-2` only supports `standard` quality. Defaults to `auto`.
		 */
		quality?: CreateImageEditRequestQuality | null;
	}

	export enum CreateImageEditRequestSize { '256x256' = 0, '512x512' = 1, '1024x1024' = 2, '1536x1024' = 3, '1024x1536' = 4, auto = 5 }

	export enum CreateImageEditRequestResponse_format { url = 0, b64_json = 1 }

	export enum CreateImageEditRequestQuality { standard = 0, low = 1, medium = 2, high = 3, auto = 4 }

	export interface CreateImageRequest {

		/**
		 * A text description of the desired image(s). The maximum length is 32000 characters for `gpt-image-1`, 1000 characters for `dall-e-2` and 4000 characters for `dall-e-3`.
		 * Required
		 */
		prompt: string;

		/** The model to use for image generation. One of `dall-e-2`, `dall-e-3`, or `gpt-image-1`. Defaults to `dall-e-2` unless a parameter specific to `gpt-image-1` is used. */
		model?: string;

		/**
		 * The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported.
		 * Minimum: 1
		 * Maximum: 10
		 */
		n?: number | null;

		/**
		 * The quality of the image that will be generated.
		 * - `auto` (default value) will automatically select the best quality for the given model.
		 * - `high`, `medium` and `low` are supported for `gpt-image-1`.
		 * - `hd` and `standard` are supported for `dall-e-3`.
		 * - `standard` is the only option for `dall-e-2`.
		 */
		quality?: CreateImageRequestQuality | null;

		/** The format in which generated images with `dall-e-2` and `dall-e-3` are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated. This parameter isn't supported for `gpt-image-1` which will always return base64-encoded images. */
		response_format?: CreateImageEditRequestResponse_format | null;

		/** The format in which the generated images are returned. This parameter is only supported for `gpt-image-1`. Must be one of `png`, `jpeg`, or `webp`. */
		output_format?: CreateImageRequestOutput_format | null;

		/**
		 * The compression level (0-100%) for the generated images. This parameter is only supported for `gpt-image-1` with the `webp` or `jpeg` output formats, and defaults to 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_compression?: number | null;

		/** The size of the generated images. Must be one of `1024x1024`, `1536x1024` (landscape), `1024x1536` (portrait), or `auto` (default value) for `gpt-image-1`, one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`, and one of `1024x1024`, `1792x1024`, or `1024x1792` for `dall-e-3`. */
		size?: CreateImageRequestSize | null;

		/** Control the content-moderation level for images generated by `gpt-image-1`. Must be either `low` for less restrictive filtering or `auto` (default value). */
		moderation?: CreateImageRequestModeration | null;

		/**
		 * Allows to set transparency for the background of the generated image(s).
		 * This parameter is only supported for `gpt-image-1`. Must be one of
		 * `transparent`, `opaque` or `auto` (default value). When `auto` is used, the
		 * model will automatically determine the best background for the image.
		 * If `transparent`, the output format needs to support transparency, so it
		 * should be set to either `png` (default value) or `webp`.
		 */
		background?: CreateImageRequestBackground | null;

		/** The style of the generated images. This parameter is only supported for `dall-e-3`. Must be one of `vivid` or `natural`. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. */
		style?: CreateImageRequestStyle | null;

		/**
		 * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
		 */
		user?: string | null;
	}

	export enum CreateImageRequestQuality { standard = 0, hd = 1, low = 2, medium = 3, high = 4, auto = 5 }

	export enum CreateImageRequestOutput_format { png = 0, jpeg = 1, webp = 2 }

	export enum CreateImageRequestSize { auto = 0, '1024x1024' = 1, '1536x1024' = 2, '1024x1536' = 3, '256x256' = 4, '512x512' = 5, '1792x1024' = 6, '1024x1792' = 7 }

	export enum CreateImageRequestModeration { low = 0, auto = 1 }

	export enum CreateImageRequestBackground { transparent = 0, opaque = 1, auto = 2 }

	export enum CreateImageRequestStyle { vivid = 0, natural = 1 }

	export interface CreateImageVariationRequest {

		/**
		 * The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
		 * Required
		 */
		image: string;

		/** The model to use for image generation. Only `dall-e-2` is supported at this time. */
		model?: string;

		/**
		 * The number of images to generate. Must be between 1 and 10.
		 * Minimum: 1
		 * Maximum: 10
		 */
		n?: number | null;

		/** The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated. */
		response_format?: CreateImageEditRequestResponse_format | null;

		/** The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`. */
		size?: CreateImageVariationRequestSize | null;

		/**
		 * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
		 */
		user?: string | null;
	}

	export enum CreateImageVariationRequestSize { '256x256' = 0, '512x512' = 1, '1024x1024' = 2 }

	export interface CreateMessageRequest {

		/**
		 * The role of the entity that is creating the message. Allowed values include:
		 * - `user`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages.
		 * - `assistant`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.
		 * Required
		 */
		role: CreateMessageRequestRole;

		/** Required */
		content: string;

		/** A list of files attached to the message, and the tools they should be added to. */
		CreateMessageRequestAttachments?: Array<CreateMessageRequestAttachments>;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;
	}

	export enum CreateMessageRequestRole { user = 0, assistant = 1 }

	export interface CreateMessageRequestAttachments {

		/** The ID of the file to attach to the message. */
		file_id?: string | null;

		/**
		 * The tools to add this file to.
		 * Array member types: AssistantToolsCode, AssistantToolsFileSearchTypeOnly
		 */
		tools?: Array<any>;
	}

	export interface CreateModelResponseProperties {
	}

	export interface CreateModerationRequest {

		/**
		 * Input (or inputs) to classify. Can be a single string, an array of strings, or
		 * an array of multi-modal input objects similar to other models.
		 * Required
		 */
		input: string;

		/**
		 * The content moderation model you would like to use. Learn more in
		 * [the moderation guide](/docs/guides/moderation), and learn about
		 * available models [here](/docs/models#moderation).
		 */
		model?: string;
	}


	/** Represents if a given text input is potentially harmful. */
	export interface CreateModerationResponse {

		/**
		 * The unique identifier for the moderation request.
		 * Required
		 */
		id: string;

		/**
		 * The model used to generate the moderation results.
		 * Required
		 */
		model: string;

		/**
		 * A list of moderation objects.
		 * Required
		 */
		CreateModerationResponseResults: Array<CreateModerationResponseResults>;
	}

	export interface CreateModerationResponseResults {

		/**
		 * Whether any of the below categories are flagged.
		 * Required
		 */
		flagged: boolean;

		/**
		 * A list of the categories, and whether they are flagged or not.
		 * Required
		 */
		categories: CreateModerationResponseResultsCategories;

		/**
		 * A list of the categories along with their scores as predicted by model.
		 * Required
		 */
		category_scores: CreateModerationResponseResultsCategory_scores;

		/**
		 * A list of the categories along with the input type(s) that the score applies to.
		 * Required
		 */
		category_applied_input_types: CreateModerationResponseResultsCategory_applied_input_types;
	}

	export interface CreateModerationResponseResultsCategories {

		/**
		 * Content that expresses, incites, or promotes hate based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. Hateful content aimed at non-protected groups (e.g., chess players) is harassment.
		 * Required
		 */
		hate: boolean;

		/**
		 * Hateful content that also includes violence or serious harm towards the targeted group based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste.
		 * Required
		 */
		'hate/threatening': boolean;

		/**
		 * Content that expresses, incites, or promotes harassing language towards any target.
		 * Required
		 */
		harassment: boolean;

		/**
		 * Harassment content that also includes violence or serious harm towards any target.
		 * Required
		 */
		'harassment/threatening': boolean;

		/**
		 * Content that includes instructions or advice that facilitate the planning or execution of wrongdoing, or that gives advice or instruction on how to commit illicit acts. For example, "how to shoplift" would fit this category.
		 * Required
		 */
		illicit: boolean;

		/**
		 * Content that includes instructions or advice that facilitate the planning or execution of wrongdoing that also includes violence, or that gives advice or instruction on the procurement of any weapon.
		 * Required
		 */
		'illicit/violent': boolean;

		/**
		 * Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders.
		 * Required
		 */
		'self-harm': boolean;

		/**
		 * Content where the speaker expresses that they are engaging or intend to engage in acts of self-harm, such as suicide, cutting, and eating disorders.
		 * Required
		 */
		'self-harm/intent': boolean;

		/**
		 * Content that encourages performing acts of self-harm, such as suicide, cutting, and eating disorders, or that gives instructions or advice on how to commit such acts.
		 * Required
		 */
		'self-harm/instructions': boolean;

		/**
		 * Content meant to arouse sexual excitement, such as the description of sexual activity, or that promotes sexual services (excluding sex education and wellness).
		 * Required
		 */
		sexual: boolean;

		/**
		 * Sexual content that includes an individual who is under 18 years old.
		 * Required
		 */
		'sexual/minors': boolean;

		/**
		 * Content that depicts death, violence, or physical injury.
		 * Required
		 */
		violence: boolean;

		/**
		 * Content that depicts death, violence, or physical injury in graphic detail.
		 * Required
		 */
		'violence/graphic': boolean;
	}

	export interface CreateModerationResponseResultsCategory_scores {

		/**
		 * The score for the category 'hate'.
		 * Required
		 * Type: double
		 */
		hate: number;

		/**
		 * The score for the category 'hate/threatening'.
		 * Required
		 * Type: double
		 */
		'hate/threatening': number;

		/**
		 * The score for the category 'harassment'.
		 * Required
		 * Type: double
		 */
		harassment: number;

		/**
		 * The score for the category 'harassment/threatening'.
		 * Required
		 * Type: double
		 */
		'harassment/threatening': number;

		/**
		 * The score for the category 'illicit'.
		 * Required
		 * Type: double
		 */
		illicit: number;

		/**
		 * The score for the category 'illicit/violent'.
		 * Required
		 * Type: double
		 */
		'illicit/violent': number;

		/**
		 * The score for the category 'self-harm'.
		 * Required
		 * Type: double
		 */
		'self-harm': number;

		/**
		 * The score for the category 'self-harm/intent'.
		 * Required
		 * Type: double
		 */
		'self-harm/intent': number;

		/**
		 * The score for the category 'self-harm/instructions'.
		 * Required
		 * Type: double
		 */
		'self-harm/instructions': number;

		/**
		 * The score for the category 'sexual'.
		 * Required
		 * Type: double
		 */
		sexual: number;

		/**
		 * The score for the category 'sexual/minors'.
		 * Required
		 * Type: double
		 */
		'sexual/minors': number;

		/**
		 * The score for the category 'violence'.
		 * Required
		 * Type: double
		 */
		violence: number;

		/**
		 * The score for the category 'violence/graphic'.
		 * Required
		 * Type: double
		 */
		'violence/graphic': number;
	}

	export interface CreateModerationResponseResultsCategory_applied_input_types {

		/**
		 * The applied input type(s) for the category 'hate'.
		 * Required
		 */
		hate: Array<ChatCompletionRequestMessageContentPartTextType>;

		/**
		 * The applied input type(s) for the category 'hate/threatening'.
		 * Required
		 */
		'hate/threatening': Array<ChatCompletionRequestMessageContentPartTextType>;

		/**
		 * The applied input type(s) for the category 'harassment'.
		 * Required
		 */
		harassment: Array<ChatCompletionRequestMessageContentPartTextType>;

		/**
		 * The applied input type(s) for the category 'harassment/threatening'.
		 * Required
		 */
		'harassment/threatening': Array<ChatCompletionRequestMessageContentPartTextType>;

		/**
		 * The applied input type(s) for the category 'illicit'.
		 * Required
		 */
		illicit: Array<ChatCompletionRequestMessageContentPartTextType>;

		/**
		 * The applied input type(s) for the category 'illicit/violent'.
		 * Required
		 */
		'illicit/violent': Array<ChatCompletionRequestMessageContentPartTextType>;

		/**
		 * The applied input type(s) for the category 'self-harm'.
		 * Required
		 */
		'self-harm': Array<string>;

		/**
		 * The applied input type(s) for the category 'self-harm/intent'.
		 * Required
		 */
		'self-harm/intent': Array<string>;

		/**
		 * The applied input type(s) for the category 'self-harm/instructions'.
		 * Required
		 */
		'self-harm/instructions': Array<string>;

		/**
		 * The applied input type(s) for the category 'sexual'.
		 * Required
		 */
		sexual: Array<string>;

		/**
		 * The applied input type(s) for the category 'sexual/minors'.
		 * Required
		 */
		'sexual/minors': Array<ChatCompletionRequestMessageContentPartTextType>;

		/**
		 * The applied input type(s) for the category 'violence'.
		 * Required
		 */
		violence: Array<string>;

		/**
		 * The applied input type(s) for the category 'violence/graphic'.
		 * Required
		 */
		'violence/graphic': Array<string>;
	}

	export interface CreateResponse extends CreateModelResponseProperties {

		/**
		 * The unique ID of the previous response to the model. Use this to
		 * create multi-turn conversations. Learn more about
		 * [conversation state](/docs/guides/conversation-state).
		 */
		previous_response_id?: string | null;
		model?: ModelIdsResponses;

		/**
		 * **o-series models only**
		 * Configuration options for
		 * [reasoning models](https://platform.openai.com/docs/guides/reasoning).
		 */
		reasoning?: Reasoning;

		/**
		 * An upper bound for the number of tokens that can be generated for a response, including visible output tokens and [reasoning tokens](/docs/guides/reasoning).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_output_tokens?: number | null;

		/**
		 * Inserts a system (or developer) message as the first item in the model's context.
		 * When using along with `previous_response_id`, the instructions from a previous
		 * response will not be carried over to the next response. This makes it simple
		 * to swap out system (or developer) messages in new responses.
		 */
		instructions?: string | null;

		/**
		 * Configuration options for a text response from the model. Can be plain
		 * text or structured JSON data. Learn more:
		 * - [Text inputs and outputs](/docs/guides/text)
		 * - [Structured Outputs](/docs/guides/structured-outputs)
		 */
		text?: CreateResponseText;

		/**
		 * An array of tools the model may call while generating a response. You
		 * can specify which tool to use by setting the `tool_choice` parameter.
		 * The two categories of tools you can provide the model are:
		 * - **Built-in tools**: Tools that are provided by OpenAI that extend the
		 * model's capabilities, like [web search](/docs/guides/tools-web-search)
		 * or [file search](/docs/guides/tools-file-search). Learn more about
		 * [built-in tools](/docs/guides/tools).
		 * - **Function calls (custom tools)**: Functions that are defined by you,
		 * enabling the model to call your own code. Learn more about
		 * [function calling](/docs/guides/function-calling).
		 * Array member types: FileSearchTool, FunctionTool, WebSearchPreviewTool, ComputerUsePreviewTool
		 */
		tools?: Array<any>;

		/**
		 * How the model should select which tool (or tools) to use when generating
		 * a response. See the `tools` parameter to see how to specify which tools
		 * the model can call.
		 */
		tool_choice?: ToolChoiceOptions;

		/**
		 * The truncation strategy to use for the model response.
		 * - `auto`: If the context of this response and previous ones exceeds
		 * the model's context window size, the model will truncate the
		 * response to fit the context window by dropping input items in the
		 * middle of the conversation.
		 * - `disabled` (default): If a model response will exceed the context window
		 * size for a model, the request will fail with a 400 error.
		 */
		truncation?: CreateResponseTruncation | null;
	}


	/**
	 * **o-series models only**
	 * Configuration options for 
	 * [reasoning models](https://platform.openai.com/docs/guides/reasoning).
	 */
	export interface Reasoning {

		/**
		 * **o-series models only**
		 * Constrains effort on reasoning for
		 * [reasoning models](https://platform.openai.com/docs/guides/reasoning).
		 * Currently supported values are `low`, `medium`, and `high`. Reducing
		 * reasoning effort can result in faster responses and fewer tokens used
		 * on reasoning in a response.
		 */
		effort?: CreateAssistantRequestReasoning_effort | null;

		/**
		 * A summary of the reasoning performed by the model. This can be
		 * useful for debugging and understanding the model's reasoning process.
		 * One of `auto`, `concise`, or `detailed`.
		 */
		summary?: ReasoningSummary | null;

		/**
		 * **Deprecated:** use `summary` instead.
		 * A summary of the reasoning performed by the model. This can be
		 * useful for debugging and understanding the model's reasoning process.
		 * One of `auto`, `concise`, or `detailed`.
		 */
		generate_summary?: ReasoningSummary | null;
	}

	export enum ReasoningSummary { auto = 0, concise = 1, detailed = 2 }

	export interface CreateResponseText {

		/**
		 * An object specifying the format that the model must output.
		 * Configuring `{ "type": "json_schema" }` enables Structured Outputs,
		 * which ensures the model will match your supplied JSON schema. Learn more in the
		 * [Structured Outputs guide](/docs/guides/structured-outputs).
		 * The default format is `{ "type": "text" }` with no additional options.
		 * **Not recommended for gpt-4o and newer models:**
		 * Setting to `{ "type": "json_object" }` enables the older JSON mode, which
		 * ensures the message the model generates is valid JSON. Using `json_schema`
		 * is preferred for models that support it.
		 */
		format?: TextResponseFormatConfiguration;
	}


	/**
	 * Controls which (if any) tool is called by the model.
	 * `none` means the model will not call any tool and instead generates a message.
	 * `auto` means the model can pick between generating a message or calling one or
	 * more tools.
	 * `required` means the model must call one or more tools.
	 */
	export enum ToolChoiceOptions { none = 0, auto = 1, required = 2 }

	export enum CreateResponseTruncation { auto = 0, disabled = 1 }

	export interface CreateRunRequest {

		/**
		 * The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run.
		 * Required
		 */
		assistant_id: string;

		/** The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used. */
		model?: string;

		/**
		 * **o-series models only**
		 * Constrains effort on reasoning for
		 * [reasoning models](https://platform.openai.com/docs/guides/reasoning).
		 * Currently supported values are `low`, `medium`, and `high`. Reducing
		 * reasoning effort can result in faster responses and fewer tokens used
		 * on reasoning in a response.
		 */
		reasoning_effort?: CreateAssistantRequestReasoning_effort | null;

		/** Overrides the [instructions](/docs/api-reference/assistants/createAssistant) of the assistant. This is useful for modifying the behavior on a per-run basis. */
		instructions?: string | null;

		/** Appends additional instructions at the end of the instructions for the run. This is useful for modifying the behavior on a per-run basis without overriding other instructions. */
		additional_instructions?: string | null;

		/** Adds additional messages to the thread before creating the run. */
		additional_messages?: Array<CreateMessageRequest>;

		/**
		 * Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis.
		 * Maximum items: 20
		 * Array member types: AssistantToolsCode, AssistantToolsFileSearch, AssistantToolsFunction
		 */
		tools?: Array<any>;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;

		/**
		 * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
		 * Minimum: 0
		 * Maximum: 2
		 */
		temperature?: number | null;

		/**
		 * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
		 * We generally recommend altering this or temperature but not both.
		 * Minimum: 0
		 * Maximum: 1
		 */
		top_p?: number | null;

		/**
		 * If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
		 */
		stream?: boolean | null;

		/**
		 * The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
		 * Minimum: 256
		 */
		max_prompt_tokens?: number | null;

		/**
		 * The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
		 * Minimum: 256
		 */
		max_completion_tokens?: number | null;
		truncation_strategy?: TruncationObject;
		tool_choice?: AssistantsApiToolChoiceOption;

		/** Whether to enable [parallel function calling](/docs/guides/function-calling#configuring-parallel-function-calling) during tool use. */
		parallel_tool_calls?: boolean | null;

		/**
		 * Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since `gpt-3.5-turbo-1106`.
		 * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).
		 * Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.
		 * **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.
		 */
		response_format?: AssistantsApiResponseFormatOption;
	}


	/** Controls for how a thread will be truncated prior to the run. Use this to control the intial context window of the run. */
	export interface TruncationObject {

		/**
		 * The truncation strategy to use for the thread. The default is `auto`. If set to `last_messages`, the thread will be truncated to the n most recent messages in the thread. When set to `auto`, messages in the middle of the thread will be dropped to fit the context length of the model, `max_prompt_tokens`.
		 * Required
		 */
		type: TruncationObjectType;

		/**
		 * The number of most recent messages from the thread when constructing the context for the run.
		 * Minimum: 1
		 */
		last_messages?: number | null;
	}

	export enum TruncationObjectType { auto = 0, last_messages = 1 }

	export interface CreateSpeechRequest {

		/**
		 * One of the available [TTS models](/docs/models#tts): `tts-1`, `tts-1-hd` or `gpt-4o-mini-tts`.
		 * Required
		 */
		model: string;

		/**
		 * The text to generate audio for. The maximum length is 4096 characters.
		 * Required
		 * Max length: 4096
		 */
		input: string;

		/**
		 * Control the voice of your generated audio with additional instructions. Does not work with `tts-1` or `tts-1-hd`.
		 * Max length: 4096
		 */
		instructions?: string | null;

		/** Required */
		voice: VoiceIdsShared;

		/** The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`. */
		response_format?: CreateSpeechRequestResponse_format | null;

		/**
		 * The speed of the generated audio. Select a value from `0.25` to `4.0`. `1.0` is the default.
		 * Minimum: 0.25
		 * Maximum: 4
		 */
		speed?: number | null;
	}

	export enum CreateSpeechRequestResponse_format { mp3 = 0, opus = 1, aac = 2, flac = 3, wav = 4, pcm = 5 }

	export interface CreateThreadAndRunRequest {

		/**
		 * The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run.
		 * Required
		 */
		assistant_id: string;

		/**
		 * Options to create a new thread. If no thread is provided when running a
		 * request, an empty thread will be created.
		 */
		thread?: CreateThreadRequest;

		/** The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used. */
		model?: string;

		/** Override the default system message of the assistant. This is useful for modifying the behavior on a per-run basis. */
		instructions?: string | null;

		/**
		 * Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis.
		 * Maximum items: 20
		 * Array member types: AssistantToolsCode, AssistantToolsFileSearch, AssistantToolsFunction
		 */
		tools?: Array<any>;

		/**
		 * A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
		 */
		tool_resources?: CreateThreadAndRunRequestTool_resources;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;

		/**
		 * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
		 * Minimum: 0
		 * Maximum: 2
		 */
		temperature?: number | null;

		/**
		 * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
		 * We generally recommend altering this or temperature but not both.
		 * Minimum: 0
		 * Maximum: 1
		 */
		top_p?: number | null;

		/**
		 * If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
		 */
		stream?: boolean | null;

		/**
		 * The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
		 * Minimum: 256
		 */
		max_prompt_tokens?: number | null;

		/**
		 * The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
		 * Minimum: 256
		 */
		max_completion_tokens?: number | null;
		truncation_strategy?: TruncationObject;
		tool_choice?: AssistantsApiToolChoiceOption;

		/** Whether to enable [parallel function calling](/docs/guides/function-calling#configuring-parallel-function-calling) during tool use. */
		parallel_tool_calls?: boolean | null;

		/**
		 * Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since `gpt-3.5-turbo-1106`.
		 * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).
		 * Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.
		 * **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.
		 */
		response_format?: AssistantsApiResponseFormatOption;
	}


	/**
	 * Options to create a new thread. If no thread is provided when running a 
	 * request, an empty thread will be created.
	 */
	export interface CreateThreadRequest {

		/** A list of [messages](/docs/api-reference/messages) to start the thread with. */
		messages?: Array<CreateMessageRequest>;

		/**
		 * A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
		 */
		tool_resources?: CreateThreadRequestTool_resources;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;
	}

	export interface CreateThreadRequestTool_resources {
		code_interpreter?: CreateThreadRequestTool_resourcesCode_interpreter;
		file_search?: CreateThreadRequestTool_resourcesFile_search;
	}

	export interface CreateThreadRequestTool_resourcesCode_interpreter {

		/**
		 * A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
		 * Maximum items: 20
		 */
		file_ids?: Array<string>;
	}

	export interface CreateThreadRequestTool_resourcesFile_search {

		/**
		 * The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.
		 * Maximum items: 1
		 */
		vector_store_ids?: Array<string>;

		/**
		 * A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this thread. There can be a maximum of 1 vector store attached to the thread.
		 * Maximum items: 1
		 */
		CreateThreadRequestTool_resourcesFile_searchVector_stores?: Array<CreateThreadRequestTool_resourcesFile_searchVector_stores>;
	}

	export interface CreateThreadRequestTool_resourcesFile_searchVector_stores {

		/**
		 * A list of [file](/docs/api-reference/files) IDs to add to the vector store. There can be a maximum of 10000 files in a vector store.
		 * Maximum items: 10000
		 */
		file_ids?: Array<string>;

		/** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
		chunking_strategy?: string | null;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;
	}

	export interface CreateThreadAndRunRequestTool_resources {
		code_interpreter?: CreateThreadAndRunRequestTool_resourcesCode_interpreter;
		file_search?: CreateThreadAndRunRequestTool_resourcesFile_search;
	}

	export interface CreateThreadAndRunRequestTool_resourcesCode_interpreter {

		/**
		 * A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
		 * Maximum items: 20
		 */
		file_ids?: Array<string>;
	}

	export interface CreateThreadAndRunRequestTool_resourcesFile_search {

		/**
		 * The ID of the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
		 * Maximum items: 1
		 */
		vector_store_ids?: Array<string>;
	}

	export interface CreateTranscriptionRequest {

		/**
		 * The audio file object (not file name) to transcribe, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
		 * Required
		 */
		file: string;

		/**
		 * ID of the model to use. The options are `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `whisper-1` (which is powered by our open source Whisper V2 model).
		 * Required
		 */
		model: string;

		/**
		 * The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format will improve accuracy and latency.
		 */
		language?: string | null;

		/**
		 * An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text#prompting) should match the audio language.
		 */
		prompt?: string | null;

		/**
		 * The format of the output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`. For `gpt-4o-transcribe` and `gpt-4o-mini-transcribe`, the only supported format is `json`.
		 */
		response_format?: AudioResponseFormat | null;

		/**
		 * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * Additional information to include in the transcription response.
		 * `logprobs` will return the log probabilities of the tokens in the
		 * response to understand the model's confidence in the transcription.
		 * `logprobs` only works with response_format set to `json` and only with
		 * the models `gpt-4o-transcribe` and `gpt-4o-mini-transcribe`.
		 */
		'include[]'?: Array<TranscriptionInclude>;

		/**
		 * The timestamp granularities to populate for this transcription. `response_format` must be set `verbose_json` to use timestamp granularities. Either or both of these options are supported: `word`, or `segment`. Note: There is no additional latency for segment timestamps, but generating word timestamps incurs additional latency.
		 */
		'timestamp_granularities[]'?: Array<string>;

		/**
		 * If set to true, the model response data will be streamed to the client
		 * as it is generated using [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format).
		 * See the [Streaming section of the Speech-to-Text guide](/docs/guides/speech-to-text?lang=curl#streaming-transcriptions)
		 * for more information.
		 * Note: Streaming is not supported for the `whisper-1` model and will be ignored.
		 */
		stream?: boolean | null;
	}

	export enum TranscriptionInclude { logprobs = 0 }


	/** Represents a transcription response returned by model, based on the provided input. */
	export interface CreateTranscriptionResponseJson {

		/**
		 * The transcribed text.
		 * Required
		 */
		text: string;

		/**
		 * The log probabilities of the tokens in the transcription. Only returned with the models `gpt-4o-transcribe` and `gpt-4o-mini-transcribe` if `logprobs` is added to the `include` array.
		 */
		CreateTranscriptionResponseJsonLogprobs?: Array<CreateTranscriptionResponseJsonLogprobs>;
	}

	export interface CreateTranscriptionResponseJsonLogprobs {

		/** The token in the transcription. */
		token?: string | null;

		/**
		 * The log probability of the token.
		 * Type: double
		 */
		logprob?: number | null;

		/** The bytes of the token. */
		bytes?: Array<number>;
	}

	export interface CreateTranscriptionResponseStreamEvent {
	}


	/** Represents a verbose json transcription response returned by model, based on the provided input. */
	export interface CreateTranscriptionResponseVerboseJson {

		/**
		 * The language of the input audio.
		 * Required
		 */
		language: string;

		/**
		 * The duration of the input audio.
		 * Required
		 * Type: double
		 */
		duration: number;

		/**
		 * The transcribed text.
		 * Required
		 */
		text: string;

		/** Extracted words and their corresponding timestamps. */
		words?: Array<TranscriptionWord>;

		/** Segments of the transcribed text and their corresponding details. */
		segments?: Array<TranscriptionSegment>;
	}

	export interface TranscriptionWord {

		/**
		 * The text content of the word.
		 * Required
		 */
		word: string;

		/**
		 * Start time of the word in seconds.
		 * Required
		 * Type: float
		 */
		start: number;

		/**
		 * End time of the word in seconds.
		 * Required
		 * Type: float
		 */
		end: number;
	}

	export interface TranscriptionSegment {

		/**
		 * Unique identifier of the segment.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/**
		 * Seek offset of the segment.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seek: number;

		/**
		 * Start time of the segment in seconds.
		 * Required
		 * Type: float
		 */
		start: number;

		/**
		 * End time of the segment in seconds.
		 * Required
		 * Type: float
		 */
		end: number;

		/**
		 * Text content of the segment.
		 * Required
		 */
		text: string;

		/**
		 * Array of token IDs for the text content.
		 * Required
		 */
		tokens: Array<number>;

		/**
		 * Temperature parameter used for generating the segment.
		 * Required
		 * Type: float
		 */
		temperature: number;

		/**
		 * Average logprob of the segment. If the value is lower than -1, consider the logprobs failed.
		 * Required
		 * Type: float
		 */
		avg_logprob: number;

		/**
		 * Compression ratio of the segment. If the value is greater than 2.4, consider the compression failed.
		 * Required
		 * Type: float
		 */
		compression_ratio: number;

		/**
		 * Probability of no speech in the segment. If the value is higher than 1.0 and the `avg_logprob` is below -1, consider this segment silent.
		 * Required
		 * Type: float
		 */
		no_speech_prob: number;
	}

	export interface CreateTranslationRequest {

		/**
		 * The audio file object (not file name) translate, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
		 * Required
		 */
		file: string;

		/**
		 * ID of the model to use. Only `whisper-1` (which is powered by our open source Whisper V2 model) is currently available.
		 * Required
		 */
		model: string;

		/**
		 * An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text#prompting) should be in English.
		 */
		prompt?: string | null;

		/**
		 * The format of the output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`.
		 */
		response_format?: AudioResponseFormat | null;

		/**
		 * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
		 * Type: double
		 */
		temperature?: number | null;
	}

	export interface CreateTranslationResponseJson {

		/** Required */
		text: string;
	}

	export interface CreateTranslationResponseVerboseJson {

		/**
		 * The language of the output translation (always `english`).
		 * Required
		 */
		language: string;

		/**
		 * The duration of the input audio.
		 * Required
		 * Type: double
		 */
		duration: number;

		/**
		 * The translated text.
		 * Required
		 */
		text: string;

		/** Segments of the translated text and their corresponding details. */
		segments?: Array<TranscriptionSegment>;
	}

	export interface CreateUploadRequest {

		/**
		 * The name of the file to upload.
		 * Required
		 */
		filename: string;

		/**
		 * The intended purpose of the uploaded file.
		 * See the [documentation on File purposes](/docs/api-reference/files/create#files-create-purpose).
		 * Required
		 */
		purpose: CreateUploadRequestPurpose;

		/**
		 * The number of bytes in the file you are uploading.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes: number;

		/**
		 * The MIME type of the file.
		 * This must fall within the supported MIME types for your file purpose. See the supported MIME types for assistants and vision.
		 * Required
		 */
		mime_type: string;
	}

	export enum CreateUploadRequestPurpose { assistants = 0, batch = 1, 'fine-tune' = 2, vision = 3 }

	export interface CreateVectorStoreFileBatchRequest {

		/**
		 * A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 500
		 */
		file_ids: Array<string>;

		/** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
		chunking_strategy?: ChunkingStrategyRequestParam;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard. Keys are strings
		 * with a maximum length of 64 characters. Values are strings with a maximum
		 * length of 512 characters, booleans, or numbers.
		 */
		attributes?: VectorStoreFileAttributes;
	}


	/**
	 * Set of 16 key-value pairs that can be attached to an object. This can be 
	 * useful for storing additional information about the object in a structured 
	 * format, and querying for objects via API or the dashboard. Keys are strings 
	 * with a maximum length of 64 characters. Values are strings with a maximum 
	 * length of 512 characters, booleans, or numbers.
	 */
	export interface VectorStoreFileAttributes {
	}

	export interface CreateVectorStoreFileRequest {

		/**
		 * A [File](/docs/api-reference/files) ID that the vector store should use. Useful for tools like `file_search` that can access files.
		 * Required
		 */
		file_id: string;

		/** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
		chunking_strategy?: ChunkingStrategyRequestParam;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard. Keys are strings
		 * with a maximum length of 64 characters. Values are strings with a maximum
		 * length of 512 characters, booleans, or numbers.
		 */
		attributes?: VectorStoreFileAttributes;
	}

	export interface CreateVectorStoreRequest {

		/**
		 * A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files.
		 * Maximum items: 500
		 */
		file_ids?: Array<string>;

		/** The name of the vector store. */
		name?: string | null;

		/** The expiration policy for a vector store. */
		expires_after?: VectorStoreExpirationAfter;

		/** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. Only applicable if `file_ids` is non-empty. */
		chunking_strategy?: string | null;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;
	}


	/** The expiration policy for a vector store. */
	export interface VectorStoreExpirationAfter {

		/**
		 * Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`.
		 * Required
		 */
		anchor: VectorStoreExpirationAfterAnchor;

		/**
		 * The number of days after the anchor time that the vector store will expire.
		 * Required
		 * Minimum: 1
		 * Maximum: 365
		 */
		days: number;
	}

	export enum VectorStoreExpirationAfterAnchor { last_active_at = 0 }

	export interface DeleteAssistantResponse {

		/** Required */
		id: string;

		/** Required */
		deleted: boolean;

		/** Required */
		object: DeleteAssistantResponseObject;
	}

	export enum DeleteAssistantResponseObject { 'assistant.deleted' = 0 }

	export interface DeleteCertificateResponse {

		/**
		 * The object type, must be `certificate.deleted`.
		 * Required
		 */
		object: DeleteCertificateResponseObject;

		/**
		 * The ID of the certificate that was deleted.
		 * Required
		 */
		id: string;
	}

	export enum DeleteCertificateResponseObject { 'certificate.deleted' = 0 }

	export interface DeleteFileResponse {

		/** Required */
		id: string;

		/** Required */
		object: ChatCompletionRequestMessageContentPartFileType;

		/** Required */
		deleted: boolean;
	}

	export interface DeleteFineTuningCheckpointPermissionResponse {

		/**
		 * The ID of the fine-tuned model checkpoint permission that was deleted.
		 * Required
		 */
		id: string;

		/**
		 * The object type, which is always "checkpoint.permission".
		 * Required
		 */
		object: DeleteFineTuningCheckpointPermissionResponseObject;

		/**
		 * Whether the fine-tuned model checkpoint permission was successfully deleted.
		 * Required
		 */
		deleted: boolean;
	}

	export enum DeleteFineTuningCheckpointPermissionResponseObject { 'checkpoint.permission' = 0 }

	export interface DeleteMessageResponse {

		/** Required */
		id: string;

		/** Required */
		deleted: boolean;

		/** Required */
		object: DeleteMessageResponseObject;
	}

	export enum DeleteMessageResponseObject { 'thread.message.deleted' = 0 }

	export interface DeleteModelResponse {

		/** Required */
		id: string;

		/** Required */
		deleted: boolean;

		/** Required */
		object: string;
	}

	export interface DeleteThreadResponse {

		/** Required */
		id: string;

		/** Required */
		deleted: boolean;

		/** Required */
		object: DeleteThreadResponseObject;
	}

	export enum DeleteThreadResponseObject { 'thread.deleted' = 0 }

	export interface DeleteVectorStoreFileResponse {

		/** Required */
		id: string;

		/** Required */
		deleted: boolean;

		/** Required */
		object: DeleteVectorStoreFileResponseObject;
	}

	export enum DeleteVectorStoreFileResponseObject { 'vector_store.file.deleted' = 0 }

	export interface DeleteVectorStoreResponse {

		/** Required */
		id: string;

		/** Required */
		deleted: boolean;

		/** Required */
		object: DeleteVectorStoreResponseObject;
	}

	export enum DeleteVectorStoreResponseObject { 'vector_store.deleted' = 0 }


	/** Occurs when a stream ends. */
	export interface DoneEvent {

		/** Required */
		event: DoneEventEvent;

		/** Required */
		data: DoneEventData;
	}

	export enum DoneEventEvent { done = 0 }

	export enum DoneEventData { '[DONE]' = 0 }


	/**
	 * A double click action.
	 */
	export interface DoubleClick {

		/**
		 * Specifies the event type. For a double click action, this property is
		 * always set to `double_click`.
		 * Required
		 */
		type: DoubleClickType;

		/**
		 * The x-coordinate where the double click occurred.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x: number;

		/**
		 * The y-coordinate where the double click occurred.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y: number;
	}

	export enum DoubleClickType { double_click = 0 }


	/**
	 * A drag action.
	 */
	export interface Drag {

		/**
		 * Specifies the event type. For a drag action, this property is
		 * always set to `drag`.
		 * Required
		 */
		type: DragType;

		/**
		 * An array of coordinates representing the path of the drag action. Coordinates will appear as an array
		 * of objects, eg
		 * ```
		 * [
		 * { x: 100, y: 200 },
		 * { x: 200, y: 300 }
		 * ]
		 * ```
		 * Required
		 */
		path: Array<Coordinate>;
	}

	export enum DragType { drag = 0 }


	/**
	 * A message input to the model with a role indicating instruction following
	 * hierarchy. Instructions given with the `developer` or `system` role take
	 * precedence over instructions given with the `user` role. Messages with the
	 * `assistant` role are presumed to have been generated by the model in previous
	 * interactions.
	 */
	export interface EasyInputMessage {

		/**
		 * The role of the message input. One of `user`, `assistant`, `system`, or
		 * `developer`.
		 * Required
		 */
		role: EasyInputMessageRole;

		/**
		 * Text, image, or audio input to the model, used to generate a response.
		 * Can also contain previous assistant responses.
		 * Required
		 */
		content: string;

		/**
		 * The type of the message input. Always `message`.
		 */
		type?: EasyInputMessageType | null;
	}

	export enum EasyInputMessageRole { user = 0, assistant = 1, system = 2, developer = 3 }

	export enum EasyInputMessageType { message = 0 }

	export interface Error {

		/** Required */
		code: string;

		/** Required */
		message: string;

		/** Required */
		param: string;

		/** Required */
		type: string;
	}


	/** Occurs when an [error](/docs/guides/error-codes#api-errors) occurs. This can happen due to an internal server error or a timeout. */
	export interface ErrorEvent {

		/** Required */
		event: ErrorEventEvent;

		/** Required */
		data: Error;
	}

	export enum ErrorEventEvent { error = 0 }

	export interface ErrorResponse {

		/** Required */
		error: Error;
	}


	/**
	 * An Eval object with a data source config and testing criteria.
	 * An Eval represents a task to be done for your LLM integration.
	 * Like:
	 *  - Improve the quality of my chatbot
	 *  - See how well my chatbot handles customer support
	 *  - Check if o3-mini is better at my usecase than gpt-4o
	 */
	export interface Eval {

		/**
		 * The object type.
		 * Required
		 */
		object: EvalObject;

		/**
		 * Unique identifier for the evaluation.
		 * Required
		 */
		id: string;

		/**
		 * The name of the evaluation.
		 * Required
		 */
		name: string;

		/**
		 * Configuration of data sources used in runs of the evaluation.
		 * Required
		 */
		data_source_config: string;

		/**
		 * A list of testing criteria.
		 * Required
		 * Array member types: EvalLabelModelGrader, EvalStringCheckGrader, EvalTextSimilarityGrader, EvalPythonGrader, EvalScoreModelGrader
		 */
		testing_criteria: Array<any>;

		/**
		 * The Unix timestamp (in seconds) for when the eval was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 * Required
		 */
		metadata: Metadata;
	}

	export enum EvalObject { eval = 0 }


	/**
	 * An object representing an error response from the Eval API.
	 */
	export interface EvalApiError {

		/**
		 * The error code.
		 * Required
		 */
		code: string;

		/**
		 * The error message.
		 * Required
		 */
		message: string;
	}


	/**
	 * A CustomDataSourceConfig which specifies the schema of your `item` and optionally `sample` namespaces.
	 * The response schema defines the shape of the data that will be:
	 * - Used to define your testing criteria and
	 * - What data is required when creating a run
	 */
	export interface EvalCustomDataSourceConfig {

		/**
		 * The type of data source. Always `custom`.
		 * Required
		 */
		type: CreateEvalCustomDataSourceConfigType;

		/**
		 * The json schema for the run data source items.
		 * Learn how to build JSON schemas [here](https://json-schema.org/).
		 * Required
		 */
		schema: string;
	}


	/**
	 * A message input to the model with a role indicating instruction following
	 * hierarchy. Instructions given with the `developer` or `system` role take
	 * precedence over instructions given with the `user` role. Messages with the
	 * `assistant` role are presumed to have been generated by the model in previous
	 * interactions.
	 */
	export interface EvalItem {

		/**
		 * The role of the message input. One of `user`, `assistant`, `system`, or
		 * `developer`.
		 * Required
		 */
		role: EasyInputMessageRole;

		/**
		 * Text inputs to the model - can contain template strings.
		 * Required
		 */
		content: string;

		/**
		 * The type of the message input. Always `message`.
		 */
		type?: EasyInputMessageType | null;
	}

	export interface EvalJsonlFileIdSource {

		/**
		 * The type of jsonl source. Always `file_id`.
		 * Required
		 */
		type: EvalJsonlFileIdSourceType;

		/**
		 * The identifier of the file.
		 * Required
		 */
		id: string;
	}

	export enum EvalJsonlFileIdSourceType { file_id = 0 }


	/**
	 * A LabelModelGrader object which uses a model to assign labels to each item
	 * in the evaluation.
	 */
	export interface EvalLabelModelGrader {

		/**
		 * The object type, which is always `label_model`.
		 * Required
		 */
		type: CreateEvalLabelModelGraderType;

		/**
		 * The name of the grader.
		 * Required
		 */
		name: string;

		/**
		 * The model to use for the evaluation. Must support structured outputs.
		 * Required
		 */
		model: string;

		/** Required */
		input: Array<EvalItem>;

		/**
		 * The labels to assign to each item in the evaluation.
		 * Required
		 */
		labels: Array<string>;

		/**
		 * The labels that indicate a passing result. Must be a subset of labels.
		 * Required
		 */
		passing_labels: Array<string>;
	}


	/**
	 * An object representing a list of evals.
	 */
	export interface EvalList {

		/**
		 * The type of this object. It is always set to "list".
		 * Required
		 */
		object: ChatCompletionListObject;

		/**
		 * An array of eval objects.
		 * Required
		 */
		data: Array<Eval>;

		/**
		 * The identifier of the first eval in the data array.
		 * Required
		 */
		first_id: string;

		/**
		 * The identifier of the last eval in the data array.
		 * Required
		 */
		last_id: string;

		/**
		 * Indicates whether there are more evals available.
		 * Required
		 */
		has_more: boolean;
	}


	/**
	 * A PythonGrader object that runs a python script on the input.
	 */
	export interface EvalPythonGrader {

		/**
		 * The object type, which is always `python`.
		 * Required
		 */
		type: EvalPythonGraderType;

		/**
		 * The name of the grader.
		 * Required
		 */
		name: string;

		/**
		 * The source code of the python script.
		 * Required
		 */
		source: string;

		/**
		 * The threshold for the score.
		 * Type: double
		 */
		pass_threshold?: number | null;

		/** The image tag to use for the python script. */
		image_tag?: string | null;
	}

	export enum EvalPythonGraderType { python = 0 }


	/**
	 * A EvalResponsesSource object describing a run data source configuration.
	 */
	export interface EvalResponsesSource {

		/**
		 * The type of run data source. Always `responses`.
		 * Required
		 */
		type: EvalResponsesSourceType;

		/** Metadata filter for the responses. This is a query parameter used to select responses. */
		metadata?: string | null;

		/** The name of the model to find responses for. This is a query parameter used to select responses. */
		model?: string | null;

		/** Optional search string for instructions. This is a query parameter used to select responses. */
		instructions_search?: string | null;

		/**
		 * Only include items created after this timestamp (inclusive). This is a query parameter used to select responses.
		 * Minimum: 0
		 */
		created_after?: number | null;

		/**
		 * Only include items created before this timestamp (inclusive). This is a query parameter used to select responses.
		 * Minimum: 0
		 */
		created_before?: number | null;

		/** Whether the response has tool calls. This is a query parameter used to select responses. */
		has_tool_calls?: boolean | null;

		/**
		 * **o-series models only**
		 * Constrains effort on reasoning for
		 * [reasoning models](https://platform.openai.com/docs/guides/reasoning).
		 * Currently supported values are `low`, `medium`, and `high`. Reducing
		 * reasoning effort can result in faster responses and fewer tokens used
		 * on reasoning in a response.
		 */
		reasoning_effort?: CreateAssistantRequestReasoning_effort | null;

		/**
		 * Sampling temperature. This is a query parameter used to select responses.
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * Nucleus sampling parameter. This is a query parameter used to select responses.
		 * Type: double
		 */
		top_p?: number | null;

		/** List of user identifiers. This is a query parameter used to select responses. */
		users?: Array<string>;

		/** Whether to allow parallel tool calls. This is a query parameter used to select responses. */
		allow_parallel_tool_calls?: boolean | null;
	}

	export enum EvalResponsesSourceType { responses = 0 }


	/**
	 * A schema representing an evaluation run.
	 */
	export interface EvalRun {

		/**
		 * The type of the object. Always "eval.run".
		 * Required
		 */
		object: EvalRunObject;

		/**
		 * Unique identifier for the evaluation run.
		 * Required
		 */
		id: string;

		/**
		 * The identifier of the associated evaluation.
		 * Required
		 */
		eval_id: string;

		/**
		 * The status of the evaluation run.
		 * Required
		 */
		status: string;

		/**
		 * The model that is evaluated, if applicable.
		 * Required
		 */
		model: string;

		/**
		 * The name of the evaluation run.
		 * Required
		 */
		name: string;

		/**
		 * Unix timestamp (in seconds) when the evaluation run was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The URL to the rendered evaluation run report on the UI dashboard.
		 * Required
		 */
		report_url: string;

		/**
		 * Counters summarizing the outcomes of the evaluation run.
		 * Required
		 */
		result_counts: EvalRunResult_counts;

		/**
		 * Usage statistics for each model during the evaluation run.
		 * Required
		 */
		EvalRunPer_model_usage: Array<EvalRunPer_model_usage>;

		/**
		 * Results per testing criteria applied during the evaluation run.
		 * Required
		 */
		EvalRunPer_testing_criteria_results: Array<EvalRunPer_testing_criteria_results>;

		/**
		 * Information about the run's data source.
		 * Required
		 */
		data_source: string;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 * Required
		 */
		metadata: Metadata;

		/**
		 * An object representing an error response from the Eval API.
		 * Required
		 */
		error: EvalApiError;
	}

	export enum EvalRunObject { 'eval.run' = 0 }

	export interface EvalRunResult_counts {

		/**
		 * Total number of executed output items.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;

		/**
		 * Number of output items that resulted in an error.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errored: number;

		/**
		 * Number of output items that failed to pass the evaluation.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failed: number;

		/**
		 * Number of output items that passed the evaluation.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passed: number;
	}

	export interface EvalRunPer_model_usage {

		/**
		 * The name of the model.
		 * Required
		 */
		model_name: string;

		/**
		 * The number of invocations.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		invocation_count: number;

		/**
		 * The number of prompt tokens used.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		prompt_tokens: number;

		/**
		 * The number of completion tokens generated.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completion_tokens: number;

		/**
		 * The total number of tokens used.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_tokens: number;

		/**
		 * The number of tokens retrieved from cache.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cached_tokens: number;
	}

	export interface EvalRunPer_testing_criteria_results {

		/**
		 * A description of the testing criteria.
		 * Required
		 */
		testing_criteria: string;

		/**
		 * Number of tests passed for this criteria.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passed: number;

		/**
		 * Number of tests failed for this criteria.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failed: number;
	}


	/**
	 * An object representing a list of runs for an evaluation.
	 */
	export interface EvalRunList {

		/**
		 * The type of this object. It is always set to "list".
		 * Required
		 */
		object: ChatCompletionListObject;

		/**
		 * An array of eval run objects.
		 * Required
		 */
		data: Array<EvalRun>;

		/**
		 * The identifier of the first eval run in the data array.
		 * Required
		 */
		first_id: string;

		/**
		 * The identifier of the last eval run in the data array.
		 * Required
		 */
		last_id: string;

		/**
		 * Indicates whether there are more evals available.
		 * Required
		 */
		has_more: boolean;
	}


	/**
	 * A schema representing an evaluation run output item.
	 */
	export interface EvalRunOutputItem {

		/**
		 * The type of the object. Always "eval.run.output_item".
		 * Required
		 */
		object: EvalRunOutputItemObject;

		/**
		 * Unique identifier for the evaluation run output item.
		 * Required
		 */
		id: string;

		/**
		 * The identifier of the evaluation run associated with this output item.
		 * Required
		 */
		run_id: string;

		/**
		 * The identifier of the evaluation group.
		 * Required
		 */
		eval_id: string;

		/**
		 * Unix timestamp (in seconds) when the evaluation run was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The status of the evaluation run.
		 * Required
		 */
		status: string;

		/**
		 * The identifier for the data source item.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		datasource_item_id: number;

		/**
		 * Details of the input data source item.
		 * Required
		 */
		datasource_item: string;

		/**
		 * A list of results from the evaluation run.
		 * Required
		 */
		results: Array<string>;

		/**
		 * A sample containing the input and output of the evaluation run.
		 * Required
		 */
		sample: EvalRunOutputItemSample;
	}

	export enum EvalRunOutputItemObject { 'eval.run.output_item' = 0 }

	export interface EvalRunOutputItemSample {

		/**
		 * An array of input messages.
		 * Required
		 */
		EvalRunOutputItemSampleInput: Array<EvalRunOutputItemSampleInput>;

		/**
		 * An array of output messages.
		 * Required
		 */
		EvalRunOutputItemSampleOutput: Array<EvalRunOutputItemSampleOutput>;

		/**
		 * The reason why the sample generation was finished.
		 * Required
		 */
		finish_reason: string;

		/**
		 * The model used for generating the sample.
		 * Required
		 */
		model: string;

		/**
		 * Token usage details for the sample.
		 * Required
		 */
		usage: EvalRunOutputItemSampleUsage;

		/**
		 * An object representing an error response from the Eval API.
		 * Required
		 */
		error: EvalApiError;

		/**
		 * The sampling temperature used.
		 * Required
		 * Type: double
		 */
		temperature: number;

		/**
		 * The maximum number of tokens allowed for completion.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_completion_tokens: number;

		/**
		 * The top_p value used for sampling.
		 * Required
		 * Type: double
		 */
		top_p: number;

		/**
		 * The seed used for generating the sample.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seed: number;
	}

	export interface EvalRunOutputItemSampleInput {

		/**
		 * The role of the message sender (e.g., system, user, developer).
		 * Required
		 */
		role: string;

		/**
		 * The content of the message.
		 * Required
		 */
		content: string;
	}

	export interface EvalRunOutputItemSampleOutput {

		/** The role of the message (e.g. "system", "assistant", "user"). */
		role?: string | null;

		/** The content of the message. */
		content?: string | null;
	}

	export interface EvalRunOutputItemSampleUsage {

		/**
		 * The total number of tokens used.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_tokens: number;

		/**
		 * The number of completion tokens generated.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completion_tokens: number;

		/**
		 * The number of prompt tokens used.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		prompt_tokens: number;

		/**
		 * The number of tokens retrieved from cache.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cached_tokens: number;
	}


	/**
	 * An object representing a list of output items for an evaluation run.
	 */
	export interface EvalRunOutputItemList {

		/**
		 * The type of this object. It is always set to "list".
		 * Required
		 */
		object: ChatCompletionListObject;

		/**
		 * An array of eval run output item objects.
		 * Required
		 */
		data: Array<EvalRunOutputItem>;

		/**
		 * The identifier of the first eval run output item in the data array.
		 * Required
		 */
		first_id: string;

		/**
		 * The identifier of the last eval run output item in the data array.
		 * Required
		 */
		last_id: string;

		/**
		 * Indicates whether there are more eval run output items available.
		 * Required
		 */
		has_more: boolean;
	}


	/**
	 * A ScoreModelGrader object that uses a model to assign a score to the input.
	 */
	export interface EvalScoreModelGrader {

		/**
		 * The object type, which is always `score_model`.
		 * Required
		 */
		type: EvalScoreModelGraderType;

		/**
		 * The name of the grader.
		 * Required
		 */
		name: string;

		/**
		 * The model to use for the evaluation.
		 * Required
		 */
		model: string;

		/** The sampling parameters for the model. */
		sampling_params?: string | null;

		/**
		 * The input text. This may include template strings.
		 * Required
		 */
		input: Array<EvalItem>;

		/**
		 * The threshold for the score.
		 * Type: double
		 */
		pass_threshold?: number | null;

		/** The range of the score. Defaults to `[0, 1]`. */
		range?: Array<number>;
	}

	export enum EvalScoreModelGraderType { score_model = 0 }


	/**
	 * A StoredCompletionsDataSourceConfig which specifies the metadata property of your stored completions query.
	 * This is usually metadata like `usecase=chatbot` or `prompt-version=v2`, etc.
	 * The schema returned by this data source config is used to defined what variables are available in your evals.
	 * `item` and `sample` are both defined when using this data source config.
	 */
	export interface EvalStoredCompletionsDataSourceConfig {

		/**
		 * The type of data source. Always `stored_completions`.
		 * Required
		 */
		type: EvalStoredCompletionsDataSourceConfigType;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;

		/**
		 * The json schema for the run data source items.
		 * Learn how to build JSON schemas [here](https://json-schema.org/).
		 * Required
		 */
		schema: string;
	}

	export enum EvalStoredCompletionsDataSourceConfigType { stored_completions = 0 }


	/**
	 * A StoredCompletionsRunDataSource configuration describing a set of filters
	 */
	export interface EvalStoredCompletionsSource {

		/**
		 * The type of source. Always `stored_completions`.
		 * Required
		 */
		type: EvalStoredCompletionsDataSourceConfigType;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;

		/** An optional model to filter by (e.g., 'gpt-4o'). */
		model?: string | null;

		/**
		 * An optional Unix timestamp to filter items created after this time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_after?: number | null;

		/**
		 * An optional Unix timestamp to filter items created before this time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_before?: number | null;

		/**
		 * An optional maximum number of items to return.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;
	}


	/**
	 * A StringCheckGrader object that performs a string comparison between input and reference using a specified operation.
	 */
	export interface EvalStringCheckGrader {

		/**
		 * The object type, which is always `string_check`.
		 * Required
		 */
		type: EvalStringCheckGraderType;

		/**
		 * The name of the grader.
		 * Required
		 */
		name: string;

		/**
		 * The input text. This may include template strings.
		 * Required
		 */
		input: string;

		/**
		 * The reference text. This may include template strings.
		 * Required
		 */
		reference: string;

		/**
		 * The string check operation to perform. One of `eq`, `ne`, `like`, or `ilike`.
		 * Required
		 */
		operation: EvalStringCheckGraderOperation;
	}

	export enum EvalStringCheckGraderType { string_check = 0 }

	export enum EvalStringCheckGraderOperation { eq = 0, ne = 1, like = 2, ilike = 3 }


	/**
	 * A TextSimilarityGrader object which grades text based on similarity metrics.
	 */
	export interface EvalTextSimilarityGrader {

		/**
		 * The type of grader.
		 * Required
		 */
		type: EvalTextSimilarityGraderType;

		/** The name of the grader. */
		name?: string | null;

		/**
		 * The text being graded.
		 * Required
		 */
		input: string;

		/**
		 * The text being graded against.
		 * Required
		 */
		reference: string;

		/**
		 * A float score where a value greater than or equal indicates a passing grade.
		 * Required
		 * Type: double
		 */
		pass_threshold: number;

		/**
		 * The evaluation metric to use. One of `fuzzy_match`, `bleu`, `gleu`, `meteor`, `rouge_1`, `rouge_2`, `rouge_3`, `rouge_4`, `rouge_5`, or `rouge_l`.
		 * Required
		 */
		evaluation_metric: EvalTextSimilarityGraderEvaluation_metric;
	}

	export enum EvalTextSimilarityGraderType { text_similarity = 0 }

	export enum EvalTextSimilarityGraderEvaluation_metric { fuzzy_match = 0, bleu = 1, gleu = 2, meteor = 3, rouge_1 = 4, rouge_2 = 5, rouge_3 = 6, rouge_4 = 7, rouge_5 = 8, rouge_l = 9 }


	/**
	 * A path to a file.
	 */
	export interface FilePath {

		/**
		 * The type of the file path. Always `file_path`.
		 * Required
		 */
		type: FilePathType;

		/**
		 * The ID of the file.
		 * Required
		 */
		file_id: string;

		/**
		 * The index of the file in the list of files.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;
	}

	export enum FilePathType { file_path = 0 }


	/** The ranker to use for the file search. If not specified will use the `auto` ranker. */
	export enum FileSearchRanker { auto = 0, default_2024_08_21 = 1 }


	/**
	 * The results of a file search tool call. See the 
	 * [file search guide](/docs/guides/tools-file-search) for more information.
	 */
	export interface FileSearchToolCall {

		/**
		 * The unique ID of the file search tool call.
		 * Required
		 */
		id: string;

		/**
		 * The type of the file search tool call. Always `file_search_call`.
		 * Required
		 */
		type: FileSearchToolCallType;

		/**
		 * The status of the file search tool call. One of `in_progress`,
		 * `searching`, `incomplete` or `failed`,
		 * Required
		 */
		status: FileSearchToolCallStatus;

		/**
		 * The queries used to search for files.
		 * Required
		 */
		queries: Array<string>;

		/**
		 * The results of the file search tool call.
		 */
		FileSearchToolCallResults?: Array<FileSearchToolCallResults>;
	}

	export enum FileSearchToolCallType { file_search_call = 0 }

	export enum FileSearchToolCallStatus { in_progress = 0, searching = 1, completed = 2, incomplete = 3, failed = 4 }

	export interface FileSearchToolCallResults {

		/**
		 * The unique ID of the file.
		 */
		file_id?: string | null;

		/**
		 * The text that was retrieved from the file.
		 */
		text?: string | null;

		/**
		 * The name of the file.
		 */
		filename?: string | null;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard. Keys are strings
		 * with a maximum length of 64 characters. Values are strings with a maximum
		 * length of 512 characters, booleans, or numbers.
		 */
		attributes?: VectorStoreFileAttributes;

		/**
		 * The relevance score of the file - a value between 0 and 1.
		 * Type: float
		 */
		score?: number | null;
	}

	export interface FineTuneChatCompletionRequestAssistantMessage {
	}


	/** The per-line training example of a fine-tuning input file for chat models using the supervised method. */
	export interface FineTuneChatRequestInput {

		/**
		 * Minimum items: 1
		 * Array member types: ChatCompletionRequestSystemMessage, ChatCompletionRequestUserMessage, FineTuneChatCompletionRequestAssistantMessage, ChatCompletionRequestToolMessage, ChatCompletionRequestFunctionMessage
		 */
		messages?: Array<any>;

		/** A list of tools the model may generate JSON inputs for. */
		tools?: Array<ChatCompletionTool>;

		/** Whether to enable [parallel function calling](/docs/guides/function-calling#configuring-parallel-function-calling) during tool use. */
		parallel_tool_calls?: boolean | null;

		/**
		 * A list of functions the model may generate JSON inputs for.
		 * Minimum items: 1
		 * Maximum items: 128
		 */
		functions?: Array<ChatCompletionFunctions>;
	}


	/** The per-line training example of a fine-tuning input file for completions models */
	export interface FineTuneCompletionRequestInput {

		/** The input prompt for this training example. */
		prompt?: string | null;

		/** The desired completion for this training example. */
		completion?: string | null;
	}


	/** The per-line training example of a fine-tuning input file for chat models using the dpo method. */
	export interface FineTunePreferenceRequestInput {
		input?: FineTunePreferenceRequestInputInput;

		/**
		 * The preferred completion message for the output.
		 * Maximum items: 1
		 * Array member types: ChatCompletionRequestAssistantMessage
		 */
		preferred_completion?: Array<any>;

		/**
		 * The non-preferred completion message for the output.
		 * Maximum items: 1
		 * Array member types: ChatCompletionRequestAssistantMessage
		 */
		non_preferred_completion?: Array<any>;
	}

	export interface FineTunePreferenceRequestInputInput {

		/**
		 * Minimum items: 1
		 * Array member types: ChatCompletionRequestSystemMessage, ChatCompletionRequestUserMessage, FineTuneChatCompletionRequestAssistantMessage, ChatCompletionRequestToolMessage, ChatCompletionRequestFunctionMessage
		 */
		messages?: Array<any>;

		/** A list of tools the model may generate JSON inputs for. */
		tools?: Array<ChatCompletionTool>;

		/** Whether to enable [parallel function calling](/docs/guides/function-calling#configuring-parallel-function-calling) during tool use. */
		parallel_tool_calls?: boolean | null;
	}


	/**
	 * The `checkpoint.permission` object represents a permission for a fine-tuned model checkpoint.
	 */
	export interface FineTuningCheckpointPermission {

		/**
		 * The permission identifier, which can be referenced in the API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The Unix timestamp (in seconds) for when the permission was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The project identifier that the permission is for.
		 * Required
		 */
		project_id: string;

		/**
		 * The object type, which is always "checkpoint.permission".
		 * Required
		 */
		object: DeleteFineTuningCheckpointPermissionResponseObject;
	}

	export interface FineTuningIntegration {

		/**
		 * The type of the integration being enabled for the fine-tuning job
		 * Required
		 */
		type: CreateFineTuningJobRequestIntegrationsType;

		/**
		 * The settings for your integration with Weights and Biases. This payload specifies the project that
		 * metrics will be sent to. Optionally, you can set an explicit display name for your run, add tags
		 * to your run, and set a default entity (team, username, etc) to be associated with your run.
		 * Required
		 */
		wandb: FineTuningIntegrationWandb;
	}

	export interface FineTuningIntegrationWandb {

		/**
		 * The name of the project that the new run will be created under.
		 * Required
		 */
		project: string;

		/**
		 * A display name to set for the run. If not set, we will use the Job ID as the name.
		 */
		name?: string | null;

		/**
		 * The entity to use for the run. This allows you to set the team or username of the WandB user that you would
		 * like associated with the run. If not set, the default entity for the registered WandB API key is used.
		 */
		entity?: string | null;

		/**
		 * A list of tags to be attached to the newly created run. These tags are passed through directly to WandB. Some
		 * default tags are generated by OpenAI: "openai/finetune", "openai/{base-model}", "openai/{ftjob-abcdef}".
		 */
		tags?: Array<string>;
	}


	/**
	 * The `fine_tuning.job` object represents a fine-tuning job that has been created through the API.
	 */
	export interface FineTuningJob {

		/**
		 * The object identifier, which can be referenced in the API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The Unix timestamp (in seconds) for when the fine-tuning job was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * For fine-tuning jobs that have `failed`, this will contain more information on the cause of the failure.
		 * Required
		 */
		error: FineTuningJobError;

		/**
		 * The name of the fine-tuned model that is being created. The value will be null if the fine-tuning job is still running.
		 * Required
		 */
		fine_tuned_model: string;

		/**
		 * The Unix timestamp (in seconds) for when the fine-tuning job was finished. The value will be null if the fine-tuning job is still running.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		finished_at: number;

		/**
		 * The hyperparameters used for the fine-tuning job. This value will only be returned when running `supervised` jobs.
		 * Required
		 */
		hyperparameters: FineTuningJobHyperparameters;

		/**
		 * The base model that is being fine-tuned.
		 * Required
		 */
		model: string;

		/**
		 * The object type, which is always "fine_tuning.job".
		 * Required
		 */
		object: FineTuningJobObject;

		/**
		 * The organization that owns the fine-tuning job.
		 * Required
		 */
		organization_id: string;

		/**
		 * The compiled results file ID(s) for the fine-tuning job. You can retrieve the results with the [Files API](/docs/api-reference/files/retrieve-contents).
		 * Required
		 */
		result_files: Array<string>;

		/**
		 * The current status of the fine-tuning job, which can be either `validating_files`, `queued`, `running`, `succeeded`, `failed`, or `cancelled`.
		 * Required
		 */
		status: FineTuningJobStatus;

		/**
		 * The total number of billable tokens processed by this fine-tuning job. The value will be null if the fine-tuning job is still running.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		trained_tokens: number;

		/**
		 * The file ID used for training. You can retrieve the training data with the [Files API](/docs/api-reference/files/retrieve-contents).
		 * Required
		 */
		training_file: string;

		/**
		 * The file ID used for validation. You can retrieve the validation results with the [Files API](/docs/api-reference/files/retrieve-contents).
		 * Required
		 */
		validation_file: string;

		/**
		 * A list of integrations to enable for this fine-tuning job.
		 * Maximum items: 5
		 * Array member types: FineTuningIntegration
		 */
		integrations?: Array<any>;

		/**
		 * The seed used for the fine-tuning job.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seed: number;

		/**
		 * The Unix timestamp (in seconds) for when the fine-tuning job is estimated to finish. The value will be null if the fine-tuning job is not running.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		estimated_finish?: number | null;

		/** The method used for fine-tuning. */
		method?: FineTuneMethod;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;
	}

	export interface FineTuningJobError {

		/**
		 * A machine-readable error code.
		 * Required
		 */
		code: string;

		/**
		 * A human-readable error message.
		 * Required
		 */
		message: string;

		/**
		 * The parameter that was invalid, usually `training_file` or `validation_file`. This field will be null if the failure was not parameter-specific.
		 * Required
		 */
		param: string;
	}

	export interface FineTuningJobHyperparameters {

		/**
		 * Number of examples in each batch. A larger batch size means that model parameters
		 * are updated less frequently, but with lower variance.
		 */
		batch_size?: AutoChunkingStrategyRequestParamType;

		/**
		 * Scaling factor for the learning rate. A smaller learning rate may be useful to avoid
		 * overfitting.
		 */
		learning_rate_multiplier?: AutoChunkingStrategyRequestParamType;

		/**
		 * The number of epochs to train the model for. An epoch refers to one full cycle
		 * through the training dataset.
		 */
		n_epochs?: AutoChunkingStrategyRequestParamType;
	}

	export enum FineTuningJobObject { 'fine_tuning.job' = 0 }

	export enum FineTuningJobStatus { validating_files = 0, queued = 1, running = 2, succeeded = 3, failed = 4, cancelled = 5 }


	/**
	 * The `fine_tuning.job.checkpoint` object represents a model checkpoint for a fine-tuning job that is ready to use.
	 */
	export interface FineTuningJobCheckpoint {

		/**
		 * The checkpoint identifier, which can be referenced in the API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The Unix timestamp (in seconds) for when the checkpoint was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The name of the fine-tuned checkpoint model that is created.
		 * Required
		 */
		fine_tuned_model_checkpoint: string;

		/**
		 * The step number that the checkpoint was created at.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		step_number: number;

		/**
		 * Metrics at the step number during the fine-tuning job.
		 * Required
		 */
		metrics: FineTuningJobCheckpointMetrics;

		/**
		 * The name of the fine-tuning job that this checkpoint was created from.
		 * Required
		 */
		fine_tuning_job_id: string;

		/**
		 * The object type, which is always "fine_tuning.job.checkpoint".
		 * Required
		 */
		object: FineTuningJobCheckpointObject;
	}

	export interface FineTuningJobCheckpointMetrics {

		/** Type: double */
		step?: number | null;

		/** Type: double */
		train_loss?: number | null;

		/** Type: double */
		train_mean_token_accuracy?: number | null;

		/** Type: double */
		valid_loss?: number | null;

		/** Type: double */
		valid_mean_token_accuracy?: number | null;

		/** Type: double */
		full_valid_loss?: number | null;

		/** Type: double */
		full_valid_mean_token_accuracy?: number | null;
	}

	export enum FineTuningJobCheckpointObject { 'fine_tuning.job.checkpoint' = 0 }


	/** Fine-tuning job event object */
	export interface FineTuningJobEvent {

		/**
		 * The object type, which is always "fine_tuning.job.event".
		 * Required
		 */
		object: FineTuningJobEventObject;

		/**
		 * The object identifier.
		 * Required
		 */
		id: string;

		/**
		 * The Unix timestamp (in seconds) for when the fine-tuning job was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The log level of the event.
		 * Required
		 */
		level: FineTuningJobEventLevel;

		/**
		 * The message of the event.
		 * Required
		 */
		message: string;

		/** The type of event. */
		type?: FineTuningJobEventType | null;

		/** The data associated with the event. */
		data?: string | null;
	}

	export enum FineTuningJobEventObject { 'fine_tuning.job.event' = 0 }

	export enum FineTuningJobEventLevel { info = 0, warn = 1, error = 2 }

	export enum FineTuningJobEventType { message = 0, metrics = 1 }


	/**
	 * A tool call to run a function. See the 
	 * [function calling guide](/docs/guides/function-calling) for more information.
	 */
	export interface FunctionToolCall {

		/**
		 * The unique ID of the function tool call.
		 */
		id?: string | null;

		/**
		 * The type of the function tool call. Always `function_call`.
		 * Required
		 */
		type: FunctionToolCallType;

		/**
		 * The unique ID of the function tool call generated by the model.
		 * Required
		 */
		call_id: string;

		/**
		 * The name of the function to run.
		 * Required
		 */
		name: string;

		/**
		 * A JSON string of the arguments to pass to the function.
		 * Required
		 */
		arguments: string;

		/**
		 * The status of the item. One of `in_progress`, `completed`, or
		 * `incomplete`. Populated when items are returned via API.
		 */
		status?: ComputerToolCallStatus | null;
	}

	export enum FunctionToolCallType { function_call = 0 }


	/**
	 * The output of a function tool call.
	 */
	export interface FunctionToolCallOutput {

		/**
		 * The unique ID of the function tool call output. Populated when this item
		 * is returned via API.
		 */
		id?: string | null;

		/**
		 * The type of the function tool call output. Always `function_call_output`.
		 * Required
		 */
		type: FunctionToolCallOutputType;

		/**
		 * The unique ID of the function tool call generated by the model.
		 * Required
		 */
		call_id: string;

		/**
		 * A JSON string of the output of the function tool call.
		 * Required
		 */
		output: string;

		/**
		 * The status of the item. One of `in_progress`, `completed`, or
		 * `incomplete`. Populated when items are returned via API.
		 */
		status?: ComputerToolCallStatus | null;
	}

	export enum FunctionToolCallOutputType { function_call_output = 0 }

	export interface FunctionToolCallOutputResource extends FunctionToolCallOutput {
	}

	export interface FunctionToolCallResource extends FunctionToolCall {
	}


	/** Represents the content or the URL of an image generated by the OpenAI API. */
	export interface Image {

		/** The base64-encoded JSON of the generated image. Default value for `gpt-image-1`, and only present if `response_format` is set to `b64_json` for `dall-e-2` and `dall-e-3`. */
		b64_json?: string | null;

		/** When using `dall-e-2` or `dall-e-3`, the URL of the generated image if `response_format` is set to `url` (default value). Unsupported for `gpt-image-1`. */
		url?: string | null;

		/** For `dall-e-3` only, the revised prompt that was used to generate the image. */
		revised_prompt?: string | null;
	}


	/** The response from the image generation endpoint. */
	export interface ImagesResponse {

		/**
		 * The Unix timestamp (in seconds) of when the image was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created: number;

		/** The list of generated images. */
		data?: Array<Image>;

		/**
		 * For `gpt-image-1` only, the token usage information for the image generation.
		 */
		usage?: ImagesResponseUsage;
	}

	export interface ImagesResponseUsage {

		/**
		 * The total number of tokens (images and text) used for the image generation.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_tokens: number;

		/**
		 * The number of tokens (images and text) in the input prompt.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		input_tokens: number;

		/**
		 * The number of image tokens in the output image.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_tokens: number;

		/**
		 * The input tokens detailed information for the image generation.
		 * Required
		 */
		input_tokens_details: ImagesResponseUsageInput_tokens_details;
	}

	export interface ImagesResponseUsageInput_tokens_details {

		/**
		 * The number of text tokens in the input prompt.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		text_tokens: number;

		/**
		 * The number of image tokens in the input prompt.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		image_tokens: number;
	}


	/**
	 * Specify additional output data to include in the model response. Currently
	 * supported values are:
	 * - `file_search_call.results`: Include the search results of
	 *   the file search tool call.
	 * - `message.input_image.image_url`: Include image urls from the input message.
	 * - `computer_call_output.output.image_url`: Include image urls from the computer call output.
	 */
	export enum Includable { 'file_search_call.results' = 0, 'message.input_image.image_url' = 1, 'computer_call_output.output.image_url' = 2 }


	/**
	 * An audio input to the model.
	 */
	export interface InputAudio {

		/**
		 * The type of the input item. Always `input_audio`.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartAudioType;

		/**
		 * Base64-encoded audio data.
		 * Required
		 */
		data: string;

		/**
		 * The format of the audio data. Currently supported formats are `mp3` and
		 * `wav`.
		 * Required
		 */
		format: InputAudioFormat;
	}

	export enum InputAudioFormat { mp3 = 0, wav = 1 }

	export interface InputContent {
	}

	export interface InputItem {
	}


	/**
	 * A message input to the model with a role indicating instruction following
	 * hierarchy. Instructions given with the `developer` or `system` role take
	 * precedence over instructions given with the `user` role.
	 */
	export interface InputMessage {

		/**
		 * The type of the message input. Always set to `message`.
		 */
		type?: EasyInputMessageType | null;

		/**
		 * The role of the message input. One of `user`, `system`, or `developer`.
		 * Required
		 */
		role: InputMessageRole;

		/**
		 * The status of item. One of `in_progress`, `completed`, or
		 * `incomplete`. Populated when items are returned via API.
		 */
		status?: ComputerToolCallStatus | null;

		/**
		 * A list of one or many input items to the model, containing different content
		 * types.
		 * Required
		 * Array member types: InputTextContent, InputImageContent, InputFileContent
		 */
		content: Array<any>;
	}

	export enum InputMessageRole { user = 0, system = 1, developer = 2 }

	export interface InputMessageResource extends InputMessage {

		/**
		 * The unique ID of the message input.
		 * Required
		 */
		id: string;
	}


	/** Represents an individual `invite` to the organization. */
	export interface Invite {

		/**
		 * The object type, which is always `organization.invite`
		 * Required
		 */
		object: InviteObject;

		/**
		 * The identifier, which can be referenced in API endpoints
		 * Required
		 */
		id: string;

		/**
		 * The email address of the individual to whom the invite was sent
		 * Required
		 */
		email: string;

		/**
		 * `owner` or `reader`
		 * Required
		 */
		role: InviteRole;

		/**
		 * `accepted`,`expired`, or `pending`
		 * Required
		 */
		status: InviteStatus;

		/**
		 * The Unix timestamp (in seconds) of when the invite was sent.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		invited_at: number;

		/**
		 * The Unix timestamp (in seconds) of when the invite expires.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_at: number;

		/**
		 * The Unix timestamp (in seconds) of when the invite was accepted.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accepted_at?: number | null;

		/** The projects that were granted membership upon acceptance of the invite. */
		InviteProjects?: Array<InviteProjects>;
	}

	export enum InviteObject { 'organization.invite' = 0 }

	export enum InviteRole { owner = 0, reader = 1 }

	export enum InviteStatus { accepted = 0, expired = 1, pending = 2 }

	export interface InviteProjects {

		/** Project's public ID */
		id?: string | null;

		/** Project membership role */
		role?: InviteProjectsRole | null;
	}

	export enum InviteProjectsRole { member = 0, owner = 1 }

	export interface InviteDeleteResponse {

		/**
		 * The object type, which is always `organization.invite.deleted`
		 * Required
		 */
		object: InviteDeleteResponseObject;

		/** Required */
		id: string;

		/** Required */
		deleted: boolean;
	}

	export enum InviteDeleteResponseObject { 'organization.invite.deleted' = 0 }

	export interface InviteListResponse {

		/**
		 * The object type, which is always `list`
		 * Required
		 */
		object: ChatCompletionListObject;

		/** Required */
		data: Array<Invite>;

		/** The first `invite_id` in the retrieved `list` */
		first_id?: string | null;

		/** The last `invite_id` in the retrieved `list` */
		last_id?: string | null;

		/** The `has_more` property is used for pagination to indicate there are additional results. */
		has_more?: boolean | null;
	}

	export interface InviteRequest {

		/**
		 * Send an email to this address
		 * Required
		 */
		email: string;

		/**
		 * `owner` or `reader`
		 * Required
		 */
		role: InviteRequestRole;

		/** An array of projects to which membership is granted at the same time the org invite is accepted. If omitted, the user will be invited to the default project for compatibility with legacy behavior. */
		InviteRequestProjects?: Array<InviteRequestProjects>;
	}

	export enum InviteRequestRole { reader = 0, owner = 1 }

	export interface InviteRequestProjects {

		/**
		 * Project's public ID
		 * Required
		 */
		id: string;

		/**
		 * Project membership role
		 * Required
		 */
		role: InviteProjectsRole;
	}


	/**
	 * Content item used to generate a response.
	 */
	export interface Item {
	}


	/**
	 * Content item used to generate a response.
	 */
	export interface ItemResource {
	}


	/**
	 * A collection of keypresses the model would like to perform.
	 */
	export interface KeyPress {

		/**
		 * Specifies the event type. For a keypress action, this property is
		 * always set to `keypress`.
		 * Required
		 */
		type: KeyPressType;

		/**
		 * The combination of keys the model is requesting to be pressed. This is an
		 * array of strings, each representing a key.
		 * Required
		 */
		keys: Array<string>;
	}

	export enum KeyPressType { keypress = 0 }

	export interface ListAssistantsResponse {

		/** Required */
		object: string;

		/** Required */
		data: Array<AssistantObject>;

		/** Required */
		first_id: string;

		/** Required */
		last_id: string;

		/** Required */
		has_more: boolean;
	}

	export interface ListAuditLogsResponse {

		/** Required */
		object: ChatCompletionListObject;

		/** Required */
		data: Array<AuditLog>;

		/** Required */
		first_id: string;

		/** Required */
		last_id: string;

		/** Required */
		has_more: boolean;
	}

	export interface ListBatchesResponse {

		/** Required */
		data: Array<Batch>;
		first_id?: string | null;
		last_id?: string | null;

		/** Required */
		has_more: boolean;

		/** Required */
		object: ChatCompletionListObject;
	}

	export interface ListCertificatesResponse {

		/** Required */
		data: Array<Certificate>;
		first_id?: string | null;
		last_id?: string | null;

		/** Required */
		has_more: boolean;

		/** Required */
		object: ChatCompletionListObject;
	}

	export interface ListFilesResponse {

		/** Required */
		object: string;

		/** Required */
		data: Array<OpenAIFile>;

		/** Required */
		first_id: string;

		/** Required */
		last_id: string;

		/** Required */
		has_more: boolean;
	}


	/** The `File` object represents a document that has been uploaded to OpenAI. */
	export interface OpenAIFile {

		/**
		 * The file identifier, which can be referenced in the API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The size of the file, in bytes.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes: number;

		/**
		 * The Unix timestamp (in seconds) for when the file was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The Unix timestamp (in seconds) for when the file will expire.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_at?: number | null;

		/**
		 * The name of the file.
		 * Required
		 */
		filename: string;

		/**
		 * The object type, which is always `file`.
		 * Required
		 */
		object: ChatCompletionRequestMessageContentPartFileType;

		/**
		 * The intended purpose of the file. Supported values are `assistants`, `assistants_output`, `batch`, `batch_output`, `fine-tune`, `fine-tune-results` and `vision`.
		 * Required
		 */
		purpose: OpenAIFilePurpose;

		/**
		 * Deprecated. The current status of the file, which can be either `uploaded`, `processed`, or `error`.
		 * Required
		 */
		status: OpenAIFileStatus;

		/** Deprecated. For details on why a fine-tuning training file failed validation, see the `error` field on `fine_tuning.job`. */
		status_details?: string | null;
	}

	export enum OpenAIFilePurpose { assistants = 0, assistants_output = 1, batch = 2, batch_output = 3, 'fine-tune' = 4, 'fine-tune-results' = 5, vision = 6 }

	export enum OpenAIFileStatus { uploaded = 0, processed = 1, error = 2 }

	export interface ListFineTuningCheckpointPermissionResponse {

		/** Required */
		data: Array<FineTuningCheckpointPermission>;

		/** Required */
		object: ChatCompletionListObject;
		first_id?: string | null;
		last_id?: string | null;

		/** Required */
		has_more: boolean;
	}

	export interface ListFineTuningJobCheckpointsResponse {

		/** Required */
		data: Array<FineTuningJobCheckpoint>;

		/** Required */
		object: ChatCompletionListObject;
		first_id?: string | null;
		last_id?: string | null;

		/** Required */
		has_more: boolean;
	}

	export interface ListFineTuningJobEventsResponse {

		/** Required */
		data: Array<FineTuningJobEvent>;

		/** Required */
		object: ChatCompletionListObject;

		/** Required */
		has_more: boolean;
	}

	export interface ListMessagesResponse {

		/** Required */
		object: string;

		/** Required */
		data: Array<MessageObject>;

		/** Required */
		first_id: string;

		/** Required */
		last_id: string;

		/** Required */
		has_more: boolean;
	}


	/** Represents a message within a [thread](/docs/api-reference/threads). */
	export interface MessageObject {

		/**
		 * The identifier, which can be referenced in API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The object type, which is always `thread.message`.
		 * Required
		 */
		object: MessageObjectObject;

		/**
		 * The Unix timestamp (in seconds) for when the message was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The [thread](/docs/api-reference/threads) ID that this message belongs to.
		 * Required
		 */
		thread_id: string;

		/**
		 * The status of the message, which can be either `in_progress`, `incomplete`, or `completed`.
		 * Required
		 */
		status: MessageObjectStatus;

		/**
		 * On an incomplete message, details about why the message is incomplete.
		 * Required
		 */
		incomplete_details: MessageObjectIncomplete_details;

		/**
		 * The Unix timestamp (in seconds) for when the message was completed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completed_at: number;

		/**
		 * The Unix timestamp (in seconds) for when the message was marked as incomplete.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		incomplete_at: number;

		/**
		 * The entity that produced the message. One of `user` or `assistant`.
		 * Required
		 */
		role: CreateMessageRequestRole;

		/**
		 * The content of the message in array of text and/or images.
		 * Required
		 * Array member types: MessageContentImageFileObject, MessageContentImageUrlObject, MessageContentTextObject, MessageContentRefusalObject
		 */
		content: Array<any>;

		/**
		 * If applicable, the ID of the [assistant](/docs/api-reference/assistants) that authored this message.
		 * Required
		 */
		assistant_id: string;

		/**
		 * The ID of the [run](/docs/api-reference/runs) associated with the creation of this message. Value is `null` when messages are created manually using the create message or create thread endpoints.
		 * Required
		 */
		run_id: string;

		/**
		 * A list of files attached to the message, and the tools they were added to.
		 * Required
		 */
		MessageObjectAttachments: Array<MessageObjectAttachments>;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 * Required
		 */
		metadata: Metadata;
	}

	export enum MessageObjectObject { 'thread.message' = 0 }

	export enum MessageObjectStatus { in_progress = 0, incomplete = 1, completed = 2 }

	export interface MessageObjectIncomplete_details {

		/**
		 * The reason the message is incomplete.
		 * Required
		 */
		reason: MessageObjectIncomplete_detailsReason;
	}

	export enum MessageObjectIncomplete_detailsReason { content_filter = 0, max_tokens = 1, run_cancelled = 2, run_expired = 3, run_failed = 4 }

	export interface MessageObjectAttachments {

		/** The ID of the file to attach to the message. */
		file_id?: string | null;

		/**
		 * The tools to add this file to.
		 * Array member types: AssistantToolsCode, AssistantToolsFileSearchTypeOnly
		 */
		tools?: Array<any>;
	}

	export interface ListModelsResponse {

		/** Required */
		object: ChatCompletionListObject;

		/** Required */
		data: Array<Model>;
	}


	/** Describes an OpenAI model offering that can be used with the API. */
	export interface Model {

		/**
		 * The model identifier, which can be referenced in the API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The Unix timestamp (in seconds) when the model was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created: number;

		/**
		 * The object type, which is always "model".
		 * Required
		 */
		object: ModelObject;

		/**
		 * The organization that owns the model.
		 * Required
		 */
		owned_by: string;
	}

	export enum ModelObject { model = 0 }

	export interface ListPaginatedFineTuningJobsResponse {

		/** Required */
		data: Array<FineTuningJob>;

		/** Required */
		has_more: boolean;

		/** Required */
		object: ChatCompletionListObject;
	}

	export interface ListRunStepsResponse {

		/** Required */
		object: string;

		/** Required */
		data: Array<RunStepObject>;

		/** Required */
		first_id: string;

		/** Required */
		last_id: string;

		/** Required */
		has_more: boolean;
	}


	/**
	 * Represents a step in execution of a run.
	 */
	export interface RunStepObject {

		/**
		 * The identifier of the run step, which can be referenced in API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The object type, which is always `thread.run.step`.
		 * Required
		 */
		object: RunStepObjectObject;

		/**
		 * The Unix timestamp (in seconds) for when the run step was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The ID of the [assistant](/docs/api-reference/assistants) associated with the run step.
		 * Required
		 */
		assistant_id: string;

		/**
		 * The ID of the [thread](/docs/api-reference/threads) that was run.
		 * Required
		 */
		thread_id: string;

		/**
		 * The ID of the [run](/docs/api-reference/runs) that this run step is a part of.
		 * Required
		 */
		run_id: string;

		/**
		 * The type of run step, which can be either `message_creation` or `tool_calls`.
		 * Required
		 */
		type: RunStepObjectType;

		/**
		 * The status of the run step, which can be either `in_progress`, `cancelled`, `failed`, `completed`, or `expired`.
		 * Required
		 */
		status: RunStepObjectStatus;

		/**
		 * The details of the run step.
		 * Required
		 */
		step_details: string;

		/**
		 * The last error associated with this run step. Will be `null` if there are no errors.
		 * Required
		 */
		last_error: RunStepObjectLast_error;

		/**
		 * The Unix timestamp (in seconds) for when the run step expired. A step is considered expired if the parent run is expired.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expired_at: number;

		/**
		 * The Unix timestamp (in seconds) for when the run step was cancelled.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cancelled_at: number;

		/**
		 * The Unix timestamp (in seconds) for when the run step failed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failed_at: number;

		/**
		 * The Unix timestamp (in seconds) for when the run step completed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completed_at: number;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 * Required
		 */
		metadata: Metadata;

		/**
		 * Usage statistics related to the run step. This value will be `null` while the run step's status is `in_progress`.
		 * Required
		 */
		usage: RunStepCompletionUsage;
	}

	export enum RunStepObjectObject { 'thread.run.step' = 0 }

	export enum RunStepObjectType { message_creation = 0, tool_calls = 1 }

	export enum RunStepObjectStatus { in_progress = 0, cancelled = 1, failed = 2, completed = 3, expired = 4 }

	export interface RunStepObjectLast_error {

		/**
		 * One of `server_error` or `rate_limit_exceeded`.
		 * Required
		 */
		code: RunStepObjectLast_errorCode;

		/**
		 * A human-readable description of the error.
		 * Required
		 */
		message: string;
	}

	export enum RunStepObjectLast_errorCode { server_error = 0, rate_limit_exceeded = 1 }


	/** Usage statistics related to the run step. This value will be `null` while the run step's status is `in_progress`. */
	export interface RunStepCompletionUsage {

		/**
		 * Number of completion tokens used over the course of the run step.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completion_tokens: number;

		/**
		 * Number of prompt tokens used over the course of the run step.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		prompt_tokens: number;

		/**
		 * Total number of tokens used (prompt + completion).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_tokens: number;
	}

	export interface ListRunsResponse {

		/** Required */
		object: string;

		/** Required */
		data: Array<RunObject>;

		/** Required */
		first_id: string;

		/** Required */
		last_id: string;

		/** Required */
		has_more: boolean;
	}


	/** Represents an execution run on a [thread](/docs/api-reference/threads). */
	export interface RunObject {

		/**
		 * The identifier, which can be referenced in API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The object type, which is always `thread.run`.
		 * Required
		 */
		object: RunObjectObject;

		/**
		 * The Unix timestamp (in seconds) for when the run was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The ID of the [thread](/docs/api-reference/threads) that was executed on as a part of this run.
		 * Required
		 */
		thread_id: string;

		/**
		 * The ID of the [assistant](/docs/api-reference/assistants) used for execution of this run.
		 * Required
		 */
		assistant_id: string;

		/**
		 * The status of the run, which can be either `queued`, `in_progress`, `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`, `incomplete`, or `expired`.
		 * Required
		 */
		status: RunObjectStatus;

		/**
		 * Details on the action required to continue the run. Will be `null` if no action is required.
		 * Required
		 */
		required_action: RunObjectRequired_action;

		/**
		 * The last error associated with this run. Will be `null` if there are no errors.
		 * Required
		 */
		last_error: RunObjectLast_error;

		/**
		 * The Unix timestamp (in seconds) for when the run will expire.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_at: number;

		/**
		 * The Unix timestamp (in seconds) for when the run was started.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		started_at: number;

		/**
		 * The Unix timestamp (in seconds) for when the run was cancelled.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cancelled_at: number;

		/**
		 * The Unix timestamp (in seconds) for when the run failed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failed_at: number;

		/**
		 * The Unix timestamp (in seconds) for when the run was completed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completed_at: number;

		/**
		 * Details on why the run is incomplete. Will be `null` if the run is not incomplete.
		 * Required
		 */
		incomplete_details: RunObjectIncomplete_details;

		/**
		 * The model that the [assistant](/docs/api-reference/assistants) used for this run.
		 * Required
		 */
		model: string;

		/**
		 * The instructions that the [assistant](/docs/api-reference/assistants) used for this run.
		 * Required
		 */
		instructions: string;

		/**
		 * The list of tools that the [assistant](/docs/api-reference/assistants) used for this run.
		 * Required
		 * Maximum items: 20
		 * Array member types: AssistantToolsCode, AssistantToolsFileSearch, AssistantToolsFunction
		 */
		tools: Array<any>;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 * Required
		 */
		metadata: Metadata;

		/**
		 * Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.).
		 * Required
		 */
		usage: RunCompletionUsage;

		/**
		 * The sampling temperature used for this run. If not set, defaults to 1.
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * The nucleus sampling value used for this run. If not set, defaults to 1.
		 * Type: double
		 */
		top_p?: number | null;

		/**
		 * The maximum number of prompt tokens specified to have been used over the course of the run.
		 * Required
		 * Minimum: 256
		 */
		max_prompt_tokens: number;

		/**
		 * The maximum number of completion tokens specified to have been used over the course of the run.
		 * Required
		 * Minimum: 256
		 */
		max_completion_tokens: number;

		/** Required */
		truncation_strategy: TruncationObject;

		/** Required */
		tool_choice: AssistantsApiToolChoiceOption;

		/**
		 * Whether to enable [parallel function calling](/docs/guides/function-calling#configuring-parallel-function-calling) during tool use.
		 * Required
		 */
		parallel_tool_calls: boolean;

		/**
		 * Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since `gpt-3.5-turbo-1106`.
		 * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).
		 * Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.
		 * **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.
		 * Required
		 */
		response_format: AssistantsApiResponseFormatOption;
	}

	export enum RunObjectObject { 'thread.run' = 0 }

	export enum RunObjectStatus { queued = 0, in_progress = 1, requires_action = 2, cancelling = 3, cancelled = 4, failed = 5, completed = 6, incomplete = 7, expired = 8 }

	export interface RunObjectRequired_action {

		/**
		 * For now, this is always `submit_tool_outputs`.
		 * Required
		 */
		type: RunObjectRequired_actionType;

		/**
		 * Details on the tool outputs needed for this run to continue.
		 * Required
		 */
		submit_tool_outputs: RunObjectRequired_actionSubmit_tool_outputs;
	}

	export enum RunObjectRequired_actionType { submit_tool_outputs = 0 }

	export interface RunObjectRequired_actionSubmit_tool_outputs {

		/**
		 * A list of the relevant tool calls.
		 * Required
		 */
		tool_calls: Array<RunToolCallObject>;
	}


	/** Tool call objects */
	export interface RunToolCallObject {

		/**
		 * The ID of the tool call. This ID must be referenced when you submit the tool outputs in using the [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs) endpoint.
		 * Required
		 */
		id: string;

		/**
		 * The type of tool call the output is required for. For now, this is always `function`.
		 * Required
		 */
		type: AssistantToolsFunctionType;

		/**
		 * The function definition.
		 * Required
		 */
		function: RunToolCallObjectFunction;
	}

	export interface RunToolCallObjectFunction {

		/**
		 * The name of the function.
		 * Required
		 */
		name: string;

		/**
		 * The arguments that the model expects you to pass to the function.
		 * Required
		 */
		arguments: string;
	}

	export interface RunObjectLast_error {

		/**
		 * One of `server_error`, `rate_limit_exceeded`, or `invalid_prompt`.
		 * Required
		 */
		code: RunObjectLast_errorCode;

		/**
		 * A human-readable description of the error.
		 * Required
		 */
		message: string;
	}

	export enum RunObjectLast_errorCode { server_error = 0, rate_limit_exceeded = 1, invalid_prompt = 2 }

	export interface RunObjectIncomplete_details {

		/** The reason why the run is incomplete. This will point to which specific token limit was reached over the course of the run. */
		reason?: RunObjectIncomplete_detailsReason | null;
	}

	export enum RunObjectIncomplete_detailsReason { max_completion_tokens = 0, max_prompt_tokens = 1 }


	/** Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.). */
	export interface RunCompletionUsage {

		/**
		 * Number of completion tokens used over the course of the run.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completion_tokens: number;

		/**
		 * Number of prompt tokens used over the course of the run.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		prompt_tokens: number;

		/**
		 * Total number of tokens used (prompt + completion).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_tokens: number;
	}

	export interface ListVectorStoreFilesResponse {

		/** Required */
		object: string;

		/** Required */
		data: Array<VectorStoreFileObject>;

		/** Required */
		first_id: string;

		/** Required */
		last_id: string;

		/** Required */
		has_more: boolean;
	}


	/** A list of files attached to a vector store. */
	export interface VectorStoreFileObject {

		/**
		 * The identifier, which can be referenced in API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The object type, which is always `vector_store.file`.
		 * Required
		 */
		object: VectorStoreFileObjectObject;

		/**
		 * The total vector store usage in bytes. Note that this may be different from the original file size.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		usage_bytes: number;

		/**
		 * The Unix timestamp (in seconds) for when the vector store file was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The ID of the [vector store](/docs/api-reference/vector-stores/object) that the [File](/docs/api-reference/files) is attached to.
		 * Required
		 */
		vector_store_id: string;

		/**
		 * The status of the vector store file, which can be either `in_progress`, `completed`, `cancelled`, or `failed`. The status `completed` indicates that the vector store file is ready for use.
		 * Required
		 */
		status: VectorStoreFileObjectStatus;

		/**
		 * The last error associated with this vector store file. Will be `null` if there are no errors.
		 * Required
		 */
		last_error: VectorStoreFileObjectLast_error;

		/** The strategy used to chunk the file. */
		chunking_strategy?: string | null;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard. Keys are strings
		 * with a maximum length of 64 characters. Values are strings with a maximum
		 * length of 512 characters, booleans, or numbers.
		 */
		attributes?: VectorStoreFileAttributes;
	}

	export enum VectorStoreFileObjectObject { 'vector_store.file' = 0 }

	export enum VectorStoreFileObjectStatus { in_progress = 0, completed = 1, cancelled = 2, failed = 3 }

	export interface VectorStoreFileObjectLast_error {

		/**
		 * One of `server_error` or `rate_limit_exceeded`.
		 * Required
		 */
		code: VectorStoreFileObjectLast_errorCode;

		/**
		 * A human-readable description of the error.
		 * Required
		 */
		message: string;
	}

	export enum VectorStoreFileObjectLast_errorCode { server_error = 0, unsupported_file = 1, invalid_file = 2 }

	export interface ListVectorStoresResponse {

		/** Required */
		object: string;

		/** Required */
		data: Array<VectorStoreObject>;

		/** Required */
		first_id: string;

		/** Required */
		last_id: string;

		/** Required */
		has_more: boolean;
	}


	/** A vector store is a collection of processed files can be used by the `file_search` tool. */
	export interface VectorStoreObject {

		/**
		 * The identifier, which can be referenced in API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The object type, which is always `vector_store`.
		 * Required
		 */
		object: VectorStoreObjectObject;

		/**
		 * The Unix timestamp (in seconds) for when the vector store was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The name of the vector store.
		 * Required
		 */
		name: string;

		/**
		 * The total number of bytes used by the files in the vector store.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		usage_bytes: number;

		/** Required */
		file_counts: VectorStoreObjectFile_counts;

		/**
		 * The status of the vector store, which can be either `expired`, `in_progress`, or `completed`. A status of `completed` indicates that the vector store is ready for use.
		 * Required
		 */
		status: VectorStoreObjectStatus;

		/** The expiration policy for a vector store. */
		expires_after?: VectorStoreExpirationAfter;

		/**
		 * The Unix timestamp (in seconds) for when the vector store will expire.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_at?: number | null;

		/**
		 * The Unix timestamp (in seconds) for when the vector store was last active.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		last_active_at: number;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 * Required
		 */
		metadata: Metadata;
	}

	export enum VectorStoreObjectObject { vector_store = 0 }

	export interface VectorStoreObjectFile_counts {

		/**
		 * The number of files that are currently being processed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		in_progress: number;

		/**
		 * The number of files that have been successfully processed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completed: number;

		/**
		 * The number of files that have failed to process.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failed: number;

		/**
		 * The number of files that were cancelled.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cancelled: number;

		/**
		 * The total number of files.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}

	export enum VectorStoreObjectStatus { expired = 0, in_progress = 1, completed = 2 }


	/**
	 * A log probability object.
	 */
	export interface LogProbProperties {

		/**
		 * The token that was used to generate the log probability.
		 * Required
		 */
		token: string;

		/**
		 * The log probability of the token.
		 * Required
		 * Type: double
		 */
		logprob: number;

		/**
		 * The bytes that were used to generate the log probability.
		 * Required
		 */
		bytes: Array<number>;
	}


	/** References an image [File](/docs/api-reference/files) in the content of a message. */
	export interface MessageContentImageFileObject {

		/**
		 * Always `image_file`.
		 * Required
		 */
		type: MessageContentImageFileObjectType;

		/** Required */
		image_file: MessageContentImageFileObjectImage_file;
	}

	export enum MessageContentImageFileObjectType { image_file = 0 }

	export interface MessageContentImageFileObjectImage_file {

		/**
		 * The [File](/docs/api-reference/files) ID of the image in the message content. Set `purpose="vision"` when uploading the File if you need to later display the file content.
		 * Required
		 */
		file_id: string;

		/** Specifies the detail level of the image if specified by the user. `low` uses fewer tokens, you can opt in to high resolution using `high`. */
		detail?: ChatCompletionRequestMessageContentPartImageImage_urlDetail | null;
	}


	/** References an image URL in the content of a message. */
	export interface MessageContentImageUrlObject {

		/**
		 * The type of the content part.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartImageType;

		/** Required */
		image_url: MessageContentImageUrlObjectImage_url;
	}

	export interface MessageContentImageUrlObjectImage_url {

		/**
		 * The external URL of the image, must be a supported image types: jpeg, jpg, png, gif, webp.
		 * Required
		 */
		url: string;

		/** Specifies the detail level of the image. `low` uses fewer tokens, you can opt in to high resolution using `high`. Default value is `auto` */
		detail?: ChatCompletionRequestMessageContentPartImageImage_urlDetail | null;
	}


	/** The refusal content generated by the assistant. */
	export interface MessageContentRefusalObject {

		/**
		 * Always `refusal`.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartRefusalType;

		/** Required */
		refusal: string;
	}


	/** A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the "file_search" tool to search files. */
	export interface MessageContentTextAnnotationsFileCitationObject {

		/**
		 * Always `file_citation`.
		 * Required
		 */
		type: MessageContentTextAnnotationsFileCitationObjectType;

		/**
		 * The text in the message content that needs to be replaced.
		 * Required
		 */
		text: string;

		/** Required */
		file_citation: MessageContentTextAnnotationsFileCitationObjectFile_citation;

		/**
		 * Required
		 * Minimum: 0
		 */
		start_index: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		end_index: number;
	}

	export enum MessageContentTextAnnotationsFileCitationObjectType { file_citation = 0 }

	export interface MessageContentTextAnnotationsFileCitationObjectFile_citation {

		/**
		 * The ID of the specific File the citation is from.
		 * Required
		 */
		file_id: string;
	}


	/** A URL for the file that's generated when the assistant used the `code_interpreter` tool to generate a file. */
	export interface MessageContentTextAnnotationsFilePathObject {

		/**
		 * Always `file_path`.
		 * Required
		 */
		type: FilePathType;

		/**
		 * The text in the message content that needs to be replaced.
		 * Required
		 */
		text: string;

		/** Required */
		file_path: MessageContentTextAnnotationsFilePathObjectFile_path;

		/**
		 * Required
		 * Minimum: 0
		 */
		start_index: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		end_index: number;
	}

	export interface MessageContentTextAnnotationsFilePathObjectFile_path {

		/**
		 * The ID of the file that was generated.
		 * Required
		 */
		file_id: string;
	}


	/** The text content that is part of a message. */
	export interface MessageContentTextObject {

		/**
		 * Always `text`.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartTextType;

		/** Required */
		text: MessageContentTextObjectText;
	}

	export interface MessageContentTextObjectText {

		/**
		 * The data that makes up the text.
		 * Required
		 */
		value: string;

		/**
		 * Required
		 * Array member types: MessageContentTextAnnotationsFileCitationObject, MessageContentTextAnnotationsFilePathObject
		 */
		annotations: Array<any>;
	}


	/** References an image [File](/docs/api-reference/files) in the content of a message. */
	export interface MessageDeltaContentImageFileObject {

		/**
		 * The index of the content part in the message.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * Always `image_file`.
		 * Required
		 */
		type: MessageContentImageFileObjectType;
		image_file?: MessageDeltaContentImageFileObjectImage_file;
	}

	export interface MessageDeltaContentImageFileObjectImage_file {

		/** The [File](/docs/api-reference/files) ID of the image in the message content. Set `purpose="vision"` when uploading the File if you need to later display the file content. */
		file_id?: string | null;

		/** Specifies the detail level of the image if specified by the user. `low` uses fewer tokens, you can opt in to high resolution using `high`. */
		detail?: ChatCompletionRequestMessageContentPartImageImage_urlDetail | null;
	}


	/** References an image URL in the content of a message. */
	export interface MessageDeltaContentImageUrlObject {

		/**
		 * The index of the content part in the message.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * Always `image_url`.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartImageType;
		image_url?: MessageDeltaContentImageUrlObjectImage_url;
	}

	export interface MessageDeltaContentImageUrlObjectImage_url {

		/** The URL of the image, must be a supported image types: jpeg, jpg, png, gif, webp. */
		url?: string | null;

		/** Specifies the detail level of the image. `low` uses fewer tokens, you can opt in to high resolution using `high`. */
		detail?: ChatCompletionRequestMessageContentPartImageImage_urlDetail | null;
	}


	/** The refusal content that is part of a message. */
	export interface MessageDeltaContentRefusalObject {

		/**
		 * The index of the refusal part in the message.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * Always `refusal`.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartRefusalType;
		refusal?: string | null;
	}


	/** A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the "file_search" tool to search files. */
	export interface MessageDeltaContentTextAnnotationsFileCitationObject {

		/**
		 * The index of the annotation in the text content part.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * Always `file_citation`.
		 * Required
		 */
		type: MessageContentTextAnnotationsFileCitationObjectType;

		/** The text in the message content that needs to be replaced. */
		text?: string | null;
		file_citation?: MessageDeltaContentTextAnnotationsFileCitationObjectFile_citation;

		/** Minimum: 0 */
		start_index?: number | null;

		/** Minimum: 0 */
		end_index?: number | null;
	}

	export interface MessageDeltaContentTextAnnotationsFileCitationObjectFile_citation {

		/** The ID of the specific File the citation is from. */
		file_id?: string | null;

		/** The specific quote in the file. */
		quote?: string | null;
	}


	/** A URL for the file that's generated when the assistant used the `code_interpreter` tool to generate a file. */
	export interface MessageDeltaContentTextAnnotationsFilePathObject {

		/**
		 * The index of the annotation in the text content part.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * Always `file_path`.
		 * Required
		 */
		type: FilePathType;

		/** The text in the message content that needs to be replaced. */
		text?: string | null;
		file_path?: MessageDeltaContentTextAnnotationsFilePathObjectFile_path;

		/** Minimum: 0 */
		start_index?: number | null;

		/** Minimum: 0 */
		end_index?: number | null;
	}

	export interface MessageDeltaContentTextAnnotationsFilePathObjectFile_path {

		/** The ID of the file that was generated. */
		file_id?: string | null;
	}


	/** The text content that is part of a message. */
	export interface MessageDeltaContentTextObject {

		/**
		 * The index of the content part in the message.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * Always `text`.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartTextType;
		text?: MessageDeltaContentTextObjectText;
	}

	export interface MessageDeltaContentTextObjectText {

		/** The data that makes up the text. */
		value?: string | null;

		/** Array member types: MessageDeltaContentTextAnnotationsFileCitationObject, MessageDeltaContentTextAnnotationsFilePathObject */
		annotations?: Array<any>;
	}


	/**
	 * Represents a message delta i.e. any changed fields on a message during streaming.
	 */
	export interface MessageDeltaObject {

		/**
		 * The identifier of the message, which can be referenced in API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The object type, which is always `thread.message.delta`.
		 * Required
		 */
		object: MessageDeltaObjectObject;

		/**
		 * The delta containing the fields that have changed on the Message.
		 * Required
		 */
		delta: MessageDeltaObjectDelta;
	}

	export enum MessageDeltaObjectObject { 'thread.message.delta' = 0 }

	export interface MessageDeltaObjectDelta {

		/** The entity that produced the message. One of `user` or `assistant`. */
		role?: CreateMessageRequestRole | null;

		/**
		 * The content of the message in array of text and/or images.
		 * Array member types: MessageDeltaContentImageFileObject, MessageDeltaContentTextObject, MessageDeltaContentRefusalObject, MessageDeltaContentImageUrlObject
		 */
		content?: Array<any>;
	}


	/** The text content that is part of a message. */
	export interface MessageRequestContentTextObject {

		/**
		 * Always `text`.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartTextType;

		/**
		 * Text content to be sent to the model
		 * Required
		 */
		text: string;
	}

	export interface MessageStreamEvent {
	}

	export interface ModelIds {
	}

	export interface ModelIdsResponses {
	}

	export interface ModelIdsShared {
	}

	export interface ModelResponseProperties {

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;

		/**
		 * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
		 * We generally recommend altering this or `top_p` but not both.
		 * Minimum: 0
		 * Maximum: 2
		 */
		temperature?: number | null;

		/**
		 * An alternative to sampling with temperature, called nucleus sampling,
		 * where the model considers the results of the tokens with top_p probability
		 * mass. So 0.1 means only the tokens comprising the top 10% probability mass
		 * are considered.
		 * We generally recommend altering this or `temperature` but not both.
		 * Minimum: 0
		 * Maximum: 1
		 */
		top_p?: number | null;

		/**
		 * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
		 */
		user?: string | null;

		/**
		 * Specifies the latency tier to use for processing the request. This parameter is relevant for customers subscribed to the scale tier service:
		 * - If set to 'auto', and the Project is Scale tier enabled, the system
		 * will utilize scale tier credits until they are exhausted.
		 * - If set to 'auto', and the Project is not Scale tier enabled, the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.
		 * - If set to 'default', the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.
		 * - If set to 'flex', the request will be processed with the Flex Processing service tier. [Learn more](/docs/guides/flex-processing).
		 * - When not set, the default behavior is 'auto'.
		 * When this parameter is set, the response body will include the `service_tier` utilized.
		 */
		service_tier?: CreateChatCompletionResponseService_tier | null;
	}

	export interface ModifyAssistantRequest {

		/**
		 * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
		 */
		model?: string;

		/**
		 * **o-series models only**
		 * Constrains effort on reasoning for
		 * [reasoning models](https://platform.openai.com/docs/guides/reasoning).
		 * Currently supported values are `low`, `medium`, and `high`. Reducing
		 * reasoning effort can result in faster responses and fewer tokens used
		 * on reasoning in a response.
		 */
		reasoning_effort?: CreateAssistantRequestReasoning_effort | null;

		/**
		 * The name of the assistant. The maximum length is 256 characters.
		 * Max length: 256
		 */
		name?: string | null;

		/**
		 * The description of the assistant. The maximum length is 512 characters.
		 * Max length: 512
		 */
		description?: string | null;

		/**
		 * The system instructions that the assistant uses. The maximum length is 256,000 characters.
		 * Max length: 256000
		 */
		instructions?: string | null;

		/**
		 * A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.
		 * Maximum items: 128
		 * Array member types: AssistantToolsCode, AssistantToolsFileSearch, AssistantToolsFunction
		 */
		tools?: Array<any>;

		/**
		 * A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
		 */
		tool_resources?: ModifyAssistantRequestTool_resources;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;

		/**
		 * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
		 * Minimum: 0
		 * Maximum: 2
		 */
		temperature?: number | null;

		/**
		 * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
		 * We generally recommend altering this or temperature but not both.
		 * Minimum: 0
		 * Maximum: 1
		 */
		top_p?: number | null;

		/**
		 * Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since `gpt-3.5-turbo-1106`.
		 * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).
		 * Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.
		 * **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.
		 */
		response_format?: AssistantsApiResponseFormatOption;
	}

	export interface ModifyAssistantRequestTool_resources {
		code_interpreter?: ModifyAssistantRequestTool_resourcesCode_interpreter;
		file_search?: ModifyAssistantRequestTool_resourcesFile_search;
	}

	export interface ModifyAssistantRequestTool_resourcesCode_interpreter {

		/**
		 * Overrides the list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
		 * Maximum items: 20
		 */
		file_ids?: Array<string>;
	}

	export interface ModifyAssistantRequestTool_resourcesFile_search {

		/**
		 * Overrides the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
		 * Maximum items: 1
		 */
		vector_store_ids?: Array<string>;
	}

	export interface ModifyCertificateRequest {

		/**
		 * The updated name for the certificate
		 * Required
		 */
		name: string;
	}

	export interface ModifyMessageRequest {

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;
	}

	export interface ModifyRunRequest {

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;
	}

	export interface ModifyThreadRequest {

		/**
		 * A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
		 */
		tool_resources?: ModifyThreadRequestTool_resources;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;
	}

	export interface ModifyThreadRequestTool_resources {
		code_interpreter?: ModifyThreadRequestTool_resourcesCode_interpreter;
		file_search?: ModifyThreadRequestTool_resourcesFile_search;
	}

	export interface ModifyThreadRequestTool_resourcesCode_interpreter {

		/**
		 * A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
		 * Maximum items: 20
		 */
		file_ids?: Array<string>;
	}

	export interface ModifyThreadRequestTool_resourcesFile_search {

		/**
		 * The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.
		 * Maximum items: 1
		 */
		vector_store_ids?: Array<string>;
	}


	/**
	 * A mouse move action.
	 */
	export interface Move {

		/**
		 * Specifies the event type. For a move action, this property is
		 * always set to `move`.
		 * Required
		 */
		type: MoveType;

		/**
		 * The x-coordinate to move to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x: number;

		/**
		 * The y-coordinate to move to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y: number;
	}

	export enum MoveType { move = 0 }


	/** This is returned when the chunking strategy is unknown. Typically, this is because the file was indexed before the `chunking_strategy` concept was introduced in the API. */
	export interface OtherChunkingStrategyResponseParam {

		/**
		 * Always `other`.
		 * Required
		 */
		type: OtherChunkingStrategyResponseParamType;
	}

	export enum OtherChunkingStrategyResponseParamType { other = 0 }


	/**
	 * An audio output from the model.
	 */
	export interface OutputAudio {

		/**
		 * The type of the output audio. Always `output_audio`.
		 * Required
		 */
		type: OutputAudioType;

		/**
		 * Base64-encoded audio data from the model.
		 * Required
		 */
		data: string;

		/**
		 * The transcript of the audio data from the model.
		 * Required
		 */
		transcript: string;
	}

	export enum OutputAudioType { output_audio = 0 }

	export interface OutputContent {
	}

	export interface OutputItem {
	}


	/**
	 * An output message from the model.
	 */
	export interface OutputMessage {

		/**
		 * The unique ID of the output message.
		 * Required
		 */
		id: string;

		/**
		 * The type of the output message. Always `message`.
		 * Required
		 */
		type: EasyInputMessageType;

		/**
		 * The role of the output message. Always `assistant`.
		 * Required
		 */
		role: AssistantObjectObject;

		/**
		 * The content of the output message.
		 * Required
		 * Array member types: OutputTextContent, RefusalContent
		 */
		content: Array<any>;

		/**
		 * The status of the message input. One of `in_progress`, `completed`, or
		 * `incomplete`. Populated when input items are returned via API.
		 * Required
		 */
		status: ComputerToolCallStatus;
	}


	/** Represents an individual project. */
	export interface Project {

		/**
		 * The identifier, which can be referenced in API endpoints
		 * Required
		 */
		id: string;

		/**
		 * The object type, which is always `organization.project`
		 * Required
		 */
		object: ProjectObject;

		/**
		 * The name of the project. This appears in reporting.
		 * Required
		 */
		name: string;

		/**
		 * The Unix timestamp (in seconds) of when the project was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The Unix timestamp (in seconds) of when the project was archived or `null`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		archived_at?: number | null;

		/**
		 * `active` or `archived`
		 * Required
		 */
		status: ProjectStatus;
	}

	export enum ProjectObject { 'organization.project' = 0 }

	export enum ProjectStatus { active = 0, archived = 1 }


	/** Represents an individual API key in a project. */
	export interface ProjectApiKey {

		/**
		 * The object type, which is always `organization.project.api_key`
		 * Required
		 */
		object: ProjectApiKeyObject;

		/**
		 * The redacted value of the API key
		 * Required
		 */
		redacted_value: string;

		/**
		 * The name of the API key
		 * Required
		 */
		name: string;

		/**
		 * The Unix timestamp (in seconds) of when the API key was created
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The Unix timestamp (in seconds) of when the API key was last used.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		last_used_at: number;

		/**
		 * The identifier, which can be referenced in API endpoints
		 * Required
		 */
		id: string;

		/** Required */
		owner: ProjectApiKeyOwner;
	}

	export enum ProjectApiKeyObject { 'organization.project.api_key' = 0 }

	export interface ProjectApiKeyOwner {

		/** `user` or `service_account` */
		type?: AuditLogActorApiKeyType | null;

		/** Represents an individual user in a project. */
		user?: ProjectUser;

		/** Represents an individual service account in a project. */
		service_account?: ProjectServiceAccount;
	}


	/** Represents an individual user in a project. */
	export interface ProjectUser {

		/**
		 * The object type, which is always `organization.project.user`
		 * Required
		 */
		object: ProjectUserObject;

		/**
		 * The identifier, which can be referenced in API endpoints
		 * Required
		 */
		id: string;

		/**
		 * The name of the user
		 * Required
		 */
		name: string;

		/**
		 * The email address of the user
		 * Required
		 */
		email: string;

		/**
		 * `owner` or `member`
		 * Required
		 */
		role: ProjectUserRole;

		/**
		 * The Unix timestamp (in seconds) of when the project was added.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		added_at: number;
	}

	export enum ProjectUserObject { 'organization.project.user' = 0 }

	export enum ProjectUserRole { owner = 0, member = 1 }


	/** Represents an individual service account in a project. */
	export interface ProjectServiceAccount {

		/**
		 * The object type, which is always `organization.project.service_account`
		 * Required
		 */
		object: ProjectServiceAccountObject;

		/**
		 * The identifier, which can be referenced in API endpoints
		 * Required
		 */
		id: string;

		/**
		 * The name of the service account
		 * Required
		 */
		name: string;

		/**
		 * `owner` or `member`
		 * Required
		 */
		role: ProjectUserRole;

		/**
		 * The Unix timestamp (in seconds) of when the service account was created
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;
	}

	export enum ProjectServiceAccountObject { 'organization.project.service_account' = 0 }

	export interface ProjectApiKeyDeleteResponse {

		/** Required */
		object: ProjectApiKeyDeleteResponseObject;

		/** Required */
		id: string;

		/** Required */
		deleted: boolean;
	}

	export enum ProjectApiKeyDeleteResponseObject { 'organization.project.api_key.deleted' = 0 }

	export interface ProjectApiKeyListResponse {

		/** Required */
		object: ChatCompletionListObject;

		/** Required */
		data: Array<ProjectApiKey>;

		/** Required */
		first_id: string;

		/** Required */
		last_id: string;

		/** Required */
		has_more: boolean;
	}

	export interface ProjectCreateRequest {

		/**
		 * The friendly name of the project, this name appears in reports.
		 * Required
		 */
		name: string;
	}

	export interface ProjectListResponse {

		/** Required */
		object: ChatCompletionListObject;

		/** Required */
		data: Array<Project>;

		/** Required */
		first_id: string;

		/** Required */
		last_id: string;

		/** Required */
		has_more: boolean;
	}


	/** Represents a project rate limit config. */
	export interface ProjectRateLimit {

		/**
		 * The object type, which is always `project.rate_limit`
		 * Required
		 */
		object: ProjectRateLimitObject;

		/**
		 * The identifier, which can be referenced in API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The model this rate limit applies to.
		 * Required
		 */
		model: string;

		/**
		 * The maximum requests per minute.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_requests_per_1_minute: number;

		/**
		 * The maximum tokens per minute.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_tokens_per_1_minute: number;

		/**
		 * The maximum images per minute. Only present for relevant models.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_images_per_1_minute?: number | null;

		/**
		 * The maximum audio megabytes per minute. Only present for relevant models.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_audio_megabytes_per_1_minute?: number | null;

		/**
		 * The maximum requests per day. Only present for relevant models.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_requests_per_1_day?: number | null;

		/**
		 * The maximum batch input tokens per day. Only present for relevant models.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batch_1_day_max_input_tokens?: number | null;
	}

	export enum ProjectRateLimitObject { 'project.rate_limit' = 0 }

	export interface ProjectRateLimitListResponse {

		/** Required */
		object: ChatCompletionListObject;

		/** Required */
		data: Array<ProjectRateLimit>;

		/** Required */
		first_id: string;

		/** Required */
		last_id: string;

		/** Required */
		has_more: boolean;
	}

	export interface ProjectRateLimitUpdateRequest {

		/**
		 * The maximum requests per minute.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_requests_per_1_minute?: number | null;

		/**
		 * The maximum tokens per minute.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_tokens_per_1_minute?: number | null;

		/**
		 * The maximum images per minute. Only relevant for certain models.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_images_per_1_minute?: number | null;

		/**
		 * The maximum audio megabytes per minute. Only relevant for certain models.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_audio_megabytes_per_1_minute?: number | null;

		/**
		 * The maximum requests per day. Only relevant for certain models.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_requests_per_1_day?: number | null;

		/**
		 * The maximum batch input tokens per day. Only relevant for certain models.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batch_1_day_max_input_tokens?: number | null;
	}

	export interface ProjectServiceAccountApiKey {

		/**
		 * The object type, which is always `organization.project.service_account.api_key`
		 * Required
		 */
		object: ProjectServiceAccountApiKeyObject;

		/** Required */
		value: string;

		/** Required */
		name: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/** Required */
		id: string;
	}

	export enum ProjectServiceAccountApiKeyObject { 'organization.project.service_account.api_key' = 0 }

	export interface ProjectServiceAccountCreateRequest {

		/**
		 * The name of the service account being created.
		 * Required
		 */
		name: string;
	}

	export interface ProjectServiceAccountCreateResponse {

		/** Required */
		object: ProjectServiceAccountObject;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/**
		 * Service accounts can only have one role of type `member`
		 * Required
		 */
		role: ProjectServiceAccountCreateResponseRole;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/** Required */
		api_key: ProjectServiceAccountApiKey;
	}

	export enum ProjectServiceAccountCreateResponseRole { member = 0 }

	export interface ProjectServiceAccountDeleteResponse {

		/** Required */
		object: ProjectServiceAccountDeleteResponseObject;

		/** Required */
		id: string;

		/** Required */
		deleted: boolean;
	}

	export enum ProjectServiceAccountDeleteResponseObject { 'organization.project.service_account.deleted' = 0 }

	export interface ProjectServiceAccountListResponse {

		/** Required */
		object: ChatCompletionListObject;

		/** Required */
		data: Array<ProjectServiceAccount>;

		/** Required */
		first_id: string;

		/** Required */
		last_id: string;

		/** Required */
		has_more: boolean;
	}

	export interface ProjectUpdateRequest {

		/**
		 * The updated name of the project, this name appears in reports.
		 * Required
		 */
		name: string;
	}

	export interface ProjectUserCreateRequest {

		/**
		 * The ID of the user.
		 * Required
		 */
		user_id: string;

		/**
		 * `owner` or `member`
		 * Required
		 */
		role: ProjectUserRole;
	}

	export interface ProjectUserDeleteResponse {

		/** Required */
		object: ProjectUserDeleteResponseObject;

		/** Required */
		id: string;

		/** Required */
		deleted: boolean;
	}

	export enum ProjectUserDeleteResponseObject { 'organization.project.user.deleted' = 0 }

	export interface ProjectUserListResponse {

		/** Required */
		object: string;

		/** Required */
		data: Array<ProjectUser>;

		/** Required */
		first_id: string;

		/** Required */
		last_id: string;

		/** Required */
		has_more: boolean;
	}

	export interface ProjectUserUpdateRequest {

		/**
		 * `owner` or `member`
		 * Required
		 */
		role: ProjectUserRole;
	}


	/**
	 * A realtime client event.
	 */
	export interface RealtimeClientEvent {
	}


	/**
	 * Add a new Item to the Conversation's context, including messages, function 
	 * calls, and function call responses. This event can be used both to populate a 
	 * "history" of the conversation and to add new items mid-stream, but has the 
	 * current limitation that it cannot populate assistant audio messages.
	 * If successful, the server will respond with a `conversation.item.created` 
	 * event, otherwise an `error` event will be sent.
	 */
	export interface RealtimeClientEventConversationItemCreate {

		/** Optional client-generated ID used to identify this event. */
		event_id?: string | null;

		/**
		 * The event type, must be `conversation.item.create`.
		 * Required
		 */
		type: RealtimeClientEventConversationItemCreateType;

		/**
		 * The ID of the preceding item after which the new item will be inserted.
		 * If not set, the new item will be appended to the end of the conversation.
		 * If set to `root`, the new item will be added to the beginning of the conversation.
		 * If set to an existing ID, it allows an item to be inserted mid-conversation. If the
		 * ID cannot be found, an error will be returned and the item will not be added.
		 */
		previous_item_id?: string | null;

		/**
		 * The item to add to the conversation.
		 * Required
		 */
		item: RealtimeConversationItem;
	}

	export enum RealtimeClientEventConversationItemCreateType { 'conversation.item.create' = 0 }


	/** The item to add to the conversation. */
	export interface RealtimeConversationItem {

		/**
		 * The unique ID of the item, this can be generated by the client to help
		 * manage server-side context, but is not required because the server will
		 * generate one if not provided.
		 */
		id?: string | null;

		/**
		 * The type of the item (`message`, `function_call`, `function_call_output`).
		 */
		type?: RealtimeConversationItemType | null;

		/**
		 * Identifier for the API object being returned - always `realtime.item`.
		 */
		object?: RealtimeConversationItemObject | null;

		/**
		 * The status of the item (`completed`, `incomplete`). These have no effect
		 * on the conversation, but are accepted for consistency with the
		 * `conversation.item.created` event.
		 */
		status?: RealtimeConversationItemStatus | null;

		/**
		 * The role of the message sender (`user`, `assistant`, `system`), only
		 * applicable for `message` items.
		 */
		role?: RealtimeConversationItemRole | null;

		/**
		 * The content of the message, applicable for `message` items.
		 * - Message items of role `system` support only `input_text` content
		 * - Message items of role `user` support `input_text` and `input_audio`
		 * content
		 * - Message items of role `assistant` support `text` content.
		 */
		RealtimeConversationItemContent?: Array<RealtimeConversationItemContent>;

		/**
		 * The ID of the function call (for `function_call` and
		 * `function_call_output` items). If passed on a `function_call_output`
		 * item, the server will check that a `function_call` item with the same
		 * ID exists in the conversation history.
		 */
		call_id?: string | null;

		/**
		 * The name of the function being called (for `function_call` items).
		 */
		name?: string | null;

		/**
		 * The arguments of the function call (for `function_call` items).
		 */
		arguments?: string | null;

		/**
		 * The output of the function call (for `function_call_output` items).
		 */
		output?: string | null;
	}

	export enum RealtimeConversationItemType { message = 0, function_call = 1, function_call_output = 2 }

	export enum RealtimeConversationItemObject { 'realtime.item' = 0 }

	export enum RealtimeConversationItemStatus { completed = 0, incomplete = 1 }

	export enum RealtimeConversationItemRole { user = 0, assistant = 1, system = 2 }

	export interface RealtimeConversationItemContent {

		/**
		 * The content type (`input_text`, `input_audio`, `item_reference`, `text`).
		 */
		type?: RealtimeConversationItemContentType | null;

		/**
		 * The text content, used for `input_text` and `text` content types.
		 */
		text?: string | null;

		/**
		 * ID of a previous conversation item to reference (for `item_reference`
		 * content types in `response.create` events). These can reference both
		 * client and server created items.
		 */
		id?: string | null;

		/**
		 * Base64-encoded audio bytes, used for `input_audio` content type.
		 */
		audio?: string | null;

		/**
		 * The transcript of the audio, used for `input_audio` content type.
		 */
		transcript?: string | null;
	}

	export enum RealtimeConversationItemContentType { input_audio = 0, input_text = 1, item_reference = 2, text = 3 }


	/**
	 * Send this event when you want to remove any item from the conversation 
	 * history. The server will respond with a `conversation.item.deleted` event, 
	 * unless the item does not exist in the conversation history, in which case the 
	 * server will respond with an error.
	 */
	export interface RealtimeClientEventConversationItemDelete {

		/** Optional client-generated ID used to identify this event. */
		event_id?: string | null;

		/**
		 * The event type, must be `conversation.item.delete`.
		 * Required
		 */
		type: RealtimeClientEventConversationItemDeleteType;

		/**
		 * The ID of the item to delete.
		 * Required
		 */
		item_id: string;
	}

	export enum RealtimeClientEventConversationItemDeleteType { 'conversation.item.delete' = 0 }


	/**
	 * Send this event when you want to retrieve the server's representation of a specific item in the conversation history. This is useful, for example, to inspect user audio after noise cancellation and VAD.
	 * The server will respond with a `conversation.item.retrieved` event, 
	 * unless the item does not exist in the conversation history, in which case the 
	 * server will respond with an error.
	 */
	export interface RealtimeClientEventConversationItemRetrieve {

		/** Optional client-generated ID used to identify this event. */
		event_id?: string | null;

		/**
		 * The event type, must be `conversation.item.retrieve`.
		 * Required
		 */
		type: RealtimeClientEventConversationItemRetrieveType;

		/**
		 * The ID of the item to retrieve.
		 * Required
		 */
		item_id: string;
	}

	export enum RealtimeClientEventConversationItemRetrieveType { 'conversation.item.retrieve' = 0 }


	/**
	 * Send this event to truncate a previous assistant message’s audio. The server 
	 * will produce audio faster than realtime, so this event is useful when the user 
	 * interrupts to truncate audio that has already been sent to the client but not 
	 * yet played. This will synchronize the server's understanding of the audio with 
	 * the client's playback.
	 * Truncating audio will delete the server-side text transcript to ensure there 
	 * is not text in the context that hasn't been heard by the user.
	 * If successful, the server will respond with a `conversation.item.truncated` 
	 * event. 
	 */
	export interface RealtimeClientEventConversationItemTruncate {

		/** Optional client-generated ID used to identify this event. */
		event_id?: string | null;

		/**
		 * The event type, must be `conversation.item.truncate`.
		 * Required
		 */
		type: RealtimeClientEventConversationItemTruncateType;

		/**
		 * The ID of the assistant message item to truncate. Only assistant message
		 * items can be truncated.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the content part to truncate. Set this to 0.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * Inclusive duration up to which audio is truncated, in milliseconds. If
		 * the audio_end_ms is greater than the actual audio duration, the server
		 * will respond with an error.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_end_ms: number;
	}

	export enum RealtimeClientEventConversationItemTruncateType { 'conversation.item.truncate' = 0 }


	/**
	 * Send this event to append audio bytes to the input audio buffer. The audio 
	 * buffer is temporary storage you can write to and later commit. In Server VAD 
	 * mode, the audio buffer is used to detect speech and the server will decide 
	 * when to commit. When Server VAD is disabled, you must commit the audio buffer
	 * manually.
	 * The client may choose how much audio to place in each event up to a maximum 
	 * of 15 MiB, for example streaming smaller chunks from the client may allow the 
	 * VAD to be more responsive. Unlike made other client events, the server will 
	 * not send a confirmation response to this event.
	 */
	export interface RealtimeClientEventInputAudioBufferAppend {

		/** Optional client-generated ID used to identify this event. */
		event_id?: string | null;

		/**
		 * The event type, must be `input_audio_buffer.append`.
		 * Required
		 */
		type: RealtimeClientEventInputAudioBufferAppendType;

		/**
		 * Base64-encoded audio bytes. This must be in the format specified by the
		 * `input_audio_format` field in the session configuration.
		 * Required
		 */
		audio: string;
	}

	export enum RealtimeClientEventInputAudioBufferAppendType { 'input_audio_buffer.append' = 0 }


	/**
	 * Send this event to clear the audio bytes in the buffer. The server will 
	 * respond with an `input_audio_buffer.cleared` event.
	 */
	export interface RealtimeClientEventInputAudioBufferClear {

		/** Optional client-generated ID used to identify this event. */
		event_id?: string | null;

		/**
		 * The event type, must be `input_audio_buffer.clear`.
		 * Required
		 */
		type: RealtimeClientEventInputAudioBufferClearType;
	}

	export enum RealtimeClientEventInputAudioBufferClearType { 'input_audio_buffer.clear' = 0 }


	/**
	 * Send this event to commit the user input audio buffer, which will create a 
	 * new user message item in the conversation. This event will produce an error 
	 * if the input audio buffer is empty. When in Server VAD mode, the client does 
	 * not need to send this event, the server will commit the audio buffer 
	 * automatically.
	 * Committing the input audio buffer will trigger input audio transcription 
	 * (if enabled in session configuration), but it will not create a response 
	 * from the model. The server will respond with an `input_audio_buffer.committed` 
	 * event.
	 */
	export interface RealtimeClientEventInputAudioBufferCommit {

		/** Optional client-generated ID used to identify this event. */
		event_id?: string | null;

		/**
		 * The event type, must be `input_audio_buffer.commit`.
		 * Required
		 */
		type: RealtimeClientEventInputAudioBufferCommitType;
	}

	export enum RealtimeClientEventInputAudioBufferCommitType { 'input_audio_buffer.commit' = 0 }


	/**
	 * **WebRTC Only:** Emit to cut off the current audio response. This will trigger the server to
	 * stop generating audio and emit a `output_audio_buffer.cleared` event. This 
	 * event should be preceded by a `response.cancel` client event to stop the 
	 * generation of the current response.
	 * [Learn more](/docs/guides/realtime-model-capabilities#client-and-server-events-for-audio-in-webrtc).
	 */
	export interface RealtimeClientEventOutputAudioBufferClear {

		/** The unique ID of the client event used for error handling. */
		event_id?: string | null;

		/**
		 * The event type, must be `output_audio_buffer.clear`.
		 * Required
		 */
		type: RealtimeClientEventOutputAudioBufferClearType;
	}

	export enum RealtimeClientEventOutputAudioBufferClearType { 'output_audio_buffer.clear' = 0 }


	/**
	 * Send this event to cancel an in-progress response. The server will respond 
	 * with a `response.cancelled` event or an error if there is no response to 
	 * cancel.
	 */
	export interface RealtimeClientEventResponseCancel {

		/** Optional client-generated ID used to identify this event. */
		event_id?: string | null;

		/**
		 * The event type, must be `response.cancel`.
		 * Required
		 */
		type: RealtimeClientEventResponseCancelType;

		/**
		 * A specific response ID to cancel - if not provided, will cancel an
		 * in-progress response in the default conversation.
		 */
		response_id?: string | null;
	}

	export enum RealtimeClientEventResponseCancelType { 'response.cancel' = 0 }


	/**
	 * This event instructs the server to create a Response, which means triggering 
	 * model inference. When in Server VAD mode, the server will create Responses 
	 * automatically.
	 * A Response will include at least one Item, and may have two, in which case 
	 * the second will be a function call. These Items will be appended to the 
	 * conversation history.
	 * The server will respond with a `response.created` event, events for Items 
	 * and content created, and finally a `response.done` event to indicate the 
	 * Response is complete.
	 * The `response.create` event includes inference configuration like 
	 * `instructions`, and `temperature`. These fields will override the Session's 
	 * configuration for this Response only.
	 */
	export interface RealtimeClientEventResponseCreate {

		/** Optional client-generated ID used to identify this event. */
		event_id?: string | null;

		/**
		 * The event type, must be `response.create`.
		 * Required
		 */
		type: RealtimeClientEventResponseCreateType;

		/** Create a new Realtime response with these parameters */
		response?: RealtimeResponseCreateParams;
	}

	export enum RealtimeClientEventResponseCreateType { 'response.create' = 0 }


	/** Create a new Realtime response with these parameters */
	export interface RealtimeResponseCreateParams {

		/**
		 * The set of modalities the model can respond with. To disable audio,
		 * set this to ["text"].
		 */
		modalities?: Array<string>;

		/**
		 * The default system instructions (i.e. system message) prepended to model
		 * calls. This field allows the client to guide the model on desired
		 * responses. The model can be instructed on response content and format,
		 * (e.g. "be extremely succinct", "act friendly", "here are examples of good
		 * responses") and on audio behavior (e.g. "talk quickly", "inject emotion
		 * into your voice", "laugh frequently"). The instructions are not guaranteed
		 * to be followed by the model, but they provide guidance to the model on the
		 * desired behavior.
		 * Note that the server sets default instructions which will be used if this
		 * field is not set and are visible in the `session.created` event at the
		 * start of the session.
		 */
		instructions?: string | null;
		voice?: VoiceIdsShared;

		/**
		 * The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
		 */
		output_audio_format?: RealtimeResponseCreateParamsOutput_audio_format | null;

		/** Tools (functions) available to the model. */
		RealtimeResponseCreateParamsTools?: Array<RealtimeResponseCreateParamsTools>;

		/**
		 * How the model chooses tools. Options are `auto`, `none`, `required`, or
		 * specify a function, like `{"type": "function", "function": {"name": "my_function"}}`.
		 */
		tool_choice?: string | null;

		/**
		 * Sampling temperature for the model, limited to [0.6, 1.2]. Defaults to 0.8.
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * Maximum number of output tokens for a single assistant response,
		 * inclusive of tool calls. Provide an integer between 1 and 4096 to
		 * limit output tokens, or `inf` for the maximum available tokens for a
		 * given model. Defaults to `inf`.
		 */
		max_response_output_tokens?: number | null;

		/**
		 * Controls which conversation the response is added to. Currently supports
		 * `auto` and `none`, with `auto` as the default value. The `auto` value
		 * means that the contents of the response will be added to the default
		 * conversation. Set this to `none` to create an out-of-band response which
		 * will not add items to default conversation.
		 */
		conversation?: string;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;

		/**
		 * Input items to include in the prompt for the model. Using this field
		 * creates a new context for this Response instead of using the default
		 * conversation. An empty array `[]` will clear the context for this Response.
		 * Note that this can include references to items from the default conversation.
		 */
		input?: Array<RealtimeConversationItemWithReference>;
	}

	export enum RealtimeResponseCreateParamsOutput_audio_format { pcm16 = 0, g711_ulaw = 1, g711_alaw = 2 }

	export interface RealtimeResponseCreateParamsTools {

		/** The type of the tool, i.e. `function`. */
		type?: AssistantToolsFunctionType | null;

		/** The name of the function. */
		name?: string | null;

		/**
		 * The description of the function, including guidance on when and how
		 * to call it, and guidance about what to tell the user when calling
		 * (if anything).
		 */
		description?: string | null;

		/** Parameters of the function in JSON Schema. */
		parameters?: string | null;
	}


	/** The item to add to the conversation. */
	export interface RealtimeConversationItemWithReference {

		/**
		 * For an item of type (`message` | `function_call` | `function_call_output`)
		 * this field allows the client to assign the unique ID of the item. It is
		 * not required because the server will generate one if not provided.
		 * For an item of type `item_reference`, this field is required and is a
		 * reference to any item that has previously existed in the conversation.
		 */
		id?: string | null;

		/**
		 * The type of the item (`message`, `function_call`, `function_call_output`, `item_reference`).
		 */
		type?: RealtimeConversationItemType | null;

		/**
		 * Identifier for the API object being returned - always `realtime.item`.
		 */
		object?: RealtimeConversationItemObject | null;

		/**
		 * The status of the item (`completed`, `incomplete`). These have no effect
		 * on the conversation, but are accepted for consistency with the
		 * `conversation.item.created` event.
		 */
		status?: RealtimeConversationItemStatus | null;

		/**
		 * The role of the message sender (`user`, `assistant`, `system`), only
		 * applicable for `message` items.
		 */
		role?: RealtimeConversationItemRole | null;

		/**
		 * The content of the message, applicable for `message` items.
		 * - Message items of role `system` support only `input_text` content
		 * - Message items of role `user` support `input_text` and `input_audio`
		 * content
		 * - Message items of role `assistant` support `text` content.
		 */
		RealtimeConversationItemWithReferenceContent?: Array<RealtimeConversationItemWithReferenceContent>;

		/**
		 * The ID of the function call (for `function_call` and
		 * `function_call_output` items). If passed on a `function_call_output`
		 * item, the server will check that a `function_call` item with the same
		 * ID exists in the conversation history.
		 */
		call_id?: string | null;

		/**
		 * The name of the function being called (for `function_call` items).
		 */
		name?: string | null;

		/**
		 * The arguments of the function call (for `function_call` items).
		 */
		arguments?: string | null;

		/**
		 * The output of the function call (for `function_call_output` items).
		 */
		output?: string | null;
	}

	export interface RealtimeConversationItemWithReferenceContent {

		/**
		 * The content type (`input_text`, `input_audio`, `item_reference`, `text`).
		 */
		type?: RealtimeConversationItemContentType | null;

		/**
		 * The text content, used for `input_text` and `text` content types.
		 */
		text?: string | null;

		/**
		 * ID of a previous conversation item to reference (for `item_reference`
		 * content types in `response.create` events). These can reference both
		 * client and server created items.
		 */
		id?: string | null;

		/**
		 * Base64-encoded audio bytes, used for `input_audio` content type.
		 */
		audio?: string | null;

		/**
		 * The transcript of the audio, used for `input_audio` content type.
		 */
		transcript?: string | null;
	}


	/**
	 * Send this event to update the session’s default configuration.
	 * The client may send this event at any time to update any field,
	 * except for `voice`. However, note that once a session has been
	 * initialized with a particular `model`, it can’t be changed to
	 * another model using `session.update`.
	 * When the server receives a `session.update`, it will respond
	 * with a `session.updated` event showing the full, effective configuration.
	 * Only the fields that are present are updated. To clear a field like
	 * `instructions`, pass an empty string.
	 */
	export interface RealtimeClientEventSessionUpdate {

		/** Optional client-generated ID used to identify this event. */
		event_id?: string | null;

		/**
		 * The event type, must be `session.update`.
		 * Required
		 */
		type: RealtimeClientEventSessionUpdateType;

		/**
		 * Realtime session object configuration.
		 * Required
		 */
		session: RealtimeSessionCreateRequest;
	}

	export enum RealtimeClientEventSessionUpdateType { 'session.update' = 0 }


	/** Realtime session object configuration. */
	export interface RealtimeSessionCreateRequest {

		/**
		 * The set of modalities the model can respond with. To disable audio,
		 * set this to ["text"].
		 */
		modalities?: any;

		/**
		 * The Realtime model used for this session.
		 */
		model?: RealtimeSessionCreateRequestModel | null;

		/**
		 * The default system instructions (i.e. system message) prepended to model  calls. This field allows the client to guide the model on desired  responses. The model can be instructed on response content and format,  (e.g. "be extremely succinct", "act friendly", "here are examples of good  responses") and on audio behavior (e.g. "talk quickly", "inject emotion  into your voice", "laugh frequently"). The instructions are not guaranteed  to be followed by the model, but they provide guidance to the model on the desired behavior.
		 * Note that the server sets default instructions which will be used if this  field is not set and are visible in the `session.created` event at the  start of the session.
		 */
		instructions?: string | null;
		voice?: VoiceIdsShared;

		/**
		 * The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
		 * For `pcm16`, input audio must be 16-bit PCM at a 24kHz sample rate,
		 * single channel (mono), and little-endian byte order.
		 */
		input_audio_format?: RealtimeResponseCreateParamsOutput_audio_format | null;

		/**
		 * The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
		 * For `pcm16`, output audio is sampled at a rate of 24kHz.
		 */
		output_audio_format?: RealtimeResponseCreateParamsOutput_audio_format | null;

		/**
		 * Configuration for input audio transcription, defaults to off and can be  set to `null` to turn off once on. Input audio transcription is not native to the model, since the model consumes audio directly. Transcription runs  asynchronously through [the /audio/transcriptions endpoint](https://platform.openai.com/docs/api-reference/audio/createTranscription) and should be treated as guidance of input audio content rather than precisely what the model heard. The client can optionally set the language and prompt for transcription, these offer additional guidance to the transcription service.
		 */
		input_audio_transcription?: RealtimeSessionCreateRequestInput_audio_transcription;

		/**
		 * Configuration for turn detection, ether Server VAD or Semantic VAD. This can be set to `null` to turn off, in which case the client must manually trigger model response.
		 * Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech.
		 * Semantic VAD is more advanced and uses a turn detection model (in conjuction with VAD) to semantically estimate whether the user has finished speaking, then dynamically sets a timeout based on this probability. For example, if user audio trails off with "uhhm", the model will score a low probability of turn end and wait longer for the user to continue speaking. This can be useful for more natural conversations, but may have a higher latency.
		 */
		turn_detection?: RealtimeSessionCreateRequestTurn_detection;

		/**
		 * Configuration for input audio noise reduction. This can be set to `null` to turn off.
		 * Noise reduction filters audio added to the input audio buffer before it is sent to VAD and the model.
		 * Filtering the audio can improve VAD and turn detection accuracy (reducing false positives) and model performance by improving perception of the input audio.
		 */
		input_audio_noise_reduction?: RealtimeSessionCreateRequestInput_audio_noise_reduction;

		/** Tools (functions) available to the model. */
		RealtimeSessionCreateRequestTools?: Array<RealtimeSessionCreateRequestTools>;

		/**
		 * How the model chooses tools. Options are `auto`, `none`, `required`, or
		 * specify a function.
		 */
		tool_choice?: string | null;

		/**
		 * Sampling temperature for the model, limited to [0.6, 1.2]. For audio models a temperature of 0.8 is highly recommended for best performance.
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * Maximum number of output tokens for a single assistant response,
		 * inclusive of tool calls. Provide an integer between 1 and 4096 to
		 * limit output tokens, or `inf` for the maximum available tokens for a
		 * given model. Defaults to `inf`.
		 */
		max_response_output_tokens?: number | null;
	}

	export enum RealtimeSessionCreateRequestModel { 'gpt-4o-realtime-preview' = 0, 'gpt-4o-realtime-preview-2024-10-01' = 1, 'gpt-4o-realtime-preview-2024-12-17' = 2, 'gpt-4o-mini-realtime-preview' = 3, 'gpt-4o-mini-realtime-preview-2024-12-17' = 4 }

	export interface RealtimeSessionCreateRequestInput_audio_transcription {

		/**
		 * The model to use for transcription, current options are `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `whisper-1`.
		 */
		model?: string | null;

		/**
		 * The language of the input audio. Supplying the input language in
		 * [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format
		 * will improve accuracy and latency.
		 */
		language?: string | null;

		/**
		 * An optional text to guide the model's style or continue a previous audio
		 * segment.
		 * For `whisper-1`, the [prompt is a list of keywords](/docs/guides/speech-to-text#prompting).
		 * For `gpt-4o-transcribe` models, the prompt is a free text string, for example "expect words related to technology".
		 */
		prompt?: string | null;
	}

	export interface RealtimeSessionCreateRequestTurn_detection {

		/**
		 * Type of turn detection.
		 */
		type?: RealtimeSessionCreateRequestTurn_detectionType | null;

		/**
		 * Used only for `semantic_vad` mode. The eagerness of the model to respond. `low` will wait longer for the user to continue speaking, `high` will respond more quickly. `auto` is the default and is equivalent to `medium`.
		 */
		eagerness?: RealtimeSessionCreateRequestTurn_detectionEagerness | null;

		/**
		 * Used only for `server_vad` mode. Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A
		 * higher threshold will require louder audio to activate the model, and
		 * thus might perform better in noisy environments.
		 * Type: double
		 */
		threshold?: number | null;

		/**
		 * Used only for `server_vad` mode. Amount of audio to include before the VAD detected speech (in
		 * milliseconds). Defaults to 300ms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		prefix_padding_ms?: number | null;

		/**
		 * Used only for `server_vad` mode. Duration of silence to detect speech stop (in milliseconds). Defaults
		 * to 500ms. With shorter values the model will respond more quickly,
		 * but may jump in on short pauses from the user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		silence_duration_ms?: number | null;

		/**
		 * Whether or not to automatically generate a response when a VAD stop event occurs.
		 */
		create_response?: boolean | null;

		/**
		 * Whether or not to automatically interrupt any ongoing response with output to the default
		 * conversation (i.e. `conversation` of `auto`) when a VAD start event occurs.
		 */
		interrupt_response?: boolean | null;
	}

	export enum RealtimeSessionCreateRequestTurn_detectionType { server_vad = 0, semantic_vad = 1 }

	export enum RealtimeSessionCreateRequestTurn_detectionEagerness { low = 0, medium = 1, high = 2, auto = 3 }

	export interface RealtimeSessionCreateRequestInput_audio_noise_reduction {

		/**
		 * Type of noise reduction. `near_field` is for close-talking microphones such as headphones, `far_field` is for far-field microphones such as laptop or conference room microphones.
		 */
		type?: RealtimeSessionCreateRequestInput_audio_noise_reductionType | null;
	}

	export enum RealtimeSessionCreateRequestInput_audio_noise_reductionType { near_field = 0, far_field = 1 }

	export interface RealtimeSessionCreateRequestTools {

		/** The type of the tool, i.e. `function`. */
		type?: AssistantToolsFunctionType | null;

		/** The name of the function. */
		name?: string | null;

		/**
		 * The description of the function, including guidance on when and how
		 * to call it, and guidance about what to tell the user when calling
		 * (if anything).
		 */
		description?: string | null;

		/** Parameters of the function in JSON Schema. */
		parameters?: string | null;
	}


	/**
	 * Send this event to update a transcription session.
	 */
	export interface RealtimeClientEventTranscriptionSessionUpdate {

		/** Optional client-generated ID used to identify this event. */
		event_id?: string | null;

		/**
		 * The event type, must be `transcription_session.update`.
		 * Required
		 */
		type: RealtimeClientEventTranscriptionSessionUpdateType;

		/**
		 * Realtime transcription session object configuration.
		 * Required
		 */
		session: RealtimeTranscriptionSessionCreateRequest;
	}

	export enum RealtimeClientEventTranscriptionSessionUpdateType { 'transcription_session.update' = 0 }


	/** Realtime transcription session object configuration. */
	export interface RealtimeTranscriptionSessionCreateRequest {

		/**
		 * The set of modalities the model can respond with. To disable audio,
		 * set this to ["text"].
		 */
		modalities?: any;

		/**
		 * The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
		 * For `pcm16`, input audio must be 16-bit PCM at a 24kHz sample rate,
		 * single channel (mono), and little-endian byte order.
		 */
		input_audio_format?: RealtimeResponseCreateParamsOutput_audio_format | null;

		/**
		 * Configuration for input audio transcription. The client can optionally set the language and prompt for transcription, these offer additional guidance to the transcription service.
		 */
		input_audio_transcription?: RealtimeTranscriptionSessionCreateRequestInput_audio_transcription;

		/**
		 * Configuration for turn detection, ether Server VAD or Semantic VAD. This can be set to `null` to turn off, in which case the client must manually trigger model response.
		 * Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech.
		 * Semantic VAD is more advanced and uses a turn detection model (in conjuction with VAD) to semantically estimate whether the user has finished speaking, then dynamically sets a timeout based on this probability. For example, if user audio trails off with "uhhm", the model will score a low probability of turn end and wait longer for the user to continue speaking. This can be useful for more natural conversations, but may have a higher latency.
		 */
		turn_detection?: RealtimeTranscriptionSessionCreateRequestTurn_detection;

		/**
		 * Configuration for input audio noise reduction. This can be set to `null` to turn off.
		 * Noise reduction filters audio added to the input audio buffer before it is sent to VAD and the model.
		 * Filtering the audio can improve VAD and turn detection accuracy (reducing false positives) and model performance by improving perception of the input audio.
		 */
		input_audio_noise_reduction?: RealtimeTranscriptionSessionCreateRequestInput_audio_noise_reduction;

		/**
		 * The set of items to include in the transcription. Current available items are:
		 * - `item.input_audio_transcription.logprobs`
		 */
		include?: Array<string>;
	}

	export interface RealtimeTranscriptionSessionCreateRequestInput_audio_transcription {

		/**
		 * The model to use for transcription, current options are `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `whisper-1`.
		 */
		model?: RealtimeTranscriptionSessionCreateRequestInput_audio_transcriptionModel | null;

		/**
		 * The language of the input audio. Supplying the input language in
		 * [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format
		 * will improve accuracy and latency.
		 */
		language?: string | null;

		/**
		 * An optional text to guide the model's style or continue a previous audio
		 * segment.
		 * For `whisper-1`, the [prompt is a list of keywords](/docs/guides/speech-to-text#prompting).
		 * For `gpt-4o-transcribe` models, the prompt is a free text string, for example "expect words related to technology".
		 */
		prompt?: string | null;
	}

	export enum RealtimeTranscriptionSessionCreateRequestInput_audio_transcriptionModel { 'gpt-4o-transcribe' = 0, 'gpt-4o-mini-transcribe' = 1, 'whisper-1' = 2 }

	export interface RealtimeTranscriptionSessionCreateRequestTurn_detection {

		/**
		 * Type of turn detection.
		 */
		type?: RealtimeSessionCreateRequestTurn_detectionType | null;

		/**
		 * Used only for `semantic_vad` mode. The eagerness of the model to respond. `low` will wait longer for the user to continue speaking, `high` will respond more quickly. `auto` is the default and is equivalent to `medium`.
		 */
		eagerness?: RealtimeSessionCreateRequestTurn_detectionEagerness | null;

		/**
		 * Used only for `server_vad` mode. Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A
		 * higher threshold will require louder audio to activate the model, and
		 * thus might perform better in noisy environments.
		 * Type: double
		 */
		threshold?: number | null;

		/**
		 * Used only for `server_vad` mode. Amount of audio to include before the VAD detected speech (in
		 * milliseconds). Defaults to 300ms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		prefix_padding_ms?: number | null;

		/**
		 * Used only for `server_vad` mode. Duration of silence to detect speech stop (in milliseconds). Defaults
		 * to 500ms. With shorter values the model will respond more quickly,
		 * but may jump in on short pauses from the user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		silence_duration_ms?: number | null;

		/**
		 * Whether or not to automatically generate a response when a VAD stop event occurs. Not available for transcription sessions.
		 */
		create_response?: boolean | null;

		/**
		 * Whether or not to automatically interrupt any ongoing response with output to the default
		 * conversation (i.e. `conversation` of `auto`) when a VAD start event occurs. Not available for transcription sessions.
		 */
		interrupt_response?: boolean | null;
	}

	export interface RealtimeTranscriptionSessionCreateRequestInput_audio_noise_reduction {

		/**
		 * Type of noise reduction. `near_field` is for close-talking microphones such as headphones, `far_field` is for far-field microphones such as laptop or conference room microphones.
		 */
		type?: RealtimeSessionCreateRequestInput_audio_noise_reductionType | null;
	}


	/** The response resource. */
	export interface RealtimeResponse {

		/** The unique ID of the response. */
		id?: string | null;

		/** The object type, must be `realtime.response`. */
		object?: RealtimeResponseObject | null;

		/**
		 * The final status of the response (`completed`, `cancelled`, `failed`, or
		 * `incomplete`).
		 */
		status?: RealtimeResponseStatus | null;

		/** Additional details about the status. */
		status_details?: RealtimeResponseStatus_details;

		/** The list of output items generated by the response. */
		output?: Array<RealtimeConversationItem>;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;

		/**
		 * Usage statistics for the Response, this will correspond to billing. A
		 * Realtime API session will maintain a conversation context and append new
		 * Items to the Conversation, thus output from previous turns (text and
		 * audio tokens) will become the input for later turns.
		 */
		usage?: RealtimeResponseUsage;

		/**
		 * Which conversation the response is added to, determined by the `conversation`
		 * field in the `response.create` event. If `auto`, the response will be added to
		 * the default conversation and the value of `conversation_id` will be an id like
		 * `conv_1234`. If `none`, the response will not be added to any conversation and
		 * the value of `conversation_id` will be `null`. If responses are being triggered
		 * by server VAD, the response will be added to the default conversation, thus
		 * the `conversation_id` will be an id like `conv_1234`.
		 */
		conversation_id?: string | null;
		voice?: VoiceIdsShared;

		/**
		 * The set of modalities the model used to respond. If there are multiple modalities,
		 * the model will pick one, for example if `modalities` is `["text", "audio"]`, the model
		 * could be responding in either text or audio.
		 */
		modalities?: Array<string>;

		/**
		 * The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
		 */
		output_audio_format?: RealtimeResponseCreateParamsOutput_audio_format | null;

		/**
		 * Sampling temperature for the model, limited to [0.6, 1.2]. Defaults to 0.8.
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * Maximum number of output tokens for a single assistant response,
		 * inclusive of tool calls, that was used in this response.
		 */
		max_output_tokens?: number | null;
	}

	export enum RealtimeResponseObject { 'realtime.response' = 0 }

	export enum RealtimeResponseStatus { completed = 0, cancelled = 1, failed = 2, incomplete = 3 }

	export interface RealtimeResponseStatus_details {

		/**
		 * The type of error that caused the response to fail, corresponding
		 * with the `status` field (`completed`, `cancelled`, `incomplete`,
		 * `failed`).
		 */
		type?: RealtimeResponseStatus | null;

		/**
		 * The reason the Response did not complete. For a `cancelled` Response,
		 * one of `turn_detected` (the server VAD detected a new start of speech)
		 * or `client_cancelled` (the client sent a cancel event). For an
		 * `incomplete` Response, one of `max_output_tokens` or `content_filter`
		 * (the server-side safety filter activated and cut off the response).
		 */
		reason?: RealtimeResponseStatus_detailsReason | null;

		/**
		 * A description of the error that caused the response to fail,
		 * populated when the `status` is `failed`.
		 */
		error?: RealtimeResponseStatus_detailsError;
	}

	export enum RealtimeResponseStatus_detailsReason { turn_detected = 0, client_cancelled = 1, max_output_tokens = 2, content_filter = 3 }

	export interface RealtimeResponseStatus_detailsError {

		/** The type of error. */
		type?: string | null;

		/** Error code, if any. */
		code?: string | null;
	}

	export interface RealtimeResponseUsage {

		/**
		 * The total number of tokens in the Response including input and output
		 * text and audio tokens.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_tokens?: number | null;

		/**
		 * The number of input tokens used in the Response, including text and
		 * audio tokens.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		input_tokens?: number | null;

		/**
		 * The number of output tokens sent in the Response, including text and
		 * audio tokens.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_tokens?: number | null;

		/** Details about the input tokens used in the Response. */
		input_token_details?: RealtimeResponseUsageInput_token_details;

		/** Details about the output tokens used in the Response. */
		output_token_details?: RealtimeResponseUsageOutput_token_details;
	}

	export interface RealtimeResponseUsageInput_token_details {

		/**
		 * The number of cached tokens used in the Response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cached_tokens?: number | null;

		/**
		 * The number of text tokens used in the Response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		text_tokens?: number | null;

		/**
		 * The number of audio tokens used in the Response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_tokens?: number | null;
	}

	export interface RealtimeResponseUsageOutput_token_details {

		/**
		 * The number of text tokens used in the Response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		text_tokens?: number | null;

		/**
		 * The number of audio tokens used in the Response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_tokens?: number | null;
	}


	/**
	 * A realtime server event.
	 */
	export interface RealtimeServerEvent {
	}


	/**
	 * Returned when a conversation is created. Emitted right after session creation.
	 */
	export interface RealtimeServerEventConversationCreated {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `conversation.created`.
		 * Required
		 */
		type: RealtimeServerEventConversationCreatedType;

		/**
		 * The conversation resource.
		 * Required
		 */
		conversation: RealtimeServerEventConversationCreatedConversation;
	}

	export enum RealtimeServerEventConversationCreatedType { 'conversation.created' = 0 }

	export interface RealtimeServerEventConversationCreatedConversation {

		/** The unique ID of the conversation. */
		id?: string | null;

		/** The object type, must be `realtime.conversation`. */
		object?: string | null;
	}


	/**
	 * Returned when a conversation item is created. There are several scenarios that produce this event:
	 *   - The server is generating a Response, which if successful will produce 
	 *     either one or two Items, which will be of type `message` 
	 *     (role `assistant`) or type `function_call`.
	 *   - The input audio buffer has been committed, either by the client or the 
	 *     server (in `server_vad` mode). The server will take the content of the 
	 *     input audio buffer and add it to a new user message Item.
	 *   - The client has sent a `conversation.item.create` event to add a new Item 
	 *     to the Conversation.
	 */
	export interface RealtimeServerEventConversationItemCreated {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `conversation.item.created`.
		 * Required
		 */
		type: RealtimeServerEventConversationItemCreatedType;

		/**
		 * The ID of the preceding item in the Conversation context, allows the
		 * client to understand the order of the conversation.
		 * Required
		 */
		previous_item_id: string;

		/**
		 * The item to add to the conversation.
		 * Required
		 */
		item: RealtimeConversationItem;
	}

	export enum RealtimeServerEventConversationItemCreatedType { 'conversation.item.created' = 0 }


	/**
	 * Returned when an item in the conversation is deleted by the client with a 
	 * `conversation.item.delete` event. This event is used to synchronize the 
	 * server's understanding of the conversation history with the client's view.
	 */
	export interface RealtimeServerEventConversationItemDeleted {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `conversation.item.deleted`.
		 * Required
		 */
		type: RealtimeServerEventConversationItemDeletedType;

		/**
		 * The ID of the item that was deleted.
		 * Required
		 */
		item_id: string;
	}

	export enum RealtimeServerEventConversationItemDeletedType { 'conversation.item.deleted' = 0 }


	/**
	 * This event is the output of audio transcription for user audio written to the 
	 * user audio buffer. Transcription begins when the input audio buffer is 
	 * committed by the client or server (in `server_vad` mode). Transcription runs 
	 * asynchronously with Response creation, so this event may come before or after 
	 * the Response events.
	 * Realtime API models accept audio natively, and thus input transcription is a 
	 * separate process run on a separate ASR (Automatic Speech Recognition) model, 
	 * currently always `whisper-1`. Thus the transcript may diverge somewhat from 
	 * the model's interpretation, and should be treated as a rough guide.
	 */
	export interface RealtimeServerEventConversationItemInputAudioTranscriptionCompleted {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be
		 * `conversation.item.input_audio_transcription.completed`.
		 * Required
		 */
		type: RealtimeServerEventConversationItemInputAudioTranscriptionCompletedType;

		/**
		 * The ID of the user message item containing the audio.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the content part containing the audio.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * The transcribed text.
		 * Required
		 */
		transcript: string;

		/** The log probabilities of the transcription. */
		logprobs?: Array<LogProbProperties>;
	}

	export enum RealtimeServerEventConversationItemInputAudioTranscriptionCompletedType { 'conversation.item.input_audio_transcription.completed' = 0 }


	/**
	 * Returned when the text value of an input audio transcription content part is updated.
	 */
	export interface RealtimeServerEventConversationItemInputAudioTranscriptionDelta {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `conversation.item.input_audio_transcription.delta`.
		 * Required
		 */
		type: RealtimeServerEventConversationItemInputAudioTranscriptionDeltaType;

		/**
		 * The ID of the item.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the content part in the item's content array.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index?: number | null;

		/** The text delta. */
		delta?: string | null;

		/** The log probabilities of the transcription. */
		logprobs?: Array<LogProbProperties>;
	}

	export enum RealtimeServerEventConversationItemInputAudioTranscriptionDeltaType { 'conversation.item.input_audio_transcription.delta' = 0 }


	/**
	 * Returned when input audio transcription is configured, and a transcription 
	 * request for a user message failed. These events are separate from other 
	 * `error` events so that the client can identify the related Item.
	 */
	export interface RealtimeServerEventConversationItemInputAudioTranscriptionFailed {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be
		 * `conversation.item.input_audio_transcription.failed`.
		 * Required
		 */
		type: RealtimeServerEventConversationItemInputAudioTranscriptionFailedType;

		/**
		 * The ID of the user message item.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the content part containing the audio.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * Details of the transcription error.
		 * Required
		 */
		error: RealtimeServerEventConversationItemInputAudioTranscriptionFailedError;
	}

	export enum RealtimeServerEventConversationItemInputAudioTranscriptionFailedType { 'conversation.item.input_audio_transcription.failed' = 0 }

	export interface RealtimeServerEventConversationItemInputAudioTranscriptionFailedError {

		/** The type of error. */
		type?: string | null;

		/** Error code, if any. */
		code?: string | null;

		/** A human-readable error message. */
		message?: string | null;

		/** Parameter related to the error, if any. */
		param?: string | null;
	}


	/**
	 * Returned when a conversation item is retrieved with `conversation.item.retrieve`.
	 */
	export interface RealtimeServerEventConversationItemRetrieved {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `conversation.item.retrieved`.
		 * Required
		 */
		type: RealtimeServerEventConversationItemRetrievedType;

		/**
		 * The item to add to the conversation.
		 * Required
		 */
		item: RealtimeConversationItem;
	}

	export enum RealtimeServerEventConversationItemRetrievedType { 'conversation.item.retrieved' = 0 }


	/**
	 * Returned when an earlier assistant audio message item is truncated by the 
	 * client with a `conversation.item.truncate` event. This event is used to 
	 * synchronize the server's understanding of the audio with the client's playback.
	 * This action will truncate the audio and remove the server-side text transcript 
	 * to ensure there is no text in the context that hasn't been heard by the user.
	 */
	export interface RealtimeServerEventConversationItemTruncated {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `conversation.item.truncated`.
		 * Required
		 */
		type: RealtimeServerEventConversationItemTruncatedType;

		/**
		 * The ID of the assistant message item that was truncated.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the content part that was truncated.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * The duration up to which the audio was truncated, in milliseconds.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_end_ms: number;
	}

	export enum RealtimeServerEventConversationItemTruncatedType { 'conversation.item.truncated' = 0 }


	/**
	 * Returned when an error occurs, which could be a client problem or a server 
	 * problem. Most errors are recoverable and the session will stay open, we 
	 * recommend to implementors to monitor and log error messages by default.
	 */
	export interface RealtimeServerEventError {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `error`.
		 * Required
		 */
		type: ErrorEventEvent;

		/**
		 * Details of the error.
		 * Required
		 */
		error: RealtimeServerEventErrorError;
	}

	export interface RealtimeServerEventErrorError {

		/**
		 * The type of error (e.g., "invalid_request_error", "server_error").
		 * Required
		 */
		type: string;

		/** Error code, if any. */
		code?: string | null;

		/**
		 * A human-readable error message.
		 * Required
		 */
		message: string;

		/** Parameter related to the error, if any. */
		param?: string | null;

		/**
		 * The event_id of the client event that caused the error, if applicable.
		 */
		event_id?: string | null;
	}


	/**
	 * Returned when the input audio buffer is cleared by the client with a 
	 * `input_audio_buffer.clear` event.
	 */
	export interface RealtimeServerEventInputAudioBufferCleared {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `input_audio_buffer.cleared`.
		 * Required
		 */
		type: RealtimeServerEventInputAudioBufferClearedType;
	}

	export enum RealtimeServerEventInputAudioBufferClearedType { 'input_audio_buffer.cleared' = 0 }


	/**
	 * Returned when an input audio buffer is committed, either by the client or 
	 * automatically in server VAD mode. The `item_id` property is the ID of the user
	 * message item that will be created, thus a `conversation.item.created` event 
	 * will also be sent to the client.
	 */
	export interface RealtimeServerEventInputAudioBufferCommitted {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `input_audio_buffer.committed`.
		 * Required
		 */
		type: RealtimeServerEventInputAudioBufferCommittedType;

		/**
		 * The ID of the preceding item after which the new item will be inserted.
		 * Required
		 */
		previous_item_id: string;

		/**
		 * The ID of the user message item that will be created.
		 * Required
		 */
		item_id: string;
	}

	export enum RealtimeServerEventInputAudioBufferCommittedType { 'input_audio_buffer.committed' = 0 }


	/**
	 * Sent by the server when in `server_vad` mode to indicate that speech has been 
	 * detected in the audio buffer. This can happen any time audio is added to the 
	 * buffer (unless speech is already detected). The client may want to use this 
	 * event to interrupt audio playback or provide visual feedback to the user. 
	 * The client should expect to receive a `input_audio_buffer.speech_stopped` event 
	 * when speech stops. The `item_id` property is the ID of the user message item 
	 * that will be created when speech stops and will also be included in the 
	 * `input_audio_buffer.speech_stopped` event (unless the client manually commits 
	 * the audio buffer during VAD activation).
	 */
	export interface RealtimeServerEventInputAudioBufferSpeechStarted {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `input_audio_buffer.speech_started`.
		 * Required
		 */
		type: RealtimeServerEventInputAudioBufferSpeechStartedType;

		/**
		 * Milliseconds from the start of all audio written to the buffer during the
		 * session when speech was first detected. This will correspond to the
		 * beginning of audio sent to the model, and thus includes the
		 * `prefix_padding_ms` configured in the Session.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_start_ms: number;

		/**
		 * The ID of the user message item that will be created when speech stops.
		 * Required
		 */
		item_id: string;
	}

	export enum RealtimeServerEventInputAudioBufferSpeechStartedType { 'input_audio_buffer.speech_started' = 0 }


	/**
	 * Returned in `server_vad` mode when the server detects the end of speech in 
	 * the audio buffer. The server will also send an `conversation.item.created` 
	 * event with the user message item that is created from the audio buffer.
	 */
	export interface RealtimeServerEventInputAudioBufferSpeechStopped {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `input_audio_buffer.speech_stopped`.
		 * Required
		 */
		type: RealtimeServerEventInputAudioBufferSpeechStoppedType;

		/**
		 * Milliseconds since the session started when speech stopped. This will
		 * correspond to the end of audio sent to the model, and thus includes the
		 * `min_silence_duration_ms` configured in the Session.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_end_ms: number;

		/**
		 * The ID of the user message item that will be created.
		 * Required
		 */
		item_id: string;
	}

	export enum RealtimeServerEventInputAudioBufferSpeechStoppedType { 'input_audio_buffer.speech_stopped' = 0 }


	/**
	 * **WebRTC Only:** Emitted when the output audio buffer is cleared. This happens either in VAD
	 * mode when the user has interrupted (`input_audio_buffer.speech_started`),
	 * or when the client has emitted the `output_audio_buffer.clear` event to manually
	 * cut off the current audio response.
	 * [Learn more](/docs/guides/realtime-model-capabilities#client-and-server-events-for-audio-in-webrtc).
	 */
	export interface RealtimeServerEventOutputAudioBufferCleared {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `output_audio_buffer.cleared`.
		 * Required
		 */
		type: RealtimeServerEventOutputAudioBufferClearedType;

		/**
		 * The unique ID of the response that produced the audio.
		 * Required
		 */
		response_id: string;
	}

	export enum RealtimeServerEventOutputAudioBufferClearedType { 'output_audio_buffer.cleared' = 0 }


	/**
	 * **WebRTC Only:** Emitted when the server begins streaming audio to the client. This event is
	 * emitted after an audio content part has been added (`response.content_part.added`)
	 * to the response.
	 * [Learn more](/docs/guides/realtime-model-capabilities#client-and-server-events-for-audio-in-webrtc).
	 */
	export interface RealtimeServerEventOutputAudioBufferStarted {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `output_audio_buffer.started`.
		 * Required
		 */
		type: RealtimeServerEventOutputAudioBufferStartedType;

		/**
		 * The unique ID of the response that produced the audio.
		 * Required
		 */
		response_id: string;
	}

	export enum RealtimeServerEventOutputAudioBufferStartedType { 'output_audio_buffer.started' = 0 }


	/**
	 * **WebRTC Only:** Emitted when the output audio buffer has been completely drained on the server,
	 * and no more audio is forthcoming. This event is emitted after the full response
	 * data has been sent to the client (`response.done`).
	 * [Learn more](/docs/guides/realtime-model-capabilities#client-and-server-events-for-audio-in-webrtc).
	 */
	export interface RealtimeServerEventOutputAudioBufferStopped {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `output_audio_buffer.stopped`.
		 * Required
		 */
		type: RealtimeServerEventOutputAudioBufferStoppedType;

		/**
		 * The unique ID of the response that produced the audio.
		 * Required
		 */
		response_id: string;
	}

	export enum RealtimeServerEventOutputAudioBufferStoppedType { 'output_audio_buffer.stopped' = 0 }


	/**
	 * Emitted at the beginning of a Response to indicate the updated rate limits. 
	 * When a Response is created some tokens will be "reserved" for the output 
	 * tokens, the rate limits shown here reflect that reservation, which is then 
	 * adjusted accordingly once the Response is completed.
	 */
	export interface RealtimeServerEventRateLimitsUpdated {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `rate_limits.updated`.
		 * Required
		 */
		type: RealtimeServerEventRateLimitsUpdatedType;

		/**
		 * List of rate limit information.
		 * Required
		 */
		RealtimeServerEventRateLimitsUpdatedRate_limits: Array<RealtimeServerEventRateLimitsUpdatedRate_limits>;
	}

	export enum RealtimeServerEventRateLimitsUpdatedType { 'rate_limits.updated' = 0 }

	export interface RealtimeServerEventRateLimitsUpdatedRate_limits {

		/**
		 * The name of the rate limit (`requests`, `tokens`).
		 */
		name?: RealtimeServerEventRateLimitsUpdatedRate_limitsName | null;

		/**
		 * The maximum allowed value for the rate limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/**
		 * The remaining value before the limit is reached.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remaining?: number | null;

		/**
		 * Seconds until the rate limit resets.
		 * Type: double
		 */
		reset_seconds?: number | null;
	}

	export enum RealtimeServerEventRateLimitsUpdatedRate_limitsName { requests = 0, tokens = 1 }


	/** Returned when the model-generated audio is updated. */
	export interface RealtimeServerEventResponseAudioDelta {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `response.audio.delta`.
		 * Required
		 */
		type: RealtimeServerEventResponseAudioDeltaType;

		/**
		 * The ID of the response.
		 * Required
		 */
		response_id: string;

		/**
		 * The ID of the item.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item in the response.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part in the item's content array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * Base64-encoded audio data delta.
		 * Required
		 */
		delta: string;
	}

	export enum RealtimeServerEventResponseAudioDeltaType { 'response.audio.delta' = 0 }


	/**
	 * Returned when the model-generated audio is done. Also emitted when a Response
	 * is interrupted, incomplete, or cancelled.
	 */
	export interface RealtimeServerEventResponseAudioDone {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `response.audio.done`.
		 * Required
		 */
		type: RealtimeServerEventResponseAudioDoneType;

		/**
		 * The ID of the response.
		 * Required
		 */
		response_id: string;

		/**
		 * The ID of the item.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item in the response.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part in the item's content array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;
	}

	export enum RealtimeServerEventResponseAudioDoneType { 'response.audio.done' = 0 }


	/**
	 * Returned when the model-generated transcription of audio output is updated.
	 */
	export interface RealtimeServerEventResponseAudioTranscriptDelta {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `response.audio_transcript.delta`.
		 * Required
		 */
		type: RealtimeServerEventResponseAudioTranscriptDeltaType;

		/**
		 * The ID of the response.
		 * Required
		 */
		response_id: string;

		/**
		 * The ID of the item.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item in the response.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part in the item's content array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * The transcript delta.
		 * Required
		 */
		delta: string;
	}

	export enum RealtimeServerEventResponseAudioTranscriptDeltaType { 'response.audio_transcript.delta' = 0 }


	/**
	 * Returned when the model-generated transcription of audio output is done
	 * streaming. Also emitted when a Response is interrupted, incomplete, or
	 * cancelled.
	 */
	export interface RealtimeServerEventResponseAudioTranscriptDone {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `response.audio_transcript.done`.
		 * Required
		 */
		type: RealtimeServerEventResponseAudioTranscriptDoneType;

		/**
		 * The ID of the response.
		 * Required
		 */
		response_id: string;

		/**
		 * The ID of the item.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item in the response.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part in the item's content array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * The final transcript of the audio.
		 * Required
		 */
		transcript: string;
	}

	export enum RealtimeServerEventResponseAudioTranscriptDoneType { 'response.audio_transcript.done' = 0 }


	/**
	 * Returned when a new content part is added to an assistant message item during
	 * response generation.
	 */
	export interface RealtimeServerEventResponseContentPartAdded {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `response.content_part.added`.
		 * Required
		 */
		type: RealtimeServerEventResponseContentPartAddedType;

		/**
		 * The ID of the response.
		 * Required
		 */
		response_id: string;

		/**
		 * The ID of the item to which the content part was added.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item in the response.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part in the item's content array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * The content part that was added.
		 * Required
		 */
		part: RealtimeServerEventResponseContentPartAddedPart;
	}

	export enum RealtimeServerEventResponseContentPartAddedType { 'response.content_part.added' = 0 }

	export interface RealtimeServerEventResponseContentPartAddedPart {

		/** The content type ("text", "audio"). */
		type?: RealtimeServerEventResponseContentPartAddedPartType | null;

		/** The text content (if type is "text"). */
		text?: string | null;

		/** Base64-encoded audio data (if type is "audio"). */
		audio?: string | null;

		/** The transcript of the audio (if type is "audio"). */
		transcript?: string | null;
	}

	export enum RealtimeServerEventResponseContentPartAddedPartType { audio = 0, text = 1 }


	/**
	 * Returned when a content part is done streaming in an assistant message item.
	 * Also emitted when a Response is interrupted, incomplete, or cancelled.
	 */
	export interface RealtimeServerEventResponseContentPartDone {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `response.content_part.done`.
		 * Required
		 */
		type: RealtimeServerEventResponseContentPartDoneType;

		/**
		 * The ID of the response.
		 * Required
		 */
		response_id: string;

		/**
		 * The ID of the item.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item in the response.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part in the item's content array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * The content part that is done.
		 * Required
		 */
		part: RealtimeServerEventResponseContentPartDonePart;
	}

	export enum RealtimeServerEventResponseContentPartDoneType { 'response.content_part.done' = 0 }

	export interface RealtimeServerEventResponseContentPartDonePart {

		/** The content type ("text", "audio"). */
		type?: RealtimeServerEventResponseContentPartAddedPartType | null;

		/** The text content (if type is "text"). */
		text?: string | null;

		/** Base64-encoded audio data (if type is "audio"). */
		audio?: string | null;

		/** The transcript of the audio (if type is "audio"). */
		transcript?: string | null;
	}


	/**
	 * Returned when a new Response is created. The first event of response creation,
	 * where the response is in an initial state of `in_progress`.
	 */
	export interface RealtimeServerEventResponseCreated {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `response.created`.
		 * Required
		 */
		type: RealtimeServerEventResponseCreatedType;

		/**
		 * The response resource.
		 * Required
		 */
		response: RealtimeResponse;
	}

	export enum RealtimeServerEventResponseCreatedType { 'response.created' = 0 }


	/**
	 * Returned when a Response is done streaming. Always emitted, no matter the 
	 * final state. The Response object included in the `response.done` event will 
	 * include all output Items in the Response but will omit the raw audio data.
	 */
	export interface RealtimeServerEventResponseDone {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `response.done`.
		 * Required
		 */
		type: RealtimeServerEventResponseDoneType;

		/**
		 * The response resource.
		 * Required
		 */
		response: RealtimeResponse;
	}

	export enum RealtimeServerEventResponseDoneType { 'response.done' = 0 }


	/**
	 * Returned when the model-generated function call arguments are updated.
	 */
	export interface RealtimeServerEventResponseFunctionCallArgumentsDelta {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `response.function_call_arguments.delta`.
		 * Required
		 */
		type: RealtimeServerEventResponseFunctionCallArgumentsDeltaType;

		/**
		 * The ID of the response.
		 * Required
		 */
		response_id: string;

		/**
		 * The ID of the function call item.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item in the response.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The ID of the function call.
		 * Required
		 */
		call_id: string;

		/**
		 * The arguments delta as a JSON string.
		 * Required
		 */
		delta: string;
	}

	export enum RealtimeServerEventResponseFunctionCallArgumentsDeltaType { 'response.function_call_arguments.delta' = 0 }


	/**
	 * Returned when the model-generated function call arguments are done streaming.
	 * Also emitted when a Response is interrupted, incomplete, or cancelled.
	 */
	export interface RealtimeServerEventResponseFunctionCallArgumentsDone {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `response.function_call_arguments.done`.
		 * Required
		 */
		type: RealtimeServerEventResponseFunctionCallArgumentsDoneType;

		/**
		 * The ID of the response.
		 * Required
		 */
		response_id: string;

		/**
		 * The ID of the function call item.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item in the response.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The ID of the function call.
		 * Required
		 */
		call_id: string;

		/**
		 * The final arguments as a JSON string.
		 * Required
		 */
		arguments: string;
	}

	export enum RealtimeServerEventResponseFunctionCallArgumentsDoneType { 'response.function_call_arguments.done' = 0 }


	/** Returned when a new Item is created during Response generation. */
	export interface RealtimeServerEventResponseOutputItemAdded {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `response.output_item.added`.
		 * Required
		 */
		type: RealtimeServerEventResponseOutputItemAddedType;

		/**
		 * The ID of the Response to which the item belongs.
		 * Required
		 */
		response_id: string;

		/**
		 * The index of the output item in the Response.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The item to add to the conversation.
		 * Required
		 */
		item: RealtimeConversationItem;
	}

	export enum RealtimeServerEventResponseOutputItemAddedType { 'response.output_item.added' = 0 }


	/**
	 * Returned when an Item is done streaming. Also emitted when a Response is 
	 * interrupted, incomplete, or cancelled.
	 */
	export interface RealtimeServerEventResponseOutputItemDone {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `response.output_item.done`.
		 * Required
		 */
		type: RealtimeServerEventResponseOutputItemDoneType;

		/**
		 * The ID of the Response to which the item belongs.
		 * Required
		 */
		response_id: string;

		/**
		 * The index of the output item in the Response.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The item to add to the conversation.
		 * Required
		 */
		item: RealtimeConversationItem;
	}

	export enum RealtimeServerEventResponseOutputItemDoneType { 'response.output_item.done' = 0 }


	/** Returned when the text value of a "text" content part is updated. */
	export interface RealtimeServerEventResponseTextDelta {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `response.text.delta`.
		 * Required
		 */
		type: RealtimeServerEventResponseTextDeltaType;

		/**
		 * The ID of the response.
		 * Required
		 */
		response_id: string;

		/**
		 * The ID of the item.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item in the response.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part in the item's content array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * The text delta.
		 * Required
		 */
		delta: string;
	}

	export enum RealtimeServerEventResponseTextDeltaType { 'response.text.delta' = 0 }


	/**
	 * Returned when the text value of a "text" content part is done streaming. Also
	 * emitted when a Response is interrupted, incomplete, or cancelled.
	 */
	export interface RealtimeServerEventResponseTextDone {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `response.text.done`.
		 * Required
		 */
		type: RealtimeServerEventResponseTextDoneType;

		/**
		 * The ID of the response.
		 * Required
		 */
		response_id: string;

		/**
		 * The ID of the item.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item in the response.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part in the item's content array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * The final text content.
		 * Required
		 */
		text: string;
	}

	export enum RealtimeServerEventResponseTextDoneType { 'response.text.done' = 0 }


	/**
	 * Returned when a Session is created. Emitted automatically when a new 
	 * connection is established as the first server event. This event will contain 
	 * the default Session configuration.
	 */
	export interface RealtimeServerEventSessionCreated {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `session.created`.
		 * Required
		 */
		type: RealtimeServerEventSessionCreatedType;

		/**
		 * Realtime session object configuration.
		 * Required
		 */
		session: RealtimeSession;
	}

	export enum RealtimeServerEventSessionCreatedType { 'session.created' = 0 }


	/** Realtime session object configuration. */
	export interface RealtimeSession {

		/**
		 * Unique identifier for the session that looks like `sess_1234567890abcdef`.
		 */
		id?: string | null;

		/**
		 * The set of modalities the model can respond with. To disable audio,
		 * set this to ["text"].
		 */
		modalities?: any;

		/**
		 * The Realtime model used for this session.
		 */
		model?: RealtimeSessionCreateRequestModel | null;

		/**
		 * The default system instructions (i.e. system message) prepended to model  calls. This field allows the client to guide the model on desired  responses. The model can be instructed on response content and format,  (e.g. "be extremely succinct", "act friendly", "here are examples of good  responses") and on audio behavior (e.g. "talk quickly", "inject emotion  into your voice", "laugh frequently"). The instructions are not guaranteed  to be followed by the model, but they provide guidance to the model on the desired behavior.
		 * Note that the server sets default instructions which will be used if this  field is not set and are visible in the `session.created` event at the  start of the session.
		 */
		instructions?: string | null;
		voice?: VoiceIdsShared;

		/**
		 * The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
		 * For `pcm16`, input audio must be 16-bit PCM at a 24kHz sample rate,
		 * single channel (mono), and little-endian byte order.
		 */
		input_audio_format?: RealtimeResponseCreateParamsOutput_audio_format | null;

		/**
		 * The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
		 * For `pcm16`, output audio is sampled at a rate of 24kHz.
		 */
		output_audio_format?: RealtimeResponseCreateParamsOutput_audio_format | null;

		/**
		 * Configuration for input audio transcription, defaults to off and can be  set to `null` to turn off once on. Input audio transcription is not native to the model, since the model consumes audio directly. Transcription runs  asynchronously through [the /audio/transcriptions endpoint](https://platform.openai.com/docs/api-reference/audio/createTranscription) and should be treated as guidance of input audio content rather than precisely what the model heard. The client can optionally set the language and prompt for transcription, these offer additional guidance to the transcription service.
		 */
		input_audio_transcription?: RealtimeSessionInput_audio_transcription;

		/**
		 * Configuration for turn detection, ether Server VAD or Semantic VAD. This can be set to `null` to turn off, in which case the client must manually trigger model response.
		 * Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech.
		 * Semantic VAD is more advanced and uses a turn detection model (in conjuction with VAD) to semantically estimate whether the user has finished speaking, then dynamically sets a timeout based on this probability. For example, if user audio trails off with "uhhm", the model will score a low probability of turn end and wait longer for the user to continue speaking. This can be useful for more natural conversations, but may have a higher latency.
		 */
		turn_detection?: RealtimeSessionTurn_detection;

		/**
		 * Configuration for input audio noise reduction. This can be set to `null` to turn off.
		 * Noise reduction filters audio added to the input audio buffer before it is sent to VAD and the model.
		 * Filtering the audio can improve VAD and turn detection accuracy (reducing false positives) and model performance by improving perception of the input audio.
		 */
		input_audio_noise_reduction?: RealtimeSessionInput_audio_noise_reduction;

		/** Tools (functions) available to the model. */
		RealtimeSessionTools?: Array<RealtimeSessionTools>;

		/**
		 * How the model chooses tools. Options are `auto`, `none`, `required`, or
		 * specify a function.
		 */
		tool_choice?: string | null;

		/**
		 * Sampling temperature for the model, limited to [0.6, 1.2]. For audio models a temperature of 0.8 is highly recommended for best performance.
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * Maximum number of output tokens for a single assistant response,
		 * inclusive of tool calls. Provide an integer between 1 and 4096 to
		 * limit output tokens, or `inf` for the maximum available tokens for a
		 * given model. Defaults to `inf`.
		 */
		max_response_output_tokens?: number | null;
	}

	export interface RealtimeSessionInput_audio_transcription {

		/**
		 * The model to use for transcription, current options are `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `whisper-1`.
		 */
		model?: string | null;

		/**
		 * The language of the input audio. Supplying the input language in
		 * [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format
		 * will improve accuracy and latency.
		 */
		language?: string | null;

		/**
		 * An optional text to guide the model's style or continue a previous audio
		 * segment.
		 * For `whisper-1`, the [prompt is a list of keywords](/docs/guides/speech-to-text#prompting).
		 * For `gpt-4o-transcribe` models, the prompt is a free text string, for example "expect words related to technology".
		 */
		prompt?: string | null;
	}

	export interface RealtimeSessionTurn_detection {

		/**
		 * Type of turn detection.
		 */
		type?: RealtimeSessionCreateRequestTurn_detectionType | null;

		/**
		 * Used only for `semantic_vad` mode. The eagerness of the model to respond. `low` will wait longer for the user to continue speaking, `high` will respond more quickly. `auto` is the default and is equivalent to `medium`.
		 */
		eagerness?: RealtimeSessionCreateRequestTurn_detectionEagerness | null;

		/**
		 * Used only for `server_vad` mode. Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A
		 * higher threshold will require louder audio to activate the model, and
		 * thus might perform better in noisy environments.
		 * Type: double
		 */
		threshold?: number | null;

		/**
		 * Used only for `server_vad` mode. Amount of audio to include before the VAD detected speech (in
		 * milliseconds). Defaults to 300ms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		prefix_padding_ms?: number | null;

		/**
		 * Used only for `server_vad` mode. Duration of silence to detect speech stop (in milliseconds). Defaults
		 * to 500ms. With shorter values the model will respond more quickly,
		 * but may jump in on short pauses from the user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		silence_duration_ms?: number | null;

		/**
		 * Whether or not to automatically generate a response when a VAD stop event occurs.
		 */
		create_response?: boolean | null;

		/**
		 * Whether or not to automatically interrupt any ongoing response with output to the default
		 * conversation (i.e. `conversation` of `auto`) when a VAD start event occurs.
		 */
		interrupt_response?: boolean | null;
	}

	export interface RealtimeSessionInput_audio_noise_reduction {

		/**
		 * Type of noise reduction. `near_field` is for close-talking microphones such as headphones, `far_field` is for far-field microphones such as laptop or conference room microphones.
		 */
		type?: RealtimeSessionCreateRequestInput_audio_noise_reductionType | null;
	}

	export interface RealtimeSessionTools {

		/** The type of the tool, i.e. `function`. */
		type?: AssistantToolsFunctionType | null;

		/** The name of the function. */
		name?: string | null;

		/**
		 * The description of the function, including guidance on when and how
		 * to call it, and guidance about what to tell the user when calling
		 * (if anything).
		 */
		description?: string | null;

		/** Parameters of the function in JSON Schema. */
		parameters?: string | null;
	}


	/**
	 * Returned when a session is updated with a `session.update` event, unless 
	 * there is an error.
	 */
	export interface RealtimeServerEventSessionUpdated {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `session.updated`.
		 * Required
		 */
		type: RealtimeServerEventSessionUpdatedType;

		/**
		 * Realtime session object configuration.
		 * Required
		 */
		session: RealtimeSession;
	}

	export enum RealtimeServerEventSessionUpdatedType { 'session.updated' = 0 }


	/**
	 * Returned when a transcription session is updated with a `transcription_session.update` event, unless 
	 * there is an error.
	 */
	export interface RealtimeServerEventTranscriptionSessionUpdated {

		/**
		 * The unique ID of the server event.
		 * Required
		 */
		event_id: string;

		/**
		 * The event type, must be `transcription_session.updated`.
		 * Required
		 */
		type: RealtimeServerEventTranscriptionSessionUpdatedType;

		/**
		 * A new Realtime transcription session configuration.
		 * When a session is created on the server via REST API, the session object
		 * also contains an ephemeral key. Default TTL for keys is one minute. This
		 * property is not present when a session is updated via the WebSocket API.
		 * Required
		 */
		session: RealtimeTranscriptionSessionCreateResponse;
	}

	export enum RealtimeServerEventTranscriptionSessionUpdatedType { 'transcription_session.updated' = 0 }


	/**
	 * A new Realtime transcription session configuration.
	 * When a session is created on the server via REST API, the session object
	 * also contains an ephemeral key. Default TTL for keys is one minute. This 
	 * property is not present when a session is updated via the WebSocket API.
	 */
	export interface RealtimeTranscriptionSessionCreateResponse {

		/**
		 * Ephemeral key returned by the API. Only present when the session is
		 * created on the server via REST API.
		 * Required
		 */
		client_secret: RealtimeTranscriptionSessionCreateResponseClient_secret;

		/**
		 * The set of modalities the model can respond with. To disable audio,
		 * set this to ["text"].
		 */
		modalities?: any;

		/**
		 * The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
		 */
		input_audio_format?: string | null;

		/**
		 * Configuration of the transcription model.
		 */
		input_audio_transcription?: RealtimeTranscriptionSessionCreateResponseInput_audio_transcription;

		/**
		 * Configuration for turn detection. Can be set to `null` to turn off. Server
		 * VAD means that the model will detect the start and end of speech based on
		 * audio volume and respond at the end of user speech.
		 */
		turn_detection?: RealtimeTranscriptionSessionCreateResponseTurn_detection;
	}

	export interface RealtimeTranscriptionSessionCreateResponseClient_secret {

		/**
		 * Ephemeral key usable in client environments to authenticate connections
		 * to the Realtime API. Use this in client-side environments rather than
		 * a standard API token, which should only be used server-side.
		 * Required
		 */
		value: string;

		/**
		 * Timestamp for when the token expires. Currently, all tokens expire
		 * after one minute.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_at: number;
	}

	export interface RealtimeTranscriptionSessionCreateResponseInput_audio_transcription {

		/**
		 * The model to use for transcription. Can be `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, or `whisper-1`.
		 */
		model?: RealtimeTranscriptionSessionCreateRequestInput_audio_transcriptionModel | null;

		/**
		 * The language of the input audio. Supplying the input language in
		 * [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format
		 * will improve accuracy and latency.
		 */
		language?: string | null;

		/**
		 * An optional text to guide the model's style or continue a previous audio
		 * segment. The [prompt](/docs/guides/speech-to-text#prompting) should match
		 * the audio language.
		 */
		prompt?: string | null;
	}

	export interface RealtimeTranscriptionSessionCreateResponseTurn_detection {

		/**
		 * Type of turn detection, only `server_vad` is currently supported.
		 */
		type?: string | null;

		/**
		 * Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A
		 * higher threshold will require louder audio to activate the model, and
		 * thus might perform better in noisy environments.
		 * Type: double
		 */
		threshold?: number | null;

		/**
		 * Amount of audio to include before the VAD detected speech (in
		 * milliseconds). Defaults to 300ms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		prefix_padding_ms?: number | null;

		/**
		 * Duration of silence to detect speech stop (in milliseconds). Defaults
		 * to 500ms. With shorter values the model will respond more quickly,
		 * but may jump in on short pauses from the user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		silence_duration_ms?: number | null;
	}


	/**
	 * A new Realtime session configuration, with an ephermeral key. Default TTL
	 * for keys is one minute.
	 */
	export interface RealtimeSessionCreateResponse {

		/**
		 * Ephemeral key returned by the API.
		 * Required
		 */
		client_secret: RealtimeSessionCreateResponseClient_secret;

		/**
		 * The set of modalities the model can respond with. To disable audio,
		 * set this to ["text"].
		 */
		modalities?: any;

		/**
		 * The default system instructions (i.e. system message) prepended to model
		 * calls. This field allows the client to guide the model on desired
		 * responses. The model can be instructed on response content and format,
		 * (e.g. "be extremely succinct", "act friendly", "here are examples of good
		 * responses") and on audio behavior (e.g. "talk quickly", "inject emotion
		 * into your voice", "laugh frequently"). The instructions are not guaranteed
		 * to be followed by the model, but they provide guidance to the model on the
		 * desired behavior.
		 * Note that the server sets default instructions which will be used if this
		 * field is not set and are visible in the `session.created` event at the
		 * start of the session.
		 */
		instructions?: string | null;
		voice?: VoiceIdsShared;

		/**
		 * The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
		 */
		input_audio_format?: string | null;

		/**
		 * The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
		 */
		output_audio_format?: string | null;

		/**
		 * Configuration for input audio transcription, defaults to off and can be
		 * set to `null` to turn off once on. Input audio transcription is not native
		 * to the model, since the model consumes audio directly. Transcription runs
		 * asynchronously through Whisper and should be treated as rough guidance
		 * rather than the representation understood by the model.
		 */
		input_audio_transcription?: RealtimeSessionCreateResponseInput_audio_transcription;

		/**
		 * Configuration for turn detection. Can be set to `null` to turn off. Server
		 * VAD means that the model will detect the start and end of speech based on
		 * audio volume and respond at the end of user speech.
		 */
		turn_detection?: RealtimeSessionCreateResponseTurn_detection;

		/** Tools (functions) available to the model. */
		RealtimeSessionCreateResponseTools?: Array<RealtimeSessionCreateResponseTools>;

		/**
		 * How the model chooses tools. Options are `auto`, `none`, `required`, or
		 * specify a function.
		 */
		tool_choice?: string | null;

		/**
		 * Sampling temperature for the model, limited to [0.6, 1.2]. Defaults to 0.8.
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * Maximum number of output tokens for a single assistant response,
		 * inclusive of tool calls. Provide an integer between 1 and 4096 to
		 * limit output tokens, or `inf` for the maximum available tokens for a
		 * given model. Defaults to `inf`.
		 */
		max_response_output_tokens?: number | null;
	}

	export interface RealtimeSessionCreateResponseClient_secret {

		/**
		 * Ephemeral key usable in client environments to authenticate connections
		 * to the Realtime API. Use this in client-side environments rather than
		 * a standard API token, which should only be used server-side.
		 * Required
		 */
		value: string;

		/**
		 * Timestamp for when the token expires. Currently, all tokens expire
		 * after one minute.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_at: number;
	}

	export interface RealtimeSessionCreateResponseInput_audio_transcription {

		/**
		 * The model to use for transcription, `whisper-1` is the only currently
		 * supported model.
		 */
		model?: string | null;
	}

	export interface RealtimeSessionCreateResponseTurn_detection {

		/**
		 * Type of turn detection, only `server_vad` is currently supported.
		 */
		type?: string | null;

		/**
		 * Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A
		 * higher threshold will require louder audio to activate the model, and
		 * thus might perform better in noisy environments.
		 * Type: double
		 */
		threshold?: number | null;

		/**
		 * Amount of audio to include before the VAD detected speech (in
		 * milliseconds). Defaults to 300ms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		prefix_padding_ms?: number | null;

		/**
		 * Duration of silence to detect speech stop (in milliseconds). Defaults
		 * to 500ms. With shorter values the model will respond more quickly,
		 * but may jump in on short pauses from the user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		silence_duration_ms?: number | null;
	}

	export interface RealtimeSessionCreateResponseTools {

		/** The type of the tool, i.e. `function`. */
		type?: AssistantToolsFunctionType | null;

		/** The name of the function. */
		name?: string | null;

		/**
		 * The description of the function, including guidance on when and how
		 * to call it, and guidance about what to tell the user when calling
		 * (if anything).
		 */
		description?: string | null;

		/** Parameters of the function in JSON Schema. */
		parameters?: string | null;
	}


	/**
	 * **o-series models only** 
	 * Constrains effort on reasoning for 
	 * [reasoning models](https://platform.openai.com/docs/guides/reasoning).
	 * Currently supported values are `low`, `medium`, and `high`. Reducing
	 * reasoning effort can result in faster responses and fewer tokens used
	 * on reasoning in a response.
	 */
	export enum ReasoningEffort { low = 0, medium = 1, high = 2 }


	/**
	 * A description of the chain of thought used by a reasoning model while generating
	 * a response.
	 */
	export interface ReasoningItem {

		/**
		 * The type of the object. Always `reasoning`.
		 * Required
		 */
		type: ReasoningItemType;

		/**
		 * The unique identifier of the reasoning content.
		 * Required
		 */
		id: string;

		/**
		 * Reasoning text contents.
		 * Required
		 */
		ReasoningItemSummary: Array<ReasoningItemSummary>;

		/**
		 * The status of the item. One of `in_progress`, `completed`, or
		 * `incomplete`. Populated when items are returned via API.
		 */
		status?: ComputerToolCallStatus | null;
	}

	export enum ReasoningItemType { reasoning = 0 }

	export interface ReasoningItemSummary {

		/**
		 * The type of the object. Always `summary_text`.
		 * Required
		 */
		type: ReasoningItemSummaryType;

		/**
		 * A short summary of the reasoning used by the model when generating
		 * the response.
		 * Required
		 */
		text: string;
	}

	export enum ReasoningItemSummaryType { summary_text = 0 }

	export interface Response extends ModelResponseProperties {

		/**
		 * The unique ID of the previous response to the model. Use this to
		 * create multi-turn conversations. Learn more about
		 * [conversation state](/docs/guides/conversation-state).
		 */
		previous_response_id?: string | null;
		model?: ModelIdsResponses;

		/**
		 * **o-series models only**
		 * Configuration options for
		 * [reasoning models](https://platform.openai.com/docs/guides/reasoning).
		 */
		reasoning?: Reasoning;

		/**
		 * An upper bound for the number of tokens that can be generated for a response, including visible output tokens and [reasoning tokens](/docs/guides/reasoning).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_output_tokens?: number | null;

		/**
		 * Inserts a system (or developer) message as the first item in the model's context.
		 * When using along with `previous_response_id`, the instructions from a previous
		 * response will not be carried over to the next response. This makes it simple
		 * to swap out system (or developer) messages in new responses.
		 */
		instructions?: string | null;

		/**
		 * Configuration options for a text response from the model. Can be plain
		 * text or structured JSON data. Learn more:
		 * - [Text inputs and outputs](/docs/guides/text)
		 * - [Structured Outputs](/docs/guides/structured-outputs)
		 */
		text?: ResponseText;

		/**
		 * An array of tools the model may call while generating a response. You
		 * can specify which tool to use by setting the `tool_choice` parameter.
		 * The two categories of tools you can provide the model are:
		 * - **Built-in tools**: Tools that are provided by OpenAI that extend the
		 * model's capabilities, like [web search](/docs/guides/tools-web-search)
		 * or [file search](/docs/guides/tools-file-search). Learn more about
		 * [built-in tools](/docs/guides/tools).
		 * - **Function calls (custom tools)**: Functions that are defined by you,
		 * enabling the model to call your own code. Learn more about
		 * [function calling](/docs/guides/function-calling).
		 * Array member types: FileSearchTool, FunctionTool, WebSearchPreviewTool, ComputerUsePreviewTool
		 */
		tools?: Array<any>;

		/**
		 * How the model should select which tool (or tools) to use when generating
		 * a response. See the `tools` parameter to see how to specify which tools
		 * the model can call.
		 */
		tool_choice?: ToolChoiceOptions;

		/**
		 * The truncation strategy to use for the model response.
		 * - `auto`: If the context of this response and previous ones exceeds
		 * the model's context window size, the model will truncate the
		 * response to fit the context window by dropping input items in the
		 * middle of the conversation.
		 * - `disabled` (default): If a model response will exceed the context window
		 * size for a model, the request will fail with a 400 error.
		 */
		truncation?: CreateResponseTruncation | null;
	}

	export interface ResponseText {

		/**
		 * An object specifying the format that the model must output.
		 * Configuring `{ "type": "json_schema" }` enables Structured Outputs,
		 * which ensures the model will match your supplied JSON schema. Learn more in the
		 * [Structured Outputs guide](/docs/guides/structured-outputs).
		 * The default format is `{ "type": "text" }` with no additional options.
		 * **Not recommended for gpt-4o and newer models:**
		 * Setting to `{ "type": "json_object" }` enables the older JSON mode, which
		 * ensures the message the model generates is valid JSON. Using `json_schema`
		 * is preferred for models that support it.
		 */
		format?: TextResponseFormatConfiguration;
	}


	/** Emitted when there is a partial audio response. */
	export interface ResponseAudioDeltaEvent {

		/**
		 * The type of the event. Always `response.audio.delta`.
		 * Required
		 */
		type: RealtimeServerEventResponseAudioDeltaType;

		/**
		 * A chunk of Base64 encoded response audio bytes.
		 * Required
		 */
		delta: string;
	}


	/** Emitted when the audio response is complete. */
	export interface ResponseAudioDoneEvent {

		/**
		 * The type of the event. Always `response.audio.done`.
		 * Required
		 */
		type: RealtimeServerEventResponseAudioDoneType;
	}


	/** Emitted when there is a partial transcript of audio. */
	export interface ResponseAudioTranscriptDeltaEvent {

		/**
		 * The type of the event. Always `response.audio.transcript.delta`.
		 * Required
		 */
		type: ResponseAudioTranscriptDeltaEventType;

		/**
		 * The partial transcript of the audio response.
		 * Required
		 */
		delta: string;
	}

	export enum ResponseAudioTranscriptDeltaEventType { 'response.audio.transcript.delta' = 0 }


	/** Emitted when the full audio transcript is completed. */
	export interface ResponseAudioTranscriptDoneEvent {

		/**
		 * The type of the event. Always `response.audio.transcript.done`.
		 * Required
		 */
		type: ResponseAudioTranscriptDoneEventType;
	}

	export enum ResponseAudioTranscriptDoneEventType { 'response.audio.transcript.done' = 0 }


	/** Emitted when a partial code snippet is added by the code interpreter. */
	export interface ResponseCodeInterpreterCallCodeDeltaEvent {

		/**
		 * The type of the event. Always `response.code_interpreter_call.code.delta`.
		 * Required
		 */
		type: ResponseCodeInterpreterCallCodeDeltaEventType;

		/**
		 * The index of the output item that the code interpreter call is in progress.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The partial code snippet added by the code interpreter.
		 * Required
		 */
		delta: string;
	}

	export enum ResponseCodeInterpreterCallCodeDeltaEventType { 'response.code_interpreter_call.code.delta' = 0 }


	/** Emitted when code snippet output is finalized by the code interpreter. */
	export interface ResponseCodeInterpreterCallCodeDoneEvent {

		/**
		 * The type of the event. Always `response.code_interpreter_call.code.done`.
		 * Required
		 */
		type: ResponseCodeInterpreterCallCodeDoneEventType;

		/**
		 * The index of the output item that the code interpreter call is in progress.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The final code snippet output by the code interpreter.
		 * Required
		 */
		code: string;
	}

	export enum ResponseCodeInterpreterCallCodeDoneEventType { 'response.code_interpreter_call.code.done' = 0 }


	/** Emitted when the code interpreter call is completed. */
	export interface ResponseCodeInterpreterCallCompletedEvent {

		/**
		 * The type of the event. Always `response.code_interpreter_call.completed`.
		 * Required
		 */
		type: ResponseCodeInterpreterCallCompletedEventType;

		/**
		 * The index of the output item that the code interpreter call is in progress.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * A tool call to run code.
		 * Required
		 */
		code_interpreter_call: CodeInterpreterToolCall;
	}

	export enum ResponseCodeInterpreterCallCompletedEventType { 'response.code_interpreter_call.completed' = 0 }


	/** Emitted when a code interpreter call is in progress. */
	export interface ResponseCodeInterpreterCallInProgressEvent {

		/**
		 * The type of the event. Always `response.code_interpreter_call.in_progress`.
		 * Required
		 */
		type: ResponseCodeInterpreterCallInProgressEventType;

		/**
		 * The index of the output item that the code interpreter call is in progress.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * A tool call to run code.
		 * Required
		 */
		code_interpreter_call: CodeInterpreterToolCall;
	}

	export enum ResponseCodeInterpreterCallInProgressEventType { 'response.code_interpreter_call.in_progress' = 0 }


	/** Emitted when the code interpreter is actively interpreting the code snippet. */
	export interface ResponseCodeInterpreterCallInterpretingEvent {

		/**
		 * The type of the event. Always `response.code_interpreter_call.interpreting`.
		 * Required
		 */
		type: ResponseCodeInterpreterCallInterpretingEventType;

		/**
		 * The index of the output item that the code interpreter call is in progress.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * A tool call to run code.
		 * Required
		 */
		code_interpreter_call: CodeInterpreterToolCall;
	}

	export enum ResponseCodeInterpreterCallInterpretingEventType { 'response.code_interpreter_call.interpreting' = 0 }


	/** Emitted when the model response is complete. */
	export interface ResponseCompletedEvent {

		/**
		 * The type of the event. Always `response.completed`.
		 * Required
		 */
		type: ResponseCompletedEventType;

		/** Required */
		response: Response;
	}

	export enum ResponseCompletedEventType { 'response.completed' = 0 }


	/** Emitted when a new content part is added. */
	export interface ResponseContentPartAddedEvent {

		/**
		 * The type of the event. Always `response.content_part.added`.
		 * Required
		 */
		type: RealtimeServerEventResponseContentPartAddedType;

		/**
		 * The ID of the output item that the content part was added to.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item that the content part was added to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part that was added.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/** Required */
		part: OutputContent;
	}


	/** Emitted when a content part is done. */
	export interface ResponseContentPartDoneEvent {

		/**
		 * The type of the event. Always `response.content_part.done`.
		 * Required
		 */
		type: RealtimeServerEventResponseContentPartDoneType;

		/**
		 * The ID of the output item that the content part was added to.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item that the content part was added to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part that is done.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/** Required */
		part: OutputContent;
	}


	/**
	 * An event that is emitted when a response is created.
	 */
	export interface ResponseCreatedEvent {

		/**
		 * The type of the event. Always `response.created`.
		 * Required
		 */
		type: RealtimeServerEventResponseCreatedType;

		/** Required */
		response: Response;
	}


	/**
	 * An error object returned when the model fails to generate a Response.
	 */
	export interface ResponseError {

		/**
		 * The error code for the response.
		 * Required
		 */
		code: ResponseErrorCode;

		/**
		 * A human-readable description of the error.
		 * Required
		 */
		message: string;
	}

	export enum ResponseErrorCode { server_error = 0, rate_limit_exceeded = 1, invalid_prompt = 2, vector_store_timeout = 3, invalid_image = 4, invalid_image_format = 5, invalid_base64_image = 6, invalid_image_url = 7, image_too_large = 8, image_too_small = 9, image_parse_error = 10, image_content_policy_violation = 11, invalid_image_mode = 12, image_file_too_large = 13, unsupported_image_media_type = 14, empty_image_file = 15, failed_to_download_image = 16, image_file_not_found = 17 }


	/** Emitted when an error occurs. */
	export interface ResponseErrorEvent {

		/**
		 * The type of the event. Always `error`.
		 * Required
		 */
		type: ErrorEventEvent;

		/**
		 * The error code.
		 * Required
		 */
		code: string;

		/**
		 * The error message.
		 * Required
		 */
		message: string;

		/**
		 * The error parameter.
		 * Required
		 */
		param: string;
	}


	/**
	 * An event that is emitted when a response fails.
	 */
	export interface ResponseFailedEvent {

		/**
		 * The type of the event. Always `response.failed`.
		 * Required
		 */
		type: ResponseFailedEventType;

		/** Required */
		response: Response;
	}

	export enum ResponseFailedEventType { 'response.failed' = 0 }


	/** Emitted when a file search call is completed (results found). */
	export interface ResponseFileSearchCallCompletedEvent {

		/**
		 * The type of the event. Always `response.file_search_call.completed`.
		 * Required
		 */
		type: ResponseFileSearchCallCompletedEventType;

		/**
		 * The index of the output item that the file search call is initiated.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The ID of the output item that the file search call is initiated.
		 * Required
		 */
		item_id: string;
	}

	export enum ResponseFileSearchCallCompletedEventType { 'response.file_search_call.completed' = 0 }


	/** Emitted when a file search call is initiated. */
	export interface ResponseFileSearchCallInProgressEvent {

		/**
		 * The type of the event. Always `response.file_search_call.in_progress`.
		 * Required
		 */
		type: ResponseFileSearchCallInProgressEventType;

		/**
		 * The index of the output item that the file search call is initiated.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The ID of the output item that the file search call is initiated.
		 * Required
		 */
		item_id: string;
	}

	export enum ResponseFileSearchCallInProgressEventType { 'response.file_search_call.in_progress' = 0 }


	/** Emitted when a file search is currently searching. */
	export interface ResponseFileSearchCallSearchingEvent {

		/**
		 * The type of the event. Always `response.file_search_call.searching`.
		 * Required
		 */
		type: ResponseFileSearchCallSearchingEventType;

		/**
		 * The index of the output item that the file search call is searching.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The ID of the output item that the file search call is initiated.
		 * Required
		 */
		item_id: string;
	}

	export enum ResponseFileSearchCallSearchingEventType { 'response.file_search_call.searching' = 0 }


	/**
	 * JSON object response format. An older method of generating JSON responses.
	 * Using `json_schema` is recommended for models that support it. Note that the
	 * model will not generate JSON without a system or user message instructing it
	 * to do so.
	 */
	export interface ResponseFormatJsonObject {

		/**
		 * The type of response format being defined. Always `json_object`.
		 * Required
		 */
		type: ResponseFormatJsonObjectType;
	}

	export enum ResponseFormatJsonObjectType { json_object = 0 }


	/**
	 * JSON Schema response format. Used to generate structured JSON responses.
	 * Learn more about [Structured Outputs](/docs/guides/structured-outputs).
	 */
	export interface ResponseFormatJsonSchema {

		/**
		 * The type of response format being defined. Always `json_schema`.
		 * Required
		 */
		type: ResponseFormatJsonSchemaType;

		/**
		 * Structured Outputs configuration options, including a JSON Schema.
		 * Required
		 */
		json_schema: ResponseFormatJsonSchemaJson_schema;
	}

	export enum ResponseFormatJsonSchemaType { json_schema = 0 }

	export interface ResponseFormatJsonSchemaJson_schema {

		/**
		 * A description of what the response format is for, used by the model to
		 * determine how to respond in the format.
		 */
		description?: string | null;

		/**
		 * The name of the response format. Must be a-z, A-Z, 0-9, or contain
		 * underscores and dashes, with a maximum length of 64.
		 * Required
		 */
		name: string;

		/**
		 * The schema for the response format, described as a JSON Schema object.
		 * Learn how to build JSON schemas [here](https://json-schema.org/).
		 */
		schema?: ResponseFormatJsonSchemaSchema;

		/**
		 * Whether to enable strict schema adherence when generating the output.
		 * If set to true, the model will always follow the exact schema defined
		 * in the `schema` field. Only a subset of JSON Schema is supported when
		 * `strict` is `true`. To learn more, read the [Structured Outputs
		 * guide](/docs/guides/structured-outputs).
		 */
		strict?: boolean | null;
	}


	/**
	 * The schema for the response format, described as a JSON Schema object.
	 * Learn how to build JSON schemas [here](https://json-schema.org/).
	 */
	export interface ResponseFormatJsonSchemaSchema {
	}


	/** Emitted when there is a partial function-call arguments delta. */
	export interface ResponseFunctionCallArgumentsDeltaEvent {

		/**
		 * The type of the event. Always `response.function_call_arguments.delta`.
		 * Required
		 */
		type: RealtimeServerEventResponseFunctionCallArgumentsDeltaType;

		/**
		 * The ID of the output item that the function-call arguments delta is added to.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item that the function-call arguments delta is added to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The function-call arguments delta that is added.
		 * Required
		 */
		delta: string;
	}


	/** Emitted when function-call arguments are finalized. */
	export interface ResponseFunctionCallArgumentsDoneEvent {

		/** Required */
		type: RealtimeServerEventResponseFunctionCallArgumentsDoneType;

		/**
		 * The ID of the item.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The function-call arguments.
		 * Required
		 */
		arguments: string;
	}


	/** Emitted when the response is in progress. */
	export interface ResponseInProgressEvent {

		/**
		 * The type of the event. Always `response.in_progress`.
		 * Required
		 */
		type: ResponseInProgressEventType;

		/** Required */
		response: Response;
	}

	export enum ResponseInProgressEventType { 'response.in_progress' = 0 }


	/**
	 * An event that is emitted when a response finishes as incomplete.
	 */
	export interface ResponseIncompleteEvent {

		/**
		 * The type of the event. Always `response.incomplete`.
		 * Required
		 */
		type: ResponseIncompleteEventType;

		/** Required */
		response: Response;
	}

	export enum ResponseIncompleteEventType { 'response.incomplete' = 0 }


	/** A list of Response items. */
	export interface ResponseItemList {

		/**
		 * The type of object returned, must be `list`.
		 * Required
		 */
		object: ChatCompletionListObject;

		/**
		 * A list of items used to generate this response.
		 * Required
		 * Array member types: InputMessageResource, OutputMessage, FileSearchToolCall, ComputerToolCall, ComputerToolCallOutputResource, WebSearchToolCall, FunctionToolCallResource, FunctionToolCallOutputResource
		 */
		data: Array<any>;

		/**
		 * Whether there are more items available.
		 * Required
		 */
		has_more: boolean;

		/**
		 * The ID of the first item in the list.
		 * Required
		 */
		first_id: string;

		/**
		 * The ID of the last item in the list.
		 * Required
		 */
		last_id: string;
	}


	/** Emitted when a new output item is added. */
	export interface ResponseOutputItemAddedEvent {

		/**
		 * The type of the event. Always `response.output_item.added`.
		 * Required
		 */
		type: RealtimeServerEventResponseOutputItemAddedType;

		/**
		 * The index of the output item that was added.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/** Required */
		item: OutputItem;
	}


	/** Emitted when an output item is marked done. */
	export interface ResponseOutputItemDoneEvent {

		/**
		 * The type of the event. Always `response.output_item.done`.
		 * Required
		 */
		type: RealtimeServerEventResponseOutputItemDoneType;

		/**
		 * The index of the output item that was marked done.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/** Required */
		item: OutputItem;
	}

	export interface ResponseProperties {

		/**
		 * The unique ID of the previous response to the model. Use this to
		 * create multi-turn conversations. Learn more about
		 * [conversation state](/docs/guides/conversation-state).
		 */
		previous_response_id?: string | null;
		model?: ModelIdsResponses;

		/**
		 * **o-series models only**
		 * Configuration options for
		 * [reasoning models](https://platform.openai.com/docs/guides/reasoning).
		 */
		reasoning?: Reasoning;

		/**
		 * An upper bound for the number of tokens that can be generated for a response, including visible output tokens and [reasoning tokens](/docs/guides/reasoning).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_output_tokens?: number | null;

		/**
		 * Inserts a system (or developer) message as the first item in the model's context.
		 * When using along with `previous_response_id`, the instructions from a previous
		 * response will not be carried over to the next response. This makes it simple
		 * to swap out system (or developer) messages in new responses.
		 */
		instructions?: string | null;

		/**
		 * Configuration options for a text response from the model. Can be plain
		 * text or structured JSON data. Learn more:
		 * - [Text inputs and outputs](/docs/guides/text)
		 * - [Structured Outputs](/docs/guides/structured-outputs)
		 */
		text?: ResponsePropertiesText;

		/**
		 * An array of tools the model may call while generating a response. You
		 * can specify which tool to use by setting the `tool_choice` parameter.
		 * The two categories of tools you can provide the model are:
		 * - **Built-in tools**: Tools that are provided by OpenAI that extend the
		 * model's capabilities, like [web search](/docs/guides/tools-web-search)
		 * or [file search](/docs/guides/tools-file-search). Learn more about
		 * [built-in tools](/docs/guides/tools).
		 * - **Function calls (custom tools)**: Functions that are defined by you,
		 * enabling the model to call your own code. Learn more about
		 * [function calling](/docs/guides/function-calling).
		 * Array member types: FileSearchTool, FunctionTool, WebSearchPreviewTool, ComputerUsePreviewTool
		 */
		tools?: Array<any>;

		/**
		 * How the model should select which tool (or tools) to use when generating
		 * a response. See the `tools` parameter to see how to specify which tools
		 * the model can call.
		 */
		tool_choice?: ToolChoiceOptions;

		/**
		 * The truncation strategy to use for the model response.
		 * - `auto`: If the context of this response and previous ones exceeds
		 * the model's context window size, the model will truncate the
		 * response to fit the context window by dropping input items in the
		 * middle of the conversation.
		 * - `disabled` (default): If a model response will exceed the context window
		 * size for a model, the request will fail with a 400 error.
		 */
		truncation?: CreateResponseTruncation | null;
	}

	export interface ResponsePropertiesText {

		/**
		 * An object specifying the format that the model must output.
		 * Configuring `{ "type": "json_schema" }` enables Structured Outputs,
		 * which ensures the model will match your supplied JSON schema. Learn more in the
		 * [Structured Outputs guide](/docs/guides/structured-outputs).
		 * The default format is `{ "type": "text" }` with no additional options.
		 * **Not recommended for gpt-4o and newer models:**
		 * Setting to `{ "type": "json_object" }` enables the older JSON mode, which
		 * ensures the message the model generates is valid JSON. Using `json_schema`
		 * is preferred for models that support it.
		 */
		format?: TextResponseFormatConfiguration;
	}


	/** Emitted when a new reasoning summary part is added. */
	export interface ResponseReasoningSummaryPartAddedEvent {

		/**
		 * The type of the event. Always `response.reasoning_summary_part.added`.
		 * Required
		 */
		type: ResponseReasoningSummaryPartAddedEventType;

		/**
		 * The ID of the item this summary part is associated with.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item this summary part is associated with.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the summary part within the reasoning summary.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		summary_index: number;

		/**
		 * The summary part that was added.
		 * Required
		 */
		part: ResponseReasoningSummaryPartAddedEventPart;
	}

	export enum ResponseReasoningSummaryPartAddedEventType { 'response.reasoning_summary_part.added' = 0 }

	export interface ResponseReasoningSummaryPartAddedEventPart {

		/**
		 * The type of the summary part. Always `summary_text`.
		 * Required
		 */
		type: ReasoningItemSummaryType;

		/**
		 * The text of the summary part.
		 * Required
		 */
		text: string;
	}


	/** Emitted when a reasoning summary part is completed. */
	export interface ResponseReasoningSummaryPartDoneEvent {

		/**
		 * The type of the event. Always `response.reasoning_summary_part.done`.
		 * Required
		 */
		type: ResponseReasoningSummaryPartDoneEventType;

		/**
		 * The ID of the item this summary part is associated with.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item this summary part is associated with.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the summary part within the reasoning summary.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		summary_index: number;

		/**
		 * The completed summary part.
		 * Required
		 */
		part: ResponseReasoningSummaryPartDoneEventPart;
	}

	export enum ResponseReasoningSummaryPartDoneEventType { 'response.reasoning_summary_part.done' = 0 }

	export interface ResponseReasoningSummaryPartDoneEventPart {

		/**
		 * The type of the summary part. Always `summary_text`.
		 * Required
		 */
		type: ReasoningItemSummaryType;

		/**
		 * The text of the summary part.
		 * Required
		 */
		text: string;
	}


	/** Emitted when a delta is added to a reasoning summary text. */
	export interface ResponseReasoningSummaryTextDeltaEvent {

		/**
		 * The type of the event. Always `response.reasoning_summary_text.delta`.
		 * Required
		 */
		type: ResponseReasoningSummaryTextDeltaEventType;

		/**
		 * The ID of the item this summary text delta is associated with.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item this summary text delta is associated with.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the summary part within the reasoning summary.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		summary_index: number;

		/**
		 * The text delta that was added to the summary.
		 * Required
		 */
		delta: string;
	}

	export enum ResponseReasoningSummaryTextDeltaEventType { 'response.reasoning_summary_text.delta' = 0 }


	/** Emitted when a reasoning summary text is completed. */
	export interface ResponseReasoningSummaryTextDoneEvent {

		/**
		 * The type of the event. Always `response.reasoning_summary_text.done`.
		 * Required
		 */
		type: ResponseReasoningSummaryTextDoneEventType;

		/**
		 * The ID of the item this summary text is associated with.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item this summary text is associated with.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the summary part within the reasoning summary.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		summary_index: number;

		/**
		 * The full text of the completed reasoning summary.
		 * Required
		 */
		text: string;
	}

	export enum ResponseReasoningSummaryTextDoneEventType { 'response.reasoning_summary_text.done' = 0 }


	/** Emitted when there is a partial refusal text. */
	export interface ResponseRefusalDeltaEvent {

		/**
		 * The type of the event. Always `response.refusal.delta`.
		 * Required
		 */
		type: ResponseRefusalDeltaEventType;

		/**
		 * The ID of the output item that the refusal text is added to.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item that the refusal text is added to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part that the refusal text is added to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * The refusal text that is added.
		 * Required
		 */
		delta: string;
	}

	export enum ResponseRefusalDeltaEventType { 'response.refusal.delta' = 0 }


	/** Emitted when refusal text is finalized. */
	export interface ResponseRefusalDoneEvent {

		/**
		 * The type of the event. Always `response.refusal.done`.
		 * Required
		 */
		type: ResponseRefusalDoneEventType;

		/**
		 * The ID of the output item that the refusal text is finalized.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item that the refusal text is finalized.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part that the refusal text is finalized.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * The refusal text that is finalized.
		 * Required
		 */
		refusal: string;
	}

	export enum ResponseRefusalDoneEventType { 'response.refusal.done' = 0 }

	export interface ResponseStreamEvent {
	}


	/** Emitted when a text annotation is added. */
	export interface ResponseTextAnnotationDeltaEvent {

		/**
		 * The type of the event. Always `response.output_text.annotation.added`.
		 * Required
		 */
		type: ResponseTextAnnotationDeltaEventType;

		/**
		 * The ID of the output item that the text annotation was added to.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item that the text annotation was added to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part that the text annotation was added to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * The index of the annotation that was added.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		annotation_index: number;

		/** Required */
		annotation: Annotation;
	}

	export enum ResponseTextAnnotationDeltaEventType { 'response.output_text.annotation.added' = 0 }


	/** Emitted when there is an additional text delta. */
	export interface ResponseTextDeltaEvent {

		/**
		 * The type of the event. Always `response.output_text.delta`.
		 * Required
		 */
		type: ResponseTextDeltaEventType;

		/**
		 * The ID of the output item that the text delta was added to.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item that the text delta was added to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part that the text delta was added to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * The text delta that was added.
		 * Required
		 */
		delta: string;
	}

	export enum ResponseTextDeltaEventType { 'response.output_text.delta' = 0 }


	/** Emitted when text content is finalized. */
	export interface ResponseTextDoneEvent {

		/**
		 * The type of the event. Always `response.output_text.done`.
		 * Required
		 */
		type: ResponseTextDoneEventType;

		/**
		 * The ID of the output item that the text content is finalized.
		 * Required
		 */
		item_id: string;

		/**
		 * The index of the output item that the text content is finalized.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * The index of the content part that the text content is finalized.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		content_index: number;

		/**
		 * The text content that is finalized.
		 * Required
		 */
		text: string;
	}

	export enum ResponseTextDoneEventType { 'response.output_text.done' = 0 }


	/**
	 * Represents token usage details including input tokens, output tokens,
	 * a breakdown of output tokens, and the total tokens used.
	 */
	export interface ResponseUsage {

		/**
		 * The number of input tokens.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		input_tokens: number;

		/**
		 * A detailed breakdown of the input tokens.
		 * Required
		 */
		input_tokens_details: ResponseUsageInput_tokens_details;

		/**
		 * The number of output tokens.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_tokens: number;

		/**
		 * A detailed breakdown of the output tokens.
		 * Required
		 */
		output_tokens_details: ResponseUsageOutput_tokens_details;

		/**
		 * The total number of tokens used.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_tokens: number;
	}

	export interface ResponseUsageInput_tokens_details {

		/**
		 * The number of tokens that were retrieved from the cache.
		 * [More on prompt caching](/docs/guides/prompt-caching).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cached_tokens: number;
	}

	export interface ResponseUsageOutput_tokens_details {

		/**
		 * The number of reasoning tokens.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reasoning_tokens: number;
	}


	/** Emitted when a web search call is completed. */
	export interface ResponseWebSearchCallCompletedEvent {

		/**
		 * The type of the event. Always `response.web_search_call.completed`.
		 * Required
		 */
		type: ResponseWebSearchCallCompletedEventType;

		/**
		 * The index of the output item that the web search call is associated with.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * Unique ID for the output item associated with the web search call.
		 * Required
		 */
		item_id: string;
	}

	export enum ResponseWebSearchCallCompletedEventType { 'response.web_search_call.completed' = 0 }


	/** Emitted when a web search call is initiated. */
	export interface ResponseWebSearchCallInProgressEvent {

		/**
		 * The type of the event. Always `response.web_search_call.in_progress`.
		 * Required
		 */
		type: ResponseWebSearchCallInProgressEventType;

		/**
		 * The index of the output item that the web search call is associated with.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * Unique ID for the output item associated with the web search call.
		 * Required
		 */
		item_id: string;
	}

	export enum ResponseWebSearchCallInProgressEventType { 'response.web_search_call.in_progress' = 0 }


	/** Emitted when a web search call is executing. */
	export interface ResponseWebSearchCallSearchingEvent {

		/**
		 * The type of the event. Always `response.web_search_call.searching`.
		 * Required
		 */
		type: ResponseWebSearchCallSearchingEventType;

		/**
		 * The index of the output item that the web search call is associated with.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_index: number;

		/**
		 * Unique ID for the output item associated with the web search call.
		 * Required
		 */
		item_id: string;
	}

	export enum ResponseWebSearchCallSearchingEventType { 'response.web_search_call.searching' = 0 }


	/**
	 * Represents a run step delta i.e. any changed fields on a run step during streaming.
	 */
	export interface RunStepDeltaObject {

		/**
		 * The identifier of the run step, which can be referenced in API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The object type, which is always `thread.run.step.delta`.
		 * Required
		 */
		object: RunStepDeltaObjectObject;

		/**
		 * The delta containing the fields that have changed on the run step.
		 * Required
		 */
		delta: RunStepDeltaObjectDelta;
	}

	export enum RunStepDeltaObjectObject { 'thread.run.step.delta' = 0 }

	export interface RunStepDeltaObjectDelta {

		/** The details of the run step. */
		step_details?: string | null;
	}


	/** Details of the message creation by the run step. */
	export interface RunStepDeltaStepDetailsMessageCreationObject {

		/**
		 * Always `message_creation`.
		 * Required
		 */
		type: RunStepDeltaStepDetailsMessageCreationObjectType;
		message_creation?: RunStepDeltaStepDetailsMessageCreationObjectMessage_creation;
	}

	export enum RunStepDeltaStepDetailsMessageCreationObjectType { message_creation = 0 }

	export interface RunStepDeltaStepDetailsMessageCreationObjectMessage_creation {

		/** The ID of the message that was created by this run step. */
		message_id?: string | null;
	}


	/** Details of the Code Interpreter tool call the run step was involved in. */
	export interface RunStepDeltaStepDetailsToolCallsCodeObject {

		/**
		 * The index of the tool call in the tool calls array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/** The ID of the tool call. */
		id?: string | null;

		/**
		 * The type of tool call. This is always going to be `code_interpreter` for this type of tool call.
		 * Required
		 */
		type: AssistantToolsCodeType;

		/** The Code Interpreter tool call definition. */
		code_interpreter?: RunStepDeltaStepDetailsToolCallsCodeObjectCode_interpreter;
	}

	export interface RunStepDeltaStepDetailsToolCallsCodeObjectCode_interpreter {

		/** The input to the Code Interpreter tool call. */
		input?: string | null;

		/**
		 * The outputs from the Code Interpreter tool call. Code Interpreter can output one or more items, including text (`logs`) or images (`image`). Each of these are represented by a different object type.
		 * Array member types: RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject, RunStepDeltaStepDetailsToolCallsCodeOutputImageObject
		 */
		outputs?: Array<any>;
	}

	export interface RunStepDeltaStepDetailsToolCallsCodeOutputImageObject {

		/**
		 * The index of the output in the outputs array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * Always `image`.
		 * Required
		 */
		type: RunStepDeltaStepDetailsToolCallsCodeOutputImageObjectType;
		image?: RunStepDeltaStepDetailsToolCallsCodeOutputImageObjectImage;
	}

	export enum RunStepDeltaStepDetailsToolCallsCodeOutputImageObjectType { image = 0 }

	export interface RunStepDeltaStepDetailsToolCallsCodeOutputImageObjectImage {

		/** The [file](/docs/api-reference/files) ID of the image. */
		file_id?: string | null;
	}


	/** Text output from the Code Interpreter tool call as part of a run step. */
	export interface RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject {

		/**
		 * The index of the output in the outputs array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * Always `logs`.
		 * Required
		 */
		type: CodeInterpreterTextOutputType;

		/** The text output from the Code Interpreter tool call. */
		logs?: string | null;
	}

	export interface RunStepDeltaStepDetailsToolCallsFileSearchObject {

		/**
		 * The index of the tool call in the tool calls array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/** The ID of the tool call object. */
		id?: string | null;

		/**
		 * The type of tool call. This is always going to be `file_search` for this type of tool call.
		 * Required
		 */
		type: AssistantToolsFileSearchType;

		/**
		 * For now, this is always going to be an empty object.
		 * Required
		 */
		file_search: string;
	}

	export interface RunStepDeltaStepDetailsToolCallsFunctionObject {

		/**
		 * The index of the tool call in the tool calls array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/** The ID of the tool call object. */
		id?: string | null;

		/**
		 * The type of tool call. This is always going to be `function` for this type of tool call.
		 * Required
		 */
		type: AssistantToolsFunctionType;

		/** The definition of the function that was called. */
		function?: RunStepDeltaStepDetailsToolCallsFunctionObjectFunction;
	}

	export interface RunStepDeltaStepDetailsToolCallsFunctionObjectFunction {

		/** The name of the function. */
		name?: string | null;

		/** The arguments passed to the function. */
		arguments?: string | null;

		/** The output of the function. This will be `null` if the outputs have not been [submitted](/docs/api-reference/runs/submitToolOutputs) yet. */
		output?: string | null;
	}


	/** Details of the tool call. */
	export interface RunStepDeltaStepDetailsToolCallsObject {

		/**
		 * Always `tool_calls`.
		 * Required
		 */
		type: RunStepDeltaStepDetailsToolCallsObjectType;

		/**
		 * An array of tool calls the run step was involved in. These can be associated with one of three types of tools: `code_interpreter`, `file_search`, or `function`.
		 * Array member types: RunStepDeltaStepDetailsToolCallsCodeObject, RunStepDeltaStepDetailsToolCallsFileSearchObject, RunStepDeltaStepDetailsToolCallsFunctionObject
		 */
		tool_calls?: Array<any>;
	}

	export enum RunStepDeltaStepDetailsToolCallsObjectType { tool_calls = 0 }


	/** Details of the message creation by the run step. */
	export interface RunStepDetailsMessageCreationObject {

		/**
		 * Always `message_creation`.
		 * Required
		 */
		type: RunStepDeltaStepDetailsMessageCreationObjectType;

		/** Required */
		message_creation: RunStepDetailsMessageCreationObjectMessage_creation;
	}

	export interface RunStepDetailsMessageCreationObjectMessage_creation {

		/**
		 * The ID of the message that was created by this run step.
		 * Required
		 */
		message_id: string;
	}


	/** Details of the Code Interpreter tool call the run step was involved in. */
	export interface RunStepDetailsToolCallsCodeObject {

		/**
		 * The ID of the tool call.
		 * Required
		 */
		id: string;

		/**
		 * The type of tool call. This is always going to be `code_interpreter` for this type of tool call.
		 * Required
		 */
		type: AssistantToolsCodeType;

		/**
		 * The Code Interpreter tool call definition.
		 * Required
		 */
		code_interpreter: RunStepDetailsToolCallsCodeObjectCode_interpreter;
	}

	export interface RunStepDetailsToolCallsCodeObjectCode_interpreter {

		/**
		 * The input to the Code Interpreter tool call.
		 * Required
		 */
		input: string;

		/**
		 * The outputs from the Code Interpreter tool call. Code Interpreter can output one or more items, including text (`logs`) or images (`image`). Each of these are represented by a different object type.
		 * Required
		 * Array member types: RunStepDetailsToolCallsCodeOutputLogsObject, RunStepDetailsToolCallsCodeOutputImageObject
		 */
		outputs: Array<any>;
	}

	export interface RunStepDetailsToolCallsCodeOutputImageObject {

		/**
		 * Always `image`.
		 * Required
		 */
		type: RunStepDeltaStepDetailsToolCallsCodeOutputImageObjectType;

		/** Required */
		image: RunStepDetailsToolCallsCodeOutputImageObjectImage;
	}

	export interface RunStepDetailsToolCallsCodeOutputImageObjectImage {

		/**
		 * The [file](/docs/api-reference/files) ID of the image.
		 * Required
		 */
		file_id: string;
	}


	/** Text output from the Code Interpreter tool call as part of a run step. */
	export interface RunStepDetailsToolCallsCodeOutputLogsObject {

		/**
		 * Always `logs`.
		 * Required
		 */
		type: CodeInterpreterTextOutputType;

		/**
		 * The text output from the Code Interpreter tool call.
		 * Required
		 */
		logs: string;
	}

	export interface RunStepDetailsToolCallsFileSearchObject {

		/**
		 * The ID of the tool call object.
		 * Required
		 */
		id: string;

		/**
		 * The type of tool call. This is always going to be `file_search` for this type of tool call.
		 * Required
		 */
		type: AssistantToolsFileSearchType;

		/**
		 * For now, this is always going to be an empty object.
		 * Required
		 */
		file_search: RunStepDetailsToolCallsFileSearchObjectFile_search;
	}

	export interface RunStepDetailsToolCallsFileSearchObjectFile_search {

		/** The ranking options for the file search. */
		ranking_options?: RunStepDetailsToolCallsFileSearchRankingOptionsObject;

		/** The results of the file search. */
		results?: Array<RunStepDetailsToolCallsFileSearchResultObject>;
	}


	/** The ranking options for the file search. */
	export interface RunStepDetailsToolCallsFileSearchRankingOptionsObject {

		/**
		 * The ranker to use for the file search. If not specified will use the `auto` ranker.
		 * Required
		 */
		ranker: FileSearchRankingOptionsRanker;

		/**
		 * The score threshold for the file search. All values must be a floating point number between 0 and 1.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		score_threshold: number;
	}


	/** A result instance of the file search. */
	export interface RunStepDetailsToolCallsFileSearchResultObject {

		/**
		 * The ID of the file that result was found in.
		 * Required
		 */
		file_id: string;

		/**
		 * The name of the file that result was found in.
		 * Required
		 */
		file_name: string;

		/**
		 * The score of the result. All values must be a floating point number between 0 and 1.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		score: number;

		/** The content of the result that was found. The content is only included if requested via the include query parameter. */
		RunStepDetailsToolCallsFileSearchResultObjectContent?: Array<RunStepDetailsToolCallsFileSearchResultObjectContent>;
	}

	export interface RunStepDetailsToolCallsFileSearchResultObjectContent {

		/** The type of the content. */
		type?: ChatCompletionRequestMessageContentPartTextType | null;

		/** The text content of the file. */
		text?: string | null;
	}

	export interface RunStepDetailsToolCallsFunctionObject {

		/**
		 * The ID of the tool call object.
		 * Required
		 */
		id: string;

		/**
		 * The type of tool call. This is always going to be `function` for this type of tool call.
		 * Required
		 */
		type: AssistantToolsFunctionType;

		/**
		 * The definition of the function that was called.
		 * Required
		 */
		function: RunStepDetailsToolCallsFunctionObjectFunction;
	}

	export interface RunStepDetailsToolCallsFunctionObjectFunction {

		/**
		 * The name of the function.
		 * Required
		 */
		name: string;

		/**
		 * The arguments passed to the function.
		 * Required
		 */
		arguments: string;

		/**
		 * The output of the function. This will be `null` if the outputs have not been [submitted](/docs/api-reference/runs/submitToolOutputs) yet.
		 * Required
		 */
		output: string;
	}


	/** Details of the tool call. */
	export interface RunStepDetailsToolCallsObject {

		/**
		 * Always `tool_calls`.
		 * Required
		 */
		type: RunStepDeltaStepDetailsToolCallsObjectType;

		/**
		 * An array of tool calls the run step was involved in. These can be associated with one of three types of tools: `code_interpreter`, `file_search`, or `function`.
		 * Required
		 * Array member types: RunStepDetailsToolCallsCodeObject, RunStepDetailsToolCallsFileSearchObject, RunStepDetailsToolCallsFunctionObject
		 */
		tool_calls: Array<any>;
	}

	export interface RunStepStreamEvent {
	}

	export interface RunStreamEvent {
	}


	/**
	 * A screenshot action.
	 */
	export interface Screenshot {

		/**
		 * Specifies the event type. For a screenshot action, this property is
		 * always set to `screenshot`.
		 * Required
		 */
		type: ScreenshotType;
	}

	export enum ScreenshotType { screenshot = 0 }


	/**
	 * A scroll action.
	 */
	export interface Scroll {

		/**
		 * Specifies the event type. For a scroll action, this property is
		 * always set to `scroll`.
		 * Required
		 */
		type: ScrollType;

		/**
		 * The x-coordinate where the scroll occurred.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x: number;

		/**
		 * The y-coordinate where the scroll occurred.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y: number;

		/**
		 * The horizontal scroll distance.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		scroll_x: number;

		/**
		 * The vertical scroll distance.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		scroll_y: number;
	}

	export enum ScrollType { scroll = 0 }


	/**
	 * Specifies the latency tier to use for processing the request. This parameter is relevant for customers subscribed to the scale tier service:
	 *   - If set to 'auto', and the Project is Scale tier enabled, the system
	 *     will utilize scale tier credits until they are exhausted.
	 *   - If set to 'auto', and the Project is not Scale tier enabled, the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.
	 *   - If set to 'default', the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.
	 *   - If set to 'flex', the request will be processed with the Flex Processing service tier. [Learn more](/docs/guides/flex-processing).
	 *   - When not set, the default behavior is 'auto'.
	 *   When this parameter is set, the response body will include the `service_tier` utilized.
	 */
	export enum ServiceTier { auto = 0, default = 1, flex = 2 }

	export interface StaticChunkingStrategy {

		/**
		 * The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`.
		 * Required
		 * Minimum: 100
		 * Maximum: 4096
		 */
		max_chunk_size_tokens: number;

		/**
		 * The number of tokens that overlap between chunks. The default value is `400`.
		 * Note that the overlap must not exceed half of `max_chunk_size_tokens`.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		chunk_overlap_tokens: number;
	}


	/** Customize your own chunking strategy by setting chunk size and chunk overlap. */
	export interface StaticChunkingStrategyRequestParam {

		/**
		 * Always `static`.
		 * Required
		 */
		type: StaticChunkingStrategyRequestParamType;

		/** Required */
		static: StaticChunkingStrategy;
	}

	export enum StaticChunkingStrategyRequestParamType { static = 0 }

	export interface StaticChunkingStrategyResponseParam {

		/**
		 * Always `static`.
		 * Required
		 */
		type: StaticChunkingStrategyRequestParamType;

		/** Required */
		static: StaticChunkingStrategy;
	}


	/**
	 * Not supported with latest reasoning models `o3` and `o4-mini`.
	 * Up to 4 sequences where the API will stop generating further tokens. The
	 * returned text will not contain the stop sequence.
	 */
	export interface StopConfiguration {
	}

	export interface SubmitToolOutputsRunRequest {

		/**
		 * A list of tools for which the outputs are being submitted.
		 * Required
		 */
		SubmitToolOutputsRunRequestTool_outputs: Array<SubmitToolOutputsRunRequestTool_outputs>;

		/**
		 * If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
		 */
		stream?: boolean | null;
	}

	export interface SubmitToolOutputsRunRequestTool_outputs {

		/** The ID of the tool call in the `required_action` object within the run object the output is being submitted for. */
		tool_call_id?: string | null;

		/** The output of the tool call to be submitted to continue the run. */
		output?: string | null;
	}


	/**
	 * An object specifying the format that the model must output.
	 * Configuring `{ "type": "json_schema" }` enables Structured Outputs, 
	 * which ensures the model will match your supplied JSON schema. Learn more in the 
	 * [Structured Outputs guide](/docs/guides/structured-outputs).
	 * The default format is `{ "type": "text" }` with no additional options.
	 * **Not recommended for gpt-4o and newer models:**
	 * Setting to `{ "type": "json_object" }` enables the older JSON mode, which
	 * ensures the message the model generates is valid JSON. Using `json_schema`
	 * is preferred for models that support it.
	 */
	export interface TextResponseFormatConfiguration {
	}


	/**
	 * JSON Schema response format. Used to generate structured JSON responses.
	 * Learn more about [Structured Outputs](/docs/guides/structured-outputs).
	 */
	export interface TextResponseFormatJsonSchema {

		/**
		 * The type of response format being defined. Always `json_schema`.
		 * Required
		 */
		type: ResponseFormatJsonSchemaType;

		/**
		 * A description of what the response format is for, used by the model to
		 * determine how to respond in the format.
		 */
		description?: string | null;

		/**
		 * The name of the response format. Must be a-z, A-Z, 0-9, or contain
		 * underscores and dashes, with a maximum length of 64.
		 * Required
		 */
		name: string;

		/**
		 * The schema for the response format, described as a JSON Schema object.
		 * Learn how to build JSON schemas [here](https://json-schema.org/).
		 * Required
		 */
		schema: ResponseFormatJsonSchemaSchema;

		/**
		 * Whether to enable strict schema adherence when generating the output.
		 * If set to true, the model will always follow the exact schema defined
		 * in the `schema` field. Only a subset of JSON Schema is supported when
		 * `strict` is `true`. To learn more, read the [Structured Outputs
		 * guide](/docs/guides/structured-outputs).
		 */
		strict?: boolean | null;
	}


	/** Represents a thread that contains [messages](/docs/api-reference/messages). */
	export interface ThreadObject {

		/**
		 * The identifier, which can be referenced in API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The object type, which is always `thread`.
		 * Required
		 */
		object: ThreadObjectObject;

		/**
		 * The Unix timestamp (in seconds) for when the thread was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
		 * Required
		 */
		tool_resources: ThreadObjectTool_resources;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 * Required
		 */
		metadata: Metadata;
	}

	export enum ThreadObjectObject { thread = 0 }

	export interface ThreadObjectTool_resources {
		code_interpreter?: ThreadObjectTool_resourcesCode_interpreter;
		file_search?: ThreadObjectTool_resourcesFile_search;
	}

	export interface ThreadObjectTool_resourcesCode_interpreter {

		/**
		 * A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
		 * Maximum items: 20
		 */
		file_ids?: Array<string>;
	}

	export interface ThreadObjectTool_resourcesFile_search {

		/**
		 * The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.
		 * Maximum items: 1
		 */
		vector_store_ids?: Array<string>;
	}

	export interface ThreadStreamEvent {
	}

	export interface ToggleCertificatesRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		certificate_ids: Array<string>;
	}


	/**
	 * Use this option to force the model to call a specific function.
	 */
	export interface ToolChoiceFunction {

		/**
		 * For function calling, the type is always `function`.
		 * Required
		 */
		type: AssistantToolsFunctionType;

		/**
		 * The name of the function to call.
		 * Required
		 */
		name: string;
	}


	/**
	 * Indicates that the model should use a built-in tool to generate a response.
	 * [Learn more about built-in tools](/docs/guides/tools).
	 */
	export interface ToolChoiceTypes {

		/**
		 * The type of hosted tool the model should to use. Learn more about
		 * [built-in tools](/docs/guides/tools).
		 * Allowed values are:
		 * - `file_search`
		 * - `web_search_preview`
		 * - `computer_use_preview`
		 * Required
		 */
		type: ToolChoiceTypesType;
	}

	export enum ToolChoiceTypesType { file_search = 0, web_search_preview = 1, computer_use_preview = 2, web_search_preview_2025_03_11 = 3 }


	/** Emitted when there is an additional text delta. This is also the first event emitted when the transcription starts. Only emitted when you [create a transcription](/docs/api-reference/audio/create-transcription) with the `Stream` parameter set to `true`. */
	export interface TranscriptTextDeltaEvent {

		/**
		 * The type of the event. Always `transcript.text.delta`.
		 * Required
		 */
		type: TranscriptTextDeltaEventType;

		/**
		 * The text delta that was additionally transcribed.
		 * Required
		 */
		delta: string;

		/**
		 * The log probabilities of the delta. Only included if you [create a transcription](/docs/api-reference/audio/create-transcription) with the `include[]` parameter set to `logprobs`.
		 */
		TranscriptTextDeltaEventLogprobs?: Array<TranscriptTextDeltaEventLogprobs>;
	}

	export enum TranscriptTextDeltaEventType { 'transcript.text.delta' = 0 }

	export interface TranscriptTextDeltaEventLogprobs {

		/**
		 * The token that was used to generate the log probability.
		 */
		token?: string | null;

		/**
		 * The log probability of the token.
		 * Type: double
		 */
		logprob?: number | null;

		/**
		 * The bytes that were used to generate the log probability.
		 */
		bytes?: Array<string>;
	}


	/** Emitted when the transcription is complete. Contains the complete transcription text. Only emitted when you [create a transcription](/docs/api-reference/audio/create-transcription) with the `Stream` parameter set to `true`. */
	export interface TranscriptTextDoneEvent {

		/**
		 * The type of the event. Always `transcript.text.done`.
		 * Required
		 */
		type: TranscriptTextDoneEventType;

		/**
		 * The text that was transcribed.
		 * Required
		 */
		text: string;

		/**
		 * The log probabilities of the individual tokens in the transcription. Only included if you [create a transcription](/docs/api-reference/audio/create-transcription) with the `include[]` parameter set to `logprobs`.
		 */
		TranscriptTextDoneEventLogprobs?: Array<TranscriptTextDoneEventLogprobs>;
	}

	export enum TranscriptTextDoneEventType { 'transcript.text.done' = 0 }

	export interface TranscriptTextDoneEventLogprobs {

		/**
		 * The token that was used to generate the log probability.
		 */
		token?: string | null;

		/**
		 * The log probability of the token.
		 * Type: double
		 */
		logprob?: number | null;

		/**
		 * The bytes that were used to generate the log probability.
		 */
		bytes?: Array<string>;
	}


	/**
	 * An action to type in text.
	 */
	export interface Type {

		/**
		 * Specifies the event type. For a type action, this property is
		 * always set to `type`.
		 * Required
		 */
		type: TypeType;

		/**
		 * The text to type.
		 * Required
		 */
		text: string;
	}

	export enum TypeType { type = 0 }

	export interface UpdateVectorStoreFileAttributesRequest {

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard. Keys are strings
		 * with a maximum length of 64 characters. Values are strings with a maximum
		 * length of 512 characters, booleans, or numbers.
		 * Required
		 */
		attributes: VectorStoreFileAttributes;
	}

	export interface UpdateVectorStoreRequest {

		/** The name of the vector store. */
		name?: string | null;
		expires_after?: VectorStoreExpirationAfter;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;
	}


	/**
	 * The Upload object can accept byte chunks in the form of Parts.
	 */
	export interface Upload {

		/**
		 * The Upload unique identifier, which can be referenced in API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The Unix timestamp (in seconds) for when the Upload was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The name of the file to be uploaded.
		 * Required
		 */
		filename: string;

		/**
		 * The intended number of bytes to be uploaded.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes: number;

		/**
		 * The intended purpose of the file. [Please refer here](/docs/api-reference/files/object#files/object-purpose) for acceptable values.
		 * Required
		 */
		purpose: string;

		/**
		 * The status of the Upload.
		 * Required
		 */
		status: UploadStatus;

		/**
		 * The Unix timestamp (in seconds) for when the Upload will expire.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_at: number;

		/** The object type, which is always "upload". */
		object?: UploadObject | null;
		file?: OpenAIFile;
	}

	export enum UploadStatus { pending = 0, completed = 1, cancelled = 2, expired = 3 }

	export enum UploadObject { upload = 0 }

	export interface UploadCertificateRequest {

		/** An optional name for the certificate */
		name?: string | null;

		/**
		 * The certificate content in PEM format
		 * Required
		 */
		content: string;
	}


	/**
	 * The upload Part represents a chunk of bytes we can add to an Upload object.
	 */
	export interface UploadPart {

		/**
		 * The upload Part unique identifier, which can be referenced in API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The Unix timestamp (in seconds) for when the Part was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The ID of the Upload object that this Part was added to.
		 * Required
		 */
		upload_id: string;

		/**
		 * The object type, which is always `upload.part`.
		 * Required
		 */
		object: UploadPartObject;
	}

	export enum UploadPartObject { 'upload.part' = 0 }


	/** The aggregated audio speeches usage details of the specific time bucket. */
	export interface UsageAudioSpeechesResult {

		/** Required */
		object: UsageAudioSpeechesResultObject;

		/**
		 * The number of characters processed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		characters: number;

		/**
		 * The count of requests made to the model.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_model_requests: number;

		/** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
		project_id?: string | null;

		/** When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
		user_id?: string | null;

		/** When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
		api_key_id?: string | null;

		/** When `group_by=model`, this field provides the model name of the grouped usage result. */
		model?: string | null;
	}

	export enum UsageAudioSpeechesResultObject { 'organization.usage.audio_speeches.result' = 0 }


	/** The aggregated audio transcriptions usage details of the specific time bucket. */
	export interface UsageAudioTranscriptionsResult {

		/** Required */
		object: UsageAudioTranscriptionsResultObject;

		/**
		 * The number of seconds processed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds: number;

		/**
		 * The count of requests made to the model.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_model_requests: number;

		/** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
		project_id?: string | null;

		/** When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
		user_id?: string | null;

		/** When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
		api_key_id?: string | null;

		/** When `group_by=model`, this field provides the model name of the grouped usage result. */
		model?: string | null;
	}

	export enum UsageAudioTranscriptionsResultObject { 'organization.usage.audio_transcriptions.result' = 0 }


	/** The aggregated code interpreter sessions usage details of the specific time bucket. */
	export interface UsageCodeInterpreterSessionsResult {

		/** Required */
		object: UsageCodeInterpreterSessionsResultObject;

		/**
		 * The number of code interpreter sessions.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_sessions?: number | null;

		/** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
		project_id?: string | null;
	}

	export enum UsageCodeInterpreterSessionsResultObject { 'organization.usage.code_interpreter_sessions.result' = 0 }


	/** The aggregated completions usage details of the specific time bucket. */
	export interface UsageCompletionsResult {

		/** Required */
		object: UsageCompletionsResultObject;

		/**
		 * The aggregated number of text input tokens used, including cached tokens. For customers subscribe to scale tier, this includes scale tier tokens.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		input_tokens: number;

		/**
		 * The aggregated number of text input tokens that has been cached from previous requests. For customers subscribe to scale tier, this includes scale tier tokens.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		input_cached_tokens?: number | null;

		/**
		 * The aggregated number of text output tokens used. For customers subscribe to scale tier, this includes scale tier tokens.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_tokens: number;

		/**
		 * The aggregated number of audio input tokens used, including cached tokens.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		input_audio_tokens?: number | null;

		/**
		 * The aggregated number of audio output tokens used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		output_audio_tokens?: number | null;

		/**
		 * The count of requests made to the model.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_model_requests: number;

		/** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
		project_id?: string | null;

		/** When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
		user_id?: string | null;

		/** When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
		api_key_id?: string | null;

		/** When `group_by=model`, this field provides the model name of the grouped usage result. */
		model?: string | null;

		/** When `group_by=batch`, this field tells whether the grouped usage result is batch or not. */
		batch?: boolean | null;
	}

	export enum UsageCompletionsResultObject { 'organization.usage.completions.result' = 0 }


	/** The aggregated embeddings usage details of the specific time bucket. */
	export interface UsageEmbeddingsResult {

		/** Required */
		object: UsageEmbeddingsResultObject;

		/**
		 * The aggregated number of input tokens used.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		input_tokens: number;

		/**
		 * The count of requests made to the model.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_model_requests: number;

		/** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
		project_id?: string | null;

		/** When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
		user_id?: string | null;

		/** When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
		api_key_id?: string | null;

		/** When `group_by=model`, this field provides the model name of the grouped usage result. */
		model?: string | null;
	}

	export enum UsageEmbeddingsResultObject { 'organization.usage.embeddings.result' = 0 }


	/** The aggregated images usage details of the specific time bucket. */
	export interface UsageImagesResult {

		/** Required */
		object: UsageImagesResultObject;

		/**
		 * The number of images processed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		images: number;

		/**
		 * The count of requests made to the model.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_model_requests: number;

		/** When `group_by=source`, this field provides the source of the grouped usage result, possible values are `image.generation`, `image.edit`, `image.variation`. */
		source?: string | null;

		/** When `group_by=size`, this field provides the image size of the grouped usage result. */
		size?: string | null;

		/** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
		project_id?: string | null;

		/** When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
		user_id?: string | null;

		/** When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
		api_key_id?: string | null;

		/** When `group_by=model`, this field provides the model name of the grouped usage result. */
		model?: string | null;
	}

	export enum UsageImagesResultObject { 'organization.usage.images.result' = 0 }


	/** The aggregated moderations usage details of the specific time bucket. */
	export interface UsageModerationsResult {

		/** Required */
		object: UsageModerationsResultObject;

		/**
		 * The aggregated number of input tokens used.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		input_tokens: number;

		/**
		 * The count of requests made to the model.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_model_requests: number;

		/** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
		project_id?: string | null;

		/** When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
		user_id?: string | null;

		/** When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
		api_key_id?: string | null;

		/** When `group_by=model`, this field provides the model name of the grouped usage result. */
		model?: string | null;
	}

	export enum UsageModerationsResultObject { 'organization.usage.moderations.result' = 0 }

	export interface UsageResponse {

		/** Required */
		object: UsageResponseObject;

		/** Required */
		data: Array<UsageTimeBucket>;

		/** Required */
		has_more: boolean;

		/** Required */
		next_page: string;
	}

	export enum UsageResponseObject { page = 0 }

	export interface UsageTimeBucket {

		/** Required */
		object: UsageTimeBucketObject;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_time: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end_time: number;

		/**
		 * Required
		 * Array member types: UsageCompletionsResult, UsageEmbeddingsResult, UsageModerationsResult, UsageImagesResult, UsageAudioSpeechesResult, UsageAudioTranscriptionsResult, UsageVectorStoresResult, UsageCodeInterpreterSessionsResult, CostsResult
		 */
		result: Array<any>;
	}

	export enum UsageTimeBucketObject { bucket = 0 }


	/** The aggregated vector stores usage details of the specific time bucket. */
	export interface UsageVectorStoresResult {

		/** Required */
		object: UsageVectorStoresResultObject;

		/**
		 * The vector stores usage in bytes.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		usage_bytes: number;

		/** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
		project_id?: string | null;
	}

	export enum UsageVectorStoresResultObject { 'organization.usage.vector_stores.result' = 0 }


	/** Represents an individual `user` within an organization. */
	export interface User {

		/**
		 * The object type, which is always `organization.user`
		 * Required
		 */
		object: UserObject;

		/**
		 * The identifier, which can be referenced in API endpoints
		 * Required
		 */
		id: string;

		/**
		 * The name of the user
		 * Required
		 */
		name: string;

		/**
		 * The email address of the user
		 * Required
		 */
		email: string;

		/**
		 * `owner` or `reader`
		 * Required
		 */
		role: InviteRole;

		/**
		 * The Unix timestamp (in seconds) of when the user was added.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		added_at: number;
	}

	export enum UserObject { 'organization.user' = 0 }

	export interface UserDeleteResponse {

		/** Required */
		object: UserDeleteResponseObject;

		/** Required */
		id: string;

		/** Required */
		deleted: boolean;
	}

	export enum UserDeleteResponseObject { 'organization.user.deleted' = 0 }

	export interface UserListResponse {

		/** Required */
		object: ChatCompletionListObject;

		/** Required */
		data: Array<User>;

		/** Required */
		first_id: string;

		/** Required */
		last_id: string;

		/** Required */
		has_more: boolean;
	}

	export interface UserRoleUpdateRequest {

		/**
		 * `owner` or `reader`
		 * Required
		 */
		role: InviteRole;
	}


	/** A batch of files attached to a vector store. */
	export interface VectorStoreFileBatchObject {

		/**
		 * The identifier, which can be referenced in API endpoints.
		 * Required
		 */
		id: string;

		/**
		 * The object type, which is always `vector_store.file_batch`.
		 * Required
		 */
		object: VectorStoreFileBatchObjectObject;

		/**
		 * The Unix timestamp (in seconds) for when the vector store files batch was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: number;

		/**
		 * The ID of the [vector store](/docs/api-reference/vector-stores/object) that the [File](/docs/api-reference/files) is attached to.
		 * Required
		 */
		vector_store_id: string;

		/**
		 * The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`.
		 * Required
		 */
		status: VectorStoreFileObjectStatus;

		/** Required */
		file_counts: VectorStoreFileBatchObjectFile_counts;
	}

	export enum VectorStoreFileBatchObjectObject { 'vector_store.files_batch' = 0 }

	export interface VectorStoreFileBatchObjectFile_counts {

		/**
		 * The number of files that are currently being processed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		in_progress: number;

		/**
		 * The number of files that have been processed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completed: number;

		/**
		 * The number of files that have failed to process.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failed: number;

		/**
		 * The number of files that where cancelled.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cancelled: number;

		/**
		 * The total number of files.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}


	/** Represents the parsed content of a vector store file. */
	export interface VectorStoreFileContentResponse {

		/**
		 * The object type, which is always `vector_store.file_content.page`
		 * Required
		 */
		object: VectorStoreFileContentResponseObject;

		/**
		 * Parsed content of the file.
		 * Required
		 */
		VectorStoreFileContentResponseData: Array<VectorStoreFileContentResponseData>;

		/**
		 * Indicates if there are more content pages to fetch.
		 * Required
		 */
		has_more: boolean;

		/**
		 * The token for the next page, if any.
		 * Required
		 */
		next_page: string;
	}

	export enum VectorStoreFileContentResponseObject { 'vector_store.file_content.page' = 0 }

	export interface VectorStoreFileContentResponseData {

		/** The content type (currently only `"text"`) */
		type?: string | null;

		/** The text content */
		text?: string | null;
	}

	export interface VectorStoreSearchRequest {

		/**
		 * A query string for a search
		 * Required
		 */
		query: string;

		/** Whether to rewrite the natural language query for vector search. */
		rewrite_query?: boolean | null;

		/**
		 * The maximum number of results to return. This number should be between 1 and 50 inclusive.
		 * Minimum: 1
		 * Maximum: 50
		 */
		max_num_results?: number | null;

		/** A filter to apply based on file attributes. */
		filters?: ComparisonFilter;

		/** Ranking options for search. */
		ranking_options?: VectorStoreSearchRequestRanking_options;
	}

	export interface VectorStoreSearchRequestRanking_options {
		ranker?: VectorStoreSearchRequestRanking_optionsRanker | null;

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		score_threshold?: number | null;
	}

	export enum VectorStoreSearchRequestRanking_optionsRanker { auto = 0, 'default-2024-11-15' = 1 }

	export interface VectorStoreSearchResultContentObject {

		/**
		 * The type of content.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartTextType;

		/**
		 * The text content returned from search.
		 * Required
		 */
		text: string;
	}

	export interface VectorStoreSearchResultItem {

		/**
		 * The ID of the vector store file.
		 * Required
		 */
		file_id: string;

		/**
		 * The name of the vector store file.
		 * Required
		 */
		filename: string;

		/**
		 * The similarity score for the result.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		score: number;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard. Keys are strings
		 * with a maximum length of 64 characters. Values are strings with a maximum
		 * length of 512 characters, booleans, or numbers.
		 * Required
		 */
		attributes: VectorStoreFileAttributes;

		/**
		 * Content chunks from the file.
		 * Required
		 */
		content: Array<VectorStoreSearchResultContentObject>;
	}

	export interface VectorStoreSearchResultsPage {

		/**
		 * The object type, which is always `vector_store.search_results.page`
		 * Required
		 */
		object: VectorStoreSearchResultsPageObject;

		/** Required */
		search_query: Array<string>;

		/**
		 * The list of search result items.
		 * Required
		 */
		data: Array<VectorStoreSearchResultItem>;

		/**
		 * Indicates if there are more results to fetch.
		 * Required
		 */
		has_more: boolean;

		/**
		 * The token for the next page, if any.
		 * Required
		 */
		next_page: string;
	}

	export enum VectorStoreSearchResultsPageObject { 'vector_store.search_results.page' = 0 }

	export interface VoiceIdsShared {
	}


	/**
	 * A wait action.
	 */
	export interface Wait {

		/**
		 * Specifies the event type. For a wait action, this property is
		 * always set to `wait`.
		 * Required
		 */
		type: WaitType;
	}

	export enum WaitType { wait = 0 }


	/**
	 * High level guidance for the amount of context window space to use for the 
	 * search. One of `low`, `medium`, or `high`. `medium` is the default.
	 */
	export enum WebSearchContextSize { low = 0, medium = 1, high = 2 }


	/**
	 * The results of a web search tool call. See the 
	 * [web search guide](/docs/guides/tools-web-search) for more information.
	 */
	export interface WebSearchToolCall {

		/**
		 * The unique ID of the web search tool call.
		 * Required
		 */
		id: string;

		/**
		 * The type of the web search tool call. Always `web_search_call`.
		 * Required
		 */
		type: WebSearchToolCallType;

		/**
		 * The status of the web search tool call.
		 * Required
		 */
		status: WebSearchToolCallStatus;
	}

	export enum WebSearchToolCallType { web_search_call = 0 }

	export enum WebSearchToolCallStatus { in_progress = 0, searching = 1, completed = 2, failed = 3 }


	/** A text input to the model. */
	export interface InputTextContent {

		/**
		 * The type of the input item. Always `input_text`.
		 * Required
		 */
		type: InputTextContentType;

		/**
		 * The text input to the model.
		 * Required
		 */
		text: string;
	}

	export enum InputTextContentType { input_text = 0 }


	/** An image input to the model. Learn about [image inputs](/docs/guides/vision). */
	export interface InputImageContent {

		/**
		 * The type of the input item. Always `input_image`.
		 * Required
		 */
		type: InputImageContentType;
		image_url?: string;
		file_id?: string;

		/**
		 * The detail level of the image to be sent to the model. One of `high`, `low`, or `auto`. Defaults to `auto`.
		 * Required
		 */
		detail: InputImageContentDetail;
	}

	export enum InputImageContentType { input_image = 0 }

	export enum InputImageContentDetail { low = 0, high = 1, auto = 2 }


	/** A file input to the model. */
	export interface InputFileContent {

		/**
		 * The type of the input item. Always `input_file`.
		 * Required
		 */
		type: InputFileContentType;
		file_id?: string;

		/** The name of the file to be sent to the model. */
		filename?: string | null;

		/**
		 * The content of the file to be sent to the model.
		 */
		file_data?: string | null;
	}

	export enum InputFileContentType { input_file = 0 }

	export interface RankingOptions {

		/** The ranker to use for the file search. */
		ranker?: VectorStoreSearchRequestRanking_optionsRanker | null;

		/**
		 * The score threshold for the file search, a number between 0 and 1. Numbers closer to 1 will attempt to return only the most relevant results, but may return fewer results.
		 * Type: double
		 */
		score_threshold?: number | null;
	}

	export interface Filters {
	}


	/** A tool that searches for relevant content from uploaded files. Learn more about the [file search tool](https://platform.openai.com/docs/guides/tools-file-search). */
	export interface FileSearchTool {

		/**
		 * The type of the file search tool. Always `file_search`.
		 * Required
		 */
		type: AssistantToolsFileSearchType;

		/**
		 * The IDs of the vector stores to search.
		 * Required
		 */
		vector_store_ids: Array<string>;

		/**
		 * The maximum number of results to return. This number should be between 1 and 50 inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_num_results?: number | null;
		ranking_options?: RankingOptions;
		filters?: Filters;
	}


	/** Defines a function in your own code the model can choose to call. Learn more about [function calling](https://platform.openai.com/docs/guides/function-calling). */
	export interface FunctionTool {

		/**
		 * The type of the function tool. Always `function`.
		 * Required
		 */
		type: AssistantToolsFunctionType;

		/**
		 * The name of the function to call.
		 * Required
		 */
		name: string;
		description?: string;

		/** Required */
		parameters: {[id: string]: any };

		/** Required */
		strict: boolean;
	}

	export interface ApproximateLocation {

		/**
		 * The type of location approximation. Always `approximate`.
		 * Required
		 */
		type: CreateChatCompletionRequestWeb_search_optionsUser_locationType;
		country?: string;
		region?: string;
		city?: string;
		timezone?: string;
	}


	/** This tool searches the web for relevant results to use in a response. Learn more about the [web search tool](https://platform.openai.com/docs/guides/tools-web-search). */
	export interface WebSearchPreviewTool {

		/**
		 * The type of the web search tool. One of `web_search_preview` or `web_search_preview_2025_03_11`.
		 * Required
		 */
		type: WebSearchPreviewToolType;
		user_location?: ApproximateLocation;

		/** High level guidance for the amount of context window space to use for the search. One of `low`, `medium`, or `high`. `medium` is the default. */
		search_context_size?: CreateAssistantRequestReasoning_effort | null;
	}

	export enum WebSearchPreviewToolType { web_search_preview = 0, web_search_preview_2025_03_11 = 1 }


	/** A tool that controls a virtual computer. Learn more about the [computer tool](https://platform.openai.com/docs/guides/tools-computer-use). */
	export interface ComputerUsePreviewTool {

		/**
		 * The type of the computer use tool. Always `computer_use_preview`.
		 * Required
		 */
		type: ComputerUsePreviewToolType;

		/**
		 * The type of computer environment to control.
		 * Required
		 */
		environment: ComputerUsePreviewToolEnvironment;

		/**
		 * The width of the computer display.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		display_width: number;

		/**
		 * The height of the computer display.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		display_height: number;
	}

	export enum ComputerUsePreviewToolType { computer_use_preview = 0 }

	export enum ComputerUsePreviewToolEnvironment { windows = 0, mac = 1, linux = 2, ubuntu = 3, browser = 4 }

	export interface Tool {
	}


	/** A citation to a file. */
	export interface FileCitationBody {

		/**
		 * The type of the file citation. Always `file_citation`.
		 * Required
		 */
		type: MessageContentTextAnnotationsFileCitationObjectType;

		/**
		 * The ID of the file.
		 * Required
		 */
		file_id: string;

		/**
		 * The index of the file in the list of files.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;
	}


	/** A citation for a web resource used to generate a model response. */
	export interface UrlCitationBody {

		/**
		 * The type of the URL citation. Always `url_citation`.
		 * Required
		 */
		type: ChatCompletionResponseMessageAnnotationsType;

		/**
		 * The URL of the web resource.
		 * Required
		 */
		url: string;

		/**
		 * The index of the first character of the URL citation in the message.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_index: number;

		/**
		 * The index of the last character of the URL citation in the message.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end_index: number;

		/**
		 * The title of the web resource.
		 * Required
		 */
		title: string;
	}

	export interface Annotation {
	}


	/** A text output from the model. */
	export interface OutputTextContent {

		/**
		 * The type of the output text. Always `output_text`.
		 * Required
		 */
		type: OutputTextContentType;

		/**
		 * The text output from the model.
		 * Required
		 */
		text: string;

		/**
		 * The annotations of the text output.
		 * Required
		 * Array member types: FileCitationBody, UrlCitationBody, FilePath
		 */
		annotations: Array<any>;
	}

	export enum OutputTextContentType { output_text = 0 }


	/** A refusal from the model. */
	export interface RefusalContent {

		/**
		 * The type of the refusal. Always `refusal`.
		 * Required
		 */
		type: ChatCompletionRequestMessageContentPartRefusalType;

		/**
		 * The refusal explanationfrom the model.
		 * Required
		 */
		refusal: string;
	}


	/** A pending safety check for the computer call. */
	export interface ComputerCallSafetyCheckParam {

		/**
		 * The ID of the pending safety check.
		 * Required
		 */
		id: string;
		code?: string;
		message?: string;
	}


	/** The output of a computer tool call. */
	export interface ComputerCallOutputItemParam {
		id?: string;

		/**
		 * The ID of the computer tool call that produced the output.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		call_id: string;

		/**
		 * The type of the computer tool call output. Always `computer_call_output`.
		 * Required
		 */
		type: ComputerToolCallOutputType;

		/**
		 * A computer screenshot image used with the computer use tool.
		 * Required
		 */
		output: ComputerScreenshotImage;
		acknowledged_safety_checks?: Array<ComputerCallSafetyCheckParam>;
		status?: ComputerToolCallStatus;
	}


	/** The output of a function tool call. */
	export interface FunctionCallOutputItemParam {
		id?: string;

		/**
		 * The unique ID of the function tool call generated by the model.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		call_id: string;

		/**
		 * The type of the function tool call output. Always `function_call_output`.
		 * Required
		 */
		type: FunctionToolCallOutputType;

		/**
		 * A JSON string of the output of the function tool call.
		 * Required
		 * Max length: 10485760
		 */
		output: string;
		status?: ComputerToolCallStatus;
	}


	/** An internal identifier for an item to reference. */
	export interface ItemReferenceParam {
		type?: ItemReferenceParamType;

		/**
		 * The ID of the item to reference.
		 * Required
		 */
		id: string;
	}

	export enum ItemReferenceParamType { item_reference = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of assistants.
		 * Get assistants
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ListAssistantsOrder} order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @param {string} before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
		 * @return {ListAssistantsResponse} OK
		 */
		ListAssistants(limit: number | null | undefined, order: ListAssistantsOrder | null | undefined, after: string | null | undefined, before: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListAssistantsResponse> {
			return this.http.get<ListAssistantsResponse>(this.baseUri + 'assistants?limit=' + limit + '&order=' + order + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&before=' + (before == null ? '' : encodeURIComponent(before)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an assistant with a model and instructions.
		 * Post assistants
		 * @return {AssistantObject} OK
		 */
		CreateAssistant(requestBody: CreateAssistantRequest, headersHandler?: () => HttpHeaders): Observable<AssistantObject> {
			return this.http.post<AssistantObject>(this.baseUri + 'assistants', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves an assistant.
		 * Get assistants/{assistant_id}
		 * @param {string} assistant_id The ID of the assistant to retrieve.
		 * @return {AssistantObject} OK
		 */
		GetAssistant(assistant_id: string, headersHandler?: () => HttpHeaders): Observable<AssistantObject> {
			return this.http.get<AssistantObject>(this.baseUri + 'assistants/' + (assistant_id == null ? '' : encodeURIComponent(assistant_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies an assistant.
		 * Post assistants/{assistant_id}
		 * @param {string} assistant_id The ID of the assistant to modify.
		 * @return {AssistantObject} OK
		 */
		ModifyAssistant(assistant_id: string, requestBody: ModifyAssistantRequest, headersHandler?: () => HttpHeaders): Observable<AssistantObject> {
			return this.http.post<AssistantObject>(this.baseUri + 'assistants/' + (assistant_id == null ? '' : encodeURIComponent(assistant_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an assistant.
		 * Delete assistants/{assistant_id}
		 * @param {string} assistant_id The ID of the assistant to delete.
		 * @return {DeleteAssistantResponse} OK
		 */
		DeleteAssistant(assistant_id: string, headersHandler?: () => HttpHeaders): Observable<DeleteAssistantResponse> {
			return this.http.delete<DeleteAssistantResponse>(this.baseUri + 'assistants/' + (assistant_id == null ? '' : encodeURIComponent(assistant_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Generates audio from the input text.
		 * Post audio/speech
		 * @return {void} OK
		 */
		CreateSpeech(requestBody: CreateSpeechRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'audio/speech', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates and executes a batch from an uploaded file of requests
		 * Post batches
		 * @return {Batch} Batch created successfully.
		 */
		CreateBatch(requestBody: CreateBatchPostBody, headersHandler?: () => HttpHeaders): Observable<Batch> {
			return this.http.post<Batch>(this.baseUri + 'batches', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List your organization's batches.
		 * Get batches
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListBatchesResponse} Batch listed successfully.
		 */
		ListBatches(after: string | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListBatchesResponse> {
			return this.http.get<ListBatchesResponse>(this.baseUri + 'batches?after=' + (after == null ? '' : encodeURIComponent(after)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves a batch.
		 * Get batches/{batch_id}
		 * @param {string} batch_id The ID of the batch to retrieve.
		 * @return {Batch} Batch retrieved successfully.
		 */
		RetrieveBatch(batch_id: string, headersHandler?: () => HttpHeaders): Observable<Batch> {
			return this.http.get<Batch>(this.baseUri + 'batches/' + (batch_id == null ? '' : encodeURIComponent(batch_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Cancels an in-progress batch. The batch will be in status `cancelling` for up to 10 minutes, before changing to `cancelled`, where it will have partial results (if any) available in the output file.
		 * Post batches/{batch_id}/cancel
		 * @param {string} batch_id The ID of the batch to cancel.
		 * @return {Batch} Batch is cancelling. Returns the cancelling batch's details.
		 */
		CancelBatch(batch_id: string, headersHandler?: () => HttpHeaders): Observable<Batch> {
			return this.http.post<Batch>(this.baseUri + 'batches/' + (batch_id == null ? '' : encodeURIComponent(batch_id)) + '/cancel', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List stored Chat Completions. Only Chat Completions that have been stored
		 * with the `store` parameter set to `true` will be returned.
		 * Get chat/completions
		 * @param {string} model The model used to generate the Chat Completions.
		 * @param {Metadata} metadata A list of metadata keys to filter the Chat Completions by. Example:
		 * `metadata[key1]=value1&metadata[key2]=value2`
		 * @param {string} after Identifier for the last chat completion from the previous pagination request.
		 * @param {number} limit Number of Chat Completions to retrieve.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ListAssistantsOrder} order Sort order for Chat Completions by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`.
		 * @return {ChatCompletionList} A list of Chat Completions
		 */
		ListChatCompletions(model: string | null | undefined, metadata: Metadata | null | undefined, after: string | null | undefined, limit: number | null | undefined, order: ListAssistantsOrder | null | undefined, headersHandler?: () => HttpHeaders): Observable<ChatCompletionList> {
			return this.http.get<ChatCompletionList>(this.baseUri + 'chat/completions?model=' + (model == null ? '' : encodeURIComponent(model)) + '&metadata=' + metadata + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&limit=' + limit + '&order=' + order, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * **Starting a new project?** We recommend trying [Responses](/docs/api-reference/responses)
		 * to take advantage of the latest OpenAI platform features. Compare
		 * [Chat Completions with Responses](/docs/guides/responses-vs-chat-completions?api-mode=responses).
		 * ---
		 * Creates a model response for the given chat conversation. Learn more in the
		 * [text generation](/docs/guides/text-generation), [vision](/docs/guides/vision),
		 * and [audio](/docs/guides/audio) guides.
		 * Parameter support can differ depending on the model used to generate the
		 * response, particularly for newer reasoning models. Parameters that are only
		 * supported for reasoning models are noted below. For the current state of
		 * unsupported parameters in reasoning models,
		 * [refer to the reasoning guide](/docs/guides/reasoning).
		 * Post chat/completions
		 * @return {CreateChatCompletionResponse} OK
		 */
		CreateChatCompletion(requestBody: CreateChatCompletionRequest, headersHandler?: () => HttpHeaders): Observable<CreateChatCompletionResponse> {
			return this.http.post<CreateChatCompletionResponse>(this.baseUri + 'chat/completions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get a stored chat completion. Only Chat Completions that have been created
		 * with the `store` parameter set to `true` will be returned.
		 * Get chat/completions/{completion_id}
		 * @param {string} completion_id The ID of the chat completion to retrieve.
		 * @return {CreateChatCompletionResponse} A chat completion
		 */
		GetChatCompletion(completion_id: string, headersHandler?: () => HttpHeaders): Observable<CreateChatCompletionResponse> {
			return this.http.get<CreateChatCompletionResponse>(this.baseUri + 'chat/completions/' + (completion_id == null ? '' : encodeURIComponent(completion_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modify a stored chat completion. Only Chat Completions that have been
		 * created with the `store` parameter set to `true` can be modified. Currently,
		 * the only supported modification is to update the `metadata` field.
		 * Post chat/completions/{completion_id}
		 * @param {string} completion_id The ID of the chat completion to update.
		 * @return {CreateChatCompletionResponse} A chat completion
		 */
		UpdateChatCompletion(completion_id: string, requestBody: UpdateChatCompletionPostBody, headersHandler?: () => HttpHeaders): Observable<CreateChatCompletionResponse> {
			return this.http.post<CreateChatCompletionResponse>(this.baseUri + 'chat/completions/' + (completion_id == null ? '' : encodeURIComponent(completion_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a stored chat completion. Only Chat Completions that have been
		 * created with the `store` parameter set to `true` can be deleted.
		 * Delete chat/completions/{completion_id}
		 * @param {string} completion_id The ID of the chat completion to delete.
		 * @return {ChatCompletionDeleted} The chat completion was deleted successfully.
		 */
		DeleteChatCompletion(completion_id: string, headersHandler?: () => HttpHeaders): Observable<ChatCompletionDeleted> {
			return this.http.delete<ChatCompletionDeleted>(this.baseUri + 'chat/completions/' + (completion_id == null ? '' : encodeURIComponent(completion_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the messages in a stored chat completion. Only Chat Completions that
		 * have been created with the `store` parameter set to `true` will be
		 * returned.
		 * Get chat/completions/{completion_id}/messages
		 * @param {string} completion_id The ID of the chat completion to retrieve messages from.
		 * @param {string} after Identifier for the last message from the previous pagination request.
		 * @param {number} limit Number of messages to retrieve.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ListAssistantsOrder} order Sort order for messages by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`.
		 * @return {ChatCompletionMessageList} A list of messages
		 */
		GetChatCompletionMessages(completion_id: string, after: string | null | undefined, limit: number | null | undefined, order: ListAssistantsOrder | null | undefined, headersHandler?: () => HttpHeaders): Observable<ChatCompletionMessageList> {
			return this.http.get<ChatCompletionMessageList>(this.baseUri + 'chat/completions/' + (completion_id == null ? '' : encodeURIComponent(completion_id)) + '/messages&after=' + (after == null ? '' : encodeURIComponent(after)) + '&limit=' + limit + '&order=' + order, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a completion for the provided prompt and parameters.
		 * Post completions
		 * @return {CreateCompletionResponse} OK
		 */
		CreateCompletion(requestBody: CreateCompletionRequest, headersHandler?: () => HttpHeaders): Observable<CreateCompletionResponse> {
			return this.http.post<CreateCompletionResponse>(this.baseUri + 'completions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates an embedding vector representing the input text.
		 * Post embeddings
		 * @return {CreateEmbeddingResponse} OK
		 */
		CreateEmbedding(requestBody: CreateEmbeddingRequest, headersHandler?: () => HttpHeaders): Observable<CreateEmbeddingResponse> {
			return this.http.post<CreateEmbeddingResponse>(this.baseUri + 'embeddings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List evaluations for a project.
		 * Get evals
		 * @param {string} after Identifier for the last eval from the previous pagination request.
		 * @param {number} limit Number of evals to retrieve.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ListAssistantsOrder} order Sort order for evals by timestamp. Use `asc` for ascending order or `desc` for descending order.
		 * @param {ListEvalsOrder_by} order_by Evals can be ordered by creation time or last updated time. Use
		 * `created_at` for creation time or `updated_at` for last updated time.
		 * @return {EvalList} A list of evals
		 */
		ListEvals(after: string | null | undefined, limit: number | null | undefined, order: ListAssistantsOrder | null | undefined, order_by: ListEvalsOrder_by | null | undefined, headersHandler?: () => HttpHeaders): Observable<EvalList> {
			return this.http.get<EvalList>(this.baseUri + 'evals?after=' + (after == null ? '' : encodeURIComponent(after)) + '&limit=' + limit + '&order=' + order + '&order_by=' + order_by, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create the structure of an evaluation that can be used to test a model's performance.
		 * An evaluation is a set of testing criteria and a datasource. After creating an evaluation, you can run it on different models and model parameters. We support several types of graders and datasources.
		 * For more information, see the [Evals guide](/docs/guides/evals).
		 * Post evals
		 * @return {void} 
		 */
		CreateEval(requestBody: CreateEvalRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'evals', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an evaluation by ID.
		 * Get evals/{eval_id}
		 * @param {string} eval_id The ID of the evaluation to retrieve.
		 * @return {Eval} The evaluation
		 */
		GetEval(eval_id: string, headersHandler?: () => HttpHeaders): Observable<Eval> {
			return this.http.get<Eval>(this.baseUri + 'evals/' + (eval_id == null ? '' : encodeURIComponent(eval_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update certain properties of an evaluation.
		 * Post evals/{eval_id}
		 * @param {string} eval_id The ID of the evaluation to update.
		 * @param {UpdateEvalPostBody} requestBody Request to update an evaluation
		 * @return {Eval} The updated evaluation
		 */
		UpdateEval(eval_id: string, requestBody: UpdateEvalPostBody, headersHandler?: () => HttpHeaders): Observable<Eval> {
			return this.http.post<Eval>(this.baseUri + 'evals/' + (eval_id == null ? '' : encodeURIComponent(eval_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an evaluation.
		 * Delete evals/{eval_id}
		 * @param {string} eval_id The ID of the evaluation to delete.
		 * @return {DeleteEvalReturn} Successfully deleted the evaluation.
		 */
		DeleteEval(eval_id: string, headersHandler?: () => HttpHeaders): Observable<DeleteEvalReturn> {
			return this.http.delete<DeleteEvalReturn>(this.baseUri + 'evals/' + (eval_id == null ? '' : encodeURIComponent(eval_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of runs for an evaluation.
		 * Get evals/{eval_id}/runs
		 * @param {string} eval_id The ID of the evaluation to retrieve runs for.
		 * @param {string} after Identifier for the last run from the previous pagination request.
		 * @param {number} limit Number of runs to retrieve.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ListAssistantsOrder} order Sort order for runs by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`.
		 * @param {GetEvalRunsStatus} status Filter runs by status. One of `queued` | `in_progress` | `failed` | `completed` | `canceled`.
		 * @return {EvalRunList} A list of runs for the evaluation
		 */
		GetEvalRuns(eval_id: string, after: string | null | undefined, limit: number | null | undefined, order: ListAssistantsOrder | null | undefined, status: GetEvalRunsStatus | null | undefined, headersHandler?: () => HttpHeaders): Observable<EvalRunList> {
			return this.http.get<EvalRunList>(this.baseUri + 'evals/' + (eval_id == null ? '' : encodeURIComponent(eval_id)) + '/runs&after=' + (after == null ? '' : encodeURIComponent(after)) + '&limit=' + limit + '&order=' + order + '&status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new evaluation run. This is the endpoint that will kick off grading.
		 * Post evals/{eval_id}/runs
		 * @param {string} eval_id The ID of the evaluation to create a run for.
		 * @return {void} 
		 */
		CreateEvalRun(eval_id: string, requestBody: CreateEvalRunRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'evals/' + (eval_id == null ? '' : encodeURIComponent(eval_id)) + '/runs', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an evaluation run by ID.
		 * Get evals/{eval_id}/runs/{run_id}
		 * @param {string} eval_id The ID of the evaluation to retrieve runs for.
		 * @param {string} run_id The ID of the run to retrieve.
		 * @return {EvalRun} The evaluation run
		 */
		GetEvalRun(eval_id: string, run_id: string, headersHandler?: () => HttpHeaders): Observable<EvalRun> {
			return this.http.get<EvalRun>(this.baseUri + 'evals/' + (eval_id == null ? '' : encodeURIComponent(eval_id)) + '/runs/' + (run_id == null ? '' : encodeURIComponent(run_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Cancel an ongoing evaluation run.
		 * Post evals/{eval_id}/runs/{run_id}
		 * @param {string} eval_id The ID of the evaluation whose run you want to cancel.
		 * @param {string} run_id The ID of the run to cancel.
		 * @return {EvalRun} The canceled eval run object
		 */
		CancelEvalRun(eval_id: string, run_id: string, headersHandler?: () => HttpHeaders): Observable<EvalRun> {
			return this.http.post<EvalRun>(this.baseUri + 'evals/' + (eval_id == null ? '' : encodeURIComponent(eval_id)) + '/runs/' + (run_id == null ? '' : encodeURIComponent(run_id)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an eval run.
		 * Delete evals/{eval_id}/runs/{run_id}
		 * @param {string} eval_id The ID of the evaluation to delete the run from.
		 * @param {string} run_id The ID of the run to delete.
		 * @return {DeleteEvalRunReturn} Successfully deleted the eval run
		 */
		DeleteEvalRun(eval_id: string, run_id: string, headersHandler?: () => HttpHeaders): Observable<DeleteEvalRunReturn> {
			return this.http.delete<DeleteEvalRunReturn>(this.baseUri + 'evals/' + (eval_id == null ? '' : encodeURIComponent(eval_id)) + '/runs/' + (run_id == null ? '' : encodeURIComponent(run_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of output items for an evaluation run.
		 * Get evals/{eval_id}/runs/{run_id}/output_items
		 * @param {string} eval_id The ID of the evaluation to retrieve runs for.
		 * @param {string} run_id The ID of the run to retrieve output items for.
		 * @param {string} after Identifier for the last output item from the previous pagination request.
		 * @param {number} limit Number of output items to retrieve.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {GetEvalRunOutputItemsStatus} status Filter output items by status. Use `failed` to filter by failed output
		 * items or `pass` to filter by passed output items.
		 * @param {ListAssistantsOrder} order Sort order for output items by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`.
		 * @return {EvalRunOutputItemList} A list of output items for the evaluation run
		 */
		GetEvalRunOutputItems(eval_id: string, run_id: string, after: string | null | undefined, limit: number | null | undefined, status: GetEvalRunOutputItemsStatus | null | undefined, order: ListAssistantsOrder | null | undefined, headersHandler?: () => HttpHeaders): Observable<EvalRunOutputItemList> {
			return this.http.get<EvalRunOutputItemList>(this.baseUri + 'evals/' + (eval_id == null ? '' : encodeURIComponent(eval_id)) + '/runs/' + (run_id == null ? '' : encodeURIComponent(run_id)) + '/output_items&after=' + (after == null ? '' : encodeURIComponent(after)) + '&limit=' + limit + '&status=' + status + '&order=' + order, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get an evaluation run output item by ID.
		 * Get evals/{eval_id}/runs/{run_id}/output_items/{output_item_id}
		 * @param {string} eval_id The ID of the evaluation to retrieve runs for.
		 * @param {string} run_id The ID of the run to retrieve.
		 * @param {string} output_item_id The ID of the output item to retrieve.
		 * @return {EvalRunOutputItem} The evaluation run output item
		 */
		GetEvalRunOutputItem(eval_id: string, run_id: string, output_item_id: string, headersHandler?: () => HttpHeaders): Observable<EvalRunOutputItem> {
			return this.http.get<EvalRunOutputItem>(this.baseUri + 'evals/' + (eval_id == null ? '' : encodeURIComponent(eval_id)) + '/runs/' + (run_id == null ? '' : encodeURIComponent(run_id)) + '/output_items/' + (output_item_id == null ? '' : encodeURIComponent(output_item_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of files.
		 * Get files
		 * @param {string} purpose Only return files with the given purpose.
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 10,000, and the default is 10,000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ListAssistantsOrder} order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @return {ListFilesResponse} OK
		 */
		ListFiles(purpose: string | null | undefined, limit: number | null | undefined, order: ListAssistantsOrder | null | undefined, after: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListFilesResponse> {
			return this.http.get<ListFilesResponse>(this.baseUri + 'files?purpose=' + (purpose == null ? '' : encodeURIComponent(purpose)) + '&limit=' + limit + '&order=' + order + '&after=' + (after == null ? '' : encodeURIComponent(after)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a file.
		 * Delete files/{file_id}
		 * @param {string} file_id The ID of the file to use for this request.
		 * @return {DeleteFileResponse} OK
		 */
		DeleteFile(file_id: string, headersHandler?: () => HttpHeaders): Observable<DeleteFileResponse> {
			return this.http.delete<DeleteFileResponse>(this.baseUri + 'files/' + (file_id == null ? '' : encodeURIComponent(file_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns information about a specific file.
		 * Get files/{file_id}
		 * @param {string} file_id The ID of the file to use for this request.
		 * @return {OpenAIFile} OK
		 */
		RetrieveFile(file_id: string, headersHandler?: () => HttpHeaders): Observable<OpenAIFile> {
			return this.http.get<OpenAIFile>(this.baseUri + 'files/' + (file_id == null ? '' : encodeURIComponent(file_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the contents of the specified file.
		 * Get files/{file_id}/content
		 * @param {string} file_id The ID of the file to use for this request.
		 * @return {string} OK
		 */
		DownloadFile(file_id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'files/' + (file_id == null ? '' : encodeURIComponent(file_id)) + '/content', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * **NOTE:** This endpoint requires an [admin API key](../admin-api-keys).
		 * Organization owners can use this endpoint to view all permissions for a fine-tuned model checkpoint.
		 * Get fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions
		 * @param {string} fine_tuned_model_checkpoint The ID of the fine-tuned model checkpoint to get permissions for.
		 * @param {string} project_id The ID of the project to get permissions for.
		 * @param {string} after Identifier for the last permission ID from the previous pagination request.
		 * @param {number} limit Number of permissions to retrieve.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ListFineTuningCheckpointPermissionsOrder} order The order in which to retrieve permissions.
		 * @return {ListFineTuningCheckpointPermissionResponse} OK
		 */
		ListFineTuningCheckpointPermissions(fine_tuned_model_checkpoint: string, project_id: string | null | undefined, after: string | null | undefined, limit: number | null | undefined, order: ListFineTuningCheckpointPermissionsOrder | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListFineTuningCheckpointPermissionResponse> {
			return this.http.get<ListFineTuningCheckpointPermissionResponse>(this.baseUri + 'fine_tuning/checkpoints/' + (fine_tuned_model_checkpoint == null ? '' : encodeURIComponent(fine_tuned_model_checkpoint)) + '/permissions&project_id=' + (project_id == null ? '' : encodeURIComponent(project_id)) + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&limit=' + limit + '&order=' + order, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * **NOTE:** Calling this endpoint requires an [admin API key](../admin-api-keys).
		 * This enables organization owners to share fine-tuned models with other projects in their organization.
		 * Post fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions
		 * @param {string} fine_tuned_model_checkpoint The ID of the fine-tuned model checkpoint to create a permission for.
		 * @return {ListFineTuningCheckpointPermissionResponse} OK
		 */
		CreateFineTuningCheckpointPermission(fine_tuned_model_checkpoint: string, requestBody: CreateFineTuningCheckpointPermissionRequest, headersHandler?: () => HttpHeaders): Observable<ListFineTuningCheckpointPermissionResponse> {
			return this.http.post<ListFineTuningCheckpointPermissionResponse>(this.baseUri + 'fine_tuning/checkpoints/' + (fine_tuned_model_checkpoint == null ? '' : encodeURIComponent(fine_tuned_model_checkpoint)) + '/permissions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * **NOTE:** This endpoint requires an [admin API key](../admin-api-keys).
		 * Organization owners can use this endpoint to delete a permission for a fine-tuned model checkpoint.
		 * Delete fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions/{permission_id}
		 * @param {string} fine_tuned_model_checkpoint The ID of the fine-tuned model checkpoint to delete a permission for.
		 * @param {string} permission_id The ID of the fine-tuned model checkpoint permission to delete.
		 * @return {DeleteFineTuningCheckpointPermissionResponse} OK
		 */
		DeleteFineTuningCheckpointPermission(fine_tuned_model_checkpoint: string, permission_id: string, headersHandler?: () => HttpHeaders): Observable<DeleteFineTuningCheckpointPermissionResponse> {
			return this.http.delete<DeleteFineTuningCheckpointPermissionResponse>(this.baseUri + 'fine_tuning/checkpoints/' + (fine_tuned_model_checkpoint == null ? '' : encodeURIComponent(fine_tuned_model_checkpoint)) + '/permissions/' + (permission_id == null ? '' : encodeURIComponent(permission_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a fine-tuning job which begins the process of creating a new model from a given dataset.
		 * Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.
		 * [Learn more about fine-tuning](/docs/guides/fine-tuning)
		 * Post fine_tuning/jobs
		 * @return {FineTuningJob} OK
		 */
		CreateFineTuningJob(requestBody: CreateFineTuningJobRequest, headersHandler?: () => HttpHeaders): Observable<FineTuningJob> {
			return this.http.post<FineTuningJob>(this.baseUri + 'fine_tuning/jobs', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List your organization's fine-tuning jobs
		 * Get fine_tuning/jobs
		 * @param {string} after Identifier for the last job from the previous pagination request.
		 * @param {number} limit Number of fine-tuning jobs to retrieve.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {{[id: string]: string }} metadata Optional metadata filter. To filter, use the syntax `metadata[k]=v`. Alternatively, set `metadata=null` to indicate no metadata.
		 * @return {ListPaginatedFineTuningJobsResponse} OK
		 */
		ListPaginatedFineTuningJobs(after: string | null | undefined, limit: number | null | undefined, metadata: {[id: string]: string } | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListPaginatedFineTuningJobsResponse> {
			return this.http.get<ListPaginatedFineTuningJobsResponse>(this.baseUri + 'fine_tuning/jobs?after=' + (after == null ? '' : encodeURIComponent(after)) + '&limit=' + limit + '&metadata=' + metadata, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get info about a fine-tuning job.
		 * [Learn more about fine-tuning](/docs/guides/fine-tuning)
		 * Get fine_tuning/jobs/{fine_tuning_job_id}
		 * @param {string} fine_tuning_job_id The ID of the fine-tuning job.
		 * @return {FineTuningJob} OK
		 */
		RetrieveFineTuningJob(fine_tuning_job_id: string, headersHandler?: () => HttpHeaders): Observable<FineTuningJob> {
			return this.http.get<FineTuningJob>(this.baseUri + 'fine_tuning/jobs/' + (fine_tuning_job_id == null ? '' : encodeURIComponent(fine_tuning_job_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Immediately cancel a fine-tune job.
		 * Post fine_tuning/jobs/{fine_tuning_job_id}/cancel
		 * @param {string} fine_tuning_job_id The ID of the fine-tuning job to cancel.
		 * @return {FineTuningJob} OK
		 */
		CancelFineTuningJob(fine_tuning_job_id: string, headersHandler?: () => HttpHeaders): Observable<FineTuningJob> {
			return this.http.post<FineTuningJob>(this.baseUri + 'fine_tuning/jobs/' + (fine_tuning_job_id == null ? '' : encodeURIComponent(fine_tuning_job_id)) + '/cancel', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List checkpoints for a fine-tuning job.
		 * Get fine_tuning/jobs/{fine_tuning_job_id}/checkpoints
		 * @param {string} fine_tuning_job_id The ID of the fine-tuning job to get checkpoints for.
		 * @param {string} after Identifier for the last checkpoint ID from the previous pagination request.
		 * @param {number} limit Number of checkpoints to retrieve.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListFineTuningJobCheckpointsResponse} OK
		 */
		ListFineTuningJobCheckpoints(fine_tuning_job_id: string, after: string | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListFineTuningJobCheckpointsResponse> {
			return this.http.get<ListFineTuningJobCheckpointsResponse>(this.baseUri + 'fine_tuning/jobs/' + (fine_tuning_job_id == null ? '' : encodeURIComponent(fine_tuning_job_id)) + '/checkpoints&after=' + (after == null ? '' : encodeURIComponent(after)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get status updates for a fine-tuning job.
		 * Get fine_tuning/jobs/{fine_tuning_job_id}/events
		 * @param {string} fine_tuning_job_id The ID of the fine-tuning job to get events for.
		 * @param {string} after Identifier for the last event from the previous pagination request.
		 * @param {number} limit Number of events to retrieve.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListFineTuningJobEventsResponse} OK
		 */
		ListFineTuningEvents(fine_tuning_job_id: string, after: string | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListFineTuningJobEventsResponse> {
			return this.http.get<ListFineTuningJobEventsResponse>(this.baseUri + 'fine_tuning/jobs/' + (fine_tuning_job_id == null ? '' : encodeURIComponent(fine_tuning_job_id)) + '/events&after=' + (after == null ? '' : encodeURIComponent(after)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates an image given a prompt. [Learn more](/docs/guides/images).
		 * Post images/generations
		 * @return {ImagesResponse} OK
		 */
		CreateImage(requestBody: CreateImageRequest, headersHandler?: () => HttpHeaders): Observable<ImagesResponse> {
			return this.http.post<ImagesResponse>(this.baseUri + 'images/generations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the currently available models, and provides basic information about each one such as the owner and availability.
		 * Get models
		 * @return {ListModelsResponse} OK
		 */
		ListModels(headersHandler?: () => HttpHeaders): Observable<ListModelsResponse> {
			return this.http.get<ListModelsResponse>(this.baseUri + 'models', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
		 * Get models/{model}
		 * @param {string} model The ID of the model to use for this request
		 * @return {Model} OK
		 */
		RetrieveModel(model: string, headersHandler?: () => HttpHeaders): Observable<Model> {
			return this.http.get<Model>(this.baseUri + 'models/' + (model == null ? '' : encodeURIComponent(model)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.
		 * Delete models/{model}
		 * @param {string} model The model to delete
		 * @return {DeleteModelResponse} OK
		 */
		DeleteModel(model: string, headersHandler?: () => HttpHeaders): Observable<DeleteModelResponse> {
			return this.http.delete<DeleteModelResponse>(this.baseUri + 'models/' + (model == null ? '' : encodeURIComponent(model)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Classifies if text and/or image inputs are potentially harmful. Learn
		 * more in the [moderation guide](/docs/guides/moderation).
		 * Post moderations
		 * @return {CreateModerationResponse} OK
		 */
		CreateModeration(requestBody: CreateModerationRequest, headersHandler?: () => HttpHeaders): Observable<CreateModerationResponse> {
			return this.http.post<CreateModerationResponse>(this.baseUri + 'moderations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List organization API keys
		 * Retrieve a paginated list of organization admin API keys.
		 * Get organization/admin_api_keys
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ApiKeyList} A list of organization API keys.
		 */
		Admin_api_keys_list(after: string | null | undefined, order: ListAssistantsOrder | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ApiKeyList> {
			return this.http.get<ApiKeyList>(this.baseUri + 'organization/admin_api_keys?after=' + (after == null ? '' : encodeURIComponent(after)) + '&order=' + order + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an organization admin API key
		 * Create a new admin-level API key for the organization.
		 * Post organization/admin_api_keys
		 * @return {AdminApiKey} The newly created admin API key.
		 */
		Admin_api_keys_create(requestBody: Admin_api_keys_createPostBody, headersHandler?: () => HttpHeaders): Observable<AdminApiKey> {
			return this.http.post<AdminApiKey>(this.baseUri + 'organization/admin_api_keys', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a single organization API key
		 * Get details for a specific organization API key by its ID.
		 * Get organization/admin_api_keys/{key_id}
		 * @return {AdminApiKey} Details of the requested API key.
		 */
		Admin_api_keys_get(key_id: string, headersHandler?: () => HttpHeaders): Observable<AdminApiKey> {
			return this.http.get<AdminApiKey>(this.baseUri + 'organization/admin_api_keys/' + (key_id == null ? '' : encodeURIComponent(key_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an organization admin API key
		 * Delete the specified admin API key.
		 * Delete organization/admin_api_keys/{key_id}
		 * @return {Admin_api_keys_deleteReturn} Confirmation that the API key was deleted.
		 */
		Admin_api_keys_delete(key_id: string, headersHandler?: () => HttpHeaders): Observable<Admin_api_keys_deleteReturn> {
			return this.http.delete<Admin_api_keys_deleteReturn>(this.baseUri + 'organization/admin_api_keys/' + (key_id == null ? '' : encodeURIComponent(key_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List user actions and configuration changes within this organization.
		 * Get organization/audit_logs
		 * @param {List_audit_logsEffective_at} effective_at Return only events whose `effective_at` (Unix seconds) is in this range.
		 * @param {Array<string>} project_ids_ Return only events for these projects.
		 * @param {Array<AuditLogEventType>} event_types_ Return only events with a `type` in one of these values. For example, `project.created`. For all options, see the documentation for the [audit log object](/docs/api-reference/audit-logs/object).
		 * @param {Array<string>} actor_ids_ Return only events performed by these actors. Can be a user ID, a service account ID, or an api key tracking ID.
		 * @param {Array<string>} actor_emails_ Return only events performed by users with these emails.
		 * @param {Array<string>} resource_ids_ Return only events performed on these targets. For example, a project ID updated.
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @param {string} before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
		 * @return {ListAuditLogsResponse} Audit logs listed successfully.
		 */
		List_audit_logs(effective_at: List_audit_logsEffective_at | null | undefined, project_ids_: Array<string> | null | undefined, event_types_: Array<AuditLogEventType> | null | undefined, actor_ids_: Array<string> | null | undefined, actor_emails_: Array<string> | null | undefined, resource_ids_: Array<string> | null | undefined, limit: number | null | undefined, after: string | null | undefined, before: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListAuditLogsResponse> {
			return this.http.get<ListAuditLogsResponse>(this.baseUri + 'organization/audit_logs?effective_at=' + effective_at + '&' + project_ids_?.map(z => `project_ids[]=${encodeURIComponent(z)}`).join('&') + '&' + event_types_?.map(z => `event_types[]=${z}`).join('&') + '&' + actor_ids_?.map(z => `actor_ids[]=${encodeURIComponent(z)}`).join('&') + '&' + actor_emails_?.map(z => `actor_emails[]=${encodeURIComponent(z)}`).join('&') + '&' + resource_ids_?.map(z => `resource_ids[]=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&before=' + (before == null ? '' : encodeURIComponent(before)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List uploaded certificates for this organization.
		 * Get organization/certificates
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @param {ListAssistantsOrder} order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
		 * @return {ListCertificatesResponse} Certificates listed successfully.
		 */
		ListOrganizationCertificates(limit: number | null | undefined, after: string | null | undefined, order: ListAssistantsOrder | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListCertificatesResponse> {
			return this.http.get<ListCertificatesResponse>(this.baseUri + 'organization/certificates?limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&order=' + order, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Upload a certificate to the organization. This does **not** automatically activate the certificate.
		 * Organizations can upload up to 50 certificates.
		 * Post organization/certificates
		 * @param {UploadCertificateRequest} requestBody The certificate upload payload.
		 * @return {Certificate} Certificate uploaded successfully.
		 */
		UploadCertificate(requestBody: UploadCertificateRequest, headersHandler?: () => HttpHeaders): Observable<Certificate> {
			return this.http.post<Certificate>(this.baseUri + 'organization/certificates', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Activate certificates at the organization level.
		 * You can atomically and idempotently activate up to 10 certificates at a time.
		 * Post organization/certificates/activate
		 * @param {ToggleCertificatesRequest} requestBody The certificate activation payload.
		 * @return {ListCertificatesResponse} Certificates activated successfully.
		 */
		ActivateOrganizationCertificates(requestBody: ToggleCertificatesRequest, headersHandler?: () => HttpHeaders): Observable<ListCertificatesResponse> {
			return this.http.post<ListCertificatesResponse>(this.baseUri + 'organization/certificates/activate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deactivate certificates at the organization level.
		 * You can atomically and idempotently deactivate up to 10 certificates at a time.
		 * Post organization/certificates/deactivate
		 * @param {ToggleCertificatesRequest} requestBody The certificate deactivation payload.
		 * @return {ListCertificatesResponse} Certificates deactivated successfully.
		 */
		DeactivateOrganizationCertificates(requestBody: ToggleCertificatesRequest, headersHandler?: () => HttpHeaders): Observable<ListCertificatesResponse> {
			return this.http.post<ListCertificatesResponse>(this.baseUri + 'organization/certificates/deactivate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get a certificate that has been uploaded to the organization.
		 * You can get a certificate regardless of whether it is active or not.
		 * Get organization/certificates/{certificate_id}
		 * @param {string} cert_id Unique ID of the certificate to retrieve.
		 * @param {Array<PredictionContentType>} include A list of additional fields to include in the response. Currently the only supported value is `content` to fetch the PEM content of the certificate.
		 * @return {Certificate} Certificate retrieved successfully.
		 */
		GetCertificate(cert_id: string, include: Array<PredictionContentType> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Certificate> {
			return this.http.get<Certificate>(this.baseUri + 'organization/certificates/{certificate_id}?' + include?.map(z => `include=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modify a certificate. Note that only the name can be modified.
		 * Post organization/certificates/{certificate_id}
		 * @param {ModifyCertificateRequest} requestBody The certificate modification payload.
		 * @return {Certificate} Certificate modified successfully.
		 */
		ModifyCertificate(requestBody: ModifyCertificateRequest, headersHandler?: () => HttpHeaders): Observable<Certificate> {
			return this.http.post<Certificate>(this.baseUri + 'organization/certificates/{certificate_id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a certificate from the organization.
		 * The certificate must be inactive for the organization and all projects.
		 * Delete organization/certificates/{certificate_id}
		 * @return {DeleteCertificateResponse} Certificate deleted successfully.
		 */
		DeleteCertificate(headersHandler?: () => HttpHeaders): Observable<DeleteCertificateResponse> {
			return this.http.delete<DeleteCertificateResponse>(this.baseUri + 'organization/certificates/{certificate_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get costs details for the organization.
		 * Get organization/costs
		 * @param {number} start_time Start time (Unix seconds) of the query time range, inclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} end_time End time (Unix seconds) of the query time range, exclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Usage_costsBucket_width} bucket_width Width of each time bucket in response. Currently only `1d` is supported, default to `1d`.
		 * @param {Array<string>} project_ids Return only costs for these projects.
		 * @param {Array<string>} group_by Group the costs by the specified fields. Support fields include `project_id`, `line_item` and any combination of them.
		 * @param {number} limit A limit on the number of buckets to be returned. Limit can range between 1 and 180, and the default is 7.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} page A cursor for use in pagination. Corresponding to the `next_page` field from the previous response.
		 * @return {UsageResponse} Costs data retrieved successfully.
		 */
		Usage_costs(start_time: number, end_time: number | null | undefined, bucket_width: Usage_costsBucket_width | null | undefined, project_ids: Array<string> | null | undefined, group_by: Array<string> | null | undefined, limit: number | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UsageResponse> {
			return this.http.get<UsageResponse>(this.baseUri + 'organization/costs?start_time=' + start_time + '&end_time=' + end_time + '&bucket_width=' + bucket_width + '&' + project_ids?.map(z => `project_ids=${encodeURIComponent(z)}`).join('&') + '&' + group_by?.map(z => `group_by=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of invites in the organization.
		 * Get organization/invites
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @return {InviteListResponse} Invites listed successfully.
		 */
		List_invites(limit: number | null | undefined, after: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<InviteListResponse> {
			return this.http.get<InviteListResponse>(this.baseUri + 'organization/invites?limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an invite for a user to the organization. The invite must be accepted by the user before they have access to the organization.
		 * Post organization/invites
		 * @param {InviteRequest} requestBody The invite request payload.
		 * @return {Invite} User invited successfully.
		 */
		InviteUser(requestBody: InviteRequest, headersHandler?: () => HttpHeaders): Observable<Invite> {
			return this.http.post<Invite>(this.baseUri + 'organization/invites', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves an invite.
		 * Get organization/invites/{invite_id}
		 * @param {string} invite_id The ID of the invite to retrieve.
		 * @return {Invite} Invite retrieved successfully.
		 */
		Retrieve_invite(invite_id: string, headersHandler?: () => HttpHeaders): Observable<Invite> {
			return this.http.get<Invite>(this.baseUri + 'organization/invites/' + (invite_id == null ? '' : encodeURIComponent(invite_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an invite. If the invite has already been accepted, it cannot be deleted.
		 * Delete organization/invites/{invite_id}
		 * @param {string} invite_id The ID of the invite to delete.
		 * @return {InviteDeleteResponse} Invite deleted successfully.
		 */
		Delete_invite(invite_id: string, headersHandler?: () => HttpHeaders): Observable<InviteDeleteResponse> {
			return this.http.delete<InviteDeleteResponse>(this.baseUri + 'organization/invites/' + (invite_id == null ? '' : encodeURIComponent(invite_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of projects.
		 * Get organization/projects
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @param {boolean} include_archived If `true` returns all projects including those that have been `archived`. Archived projects are not included by default.
		 * @return {ProjectListResponse} Projects listed successfully.
		 */
		List_projects(limit: number | null | undefined, after: string | null | undefined, include_archived: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<ProjectListResponse> {
			return this.http.get<ProjectListResponse>(this.baseUri + 'organization/projects?limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&include_archived=' + include_archived, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new project in the organization. Projects can be created and archived, but cannot be deleted.
		 * Post organization/projects
		 * @param {ProjectCreateRequest} requestBody The project create request payload.
		 * @return {Project} Project created successfully.
		 */
		Create_project(requestBody: ProjectCreateRequest, headersHandler?: () => HttpHeaders): Observable<Project> {
			return this.http.post<Project>(this.baseUri + 'organization/projects', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a project.
		 * Get organization/projects/{project_id}
		 * @param {string} project_id The ID of the project.
		 * @return {Project} Project retrieved successfully.
		 */
		Retrieve_project(project_id: string, headersHandler?: () => HttpHeaders): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies a project in the organization.
		 * Post organization/projects/{project_id}
		 * @param {string} project_id The ID of the project.
		 * @param {ProjectUpdateRequest} requestBody The project update request payload.
		 * @return {Project} Project updated successfully.
		 */
		Modify_project(project_id: string, requestBody: ProjectUpdateRequest, headersHandler?: () => HttpHeaders): Observable<Project> {
			return this.http.post<Project>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of API keys in the project.
		 * Get organization/projects/{project_id}/api_keys
		 * @param {string} project_id The ID of the project.
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @return {ProjectApiKeyListResponse} Project API keys listed successfully.
		 */
		List_project_api_keys(project_id: string, limit: number | null | undefined, after: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ProjectApiKeyListResponse> {
			return this.http.get<ProjectApiKeyListResponse>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/api_keys&limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves an API key in the project.
		 * Get organization/projects/{project_id}/api_keys/{key_id}
		 * @param {string} project_id The ID of the project.
		 * @param {string} key_id The ID of the API key.
		 * @return {ProjectApiKey} Project API key retrieved successfully.
		 */
		Retrieve_project_api_key(project_id: string, key_id: string, headersHandler?: () => HttpHeaders): Observable<ProjectApiKey> {
			return this.http.get<ProjectApiKey>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/api_keys/' + (key_id == null ? '' : encodeURIComponent(key_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes an API key from the project.
		 * Delete organization/projects/{project_id}/api_keys/{key_id}
		 * @param {string} project_id The ID of the project.
		 * @param {string} key_id The ID of the API key.
		 * @return {ProjectApiKeyDeleteResponse} Project API key deleted successfully.
		 */
		Delete_project_api_key(project_id: string, key_id: string, headersHandler?: () => HttpHeaders): Observable<ProjectApiKeyDeleteResponse> {
			return this.http.delete<ProjectApiKeyDeleteResponse>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/api_keys/' + (key_id == null ? '' : encodeURIComponent(key_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Archives a project in the organization. Archived projects cannot be used or updated.
		 * Post organization/projects/{project_id}/archive
		 * @param {string} project_id The ID of the project.
		 * @return {Project} Project archived successfully.
		 */
		Archive_project(project_id: string, headersHandler?: () => HttpHeaders): Observable<Project> {
			return this.http.post<Project>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/archive', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List certificates for this project.
		 * Get organization/projects/{project_id}/certificates
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @param {ListAssistantsOrder} order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
		 * @return {ListCertificatesResponse} Certificates listed successfully.
		 */
		ListProjectCertificates(limit: number | null | undefined, after: string | null | undefined, order: ListAssistantsOrder | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListCertificatesResponse> {
			return this.http.get<ListCertificatesResponse>(this.baseUri + 'organization/projects/{project_id}/certificates?limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&order=' + order, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Activate certificates at the project level.
		 * You can atomically and idempotently activate up to 10 certificates at a time.
		 * Post organization/projects/{project_id}/certificates/activate
		 * @param {ToggleCertificatesRequest} requestBody The certificate activation payload.
		 * @return {ListCertificatesResponse} Certificates activated successfully.
		 */
		ActivateProjectCertificates(requestBody: ToggleCertificatesRequest, headersHandler?: () => HttpHeaders): Observable<ListCertificatesResponse> {
			return this.http.post<ListCertificatesResponse>(this.baseUri + 'organization/projects/{project_id}/certificates/activate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deactivate certificates at the project level.
		 * You can atomically and idempotently deactivate up to 10 certificates at a time.
		 * Post organization/projects/{project_id}/certificates/deactivate
		 * @param {ToggleCertificatesRequest} requestBody The certificate deactivation payload.
		 * @return {ListCertificatesResponse} Certificates deactivated successfully.
		 */
		DeactivateProjectCertificates(requestBody: ToggleCertificatesRequest, headersHandler?: () => HttpHeaders): Observable<ListCertificatesResponse> {
			return this.http.post<ListCertificatesResponse>(this.baseUri + 'organization/projects/{project_id}/certificates/deactivate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns the rate limits per model for a project.
		 * Get organization/projects/{project_id}/rate_limits
		 * @param {string} project_id The ID of the project.
		 * @param {number} limit A limit on the number of objects to be returned. The default is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @param {string} before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, beginning with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
		 * @return {ProjectRateLimitListResponse} Project rate limits listed successfully.
		 */
		List_project_rate_limits(project_id: string, limit: number | null | undefined, after: string | null | undefined, before: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ProjectRateLimitListResponse> {
			return this.http.get<ProjectRateLimitListResponse>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/rate_limits&limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&before=' + (before == null ? '' : encodeURIComponent(before)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a project rate limit.
		 * Post organization/projects/{project_id}/rate_limits/{rate_limit_id}
		 * @param {string} project_id The ID of the project.
		 * @param {string} rate_limit_id The ID of the rate limit.
		 * @param {ProjectRateLimitUpdateRequest} requestBody The project rate limit update request payload.
		 * @return {ProjectRateLimit} Project rate limit updated successfully.
		 */
		Update_project_rate_limits(project_id: string, rate_limit_id: string, requestBody: ProjectRateLimitUpdateRequest, headersHandler?: () => HttpHeaders): Observable<ProjectRateLimit> {
			return this.http.post<ProjectRateLimit>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/rate_limits/' + (rate_limit_id == null ? '' : encodeURIComponent(rate_limit_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of service accounts in the project.
		 * Get organization/projects/{project_id}/service_accounts
		 * @param {string} project_id The ID of the project.
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @return {ProjectServiceAccountListResponse} Project service accounts listed successfully.
		 */
		List_project_service_accounts(project_id: string, limit: number | null | undefined, after: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ProjectServiceAccountListResponse> {
			return this.http.get<ProjectServiceAccountListResponse>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/service_accounts&limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new service account in the project. This also returns an unredacted API key for the service account.
		 * Post organization/projects/{project_id}/service_accounts
		 * @param {string} project_id The ID of the project.
		 * @param {ProjectServiceAccountCreateRequest} requestBody The project service account create request payload.
		 * @return {ProjectServiceAccountCreateResponse} Project service account created successfully.
		 */
		Create_project_service_account(project_id: string, requestBody: ProjectServiceAccountCreateRequest, headersHandler?: () => HttpHeaders): Observable<ProjectServiceAccountCreateResponse> {
			return this.http.post<ProjectServiceAccountCreateResponse>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/service_accounts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a service account in the project.
		 * Get organization/projects/{project_id}/service_accounts/{service_account_id}
		 * @param {string} project_id The ID of the project.
		 * @param {string} service_account_id The ID of the service account.
		 * @return {ProjectServiceAccount} Project service account retrieved successfully.
		 */
		Retrieve_project_service_account(project_id: string, service_account_id: string, headersHandler?: () => HttpHeaders): Observable<ProjectServiceAccount> {
			return this.http.get<ProjectServiceAccount>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/service_accounts/' + (service_account_id == null ? '' : encodeURIComponent(service_account_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a service account from the project.
		 * Delete organization/projects/{project_id}/service_accounts/{service_account_id}
		 * @param {string} project_id The ID of the project.
		 * @param {string} service_account_id The ID of the service account.
		 * @return {ProjectServiceAccountDeleteResponse} Project service account deleted successfully.
		 */
		Delete_project_service_account(project_id: string, service_account_id: string, headersHandler?: () => HttpHeaders): Observable<ProjectServiceAccountDeleteResponse> {
			return this.http.delete<ProjectServiceAccountDeleteResponse>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/service_accounts/' + (service_account_id == null ? '' : encodeURIComponent(service_account_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of users in the project.
		 * Get organization/projects/{project_id}/users
		 * @param {string} project_id The ID of the project.
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @return {ProjectUserListResponse} Project users listed successfully.
		 */
		List_project_users(project_id: string, limit: number | null | undefined, after: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ProjectUserListResponse> {
			return this.http.get<ProjectUserListResponse>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/users&limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds a user to the project. Users must already be members of the organization to be added to a project.
		 * Post organization/projects/{project_id}/users
		 * @param {string} project_id The ID of the project.
		 * @param {ProjectUserCreateRequest} requestBody The project user create request payload.
		 * @return {ProjectUser} User added to project successfully.
		 */
		Create_project_user(project_id: string, requestBody: ProjectUserCreateRequest, headersHandler?: () => HttpHeaders): Observable<ProjectUser> {
			return this.http.post<ProjectUser>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/users', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a user in the project.
		 * Get organization/projects/{project_id}/users/{user_id}
		 * @param {string} project_id The ID of the project.
		 * @param {string} user_id The ID of the user.
		 * @return {ProjectUser} Project user retrieved successfully.
		 */
		Retrieve_project_user(project_id: string, user_id: string, headersHandler?: () => HttpHeaders): Observable<ProjectUser> {
			return this.http.get<ProjectUser>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/users/' + (user_id == null ? '' : encodeURIComponent(user_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies a user's role in the project.
		 * Post organization/projects/{project_id}/users/{user_id}
		 * @param {string} project_id The ID of the project.
		 * @param {string} user_id The ID of the user.
		 * @param {ProjectUserUpdateRequest} requestBody The project user update request payload.
		 * @return {ProjectUser} Project user's role updated successfully.
		 */
		Modify_project_user(project_id: string, user_id: string, requestBody: ProjectUserUpdateRequest, headersHandler?: () => HttpHeaders): Observable<ProjectUser> {
			return this.http.post<ProjectUser>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/users/' + (user_id == null ? '' : encodeURIComponent(user_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a user from the project.
		 * Delete organization/projects/{project_id}/users/{user_id}
		 * @param {string} project_id The ID of the project.
		 * @param {string} user_id The ID of the user.
		 * @return {ProjectUserDeleteResponse} Project user deleted successfully.
		 */
		Delete_project_user(project_id: string, user_id: string, headersHandler?: () => HttpHeaders): Observable<ProjectUserDeleteResponse> {
			return this.http.delete<ProjectUserDeleteResponse>(this.baseUri + 'organization/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/users/' + (user_id == null ? '' : encodeURIComponent(user_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get audio speeches usage details for the organization.
		 * Get organization/usage/audio_speeches
		 * @param {number} start_time Start time (Unix seconds) of the query time range, inclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} end_time End time (Unix seconds) of the query time range, exclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Usage_audio_speechesBucket_width} bucket_width Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.
		 * @param {Array<string>} project_ids Return only usage for these projects.
		 * @param {Array<string>} user_ids Return only usage for these users.
		 * @param {Array<string>} api_key_ids Return only usage for these API keys.
		 * @param {Array<string>} models Return only usage for these models.
		 * @param {Array<string>} group_by Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them.
		 * @param {number} limit Specifies the number of buckets to return.
		 * - `bucket_width=1d`: default: 7, max: 31
		 * - `bucket_width=1h`: default: 24, max: 168
		 * - `bucket_width=1m`: default: 60, max: 1440
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} page A cursor for use in pagination. Corresponding to the `next_page` field from the previous response.
		 * @return {UsageResponse} Usage data retrieved successfully.
		 */
		Usage_audio_speeches(start_time: number, end_time: number | null | undefined, bucket_width: Usage_audio_speechesBucket_width | null | undefined, project_ids: Array<string> | null | undefined, user_ids: Array<string> | null | undefined, api_key_ids: Array<string> | null | undefined, models: Array<string> | null | undefined, group_by: Array<string> | null | undefined, limit: number | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UsageResponse> {
			return this.http.get<UsageResponse>(this.baseUri + 'organization/usage/audio_speeches?start_time=' + start_time + '&end_time=' + end_time + '&bucket_width=' + bucket_width + '&' + project_ids?.map(z => `project_ids=${encodeURIComponent(z)}`).join('&') + '&' + user_ids?.map(z => `user_ids=${encodeURIComponent(z)}`).join('&') + '&' + api_key_ids?.map(z => `api_key_ids=${encodeURIComponent(z)}`).join('&') + '&' + models?.map(z => `models=${encodeURIComponent(z)}`).join('&') + '&' + group_by?.map(z => `group_by=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get audio transcriptions usage details for the organization.
		 * Get organization/usage/audio_transcriptions
		 * @param {number} start_time Start time (Unix seconds) of the query time range, inclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} end_time End time (Unix seconds) of the query time range, exclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Usage_audio_speechesBucket_width} bucket_width Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.
		 * @param {Array<string>} project_ids Return only usage for these projects.
		 * @param {Array<string>} user_ids Return only usage for these users.
		 * @param {Array<string>} api_key_ids Return only usage for these API keys.
		 * @param {Array<string>} models Return only usage for these models.
		 * @param {Array<string>} group_by Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them.
		 * @param {number} limit Specifies the number of buckets to return.
		 * - `bucket_width=1d`: default: 7, max: 31
		 * - `bucket_width=1h`: default: 24, max: 168
		 * - `bucket_width=1m`: default: 60, max: 1440
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} page A cursor for use in pagination. Corresponding to the `next_page` field from the previous response.
		 * @return {UsageResponse} Usage data retrieved successfully.
		 */
		Usage_audio_transcriptions(start_time: number, end_time: number | null | undefined, bucket_width: Usage_audio_speechesBucket_width | null | undefined, project_ids: Array<string> | null | undefined, user_ids: Array<string> | null | undefined, api_key_ids: Array<string> | null | undefined, models: Array<string> | null | undefined, group_by: Array<string> | null | undefined, limit: number | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UsageResponse> {
			return this.http.get<UsageResponse>(this.baseUri + 'organization/usage/audio_transcriptions?start_time=' + start_time + '&end_time=' + end_time + '&bucket_width=' + bucket_width + '&' + project_ids?.map(z => `project_ids=${encodeURIComponent(z)}`).join('&') + '&' + user_ids?.map(z => `user_ids=${encodeURIComponent(z)}`).join('&') + '&' + api_key_ids?.map(z => `api_key_ids=${encodeURIComponent(z)}`).join('&') + '&' + models?.map(z => `models=${encodeURIComponent(z)}`).join('&') + '&' + group_by?.map(z => `group_by=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get code interpreter sessions usage details for the organization.
		 * Get organization/usage/code_interpreter_sessions
		 * @param {number} start_time Start time (Unix seconds) of the query time range, inclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} end_time End time (Unix seconds) of the query time range, exclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Usage_audio_speechesBucket_width} bucket_width Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.
		 * @param {Array<string>} project_ids Return only usage for these projects.
		 * @param {Array<string>} group_by Group the usage data by the specified fields. Support fields include `project_id`.
		 * @param {number} limit Specifies the number of buckets to return.
		 * - `bucket_width=1d`: default: 7, max: 31
		 * - `bucket_width=1h`: default: 24, max: 168
		 * - `bucket_width=1m`: default: 60, max: 1440
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} page A cursor for use in pagination. Corresponding to the `next_page` field from the previous response.
		 * @return {UsageResponse} Usage data retrieved successfully.
		 */
		Usage_code_interpreter_sessions(start_time: number, end_time: number | null | undefined, bucket_width: Usage_audio_speechesBucket_width | null | undefined, project_ids: Array<string> | null | undefined, group_by: Array<string> | null | undefined, limit: number | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UsageResponse> {
			return this.http.get<UsageResponse>(this.baseUri + 'organization/usage/code_interpreter_sessions?start_time=' + start_time + '&end_time=' + end_time + '&bucket_width=' + bucket_width + '&' + project_ids?.map(z => `project_ids=${encodeURIComponent(z)}`).join('&') + '&' + group_by?.map(z => `group_by=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get completions usage details for the organization.
		 * Get organization/usage/completions
		 * @param {number} start_time Start time (Unix seconds) of the query time range, inclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} end_time End time (Unix seconds) of the query time range, exclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Usage_audio_speechesBucket_width} bucket_width Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.
		 * @param {Array<string>} project_ids Return only usage for these projects.
		 * @param {Array<string>} user_ids Return only usage for these users.
		 * @param {Array<string>} api_key_ids Return only usage for these API keys.
		 * @param {Array<string>} models Return only usage for these models.
		 * @param {boolean} batch If `true`, return batch jobs only. If `false`, return non-batch jobs only. By default, return both.
		 * @param {Array<string>} group_by Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model`, `batch` or any combination of them.
		 * @param {number} limit Specifies the number of buckets to return.
		 * - `bucket_width=1d`: default: 7, max: 31
		 * - `bucket_width=1h`: default: 24, max: 168
		 * - `bucket_width=1m`: default: 60, max: 1440
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} page A cursor for use in pagination. Corresponding to the `next_page` field from the previous response.
		 * @return {UsageResponse} Usage data retrieved successfully.
		 */
		Usage_completions(start_time: number, end_time: number | null | undefined, bucket_width: Usage_audio_speechesBucket_width | null | undefined, project_ids: Array<string> | null | undefined, user_ids: Array<string> | null | undefined, api_key_ids: Array<string> | null | undefined, models: Array<string> | null | undefined, batch: boolean | null | undefined, group_by: Array<string> | null | undefined, limit: number | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UsageResponse> {
			return this.http.get<UsageResponse>(this.baseUri + 'organization/usage/completions?start_time=' + start_time + '&end_time=' + end_time + '&bucket_width=' + bucket_width + '&' + project_ids?.map(z => `project_ids=${encodeURIComponent(z)}`).join('&') + '&' + user_ids?.map(z => `user_ids=${encodeURIComponent(z)}`).join('&') + '&' + api_key_ids?.map(z => `api_key_ids=${encodeURIComponent(z)}`).join('&') + '&' + models?.map(z => `models=${encodeURIComponent(z)}`).join('&') + '&batch=' + batch + '&' + group_by?.map(z => `group_by=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get embeddings usage details for the organization.
		 * Get organization/usage/embeddings
		 * @param {number} start_time Start time (Unix seconds) of the query time range, inclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} end_time End time (Unix seconds) of the query time range, exclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Usage_audio_speechesBucket_width} bucket_width Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.
		 * @param {Array<string>} project_ids Return only usage for these projects.
		 * @param {Array<string>} user_ids Return only usage for these users.
		 * @param {Array<string>} api_key_ids Return only usage for these API keys.
		 * @param {Array<string>} models Return only usage for these models.
		 * @param {Array<string>} group_by Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them.
		 * @param {number} limit Specifies the number of buckets to return.
		 * - `bucket_width=1d`: default: 7, max: 31
		 * - `bucket_width=1h`: default: 24, max: 168
		 * - `bucket_width=1m`: default: 60, max: 1440
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} page A cursor for use in pagination. Corresponding to the `next_page` field from the previous response.
		 * @return {UsageResponse} Usage data retrieved successfully.
		 */
		Usage_embeddings(start_time: number, end_time: number | null | undefined, bucket_width: Usage_audio_speechesBucket_width | null | undefined, project_ids: Array<string> | null | undefined, user_ids: Array<string> | null | undefined, api_key_ids: Array<string> | null | undefined, models: Array<string> | null | undefined, group_by: Array<string> | null | undefined, limit: number | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UsageResponse> {
			return this.http.get<UsageResponse>(this.baseUri + 'organization/usage/embeddings?start_time=' + start_time + '&end_time=' + end_time + '&bucket_width=' + bucket_width + '&' + project_ids?.map(z => `project_ids=${encodeURIComponent(z)}`).join('&') + '&' + user_ids?.map(z => `user_ids=${encodeURIComponent(z)}`).join('&') + '&' + api_key_ids?.map(z => `api_key_ids=${encodeURIComponent(z)}`).join('&') + '&' + models?.map(z => `models=${encodeURIComponent(z)}`).join('&') + '&' + group_by?.map(z => `group_by=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get images usage details for the organization.
		 * Get organization/usage/images
		 * @param {number} start_time Start time (Unix seconds) of the query time range, inclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} end_time End time (Unix seconds) of the query time range, exclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Usage_audio_speechesBucket_width} bucket_width Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.
		 * @param {Array<string>} sources Return only usages for these sources. Possible values are `image.generation`, `image.edit`, `image.variation` or any combination of them.
		 * @param {Array<string>} sizes Return only usages for these image sizes. Possible values are `256x256`, `512x512`, `1024x1024`, `1792x1792`, `1024x1792` or any combination of them.
		 * @param {Array<string>} project_ids Return only usage for these projects.
		 * @param {Array<string>} user_ids Return only usage for these users.
		 * @param {Array<string>} api_key_ids Return only usage for these API keys.
		 * @param {Array<string>} models Return only usage for these models.
		 * @param {Array<string>} group_by Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model`, `size`, `source` or any combination of them.
		 * @param {number} limit Specifies the number of buckets to return.
		 * - `bucket_width=1d`: default: 7, max: 31
		 * - `bucket_width=1h`: default: 24, max: 168
		 * - `bucket_width=1m`: default: 60, max: 1440
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} page A cursor for use in pagination. Corresponding to the `next_page` field from the previous response.
		 * @return {UsageResponse} Usage data retrieved successfully.
		 */
		Usage_images(start_time: number, end_time: number | null | undefined, bucket_width: Usage_audio_speechesBucket_width | null | undefined, sources: Array<string> | null | undefined, sizes: Array<string> | null | undefined, project_ids: Array<string> | null | undefined, user_ids: Array<string> | null | undefined, api_key_ids: Array<string> | null | undefined, models: Array<string> | null | undefined, group_by: Array<string> | null | undefined, limit: number | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UsageResponse> {
			return this.http.get<UsageResponse>(this.baseUri + 'organization/usage/images?start_time=' + start_time + '&end_time=' + end_time + '&bucket_width=' + bucket_width + '&' + sources?.map(z => `sources=${encodeURIComponent(z)}`).join('&') + '&' + sizes?.map(z => `sizes=${encodeURIComponent(z)}`).join('&') + '&' + project_ids?.map(z => `project_ids=${encodeURIComponent(z)}`).join('&') + '&' + user_ids?.map(z => `user_ids=${encodeURIComponent(z)}`).join('&') + '&' + api_key_ids?.map(z => `api_key_ids=${encodeURIComponent(z)}`).join('&') + '&' + models?.map(z => `models=${encodeURIComponent(z)}`).join('&') + '&' + group_by?.map(z => `group_by=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get moderations usage details for the organization.
		 * Get organization/usage/moderations
		 * @param {number} start_time Start time (Unix seconds) of the query time range, inclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} end_time End time (Unix seconds) of the query time range, exclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Usage_audio_speechesBucket_width} bucket_width Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.
		 * @param {Array<string>} project_ids Return only usage for these projects.
		 * @param {Array<string>} user_ids Return only usage for these users.
		 * @param {Array<string>} api_key_ids Return only usage for these API keys.
		 * @param {Array<string>} models Return only usage for these models.
		 * @param {Array<string>} group_by Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them.
		 * @param {number} limit Specifies the number of buckets to return.
		 * - `bucket_width=1d`: default: 7, max: 31
		 * - `bucket_width=1h`: default: 24, max: 168
		 * - `bucket_width=1m`: default: 60, max: 1440
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} page A cursor for use in pagination. Corresponding to the `next_page` field from the previous response.
		 * @return {UsageResponse} Usage data retrieved successfully.
		 */
		Usage_moderations(start_time: number, end_time: number | null | undefined, bucket_width: Usage_audio_speechesBucket_width | null | undefined, project_ids: Array<string> | null | undefined, user_ids: Array<string> | null | undefined, api_key_ids: Array<string> | null | undefined, models: Array<string> | null | undefined, group_by: Array<string> | null | undefined, limit: number | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UsageResponse> {
			return this.http.get<UsageResponse>(this.baseUri + 'organization/usage/moderations?start_time=' + start_time + '&end_time=' + end_time + '&bucket_width=' + bucket_width + '&' + project_ids?.map(z => `project_ids=${encodeURIComponent(z)}`).join('&') + '&' + user_ids?.map(z => `user_ids=${encodeURIComponent(z)}`).join('&') + '&' + api_key_ids?.map(z => `api_key_ids=${encodeURIComponent(z)}`).join('&') + '&' + models?.map(z => `models=${encodeURIComponent(z)}`).join('&') + '&' + group_by?.map(z => `group_by=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get vector stores usage details for the organization.
		 * Get organization/usage/vector_stores
		 * @param {number} start_time Start time (Unix seconds) of the query time range, inclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} end_time End time (Unix seconds) of the query time range, exclusive.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Usage_audio_speechesBucket_width} bucket_width Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.
		 * @param {Array<string>} project_ids Return only usage for these projects.
		 * @param {Array<string>} group_by Group the usage data by the specified fields. Support fields include `project_id`.
		 * @param {number} limit Specifies the number of buckets to return.
		 * - `bucket_width=1d`: default: 7, max: 31
		 * - `bucket_width=1h`: default: 24, max: 168
		 * - `bucket_width=1m`: default: 60, max: 1440
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} page A cursor for use in pagination. Corresponding to the `next_page` field from the previous response.
		 * @return {UsageResponse} Usage data retrieved successfully.
		 */
		Usage_vector_stores(start_time: number, end_time: number | null | undefined, bucket_width: Usage_audio_speechesBucket_width | null | undefined, project_ids: Array<string> | null | undefined, group_by: Array<string> | null | undefined, limit: number | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UsageResponse> {
			return this.http.get<UsageResponse>(this.baseUri + 'organization/usage/vector_stores?start_time=' + start_time + '&end_time=' + end_time + '&bucket_width=' + bucket_width + '&' + project_ids?.map(z => `project_ids=${encodeURIComponent(z)}`).join('&') + '&' + group_by?.map(z => `group_by=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all of the users in the organization.
		 * Get organization/users
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @param {Array<string>} emails Filter by the email address of users.
		 * @return {UserListResponse} Users listed successfully.
		 */
		List_users(limit: number | null | undefined, after: string | null | undefined, emails: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<UserListResponse> {
			return this.http.get<UserListResponse>(this.baseUri + 'organization/users?limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&' + emails?.map(z => `emails=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves a user by their identifier.
		 * Get organization/users/{user_id}
		 * @param {string} user_id The ID of the user.
		 * @return {User} User retrieved successfully.
		 */
		Retrieve_user(user_id: string, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'organization/users/' + (user_id == null ? '' : encodeURIComponent(user_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies a user's role in the organization.
		 * Post organization/users/{user_id}
		 * @param {string} user_id The ID of the user.
		 * @param {UserRoleUpdateRequest} requestBody The new user role to modify. This must be one of `owner` or `member`.
		 * @return {User} User role updated successfully.
		 */
		Modify_user(user_id: string, requestBody: UserRoleUpdateRequest, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.post<User>(this.baseUri + 'organization/users/' + (user_id == null ? '' : encodeURIComponent(user_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a user from the organization.
		 * Delete organization/users/{user_id}
		 * @param {string} user_id The ID of the user.
		 * @return {UserDeleteResponse} User deleted successfully.
		 */
		Delete_user(user_id: string, headersHandler?: () => HttpHeaders): Observable<UserDeleteResponse> {
			return this.http.delete<UserDeleteResponse>(this.baseUri + 'organization/users/' + (user_id == null ? '' : encodeURIComponent(user_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an ephemeral API token for use in client-side applications with the
		 * Realtime API. Can be configured with the same session parameters as the
		 * `session.update` client event.
		 * It responds with a session object, plus a `client_secret` key which contains
		 * a usable ephemeral API token that can be used to authenticate browser clients
		 * for the Realtime API.
		 * Post realtime/sessions
		 * @param {RealtimeSessionCreateRequest} requestBody Create an ephemeral API key with the given session configuration.
		 * @return {RealtimeSessionCreateResponse} Session created successfully.
		 */
		Create_realtime_session(requestBody: RealtimeSessionCreateRequest, headersHandler?: () => HttpHeaders): Observable<RealtimeSessionCreateResponse> {
			return this.http.post<RealtimeSessionCreateResponse>(this.baseUri + 'realtime/sessions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create an ephemeral API token for use in client-side applications with the
		 * Realtime API specifically for realtime transcriptions.
		 * Can be configured with the same session parameters as the `transcription_session.update` client event.
		 * It responds with a session object, plus a `client_secret` key which contains
		 * a usable ephemeral API token that can be used to authenticate browser clients
		 * for the Realtime API.
		 * Post realtime/transcription_sessions
		 * @param {RealtimeTranscriptionSessionCreateRequest} requestBody Create an ephemeral API key with the given session configuration.
		 * @return {RealtimeTranscriptionSessionCreateResponse} Session created successfully.
		 */
		Create_realtime_transcription_session(requestBody: RealtimeTranscriptionSessionCreateRequest, headersHandler?: () => HttpHeaders): Observable<RealtimeTranscriptionSessionCreateResponse> {
			return this.http.post<RealtimeTranscriptionSessionCreateResponse>(this.baseUri + 'realtime/transcription_sessions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a model response. Provide [text](/docs/guides/text) or
		 * [image](/docs/guides/images) inputs to generate [text](/docs/guides/text)
		 * or [JSON](/docs/guides/structured-outputs) outputs. Have the model call
		 * your own [custom code](/docs/guides/function-calling) or use built-in
		 * [tools](/docs/guides/tools) like [web search](/docs/guides/tools-web-search)
		 * or [file search](/docs/guides/tools-file-search) to use your own data
		 * as input for the model's response.
		 * Post responses
		 * @return {Response} OK
		 */
		CreateResponse(requestBody: CreateResponse, headersHandler?: () => HttpHeaders): Observable<Response> {
			return this.http.post<Response>(this.baseUri + 'responses', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a model response with the given ID.
		 * Get responses/{response_id}
		 * @param {string} response_id The ID of the response to retrieve.
		 * @param {Array<Includable>} include Additional fields to include in the response. See the `include`
		 * parameter for Response creation above for more information.
		 * @return {Response} OK
		 */
		GetResponse(response_id: string, include: Array<Includable> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Response> {
			return this.http.get<Response>(this.baseUri + 'responses/' + (response_id == null ? '' : encodeURIComponent(response_id)) + '&' + include?.map(z => `include=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a model response with the given ID.
		 * Delete responses/{response_id}
		 * @param {string} response_id The ID of the response to delete.
		 * @return {void} OK
		 */
		DeleteResponse(response_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'responses/' + (response_id == null ? '' : encodeURIComponent(response_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of input items for a given response.
		 * Get responses/{response_id}/input_items
		 * @param {string} response_id The ID of the response to retrieve input items for.
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between
		 * 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ListAssistantsOrder} order The order to return the input items in. Default is `asc`.
		 * - `asc`: Return the input items in ascending order.
		 * - `desc`: Return the input items in descending order.
		 * @param {string} after An item ID to list items after, used in pagination.
		 * @param {string} before An item ID to list items before, used in pagination.
		 * @param {Array<Includable>} include Additional fields to include in the response. See the `include`
		 * parameter for Response creation above for more information.
		 * @return {ResponseItemList} OK
		 */
		ListInputItems(response_id: string, limit: number | null | undefined, order: ListAssistantsOrder | null | undefined, after: string | null | undefined, before: string | null | undefined, include: Array<Includable> | null | undefined, headersHandler?: () => HttpHeaders): Observable<ResponseItemList> {
			return this.http.get<ResponseItemList>(this.baseUri + 'responses/' + (response_id == null ? '' : encodeURIComponent(response_id)) + '/input_items&limit=' + limit + '&order=' + order + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&before=' + (before == null ? '' : encodeURIComponent(before)) + '&' + include?.map(z => `include=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a thread.
		 * Post threads
		 * @return {ThreadObject} OK
		 */
		CreateThread(requestBody: CreateThreadRequest, headersHandler?: () => HttpHeaders): Observable<ThreadObject> {
			return this.http.post<ThreadObject>(this.baseUri + 'threads', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create a thread and run it in one request.
		 * Post threads/runs
		 * @return {RunObject} OK
		 */
		CreateThreadAndRun(requestBody: CreateThreadAndRunRequest, headersHandler?: () => HttpHeaders): Observable<RunObject> {
			return this.http.post<RunObject>(this.baseUri + 'threads/runs', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a thread.
		 * Get threads/{thread_id}
		 * @param {string} thread_id The ID of the thread to retrieve.
		 * @return {ThreadObject} OK
		 */
		GetThread(thread_id: string, headersHandler?: () => HttpHeaders): Observable<ThreadObject> {
			return this.http.get<ThreadObject>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies a thread.
		 * Post threads/{thread_id}
		 * @param {string} thread_id The ID of the thread to modify. Only the `metadata` can be modified.
		 * @return {ThreadObject} OK
		 */
		ModifyThread(thread_id: string, requestBody: ModifyThreadRequest, headersHandler?: () => HttpHeaders): Observable<ThreadObject> {
			return this.http.post<ThreadObject>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a thread.
		 * Delete threads/{thread_id}
		 * @param {string} thread_id The ID of the thread to delete.
		 * @return {DeleteThreadResponse} OK
		 */
		DeleteThread(thread_id: string, headersHandler?: () => HttpHeaders): Observable<DeleteThreadResponse> {
			return this.http.delete<DeleteThreadResponse>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of messages for a given thread.
		 * Get threads/{thread_id}/messages
		 * @param {string} thread_id The ID of the [thread](/docs/api-reference/threads) the messages belong to.
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ListAssistantsOrder} order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @param {string} before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
		 * @param {string} run_id Filter messages by the run ID that generated them.
		 * @return {ListMessagesResponse} OK
		 */
		ListMessages(thread_id: string, limit: number | null | undefined, order: ListAssistantsOrder | null | undefined, after: string | null | undefined, before: string | null | undefined, run_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListMessagesResponse> {
			return this.http.get<ListMessagesResponse>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)) + '/messages&limit=' + limit + '&order=' + order + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&before=' + (before == null ? '' : encodeURIComponent(before)) + '&run_id=' + (run_id == null ? '' : encodeURIComponent(run_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a message.
		 * Post threads/{thread_id}/messages
		 * @param {string} thread_id The ID of the [thread](/docs/api-reference/threads) to create a message for.
		 * @return {MessageObject} OK
		 */
		CreateMessage(thread_id: string, requestBody: CreateMessageRequest, headersHandler?: () => HttpHeaders): Observable<MessageObject> {
			return this.http.post<MessageObject>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)) + '/messages', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a message.
		 * Get threads/{thread_id}/messages/{message_id}
		 * @param {string} thread_id The ID of the [thread](/docs/api-reference/threads) to which this message belongs.
		 * @param {string} message_id The ID of the message to retrieve.
		 * @return {MessageObject} OK
		 */
		GetMessage(thread_id: string, message_id: string, headersHandler?: () => HttpHeaders): Observable<MessageObject> {
			return this.http.get<MessageObject>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)) + '/messages/' + (message_id == null ? '' : encodeURIComponent(message_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies a message.
		 * Post threads/{thread_id}/messages/{message_id}
		 * @param {string} thread_id The ID of the thread to which this message belongs.
		 * @param {string} message_id The ID of the message to modify.
		 * @return {MessageObject} OK
		 */
		ModifyMessage(thread_id: string, message_id: string, requestBody: ModifyMessageRequest, headersHandler?: () => HttpHeaders): Observable<MessageObject> {
			return this.http.post<MessageObject>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)) + '/messages/' + (message_id == null ? '' : encodeURIComponent(message_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a message.
		 * Delete threads/{thread_id}/messages/{message_id}
		 * @param {string} thread_id The ID of the thread to which this message belongs.
		 * @param {string} message_id The ID of the message to delete.
		 * @return {DeleteMessageResponse} OK
		 */
		DeleteMessage(thread_id: string, message_id: string, headersHandler?: () => HttpHeaders): Observable<DeleteMessageResponse> {
			return this.http.delete<DeleteMessageResponse>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)) + '/messages/' + (message_id == null ? '' : encodeURIComponent(message_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of runs belonging to a thread.
		 * Get threads/{thread_id}/runs
		 * @param {string} thread_id The ID of the thread the run belongs to.
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ListAssistantsOrder} order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @param {string} before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
		 * @return {ListRunsResponse} OK
		 */
		ListRuns(thread_id: string, limit: number | null | undefined, order: ListAssistantsOrder | null | undefined, after: string | null | undefined, before: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListRunsResponse> {
			return this.http.get<ListRunsResponse>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)) + '/runs&limit=' + limit + '&order=' + order + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&before=' + (before == null ? '' : encodeURIComponent(before)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a run.
		 * Post threads/{thread_id}/runs
		 * @param {string} thread_id The ID of the thread to run.
		 * @param {Array<string>} include_ A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
		 * See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
		 * @return {RunObject} OK
		 */
		CreateRun(thread_id: string, include_: Array<string> | null | undefined, requestBody: CreateRunRequest, headersHandler?: () => HttpHeaders): Observable<RunObject> {
			return this.http.post<RunObject>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)) + '/runs&' + include_?.map(z => `include[]=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a run.
		 * Get threads/{thread_id}/runs/{run_id}
		 * @param {string} thread_id The ID of the [thread](/docs/api-reference/threads) that was run.
		 * @param {string} run_id The ID of the run to retrieve.
		 * @return {RunObject} OK
		 */
		GetRun(thread_id: string, run_id: string, headersHandler?: () => HttpHeaders): Observable<RunObject> {
			return this.http.get<RunObject>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)) + '/runs/' + (run_id == null ? '' : encodeURIComponent(run_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies a run.
		 * Post threads/{thread_id}/runs/{run_id}
		 * @param {string} thread_id The ID of the [thread](/docs/api-reference/threads) that was run.
		 * @param {string} run_id The ID of the run to modify.
		 * @return {RunObject} OK
		 */
		ModifyRun(thread_id: string, run_id: string, requestBody: ModifyRunRequest, headersHandler?: () => HttpHeaders): Observable<RunObject> {
			return this.http.post<RunObject>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)) + '/runs/' + (run_id == null ? '' : encodeURIComponent(run_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Cancels a run that is `in_progress`.
		 * Post threads/{thread_id}/runs/{run_id}/cancel
		 * @param {string} thread_id The ID of the thread to which this run belongs.
		 * @param {string} run_id The ID of the run to cancel.
		 * @return {RunObject} OK
		 */
		CancelRun(thread_id: string, run_id: string, headersHandler?: () => HttpHeaders): Observable<RunObject> {
			return this.http.post<RunObject>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)) + '/runs/' + (run_id == null ? '' : encodeURIComponent(run_id)) + '/cancel', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of run steps belonging to a run.
		 * Get threads/{thread_id}/runs/{run_id}/steps
		 * @param {string} thread_id The ID of the thread the run and run steps belong to.
		 * @param {string} run_id The ID of the run the run steps belong to.
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ListAssistantsOrder} order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @param {string} before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
		 * @param {Array<string>} include_ A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
		 * See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
		 * @return {ListRunStepsResponse} OK
		 */
		ListRunSteps(thread_id: string, run_id: string, limit: number | null | undefined, order: ListAssistantsOrder | null | undefined, after: string | null | undefined, before: string | null | undefined, include_: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListRunStepsResponse> {
			return this.http.get<ListRunStepsResponse>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)) + '/runs/' + (run_id == null ? '' : encodeURIComponent(run_id)) + '/steps&limit=' + limit + '&order=' + order + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&before=' + (before == null ? '' : encodeURIComponent(before)) + '&' + include_?.map(z => `include[]=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves a run step.
		 * Get threads/{thread_id}/runs/{run_id}/steps/{step_id}
		 * @param {string} thread_id The ID of the thread to which the run and run step belongs.
		 * @param {string} run_id The ID of the run to which the run step belongs.
		 * @param {string} step_id The ID of the run step to retrieve.
		 * @param {Array<string>} include_ A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
		 * See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
		 * @return {RunStepObject} OK
		 */
		GetRunStep(thread_id: string, run_id: string, step_id: string, include_: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<RunStepObject> {
			return this.http.get<RunStepObject>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)) + '/runs/' + (run_id == null ? '' : encodeURIComponent(run_id)) + '/steps/' + (step_id == null ? '' : encodeURIComponent(step_id)) + '&' + include_?.map(z => `include[]=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * When a run has the `status: "requires_action"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request.
		 * Post threads/{thread_id}/runs/{run_id}/submit_tool_outputs
		 * @param {string} thread_id The ID of the [thread](/docs/api-reference/threads) to which this run belongs.
		 * @param {string} run_id The ID of the run that requires the tool output submission.
		 * @return {RunObject} OK
		 */
		SubmitToolOuputsToRun(thread_id: string, run_id: string, requestBody: SubmitToolOutputsRunRequest, headersHandler?: () => HttpHeaders): Observable<RunObject> {
			return this.http.post<RunObject>(this.baseUri + 'threads/' + (thread_id == null ? '' : encodeURIComponent(thread_id)) + '/runs/' + (run_id == null ? '' : encodeURIComponent(run_id)) + '/submit_tool_outputs', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates an intermediate [Upload](/docs/api-reference/uploads/object) object
		 * that you can add [Parts](/docs/api-reference/uploads/part-object) to.
		 * Currently, an Upload can accept at most 8 GB in total and expires after an
		 * hour after you create it.
		 * Once you complete the Upload, we will create a
		 * [File](/docs/api-reference/files/object) object that contains all the parts
		 * you uploaded. This File is usable in the rest of our platform as a regular
		 * File object.
		 * For certain `purpose` values, the correct `mime_type` must be specified.
		 * Please refer to documentation for the
		 * [supported MIME types for your use case](/docs/assistants/tools/file-search#supported-files).
		 * For guidance on the proper filename extensions for each purpose, please
		 * follow the documentation on [creating a
		 * File](/docs/api-reference/files/create).
		 * Post uploads
		 * @return {Upload} OK
		 */
		CreateUpload(requestBody: CreateUploadRequest, headersHandler?: () => HttpHeaders): Observable<Upload> {
			return this.http.post<Upload>(this.baseUri + 'uploads', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Cancels the Upload. No Parts may be added after an Upload is cancelled.
		 * Post uploads/{upload_id}/cancel
		 * @param {string} upload_id The ID of the Upload.
		 * @return {Upload} OK
		 */
		CancelUpload(upload_id: string, headersHandler?: () => HttpHeaders): Observable<Upload> {
			return this.http.post<Upload>(this.baseUri + 'uploads/' + (upload_id == null ? '' : encodeURIComponent(upload_id)) + '/cancel', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Completes the [Upload](/docs/api-reference/uploads/object).
		 * Within the returned Upload object, there is a nested [File](/docs/api-reference/files/object) object that is ready to use in the rest of the platform.
		 * You can specify the order of the Parts by passing in an ordered list of the Part IDs.
		 * The number of bytes uploaded upon completion must match the number of bytes initially specified when creating the Upload object. No Parts may be added after an Upload is completed.
		 * Post uploads/{upload_id}/complete
		 * @param {string} upload_id The ID of the Upload.
		 * @return {Upload} OK
		 */
		CompleteUpload(upload_id: string, requestBody: CompleteUploadRequest, headersHandler?: () => HttpHeaders): Observable<Upload> {
			return this.http.post<Upload>(this.baseUri + 'uploads/' + (upload_id == null ? '' : encodeURIComponent(upload_id)) + '/complete', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of vector stores.
		 * Get vector_stores
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ListAssistantsOrder} order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @param {string} before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
		 * @return {ListVectorStoresResponse} OK
		 */
		ListVectorStores(limit: number | null | undefined, order: ListAssistantsOrder | null | undefined, after: string | null | undefined, before: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListVectorStoresResponse> {
			return this.http.get<ListVectorStoresResponse>(this.baseUri + 'vector_stores?limit=' + limit + '&order=' + order + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&before=' + (before == null ? '' : encodeURIComponent(before)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a vector store.
		 * Post vector_stores
		 * @return {VectorStoreObject} OK
		 */
		CreateVectorStore(requestBody: CreateVectorStoreRequest, headersHandler?: () => HttpHeaders): Observable<VectorStoreObject> {
			return this.http.post<VectorStoreObject>(this.baseUri + 'vector_stores', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a vector store.
		 * Get vector_stores/{vector_store_id}
		 * @param {string} vector_store_id The ID of the vector store to retrieve.
		 * @return {VectorStoreObject} OK
		 */
		GetVectorStore(vector_store_id: string, headersHandler?: () => HttpHeaders): Observable<VectorStoreObject> {
			return this.http.get<VectorStoreObject>(this.baseUri + 'vector_stores/' + (vector_store_id == null ? '' : encodeURIComponent(vector_store_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies a vector store.
		 * Post vector_stores/{vector_store_id}
		 * @param {string} vector_store_id The ID of the vector store to modify.
		 * @return {VectorStoreObject} OK
		 */
		ModifyVectorStore(vector_store_id: string, requestBody: UpdateVectorStoreRequest, headersHandler?: () => HttpHeaders): Observable<VectorStoreObject> {
			return this.http.post<VectorStoreObject>(this.baseUri + 'vector_stores/' + (vector_store_id == null ? '' : encodeURIComponent(vector_store_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a vector store.
		 * Delete vector_stores/{vector_store_id}
		 * @param {string} vector_store_id The ID of the vector store to delete.
		 * @return {DeleteVectorStoreResponse} OK
		 */
		DeleteVectorStore(vector_store_id: string, headersHandler?: () => HttpHeaders): Observable<DeleteVectorStoreResponse> {
			return this.http.delete<DeleteVectorStoreResponse>(this.baseUri + 'vector_stores/' + (vector_store_id == null ? '' : encodeURIComponent(vector_store_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a vector store file batch.
		 * Post vector_stores/{vector_store_id}/file_batches
		 * @param {string} vector_store_id The ID of the vector store for which to create a File Batch.
		 * @return {VectorStoreFileBatchObject} OK
		 */
		CreateVectorStoreFileBatch(vector_store_id: string, requestBody: CreateVectorStoreFileBatchRequest, headersHandler?: () => HttpHeaders): Observable<VectorStoreFileBatchObject> {
			return this.http.post<VectorStoreFileBatchObject>(this.baseUri + 'vector_stores/' + (vector_store_id == null ? '' : encodeURIComponent(vector_store_id)) + '/file_batches', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a vector store file batch.
		 * Get vector_stores/{vector_store_id}/file_batches/{batch_id}
		 * @param {string} vector_store_id The ID of the vector store that the file batch belongs to.
		 * @param {string} batch_id The ID of the file batch being retrieved.
		 * @return {VectorStoreFileBatchObject} OK
		 */
		GetVectorStoreFileBatch(vector_store_id: string, batch_id: string, headersHandler?: () => HttpHeaders): Observable<VectorStoreFileBatchObject> {
			return this.http.get<VectorStoreFileBatchObject>(this.baseUri + 'vector_stores/' + (vector_store_id == null ? '' : encodeURIComponent(vector_store_id)) + '/file_batches/' + (batch_id == null ? '' : encodeURIComponent(batch_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible.
		 * Post vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel
		 * @param {string} vector_store_id The ID of the vector store that the file batch belongs to.
		 * @param {string} batch_id The ID of the file batch to cancel.
		 * @return {VectorStoreFileBatchObject} OK
		 */
		CancelVectorStoreFileBatch(vector_store_id: string, batch_id: string, headersHandler?: () => HttpHeaders): Observable<VectorStoreFileBatchObject> {
			return this.http.post<VectorStoreFileBatchObject>(this.baseUri + 'vector_stores/' + (vector_store_id == null ? '' : encodeURIComponent(vector_store_id)) + '/file_batches/' + (batch_id == null ? '' : encodeURIComponent(batch_id)) + '/cancel', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of vector store files in a batch.
		 * Get vector_stores/{vector_store_id}/file_batches/{batch_id}/files
		 * @param {string} vector_store_id The ID of the vector store that the files belong to.
		 * @param {string} batch_id The ID of the file batch that the files belong to.
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ListAssistantsOrder} order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @param {string} before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
		 * @param {ListFilesInVectorStoreBatchFilter} filter Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`.
		 * @return {ListVectorStoreFilesResponse} OK
		 */
		ListFilesInVectorStoreBatch(vector_store_id: string, batch_id: string, limit: number | null | undefined, order: ListAssistantsOrder | null | undefined, after: string | null | undefined, before: string | null | undefined, filter: ListFilesInVectorStoreBatchFilter | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListVectorStoreFilesResponse> {
			return this.http.get<ListVectorStoreFilesResponse>(this.baseUri + 'vector_stores/' + (vector_store_id == null ? '' : encodeURIComponent(vector_store_id)) + '/file_batches/' + (batch_id == null ? '' : encodeURIComponent(batch_id)) + '/files&limit=' + limit + '&order=' + order + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&before=' + (before == null ? '' : encodeURIComponent(before)) + '&filter=' + filter, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of vector store files.
		 * Get vector_stores/{vector_store_id}/files
		 * @param {string} vector_store_id The ID of the vector store that the files belong to.
		 * @param {number} limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ListAssistantsOrder} order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
		 * @param {string} after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
		 * @param {string} before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
		 * @param {ListFilesInVectorStoreBatchFilter} filter Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`.
		 * @return {ListVectorStoreFilesResponse} OK
		 */
		ListVectorStoreFiles(vector_store_id: string, limit: number | null | undefined, order: ListAssistantsOrder | null | undefined, after: string | null | undefined, before: string | null | undefined, filter: ListFilesInVectorStoreBatchFilter | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListVectorStoreFilesResponse> {
			return this.http.get<ListVectorStoreFilesResponse>(this.baseUri + 'vector_stores/' + (vector_store_id == null ? '' : encodeURIComponent(vector_store_id)) + '/files&limit=' + limit + '&order=' + order + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&before=' + (before == null ? '' : encodeURIComponent(before)) + '&filter=' + filter, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a vector store file by attaching a [File](/docs/api-reference/files) to a [vector store](/docs/api-reference/vector-stores/object).
		 * Post vector_stores/{vector_store_id}/files
		 * @param {string} vector_store_id The ID of the vector store for which to create a File.
		 * @return {VectorStoreFileObject} OK
		 */
		CreateVectorStoreFile(vector_store_id: string, requestBody: CreateVectorStoreFileRequest, headersHandler?: () => HttpHeaders): Observable<VectorStoreFileObject> {
			return this.http.post<VectorStoreFileObject>(this.baseUri + 'vector_stores/' + (vector_store_id == null ? '' : encodeURIComponent(vector_store_id)) + '/files', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a vector store file.
		 * Get vector_stores/{vector_store_id}/files/{file_id}
		 * @param {string} vector_store_id The ID of the vector store that the file belongs to.
		 * @param {string} file_id The ID of the file being retrieved.
		 * @return {VectorStoreFileObject} OK
		 */
		GetVectorStoreFile(vector_store_id: string, file_id: string, headersHandler?: () => HttpHeaders): Observable<VectorStoreFileObject> {
			return this.http.get<VectorStoreFileObject>(this.baseUri + 'vector_stores/' + (vector_store_id == null ? '' : encodeURIComponent(vector_store_id)) + '/files/' + (file_id == null ? '' : encodeURIComponent(file_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted. To delete the file, use the [delete file](/docs/api-reference/files/delete) endpoint.
		 * Delete vector_stores/{vector_store_id}/files/{file_id}
		 * @param {string} vector_store_id The ID of the vector store that the file belongs to.
		 * @param {string} file_id The ID of the file to delete.
		 * @return {DeleteVectorStoreFileResponse} OK
		 */
		DeleteVectorStoreFile(vector_store_id: string, file_id: string, headersHandler?: () => HttpHeaders): Observable<DeleteVectorStoreFileResponse> {
			return this.http.delete<DeleteVectorStoreFileResponse>(this.baseUri + 'vector_stores/' + (vector_store_id == null ? '' : encodeURIComponent(vector_store_id)) + '/files/' + (file_id == null ? '' : encodeURIComponent(file_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update attributes on a vector store file.
		 * Post vector_stores/{vector_store_id}/files/{file_id}
		 * @param {string} vector_store_id The ID of the vector store the file belongs to.
		 * @param {string} file_id The ID of the file to update attributes.
		 * @return {VectorStoreFileObject} OK
		 */
		UpdateVectorStoreFileAttributes(vector_store_id: string, file_id: string, requestBody: UpdateVectorStoreFileAttributesRequest, headersHandler?: () => HttpHeaders): Observable<VectorStoreFileObject> {
			return this.http.post<VectorStoreFileObject>(this.baseUri + 'vector_stores/' + (vector_store_id == null ? '' : encodeURIComponent(vector_store_id)) + '/files/' + (file_id == null ? '' : encodeURIComponent(file_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve the parsed contents of a vector store file.
		 * Get vector_stores/{vector_store_id}/files/{file_id}/content
		 * @param {string} vector_store_id The ID of the vector store.
		 * @param {string} file_id The ID of the file within the vector store.
		 * @return {VectorStoreFileContentResponse} OK
		 */
		RetrieveVectorStoreFileContent(vector_store_id: string, file_id: string, headersHandler?: () => HttpHeaders): Observable<VectorStoreFileContentResponse> {
			return this.http.get<VectorStoreFileContentResponse>(this.baseUri + 'vector_stores/' + (vector_store_id == null ? '' : encodeURIComponent(vector_store_id)) + '/files/' + (file_id == null ? '' : encodeURIComponent(file_id)) + '/content', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search a vector store for relevant chunks based on a query and file attributes filter.
		 * Post vector_stores/{vector_store_id}/search
		 * @param {string} vector_store_id The ID of the vector store to search.
		 * @return {VectorStoreSearchResultsPage} OK
		 */
		SearchVectorStore(vector_store_id: string, requestBody: VectorStoreSearchRequest, headersHandler?: () => HttpHeaders): Observable<VectorStoreSearchResultsPage> {
			return this.http.post<VectorStoreSearchResultsPage>(this.baseUri + 'vector_stores/' + (vector_store_id == null ? '' : encodeURIComponent(vector_store_id)) + '/search', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

	export enum ListAssistantsOrder { asc = 0, desc = 1 }

	export interface CreateBatchPostBody {

		/**
		 * The ID of an uploaded file that contains requests for the new batch.
		 * See [upload file](/docs/api-reference/files/create) for how to upload a file.
		 * Your input file must be formatted as a [JSONL file](/docs/api-reference/batch/request-input), and must be uploaded with the purpose `batch`. The file can contain up to 50,000 requests, and can be up to 200 MB in size.
		 * Required
		 */
		input_file_id: string;

		/**
		 * The endpoint to be used for all requests in the batch. Currently `/v1/responses`, `/v1/chat/completions`, `/v1/embeddings`, and `/v1/completions` are supported. Note that `/v1/embeddings` batches are also restricted to a maximum of 50,000 embedding inputs across all requests in the batch.
		 * Required
		 */
		endpoint: CreateBatchPostBodyEndpoint;

		/**
		 * The time frame within which the batch should be processed. Currently only `24h` is supported.
		 * Required
		 */
		completion_window: CreateBatchPostBodyCompletion_window;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;
	}

	export enum CreateBatchPostBodyEndpoint { '/v1/responses' = 0, '/v1/chat/completions' = 1, '/v1/embeddings' = 2, '/v1/completions' = 3 }

	export enum CreateBatchPostBodyCompletion_window { '24h' = 0 }

	export interface UpdateChatCompletionPostBody {

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 * Required
		 */
		metadata: Metadata;
	}

	export enum ListEvalsOrder_by { created_at = 0, updated_at = 1 }

	export interface UpdateEvalPostBody {

		/** Rename the evaluation. */
		name?: string | null;

		/**
		 * Set of 16 key-value pairs that can be attached to an object. This can be
		 * useful for storing additional information about the object in a structured
		 * format, and querying for objects via API or the dashboard.
		 * Keys are strings with a maximum length of 64 characters. Values are strings
		 * with a maximum length of 512 characters.
		 */
		metadata?: Metadata;
	}

	export interface DeleteEvalReturn {

		/** Required */
		object: string;

		/** Required */
		deleted: boolean;

		/** Required */
		eval_id: string;
	}

	export enum GetEvalRunsStatus { queued = 0, in_progress = 1, completed = 2, canceled = 3, failed = 4 }

	export interface DeleteEvalRunReturn {
		object?: string | null;
		deleted?: boolean | null;
		run_id?: string | null;
	}

	export enum GetEvalRunOutputItemsStatus { fail = 0, pass = 1 }

	export enum ListFineTuningCheckpointPermissionsOrder { ascending = 0, descending = 1 }

	export interface Admin_api_keys_createPostBody {

		/** Required */
		name: string;
	}

	export interface Admin_api_keys_deleteReturn {
		id?: string | null;
		object?: string | null;
		deleted?: boolean | null;
	}

	export interface List_audit_logsEffective_at {

		/**
		 * Return only events whose `effective_at` (Unix seconds) is greater than this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gt?: number | null;

		/**
		 * Return only events whose `effective_at` (Unix seconds) is greater than or equal to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gte?: number | null;

		/**
		 * Return only events whose `effective_at` (Unix seconds) is less than this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lt?: number | null;

		/**
		 * Return only events whose `effective_at` (Unix seconds) is less than or equal to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lte?: number | null;
	}

	export enum Usage_costsBucket_width { '1d' = 0 }

	export enum Usage_audio_speechesBucket_width { '1m' = 0, '1h' = 1, '1d' = 2 }

	export enum ListFilesInVectorStoreBatchFilter { in_progress = 0, completed = 1, failed = 2, cancelled = 3 }

}

