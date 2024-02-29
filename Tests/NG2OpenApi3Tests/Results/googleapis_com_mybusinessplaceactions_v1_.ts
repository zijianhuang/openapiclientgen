import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Response message for PlaceActions.ListPlaceActionLinks. */
	export interface ListPlaceActionLinksResponse {

		/** If there are more place action links than the requested page size, then this field is populated with a token to fetch the next page of results. */
		nextPageToken?: string | null;

		/** The returned list of place action links. */
		placeActionLinks?: Array<PlaceActionLink>;
	}

	/** Response message for PlaceActions.ListPlaceActionLinks. */
	export interface ListPlaceActionLinksResponseFormProperties {

		/** If there are more place action links than the requested page size, then this field is populated with a token to fetch the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlaceActionLinksResponseFormGroup() {
		return new FormGroup<ListPlaceActionLinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a place action link and its attributes. */
	export interface PlaceActionLink {

		/** Output only. The time when the place action link was created. */
		createTime?: string | null;

		/** Output only. Indicates whether this link can be edited by the client. */
		isEditable?: boolean | null;

		/** Optional. Whether this link is preferred by the merchant. Only one link can be marked as preferred per place action type at a location. If a future request marks a different link as preferred for the same place action type, then the current preferred link (if any exists) will lose its preference. */
		isPreferred?: boolean | null;

		/** Optional. The resource name, in the format `locations/{location_id}/placeActionLinks/{place_action_link_id}`. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where `place_action_link_id` will be assigned by the server on successful creation of a new link and returned as part of the response. */
		name?: string | null;

		/** Required. The type of place action that can be performed using this link. */
		placeActionType?: PlaceActionLinkPlaceActionType | null;

		/** Output only. Specifies the provider type. */
		providerType?: PlaceActionLinkProviderType | null;

		/** Output only. The time when the place action link was last modified. */
		updateTime?: string | null;

		/** Required. The link uri. The same uri can be reused for different action types across different locations. However, only one place action link is allowed for each unique combination of (uri, place action type, location). */
		uri?: string | null;
	}

	/** Represents a place action link and its attributes. */
	export interface PlaceActionLinkFormProperties {

		/** Output only. The time when the place action link was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Indicates whether this link can be edited by the client. */
		isEditable: FormControl<boolean | null | undefined>,

		/** Optional. Whether this link is preferred by the merchant. Only one link can be marked as preferred per place action type at a location. If a future request marks a different link as preferred for the same place action type, then the current preferred link (if any exists) will lose its preference. */
		isPreferred: FormControl<boolean | null | undefined>,

		/** Optional. The resource name, in the format `locations/{location_id}/placeActionLinks/{place_action_link_id}`. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where `place_action_link_id` will be assigned by the server on successful creation of a new link and returned as part of the response. */
		name: FormControl<string | null | undefined>,

		/** Required. The type of place action that can be performed using this link. */
		placeActionType: FormControl<PlaceActionLinkPlaceActionType | null | undefined>,

		/** Output only. Specifies the provider type. */
		providerType: FormControl<PlaceActionLinkProviderType | null | undefined>,

		/** Output only. The time when the place action link was last modified. */
		updateTime: FormControl<string | null | undefined>,

		/** Required. The link uri. The same uri can be reused for different action types across different locations. However, only one place action link is allowed for each unique combination of (uri, place action type, location). */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePlaceActionLinkFormGroup() {
		return new FormGroup<PlaceActionLinkFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			isEditable: new FormControl<boolean | null | undefined>(undefined),
			isPreferred: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			placeActionType: new FormControl<PlaceActionLinkPlaceActionType | null | undefined>(undefined),
			providerType: new FormControl<PlaceActionLinkProviderType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PlaceActionLinkPlaceActionType { PLACE_ACTION_TYPE_UNSPECIFIED = 'PLACE_ACTION_TYPE_UNSPECIFIED', APPOINTMENT = 'APPOINTMENT', ONLINE_APPOINTMENT = 'ONLINE_APPOINTMENT', DINING_RESERVATION = 'DINING_RESERVATION', FOOD_ORDERING = 'FOOD_ORDERING', FOOD_DELIVERY = 'FOOD_DELIVERY', FOOD_TAKEOUT = 'FOOD_TAKEOUT', SHOP_ONLINE = 'SHOP_ONLINE' }

	export enum PlaceActionLinkProviderType { PROVIDER_TYPE_UNSPECIFIED = 'PROVIDER_TYPE_UNSPECIFIED', MERCHANT = 'MERCHANT', AGGREGATOR_3P = 'AGGREGATOR_3P' }


	/** Response message for PlaceActions.ListPlaceActionTypeMetadata. */
	export interface ListPlaceActionTypeMetadataResponse {

		/** If the number of action types exceeded the requested page size, this field will be populated with a token to fetch the next page on a subsequent call to `placeActionTypeMetadata.list`. If there are no more results, this field will not be present in the response. */
		nextPageToken?: string | null;

		/** A collection of metadata for the available place action types. */
		placeActionTypeMetadata?: Array<PlaceActionTypeMetadata>;
	}

	/** Response message for PlaceActions.ListPlaceActionTypeMetadata. */
	export interface ListPlaceActionTypeMetadataResponseFormProperties {

		/** If the number of action types exceeded the requested page size, this field will be populated with a token to fetch the next page on a subsequent call to `placeActionTypeMetadata.list`. If there are no more results, this field will not be present in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlaceActionTypeMetadataResponseFormGroup() {
		return new FormGroup<ListPlaceActionTypeMetadataResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for supported place action types. */
	export interface PlaceActionTypeMetadata {

		/** The localized display name for the attribute, if available; otherwise, the English display name. */
		displayName?: string | null;

		/** The place action type. */
		placeActionType?: PlaceActionLinkPlaceActionType | null;
	}

	/** Metadata for supported place action types. */
	export interface PlaceActionTypeMetadataFormProperties {

		/** The localized display name for the attribute, if available; otherwise, the English display name. */
		displayName: FormControl<string | null | undefined>,

		/** The place action type. */
		placeActionType: FormControl<PlaceActionLinkPlaceActionType | null | undefined>,
	}
	export function CreatePlaceActionTypeMetadataFormGroup() {
		return new FormGroup<PlaceActionTypeMetadataFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			placeActionType: new FormControl<PlaceActionLinkPlaceActionType | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the list of available place action types for a location or country.
		 * Get v1/placeActionTypeMetadata
		 * @param {string} filter Optional. A filter constraining the place action types to return metadata for. The response includes entries that match the filter. We support only the following filters: 1. location=XYZ where XYZ is a string indicating the resource name of a location, in the format `locations/{location_id}`. 2. region_code=XYZ where XYZ is a Unicode CLDR region code to find available action types. If no filter is provided, all place action types are returned.
		 * @param {string} languageCode Optional. The IETF BCP-47 code of language to get display names in. If this language is not available, they will be provided in English.
		 * @param {number} pageSize Optional. How many action types to include per page. Default is 10, minimum is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If specified, the next page of place action type metadata is retrieved. The `pageToken` is returned when a call to `placeActionTypeMetadata.list` returns more results than can fit into the requested page size.
		 * @return {ListPlaceActionTypeMetadataResponse} Successful response
		 */
		Mybusinessplaceactions_placeActionTypeMetadata_list(filter: string | null | undefined, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPlaceActionTypeMetadataResponse> {
			return this.http.get<ListPlaceActionTypeMetadataResponse>(this.baseUri + 'v1/placeActionTypeMetadata?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deletes a place action link from the specified location.
		 * Delete v1/{name}
		 * @param {string} name Required. The resource name of the place action link to remove from the location.
		 * @return {Empty} Successful response
		 */
		Mybusinessplaceactions_locations_placeActionLinks_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the specified place action link.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the place action link to fetch.
		 * @return {PlaceActionLink} Successful response
		 */
		Mybusinessplaceactions_locations_placeActionLinks_get(name: string): Observable<PlaceActionLink> {
			return this.http.get<PlaceActionLink>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the specified place action link and returns it.
		 * Patch v1/{name}
		 * @param {string} name Optional. The resource name, in the format `locations/{location_id}/placeActionLinks/{place_action_link_id}`. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where `place_action_link_id` will be assigned by the server on successful creation of a new link and returned as part of the response.
		 * @param {string} updateMask Required. The specific fields to update. The only editable fields are `uri`, `place_action_type` and `is_preferred`. If the updated link already exists at the same location with the same `place_action_type` and `uri`, fails with an `ALREADY_EXISTS` error.
		 * @return {PlaceActionLink} Successful response
		 */
		Mybusinessplaceactions_locations_placeActionLinks_patch(name: string, updateMask: string | null | undefined, requestBody: PlaceActionLink): Observable<PlaceActionLink> {
			return this.http.patch<PlaceActionLink>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the place action links for the specified location.
		 * Get v1/{parent}/placeActionLinks
		 * @param {string} parent Required. The name of the location whose place action links will be listed. `locations/{location_id}`.
		 * @param {string} filter Optional. A filter constraining the place action links to return. The response includes entries that match the filter. We support only the following filter: 1. place_action_type=XYZ where XYZ is a valid PlaceActionType.
		 * @param {number} pageSize Optional. How many place action links to return per page. Default of 10. The minimum is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If specified, returns the next page of place action links.
		 * @return {ListPlaceActionLinksResponse} Successful response
		 */
		Mybusinessplaceactions_locations_placeActionLinks_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPlaceActionLinksResponse> {
			return this.http.get<ListPlaceActionLinksResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/placeActionLinks&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.
		 * Post v1/{parent}/placeActionLinks
		 * @param {string} parent Required. The resource name of the location where to create this place action link. `locations/{location_id}`.
		 * @return {PlaceActionLink} Successful response
		 */
		Mybusinessplaceactions_locations_placeActionLinks_create(parent: string, requestBody: PlaceActionLink): Observable<PlaceActionLink> {
			return this.http.post<PlaceActionLink>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/placeActionLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

