import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes the binding. */
	export interface GoogleCloudServicebrokerV1beta1__Binding {

		/**
		 * A JSON object that contains data for platform resources associated with
		 * the binding to be created.
		 */
		bind_resource?: {[id: string]: any };

		/**
		 * The id of the binding. Must be unique within GCP project.
		 * Maximum length is 64, GUID recommended.
		 * Required.
		 */
		binding_id?: string | null;

		/** Output only. Timestamp for when the binding was created. */
		createTime?: string | null;

		/**
		 * Output only. String containing the Deployment Manager deployment name that was created
		 * for this binding,
		 */
		deploymentName?: string | null;

		/** Configuration options for the service binding. */
		parameters?: {[id: string]: any };

		/**
		 * The ID of the plan. See `Service` and `Plan` resources for details.
		 * Maximum length is 64, GUID recommended.
		 * Required.
		 */
		plan_id?: string | null;

		/**
		 * Output only. The resource name of the binding, e.g.
		 * projects/project_id/brokers/broker_id/service_instances/instance_id/bindings/binding_id.
		 */
		resourceName?: string | null;

		/**
		 * The id of the service. Must be a valid identifier of a service
		 * contained in the list from a `ListServices()` call.
		 * Maximum length is 64, GUID recommended.
		 * Required.
		 */
		service_id?: string | null;
	}

	/** Describes the binding. */
	export interface GoogleCloudServicebrokerV1beta1__BindingFormProperties {

		/**
		 * A JSON object that contains data for platform resources associated with
		 * the binding to be created.
		 */
		bind_resource: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The id of the binding. Must be unique within GCP project.
		 * Maximum length is 64, GUID recommended.
		 * Required.
		 */
		binding_id: FormControl<string | null | undefined>,

		/** Output only. Timestamp for when the binding was created. */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Output only. String containing the Deployment Manager deployment name that was created
		 * for this binding,
		 */
		deploymentName: FormControl<string | null | undefined>,

		/** Configuration options for the service binding. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The ID of the plan. See `Service` and `Plan` resources for details.
		 * Maximum length is 64, GUID recommended.
		 * Required.
		 */
		plan_id: FormControl<string | null | undefined>,

		/**
		 * Output only. The resource name of the binding, e.g.
		 * projects/project_id/brokers/broker_id/service_instances/instance_id/bindings/binding_id.
		 */
		resourceName: FormControl<string | null | undefined>,

		/**
		 * The id of the service. Must be a valid identifier of a service
		 * contained in the list from a `ListServices()` call.
		 * Maximum length is 64, GUID recommended.
		 * Required.
		 */
		service_id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__BindingFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__BindingFormProperties>({
			bind_resource: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			binding_id: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deploymentName: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			plan_id: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			service_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Broker represents a consumable collection of Service Registry catalogs
	 * exposed as an OSB Broker.
	 */
	export interface GoogleCloudServicebrokerV1beta1__Broker {

		/** Output only. Timestamp for when the broker was created. */
		createTime?: string | null;

		/**
		 * Name of the broker in the format:
		 * <projects>/<project-id>/brokers/<broker>.
		 * This allows for multiple brokers per project which can be used to
		 * enable having custom brokers per GKE cluster, for example.
		 */
		name?: string | null;

		/**
		 * User friendly title of the broker.
		 * Limited to 1024 characters. Requests with longer titles will be rejected.
		 */
		title?: string | null;

		/**
		 * Output only. URL of the broker OSB-compliant endpoint, for example:
		 * https://servicebroker.googleapis.com/projects/<project>/brokers/<broker>
		 */
		url?: string | null;
	}

	/**
	 * Broker represents a consumable collection of Service Registry catalogs
	 * exposed as an OSB Broker.
	 */
	export interface GoogleCloudServicebrokerV1beta1__BrokerFormProperties {

		/** Output only. Timestamp for when the broker was created. */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Name of the broker in the format:
		 * <projects>/<project-id>/brokers/<broker>.
		 * This allows for multiple brokers per project which can be used to
		 * enable having custom brokers per GKE cluster, for example.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * User friendly title of the broker.
		 * Limited to 1024 characters. Requests with longer titles will be rejected.
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * Output only. URL of the broker OSB-compliant endpoint, for example:
		 * https://servicebroker.googleapis.com/projects/<project>/brokers/<broker>
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__BrokerFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__BrokerFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `CreateBinding()` method. */
	export interface GoogleCloudServicebrokerV1beta1__CreateBindingResponse {

		/** Credentials to use the binding. */
		credentials?: {[id: string]: any };

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description?: string | null;

		/**
		 * If broker executes operation asynchronously, this is the operation ID that
		 * can be polled to check the completion status of said operation.
		 * This broker always executes all create/delete operations asynchronously.
		 */
		operation?: string | null;

		/**
		 * A URL to which the platform may proxy requests for the address sent with
		 * bind_resource.route
		 */
		route_service_url?: string | null;

		/** From where to read system logs. */
		syslog_drain_url?: string | null;

		/** An array of configuration for mounting volumes. */
		volume_mounts?: Array<string>;
	}

	/** Response for the `CreateBinding()` method. */
	export interface GoogleCloudServicebrokerV1beta1__CreateBindingResponseFormProperties {

		/** Credentials to use the binding. */
		credentials: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * If broker executes operation asynchronously, this is the operation ID that
		 * can be polled to check the completion status of said operation.
		 * This broker always executes all create/delete operations asynchronously.
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * A URL to which the platform may proxy requests for the address sent with
		 * bind_resource.route
		 */
		route_service_url: FormControl<string | null | undefined>,

		/** From where to read system logs. */
		syslog_drain_url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__CreateBindingResponseFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__CreateBindingResponseFormProperties>({
			credentials: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			route_service_url: new FormControl<string | null | undefined>(undefined),
			syslog_drain_url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `CreateServiceInstance()` method. */
	export interface GoogleCloudServicebrokerV1beta1__CreateServiceInstanceResponse {

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description?: string | null;

		/**
		 * If broker executes operation asynchronously, this is the operation ID that
		 * can be polled to check the completion status of said operation.
		 * This broker always will return a non-empty operation on success.
		 */
		operation?: string | null;
	}

	/** Response for the `CreateServiceInstance()` method. */
	export interface GoogleCloudServicebrokerV1beta1__CreateServiceInstanceResponseFormProperties {

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * If broker executes operation asynchronously, this is the operation ID that
		 * can be polled to check the completion status of said operation.
		 * This broker always will return a non-empty operation on success.
		 */
		operation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__CreateServiceInstanceResponseFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__CreateServiceInstanceResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message containing information required to activate Dashboard SSO feature. */
	export interface GoogleCloudServicebrokerV1beta1__DashboardClient {

		/** The id of the Oauth client that the dashboard will use. */
		id?: string | null;

		/**
		 * A URI for the service dashboard.
		 * Validated by the OAuth token server when the dashboard requests a token.
		 */
		redirect_uri?: string | null;

		/** A secret for the dashboard client. */
		secret?: string | null;
	}

	/** Message containing information required to activate Dashboard SSO feature. */
	export interface GoogleCloudServicebrokerV1beta1__DashboardClientFormProperties {

		/** The id of the Oauth client that the dashboard will use. */
		id: FormControl<string | null | undefined>,

		/**
		 * A URI for the service dashboard.
		 * Validated by the OAuth token server when the dashboard requests a token.
		 */
		redirect_uri: FormControl<string | null | undefined>,

		/** A secret for the dashboard client. */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__DashboardClientFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__DashboardClientFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			redirect_uri: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `DeleteBinding()` method. */
	export interface GoogleCloudServicebrokerV1beta1__DeleteBindingResponse {

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description?: string | null;

		/**
		 * If broker executes operation asynchronously, this is the operation ID that
		 * can be polled to check the completion status of said operation.
		 */
		operation?: string | null;
	}

	/** Response for the `DeleteBinding()` method. */
	export interface GoogleCloudServicebrokerV1beta1__DeleteBindingResponseFormProperties {

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * If broker executes operation asynchronously, this is the operation ID that
		 * can be polled to check the completion status of said operation.
		 */
		operation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__DeleteBindingResponseFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__DeleteBindingResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `DeleteServiceInstance()` method. */
	export interface GoogleCloudServicebrokerV1beta1__DeleteServiceInstanceResponse {

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description?: string | null;

		/**
		 * If broker executes operation asynchronously, this is the operation ID that
		 * can be polled to check the completion status of said operation.
		 */
		operation?: string | null;
	}

	/** Response for the `DeleteServiceInstance()` method. */
	export interface GoogleCloudServicebrokerV1beta1__DeleteServiceInstanceResponseFormProperties {

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * If broker executes operation asynchronously, this is the operation ID that
		 * can be polled to check the completion status of said operation.
		 */
		operation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__DeleteServiceInstanceResponseFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__DeleteServiceInstanceResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `GetBinding()` method. */
	export interface GoogleCloudServicebrokerV1beta1__GetBindingResponse {

		/** Credentials to use the binding. */
		credentials?: {[id: string]: any };

		/**
		 * String containing the Deployment Manager deployment name that was created
		 * for this binding,
		 */
		deploymentName?: string | null;

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description?: string | null;

		/**
		 * Output only. The resource name of the binding, e.g.
		 * projects/project_id/brokers/broker_id/service_instances/instance_id/bindings/binding_id.
		 */
		resourceName?: string | null;

		/**
		 * A URL to which the platform may proxy requests for the address sent with
		 * bind_resource.route
		 */
		route_service_url?: string | null;

		/** From where to read system logs. */
		syslog_drain_url?: string | null;

		/** An array of configurations for mounting volumes. */
		volume_mounts?: Array<string>;
	}

	/** Response for the `GetBinding()` method. */
	export interface GoogleCloudServicebrokerV1beta1__GetBindingResponseFormProperties {

		/** Credentials to use the binding. */
		credentials: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * String containing the Deployment Manager deployment name that was created
		 * for this binding,
		 */
		deploymentName: FormControl<string | null | undefined>,

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Output only. The resource name of the binding, e.g.
		 * projects/project_id/brokers/broker_id/service_instances/instance_id/bindings/binding_id.
		 */
		resourceName: FormControl<string | null | undefined>,

		/**
		 * A URL to which the platform may proxy requests for the address sent with
		 * bind_resource.route
		 */
		route_service_url: FormControl<string | null | undefined>,

		/** From where to read system logs. */
		syslog_drain_url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__GetBindingResponseFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__GetBindingResponseFormProperties>({
			credentials: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			deploymentName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			route_service_url: new FormControl<string | null | undefined>(undefined),
			syslog_drain_url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for the `ListBindings()` method. */
	export interface GoogleCloudServicebrokerV1beta1__ListBindingsResponse {

		/** The list of bindings in the instance. */
		bindings?: Array<GoogleCloudServicebrokerV1beta1__Binding>;

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description?: string | null;

		/**
		 * This token allows you to get the next page of results for list requests.
		 * If the number of results is larger than `pageSize`, use the `nextPageToken`
		 * as a value for the query parameter `pageToken` in the next list request.
		 * Subsequent list requests will have their own `nextPageToken` to continue
		 * paging through the results
		 */
		nextPageToken?: string | null;
	}

	/** The response for the `ListBindings()` method. */
	export interface GoogleCloudServicebrokerV1beta1__ListBindingsResponseFormProperties {

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * This token allows you to get the next page of results for list requests.
		 * If the number of results is larger than `pageSize`, use the `nextPageToken`
		 * as a value for the query parameter `pageToken` in the next list request.
		 * Subsequent list requests will have their own `nextPageToken` to continue
		 * paging through the results
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__ListBindingsResponseFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__ListBindingsResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for the `ListBrokers()` method. */
	export interface GoogleCloudServicebrokerV1beta1__ListBrokersResponse {

		/** The list of brokers in the container. */
		brokers?: Array<GoogleCloudServicebrokerV1beta1__Broker>;

		/**
		 * This token allows you to get the next page of results for list requests.
		 * If the number of results is larger than `pageSize`, use the `nextPageToken`
		 * as a value for the query parameter `pageToken` in the next list request.
		 * Subsequent list requests will have their own `nextPageToken` to continue
		 * paging through the results
		 */
		nextPageToken?: string | null;
	}

	/** The response for the `ListBrokers()` method. */
	export interface GoogleCloudServicebrokerV1beta1__ListBrokersResponseFormProperties {

		/**
		 * This token allows you to get the next page of results for list requests.
		 * If the number of results is larger than `pageSize`, use the `nextPageToken`
		 * as a value for the query parameter `pageToken` in the next list request.
		 * Subsequent list requests will have their own `nextPageToken` to continue
		 * paging through the results
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__ListBrokersResponseFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__ListBrokersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the `ListCatalog()` method. */
	export interface GoogleCloudServicebrokerV1beta1__ListCatalogResponse {

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description?: string | null;

		/**
		 * This token allows you to get the next page of results for list requests.
		 * If the number of results is larger than `pageSize`, use the `nextPageToken`
		 * as a value for the query parameter `pageToken` in the next list request.
		 * Subsequent list requests will have their own `nextPageToken` to continue
		 * paging through the results
		 */
		nextPageToken?: string | null;

		/** The services available for the requested GCP project. */
		services?: Array<GoogleCloudServicebrokerV1beta1__Service>;
	}

	/** Response message for the `ListCatalog()` method. */
	export interface GoogleCloudServicebrokerV1beta1__ListCatalogResponseFormProperties {

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * This token allows you to get the next page of results for list requests.
		 * If the number of results is larger than `pageSize`, use the `nextPageToken`
		 * as a value for the query parameter `pageToken` in the next list request.
		 * Subsequent list requests will have their own `nextPageToken` to continue
		 * paging through the results
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__ListCatalogResponseFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__ListCatalogResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The resource model mostly follows the Open Service Broker API, as
	 * described here:
	 * https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
	 * Though due to Google Specifics it has additional optional fields.
	 */
	export interface GoogleCloudServicebrokerV1beta1__Service {

		/**
		 * Specifies whether instances of the service can be bound to applications.
		 * Required.
		 */
		bindable?: boolean | null;

		/** Whether the service provides an endpoint to get service bindings. */
		binding_retrievable?: boolean | null;

		/** Whether the service provides an endpoint to get service bindings. */
		bindings_retrievable?: boolean | null;

		/** Message containing information required to activate Dashboard SSO feature. */
		dashboard_client?: GoogleCloudServicebrokerV1beta1__DashboardClient;

		/** Textual description of the service. Required. */
		description?: string | null;

		/**
		 * ID is a globally unique identifier used to uniquely identify the service.
		 * ID is an opaque string.
		 */
		id?: string | null;

		/** Whether the service provides an endpoint to get service instances. */
		instances_retrievable?: boolean | null;

		/**
		 * A list of metadata for a service offering.
		 * Metadata is an arbitrary JSON object.
		 */
		metadata?: {[id: string]: any };

		/**
		 * User friendly service name.
		 * Name must match [a-z0-9]+ regexp.
		 * The name must be globally unique within GCP project.
		 * Note, which is different from ("This must be globally unique within a
		 * platform marketplace").
		 * Required.
		 */
		name?: string | null;

		/** Whether the service supports upgrade/downgrade for some plans. */
		plan_updateable?: boolean | null;

		/**
		 * A list of plans for this service.
		 * At least one plan is required.
		 */
		plans?: Array<GoogleCloudServicebrokerV1beta1__Plan>;

		/**
		 * Tags provide a flexible mechanism to expose a classification, attribute, or
		 * base technology of a service.
		 */
		tags?: Array<string>;
	}

	/**
	 * The resource model mostly follows the Open Service Broker API, as
	 * described here:
	 * https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
	 * Though due to Google Specifics it has additional optional fields.
	 */
	export interface GoogleCloudServicebrokerV1beta1__ServiceFormProperties {

		/**
		 * Specifies whether instances of the service can be bound to applications.
		 * Required.
		 */
		bindable: FormControl<boolean | null | undefined>,

		/** Whether the service provides an endpoint to get service bindings. */
		binding_retrievable: FormControl<boolean | null | undefined>,

		/** Whether the service provides an endpoint to get service bindings. */
		bindings_retrievable: FormControl<boolean | null | undefined>,

		/** Textual description of the service. Required. */
		description: FormControl<string | null | undefined>,

		/**
		 * ID is a globally unique identifier used to uniquely identify the service.
		 * ID is an opaque string.
		 */
		id: FormControl<string | null | undefined>,

		/** Whether the service provides an endpoint to get service instances. */
		instances_retrievable: FormControl<boolean | null | undefined>,

		/**
		 * A list of metadata for a service offering.
		 * Metadata is an arbitrary JSON object.
		 */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * User friendly service name.
		 * Name must match [a-z0-9]+ regexp.
		 * The name must be globally unique within GCP project.
		 * Note, which is different from ("This must be globally unique within a
		 * platform marketplace").
		 * Required.
		 */
		name: FormControl<string | null | undefined>,

		/** Whether the service supports upgrade/downgrade for some plans. */
		plan_updateable: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__ServiceFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__ServiceFormProperties>({
			bindable: new FormControl<boolean | null | undefined>(undefined),
			binding_retrievable: new FormControl<boolean | null | undefined>(undefined),
			bindings_retrievable: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			instances_retrievable: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			plan_updateable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Plan message describes a Service Plan. */
	export interface GoogleCloudServicebrokerV1beta1__Plan {

		/**
		 * Specifies whether instances of the service can be bound to applications.
		 * If not specified, `Service.bindable` will be presumed.
		 */
		bindable?: boolean | null;

		/** Textual description of the plan. Optional. */
		description?: string | null;

		/** Whether the service is free. */
		free?: boolean | null;

		/**
		 * ID is a globally unique identifier used to uniquely identify the plan.
		 * User must make no presumption about the format of this field.
		 */
		id?: string | null;

		/**
		 * A list of metadata for a service offering.
		 * Metadata is an arbitrary JSON object.
		 */
		metadata?: {[id: string]: any };

		/**
		 * User friendly name of the plan.
		 * The name must be globally unique within GCP project.
		 * Note, which is different from ("This must be globally unique within a
		 * platform marketplace").
		 */
		name?: string | null;

		/** Schema definitions for service instances and bindings for the plan. */
		schemas?: {[id: string]: any };
	}

	/** Plan message describes a Service Plan. */
	export interface GoogleCloudServicebrokerV1beta1__PlanFormProperties {

		/**
		 * Specifies whether instances of the service can be bound to applications.
		 * If not specified, `Service.bindable` will be presumed.
		 */
		bindable: FormControl<boolean | null | undefined>,

		/** Textual description of the plan. Optional. */
		description: FormControl<string | null | undefined>,

		/** Whether the service is free. */
		free: FormControl<boolean | null | undefined>,

		/**
		 * ID is a globally unique identifier used to uniquely identify the plan.
		 * User must make no presumption about the format of this field.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * A list of metadata for a service offering.
		 * Metadata is an arbitrary JSON object.
		 */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * User friendly name of the plan.
		 * The name must be globally unique within GCP project.
		 * Note, which is different from ("This must be globally unique within a
		 * platform marketplace").
		 */
		name: FormControl<string | null | undefined>,

		/** Schema definitions for service instances and bindings for the plan. */
		schemas: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__PlanFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__PlanFormProperties>({
			bindable: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			free: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			schemas: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The response for the `ListServiceInstances()` method. */
	export interface GoogleCloudServicebrokerV1beta1__ListServiceInstancesResponse {

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description?: string | null;

		/** The list of instances in the broker. */
		instances?: Array<GoogleCloudServicebrokerV1beta1__ServiceInstance>;

		/**
		 * This token allows you to get the next page of results for list requests.
		 * If the number of results is larger than `pageSize`, use the `nextPageToken`
		 * as a value for the query parameter `pageToken` in the next list request.
		 * Subsequent list requests will have their own `nextPageToken` to continue
		 * paging through the results
		 */
		nextPageToken?: string | null;
	}

	/** The response for the `ListServiceInstances()` method. */
	export interface GoogleCloudServicebrokerV1beta1__ListServiceInstancesResponseFormProperties {

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * This token allows you to get the next page of results for list requests.
		 * If the number of results is larger than `pageSize`, use the `nextPageToken`
		 * as a value for the query parameter `pageToken` in the next list request.
		 * Subsequent list requests will have their own `nextPageToken` to continue
		 * paging through the results
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__ListServiceInstancesResponseFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__ListServiceInstancesResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message describing inputs to Provision and Update Service instance requests. */
	export interface GoogleCloudServicebrokerV1beta1__ServiceInstance {

		/**
		 * Platform specific contextual information under which the service instance
		 * is to be provisioned. This replaces organization_guid and space_guid.
		 * But can also contain anything.
		 * Currently only used for logging context information.
		 */
		context?: {[id: string]: any };

		/** Output only. Timestamp for when the instance was created. */
		createTime?: string | null;

		/**
		 * Output only. String containing the Deployment Manager deployment name that was created
		 * for this instance,
		 */
		deploymentName?: string | null;

		/**
		 * To return errors when GetInstance call is done via HTTP to be unified with
		 * other methods.
		 */
		description?: string | null;

		/**
		 * The id of the service instance. Must be unique within GCP project.
		 * Maximum length is 64, GUID recommended.
		 * Required.
		 */
		instance_id?: string | null;

		/**
		 * The platform GUID for the organization under which the service is to be
		 * provisioned.
		 * Required.
		 */
		organization_guid?: string | null;

		/**
		 * Configuration options for the service instance.
		 * Parameters is JSON object serialized to string.
		 */
		parameters?: {[id: string]: any };

		/**
		 * The ID of the plan. See `Service` and `Plan` resources for details.
		 * Maximum length is 64, GUID recommended.
		 * Required.
		 */
		plan_id?: string | null;

		/**
		 * Used only in UpdateServiceInstance request to optionally specify previous
		 * fields.
		 */
		previous_values?: {[id: string]: any };

		/**
		 * Output only. The resource name of the instance, e.g.
		 * projects/project_id/brokers/broker_id/service_instances/instance_id
		 */
		resourceName?: string | null;

		/**
		 * The id of the service. Must be a valid identifier of a service
		 * contained in the list from a `ListServices()` call.
		 * Maximum length is 64, GUID recommended.
		 * Required.
		 */
		service_id?: string | null;

		/**
		 * The identifier for the project space within the platform organization.
		 * Required.
		 */
		space_guid?: string | null;
	}

	/** Message describing inputs to Provision and Update Service instance requests. */
	export interface GoogleCloudServicebrokerV1beta1__ServiceInstanceFormProperties {

		/**
		 * Platform specific contextual information under which the service instance
		 * is to be provisioned. This replaces organization_guid and space_guid.
		 * But can also contain anything.
		 * Currently only used for logging context information.
		 */
		context: FormControl<{[id: string]: any } | null | undefined>,

		/** Output only. Timestamp for when the instance was created. */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Output only. String containing the Deployment Manager deployment name that was created
		 * for this instance,
		 */
		deploymentName: FormControl<string | null | undefined>,

		/**
		 * To return errors when GetInstance call is done via HTTP to be unified with
		 * other methods.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The id of the service instance. Must be unique within GCP project.
		 * Maximum length is 64, GUID recommended.
		 * Required.
		 */
		instance_id: FormControl<string | null | undefined>,

		/**
		 * The platform GUID for the organization under which the service is to be
		 * provisioned.
		 * Required.
		 */
		organization_guid: FormControl<string | null | undefined>,

		/**
		 * Configuration options for the service instance.
		 * Parameters is JSON object serialized to string.
		 */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The ID of the plan. See `Service` and `Plan` resources for details.
		 * Maximum length is 64, GUID recommended.
		 * Required.
		 */
		plan_id: FormControl<string | null | undefined>,

		/**
		 * Used only in UpdateServiceInstance request to optionally specify previous
		 * fields.
		 */
		previous_values: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Output only. The resource name of the instance, e.g.
		 * projects/project_id/brokers/broker_id/service_instances/instance_id
		 */
		resourceName: FormControl<string | null | undefined>,

		/**
		 * The id of the service. Must be a valid identifier of a service
		 * contained in the list from a `ListServices()` call.
		 * Maximum length is 64, GUID recommended.
		 * Required.
		 */
		service_id: FormControl<string | null | undefined>,

		/**
		 * The identifier for the project space within the platform organization.
		 * Required.
		 */
		space_guid: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__ServiceInstanceFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__ServiceInstanceFormProperties>({
			context: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deploymentName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			instance_id: new FormControl<string | null | undefined>(undefined),
			organization_guid: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			plan_id: new FormControl<string | null | undefined>(undefined),
			previous_values: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			service_id: new FormControl<string | null | undefined>(undefined),
			space_guid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a long running operation, which conforms to OpenService API. */
	export interface GoogleCloudServicebrokerV1beta1__Operation {

		/** Optional description of the Operation state. */
		description?: string | null;

		/**
		 * The state of the operation.
		 * Valid values are: "in progress", "succeeded", and "failed".
		 */
		state?: string | null;
	}

	/** Describes a long running operation, which conforms to OpenService API. */
	export interface GoogleCloudServicebrokerV1beta1__OperationFormProperties {

		/** Optional description of the Operation state. */
		description: FormControl<string | null | undefined>,

		/**
		 * The state of the operation.
		 * Valid values are: "in progress", "succeeded", and "failed".
		 */
		state: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__OperationFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__OperationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `UpdateServiceInstance()` method. */
	export interface GoogleCloudServicebrokerV1beta1__UpdateServiceInstanceResponse {

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description?: string | null;

		/**
		 * If broker executes operation asynchronously, this is the operation ID that
		 * can be polled to check the completion status of said operation.
		 */
		operation?: string | null;
	}

	/** Response for the `UpdateServiceInstance()` method. */
	export interface GoogleCloudServicebrokerV1beta1__UpdateServiceInstanceResponseFormProperties {

		/**
		 * Used to communicate description of the response. Usually for non-standard
		 * error codes.
		 * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * If broker executes operation asynchronously, this is the operation ID that
		 * can be polled to check the completion status of said operation.
		 */
		operation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudServicebrokerV1beta1__UpdateServiceInstanceResponseFormGroup() {
		return new FormGroup<GoogleCloudServicebrokerV1beta1__UpdateServiceInstanceResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Associates `members` with a `role`. */
	export interface GoogleIamV1__Binding {

		/**
		 * Represents an expression text. Example:
		 * title: "User account presence"
		 * description: "Determines whether the request has a user account"
		 * expression: "size(request.user) > 0"
		 */
		condition?: GoogleType__Expr;

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
		 * * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
		 */
		members?: Array<string>;

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role?: string | null;
	}

	/** Associates `members` with a `role`. */
	export interface GoogleIamV1__BindingFormProperties {

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1__BindingFormGroup() {
		return new FormGroup<GoogleIamV1__BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents an expression text. Example:
	 *     title: "User account presence"
	 *     description: "Determines whether the request has a user account"
	 *     expression: "size(request.user) > 0"
	 */
	export interface GoogleType__Expr {

		/**
		 * An optional description of the expression. This is a longer text which
		 * describes the expression, e.g. when hovered over it in a UI.
		 */
		description?: string | null;

		/**
		 * Textual representation of an expression in
		 * Common Expression Language syntax.
		 * The application context of the containing message determines which
		 * well-known feature set of CEL is supported.
		 */
		expression?: string | null;

		/**
		 * An optional string indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location?: string | null;

		/**
		 * An optional title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
		title?: string | null;
	}

	/**
	 * Represents an expression text. Example:
	 *     title: "User account presence"
	 *     description: "Determines whether the request has a user account"
	 *     expression: "size(request.user) > 0"
	 */
	export interface GoogleType__ExprFormProperties {

		/**
		 * An optional description of the expression. This is a longer text which
		 * describes the expression, e.g. when hovered over it in a UI.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Textual representation of an expression in
		 * Common Expression Language syntax.
		 * The application context of the containing message determines which
		 * well-known feature set of CEL is supported.
		 */
		expression: FormControl<string | null | undefined>,

		/**
		 * An optional string indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * An optional title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleType__ExprFormGroup() {
		return new FormGroup<GoogleType__ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface GoogleIamV1__Policy {

		/**
		 * Associates a list of `members` to a `role`. Optionally, may specify a
		 * `condition` that determines how and when the `bindings` are applied. Each
		 * of the `bindings` must contain at least one member.
		 */
		bindings?: Array<GoogleIamV1__Binding>;

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
	export interface GoogleIamV1__PolicyFormProperties {

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
		etag: FormControl<string | null | undefined>,

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
		version: FormControl<number | null | undefined>,
	}
	export function CreateGoogleIamV1__PolicyFormGroup() {
		return new FormGroup<GoogleIamV1__PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface GoogleIamV1__SetIamPolicyRequest {

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
		policy?: GoogleIamV1__Policy;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface GoogleIamV1__SetIamPolicyRequestFormProperties {
	}
	export function CreateGoogleIamV1__SetIamPolicyRequestFormGroup() {
		return new FormGroup<GoogleIamV1__SetIamPolicyRequestFormProperties>({
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface GoogleIamV1__TestIamPermissionsRequest {

		/**
		 * The set of permissions to check for the `resource`. Permissions with
		 * wildcards (such as '*' or 'storage.*') are not allowed. For more
		 * information see
		 * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
		 */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface GoogleIamV1__TestIamPermissionsRequestFormProperties {
	}
	export function CreateGoogleIamV1__TestIamPermissionsRequestFormGroup() {
		return new FormGroup<GoogleIamV1__TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface GoogleIamV1__TestIamPermissionsResponse {

		/**
		 * A subset of `TestPermissionsRequest.permissions` that the caller is
		 * allowed.
		 */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface GoogleIamV1__TestIamPermissionsResponseFormProperties {
	}
	export function CreateGoogleIamV1__TestIamPermissionsResponseFormGroup() {
		return new FormGroup<GoogleIamV1__TestIamPermissionsResponseFormProperties>({
		});

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
	export interface GoogleProtobuf__Empty {
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
	export interface GoogleProtobuf__EmptyFormProperties {
	}
	export function CreateGoogleProtobuf__EmptyFormGroup() {
		return new FormGroup<GoogleProtobuf__EmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Unbinds from a service instance.
		 * For synchronous/asynchronous request details see CreateServiceInstance
		 * method.
		 * If binding does not exist HTTP 410 status will be returned.
		 * Delete v1beta1/{name}
		 * @param {string} name Name must match
		 * `projects/[PROJECT_ID]/brokers/[BROKER_ID]/`
		 * `v2/service_instances/[INSTANCE_ID]/service_bindings/[BINDING_ID]`
		 * or
		 * `projects/[PROJECT_ID]/brokers/[BROKER_ID]/`
		 * `/instances/[INSTANCE_ID]/bindings/[BINDING_ID]`.
		 * @param {boolean} acceptsIncomplete See CreateServiceInstanceRequest for details.
		 * @param {string} planId The plan id of the service instance.
		 * @param {string} serviceId Additional query parameter hints.
		 * The service id of the service instance.
		 * @return {void} Successful response
		 */
		Servicebroker_projects_brokers_v2_service_instances_service_bindings_delete(name: string, acceptsIncomplete: boolean | null | undefined, planId: string | null | undefined, serviceId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&acceptsIncomplete=' + acceptsIncomplete + '&planId=' + (planId == null ? '' : encodeURIComponent(planId)) + '&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * GetBinding returns the binding information.
		 * Get v1beta1/{name}
		 * @param {string} name Name must match
		 * `projects/[PROJECT_ID]/brokers/[BROKER_ID]/v2/service_instances/[INSTANCE_ID]/service_bindings`.
		 * @param {string} planId Plan id.
		 * @param {string} serviceId Service id.
		 * @return {void} Successful response
		 */
		Servicebroker_projects_brokers_v2_service_instances_service_bindings_get(name: string, planId: string | null | undefined, serviceId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&planId=' + (planId == null ? '' : encodeURIComponent(planId)) + '&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing service instance.
		 * See CreateServiceInstance for possible response codes.
		 * Patch v1beta1/{name}
		 * @param {string} name Name must match
		 * `projects/[PROJECT_ID]/brokers/[BROKER_ID]/v2/service_instances/[INSTANCE_ID]`.
		 * @param {boolean} acceptsIncomplete See CreateServiceInstanceRequest for details.
		 * @return {void} Successful response
		 */
		Servicebroker_projects_brokers_v2_service_instances_patch(name: string, acceptsIncomplete: boolean | null | undefined, requestBody: GoogleCloudServicebrokerV1beta1__ServiceInstance): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&acceptsIncomplete=' + acceptsIncomplete, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the state of the last operation for the binding.
		 * Only last (or current) operation can be polled.
		 * Get v1beta1/{name}/last_operation
		 * @param {string} name Name must match
		 * `projects/[PROJECT_ID]/brokers/[BROKER_ID]/v2/service_instances/[INSTANCE_ID]/service_binding/[BINDING_ID]`.
		 * @param {string} operation If `operation` was returned during mutation operation, this field must be
		 * populated with the provided value.
		 * @param {string} planId Plan id.
		 * @param {string} serviceId Service id.
		 * @return {void} Successful response
		 */
		Servicebroker_projects_brokers_v2_service_instances_service_bindings_getLast_operation(name: string, operation: string | null | undefined, planId: string | null | undefined, serviceId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/last_operation&operation=' + (operation == null ? '' : encodeURIComponent(operation)) + '&planId=' + (planId == null ? '' : encodeURIComponent(planId)) + '&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the bindings in the instance.
		 * Get v1beta1/{parent}/bindings
		 * @param {string} parent Parent must match
		 * `projects/[PROJECT_ID]/brokers/[BROKER_ID]/` +
		 * `v2/service_instances/[INSTANCE_ID]`
		 * or
		 * `projects/[PROJECT_ID]/brokers/[BROKER_ID]/instances/[INSTANCE_ID]`.
		 * @param {number} pageSize Specifies the number of results to return per page. If there are fewer
		 * elements than the specified number, returns all elements.
		 * Optional. Acceptable values are 0 to 200, inclusive. (Default: 100)
		 * @param {string} pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken`
		 * returned by a previous list request to get the next page of results.
		 * @return {void} Successful response
		 */
		Servicebroker_projects_brokers_instances_bindings_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bindings&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * ListBrokers lists brokers.
		 * Get v1beta1/{parent}/brokers
		 * @param {string} parent Parent must match `projects/[PROJECT_ID]/brokers`.
		 * @param {number} pageSize Specifies the number of results to return per page. If there are fewer
		 * elements than the specified number, returns all elements.
		 * Optional. Acceptable values are 0 to 200, inclusive. (Default: 100)
		 * @param {string} pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken`
		 * returned by a previous list request to get the next page of results.
		 * @return {void} Successful response
		 */
		Servicebroker_projects_brokers_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/brokers&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * CreateBroker creates a Broker.
		 * Post v1beta1/{parent}/brokers
		 * @param {string} parent The project in which to create broker.
		 * @return {void} Successful response
		 */
		Servicebroker_projects_brokers_create(parent: string, requestBody: GoogleCloudServicebrokerV1beta1__Broker): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/brokers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the instances in the brokers
		 * This API is an extension and not part of the OSB spec.
		 * Hence the path is a standard Google API URL.
		 * Get v1beta1/{parent}/instances
		 * @param {string} parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
		 * @param {number} pageSize Specifies the number of results to return per page. If there are fewer
		 * elements than the specified number, returns all elements.
		 * Optional. Acceptable values are 0 to 200, inclusive. (Default: 100)
		 * @param {string} pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken`
		 * returned by a previous list request to get the next page of results.
		 * @return {void} Successful response
		 */
		Servicebroker_projects_brokers_instances_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * CreateBinding generates a service binding to an existing service instance.
		 * See ProviServiceInstance for async operation details.
		 * Put v1beta1/{parent}/service_bindings/{binding_id}
		 * @param {string} parent The GCP container.
		 * Must match
		 * `projects/[PROJECT_ID]/brokers/[BROKER_ID]/v2/service_instances/[INSTANCE_ID]`.
		 * @param {string} binding_id The id of the binding. Must be unique within GCP project.
		 * Maximum length is 64, GUID recommended.
		 * Required.
		 * @param {boolean} acceptsIncomplete See CreateServiceInstanceRequest for details.
		 * @return {void} Successful response
		 */
		Servicebroker_projects_brokers_v2_service_instances_service_bindings_create(parent: string, binding_id: string, acceptsIncomplete: boolean | null | undefined, requestBody: GoogleCloudServicebrokerV1beta1__Binding): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/service_bindings/' + (binding_id == null ? '' : encodeURIComponent(binding_id)) + '&acceptsIncomplete=' + acceptsIncomplete, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the Services registered with this broker for consumption for
		 * given service registry broker, which contains an set of services.
		 * Note, that Service producer API is separate from Broker API.
		 * Get v1beta1/{parent}/v2/catalog
		 * @param {string} parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
		 * @param {number} pageSize Specifies the number of results to return per page. If there are fewer
		 * elements than the specified number, returns all elements.
		 * Optional. If unset or 0, all the results will be returned.
		 * @param {string} pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken`
		 * returned by a previous list request to get the next page of results.
		 * @return {void} Successful response
		 */
		Servicebroker_projects_brokers_v2_catalog_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/v2/catalog&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Provisions a service instance.
		 * If `request.accepts_incomplete` is false and Broker cannot execute request
		 * synchronously HTTP 422 error will be returned along with
		 * FAILED_PRECONDITION status.
		 * If `request.accepts_incomplete` is true and the Broker decides to execute
		 * resource asynchronously then HTTP 202 response code will be returned and a
		 * valid polling operation in the response will be included.
		 * If Broker executes the request synchronously and it succeeds HTTP 201
		 * response will be furnished.
		 * If identical instance exists, then HTTP 200 response will be returned.
		 * If an instance with identical ID but mismatching parameters exists, then
		 * HTTP 409 status code will be returned.
		 * Put v1beta1/{parent}/v2/service_instances/{instance_id}
		 * @param {string} parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
		 * @param {string} instance_id The id of the service instance. Must be unique within GCP project.
		 * Maximum length is 64, GUID recommended.
		 * Required.
		 * @param {boolean} acceptsIncomplete Value indicating that API client supports asynchronous operations. If
		 * Broker cannot execute the request synchronously HTTP 422 code will be
		 * returned to HTTP clients along with FAILED_PRECONDITION error.
		 * If true and broker will execute request asynchronously 202 HTTP code will
		 * be returned.
		 * This broker always requires this to be true as all mutator operations are
		 * asynchronous.
		 * @return {void} Successful response
		 */
		Servicebroker_projects_brokers_v2_service_instances_create(parent: string, instance_id: string, acceptsIncomplete: boolean | null | undefined, requestBody: GoogleCloudServicebrokerV1beta1__ServiceInstance): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/v2/service_instances/' + (instance_id == null ? '' : encodeURIComponent(instance_id)) + '&acceptsIncomplete=' + acceptsIncomplete, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		Servicebroker_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<HttpResponse<string>> {
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
		Servicebroker_setIamPolicy(resource: string, requestBody: GoogleIamV1__SetIamPolicyRequest): Observable<HttpResponse<string>> {
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
		Servicebroker_testIamPermissions(resource: string, requestBody: GoogleIamV1__TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

