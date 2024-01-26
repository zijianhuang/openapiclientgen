import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateCustomDomainResponse {

		/** Required */
		DNSTarget: string;

		/** Required */
		ServiceArn: string;

		/** Required */
		CustomDomain: CustomDomain;

		/** Required */
		VpcDNSTargets: Array<VpcDNSTarget>;
	}
	export interface AssociateCustomDomainResponseFormProperties {

		/** Required */
		DNSTarget: FormControl<string | null | undefined>,

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateCustomDomainResponseFormGroup() {
		return new FormGroup<AssociateCustomDomainResponseFormProperties>({
			DNSTarget: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a custom domain that's associated with an App Runner service. */
	export interface CustomDomain {

		/** Required */
		DomainName: string;

		/** Required */
		EnableWWWSubdomain: boolean;
		CertificateValidationRecords?: Array<CertificateValidationRecord>;

		/** Required */
		Status: CustomDomainAssociationStatus;
	}

	/** Describes a custom domain that's associated with an App Runner service. */
	export interface CustomDomainFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		EnableWWWSubdomain: FormControl<boolean | null | undefined>,

		/** Required */
		Status: FormControl<CustomDomainAssociationStatus | null | undefined>,
	}
	export function CreateCustomDomainFormGroup() {
		return new FormGroup<CustomDomainFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnableWWWSubdomain: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<CustomDomainAssociationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a certificate CNAME record to add to your DNS. For more information, see <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html">AssociateCustomDomain</a>. */
	export interface CertificateValidationRecord {
		Name?: string;
		Type?: string;
		Value?: string;
		Status?: CertificateValidationRecordStatus;
	}

	/** Describes a certificate CNAME record to add to your DNS. For more information, see <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html">AssociateCustomDomain</a>. */
	export interface CertificateValidationRecordFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Status: FormControl<CertificateValidationRecordStatus | null | undefined>,
	}
	export function CreateCertificateValidationRecordFormGroup() {
		return new FormGroup<CertificateValidationRecordFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<CertificateValidationRecordStatus | null | undefined>(undefined),
		});

	}

	export enum CertificateValidationRecordStatus { PENDING_VALIDATION = 0, SUCCESS = 1, FAILED = 2 }

	export enum CustomDomainAssociationStatus { CREATING = 0, CREATE_FAILED = 1, ACTIVE = 2, DELETING = 3, DELETE_FAILED = 4, PENDING_CERTIFICATE_DNS_VALIDATION = 5, BINDING_CERTIFICATE = 6 }


	/** DNS Target record for a custom domain of this Amazon VPC. */
	export interface VpcDNSTarget {
		VpcIngressConnectionArn?: string;
		VpcId?: string;
		DomainName?: string;
	}

	/** DNS Target record for a custom domain of this Amazon VPC. */
	export interface VpcDNSTargetFormProperties {
		VpcIngressConnectionArn: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateVpcDNSTargetFormGroup() {
		return new FormGroup<VpcDNSTargetFormProperties>({
			VpcIngressConnectionArn: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateCustomDomainRequest {

		/** Required */
		ServiceArn: string;

		/** Required */
		DomainName: string;
		EnableWWWSubdomain?: boolean | null;
	}
	export interface AssociateCustomDomainRequestFormProperties {

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		EnableWWWSubdomain: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociateCustomDomainRequestFormGroup() {
		return new FormGroup<AssociateCustomDomainRequestFormProperties>({
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnableWWWSubdomain: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface InternalServiceErrorException {
	}
	export interface InternalServiceErrorExceptionFormProperties {
	}
	export function CreateInternalServiceErrorExceptionFormGroup() {
		return new FormGroup<InternalServiceErrorExceptionFormProperties>({
		});

	}

	export interface InvalidStateException {
	}
	export interface InvalidStateExceptionFormProperties {
	}
	export function CreateInvalidStateExceptionFormGroup() {
		return new FormGroup<InvalidStateExceptionFormProperties>({
		});

	}

	export interface CreateAutoScalingConfigurationResponse {

		/** Required */
		AutoScalingConfiguration: AutoScalingConfiguration;
	}
	export interface CreateAutoScalingConfigurationResponseFormProperties {
	}
	export function CreateCreateAutoScalingConfigurationResponseFormGroup() {
		return new FormGroup<CreateAutoScalingConfigurationResponseFormProperties>({
		});

	}


	/** <p>Describes an App Runner automatic scaling configuration resource.</p> <p>A higher <code>MinSize</code> increases the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>A lower <code>MaxSize</code> controls your cost. The tradeoff is lower responsiveness during peak demand.</p> <p>Multiple revisions of a configuration might have the same <code>AutoScalingConfigurationName</code> and different <code>AutoScalingConfigurationRevision</code> values.</p> */
	export interface AutoScalingConfiguration {
		AutoScalingConfigurationArn?: string;
		AutoScalingConfigurationName?: string;
		AutoScalingConfigurationRevision?: number | null;
		Latest?: boolean | null;
		Status?: AutoScalingConfigurationStatus;
		MaxConcurrency?: number | null;
		MinSize?: number | null;
		MaxSize?: number | null;
		CreatedAt?: Date;
		DeletedAt?: Date;
	}

	/** <p>Describes an App Runner automatic scaling configuration resource.</p> <p>A higher <code>MinSize</code> increases the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>A lower <code>MaxSize</code> controls your cost. The tradeoff is lower responsiveness during peak demand.</p> <p>Multiple revisions of a configuration might have the same <code>AutoScalingConfigurationName</code> and different <code>AutoScalingConfigurationRevision</code> values.</p> */
	export interface AutoScalingConfigurationFormProperties {
		AutoScalingConfigurationArn: FormControl<string | null | undefined>,
		AutoScalingConfigurationName: FormControl<string | null | undefined>,
		AutoScalingConfigurationRevision: FormControl<number | null | undefined>,
		Latest: FormControl<boolean | null | undefined>,
		Status: FormControl<AutoScalingConfigurationStatus | null | undefined>,
		MaxConcurrency: FormControl<number | null | undefined>,
		MinSize: FormControl<number | null | undefined>,
		MaxSize: FormControl<number | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		DeletedAt: FormControl<Date | null | undefined>,
	}
	export function CreateAutoScalingConfigurationFormGroup() {
		return new FormGroup<AutoScalingConfigurationFormProperties>({
			AutoScalingConfigurationArn: new FormControl<string | null | undefined>(undefined),
			AutoScalingConfigurationName: new FormControl<string | null | undefined>(undefined),
			AutoScalingConfigurationRevision: new FormControl<number | null | undefined>(undefined),
			Latest: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<AutoScalingConfigurationStatus | null | undefined>(undefined),
			MaxConcurrency: new FormControl<number | null | undefined>(undefined),
			MinSize: new FormControl<number | null | undefined>(undefined),
			MaxSize: new FormControl<number | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DeletedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AutoScalingConfigurationStatus { ACTIVE = 0, INACTIVE = 1 }

	export interface CreateAutoScalingConfigurationRequest {

		/** Required */
		AutoScalingConfigurationName: string;
		MaxConcurrency?: number | null;
		MinSize?: number | null;
		MaxSize?: number | null;
		Tags?: Array<Tag>;
	}
	export interface CreateAutoScalingConfigurationRequestFormProperties {

		/** Required */
		AutoScalingConfigurationName: FormControl<string | null | undefined>,
		MaxConcurrency: FormControl<number | null | undefined>,
		MinSize: FormControl<number | null | undefined>,
		MaxSize: FormControl<number | null | undefined>,
	}
	export function CreateCreateAutoScalingConfigurationRequestFormGroup() {
		return new FormGroup<CreateAutoScalingConfigurationRequestFormProperties>({
			AutoScalingConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxConcurrency: new FormControl<number | null | undefined>(undefined),
			MinSize: new FormControl<number | null | undefined>(undefined),
			MaxSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a tag that is applied to an App Runner resource. A tag is a metadata item consisting of a key-value pair. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** Describes a tag that is applied to an App Runner resource. A tag is a metadata item consisting of a key-value pair. */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateConnectionResponse {

		/** Required */
		Connection: Connection;
	}
	export interface CreateConnectionResponseFormProperties {
	}
	export function CreateCreateConnectionResponseFormGroup() {
		return new FormGroup<CreateConnectionResponseFormProperties>({
		});

	}


	/** Describes an App Runner connection resource. */
	export interface Connection {
		ConnectionName?: string;
		ConnectionArn?: string;
		ProviderType?: ProviderType;
		Status?: ConnectionStatus;
		CreatedAt?: Date;
	}

	/** Describes an App Runner connection resource. */
	export interface ConnectionFormProperties {
		ConnectionName: FormControl<string | null | undefined>,
		ConnectionArn: FormControl<string | null | undefined>,
		ProviderType: FormControl<ProviderType | null | undefined>,
		Status: FormControl<ConnectionStatus | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			ConnectionName: new FormControl<string | null | undefined>(undefined),
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<ProviderType | null | undefined>(undefined),
			Status: new FormControl<ConnectionStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ProviderType { GITHUB = 0 }

	export enum ConnectionStatus { PENDING_HANDSHAKE = 0, AVAILABLE = 1, ERROR = 2, DELETED = 3 }

	export interface CreateConnectionRequest {

		/** Required */
		ConnectionName: string;

		/** Required */
		ProviderType: ProviderType;
		Tags?: Array<Tag>;
	}
	export interface CreateConnectionRequestFormProperties {

		/** Required */
		ConnectionName: FormControl<string | null | undefined>,

		/** Required */
		ProviderType: FormControl<ProviderType | null | undefined>,
	}
	export function CreateCreateConnectionRequestFormGroup() {
		return new FormGroup<CreateConnectionRequestFormProperties>({
			ConnectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProviderType: new FormControl<ProviderType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateObservabilityConfigurationResponse {

		/** Required */
		ObservabilityConfiguration: ObservabilityConfiguration;
	}
	export interface CreateObservabilityConfigurationResponseFormProperties {
	}
	export function CreateCreateObservabilityConfigurationResponseFormGroup() {
		return new FormGroup<CreateObservabilityConfigurationResponseFormProperties>({
		});

	}


	/** <p>Describes an App Runner observability configuration resource. Multiple revisions of a configuration have the same <code>ObservabilityConfigurationName</code> and different <code>ObservabilityConfigurationRevision</code> values.</p> <p>The resource is designed to configure multiple features (currently one feature, tracing). This type contains optional members that describe the configuration of these features (currently one member, <code>TraceConfiguration</code>). If a feature member isn't specified, the feature isn't enabled.</p> */
	export interface ObservabilityConfiguration {
		ObservabilityConfigurationArn?: string;
		ObservabilityConfigurationName?: string;
		TraceConfiguration?: TraceConfiguration;
		ObservabilityConfigurationRevision?: number | null;
		Latest?: boolean | null;
		Status?: AutoScalingConfigurationStatus;
		CreatedAt?: Date;
		DeletedAt?: Date;
	}

	/** <p>Describes an App Runner observability configuration resource. Multiple revisions of a configuration have the same <code>ObservabilityConfigurationName</code> and different <code>ObservabilityConfigurationRevision</code> values.</p> <p>The resource is designed to configure multiple features (currently one feature, tracing). This type contains optional members that describe the configuration of these features (currently one member, <code>TraceConfiguration</code>). If a feature member isn't specified, the feature isn't enabled.</p> */
	export interface ObservabilityConfigurationFormProperties {
		ObservabilityConfigurationArn: FormControl<string | null | undefined>,
		ObservabilityConfigurationName: FormControl<string | null | undefined>,
		ObservabilityConfigurationRevision: FormControl<number | null | undefined>,
		Latest: FormControl<boolean | null | undefined>,
		Status: FormControl<AutoScalingConfigurationStatus | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		DeletedAt: FormControl<Date | null | undefined>,
	}
	export function CreateObservabilityConfigurationFormGroup() {
		return new FormGroup<ObservabilityConfigurationFormProperties>({
			ObservabilityConfigurationArn: new FormControl<string | null | undefined>(undefined),
			ObservabilityConfigurationName: new FormControl<string | null | undefined>(undefined),
			ObservabilityConfigurationRevision: new FormControl<number | null | undefined>(undefined),
			Latest: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<AutoScalingConfigurationStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DeletedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the configuration of the tracing feature within an App Runner observability configuration. */
	export interface TraceConfiguration {

		/** Required */
		Vendor: TracingVendor;
	}

	/** Describes the configuration of the tracing feature within an App Runner observability configuration. */
	export interface TraceConfigurationFormProperties {

		/** Required */
		Vendor: FormControl<TracingVendor | null | undefined>,
	}
	export function CreateTraceConfigurationFormGroup() {
		return new FormGroup<TraceConfigurationFormProperties>({
			Vendor: new FormControl<TracingVendor | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TracingVendor { AWSXRAY = 0 }

	export interface CreateObservabilityConfigurationRequest {

		/** Required */
		ObservabilityConfigurationName: string;
		TraceConfiguration?: TraceConfiguration;
		Tags?: Array<Tag>;
	}
	export interface CreateObservabilityConfigurationRequestFormProperties {

		/** Required */
		ObservabilityConfigurationName: FormControl<string | null | undefined>,
	}
	export function CreateCreateObservabilityConfigurationRequestFormGroup() {
		return new FormGroup<CreateObservabilityConfigurationRequestFormProperties>({
			ObservabilityConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateServiceResponse {

		/** Required */
		Service: Service;

		/** Required */
		OperationId: string;
	}
	export interface CreateServiceResponseFormProperties {

		/** Required */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceResponseFormGroup() {
		return new FormGroup<CreateServiceResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Describes an App Runner service. It can describe a service in any state, including deleted services.</p> <p>This type contains the full information about a service, including configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions. A subset of this information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ServiceSummary.html">ServiceSummary</a> type.</p> */
	export interface Service {

		/** Required */
		ServiceName: string;

		/** Required */
		ServiceId: string;

		/** Required */
		ServiceArn: string;
		ServiceUrl?: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		UpdatedAt: Date;
		DeletedAt?: Date;

		/** Required */
		Status: ServiceStatus;

		/** Required */
		SourceConfiguration: SourceConfiguration;

		/** Required */
		InstanceConfiguration: InstanceConfiguration;
		EncryptionConfiguration?: EncryptionConfiguration;
		HealthCheckConfiguration?: HealthCheckConfiguration;

		/** Required */
		AutoScalingConfigurationSummary: AutoScalingConfigurationSummary;

		/** Required */
		NetworkConfiguration: NetworkConfiguration;
		ObservabilityConfiguration?: ServiceObservabilityConfiguration;
	}

	/** <p>Describes an App Runner service. It can describe a service in any state, including deleted services.</p> <p>This type contains the full information about a service, including configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions. A subset of this information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ServiceSummary.html">ServiceSummary</a> type.</p> */
	export interface ServiceFormProperties {

		/** Required */
		ServiceName: FormControl<string | null | undefined>,

		/** Required */
		ServiceId: FormControl<string | null | undefined>,

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,
		ServiceUrl: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<Date | null | undefined>,
		DeletedAt: FormControl<Date | null | undefined>,

		/** Required */
		Status: FormControl<ServiceStatus | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			ServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceUrl: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DeletedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<ServiceStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ServiceStatus { CREATE_FAILED = 0, RUNNING = 1, DELETED = 2, DELETE_FAILED = 3, PAUSED = 4, OPERATION_IN_PROGRESS = 5 }


	/** Describes the source deployed to an App Runner service. It can be a code or an image repository. */
	export interface SourceConfiguration {
		CodeRepository?: CodeRepository;
		ImageRepository?: ImageRepository;
		AutoDeploymentsEnabled?: boolean | null;
		AuthenticationConfiguration?: AuthenticationConfiguration;
	}

	/** Describes the source deployed to an App Runner service. It can be a code or an image repository. */
	export interface SourceConfigurationFormProperties {
		AutoDeploymentsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSourceConfigurationFormGroup() {
		return new FormGroup<SourceConfigurationFormProperties>({
			AutoDeploymentsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a source code repository. */
	export interface CodeRepository {

		/** Required */
		RepositoryUrl: string;

		/** Required */
		SourceCodeVersion: SourceCodeVersion;
		CodeConfiguration?: CodeConfiguration;
	}

	/** Describes a source code repository. */
	export interface CodeRepositoryFormProperties {

		/** Required */
		RepositoryUrl: FormControl<string | null | undefined>,
	}
	export function CreateCodeRepositoryFormGroup() {
		return new FormGroup<CodeRepositoryFormProperties>({
			RepositoryUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Identifies a version of code that App Runner refers to within a source code repository. */
	export interface SourceCodeVersion {

		/** Required */
		Type: SourceCodeVersionType;

		/** Required */
		Value: string;
	}

	/** Identifies a version of code that App Runner refers to within a source code repository. */
	export interface SourceCodeVersionFormProperties {

		/** Required */
		Type: FormControl<SourceCodeVersionType | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateSourceCodeVersionFormGroup() {
		return new FormGroup<SourceCodeVersionFormProperties>({
			Type: new FormControl<SourceCodeVersionType | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SourceCodeVersionType { BRANCH = 0 }


	/** Describes the configuration that App Runner uses to build and run an App Runner service from a source code repository. */
	export interface CodeConfiguration {

		/** Required */
		ConfigurationSource: ConfigurationSource;
		CodeConfigurationValues?: CodeConfigurationValues;
	}

	/** Describes the configuration that App Runner uses to build and run an App Runner service from a source code repository. */
	export interface CodeConfigurationFormProperties {

		/** Required */
		ConfigurationSource: FormControl<ConfigurationSource | null | undefined>,
	}
	export function CreateCodeConfigurationFormGroup() {
		return new FormGroup<CodeConfigurationFormProperties>({
			ConfigurationSource: new FormControl<ConfigurationSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConfigurationSource { REPOSITORY = 0, API = 1 }


	/** Describes the basic configuration needed for building and running an App Runner service. This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a <code>apprunner.yaml</code> file in the source code repository. */
	export interface CodeConfigurationValues {

		/** Required */
		Runtime: Runtime;
		BuildCommand?: string;
		StartCommand?: string;
		Port?: string;
		RuntimeEnvironmentVariables?: RuntimeEnvironmentVariables;
		RuntimeEnvironmentSecrets?: RuntimeEnvironmentSecrets;
	}

	/** Describes the basic configuration needed for building and running an App Runner service. This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a <code>apprunner.yaml</code> file in the source code repository. */
	export interface CodeConfigurationValuesFormProperties {

		/** Required */
		Runtime: FormControl<Runtime | null | undefined>,
		BuildCommand: FormControl<string | null | undefined>,
		StartCommand: FormControl<string | null | undefined>,
		Port: FormControl<string | null | undefined>,
	}
	export function CreateCodeConfigurationValuesFormGroup() {
		return new FormGroup<CodeConfigurationValuesFormProperties>({
			Runtime: new FormControl<Runtime | null | undefined>(undefined, [Validators.required]),
			BuildCommand: new FormControl<string | null | undefined>(undefined),
			StartCommand: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Runtime { PYTHON_3 = 0, NODEJS_12 = 1, NODEJS_14 = 2, CORRETTO_8 = 3, CORRETTO_11 = 4, NODEJS_16 = 5, GO_1 = 6, DOTNET_6 = 7, PHP_81 = 8, RUBY_31 = 9 }

	export interface RuntimeEnvironmentVariables {
	}
	export interface RuntimeEnvironmentVariablesFormProperties {
	}
	export function CreateRuntimeEnvironmentVariablesFormGroup() {
		return new FormGroup<RuntimeEnvironmentVariablesFormProperties>({
		});

	}

	export interface RuntimeEnvironmentSecrets {
	}
	export interface RuntimeEnvironmentSecretsFormProperties {
	}
	export function CreateRuntimeEnvironmentSecretsFormGroup() {
		return new FormGroup<RuntimeEnvironmentSecretsFormProperties>({
		});

	}


	/** Describes a source image repository. */
	export interface ImageRepository {

		/** Required */
		ImageIdentifier: string;
		ImageConfiguration?: ImageConfiguration;

		/** Required */
		ImageRepositoryType: ImageRepositoryType;
	}

	/** Describes a source image repository. */
	export interface ImageRepositoryFormProperties {

		/** Required */
		ImageIdentifier: FormControl<string | null | undefined>,

		/** Required */
		ImageRepositoryType: FormControl<ImageRepositoryType | null | undefined>,
	}
	export function CreateImageRepositoryFormGroup() {
		return new FormGroup<ImageRepositoryFormProperties>({
			ImageIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImageRepositoryType: new FormControl<ImageRepositoryType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the configuration that App Runner uses to run an App Runner service using an image pulled from a source image repository. */
	export interface ImageConfiguration {
		RuntimeEnvironmentVariables?: RuntimeEnvironmentVariables;
		StartCommand?: string;
		Port?: string;
		RuntimeEnvironmentSecrets?: RuntimeEnvironmentSecrets;
	}

	/** Describes the configuration that App Runner uses to run an App Runner service using an image pulled from a source image repository. */
	export interface ImageConfigurationFormProperties {
		StartCommand: FormControl<string | null | undefined>,
		Port: FormControl<string | null | undefined>,
	}
	export function CreateImageConfigurationFormGroup() {
		return new FormGroup<ImageConfigurationFormProperties>({
			StartCommand: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageRepositoryType { ECR = 0, ECR_PUBLIC = 1 }


	/** Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider. */
	export interface AuthenticationConfiguration {
		ConnectionArn?: string;
		AccessRoleArn?: string;
	}

	/** Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider. */
	export interface AuthenticationConfigurationFormProperties {
		ConnectionArn: FormControl<string | null | undefined>,
		AccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticationConfigurationFormGroup() {
		return new FormGroup<AuthenticationConfigurationFormProperties>({
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			AccessRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the runtime configuration of an App Runner service instance (scaling unit). */
	export interface InstanceConfiguration {
		Cpu?: string;
		Memory?: string;
		InstanceRoleArn?: string;
	}

	/** Describes the runtime configuration of an App Runner service instance (scaling unit). */
	export interface InstanceConfigurationFormProperties {
		Cpu: FormControl<string | null | undefined>,
		Memory: FormControl<string | null | undefined>,
		InstanceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateInstanceConfigurationFormGroup() {
		return new FormGroup<InstanceConfigurationFormProperties>({
			Cpu: new FormControl<string | null | undefined>(undefined),
			Memory: new FormControl<string | null | undefined>(undefined),
			InstanceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a custom encryption key that App Runner uses to encrypt copies of the source repository and service logs. */
	export interface EncryptionConfiguration {

		/** Required */
		KmsKey: string;
	}

	/** Describes a custom encryption key that App Runner uses to encrypt copies of the source repository and service logs. */
	export interface EncryptionConfigurationFormProperties {

		/** Required */
		KmsKey: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigurationFormGroup() {
		return new FormGroup<EncryptionConfigurationFormProperties>({
			KmsKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the settings for the health check that App Runner performs to monitor the health of a service. */
	export interface HealthCheckConfiguration {
		Protocol?: HealthCheckProtocol;
		Path?: string;
		Interval?: number | null;
		Timeout?: number | null;
		HealthyThreshold?: number | null;
		UnhealthyThreshold?: number | null;
	}

	/** Describes the settings for the health check that App Runner performs to monitor the health of a service. */
	export interface HealthCheckConfigurationFormProperties {
		Protocol: FormControl<HealthCheckProtocol | null | undefined>,
		Path: FormControl<string | null | undefined>,
		Interval: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		HealthyThreshold: FormControl<number | null | undefined>,
		UnhealthyThreshold: FormControl<number | null | undefined>,
	}
	export function CreateHealthCheckConfigurationFormGroup() {
		return new FormGroup<HealthCheckConfigurationFormProperties>({
			Protocol: new FormControl<HealthCheckProtocol | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			Interval: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			HealthyThreshold: new FormControl<number | null | undefined>(undefined),
			UnhealthyThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum HealthCheckProtocol { TCP = 0, HTTP = 1 }


	/** <p>Provides summary information about an App Runner automatic scaling configuration resource.</p> <p>This type contains limited information about an auto scaling configuration. It includes only identification information, without configuration details. It's returned by the <a>ListAutoScalingConfigurations</a> action. Complete configuration information is returned by the <a>CreateAutoScalingConfiguration</a>, <a>DescribeAutoScalingConfiguration</a>, and <a>DeleteAutoScalingConfiguration</a> actions using the <a>AutoScalingConfiguration</a> type.</p> */
	export interface AutoScalingConfigurationSummary {
		AutoScalingConfigurationArn?: string;
		AutoScalingConfigurationName?: string;
		AutoScalingConfigurationRevision?: number | null;
	}

	/** <p>Provides summary information about an App Runner automatic scaling configuration resource.</p> <p>This type contains limited information about an auto scaling configuration. It includes only identification information, without configuration details. It's returned by the <a>ListAutoScalingConfigurations</a> action. Complete configuration information is returned by the <a>CreateAutoScalingConfiguration</a>, <a>DescribeAutoScalingConfiguration</a>, and <a>DeleteAutoScalingConfiguration</a> actions using the <a>AutoScalingConfiguration</a> type.</p> */
	export interface AutoScalingConfigurationSummaryFormProperties {
		AutoScalingConfigurationArn: FormControl<string | null | undefined>,
		AutoScalingConfigurationName: FormControl<string | null | undefined>,
		AutoScalingConfigurationRevision: FormControl<number | null | undefined>,
	}
	export function CreateAutoScalingConfigurationSummaryFormGroup() {
		return new FormGroup<AutoScalingConfigurationSummaryFormProperties>({
			AutoScalingConfigurationArn: new FormControl<string | null | undefined>(undefined),
			AutoScalingConfigurationName: new FormControl<string | null | undefined>(undefined),
			AutoScalingConfigurationRevision: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes configuration settings related to network traffic of an App Runner service. Consists of embedded objects for each configurable network feature. */
	export interface NetworkConfiguration {
		EgressConfiguration?: EgressConfiguration;
		IngressConfiguration?: IngressConfiguration;
	}

	/** Describes configuration settings related to network traffic of an App Runner service. Consists of embedded objects for each configurable network feature. */
	export interface NetworkConfigurationFormProperties {
	}
	export function CreateNetworkConfigurationFormGroup() {
		return new FormGroup<NetworkConfigurationFormProperties>({
		});

	}


	/** Describes configuration settings related to outbound network traffic of an App Runner service. */
	export interface EgressConfiguration {
		EgressType?: EgressType;
		VpcConnectorArn?: string;
	}

	/** Describes configuration settings related to outbound network traffic of an App Runner service. */
	export interface EgressConfigurationFormProperties {
		EgressType: FormControl<EgressType | null | undefined>,
		VpcConnectorArn: FormControl<string | null | undefined>,
	}
	export function CreateEgressConfigurationFormGroup() {
		return new FormGroup<EgressConfigurationFormProperties>({
			EgressType: new FormControl<EgressType | null | undefined>(undefined),
			VpcConnectorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EgressType { DEFAULT = 0, VPC = 1 }


	/** Network configuration settings for inbound network traffic. */
	export interface IngressConfiguration {
		IsPubliclyAccessible?: boolean | null;
	}

	/** Network configuration settings for inbound network traffic. */
	export interface IngressConfigurationFormProperties {
		IsPubliclyAccessible: FormControl<boolean | null | undefined>,
	}
	export function CreateIngressConfigurationFormGroup() {
		return new FormGroup<IngressConfigurationFormProperties>({
			IsPubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the observability configuration of an App Runner service. These are additional observability features, like tracing, that you choose to enable. They're configured in a separate resource that you associate with your service. */
	export interface ServiceObservabilityConfiguration {

		/** Required */
		ObservabilityEnabled: boolean;
		ObservabilityConfigurationArn?: string;
	}

	/** Describes the observability configuration of an App Runner service. These are additional observability features, like tracing, that you choose to enable. They're configured in a separate resource that you associate with your service. */
	export interface ServiceObservabilityConfigurationFormProperties {

		/** Required */
		ObservabilityEnabled: FormControl<boolean | null | undefined>,
		ObservabilityConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateServiceObservabilityConfigurationFormGroup() {
		return new FormGroup<ServiceObservabilityConfigurationFormProperties>({
			ObservabilityEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ObservabilityConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateServiceRequest {

		/** Required */
		ServiceName: string;

		/** Required */
		SourceConfiguration: SourceConfiguration;
		InstanceConfiguration?: InstanceConfiguration;
		Tags?: Array<Tag>;
		EncryptionConfiguration?: EncryptionConfiguration;
		HealthCheckConfiguration?: HealthCheckConfiguration;
		AutoScalingConfigurationArn?: string;
		NetworkConfiguration?: NetworkConfiguration;
		ObservabilityConfiguration?: ServiceObservabilityConfiguration;
	}
	export interface CreateServiceRequestFormProperties {

		/** Required */
		ServiceName: FormControl<string | null | undefined>,
		AutoScalingConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceRequestFormGroup() {
		return new FormGroup<CreateServiceRequestFormProperties>({
			ServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AutoScalingConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVpcConnectorResponse {

		/** Required */
		VpcConnector: VpcConnector;
	}
	export interface CreateVpcConnectorResponseFormProperties {
	}
	export function CreateCreateVpcConnectorResponseFormGroup() {
		return new FormGroup<CreateVpcConnectorResponseFormProperties>({
		});

	}


	/** <p>Describes an App Runner VPC connector resource. A VPC connector describes the Amazon Virtual Private Cloud (Amazon VPC) that an App Runner service is associated with, and the subnets and security group that are used.</p> <p>Multiple revisions of a connector might have the same <code>Name</code> and different <code>Revision</code> values.</p> <note> <p>At this time, App Runner supports only one revision per name.</p> </note> */
	export interface VpcConnector {
		VpcConnectorName?: string;
		VpcConnectorArn?: string;
		VpcConnectorRevision?: number | null;
		Subnets?: Array<string>;
		SecurityGroups?: Array<string>;
		Status?: AutoScalingConfigurationStatus;
		CreatedAt?: Date;
		DeletedAt?: Date;
	}

	/** <p>Describes an App Runner VPC connector resource. A VPC connector describes the Amazon Virtual Private Cloud (Amazon VPC) that an App Runner service is associated with, and the subnets and security group that are used.</p> <p>Multiple revisions of a connector might have the same <code>Name</code> and different <code>Revision</code> values.</p> <note> <p>At this time, App Runner supports only one revision per name.</p> </note> */
	export interface VpcConnectorFormProperties {
		VpcConnectorName: FormControl<string | null | undefined>,
		VpcConnectorArn: FormControl<string | null | undefined>,
		VpcConnectorRevision: FormControl<number | null | undefined>,
		Status: FormControl<AutoScalingConfigurationStatus | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		DeletedAt: FormControl<Date | null | undefined>,
	}
	export function CreateVpcConnectorFormGroup() {
		return new FormGroup<VpcConnectorFormProperties>({
			VpcConnectorName: new FormControl<string | null | undefined>(undefined),
			VpcConnectorArn: new FormControl<string | null | undefined>(undefined),
			VpcConnectorRevision: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<AutoScalingConfigurationStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DeletedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateVpcConnectorRequest {

		/** Required */
		VpcConnectorName: string;

		/** Required */
		Subnets: Array<string>;
		SecurityGroups?: Array<string>;
		Tags?: Array<Tag>;
	}
	export interface CreateVpcConnectorRequestFormProperties {

		/** Required */
		VpcConnectorName: FormControl<string | null | undefined>,
	}
	export function CreateCreateVpcConnectorRequestFormGroup() {
		return new FormGroup<CreateVpcConnectorRequestFormProperties>({
			VpcConnectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVpcIngressConnectionResponse {

		/** Required */
		VpcIngressConnection: VpcIngressConnection;
	}
	export interface CreateVpcIngressConnectionResponseFormProperties {
	}
	export function CreateCreateVpcIngressConnectionResponseFormGroup() {
		return new FormGroup<CreateVpcIngressConnectionResponseFormProperties>({
		});

	}


	/** The App Runner resource that specifies an App Runner endpoint for incoming traffic. It establishes a connection between a VPC interface endpoint and a App Runner service, to make your App Runner service accessible from only within an Amazon VPC. */
	export interface VpcIngressConnection {
		VpcIngressConnectionArn?: string;
		VpcIngressConnectionName?: string;
		ServiceArn?: string;
		Status?: VpcIngressConnectionStatus;
		AccountId?: string;
		DomainName?: string;
		IngressVpcConfiguration?: IngressVpcConfiguration;
		CreatedAt?: Date;
		DeletedAt?: Date;
	}

	/** The App Runner resource that specifies an App Runner endpoint for incoming traffic. It establishes a connection between a VPC interface endpoint and a App Runner service, to make your App Runner service accessible from only within an Amazon VPC. */
	export interface VpcIngressConnectionFormProperties {
		VpcIngressConnectionArn: FormControl<string | null | undefined>,
		VpcIngressConnectionName: FormControl<string | null | undefined>,
		ServiceArn: FormControl<string | null | undefined>,
		Status: FormControl<VpcIngressConnectionStatus | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		DeletedAt: FormControl<Date | null | undefined>,
	}
	export function CreateVpcIngressConnectionFormGroup() {
		return new FormGroup<VpcIngressConnectionFormProperties>({
			VpcIngressConnectionArn: new FormControl<string | null | undefined>(undefined),
			VpcIngressConnectionName: new FormControl<string | null | undefined>(undefined),
			ServiceArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<VpcIngressConnectionStatus | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DeletedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum VpcIngressConnectionStatus { AVAILABLE = 0, PENDING_CREATION = 1, PENDING_UPDATE = 2, PENDING_DELETION = 3, FAILED_CREATION = 4, FAILED_UPDATE = 5, FAILED_DELETION = 6, DELETED = 7 }


	/** The configuration of your VPC and the associated VPC endpoint. The VPC endpoint is an Amazon Web Services PrivateLink resource that allows access to your App Runner services from within an Amazon VPC. */
	export interface IngressVpcConfiguration {
		VpcId?: string;
		VpcEndpointId?: string;
	}

	/** The configuration of your VPC and the associated VPC endpoint. The VPC endpoint is an Amazon Web Services PrivateLink resource that allows access to your App Runner services from within an Amazon VPC. */
	export interface IngressVpcConfigurationFormProperties {
		VpcId: FormControl<string | null | undefined>,
		VpcEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateIngressVpcConfigurationFormGroup() {
		return new FormGroup<IngressVpcConfigurationFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined),
			VpcEndpointId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVpcIngressConnectionRequest {

		/** Required */
		ServiceArn: string;

		/** Required */
		VpcIngressConnectionName: string;

		/** Required */
		IngressVpcConfiguration: IngressVpcConfiguration;
		Tags?: Array<Tag>;
	}
	export interface CreateVpcIngressConnectionRequestFormProperties {

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,

		/** Required */
		VpcIngressConnectionName: FormControl<string | null | undefined>,
	}
	export function CreateCreateVpcIngressConnectionRequestFormGroup() {
		return new FormGroup<CreateVpcIngressConnectionRequestFormProperties>({
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcIngressConnectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAutoScalingConfigurationResponse {

		/** Required */
		AutoScalingConfiguration: AutoScalingConfiguration;
	}
	export interface DeleteAutoScalingConfigurationResponseFormProperties {
	}
	export function CreateDeleteAutoScalingConfigurationResponseFormGroup() {
		return new FormGroup<DeleteAutoScalingConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteAutoScalingConfigurationRequest {

		/** Required */
		AutoScalingConfigurationArn: string;
	}
	export interface DeleteAutoScalingConfigurationRequestFormProperties {

		/** Required */
		AutoScalingConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAutoScalingConfigurationRequestFormGroup() {
		return new FormGroup<DeleteAutoScalingConfigurationRequestFormProperties>({
			AutoScalingConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteConnectionResponse {
		Connection?: Connection;
	}
	export interface DeleteConnectionResponseFormProperties {
	}
	export function CreateDeleteConnectionResponseFormGroup() {
		return new FormGroup<DeleteConnectionResponseFormProperties>({
		});

	}

	export interface DeleteConnectionRequest {

		/** Required */
		ConnectionArn: string;
	}
	export interface DeleteConnectionRequestFormProperties {

		/** Required */
		ConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConnectionRequestFormGroup() {
		return new FormGroup<DeleteConnectionRequestFormProperties>({
			ConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteObservabilityConfigurationResponse {

		/** Required */
		ObservabilityConfiguration: ObservabilityConfiguration;
	}
	export interface DeleteObservabilityConfigurationResponseFormProperties {
	}
	export function CreateDeleteObservabilityConfigurationResponseFormGroup() {
		return new FormGroup<DeleteObservabilityConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteObservabilityConfigurationRequest {

		/** Required */
		ObservabilityConfigurationArn: string;
	}
	export interface DeleteObservabilityConfigurationRequestFormProperties {

		/** Required */
		ObservabilityConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteObservabilityConfigurationRequestFormGroup() {
		return new FormGroup<DeleteObservabilityConfigurationRequestFormProperties>({
			ObservabilityConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteServiceResponse {

		/** Required */
		Service: Service;

		/** Required */
		OperationId: string;
	}
	export interface DeleteServiceResponseFormProperties {

		/** Required */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServiceResponseFormGroup() {
		return new FormGroup<DeleteServiceResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteServiceRequest {

		/** Required */
		ServiceArn: string;
	}
	export interface DeleteServiceRequestFormProperties {

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServiceRequestFormGroup() {
		return new FormGroup<DeleteServiceRequestFormProperties>({
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteVpcConnectorResponse {

		/** Required */
		VpcConnector: VpcConnector;
	}
	export interface DeleteVpcConnectorResponseFormProperties {
	}
	export function CreateDeleteVpcConnectorResponseFormGroup() {
		return new FormGroup<DeleteVpcConnectorResponseFormProperties>({
		});

	}

	export interface DeleteVpcConnectorRequest {

		/** Required */
		VpcConnectorArn: string;
	}
	export interface DeleteVpcConnectorRequestFormProperties {

		/** Required */
		VpcConnectorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVpcConnectorRequestFormGroup() {
		return new FormGroup<DeleteVpcConnectorRequestFormProperties>({
			VpcConnectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteVpcIngressConnectionResponse {

		/** Required */
		VpcIngressConnection: VpcIngressConnection;
	}
	export interface DeleteVpcIngressConnectionResponseFormProperties {
	}
	export function CreateDeleteVpcIngressConnectionResponseFormGroup() {
		return new FormGroup<DeleteVpcIngressConnectionResponseFormProperties>({
		});

	}

	export interface DeleteVpcIngressConnectionRequest {

		/** Required */
		VpcIngressConnectionArn: string;
	}
	export interface DeleteVpcIngressConnectionRequestFormProperties {

		/** Required */
		VpcIngressConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVpcIngressConnectionRequestFormGroup() {
		return new FormGroup<DeleteVpcIngressConnectionRequestFormProperties>({
			VpcIngressConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAutoScalingConfigurationResponse {

		/** Required */
		AutoScalingConfiguration: AutoScalingConfiguration;
	}
	export interface DescribeAutoScalingConfigurationResponseFormProperties {
	}
	export function CreateDescribeAutoScalingConfigurationResponseFormGroup() {
		return new FormGroup<DescribeAutoScalingConfigurationResponseFormProperties>({
		});

	}

	export interface DescribeAutoScalingConfigurationRequest {

		/** Required */
		AutoScalingConfigurationArn: string;
	}
	export interface DescribeAutoScalingConfigurationRequestFormProperties {

		/** Required */
		AutoScalingConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAutoScalingConfigurationRequestFormGroup() {
		return new FormGroup<DescribeAutoScalingConfigurationRequestFormProperties>({
			AutoScalingConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCustomDomainsResponse {

		/** Required */
		DNSTarget: string;

		/** Required */
		ServiceArn: string;

		/** Required */
		CustomDomains: Array<CustomDomain>;

		/** Required */
		VpcDNSTargets: Array<VpcDNSTarget>;
		NextToken?: string;
	}
	export interface DescribeCustomDomainsResponseFormProperties {

		/** Required */
		DNSTarget: FormControl<string | null | undefined>,

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCustomDomainsResponseFormGroup() {
		return new FormGroup<DescribeCustomDomainsResponseFormProperties>({
			DNSTarget: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCustomDomainsRequest {

		/** Required */
		ServiceArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeCustomDomainsRequestFormProperties {

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeCustomDomainsRequestFormGroup() {
		return new FormGroup<DescribeCustomDomainsRequestFormProperties>({
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeObservabilityConfigurationResponse {

		/** Required */
		ObservabilityConfiguration: ObservabilityConfiguration;
	}
	export interface DescribeObservabilityConfigurationResponseFormProperties {
	}
	export function CreateDescribeObservabilityConfigurationResponseFormGroup() {
		return new FormGroup<DescribeObservabilityConfigurationResponseFormProperties>({
		});

	}

	export interface DescribeObservabilityConfigurationRequest {

		/** Required */
		ObservabilityConfigurationArn: string;
	}
	export interface DescribeObservabilityConfigurationRequestFormProperties {

		/** Required */
		ObservabilityConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeObservabilityConfigurationRequestFormGroup() {
		return new FormGroup<DescribeObservabilityConfigurationRequestFormProperties>({
			ObservabilityConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeServiceResponse {

		/** Required */
		Service: Service;
	}
	export interface DescribeServiceResponseFormProperties {
	}
	export function CreateDescribeServiceResponseFormGroup() {
		return new FormGroup<DescribeServiceResponseFormProperties>({
		});

	}

	export interface DescribeServiceRequest {

		/** Required */
		ServiceArn: string;
	}
	export interface DescribeServiceRequestFormProperties {

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServiceRequestFormGroup() {
		return new FormGroup<DescribeServiceRequestFormProperties>({
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeVpcConnectorResponse {

		/** Required */
		VpcConnector: VpcConnector;
	}
	export interface DescribeVpcConnectorResponseFormProperties {
	}
	export function CreateDescribeVpcConnectorResponseFormGroup() {
		return new FormGroup<DescribeVpcConnectorResponseFormProperties>({
		});

	}

	export interface DescribeVpcConnectorRequest {

		/** Required */
		VpcConnectorArn: string;
	}
	export interface DescribeVpcConnectorRequestFormProperties {

		/** Required */
		VpcConnectorArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeVpcConnectorRequestFormGroup() {
		return new FormGroup<DescribeVpcConnectorRequestFormProperties>({
			VpcConnectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeVpcIngressConnectionResponse {

		/** Required */
		VpcIngressConnection: VpcIngressConnection;
	}
	export interface DescribeVpcIngressConnectionResponseFormProperties {
	}
	export function CreateDescribeVpcIngressConnectionResponseFormGroup() {
		return new FormGroup<DescribeVpcIngressConnectionResponseFormProperties>({
		});

	}

	export interface DescribeVpcIngressConnectionRequest {

		/** Required */
		VpcIngressConnectionArn: string;
	}
	export interface DescribeVpcIngressConnectionRequestFormProperties {

		/** Required */
		VpcIngressConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeVpcIngressConnectionRequestFormGroup() {
		return new FormGroup<DescribeVpcIngressConnectionRequestFormProperties>({
			VpcIngressConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateCustomDomainResponse {

		/** Required */
		DNSTarget: string;

		/** Required */
		ServiceArn: string;

		/** Required */
		CustomDomain: CustomDomain;

		/** Required */
		VpcDNSTargets: Array<VpcDNSTarget>;
	}
	export interface DisassociateCustomDomainResponseFormProperties {

		/** Required */
		DNSTarget: FormControl<string | null | undefined>,

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateCustomDomainResponseFormGroup() {
		return new FormGroup<DisassociateCustomDomainResponseFormProperties>({
			DNSTarget: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateCustomDomainRequest {

		/** Required */
		ServiceArn: string;

		/** Required */
		DomainName: string;
	}
	export interface DisassociateCustomDomainRequestFormProperties {

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateCustomDomainRequestFormGroup() {
		return new FormGroup<DisassociateCustomDomainRequestFormProperties>({
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAutoScalingConfigurationsResponse {

		/** Required */
		AutoScalingConfigurationSummaryList: Array<AutoScalingConfigurationSummary>;
		NextToken?: string;
	}
	export interface ListAutoScalingConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAutoScalingConfigurationsResponseFormGroup() {
		return new FormGroup<ListAutoScalingConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAutoScalingConfigurationsRequest {
		AutoScalingConfigurationName?: string;
		LatestOnly?: boolean | null;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAutoScalingConfigurationsRequestFormProperties {
		AutoScalingConfigurationName: FormControl<string | null | undefined>,
		LatestOnly: FormControl<boolean | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAutoScalingConfigurationsRequestFormGroup() {
		return new FormGroup<ListAutoScalingConfigurationsRequestFormProperties>({
			AutoScalingConfigurationName: new FormControl<string | null | undefined>(undefined),
			LatestOnly: new FormControl<boolean | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConnectionsResponse {

		/** Required */
		ConnectionSummaryList: Array<ConnectionSummary>;
		NextToken?: string;
	}
	export interface ListConnectionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectionsResponseFormGroup() {
		return new FormGroup<ListConnectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides summary information about an App Runner connection resource. */
	export interface ConnectionSummary {
		ConnectionName?: string;
		ConnectionArn?: string;
		ProviderType?: ProviderType;
		Status?: ConnectionStatus;
		CreatedAt?: Date;
	}

	/** Provides summary information about an App Runner connection resource. */
	export interface ConnectionSummaryFormProperties {
		ConnectionName: FormControl<string | null | undefined>,
		ConnectionArn: FormControl<string | null | undefined>,
		ProviderType: FormControl<ProviderType | null | undefined>,
		Status: FormControl<ConnectionStatus | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateConnectionSummaryFormGroup() {
		return new FormGroup<ConnectionSummaryFormProperties>({
			ConnectionName: new FormControl<string | null | undefined>(undefined),
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<ProviderType | null | undefined>(undefined),
			Status: new FormControl<ConnectionStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListConnectionsRequest {
		ConnectionName?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListConnectionsRequestFormProperties {
		ConnectionName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectionsRequestFormGroup() {
		return new FormGroup<ListConnectionsRequestFormProperties>({
			ConnectionName: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListObservabilityConfigurationsResponse {

		/** Required */
		ObservabilityConfigurationSummaryList: Array<ObservabilityConfigurationSummary>;
		NextToken?: string;
	}
	export interface ListObservabilityConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListObservabilityConfigurationsResponseFormGroup() {
		return new FormGroup<ListObservabilityConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides summary information about an App Runner observability configuration resource.</p> <p>This type contains limited information about an observability configuration. It includes only identification information, without configuration details. It's returned by the <a>ListObservabilityConfigurations</a> action. Complete configuration information is returned by the <a>CreateObservabilityConfiguration</a>, <a>DescribeObservabilityConfiguration</a>, and <a>DeleteObservabilityConfiguration</a> actions using the <a>ObservabilityConfiguration</a> type.</p> */
	export interface ObservabilityConfigurationSummary {
		ObservabilityConfigurationArn?: string;
		ObservabilityConfigurationName?: string;
		ObservabilityConfigurationRevision?: number | null;
	}

	/** <p>Provides summary information about an App Runner observability configuration resource.</p> <p>This type contains limited information about an observability configuration. It includes only identification information, without configuration details. It's returned by the <a>ListObservabilityConfigurations</a> action. Complete configuration information is returned by the <a>CreateObservabilityConfiguration</a>, <a>DescribeObservabilityConfiguration</a>, and <a>DeleteObservabilityConfiguration</a> actions using the <a>ObservabilityConfiguration</a> type.</p> */
	export interface ObservabilityConfigurationSummaryFormProperties {
		ObservabilityConfigurationArn: FormControl<string | null | undefined>,
		ObservabilityConfigurationName: FormControl<string | null | undefined>,
		ObservabilityConfigurationRevision: FormControl<number | null | undefined>,
	}
	export function CreateObservabilityConfigurationSummaryFormGroup() {
		return new FormGroup<ObservabilityConfigurationSummaryFormProperties>({
			ObservabilityConfigurationArn: new FormControl<string | null | undefined>(undefined),
			ObservabilityConfigurationName: new FormControl<string | null | undefined>(undefined),
			ObservabilityConfigurationRevision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListObservabilityConfigurationsRequest {
		ObservabilityConfigurationName?: string;
		LatestOnly?: boolean | null;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListObservabilityConfigurationsRequestFormProperties {
		ObservabilityConfigurationName: FormControl<string | null | undefined>,
		LatestOnly: FormControl<boolean | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListObservabilityConfigurationsRequestFormGroup() {
		return new FormGroup<ListObservabilityConfigurationsRequestFormProperties>({
			ObservabilityConfigurationName: new FormControl<string | null | undefined>(undefined),
			LatestOnly: new FormControl<boolean | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOperationsResponse {
		OperationSummaryList?: Array<OperationSummary>;
		NextToken?: string;
	}
	export interface ListOperationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides summary information for an operation that occurred on an App Runner service. */
	export interface OperationSummary {
		Id?: string;
		Type?: OperationType;
		Status?: OperationStatus;
		TargetArn?: string;
		StartedAt?: Date;
		EndedAt?: Date;
		UpdatedAt?: Date;
	}

	/** Provides summary information for an operation that occurred on an App Runner service. */
	export interface OperationSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Type: FormControl<OperationType | null | undefined>,
		Status: FormControl<OperationStatus | null | undefined>,
		TargetArn: FormControl<string | null | undefined>,
		StartedAt: FormControl<Date | null | undefined>,
		EndedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateOperationSummaryFormGroup() {
		return new FormGroup<OperationSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<OperationType | null | undefined>(undefined),
			Status: new FormControl<OperationStatus | null | undefined>(undefined),
			TargetArn: new FormControl<string | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
			EndedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OperationType { START_DEPLOYMENT = 0, CREATE_SERVICE = 1, PAUSE_SERVICE = 2, RESUME_SERVICE = 3, DELETE_SERVICE = 4, UPDATE_SERVICE = 5 }

	export enum OperationStatus { PENDING = 0, IN_PROGRESS = 1, FAILED = 2, SUCCEEDED = 3, ROLLBACK_IN_PROGRESS = 4, ROLLBACK_FAILED = 5, ROLLBACK_SUCCEEDED = 6 }

	export interface ListOperationsRequest {

		/** Required */
		ServiceArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListOperationsRequestFormProperties {

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListOperationsRequestFormGroup() {
		return new FormGroup<ListOperationsRequestFormProperties>({
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListServicesResponse {

		/** Required */
		ServiceSummaryList: Array<ServiceSummary>;
		NextToken?: string;
	}
	export interface ListServicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicesResponseFormGroup() {
		return new FormGroup<ListServicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides summary information for an App Runner service.</p> <p>This type contains limited information about a service. It doesn't include configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action. Complete service information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_Service.html">Service</a> type.</p> */
	export interface ServiceSummary {
		ServiceName?: string;
		ServiceId?: string;
		ServiceArn?: string;
		ServiceUrl?: string;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		Status?: ServiceStatus;
	}

	/** <p>Provides summary information for an App Runner service.</p> <p>This type contains limited information about a service. It doesn't include configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action. Complete service information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_Service.html">Service</a> type.</p> */
	export interface ServiceSummaryFormProperties {
		ServiceName: FormControl<string | null | undefined>,
		ServiceId: FormControl<string | null | undefined>,
		ServiceArn: FormControl<string | null | undefined>,
		ServiceUrl: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		Status: FormControl<ServiceStatus | null | undefined>,
	}
	export function CreateServiceSummaryFormGroup() {
		return new FormGroup<ServiceSummaryFormProperties>({
			ServiceName: new FormControl<string | null | undefined>(undefined),
			ServiceId: new FormControl<string | null | undefined>(undefined),
			ServiceArn: new FormControl<string | null | undefined>(undefined),
			ServiceUrl: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<ServiceStatus | null | undefined>(undefined),
		});

	}

	export interface ListServicesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListServicesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListServicesRequestFormGroup() {
		return new FormGroup<ListServicesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListVpcConnectorsResponse {

		/** Required */
		VpcConnectors: Array<VpcConnector>;
		NextToken?: string;
	}
	export interface ListVpcConnectorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVpcConnectorsResponseFormGroup() {
		return new FormGroup<ListVpcConnectorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVpcConnectorsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListVpcConnectorsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVpcConnectorsRequestFormGroup() {
		return new FormGroup<ListVpcConnectorsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVpcIngressConnectionsResponse {

		/** Required */
		VpcIngressConnectionSummaryList: Array<VpcIngressConnectionSummary>;
		NextToken?: string;
	}
	export interface ListVpcIngressConnectionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVpcIngressConnectionsResponseFormGroup() {
		return new FormGroup<ListVpcIngressConnectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides summary information about an VPC Ingress Connection, which includes its VPC Ingress Connection ARN and its associated Service ARN. */
	export interface VpcIngressConnectionSummary {
		VpcIngressConnectionArn?: string;
		ServiceArn?: string;
	}

	/** Provides summary information about an VPC Ingress Connection, which includes its VPC Ingress Connection ARN and its associated Service ARN. */
	export interface VpcIngressConnectionSummaryFormProperties {
		VpcIngressConnectionArn: FormControl<string | null | undefined>,
		ServiceArn: FormControl<string | null | undefined>,
	}
	export function CreateVpcIngressConnectionSummaryFormGroup() {
		return new FormGroup<VpcIngressConnectionSummaryFormProperties>({
			VpcIngressConnectionArn: new FormControl<string | null | undefined>(undefined),
			ServiceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVpcIngressConnectionsRequest {
		Filter?: ListVpcIngressConnectionsFilter;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListVpcIngressConnectionsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVpcIngressConnectionsRequestFormGroup() {
		return new FormGroup<ListVpcIngressConnectionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns a list of VPC Ingress Connections based on the filter provided. It can return either <code>ServiceArn</code> or <code>VpcEndpointId</code>, or both. */
	export interface ListVpcIngressConnectionsFilter {
		ServiceArn?: string;
		VpcEndpointId?: string;
	}

	/** Returns a list of VPC Ingress Connections based on the filter provided. It can return either <code>ServiceArn</code> or <code>VpcEndpointId</code>, or both. */
	export interface ListVpcIngressConnectionsFilterFormProperties {
		ServiceArn: FormControl<string | null | undefined>,
		VpcEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateListVpcIngressConnectionsFilterFormGroup() {
		return new FormGroup<ListVpcIngressConnectionsFilterFormProperties>({
			ServiceArn: new FormControl<string | null | undefined>(undefined),
			VpcEndpointId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PauseServiceResponse {

		/** Required */
		Service: Service;
		OperationId?: string;
	}
	export interface PauseServiceResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreatePauseServiceResponseFormGroup() {
		return new FormGroup<PauseServiceResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PauseServiceRequest {

		/** Required */
		ServiceArn: string;
	}
	export interface PauseServiceRequestFormProperties {

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,
	}
	export function CreatePauseServiceRequestFormGroup() {
		return new FormGroup<PauseServiceRequestFormProperties>({
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResumeServiceResponse {

		/** Required */
		Service: Service;
		OperationId?: string;
	}
	export interface ResumeServiceResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateResumeServiceResponseFormGroup() {
		return new FormGroup<ResumeServiceResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResumeServiceRequest {

		/** Required */
		ServiceArn: string;
	}
	export interface ResumeServiceRequestFormProperties {

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,
	}
	export function CreateResumeServiceRequestFormGroup() {
		return new FormGroup<ResumeServiceRequestFormProperties>({
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartDeploymentResponse {

		/** Required */
		OperationId: string;
	}
	export interface StartDeploymentResponseFormProperties {

		/** Required */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateStartDeploymentResponseFormGroup() {
		return new FormGroup<StartDeploymentResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartDeploymentRequest {

		/** Required */
		ServiceArn: string;
	}
	export interface StartDeploymentRequestFormProperties {

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,
	}
	export function CreateStartDeploymentRequestFormGroup() {
		return new FormGroup<StartDeploymentRequestFormProperties>({
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServiceResponse {

		/** Required */
		Service: Service;

		/** Required */
		OperationId: string;
	}
	export interface UpdateServiceResponseFormProperties {

		/** Required */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceResponseFormGroup() {
		return new FormGroup<UpdateServiceResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServiceRequest {

		/** Required */
		ServiceArn: string;
		SourceConfiguration?: SourceConfiguration;
		InstanceConfiguration?: InstanceConfiguration;
		AutoScalingConfigurationArn?: string;
		HealthCheckConfiguration?: HealthCheckConfiguration;
		NetworkConfiguration?: NetworkConfiguration;
		ObservabilityConfiguration?: ServiceObservabilityConfiguration;
	}
	export interface UpdateServiceRequestFormProperties {

		/** Required */
		ServiceArn: FormControl<string | null | undefined>,
		AutoScalingConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceRequestFormGroup() {
		return new FormGroup<UpdateServiceRequestFormProperties>({
			ServiceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AutoScalingConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVpcIngressConnectionResponse {

		/** Required */
		VpcIngressConnection: VpcIngressConnection;
	}
	export interface UpdateVpcIngressConnectionResponseFormProperties {
	}
	export function CreateUpdateVpcIngressConnectionResponseFormGroup() {
		return new FormGroup<UpdateVpcIngressConnectionResponseFormProperties>({
		});

	}

	export interface UpdateVpcIngressConnectionRequest {

		/** Required */
		VpcIngressConnectionArn: string;

		/** Required */
		IngressVpcConfiguration: IngressVpcConfiguration;
	}
	export interface UpdateVpcIngressConnectionRequestFormProperties {

		/** Required */
		VpcIngressConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVpcIngressConnectionRequestFormGroup() {
		return new FormGroup<UpdateVpcIngressConnectionRequestFormProperties>({
			VpcIngressConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ObservabilityConfigurationStatus { ACTIVE = 0, INACTIVE = 1 }

	export enum VpcConnectorStatus { ACTIVE = 0, INACTIVE = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
		 * Post #X-Amz-Target=AppRunner.AssociateCustomDomain
		 * @return {AssociateCustomDomainResponse} Success
		 */
		AssociateCustomDomain(requestBody: AssociateCustomDomainRequest): Observable<AssociateCustomDomainResponse> {
			return this.http.post<AssociateCustomDomainResponse>(this.baseUri + '#X-Amz-Target=AppRunner.AssociateCustomDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>AutoScalingConfigurationName</code>. The call returns incremental <code>AutoScalingConfigurationRevision</code> values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>
		 * Post #X-Amz-Target=AppRunner.CreateAutoScalingConfiguration
		 * @return {CreateAutoScalingConfigurationResponse} Success
		 */
		CreateAutoScalingConfiguration(requestBody: CreateAutoScalingConfigurationRequest): Observable<CreateAutoScalingConfigurationResponse> {
			return this.http.post<CreateAutoScalingConfigurationResponse>(this.baseUri + '#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>
		 * Post #X-Amz-Target=AppRunner.CreateConnection
		 * @return {CreateConnectionResponse} Success
		 */
		CreateConnection(requestBody: CreateConnectionRequest): Observable<CreateConnectionResponse> {
			return this.http.post<CreateConnectionResponse>(this.baseUri + '#X-Amz-Target=AppRunner.CreateConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>ObservabilityConfigurationName</code>. The call returns incremental <code>ObservabilityConfigurationRevision</code> values. When you create a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.</p> <p>The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional parameters that describe the configuration of these features (currently one parameter, <code>TraceConfiguration</code>). If you don't specify a feature parameter, App Runner doesn't enable the feature.</p>
		 * Post #X-Amz-Target=AppRunner.CreateObservabilityConfiguration
		 * @return {CreateObservabilityConfigurationResponse} Success
		 */
		CreateObservabilityConfiguration(requestBody: CreateObservabilityConfigurationRequest): Observable<CreateObservabilityConfigurationResponse> {
			return this.http.post<CreateObservabilityConfigurationResponse>(this.baseUri + '#X-Amz-Target=AppRunner.CreateObservabilityConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
		 * Post #X-Amz-Target=AppRunner.CreateService
		 * @return {CreateServiceResponse} Success
		 */
		CreateService(requestBody: CreateServiceRequest): Observable<CreateServiceResponse> {
			return this.http.post<CreateServiceResponse>(this.baseUri + '#X-Amz-Target=AppRunner.CreateService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).
		 * Post #X-Amz-Target=AppRunner.CreateVpcConnector
		 * @return {CreateVpcConnectorResponse} Success
		 */
		CreateVpcConnector(requestBody: CreateVpcConnectorRequest): Observable<CreateVpcConnectorResponse> {
			return this.http.post<CreateVpcConnectorResponse>(this.baseUri + '#X-Amz-Target=AppRunner.CreateVpcConnector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.
		 * Post #X-Amz-Target=AppRunner.CreateVpcIngressConnection
		 * @return {CreateVpcIngressConnectionResponse} Success
		 */
		CreateVpcIngressConnection(requestBody: CreateVpcIngressConnectionRequest): Observable<CreateVpcIngressConnectionResponse> {
			return this.http.post<CreateVpcIngressConnectionResponse>(this.baseUri + '#X-Amz-Target=AppRunner.CreateVpcIngressConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
		 * Post #X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration
		 * @return {DeleteAutoScalingConfigurationResponse} Success
		 */
		DeleteAutoScalingConfiguration(requestBody: DeleteAutoScalingConfigurationRequest): Observable<DeleteAutoScalingConfigurationResponse> {
			return this.http.post<DeleteAutoScalingConfigurationResponse>(this.baseUri + '#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.
		 * Post #X-Amz-Target=AppRunner.DeleteConnection
		 * @return {DeleteConnectionResponse} Success
		 */
		DeleteConnection(requestBody: DeleteConnectionRequest): Observable<DeleteConnectionResponse> {
			return this.http.post<DeleteConnectionResponse>(this.baseUri + '#X-Amz-Target=AppRunner.DeleteConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
		 * Post #X-Amz-Target=AppRunner.DeleteObservabilityConfiguration
		 * @return {DeleteObservabilityConfigurationResponse} Success
		 */
		DeleteObservabilityConfiguration(requestBody: DeleteObservabilityConfigurationRequest): Observable<DeleteObservabilityConfigurationResponse> {
			return this.http.post<DeleteObservabilityConfigurationResponse>(this.baseUri + '#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Delete an App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p> <note> <p>Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete. </p> </note>
		 * Post #X-Amz-Target=AppRunner.DeleteService
		 * @return {DeleteServiceResponse} Success
		 */
		DeleteService(requestBody: DeleteServiceRequest): Observable<DeleteServiceResponse> {
			return this.http.post<DeleteServiceResponse>(this.baseUri + '#X-Amz-Target=AppRunner.DeleteService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an App Runner VPC connector resource. You can't delete a connector that's used by one or more App Runner services.
		 * Post #X-Amz-Target=AppRunner.DeleteVpcConnector
		 * @return {DeleteVpcConnectorResponse} Success
		 */
		DeleteVpcConnector(requestBody: DeleteVpcConnectorRequest): Observable<DeleteVpcConnectorResponse> {
			return this.http.post<DeleteVpcConnectorResponse>(this.baseUri + '#X-Amz-Target=AppRunner.DeleteVpcConnector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted: </p> <ul> <li> <p> <code>AVAILABLE</code> </p> </li> <li> <p> <code>FAILED_CREATION</code> </p> </li> <li> <p> <code>FAILED_UPDATE</code> </p> </li> <li> <p> <code>FAILED_DELETION</code> </p> </li> </ul>
		 * Post #X-Amz-Target=AppRunner.DeleteVpcIngressConnection
		 * @return {DeleteVpcIngressConnectionResponse} Success
		 */
		DeleteVpcIngressConnection(requestBody: DeleteVpcIngressConnectionRequest): Observable<DeleteVpcIngressConnectionResponse> {
			return this.http.post<DeleteVpcIngressConnectionResponse>(this.baseUri + '#X-Amz-Target=AppRunner.DeleteVpcIngressConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a full description of an App Runner automatic scaling configuration resource.
		 * Post #X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration
		 * @return {DescribeAutoScalingConfigurationResponse} Success
		 */
		DescribeAutoScalingConfiguration(requestBody: DescribeAutoScalingConfigurationRequest): Observable<DescribeAutoScalingConfigurationResponse> {
			return this.http.post<DescribeAutoScalingConfigurationResponse>(this.baseUri + '#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a description of custom domain names that are associated with an App Runner service.
		 * Post #X-Amz-Target=AppRunner.DescribeCustomDomains
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeCustomDomainsResponse} Success
		 */
		DescribeCustomDomains(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeCustomDomainsRequest): Observable<DescribeCustomDomainsResponse> {
			return this.http.post<DescribeCustomDomainsResponse>(this.baseUri + '#X-Amz-Target=AppRunner.DescribeCustomDomains?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a full description of an App Runner observability configuration resource.
		 * Post #X-Amz-Target=AppRunner.DescribeObservabilityConfiguration
		 * @return {DescribeObservabilityConfigurationResponse} Success
		 */
		DescribeObservabilityConfiguration(requestBody: DescribeObservabilityConfigurationRequest): Observable<DescribeObservabilityConfigurationResponse> {
			return this.http.post<DescribeObservabilityConfigurationResponse>(this.baseUri + '#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a full description of an App Runner service.
		 * Post #X-Amz-Target=AppRunner.DescribeService
		 * @return {DescribeServiceResponse} Success
		 */
		DescribeService(requestBody: DescribeServiceRequest): Observable<DescribeServiceResponse> {
			return this.http.post<DescribeServiceResponse>(this.baseUri + '#X-Amz-Target=AppRunner.DescribeService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a description of an App Runner VPC connector resource.
		 * Post #X-Amz-Target=AppRunner.DescribeVpcConnector
		 * @return {DescribeVpcConnectorResponse} Success
		 */
		DescribeVpcConnector(requestBody: DescribeVpcConnectorRequest): Observable<DescribeVpcConnectorResponse> {
			return this.http.post<DescribeVpcConnectorResponse>(this.baseUri + '#X-Amz-Target=AppRunner.DescribeVpcConnector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a full description of an App Runner VPC Ingress Connection resource.
		 * Post #X-Amz-Target=AppRunner.DescribeVpcIngressConnection
		 * @return {DescribeVpcIngressConnectionResponse} Success
		 */
		DescribeVpcIngressConnection(requestBody: DescribeVpcIngressConnectionRequest): Observable<DescribeVpcIngressConnectionResponse> {
			return this.http.post<DescribeVpcIngressConnectionResponse>(this.baseUri + '#X-Amz-Target=AppRunner.DescribeVpcIngressConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociate a custom domain name from an App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>
		 * Post #X-Amz-Target=AppRunner.DisassociateCustomDomain
		 * @return {DisassociateCustomDomainResponse} Success
		 */
		DisassociateCustomDomain(requestBody: DisassociateCustomDomainRequest): Observable<DisassociateCustomDomainResponse> {
			return this.http.post<DisassociateCustomDomainResponse>(this.baseUri + '#X-Amz-Target=AppRunner.DisassociateCustomDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>
		 * Post #X-Amz-Target=AppRunner.ListAutoScalingConfigurations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAutoScalingConfigurationsResponse} Success
		 */
		ListAutoScalingConfigurations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAutoScalingConfigurationsRequest): Observable<ListAutoScalingConfigurationsResponse> {
			return this.http.post<ListAutoScalingConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AppRunner.ListAutoScalingConfigurations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of App Runner connections that are associated with your Amazon Web Services account.
		 * Post #X-Amz-Target=AppRunner.ListConnections
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConnectionsResponse} Success
		 */
		ListConnections(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListConnectionsRequest): Observable<ListConnectionsResponse> {
			return this.http.post<ListConnectionsResponse>(this.baseUri + '#X-Amz-Target=AppRunner.ListConnections?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>
		 * Post #X-Amz-Target=AppRunner.ListObservabilityConfigurations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListObservabilityConfigurationsResponse} Success
		 */
		ListObservabilityConfigurations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListObservabilityConfigurationsRequest): Observable<ListObservabilityConfigurationsResponse> {
			return this.http.post<ListObservabilityConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AppRunner.ListObservabilityConfigurations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Return a list of operations that occurred on an App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>
		 * Post #X-Amz-Target=AppRunner.ListOperations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOperationsResponse} Success
		 */
		ListOperations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListOperationsRequest): Observable<ListOperationsResponse> {
			return this.http.post<ListOperationsResponse>(this.baseUri + '#X-Amz-Target=AppRunner.ListOperations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of running App Runner services in your Amazon Web Services account.
		 * Post #X-Amz-Target=AppRunner.ListServices
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListServicesResponse} Success
		 */
		ListServices(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListServicesRequest): Observable<ListServicesResponse> {
			return this.http.post<ListServicesResponse>(this.baseUri + '#X-Amz-Target=AppRunner.ListServices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List tags that are associated with for an App Runner resource. The response contains a list of tag key-value pairs.
		 * Post #X-Amz-Target=AppRunner.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AppRunner.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of App Runner VPC connectors in your Amazon Web Services account.
		 * Post #X-Amz-Target=AppRunner.ListVpcConnectors
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVpcConnectorsResponse} Success
		 */
		ListVpcConnectors(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListVpcConnectorsRequest): Observable<ListVpcConnectorsResponse> {
			return this.http.post<ListVpcConnectorsResponse>(this.baseUri + '#X-Amz-Target=AppRunner.ListVpcConnectors?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.
		 * Post #X-Amz-Target=AppRunner.ListVpcIngressConnections
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVpcIngressConnectionsResponse} Success
		 */
		ListVpcIngressConnections(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListVpcIngressConnectionsRequest): Observable<ListVpcIngressConnectionsResponse> {
			return this.http.post<ListVpcIngressConnectionsResponse>(this.baseUri + '#X-Amz-Target=AppRunner.ListVpcIngressConnections?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
		 * Post #X-Amz-Target=AppRunner.PauseService
		 * @return {PauseServiceResponse} Success
		 */
		PauseService(requestBody: PauseServiceRequest): Observable<PauseServiceResponse> {
			return this.http.post<PauseServiceResponse>(this.baseUri + '#X-Amz-Target=AppRunner.PauseService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resume an active App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
		 * Post #X-Amz-Target=AppRunner.ResumeService
		 * @return {ResumeServiceResponse} Success
		 */
		ResumeService(requestBody: ResumeServiceRequest): Observable<ResumeServiceResponse> {
			return this.http.post<ResumeServiceResponse>(this.baseUri + '#X-Amz-Target=AppRunner.ResumeService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
		 * Post #X-Amz-Target=AppRunner.StartDeployment
		 * @return {StartDeploymentResponse} Success
		 */
		StartDeployment(requestBody: StartDeploymentRequest): Observable<StartDeploymentResponse> {
			return this.http.post<StartDeploymentResponse>(this.baseUri + '#X-Amz-Target=AppRunner.StartDeployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.
		 * Post #X-Amz-Target=AppRunner.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AppRunner.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove tags from an App Runner resource.
		 * Post #X-Amz-Target=AppRunner.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AppRunner.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
		 * Post #X-Amz-Target=AppRunner.UpdateService
		 * @return {UpdateServiceResponse} Success
		 */
		UpdateService(requestBody: UpdateServiceRequest): Observable<UpdateServiceResponse> {
			return this.http.post<UpdateServiceResponse>(this.baseUri + '#X-Amz-Target=AppRunner.UpdateService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p> <ul> <li> <p> AVAILABLE </p> </li> <li> <p> FAILED_CREATION </p> </li> <li> <p> FAILED_UPDATE </p> </li> </ul>
		 * Post #X-Amz-Target=AppRunner.UpdateVpcIngressConnection
		 * @return {UpdateVpcIngressConnectionResponse} Success
		 */
		UpdateVpcIngressConnection(requestBody: UpdateVpcIngressConnectionRequest): Observable<UpdateVpcIngressConnectionResponse> {
			return this.http.post<UpdateVpcIngressConnectionResponse>(this.baseUri + '#X-Amz-Target=AppRunner.UpdateVpcIngressConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateCustomDomainX_Amz_Target { 'AppRunner.AssociateCustomDomain' = 0 }

	export enum CreateAutoScalingConfigurationX_Amz_Target { 'AppRunner.CreateAutoScalingConfiguration' = 0 }

	export enum CreateConnectionX_Amz_Target { 'AppRunner.CreateConnection' = 0 }

	export enum CreateObservabilityConfigurationX_Amz_Target { 'AppRunner.CreateObservabilityConfiguration' = 0 }

	export enum CreateServiceX_Amz_Target { 'AppRunner.CreateService' = 0 }

	export enum CreateVpcConnectorX_Amz_Target { 'AppRunner.CreateVpcConnector' = 0 }

	export enum CreateVpcIngressConnectionX_Amz_Target { 'AppRunner.CreateVpcIngressConnection' = 0 }

	export enum DeleteAutoScalingConfigurationX_Amz_Target { 'AppRunner.DeleteAutoScalingConfiguration' = 0 }

	export enum DeleteConnectionX_Amz_Target { 'AppRunner.DeleteConnection' = 0 }

	export enum DeleteObservabilityConfigurationX_Amz_Target { 'AppRunner.DeleteObservabilityConfiguration' = 0 }

	export enum DeleteServiceX_Amz_Target { 'AppRunner.DeleteService' = 0 }

	export enum DeleteVpcConnectorX_Amz_Target { 'AppRunner.DeleteVpcConnector' = 0 }

	export enum DeleteVpcIngressConnectionX_Amz_Target { 'AppRunner.DeleteVpcIngressConnection' = 0 }

	export enum DescribeAutoScalingConfigurationX_Amz_Target { 'AppRunner.DescribeAutoScalingConfiguration' = 0 }

	export enum DescribeCustomDomainsX_Amz_Target { 'AppRunner.DescribeCustomDomains' = 0 }

	export enum DescribeObservabilityConfigurationX_Amz_Target { 'AppRunner.DescribeObservabilityConfiguration' = 0 }

	export enum DescribeServiceX_Amz_Target { 'AppRunner.DescribeService' = 0 }

	export enum DescribeVpcConnectorX_Amz_Target { 'AppRunner.DescribeVpcConnector' = 0 }

	export enum DescribeVpcIngressConnectionX_Amz_Target { 'AppRunner.DescribeVpcIngressConnection' = 0 }

	export enum DisassociateCustomDomainX_Amz_Target { 'AppRunner.DisassociateCustomDomain' = 0 }

	export enum ListAutoScalingConfigurationsX_Amz_Target { 'AppRunner.ListAutoScalingConfigurations' = 0 }

	export enum ListConnectionsX_Amz_Target { 'AppRunner.ListConnections' = 0 }

	export enum ListObservabilityConfigurationsX_Amz_Target { 'AppRunner.ListObservabilityConfigurations' = 0 }

	export enum ListOperationsX_Amz_Target { 'AppRunner.ListOperations' = 0 }

	export enum ListServicesX_Amz_Target { 'AppRunner.ListServices' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AppRunner.ListTagsForResource' = 0 }

	export enum ListVpcConnectorsX_Amz_Target { 'AppRunner.ListVpcConnectors' = 0 }

	export enum ListVpcIngressConnectionsX_Amz_Target { 'AppRunner.ListVpcIngressConnections' = 0 }

	export enum PauseServiceX_Amz_Target { 'AppRunner.PauseService' = 0 }

	export enum ResumeServiceX_Amz_Target { 'AppRunner.ResumeService' = 0 }

	export enum StartDeploymentX_Amz_Target { 'AppRunner.StartDeployment' = 0 }

	export enum TagResourceX_Amz_Target { 'AppRunner.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AppRunner.UntagResource' = 0 }

	export enum UpdateServiceX_Amz_Target { 'AppRunner.UpdateService' = 0 }

	export enum UpdateVpcIngressConnectionX_Amz_Target { 'AppRunner.UpdateVpcIngressConnection' = 0 }

}

