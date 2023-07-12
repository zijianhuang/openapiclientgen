import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * App Engine HTTP request.
	 * The message defines the HTTP request that is sent to an App Engine app when
	 * the task is dispatched.
	 * Using AppEngineHttpRequest requires
	 * [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control)
	 * Google IAM permission for the project
	 * and the following scope:
	 * `https://www.googleapis.com/auth/cloud-platform`
	 * The task will be delivered to the App Engine app which belongs to the same
	 * project as the queue. For more information, see
	 * [How Requests are
	 * Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
	 * and how routing is affected by
	 * [dispatch
	 * files](https://cloud.google.com/appengine/docs/python/config/dispatchref).
	 * Traffic is encrypted during transport and never leaves Google datacenters.
	 * Because this traffic is carried over a communication mechanism internal to
	 * Google, you cannot explicitly set the protocol (for example, HTTP or HTTPS).
	 * The request to the handler, however, will appear to have used the HTTP
	 * protocol.
	 * The AppEngineRouting used to construct the URL that the task is
	 * delivered to can be set at the queue-level or task-level:
	 * * If app_engine_routing_override is set on the
	 *    queue, this value is used for all
	 *    tasks in the queue, no matter what the setting is for the task-level
	 *    app_engine_routing.
	 * The `url` that the task will be sent to is:
	 * * `url =` host `+`
	 *   relative_uri
	 * Tasks can be dispatched to secure app handlers, unsecure app handlers, and
	 * URIs restricted with
	 * [`login:
	 * admin`](https://cloud.google.com/appengine/docs/standard/python/config/appref).
	 * Because tasks are not run as any user, they cannot be dispatched to URIs
	 * restricted with
	 * [`login:
	 * required`](https://cloud.google.com/appengine/docs/standard/python/config/appref)
	 * Task dispatches also do not follow redirects.
	 * The task attempt has succeeded if the app's request handler returns an HTTP
	 * response code in the range [`200` - `299`]. The task attempt has failed if
	 * the app's handler returns a non-2xx response code or Cloud Tasks does
	 * not receive response before the deadline. Failed
	 * tasks will be retried according to the
	 * retry configuration. `503` (Service Unavailable) is
	 * considered an App Engine system error instead of an application error and
	 * will cause Cloud Tasks' traffic congestion control to temporarily throttle
	 * the queue's dispatches. Unlike other types of task targets, a `429` (Too Many
	 * Requests) response from an app handler does not cause traffic congestion
	 * control to throttle the queue.
	 */
	export interface AppEngineHttpRequest {

		/**
		 * App Engine Routing.
		 * Defines routing characteristics specific to App Engine - service, version,
		 * and instance.
		 * For more information about services, versions, and instances see
		 * [An Overview of App
		 * Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine),
		 * [Microservices Architecture on Google App
		 * Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine),
		 * [App Engine Standard request
		 * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed),
		 * and [App Engine Flex request
		 * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
		 * Using AppEngineRouting requires
		 * [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control)
		 * Google IAM permission for the project
		 * and the following scope:
		 * `https://www.googleapis.com/auth/cloud-platform`
		 */
		appEngineRouting?: AppEngineRouting;

		/**
		 * HTTP request body.
		 * A request body is allowed only if the HTTP method is POST or PUT. It is
		 * an error to set a body on a task with an incompatible HttpMethod.
		 */
		body?: string;

		/**
		 * HTTP request headers.
		 * This map contains the header field names and values.
		 * Headers can be set when the
		 * task is created.
		 * Repeated headers are not supported but a header value can contain commas.
		 * Cloud Tasks sets some headers to default values:
		 * * `User-Agent`: By default, this header is
		 * `"AppEngine-Google; (+http://code.google.com/appengine)"`.
		 * This header can be modified, but Cloud Tasks will append
		 * `"AppEngine-Google; (+http://code.google.com/appengine)"` to the
		 * modified `User-Agent`.
		 * If the task has a body, Cloud
		 * Tasks sets the following headers:
		 * * `Content-Type`: By default, the `Content-Type` header is set to
		 * `"application/octet-stream"`. The default can be overridden by explicitly
		 * setting `Content-Type` to a particular media type when the
		 * task is created.
		 * For example, `Content-Type` can be set to `"application/json"`.
		 * * `Content-Length`: This is computed by Cloud Tasks. This value is
		 * output only.   It cannot be changed.
		 * The headers below cannot be set or overridden:
		 * * `Host`
		 * * `X-Google-*`
		 * * `X-AppEngine-*`
		 * In addition, Cloud Tasks sets some headers when the task is dispatched,
		 * such as headers containing information about the task; see
		 * [request
		 * headers](https://cloud.google.com/tasks/docs/creating-appengine-handlers#reading_request_headers).
		 * These headers are set only when the task is dispatched, so they are not
		 * visible when the task is returned in a Cloud Tasks response.
		 * Although there is no specific limit for the maximum number of headers or
		 * the size, there is a limit on the maximum size of the Task. For more
		 * information, see the CreateTask documentation.
		 */
		headers?: {[id: string]: string };

		/**
		 * The HTTP method to use for the request. The default is POST.
		 * The app's request handler for the task's target URL must be able to handle
		 * HTTP requests with this http_method, otherwise the task attempt will fail
		 * with error code 405 (Method Not Allowed). See
		 * [Writing a push task request
		 * handler](https://cloud.google.com/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler)
		 * and the documentation for the request handlers in the language your app is
		 * written in e.g.
		 * [Python Request
		 * Handler](https://cloud.google.com/appengine/docs/python/tools/webapp/requesthandlerclass).
		 */
		httpMethod?: AppEngineHttpRequestHttpMethod;

		/**
		 * The relative URI.
		 * The relative URI must begin with "/" and must be a valid HTTP relative URI.
		 * It can contain a path and query string arguments.
		 * If the relative URI is empty, then the root path "/" will be used.
		 * No spaces are allowed, and the maximum length allowed is 2083 characters.
		 */
		relativeUri?: string;
	}


	/**
	 * App Engine Routing.
	 * Defines routing characteristics specific to App Engine - service, version,
	 * and instance.
	 * For more information about services, versions, and instances see
	 * [An Overview of App
	 * Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine),
	 * [Microservices Architecture on Google App
	 * Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine),
	 * [App Engine Standard request
	 * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed),
	 * and [App Engine Flex request
	 * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
	 * Using AppEngineRouting requires
	 * [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control)
	 * Google IAM permission for the project
	 * and the following scope:
	 * `https://www.googleapis.com/auth/cloud-platform`
	 */
	export interface AppEngineRouting {

		/**
		 * Output only. The host that the task is sent to.
		 * The host is constructed from the domain name of the app associated with
		 * the queue's project ID (for example <app-id>.appspot.com), and the
		 * service, version,
		 * and instance. Tasks which were created using
		 * the App Engine SDK might have a custom domain name.
		 * For more information, see
		 * [How Requests are
		 * Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed).
		 */
		host?: string;

		/**
		 * App instance.
		 * By default, the task is sent to an instance which is available when
		 * the task is attempted.
		 * Requests can only be sent to a specific instance if
		 * [manual scaling is used in App Engine
		 * Standard](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes).
		 * App Engine Flex does not support instances. For more information, see
		 * [App Engine Standard request
		 * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
		 * and [App Engine Flex request
		 * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
		 */
		instance?: string;

		/**
		 * App service.
		 * By default, the task is sent to the service which is the default
		 * service when the task is attempted.
		 * For some queues or tasks which were created using the App Engine
		 * Task Queue API, host is not parsable
		 * into service,
		 * version, and
		 * instance. For example, some tasks
		 * which were created using the App Engine SDK use a custom domain
		 * name; custom domains are not parsed by Cloud Tasks. If
		 * host is not parsable, then
		 * service,
		 * version, and
		 * instance are the empty string.
		 */
		service?: string;

		/**
		 * App version.
		 * By default, the task is sent to the version which is the default
		 * version when the task is attempted.
		 * For some queues or tasks which were created using the App Engine
		 * Task Queue API, host is not parsable
		 * into service,
		 * version, and
		 * instance. For example, some tasks
		 * which were created using the App Engine SDK use a custom domain
		 * name; custom domains are not parsed by Cloud Tasks. If
		 * host is not parsable, then
		 * service,
		 * version, and
		 * instance are the empty string.
		 */
		version?: string;
	}

	export enum AppEngineHttpRequestHttpMethod { HTTP_METHOD_UNSPECIFIED = 0, POST = 1, GET = 2, HEAD = 3, PUT = 4, DELETE = 5, PATCH = 6, OPTIONS = 7 }


	/** The status of a task attempt. */
	export interface Attempt {

		/**
		 * Output only. The time that this attempt was dispatched.
		 * `dispatch_time` will be truncated to the nearest microsecond.
		 */
		dispatchTime?: string;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		responseStatus?: Status;

		/**
		 * Output only. The time that this attempt response was received.
		 * `response_time` will be truncated to the nearest microsecond.
		 */
		responseTime?: string;

		/**
		 * Output only. The time that this attempt was scheduled.
		 * `schedule_time` will be truncated to the nearest microsecond.
		 */
		scheduleTime?: string;
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
		code?: number;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string;
	}


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
		condition?: Expr;

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
		members?: Array<string>;

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role?: string;
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
		description?: string;

		/**
		 * Textual representation of an expression in Common Expression Language
		 * syntax.
		 */
		expression?: string;

		/**
		 * Optional. String indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location?: string;

		/**
		 * Optional. Title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
		title?: string;
	}


	/** Request message for CreateTask. */
	export interface CreateTaskRequest {

		/**
		 * The response_view specifies which subset of the Task will be
		 * returned.
		 * By default response_view is BASIC; not all
		 * information is retrieved by default because some data, such as
		 * payloads, might be desirable to return only when needed because
		 * of its large size or because of the sensitivity of data that it
		 * contains.
		 * Authorization for FULL requires
		 * `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
		 * permission on the Task resource.
		 */
		responseView?: CreateTaskRequestResponseView;

		/** A unit of scheduled work. */
		task?: Task_;
	}

	export enum CreateTaskRequestResponseView { VIEW_UNSPECIFIED = 0, BASIC = 1, FULL = 2 }


	/** A unit of scheduled work. */
	export interface Task_ {

		/**
		 * App Engine HTTP request.
		 * The message defines the HTTP request that is sent to an App Engine app when
		 * the task is dispatched.
		 * Using AppEngineHttpRequest requires
		 * [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control)
		 * Google IAM permission for the project
		 * and the following scope:
		 * `https://www.googleapis.com/auth/cloud-platform`
		 * The task will be delivered to the App Engine app which belongs to the same
		 * project as the queue. For more information, see
		 * [How Requests are
		 * Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
		 * and how routing is affected by
		 * [dispatch
		 * files](https://cloud.google.com/appengine/docs/python/config/dispatchref).
		 * Traffic is encrypted during transport and never leaves Google datacenters.
		 * Because this traffic is carried over a communication mechanism internal to
		 * Google, you cannot explicitly set the protocol (for example, HTTP or HTTPS).
		 * The request to the handler, however, will appear to have used the HTTP
		 * protocol.
		 * The AppEngineRouting used to construct the URL that the task is
		 * delivered to can be set at the queue-level or task-level:
		 * * If app_engine_routing_override is set on the
		 * queue, this value is used for all
		 * tasks in the queue, no matter what the setting is for the task-level
		 * app_engine_routing.
		 * The `url` that the task will be sent to is:
		 * * `url =` host `+`
		 * relative_uri
		 * Tasks can be dispatched to secure app handlers, unsecure app handlers, and
		 * URIs restricted with
		 * [`login:
		 * admin`](https://cloud.google.com/appengine/docs/standard/python/config/appref).
		 * Because tasks are not run as any user, they cannot be dispatched to URIs
		 * restricted with
		 * [`login:
		 * required`](https://cloud.google.com/appengine/docs/standard/python/config/appref)
		 * Task dispatches also do not follow redirects.
		 * The task attempt has succeeded if the app's request handler returns an HTTP
		 * response code in the range [`200` - `299`]. The task attempt has failed if
		 * the app's handler returns a non-2xx response code or Cloud Tasks does
		 * not receive response before the deadline. Failed
		 * tasks will be retried according to the
		 * retry configuration. `503` (Service Unavailable) is
		 * considered an App Engine system error instead of an application error and
		 * will cause Cloud Tasks' traffic congestion control to temporarily throttle
		 * the queue's dispatches. Unlike other types of task targets, a `429` (Too Many
		 * Requests) response from an app handler does not cause traffic congestion
		 * control to throttle the queue.
		 */
		appEngineHttpRequest?: AppEngineHttpRequest;

		/**
		 * Output only. The time that the task was created.
		 * `create_time` will be truncated to the nearest second.
		 */
		createTime?: string;

		/**
		 * Output only. The number of attempts dispatched.
		 * This count includes attempts which have been dispatched but haven't
		 * received a response.
		 */
		dispatchCount?: number;

		/**
		 * The deadline for requests sent to the worker. If the worker does not
		 * respond by this deadline then the request is cancelled and the attempt
		 * is marked as a `DEADLINE_EXCEEDED` failure. Cloud Tasks will retry the
		 * task according to the RetryConfig.
		 * Note that when the request is cancelled, Cloud Tasks will stop listing for
		 * the response, but whether the worker stops processing depends on the
		 * worker. For example, if the worker is stuck, it may not react to cancelled
		 * requests.
		 * The default and maximum values depend on the type of request:
		 * * For HTTP tasks, the default is 10 minutes. The deadline
		 * must be in the interval [15 seconds, 30 minutes].
		 * * For App Engine tasks, 0 indicates that the
		 * request has the default deadline. The default deadline depends on the
		 * [scaling
		 * type](https://cloud.google.com/appengine/docs/standard/go/how-instances-are-managed#instance_scaling)
		 * of the service: 10 minutes for standard apps with automatic scaling, 24
		 * hours for standard apps with manual and basic scaling, and 60 minutes for
		 * flex apps. If the request deadline is set, it must be in the interval [15
		 * seconds, 24 hours 15 seconds]. Regardless of the task's
		 * `dispatch_deadline`, the app handler will not run for longer than than
		 * the service's timeout. We recommend setting the `dispatch_deadline` to
		 * at most a few seconds more than the app handler's timeout. For more
		 * information see
		 * [Timeouts](https://cloud.google.com/tasks/docs/creating-appengine-handlers#timeouts).
		 * `dispatch_deadline` will be truncated to the nearest millisecond. The
		 * deadline is an approximate deadline.
		 */
		dispatchDeadline?: string;

		/** The status of a task attempt. */
		firstAttempt?: Attempt;

		/**
		 * HTTP request.
		 * The task will be pushed to the worker as an HTTP request. If the worker
		 * or the redirected worker acknowledges the task by returning a successful HTTP
		 * response code ([`200` - `299`]), the task will be removed from the queue. If
		 * any other HTTP response code is returned or no response is received, the
		 * task will be retried according to the following:
		 * * User-specified throttling: retry configuration,
		 * rate limits, and the queue's state.
		 * * System throttling: To prevent the worker from overloading, Cloud Tasks may
		 * temporarily reduce the queue's effective rate. User-specified settings
		 * will not be changed.
		 * System throttling happens because:
		 * * Cloud Tasks backs off on all errors. Normally the backoff specified in
		 * rate limits will be used. But if the worker returns
		 * `429` (Too Many Requests), `503` (Service Unavailable), or the rate of
		 * errors is high, Cloud Tasks will use a higher backoff rate. The retry
		 * specified in the `Retry-After` HTTP response header is considered.
		 * * To prevent traffic spikes and to smooth sudden increases in traffic,
		 * dispatches ramp up slowly when the queue is newly created or idle and
		 * if large numbers of tasks suddenly become available to dispatch (due to
		 * spikes in create task rates, the queue being unpaused, or many tasks
		 * that are scheduled at the same time).
		 */
		httpRequest?: HttpRequest;

		/** The status of a task attempt. */
		lastAttempt?: Attempt;

		/**
		 * Optionally caller-specified in CreateTask.
		 * The task name.
		 * The task name must have the following format:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
		 * * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),
		 * hyphens (-), colons (:), or periods (.).
		 * For more information, see
		 * [Identifying
		 * projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
		 * * `LOCATION_ID` is the canonical ID for the task's location.
		 * The list of available locations can be obtained by calling
		 * ListLocations.
		 * For more information, see https://cloud.google.com/about/locations/.
		 * * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or
		 * hyphens (-). The maximum length is 100 characters.
		 * * `TASK_ID` can contain only letters ([A-Za-z]), numbers ([0-9]),
		 * hyphens (-), or underscores (_). The maximum length is 500 characters.
		 */
		name?: string;

		/** Output only. The number of attempts which have received a response. */
		responseCount?: number;

		/**
		 * The time when the task is scheduled to be attempted or retried.
		 * `schedule_time` will be truncated to the nearest microsecond.
		 */
		scheduleTime?: string;

		/**
		 * Output only. The view specifies which subset of the Task has
		 * been returned.
		 */
		view?: CreateTaskRequestResponseView;
	}


	/**
	 * HTTP request.
	 * The task will be pushed to the worker as an HTTP request. If the worker
	 * or the redirected worker acknowledges the task by returning a successful HTTP
	 * response code ([`200` - `299`]), the task will be removed from the queue. If
	 * any other HTTP response code is returned or no response is received, the
	 * task will be retried according to the following:
	 * * User-specified throttling: retry configuration,
	 *   rate limits, and the queue's state.
	 * * System throttling: To prevent the worker from overloading, Cloud Tasks may
	 *   temporarily reduce the queue's effective rate. User-specified settings
	 *   will not be changed.
	 *  System throttling happens because:
	 *   * Cloud Tasks backs off on all errors. Normally the backoff specified in
	 *     rate limits will be used. But if the worker returns
	 *     `429` (Too Many Requests), `503` (Service Unavailable), or the rate of
	 *     errors is high, Cloud Tasks will use a higher backoff rate. The retry
	 *     specified in the `Retry-After` HTTP response header is considered.
	 *   * To prevent traffic spikes and to smooth sudden increases in traffic,
	 *     dispatches ramp up slowly when the queue is newly created or idle and
	 *     if large numbers of tasks suddenly become available to dispatch (due to
	 *     spikes in create task rates, the queue being unpaused, or many tasks
	 *     that are scheduled at the same time).
	 */
	export interface HttpRequest {

		/**
		 * HTTP request body.
		 * A request body is allowed only if the
		 * HTTP method is POST, PUT, or PATCH. It is an
		 * error to set body on a task with an incompatible HttpMethod.
		 */
		body?: string;

		/**
		 * HTTP request headers.
		 * This map contains the header field names and values.
		 * Headers can be set when the
		 * task is created.
		 * These headers represent a subset of the headers that will accompany the
		 * task's HTTP request. Some HTTP request headers will be ignored or replaced.
		 * A partial list of headers that will be ignored or replaced is:
		 * * Host: This will be computed by Cloud Tasks and derived from
		 * HttpRequest.url.
		 * * Content-Length: This will be computed by Cloud Tasks.
		 * * User-Agent: This will be set to `"Google-Cloud-Tasks"`.
		 * * X-Google-*: Google use only.
		 * * X-AppEngine-*: Google use only.
		 * `Content-Type` won't be set by Cloud Tasks. You can explicitly set
		 * `Content-Type` to a media type when the
		 * task is created.
		 * For example, `Content-Type` can be set to `"application/octet-stream"` or
		 * `"application/json"`.
		 * Headers which can have multiple values (according to RFC2616) can be
		 * specified using comma-separated values.
		 * The size of the headers must be less than 80KB.
		 */
		headers?: {[id: string]: string };

		/** The HTTP method to use for the request. The default is POST. */
		httpMethod?: AppEngineHttpRequestHttpMethod;

		/**
		 * Contains information needed for generating an
		 * [OAuth token](https://developers.google.com/identity/protocols/OAuth2).
		 * This type of authorization should generally only be used when calling Google
		 * APIs hosted on *.googleapis.com.
		 */
		oauthToken?: OAuthToken;

		/**
		 * Contains information needed for generating an
		 * [OpenID Connect
		 * token](https://developers.google.com/identity/protocols/OpenIDConnect).
		 * This type of authorization can be used for many scenarios, including
		 * calling Cloud Run, or endpoints where you intend to validate the token
		 * yourself.
		 */
		oidcToken?: OidcToken;

		/**
		 * Required. The full url path that the request will be sent to.
		 * This string must begin with either "http://" or "https://". Some examples
		 * are: `http://acme.com` and `https://acme.com/sales:8080`. Cloud Tasks will
		 * encode some characters for safety and compatibility. The maximum allowed
		 * URL length is 2083 characters after encoding.
		 * The `Location` header response from a redirect response [`300` - `399`]
		 * may be followed. The redirect is not counted as a separate attempt.
		 */
		url?: string;
	}


	/**
	 * Contains information needed for generating an
	 * [OAuth token](https://developers.google.com/identity/protocols/OAuth2).
	 * This type of authorization should generally only be used when calling Google
	 * APIs hosted on *.googleapis.com.
	 */
	export interface OAuthToken {

		/**
		 * OAuth scope to be used for generating OAuth access token.
		 * If not specified, "https://www.googleapis.com/auth/cloud-platform"
		 * will be used.
		 */
		scope?: string;

		/**
		 * [Service account email](https://cloud.google.com/iam/docs/service-accounts)
		 * to be used for generating OAuth token.
		 * The service account must be within the same project as the queue. The
		 * caller must have iam.serviceAccounts.actAs permission for the service
		 * account.
		 */
		serviceAccountEmail?: string;
	}


	/**
	 * Contains information needed for generating an
	 * [OpenID Connect
	 * token](https://developers.google.com/identity/protocols/OpenIDConnect).
	 * This type of authorization can be used for many scenarios, including
	 * calling Cloud Run, or endpoints where you intend to validate the token
	 * yourself.
	 */
	export interface OidcToken {

		/**
		 * Audience to be used when generating OIDC token. If not specified, the URI
		 * specified in target will be used.
		 */
		audience?: string;

		/**
		 * [Service account email](https://cloud.google.com/iam/docs/service-accounts)
		 * to be used for generating OIDC token.
		 * The service account must be within the same project as the queue. The
		 * caller must have iam.serviceAccounts.actAs permission for the service
		 * account.
		 */
		serviceAccountEmail?: string;
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


	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions;
	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptions {

		/**
		 * Optional. The policy format version to be returned.
		 * Valid values are 0, 1, and 3. Requests specifying an invalid value will be
		 * rejected.
		 * Requests for policies with any conditional bindings must specify version 3.
		 * Policies without any conditional bindings may specify any valid value or
		 * leave the field unset.
		 */
		requestedPolicyVersion?: number;
	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string;
	}


	/** A resource that represents Google Cloud Platform location. */
	export interface Location {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName?: string;

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string;

		/**
		 * Service-specific metadata. For example the available capacity at the given
		 * location.
		 */
		metadata?: {[id: string]: any };

		/**
		 * Resource name for the location, which may vary between implementations.
		 * For example: `"projects/example-project/locations/us-east1"`
		 */
		name?: string;
	}


	/** Response message for ListQueues. */
	export interface ListQueuesResponse {

		/**
		 * A token to retrieve next page of results.
		 * To return the next page of results, call
		 * ListQueues with this value as the
		 * page_token.
		 * If the next_page_token is empty, there are no more results.
		 * The page token is valid for only 2 hours.
		 */
		nextPageToken?: string;

		/** The list of queues. */
		queues?: Array<Queue>;
	}


	/**
	 * A queue is a container of related tasks. Queues are configured to manage
	 * how those tasks are dispatched. Configurable properties include rate limits,
	 * retry options, queue types, and others.
	 */
	export interface Queue {

		/**
		 * App Engine Routing.
		 * Defines routing characteristics specific to App Engine - service, version,
		 * and instance.
		 * For more information about services, versions, and instances see
		 * [An Overview of App
		 * Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine),
		 * [Microservices Architecture on Google App
		 * Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine),
		 * [App Engine Standard request
		 * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed),
		 * and [App Engine Flex request
		 * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
		 * Using AppEngineRouting requires
		 * [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control)
		 * Google IAM permission for the project
		 * and the following scope:
		 * `https://www.googleapis.com/auth/cloud-platform`
		 */
		appEngineRoutingOverride?: AppEngineRouting;

		/**
		 * Caller-specified and required in CreateQueue,
		 * after which it becomes output only.
		 * The queue name.
		 * The queue name must have the following format:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
		 * * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),
		 * hyphens (-), colons (:), or periods (.).
		 * For more information, see
		 * [Identifying
		 * projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
		 * * `LOCATION_ID` is the canonical ID for the queue's location.
		 * The list of available locations can be obtained by calling
		 * ListLocations.
		 * For more information, see https://cloud.google.com/about/locations/.
		 * * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or
		 * hyphens (-). The maximum length is 100 characters.
		 */
		name?: string;

		/**
		 * Output only. The last time this queue was purged.
		 * All tasks that were created before this time
		 * were purged.
		 * A queue can be purged using PurgeQueue, the
		 * [App Engine Task Queue SDK, or the Cloud
		 * Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).
		 * Purge time will be truncated to the nearest microsecond. Purge
		 * time will be unset if the queue has never been purged.
		 */
		purgeTime?: string;

		/**
		 * Rate limits.
		 * This message determines the maximum rate that tasks can be dispatched by a
		 * queue, regardless of whether the dispatch is a first task attempt or a retry.
		 * Note: The debugging command, RunTask, will run a task
		 * even if the queue has reached its RateLimits.
		 */
		rateLimits?: RateLimits;

		/**
		 * Retry config.
		 * These settings determine when a failed task attempt is retried.
		 */
		retryConfig?: RetryConfig;

		/**
		 * Configuration options for writing logs to
		 * [Stackdriver Logging](https://cloud.google.com/logging/docs/).
		 */
		stackdriverLoggingConfig?: StackdriverLoggingConfig;

		/**
		 * Output only. The state of the queue.
		 * `state` can only be changed by called
		 * PauseQueue,
		 * ResumeQueue, or uploading
		 * [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref).
		 * UpdateQueue cannot be used to change `state`.
		 */
		state?: QueueState;
	}


	/**
	 * Rate limits.
	 * This message determines the maximum rate that tasks can be dispatched by a
	 * queue, regardless of whether the dispatch is a first task attempt or a retry.
	 * Note: The debugging command, RunTask, will run a task
	 * even if the queue has reached its RateLimits.
	 */
	export interface RateLimits {

		/**
		 * Output only. The max burst size.
		 * Max burst size limits how fast tasks in queue are processed when
		 * many tasks are in the queue and the rate is high. This field
		 * allows the queue to have a high rate so processing starts shortly
		 * after a task is enqueued, but still limits resource usage when
		 * many tasks are enqueued in a short period of time.
		 * The [token bucket](https://wikipedia.org/wiki/Token_Bucket)
		 * algorithm is used to control the rate of task dispatches. Each
		 * queue has a token bucket that holds tokens, up to the maximum
		 * specified by `max_burst_size`. Each time a task is dispatched, a
		 * token is removed from the bucket. Tasks will be dispatched until
		 * the queue's bucket runs out of tokens. The bucket will be
		 * continuously refilled with new tokens based on
		 * max_dispatches_per_second.
		 * Cloud Tasks will pick the value of `max_burst_size` based on the
		 * value of
		 * max_dispatches_per_second.
		 * For queues that were created or updated using
		 * `queue.yaml/xml`, `max_burst_size` is equal to
		 * [bucket_size](https://cloud.google.com/appengine/docs/standard/python/config/queueref#bucket_size).
		 * Since `max_burst_size` is output only, if
		 * UpdateQueue is called on a queue
		 * created by `queue.yaml/xml`, `max_burst_size` will be reset based
		 * on the value of
		 * max_dispatches_per_second,
		 * regardless of whether
		 * max_dispatches_per_second
		 * is updated.
		 */
		maxBurstSize?: number;

		/**
		 * The maximum number of concurrent tasks that Cloud Tasks allows
		 * to be dispatched for this queue. After this threshold has been
		 * reached, Cloud Tasks stops dispatching tasks until the number of
		 * concurrent requests decreases.
		 * If unspecified when the queue is created, Cloud Tasks will pick the
		 * default.
		 * The maximum allowed value is 5,000.
		 * This field has the same meaning as
		 * [max_concurrent_requests in
		 * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#max_concurrent_requests).
		 */
		maxConcurrentDispatches?: number;

		/**
		 * The maximum rate at which tasks are dispatched from this queue.
		 * If unspecified when the queue is created, Cloud Tasks will pick the
		 * default.
		 * * The maximum allowed value is 500.
		 * This field has the same meaning as
		 * [rate in
		 * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#rate).
		 */
		maxDispatchesPerSecond?: number;
	}


	/**
	 * Retry config.
	 * These settings determine when a failed task attempt is retried.
	 */
	export interface RetryConfig {

		/**
		 * Number of attempts per task.
		 * Cloud Tasks will attempt the task `max_attempts` times (that is, if the
		 * first attempt fails, then there will be `max_attempts - 1` retries). Must
		 * be >= -1.
		 * If unspecified when the queue is created, Cloud Tasks will pick the
		 * default.
		 * -1 indicates unlimited attempts.
		 * This field has the same meaning as
		 * [task_retry_limit in
		 * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
		 */
		maxAttempts?: number;

		/**
		 * A task will be scheduled for retry between
		 * min_backoff and
		 * max_backoff duration after it fails,
		 * if the queue's RetryConfig specifies that the task should be
		 * retried.
		 * If unspecified when the queue is created, Cloud Tasks will pick the
		 * default.
		 * `max_backoff` will be truncated to the nearest second.
		 * This field has the same meaning as
		 * [max_backoff_seconds in
		 * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
		 */
		maxBackoff?: string;

		/**
		 * The time between retries will double `max_doublings` times.
		 * A task's retry interval starts at
		 * min_backoff, then doubles
		 * `max_doublings` times, then increases linearly, and finally
		 * retries retries at intervals of
		 * max_backoff up to
		 * max_attempts times.
		 * For example, if min_backoff is 10s,
		 * max_backoff is 300s, and
		 * `max_doublings` is 3, then the a task will first be retried in
		 * 10s. The retry interval will double three times, and then
		 * increase linearly by 2^3 * 10s.  Finally, the task will retry at
		 * intervals of max_backoff until the
		 * task has been attempted max_attempts
		 * times. Thus, the requests will retry at 10s, 20s, 40s, 80s, 160s,
		 * 240s, 300s, 300s, ....
		 * If unspecified when the queue is created, Cloud Tasks will pick the
		 * default.
		 * This field has the same meaning as
		 * [max_doublings in
		 * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
		 */
		maxDoublings?: number;

		/**
		 * If positive, `max_retry_duration` specifies the time limit for
		 * retrying a failed task, measured from when the task was first
		 * attempted. Once `max_retry_duration` time has passed *and* the
		 * task has been attempted max_attempts
		 * times, no further attempts will be made and the task will be
		 * deleted.
		 * If zero, then the task age is unlimited.
		 * If unspecified when the queue is created, Cloud Tasks will pick the
		 * default.
		 * `max_retry_duration` will be truncated to the nearest second.
		 * This field has the same meaning as
		 * [task_age_limit in
		 * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
		 */
		maxRetryDuration?: string;

		/**
		 * A task will be scheduled for retry between
		 * min_backoff and
		 * max_backoff duration after it fails,
		 * if the queue's RetryConfig specifies that the task should be
		 * retried.
		 * If unspecified when the queue is created, Cloud Tasks will pick the
		 * default.
		 * `min_backoff` will be truncated to the nearest second.
		 * This field has the same meaning as
		 * [min_backoff_seconds in
		 * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
		 */
		minBackoff?: string;
	}


	/**
	 * Configuration options for writing logs to
	 * [Stackdriver Logging](https://cloud.google.com/logging/docs/).
	 */
	export interface StackdriverLoggingConfig {

		/**
		 * Specifies the fraction of operations to write to
		 * [Stackdriver Logging](https://cloud.google.com/logging/docs/).
		 * This field may contain any value between 0.0 and 1.0, inclusive.
		 * 0.0 is the default and means that no operations are logged.
		 */
		samplingRatio?: number;
	}

	export enum QueueState { STATE_UNSPECIFIED = 0, RUNNING = 1, PAUSED = 2, DISABLED = 3 }


	/** Response message for listing tasks using ListTasks. */
	export interface ListTasksResponse {

		/**
		 * A token to retrieve next page of results.
		 * To return the next page of results, call
		 * ListTasks with this value as the
		 * page_token.
		 * If the next_page_token is empty, there are no more results.
		 */
		nextPageToken?: string;

		/** The list of tasks. */
		tasks?: Array<Task_>;
	}


	/** Request message for PauseQueue. */
	export interface PauseQueueRequest {
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

		/**
		 * Associates a list of `members` to a `role`. Optionally, may specify a
		 * `condition` that determines how and when the `bindings` are applied. Each
		 * of the `bindings` must contain at least one member.
		 */
		bindings?: Array<Binding>;

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
		etag?: string;

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
		version?: number;
	}


	/** Request message for PurgeQueue. */
	export interface PurgeQueueRequest {
	}


	/** Request message for ResumeQueue. */
	export interface ResumeQueueRequest {
	}


	/**
	 * Request message for forcing a task to run now using
	 * RunTask.
	 */
	export interface RunTaskRequest {

		/**
		 * The response_view specifies which subset of the Task will be
		 * returned.
		 * By default response_view is BASIC; not all
		 * information is retrieved by default because some data, such as
		 * payloads, might be desirable to return only when needed because
		 * of its large size or because of the sensitivity of data that it
		 * contains.
		 * Authorization for FULL requires
		 * `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
		 * permission on the Task resource.
		 */
		responseView?: CreateTaskRequestResponseView;
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
		policy?: Policy;
	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/**
		 * The set of permissions to check for the `resource`. Permissions with
		 * wildcards (such as '*' or 'storage.*') are not allowed. For more
		 * information see
		 * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
		 */
		permissions?: Array<string>;
	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/**
		 * A subset of `TestPermissionsRequest.permissions` that the caller is
		 * allowed.
		 */
		permissions?: Array<string>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a task.
		 * A task can be deleted if it is scheduled or dispatched. A task
		 * cannot be deleted if it has executed successfully or permanently
		 * failed.
		 * Delete v2/{name}
		 * @param {string} name Required. The task name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_queues_tasks_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a task.
		 * Get v2/{name}
		 * @param {string} name Required. The task name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
		 * @param {CreateTaskRequestResponseView} responseView The response_view specifies which subset of the Task will be
		 * returned.
		 * By default response_view is BASIC; not all
		 * information is retrieved by default because some data, such as
		 * payloads, might be desirable to return only when needed because
		 * of its large size or because of the sensitivity of data that it
		 * contains.
		 * Authorization for FULL requires
		 * `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
		 * permission on the Task resource.
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_queues_tasks_get(name: string, responseView: CreateTaskRequestResponseView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&responseView=' + responseView, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a queue.
		 * This method creates the queue if it does not exist and updates
		 * the queue if it does exist.
		 * Queues created with this method allow tasks to live for a maximum of 31
		 * days. After a task is 31 days old, the task will be deleted regardless of whether
		 * it was dispatched or not.
		 * WARNING: Using this method may have unintended side effects if you are
		 * using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
		 * Read
		 * [Overview of Queue Management and
		 * queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using
		 * this method.
		 * Patch v2/{name}
		 * @param {string} name Caller-specified and required in CreateQueue,
		 * after which it becomes output only.
		 * The queue name.
		 * The queue name must have the following format:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
		 * * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),
		 *    hyphens (-), colons (:), or periods (.).
		 *    For more information, see
		 *    [Identifying
		 *    projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
		 * * `LOCATION_ID` is the canonical ID for the queue's location.
		 *    The list of available locations can be obtained by calling
		 *    ListLocations.
		 *    For more information, see https://cloud.google.com/about/locations/.
		 * * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or
		 *   hyphens (-). The maximum length is 100 characters.
		 * @param {string} updateMask A mask used to specify which fields of the queue are being updated.
		 * If empty, then all fields will be updated.
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_queues_patch(name: string, updateMask: string, requestBody: Queue): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v2/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_list(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Pauses the queue.
		 * If a queue is paused then the system will stop dispatching tasks
		 * until the queue is resumed via
		 * ResumeQueue. Tasks can still be added
		 * when the queue is paused. A queue is paused if its
		 * state is PAUSED.
		 * Post v2/{name}:pause
		 * @param {string} name Required. The queue name. For example:
		 * `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_queues_pause(name: string, requestBody: PauseQueueRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':pause', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Purges a queue by deleting all of its tasks.
		 * All tasks created before this method is called are permanently deleted.
		 * Purge operations can take up to one minute to take effect. Tasks
		 * might be dispatched before the purge takes effect. A purge is irreversible.
		 * Post v2/{name}:purge
		 * @param {string} name Required. The queue name. For example:
		 * `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_queues_purge(name: string, requestBody: PurgeQueueRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':purge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resume a queue.
		 * This method resumes a queue after it has been
		 * PAUSED or
		 * DISABLED. The state of a queue is stored
		 * in the queue's state; after calling this method it
		 * will be set to RUNNING.
		 * WARNING: Resuming many high-QPS queues at the same time can
		 * lead to target overloading. If you are resuming high-QPS
		 * queues, follow the 500/50/5 pattern described in
		 * [Managing Cloud Tasks Scaling
		 * Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).
		 * Post v2/{name}:resume
		 * @param {string} name Required. The queue name. For example:
		 * `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_queues_resume(name: string, requestBody: ResumeQueueRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':resume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Forces a task to run now.
		 * When this method is called, Cloud Tasks will dispatch the task, even if
		 * the task is already running, the queue has reached its RateLimits or
		 * is PAUSED.
		 * This command is meant to be used for manual debugging. For
		 * example, RunTask can be used to retry a failed
		 * task after a fix has been made or to manually force a task to be
		 * dispatched now.
		 * The dispatched task is returned. That is, the task that is returned
		 * contains the status after the task is dispatched but
		 * before the task is received by its target.
		 * If Cloud Tasks receives a successful response from the task's
		 * target, then the task will be deleted; otherwise the task's
		 * schedule_time will be reset to the time that
		 * RunTask was called plus the retry delay specified
		 * in the queue's RetryConfig.
		 * RunTask returns
		 * NOT_FOUND when it is called on a
		 * task that has already succeeded or permanently failed.
		 * Post v2/{name}:run
		 * @param {string} name Required. The task name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_queues_tasks_run(name: string, requestBody: RunTaskRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists queues.
		 * Queues are returned in lexicographical order.
		 * Get v2/{parent}/queues
		 * @param {string} parent Required. The location name.
		 * For example: `projects/PROJECT_ID/locations/LOCATION_ID`
		 * @param {string} filter `filter` can be used to specify a subset of queues. Any Queue
		 * field can be used as a filter and several operators as supported.
		 * For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as
		 * described in
		 * [Stackdriver's Advanced Logs
		 * Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
		 * Sample filter "state: PAUSED".
		 * Note that using filters might cause fewer queues than the
		 * requested page_size to be returned.
		 * @param {number} pageSize Requested page size.
		 * The maximum page size is 9800. If unspecified, the page size will
		 * be the maximum. Fewer queues than requested might be returned,
		 * even if more queues exist; use the
		 * next_page_token in the
		 * response to determine if more queues exist.
		 * @param {string} pageToken A token identifying the page of results to return.
		 * To request the first page results, page_token must be empty. To
		 * request the next page of results, page_token must be the value of
		 * next_page_token returned
		 * from the previous call to ListQueues
		 * method. It is an error to switch the value of the
		 * filter while iterating through pages.
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_queues_list(parent: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/queues&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a queue.
		 * Queues created with this method allow tasks to live for a maximum of 31
		 * days. After a task is 31 days old, the task will be deleted regardless of whether
		 * it was dispatched or not.
		 * WARNING: Using this method may have unintended side effects if you are
		 * using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
		 * Read
		 * [Overview of Queue Management and
		 * queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using
		 * this method.
		 * Post v2/{parent}/queues
		 * @param {string} parent Required. The location name in which the queue will be created.
		 * For example: `projects/PROJECT_ID/locations/LOCATION_ID`
		 * The list of allowed locations can be obtained by calling Cloud
		 * Tasks' implementation of
		 * ListLocations.
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_queues_create(parent: string, requestBody: Queue): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/queues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the tasks in a queue.
		 * By default, only the BASIC view is retrieved
		 * due to performance considerations;
		 * response_view controls the
		 * subset of information which is returned.
		 * The tasks may be returned in any order. The ordering may change at any
		 * time.
		 * Get v2/{parent}/tasks
		 * @param {string} parent Required. The queue name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
		 * @param {number} pageSize Maximum page size.
		 * Fewer tasks than requested might be returned, even if more tasks exist; use
		 * next_page_token in the response to
		 * determine if more tasks exist.
		 * The maximum page size is 1000. If unspecified, the page size will be the
		 * maximum.
		 * @param {string} pageToken A token identifying the page of results to return.
		 * To request the first page results, page_token must be empty. To
		 * request the next page of results, page_token must be the value of
		 * next_page_token returned
		 * from the previous call to ListTasks
		 * method.
		 * The page token is valid for only 2 hours.
		 * @param {CreateTaskRequestResponseView} responseView The response_view specifies which subset of the Task will be
		 * returned.
		 * By default response_view is BASIC; not all
		 * information is retrieved by default because some data, such as
		 * payloads, might be desirable to return only when needed because
		 * of its large size or because of the sensitivity of data that it
		 * contains.
		 * Authorization for FULL requires
		 * `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
		 * permission on the Task resource.
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_queues_tasks_list(parent: string, pageSize: number, pageToken: string, responseView: CreateTaskRequestResponseView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tasks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&responseView=' + responseView, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a task and adds it to a queue.
		 * Tasks cannot be updated after creation; there is no UpdateTask command.
		 * * The maximum task size is 100KB.
		 * Post v2/{parent}/tasks
		 * @param {string} parent Required. The queue name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
		 * The queue must already exist.
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_queues_tasks_create(parent: string, requestBody: CreateTaskRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the access control policy for a Queue.
		 * Returns an empty policy if the resource exists and does not have a policy
		 * set.
		 * Authorization requires the following
		 * [Google IAM](https://cloud.google.com/iam) permission on the specified
		 * resource parent:
		 * * `cloudtasks.queues.getIamPolicy`
		 * Post v2/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_queues_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the access control policy for a Queue. Replaces any existing
		 * policy.
		 * Note: The Cloud Console does not check queue-level IAM permissions yet.
		 * Project-level permissions are required to use the Cloud Console.
		 * Authorization requires the following
		 * [Google IAM](https://cloud.google.com/iam) permission on the specified
		 * resource parent:
		 * * `cloudtasks.queues.setIamPolicy`
		 * Post v2/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_queues_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns permissions that a caller has on a Queue.
		 * If the resource does not exist, this will return an empty set of
		 * permissions, not a NOT_FOUND error.
		 * Note: This operation is designed to be used for building permission-aware
		 * UIs and command-line tools, not for authorization checking. This operation
		 * may "fail open" without warning.
		 * Post v2/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Cloudtasks_projects_locations_queues_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

