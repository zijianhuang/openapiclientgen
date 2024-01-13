import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The base sub-resource model definition. */
	export interface SubResource {

		/** Resource Id */
		id?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource type */
		type?: string | null;
	}

	/** The base sub-resource model definition. */
	export interface SubResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceFormGroup() {
		return new FormGroup<SubResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A transformation object, containing all information associated with the named transformation. All transformations are contained under a streaming job. */
	export interface Transformation extends SubResource {

		/** The properties that are associated with a transformation. */
		properties?: TransformationProperties;
	}

	/** A transformation object, containing all information associated with the named transformation. All transformations are contained under a streaming job. */
	export interface TransformationFormProperties extends SubResourceFormProperties {
	}
	export function CreateTransformationFormGroup() {
		return new FormGroup<TransformationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with a transformation. */
	export interface TransformationProperties {

		/** The current entity tag for the transformation. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. */
		etag?: string | null;

		/** Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here: https://msdn.microsoft.com/library/azure/dn834998 . Required on PUT (CreateOrReplace) requests. */
		query?: string | null;

		/** Specifies the number of streaming units that the streaming job uses. */
		streamingUnits?: number | null;
	}

	/** The properties that are associated with a transformation. */
	export interface TransformationPropertiesFormProperties {

		/** The current entity tag for the transformation. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here: https://msdn.microsoft.com/library/azure/dn834998 . Required on PUT (CreateOrReplace) requests. */
		query: FormControl<string | null | undefined>,

		/** Specifies the number of streaming units that the streaming job uses. */
		streamingUnits: FormControl<number | null | undefined>,
	}
	export function CreateTransformationPropertiesFormGroup() {
		return new FormGroup<TransformationPropertiesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			streamingUnits: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets details about the specified transformation.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} transformationName The name of the transformation.
		 * @return {Transformation} Successfully retrieved the specified transformation.
		 */
		Transformations_Get(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, transformationName: string): Observable<Transformation> {
			return this.http.get<Transformation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/transformations/' + (transformationName == null ? '' : encodeURIComponent(transformationName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a transformation or replaces an already existing transformation under an existing streaming job.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} transformationName The name of the transformation.
		 * @param {Transformation} requestBody The definition of the transformation that will be used to create a new transformation or replace the existing one under the streaming job.
		 * @return {Transformation} The transformation was successfully created or replaced.
		 */
		Transformations_CreateOrReplace(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, transformationName: string, requestBody: Transformation): Observable<Transformation> {
			return this.http.put<Transformation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/transformations/' + (transformationName == null ? '' : encodeURIComponent(transformationName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing transformation under an existing streaming job. This can be used to partially update (ie. update one or two properties) a transformation without affecting the rest the job or transformation definition.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} transformationName The name of the transformation.
		 * @param {Transformation} requestBody A Transformation object. The properties specified here will overwrite the corresponding properties in the existing transformation (ie. Those properties will be updated). Any properties that are set to null here will mean that the corresponding property in the existing transformation will remain the same and not change as a result of this PATCH operation.
		 * @return {Transformation} The transformation was successfully updated.
		 */
		Transformations_Update(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, transformationName: string, requestBody: Transformation): Observable<Transformation> {
			return this.http.patch<Transformation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/transformations/' + (transformationName == null ? '' : encodeURIComponent(transformationName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

