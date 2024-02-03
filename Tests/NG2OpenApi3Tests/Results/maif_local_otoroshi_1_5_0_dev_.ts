import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services. */
	export interface ApiKey {

		/**
		 * The group/service ids (prefixed by group_ or service_ on which the key is authorized
		 * Required
		 */
		authorizedEntities: Array<string>;

		/**
		 * The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything
		 * Required
		 */
		clientId: string;

		/**
		 * The name of the api key, for humans ;-)
		 * Required
		 */
		clientName: string;

		/**
		 * The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything
		 * Required
		 */
		clientSecret: string;

		/** Authorized number of calls per day */
		dailyQuota?: number | null;

		/**
		 * Whether or not the key is enabled. If disabled, resources won't be available to calls using this key
		 * Required
		 */
		enabled: boolean;

		/** Bunch of metadata for the key */
		metadata?: {[id: string]: string };

		/** Authorized number of calls per month */
		monthlyQuota?: number | null;

		/** Authorized number of calls per second, measured on 10 seconds */
		throttlingQuota?: number | null;
	}

	/** An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services. */
	export interface ApiKeyFormProperties {

		/**
		 * The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/**
		 * The name of the api key, for humans ;-)
		 * Required
		 */
		clientName: FormControl<string | null | undefined>,

		/**
		 * The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything
		 * Required
		 */
		clientSecret: FormControl<string | null | undefined>,

		/** Authorized number of calls per day */
		dailyQuota: FormControl<number | null | undefined>,

		/**
		 * Whether or not the key is enabled. If disabled, resources won't be available to calls using this key
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/** Bunch of metadata for the key */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Authorized number of calls per month */
		monthlyQuota: FormControl<number | null | undefined>,

		/** Authorized number of calls per second, measured on 10 seconds */
		throttlingQuota: FormControl<number | null | undefined>,
	}
	export function CreateApiKeyFormGroup() {
		return new FormGroup<ApiKeyFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dailyQuota: new FormControl<number | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			monthlyQuota: new FormControl<number | null | undefined>(undefined),
			throttlingQuota: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration for Auth0 domain */
	export interface Auth0Config {

		/**
		 * Auth0 callback URL
		 * Required
		 */
		callbackUrl: string;

		/**
		 * Auth0 client id
		 * Required
		 */
		clientId: string;

		/**
		 * Auth0 client secret
		 * Required
		 */
		clientSecret: string;

		/**
		 * Auth0 domain
		 * Required
		 */
		domain: string;
	}

	/** Configuration for Auth0 domain */
	export interface Auth0ConfigFormProperties {

		/**
		 * Auth0 callback URL
		 * Required
		 */
		callbackUrl: FormControl<string | null | undefined>,

		/**
		 * Auth0 client id
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/**
		 * Auth0 client secret
		 * Required
		 */
		clientSecret: FormControl<string | null | undefined>,

		/**
		 * Auth0 domain
		 * Required
		 */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateAuth0ConfigFormGroup() {
		return new FormGroup<Auth0ConfigFormProperties>({
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An HTTP response that is not supposed to be returned by a service */
	export interface BadResponse {

		/**
		 * The body of the HTTP response
		 * Required
		 */
		body: string;

		/**
		 * The HTTP headers of the response
		 * Required
		 */
		headers: {[id: string]: string };

		/**
		 * The HTTP status for the response
		 * Required
		 */
		status: number;
	}

	/** An HTTP response that is not supposed to be returned by a service */
	export interface BadResponseFormProperties {

		/**
		 * The body of the HTTP response
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * The HTTP headers of the response
		 * Required
		 */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The HTTP status for the response
		 * Required
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateBadResponseFormGroup() {
		return new FormGroup<BadResponseFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Config for bad requests injection fault */
	export interface BadResponsesFaultConfig {

		/**
		 * The percentage of requests affected by this fault. Value should be between 0.0 and 1.0
		 * Required
		 */
		ratio: number;

		/**
		 * The possibles responses
		 * Required
		 */
		responses: Array<BadResponse>;
	}

	/** Config for bad requests injection fault */
	export interface BadResponsesFaultConfigFormProperties {

		/**
		 * The percentage of requests affected by this fault. Value should be between 0.0 and 1.0
		 * Required
		 */
		ratio: FormControl<number | null | undefined>,
	}
	export function CreateBadResponsesFaultConfigFormGroup() {
		return new FormGroup<BadResponsesFaultConfigFormProperties>({
			ratio: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration of the canary mode for a service descriptor */
	export interface Canary {

		/**
		 * Use canary mode for this service
		 * Required
		 */
		enabled: boolean;

		/**
		 * Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar
		 * Required
		 */
		root: string;

		/**
		 * The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures
		 * Required
		 */
		targets: Array<Target>;

		/**
		 * Ratio of traffic that will be sent to canary targets.
		 * Required
		 */
		traffic: number;
	}

	/** The configuration of the canary mode for a service descriptor */
	export interface CanaryFormProperties {

		/**
		 * Use canary mode for this service
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar
		 * Required
		 */
		root: FormControl<string | null | undefined>,

		/**
		 * Ratio of traffic that will be sent to canary targets.
		 * Required
		 */
		traffic: FormControl<number | null | undefined>,
	}
	export function CreateCanaryFormGroup() {
		return new FormGroup<CanaryFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			root: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			traffic: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A Target is where an HTTP call will be forwarded in the end from a service domain */
	export interface Target {

		/**
		 * The host on which the HTTP call will be forwarded. Can be a domain name, or an IP address. Can also have a port
		 * Required
		 */
		host: string;

		/**
		 * The protocol used for communication. Can be http or https
		 * Required
		 */
		scheme: string;
	}

	/** A Target is where an HTTP call will be forwarded in the end from a service domain */
	export interface TargetFormProperties {

		/**
		 * The host on which the HTTP call will be forwarded. Can be a domain name, or an IP address. Can also have a port
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/**
		 * The protocol used for communication. Can be http or https
		 * Required
		 */
		scheme: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scheme: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A SSL/TLS X509 certificate */
	export interface Certificate {

		/**
		 * Allow Otoroshi to renew the certificate (if self signed)
		 * Required
		 */
		autoRenew: string;

		/**
		 * Certificate is a CA (read only)
		 * Required
		 */
		ca: string;

		/**
		 * Reference for a CA certificate in otoroshi
		 * Required
		 */
		caRef: string;

		/**
		 * Certificate chain of trust in PEM format
		 * Required
		 */
		chain: string;

		/**
		 * Domain of the certificate (read only)
		 * Required
		 */
		domain: string;

		/**
		 * Start date of validity
		 * Required
		 */
		from: string;

		/**
		 * Id of the certificate
		 * Required
		 */
		id: string;

		/**
		 * PKCS8 private key in PEM format
		 * Required
		 */
		privateKey: string;

		/**
		 * Certificate is self signed  read only)
		 * Required
		 */
		selfSigned: string;

		/**
		 * Subject of the certificate (read only)
		 * Required
		 */
		subject: string;

		/**
		 * End date of validity
		 * Required
		 */
		to: string;

		/**
		 * Certificate is valid (read only)
		 * Required
		 */
		valid: string;
	}

	/** A SSL/TLS X509 certificate */
	export interface CertificateFormProperties {

		/**
		 * Allow Otoroshi to renew the certificate (if self signed)
		 * Required
		 */
		autoRenew: FormControl<string | null | undefined>,

		/**
		 * Certificate is a CA (read only)
		 * Required
		 */
		ca: FormControl<string | null | undefined>,

		/**
		 * Reference for a CA certificate in otoroshi
		 * Required
		 */
		caRef: FormControl<string | null | undefined>,

		/**
		 * Certificate chain of trust in PEM format
		 * Required
		 */
		chain: FormControl<string | null | undefined>,

		/**
		 * Domain of the certificate (read only)
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * Start date of validity
		 * Required
		 */
		from: FormControl<string | null | undefined>,

		/**
		 * Id of the certificate
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * PKCS8 private key in PEM format
		 * Required
		 */
		privateKey: FormControl<string | null | undefined>,

		/**
		 * Certificate is self signed  read only)
		 * Required
		 */
		selfSigned: FormControl<string | null | undefined>,

		/**
		 * Subject of the certificate (read only)
		 * Required
		 */
		subject: FormControl<string | null | undefined>,

		/**
		 * End date of validity
		 * Required
		 */
		to: FormControl<string | null | undefined>,

		/**
		 * Certificate is valid (read only)
		 * Required
		 */
		valid: FormControl<string | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			autoRenew: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ca: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			caRef: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			chain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			privateKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			selfSigned: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration for the faults that can be injected in requests */
	export interface ChaosConfig {

		/** Config for bad requests injection fault */
		badResponsesFaultConfig?: BadResponsesFaultConfig;

		/**
		 * Whether or not this config is enabled
		 * Required
		 */
		enabled: boolean;

		/** Config for large request injection fault */
		largeRequestFaultConfig?: LargeRequestFaultConfig;

		/** Config for large response injection fault */
		largeResponseFaultConfig?: LargeResponseFaultConfig;

		/** Config for large latency injection fault */
		latencyInjectionFaultConfig?: LatencyInjectionFaultConfig;
	}

	/** Configuration for the faults that can be injected in requests */
	export interface ChaosConfigFormProperties {

		/**
		 * Whether or not this config is enabled
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateChaosConfigFormGroup() {
		return new FormGroup<ChaosConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Config for large request injection fault */
	export interface LargeRequestFaultConfig {

		/**
		 * The size added to the request body in bytes. Added payload will be spaces only.
		 * Required
		 */
		additionalRequestSize: number;

		/**
		 * The percentage of requests affected by this fault. Value should be between 0.0 and 1.0
		 * Required
		 */
		ratio: number;
	}

	/** Config for large request injection fault */
	export interface LargeRequestFaultConfigFormProperties {

		/**
		 * The size added to the request body in bytes. Added payload will be spaces only.
		 * Required
		 */
		additionalRequestSize: FormControl<number | null | undefined>,

		/**
		 * The percentage of requests affected by this fault. Value should be between 0.0 and 1.0
		 * Required
		 */
		ratio: FormControl<number | null | undefined>,
	}
	export function CreateLargeRequestFaultConfigFormGroup() {
		return new FormGroup<LargeRequestFaultConfigFormProperties>({
			additionalRequestSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ratio: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Config for large response injection fault */
	export interface LargeResponseFaultConfig {

		/** The size added to the response body in bytes. Added payload will be spaces only. */
		additionalRequestSize?: number | null;

		/**
		 * The percentage of requests affected by this fault. Value should be between 0.0 and 1.0
		 * Required
		 */
		ratio: number;
	}

	/** Config for large response injection fault */
	export interface LargeResponseFaultConfigFormProperties {

		/** The size added to the response body in bytes. Added payload will be spaces only. */
		additionalRequestSize: FormControl<number | null | undefined>,

		/**
		 * The percentage of requests affected by this fault. Value should be between 0.0 and 1.0
		 * Required
		 */
		ratio: FormControl<number | null | undefined>,
	}
	export function CreateLargeResponseFaultConfigFormGroup() {
		return new FormGroup<LargeResponseFaultConfigFormProperties>({
			additionalRequestSize: new FormControl<number | null | undefined>(undefined),
			ratio: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Config for large latency injection fault */
	export interface LatencyInjectionFaultConfig {

		/**
		 * The start range of latency added to the request
		 * Required
		 */
		from: number;

		/**
		 * The percentage of requests affected by this fault. Value should be between 0.0 and 1.0
		 * Required
		 */
		ratio: number;

		/**
		 * The end range of latency added to the request
		 * Required
		 */
		to: number;
	}

	/** Config for large latency injection fault */
	export interface LatencyInjectionFaultConfigFormProperties {

		/**
		 * The start range of latency added to the request
		 * Required
		 */
		from: FormControl<number | null | undefined>,

		/**
		 * The percentage of requests affected by this fault. Value should be between 0.0 and 1.0
		 * Required
		 */
		ratio: FormControl<number | null | undefined>,

		/**
		 * The end range of latency added to the request
		 * Required
		 */
		to: FormControl<number | null | undefined>,
	}
	export function CreateLatencyInjectionFaultConfigFormGroup() {
		return new FormGroup<LatencyInjectionFaultConfigFormProperties>({
			from: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ratio: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration for CleverCloud client */
	export interface CleverSettings {

		/**
		 * CleverCloud consumer key
		 * Required
		 */
		consumerKey: string;

		/**
		 * CleverCloud consumer token
		 * Required
		 */
		consumerSecret: string;

		/**
		 * CleverCloud organization id
		 * Required
		 */
		orgaId: string;

		/**
		 * CleverCloud oauth secret
		 * Required
		 */
		secret: string;

		/**
		 * CleverCloud oauth token
		 * Required
		 */
		token: string;
	}

	/** Configuration for CleverCloud client */
	export interface CleverSettingsFormProperties {

		/**
		 * CleverCloud consumer key
		 * Required
		 */
		consumerKey: FormControl<string | null | undefined>,

		/**
		 * CleverCloud consumer token
		 * Required
		 */
		consumerSecret: FormControl<string | null | undefined>,

		/**
		 * CleverCloud organization id
		 * Required
		 */
		orgaId: FormControl<string | null | undefined>,

		/**
		 * CleverCloud oauth secret
		 * Required
		 */
		secret: FormControl<string | null | undefined>,

		/**
		 * CleverCloud oauth token
		 * Required
		 */
		token: FormControl<string | null | undefined>,
	}
	export function CreateCleverSettingsFormGroup() {
		return new FormGroup<CleverSettingsFormProperties>({
			consumerKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			consumerSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orgaId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration of the circuit breaker for a service descriptor */
	export interface ClientConfig {

		/**
		 * Specify the factor to multiply the delay for each retry
		 * Required
		 */
		backoffFactor: number;

		/**
		 * Specify how long each call should last at most in milliseconds
		 * Required
		 */
		callTimeout: number;

		/**
		 * Specify how long the global call (with retries) should last at most in milliseconds
		 * Required
		 */
		globalTimeout: number;

		/**
		 * Specify how many errors can pass before opening the circuit breaker
		 * Required
		 */
		maxErrors: number;

		/**
		 * Specify how many times the client will try to fetch the result of the request after an error before giving up.
		 * Required
		 */
		retries: number;

		/**
		 * Specify the delay between two retries. Each retry, the delay is multiplied by the backoff factor
		 * Required
		 */
		retryInitialDelay: number;

		/**
		 * Specify the sliding window time for the circuit breaker in milliseconds, after this time, error count will be reseted
		 * Required
		 */
		sampleInterval: number;

		/**
		 * Use a circuit breaker to avoid cascading failure when calling chains of services. Highly recommended !
		 * Required
		 */
		useCircuitBreaker: boolean;
	}

	/** The configuration of the circuit breaker for a service descriptor */
	export interface ClientConfigFormProperties {

		/**
		 * Specify the factor to multiply the delay for each retry
		 * Required
		 */
		backoffFactor: FormControl<number | null | undefined>,

		/**
		 * Specify how long each call should last at most in milliseconds
		 * Required
		 */
		callTimeout: FormControl<number | null | undefined>,

		/**
		 * Specify how long the global call (with retries) should last at most in milliseconds
		 * Required
		 */
		globalTimeout: FormControl<number | null | undefined>,

		/**
		 * Specify how many errors can pass before opening the circuit breaker
		 * Required
		 */
		maxErrors: FormControl<number | null | undefined>,

		/**
		 * Specify how many times the client will try to fetch the result of the request after an error before giving up.
		 * Required
		 */
		retries: FormControl<number | null | undefined>,

		/**
		 * Specify the delay between two retries. Each retry, the delay is multiplied by the backoff factor
		 * Required
		 */
		retryInitialDelay: FormControl<number | null | undefined>,

		/**
		 * Specify the sliding window time for the circuit breaker in milliseconds, after this time, error count will be reseted
		 * Required
		 */
		sampleInterval: FormControl<number | null | undefined>,

		/**
		 * Use a circuit breaker to avoid cascading failure when calling chains of services. Highly recommended !
		 * Required
		 */
		useCircuitBreaker: FormControl<boolean | null | undefined>,
	}
	export function CreateClientConfigFormGroup() {
		return new FormGroup<ClientConfigFormProperties>({
			backoffFactor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			callTimeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			globalTimeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxErrors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			retries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			retryInitialDelay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sampleInterval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			useCircuitBreaker: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConsoleDataExporterConfig {
	}
	export interface ConsoleDataExporterConfigFormProperties {
	}
	export function CreateConsoleDataExporterConfigFormGroup() {
		return new FormGroup<ConsoleDataExporterConfigFormProperties>({
		});

	}


	/** The configuration for cors support */
	export interface CorsSettings {

		/**
		 * Allow to pass credentials
		 * Required
		 */
		allowCredentials: boolean;

		/**
		 * The cors allowed headers
		 * Required
		 */
		allowHeaders: Array<string>;

		/**
		 * The cors allowed methods
		 * Required
		 */
		allowMethods: Array<string>;

		/**
		 * The cors allowed origin
		 * Required
		 */
		allowOrigin: string;

		/**
		 * Whether or not cors is enabled
		 * Required
		 */
		enabled: boolean;

		/**
		 * The cors excluded patterns
		 * Required
		 */
		excludedPatterns: Array<string>;

		/**
		 * The cors exposed header
		 * Required
		 */
		exposeHeaders: Array<string>;

		/**
		 * Cors max age
		 * Required
		 */
		maxAge: number;
	}

	/** The configuration for cors support */
	export interface CorsSettingsFormProperties {

		/**
		 * Allow to pass credentials
		 * Required
		 */
		allowCredentials: FormControl<boolean | null | undefined>,

		/**
		 * The cors allowed origin
		 * Required
		 */
		allowOrigin: FormControl<string | null | undefined>,

		/**
		 * Whether or not cors is enabled
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Cors max age
		 * Required
		 */
		maxAge: FormControl<number | null | undefined>,
	}
	export function CreateCorsSettingsFormGroup() {
		return new FormGroup<CorsSettingsFormProperties>({
			allowCredentials: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowOrigin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			maxAge: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CustomDataExporterConfig {

		/**
		 * Custom data exporter config
		 * Required
		 */
		config: {[id: string]: string };

		/**
		 * Script Ref
		 * Required
		 */
		ref: string;
	}
	export interface CustomDataExporterConfigFormProperties {

		/**
		 * Custom data exporter config
		 * Required
		 */
		config: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Script Ref
		 * Required
		 */
		ref: FormControl<string | null | undefined>,
	}
	export function CreateCustomDataExporterConfigFormGroup() {
		return new FormGroup<CustomDataExporterConfigFormProperties>({
			config: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			ref: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings to export Otorshi events */
	export interface DataExporterConfig {

		/** buffer size */
		bufferSize?: number | null;

		/** Data Exporter config */
		config?: ElasticConfig;

		/** Description */
		desc?: string | null;

		/** Boolean */
		enabled?: string | null;
		filtering?: Filtering;

		/** duration */
		groupDuration?: number | null;

		/** Group size */
		groupSize?: number | null;

		/** Id */
		id?: string | null;

		/** nb workers */
		jsonWorkers?: number | null;
		location?: Location;

		/** Metadata */
		metadata?: {[id: string]: string };

		/** Name */
		name?: string | null;

		/** projection */
		projection?: {[id: string]: string };

		/** send workers */
		sendWorkers?: number | null;

		/** Type of data exporter */
		typ?: DataExporterConfigTyp | null;
	}

	/** Settings to export Otorshi events */
	export interface DataExporterConfigFormProperties {

		/** buffer size */
		bufferSize: FormControl<number | null | undefined>,

		/** Description */
		desc: FormControl<string | null | undefined>,

		/** Boolean */
		enabled: FormControl<string | null | undefined>,

		/** duration */
		groupDuration: FormControl<number | null | undefined>,

		/** Group size */
		groupSize: FormControl<number | null | undefined>,

		/** Id */
		id: FormControl<string | null | undefined>,

		/** nb workers */
		jsonWorkers: FormControl<number | null | undefined>,

		/** Metadata */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Name */
		name: FormControl<string | null | undefined>,

		/** projection */
		projection: FormControl<{[id: string]: string } | null | undefined>,

		/** send workers */
		sendWorkers: FormControl<number | null | undefined>,

		/** Type of data exporter */
		typ: FormControl<DataExporterConfigTyp | null | undefined>,
	}
	export function CreateDataExporterConfigFormGroup() {
		return new FormGroup<DataExporterConfigFormProperties>({
			bufferSize: new FormControl<number | null | undefined>(undefined),
			desc: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<string | null | undefined>(undefined),
			groupDuration: new FormControl<number | null | undefined>(undefined),
			groupSize: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			jsonWorkers: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projection: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			sendWorkers: new FormControl<number | null | undefined>(undefined),
			typ: new FormControl<DataExporterConfigTyp | null | undefined>(undefined),
		});

	}


	/** The configuration for elastic access */
	export interface ElasticConfig {

		/**
		 * URL of the elastic cluster
		 * Required
		 */
		clusterUri: string;

		/**
		 * Additionnal http headers
		 * Required
		 */
		headers: {[id: string]: string };

		/**
		 * Index for events. Default is otoroshi-events
		 * Required
		 */
		index: string;

		/**
		 * Optional password
		 * Required
		 */
		password: string;

		/**
		 * Type of events. Default is event
		 * Required
		 */
		type: string;

		/**
		 * Optional user
		 * Required
		 */
		user: string;
	}

	/** The configuration for elastic access */
	export interface ElasticConfigFormProperties {

		/**
		 * URL of the elastic cluster
		 * Required
		 */
		clusterUri: FormControl<string | null | undefined>,

		/**
		 * Additionnal http headers
		 * Required
		 */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Index for events. Default is otoroshi-events
		 * Required
		 */
		index: FormControl<string | null | undefined>,

		/**
		 * Optional password
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * Type of events. Default is event
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * Optional user
		 * Required
		 */
		user: FormControl<string | null | undefined>,
	}
	export function CreateElasticConfigFormGroup() {
		return new FormGroup<ElasticConfigFormProperties>({
			clusterUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			index: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Filtering {

		/** Excluding pattern */
		exclude?: Array<string>;

		/** Including pattern */
		include?: Array<string>;
	}
	export interface FilteringFormProperties {
	}
	export function CreateFilteringFormGroup() {
		return new FormGroup<FilteringFormProperties>({
		});

	}

	export interface Location {

		/**
		 * Team ids
		 * Required
		 */
		teams: Array<string>;

		/**
		 * Tenant id
		 * Required
		 */
		tenant: string;
	}
	export interface LocationFormProperties {

		/**
		 * Tenant id
		 * Required
		 */
		tenant: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			tenant: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataExporterConfigTyp { kafka = 'kafka', pulsar = 'pulsar', file = 'file', mailer = 'mailer', elastic = 'elastic', console = 'console', custom = 'custom' }

	export interface Deleted {

		/** Required */
		deleted: boolean;
	}
	export interface DeletedFormProperties {

		/** Required */
		deleted: FormControl<boolean | null | undefined>,
	}
	export function CreateDeletedFormGroup() {
		return new FormGroup<DeletedFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Done {

		/** Required */
		done: boolean;
	}
	export interface DoneFormProperties {

		/** Required */
		done: FormControl<boolean | null | undefined>,
	}
	export function CreateDoneFormGroup() {
		return new FormGroup<DoneFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings for an EC + SHA signing algorithm */
	export interface ESAlgoSettings {

		/** The private key for the RSA function */
		privateKey?: string | null;

		/**
		 * The public key for the RSA function
		 * Required
		 */
		publicKey: string;

		/**
		 * Size for SHA function. can be 256, 384 or 512
		 * Required
		 */
		size: number;

		/**
		 * String with value ESAlgoSettings
		 * Required
		 */
		type: string;
	}

	/** Settings for an EC + SHA signing algorithm */
	export interface ESAlgoSettingsFormProperties {

		/** The private key for the RSA function */
		privateKey: FormControl<string | null | undefined>,

		/**
		 * The public key for the RSA function
		 * Required
		 */
		publicKey: FormControl<string | null | undefined>,

		/**
		 * Size for SHA function. can be 256, 384 or 512
		 * Required
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * String with value ESAlgoSettings
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateESAlgoSettingsFormGroup() {
		return new FormGroup<ESAlgoSettingsFormProperties>({
			privateKey: new FormControl<string | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Error templates for a service descriptor */
	export interface ErrorTemplate {

		/**
		 * Map for custom messages
		 * Required
		 */
		messages: {[id: string]: string };

		/**
		 * The Id of the service for which the error template is enabled
		 * Required
		 */
		serviceId: string;

		/**
		 * The html template for 40x errors
		 * Required
		 */
		template40x: string;

		/**
		 * The html template for 50x errors
		 * Required
		 */
		template50x: string;

		/**
		 * The html template for build page
		 * Required
		 */
		templateBuild: string;

		/**
		 * The html template for maintenance page
		 * Required
		 */
		templateMaintenance: string;
	}

	/** Error templates for a service descriptor */
	export interface ErrorTemplateFormProperties {

		/**
		 * Map for custom messages
		 * Required
		 */
		messages: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The Id of the service for which the error template is enabled
		 * Required
		 */
		serviceId: FormControl<string | null | undefined>,

		/**
		 * The html template for 40x errors
		 * Required
		 */
		template40x: FormControl<string | null | undefined>,

		/**
		 * The html template for 50x errors
		 * Required
		 */
		template50x: FormControl<string | null | undefined>,

		/**
		 * The html template for build page
		 * Required
		 */
		templateBuild: FormControl<string | null | undefined>,

		/**
		 * The html template for maintenance page
		 * Required
		 */
		templateMaintenance: FormControl<string | null | undefined>,
	}
	export function CreateErrorTemplateFormGroup() {
		return new FormGroup<ErrorTemplateFormProperties>({
			messages: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			serviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template40x: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template50x: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateBuild: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMaintenance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Open API configuration for your service (if one) */
	export interface ExposedApi {

		/**
		 * Whether or not the current service expose an API with an Open API descriptor
		 * Required
		 */
		exposeApi: boolean;

		/** The URL of the Open API descriptor */
		openApiDescriptorUrl?: string | null;
	}

	/** The Open API configuration for your service (if one) */
	export interface ExposedApiFormProperties {

		/**
		 * Whether or not the current service expose an API with an Open API descriptor
		 * Required
		 */
		exposeApi: FormControl<boolean | null | undefined>,

		/** The URL of the Open API descriptor */
		openApiDescriptorUrl: FormControl<string | null | undefined>,
	}
	export function CreateExposedApiFormGroup() {
		return new FormGroup<ExposedApiFormProperties>({
			exposeApi: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			openApiDescriptorUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileDataExporterConfig {

		/**
		 * Path to file
		 * Required
		 */
		path: string;
	}
	export interface FileDataExporterConfigFormProperties {

		/**
		 * Path to file
		 * Required
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateFileDataExporterConfigFormGroup() {
		return new FormGroup<FileDataExporterConfigFormProperties>({
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings to authenticate users using a generic OAuth2 provider */
	export interface GenericOauth2ModuleConfig {

		/**
		 * Field name to get access token
		 * Required
		 */
		accessTokenField: string;

		/**
		 * OAuth authorize URL
		 * Required
		 */
		authorizeUrl: string;

		/**
		 * Otoroshi callback URL
		 * Required
		 */
		callbackUrl: string;

		/** The claims of the token */
		claims?: string | null;

		/**
		 * OAuth Client id
		 * Required
		 */
		clientId: string;

		/**
		 * OAuth Client secret
		 * Required
		 */
		clientSecret: string;

		/**
		 * Description of the config
		 * Required
		 */
		desc: string;

		/**
		 * Field name to get email from user profile
		 * Required
		 */
		emailField: string;

		/**
		 * Unique id of the config
		 * Required
		 */
		id: string;

		/** Algo. settings to verify JWT token */
		jwtVerifier?: HSAlgoSettings;

		/**
		 * OAuth login URL
		 * Required
		 */
		loginUrl: string;

		/**
		 * OAuth logout URL
		 * Required
		 */
		logoutUrl: string;

		/**
		 * Name of the config
		 * Required
		 */
		name: string;

		/**
		 * Field name to get name from user profile
		 * Required
		 */
		nameField: string;

		/** URL of the OIDC config. file */
		oidConfig?: string | null;

		/**
		 * Field name to get otoroshi metadata from. You can specify sub fields using | as separator
		 * Required
		 */
		otoroshiDataField: string;

		/** The user profile will be read from the JWT token in id_token */
		readProfileFromToken?: boolean | null;

		/** The scope of the token */
		scope?: string | null;

		/**
		 * Max age of the session
		 * Required
		 */
		sessionMaxAge: number;

		/**
		 * OAuth token URL
		 * Required
		 */
		tokenUrl: string;

		/**
		 * Type of settings. value is oauth2
		 * Required
		 */
		type: string;

		/** Use for redirection to actual service */
		useCookies?: boolean | null;

		/** Use JSON or URL Form Encoded as payload with the OAuth provider */
		useJson?: boolean | null;

		/**
		 * OAuth userinfo to get user profile
		 * Required
		 */
		userInfoUrl: string;
	}

	/** Settings to authenticate users using a generic OAuth2 provider */
	export interface GenericOauth2ModuleConfigFormProperties {

		/**
		 * Field name to get access token
		 * Required
		 */
		accessTokenField: FormControl<string | null | undefined>,

		/**
		 * OAuth authorize URL
		 * Required
		 */
		authorizeUrl: FormControl<string | null | undefined>,

		/**
		 * Otoroshi callback URL
		 * Required
		 */
		callbackUrl: FormControl<string | null | undefined>,

		/** The claims of the token */
		claims: FormControl<string | null | undefined>,

		/**
		 * OAuth Client id
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/**
		 * OAuth Client secret
		 * Required
		 */
		clientSecret: FormControl<string | null | undefined>,

		/**
		 * Description of the config
		 * Required
		 */
		desc: FormControl<string | null | undefined>,

		/**
		 * Field name to get email from user profile
		 * Required
		 */
		emailField: FormControl<string | null | undefined>,

		/**
		 * Unique id of the config
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * OAuth login URL
		 * Required
		 */
		loginUrl: FormControl<string | null | undefined>,

		/**
		 * OAuth logout URL
		 * Required
		 */
		logoutUrl: FormControl<string | null | undefined>,

		/**
		 * Name of the config
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Field name to get name from user profile
		 * Required
		 */
		nameField: FormControl<string | null | undefined>,

		/** URL of the OIDC config. file */
		oidConfig: FormControl<string | null | undefined>,

		/**
		 * Field name to get otoroshi metadata from. You can specify sub fields using | as separator
		 * Required
		 */
		otoroshiDataField: FormControl<string | null | undefined>,

		/** The user profile will be read from the JWT token in id_token */
		readProfileFromToken: FormControl<boolean | null | undefined>,

		/** The scope of the token */
		scope: FormControl<string | null | undefined>,

		/**
		 * Max age of the session
		 * Required
		 */
		sessionMaxAge: FormControl<number | null | undefined>,

		/**
		 * OAuth token URL
		 * Required
		 */
		tokenUrl: FormControl<string | null | undefined>,

		/**
		 * Type of settings. value is oauth2
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/** Use for redirection to actual service */
		useCookies: FormControl<boolean | null | undefined>,

		/** Use JSON or URL Form Encoded as payload with the OAuth provider */
		useJson: FormControl<boolean | null | undefined>,

		/**
		 * OAuth userinfo to get user profile
		 * Required
		 */
		userInfoUrl: FormControl<string | null | undefined>,
	}
	export function CreateGenericOauth2ModuleConfigFormGroup() {
		return new FormGroup<GenericOauth2ModuleConfigFormProperties>({
			accessTokenField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authorizeUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			claims: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			desc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			emailField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			loginUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logoutUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			oidConfig: new FormControl<string | null | undefined>(undefined),
			otoroshiDataField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			readProfileFromToken: new FormControl<boolean | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			sessionMaxAge: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			tokenUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useCookies: new FormControl<boolean | null | undefined>(undefined),
			useJson: new FormControl<boolean | null | undefined>(undefined),
			userInfoUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings for an HMAC + SHA signing algorithm */
	export interface HSAlgoSettings {

		/**
		 * The secret value for the HMAC function
		 * Required
		 */
		secret: string;

		/**
		 * Size for SHA function. can be 256, 384 or 512
		 * Required
		 */
		size: number;

		/**
		 * String with value HSAlgoSettings
		 * Required
		 */
		type: string;
	}

	/** Settings for an HMAC + SHA signing algorithm */
	export interface HSAlgoSettingsFormProperties {

		/**
		 * The secret value for the HMAC function
		 * Required
		 */
		secret: FormControl<string | null | undefined>,

		/**
		 * Size for SHA function. can be 256, 384 or 512
		 * Required
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * String with value HSAlgoSettings
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHSAlgoSettingsFormGroup() {
		return new FormGroup<HSAlgoSettingsFormProperties>({
			secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The global config object of Otoroshi, used to customize settings of the current Otoroshi instance */
	export interface GlobalConfig {

		/**
		 * Email addresses that will receive all Otoroshi alert events
		 * Required
		 */
		alertsEmails: Array<string>;

		/**
		 * Webhook that will receive all Otoroshi alert events
		 * Required
		 */
		alertsWebhooks: Array<Webhook>;

		/**
		 * Webhook that will receive all internal Otoroshi events
		 * Required
		 */
		analyticsWebhooks: Array<Webhook>;

		/**
		 * If enabled, Admin API won't be able to write/update/delete entities
		 * Required
		 */
		apiReadOnly: boolean;

		/**
		 * If not defined, every new service descriptor will be added to the default group
		 * Required
		 */
		autoLinkToDefaultGroup: boolean;

		/** Configuration for Auth0 domain */
		backofficeAuth0Config?: Auth0Config;

		/** Configuration for CleverCloud client */
		cleverSettings?: CleverSettings;

		/** The configuration for elastic access */
		elasticReadsConfig?: ElasticConfig;

		/** Configs. for Elastic writes */
		elasticWritesConfigs?: Array<ElasticConfig>;

		/**
		 * IP addresses for which any request to Otoroshi will respond with 128 Gb of zeros
		 * Required
		 */
		endlessIpAddresses: Array<string>;

		/**
		 * The filtering configuration block for a service of globally.
		 * Required
		 */
		ipFiltering: IpFiltering;

		/**
		 * If enabled, Otoroshi will reject new request if too much at the same time
		 * Required
		 */
		limitConcurrentRequests: boolean;

		/** Possibles lines for Otoroshi */
		lines?: Array<string>;

		/** Configuration for mailgun api client */
		mailerSettings?: MailerSettings;

		/**
		 * The number of authorized request processed at the same time
		 * Required
		 */
		maxConcurrentRequests: number;

		/** The max size in bytes of an HTTP 1.0 response */
		maxHttp10ResponseSize?: number | null;

		/** Number of events kept locally */
		maxLogsSize?: number | null;

		/** Use middle finger emoji as a response character for endless HTTP responses */
		middleFingers?: boolean | null;

		/**
		 * Authorized number of calls per second globally per IP address, measured on 10 seconds
		 * Required
		 */
		perIpThrottlingQuota: number;

		/** Configuration for Auth0 domain */
		privateAppsAuth0Config?: Auth0Config;

		/**
		 * HTTP will be streamed only. Doesn't work with old browsers
		 * Required
		 */
		streamEntityOnly: boolean;

		/**
		 * Authorized number of calls per second globally, measured on 10 seconds
		 * Required
		 */
		throttlingQuota: number;

		/**
		 * If enabled, login to backoffice through Auth0 will be disabled
		 * Required
		 */
		u2fLoginOnly: boolean;

		/**
		 * If enabled, services will be authorized to use circuit breakers
		 * Required
		 */
		useCircuitBreakers: boolean;
	}

	/** The global config object of Otoroshi, used to customize settings of the current Otoroshi instance */
	export interface GlobalConfigFormProperties {

		/**
		 * If enabled, Admin API won't be able to write/update/delete entities
		 * Required
		 */
		apiReadOnly: FormControl<boolean | null | undefined>,

		/**
		 * If not defined, every new service descriptor will be added to the default group
		 * Required
		 */
		autoLinkToDefaultGroup: FormControl<boolean | null | undefined>,

		/**
		 * If enabled, Otoroshi will reject new request if too much at the same time
		 * Required
		 */
		limitConcurrentRequests: FormControl<boolean | null | undefined>,

		/**
		 * The number of authorized request processed at the same time
		 * Required
		 */
		maxConcurrentRequests: FormControl<number | null | undefined>,

		/** The max size in bytes of an HTTP 1.0 response */
		maxHttp10ResponseSize: FormControl<number | null | undefined>,

		/** Number of events kept locally */
		maxLogsSize: FormControl<number | null | undefined>,

		/** Use middle finger emoji as a response character for endless HTTP responses */
		middleFingers: FormControl<boolean | null | undefined>,

		/**
		 * Authorized number of calls per second globally per IP address, measured on 10 seconds
		 * Required
		 */
		perIpThrottlingQuota: FormControl<number | null | undefined>,

		/**
		 * HTTP will be streamed only. Doesn't work with old browsers
		 * Required
		 */
		streamEntityOnly: FormControl<boolean | null | undefined>,

		/**
		 * Authorized number of calls per second globally, measured on 10 seconds
		 * Required
		 */
		throttlingQuota: FormControl<number | null | undefined>,

		/**
		 * If enabled, login to backoffice through Auth0 will be disabled
		 * Required
		 */
		u2fLoginOnly: FormControl<boolean | null | undefined>,

		/**
		 * If enabled, services will be authorized to use circuit breakers
		 * Required
		 */
		useCircuitBreakers: FormControl<boolean | null | undefined>,
	}
	export function CreateGlobalConfigFormGroup() {
		return new FormGroup<GlobalConfigFormProperties>({
			apiReadOnly: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			autoLinkToDefaultGroup: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			limitConcurrentRequests: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			maxConcurrentRequests: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxHttp10ResponseSize: new FormControl<number | null | undefined>(undefined),
			maxLogsSize: new FormControl<number | null | undefined>(undefined),
			middleFingers: new FormControl<boolean | null | undefined>(undefined),
			perIpThrottlingQuota: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			streamEntityOnly: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			throttlingQuota: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			u2fLoginOnly: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			useCircuitBreakers: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A callback URL where events are posted */
	export interface Webhook {

		/**
		 * Headers to authorize the call or whatever
		 * Required
		 */
		headers: {[id: string]: string };

		/**
		 * The URL where events are posted
		 * Required
		 */
		url: string;
	}

	/** A callback URL where events are posted */
	export interface WebhookFormProperties {

		/**
		 * Headers to authorize the call or whatever
		 * Required
		 */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The URL where events are posted
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The filtering configuration block for a service of globally. */
	export interface IpFiltering {

		/**
		 * Blacklisted IP addresses
		 * Required
		 */
		blacklist: Array<string>;

		/**
		 * Whitelisted IP addresses
		 * Required
		 */
		whitelist: Array<string>;
	}

	/** The filtering configuration block for a service of globally. */
	export interface IpFilteringFormProperties {
	}
	export function CreateIpFilteringFormGroup() {
		return new FormGroup<IpFilteringFormProperties>({
		});

	}


	/** Configuration for mailgun api client */
	export interface MailerSettings {

		/**
		 * Mailgun mailer api key
		 * Required
		 */
		apiKey: string;

		/** Mailjet mailer private api key */
		apiKeyPrivate?: string | null;

		/** Mailjet mailer public api key */
		apiKeyPublic?: string | null;

		/**
		 * Mailgun mailer domain
		 * Required
		 */
		domain: string;

		/** Mailgun mailer, use EU tenant api */
		eu?: boolean | null;

		/** Generic mailer headers */
		header?: {[id: string]: string };

		/** Type of the mailer: console, generic, mailgun, mailjet */
		type?: string | null;

		/** Generic mailer url */
		url?: string | null;
	}

	/** Configuration for mailgun api client */
	export interface MailerSettingsFormProperties {

		/**
		 * Mailgun mailer api key
		 * Required
		 */
		apiKey: FormControl<string | null | undefined>,

		/** Mailjet mailer private api key */
		apiKeyPrivate: FormControl<string | null | undefined>,

		/** Mailjet mailer public api key */
		apiKeyPublic: FormControl<string | null | undefined>,

		/**
		 * Mailgun mailer domain
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/** Mailgun mailer, use EU tenant api */
		eu: FormControl<boolean | null | undefined>,

		/** Generic mailer headers */
		header: FormControl<{[id: string]: string } | null | undefined>,

		/** Type of the mailer: console, generic, mailgun, mailjet */
		type: FormControl<string | null | undefined>,

		/** Generic mailer url */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMailerSettingsFormGroup() {
		return new FormGroup<MailerSettingsFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			apiKeyPrivate: new FormControl<string | null | undefined>(undefined),
			apiKeyPublic: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eu: new FormControl<boolean | null | undefined>(undefined),
			header: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JWT verifier used by multiple service descriptor */
	export interface GlobalJwtVerifier {

		/** Required */
		algoSettings: HSAlgoSettings;

		/**
		 * Verifier description
		 * Required
		 */
		desc: string;

		/**
		 * Is it enabled
		 * Required
		 */
		enabled: boolean;

		/**
		 * Verifier id
		 * Required
		 */
		id: string;

		/**
		 * Verifier name
		 * Required
		 */
		name: string;

		/** Required */
		source: InQueryParam;

		/** Required */
		strategy: PassThrough;

		/**
		 * Does it fail if JWT not found
		 * Required
		 */
		strict: boolean;
	}

	/** A JWT verifier used by multiple service descriptor */
	export interface GlobalJwtVerifierFormProperties {

		/**
		 * Verifier description
		 * Required
		 */
		desc: FormControl<string | null | undefined>,

		/**
		 * Is it enabled
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Verifier id
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Verifier name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Does it fail if JWT not found
		 * Required
		 */
		strict: FormControl<boolean | null | undefined>,
	}
	export function CreateGlobalJwtVerifierFormGroup() {
		return new FormGroup<GlobalJwtVerifierFormProperties>({
			desc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			strict: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** JWT location in a query param */
	export interface InQueryParam {

		/**
		 * Name of the query param
		 * Required
		 */
		name: string;

		/**
		 * String with value InQueryParam
		 * Required
		 */
		type: string;
	}

	/** JWT location in a query param */
	export interface InQueryParamFormProperties {

		/**
		 * Name of the query param
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * String with value InQueryParam
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateInQueryParamFormGroup() {
		return new FormGroup<InQueryParamFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Strategy where only signature and field values are verified */
	export interface PassThrough {

		/**
		 * String with value PassThrough
		 * Required
		 */
		type: string;

		/**
		 * Settings to verify the value of JWT token fields
		 * Required
		 */
		verificationSettings: VerificationSettings;
	}

	/** Strategy where only signature and field values are verified */
	export interface PassThroughFormProperties {

		/**
		 * String with value PassThrough
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePassThroughFormGroup() {
		return new FormGroup<PassThroughFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings to verify the value of JWT token fields */
	export interface VerificationSettings {

		/**
		 * Fields to verify with their values
		 * Required
		 */
		fields: {[id: string]: string };

		/** Settings to change fields of a JWT token */
		mappingSettings?: MappingSettings;
	}

	/** Settings to verify the value of JWT token fields */
	export interface VerificationSettingsFormProperties {

		/**
		 * Fields to verify with their values
		 * Required
		 */
		fields: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateVerificationSettingsFormGroup() {
		return new FormGroup<VerificationSettingsFormProperties>({
			fields: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings to change fields of a JWT token */
	export interface MappingSettings {

		/**
		 * Fields to rename
		 * Required
		 */
		map: {[id: string]: string };

		/**
		 * Fields to remove
		 * Required
		 */
		remove: Array<string>;

		/**
		 * Fields to set
		 * Required
		 */
		values: {[id: string]: string };
	}

	/** Settings to change fields of a JWT token */
	export interface MappingSettingsFormProperties {

		/**
		 * Fields to rename
		 * Required
		 */
		map: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Fields to set
		 * Required
		 */
		values: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateMappingSettingsFormGroup() {
		return new FormGroup<MappingSettingsFormProperties>({
			map: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			values: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group */
	export interface Group {

		/** The descriptoin of the group */
		description?: string | null;

		/**
		 * The unique id of the group. Usually 64 random alpha numerical characters, but can be anything
		 * Required
		 */
		id: string;

		/**
		 * The name of the group
		 * Required
		 */
		name: string;
	}

	/** An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group */
	export interface GroupFormProperties {

		/** The descriptoin of the group */
		description: FormControl<string | null | undefined>,

		/**
		 * The unique id of the group. Usually 64 random alpha numerical characters, but can be anything
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the group
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration for gzip of service responses */
	export interface Gzip {

		/**
		 * Blacklisted mime types. Wildcard supported
		 * Required
		 */
		blackList: Array<string>;

		/**
		 * Size of the GZip buffer
		 * Required
		 */
		bufferSize: number;

		/**
		 * Threshold for chunking data
		 * Required
		 */
		chunkedThreshold: number;

		/**
		 * Compression level. From 0 to 9
		 * Required
		 */
		compressionLevel: number;

		/**
		 * Whether gzip compression is enabled or not
		 * Required
		 */
		enabled: boolean;

		/**
		 * Patterns that are excluded from gzipping
		 * Required
		 */
		excludedPatterns: Array<string>;

		/**
		 * Whitelisted mime types. Wildcard supported
		 * Required
		 */
		whiteList: Array<string>;
	}

	/** Configuration for gzip of service responses */
	export interface GzipFormProperties {

		/**
		 * Size of the GZip buffer
		 * Required
		 */
		bufferSize: FormControl<number | null | undefined>,

		/**
		 * Threshold for chunking data
		 * Required
		 */
		chunkedThreshold: FormControl<number | null | undefined>,

		/**
		 * Compression level. From 0 to 9
		 * Required
		 */
		compressionLevel: FormControl<number | null | undefined>,

		/**
		 * Whether gzip compression is enabled or not
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGzipFormGroup() {
		return new FormGroup<GzipFormProperties>({
			bufferSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			chunkedThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			compressionLevel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive */
	export interface HealthCheck {

		/**
		 * Whether or not healthcheck is enabled on the current service descriptor
		 * Required
		 */
		enabled: boolean;

		/** The URL to check */
		url?: string | null;
	}

	/** The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive */
	export interface HealthCheckFormProperties {

		/**
		 * Whether or not healthcheck is enabled on the current service descriptor
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/** The URL to check */
		url: FormControl<string | null | undefined>,
	}
	export function CreateHealthCheckFormGroup() {
		return new FormGroup<HealthCheckFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure that can be imported to or exported from Otoroshi. It represent the memory state of Otoroshi */
	export interface ImportExport {

		/**
		 * Current U2F admin at the time of export
		 * Required
		 */
		ImportExportAdmins: Array<ImportExportAdmins>;

		/**
		 * Current apik keys at the time of export
		 * Required
		 */
		ImportExportApiKeys: Array<ImportExportApiKeys>;

		/** Current env variables at the time of export */
		appConfig?: {[id: string]: string };

		/**
		 * The global config object of Otoroshi, used to customize settings of the current Otoroshi instance
		 * Required
		 */
		config: GlobalConfig;

		/** Required */
		date: Date;

		/** Required */
		dateRaw: number;

		/**
		 * Current error templates at the time of export
		 * Required
		 */
		ImportExportErrorTemplates: Array<ImportExportErrorTemplates>;

		/** Required */
		label: string;

		/**
		 * Current service descriptors at the time of export
		 * Required
		 */
		ImportExportServiceDescriptors: Array<ImportExportServiceDescriptors>;

		/**
		 * Current service groups at the time of export
		 * Required
		 */
		ImportExportServiceGroups: Array<ImportExportServiceGroups>;

		/**
		 * Current simple admins at the time of export
		 * Required
		 */
		ImportExportSimpleAdmins: Array<ImportExportSimpleAdmins>;

		/**
		 * Global stats for the current Otoroshi instances
		 * Required
		 */
		stats: ImportExportStats;
	}

	/** The structure that can be imported to or exported from Otoroshi. It represent the memory state of Otoroshi */
	export interface ImportExportFormProperties {

		/** Current env variables at the time of export */
		appConfig: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		date: FormControl<Date | null | undefined>,

		/** Required */
		dateRaw: FormControl<number | null | undefined>,

		/** Required */
		label: FormControl<string | null | undefined>,
	}
	export function CreateImportExportFormGroup() {
		return new FormGroup<ImportExportFormProperties>({
			appConfig: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			dateRaw: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportExportAdmins {

		/**
		 * The creation date of the user
		 * Required
		 */
		createdAt: number;

		/**
		 * The label for the user
		 * Required
		 */
		label: string;

		/**
		 * The hashed password of the user
		 * Required
		 */
		password: string;

		/**
		 * The U2F registration slug
		 * Required
		 */
		registration: {[id: string]: string };

		/**
		 * The email address of the user
		 * Required
		 */
		username: string;
	}
	export interface ImportExportAdminsFormProperties {

		/**
		 * The creation date of the user
		 * Required
		 */
		createdAt: FormControl<number | null | undefined>,

		/**
		 * The label for the user
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The hashed password of the user
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * The U2F registration slug
		 * Required
		 */
		registration: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The email address of the user
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateImportExportAdminsFormGroup() {
		return new FormGroup<ImportExportAdminsFormProperties>({
			createdAt: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registration: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportExportApiKeys {

		/**
		 * The group/service ids (prefixed by group_ or service_ on which the key is authorized
		 * Required
		 */
		authorizedEntities: Array<string>;

		/**
		 * The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything
		 * Required
		 */
		clientId: string;

		/**
		 * The name of the api key, for humans ;-)
		 * Required
		 */
		clientName: string;

		/**
		 * The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything
		 * Required
		 */
		clientSecret: string;

		/** Authorized number of calls per day */
		dailyQuota?: number | null;

		/**
		 * Whether or not the key is enabled. If disabled, resources won't be available to calls using this key
		 * Required
		 */
		enabled: boolean;

		/** Bunch of metadata for the key */
		metadata?: {[id: string]: string };

		/** Authorized number of calls per month */
		monthlyQuota?: number | null;

		/** Authorized number of calls per second, measured on 10 seconds */
		throttlingQuota?: number | null;
	}
	export interface ImportExportApiKeysFormProperties {

		/**
		 * The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/**
		 * The name of the api key, for humans ;-)
		 * Required
		 */
		clientName: FormControl<string | null | undefined>,

		/**
		 * The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything
		 * Required
		 */
		clientSecret: FormControl<string | null | undefined>,

		/** Authorized number of calls per day */
		dailyQuota: FormControl<number | null | undefined>,

		/**
		 * Whether or not the key is enabled. If disabled, resources won't be available to calls using this key
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/** Bunch of metadata for the key */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Authorized number of calls per month */
		monthlyQuota: FormControl<number | null | undefined>,

		/** Authorized number of calls per second, measured on 10 seconds */
		throttlingQuota: FormControl<number | null | undefined>,
	}
	export function CreateImportExportApiKeysFormGroup() {
		return new FormGroup<ImportExportApiKeysFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dailyQuota: new FormControl<number | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			monthlyQuota: new FormControl<number | null | undefined>(undefined),
			throttlingQuota: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ImportExportErrorTemplates {

		/**
		 * Map for custom messages
		 * Required
		 */
		messages: {[id: string]: string };

		/**
		 * The Id of the service for which the error template is enabled
		 * Required
		 */
		serviceId: string;

		/**
		 * The html template for 40x errors
		 * Required
		 */
		template40x: string;

		/**
		 * The html template for 50x errors
		 * Required
		 */
		template50x: string;

		/**
		 * The html template for build page
		 * Required
		 */
		templateBuild: string;

		/**
		 * The html template for maintenance page
		 * Required
		 */
		templateMaintenance: string;
	}
	export interface ImportExportErrorTemplatesFormProperties {

		/**
		 * Map for custom messages
		 * Required
		 */
		messages: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The Id of the service for which the error template is enabled
		 * Required
		 */
		serviceId: FormControl<string | null | undefined>,

		/**
		 * The html template for 40x errors
		 * Required
		 */
		template40x: FormControl<string | null | undefined>,

		/**
		 * The html template for 50x errors
		 * Required
		 */
		template50x: FormControl<string | null | undefined>,

		/**
		 * The html template for build page
		 * Required
		 */
		templateBuild: FormControl<string | null | undefined>,

		/**
		 * The html template for maintenance page
		 * Required
		 */
		templateMaintenance: FormControl<string | null | undefined>,
	}
	export function CreateImportExportErrorTemplatesFormGroup() {
		return new FormGroup<ImportExportErrorTemplatesFormProperties>({
			messages: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			serviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template40x: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template50x: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateBuild: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMaintenance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportExportServiceDescriptors {

		/** The configuration of the canary mode for a service descriptor */
		Canary?: Canary;

		/** Specify headers that will be added to each client request. Useful to add authentication */
		additionalHeaders?: {[id: string]: string };

		/** The Open API configuration for your service (if one) */
		api?: ExposedApi;

		/** A reference to a global auth module config */
		authConfigRef?: string | null;

		/**
		 * Display a construction page when a user try to use the service
		 * Required
		 */
		buildMode: boolean;

		/** Configuration for the faults that can be injected in requests */
		chaosConfig?: ChaosConfig;

		/** The configuration of the circuit breaker for a service descriptor */
		clientConfig?: ClientConfig;

		/** A reference to validation authority */
		clientValidatorRef?: string | null;

		/** The configuration for cors support */
		cors?: CorsSettings;

		/**
		 * The domain on which the service is available.
		 * Required
		 */
		domain: string;

		/**
		 * Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist
		 * Required
		 */
		enabled: boolean;

		/**
		 * When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside
		 * Required
		 */
		enforceSecureCommunication: boolean;

		/**
		 * The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is 'foo' and line is 'preprod', then the exposed service will be available at 'foo.preprod.mydomain'
		 * Required
		 */
		env: string;

		/**
		 * Will force redirection to https:// if not present
		 * Required
		 */
		forceHttps: boolean;

		/**
		 * Each service descriptor is attached to groups. A group can have one or more services. Each API key is linked to a group and allow access to every service in the group
		 * Required
		 */
		groups: Array<string>;

		/** Configuration for gzip of service responses */
		gzip?: Gzip;

		/** Specify headers that will be verified after routing. */
		headersVerification?: {[id: string]: string };

		/** The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive */
		healthCheck?: HealthCheck;

		/**
		 * A unique random string to identify your service
		 * Required
		 */
		id: string;

		/** The filtering configuration block for a service of globally. */
		ipFiltering?: IpFiltering;
		jwtVerifier?: LocalJwtVerifier;

		/** The host used localy, mainly localhost:xxxx */
		localHost?: string | null;

		/** The scheme used localy, mainly http */
		localScheme?: string | null;

		/**
		 * Display a maintainance page when a user try to use the service
		 * Required
		 */
		maintenanceMode: boolean;

		/** Specify headers that MUST be present on client request to route it. Useful to implement versioning */
		matchingHeaders?: {[id: string]: string };

		/** The root path on which the service is available */
		matchingRoot?: string | null;

		/** Just a bunch of random properties */
		metadata?: {[id: string]: string };

		/**
		 * The name of your service. Only for debug and human readability purposes
		 * Required
		 */
		name: string;

		/** Host header will be overriden with Host of the target */
		overrideHost?: boolean | null;

		/**
		 * When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain
		 * Required
		 */
		privateApp: boolean;

		/** If you define a public pattern that is a little bit too much, you can make some of public URL private again */
		privatePatterns?: Array<string>;

		/** By default, every services are private only and you'll need an API key to access it. However, if you want to expose a public UI, you can define one or more public patterns (regex) to allow access to anybody. For example if you want to allow anybody on any URL, just use '/.*' */
		publicPatterns?: Array<string>;

		/** If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests */
		redirectToLocal?: boolean | null;

		/** The configuration for redirection per service */
		redirection?: RedirectionSettings;

		/**
		 * Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar
		 * Required
		 */
		root: string;

		/** URI patterns excluded from secured communications */
		secComExcludedPatterns?: Array<string>;
		secComSettings?: HSAlgoSettings;

		/** When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ... */
		sendOtoroshiHeadersBack?: boolean | null;

		/** The configuration for statsd metrics push */
		statsdConfig?: StatsdConfig;

		/**
		 * The subdomain on which the service is available
		 * Required
		 */
		subdomain: string;

		/**
		 * The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures
		 * Required
		 */
		targets: Array<Target>;

		/** A reference to a request transformer */
		transformerRef?: string | null;

		/** The fact that this service will be seen by users and cannot be impacted by the Snow Monkey */
		userFacing?: boolean | null;

		/** Send X-Forwarded-* headers */
		xForwardedHeaders?: boolean | null;
	}
	export interface ImportExportServiceDescriptorsFormProperties {

		/** Specify headers that will be added to each client request. Useful to add authentication */
		additionalHeaders: FormControl<{[id: string]: string } | null | undefined>,

		/** A reference to a global auth module config */
		authConfigRef: FormControl<string | null | undefined>,

		/**
		 * Display a construction page when a user try to use the service
		 * Required
		 */
		buildMode: FormControl<boolean | null | undefined>,

		/** A reference to validation authority */
		clientValidatorRef: FormControl<string | null | undefined>,

		/**
		 * The domain on which the service is available.
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside
		 * Required
		 */
		enforceSecureCommunication: FormControl<boolean | null | undefined>,

		/**
		 * The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is 'foo' and line is 'preprod', then the exposed service will be available at 'foo.preprod.mydomain'
		 * Required
		 */
		env: FormControl<string | null | undefined>,

		/**
		 * Will force redirection to https:// if not present
		 * Required
		 */
		forceHttps: FormControl<boolean | null | undefined>,

		/** Specify headers that will be verified after routing. */
		headersVerification: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A unique random string to identify your service
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The host used localy, mainly localhost:xxxx */
		localHost: FormControl<string | null | undefined>,

		/** The scheme used localy, mainly http */
		localScheme: FormControl<string | null | undefined>,

		/**
		 * Display a maintainance page when a user try to use the service
		 * Required
		 */
		maintenanceMode: FormControl<boolean | null | undefined>,

		/** Specify headers that MUST be present on client request to route it. Useful to implement versioning */
		matchingHeaders: FormControl<{[id: string]: string } | null | undefined>,

		/** The root path on which the service is available */
		matchingRoot: FormControl<string | null | undefined>,

		/** Just a bunch of random properties */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The name of your service. Only for debug and human readability purposes
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Host header will be overriden with Host of the target */
		overrideHost: FormControl<boolean | null | undefined>,

		/**
		 * When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain
		 * Required
		 */
		privateApp: FormControl<boolean | null | undefined>,

		/** If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests */
		redirectToLocal: FormControl<boolean | null | undefined>,

		/**
		 * Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar
		 * Required
		 */
		root: FormControl<string | null | undefined>,

		/** When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ... */
		sendOtoroshiHeadersBack: FormControl<boolean | null | undefined>,

		/**
		 * The subdomain on which the service is available
		 * Required
		 */
		subdomain: FormControl<string | null | undefined>,

		/** A reference to a request transformer */
		transformerRef: FormControl<string | null | undefined>,

		/** The fact that this service will be seen by users and cannot be impacted by the Snow Monkey */
		userFacing: FormControl<boolean | null | undefined>,

		/** Send X-Forwarded-* headers */
		xForwardedHeaders: FormControl<boolean | null | undefined>,
	}
	export function CreateImportExportServiceDescriptorsFormGroup() {
		return new FormGroup<ImportExportServiceDescriptorsFormProperties>({
			additionalHeaders: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			authConfigRef: new FormControl<string | null | undefined>(undefined),
			buildMode: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			clientValidatorRef: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enforceSecureCommunication: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			env: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			forceHttps: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			headersVerification: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			localHost: new FormControl<string | null | undefined>(undefined),
			localScheme: new FormControl<string | null | undefined>(undefined),
			maintenanceMode: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			matchingHeaders: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			matchingRoot: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			overrideHost: new FormControl<boolean | null | undefined>(undefined),
			privateApp: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			redirectToLocal: new FormControl<boolean | null | undefined>(undefined),
			root: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sendOtoroshiHeadersBack: new FormControl<boolean | null | undefined>(undefined),
			subdomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transformerRef: new FormControl<string | null | undefined>(undefined),
			userFacing: new FormControl<boolean | null | undefined>(undefined),
			xForwardedHeaders: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A JWT verifier used only for the current service descriptor */
	export interface LocalJwtVerifier {

		/** Required */
		algoSettings: HSAlgoSettings;

		/**
		 * Is it enabled
		 * Required
		 */
		enabled: boolean;

		/** Required */
		source: InQueryParam;

		/** Required */
		strategy: PassThrough;

		/**
		 * Does it fail if JWT not found
		 * Required
		 */
		strict: boolean;

		/**
		 * A string with value 'local'
		 * Required
		 */
		type: string;
	}

	/** A JWT verifier used only for the current service descriptor */
	export interface LocalJwtVerifierFormProperties {

		/**
		 * Is it enabled
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Does it fail if JWT not found
		 * Required
		 */
		strict: FormControl<boolean | null | undefined>,

		/**
		 * A string with value 'local'
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLocalJwtVerifierFormGroup() {
		return new FormGroup<LocalJwtVerifierFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			strict: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration for redirection per service */
	export interface RedirectionSettings {

		/**
		 * The http redirect code
		 * Required
		 */
		code: number;

		/**
		 * Whether or not redirection is enabled
		 * Required
		 */
		enabled: boolean;

		/**
		 * The location for redirection
		 * Required
		 */
		to: string;
	}

	/** The configuration for redirection per service */
	export interface RedirectionSettingsFormProperties {

		/**
		 * The http redirect code
		 * Required
		 */
		code: FormControl<number | null | undefined>,

		/**
		 * Whether or not redirection is enabled
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The location for redirection
		 * Required
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreateRedirectionSettingsFormGroup() {
		return new FormGroup<RedirectionSettingsFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration for statsd metrics push */
	export interface StatsdConfig {

		/**
		 * Datadog agent
		 * Required
		 */
		datadog: boolean;

		/**
		 * The host of the StatsD agent
		 * Required
		 */
		host: string;

		/**
		 * The port of the StatsD agent
		 * Required
		 */
		port: number;
	}

	/** The configuration for statsd metrics push */
	export interface StatsdConfigFormProperties {

		/**
		 * Datadog agent
		 * Required
		 */
		datadog: FormControl<boolean | null | undefined>,

		/**
		 * The host of the StatsD agent
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/**
		 * The port of the StatsD agent
		 * Required
		 */
		port: FormControl<number | null | undefined>,
	}
	export function CreateStatsdConfigFormGroup() {
		return new FormGroup<StatsdConfigFormProperties>({
			datadog: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportExportServiceGroups {

		/** The descriptoin of the group */
		description?: string | null;

		/**
		 * The unique id of the group. Usually 64 random alpha numerical characters, but can be anything
		 * Required
		 */
		id: string;

		/**
		 * The name of the group
		 * Required
		 */
		name: string;
	}
	export interface ImportExportServiceGroupsFormProperties {

		/** The descriptoin of the group */
		description: FormControl<string | null | undefined>,

		/**
		 * The unique id of the group. Usually 64 random alpha numerical characters, but can be anything
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the group
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateImportExportServiceGroupsFormGroup() {
		return new FormGroup<ImportExportServiceGroupsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportExportSimpleAdmins {

		/**
		 * The creation date of the user
		 * Required
		 */
		createdAt: number;

		/**
		 * The label for the user
		 * Required
		 */
		label: string;

		/**
		 * The hashed password of the user
		 * Required
		 */
		password: string;

		/**
		 * The email address of the user
		 * Required
		 */
		username: string;
	}
	export interface ImportExportSimpleAdminsFormProperties {

		/**
		 * The creation date of the user
		 * Required
		 */
		createdAt: FormControl<number | null | undefined>,

		/**
		 * The label for the user
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The hashed password of the user
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * The email address of the user
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateImportExportSimpleAdminsFormGroup() {
		return new FormGroup<ImportExportSimpleAdminsFormProperties>({
			createdAt: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Global stats for the current Otoroshi instances */
	export interface ImportExportStats {

		/**
		 * Number of calls to Otoroshi globally
		 * Required
		 */
		calls: number;

		/**
		 * The amount of data sent to Otoroshi globally
		 * Required
		 */
		dataIn: number;

		/**
		 * The amount of data sent from Otoroshi globally
		 * Required
		 */
		dataOut: number;
	}

	/** Global stats for the current Otoroshi instances */
	export interface ImportExportStatsFormProperties {

		/**
		 * Number of calls to Otoroshi globally
		 * Required
		 */
		calls: FormControl<number | null | undefined>,

		/**
		 * The amount of data sent to Otoroshi globally
		 * Required
		 */
		dataIn: FormControl<number | null | undefined>,

		/**
		 * The amount of data sent from Otoroshi globally
		 * Required
		 */
		dataOut: FormControl<number | null | undefined>,
	}
	export function CreateImportExportStatsFormGroup() {
		return new FormGroup<ImportExportStatsFormProperties>({
			calls: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dataIn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dataOut: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** JWT location in a cookie */
	export interface InCookie {

		/**
		 * Name of the cookie
		 * Required
		 */
		name: string;

		/**
		 * String with value InCookie
		 * Required
		 */
		type: string;
	}

	/** JWT location in a cookie */
	export interface InCookieFormProperties {

		/**
		 * Name of the cookie
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * String with value InCookie
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateInCookieFormGroup() {
		return new FormGroup<InCookieFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** JWT location in a header */
	export interface InHeader {

		/**
		 * Name of the header
		 * Required
		 */
		name: string;

		/**
		 * Remove regex inside the value, like 'Bearer '
		 * Required
		 */
		remove: string;

		/**
		 * String with value InHeader
		 * Required
		 */
		type: string;
	}

	/** JWT location in a header */
	export interface InHeaderFormProperties {

		/**
		 * Name of the header
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Remove regex inside the value, like 'Bearer '
		 * Required
		 */
		remove: FormControl<string | null | undefined>,

		/**
		 * String with value InHeader
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateInHeaderFormGroup() {
		return new FormGroup<InHeaderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			remove: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings to authenticate users using the in memory user store */
	export interface InMemoryAuthModuleConfig {

		/**
		 * Description of the config
		 * Required
		 */
		desc: string;

		/**
		 * Unique id of the config
		 * Required
		 */
		id: string;

		/**
		 * Name of the config
		 * Required
		 */
		name: string;

		/**
		 * Max age of the session
		 * Required
		 */
		sessionMaxAge: string;

		/**
		 * Type of settings. value is basic
		 * Required
		 */
		type: string;

		/**
		 * List of users
		 * Required
		 */
		users: Array<InMemoryUser>;
	}

	/** Settings to authenticate users using the in memory user store */
	export interface InMemoryAuthModuleConfigFormProperties {

		/**
		 * Description of the config
		 * Required
		 */
		desc: FormControl<string | null | undefined>,

		/**
		 * Unique id of the config
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of the config
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max age of the session
		 * Required
		 */
		sessionMaxAge: FormControl<string | null | undefined>,

		/**
		 * Type of settings. value is basic
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateInMemoryAuthModuleConfigFormGroup() {
		return new FormGroup<InMemoryAuthModuleConfigFormProperties>({
			desc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionMaxAge: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A user */
	export interface InMemoryUser {

		/**
		 * Email of the user
		 * Required
		 */
		email: string;

		/**
		 * Metadata of the user
		 * Required
		 */
		metadata: {[id: string]: string };

		/**
		 * Name of the user
		 * Required
		 */
		name: string;

		/**
		 * Password of the user (BCrypt hash)
		 * Required
		 */
		password: string;
	}

	/** A user */
	export interface InMemoryUserFormProperties {

		/**
		 * Email of the user
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Metadata of the user
		 * Required
		 */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the user
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Password of the user (BCrypt hash)
		 * Required
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateInMemoryUserFormGroup() {
		return new FormGroup<InMemoryUserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings for a JWK set */
	export interface JWKSAlgoSettings {

		/** The headers for the http call */
		headers?: {[id: string]: string };

		/** The type of key: RSA or EC */
		kty?: string | null;

		/** The timeout of the http call */
		timeout?: number | null;

		/** The ttl of the keyset */
		ttl?: number | null;

		/**
		 * String with value JWKSAlgoSettings
		 * Required
		 */
		type: string;

		/** The url for the http call */
		url?: string | null;
	}

	/** Settings for a JWK set */
	export interface JWKSAlgoSettingsFormProperties {

		/** The headers for the http call */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of key: RSA or EC */
		kty: FormControl<string | null | undefined>,

		/** The timeout of the http call */
		timeout: FormControl<number | null | undefined>,

		/** The ttl of the keyset */
		ttl: FormControl<number | null | undefined>,

		/**
		 * String with value JWKSAlgoSettings
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/** The url for the http call */
		url: FormControl<string | null | undefined>,
	}
	export function CreateJWKSAlgoSettingsFormGroup() {
		return new FormGroup<JWKSAlgoSettingsFormProperties>({
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			kty: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<number | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for kafka access */
	export interface KafkaConfig {

		/** Optional keypass */
		keyPass?: string | null;

		/** Optional path to keystore */
		keyStore?: string | null;

		/**
		 * URLs of the kafka servers
		 * Required
		 */
		servers: Array<string>;

		/** Optional kafka topic (otoroshi-events by default) */
		topic?: string | null;

		/** Optional path to trustore */
		trustore?: string | null;
	}

	/** The configuration for kafka access */
	export interface KafkaConfigFormProperties {

		/** Optional keypass */
		keyPass: FormControl<string | null | undefined>,

		/** Optional path to keystore */
		keyStore: FormControl<string | null | undefined>,

		/** Optional kafka topic (otoroshi-events by default) */
		topic: FormControl<string | null | undefined>,

		/** Optional path to trustore */
		trustore: FormControl<string | null | undefined>,
	}
	export function CreateKafkaConfigFormGroup() {
		return new FormGroup<KafkaConfigFormProperties>({
			keyPass: new FormControl<string | null | undefined>(undefined),
			keyStore: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
			trustore: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings to authenticate users using a generic OAuth2 provider */
	export interface LdapAuthModuleConfig {

		/**
		 * The admin password
		 * Required
		 */
		adminPassword: string;

		/**
		 * The admin username
		 * Required
		 */
		adminUsername: string;

		/**
		 * Description of the config
		 * Required
		 */
		desc: string;

		/**
		 * Field name to get email from user profile
		 * Required
		 */
		emailField: string;

		/**
		 * Filter for groups
		 * Required
		 */
		groupFilter: string;

		/**
		 * Unique id of the config
		 * Required
		 */
		id: string;

		/**
		 * Name of the config
		 * Required
		 */
		name: string;

		/**
		 * Field name to get name from user profile
		 * Required
		 */
		nameField: string;

		/** Field name to get otoroshi metadata from. You can specify sub fields using | as separator */
		otoroshiDataField?: string | null;

		/**
		 * LDAP search base
		 * Required
		 */
		searchBase: string;

		/**
		 * Filter for users
		 * Required
		 */
		searchFilter: string;

		/**
		 * URL of the ldap server
		 * Required
		 */
		serverUrl: string;

		/**
		 * Max age of the session
		 * Required
		 */
		sessionMaxAge: number;

		/**
		 * Type of settings. value is ldap
		 * Required
		 */
		type: string;

		/**
		 * LDAP user base DN
		 * Required
		 */
		userBase: string;
	}

	/** Settings to authenticate users using a generic OAuth2 provider */
	export interface LdapAuthModuleConfigFormProperties {

		/**
		 * The admin password
		 * Required
		 */
		adminPassword: FormControl<string | null | undefined>,

		/**
		 * The admin username
		 * Required
		 */
		adminUsername: FormControl<string | null | undefined>,

		/**
		 * Description of the config
		 * Required
		 */
		desc: FormControl<string | null | undefined>,

		/**
		 * Field name to get email from user profile
		 * Required
		 */
		emailField: FormControl<string | null | undefined>,

		/**
		 * Filter for groups
		 * Required
		 */
		groupFilter: FormControl<string | null | undefined>,

		/**
		 * Unique id of the config
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of the config
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Field name to get name from user profile
		 * Required
		 */
		nameField: FormControl<string | null | undefined>,

		/** Field name to get otoroshi metadata from. You can specify sub fields using | as separator */
		otoroshiDataField: FormControl<string | null | undefined>,

		/**
		 * LDAP search base
		 * Required
		 */
		searchBase: FormControl<string | null | undefined>,

		/**
		 * Filter for users
		 * Required
		 */
		searchFilter: FormControl<string | null | undefined>,

		/**
		 * URL of the ldap server
		 * Required
		 */
		serverUrl: FormControl<string | null | undefined>,

		/**
		 * Max age of the session
		 * Required
		 */
		sessionMaxAge: FormControl<number | null | undefined>,

		/**
		 * Type of settings. value is ldap
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * LDAP user base DN
		 * Required
		 */
		userBase: FormControl<string | null | undefined>,
	}
	export function CreateLdapAuthModuleConfigFormGroup() {
		return new FormGroup<LdapAuthModuleConfigFormProperties>({
			adminPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			adminUsername: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			desc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			emailField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupFilter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			otoroshiDataField: new FormControl<string | null | undefined>(undefined),
			searchBase: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			searchFilter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionMaxAge: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userBase: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A user */
	export interface LdapUser {

		/**
		 * Email of the user
		 * Required
		 */
		email: string;

		/**
		 * Metadata of the user
		 * Required
		 */
		metadata: {[id: string]: string };

		/**
		 * Name of the user
		 * Required
		 */
		name: string;
	}

	/** A user */
	export interface LdapUserFormProperties {

		/**
		 * Email of the user
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Metadata of the user
		 * Required
		 */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Name of the user
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLdapUserFormGroup() {
		return new FormGroup<LdapUserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MailerConsoleExporterConfig {

		/** Type of mailer */
		type?: MailerConsoleExporterConfigType | null;
	}
	export interface MailerConsoleExporterConfigFormProperties {

		/** Type of mailer */
		type: FormControl<MailerConsoleExporterConfigType | null | undefined>,
	}
	export function CreateMailerConsoleExporterConfigFormGroup() {
		return new FormGroup<MailerConsoleExporterConfigFormProperties>({
			type: new FormControl<MailerConsoleExporterConfigType | null | undefined>(undefined),
		});

	}

	export enum MailerConsoleExporterConfigType { generic = 'generic' }

	export interface MailerGenericExporterConfig {

		/** Optional headers */
		headers?: {[id: string]: string };

		/** Email adresses of recipents */
		to?: Array<string>;

		/**
		 * Type of mailer
		 * Required
		 */
		type: MailerConsoleExporterConfigType;

		/** Url of mailer */
		url?: string | null;
	}
	export interface MailerGenericExporterConfigFormProperties {

		/** Optional headers */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Type of mailer
		 * Required
		 */
		type: FormControl<MailerConsoleExporterConfigType | null | undefined>,

		/** Url of mailer */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMailerGenericExporterConfigFormGroup() {
		return new FormGroup<MailerGenericExporterConfigFormProperties>({
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<MailerConsoleExporterConfigType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MailerMailgunExporterConfig {

		/** Mailgun apiKey */
		apiKey?: string | null;

		/** Mailgun domain */
		domain?: string | null;

		/** Whether the mailgun server is european */
		eu?: boolean | null;

		/** Email adresses of recipents */
		to?: Array<string>;

		/**
		 * Type of mailer
		 * Required
		 */
		type: MailerMailgunExporterConfigType;
	}
	export interface MailerMailgunExporterConfigFormProperties {

		/** Mailgun apiKey */
		apiKey: FormControl<string | null | undefined>,

		/** Mailgun domain */
		domain: FormControl<string | null | undefined>,

		/** Whether the mailgun server is european */
		eu: FormControl<boolean | null | undefined>,

		/**
		 * Type of mailer
		 * Required
		 */
		type: FormControl<MailerMailgunExporterConfigType | null | undefined>,
	}
	export function CreateMailerMailgunExporterConfigFormGroup() {
		return new FormGroup<MailerMailgunExporterConfigFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			eu: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<MailerMailgunExporterConfigType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MailerMailgunExporterConfigType { mailgun = 'mailgun' }

	export interface MailerMailjetExporterConfig {

		/** Mailjet private apiKey */
		apiKeyPrivate?: string | null;

		/** Mailjet public apiKey */
		apiKeyPublic?: string | null;

		/** Email adresses of recipents */
		to?: Array<string>;

		/**
		 * Type of mailer
		 * Required
		 */
		type: MailerMailjetExporterConfigType;
	}
	export interface MailerMailjetExporterConfigFormProperties {

		/** Mailjet private apiKey */
		apiKeyPrivate: FormControl<string | null | undefined>,

		/** Mailjet public apiKey */
		apiKeyPublic: FormControl<string | null | undefined>,

		/**
		 * Type of mailer
		 * Required
		 */
		type: FormControl<MailerMailjetExporterConfigType | null | undefined>,
	}
	export function CreateMailerMailjetExporterConfigFormGroup() {
		return new FormGroup<MailerMailjetExporterConfigFormProperties>({
			apiKeyPrivate: new FormControl<string | null | undefined>(undefined),
			apiKeyPublic: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<MailerMailjetExporterConfigType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MailerMailjetExporterConfigType { mailjet = 'mailjet' }

	export interface MailerSendgridExporterConfig {

		/** Sendgrid apiKey */
		apiKeyPublic?: string | null;

		/** Email adresses of recipents */
		to?: Array<string>;

		/**
		 * Type of mailer
		 * Required
		 */
		type: MailerSendgridExporterConfigType;
	}
	export interface MailerSendgridExporterConfigFormProperties {

		/** Sendgrid apiKey */
		apiKeyPublic: FormControl<string | null | undefined>,

		/**
		 * Type of mailer
		 * Required
		 */
		type: FormControl<MailerSendgridExporterConfigType | null | undefined>,
	}
	export function CreateMailerSendgridExporterConfigFormGroup() {
		return new FormGroup<MailerSendgridExporterConfigFormProperties>({
			apiKeyPublic: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<MailerSendgridExporterConfigType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MailerSendgridExporterConfigType { sendgrid = 'sendgrid' }


	/** The structure that represent current Otoroshi health */
	export interface OtoroshiHealth {

		/** Required */
		datastore: OtoroshiHealthDatastore;

		/** Required */
		otoroshi: OtoroshiHealthOtoroshi;
	}

	/** The structure that represent current Otoroshi health */
	export interface OtoroshiHealthFormProperties {

		/** Required */
		datastore: FormControl<OtoroshiHealthDatastore | null | undefined>,

		/** Required */
		otoroshi: FormControl<OtoroshiHealthOtoroshi | null | undefined>,
	}
	export function CreateOtoroshiHealthFormGroup() {
		return new FormGroup<OtoroshiHealthFormProperties>({
			datastore: new FormControl<OtoroshiHealthDatastore | null | undefined>(undefined, [Validators.required]),
			otoroshi: new FormControl<OtoroshiHealthOtoroshi | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OtoroshiHealthDatastore { healthy = 'healthy', unhealthy = 'unhealthy', unreachable = 'unreachable' }

	export enum OtoroshiHealthOtoroshi { healthy = 'healthy', unhealthy = 'unhealthy', down = 'down' }


	/** An outage by the Snow Monkey on a service */
	export interface Outage {

		/**
		 * The service impacted by outage
		 * Required
		 */
		descriptorId: string;

		/**
		 * The name of service impacted by outage
		 * Required
		 */
		descriptorName: string;

		/**
		 * The duration of the outage
		 * Required
		 */
		duration: number;

		/**
		 * The end of the outage
		 * Required
		 */
		until: string;
	}

	/** An outage by the Snow Monkey on a service */
	export interface OutageFormProperties {

		/**
		 * The service impacted by outage
		 * Required
		 */
		descriptorId: FormControl<string | null | undefined>,

		/**
		 * The name of service impacted by outage
		 * Required
		 */
		descriptorName: FormControl<string | null | undefined>,

		/**
		 * The duration of the outage
		 * Required
		 */
		duration: FormControl<number | null | undefined>,

		/**
		 * The end of the outage
		 * Required
		 */
		until: FormControl<string | null | undefined>,
	}
	export function CreateOutageFormGroup() {
		return new FormGroup<OutageFormProperties>({
			descriptorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			descriptorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			until: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OutageStrategy { OneServicePerGroup = 'OneServicePerGroup', AllServicesPerGroup = 'AllServicesPerGroup' }

	export interface PatchElement {

		/** Required */
		op: PatchElementOp;

		/** Required */
		path: string;
		value?: any;
	}
	export interface PatchElementFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreatePatchElementFormGroup() {
		return new FormGroup<PatchElementFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export enum PatchElementOp { add = 'add', replace = 'replace', remove = 'remove', copy = 'copy', test = 'test' }


	/** The configuration for kafka access */
	export interface PulsarDataExporterConfig {

		/**
		 * Namespace
		 * Required
		 */
		namespace: string;

		/**
		 * Tenant
		 * Required
		 */
		tenant: string;

		/**
		 * Topic
		 * Required
		 */
		topic: string;

		/**
		 * URI of the pulsar server
		 * Required
		 */
		uri: Array<string>;
	}

	/** The configuration for kafka access */
	export interface PulsarDataExporterConfigFormProperties {

		/**
		 * Namespace
		 * Required
		 */
		namespace: FormControl<string | null | undefined>,

		/**
		 * Tenant
		 * Required
		 */
		tenant: FormControl<string | null | undefined>,

		/**
		 * Topic
		 * Required
		 */
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePulsarDataExporterConfigFormGroup() {
		return new FormGroup<PulsarDataExporterConfigFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenant: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			topic: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Quotas state for an api key on a service group */
	export interface Quotas {

		/**
		 * The number of authorized calls per day
		 * Required
		 */
		authorizedCallsPerDay: number;

		/**
		 * The number of authorized calls per month
		 * Required
		 */
		authorizedCallsPerMonth: number;

		/**
		 * The number of authorized calls per second
		 * Required
		 */
		authorizedCallsPerSec: number;

		/**
		 * The current number of calls per day
		 * Required
		 */
		currentCallsPerDay: number;

		/**
		 * The current number of calls per month
		 * Required
		 */
		currentCallsPerMonth: number;

		/**
		 * The current number of calls per second
		 * Required
		 */
		currentCallsPerSec: number;

		/**
		 * The remaining number of calls per day
		 * Required
		 */
		remainingCallsPerDay: number;

		/**
		 * The number of authorized calls per month
		 * Required
		 */
		remainingCallsPerMonth: number;

		/**
		 * The remaining number of calls per second
		 * Required
		 */
		remainingCallsPerSec: number;
	}

	/** Quotas state for an api key on a service group */
	export interface QuotasFormProperties {

		/**
		 * The number of authorized calls per day
		 * Required
		 */
		authorizedCallsPerDay: FormControl<number | null | undefined>,

		/**
		 * The number of authorized calls per month
		 * Required
		 */
		authorizedCallsPerMonth: FormControl<number | null | undefined>,

		/**
		 * The number of authorized calls per second
		 * Required
		 */
		authorizedCallsPerSec: FormControl<number | null | undefined>,

		/**
		 * The current number of calls per day
		 * Required
		 */
		currentCallsPerDay: FormControl<number | null | undefined>,

		/**
		 * The current number of calls per month
		 * Required
		 */
		currentCallsPerMonth: FormControl<number | null | undefined>,

		/**
		 * The current number of calls per second
		 * Required
		 */
		currentCallsPerSec: FormControl<number | null | undefined>,

		/**
		 * The remaining number of calls per day
		 * Required
		 */
		remainingCallsPerDay: FormControl<number | null | undefined>,

		/**
		 * The number of authorized calls per month
		 * Required
		 */
		remainingCallsPerMonth: FormControl<number | null | undefined>,

		/**
		 * The remaining number of calls per second
		 * Required
		 */
		remainingCallsPerSec: FormControl<number | null | undefined>,
	}
	export function CreateQuotasFormGroup() {
		return new FormGroup<QuotasFormProperties>({
			authorizedCallsPerDay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			authorizedCallsPerMonth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			authorizedCallsPerSec: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			currentCallsPerDay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			currentCallsPerMonth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			currentCallsPerSec: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			remainingCallsPerDay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			remainingCallsPerMonth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			remainingCallsPerSec: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings for an HMAC + SHA signing algorithm */
	export interface RSAlgoSettings {

		/** The private key for the RSA function */
		privateKey?: string | null;

		/**
		 * The public key for the RSA function
		 * Required
		 */
		publicKey: string;

		/**
		 * Size for SHA function. can be 256, 384 or 512
		 * Required
		 */
		size: number;

		/**
		 * String with value RSAlgoSettings
		 * Required
		 */
		type: string;
	}

	/** Settings for an HMAC + SHA signing algorithm */
	export interface RSAlgoSettingsFormProperties {

		/** The private key for the RSA function */
		privateKey: FormControl<string | null | undefined>,

		/**
		 * The public key for the RSA function
		 * Required
		 */
		publicKey: FormControl<string | null | undefined>,

		/**
		 * Size for SHA function. can be 256, 384 or 512
		 * Required
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * String with value RSAlgoSettings
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRSAlgoSettingsFormGroup() {
		return new FormGroup<RSAlgoSettingsFormProperties>({
			privateKey: new FormControl<string | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Reference to a global JWT verifier */
	export interface RefJwtVerifier {

		/**
		 * Is it enabled
		 * Required
		 */
		enabled: boolean;

		/**
		 * The id of the GlobalJWTVerifier
		 * Required
		 */
		id: string;

		/**
		 * A string with value 'ref'
		 * Required
		 */
		type: string;
	}

	/** Reference to a global JWT verifier */
	export interface RefJwtVerifierFormProperties {

		/**
		 * Is it enabled
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The id of the GlobalJWTVerifier
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * A string with value 'ref'
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRefJwtVerifierFormGroup() {
		return new FormGroup<RefJwtVerifierFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A script to transformer otoroshi requests  */
	export interface Script {

		/**
		 * The code of the script
		 * Required
		 */
		code: {[id: string]: string };

		/**
		 * The description of the script
		 * Required
		 */
		desc: {[id: string]: string };

		/**
		 * The id of the script
		 * Required
		 */
		id: string;

		/**
		 * The name of the script
		 * Required
		 */
		name: string;
	}

	/** A script to transformer otoroshi requests  */
	export interface ScriptFormProperties {

		/**
		 * The code of the script
		 * Required
		 */
		code: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The description of the script
		 * Required
		 */
		desc: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The id of the script
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the script
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateScriptFormGroup() {
		return new FormGroup<ScriptFormProperties>({
			code: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			desc: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The error of the compilation of a Script */
	export interface ScriptCompilationError {

		/**
		 * The column of the error
		 * Required
		 */
		column: string;

		/**
		 * The file where the error is located
		 * Required
		 */
		file: {[id: string]: string };

		/**
		 * The line of the error
		 * Required
		 */
		line: string;

		/**
		 * The message to display for the error
		 * Required
		 */
		message: {[id: string]: string };

		/**
		 * The raw message from the compiler
		 * Required
		 */
		rawMessage: {[id: string]: string };
	}

	/** The error of the compilation of a Script */
	export interface ScriptCompilationErrorFormProperties {

		/**
		 * The column of the error
		 * Required
		 */
		column: FormControl<string | null | undefined>,

		/**
		 * The file where the error is located
		 * Required
		 */
		file: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The line of the error
		 * Required
		 */
		line: FormControl<string | null | undefined>,

		/**
		 * The message to display for the error
		 * Required
		 */
		message: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The raw message from the compiler
		 * Required
		 */
		rawMessage: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateScriptCompilationErrorFormGroup() {
		return new FormGroup<ScriptCompilationErrorFormProperties>({
			column: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			file: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			line: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			rawMessage: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The result of the compilation of a Script */
	export interface ScriptCompilationResult {

		/**
		 * Is the task done or not
		 * Required
		 */
		done: boolean;

		/** The error of the compilation of a Script */
		error?: ScriptCompilationError;
	}

	/** The result of the compilation of a Script */
	export interface ScriptCompilationResultFormProperties {

		/**
		 * Is the task done or not
		 * Required
		 */
		done: FormControl<boolean | null | undefined>,
	}
	export function CreateScriptCompilationResultFormGroup() {
		return new FormGroup<ScriptCompilationResultFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism */
	export interface Service {

		/** The configuration of the canary mode for a service descriptor */
		Canary?: Canary;

		/** Specify headers that will be added to each client request. Useful to add authentication */
		additionalHeaders?: {[id: string]: string };

		/** The Open API configuration for your service (if one) */
		api?: ExposedApi;

		/** A reference to a global auth module config */
		authConfigRef?: string | null;

		/**
		 * Display a construction page when a user try to use the service
		 * Required
		 */
		buildMode: boolean;

		/** Configuration for the faults that can be injected in requests */
		chaosConfig?: ChaosConfig;

		/** The configuration of the circuit breaker for a service descriptor */
		clientConfig?: ClientConfig;

		/** A reference to validation authority */
		clientValidatorRef?: string | null;

		/** The configuration for cors support */
		cors?: CorsSettings;

		/**
		 * The domain on which the service is available.
		 * Required
		 */
		domain: string;

		/**
		 * Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist
		 * Required
		 */
		enabled: boolean;

		/**
		 * When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside
		 * Required
		 */
		enforceSecureCommunication: boolean;

		/**
		 * The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is 'foo' and line is 'preprod', then the exposed service will be available at 'foo.preprod.mydomain'
		 * Required
		 */
		env: string;

		/**
		 * Will force redirection to https:// if not present
		 * Required
		 */
		forceHttps: boolean;

		/**
		 * Each service descriptor is attached to groups. A group can have one or more services. Each API key is linked to a group and allow access to every service in the group
		 * Required
		 */
		groups: Array<string>;

		/** Configuration for gzip of service responses */
		gzip?: Gzip;

		/** Specify headers that will be verified after routing. */
		headersVerification?: {[id: string]: string };

		/** The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive */
		healthCheck?: HealthCheck;

		/**
		 * A unique random string to identify your service
		 * Required
		 */
		id: string;

		/** The filtering configuration block for a service of globally. */
		ipFiltering?: IpFiltering;
		jwtVerifier?: LocalJwtVerifier;

		/** The host used localy, mainly localhost:xxxx */
		localHost?: string | null;

		/** The scheme used localy, mainly http */
		localScheme?: string | null;

		/**
		 * Display a maintainance page when a user try to use the service
		 * Required
		 */
		maintenanceMode: boolean;

		/** Specify headers that MUST be present on client request to route it. Useful to implement versioning */
		matchingHeaders?: {[id: string]: string };

		/** The root path on which the service is available */
		matchingRoot?: string | null;

		/** Just a bunch of random properties */
		metadata?: {[id: string]: string };

		/**
		 * The name of your service. Only for debug and human readability purposes
		 * Required
		 */
		name: string;

		/** Host header will be overriden with Host of the target */
		overrideHost?: boolean | null;

		/**
		 * When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain
		 * Required
		 */
		privateApp: boolean;

		/** If you define a public pattern that is a little bit too much, you can make some of public URL private again */
		privatePatterns?: Array<string>;

		/** By default, every services are private only and you'll need an API key to access it. However, if you want to expose a public UI, you can define one or more public patterns (regex) to allow access to anybody. For example if you want to allow anybody on any URL, just use '/.*' */
		publicPatterns?: Array<string>;

		/** If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests */
		redirectToLocal?: boolean | null;

		/** The configuration for redirection per service */
		redirection?: RedirectionSettings;

		/**
		 * Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar
		 * Required
		 */
		root: string;

		/** URI patterns excluded from secured communications */
		secComExcludedPatterns?: Array<string>;
		secComSettings?: HSAlgoSettings;

		/** When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ... */
		sendOtoroshiHeadersBack?: boolean | null;

		/** The configuration for statsd metrics push */
		statsdConfig?: StatsdConfig;

		/**
		 * The subdomain on which the service is available
		 * Required
		 */
		subdomain: string;

		/**
		 * The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures
		 * Required
		 */
		targets: Array<Target>;

		/** A reference to a request transformer */
		transformerRef?: string | null;

		/** The fact that this service will be seen by users and cannot be impacted by the Snow Monkey */
		userFacing?: boolean | null;

		/** Send X-Forwarded-* headers */
		xForwardedHeaders?: boolean | null;
	}

	/** An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism */
	export interface ServiceFormProperties {

		/** Specify headers that will be added to each client request. Useful to add authentication */
		additionalHeaders: FormControl<{[id: string]: string } | null | undefined>,

		/** A reference to a global auth module config */
		authConfigRef: FormControl<string | null | undefined>,

		/**
		 * Display a construction page when a user try to use the service
		 * Required
		 */
		buildMode: FormControl<boolean | null | undefined>,

		/** A reference to validation authority */
		clientValidatorRef: FormControl<string | null | undefined>,

		/**
		 * The domain on which the service is available.
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside
		 * Required
		 */
		enforceSecureCommunication: FormControl<boolean | null | undefined>,

		/**
		 * The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is 'foo' and line is 'preprod', then the exposed service will be available at 'foo.preprod.mydomain'
		 * Required
		 */
		env: FormControl<string | null | undefined>,

		/**
		 * Will force redirection to https:// if not present
		 * Required
		 */
		forceHttps: FormControl<boolean | null | undefined>,

		/** Specify headers that will be verified after routing. */
		headersVerification: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A unique random string to identify your service
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The host used localy, mainly localhost:xxxx */
		localHost: FormControl<string | null | undefined>,

		/** The scheme used localy, mainly http */
		localScheme: FormControl<string | null | undefined>,

		/**
		 * Display a maintainance page when a user try to use the service
		 * Required
		 */
		maintenanceMode: FormControl<boolean | null | undefined>,

		/** Specify headers that MUST be present on client request to route it. Useful to implement versioning */
		matchingHeaders: FormControl<{[id: string]: string } | null | undefined>,

		/** The root path on which the service is available */
		matchingRoot: FormControl<string | null | undefined>,

		/** Just a bunch of random properties */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The name of your service. Only for debug and human readability purposes
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Host header will be overriden with Host of the target */
		overrideHost: FormControl<boolean | null | undefined>,

		/**
		 * When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain
		 * Required
		 */
		privateApp: FormControl<boolean | null | undefined>,

		/** If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests */
		redirectToLocal: FormControl<boolean | null | undefined>,

		/**
		 * Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar
		 * Required
		 */
		root: FormControl<string | null | undefined>,

		/** When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ... */
		sendOtoroshiHeadersBack: FormControl<boolean | null | undefined>,

		/**
		 * The subdomain on which the service is available
		 * Required
		 */
		subdomain: FormControl<string | null | undefined>,

		/** A reference to a request transformer */
		transformerRef: FormControl<string | null | undefined>,

		/** The fact that this service will be seen by users and cannot be impacted by the Snow Monkey */
		userFacing: FormControl<boolean | null | undefined>,

		/** Send X-Forwarded-* headers */
		xForwardedHeaders: FormControl<boolean | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			additionalHeaders: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			authConfigRef: new FormControl<string | null | undefined>(undefined),
			buildMode: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			clientValidatorRef: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enforceSecureCommunication: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			env: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			forceHttps: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			headersVerification: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			localHost: new FormControl<string | null | undefined>(undefined),
			localScheme: new FormControl<string | null | undefined>(undefined),
			maintenanceMode: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			matchingHeaders: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			matchingRoot: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			overrideHost: new FormControl<boolean | null | undefined>(undefined),
			privateApp: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			redirectToLocal: new FormControl<boolean | null | undefined>(undefined),
			root: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sendOtoroshiHeadersBack: new FormControl<boolean | null | undefined>(undefined),
			subdomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transformerRef: new FormControl<string | null | undefined>(undefined),
			userFacing: new FormControl<boolean | null | undefined>(undefined),
			xForwardedHeaders: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Strategy where signature and field values are verified, and then token si re-signed */
	export interface Sign {

		/** Required */
		algoSettings: HSAlgoSettings;

		/**
		 * String with value Sign
		 * Required
		 */
		type: string;

		/**
		 * Settings to verify the value of JWT token fields
		 * Required
		 */
		verificationSettings: VerificationSettings;
	}

	/** Strategy where signature and field values are verified, and then token si re-signed */
	export interface SignFormProperties {

		/**
		 * String with value Sign
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSignFormGroup() {
		return new FormGroup<SignFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Administrator using just login/password tuple to access Otoroshi */
	export interface SimpleAdmin {

		/**
		 * The creation date of the user
		 * Required
		 */
		createdAt: number;

		/**
		 * The label for the user
		 * Required
		 */
		label: string;

		/**
		 * The hashed password of the user
		 * Required
		 */
		password: string;

		/**
		 * The email address of the user
		 * Required
		 */
		username: string;
	}

	/** Administrator using just login/password tuple to access Otoroshi */
	export interface SimpleAdminFormProperties {

		/**
		 * The creation date of the user
		 * Required
		 */
		createdAt: FormControl<number | null | undefined>,

		/**
		 * The label for the user
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The hashed password of the user
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * The email address of the user
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateSimpleAdminFormGroup() {
		return new FormGroup<SimpleAdminFormProperties>({
			createdAt: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration for the faults that can be injected in requests. The name Snow Monkey is an hommage to Netflix's Chaos Monkey 😉 */
	export interface SnowMonkeyConfig {

		/**
		 * Configuration for the faults that can be injected in requests
		 * Required
		 */
		chaosConfig: ChaosConfig;

		/**
		 * Whether or not outages will actualy impact requests
		 * Required
		 */
		dryRun: boolean;

		/**
		 * Whether or not this config is enabled
		 * Required
		 */
		enabled: boolean;

		/**
		 * Whether or not user facing apps. will be impacted by Snow Monkey
		 * Required
		 */
		includeUserFacingDescriptors: boolean;

		/**
		 * Start of outage duration range
		 * Required
		 */
		outageDurationFrom: number;

		/**
		 * End of outage duration range
		 * Required
		 */
		outageDurationTo: number;

		/** Required */
		outageStrategy: OutageStrategy;

		/**
		 * Start time of Snow Monkey each day
		 * Required
		 */
		startTime: string;

		/**
		 * Stop time of Snow Monkey each day
		 * Required
		 */
		stopTime: string;

		/**
		 * Groups impacted by Snow Monkey. If empty, all groups will be impacted
		 * Required
		 */
		targetGroups: Array<string>;

		/**
		 * Number of time per day each service will be outage
		 * Required
		 */
		timesPerDay: number;
	}

	/** Configuration for the faults that can be injected in requests. The name Snow Monkey is an hommage to Netflix's Chaos Monkey 😉 */
	export interface SnowMonkeyConfigFormProperties {

		/**
		 * Whether or not outages will actualy impact requests
		 * Required
		 */
		dryRun: FormControl<boolean | null | undefined>,

		/**
		 * Whether or not this config is enabled
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Whether or not user facing apps. will be impacted by Snow Monkey
		 * Required
		 */
		includeUserFacingDescriptors: FormControl<boolean | null | undefined>,

		/**
		 * Start of outage duration range
		 * Required
		 */
		outageDurationFrom: FormControl<number | null | undefined>,

		/**
		 * End of outage duration range
		 * Required
		 */
		outageDurationTo: FormControl<number | null | undefined>,

		/** Required */
		outageStrategy: FormControl<OutageStrategy | null | undefined>,

		/**
		 * Start time of Snow Monkey each day
		 * Required
		 */
		startTime: FormControl<string | null | undefined>,

		/**
		 * Stop time of Snow Monkey each day
		 * Required
		 */
		stopTime: FormControl<string | null | undefined>,

		/**
		 * Number of time per day each service will be outage
		 * Required
		 */
		timesPerDay: FormControl<number | null | undefined>,
	}
	export function CreateSnowMonkeyConfigFormGroup() {
		return new FormGroup<SnowMonkeyConfigFormProperties>({
			dryRun: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			includeUserFacingDescriptors: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			outageDurationFrom: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			outageDurationTo: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			outageStrategy: new FormControl<OutageStrategy | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stopTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timesPerDay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Live stats for a service or globally */
	export interface Stats {

		/**
		 * Number of calls on the specified service or globally
		 * Required
		 */
		calls: number;

		/**
		 * The number of concurrent request currently
		 * Required
		 */
		concurrentHandledRequests: number;

		/**
		 * The amount of data sent to the specified service or Otoroshi globally
		 * Required
		 */
		dataIn: number;

		/**
		 * The rate of data sent to the specified service or Otoroshi globally
		 * Required
		 */
		dataInRate: number;

		/**
		 * The amount of data sent from the specified service or Otoroshi globally
		 * Required
		 */
		dataOut: number;

		/**
		 * The rate of data sent from the specified service or Otoroshi globally
		 * Required
		 */
		dataOutRate: number;

		/**
		 * The average duration for a call
		 * Required
		 */
		duration: number;

		/**
		 * The average overhead time induced by Otoroshi for each call
		 * Required
		 */
		overhead: number;

		/**
		 * The rate of data sent from and to the specified service or Otoroshi globally
		 * Required
		 */
		rate: number;
	}

	/** Live stats for a service or globally */
	export interface StatsFormProperties {

		/**
		 * Number of calls on the specified service or globally
		 * Required
		 */
		calls: FormControl<number | null | undefined>,

		/**
		 * The number of concurrent request currently
		 * Required
		 */
		concurrentHandledRequests: FormControl<number | null | undefined>,

		/**
		 * The amount of data sent to the specified service or Otoroshi globally
		 * Required
		 */
		dataIn: FormControl<number | null | undefined>,

		/**
		 * The rate of data sent to the specified service or Otoroshi globally
		 * Required
		 */
		dataInRate: FormControl<number | null | undefined>,

		/**
		 * The amount of data sent from the specified service or Otoroshi globally
		 * Required
		 */
		dataOut: FormControl<number | null | undefined>,

		/**
		 * The rate of data sent from the specified service or Otoroshi globally
		 * Required
		 */
		dataOutRate: FormControl<number | null | undefined>,

		/**
		 * The average duration for a call
		 * Required
		 */
		duration: FormControl<number | null | undefined>,

		/**
		 * The average overhead time induced by Otoroshi for each call
		 * Required
		 */
		overhead: FormControl<number | null | undefined>,

		/**
		 * The rate of data sent from and to the specified service or Otoroshi globally
		 * Required
		 */
		rate: FormControl<number | null | undefined>,
	}
	export function CreateStatsFormGroup() {
		return new FormGroup<StatsFormProperties>({
			calls: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			concurrentHandledRequests: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dataIn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dataInRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dataOut: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dataOutRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			overhead: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Strategy where signature and field values are verified, trasnformed and then token si re-signed */
	export interface Transform {

		/** Required */
		algoSettings: HSAlgoSettings;

		/** Settings to transform a JWT token and its location */
		transformSettings?: TransformSettings;

		/**
		 * String with value Transform
		 * Required
		 */
		type: string;

		/**
		 * Settings to verify the value of JWT token fields
		 * Required
		 */
		verificationSettings: VerificationSettings;
	}

	/** Strategy where signature and field values are verified, trasnformed and then token si re-signed */
	export interface TransformFormProperties {

		/**
		 * String with value Transform
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTransformFormGroup() {
		return new FormGroup<TransformFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings to transform a JWT token and its location */
	export interface TransformSettings {

		/** Required */
		location: InQueryParam;

		/**
		 * Settings to change fields of a JWT token
		 * Required
		 */
		mappingSettings: MappingSettings;
	}

	/** Settings to transform a JWT token and its location */
	export interface TransformSettingsFormProperties {
	}
	export function CreateTransformSettingsFormGroup() {
		return new FormGroup<TransformSettingsFormProperties>({
		});

	}


	/** Administrator using FIDO U2F device to access Otoroshi */
	export interface U2FAdmin {

		/**
		 * The creation date of the user
		 * Required
		 */
		createdAt: number;

		/**
		 * The label for the user
		 * Required
		 */
		label: string;

		/**
		 * The hashed password of the user
		 * Required
		 */
		password: string;

		/**
		 * The U2F registration slug
		 * Required
		 */
		registration: {[id: string]: string };

		/**
		 * The email address of the user
		 * Required
		 */
		username: string;
	}

	/** Administrator using FIDO U2F device to access Otoroshi */
	export interface U2FAdminFormProperties {

		/**
		 * The creation date of the user
		 * Required
		 */
		createdAt: FormControl<number | null | undefined>,

		/**
		 * The label for the user
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The hashed password of the user
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * The U2F registration slug
		 * Required
		 */
		registration: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The email address of the user
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateU2FAdminFormGroup() {
		return new FormGroup<U2FAdminFormProperties>({
			createdAt: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registration: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings to access a validation authority server */
	export interface ValidationAuthority {

		/**
		 * Bypass http calls, every certificates are valids
		 * Required
		 */
		alwaysValid: boolean;

		/**
		 * The TTL for invalid access response caching
		 * Required
		 */
		badTtl: number;

		/**
		 * The description of the settings
		 * Required
		 */
		description: string;

		/**
		 * The TTL for valid access response caching
		 * Required
		 */
		goodTtl: number;

		/**
		 * HTTP call headers
		 * Required
		 */
		headers: {[id: string]: string };

		/**
		 * The host of the server
		 * Required
		 */
		host: string;

		/**
		 * The id of the settings
		 * Required
		 */
		id: string;

		/**
		 * The HTTP method
		 * Required
		 */
		method: string;

		/**
		 * The name of the settings
		 * Required
		 */
		name: string;

		/**
		 * Avoid caching responses
		 * Required
		 */
		noCache: boolean;

		/**
		 * The URL path
		 * Required
		 */
		path: string;

		/**
		 * The call timeout
		 * Required
		 */
		timeout: number;

		/**
		 * The URL of the server
		 * Required
		 */
		url: string;
	}

	/** Settings to access a validation authority server */
	export interface ValidationAuthorityFormProperties {

		/**
		 * Bypass http calls, every certificates are valids
		 * Required
		 */
		alwaysValid: FormControl<boolean | null | undefined>,

		/**
		 * The TTL for invalid access response caching
		 * Required
		 */
		badTtl: FormControl<number | null | undefined>,

		/**
		 * The description of the settings
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The TTL for valid access response caching
		 * Required
		 */
		goodTtl: FormControl<number | null | undefined>,

		/**
		 * HTTP call headers
		 * Required
		 */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The host of the server
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/**
		 * The id of the settings
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The HTTP method
		 * Required
		 */
		method: FormControl<string | null | undefined>,

		/**
		 * The name of the settings
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Avoid caching responses
		 * Required
		 */
		noCache: FormControl<boolean | null | undefined>,

		/**
		 * The URL path
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/**
		 * The call timeout
		 * Required
		 */
		timeout: FormControl<number | null | undefined>,

		/**
		 * The URL of the server
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateValidationAuthorityFormGroup() {
		return new FormGroup<ValidationAuthorityFormProperties>({
			alwaysValid: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			badTtl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			goodTtl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			noCache: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration for webhook */
	export interface WhebhookConfig {

		/** Optional headers */
		headers?: {[id: string]: string };

		/** URLs of the webhook */
		url?: Array<string>;
	}

	/** The configuration for webhook */
	export interface WhebhookConfigFormProperties {

		/** Optional headers */
		headers: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateWhebhookConfigFormGroup() {
		return new FormGroup<WhebhookConfigFormProperties>({
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all api keys
		 * Get all api keys
		 * Get api/apikeys
		 * @return {Array<ApiKey>} Successful operation
		 */
		AllApiKeys(): Observable<Array<ApiKey>> {
			return this.http.get<Array<ApiKey>>(this.baseUri + 'api/apikeys', {});
		}

		/**
		 * Get all global auth. module configs
		 * Get all global auth. module configs
		 * Get api/auths
		 * @return {Array<string>} Successful operation
		 */
		FindAllGlobalAuthModules(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/auths', {});
		}

		/**
		 * Create one global auth. module config
		 * Create one global auth. module config
		 * Post api/auths
		 * @return {LdapAuthModuleConfig} Successful operation
		 */
		CreateGlobalAuthModule(requestBody: LdapAuthModuleConfig): Observable<LdapAuthModuleConfig> {
			return this.http.post<LdapAuthModuleConfig>(this.baseUri + 'api/auths', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete one global auth. module config
		 * Delete one global auth. module config
		 * Delete api/auths/{id}
		 * @param {string} id The auth. config id id
		 * @return {Deleted} Successful operation
		 */
		DeleteGlobalAuthModule(id: string): Observable<Deleted> {
			return this.http.delete<Deleted>(this.baseUri + 'api/auths/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get one global auth. module configs
		 * Get one global auth. module configs
		 * Get api/auths/{id}
		 * @param {string} id The auth. config id
		 * @return {LdapAuthModuleConfig} Successful operation
		 */
		FindGlobalAuthModuleById(id: string): Observable<LdapAuthModuleConfig> {
			return this.http.get<LdapAuthModuleConfig>(this.baseUri + 'api/auths/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update one global auth. module config
		 * Update one global auth. module config
		 * Patch api/auths/{id}
		 * @param {string} id The auth. config id
		 * @return {LdapAuthModuleConfig} Successful operation
		 */
		PatchGlobalAuthModule(id: string, requestBody: Array<PatchGlobalAuthModulePatchBody>): Observable<LdapAuthModuleConfig> {
			return this.http.patch<LdapAuthModuleConfig>(this.baseUri + 'api/auths/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update one global auth. module config
		 * Update one global auth. module config
		 * Put api/auths/{id}
		 * @param {string} id The auth. config id
		 * @return {LdapAuthModuleConfig} Successful operation
		 */
		UpdateGlobalAuthModule(id: string, requestBody: LdapAuthModuleConfig): Observable<LdapAuthModuleConfig> {
			return this.http.put<LdapAuthModuleConfig>(this.baseUri + 'api/auths/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all certificates
		 * Get all certificates
		 * Get api/certificates
		 * @return {Array<Certificate>} Successful operation
		 */
		AllCerts(): Observable<Array<Certificate>> {
			return this.http.get<Array<Certificate>>(this.baseUri + 'api/certificates', {});
		}

		/**
		 * Create one certificate
		 * Create one certificate
		 * Post api/certificates
		 * @return {Certificate} Successful operation
		 */
		CreateCert(requestBody: Certificate): Observable<Certificate> {
			return this.http.post<Certificate>(this.baseUri + 'api/certificates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete one certificate by id
		 * Delete one certificate by id
		 * Delete api/certificates/{id}
		 * @param {string} id The certificate id
		 * @return {Deleted} Successful operation
		 */
		DeleteCert(id: string): Observable<Deleted> {
			return this.http.delete<Deleted>(this.baseUri + 'api/certificates/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get one certificate by id
		 * Get one certificate by id
		 * Get api/certificates/{id}
		 * @param {string} id The auth. config id
		 * @return {Certificate} Successful operation
		 */
		OneCert(id: string): Observable<Certificate> {
			return this.http.get<Certificate>(this.baseUri + 'api/certificates/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update one certificate by id
		 * Update one certificate by id
		 * Patch api/certificates/{id}
		 * @param {string} id The certificate id
		 * @return {Certificate} Successful operation
		 */
		PatchCert(id: string, requestBody: Array<PatchCertPatchBody>): Observable<Certificate> {
			return this.http.patch<Certificate>(this.baseUri + 'api/certificates/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update one certificate by id
		 * Update one certificate by id
		 * Put api/certificates/{id}
		 * @param {string} id The certificate id
		 * @return {Certificate} Successful operation
		 */
		PutCert(id: string, requestBody: Certificate): Observable<Certificate> {
			return this.http.put<Certificate>(this.baseUri + 'api/certificates/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all validation authoritiess
		 * Get all validation authoritiess
		 * Get api/client-validators
		 * @return {Array<ValidationAuthority>} Successful operation
		 */
		FindAllClientValidators(): Observable<Array<ValidationAuthority>> {
			return this.http.get<Array<ValidationAuthority>>(this.baseUri + 'api/client-validators', {});
		}

		/**
		 * Create one validation authorities
		 * Create one validation authorities
		 * Post api/client-validators
		 * @return {ValidationAuthority} Successful operation
		 */
		CreateClientValidator(requestBody: ValidationAuthority): Observable<ValidationAuthority> {
			return this.http.post<ValidationAuthority>(this.baseUri + 'api/client-validators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete one validation authorities by id
		 * Delete one validation authorities by id
		 * Delete api/client-validators/{id}
		 * @param {string} id The validation authorities id
		 * @return {Deleted} Successful operation
		 */
		DeleteClientValidator(id: string): Observable<Deleted> {
			return this.http.delete<Deleted>(this.baseUri + 'api/client-validators/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get one validation authorities by id
		 * Get one validation authorities by id
		 * Get api/client-validators/{id}
		 * @param {string} id The auth. config id
		 * @return {ValidationAuthority} Successful operation
		 */
		FindClientValidatorById(id: string): Observable<ValidationAuthority> {
			return this.http.get<ValidationAuthority>(this.baseUri + 'api/client-validators/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update one validation authorities by id
		 * Update one validation authorities by id
		 * Patch api/client-validators/{id}
		 * @param {string} id The validation authorities id
		 * @return {ValidationAuthority} Successful operation
		 */
		PatchClientValidator(id: string, requestBody: Array<PatchClientValidatorPatchBody>): Observable<ValidationAuthority> {
			return this.http.patch<ValidationAuthority>(this.baseUri + 'api/client-validators/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update one validation authorities by id
		 * Update one validation authorities by id
		 * Put api/client-validators/{id}
		 * @param {string} id The validation authorities id
		 * @return {ValidationAuthority} Successful operation
		 */
		UpdateClientValidator(id: string, requestBody: ValidationAuthority): Observable<ValidationAuthority> {
			return this.http.put<ValidationAuthority>(this.baseUri + 'api/client-validators/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all data exporter configs
		 * Get all data exporter configs
		 * Get api/data-exporter-configs
		 * @return {Array<DataExporterConfig>} Successful operation
		 */
		FindAllDataExporters(): Observable<Array<DataExporterConfig>> {
			return this.http.get<Array<DataExporterConfig>>(this.baseUri + 'api/data-exporter-configs', {});
		}

		/**
		 * Create a new data exporter config
		 * Create a new data exporter config
		 * Post api/data-exporter-configs
		 * @return {DataExporterConfig} Successful operation
		 */
		CreateDataExporterConfig(requestBody: DataExporterConfig): Observable<DataExporterConfig> {
			return this.http.post<DataExporterConfig>(this.baseUri + 'api/data-exporter-configs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a data exporter config
		 * Delete a data exporter config
		 * Delete api/data-exporter-configs/_bulk
		 * @return {Array<DeletebulkDataExporterConfigReturn>} Successful operation
		 */
		DeletebulkDataExporterConfig(): Observable<Array<DeletebulkDataExporterConfigReturn>> {
			return this.http.delete<Array<DeletebulkDataExporterConfigReturn>>(this.baseUri + 'api/data-exporter-configs/_bulk', {});
		}

		/**
		 * Get all data exporter configs
		 * Get all data exporter configs
		 * Get api/data-exporter-configs/_template
		 * @param {string} type The data exporter config type
		 * @return {DataExporterConfig} Successful operation
		 */
		DataExporterTemplate(type: string | null | undefined): Observable<DataExporterConfig> {
			return this.http.get<DataExporterConfig>(this.baseUri + 'api/data-exporter-configs/_template?type=' + (type == null ? '' : encodeURIComponent(type)), {});
		}

		/**
		 * Delete a data exporter config
		 * Delete a data exporter config
		 * Delete api/data-exporter-configs/{dataExporterConfigId}
		 * @param {string} dataExporterConfigId The data exporter config id
		 * @return {Deleted} Successful operation
		 */
		DeleteDataExporterConfig(dataExporterConfigId: string): Observable<Deleted> {
			return this.http.delete<Deleted>(this.baseUri + 'api/data-exporter-configs/' + (dataExporterConfigId == null ? '' : encodeURIComponent(dataExporterConfigId)), {});
		}

		/**
		 * Get a data exporter config
		 * Get a data exporter config
		 * Get api/data-exporter-configs/{dataExporterConfigId}
		 * @param {string} dataExporterConfigId The data exporter config id
		 * @return {DataExporterConfig} Successful operation
		 */
		FindDataExporterConfigById(dataExporterConfigId: string): Observable<DataExporterConfig> {
			return this.http.get<DataExporterConfig>(this.baseUri + 'api/data-exporter-configs/' + (dataExporterConfigId == null ? '' : encodeURIComponent(dataExporterConfigId)), {});
		}

		/**
		 * Update a data exporter config with a diff
		 * Update a data exporter config with a diff
		 * Patch api/data-exporter-configs/{dataExporterConfigId}
		 * @param {string} dataExporterConfigId The data exporter config id
		 * @return {DataExporterConfig} Successful operation
		 */
		PatchDataExporterConfig(dataExporterConfigId: string, requestBody: Array<PatchDataExporterConfigPatchBody>): Observable<DataExporterConfig> {
			return this.http.patch<DataExporterConfig>(this.baseUri + 'api/data-exporter-configs/' + (dataExporterConfigId == null ? '' : encodeURIComponent(dataExporterConfigId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a data exporter config
		 * Update a data exporter config
		 * Put api/data-exporter-configs/{dataExporterConfigId}
		 * @param {string} dataExporterConfigId The data exporter config id
		 * @return {DataExporterConfig} Successful operation
		 */
		UpdateDataExporterConfig(dataExporterConfigId: string, requestBody: DataExporterConfig): Observable<DataExporterConfig> {
			return this.http.put<DataExporterConfig>(this.baseUri + 'api/data-exporter-configs/' + (dataExporterConfigId == null ? '' : encodeURIComponent(dataExporterConfigId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the full configuration of Otoroshi
		 * Get the full configuration of Otoroshi
		 * Get api/globalconfig
		 * @return {GlobalConfig} Successful operation
		 */
		GlobalConfig(): Observable<GlobalConfig> {
			return this.http.get<GlobalConfig>(this.baseUri + 'api/globalconfig', {});
		}

		/**
		 * Update the global configuration with a diff
		 * Update the global configuration with a diff
		 * Patch api/globalconfig
		 * @return {GlobalConfig} Successful operation
		 */
		PatchGlobalConfig(requestBody: Array<PatchGlobalConfigPatchBody>): Observable<GlobalConfig> {
			return this.http.patch<GlobalConfig>(this.baseUri + 'api/globalconfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the global configuration
		 * Update the global configuration
		 * Put api/globalconfig
		 * @return {GlobalConfig} Successful operation
		 */
		PutGlobalConfig(requestBody: GlobalConfig): Observable<GlobalConfig> {
			return this.http.put<GlobalConfig>(this.baseUri + 'api/globalconfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all service groups
		 * Get all service groups
		 * Get api/groups
		 * @return {Array<Group>} Successful operation
		 */
		AllServiceGroups(): Observable<Array<Group>> {
			return this.http.get<Array<Group>>(this.baseUri + 'api/groups', {});
		}

		/**
		 * Create a new service group
		 * Create a new service group
		 * Post api/groups
		 * @return {Group} Successful operation
		 */
		CreateGroup(requestBody: Group): Observable<Group> {
			return this.http.post<Group>(this.baseUri + 'api/groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all api keys for the group of a service
		 * Get all api keys for the group of a service
		 * Get api/groups/{groupId}/apikeys
		 * @param {string} groupId The api key group id
		 * @return {Array<ApiKey>} Successful operation
		 */
		ApiKeysFromGroup(groupId: string): Observable<Array<ApiKey>> {
			return this.http.get<Array<ApiKey>>(this.baseUri + 'api/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/apikeys', {});
		}

		/**
		 * Create a new api key for a group
		 * Create a new api key for a group
		 * Post api/groups/{groupId}/apikeys
		 * @param {string} groupId The api key group id
		 * @return {ApiKey} Successful operation
		 */
		CreateApiKeyFromGroup(groupId: string, requestBody: ApiKey): Observable<ApiKey> {
			return this.http.post<ApiKey>(this.baseUri + 'api/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/apikeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an api key
		 * Delete an api key for a specified service group
		 * Delete api/groups/{groupId}/apikeys/{clientId}
		 * @param {string} groupId The api key group id
		 * @param {string} clientId the api key id
		 * @return {Deleted} Successful operation
		 */
		DeleteApiKeyFromGroup(groupId: string, clientId: string): Observable<Deleted> {
			return this.http.delete<Deleted>(this.baseUri + 'api/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/apikeys/' + (clientId == null ? '' : encodeURIComponent(clientId)), {});
		}

		/**
		 * Get an api key
		 * Get an api key for a specified service group
		 * Get api/groups/{groupId}/apikeys/{clientId}
		 * @param {string} groupId The api key group id
		 * @param {string} clientId the api key id
		 * @return {ApiKey} Successful operation
		 */
		ApiKeyFromGroup(groupId: string, clientId: string): Observable<ApiKey> {
			return this.http.get<ApiKey>(this.baseUri + 'api/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/apikeys/' + (clientId == null ? '' : encodeURIComponent(clientId)), {});
		}

		/**
		 * Update an api key with a diff
		 * Update an api key for a specified service descriptor with a diff
		 * Patch api/groups/{groupId}/apikeys/{clientId}
		 * @param {string} groupId The api key group id
		 * @param {string} clientId the api key id
		 * @return {ApiKey} Successful operation
		 */
		PatchApiKeyFromGroup(groupId: string, clientId: string, requestBody: Array<PatchApiKeyFromGroupPatchBody>): Observable<ApiKey> {
			return this.http.patch<ApiKey>(this.baseUri + 'api/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/apikeys/' + (clientId == null ? '' : encodeURIComponent(clientId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update an api key
		 * Update an api key for a specified service group
		 * Put api/groups/{groupId}/apikeys/{clientId}
		 * @param {string} groupId The api key group id
		 * @param {string} clientId the api key id
		 * @return {ApiKey} Successful operation
		 */
		UpdateApiKeyFromGroup(groupId: string, clientId: string, requestBody: ApiKey): Observable<ApiKey> {
			return this.http.put<ApiKey>(this.baseUri + 'api/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/apikeys/' + (clientId == null ? '' : encodeURIComponent(clientId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reset the quota state of an api key
		 * Reset the quota state of an api key
		 * Delete api/groups/{groupId}/apikeys/{clientId}/quotas
		 * @param {string} groupId The api key group id
		 * @param {string} clientId the api key id
		 * @return {Quotas} Successful operation
		 */
		ResetApiKeyFromGroupQuotas(groupId: string, clientId: string): Observable<Quotas> {
			return this.http.delete<Quotas>(this.baseUri + 'api/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/apikeys/' + (clientId == null ? '' : encodeURIComponent(clientId)) + '/quotas', {});
		}

		/**
		 * Get the quota state of an api key
		 * Get the quota state of an api key
		 * Get api/groups/{groupId}/apikeys/{clientId}/quotas
		 * @param {string} groupId The api key group id
		 * @param {string} clientId the api key id
		 * @return {Quotas} Successful operation
		 */
		ApiKeyFromGroupQuotas(groupId: string, clientId: string): Observable<Quotas> {
			return this.http.get<Quotas>(this.baseUri + 'api/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/apikeys/' + (clientId == null ? '' : encodeURIComponent(clientId)) + '/quotas', {});
		}

		/**
		 * Delete a service group
		 * Delete a service group
		 * Delete api/groups/{serviceGroupId}
		 * @param {string} serviceGroupId The service group id
		 * @return {Deleted} Successful operation
		 */
		DeleteGroup(serviceGroupId: string): Observable<Deleted> {
			return this.http.delete<Deleted>(this.baseUri + 'api/groups/' + (serviceGroupId == null ? '' : encodeURIComponent(serviceGroupId)), {});
		}

		/**
		 * Get a service group
		 * Get a service group
		 * Get api/groups/{serviceGroupId}
		 * @param {string} serviceGroupId The service group id
		 * @return {Group} Successful operation
		 */
		ServiceGroup(serviceGroupId: string): Observable<Group> {
			return this.http.get<Group>(this.baseUri + 'api/groups/' + (serviceGroupId == null ? '' : encodeURIComponent(serviceGroupId)), {});
		}

		/**
		 * Update a service group with a diff
		 * Update a service group with a diff
		 * Patch api/groups/{serviceGroupId}
		 * @param {string} serviceGroupId The service group id
		 * @return {Group} Successful operation
		 */
		PatchGroup(serviceGroupId: string, requestBody: Array<PatchGroupPatchBody>): Observable<Group> {
			return this.http.patch<Group>(this.baseUri + 'api/groups/' + (serviceGroupId == null ? '' : encodeURIComponent(serviceGroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a service group
		 * Update a service group
		 * Put api/groups/{serviceGroupId}
		 * @param {string} serviceGroupId The service group id
		 * @return {Group} Successful operation
		 */
		UpdateGroup(serviceGroupId: string, requestBody: Group): Observable<Group> {
			return this.http.put<Group>(this.baseUri + 'api/groups/' + (serviceGroupId == null ? '' : encodeURIComponent(serviceGroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all services descriptor for a group
		 * Get all services descriptor for a group
		 * Get api/groups/{serviceGroupId}/services
		 * @param {string} serviceGroupId The service group id
		 * @return {Array<ApiKey>} Successful operation
		 */
		ServiceGroupServices(serviceGroupId: string): Observable<Array<ApiKey>> {
			return this.http.get<Array<ApiKey>>(this.baseUri + 'api/groups/' + (serviceGroupId == null ? '' : encodeURIComponent(serviceGroupId)) + '/services', {});
		}

		/**
		 * Import the full state of Otoroshi as a file
		 * Import the full state of Otoroshi as a file
		 * Post api/import
		 * @return {Done} Successful operation
		 */
		FullImportFromFile(requestBody: ImportExport): Observable<Done> {
			return this.http.post<Done>(this.baseUri + 'api/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get global otoroshi stats
		 * Get global otoroshi stats
		 * Get api/live
		 * @return {Stats} Successful operation
		 */
		GlobalLiveStats(): Observable<Stats> {
			return this.http.get<Stats>(this.baseUri + 'api/live', {});
		}

		/**
		 * Get live feed of otoroshi stats
		 * Get live feed of global otoroshi stats (global) or for a service {id}
		 * Get api/live/{id}
		 * @param {string} id The service id or global for otoroshi stats
		 * @return {Stats} Successful operation
		 */
		ServiceLiveStats(id: string): Observable<Stats> {
			return this.http.get<Stats>(this.baseUri + 'api/live/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Export the full state of Otoroshi
		 * Export the full state of Otoroshi
		 * Get api/otoroshi.json
		 * @return {ImportExport} Successful operation
		 */
		FullExport(): Observable<ImportExport> {
			return this.http.get<ImportExport>(this.baseUri + 'api/otoroshi.json', {});
		}

		/**
		 * Import the full state of Otoroshi
		 * Import the full state of Otoroshi
		 * Post api/otoroshi.json
		 * @return {Done} Successful operation
		 */
		FullImport(requestBody: ImportExport): Observable<Done> {
			return this.http.post<Done>(this.baseUri + 'api/otoroshi.json', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all scripts
		 * Get all scripts
		 * Get api/scripts
		 * @return {Array<Script>} Successful operation
		 */
		FindAllScripts(): Observable<Array<Script>> {
			return this.http.get<Array<Script>>(this.baseUri + 'api/scripts', {});
		}

		/**
		 * Create a new script
		 * Create a new script
		 * Post api/scripts
		 * @return {Script} Successful operation
		 */
		CreateScript(requestBody: Script): Observable<Script> {
			return this.http.post<Script>(this.baseUri + 'api/scripts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Compile a script
		 * Compile a script
		 * Post api/scripts/_compile
		 * @return {ScriptCompilationResult} Successful operation
		 */
		CompileScript(requestBody: Script): Observable<ScriptCompilationResult> {
			return this.http.post<ScriptCompilationResult>(this.baseUri + 'api/scripts/_compile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a script
		 * Delete a script
		 * Delete api/scripts/{scriptId}
		 * @param {string} scriptId The script id
		 * @return {Deleted} Successful operation
		 */
		DeleteScript(scriptId: string): Observable<Deleted> {
			return this.http.delete<Deleted>(this.baseUri + 'api/scripts/' + (scriptId == null ? '' : encodeURIComponent(scriptId)), {});
		}

		/**
		 * Get a script
		 * Get a script
		 * Get api/scripts/{scriptId}
		 * @param {string} scriptId The script id
		 * @return {Script} Successful operation
		 */
		FindScriptById(scriptId: string): Observable<Script> {
			return this.http.get<Script>(this.baseUri + 'api/scripts/' + (scriptId == null ? '' : encodeURIComponent(scriptId)), {});
		}

		/**
		 * Update a script with a diff
		 * Update a script with a diff
		 * Patch api/scripts/{scriptId}
		 * @param {string} scriptId The script id
		 * @return {Script} Successful operation
		 */
		PatchScript(scriptId: string, requestBody: Array<PatchScriptPatchBody>): Observable<Script> {
			return this.http.patch<Script>(this.baseUri + 'api/scripts/' + (scriptId == null ? '' : encodeURIComponent(scriptId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a script
		 * Update a script
		 * Put api/scripts/{scriptId}
		 * @param {string} scriptId The script id
		 * @return {Script} Successful operation
		 */
		UpdateScript(scriptId: string, requestBody: Script): Observable<Script> {
			return this.http.put<Script>(this.baseUri + 'api/scripts/' + (scriptId == null ? '' : encodeURIComponent(scriptId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all services
		 * Get all services
		 * Get api/services
		 * @return {Array<Service>} Successful operation
		 */
		AllServices(): Observable<Array<Service>> {
			return this.http.get<Array<Service>>(this.baseUri + 'api/services', {});
		}

		/**
		 * Create a new service descriptor
		 * Create a new service descriptor
		 * Post api/services
		 * @return {Service} Successful operation
		 */
		CreateService(requestBody: Service): Observable<Service> {
			return this.http.post<Service>(this.baseUri + 'api/services', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a service descriptor
		 * Delete a service descriptor
		 * Delete api/services/{serviceId}
		 * @param {string} serviceId The service id
		 * @return {Deleted} Successful operation
		 */
		DeleteService(serviceId: string): Observable<Deleted> {
			return this.http.delete<Deleted>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)), {});
		}

		/**
		 * Get a service descriptor
		 * Get a service descriptor
		 * Get api/services/{serviceId}
		 * @param {string} serviceId The service id
		 * @return {Service} Successful operation
		 */
		Service(serviceId: string): Observable<Service> {
			return this.http.get<Service>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)), {});
		}

		/**
		 * Update a service descriptor with a diff
		 * Update a service descriptor with a diff
		 * Patch api/services/{serviceId}
		 * @param {string} serviceId The service id
		 * @return {Service} Successful operation
		 */
		PatchService(serviceId: string, requestBody: Array<PatchServicePatchBody>): Observable<Service> {
			return this.http.patch<Service>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a service descriptor
		 * Update a service descriptor
		 * Put api/services/{serviceId}
		 * @param {string} serviceId The service id
		 * @return {Service} Successful operation
		 */
		UpdateService(serviceId: string, requestBody: Service): Observable<Service> {
			return this.http.put<Service>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all api keys for the group of a service
		 * Get all api keys for the group of a service
		 * Get api/services/{serviceId}/apikeys
		 * @param {string} serviceId The api key service id
		 * @return {Array<ApiKey>} Successful operation
		 */
		ApiKeys(serviceId: string): Observable<Array<ApiKey>> {
			return this.http.get<Array<ApiKey>>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/apikeys', {});
		}

		/**
		 * Create a new api key for a service
		 * Post api/services/{serviceId}/apikeys
		 * @param {string} serviceId The api key service id
		 * @return {ApiKey} Successful operation
		 */
		CreateApiKey(serviceId: string, requestBody: ApiKey): Observable<ApiKey> {
			return this.http.post<ApiKey>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/apikeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an api key
		 * Delete an api key for a specified service descriptor
		 * Delete api/services/{serviceId}/apikeys/{clientId}
		 * @param {string} serviceId The api key service id
		 * @param {string} clientId the api key id
		 * @return {Deleted} Successful operation
		 */
		DeleteApiKey(serviceId: string, clientId: string): Observable<Deleted> {
			return this.http.delete<Deleted>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/apikeys/' + (clientId == null ? '' : encodeURIComponent(clientId)), {});
		}

		/**
		 * Get an api key
		 * Get an api key for a specified service descriptor
		 * Get api/services/{serviceId}/apikeys/{clientId}
		 * @param {string} serviceId The api key service id
		 * @param {string} clientId the api key id
		 * @return {ApiKey} Successful operation
		 */
		ApiKey(serviceId: string, clientId: string): Observable<ApiKey> {
			return this.http.get<ApiKey>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/apikeys/' + (clientId == null ? '' : encodeURIComponent(clientId)), {});
		}

		/**
		 * Update an api key with a diff
		 * Update an api key for a specified service descriptor with a diff
		 * Patch api/services/{serviceId}/apikeys/{clientId}
		 * @param {string} serviceId The api key service id
		 * @param {string} clientId the api key id
		 * @return {ApiKey} Successful operation
		 */
		PatchApiKey(serviceId: string, clientId: string, requestBody: Array<PatchApiKeyPatchBody>): Observable<ApiKey> {
			return this.http.patch<ApiKey>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/apikeys/' + (clientId == null ? '' : encodeURIComponent(clientId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update an api key
		 * Update an api key for a specified service descriptor
		 * Put api/services/{serviceId}/apikeys/{clientId}
		 * @param {string} serviceId The api key service id
		 * @param {string} clientId the api key id
		 * @return {ApiKey} Successful operation
		 */
		UpdateApiKey(serviceId: string, clientId: string, requestBody: ApiKey): Observable<ApiKey> {
			return this.http.put<ApiKey>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/apikeys/' + (clientId == null ? '' : encodeURIComponent(clientId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the group of an api key
		 * Get the group of an api key
		 * Get api/services/{serviceId}/apikeys/{clientId}/group
		 * @param {string} serviceId The api key service id
		 * @param {string} clientId the api key id
		 * @return {Group} Successful operation
		 */
		ApiKeyGroup(serviceId: string, clientId: string): Observable<Group> {
			return this.http.get<Group>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/apikeys/' + (clientId == null ? '' : encodeURIComponent(clientId)) + '/group', {});
		}

		/**
		 * Reset the quota state of an api key
		 * Reset the quota state of an api key
		 * Delete api/services/{serviceId}/apikeys/{clientId}/quotas
		 * @param {string} serviceId The api key service id
		 * @param {string} clientId the api key id
		 * @return {Quotas} Successful operation
		 */
		ResetApiKeyQuotas(serviceId: string, clientId: string): Observable<Quotas> {
			return this.http.delete<Quotas>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/apikeys/' + (clientId == null ? '' : encodeURIComponent(clientId)) + '/quotas', {});
		}

		/**
		 * Get the quota state of an api key
		 * Get the quota state of an api key
		 * Get api/services/{serviceId}/apikeys/{clientId}/quotas
		 * @param {string} serviceId The api key service id
		 * @param {string} clientId the api key id
		 * @return {Quotas} Successful operation
		 */
		ApiKeyQuotas(serviceId: string, clientId: string): Observable<Quotas> {
			return this.http.get<Quotas>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/apikeys/' + (clientId == null ? '' : encodeURIComponent(clientId)) + '/quotas', {});
		}

		/**
		 * Delete a service descriptor target
		 * Delete a service descriptor target
		 * Delete api/services/{serviceId}/targets
		 * @param {string} serviceId The service id
		 * @return {Array<Target>} Successful operation
		 */
		ServiceDeleteTarget(serviceId: string): Observable<Array<Target>> {
			return this.http.delete<Array<Target>>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/targets', {});
		}

		/**
		 * Get a service descriptor targets
		 * Get a service descriptor targets
		 * Get api/services/{serviceId}/targets
		 * @param {string} serviceId The service id
		 * @return {Array<Target>} Successful operation
		 */
		ServiceTargets(serviceId: string): Observable<Array<Target>> {
			return this.http.get<Array<Target>>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/targets', {});
		}

		/**
		 * Update a service descriptor targets
		 * Update a service descriptor targets
		 * Patch api/services/{serviceId}/targets
		 * @param {string} serviceId The service id
		 * @return {Array<Target>} Successful operation
		 */
		UpdateServiceTargets(serviceId: string, requestBody: Array<UpdateServiceTargetsPatchBody>): Observable<Array<Target>> {
			return this.http.patch<Array<Target>>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/targets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add a target to a service descriptor
		 * Add a target to a service descriptor
		 * Post api/services/{serviceId}/targets
		 * @param {string} serviceId The service id
		 * @return {Array<Target>} Successful operation
		 */
		ServiceAddTarget(serviceId: string, requestBody: Target): Observable<Array<Target>> {
			return this.http.post<Array<Target>>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/targets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a service descriptor error template
		 * Delete a service descriptor error template
		 * Delete api/services/{serviceId}/template
		 * @param {string} serviceId The service id
		 * @return {Deleted} Successful operation
		 */
		DeleteServiceTemplate(serviceId: string): Observable<Deleted> {
			return this.http.delete<Deleted>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/template', {});
		}

		/**
		 * Get a service descriptor error template
		 * Get a service descriptor error template
		 * Get api/services/{serviceId}/template
		 * @param {string} serviceId The service id
		 * @return {ErrorTemplate} Successful operation
		 */
		ServiceTemplate(serviceId: string): Observable<ErrorTemplate> {
			return this.http.get<ErrorTemplate>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/template', {});
		}

		/**
		 * Create a service descriptor error template
		 * Update a service descriptor targets
		 * Post api/services/{serviceId}/template
		 * @param {string} serviceId The service id
		 * @return {ErrorTemplate} Successful operation
		 */
		CreateServiceTemplate(serviceId: string, requestBody: ErrorTemplate): Observable<ErrorTemplate> {
			return this.http.post<ErrorTemplate>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/template', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update an error template to a service descriptor
		 * Update an error template to a service descriptor
		 * Put api/services/{serviceId}/template
		 * @param {string} serviceId The service id
		 * @return {ErrorTemplate} Successful operation
		 */
		UpdateServiceTemplate(serviceId: string, requestBody: ErrorTemplate): Observable<ErrorTemplate> {
			return this.http.put<ErrorTemplate>(this.baseUri + 'api/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/template', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Start the Snow Monkey
		 * Start the Snow Monkey
		 * Post api/snowmonkey/_start
		 * @return {Done} Successful operation
		 */
		StartSnowMonkey(): Observable<Done> {
			return this.http.post<Done>(this.baseUri + 'api/snowmonkey/_start', null, {});
		}

		/**
		 * Stop the Snow Monkey
		 * Stop the Snow Monkey
		 * Post api/snowmonkey/_stop
		 * @return {Done} Successful operation
		 */
		StopSnowMonkey(): Observable<Done> {
			return this.http.post<Done>(this.baseUri + 'api/snowmonkey/_stop', null, {});
		}

		/**
		 * Get current Snow Monkey config
		 * Get current Snow Monkey config
		 * Get api/snowmonkey/config
		 * @return {SnowMonkeyConfig} Successful operation
		 */
		GetSnowMonkeyConfig(): Observable<SnowMonkeyConfig> {
			return this.http.get<SnowMonkeyConfig>(this.baseUri + 'api/snowmonkey/config', {});
		}

		/**
		 * Update current Snow Monkey config
		 * Update current Snow Monkey config
		 * Patch api/snowmonkey/config
		 * @return {SnowMonkeyConfig} Successful operation
		 */
		PatchSnowMonkey(requestBody: Group): Observable<SnowMonkeyConfig> {
			return this.http.patch<SnowMonkeyConfig>(this.baseUri + 'api/snowmonkey/config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update current Snow Monkey config
		 * Update current Snow Monkey config
		 * Put api/snowmonkey/config
		 * @return {SnowMonkeyConfig} Successful operation
		 */
		UpdateSnowMonkey(requestBody: Group): Observable<SnowMonkeyConfig> {
			return this.http.put<SnowMonkeyConfig>(this.baseUri + 'api/snowmonkey/config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reset Snow Monkey Outages for the day
		 * Reset Snow Monkey Outages for the day
		 * Delete api/snowmonkey/outages
		 * @return {Done} Successful operation
		 */
		ResetSnowMonkey(): Observable<Done> {
			return this.http.delete<Done>(this.baseUri + 'api/snowmonkey/outages', {});
		}

		/**
		 * Get all current Snow Monkey ourages
		 * Get all current Snow Monkey ourages
		 * Get api/snowmonkey/outages
		 * @return {Array<Outage>} Successful operation
		 */
		GetSnowMonkeyOutages(): Observable<Array<Outage>> {
			return this.http.get<Array<Outage>>(this.baseUri + 'api/snowmonkey/outages', {});
		}

		/**
		 * Get all global JWT verifiers
		 * Get all global JWT verifiers
		 * Get api/verifiers
		 * @return {Array<GlobalJwtVerifier>} Successful operation
		 */
		FindAllGlobalJwtVerifiers(): Observable<Array<GlobalJwtVerifier>> {
			return this.http.get<Array<GlobalJwtVerifier>>(this.baseUri + 'api/verifiers', {});
		}

		/**
		 * Create one global JWT verifiers
		 * Create one global JWT verifiers
		 * Post api/verifiers
		 * @return {GlobalJwtVerifier} Successful operation
		 */
		CreateGlobalJwtVerifier(requestBody: GlobalJwtVerifier): Observable<GlobalJwtVerifier> {
			return this.http.post<GlobalJwtVerifier>(this.baseUri + 'api/verifiers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete one global JWT verifiers
		 * Delete one global JWT verifiers
		 * Delete api/verifiers/{verifierId}
		 * @param {string} verifierId The jwt verifier id
		 * @return {Deleted} Successful operation
		 */
		DeleteGlobalJwtVerifier(verifierId: string): Observable<Deleted> {
			return this.http.delete<Deleted>(this.baseUri + 'api/verifiers/' + (verifierId == null ? '' : encodeURIComponent(verifierId)), {});
		}

		/**
		 * Get one global JWT verifiers
		 * Get one global JWT verifiers
		 * Get api/verifiers/{verifierId}
		 * @param {string} verifierId The jwt verifier id
		 * @return {GlobalJwtVerifier} Successful operation
		 */
		FindGlobalJwtVerifiersById(verifierId: string): Observable<GlobalJwtVerifier> {
			return this.http.get<GlobalJwtVerifier>(this.baseUri + 'api/verifiers/' + (verifierId == null ? '' : encodeURIComponent(verifierId)), {});
		}

		/**
		 * Update one global JWT verifiers
		 * Update one global JWT verifiers
		 * Patch api/verifiers/{verifierId}
		 * @param {string} verifierId The jwt verifier id
		 * @return {GlobalJwtVerifier} Successful operation
		 */
		PatchGlobalJwtVerifier(verifierId: string, requestBody: Array<PatchGlobalJwtVerifierPatchBody>): Observable<GlobalJwtVerifier> {
			return this.http.patch<GlobalJwtVerifier>(this.baseUri + 'api/verifiers/' + (verifierId == null ? '' : encodeURIComponent(verifierId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update one global JWT verifiers
		 * Update one global JWT verifiers
		 * Put api/verifiers/{verifierId}
		 * @param {string} verifierId The jwt verifier id
		 * @return {GlobalJwtVerifier} Successful operation
		 */
		UpdateGlobalJwtVerifier(verifierId: string, requestBody: GlobalJwtVerifier): Observable<GlobalJwtVerifier> {
			return this.http.put<GlobalJwtVerifier>(this.baseUri + 'api/verifiers/' + (verifierId == null ? '' : encodeURIComponent(verifierId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return current Otoroshi health
		 * Import the full state of Otoroshi as a file
		 * Get health
		 * @return {OtoroshiHealth} Successful operation
		 */
		Health(): Observable<OtoroshiHealth> {
			return this.http.get<OtoroshiHealth>(this.baseUri + 'health', {});
		}

		/**
		 * Get all environments
		 * Get all environments provided by the current Otoroshi instance
		 * Get lines
		 * @return {string} Successful operation
		 */
		AllLines(): Observable<string> {
			return this.http.get(this.baseUri + 'lines', { responseType: 'text' });
		}

		/**
		 * Get all services for an environment
		 * Get all services for an environment provided by the current Otoroshi instance
		 * Get lines/{line}/services
		 * @param {string} line The environment where to find services
		 * @return {Array<Service>} Successful operation
		 */
		ServicesForALine(line: string): Observable<Array<Service>> {
			return this.http.get<Array<Service>>(this.baseUri + 'lines/' + (line == null ? '' : encodeURIComponent(line)) + '/services', {});
		}

		/**
		 * Get a template of an Otoroshi Api Key
		 * Get a template of an Otoroshi Api Key. The generated entity is not persisted
		 * Get new/apikey
		 * @return {ApiKey} Successful operation
		 */
		InitiateApiKey(): Observable<ApiKey> {
			return this.http.get<ApiKey>(this.baseUri + 'new/apikey', {});
		}

		/**
		 * Get a template of an Otoroshi service group
		 * Get a template of an Otoroshi service group. The generated entity is not persisted
		 * Get new/group
		 * @return {Group} Successful operation
		 */
		InitiateServiceGroup(): Observable<Group> {
			return this.http.get<Group>(this.baseUri + 'new/group', {});
		}

		/**
		 * Get a template of an Otoroshi service descriptor
		 * Get a template of an Otoroshi service descriptor. The generated entity is not persisted
		 * Get new/service
		 * @return {Service} Successful operation
		 */
		InitiateService(): Observable<Service> {
			return this.http.get<Service>(this.baseUri + 'new/service', {});
		}
	}

	export interface PatchGlobalAuthModulePatchBody {

		/** Required */
		op: PatchElementOp;

		/** Required */
		path: string;
		value?: any;
	}
	export interface PatchGlobalAuthModulePatchBodyFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreatePatchGlobalAuthModulePatchBodyFormGroup() {
		return new FormGroup<PatchGlobalAuthModulePatchBodyFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface PatchCertPatchBody {

		/** Required */
		op: PatchElementOp;

		/** Required */
		path: string;
		value?: any;
	}
	export interface PatchCertPatchBodyFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreatePatchCertPatchBodyFormGroup() {
		return new FormGroup<PatchCertPatchBodyFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface PatchClientValidatorPatchBody {

		/** Required */
		op: PatchElementOp;

		/** Required */
		path: string;
		value?: any;
	}
	export interface PatchClientValidatorPatchBodyFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreatePatchClientValidatorPatchBodyFormGroup() {
		return new FormGroup<PatchClientValidatorPatchBodyFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface DeletebulkDataExporterConfigReturn {

		/** Whether the action was carried out correctly or not */
		deleted?: boolean | null;

		/** Data exporter id */
		id?: boolean | null;

		/** Status */
		status?: DeletebulkDataExporterConfigReturnStatus | null;
	}
	export interface DeletebulkDataExporterConfigReturnFormProperties {

		/** Whether the action was carried out correctly or not */
		deleted: FormControl<boolean | null | undefined>,

		/** Data exporter id */
		id: FormControl<boolean | null | undefined>,

		/** Status */
		status: FormControl<DeletebulkDataExporterConfigReturnStatus | null | undefined>,
	}
	export function CreateDeletebulkDataExporterConfigReturnFormGroup() {
		return new FormGroup<DeletebulkDataExporterConfigReturnFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<DeletebulkDataExporterConfigReturnStatus | null | undefined>(undefined),
		});

	}

	export enum DeletebulkDataExporterConfigReturnStatus { _200 = '200' }

	export interface PatchDataExporterConfigPatchBody {

		/** Required */
		op: PatchElementOp;

		/** Required */
		path: string;
		value?: any;
	}
	export interface PatchDataExporterConfigPatchBodyFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreatePatchDataExporterConfigPatchBodyFormGroup() {
		return new FormGroup<PatchDataExporterConfigPatchBodyFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface PatchGlobalConfigPatchBody {

		/** Required */
		op: PatchElementOp;

		/** Required */
		path: string;
		value?: any;
	}
	export interface PatchGlobalConfigPatchBodyFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreatePatchGlobalConfigPatchBodyFormGroup() {
		return new FormGroup<PatchGlobalConfigPatchBodyFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface PatchApiKeyFromGroupPatchBody {

		/** Required */
		op: PatchElementOp;

		/** Required */
		path: string;
		value?: any;
	}
	export interface PatchApiKeyFromGroupPatchBodyFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreatePatchApiKeyFromGroupPatchBodyFormGroup() {
		return new FormGroup<PatchApiKeyFromGroupPatchBodyFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface PatchGroupPatchBody {

		/** Required */
		op: PatchElementOp;

		/** Required */
		path: string;
		value?: any;
	}
	export interface PatchGroupPatchBodyFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreatePatchGroupPatchBodyFormGroup() {
		return new FormGroup<PatchGroupPatchBodyFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface PatchScriptPatchBody {

		/** Required */
		op: PatchElementOp;

		/** Required */
		path: string;
		value?: any;
	}
	export interface PatchScriptPatchBodyFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreatePatchScriptPatchBodyFormGroup() {
		return new FormGroup<PatchScriptPatchBodyFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface PatchServicePatchBody {

		/** Required */
		op: PatchElementOp;

		/** Required */
		path: string;
		value?: any;
	}
	export interface PatchServicePatchBodyFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreatePatchServicePatchBodyFormGroup() {
		return new FormGroup<PatchServicePatchBodyFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface PatchApiKeyPatchBody {

		/** Required */
		op: PatchElementOp;

		/** Required */
		path: string;
		value?: any;
	}
	export interface PatchApiKeyPatchBodyFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreatePatchApiKeyPatchBodyFormGroup() {
		return new FormGroup<PatchApiKeyPatchBodyFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface UpdateServiceTargetsPatchBody {

		/** Required */
		op: PatchElementOp;

		/** Required */
		path: string;
		value?: any;
	}
	export interface UpdateServiceTargetsPatchBodyFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreateUpdateServiceTargetsPatchBodyFormGroup() {
		return new FormGroup<UpdateServiceTargetsPatchBodyFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface PatchGlobalJwtVerifierPatchBody {

		/** Required */
		op: PatchElementOp;

		/** Required */
		path: string;
		value?: any;
	}
	export interface PatchGlobalJwtVerifierPatchBodyFormProperties {

		/** Required */
		op: FormControl<PatchElementOp | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreatePatchGlobalJwtVerifierPatchBodyFormGroup() {
		return new FormGroup<PatchGlobalJwtVerifierPatchBodyFormProperties>({
			op: new FormControl<PatchElementOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

}

