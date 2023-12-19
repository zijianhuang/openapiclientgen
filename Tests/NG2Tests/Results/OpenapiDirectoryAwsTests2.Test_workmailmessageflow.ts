import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetRawMessageContentResponse {
		messageContent: string;
	}
	export interface GetRawMessageContentResponseFormProperties {
		messageContent: FormControl<string | null | undefined>,
	}
	export function CreateGetRawMessageContentResponseFormGroup() {
		return new FormGroup<GetRawMessageContentResponseFormProperties>({
			messageContent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface GetRawMessageContentRequest {
	}
	export interface GetRawMessageContentRequestFormProperties {
	}
	export function CreateGetRawMessageContentRequestFormGroup() {
		return new FormGroup<GetRawMessageContentRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves the raw content of an in-transit email message, in MIME format.
		 * Get messages/{messageId}
		 * @param {string} messageId The identifier of the email message to retrieve.
		 * @return {GetRawMessageContentResponse} Success
		 */
		GetRawMessageContent(messageId: string): Observable<GetRawMessageContentResponse> {
			return this.http.get<GetRawMessageContentResponse>(this.baseUri + 'messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), {});
		}
	}

}

