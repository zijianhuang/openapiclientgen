import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ClientLimitExceededException {
	}
	export interface ClientLimitExceededExceptionFormProperties {
	}
	export function CreateClientLimitExceededExceptionFormGroup() {
		return new FormGroup<ClientLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidArgumentException {
	}
	export interface InvalidArgumentExceptionFormProperties {
	}
	export function CreateInvalidArgumentExceptionFormGroup() {
		return new FormGroup<InvalidArgumentExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface JoinStorageSessionInput {

		/** Required */
		channelArn: string;
	}
	export interface JoinStorageSessionInputFormProperties {

		/** Required */
		channelArn: FormControl<string | null | undefined>,
	}
	export function CreateJoinStorageSessionInputFormGroup() {
		return new FormGroup<JoinStorageSessionInputFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p> Join the ongoing one way-video and/or multi-way audio WebRTC session as a video producing device for an input channel. If there’s no existing session for the channel, a new streaming session needs to be created, and the Amazon Resource Name (ARN) of the signaling channel must be provided. </p> <p>Currently for the <code>SINGLE_MASTER</code> type, a video producing device is able to ingest both audio and video media into a stream, while viewers can only ingest audio. Both a video producing device and viewers can join the session first, and wait for other participants.</p> <p>While participants are having peer to peer conversations through webRTC, the ingested media session will be stored into the Kinesis Video Stream. Multiple viewers are able to playback real-time media.</p> <p>Customers can also use existing Kinesis Video Streams features like <code>HLS</code> or <code>DASH</code> playback, Image generation, and more with ingested WebRTC media.</p> <note> <p>Assume that only one video producing device client can be associated with a session for the channel. If more than one client joins the session of a specific channel as a video producing device, the most recent client request takes precedence. </p> </note>
		 * Post joinStorageSession
		 * @return {void} Success
		 */
		JoinStorageSession(requestBody: JoinStorageSessionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'joinStorageSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface JoinStorageSessionPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel.
		 * Required
		 */
		channelArn: string;
	}
	export interface JoinStorageSessionPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel.
		 * Required
		 */
		channelArn: FormControl<string | null | undefined>,
	}
	export function CreateJoinStorageSessionPostBodyFormGroup() {
		return new FormGroup<JoinStorageSessionPostBodyFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:(aws[a-zA-Z-]*):kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+$')]),
		});

	}

}

