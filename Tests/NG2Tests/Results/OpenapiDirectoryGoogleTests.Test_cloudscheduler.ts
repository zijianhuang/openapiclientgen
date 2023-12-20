import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * App Engine target. The job will be pushed to a job handler by means
	 * of an HTTP request via an http_method such
	 * as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an
	 * HTTP response code in the range [200 - 299]. Error 503 is
	 * considered an App Engine system error instead of an application
	 * error. Requests returning error 503 will be retried regardless of
	 * retry configuration and not counted against retry counts. Any other
	 * response code, or a failure to receive a response before the
	 * deadline, constitutes a failed attempt.
	 */
	export interface AppEngineHttpTarget {

		/**
		 * App Engine Routing.
		 * For more information about services, versions, and instances see
		 * [An Overview of App
		 * Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine),
		 * [Microservices Architecture on Google App
		 * Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine),
		 * [App Engine Standard request
		 * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed),
		 * and [App Engine Flex request
		 * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
		 */
		appEngineRouting?: AppEngineRouting;

		/**
		 * Body.
		 * HTTP request body. A request body is allowed only if the HTTP method is
		 * POST or PUT. It will result in invalid argument error to set a body on a
		 * job with an incompatible HttpMethod.
		 */
		body?: string | null;

		/**
		 * HTTP request headers.
		 * This map contains the header field names and values. Headers can be set
		 * when the job is created.
		 * Cloud Scheduler sets some headers to default values:
		 * * `User-Agent`: By default, this header is
		 * `"AppEngine-Google; (+http://code.google.com/appengine)"`.
		 * This header can be modified, but Cloud Scheduler will append
		 * `"AppEngine-Google; (+http://code.google.com/appengine)"` to the
		 * modified `User-Agent`.
		 * * `X-CloudScheduler`: This header will be set to true.
		 * If the job has an body, Cloud Scheduler sets
		 * the following headers:
		 * * `Content-Type`: By default, the `Content-Type` header is set to
		 * `"application/octet-stream"`. The default can be overridden by explictly
		 * setting `Content-Type` to a particular media type when the job is
		 * created.
		 * For example, `Content-Type` can be set to `"application/json"`.
		 * * `Content-Length`: This is computed by Cloud Scheduler. This value is
		 * output only. It cannot be changed.
		 * The headers below are output only. They cannot be set or overridden:
		 * * `X-Google-*`: For Google internal use only.
		 * * `X-AppEngine-*`: For Google internal use only.
		 * In addition, some App Engine headers, which contain
		 * job-specific information, are also be sent to the job handler.
		 */
		headers?: {[id: string]: string };

		/**
		 * The HTTP method to use for the request. PATCH and OPTIONS are not
		 * permitted.
		 */
		httpMethod?: AppEngineHttpTargetHttpMethod | null;

		/**
		 * The relative URI.
		 * The relative URL must begin with "/" and must be a valid HTTP relative URL.
		 * It can contain a path, query string arguments, and `#` fragments.
		 * If the relative URL is empty, then the root path "/" will be used.
		 * No spaces are allowed, and the maximum length allowed is 2083 characters.
		 */
		relativeUri?: string | null;
	}

	/**
	 * App Engine target. The job will be pushed to a job handler by means
	 * of an HTTP request via an http_method such
	 * as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an
	 * HTTP response code in the range [200 - 299]. Error 503 is
	 * considered an App Engine system error instead of an application
	 * error. Requests returning error 503 will be retried regardless of
	 * retry configuration and not counted against retry counts. Any other
	 * response code, or a failure to receive a response before the
	 * deadline, constitutes a failed attempt.
	 */
	export interface AppEngineHttpTargetFormProperties {

		/**
		 * Body.
		 * HTTP request body. A request body is allowed only if the HTTP method is
		 * POST or PUT. It will result in invalid argument error to set a body on a
		 * job with an incompatible HttpMethod.
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * HTTP request headers.
		 * This map contains the header field names and values. Headers can be set
		 * when the job is created.
		 * Cloud Scheduler sets some headers to default values:
		 * * `User-Agent`: By default, this header is
		 * `"AppEngine-Google; (+http://code.google.com/appengine)"`.
		 * This header can be modified, but Cloud Scheduler will append
		 * `"AppEngine-Google; (+http://code.google.com/appengine)"` to the
		 * modified `User-Agent`.
		 * * `X-CloudScheduler`: This header will be set to true.
		 * If the job has an body, Cloud Scheduler sets
		 * the following headers:
		 * * `Content-Type`: By default, the `Content-Type` header is set to
		 * `"application/octet-stream"`. The default can be overridden by explictly
		 * setting `Content-Type` to a particular media type when the job is
		 * created.
		 * For example, `Content-Type` can be set to `"application/json"`.
		 * * `Content-Length`: This is computed by Cloud Scheduler. This value is
		 * output only. It cannot be changed.
		 * The headers below are output only. They cannot be set or overridden:
		 * * `X-Google-*`: For Google internal use only.
		 * * `X-AppEngine-*`: For Google internal use only.
		 * In addition, some App Engine headers, which contain
		 * job-specific information, are also be sent to the job handler.
		 */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The HTTP method to use for the request. PATCH and OPTIONS are not
		 * permitted.
		 */
		httpMethod: FormControl<AppEngineHttpTargetHttpMethod | null | undefined>,

		/**
		 * The relative URI.
		 * The relative URL must begin with "/" and must be a valid HTTP relative URL.
		 * It can contain a path, query string arguments, and `#` fragments.
		 * If the relative URL is empty, then the root path "/" will be used.
		 * No spaces are allowed, and the maximum length allowed is 2083 characters.
		 */
		relativeUri: FormControl<string | null | undefined>,
	}
	export function CreateAppEngineHttpTargetFormGroup() {
		return new FormGroup<AppEngineHttpTargetFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			httpMethod: new FormControl<AppEngineHttpTargetHttpMethod | null | undefined>(undefined),
			relativeUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * App Engine Routing.
	 * For more information about services, versions, and instances see
	 * [An Overview of App
	 * Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine),
	 * [Microservices Architecture on Google App
	 * Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine),
	 * [App Engine Standard request
	 * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed),
	 * and [App Engine Flex request
	 * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
	 */
	export interface AppEngineRouting {

		/**
		 * Output only. The host that the job is sent to.
		 * For more information about how App Engine requests are routed, see
		 * [here](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed).
		 * The host is constructed as:
		 * * `host = [application_domain_name]`</br>
		 * `| [service] + '.' + [application_domain_name]`</br>
		 * `| [version] + '.' + [application_domain_name]`</br>
		 * `| [version_dot_service]+ '.' + [application_domain_name]`</br>
		 * `| [instance] + '.' + [application_domain_name]`</br>
		 * `| [instance_dot_service] + '.' + [application_domain_name]`</br>
		 * `| [instance_dot_version] + '.' + [application_domain_name]`</br>
		 * `| [instance_dot_version_dot_service] + '.' + [application_domain_name]`
		 * * `application_domain_name` = The domain name of the app, for
		 * example <app-id>.appspot.com, which is associated with the
		 * job's project ID.
		 * * `service =` service
		 * * `version =` version
		 * * `version_dot_service =`
		 * version `+ '.' +`
		 * service
		 * * `instance =` instance
		 * * `instance_dot_service =`
		 * instance `+ '.' +`
		 * service
		 * * `instance_dot_version =`
		 * instance `+ '.' +`
		 * version
		 * * `instance_dot_version_dot_service =`
		 * instance `+ '.' +`
		 * version `+ '.' +`
		 * service
		 * If service is empty, then the job will be sent
		 * to the service which is the default service when the job is attempted.
		 * If version is empty, then the job will be sent
		 * to the version which is the default version when the job is attempted.
		 * If instance is empty, then the job will be
		 * sent to an instance which is available when the job is attempted.
		 * If service,
		 * version, or
		 * instance is invalid, then the job will be sent
		 * to the default version of the default service when the job is attempted.
		 */
		host?: string | null;

		/**
		 * App instance.
		 * By default, the job is sent to an instance which is available when
		 * the job is attempted.
		 * Requests can only be sent to a specific instance if
		 * [manual scaling is used in App Engine
		 * Standard](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes).
		 * App Engine Flex does not support instances. For more information, see
		 * [App Engine Standard request
		 * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
		 * and [App Engine Flex request
		 * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
		 */
		instance?: string | null;

		/**
		 * App service.
		 * By default, the job is sent to the service which is the default
		 * service when the job is attempted.
		 */
		service?: string | null;

		/**
		 * App version.
		 * By default, the job is sent to the version which is the default
		 * version when the job is attempted.
		 */
		version?: string | null;
	}

	/**
	 * App Engine Routing.
	 * For more information about services, versions, and instances see
	 * [An Overview of App
	 * Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine),
	 * [Microservices Architecture on Google App
	 * Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine),
	 * [App Engine Standard request
	 * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed),
	 * and [App Engine Flex request
	 * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
	 */
	export interface AppEngineRoutingFormProperties {

		/**
		 * Output only. The host that the job is sent to.
		 * For more information about how App Engine requests are routed, see
		 * [here](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed).
		 * The host is constructed as:
		 * * `host = [application_domain_name]`</br>
		 * `| [service] + '.' + [application_domain_name]`</br>
		 * `| [version] + '.' + [application_domain_name]`</br>
		 * `| [version_dot_service]+ '.' + [application_domain_name]`</br>
		 * `| [instance] + '.' + [application_domain_name]`</br>
		 * `| [instance_dot_service] + '.' + [application_domain_name]`</br>
		 * `| [instance_dot_version] + '.' + [application_domain_name]`</br>
		 * `| [instance_dot_version_dot_service] + '.' + [application_domain_name]`
		 * * `application_domain_name` = The domain name of the app, for
		 * example <app-id>.appspot.com, which is associated with the
		 * job's project ID.
		 * * `service =` service
		 * * `version =` version
		 * * `version_dot_service =`
		 * version `+ '.' +`
		 * service
		 * * `instance =` instance
		 * * `instance_dot_service =`
		 * instance `+ '.' +`
		 * service
		 * * `instance_dot_version =`
		 * instance `+ '.' +`
		 * version
		 * * `instance_dot_version_dot_service =`
		 * instance `+ '.' +`
		 * version `+ '.' +`
		 * service
		 * If service is empty, then the job will be sent
		 * to the service which is the default service when the job is attempted.
		 * If version is empty, then the job will be sent
		 * to the version which is the default version when the job is attempted.
		 * If instance is empty, then the job will be
		 * sent to an instance which is available when the job is attempted.
		 * If service,
		 * version, or
		 * instance is invalid, then the job will be sent
		 * to the default version of the default service when the job is attempted.
		 */
		host: FormControl<string | null | undefined>,

		/**
		 * App instance.
		 * By default, the job is sent to an instance which is available when
		 * the job is attempted.
		 * Requests can only be sent to a specific instance if
		 * [manual scaling is used in App Engine
		 * Standard](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes).
		 * App Engine Flex does not support instances. For more information, see
		 * [App Engine Standard request
		 * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
		 * and [App Engine Flex request
		 * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
		 */
		instance: FormControl<string | null | undefined>,

		/**
		 * App service.
		 * By default, the job is sent to the service which is the default
		 * service when the job is attempted.
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * App version.
		 * By default, the job is sent to the version which is the default
		 * version when the job is attempted.
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAppEngineRoutingFormGroup() {
		return new FormGroup<AppEngineRoutingFormProperties>({
			host: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppEngineHttpTargetHttpMethod { HTTP_METHOD_UNSPECIFIED = 0, POST = 1, GET = 2, HEAD = 3, PUT = 4, DELETE = 5, PATCH = 6, OPTIONS = 7 }


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
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/**
	 * Http target. The job will be pushed to the job handler by means of
	 * an HTTP request via an http_method such as HTTP
	 * POST, HTTP GET, etc. The job is acknowledged by means of an HTTP
	 * response code in the range [200 - 299]. A failure to receive a response
	 * constitutes a failed execution. For a redirected request, the response
	 * returned by the redirected request is considered.
	 */
	export interface HttpTarget {

		/**
		 * HTTP request body. A request body is allowed only if the HTTP
		 * method is POST, PUT, or PATCH. It is an error to set body on a job with an
		 * incompatible HttpMethod.
		 */
		body?: string | null;

		/**
		 * The user can specify HTTP request headers to send with the job's
		 * HTTP request. This map contains the header field names and
		 * values. Repeated headers are not supported, but a header value can
		 * contain commas. These headers represent a subset of the headers
		 * that will accompany the job's HTTP request. Some HTTP request
		 * headers will be ignored or replaced. A partial list of headers that
		 * will be ignored or replaced is below:
		 * - Host: This will be computed by Cloud Scheduler and derived from
		 * uri.
		 * * `Content-Length`: This will be computed by Cloud Scheduler.
		 * * `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
		 * * `X-Google-*`: Google internal use only.
		 * * `X-AppEngine-*`: Google internal use only.
		 * The total size of headers must be less than 80KB.
		 */
		headers?: {[id: string]: string };

		/** Which HTTP method to use for the request. */
		httpMethod?: AppEngineHttpTargetHttpMethod | null;

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
		 * Required. The full URI path that the request will be sent to. This string
		 * must begin with either "http://" or "https://". Some examples of
		 * valid values for uri are:
		 * `http://acme.com` and `https://acme.com/sales:8080`. Cloud Scheduler will
		 * encode some characters for safety and compatibility. The maximum allowed
		 * URL length is 2083 characters after encoding.
		 */
		uri?: string | null;
	}

	/**
	 * Http target. The job will be pushed to the job handler by means of
	 * an HTTP request via an http_method such as HTTP
	 * POST, HTTP GET, etc. The job is acknowledged by means of an HTTP
	 * response code in the range [200 - 299]. A failure to receive a response
	 * constitutes a failed execution. For a redirected request, the response
	 * returned by the redirected request is considered.
	 */
	export interface HttpTargetFormProperties {

		/**
		 * HTTP request body. A request body is allowed only if the HTTP
		 * method is POST, PUT, or PATCH. It is an error to set body on a job with an
		 * incompatible HttpMethod.
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * The user can specify HTTP request headers to send with the job's
		 * HTTP request. This map contains the header field names and
		 * values. Repeated headers are not supported, but a header value can
		 * contain commas. These headers represent a subset of the headers
		 * that will accompany the job's HTTP request. Some HTTP request
		 * headers will be ignored or replaced. A partial list of headers that
		 * will be ignored or replaced is below:
		 * - Host: This will be computed by Cloud Scheduler and derived from
		 * uri.
		 * * `Content-Length`: This will be computed by Cloud Scheduler.
		 * * `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
		 * * `X-Google-*`: Google internal use only.
		 * * `X-AppEngine-*`: Google internal use only.
		 * The total size of headers must be less than 80KB.
		 */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/** Which HTTP method to use for the request. */
		httpMethod: FormControl<AppEngineHttpTargetHttpMethod | null | undefined>,

		/**
		 * Required. The full URI path that the request will be sent to. This string
		 * must begin with either "http://" or "https://". Some examples of
		 * valid values for uri are:
		 * `http://acme.com` and `https://acme.com/sales:8080`. Cloud Scheduler will
		 * encode some characters for safety and compatibility. The maximum allowed
		 * URL length is 2083 characters after encoding.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateHttpTargetFormGroup() {
		return new FormGroup<HttpTargetFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			httpMethod: new FormControl<AppEngineHttpTargetHttpMethod | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

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
		scope?: string | null;

		/**
		 * [Service account email](https://cloud.google.com/iam/docs/service-accounts)
		 * to be used for generating OAuth token.
		 * The service account must be within the same project as the job. The caller
		 * must have iam.serviceAccounts.actAs permission for the service account.
		 */
		serviceAccountEmail?: string | null;
	}

	/**
	 * Contains information needed for generating an
	 * [OAuth token](https://developers.google.com/identity/protocols/OAuth2).
	 * This type of authorization should generally only be used when calling Google
	 * APIs hosted on *.googleapis.com.
	 */
	export interface OAuthTokenFormProperties {

		/**
		 * OAuth scope to be used for generating OAuth access token.
		 * If not specified, "https://www.googleapis.com/auth/cloud-platform"
		 * will be used.
		 */
		scope: FormControl<string | null | undefined>,

		/**
		 * [Service account email](https://cloud.google.com/iam/docs/service-accounts)
		 * to be used for generating OAuth token.
		 * The service account must be within the same project as the job. The caller
		 * must have iam.serviceAccounts.actAs permission for the service account.
		 */
		serviceAccountEmail: FormControl<string | null | undefined>,
	}
	export function CreateOAuthTokenFormGroup() {
		return new FormGroup<OAuthTokenFormProperties>({
			scope: new FormControl<string | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
		});

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
		audience?: string | null;

		/**
		 * [Service account email](https://cloud.google.com/iam/docs/service-accounts)
		 * to be used for generating OIDC token.
		 * The service account must be within the same project as the job. The caller
		 * must have iam.serviceAccounts.actAs permission for the service account.
		 */
		serviceAccountEmail?: string | null;
	}

	/**
	 * Contains information needed for generating an
	 * [OpenID Connect
	 * token](https://developers.google.com/identity/protocols/OpenIDConnect).
	 * This type of authorization can be used for many scenarios, including
	 * calling Cloud Run, or endpoints where you intend to validate the token
	 * yourself.
	 */
	export interface OidcTokenFormProperties {

		/**
		 * Audience to be used when generating OIDC token. If not specified, the URI
		 * specified in target will be used.
		 */
		audience: FormControl<string | null | undefined>,

		/**
		 * [Service account email](https://cloud.google.com/iam/docs/service-accounts)
		 * to be used for generating OIDC token.
		 * The service account must be within the same project as the job. The caller
		 * must have iam.serviceAccounts.actAs permission for the service account.
		 */
		serviceAccountEmail: FormControl<string | null | undefined>,
	}
	export function CreateOidcTokenFormGroup() {
		return new FormGroup<OidcTokenFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Configuration for a job.
	 * The maximum allowed size for a job is 100KB.
	 */
	export interface Job {

		/**
		 * App Engine target. The job will be pushed to a job handler by means
		 * of an HTTP request via an http_method such
		 * as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an
		 * HTTP response code in the range [200 - 299]. Error 503 is
		 * considered an App Engine system error instead of an application
		 * error. Requests returning error 503 will be retried regardless of
		 * retry configuration and not counted against retry counts. Any other
		 * response code, or a failure to receive a response before the
		 * deadline, constitutes a failed attempt.
		 */
		appEngineHttpTarget?: AppEngineHttpTarget;

		/**
		 * The deadline for job attempts. If the request handler does not respond by
		 * this deadline then the request is cancelled and the attempt is marked as a
		 * `DEADLINE_EXCEEDED` failure. The failed attempt can be viewed in
		 * execution logs. Cloud Scheduler will retry the job according
		 * to the RetryConfig.
		 * The allowed duration for this deadline is:
		 * * For HTTP targets, between 15 seconds and 30 minutes.
		 * * For App Engine HTTP targets, between 15
		 * seconds and 24 hours.
		 */
		attemptDeadline?: string | null;

		/**
		 * Optionally caller-specified in CreateJob or
		 * UpdateJob.
		 * A human-readable description for the job. This string must not contain
		 * more than 500 characters.
		 */
		description?: string | null;

		/**
		 * Http target. The job will be pushed to the job handler by means of
		 * an HTTP request via an http_method such as HTTP
		 * POST, HTTP GET, etc. The job is acknowledged by means of an HTTP
		 * response code in the range [200 - 299]. A failure to receive a response
		 * constitutes a failed execution. For a redirected request, the response
		 * returned by the redirected request is considered.
		 */
		httpTarget?: HttpTarget;

		/** Output only. The time the last job attempt started. */
		lastAttemptTime?: string | null;

		/**
		 * Optionally caller-specified in CreateJob, after
		 * which it becomes output only.
		 * The job name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
		 * * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),
		 * hyphens (-), colons (:), or periods (.).
		 * For more information, see
		 * [Identifying
		 * projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
		 * * `LOCATION_ID` is the canonical ID for the job's location.
		 * The list of available locations can be obtained by calling
		 * ListLocations.
		 * For more information, see https://cloud.google.com/about/locations/.
		 * * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]),
		 * hyphens (-), or underscores (_). The maximum length is 500 characters.
		 */
		name?: string | null;

		/**
		 * Pub/Sub target. The job will be delivered by publishing a message to
		 * the given Pub/Sub topic.
		 */
		pubsubTarget?: PubsubTarget;

		/**
		 * Settings that determine the retry behavior.
		 * By default, if a job does not complete successfully (meaning that
		 * an acknowledgement is not received from the handler, then it will be retried
		 * with exponential backoff according to the settings in RetryConfig.
		 */
		retryConfig?: RetryConfig;

		/**
		 * Required, except when used with UpdateJob.
		 * Describes the schedule on which the job will be executed.
		 * The schedule can be either of the following types:
		 * * [Crontab](http://en.wikipedia.org/wiki/Cron#Overview)
		 * * English-like
		 * [schedule](https://cloud.google.com/scheduler/docs/configuring/cron-job-schedules)
		 * As a general rule, execution `n + 1` of a job will not begin
		 * until execution `n` has finished. Cloud Scheduler will never
		 * allow two simultaneously outstanding executions. For example,
		 * this implies that if the `n+1`th execution is scheduled to run at
		 * 16:00 but the `n`th execution takes until 16:15, the `n+1`th
		 * execution will not start until `16:15`.
		 * A scheduled start time will be delayed if the previous
		 * execution has not ended when its scheduled time occurs.
		 * If retry_count > 0 and a job attempt fails,
		 * the job will be tried a total of retry_count
		 * times, with exponential backoff, until the next scheduled start
		 * time.
		 */
		schedule?: string | null;

		/**
		 * Output only. The next time the job is scheduled. Note that this may be a
		 * retry of a previously failed attempt or the next execution time
		 * according to the schedule.
		 */
		scheduleTime?: string | null;

		/** Output only. State of the job. */
		state?: JobState | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		status?: Status;

		/**
		 * Specifies the time zone to be used in interpreting
		 * schedule. The value of this field must be a time
		 * zone name from the [tz database](http://en.wikipedia.org/wiki/Tz_database).
		 * Note that some time zones include a provision for
		 * daylight savings time. The rules for daylight saving time are
		 * determined by the chosen tz. For UTC use the string "utc". If a
		 * time zone is not specified, the default will be in UTC (also known
		 * as GMT).
		 */
		timeZone?: string | null;

		/** Output only. The creation time of the job. */
		userUpdateTime?: string | null;
	}

	/**
	 * Configuration for a job.
	 * The maximum allowed size for a job is 100KB.
	 */
	export interface JobFormProperties {

		/**
		 * The deadline for job attempts. If the request handler does not respond by
		 * this deadline then the request is cancelled and the attempt is marked as a
		 * `DEADLINE_EXCEEDED` failure. The failed attempt can be viewed in
		 * execution logs. Cloud Scheduler will retry the job according
		 * to the RetryConfig.
		 * The allowed duration for this deadline is:
		 * * For HTTP targets, between 15 seconds and 30 minutes.
		 * * For App Engine HTTP targets, between 15
		 * seconds and 24 hours.
		 */
		attemptDeadline: FormControl<string | null | undefined>,

		/**
		 * Optionally caller-specified in CreateJob or
		 * UpdateJob.
		 * A human-readable description for the job. This string must not contain
		 * more than 500 characters.
		 */
		description: FormControl<string | null | undefined>,

		/** Output only. The time the last job attempt started. */
		lastAttemptTime: FormControl<string | null | undefined>,

		/**
		 * Optionally caller-specified in CreateJob, after
		 * which it becomes output only.
		 * The job name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
		 * * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),
		 * hyphens (-), colons (:), or periods (.).
		 * For more information, see
		 * [Identifying
		 * projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
		 * * `LOCATION_ID` is the canonical ID for the job's location.
		 * The list of available locations can be obtained by calling
		 * ListLocations.
		 * For more information, see https://cloud.google.com/about/locations/.
		 * * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]),
		 * hyphens (-), or underscores (_). The maximum length is 500 characters.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required, except when used with UpdateJob.
		 * Describes the schedule on which the job will be executed.
		 * The schedule can be either of the following types:
		 * * [Crontab](http://en.wikipedia.org/wiki/Cron#Overview)
		 * * English-like
		 * [schedule](https://cloud.google.com/scheduler/docs/configuring/cron-job-schedules)
		 * As a general rule, execution `n + 1` of a job will not begin
		 * until execution `n` has finished. Cloud Scheduler will never
		 * allow two simultaneously outstanding executions. For example,
		 * this implies that if the `n+1`th execution is scheduled to run at
		 * 16:00 but the `n`th execution takes until 16:15, the `n+1`th
		 * execution will not start until `16:15`.
		 * A scheduled start time will be delayed if the previous
		 * execution has not ended when its scheduled time occurs.
		 * If retry_count > 0 and a job attempt fails,
		 * the job will be tried a total of retry_count
		 * times, with exponential backoff, until the next scheduled start
		 * time.
		 */
		schedule: FormControl<string | null | undefined>,

		/**
		 * Output only. The next time the job is scheduled. Note that this may be a
		 * retry of a previously failed attempt or the next execution time
		 * according to the schedule.
		 */
		scheduleTime: FormControl<string | null | undefined>,

		/** Output only. State of the job. */
		state: FormControl<JobState | null | undefined>,

		/**
		 * Specifies the time zone to be used in interpreting
		 * schedule. The value of this field must be a time
		 * zone name from the [tz database](http://en.wikipedia.org/wiki/Tz_database).
		 * Note that some time zones include a provision for
		 * daylight savings time. The rules for daylight saving time are
		 * determined by the chosen tz. For UTC use the string "utc". If a
		 * time zone is not specified, the default will be in UTC (also known
		 * as GMT).
		 */
		timeZone: FormControl<string | null | undefined>,

		/** Output only. The creation time of the job. */
		userUpdateTime: FormControl<string | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			attemptDeadline: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastAttemptTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			schedule: new FormControl<string | null | undefined>(undefined),
			scheduleTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<JobState | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			userUpdateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Pub/Sub target. The job will be delivered by publishing a message to
	 * the given Pub/Sub topic.
	 */
	export interface PubsubTarget {

		/**
		 * Attributes for PubsubMessage.
		 * Pubsub message must contain either non-empty data, or at least one
		 * attribute.
		 */
		attributes?: {[id: string]: string };

		/**
		 * The message payload for PubsubMessage.
		 * Pubsub message must contain either non-empty data, or at least one
		 * attribute.
		 */
		data?: string | null;

		/**
		 * Required. The name of the Cloud Pub/Sub topic to which messages will
		 * be published when a job is delivered. The topic name must be in the
		 * same format as required by PubSub's
		 * [PublishRequest.name](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#publishrequest),
		 * for example `projects/PROJECT_ID/topics/TOPIC_ID`.
		 * The topic must be in the same project as the Cloud Scheduler job.
		 */
		topicName?: string | null;
	}

	/**
	 * Pub/Sub target. The job will be delivered by publishing a message to
	 * the given Pub/Sub topic.
	 */
	export interface PubsubTargetFormProperties {

		/**
		 * Attributes for PubsubMessage.
		 * Pubsub message must contain either non-empty data, or at least one
		 * attribute.
		 */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The message payload for PubsubMessage.
		 * Pubsub message must contain either non-empty data, or at least one
		 * attribute.
		 */
		data: FormControl<string | null | undefined>,

		/**
		 * Required. The name of the Cloud Pub/Sub topic to which messages will
		 * be published when a job is delivered. The topic name must be in the
		 * same format as required by PubSub's
		 * [PublishRequest.name](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#publishrequest),
		 * for example `projects/PROJECT_ID/topics/TOPIC_ID`.
		 * The topic must be in the same project as the Cloud Scheduler job.
		 */
		topicName: FormControl<string | null | undefined>,
	}
	export function CreatePubsubTargetFormGroup() {
		return new FormGroup<PubsubTargetFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			topicName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Settings that determine the retry behavior.
	 * By default, if a job does not complete successfully (meaning that
	 * an acknowledgement is not received from the handler, then it will be retried
	 * with exponential backoff according to the settings in RetryConfig.
	 */
	export interface RetryConfig {

		/**
		 * The maximum amount of time to wait before retrying a job after
		 * it fails.
		 * The default value of this field is 1 hour.
		 */
		maxBackoffDuration?: string | null;

		/**
		 * The time between retries will double `max_doublings` times.
		 * A job's retry interval starts at
		 * min_backoff_duration, then doubles
		 * `max_doublings` times, then increases linearly, and finally
		 * retries retries at intervals of
		 * max_backoff_duration up to
		 * retry_count times.
		 * For example, if min_backoff_duration is
		 * 10s, max_backoff_duration is 300s, and
		 * `max_doublings` is 3, then the a job will first be retried in 10s. The
		 * retry interval will double three times, and then increase linearly by
		 * 2^3 * 10s.  Finally, the job will retry at intervals of
		 * max_backoff_duration until the job has
		 * been attempted retry_count times. Thus, the
		 * requests will retry at 10s, 20s, 40s, 80s, 160s, 240s, 300s, 300s, ....
		 * The default value of this field is 5.
		 */
		maxDoublings?: number | null;

		/**
		 * The time limit for retrying a failed job, measured from time when an
		 * execution was first attempted. If specified with
		 * retry_count, the job will be retried until both
		 * limits are reached.
		 * The default value for max_retry_duration is zero, which means retry
		 * duration is unlimited.
		 */
		maxRetryDuration?: string | null;

		/**
		 * The minimum amount of time to wait before retrying a job after
		 * it fails.
		 * The default value of this field is 5 seconds.
		 */
		minBackoffDuration?: string | null;

		/**
		 * The number of attempts that the system will make to run a job using the
		 * exponential backoff procedure described by
		 * max_doublings.
		 * The default value of retry_count is zero.
		 * If retry_count is zero, a job attempt will *not* be retried if
		 * it fails. Instead the Cloud Scheduler system will wait for the
		 * next scheduled execution time.
		 * If retry_count is set to a non-zero number then Cloud Scheduler
		 * will retry failed attempts, using exponential backoff,
		 * retry_count times, or until the next scheduled execution time,
		 * whichever comes first.
		 * Values greater than 5 and negative values are not allowed.
		 */
		retryCount?: number | null;
	}

	/**
	 * Settings that determine the retry behavior.
	 * By default, if a job does not complete successfully (meaning that
	 * an acknowledgement is not received from the handler, then it will be retried
	 * with exponential backoff according to the settings in RetryConfig.
	 */
	export interface RetryConfigFormProperties {

		/**
		 * The maximum amount of time to wait before retrying a job after
		 * it fails.
		 * The default value of this field is 1 hour.
		 */
		maxBackoffDuration: FormControl<string | null | undefined>,

		/**
		 * The time between retries will double `max_doublings` times.
		 * A job's retry interval starts at
		 * min_backoff_duration, then doubles
		 * `max_doublings` times, then increases linearly, and finally
		 * retries retries at intervals of
		 * max_backoff_duration up to
		 * retry_count times.
		 * For example, if min_backoff_duration is
		 * 10s, max_backoff_duration is 300s, and
		 * `max_doublings` is 3, then the a job will first be retried in 10s. The
		 * retry interval will double three times, and then increase linearly by
		 * 2^3 * 10s.  Finally, the job will retry at intervals of
		 * max_backoff_duration until the job has
		 * been attempted retry_count times. Thus, the
		 * requests will retry at 10s, 20s, 40s, 80s, 160s, 240s, 300s, 300s, ....
		 * The default value of this field is 5.
		 */
		maxDoublings: FormControl<number | null | undefined>,

		/**
		 * The time limit for retrying a failed job, measured from time when an
		 * execution was first attempted. If specified with
		 * retry_count, the job will be retried until both
		 * limits are reached.
		 * The default value for max_retry_duration is zero, which means retry
		 * duration is unlimited.
		 */
		maxRetryDuration: FormControl<string | null | undefined>,

		/**
		 * The minimum amount of time to wait before retrying a job after
		 * it fails.
		 * The default value of this field is 5 seconds.
		 */
		minBackoffDuration: FormControl<string | null | undefined>,

		/**
		 * The number of attempts that the system will make to run a job using the
		 * exponential backoff procedure described by
		 * max_doublings.
		 * The default value of retry_count is zero.
		 * If retry_count is zero, a job attempt will *not* be retried if
		 * it fails. Instead the Cloud Scheduler system will wait for the
		 * next scheduled execution time.
		 * If retry_count is set to a non-zero number then Cloud Scheduler
		 * will retry failed attempts, using exponential backoff,
		 * retry_count times, or until the next scheduled execution time,
		 * whichever comes first.
		 * Values greater than 5 and negative values are not allowed.
		 */
		retryCount: FormControl<number | null | undefined>,
	}
	export function CreateRetryConfigFormGroup() {
		return new FormGroup<RetryConfigFormProperties>({
			maxBackoffDuration: new FormControl<string | null | undefined>(undefined),
			maxDoublings: new FormControl<number | null | undefined>(undefined),
			maxRetryDuration: new FormControl<string | null | undefined>(undefined),
			minBackoffDuration: new FormControl<string | null | undefined>(undefined),
			retryCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum JobState { STATE_UNSPECIFIED = 0, ENABLED = 1, PAUSED = 2, DISABLED = 3, UPDATE_FAILED = 4 }


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
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}

	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing jobs using ListJobs. */
	export interface ListJobsResponse {

		/** The list of jobs. */
		jobs?: Array<Job>;

		/**
		 * A token to retrieve next page of results. Pass this value in the
		 * page_token field in the subsequent call to
		 * ListJobs to retrieve the next page of results.
		 * If this is empty it indicates that there are no more results
		 * through which to paginate.
		 * The page token is valid for only 2 hours.
		 */
		nextPageToken?: string | null;
	}

	/** Response message for listing jobs using ListJobs. */
	export interface ListJobsResponseFormProperties {

		/**
		 * A token to retrieve next page of results. Pass this value in the
		 * page_token field in the subsequent call to
		 * ListJobs to retrieve the next page of results.
		 * If this is empty it indicates that there are no more results
		 * through which to paginate.
		 * The page token is valid for only 2 hours.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
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
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/**
		 * Service-specific metadata. For example the available capacity at the given
		 * location.
		 */
		metadata?: {[id: string]: any };

		/**
		 * Resource name for the location, which may vary between implementations.
		 * For example: `"projects/example-project/locations/us-east1"`
		 */
		name?: string | null;
	}

	/** A resource that represents Google Cloud Platform location. */
	export interface LocationFormProperties {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/**
		 * Service-specific metadata. For example the available capacity at the given
		 * location.
		 */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Resource name for the location, which may vary between implementations.
		 * For example: `"projects/example-project/locations/us-east1"`
		 */
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


	/** Request message for PauseJob. */
	export interface PauseJobRequest {
	}

	/** Request message for PauseJob. */
	export interface PauseJobRequestFormProperties {
	}
	export function CreatePauseJobRequestFormGroup() {
		return new FormGroup<PauseJobRequestFormProperties>({
		});

	}


	/**
	 * A message that is published by publishers and consumed by subscribers. The
	 * message must contain either a non-empty data field or at least one attribute.
	 * Note that client libraries represent this object differently
	 * depending on the language. See the corresponding
	 * <a href="https://cloud.google.com/pubsub/docs/reference/libraries">client
	 * library documentation</a> for more information. See
	 * <a href="https://cloud.google.com/pubsub/quotas">Quotas and limits</a>
	 * for more information about message limits.
	 */
	export interface PubsubMessage {

		/**
		 * Attributes for this message. If this field is empty, the message must
		 * contain non-empty data.
		 */
		attributes?: {[id: string]: string };

		/**
		 * The message data field. If this field is empty, the message must contain
		 * at least one attribute.
		 */
		data?: string | null;

		/**
		 * ID of this message, assigned by the server when the message is published.
		 * Guaranteed to be unique within the topic. This value may be read by a
		 * subscriber that receives a `PubsubMessage` via a `Pull` call or a push
		 * delivery. It must not be populated by the publisher in a `Publish` call.
		 */
		messageId?: string | null;

		/**
		 * The time at which the message was published, populated by the server when
		 * it receives the `Publish` call. It must not be populated by the
		 * publisher in a `Publish` call.
		 */
		publishTime?: string | null;
	}

	/**
	 * A message that is published by publishers and consumed by subscribers. The
	 * message must contain either a non-empty data field or at least one attribute.
	 * Note that client libraries represent this object differently
	 * depending on the language. See the corresponding
	 * <a href="https://cloud.google.com/pubsub/docs/reference/libraries">client
	 * library documentation</a> for more information. See
	 * <a href="https://cloud.google.com/pubsub/quotas">Quotas and limits</a>
	 * for more information about message limits.
	 */
	export interface PubsubMessageFormProperties {

		/**
		 * Attributes for this message. If this field is empty, the message must
		 * contain non-empty data.
		 */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The message data field. If this field is empty, the message must contain
		 * at least one attribute.
		 */
		data: FormControl<string | null | undefined>,

		/**
		 * ID of this message, assigned by the server when the message is published.
		 * Guaranteed to be unique within the topic. This value may be read by a
		 * subscriber that receives a `PubsubMessage` via a `Pull` call or a push
		 * delivery. It must not be populated by the publisher in a `Publish` call.
		 */
		messageId: FormControl<string | null | undefined>,

		/**
		 * The time at which the message was published, populated by the server when
		 * it receives the `Publish` call. It must not be populated by the
		 * publisher in a `Publish` call.
		 */
		publishTime: FormControl<string | null | undefined>,
	}
	export function CreatePubsubMessageFormGroup() {
		return new FormGroup<PubsubMessageFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
			publishTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ResumeJob. */
	export interface ResumeJobRequest {
	}

	/** Request message for ResumeJob. */
	export interface ResumeJobRequestFormProperties {
	}
	export function CreateResumeJobRequestFormGroup() {
		return new FormGroup<ResumeJobRequestFormProperties>({
		});

	}


	/**
	 * Request message for forcing a job to run now using
	 * RunJob.
	 */
	export interface RunJobRequest {
	}

	/**
	 * Request message for forcing a job to run now using
	 * RunJob.
	 */
	export interface RunJobRequestFormProperties {
	}
	export function CreateRunJobRequestFormGroup() {
		return new FormGroup<RunJobRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a job.
		 * Delete v1/{name}
		 * @param {string} name Required. The job name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
		 * @return {void} Successful response
		 */
		Cloudscheduler_projects_locations_jobs_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a job.
		 * Get v1/{name}
		 * @param {string} name Required. The job name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
		 * @return {void} Successful response
		 */
		Cloudscheduler_projects_locations_jobs_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a job.
		 * If successful, the updated Job is returned. If the job does
		 * not exist, `NOT_FOUND` is returned.
		 * If UpdateJob does not successfully return, it is possible for the
		 * job to be in an Job.State.UPDATE_FAILED state. A job in this state may
		 * not be executed. If this happens, retry the UpdateJob request
		 * until a successful response is received.
		 * Patch v1/{name}
		 * @param {string} name Optionally caller-specified in CreateJob, after
		 * which it becomes output only.
		 * The job name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
		 * * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),
		 *    hyphens (-), colons (:), or periods (.).
		 *    For more information, see
		 *    [Identifying
		 *    projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
		 * * `LOCATION_ID` is the canonical ID for the job's location.
		 *    The list of available locations can be obtained by calling
		 *    ListLocations.
		 *    For more information, see https://cloud.google.com/about/locations/.
		 * * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]),
		 *    hyphens (-), or underscores (_). The maximum length is 500 characters.
		 * @param {string} updateMask A  mask used to specify which fields of the job are being updated.
		 * @return {void} Successful response
		 */
		Cloudscheduler_projects_locations_jobs_patch(name: string, updateMask: string | null | undefined, requestBody: Job): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Cloudscheduler_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Pauses a job.
		 * If a job is paused then the system will stop executing the job
		 * until it is re-enabled via ResumeJob. The
		 * state of the job is stored in state; if paused it
		 * will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED
		 * to be paused.
		 * Post v1/{name}:pause
		 * @param {string} name Required. The job name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
		 * @return {void} Successful response
		 */
		Cloudscheduler_projects_locations_jobs_pause(name: string, requestBody: PauseJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':pause', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resume a job.
		 * This method reenables a job after it has been Job.State.PAUSED. The
		 * state of a job is stored in Job.state; after calling this method it
		 * will be set to Job.State.ENABLED. A job must be in
		 * Job.State.PAUSED to be resumed.
		 * Post v1/{name}:resume
		 * @param {string} name Required. The job name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
		 * @return {void} Successful response
		 */
		Cloudscheduler_projects_locations_jobs_resume(name: string, requestBody: ResumeJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':resume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Forces a job to run now.
		 * When this method is called, Cloud Scheduler will dispatch the job, even
		 * if the job is already running.
		 * Post v1/{name}:run
		 * @param {string} name Required. The job name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
		 * @return {void} Successful response
		 */
		Cloudscheduler_projects_locations_jobs_run(name: string, requestBody: RunJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists jobs.
		 * Get v1/{parent}/jobs
		 * @param {string} parent Required. The location name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID`.
		 * @param {number} pageSize Requested page size.
		 * The maximum page size is 500. If unspecified, the page size will
		 * be the maximum. Fewer jobs than requested might be returned,
		 * even if more jobs exist; use next_page_token to determine if more
		 * jobs exist.
		 * @param {string} pageToken A token identifying a page of results the server will return. To
		 * request the first page results, page_token must be empty. To
		 * request the next page of results, page_token must be the value of
		 * next_page_token returned from
		 * the previous call to ListJobs. It is an error to
		 * switch the value of filter or
		 * order_by while iterating through pages.
		 * @return {void} Successful response
		 */
		Cloudscheduler_projects_locations_jobs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a job.
		 * Post v1/{parent}/jobs
		 * @param {string} parent Required. The location name. For example:
		 * `projects/PROJECT_ID/locations/LOCATION_ID`.
		 * @return {void} Successful response
		 */
		Cloudscheduler_projects_locations_jobs_create(parent: string, requestBody: Job): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

