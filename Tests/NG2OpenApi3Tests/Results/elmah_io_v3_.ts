import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A breadcrumb represent a step preceding a log message. */
	export interface Breadcrumb {

		/** An action representing the breadcrumb. You can set a custom action or use one of the built-in: click, submit, navigation, request, error. */
		action?: string | null;

		/** The date and time in UTC of the breadcrumb. If no date and time is provided, we will use the current date and time in UTC. */
		dateTime?: Date | null;

		/** A message representing the breadcrumb. This should elaborate on the action. */
		message?: string | null;

		/** An enum value representing the severity of this breadcrumb. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal. */
		severity?: string | null;
	}

	/** A breadcrumb represent a step preceding a log message. */
	export interface BreadcrumbFormProperties {

		/** An action representing the breadcrumb. You can set a custom action or use one of the built-in: click, submit, navigation, request, error. */
		action: FormControl<string | null | undefined>,

		/** The date and time in UTC of the breadcrumb. If no date and time is provided, we will use the current date and time in UTC. */
		dateTime: FormControl<Date | null | undefined>,

		/** A message representing the breadcrumb. This should elaborate on the action. */
		message: FormControl<string | null | undefined>,

		/** An enum value representing the severity of this breadcrumb. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal. */
		severity: FormControl<string | null | undefined>,
	}
	export function CreateBreadcrumbFormGroup() {
		return new FormGroup<BreadcrumbFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			dateTime: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBulkMessageResult {

		/** The location of the created message if StatusCode equals Created. */
		location?: string | null;

		/**
		 * Status code of the individual messages as if it were being created through the non-bulk endpoint.
		 * If a message was succesfully created, the status code will be 201 and location will contain an URL.
		 * If a message was ignored, the status code will be 200 and the location will be empty.
		 */
		statusCode?: number | null;
	}
	export interface CreateBulkMessageResultFormProperties {

		/** The location of the created message if StatusCode equals Created. */
		location: FormControl<string | null | undefined>,

		/**
		 * Status code of the individual messages as if it were being created through the non-bulk endpoint.
		 * If a message was succesfully created, the status code will be 201 and location will contain an URL.
		 * If a message was ignored, the status code will be 200 and the location will be empty.
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateCreateBulkMessageResultFormGroup() {
		return new FormGroup<CreateBulkMessageResultFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDeployment {

		/** When was this deployment created in UTC. Defaults to current time if not specified. */
		created?: Date | null;

		/**
		 * Optional description of this deployment. Can be markdown or clear text.
		 * Max length: 8192
		 */
		description?: string | null;

		/**
		 * As default, deployments are attached all logs of the organization. If you want a deployment to
		 * attach to a single log only, set this to the ID of that log.
		 */
		logId?: string | null;

		/**
		 * The email of the person responsible for creating this deployment. This can be the email taken from
		 * your deployment server (like Azure DevOps or Octopus).
		 * Max length: 320
		 */
		userEmail?: string | null;

		/**
		 * The name of the person responsible for creating this deployment. This can be the name taken from
		 * your deployment server (like Azure DevOps or Octopus).
		 * Max length: 256
		 */
		userName?: string | null;

		/**
		 * The version number of this deployment. The value of version can be a SemVer compliant string or any other
		 * syntax that you are using as your version numbering scheme.
		 * Required
		 * Max length: 256
		 */
		version: string;
	}
	export interface CreateDeploymentFormProperties {

		/** When was this deployment created in UTC. Defaults to current time if not specified. */
		created: FormControl<Date | null | undefined>,

		/**
		 * Optional description of this deployment. Can be markdown or clear text.
		 * Max length: 8192
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * As default, deployments are attached all logs of the organization. If you want a deployment to
		 * attach to a single log only, set this to the ID of that log.
		 */
		logId: FormControl<string | null | undefined>,

		/**
		 * The email of the person responsible for creating this deployment. This can be the email taken from
		 * your deployment server (like Azure DevOps or Octopus).
		 * Max length: 320
		 */
		userEmail: FormControl<string | null | undefined>,

		/**
		 * The name of the person responsible for creating this deployment. This can be the name taken from
		 * your deployment server (like Azure DevOps or Octopus).
		 * Max length: 256
		 */
		userName: FormControl<string | null | undefined>,

		/**
		 * The version number of this deployment. The value of version can be a SemVer compliant string or any other
		 * syntax that you are using as your version numbering scheme.
		 * Required
		 * Max length: 256
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentFormGroup() {
		return new FormGroup<CreateDeploymentFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			logId: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(320)]),
			userName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}

	export interface CreateDeploymentResult {

		/** The location of the created deployment. */
		location?: string | null;
	}
	export interface CreateDeploymentResultFormProperties {

		/** The location of the created deployment. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentResultFormGroup() {
		return new FormGroup<CreateDeploymentResultFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateHeartbeat {

		/**
		 * Optional string to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log.
		 * If not set, the application name "Heartbeats" will be set on all log messages generated from this heartbeat.
		 * Max length: 256
		 */
		application?: string | null;

		/**
		 * If result is "Degraded" or "Unhealthy" you can use this property to specify why.
		 * Max length: 8192
		 */
		reason?: string | null;

		/**
		 * The result of this heartbeat. Can be "Healthy, "Degraded", or "Unhealthy". Defaults to "Healthy"
		 * Max length: 9
		 */
		result?: string | null;

		/**
		 * Optional long for specifying how many milliseconds it took to execute the task resulting in this heartbeat. This can be used to get a better overview
		 * of how long a scheduled task or service is running or to figure out if the grace period should be increased.
		 */
		took?: number | null;

		/**
		 * Optional string to identify which version of your application logged this message. If not specified, any errors, warnings, or information messages will get
		 * the newest version number created through deployment tracking as with normal log messages.
		 * Max length: 256
		 */
		version?: string | null;
	}
	export interface CreateHeartbeatFormProperties {

		/**
		 * Optional string to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log.
		 * If not set, the application name "Heartbeats" will be set on all log messages generated from this heartbeat.
		 * Max length: 256
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * If result is "Degraded" or "Unhealthy" you can use this property to specify why.
		 * Max length: 8192
		 */
		reason: FormControl<string | null | undefined>,

		/**
		 * The result of this heartbeat. Can be "Healthy, "Degraded", or "Unhealthy". Defaults to "Healthy"
		 * Max length: 9
		 */
		result: FormControl<string | null | undefined>,

		/**
		 * Optional long for specifying how many milliseconds it took to execute the task resulting in this heartbeat. This can be used to get a better overview
		 * of how long a scheduled task or service is running or to figure out if the grace period should be increased.
		 */
		took: FormControl<number | null | undefined>,

		/**
		 * Optional string to identify which version of your application logged this message. If not specified, any errors, warnings, or information messages will get
		 * the newest version number created through deployment tracking as with normal log messages.
		 * Max length: 256
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCreateHeartbeatFormGroup() {
		return new FormGroup<CreateHeartbeatFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			result: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(9)]),
			took: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface CreateLog {

		/**
		 * Color of the log. The color must be one of the following (green on unknown value or missing):
		 * green, lightgreen, lime, yellow, orange, deeporange, red, pink, purple, deeppurple, blue, lightblue
		 */
		color?: string | null;

		/**
		 * Set to true to disable the log on creation. Defaults to false. A log can be enabled/disabled
		 * afterwards by calling the _disable and _enable endpoints.
		 */
		disabled?: boolean | null;

		/**
		 * Environment name of the new log. Must match an environment name (case insensitive).
		 * If a matching environment name was not found or the property is not set, the log
		 * will appear under "Other" in the UI.
		 */
		environmentName?: string | null;

		/**
		 * Name of the new log.
		 * Required
		 * Max length: 256
		 */
		name: string;
	}
	export interface CreateLogFormProperties {

		/**
		 * Color of the log. The color must be one of the following (green on unknown value or missing):
		 * green, lightgreen, lime, yellow, orange, deeporange, red, pink, purple, deeppurple, blue, lightblue
		 */
		color: FormControl<string | null | undefined>,

		/**
		 * Set to true to disable the log on creation. Defaults to false. A log can be enabled/disabled
		 * afterwards by calling the _disable and _enable endpoints.
		 */
		disabled: FormControl<boolean | null | undefined>,

		/**
		 * Environment name of the new log. Must match an environment name (case insensitive).
		 * If a matching environment name was not found or the property is not set, the log
		 * will appear under "Other" in the UI.
		 */
		environmentName: FormControl<string | null | undefined>,

		/**
		 * Name of the new log.
		 * Required
		 * Max length: 256
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateLogFormGroup() {
		return new FormGroup<CreateLogFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			environmentName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}

	export interface CreateLogResult {

		/** The location of the created log. */
		location?: string | null;
	}
	export interface CreateLogResultFormProperties {

		/** The location of the created log. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateCreateLogResultFormGroup() {
		return new FormGroup<CreateLogResultFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMessage {

		/** Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log */
		application?: string | null;

		/** A list of breadcrumbs preceding this log message. */
		breadcrumbs?: Array<Breadcrumb>;

		/**
		 * The log message category. Category can be a string of choice but typically contain a logging category set by a logging framework like NLog or Serilog.
		 * When logging through a logging framework, this field will be provided by the framework and not something that needs to be set manually.
		 */
		category?: string | null;

		/**
		 * Code can be used to include source code related to the log message. The code will typically span from a few lines before the line causing the log message
		 * to a few lines after. For now, all lines above 21 will be removed. This makes room for showing 10 lines before the logging line, the logging line, and
		 * 10 lines after the logging line. Don't include a very large string in this property since that will quickly make the entire messages exceed the max limit
		 * of 256 kb.
		 */
		code?: string | null;

		/** A key/value pair of cookies. This property only makes sense for logging messages related to web requests. */
		cookies?: Array<Item>;

		/**
		 * CorrelationId can be used to group similar log messages together into a single discoverable batch. A correlation ID could be a session ID from ASP.NET Core,
		 * a unique string spanning multiple microsservices handling the same request, or similar.
		 */
		correlationId?: string | null;

		/**
		 * A key/value pair of user-defined fields and their values. When logging an exception, the Data dictionary of
		 * the exception is copied to this property. You can add additional key/value pairs, by modifying the Data
		 * dictionary on the exception or by supplying additional key/values to this API.
		 */
		data?: Array<Item>;

		/** The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC. */
		dateTime?: Date | null;

		/** A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there. */
		detail?: string | null;

		/** A key/value pair of form fields and their values. This property makes sense if logging message related to users inputting data in a form. */
		form?: Array<Item>;

		/** The hostname of the server logging the message. */
		hostname?: string | null;

		/** If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables. */
		method?: string | null;

		/** A key/value pair of query string parameters. This property makes sense if logging message related to a HTTP request. */
		queryString?: Array<Item>;

		/** A key/value pair of server values. Server variables are typically related to handling requests in a webserver but could be used for other types of information as well. */
		serverVariables?: Array<Item>;

		/** An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal */
		severity?: string | null;

		/** The source of the code logging the message. This could be the assembly name. */
		source?: string | null;

		/**
		 * If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,
		 * but could be used for logging successful status codes as well.
		 */
		statusCode?: number | null;

		/** The textual title or headline of the message to log. */
		title?: string | null;

		/**
		 * The title template of the message to log. This property can be used from logging frameworks that supports
		 * structured logging like: "{user} says {quote}". In the example, titleTemplate will be this string and title
		 * will be "Gilfoyle says It's not magic. It's talent and sweat".
		 */
		titleTemplate?: string | null;

		/** The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain. */
		type?: string | null;

		/** If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables. */
		url?: string | null;

		/** An identification of the user triggering this message. You can put the users email address or your user key into this property. */
		user?: string | null;

		/**
		 * Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other
		 * syntax that you are using as your version numbering scheme.
		 */
		version?: string | null;
	}
	export interface CreateMessageFormProperties {

		/** Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log */
		application: FormControl<string | null | undefined>,

		/**
		 * The log message category. Category can be a string of choice but typically contain a logging category set by a logging framework like NLog or Serilog.
		 * When logging through a logging framework, this field will be provided by the framework and not something that needs to be set manually.
		 */
		category: FormControl<string | null | undefined>,

		/**
		 * Code can be used to include source code related to the log message. The code will typically span from a few lines before the line causing the log message
		 * to a few lines after. For now, all lines above 21 will be removed. This makes room for showing 10 lines before the logging line, the logging line, and
		 * 10 lines after the logging line. Don't include a very large string in this property since that will quickly make the entire messages exceed the max limit
		 * of 256 kb.
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * CorrelationId can be used to group similar log messages together into a single discoverable batch. A correlation ID could be a session ID from ASP.NET Core,
		 * a unique string spanning multiple microsservices handling the same request, or similar.
		 */
		correlationId: FormControl<string | null | undefined>,

		/** The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC. */
		dateTime: FormControl<Date | null | undefined>,

		/** A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there. */
		detail: FormControl<string | null | undefined>,

		/** The hostname of the server logging the message. */
		hostname: FormControl<string | null | undefined>,

		/** If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables. */
		method: FormControl<string | null | undefined>,

		/** An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal */
		severity: FormControl<string | null | undefined>,

		/** The source of the code logging the message. This could be the assembly name. */
		source: FormControl<string | null | undefined>,

		/**
		 * If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,
		 * but could be used for logging successful status codes as well.
		 */
		statusCode: FormControl<number | null | undefined>,

		/** The textual title or headline of the message to log. */
		title: FormControl<string | null | undefined>,

		/**
		 * The title template of the message to log. This property can be used from logging frameworks that supports
		 * structured logging like: "{user} says {quote}". In the example, titleTemplate will be this string and title
		 * will be "Gilfoyle says It's not magic. It's talent and sweat".
		 */
		titleTemplate: FormControl<string | null | undefined>,

		/** The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain. */
		type: FormControl<string | null | undefined>,

		/** If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables. */
		url: FormControl<string | null | undefined>,

		/** An identification of the user triggering this message. You can put the users email address or your user key into this property. */
		user: FormControl<string | null | undefined>,

		/**
		 * Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other
		 * syntax that you are using as your version numbering scheme.
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCreateMessageFormGroup() {
		return new FormGroup<CreateMessageFormProperties>({
			application: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			dateTime: new FormControl<Date | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			titleTemplate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a key value pair. */
	export interface Item {

		/** The key of the item. */
		key?: string | null;

		/** The value of the item. */
		value?: string | null;
	}

	/** Represents a key value pair. */
	export interface ItemFormProperties {

		/** The key of the item. */
		key: FormControl<string | null | undefined>,

		/** The value of the item. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMessageResult {

		/** The location of the created message. */
		location?: string | null;
	}
	export interface CreateMessageResultFormProperties {

		/** The location of the created message. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateCreateMessageResultFormGroup() {
		return new FormGroup<CreateMessageResultFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Deployment {

		/** When was this deployment created. */
		created?: Date | null;

		/**
		 * The elmah.io id of the user creating this deployment. Since deployments are created on a subscription,
		 * the CreatedBy will contain the id of the user with the subscription.
		 */
		createdBy?: string | null;

		/** Sescription of this deployment in markdown or clear text. */
		description?: string | null;

		/** The ID of this deployment. */
		id?: string | null;

		/**
		 * If the deployment is attached a single log, this property is set to the ID of that log.
		 * If null, the deployment is attached all logs on the organization.
		 */
		logId?: string | null;

		/** The email of the person responsible for creating this deployment. */
		userEmail?: string | null;

		/** The name of the person responsible for creating this deployment. */
		userName?: string | null;

		/**
		 * The version number of this deployment. The value of version can be a SemVer compliant string or any other
		 * syntax that you are using as your version numbering scheme.
		 */
		version?: string | null;
	}
	export interface DeploymentFormProperties {

		/** When was this deployment created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * The elmah.io id of the user creating this deployment. Since deployments are created on a subscription,
		 * the CreatedBy will contain the id of the user with the subscription.
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Sescription of this deployment in markdown or clear text. */
		description: FormControl<string | null | undefined>,

		/** The ID of this deployment. */
		id: FormControl<string | null | undefined>,

		/**
		 * If the deployment is attached a single log, this property is set to the ID of that log.
		 * If null, the deployment is attached all logs on the organization.
		 */
		logId: FormControl<string | null | undefined>,

		/** The email of the person responsible for creating this deployment. */
		userEmail: FormControl<string | null | undefined>,

		/** The name of the person responsible for creating this deployment. */
		userName: FormControl<string | null | undefined>,

		/**
		 * The version number of this deployment. The value of version can be a SemVer compliant string or any other
		 * syntax that you are using as your version numbering scheme.
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			logId: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Log {

		/**
		 * Color of the log. The color will always be one of the following (green being the default):
		 * green, lightgreen, lime, yellow, orange, deeporange, red, pink, purple, deeppurple, blue, lightblue
		 */
		color?: string | null;

		/**
		 * Returns true if the log is currently disabled. A log can be disabled either through the API
		 * or in the elmah.io UI.
		 */
		disabled?: boolean | null;

		/**
		 * Environment name this log is in or "Other" if not in an environment.
		 * "Other" is chosen over null to mimic the experience in the elmah.io UI.
		 */
		environmentName?: string | null;

		/** ID of the log. */
		id?: string | null;

		/** Name of the log. */
		name?: string | null;
	}
	export interface LogFormProperties {

		/**
		 * Color of the log. The color will always be one of the following (green being the default):
		 * green, lightgreen, lime, yellow, orange, deeporange, red, pink, purple, deeppurple, blue, lightblue
		 */
		color: FormControl<string | null | undefined>,

		/**
		 * Returns true if the log is currently disabled. A log can be disabled either through the API
		 * or in the elmah.io UI.
		 */
		disabled: FormControl<boolean | null | undefined>,

		/**
		 * Environment name this log is in or "Other" if not in an environment.
		 * "Other" is chosen over null to mimic the experience in the elmah.io UI.
		 */
		environmentName: FormControl<string | null | undefined>,

		/** ID of the log. */
		id: FormControl<string | null | undefined>,

		/** Name of the log. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLogFormGroup() {
		return new FormGroup<LogFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			environmentName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Message {

		/** Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log */
		application?: string | null;

		/** A list of breadcrumbs preceding this log message. */
		breadcrumbs?: Array<Breadcrumb>;

		/** The log message category. Category can be a string of choice but typically contain a logging category set by a logging framework like NLog or Serilog. */
		category?: string | null;

		/**
		 * Code can be used to include source code related to the log message. The code will typically span from a few lines before the line causing the log message
		 * to a few lines after. For now, all lines above 21 will be removed. This makes room for showing 10 lines before the logging line, the logging line, and
		 * 10 lines after the logging line. Don't include a very large string in this property since that will quickly make the entire messages exceed the max limit
		 * of 256 kb.
		 */
		code?: string | null;

		/** A key/value pair of cookies. This property only makes sense for logging messages related to web requests. */
		cookies?: Array<Item>;

		/**
		 * CorrelationId can be used to group similar log messages together into a single discoverable batch. A correlation ID could be a session ID from ASP.NET Core,
		 * a unique string spanning multiple microsservices handling the same request, or similar.
		 */
		correlationId?: string | null;

		/**
		 * A key/value pair of user-defined fields and their values. When logging an exception, the Data dictionary of
		 * the exception is copied to this property. You can add additional key/value pairs, by modifying the Data
		 * dictionary on the exception or by supplying additional key/values to this API.
		 */
		data?: Array<Item>;

		/** The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC. */
		dateTime?: Date | null;

		/** A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there. */
		detail?: string | null;

		/** A key/value pair of form fields and their values. This property makes sense if logging message related to users inputting data in a form. */
		form?: Array<Item>;

		/** The hostname of the server logging the message. */
		hostname?: string | null;

		/** The ID of this message. */
		id?: string | null;

		/** If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables. */
		method?: string | null;

		/** A key/value pair of query string parameters. This property makes sense if logging message related to a HTTP request. */
		queryString?: Array<Item>;

		/** A key/value pair of server values. Server variables are typically related to handling requests in a webserver but could be used for other types of information as well. */
		serverVariables?: Array<Item>;

		/** An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal */
		severity?: string | null;

		/** The source of the code logging the message. This could be the assembly name. */
		source?: string | null;

		/**
		 * If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,
		 * but could be used for logging successful status codes as well.
		 */
		statusCode?: number | null;

		/** The textual title or headline of the message to log. */
		title?: string | null;

		/**
		 * The title template of the message to log. This property can be used from logging frameworks that supports
		 * structured logging like: "{user} says {quote}". In the example, titleTemplate will be this string and title
		 * will be "Gilfoyle says It's not magic. It's talent and sweat".
		 */
		titleTemplate?: string | null;

		/** The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain. */
		type?: string | null;

		/** If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables. */
		url?: string | null;

		/** An identification of the user triggering this message. You can put the users email address or your user key into this property. */
		user?: string | null;

		/**
		 * Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other
		 * syntax that you are using as your version numbering scheme.
		 */
		version?: string | null;
	}
	export interface MessageFormProperties {

		/** Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log */
		application: FormControl<string | null | undefined>,

		/** The log message category. Category can be a string of choice but typically contain a logging category set by a logging framework like NLog or Serilog. */
		category: FormControl<string | null | undefined>,

		/**
		 * Code can be used to include source code related to the log message. The code will typically span from a few lines before the line causing the log message
		 * to a few lines after. For now, all lines above 21 will be removed. This makes room for showing 10 lines before the logging line, the logging line, and
		 * 10 lines after the logging line. Don't include a very large string in this property since that will quickly make the entire messages exceed the max limit
		 * of 256 kb.
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * CorrelationId can be used to group similar log messages together into a single discoverable batch. A correlation ID could be a session ID from ASP.NET Core,
		 * a unique string spanning multiple microsservices handling the same request, or similar.
		 */
		correlationId: FormControl<string | null | undefined>,

		/** The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC. */
		dateTime: FormControl<Date | null | undefined>,

		/** A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there. */
		detail: FormControl<string | null | undefined>,

		/** The hostname of the server logging the message. */
		hostname: FormControl<string | null | undefined>,

		/** The ID of this message. */
		id: FormControl<string | null | undefined>,

		/** If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables. */
		method: FormControl<string | null | undefined>,

		/** An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal */
		severity: FormControl<string | null | undefined>,

		/** The source of the code logging the message. This could be the assembly name. */
		source: FormControl<string | null | undefined>,

		/**
		 * If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,
		 * but could be used for logging successful status codes as well.
		 */
		statusCode: FormControl<number | null | undefined>,

		/** The textual title or headline of the message to log. */
		title: FormControl<string | null | undefined>,

		/**
		 * The title template of the message to log. This property can be used from logging frameworks that supports
		 * structured logging like: "{user} says {quote}". In the example, titleTemplate will be this string and title
		 * will be "Gilfoyle says It's not magic. It's talent and sweat".
		 */
		titleTemplate: FormControl<string | null | undefined>,

		/** The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain. */
		type: FormControl<string | null | undefined>,

		/** If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables. */
		url: FormControl<string | null | undefined>,

		/** An identification of the user triggering this message. You can put the users email address or your user key into this property. */
		user: FormControl<string | null | undefined>,

		/**
		 * Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other
		 * syntax that you are using as your version numbering scheme.
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			application: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			dateTime: new FormControl<Date | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			titleTemplate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageOverview {

		/** Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log */
		application?: string | null;

		/** A list of breadcrumbs preceding this log message. */
		breadcrumbs?: Array<Breadcrumb>;

		/** The log message category. Category can be a string of choice but typically contain a logging category set by a logging framework like NLog or Serilog. */
		category?: string | null;

		/**
		 * Code can be used to include source code related to the log message. The code will typically span from a few lines before the line causing the log message
		 * to a few lines after. For now, all lines above 21 will be removed. This makes room for showing 10 lines before the logging line, the logging line, and
		 * 10 lines after the logging line. Don't include a very large string in this property since that will quickly make the entire messages exceed the max limit
		 * of 256 kb.
		 */
		code?: string | null;

		/** A key/value pair of cookies. This property only makes sense for logging messages related to web requests. */
		cookies?: Array<Item>;

		/**
		 * CorrelationId can be used to group similar log messages together into a single discoverable batch. A correlation ID could be a session ID from ASP.NET Core,
		 * a unique string spanning multiple microsservices handling the same request, or similar.
		 */
		correlationId?: string | null;

		/**
		 * A key/value pair of user-defined fields and their values. When logging an exception, the Data dictionary of
		 * the exception is copied to this property. You can add additional key/value pairs, by modifying the Data
		 * dictionary on the exception or by supplying additional key/values to this API.
		 */
		data?: Array<Item>;

		/** The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC. */
		dateTime?: Date | null;

		/** A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there. */
		detail?: string | null;

		/** A key/value pair of form fields and their values. This property makes sense if logging message related to users inputting data in a form. */
		form?: Array<Item>;

		/** The hostname of the server logging the message. */
		hostname?: string | null;

		/** The ID of this message. */
		id?: string | null;

		/** If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables. */
		method?: string | null;

		/** A key/value pair of query string parameters. This property makes sense if logging message related to a HTTP request. */
		queryString?: Array<Item>;

		/** A key/value pair of server values. Server variables are typically related to handling requests in a webserver but could be used for other types of information as well. */
		serverVariables?: Array<Item>;

		/** An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal */
		severity?: string | null;

		/** The source of the code logging the message. This could be the assembly name. */
		source?: string | null;

		/**
		 * If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,
		 * but could be used for logging successful status codes as well.
		 */
		statusCode?: number | null;

		/** The textual title or headline of the message to log. */
		title?: string | null;

		/**
		 * The title template of the message to log. This property can be used from logging frameworks that supports
		 * structured logging like: "{user} says {quote}". In the example, titleTemplate will be this string and title
		 * will be "Gilfoyle says It's not magic. It's talent and sweat".
		 */
		titleTemplate?: string | null;

		/** The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain. */
		type?: string | null;

		/** If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables. */
		url?: string | null;

		/** An identification of the user triggering this message. You can put the users email address or your user key into this property. */
		user?: string | null;

		/**
		 * Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other
		 * syntax that you are using as your version numbering scheme.
		 */
		version?: string | null;
	}
	export interface MessageOverviewFormProperties {

		/** Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log */
		application: FormControl<string | null | undefined>,

		/** The log message category. Category can be a string of choice but typically contain a logging category set by a logging framework like NLog or Serilog. */
		category: FormControl<string | null | undefined>,

		/**
		 * Code can be used to include source code related to the log message. The code will typically span from a few lines before the line causing the log message
		 * to a few lines after. For now, all lines above 21 will be removed. This makes room for showing 10 lines before the logging line, the logging line, and
		 * 10 lines after the logging line. Don't include a very large string in this property since that will quickly make the entire messages exceed the max limit
		 * of 256 kb.
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * CorrelationId can be used to group similar log messages together into a single discoverable batch. A correlation ID could be a session ID from ASP.NET Core,
		 * a unique string spanning multiple microsservices handling the same request, or similar.
		 */
		correlationId: FormControl<string | null | undefined>,

		/** The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC. */
		dateTime: FormControl<Date | null | undefined>,

		/** A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there. */
		detail: FormControl<string | null | undefined>,

		/** The hostname of the server logging the message. */
		hostname: FormControl<string | null | undefined>,

		/** The ID of this message. */
		id: FormControl<string | null | undefined>,

		/** If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables. */
		method: FormControl<string | null | undefined>,

		/** An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal */
		severity: FormControl<string | null | undefined>,

		/** The source of the code logging the message. This could be the assembly name. */
		source: FormControl<string | null | undefined>,

		/**
		 * If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,
		 * but could be used for logging successful status codes as well.
		 */
		statusCode: FormControl<number | null | undefined>,

		/** The textual title or headline of the message to log. */
		title: FormControl<string | null | undefined>,

		/**
		 * The title template of the message to log. This property can be used from logging frameworks that supports
		 * structured logging like: "{user} says {quote}". In the example, titleTemplate will be this string and title
		 * will be "Gilfoyle says It's not magic. It's talent and sweat".
		 */
		titleTemplate: FormControl<string | null | undefined>,

		/** The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain. */
		type: FormControl<string | null | undefined>,

		/** If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables. */
		url: FormControl<string | null | undefined>,

		/** An identification of the user triggering this message. You can put the users email address or your user key into this property. */
		user: FormControl<string | null | undefined>,

		/**
		 * Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other
		 * syntax that you are using as your version numbering scheme.
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateMessageOverviewFormGroup() {
		return new FormGroup<MessageOverviewFormProperties>({
			application: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			dateTime: new FormControl<Date | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			titleTemplate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessagesResult {

		/** Log messages. */
		messages?: Array<MessageOverview>;

		/** The total number of log messages found. */
		total?: number | null;
	}
	export interface MessagesResultFormProperties {

		/** The total number of log messages found. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateMessagesResultFormGroup() {
		return new FormGroup<MessagesResultFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Search {

		/** Search from this date. */
		from?: Date | null;

		/** Lucene query. */
		query?: string | null;

		/** Search to this date. */
		to?: Date | null;
	}
	export interface SearchFormProperties {

		/** Search from this date. */
		from: FormControl<Date | null | undefined>,

		/** Lucene query. */
		query: FormControl<string | null | undefined>,

		/** Search to this date. */
		to: FormControl<Date | null | undefined>,
	}
	export function CreateSearchFormGroup() {
		return new FormGroup<SearchFormProperties>({
			from: new FormControl<Date | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UptimeCheck {

		/** ID of the uptime check. */
		id?: string | null;

		/** Name of the uptime check. */
		name?: string | null;

		/** Current status of the uptime check. */
		status?: string | null;

		/** Url of the uptime check. */
		url?: string | null;
	}
	export interface UptimeCheckFormProperties {

		/** ID of the uptime check. */
		id: FormControl<string | null | undefined>,

		/** Name of the uptime check. */
		name: FormControl<string | null | undefined>,

		/** Current status of the uptime check. */
		status: FormControl<string | null | undefined>,

		/** Url of the uptime check. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUptimeCheckFormGroup() {
		return new FormGroup<UptimeCheckFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fetch a list of deployments.
		 * Required permission: `deployments_read`
		 * Get v3/deployments
		 * @return {Array<Deployment>} Request for deployments successful.
		 */
		Deployments_GetAll(): Observable<Array<Deployment>> {
			return this.http.get<Array<Deployment>>(this.baseUri + 'v3/deployments', {});
		}

		/**
		 * Create a new deployment.
		 * Required permission: `deployments_write`
		 * Post v3/deployments
		 * @param {CreateDeployment} requestBody The deployment object to create.
		 * @return {void} 
		 */
		Deployments_Create(requestBody: CreateDeployment): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/deployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a deployment by its ID.
		 * This endpoint doesn't clear the version number of messages already annotated with this deployment version.<br/><br/>Required permission: `deployments_delete`
		 * Delete v3/deployments/{id}
		 * @param {string} id The ID of the deployment to delete.
		 * @return {void} 
		 */
		Deployments_Delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/deployments/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a deployment by its ID.
		 * Required permission: `deployments_read`
		 * Get v3/deployments/{id}
		 * @param {string} id The ID of the deployment to fetch.
		 * @return {Deployment} Request for deployment successful.
		 */
		Deployments_Get(id: string): Observable<Deployment> {
			return this.http.get<Deployment>(this.baseUri + 'v3/deployments/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Create a new heartbeat.
		 * Required permission: `heartbeats_write`
		 * Post v3/heartbeats/{logId}/{id}
		 * @param {string} id The ID of the heartbeat check.
		 * @param {string} logId The ID of the log containing the heartbeat check.
		 * @param {CreateHeartbeat} requestBody The details of the heartbeat.
		 * @return {void} Heartbeat was created.
		 */
		Heartbeats_Create(id: string, logId: string, requestBody: CreateHeartbeat): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/heartbeats/' + (logId == null ? '' : encodeURIComponent(logId)) + '/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a list of logs.
		 * Required permission: `logs_read`
		 * Get v3/logs
		 * @return {Array<Log>} Request for logs successful.
		 */
		Logs_GetAll(): Observable<Array<Log>> {
			return this.http.get<Array<Log>>(this.baseUri + 'v3/logs', {});
		}

		/**
		 * Create a new log.
		 * Required permission: `logs_write`
		 * Post v3/logs
		 * @param {CreateLog} requestBody The log object to create.
		 * @return {void} 
		 */
		Logs_Create(requestBody: CreateLog): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/logs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a log by its ID.
		 * Required permission: `logs_read`
		 * Get v3/logs/{id}
		 * @param {string} id The ID of the log to fetch.
		 * @return {Log} Request for log successful.
		 */
		Logs_Get(id: string): Observable<Log> {
			return this.http.get<Log>(this.baseUri + 'v3/logs/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Help diagnose logging problems.
		 * Required permission: `messages_write`
		 * Get v3/logs/{id}/_diagnose
		 * @param {string} id The ID of the log to diagnose.
		 * @return {Array<string>} Log was diagnosed.
		 */
		Logs_Diagnose(id: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'v3/logs/' + (id == null ? '' : encodeURIComponent(id)) + '/_diagnose', {});
		}

		/**
		 * Disable a log by its ID.
		 * Required permission: `logs_write`
		 * Post v3/logs/{id}/_disable
		 * @param {string} id The ID of the log to disable.
		 * @return {void} Log was disabled.
		 */
		Logs_Disable(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/logs/' + (id == null ? '' : encodeURIComponent(id)) + '/_disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable a log by its ID.
		 * Required permission: `logs_write`
		 * Post v3/logs/{id}/_enable
		 * @param {string} id The ID of the log to enable.
		 * @return {void} Log was enabled.
		 */
		Logs_Enable(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/logs/' + (id == null ? '' : encodeURIComponent(id)) + '/_enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a list of messages by logid and query.
		 * Required permission: `messages_delete`
		 * Delete v3/messages/{logId}
		 * @param {string} logId The ID of the log containing the message.
		 * @return {void} Messages where deleted.
		 */
		Messages_DeleteAll(logId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/messages/' + (logId == null ? '' : encodeURIComponent(logId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch messages from a log.
		 * Required permission: `messages_read`
		 * Get v3/messages/{logId}
		 * @param {string} logId The ID of the log containing the messages.
		 * @param {number} pageIndex The page number of the result.
		 * @param {number} pageSize The number of messages to load (max 100) or 15 if not set.
		 * @param {string} query A full-text or Lucene query to limit the messages by.
		 * @param {Date} from A start date and time to search from (not included).
		 * @param {Date} to An end date and time to search to (not included).
		 * @param {boolean} includeHeaders Include headers like server variables and cookies in the result (slower).
		 * @return {MessagesResult} Log found and may contain messages.
		 */
		Messages_GetAll(logId: string, pageIndex: number | null | undefined, pageSize: number | null | undefined, query: string | null | undefined, from: Date | null | undefined, to: Date | null | undefined, includeHeaders: boolean | null | undefined): Observable<MessagesResult> {
			return this.http.get<MessagesResult>(this.baseUri + 'v3/messages/' + (logId == null ? '' : encodeURIComponent(logId)) + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&from=' + from?.toISOString() + '&to=' + to?.toISOString() + '&includeHeaders=' + includeHeaders, {});
		}

		/**
		 * Create a new message.
		 * Required permission: `messages_write`
		 * Post v3/messages/{logId}
		 * @param {string} logId The ID of the log which should contain the new message.
		 * @param {CreateMessage} requestBody The message object to create.
		 * @return {CreateMessageResult} Message was not created.
		 */
		Messages_Create(logId: string, requestBody: CreateMessage): Observable<CreateMessageResult> {
			return this.http.post<CreateMessageResult>(this.baseUri + 'v3/messages/' + (logId == null ? '' : encodeURIComponent(logId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create one or more new messages.
		 * Required permission: `messages_write`
		 * Post v3/messages/{logId}/_bulk
		 * @param {string} logId The ID of the log which should contain the new messages.
		 * @param {Array<CreateMessage>} requestBody The messages to create.
		 * @return {Array<CreateBulkMessageResult>} Zero or more messages where successfully created. Check the response body for details.
		 */
		Messages_CreateBulk(logId: string, requestBody: Array<CreateMessage>): Observable<Array<CreateBulkMessageResult>> {
			return this.http.post<Array<CreateBulkMessageResult>>(this.baseUri + 'v3/messages/' + (logId == null ? '' : encodeURIComponent(logId)) + '/_bulk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Mark a list of messages as fixed by logid and query.
		 * Required permission: `messages_write`
		 * Post v3/messages/{logId}/_fix
		 * @param {string} logId The ID of the log containing the messages.
		 * @param {Search} requestBody A search object containing query, time filters etc.
		 * @return {void} Messages where marked as fixed.
		 */
		Messages_FixAll(logId: string, requestBody: Search): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/messages/' + (logId == null ? '' : encodeURIComponent(logId)) + '/_fix', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a message by its ID.
		 * Required permission: `messages_delete`
		 * Delete v3/messages/{logId}/{id}
		 * @param {string} id The ID of the message to delete.
		 * @param {string} logId The ID of the log containing the message.
		 * @return {void} Message where deleted.
		 */
		Messages_Delete(id: string, logId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/messages/' + (logId == null ? '' : encodeURIComponent(logId)) + '/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a message by its ID.
		 * Required permission: `messages_read`
		 * Get v3/messages/{logId}/{id}
		 * @param {string} id The ID of the message to fetch.
		 * @param {string} logId The ID of the log containing the message.
		 * @return {Message} Message found.
		 */
		Messages_Get(id: string, logId: string): Observable<Message> {
			return this.http.get<Message>(this.baseUri + 'v3/messages/' + (logId == null ? '' : encodeURIComponent(logId)) + '/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Fix a message by its ID.
		 * Required permission: `messages_write`
		 * Post v3/messages/{logId}/{id}/_fix
		 * @param {string} id The ID of the message to fix.
		 * @param {string} logId The ID of the log containing the message.
		 * @param {boolean} markAllAsFixed If set to true, all instances of the log message are set to fixed.
		 * @return {void} Message was fixed.
		 */
		Messages_Fix(id: string, logId: string, markAllAsFixed: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/messages/' + (logId == null ? '' : encodeURIComponent(logId)) + '/' + (id == null ? '' : encodeURIComponent(id)) + '/_fix&markAllAsFixed=' + markAllAsFixed, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Hide a message by its ID.
		 * Required permission: `messages_write`
		 * Post v3/messages/{logId}/{id}/_hide
		 * @param {string} id The ID of the message to hide.
		 * @param {string} logId The ID of the log containing the message.
		 * @return {void} Message was hidden.
		 */
		Messages_Hide(id: string, logId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/messages/' + (logId == null ? '' : encodeURIComponent(logId)) + '/' + (id == null ? '' : encodeURIComponent(id)) + '/_hide', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a list of uptime checks. Currently in closed beta. Get in contact to get access to this endpoint.
		 * Required permission: `uptimechecks_read`
		 * Get v3/uptimechecks
		 * @return {Array<UptimeCheck>} Request for uptime checks successful.
		 */
		UptimeChecks_GetAll(): Observable<Array<UptimeCheck>> {
			return this.http.get<Array<UptimeCheck>>(this.baseUri + 'v3/uptimechecks', {});
		}
	}

}

