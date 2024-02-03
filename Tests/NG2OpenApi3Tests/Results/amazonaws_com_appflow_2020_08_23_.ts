import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelFlowExecutionsResponse {
		invalidExecutions?: Array<string>;
	}
	export interface CancelFlowExecutionsResponseFormProperties {
	}
	export function CreateCancelFlowExecutionsResponseFormGroup() {
		return new FormGroup<CancelFlowExecutionsResponseFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface CreateConnectorProfileResponse {
		connectorProfileArn?: string;
	}
	export interface CreateConnectorProfileResponseFormProperties {
		connectorProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectorProfileResponseFormGroup() {
		return new FormGroup<CreateConnectorProfileResponseFormProperties>({
			connectorProfileArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The connector-specific profile properties required by each connector.  */
	export interface ConnectorProfileProperties {
		Amplitude?: AmplitudeConnectorProfileProperties;
		Datadog?: DatadogConnectorProfileProperties;
		Dynatrace?: DynatraceConnectorProfileProperties;
		GoogleAnalytics?: GoogleAnalyticsConnectorProfileProperties;
		Honeycode?: HoneycodeConnectorProfileProperties;
		InforNexus?: InforNexusConnectorProfileProperties;
		Marketo?: MarketoConnectorProfileProperties;
		Redshift?: RedshiftConnectorProfileProperties;
		Salesforce?: SalesforceConnectorProfileProperties;
		ServiceNow?: ServiceNowConnectorProfileProperties;
		Singular?: SingularConnectorProfileProperties;
		Slack?: SlackConnectorProfileProperties;
		Snowflake?: SnowflakeConnectorProfileProperties;
		Trendmicro?: TrendmicroConnectorProfileProperties;
		Veeva?: VeevaConnectorProfileProperties;
		Zendesk?: ZendeskConnectorProfileProperties;

		/** The connector-specific profile properties required when using SAPOData. */
		SAPOData?: SAPODataConnectorProfileProperties;
		CustomConnector?: CustomConnectorProfileProperties;
		Pardot?: PardotConnectorProfileProperties;
	}

	/**  The connector-specific profile properties required by each connector.  */
	export interface ConnectorProfilePropertiesFormProperties {
	}
	export function CreateConnectorProfilePropertiesFormGroup() {
		return new FormGroup<ConnectorProfilePropertiesFormProperties>({
		});

	}


	/**  The connector-specific profile properties required when using Amplitude.  */
	export interface AmplitudeConnectorProfileProperties {
	}

	/**  The connector-specific profile properties required when using Amplitude.  */
	export interface AmplitudeConnectorProfilePropertiesFormProperties {
	}
	export function CreateAmplitudeConnectorProfilePropertiesFormGroup() {
		return new FormGroup<AmplitudeConnectorProfilePropertiesFormProperties>({
		});

	}


	/**  The connector-specific profile properties required by Datadog.  */
	export interface DatadogConnectorProfileProperties {

		/** Required */
		instanceUrl: string;
	}

	/**  The connector-specific profile properties required by Datadog.  */
	export interface DatadogConnectorProfilePropertiesFormProperties {

		/** Required */
		instanceUrl: FormControl<string | null | undefined>,
	}
	export function CreateDatadogConnectorProfilePropertiesFormGroup() {
		return new FormGroup<DatadogConnectorProfilePropertiesFormProperties>({
			instanceUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile properties required by Dynatrace.  */
	export interface DynatraceConnectorProfileProperties {

		/** Required */
		instanceUrl: string;
	}

	/**  The connector-specific profile properties required by Dynatrace.  */
	export interface DynatraceConnectorProfilePropertiesFormProperties {

		/** Required */
		instanceUrl: FormControl<string | null | undefined>,
	}
	export function CreateDynatraceConnectorProfilePropertiesFormGroup() {
		return new FormGroup<DynatraceConnectorProfilePropertiesFormProperties>({
			instanceUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile properties required by Google Analytics.  */
	export interface GoogleAnalyticsConnectorProfileProperties {
	}

	/**  The connector-specific profile properties required by Google Analytics.  */
	export interface GoogleAnalyticsConnectorProfilePropertiesFormProperties {
	}
	export function CreateGoogleAnalyticsConnectorProfilePropertiesFormGroup() {
		return new FormGroup<GoogleAnalyticsConnectorProfilePropertiesFormProperties>({
		});

	}


	/**  The connector-specific properties required when using Amazon Honeycode.  */
	export interface HoneycodeConnectorProfileProperties {
	}

	/**  The connector-specific properties required when using Amazon Honeycode.  */
	export interface HoneycodeConnectorProfilePropertiesFormProperties {
	}
	export function CreateHoneycodeConnectorProfilePropertiesFormGroup() {
		return new FormGroup<HoneycodeConnectorProfilePropertiesFormProperties>({
		});

	}


	/**  The connector-specific profile properties required by Infor Nexus.  */
	export interface InforNexusConnectorProfileProperties {

		/** Required */
		instanceUrl: string;
	}

	/**  The connector-specific profile properties required by Infor Nexus.  */
	export interface InforNexusConnectorProfilePropertiesFormProperties {

		/** Required */
		instanceUrl: FormControl<string | null | undefined>,
	}
	export function CreateInforNexusConnectorProfilePropertiesFormGroup() {
		return new FormGroup<InforNexusConnectorProfilePropertiesFormProperties>({
			instanceUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile properties required when using Marketo.  */
	export interface MarketoConnectorProfileProperties {

		/** Required */
		instanceUrl: string;
	}

	/**  The connector-specific profile properties required when using Marketo.  */
	export interface MarketoConnectorProfilePropertiesFormProperties {

		/** Required */
		instanceUrl: FormControl<string | null | undefined>,
	}
	export function CreateMarketoConnectorProfilePropertiesFormGroup() {
		return new FormGroup<MarketoConnectorProfilePropertiesFormProperties>({
			instanceUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile properties when using Amazon Redshift.  */
	export interface RedshiftConnectorProfileProperties {
		databaseUrl?: string;

		/** Required */
		bucketName: string;
		bucketPrefix?: string;

		/** Required */
		roleArn: string;
		dataApiRoleArn?: string;
		isRedshiftServerless?: boolean | null;
		clusterIdentifier?: string;
		workgroupName?: string;
		databaseName?: string;
	}

	/**  The connector-specific profile properties when using Amazon Redshift.  */
	export interface RedshiftConnectorProfilePropertiesFormProperties {
		databaseUrl: FormControl<string | null | undefined>,

		/** Required */
		bucketName: FormControl<string | null | undefined>,
		bucketPrefix: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		dataApiRoleArn: FormControl<string | null | undefined>,
		isRedshiftServerless: FormControl<boolean | null | undefined>,
		clusterIdentifier: FormControl<string | null | undefined>,
		workgroupName: FormControl<string | null | undefined>,
		databaseName: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftConnectorProfilePropertiesFormGroup() {
		return new FormGroup<RedshiftConnectorProfilePropertiesFormProperties>({
			databaseUrl: new FormControl<string | null | undefined>(undefined),
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bucketPrefix: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataApiRoleArn: new FormControl<string | null | undefined>(undefined),
			isRedshiftServerless: new FormControl<boolean | null | undefined>(undefined),
			clusterIdentifier: new FormControl<string | null | undefined>(undefined),
			workgroupName: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The connector-specific profile properties required when using Salesforce.  */
	export interface SalesforceConnectorProfileProperties {
		instanceUrl?: string;
		isSandboxEnvironment?: boolean | null;
		usePrivateLinkForMetadataAndAuthorization?: boolean | null;
	}

	/**  The connector-specific profile properties required when using Salesforce.  */
	export interface SalesforceConnectorProfilePropertiesFormProperties {
		instanceUrl: FormControl<string | null | undefined>,
		isSandboxEnvironment: FormControl<boolean | null | undefined>,
		usePrivateLinkForMetadataAndAuthorization: FormControl<boolean | null | undefined>,
	}
	export function CreateSalesforceConnectorProfilePropertiesFormGroup() {
		return new FormGroup<SalesforceConnectorProfilePropertiesFormProperties>({
			instanceUrl: new FormControl<string | null | undefined>(undefined),
			isSandboxEnvironment: new FormControl<boolean | null | undefined>(undefined),
			usePrivateLinkForMetadataAndAuthorization: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  The connector-specific profile properties required when using ServiceNow.  */
	export interface ServiceNowConnectorProfileProperties {

		/** Required */
		instanceUrl: string;
	}

	/**  The connector-specific profile properties required when using ServiceNow.  */
	export interface ServiceNowConnectorProfilePropertiesFormProperties {

		/** Required */
		instanceUrl: FormControl<string | null | undefined>,
	}
	export function CreateServiceNowConnectorProfilePropertiesFormGroup() {
		return new FormGroup<ServiceNowConnectorProfilePropertiesFormProperties>({
			instanceUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile properties required when using Singular.  */
	export interface SingularConnectorProfileProperties {
	}

	/**  The connector-specific profile properties required when using Singular.  */
	export interface SingularConnectorProfilePropertiesFormProperties {
	}
	export function CreateSingularConnectorProfilePropertiesFormGroup() {
		return new FormGroup<SingularConnectorProfilePropertiesFormProperties>({
		});

	}


	/**  The connector-specific profile properties required when using Slack.  */
	export interface SlackConnectorProfileProperties {

		/** Required */
		instanceUrl: string;
	}

	/**  The connector-specific profile properties required when using Slack.  */
	export interface SlackConnectorProfilePropertiesFormProperties {

		/** Required */
		instanceUrl: FormControl<string | null | undefined>,
	}
	export function CreateSlackConnectorProfilePropertiesFormGroup() {
		return new FormGroup<SlackConnectorProfilePropertiesFormProperties>({
			instanceUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile properties required when using Snowflake.  */
	export interface SnowflakeConnectorProfileProperties {

		/** Required */
		warehouse: string;

		/** Required */
		stage: string;

		/** Required */
		bucketName: string;
		bucketPrefix?: string;
		privateLinkServiceName?: string;
		accountName?: string;
		region?: string;
	}

	/**  The connector-specific profile properties required when using Snowflake.  */
	export interface SnowflakeConnectorProfilePropertiesFormProperties {

		/** Required */
		warehouse: FormControl<string | null | undefined>,

		/** Required */
		stage: FormControl<string | null | undefined>,

		/** Required */
		bucketName: FormControl<string | null | undefined>,
		bucketPrefix: FormControl<string | null | undefined>,
		privateLinkServiceName: FormControl<string | null | undefined>,
		accountName: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
	}
	export function CreateSnowflakeConnectorProfilePropertiesFormGroup() {
		return new FormGroup<SnowflakeConnectorProfilePropertiesFormProperties>({
			warehouse: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bucketPrefix: new FormControl<string | null | undefined>(undefined),
			privateLinkServiceName: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The connector-specific profile properties required when using Trend Micro.  */
	export interface TrendmicroConnectorProfileProperties {
	}

	/**  The connector-specific profile properties required when using Trend Micro.  */
	export interface TrendmicroConnectorProfilePropertiesFormProperties {
	}
	export function CreateTrendmicroConnectorProfilePropertiesFormGroup() {
		return new FormGroup<TrendmicroConnectorProfilePropertiesFormProperties>({
		});

	}


	/**  The connector-specific profile properties required when using Veeva.  */
	export interface VeevaConnectorProfileProperties {

		/** Required */
		instanceUrl: string;
	}

	/**  The connector-specific profile properties required when using Veeva.  */
	export interface VeevaConnectorProfilePropertiesFormProperties {

		/** Required */
		instanceUrl: FormControl<string | null | undefined>,
	}
	export function CreateVeevaConnectorProfilePropertiesFormGroup() {
		return new FormGroup<VeevaConnectorProfilePropertiesFormProperties>({
			instanceUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile properties required when using Zendesk.  */
	export interface ZendeskConnectorProfileProperties {

		/** Required */
		instanceUrl: string;
	}

	/**  The connector-specific profile properties required when using Zendesk.  */
	export interface ZendeskConnectorProfilePropertiesFormProperties {

		/** Required */
		instanceUrl: FormControl<string | null | undefined>,
	}
	export function CreateZendeskConnectorProfilePropertiesFormGroup() {
		return new FormGroup<ZendeskConnectorProfilePropertiesFormProperties>({
			instanceUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile properties required when using SAPOData.  */
	export interface SAPODataConnectorProfileProperties {

		/** Required */
		applicationHostUrl: string;

		/** Required */
		applicationServicePath: string;

		/** Required */
		portNumber: number;

		/** Required */
		clientNumber: string;
		logonLanguage?: string;
		privateLinkServiceName?: string;
		oAuthProperties?: OAuthProperties;
		disableSSO?: boolean | null;
	}

	/**  The connector-specific profile properties required when using SAPOData.  */
	export interface SAPODataConnectorProfilePropertiesFormProperties {

		/** Required */
		applicationHostUrl: FormControl<string | null | undefined>,

		/** Required */
		applicationServicePath: FormControl<string | null | undefined>,

		/** Required */
		portNumber: FormControl<number | null | undefined>,

		/** Required */
		clientNumber: FormControl<string | null | undefined>,
		logonLanguage: FormControl<string | null | undefined>,
		privateLinkServiceName: FormControl<string | null | undefined>,
		disableSSO: FormControl<boolean | null | undefined>,
	}
	export function CreateSAPODataConnectorProfilePropertiesFormGroup() {
		return new FormGroup<SAPODataConnectorProfilePropertiesFormProperties>({
			applicationHostUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationServicePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			clientNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logonLanguage: new FormControl<string | null | undefined>(undefined),
			privateLinkServiceName: new FormControl<string | null | undefined>(undefined),
			disableSSO: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  The OAuth properties required for OAuth type authentication.  */
	export interface OAuthProperties {

		/** Required */
		tokenUrl: string;

		/** Required */
		authCodeUrl: string;

		/** Required */
		oAuthScopes: Array<string>;
	}

	/**  The OAuth properties required for OAuth type authentication.  */
	export interface OAuthPropertiesFormProperties {

		/** Required */
		tokenUrl: FormControl<string | null | undefined>,

		/** Required */
		authCodeUrl: FormControl<string | null | undefined>,
	}
	export function CreateOAuthPropertiesFormGroup() {
		return new FormGroup<OAuthPropertiesFormProperties>({
			tokenUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authCodeUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The profile properties required by the custom connector. */
	export interface CustomConnectorProfileProperties {
		profileProperties?: ProfilePropertiesMap;

		/** The OAuth 2.0 properties required for OAuth 2.0 authentication. */
		oAuth2Properties?: OAuth2Properties;
	}

	/** The profile properties required by the custom connector. */
	export interface CustomConnectorProfilePropertiesFormProperties {
	}
	export function CreateCustomConnectorProfilePropertiesFormGroup() {
		return new FormGroup<CustomConnectorProfilePropertiesFormProperties>({
		});

	}

	export interface ProfilePropertiesMap {
	}
	export interface ProfilePropertiesMapFormProperties {
	}
	export function CreateProfilePropertiesMapFormGroup() {
		return new FormGroup<ProfilePropertiesMapFormProperties>({
		});

	}


	/** The OAuth 2.0 properties required for OAuth 2.0 authentication. */
	export interface OAuth2Properties {

		/** Required */
		tokenUrl: string;

		/** Required */
		oAuth2GrantType: OAuth2GrantType;
		tokenUrlCustomProperties?: TokenUrlCustomProperties;
	}

	/** The OAuth 2.0 properties required for OAuth 2.0 authentication. */
	export interface OAuth2PropertiesFormProperties {

		/** Required */
		tokenUrl: FormControl<string | null | undefined>,

		/** Required */
		oAuth2GrantType: FormControl<OAuth2GrantType | null | undefined>,
	}
	export function CreateOAuth2PropertiesFormGroup() {
		return new FormGroup<OAuth2PropertiesFormProperties>({
			tokenUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			oAuth2GrantType: new FormControl<OAuth2GrantType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OAuth2GrantType { CLIENT_CREDENTIALS = 'CLIENT_CREDENTIALS', AUTHORIZATION_CODE = 'AUTHORIZATION_CODE', JWT_BEARER = 'JWT_BEARER' }

	export interface TokenUrlCustomProperties {
	}
	export interface TokenUrlCustomPropertiesFormProperties {
	}
	export function CreateTokenUrlCustomPropertiesFormGroup() {
		return new FormGroup<TokenUrlCustomPropertiesFormProperties>({
		});

	}


	/** The connector-specific profile properties required when using Salesforce Pardot. */
	export interface PardotConnectorProfileProperties {
		instanceUrl?: string;
		isSandboxEnvironment?: boolean | null;
		businessUnitId?: string;
	}

	/** The connector-specific profile properties required when using Salesforce Pardot. */
	export interface PardotConnectorProfilePropertiesFormProperties {
		instanceUrl: FormControl<string | null | undefined>,
		isSandboxEnvironment: FormControl<boolean | null | undefined>,
		businessUnitId: FormControl<string | null | undefined>,
	}
	export function CreatePardotConnectorProfilePropertiesFormGroup() {
		return new FormGroup<PardotConnectorProfilePropertiesFormProperties>({
			instanceUrl: new FormControl<string | null | undefined>(undefined),
			isSandboxEnvironment: new FormControl<boolean | null | undefined>(undefined),
			businessUnitId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The connector-specific credentials required by a connector.  */
	export interface ConnectorProfileCredentials {
		Amplitude?: AmplitudeConnectorProfileCredentials;
		Datadog?: DatadogConnectorProfileCredentials;
		Dynatrace?: DynatraceConnectorProfileCredentials;
		GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials;
		Honeycode?: HoneycodeConnectorProfileCredentials;
		InforNexus?: InforNexusConnectorProfileCredentials;
		Marketo?: MarketoConnectorProfileCredentials;
		Redshift?: RedshiftConnectorProfileCredentials;
		Salesforce?: SalesforceConnectorProfileCredentials;
		ServiceNow?: ServiceNowConnectorProfileCredentials;
		Singular?: SingularConnectorProfileCredentials;
		Slack?: SlackConnectorProfileCredentials;
		Snowflake?: SnowflakeConnectorProfileCredentials;
		Trendmicro?: TrendmicroConnectorProfileCredentials;
		Veeva?: VeevaConnectorProfileCredentials;
		Zendesk?: ZendeskConnectorProfileCredentials;

		/** The connector-specific profile credentials required when using SAPOData. */
		SAPOData?: SAPODataConnectorProfileCredentials;

		/** The connector-specific profile credentials that are required when using the custom connector. */
		CustomConnector?: CustomConnectorProfileCredentials;
		Pardot?: PardotConnectorProfileCredentials;
	}

	/**  The connector-specific credentials required by a connector.  */
	export interface ConnectorProfileCredentialsFormProperties {
	}
	export function CreateConnectorProfileCredentialsFormGroup() {
		return new FormGroup<ConnectorProfileCredentialsFormProperties>({
		});

	}


	/**  The connector-specific credentials required when using Amplitude.  */
	export interface AmplitudeConnectorProfileCredentials {

		/** Required */
		apiKey: string;

		/** Required */
		secretKey: string;
	}

	/**  The connector-specific credentials required when using Amplitude.  */
	export interface AmplitudeConnectorProfileCredentialsFormProperties {

		/** Required */
		apiKey: FormControl<string | null | undefined>,

		/** Required */
		secretKey: FormControl<string | null | undefined>,
	}
	export function CreateAmplitudeConnectorProfileCredentialsFormGroup() {
		return new FormGroup<AmplitudeConnectorProfileCredentialsFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific credentials required by Datadog.  */
	export interface DatadogConnectorProfileCredentials {

		/** Required */
		apiKey: string;

		/** Required */
		applicationKey: string;
	}

	/**  The connector-specific credentials required by Datadog.  */
	export interface DatadogConnectorProfileCredentialsFormProperties {

		/** Required */
		apiKey: FormControl<string | null | undefined>,

		/** Required */
		applicationKey: FormControl<string | null | undefined>,
	}
	export function CreateDatadogConnectorProfileCredentialsFormGroup() {
		return new FormGroup<DatadogConnectorProfileCredentialsFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile credentials required by Dynatrace.  */
	export interface DynatraceConnectorProfileCredentials {

		/** Required */
		apiToken: string;
	}

	/**  The connector-specific profile credentials required by Dynatrace.  */
	export interface DynatraceConnectorProfileCredentialsFormProperties {

		/** Required */
		apiToken: FormControl<string | null | undefined>,
	}
	export function CreateDynatraceConnectorProfileCredentialsFormGroup() {
		return new FormGroup<DynatraceConnectorProfileCredentialsFormProperties>({
			apiToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile credentials required by Google Analytics.  */
	export interface GoogleAnalyticsConnectorProfileCredentials {

		/** Required */
		clientId: string;

		/** Required */
		clientSecret: string;
		accessToken?: string;
		refreshToken?: string;
		oAuthRequest?: ConnectorOAuthRequest;
	}

	/**  The connector-specific profile credentials required by Google Analytics.  */
	export interface GoogleAnalyticsConnectorProfileCredentialsFormProperties {

		/** Required */
		clientId: FormControl<string | null | undefined>,

		/** Required */
		clientSecret: FormControl<string | null | undefined>,
		accessToken: FormControl<string | null | undefined>,
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsConnectorProfileCredentialsFormGroup() {
		return new FormGroup<GoogleAnalyticsConnectorProfileCredentialsFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accessToken: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.  */
	export interface ConnectorOAuthRequest {
		authCode?: string;
		redirectUri?: string;
	}

	/**  Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.  */
	export interface ConnectorOAuthRequestFormProperties {
		authCode: FormControl<string | null | undefined>,
		redirectUri: FormControl<string | null | undefined>,
	}
	export function CreateConnectorOAuthRequestFormGroup() {
		return new FormGroup<ConnectorOAuthRequestFormProperties>({
			authCode: new FormControl<string | null | undefined>(undefined),
			redirectUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The connector-specific credentials required when using Amazon Honeycode.  */
	export interface HoneycodeConnectorProfileCredentials {
		accessToken?: string;
		refreshToken?: string;

		/** Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. */
		oAuthRequest?: ConnectorOAuthRequest;
	}

	/**  The connector-specific credentials required when using Amazon Honeycode.  */
	export interface HoneycodeConnectorProfileCredentialsFormProperties {
		accessToken: FormControl<string | null | undefined>,
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateHoneycodeConnectorProfileCredentialsFormGroup() {
		return new FormGroup<HoneycodeConnectorProfileCredentialsFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The connector-specific profile credentials required by Infor Nexus.  */
	export interface InforNexusConnectorProfileCredentials {

		/** Required */
		accessKeyId: string;

		/** Required */
		userId: string;

		/** Required */
		secretAccessKey: string;

		/** Required */
		datakey: string;
	}

	/**  The connector-specific profile credentials required by Infor Nexus.  */
	export interface InforNexusConnectorProfileCredentialsFormProperties {

		/** Required */
		accessKeyId: FormControl<string | null | undefined>,

		/** Required */
		userId: FormControl<string | null | undefined>,

		/** Required */
		secretAccessKey: FormControl<string | null | undefined>,

		/** Required */
		datakey: FormControl<string | null | undefined>,
	}
	export function CreateInforNexusConnectorProfileCredentialsFormGroup() {
		return new FormGroup<InforNexusConnectorProfileCredentialsFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretAccessKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datakey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile credentials required by Marketo.  */
	export interface MarketoConnectorProfileCredentials {

		/** Required */
		clientId: string;

		/** Required */
		clientSecret: string;
		accessToken?: string;
		oAuthRequest?: ConnectorOAuthRequest;
	}

	/**  The connector-specific profile credentials required by Marketo.  */
	export interface MarketoConnectorProfileCredentialsFormProperties {

		/** Required */
		clientId: FormControl<string | null | undefined>,

		/** Required */
		clientSecret: FormControl<string | null | undefined>,
		accessToken: FormControl<string | null | undefined>,
	}
	export function CreateMarketoConnectorProfileCredentialsFormGroup() {
		return new FormGroup<MarketoConnectorProfileCredentialsFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accessToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The connector-specific profile credentials required when using Amazon Redshift.  */
	export interface RedshiftConnectorProfileCredentials {
		username?: string;
		password?: string;
	}

	/**  The connector-specific profile credentials required when using Amazon Redshift.  */
	export interface RedshiftConnectorProfileCredentialsFormProperties {
		username: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftConnectorProfileCredentialsFormGroup() {
		return new FormGroup<RedshiftConnectorProfileCredentialsFormProperties>({
			username: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The connector-specific profile credentials required when using Salesforce.  */
	export interface SalesforceConnectorProfileCredentials {
		accessToken?: string;
		refreshToken?: string;
		oAuthRequest?: ConnectorOAuthRequest;
		clientCredentialsArn?: string;
		oAuth2GrantType?: OAuth2GrantType;
		jwtToken?: string;
	}

	/**  The connector-specific profile credentials required when using Salesforce.  */
	export interface SalesforceConnectorProfileCredentialsFormProperties {
		accessToken: FormControl<string | null | undefined>,
		refreshToken: FormControl<string | null | undefined>,
		clientCredentialsArn: FormControl<string | null | undefined>,
		oAuth2GrantType: FormControl<OAuth2GrantType | null | undefined>,
		jwtToken: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceConnectorProfileCredentialsFormGroup() {
		return new FormGroup<SalesforceConnectorProfileCredentialsFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
			clientCredentialsArn: new FormControl<string | null | undefined>(undefined),
			oAuth2GrantType: new FormControl<OAuth2GrantType | null | undefined>(undefined),
			jwtToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The connector-specific profile credentials required when using ServiceNow.  */
	export interface ServiceNowConnectorProfileCredentials {

		/** Required */
		username: string;

		/** Required */
		password: string;
	}

	/**  The connector-specific profile credentials required when using ServiceNow.  */
	export interface ServiceNowConnectorProfileCredentialsFormProperties {

		/** Required */
		username: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,
	}
	export function CreateServiceNowConnectorProfileCredentialsFormGroup() {
		return new FormGroup<ServiceNowConnectorProfileCredentialsFormProperties>({
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile credentials required when using Singular.  */
	export interface SingularConnectorProfileCredentials {

		/** Required */
		apiKey: string;
	}

	/**  The connector-specific profile credentials required when using Singular.  */
	export interface SingularConnectorProfileCredentialsFormProperties {

		/** Required */
		apiKey: FormControl<string | null | undefined>,
	}
	export function CreateSingularConnectorProfileCredentialsFormGroup() {
		return new FormGroup<SingularConnectorProfileCredentialsFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile credentials required when using Slack.  */
	export interface SlackConnectorProfileCredentials {

		/** Required */
		clientId: string;

		/** Required */
		clientSecret: string;
		accessToken?: string;
		oAuthRequest?: ConnectorOAuthRequest;
	}

	/**  The connector-specific profile credentials required when using Slack.  */
	export interface SlackConnectorProfileCredentialsFormProperties {

		/** Required */
		clientId: FormControl<string | null | undefined>,

		/** Required */
		clientSecret: FormControl<string | null | undefined>,
		accessToken: FormControl<string | null | undefined>,
	}
	export function CreateSlackConnectorProfileCredentialsFormGroup() {
		return new FormGroup<SlackConnectorProfileCredentialsFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accessToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The connector-specific profile credentials required when using Snowflake.  */
	export interface SnowflakeConnectorProfileCredentials {

		/** Required */
		username: string;

		/** Required */
		password: string;
	}

	/**  The connector-specific profile credentials required when using Snowflake.  */
	export interface SnowflakeConnectorProfileCredentialsFormProperties {

		/** Required */
		username: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,
	}
	export function CreateSnowflakeConnectorProfileCredentialsFormGroup() {
		return new FormGroup<SnowflakeConnectorProfileCredentialsFormProperties>({
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile credentials required when using Trend Micro.  */
	export interface TrendmicroConnectorProfileCredentials {

		/** Required */
		apiSecretKey: string;
	}

	/**  The connector-specific profile credentials required when using Trend Micro.  */
	export interface TrendmicroConnectorProfileCredentialsFormProperties {

		/** Required */
		apiSecretKey: FormControl<string | null | undefined>,
	}
	export function CreateTrendmicroConnectorProfileCredentialsFormGroup() {
		return new FormGroup<TrendmicroConnectorProfileCredentialsFormProperties>({
			apiSecretKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile credentials required when using Veeva.  */
	export interface VeevaConnectorProfileCredentials {

		/** Required */
		username: string;

		/** Required */
		password: string;
	}

	/**  The connector-specific profile credentials required when using Veeva.  */
	export interface VeevaConnectorProfileCredentialsFormProperties {

		/** Required */
		username: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,
	}
	export function CreateVeevaConnectorProfileCredentialsFormGroup() {
		return new FormGroup<VeevaConnectorProfileCredentialsFormProperties>({
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The connector-specific profile credentials required when using Zendesk.  */
	export interface ZendeskConnectorProfileCredentials {

		/** Required */
		clientId: string;

		/** Required */
		clientSecret: string;
		accessToken?: string;
		oAuthRequest?: ConnectorOAuthRequest;
	}

	/**  The connector-specific profile credentials required when using Zendesk.  */
	export interface ZendeskConnectorProfileCredentialsFormProperties {

		/** Required */
		clientId: FormControl<string | null | undefined>,

		/** Required */
		clientSecret: FormControl<string | null | undefined>,
		accessToken: FormControl<string | null | undefined>,
	}
	export function CreateZendeskConnectorProfileCredentialsFormGroup() {
		return new FormGroup<ZendeskConnectorProfileCredentialsFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accessToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The connector-specific profile credentials required when using SAPOData.  */
	export interface SAPODataConnectorProfileCredentials {
		basicAuthCredentials?: BasicAuthCredentials;
		oAuthCredentials?: OAuthCredentials;
	}

	/**  The connector-specific profile credentials required when using SAPOData.  */
	export interface SAPODataConnectorProfileCredentialsFormProperties {
	}
	export function CreateSAPODataConnectorProfileCredentialsFormGroup() {
		return new FormGroup<SAPODataConnectorProfileCredentialsFormProperties>({
		});

	}


	/**  The basic auth credentials required for basic authentication.  */
	export interface BasicAuthCredentials {

		/** Required */
		username: string;

		/** Required */
		password: string;
	}

	/**  The basic auth credentials required for basic authentication.  */
	export interface BasicAuthCredentialsFormProperties {

		/** Required */
		username: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,
	}
	export function CreateBasicAuthCredentialsFormGroup() {
		return new FormGroup<BasicAuthCredentialsFormProperties>({
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The OAuth credentials required for OAuth type authentication.  */
	export interface OAuthCredentials {

		/** Required */
		clientId: string;

		/** Required */
		clientSecret: string;
		accessToken?: string;
		refreshToken?: string;
		oAuthRequest?: ConnectorOAuthRequest;
	}

	/**  The OAuth credentials required for OAuth type authentication.  */
	export interface OAuthCredentialsFormProperties {

		/** Required */
		clientId: FormControl<string | null | undefined>,

		/** Required */
		clientSecret: FormControl<string | null | undefined>,
		accessToken: FormControl<string | null | undefined>,
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateOAuthCredentialsFormGroup() {
		return new FormGroup<OAuthCredentialsFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accessToken: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The connector-specific profile credentials that are required when using the custom connector. */
	export interface CustomConnectorProfileCredentials {

		/** Required */
		authenticationType: AuthenticationType;
		basic?: BasicAuthCredentials;
		oauth2?: OAuth2Credentials;
		apiKey?: ApiKeyCredentials;
		custom?: CustomAuthCredentials;
	}

	/** The connector-specific profile credentials that are required when using the custom connector. */
	export interface CustomConnectorProfileCredentialsFormProperties {

		/** Required */
		authenticationType: FormControl<AuthenticationType | null | undefined>,
	}
	export function CreateCustomConnectorProfileCredentialsFormGroup() {
		return new FormGroup<CustomConnectorProfileCredentialsFormProperties>({
			authenticationType: new FormControl<AuthenticationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AuthenticationType { OAUTH2 = 'OAUTH2', APIKEY = 'APIKEY', BASIC = 'BASIC', CUSTOM = 'CUSTOM' }


	/** The OAuth 2.0 credentials required for OAuth 2.0 authentication. */
	export interface OAuth2Credentials {
		clientId?: string;
		clientSecret?: string;
		accessToken?: string;
		refreshToken?: string;

		/** Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. */
		oAuthRequest?: ConnectorOAuthRequest;
	}

	/** The OAuth 2.0 credentials required for OAuth 2.0 authentication. */
	export interface OAuth2CredentialsFormProperties {
		clientId: FormControl<string | null | undefined>,
		clientSecret: FormControl<string | null | undefined>,
		accessToken: FormControl<string | null | undefined>,
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateOAuth2CredentialsFormGroup() {
		return new FormGroup<OAuth2CredentialsFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			accessToken: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The API key credentials required for API key authentication. */
	export interface ApiKeyCredentials {

		/** Required */
		apiKey: string;
		apiSecretKey?: string;
	}

	/** The API key credentials required for API key authentication. */
	export interface ApiKeyCredentialsFormProperties {

		/** Required */
		apiKey: FormControl<string | null | undefined>,
		apiSecretKey: FormControl<string | null | undefined>,
	}
	export function CreateApiKeyCredentialsFormGroup() {
		return new FormGroup<ApiKeyCredentialsFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			apiSecretKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The custom credentials required for custom authentication. */
	export interface CustomAuthCredentials {

		/** Required */
		customAuthenticationType: string;
		credentialsMap?: CredentialsMap;
	}

	/** The custom credentials required for custom authentication. */
	export interface CustomAuthCredentialsFormProperties {

		/** Required */
		customAuthenticationType: FormControl<string | null | undefined>,
	}
	export function CreateCustomAuthCredentialsFormGroup() {
		return new FormGroup<CustomAuthCredentialsFormProperties>({
			customAuthenticationType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CredentialsMap {
	}
	export interface CredentialsMapFormProperties {
	}
	export function CreateCredentialsMapFormGroup() {
		return new FormGroup<CredentialsMapFormProperties>({
		});

	}


	/** The connector-specific profile credentials required when using Salesforce Pardot. */
	export interface PardotConnectorProfileCredentials {
		accessToken?: string;
		refreshToken?: string;

		/** Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. */
		oAuthRequest?: ConnectorOAuthRequest;
		clientCredentialsArn?: string;
	}

	/** The connector-specific profile credentials required when using Salesforce Pardot. */
	export interface PardotConnectorProfileCredentialsFormProperties {
		accessToken: FormControl<string | null | undefined>,
		refreshToken: FormControl<string | null | undefined>,
		clientCredentialsArn: FormControl<string | null | undefined>,
	}
	export function CreatePardotConnectorProfileCredentialsFormGroup() {
		return new FormGroup<PardotConnectorProfileCredentialsFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
			clientCredentialsArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface ConnectorAuthenticationException {
	}
	export interface ConnectorAuthenticationExceptionFormProperties {
	}
	export function CreateConnectorAuthenticationExceptionFormGroup() {
		return new FormGroup<ConnectorAuthenticationExceptionFormProperties>({
		});

	}

	export interface CreateFlowResponse {
		flowArn?: string;
		flowStatus?: FlowStatus;
	}
	export interface CreateFlowResponseFormProperties {
		flowArn: FormControl<string | null | undefined>,
		flowStatus: FormControl<FlowStatus | null | undefined>,
	}
	export function CreateCreateFlowResponseFormGroup() {
		return new FormGroup<CreateFlowResponseFormProperties>({
			flowArn: new FormControl<string | null | undefined>(undefined),
			flowStatus: new FormControl<FlowStatus | null | undefined>(undefined),
		});

	}

	export enum FlowStatus { Active = 'Active', Deprecated = 'Deprecated', Deleted = 'Deleted', Draft = 'Draft', Errored = 'Errored', Suspended = 'Suspended' }

	export enum TriggerType { Scheduled = 'Scheduled', Event = 'Event', OnDemand = 'OnDemand' }


	/**  Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the <code>Scheduled</code> trigger type.  */
	export interface TriggerProperties {
		Scheduled?: ScheduledTriggerProperties;
	}

	/**  Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the <code>Scheduled</code> trigger type.  */
	export interface TriggerPropertiesFormProperties {
	}
	export function CreateTriggerPropertiesFormGroup() {
		return new FormGroup<TriggerPropertiesFormProperties>({
		});

	}


	/**  Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type.  */
	export interface ScheduledTriggerProperties {

		/** Required */
		scheduleExpression: string;
		dataPullMode?: DataPullMode;
		scheduleStartTime?: Date;
		scheduleEndTime?: Date;
		timezone?: string;
		scheduleOffset?: number | null;
		firstExecutionFrom?: Date;
		flowErrorDeactivationThreshold?: number | null;
	}

	/**  Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type.  */
	export interface ScheduledTriggerPropertiesFormProperties {

		/** Required */
		scheduleExpression: FormControl<string | null | undefined>,
		dataPullMode: FormControl<DataPullMode | null | undefined>,
		scheduleStartTime: FormControl<Date | null | undefined>,
		scheduleEndTime: FormControl<Date | null | undefined>,
		timezone: FormControl<string | null | undefined>,
		scheduleOffset: FormControl<number | null | undefined>,
		firstExecutionFrom: FormControl<Date | null | undefined>,
		flowErrorDeactivationThreshold: FormControl<number | null | undefined>,
	}
	export function CreateScheduledTriggerPropertiesFormGroup() {
		return new FormGroup<ScheduledTriggerPropertiesFormProperties>({
			scheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataPullMode: new FormControl<DataPullMode | null | undefined>(undefined),
			scheduleStartTime: new FormControl<Date | null | undefined>(undefined),
			scheduleEndTime: new FormControl<Date | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			scheduleOffset: new FormControl<number | null | undefined>(undefined),
			firstExecutionFrom: new FormControl<Date | null | undefined>(undefined),
			flowErrorDeactivationThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DataPullMode { Incremental = 'Incremental', Complete = 'Complete' }

	export enum ConnectorType { Salesforce = 'Salesforce', Singular = 'Singular', Slack = 'Slack', Redshift = 'Redshift', S3 = 'S3', Marketo = 'Marketo', Googleanalytics = 'Googleanalytics', Zendesk = 'Zendesk', Servicenow = 'Servicenow', Datadog = 'Datadog', Trendmicro = 'Trendmicro', Snowflake = 'Snowflake', Dynatrace = 'Dynatrace', Infornexus = 'Infornexus', Amplitude = 'Amplitude', Veeva = 'Veeva', EventBridge = 'EventBridge', LookoutMetrics = 'LookoutMetrics', Upsolver = 'Upsolver', Honeycode = 'Honeycode', CustomerProfiles = 'CustomerProfiles', SAPOData = 'SAPOData', CustomConnector = 'CustomConnector', Pardot = 'Pardot' }


	/**  Specifies the information that is required to query a particular connector.  */
	export interface SourceConnectorProperties {
		Amplitude?: AmplitudeSourceProperties;
		Datadog?: DatadogSourceProperties;
		Dynatrace?: DynatraceSourceProperties;
		GoogleAnalytics?: GoogleAnalyticsSourceProperties;
		InforNexus?: InforNexusSourceProperties;
		Marketo?: MarketoSourceProperties;
		S3?: S3SourceProperties;
		Salesforce?: SalesforceSourceProperties;
		ServiceNow?: ServiceNowSourceProperties;
		Singular?: SingularSourceProperties;
		Slack?: SlackSourceProperties;
		Trendmicro?: TrendmicroSourceProperties;
		Veeva?: VeevaSourceProperties;
		Zendesk?: ZendeskSourceProperties;

		/** The properties that are applied when using SAPOData as a flow source. */
		SAPOData?: SAPODataSourceProperties;

		/** The properties that are applied when the custom connector is being used as a source. */
		CustomConnector?: CustomConnectorSourceProperties;
		Pardot?: PardotSourceProperties;
	}

	/**  Specifies the information that is required to query a particular connector.  */
	export interface SourceConnectorPropertiesFormProperties {
	}
	export function CreateSourceConnectorPropertiesFormGroup() {
		return new FormGroup<SourceConnectorPropertiesFormProperties>({
		});

	}


	/**  The properties that are applied when Amplitude is being used as a source.  */
	export interface AmplitudeSourceProperties {

		/** Required */
		object: string;
	}

	/**  The properties that are applied when Amplitude is being used as a source.  */
	export interface AmplitudeSourcePropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreateAmplitudeSourcePropertiesFormGroup() {
		return new FormGroup<AmplitudeSourcePropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The properties that are applied when Datadog is being used as a source.  */
	export interface DatadogSourceProperties {

		/** Required */
		object: string;
	}

	/**  The properties that are applied when Datadog is being used as a source.  */
	export interface DatadogSourcePropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreateDatadogSourcePropertiesFormGroup() {
		return new FormGroup<DatadogSourcePropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The properties that are applied when Dynatrace is being used as a source.  */
	export interface DynatraceSourceProperties {

		/** Required */
		object: string;
	}

	/**  The properties that are applied when Dynatrace is being used as a source.  */
	export interface DynatraceSourcePropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreateDynatraceSourcePropertiesFormGroup() {
		return new FormGroup<DynatraceSourcePropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The properties that are applied when Google Analytics is being used as a source.  */
	export interface GoogleAnalyticsSourceProperties {

		/** Required */
		object: string;
	}

	/**  The properties that are applied when Google Analytics is being used as a source.  */
	export interface GoogleAnalyticsSourcePropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsSourcePropertiesFormGroup() {
		return new FormGroup<GoogleAnalyticsSourcePropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The properties that are applied when Infor Nexus is being used as a source.  */
	export interface InforNexusSourceProperties {

		/** Required */
		object: string;
	}

	/**  The properties that are applied when Infor Nexus is being used as a source.  */
	export interface InforNexusSourcePropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreateInforNexusSourcePropertiesFormGroup() {
		return new FormGroup<InforNexusSourcePropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The properties that are applied when Marketo is being used as a source.  */
	export interface MarketoSourceProperties {

		/** Required */
		object: string;
	}

	/**  The properties that are applied when Marketo is being used as a source.  */
	export interface MarketoSourcePropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreateMarketoSourcePropertiesFormGroup() {
		return new FormGroup<MarketoSourcePropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The properties that are applied when Amazon S3 is being used as the flow source.  */
	export interface S3SourceProperties {

		/** Required */
		bucketName: string;
		bucketPrefix?: string;

		/** When you use Amazon S3 as the source, the configuration format that you provide the flow input data. */
		s3InputFormatConfig?: S3InputFormatConfig;
	}

	/**  The properties that are applied when Amazon S3 is being used as the flow source.  */
	export interface S3SourcePropertiesFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
		bucketPrefix: FormControl<string | null | undefined>,
	}
	export function CreateS3SourcePropertiesFormGroup() {
		return new FormGroup<S3SourcePropertiesFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bucketPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  When you use Amazon S3 as the source, the configuration format that you provide the flow input data.  */
	export interface S3InputFormatConfig {
		s3InputFileType?: S3InputFileType;
	}

	/**  When you use Amazon S3 as the source, the configuration format that you provide the flow input data.  */
	export interface S3InputFormatConfigFormProperties {
		s3InputFileType: FormControl<S3InputFileType | null | undefined>,
	}
	export function CreateS3InputFormatConfigFormGroup() {
		return new FormGroup<S3InputFormatConfigFormProperties>({
			s3InputFileType: new FormControl<S3InputFileType | null | undefined>(undefined),
		});

	}

	export enum S3InputFileType { CSV = 'CSV', JSON = 'JSON' }


	/**  The properties that are applied when Salesforce is being used as a source.  */
	export interface SalesforceSourceProperties {

		/** Required */
		object: string;
		enableDynamicFieldUpdate?: boolean | null;
		includeDeletedRecords?: boolean | null;
		dataTransferApi?: SalesforceDataTransferApi;
	}

	/**  The properties that are applied when Salesforce is being used as a source.  */
	export interface SalesforceSourcePropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
		enableDynamicFieldUpdate: FormControl<boolean | null | undefined>,
		includeDeletedRecords: FormControl<boolean | null | undefined>,
		dataTransferApi: FormControl<SalesforceDataTransferApi | null | undefined>,
	}
	export function CreateSalesforceSourcePropertiesFormGroup() {
		return new FormGroup<SalesforceSourcePropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enableDynamicFieldUpdate: new FormControl<boolean | null | undefined>(undefined),
			includeDeletedRecords: new FormControl<boolean | null | undefined>(undefined),
			dataTransferApi: new FormControl<SalesforceDataTransferApi | null | undefined>(undefined),
		});

	}

	export enum SalesforceDataTransferApi { AUTOMATIC = 'AUTOMATIC', BULKV2 = 'BULKV2', REST_SYNC = 'REST_SYNC' }


	/**  The properties that are applied when ServiceNow is being used as a source.  */
	export interface ServiceNowSourceProperties {

		/** Required */
		object: string;
	}

	/**  The properties that are applied when ServiceNow is being used as a source.  */
	export interface ServiceNowSourcePropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreateServiceNowSourcePropertiesFormGroup() {
		return new FormGroup<ServiceNowSourcePropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The properties that are applied when Singular is being used as a source.  */
	export interface SingularSourceProperties {

		/** Required */
		object: string;
	}

	/**  The properties that are applied when Singular is being used as a source.  */
	export interface SingularSourcePropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreateSingularSourcePropertiesFormGroup() {
		return new FormGroup<SingularSourcePropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The properties that are applied when Slack is being used as a source.  */
	export interface SlackSourceProperties {

		/** Required */
		object: string;
	}

	/**  The properties that are applied when Slack is being used as a source.  */
	export interface SlackSourcePropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreateSlackSourcePropertiesFormGroup() {
		return new FormGroup<SlackSourcePropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The properties that are applied when using Trend Micro as a flow source.  */
	export interface TrendmicroSourceProperties {

		/** Required */
		object: string;
	}

	/**  The properties that are applied when using Trend Micro as a flow source.  */
	export interface TrendmicroSourcePropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreateTrendmicroSourcePropertiesFormGroup() {
		return new FormGroup<TrendmicroSourcePropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The properties that are applied when using Veeva as a flow source.  */
	export interface VeevaSourceProperties {

		/** Required */
		object: string;
		documentType?: string;
		includeSourceFiles?: boolean | null;
		includeRenditions?: boolean | null;
		includeAllVersions?: boolean | null;
	}

	/**  The properties that are applied when using Veeva as a flow source.  */
	export interface VeevaSourcePropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
		documentType: FormControl<string | null | undefined>,
		includeSourceFiles: FormControl<boolean | null | undefined>,
		includeRenditions: FormControl<boolean | null | undefined>,
		includeAllVersions: FormControl<boolean | null | undefined>,
	}
	export function CreateVeevaSourcePropertiesFormGroup() {
		return new FormGroup<VeevaSourcePropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentType: new FormControl<string | null | undefined>(undefined),
			includeSourceFiles: new FormControl<boolean | null | undefined>(undefined),
			includeRenditions: new FormControl<boolean | null | undefined>(undefined),
			includeAllVersions: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  The properties that are applied when using Zendesk as a flow source.  */
	export interface ZendeskSourceProperties {

		/** Required */
		object: string;
	}

	/**  The properties that are applied when using Zendesk as a flow source.  */
	export interface ZendeskSourcePropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreateZendeskSourcePropertiesFormGroup() {
		return new FormGroup<ZendeskSourcePropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The properties that are applied when using SAPOData as a flow source.  */
	export interface SAPODataSourceProperties {
		objectPath?: string;
	}

	/**  The properties that are applied when using SAPOData as a flow source.  */
	export interface SAPODataSourcePropertiesFormProperties {
		objectPath: FormControl<string | null | undefined>,
	}
	export function CreateSAPODataSourcePropertiesFormGroup() {
		return new FormGroup<SAPODataSourcePropertiesFormProperties>({
			objectPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are applied when the custom connector is being used as a source. */
	export interface CustomConnectorSourceProperties {

		/** Required */
		entityName: string;
		customProperties?: CustomProperties;
		dataTransferApi?: DataTransferApi;
	}

	/** The properties that are applied when the custom connector is being used as a source. */
	export interface CustomConnectorSourcePropertiesFormProperties {

		/** Required */
		entityName: FormControl<string | null | undefined>,
	}
	export function CreateCustomConnectorSourcePropertiesFormGroup() {
		return new FormGroup<CustomConnectorSourcePropertiesFormProperties>({
			entityName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CustomProperties {
	}
	export interface CustomPropertiesFormProperties {
	}
	export function CreateCustomPropertiesFormGroup() {
		return new FormGroup<CustomPropertiesFormProperties>({
		});

	}


	/** The API of the connector application that Amazon AppFlow uses to transfer your data. */
	export interface DataTransferApi {
		Name?: string;
		Type?: DataTransferApiType;
	}

	/** The API of the connector application that Amazon AppFlow uses to transfer your data. */
	export interface DataTransferApiFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<DataTransferApiType | null | undefined>,
	}
	export function CreateDataTransferApiFormGroup() {
		return new FormGroup<DataTransferApiFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<DataTransferApiType | null | undefined>(undefined),
		});

	}

	export enum DataTransferApiType { SYNC = 'SYNC', ASYNC = 'ASYNC', AUTOMATIC = 'AUTOMATIC' }


	/** The properties that are applied when Salesforce Pardot is being used as a source. */
	export interface PardotSourceProperties {

		/** Required */
		object: string;
	}

	/** The properties that are applied when Salesforce Pardot is being used as a source. */
	export interface PardotSourcePropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreatePardotSourcePropertiesFormGroup() {
		return new FormGroup<PardotSourcePropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Specifies the configuration used when importing incremental records from the source.  */
	export interface IncrementalPullConfig {
		datetimeTypeFieldName?: string;
	}

	/**  Specifies the configuration used when importing incremental records from the source.  */
	export interface IncrementalPullConfigFormProperties {
		datetimeTypeFieldName: FormControl<string | null | undefined>,
	}
	export function CreateIncrementalPullConfigFormGroup() {
		return new FormGroup<IncrementalPullConfigFormProperties>({
			datetimeTypeFieldName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Contains information about the configuration of destination connectors present in the flow.  */
	export interface DestinationFlowConfig {

		/** Required */
		connectorType: ConnectorType;
		apiVersion?: string;
		connectorProfileName?: string;

		/** Required */
		destinationConnectorProperties: DestinationConnectorProperties;
	}

	/**  Contains information about the configuration of destination connectors present in the flow.  */
	export interface DestinationFlowConfigFormProperties {

		/** Required */
		connectorType: FormControl<ConnectorType | null | undefined>,
		apiVersion: FormControl<string | null | undefined>,
		connectorProfileName: FormControl<string | null | undefined>,
	}
	export function CreateDestinationFlowConfigFormGroup() {
		return new FormGroup<DestinationFlowConfigFormProperties>({
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined, [Validators.required]),
			apiVersion: new FormControl<string | null | undefined>(undefined),
			connectorProfileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  This stores the information that is required to query a particular connector.  */
	export interface DestinationConnectorProperties {
		Redshift?: RedshiftDestinationProperties;
		S3?: S3DestinationProperties;
		Salesforce?: SalesforceDestinationProperties;
		Snowflake?: SnowflakeDestinationProperties;
		EventBridge?: EventBridgeDestinationProperties;
		LookoutMetrics?: LookoutMetricsDestinationProperties;
		Upsolver?: UpsolverDestinationProperties;
		Honeycode?: HoneycodeDestinationProperties;
		CustomerProfiles?: CustomerProfilesDestinationProperties;
		Zendesk?: ZendeskDestinationProperties;
		Marketo?: MarketoDestinationProperties;
		CustomConnector?: CustomConnectorDestinationProperties;
		SAPOData?: SAPODataDestinationProperties;
	}

	/**  This stores the information that is required to query a particular connector.  */
	export interface DestinationConnectorPropertiesFormProperties {
	}
	export function CreateDestinationConnectorPropertiesFormGroup() {
		return new FormGroup<DestinationConnectorPropertiesFormProperties>({
		});

	}


	/**  The properties that are applied when Amazon Redshift is being used as a destination.  */
	export interface RedshiftDestinationProperties {

		/** Required */
		object: string;

		/** Required */
		intermediateBucketName: string;
		bucketPrefix?: string;
		errorHandlingConfig?: ErrorHandlingConfig;
	}

	/**  The properties that are applied when Amazon Redshift is being used as a destination.  */
	export interface RedshiftDestinationPropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,

		/** Required */
		intermediateBucketName: FormControl<string | null | undefined>,
		bucketPrefix: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftDestinationPropertiesFormGroup() {
		return new FormGroup<RedshiftDestinationPropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			intermediateBucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bucketPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.  */
	export interface ErrorHandlingConfig {
		failOnFirstDestinationError?: boolean | null;
		bucketPrefix?: string;
		bucketName?: string;
	}

	/**  The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.  */
	export interface ErrorHandlingConfigFormProperties {
		failOnFirstDestinationError: FormControl<boolean | null | undefined>,
		bucketPrefix: FormControl<string | null | undefined>,
		bucketName: FormControl<string | null | undefined>,
	}
	export function CreateErrorHandlingConfigFormGroup() {
		return new FormGroup<ErrorHandlingConfigFormProperties>({
			failOnFirstDestinationError: new FormControl<boolean | null | undefined>(undefined),
			bucketPrefix: new FormControl<string | null | undefined>(undefined),
			bucketName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The properties that are applied when Amazon S3 is used as a destination.  */
	export interface S3DestinationProperties {

		/** Required */
		bucketName: string;
		bucketPrefix?: string;

		/** The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination. */
		s3OutputFormatConfig?: S3OutputFormatConfig;
	}

	/**  The properties that are applied when Amazon S3 is used as a destination.  */
	export interface S3DestinationPropertiesFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
		bucketPrefix: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationPropertiesFormGroup() {
		return new FormGroup<S3DestinationPropertiesFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bucketPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination.  */
	export interface S3OutputFormatConfig {
		fileType?: FileType;
		prefixConfig?: PrefixConfig;

		/** The aggregation settings that you can use to customize the output format of your flow data. */
		aggregationConfig?: AggregationConfig;
		preserveSourceDataTyping?: boolean | null;
	}

	/**  The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination.  */
	export interface S3OutputFormatConfigFormProperties {
		fileType: FormControl<FileType | null | undefined>,
		preserveSourceDataTyping: FormControl<boolean | null | undefined>,
	}
	export function CreateS3OutputFormatConfigFormGroup() {
		return new FormGroup<S3OutputFormatConfigFormProperties>({
			fileType: new FormControl<FileType | null | undefined>(undefined),
			preserveSourceDataTyping: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FileType { CSV = 'CSV', JSON = 'JSON', PARQUET = 'PARQUET' }


	/** Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination. */
	export interface PrefixConfig {
		prefixType?: PrefixType;
		prefixFormat?: PrefixFormat;
		pathPrefixHierarchy?: Array<PathPrefix>;
	}

	/** Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination. */
	export interface PrefixConfigFormProperties {
		prefixType: FormControl<PrefixType | null | undefined>,
		prefixFormat: FormControl<PrefixFormat | null | undefined>,
	}
	export function CreatePrefixConfigFormGroup() {
		return new FormGroup<PrefixConfigFormProperties>({
			prefixType: new FormControl<PrefixType | null | undefined>(undefined),
			prefixFormat: new FormControl<PrefixFormat | null | undefined>(undefined),
		});

	}

	export enum PrefixType { FILENAME = 'FILENAME', PATH = 'PATH', PATH_AND_FILENAME = 'PATH_AND_FILENAME' }

	export enum PrefixFormat { YEAR = 'YEAR', MONTH = 'MONTH', DAY = 'DAY', HOUR = 'HOUR', MINUTE = 'MINUTE' }

	export enum PathPrefix { EXECUTION_ID = 'EXECUTION_ID', SCHEMA_VERSION = 'SCHEMA_VERSION' }


	/**  The aggregation settings that you can use to customize the output format of your flow data.  */
	export interface AggregationConfig {
		aggregationType?: AggregationType;
		targetFileSize?: number | null;
	}

	/**  The aggregation settings that you can use to customize the output format of your flow data.  */
	export interface AggregationConfigFormProperties {
		aggregationType: FormControl<AggregationType | null | undefined>,
		targetFileSize: FormControl<number | null | undefined>,
	}
	export function CreateAggregationConfigFormGroup() {
		return new FormGroup<AggregationConfigFormProperties>({
			aggregationType: new FormControl<AggregationType | null | undefined>(undefined),
			targetFileSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AggregationType { None = 'None', SingleFile = 'SingleFile' }


	/**  The properties that are applied when Salesforce is being used as a destination.  */
	export interface SalesforceDestinationProperties {

		/** Required */
		object: string;
		idFieldNames?: Array<string>;
		errorHandlingConfig?: ErrorHandlingConfig;
		writeOperationType?: WriteOperationType;
		dataTransferApi?: SalesforceDataTransferApi;
	}

	/**  The properties that are applied when Salesforce is being used as a destination.  */
	export interface SalesforceDestinationPropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
		writeOperationType: FormControl<WriteOperationType | null | undefined>,
		dataTransferApi: FormControl<SalesforceDataTransferApi | null | undefined>,
	}
	export function CreateSalesforceDestinationPropertiesFormGroup() {
		return new FormGroup<SalesforceDestinationPropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			writeOperationType: new FormControl<WriteOperationType | null | undefined>(undefined),
			dataTransferApi: new FormControl<SalesforceDataTransferApi | null | undefined>(undefined),
		});

	}


	/**  The possible write operations in the destination connector. When this value is not provided, this defaults to the <code>INSERT</code> operation.  */
	export enum WriteOperationType { INSERT = 'INSERT', UPSERT = 'UPSERT', UPDATE = 'UPDATE', DELETE = 'DELETE' }


	/**  The properties that are applied when Snowflake is being used as a destination.  */
	export interface SnowflakeDestinationProperties {

		/** Required */
		object: string;

		/** Required */
		intermediateBucketName: string;
		bucketPrefix?: string;
		errorHandlingConfig?: ErrorHandlingConfig;
	}

	/**  The properties that are applied when Snowflake is being used as a destination.  */
	export interface SnowflakeDestinationPropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,

		/** Required */
		intermediateBucketName: FormControl<string | null | undefined>,
		bucketPrefix: FormControl<string | null | undefined>,
	}
	export function CreateSnowflakeDestinationPropertiesFormGroup() {
		return new FormGroup<SnowflakeDestinationPropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			intermediateBucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bucketPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The properties that are applied when Amazon EventBridge is being used as a destination.  */
	export interface EventBridgeDestinationProperties {

		/** Required */
		object: string;

		/** The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. */
		errorHandlingConfig?: ErrorHandlingConfig;
	}

	/**  The properties that are applied when Amazon EventBridge is being used as a destination.  */
	export interface EventBridgeDestinationPropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreateEventBridgeDestinationPropertiesFormGroup() {
		return new FormGroup<EventBridgeDestinationPropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The properties that are applied when Amazon Lookout for Metrics is used as a destination.  */
	export interface LookoutMetricsDestinationProperties {
	}

	/**  The properties that are applied when Amazon Lookout for Metrics is used as a destination.  */
	export interface LookoutMetricsDestinationPropertiesFormProperties {
	}
	export function CreateLookoutMetricsDestinationPropertiesFormGroup() {
		return new FormGroup<LookoutMetricsDestinationPropertiesFormProperties>({
		});

	}


	/**  The properties that are applied when Upsolver is used as a destination.  */
	export interface UpsolverDestinationProperties {

		/** Required */
		bucketName: string;
		bucketPrefix?: string;

		/** Required */
		s3OutputFormatConfig: UpsolverS3OutputFormatConfig;
	}

	/**  The properties that are applied when Upsolver is used as a destination.  */
	export interface UpsolverDestinationPropertiesFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
		bucketPrefix: FormControl<string | null | undefined>,
	}
	export function CreateUpsolverDestinationPropertiesFormGroup() {
		return new FormGroup<UpsolverDestinationPropertiesFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bucketPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination.  */
	export interface UpsolverS3OutputFormatConfig {
		fileType?: FileType;

		/**
		 * Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination.
		 * Required
		 */
		prefixConfig: PrefixConfig;

		/** The aggregation settings that you can use to customize the output format of your flow data. */
		aggregationConfig?: AggregationConfig;
	}

	/**  The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination.  */
	export interface UpsolverS3OutputFormatConfigFormProperties {
		fileType: FormControl<FileType | null | undefined>,
	}
	export function CreateUpsolverS3OutputFormatConfigFormGroup() {
		return new FormGroup<UpsolverS3OutputFormatConfigFormProperties>({
			fileType: new FormControl<FileType | null | undefined>(undefined),
		});

	}


	/**  The properties that are applied when Amazon Honeycode is used as a destination.  */
	export interface HoneycodeDestinationProperties {

		/** Required */
		object: string;

		/** The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. */
		errorHandlingConfig?: ErrorHandlingConfig;
	}

	/**  The properties that are applied when Amazon Honeycode is used as a destination.  */
	export interface HoneycodeDestinationPropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreateHoneycodeDestinationPropertiesFormGroup() {
		return new FormGroup<HoneycodeDestinationPropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The properties that are applied when Amazon Connect Customer Profiles is used as a destination.  */
	export interface CustomerProfilesDestinationProperties {

		/** Required */
		domainName: string;
		objectTypeName?: string;
	}

	/**  The properties that are applied when Amazon Connect Customer Profiles is used as a destination.  */
	export interface CustomerProfilesDestinationPropertiesFormProperties {

		/** Required */
		domainName: FormControl<string | null | undefined>,
		objectTypeName: FormControl<string | null | undefined>,
	}
	export function CreateCustomerProfilesDestinationPropertiesFormGroup() {
		return new FormGroup<CustomerProfilesDestinationPropertiesFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			objectTypeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are applied when Zendesk is used as a destination. */
	export interface ZendeskDestinationProperties {

		/** Required */
		object: string;

		/**
		 * A list of field names that can be used as an ID field when performing a write operation.
		 * Minimum items: 0
		 */
		idFieldNames?: Array<string>;

		/** The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. */
		errorHandlingConfig?: ErrorHandlingConfig;

		/** The possible write operations in the destination connector. When this value is not provided, this defaults to the <code>INSERT</code> operation. */
		writeOperationType?: WriteOperationType | null;
	}

	/** The properties that are applied when Zendesk is used as a destination. */
	export interface ZendeskDestinationPropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,

		/** The possible write operations in the destination connector. When this value is not provided, this defaults to the <code>INSERT</code> operation. */
		writeOperationType: FormControl<WriteOperationType | null | undefined>,
	}
	export function CreateZendeskDestinationPropertiesFormGroup() {
		return new FormGroup<ZendeskDestinationPropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			writeOperationType: new FormControl<WriteOperationType | null | undefined>(undefined),
		});

	}


	/** The properties that Amazon AppFlow applies when you use Marketo as a flow destination. */
	export interface MarketoDestinationProperties {

		/** Required */
		object: string;

		/** The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. */
		errorHandlingConfig?: ErrorHandlingConfig;
	}

	/** The properties that Amazon AppFlow applies when you use Marketo as a flow destination. */
	export interface MarketoDestinationPropertiesFormProperties {

		/** Required */
		object: FormControl<string | null | undefined>,
	}
	export function CreateMarketoDestinationPropertiesFormGroup() {
		return new FormGroup<MarketoDestinationPropertiesFormProperties>({
			object: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties that are applied when the custom connector is being used as a destination. */
	export interface CustomConnectorDestinationProperties {

		/** Required */
		entityName: string;
		errorHandlingConfig?: ErrorHandlingConfig;
		writeOperationType?: WriteOperationType;
		idFieldNames?: Array<string>;
		customProperties?: CustomProperties;
	}

	/** The properties that are applied when the custom connector is being used as a destination. */
	export interface CustomConnectorDestinationPropertiesFormProperties {

		/** Required */
		entityName: FormControl<string | null | undefined>,
		writeOperationType: FormControl<WriteOperationType | null | undefined>,
	}
	export function CreateCustomConnectorDestinationPropertiesFormGroup() {
		return new FormGroup<CustomConnectorDestinationPropertiesFormProperties>({
			entityName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			writeOperationType: new FormControl<WriteOperationType | null | undefined>(undefined),
		});

	}


	/** The properties that are applied when using SAPOData as a flow destination */
	export interface SAPODataDestinationProperties {

		/** Required */
		objectPath: string;
		successResponseHandlingConfig?: SuccessResponseHandlingConfig;

		/**
		 * A list of field names that can be used as an ID field when performing a write operation.
		 * Minimum items: 0
		 */
		idFieldNames?: Array<string>;

		/** The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. */
		errorHandlingConfig?: ErrorHandlingConfig;

		/** The possible write operations in the destination connector. When this value is not provided, this defaults to the <code>INSERT</code> operation. */
		writeOperationType?: WriteOperationType | null;
	}

	/** The properties that are applied when using SAPOData as a flow destination */
	export interface SAPODataDestinationPropertiesFormProperties {

		/** Required */
		objectPath: FormControl<string | null | undefined>,

		/** The possible write operations in the destination connector. When this value is not provided, this defaults to the <code>INSERT</code> operation. */
		writeOperationType: FormControl<WriteOperationType | null | undefined>,
	}
	export function CreateSAPODataDestinationPropertiesFormGroup() {
		return new FormGroup<SAPODataDestinationPropertiesFormProperties>({
			objectPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			writeOperationType: new FormControl<WriteOperationType | null | undefined>(undefined),
		});

	}


	/** <p>Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data.</p> <p>For example, this setting would determine where to write the response from the destination connector upon a successful insert operation.</p> */
	export interface SuccessResponseHandlingConfig {
		bucketPrefix?: string;
		bucketName?: string;
	}

	/** <p>Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data.</p> <p>For example, this setting would determine where to write the response from the destination connector upon a successful insert operation.</p> */
	export interface SuccessResponseHandlingConfigFormProperties {
		bucketPrefix: FormControl<string | null | undefined>,
		bucketName: FormControl<string | null | undefined>,
	}
	export function CreateSuccessResponseHandlingConfigFormGroup() {
		return new FormGroup<SuccessResponseHandlingConfigFormProperties>({
			bucketPrefix: new FormControl<string | null | undefined>(undefined),
			bucketName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A class for modeling different type of tasks. Task implementation varies based on the <code>TaskType</code>.  */
	export interface Task {

		/** Required */
		sourceFields: Array<string>;
		connectorOperator?: ConnectorOperator;
		destinationField?: string;

		/** Required */
		taskType: TaskType;
		taskProperties?: TaskPropertiesMap;
	}

	/**  A class for modeling different type of tasks. Task implementation varies based on the <code>TaskType</code>.  */
	export interface TaskFormProperties {
		destinationField: FormControl<string | null | undefined>,

		/** Required */
		taskType: FormControl<TaskType | null | undefined>,
	}
	export function CreateTaskFormGroup() {
		return new FormGroup<TaskFormProperties>({
			destinationField: new FormControl<string | null | undefined>(undefined),
			taskType: new FormControl<TaskType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The operation to be performed on the provided source fields.  */
	export interface ConnectorOperator {
		Amplitude?: AmplitudeConnectorOperator;
		Datadog?: DatadogConnectorOperator;
		Dynatrace?: DatadogConnectorOperator;
		GoogleAnalytics?: GoogleAnalyticsConnectorOperator;
		InforNexus?: DatadogConnectorOperator;
		Marketo?: MarketoConnectorOperator;
		S3?: S3ConnectorOperator;
		Salesforce?: SalesforceConnectorOperator;
		ServiceNow?: ServiceNowConnectorOperator;
		Singular?: SingularConnectorOperator;
		Slack?: SlackConnectorOperator;
		Trendmicro?: SingularConnectorOperator;
		Veeva?: VeevaConnectorOperator;
		Zendesk?: ZendeskConnectorOperator;
		SAPOData?: SalesforceConnectorOperator;
		CustomConnector?: VeevaConnectorOperator;
		Pardot?: PardotConnectorOperator;
	}

	/**  The operation to be performed on the provided source fields.  */
	export interface ConnectorOperatorFormProperties {
		Amplitude: FormControl<AmplitudeConnectorOperator | null | undefined>,
		Datadog: FormControl<DatadogConnectorOperator | null | undefined>,
		Dynatrace: FormControl<DatadogConnectorOperator | null | undefined>,
		GoogleAnalytics: FormControl<GoogleAnalyticsConnectorOperator | null | undefined>,
		InforNexus: FormControl<DatadogConnectorOperator | null | undefined>,
		Marketo: FormControl<MarketoConnectorOperator | null | undefined>,
		S3: FormControl<S3ConnectorOperator | null | undefined>,
		Salesforce: FormControl<SalesforceConnectorOperator | null | undefined>,
		ServiceNow: FormControl<ServiceNowConnectorOperator | null | undefined>,
		Singular: FormControl<SingularConnectorOperator | null | undefined>,
		Slack: FormControl<SlackConnectorOperator | null | undefined>,
		Trendmicro: FormControl<SingularConnectorOperator | null | undefined>,
		Veeva: FormControl<VeevaConnectorOperator | null | undefined>,
		Zendesk: FormControl<ZendeskConnectorOperator | null | undefined>,
		SAPOData: FormControl<SalesforceConnectorOperator | null | undefined>,
		CustomConnector: FormControl<VeevaConnectorOperator | null | undefined>,
		Pardot: FormControl<PardotConnectorOperator | null | undefined>,
	}
	export function CreateConnectorOperatorFormGroup() {
		return new FormGroup<ConnectorOperatorFormProperties>({
			Amplitude: new FormControl<AmplitudeConnectorOperator | null | undefined>(undefined),
			Datadog: new FormControl<DatadogConnectorOperator | null | undefined>(undefined),
			Dynatrace: new FormControl<DatadogConnectorOperator | null | undefined>(undefined),
			GoogleAnalytics: new FormControl<GoogleAnalyticsConnectorOperator | null | undefined>(undefined),
			InforNexus: new FormControl<DatadogConnectorOperator | null | undefined>(undefined),
			Marketo: new FormControl<MarketoConnectorOperator | null | undefined>(undefined),
			S3: new FormControl<S3ConnectorOperator | null | undefined>(undefined),
			Salesforce: new FormControl<SalesforceConnectorOperator | null | undefined>(undefined),
			ServiceNow: new FormControl<ServiceNowConnectorOperator | null | undefined>(undefined),
			Singular: new FormControl<SingularConnectorOperator | null | undefined>(undefined),
			Slack: new FormControl<SlackConnectorOperator | null | undefined>(undefined),
			Trendmicro: new FormControl<SingularConnectorOperator | null | undefined>(undefined),
			Veeva: new FormControl<VeevaConnectorOperator | null | undefined>(undefined),
			Zendesk: new FormControl<ZendeskConnectorOperator | null | undefined>(undefined),
			SAPOData: new FormControl<SalesforceConnectorOperator | null | undefined>(undefined),
			CustomConnector: new FormControl<VeevaConnectorOperator | null | undefined>(undefined),
			Pardot: new FormControl<PardotConnectorOperator | null | undefined>(undefined),
		});

	}

	export enum AmplitudeConnectorOperator { BETWEEN = 'BETWEEN' }

	export enum DatadogConnectorOperator { PROJECTION = 'PROJECTION', BETWEEN = 'BETWEEN', EQUAL_TO = 'EQUAL_TO', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }

	export enum GoogleAnalyticsConnectorOperator { PROJECTION = 'PROJECTION', BETWEEN = 'BETWEEN' }

	export enum MarketoConnectorOperator { PROJECTION = 'PROJECTION', LESS_THAN = 'LESS_THAN', GREATER_THAN = 'GREATER_THAN', BETWEEN = 'BETWEEN', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }

	export enum S3ConnectorOperator { PROJECTION = 'PROJECTION', LESS_THAN = 'LESS_THAN', GREATER_THAN = 'GREATER_THAN', BETWEEN = 'BETWEEN', LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO', GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO', EQUAL_TO = 'EQUAL_TO', NOT_EQUAL_TO = 'NOT_EQUAL_TO', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }

	export enum SalesforceConnectorOperator { PROJECTION = 'PROJECTION', LESS_THAN = 'LESS_THAN', CONTAINS = 'CONTAINS', GREATER_THAN = 'GREATER_THAN', BETWEEN = 'BETWEEN', LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO', GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO', EQUAL_TO = 'EQUAL_TO', NOT_EQUAL_TO = 'NOT_EQUAL_TO', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }

	export enum ServiceNowConnectorOperator { PROJECTION = 'PROJECTION', CONTAINS = 'CONTAINS', LESS_THAN = 'LESS_THAN', GREATER_THAN = 'GREATER_THAN', BETWEEN = 'BETWEEN', LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO', GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO', EQUAL_TO = 'EQUAL_TO', NOT_EQUAL_TO = 'NOT_EQUAL_TO', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }

	export enum SingularConnectorOperator { PROJECTION = 'PROJECTION', EQUAL_TO = 'EQUAL_TO', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }

	export enum SlackConnectorOperator { PROJECTION = 'PROJECTION', LESS_THAN = 'LESS_THAN', GREATER_THAN = 'GREATER_THAN', BETWEEN = 'BETWEEN', LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO', GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO', EQUAL_TO = 'EQUAL_TO', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }

	export enum VeevaConnectorOperator { PROJECTION = 'PROJECTION', LESS_THAN = 'LESS_THAN', GREATER_THAN = 'GREATER_THAN', CONTAINS = 'CONTAINS', BETWEEN = 'BETWEEN', LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO', GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO', EQUAL_TO = 'EQUAL_TO', NOT_EQUAL_TO = 'NOT_EQUAL_TO', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }

	export enum ZendeskConnectorOperator { PROJECTION = 'PROJECTION', GREATER_THAN = 'GREATER_THAN', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }

	export enum PardotConnectorOperator { PROJECTION = 'PROJECTION', EQUAL_TO = 'EQUAL_TO', NO_OP = 'NO_OP', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC' }

	export enum TaskType { Arithmetic = 'Arithmetic', Filter = 'Filter', Map = 'Map', Map_all = 'Map_all', Mask = 'Mask', Merge = 'Merge', Passthrough = 'Passthrough', Truncate = 'Truncate', Validate = 'Validate', Partition = 'Partition' }

	export interface TaskPropertiesMap {
	}
	export interface TaskPropertiesMapFormProperties {
	}
	export function CreateTaskPropertiesMapFormGroup() {
		return new FormGroup<TaskPropertiesMapFormProperties>({
		});

	}


	/** <p>Specifies the configuration that Amazon AppFlow uses when it catalogs your data with the Glue Data Catalog. When Amazon AppFlow catalogs your data, it stores metadata in Data Catalog tables. This metadata represents the data that's transferred by the flow that you configure with these settings.</p> <note> <p>You can configure a flow with these settings only when the flow destination is Amazon S3.</p> </note> */
	export interface GlueDataCatalogConfig {

		/** Required */
		roleArn: string;

		/** Required */
		databaseName: string;

		/** Required */
		tablePrefix: string;
	}

	/** <p>Specifies the configuration that Amazon AppFlow uses when it catalogs your data with the Glue Data Catalog. When Amazon AppFlow catalogs your data, it stores metadata in Data Catalog tables. This metadata represents the data that's transferred by the flow that you configure with these settings.</p> <note> <p>You can configure a flow with these settings only when the flow destination is Amazon S3.</p> </note> */
	export interface GlueDataCatalogConfigFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		databaseName: FormControl<string | null | undefined>,

		/** Required */
		tablePrefix: FormControl<string | null | undefined>,
	}
	export function CreateGlueDataCatalogConfigFormGroup() {
		return new FormGroup<GlueDataCatalogConfigFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			databaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tablePrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConnectorServerException {
	}
	export interface ConnectorServerExceptionFormProperties {
	}
	export function CreateConnectorServerExceptionFormGroup() {
		return new FormGroup<ConnectorServerExceptionFormProperties>({
		});

	}

	export interface DeleteConnectorProfileResponse {
	}
	export interface DeleteConnectorProfileResponseFormProperties {
	}
	export function CreateDeleteConnectorProfileResponseFormGroup() {
		return new FormGroup<DeleteConnectorProfileResponseFormProperties>({
		});

	}

	export interface DeleteFlowResponse {
	}
	export interface DeleteFlowResponseFormProperties {
	}
	export function CreateDeleteFlowResponseFormGroup() {
		return new FormGroup<DeleteFlowResponseFormProperties>({
		});

	}

	export interface DescribeConnectorResponse {
		connectorConfiguration?: ConnectorConfiguration;
	}
	export interface DescribeConnectorResponseFormProperties {
	}
	export function CreateDescribeConnectorResponseFormGroup() {
		return new FormGroup<DescribeConnectorResponseFormProperties>({
		});

	}


	/**  The configuration settings related to a given connector.  */
	export interface ConnectorConfiguration {
		canUseAsSource?: boolean | null;
		canUseAsDestination?: boolean | null;
		supportedDestinationConnectors?: Array<ConnectorType>;
		supportedSchedulingFrequencies?: Array<ScheduleFrequencyType>;
		isPrivateLinkEnabled?: boolean | null;
		isPrivateLinkEndpointUrlRequired?: boolean | null;
		supportedTriggerTypes?: Array<TriggerType>;
		connectorMetadata?: ConnectorMetadata;
		connectorType?: ConnectorType;
		connectorLabel?: string;
		connectorDescription?: string;
		connectorOwner?: string;
		connectorName?: string;
		connectorVersion?: string;
		connectorArn?: string;
		connectorModes?: Array<string>;
		authenticationConfig?: AuthenticationConfig;
		connectorRuntimeSettings?: Array<ConnectorRuntimeSetting>;
		supportedApiVersions?: Array<string>;
		supportedOperators?: Array<Operators>;
		supportedWriteOperations?: Array<WriteOperationType>;
		connectorProvisioningType?: ConnectorProvisioningType;
		connectorProvisioningConfig?: ConnectorProvisioningConfig;
		logoURL?: string;
		registeredAt?: Date;
		registeredBy?: string;
		supportedDataTransferTypes?: Array<SupportedDataTransferType>;
		supportedDataTransferApis?: Array<DataTransferApi>;
	}

	/**  The configuration settings related to a given connector.  */
	export interface ConnectorConfigurationFormProperties {
		canUseAsSource: FormControl<boolean | null | undefined>,
		canUseAsDestination: FormControl<boolean | null | undefined>,
		isPrivateLinkEnabled: FormControl<boolean | null | undefined>,
		isPrivateLinkEndpointUrlRequired: FormControl<boolean | null | undefined>,
		connectorType: FormControl<ConnectorType | null | undefined>,
		connectorLabel: FormControl<string | null | undefined>,
		connectorDescription: FormControl<string | null | undefined>,
		connectorOwner: FormControl<string | null | undefined>,
		connectorName: FormControl<string | null | undefined>,
		connectorVersion: FormControl<string | null | undefined>,
		connectorArn: FormControl<string | null | undefined>,
		connectorProvisioningType: FormControl<ConnectorProvisioningType | null | undefined>,
		logoURL: FormControl<string | null | undefined>,
		registeredAt: FormControl<Date | null | undefined>,
		registeredBy: FormControl<string | null | undefined>,
	}
	export function CreateConnectorConfigurationFormGroup() {
		return new FormGroup<ConnectorConfigurationFormProperties>({
			canUseAsSource: new FormControl<boolean | null | undefined>(undefined),
			canUseAsDestination: new FormControl<boolean | null | undefined>(undefined),
			isPrivateLinkEnabled: new FormControl<boolean | null | undefined>(undefined),
			isPrivateLinkEndpointUrlRequired: new FormControl<boolean | null | undefined>(undefined),
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			connectorLabel: new FormControl<string | null | undefined>(undefined),
			connectorDescription: new FormControl<string | null | undefined>(undefined),
			connectorOwner: new FormControl<string | null | undefined>(undefined),
			connectorName: new FormControl<string | null | undefined>(undefined),
			connectorVersion: new FormControl<string | null | undefined>(undefined),
			connectorArn: new FormControl<string | null | undefined>(undefined),
			connectorProvisioningType: new FormControl<ConnectorProvisioningType | null | undefined>(undefined),
			logoURL: new FormControl<string | null | undefined>(undefined),
			registeredAt: new FormControl<Date | null | undefined>(undefined),
			registeredBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScheduleFrequencyType { BYMINUTE = 'BYMINUTE', HOURLY = 'HOURLY', DAILY = 'DAILY', WEEKLY = 'WEEKLY', MONTHLY = 'MONTHLY', ONCE = 'ONCE' }


	/**  A structure to specify connector-specific metadata such as <code>oAuthScopes</code>, <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on.  */
	export interface ConnectorMetadata {
		Amplitude?: AmplitudeMetadata;
		Datadog?: DatadogMetadata;
		Dynatrace?: DynatraceMetadata;
		GoogleAnalytics?: GoogleAnalyticsMetadata;
		InforNexus?: InforNexusMetadata;
		Marketo?: MarketoMetadata;
		Redshift?: RedshiftMetadata;
		S3?: S3Metadata;
		Salesforce?: SalesforceMetadata;
		ServiceNow?: ServiceNowMetadata;
		Singular?: SingularMetadata;
		Slack?: SlackMetadata;
		Snowflake?: SnowflakeMetadata;
		Trendmicro?: TrendmicroMetadata;
		Veeva?: VeevaMetadata;
		Zendesk?: ZendeskMetadata;
		EventBridge?: EventBridgeMetadata;
		Upsolver?: UpsolverMetadata;
		CustomerProfiles?: CustomerProfilesMetadata;
		Honeycode?: HoneycodeMetadata;

		/** The connector metadata specific to SAPOData. */
		SAPOData?: SAPODataMetadata;
		Pardot?: PardotMetadata;
	}

	/**  A structure to specify connector-specific metadata such as <code>oAuthScopes</code>, <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on.  */
	export interface ConnectorMetadataFormProperties {
	}
	export function CreateConnectorMetadataFormGroup() {
		return new FormGroup<ConnectorMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Amplitude.  */
	export interface AmplitudeMetadata {
	}

	/**  The connector metadata specific to Amplitude.  */
	export interface AmplitudeMetadataFormProperties {
	}
	export function CreateAmplitudeMetadataFormGroup() {
		return new FormGroup<AmplitudeMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Datadog.  */
	export interface DatadogMetadata {
	}

	/**  The connector metadata specific to Datadog.  */
	export interface DatadogMetadataFormProperties {
	}
	export function CreateDatadogMetadataFormGroup() {
		return new FormGroup<DatadogMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Dynatrace.  */
	export interface DynatraceMetadata {
	}

	/**  The connector metadata specific to Dynatrace.  */
	export interface DynatraceMetadataFormProperties {
	}
	export function CreateDynatraceMetadataFormGroup() {
		return new FormGroup<DynatraceMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Google Analytics.  */
	export interface GoogleAnalyticsMetadata {
		oAuthScopes?: Array<string>;
	}

	/**  The connector metadata specific to Google Analytics.  */
	export interface GoogleAnalyticsMetadataFormProperties {
	}
	export function CreateGoogleAnalyticsMetadataFormGroup() {
		return new FormGroup<GoogleAnalyticsMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Infor Nexus.  */
	export interface InforNexusMetadata {
	}

	/**  The connector metadata specific to Infor Nexus.  */
	export interface InforNexusMetadataFormProperties {
	}
	export function CreateInforNexusMetadataFormGroup() {
		return new FormGroup<InforNexusMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Marketo.  */
	export interface MarketoMetadata {
	}

	/**  The connector metadata specific to Marketo.  */
	export interface MarketoMetadataFormProperties {
	}
	export function CreateMarketoMetadataFormGroup() {
		return new FormGroup<MarketoMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Amazon Redshift.  */
	export interface RedshiftMetadata {
	}

	/**  The connector metadata specific to Amazon Redshift.  */
	export interface RedshiftMetadataFormProperties {
	}
	export function CreateRedshiftMetadataFormGroup() {
		return new FormGroup<RedshiftMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Amazon S3.  */
	export interface S3Metadata {
	}

	/**  The connector metadata specific to Amazon S3.  */
	export interface S3MetadataFormProperties {
	}
	export function CreateS3MetadataFormGroup() {
		return new FormGroup<S3MetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Salesforce.  */
	export interface SalesforceMetadata {
		oAuthScopes?: Array<string>;
		dataTransferApis?: Array<SalesforceDataTransferApi>;
		oauth2GrantTypesSupported?: Array<OAuth2GrantType>;
	}

	/**  The connector metadata specific to Salesforce.  */
	export interface SalesforceMetadataFormProperties {
	}
	export function CreateSalesforceMetadataFormGroup() {
		return new FormGroup<SalesforceMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to ServiceNow.  */
	export interface ServiceNowMetadata {
	}

	/**  The connector metadata specific to ServiceNow.  */
	export interface ServiceNowMetadataFormProperties {
	}
	export function CreateServiceNowMetadataFormGroup() {
		return new FormGroup<ServiceNowMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Singular.  */
	export interface SingularMetadata {
	}

	/**  The connector metadata specific to Singular.  */
	export interface SingularMetadataFormProperties {
	}
	export function CreateSingularMetadataFormGroup() {
		return new FormGroup<SingularMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Slack.  */
	export interface SlackMetadata {
		oAuthScopes?: Array<string>;
	}

	/**  The connector metadata specific to Slack.  */
	export interface SlackMetadataFormProperties {
	}
	export function CreateSlackMetadataFormGroup() {
		return new FormGroup<SlackMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Snowflake.  */
	export interface SnowflakeMetadata {
		supportedRegions?: Array<string>;
	}

	/**  The connector metadata specific to Snowflake.  */
	export interface SnowflakeMetadataFormProperties {
	}
	export function CreateSnowflakeMetadataFormGroup() {
		return new FormGroup<SnowflakeMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Trend Micro.  */
	export interface TrendmicroMetadata {
	}

	/**  The connector metadata specific to Trend Micro.  */
	export interface TrendmicroMetadataFormProperties {
	}
	export function CreateTrendmicroMetadataFormGroup() {
		return new FormGroup<TrendmicroMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Veeva.  */
	export interface VeevaMetadata {
	}

	/**  The connector metadata specific to Veeva.  */
	export interface VeevaMetadataFormProperties {
	}
	export function CreateVeevaMetadataFormGroup() {
		return new FormGroup<VeevaMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Zendesk.  */
	export interface ZendeskMetadata {
		oAuthScopes?: Array<string>;
	}

	/**  The connector metadata specific to Zendesk.  */
	export interface ZendeskMetadataFormProperties {
	}
	export function CreateZendeskMetadataFormGroup() {
		return new FormGroup<ZendeskMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Amazon EventBridge.  */
	export interface EventBridgeMetadata {
	}

	/**  The connector metadata specific to Amazon EventBridge.  */
	export interface EventBridgeMetadataFormProperties {
	}
	export function CreateEventBridgeMetadataFormGroup() {
		return new FormGroup<EventBridgeMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Upsolver.  */
	export interface UpsolverMetadata {
	}

	/**  The connector metadata specific to Upsolver.  */
	export interface UpsolverMetadataFormProperties {
	}
	export function CreateUpsolverMetadataFormGroup() {
		return new FormGroup<UpsolverMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Amazon Connect Customer Profiles.  */
	export interface CustomerProfilesMetadata {
	}

	/**  The connector metadata specific to Amazon Connect Customer Profiles.  */
	export interface CustomerProfilesMetadataFormProperties {
	}
	export function CreateCustomerProfilesMetadataFormGroup() {
		return new FormGroup<CustomerProfilesMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to Amazon Honeycode.  */
	export interface HoneycodeMetadata {
		oAuthScopes?: Array<string>;
	}

	/**  The connector metadata specific to Amazon Honeycode.  */
	export interface HoneycodeMetadataFormProperties {
	}
	export function CreateHoneycodeMetadataFormGroup() {
		return new FormGroup<HoneycodeMetadataFormProperties>({
		});

	}


	/**  The connector metadata specific to SAPOData.  */
	export interface SAPODataMetadata {
	}

	/**  The connector metadata specific to SAPOData.  */
	export interface SAPODataMetadataFormProperties {
	}
	export function CreateSAPODataMetadataFormGroup() {
		return new FormGroup<SAPODataMetadataFormProperties>({
		});

	}


	/** The connector metadata specific to Salesforce Pardot. */
	export interface PardotMetadata {
	}

	/** The connector metadata specific to Salesforce Pardot. */
	export interface PardotMetadataFormProperties {
	}
	export function CreatePardotMetadataFormGroup() {
		return new FormGroup<PardotMetadataFormProperties>({
		});

	}


	/** Contains information about the authentication config that the connector supports. */
	export interface AuthenticationConfig {
		isBasicAuthSupported?: boolean | null;
		isApiKeyAuthSupported?: boolean | null;
		isOAuth2Supported?: boolean | null;
		isCustomAuthSupported?: boolean | null;
		oAuth2Defaults?: OAuth2Defaults;
		customAuthConfigs?: Array<CustomAuthConfig>;
	}

	/** Contains information about the authentication config that the connector supports. */
	export interface AuthenticationConfigFormProperties {
		isBasicAuthSupported: FormControl<boolean | null | undefined>,
		isApiKeyAuthSupported: FormControl<boolean | null | undefined>,
		isOAuth2Supported: FormControl<boolean | null | undefined>,
		isCustomAuthSupported: FormControl<boolean | null | undefined>,
	}
	export function CreateAuthenticationConfigFormGroup() {
		return new FormGroup<AuthenticationConfigFormProperties>({
			isBasicAuthSupported: new FormControl<boolean | null | undefined>(undefined),
			isApiKeyAuthSupported: new FormControl<boolean | null | undefined>(undefined),
			isOAuth2Supported: new FormControl<boolean | null | undefined>(undefined),
			isCustomAuthSupported: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the default values required for OAuth 2.0 authentication. */
	export interface OAuth2Defaults {
		oauthScopes?: Array<string>;
		tokenUrls?: Array<string>;
		authCodeUrls?: Array<string>;
		oauth2GrantTypesSupported?: Array<OAuth2GrantType>;
		oauth2CustomProperties?: Array<OAuth2CustomParameter>;
	}

	/** Contains the default values required for OAuth 2.0 authentication. */
	export interface OAuth2DefaultsFormProperties {
	}
	export function CreateOAuth2DefaultsFormGroup() {
		return new FormGroup<OAuth2DefaultsFormProperties>({
		});

	}


	/** Custom parameter required for OAuth 2.0 authentication. */
	export interface OAuth2CustomParameter {
		key?: string;
		isRequired?: boolean | null;
		label?: string;
		description?: string;
		isSensitiveField?: boolean | null;
		connectorSuppliedValues?: Array<string>;
		type?: OAuth2CustomPropType;
	}

	/** Custom parameter required for OAuth 2.0 authentication. */
	export interface OAuth2CustomParameterFormProperties {
		key: FormControl<string | null | undefined>,
		isRequired: FormControl<boolean | null | undefined>,
		label: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		isSensitiveField: FormControl<boolean | null | undefined>,
		type: FormControl<OAuth2CustomPropType | null | undefined>,
	}
	export function CreateOAuth2CustomParameterFormGroup() {
		return new FormGroup<OAuth2CustomParameterFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			isRequired: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isSensitiveField: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<OAuth2CustomPropType | null | undefined>(undefined),
		});

	}

	export enum OAuth2CustomPropType { TOKEN_URL = 'TOKEN_URL', AUTH_URL = 'AUTH_URL' }


	/** Configuration information required for custom authentication. */
	export interface CustomAuthConfig {
		customAuthenticationType?: string;
		authParameters?: Array<AuthParameter>;
	}

	/** Configuration information required for custom authentication. */
	export interface CustomAuthConfigFormProperties {
		customAuthenticationType: FormControl<string | null | undefined>,
	}
	export function CreateCustomAuthConfigFormGroup() {
		return new FormGroup<CustomAuthConfigFormProperties>({
			customAuthenticationType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about required authentication parameters. */
	export interface AuthParameter {
		key?: string;
		isRequired?: boolean | null;
		label?: string;
		description?: string;
		isSensitiveField?: boolean | null;
		connectorSuppliedValues?: Array<string>;
	}

	/** Information about required authentication parameters. */
	export interface AuthParameterFormProperties {
		key: FormControl<string | null | undefined>,
		isRequired: FormControl<boolean | null | undefined>,
		label: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		isSensitiveField: FormControl<boolean | null | undefined>,
	}
	export function CreateAuthParameterFormGroup() {
		return new FormGroup<AuthParameterFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			isRequired: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isSensitiveField: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about the connector runtime settings that are required for flow execution. */
	export interface ConnectorRuntimeSetting {
		key?: string;
		dataType?: string;
		isRequired?: boolean | null;
		label?: string;
		description?: string;
		scope?: string;
		connectorSuppliedValueOptions?: Array<string>;
	}

	/** Contains information about the connector runtime settings that are required for flow execution. */
	export interface ConnectorRuntimeSettingFormProperties {
		key: FormControl<string | null | undefined>,
		dataType: FormControl<string | null | undefined>,
		isRequired: FormControl<boolean | null | undefined>,
		label: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		scope: FormControl<string | null | undefined>,
	}
	export function CreateConnectorRuntimeSettingFormGroup() {
		return new FormGroup<ConnectorRuntimeSettingFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
			isRequired: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Operators { PROJECTION = 'PROJECTION', LESS_THAN = 'LESS_THAN', GREATER_THAN = 'GREATER_THAN', CONTAINS = 'CONTAINS', BETWEEN = 'BETWEEN', LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO', GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO', EQUAL_TO = 'EQUAL_TO', NOT_EQUAL_TO = 'NOT_EQUAL_TO', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }


	/** The type of provisioning that the connector supports, such as Lambda. */
	export enum ConnectorProvisioningType { LAMBDA = 'LAMBDA' }


	/** Contains information about the configuration of the connector being registered. */
	export interface ConnectorProvisioningConfig {
		lambda?: LambdaConnectorProvisioningConfig;
	}

	/** Contains information about the configuration of the connector being registered. */
	export interface ConnectorProvisioningConfigFormProperties {
	}
	export function CreateConnectorProvisioningConfigFormGroup() {
		return new FormGroup<ConnectorProvisioningConfigFormProperties>({
		});

	}


	/** Contains information about the configuration of the lambda which is being registered as the connector. */
	export interface LambdaConnectorProvisioningConfig {

		/** Required */
		lambdaArn: string;
	}

	/** Contains information about the configuration of the lambda which is being registered as the connector. */
	export interface LambdaConnectorProvisioningConfigFormProperties {

		/** Required */
		lambdaArn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaConnectorProvisioningConfigFormGroup() {
		return new FormGroup<LambdaConnectorProvisioningConfigFormProperties>({
			lambdaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SupportedDataTransferType { RECORD = 'RECORD', FILE = 'FILE' }

	export interface DescribeConnectorEntityResponse {

		/** Required */
		connectorEntityFields: Array<ConnectorEntityField>;
	}
	export interface DescribeConnectorEntityResponseFormProperties {
	}
	export function CreateDescribeConnectorEntityResponseFormGroup() {
		return new FormGroup<DescribeConnectorEntityResponseFormProperties>({
		});

	}


	/**  Describes the data model of a connector field. For example, for an <i>account</i> entity, the fields would be <i>account name</i>, <i>account ID</i>, and so on.  */
	export interface ConnectorEntityField {

		/** Required */
		identifier: string;
		parentIdentifier?: string;
		label?: string;
		isPrimaryKey?: boolean | null;
		defaultValue?: string;
		isDeprecated?: boolean | null;
		supportedFieldTypeDetails?: SupportedFieldTypeDetails;
		description?: string;
		sourceProperties?: SourceFieldProperties;
		destinationProperties?: DestinationFieldProperties;
		customProperties?: CustomProperties;
	}

	/**  Describes the data model of a connector field. For example, for an <i>account</i> entity, the fields would be <i>account name</i>, <i>account ID</i>, and so on.  */
	export interface ConnectorEntityFieldFormProperties {

		/** Required */
		identifier: FormControl<string | null | undefined>,
		parentIdentifier: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
		isPrimaryKey: FormControl<boolean | null | undefined>,
		defaultValue: FormControl<string | null | undefined>,
		isDeprecated: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateConnectorEntityFieldFormGroup() {
		return new FormGroup<ConnectorEntityFieldFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentIdentifier: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			isPrimaryKey: new FormControl<boolean | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			isDeprecated: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Contains details regarding all the supported <code>FieldTypes</code> and their corresponding <code>filterOperators</code> and <code>supportedValues</code>.  */
	export interface SupportedFieldTypeDetails {

		/** Required */
		v1: FieldTypeDetails;
	}

	/**  Contains details regarding all the supported <code>FieldTypes</code> and their corresponding <code>filterOperators</code> and <code>supportedValues</code>.  */
	export interface SupportedFieldTypeDetailsFormProperties {
	}
	export function CreateSupportedFieldTypeDetailsFormGroup() {
		return new FormGroup<SupportedFieldTypeDetailsFormProperties>({
		});

	}


	/**  Contains details regarding the supported field type and the operators that can be applied for filtering.  */
	export interface FieldTypeDetails {

		/** Required */
		fieldType: string;

		/** Required */
		filterOperators: Array<Operator>;
		supportedValues?: Array<string>;
		valueRegexPattern?: string;
		supportedDateFormat?: string;
		fieldValueRange?: Range;
		fieldLengthRange?: Range;
	}

	/**  Contains details regarding the supported field type and the operators that can be applied for filtering.  */
	export interface FieldTypeDetailsFormProperties {

		/** Required */
		fieldType: FormControl<string | null | undefined>,
		valueRegexPattern: FormControl<string | null | undefined>,
		supportedDateFormat: FormControl<string | null | undefined>,
	}
	export function CreateFieldTypeDetailsFormGroup() {
		return new FormGroup<FieldTypeDetailsFormProperties>({
			fieldType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valueRegexPattern: new FormControl<string | null | undefined>(undefined),
			supportedDateFormat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Operator { PROJECTION = 'PROJECTION', LESS_THAN = 'LESS_THAN', GREATER_THAN = 'GREATER_THAN', CONTAINS = 'CONTAINS', BETWEEN = 'BETWEEN', LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO', GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO', EQUAL_TO = 'EQUAL_TO', NOT_EQUAL_TO = 'NOT_EQUAL_TO', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }


	/** The range of values that the property supports. */
	export interface Range {
		maximum?: number | null;
		minimum?: number | null;
	}

	/** The range of values that the property supports. */
	export interface RangeFormProperties {
		maximum: FormControl<number | null | undefined>,
		minimum: FormControl<number | null | undefined>,
	}
	export function CreateRangeFormGroup() {
		return new FormGroup<RangeFormProperties>({
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The properties that can be applied to a field when the connector is being used as a source.  */
	export interface SourceFieldProperties {
		isRetrievable?: boolean | null;
		isQueryable?: boolean | null;
		isTimestampFieldForIncrementalQueries?: boolean | null;
	}

	/**  The properties that can be applied to a field when the connector is being used as a source.  */
	export interface SourceFieldPropertiesFormProperties {
		isRetrievable: FormControl<boolean | null | undefined>,
		isQueryable: FormControl<boolean | null | undefined>,
		isTimestampFieldForIncrementalQueries: FormControl<boolean | null | undefined>,
	}
	export function CreateSourceFieldPropertiesFormGroup() {
		return new FormGroup<SourceFieldPropertiesFormProperties>({
			isRetrievable: new FormControl<boolean | null | undefined>(undefined),
			isQueryable: new FormControl<boolean | null | undefined>(undefined),
			isTimestampFieldForIncrementalQueries: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  The properties that can be applied to a field when connector is being used as a destination.  */
	export interface DestinationFieldProperties {
		isCreatable?: boolean | null;
		isNullable?: boolean | null;
		isUpsertable?: boolean | null;
		isUpdatable?: boolean | null;
		isDefaultedOnCreate?: boolean | null;
		supportedWriteOperations?: Array<WriteOperationType>;
	}

	/**  The properties that can be applied to a field when connector is being used as a destination.  */
	export interface DestinationFieldPropertiesFormProperties {
		isCreatable: FormControl<boolean | null | undefined>,
		isNullable: FormControl<boolean | null | undefined>,
		isUpsertable: FormControl<boolean | null | undefined>,
		isUpdatable: FormControl<boolean | null | undefined>,
		isDefaultedOnCreate: FormControl<boolean | null | undefined>,
	}
	export function CreateDestinationFieldPropertiesFormGroup() {
		return new FormGroup<DestinationFieldPropertiesFormProperties>({
			isCreatable: new FormControl<boolean | null | undefined>(undefined),
			isNullable: new FormControl<boolean | null | undefined>(undefined),
			isUpsertable: new FormControl<boolean | null | undefined>(undefined),
			isUpdatable: new FormControl<boolean | null | undefined>(undefined),
			isDefaultedOnCreate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeConnectorProfilesResponse {
		connectorProfileDetails?: Array<ConnectorProfile>;
		nextToken?: string;
	}
	export interface DescribeConnectorProfilesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectorProfilesResponseFormGroup() {
		return new FormGroup<DescribeConnectorProfilesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. To keep the API intuitive and extensible, the fields that are common to all types of connector profiles are explicitly specified at the top level. The rest of the connector-specific properties are available via the <code>connectorProfileProperties</code> field.  */
	export interface ConnectorProfile {
		connectorProfileArn?: string;
		connectorProfileName?: string;
		connectorType?: ConnectorType;
		connectorLabel?: string;
		connectionMode?: ConnectionMode;
		credentialsArn?: string;
		connectorProfileProperties?: ConnectorProfileProperties;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		privateConnectionProvisioningState?: PrivateConnectionProvisioningState;
	}

	/**  Describes an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. To keep the API intuitive and extensible, the fields that are common to all types of connector profiles are explicitly specified at the top level. The rest of the connector-specific properties are available via the <code>connectorProfileProperties</code> field.  */
	export interface ConnectorProfileFormProperties {
		connectorProfileArn: FormControl<string | null | undefined>,
		connectorProfileName: FormControl<string | null | undefined>,
		connectorType: FormControl<ConnectorType | null | undefined>,
		connectorLabel: FormControl<string | null | undefined>,
		connectionMode: FormControl<ConnectionMode | null | undefined>,
		credentialsArn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateConnectorProfileFormGroup() {
		return new FormGroup<ConnectorProfileFormProperties>({
			connectorProfileArn: new FormControl<string | null | undefined>(undefined),
			connectorProfileName: new FormControl<string | null | undefined>(undefined),
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			connectorLabel: new FormControl<string | null | undefined>(undefined),
			connectionMode: new FormControl<ConnectionMode | null | undefined>(undefined),
			credentialsArn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConnectionMode { Public = 'Public', Private = 'Private' }


	/**  Specifies the private connection provisioning state.  */
	export interface PrivateConnectionProvisioningState {
		status?: PrivateConnectionProvisioningStatus;
		failureMessage?: string;
		failureCause?: PrivateConnectionProvisioningFailureCause;
	}

	/**  Specifies the private connection provisioning state.  */
	export interface PrivateConnectionProvisioningStateFormProperties {
		status: FormControl<PrivateConnectionProvisioningStatus | null | undefined>,
		failureMessage: FormControl<string | null | undefined>,
		failureCause: FormControl<PrivateConnectionProvisioningFailureCause | null | undefined>,
	}
	export function CreatePrivateConnectionProvisioningStateFormGroup() {
		return new FormGroup<PrivateConnectionProvisioningStateFormProperties>({
			status: new FormControl<PrivateConnectionProvisioningStatus | null | undefined>(undefined),
			failureMessage: new FormControl<string | null | undefined>(undefined),
			failureCause: new FormControl<PrivateConnectionProvisioningFailureCause | null | undefined>(undefined),
		});

	}

	export enum PrivateConnectionProvisioningStatus { FAILED = 'FAILED', PENDING = 'PENDING', CREATED = 'CREATED' }

	export enum PrivateConnectionProvisioningFailureCause { CONNECTOR_AUTHENTICATION = 'CONNECTOR_AUTHENTICATION', CONNECTOR_SERVER = 'CONNECTOR_SERVER', INTERNAL_SERVER = 'INTERNAL_SERVER', ACCESS_DENIED = 'ACCESS_DENIED', VALIDATION = 'VALIDATION' }

	export interface DescribeConnectorsResponse {
		connectorConfigurations?: ConnectorConfigurationsMap;
		connectors?: Array<ConnectorDetail>;
		nextToken?: string;
	}
	export interface DescribeConnectorsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectorsResponseFormGroup() {
		return new FormGroup<DescribeConnectorsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectorConfigurationsMap {
	}
	export interface ConnectorConfigurationsMapFormProperties {
	}
	export function CreateConnectorConfigurationsMapFormGroup() {
		return new FormGroup<ConnectorConfigurationsMapFormProperties>({
		});

	}


	/** Information about the registered connector. */
	export interface ConnectorDetail {
		connectorDescription?: string;
		connectorName?: string;
		connectorOwner?: string;
		connectorVersion?: string;
		applicationType?: string;
		connectorType?: ConnectorType;
		connectorLabel?: string;
		registeredAt?: Date;
		registeredBy?: string;
		connectorProvisioningType?: ConnectorProvisioningType;
		connectorModes?: Array<string>;
		supportedDataTransferTypes?: Array<SupportedDataTransferType>;
	}

	/** Information about the registered connector. */
	export interface ConnectorDetailFormProperties {
		connectorDescription: FormControl<string | null | undefined>,
		connectorName: FormControl<string | null | undefined>,
		connectorOwner: FormControl<string | null | undefined>,
		connectorVersion: FormControl<string | null | undefined>,
		applicationType: FormControl<string | null | undefined>,
		connectorType: FormControl<ConnectorType | null | undefined>,
		connectorLabel: FormControl<string | null | undefined>,
		registeredAt: FormControl<Date | null | undefined>,
		registeredBy: FormControl<string | null | undefined>,
		connectorProvisioningType: FormControl<ConnectorProvisioningType | null | undefined>,
	}
	export function CreateConnectorDetailFormGroup() {
		return new FormGroup<ConnectorDetailFormProperties>({
			connectorDescription: new FormControl<string | null | undefined>(undefined),
			connectorName: new FormControl<string | null | undefined>(undefined),
			connectorOwner: new FormControl<string | null | undefined>(undefined),
			connectorVersion: new FormControl<string | null | undefined>(undefined),
			applicationType: new FormControl<string | null | undefined>(undefined),
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			connectorLabel: new FormControl<string | null | undefined>(undefined),
			registeredAt: new FormControl<Date | null | undefined>(undefined),
			registeredBy: new FormControl<string | null | undefined>(undefined),
			connectorProvisioningType: new FormControl<ConnectorProvisioningType | null | undefined>(undefined),
		});

	}

	export interface DescribeFlowResponse {
		flowArn?: string;
		description?: string;
		flowName?: string;
		kmsArn?: string;
		flowStatus?: FlowStatus;
		flowStatusMessage?: string;
		sourceFlowConfig?: SourceFlowConfig;
		destinationFlowConfigList?: Array<DestinationFlowConfig>;
		lastRunExecutionDetails?: ExecutionDetails;
		triggerConfig?: TriggerConfig;
		tasks?: Array<Task>;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		createdBy?: string;
		lastUpdatedBy?: string;
		tags?: TagMap;
		metadataCatalogConfig?: MetadataCatalogConfig;
		lastRunMetadataCatalogDetails?: Array<MetadataCatalogDetail>;
		schemaVersion?: number | null;
	}
	export interface DescribeFlowResponseFormProperties {
		flowArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		flowName: FormControl<string | null | undefined>,
		kmsArn: FormControl<string | null | undefined>,
		flowStatus: FormControl<FlowStatus | null | undefined>,
		flowStatusMessage: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		lastUpdatedBy: FormControl<string | null | undefined>,
		schemaVersion: FormControl<number | null | undefined>,
	}
	export function CreateDescribeFlowResponseFormGroup() {
		return new FormGroup<DescribeFlowResponseFormProperties>({
			flowArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			flowName: new FormControl<string | null | undefined>(undefined),
			kmsArn: new FormControl<string | null | undefined>(undefined),
			flowStatus: new FormControl<FlowStatus | null | undefined>(undefined),
			flowStatusMessage: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			lastUpdatedBy: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Contains information about the configuration of the source connector used in the flow.  */
	export interface SourceFlowConfig {

		/** Required */
		connectorType: ConnectorType;
		apiVersion?: string;
		connectorProfileName?: string;

		/** Required */
		sourceConnectorProperties: SourceConnectorProperties;
		incrementalPullConfig?: IncrementalPullConfig;
	}

	/**  Contains information about the configuration of the source connector used in the flow.  */
	export interface SourceFlowConfigFormProperties {

		/** Required */
		connectorType: FormControl<ConnectorType | null | undefined>,
		apiVersion: FormControl<string | null | undefined>,
		connectorProfileName: FormControl<string | null | undefined>,
	}
	export function CreateSourceFlowConfigFormGroup() {
		return new FormGroup<SourceFlowConfigFormProperties>({
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined, [Validators.required]),
			apiVersion: new FormControl<string | null | undefined>(undefined),
			connectorProfileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes the details of the flow run, including the timestamp, status, and message.  */
	export interface ExecutionDetails {
		mostRecentExecutionMessage?: string;
		mostRecentExecutionTime?: Date;
		mostRecentExecutionStatus?: ExecutionStatus;
	}

	/**  Describes the details of the flow run, including the timestamp, status, and message.  */
	export interface ExecutionDetailsFormProperties {
		mostRecentExecutionMessage: FormControl<string | null | undefined>,
		mostRecentExecutionTime: FormControl<Date | null | undefined>,
		mostRecentExecutionStatus: FormControl<ExecutionStatus | null | undefined>,
	}
	export function CreateExecutionDetailsFormGroup() {
		return new FormGroup<ExecutionDetailsFormProperties>({
			mostRecentExecutionMessage: new FormControl<string | null | undefined>(undefined),
			mostRecentExecutionTime: new FormControl<Date | null | undefined>(undefined),
			mostRecentExecutionStatus: new FormControl<ExecutionStatus | null | undefined>(undefined),
		});

	}

	export enum ExecutionStatus { InProgress = 'InProgress', Successful = 'Successful', Error = 'Error', CancelStarted = 'CancelStarted', Canceled = 'Canceled' }


	/**  The trigger settings that determine how and when Amazon AppFlow runs the specified flow.  */
	export interface TriggerConfig {

		/** Required */
		triggerType: TriggerType;
		triggerProperties?: TriggerProperties;
	}

	/**  The trigger settings that determine how and when Amazon AppFlow runs the specified flow.  */
	export interface TriggerConfigFormProperties {

		/** Required */
		triggerType: FormControl<TriggerType | null | undefined>,
	}
	export function CreateTriggerConfigFormGroup() {
		return new FormGroup<TriggerConfigFormProperties>({
			triggerType: new FormControl<TriggerType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog. */
	export interface MetadataCatalogConfig {
		glueDataCatalog?: GlueDataCatalogConfig;
	}

	/** Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog. */
	export interface MetadataCatalogConfigFormProperties {
	}
	export function CreateMetadataCatalogConfigFormGroup() {
		return new FormGroup<MetadataCatalogConfigFormProperties>({
		});

	}


	/** Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run. */
	export interface MetadataCatalogDetail {
		catalogType?: CatalogType;
		tableName?: string;
		tableRegistrationOutput?: RegistrationOutput;
		partitionRegistrationOutput?: RegistrationOutput;
	}

	/** Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run. */
	export interface MetadataCatalogDetailFormProperties {
		catalogType: FormControl<CatalogType | null | undefined>,
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateMetadataCatalogDetailFormGroup() {
		return new FormGroup<MetadataCatalogDetailFormProperties>({
			catalogType: new FormControl<CatalogType | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CatalogType { GLUE = 'GLUE' }


	/** <p>Describes the status of an attempt from Amazon AppFlow to register a resource.</p> <p>When you run a flow that you've configured to use a metadata catalog, Amazon AppFlow registers a metadata table and data partitions with that catalog. This operation provides the status of that registration attempt. The operation also indicates how many related resources Amazon AppFlow created or updated.</p> */
	export interface RegistrationOutput {
		message?: string;
		result?: string;
		status?: ExecutionStatus;
	}

	/** <p>Describes the status of an attempt from Amazon AppFlow to register a resource.</p> <p>When you run a flow that you've configured to use a metadata catalog, Amazon AppFlow registers a metadata table and data partitions with that catalog. This operation provides the status of that registration attempt. The operation also indicates how many related resources Amazon AppFlow created or updated.</p> */
	export interface RegistrationOutputFormProperties {
		message: FormControl<string | null | undefined>,
		result: FormControl<string | null | undefined>,
		status: FormControl<ExecutionStatus | null | undefined>,
	}
	export function CreateRegistrationOutputFormGroup() {
		return new FormGroup<RegistrationOutputFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ExecutionStatus | null | undefined>(undefined),
		});

	}

	export interface DescribeFlowExecutionRecordsResponse {
		flowExecutions?: Array<ExecutionRecord>;
		nextToken?: string;
	}
	export interface DescribeFlowExecutionRecordsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFlowExecutionRecordsResponseFormGroup() {
		return new FormGroup<DescribeFlowExecutionRecordsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies information about the past flow run instances for a given flow.  */
	export interface ExecutionRecord {
		executionId?: string;
		executionStatus?: ExecutionStatus;
		executionResult?: ExecutionResult;
		startedAt?: Date;
		lastUpdatedAt?: Date;
		dataPullStartTime?: Date;
		dataPullEndTime?: Date;
		metadataCatalogDetails?: Array<MetadataCatalogDetail>;
	}

	/**  Specifies information about the past flow run instances for a given flow.  */
	export interface ExecutionRecordFormProperties {
		executionId: FormControl<string | null | undefined>,
		executionStatus: FormControl<ExecutionStatus | null | undefined>,
		startedAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		dataPullStartTime: FormControl<Date | null | undefined>,
		dataPullEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateExecutionRecordFormGroup() {
		return new FormGroup<ExecutionRecordFormProperties>({
			executionId: new FormControl<string | null | undefined>(undefined),
			executionStatus: new FormControl<ExecutionStatus | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			dataPullStartTime: new FormControl<Date | null | undefined>(undefined),
			dataPullEndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  Specifies the end result of the flow run.  */
	export interface ExecutionResult {
		errorInfo?: ErrorInfo;
		bytesProcessed?: number | null;
		bytesWritten?: number | null;
		recordsProcessed?: number | null;
	}

	/**  Specifies the end result of the flow run.  */
	export interface ExecutionResultFormProperties {
		bytesProcessed: FormControl<number | null | undefined>,
		bytesWritten: FormControl<number | null | undefined>,
		recordsProcessed: FormControl<number | null | undefined>,
	}
	export function CreateExecutionResultFormGroup() {
		return new FormGroup<ExecutionResultFormProperties>({
			bytesProcessed: new FormControl<number | null | undefined>(undefined),
			bytesWritten: new FormControl<number | null | undefined>(undefined),
			recordsProcessed: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Provides details in the event of a failed flow, including the failure count and the related error messages.  */
	export interface ErrorInfo {
		putFailuresCount?: number | null;
		executionMessage?: string;
	}

	/**  Provides details in the event of a failed flow, including the failure count and the related error messages.  */
	export interface ErrorInfoFormProperties {
		putFailuresCount: FormControl<number | null | undefined>,
		executionMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorInfoFormGroup() {
		return new FormGroup<ErrorInfoFormProperties>({
			putFailuresCount: new FormControl<number | null | undefined>(undefined),
			executionMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConnectorEntitiesResponse {

		/** Required */
		connectorEntityMap: ConnectorEntityMap;
		nextToken?: string;
	}
	export interface ListConnectorEntitiesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectorEntitiesResponseFormGroup() {
		return new FormGroup<ListConnectorEntitiesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectorEntityMap {
	}
	export interface ConnectorEntityMapFormProperties {
	}
	export function CreateConnectorEntityMapFormGroup() {
		return new FormGroup<ConnectorEntityMapFormProperties>({
		});

	}

	export interface ListConnectorsResponse {
		connectors?: Array<ConnectorDetail>;
		nextToken?: string;
	}
	export interface ListConnectorsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectorsResponseFormGroup() {
		return new FormGroup<ListConnectorsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFlowsResponse {
		flows?: Array<FlowDefinition>;
		nextToken?: string;
	}
	export interface ListFlowsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFlowsResponseFormGroup() {
		return new FormGroup<ListFlowsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The properties of the flow, such as its source, destination, trigger type, and so on.  */
	export interface FlowDefinition {
		flowArn?: string;
		description?: string;
		flowName?: string;
		flowStatus?: FlowStatus;
		sourceConnectorType?: ConnectorType;
		sourceConnectorLabel?: string;
		destinationConnectorType?: ConnectorType;
		destinationConnectorLabel?: string;
		triggerType?: TriggerType;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		createdBy?: string;
		lastUpdatedBy?: string;
		tags?: TagMap;
		lastRunExecutionDetails?: ExecutionDetails;
	}

	/**  The properties of the flow, such as its source, destination, trigger type, and so on.  */
	export interface FlowDefinitionFormProperties {
		flowArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		flowName: FormControl<string | null | undefined>,
		flowStatus: FormControl<FlowStatus | null | undefined>,
		sourceConnectorType: FormControl<ConnectorType | null | undefined>,
		sourceConnectorLabel: FormControl<string | null | undefined>,
		destinationConnectorType: FormControl<ConnectorType | null | undefined>,
		destinationConnectorLabel: FormControl<string | null | undefined>,
		triggerType: FormControl<TriggerType | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		lastUpdatedBy: FormControl<string | null | undefined>,
	}
	export function CreateFlowDefinitionFormGroup() {
		return new FormGroup<FlowDefinitionFormProperties>({
			flowArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			flowName: new FormControl<string | null | undefined>(undefined),
			flowStatus: new FormControl<FlowStatus | null | undefined>(undefined),
			sourceConnectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			sourceConnectorLabel: new FormControl<string | null | undefined>(undefined),
			destinationConnectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			destinationConnectorLabel: new FormControl<string | null | undefined>(undefined),
			triggerType: new FormControl<TriggerType | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			lastUpdatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface RegisterConnectorResponse {
		connectorArn?: string;
	}
	export interface RegisterConnectorResponseFormProperties {
		connectorArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterConnectorResponseFormGroup() {
		return new FormGroup<RegisterConnectorResponseFormProperties>({
			connectorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResetConnectorMetadataCacheResponse {
	}
	export interface ResetConnectorMetadataCacheResponseFormProperties {
	}
	export function CreateResetConnectorMetadataCacheResponseFormGroup() {
		return new FormGroup<ResetConnectorMetadataCacheResponseFormProperties>({
		});

	}

	export interface StartFlowResponse {
		flowArn?: string;
		flowStatus?: FlowStatus;
		executionId?: string;
	}
	export interface StartFlowResponseFormProperties {
		flowArn: FormControl<string | null | undefined>,
		flowStatus: FormControl<FlowStatus | null | undefined>,
		executionId: FormControl<string | null | undefined>,
	}
	export function CreateStartFlowResponseFormGroup() {
		return new FormGroup<StartFlowResponseFormProperties>({
			flowArn: new FormControl<string | null | undefined>(undefined),
			flowStatus: new FormControl<FlowStatus | null | undefined>(undefined),
			executionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopFlowResponse {
		flowArn?: string;
		flowStatus?: FlowStatus;
	}
	export interface StopFlowResponseFormProperties {
		flowArn: FormControl<string | null | undefined>,
		flowStatus: FormControl<FlowStatus | null | undefined>,
	}
	export function CreateStopFlowResponseFormGroup() {
		return new FormGroup<StopFlowResponseFormProperties>({
			flowArn: new FormControl<string | null | undefined>(undefined),
			flowStatus: new FormControl<FlowStatus | null | undefined>(undefined),
		});

	}

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UnregisterConnectorResponse {
	}
	export interface UnregisterConnectorResponseFormProperties {
	}
	export function CreateUnregisterConnectorResponseFormGroup() {
		return new FormGroup<UnregisterConnectorResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateConnectorProfileResponse {
		connectorProfileArn?: string;
	}
	export interface UpdateConnectorProfileResponseFormProperties {
		connectorProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectorProfileResponseFormGroup() {
		return new FormGroup<UpdateConnectorProfileResponseFormProperties>({
			connectorProfileArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConnectorRegistrationResponse {
		connectorArn?: string;
	}
	export interface UpdateConnectorRegistrationResponseFormProperties {
		connectorArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectorRegistrationResponseFormGroup() {
		return new FormGroup<UpdateConnectorRegistrationResponseFormProperties>({
			connectorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowResponse {
		flowStatus?: FlowStatus;
	}
	export interface UpdateFlowResponseFormProperties {
		flowStatus: FormControl<FlowStatus | null | undefined>,
	}
	export function CreateUpdateFlowResponseFormGroup() {
		return new FormGroup<UpdateFlowResponseFormProperties>({
			flowStatus: new FormControl<FlowStatus | null | undefined>(undefined),
		});

	}

	export interface CancelFlowExecutionsRequest {

		/** Required */
		flowName: string;
		executionIds?: Array<string>;
	}
	export interface CancelFlowExecutionsRequestFormProperties {

		/** Required */
		flowName: FormControl<string | null | undefined>,
	}
	export function CreateCancelFlowExecutionsRequestFormGroup() {
		return new FormGroup<CancelFlowExecutionsRequestFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The high-level entity that can be queried in Amazon AppFlow. For example, a Salesforce entity might be an <i>Account</i> or <i>Opportunity</i>, whereas a ServiceNow entity might be an <i>Incident</i>.  */
	export interface ConnectorEntity {

		/** Required */
		name: string;
		label?: string;
		hasNestedEntities?: boolean | null;
	}

	/**  The high-level entity that can be queried in Amazon AppFlow. For example, a Salesforce entity might be an <i>Account</i> or <i>Opportunity</i>, whereas a ServiceNow entity might be an <i>Incident</i>.  */
	export interface ConnectorEntityFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
		hasNestedEntities: FormControl<boolean | null | undefined>,
	}
	export function CreateConnectorEntityFormGroup() {
		return new FormGroup<ConnectorEntityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined),
			hasNestedEntities: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DynatraceConnectorOperator { PROJECTION = 'PROJECTION', BETWEEN = 'BETWEEN', EQUAL_TO = 'EQUAL_TO', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }

	export enum InforNexusConnectorOperator { PROJECTION = 'PROJECTION', BETWEEN = 'BETWEEN', EQUAL_TO = 'EQUAL_TO', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }

	export enum TrendmicroConnectorOperator { PROJECTION = 'PROJECTION', EQUAL_TO = 'EQUAL_TO', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }

	export enum SAPODataConnectorOperator { PROJECTION = 'PROJECTION', LESS_THAN = 'LESS_THAN', CONTAINS = 'CONTAINS', GREATER_THAN = 'GREATER_THAN', BETWEEN = 'BETWEEN', LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO', GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO', EQUAL_TO = 'EQUAL_TO', NOT_EQUAL_TO = 'NOT_EQUAL_TO', ADDITION = 'ADDITION', MULTIPLICATION = 'MULTIPLICATION', DIVISION = 'DIVISION', SUBTRACTION = 'SUBTRACTION', MASK_ALL = 'MASK_ALL', MASK_FIRST_N = 'MASK_FIRST_N', MASK_LAST_N = 'MASK_LAST_N', VALIDATE_NON_NULL = 'VALIDATE_NON_NULL', VALIDATE_NON_ZERO = 'VALIDATE_NON_ZERO', VALIDATE_NON_NEGATIVE = 'VALIDATE_NON_NEGATIVE', VALIDATE_NUMERIC = 'VALIDATE_NUMERIC', NO_OP = 'NO_OP' }


	/**  Defines the connector-specific configuration and credentials for the connector profile.  */
	export interface ConnectorProfileConfig {

		/** Required */
		connectorProfileProperties: ConnectorProfileProperties;
		connectorProfileCredentials?: ConnectorProfileCredentials;
	}

	/**  Defines the connector-specific configuration and credentials for the connector profile.  */
	export interface ConnectorProfileConfigFormProperties {
	}
	export function CreateConnectorProfileConfigFormGroup() {
		return new FormGroup<ConnectorProfileConfigFormProperties>({
		});

	}

	export interface CreateConnectorProfileRequest {

		/** Required */
		connectorProfileName: string;
		kmsArn?: string;

		/** Required */
		connectorType: ConnectorType;
		connectorLabel?: string;

		/** Required */
		connectionMode: ConnectionMode;

		/** Required */
		connectorProfileConfig: ConnectorProfileConfig;
		clientToken?: string;
	}
	export interface CreateConnectorProfileRequestFormProperties {

		/** Required */
		connectorProfileName: FormControl<string | null | undefined>,
		kmsArn: FormControl<string | null | undefined>,

		/** Required */
		connectorType: FormControl<ConnectorType | null | undefined>,
		connectorLabel: FormControl<string | null | undefined>,

		/** Required */
		connectionMode: FormControl<ConnectionMode | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectorProfileRequestFormGroup() {
		return new FormGroup<CreateConnectorProfileRequestFormProperties>({
			connectorProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsArn: new FormControl<string | null | undefined>(undefined),
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined, [Validators.required]),
			connectorLabel: new FormControl<string | null | undefined>(undefined),
			connectionMode: new FormControl<ConnectionMode | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFlowRequest {

		/** Required */
		flowName: string;
		description?: string;
		kmsArn?: string;

		/** Required */
		triggerConfig: TriggerConfig;

		/** Required */
		sourceFlowConfig: SourceFlowConfig;

		/** Required */
		destinationFlowConfigList: Array<DestinationFlowConfig>;

		/** Required */
		tasks: Array<Task>;
		tags?: TagMap;
		metadataCatalogConfig?: MetadataCatalogConfig;
		clientToken?: string;
	}
	export interface CreateFlowRequestFormProperties {

		/** Required */
		flowName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		kmsArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateFlowRequestFormGroup() {
		return new FormGroup<CreateFlowRequestFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			kmsArn: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteConnectorProfileRequest {

		/** Required */
		connectorProfileName: string;
		forceDelete?: boolean | null;
	}
	export interface DeleteConnectorProfileRequestFormProperties {

		/** Required */
		connectorProfileName: FormControl<string | null | undefined>,
		forceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteConnectorProfileRequestFormGroup() {
		return new FormGroup<DeleteConnectorProfileRequestFormProperties>({
			connectorProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			forceDelete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteFlowRequest {

		/** Required */
		flowName: string;
		forceDelete?: boolean | null;
	}
	export interface DeleteFlowRequestFormProperties {

		/** Required */
		flowName: FormControl<string | null | undefined>,
		forceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteFlowRequestFormGroup() {
		return new FormGroup<DeleteFlowRequestFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			forceDelete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeConnectorEntityRequest {

		/** Required */
		connectorEntityName: string;
		connectorType?: ConnectorType;
		connectorProfileName?: string;
		apiVersion?: string;
	}
	export interface DescribeConnectorEntityRequestFormProperties {

		/** Required */
		connectorEntityName: FormControl<string | null | undefined>,
		connectorType: FormControl<ConnectorType | null | undefined>,
		connectorProfileName: FormControl<string | null | undefined>,
		apiVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectorEntityRequestFormGroup() {
		return new FormGroup<DescribeConnectorEntityRequestFormProperties>({
			connectorEntityName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			connectorProfileName: new FormControl<string | null | undefined>(undefined),
			apiVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConnectorProfilesRequest {
		connectorProfileNames?: Array<string>;
		connectorType?: ConnectorType;
		connectorLabel?: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeConnectorProfilesRequestFormProperties {
		connectorType: FormControl<ConnectorType | null | undefined>,
		connectorLabel: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectorProfilesRequestFormGroup() {
		return new FormGroup<DescribeConnectorProfilesRequestFormProperties>({
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			connectorLabel: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConnectorRequest {

		/** Required */
		connectorType: ConnectorType;
		connectorLabel?: string;
	}
	export interface DescribeConnectorRequestFormProperties {

		/** Required */
		connectorType: FormControl<ConnectorType | null | undefined>,
		connectorLabel: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectorRequestFormGroup() {
		return new FormGroup<DescribeConnectorRequestFormProperties>({
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined, [Validators.required]),
			connectorLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConnectorsRequest {
		connectorTypes?: Array<ConnectorType>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeConnectorsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectorsRequestFormGroup() {
		return new FormGroup<DescribeConnectorsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFlowExecutionRecordsRequest {

		/** Required */
		flowName: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeFlowExecutionRecordsRequestFormProperties {

		/** Required */
		flowName: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFlowExecutionRecordsRequestFormGroup() {
		return new FormGroup<DescribeFlowExecutionRecordsRequestFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFlowRequest {

		/** Required */
		flowName: string;
	}
	export interface DescribeFlowRequestFormProperties {

		/** Required */
		flowName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFlowRequestFormGroup() {
		return new FormGroup<DescribeFlowRequestFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListConnectorEntitiesRequest {
		connectorProfileName?: string;
		connectorType?: ConnectorType;
		entitiesPath?: string;
		apiVersion?: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListConnectorEntitiesRequestFormProperties {
		connectorProfileName: FormControl<string | null | undefined>,
		connectorType: FormControl<ConnectorType | null | undefined>,
		entitiesPath: FormControl<string | null | undefined>,
		apiVersion: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectorEntitiesRequestFormGroup() {
		return new FormGroup<ListConnectorEntitiesRequestFormProperties>({
			connectorProfileName: new FormControl<string | null | undefined>(undefined),
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			entitiesPath: new FormControl<string | null | undefined>(undefined),
			apiVersion: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConnectorsRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListConnectorsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectorsRequestFormGroup() {
		return new FormGroup<ListConnectorsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFlowsRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListFlowsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFlowsRequestFormGroup() {
		return new FormGroup<ListFlowsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export enum OperatorPropertiesKeys { VALUE = 'VALUE', VALUES = 'VALUES', DATA_TYPE = 'DATA_TYPE', UPPER_BOUND = 'UPPER_BOUND', LOWER_BOUND = 'LOWER_BOUND', SOURCE_DATA_TYPE = 'SOURCE_DATA_TYPE', DESTINATION_DATA_TYPE = 'DESTINATION_DATA_TYPE', VALIDATION_ACTION = 'VALIDATION_ACTION', MASK_VALUE = 'MASK_VALUE', MASK_LENGTH = 'MASK_LENGTH', TRUNCATE_LENGTH = 'TRUNCATE_LENGTH', MATH_OPERATION_FIELDS_ORDER = 'MATH_OPERATION_FIELDS_ORDER', CONCAT_FORMAT = 'CONCAT_FORMAT', SUBFIELD_CATEGORY_MAP = 'SUBFIELD_CATEGORY_MAP', EXCLUDE_SOURCE_FIELDS_LIST = 'EXCLUDE_SOURCE_FIELDS_LIST', INCLUDE_NEW_FIELDS = 'INCLUDE_NEW_FIELDS', ORDERED_PARTITION_KEYS_LIST = 'ORDERED_PARTITION_KEYS_LIST' }

	export interface RegisterConnectorRequest {
		connectorLabel?: string;
		description?: string;
		connectorProvisioningType?: ConnectorProvisioningType;
		connectorProvisioningConfig?: ConnectorProvisioningConfig;
		clientToken?: string;
	}
	export interface RegisterConnectorRequestFormProperties {
		connectorLabel: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		connectorProvisioningType: FormControl<ConnectorProvisioningType | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateRegisterConnectorRequestFormGroup() {
		return new FormGroup<RegisterConnectorRequestFormProperties>({
			connectorLabel: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			connectorProvisioningType: new FormControl<ConnectorProvisioningType | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResetConnectorMetadataCacheRequest {
		connectorProfileName?: string;
		connectorType?: ConnectorType;
		connectorEntityName?: string;
		entitiesPath?: string;
		apiVersion?: string;
	}
	export interface ResetConnectorMetadataCacheRequestFormProperties {
		connectorProfileName: FormControl<string | null | undefined>,
		connectorType: FormControl<ConnectorType | null | undefined>,
		connectorEntityName: FormControl<string | null | undefined>,
		entitiesPath: FormControl<string | null | undefined>,
		apiVersion: FormControl<string | null | undefined>,
	}
	export function CreateResetConnectorMetadataCacheRequestFormGroup() {
		return new FormGroup<ResetConnectorMetadataCacheRequestFormProperties>({
			connectorProfileName: new FormControl<string | null | undefined>(undefined),
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			connectorEntityName: new FormControl<string | null | undefined>(undefined),
			entitiesPath: new FormControl<string | null | undefined>(undefined),
			apiVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartFlowRequest {

		/** Required */
		flowName: string;
		clientToken?: string;
	}
	export interface StartFlowRequestFormProperties {

		/** Required */
		flowName: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartFlowRequestFormGroup() {
		return new FormGroup<StartFlowRequestFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopFlowRequest {

		/** Required */
		flowName: string;
	}
	export interface StopFlowRequestFormProperties {

		/** Required */
		flowName: FormControl<string | null | undefined>,
	}
	export function CreateStopFlowRequestFormGroup() {
		return new FormGroup<StopFlowRequestFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UnregisterConnectorRequest {

		/** Required */
		connectorLabel: string;
		forceDelete?: boolean | null;
	}
	export interface UnregisterConnectorRequestFormProperties {

		/** Required */
		connectorLabel: FormControl<string | null | undefined>,
		forceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateUnregisterConnectorRequestFormGroup() {
		return new FormGroup<UnregisterConnectorRequestFormProperties>({
			connectorLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			forceDelete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateConnectorProfileRequest {

		/** Required */
		connectorProfileName: string;

		/** Required */
		connectionMode: ConnectionMode;

		/** Required */
		connectorProfileConfig: ConnectorProfileConfig;
		clientToken?: string;
	}
	export interface UpdateConnectorProfileRequestFormProperties {

		/** Required */
		connectorProfileName: FormControl<string | null | undefined>,

		/** Required */
		connectionMode: FormControl<ConnectionMode | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectorProfileRequestFormGroup() {
		return new FormGroup<UpdateConnectorProfileRequestFormProperties>({
			connectorProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectionMode: new FormControl<ConnectionMode | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConnectorRegistrationRequest {

		/** Required */
		connectorLabel: string;
		description?: string;

		/** Contains information about the configuration of the connector being registered. */
		connectorProvisioningConfig?: ConnectorProvisioningConfig;
		clientToken?: string;
	}
	export interface UpdateConnectorRegistrationRequestFormProperties {

		/** Required */
		connectorLabel: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectorRegistrationRequestFormGroup() {
		return new FormGroup<UpdateConnectorRegistrationRequestFormProperties>({
			connectorLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowRequest {

		/** Required */
		flowName: string;
		description?: string;

		/** Required */
		triggerConfig: TriggerConfig;

		/**
		 * Contains information about the configuration of the source connector used in the flow.
		 * Required
		 */
		sourceFlowConfig: SourceFlowConfig;

		/** Required */
		destinationFlowConfigList: Array<DestinationFlowConfig>;

		/** Required */
		tasks: Array<Task>;
		metadataCatalogConfig?: MetadataCatalogConfig;
		clientToken?: string;
	}
	export interface UpdateFlowRequestFormProperties {

		/** Required */
		flowName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowRequestFormGroup() {
		return new FormGroup<UpdateFlowRequestFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Cancels active runs for a flow.</p> <p>You can cancel all of the active runs for a flow, or you can cancel specific runs by providing their IDs.</p> <p>You can cancel a flow run only when the run is in progress. You can't cancel a run that has already completed or failed. You also can't cancel a run that's scheduled to occur but hasn't started yet. To prevent a scheduled run, you can deactivate the flow with the <code>StopFlow</code> action.</p> <p>You cannot resume a run after you cancel it.</p> <p>When you send your request, the status for each run becomes <code>CancelStarted</code>. When the cancellation completes, the status becomes <code>Canceled</code>.</p> <note> <p>When you cancel a run, you still incur charges for any data that the run already processed before the cancellation. If the run had already written some data to the flow destination, then that data remains in the destination. If you configured the flow to use a batch API (such as the Salesforce Bulk API 2.0), then the run will finish reading or writing its entire batch of data after the cancellation. For these operations, the data processing charges for Amazon AppFlow apply. For the pricing information, see <a href="http://aws.amazon.com/appflow/pricing/">Amazon AppFlow pricing</a>.</p> </note>
		 * Post cancel-flow-executions
		 * @return {CancelFlowExecutionsResponse} Success
		 */
		CancelFlowExecutions(requestBody: CancelFlowExecutionsPostBody): Observable<CancelFlowExecutionsResponse> {
			return this.http.post<CancelFlowExecutionsResponse>(this.baseUri + 'cancel-flow-executions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.
		 * Post create-connector-profile
		 * @return {CreateConnectorProfileResponse} Success
		 */
		CreateConnectorProfile(requestBody: CreateConnectorProfilePostBody): Observable<CreateConnectorProfileResponse> {
			return this.http.post<CreateConnectorProfileResponse>(this.baseUri + 'create-connector-profile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once.
		 * Post create-flow
		 * @return {CreateFlowResponse} Success
		 */
		CreateFlow(requestBody: CreateFlowPostBody): Observable<CreateFlowResponse> {
			return this.http.post<CreateFlowResponse>(this.baseUri + 'create-flow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables you to delete an existing connector profile.
		 * Post delete-connector-profile
		 * @return {DeleteConnectorProfileResponse} Success
		 */
		DeleteConnectorProfile(requestBody: DeleteConnectorProfilePostBody): Observable<DeleteConnectorProfileResponse> {
			return this.http.post<DeleteConnectorProfileResponse>(this.baseUri + 'delete-connector-profile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time.
		 * Post delete-flow
		 * @return {DeleteFlowResponse} Success
		 */
		DeleteFlow(requestBody: DeleteFlowPostBody): Observable<DeleteFlowResponse> {
			return this.http.post<DeleteFlowResponse>(this.baseUri + 'delete-flow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.
		 * Post describe-connector
		 * @return {DescribeConnectorResponse} Success
		 */
		DescribeConnector(requestBody: DescribeConnectorPostBody): Observable<DescribeConnectorResponse> {
			return this.http.post<DescribeConnectorResponse>(this.baseUri + 'describe-connector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity.
		 * Post describe-connector-entity
		 * @return {DescribeConnectorEntityResponse} Success
		 */
		DescribeConnectorEntity(requestBody: DescribeConnectorEntityPostBody): Observable<DescribeConnectorEntityResponse> {
			return this.http.post<DescribeConnectorEntityResponse>(this.baseUri + 'describe-connector-entity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
		 * Post describe-connector-profiles
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeConnectorProfilesResponse} Success
		 */
		DescribeConnectorProfiles(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeConnectorProfilesPostBody): Observable<DescribeConnectorProfilesResponse> {
			return this.http.post<DescribeConnectorProfilesResponse>(this.baseUri + 'describe-connector-profiles?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page.
		 * Post describe-connectors
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeConnectorsResponse} Success
		 */
		DescribeConnectors(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeConnectorsPostBody): Observable<DescribeConnectorsResponse> {
			return this.http.post<DescribeConnectorsResponse>(this.baseUri + 'describe-connectors?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a description of the specified flow.
		 * Post describe-flow
		 * @return {DescribeFlowResponse} Success
		 */
		DescribeFlow(requestBody: DescribeFlowPostBody): Observable<DescribeFlowResponse> {
			return this.http.post<DescribeFlowResponse>(this.baseUri + 'describe-flow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetches the execution history of the flow.
		 * Post describe-flow-execution-records
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeFlowExecutionRecordsResponse} Success
		 */
		DescribeFlowExecutionRecords(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeFlowExecutionRecordsPostBody): Observable<DescribeFlowExecutionRecordsResponse> {
			return this.http.post<DescribeFlowExecutionRecordsResponse>(this.baseUri + 'describe-flow-execution-records?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity.
		 * Post list-connector-entities
		 * @return {ListConnectorEntitiesResponse} Success
		 */
		ListConnectorEntities(requestBody: ListConnectorEntitiesPostBody): Observable<ListConnectorEntitiesResponse> {
			return this.http.post<ListConnectorEntitiesResponse>(this.baseUri + 'list-connector-entities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors.
		 * Post list-connectors
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListConnectorsResponse} Success
		 */
		ListConnectors(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListConnectorsPostBody): Observable<ListConnectorsResponse> {
			return this.http.post<ListConnectorsResponse>(this.baseUri + 'list-connectors?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the flows associated with your account.
		 * Post list-flows
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFlowsResponse} Success
		 */
		ListFlows(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListFlowsPostBody): Observable<ListFlowsResponse> {
			return this.http.post<ListFlowsResponse>(this.baseUri + 'list-flows?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the tags that are associated with a specified flow.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn  The Amazon Resource Name (ARN) of the specified flow. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Applies a tag to the specified flow.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn  The Amazon Resource Name (ARN) of the flow that you want to tag. 
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.
		 * Post register-connector
		 * @return {RegisterConnectorResponse} Success
		 */
		RegisterConnector(requestBody: RegisterConnectorPostBody): Observable<RegisterConnectorResponse> {
			return this.http.post<RegisterConnectorResponse>(this.baseUri + 'register-connector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resets metadata about your connector entities that Amazon AppFlow stored in its cache. Use this action when you want Amazon AppFlow to return the latest information about the data that you have in a source application.</p> <p>Amazon AppFlow returns metadata about your entities when you use the ListConnectorEntities or DescribeConnectorEntities actions. Following these actions, Amazon AppFlow caches the metadata to reduce the number of API requests that it must send to the source application. Amazon AppFlow automatically resets the cache once every hour, but you can use this action when you want to get the latest metadata right away.</p>
		 * Post reset-connector-metadata-cache
		 * @return {ResetConnectorMetadataCacheResponse} Success
		 */
		ResetConnectorMetadataCache(requestBody: ResetConnectorMetadataCachePostBody): Observable<ResetConnectorMetadataCacheResponse> {
			return this.http.post<ResetConnectorMetadataCacheResponse>(this.baseUri + 'reset-connector-metadata-cache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow.
		 * Post start-flow
		 * @return {StartFlowResponse} Success
		 */
		StartFlow(requestBody: StartFlowPostBody): Observable<StartFlowResponse> {
			return this.http.post<StartFlowResponse>(this.baseUri + 'start-flow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow.
		 * Post stop-flow
		 * @return {StopFlowResponse} Success
		 */
		StopFlow(requestBody: StopFlowPostBody): Observable<StopFlowResponse> {
			return this.http.post<StopFlowResponse>(this.baseUri + 'stop-flow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unregisters the custom connector registered in your account that matches the connector label provided in the request.
		 * Post unregister-connector
		 * @return {UnregisterConnectorResponse} Success
		 */
		UnregisterConnector(requestBody: UnregisterConnectorPostBody): Observable<UnregisterConnectorResponse> {
			return this.http.post<UnregisterConnectorResponse>(this.baseUri + 'unregister-connector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from the specified flow.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn  The Amazon Resource Name (ARN) of the flow that you want to untag. 
		 * @param {Array<string>} tagKeys  The tag keys associated with the tag that you want to remove from your flow. 
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates a given connector profile associated with your account.
		 * Post update-connector-profile
		 * @return {UpdateConnectorProfileResponse} Success
		 */
		UpdateConnectorProfile(requestBody: UpdateConnectorProfilePostBody): Observable<UpdateConnectorProfileResponse> {
			return this.http.post<UpdateConnectorProfileResponse>(this.baseUri + 'update-connector-profile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>
		 * Post update-connector-registration
		 * @return {UpdateConnectorRegistrationResponse} Success
		 */
		UpdateConnectorRegistration(requestBody: UpdateConnectorRegistrationPostBody): Observable<UpdateConnectorRegistrationResponse> {
			return this.http.post<UpdateConnectorRegistrationResponse>(this.baseUri + 'update-connector-registration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing flow.
		 * Post update-flow
		 * @return {UpdateFlowResponse} Success
		 */
		UpdateFlow(requestBody: UpdateFlowPostBody): Observable<UpdateFlowResponse> {
			return this.http.post<UpdateFlowResponse>(this.baseUri + 'update-flow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CancelFlowExecutionsPostBody {

		/**
		 * The name of a flow with active runs that you want to cancel.
		 * Required
		 * Max length: 256
		 */
		flowName: string;

		/**
		 * <p>The ID of each active run to cancel. These runs must belong to the flow you specify in your request.</p> <p>If you omit this parameter, your request ends all active runs that belong to the flow.</p>
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		executionIds?: Array<string>;
	}
	export interface CancelFlowExecutionsPostBodyFormProperties {

		/**
		 * The name of a flow with active runs that you want to cancel.
		 * Required
		 * Max length: 256
		 */
		flowName: FormControl<string | null | undefined>,
	}
	export function CreateCancelFlowExecutionsPostBodyFormGroup() {
		return new FormGroup<CancelFlowExecutionsPostBodyFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9][\w!@#.-]+')]),
		});

	}

	export interface CreateConnectorProfilePostBody {

		/**
		 * The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your Amazon Web Services account.
		 * Required
		 * Max length: 256
		 */
		connectorProfileName: string;

		/**
		 * The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
		 * Max length: 2048
		 * Min length: 20
		 */
		kmsArn?: string | null;

		/**
		 * The type of connector, such as Salesforce, Amplitude, and so on.
		 * Required
		 */
		connectorType: ConnectorType;

		/**
		 * The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.
		 * Max length: 256
		 */
		connectorLabel?: string | null;

		/**
		 * Indicates the connection mode and specifies whether it is public or private. Private flows use Amazon Web Services PrivateLink to route data over Amazon Web Services infrastructure without exposing it to the public internet.
		 * Required
		 */
		connectionMode: ConnectionMode;

		/**
		 * Defines the connector-specific configuration and credentials for the connector profile.
		 * Required
		 */
		connectorProfileConfig: CreateConnectorProfilePostBodyConnectorProfileConfig;

		/**
		 * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>CreateConnectorProfile</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>CreateConnectorProfile</code>. The token is active for 8 hours.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface CreateConnectorProfilePostBodyFormProperties {

		/**
		 * The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your Amazon Web Services account.
		 * Required
		 * Max length: 256
		 */
		connectorProfileName: FormControl<string | null | undefined>,

		/**
		 * The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
		 * Max length: 2048
		 * Min length: 20
		 */
		kmsArn: FormControl<string | null | undefined>,

		/**
		 * The type of connector, such as Salesforce, Amplitude, and so on.
		 * Required
		 */
		connectorType: FormControl<ConnectorType | null | undefined>,

		/**
		 * The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.
		 * Max length: 256
		 */
		connectorLabel: FormControl<string | null | undefined>,

		/**
		 * Indicates the connection mode and specifies whether it is public or private. Private flows use Amazon Web Services PrivateLink to route data over Amazon Web Services infrastructure without exposing it to the public internet.
		 * Required
		 */
		connectionMode: FormControl<ConnectionMode | null | undefined>,

		/**
		 * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>CreateConnectorProfile</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>CreateConnectorProfile</code>. The token is active for 8 hours.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectorProfilePostBodyFormGroup() {
		return new FormGroup<CreateConnectorProfilePostBodyFormProperties>({
			connectorProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[\w/!@#+=.-]+')]),
			kmsArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:aws:kms:.*:[0-9]+:.*')]),
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined, [Validators.required]),
			connectorLabel: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9][\w!@#.-]+')]),
			connectionMode: new FormControl<ConnectionMode | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[ -~]+')]),
		});

	}

	export interface CreateConnectorProfilePostBodyConnectorProfileConfig {
		connectorProfileProperties?: ConnectorProfileProperties;
		connectorProfileCredentials?: ConnectorProfileCredentials;
	}
	export interface CreateConnectorProfilePostBodyConnectorProfileConfigFormProperties {
	}
	export function CreateCreateConnectorProfilePostBodyConnectorProfileConfigFormGroup() {
		return new FormGroup<CreateConnectorProfilePostBodyConnectorProfileConfigFormProperties>({
		});

	}

	export interface CreateFlowPostBody {

		/**
		 * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
		 * Required
		 * Max length: 256
		 */
		flowName: string;

		/**
		 * A description of the flow you want to create.
		 * Max length: 2048
		 */
		description?: string | null;

		/**
		 * The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
		 * Max length: 2048
		 * Min length: 20
		 */
		kmsArn?: string | null;

		/**
		 * The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
		 * Required
		 */
		triggerConfig: CreateFlowPostBodyTriggerConfig;

		/**
		 * Contains information about the configuration of the source connector used in the flow.
		 * Required
		 */
		sourceFlowConfig: CreateFlowPostBodySourceFlowConfig;

		/**
		 * The configuration that controls how Amazon AppFlow places data in the destination connector.
		 * Required
		 */
		destinationFlowConfigList: Array<DestinationFlowConfig>;

		/**
		 * A list of tasks that Amazon AppFlow performs while transferring the data in the flow run.
		 * Required
		 */
		tasks: Array<Task>;

		/** The tags used to organize, track, or control access for your flow. */
		tags?: {[id: string]: string };

		/** Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog. */
		metadataCatalogConfig?: CreateFlowPostBodyMetadataCatalogConfig;

		/**
		 * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>CreateFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>CreateFlow</code>. The token is active for 8 hours.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface CreateFlowPostBodyFormProperties {

		/**
		 * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
		 * Required
		 * Max length: 256
		 */
		flowName: FormControl<string | null | undefined>,

		/**
		 * A description of the flow you want to create.
		 * Max length: 2048
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
		 * Max length: 2048
		 * Min length: 20
		 */
		kmsArn: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for your flow. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>CreateFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>CreateFlow</code>. The token is active for 8 hours.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateFlowPostBodyFormGroup() {
		return new FormGroup<CreateFlowPostBodyFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9][\w!@#.-]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('[\w!@#\-.?,\s]*')]),
			kmsArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:aws:kms:.*:[0-9]+:.*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[ -~]+')]),
		});

	}

	export interface CreateFlowPostBodyTriggerConfig {
		triggerType?: TriggerType;
		triggerProperties?: TriggerProperties;
	}
	export interface CreateFlowPostBodyTriggerConfigFormProperties {
		triggerType: FormControl<TriggerType | null | undefined>,
	}
	export function CreateCreateFlowPostBodyTriggerConfigFormGroup() {
		return new FormGroup<CreateFlowPostBodyTriggerConfigFormProperties>({
			triggerType: new FormControl<TriggerType | null | undefined>(undefined),
		});

	}

	export interface CreateFlowPostBodySourceFlowConfig {
		connectorType?: ConnectorType;
		apiVersion?: string;
		connectorProfileName?: string;
		sourceConnectorProperties?: SourceConnectorProperties;
		incrementalPullConfig?: IncrementalPullConfig;
	}
	export interface CreateFlowPostBodySourceFlowConfigFormProperties {
		connectorType: FormControl<ConnectorType | null | undefined>,
		apiVersion: FormControl<string | null | undefined>,
		connectorProfileName: FormControl<string | null | undefined>,
	}
	export function CreateCreateFlowPostBodySourceFlowConfigFormGroup() {
		return new FormGroup<CreateFlowPostBodySourceFlowConfigFormProperties>({
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			apiVersion: new FormControl<string | null | undefined>(undefined),
			connectorProfileName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFlowPostBodyMetadataCatalogConfig {
		glueDataCatalog?: GlueDataCatalogConfig;
	}
	export interface CreateFlowPostBodyMetadataCatalogConfigFormProperties {
	}
	export function CreateCreateFlowPostBodyMetadataCatalogConfigFormGroup() {
		return new FormGroup<CreateFlowPostBodyMetadataCatalogConfigFormProperties>({
		});

	}

	export interface DeleteConnectorProfilePostBody {

		/**
		 * The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your account.
		 * Required
		 * Max length: 256
		 */
		connectorProfileName: string;

		/** Indicates whether Amazon AppFlow should delete the profile, even if it is currently in use in one or more flows. */
		forceDelete?: boolean | null;
	}
	export interface DeleteConnectorProfilePostBodyFormProperties {

		/**
		 * The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your account.
		 * Required
		 * Max length: 256
		 */
		connectorProfileName: FormControl<string | null | undefined>,

		/** Indicates whether Amazon AppFlow should delete the profile, even if it is currently in use in one or more flows. */
		forceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteConnectorProfilePostBodyFormGroup() {
		return new FormGroup<DeleteConnectorProfilePostBodyFormProperties>({
			connectorProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[\w/!@#+=.-]+')]),
			forceDelete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteFlowPostBody {

		/**
		 * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
		 * Required
		 * Max length: 256
		 */
		flowName: string;

		/** Indicates whether Amazon AppFlow should delete the flow, even if it is currently in use. */
		forceDelete?: boolean | null;
	}
	export interface DeleteFlowPostBodyFormProperties {

		/**
		 * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
		 * Required
		 * Max length: 256
		 */
		flowName: FormControl<string | null | undefined>,

		/** Indicates whether Amazon AppFlow should delete the flow, even if it is currently in use. */
		forceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteFlowPostBodyFormGroup() {
		return new FormGroup<DeleteFlowPostBodyFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9][\w!@#.-]+')]),
			forceDelete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeConnectorPostBody {

		/**
		 * The connector type, such as CUSTOMCONNECTOR, Saleforce, Marketo. Please choose CUSTOMCONNECTOR for Lambda based custom connectors.
		 * Required
		 */
		connectorType: ConnectorType;

		/**
		 * The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.
		 * Max length: 256
		 */
		connectorLabel?: string | null;
	}
	export interface DescribeConnectorPostBodyFormProperties {

		/**
		 * The connector type, such as CUSTOMCONNECTOR, Saleforce, Marketo. Please choose CUSTOMCONNECTOR for Lambda based custom connectors.
		 * Required
		 */
		connectorType: FormControl<ConnectorType | null | undefined>,

		/**
		 * The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.
		 * Max length: 256
		 */
		connectorLabel: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectorPostBodyFormGroup() {
		return new FormGroup<DescribeConnectorPostBodyFormProperties>({
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined, [Validators.required]),
			connectorLabel: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9][\w!@#.-]+')]),
		});

	}

	export interface DescribeConnectorEntityPostBody {

		/**
		 * The entity name for that connector.
		 * Required
		 * Max length: 1024
		 */
		connectorEntityName: string;

		/** The type of connector application, such as Salesforce, Amplitude, and so on. */
		connectorType?: ConnectorType | null;

		/**
		 * The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account.
		 * Max length: 256
		 */
		connectorProfileName?: string | null;

		/**
		 * The version of the API that's used by the connector.
		 * Max length: 256
		 */
		apiVersion?: string | null;
	}
	export interface DescribeConnectorEntityPostBodyFormProperties {

		/**
		 * The entity name for that connector.
		 * Required
		 * Max length: 1024
		 */
		connectorEntityName: FormControl<string | null | undefined>,

		/** The type of connector application, such as Salesforce, Amplitude, and so on. */
		connectorType: FormControl<ConnectorType | null | undefined>,

		/**
		 * The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account.
		 * Max length: 256
		 */
		connectorProfileName: FormControl<string | null | undefined>,

		/**
		 * The version of the API that's used by the connector.
		 * Max length: 256
		 */
		apiVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectorEntityPostBodyFormGroup() {
		return new FormGroup<DescribeConnectorEntityPostBodyFormProperties>({
			connectorEntityName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('\S+')]),
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			connectorProfileName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('[\w/!@#+=.-]+')]),
			apiVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('\S+')]),
		});

	}

	export interface DescribeConnectorProfilesPostBody {

		/**
		 * The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account.
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		connectorProfileNames?: Array<string>;

		/** The type of connector, such as Salesforce, Amplitude, and so on. */
		connectorType?: ConnectorType | null;

		/**
		 * The name of the connector. The name is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.
		 * Max length: 256
		 */
		connectorLabel?: string | null;

		/**
		 * Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations).
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The pagination token for the next page of data.
		 * Max length: 2048
		 */
		nextToken?: string | null;
	}
	export interface DescribeConnectorProfilesPostBodyFormProperties {

		/** The type of connector, such as Salesforce, Amplitude, and so on. */
		connectorType: FormControl<ConnectorType | null | undefined>,

		/**
		 * The name of the connector. The name is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.
		 * Max length: 256
		 */
		connectorLabel: FormControl<string | null | undefined>,

		/**
		 * Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations).
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token for the next page of data.
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectorProfilesPostBodyFormGroup() {
		return new FormGroup<DescribeConnectorProfilesPostBodyFormProperties>({
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			connectorLabel: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9][\w!@#.-]+')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('\S+')]),
		});

	}

	export interface DescribeConnectorsPostBody {

		/**
		 * The type of connector, such as Salesforce, Amplitude, and so on.
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		connectorTypes?: Array<ConnectorType>;

		/**
		 * The maximum number of items that should be returned in the result set. The default is 20.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The pagination token for the next page of data.
		 * Max length: 2048
		 */
		nextToken?: string | null;
	}
	export interface DescribeConnectorsPostBodyFormProperties {

		/**
		 * The maximum number of items that should be returned in the result set. The default is 20.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token for the next page of data.
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectorsPostBodyFormGroup() {
		return new FormGroup<DescribeConnectorsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('\S+')]),
		});

	}

	export interface DescribeFlowPostBody {

		/**
		 * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
		 * Required
		 * Max length: 256
		 */
		flowName: string;
	}
	export interface DescribeFlowPostBodyFormProperties {

		/**
		 * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
		 * Required
		 * Max length: 256
		 */
		flowName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFlowPostBodyFormGroup() {
		return new FormGroup<DescribeFlowPostBodyFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9][\w!@#.-]+')]),
		});

	}

	export interface DescribeFlowExecutionRecordsPostBody {

		/**
		 * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
		 * Required
		 * Max length: 256
		 */
		flowName: string;

		/**
		 * Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations).
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The pagination token for the next page of data.
		 * Max length: 2048
		 */
		nextToken?: string | null;
	}
	export interface DescribeFlowExecutionRecordsPostBodyFormProperties {

		/**
		 * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
		 * Required
		 * Max length: 256
		 */
		flowName: FormControl<string | null | undefined>,

		/**
		 * Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations).
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token for the next page of data.
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFlowExecutionRecordsPostBodyFormGroup() {
		return new FormGroup<DescribeFlowExecutionRecordsPostBodyFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9][\w!@#.-]+')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('\S+')]),
		});

	}

	export interface ListConnectorEntitiesPostBody {

		/**
		 * The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account, and is used to query the downstream connector.
		 * Max length: 256
		 */
		connectorProfileName?: string | null;

		/** The type of connector, such as Salesforce, Amplitude, and so on. */
		connectorType?: ConnectorType | null;

		/**
		 * This optional parameter is specific to connector implementation. Some connectors support multiple levels or categories of entities. You can find out the list of roots for such providers by sending a request without the <code>entitiesPath</code> parameter. If the connector supports entities at different roots, this initial request returns the list of roots. Otherwise, this request returns all entities supported by the provider.
		 * Max length: 256
		 */
		entitiesPath?: string | null;

		/**
		 * The version of the API that's used by the connector.
		 * Max length: 256
		 */
		apiVersion?: string | null;

		/**
		 * The maximum number of items that the operation returns in the response.
		 * Minimum: 1
		 * Maximum: 10000
		 */
		maxResults?: number | null;

		/**
		 * A token that was provided by your prior <code>ListConnectorEntities</code> operation if the response was too big for the page size. You specify this token to get the next page of results in paginated response.
		 * Max length: 2048
		 */
		nextToken?: string | null;
	}
	export interface ListConnectorEntitiesPostBodyFormProperties {

		/**
		 * The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account, and is used to query the downstream connector.
		 * Max length: 256
		 */
		connectorProfileName: FormControl<string | null | undefined>,

		/** The type of connector, such as Salesforce, Amplitude, and so on. */
		connectorType: FormControl<ConnectorType | null | undefined>,

		/**
		 * This optional parameter is specific to connector implementation. Some connectors support multiple levels or categories of entities. You can find out the list of roots for such providers by sending a request without the <code>entitiesPath</code> parameter. If the connector supports entities at different roots, this initial request returns the list of roots. Otherwise, this request returns all entities supported by the provider.
		 * Max length: 256
		 */
		entitiesPath: FormControl<string | null | undefined>,

		/**
		 * The version of the API that's used by the connector.
		 * Max length: 256
		 */
		apiVersion: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items that the operation returns in the response.
		 * Minimum: 1
		 * Maximum: 10000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token that was provided by your prior <code>ListConnectorEntities</code> operation if the response was too big for the page size. You specify this token to get the next page of results in paginated response.
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectorEntitiesPostBodyFormGroup() {
		return new FormGroup<ListConnectorEntitiesPostBodyFormProperties>({
			connectorProfileName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('[\w/!@#+=.-]+')]),
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			entitiesPath: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('[\s\w/!@#+=,.-]*')]),
			apiVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('\S+')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('\S+')]),
		});

	}

	export interface ListConnectorsPostBody {

		/**
		 * Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations).
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The pagination token for the next page of data.
		 * Max length: 2048
		 */
		nextToken?: string | null;
	}
	export interface ListConnectorsPostBodyFormProperties {

		/**
		 * Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations).
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token for the next page of data.
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectorsPostBodyFormGroup() {
		return new FormGroup<ListConnectorsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('\S+')]),
		});

	}

	export interface ListFlowsPostBody {

		/**
		 * Specifies the maximum number of items that should be returned in the result set.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The pagination token for next page of data.
		 * Max length: 2048
		 */
		nextToken?: string | null;
	}
	export interface ListFlowsPostBodyFormProperties {

		/**
		 * Specifies the maximum number of items that should be returned in the result set.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token for next page of data.
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFlowsPostBodyFormGroup() {
		return new FormGroup<ListFlowsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('\S+')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags used to organize, track, or control access for your flow.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags used to organize, track, or control access for your flow.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterConnectorPostBody {

		/**
		 * The name of the connector. The name is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account.
		 * Max length: 256
		 */
		connectorLabel?: string | null;

		/**
		 * A description about the connector that's being registered.
		 * Max length: 1024
		 */
		description?: string | null;

		/** The type of provisioning that the connector supports, such as Lambda. */
		connectorProvisioningType?: ConnectorProvisioningType | null;

		/** Contains information about the configuration of the connector being registered. */
		connectorProvisioningConfig?: RegisterConnectorPostBodyConnectorProvisioningConfig;

		/**
		 * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>RegisterConnector</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>RegisterConnector</code>. The token is active for 8 hours.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface RegisterConnectorPostBodyFormProperties {

		/**
		 * The name of the connector. The name is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account.
		 * Max length: 256
		 */
		connectorLabel: FormControl<string | null | undefined>,

		/**
		 * A description about the connector that's being registered.
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/** The type of provisioning that the connector supports, such as Lambda. */
		connectorProvisioningType: FormControl<ConnectorProvisioningType | null | undefined>,

		/**
		 * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>RegisterConnector</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>RegisterConnector</code>. The token is active for 8 hours.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateRegisterConnectorPostBodyFormGroup() {
		return new FormGroup<RegisterConnectorPostBodyFormProperties>({
			connectorLabel: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9][\w!@#.-]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\s\w/!@#+=.-]*')]),
			connectorProvisioningType: new FormControl<ConnectorProvisioningType | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[ -~]+')]),
		});

	}

	export interface RegisterConnectorPostBodyConnectorProvisioningConfig {
		lambda?: LambdaConnectorProvisioningConfig;
	}
	export interface RegisterConnectorPostBodyConnectorProvisioningConfigFormProperties {
	}
	export function CreateRegisterConnectorPostBodyConnectorProvisioningConfigFormGroup() {
		return new FormGroup<RegisterConnectorPostBodyConnectorProvisioningConfigFormProperties>({
		});

	}

	export interface ResetConnectorMetadataCachePostBody {

		/**
		 * <p>The name of the connector profile that you want to reset cached metadata for.</p> <p>You can omit this parameter if you're resetting the cache for any of the following connectors: Amazon Connect, Amazon EventBridge, Amazon Lookout for Metrics, Amazon S3, or Upsolver. If you're resetting the cache for any other connector, you must include this parameter in your request.</p>
		 * Max length: 256
		 */
		connectorProfileName?: string | null;

		/** <p>The type of connector to reset cached metadata for.</p> <p>You must include this parameter in your request if you're resetting the cache for any of the following connectors: Amazon Connect, Amazon EventBridge, Amazon Lookout for Metrics, Amazon S3, or Upsolver. If you're resetting the cache for any other connector, you can omit this parameter from your request. </p> */
		connectorType?: ConnectorType | null;

		/**
		 * <p>Use this parameter if you want to reset cached metadata about the details for an individual entity.</p> <p>If you don't include this parameter in your request, Amazon AppFlow only resets cached metadata about entity names, not entity details.</p>
		 * Max length: 1024
		 */
		connectorEntityName?: string | null;

		/**
		 * <p>Use this parameter only if you’re resetting the cached metadata about a nested entity. Only some connectors support nested entities. A nested entity is one that has another entity as a parent. To use this parameter, specify the name of the parent entity.</p> <p>To look up the parent-child relationship of entities, you can send a ListConnectorEntities request that omits the entitiesPath parameter. Amazon AppFlow will return a list of top-level entities. For each one, it indicates whether the entity has nested entities. Then, in a subsequent ListConnectorEntities request, you can specify a parent entity name for the entitiesPath parameter. Amazon AppFlow will return a list of the child entities for that parent.</p>
		 * Max length: 256
		 */
		entitiesPath?: string | null;

		/**
		 * <p>The API version that you specified in the connector profile that you’re resetting cached metadata for. You must use this parameter only if the connector supports multiple API versions or if the connector type is CustomConnector.</p> <p>To look up how many versions a connector supports, use the DescribeConnectors action. In the response, find the value that Amazon AppFlow returns for the connectorVersion parameter.</p> <p>To look up the connector type, use the DescribeConnectorProfiles action. In the response, find the value that Amazon AppFlow returns for the connectorType parameter.</p> <p>To look up the API version that you specified in a connector profile, use the DescribeConnectorProfiles action.</p>
		 * Max length: 256
		 */
		apiVersion?: string | null;
	}
	export interface ResetConnectorMetadataCachePostBodyFormProperties {

		/**
		 * <p>The name of the connector profile that you want to reset cached metadata for.</p> <p>You can omit this parameter if you're resetting the cache for any of the following connectors: Amazon Connect, Amazon EventBridge, Amazon Lookout for Metrics, Amazon S3, or Upsolver. If you're resetting the cache for any other connector, you must include this parameter in your request.</p>
		 * Max length: 256
		 */
		connectorProfileName: FormControl<string | null | undefined>,

		/** <p>The type of connector to reset cached metadata for.</p> <p>You must include this parameter in your request if you're resetting the cache for any of the following connectors: Amazon Connect, Amazon EventBridge, Amazon Lookout for Metrics, Amazon S3, or Upsolver. If you're resetting the cache for any other connector, you can omit this parameter from your request. </p> */
		connectorType: FormControl<ConnectorType | null | undefined>,

		/**
		 * <p>Use this parameter if you want to reset cached metadata about the details for an individual entity.</p> <p>If you don't include this parameter in your request, Amazon AppFlow only resets cached metadata about entity names, not entity details.</p>
		 * Max length: 1024
		 */
		connectorEntityName: FormControl<string | null | undefined>,

		/**
		 * <p>Use this parameter only if you’re resetting the cached metadata about a nested entity. Only some connectors support nested entities. A nested entity is one that has another entity as a parent. To use this parameter, specify the name of the parent entity.</p> <p>To look up the parent-child relationship of entities, you can send a ListConnectorEntities request that omits the entitiesPath parameter. Amazon AppFlow will return a list of top-level entities. For each one, it indicates whether the entity has nested entities. Then, in a subsequent ListConnectorEntities request, you can specify a parent entity name for the entitiesPath parameter. Amazon AppFlow will return a list of the child entities for that parent.</p>
		 * Max length: 256
		 */
		entitiesPath: FormControl<string | null | undefined>,

		/**
		 * <p>The API version that you specified in the connector profile that you’re resetting cached metadata for. You must use this parameter only if the connector supports multiple API versions or if the connector type is CustomConnector.</p> <p>To look up how many versions a connector supports, use the DescribeConnectors action. In the response, find the value that Amazon AppFlow returns for the connectorVersion parameter.</p> <p>To look up the connector type, use the DescribeConnectorProfiles action. In the response, find the value that Amazon AppFlow returns for the connectorType parameter.</p> <p>To look up the API version that you specified in a connector profile, use the DescribeConnectorProfiles action.</p>
		 * Max length: 256
		 */
		apiVersion: FormControl<string | null | undefined>,
	}
	export function CreateResetConnectorMetadataCachePostBodyFormGroup() {
		return new FormGroup<ResetConnectorMetadataCachePostBodyFormProperties>({
			connectorProfileName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('[\w/!@#+=.-]+')]),
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			connectorEntityName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('\S+')]),
			entitiesPath: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('[\s\w/!@#+=,.-]*')]),
			apiVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('\S+')]),
		});

	}

	export interface StartFlowPostBody {

		/**
		 * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
		 * Required
		 * Max length: 256
		 */
		flowName: string;

		/**
		 * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>StartFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs for flows that run on a schedule or based on an event. However, the error doesn't occur for flows that run on demand. You set the conditions that initiate your flow for the <code>triggerConfig</code> parameter.</p> <p>If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>StartFlow</code>. The token is active for 8 hours.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface StartFlowPostBodyFormProperties {

		/**
		 * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
		 * Required
		 * Max length: 256
		 */
		flowName: FormControl<string | null | undefined>,

		/**
		 * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>StartFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs for flows that run on a schedule or based on an event. However, the error doesn't occur for flows that run on demand. You set the conditions that initiate your flow for the <code>triggerConfig</code> parameter.</p> <p>If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>StartFlow</code>. The token is active for 8 hours.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartFlowPostBodyFormGroup() {
		return new FormGroup<StartFlowPostBodyFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9][\w!@#.-]+')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[ -~]+')]),
		});

	}

	export interface StopFlowPostBody {

		/**
		 * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
		 * Required
		 * Max length: 256
		 */
		flowName: string;
	}
	export interface StopFlowPostBodyFormProperties {

		/**
		 * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
		 * Required
		 * Max length: 256
		 */
		flowName: FormControl<string | null | undefined>,
	}
	export function CreateStopFlowPostBodyFormGroup() {
		return new FormGroup<StopFlowPostBodyFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9][\w!@#.-]+')]),
		});

	}

	export interface UnregisterConnectorPostBody {

		/**
		 * The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account.
		 * Required
		 * Max length: 256
		 */
		connectorLabel: string;

		/** Indicates whether Amazon AppFlow should unregister the connector, even if it is currently in use in one or more connector profiles. The default value is false. */
		forceDelete?: boolean | null;
	}
	export interface UnregisterConnectorPostBodyFormProperties {

		/**
		 * The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account.
		 * Required
		 * Max length: 256
		 */
		connectorLabel: FormControl<string | null | undefined>,

		/** Indicates whether Amazon AppFlow should unregister the connector, even if it is currently in use in one or more connector profiles. The default value is false. */
		forceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateUnregisterConnectorPostBodyFormGroup() {
		return new FormGroup<UnregisterConnectorPostBodyFormProperties>({
			connectorLabel: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9][\w!@#.-]+')]),
			forceDelete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateConnectorProfilePostBody {

		/**
		 * The name of the connector profile and is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account.
		 * Required
		 * Max length: 256
		 */
		connectorProfileName: string;

		/**
		 * Indicates the connection mode and if it is public or private.
		 * Required
		 */
		connectionMode: ConnectionMode;

		/**
		 * Defines the connector-specific configuration and credentials for the connector profile.
		 * Required
		 */
		connectorProfileConfig: UpdateConnectorProfilePostBodyConnectorProfileConfig;

		/**
		 * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateConnectorProfile</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateConnectorProfile</code>. The token is active for 8 hours.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface UpdateConnectorProfilePostBodyFormProperties {

		/**
		 * The name of the connector profile and is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account.
		 * Required
		 * Max length: 256
		 */
		connectorProfileName: FormControl<string | null | undefined>,

		/**
		 * Indicates the connection mode and if it is public or private.
		 * Required
		 */
		connectionMode: FormControl<ConnectionMode | null | undefined>,

		/**
		 * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateConnectorProfile</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateConnectorProfile</code>. The token is active for 8 hours.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectorProfilePostBodyFormGroup() {
		return new FormGroup<UpdateConnectorProfilePostBodyFormProperties>({
			connectorProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[\w/!@#+=.-]+')]),
			connectionMode: new FormControl<ConnectionMode | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[ -~]+')]),
		});

	}

	export interface UpdateConnectorProfilePostBodyConnectorProfileConfig {
		connectorProfileProperties?: ConnectorProfileProperties;
		connectorProfileCredentials?: ConnectorProfileCredentials;
	}
	export interface UpdateConnectorProfilePostBodyConnectorProfileConfigFormProperties {
	}
	export function CreateUpdateConnectorProfilePostBodyConnectorProfileConfigFormGroup() {
		return new FormGroup<UpdateConnectorProfilePostBodyConnectorProfileConfigFormProperties>({
		});

	}

	export interface UpdateConnectorRegistrationPostBody {

		/**
		 * The name of the connector. The name is unique for each connector registration in your AWS account.
		 * Required
		 * Max length: 256
		 */
		connectorLabel: string;

		/**
		 * A description about the update that you're applying to the connector.
		 * Max length: 1024
		 */
		description?: string | null;

		/** Contains information about the configuration of the connector being registered. */
		connectorProvisioningConfig?: UpdateConnectorRegistrationPostBodyConnectorProvisioningConfig;

		/**
		 * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateConnectorRegistration</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateConnectorRegistration</code>. The token is active for 8 hours.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface UpdateConnectorRegistrationPostBodyFormProperties {

		/**
		 * The name of the connector. The name is unique for each connector registration in your AWS account.
		 * Required
		 * Max length: 256
		 */
		connectorLabel: FormControl<string | null | undefined>,

		/**
		 * A description about the update that you're applying to the connector.
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateConnectorRegistration</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateConnectorRegistration</code>. The token is active for 8 hours.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectorRegistrationPostBodyFormGroup() {
		return new FormGroup<UpdateConnectorRegistrationPostBodyFormProperties>({
			connectorLabel: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9][\w!@#.-]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\s\w/!@#+=.-]*')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[ -~]+')]),
		});

	}

	export interface UpdateConnectorRegistrationPostBodyConnectorProvisioningConfig {
		lambda?: LambdaConnectorProvisioningConfig;
	}
	export interface UpdateConnectorRegistrationPostBodyConnectorProvisioningConfigFormProperties {
	}
	export function CreateUpdateConnectorRegistrationPostBodyConnectorProvisioningConfigFormGroup() {
		return new FormGroup<UpdateConnectorRegistrationPostBodyConnectorProvisioningConfigFormProperties>({
		});

	}

	export interface UpdateFlowPostBody {

		/**
		 * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
		 * Required
		 * Max length: 256
		 */
		flowName: string;

		/**
		 * A description of the flow.
		 * Max length: 2048
		 */
		description?: string | null;

		/**
		 * The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
		 * Required
		 */
		triggerConfig: UpdateFlowPostBodyTriggerConfig;

		/**
		 * Contains information about the configuration of the source connector used in the flow.
		 * Required
		 */
		sourceFlowConfig: UpdateFlowPostBodySourceFlowConfig;

		/**
		 * The configuration that controls how Amazon AppFlow transfers data to the destination connector.
		 * Required
		 */
		destinationFlowConfigList: Array<DestinationFlowConfig>;

		/**
		 * A list of tasks that Amazon AppFlow performs while transferring the data in the flow run.
		 * Required
		 */
		tasks: Array<Task>;

		/** Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog. */
		metadataCatalogConfig?: UpdateFlowPostBodyMetadataCatalogConfig;

		/**
		 * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateFlow</code>. The token is active for 8 hours.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface UpdateFlowPostBodyFormProperties {

		/**
		 * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
		 * Required
		 * Max length: 256
		 */
		flowName: FormControl<string | null | undefined>,

		/**
		 * A description of the flow.
		 * Max length: 2048
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * <p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateFlow</code>. The token is active for 8 hours.</p>
		 * Max length: 256
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowPostBodyFormGroup() {
		return new FormGroup<UpdateFlowPostBodyFormProperties>({
			flowName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9][\w!@#.-]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('[\w!@#\-.?,\s]*')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[ -~]+')]),
		});

	}

	export interface UpdateFlowPostBodyTriggerConfig {
		triggerType?: TriggerType;
		triggerProperties?: TriggerProperties;
	}
	export interface UpdateFlowPostBodyTriggerConfigFormProperties {
		triggerType: FormControl<TriggerType | null | undefined>,
	}
	export function CreateUpdateFlowPostBodyTriggerConfigFormGroup() {
		return new FormGroup<UpdateFlowPostBodyTriggerConfigFormProperties>({
			triggerType: new FormControl<TriggerType | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowPostBodySourceFlowConfig {
		connectorType?: ConnectorType;
		apiVersion?: string;
		connectorProfileName?: string;
		sourceConnectorProperties?: SourceConnectorProperties;
		incrementalPullConfig?: IncrementalPullConfig;
	}
	export interface UpdateFlowPostBodySourceFlowConfigFormProperties {
		connectorType: FormControl<ConnectorType | null | undefined>,
		apiVersion: FormControl<string | null | undefined>,
		connectorProfileName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlowPostBodySourceFlowConfigFormGroup() {
		return new FormGroup<UpdateFlowPostBodySourceFlowConfigFormProperties>({
			connectorType: new FormControl<ConnectorType | null | undefined>(undefined),
			apiVersion: new FormControl<string | null | undefined>(undefined),
			connectorProfileName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlowPostBodyMetadataCatalogConfig {
		glueDataCatalog?: GlueDataCatalogConfig;
	}
	export interface UpdateFlowPostBodyMetadataCatalogConfigFormProperties {
	}
	export function CreateUpdateFlowPostBodyMetadataCatalogConfigFormGroup() {
		return new FormGroup<UpdateFlowPostBodyMetadataCatalogConfigFormProperties>({
		});

	}

}

