import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccessEntry {
		access_mask?: string | null;
		agent_range?: string | null;
		user?: string | null;
	}
	export interface AccessEntryFormProperties {
		access_mask: FormControl<string | null | undefined>,
		agent_range: FormControl<string | null | undefined>,
		user: FormControl<string | null | undefined>,
	}
	export function CreateAccessEntryFormGroup() {
		return new FormGroup<AccessEntryFormProperties>({
			access_mask: new FormControl<string | null | undefined>(undefined),
			agent_range: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AgentState {
		agentNum?: number | null;
		state?: number | null;
	}
	export interface AgentStateFormProperties {
		agentNum: FormControl<number | null | undefined>,
		state: FormControl<number | null | undefined>,
	}
	export function CreateAgentStateFormGroup() {
		return new FormGroup<AgentStateFormProperties>({
			agentNum: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ConfigCOAP {
		keystore?: string | null;
		primary_port?: number | null;
		rule?: string | null;
		secure_port?: number | null;
	}
	export interface ConfigCOAPFormProperties {
		keystore: FormControl<string | null | undefined>,
		primary_port: FormControl<number | null | undefined>,
		rule: FormControl<string | null | undefined>,
		secure_port: FormControl<number | null | undefined>,
	}
	export function CreateConfigCOAPFormGroup() {
		return new FormGroup<ConfigCOAPFormProperties>({
			keystore: new FormControl<string | null | undefined>(undefined),
			primary_port: new FormControl<number | null | undefined>(undefined),
			rule: new FormControl<string | null | undefined>(undefined),
			secure_port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ConfigDHCP {
		add_options?: string | null;
		classid?: string | null;
		hwaddr?: string | null;
		script?: string | null;
	}
	export interface ConfigDHCPFormProperties {
		add_options: FormControl<string | null | undefined>,
		classid: FormControl<string | null | undefined>,
		hwaddr: FormControl<string | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreateConfigDHCPFormGroup() {
		return new FormGroup<ConfigDHCPFormProperties>({
			add_options: new FormControl<string | null | undefined>(undefined),
			classid: new FormControl<string | null | undefined>(undefined),
			hwaddr: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigIPMI {
		primary_port?: number | null;
		secure_port?: number | null;
		version?: string | null;
	}
	export interface ConfigIPMIFormProperties {
		primary_port: FormControl<number | null | undefined>,
		secure_port: FormControl<number | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateConfigIPMIFormGroup() {
		return new FormGroup<ConfigIPMIFormProperties>({
			primary_port: new FormControl<number | null | undefined>(undefined),
			secure_port: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigMQTT {
		broker?: string | null;
		clientid?: string | null;
		filename?: string | null;
		is_tls?: string | null;
		password?: string | null;
		port?: number | null;
		tls_conf_filename?: string | null;
		username?: string | null;
		version?: string | null;
	}
	export interface ConfigMQTTFormProperties {
		broker: FormControl<string | null | undefined>,
		clientid: FormControl<string | null | undefined>,
		filename: FormControl<string | null | undefined>,
		is_tls: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		tls_conf_filename: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateConfigMQTTFormGroup() {
		return new FormGroup<ConfigMQTTFormProperties>({
			broker: new FormControl<string | null | undefined>(undefined),
			clientid: new FormControl<string | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			is_tls: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			tls_conf_filename: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigNETFLOW {
		bundleflowsets?: number | null;
		collector?: string | null;
		collectorport?: number | null;
		filename?: string | null;
	}
	export interface ConfigNETFLOWFormProperties {
		bundleflowsets: FormControl<number | null | undefined>,
		collector: FormControl<string | null | undefined>,
		collectorport: FormControl<number | null | undefined>,
		filename: FormControl<string | null | undefined>,
	}
	export function CreateConfigNETFLOWFormGroup() {
		return new FormGroup<ConfigNETFLOWFormProperties>({
			bundleflowsets: new FormControl<number | null | undefined>(undefined),
			collector: new FormControl<string | null | undefined>(undefined),
			collectorport: new FormControl<number | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigPROXY {
		TCP_NODELAY?: number | null;
		client_to_server?: string | null;
		disconnect_delay?: number | null;
		max_connects?: number | null;
		portno?: number | null;
		pre_connect?: string | null;
		server_to_client?: string | null;
		target?: string | null;
		transport?: string | null;
	}
	export interface ConfigPROXYFormProperties {
		TCP_NODELAY: FormControl<number | null | undefined>,
		client_to_server: FormControl<string | null | undefined>,
		disconnect_delay: FormControl<number | null | undefined>,
		max_connects: FormControl<number | null | undefined>,
		portno: FormControl<number | null | undefined>,
		pre_connect: FormControl<string | null | undefined>,
		server_to_client: FormControl<string | null | undefined>,
		target: FormControl<string | null | undefined>,
		transport: FormControl<string | null | undefined>,
	}
	export function CreateConfigPROXYFormGroup() {
		return new FormGroup<ConfigPROXYFormProperties>({
			TCP_NODELAY: new FormControl<number | null | undefined>(undefined),
			client_to_server: new FormControl<string | null | undefined>(undefined),
			disconnect_delay: new FormControl<number | null | undefined>(undefined),
			max_connects: new FormControl<number | null | undefined>(undefined),
			portno: new FormControl<number | null | undefined>(undefined),
			pre_connect: new FormControl<string | null | undefined>(undefined),
			server_to_client: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			transport: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigSFLOW {
		collector?: string | null;
		collectorport?: number | null;
		encoding_type?: string | null;
		filename?: string | null;
		flows_per_min?: number | null;
		include_samples?: string | null;
		records_per_sample?: string | null;
		samples_per_datagram?: string | null;
	}
	export interface ConfigSFLOWFormProperties {
		collector: FormControl<string | null | undefined>,
		collectorport: FormControl<number | null | undefined>,
		encoding_type: FormControl<string | null | undefined>,
		filename: FormControl<string | null | undefined>,
		flows_per_min: FormControl<number | null | undefined>,
		include_samples: FormControl<string | null | undefined>,
		records_per_sample: FormControl<string | null | undefined>,
		samples_per_datagram: FormControl<string | null | undefined>,
	}
	export function CreateConfigSFLOWFormGroup() {
		return new FormGroup<ConfigSFLOWFormProperties>({
			collector: new FormControl<string | null | undefined>(undefined),
			collectorport: new FormControl<number | null | undefined>(undefined),
			encoding_type: new FormControl<string | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			flows_per_min: new FormControl<number | null | undefined>(undefined),
			include_samples: new FormControl<string | null | undefined>(undefined),
			records_per_sample: new FormControl<string | null | undefined>(undefined),
			samples_per_datagram: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigSNMPTCP {
		connections?: number | null;
	}
	export interface ConfigSNMPTCPFormProperties {
		connections: FormControl<number | null | undefined>,
	}
	export function CreateConfigSNMPTCPFormGroup() {
		return new FormGroup<ConfigSNMPTCPFormProperties>({
			connections: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ConfigSNMPv3 {
		context_engine_id?: string | null;
		engine_id?: string | null;
		usm_db?: string | null;
		vacm_db?: string | null;
	}
	export interface ConfigSNMPv3FormProperties {
		context_engine_id: FormControl<string | null | undefined>,
		engine_id: FormControl<string | null | undefined>,
		usm_db: FormControl<string | null | undefined>,
		vacm_db: FormControl<string | null | undefined>,
	}
	export function CreateConfigSNMPv3FormGroup() {
		return new FormGroup<ConfigSNMPv3FormProperties>({
			context_engine_id: new FormControl<string | null | undefined>(undefined),
			engine_id: new FormControl<string | null | undefined>(undefined),
			usm_db: new FormControl<string | null | undefined>(undefined),
			vacm_db: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigSSH {
		port?: number | null;
		version?: string | null;
	}
	export interface ConfigSSHFormProperties {
		port: FormControl<number | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateConfigSSHFormGroup() {
		return new FormGroup<ConfigSSHFormProperties>({
			port: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigSYSLOG {
		client?: string | null;
		hostname?: string | null;
		localport?: number | null;
		separator?: string | null;
		sequence?: number | null;
		server?: string | null;
		serverport?: number | null;
		timestamp?: string | null;
	}
	export interface ConfigSYSLOGFormProperties {
		client: FormControl<string | null | undefined>,
		hostname: FormControl<string | null | undefined>,
		localport: FormControl<number | null | undefined>,
		separator: FormControl<string | null | undefined>,
		sequence: FormControl<number | null | undefined>,
		server: FormControl<string | null | undefined>,
		serverport: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateConfigSYSLOGFormGroup() {
		return new FormGroup<ConfigSYSLOGFormProperties>({
			client: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			localport: new FormControl<number | null | undefined>(undefined),
			separator: new FormControl<string | null | undefined>(undefined),
			sequence: new FormControl<number | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
			serverport: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigTELNET {
		keymap?: string | null;
		paging_prompt?: string | null;
		port?: number | null;
		prompt?: string | null;
		rule?: string | null;
		userdb?: string | null;
	}
	export interface ConfigTELNETFormProperties {
		keymap: FormControl<string | null | undefined>,
		paging_prompt: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		prompt: FormControl<string | null | undefined>,
		rule: FormControl<string | null | undefined>,
		userdb: FormControl<string | null | undefined>,
	}
	export function CreateConfigTELNETFormGroup() {
		return new FormGroup<ConfigTELNETFormProperties>({
			keymap: new FormControl<string | null | undefined>(undefined),
			paging_prompt: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			prompt: new FormControl<string | null | undefined>(undefined),
			rule: new FormControl<string | null | undefined>(undefined),
			userdb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigTFTP {
		cache?: number | null;
		client?: string | null;
		dstfile?: string | null;
		mode?: string | null;
		port?: number | null;
		retries?: number | null;
		script?: string | null;
		server?: string | null;
		srcfile?: string | null;
		timeout?: number | null;
		trace?: string | null;
	}
	export interface ConfigTFTPFormProperties {
		cache: FormControl<number | null | undefined>,
		client: FormControl<string | null | undefined>,
		dstfile: FormControl<string | null | undefined>,
		mode: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		retries: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,
		server: FormControl<string | null | undefined>,
		srcfile: FormControl<string | null | undefined>,
		timeout: FormControl<number | null | undefined>,
		trace: FormControl<string | null | undefined>,
	}
	export function CreateConfigTFTPFormGroup() {
		return new FormGroup<ConfigTFTPFormProperties>({
			cache: new FormControl<number | null | undefined>(undefined),
			client: new FormControl<string | null | undefined>(undefined),
			dstfile: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			retries: new FormControl<number | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
			srcfile: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<number | null | undefined>(undefined),
			trace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigTOD {
		port?: number | null;
		retries?: number | null;
		script?: string | null;
		server?: string | null;
		timeout?: number | null;
	}
	export interface ConfigTODFormProperties {
		port: FormControl<number | null | undefined>,
		retries: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,
		server: FormControl<string | null | undefined>,
		timeout: FormControl<number | null | undefined>,
	}
	export function CreateConfigTODFormGroup() {
		return new FormGroup<ConfigTODFormProperties>({
			port: new FormControl<number | null | undefined>(undefined),
			retries: new FormControl<number | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ConfigWEB {
		is_persistent_connections?: number | null;
		password?: string | null;
		port?: number | null;
		rule?: string | null;
		username?: string | null;
		wsdl?: string | null;
	}
	export interface ConfigWEBFormProperties {
		is_persistent_connections: FormControl<number | null | undefined>,
		password: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		rule: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
		wsdl: FormControl<string | null | undefined>,
	}
	export function CreateConfigWEBFormGroup() {
		return new FormGroup<ConfigWEBFormProperties>({
			is_persistent_connections: new FormControl<number | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			rule: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			wsdl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IPAlias {
		IP?: string | null;
		interface?: string | null;
		mask?: string | null;
		port?: number | null;
	}
	export interface IPAliasFormProperties {
		IP: FormControl<string | null | undefined>,
		interface: FormControl<string | null | undefined>,
		mask: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
	}
	export function CreateIPAliasFormGroup() {
		return new FormGroup<IPAliasFormProperties>({
			IP: new FormControl<string | null | undefined>(undefined),
			interface: new FormControl<string | null | undefined>(undefined),
			mask: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IPSource {
		IP?: string | null;
		port?: number | null;
	}
	export interface IPSourceFormProperties {
		IP: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
	}
	export function CreateIPSourceFormGroup() {
		return new FormGroup<IPSourceFormProperties>({
			IP: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyslogMsg {
		hostname?: string | null;
		message?: string | null;
		separator?: string | null;
		sequence?: string | null;
		timestamp?: string | null;
	}
	export interface SyslogMsgFormProperties {
		hostname: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		separator: FormControl<string | null | undefined>,
		sequence: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateSyslogMsgFormGroup() {
		return new FormGroup<SyslogMsgFormProperties>({
			hostname: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			separator: new FormControl<string | null | undefined>(undefined),
			sequence: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TelnetUser {
		groups?: Array<string>;
		hasPassword?: number | null;
		password?: string | null;
		username?: string | null;
	}
	export interface TelnetUserFormProperties {
		hasPassword: FormControl<number | null | undefined>,
		password: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateTelnetUserFormGroup() {
		return new FormGroup<TelnetUserFormProperties>({
			hasPassword: new FormControl<number | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimerScript {
		arg?: string | null;
		interval?: number | null;
		script?: string | null;
	}
	export interface TimerScriptFormProperties {
		arg: FormControl<string | null | undefined>,
		interval: FormControl<number | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreateTimerScriptFormGroup() {
		return new FormGroup<TimerScriptFormProperties>({
			arg: new FormControl<string | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrapDest {
		IP?: string | null;
		port?: number | null;
	}
	export interface TrapDestFormProperties {
		IP: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
	}
	export function CreateTrapDestFormGroup() {
		return new FormGroup<TrapDestFormProperties>({
			IP: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Triplet {
		device?: string | null;
		mib?: string | null;
		scenario?: number | null;
	}
	export interface TripletFormProperties {
		device: FormControl<string | null | undefined>,
		mib: FormControl<string | null | undefined>,
		scenario: FormControl<number | null | undefined>,
	}
	export function CreateTripletFormGroup() {
		return new FormGroup<TripletFormProperties>({
			device: new FormControl<string | null | undefined>(undefined),
			mib: new FormControl<string | null | undefined>(undefined),
			scenario: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds/Overwrites the user entry in the access control database.
		 * Adds/Overwrites the user entry in the access control database.
		 * Post mimic/access/add/{user}/{agents}/{mask}
		 * @param {string} user Username of the simulator hosting system
		 * @param {string} agents Agent range in minimal range representation
		 * @param {string} mask Currently not used
		 * @return {string} successful operation
		 */
		Access_add(user: string, agents: string, mask: string): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/access/add/' + (user == null ? '' : encodeURIComponent(user)) + '/' + (agents == null ? '' : encodeURIComponent(agents)) + '/' + (mask == null ? '' : encodeURIComponent(mask)), null, { responseType: 'text' });
		}

		/**
		 * Clears a users entry from access control database.
		 * Using '*' for user clears all the users.
		 * Delete mimic/access/del/{user}
		 * @param {string} user username of the simulator hosting system
		 * @return {string} successful operation
		 */
		Access_del(user: string): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/access/del/' + (user == null ? '' : encodeURIComponent(user)), { responseType: 'text' });
		}

		/**
		 * Returns the current access control database in use.
		 * If nothing is specified then this returns "".
		 * Get mimic/access/get/acldb
		 * @return {string} successful operation
		 */
		Access_get_acldb(): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/access/get/acldb', { responseType: 'text' });
		}

		/**
		 * Returns the current admin directory.
		 * If nothing is specified in admin/settings.cfg then returns "". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )
		 * Get mimic/access/get/admindir
		 * @return {string} successful operation
		 */
		Access_get_admindir(): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/access/get/admindir', { responseType: 'text' });
		}

		/**
		 * Returns the current administrator.
		 * If nothing is specified in admin/settings.cfg then returns "".
		 * Get mimic/access/get/adminuser
		 * @return {string} successful operation
		 */
		Access_get_adminuser(): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/access/get/adminuser', { responseType: 'text' });
		}

		/**
		 * Returns the state of access control checking.
		 * 0 indicates that it is disabled, 1 indicates it is enabled.
		 * Get mimic/access/get/enabled
		 * @return {string} successful operation
		 */
		Access_get_enabled(): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/access/get/enabled', { responseType: 'text' });
		}

		/**
		 * Returns an array of entries.
		 * Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).
		 * Get mimic/access/list
		 * @return {Array<AccessEntry>} successful operation
		 */
		Access_list(): Observable<Array<AccessEntry>> {
			return this.http.get<Array<AccessEntry>>(this.baseUri + 'mimic/access/list', {});
		}

		/**
		 * Loads the specified file for access control data.
		 * If filename is not specified then the currently set 'acldb' parameter is used.
		 * Put mimic/access/load/{filename}
		 * @param {string} filename Filename to load
		 * @return {Array<string>} successful operation
		 */
		Access_load(filename: string): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'mimic/access/load/' + (filename == null ? '' : encodeURIComponent(filename)), null, {});
		}

		/**
		 * Saves current access control data in specified file.
		 * If filename is not specified then the currently set 'acldb' parameter is used.
		 * Put mimic/access/save/{filename}
		 * @param {string} filename Filename to save
		 * @return {Array<string>} successful operation
		 */
		Access_save(filename: string): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'mimic/access/save/' + (filename == null ? '' : encodeURIComponent(filename)), null, {});
		}

		/**
		 * Allows setting the name of the current access control database.
		 * This will be used for subsequent load and save operations.
		 * Put mimic/access/set/acldb/{databaseName}
		 * @param {string} databaseName Database name to use
		 * @return {string} successful operation
		 */
		Access_set_acldb(databaseName: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/access/set/acldb/' + (databaseName == null ? '' : encodeURIComponent(databaseName)), null, { responseType: 'text' });
		}

		/**
		 * Allows the user to enable/disable the access control check.
		 * 0 indicates disabled, 1 indicates enabled.
		 * Put mimic/access/set/enabled/{enabledOrNot}
		 * @param {string} enabledOrNot indicator
		 * @return {string} successful operation
		 */
		Access_set_enabled(enabledOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/access/set/enabled/' + (enabledOrNot == null ? '' : encodeURIComponent(enabledOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Add an agent.
		 * Add an agent.
		 * Post mimic/agent/{agentNum}/add/{IP}
		 * @param {number} agentNum Agent to return the primary IP
		 * @param {string} IP Primary IP
		 * @param {Array<Triplet>} requestBody Created agent object
		 * @return {string} successful operation
		 */
		New(agentNum: number, IP: string, requestBody: Array<Triplet>): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/agent/' + agentNum + '/add/' + (IP == null ? '' : encodeURIComponent(IP)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Add a source address that the agent will accept messages from.
		 * An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
		 * Post mimic/agent/{agentNum}/from/add/{IP}/{port}
		 * @param {number} agentNum Agent to add the IP source
		 * @param {string} IP IP of the port, 0.0.0.0 for any
		 * @param {number} port port of the source, 0 for any
		 * @return {string} successful operation
		 */
		From_add(agentNum: number, IP: string, port: number): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/agent/' + agentNum + '/from/add/' + (IP == null ? '' : encodeURIComponent(IP)) + '/' + port, null, { responseType: 'text' });
		}

		/**
		 * delete a source address that the agent will accept messages from.
		 * An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
		 * Delete mimic/agent/{agentNum}/from/delete/{IP}/{port}
		 * @param {number} agentNum Agent to delete the IP source
		 * @param {string} IP IP of the source
		 * @param {number} port port of the source
		 * @return {string} successful operation
		 */
		From_del(agentNum: number, IP: string, port: number): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/from/delete/' + (IP == null ? '' : encodeURIComponent(IP)) + '/' + port, { responseType: 'text' });
		}

		/**
		 * List the source addresses that the agent will accept messages from.
		 * This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.
		 * Get mimic/agent/{agentNum}/from/list
		 * @param {number} agentNum Agent to show the IP sources
		 * @return {Array<IPSource>} successful operation
		 */
		From_list(agentNum: number): Observable<Array<IPSource>> {
			return this.http.get<Array<IPSource>>(this.baseUri + 'mimic/agent/' + agentNum + '/from/list', {});
		}

		/**
		 * has the agent value space changed?
		 * has the agent value space changed?
		 * Get mimic/agent/{agentNum}/get/changed
		 * @param {number} agentNum Agent to return the indicator
		 * @return {number} successful operation
		 */
		Get_changed(agentNum: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/agent/' + agentNum + '/get/changed', {});
		}

		/**
		 * has the lab configuration changed?
		 * has the lab configuration changed?
		 * Get mimic/agent/{agentNum}/get/config_changed
		 * @param {number} agentNum Agent to return the indicator
		 * @return {number} successful operation
		 */
		Get_config_changed(agentNum: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/agent/' + agentNum + '/get/config_changed', {});
		}

		/**
		 * one-way transit delay in msec.
		 * The minimum granularity is 10 msec.
		 * Get mimic/agent/{agentNum}/get/delay
		 * @param {number} agentNum Agent to return the delay time
		 * @return {number} successful operation
		 */
		Get_delay(agentNum: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/agent/' + agentNum + '/get/delay', {});
		}

		/**
		 * drop rate (every N-th PDU). 0 means no drops.
		 * drop rate (every N-th PDU). 0 means no drops.
		 * Get mimic/agent/{agentNum}/get/drops
		 * @param {number} agentNum Agent to return the drop rate
		 * @return {number} successful operation
		 */
		Get_drops(agentNum: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/agent/' + agentNum + '/get/drops', {});
		}

		/**
		 * host address of the agent.
		 * Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
		 * Get mimic/agent/{agentNum}/get/host
		 * @param {string} agentNum Agent to return the primary IP
		 * @return {string} successful operation
		 */
		Get_host(agentNum: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + (agentNum == null ? '' : encodeURIComponent(agentNum)) + '/get/host', { responseType: 'text' });
		}

		/**
		 * timeout in seconds for retransmitting INFORM PDUs.
		 * The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
		 * Get mimic/agent/{agentNum}/get/inform_timeout
		 * @param {number} agentNum Agent to return the timeout setting
		 * @return {number} successful operation
		 */
		Get_inform_timeout(agentNum: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/agent/' + agentNum + '/get/inform_timeout', {});
		}

		/**
		 * network interface card for the agent.
		 * network interface card for the agent.
		 * Get mimic/agent/{agentNum}/get/interface
		 * @param {string} agentNum Agent to return the primary interface
		 * @return {string} successful operation
		 */
		Get_interface(agentNum: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + (agentNum == null ? '' : encodeURIComponent(agentNum)) + '/get/interface', { responseType: 'text' });
		}

		/**
		 * subnet mask of the agent.
		 * subnet mask of the agent.
		 * Get mimic/agent/{agentNum}/get/mask
		 * @param {string} agentNum Agent to return the primary interface
		 * @return {string} successful operation
		 */
		Get_mask(agentNum: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + (agentNum == null ? '' : encodeURIComponent(agentNum)) + '/get/mask', { responseType: 'text' });
		}

		/**
		 * set of MIBs, simulations and scenarios
		 * set of MIBs, simulations and scenarios
		 * Get mimic/agent/{agentNum}/get/mibs
		 * @param {number} agentNum Agent to return the MIB triplets
		 * @return {Array<Triplet>} successful operation
		 */
		Get_mibs(agentNum: number): Observable<Array<Triplet>> {
			return this.http.get<Array<Triplet>>(this.baseUri + 'mimic/agent/' + agentNum + '/get/mibs', {});
		}

		/**
		 * number of starts for the agent.
		 * This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.
		 * Get mimic/agent/{agentNum}/get/num_starts
		 * @param {number} agentNum Agent to return the count
		 * @return {number} successful operation
		 */
		Get_number_starts(agentNum: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/agent/' + agentNum + '/get/num_starts', {});
		}

		/**
		 * MIB directory of the agent.
		 * MIB directory of the agent.
		 * Get mimic/agent/{agentNum}/get/oiddir
		 * @param {number} agentNum Agent to return the directory path
		 * @return {string} successful operation
		 */
		Get_oiddir(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/get/oiddir', { responseType: 'text' });
		}

		/**
		 * owner of the agent.
		 * owner of the agent.
		 * Get mimic/agent/{agentNum}/get/owner
		 * @param {number} agentNum Agent to return the owner
		 * @return {string} successful operation
		 */
		Get_owner(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/get/owner', { responseType: 'text' });
		}

		/**
		 * maximum PDU size.
		 * The limit for this configurable is 65536.
		 * Get mimic/agent/{agentNum}/get/pdusize
		 * @param {number} agentNum Agent to return the PDU size
		 * @return {number} successful operation
		 */
		Get_pdusize(agentNum: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/agent/' + agentNum + '/get/pdusize', {});
		}

		/**
		 * port number
		 * port number
		 * Get mimic/agent/{agentNum}/get/port
		 * @param {number} agentNum Agent to return the primary SNMP port
		 * @return {string} successful operation
		 */
		Get_port(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/get/port', { responseType: 'text' });
		}

		/**
		 * private directory of the agent.
		 * private directory of the agent.
		 * Get mimic/agent/{agentNum}/get/privdir
		 * @param {number} agentNum Agent to return the directory path
		 * @return {string} successful operation
		 */
		Get_privdir(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/get/privdir', { responseType: 'text' });
		}

		/**
		 * protocols supported by agent
		 * protocols supported by agent as an array of strings
		 * Get mimic/agent/{agentNum}/get/protocol
		 * @param {number} agentNum Agent to return the protocols arrary
		 * @return {Array<string>} successful operation
		 */
		Get_protocols(agentNum: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/get/protocol', {});
		}

		/**
		 * read community string
		 * read community string
		 * Get mimic/agent/{agentNum}/get/read
		 * @param {number} agentNum Agent to return the SNMP read community string
		 * @return {string} successful operation
		 */
		Get_read_community(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/get/read', { responseType: 'text' });
		}

		/**
		 * first scenario name
		 * first scenario name
		 * Get mimic/agent/{agentNum}/get/scen
		 * @param {number} agentNum Agent to return the first scenario number
		 * @return {number} successful operation
		 */
		Get_scen(agentNum: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/agent/' + agentNum + '/get/scen', {});
		}

		/**
		 * first simulation name
		 * first simulation name
		 * Get mimic/agent/{agentNum}/get/sim
		 * @param {number} agentNum Agent to return the first simulation name
		 * @return {string} successful operation
		 */
		Get_sim(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/get/sim', { responseType: 'text' });
		}

		/**
		 * relative start time
		 * relative start time
		 * Get mimic/agent/{agentNum}/get/start
		 * @param {number} agentNum Agent to return the relative start time
		 * @return {string} successful operation
		 */
		Get_starttime(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/get/start', { responseType: 'text' });
		}

		/**
		 * current running state of the agent
		 * 0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping
		 * Get mimic/agent/{agentNum}/get/state
		 * @param {number} agentNum Agent to return the state
		 * @return {number} successful operation
		 */
		Get_agent_state(agentNum: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/agent/' + agentNum + '/get/state', {});
		}

		/**
		 * has the agent state changed?
		 * has the agent state changed?
		 * Get mimic/agent/{agentNum}/get/state_changed
		 * @param {number} agentNum Agent to return the indicator
		 * @return {number} successful operation
		 */
		Get_state_changed(agentNum: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/agent/' + agentNum + '/get/state_changed', {});
		}

		/**
		 * current statistics of the agent instance
		 * The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT
		 * Get mimic/agent/{agentNum}/get/statistics
		 * @param {number} agentNum Agent to return the statistics
		 * @return {Array<number>} successful operation
		 */
		Get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/get/statistics', {});
		}

		/**
		 * SNMP PDU tracing
		 * SNMP PDU tracing
		 * Get mimic/agent/{agentNum}/get/trace
		 * @param {number} agentNum Agent to return the indicator
		 * @return {number} successful operation
		 */
		Get_trace(agentNum: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/agent/' + agentNum + '/get/trace', {});
		}

		/**
		 * SNMP SET validation policy.
		 * Is a bitmask in which with the following bits (from LSB) check for type, length, range, access
		 * Get mimic/agent/{agentNum}/get/validate
		 * @param {number} agentNum Agent to return the bitmask integer
		 * @return {number} successful operation
		 */
		Get_validate(agentNum: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/agent/' + agentNum + '/get/validate', {});
		}

		/**
		 * write community string
		 * write community string
		 * Get mimic/agent/{agentNum}/get/write
		 * @param {number} agentNum Agent to return the SNMP write community string
		 * @return {string} successful operation
		 */
		Get_write_community(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/get/write', { responseType: 'text' });
		}

		/**
		 * Halt the current agent.
		 * Halt the current agent.
		 * Put mimic/agent/{agentNum}/halt
		 * @param {number} agentNum Agent to return the primary IP
		 * @return {string} successful operation
		 */
		Halt(agentNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/halt', null, { responseType: 'text' });
		}

		/**
		 * Adds a new ipalias for the agent.
		 * port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.
		 * Post mimic/agent/{agentNum}/ipalias/add/{IP}/{port}/{mask}/{interface}
		 * @param {number} agentNum Agent to add the IP alias
		 * @param {string} IP IP address , IPv4 or IPv6
		 * @param {number} port SNMP port , 0 or empty for default
		 * @param {string} mask Netmask, empty for default
		 * @param {string} _interface Interface. Empty for default
		 * @return {string} successful operation
		 */
		Add_ipalias(agentNum: number, IP: string, port: number, mask: string, _interface: string): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/agent/' + agentNum + '/ipalias/add/' + (IP == null ? '' : encodeURIComponent(IP)) + '/' + port + '/' + (mask == null ? '' : encodeURIComponent(mask)) + '/' + (_interface == null ? '' : encodeURIComponent(_interface)), null, { responseType: 'text' });
		}

		/**
		 * Deletes an existing ipalias from the agent.
		 * port defaults to 161 if not specified.
		 * Delete mimic/agent/{agentNum}/ipalias/delete/{IP}/{port}
		 * @param {number} agentNum Agent to delete the IP alias
		 * @param {string} IP IP address , IPv4 or IPv6
		 * @param {number} port SNMP port , 0 or empty for default
		 * @return {string} successful operation
		 */
		Del_ipalias(agentNum: number, IP: string, port: number): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/ipalias/delete/' + (IP == null ? '' : encodeURIComponent(IP)) + '/' + port, { responseType: 'text' });
		}

		/**
		 * Lists all the additional ipaliases configured for the agent.
		 * The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.
		 * Get mimic/agent/{agentNum}/ipalias/list
		 * @param {number} agentNum Agent to show the IP alias list
		 * @return {Array<IPAlias>} successful operation
		 */
		List_ipaliases(agentNum: number): Observable<Array<IPAlias>> {
			return this.http.get<Array<IPAlias>>(this.baseUri + 'mimic/agent/' + agentNum + '/ipalias/list', {});
		}

		/**
		 * Starts an existing ipalias for the agent.
		 * port defaults to 161 if not specified.
		 * Put mimic/agent/{agentNum}/ipalias/start/{IP}/{port}
		 * @param {number} agentNum Agent to start the IP alias
		 * @param {string} IP IP address , IPv4 or IPv6
		 * @param {number} port SNMP port , 0 or empty for default
		 * @return {string} successful operation
		 */
		Start_ipalias(agentNum: number, IP: string, port: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/ipalias/start/' + (IP == null ? '' : encodeURIComponent(IP)) + '/' + port, null, { responseType: 'text' });
		}

		/**
		 * Returns the status (0=down, 1=up) of an existing ipalias for the agent.
		 * port defaults to 161 if not specified.
		 * Get mimic/agent/{agentNum}/ipalias/status/{IP}/{port}
		 * @param {number} agentNum Agent to show status of the IP alias
		 * @param {string} IP IP address , IPv4 or IPv6
		 * @param {number} port SNMP port , 0 or empty for default
		 * @return {string} successful operation
		 */
		Status_ipalias(agentNum: number, IP: string, port: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/ipalias/status/' + (IP == null ? '' : encodeURIComponent(IP)) + '/' + port, { responseType: 'text' });
		}

		/**
		 * Stops an existing ipalias for the agent.
		 * port defaults to 161 if not specified.
		 * Put mimic/agent/{agentNum}/ipalias/stop/{IP}/{port}
		 * @param {number} agentNum Agent to stop the IP alias
		 * @param {string} IP IP address , IPv4 or IPv6
		 * @param {number} port SNMP port , 0 or empty for default
		 * @return {string} successful operation
		 */
		Stop_ipalias(agentNum: number, IP: string, port: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/ipalias/stop/' + (IP == null ? '' : encodeURIComponent(IP)) + '/' + port, null, { responseType: 'text' });
		}

		/**
		 * Pause the current agent.
		 * Pause the current agent.
		 * Put mimic/agent/{agentNum}/pause
		 * @param {number} agentNum Agent to return the primary IP
		 * @return {string} successful operation
		 */
		Pause_now(agentNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/pause', null, { responseType: 'text' });
		}

		/**
		 * Show the agent's COAP argument structure
		 * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/coap/get/args
		 * @param {number} agentNum Agent to show the COAP argument structure
		 * @return {string} successful operation
		 */
		Protocol_coap_get_args(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/coap/get/args', { responseType: 'text' });
		}

		/**
		 * Show the agent's COAP configuration
		 * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/coap/get/config
		 * @param {number} agentNum Agent to show the COAP configuration
		 * @return {ConfigCOAP} successful operation
		 */
		Protocol_coap_get_config(agentNum: number): Observable<ConfigCOAP> {
			return this.http.get<ConfigCOAP>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/coap/get/config', {});
		}

		/**
		 * Show the agent's COAP statistics
		 * Statistics of fields indicated in the headers
		 * Get mimic/agent/{agentNum}/protocol/msg/coap/get/statistics
		 * @param {number} agentNum Agent to show COAP statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_coap_get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/coap/get/statistics', {});
		}

		/**
		 * Show the agent's COAP traffic tracing
		 * Trace 1 means enabled, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/coap/get/trace
		 * @param {number} agentNum Agent to show whether COAP tracing is enabled
		 * @return {ConfigCOAP} successful operation
		 */
		Protocol_coap_get_trace(agentNum: number): Observable<ConfigCOAP> {
			return this.http.get<ConfigCOAP>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/coap/get/trace', {});
		}

		/**
		 * Set the agent's COAP configuration
		 * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Put mimic/agent/{agentNum}/protocol/msg/coap/set/config/{argument}/{value}
		 * @param {number} agentNum Agent to set the COAP configuration
		 * @param {string} argument Parameter to set the COAP configuration
		 * @param {string} value Value to set the COAP configuration
		 * @return {string} successful operation
		 */
		Protocol_coap_set_config(agentNum: number, argument: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/coap/set/config/' + (argument == null ? '' : encodeURIComponent(argument)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's COAP traffic tracing
		 * 1 to enable, 0 to disable
		 * Put mimic/agent/{agentNum}/protocol/msg/coap/set/trace/{enableOrNot}
		 * @param {number} agentNum Agent to set the COAP tracing
		 * @param {string} enableOrNot Value to set the COAP tracing
		 * @return {string} successful operation
		 */
		Protocol_coap_set_trace(agentNum: number, enableOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/coap/set/trace/' + (enableOrNot == null ? '' : encodeURIComponent(enableOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Show the agent's DHCP argument structure
		 * Agent's DHCP configuration particulars
		 * Get mimic/agent/{agentNum}/protocol/msg/dhcp/get/args
		 * @param {number} agentNum Agent to show the DHCP argument structure
		 * @return {string} successful operation
		 */
		Protocol_dhcp_get_args(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/dhcp/get/args', { responseType: 'text' });
		}

		/**
		 * Show the agent's DHCP configuration
		 * Agent's DHCP configuration hwaddr,classid,add_options,script
		 * Get mimic/agent/{agentNum}/protocol/msg/dhcp/get/config
		 * @param {number} agentNum Agent to show the DHCP configuration
		 * @return {ConfigDHCP} successful operation
		 */
		Protocol_dhcp_get_config(agentNum: number): Observable<ConfigDHCP> {
			return this.http.get<ConfigDHCP>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/dhcp/get/config', {});
		}

		/**
		 * Show the agent's DHCP statistics
		 * Statistics of fields indicated in the headers
		 * Get mimic/agent/{agentNum}/protocol/msg/dhcp/get/statistics
		 * @param {number} agentNum Agent to show DHCP statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_dhcp_get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/dhcp/get/statistics', {});
		}

		/**
		 * Show the agent's DHCP traffic tracing
		 * Trace 1 means enabled, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/dhcp/get/trace
		 * @param {number} agentNum Agent to show whether DHCP tracing is enabled
		 * @return {ConfigDHCP} successful operation
		 */
		Protocol_dhcp_get_trace(agentNum: number): Observable<ConfigDHCP> {
			return this.http.get<ConfigDHCP>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/dhcp/get/trace', {});
		}

		/**
		 * Show the parameters configured by the server in its DHCP-OFFER message
		 * DHCP-OFFER message parameters
		 * Get mimic/agent/{agentNum}/protocol/msg/dhcp/params
		 * @param {number} agentNum Agent to show DHCP DHCP-OFFER message
		 * @return {Array<string>} successful operation
		 */
		Protocol_dhcp_params(agentNum: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/dhcp/params', {});
		}

		/**
		 * Set the agent's DHCP configuration
		 * Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Put mimic/agent/{agentNum}/protocol/msg/dhcp/set/config/{argument}/{value}
		 * @param {number} agentNum Agent to set the DHCP configuration
		 * @param {string} argument Parameter to set the DHCP configuration
		 * @param {string} value Value to set the DHCP configuration
		 * @return {string} successful operation
		 */
		Protocol_dhcp_set_config(agentNum: number, argument: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/dhcp/set/config/' + (argument == null ? '' : encodeURIComponent(argument)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's DHCP traffic tracing
		 * 1 to enable, 0 to disable
		 * Put mimic/agent/{agentNum}/protocol/msg/dhcp/set/trace/{enableOrNot}
		 * @param {number} agentNum Agent to set the DHCP tracing
		 * @param {string} enableOrNot Value to set the DHCP tracing
		 * @return {string} successful operation
		 */
		Protocol_dhcp_set_trace(agentNum: number, enableOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/dhcp/set/trace/' + (enableOrNot == null ? '' : encodeURIComponent(enableOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Show the agent's IPMI argument structure
		 * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/ipmi/get/args
		 * @param {number} agentNum Agent to show the IPMI argument structure
		 * @return {string} successful operation
		 */
		Protocol_ipmi_get_args(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ipmi/get/args', { responseType: 'text' });
		}

		/**
		 * Show the agent's IPMI configuration
		 * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/ipmi/get/config
		 * @param {number} agentNum Agent to show the IPMI configuration
		 * @return {ConfigIPMI} successful operation
		 */
		Protocol_ipmi_get_config(agentNum: number): Observable<ConfigIPMI> {
			return this.http.get<ConfigIPMI>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ipmi/get/config', {});
		}

		/**
		 * Show the agent's IPMI statistics
		 * Statistics of fields indicated in the headers
		 * Get mimic/agent/{agentNum}/protocol/msg/ipmi/get/statistics
		 * @param {number} agentNum Agent to show IPMI statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_ipmi_get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ipmi/get/statistics', {});
		}

		/**
		 * Show the agent's IPMI traffic tracing
		 * Trace 1 means enabled, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/ipmi/get/trace
		 * @param {number} agentNum Agent to show whether IPMI tracing is enabled
		 * @return {ConfigIPMI} successful operation
		 */
		Protocol_ipmi_get_trace(agentNum: number): Observable<ConfigIPMI> {
			return this.http.get<ConfigIPMI>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ipmi/get/trace', {});
		}

		/**
		 * Show the outgoing message's attributes
		 * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
		 * Get mimic/agent/{agentNum}/protocol/msg/ipmi/get/{attr}
		 * @param {number} agentNum Agent to set the IPMI tracing
		 * @param {string} attr Attribute
		 * @return {string} successful operation
		 */
		Protocol_ipmi_get_attr(agentNum: number, attr: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ipmi/get/' + (attr == null ? '' : encodeURIComponent(attr)), { responseType: 'text' });
		}

		/**
		 * Set the agent's IPMI configuration
		 * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Put mimic/agent/{agentNum}/protocol/msg/ipmi/set/config/{argument}/{value}
		 * @param {number} agentNum Agent to set the IPMI configuration
		 * @param {string} argument Parameter to set the IPMI configuration
		 * @param {string} value Value to set the IPMI configuration
		 * @return {string} successful operation
		 */
		Protocol_ipmi_set_config(agentNum: number, argument: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ipmi/set/config/' + (argument == null ? '' : encodeURIComponent(argument)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's IPMI traffic tracing
		 * 1 to enable, 0 to disable
		 * Put mimic/agent/{agentNum}/protocol/msg/ipmi/set/trace/{enableOrNot}
		 * @param {number} agentNum Agent to set the IPMI tracing
		 * @param {string} enableOrNot Value to set the IPMI tracing
		 * @return {string} successful operation
		 */
		Protocol_ipmi_set_trace(agentNum: number, enableOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ipmi/set/trace/' + (enableOrNot == null ? '' : encodeURIComponent(enableOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Set the outgoing message's attributes
		 * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
		 * Put mimic/agent/{agentNum}/protocol/msg/ipmi/set/{attr}/{value}
		 * @param {number} agentNum Agent to set the IPMI tracing
		 * @param {string} attr Attribute
		 * @return {string} successful operation
		 */
		Protocol_ipmi_set_attr(agentNum: number, attr: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ipmi/set/' + (attr == null ? '' : encodeURIComponent(attr)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Show the agent's MQTT TCP connection state
		 * 0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state
		 * Get mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/protstate
		 * @param {number} agentNum Agent to show MQTT state
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_get_protstate(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/get/protstate', {});
		}

		/**
		 * Show the agent's MQTT state
		 * 0 means stopped, 1 means running
		 * Get mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/state
		 * @param {number} agentNum Agent to show MQTT state
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_get_state(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/get/state', {});
		}

		/**
		 * Show the agent's current messages' cardinality
		 * 0 or more
		 * Get mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/card
		 * @param {number} agentNum Agent to show MQTT message state
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_message_card(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/message/card', {});
		}

		/**
		 * Show the agent's message attributes
		 * Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)
		 * Get mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/get/{msgNum}/{attr}
		 * @param {number} agentNum Agent to show MQTT state
		 * @param {number} msgNum Message Number
		 * @param {string} attr Attribute
		 * @return {Array<string>} successful operation
		 */
		Protocol_mqtt_client_message_get(agentNum: number, msgNum: number, attr: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/message/get/' + msgNum + '/' + (attr == null ? '' : encodeURIComponent(attr)), {});
		}

		/**
		 * Set the agent's message attributes
		 * Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/set/{msgNum}/{attr}/{value}
		 * @param {number} agentNum Agent to show MQTT state
		 * @param {number} msgNum Message Number
		 * @param {string} attr Attribute
		 * @param {string} value Value
		 * @return {Array<string>} successful operation
		 */
		Protocol_mqtt_client_message_set(agentNum: number, msgNum: number, attr: string, value: string): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/message/set/' + msgNum + '/' + (attr == null ? '' : encodeURIComponent(attr)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, {});
		}

		/**
		 * Restart receiving messages from a subcription of the agent
		 * Restarts a subscription
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/resubscribe/{subNum}
		 * @param {number} agentNum Agent to change MQTT state
		 * @param {number} subNum Subscription Number
		 * @return {string} successful operation
		 */
		Protocol_mqtt_client_resubscribe(agentNum: number, subNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/resubscribe/' + subNum, null, { responseType: 'text' });
		}

		/**
		 * Abort agent's MQTT TCP session without sending DISCONNECT command
		 * Abort a connection
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/abort
		 * @param {number} agentNum Agent to set MQTT behavior
		 * @return {Array<string>} successful operation
		 */
		Protocol_mqtt_client_runtime_abort(agentNum: number): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/runtime/abort', null, {});
		}

		/**
		 * Start agent's MQTT TCP session
		 * Start a connection
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/connect
		 * @param {number} agentNum Agent to set MQTT behavior
		 * @return {Array<string>} successful operation
		 */
		Protocol_mqtt_client_runtime_connect(agentNum: number): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/runtime/connect', null, {});
		}

		/**
		 * Disconnect agent's MQTT TCP session by sending DISCONNECT command
		 * Graceful disconnect
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/disconnect
		 * @param {number} agentNum Agent to set MQTT behavior
		 * @return {Array<string>} successful operation
		 */
		Protocol_mqtt_client_runtime_disconnect(agentNum: number): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/runtime/disconnect', null, {});
		}

		/**
		 * Set the agent's MQTT TCP connection target broker
		 * Broker IP address
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/broker/{brokerAddr}
		 * @param {number} agentNum Agent to set MQTT config
		 * @param {string} brokerAddr Broker address
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_set_broker(agentNum: number, brokerAddr: string): Observable<Array<number>> {
			return this.http.put<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/set/broker/' + (brokerAddr == null ? '' : encodeURIComponent(brokerAddr)), null, {});
		}

		/**
		 * Set the agent's MQTT session
		 * 1 for clean session , 0 not
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/cleansession/{cleanOrNot}
		 * @param {number} agentNum Agent to set MQTT config
		 * @param {number} cleanOrNot Clean session
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_set_cleansession(agentNum: number, cleanOrNot: number): Observable<Array<number>> {
			return this.http.put<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/set/cleansession/' + cleanOrNot, null, {});
		}

		/**
		 * Set the agent's MQTT client ID
		 * MQTT client ID
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/clientid/{clientID}
		 * @param {number} agentNum Agent to set MQTT config
		 * @param {string} clientID Client ID
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_set_clientid(agentNum: number, clientID: string): Observable<Array<number>> {
			return this.http.put<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/set/clientid/' + (clientID == null ? '' : encodeURIComponent(clientID)), null, {});
		}

		/**
		 * Set the agent's MQTT TCP keepalive
		 * Keep alive the TCP connection
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/keepalive/{aliveTime}
		 * @param {number} agentNum Agent to set MQTT config
		 * @param {number} aliveTime period to send keepalive messages
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_set_keepalive(agentNum: number, aliveTime: number): Observable<Array<number>> {
			return this.http.put<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/set/keepalive/' + aliveTime, null, {});
		}

		/**
		 * Set the agent's MQTT disconnection action
		 * Action to take when MQTT session is disconnected
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/on_disconnect/{action}
		 * @param {number} agentNum Agent to set MQTT config
		 * @param {string} action Action to take
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_set_on_disconnect(agentNum: number, action: string): Observable<Array<number>> {
			return this.http.put<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/set/on_disconnect/' + (action == null ? '' : encodeURIComponent(action)), null, {});
		}

		/**
		 * Set the agent's MQTT client password
		 * Client password
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/password/{password}
		 * @param {number} agentNum Agent to set MQTT config
		 * @param {string} password Password
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_set_password(agentNum: number, password: string): Observable<Array<number>> {
			return this.http.put<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/set/password/' + (password == null ? '' : encodeURIComponent(password)), null, {});
		}

		/**
		 * Set the agent's MQTT TCP connection target port
		 * target TCP port
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/port/{port}
		 * @param {number} agentNum Agent to set MQTT config
		 * @param {string} port TCP port
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_set_port(agentNum: number, port: string): Observable<Array<number>> {
			return this.http.put<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/set/port/' + (port == null ? '' : encodeURIComponent(port)), null, {});
		}

		/**
		 * Set the agent's MQTT client username
		 * Client username
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/username/{username}
		 * @param {number} agentNum Agent to set MQTT config
		 * @param {string} username User name
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_set_username(agentNum: number, username: string): Observable<Array<number>> {
			return this.http.put<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/set/username/' + (username == null ? '' : encodeURIComponent(username)), null, {});
		}

		/**
		 * Set the agent's MQTT client's will
		 * Will message
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willmsg/{msg}
		 * @param {number} agentNum Agent to set MQTT config
		 * @param {string} msg Will message
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_set_willmsg(agentNum: number, msg: string): Observable<Array<number>> {
			return this.http.put<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/set/willmsg/' + (msg == null ? '' : encodeURIComponent(msg)), null, {});
		}

		/**
		 * Set the agent's MQTT will message's QOS field
		 * QOS field
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willqos/{qos}
		 * @param {number} agentNum Agent to set MQTT config
		 * @param {string} qos Quality of service field
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_set_willqos(agentNum: number, qos: string): Observable<Array<number>> {
			return this.http.put<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/set/willqos/' + (qos == null ? '' : encodeURIComponent(qos)), null, {});
		}

		/**
		 * Set the agent's MQTT retained will
		 * Retaining will
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willretain/{retain}
		 * @param {number} agentNum Agent to set MQTT config
		 * @param {string} retain Retaining will
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_set_willretain(agentNum: number, retain: string): Observable<Array<number>> {
			return this.http.put<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/set/willretain/' + (retain == null ? '' : encodeURIComponent(retain)), null, {});
		}

		/**
		 * Set the agent's MQTT client will's topic
		 * Will topic for the will message
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willtopic/{topic}
		 * @param {number} agentNum Agent to set MQTT config
		 * @param {string} topic topic
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_set_willtopic(agentNum: number, topic: string): Observable<Array<number>> {
			return this.http.put<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/set/willtopic/' + (topic == null ? '' : encodeURIComponent(topic)), null, {});
		}

		/**
		 * Show the agent's current subscriptions' cardinality
		 * 0 or more
		 * Get mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/card
		 * @param {number} agentNum Agent to show MQTT subscription state
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_client_subscribe_card(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/subscribe/card', {});
		}

		/**
		 * Show the agent's subscription attributes
		 * Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)
		 * Get mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/get/{subNum}/{attr}
		 * @param {number} agentNum Agent to show MQTT state
		 * @param {number} subNum Subscribe Number
		 * @param {string} attr Attribute
		 * @return {Array<string>} successful operation
		 */
		Protocol_mqtt_client_subscribe_get(agentNum: number, subNum: number, attr: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/subscribe/get/' + subNum + '/' + (attr == null ? '' : encodeURIComponent(attr)), {});
		}

		/**
		 * Set the agent's subscribe attributes
		 * Attribute can not be properties .
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/set/{subNum}/{attr}/{value}
		 * @param {number} agentNum Agent to show MQTT state
		 * @param {number} subNum Subscribe Number
		 * @param {string} attr Attribute
		 * @param {string} value Value
		 * @return {Array<string>} successful operation
		 */
		Protocol_mqtt_client_subscribe_set(agentNum: number, subNum: number, attr: string, value: string): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/subscribe/set/' + subNum + '/' + (attr == null ? '' : encodeURIComponent(attr)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, {});
		}

		/**
		 * Stops receiving messages from a subcription of the agent
		 * Stops a subscription
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/client/unsubscribe/{subNum}
		 * @param {number} agentNum Agent to change MQTT state
		 * @param {number} subNum Subscription Number
		 * @return {string} successful operation
		 */
		Protocol_mqtt_client_unsubscribe(agentNum: number, subNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/client/unsubscribe/' + subNum, null, { responseType: 'text' });
		}

		/**
		 * Show the agent's MQTT argument structure
		 * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/mqtt/get/args
		 * @param {number} agentNum Agent to show the MQTT argument structure
		 * @return {string} successful operation
		 */
		Protocol_mqtt_get_args(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/get/args', { responseType: 'text' });
		}

		/**
		 * Show the agent's MQTT configuration
		 * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/mqtt/get/config
		 * @param {number} agentNum Agent to show the MQTT configuration
		 * @return {ConfigMQTT} successful operation
		 */
		Protocol_mqtt_get_config(agentNum: number): Observable<ConfigMQTT> {
			return this.http.get<ConfigMQTT>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/get/config', {});
		}

		/**
		 * Show the agent's MQTT statistics
		 * Statistics of fields indicated in the headers
		 * Get mimic/agent/{agentNum}/protocol/msg/mqtt/get/statistics
		 * @param {number} agentNum Agent to show MQTT statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_mqtt_get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/get/statistics', {});
		}

		/**
		 * Show the agent's MQTT traffic tracing
		 * Trace 1 means enabled, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/mqtt/get/trace
		 * @param {number} agentNum Agent to show whether MQTT tracing is enabled
		 * @return {ConfigMQTT} successful operation
		 */
		Protocol_mqtt_get_trace(agentNum: number): Observable<ConfigMQTT> {
			return this.http.get<ConfigMQTT>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/get/trace', {});
		}

		/**
		 * Set the agent's MQTT configuration
		 * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/set/config/{argument}/{value}
		 * @param {number} agentNum Agent to set the MQTT configuration
		 * @param {string} argument Parameter to set the MQTT configuration
		 * @param {string} value Value to set the MQTT configuration
		 * @return {string} successful operation
		 */
		Protocol_mqtt_set_config(agentNum: number, argument: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/set/config/' + (argument == null ? '' : encodeURIComponent(argument)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's MQTT traffic tracing
		 * 1 to enable, 0 to disable
		 * Put mimic/agent/{agentNum}/protocol/msg/mqtt/set/trace/{enableOrNot}
		 * @param {number} agentNum Agent to set the MQTT tracing
		 * @param {string} enableOrNot Value to set the MQTT tracing
		 * @return {string} successful operation
		 */
		Protocol_mqtt_set_trace(agentNum: number, enableOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/mqtt/set/trace/' + (enableOrNot == null ? '' : encodeURIComponent(enableOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Change NETFLOW data export interval
		 * Interval in msec .
		 * Put mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/dfs_interval/{interval}
		 * @param {number} agentNum Agent to set the NETFLOW
		 * @param {number} interval NETFLOW export interval
		 * @return {string} successful operation
		 */
		Protocol_netflow_change_dfs(agentNum: number, interval: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/flow/change/dfs_interval/' + interval, null, { responseType: 'text' });
		}

		/**
		 * Change NETFLOW template export interval
		 * Interval in msec .
		 * Put mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/tfs_interval/{interval}
		 * @param {number} agentNum Agent to set the NETFLOW
		 * @param {number} interval NETFLOW export interval
		 * @return {string} successful operation
		 */
		Protocol_netflow_change_tfs(agentNum: number, interval: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/flow/change/tfs_interval/' + interval, null, { responseType: 'text' });
		}

		/**
		 * Change NETFLOW export attributes
		 * Change attributes
		 * Put mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/{flowset_uid}/{field_num}/{attr}/{value}
		 * @param {number} agentNum Agent to set the NETFLOW
		 * @return {string} successful operation
		 */
		Protocol_netflow_change_attr(agentNum: number, flowset_uid: number, field_num: number, attr: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/flow/change/{flowset_uid}/{field_num}/' + (attr == null ? '' : encodeURIComponent(attr)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Show list of NETFLOW exports
		 * Show list of NETFLOW exports
		 * Get mimic/agent/{agentNum}/protocol/msg/netflow/flow/list
		 * @param {number} agentNum Agent to show NETFLOW statistics
		 * @return {Array<string>} successful operation
		 */
		Protocol_netflow_list(agentNum: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/flow/list', {});
		}

		/**
		 * Show the agent's NETFLOW argument structure
		 * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/netflow/get/args
		 * @param {number} agentNum Agent to show the NETFLOW argument structure
		 * @return {string} successful operation
		 */
		Protocol_netflow_get_args(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/get/args', { responseType: 'text' });
		}

		/**
		 * Show the agent's NETFLOW configuration
		 * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/netflow/get/config
		 * @param {number} agentNum Agent to show the NETFLOW configuration
		 * @return {ConfigNETFLOW} successful operation
		 */
		Protocol_netflow_get_config(agentNum: number): Observable<ConfigNETFLOW> {
			return this.http.get<ConfigNETFLOW>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/get/config', {});
		}

		/**
		 * Show the agent's NETFLOW statistics
		 * Statistics of fields indicated in the headers
		 * Get mimic/agent/{agentNum}/protocol/msg/netflow/get/statistics
		 * @param {number} agentNum Agent to show NETFLOW statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_netflow_get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/get/statistics', {});
		}

		/**
		 * Show the agent's NETFLOW traffic tracing
		 * Trace 1 means enabled, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/netflow/get/trace
		 * @param {number} agentNum Agent to show whether NETFLOW tracing is enabled
		 * @return {ConfigNETFLOW} successful operation
		 */
		Protocol_netflow_get_trace(agentNum: number): Observable<ConfigNETFLOW> {
			return this.http.get<ConfigNETFLOW>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/get/trace', {});
		}

		/**
		 * Halt NETFLOW traffic
		 * Halt NETFLOW traffic
		 * Put mimic/agent/{agentNum}/protocol/msg/netflow/halt
		 * @param {number} agentNum Agent to set the NETFLOW
		 * @return {string} successful operation
		 */
		Protocol_netflow_halt(agentNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/halt', null, { responseType: 'text' });
		}

		/**
		 * Reload NETFLOW configuration before resuming traffic
		 * Reload NETFLOW configuration before resuming traffic
		 * Put mimic/agent/{agentNum}/protocol/msg/netflow/reload
		 * @param {number} agentNum Agent to set the NETFLOW
		 * @return {string} successful operation
		 */
		Protocol_netflow_reload(agentNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/reload', null, { responseType: 'text' });
		}

		/**
		 * Resuming traffic
		 * Resuming traffic
		 * Put mimic/agent/{agentNum}/protocol/msg/netflow/resume
		 * @param {number} agentNum Agent to set the NETFLOW
		 * @return {string} successful operation
		 */
		Protocol_netflow_resume(agentNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/resume', null, { responseType: 'text' });
		}

		/**
		 * Swap NETFLOW collector
		 * Allow changing collector without stopping agent
		 * Put mimic/agent/{agentNum}/protocol/msg/netflow/set/collector/{collectorIP}
		 * @param {number} agentNum Agent to set the NETFLOW
		 * @param {string} collectorIP file name to load config
		 * @return {string} successful operation
		 */
		Protocol_netflow_set_collector(agentNum: number, collectorIP: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/set/collector/' + (collectorIP == null ? '' : encodeURIComponent(collectorIP)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's NETFLOW configuration
		 * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Put mimic/agent/{agentNum}/protocol/msg/netflow/set/config/{argument}/{value}
		 * @param {number} agentNum Agent to set the NETFLOW configuration
		 * @param {string} argument Parameter to set the NETFLOW configuration
		 * @param {string} value Value to set the NETFLOW configuration
		 * @return {string} successful operation
		 */
		Protocol_netflow_set_config(agentNum: number, argument: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/set/config/' + (argument == null ? '' : encodeURIComponent(argument)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Swap NETFLOW configuration file
		 * Allow reloading the configuration file for an agent without stopping agent
		 * Put mimic/agent/{agentNum}/protocol/msg/netflow/set/filename/{fileName}
		 * @param {number} agentNum Agent to set the NETFLOW
		 * @param {string} fileName file name to load config
		 * @return {string} successful operation
		 */
		Protocol_netflow_set_fileName(agentNum: number, fileName: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/set/filename/' + (fileName == null ? '' : encodeURIComponent(fileName)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's NETFLOW traffic tracing
		 * 1 to enable, 0 to disable
		 * Put mimic/agent/{agentNum}/protocol/msg/netflow/set/trace/{enableOrNot}
		 * @param {number} agentNum Agent to set the NETFLOW tracing
		 * @param {string} enableOrNot Value to set the NETFLOW tracing
		 * @return {string} successful operation
		 */
		Protocol_netflow_set_trace(agentNum: number, enableOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/netflow/set/trace/' + (enableOrNot == null ? '' : encodeURIComponent(enableOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Show the agent's PROXY argument structure
		 * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/proxy/get/args
		 * @param {number} agentNum Agent to show the PROXY argument structure
		 * @return {string} successful operation
		 */
		Protocol_proxy_get_args(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/proxy/get/args', { responseType: 'text' });
		}

		/**
		 * Show the agent's PROXY configuration
		 * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/proxy/get/config
		 * @param {number} agentNum Agent to show the PROXY configuration
		 * @return {ConfigPROXY} successful operation
		 */
		Protocol_proxy_get_config(agentNum: number): Observable<ConfigPROXY> {
			return this.http.get<ConfigPROXY>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/proxy/get/config', {});
		}

		/**
		 * Show the agent's PROXY statistics
		 * Statistics of fields indicated in the headers
		 * Get mimic/agent/{agentNum}/protocol/msg/proxy/get/statistics
		 * @param {number} agentNum Agent to show PROXY statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_proxy_get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/proxy/get/statistics', {});
		}

		/**
		 * Show the agent's PROXY traffic tracing
		 * Trace 1 means enabled, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/proxy/get/trace
		 * @param {number} agentNum Agent to show whether PROXY tracing is enabled
		 * @return {ConfigPROXY} successful operation
		 */
		Protocol_proxy_get_trace(agentNum: number): Observable<ConfigPROXY> {
			return this.http.get<ConfigPROXY>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/proxy/get/trace', {});
		}

		/**
		 * Add individual proxy target on the agent and the simulator host
		 * Additional proxy target
		 * Post mimic/agent/{agentNum}/protocol/msg/proxy/port/add/{port}/{target}/{targetPort}
		 * @param {number} agentNum Agent to manipulate PROXY target
		 * @return {string} successful operation
		 */
		Protocol_proxy_port_add(agentNum: number, port: number, target: string, targetPort: number): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/proxy/port/add/' + port + '/' + (target == null ? '' : encodeURIComponent(target)) + '/' + targetPort, null, { responseType: 'text' });
		}

		/**
		 * Check individual target
		 * Check individual target
		 * Get mimic/agent/{agentNum}/protocol/msg/proxy/port/isStarted/{port}
		 * @param {number} agentNum Agent to manipulate PROXY target
		 * @return {string} successful operation
		 */
		Protocol_proxy_port_isstarted(agentNum: number, port: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/proxy/port/isStarted/' + port, { responseType: 'text' });
		}

		/**
		 * List all proxy targets
		 * Get mimic/agent/{agentNum}/protocol/msg/proxy/port/list
		 * @param {number} agentNum Agent to manipulate PROXY target
		 * @return {Array<number>} successful operation
		 */
		Protocol_proxy_port_list(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/proxy/port/list', {});
		}

		/**
		 * Remove individual proxy target on the agent and the simulator host
		 * Remove proxy target
		 * Delete mimic/agent/{agentNum}/protocol/msg/proxy/port/remove/{port}
		 * @param {number} agentNum Agent to manipulate PROXY target
		 * @return {string} successful operation
		 */
		Protocol_proxy_port_remove(agentNum: number, port: number): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/proxy/port/remove/' + port, { responseType: 'text' });
		}

		/**
		 * Start additional target
		 * Start additional target
		 * Put mimic/agent/{agentNum}/protocol/msg/proxy/port/start/{port}
		 * @param {number} agentNum Agent to manipulate PROXY target
		 * @return {string} successful operation
		 */
		Protocol_proxy_port_start(agentNum: number, port: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/proxy/port/start/' + port, null, { responseType: 'text' });
		}

		/**
		 * Stop additional target
		 * Stop additional target
		 * Put mimic/agent/{agentNum}/protocol/msg/proxy/port/stop/{port}
		 * @param {number} agentNum Agent to manipulate PROXY target
		 * @return {string} successful operation
		 */
		Protocol_proxy_port_stop(agentNum: number, port: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/proxy/port/stop/' + port, null, { responseType: 'text' });
		}

		/**
		 * Set the agent's PROXY configuration
		 * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Put mimic/agent/{agentNum}/protocol/msg/proxy/set/config/{argument}/{value}
		 * @param {number} agentNum Agent to set the PROXY configuration
		 * @param {string} argument Parameter to set the PROXY configuration
		 * @param {string} value Value to set the PROXY configuration
		 * @return {string} successful operation
		 */
		Protocol_proxy_set_config(agentNum: number, argument: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/proxy/set/config/' + (argument == null ? '' : encodeURIComponent(argument)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's PROXY traffic tracing
		 * 1 to enable, 0 to disable
		 * Put mimic/agent/{agentNum}/protocol/msg/proxy/set/trace/{enableOrNot}
		 * @param {number} agentNum Agent to set the PROXY tracing
		 * @param {string} enableOrNot Value to set the PROXY tracing
		 * @return {string} successful operation
		 */
		Protocol_proxy_set_trace(agentNum: number, enableOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/proxy/set/trace/' + (enableOrNot == null ? '' : encodeURIComponent(enableOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Show the agent's SFLOW argument structure
		 * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/sflow/get/args
		 * @param {number} agentNum Agent to show the SFLOW argument structure
		 * @return {string} successful operation
		 */
		Protocol_sflow_get_args(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/sflow/get/args', { responseType: 'text' });
		}

		/**
		 * Show the agent's SFLOW configuration
		 * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/sflow/get/config
		 * @param {number} agentNum Agent to show the SFLOW configuration
		 * @return {ConfigSFLOW} successful operation
		 */
		Protocol_sflow_get_config(agentNum: number): Observable<ConfigSFLOW> {
			return this.http.get<ConfigSFLOW>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/sflow/get/config', {});
		}

		/**
		 * Show the agent's SFLOW statistics
		 * Statistics of fields indicated in the headers
		 * Get mimic/agent/{agentNum}/protocol/msg/sflow/get/statistics
		 * @param {number} agentNum Agent to show SFLOW statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_sflow_get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/sflow/get/statistics', {});
		}

		/**
		 * Show the agent's SFLOW traffic tracing
		 * Trace 1 means enabled, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/sflow/get/trace
		 * @param {number} agentNum Agent to show whether SFLOW tracing is enabled
		 * @return {ConfigSFLOW} successful operation
		 */
		Protocol_sflow_get_trace(agentNum: number): Observable<ConfigSFLOW> {
			return this.http.get<ConfigSFLOW>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/sflow/get/trace', {});
		}

		/**
		 * Halt SFLOW traffic
		 * Halt SFLOW traffic
		 * Put mimic/agent/{agentNum}/protocol/msg/sflow/halt
		 * @param {number} agentNum Agent to set the SFLOW
		 * @return {string} successful operation
		 */
		Protocol_sflow_halt(agentNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/sflow/halt', null, { responseType: 'text' });
		}

		/**
		 * Reload SFLOW configuration before resuming traffic
		 * Reload SFLOW configuration before resuming traffic
		 * Put mimic/agent/{agentNum}/protocol/msg/sflow/reload
		 * @param {number} agentNum Agent to set the SFLOW
		 * @return {string} successful operation
		 */
		Protocol_sflow_reload(agentNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/sflow/reload', null, { responseType: 'text' });
		}

		/**
		 * Resuming traffic
		 * Resuming traffic
		 * Put mimic/agent/{agentNum}/protocol/msg/sflow/resume
		 * @param {number} agentNum Agent to set the SFLOW
		 * @return {string} successful operation
		 */
		Protocol_sflow_resume(agentNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/sflow/resume', null, { responseType: 'text' });
		}

		/**
		 * Set the agent's SFLOW configuration
		 * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Put mimic/agent/{agentNum}/protocol/msg/sflow/set/config/{argument}/{value}
		 * @param {number} agentNum Agent to set the SFLOW configuration
		 * @param {string} argument Parameter to set the SFLOW configuration
		 * @param {string} value Value to set the SFLOW configuration
		 * @return {string} successful operation
		 */
		Protocol_sflow_set_config(agentNum: number, argument: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/sflow/set/config/' + (argument == null ? '' : encodeURIComponent(argument)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's SFLOW traffic tracing
		 * 1 to enable, 0 to disable
		 * Put mimic/agent/{agentNum}/protocol/msg/sflow/set/trace/{enableOrNot}
		 * @param {number} agentNum Agent to set the SFLOW tracing
		 * @param {string} enableOrNot Value to set the SFLOW tracing
		 * @return {string} successful operation
		 */
		Protocol_sflow_set_trace(agentNum: number, enableOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/sflow/set/trace/' + (enableOrNot == null ? '' : encodeURIComponent(enableOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Show the agent's SNMPTCP argument structure
		 * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/snmptcp/get/args
		 * @param {number} agentNum Agent to show the SNMPTCP argument structure
		 * @return {string} successful operation
		 */
		Protocol_snmptcp_get_args(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmptcp/get/args', { responseType: 'text' });
		}

		/**
		 * Show the agent's SNMPTCP configuration
		 * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/snmptcp/get/config
		 * @param {number} agentNum Agent to show the SNMPTCP configuration
		 * @return {ConfigSNMPTCP} successful operation
		 */
		Protocol_snmptcp_get_config(agentNum: number): Observable<ConfigSNMPTCP> {
			return this.http.get<ConfigSNMPTCP>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmptcp/get/config', {});
		}

		/**
		 * Show the agent's SNMPTCP statistics
		 * Statistics of fields indicated in the headers
		 * Get mimic/agent/{agentNum}/protocol/msg/snmptcp/get/statistics
		 * @param {number} agentNum Agent to show SNMPTCP statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_snmptcp_get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmptcp/get/statistics', {});
		}

		/**
		 * Show the agent's SNMPTCP traffic tracing
		 * Trace 1 means enabled, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/snmptcp/get/trace
		 * @param {number} agentNum Agent to show whether SNMPTCP tracing is enabled
		 * @return {ConfigSNMPTCP} successful operation
		 */
		Protocol_snmptcp_get_trace(agentNum: number): Observable<ConfigSNMPTCP> {
			return this.http.get<ConfigSNMPTCP>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmptcp/get/trace', {});
		}

		/**
		 * Disable individual IP aliases on the agent and the simulator host
		 * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
		 * Put mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/disable/{ipaddress}/{port}
		 * @param {number} agentNum Agent to manipulate SNMPTCP IP alias
		 * @return {string} successful operation
		 */
		Protocol_snmptcp_ipalias_disable(agentNum: number, ipaddress: string, port: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmptcp/ipalias/disable/' + (ipaddress == null ? '' : encodeURIComponent(ipaddress)) + '/' + port, null, { responseType: 'text' });
		}

		/**
		 * Enable individual IP aliases on the agent and the simulator host
		 * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
		 * Put mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/enable/{ipaddress}/{port}
		 * @param {number} agentNum Agent to manipulate SNMPTCP IP alias
		 * @return {string} successful operation
		 */
		Protocol_snmptcp_ipalias_enable(agentNum: number, ipaddress: string, port: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmptcp/ipalias/enable/' + (ipaddress == null ? '' : encodeURIComponent(ipaddress)) + '/' + port, null, { responseType: 'text' });
		}

		/**
		 * Check individual IP aliases on the agent and the simulator host
		 * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
		 * Get mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/isenabled/{ipaddress}/{port}
		 * @param {number} agentNum Agent to manipulate SNMPTCP IP alias
		 * @return {string} successful operation
		 */
		Protocol_snmptcp_ipalias_isenabled(agentNum: number, ipaddress: string, port: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmptcp/ipalias/isenabled/' + (ipaddress == null ? '' : encodeURIComponent(ipaddress)) + '/' + port, { responseType: 'text' });
		}

		/**
		 * List all IP aliases on the agent and the simulator host
		 * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
		 * Get mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/list
		 * @param {number} agentNum Agent to manipulate SNMPTCP IP alias
		 * @return {Array<IPAlias>} successful operation
		 */
		Protocol_snmptcp_ipalias_list(agentNum: number): Observable<Array<IPAlias>> {
			return this.http.get<Array<IPAlias>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmptcp/ipalias/list', {});
		}

		/**
		 * Set the agent's SNMPTCP configuration
		 * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Put mimic/agent/{agentNum}/protocol/msg/snmptcp/set/config/{argument}/{value}
		 * @param {number} agentNum Agent to set the SNMPTCP configuration
		 * @param {string} argument Parameter to set the SNMPTCP configuration
		 * @param {string} value Value to set the SNMPTCP configuration
		 * @return {string} successful operation
		 */
		Protocol_snmptcp_set_config(agentNum: number, argument: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmptcp/set/config/' + (argument == null ? '' : encodeURIComponent(argument)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's SNMPTCP traffic tracing
		 * 1 to enable, 0 to disable
		 * Put mimic/agent/{agentNum}/protocol/msg/snmptcp/set/trace/{enableOrNot}
		 * @param {number} agentNum Agent to set the SNMPTCP tracing
		 * @param {string} enableOrNot Value to set the SNMPTCP tracing
		 * @return {string} successful operation
		 */
		Protocol_snmptcp_set_trace(agentNum: number, enableOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmptcp/set/trace/' + (enableOrNot == null ? '' : encodeURIComponent(enableOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Adds a new access entry with the specified parameters.
		 * Adds a new access entry with the specified parameters.
		 * Post mimic/agent/{agentNum}/protocol/msg/snmpv3/access/add/{groupName}/{prefix}/{securityModel}/{securityLevel}/{contextMatch}/{readView}/{writeView}/{notifyView}
		 * @param {number} agentNum Agent to add the SNMPv3 access
		 * @param {string} groupName SNMPv3 access name
		 * @param {string} prefix SNMPv3 prefix
		 * @param {string} securityModel SNMPv3 access security model
		 * @param {string} securityLevel SNMPv3 access security level
		 * @param {string} contextMatch SNMPv3 access context match
		 * @param {string} readView SNMPv3 access read view
		 * @param {string} writeView SNMPv3 access write view
		 * @param {string} notifyView SNMPv3 access notify view
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_access_add(agentNum: number, groupName: string, prefix: string, securityModel: string, securityLevel: string, contextMatch: string, readView: string, writeView: string, notifyView: string): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/access/add/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '/' + (prefix == null ? '' : encodeURIComponent(prefix)) + '/' + (securityModel == null ? '' : encodeURIComponent(securityModel)) + '/' + (securityLevel == null ? '' : encodeURIComponent(securityLevel)) + '/' + (contextMatch == null ? '' : encodeURIComponent(contextMatch)) + '/' + (readView == null ? '' : encodeURIComponent(readView)) + '/' + (writeView == null ? '' : encodeURIComponent(writeView)) + '/' + (notifyView == null ? '' : encodeURIComponent(notifyView)), null, { responseType: 'text' });
		}

		/**
		 * Clears all access entries.
		 * Clears all access entries.
		 * Delete mimic/agent/{agentNum}/protocol/msg/snmpv3/access/clear
		 * @param {number} agentNum Agent to add the SNMPv3 access
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_access_clear(agentNum: number): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/access/clear', { responseType: 'text' });
		}

		/**
		 * Deletes the specified access entry.
		 * Deletes the specified access entry.
		 * Delete mimic/agent/{agentNum}/protocol/msg/snmpv3/access/del/{accessName}
		 * @param {number} agentNum Agent to add the SNMPv3 access
		 * @param {string} accessName SNMPv3 access name
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_access_del(agentNum: number, accessName: string): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/access/del/' + (accessName == null ? '' : encodeURIComponent(accessName)), { responseType: 'text' });
		}

		/**
		 * Returns the current acccess entries as an array of strings.
		 * Returns the current acccess entries as an array of strings.
		 * Get mimic/agent/{agentNum}/protocol/msg/snmpv3/access/list
		 * @param {number} agentNum Agent to show the SNMPv3 configuration
		 * @return {Array<string>} successful operation
		 */
		Protocol_snmpv3_access_list(agentNum: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/access/list', {});
		}

		/**
		 * Returns the SNMPv3 configuration.
		 * Returns the SNMPv3 configuration.
		 * Get mimic/agent/{agentNum}/protocol/msg/snmpv3/get/config
		 * @param {number} agentNum Agent to show the SNMPv3 configuration
		 * @return {ConfigSNMPv3} successful operation
		 */
		Protocol_snmpv3_get_config(agentNum: number): Observable<ConfigSNMPv3> {
			return this.http.get<ConfigSNMPv3>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/get/config', {});
		}

		/**
		 * Retrieves the contextEngineID for the agent instance.
		 * Retrieves the contextEngineID for the agent instance.
		 * Get mimic/agent/{agentNum}/protocol/msg/snmpv3/get/context_engineid
		 * @param {number} agentNum Agent to show the SNMPv3 engine
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_get_context_engineid(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/get/context_engineid', { responseType: 'text' });
		}

		/**
		 * Retrieves the number of times the agent has been restarted.
		 * Retrieves the number of times the agent has been restarted.
		 * Get mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineboots
		 * @param {number} agentNum Agent to show the SNMPv3 engine
		 * @return {number} successful operation
		 */
		Protocol_snmpv3_get_engineboots(agentNum: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/get/engineboots', {});
		}

		/**
		 * For started agents, retrieves the current engineID in use by the snmpv3 module.
		 * For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...
		 * Get mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineid
		 * @param {number} agentNum Agent to show the SNMPv3 configuration
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_get_engineid(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/get/engineid', { responseType: 'text' });
		}

		/**
		 * Retrieves the time in seconds for which the agent has been running.
		 * Retrieves the time in seconds for which the agent has been running.
		 * Get mimic/agent/{agentNum}/protocol/msg/snmpv3/get/enginetime
		 * @param {number} agentNum Agent to show the SNMPv3 engine
		 * @return {number} successful operation
		 */
		Protocol_snmpv3_get_enginetime(agentNum: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/get/enginetime', {});
		}

		/**
		 * Adds a new group entry with the specified parameters.
		 * Adds a new group entry with the specified parameters.
		 * Post mimic/agent/{agentNum}/protocol/msg/snmpv3/group/add/{groupName}/{securityModel}/{securityName}
		 * @param {number} agentNum Agent to add the SNMPv3 group
		 * @param {string} groupName SNMPv3 group name
		 * @param {string} securityModel SNMPv3 group security model
		 * @param {string} securityName SNMPv3 group security name
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_group_add(agentNum: number, groupName: string, securityModel: string, securityName: string): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/group/add/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '/' + (securityModel == null ? '' : encodeURIComponent(securityModel)) + '/' + (securityName == null ? '' : encodeURIComponent(securityName)), null, { responseType: 'text' });
		}

		/**
		 * Clears all group entries.
		 * Clears all group entries.
		 * Delete mimic/agent/{agentNum}/protocol/msg/snmpv3/group/clear
		 * @param {number} agentNum Agent to add the SNMPv3 group
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_group_clear(agentNum: number): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/group/clear', { responseType: 'text' });
		}

		/**
		 * Deletes the specified group entry.
		 * Deletes the specified group entry.
		 * Delete mimic/agent/{agentNum}/protocol/msg/snmpv3/group/del/{groupName}
		 * @param {number} agentNum Agent to add the SNMPv3 group
		 * @param {string} groupName SNMPv3 group name
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_group_del(agentNum: number, groupName: string): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/group/del/' + (groupName == null ? '' : encodeURIComponent(groupName)), { responseType: 'text' });
		}

		/**
		 * Returns the current group entries as an array of strings.
		 * Returns the current group entries as an array of strings.
		 * Get mimic/agent/{agentNum}/protocol/msg/snmpv3/group/list
		 * @param {number} agentNum Agent to show the SNMPv3 configuration
		 * @return {Array<string>} successful operation
		 */
		Protocol_snmpv3_group_list(agentNum: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/group/list', {});
		}

		/**
		 * Changes the SNMPv3 configuration.
		 * Changes the SNMPv3 configuration.
		 * Put mimic/agent/{agentNum}/protocol/msg/snmpv3/set/config/{parameter}/{value}
		 * @param {number} agentNum Agent to show the SNMPv3 configuration
		 * @param {string} parameter SNMPv3 configuration parameter
		 * @param {string} value SNMPv3 parameter value
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_set_config(agentNum: number, parameter: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/set/config/' + (parameter == null ? '' : encodeURIComponent(parameter)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Adds a new user entry with the specified parameters.
		 * Adds a new user entry with the specified parameters.
		 * Post mimic/agent/{agentNum}/protocol/msg/snmpv3/user/add/{userName}/{securityName}/{authProtocol}/{authKey}/{privProtocol}/{privKey}
		 * @param {number} agentNum Agent to add the SNMPv3 user
		 * @param {string} userName SNMPv3 user name
		 * @param {string} securityName SNMPv3 user security name
		 * @param {string} authProtocol SNMPv3 user authentication protocol
		 * @param {string} authKey SNMPv3 user authentication key
		 * @param {string} privProtocol SNMPv3 user privacy encryption protocol
		 * @param {string} privKey SNMPv3 user privacy encryption key
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_user_add(agentNum: number, userName: string, securityName: string, authProtocol: string, authKey: string, privProtocol: string, privKey: string): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/user/add/' + (userName == null ? '' : encodeURIComponent(userName)) + '/' + (securityName == null ? '' : encodeURIComponent(securityName)) + '/' + (authProtocol == null ? '' : encodeURIComponent(authProtocol)) + '/' + (authKey == null ? '' : encodeURIComponent(authKey)) + '/' + (privProtocol == null ? '' : encodeURIComponent(privProtocol)) + '/' + (privKey == null ? '' : encodeURIComponent(privKey)), null, { responseType: 'text' });
		}

		/**
		 * Clears all user entries.
		 * Clears all user entries.
		 * Delete mimic/agent/{agentNum}/protocol/msg/snmpv3/user/clear
		 * @param {number} agentNum Agent to add the SNMPv3 user
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_user_clear(agentNum: number): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/user/clear', { responseType: 'text' });
		}

		/**
		 * Deletes the specified user entry.
		 * Deletes the specified user entry.
		 * Delete mimic/agent/{agentNum}/protocol/msg/snmpv3/user/del/{userName}
		 * @param {number} agentNum Agent to add the SNMPv3 user
		 * @param {string} userName SNMPv3 user name
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_user_del(agentNum: number, userName: string): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/user/del/' + (userName == null ? '' : encodeURIComponent(userName)), { responseType: 'text' });
		}

		/**
		 * Returns the current user entries as a Tcl list.
		 * Returns the current user entries as a Tcl list.
		 * Get mimic/agent/{agentNum}/protocol/msg/snmpv3/user/list
		 * @param {number} agentNum Agent to show the SNMPv3 configuration
		 * @return {Array<string>} successful operation
		 */
		Protocol_snmpv3_user_list(agentNum: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/user/list', {});
		}

		/**
		 * Saves current user settings in the currently loaded USM config file.
		 * Saves current user settings in the currently loaded USM config file.
		 * Put mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/save
		 * @param {number} agentNum Agent to show the SNMPv3 configuration
		 * @return {Array<string>} successful operation
		 */
		Protocol_snmpv3_usm_save(agentNum: number): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/usm/save', null, {});
		}

		/**
		 * Saves current user settings in the specified USM config file.
		 * Saves current user settings in the specified USM config file.
		 * Put mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/saveas/{filename}
		 * @param {number} agentNum Agent to show the SNMPv3 configuration
		 * @param {string} filename Filename to save
		 * @return {Array<string>} successful operation
		 */
		Protocol_snmpv3_usm_saveas(agentNum: number, filename: string): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/usm/saveas/' + (filename == null ? '' : encodeURIComponent(filename)), null, {});
		}

		/**
		 * Saves current group, access, view settings in the currently loaded VACM config file.
		 * Saves current group, access, view settings in the currently loaded VACM config file.
		 * Put mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/save
		 * @param {number} agentNum Agent to show the SNMPv3 configuration
		 * @return {Array<string>} successful operation
		 */
		Protocol_snmpv3_vacm_save(agentNum: number): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/vacm/save', null, {});
		}

		/**
		 * Saves current group, access, view settings in the specified VACM config file.
		 * Saves current group, access, view settings in the specified VACM config file.
		 * Put mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/saveas/{filename}
		 * @param {number} agentNum Agent to show the SNMPv3 configuration
		 * @param {string} filename Filename to save
		 * @return {Array<string>} successful operation
		 */
		Protocol_snmpv3_vacm_saveas(agentNum: number, filename: string): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/vacm/saveas/' + (filename == null ? '' : encodeURIComponent(filename)), null, {});
		}

		/**
		 * Adds a new view entry with the specified parameters.
		 * Adds a new view entry with the specified parameters.
		 * Post mimic/agent/{agentNum}/protocol/msg/snmpv3/view/add/{viewName}/{viewType}/{subtree}/{mask}
		 * @param {number} agentNum Agent to add the SNMPv3 view
		 * @param {string} viewName SNMPv3 view name
		 * @param {string} viewType SNMPv3 view type
		 * @param {string} subtree SNMPv3 view subtree
		 * @param {string} mask SNMPv3 view mask
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_view_add(agentNum: number, viewName: string, viewType: string, subtree: string, mask: string): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/view/add/' + (viewName == null ? '' : encodeURIComponent(viewName)) + '/' + (viewType == null ? '' : encodeURIComponent(viewType)) + '/' + (subtree == null ? '' : encodeURIComponent(subtree)) + '/' + (mask == null ? '' : encodeURIComponent(mask)), null, { responseType: 'text' });
		}

		/**
		 * Clears all view entries.
		 * Clears all view entries.
		 * Delete mimic/agent/{agentNum}/protocol/msg/snmpv3/view/clear
		 * @param {number} agentNum Agent to add the SNMPv3 view
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_view_clear(agentNum: number): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/view/clear', { responseType: 'text' });
		}

		/**
		 * Deletes the specified view entry.
		 * Deletes the specified view entry.
		 * Delete mimic/agent/{agentNum}/protocol/msg/snmpv3/view/del/{viewName}
		 * @param {number} agentNum Agent to add the SNMPv3 view
		 * @param {string} viewName SNMPv3 view name
		 * @return {string} successful operation
		 */
		Protocol_snmpv3_view_del(agentNum: number, viewName: string): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/view/del/' + (viewName == null ? '' : encodeURIComponent(viewName)), { responseType: 'text' });
		}

		/**
		 * Returns the current view entries as an array of strings.
		 * Returns the current view entries as an array of strings.
		 * Get mimic/agent/{agentNum}/protocol/msg/snmpv3/view/list
		 * @param {number} agentNum Agent to show the SNMPv3 configuration
		 * @return {Array<string>} successful operation
		 */
		Protocol_snmpv3_view_list(agentNum: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/snmpv3/view/list', {});
		}

		/**
		 * Show the agent's SSH argument structure
		 * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/ssh/get/args
		 * @param {number} agentNum Agent to show the SSH argument structure
		 * @return {string} successful operation
		 */
		Protocol_ssh_get_args(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ssh/get/args', { responseType: 'text' });
		}

		/**
		 * Show the agent's SSH configuration
		 * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/ssh/get/config
		 * @param {number} agentNum Agent to show the SSH configuration
		 * @return {ConfigSSH} successful operation
		 */
		Protocol_ssh_get_config(agentNum: number): Observable<ConfigSSH> {
			return this.http.get<ConfigSSH>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ssh/get/config', {});
		}

		/**
		 * Show the agent's SSH statistics
		 * Statistics of fields indicated in the headers
		 * Get mimic/agent/{agentNum}/protocol/msg/ssh/get/statistics
		 * @param {number} agentNum Agent to show SSH statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_ssh_get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ssh/get/statistics', {});
		}

		/**
		 * Show the agent's SSH traffic tracing
		 * Trace 1 means enabled, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/ssh/get/trace
		 * @param {number} agentNum Agent to show whether SSH tracing is enabled
		 * @return {ConfigSSH} successful operation
		 */
		Protocol_ssh_get_trace(agentNum: number): Observable<ConfigSSH> {
			return this.http.get<ConfigSSH>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ssh/get/trace', {});
		}

		/**
		 * Disable individual IP aliases on the agent and the simulator host
		 * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
		 * Put mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/disable/{ipaddress}/{port}
		 * @param {number} agentNum Agent to manipulate SSH IP alias
		 * @return {string} successful operation
		 */
		Protocol_ssh_ipalias_disable(agentNum: number, ipaddress: string, port: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ssh/ipalias/disable/' + (ipaddress == null ? '' : encodeURIComponent(ipaddress)) + '/' + port, null, { responseType: 'text' });
		}

		/**
		 * Enable individual IP aliases on the agent and the simulator host
		 * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
		 * Put mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/enable/{ipaddress}/{port}
		 * @param {number} agentNum Agent to manipulate SSH IP alias
		 * @return {string} successful operation
		 */
		Protocol_ssh_ipalias_enable(agentNum: number, ipaddress: string, port: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ssh/ipalias/enable/' + (ipaddress == null ? '' : encodeURIComponent(ipaddress)) + '/' + port, null, { responseType: 'text' });
		}

		/**
		 * Check individual IP aliases on the agent and the simulator host
		 * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
		 * Get mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/isenabled/{ipaddress}/{port}
		 * @param {number} agentNum Agent to manipulate SSH IP alias
		 * @return {string} successful operation
		 */
		Protocol_ssh_ipalias_isenabled(agentNum: number, ipaddress: string, port: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ssh/ipalias/isenabled/' + (ipaddress == null ? '' : encodeURIComponent(ipaddress)) + '/' + port, { responseType: 'text' });
		}

		/**
		 * List all IP aliases on the agent and the simulator host
		 * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
		 * Get mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/list
		 * @param {number} agentNum Agent to manipulate SSH IP alias
		 * @return {Array<IPAlias>} successful operation
		 */
		Protocol_ssh_ipalias_list(agentNum: number): Observable<Array<IPAlias>> {
			return this.http.get<Array<IPAlias>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ssh/ipalias/list', {});
		}

		/**
		 * Set the agent's SSH configuration
		 * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Put mimic/agent/{agentNum}/protocol/msg/ssh/set/config/{argument}/{value}
		 * @param {number} agentNum Agent to set the SSH configuration
		 * @param {string} argument Parameter to set the SSH configuration
		 * @param {string} value Value to set the SSH configuration
		 * @return {string} successful operation
		 */
		Protocol_ssh_set_config(agentNum: number, argument: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ssh/set/config/' + (argument == null ? '' : encodeURIComponent(argument)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's SSH traffic tracing
		 * 1 to enable, 0 to disable
		 * Put mimic/agent/{agentNum}/protocol/msg/ssh/set/trace/{enableOrNot}
		 * @param {number} agentNum Agent to set the SSH tracing
		 * @param {string} enableOrNot Value to set the SSH tracing
		 * @return {string} successful operation
		 */
		Protocol_ssh_set_trace(agentNum: number, enableOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/ssh/set/trace/' + (enableOrNot == null ? '' : encodeURIComponent(enableOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Show the agent's SYSLOG argument structure
		 * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/syslog/get/args
		 * @param {number} agentNum Agent to show the SYSLOG argument structure
		 * @return {string} successful operation
		 */
		Protocol_syslog_get_args(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/syslog/get/args', { responseType: 'text' });
		}

		/**
		 * Show the agent's SYSLOG configuration
		 * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/syslog/get/config
		 * @param {number} agentNum Agent to show the SYSLOG configuration
		 * @return {ConfigSYSLOG} successful operation
		 */
		Protocol_syslog_get_config(agentNum: number): Observable<ConfigSYSLOG> {
			return this.http.get<ConfigSYSLOG>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/syslog/get/config', {});
		}

		/**
		 * Show the agent's SYSLOG statistics
		 * Statistics of fields indicated in the headers
		 * Get mimic/agent/{agentNum}/protocol/msg/syslog/get/statistics
		 * @param {number} agentNum Agent to show SYSLOG statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_syslog_get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/syslog/get/statistics', {});
		}

		/**
		 * Show the agent's SYSLOG traffic tracing
		 * Trace 1 means enabled, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/syslog/get/trace
		 * @param {number} agentNum Agent to show whether SYSLOG tracing is enabled
		 * @return {ConfigSYSLOG} successful operation
		 */
		Protocol_syslog_get_trace(agentNum: number): Observable<ConfigSYSLOG> {
			return this.http.get<ConfigSYSLOG>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/syslog/get/trace', {});
		}

		/**
		 * Show the outgoing message's attributes
		 * Attribute can be server , sequence , separator , hostname , timestamp
		 * Get mimic/agent/{agentNum}/protocol/msg/syslog/get/{attr}
		 * @param {number} agentNum Agent to set the SYSLOG tracing
		 * @param {string} attr Attribute
		 * @return {string} successful operation
		 */
		Protocol_syslog_get_attr(agentNum: number, attr: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/syslog/get/' + (attr == null ? '' : encodeURIComponent(attr)), { responseType: 'text' });
		}

		/**
		 * Set the agent's SYSLOG traffic tracing
		 * 1 to enable, 0 to disable
		 * Post mimic/agent/{agentNum}/protocol/msg/syslog/send/{pri}
		 * @param {number} agentNum Agent to set the SYSLOG tracing
		 * @param {number} pri Message Priority
		 * @return {string} successful operation
		 */
		Protocol_syslog_send(agentNum: number, pri: number, requestBody: SyslogMsg): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/syslog/send/' + pri, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Set the agent's SYSLOG configuration
		 * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Put mimic/agent/{agentNum}/protocol/msg/syslog/set/config/{argument}/{value}
		 * @param {number} agentNum Agent to set the SYSLOG configuration
		 * @param {string} argument Parameter to set the SYSLOG configuration
		 * @param {string} value Value to set the SYSLOG configuration
		 * @return {string} successful operation
		 */
		Protocol_syslog_set_config(agentNum: number, argument: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/syslog/set/config/' + (argument == null ? '' : encodeURIComponent(argument)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's SYSLOG traffic tracing
		 * 1 to enable, 0 to disable
		 * Put mimic/agent/{agentNum}/protocol/msg/syslog/set/trace/{enableOrNot}
		 * @param {number} agentNum Agent to set the SYSLOG tracing
		 * @param {string} enableOrNot Value to set the SYSLOG tracing
		 * @return {string} successful operation
		 */
		Protocol_syslog_set_trace(agentNum: number, enableOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/syslog/set/trace/' + (enableOrNot == null ? '' : encodeURIComponent(enableOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Set the outgoing message's attributes
		 * Attribute can be server , sequence , separator , hostname , timestamp
		 * Put mimic/agent/{agentNum}/protocol/msg/syslog/set/{attr}/{value}
		 * @param {number} agentNum Agent to set the SYSLOG tracing
		 * @param {string} attr Attribute
		 * @return {string} successful operation
		 */
		Protocol_syslog_set_attr(agentNum: number, attr: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/syslog/set/' + (attr == null ? '' : encodeURIComponent(attr)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Changes the connection's current logon.
		 * Logon change allows (hidden) commands for a different access mode to run.
		 * Put mimic/agent/{agentNum}/protocol/msg/telnet/connection/logon/{connectionID}/{user}/{password}
		 * @param {number} agentNum Agent to manipulate TELNET connection
		 * @return {Array<string>} successful operation
		 */
		Protocol_telnet_connection_logon(agentNum: number, connectionID: number, user: string, password: string): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/connection/logon/' + connectionID + '/' + (user == null ? '' : encodeURIComponent(user)) + '/' + (password == null ? '' : encodeURIComponent(password)), null, {});
		}

		/**
		 * Executes the command asynchronously .
		 * Equivalent of the command typed in by the user.
		 * Put mimic/agent/{agentNum}/protocol/msg/telnet/connection/request/{connectionID}/{command}
		 * @param {number} agentNum Agent to manipulate TELNET connection
		 * @return {Array<string>} successful operation
		 */
		Protocol_telnet_connection_request(agentNum: number, connectionID: number, command: string): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/connection/request/' + connectionID + '/' + (command == null ? '' : encodeURIComponent(command)), null, {});
		}

		/**
		 * Triggers the asynchronous signal event with the specified signal name
		 * Signal name is either connect or idle
		 * Put mimic/agent/{agentNum}/protocol/msg/telnet/connection/signal/{connectionID}/{signalName}
		 * @param {number} agentNum Agent to manipulate TELNET connection
		 * @return {Array<string>} successful operation
		 */
		Protocol_telnet_connection_signal(agentNum: number, connectionID: number, signalName: string): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/connection/signal/' + connectionID + '/' + (signalName == null ? '' : encodeURIComponent(signalName)), null, {});
		}

		/**
		 * Show the agent's TELNET argument structure
		 * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/telnet/get/args
		 * @param {number} agentNum Agent to show the TELNET argument structure
		 * @return {string} successful operation
		 */
		Protocol_telnet_get_args(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/get/args', { responseType: 'text' });
		}

		/**
		 * Show the agent's TELNET configuration
		 * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/telnet/get/config
		 * @param {number} agentNum Agent to show the TELNET configuration
		 * @return {ConfigTELNET} successful operation
		 */
		Protocol_telnet_get_config(agentNum: number): Observable<ConfigTELNET> {
			return this.http.get<ConfigTELNET>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/get/config', {});
		}

		/**
		 * Show the agent's TELNET statistics
		 * Statistics of fields indicated in the headers
		 * Get mimic/agent/{agentNum}/protocol/msg/telnet/get/statistics
		 * @param {number} agentNum Agent to show TELNET statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_telnet_get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/get/statistics', {});
		}

		/**
		 * Show the agent's TELNET traffic tracing
		 * Trace 1 means enabled, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/telnet/get/trace
		 * @param {number} agentNum Agent to show whether TELNET tracing is enabled
		 * @return {ConfigTELNET} successful operation
		 */
		Protocol_telnet_get_trace(agentNum: number): Observable<ConfigTELNET> {
			return this.http.get<ConfigTELNET>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/get/trace', {});
		}

		/**
		 * Disable individual IP aliases on the agent and the simulator host
		 * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
		 * Put mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/disable/{ipaddress}/{port}
		 * @param {number} agentNum Agent to manipulate TELNET IP alias
		 * @return {string} successful operation
		 */
		Protocol_telnet_ipalias_disable(agentNum: number, ipaddress: string, port: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/ipalias/disable/' + (ipaddress == null ? '' : encodeURIComponent(ipaddress)) + '/' + port, null, { responseType: 'text' });
		}

		/**
		 * Enable individual IP aliases on the agent and the simulator host
		 * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
		 * Put mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/enable/{ipaddress}/{port}
		 * @param {number} agentNum Agent to manipulate TELNET IP alias
		 * @return {string} successful operation
		 */
		Protocol_telnet_ipalias_enable(agentNum: number, ipaddress: string, port: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/ipalias/enable/' + (ipaddress == null ? '' : encodeURIComponent(ipaddress)) + '/' + port, null, { responseType: 'text' });
		}

		/**
		 * Check individual IP aliases on the agent and the simulator host
		 * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
		 * Get mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/isenabled/{ipaddress}/{port}
		 * @param {number} agentNum Agent to manipulate TELNET IP alias
		 * @return {string} successful operation
		 */
		Protocol_telnet_ipalias_isenabled(agentNum: number, ipaddress: string, port: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/ipalias/isenabled/' + (ipaddress == null ? '' : encodeURIComponent(ipaddress)) + '/' + port, { responseType: 'text' });
		}

		/**
		 * List all IP aliases on the agent and the simulator host
		 * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
		 * Get mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/list
		 * @param {number} agentNum Agent to manipulate TELNET IP alias
		 * @return {Array<IPAlias>} successful operation
		 */
		Protocol_telnet_ipalias_list(agentNum: number): Observable<Array<IPAlias>> {
			return this.http.get<Array<IPAlias>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/ipalias/list', {});
		}

		/**
		 * Show the agent's TELNET connections
		 * IDs of all connected connections
		 * Get mimic/agent/{agentNum}/protocol/msg/telnet/server/get/connections
		 * @param {number} agentNum Agent to show TELNET configuration
		 * @return {Array<number>} successful operation
		 */
		Protocol_telnet_server_get_connections(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/server/get/connections', {});
		}

		/**
		 * Show the agent's TELNET keymap file name
		 * Keymap file name
		 * Get mimic/agent/{agentNum}/protocol/msg/telnet/server/get/keymap
		 * @param {number} agentNum Agent to show TELNET statistics
		 * @return {Array<string>} successful operation
		 */
		Protocol_telnet_server_get_keymap(agentNum: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/server/get/keymap', {});
		}

		/**
		 * Show the agent's TELNET rules db file name
		 * Rules db file name
		 * Get mimic/agent/{agentNum}/protocol/msg/telnet/server/get/rulesdb
		 * @param {number} agentNum Agent to show TELNET statistics
		 * @return {Array<string>} successful operation
		 */
		Protocol_telnet_server_get_rulesdb(agentNum: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/server/get/rulesdb', {});
		}

		/**
		 * Show the agent's TELNET server state
		 * Return 1 means accepting connections, 0 not
		 * Get mimic/agent/{agentNum}/protocol/msg/telnet/server/get/state
		 * @param {number} agentNum Agent to show TELNET statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_telnet_server_get_state(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/server/get/state', {});
		}

		/**
		 * Show the agent's TELNET user db file name
		 * User db file name
		 * Get mimic/agent/{agentNum}/protocol/msg/telnet/server/get/userdb
		 * @param {number} agentNum Agent to show TELNET statistics
		 * @return {Array<string>} successful operation
		 */
		Protocol_telnet_server_get_userdb(agentNum: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/server/get/userdb', {});
		}

		/**
		 * Show the agent's TELNET users
		 * List of users
		 * Get mimic/agent/{agentNum}/protocol/msg/telnet/server/get/users
		 * @param {number} agentNum Agent to show TELNET configuration
		 * @return {Array<TelnetUser>} successful operation
		 */
		Protocol_telnet_server_get_users(agentNum: number): Observable<Array<TelnetUser>> {
			return this.http.get<Array<TelnetUser>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/server/get/users', {});
		}

		/**
		 * Set the agent's TELNET configuration
		 * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Put mimic/agent/{agentNum}/protocol/msg/telnet/set/config/{argument}/{value}
		 * @param {number} agentNum Agent to set the TELNET configuration
		 * @param {string} argument Parameter to set the TELNET configuration
		 * @param {string} value Value to set the TELNET configuration
		 * @return {string} successful operation
		 */
		Protocol_telnet_set_config(agentNum: number, argument: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/set/config/' + (argument == null ? '' : encodeURIComponent(argument)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's TELNET traffic tracing
		 * 1 to enable, 0 to disable
		 * Put mimic/agent/{agentNum}/protocol/msg/telnet/set/trace/{enableOrNot}
		 * @param {number} agentNum Agent to set the TELNET tracing
		 * @param {string} enableOrNot Value to set the TELNET tracing
		 * @return {string} successful operation
		 */
		Protocol_telnet_set_trace(agentNum: number, enableOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/telnet/set/trace/' + (enableOrNot == null ? '' : encodeURIComponent(enableOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Show the agent's TFTP argument structure
		 * Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/tftp/get/args
		 * @param {number} agentNum Agent to show the TFTP argument structure
		 * @return {string} successful operation
		 */
		Protocol_tftp_get_args(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tftp/get/args', { responseType: 'text' });
		}

		/**
		 * Show the agent's TFTP configuration
		 * Agent's TFTP configuration
		 * Get mimic/agent/{agentNum}/protocol/msg/tftp/get/config
		 * @param {number} agentNum Agent to show the TFTP configuration
		 * @return {ConfigTFTP} successful operation
		 */
		Protocol_tftp_get_config(agentNum: number): Observable<ConfigTFTP> {
			return this.http.get<ConfigTFTP>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tftp/get/config', {});
		}

		/**
		 * Show the agent's TFTP statistics
		 * Statistics of fields indicated in the headers
		 * Get mimic/agent/{agentNum}/protocol/msg/tftp/get/statistics
		 * @param {number} agentNum Agent to show TFTP statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_tftp_get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tftp/get/statistics', {});
		}

		/**
		 * Show the agent's TFTP traffic tracing
		 * Trace 1 means enabled, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/tftp/get/trace
		 * @param {number} agentNum Agent to show whether TFTP tracing is enabled
		 * @return {ConfigTFTP} successful operation
		 */
		Protocol_tftp_get_trace(agentNum: number): Observable<ConfigTFTP> {
			return this.http.get<ConfigTFTP>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tftp/get/trace', {});
		}

		/**
		 * Create a read session to download srcfile from server
		 * Session ID is returned
		 * Post mimic/agent/{agentNum}/protocol/msg/tftp/session/read/server/{srcfile}
		 * @param {number} agentNum Agent to show TFTP statistics
		 * @param {string} srcfile File name to retrieve from server
		 * @return {Array<number>} successful operation
		 */
		Protocol_tftp_session_read(agentNum: number, srcfile: string): Observable<Array<number>> {
			return this.http.post<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tftp/session/read/server/' + (srcfile == null ? '' : encodeURIComponent(srcfile)), null, {});
		}

		/**
		 * Create a read session to upload srcfile to server
		 * Session ID is returned
		 * Post mimic/agent/{agentNum}/protocol/msg/tftp/session/write/server/{srcfile}
		 * @param {number} agentNum Agent to show TFTP statistics
		 * @param {string} srcfile File name to upload to server
		 * @return {Array<number>} successful operation
		 */
		Protocol_tftp_session_write(agentNum: number, srcfile: string): Observable<Array<number>> {
			return this.http.post<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tftp/session/write/server/' + (srcfile == null ? '' : encodeURIComponent(srcfile)), null, {});
		}

		/**
		 * Set the agent's TFTP configuration
		 * Agent's TFTP configuration
		 * Put mimic/agent/{agentNum}/protocol/msg/tftp/set/config/{argument}/{value}
		 * @param {number} agentNum Agent to set the TFTP configuration
		 * @param {string} argument Parameter to set the TFTP configuration
		 * @param {string} value Value to set the TFTP configuration
		 * @return {string} successful operation
		 */
		Protocol_tftp_set_config(agentNum: number, argument: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tftp/set/config/' + (argument == null ? '' : encodeURIComponent(argument)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's TFTP traffic tracing
		 * 1 to enable, 0 to disable
		 * Put mimic/agent/{agentNum}/protocol/msg/tftp/set/trace/{enableOrNot}
		 * @param {number} agentNum Agent to set the TFTP tracing
		 * @param {string} enableOrNot Value to set the TFTP tracing
		 * @return {string} successful operation
		 */
		Protocol_tftp_set_trace(agentNum: number, enableOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tftp/set/trace/' + (enableOrNot == null ? '' : encodeURIComponent(enableOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Show a parameter of a TFTP sesssion
		 * Parameter is server , port , or dstfile
		 * Get mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/get/{parameter}
		 * @param {number} agentNum Agent to show TFTP parameter
		 * @param {string} sessionID SessionID
		 * @param {string} parameter Parameter to show
		 * @return {string} successful operation
		 */
		Protocol_tftp_session_get_parameter(agentNum: number, sessionID: string, parameter: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tftp/' + (sessionID == null ? '' : encodeURIComponent(sessionID)) + '/get/' + (parameter == null ? '' : encodeURIComponent(parameter)), { responseType: 'text' });
		}

		/**
		 * Set a parameter of a TFTP sesssion
		 * Parameter is server , port , or dstfile
		 * Put mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/set/{parameter}/{value}
		 * @param {number} agentNum Agent to set TFTP parameter
		 * @param {string} sessionID SessionID
		 * @param {string} parameter Parameter to set
		 * @param {string} value Value to set
		 * @return {string} successful operation
		 */
		Protocol_tftp_session_set_parameter(agentNum: number, sessionID: string, parameter: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tftp/' + (sessionID == null ? '' : encodeURIComponent(sessionID)) + '/set/' + (parameter == null ? '' : encodeURIComponent(parameter)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Start a TFTP sesssion
		 * Start uploading or downloading the file
		 * Put mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/start
		 * @param {number} agentNum Agent to start TFTP transaction
		 * @param {string} sessionID SessionID
		 * @return {string} successful operation
		 */
		Protocol_tftp_session_start(agentNum: number, sessionID: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tftp/' + (sessionID == null ? '' : encodeURIComponent(sessionID)) + '/start', null, { responseType: 'text' });
		}

		/**
		 * Check a TFTP sesssion's status
		 * Status includes running state, bytes transfered, and time elapsed
		 * Get mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/status
		 * @param {number} agentNum Agent to show TFTP transaction
		 * @param {string} sessionID SessionID
		 * @return {string} successful operation
		 */
		Protocol_tftp_session_status(agentNum: number, sessionID: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tftp/' + (sessionID == null ? '' : encodeURIComponent(sessionID)) + '/status', { responseType: 'text' });
		}

		/**
		 * Stop a TFTP sesssion
		 * Stop uploading or downloading the file
		 * Put mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/stop
		 * @param {number} agentNum Agent to stop TFTP transaction
		 * @param {string} sessionID SessionID
		 * @return {string} successful operation
		 */
		Protocol_tftp_session_stop(agentNum: number, sessionID: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tftp/' + (sessionID == null ? '' : encodeURIComponent(sessionID)) + '/stop', null, { responseType: 'text' });
		}

		/**
		 * Show the agent's TOD argument structure
		 * Agent's TOD configuration
		 * Get mimic/agent/{agentNum}/protocol/msg/tod/get/args
		 * @param {number} agentNum Agent to show the TOD argument structure
		 * @return {string} successful operation
		 */
		Protocol_tod_get_args(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tod/get/args', { responseType: 'text' });
		}

		/**
		 * Show the agent's TOD configuration
		 * Agent's TOD configuration
		 * Get mimic/agent/{agentNum}/protocol/msg/tod/get/config
		 * @param {number} agentNum Agent to show the TOD configuration
		 * @return {ConfigTOD} successful operation
		 */
		Protocol_tod_get_config(agentNum: number): Observable<ConfigTOD> {
			return this.http.get<ConfigTOD>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tod/get/config', {});
		}

		/**
		 * Show the agent's TOD statistics
		 * Statistics of fields indicated in the headers
		 * Get mimic/agent/{agentNum}/protocol/msg/tod/get/statistics
		 * @param {number} agentNum Agent to show TOD statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_tod_get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tod/get/statistics', {});
		}

		/**
		 * Show the agent's TOD traffic tracing
		 * Trace 1 means enabled, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/tod/get/trace
		 * @param {number} agentNum Agent to show whether TOD tracing is enabled
		 * @return {ConfigTOD} successful operation
		 */
		Protocol_tod_get_trace(agentNum: number): Observable<ConfigTOD> {
			return this.http.get<ConfigTOD>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tod/get/trace', {});
		}

		/**
		 * Retrieve TOD time
		 * Retrive time from server
		 * Get mimic/agent/{agentNum}/protocol/msg/tod/gettime/server/{serverAddr}/port/{portNum}/script/{scriptName}/timeout/{timeSec}/retries/{numRetries}
		 * @param {number} agentNum Agent to show TOD return
		 * @param {string} serverAddr serverAddr
		 * @param {number} portNum portNum
		 * @param {string} scriptName scriptName
		 * @param {number} timeSec timeSec
		 * @param {number} numRetries numRetries
		 * @return {Array<string>} successful operation
		 */
		Protocol_tod_gettime(agentNum: number, serverAddr: string, portNum: number, scriptName: string, timeSec: number, numRetries: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tod/gettime/server/' + (serverAddr == null ? '' : encodeURIComponent(serverAddr)) + '/port/' + portNum + '/script/' + (scriptName == null ? '' : encodeURIComponent(scriptName)) + '/timeout/' + timeSec + '/retries/' + numRetries, {});
		}

		/**
		 * Set the agent's TOD configuration
		 * Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Put mimic/agent/{agentNum}/protocol/msg/tod/set/config/{argument}/{value}
		 * @param {number} agentNum Agent to set the TOD configuration
		 * @param {string} argument Parameter to set the TOD configuration
		 * @param {string} value Value to set the TOD configuration
		 * @return {string} successful operation
		 */
		Protocol_tod_set_config(agentNum: number, argument: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tod/set/config/' + (argument == null ? '' : encodeURIComponent(argument)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's TOD traffic tracing
		 * 1 to enable, 0 to disable
		 * Put mimic/agent/{agentNum}/protocol/msg/tod/set/trace/{enableOrNot}
		 * @param {number} agentNum Agent to set the TOD tracing
		 * @param {string} enableOrNot Value to set the TOD tracing
		 * @return {string} successful operation
		 */
		Protocol_tod_set_trace(agentNum: number, enableOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/tod/set/trace/' + (enableOrNot == null ? '' : encodeURIComponent(enableOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Show the agent's WEB argument structure
		 * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/web/get/args
		 * @param {number} agentNum Agent to show the WEB argument structure
		 * @return {string} successful operation
		 */
		Protocol_web_get_args(agentNum: number): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/web/get/args', { responseType: 'text' });
		}

		/**
		 * Show the agent's WEB configuration
		 * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Get mimic/agent/{agentNum}/protocol/msg/web/get/config
		 * @param {number} agentNum Agent to show the WEB configuration
		 * @return {ConfigWEB} successful operation
		 */
		Protocol_web_get_config(agentNum: number): Observable<ConfigWEB> {
			return this.http.get<ConfigWEB>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/web/get/config', {});
		}

		/**
		 * Show the agent's WEB statistics
		 * Statistics of fields indicated in the headers
		 * Get mimic/agent/{agentNum}/protocol/msg/web/get/statistics
		 * @param {number} agentNum Agent to show WEB statistics
		 * @return {Array<number>} successful operation
		 */
		Protocol_web_get_statistics(agentNum: number): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/web/get/statistics', {});
		}

		/**
		 * Show the agent's WEB traffic tracing
		 * Trace 1 means enabled, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/web/get/trace
		 * @param {number} agentNum Agent to show whether WEB tracing is enabled
		 * @return {ConfigWEB} successful operation
		 */
		Protocol_web_get_trace(agentNum: number): Observable<ConfigWEB> {
			return this.http.get<ConfigWEB>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/web/get/trace', {});
		}

		/**
		 * Add the agent's WEB port
		 * Add port
		 * Post mimic/agent/{agentNum}/protocol/msg/web/port/add/{port}
		 * @param {number} agentNum Agent to add WEB port
		 * @param {number} port TCP port
		 * @return {string} successful operation
		 */
		Protocol_web_port_add(agentNum: number, port: number): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/web/port/add/' + port, null, { responseType: 'text' });
		}

		/**
		 * Show the agent's WEB port
		 * Check the port. 1 means existing, 0 means not
		 * Get mimic/agent/{agentNum}/protocol/msg/web/port/exists/{port}
		 * @param {number} agentNum Agent to show WEB configuration
		 * @param {number} port TCP port
		 * @return {Array<string>} successful operation
		 */
		Protocol_web_port_exists(agentNum: number, port: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/web/port/exists/' + port, {});
		}

		/**
		 * Remove the agent's WEB port
		 * Remove port
		 * Delete mimic/agent/{agentNum}/protocol/msg/web/port/remove/{port}
		 * @param {number} agentNum Agent to remove WEB port
		 * @param {number} port TCP port
		 * @return {string} successful operation
		 */
		Protocol_web_port_remove(agentNum: number, port: number): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/web/port/remove/' + port, { responseType: 'text' });
		}

		/**
		 * Set the agent's WEB port attribute
		 * Set port
		 * Put mimic/agent/{agentNum}/protocol/msg/web/port/set/{port}/{protocol}/{version}
		 * @param {number} agentNum Agent to set WEB port
		 * @param {number} port TCP port
		 * @param {string} protocol Encryption or related protocol
		 * @param {string} version Encryption or related protocol version
		 * @return {string} successful operation
		 */
		Protocol_web_port_set(agentNum: number, port: number, protocol: string, version: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/web/port/set/' + port + '/' + (protocol == null ? '' : encodeURIComponent(protocol)) + '/' + (version == null ? '' : encodeURIComponent(version)), null, { responseType: 'text' });
		}

		/**
		 * Start the agent's WEB port
		 * Start port
		 * Put mimic/agent/{agentNum}/protocol/msg/web/port/start/{port}
		 * @param {number} agentNum Agent to start WEB port
		 * @param {number} port TCP port
		 * @return {string} successful operation
		 */
		Protocol_web_port_start(agentNum: number, port: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/web/port/start/' + port, null, { responseType: 'text' });
		}

		/**
		 * Stop the agent's WEB port
		 * Stop port
		 * Put mimic/agent/{agentNum}/protocol/msg/web/port/stop/{port}
		 * @param {number} agentNum Agent to stop WEB port
		 * @param {number} port TCP port
		 * @return {string} successful operation
		 */
		Protocol_web_port_stop(agentNum: number, port: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/web/port/stop/' + port, null, { responseType: 'text' });
		}

		/**
		 * Set the agent's WEB configuration
		 * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
		 * Put mimic/agent/{agentNum}/protocol/msg/web/set/config/{argument}/{value}
		 * @param {number} agentNum Agent to set the WEB configuration
		 * @param {string} argument Parameter to set the WEB configuration
		 * @param {string} value Value to set the WEB configuration
		 * @return {string} successful operation
		 */
		Protocol_web_set_config(agentNum: number, argument: string, value: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/web/set/config/' + (argument == null ? '' : encodeURIComponent(argument)) + '/' + (value == null ? '' : encodeURIComponent(value)), null, { responseType: 'text' });
		}

		/**
		 * Set the agent's WEB traffic tracing
		 * 1 to enable, 0 to disable
		 * Put mimic/agent/{agentNum}/protocol/msg/web/set/trace/{enableOrNot}
		 * @param {number} agentNum Agent to set the WEB tracing
		 * @param {string} enableOrNot Value to set the WEB tracing
		 * @return {string} successful operation
		 */
		Protocol_web_set_trace(agentNum: number, enableOrNot: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/msg/web/set/trace/' + (enableOrNot == null ? '' : encodeURIComponent(enableOrNot)), null, { responseType: 'text' });
		}

		/**
		 * Returns the protocol's configuration.
		 * Returns the protocol's configuration.
		 * Get mimic/agent/{agentNum}/protocol/{prot}/get/config
		 * @param {number} agentNum Agent to show the protocol configuration
		 * @param {string} prot Protocol to show configuration
		 * @return {string} successful operation
		 */
		Protocol_get_config(agentNum: number, prot: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/protocol/' + (prot == null ? '' : encodeURIComponent(prot)) + '/get/config', { responseType: 'text' });
		}

		/**
		 * Reload the current agent.
		 * This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).
		 * Put mimic/agent/{agentNum}/reload
		 * @param {number} agentNum Agent to return the primary IP
		 * @return {string} successful operation
		 */
		Reload(agentNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/reload', null, { responseType: 'text' });
		}

		/**
		 * Remove the current agent.
		 * For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.
		 * Delete mimic/agent/{agentNum}/remove
		 * @param {number} agentNum Agent to return the primary IP
		 * @return {string} successful operation
		 */
		Agent_remove(agentNum: number): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/remove', { responseType: 'text' });
		}

		/**
		 * Resume the current agent.
		 * Resume the current agent.
		 * Put mimic/agent/{agentNum}/resume
		 * @param {number} agentNum Agent to return the primary IP
		 * @return {string} successful operation
		 */
		Resume(agentNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/resume', null, { responseType: 'text' });
		}

		/**
		 * Save agent MIB values.
		 * Save agent MIB values.
		 * Put mimic/agent/{agentNum}/save
		 * @param {number} agentNum Agent to save
		 * @return {string} successful operation
		 */
		Save(agentNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/save', null, { responseType: 'text' });
		}

		/**
		 * one-way transit delay in msec
		 * The minimum granularity is 10 msec.
		 * Put mimic/agent/{agentNum}/set/delay/{delay}
		 * @param {number} agentNum Agent to set the delay time
		 * @param {number} delay Delay time of the agent
		 * @return {number} successful operation
		 */
		Set_delay(agentNum: number, delay: number): Observable<number> {
			return this.http.put<number>(this.baseUri + 'mimic/agent/' + agentNum + '/set/delay/' + delay, null, {});
		}

		/**
		 * drop rate (every N-th PDU)
		 * 0 means no drops
		 * Put mimic/agent/{agentNum}/set/drops/{drops}
		 * @param {number} agentNum Agent to set the drop rate
		 * @param {number} drops Drop rate of the agent
		 * @return {number} successful operation
		 */
		Set_drops(agentNum: number, drops: number): Observable<number> {
			return this.http.put<number>(this.baseUri + 'mimic/agent/' + agentNum + '/set/drops/' + drops, null, {});
		}

		/**
		 * host address of the agent.
		 * Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
		 * Put mimic/agent/{agentNum}/set/host/{host}
		 * @param {string} agentNum Agent to set the primary IP
		 * @param {string} host Primary IP of the agent
		 * @return {string} successful operation
		 */
		Set_host(agentNum: string, host: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + (agentNum == null ? '' : encodeURIComponent(agentNum)) + '/set/host/' + (host == null ? '' : encodeURIComponent(host)), null, { responseType: 'text' });
		}

		/**
		 * timeout in seconds for retransmitting INFORM PDUs
		 * The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
		 * Put mimic/agent/{agentNum}/set/inform_timeout/{inform_timeout}
		 * @param {number} agentNum Agent to set the timeout setting
		 * @param {number} inform_timeout Tmeout setting
		 * @return {number} successful operation
		 */
		Set_inform_timeout(agentNum: number, inform_timeout: number): Observable<number> {
			return this.http.put<number>(this.baseUri + 'mimic/agent/' + agentNum + '/set/inform_timeout/' + inform_timeout, null, {});
		}

		/**
		 * network interface card for the agent
		 * network interface card for the agent
		 * Put mimic/agent/{agentNum}/set/interface/{interface}
		 * @param {string} agentNum Agent to set the primary interface
		 * @param {string} _interface Primary interface of the agent
		 * @return {string} successful operation
		 */
		Set_interface(agentNum: string, _interface: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + (agentNum == null ? '' : encodeURIComponent(agentNum)) + '/set/interface/' + (_interface == null ? '' : encodeURIComponent(_interface)), null, { responseType: 'text' });
		}

		/**
		 * subnet mask of the agent.
		 * subnet mask of the agent.
		 * Put mimic/agent/{agentNum}/set/mask/{mask}
		 * @param {string} agentNum Agent to set the primary IP address mask
		 * @param {string} mask Mask to set for the agent primary IP address
		 * @return {string} successful operation
		 */
		Set_mask(agentNum: string, mask: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + (agentNum == null ? '' : encodeURIComponent(agentNum)) + '/set/mask/' + (mask == null ? '' : encodeURIComponent(mask)), null, { responseType: 'text' });
		}

		/**
		 * set of MIBs, simulations and scenarios
		 * set of MIBs, simulations and scenarios
		 * Put mimic/agent/{agentNum}/set/mibs
		 * @param {number} agentNum Agent to return the MIB triplets
		 * @return {string} successful operation
		 */
		Set_mibs(agentNum: number, requestBody: Array<Triplet>): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/set/mibs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * MIB directory of the agent.
		 * MIB directory of the agent.
		 * Put mimic/agent/{agentNum}/set/oiddir/{oiddir}
		 * @param {number} agentNum Agent to set the directory path
		 * @param {string} oiddir Directory path for the agent
		 * @return {string} successful operation
		 */
		Set_oiddir(agentNum: number, oiddir: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/set/oiddir/' + (oiddir == null ? '' : encodeURIComponent(oiddir)), null, { responseType: 'text' });
		}

		/**
		 * owner of the agent
		 * owner of the agent
		 * Put mimic/agent/{agentNum}/set/owner/{owner}
		 * @param {number} agentNum Agent to set the owner
		 * @param {string} owner Owner of the agent
		 * @return {string} successful operation
		 */
		Set_owner(agentNum: number, owner: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/set/owner/' + (owner == null ? '' : encodeURIComponent(owner)), null, { responseType: 'text' });
		}

		/**
		 * maximum PDU size
		 * The limit for this configurable is 65536
		 * Put mimic/agent/{agentNum}/set/pdusize/{pdusize}
		 * @param {number} agentNum Agent to return the PDU size
		 * @param {number} pdusize PDU size setting for the agent
		 * @return {number} successful operation
		 */
		Set_pdusize(agentNum: number, pdusize: number): Observable<number> {
			return this.http.put<number>(this.baseUri + 'mimic/agent/' + agentNum + '/set/pdusize/' + pdusize, null, {});
		}

		/**
		 * port number
		 * port number
		 * Put mimic/agent/{agentNum}/set/port/{port}
		 * @param {number} agentNum Agent to set the primary SNMP port
		 * @param {number} port Primary SNMP port of the agent
		 * @return {string} successful operation
		 */
		Set_port(agentNum: number, port: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/set/port/' + port, null, { responseType: 'text' });
		}

		/**
		 * private directory of the agent.
		 * private directory of the agent.
		 * Put mimic/agent/{agentNum}/set/privdir/{privdir}
		 * @param {number} agentNum Agent to set the directory path
		 * @param {string} privdir Directory path for the agent
		 * @return {string} successful operation
		 */
		Set_privdir(agentNum: number, privdir: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/set/privdir/' + (privdir == null ? '' : encodeURIComponent(privdir)), null, { responseType: 'text' });
		}

		/**
		 * protocols supported by agent as a comma-separated list
		 * protocols supported by agent as a comma-separated list
		 * Put mimic/agent/{agentNum}/set/protocol
		 * @param {number} agentNum Agent to return the protocols arrary
		 * @param {Array<string>} requestBody Created agent object
		 * @return {Array<number>} successful operation
		 */
		Set_protocols(agentNum: number, requestBody: Array<string>): Observable<Array<number>> {
			return this.http.put<Array<number>>(this.baseUri + 'mimic/agent/' + agentNum + '/set/protocol', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * read community string
		 * read community string
		 * Put mimic/agent/{agentNum}/set/read/{read}
		 * @param {number} agentNum Agent to return the SNMP read community string
		 * @param {string} read SNMP read community string
		 * @return {string} successful operation
		 */
		Set_read_community(agentNum: number, read: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/set/read/' + (read == null ? '' : encodeURIComponent(read)), null, { responseType: 'text' });
		}

		/**
		 * relative start time
		 * relative start time
		 * Put mimic/agent/{agentNum}/set/start/{start}
		 * @param {number} agentNum Agent to return the relative start time
		 * @param {number} start Relative start time of the agent
		 * @return {string} successful operation
		 */
		Set_starttime(agentNum: number, start: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/set/start/' + start, null, { responseType: 'text' });
		}

		/**
		 * SNMP PDU tracing
		 * SNMP PDU tracing
		 * Put mimic/agent/{agentNum}/set/trace/{trace}
		 * @param {number} agentNum Agent to set trace setting
		 * @param {number} trace Trace setting for the agent
		 * @return {number} successful operation
		 */
		Set_trace(agentNum: number, trace: number): Observable<number> {
			return this.http.put<number>(this.baseUri + 'mimic/agent/' + agentNum + '/set/trace/' + trace, null, {});
		}

		/**
		 * SNMP SET validation policy
		 * Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.
		 * Put mimic/agent/{agentNum}/set/validate/{validate}
		 * @param {number} agentNum Agent to set the bitmask integer
		 * @param {number} validate Bitmask integer to set
		 * @return {number} successful operation
		 */
		Set_validate(agentNum: number, validate: number): Observable<number> {
			return this.http.put<number>(this.baseUri + 'mimic/agent/' + agentNum + '/set/validate/' + validate, null, {});
		}

		/**
		 * write community string
		 * write community string
		 * Put mimic/agent/{agentNum}/set/write/{write}
		 * @param {number} agentNum Agent to set the SNMP write community string
		 * @param {string} write SNMP write community string
		 * @return {string} successful operation
		 */
		Set_write_community(agentNum: number, write: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/set/write/' + (write == null ? '' : encodeURIComponent(write)), null, { responseType: 'text' });
		}

		/**
		 * Start the current agent.
		 * For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.
		 * Put mimic/agent/{agentNum}/start
		 * @param {number} agentNum Agent to return the primary IP
		 * @return {string} successful operation
		 */
		Start(agentNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/start', null, { responseType: 'text' });
		}

		/**
		 * Show the agent's primary IP address
		 * Agent primary IP address
		 * Put mimic/agent/{agentNum}/stop
		 * @param {number} agentNum Agent to return the primary IP
		 * @return {string} successful operation
		 */
		Stop(agentNum: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/stop', null, { responseType: 'text' });
		}

		/**
		 * This command copies the variable store from the other agent to this agent.
		 * This command copies the variable store from the other agent to this agent.
		 * Put mimic/agent/{agentNum}/store/copy/{otherAgent}
		 * @param {number} agentNum Agent of the value space
		 * @param {number} otherAgent Agent of the value space
		 * @return {string} successful operation
		 */
		Agent_store_copy(agentNum: number, otherAgent: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/store/copy/' + otherAgent, null, { responseType: 'text' });
		}

		/**
		 * This command can be used as a predicate to ascertain the existence of a given variable.
		 * It returns "1" if the variable exists, else "0".
		 * Get mimic/agent/{agentNum}/store/exists/{var}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} _var Variable name
		 * @return {string} successful operation
		 */
		Agent_store_exists(agentNum: number, _var: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/store/exists/' + (_var == null ? '' : encodeURIComponent(_var)), { responseType: 'text' });
		}

		/**
		 * Fetches the value associated with a variable.
		 * The value will be returned as a string (like all Tcl values).
		 * Get mimic/agent/{agentNum}/store/get/{var}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} _var Variable name
		 * @return {string} successful operation
		 */
		Agent_store_get(agentNum: number, _var: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/store/get/' + (_var == null ? '' : encodeURIComponent(_var)), { responseType: 'text' });
		}

		/**
		 * This command will return the list of variables in the said scope.
		 * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
		 * Get mimic/agent/{agentNum}/store/list
		 * @param {number} agentNum Agent of the value space
		 * @return {Array<string>} successful operation
		 */
		Agent_store_list(agentNum: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/store/list', {});
		}

		/**
		 * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
		 * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
		 * Put mimic/agent/{agentNum}/store/lreplace/{var}/{index}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} _var Variable name
		 * @param {number} index Index
		 * @param {string} requestBody Value
		 * @return {string} successful operation
		 */
		Agent_store_lreplace(agentNum: number, _var: string, index: number, requestBody: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/store/lreplace/' + (_var == null ? '' : encodeURIComponent(_var)) + '/' + index, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * This command can be used as a predicate to ascertain the persistence of a given variable.
		 * It returns "1" if the variable is persistent, else "0".
		 * Get mimic/agent/{agentNum}/store/persists/{var}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} _var Variable name
		 * @return {string} successful operation
		 */
		Agent_store_persists(agentNum: number, _var: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/store/persists/' + (_var == null ? '' : encodeURIComponent(_var)), { responseType: 'text' });
		}

		/**
		 * These commands allow the creation of a new variable, or changing an existing value.
		 * The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.
		 * Put mimic/agent/{agentNum}/store/set/{var}/{persist}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} _var Variable name
		 * @param {number} persist Persistent setting
		 * @param {string} requestBody Value
		 * @return {string} successful operation
		 */
		Agent_store_set(agentNum: number, _var: string, persist: number, requestBody: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/store/set/' + (_var == null ? '' : encodeURIComponent(_var)) + '/' + persist, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Deletes a variable which is currently defined.
		 * This will cleanup persistent variables if needed
		 * Put mimic/agent/{agentNum}/store/unset/{var}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} _var Variable name
		 * @return {string} successful operation
		 */
		Agent_store_unset(agentNum: number, _var: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/store/unset/' + (_var == null ? '' : encodeURIComponent(_var)), null, { responseType: 'text' });
		}

		/**
		 * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
		 * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
		 * Post mimic/agent/{agentNum}/timer/script/add/{script}/{interval}/{arg}
		 * @param {number} agentNum Agent to return the timer script list
		 * @param {string} script Script name
		 * @param {number} interval Interval in msec
		 * @param {string} arg Arguments to the script
		 * @return {string} successful operation
		 */
		Add_timer_script(agentNum: number, script: string, interval: number, arg: string): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/agent/' + agentNum + '/timer/script/add/' + (script == null ? '' : encodeURIComponent(script)) + '/' + interval + '/' + (arg == null ? '' : encodeURIComponent(arg)), null, { responseType: 'text' });
		}

		/**
		 * Remove a timer script from the execution list.
		 * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
		 * Delete mimic/agent/{agentNum}/timer/script/delete/{script}/{interval}/{arg}
		 * @param {number} agentNum Agent to return the timer script list
		 * @param {string} script Script name
		 * @param {number} interval Interval in msec
		 * @param {string} arg Arguments to the script
		 * @return {string} successful operation
		 */
		Del_timer_script(agentNum: number, script: string, interval: number, arg: string): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/timer/script/delete/' + (script == null ? '' : encodeURIComponent(script)) + '/' + interval + '/' + (arg == null ? '' : encodeURIComponent(arg)), { responseType: 'text' });
		}

		/**
		 * List the timer scripts currently running along with the their intervals.
		 * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
		 * Get mimic/agent/{agentNum}/timer/script/list
		 * @param {number} agentNum Agent to return the timer script list
		 * @return {Array<TimerScript>} successful operation
		 */
		List_timer_scripts(agentNum: number): Observable<Array<TimerScript>> {
			return this.http.get<Array<TimerScript>>(this.baseUri + 'mimic/agent/' + agentNum + '/timer/script/list', {});
		}

		/**
		 * Add a trap destination to the set of destinations.
		 * Add a trap destination to the set of destinations.
		 * Post mimic/agent/{agentNum}/trap/config/add/{IP}/{port}
		 * @param {number} agentNum Agent to add the destination
		 * @param {string} IP IP of the destination
		 * @param {number} port port of the destination
		 * @return {string} successful operation
		 */
		Trap_config_add(agentNum: number, IP: string, port: number): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/agent/' + agentNum + '/trap/config/add/' + (IP == null ? '' : encodeURIComponent(IP)) + '/' + port, null, { responseType: 'text' });
		}

		/**
		 * Remove a trap destination from the set of destinations.
		 * Remove a trap destination from the set of destinations.
		 * Delete mimic/agent/{agentNum}/trap/config/delete/{IP}/{port}
		 * @param {number} agentNum Agent to delete the destination
		 * @param {string} IP IP of the destination
		 * @param {number} port port of the destination
		 * @return {string} successful operation
		 */
		Trap_config_del(agentNum: number, IP: string, port: number): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/trap/config/delete/' + (IP == null ? '' : encodeURIComponent(IP)) + '/' + port, { responseType: 'text' });
		}

		/**
		 * List the set of trap destinations for this agent instance.
		 * Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.
		 * Get mimic/agent/{agentNum}/trap/config/list
		 * @param {number} agentNum Agent to show the IP alias list
		 * @return {Array<TrapDest>} successful operation
		 */
		Trap_config_list(agentNum: number): Observable<Array<TrapDest>> {
			return this.http.get<Array<TrapDest>>(this.baseUri + 'mimic/agent/' + agentNum + '/trap/config/list', {});
		}

		/**
		 * List the outstanding asynchronous traps for this agent instance.
		 * List the outstanding asynchronous traps for this agent instance.
		 * Get mimic/agent/{agentNum}/trap/list
		 * @param {number} agentNum Agent to list the traps
		 * @return {Array<string>} successful operation
		 */
		Trap_list(agentNum: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/trap/list', {});
		}

		/**
		 * Add an entry to a table.
		 * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
		 * Post mimic/agent/{agentNum}/value/add/{object}/{instance}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} object Object (column) of the table in the agent's value space
		 * @param {string} instance Object (column) of the table in the agent's value space
		 * @return {string} successful operation
		 */
		Add(agentNum: number, object: string, instance: string): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/agent/' + agentNum + '/value/add/' + (object == null ? '' : encodeURIComponent(object)) + '/' + (instance == null ? '' : encodeURIComponent(instance)), null, { responseType: 'text' });
		}

		/**
		 * Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
		 * Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
		 * Get mimic/agent/{agentNum}/value/eval/{object}/{instance}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} object Single instance object or object (column) of the table in the agent's value space.
		 * @param {string} instance Row of the table in the agent's value space. 0 for single instance objects
		 * @return {string} successful operation
		 */
		Eval_value(agentNum: number, object: string, instance: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/value/eval/' + (object == null ? '' : encodeURIComponent(object)) + '/' + (instance == null ? '' : encodeURIComponent(instance)), { responseType: 'text' });
		}

		/**
		 * Get a variable in the Value Space.
		 * Get a variable in the Value Space.
		 * Get mimic/agent/{agentNum}/value/get/{object}/{instance}/{variable}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} object Object (column) of the table in the agent's value space
		 * @param {string} instance Object (column) of the table in the agent's value space
		 * @param {string} variable Object (column) of the table in the agent's value space
		 * @return {string} successful operation
		 */
		Get_value(agentNum: number, object: string, instance: string, variable: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/value/get/' + (object == null ? '' : encodeURIComponent(object)) + '/' + (instance == null ? '' : encodeURIComponent(instance)) + '/' + (variable == null ? '' : encodeURIComponent(variable)), { responseType: 'text' });
		}

		/**
		 * Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
		 * Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
		 * Get mimic/agent/{agentNum}/value/info/{object}
		 * @param {number} agentNum Agent to show the information of the object
		 * @param {string} object Object
		 * @return {string} successful operation
		 */
		Get_info(agentNum: number, object: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/value/info/' + (object == null ? '' : encodeURIComponent(object)), { responseType: 'text' });
		}

		/**
		 * Display the MIB object instances for the specified object.
		 * This enables MIB browsing of the MIB on the current agent.
		 * Get mimic/agent/{agentNum}/value/instances/{object}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} object Object (column) of the table in the agent's value space
		 * @return {Array<string>} successful operation
		 */
		Get_instances(agentNum: number, object: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/value/instances/' + (object == null ? '' : encodeURIComponent(object)), {});
		}

		/**
		 * Display the MIB objects below the current position
		 * This command is similar to the ls or dir operating system commands to list filesystem directories.
		 * Get mimic/agent/{agentNum}/value/list/{OID}
		 * @param {number} agentNum Agent to show the OID branches
		 * @param {string} OID Current OID
		 * @return {Array<string>} successful operation
		 */
		Get_objects(agentNum: number, OID: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/value/list/' + (OID == null ? '' : encodeURIComponent(OID)), {});
		}

		/**
		 * Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
		 * Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
		 * Get mimic/agent/{agentNum}/value/meval/{objInsArray}
		 * @param {number} agentNum Agent of the value space
		 * @param {Array<string>} objInsArray Multiple objects or object (column) of the table in the agent's value space.
		 * @return {Array<string>} successful operation
		 */
		Meval_value(agentNum: number, objInsArray: Array<string>): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/value/meval/{objInsArray}', {});
		}

		/**
		 * Get multiple variables in the Value Space.
		 * This is a performance optimization of the mimic value get command, to be used when many variables are requested.
		 * Get mimic/agent/{agentNum}/value/mget/{objInsVarArray}
		 * @param {number} agentNum Agent of the value space
		 * @param {Array<string>} objInsVarArray Multiple objects or object (column) of the table in the agent's value space.
		 * @return {Array<string>} successful operation
		 */
		Mget_value(agentNum: number, objInsVarArray: Array<string>): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/value/mget/{objInsVarArray}', {});
		}

		/**
		 * Return the MIB that defines the specified object.
		 * This will only return a MIB name if the object is unmistakeably defined in a MIB.
		 * Get mimic/agent/{agentNum}/value/mib/{object}
		 * @param {number} agentNum Agent to show the MIB
		 * @param {string} object Object
		 * @return {string} successful operation
		 */
		Get_mib(agentNum: number, object: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/value/mib/' + (object == null ? '' : encodeURIComponent(object)), { responseType: 'text' });
		}

		/**
		 * Set multiple variables in the Value Space.
		 * This is a performance optimization of the mimic value set command, to be used when many variables are to be set.
		 * Put mimic/agent/{agentNum}/value/mset
		 * @param {number} agentNum Agent of the value space
		 * @param {Array<string>} requestBody objInsVarValArray
		 * @return {string} successful operation
		 */
		Mset_value(agentNum: number, requestBody: Array<string>): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/value/mset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Unset multiple variables in the Value Space
		 * This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.
		 * Put mimic/agent/{agentNum}/value/munset
		 * @param {number} agentNum Agent of the value space
		 * @param {Array<string>} requestBody objInsVarArray
		 * @return {string} successful operation
		 */
		Munset_value(agentNum: number, requestBody: Array<string>): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/value/munset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Return the symbolic name of the specified object identifier.
		 * Return the symbolic name of the specified object identifier.
		 * Get mimic/agent/{agentNum}/value/name/{OID}
		 * @param {number} agentNum Agent to show the object
		 * @param {string} OID OID
		 * @return {string} successful operation
		 */
		Get_name(agentNum: number, OID: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/value/name/' + (OID == null ? '' : encodeURIComponent(OID)), { responseType: 'text' });
		}

		/**
		 * Return the numeric OID of the specified object.
		 * Return the numeric OID of the specified object.
		 * Get mimic/agent/{agentNum}/value/oid/{object}
		 * @param {number} agentNum Agent to show the OID
		 * @param {string} object Object
		 * @return {string} successful operation
		 */
		Get_oid(agentNum: number, object: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/value/oid/' + (object == null ? '' : encodeURIComponent(object)), { responseType: 'text' });
		}

		/**
		 * Remove an entry from a table.
		 * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
		 * Delete mimic/agent/{agentNum}/value/remove/{object}/{instance}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} object Object (column) of the table in the agent's value space
		 * @param {string} instance Object (column) of the table in the agent's value space
		 * @return {string} successful operation
		 */
		Remove(agentNum: number, object: string, instance: string): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/agent/' + agentNum + '/value/remove/' + (object == null ? '' : encodeURIComponent(object)) + '/' + (instance == null ? '' : encodeURIComponent(instance)), { responseType: 'text' });
		}

		/**
		 * Set a variable in the Value Space.
		 * NOTE to set a binary string value, specify a string starting with \\x followed by pairs of hexadecimal digits, eg. "\\x 01 23 45". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - "1", "2c", "2" and "3". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.
		 * Put mimic/agent/{agentNum}/value/set/{object}/{instance}/{variable}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} object Single instance object or object (column) of the table in the agent's value space.
		 * @param {string} instance Row of the table in the agent's value space. 0 for single instance objects
		 * @param {string} variable Variable
		 * @param {string} requestBody Value
		 * @return {string} successful operation
		 */
		Set_value(agentNum: number, object: string, instance: string, variable: string, requestBody: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/value/set/' + (object == null ? '' : encodeURIComponent(object)) + '/' + (instance == null ? '' : encodeURIComponent(instance)) + '/' + (variable == null ? '' : encodeURIComponent(variable)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Split the numerical OID into the object OID and instance OID.
		 * This is useful if you have an OID which is a combination of object and instance.
		 * Get mimic/agent/{agentNum}/value/split/{OID}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} OID OID
		 * @return {Array<string>} successful operation
		 */
		Split_oid(agentNum: number, OID: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/value/split/' + (OID == null ? '' : encodeURIComponent(OID)), {});
		}

		/**
		 * Get the state of a MIB object object.
		 * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
		 * Get mimic/agent/{agentNum}/value/state/get/{object}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} object Object
		 * @return {string} successful operation
		 */
		Get_state(agentNum: number, object: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/agent/' + agentNum + '/value/state/get/' + (object == null ? '' : encodeURIComponent(object)), { responseType: 'text' });
		}

		/**
		 * Set the state of a MIB object object
		 * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
		 * Put mimic/agent/{agentNum}/value/state/set/{object}/{state}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} object Object
		 * @param {number} state State
		 * @return {string} successful operation
		 */
		Set_state(agentNum: number, object: string, state: number): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/value/state/set/' + (object == null ? '' : encodeURIComponent(object)) + '/' + state, null, { responseType: 'text' });
		}

		/**
		 * Unset a variable in the Value Space in order to free its memory.
		 * Only variables that have previously been set can be unset.
		 * Put mimic/agent/{agentNum}/value/unset/{object}/{instance}/{variable}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} object Single instance object or object (column) of the table in the agent's value space.
		 * @param {string} instance Row of the table in the agent's value space. 0 for single instance objects
		 * @param {string} variable Variable
		 * @return {string} successful operation
		 */
		Unset_value(agentNum: number, object: string, instance: string, variable: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/agent/' + agentNum + '/value/unset/' + (object == null ? '' : encodeURIComponent(object)) + '/' + (instance == null ? '' : encodeURIComponent(instance)) + '/' + (variable == null ? '' : encodeURIComponent(variable)), null, { responseType: 'text' });
		}

		/**
		 * Display the variables for the specified instance instance for the specified MIB object object
		 * This enables variable browsing of the MIB on the current agent.
		 * Get mimic/agent/{agentNum}/value/variables/{object}/{instance}
		 * @param {number} agentNum Agent of the value space
		 * @param {string} object Single instance object or object (column) of the table in the agent's value space.
		 * @param {string} instance Row of the table in the agent's value space. 0 for single instance objects
		 * @return {Array<string>} successful operation
		 */
		Get_variables(agentNum: number, object: string, instance: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/agent/' + agentNum + '/value/variables/' + (object == null ? '' : encodeURIComponent(object)) + '/' + (instance == null ? '' : encodeURIComponent(instance)), {});
		}

		/**
		 * Clear the lab configuration.
		 * Clear the lab configuration.
		 * Put mimic/clear/{firstAgentNum}/{lastAgentNum}
		 * @param {number} firstAgentNum Agent number to start clearing
		 * @param {number} lastAgentNum Agent number to end the clearing
		 * @return {{[id: string]: number }} successful operation
		 */
		Cfg_new(firstAgentNum: number, lastAgentNum: number): Observable<{[id: string]: number }> {
			return this.http.put<{[id: string]: number }>(this.baseUri + 'mimic/clear/' + firstAgentNum + '/' + lastAgentNum, null, {});
		}

		/**
		 * The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
		 * This list is guaranteed to be sorted into increasing order.
		 * Get mimic/get/active_data_list
		 * @return {Array<number>} successful operation
		 */
		Get_active_data_list(): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/get/active_data_list', {});
		}

		/**
		 * The list of {agentnum} that are currently active (running or paused).
		 * This list is guaranteed to be sorted into increasing order.
		 * Get mimic/get/active_list
		 * @return {Array<number>} successful operation
		 */
		Get_active_list(): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/get/active_list', {});
		}

		/**
		 * The currently loaded lab configuration file for the particular user.
		 * In the case of multi-user access this command returns a different configuration file loaded for each user.
		 * Get mimic/get/cfgfile
		 * @return {{[id: string]: number }} successful operation
		 */
		Get_cfgfile(): Observable<{[id: string]: number }> {
			return this.http.get<{[id: string]: number }>(this.baseUri + 'mimic/get/cfgfile', {});
		}

		/**
		 * This predicate indicates if the currently loaded agent configuration file has changed.
		 * Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.
		 * Get mimic/get/cfgfile_changed
		 * @return {{[id: string]: number }} successful operation
		 */
		Get_cfg_file_changed(): Observable<{[id: string]: number }> {
			return this.http.get<{[id: string]: number }>(this.baseUri + 'mimic/get/cfgfile_changed', {});
		}

		/**
		 * The list of {agentnum} for which a configurable parameter changed.
		 * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
		 * Get mimic/get/changed_config_list
		 * @return {Array<number>} successful operation
		 */
		Get_changed_config_list(): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/get/changed_config_list', {});
		}

		/**
		 * The list of {agentnum state} for which the state changed.
		 * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
		 * Get mimic/get/changed_state_list
		 * @return {Array<AgentState>} successful operation
		 */
		Get_changed_state_list(): Observable<Array<AgentState>> {
			return this.http.get<Array<AgentState>>(this.baseUri + 'mimic/get/changed_state_list', {});
		}

		/**
		 * The number of clients currently connected to the daemon.
		 * The number of clients currently connected to the daemon.
		 * Get mimic/get/clients
		 * @return {{[id: string]: number }} successful operation
		 */
		Get_clients(): Observable<{[id: string]: number }> {
			return this.http.get<{[id: string]: number }>(this.baseUri + 'mimic/get/clients', {});
		}

		/**
		 * The list of {agentnum} that are currently configured.
		 * This list is guaranteed to be sorted into increasing order.
		 * Get mimic/get/configured_list
		 * @return {Array<number>} successful operation
		 */
		Get_configured_list(): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'mimic/get/configured_list', {});
		}

		/**
		 * The set of network interfaces that can be used for simulations.
		 * The set of network interfaces that can be used for simulations.
		 * Get mimic/get/interfaces
		 * @return {{[id: string]: number }} successful operation
		 */
		Get_interfaces(): Observable<{[id: string]: number }> {
			return this.http.get<{[id: string]: number }>(this.baseUri + 'mimic/get/interfaces', {});
		}

		/**
		 * The last configured agent instance.
		 * The last configured agent instance.
		 * Get mimic/get/last
		 * @return {number} successful operation
		 */
		Get_last(): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/get/last', {});
		}

		/**
		 * The current log file for the Simulator.
		 * The current log file for the Simulator.
		 * Get mimic/get/log
		 * @return {{[id: string]: number }} successful operation
		 */
		Get_log(): Observable<{[id: string]: number }> {
			return this.http.get<{[id: string]: number }>(this.baseUri + 'mimic/get/log', {});
		}

		/**
		 * The maximum number of agent instances.
		 * The maximum number of agent instances.
		 * Get mimic/get/max
		 * @return {number} successful operation
		 */
		Get_max(): Observable<number> {
			return this.http.get<number>(this.baseUri + 'mimic/get/max', {});
		}

		/**
		 * The network address of the host where the MIMIC simulator is running.
		 * The network address of the host where the MIMIC simulator is running.
		 * Get mimic/get/netaddr
		 * @return {{[id: string]: number }} successful operation
		 */
		Get_netaddr(): Observable<{[id: string]: number }> {
			return this.http.get<{[id: string]: number }>(this.baseUri + 'mimic/get/netaddr', {});
		}

		/**
		 * The default network device to be used for agent addresses.
		 * The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.
		 * Get mimic/get/netdev
		 * @return {{[id: string]: number }} successful operation
		 */
		Get_netdev(): Observable<{[id: string]: number }> {
			return this.http.get<{[id: string]: number }>(this.baseUri + 'mimic/get/netdev', {});
		}

		/**
		 * The product number that is licensed.
		 * The product number that is licensed.
		 * Get mimic/get/product
		 * @return {{[id: string]: number }} successful operation
		 */
		Get_product(): Observable<{[id: string]: number }> {
			return this.http.get<{[id: string]: number }>(this.baseUri + 'mimic/get/product', {});
		}

		/**
		 * The set of protocols supported by the Simulator.
		 * The set of protocols supported by the Simulator.
		 * Get mimic/get/protocols
		 * @return {{[id: string]: number }} successful operation
		 */
		Get_daemon_protocols(): Observable<{[id: string]: number }> {
			return this.http.get<{[id: string]: number }>(this.baseUri + 'mimic/get/protocols', {});
		}

		/**
		 * The return mode.
		 * The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)
		 * Get mimic/get/return
		 * @return {{[id: string]: number }} successful operation
		 */
		Get_return(): Observable<{[id: string]: number }> {
			return this.http.get<{[id: string]: number }>(this.baseUri + 'mimic/get/return', {});
		}

		/**
		 * The version of the MIMIC command interface.
		 * The version of the MIMIC command interface.
		 * Get mimic/get/version
		 * @return {string} successful operation
		 */
		Get_version(): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/get/version', { responseType: 'text' });
		}

		/**
		 * Load the lab configuration file file.
		 * Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration
		 * Put mimic/load/{cfgFile}/{firstAgentNum}/{lastAgentNum}/{startAgentNum}
		 * @param {string} cfgFile MIMIC agent configuration file to load
		 * @param {number} firstAgentNum Agent number in cfgFile to start the loading
		 * @param {number} lastAgentNum Agent number in cfgFile to end the loading
		 * @param {number} startAgentNum Agent number in current configuration to start placing the new agents
		 * @return {{[id: string]: number }} successful operation
		 */
		Cfg_load(cfgFile: string, firstAgentNum: number, lastAgentNum: number, startAgentNum: number): Observable<{[id: string]: number }> {
			return this.http.put<{[id: string]: number }>(this.baseUri + 'mimic/load/' + (cfgFile == null ? '' : encodeURIComponent(cfgFile)) + '/' + firstAgentNum + '/' + lastAgentNum + '/' + startAgentNum, null, {});
		}

		/**
		 * Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
		 * Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
		 * Get mimic/mget/{infoArray}
		 * @param {Array<string>} infoArray Multiple strings of info.
		 * @return {Array<string>} successful operation
		 */
		Mget_info(infoArray: Array<string>): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/mget/{infoArray}', {});
		}

		/**
		 * Show the COAP statistics headers
		 * The headers of statistics fields
		 * Get mimic/protocol/msg/coap/get/stats_hdr
		 * @return {Array<string>} successful operation
		 */
		Protocol_coap_get_stats_hdr(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/protocol/msg/coap/get/stats_hdr', {});
		}

		/**
		 * Show the DHCP statistics headers
		 * The headers of statistics fields
		 * Get mimic/protocol/msg/dhcp/get/stats_hdr
		 * @return {Array<string>} successful operation
		 */
		Protocol_dhcp_get_stats_hdr(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/protocol/msg/dhcp/get/stats_hdr', {});
		}

		/**
		 * Show the IPMI statistics headers
		 * The headers of statistics fields
		 * Get mimic/protocol/msg/ipmi/get/stats_hdr
		 * @return {Array<string>} successful operation
		 */
		Protocol_ipmi_get_stats_hdr(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/protocol/msg/ipmi/get/stats_hdr', {});
		}

		/**
		 * Show the MQTT statistics headers
		 * The headers of statistics fields
		 * Get mimic/protocol/msg/mqtt/get/stats_hdr
		 * @return {Array<string>} successful operation
		 */
		Protocol_mqtt_get_stats_hdr(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/protocol/msg/mqtt/get/stats_hdr', {});
		}

		/**
		 * Show the NETFLOW statistics headers
		 * The headers of statistics fields
		 * Get mimic/protocol/msg/netflow/get/stats_hdr
		 * @return {Array<string>} successful operation
		 */
		Protocol_netflow_get_stats_hdr(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/protocol/msg/netflow/get/stats_hdr', {});
		}

		/**
		 * Show the PROXY statistics headers
		 * The headers of statistics fields
		 * Get mimic/protocol/msg/proxy/get/stats_hdr
		 * @return {Array<string>} successful operation
		 */
		Protocol_proxy_get_stats_hdr(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/protocol/msg/proxy/get/stats_hdr', {});
		}

		/**
		 * Show the SFLOW statistics headers
		 * The headers of statistics fields
		 * Get mimic/protocol/msg/sflow/get/stats_hdr
		 * @return {Array<string>} successful operation
		 */
		Protocol_sflow_get_stats_hdr(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/protocol/msg/sflow/get/stats_hdr', {});
		}

		/**
		 * Show the SNMPTCP statistics headers
		 * The headers of statistics fields
		 * Get mimic/protocol/msg/snmptcp/get/stats_hdr
		 * @return {Array<string>} successful operation
		 */
		Protocol_snmptcp_get_stats_hdr(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/protocol/msg/snmptcp/get/stats_hdr', {});
		}

		/**
		 * Show the SSH statistics headers
		 * The headers of statistics fields
		 * Get mimic/protocol/msg/ssh/get/stats_hdr
		 * @return {Array<string>} successful operation
		 */
		Protocol_ssh_get_stats_hdr(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/protocol/msg/ssh/get/stats_hdr', {});
		}

		/**
		 * Show the SYSLOG statistics headers
		 * The headers of statistics fields
		 * Get mimic/protocol/msg/syslog/get/stats_hdr
		 * @return {Array<string>} successful operation
		 */
		Protocol_syslog_get_stats_hdr(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/protocol/msg/syslog/get/stats_hdr', {});
		}

		/**
		 * Show the TELNET statistics headers
		 * The headers of statistics fields
		 * Get mimic/protocol/msg/telnet/get/stats_hdr
		 * @return {Array<string>} successful operation
		 */
		Protocol_telnet_get_stats_hdr(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/protocol/msg/telnet/get/stats_hdr', {});
		}

		/**
		 * Show the TFTP statistics headers
		 * The headers of statistics fields
		 * Get mimic/protocol/msg/tftp/get/stats_hdr
		 * @return {Array<string>} successful operation
		 */
		Protocol_tftp_get_stats_hdr(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/protocol/msg/tftp/get/stats_hdr', {});
		}

		/**
		 * Show the TOD statistics headers
		 * The headers of statistics fields
		 * Get mimic/protocol/msg/tod/get/stats_hdr
		 * @return {Array<string>} successful operation
		 */
		Protocol_tod_get_stats_hdr(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/protocol/msg/tod/get/stats_hdr', {});
		}

		/**
		 * Show the WEB statistics headers
		 * The headers of statistics fields
		 * Get mimic/protocol/msg/web/get/stats_hdr
		 * @return {Array<string>} successful operation
		 */
		Protocol_web_get_stats_hdr(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/protocol/msg/web/get/stats_hdr', {});
		}

		/**
		 * Save the lab configuration.
		 * Save the lab configuration.
		 * Put mimic/save
		 * @return {{[id: string]: number }} successful operation
		 */
		Cfg_save(): Observable<{[id: string]: number }> {
			return this.http.put<{[id: string]: number }>(this.baseUri + 'mimic/save', null, {});
		}

		/**
		 * Save the lab configuration in file.
		 * Save the lab configuration in file.
		 * Put mimic/saveas/{cfgFile}/{firstAgentNum}/{lastAgentNum}
		 * @param {string} cfgFile MIMIC agent configuration file to save
		 * @param {number} firstAgentNum Agent number in cfgFile to start the loading
		 * @param {number} lastAgentNum Agent number in cfgFile to end the loading
		 * @return {{[id: string]: number }} successful operation
		 */
		Cfg_saveas(cfgFile: string, firstAgentNum: number, lastAgentNum: number): Observable<{[id: string]: number }> {
			return this.http.put<{[id: string]: number }>(this.baseUri + 'mimic/saveas/' + (cfgFile == null ? '' : encodeURIComponent(cfgFile)) + '/' + firstAgentNum + '/' + lastAgentNum, null, {});
		}

		/**
		 * The current log file for the Simulator.
		 * The current log file for the Simulator.
		 * Put mimic/set/log
		 * @param {string} requestBody The file name of the new log file
		 * @return {string} successful operation
		 */
		Set_log(requestBody: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/set/log', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * The network address of the host where the MIMIC simulator is running.
		 * The network address of the host where the MIMIC simulator is running.
		 * Put mimic/set/netdev
		 * @return {{[id: string]: number }} successful operation
		 */
		Set_netdev(): Observable<{[id: string]: number }> {
			return this.http.put<{[id: string]: number }>(this.baseUri + 'mimic/set/netdev', null, {});
		}

		/**
		 * This operation flushes all global objects which need to be made persistent to disk.
		 * The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.
		 * Put mimic/set/persistent
		 * @return {{[id: string]: number }} successful operation
		 */
		Store_save(): Observable<{[id: string]: number }> {
			return this.http.put<{[id: string]: number }>(this.baseUri + 'mimic/set/persistent', null, {});
		}

		/**
		 * Start MIMIC.
		 * Start MIMIC.
		 * Put mimic/start
		 * @return {{[id: string]: number }} successful operation
		 */
		Start_all_agents(): Observable<{[id: string]: number }> {
			return this.http.put<{[id: string]: number }>(this.baseUri + 'mimic/start', null, {});
		}

		/**
		 * Stop MIMIC.
		 * Stop MIMIC.
		 * Put mimic/stop
		 * @return {{[id: string]: number }} successful operation
		 */
		Stop_all_agents(): Observable<{[id: string]: number }> {
			return this.http.put<{[id: string]: number }>(this.baseUri + 'mimic/stop', null, {});
		}

		/**
		 * This command can be used as a predicate to ascertain the existence of a given variable.
		 * It returns "1" if the variable exists, else "0".
		 * Get mimic/store/exists/{var}
		 * @param {string} _var Variable name
		 * @return {string} successful operation
		 */
		Store_exists(_var: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/store/exists/' + (_var == null ? '' : encodeURIComponent(_var)), { responseType: 'text' });
		}

		/**
		 * Fetches the value associated with a variable.
		 * The value will be returned as a string (like all Tcl values).
		 * Get mimic/store/get/{var}
		 * @param {string} _var Variable name
		 * @return {string} successful operation
		 */
		Store_get(_var: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/store/get/' + (_var == null ? '' : encodeURIComponent(_var)), { responseType: 'text' });
		}

		/**
		 * This command will return the list of variables in the said scope.
		 * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
		 * Get mimic/store/list
		 * @return {Array<string>} successful operation
		 */
		Store_list(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'mimic/store/list', {});
		}

		/**
		 * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
		 * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
		 * Put mimic/store/lreplace/{var}/{index}
		 * @param {string} _var Variable name
		 * @param {number} index Index
		 * @param {string} requestBody Value
		 * @return {string} successful operation
		 */
		Store_lreplace(_var: string, index: number, requestBody: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/store/lreplace/' + (_var == null ? '' : encodeURIComponent(_var)) + '/' + index, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * This command can be used as a predicate to ascertain the persistence of a given variable.
		 * It returns "1" if the variable is persistent, else "0".
		 * Get mimic/store/persists/{var}
		 * @param {string} _var Variable name
		 * @return {string} successful operation
		 */
		Store_persists(_var: string): Observable<string> {
			return this.http.get(this.baseUri + 'mimic/store/persists/' + (_var == null ? '' : encodeURIComponent(_var)), { responseType: 'text' });
		}

		/**
		 * Set the variable store for the global storage
		 * Persist 1 means persistent , 0 means non-persistent
		 * Put mimic/store/set/{var}/{persist}
		 * @param {string} _var Variable name
		 * @param {number} persist Persistent setting
		 * @param {string} requestBody Value
		 * @return {string} successful operation
		 */
		Store_set(_var: string, persist: number, requestBody: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/store/set/' + (_var == null ? '' : encodeURIComponent(_var)) + '/' + persist, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Deletes a variable which is currently defined.
		 * This will cleanup persistent variables if needed
		 * Put mimic/store/unset/{var}
		 * @param {string} _var Variable name
		 * @return {string} successful operation
		 */
		Store_unset(_var: string): Observable<string> {
			return this.http.put(this.baseUri + 'mimic/store/unset/' + (_var == null ? '' : encodeURIComponent(_var)), null, { responseType: 'text' });
		}

		/**
		 * Terminate the MIMIC daemon.
		 * Terminate the MIMIC daemon.
		 * Put mimic/terminate
		 * @return {{[id: string]: number }} successful operation
		 */
		Terminate(): Observable<{[id: string]: number }> {
			return this.http.put<{[id: string]: number }>(this.baseUri + 'mimic/terminate', null, {});
		}

		/**
		 * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
		 * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
		 * Post mimic/timer/script/add/{script}/{interval}/{arg}
		 * @param {string} script Script name
		 * @param {number} interval Interval in msec
		 * @param {string} arg Arguments to the script
		 * @return {string} successful operation
		 */
		Add_daemon_timer_script(script: string, interval: number, arg: string): Observable<string> {
			return this.http.post(this.baseUri + 'mimic/timer/script/add/' + (script == null ? '' : encodeURIComponent(script)) + '/' + interval + '/' + (arg == null ? '' : encodeURIComponent(arg)), null, { responseType: 'text' });
		}

		/**
		 * Remove a timer script from the execution list.
		 * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
		 * Delete mimic/timer/script/delete/{script}/{interval}/{arg}
		 * @param {string} script Script name
		 * @param {number} interval Interval in msec
		 * @param {string} arg Arguments to the script
		 * @return {string} successful operation
		 */
		Del_daemon_timer_script(script: string, interval: number, arg: string): Observable<string> {
			return this.http.delete(this.baseUri + 'mimic/timer/script/delete/' + (script == null ? '' : encodeURIComponent(script)) + '/' + interval + '/' + (arg == null ? '' : encodeURIComponent(arg)), { responseType: 'text' });
		}

		/**
		 * List the timer scripts currently running along with the their intervals.
		 * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
		 * Get mimic/timer/script/list
		 * @return {Array<TimerScript>} successful operation
		 */
		List_daemon_timer_scripts(): Observable<Array<TimerScript>> {
			return this.http.get<Array<TimerScript>>(this.baseUri + 'mimic/timer/script/list', {});
		}
	}

}

