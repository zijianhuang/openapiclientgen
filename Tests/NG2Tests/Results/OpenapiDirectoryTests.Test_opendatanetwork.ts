import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Data_Availability {
	}

	export interface Data_Constraints {
	}

	export interface Data_Values {
	}

	export interface Entity_Lookup {
	}

	export interface Entity_Relationships {
	}

	export interface Map_Creation {
	}

	export interface Search_Datasets {
	}

	export interface Search_Questions {
	}

	export interface Suggestions {
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Find all available data for some entities
		 * Get data/v1/availability/
		 * @param {string} entity_id Comma separated list of entity IDs.
		 * @param {string} app_token The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be
		 * used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).
		 * @return {void} OK
		 */
		DataV1AvailabilityGetByEntity_idAndApp_token(entity_id: string, app_token: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'data/v1/availability/?entity_id=' + (entity_id == null ? '' : encodeURIComponent(entity_id)) + '&app_token=' + (app_token == null ? '' : encodeURIComponent(app_token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get constraint permutations for entities
		 * Get data/v1/constraint/{variable}
		 * @param {string} variable Full ID of the variable to retrieve.
		 * @param {string} entity_id Comma separated list of entity IDs.
		 * @param {string} constraint Constraint to use.
		 * @param {string} app_token The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be
		 * used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).
		 * @return {void} OK
		 */
		DataV1Constraint_variableGetByEntity_idAndConstraintAndApp_token(variable: string, entity_id: string, constraint: string, app_token: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'data/v1/constraint/' + (variable == null ? '' : encodeURIComponent(variable)) + '&entity_id=' + (entity_id == null ? '' : encodeURIComponent(entity_id)) + '&constraint=' + (constraint == null ? '' : encodeURIComponent(constraint)) + '&app_token=' + (app_token == null ? '' : encodeURIComponent(app_token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a map
		 * Get data/v1/map/new
		 * @param {string} variable A single variable ID.
		 * @param {string} entity_id A comma separated list of entity IDs.
		 * Entities must have the same type and represent geographical regions.
		 * @param {string} constraint Values must be specified for each constraint in the dataset.
		 * For example, to generate map data for `demographics.population.count`,
		 * you must specify a value for `year` by passing `year=2013`.
		 * @param {string} app_token The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be
		 * used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).
		 * @return {void} OK
		 */
		DataV1MapNewGetByVariableAndEntity_idAndConstraintAndApp_token(variable: string, entity_id: string, constraint: string, app_token: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'data/v1/map/new?variable=' + (variable == null ? '' : encodeURIComponent(variable)) + '&entity_id=' + (entity_id == null ? '' : encodeURIComponent(entity_id)) + '&constraint=' + (constraint == null ? '' : encodeURIComponent(constraint)) + '&app_token=' + (app_token == null ? '' : encodeURIComponent(app_token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get values for variables
		 * Get data/v1/values
		 * @param {string} variable Comma separated list of variable IDs.
		 * Defaults to retrieving all variables.
		 * It is also possible to pass in a topic such as
		 * `demographics`, or a dataset such as `demographics.population`,
		 * which would both be equivalent to specifying
		 * `demographics.population.count` and `demographics.population.change`.
		 * Note that only variables in the same dataset are allowed.
		 * @param {string} entity_id Comma separated list of entity IDs.
		 * Defaults to retrieving all entities.
		 * Note that since there is currently no results pagination,
		 * retrieving values for all entities may produce incomplete results.
		 * @param {number} forecast Number of steps to forecast.
		 * Must be an integer between 0 and 20.
		 * Forecasts are produced using linear extrapolation
		 * on the data. They are only available when retrieving
		 * data for a single variable across many numerical
		 * constraint options.
		 * + Default `0`
		 * @param {boolean} describe Whether or not to produce a description of the data.
		 * Set to `true` to produce a description.
		 * Descriptions are not available if no entities are specified.
		 * + Default `false`
		 * @param {DataV1ValuesGetByVariableAndEntity_idAndForecastAndDescribeAndFormatAndApp_tokenFormat} format If format is set to `google`, the data frame will be formatted
		 * as a [Google Visualizations data table](https://developers.google.com/chart/interactive/docs/reference#datatable-class).
		 * If the format is not provided or invalid, then the frame
		 * will be formatted normally.
		 * @param {string} app_token The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be
		 * used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).
		 * @return {void} OK
		 */
		DataV1ValuesGetByVariableAndEntity_idAndForecastAndDescribeAndFormatAndApp_token(variable: string, entity_id: string, forecast: number, describe: boolean, format: DataV1ValuesGetByVariableAndEntity_idAndForecastAndDescribeAndFormatAndApp_tokenFormat, app_token: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'data/v1/values?variable=' + (variable == null ? '' : encodeURIComponent(variable)) + '&entity_id=' + (entity_id == null ? '' : encodeURIComponent(entity_id)) + '&forecast=' + forecast + '&describe=' + describe + '&format=' + format + '&app_token=' + (app_token == null ? '' : encodeURIComponent(app_token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Entities
		 * Get entity/v1
		 * @param {string} entity_id ID of the entity.
		 * @param {string} entity_name Name of the entity.
		 * @param {string} entity_type Type of the entity.
		 * @param {string} app_token The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be
		 * used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).
		 * @return {void} OK
		 */
		EntityV1GetByEntity_idAndEntity_nameAndEntity_typeAndApp_token(entity_id: string, entity_name: string, entity_type: string, app_token: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'entity/v1?entity_id=' + (entity_id == null ? '' : encodeURIComponent(entity_id)) + '&entity_name=' + (entity_name == null ? '' : encodeURIComponent(entity_name)) + '&entity_type=' + (entity_type == null ? '' : encodeURIComponent(entity_type)) + '&app_token=' + (app_token == null ? '' : encodeURIComponent(app_token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find the relatives of an entity
		 * Get entity/v1/{relation}
		 * @param {EntityV1_relationGetByEntity_idAndVariable_idAndLimitAndApp_tokenRelation} relation The type of relation to find.
		 * @param {string} entity_id ID of the target entity.
		 * @param {string} variable_id If this parameter is included, only entities with data for the given
		 * variable will be returned. Note that this may cause the number of
		 * entities returned to be less than the specified `limit`.
		 * @param {number} limit Maximum number of entities in each group.
		 * Must be an integer from 1 to 1000.
		 * @param {string} app_token The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be
		 * used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).
		 * @return {void} OK
		 */
		EntityV1_relationGetByEntity_idAndVariable_idAndLimitAndApp_token(relation: EntityV1_relationGetByEntity_idAndVariable_idAndLimitAndApp_tokenRelation, entity_id: string, variable_id: string, limit: number, app_token: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'entity/v1/' + relation + '?entity_id=' + (entity_id == null ? '' : encodeURIComponent(entity_id)) + '&variable_id=' + (variable_id == null ? '' : encodeURIComponent(variable_id)) + '&limit=' + limit + '&app_token=' + (app_token == null ? '' : encodeURIComponent(app_token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get datasets
		 * Get search/v1/dataset
		 * @param {string} entity_id Entities to use in formulating the query.
		 * @param {string} dataset_id If included, the search terms of the dataset
		 * will be used in the query.
		 * @param {number} limit Maximum number of results to return.
		 * Must be an integer from 0 to 50000.
		 * @param {number} offset Number of results to skip.
		 * Used for pagination.
		 * @param {string} app_token The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be
		 * used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).
		 * @return {void} OK
		 */
		SearchV1DatasetGetByEntity_idAndDataset_idAndLimitAndOffsetAndApp_token(entity_id: string, dataset_id: string, limit: number, offset: number, app_token: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/v1/dataset?entity_id=' + (entity_id == null ? '' : encodeURIComponent(entity_id)) + '&dataset_id=' + (dataset_id == null ? '' : encodeURIComponent(dataset_id)) + '&limit=' + limit + '&offset=' + offset + '&app_token=' + (app_token == null ? '' : encodeURIComponent(app_token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get questions
		 * Get search/v1/question
		 * @param {string} query String to search against.
		 * @param {number} limit Maximum number of results to return.
		 * Must be an integer from 0 to 50000.
		 * @param {number} offset Number of results to skip.
		 * Used for pagination.
		 * @param {string} app_token The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be
		 * used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).
		 * @return {void} OK
		 */
		SearchV1QuestionGetByQueryAndLimitAndOffsetAndApp_token(query: string, limit: number, offset: number, app_token: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/v1/question?query=' + (query == null ? '' : encodeURIComponent(query)) + '&limit=' + limit + '&offset=' + offset + '&app_token=' + (app_token == null ? '' : encodeURIComponent(app_token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get suggestions
		 * Get suggest/v1/{type}
		 * @param {SuggestV1_typeGetByQueryAndLimitAndVariable_idAndApp_tokenType} type Type of the object to find.
		 * @param {string} query Query to match.
		 * @param {number} limit Maximum number of results to return.
		 * Must be an integer from 0 to 100.
		 * @param {string} variable_id This parameter is only available when suggesting entities with `type=entity`.
		 * If it is provided, suggestions will be filtered to include
		 * only entities that have data for the given variable.
		 * If the variable provided is invalid, no entities will be returned.
		 * Note that this filtering will increase response time significantly,
		 * so it should only be used when necessary.
		 * @param {string} app_token The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be
		 * used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).
		 * @return {void} OK
		 */
		SuggestV1_typeGetByQueryAndLimitAndVariable_idAndApp_token(type: SuggestV1_typeGetByQueryAndLimitAndVariable_idAndApp_tokenType, query: string, limit: number, variable_id: string, app_token: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'suggest/v1/' + type + '?query=' + (query == null ? '' : encodeURIComponent(query)) + '&limit=' + limit + '&variable_id=' + (variable_id == null ? '' : encodeURIComponent(variable_id)) + '&app_token=' + (app_token == null ? '' : encodeURIComponent(app_token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum DataV1ValuesGetByVariableAndEntity_idAndForecastAndDescribeAndFormatAndApp_tokenFormat { google = 0 }

	export enum EntityV1_relationGetByEntity_idAndVariable_idAndLimitAndApp_tokenRelation { parent = 0, child = 1, sibling = 2, peer = 3 }

	export enum SuggestV1_typeGetByQueryAndLimitAndVariable_idAndApp_tokenType { entity = 0, category = 1, publisher = 2, dataset = 3, question = 4 }

}

