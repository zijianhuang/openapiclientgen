import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Parameters for bootstrap action */
	export interface BootStrapActionParameters {

		/** Generic Version object */
		version?: string | null;
	}

	/** Parameters for bootstrap action */
	export interface BootStrapActionParametersFormProperties {

		/** Generic Version object */
		version: FormControl<string | null | undefined>,
	}
	export function CreateBootStrapActionParametersFormGroup() {
		return new FormGroup<BootStrapActionParametersFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for deploy action */
	export interface DeployActionParameters {

		/** Deployment parameters, value in JToken */
		parameters?: string | null;

		/** Generic Version object */
		version?: string | null;
	}

	/** Parameters for deploy action */
	export interface DeployActionParametersFormProperties {

		/** Deployment parameters, value in JToken */
		parameters: FormControl<string | null | undefined>,

		/** Generic Version object */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDeployActionParametersFormGroup() {
		return new FormGroup<DeployActionParametersFormProperties>({
			parameters: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource provider deployment information */
	export interface DeploymentInfo {

		/** The identifier of the latest action plan instance resource. */
		actionPlanInstanceResourceId?: string | null;

		/** entity tag */
		eTag?: string | null;

		/** The latest deployment parameters as JToken */
		parameters?: string | null;

		/** The product version */
		version?: string | null;
	}

	/** Resource provider deployment information */
	export interface DeploymentInfoFormProperties {

		/** The identifier of the latest action plan instance resource. */
		actionPlanInstanceResourceId: FormControl<string | null | undefined>,

		/** entity tag */
		eTag: FormControl<string | null | undefined>,

		/** The latest deployment parameters as JToken */
		parameters: FormControl<string | null | undefined>,

		/** The product version */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentInfoFormGroup() {
		return new FormGroup<DeploymentInfoFormProperties>({
			actionPlanInstanceResourceId: new FormControl<string | null | undefined>(undefined),
			eTag: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status of an operation. */
	export enum DeploymentStatus { None = 0, Bootstrapping = 1, BootstrapSucceeded = 2, BootstrapFailed = 3, Deploying = 4, DeploymentSucceeded = 5, DeploymentFailed = 6, Updating = 7, UpdateSucceeded = 8, UpdateFailed = 9, Removing = 10, RemoveFailed = 11, SecretRotationInProgress = 12, SecretRotationSucceeded = 13, SecretRotationFailed = 14, Migrated = 15 }

	export interface ExtendedErrorInfo {
	}
	export interface ExtendedErrorInfoFormProperties {
	}
	export function CreateExtendedErrorInfoFormGroup() {
		return new FormGroup<ExtendedErrorInfoFormProperties>({
		});

	}


	/** Resource provider deployment information */
	export interface ExternalAccessInfo {

		/** The deployment start time */
		expirationTime?: Date | null;

		/** The object identifier of the user, group or service principal that have access to resource provider subscription. */
		principalId?: string | null;
	}

	/** Resource provider deployment information */
	export interface ExternalAccessInfoFormProperties {

		/** The deployment start time */
		expirationTime: FormControl<Date | null | undefined>,

		/** The object identifier of the user, group or service principal that have access to resource provider subscription. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateExternalAccessInfoFormGroup() {
		return new FormGroup<ExternalAccessInfoFormProperties>({
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Product deployment entity */
	export interface ProductDeploymentResourceEntity {

		/** entity tag */
		eTag?: string | null;

		/** Product deployment resource properties */
		properties?: ProductDeploymentsProperties;
	}

	/** Product deployment entity */
	export interface ProductDeploymentResourceEntityFormProperties {

		/** entity tag */
		eTag: FormControl<string | null | undefined>,
	}
	export function CreateProductDeploymentResourceEntityFormGroup() {
		return new FormGroup<ProductDeploymentResourceEntityFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Product deployment resource properties */
	export interface ProductDeploymentsProperties {

		/** Resource provider deployment information */
		deployment?: DeploymentInfo;

		/** Error information */
		error?: ProductDeploymentsPropertiesError;

		/** Resource provider deployment information */
		externalAccess?: ExternalAccessInfo;

		/** Resource type internal state */
		internalState?: ProductDeploymentsInternalState;

		/** Resource provider deployment information */
		lastSuccessfulDeployment?: DeploymentInfo;

		/** The product identifier */
		productId?: string | null;

		/** The provisioning state */
		provisioningState?: string | null;

		/** Resource provider deployment information */
		secretRotation?: SecretRotationInfo;

		/** Status of an operation. */
		status?: DeploymentStatus | null;

		/** The product subscription identifier */
		subscriptionId?: string | null;
	}

	/** Product deployment resource properties */
	export interface ProductDeploymentsPropertiesFormProperties {

		/** The product identifier */
		productId: FormControl<string | null | undefined>,

		/** The provisioning state */
		provisioningState: FormControl<string | null | undefined>,

		/** Status of an operation. */
		status: FormControl<DeploymentStatus | null | undefined>,

		/** The product subscription identifier */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateProductDeploymentsPropertiesFormGroup() {
		return new FormGroup<ProductDeploymentsPropertiesFormProperties>({
			productId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DeploymentStatus | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductDeploymentsPropertiesError {

		/** Error Code */
		code?: string | null;
		details?: ExtendedErrorInfo;

		/** Error Message */
		message?: string | null;
	}
	export interface ProductDeploymentsPropertiesErrorFormProperties {

		/** Error Code */
		code: FormControl<string | null | undefined>,

		/** Error Message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateProductDeploymentsPropertiesErrorFormGroup() {
		return new FormGroup<ProductDeploymentsPropertiesErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource type internal state */
	export interface ProductDeploymentsInternalState {

		/** The current external access role assignment identifier */
		externalAccessRoleAssignmentId?: string | null;

		/** The intermediate vault resource identifier */
		intermediateVaultId?: string | null;

		/** The intermediate vault Uri. */
		intermediateVaultUri?: string | null;

		/** The latest deployment job identifier */
		jobId?: string | null;
	}

	/** Resource type internal state */
	export interface ProductDeploymentsInternalStateFormProperties {

		/** The current external access role assignment identifier */
		externalAccessRoleAssignmentId: FormControl<string | null | undefined>,

		/** The intermediate vault resource identifier */
		intermediateVaultId: FormControl<string | null | undefined>,

		/** The intermediate vault Uri. */
		intermediateVaultUri: FormControl<string | null | undefined>,

		/** The latest deployment job identifier */
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateProductDeploymentsInternalStateFormGroup() {
		return new FormGroup<ProductDeploymentsInternalStateFormProperties>({
			externalAccessRoleAssignmentId: new FormControl<string | null | undefined>(undefined),
			intermediateVaultId: new FormControl<string | null | undefined>(undefined),
			intermediateVaultUri: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource provider deployment information */
	export interface SecretRotationInfo {

		/** The identifier of the latest secret rotation plan instance resource. */
		secretRotationPlanInstanceResourceId?: string | null;
	}

	/** Resource provider deployment information */
	export interface SecretRotationInfoFormProperties {

		/** The identifier of the latest secret rotation plan instance resource. */
		secretRotationPlanInstanceResourceId: FormControl<string | null | undefined>,
	}
	export function CreateSecretRotationInfoFormGroup() {
		return new FormGroup<SecretRotationInfoFormProperties>({
			secretRotationPlanInstanceResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Product Deployments. */
	export interface ProductDeploymentsList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of Product Deployments. */
		value?: Array<ProductDeploymentResourceEntity>;
	}

	/** List of Product Deployments. */
	export interface ProductDeploymentsListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProductDeploymentsListFormGroup() {
		return new FormGroup<ProductDeploymentsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for bootstrap action */
	export interface UnlockActionParameters {

		/** Duration in TimeSpan format(Define which ISO format) */
		duration?: string | null;
	}

	/** Parameters for bootstrap action */
	export interface UnlockActionParametersFormProperties {

		/** Duration in TimeSpan format(Define which ISO format) */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateUnlockActionParametersFormGroup() {
		return new FormGroup<UnlockActionParametersFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Invokes bootstrap action on the product deployment
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {ProductDeploymentsList} Ok
		 */
		ProductDeployments_List(subscriptionId: string, api_version: string): Observable<ProductDeploymentsList> {
			return this.http.get<ProductDeploymentsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productDeployments&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Invokes bootstrap action on the product deployment
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/{productId}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} productId The product identifier.
		 * @return {ProductDeploymentResourceEntity} Ok
		 */
		ProductDeployments_Get(subscriptionId: string, api_version: string, productId: string): Observable<ProductDeploymentResourceEntity> {
			return this.http.get<ProductDeploymentResourceEntity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/' + (productId == null ? '' : encodeURIComponent(productId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Invokes bootstrap action on the product deployment
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/{productId}/bootstrap
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} productId The product identifier.
		 * @param {string} api_version Client API Version.
		 * @param {ProductDeployments_BootStrapPostBody} requestBody Represents bootstrap action parameter
		 * @return {void} Ok
		 */
		ProductDeployments_BootStrap(subscriptionId: string, productId: string, api_version: string, requestBody: ProductDeployments_BootStrapPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/' + (productId == null ? '' : encodeURIComponent(productId)) + '/bootstrap&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Invokes deploy action on the product
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/{productId}/deploy
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} productId The product identifier.
		 * @param {string} api_version Client API Version.
		 * @param {ProductDeployments_DeployPostBody} requestBody Represents bootstrap action parameter
		 * @return {void} Ok
		 */
		ProductDeployments_Deploy(subscriptionId: string, productId: string, api_version: string, requestBody: ProductDeployments_DeployPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/' + (productId == null ? '' : encodeURIComponent(productId)) + '/deploy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * locks the product subscription
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/{productId}/lock
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} productId The product identifier.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK
		 */
		ProductDeployments_Lock(subscriptionId: string, productId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/' + (productId == null ? '' : encodeURIComponent(productId)) + '/lock&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Invokes remove action on the product deployment
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/{productId}/remove
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} productId The product identifier.
		 * @param {string} api_version Client API Version.
		 * @return {void} Ok
		 */
		ProductDeployments_Remove(subscriptionId: string, productId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/' + (productId == null ? '' : encodeURIComponent(productId)) + '/remove&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Invokes rotate secrets action on the product deployment
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/{productId}/rotateSecrets
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} productId The product identifier.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK
		 */
		ProductDeployments_RotateSecrets(subscriptionId: string, productId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/' + (productId == null ? '' : encodeURIComponent(productId)) + '/rotateSecrets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unlocks the product subscription
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/{productId}/unlock
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} productId The product identifier.
		 * @param {string} api_version Client API Version.
		 * @param {ProductDeployments_UnlockPostBody} requestBody Represents bootstrap action parameter
		 * @return {void} OK
		 */
		ProductDeployments_Unlock(subscriptionId: string, productId: string, api_version: string, requestBody: ProductDeployments_UnlockPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/' + (productId == null ? '' : encodeURIComponent(productId)) + '/unlock&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface ProductDeployments_BootStrapPostBody {

		/** Generic Version object */
		version?: string | null;
	}
	export interface ProductDeployments_BootStrapPostBodyFormProperties {

		/** Generic Version object */
		version: FormControl<string | null | undefined>,
	}
	export function CreateProductDeployments_BootStrapPostBodyFormGroup() {
		return new FormGroup<ProductDeployments_BootStrapPostBodyFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductDeployments_DeployPostBody {

		/** Deployment parameters, value in JToken */
		parameters?: string | null;

		/** Generic Version object */
		version?: string | null;
	}
	export interface ProductDeployments_DeployPostBodyFormProperties {

		/** Deployment parameters, value in JToken */
		parameters: FormControl<string | null | undefined>,

		/** Generic Version object */
		version: FormControl<string | null | undefined>,
	}
	export function CreateProductDeployments_DeployPostBodyFormGroup() {
		return new FormGroup<ProductDeployments_DeployPostBodyFormProperties>({
			parameters: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductDeployments_UnlockPostBody {

		/** Duration in TimeSpan format(Define which ISO format) */
		duration?: string | null;
	}
	export interface ProductDeployments_UnlockPostBodyFormProperties {

		/** Duration in TimeSpan format(Define which ISO format) */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateProductDeployments_UnlockPostBodyFormGroup() {
		return new FormGroup<ProductDeployments_UnlockPostBodyFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}

}

