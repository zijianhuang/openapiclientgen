import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Annotation associated with an application insights resource. */
	export interface Annotation {

		/** Name of annotation */
		AnnotationName?: string | null;

		/** Category of annotation, free form */
		Category?: string | null;

		/** Time when event occurred */
		EventTime?: Date | null;

		/** Unique Id for annotation */
		Id?: string | null;

		/** Serialized JSON object for detailed properties */
		Properties?: string | null;

		/** Related parent annotation if any */
		RelatedAnnotation?: string | null;
	}

	/** Annotation associated with an application insights resource. */
	export interface AnnotationFormProperties {

		/** Name of annotation */
		AnnotationName: FormControl<string | null | undefined>,

		/** Category of annotation, free form */
		Category: FormControl<string | null | undefined>,

		/** Time when event occurred */
		EventTime: FormControl<Date | null | undefined>,

		/** Unique Id for annotation */
		Id: FormControl<string | null | undefined>,

		/** Serialized JSON object for detailed properties */
		Properties: FormControl<string | null | undefined>,

		/** Related parent annotation if any */
		RelatedAnnotation: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationFormGroup() {
		return new FormGroup<AnnotationFormProperties>({
			AnnotationName: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			EventTime: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Properties: new FormControl<string | null | undefined>(undefined),
			RelatedAnnotation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error associated with trying to create annotation with Id that already exist */
	export interface AnnotationError {

		/** Error detail code and explanation */
		code?: string | null;

		/** Inner error */
		innererror?: InnerError;

		/** Error message */
		message?: string | null;
	}

	/** Error associated with trying to create annotation with Id that already exist */
	export interface AnnotationErrorFormProperties {

		/** Error detail code and explanation */
		code: FormControl<string | null | undefined>,

		/** Error message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationErrorFormGroup() {
		return new FormGroup<AnnotationErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Inner error */
	export interface InnerError {

		/** Provides correlation for request */
		diagnosticcontext?: string | null;

		/** Request time */
		time?: Date | null;
	}

	/** Inner error */
	export interface InnerErrorFormProperties {

		/** Provides correlation for request */
		diagnosticcontext: FormControl<string | null | undefined>,

		/** Request time */
		time: FormControl<Date | null | undefined>,
	}
	export function CreateInnerErrorFormGroup() {
		return new FormGroup<InnerErrorFormProperties>({
			diagnosticcontext: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Annotations list result. */
	export interface AnnotationsListResult {

		/** An array of annotations. */
		value?: Array<Annotation>;
	}

	/** Annotations list result. */
	export interface AnnotationsListResultFormProperties {
	}
	export function CreateAnnotationsListResultFormGroup() {
		return new FormGroup<AnnotationsListResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the list of annotations for a component for given time range
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/Annotations
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceName The name of the Application Insights component resource.
		 * @param {string} start The start time to query from for annotations, cannot be older than 90 days from current date.
		 * @param {string} end The end time to query for annotations.
		 * @return {AnnotationsListResult} successful operation
		 */
		Annotations_List(resourceGroupName: string, api_version: string, subscriptionId: string, resourceName: string, start: string, end: string): Observable<AnnotationsListResult> {
			return this.http.get<AnnotationsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/components/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/Annotations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&start=' + (start == null ? '' : encodeURIComponent(start)) + '&end=' + (end == null ? '' : encodeURIComponent(end)), {});
		}

		/**
		 * Create an Annotation of an Application Insights component.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/Annotations
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceName The name of the Application Insights component resource.
		 * @param {Annotation} requestBody Properties that need to be specified to create an annotation of a Application Insights component.
		 * @return {Array<Annotation>} An object containing the annotation definition created by this PUT call.
		 */
		Annotations_Create(resourceGroupName: string, api_version: string, subscriptionId: string, resourceName: string, requestBody: Annotation): Observable<Array<Annotation>> {
			return this.http.put<Array<Annotation>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/components/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/Annotations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the annotation for given id.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/Annotations/{annotationId}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceName The name of the Application Insights component resource.
		 * @param {string} annotationId The unique annotation ID. This is unique within a Application Insights component.
		 * @return {Array<Annotation>} The Annotation object for this id.
		 */
		Annotations_Get(resourceGroupName: string, api_version: string, subscriptionId: string, resourceName: string, annotationId: string): Observable<Array<Annotation>> {
			return this.http.get<Array<Annotation>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/components/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/Annotations/' + (annotationId == null ? '' : encodeURIComponent(annotationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Delete an Annotation of an Application Insights component.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/Annotations/{annotationId}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceName The name of the Application Insights component resource.
		 * @param {string} annotationId The unique annotation ID. This is unique within a Application Insights component.
		 * @return {void} The annotation that was successfully deleted.
		 */
		Annotations_Delete(resourceGroupName: string, api_version: string, subscriptionId: string, resourceName: string, annotationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/components/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/Annotations/' + (annotationId == null ? '' : encodeURIComponent(annotationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

