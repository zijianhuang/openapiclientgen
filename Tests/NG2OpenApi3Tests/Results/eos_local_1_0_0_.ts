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
		 * connect
		 * Initiate a connection to a specified peer.
		 * Post net/connect
		 * @return {string} OK
		 */
		Connect(requestBody: ConnectPostBody): Observable<string> {
			return this.http.post(this.baseUri + 'net/connect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * connections
		 * Returns an array of all peer connection statuses.
		 * Post net/connections
		 * @return {Array<ConnectionsReturn>} OK
		 */
		Connections(requestBody: string): Observable<Array<ConnectionsReturn>> {
			return this.http.post<Array<ConnectionsReturn>>(this.baseUri + 'net/connections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * disconnect
		 * Initiate disconnection from a specified peer.
		 * Post net/disconnect
		 * @return {string} OK
		 */
		Disconnect(requestBody: DisconnectPostBody): Observable<string> {
			return this.http.post(this.baseUri + 'net/disconnect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * status
		 * Retrieves the connection status for a specified peer.
		 * Post net/status
		 * @return {StatusReturn} OK
		 */
		Status(requestBody: StatusPostBody): Observable<StatusReturn> {
			return this.http.post<StatusReturn>(this.baseUri + 'net/status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface ConnectPostBody {

		/**
		 * the endpoint to connect to expressed as either IP address or URL
		 * Required
		 */
		endpoint: string;
	}
	export interface ConnectPostBodyFormProperties {

		/**
		 * the endpoint to connect to expressed as either IP address or URL
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,
	}
	export function CreateConnectPostBodyFormGroup() {
		return new FormGroup<ConnectPostBodyFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConnectionsReturn {

		/** True if the peer is connecting, otherwise false */
		connecting?: boolean | null;

		/** Structure holding detailed information about the connection */
		last_handshake?: string | null;

		/** The IP address or URL of the peer */
		peer?: string | null;

		/** True if the peer is syncing, otherwise false */
		syncing?: boolean | null;
	}
	export interface ConnectionsReturnFormProperties {

		/** True if the peer is connecting, otherwise false */
		connecting: FormControl<boolean | null | undefined>,

		/** Structure holding detailed information about the connection */
		last_handshake: FormControl<string | null | undefined>,

		/** The IP address or URL of the peer */
		peer: FormControl<string | null | undefined>,

		/** True if the peer is syncing, otherwise false */
		syncing: FormControl<boolean | null | undefined>,
	}
	export function CreateConnectionsReturnFormGroup() {
		return new FormGroup<ConnectionsReturnFormProperties>({
			connecting: new FormControl<boolean | null | undefined>(undefined),
			last_handshake: new FormControl<string | null | undefined>(undefined),
			peer: new FormControl<string | null | undefined>(undefined),
			syncing: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DisconnectPostBody {

		/**
		 * the endpoint to disconnect from, expressed as either IP address or URL
		 * Required
		 */
		endpoint: string;
	}
	export interface DisconnectPostBodyFormProperties {

		/**
		 * the endpoint to disconnect from, expressed as either IP address or URL
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectPostBodyFormGroup() {
		return new FormGroup<DisconnectPostBodyFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StatusPostBody {

		/**
		 * the endpoint to get the status for, to expressed as either IP address or URL
		 * Required
		 */
		endpoint: string;
	}
	export interface StatusPostBodyFormProperties {

		/**
		 * the endpoint to get the status for, to expressed as either IP address or URL
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,
	}
	export function CreateStatusPostBodyFormGroup() {
		return new FormGroup<StatusPostBodyFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StatusReturn {

		/** True if the peer is connecting, otherwise false */
		connecting?: boolean | null;

		/** Structure holding detailed information about the connection */
		last_handshake?: string | null;

		/** The IP address or URL of the peer */
		peer?: string | null;

		/** True if the peer is syncing, otherwise false */
		syncing?: boolean | null;
	}
	export interface StatusReturnFormProperties {

		/** True if the peer is connecting, otherwise false */
		connecting: FormControl<boolean | null | undefined>,

		/** Structure holding detailed information about the connection */
		last_handshake: FormControl<string | null | undefined>,

		/** The IP address or URL of the peer */
		peer: FormControl<string | null | undefined>,

		/** True if the peer is syncing, otherwise false */
		syncing: FormControl<boolean | null | undefined>,
	}
	export function CreateStatusReturnFormGroup() {
		return new FormGroup<StatusReturnFormProperties>({
			connecting: new FormControl<boolean | null | undefined>(undefined),
			last_handshake: new FormControl<string | null | undefined>(undefined),
			peer: new FormControl<string | null | undefined>(undefined),
			syncing: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

