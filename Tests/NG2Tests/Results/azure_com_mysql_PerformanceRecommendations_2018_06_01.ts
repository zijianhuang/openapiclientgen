import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Advisor {
	}
	export interface AdvisorFormProperties {
	}
	export function CreateAdvisorFormGroup() {
		return new FormGroup<AdvisorFormProperties>({
		});

	}


	/** The properties of a recommendation action advisor. */
	export interface AdvisorProperties {
	}

	/** The properties of a recommendation action advisor. */
	export interface AdvisorPropertiesFormProperties {
	}
	export function CreateAdvisorPropertiesFormGroup() {
		return new FormGroup<AdvisorPropertiesFormProperties>({
		});

	}


	/** A list of query statistics. */
	export interface AdvisorsResultList {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** The list of recommendation action advisors. */
		value?: Array<Advisor>;
	}

	/** A list of query statistics. */
	export interface AdvisorsResultListFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAdvisorsResultListFormGroup() {
		return new FormGroup<AdvisorsResultListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RecommendationAction {
	}
	export interface RecommendationActionFormProperties {
	}
	export function CreateRecommendationActionFormGroup() {
		return new FormGroup<RecommendationActionFormProperties>({
		});

	}


	/** The properties of a recommendation action. */
	export interface RecommendationActionProperties {

		/** Recommendation action identifier. */
		actionId?: number | null;

		/** Advisor name. */
		advisorName?: string | null;

		/** Recommendation action creation time. */
		createdTime?: Date | null;

		/** Recommendation action details. */
		details?: {[id: string]: string };

		/** Recommendation action expiration time. */
		expirationTime?: Date | null;

		/** Recommendation action reason. */
		reason?: string | null;

		/** Recommendation action type. */
		recommendationType?: string | null;

		/** Recommendation action session identifier. */
		sessionId?: string | null;
	}

	/** The properties of a recommendation action. */
	export interface RecommendationActionPropertiesFormProperties {

		/** Recommendation action identifier. */
		actionId: FormControl<number | null | undefined>,

		/** Advisor name. */
		advisorName: FormControl<string | null | undefined>,

		/** Recommendation action creation time. */
		createdTime: FormControl<Date | null | undefined>,

		/** Recommendation action details. */
		details: FormControl<{[id: string]: string } | null | undefined>,

		/** Recommendation action expiration time. */
		expirationTime: FormControl<Date | null | undefined>,

		/** Recommendation action reason. */
		reason: FormControl<string | null | undefined>,

		/** Recommendation action type. */
		recommendationType: FormControl<string | null | undefined>,

		/** Recommendation action session identifier. */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationActionPropertiesFormGroup() {
		return new FormGroup<RecommendationActionPropertiesFormProperties>({
			actionId: new FormControl<number | null | undefined>(undefined),
			advisorName: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			details: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			recommendationType: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of recommendation actions. */
	export interface RecommendationActionsResultList {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** The list of recommendation action advisors. */
		value?: Array<RecommendationAction>;
	}

	/** A list of recommendation actions. */
	export interface RecommendationActionsResultListFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationActionsResultListFormGroup() {
		return new FormGroup<RecommendationActionsResultListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Recommendation action session operation status. */
	export interface RecommendedActionSessionsOperationStatus {

		/** Operation identifier. */
		name?: string | null;

		/** Operation start time. */
		startTime?: Date | null;

		/** Operation status. */
		status?: string | null;
	}

	/** Recommendation action session operation status. */
	export interface RecommendedActionSessionsOperationStatusFormProperties {

		/** Operation identifier. */
		name: FormControl<string | null | undefined>,

		/** Operation start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Operation status. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateRecommendedActionSessionsOperationStatusFormGroup() {
		return new FormGroup<RecommendedActionSessionsOperationStatusFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Recommendation action session operation status.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/recommendedActionSessionsAzureAsyncOperation/{operationId}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} locationName The name of the location.
		 * @param {string} operationId The operation identifier.
		 * @return {RecommendedActionSessionsOperationStatus} OK.
		 */
		LocationBasedRecommendedActionSessionsOperationStatus_Get(api_version: string, subscriptionId: string, locationName: string, operationId: string): Observable<RecommendedActionSessionsOperationStatus> {
			return this.http.get<RecommendedActionSessionsOperationStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DBforMySQL/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/recommendedActionSessionsAzureAsyncOperation/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Recommendation action session operation result.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/recommendedActionSessionsOperationResults/{operationId}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} locationName The name of the location.
		 * @param {string} operationId The operation identifier.
		 * @return {RecommendationActionsResultList} Created
		 */
		LocationBasedRecommendedActionSessionsResult_List(api_version: string, subscriptionId: string, locationName: string, operationId: string): Observable<RecommendationActionsResultList> {
			return this.http.get<RecommendationActionsResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DBforMySQL/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/recommendedActionSessionsOperationResults/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List recommendation action advisors.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/advisors
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @return {AdvisorsResultList} OK
		 */
		Advisors_ListByServer(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string): Observable<AdvisorsResultList> {
			return this.http.get<AdvisorsResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/advisors?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a recommendation action advisor.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/advisors/{advisorName}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @param {string} advisorName The advisor name for recommendation action.
		 * @return {Advisor} OK
		 */
		Advisors_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, advisorName: string): Observable<Advisor> {
			return this.http.get<Advisor>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/advisors/' + (advisorName == null ? '' : encodeURIComponent(advisorName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create recommendation action session for the advisor.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/advisors/{advisorName}/createRecommendedActionSession
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @param {string} advisorName The advisor name for recommendation action.
		 * @param {string} databaseName The name of the database.
		 * @return {void} OK
		 */
		CreateRecommendedActionSession(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, advisorName: string, databaseName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/advisors/' + (advisorName == null ? '' : encodeURIComponent(advisorName)) + '/createRecommendedActionSession?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&databaseName=' + (databaseName == null ? '' : encodeURIComponent(databaseName)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve recommended actions from the advisor.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/advisors/{advisorName}/recommendedActions
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @param {string} advisorName The advisor name for recommendation action.
		 * @param {string} sessionId The recommendation action session identifier.
		 * @return {RecommendationActionsResultList} OK
		 */
		RecommendedActions_ListByServer(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, advisorName: string, sessionId: string | null | undefined): Observable<RecommendationActionsResultList> {
			return this.http.get<RecommendationActionsResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/advisors/' + (advisorName == null ? '' : encodeURIComponent(advisorName)) + '/recommendedActions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&sessionId=' + (sessionId == null ? '' : encodeURIComponent(sessionId)), {});
		}

		/**
		 * Retrieve recommended actions from the advisor.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/advisors/{advisorName}/recommendedActions/{recommendedActionName}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @param {string} advisorName The advisor name for recommendation action.
		 * @param {string} recommendedActionName The recommended action name.
		 * @return {RecommendationAction} OK
		 */
		RecommendedActions_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, advisorName: string, recommendedActionName: string): Observable<RecommendationAction> {
			return this.http.get<RecommendationAction>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/advisors/' + (advisorName == null ? '' : encodeURIComponent(advisorName)) + '/recommendedActions/' + (recommendedActionName == null ? '' : encodeURIComponent(recommendedActionName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

