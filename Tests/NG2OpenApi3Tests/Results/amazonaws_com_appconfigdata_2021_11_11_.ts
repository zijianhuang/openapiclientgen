import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetLatestConfigurationResponse {
		Configuration?: string;
	}
	export interface GetLatestConfigurationResponseFormProperties {
		Configuration: FormControl<string | null | undefined>,
	}
	export function CreateGetLatestConfigurationResponseFormGroup() {
		return new FormGroup<GetLatestConfigurationResponseFormProperties>({
			Configuration: new FormControl<string | null | undefined>(undefined),
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface StartConfigurationSessionResponse {
		InitialConfigurationToken?: string;
	}
	export interface StartConfigurationSessionResponseFormProperties {
		InitialConfigurationToken: FormControl<string | null | undefined>,
	}
	export function CreateStartConfigurationSessionResponseFormGroup() {
		return new FormGroup<StartConfigurationSessionResponseFormProperties>({
			InitialConfigurationToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLatestConfigurationRequest {
	}
	export interface GetLatestConfigurationRequestFormProperties {
	}
	export function CreateGetLatestConfigurationRequestFormGroup() {
		return new FormGroup<GetLatestConfigurationRequestFormProperties>({
		});

	}

	export interface StartConfigurationSessionRequest {

		/** Required */
		ApplicationIdentifier: string;

		/** Required */
		EnvironmentIdentifier: string;

		/** Required */
		ConfigurationProfileIdentifier: string;
		RequiredMinimumPollIntervalInSeconds?: number | null;
	}
	export interface StartConfigurationSessionRequestFormProperties {

		/** Required */
		ApplicationIdentifier: FormControl<string | null | undefined>,

		/** Required */
		EnvironmentIdentifier: FormControl<string | null | undefined>,

		/** Required */
		ConfigurationProfileIdentifier: FormControl<string | null | undefined>,
		RequiredMinimumPollIntervalInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateStartConfigurationSessionRequestFormGroup() {
		return new FormGroup<StartConfigurationSessionRequestFormProperties>({
			ApplicationIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnvironmentIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConfigurationProfileIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequiredMinimumPollIntervalInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Retrieves the latest deployed configuration. This API may return empty configuration data if the client already has the latest version. For more information about this API action and to view example CLI commands that show how to use it with the <a>StartConfigurationSession</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the configuration</a> in the <i>AppConfig User Guide</i>. </p> <important> <p>Note the following important information.</p> <ul> <li> <p>Each configuration token is only valid for one call to <code>GetLatestConfiguration</code>. The <code>GetLatestConfiguration</code> response includes a <code>NextPollConfigurationToken</code> that should always replace the token used for the just-completed call in preparation for the next one. </p> </li> <li> <p> <code>GetLatestConfiguration</code> is a priced call. For more information, see <a href="https://aws.amazon.com/systems-manager/pricing/">Pricing</a>.</p> </li> </ul> </important>
		 * Get configuration#configuration_token
		 * @param {string} configuration_token <p>Token describing the current state of the configuration session. To obtain a token, first call the <a>StartConfigurationSession</a> API. Note that every call to <code>GetLatestConfiguration</code> will return a new <code>ConfigurationToken</code> (<code>NextPollConfigurationToken</code> in the response) and <i>must</i> be provided to subsequent <code>GetLatestConfiguration</code> API calls.</p> <important> <p>This token should only be used once. To support long poll use cases, the token is valid for up to 24 hours. If a <code>GetLatestConfiguration</code> call uses an expired token, the system returns <code>BadRequestException</code>.</p> </important>
		 * @return {GetLatestConfigurationResponse} Success
		 */
		GetLatestConfiguration(configuration_token: string): Observable<GetLatestConfigurationResponse> {
			return this.http.get<GetLatestConfigurationResponse>(this.baseUri + 'configuration#configuration_token?configuration_token=' + (configuration_token == null ? '' : encodeURIComponent(configuration_token)), {});
		}

		/**
		 * Starts a configuration session used to retrieve a deployed configuration. For more information about this API action and to view example CLI commands that show how to use it with the <a>GetLatestConfiguration</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the configuration</a> in the <i>AppConfig User Guide</i>.
		 * Post configurationsessions
		 * @return {void} 
		 */
		StartConfigurationSession(requestBody: StartConfigurationSessionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'configurationsessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface StartConfigurationSessionPostBody {

		/**
		 * The application ID or the application name.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ApplicationIdentifier: string;

		/**
		 * The environment ID or the environment name.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		EnvironmentIdentifier: string;

		/**
		 * The configuration profile ID or the configuration profile name.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConfigurationProfileIdentifier: string;

		/**
		 * Sets a constraint on a session. If you specify a value of, for example, 60 seconds, then the client that established the session can't call <a>GetLatestConfiguration</a> more frequently than every 60 seconds.
		 * Minimum: 15
		 * Maximum: 86400
		 */
		RequiredMinimumPollIntervalInSeconds?: number | null;
	}
	export interface StartConfigurationSessionPostBodyFormProperties {

		/**
		 * The application ID or the application name.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ApplicationIdentifier: FormControl<string | null | undefined>,

		/**
		 * The environment ID or the environment name.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		EnvironmentIdentifier: FormControl<string | null | undefined>,

		/**
		 * The configuration profile ID or the configuration profile name.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConfigurationProfileIdentifier: FormControl<string | null | undefined>,

		/**
		 * Sets a constraint on a session. If you specify a value of, for example, 60 seconds, then the client that established the session can't call <a>GetLatestConfiguration</a> more frequently than every 60 seconds.
		 * Minimum: 15
		 * Maximum: 86400
		 */
		RequiredMinimumPollIntervalInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateStartConfigurationSessionPostBodyFormGroup() {
		return new FormGroup<StartConfigurationSessionPostBodyFormProperties>({
			ApplicationIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			EnvironmentIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			ConfigurationProfileIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			RequiredMinimumPollIntervalInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(15), Validators.max(86400)]),
		});

	}

}

