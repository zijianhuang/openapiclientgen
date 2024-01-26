import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface SendSSHPublicKeyResponse {
		RequestId?: string;
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

		/** Required */
		InstanceId: string;

		/** Required */
		InstanceOSUser: string;

		/** Required */
		SSHPublicKey: string;
		AvailabilityZone?: string;
	}
	export interface SendSSHPublicKeyRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		InstanceOSUser: FormControl<string | null | undefined>,

		/** Required */
		SSHPublicKey: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateSendSSHPublicKeyRequestFormGroup() {
		return new FormGroup<SendSSHPublicKeyRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceOSUser: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SSHPublicKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface EC2InstanceStateInvalidException {
	}
	export interface EC2InstanceStateInvalidExceptionFormProperties {
	}
	export function CreateEC2InstanceStateInvalidExceptionFormGroup() {
		return new FormGroup<EC2InstanceStateInvalidExceptionFormProperties>({
		});

	}

	export interface EC2InstanceUnavailableException {
	}
	export interface EC2InstanceUnavailableExceptionFormProperties {
	}
	export function CreateEC2InstanceUnavailableExceptionFormGroup() {
		return new FormGroup<EC2InstanceUnavailableExceptionFormProperties>({
		});

	}

	export interface SendSerialConsoleSSHPublicKeyResponse {
		RequestId?: string;
		Success?: boolean | null;
	}
	export interface SendSerialConsoleSSHPublicKeyResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateSendSerialConsoleSSHPublicKeyResponseFormGroup() {
		return new FormGroup<SendSerialConsoleSSHPublicKeyResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SendSerialConsoleSSHPublicKeyRequest {

		/** Required */
		InstanceId: string;
		SerialPort?: number | null;

		/** Required */
		SSHPublicKey: string;
	}
	export interface SendSerialConsoleSSHPublicKeyRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		SerialPort: FormControl<number | null | undefined>,

		/** Required */
		SSHPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateSendSerialConsoleSSHPublicKeyRequestFormGroup() {
		return new FormGroup<SendSerialConsoleSSHPublicKeyRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SerialPort: new FormControl<number | null | undefined>(undefined),
			SSHPublicKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SerialConsoleAccessDisabledException {
	}
	export interface SerialConsoleAccessDisabledExceptionFormProperties {
	}
	export function CreateSerialConsoleAccessDisabledExceptionFormGroup() {
		return new FormGroup<SerialConsoleAccessDisabledExceptionFormProperties>({
		});

	}

	export interface EC2InstanceTypeInvalidException {
	}
	export interface EC2InstanceTypeInvalidExceptionFormProperties {
	}
	export function CreateEC2InstanceTypeInvalidExceptionFormGroup() {
		return new FormGroup<EC2InstanceTypeInvalidExceptionFormProperties>({
		});

	}

	export interface SerialConsoleSessionLimitExceededException {
	}
	export interface SerialConsoleSessionLimitExceededExceptionFormProperties {
	}
	export function CreateSerialConsoleSessionLimitExceededExceptionFormGroup() {
		return new FormGroup<SerialConsoleSessionLimitExceededExceptionFormProperties>({
		});

	}

	export interface SerialConsoleSessionUnavailableException {
	}
	export interface SerialConsoleSessionUnavailableExceptionFormProperties {
	}
	export function CreateSerialConsoleSessionUnavailableExceptionFormGroup() {
		return new FormGroup<SerialConsoleSessionUnavailableExceptionFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Pushes an SSH public key to the specified EC2 instance for use by the specified user. The key remains for 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html">Connect to your Linux instance using EC2 Instance Connect</a> in the <i>Amazon EC2 User Guide</i>.
		 * Post #X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey
		 * @return {SendSSHPublicKeyResponse} Success
		 */
		SendSSHPublicKey(requestBody: SendSSHPublicKeyRequest): Observable<SendSSHPublicKeyResponse> {
			return this.http.post<SendSSHPublicKeyResponse>(this.baseUri + '#X-Amz-Target=AWSEC2InstanceConnectService.SendSSHPublicKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Pushes an SSH public key to the specified EC2 instance. The key remains for 60 seconds, which gives you 60 seconds to establish a serial console connection to the instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in the <i>Amazon EC2 User Guide</i>.
		 * Post #X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey
		 * @return {SendSerialConsoleSSHPublicKeyResponse} Success
		 */
		SendSerialConsoleSSHPublicKey(requestBody: SendSerialConsoleSSHPublicKeyRequest): Observable<SendSerialConsoleSSHPublicKeyResponse> {
			return this.http.post<SendSerialConsoleSSHPublicKeyResponse>(this.baseUri + '#X-Amz-Target=AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum SendSSHPublicKeyX_Amz_Target { 'AWSEC2InstanceConnectService.SendSSHPublicKey' = 0 }

	export enum SendSerialConsoleSSHPublicKeyX_Amz_Target { 'AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey' = 0 }

}

