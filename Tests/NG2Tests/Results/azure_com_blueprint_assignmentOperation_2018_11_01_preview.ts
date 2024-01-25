import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents individual job in given blueprint assignment operation. */
	export interface AssignmentDeploymentJob {

		/** Name of the action performed in this job. */
		action?: string | null;

		/** Result of this deployment job for each retry. */
		history?: Array<AssignmentDeploymentJobResult>;

		/** Id of this job. */
		jobId?: string | null;

		/** State of this job. */
		jobState?: string | null;

		/** Kind of job. */
		kind?: string | null;

		/** Reference to deployment job resource id. */
		requestUri?: string | null;

		/** Result of each individual deployment in a blueprint assignment. */
		result?: AssignmentDeploymentJobResult;
	}

	/** Represents individual job in given blueprint assignment operation. */
	export interface AssignmentDeploymentJobFormProperties {

		/** Name of the action performed in this job. */
		action: FormControl<string | null | undefined>,

		/** Id of this job. */
		jobId: FormControl<string | null | undefined>,

		/** State of this job. */
		jobState: FormControl<string | null | undefined>,

		/** Kind of job. */
		kind: FormControl<string | null | undefined>,

		/** Reference to deployment job resource id. */
		requestUri: FormControl<string | null | undefined>,
	}
	export function CreateAssignmentDeploymentJobFormGroup() {
		return new FormGroup<AssignmentDeploymentJobFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			jobState: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			requestUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of each individual deployment in a blueprint assignment. */
	export interface AssignmentDeploymentJobResult {

		/** Error code and message */
		error?: AzureResourceManagerError;

		/** Resources created as result of the deployment job. */
		resources?: Array<AssignmentJobCreatedResource>;
	}

	/** Result of each individual deployment in a blueprint assignment. */
	export interface AssignmentDeploymentJobResultFormProperties {
	}
	export function CreateAssignmentDeploymentJobResultFormGroup() {
		return new FormGroup<AssignmentDeploymentJobResultFormProperties>({
		});

	}


	/** Error code and message */
	export interface AzureResourceManagerError {

		/** Error code. */
		code?: string | null;

		/** Error message. */
		message?: string | null;
	}

	/** Error code and message */
	export interface AzureResourceManagerErrorFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateAzureResourceManagerErrorFormGroup() {
		return new FormGroup<AzureResourceManagerErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure resource created from deployment job. */
	export interface AssignmentJobCreatedResource {

		/** Additional properties in a dictionary. */
		properties?: {[id: string]: string };
	}

	/** Azure resource created from deployment job. */
	export interface AssignmentJobCreatedResourceFormProperties {

		/** Additional properties in a dictionary. */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAssignmentJobCreatedResourceFormGroup() {
		return new FormGroup<AssignmentJobCreatedResourceFormProperties>({
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Represents underlying deployment detail for each update to the blueprint assignment. */
	export interface AssignmentOperation {

		/** Properties of AssignmentOperation. */
		properties?: AssignmentOperationProperties;
	}

	/** Represents underlying deployment detail for each update to the blueprint assignment. */
	export interface AssignmentOperationFormProperties {
	}
	export function CreateAssignmentOperationFormGroup() {
		return new FormGroup<AssignmentOperationFormProperties>({
		});

	}


	/** Properties of AssignmentOperation. */
	export interface AssignmentOperationProperties {

		/** State of this blueprint assignment operation. */
		assignmentState?: string | null;

		/** The published version of the blueprint definition used for the blueprint assignment operation. */
		blueprintVersion?: string | null;

		/** List of jobs in this blueprint assignment operation. */
		deployments?: Array<AssignmentDeploymentJob>;

		/** Create time of this blueprint assignment operation. */
		timeCreated?: string | null;

		/** Finish time of the overall underlying deployments. */
		timeFinished?: string | null;

		/** Start time of the underlying deployment. */
		timeStarted?: string | null;
	}

	/** Properties of AssignmentOperation. */
	export interface AssignmentOperationPropertiesFormProperties {

		/** State of this blueprint assignment operation. */
		assignmentState: FormControl<string | null | undefined>,

		/** The published version of the blueprint definition used for the blueprint assignment operation. */
		blueprintVersion: FormControl<string | null | undefined>,

		/** Create time of this blueprint assignment operation. */
		timeCreated: FormControl<string | null | undefined>,

		/** Finish time of the overall underlying deployments. */
		timeFinished: FormControl<string | null | undefined>,

		/** Start time of the underlying deployment. */
		timeStarted: FormControl<string | null | undefined>,
	}
	export function CreateAssignmentOperationPropertiesFormGroup() {
		return new FormGroup<AssignmentOperationPropertiesFormProperties>({
			assignmentState: new FormControl<string | null | undefined>(undefined),
			blueprintVersion: new FormControl<string | null | undefined>(undefined),
			timeCreated: new FormControl<string | null | undefined>(undefined),
			timeFinished: new FormControl<string | null | undefined>(undefined),
			timeStarted: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of AssignmentOperation. */
	export interface AssignmentOperationList {

		/** Link to the next page of results. */
		nextLink?: string | null;

		/** List of AssignmentOperation. */
		value?: Array<AssignmentOperation>;
	}

	/** List of AssignmentOperation. */
	export interface AssignmentOperationListFormProperties {

		/** Link to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAssignmentOperationListFormGroup() {
		return new FormGroup<AssignmentOperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common properties for all Azure resources. */
	export interface AzureResourceBase {

		/** String Id used to locate any resource on Azure. */
		id?: string | null;

		/** Name of this resource. */
		name?: string | null;

		/** Type of this resource. */
		type?: string | null;
	}

	/** Common properties for all Azure resources. */
	export interface AzureResourceBaseFormProperties {

		/** String Id used to locate any resource on Azure. */
		id: FormControl<string | null | undefined>,

		/** Name of this resource. */
		name: FormControl<string | null | undefined>,

		/** Type of this resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureResourceBaseFormGroup() {
		return new FormGroup<AzureResourceBaseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List operations for given blueprint assignment within a subscription.
		 * Get {scope}/providers/Microsoft.Blueprint/blueprintAssignments/{assignmentName}/assignmentOperations
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} assignmentName Name of the blueprint assignment.
		 * @return {AssignmentOperationList} OK -- all blueprint assignment operations retrieved.
		 */
		AssignmentOperations_List(api_version: string, scope: string, assignmentName: string): Observable<AssignmentOperationList> {
			return this.http.get<AssignmentOperationList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprintAssignments/' + (assignmentName == null ? '' : encodeURIComponent(assignmentName)) + '/assignmentOperations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Get a blueprint assignment operation.
		 * Get {scope}/providers/Microsoft.Blueprint/blueprintAssignments/{assignmentName}/assignmentOperations/{assignmentOperationName}
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} assignmentName Name of the blueprint assignment.
		 * @param {string} assignmentOperationName Name of the blueprint assignment operation.
		 * @return {AssignmentOperation} OK -- blueprint assignment operation retrieved.
		 */
		AssignmentOperations_Get(api_version: string, scope: string, assignmentName: string, assignmentOperationName: string): Observable<AssignmentOperation> {
			return this.http.get<AssignmentOperation>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprintAssignments/' + (assignmentName == null ? '' : encodeURIComponent(assignmentName)) + '/assignmentOperations/' + (assignmentOperationName == null ? '' : encodeURIComponent(assignmentOperationName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}
	}

}

