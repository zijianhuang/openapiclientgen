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
		InstanceId: string;
		InstanceOSUser: string;
		SSHPublicKey: string;
		AvailabilityZone: string;
	}
	export interface SendSSHPublicKeyRequestFormProperties {
		InstanceId: FormControl<string | null | undefined>,
		InstanceOSUser: FormControl<string | null | undefined>,
		SSHPublicKey: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateSendSSHPublicKeyRequestFormGroup() {
		return new FormGroup<SendSSHPublicKeyRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			InstanceOSUser: new FormControl<string | null | undefined>(undefined),
			SSHPublicKey: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
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

