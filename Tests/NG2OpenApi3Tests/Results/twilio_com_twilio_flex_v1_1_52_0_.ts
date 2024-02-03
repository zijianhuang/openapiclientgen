import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum Configuration_enum_status { ok = 'ok', inprogress = 'inprogress', notstarted = 'notstarted' }

	export interface Flexv1channel {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Channel resource and owns this Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the Flex chat channel was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Flex chat channel was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/**
		 * The SID of the Flex Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flex_flow_sid?: string | null;

		/**
		 * The unique string that we created to identify the Channel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/**
		 * The SID of the TaskRouter Task. Only valid when integration type is `task`. `null` for integration types `studio` & `external`
		 * Max length: 34
		 * Min length: 34
		 */
		task_sid?: string | null;

		/** The absolute URL of the Flex chat channel resource. */
		url?: string | null;

		/**
		 * The SID of the chat user.
		 * Max length: 34
		 * Min length: 34
		 */
		user_sid?: string | null;
	}
	export interface Flexv1channelFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Channel resource and owns this Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the Flex chat channel was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Flex chat channel was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The SID of the Flex Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flex_flow_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Channel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the TaskRouter Task. Only valid when integration type is `task`. `null` for integration types `studio` & `external`
		 * Max length: 34
		 * Min length: 34
		 */
		task_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Flex chat channel resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the chat user.
		 * Max length: 34
		 * Min length: 34
		 */
		user_sid: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1channelFormGroup() {
		return new FormGroup<Flexv1channelFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			flex_flow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FO[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CH[0-9a-fA-F]{32}$')]),
			task_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WT[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			user_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^US[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Flexv1configuration {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Configuration resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** Agent conversation end methods. */
		agent_conv_end_methods?: any;

		/** An object that contains application-specific data. */
		attributes?: any;

		/** Whether call recording is enabled. */
		call_recording_enabled?: boolean | null;

		/** The call recording webhook URL. */
		call_recording_webhook_url?: string | null;

		/** Settings for different limits for Flex Conversations channels attachments. */
		channel_configs?: Array<string>;

		/**
		 * The SID of the chat service this user belongs to.
		 * Max length: 34
		 * Min length: 34
		 */
		chat_service_instance_sid?: string | null;

		/** Citrix voice vdi configuration and settings. */
		citrix_voice_vdi?: any;

		/** An object that contains the CRM attributes. */
		crm_attributes?: any;

		/** The CRM Callback URL. */
		crm_callback_url?: string | null;

		/** Whether CRM is present for Flex. */
		crm_enabled?: boolean | null;

		/** The CRM Fallback URL. */
		crm_fallback_url?: string | null;

		/** The CRM type. */
		crm_type?: string | null;

		/** The date and time in GMT when the Configuration resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Configuration resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** Configurable parameters for Debugger Integration. */
		debugger_integration?: any;

		/** Setting this to true will redirect Flex UI to the URL set in flex_url */
		flex_insights_drilldown?: boolean | null;

		/** Object with enabled/disabled flag with list of workspaces. */
		flex_insights_hr?: any;

		/**
		 * The SID of the Flex service instance.
		 * Max length: 34
		 * Min length: 34
		 */
		flex_service_instance_sid?: string | null;

		/** Configurable parameters for Flex UI Status report. */
		flex_ui_status_report?: any;

		/** URL to redirect to in case drilldown is enabled. */
		flex_url?: string | null;

		/** A list of objects that contain the configurations for the Integrations supported in this configuration. */
		integrations?: Array<string>;

		/** Configurable parameters for Markdown. */
		markdown?: any;

		/**
		 * The SID of the Messaging service instance.
		 * Max length: 34
		 * Min length: 34
		 */
		messaging_service_instance_sid?: string | null;

		/** Configurable parameters for Notifications. */
		notifications?: any;

		/** Presence and presence ttl configuration */
		offline_config?: any;

		/** The list of outbound call flows. */
		outbound_call_flows?: any;

		/** The plugin service attributes. */
		plugin_service_attributes?: any;

		/** Whether the plugin service enabled. */
		plugin_service_enabled?: boolean | null;

		/** The list of public attributes, which are visible to unauthenticated clients. */
		public_attributes?: any;

		/** Configurable parameters for Queues Statistics. */
		queue_stats_configuration?: any;

		/** The URL where the Flex instance is hosted. */
		runtime_domain?: string | null;

		/** The list of serverless service SIDs. */
		serverless_service_sids?: Array<string>;

		/** The Flex Service version. */
		service_version?: string | null;
		status?: Configuration_enum_status | null;

		/**
		 * The TaskRouter SID of the offline activity.
		 * Max length: 34
		 * Min length: 34
		 */
		taskrouter_offline_activity_sid?: string | null;

		/** The Skill description for TaskRouter workers. */
		taskrouter_skills?: Array<string>;

		/**
		 * The SID of the TaskRouter Target TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		taskrouter_target_taskqueue_sid?: string | null;

		/**
		 * The SID of the TaskRouter target Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		taskrouter_target_workflow_sid?: string | null;

		/** The list of TaskRouter TaskQueues. */
		taskrouter_taskqueues?: Array<string>;

		/** The TaskRouter Worker attributes. */
		taskrouter_worker_attributes?: any;

		/** The TaskRouter default channel capacities and availability for workers. */
		taskrouter_worker_channels?: any;

		/**
		 * The SID of the TaskRouter Workspace.
		 * Max length: 34
		 * Min length: 34
		 */
		taskrouter_workspace_sid?: string | null;

		/** The object that describes Flex UI characteristics and settings. */
		ui_attributes?: any;

		/** The object that defines the NPM packages and versions to be used in Hosted Flex. */
		ui_dependencies?: any;

		/** The primary language of the Flex UI. */
		ui_language?: string | null;

		/** The Pinned UI version. */
		ui_version?: string | null;

		/** The absolute URL of the Configuration resource. */
		url?: string | null;
	}
	export interface Flexv1configurationFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Configuration resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Agent conversation end methods. */
		agent_conv_end_methods: FormControl<any | null | undefined>,

		/** An object that contains application-specific data. */
		attributes: FormControl<any | null | undefined>,

		/** Whether call recording is enabled. */
		call_recording_enabled: FormControl<boolean | null | undefined>,

		/** The call recording webhook URL. */
		call_recording_webhook_url: FormControl<string | null | undefined>,

		/**
		 * The SID of the chat service this user belongs to.
		 * Max length: 34
		 * Min length: 34
		 */
		chat_service_instance_sid: FormControl<string | null | undefined>,

		/** Citrix voice vdi configuration and settings. */
		citrix_voice_vdi: FormControl<any | null | undefined>,

		/** An object that contains the CRM attributes. */
		crm_attributes: FormControl<any | null | undefined>,

		/** The CRM Callback URL. */
		crm_callback_url: FormControl<string | null | undefined>,

		/** Whether CRM is present for Flex. */
		crm_enabled: FormControl<boolean | null | undefined>,

		/** The CRM Fallback URL. */
		crm_fallback_url: FormControl<string | null | undefined>,

		/** The CRM type. */
		crm_type: FormControl<string | null | undefined>,

		/** The date and time in GMT when the Configuration resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Configuration resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** Configurable parameters for Debugger Integration. */
		debugger_integration: FormControl<any | null | undefined>,

		/** Setting this to true will redirect Flex UI to the URL set in flex_url */
		flex_insights_drilldown: FormControl<boolean | null | undefined>,

		/** Object with enabled/disabled flag with list of workspaces. */
		flex_insights_hr: FormControl<any | null | undefined>,

		/**
		 * The SID of the Flex service instance.
		 * Max length: 34
		 * Min length: 34
		 */
		flex_service_instance_sid: FormControl<string | null | undefined>,

		/** Configurable parameters for Flex UI Status report. */
		flex_ui_status_report: FormControl<any | null | undefined>,

		/** URL to redirect to in case drilldown is enabled. */
		flex_url: FormControl<string | null | undefined>,

		/** Configurable parameters for Markdown. */
		markdown: FormControl<any | null | undefined>,

		/**
		 * The SID of the Messaging service instance.
		 * Max length: 34
		 * Min length: 34
		 */
		messaging_service_instance_sid: FormControl<string | null | undefined>,

		/** Configurable parameters for Notifications. */
		notifications: FormControl<any | null | undefined>,

		/** Presence and presence ttl configuration */
		offline_config: FormControl<any | null | undefined>,

		/** The list of outbound call flows. */
		outbound_call_flows: FormControl<any | null | undefined>,

		/** The plugin service attributes. */
		plugin_service_attributes: FormControl<any | null | undefined>,

		/** Whether the plugin service enabled. */
		plugin_service_enabled: FormControl<boolean | null | undefined>,

		/** The list of public attributes, which are visible to unauthenticated clients. */
		public_attributes: FormControl<any | null | undefined>,

		/** Configurable parameters for Queues Statistics. */
		queue_stats_configuration: FormControl<any | null | undefined>,

		/** The URL where the Flex instance is hosted. */
		runtime_domain: FormControl<string | null | undefined>,

		/** The Flex Service version. */
		service_version: FormControl<string | null | undefined>,
		status: FormControl<Configuration_enum_status | null | undefined>,

		/**
		 * The TaskRouter SID of the offline activity.
		 * Max length: 34
		 * Min length: 34
		 */
		taskrouter_offline_activity_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the TaskRouter Target TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		taskrouter_target_taskqueue_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the TaskRouter target Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		taskrouter_target_workflow_sid: FormControl<string | null | undefined>,

		/** The TaskRouter Worker attributes. */
		taskrouter_worker_attributes: FormControl<any | null | undefined>,

		/** The TaskRouter default channel capacities and availability for workers. */
		taskrouter_worker_channels: FormControl<any | null | undefined>,

		/**
		 * The SID of the TaskRouter Workspace.
		 * Max length: 34
		 * Min length: 34
		 */
		taskrouter_workspace_sid: FormControl<string | null | undefined>,

		/** The object that describes Flex UI characteristics and settings. */
		ui_attributes: FormControl<any | null | undefined>,

		/** The object that defines the NPM packages and versions to be used in Hosted Flex. */
		ui_dependencies: FormControl<any | null | undefined>,

		/** The primary language of the Flex UI. */
		ui_language: FormControl<string | null | undefined>,

		/** The Pinned UI version. */
		ui_version: FormControl<string | null | undefined>,

		/** The absolute URL of the Configuration resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1configurationFormGroup() {
		return new FormGroup<Flexv1configurationFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			agent_conv_end_methods: new FormControl<any | null | undefined>(undefined),
			attributes: new FormControl<any | null | undefined>(undefined),
			call_recording_enabled: new FormControl<boolean | null | undefined>(undefined),
			call_recording_webhook_url: new FormControl<string | null | undefined>(undefined),
			chat_service_instance_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			citrix_voice_vdi: new FormControl<any | null | undefined>(undefined),
			crm_attributes: new FormControl<any | null | undefined>(undefined),
			crm_callback_url: new FormControl<string | null | undefined>(undefined),
			crm_enabled: new FormControl<boolean | null | undefined>(undefined),
			crm_fallback_url: new FormControl<string | null | undefined>(undefined),
			crm_type: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			debugger_integration: new FormControl<any | null | undefined>(undefined),
			flex_insights_drilldown: new FormControl<boolean | null | undefined>(undefined),
			flex_insights_hr: new FormControl<any | null | undefined>(undefined),
			flex_service_instance_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			flex_ui_status_report: new FormControl<any | null | undefined>(undefined),
			flex_url: new FormControl<string | null | undefined>(undefined),
			markdown: new FormControl<any | null | undefined>(undefined),
			messaging_service_instance_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^MG[0-9a-fA-F]{32}$')]),
			notifications: new FormControl<any | null | undefined>(undefined),
			offline_config: new FormControl<any | null | undefined>(undefined),
			outbound_call_flows: new FormControl<any | null | undefined>(undefined),
			plugin_service_attributes: new FormControl<any | null | undefined>(undefined),
			plugin_service_enabled: new FormControl<boolean | null | undefined>(undefined),
			public_attributes: new FormControl<any | null | undefined>(undefined),
			queue_stats_configuration: new FormControl<any | null | undefined>(undefined),
			runtime_domain: new FormControl<string | null | undefined>(undefined),
			service_version: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<Configuration_enum_status | null | undefined>(undefined),
			taskrouter_offline_activity_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WA[0-9a-fA-F]{32}$')]),
			taskrouter_target_taskqueue_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WQ[0-9a-fA-F]{32}$')]),
			taskrouter_target_workflow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WW[0-9a-fA-F]{32}$')]),
			taskrouter_worker_attributes: new FormControl<any | null | undefined>(undefined),
			taskrouter_worker_channels: new FormControl<any | null | undefined>(undefined),
			taskrouter_workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
			ui_attributes: new FormControl<any | null | undefined>(undefined),
			ui_dependencies: new FormControl<any | null | undefined>(undefined),
			ui_language: new FormControl<string | null | undefined>(undefined),
			ui_version: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Flexv1flex_flow {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Flow resource and owns this Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;
		channel_type?: Flexv1flex_flowChannel_type | null;

		/**
		 * The SID of the chat service.
		 * Max length: 34
		 * Min length: 34
		 */
		chat_service_sid?: string | null;

		/** The channel contact's Identity. */
		contact_identity?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** Whether the Flex Flow is enabled. */
		enabled?: boolean | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/** An object that contains specific parameters for the integration. */
		integration?: any;
		integration_type?: Flexv1flex_flowIntegration_type | null;

		/** When enabled, the Messaging Channel Janitor will remove active Proxy sessions if the associated Task is deleted outside of the Flex UI. Defaults to `false`. */
		janitor_enabled?: boolean | null;

		/** When enabled, Flex will keep the chat channel active so that it may be used for subsequent interactions with a contact identity. Defaults to `false`. */
		long_lived?: boolean | null;

		/**
		 * The unique string that we created to identify the Flex Flow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Flex Flow resource. */
		url?: string | null;
	}
	export interface Flexv1flex_flowFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Flow resource and owns this Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,
		channel_type: FormControl<Flexv1flex_flowChannel_type | null | undefined>,

		/**
		 * The SID of the chat service.
		 * Max length: 34
		 * Min length: 34
		 */
		chat_service_sid: FormControl<string | null | undefined>,

		/** The channel contact's Identity. */
		contact_identity: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** Whether the Flex Flow is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/** An object that contains specific parameters for the integration. */
		integration: FormControl<any | null | undefined>,
		integration_type: FormControl<Flexv1flex_flowIntegration_type | null | undefined>,

		/** When enabled, the Messaging Channel Janitor will remove active Proxy sessions if the associated Task is deleted outside of the Flex UI. Defaults to `false`. */
		janitor_enabled: FormControl<boolean | null | undefined>,

		/** When enabled, Flex will keep the chat channel active so that it may be used for subsequent interactions with a contact identity. Defaults to `false`. */
		long_lived: FormControl<boolean | null | undefined>,

		/**
		 * The unique string that we created to identify the Flex Flow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Flex Flow resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1flex_flowFormGroup() {
		return new FormGroup<Flexv1flex_flowFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			channel_type: new FormControl<Flexv1flex_flowChannel_type | null | undefined>(undefined),
			chat_service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			contact_identity: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			integration: new FormControl<any | null | undefined>(undefined),
			integration_type: new FormControl<Flexv1flex_flowIntegration_type | null | undefined>(undefined),
			janitor_enabled: new FormControl<boolean | null | undefined>(undefined),
			long_lived: new FormControl<boolean | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FO[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Flexv1flex_flowChannel_type { web = 'web', sms = 'sms', facebook = 'facebook', whatsapp = 'whatsapp', line = 'line', custom = 'custom' }

	export enum Flexv1flex_flowIntegration_type { studio = 'studio', external = 'external', task = 'task' }

	export interface Flexv1insights_assessments {

		/**
		 * The unique SID identifier of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The id of the Agent */
		agent_id?: string | null;

		/** The id of the answer selected by user */
		answer_id?: string | null;

		/** The answer text selected by user */
		answer_text?: string | null;

		/** Assessment Details associated with an assessment */
		assessment?: any;

		/**
		 * The SID of the assessment
		 * Max length: 34
		 * Min length: 34
		 */
		assessment_sid?: string | null;

		/** Offset of the conversation */
		offset?: number | null;

		/** The flag indicating if this assessment is part of report */
		report?: boolean | null;

		/** Segment Id of conversation */
		segment_id?: string | null;
		timestamp?: number | null;
		url?: string | null;

		/** The email id of the user. */
		user_email?: string | null;

		/** The name of the user. */
		user_name?: string | null;

		/** The weightage given to this comment */
		weight?: number | null;
	}
	export interface Flexv1insights_assessmentsFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The id of the Agent */
		agent_id: FormControl<string | null | undefined>,

		/** The id of the answer selected by user */
		answer_id: FormControl<string | null | undefined>,

		/** The answer text selected by user */
		answer_text: FormControl<string | null | undefined>,

		/** Assessment Details associated with an assessment */
		assessment: FormControl<any | null | undefined>,

		/**
		 * The SID of the assessment
		 * Max length: 34
		 * Min length: 34
		 */
		assessment_sid: FormControl<string | null | undefined>,

		/** Offset of the conversation */
		offset: FormControl<number | null | undefined>,

		/** The flag indicating if this assessment is part of report */
		report: FormControl<boolean | null | undefined>,

		/** Segment Id of conversation */
		segment_id: FormControl<string | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** The email id of the user. */
		user_email: FormControl<string | null | undefined>,

		/** The name of the user. */
		user_name: FormControl<string | null | undefined>,

		/** The weightage given to this comment */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateFlexv1insights_assessmentsFormGroup() {
		return new FormGroup<Flexv1insights_assessmentsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			agent_id: new FormControl<string | null | undefined>(undefined),
			answer_id: new FormControl<string | null | undefined>(undefined),
			answer_text: new FormControl<string | null | undefined>(undefined),
			assessment: new FormControl<any | null | undefined>(undefined),
			assessment_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FM[0-9a-fA-F]{32}$')]),
			offset: new FormControl<number | null | undefined>(undefined),
			report: new FormControl<boolean | null | undefined>(undefined),
			segment_id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			user_email: new FormControl<string | null | undefined>(undefined),
			user_name: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Flexv1insights_assessments_comment {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The id of the agent. */
		agent_id?: string | null;

		/**
		 * The SID of the assessment.
		 * Max length: 34
		 * Min length: 34
		 */
		assessment_sid?: string | null;

		/** The comment added for assessment. */
		comment?: any;

		/** The offset */
		offset?: number | null;

		/** The flag indicating if this assessment is part of report */
		report?: boolean | null;

		/** The id of the segment. */
		segment_id?: string | null;

		/** The timestamp when the record is inserted */
		timestamp?: number | null;
		url?: string | null;

		/** The email id of the user. */
		user_email?: string | null;

		/** The name of the user. */
		user_name?: string | null;

		/** The weightage given to this comment */
		weight?: number | null;
	}
	export interface Flexv1insights_assessments_commentFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The id of the agent. */
		agent_id: FormControl<string | null | undefined>,

		/**
		 * The SID of the assessment.
		 * Max length: 34
		 * Min length: 34
		 */
		assessment_sid: FormControl<string | null | undefined>,

		/** The comment added for assessment. */
		comment: FormControl<any | null | undefined>,

		/** The offset */
		offset: FormControl<number | null | undefined>,

		/** The flag indicating if this assessment is part of report */
		report: FormControl<boolean | null | undefined>,

		/** The id of the segment. */
		segment_id: FormControl<string | null | undefined>,

		/** The timestamp when the record is inserted */
		timestamp: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** The email id of the user. */
		user_email: FormControl<string | null | undefined>,

		/** The name of the user. */
		user_name: FormControl<string | null | undefined>,

		/** The weightage given to this comment */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateFlexv1insights_assessments_commentFormGroup() {
		return new FormGroup<Flexv1insights_assessments_commentFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			agent_id: new FormControl<string | null | undefined>(undefined),
			assessment_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FM[0-9a-fA-F]{32}$')]),
			comment: new FormControl<any | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			report: new FormControl<boolean | null | undefined>(undefined),
			segment_id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			user_email: new FormControl<string | null | undefined>(undefined),
			user_name: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Flexv1insights_conversations {

		/** The id of the account. */
		account_id?: string | null;

		/** The unique id of the conversation */
		conversation_id?: string | null;

		/** The count of segments for a conversation */
		segment_count?: number | null;

		/** The Segments of a conversation */
		segments?: Array<string>;
	}
	export interface Flexv1insights_conversationsFormProperties {

		/** The id of the account. */
		account_id: FormControl<string | null | undefined>,

		/** The unique id of the conversation */
		conversation_id: FormControl<string | null | undefined>,

		/** The count of segments for a conversation */
		segment_count: FormControl<number | null | undefined>,
	}
	export function CreateFlexv1insights_conversationsFormGroup() {
		return new FormGroup<Flexv1insights_conversationsFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			conversation_id: new FormControl<string | null | undefined>(undefined),
			segment_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Flexv1insights_questionnaires {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The flag to enable or disable questionnaire */
		active?: boolean | null;

		/** The description of this questionnaire */
		description?: string | null;

		/** The name of this category. */
		name?: string | null;

		/**
		 * The sid of this questionnaire
		 * Max length: 34
		 * Min length: 34
		 */
		questionnaire_sid?: string | null;

		/** The list of questions with category for a questionnaire */
		questions?: Array<string>;
		url?: string | null;
	}
	export interface Flexv1insights_questionnairesFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The flag to enable or disable questionnaire */
		active: FormControl<boolean | null | undefined>,

		/** The description of this questionnaire */
		description: FormControl<string | null | undefined>,

		/** The name of this category. */
		name: FormControl<string | null | undefined>,

		/**
		 * The sid of this questionnaire
		 * Max length: 34
		 * Min length: 34
		 */
		questionnaire_sid: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1insights_questionnairesFormGroup() {
		return new FormGroup<Flexv1insights_questionnairesFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			active: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			questionnaire_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^GM[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Flexv1insights_questionnaires_category {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the category
		 * Max length: 34
		 * Min length: 34
		 */
		category_sid?: string | null;

		/** The name of this category. */
		name?: string | null;
		url?: string | null;
	}
	export interface Flexv1insights_questionnaires_categoryFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the category
		 * Max length: 34
		 * Min length: 34
		 */
		category_sid: FormControl<string | null | undefined>,

		/** The name of this category. */
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1insights_questionnaires_categoryFormGroup() {
		return new FormGroup<Flexv1insights_questionnaires_categoryFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			category_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FY[0-9a-fA-F]{32}$')]),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Flexv1insights_questionnaires_question {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The flag  to enable for disable NA for answer. */
		allow_na?: boolean | null;

		/** Set of answers for the question */
		answer_set?: any;

		/** The answer_set for the question. */
		answer_set_id?: string | null;

		/** The Category for the question. */
		category?: any;

		/** The description for the question. */
		description?: string | null;

		/** The question. */
		question?: string | null;

		/**
		 * The SID of the question
		 * Max length: 34
		 * Min length: 34
		 */
		question_sid?: string | null;
		url?: string | null;

		/** Integer value that tells a particular question is used by how many questionnaires */
		usage?: number | null;
	}
	export interface Flexv1insights_questionnaires_questionFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The flag  to enable for disable NA for answer. */
		allow_na: FormControl<boolean | null | undefined>,

		/** Set of answers for the question */
		answer_set: FormControl<any | null | undefined>,

		/** The answer_set for the question. */
		answer_set_id: FormControl<string | null | undefined>,

		/** The Category for the question. */
		category: FormControl<any | null | undefined>,

		/** The description for the question. */
		description: FormControl<string | null | undefined>,

		/** The question. */
		question: FormControl<string | null | undefined>,

		/**
		 * The SID of the question
		 * Max length: 34
		 * Min length: 34
		 */
		question_sid: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** Integer value that tells a particular question is used by how many questionnaires */
		usage: FormControl<number | null | undefined>,
	}
	export function CreateFlexv1insights_questionnaires_questionFormGroup() {
		return new FormGroup<Flexv1insights_questionnaires_questionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			allow_na: new FormControl<boolean | null | undefined>(undefined),
			answer_set: new FormControl<any | null | undefined>(undefined),
			answer_set_id: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<any | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			question: new FormControl<string | null | undefined>(undefined),
			question_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^GE[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			usage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Flexv1insights_segments {

		/** The unique id for the account. */
		account_id?: string | null;

		/** The unique id for the agent. */
		agent_id?: string | null;

		/** The link to the agent conversation. */
		agent_link?: string | null;

		/** The name of the agent. */
		agent_name?: string | null;

		/** The phone number of the agent. */
		agent_phone?: string | null;

		/** The team name to which agent belongs. */
		agent_team_name?: string | null;

		/** he team name to which agent belongs. */
		agent_team_name_in_hierarchy?: string | null;

		/** The percentage scored on the Assessments. */
		assessment_percentage?: any;

		/** The type of the assessment. */
		assessment_type?: any;

		/** The link to the customer conversation. */
		customer_link?: string | null;

		/** The name of the customer. */
		customer_name?: string | null;

		/** The phone number of the customer. */
		customer_phone?: string | null;

		/** The date of the conversation. */
		date?: string | null;
		external_contact?: string | null;

		/** The unique id for the conversation. */
		external_id?: string | null;

		/** The hyperlink to recording of the task event. */
		external_segment_link?: string | null;

		/** The uuid for the external_segment_link. */
		external_segment_link_id?: string | null;

		/** The media identifiers of the conversation. */
		media?: any;
		queue?: string | null;

		/** To unique id of the segment */
		segment_id?: string | null;

		/** The offset value for the recording. */
		segment_recording_offset?: string | null;
		url?: string | null;
	}
	export interface Flexv1insights_segmentsFormProperties {

		/** The unique id for the account. */
		account_id: FormControl<string | null | undefined>,

		/** The unique id for the agent. */
		agent_id: FormControl<string | null | undefined>,

		/** The link to the agent conversation. */
		agent_link: FormControl<string | null | undefined>,

		/** The name of the agent. */
		agent_name: FormControl<string | null | undefined>,

		/** The phone number of the agent. */
		agent_phone: FormControl<string | null | undefined>,

		/** The team name to which agent belongs. */
		agent_team_name: FormControl<string | null | undefined>,

		/** he team name to which agent belongs. */
		agent_team_name_in_hierarchy: FormControl<string | null | undefined>,

		/** The percentage scored on the Assessments. */
		assessment_percentage: FormControl<any | null | undefined>,

		/** The type of the assessment. */
		assessment_type: FormControl<any | null | undefined>,

		/** The link to the customer conversation. */
		customer_link: FormControl<string | null | undefined>,

		/** The name of the customer. */
		customer_name: FormControl<string | null | undefined>,

		/** The phone number of the customer. */
		customer_phone: FormControl<string | null | undefined>,

		/** The date of the conversation. */
		date: FormControl<string | null | undefined>,
		external_contact: FormControl<string | null | undefined>,

		/** The unique id for the conversation. */
		external_id: FormControl<string | null | undefined>,

		/** The hyperlink to recording of the task event. */
		external_segment_link: FormControl<string | null | undefined>,

		/** The uuid for the external_segment_link. */
		external_segment_link_id: FormControl<string | null | undefined>,

		/** The media identifiers of the conversation. */
		media: FormControl<any | null | undefined>,
		queue: FormControl<string | null | undefined>,

		/** To unique id of the segment */
		segment_id: FormControl<string | null | undefined>,

		/** The offset value for the recording. */
		segment_recording_offset: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1insights_segmentsFormGroup() {
		return new FormGroup<Flexv1insights_segmentsFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			agent_id: new FormControl<string | null | undefined>(undefined),
			agent_link: new FormControl<string | null | undefined>(undefined),
			agent_name: new FormControl<string | null | undefined>(undefined),
			agent_phone: new FormControl<string | null | undefined>(undefined),
			agent_team_name: new FormControl<string | null | undefined>(undefined),
			agent_team_name_in_hierarchy: new FormControl<string | null | undefined>(undefined),
			assessment_percentage: new FormControl<any | null | undefined>(undefined),
			assessment_type: new FormControl<any | null | undefined>(undefined),
			customer_link: new FormControl<string | null | undefined>(undefined),
			customer_name: new FormControl<string | null | undefined>(undefined),
			customer_phone: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			external_contact: new FormControl<string | null | undefined>(undefined),
			external_id: new FormControl<string | null | undefined>(undefined),
			external_segment_link: new FormControl<string | null | undefined>(undefined),
			external_segment_link_id: new FormControl<string | null | undefined>(undefined),
			media: new FormControl<any | null | undefined>(undefined),
			queue: new FormControl<string | null | undefined>(undefined),
			segment_id: new FormControl<string | null | undefined>(undefined),
			segment_recording_offset: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Flexv1insights_session {

		/** The base URL to fetch reports and dashboards */
		base_url?: string | null;

		/** The session expiry date and time, given in ISO 8601 format. */
		session_expiry?: string | null;

		/** The unique ID for the session */
		session_id?: string | null;

		/** The URL of this resource. */
		url?: string | null;

		/** Unique ID to identify the user's workspace */
		workspace_id?: string | null;
	}
	export interface Flexv1insights_sessionFormProperties {

		/** The base URL to fetch reports and dashboards */
		base_url: FormControl<string | null | undefined>,

		/** The session expiry date and time, given in ISO 8601 format. */
		session_expiry: FormControl<string | null | undefined>,

		/** The unique ID for the session */
		session_id: FormControl<string | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,

		/** Unique ID to identify the user's workspace */
		workspace_id: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1insights_sessionFormGroup() {
		return new FormGroup<Flexv1insights_sessionFormProperties>({
			base_url: new FormControl<string | null | undefined>(undefined),
			session_expiry: new FormControl<string | null | undefined>(undefined),
			session_id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Flexv1insights_settings_answersets {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The list of answer set categories */
		answer_set_categories?: any;

		/** The lis of answer sets */
		answer_sets?: any;

		/** The details for not applicable answer set */
		not_applicable?: any;
		url?: string | null;
	}
	export interface Flexv1insights_settings_answersetsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The list of answer set categories */
		answer_set_categories: FormControl<any | null | undefined>,

		/** The lis of answer sets */
		answer_sets: FormControl<any | null | undefined>,

		/** The details for not applicable answer set */
		not_applicable: FormControl<any | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1insights_settings_answersetsFormGroup() {
		return new FormGroup<Flexv1insights_settings_answersetsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			answer_set_categories: new FormControl<any | null | undefined>(undefined),
			answer_sets: new FormControl<any | null | undefined>(undefined),
			not_applicable: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Flexv1insights_settings_comment {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;
		comments?: any;
		url?: string | null;
	}
	export interface Flexv1insights_settings_commentFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,
		comments: FormControl<any | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1insights_settings_commentFormGroup() {
		return new FormGroup<Flexv1insights_settings_commentFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			comments: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Flexv1insights_user_roles {

		/** Flex Insights roles for the user */
		roles?: Array<string>;
		url?: string | null;
	}
	export interface Flexv1insights_user_rolesFormProperties {
		url: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1insights_user_rolesFormGroup() {
		return new FormGroup<Flexv1insights_user_rolesFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Flexv1interaction {

		/** A JSON object that defines the Interaction’s communication channel and includes details about the channel. See the [Outbound SMS](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#agent-initiated-outbound-interactions) and [inbound (API-initiated)](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#api-initiated-contact) Channel object examples. */
		channel?: any;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		interaction_context_sid?: string | null;
		links?: string | null;

		/**
		 * A JSON Object representing the routing rules for the Interaction Channel. See [Outbound SMS Example](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#agent-initiated-outbound-interactions) for an example Routing object. The Interactions resource uses TaskRouter for all routing functionality.
		 * All attributes in the Routing object on your Interaction request body are added “as is” to the task. For a list of known attributes consumed by the Flex UI and/or Flex Insights, see [Known Task Attributes](https://www.twilio.com/docs/flex/developer/conversations/interactions-api#task-attributes).
		 */
		routing?: any;

		/**
		 * The unique string created by Twilio to identify an Interaction resource, prefixed with KD.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		url?: string | null;
	}
	export interface Flexv1interactionFormProperties {

		/** A JSON object that defines the Interaction’s communication channel and includes details about the channel. See the [Outbound SMS](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#agent-initiated-outbound-interactions) and [inbound (API-initiated)](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#api-initiated-contact) Channel object examples. */
		channel: FormControl<any | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		interaction_context_sid: FormControl<string | null | undefined>,
		links: FormControl<string | null | undefined>,

		/**
		 * A JSON Object representing the routing rules for the Interaction Channel. See [Outbound SMS Example](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#agent-initiated-outbound-interactions) for an example Routing object. The Interactions resource uses TaskRouter for all routing functionality.
		 * All attributes in the Routing object on your Interaction request body are added “as is” to the task. For a list of known attributes consumed by the Flex UI and/or Flex Insights, see [Known Task Attributes](https://www.twilio.com/docs/flex/developer/conversations/interactions-api#task-attributes).
		 */
		routing: FormControl<any | null | undefined>,

		/**
		 * The unique string created by Twilio to identify an Interaction resource, prefixed with KD.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1interactionFormGroup() {
		return new FormGroup<Flexv1interactionFormProperties>({
			channel: new FormControl<any | null | undefined>(undefined),
			interaction_context_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^HQ[0-9a-fA-F]{32}$')]),
			links: new FormControl<string | null | undefined>(undefined),
			routing: new FormControl<any | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KD[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Flexv1interactioninteraction_channel {

		/** The Twilio error code for a failed channel. */
		error_code?: number | null;

		/** The error message for a failed channel. */
		error_message?: string | null;

		/**
		 * The unique string created by Twilio to identify an Interaction resource, prefixed with KD.
		 * Max length: 34
		 * Min length: 34
		 */
		interaction_sid?: string | null;
		links?: string | null;

		/**
		 * The unique string created by Twilio to identify an Interaction Channel resource, prefixed with UO.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		status?: Flexv1interactioninteraction_channelStatus | null;
		type?: Flexv1interactioninteraction_channelType | null;
		url?: string | null;
	}
	export interface Flexv1interactioninteraction_channelFormProperties {

		/** The Twilio error code for a failed channel. */
		error_code: FormControl<number | null | undefined>,

		/** The error message for a failed channel. */
		error_message: FormControl<string | null | undefined>,

		/**
		 * The unique string created by Twilio to identify an Interaction resource, prefixed with KD.
		 * Max length: 34
		 * Min length: 34
		 */
		interaction_sid: FormControl<string | null | undefined>,
		links: FormControl<string | null | undefined>,

		/**
		 * The unique string created by Twilio to identify an Interaction Channel resource, prefixed with UO.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		status: FormControl<Flexv1interactioninteraction_channelStatus | null | undefined>,
		type: FormControl<Flexv1interactioninteraction_channelType | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1interactioninteraction_channelFormGroup() {
		return new FormGroup<Flexv1interactioninteraction_channelFormProperties>({
			error_code: new FormControl<number | null | undefined>(undefined),
			error_message: new FormControl<string | null | undefined>(undefined),
			interaction_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KD[0-9a-fA-F]{32}$')]),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UO[0-9a-fA-F]{32}$')]),
			status: new FormControl<Flexv1interactioninteraction_channelStatus | null | undefined>(undefined),
			type: new FormControl<Flexv1interactioninteraction_channelType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Flexv1interactioninteraction_channelStatus { setup = 'setup', active = 'active', failed = 'failed', closed = 'closed', inactive = 'inactive' }

	export enum Flexv1interactioninteraction_channelType { voice = 'voice', sms = 'sms', email = 'email', web = 'web', whatsapp = 'whatsapp', chat = 'chat', messenger = 'messenger', gbm = 'gbm' }

	export interface Flexv1interactioninteraction_channelinteraction_channel_invite {

		/**
		 * The Channel SID for this Invite.
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid?: string | null;

		/**
		 * The Interaction SID for this Channel.
		 * Max length: 34
		 * Min length: 34
		 */
		interaction_sid?: string | null;

		/**
		 * A JSON object representing the routing rules for the Interaction Channel. See [Outbound SMS Example](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#agent-initiated-outbound-interactions) for an example Routing object. The Interactions resource uses TaskRouter for all routing functionality.
		 * All attributes in the Routing object on your Interaction request body are added “as is” to the task. For a list of known attributes consumed by the Flex UI and/or Flex Insights, see [Known Task Attributes](https://www.twilio.com/docs/flex/developer/conversations/interactions-api#task-attributes).
		 */
		routing?: any;

		/**
		 * The unique string created by Twilio to identify an Interaction Channel Invite resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		url?: string | null;
	}
	export interface Flexv1interactioninteraction_channelinteraction_channel_inviteFormProperties {

		/**
		 * The Channel SID for this Invite.
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid: FormControl<string | null | undefined>,

		/**
		 * The Interaction SID for this Channel.
		 * Max length: 34
		 * Min length: 34
		 */
		interaction_sid: FormControl<string | null | undefined>,

		/**
		 * A JSON object representing the routing rules for the Interaction Channel. See [Outbound SMS Example](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#agent-initiated-outbound-interactions) for an example Routing object. The Interactions resource uses TaskRouter for all routing functionality.
		 * All attributes in the Routing object on your Interaction request body are added “as is” to the task. For a list of known attributes consumed by the Flex UI and/or Flex Insights, see [Known Task Attributes](https://www.twilio.com/docs/flex/developer/conversations/interactions-api#task-attributes).
		 */
		routing: FormControl<any | null | undefined>,

		/**
		 * The unique string created by Twilio to identify an Interaction Channel Invite resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1interactioninteraction_channelinteraction_channel_inviteFormGroup() {
		return new FormGroup<Flexv1interactioninteraction_channelinteraction_channel_inviteFormProperties>({
			channel_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UO[0-9a-fA-F]{32}$')]),
			interaction_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KD[0-9a-fA-F]{32}$')]),
			routing: new FormControl<any | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KG[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Flexv1interactioninteraction_channelinteraction_channel_participant {

		/**
		 * The Channel Sid for this Participant.
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid?: string | null;

		/**
		 * The Interaction Sid for this channel.
		 * Max length: 34
		 * Min length: 34
		 */
		interaction_sid?: string | null;

		/**
		 * The unique string created by Twilio to identify an Interaction Channel Participant resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		type?: Flexv1interactioninteraction_channelinteraction_channel_participantType | null;
		url?: string | null;
	}
	export interface Flexv1interactioninteraction_channelinteraction_channel_participantFormProperties {

		/**
		 * The Channel Sid for this Participant.
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid: FormControl<string | null | undefined>,

		/**
		 * The Interaction Sid for this channel.
		 * Max length: 34
		 * Min length: 34
		 */
		interaction_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string created by Twilio to identify an Interaction Channel Participant resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		type: FormControl<Flexv1interactioninteraction_channelinteraction_channel_participantType | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1interactioninteraction_channelinteraction_channel_participantFormGroup() {
		return new FormGroup<Flexv1interactioninteraction_channelinteraction_channel_participantFormProperties>({
			channel_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UO[0-9a-fA-F]{32}$')]),
			interaction_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KD[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UT[0-9a-fA-F]{32}$')]),
			type: new FormControl<Flexv1interactioninteraction_channelinteraction_channel_participantType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Flexv1interactioninteraction_channelinteraction_channel_participantType { supervisor = 'supervisor', customer = 'customer', external = 'external', agent = 'agent', unknown = 'unknown' }

	export interface Flexv1provisioning_status {
		status?: Flexv1provisioning_statusStatus | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Flexv1provisioning_statusFormProperties {
		status: FormControl<Flexv1provisioning_statusStatus | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1provisioning_statusFormGroup() {
		return new FormGroup<Flexv1provisioning_statusFormProperties>({
			status: new FormControl<Flexv1provisioning_statusStatus | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Flexv1provisioning_statusStatus { active = 'active', 'in-progress' = 'in-progress', 'not-configured' = 'not-configured', failed = 'failed' }

	export interface Flexv1web_channel {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the WebChannel resource and owns this Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/**
		 * The SID of the Flex Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flex_flow_sid?: string | null;

		/**
		 * The unique string that we created to identify the WebChannel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the WebChannel resource. */
		url?: string | null;
	}
	export interface Flexv1web_channelFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the WebChannel resource and owns this Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The SID of the Flex Flow.
		 * Max length: 34
		 * Min length: 34
		 */
		flex_flow_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the WebChannel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the WebChannel resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFlexv1web_channelFormGroup() {
		return new FormGroup<Flexv1web_channelFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			flex_flow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FO[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CH[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Flex_flow_enum_channel_type { web = 'web', sms = 'sms', facebook = 'facebook', whatsapp = 'whatsapp', line = 'line', custom = 'custom' }

	export enum Flex_flow_enum_integration_type { studio = 'studio', external = 'external', task = 'task' }

	export enum Interaction_channel_enum_channel_status { setup = 'setup', active = 'active', failed = 'failed', closed = 'closed', inactive = 'inactive' }

	export enum Interaction_channel_enum_status { closed = 'closed', wrapup = 'wrapup' }

	export enum Interaction_channel_enum_type { voice = 'voice', sms = 'sms', email = 'email', web = 'web', whatsapp = 'whatsapp', chat = 'chat', messenger = 'messenger', gbm = 'gbm' }

	export enum Interaction_channel_enum_update_channel_status { closed = 'closed', inactive = 'inactive' }

	export enum Interaction_channel_invite_enum_action { accept = 'accept', decline = 'decline' }

	export enum Interaction_channel_invite_enum_type { taskrouter = 'taskrouter' }

	export enum Interaction_channel_participant_enum_status { closed = 'closed', wrapup = 'wrapup' }

	export enum Interaction_channel_participant_enum_type { supervisor = 'supervisor', customer = 'customer', external = 'external', agent = 'agent', unknown = 'unknown' }

	export enum Provisioning_status_enum_status { active = 'active', 'in-progress' = 'in-progress', 'not-configured' = 'not-configured', failed = 'failed' }

	export enum Web_channel_enum_chat_status { inactive = 'inactive' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get v1/Channels
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListChannelReturn} OK
		 */
		ListChannel(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListChannelReturn> {
			return this.http.get<ListChannelReturn>(this.baseUri + 'v1/Channels?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Channels/{Sid}
		 * @param {string} Sid The SID of the Flex chat channel resource to delete.
		 * @return {void} 
		 */
		DeleteChannel(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Channels/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Channels/{Sid}
		 * @param {string} Sid The SID of the Flex chat channel resource to fetch.
		 * @return {Flexv1channel} OK
		 */
		FetchChannel(Sid: string): Observable<Flexv1channel> {
			return this.http.get<Flexv1channel>(this.baseUri + 'v1/Channels/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Configuration
		 * @param {string} UiVersion The Pinned UI version of the Configuration resource to fetch.
		 * @return {Flexv1configuration} OK
		 */
		FetchConfiguration(UiVersion: string | null | undefined): Observable<Flexv1configuration> {
			return this.http.get<Flexv1configuration>(this.baseUri + 'v1/Configuration?UiVersion=' + (UiVersion == null ? '' : encodeURIComponent(UiVersion)), {});
		}

		/**
		 * Get v1/FlexFlows
		 * @param {string} FriendlyName The `friendly_name` of the Flex Flow resources to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListFlexFlowReturn} OK
		 */
		ListFlexFlow(FriendlyName: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListFlexFlowReturn> {
			return this.http.get<ListFlexFlowReturn>(this.baseUri + 'v1/FlexFlows?FriendlyName=' + (FriendlyName == null ? '' : encodeURIComponent(FriendlyName)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/FlexFlows/{Sid}
		 * @param {string} Sid The SID of the Flex Flow resource to delete.
		 * @return {void} 
		 */
		DeleteFlexFlow(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/FlexFlows/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/FlexFlows/{Sid}
		 * @param {string} Sid The SID of the Flex Flow resource to fetch.
		 * @return {Flexv1flex_flow} OK
		 */
		FetchFlexFlow(Sid: string): Observable<Flexv1flex_flow> {
			return this.http.get<Flexv1flex_flow>(this.baseUri + 'v1/FlexFlows/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * To get conversation with segment id
		 * Get v1/Insights/Conversations
		 * @param {string} SegmentId Unique Id of the segment for which conversation details needs to be fetched
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListInsightsConversationsReturn} OK
		 */
		ListInsightsConversations(SegmentId: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListInsightsConversationsReturn> {
			return this.http.get<ListInsightsConversationsReturn>(this.baseUri + 'v1/Insights/Conversations?SegmentId=' + (SegmentId == null ? '' : encodeURIComponent(SegmentId)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get assessments done for a conversation by logged in user
		 * Get v1/Insights/QualityManagement/Assessments
		 * @param {string} SegmentId The id of the segment.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListInsightsAssessmentsReturn} OK
		 */
		ListInsightsAssessments(SegmentId: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListInsightsAssessmentsReturn> {
			return this.http.get<ListInsightsAssessmentsReturn>(this.baseUri + 'v1/Insights/QualityManagement/Assessments?SegmentId=' + (SegmentId == null ? '' : encodeURIComponent(SegmentId)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * To create a comment assessment for a conversation
		 * Get v1/Insights/QualityManagement/Assessments/Comments
		 * @param {string} SegmentId The id of the segment.
		 * @param {string} AgentId The id of the agent.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListInsightsAssessmentsCommentReturn} OK
		 */
		ListInsightsAssessmentsComment(SegmentId: string | null | undefined, AgentId: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListInsightsAssessmentsCommentReturn> {
			return this.http.get<ListInsightsAssessmentsCommentReturn>(this.baseUri + 'v1/Insights/QualityManagement/Assessments/Comments?SegmentId=' + (SegmentId == null ? '' : encodeURIComponent(SegmentId)) + '&AgentId=' + (AgentId == null ? '' : encodeURIComponent(AgentId)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * To get all the categories
		 * Get v1/Insights/QualityManagement/Categories
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListInsightsQuestionnairesCategoryReturn} OK
		 */
		ListInsightsQuestionnairesCategory(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListInsightsQuestionnairesCategoryReturn> {
			return this.http.get<ListInsightsQuestionnairesCategoryReturn>(this.baseUri + 'v1/Insights/QualityManagement/Categories?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Insights/QualityManagement/Categories/{CategorySid}
		 * @param {string} CategorySid The SID of the category to be deleted
		 * @return {void} 
		 */
		DeleteInsightsQuestionnairesCategory(CategorySid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Insights/QualityManagement/Categories/' + (CategorySid == null ? '' : encodeURIComponent(CategorySid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * To get all questionnaires with questions
		 * Get v1/Insights/QualityManagement/Questionnaires
		 * @param {boolean} IncludeInactive Flag indicating whether to include inactive questionnaires or not
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListInsightsQuestionnairesReturn} OK
		 */
		ListInsightsQuestionnaires(IncludeInactive: boolean | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListInsightsQuestionnairesReturn> {
			return this.http.get<ListInsightsQuestionnairesReturn>(this.baseUri + 'v1/Insights/QualityManagement/Questionnaires?IncludeInactive=' + IncludeInactive + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * To delete the questionnaire
		 * Delete v1/Insights/QualityManagement/Questionnaires/{QuestionnaireSid}
		 * @param {string} QuestionnaireSid The SID of the questionnaire
		 * @return {void} 
		 */
		DeleteInsightsQuestionnaires(QuestionnaireSid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Insights/QualityManagement/Questionnaires/' + (QuestionnaireSid == null ? '' : encodeURIComponent(QuestionnaireSid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * To get the Questionnaire Detail
		 * Get v1/Insights/QualityManagement/Questionnaires/{QuestionnaireSid}
		 * @param {string} QuestionnaireSid The SID of the questionnaire
		 * @return {Flexv1insights_questionnaires} OK
		 */
		FetchInsightsQuestionnaires(QuestionnaireSid: string): Observable<Flexv1insights_questionnaires> {
			return this.http.get<Flexv1insights_questionnaires>(this.baseUri + 'v1/Insights/QualityManagement/Questionnaires/' + (QuestionnaireSid == null ? '' : encodeURIComponent(QuestionnaireSid)), {});
		}

		/**
		 * To get all the question for the given categories
		 * Get v1/Insights/QualityManagement/Questions
		 * @param {Array<string>} CategorySid The list of category SIDs
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListInsightsQuestionnairesQuestionReturn} OK
		 */
		ListInsightsQuestionnairesQuestion(CategorySid: Array<string> | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListInsightsQuestionnairesQuestionReturn> {
			return this.http.get<ListInsightsQuestionnairesQuestionReturn>(this.baseUri + 'v1/Insights/QualityManagement/Questions?' + CategorySid?.map(z => `CategorySid=${encodeURIComponent(z)}`).join('&') + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Insights/QualityManagement/Questions/{QuestionSid}
		 * @param {string} QuestionSid The SID of the question
		 * @return {void} 
		 */
		DeleteInsightsQuestionnairesQuestion(QuestionSid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Insights/QualityManagement/Questions/' + (QuestionSid == null ? '' : encodeURIComponent(QuestionSid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * To get the Answer Set Settings for an Account
		 * Get v1/Insights/QualityManagement/Settings/AnswerSets
		 * @return {Flexv1insights_settings_answersets} OK
		 */
		FetchInsightsSettingsAnswersets(): Observable<Flexv1insights_settings_answersets> {
			return this.http.get<Flexv1insights_settings_answersets>(this.baseUri + 'v1/Insights/QualityManagement/Settings/AnswerSets', {});
		}

		/**
		 * To get the Comment Settings for an Account
		 * Get v1/Insights/QualityManagement/Settings/CommentTags
		 * @return {Flexv1insights_settings_comment} OK
		 */
		FetchInsightsSettingsComment(): Observable<Flexv1insights_settings_comment> {
			return this.http.get<Flexv1insights_settings_comment>(this.baseUri + 'v1/Insights/QualityManagement/Settings/CommentTags', {});
		}

		/**
		 * To get segments for given reservation Ids
		 * Get v1/Insights/Segments
		 * @param {string} SegmentId To unique id of the segment
		 * @param {Array<string>} ReservationId The list of reservation Ids
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListInsightsSegmentsReturn} OK
		 */
		ListInsightsSegments(SegmentId: string | null | undefined, ReservationId: Array<string> | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListInsightsSegmentsReturn> {
			return this.http.get<ListInsightsSegmentsReturn>(this.baseUri + 'v1/Insights/Segments?SegmentId=' + (SegmentId == null ? '' : encodeURIComponent(SegmentId)) + '&' + ReservationId?.map(z => `ReservationId=${encodeURIComponent(z)}`).join('&') + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * To obtain session details for fetching reports and dashboards
		 * Post v1/Insights/Session
		 * @return {void} 
		 */
		CreateInsightsSession(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/Insights/Session', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user
		 * Get v1/Insights/UserRoles
		 * @return {Flexv1insights_user_roles} OK
		 */
		FetchInsightsUserRoles(): Observable<Flexv1insights_user_roles> {
			return this.http.get<Flexv1insights_user_roles>(this.baseUri + 'v1/Insights/UserRoles', {});
		}

		/**
		 * List all Channels for an Interaction.
		 * Get v1/Interactions/{InteractionSid}/Channels
		 * @param {string} InteractionSid The unique string created by Twilio to identify an Interaction resource, prefixed with KD.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListInteractionChannelReturn} OK
		 */
		ListInteractionChannel(InteractionSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListInteractionChannelReturn> {
			return this.http.get<ListInteractionChannelReturn>(this.baseUri + 'v1/Interactions/' + (InteractionSid == null ? '' : encodeURIComponent(InteractionSid)) + '/Channels&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * List all Invites for a Channel.
		 * Get v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Invites
		 * @param {string} InteractionSid The Interaction SID for this Channel.
		 * @param {string} ChannelSid The Channel SID for this Participant.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListInteractionChannelInviteReturn} OK
		 */
		ListInteractionChannelInvite(InteractionSid: string, ChannelSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListInteractionChannelInviteReturn> {
			return this.http.get<ListInteractionChannelInviteReturn>(this.baseUri + 'v1/Interactions/' + (InteractionSid == null ? '' : encodeURIComponent(InteractionSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Invites&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * List all Participants for a Channel.
		 * Get v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants
		 * @param {string} InteractionSid The Interaction Sid for this channel.
		 * @param {string} ChannelSid The Channel Sid for this Participant.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListInteractionChannelParticipantReturn} OK
		 */
		ListInteractionChannelParticipant(InteractionSid: string, ChannelSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListInteractionChannelParticipantReturn> {
			return this.http.get<ListInteractionChannelParticipantReturn>(this.baseUri + 'v1/Interactions/' + (InteractionSid == null ? '' : encodeURIComponent(InteractionSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Participants&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Fetch a Channel for an Interaction.
		 * Get v1/Interactions/{InteractionSid}/Channels/{Sid}
		 * @param {string} InteractionSid The unique string created by Twilio to identify an Interaction resource, prefixed with KD.
		 * @param {string} Sid The unique string created by Twilio to identify an Interaction Channel resource, prefixed with UO.
		 * @return {Flexv1interactioninteraction_channel} OK
		 */
		FetchInteractionChannel(InteractionSid: string, Sid: string): Observable<Flexv1interactioninteraction_channel> {
			return this.http.get<Flexv1interactioninteraction_channel>(this.baseUri + 'v1/Interactions/' + (InteractionSid == null ? '' : encodeURIComponent(InteractionSid)) + '/Channels/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Interactions/{Sid}
		 * @param {string} Sid The SID of the Interaction resource to fetch.
		 * @return {Flexv1interaction} OK
		 */
		FetchInteraction(Sid: string): Observable<Flexv1interaction> {
			return this.http.get<Flexv1interaction>(this.baseUri + 'v1/Interactions/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/WebChannels
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListWebChannelReturn} OK
		 */
		ListWebChannel(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListWebChannelReturn> {
			return this.http.get<ListWebChannelReturn>(this.baseUri + 'v1/WebChannels?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/WebChannels/{Sid}
		 * @param {string} Sid The SID of the WebChannel resource to delete.
		 * @return {void} 
		 */
		DeleteWebChannel(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/WebChannels/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/WebChannels/{Sid}
		 * @param {string} Sid The SID of the WebChannel resource to fetch.
		 * @return {Flexv1web_channel} OK
		 */
		FetchWebChannel(Sid: string): Observable<Flexv1web_channel> {
			return this.http.get<Flexv1web_channel>(this.baseUri + 'v1/WebChannels/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/account/provision/status
		 * @return {Flexv1provisioning_status} OK
		 */
		FetchProvisioningStatus(): Observable<Flexv1provisioning_status> {
			return this.http.get<Flexv1provisioning_status>(this.baseUri + 'v1/account/provision/status', {});
		}
	}

	export interface ListChannelReturn {
		flex_chat_channels?: Array<Flexv1channel>;
		meta?: ListChannelReturnMeta;
	}
	export interface ListChannelReturnFormProperties {
	}
	export function CreateListChannelReturnFormGroup() {
		return new FormGroup<ListChannelReturnFormProperties>({
		});

	}

	export interface ListChannelReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListChannelReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListChannelReturnMetaFormGroup() {
		return new FormGroup<ListChannelReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFlexFlowReturn {
		flex_flows?: Array<Flexv1flex_flow>;
		meta?: ListFlexFlowReturnMeta;
	}
	export interface ListFlexFlowReturnFormProperties {
	}
	export function CreateListFlexFlowReturnFormGroup() {
		return new FormGroup<ListFlexFlowReturnFormProperties>({
		});

	}

	export interface ListFlexFlowReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListFlexFlowReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListFlexFlowReturnMetaFormGroup() {
		return new FormGroup<ListFlexFlowReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInsightsConversationsReturn {
		conversations?: Array<Flexv1insights_conversations>;
		meta?: ListInsightsConversationsReturnMeta;
	}
	export interface ListInsightsConversationsReturnFormProperties {
	}
	export function CreateListInsightsConversationsReturnFormGroup() {
		return new FormGroup<ListInsightsConversationsReturnFormProperties>({
		});

	}

	export interface ListInsightsConversationsReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListInsightsConversationsReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListInsightsConversationsReturnMetaFormGroup() {
		return new FormGroup<ListInsightsConversationsReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInsightsAssessmentsReturn {
		assessments?: Array<Flexv1insights_assessments>;
		meta?: ListInsightsAssessmentsReturnMeta;
	}
	export interface ListInsightsAssessmentsReturnFormProperties {
	}
	export function CreateListInsightsAssessmentsReturnFormGroup() {
		return new FormGroup<ListInsightsAssessmentsReturnFormProperties>({
		});

	}

	export interface ListInsightsAssessmentsReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListInsightsAssessmentsReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListInsightsAssessmentsReturnMetaFormGroup() {
		return new FormGroup<ListInsightsAssessmentsReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInsightsAssessmentsCommentReturn {
		comments?: Array<Flexv1insights_assessments_comment>;
		meta?: ListInsightsAssessmentsCommentReturnMeta;
	}
	export interface ListInsightsAssessmentsCommentReturnFormProperties {
	}
	export function CreateListInsightsAssessmentsCommentReturnFormGroup() {
		return new FormGroup<ListInsightsAssessmentsCommentReturnFormProperties>({
		});

	}

	export interface ListInsightsAssessmentsCommentReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListInsightsAssessmentsCommentReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListInsightsAssessmentsCommentReturnMetaFormGroup() {
		return new FormGroup<ListInsightsAssessmentsCommentReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInsightsQuestionnairesCategoryReturn {
		categories?: Array<Flexv1insights_questionnaires_category>;
		meta?: ListInsightsQuestionnairesCategoryReturnMeta;
	}
	export interface ListInsightsQuestionnairesCategoryReturnFormProperties {
	}
	export function CreateListInsightsQuestionnairesCategoryReturnFormGroup() {
		return new FormGroup<ListInsightsQuestionnairesCategoryReturnFormProperties>({
		});

	}

	export interface ListInsightsQuestionnairesCategoryReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListInsightsQuestionnairesCategoryReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListInsightsQuestionnairesCategoryReturnMetaFormGroup() {
		return new FormGroup<ListInsightsQuestionnairesCategoryReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInsightsQuestionnairesReturn {
		meta?: ListInsightsQuestionnairesReturnMeta;
		questionnaires?: Array<Flexv1insights_questionnaires>;
	}
	export interface ListInsightsQuestionnairesReturnFormProperties {
	}
	export function CreateListInsightsQuestionnairesReturnFormGroup() {
		return new FormGroup<ListInsightsQuestionnairesReturnFormProperties>({
		});

	}

	export interface ListInsightsQuestionnairesReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListInsightsQuestionnairesReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListInsightsQuestionnairesReturnMetaFormGroup() {
		return new FormGroup<ListInsightsQuestionnairesReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInsightsQuestionnairesQuestionReturn {
		meta?: ListInsightsQuestionnairesQuestionReturnMeta;
		questions?: Array<Flexv1insights_questionnaires_question>;
	}
	export interface ListInsightsQuestionnairesQuestionReturnFormProperties {
	}
	export function CreateListInsightsQuestionnairesQuestionReturnFormGroup() {
		return new FormGroup<ListInsightsQuestionnairesQuestionReturnFormProperties>({
		});

	}

	export interface ListInsightsQuestionnairesQuestionReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListInsightsQuestionnairesQuestionReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListInsightsQuestionnairesQuestionReturnMetaFormGroup() {
		return new FormGroup<ListInsightsQuestionnairesQuestionReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInsightsSegmentsReturn {
		meta?: ListInsightsSegmentsReturnMeta;
		segments?: Array<Flexv1insights_segments>;
	}
	export interface ListInsightsSegmentsReturnFormProperties {
	}
	export function CreateListInsightsSegmentsReturnFormGroup() {
		return new FormGroup<ListInsightsSegmentsReturnFormProperties>({
		});

	}

	export interface ListInsightsSegmentsReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListInsightsSegmentsReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListInsightsSegmentsReturnMetaFormGroup() {
		return new FormGroup<ListInsightsSegmentsReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInteractionChannelReturn {
		channels?: Array<Flexv1interactioninteraction_channel>;
		meta?: ListInteractionChannelReturnMeta;
	}
	export interface ListInteractionChannelReturnFormProperties {
	}
	export function CreateListInteractionChannelReturnFormGroup() {
		return new FormGroup<ListInteractionChannelReturnFormProperties>({
		});

	}

	export interface ListInteractionChannelReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListInteractionChannelReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListInteractionChannelReturnMetaFormGroup() {
		return new FormGroup<ListInteractionChannelReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInteractionChannelInviteReturn {
		invites?: Array<Flexv1interactioninteraction_channelinteraction_channel_invite>;
		meta?: ListInteractionChannelInviteReturnMeta;
	}
	export interface ListInteractionChannelInviteReturnFormProperties {
	}
	export function CreateListInteractionChannelInviteReturnFormGroup() {
		return new FormGroup<ListInteractionChannelInviteReturnFormProperties>({
		});

	}

	export interface ListInteractionChannelInviteReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListInteractionChannelInviteReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListInteractionChannelInviteReturnMetaFormGroup() {
		return new FormGroup<ListInteractionChannelInviteReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInteractionChannelParticipantReturn {
		meta?: ListInteractionChannelParticipantReturnMeta;
		participants?: Array<Flexv1interactioninteraction_channelinteraction_channel_participant>;
	}
	export interface ListInteractionChannelParticipantReturnFormProperties {
	}
	export function CreateListInteractionChannelParticipantReturnFormGroup() {
		return new FormGroup<ListInteractionChannelParticipantReturnFormProperties>({
		});

	}

	export interface ListInteractionChannelParticipantReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListInteractionChannelParticipantReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListInteractionChannelParticipantReturnMetaFormGroup() {
		return new FormGroup<ListInteractionChannelParticipantReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWebChannelReturn {
		flex_chat_channels?: Array<Flexv1web_channel>;
		meta?: ListWebChannelReturnMeta;
	}
	export interface ListWebChannelReturnFormProperties {
	}
	export function CreateListWebChannelReturnFormGroup() {
		return new FormGroup<ListWebChannelReturnFormProperties>({
		});

	}

	export interface ListWebChannelReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListWebChannelReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListWebChannelReturnMetaFormGroup() {
		return new FormGroup<ListWebChannelReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

