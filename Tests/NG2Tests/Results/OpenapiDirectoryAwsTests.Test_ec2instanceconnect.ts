import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface SendSSHPublicKeyResponse {
		RequestId?: string | null;
		Success?: boolean | null;
	}
	export interface SendSSHPublicKeyResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateSendSSHPublicKeyResponseFormGroup() {
		return new FormGroup<SendSSHPublicKeyResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SendSSHPublicKeyRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 10
		 */
		InstanceId: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		InstanceOSUser: string;

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 256
		 */
		SSHPublicKey: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 6
		 */
		AvailabilityZone: string;
	}
	export interface SendSSHPublicKeyRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 10
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		InstanceOSUser: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 256
		 */
		SSHPublicKey: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 6
		 */
		AvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateSendSSHPublicKeyRequestFormGroup() {
		return new FormGroup<SendSSHPublicKeyRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(10), Validators.pattern('^i-[a-f0-9]+$')]),
			InstanceOSUser: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[A-Za-z_][A-Za-z0-9\@\._-]{0,30}[A-Za-z0-9\$_-]?$')]),
			SSHPublicKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096), Validators.minLength(256)]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(6), Validators.pattern('^(\w+-){2,3}\d+\w+$')]),
		});

	}

	export interface AuthException {
	}
	export interface AuthExceptionFormProperties {
	}
	export function CreateAuthExceptionFormGroup() {
		return new FormGroup<AuthExceptionFormProperties>({
		});

	}

	export interface InvalidArgsException {
	}
	export interface InvalidArgsExceptionFormProperties {
	}
	export function CreateInvalidArgsExceptionFormGroup() {
		return new FormGroup<InvalidArgsExceptionFormProperties>({
		});

	}

	export interface ServiceException {
	}
	export interface ServiceExceptionFormProperties {
	}
	export function CreateServiceExceptionFormGroup() {
		return new FormGroup<ServiceExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface EC2InstanceNotFoundException {
	}
	export interface EC2InstanceNotFoundExceptionFormProperties {
	}
	export function CreateEC2InstanceNotFoundExceptionFormGroup() {
		return new FormGroup<EC2InstanceNotFoundExceptionFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Pushes an SSH public key to a particular OS user on a given EC2 instance for 60 seconds.
		 * Post #X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey
		 * @return {SendSSHPublicKeyResponse} Success
		 */
		SendSSHPublicKey(requestBody: SendSSHPublicKeyRequest): Observable<SendSSHPublicKeyResponse> {
			return this.http.post<SendSSHPublicKeyResponse>(this.baseUri + '#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum SendSSHPublicKeyX_Amz_Target { AWSEC2InstanceConnectService_SendSSHPublicKey = 0 }

}

