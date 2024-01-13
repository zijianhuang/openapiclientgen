import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes the format of Error response. */
	export interface ErrorResponse {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Describes the format of Error response. */
	export interface ErrorResponseFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metric namespace class specifies the metadata for a metric namespace. */
	export interface MetricNamespace {

		/** The ID of the metricNamespace. */
		id?: string | null;

		/** The name of the namespace. */
		name?: string | null;

		/** The fully qualified metric namespace name. */
		properties?: MetricNamespaceName;

		/** The type of the namespace. */
		type?: string | null;
	}

	/** Metric namespace class specifies the metadata for a metric namespace. */
	export interface MetricNamespaceFormProperties {

		/** The ID of the metricNamespace. */
		id: FormControl<string | null | undefined>,

		/** The name of the namespace. */
		name: FormControl<string | null | undefined>,

		/** The type of the namespace. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMetricNamespaceFormGroup() {
		return new FormGroup<MetricNamespaceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents collection of metric namespaces. */
	export interface MetricNamespaceCollection {

		/**
		 * The values for the metric namespaces.
		 * Required
		 */
		value: Array<MetricNamespace>;
	}

	/** Represents collection of metric namespaces. */
	export interface MetricNamespaceCollectionFormProperties {
	}
	export function CreateMetricNamespaceCollectionFormGroup() {
		return new FormGroup<MetricNamespaceCollectionFormProperties>({
		});

	}


	/** The fully qualified metric namespace name. */
	export interface MetricNamespaceName {

		/** The metric namespace name. */
		metricNamespaceName?: string | null;
	}

	/** The fully qualified metric namespace name. */
	export interface MetricNamespaceNameFormProperties {

		/** The metric namespace name. */
		metricNamespaceName: FormControl<string | null | undefined>,
	}
	export function CreateMetricNamespaceNameFormGroup() {
		return new FormGroup<MetricNamespaceNameFormProperties>({
			metricNamespaceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the metric namespaces for the resource.
		 * Get {resourceUri}/providers/microsoft.insights/metricNamespaces
		 * @param {string} resourceUri The identifier of the resource.
		 * @param {string} api_version Client Api Version.
		 * @param {string} startTime The ISO 8601 conform Date start time from which to query for metric namespaces.
		 * @return {MetricNamespaceCollection} Successful request to get the list of metric namespaces
		 */
		MetricNamespaces_List(resourceUri: string, api_version: string, startTime: string | null | undefined): Observable<MetricNamespaceCollection> {
			return this.http.get<MetricNamespaceCollection>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/microsoft.insights/metricNamespaces&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)) + '', {});
		}
	}

}

