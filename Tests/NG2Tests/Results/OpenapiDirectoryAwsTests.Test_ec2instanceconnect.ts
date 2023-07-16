import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface SendSSHPublicKeyResponse {
		RequestId?: string;
		Success?: boolean;
	}

	export interface SendSSHPublicKeyRequest {
		InstanceId: string;
		InstanceOSUser: string;
		SSHPublicKey: string;
		AvailabilityZone: string;
	}

	export interface AuthException {
	}

	export interface InvalidArgsException {
	}

	export interface ServiceException {
	}

	export interface ThrottlingException {
	}

	export interface EC2InstanceNotFoundException {
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

