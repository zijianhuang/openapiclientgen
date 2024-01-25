import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Schema of the Data property of an EventGridEvent for a Microsoft.SignalRService.ClientConnectionConnected event. */
	export interface SignalRServiceClientConnectionConnectedEventData {

		/** The connection Id of connected client connection. */
		connectionId?: string | null;

		/** The hub of connected client connection. */
		hubName?: string | null;

		/** The time at which the event occurred. */
		timestamp?: Date | null;

		/** The user Id of connected client connection. */
		userId?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.SignalRService.ClientConnectionConnected event. */
	export interface SignalRServiceClientConnectionConnectedEventDataFormProperties {

		/** The connection Id of connected client connection. */
		connectionId: FormControl<string | null | undefined>,

		/** The hub of connected client connection. */
		hubName: FormControl<string | null | undefined>,

		/** The time at which the event occurred. */
		timestamp: FormControl<Date | null | undefined>,

		/** The user Id of connected client connection. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateSignalRServiceClientConnectionConnectedEventDataFormGroup() {
		return new FormGroup<SignalRServiceClientConnectionConnectedEventDataFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined),
			hubName: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.SignalRService.ClientConnectionDisconnected event. */
	export interface SignalRServiceClientConnectionDisconnectedEventData {

		/** The connection Id of connected client connection. */
		connectionId?: string | null;

		/** The message of error that cause the client connection disconnected. */
		errorMessage?: string | null;

		/** The hub of connected client connection. */
		hubName?: string | null;

		/** The time at which the event occurred. */
		timestamp?: Date | null;

		/** The user Id of connected client connection. */
		userId?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.SignalRService.ClientConnectionDisconnected event. */
	export interface SignalRServiceClientConnectionDisconnectedEventDataFormProperties {

		/** The connection Id of connected client connection. */
		connectionId: FormControl<string | null | undefined>,

		/** The message of error that cause the client connection disconnected. */
		errorMessage: FormControl<string | null | undefined>,

		/** The hub of connected client connection. */
		hubName: FormControl<string | null | undefined>,

		/** The time at which the event occurred. */
		timestamp: FormControl<Date | null | undefined>,

		/** The user Id of connected client connection. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateSignalRServiceClientConnectionDisconnectedEventDataFormGroup() {
		return new FormGroup<SignalRServiceClientConnectionDisconnectedEventDataFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			hubName: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

