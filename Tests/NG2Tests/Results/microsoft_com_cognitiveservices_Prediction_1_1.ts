import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** result of an image prediction request */
	export interface ImagePredictionResultModel {
		Created?: Date | null;
		Id?: string | null;
		Iteration?: string | null;
		Predictions?: Array<ImageTagPredictionModel>;
		Project?: string | null;
	}

	/** result of an image prediction request */
	export interface ImagePredictionResultModelFormProperties {
		Created: FormControl<Date | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Iteration: FormControl<string | null | undefined>,
		Project: FormControl<string | null | undefined>,
	}
	export function CreateImagePredictionResultModelFormGroup() {
		return new FormGroup<ImagePredictionResultModelFormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Iteration: new FormControl<string | null | undefined>(undefined),
			Project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageTagPredictionModel {

		/** Type: float */
		Probability?: number | null;
		Tag?: string | null;
		TagId?: string | null;
	}
	export interface ImageTagPredictionModelFormProperties {

		/** Type: float */
		Probability: FormControl<number | null | undefined>,
		Tag: FormControl<string | null | undefined>,
		TagId: FormControl<string | null | undefined>,
	}
	export function CreateImageTagPredictionModelFormGroup() {
		return new FormGroup<ImageTagPredictionModelFormProperties>({
			Probability: new FormControl<number | null | undefined>(undefined),
			Tag: new FormControl<string | null | undefined>(undefined),
			TagId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageUrl {
		Url?: string | null;
	}
	export interface ImageUrlFormProperties {
		Url: FormControl<string | null | undefined>,
	}
	export function CreateImageUrlFormGroup() {
		return new FormGroup<ImageUrlFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Predict an image url and saves the result
		 * Post {projectId}/url
		 * @param {string} projectId The project id
		 * @param {string} iterationId Optional. Specifies the id of a particular iteration to evaluate against.
		 *             The default iteration for the project will be used when not specified
		 * @param {string} application Optional. Specifies the name of application using the endpoint
		 * @param {ImageUrl} requestBody An {Iris.Web.Api.Models.ImageUrl} that contains the url of the image to be evaluated
		 * @return {ImagePredictionResultModel} OK
		 */
		PredictImageUrl(projectId: string, iterationId: string | null | undefined, application: string | null | undefined, requestBody: ImageUrl): Observable<ImagePredictionResultModel> {
			return this.http.post<ImagePredictionResultModel>(this.baseUri + (projectId == null ? '' : encodeURIComponent(projectId)) + '/url&iterationId=' + (iterationId == null ? '' : encodeURIComponent(iterationId)) + '&application=' + (application == null ? '' : encodeURIComponent(application)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Predict an image url without saving the result
		 * Post {projectId}/url/nostore
		 * @param {string} projectId The project id
		 * @param {string} iterationId Optional. Specifies the id of a particular iteration to evaluate against.
		 *             The default iteration for the project will be used when not specified
		 * @param {string} application Optional. Specifies the name of application using the endpoint
		 * @param {ImageUrl} requestBody An {Iris.Web.Api.Models.ImageUrl} that contains the url of the image to be evaluated
		 * @return {ImagePredictionResultModel} OK
		 */
		PredictImageUrlWithNoStore(projectId: string, iterationId: string | null | undefined, application: string | null | undefined, requestBody: ImageUrl): Observable<ImagePredictionResultModel> {
			return this.http.post<ImagePredictionResultModel>(this.baseUri + (projectId == null ? '' : encodeURIComponent(projectId)) + '/url/nostore&iterationId=' + (iterationId == null ? '' : encodeURIComponent(iterationId)) + '&application=' + (application == null ? '' : encodeURIComponent(application)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

