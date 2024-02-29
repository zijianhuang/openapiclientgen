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
		 * List Factions
		 * List all discovered factions in the game.
		 * Get factions
		 * @param {number} page What entry offset to request
		 *     Minimum: 1
		 * @param {number} limit How many entries to return per page
		 *     Minimum: 1    Maximum: 20
		 */
		Get_factions(page: number | null | undefined, limit: number | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'factions?page=' + page + '&limit=' + limit, { responseType: 'text' });
		}

		/**
		 * Get Faction
		 * View the details of a faction.
		 * Get factions/{factionSymbol}
		 * @return {string} OK
		 */
		Get_faction(): Observable<string> {
			return this.http.get(this.baseUri + 'factions/{factionSymbol}', { responseType: 'text' });
		}

		/**
		 * My Agent Details
		 * Fetch your agent's details.
		 * Get my/agent
		 * @return {string} OK
		 */
		Get_my_agent(): Observable<string> {
			return this.http.get(this.baseUri + 'my/agent', { responseType: 'text' });
		}

		/**
		 * List Contracts
		 * List all of your contracts.
		 * Get my/contracts
		 * @param {number} page What entry offset to request
		 *     Minimum: 1
		 * @param {number} limit How many entries to return per page
		 *     Minimum: 1    Maximum: 20
		 * @return {string} OK
		 */
		Get_contracts(page: number | null | undefined, limit: number | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'my/contracts?page=' + page + '&limit=' + limit, { responseType: 'text' });
		}

		/**
		 * Get Contract
		 * Get the details of a contract by ID.
		 * Get my/contracts/{contractId}
		 * @return {string} OK
		 */
		Get_contract(): Observable<string> {
			return this.http.get(this.baseUri + 'my/contracts/{contractId}', { responseType: 'text' });
		}

		/**
		 * Accept Contract
		 * Accept a contract.
		 * Post my/contracts/{contractId}/accept
		 * @return {Accept_contractReturn} OK
		 */
		Accept_contract(): Observable<Accept_contractReturn> {
			return this.http.post<Accept_contractReturn>(this.baseUri + 'my/contracts/{contractId}/accept', null, {});
		}

		/**
		 * Deliver Contract
		 * Deliver cargo on a given contract.
		 * Post my/contracts/{contractId}/deliver
		 * @return {Deliver_contractReturn} OK
		 */
		Deliver_contract(requestBody: Deliver_contractPostBody): Observable<Deliver_contractReturn> {
			return this.http.post<Deliver_contractReturn>(this.baseUri + 'my/contracts/{contractId}/deliver', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fulfill Contract
		 * Fulfill a contract
		 * Post my/contracts/{contractId}/fulfill
		 * @return {Fulfill_contractReturn} OK
		 */
		Fulfill_contract(): Observable<Fulfill_contractReturn> {
			return this.http.post<Fulfill_contractReturn>(this.baseUri + 'my/contracts/{contractId}/fulfill', null, {});
		}

		/**
		 * List Ships
		 * Retrieve all of your ships.
		 * Get my/ships
		 * @param {number} page What entry offset to request
		 *     Minimum: 1
		 * @param {number} limit How many entries to return per page
		 *     Minimum: 1    Maximum: 20
		 * @return {string} OK
		 */
		Get_my_ships(page: number | null | undefined, limit: number | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'my/ships?page=' + page + '&limit=' + limit, { responseType: 'text' });
		}

		/**
		 * Purchase Ship
		 * Purchase a ship
		 * Post my/ships
		 * @return {void} 
		 */
		Purchase_ship(requestBody: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'my/ships', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Ship
		 * Retrieve the details of your ship.
		 * Get my/ships/{shipSymbol}
		 * @return {string} OK
		 */
		Get_my_ship(): Observable<string> {
			return this.http.get(this.baseUri + 'my/ships/{shipSymbol}', { responseType: 'text' });
		}

		/**
		 * Get Ship Cargo
		 * Retrieve the cargo of your ship.
		 * Get my/ships/{shipSymbol}/cargo
		 * @return {string} OK
		 */
		Get_my_ship_cargo(): Observable<string> {
			return this.http.get(this.baseUri + 'my/ships/{shipSymbol}/cargo', { responseType: 'text' });
		}

		/**
		 * Create Chart
		 * Command a ship to chart the current waypoint.
		 * Waypoints in the universe are uncharted by default. These locations will not show up in the API until they have been charted by a ship.
		 * Charting a location will record your agent as the one who created the chart.
		 * Post my/ships/{shipSymbol}/chart
		 * @return {void} 
		 */
		Create_chart(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'my/ships/{shipSymbol}/chart', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Ship Cooldown
		 * Retrieve the details of your ship's reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.
		 * Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.
		 * Response returns a 204 status code (no-content) when the ship has no cooldown.
		 * Get my/ships/{shipSymbol}/cooldown
		 * @return {string} OK
		 */
		Get_ship_cooldown(): Observable<string> {
			return this.http.get(this.baseUri + 'my/ships/{shipSymbol}/cooldown', { responseType: 'text' });
		}

		/**
		 * Dock Ship
		 * Attempt to dock your ship at it's current location. Docking will only succeed if the waypoint is a dockable location, and your ship is capable of docking at the time of the request.
		 * The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
		 * Post my/ships/{shipSymbol}/dock
		 * @return {Dock_shipReturn} The ship has successfully docked at it's current location.
		 */
		Dock_ship(): Observable<Dock_shipReturn> {
			return this.http.post<Dock_shipReturn>(this.baseUri + 'my/ships/{shipSymbol}/dock', null, {});
		}

		/**
		 * Extract Resources
		 * Extract resources from the waypoint into your ship. Send an optional survey as the payload to target specific yields.
		 * Post my/ships/{shipSymbol}/extract
		 * @return {void} 
		 */
		Extract_resources(requestBody: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'my/ships/{shipSymbol}/extract', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Jettison Cargo
		 * Jettison cargo from your ship's cargo hold.
		 * Post my/ships/{shipSymbol}/jettison
		 * @return {JettisonReturn} OK
		 */
		Jettison(requestBody: JettisonPostBody): Observable<JettisonReturn> {
			return this.http.post<JettisonReturn>(this.baseUri + 'my/ships/{shipSymbol}/jettison', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Jump Ship
		 * Jump your ship instantly to a target system. Unlike other forms of navigation, jumping requires a unit of antimatter.
		 * Post my/ships/{shipSymbol}/jump
		 * @return {Jump_shipReturn} OK
		 */
		Jump_ship(requestBody: Jump_shipPostBody): Observable<Jump_shipReturn> {
			return this.http.post<Jump_shipReturn>(this.baseUri + 'my/ships/{shipSymbol}/jump', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Ship Nav
		 * Get the current nav status of a ship.
		 * Get my/ships/{shipSymbol}/nav
		 * @return {string} The current nav status of the ship.
		 */
		Get_ship_nav(): Observable<string> {
			return this.http.get(this.baseUri + 'my/ships/{shipSymbol}/nav', { responseType: 'text' });
		}

		/**
		 * Patch Ship Nav
		 * Update the nav data of a ship, such as the flight mode.
		 * Patch my/ships/{shipSymbol}/nav
		 * @return {string} The updated nav status of the ship.
		 */
		Patch_ship_nav(requestBody: string): Observable<string> {
			return this.http.patch(this.baseUri + 'my/ships/{shipSymbol}/nav', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Navigate Ship
		 * Navigate to a target destination. The destination must be located within the same system as the ship. Navigating will consume the necessary fuel and supplies from the ship's manifest, and will pay out crew wages from the agent's account.
		 * The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it's destination.
		 * To travel between systems, see the ship's warp or jump actions.
		 * Post my/ships/{shipSymbol}/navigate
		 * @return {Navigate_shipReturn} The successful transit information including the route details and changes to ship fuel, supplies, and crew wages paid. The route includes the expected time of arrival.
		 */
		Navigate_ship(requestBody: Navigate_shipPostBody): Observable<Navigate_shipReturn> {
			return this.http.post<Navigate_shipReturn>(this.baseUri + 'my/ships/{shipSymbol}/navigate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Orbit Ship
		 * Attempt to move your ship into orbit at it's current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.
		 * The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
		 * Post my/ships/{shipSymbol}/orbit
		 * @return {Orbit_shipReturn} The ship has successfully moved into orbit at it's current location.
		 */
		Orbit_ship(): Observable<Orbit_shipReturn> {
			return this.http.post<Orbit_shipReturn>(this.baseUri + 'my/ships/{shipSymbol}/orbit', null, {});
		}

		/**
		 * Purchase Cargo
		 * Purchase cargo.
		 * Post my/ships/{shipSymbol}/purchase
		 * @return {void} 
		 */
		Purchase_cargo(requestBody: Purchase_cargoPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'my/ships/{shipSymbol}/purchase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Ship Refine
		 * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request.
		 * Post my/ships/{shipSymbol}/refine
		 * @return {Ship_refineReturn} The ship has successfully started refining.
		 */
		Ship_refine(requestBody: Ship_refinePostBody): Observable<Ship_refineReturn> {
			return this.http.post<Ship_refineReturn>(this.baseUri + 'my/ships/{shipSymbol}/refine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Refuel Ship
		 * Refuel your ship from the local market.
		 * Post my/ships/{shipSymbol}/refuel
		 * @return {Refuel_shipReturn} OK
		 */
		Refuel_ship(): Observable<Refuel_shipReturn> {
			return this.http.post<Refuel_shipReturn>(this.baseUri + 'my/ships/{shipSymbol}/refuel', null, {});
		}

		/**
		 * Scan Ships
		 * Activate your ship's sensor arrays to scan for ship information.
		 * Post my/ships/{shipSymbol}/scan/ships
		 * @return {void} 
		 */
		Create_ship_ship_scan(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'my/ships/{shipSymbol}/scan/ships', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Scan Systems
		 * Activate your ship's sensor arrays to scan for system information.
		 * Post my/ships/{shipSymbol}/scan/systems
		 * @return {void} 
		 */
		Create_ship_system_scan(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'my/ships/{shipSymbol}/scan/systems', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Scan Waypoints
		 * Activate your ship's sensor arrays to scan for waypoint information.
		 * Post my/ships/{shipSymbol}/scan/waypoints
		 * @return {void} 
		 */
		Create_ship_waypoint_scan(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'my/ships/{shipSymbol}/scan/waypoints', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sell Cargo
		 * Sell cargo.
		 * Post my/ships/{shipSymbol}/sell
		 * @return {void} 
		 */
		Sell_cargo(requestBody: Sell_cargoPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'my/ships/{shipSymbol}/sell', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Survey
		 * If you want to target specific yields for an extraction, you can survey a waypoint, such as an asteroid field, and send the survey in the body of the extract request. Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.
		 * Your ship will enter a cooldown between consecutive survey requests. Surveys will eventually expire after a period of time. Multiple ships can use the same survey for extraction.
		 * Post my/ships/{shipSymbol}/survey
		 * @return {void} 
		 */
		Create_survey(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'my/ships/{shipSymbol}/survey', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Transfer Cargo
		 * Transfer cargo between ships.
		 * Post my/ships/{shipSymbol}/transfer
		 * @return {Transfer_cargoReturn} Created
		 */
		Transfer_cargo(requestBody: Transfer_cargoPostBody): Observable<Transfer_cargoReturn> {
			return this.http.post<Transfer_cargoReturn>(this.baseUri + 'my/ships/{shipSymbol}/transfer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Warp Ship
		 * Warp your ship to a target destination in another system. Warping will consume the necessary fuel and supplies from the ship's manifest, and will pay out crew wages from the agent's account.
		 * The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it's destination.
		 * Post my/ships/{shipSymbol}/warp
		 * @return {Warp_shipReturn} The successful transit information including the route details and changes to ship fuel, supplies, and crew wages paid. The route includes the expected time of arrival.
		 */
		Warp_ship(requestBody: Warp_shipPostBody): Observable<Warp_shipReturn> {
			return this.http.post<Warp_shipReturn>(this.baseUri + 'my/ships/{shipSymbol}/warp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Register New Agent
		 * Creates a new agent and ties it to a temporary Account.
		 * The agent symbol is a 3-14 character string that will represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.
		 * A new agent will be granted an authorization token, a contract with their starting faction, a command ship with a jump drive, and one hundred thousand credits.
		 * > #### Keep your token safe and secure
		 * >
		 * > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.
		 * You can accept your contract using the `/my/contracts/{contractId}/accept` endpoint. You will want to navigate your command ship to a nearby asteroid field and execute the `/my/ships/{shipSymbol}/extract` endpoint to mine various types of ores and minerals.
		 * Return to the contract destination and execute the `/my/ships/{shipSymbol}/deliver` endpoint to deposit goods into the contract.
		 * When your contract is fulfilled, you can call `/my/contracts/{contractId}/fulfill` to retrieve payment.
		 * Post register
		 * @return {void} 
		 */
		Register(requestBody: RegisterPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'register', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Systems
		 * Return a list of all systems.
		 * Get systems
		 * @param {number} page What entry offset to request
		 *     Minimum: 1
		 * @param {number} limit How many entries to return per page
		 *     Minimum: 1    Maximum: 20
		 * @return {Get_systemsReturn} OK
		 */
		Get_systems(page: number | null | undefined, limit: number | null | undefined): Observable<Get_systemsReturn> {
			return this.http.get<Get_systemsReturn>(this.baseUri + 'systems?page=' + page + '&limit=' + limit, {});
		}

		/**
		 * Get System
		 * Get the details of a system.
		 * Get systems/{systemSymbol}
		 * @return {string} OK
		 */
		Get_system(): Observable<string> {
			return this.http.get(this.baseUri + 'systems/{systemSymbol}', { responseType: 'text' });
		}

		/**
		 * List Waypoints
		 * Fetch all of the waypoints for a given system. System must be charted or a ship must be present to return waypoint details.
		 * Get systems/{systemSymbol}/waypoints
		 * @param {number} page What entry offset to request
		 *     Minimum: 1
		 * @param {number} limit How many entries to return per page
		 *     Minimum: 1    Maximum: 20
		 * @return {string} OK
		 */
		Get_system_waypoints(page: number | null | undefined, limit: number | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'systems/{systemSymbol}/waypoints?page=' + page + '&limit=' + limit, { responseType: 'text' });
		}

		/**
		 * Get Waypoint
		 * View the details of a waypoint.
		 * Get systems/{systemSymbol}/waypoints/{waypointSymbol}
		 * @return {string} OK
		 */
		Get_waypoint(): Observable<string> {
			return this.http.get(this.baseUri + 'systems/{systemSymbol}/waypoints/{waypointSymbol}', { responseType: 'text' });
		}

		/**
		 * Get Jump Gate
		 * Get jump gate details for a waypoint.
		 * Get systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate
		 * @return {Get_jump_gateReturn} OK
		 */
		Get_jump_gate(): Observable<Get_jump_gateReturn> {
			return this.http.get<Get_jump_gateReturn>(this.baseUri + 'systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate', {});
		}

		/**
		 * Get Market
		 * Retrieve imports, exports and exchange data from a marketplace. Imports can be sold, exports can be purchased, and exchange goods can be purchased or sold. Send a ship to the waypoint to access trade good prices and recent transactions.
		 * Get systems/{systemSymbol}/waypoints/{waypointSymbol}/market
		 * @return {Get_marketReturn} OK
		 */
		Get_market(): Observable<Get_marketReturn> {
			return this.http.get<Get_marketReturn>(this.baseUri + 'systems/{systemSymbol}/waypoints/{waypointSymbol}/market', {});
		}

		/**
		 * Get Shipyard
		 * Get the shipyard for a waypoint. Send a ship to the waypoint to access ships that are currently available for purchase and recent transactions.
		 * Get systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard
		 * @return {Get_shipyardReturn} OK
		 */
		Get_shipyard(): Observable<Get_shipyardReturn> {
			return this.http.get<Get_shipyardReturn>(this.baseUri + 'systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard', {});
		}
	}

	export interface Accept_contractReturn {

		/** Required */
		data: string;
	}
	export interface Accept_contractReturnFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
	}
	export function CreateAccept_contractReturnFormGroup() {
		return new FormGroup<Accept_contractReturnFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Deliver_contractPostBody {

		/** Required */
		shipSymbol: string;

		/** Required */
		tradeSymbol: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		units: number;
	}
	export interface Deliver_contractPostBodyFormProperties {

		/** Required */
		shipSymbol: FormControl<string | null | undefined>,

		/** Required */
		tradeSymbol: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		units: FormControl<number | null | undefined>,
	}
	export function CreateDeliver_contractPostBodyFormGroup() {
		return new FormGroup<Deliver_contractPostBodyFormProperties>({
			shipSymbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tradeSymbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			units: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Deliver_contractReturn {

		/** Required */
		data: string;
	}
	export interface Deliver_contractReturnFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
	}
	export function CreateDeliver_contractReturnFormGroup() {
		return new FormGroup<Deliver_contractReturnFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Fulfill_contractReturn {

		/** Required */
		data: string;
	}
	export interface Fulfill_contractReturnFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
	}
	export function CreateFulfill_contractReturnFormGroup() {
		return new FormGroup<Fulfill_contractReturnFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Dock_shipReturn {

		/** Required */
		data: string;
	}
	export interface Dock_shipReturnFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
	}
	export function CreateDock_shipReturnFormGroup() {
		return new FormGroup<Dock_shipReturnFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JettisonPostBody {

		/** Required */
		symbol: string;

		/**
		 * Required
		 * Minimum: 1
		 */
		units: number;
	}
	export interface JettisonPostBodyFormProperties {

		/** Required */
		symbol: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		units: FormControl<number | null | undefined>,
	}
	export function CreateJettisonPostBodyFormGroup() {
		return new FormGroup<JettisonPostBodyFormProperties>({
			symbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			units: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface JettisonReturn {

		/** Required */
		data: string;
	}
	export interface JettisonReturnFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
	}
	export function CreateJettisonReturnFormGroup() {
		return new FormGroup<JettisonReturnFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Jump_shipPostBody {

		/**
		 * The system symbol to jump to.
		 * Required
		 */
		systemSymbol: string;
	}
	export interface Jump_shipPostBodyFormProperties {

		/**
		 * The system symbol to jump to.
		 * Required
		 */
		systemSymbol: FormControl<string | null | undefined>,
	}
	export function CreateJump_shipPostBodyFormGroup() {
		return new FormGroup<Jump_shipPostBodyFormProperties>({
			systemSymbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Jump_shipReturn {

		/** Required */
		data: string;
	}
	export interface Jump_shipReturnFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
	}
	export function CreateJump_shipReturnFormGroup() {
		return new FormGroup<Jump_shipReturnFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Navigate_shipPostBody {

		/**
		 * The target destination.
		 * Required
		 */
		waypointSymbol: string;
	}
	export interface Navigate_shipPostBodyFormProperties {

		/**
		 * The target destination.
		 * Required
		 */
		waypointSymbol: FormControl<string | null | undefined>,
	}
	export function CreateNavigate_shipPostBodyFormGroup() {
		return new FormGroup<Navigate_shipPostBodyFormProperties>({
			waypointSymbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Navigate_shipReturn {

		/** Required */
		data: string;
	}
	export interface Navigate_shipReturnFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
	}
	export function CreateNavigate_shipReturnFormGroup() {
		return new FormGroup<Navigate_shipReturnFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Orbit_shipReturn {

		/** Required */
		data: string;
	}
	export interface Orbit_shipReturnFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
	}
	export function CreateOrbit_shipReturnFormGroup() {
		return new FormGroup<Orbit_shipReturnFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Purchase_cargoPostBody {

		/** Required */
		symbol: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		units: number;
	}
	export interface Purchase_cargoPostBodyFormProperties {

		/** Required */
		symbol: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		units: FormControl<number | null | undefined>,
	}
	export function CreatePurchase_cargoPostBodyFormGroup() {
		return new FormGroup<Purchase_cargoPostBodyFormProperties>({
			symbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			units: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Ship_refinePostBody {

		/** Required */
		produce: Ship_refinePostBodyProduce;
	}
	export interface Ship_refinePostBodyFormProperties {

		/** Required */
		produce: FormControl<Ship_refinePostBodyProduce | null | undefined>,
	}
	export function CreateShip_refinePostBodyFormGroup() {
		return new FormGroup<Ship_refinePostBodyFormProperties>({
			produce: new FormControl<Ship_refinePostBodyProduce | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Ship_refinePostBodyProduce { IRON = 'IRON', COPPER = 'COPPER', SILVER = 'SILVER', GOLD = 'GOLD', ALUMINUM = 'ALUMINUM', PLATINUM = 'PLATINUM', URANITE = 'URANITE', MERITIUM = 'MERITIUM', FUEL = 'FUEL' }

	export interface Ship_refineReturn {

		/** Required */
		data: string;
	}
	export interface Ship_refineReturnFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
	}
	export function CreateShip_refineReturnFormGroup() {
		return new FormGroup<Ship_refineReturnFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Refuel_shipReturn {

		/** Required */
		data: string;
	}
	export interface Refuel_shipReturnFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
	}
	export function CreateRefuel_shipReturnFormGroup() {
		return new FormGroup<Refuel_shipReturnFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Sell_cargoPostBody {

		/** Required */
		symbol: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		units: number;
	}
	export interface Sell_cargoPostBodyFormProperties {

		/** Required */
		symbol: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		units: FormControl<number | null | undefined>,
	}
	export function CreateSell_cargoPostBodyFormGroup() {
		return new FormGroup<Sell_cargoPostBodyFormProperties>({
			symbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			units: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Transfer_cargoPostBody {

		/** Required */
		shipSymbol: string;

		/** Required */
		tradeSymbol: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		units: number;
	}
	export interface Transfer_cargoPostBodyFormProperties {

		/** Required */
		shipSymbol: FormControl<string | null | undefined>,

		/** Required */
		tradeSymbol: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		units: FormControl<number | null | undefined>,
	}
	export function CreateTransfer_cargoPostBodyFormGroup() {
		return new FormGroup<Transfer_cargoPostBodyFormProperties>({
			shipSymbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tradeSymbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			units: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Transfer_cargoReturn {

		/** Required */
		data: string;
	}
	export interface Transfer_cargoReturnFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
	}
	export function CreateTransfer_cargoReturnFormGroup() {
		return new FormGroup<Transfer_cargoReturnFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Warp_shipPostBody {

		/**
		 * The target destination.
		 * Required
		 */
		waypointSymbol: string;
	}
	export interface Warp_shipPostBodyFormProperties {

		/**
		 * The target destination.
		 * Required
		 */
		waypointSymbol: FormControl<string | null | undefined>,
	}
	export function CreateWarp_shipPostBodyFormGroup() {
		return new FormGroup<Warp_shipPostBodyFormProperties>({
			waypointSymbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Warp_shipReturn {

		/** Required */
		data: string;
	}
	export interface Warp_shipReturnFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
	}
	export function CreateWarp_shipReturnFormGroup() {
		return new FormGroup<Warp_shipReturnFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterPostBody {

		/**
		 * The faction you choose determines your headquarters.
		 * Required
		 */
		faction: RegisterPostBodyFaction;

		/**
		 * How other agents will see your ships and information.
		 * Required
		 * Min length: 3
		 * Max length: 14
		 */
		symbol: string;
	}
	export interface RegisterPostBodyFormProperties {

		/**
		 * The faction you choose determines your headquarters.
		 * Required
		 */
		faction: FormControl<RegisterPostBodyFaction | null | undefined>,

		/**
		 * How other agents will see your ships and information.
		 * Required
		 * Min length: 3
		 * Max length: 14
		 */
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateRegisterPostBodyFormGroup() {
		return new FormGroup<RegisterPostBodyFormProperties>({
			faction: new FormControl<RegisterPostBodyFaction | null | undefined>(undefined, [Validators.required]),
			symbol: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(14)]),
		});

	}

	export enum RegisterPostBodyFaction { COSMIC = 'COSMIC', VOID = 'VOID', GALACTIC = 'GALACTIC', QUANTUM = 'QUANTUM', DOMINION = 'DOMINION' }

	export interface Get_systemsReturn {

		/** Required */
		Get_systemsReturnData: Array<Get_systemsReturnData>;

		/** Required */
		meta: Get_systemsReturnMeta;
	}
	export interface Get_systemsReturnFormProperties {
	}
	export function CreateGet_systemsReturnFormGroup() {
		return new FormGroup<Get_systemsReturnFormProperties>({
		});

	}

	export interface Get_systemsReturnData {

		/** Required */
		Get_systemsReturnDataFactions: Array<Get_systemsReturnDataFactions>;

		/**
		 * Required
		 * Min length: 1
		 */
		sectorSymbol: string;

		/**
		 * Required
		 * Min length: 1
		 */
		symbol: string;

		/**
		 * The type of waypoint.
		 * Required
		 */
		type: Get_systemsReturnDataType;

		/** Required */
		waypoints: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y: number;
	}
	export interface Get_systemsReturnDataFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		sectorSymbol: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		symbol: FormControl<string | null | undefined>,

		/**
		 * The type of waypoint.
		 * Required
		 */
		type: FormControl<Get_systemsReturnDataType | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGet_systemsReturnDataFormGroup() {
		return new FormGroup<Get_systemsReturnDataFormProperties>({
			sectorSymbol: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			symbol: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			type: new FormControl<Get_systemsReturnDataType | null | undefined>(undefined, [Validators.required]),
			x: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			y: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Get_systemsReturnDataFactions {

		/**
		 * Required
		 * Min length: 1
		 */
		symbol: string;
	}
	export interface Get_systemsReturnDataFactionsFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateGet_systemsReturnDataFactionsFormGroup() {
		return new FormGroup<Get_systemsReturnDataFactionsFormProperties>({
			symbol: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export enum Get_systemsReturnDataType { NEUTRON_STAR = 'NEUTRON_STAR', RED_STAR = 'RED_STAR', ORANGE_STAR = 'ORANGE_STAR', BLUE_STAR = 'BLUE_STAR', YOUNG_STAR = 'YOUNG_STAR', WHITE_DWARF = 'WHITE_DWARF', BLACK_HOLE = 'BLACK_HOLE', HYPERGIANT = 'HYPERGIANT', NEBULA = 'NEBULA', UNSTABLE = 'UNSTABLE' }

	export interface Get_systemsReturnMeta {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface Get_systemsReturnMetaFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGet_systemsReturnMetaFormGroup() {
		return new FormGroup<Get_systemsReturnMetaFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Get_jump_gateReturn {

		/** Required */
		data: Get_jump_gateReturnData;
	}
	export interface Get_jump_gateReturnFormProperties {
	}
	export function CreateGet_jump_gateReturnFormGroup() {
		return new FormGroup<Get_jump_gateReturnFormProperties>({
		});

	}

	export interface Get_jump_gateReturnData {

		/**
		 * The systems within range of the gate that have a corresponding gate.
		 * Required
		 */
		connectedSystems: Array<string>;

		/** The symbol of the faction that owns the gate. */
		factionSymbol?: string | null;

		/**
		 * The maximum jump range of the gate.
		 * Required
		 * Type: double
		 */
		jumpRange: number;
	}
	export interface Get_jump_gateReturnDataFormProperties {

		/** The symbol of the faction that owns the gate. */
		factionSymbol: FormControl<string | null | undefined>,

		/**
		 * The maximum jump range of the gate.
		 * Required
		 * Type: double
		 */
		jumpRange: FormControl<number | null | undefined>,
	}
	export function CreateGet_jump_gateReturnDataFormGroup() {
		return new FormGroup<Get_jump_gateReturnDataFormProperties>({
			factionSymbol: new FormControl<string | null | undefined>(undefined),
			jumpRange: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Get_marketReturn {

		/** Required */
		data: Get_marketReturnData;
	}
	export interface Get_marketReturnFormProperties {
	}
	export function CreateGet_marketReturnFormGroup() {
		return new FormGroup<Get_marketReturnFormProperties>({
		});

	}

	export interface Get_marketReturnData {

		/**
		 * The list of goods that are bought and sold between agents at this market.
		 * Required
		 */
		exchange: Array<string>;

		/**
		 * The list of goods that are exported from this market.
		 * Required
		 */
		Get_marketReturnDataExports: Array<Get_marketReturnDataExports>;

		/**
		 * The list of goods that are sought as imports in this market.
		 * Required
		 */
		imports: Array<string>;

		/**
		 * The symbol of the market. The symbol is the same as the waypoint where the market is located.
		 * Required
		 */
		symbol: string;

		/** The list of goods that are traded at this market. Visible only when a ship is present at the market. */
		Get_marketReturnDataTradeGoods?: Array<Get_marketReturnDataTradeGoods>;

		/** The list of recent transactions at this market. Visible only when a ship is present at the market. */
		Get_marketReturnDataTransactions?: Array<Get_marketReturnDataTransactions>;
	}
	export interface Get_marketReturnDataFormProperties {

		/**
		 * The symbol of the market. The symbol is the same as the waypoint where the market is located.
		 * Required
		 */
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateGet_marketReturnDataFormGroup() {
		return new FormGroup<Get_marketReturnDataFormProperties>({
			symbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Get_marketReturnDataExports {

		/** Required */
		description: string;

		/** Required */
		name: string;

		/** Required */
		symbol: Get_marketReturnDataExportsSymbol;
	}
	export interface Get_marketReturnDataExportsFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		symbol: FormControl<Get_marketReturnDataExportsSymbol | null | undefined>,
	}
	export function CreateGet_marketReturnDataExportsFormGroup() {
		return new FormGroup<Get_marketReturnDataExportsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			symbol: new FormControl<Get_marketReturnDataExportsSymbol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Get_marketReturnDataExportsSymbol { PRECIOUS_STONES = 'PRECIOUS_STONES', QUARTZ_SAND = 'QUARTZ_SAND', SILICON_CRYSTALS = 'SILICON_CRYSTALS', AMMONIA_ICE = 'AMMONIA_ICE', LIQUID_HYDROGEN = 'LIQUID_HYDROGEN', LIQUID_NITROGEN = 'LIQUID_NITROGEN', ICE_WATER = 'ICE_WATER', EXOTIC_MATTER = 'EXOTIC_MATTER', ADVANCED_CIRCUITRY = 'ADVANCED_CIRCUITRY', GRAVITON_EMITTERS = 'GRAVITON_EMITTERS', IRON = 'IRON', IRON_ORE = 'IRON_ORE', COPPER = 'COPPER', COPPER_ORE = 'COPPER_ORE', ALUMINUM = 'ALUMINUM', ALUMINUM_ORE = 'ALUMINUM_ORE', SILVER = 'SILVER', SILVER_ORE = 'SILVER_ORE', GOLD = 'GOLD', GOLD_ORE = 'GOLD_ORE', PLATINUM = 'PLATINUM', PLATINUM_ORE = 'PLATINUM_ORE', DIAMONDS = 'DIAMONDS', URANITE = 'URANITE', URANITE_ORE = 'URANITE_ORE', MERITIUM = 'MERITIUM', MERITIUM_ORE = 'MERITIUM_ORE', HYDROCARBON = 'HYDROCARBON', ANTIMATTER = 'ANTIMATTER', FERTILIZERS = 'FERTILIZERS', FABRICS = 'FABRICS', FOOD = 'FOOD', JEWELRY = 'JEWELRY', MACHINERY = 'MACHINERY', FIREARMS = 'FIREARMS', ASSAULT_RIFLES = 'ASSAULT_RIFLES', MILITARY_EQUIPMENT = 'MILITARY_EQUIPMENT', EXPLOSIVES = 'EXPLOSIVES', LAB_INSTRUMENTS = 'LAB_INSTRUMENTS', AMMUNITION = 'AMMUNITION', ELECTRONICS = 'ELECTRONICS', SHIP_PLATING = 'SHIP_PLATING', EQUIPMENT = 'EQUIPMENT', FUEL = 'FUEL', MEDICINE = 'MEDICINE', DRUGS = 'DRUGS', CLOTHING = 'CLOTHING', MICROPROCESSORS = 'MICROPROCESSORS', PLASTICS = 'PLASTICS', POLYNUCLEOTIDES = 'POLYNUCLEOTIDES', BIOCOMPOSITES = 'BIOCOMPOSITES', NANOBOTS = 'NANOBOTS', AI_MAINFRAMES = 'AI_MAINFRAMES', QUANTUM_DRIVES = 'QUANTUM_DRIVES', ROBOTIC_DRONES = 'ROBOTIC_DRONES', CYBER_IMPLANTS = 'CYBER_IMPLANTS', GENE_THERAPEUTICS = 'GENE_THERAPEUTICS', NEURAL_CHIPS = 'NEURAL_CHIPS', MOOD_REGULATORS = 'MOOD_REGULATORS', VIRAL_AGENTS = 'VIRAL_AGENTS', MICRO_FUSION_GENERATORS = 'MICRO_FUSION_GENERATORS', SUPERGRAINS = 'SUPERGRAINS', LASER_RIFLES = 'LASER_RIFLES', HOLOGRAPHICS = 'HOLOGRAPHICS', SHIP_SALVAGE = 'SHIP_SALVAGE', RELIC_TECH = 'RELIC_TECH', NOVEL_LIFEFORMS = 'NOVEL_LIFEFORMS', BOTANICAL_SPECIMENS = 'BOTANICAL_SPECIMENS', CULTURAL_ARTIFACTS = 'CULTURAL_ARTIFACTS', REACTOR_SOLAR_I = 'REACTOR_SOLAR_I', REACTOR_FUSION_I = 'REACTOR_FUSION_I', REACTOR_FISSION_I = 'REACTOR_FISSION_I', REACTOR_CHEMICAL_I = 'REACTOR_CHEMICAL_I', REACTOR_ANTIMATTER_I = 'REACTOR_ANTIMATTER_I', ENGINE_IMPULSE_DRIVE_I = 'ENGINE_IMPULSE_DRIVE_I', ENGINE_ION_DRIVE_I = 'ENGINE_ION_DRIVE_I', ENGINE_ION_DRIVE_II = 'ENGINE_ION_DRIVE_II', ENGINE_HYPER_DRIVE_I = 'ENGINE_HYPER_DRIVE_I', MODULE_MINERAL_PROCESSOR_I = 'MODULE_MINERAL_PROCESSOR_I', MODULE_CARGO_HOLD_I = 'MODULE_CARGO_HOLD_I', MODULE_CREW_QUARTERS_I = 'MODULE_CREW_QUARTERS_I', MODULE_ENVOY_QUARTERS_I = 'MODULE_ENVOY_QUARTERS_I', MODULE_PASSENGER_CABIN_I = 'MODULE_PASSENGER_CABIN_I', MODULE_MICRO_REFINERY_I = 'MODULE_MICRO_REFINERY_I', MODULE_ORE_REFINERY_I = 'MODULE_ORE_REFINERY_I', MODULE_FUEL_REFINERY_I = 'MODULE_FUEL_REFINERY_I', MODULE_SCIENCE_LAB_I = 'MODULE_SCIENCE_LAB_I', MODULE_JUMP_DRIVE_I = 'MODULE_JUMP_DRIVE_I', MODULE_JUMP_DRIVE_II = 'MODULE_JUMP_DRIVE_II', MODULE_JUMP_DRIVE_III = 'MODULE_JUMP_DRIVE_III', MODULE_WARP_DRIVE_I = 'MODULE_WARP_DRIVE_I', MODULE_WARP_DRIVE_II = 'MODULE_WARP_DRIVE_II', MODULE_WARP_DRIVE_III = 'MODULE_WARP_DRIVE_III', MODULE_SHIELD_GENERATOR_I = 'MODULE_SHIELD_GENERATOR_I', MODULE_SHIELD_GENERATOR_II = 'MODULE_SHIELD_GENERATOR_II', MOUNT_GAS_SIPHON_I = 'MOUNT_GAS_SIPHON_I', MOUNT_GAS_SIPHON_II = 'MOUNT_GAS_SIPHON_II', MOUNT_GAS_SIPHON_III = 'MOUNT_GAS_SIPHON_III', MOUNT_SURVEYOR_I = 'MOUNT_SURVEYOR_I', MOUNT_SURVEYOR_II = 'MOUNT_SURVEYOR_II', MOUNT_SURVEYOR_III = 'MOUNT_SURVEYOR_III', MOUNT_SENSOR_ARRAY_I = 'MOUNT_SENSOR_ARRAY_I', MOUNT_SENSOR_ARRAY_II = 'MOUNT_SENSOR_ARRAY_II', MOUNT_SENSOR_ARRAY_III = 'MOUNT_SENSOR_ARRAY_III', MOUNT_MINING_LASER_I = 'MOUNT_MINING_LASER_I', MOUNT_MINING_LASER_II = 'MOUNT_MINING_LASER_II', MOUNT_MINING_LASER_III = 'MOUNT_MINING_LASER_III', MOUNT_LASER_CANNON_I = 'MOUNT_LASER_CANNON_I', MOUNT_MISSILE_LAUNCHER_I = 'MOUNT_MISSILE_LAUNCHER_I', MOUNT_TURRET_I = 'MOUNT_TURRET_I' }

	export interface Get_marketReturnDataTradeGoods {

		/**
		 * The price at which this good can be purchased from the market.
		 * Required
		 * Minimum: 0
		 */
		purchasePrice: number;

		/**
		 * The price at which this good can be sold to the market.
		 * Required
		 * Minimum: 0
		 */
		sellPrice: number;

		/**
		 * A rough estimate of the total supply of this good in the marketplace.
		 * Required
		 */
		supply: Get_marketReturnDataTradeGoodsSupply;

		/**
		 * The symbol of the trade good.
		 * Required
		 */
		symbol: string;

		/**
		 * The typical volume flowing through the market for this type of good. The larger the trade volume, the more stable prices will be.
		 * Required
		 * Minimum: 1
		 */
		tradeVolume: number;
	}
	export interface Get_marketReturnDataTradeGoodsFormProperties {

		/**
		 * The price at which this good can be purchased from the market.
		 * Required
		 * Minimum: 0
		 */
		purchasePrice: FormControl<number | null | undefined>,

		/**
		 * The price at which this good can be sold to the market.
		 * Required
		 * Minimum: 0
		 */
		sellPrice: FormControl<number | null | undefined>,

		/**
		 * A rough estimate of the total supply of this good in the marketplace.
		 * Required
		 */
		supply: FormControl<Get_marketReturnDataTradeGoodsSupply | null | undefined>,

		/**
		 * The symbol of the trade good.
		 * Required
		 */
		symbol: FormControl<string | null | undefined>,

		/**
		 * The typical volume flowing through the market for this type of good. The larger the trade volume, the more stable prices will be.
		 * Required
		 * Minimum: 1
		 */
		tradeVolume: FormControl<number | null | undefined>,
	}
	export function CreateGet_marketReturnDataTradeGoodsFormGroup() {
		return new FormGroup<Get_marketReturnDataTradeGoodsFormProperties>({
			purchasePrice: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			sellPrice: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			supply: new FormControl<Get_marketReturnDataTradeGoodsSupply | null | undefined>(undefined, [Validators.required]),
			symbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tradeVolume: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export enum Get_marketReturnDataTradeGoodsSupply { SCARCE = 'SCARCE', LIMITED = 'LIMITED', MODERATE = 'MODERATE', ABUNDANT = 'ABUNDANT' }

	export interface Get_marketReturnDataTransactions {

		/**
		 * The price per unit of the transaction.
		 * Required
		 * Minimum: 1
		 */
		pricePerUnit: number;

		/**
		 * The symbol of the ship that made the transaction.
		 * Required
		 */
		shipSymbol: string;

		/**
		 * The timestamp of the transaction.
		 * Required
		 */
		timestamp: Date;

		/**
		 * The total price of the transaction.
		 * Required
		 * Minimum: 1
		 */
		totalPrice: number;

		/**
		 * The symbol of the trade good.
		 * Required
		 */
		tradeSymbol: string;

		/**
		 * The type of transaction.
		 * Required
		 */
		type: Get_marketReturnDataTransactionsType;

		/**
		 * The number of units of the transaction.
		 * Required
		 * Minimum: 1
		 */
		units: number;

		/**
		 * The symbol of the waypoint where the transaction took place.
		 * Required
		 */
		waypointSymbol: string;
	}
	export interface Get_marketReturnDataTransactionsFormProperties {

		/**
		 * The price per unit of the transaction.
		 * Required
		 * Minimum: 1
		 */
		pricePerUnit: FormControl<number | null | undefined>,

		/**
		 * The symbol of the ship that made the transaction.
		 * Required
		 */
		shipSymbol: FormControl<string | null | undefined>,

		/**
		 * The timestamp of the transaction.
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,

		/**
		 * The total price of the transaction.
		 * Required
		 * Minimum: 1
		 */
		totalPrice: FormControl<number | null | undefined>,

		/**
		 * The symbol of the trade good.
		 * Required
		 */
		tradeSymbol: FormControl<string | null | undefined>,

		/**
		 * The type of transaction.
		 * Required
		 */
		type: FormControl<Get_marketReturnDataTransactionsType | null | undefined>,

		/**
		 * The number of units of the transaction.
		 * Required
		 * Minimum: 1
		 */
		units: FormControl<number | null | undefined>,

		/**
		 * The symbol of the waypoint where the transaction took place.
		 * Required
		 */
		waypointSymbol: FormControl<string | null | undefined>,
	}
	export function CreateGet_marketReturnDataTransactionsFormGroup() {
		return new FormGroup<Get_marketReturnDataTransactionsFormProperties>({
			pricePerUnit: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			shipSymbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			totalPrice: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			tradeSymbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Get_marketReturnDataTransactionsType | null | undefined>(undefined, [Validators.required]),
			units: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			waypointSymbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Get_marketReturnDataTransactionsType { PURCHASE = 'PURCHASE', SELL = 'SELL' }

	export interface Get_shipyardReturn {

		/** Required */
		data: Get_shipyardReturnData;
	}
	export interface Get_shipyardReturnFormProperties {
	}
	export function CreateGet_shipyardReturnFormGroup() {
		return new FormGroup<Get_shipyardReturnFormProperties>({
		});

	}

	export interface Get_shipyardReturnData {

		/**
		 * The list of ship types available for purchase at this shipyard.
		 * Required
		 */
		Get_shipyardReturnDataShipTypes: Array<Get_shipyardReturnDataShipTypes>;

		/** The ships that are currently available for purchase at the shipyard. */
		ships?: Array<string>;

		/**
		 * The symbol of the shipyard. The symbol is the same as the waypoint where the shipyard is located.
		 * Required
		 * Min length: 1
		 */
		symbol: string;

		/** The list of recent transactions at this shipyard. */
		Get_shipyardReturnDataTransactions?: Array<Get_shipyardReturnDataTransactions>;
	}
	export interface Get_shipyardReturnDataFormProperties {

		/**
		 * The symbol of the shipyard. The symbol is the same as the waypoint where the shipyard is located.
		 * Required
		 * Min length: 1
		 */
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateGet_shipyardReturnDataFormGroup() {
		return new FormGroup<Get_shipyardReturnDataFormProperties>({
			symbol: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface Get_shipyardReturnDataShipTypes {
		type?: Get_shipyardReturnDataShipTypesType | null;
	}
	export interface Get_shipyardReturnDataShipTypesFormProperties {
		type: FormControl<Get_shipyardReturnDataShipTypesType | null | undefined>,
	}
	export function CreateGet_shipyardReturnDataShipTypesFormGroup() {
		return new FormGroup<Get_shipyardReturnDataShipTypesFormProperties>({
			type: new FormControl<Get_shipyardReturnDataShipTypesType | null | undefined>(undefined),
		});

	}

	export enum Get_shipyardReturnDataShipTypesType { SHIP_PROBE = 'SHIP_PROBE', SHIP_MINING_DRONE = 'SHIP_MINING_DRONE', SHIP_INTERCEPTOR = 'SHIP_INTERCEPTOR', SHIP_LIGHT_HAULER = 'SHIP_LIGHT_HAULER', SHIP_COMMAND_FRIGATE = 'SHIP_COMMAND_FRIGATE', SHIP_EXPLORER = 'SHIP_EXPLORER', SHIP_HEAVY_FREIGHTER = 'SHIP_HEAVY_FREIGHTER', SHIP_LIGHT_SHUTTLE = 'SHIP_LIGHT_SHUTTLE', SHIP_ORE_HOUND = 'SHIP_ORE_HOUND', SHIP_REFINING_FREIGHTER = 'SHIP_REFINING_FREIGHTER' }

	export interface Get_shipyardReturnDataTransactions {

		/**
		 * The symbol of the agent that made the transaction.
		 * Required
		 */
		agentSymbol: string;

		/**
		 * The price of the transaction.
		 * Required
		 * Minimum: 1
		 */
		price: number;

		/**
		 * The symbol of the ship that was purchased.
		 * Required
		 */
		shipSymbol: string;

		/**
		 * The timestamp of the transaction.
		 * Required
		 */
		timestamp: Date;

		/**
		 * The symbol of the waypoint where the transaction took place.
		 * Required
		 */
		waypointSymbol: string;
	}
	export interface Get_shipyardReturnDataTransactionsFormProperties {

		/**
		 * The symbol of the agent that made the transaction.
		 * Required
		 */
		agentSymbol: FormControl<string | null | undefined>,

		/**
		 * The price of the transaction.
		 * Required
		 * Minimum: 1
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * The symbol of the ship that was purchased.
		 * Required
		 */
		shipSymbol: FormControl<string | null | undefined>,

		/**
		 * The timestamp of the transaction.
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,

		/**
		 * The symbol of the waypoint where the transaction took place.
		 * Required
		 */
		waypointSymbol: FormControl<string | null | undefined>,
	}
	export function CreateGet_shipyardReturnDataTransactionsFormGroup() {
		return new FormGroup<Get_shipyardReturnDataTransactionsFormProperties>({
			agentSymbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			shipSymbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			waypointSymbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

