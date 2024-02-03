import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Schema1 {
		location?: string | null;
		manufacturer?: string | null;
		model?: string | null;
		protocol?: string | null;
		public?: boolean | null;
	}
	export interface Schema1FormProperties {
		location: FormControl<string | null | undefined>,
		manufacturer: FormControl<string | null | undefined>,
		model: FormControl<string | null | undefined>,
		protocol: FormControl<string | null | undefined>,
		public: FormControl<boolean | null | undefined>,
	}
	export function CreateSchema1FormGroup() {
		return new FormGroup<Schema1FormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all Chargestations
		 * Get v1/chargestations
		 * @param {string} organization Filter by Org. Id
		 * @param {string} location Filter by Location Id
		 * @param {boolean} online Filter by Online Status
		 * @param {boolean} active Chargestations that have been activated/deactivated by the admin
		 * @param {boolean} _public Chargestations that are public
		 * @param {number} paginate_limit Number of results per page
		 * @param {string} paginate_page The queried page index
		 * @param {boolean} paginate_enabled Enable pagination
		 * @param {string} sort_by Sort data by this key
		 * @param {GetChargeStationsSort_order} sort_order asc to sort ascending (default is desc - descending)
		 * @param {Date} createdAt_gte Date as ISO String
		 * @param {Date} createdAt_lte Date as ISO String
		 * @param {Date} updatedAt_gte Date as ISO String
		 * @param {Date} updatedAt_lte Date as ISO String
		 * @param {boolean} include_location Populate location
		 * @param {boolean} include_evses Populate evses
		 * @param {boolean} include_organization Populate organization
		 * @return {void} An array of chargestation objects
		 */
		GetChargeStations(organization: string | null | undefined, location: string | null | undefined, online: boolean | null | undefined, active: boolean | null | undefined, _public: boolean | null | undefined, paginate_limit: number | null | undefined, paginate_page: string | null | undefined, paginate_enabled: boolean | null | undefined, sort_by: string | null | undefined, sort_order: GetChargeStationsSort_order | null | undefined, createdAt_gte: Date | null | undefined, createdAt_lte: Date | null | undefined, updatedAt_gte: Date | null | undefined, updatedAt_lte: Date | null | undefined, include_location: boolean | null | undefined, include_evses: boolean | null | undefined, include_organization: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/chargestations?organization=' + (organization == null ? '' : encodeURIComponent(organization)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&online=' + online + '&active=' + active + '&_public=' + _public + '&paginate_limit=' + paginate_limit + '&paginate_page=' + (paginate_page == null ? '' : encodeURIComponent(paginate_page)) + '&paginate_enabled=' + paginate_enabled + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&sort_order=' + sort_order + '&createdAt_gte=' + createdAt_gte?.toISOString() + '&createdAt_lte=' + createdAt_lte?.toISOString() + '&updatedAt_gte=' + updatedAt_gte?.toISOString() + '&updatedAt_lte=' + updatedAt_lte?.toISOString() + '&include_location=' + include_location + '&include_evses=' + include_evses + '&include_organization=' + include_organization, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new charge station
		 * Post v1/chargestations
		 * @param {Schema1} requestBody Include charge station properties to create here
		 * @return {void} 
		 */
		PostChargeStations(requestBody: Schema1): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/chargestations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Use to delete a charge station
		 * Delete v1/chargestations/{id}
		 * @param {string} id The charge station id that needs to be deleted
		 * @return {void} Returns the deleted chargestion object
		 */
		DeleteChargeStation(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/chargestations/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a single charge station's data
		 * Get v1/chargestations/{id}
		 * @param {string} id The charge station id that needs to be fetched
		 * @param {boolean} include_location Populate location
		 * @param {boolean} include_evses Populate evses
		 * @param {boolean} include_organization Populate organization
		 * @return {void} Returns a chargestion object
		 */
		GetChargeStation(id: string, include_location: boolean | null | undefined, include_evses: boolean | null | undefined, include_organization: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/chargestations/' + (id == null ? '' : encodeURIComponent(id)) + '&include_location=' + include_location + '&include_evses=' + include_evses + '&include_organization=' + include_organization, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a charge station's data
		 * Patch v1/chargestations/{id}
		 * @param {string} id ID of charge station that needs to be updated
		 * @param {Schema1} requestBody Include charge station properties to update here
		 * @return {PatchChargeStationReturn} Returns the updated chargestion object
		 */
		PatchChargeStation(id: string, requestBody: Schema1): Observable<PatchChargeStationReturn> {
			return this.http.patch<PatchChargeStationReturn>(this.baseUri + 'v1/chargestations/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List connectors for a chargestation
		 * Get v1/chargestations/{id}/connectors
		 * @param {string} id chargeStation id
		 * @param {boolean} include_evse Populate evse
		 * @param {boolean} include_organization Populate organization
		 * @return {void} Returns an array of connector objects
		 */
		GetChargeStationConnectors(id: string, include_evse: boolean | null | undefined, include_organization: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/chargestations/' + (id == null ? '' : encodeURIComponent(id)) + '/connectors&include_evse=' + include_evse + '&include_organization=' + include_organization, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Commands data
		 * Get v1/commands
		 * @param {number} paginate_limit Number of results per page
		 * @param {string} paginate_page The queried page index
		 * @param {boolean} paginate_enabled Enable pagination
		 * @param {string} sort_by Sort data by this key
		 * @param {GetChargeStationsSort_order} sort_order asc to sort ascending (default is desc - descending)
		 * @param {Date} createdAt_gte Date as ISO String
		 * @param {Date} createdAt_lte Date as ISO String
		 * @param {Date} updatedAt_gte Date as ISO String
		 * @param {Date} updatedAt_lte Date as ISO String
		 * @param {boolean} include_chargestation Populate chargestation
		 * @param {boolean} include_driver Populate driver
		 * @param {boolean} include_transaction Populate transaction
		 * @param {boolean} include_organization Populate organization
		 * @return {void} Success
		 */
		GetCommands(paginate_limit: number | null | undefined, paginate_page: string | null | undefined, paginate_enabled: boolean | null | undefined, sort_by: string | null | undefined, sort_order: GetChargeStationsSort_order | null | undefined, createdAt_gte: Date | null | undefined, createdAt_lte: Date | null | undefined, updatedAt_gte: Date | null | undefined, updatedAt_lte: Date | null | undefined, include_chargestation: boolean | null | undefined, include_driver: boolean | null | undefined, include_transaction: boolean | null | undefined, include_organization: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/commands?paginate_limit=' + paginate_limit + '&paginate_page=' + (paginate_page == null ? '' : encodeURIComponent(paginate_page)) + '&paginate_enabled=' + paginate_enabled + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&sort_order=' + sort_order + '&createdAt_gte=' + createdAt_gte?.toISOString() + '&createdAt_lte=' + createdAt_lte?.toISOString() + '&updatedAt_gte=' + updatedAt_gte?.toISOString() + '&updatedAt_lte=' + updatedAt_lte?.toISOString() + '&include_chargestation=' + include_chargestation + '&include_driver=' + include_driver + '&include_transaction=' + include_transaction + '&include_organization=' + include_organization, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
		 * Post v1/commands/cancelreservation
		 * @return {void} 
		 */
		Cancelreservation(requestBody: CancelreservationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/commands/cancelreservation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a smart charging schedule
		 * Delete v1/commands/chargingschedule
		 * @return {void} 
		 */
		Deletechargingschedule(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/commands/chargingschedule', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Set one of charging power or current of a specific chargestation connector
		 * Post v1/commands/chargingschedule
		 * @return {void} 
		 */
		Setchargingschedule(requestBody: any): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/commands/chargingschedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
		 * Post v1/commands/remotestart
		 * @return {void} 
		 */
		Remotestart(requestBody: RemotestartPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/commands/remotestart', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
		 * Post v1/commands/remotestop
		 * @param {RemotestopPostBody} requestBody Remote stop transaction info here.
		 * @return {void} 
		 */
		Remotestop(requestBody: RemotestopPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/commands/remotestop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
		 * Post v1/commands/reserve
		 * @return {void} 
		 */
		Reserve(requestBody: ReservePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/commands/reserve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
		 * Post v1/commands/reset
		 * @return {void} 
		 */
		Reset(requestBody: ResetPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/commands/reset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
		 * Post v1/commands/unlockconnector
		 * @return {void} 
		 */
		Unlockconnector(requestBody: UnlockconnectorPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/commands/unlockconnector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a charge station's config variables
		 * Get v1/commands/{id}/variables
		 * @param {string} id The chargestation id
		 * @return {void} Returns Cs configurations array
		 */
		GetVariables(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/commands/' + (id == null ? '' : encodeURIComponent(id)) + '/variables', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update config variables for a chargestation
		 * Patch v1/commands/{id}/variables
		 * @param {string} id ID of charge station
		 * @param {PatchChargeStationVariablePatchBody} requestBody Charge Station Variable to set
		 * @return {void} 
		 */
		PatchChargeStationVariable(id: string, requestBody: PatchChargeStationVariablePatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/commands/' + (id == null ? '' : encodeURIComponent(id)) + '/variables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Configurations data
		 * Get v1/configurations
		 * @param {number} paginate_limit Number of results per page
		 * @param {string} paginate_page The queried page index
		 * @param {boolean} paginate_enabled Enable pagination
		 * @param {string} sort_by Sort data by this key
		 * @param {GetChargeStationsSort_order} sort_order asc to sort ascending (default is desc - descending)
		 * @param {Date} createdAt_gte Date as ISO String
		 * @param {Date} createdAt_lte Date as ISO String
		 * @param {Date} updatedAt_gte Date as ISO String
		 * @param {Date} updatedAt_lte Date as ISO String
		 * @return {void} Success
		 */
		GetConfigurations(paginate_limit: number | null | undefined, paginate_page: string | null | undefined, paginate_enabled: boolean | null | undefined, sort_by: string | null | undefined, sort_order: GetChargeStationsSort_order | null | undefined, createdAt_gte: Date | null | undefined, createdAt_lte: Date | null | undefined, updatedAt_gte: Date | null | undefined, updatedAt_lte: Date | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/configurations?paginate_limit=' + paginate_limit + '&paginate_page=' + (paginate_page == null ? '' : encodeURIComponent(paginate_page)) + '&paginate_enabled=' + paginate_enabled + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&sort_order=' + sort_order + '&createdAt_gte=' + createdAt_gte?.toISOString() + '&createdAt_lte=' + createdAt_lte?.toISOString() + '&updatedAt_gte=' + updatedAt_gte?.toISOString() + '&updatedAt_lte=' + updatedAt_lte?.toISOString(), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create connector with parameters
		 * Post v1/configurations
		 * @param {PostConfigurationsPostBody} requestBody Include Configuration properties to create here
		 * @return {void} 
		 */
		PostConfigurations(requestBody: PostConfigurationsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get one Configuration data
		 * Get v1/configurations/{id}
		 * @param {string} id ID of Configuration that needs to be fetched
		 * @return {void} Success
		 */
		GetConfiguration(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/configurations/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List connectors
		 * Get v1/connectors
		 * @param {number} paginate_limit Number of results per page
		 * @param {string} paginate_page The queried page index
		 * @param {boolean} paginate_enabled Enable pagination
		 * @param {string} sort_by Sort data by this key
		 * @param {GetChargeStationsSort_order} sort_order asc to sort ascending (default is desc - descending)
		 * @param {Date} createdAt_gte Date as ISO String
		 * @param {Date} createdAt_lte Date as ISO String
		 * @param {Date} updatedAt_gte Date as ISO String
		 * @param {Date} updatedAt_lte Date as ISO String
		 * @param {boolean} include_evse Populate evse
		 * @param {boolean} include_organization Populate organization
		 * @param {boolean} include_rate Populate rate
		 * @return {void} Returns an array of connector objects
		 */
		GetConnectors(paginate_limit: number | null | undefined, paginate_page: string | null | undefined, paginate_enabled: boolean | null | undefined, sort_by: string | null | undefined, sort_order: GetChargeStationsSort_order | null | undefined, createdAt_gte: Date | null | undefined, createdAt_lte: Date | null | undefined, updatedAt_gte: Date | null | undefined, updatedAt_lte: Date | null | undefined, include_evse: boolean | null | undefined, include_organization: boolean | null | undefined, include_rate: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/connectors?paginate_limit=' + paginate_limit + '&paginate_page=' + (paginate_page == null ? '' : encodeURIComponent(paginate_page)) + '&paginate_enabled=' + paginate_enabled + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&sort_order=' + sort_order + '&createdAt_gte=' + createdAt_gte?.toISOString() + '&createdAt_lte=' + createdAt_lte?.toISOString() + '&updatedAt_gte=' + updatedAt_gte?.toISOString() + '&updatedAt_lte=' + updatedAt_lte?.toISOString() + '&include_evse=' + include_evse + '&include_organization=' + include_organization + '&include_rate=' + include_rate, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new connector
		 * Post v1/connectors
		 * @param {PostConnectorsPostBody} requestBody Include Connector properties to create here
		 * @return {PostConnectorsReturn} Returns the new connector object
		 */
		PostConnectors(requestBody: PostConnectorsPostBody): Observable<PostConnectorsReturn> {
			return this.http.post<PostConnectorsReturn>(this.baseUri + 'v1/connectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a connector
		 * Delete v1/connectors/{id}
		 * @param {string} id The connector id that needs to be deleted
		 * @return {void} Returns the deleted connector object
		 */
		DeleteConnector(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/connectors/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a connector
		 * Get v1/connectors/{id}
		 * @param {string} id ID of connector that needs to be fetched
		 * @param {boolean} include_evse Populate evse
		 * @param {boolean} include_organization Populate organization
		 * @param {boolean} include_rate Populate rate
		 * @return {void} Returns a connector object
		 */
		GetConnector(id: string, include_evse: boolean | null | undefined, include_organization: boolean | null | undefined, include_rate: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/connectors/' + (id == null ? '' : encodeURIComponent(id)) + '&include_evse=' + include_evse + '&include_organization=' + include_organization + '&include_rate=' + include_rate, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a connector's data
		 * Patch v1/connectors/{id}
		 * @param {string} id ID of connector that needs to be updated
		 * @param {PatchConnectorPatchBody} requestBody Include connector properties to update here
		 * @return {void} 
		 */
		PatchConnector(id: string, requestBody: PatchConnectorPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/connectors/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all drivers
		 * Get v1/drivers
		 * @param {boolean} active Get a list of active drivers
		 * @param {number} paginate_limit Number of results per page
		 * @param {string} paginate_page The queried page index
		 * @param {boolean} paginate_enabled Enable pagination
		 * @param {string} sort_by Sort data by this key
		 * @param {GetChargeStationsSort_order} sort_order asc to sort ascending (default is desc - descending)
		 * @param {Date} createdAt_gte Date as ISO String
		 * @param {Date} createdAt_lte Date as ISO String
		 * @param {Date} updatedAt_gte Date as ISO String
		 * @param {Date} updatedAt_lte Date as ISO String
		 * @param {boolean} include_tokens Populate tokens
		 * @param {boolean} include_group Populate group
		 * @param {boolean} include_organization Populate organization
		 * @return {GetDriversReturn} Returns a list of driver objects
		 */
		GetDrivers(active: boolean | null | undefined, paginate_limit: number | null | undefined, paginate_page: string | null | undefined, paginate_enabled: boolean | null | undefined, sort_by: string | null | undefined, sort_order: GetChargeStationsSort_order | null | undefined, createdAt_gte: Date | null | undefined, createdAt_lte: Date | null | undefined, updatedAt_gte: Date | null | undefined, updatedAt_lte: Date | null | undefined, include_tokens: boolean | null | undefined, include_group: boolean | null | undefined, include_organization: boolean | null | undefined): Observable<GetDriversReturn> {
			return this.http.get<GetDriversReturn>(this.baseUri + 'v1/drivers?active=' + active + '&paginate_limit=' + paginate_limit + '&paginate_page=' + (paginate_page == null ? '' : encodeURIComponent(paginate_page)) + '&paginate_enabled=' + paginate_enabled + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&sort_order=' + sort_order + '&createdAt_gte=' + createdAt_gte?.toISOString() + '&createdAt_lte=' + createdAt_lte?.toISOString() + '&updatedAt_gte=' + updatedAt_gte?.toISOString() + '&updatedAt_lte=' + updatedAt_lte?.toISOString() + '&include_tokens=' + include_tokens + '&include_group=' + include_group + '&include_organization=' + include_organization, {});
		}

		/**
		 * Create a new driver
		 * Post v1/drivers
		 * @param {PostDriversPostBody} requestBody Include driver properties to create here
		 * @return {PostDriversReturn} Returns the newly created driver object
		 */
		PostDrivers(requestBody: PostDriversPostBody): Observable<PostDriversReturn> {
			return this.http.post<PostDriversReturn>(this.baseUri + 'v1/drivers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a driver
		 * Delete v1/drivers/{id}
		 * @param {string} id The driver id that needs to be deleted
		 * @return {void} Returns the deleted driver object
		 */
		DeleteDriver(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/drivers/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a driver's data
		 * Get v1/drivers/{id}
		 * @param {string} id The driver id that needs to be fetched
		 * @param {boolean} include_tokens Populate tokens
		 * @param {boolean} include_group Populate group
		 * @param {boolean} include_organization Populate organization
		 * @return {void} Returns a driver object
		 */
		GetDriver(id: string, include_tokens: boolean | null | undefined, include_group: boolean | null | undefined, include_organization: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/drivers/' + (id == null ? '' : encodeURIComponent(id)) + '&include_tokens=' + include_tokens + '&include_group=' + include_group + '&include_organization=' + include_organization, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a driver's data
		 * Patch v1/drivers/{id}
		 * @param {string} id ID of driver that needs to be updated
		 * @param {PatchDriverPatchBody} requestBody Include driver properties to create here
		 * @return {PatchDriverReturn} Returns the updated driver object
		 */
		PatchDriver(id: string, requestBody: PatchDriverPatchBody): Observable<PatchDriverReturn> {
			return this.http.patch<PatchDriverReturn>(this.baseUri + 'v1/drivers/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a location
		 * Delete v1/location/{id}
		 * @param {string} id The location id that needs to be deleted
		 * @return {void} Returns the deleted location object
		 */
		DeleteLocation(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/location/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a location's data
		 * Get v1/location/{id}
		 * @param {string} id The location id that needs to be fetched
		 * @param {boolean} include_chargestations Populate chargestations
		 * @param {boolean} include_organization Populate organization
		 * @return {void} Returns a location object
		 */
		GetLocation(id: string, include_chargestations: boolean | null | undefined, include_organization: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/location/' + (id == null ? '' : encodeURIComponent(id)) + '&include_chargestations=' + include_chargestations + '&include_organization=' + include_organization, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a location's data
		 * Patch v1/location/{id}
		 * @param {string} id ID of location that needs to be updated
		 * @param {PatchLocationPatchBody} requestBody Include location properties to create here
		 * @return {PatchLocationReturn} Returns the updated location object
		 */
		PatchLocation(id: string, requestBody: PatchLocationPatchBody): Observable<PatchLocationReturn> {
			return this.http.patch<PatchLocationReturn>(this.baseUri + 'v1/location/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Locations data
		 * Get v1/locations
		 * @param {number} paginate_limit Number of results per page
		 * @param {string} paginate_page The queried page index
		 * @param {boolean} paginate_enabled Enable pagination
		 * @param {string} sort_by Sort data by this key
		 * @param {GetChargeStationsSort_order} sort_order asc to sort ascending (default is desc - descending)
		 * @param {Date} createdAt_gte Date as ISO String
		 * @param {Date} createdAt_lte Date as ISO String
		 * @param {Date} updatedAt_gte Date as ISO String
		 * @param {Date} updatedAt_lte Date as ISO String
		 * @param {boolean} include_organization Populate organization
		 * @return {void} Success
		 */
		GetLocations(paginate_limit: number | null | undefined, paginate_page: string | null | undefined, paginate_enabled: boolean | null | undefined, sort_by: string | null | undefined, sort_order: GetChargeStationsSort_order | null | undefined, createdAt_gte: Date | null | undefined, createdAt_lte: Date | null | undefined, updatedAt_gte: Date | null | undefined, updatedAt_lte: Date | null | undefined, include_organization: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/locations?paginate_limit=' + paginate_limit + '&paginate_page=' + (paginate_page == null ? '' : encodeURIComponent(paginate_page)) + '&paginate_enabled=' + paginate_enabled + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&sort_order=' + sort_order + '&createdAt_gte=' + createdAt_gte?.toISOString() + '&createdAt_lte=' + createdAt_lte?.toISOString() + '&updatedAt_gte=' + updatedAt_gte?.toISOString() + '&updatedAt_lte=' + updatedAt_lte?.toISOString() + '&include_organization=' + include_organization, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new location
		 * Post v1/locations
		 * @param {PostLocationsPostBody} requestBody Include location properties to create here
		 * @return {PostLocationsReturn} Returns the newly created location object
		 */
		PostLocations(requestBody: PostLocationsPostBody): Observable<PostLocationsReturn> {
			return this.http.post<PostLocationsReturn>(this.baseUri + 'v1/locations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get an array of all Organizations
		 * Get v1/organizations
		 * @param {number} paginate_limit Number of results per page
		 * @param {string} paginate_page The queried page index
		 * @param {boolean} paginate_enabled Enable pagination
		 * @param {string} sort_by Sort data by this key
		 * @param {GetChargeStationsSort_order} sort_order asc to sort ascending (default is desc - descending)
		 * @param {Date} createdAt_gte Date as ISO String
		 * @param {Date} createdAt_lte Date as ISO String
		 * @param {Date} updatedAt_gte Date as ISO String
		 * @param {Date} updatedAt_lte Date as ISO String
		 * @param {boolean} include_locations Populate locations
		 * @return {void} Returns an array of Organization Objects
		 */
		GetOrganizations(paginate_limit: number | null | undefined, paginate_page: string | null | undefined, paginate_enabled: boolean | null | undefined, sort_by: string | null | undefined, sort_order: GetChargeStationsSort_order | null | undefined, createdAt_gte: Date | null | undefined, createdAt_lte: Date | null | undefined, updatedAt_gte: Date | null | undefined, updatedAt_lte: Date | null | undefined, include_locations: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/organizations?paginate_limit=' + paginate_limit + '&paginate_page=' + (paginate_page == null ? '' : encodeURIComponent(paginate_page)) + '&paginate_enabled=' + paginate_enabled + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&sort_order=' + sort_order + '&createdAt_gte=' + createdAt_gte?.toISOString() + '&createdAt_lte=' + createdAt_lte?.toISOString() + '&updatedAt_gte=' + updatedAt_gte?.toISOString() + '&updatedAt_lte=' + updatedAt_lte?.toISOString() + '&include_locations=' + include_locations, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get one organization's data by id
		 * Get v1/organizations/{id}
		 * @param {string} id ID of organization that needs to be fetched
		 * @param {boolean} include_locations Populate locations
		 * @return {void} Returns an Organization Object
		 */
		GetOrganization(id: string, include_locations: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/organizations/' + (id == null ? '' : encodeURIComponent(id)) + '&include_locations=' + include_locations, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an organization's data
		 * Patch v1/organizations/{id}
		 * @param {string} id ID of organization that needs to be updated
		 * @param {PatchOrganizationPatchBody} requestBody Include organization properties to create here
		 * @return {void} 
		 */
		PatchOrganization(id: string, requestBody: PatchOrganizationPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/organizations/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Use to request a Websockets handshake
		 * Get v1/realtime
		 * @return {void} 
		 */
		GetRealtime(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/realtime', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Reservations data
		 * Get v1/reservations
		 * @param {number} paginate_limit Number of results per page
		 * @param {string} paginate_page The queried page index
		 * @param {boolean} paginate_enabled Enable pagination
		 * @param {string} sort_by Sort data by this key
		 * @param {GetChargeStationsSort_order} sort_order asc to sort ascending (default is desc - descending)
		 * @param {Date} createdAt_gte Date as ISO String
		 * @param {Date} createdAt_lte Date as ISO String
		 * @param {Date} updatedAt_gte Date as ISO String
		 * @param {Date} updatedAt_lte Date as ISO String
		 * @param {boolean} include_chargestation Populate chargestation
		 * @param {boolean} include_organization Populate organization
		 * @return {void} Success
		 */
		GetReservations(paginate_limit: number | null | undefined, paginate_page: string | null | undefined, paginate_enabled: boolean | null | undefined, sort_by: string | null | undefined, sort_order: GetChargeStationsSort_order | null | undefined, createdAt_gte: Date | null | undefined, createdAt_lte: Date | null | undefined, updatedAt_gte: Date | null | undefined, updatedAt_lte: Date | null | undefined, include_chargestation: boolean | null | undefined, include_organization: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/reservations?paginate_limit=' + paginate_limit + '&paginate_page=' + (paginate_page == null ? '' : encodeURIComponent(paginate_page)) + '&paginate_enabled=' + paginate_enabled + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&sort_order=' + sort_order + '&createdAt_gte=' + createdAt_gte?.toISOString() + '&createdAt_lte=' + createdAt_lte?.toISOString() + '&updatedAt_gte=' + updatedAt_gte?.toISOString() + '&updatedAt_lte=' + updatedAt_lte?.toISOString() + '&include_chargestation=' + include_chargestation + '&include_organization=' + include_organization, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get one reservation data
		 * Get v1/reservations/{id}
		 * @param {string} id ID of the reservation that needs to be fetched
		 * @param {boolean} include_chargestation Populate chargestation
		 * @param {boolean} include_organization Populate organization
		 * @return {void} Success
		 */
		GetReservation(id: string, include_chargestation: boolean | null | undefined, include_organization: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/reservations/' + (id == null ? '' : encodeURIComponent(id)) + '&include_chargestation=' + include_chargestation + '&include_organization=' + include_organization, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
		 * Patch v1/reservations/{id}
		 * @param {string} id ID of the reservation that needs to be fetched
		 * @return {void} 
		 */
		Updatereservation(id: string, requestBody: UpdatereservationPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/reservations/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List tokens
		 * Get v1/tokens
		 * @param {number} paginate_limit Number of results per page
		 * @param {string} paginate_page The queried page index
		 * @param {boolean} paginate_enabled Enable pagination
		 * @param {string} sort_by Sort data by this key
		 * @param {GetChargeStationsSort_order} sort_order asc to sort ascending (default is desc - descending)
		 * @param {Date} createdAt_gte Date as ISO String
		 * @param {Date} createdAt_lte Date as ISO String
		 * @param {Date} updatedAt_gte Date as ISO String
		 * @param {Date} updatedAt_lte Date as ISO String
		 * @param {boolean} include_driver Populate driver
		 * @param {boolean} include_organization Populate organization
		 * @return {GetTokensReturn} Returns an array of token objects
		 */
		GetTokens(paginate_limit: number | null | undefined, paginate_page: string | null | undefined, paginate_enabled: boolean | null | undefined, sort_by: string | null | undefined, sort_order: GetChargeStationsSort_order | null | undefined, createdAt_gte: Date | null | undefined, createdAt_lte: Date | null | undefined, updatedAt_gte: Date | null | undefined, updatedAt_lte: Date | null | undefined, include_driver: boolean | null | undefined, include_organization: boolean | null | undefined): Observable<GetTokensReturn> {
			return this.http.get<GetTokensReturn>(this.baseUri + 'v1/tokens?paginate_limit=' + paginate_limit + '&paginate_page=' + (paginate_page == null ? '' : encodeURIComponent(paginate_page)) + '&paginate_enabled=' + paginate_enabled + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&sort_order=' + sort_order + '&createdAt_gte=' + createdAt_gte?.toISOString() + '&createdAt_lte=' + createdAt_lte?.toISOString() + '&updatedAt_gte=' + updatedAt_gte?.toISOString() + '&updatedAt_lte=' + updatedAt_lte?.toISOString() + '&include_driver=' + include_driver + '&include_organization=' + include_organization, {});
		}

		/**
		 * Create a new token
		 * Post v1/tokens
		 * @param {PostTokensPostBody} requestBody Include token properties to create here
		 * @return {void} 
		 */
		PostTokens(requestBody: PostTokensPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/tokens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Use to delete a token
		 * Delete v1/tokens/{id}
		 * @param {string} id The token id that needs to be deleted
		 * @return {void} Returns the deleted token object
		 */
		DeleteToken(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/tokens/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a single token's data
		 * Get v1/tokens/{id}
		 * @param {string} id The token id that needs to be fetched
		 * @param {boolean} include_driver Populate driver
		 * @param {boolean} include_organization Populate organization
		 * @return {void} Returns a token object
		 */
		GetToken(id: string, include_driver: boolean | null | undefined, include_organization: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/tokens/' + (id == null ? '' : encodeURIComponent(id)) + '&include_driver=' + include_driver + '&include_organization=' + include_organization, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a token
		 * Patch v1/tokens/{id}
		 * @param {string} id ID of token that needs to be updated
		 * @param {PatchTokenPatchBody} requestBody Include token properties to create here
		 * @return {void} 
		 */
		PatchToken(id: string, requestBody: PatchTokenPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/tokens/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of transactions
		 * Get v1/transactions
		 * @param {GetTransactionsStatus} status Started to get only active transactions
		 * @param {number} paginate_limit Number of results per page
		 * @param {string} paginate_page The queried page index
		 * @param {boolean} paginate_enabled Enable pagination
		 * @param {string} sort_by Sort data by this key
		 * @param {GetChargeStationsSort_order} sort_order asc to sort ascending (default is desc - descending)
		 * @param {Date} createdAt_gte Date as ISO String
		 * @param {Date} createdAt_lte Date as ISO String
		 * @param {Date} updatedAt_gte Date as ISO String
		 * @param {Date} updatedAt_lte Date as ISO String
		 * @param {boolean} include_chargestation Populate chargestation
		 * @param {boolean} include_evse Populate evse
		 * @param {boolean} include_connector Populate connector
		 * @param {boolean} include_driver Populate driver
		 * @param {boolean} include_token Populate token
		 * @param {boolean} include_reservation Populate reservation
		 * @param {boolean} include_organization Populate organization
		 * @param {boolean} include_rate Populate rate
		 * @return {GetTransactionsReturn} Returns an array of transaction objects
		 */
		GetTransactions(status: GetTransactionsStatus | null | undefined, paginate_limit: number | null | undefined, paginate_page: string | null | undefined, paginate_enabled: boolean | null | undefined, sort_by: string | null | undefined, sort_order: GetChargeStationsSort_order | null | undefined, createdAt_gte: Date | null | undefined, createdAt_lte: Date | null | undefined, updatedAt_gte: Date | null | undefined, updatedAt_lte: Date | null | undefined, include_chargestation: boolean | null | undefined, include_evse: boolean | null | undefined, include_connector: boolean | null | undefined, include_driver: boolean | null | undefined, include_token: boolean | null | undefined, include_reservation: boolean | null | undefined, include_organization: boolean | null | undefined, include_rate: boolean | null | undefined): Observable<GetTransactionsReturn> {
			return this.http.get<GetTransactionsReturn>(this.baseUri + 'v1/transactions?status=' + status + '&paginate_limit=' + paginate_limit + '&paginate_page=' + (paginate_page == null ? '' : encodeURIComponent(paginate_page)) + '&paginate_enabled=' + paginate_enabled + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&sort_order=' + sort_order + '&createdAt_gte=' + createdAt_gte?.toISOString() + '&createdAt_lte=' + createdAt_lte?.toISOString() + '&updatedAt_gte=' + updatedAt_gte?.toISOString() + '&updatedAt_lte=' + updatedAt_lte?.toISOString() + '&include_chargestation=' + include_chargestation + '&include_evse=' + include_evse + '&include_connector=' + include_connector + '&include_driver=' + include_driver + '&include_token=' + include_token + '&include_reservation=' + include_reservation + '&include_organization=' + include_organization + '&include_rate=' + include_rate, {});
		}

		/**
		 * Get a specific transaction
		 * Get v1/transactions/{id}
		 * @param {string} id The transaction id that needs to be fetched
		 * @param {boolean} include_chargestation Populate chargestation
		 * @param {boolean} include_evse Populate evse
		 * @param {boolean} include_connector Populate connector
		 * @param {boolean} include_driver Populate driver
		 * @param {boolean} include_token Populate token
		 * @param {boolean} include_reservation Populate reservation
		 * @param {boolean} include_organization Populate organization
		 * @param {boolean} include_rate Populate rate
		 * @return {void} Returns a transaction object
		 */
		GetTransaction(id: string, include_chargestation: boolean | null | undefined, include_evse: boolean | null | undefined, include_connector: boolean | null | undefined, include_driver: boolean | null | undefined, include_token: boolean | null | undefined, include_reservation: boolean | null | undefined, include_organization: boolean | null | undefined, include_rate: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/transactions/' + (id == null ? '' : encodeURIComponent(id)) + '&include_chargestation=' + include_chargestation + '&include_evse=' + include_evse + '&include_connector=' + include_connector + '&include_driver=' + include_driver + '&include_token=' + include_token + '&include_reservation=' + include_reservation + '&include_organization=' + include_organization + '&include_rate=' + include_rate, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific transaction's cost
		 * Get v1/transactions/{id}/cost
		 * @param {string} id The transaction id that needs to be fetched
		 * @return {void} Returns a transaction's cost object
		 */
		GetTransactionCost(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/transactions/' + (id == null ? '' : encodeURIComponent(id)) + '/cost', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all vehicles
		 * Get v1/vehicles
		 * @param {boolean} active Get a list of active vehicles
		 * @param {number} paginate_limit Number of results per page
		 * @param {string} paginate_page The queried page index
		 * @param {boolean} paginate_enabled Enable pagination
		 * @param {string} sort_by Sort data by this key
		 * @param {GetChargeStationsSort_order} sort_order asc to sort ascending (default is desc - descending)
		 * @param {Date} createdAt_gte Date as ISO String
		 * @param {Date} createdAt_lte Date as ISO String
		 * @param {Date} updatedAt_gte Date as ISO String
		 * @param {Date} updatedAt_lte Date as ISO String
		 * @param {boolean} include_driver Populate driver
		 * @param {boolean} include_token Populate token
		 * @param {boolean} include_organization Populate organization
		 * @return {GetVehiclesReturn} Returns a list of vehicle objects
		 */
		GetVehicles(active: boolean | null | undefined, paginate_limit: number | null | undefined, paginate_page: string | null | undefined, paginate_enabled: boolean | null | undefined, sort_by: string | null | undefined, sort_order: GetChargeStationsSort_order | null | undefined, createdAt_gte: Date | null | undefined, createdAt_lte: Date | null | undefined, updatedAt_gte: Date | null | undefined, updatedAt_lte: Date | null | undefined, include_driver: boolean | null | undefined, include_token: boolean | null | undefined, include_organization: boolean | null | undefined): Observable<GetVehiclesReturn> {
			return this.http.get<GetVehiclesReturn>(this.baseUri + 'v1/vehicles?active=' + active + '&paginate_limit=' + paginate_limit + '&paginate_page=' + (paginate_page == null ? '' : encodeURIComponent(paginate_page)) + '&paginate_enabled=' + paginate_enabled + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&sort_order=' + sort_order + '&createdAt_gte=' + createdAt_gte?.toISOString() + '&createdAt_lte=' + createdAt_lte?.toISOString() + '&updatedAt_gte=' + updatedAt_gte?.toISOString() + '&updatedAt_lte=' + updatedAt_lte?.toISOString() + '&include_driver=' + include_driver + '&include_token=' + include_token + '&include_organization=' + include_organization, {});
		}

		/**
		 * Get a vehicle's data
		 * Get v1/vehicles/{id}
		 * @param {string} id The vehicule id that needs to be fetched
		 * @param {boolean} include_driver Populate driver
		 * @param {boolean} include_token Populate token
		 * @param {boolean} include_organization Populate organization
		 * @return {void} Returns a vehicle object
		 */
		GetVehicle(id: string, include_driver: boolean | null | undefined, include_token: boolean | null | undefined, include_organization: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/vehicles/' + (id == null ? '' : encodeURIComponent(id)) + '&include_driver=' + include_driver + '&include_token=' + include_token + '&include_organization=' + include_organization, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a vehicle's battery
		 * Get v1/vehicles/{id}/battery
		 * @param {string} id The vehicle id that needs to be fetched
		 * @return {void} Returns a vehicle object
		 */
		GetVehicleBattery(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/vehicles/' + (id == null ? '' : encodeURIComponent(id)) + '/battery', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a vehicle's charge
		 * Get v1/vehicles/{id}/charge
		 * @param {string} id The vehicle id that needs to be fetched
		 * @return {void} Returns a vehicle object
		 */
		GetVehicleCharge(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/vehicles/' + (id == null ? '' : encodeURIComponent(id)) + '/charge', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Change charge
		 * Post v1/vehicles/{id}/charge
		 * @param {string} id The vehicle id that needs to be fetched
		 * @param {PostChargePostBody} requestBody Include command properties to send here
		 * @return {PostChargeReturn} Returns the status of the command
		 */
		PostCharge(id: string, requestBody: PostChargePostBody): Observable<PostChargeReturn> {
			return this.http.post<PostChargeReturn>(this.baseUri + 'v1/vehicles/' + (id == null ? '' : encodeURIComponent(id)) + '/charge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a vehicle's location
		 * Get v1/vehicles/{id}/location
		 * @param {string} id The vehicle id that needs to be fetched
		 * @return {void} Returns a vehicle object
		 */
		GetVehicleLocation(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/vehicles/' + (id == null ? '' : encodeURIComponent(id)) + '/location', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a vehicle's odometer
		 * Get v1/vehicles/{id}/odometer
		 * @param {string} id The vehicle id that needs to be fetched
		 * @return {void} Returns a vehicle object
		 */
		GetVehicleOdometer(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/vehicles/' + (id == null ? '' : encodeURIComponent(id)) + '/odometer', { observe: 'response', responseType: 'text' });
		}
	}

	export enum GetChargeStationsSort_order { desc = 'desc', asc = 'asc' }

	export interface PatchChargeStationReturn {
		message?: string | null;
		ok?: boolean | null;
		result?: string | null;
	}
	export interface PatchChargeStationReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		result: FormControl<string | null | undefined>,
	}
	export function CreatePatchChargeStationReturnFormGroup() {
		return new FormGroup<PatchChargeStationReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CancelreservationPostBody {
		reservation?: string | null;
	}
	export interface CancelreservationPostBodyFormProperties {
		reservation: FormControl<string | null | undefined>,
	}
	export function CreateCancelreservationPostBodyFormGroup() {
		return new FormGroup<CancelreservationPostBodyFormProperties>({
			reservation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemotestartPostBody {
		chargestation?: string | null;
		connector?: string | null;
		driver?: string | null;
		token?: string | null;
	}
	export interface RemotestartPostBodyFormProperties {
		chargestation: FormControl<string | null | undefined>,
		connector: FormControl<string | null | undefined>,
		driver: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,
	}
	export function CreateRemotestartPostBodyFormGroup() {
		return new FormGroup<RemotestartPostBodyFormProperties>({
			chargestation: new FormControl<string | null | undefined>(undefined),
			connector: new FormControl<string | null | undefined>(undefined),
			driver: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemotestopPostBody {
		chargestation?: string | null;
		driver?: string | null;
		transaction?: string | null;
	}
	export interface RemotestopPostBodyFormProperties {
		chargestation: FormControl<string | null | undefined>,
		driver: FormControl<string | null | undefined>,
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateRemotestopPostBodyFormGroup() {
		return new FormGroup<RemotestopPostBodyFormProperties>({
			chargestation: new FormControl<string | null | undefined>(undefined),
			driver: new FormControl<string | null | undefined>(undefined),
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReservePostBody {
		chargestation?: string | null;
		connector?: string | null;
		driver?: string | null;
		endDate?: string | null;
		token?: string | null;
	}
	export interface ReservePostBodyFormProperties {
		chargestation: FormControl<string | null | undefined>,
		connector: FormControl<string | null | undefined>,
		driver: FormControl<string | null | undefined>,
		endDate: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,
	}
	export function CreateReservePostBodyFormGroup() {
		return new FormGroup<ReservePostBodyFormProperties>({
			chargestation: new FormControl<string | null | undefined>(undefined),
			connector: new FormControl<string | null | undefined>(undefined),
			driver: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResetPostBody {
		chargestation?: string | null;
		type?: string | null;
	}
	export interface ResetPostBodyFormProperties {
		chargestation: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateResetPostBodyFormGroup() {
		return new FormGroup<ResetPostBodyFormProperties>({
			chargestation: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnlockconnectorPostBody {
		chargestation?: string | null;
		connector?: string | null;
	}
	export interface UnlockconnectorPostBodyFormProperties {
		chargestation: FormControl<string | null | undefined>,
		connector: FormControl<string | null | undefined>,
	}
	export function CreateUnlockconnectorPostBodyFormGroup() {
		return new FormGroup<UnlockconnectorPostBodyFormProperties>({
			chargestation: new FormControl<string | null | undefined>(undefined),
			connector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchChargeStationVariablePatchBody {
		value?: string | null;
		variable?: PatchChargeStationVariablePatchBodyVariable | null;
	}
	export interface PatchChargeStationVariablePatchBodyFormProperties {
		value: FormControl<string | null | undefined>,
		variable: FormControl<PatchChargeStationVariablePatchBodyVariable | null | undefined>,
	}
	export function CreatePatchChargeStationVariablePatchBodyFormGroup() {
		return new FormGroup<PatchChargeStationVariablePatchBodyFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
			variable: new FormControl<PatchChargeStationVariablePatchBodyVariable | null | undefined>(undefined),
		});

	}

	export enum PatchChargeStationVariablePatchBodyVariable { MeterValueSampleInterval = 'MeterValueSampleInterval', HeartbeatInterval = 'HeartbeatInterval', ConnectionTimeOut = 'ConnectionTimeOut', WebSocketPingInterval = 'WebSocketPingInterval', TransactionMessageRetryInterval = 'TransactionMessageRetryInterval', TransactionMessageAttempts = 'TransactionMessageAttempts' }

	export interface PostConfigurationsPostBody {
		key?: string | null;
		value?: string | null;
	}
	export interface PostConfigurationsPostBodyFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreatePostConfigurationsPostBodyFormGroup() {
		return new FormGroup<PostConfigurationsPostBodyFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostConnectorsPostBody {
		chargestation?: string | null;
		format?: string | null;
		power?: number | null;
		power_type?: string | null;
		rate?: string | null;
		type?: string | null;
	}
	export interface PostConnectorsPostBodyFormProperties {
		chargestation: FormControl<string | null | undefined>,
		format: FormControl<string | null | undefined>,
		power: FormControl<number | null | undefined>,
		power_type: FormControl<string | null | undefined>,
		rate: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePostConnectorsPostBodyFormGroup() {
		return new FormGroup<PostConnectorsPostBodyFormProperties>({
			chargestation: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			power: new FormControl<number | null | undefined>(undefined),
			power_type: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostConnectorsReturn {
		message?: string | null;
		ok?: boolean | null;
		result?: string | null;
	}
	export interface PostConnectorsReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		result: FormControl<string | null | undefined>,
	}
	export function CreatePostConnectorsReturnFormGroup() {
		return new FormGroup<PostConnectorsReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchConnectorPatchBody {
		chargestation?: string | null;
		format?: string | null;
		power?: number | null;
		power_type?: string | null;
		rate?: string | null;
		type?: string | null;
	}
	export interface PatchConnectorPatchBodyFormProperties {
		chargestation: FormControl<string | null | undefined>,
		format: FormControl<string | null | undefined>,
		power: FormControl<number | null | undefined>,
		power_type: FormControl<string | null | undefined>,
		rate: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePatchConnectorPatchBodyFormGroup() {
		return new FormGroup<PatchConnectorPatchBodyFormProperties>({
			chargestation: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			power: new FormControl<number | null | undefined>(undefined),
			power_type: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDriversReturn {
		message?: string | null;
		ok?: boolean | null;
		result?: Array<string>;
	}
	export interface GetDriversReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateGetDriversReturnFormGroup() {
		return new FormGroup<GetDriversReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PostDriversPostBody {
		active?: boolean | null;
		address?: PostDriversPostBodyAddress;
		email?: string | null;

		/** Required */
		firstname: string;

		/** Required */
		lastname: string;
		phone?: PostDriversPostBodyPhone;

		/** Required */
		source: PostDriversPostBodySource;
	}
	export interface PostDriversPostBodyFormProperties {
		active: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,

		/** Required */
		firstname: FormControl<string | null | undefined>,

		/** Required */
		lastname: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<PostDriversPostBodySource | null | undefined>,
	}
	export function CreatePostDriversPostBodyFormGroup() {
		return new FormGroup<PostDriversPostBodyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<PostDriversPostBodySource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostDriversPostBodyAddress {
		city?: string | null;
		country?: string | null;
		postalCode?: string | null;
		streetAndNumber?: string | null;
	}
	export interface PostDriversPostBodyAddressFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		streetAndNumber: FormControl<string | null | undefined>,
	}
	export function CreatePostDriversPostBodyAddressFormGroup() {
		return new FormGroup<PostDriversPostBodyAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			streetAndNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostDriversPostBodyPhone {
		home?: string | null;
		mobile?: string | null;
		work?: string | null;
	}
	export interface PostDriversPostBodyPhoneFormProperties {
		home: FormControl<string | null | undefined>,
		mobile: FormControl<string | null | undefined>,
		work: FormControl<string | null | undefined>,
	}
	export function CreatePostDriversPostBodyPhoneFormGroup() {
		return new FormGroup<PostDriversPostBodyPhoneFormProperties>({
			home: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<string | null | undefined>(undefined),
			work: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PostDriversPostBodySource { physical = 'physical', slack = 'slack', telegram = 'telegram', sms = 'sms' }

	export interface PostDriversReturn {
		message?: string | null;
		ok?: boolean | null;
		result?: string | null;
	}
	export interface PostDriversReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		result: FormControl<string | null | undefined>,
	}
	export function CreatePostDriversReturnFormGroup() {
		return new FormGroup<PostDriversReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchDriverPatchBody {
		active?: boolean | null;
		address?: PatchDriverPatchBodyAddress;
		email?: string | null;
		firstname?: string | null;
		lastname?: string | null;
		phone?: PatchDriverPatchBodyPhone;
		source?: string | null;
		tokens?: Array<string>;
	}
	export interface PatchDriverPatchBodyFormProperties {
		active: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,
		firstname: FormControl<string | null | undefined>,
		lastname: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
	}
	export function CreatePatchDriverPatchBodyFormGroup() {
		return new FormGroup<PatchDriverPatchBodyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstname: new FormControl<string | null | undefined>(undefined),
			lastname: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchDriverPatchBodyAddress {
		city?: string | null;
		country?: string | null;
		postalCode?: string | null;
		streetAndNumber?: string | null;
	}
	export interface PatchDriverPatchBodyAddressFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		streetAndNumber: FormControl<string | null | undefined>,
	}
	export function CreatePatchDriverPatchBodyAddressFormGroup() {
		return new FormGroup<PatchDriverPatchBodyAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			streetAndNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchDriverPatchBodyPhone {
		home?: string | null;
		mobile?: string | null;
		work?: string | null;
	}
	export interface PatchDriverPatchBodyPhoneFormProperties {
		home: FormControl<string | null | undefined>,
		mobile: FormControl<string | null | undefined>,
		work: FormControl<string | null | undefined>,
	}
	export function CreatePatchDriverPatchBodyPhoneFormGroup() {
		return new FormGroup<PatchDriverPatchBodyPhoneFormProperties>({
			home: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<string | null | undefined>(undefined),
			work: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchDriverReturn {
		message?: string | null;
		ok?: boolean | null;
		result?: Array<string>;
	}
	export interface PatchDriverReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreatePatchDriverReturnFormGroup() {
		return new FormGroup<PatchDriverReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PatchLocationPatchBody {
		active?: boolean | null;
		address?: PatchLocationPatchBodyAddress;
		chargestations?: Array<string>;
		coordinates?: PatchLocationPatchBodyCoordinates;
		openingHours?: PatchLocationPatchBodyOpeningHours;
		operatorName?: string | null;
		timezone?: string | null;
	}
	export interface PatchLocationPatchBodyFormProperties {
		active: FormControl<boolean | null | undefined>,
		operatorName: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,
	}
	export function CreatePatchLocationPatchBodyFormGroup() {
		return new FormGroup<PatchLocationPatchBodyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			operatorName: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchLocationPatchBodyAddress {
		city?: string | null;
		country?: string | null;
		postalCode?: string | null;
		state?: string | null;
		streetAndNumber?: string | null;
	}
	export interface PatchLocationPatchBodyAddressFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		streetAndNumber: FormControl<string | null | undefined>,
	}
	export function CreatePatchLocationPatchBodyAddressFormGroup() {
		return new FormGroup<PatchLocationPatchBodyAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			streetAndNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchLocationPatchBodyCoordinates {
		latitude?: number | null;
		longitude?: number | null;
	}
	export interface PatchLocationPatchBodyCoordinatesFormProperties {
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
	}
	export function CreatePatchLocationPatchBodyCoordinatesFormGroup() {
		return new FormGroup<PatchLocationPatchBodyCoordinatesFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PatchLocationPatchBodyOpeningHours {
		PatchLocationPatchBodyOpeningHours_0_?: Array<PatchLocationPatchBodyOpeningHours_0_>;
		PatchLocationPatchBodyOpeningHours_1_?: Array<PatchLocationPatchBodyOpeningHours_1_>;
		PatchLocationPatchBodyOpeningHours_2_?: Array<PatchLocationPatchBodyOpeningHours_2_>;
		PatchLocationPatchBodyOpeningHours_3_?: Array<PatchLocationPatchBodyOpeningHours_3_>;
		PatchLocationPatchBodyOpeningHours_4_?: Array<PatchLocationPatchBodyOpeningHours_4_>;
		PatchLocationPatchBodyOpeningHours_5_?: Array<PatchLocationPatchBodyOpeningHours_5_>;
		PatchLocationPatchBodyOpeningHours_6_?: Array<PatchLocationPatchBodyOpeningHours_6_>;
	}
	export interface PatchLocationPatchBodyOpeningHoursFormProperties {
	}
	export function CreatePatchLocationPatchBodyOpeningHoursFormGroup() {
		return new FormGroup<PatchLocationPatchBodyOpeningHoursFormProperties>({
		});

	}

	export interface PatchLocationPatchBodyOpeningHours_0_ {
		endTime?: string | null;
		startTime?: string | null;
	}
	export interface PatchLocationPatchBodyOpeningHours_0_FormProperties {
		endTime: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,
	}
	export function CreatePatchLocationPatchBodyOpeningHours_0_FormGroup() {
		return new FormGroup<PatchLocationPatchBodyOpeningHours_0_FormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchLocationPatchBodyOpeningHours_1_ {
		endTime?: string | null;
		startTime?: string | null;
	}
	export interface PatchLocationPatchBodyOpeningHours_1_FormProperties {
		endTime: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,
	}
	export function CreatePatchLocationPatchBodyOpeningHours_1_FormGroup() {
		return new FormGroup<PatchLocationPatchBodyOpeningHours_1_FormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchLocationPatchBodyOpeningHours_2_ {
		endTime?: string | null;
		startTime?: string | null;
	}
	export interface PatchLocationPatchBodyOpeningHours_2_FormProperties {
		endTime: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,
	}
	export function CreatePatchLocationPatchBodyOpeningHours_2_FormGroup() {
		return new FormGroup<PatchLocationPatchBodyOpeningHours_2_FormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchLocationPatchBodyOpeningHours_3_ {
		endTime?: string | null;
		startTime?: string | null;
	}
	export interface PatchLocationPatchBodyOpeningHours_3_FormProperties {
		endTime: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,
	}
	export function CreatePatchLocationPatchBodyOpeningHours_3_FormGroup() {
		return new FormGroup<PatchLocationPatchBodyOpeningHours_3_FormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchLocationPatchBodyOpeningHours_4_ {
		endTime?: string | null;
		startTime?: string | null;
	}
	export interface PatchLocationPatchBodyOpeningHours_4_FormProperties {
		endTime: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,
	}
	export function CreatePatchLocationPatchBodyOpeningHours_4_FormGroup() {
		return new FormGroup<PatchLocationPatchBodyOpeningHours_4_FormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchLocationPatchBodyOpeningHours_5_ {
		endTime?: string | null;
		startTime?: string | null;
	}
	export interface PatchLocationPatchBodyOpeningHours_5_FormProperties {
		endTime: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,
	}
	export function CreatePatchLocationPatchBodyOpeningHours_5_FormGroup() {
		return new FormGroup<PatchLocationPatchBodyOpeningHours_5_FormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchLocationPatchBodyOpeningHours_6_ {
		endTime?: string | null;
		startTime?: string | null;
	}
	export interface PatchLocationPatchBodyOpeningHours_6_FormProperties {
		endTime: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,
	}
	export function CreatePatchLocationPatchBodyOpeningHours_6_FormGroup() {
		return new FormGroup<PatchLocationPatchBodyOpeningHours_6_FormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchLocationReturn {
		message?: string | null;
		ok?: boolean | null;
		result?: Array<string>;
	}
	export interface PatchLocationReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreatePatchLocationReturnFormGroup() {
		return new FormGroup<PatchLocationReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PostLocationsPostBody {
		active?: boolean | null;

		/** Required */
		address: PostLocationsPostBodyAddress;
		chargestations?: Array<string>;

		/** Required */
		coordinates: PostLocationsPostBodyCoordinates;

		/** Required */
		operatorName: string;
	}
	export interface PostLocationsPostBodyFormProperties {
		active: FormControl<boolean | null | undefined>,

		/** Required */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreatePostLocationsPostBodyFormGroup() {
		return new FormGroup<PostLocationsPostBodyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			operatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostLocationsPostBodyAddress {
		city?: string | null;
		country?: string | null;
		postalCode?: string | null;
		streetAndNumber?: string | null;
	}
	export interface PostLocationsPostBodyAddressFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		streetAndNumber: FormControl<string | null | undefined>,
	}
	export function CreatePostLocationsPostBodyAddressFormGroup() {
		return new FormGroup<PostLocationsPostBodyAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			streetAndNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostLocationsPostBodyCoordinates {
		latitude?: number | null;
		longitude?: number | null;
	}
	export interface PostLocationsPostBodyCoordinatesFormProperties {
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
	}
	export function CreatePostLocationsPostBodyCoordinatesFormGroup() {
		return new FormGroup<PostLocationsPostBodyCoordinatesFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PostLocationsReturn {
		message?: string | null;
		ok?: boolean | null;
		result?: string | null;
	}
	export interface PostLocationsReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		result: FormControl<string | null | undefined>,
	}
	export function CreatePostLocationsReturnFormGroup() {
		return new FormGroup<PostLocationsReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchOrganizationPatchBody {
		active?: boolean | null;
		address?: PatchOrganizationPatchBodyAddress;
		channels?: PatchOrganizationPatchBodyChannels;
		configurations?: PatchOrganizationPatchBodyConfigurations;
		links?: PatchOrganizationPatchBodyLinks;
		locations?: Array<string>;
		logo?: string | null;
		name?: string | null;
		otp?: string | null;
		stripe_connected_account_id?: string | null;
		stripe_country?: string | null;
		stripe_currency?: string | null;
		stripe_reserve_amount?: number | null;
		support?: PatchOrganizationPatchBodySupport;
		supportChat?: PatchOrganizationPatchBodySupportChat;
		theme?: PatchOrganizationPatchBodyTheme;
	}
	export interface PatchOrganizationPatchBodyFormProperties {
		active: FormControl<boolean | null | undefined>,
		logo: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		otp: FormControl<string | null | undefined>,
		stripe_connected_account_id: FormControl<string | null | undefined>,
		stripe_country: FormControl<string | null | undefined>,
		stripe_currency: FormControl<string | null | undefined>,
		stripe_reserve_amount: FormControl<number | null | undefined>,
	}
	export function CreatePatchOrganizationPatchBodyFormGroup() {
		return new FormGroup<PatchOrganizationPatchBodyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			otp: new FormControl<string | null | undefined>(undefined),
			stripe_connected_account_id: new FormControl<string | null | undefined>(undefined),
			stripe_country: new FormControl<string | null | undefined>(undefined),
			stripe_currency: new FormControl<string | null | undefined>(undefined),
			stripe_reserve_amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PatchOrganizationPatchBodyAddress {
		city?: string | null;
		country?: string | null;
		postalCode?: string | null;
		streetAndNumber?: string | null;
	}
	export interface PatchOrganizationPatchBodyAddressFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		streetAndNumber: FormControl<string | null | undefined>,
	}
	export function CreatePatchOrganizationPatchBodyAddressFormGroup() {
		return new FormGroup<PatchOrganizationPatchBodyAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			streetAndNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchOrganizationPatchBodyChannels {
		slack?: string | null;
		telegram?: string | null;
	}
	export interface PatchOrganizationPatchBodyChannelsFormProperties {
		slack: FormControl<string | null | undefined>,
		telegram: FormControl<string | null | undefined>,
	}
	export function CreatePatchOrganizationPatchBodyChannelsFormGroup() {
		return new FormGroup<PatchOrganizationPatchBodyChannelsFormProperties>({
			slack: new FormControl<string | null | undefined>(undefined),
			telegram: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchOrganizationPatchBodyConfigurations {
		basicAuthEnabled?: boolean | null;
		basicAuthPassword?: boolean | null;
	}
	export interface PatchOrganizationPatchBodyConfigurationsFormProperties {
		basicAuthEnabled: FormControl<boolean | null | undefined>,
		basicAuthPassword: FormControl<boolean | null | undefined>,
	}
	export function CreatePatchOrganizationPatchBodyConfigurationsFormGroup() {
		return new FormGroup<PatchOrganizationPatchBodyConfigurationsFormProperties>({
			basicAuthEnabled: new FormControl<boolean | null | undefined>(undefined),
			basicAuthPassword: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PatchOrganizationPatchBodyLinks {
		about?: string | null;
		contact?: string | null;
		privacy?: string | null;
		support?: string | null;
	}
	export interface PatchOrganizationPatchBodyLinksFormProperties {
		about: FormControl<string | null | undefined>,
		contact: FormControl<string | null | undefined>,
		privacy: FormControl<string | null | undefined>,
		support: FormControl<string | null | undefined>,
	}
	export function CreatePatchOrganizationPatchBodyLinksFormGroup() {
		return new FormGroup<PatchOrganizationPatchBodyLinksFormProperties>({
			about: new FormControl<string | null | undefined>(undefined),
			contact: new FormControl<string | null | undefined>(undefined),
			privacy: new FormControl<string | null | undefined>(undefined),
			support: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchOrganizationPatchBodySupport {
		business_hours?: string | null;
		chat?: PatchOrganizationPatchBodySupportChat;
		contact_number?: string | null;
		email?: string | null;
	}
	export interface PatchOrganizationPatchBodySupportFormProperties {
		business_hours: FormControl<string | null | undefined>,
		contact_number: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
	}
	export function CreatePatchOrganizationPatchBodySupportFormGroup() {
		return new FormGroup<PatchOrganizationPatchBodySupportFormProperties>({
			business_hours: new FormControl<string | null | undefined>(undefined),
			contact_number: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchOrganizationPatchBodySupportChat {
		type?: string | null;
		value?: string | null;
	}
	export interface PatchOrganizationPatchBodySupportChatFormProperties {
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreatePatchOrganizationPatchBodySupportChatFormGroup() {
		return new FormGroup<PatchOrganizationPatchBodySupportChatFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchOrganizationPatchBodyTheme {
		colors?: PatchOrganizationPatchBodyThemeColors;
	}
	export interface PatchOrganizationPatchBodyThemeFormProperties {
	}
	export function CreatePatchOrganizationPatchBodyThemeFormGroup() {
		return new FormGroup<PatchOrganizationPatchBodyThemeFormProperties>({
		});

	}

	export interface PatchOrganizationPatchBodyThemeColors {
		primary?: string | null;
		secondary?: string | null;
	}
	export interface PatchOrganizationPatchBodyThemeColorsFormProperties {
		primary: FormControl<string | null | undefined>,
		secondary: FormControl<string | null | undefined>,
	}
	export function CreatePatchOrganizationPatchBodyThemeColorsFormGroup() {
		return new FormGroup<PatchOrganizationPatchBodyThemeColorsFormProperties>({
			primary: new FormControl<string | null | undefined>(undefined),
			secondary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatereservationPatchBody {

		/** Minimum: 1 */
		connector?: number | null;
		driver?: string | null;
		endDate?: string | null;

		/** Minimum: 1 */
		evse?: number | null;
	}
	export interface UpdatereservationPatchBodyFormProperties {

		/** Minimum: 1 */
		connector: FormControl<number | null | undefined>,
		driver: FormControl<string | null | undefined>,
		endDate: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		evse: FormControl<number | null | undefined>,
	}
	export function CreateUpdatereservationPatchBodyFormGroup() {
		return new FormGroup<UpdatereservationPatchBodyFormProperties>({
			connector: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			driver: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			evse: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface GetTokensReturn {
		message?: string | null;
		ok?: boolean | null;
		result?: Array<string>;
	}
	export interface GetTokensReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateGetTokensReturnFormGroup() {
		return new FormGroup<GetTokensReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PostTokensPostBody {

		/** Required */
		active: boolean;

		/** Required */
		channel: PostDriversPostBodySource;

		/** Required */
		driver: string;

		/** Required */
		physicalId: string;
		type?: string | null;
	}
	export interface PostTokensPostBodyFormProperties {

		/** Required */
		active: FormControl<boolean | null | undefined>,

		/** Required */
		channel: FormControl<PostDriversPostBodySource | null | undefined>,

		/** Required */
		driver: FormControl<string | null | undefined>,

		/** Required */
		physicalId: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePostTokensPostBodyFormGroup() {
		return new FormGroup<PostTokensPostBodyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			channel: new FormControl<PostDriversPostBodySource | null | undefined>(undefined, [Validators.required]),
			driver: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			physicalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchTokenPatchBody {
		active?: boolean | null;
		channel?: PostDriversPostBodySource | null;
		driver?: string | null;
		physicalId?: string | null;
		type?: string | null;
	}
	export interface PatchTokenPatchBodyFormProperties {
		active: FormControl<boolean | null | undefined>,
		channel: FormControl<PostDriversPostBodySource | null | undefined>,
		driver: FormControl<string | null | undefined>,
		physicalId: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePatchTokenPatchBodyFormGroup() {
		return new FormGroup<PatchTokenPatchBodyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			channel: new FormControl<PostDriversPostBodySource | null | undefined>(undefined),
			driver: new FormControl<string | null | undefined>(undefined),
			physicalId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetTransactionsStatus { Started = 'Started', Ended = 'Ended' }

	export interface GetTransactionsReturn {
		hasNext?: boolean | null;
		hasPrevious?: boolean | null;
		message?: string | null;
		ok?: boolean | null;
		result?: Array<string>;
	}
	export interface GetTransactionsReturnFormProperties {
		hasNext: FormControl<boolean | null | undefined>,
		hasPrevious: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateGetTransactionsReturnFormGroup() {
		return new FormGroup<GetTransactionsReturnFormProperties>({
			hasNext: new FormControl<boolean | null | undefined>(undefined),
			hasPrevious: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetVehiclesReturn {
		message?: string | null;
		ok?: boolean | null;
		result?: Array<string>;
	}
	export interface GetVehiclesReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateGetVehiclesReturnFormGroup() {
		return new FormGroup<GetVehiclesReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PostChargePostBody {

		/** Required */
		action: PostChargePostBodyAction;
	}
	export interface PostChargePostBodyFormProperties {

		/** Required */
		action: FormControl<PostChargePostBodyAction | null | undefined>,
	}
	export function CreatePostChargePostBodyFormGroup() {
		return new FormGroup<PostChargePostBodyFormProperties>({
			action: new FormControl<PostChargePostBodyAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PostChargePostBodyAction { START = 'START', STOP = 'STOP' }

	export interface PostChargeReturn {
		message?: string | null;
		ok?: boolean | null;
		result?: string | null;
	}
	export interface PostChargeReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		result: FormControl<string | null | undefined>,
	}
	export function CreatePostChargeReturnFormGroup() {
		return new FormGroup<PostChargeReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

}

