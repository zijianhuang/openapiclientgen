import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Schema of the Data property of an EventGridEvent for an Microsoft.AppConfiguration.KeyValueDeleted event. */
	export interface AppConfigurationKeyValueDeletedEventData {

		/** The etag representing the key-value that was deleted. */
		etag?: string | null;

		/** The key used to identify the key-value that was deleted. */
		key?: string | null;

		/** The label, if any, used to identify the key-value that was deleted. */
		label?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an Microsoft.AppConfiguration.KeyValueDeleted event. */
	export interface AppConfigurationKeyValueDeletedEventDataFormProperties {

		/** The etag representing the key-value that was deleted. */
		etag: FormControl<string | null | undefined>,

		/** The key used to identify the key-value that was deleted. */
		key: FormControl<string | null | undefined>,

		/** The label, if any, used to identify the key-value that was deleted. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateAppConfigurationKeyValueDeletedEventDataFormGroup() {
		return new FormGroup<AppConfigurationKeyValueDeletedEventDataFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for an Microsoft.AppConfiguration.KeyValueModified event. */
	export interface AppConfigurationKeyValueModifiedEventData {

		/** The etag representing the new state of the key-value. */
		etag?: string | null;

		/** The key used to identify the key-value that was modified. */
		key?: string | null;

		/** The label, if any, used to identify the key-value that was modified. */
		label?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an Microsoft.AppConfiguration.KeyValueModified event. */
	export interface AppConfigurationKeyValueModifiedEventDataFormProperties {

		/** The etag representing the new state of the key-value. */
		etag: FormControl<string | null | undefined>,

		/** The key used to identify the key-value that was modified. */
		key: FormControl<string | null | undefined>,

		/** The label, if any, used to identify the key-value that was modified. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateAppConfigurationKeyValueModifiedEventDataFormGroup() {
		return new FormGroup<AppConfigurationKeyValueModifiedEventDataFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

