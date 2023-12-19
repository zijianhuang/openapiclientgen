import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GoneException {
	}
	export interface GoneExceptionFormProperties {
	}
	export function CreateGoneExceptionFormGroup() {
		return new FormGroup<GoneExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface GetConnectionResponse {
		ConnectedAt?: Date | null;
		Identity?: Identity;
		LastActiveAt?: Date | null;
	}
	export interface GetConnectionResponseFormProperties {
		ConnectedAt: FormControl<Date | null | undefined>,
		LastActiveAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetConnectionResponseFormGroup() {
		return new FormGroup<GetConnectionResponseFormProperties>({
			ConnectedAt: new FormControl<Date | null | undefined>(undefined),
			LastActiveAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Identity {
		SourceIp: string;
		UserAgent: string;
	}
	export interface IdentityFormProperties {
		SourceIp: FormControl<string | null | undefined>,
		UserAgent: FormControl<string | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			SourceIp: new FormControl<string | null | undefined>(undefined),
			UserAgent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayloadTooLargeException {
	}
	export interface PayloadTooLargeExceptionFormProperties {
	}
	export function CreatePayloadTooLargeExceptionFormGroup() {
		return new FormGroup<PayloadTooLargeExceptionFormProperties>({
		});

	}

	export interface DeleteConnectionRequest {
	}
	export interface DeleteConnectionRequestFormProperties {
	}
	export function CreateDeleteConnectionRequestFormGroup() {
		return new FormGroup<DeleteConnectionRequestFormProperties>({
		});

	}

	export interface GetConnectionRequest {
	}
	export interface GetConnectionRequestFormProperties {
	}
	export function CreateGetConnectionRequestFormGroup() {
		return new FormGroup<GetConnectionRequestFormProperties>({
		});

	}

	export interface PostToConnectionRequest {

		/**
		 * The data to be sent to the client specified by its connection id.
		 * Required
		 * Max length: 131072
		 */
		Data: string;
	}
	export interface PostToConnectionRequestFormProperties {

		/**
		 * The data to be sent to the client specified by its connection id.
		 * Required
		 * Max length: 131072
		 */
		Data: FormControl<string | null | undefined>,
	}
	export function CreatePostToConnectionRequestFormGroup() {
		return new FormGroup<PostToConnectionRequestFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete the connection with the provided id.
		 * Delete @connections/{connectionId}
		 * @return {void} 
		 */
		DeleteConnection(connectionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about the connection with the provided id.
		 * Get @connections/{connectionId}
		 * @return {GetConnectionResponse} Success
		 */
		GetConnection(connectionId: string): Observable<GetConnectionResponse> {
			return this.http.get<GetConnectionResponse>(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), {});
		}

		/**
		 * Sends the provided data to the specified connection.
		 * Post @connections/{connectionId}
		 * @param {string} connectionId The identifier of the connection that a specific client is using.
		 * @return {void} Success
		 */
		PostToConnection(connectionId: string, requestBody: PostToConnectionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface PostToConnectionPostBody {

		/**
		 * The data to be sent to the client specified by its connection id.
		 * Required
		 * Max length: 131072
		 */
		Data: string;
	}
	export interface PostToConnectionPostBodyFormProperties {

		/**
		 * The data to be sent to the client specified by its connection id.
		 * Required
		 * Max length: 131072
		 */
		Data: FormControl<string | null | undefined>,
	}
	export function CreatePostToConnectionPostBodyFormGroup() {
		return new FormGroup<PostToConnectionPostBodyFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined),
		});

	}

}

