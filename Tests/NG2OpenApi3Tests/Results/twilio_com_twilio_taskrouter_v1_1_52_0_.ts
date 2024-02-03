import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum Task_enum_status { pending = 'pending', reserved = 'reserved', assigned = 'assigned', canceled = 'canceled', completed = 'completed', wrapping = 'wrapping' }

	export enum Task_queue_enum_task_order { FIFO = 'FIFO', LIFO = 'LIFO' }

	export enum Task_reservation_enum_call_status { initiated = 'initiated', ringing = 'ringing', answered = 'answered', completed = 'completed' }

	export enum Task_reservation_enum_conference_event { start = 'start', end = 'end', join = 'join', leave = 'leave', mute = 'mute', hold = 'hold', speaker = 'speaker' }

	export enum Task_reservation_enum_status { pending = 'pending', accepted = 'accepted', rejected = 'rejected', timeout = 'timeout', canceled = 'canceled', rescinded = 'rescinded', wrapping = 'wrapping', completed = 'completed' }

	export enum Task_reservation_enum_supervisor_mode { monitor = 'monitor', whisper = 'whisper', barge = 'barge' }

	export interface Taskrouterv1workspace {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workspace resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The name of the default activity. */
		default_activity_name?: string | null;

		/**
		 * The SID of the Activity that will be used when new Workers are created in the Workspace.
		 * Max length: 34
		 * Min length: 34
		 */
		default_activity_sid?: string | null;

		/** The URL we call when an event occurs. If provided, the Workspace will publish events to this URL, for example, to collect data for reporting. See [Workspace Events](https://www.twilio.com/docs/taskrouter/api/event) for more information. This parameter supports Twilio's [Webhooks (HTTP callbacks) Connection Overrides](https://www.twilio.com/docs/usage/webhooks/webhooks-connection-overrides). */
		event_callback_url?: string | null;

		/** The list of Workspace events for which to call `event_callback_url`. For example, if `EventsFilter=task.created, task.canceled, worker.activity.update`, then TaskRouter will call event_callback_url only when a task is created, canceled, or a Worker activity is updated. */
		events_filter?: string | null;

		/** The string that you assigned to describe the Workspace resource. For example `Customer Support` or `2014 Election Campaign`. */
		friendly_name?: string | null;

		/** The URLs of related resources. */
		links?: string | null;

		/** Whether multi-tasking is enabled. The default is `true`, which enables multi-tasking. Multi-tasking allows Workers to handle multiple Tasks simultaneously. When enabled (`true`), each Worker can receive parallel reservations up to the per-channel maximums defined in the Workers section. In single-tasking each Worker would only receive a new reservation when the previous task is completed. Learn more at [Multitasking](https://www.twilio.com/docs/taskrouter/multitasking). */
		multi_task_enabled?: boolean | null;
		prioritize_queue_order?: Task_queue_enum_task_order | null;

		/**
		 * The unique string that we created to identify the Workspace resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The name of the timeout activity. */
		timeout_activity_name?: string | null;

		/**
		 * The SID of the Activity that will be assigned to a Worker when a Task reservation times out without a response.
		 * Max length: 34
		 * Min length: 34
		 */
		timeout_activity_sid?: string | null;

		/** The absolute URL of the Workspace resource. */
		url?: string | null;
	}
	export interface Taskrouterv1workspaceFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workspace resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The name of the default activity. */
		default_activity_name: FormControl<string | null | undefined>,

		/**
		 * The SID of the Activity that will be used when new Workers are created in the Workspace.
		 * Max length: 34
		 * Min length: 34
		 */
		default_activity_sid: FormControl<string | null | undefined>,

		/** The URL we call when an event occurs. If provided, the Workspace will publish events to this URL, for example, to collect data for reporting. See [Workspace Events](https://www.twilio.com/docs/taskrouter/api/event) for more information. This parameter supports Twilio's [Webhooks (HTTP callbacks) Connection Overrides](https://www.twilio.com/docs/usage/webhooks/webhooks-connection-overrides). */
		event_callback_url: FormControl<string | null | undefined>,

		/** The list of Workspace events for which to call `event_callback_url`. For example, if `EventsFilter=task.created, task.canceled, worker.activity.update`, then TaskRouter will call event_callback_url only when a task is created, canceled, or a Worker activity is updated. */
		events_filter: FormControl<string | null | undefined>,

		/** The string that you assigned to describe the Workspace resource. For example `Customer Support` or `2014 Election Campaign`. */
		friendly_name: FormControl<string | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/** Whether multi-tasking is enabled. The default is `true`, which enables multi-tasking. Multi-tasking allows Workers to handle multiple Tasks simultaneously. When enabled (`true`), each Worker can receive parallel reservations up to the per-channel maximums defined in the Workers section. In single-tasking each Worker would only receive a new reservation when the previous task is completed. Learn more at [Multitasking](https://www.twilio.com/docs/taskrouter/multitasking). */
		multi_task_enabled: FormControl<boolean | null | undefined>,
		prioritize_queue_order: FormControl<Task_queue_enum_task_order | null | undefined>,

		/**
		 * The unique string that we created to identify the Workspace resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The name of the timeout activity. */
		timeout_activity_name: FormControl<string | null | undefined>,

		/**
		 * The SID of the Activity that will be assigned to a Worker when a Task reservation times out without a response.
		 * Max length: 34
		 * Min length: 34
		 */
		timeout_activity_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Workspace resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceFormGroup() {
		return new FormGroup<Taskrouterv1workspaceFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			default_activity_name: new FormControl<string | null | undefined>(undefined),
			default_activity_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WA[0-9a-fA-F]{32}$')]),
			event_callback_url: new FormControl<string | null | undefined>(undefined),
			events_filter: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			multi_task_enabled: new FormControl<boolean | null | undefined>(undefined),
			prioritize_queue_order: new FormControl<Task_queue_enum_task_order | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
			timeout_activity_name: new FormControl<string | null | undefined>(undefined),
			timeout_activity_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WA[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Taskrouterv1workspaceactivity {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Activity resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** Whether the Worker is eligible to receive a Task when it occupies the Activity. A value of `true`, `1`, or `yes` indicates the Activity is available. All other values indicate that it is not. The value cannot be changed after the Activity is created. */
		available?: boolean | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the Activity resource. */
		friendly_name?: string | null;
		links?: string | null;

		/**
		 * The unique string that we created to identify the Activity resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Activity resource. */
		url?: string | null;

		/**
		 * The SID of the Workspace that contains the Activity.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceactivityFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Activity resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Whether the Worker is eligible to receive a Task when it occupies the Activity. A value of `true`, `1`, or `yes` indicates the Activity is available. All other values indicate that it is not. The value cannot be changed after the Activity is created. */
		available: FormControl<boolean | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the Activity resource. */
		friendly_name: FormControl<string | null | undefined>,
		links: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Activity resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Activity resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the Activity.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceactivityFormGroup() {
		return new FormGroup<Taskrouterv1workspaceactivityFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			available: new FormControl<boolean | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WA[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceevent {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Event resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the resource that triggered the event.
		 * Max length: 34
		 * Min length: 34
		 */
		actor_sid?: string | null;

		/** The type of resource that triggered the event. */
		actor_type?: string | null;

		/** The absolute URL of the resource that triggered the event. */
		actor_url?: string | null;

		/** A description of the event. */
		description?: string | null;

		/** Data about the event. For more information, see [Event types](https://www.twilio.com/docs/taskrouter/api/event#event-types). */
		event_data?: any;

		/** The time the event was sent, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		event_date?: Date | null;

		/** The time the event was sent in milliseconds. */
		event_date_ms?: number | null;

		/** The identifier for the event. */
		event_type?: string | null;

		/**
		 * The SID of the object the event is most relevant to, such as a TaskSid, ReservationSid, or a  WorkerSid.
		 * Max length: 34
		 * Min length: 34
		 */
		resource_sid?: string | null;

		/** The type of object the event is most relevant to, such as a Task, Reservation, or a Worker). */
		resource_type?: string | null;

		/** The URL of the resource the event is most relevant to. */
		resource_url?: string | null;

		/**
		 * The unique string that we created to identify the Event resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** Where the Event originated. */
		source?: string | null;

		/** The IP from which the Event originated. */
		source_ip_address?: string | null;

		/** The absolute URL of the Event resource. */
		url?: string | null;

		/**
		 * The SID of the Workspace that contains the Event.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceeventFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Event resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the resource that triggered the event.
		 * Max length: 34
		 * Min length: 34
		 */
		actor_sid: FormControl<string | null | undefined>,

		/** The type of resource that triggered the event. */
		actor_type: FormControl<string | null | undefined>,

		/** The absolute URL of the resource that triggered the event. */
		actor_url: FormControl<string | null | undefined>,

		/** A description of the event. */
		description: FormControl<string | null | undefined>,

		/** Data about the event. For more information, see [Event types](https://www.twilio.com/docs/taskrouter/api/event#event-types). */
		event_data: FormControl<any | null | undefined>,

		/** The time the event was sent, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		event_date: FormControl<Date | null | undefined>,

		/** The time the event was sent in milliseconds. */
		event_date_ms: FormControl<number | null | undefined>,

		/** The identifier for the event. */
		event_type: FormControl<string | null | undefined>,

		/**
		 * The SID of the object the event is most relevant to, such as a TaskSid, ReservationSid, or a  WorkerSid.
		 * Max length: 34
		 * Min length: 34
		 */
		resource_sid: FormControl<string | null | undefined>,

		/** The type of object the event is most relevant to, such as a Task, Reservation, or a Worker). */
		resource_type: FormControl<string | null | undefined>,

		/** The URL of the resource the event is most relevant to. */
		resource_url: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Event resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** Where the Event originated. */
		source: FormControl<string | null | undefined>,

		/** The IP from which the Event originated. */
		source_ip_address: FormControl<string | null | undefined>,

		/** The absolute URL of the Event resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the Event.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceeventFormGroup() {
		return new FormGroup<Taskrouterv1workspaceeventFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			actor_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^[a-zA-Z]{2}[0-9a-fA-F]{32}$')]),
			actor_type: new FormControl<string | null | undefined>(undefined),
			actor_url: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			event_data: new FormControl<any | null | undefined>(undefined),
			event_date: new FormControl<Date | null | undefined>(undefined),
			event_date_ms: new FormControl<number | null | undefined>(undefined),
			event_type: new FormControl<string | null | undefined>(undefined),
			resource_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^[a-zA-Z]{2}[0-9a-fA-F]{32}$')]),
			resource_type: new FormControl<string | null | undefined>(undefined),
			resource_url: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^EV[0-9a-fA-F]{32}$')]),
			source: new FormControl<string | null | undefined>(undefined),
			source_ip_address: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspacetask {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Task resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** An object that contains the [Add-on](https://www.twilio.com/docs/add-ons) data for all installed Add-ons. */
		addons?: string | null;

		/** The number of seconds since the Task was created. */
		age?: number | null;
		assignment_status?: Task_enum_status | null;

		/** The JSON string with custom attributes of the work. **Note** If this property has been assigned a value, it will only be displayed in FETCH action that returns a single resource. Otherwise, it will be null. */
		attributes?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The URLs of related resources. */
		links?: string | null;

		/** The current priority score of the Task as assigned to a Worker by the workflow. Tasks with higher priority values will be assigned before Tasks with lower values. */
		priority?: number | null;

		/** The reason the Task was canceled or completed, if applicable. */
		reason?: string | null;

		/**
		 * The unique string that we created to identify the Task resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/**
		 * The SID of the TaskChannel.
		 * Max length: 34
		 * Min length: 34
		 */
		task_channel_sid?: string | null;

		/** The unique name of the TaskChannel. */
		task_channel_unique_name?: string | null;

		/** The date and time in GMT when the Task entered the TaskQueue, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		task_queue_entered_date?: Date | null;

		/** The friendly name of the TaskQueue. */
		task_queue_friendly_name?: string | null;

		/**
		 * The SID of the TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		task_queue_sid?: string | null;

		/** The amount of time in seconds that the Task can live before being assigned. */
		timeout?: number | null;

		/** The absolute URL of the Task resource. */
		url?: string | null;

		/** The date and time in GMT indicating the ordering for routing of the Task specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		virtual_start_time?: Date | null;

		/** The friendly name of the Workflow that is controlling the Task. */
		workflow_friendly_name?: string | null;

		/**
		 * The SID of the Workflow that is controlling the Task.
		 * Max length: 34
		 * Min length: 34
		 */
		workflow_sid?: string | null;

		/**
		 * The SID of the Workspace that contains the Task.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspacetaskFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Task resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** An object that contains the [Add-on](https://www.twilio.com/docs/add-ons) data for all installed Add-ons. */
		addons: FormControl<string | null | undefined>,

		/** The number of seconds since the Task was created. */
		age: FormControl<number | null | undefined>,
		assignment_status: FormControl<Task_enum_status | null | undefined>,

		/** The JSON string with custom attributes of the work. **Note** If this property has been assigned a value, it will only be displayed in FETCH action that returns a single resource. Otherwise, it will be null. */
		attributes: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/** The current priority score of the Task as assigned to a Worker by the workflow. Tasks with higher priority values will be assigned before Tasks with lower values. */
		priority: FormControl<number | null | undefined>,

		/** The reason the Task was canceled or completed, if applicable. */
		reason: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Task resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the TaskChannel.
		 * Max length: 34
		 * Min length: 34
		 */
		task_channel_sid: FormControl<string | null | undefined>,

		/** The unique name of the TaskChannel. */
		task_channel_unique_name: FormControl<string | null | undefined>,

		/** The date and time in GMT when the Task entered the TaskQueue, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		task_queue_entered_date: FormControl<Date | null | undefined>,

		/** The friendly name of the TaskQueue. */
		task_queue_friendly_name: FormControl<string | null | undefined>,

		/**
		 * The SID of the TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		task_queue_sid: FormControl<string | null | undefined>,

		/** The amount of time in seconds that the Task can live before being assigned. */
		timeout: FormControl<number | null | undefined>,

		/** The absolute URL of the Task resource. */
		url: FormControl<string | null | undefined>,

		/** The date and time in GMT indicating the ordering for routing of the Task specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		virtual_start_time: FormControl<Date | null | undefined>,

		/** The friendly name of the Workflow that is controlling the Task. */
		workflow_friendly_name: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workflow that is controlling the Task.
		 * Max length: 34
		 * Min length: 34
		 */
		workflow_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the Task.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspacetaskFormGroup() {
		return new FormGroup<Taskrouterv1workspacetaskFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			addons: new FormControl<string | null | undefined>(undefined),
			age: new FormControl<number | null | undefined>(undefined),
			assignment_status: new FormControl<Task_enum_status | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WT[0-9a-fA-F]{32}$')]),
			task_channel_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^TC[0-9a-fA-F]{32}$')]),
			task_channel_unique_name: new FormControl<string | null | undefined>(undefined),
			task_queue_entered_date: new FormControl<Date | null | undefined>(undefined),
			task_queue_friendly_name: new FormControl<string | null | undefined>(undefined),
			task_queue_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WQ[0-9a-fA-F]{32}$')]),
			timeout: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			virtual_start_time: new FormControl<Date | null | undefined>(undefined),
			workflow_friendly_name: new FormControl<string | null | undefined>(undefined),
			workflow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WW[0-9a-fA-F]{32}$')]),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspacetasktask_reservation {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskReservation resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The URLs of related resources. */
		links?: string | null;
		reservation_status?: Task_reservation_enum_status | null;

		/**
		 * The unique string that we created to identify the TaskReservation resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/**
		 * The SID of the reserved Task resource.
		 * Max length: 34
		 * Min length: 34
		 */
		task_sid?: string | null;

		/** The absolute URL of the TaskReservation reservation. */
		url?: string | null;

		/** The `friendly_name` of the Worker that is reserved. */
		worker_name?: string | null;

		/**
		 * The SID of the reserved Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		worker_sid?: string | null;

		/**
		 * The SID of the Workspace that this task is contained within.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspacetasktask_reservationFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskReservation resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,
		reservation_status: FormControl<Task_reservation_enum_status | null | undefined>,

		/**
		 * The unique string that we created to identify the TaskReservation resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the reserved Task resource.
		 * Max length: 34
		 * Min length: 34
		 */
		task_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the TaskReservation reservation. */
		url: FormControl<string | null | undefined>,

		/** The `friendly_name` of the Worker that is reserved. */
		worker_name: FormControl<string | null | undefined>,

		/**
		 * The SID of the reserved Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		worker_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that this task is contained within.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspacetasktask_reservationFormGroup() {
		return new FormGroup<Taskrouterv1workspacetasktask_reservationFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			reservation_status: new FormControl<Task_reservation_enum_status | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WR[0-9a-fA-F]{32}$')]),
			task_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WT[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			worker_name: new FormControl<string | null | undefined>(undefined),
			worker_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WK[0-9a-fA-F]{32}$')]),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspacetask_channel {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Task Channel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** Whether the Task Channel will prioritize Workers that have been idle. When `true`, Workers that have been idle the longest are prioritized. */
		channel_optimized_routing?: boolean | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/** The URLs of related resources. */
		links?: string | null;

		/**
		 * The unique string that we created to identify the Task Channel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** An application-defined string that uniquely identifies the Task Channel, such as `voice` or `sms`. */
		unique_name?: string | null;

		/** The absolute URL of the Task Channel resource. */
		url?: string | null;

		/**
		 * The SID of the Workspace that contains the Task Channel.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspacetask_channelFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Task Channel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Whether the Task Channel will prioritize Workers that have been idle. When `true`, Workers that have been idle the longest are prioritized. */
		channel_optimized_routing: FormControl<boolean | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Task Channel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** An application-defined string that uniquely identifies the Task Channel, such as `voice` or `sms`. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Task Channel resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the Task Channel.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspacetask_channelFormGroup() {
		return new FormGroup<Taskrouterv1workspacetask_channelFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			channel_optimized_routing: new FormControl<boolean | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^TC[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspacetask_queue {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The name of the Activity to assign Workers when a task is assigned for them. */
		assignment_activity_name?: string | null;

		/**
		 * The SID of the Activity to assign Workers when a task is assigned for them.
		 * Max length: 34
		 * Min length: 34
		 */
		assignment_activity_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/** The URLs of related resources. */
		links?: string | null;

		/** The maximum number of Workers to reserve for the assignment of a task in the queue. Can be an integer between 1 and 50, inclusive and defaults to 1. */
		max_reserved_workers?: number | null;

		/** The name of the Activity to assign Workers once a task is reserved for them. */
		reservation_activity_name?: string | null;

		/**
		 * The SID of the Activity to assign Workers once a task is reserved for them.
		 * Max length: 34
		 * Min length: 34
		 */
		reservation_activity_sid?: string | null;

		/**
		 * The unique string that we created to identify the TaskQueue resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** A string describing the Worker selection criteria for any Tasks that enter the TaskQueue. For example `'"language" == "spanish"'` If no TargetWorkers parameter is provided, Tasks will wait in the TaskQueue until they are either deleted or moved to another TaskQueue. Additional examples on how to describing Worker selection criteria below. Defaults to 1==1. */
		target_workers?: string | null;
		task_order?: Task_queue_enum_task_order | null;

		/** The absolute URL of the TaskQueue resource. */
		url?: string | null;

		/**
		 * The SID of the Workspace that contains the TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspacetask_queueFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The name of the Activity to assign Workers when a task is assigned for them. */
		assignment_activity_name: FormControl<string | null | undefined>,

		/**
		 * The SID of the Activity to assign Workers when a task is assigned for them.
		 * Max length: 34
		 * Min length: 34
		 */
		assignment_activity_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/** The maximum number of Workers to reserve for the assignment of a task in the queue. Can be an integer between 1 and 50, inclusive and defaults to 1. */
		max_reserved_workers: FormControl<number | null | undefined>,

		/** The name of the Activity to assign Workers once a task is reserved for them. */
		reservation_activity_name: FormControl<string | null | undefined>,

		/**
		 * The SID of the Activity to assign Workers once a task is reserved for them.
		 * Max length: 34
		 * Min length: 34
		 */
		reservation_activity_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the TaskQueue resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** A string describing the Worker selection criteria for any Tasks that enter the TaskQueue. For example `'"language" == "spanish"'` If no TargetWorkers parameter is provided, Tasks will wait in the TaskQueue until they are either deleted or moved to another TaskQueue. Additional examples on how to describing Worker selection criteria below. Defaults to 1==1. */
		target_workers: FormControl<string | null | undefined>,
		task_order: FormControl<Task_queue_enum_task_order | null | undefined>,

		/** The absolute URL of the TaskQueue resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspacetask_queueFormGroup() {
		return new FormGroup<Taskrouterv1workspacetask_queueFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assignment_activity_name: new FormControl<string | null | undefined>(undefined),
			assignment_activity_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WA[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			max_reserved_workers: new FormControl<number | null | undefined>(undefined),
			reservation_activity_name: new FormControl<string | null | undefined>(undefined),
			reservation_activity_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WA[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WQ[0-9a-fA-F]{32}$')]),
			target_workers: new FormControl<string | null | undefined>(undefined),
			task_order: new FormControl<Task_queue_enum_task_order | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspacetask_queuetask_queue_bulk_real_time_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/**
		 * The real-time statistics for each requested TaskQueue SID. `task_queue_data` returns the following attributes:
		 * `task_queue_sid`: The SID of the TaskQueue from which these statistics were calculated.
		 * `total_available_workers`: The total number of Workers available for Tasks in the TaskQueue.
		 * `total_eligible_workers`: The total number of Workers eligible for Tasks in the TaskQueue, regardless of their Activity state.
		 * `total_tasks`: The total number of Tasks.
		 * `longest_task_waiting_age`: The age of the longest waiting Task.
		 * `longest_task_waiting_sid`: The SID of the longest waiting Task.
		 * `tasks_by_status`: The number of Tasks grouped by their current status.
		 * `tasks_by_priority`: The number of Tasks grouped by priority.
		 * `activity_statistics`: The number of current Workers grouped by Activity.
		 */
		task_queue_data?: Array<string>;

		/** The number of TaskQueue statistics received in task_queue_data. */
		task_queue_response_count?: number | null;

		/** The absolute URL of the TaskQueue statistics resource. */
		url?: string | null;

		/**
		 * The SID of the Workspace that contains the TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspacetask_queuetask_queue_bulk_real_time_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The number of TaskQueue statistics received in task_queue_data. */
		task_queue_response_count: FormControl<number | null | undefined>,

		/** The absolute URL of the TaskQueue statistics resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspacetask_queuetask_queue_bulk_real_time_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspacetask_queuetask_queue_bulk_real_time_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			task_queue_response_count: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspacetask_queuetask_queue_cumulative_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The average time in seconds between Task creation and acceptance. */
		avg_task_acceptance_time?: number | null;

		/** The end of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		end_time?: Date | null;

		/** The total number of Reservations accepted for Tasks in the TaskQueue. */
		reservations_accepted?: number | null;

		/** The total number of Reservations canceled for Tasks in the TaskQueue. */
		reservations_canceled?: number | null;

		/** The total number of Reservations created for Tasks in the TaskQueue. */
		reservations_created?: number | null;

		/** The total number of Reservations rejected for Tasks in the TaskQueue. */
		reservations_rejected?: number | null;

		/** The total number of Reservations rescinded. */
		reservations_rescinded?: number | null;

		/** The total number of Reservations that timed out for Tasks in the TaskQueue. */
		reservations_timed_out?: number | null;

		/** A list of objects that describe the number of Tasks canceled and reservations accepted above and below the thresholds specified in seconds. */
		split_by_wait_time?: any;

		/** The beginning of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		start_time?: Date | null;

		/**
		 * The SID of the TaskQueue from which these statistics were calculated.
		 * Max length: 34
		 * Min length: 34
		 */
		task_queue_sid?: string | null;

		/** The total number of Tasks canceled in the TaskQueue. */
		tasks_canceled?: number | null;

		/** The total number of Tasks completed in the TaskQueue. */
		tasks_completed?: number | null;

		/** The total number of Tasks deleted in the TaskQueue. */
		tasks_deleted?: number | null;

		/** The total number of Tasks entered into the TaskQueue. */
		tasks_entered?: number | null;

		/** The total number of Tasks that were moved from one queue to another. */
		tasks_moved?: number | null;

		/** The absolute URL of the TaskQueue statistics resource. */
		url?: string | null;

		/** The relative wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks accepted while in the TaskQueue. Calculation is based on the time when the Tasks entered the TaskQueue. */
		wait_duration_in_queue_until_accepted?: any;

		/** The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks accepted while in the TaskQueue. Calculation is based on the time when the Tasks were created. For transfers, the wait duration is counted from the moment ***the Task was created***, and not from when the transfer was initiated. */
		wait_duration_until_accepted?: any;

		/** The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks canceled while in the TaskQueue. */
		wait_duration_until_canceled?: any;

		/**
		 * The SID of the Workspace that contains the TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspacetask_queuetask_queue_cumulative_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The average time in seconds between Task creation and acceptance. */
		avg_task_acceptance_time: FormControl<number | null | undefined>,

		/** The end of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		end_time: FormControl<Date | null | undefined>,

		/** The total number of Reservations accepted for Tasks in the TaskQueue. */
		reservations_accepted: FormControl<number | null | undefined>,

		/** The total number of Reservations canceled for Tasks in the TaskQueue. */
		reservations_canceled: FormControl<number | null | undefined>,

		/** The total number of Reservations created for Tasks in the TaskQueue. */
		reservations_created: FormControl<number | null | undefined>,

		/** The total number of Reservations rejected for Tasks in the TaskQueue. */
		reservations_rejected: FormControl<number | null | undefined>,

		/** The total number of Reservations rescinded. */
		reservations_rescinded: FormControl<number | null | undefined>,

		/** The total number of Reservations that timed out for Tasks in the TaskQueue. */
		reservations_timed_out: FormControl<number | null | undefined>,

		/** A list of objects that describe the number of Tasks canceled and reservations accepted above and below the thresholds specified in seconds. */
		split_by_wait_time: FormControl<any | null | undefined>,

		/** The beginning of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		start_time: FormControl<Date | null | undefined>,

		/**
		 * The SID of the TaskQueue from which these statistics were calculated.
		 * Max length: 34
		 * Min length: 34
		 */
		task_queue_sid: FormControl<string | null | undefined>,

		/** The total number of Tasks canceled in the TaskQueue. */
		tasks_canceled: FormControl<number | null | undefined>,

		/** The total number of Tasks completed in the TaskQueue. */
		tasks_completed: FormControl<number | null | undefined>,

		/** The total number of Tasks deleted in the TaskQueue. */
		tasks_deleted: FormControl<number | null | undefined>,

		/** The total number of Tasks entered into the TaskQueue. */
		tasks_entered: FormControl<number | null | undefined>,

		/** The total number of Tasks that were moved from one queue to another. */
		tasks_moved: FormControl<number | null | undefined>,

		/** The absolute URL of the TaskQueue statistics resource. */
		url: FormControl<string | null | undefined>,

		/** The relative wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks accepted while in the TaskQueue. Calculation is based on the time when the Tasks entered the TaskQueue. */
		wait_duration_in_queue_until_accepted: FormControl<any | null | undefined>,

		/** The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks accepted while in the TaskQueue. Calculation is based on the time when the Tasks were created. For transfers, the wait duration is counted from the moment ***the Task was created***, and not from when the transfer was initiated. */
		wait_duration_until_accepted: FormControl<any | null | undefined>,

		/** The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks canceled while in the TaskQueue. */
		wait_duration_until_canceled: FormControl<any | null | undefined>,

		/**
		 * The SID of the Workspace that contains the TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspacetask_queuetask_queue_cumulative_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspacetask_queuetask_queue_cumulative_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			avg_task_acceptance_time: new FormControl<number | null | undefined>(undefined),
			end_time: new FormControl<Date | null | undefined>(undefined),
			reservations_accepted: new FormControl<number | null | undefined>(undefined),
			reservations_canceled: new FormControl<number | null | undefined>(undefined),
			reservations_created: new FormControl<number | null | undefined>(undefined),
			reservations_rejected: new FormControl<number | null | undefined>(undefined),
			reservations_rescinded: new FormControl<number | null | undefined>(undefined),
			reservations_timed_out: new FormControl<number | null | undefined>(undefined),
			split_by_wait_time: new FormControl<any | null | undefined>(undefined),
			start_time: new FormControl<Date | null | undefined>(undefined),
			task_queue_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WQ[0-9a-fA-F]{32}$')]),
			tasks_canceled: new FormControl<number | null | undefined>(undefined),
			tasks_completed: new FormControl<number | null | undefined>(undefined),
			tasks_deleted: new FormControl<number | null | undefined>(undefined),
			tasks_entered: new FormControl<number | null | undefined>(undefined),
			tasks_moved: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			wait_duration_in_queue_until_accepted: new FormControl<any | null | undefined>(undefined),
			wait_duration_until_accepted: new FormControl<any | null | undefined>(undefined),
			wait_duration_until_canceled: new FormControl<any | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspacetask_queuetask_queue_real_time_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The number of current Workers by Activity. */
		activity_statistics?: Array<string>;

		/** The relative age in the TaskQueue for the longest waiting Task. Calculation is based on the time when the Task entered the TaskQueue. */
		longest_relative_task_age_in_queue?: number | null;

		/**
		 * The Task SID of the Task waiting in the TaskQueue the longest. Calculation is based on the time when the Task entered the TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		longest_relative_task_sid_in_queue?: string | null;

		/** The age of the longest waiting Task. */
		longest_task_waiting_age?: number | null;

		/**
		 * The SID of the longest waiting Task.
		 * Max length: 34
		 * Min length: 34
		 */
		longest_task_waiting_sid?: string | null;

		/**
		 * The SID of the TaskQueue from which these statistics were calculated.
		 * Max length: 34
		 * Min length: 34
		 */
		task_queue_sid?: string | null;

		/** The number of Tasks by priority. For example: `{"0": "10", "99": "5"}` shows 10 Tasks at priority 0 and 5 at priority 99. */
		tasks_by_priority?: any;

		/** The number of Tasks by their current status. For example: `{"pending": "1", "reserved": "3", "assigned": "2", "completed": "5"}`. */
		tasks_by_status?: any;

		/** The total number of Workers available for Tasks in the TaskQueue. */
		total_available_workers?: number | null;

		/** The total number of Workers eligible for Tasks in the TaskQueue, independent of their Activity state. */
		total_eligible_workers?: number | null;

		/** The total number of Tasks. */
		total_tasks?: number | null;

		/** The absolute URL of the TaskQueue statistics resource. */
		url?: string | null;

		/**
		 * The SID of the Workspace that contains the TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspacetask_queuetask_queue_real_time_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The relative age in the TaskQueue for the longest waiting Task. Calculation is based on the time when the Task entered the TaskQueue. */
		longest_relative_task_age_in_queue: FormControl<number | null | undefined>,

		/**
		 * The Task SID of the Task waiting in the TaskQueue the longest. Calculation is based on the time when the Task entered the TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		longest_relative_task_sid_in_queue: FormControl<string | null | undefined>,

		/** The age of the longest waiting Task. */
		longest_task_waiting_age: FormControl<number | null | undefined>,

		/**
		 * The SID of the longest waiting Task.
		 * Max length: 34
		 * Min length: 34
		 */
		longest_task_waiting_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the TaskQueue from which these statistics were calculated.
		 * Max length: 34
		 * Min length: 34
		 */
		task_queue_sid: FormControl<string | null | undefined>,

		/** The number of Tasks by priority. For example: `{"0": "10", "99": "5"}` shows 10 Tasks at priority 0 and 5 at priority 99. */
		tasks_by_priority: FormControl<any | null | undefined>,

		/** The number of Tasks by their current status. For example: `{"pending": "1", "reserved": "3", "assigned": "2", "completed": "5"}`. */
		tasks_by_status: FormControl<any | null | undefined>,

		/** The total number of Workers available for Tasks in the TaskQueue. */
		total_available_workers: FormControl<number | null | undefined>,

		/** The total number of Workers eligible for Tasks in the TaskQueue, independent of their Activity state. */
		total_eligible_workers: FormControl<number | null | undefined>,

		/** The total number of Tasks. */
		total_tasks: FormControl<number | null | undefined>,

		/** The absolute URL of the TaskQueue statistics resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspacetask_queuetask_queue_real_time_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspacetask_queuetask_queue_real_time_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			longest_relative_task_age_in_queue: new FormControl<number | null | undefined>(undefined),
			longest_relative_task_sid_in_queue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WT[0-9a-fA-F]{32}$')]),
			longest_task_waiting_age: new FormControl<number | null | undefined>(undefined),
			longest_task_waiting_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WT[0-9a-fA-F]{32}$')]),
			task_queue_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WQ[0-9a-fA-F]{32}$')]),
			tasks_by_priority: new FormControl<any | null | undefined>(undefined),
			tasks_by_status: new FormControl<any | null | undefined>(undefined),
			total_available_workers: new FormControl<number | null | undefined>(undefined),
			total_eligible_workers: new FormControl<number | null | undefined>(undefined),
			total_tasks: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspacetask_queuetask_queue_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** An object that contains the cumulative statistics for the TaskQueue. */
		cumulative?: any;

		/** An object that contains the real-time statistics for the TaskQueue. */
		realtime?: any;

		/**
		 * The SID of the TaskQueue from which these statistics were calculated.
		 * Max length: 34
		 * Min length: 34
		 */
		task_queue_sid?: string | null;

		/** The absolute URL of the TaskQueue statistics resource. */
		url?: string | null;

		/**
		 * The SID of the Workspace that contains the TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspacetask_queuetask_queue_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** An object that contains the cumulative statistics for the TaskQueue. */
		cumulative: FormControl<any | null | undefined>,

		/** An object that contains the real-time statistics for the TaskQueue. */
		realtime: FormControl<any | null | undefined>,

		/**
		 * The SID of the TaskQueue from which these statistics were calculated.
		 * Max length: 34
		 * Min length: 34
		 */
		task_queue_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the TaskQueue statistics resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the TaskQueue.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspacetask_queuetask_queue_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspacetask_queuetask_queue_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			cumulative: new FormControl<any | null | undefined>(undefined),
			realtime: new FormControl<any | null | undefined>(undefined),
			task_queue_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WQ[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspacetask_queuetask_queues_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** An object that contains the cumulative statistics for the TaskQueues. */
		cumulative?: any;

		/** An object that contains the real-time statistics for the TaskQueues. */
		realtime?: any;

		/**
		 * The SID of the TaskQueue from which these statistics were calculated.
		 * Max length: 34
		 * Min length: 34
		 */
		task_queue_sid?: string | null;

		/**
		 * The SID of the Workspace that contains the TaskQueues.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspacetask_queuetask_queues_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** An object that contains the cumulative statistics for the TaskQueues. */
		cumulative: FormControl<any | null | undefined>,

		/** An object that contains the real-time statistics for the TaskQueues. */
		realtime: FormControl<any | null | undefined>,

		/**
		 * The SID of the TaskQueue from which these statistics were calculated.
		 * Max length: 34
		 * Min length: 34
		 */
		task_queue_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the TaskQueues.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspacetask_queuetask_queues_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspacetask_queuetask_queues_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			cumulative: new FormControl<any | null | undefined>(undefined),
			realtime: new FormControl<any | null | undefined>(undefined),
			task_queue_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WQ[0-9a-fA-F]{32}$')]),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceworker {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The `friendly_name` of the Worker's current Activity. */
		activity_name?: string | null;

		/**
		 * The SID of the Worker's current Activity.
		 * Max length: 34
		 * Min length: 34
		 */
		activity_sid?: string | null;

		/** The JSON string that describes the Worker. For example: `{ "email": "Bob@example.com", "phone": "+5095551234" }`. **Note** If this property has been assigned a value, it will only be displayed in FETCH actions that return a single resource. Otherwise, this property will be null, even if it has a value. This data is passed to the `assignment_callback_url` when TaskRouter assigns a Task to the Worker. */
		attributes?: string | null;

		/** Whether the Worker is available to perform tasks. */
		available?: boolean | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT of the last change to the Worker's activity specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Used to calculate Workflow statistics. */
		date_status_changed?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. Friendly names are case insensitive, and unique within the TaskRouter Workspace. */
		friendly_name?: string | null;

		/** The URLs of related resources. */
		links?: string | null;

		/**
		 * The unique string that we created to identify the Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Worker resource. */
		url?: string | null;

		/**
		 * The SID of the Workspace that contains the Worker.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceworkerFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The `friendly_name` of the Worker's current Activity. */
		activity_name: FormControl<string | null | undefined>,

		/**
		 * The SID of the Worker's current Activity.
		 * Max length: 34
		 * Min length: 34
		 */
		activity_sid: FormControl<string | null | undefined>,

		/** The JSON string that describes the Worker. For example: `{ "email": "Bob@example.com", "phone": "+5095551234" }`. **Note** If this property has been assigned a value, it will only be displayed in FETCH actions that return a single resource. Otherwise, this property will be null, even if it has a value. This data is passed to the `assignment_callback_url` when TaskRouter assigns a Task to the Worker. */
		attributes: FormControl<string | null | undefined>,

		/** Whether the Worker is available to perform tasks. */
		available: FormControl<boolean | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT of the last change to the Worker's activity specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Used to calculate Workflow statistics. */
		date_status_changed: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. Friendly names are case insensitive, and unique within the TaskRouter Workspace. */
		friendly_name: FormControl<string | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Worker resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the Worker.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceworkerFormGroup() {
		return new FormGroup<Taskrouterv1workspaceworkerFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			activity_name: new FormControl<string | null | undefined>(undefined),
			activity_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WA[0-9a-fA-F]{32}$')]),
			attributes: new FormControl<string | null | undefined>(undefined),
			available: new FormControl<boolean | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_status_changed: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WK[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceworkerworker_channel {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The total number of Tasks assigned to Worker for the TaskChannel type. */
		assigned_tasks?: number | null;

		/** Whether the Worker should receive Tasks of the TaskChannel type. */
		available?: boolean | null;

		/** The current percentage of capacity the TaskChannel has available. Can be a number between `0` and `100`. A value of `0` indicates that TaskChannel has no capacity available and a value of `100` means the  Worker is available to receive any Tasks of this TaskChannel type. */
		available_capacity_percentage?: number | null;

		/** The current configured capacity for the WorkerChannel. TaskRouter will not create any reservations after the assigned Tasks for the Worker reaches the value. */
		configured_capacity?: number | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/**
		 * The unique string that we created to identify the WorkerChannel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/**
		 * The SID of the TaskChannel.
		 * Max length: 34
		 * Min length: 34
		 */
		task_channel_sid?: string | null;

		/** The unique name of the TaskChannel, such as `voice` or `sms`. */
		task_channel_unique_name?: string | null;

		/** The absolute URL of the WorkerChannel resource. */
		url?: string | null;

		/**
		 * The SID of the Worker that contains the WorkerChannel.
		 * Max length: 34
		 * Min length: 34
		 */
		worker_sid?: string | null;

		/**
		 * The SID of the Workspace that contains the WorkerChannel.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceworkerworker_channelFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The total number of Tasks assigned to Worker for the TaskChannel type. */
		assigned_tasks: FormControl<number | null | undefined>,

		/** Whether the Worker should receive Tasks of the TaskChannel type. */
		available: FormControl<boolean | null | undefined>,

		/** The current percentage of capacity the TaskChannel has available. Can be a number between `0` and `100`. A value of `0` indicates that TaskChannel has no capacity available and a value of `100` means the  Worker is available to receive any Tasks of this TaskChannel type. */
		available_capacity_percentage: FormControl<number | null | undefined>,

		/** The current configured capacity for the WorkerChannel. TaskRouter will not create any reservations after the assigned Tasks for the Worker reaches the value. */
		configured_capacity: FormControl<number | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The unique string that we created to identify the WorkerChannel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the TaskChannel.
		 * Max length: 34
		 * Min length: 34
		 */
		task_channel_sid: FormControl<string | null | undefined>,

		/** The unique name of the TaskChannel, such as `voice` or `sms`. */
		task_channel_unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the WorkerChannel resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Worker that contains the WorkerChannel.
		 * Max length: 34
		 * Min length: 34
		 */
		worker_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the WorkerChannel.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceworkerworker_channelFormGroup() {
		return new FormGroup<Taskrouterv1workspaceworkerworker_channelFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assigned_tasks: new FormControl<number | null | undefined>(undefined),
			available: new FormControl<boolean | null | undefined>(undefined),
			available_capacity_percentage: new FormControl<number | null | undefined>(undefined),
			configured_capacity: new FormControl<number | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WC[0-9a-fA-F]{32}$')]),
			task_channel_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^TC[0-9a-fA-F]{32}$')]),
			task_channel_unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			worker_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WK[0-9a-fA-F]{32}$')]),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceworkerworker_instance_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** An object that contains the cumulative statistics for the Worker. */
		cumulative?: any;

		/** The absolute URL of the WorkerChannel statistics resource. */
		url?: string | null;

		/**
		 * The SID of the Worker that contains the WorkerChannel.
		 * Max length: 34
		 * Min length: 34
		 */
		worker_sid?: string | null;

		/**
		 * The SID of the Workspace that contains the WorkerChannel.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceworkerworker_instance_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** An object that contains the cumulative statistics for the Worker. */
		cumulative: FormControl<any | null | undefined>,

		/** The absolute URL of the WorkerChannel statistics resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Worker that contains the WorkerChannel.
		 * Max length: 34
		 * Min length: 34
		 */
		worker_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the WorkerChannel.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceworkerworker_instance_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspaceworkerworker_instance_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			cumulative: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			worker_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WK[0-9a-fA-F]{32}$')]),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceworkerworker_reservation {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the WorkerReservation resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The URLs of related resources. */
		links?: string | null;
		reservation_status?: Task_reservation_enum_status | null;

		/**
		 * The unique string that we created to identify the WorkerReservation resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/**
		 * The SID of the reserved Task resource.
		 * Max length: 34
		 * Min length: 34
		 */
		task_sid?: string | null;

		/** The absolute URL of the WorkerReservation resource. */
		url?: string | null;

		/** The `friendly_name` of the Worker that is reserved. */
		worker_name?: string | null;

		/**
		 * The SID of the reserved Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		worker_sid?: string | null;

		/**
		 * The SID of the Workspace that this worker is contained within.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceworkerworker_reservationFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the WorkerReservation resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,
		reservation_status: FormControl<Task_reservation_enum_status | null | undefined>,

		/**
		 * The unique string that we created to identify the WorkerReservation resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the reserved Task resource.
		 * Max length: 34
		 * Min length: 34
		 */
		task_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the WorkerReservation resource. */
		url: FormControl<string | null | undefined>,

		/** The `friendly_name` of the Worker that is reserved. */
		worker_name: FormControl<string | null | undefined>,

		/**
		 * The SID of the reserved Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		worker_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that this worker is contained within.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceworkerworker_reservationFormGroup() {
		return new FormGroup<Taskrouterv1workspaceworkerworker_reservationFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			reservation_status: new FormControl<Task_reservation_enum_status | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WR[0-9a-fA-F]{32}$')]),
			task_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WT[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			worker_name: new FormControl<string | null | undefined>(undefined),
			worker_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WK[0-9a-fA-F]{32}$')]),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceworkerworker_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** An object that contains the cumulative statistics for the Worker. */
		cumulative?: any;

		/** An object that contains the real-time statistics for the Worker. */
		realtime?: any;

		/** The absolute URL of the Worker statistics resource. */
		url?: string | null;

		/**
		 * The SID of the Workspace that contains the Worker.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceworkerworker_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** An object that contains the cumulative statistics for the Worker. */
		cumulative: FormControl<any | null | undefined>,

		/** An object that contains the real-time statistics for the Worker. */
		realtime: FormControl<any | null | undefined>,

		/** The absolute URL of the Worker statistics resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the Worker.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceworkerworker_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspaceworkerworker_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			cumulative: new FormControl<any | null | undefined>(undefined),
			realtime: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceworkerworkers_cumulative_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The minimum, average, maximum, and total time (in seconds) that Workers spent in each Activity. */
		activity_durations?: Array<string>;

		/** The end of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		end_time?: Date | null;

		/** The total number of Reservations that were accepted. */
		reservations_accepted?: number | null;

		/** The total number of Reservations that were canceled. */
		reservations_canceled?: number | null;

		/** The total number of Reservations that were created. */
		reservations_created?: number | null;

		/** The total number of Reservations that were rejected. */
		reservations_rejected?: number | null;

		/** The total number of Reservations that were rescinded. */
		reservations_rescinded?: number | null;

		/** The total number of Reservations that were timed out. */
		reservations_timed_out?: number | null;

		/** The beginning of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		start_time?: Date | null;

		/** The absolute URL of the Workers statistics resource. */
		url?: string | null;

		/**
		 * The SID of the Workspace that contains the Workers.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceworkerworkers_cumulative_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The end of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		end_time: FormControl<Date | null | undefined>,

		/** The total number of Reservations that were accepted. */
		reservations_accepted: FormControl<number | null | undefined>,

		/** The total number of Reservations that were canceled. */
		reservations_canceled: FormControl<number | null | undefined>,

		/** The total number of Reservations that were created. */
		reservations_created: FormControl<number | null | undefined>,

		/** The total number of Reservations that were rejected. */
		reservations_rejected: FormControl<number | null | undefined>,

		/** The total number of Reservations that were rescinded. */
		reservations_rescinded: FormControl<number | null | undefined>,

		/** The total number of Reservations that were timed out. */
		reservations_timed_out: FormControl<number | null | undefined>,

		/** The beginning of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		start_time: FormControl<Date | null | undefined>,

		/** The absolute URL of the Workers statistics resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the Workers.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceworkerworkers_cumulative_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspaceworkerworkers_cumulative_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			end_time: new FormControl<Date | null | undefined>(undefined),
			reservations_accepted: new FormControl<number | null | undefined>(undefined),
			reservations_canceled: new FormControl<number | null | undefined>(undefined),
			reservations_created: new FormControl<number | null | undefined>(undefined),
			reservations_rejected: new FormControl<number | null | undefined>(undefined),
			reservations_rescinded: new FormControl<number | null | undefined>(undefined),
			reservations_timed_out: new FormControl<number | null | undefined>(undefined),
			start_time: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceworkerworkers_real_time_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The number of current Workers by Activity. */
		activity_statistics?: Array<string>;

		/** The total number of Workers. */
		total_workers?: number | null;

		/** The absolute URL of the Workers statistics resource. */
		url?: string | null;

		/**
		 * The SID of the Workspace that contains the Workers.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceworkerworkers_real_time_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The total number of Workers. */
		total_workers: FormControl<number | null | undefined>,

		/** The absolute URL of the Workers statistics resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the Workers.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceworkerworkers_real_time_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspaceworkerworkers_real_time_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			total_workers: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceworkflow {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The URL that we call when a task managed by the Workflow is assigned to a Worker. See Assignment Callback URL for more information. */
		assignment_callback_url?: string | null;

		/** A JSON string that contains the Workflow's configuration. See [Configuring Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more information. */
		configuration?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The MIME type of the document. */
		document_content_type?: string | null;

		/** The URL that we call when a call to the `assignment_callback_url` fails. */
		fallback_assignment_callback_url?: string | null;

		/** The string that you assigned to describe the Workflow resource. For example, `Customer Support` or `2014 Election Campaign`. */
		friendly_name?: string | null;

		/** The URLs of related resources. */
		links?: string | null;

		/**
		 * The unique string that we created to identify the Workflow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** How long TaskRouter will wait for a confirmation response from your application after it assigns a Task to a Worker. Can be up to `86,400` (24 hours) and the default is `120`. */
		task_reservation_timeout?: number | null;

		/** The absolute URL of the Workflow resource. */
		url?: string | null;

		/**
		 * The SID of the Workspace that contains the Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceworkflowFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The URL that we call when a task managed by the Workflow is assigned to a Worker. See Assignment Callback URL for more information. */
		assignment_callback_url: FormControl<string | null | undefined>,

		/** A JSON string that contains the Workflow's configuration. See [Configuring Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more information. */
		configuration: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The MIME type of the document. */
		document_content_type: FormControl<string | null | undefined>,

		/** The URL that we call when a call to the `assignment_callback_url` fails. */
		fallback_assignment_callback_url: FormControl<string | null | undefined>,

		/** The string that you assigned to describe the Workflow resource. For example, `Customer Support` or `2014 Election Campaign`. */
		friendly_name: FormControl<string | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Workflow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** How long TaskRouter will wait for a confirmation response from your application after it assigns a Task to a Worker. Can be up to `86,400` (24 hours) and the default is `120`. */
		task_reservation_timeout: FormControl<number | null | undefined>,

		/** The absolute URL of the Workflow resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceworkflowFormGroup() {
		return new FormGroup<Taskrouterv1workspaceworkflowFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			assignment_callback_url: new FormControl<string | null | undefined>(undefined),
			configuration: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			document_content_type: new FormControl<string | null | undefined>(undefined),
			fallback_assignment_callback_url: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WW[0-9a-fA-F]{32}$')]),
			task_reservation_timeout: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceworkflowworkflow_cumulative_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The average time in seconds between Task creation and acceptance. */
		avg_task_acceptance_time?: number | null;

		/** The end of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		end_time?: Date | null;

		/** The total number of Reservations accepted by Workers. */
		reservations_accepted?: number | null;

		/** The total number of Reservations that were canceled. */
		reservations_canceled?: number | null;

		/** The total number of Reservations that were created for Workers. */
		reservations_created?: number | null;

		/** The total number of Reservations that were rejected. */
		reservations_rejected?: number | null;

		/** The total number of Reservations that were rescinded. */
		reservations_rescinded?: number | null;

		/** The total number of Reservations that were timed out. */
		reservations_timed_out?: number | null;

		/** A list of objects that describe the number of Tasks canceled and reservations accepted above and below the thresholds specified in seconds. */
		split_by_wait_time?: any;

		/** The beginning of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		start_time?: Date | null;

		/** The total number of Tasks that were canceled. */
		tasks_canceled?: number | null;

		/** The total number of Tasks that were completed. */
		tasks_completed?: number | null;

		/** The total number of Tasks that were deleted. */
		tasks_deleted?: number | null;

		/** The total number of Tasks that entered the Workflow. */
		tasks_entered?: number | null;

		/** The total number of Tasks that were moved from one queue to another. */
		tasks_moved?: number | null;

		/** The total number of Tasks that were timed out of their Workflows (and deleted). */
		tasks_timed_out_in_workflow?: number | null;

		/** The absolute URL of the Workflow statistics resource. */
		url?: string | null;

		/** The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks that were accepted. */
		wait_duration_until_accepted?: any;

		/** The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks that were canceled. */
		wait_duration_until_canceled?: any;

		/**
		 * Returns the list of Tasks that are being controlled by the Workflow with the specified Sid value.
		 * Max length: 34
		 * Min length: 34
		 */
		workflow_sid?: string | null;

		/**
		 * The SID of the Workspace that contains the Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceworkflowworkflow_cumulative_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The average time in seconds between Task creation and acceptance. */
		avg_task_acceptance_time: FormControl<number | null | undefined>,

		/** The end of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		end_time: FormControl<Date | null | undefined>,

		/** The total number of Reservations accepted by Workers. */
		reservations_accepted: FormControl<number | null | undefined>,

		/** The total number of Reservations that were canceled. */
		reservations_canceled: FormControl<number | null | undefined>,

		/** The total number of Reservations that were created for Workers. */
		reservations_created: FormControl<number | null | undefined>,

		/** The total number of Reservations that were rejected. */
		reservations_rejected: FormControl<number | null | undefined>,

		/** The total number of Reservations that were rescinded. */
		reservations_rescinded: FormControl<number | null | undefined>,

		/** The total number of Reservations that were timed out. */
		reservations_timed_out: FormControl<number | null | undefined>,

		/** A list of objects that describe the number of Tasks canceled and reservations accepted above and below the thresholds specified in seconds. */
		split_by_wait_time: FormControl<any | null | undefined>,

		/** The beginning of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		start_time: FormControl<Date | null | undefined>,

		/** The total number of Tasks that were canceled. */
		tasks_canceled: FormControl<number | null | undefined>,

		/** The total number of Tasks that were completed. */
		tasks_completed: FormControl<number | null | undefined>,

		/** The total number of Tasks that were deleted. */
		tasks_deleted: FormControl<number | null | undefined>,

		/** The total number of Tasks that entered the Workflow. */
		tasks_entered: FormControl<number | null | undefined>,

		/** The total number of Tasks that were moved from one queue to another. */
		tasks_moved: FormControl<number | null | undefined>,

		/** The total number of Tasks that were timed out of their Workflows (and deleted). */
		tasks_timed_out_in_workflow: FormControl<number | null | undefined>,

		/** The absolute URL of the Workflow statistics resource. */
		url: FormControl<string | null | undefined>,

		/** The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks that were accepted. */
		wait_duration_until_accepted: FormControl<any | null | undefined>,

		/** The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks that were canceled. */
		wait_duration_until_canceled: FormControl<any | null | undefined>,

		/**
		 * Returns the list of Tasks that are being controlled by the Workflow with the specified Sid value.
		 * Max length: 34
		 * Min length: 34
		 */
		workflow_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceworkflowworkflow_cumulative_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspaceworkflowworkflow_cumulative_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			avg_task_acceptance_time: new FormControl<number | null | undefined>(undefined),
			end_time: new FormControl<Date | null | undefined>(undefined),
			reservations_accepted: new FormControl<number | null | undefined>(undefined),
			reservations_canceled: new FormControl<number | null | undefined>(undefined),
			reservations_created: new FormControl<number | null | undefined>(undefined),
			reservations_rejected: new FormControl<number | null | undefined>(undefined),
			reservations_rescinded: new FormControl<number | null | undefined>(undefined),
			reservations_timed_out: new FormControl<number | null | undefined>(undefined),
			split_by_wait_time: new FormControl<any | null | undefined>(undefined),
			start_time: new FormControl<Date | null | undefined>(undefined),
			tasks_canceled: new FormControl<number | null | undefined>(undefined),
			tasks_completed: new FormControl<number | null | undefined>(undefined),
			tasks_deleted: new FormControl<number | null | undefined>(undefined),
			tasks_entered: new FormControl<number | null | undefined>(undefined),
			tasks_moved: new FormControl<number | null | undefined>(undefined),
			tasks_timed_out_in_workflow: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			wait_duration_until_accepted: new FormControl<any | null | undefined>(undefined),
			wait_duration_until_canceled: new FormControl<any | null | undefined>(undefined),
			workflow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WW[0-9a-fA-F]{32}$')]),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceworkflowworkflow_real_time_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The age of the longest waiting Task. */
		longest_task_waiting_age?: number | null;

		/**
		 * The SID of the longest waiting Task.
		 * Max length: 34
		 * Min length: 34
		 */
		longest_task_waiting_sid?: string | null;

		/** The number of Tasks by priority. For example: `{"0": "10", "99": "5"}` shows 10 Tasks at priority 0 and 5 at priority 99. */
		tasks_by_priority?: any;

		/** The number of Tasks by their current status. For example: `{"pending": "1", "reserved": "3", "assigned": "2", "completed": "5"}`. */
		tasks_by_status?: any;

		/** The total number of Tasks. */
		total_tasks?: number | null;

		/** The absolute URL of the Workflow statistics resource. */
		url?: string | null;

		/**
		 * Returns the list of Tasks that are being controlled by the Workflow with the specified SID value.
		 * Max length: 34
		 * Min length: 34
		 */
		workflow_sid?: string | null;

		/**
		 * The SID of the Workspace that contains the Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceworkflowworkflow_real_time_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The age of the longest waiting Task. */
		longest_task_waiting_age: FormControl<number | null | undefined>,

		/**
		 * The SID of the longest waiting Task.
		 * Max length: 34
		 * Min length: 34
		 */
		longest_task_waiting_sid: FormControl<string | null | undefined>,

		/** The number of Tasks by priority. For example: `{"0": "10", "99": "5"}` shows 10 Tasks at priority 0 and 5 at priority 99. */
		tasks_by_priority: FormControl<any | null | undefined>,

		/** The number of Tasks by their current status. For example: `{"pending": "1", "reserved": "3", "assigned": "2", "completed": "5"}`. */
		tasks_by_status: FormControl<any | null | undefined>,

		/** The total number of Tasks. */
		total_tasks: FormControl<number | null | undefined>,

		/** The absolute URL of the Workflow statistics resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * Returns the list of Tasks that are being controlled by the Workflow with the specified SID value.
		 * Max length: 34
		 * Min length: 34
		 */
		workflow_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceworkflowworkflow_real_time_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspaceworkflowworkflow_real_time_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			longest_task_waiting_age: new FormControl<number | null | undefined>(undefined),
			longest_task_waiting_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WT[0-9a-fA-F]{32}$')]),
			tasks_by_priority: new FormControl<any | null | undefined>(undefined),
			tasks_by_status: new FormControl<any | null | undefined>(undefined),
			total_tasks: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workflow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WW[0-9a-fA-F]{32}$')]),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceworkflowworkflow_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** An object that contains the cumulative statistics for the Workflow. */
		cumulative?: any;

		/** An object that contains the real-time statistics for the Workflow. */
		realtime?: any;

		/** The absolute URL of the Workflow statistics resource. */
		url?: string | null;

		/**
		 * Returns the list of Tasks that are being controlled by the Workflow with the specified SID value.
		 * Max length: 34
		 * Min length: 34
		 */
		workflow_sid?: string | null;

		/**
		 * The SID of the Workspace that contains the Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceworkflowworkflow_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** An object that contains the cumulative statistics for the Workflow. */
		cumulative: FormControl<any | null | undefined>,

		/** An object that contains the real-time statistics for the Workflow. */
		realtime: FormControl<any | null | undefined>,

		/** The absolute URL of the Workflow statistics resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * Returns the list of Tasks that are being controlled by the Workflow with the specified SID value.
		 * Max length: 34
		 * Min length: 34
		 */
		workflow_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace that contains the Workflow.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceworkflowworkflow_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspaceworkflowworkflow_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			cumulative: new FormControl<any | null | undefined>(undefined),
			realtime: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workflow_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WW[0-9a-fA-F]{32}$')]),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceworkspace_cumulative_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workspace resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The average time in seconds between Task creation and acceptance. */
		avg_task_acceptance_time?: number | null;

		/** The end of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		end_time?: Date | null;

		/** The total number of Reservations accepted by Workers. */
		reservations_accepted?: number | null;

		/** The total number of Reservations that were canceled. */
		reservations_canceled?: number | null;

		/** The total number of Reservations that were created for Workers. */
		reservations_created?: number | null;

		/** The total number of Reservations that were rejected. */
		reservations_rejected?: number | null;

		/** The total number of Reservations that were rescinded. */
		reservations_rescinded?: number | null;

		/** The total number of Reservations that were timed out. */
		reservations_timed_out?: number | null;

		/** A list of objects that describe the number of Tasks canceled and reservations accepted above and below the thresholds specified in seconds. */
		split_by_wait_time?: any;

		/** The beginning of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		start_time?: Date | null;

		/** The total number of Tasks that were canceled. */
		tasks_canceled?: number | null;

		/** The total number of Tasks that were completed. */
		tasks_completed?: number | null;

		/** The total number of Tasks created. */
		tasks_created?: number | null;

		/** The total number of Tasks that were deleted. */
		tasks_deleted?: number | null;

		/** The total number of Tasks that were moved from one queue to another. */
		tasks_moved?: number | null;

		/** The total number of Tasks that were timed out of their Workflows (and deleted). */
		tasks_timed_out_in_workflow?: number | null;

		/** The absolute URL of the Workspace statistics resource. */
		url?: string | null;

		/** The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks that were accepted. */
		wait_duration_until_accepted?: any;

		/** The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks that were canceled. */
		wait_duration_until_canceled?: any;

		/**
		 * The SID of the Workspace.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceworkspace_cumulative_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workspace resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The average time in seconds between Task creation and acceptance. */
		avg_task_acceptance_time: FormControl<number | null | undefined>,

		/** The end of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		end_time: FormControl<Date | null | undefined>,

		/** The total number of Reservations accepted by Workers. */
		reservations_accepted: FormControl<number | null | undefined>,

		/** The total number of Reservations that were canceled. */
		reservations_canceled: FormControl<number | null | undefined>,

		/** The total number of Reservations that were created for Workers. */
		reservations_created: FormControl<number | null | undefined>,

		/** The total number of Reservations that were rejected. */
		reservations_rejected: FormControl<number | null | undefined>,

		/** The total number of Reservations that were rescinded. */
		reservations_rescinded: FormControl<number | null | undefined>,

		/** The total number of Reservations that were timed out. */
		reservations_timed_out: FormControl<number | null | undefined>,

		/** A list of objects that describe the number of Tasks canceled and reservations accepted above and below the thresholds specified in seconds. */
		split_by_wait_time: FormControl<any | null | undefined>,

		/** The beginning of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		start_time: FormControl<Date | null | undefined>,

		/** The total number of Tasks that were canceled. */
		tasks_canceled: FormControl<number | null | undefined>,

		/** The total number of Tasks that were completed. */
		tasks_completed: FormControl<number | null | undefined>,

		/** The total number of Tasks created. */
		tasks_created: FormControl<number | null | undefined>,

		/** The total number of Tasks that were deleted. */
		tasks_deleted: FormControl<number | null | undefined>,

		/** The total number of Tasks that were moved from one queue to another. */
		tasks_moved: FormControl<number | null | undefined>,

		/** The total number of Tasks that were timed out of their Workflows (and deleted). */
		tasks_timed_out_in_workflow: FormControl<number | null | undefined>,

		/** The absolute URL of the Workspace statistics resource. */
		url: FormControl<string | null | undefined>,

		/** The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks that were accepted. */
		wait_duration_until_accepted: FormControl<any | null | undefined>,

		/** The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks that were canceled. */
		wait_duration_until_canceled: FormControl<any | null | undefined>,

		/**
		 * The SID of the Workspace.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceworkspace_cumulative_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspaceworkspace_cumulative_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			avg_task_acceptance_time: new FormControl<number | null | undefined>(undefined),
			end_time: new FormControl<Date | null | undefined>(undefined),
			reservations_accepted: new FormControl<number | null | undefined>(undefined),
			reservations_canceled: new FormControl<number | null | undefined>(undefined),
			reservations_created: new FormControl<number | null | undefined>(undefined),
			reservations_rejected: new FormControl<number | null | undefined>(undefined),
			reservations_rescinded: new FormControl<number | null | undefined>(undefined),
			reservations_timed_out: new FormControl<number | null | undefined>(undefined),
			split_by_wait_time: new FormControl<any | null | undefined>(undefined),
			start_time: new FormControl<Date | null | undefined>(undefined),
			tasks_canceled: new FormControl<number | null | undefined>(undefined),
			tasks_completed: new FormControl<number | null | undefined>(undefined),
			tasks_created: new FormControl<number | null | undefined>(undefined),
			tasks_deleted: new FormControl<number | null | undefined>(undefined),
			tasks_moved: new FormControl<number | null | undefined>(undefined),
			tasks_timed_out_in_workflow: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			wait_duration_until_accepted: new FormControl<any | null | undefined>(undefined),
			wait_duration_until_canceled: new FormControl<any | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceworkspace_real_time_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workspace resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The number of current Workers by Activity. */
		activity_statistics?: Array<string>;

		/** The age of the longest waiting Task. */
		longest_task_waiting_age?: number | null;

		/**
		 * The SID of the longest waiting Task.
		 * Max length: 34
		 * Min length: 34
		 */
		longest_task_waiting_sid?: string | null;

		/** The number of Tasks by priority. For example: `{"0": "10", "99": "5"}` shows 10 Tasks at priority 0 and 5 at priority 99. */
		tasks_by_priority?: any;

		/** The number of Tasks by their current status. For example: `{"pending": "1", "reserved": "3", "assigned": "2", "completed": "5"}`. */
		tasks_by_status?: any;

		/** The total number of Tasks. */
		total_tasks?: number | null;

		/** The total number of Workers in the Workspace. */
		total_workers?: number | null;

		/** The absolute URL of the Workspace statistics resource. */
		url?: string | null;

		/**
		 * The SID of the Workspace.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceworkspace_real_time_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workspace resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The age of the longest waiting Task. */
		longest_task_waiting_age: FormControl<number | null | undefined>,

		/**
		 * The SID of the longest waiting Task.
		 * Max length: 34
		 * Min length: 34
		 */
		longest_task_waiting_sid: FormControl<string | null | undefined>,

		/** The number of Tasks by priority. For example: `{"0": "10", "99": "5"}` shows 10 Tasks at priority 0 and 5 at priority 99. */
		tasks_by_priority: FormControl<any | null | undefined>,

		/** The number of Tasks by their current status. For example: `{"pending": "1", "reserved": "3", "assigned": "2", "completed": "5"}`. */
		tasks_by_status: FormControl<any | null | undefined>,

		/** The total number of Tasks. */
		total_tasks: FormControl<number | null | undefined>,

		/** The total number of Workers in the Workspace. */
		total_workers: FormControl<number | null | undefined>,

		/** The absolute URL of the Workspace statistics resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceworkspace_real_time_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspaceworkspace_real_time_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			longest_task_waiting_age: new FormControl<number | null | undefined>(undefined),
			longest_task_waiting_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WT[0-9a-fA-F]{32}$')]),
			tasks_by_priority: new FormControl<any | null | undefined>(undefined),
			tasks_by_status: new FormControl<any | null | undefined>(undefined),
			total_tasks: new FormControl<number | null | undefined>(undefined),
			total_workers: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export interface Taskrouterv1workspaceworkspace_statistics {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workspace resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** An object that contains the cumulative statistics for the Workspace. */
		cumulative?: any;

		/** An object that contains the real-time statistics for the Workspace. */
		realtime?: any;

		/** The absolute URL of the Workspace statistics resource. */
		url?: string | null;

		/**
		 * The SID of the Workspace.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid?: string | null;
	}
	export interface Taskrouterv1workspaceworkspace_statisticsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workspace resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** An object that contains the cumulative statistics for the Workspace. */
		cumulative: FormControl<any | null | undefined>,

		/** An object that contains the real-time statistics for the Workspace. */
		realtime: FormControl<any | null | undefined>,

		/** The absolute URL of the Workspace statistics resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Workspace.
		 * Max length: 34
		 * Min length: 34
		 */
		workspace_sid: FormControl<string | null | undefined>,
	}
	export function CreateTaskrouterv1workspaceworkspace_statisticsFormGroup() {
		return new FormGroup<Taskrouterv1workspaceworkspace_statisticsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			cumulative: new FormControl<any | null | undefined>(undefined),
			realtime: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workspace_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^WS[0-9a-fA-F]{32}$')]),
		});

	}

	export enum Worker_reservation_enum_call_status { initiated = 'initiated', ringing = 'ringing', answered = 'answered', completed = 'completed' }

	export enum Worker_reservation_enum_conference_event { start = 'start', end = 'end', join = 'join', leave = 'leave', mute = 'mute', hold = 'hold', speaker = 'speaker' }

	export enum Worker_reservation_enum_status { pending = 'pending', accepted = 'accepted', rejected = 'rejected', timeout = 'timeout', canceled = 'canceled', rescinded = 'rescinded', wrapping = 'wrapping', completed = 'completed' }

	export enum Workspace_enum_queue_order { FIFO = 'FIFO', LIFO = 'LIFO' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get v1/Workspaces
		 * @param {string} FriendlyName The `friendly_name` of the Workspace resources to read. For example `Customer Support` or `2014 Election Campaign`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListWorkspaceReturn} OK
		 */
		ListWorkspace(FriendlyName: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListWorkspaceReturn> {
			return this.http.get<ListWorkspaceReturn>(this.baseUri + 'v1/Workspaces?FriendlyName=' + (FriendlyName == null ? '' : encodeURIComponent(FriendlyName)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Workspaces/{Sid}
		 * @param {string} Sid The SID of the Workspace resource to delete.
		 * @return {void} 
		 */
		DeleteWorkspace(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Workspaces/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Workspaces/{Sid}
		 * @param {string} Sid The SID of the Workspace resource to fetch.
		 * @return {Taskrouterv1workspace} OK
		 */
		FetchWorkspace(Sid: string): Observable<Taskrouterv1workspace> {
			return this.http.get<Taskrouterv1workspace>(this.baseUri + 'v1/Workspaces/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Activities
		 * @param {string} WorkspaceSid The SID of the Workspace with the Activity resources to read.
		 * @param {string} FriendlyName The `friendly_name` of the Activity resources to read.
		 * @param {string} Available Whether return only Activity resources that are available or unavailable. A value of `true` returns only available activities. Values of '1' or `yes` also indicate `true`. All other values represent `false` and return activities that are unavailable.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListActivityReturn} OK
		 */
		ListActivity(WorkspaceSid: string, FriendlyName: string | null | undefined, Available: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListActivityReturn> {
			return this.http.get<ListActivityReturn>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Activities&FriendlyName=' + (FriendlyName == null ? '' : encodeURIComponent(FriendlyName)) + '&Available=' + (Available == null ? '' : encodeURIComponent(Available)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Workspaces/{WorkspaceSid}/Activities/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the Activity resources to delete.
		 * @param {string} Sid The SID of the Activity resource to delete.
		 * @return {void} 
		 */
		DeleteActivity(WorkspaceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Activities/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Activities/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the Activity resources to fetch.
		 * @param {string} Sid The SID of the Activity resource to fetch.
		 * @return {Taskrouterv1workspaceactivity} OK
		 */
		FetchActivity(WorkspaceSid: string, Sid: string): Observable<Taskrouterv1workspaceactivity> {
			return this.http.get<Taskrouterv1workspaceactivity>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Activities/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/CumulativeStatistics
		 * @param {string} WorkspaceSid The SID of the Workspace to fetch.
		 * @param {Date} EndDate Only include usage that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
		 * @param {number} Minutes Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
		 * @param {Date} StartDate Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
		 * @param {string} TaskChannel Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
		 * @param {string} SplitByWaitTime A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, `5,30` would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA. TaskRouter will calculate statistics on up to 10,000 Tasks for any given threshold.
		 * @return {Taskrouterv1workspaceworkspace_cumulative_statistics} OK
		 */
		FetchWorkspaceCumulativeStatistics(WorkspaceSid: string, EndDate: Date | null | undefined, Minutes: number | null | undefined, StartDate: Date | null | undefined, TaskChannel: string | null | undefined, SplitByWaitTime: string | null | undefined): Observable<Taskrouterv1workspaceworkspace_cumulative_statistics> {
			return this.http.get<Taskrouterv1workspaceworkspace_cumulative_statistics>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/CumulativeStatistics&EndDate=' + EndDate?.toISOString() + '&Minutes=' + Minutes + '&StartDate=' + StartDate?.toISOString() + '&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)) + '&SplitByWaitTime=' + (SplitByWaitTime == null ? '' : encodeURIComponent(SplitByWaitTime)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Events
		 * @param {string} WorkspaceSid The SID of the Workspace with the Events to read. Returns only the Events that pertain to the specified Workspace.
		 * @param {Date} EndDate Only include Events that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
		 * @param {string} EventType The type of Events to read. Returns only Events of the type specified.
		 * @param {number} Minutes The period of events to read in minutes. Returns only Events that occurred since this many minutes in the past. The default is `15` minutes. Task Attributes for Events occuring more 43,200 minutes ago will be redacted.
		 * @param {string} ReservationSid The SID of the Reservation with the Events to read. Returns only Events that pertain to the specified Reservation.
		 * @param {Date} StartDate Only include Events from on or after this date and time, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Task Attributes for Events older than 30 days will be redacted.
		 * @param {string} TaskQueueSid The SID of the TaskQueue with the Events to read. Returns only the Events that pertain to the specified TaskQueue.
		 * @param {string} TaskSid The SID of the Task with the Events to read. Returns only the Events that pertain to the specified Task.
		 * @param {string} WorkerSid The SID of the Worker with the Events to read. Returns only the Events that pertain to the specified Worker.
		 * @param {string} WorkflowSid The SID of the Workflow with the Events to read. Returns only the Events that pertain to the specified Workflow.
		 * @param {string} TaskChannel The TaskChannel with the Events to read. Returns only the Events that pertain to the specified TaskChannel.
		 * @param {string} Sid The SID of the Event resource to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListEventReturn} OK
		 */
		ListEvent(WorkspaceSid: string, EndDate: Date | null | undefined, EventType: string | null | undefined, Minutes: number | null | undefined, ReservationSid: string | null | undefined, StartDate: Date | null | undefined, TaskQueueSid: string | null | undefined, TaskSid: string | null | undefined, WorkerSid: string | null | undefined, WorkflowSid: string | null | undefined, TaskChannel: string | null | undefined, Sid: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListEventReturn> {
			return this.http.get<ListEventReturn>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Events&EndDate=' + EndDate?.toISOString() + '&EventType=' + (EventType == null ? '' : encodeURIComponent(EventType)) + '&Minutes=' + Minutes + '&ReservationSid=' + (ReservationSid == null ? '' : encodeURIComponent(ReservationSid)) + '&StartDate=' + StartDate?.toISOString() + '&TaskQueueSid=' + (TaskQueueSid == null ? '' : encodeURIComponent(TaskQueueSid)) + '&TaskSid=' + (TaskSid == null ? '' : encodeURIComponent(TaskSid)) + '&WorkerSid=' + (WorkerSid == null ? '' : encodeURIComponent(WorkerSid)) + '&WorkflowSid=' + (WorkflowSid == null ? '' : encodeURIComponent(WorkflowSid)) + '&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)) + '&Sid=' + (Sid == null ? '' : encodeURIComponent(Sid)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Events/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the Event to fetch.
		 * @param {string} Sid The SID of the Event resource to fetch.
		 * @return {Taskrouterv1workspaceevent} OK
		 */
		FetchEvent(WorkspaceSid: string, Sid: string): Observable<Taskrouterv1workspaceevent> {
			return this.http.get<Taskrouterv1workspaceevent>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Events/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/RealTimeStatistics
		 * @param {string} WorkspaceSid The SID of the Workspace to fetch.
		 * @param {string} TaskChannel Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
		 * @return {Taskrouterv1workspaceworkspace_real_time_statistics} OK
		 */
		FetchWorkspaceRealTimeStatistics(WorkspaceSid: string, TaskChannel: string | null | undefined): Observable<Taskrouterv1workspaceworkspace_real_time_statistics> {
			return this.http.get<Taskrouterv1workspaceworkspace_real_time_statistics>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/RealTimeStatistics&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Statistics
		 * @param {string} WorkspaceSid The SID of the Workspace to fetch.
		 * @param {number} Minutes Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
		 * @param {Date} StartDate Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
		 * @param {Date} EndDate Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
		 * @param {string} TaskChannel Only calculate statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
		 * @param {string} SplitByWaitTime A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, `5,30` would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA.
		 * @return {Taskrouterv1workspaceworkspace_statistics} OK
		 */
		FetchWorkspaceStatistics(WorkspaceSid: string, Minutes: number | null | undefined, StartDate: Date | null | undefined, EndDate: Date | null | undefined, TaskChannel: string | null | undefined, SplitByWaitTime: string | null | undefined): Observable<Taskrouterv1workspaceworkspace_statistics> {
			return this.http.get<Taskrouterv1workspaceworkspace_statistics>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Statistics&Minutes=' + Minutes + '&StartDate=' + StartDate?.toISOString() + '&EndDate=' + EndDate?.toISOString() + '&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)) + '&SplitByWaitTime=' + (SplitByWaitTime == null ? '' : encodeURIComponent(SplitByWaitTime)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/TaskChannels
		 * @param {string} WorkspaceSid The SID of the Workspace with the Task Channel to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListTaskChannelReturn} OK
		 */
		ListTaskChannel(WorkspaceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListTaskChannelReturn> {
			return this.http.get<ListTaskChannelReturn>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/TaskChannels&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the Task Channel to delete.
		 * @param {string} Sid The SID of the Task Channel resource to delete.
		 * @return {void} 
		 */
		DeleteTaskChannel(WorkspaceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/TaskChannels/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the Task Channel to fetch.
		 * @param {string} Sid The SID of the Task Channel resource to fetch.
		 * @return {Taskrouterv1workspacetask_channel} OK
		 */
		FetchTaskChannel(WorkspaceSid: string, Sid: string): Observable<Taskrouterv1workspacetask_channel> {
			return this.http.get<Taskrouterv1workspacetask_channel>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/TaskChannels/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/TaskQueues
		 * @param {string} WorkspaceSid The SID of the Workspace with the TaskQueue to read.
		 * @param {string} FriendlyName The `friendly_name` of the TaskQueue resources to read.
		 * @param {string} EvaluateWorkerAttributes The attributes of the Workers to read. Returns the TaskQueues with Workers that match the attributes specified in this parameter.
		 * @param {string} WorkerSid The SID of the Worker with the TaskQueue resources to read.
		 * @param {string} Ordering Sorting parameter for TaskQueues
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListTaskQueueReturn} OK
		 */
		ListTaskQueue(WorkspaceSid: string, FriendlyName: string | null | undefined, EvaluateWorkerAttributes: string | null | undefined, WorkerSid: string | null | undefined, Ordering: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListTaskQueueReturn> {
			return this.http.get<ListTaskQueueReturn>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/TaskQueues&FriendlyName=' + (FriendlyName == null ? '' : encodeURIComponent(FriendlyName)) + '&EvaluateWorkerAttributes=' + (EvaluateWorkerAttributes == null ? '' : encodeURIComponent(EvaluateWorkerAttributes)) + '&WorkerSid=' + (WorkerSid == null ? '' : encodeURIComponent(WorkerSid)) + '&Ordering=' + (Ordering == null ? '' : encodeURIComponent(Ordering)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/TaskQueues/Statistics
		 * @param {string} WorkspaceSid The SID of the Workspace with the TaskQueues to read.
		 * @param {Date} EndDate Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
		 * @param {string} FriendlyName The `friendly_name` of the TaskQueue statistics to read.
		 * @param {number} Minutes Only calculate statistics since this many minutes in the past. The default is 15 minutes.
		 * @param {Date} StartDate Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
		 * @param {string} TaskChannel Only calculate statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
		 * @param {string} SplitByWaitTime A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListTaskQueuesStatisticsReturn} OK
		 */
		ListTaskQueuesStatistics(WorkspaceSid: string, EndDate: Date | null | undefined, FriendlyName: string | null | undefined, Minutes: number | null | undefined, StartDate: Date | null | undefined, TaskChannel: string | null | undefined, SplitByWaitTime: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListTaskQueuesStatisticsReturn> {
			return this.http.get<ListTaskQueuesStatisticsReturn>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/TaskQueues/Statistics&EndDate=' + EndDate?.toISOString() + '&FriendlyName=' + (FriendlyName == null ? '' : encodeURIComponent(FriendlyName)) + '&Minutes=' + Minutes + '&StartDate=' + StartDate?.toISOString() + '&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)) + '&SplitByWaitTime=' + (SplitByWaitTime == null ? '' : encodeURIComponent(SplitByWaitTime)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the TaskQueue to delete.
		 * @param {string} Sid The SID of the TaskQueue resource to delete.
		 * @return {void} 
		 */
		DeleteTaskQueue(WorkspaceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/TaskQueues/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the TaskQueue to fetch.
		 * @param {string} Sid The SID of the TaskQueue resource to fetch.
		 * @return {Taskrouterv1workspacetask_queue} OK
		 */
		FetchTaskQueue(WorkspaceSid: string, Sid: string): Observable<Taskrouterv1workspacetask_queue> {
			return this.http.get<Taskrouterv1workspacetask_queue>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/TaskQueues/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/CumulativeStatistics
		 * @param {string} WorkspaceSid The SID of the Workspace with the TaskQueue to fetch.
		 * @param {string} TaskQueueSid The SID of the TaskQueue for which to fetch statistics.
		 * @param {Date} EndDate Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
		 * @param {number} Minutes Only calculate statistics since this many minutes in the past. The default is 15 minutes.
		 * @param {Date} StartDate Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
		 * @param {string} TaskChannel Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
		 * @param {string} SplitByWaitTime A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. TaskRouter will calculate statistics on up to 10,000 Tasks/Reservations for any given threshold.
		 * @return {Taskrouterv1workspacetask_queuetask_queue_cumulative_statistics} OK
		 */
		FetchTaskQueueCumulativeStatistics(WorkspaceSid: string, TaskQueueSid: string, EndDate: Date | null | undefined, Minutes: number | null | undefined, StartDate: Date | null | undefined, TaskChannel: string | null | undefined, SplitByWaitTime: string | null | undefined): Observable<Taskrouterv1workspacetask_queuetask_queue_cumulative_statistics> {
			return this.http.get<Taskrouterv1workspacetask_queuetask_queue_cumulative_statistics>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/TaskQueues/' + (TaskQueueSid == null ? '' : encodeURIComponent(TaskQueueSid)) + '/CumulativeStatistics&EndDate=' + EndDate?.toISOString() + '&Minutes=' + Minutes + '&StartDate=' + StartDate?.toISOString() + '&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)) + '&SplitByWaitTime=' + (SplitByWaitTime == null ? '' : encodeURIComponent(SplitByWaitTime)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/RealTimeStatistics
		 * @param {string} WorkspaceSid The SID of the Workspace with the TaskQueue to fetch.
		 * @param {string} TaskQueueSid The SID of the TaskQueue for which to fetch statistics.
		 * @param {string} TaskChannel The TaskChannel for which to fetch statistics. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
		 * @return {Taskrouterv1workspacetask_queuetask_queue_real_time_statistics} OK
		 */
		FetchTaskQueueRealTimeStatistics(WorkspaceSid: string, TaskQueueSid: string, TaskChannel: string | null | undefined): Observable<Taskrouterv1workspacetask_queuetask_queue_real_time_statistics> {
			return this.http.get<Taskrouterv1workspacetask_queuetask_queue_real_time_statistics>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/TaskQueues/' + (TaskQueueSid == null ? '' : encodeURIComponent(TaskQueueSid)) + '/RealTimeStatistics&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/Statistics
		 * @param {string} WorkspaceSid The SID of the Workspace with the TaskQueue to fetch.
		 * @param {string} TaskQueueSid The SID of the TaskQueue for which to fetch statistics.
		 * @param {Date} EndDate Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
		 * @param {number} Minutes Only calculate statistics since this many minutes in the past. The default is 15 minutes.
		 * @param {Date} StartDate Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
		 * @param {string} TaskChannel Only calculate real-time and cumulative statistics for the specified TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
		 * @param {string} SplitByWaitTime A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed.
		 * @return {Taskrouterv1workspacetask_queuetask_queue_statistics} OK
		 */
		FetchTaskQueueStatistics(WorkspaceSid: string, TaskQueueSid: string, EndDate: Date | null | undefined, Minutes: number | null | undefined, StartDate: Date | null | undefined, TaskChannel: string | null | undefined, SplitByWaitTime: string | null | undefined): Observable<Taskrouterv1workspacetask_queuetask_queue_statistics> {
			return this.http.get<Taskrouterv1workspacetask_queuetask_queue_statistics>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/TaskQueues/' + (TaskQueueSid == null ? '' : encodeURIComponent(TaskQueueSid)) + '/Statistics&EndDate=' + EndDate?.toISOString() + '&Minutes=' + Minutes + '&StartDate=' + StartDate?.toISOString() + '&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)) + '&SplitByWaitTime=' + (SplitByWaitTime == null ? '' : encodeURIComponent(SplitByWaitTime)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Tasks
		 * @param {string} WorkspaceSid The SID of the Workspace with the Tasks to read.
		 * @param {number} Priority The priority value of the Tasks to read. Returns the list of all Tasks in the Workspace with the specified priority.
		 * @param {Array<string>} AssignmentStatus The `assignment_status` of the Tasks you want to read. Can be: `pending`, `reserved`, `assigned`, `canceled`, `wrapping`, or `completed`. Returns all Tasks in the Workspace with the specified `assignment_status`.
		 * @param {string} WorkflowSid The SID of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this SID.
		 * @param {string} WorkflowName The friendly name of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this friendly name.
		 * @param {string} TaskQueueSid The SID of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this SID.
		 * @param {string} TaskQueueName The `friendly_name` of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this friendly name.
		 * @param {string} EvaluateTaskAttributes The attributes of the Tasks to read. Returns the Tasks that match the attributes specified in this parameter.
		 * @param {string} Ordering How to order the returned Task resources. By default, Tasks are sorted by ascending DateCreated. This value is specified as: `Attribute:Order`, where `Attribute` can be either `DateCreated`, `Priority`, or `VirtualStartTime` and `Order` can be either `asc` or `desc`. For example, `Priority:desc` returns Tasks ordered in descending order of their Priority. Pairings of sort orders can be specified in a comma-separated list such as `Priority:desc,DateCreated:asc`, which returns the Tasks in descending Priority order and ascending DateCreated Order. The only ordering pairing not allowed is DateCreated and VirtualStartTime.
		 * @param {boolean} HasAddons Whether to read Tasks with Add-ons. If `true`, returns only Tasks with Add-ons. If `false`, returns only Tasks without Add-ons.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListTaskReturn} OK
		 */
		ListTask(WorkspaceSid: string, Priority: number | null | undefined, AssignmentStatus: Array<string> | null | undefined, WorkflowSid: string | null | undefined, WorkflowName: string | null | undefined, TaskQueueSid: string | null | undefined, TaskQueueName: string | null | undefined, EvaluateTaskAttributes: string | null | undefined, Ordering: string | null | undefined, HasAddons: boolean | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListTaskReturn> {
			return this.http.get<ListTaskReturn>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Tasks&Priority=' + Priority + '&' + AssignmentStatus?.map(z => `AssignmentStatus=${encodeURIComponent(z)}`).join('&') + '&WorkflowSid=' + (WorkflowSid == null ? '' : encodeURIComponent(WorkflowSid)) + '&WorkflowName=' + (WorkflowName == null ? '' : encodeURIComponent(WorkflowName)) + '&TaskQueueSid=' + (TaskQueueSid == null ? '' : encodeURIComponent(TaskQueueSid)) + '&TaskQueueName=' + (TaskQueueName == null ? '' : encodeURIComponent(TaskQueueName)) + '&EvaluateTaskAttributes=' + (EvaluateTaskAttributes == null ? '' : encodeURIComponent(EvaluateTaskAttributes)) + '&Ordering=' + (Ordering == null ? '' : encodeURIComponent(Ordering)) + '&HasAddons=' + HasAddons + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the Task to delete.
		 * @param {string} Sid The SID of the Task resource to delete.
		 * @return {void} 
		 */
		DeleteTask(WorkspaceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Tasks/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the Task to fetch.
		 * @param {string} Sid The SID of the Task resource to fetch.
		 * @return {Taskrouterv1workspacetask} OK
		 */
		FetchTask(WorkspaceSid: string, Sid: string): Observable<Taskrouterv1workspacetask> {
			return this.http.get<Taskrouterv1workspacetask>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Tasks/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations
		 * @param {string} WorkspaceSid The SID of the Workspace with the TaskReservation resources to read.
		 * @param {string} TaskSid The SID of the reserved Task resource with the TaskReservation resources to read.
		 * @param {Task_reservation_enum_status} ReservationStatus Returns the list of reservations for a task with a specified ReservationStatus.  Can be: `pending`, `accepted`, `rejected`, or `timeout`.
		 * @param {string} WorkerSid The SID of the reserved Worker resource to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListTaskReservationReturn} OK
		 */
		ListTaskReservation(WorkspaceSid: string, TaskSid: string, ReservationStatus: Task_reservation_enum_status | null | undefined, WorkerSid: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListTaskReservationReturn> {
			return this.http.get<ListTaskReservationReturn>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Tasks/' + (TaskSid == null ? '' : encodeURIComponent(TaskSid)) + '/Reservations&ReservationStatus=' + ReservationStatus + '&WorkerSid=' + (WorkerSid == null ? '' : encodeURIComponent(WorkerSid)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the TaskReservation resource to fetch.
		 * @param {string} TaskSid The SID of the reserved Task resource with the TaskReservation resource to fetch.
		 * @param {string} Sid The SID of the TaskReservation resource to fetch.
		 * @return {Taskrouterv1workspacetasktask_reservation} OK
		 */
		FetchTaskReservation(WorkspaceSid: string, TaskSid: string, Sid: string): Observable<Taskrouterv1workspacetasktask_reservation> {
			return this.http.get<Taskrouterv1workspacetasktask_reservation>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Tasks/' + (TaskSid == null ? '' : encodeURIComponent(TaskSid)) + '/Reservations/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workers
		 * @param {string} WorkspaceSid The SID of the Workspace with the Workers to read.
		 * @param {string} ActivityName The `activity_name` of the Worker resources to read.
		 * @param {string} ActivitySid The `activity_sid` of the Worker resources to read.
		 * @param {string} Available Whether to return only Worker resources that are available or unavailable. Can be `true`, `1`, or `yes` to return Worker resources that are available, and `false`, or any value returns the Worker resources that are not available.
		 * @param {string} FriendlyName The `friendly_name` of the Worker resources to read.
		 * @param {string} TargetWorkersExpression Filter by Workers that would match an expression. In addition to fields in the workers' attributes, the expression can include the following worker fields: `sid`, `friendly_name`, `activity_sid`, or `activity_name`
		 * @param {string} TaskQueueName The `friendly_name` of the TaskQueue that the Workers to read are eligible for.
		 * @param {string} TaskQueueSid The SID of the TaskQueue that the Workers to read are eligible for.
		 * @param {string} Ordering Sorting parameter for Workers
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListWorkerReturn} OK
		 */
		ListWorker(WorkspaceSid: string, ActivityName: string | null | undefined, ActivitySid: string | null | undefined, Available: string | null | undefined, FriendlyName: string | null | undefined, TargetWorkersExpression: string | null | undefined, TaskQueueName: string | null | undefined, TaskQueueSid: string | null | undefined, Ordering: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListWorkerReturn> {
			return this.http.get<ListWorkerReturn>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workers&ActivityName=' + (ActivityName == null ? '' : encodeURIComponent(ActivityName)) + '&ActivitySid=' + (ActivitySid == null ? '' : encodeURIComponent(ActivitySid)) + '&Available=' + (Available == null ? '' : encodeURIComponent(Available)) + '&FriendlyName=' + (FriendlyName == null ? '' : encodeURIComponent(FriendlyName)) + '&TargetWorkersExpression=' + (TargetWorkersExpression == null ? '' : encodeURIComponent(TargetWorkersExpression)) + '&TaskQueueName=' + (TaskQueueName == null ? '' : encodeURIComponent(TaskQueueName)) + '&TaskQueueSid=' + (TaskQueueSid == null ? '' : encodeURIComponent(TaskQueueSid)) + '&Ordering=' + (Ordering == null ? '' : encodeURIComponent(Ordering)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workers/CumulativeStatistics
		 * @param {string} WorkspaceSid The SID of the Workspace with the resource to fetch.
		 * @param {Date} EndDate Only calculate statistics from this date and time and earlier, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
		 * @param {number} Minutes Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
		 * @param {Date} StartDate Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
		 * @param {string} TaskChannel Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
		 * @return {Taskrouterv1workspaceworkerworkers_cumulative_statistics} OK
		 */
		FetchWorkersCumulativeStatistics(WorkspaceSid: string, EndDate: Date | null | undefined, Minutes: number | null | undefined, StartDate: Date | null | undefined, TaskChannel: string | null | undefined): Observable<Taskrouterv1workspaceworkerworkers_cumulative_statistics> {
			return this.http.get<Taskrouterv1workspaceworkerworkers_cumulative_statistics>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workers/CumulativeStatistics&EndDate=' + EndDate?.toISOString() + '&Minutes=' + Minutes + '&StartDate=' + StartDate?.toISOString() + '&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workers/RealTimeStatistics
		 * @param {string} WorkspaceSid The SID of the Workspace with the resource to fetch.
		 * @param {string} TaskChannel Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
		 * @return {Taskrouterv1workspaceworkerworkers_real_time_statistics} OK
		 */
		FetchWorkersRealTimeStatistics(WorkspaceSid: string, TaskChannel: string | null | undefined): Observable<Taskrouterv1workspaceworkerworkers_real_time_statistics> {
			return this.http.get<Taskrouterv1workspaceworkerworkers_real_time_statistics>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workers/RealTimeStatistics&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workers/Statistics
		 * @param {string} WorkspaceSid The SID of the Workspace with the Worker to fetch.
		 * @param {number} Minutes Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
		 * @param {Date} StartDate Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
		 * @param {Date} EndDate Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
		 * @param {string} TaskQueueSid The SID of the TaskQueue for which to fetch Worker statistics.
		 * @param {string} TaskQueueName The `friendly_name` of the TaskQueue for which to fetch Worker statistics.
		 * @param {string} FriendlyName Only include Workers with `friendly_name` values that match this parameter.
		 * @param {string} TaskChannel Only calculate statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
		 * @return {Taskrouterv1workspaceworkerworker_statistics} OK
		 */
		FetchWorkerStatistics(WorkspaceSid: string, Minutes: number | null | undefined, StartDate: Date | null | undefined, EndDate: Date | null | undefined, TaskQueueSid: string | null | undefined, TaskQueueName: string | null | undefined, FriendlyName: string | null | undefined, TaskChannel: string | null | undefined): Observable<Taskrouterv1workspaceworkerworker_statistics> {
			return this.http.get<Taskrouterv1workspaceworkerworker_statistics>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workers/Statistics&Minutes=' + Minutes + '&StartDate=' + StartDate?.toISOString() + '&EndDate=' + EndDate?.toISOString() + '&TaskQueueSid=' + (TaskQueueSid == null ? '' : encodeURIComponent(TaskQueueSid)) + '&TaskQueueName=' + (TaskQueueName == null ? '' : encodeURIComponent(TaskQueueName)) + '&FriendlyName=' + (FriendlyName == null ? '' : encodeURIComponent(FriendlyName)) + '&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)), {});
		}

		/**
		 * Delete v1/Workspaces/{WorkspaceSid}/Workers/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the Worker to delete.
		 * @param {string} Sid The SID of the Worker resource to delete.
		 * @return {void} 
		 */
		DeleteWorker(WorkspaceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workers/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workers/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the Worker to fetch.
		 * @param {string} Sid The SID of the Worker resource to fetch.
		 * @return {Taskrouterv1workspaceworker} OK
		 */
		FetchWorker(WorkspaceSid: string, Sid: string): Observable<Taskrouterv1workspaceworker> {
			return this.http.get<Taskrouterv1workspaceworker>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workers/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels
		 * @param {string} WorkspaceSid The SID of the Workspace with the WorkerChannels to read.
		 * @param {string} WorkerSid The SID of the Worker with the WorkerChannels to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListWorkerChannelReturn} OK
		 */
		ListWorkerChannel(WorkspaceSid: string, WorkerSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListWorkerChannelReturn> {
			return this.http.get<ListWorkerChannelReturn>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workers/' + (WorkerSid == null ? '' : encodeURIComponent(WorkerSid)) + '/Channels&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the WorkerChannel to fetch.
		 * @param {string} WorkerSid The SID of the Worker with the WorkerChannel to fetch.
		 * @param {string} Sid The SID of the WorkerChannel to fetch.
		 * @return {Taskrouterv1workspaceworkerworker_channel} OK
		 */
		FetchWorkerChannel(WorkspaceSid: string, WorkerSid: string, Sid: string): Observable<Taskrouterv1workspaceworkerworker_channel> {
			return this.http.get<Taskrouterv1workspaceworkerworker_channel>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workers/' + (WorkerSid == null ? '' : encodeURIComponent(WorkerSid)) + '/Channels/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations
		 * @param {string} WorkspaceSid The SID of the Workspace with the WorkerReservation resources to read.
		 * @param {string} WorkerSid The SID of the reserved Worker resource with the WorkerReservation resources to read.
		 * @param {Task_reservation_enum_status} ReservationStatus Returns the list of reservations for a worker with a specified ReservationStatus. Can be: `pending`, `accepted`, `rejected`, `timeout`, `canceled`, or `rescinded`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListWorkerReservationReturn} OK
		 */
		ListWorkerReservation(WorkspaceSid: string, WorkerSid: string, ReservationStatus: Task_reservation_enum_status | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListWorkerReservationReturn> {
			return this.http.get<ListWorkerReservationReturn>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workers/' + (WorkerSid == null ? '' : encodeURIComponent(WorkerSid)) + '/Reservations&ReservationStatus=' + ReservationStatus + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the WorkerReservation resource to fetch.
		 * @param {string} WorkerSid The SID of the reserved Worker resource with the WorkerReservation resource to fetch.
		 * @param {string} Sid The SID of the WorkerReservation resource to fetch.
		 * @return {Taskrouterv1workspaceworkerworker_reservation} OK
		 */
		FetchWorkerReservation(WorkspaceSid: string, WorkerSid: string, Sid: string): Observable<Taskrouterv1workspaceworkerworker_reservation> {
			return this.http.get<Taskrouterv1workspaceworkerworker_reservation>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workers/' + (WorkerSid == null ? '' : encodeURIComponent(WorkerSid)) + '/Reservations/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Statistics
		 * @param {string} WorkspaceSid The SID of the Workspace with the WorkerChannel to fetch.
		 * @param {string} WorkerSid The SID of the Worker with the WorkerChannel to fetch.
		 * @param {number} Minutes Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
		 * @param {Date} StartDate Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
		 * @param {Date} EndDate Only include usage that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
		 * @param {string} TaskChannel Only calculate statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
		 * @return {Taskrouterv1workspaceworkerworker_instance_statistics} OK
		 */
		FetchWorkerInstanceStatistics(WorkspaceSid: string, WorkerSid: string, Minutes: number | null | undefined, StartDate: Date | null | undefined, EndDate: Date | null | undefined, TaskChannel: string | null | undefined): Observable<Taskrouterv1workspaceworkerworker_instance_statistics> {
			return this.http.get<Taskrouterv1workspaceworkerworker_instance_statistics>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workers/' + (WorkerSid == null ? '' : encodeURIComponent(WorkerSid)) + '/Statistics&Minutes=' + Minutes + '&StartDate=' + StartDate?.toISOString() + '&EndDate=' + EndDate?.toISOString() + '&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workflows
		 * @param {string} WorkspaceSid The SID of the Workspace with the Workflow to read.
		 * @param {string} FriendlyName The `friendly_name` of the Workflow resources to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListWorkflowReturn} OK
		 */
		ListWorkflow(WorkspaceSid: string, FriendlyName: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListWorkflowReturn> {
			return this.http.get<ListWorkflowReturn>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workflows&FriendlyName=' + (FriendlyName == null ? '' : encodeURIComponent(FriendlyName)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the Workflow to delete.
		 * @param {string} Sid The SID of the Workflow resource to delete.
		 * @return {void} 
		 */
		DeleteWorkflow(WorkspaceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workflows/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}
		 * @param {string} WorkspaceSid The SID of the Workspace with the Workflow to fetch.
		 * @param {string} Sid The SID of the Workflow resource to fetch.
		 * @return {Taskrouterv1workspaceworkflow} OK
		 */
		FetchWorkflow(WorkspaceSid: string, Sid: string): Observable<Taskrouterv1workspaceworkflow> {
			return this.http.get<Taskrouterv1workspaceworkflow>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workflows/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/CumulativeStatistics
		 * @param {string} WorkspaceSid The SID of the Workspace with the resource to fetch.
		 * @param {string} WorkflowSid Returns the list of Tasks that are being controlled by the Workflow with the specified Sid value.
		 * @param {Date} EndDate Only include usage that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
		 * @param {number} Minutes Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
		 * @param {Date} StartDate Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
		 * @param {string} TaskChannel Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
		 * @param {string} SplitByWaitTime A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, `5,30` would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA. TaskRouter will calculate statistics on up to 10,000 Tasks for any given threshold.
		 * @return {Taskrouterv1workspaceworkflowworkflow_cumulative_statistics} OK
		 */
		FetchWorkflowCumulativeStatistics(WorkspaceSid: string, WorkflowSid: string, EndDate: Date | null | undefined, Minutes: number | null | undefined, StartDate: Date | null | undefined, TaskChannel: string | null | undefined, SplitByWaitTime: string | null | undefined): Observable<Taskrouterv1workspaceworkflowworkflow_cumulative_statistics> {
			return this.http.get<Taskrouterv1workspaceworkflowworkflow_cumulative_statistics>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workflows/' + (WorkflowSid == null ? '' : encodeURIComponent(WorkflowSid)) + '/CumulativeStatistics&EndDate=' + EndDate?.toISOString() + '&Minutes=' + Minutes + '&StartDate=' + StartDate?.toISOString() + '&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)) + '&SplitByWaitTime=' + (SplitByWaitTime == null ? '' : encodeURIComponent(SplitByWaitTime)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/RealTimeStatistics
		 * @param {string} WorkspaceSid The SID of the Workspace with the Workflow to fetch.
		 * @param {string} WorkflowSid Returns the list of Tasks that are being controlled by the Workflow with the specified SID value.
		 * @param {string} TaskChannel Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
		 * @return {Taskrouterv1workspaceworkflowworkflow_real_time_statistics} OK
		 */
		FetchWorkflowRealTimeStatistics(WorkspaceSid: string, WorkflowSid: string, TaskChannel: string | null | undefined): Observable<Taskrouterv1workspaceworkflowworkflow_real_time_statistics> {
			return this.http.get<Taskrouterv1workspaceworkflowworkflow_real_time_statistics>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workflows/' + (WorkflowSid == null ? '' : encodeURIComponent(WorkflowSid)) + '/RealTimeStatistics&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)), {});
		}

		/**
		 * Get v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/Statistics
		 * @param {string} WorkspaceSid The SID of the Workspace with the Workflow to fetch.
		 * @param {string} WorkflowSid Returns the list of Tasks that are being controlled by the Workflow with the specified SID value.
		 * @param {number} Minutes Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
		 * @param {Date} StartDate Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
		 * @param {Date} EndDate Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
		 * @param {string} TaskChannel Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
		 * @param {string} SplitByWaitTime A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, `5,30` would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA.
		 * @return {Taskrouterv1workspaceworkflowworkflow_statistics} OK
		 */
		FetchWorkflowStatistics(WorkspaceSid: string, WorkflowSid: string, Minutes: number | null | undefined, StartDate: Date | null | undefined, EndDate: Date | null | undefined, TaskChannel: string | null | undefined, SplitByWaitTime: string | null | undefined): Observable<Taskrouterv1workspaceworkflowworkflow_statistics> {
			return this.http.get<Taskrouterv1workspaceworkflowworkflow_statistics>(this.baseUri + 'v1/Workspaces/' + (WorkspaceSid == null ? '' : encodeURIComponent(WorkspaceSid)) + '/Workflows/' + (WorkflowSid == null ? '' : encodeURIComponent(WorkflowSid)) + '/Statistics&Minutes=' + Minutes + '&StartDate=' + StartDate?.toISOString() + '&EndDate=' + EndDate?.toISOString() + '&TaskChannel=' + (TaskChannel == null ? '' : encodeURIComponent(TaskChannel)) + '&SplitByWaitTime=' + (SplitByWaitTime == null ? '' : encodeURIComponent(SplitByWaitTime)), {});
		}
	}

	export interface ListWorkspaceReturn {
		meta?: ListWorkspaceReturnMeta;
		workspaces?: Array<Taskrouterv1workspace>;
	}
	export interface ListWorkspaceReturnFormProperties {
	}
	export function CreateListWorkspaceReturnFormGroup() {
		return new FormGroup<ListWorkspaceReturnFormProperties>({
		});

	}

	export interface ListWorkspaceReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListWorkspaceReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListWorkspaceReturnMetaFormGroup() {
		return new FormGroup<ListWorkspaceReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListActivityReturn {
		activities?: Array<Taskrouterv1workspaceactivity>;
		meta?: ListActivityReturnMeta;
	}
	export interface ListActivityReturnFormProperties {
	}
	export function CreateListActivityReturnFormGroup() {
		return new FormGroup<ListActivityReturnFormProperties>({
		});

	}

	export interface ListActivityReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListActivityReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListActivityReturnMetaFormGroup() {
		return new FormGroup<ListActivityReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventReturn {
		events?: Array<Taskrouterv1workspaceevent>;
		meta?: ListEventReturnMeta;
	}
	export interface ListEventReturnFormProperties {
	}
	export function CreateListEventReturnFormGroup() {
		return new FormGroup<ListEventReturnFormProperties>({
		});

	}

	export interface ListEventReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListEventReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListEventReturnMetaFormGroup() {
		return new FormGroup<ListEventReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTaskChannelReturn {
		channels?: Array<Taskrouterv1workspacetask_channel>;
		meta?: ListTaskChannelReturnMeta;
	}
	export interface ListTaskChannelReturnFormProperties {
	}
	export function CreateListTaskChannelReturnFormGroup() {
		return new FormGroup<ListTaskChannelReturnFormProperties>({
		});

	}

	export interface ListTaskChannelReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListTaskChannelReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListTaskChannelReturnMetaFormGroup() {
		return new FormGroup<ListTaskChannelReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTaskQueueReturn {
		meta?: ListTaskQueueReturnMeta;
		task_queues?: Array<Taskrouterv1workspacetask_queue>;
	}
	export interface ListTaskQueueReturnFormProperties {
	}
	export function CreateListTaskQueueReturnFormGroup() {
		return new FormGroup<ListTaskQueueReturnFormProperties>({
		});

	}

	export interface ListTaskQueueReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListTaskQueueReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListTaskQueueReturnMetaFormGroup() {
		return new FormGroup<ListTaskQueueReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTaskQueuesStatisticsReturn {
		meta?: ListTaskQueuesStatisticsReturnMeta;
		task_queues_statistics?: Array<Taskrouterv1workspacetask_queuetask_queues_statistics>;
	}
	export interface ListTaskQueuesStatisticsReturnFormProperties {
	}
	export function CreateListTaskQueuesStatisticsReturnFormGroup() {
		return new FormGroup<ListTaskQueuesStatisticsReturnFormProperties>({
		});

	}

	export interface ListTaskQueuesStatisticsReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListTaskQueuesStatisticsReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListTaskQueuesStatisticsReturnMetaFormGroup() {
		return new FormGroup<ListTaskQueuesStatisticsReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTaskReturn {
		meta?: ListTaskReturnMeta;
		tasks?: Array<Taskrouterv1workspacetask>;
	}
	export interface ListTaskReturnFormProperties {
	}
	export function CreateListTaskReturnFormGroup() {
		return new FormGroup<ListTaskReturnFormProperties>({
		});

	}

	export interface ListTaskReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListTaskReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListTaskReturnMetaFormGroup() {
		return new FormGroup<ListTaskReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTaskReservationReturn {
		meta?: ListTaskReservationReturnMeta;
		reservations?: Array<Taskrouterv1workspacetasktask_reservation>;
	}
	export interface ListTaskReservationReturnFormProperties {
	}
	export function CreateListTaskReservationReturnFormGroup() {
		return new FormGroup<ListTaskReservationReturnFormProperties>({
		});

	}

	export interface ListTaskReservationReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListTaskReservationReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListTaskReservationReturnMetaFormGroup() {
		return new FormGroup<ListTaskReservationReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkerReturn {
		meta?: ListWorkerReturnMeta;
		workers?: Array<Taskrouterv1workspaceworker>;
	}
	export interface ListWorkerReturnFormProperties {
	}
	export function CreateListWorkerReturnFormGroup() {
		return new FormGroup<ListWorkerReturnFormProperties>({
		});

	}

	export interface ListWorkerReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListWorkerReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListWorkerReturnMetaFormGroup() {
		return new FormGroup<ListWorkerReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkerChannelReturn {
		channels?: Array<Taskrouterv1workspaceworkerworker_channel>;
		meta?: ListWorkerChannelReturnMeta;
	}
	export interface ListWorkerChannelReturnFormProperties {
	}
	export function CreateListWorkerChannelReturnFormGroup() {
		return new FormGroup<ListWorkerChannelReturnFormProperties>({
		});

	}

	export interface ListWorkerChannelReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListWorkerChannelReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListWorkerChannelReturnMetaFormGroup() {
		return new FormGroup<ListWorkerChannelReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkerReservationReturn {
		meta?: ListWorkerReservationReturnMeta;
		reservations?: Array<Taskrouterv1workspaceworkerworker_reservation>;
	}
	export interface ListWorkerReservationReturnFormProperties {
	}
	export function CreateListWorkerReservationReturnFormGroup() {
		return new FormGroup<ListWorkerReservationReturnFormProperties>({
		});

	}

	export interface ListWorkerReservationReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListWorkerReservationReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListWorkerReservationReturnMetaFormGroup() {
		return new FormGroup<ListWorkerReservationReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkflowReturn {
		meta?: ListWorkflowReturnMeta;
		workflows?: Array<Taskrouterv1workspaceworkflow>;
	}
	export interface ListWorkflowReturnFormProperties {
	}
	export function CreateListWorkflowReturnFormGroup() {
		return new FormGroup<ListWorkflowReturnFormProperties>({
		});

	}

	export interface ListWorkflowReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListWorkflowReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowReturnMetaFormGroup() {
		return new FormGroup<ListWorkflowReturnMetaFormProperties>({
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

