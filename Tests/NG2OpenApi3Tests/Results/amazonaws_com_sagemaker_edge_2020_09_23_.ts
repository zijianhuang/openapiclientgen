import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetDeploymentsResult {
		Deployments?: Array<EdgeDeployment>;
	}
	export interface GetDeploymentsResultFormProperties {
	}
	export function CreateGetDeploymentsResultFormGroup() {
		return new FormGroup<GetDeploymentsResultFormProperties>({
		});

	}


	/** Information about a deployment on an edge device that is registered with SageMaker Edge Manager. */
	export interface EdgeDeployment {
		DeploymentName?: string;
		Type?: DeploymentType;
		FailureHandlingPolicy?: FailureHandlingPolicy;
		Definitions?: Array<Definition>;
	}

	/** Information about a deployment on an edge device that is registered with SageMaker Edge Manager. */
	export interface EdgeDeploymentFormProperties {
		DeploymentName: FormControl<string | null | undefined>,
		Type: FormControl<DeploymentType | null | undefined>,
		FailureHandlingPolicy: FormControl<FailureHandlingPolicy | null | undefined>,
	}
	export function CreateEdgeDeploymentFormGroup() {
		return new FormGroup<EdgeDeploymentFormProperties>({
			DeploymentName: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<DeploymentType | null | undefined>(undefined),
			FailureHandlingPolicy: new FormControl<FailureHandlingPolicy | null | undefined>(undefined),
		});

	}

	export enum DeploymentType { Model = 'Model' }

	export enum FailureHandlingPolicy { ROLLBACK_ON_FAILURE = 'ROLLBACK_ON_FAILURE', DO_NOTHING = 'DO_NOTHING' }


	/** <p/> */
	export interface Definition {
		ModelHandle?: string;
		S3Url?: string;
		Checksum?: Checksum;
		State?: ModelState;
	}

	/** <p/> */
	export interface DefinitionFormProperties {
		ModelHandle: FormControl<string | null | undefined>,
		S3Url: FormControl<string | null | undefined>,
		State: FormControl<ModelState | null | undefined>,
	}
	export function CreateDefinitionFormGroup() {
		return new FormGroup<DefinitionFormProperties>({
			ModelHandle: new FormControl<string | null | undefined>(undefined),
			S3Url: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ModelState | null | undefined>(undefined),
		});

	}


	/** Information about the checksum of a model deployed on a device. */
	export interface Checksum {
		Type?: ChecksumType;
		Sum?: string;
	}

	/** Information about the checksum of a model deployed on a device. */
	export interface ChecksumFormProperties {
		Type: FormControl<ChecksumType | null | undefined>,
		Sum: FormControl<string | null | undefined>,
	}
	export function CreateChecksumFormGroup() {
		return new FormGroup<ChecksumFormProperties>({
			Type: new FormControl<ChecksumType | null | undefined>(undefined),
			Sum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChecksumType { SHA1 = 'SHA1' }

	export enum ModelState { DEPLOY = 'DEPLOY', UNDEPLOY = 'UNDEPLOY' }

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
		});

	}

	export interface GetDeviceRegistrationResult {
		DeviceRegistration?: string;
		CacheTTL?: string;
	}
	export interface GetDeviceRegistrationResultFormProperties {
		DeviceRegistration: FormControl<string | null | undefined>,
		CacheTTL: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceRegistrationResultFormGroup() {
		return new FormGroup<GetDeviceRegistrationResultFormProperties>({
			DeviceRegistration: new FormControl<string | null | undefined>(undefined),
			CacheTTL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information required for edge device metrics. */
	export interface EdgeMetric {
		Dimension?: string;
		MetricName?: string;
		Value?: number | null;
		Timestamp?: Date;
	}

	/** Information required for edge device metrics. */
	export interface EdgeMetricFormProperties {
		Dimension: FormControl<string | null | undefined>,
		MetricName: FormControl<string | null | undefined>,
		Value: FormControl<number | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateEdgeMetricFormGroup() {
		return new FormGroup<EdgeMetricFormProperties>({
			Dimension: new FormControl<string | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about a model deployed on an edge device that is registered with SageMaker Edge Manager. */
	export interface Model {
		ModelName?: string;
		ModelVersion?: string;
		LatestSampleTime?: Date;
		LatestInference?: Date;
		ModelMetrics?: Array<EdgeMetric>;
	}

	/** Information about a model deployed on an edge device that is registered with SageMaker Edge Manager. */
	export interface ModelFormProperties {
		ModelName: FormControl<string | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
		LatestSampleTime: FormControl<Date | null | undefined>,
		LatestInference: FormControl<Date | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
			LatestSampleTime: new FormControl<Date | null | undefined>(undefined),
			LatestInference: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DeploymentModel {
		ModelHandle?: string;
		ModelName?: string;
		ModelVersion?: string;
		DesiredState?: ModelState;
		State?: ModelState;
		Status?: DeploymentStatus;
		StatusReason?: string;
		RollbackFailureReason?: string;
	}

	/** <p/> */
	export interface DeploymentModelFormProperties {
		ModelHandle: FormControl<string | null | undefined>,
		ModelName: FormControl<string | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
		DesiredState: FormControl<ModelState | null | undefined>,
		State: FormControl<ModelState | null | undefined>,
		Status: FormControl<DeploymentStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		RollbackFailureReason: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentModelFormGroup() {
		return new FormGroup<DeploymentModelFormProperties>({
			ModelHandle: new FormControl<string | null | undefined>(undefined),
			ModelName: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
			DesiredState: new FormControl<ModelState | null | undefined>(undefined),
			State: new FormControl<ModelState | null | undefined>(undefined),
			Status: new FormControl<DeploymentStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			RollbackFailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeploymentStatus { SUCCESS = 'SUCCESS', FAIL = 'FAIL' }


	/** Information about the result of a deployment on an edge device that is registered with SageMaker Edge Manager. */
	export interface DeploymentResult {
		DeploymentName?: string;
		DeploymentStatus?: string;
		DeploymentStatusMessage?: string;
		DeploymentStartTime?: Date;
		DeploymentEndTime?: Date;
		DeploymentModels?: Array<DeploymentModel>;
	}

	/** Information about the result of a deployment on an edge device that is registered with SageMaker Edge Manager. */
	export interface DeploymentResultFormProperties {
		DeploymentName: FormControl<string | null | undefined>,
		DeploymentStatus: FormControl<string | null | undefined>,
		DeploymentStatusMessage: FormControl<string | null | undefined>,
		DeploymentStartTime: FormControl<Date | null | undefined>,
		DeploymentEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateDeploymentResultFormGroup() {
		return new FormGroup<DeploymentResultFormProperties>({
			DeploymentName: new FormControl<string | null | undefined>(undefined),
			DeploymentStatus: new FormControl<string | null | undefined>(undefined),
			DeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			DeploymentStartTime: new FormControl<Date | null | undefined>(undefined),
			DeploymentEndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetDeploymentsRequest {

		/** Required */
		DeviceName: string;

		/** Required */
		DeviceFleetName: string;
	}
	export interface GetDeploymentsRequestFormProperties {

		/** Required */
		DeviceName: FormControl<string | null | undefined>,

		/** Required */
		DeviceFleetName: FormControl<string | null | undefined>,
	}
	export function CreateGetDeploymentsRequestFormGroup() {
		return new FormGroup<GetDeploymentsRequestFormProperties>({
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceFleetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDeviceRegistrationRequest {

		/** Required */
		DeviceName: string;

		/** Required */
		DeviceFleetName: string;
	}
	export interface GetDeviceRegistrationRequestFormProperties {

		/** Required */
		DeviceName: FormControl<string | null | undefined>,

		/** Required */
		DeviceFleetName: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceRegistrationRequestFormGroup() {
		return new FormGroup<GetDeviceRegistrationRequestFormProperties>({
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceFleetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendHeartbeatRequest {
		AgentMetrics?: Array<EdgeMetric>;
		Models?: Array<Model>;

		/** Required */
		AgentVersion: string;

		/** Required */
		DeviceName: string;

		/** Required */
		DeviceFleetName: string;
		DeploymentResult?: DeploymentResult;
	}
	export interface SendHeartbeatRequestFormProperties {

		/** Required */
		AgentVersion: FormControl<string | null | undefined>,

		/** Required */
		DeviceName: FormControl<string | null | undefined>,

		/** Required */
		DeviceFleetName: FormControl<string | null | undefined>,
	}
	export function CreateSendHeartbeatRequestFormGroup() {
		return new FormGroup<SendHeartbeatRequestFormProperties>({
			AgentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceFleetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Use to get the active deployments from a device.
		 * Post GetDeployments
		 * @return {GetDeploymentsResult} Success
		 */
		GetDeployments(requestBody: GetDeploymentsPostBody): Observable<GetDeploymentsResult> {
			return this.http.post<GetDeploymentsResult>(this.baseUri + 'GetDeployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use to check if a device is registered with SageMaker Edge Manager.
		 * Post GetDeviceRegistration
		 * @return {GetDeviceRegistrationResult} Success
		 */
		GetDeviceRegistration(requestBody: GetDeviceRegistrationPostBody): Observable<GetDeviceRegistrationResult> {
			return this.http.post<GetDeviceRegistrationResult>(this.baseUri + 'GetDeviceRegistration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use to get the current status of devices registered on SageMaker Edge Manager.
		 * Post SendHeartbeat
		 * @return {void} Success
		 */
		SendHeartbeat(requestBody: SendHeartbeatPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'SendHeartbeat', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface GetDeploymentsPostBody {

		/**
		 * The unique name of the device you want to get the configuration of active deployments from.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DeviceName: string;

		/**
		 * The name of the fleet that the device belongs to.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DeviceFleetName: string;
	}
	export interface GetDeploymentsPostBodyFormProperties {

		/**
		 * The unique name of the device you want to get the configuration of active deployments from.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DeviceName: FormControl<string | null | undefined>,

		/**
		 * The name of the fleet that the device belongs to.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DeviceFleetName: FormControl<string | null | undefined>,
	}
	export function CreateGetDeploymentsPostBodyFormGroup() {
		return new FormGroup<GetDeploymentsPostBodyFormProperties>({
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$')]),
			DeviceFleetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$')]),
		});

	}

	export interface GetDeviceRegistrationPostBody {

		/**
		 * The unique name of the device you want to get the registration status from.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DeviceName: string;

		/**
		 * The name of the fleet that the device belongs to.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DeviceFleetName: string;
	}
	export interface GetDeviceRegistrationPostBodyFormProperties {

		/**
		 * The unique name of the device you want to get the registration status from.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DeviceName: FormControl<string | null | undefined>,

		/**
		 * The name of the fleet that the device belongs to.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DeviceFleetName: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceRegistrationPostBodyFormGroup() {
		return new FormGroup<GetDeviceRegistrationPostBodyFormProperties>({
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$')]),
			DeviceFleetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$')]),
		});

	}

	export interface SendHeartbeatPostBody {

		/** For internal use. Returns a list of SageMaker Edge Manager agent operating metrics. */
		AgentMetrics?: Array<EdgeMetric>;

		/** Returns a list of models deployed on the the device. */
		Models?: Array<Model>;

		/**
		 * Returns the version of the agent.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		AgentVersion: string;

		/**
		 * The unique name of the device.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DeviceName: string;

		/**
		 * The name of the fleet that the device belongs to.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DeviceFleetName: string;

		/** Information about the result of a deployment on an edge device that is registered with SageMaker Edge Manager. */
		DeploymentResult?: SendHeartbeatPostBodyDeploymentResult;
	}
	export interface SendHeartbeatPostBodyFormProperties {

		/**
		 * Returns the version of the agent.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		AgentVersion: FormControl<string | null | undefined>,

		/**
		 * The unique name of the device.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DeviceName: FormControl<string | null | undefined>,

		/**
		 * The name of the fleet that the device belongs to.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DeviceFleetName: FormControl<string | null | undefined>,
	}
	export function CreateSendHeartbeatPostBodyFormGroup() {
		return new FormGroup<SendHeartbeatPostBodyFormProperties>({
			AgentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9\ \_\.]+')]),
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$')]),
			DeviceFleetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$')]),
		});

	}

	export interface SendHeartbeatPostBodyDeploymentResult {
		DeploymentName?: string;
		DeploymentStatus?: string;
		DeploymentStatusMessage?: string;
		DeploymentStartTime?: Date;
		DeploymentEndTime?: Date;
		DeploymentModels?: Array<DeploymentModel>;
	}
	export interface SendHeartbeatPostBodyDeploymentResultFormProperties {
		DeploymentName: FormControl<string | null | undefined>,
		DeploymentStatus: FormControl<string | null | undefined>,
		DeploymentStatusMessage: FormControl<string | null | undefined>,
		DeploymentStartTime: FormControl<Date | null | undefined>,
		DeploymentEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateSendHeartbeatPostBodyDeploymentResultFormGroup() {
		return new FormGroup<SendHeartbeatPostBodyDeploymentResultFormProperties>({
			DeploymentName: new FormControl<string | null | undefined>(undefined),
			DeploymentStatus: new FormControl<string | null | undefined>(undefined),
			DeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			DeploymentStartTime: new FormControl<Date | null | undefined>(undefined),
			DeploymentEndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

}

