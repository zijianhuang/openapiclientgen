import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Return all layers
		 * Get layers
		 * @return {void} No response was specified
		 */
		GET_layers___format_(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'layers', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create new layer
		 * Post layers
		 * @return {void} No response was specified
		 */
		POST_layers___format_(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'layers', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return single layer
		 * Get layers/{layer}
		 * @return {void} No response was specified
		 */
		GET_layers__layer___format_(layer: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a layer
		 * Delete layers/{layer}
		 * @return {void} No response was specified
		 */
		DELETE_layers__layer___format_(layer: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Edit a layer
		 * Patch layers/{layer}
		 * @return {void} No response was specified
		 */
		PATCH_layers__layer___format_(layer: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return JSON-LD context of single layer
		 * Get layers/{layer}/context
		 * @return {void} No response was specified
		 */
		GET_layers__layer_context___format_(layer: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)) + '/context', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Overwrite JSON-LD context of single layer
		 * Put layers/{layer}/context
		 * @return {void} No response was specified
		 */
		PUT_layers__layer_context___format_(layer: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)) + '/context', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return all fields of single layer
		 * Get layers/{layer}/fields
		 * @return {void} No response was specified
		 */
		GET_layers__layer_fields___format_(layer: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)) + '/fields', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create new field for single layer
		 * Post layers/{layer}/fields
		 * @return {void} No response was specified
		 */
		POST_layers__layer_fields___format_(layer: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)) + '/fields', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return single field of single layer
		 * Get layers/{layer}/fields/{field}
		 * @return {void} No response was specified
		 */
		GET_layers__layer_fields__field___format_(layer: string, field: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)) + '/fields/' + (field == null ? '' : encodeURIComponent(field)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Overwrite single field on single layer
		 * Put layers/{layer}/fields/{field}
		 * @return {void} No response was specified
		 */
		PUT_layers__layer_fields__field___format_(layer: string, field: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)) + '/fields/' + (field == null ? '' : encodeURIComponent(field)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a single field on single layer
		 * Delete layers/{layer}/fields/{field}
		 * @return {void} No response was specified
		 */
		DELETE_layers__layer_fields__field___format_(layer: string, field: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)) + '/fields/' + (field == null ? '' : encodeURIComponent(field)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Edit single field on single layer
		 * Patch layers/{layer}/fields/{field}
		 * @return {void} No response was specified
		 */
		PATCH_layers__layer_fields__field___format_(layer: string, field: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)) + '/fields/' + (field == null ? '' : encodeURIComponent(field)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return all objects with data on single layer
		 * Get layers/{layer}/objects
		 * @return {void} No response was specified
		 */
		GET_layers__layer_objects___format_(layer: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)) + '/objects', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create one or more objects with data on single layer, or add data to existing objects (or a combination thereof)
		 * Post layers/{layer}/objects
		 * @return {void} No response was specified
		 */
		POST_layers__layer_objects___format_(layer: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)) + '/objects', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete all objects from a single layer
		 * Delete layers/{layer}/objects
		 * @return {void} No response was specified
		 */
		DELETE_layers__layer_objects___format_(layer: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)) + '/objects', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Edit one or more objects and data on single layer
		 * Patch layers/{layer}/objects
		 * @return {void} No response was specified
		 */
		PATCH_layers__layer_objects___format_(layer: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)) + '/objects', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return metadata of single layer about single object, e.g. the date the data was added/modified, etc.
		 * Get layers/{layer}/objects/{cdk_id}
		 * @return {void} No response was specified
		 */
		GET_layers__layer_objects__cdk_id___format_(layer: string, cdk_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)) + '/objects/' + (cdk_id == null ? '' : encodeURIComponent(cdk_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return all owners associated with single layer
		 * Get layers/{layer}/owners
		 * @return {void} No response was specified
		 */
		GET_layers__layer_owners___format_(layer: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'layers/' + (layer == null ? '' : encodeURIComponent(layer)) + '/owners', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return single context entity
		 * Get ngsi10/contextEntities/{entity}
		 * @return {void} No response was specified
		 */
		GET_ngsi10_contextEntities__entity___format_(entity: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ngsi10/contextEntities/' + (entity == null ? '' : encodeURIComponent(entity)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update attributes for single context entity
		 * Put ngsi10/contextEntities/{entity}/attributes
		 * @return {void} No response was specified
		 */
		PUT_ngsi10_contextEntities__entity_attributes___format_(entity: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'ngsi10/contextEntities/' + (entity == null ? '' : encodeURIComponent(entity)) + '/attributes', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return single context entity attribute
		 * Get ngsi10/contextEntities/{entity}/attributes/{attribute}
		 * @return {void} No response was specified
		 */
		GET_ngsi10_contextEntities__entity_attributes__attribute___format_(entity: string, attribute: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ngsi10/contextEntities/' + (entity == null ? '' : encodeURIComponent(entity)) + '/attributes/' + (attribute == null ? '' : encodeURIComponent(attribute)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return objects of particular type
		 * Get ngsi10/contextEntityTypes/{cetype}
		 * @return {void} No response was specified
		 */
		GET_ngsi10_contextEntityTypes__cetype___format_(cetype: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ngsi10/contextEntityTypes/' + (cetype == null ? '' : encodeURIComponent(cetype)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return objects of particular type
		 * Get ngsi10/contextEntityTypes/{cetype}/attributes/{attribute}
		 * @return {void} No response was specified
		 */
		GET_ngsi10_contextEntityTypes__cetype_attributes__attribute___format_(cetype: string, attribute: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ngsi10/contextEntityTypes/' + (cetype == null ? '' : encodeURIComponent(cetype)) + '/attributes/' + (attribute == null ? '' : encodeURIComponent(attribute)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Query context broker for contextElements
		 * Post ngsi10/queryContext
		 * @return {void} No response was specified
		 */
		POST_ngsi10_queryContext___format_(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ngsi10/queryContext', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new context subscription
		 * Post ngsi10/subscribeContext
		 * @return {void} No response was specified
		 */
		POST_ngsi10_subscribeContext___format_(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ngsi10/subscribeContext', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a context subscription
		 * Post ngsi10/unsubscribeContext
		 * @return {void} No response was specified
		 */
		POST_ngsi10_unsubscribeContext___format_(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ngsi10/unsubscribeContext', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add or update NGSI contextElements
		 * Post ngsi10/updateContext
		 * @return {void} No response was specified
		 */
		POST_ngsi10_updateContext___format_(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ngsi10/updateContext', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update/edit a context subscription
		 * Post ngsi10/updateContextSubscription
		 * @return {void} No response was specified
		 */
		POST_ngsi10_updateContextSubscription___format_(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ngsi10/updateContextSubscription', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return all objects
		 * Get objects
		 * @return {void} No response was specified
		 */
		GET_objects___format_(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'objects', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a single object
		 * Get objects/{cdk_id}
		 * @return {void} No response was specified
		 */
		GET_objects__cdk_id___format_(cdk_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'objects/' + (cdk_id == null ? '' : encodeURIComponent(cdk_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a single object
		 * Delete objects/{cdk_id}
		 * @return {void} No response was specified
		 */
		DELETE_objects__cdk_id___format_(cdk_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'objects/' + (cdk_id == null ? '' : encodeURIComponent(cdk_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Edit a single object
		 * Patch objects/{cdk_id}
		 * @return {void} No response was specified
		 */
		PATCH_objects__cdk_id___format_(cdk_id: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'objects/' + (cdk_id == null ? '' : encodeURIComponent(cdk_id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all layers that contain data of single object
		 * Get objects/{cdk_id}/layers
		 * @return {void} No response was specified
		 */
		GET_objects__cdk_id_layers___format_(cdk_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'objects/' + (cdk_id == null ? '' : encodeURIComponent(cdk_id)) + '/layers', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return all data on single layer of single object
		 * Get objects/{cdk_id}/layers/{layer}
		 * @return {void} No response was specified
		 */
		GET_objects__cdk_id_layers__layer___format_(cdk_id: string, layer: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'objects/' + (cdk_id == null ? '' : encodeURIComponent(cdk_id)) + '/layers/' + (layer == null ? '' : encodeURIComponent(layer)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Overwrite data on layer to single object
		 * Put objects/{cdk_id}/layers/{layer}
		 * @return {void} No response was specified
		 */
		PUT_objects__cdk_id_layers__layer___format_(cdk_id: string, layer: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'objects/' + (cdk_id == null ? '' : encodeURIComponent(cdk_id)) + '/layers/' + (layer == null ? '' : encodeURIComponent(layer)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add data on layer to single object
		 * Post objects/{cdk_id}/layers/{layer}
		 * @return {void} No response was specified
		 */
		POST_objects__cdk_id_layers__layer___format_(cdk_id: string, layer: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'objects/' + (cdk_id == null ? '' : encodeURIComponent(cdk_id)) + '/layers/' + (layer == null ? '' : encodeURIComponent(layer)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove data on layer from single object
		 * Delete objects/{cdk_id}/layers/{layer}
		 * @return {void} No response was specified
		 */
		DELETE_objects__cdk_id_layers__layer___format_(cdk_id: string, layer: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'objects/' + (cdk_id == null ? '' : encodeURIComponent(cdk_id)) + '/layers/' + (layer == null ? '' : encodeURIComponent(layer)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update data on layer to single object
		 * Patch objects/{cdk_id}/layers/{layer}
		 * @return {void} No response was specified
		 */
		PATCH_objects__cdk_id_layers__layer___format_(cdk_id: string, layer: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'objects/' + (cdk_id == null ? '' : encodeURIComponent(cdk_id)) + '/layers/' + (layer == null ? '' : encodeURIComponent(layer)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return all owners
		 * Get owners
		 * @return {void} No response was specified
		 */
		GET_owners___format_(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'owners', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create new owner
		 * Post owners
		 * @return {void} No response was specified
		 */
		POST_owners___format_(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'owners', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a single owner
		 * Get owners/{owner}
		 * @return {void} No response was specified
		 */
		GET_owners__owner___format_(owner: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'owners/' + (owner == null ? '' : encodeURIComponent(owner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete owner - and all layers and data belonging to this owner
		 * Delete owners/{owner}
		 * @return {void} No response was specified
		 */
		DELETE_owners__owner___format_(owner: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'owners/' + (owner == null ? '' : encodeURIComponent(owner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Edit an owner
		 * Patch owners/{owner}
		 * @return {void} No response was specified
		 */
		PATCH_owners__owner___format_(owner: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'owners/' + (owner == null ? '' : encodeURIComponent(owner)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return all layers belonging to a single owner
		 * Get owners/{owner}/layers
		 * @return {void} No response was specified
		 */
		GET_owners__owner_layers___format_(owner: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'owners/' + (owner == null ? '' : encodeURIComponent(owner)) + '/layers', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a session key
		 * Get session
		 * @param {string} name Login name.
		 * @param {string} password Login password.
		 * @return {void} No response was specified
		 */
		GET_session___format_(name: string, password: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'session?name=' + (name == null ? '' : encodeURIComponent(name)) + '&password=' + (password == null ? '' : encodeURIComponent(password)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Close session
		 * Delete session
		 * @return {void} No response was specified
		 */
		DELETE_session___format_(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'session', { observe: 'response', responseType: 'text' });
		}
	}

}

