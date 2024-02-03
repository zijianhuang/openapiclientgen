import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateBrowserSettingsResponse {

		/** Required */
		browserSettingsArn: string;

		/** Required */
		portalArn: string;
	}
	export interface AssociateBrowserSettingsResponseFormProperties {

		/** Required */
		browserSettingsArn: FormControl<string | null | undefined>,

		/** Required */
		portalArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateBrowserSettingsResponseFormGroup() {
		return new FormGroup<AssociateBrowserSettingsResponseFormProperties>({
			browserSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface AssociateIpAccessSettingsResponse {

		/** Required */
		ipAccessSettingsArn: string;

		/** Required */
		portalArn: string;
	}
	export interface AssociateIpAccessSettingsResponseFormProperties {

		/** Required */
		ipAccessSettingsArn: FormControl<string | null | undefined>,

		/** Required */
		portalArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateIpAccessSettingsResponseFormGroup() {
		return new FormGroup<AssociateIpAccessSettingsResponseFormProperties>({
			ipAccessSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateNetworkSettingsResponse {

		/** Required */
		networkSettingsArn: string;

		/** Required */
		portalArn: string;
	}
	export interface AssociateNetworkSettingsResponseFormProperties {

		/** Required */
		networkSettingsArn: FormControl<string | null | undefined>,

		/** Required */
		portalArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateNetworkSettingsResponseFormGroup() {
		return new FormGroup<AssociateNetworkSettingsResponseFormProperties>({
			networkSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateTrustStoreResponse {

		/** Required */
		portalArn: string;

		/** Required */
		trustStoreArn: string;
	}
	export interface AssociateTrustStoreResponseFormProperties {

		/** Required */
		portalArn: FormControl<string | null | undefined>,

		/** Required */
		trustStoreArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTrustStoreResponseFormGroup() {
		return new FormGroup<AssociateTrustStoreResponseFormProperties>({
			portalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trustStoreArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateUserAccessLoggingSettingsResponse {

		/** Required */
		portalArn: string;

		/** Required */
		userAccessLoggingSettingsArn: string;
	}
	export interface AssociateUserAccessLoggingSettingsResponseFormProperties {

		/** Required */
		portalArn: FormControl<string | null | undefined>,

		/** Required */
		userAccessLoggingSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateUserAccessLoggingSettingsResponseFormGroup() {
		return new FormGroup<AssociateUserAccessLoggingSettingsResponseFormProperties>({
			portalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userAccessLoggingSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateUserSettingsResponse {

		/** Required */
		portalArn: string;

		/** Required */
		userSettingsArn: string;
	}
	export interface AssociateUserSettingsResponseFormProperties {

		/** Required */
		portalArn: FormControl<string | null | undefined>,

		/** Required */
		userSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateUserSettingsResponseFormGroup() {
		return new FormGroup<AssociateUserSettingsResponseFormProperties>({
			portalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBrowserSettingsResponse {

		/** Required */
		browserSettingsArn: string;
	}
	export interface CreateBrowserSettingsResponseFormProperties {

		/** Required */
		browserSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBrowserSettingsResponseFormGroup() {
		return new FormGroup<CreateBrowserSettingsResponseFormProperties>({
			browserSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The tag. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** The tag. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateIdentityProviderResponse {

		/** Required */
		identityProviderArn: string;
	}
	export interface CreateIdentityProviderResponseFormProperties {

		/** Required */
		identityProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateIdentityProviderResponseFormGroup() {
		return new FormGroup<CreateIdentityProviderResponseFormProperties>({
			identityProviderArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateIpAccessSettingsResponse {

		/** Required */
		ipAccessSettingsArn: string;
	}
	export interface CreateIpAccessSettingsResponseFormProperties {

		/** Required */
		ipAccessSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateIpAccessSettingsResponseFormGroup() {
		return new FormGroup<CreateIpAccessSettingsResponseFormProperties>({
			ipAccessSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The IP rules of the IP access settings. */
	export interface IpRule {
		description?: string;

		/** Required */
		ipRange: string;
	}

	/** The IP rules of the IP access settings. */
	export interface IpRuleFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		ipRange: FormControl<string | null | undefined>,
	}
	export function CreateIpRuleFormGroup() {
		return new FormGroup<IpRuleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			ipRange: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateNetworkSettingsResponse {

		/** Required */
		networkSettingsArn: string;
	}
	export interface CreateNetworkSettingsResponseFormProperties {

		/** Required */
		networkSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSettingsResponseFormGroup() {
		return new FormGroup<CreateNetworkSettingsResponseFormProperties>({
			networkSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePortalResponse {

		/** Required */
		portalArn: string;

		/** Required */
		portalEndpoint: string;
	}
	export interface CreatePortalResponseFormProperties {

		/** Required */
		portalArn: FormControl<string | null | undefined>,

		/** Required */
		portalEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortalResponseFormGroup() {
		return new FormGroup<CreatePortalResponseFormProperties>({
			portalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTrustStoreResponse {

		/** Required */
		trustStoreArn: string;
	}
	export interface CreateTrustStoreResponseFormProperties {

		/** Required */
		trustStoreArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrustStoreResponseFormGroup() {
		return new FormGroup<CreateTrustStoreResponseFormProperties>({
			trustStoreArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUserAccessLoggingSettingsResponse {

		/** Required */
		userAccessLoggingSettingsArn: string;
	}
	export interface CreateUserAccessLoggingSettingsResponseFormProperties {

		/** Required */
		userAccessLoggingSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserAccessLoggingSettingsResponseFormGroup() {
		return new FormGroup<CreateUserAccessLoggingSettingsResponseFormProperties>({
			userAccessLoggingSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUserSettingsResponse {

		/** Required */
		userSettingsArn: string;
	}
	export interface CreateUserSettingsResponseFormProperties {

		/** Required */
		userSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserSettingsResponseFormGroup() {
		return new FormGroup<CreateUserSettingsResponseFormProperties>({
			userSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteBrowserSettingsResponse {
	}
	export interface DeleteBrowserSettingsResponseFormProperties {
	}
	export function CreateDeleteBrowserSettingsResponseFormGroup() {
		return new FormGroup<DeleteBrowserSettingsResponseFormProperties>({
		});

	}

	export interface DeleteIdentityProviderResponse {
	}
	export interface DeleteIdentityProviderResponseFormProperties {
	}
	export function CreateDeleteIdentityProviderResponseFormGroup() {
		return new FormGroup<DeleteIdentityProviderResponseFormProperties>({
		});

	}

	export interface DeleteIpAccessSettingsResponse {
	}
	export interface DeleteIpAccessSettingsResponseFormProperties {
	}
	export function CreateDeleteIpAccessSettingsResponseFormGroup() {
		return new FormGroup<DeleteIpAccessSettingsResponseFormProperties>({
		});

	}

	export interface DeleteNetworkSettingsResponse {
	}
	export interface DeleteNetworkSettingsResponseFormProperties {
	}
	export function CreateDeleteNetworkSettingsResponseFormGroup() {
		return new FormGroup<DeleteNetworkSettingsResponseFormProperties>({
		});

	}

	export interface DeletePortalResponse {
	}
	export interface DeletePortalResponseFormProperties {
	}
	export function CreateDeletePortalResponseFormGroup() {
		return new FormGroup<DeletePortalResponseFormProperties>({
		});

	}

	export interface DeleteTrustStoreResponse {
	}
	export interface DeleteTrustStoreResponseFormProperties {
	}
	export function CreateDeleteTrustStoreResponseFormGroup() {
		return new FormGroup<DeleteTrustStoreResponseFormProperties>({
		});

	}

	export interface DeleteUserAccessLoggingSettingsResponse {
	}
	export interface DeleteUserAccessLoggingSettingsResponseFormProperties {
	}
	export function CreateDeleteUserAccessLoggingSettingsResponseFormGroup() {
		return new FormGroup<DeleteUserAccessLoggingSettingsResponseFormProperties>({
		});

	}

	export interface DeleteUserSettingsResponse {
	}
	export interface DeleteUserSettingsResponseFormProperties {
	}
	export function CreateDeleteUserSettingsResponseFormGroup() {
		return new FormGroup<DeleteUserSettingsResponseFormProperties>({
		});

	}

	export interface DisassociateBrowserSettingsResponse {
	}
	export interface DisassociateBrowserSettingsResponseFormProperties {
	}
	export function CreateDisassociateBrowserSettingsResponseFormGroup() {
		return new FormGroup<DisassociateBrowserSettingsResponseFormProperties>({
		});

	}

	export interface DisassociateIpAccessSettingsResponse {
	}
	export interface DisassociateIpAccessSettingsResponseFormProperties {
	}
	export function CreateDisassociateIpAccessSettingsResponseFormGroup() {
		return new FormGroup<DisassociateIpAccessSettingsResponseFormProperties>({
		});

	}

	export interface DisassociateNetworkSettingsResponse {
	}
	export interface DisassociateNetworkSettingsResponseFormProperties {
	}
	export function CreateDisassociateNetworkSettingsResponseFormGroup() {
		return new FormGroup<DisassociateNetworkSettingsResponseFormProperties>({
		});

	}

	export interface DisassociateTrustStoreResponse {
	}
	export interface DisassociateTrustStoreResponseFormProperties {
	}
	export function CreateDisassociateTrustStoreResponseFormGroup() {
		return new FormGroup<DisassociateTrustStoreResponseFormProperties>({
		});

	}

	export interface DisassociateUserAccessLoggingSettingsResponse {
	}
	export interface DisassociateUserAccessLoggingSettingsResponseFormProperties {
	}
	export function CreateDisassociateUserAccessLoggingSettingsResponseFormGroup() {
		return new FormGroup<DisassociateUserAccessLoggingSettingsResponseFormProperties>({
		});

	}

	export interface DisassociateUserSettingsResponse {
	}
	export interface DisassociateUserSettingsResponseFormProperties {
	}
	export function CreateDisassociateUserSettingsResponseFormGroup() {
		return new FormGroup<DisassociateUserSettingsResponseFormProperties>({
		});

	}

	export interface GetBrowserSettingsResponse {
		browserSettings?: BrowserSettings;
	}
	export interface GetBrowserSettingsResponseFormProperties {
	}
	export function CreateGetBrowserSettingsResponseFormGroup() {
		return new FormGroup<GetBrowserSettingsResponseFormProperties>({
		});

	}


	/** The browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal.  */
	export interface BrowserSettings {
		associatedPortalArns?: Array<string>;
		browserPolicy?: string;

		/** Required */
		browserSettingsArn: string;
	}

	/** The browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal.  */
	export interface BrowserSettingsFormProperties {
		browserPolicy: FormControl<string | null | undefined>,

		/** Required */
		browserSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateBrowserSettingsFormGroup() {
		return new FormGroup<BrowserSettingsFormProperties>({
			browserPolicy: new FormControl<string | null | undefined>(undefined),
			browserSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetIdentityProviderResponse {
		identityProvider?: IdentityProvider;
	}
	export interface GetIdentityProviderResponseFormProperties {
	}
	export function CreateGetIdentityProviderResponseFormGroup() {
		return new FormGroup<GetIdentityProviderResponseFormProperties>({
		});

	}


	/** The identity provider. */
	export interface IdentityProvider {

		/** Required */
		identityProviderArn: string;
		identityProviderDetails?: IdentityProviderDetails;
		identityProviderName?: string;
		identityProviderType?: IdentityProviderType;
	}

	/** The identity provider. */
	export interface IdentityProviderFormProperties {

		/** Required */
		identityProviderArn: FormControl<string | null | undefined>,
		identityProviderName: FormControl<string | null | undefined>,
		identityProviderType: FormControl<IdentityProviderType | null | undefined>,
	}
	export function CreateIdentityProviderFormGroup() {
		return new FormGroup<IdentityProviderFormProperties>({
			identityProviderArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			identityProviderName: new FormControl<string | null | undefined>(undefined),
			identityProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined),
		});

	}

	export interface IdentityProviderDetails {
	}
	export interface IdentityProviderDetailsFormProperties {
	}
	export function CreateIdentityProviderDetailsFormGroup() {
		return new FormGroup<IdentityProviderDetailsFormProperties>({
		});

	}

	export enum IdentityProviderType { SAML = 'SAML', Facebook = 'Facebook', Google = 'Google', LoginWithAmazon = 'LoginWithAmazon', SignInWithApple = 'SignInWithApple', OIDC = 'OIDC' }

	export interface GetIpAccessSettingsResponse {
		ipAccessSettings?: IpAccessSettings;
	}
	export interface GetIpAccessSettingsResponseFormProperties {
	}
	export function CreateGetIpAccessSettingsResponseFormGroup() {
		return new FormGroup<GetIpAccessSettingsResponseFormProperties>({
		});

	}


	/** The IP access settings resource that can be associated with a web portal.  */
	export interface IpAccessSettings {
		associatedPortalArns?: Array<string>;
		creationDate?: Date;
		description?: string;
		displayName?: string;

		/** Required */
		ipAccessSettingsArn: string;
		ipRules?: Array<IpRule>;
	}

	/** The IP access settings resource that can be associated with a web portal.  */
	export interface IpAccessSettingsFormProperties {
		creationDate: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** Required */
		ipAccessSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateIpAccessSettingsFormGroup() {
		return new FormGroup<IpAccessSettingsFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			ipAccessSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetNetworkSettingsResponse {
		networkSettings?: NetworkSettings;
	}
	export interface GetNetworkSettingsResponseFormProperties {
	}
	export function CreateGetNetworkSettingsResponseFormGroup() {
		return new FormGroup<GetNetworkSettingsResponseFormProperties>({
		});

	}


	/** A network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC.  */
	export interface NetworkSettings {
		associatedPortalArns?: Array<string>;

		/** Required */
		networkSettingsArn: string;
		securityGroupIds?: Array<string>;
		subnetIds?: Array<string>;
		vpcId?: string;
	}

	/** A network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC.  */
	export interface NetworkSettingsFormProperties {

		/** Required */
		networkSettingsArn: FormControl<string | null | undefined>,
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkSettingsFormGroup() {
		return new FormGroup<NetworkSettingsFormProperties>({
			networkSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPortalResponse {
		portal?: Portal;
	}
	export interface GetPortalResponseFormProperties {
	}
	export function CreateGetPortalResponseFormGroup() {
		return new FormGroup<GetPortalResponseFormProperties>({
		});

	}


	/** The web portal. */
	export interface Portal {
		authenticationType?: AuthenticationType;
		browserSettingsArn?: string;
		browserType?: BrowserType;
		creationDate?: Date;
		displayName?: string;
		ipAccessSettingsArn?: string;
		networkSettingsArn?: string;
		portalArn?: string;
		portalEndpoint?: string;
		portalStatus?: PortalStatus;
		rendererType?: RendererType;
		statusReason?: string;
		trustStoreArn?: string;
		userAccessLoggingSettingsArn?: string;
		userSettingsArn?: string;
	}

	/** The web portal. */
	export interface PortalFormProperties {
		authenticationType: FormControl<AuthenticationType | null | undefined>,
		browserSettingsArn: FormControl<string | null | undefined>,
		browserType: FormControl<BrowserType | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		ipAccessSettingsArn: FormControl<string | null | undefined>,
		networkSettingsArn: FormControl<string | null | undefined>,
		portalArn: FormControl<string | null | undefined>,
		portalEndpoint: FormControl<string | null | undefined>,
		portalStatus: FormControl<PortalStatus | null | undefined>,
		rendererType: FormControl<RendererType | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		trustStoreArn: FormControl<string | null | undefined>,
		userAccessLoggingSettingsArn: FormControl<string | null | undefined>,
		userSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreatePortalFormGroup() {
		return new FormGroup<PortalFormProperties>({
			authenticationType: new FormControl<AuthenticationType | null | undefined>(undefined),
			browserSettingsArn: new FormControl<string | null | undefined>(undefined),
			browserType: new FormControl<BrowserType | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			ipAccessSettingsArn: new FormControl<string | null | undefined>(undefined),
			networkSettingsArn: new FormControl<string | null | undefined>(undefined),
			portalArn: new FormControl<string | null | undefined>(undefined),
			portalEndpoint: new FormControl<string | null | undefined>(undefined),
			portalStatus: new FormControl<PortalStatus | null | undefined>(undefined),
			rendererType: new FormControl<RendererType | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			trustStoreArn: new FormControl<string | null | undefined>(undefined),
			userAccessLoggingSettingsArn: new FormControl<string | null | undefined>(undefined),
			userSettingsArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuthenticationType { Standard = 'Standard', IAM_Identity_Center = 'IAM_Identity_Center' }

	export enum BrowserType { Chrome = 'Chrome' }

	export enum PortalStatus { Incomplete = 'Incomplete', Pending = 'Pending', Active = 'Active' }

	export enum RendererType { AppStream = 'AppStream' }

	export interface GetPortalServiceProviderMetadataResponse {

		/** Required */
		portalArn: string;
		serviceProviderSamlMetadata?: string;
	}
	export interface GetPortalServiceProviderMetadataResponseFormProperties {

		/** Required */
		portalArn: FormControl<string | null | undefined>,
		serviceProviderSamlMetadata: FormControl<string | null | undefined>,
	}
	export function CreateGetPortalServiceProviderMetadataResponseFormGroup() {
		return new FormGroup<GetPortalServiceProviderMetadataResponseFormProperties>({
			portalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceProviderSamlMetadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTrustStoreResponse {
		trustStore?: TrustStore;
	}
	export interface GetTrustStoreResponseFormProperties {
	}
	export function CreateGetTrustStoreResponseFormGroup() {
		return new FormGroup<GetTrustStoreResponseFormProperties>({
		});

	}


	/** A trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store.  */
	export interface TrustStore {
		associatedPortalArns?: Array<string>;
		trustStoreArn?: string;
	}

	/** A trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store.  */
	export interface TrustStoreFormProperties {
		trustStoreArn: FormControl<string | null | undefined>,
	}
	export function CreateTrustStoreFormGroup() {
		return new FormGroup<TrustStoreFormProperties>({
			trustStoreArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTrustStoreCertificateResponse {
		certificate?: Certificate;
		trustStoreArn?: string;
	}
	export interface GetTrustStoreCertificateResponseFormProperties {
		trustStoreArn: FormControl<string | null | undefined>,
	}
	export function CreateGetTrustStoreCertificateResponseFormGroup() {
		return new FormGroup<GetTrustStoreCertificateResponseFormProperties>({
			trustStoreArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The certificate. */
	export interface Certificate {
		body?: string;
		issuer?: string;
		notValidAfter?: Date;
		notValidBefore?: Date;
		subject?: string;
		thumbprint?: string;
	}

	/** The certificate. */
	export interface CertificateFormProperties {
		body: FormControl<string | null | undefined>,
		issuer: FormControl<string | null | undefined>,
		notValidAfter: FormControl<Date | null | undefined>,
		notValidBefore: FormControl<Date | null | undefined>,
		subject: FormControl<string | null | undefined>,
		thumbprint: FormControl<string | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			notValidAfter: new FormControl<Date | null | undefined>(undefined),
			notValidBefore: new FormControl<Date | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUserAccessLoggingSettingsResponse {
		userAccessLoggingSettings?: UserAccessLoggingSettings;
	}
	export interface GetUserAccessLoggingSettingsResponseFormProperties {
	}
	export function CreateGetUserAccessLoggingSettingsResponseFormGroup() {
		return new FormGroup<GetUserAccessLoggingSettingsResponseFormProperties>({
		});

	}


	/** A user access logging settings resource that can be associated with a web portal. */
	export interface UserAccessLoggingSettings {
		associatedPortalArns?: Array<string>;
		kinesisStreamArn?: string;

		/** Required */
		userAccessLoggingSettingsArn: string;
	}

	/** A user access logging settings resource that can be associated with a web portal. */
	export interface UserAccessLoggingSettingsFormProperties {
		kinesisStreamArn: FormControl<string | null | undefined>,

		/** Required */
		userAccessLoggingSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateUserAccessLoggingSettingsFormGroup() {
		return new FormGroup<UserAccessLoggingSettingsFormProperties>({
			kinesisStreamArn: new FormControl<string | null | undefined>(undefined),
			userAccessLoggingSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetUserSettingsResponse {
		userSettings?: UserSettings;
	}
	export interface GetUserSettingsResponseFormProperties {
	}
	export function CreateGetUserSettingsResponseFormGroup() {
		return new FormGroup<GetUserSettingsResponseFormProperties>({
		});

	}


	/** A user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices.  */
	export interface UserSettings {
		associatedPortalArns?: Array<string>;
		copyAllowed?: EnabledType;
		disconnectTimeoutInMinutes?: number | null;
		downloadAllowed?: EnabledType;
		idleDisconnectTimeoutInMinutes?: number | null;
		pasteAllowed?: EnabledType;
		printAllowed?: EnabledType;
		uploadAllowed?: EnabledType;

		/** Required */
		userSettingsArn: string;
	}

	/** A user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices.  */
	export interface UserSettingsFormProperties {
		copyAllowed: FormControl<EnabledType | null | undefined>,
		disconnectTimeoutInMinutes: FormControl<number | null | undefined>,
		downloadAllowed: FormControl<EnabledType | null | undefined>,
		idleDisconnectTimeoutInMinutes: FormControl<number | null | undefined>,
		pasteAllowed: FormControl<EnabledType | null | undefined>,
		printAllowed: FormControl<EnabledType | null | undefined>,
		uploadAllowed: FormControl<EnabledType | null | undefined>,

		/** Required */
		userSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateUserSettingsFormGroup() {
		return new FormGroup<UserSettingsFormProperties>({
			copyAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			disconnectTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			downloadAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			idleDisconnectTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			pasteAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			printAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			uploadAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			userSettingsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EnabledType { Disabled = 'Disabled', Enabled = 'Enabled' }

	export interface ListBrowserSettingsResponse {
		browserSettings?: Array<BrowserSettingsSummary>;
		nextToken?: string;
	}
	export interface ListBrowserSettingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBrowserSettingsResponseFormGroup() {
		return new FormGroup<ListBrowserSettingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary for browser settings. */
	export interface BrowserSettingsSummary {
		browserSettingsArn?: string;
	}

	/** The summary for browser settings. */
	export interface BrowserSettingsSummaryFormProperties {
		browserSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateBrowserSettingsSummaryFormGroup() {
		return new FormGroup<BrowserSettingsSummaryFormProperties>({
			browserSettingsArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIdentityProvidersResponse {
		identityProviders?: Array<IdentityProviderSummary>;
		nextToken?: string;
	}
	export interface ListIdentityProvidersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityProvidersResponseFormGroup() {
		return new FormGroup<ListIdentityProvidersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the identity provider. */
	export interface IdentityProviderSummary {
		identityProviderArn?: string;
		identityProviderName?: string;
		identityProviderType?: IdentityProviderType;
	}

	/** The summary of the identity provider. */
	export interface IdentityProviderSummaryFormProperties {
		identityProviderArn: FormControl<string | null | undefined>,
		identityProviderName: FormControl<string | null | undefined>,
		identityProviderType: FormControl<IdentityProviderType | null | undefined>,
	}
	export function CreateIdentityProviderSummaryFormGroup() {
		return new FormGroup<IdentityProviderSummaryFormProperties>({
			identityProviderArn: new FormControl<string | null | undefined>(undefined),
			identityProviderName: new FormControl<string | null | undefined>(undefined),
			identityProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined),
		});

	}

	export interface ListIpAccessSettingsResponse {
		ipAccessSettings?: Array<IpAccessSettingsSummary>;
		nextToken?: string;
	}
	export interface ListIpAccessSettingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIpAccessSettingsResponseFormGroup() {
		return new FormGroup<ListIpAccessSettingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of IP access settings. */
	export interface IpAccessSettingsSummary {
		creationDate?: Date;
		description?: string;
		displayName?: string;
		ipAccessSettingsArn?: string;
	}

	/** The summary of IP access settings. */
	export interface IpAccessSettingsSummaryFormProperties {
		creationDate: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		ipAccessSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateIpAccessSettingsSummaryFormGroup() {
		return new FormGroup<IpAccessSettingsSummaryFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			ipAccessSettingsArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNetworkSettingsResponse {
		networkSettings?: Array<NetworkSettingsSummary>;
		nextToken?: string;
	}
	export interface ListNetworkSettingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworkSettingsResponseFormGroup() {
		return new FormGroup<ListNetworkSettingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of network settings. */
	export interface NetworkSettingsSummary {
		networkSettingsArn?: string;
		vpcId?: string;
	}

	/** The summary of network settings. */
	export interface NetworkSettingsSummaryFormProperties {
		networkSettingsArn: FormControl<string | null | undefined>,
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkSettingsSummaryFormGroup() {
		return new FormGroup<NetworkSettingsSummaryFormProperties>({
			networkSettingsArn: new FormControl<string | null | undefined>(undefined),
			vpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPortalsResponse {
		nextToken?: string;
		portals?: Array<PortalSummary>;
	}
	export interface ListPortalsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPortalsResponseFormGroup() {
		return new FormGroup<ListPortalsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the portal. */
	export interface PortalSummary {
		authenticationType?: AuthenticationType;
		browserSettingsArn?: string;
		browserType?: BrowserType;
		creationDate?: Date;
		displayName?: string;
		ipAccessSettingsArn?: string;
		networkSettingsArn?: string;
		portalArn?: string;
		portalEndpoint?: string;
		portalStatus?: PortalStatus;
		rendererType?: RendererType;
		trustStoreArn?: string;
		userAccessLoggingSettingsArn?: string;
		userSettingsArn?: string;
	}

	/** The summary of the portal. */
	export interface PortalSummaryFormProperties {
		authenticationType: FormControl<AuthenticationType | null | undefined>,
		browserSettingsArn: FormControl<string | null | undefined>,
		browserType: FormControl<BrowserType | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		ipAccessSettingsArn: FormControl<string | null | undefined>,
		networkSettingsArn: FormControl<string | null | undefined>,
		portalArn: FormControl<string | null | undefined>,
		portalEndpoint: FormControl<string | null | undefined>,
		portalStatus: FormControl<PortalStatus | null | undefined>,
		rendererType: FormControl<RendererType | null | undefined>,
		trustStoreArn: FormControl<string | null | undefined>,
		userAccessLoggingSettingsArn: FormControl<string | null | undefined>,
		userSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreatePortalSummaryFormGroup() {
		return new FormGroup<PortalSummaryFormProperties>({
			authenticationType: new FormControl<AuthenticationType | null | undefined>(undefined),
			browserSettingsArn: new FormControl<string | null | undefined>(undefined),
			browserType: new FormControl<BrowserType | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			ipAccessSettingsArn: new FormControl<string | null | undefined>(undefined),
			networkSettingsArn: new FormControl<string | null | undefined>(undefined),
			portalArn: new FormControl<string | null | undefined>(undefined),
			portalEndpoint: new FormControl<string | null | undefined>(undefined),
			portalStatus: new FormControl<PortalStatus | null | undefined>(undefined),
			rendererType: new FormControl<RendererType | null | undefined>(undefined),
			trustStoreArn: new FormControl<string | null | undefined>(undefined),
			userAccessLoggingSettingsArn: new FormControl<string | null | undefined>(undefined),
			userSettingsArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTrustStoreCertificatesResponse {
		certificateList?: Array<CertificateSummary>;
		nextToken?: string;
		trustStoreArn?: string;
	}
	export interface ListTrustStoreCertificatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
		trustStoreArn: FormControl<string | null | undefined>,
	}
	export function CreateListTrustStoreCertificatesResponseFormGroup() {
		return new FormGroup<ListTrustStoreCertificatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			trustStoreArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the certificate. */
	export interface CertificateSummary {
		issuer?: string;
		notValidAfter?: Date;
		notValidBefore?: Date;
		subject?: string;
		thumbprint?: string;
	}

	/** The summary of the certificate. */
	export interface CertificateSummaryFormProperties {
		issuer: FormControl<string | null | undefined>,
		notValidAfter: FormControl<Date | null | undefined>,
		notValidBefore: FormControl<Date | null | undefined>,
		subject: FormControl<string | null | undefined>,
		thumbprint: FormControl<string | null | undefined>,
	}
	export function CreateCertificateSummaryFormGroup() {
		return new FormGroup<CertificateSummaryFormProperties>({
			issuer: new FormControl<string | null | undefined>(undefined),
			notValidAfter: new FormControl<Date | null | undefined>(undefined),
			notValidBefore: new FormControl<Date | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTrustStoresResponse {
		nextToken?: string;
		trustStores?: Array<TrustStoreSummary>;
	}
	export interface ListTrustStoresResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrustStoresResponseFormGroup() {
		return new FormGroup<ListTrustStoresResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the trust store. */
	export interface TrustStoreSummary {
		trustStoreArn?: string;
	}

	/** The summary of the trust store. */
	export interface TrustStoreSummaryFormProperties {
		trustStoreArn: FormControl<string | null | undefined>,
	}
	export function CreateTrustStoreSummaryFormGroup() {
		return new FormGroup<TrustStoreSummaryFormProperties>({
			trustStoreArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUserAccessLoggingSettingsResponse {
		nextToken?: string;
		userAccessLoggingSettings?: Array<UserAccessLoggingSettingsSummary>;
	}
	export interface ListUserAccessLoggingSettingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserAccessLoggingSettingsResponseFormGroup() {
		return new FormGroup<ListUserAccessLoggingSettingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of user access logging settings. */
	export interface UserAccessLoggingSettingsSummary {
		kinesisStreamArn?: string;
		userAccessLoggingSettingsArn?: string;
	}

	/** The summary of user access logging settings. */
	export interface UserAccessLoggingSettingsSummaryFormProperties {
		kinesisStreamArn: FormControl<string | null | undefined>,
		userAccessLoggingSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateUserAccessLoggingSettingsSummaryFormGroup() {
		return new FormGroup<UserAccessLoggingSettingsSummaryFormProperties>({
			kinesisStreamArn: new FormControl<string | null | undefined>(undefined),
			userAccessLoggingSettingsArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUserSettingsResponse {
		nextToken?: string;
		userSettings?: Array<UserSettingsSummary>;
	}
	export interface ListUserSettingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserSettingsResponseFormGroup() {
		return new FormGroup<ListUserSettingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of user settings. */
	export interface UserSettingsSummary {
		copyAllowed?: EnabledType;
		disconnectTimeoutInMinutes?: number | null;
		downloadAllowed?: EnabledType;
		idleDisconnectTimeoutInMinutes?: number | null;
		pasteAllowed?: EnabledType;
		printAllowed?: EnabledType;
		uploadAllowed?: EnabledType;
		userSettingsArn?: string;
	}

	/** The summary of user settings. */
	export interface UserSettingsSummaryFormProperties {
		copyAllowed: FormControl<EnabledType | null | undefined>,
		disconnectTimeoutInMinutes: FormControl<number | null | undefined>,
		downloadAllowed: FormControl<EnabledType | null | undefined>,
		idleDisconnectTimeoutInMinutes: FormControl<number | null | undefined>,
		pasteAllowed: FormControl<EnabledType | null | undefined>,
		printAllowed: FormControl<EnabledType | null | undefined>,
		uploadAllowed: FormControl<EnabledType | null | undefined>,
		userSettingsArn: FormControl<string | null | undefined>,
	}
	export function CreateUserSettingsSummaryFormGroup() {
		return new FormGroup<UserSettingsSummaryFormProperties>({
			copyAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			disconnectTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			downloadAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			idleDisconnectTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			pasteAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			printAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			uploadAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			userSettingsArn: new FormControl<string | null | undefined>(undefined),
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

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
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

	export interface UpdateBrowserSettingsResponse {

		/** Required */
		browserSettings: BrowserSettings;
	}
	export interface UpdateBrowserSettingsResponseFormProperties {
	}
	export function CreateUpdateBrowserSettingsResponseFormGroup() {
		return new FormGroup<UpdateBrowserSettingsResponseFormProperties>({
		});

	}

	export interface UpdateIdentityProviderResponse {

		/** Required */
		identityProvider: IdentityProvider;
	}
	export interface UpdateIdentityProviderResponseFormProperties {
	}
	export function CreateUpdateIdentityProviderResponseFormGroup() {
		return new FormGroup<UpdateIdentityProviderResponseFormProperties>({
		});

	}

	export interface UpdateIpAccessSettingsResponse {

		/** Required */
		ipAccessSettings: IpAccessSettings;
	}
	export interface UpdateIpAccessSettingsResponseFormProperties {
	}
	export function CreateUpdateIpAccessSettingsResponseFormGroup() {
		return new FormGroup<UpdateIpAccessSettingsResponseFormProperties>({
		});

	}

	export interface UpdateNetworkSettingsResponse {

		/** Required */
		networkSettings: NetworkSettings;
	}
	export interface UpdateNetworkSettingsResponseFormProperties {
	}
	export function CreateUpdateNetworkSettingsResponseFormGroup() {
		return new FormGroup<UpdateNetworkSettingsResponseFormProperties>({
		});

	}

	export interface UpdatePortalResponse {
		portal?: Portal;
	}
	export interface UpdatePortalResponseFormProperties {
	}
	export function CreateUpdatePortalResponseFormGroup() {
		return new FormGroup<UpdatePortalResponseFormProperties>({
		});

	}

	export interface UpdateTrustStoreResponse {

		/** Required */
		trustStoreArn: string;
	}
	export interface UpdateTrustStoreResponseFormProperties {

		/** Required */
		trustStoreArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrustStoreResponseFormGroup() {
		return new FormGroup<UpdateTrustStoreResponseFormProperties>({
			trustStoreArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateUserAccessLoggingSettingsResponse {

		/** Required */
		userAccessLoggingSettings: UserAccessLoggingSettings;
	}
	export interface UpdateUserAccessLoggingSettingsResponseFormProperties {
	}
	export function CreateUpdateUserAccessLoggingSettingsResponseFormGroup() {
		return new FormGroup<UpdateUserAccessLoggingSettingsResponseFormProperties>({
		});

	}

	export interface UpdateUserSettingsResponse {

		/** Required */
		userSettings: UserSettings;
	}
	export interface UpdateUserSettingsResponseFormProperties {
	}
	export function CreateUpdateUserSettingsResponseFormGroup() {
		return new FormGroup<UpdateUserSettingsResponseFormProperties>({
		});

	}

	export interface AssociateBrowserSettingsRequest {
	}
	export interface AssociateBrowserSettingsRequestFormProperties {
	}
	export function CreateAssociateBrowserSettingsRequestFormGroup() {
		return new FormGroup<AssociateBrowserSettingsRequestFormProperties>({
		});

	}

	export interface AssociateIpAccessSettingsRequest {
	}
	export interface AssociateIpAccessSettingsRequestFormProperties {
	}
	export function CreateAssociateIpAccessSettingsRequestFormGroup() {
		return new FormGroup<AssociateIpAccessSettingsRequestFormProperties>({
		});

	}

	export interface AssociateNetworkSettingsRequest {
	}
	export interface AssociateNetworkSettingsRequestFormProperties {
	}
	export function CreateAssociateNetworkSettingsRequestFormGroup() {
		return new FormGroup<AssociateNetworkSettingsRequestFormProperties>({
		});

	}

	export interface AssociateTrustStoreRequest {
	}
	export interface AssociateTrustStoreRequestFormProperties {
	}
	export function CreateAssociateTrustStoreRequestFormGroup() {
		return new FormGroup<AssociateTrustStoreRequestFormProperties>({
		});

	}

	export interface AssociateUserAccessLoggingSettingsRequest {
	}
	export interface AssociateUserAccessLoggingSettingsRequestFormProperties {
	}
	export function CreateAssociateUserAccessLoggingSettingsRequestFormGroup() {
		return new FormGroup<AssociateUserAccessLoggingSettingsRequestFormProperties>({
		});

	}

	export interface AssociateUserSettingsRequest {
	}
	export interface AssociateUserSettingsRequestFormProperties {
	}
	export function CreateAssociateUserSettingsRequestFormGroup() {
		return new FormGroup<AssociateUserSettingsRequestFormProperties>({
		});

	}

	export interface EncryptionContextMap {
	}
	export interface EncryptionContextMapFormProperties {
	}
	export function CreateEncryptionContextMapFormGroup() {
		return new FormGroup<EncryptionContextMapFormProperties>({
		});

	}

	export interface CreateBrowserSettingsRequest {
		additionalEncryptionContext?: EncryptionContextMap;

		/** Required */
		browserPolicy: string;
		clientToken?: string;
		customerManagedKey?: string;
		tags?: Array<Tag>;
	}
	export interface CreateBrowserSettingsRequestFormProperties {

		/** Required */
		browserPolicy: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		customerManagedKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateBrowserSettingsRequestFormGroup() {
		return new FormGroup<CreateBrowserSettingsRequestFormProperties>({
			browserPolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			customerManagedKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIdentityProviderRequest {
		clientToken?: string;

		/** Required */
		identityProviderDetails: IdentityProviderDetails;

		/** Required */
		identityProviderName: string;

		/** Required */
		identityProviderType: IdentityProviderType;

		/** Required */
		portalArn: string;
	}
	export interface CreateIdentityProviderRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		identityProviderName: FormControl<string | null | undefined>,

		/** Required */
		identityProviderType: FormControl<IdentityProviderType | null | undefined>,

		/** Required */
		portalArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateIdentityProviderRequestFormGroup() {
		return new FormGroup<CreateIdentityProviderRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			identityProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			identityProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined, [Validators.required]),
			portalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateIpAccessSettingsRequest {
		additionalEncryptionContext?: EncryptionContextMap;
		clientToken?: string;
		customerManagedKey?: string;
		description?: string;
		displayName?: string;

		/** Required */
		ipRules: Array<IpRule>;
		tags?: Array<Tag>;
	}
	export interface CreateIpAccessSettingsRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		customerManagedKey: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateCreateIpAccessSettingsRequestFormGroup() {
		return new FormGroup<CreateIpAccessSettingsRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			customerManagedKey: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkSettingsRequest {
		clientToken?: string;

		/** Required */
		securityGroupIds: Array<string>;

		/** Required */
		subnetIds: Array<string>;
		tags?: Array<Tag>;

		/** Required */
		vpcId: string;
	}
	export interface CreateNetworkSettingsRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSettingsRequestFormGroup() {
		return new FormGroup<CreateNetworkSettingsRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			vpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePortalRequest {
		additionalEncryptionContext?: EncryptionContextMap;
		authenticationType?: AuthenticationType;
		clientToken?: string;
		customerManagedKey?: string;
		displayName?: string;
		tags?: Array<Tag>;
	}
	export interface CreatePortalRequestFormProperties {
		authenticationType: FormControl<AuthenticationType | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		customerManagedKey: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortalRequestFormGroup() {
		return new FormGroup<CreatePortalRequestFormProperties>({
			authenticationType: new FormControl<AuthenticationType | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			customerManagedKey: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTrustStoreRequest {

		/** Required */
		certificateList: Array<string>;
		clientToken?: string;
		tags?: Array<Tag>;
	}
	export interface CreateTrustStoreRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrustStoreRequestFormGroup() {
		return new FormGroup<CreateTrustStoreRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserAccessLoggingSettingsRequest {
		clientToken?: string;

		/** Required */
		kinesisStreamArn: string;
		tags?: Array<Tag>;
	}
	export interface CreateUserAccessLoggingSettingsRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		kinesisStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserAccessLoggingSettingsRequestFormGroup() {
		return new FormGroup<CreateUserAccessLoggingSettingsRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			kinesisStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUserSettingsRequest {
		clientToken?: string;

		/** Required */
		copyAllowed: EnabledType;
		disconnectTimeoutInMinutes?: number | null;

		/** Required */
		downloadAllowed: EnabledType;
		idleDisconnectTimeoutInMinutes?: number | null;

		/** Required */
		pasteAllowed: EnabledType;

		/** Required */
		printAllowed: EnabledType;
		tags?: Array<Tag>;

		/** Required */
		uploadAllowed: EnabledType;
	}
	export interface CreateUserSettingsRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		copyAllowed: FormControl<EnabledType | null | undefined>,
		disconnectTimeoutInMinutes: FormControl<number | null | undefined>,

		/** Required */
		downloadAllowed: FormControl<EnabledType | null | undefined>,
		idleDisconnectTimeoutInMinutes: FormControl<number | null | undefined>,

		/** Required */
		pasteAllowed: FormControl<EnabledType | null | undefined>,

		/** Required */
		printAllowed: FormControl<EnabledType | null | undefined>,

		/** Required */
		uploadAllowed: FormControl<EnabledType | null | undefined>,
	}
	export function CreateCreateUserSettingsRequestFormGroup() {
		return new FormGroup<CreateUserSettingsRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			copyAllowed: new FormControl<EnabledType | null | undefined>(undefined, [Validators.required]),
			disconnectTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			downloadAllowed: new FormControl<EnabledType | null | undefined>(undefined, [Validators.required]),
			idleDisconnectTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			pasteAllowed: new FormControl<EnabledType | null | undefined>(undefined, [Validators.required]),
			printAllowed: new FormControl<EnabledType | null | undefined>(undefined, [Validators.required]),
			uploadAllowed: new FormControl<EnabledType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteBrowserSettingsRequest {
	}
	export interface DeleteBrowserSettingsRequestFormProperties {
	}
	export function CreateDeleteBrowserSettingsRequestFormGroup() {
		return new FormGroup<DeleteBrowserSettingsRequestFormProperties>({
		});

	}

	export interface DeleteIdentityProviderRequest {
	}
	export interface DeleteIdentityProviderRequestFormProperties {
	}
	export function CreateDeleteIdentityProviderRequestFormGroup() {
		return new FormGroup<DeleteIdentityProviderRequestFormProperties>({
		});

	}

	export interface DeleteIpAccessSettingsRequest {
	}
	export interface DeleteIpAccessSettingsRequestFormProperties {
	}
	export function CreateDeleteIpAccessSettingsRequestFormGroup() {
		return new FormGroup<DeleteIpAccessSettingsRequestFormProperties>({
		});

	}

	export interface DeleteNetworkSettingsRequest {
	}
	export interface DeleteNetworkSettingsRequestFormProperties {
	}
	export function CreateDeleteNetworkSettingsRequestFormGroup() {
		return new FormGroup<DeleteNetworkSettingsRequestFormProperties>({
		});

	}

	export interface DeletePortalRequest {
	}
	export interface DeletePortalRequestFormProperties {
	}
	export function CreateDeletePortalRequestFormGroup() {
		return new FormGroup<DeletePortalRequestFormProperties>({
		});

	}

	export interface DeleteTrustStoreRequest {
	}
	export interface DeleteTrustStoreRequestFormProperties {
	}
	export function CreateDeleteTrustStoreRequestFormGroup() {
		return new FormGroup<DeleteTrustStoreRequestFormProperties>({
		});

	}

	export interface DeleteUserAccessLoggingSettingsRequest {
	}
	export interface DeleteUserAccessLoggingSettingsRequestFormProperties {
	}
	export function CreateDeleteUserAccessLoggingSettingsRequestFormGroup() {
		return new FormGroup<DeleteUserAccessLoggingSettingsRequestFormProperties>({
		});

	}

	export interface DeleteUserSettingsRequest {
	}
	export interface DeleteUserSettingsRequestFormProperties {
	}
	export function CreateDeleteUserSettingsRequestFormGroup() {
		return new FormGroup<DeleteUserSettingsRequestFormProperties>({
		});

	}

	export interface DisassociateBrowserSettingsRequest {
	}
	export interface DisassociateBrowserSettingsRequestFormProperties {
	}
	export function CreateDisassociateBrowserSettingsRequestFormGroup() {
		return new FormGroup<DisassociateBrowserSettingsRequestFormProperties>({
		});

	}

	export interface DisassociateIpAccessSettingsRequest {
	}
	export interface DisassociateIpAccessSettingsRequestFormProperties {
	}
	export function CreateDisassociateIpAccessSettingsRequestFormGroup() {
		return new FormGroup<DisassociateIpAccessSettingsRequestFormProperties>({
		});

	}

	export interface DisassociateNetworkSettingsRequest {
	}
	export interface DisassociateNetworkSettingsRequestFormProperties {
	}
	export function CreateDisassociateNetworkSettingsRequestFormGroup() {
		return new FormGroup<DisassociateNetworkSettingsRequestFormProperties>({
		});

	}

	export interface DisassociateTrustStoreRequest {
	}
	export interface DisassociateTrustStoreRequestFormProperties {
	}
	export function CreateDisassociateTrustStoreRequestFormGroup() {
		return new FormGroup<DisassociateTrustStoreRequestFormProperties>({
		});

	}

	export interface DisassociateUserAccessLoggingSettingsRequest {
	}
	export interface DisassociateUserAccessLoggingSettingsRequestFormProperties {
	}
	export function CreateDisassociateUserAccessLoggingSettingsRequestFormGroup() {
		return new FormGroup<DisassociateUserAccessLoggingSettingsRequestFormProperties>({
		});

	}

	export interface DisassociateUserSettingsRequest {
	}
	export interface DisassociateUserSettingsRequestFormProperties {
	}
	export function CreateDisassociateUserSettingsRequestFormGroup() {
		return new FormGroup<DisassociateUserSettingsRequestFormProperties>({
		});

	}

	export interface GetBrowserSettingsRequest {
	}
	export interface GetBrowserSettingsRequestFormProperties {
	}
	export function CreateGetBrowserSettingsRequestFormGroup() {
		return new FormGroup<GetBrowserSettingsRequestFormProperties>({
		});

	}

	export interface GetIdentityProviderRequest {
	}
	export interface GetIdentityProviderRequestFormProperties {
	}
	export function CreateGetIdentityProviderRequestFormGroup() {
		return new FormGroup<GetIdentityProviderRequestFormProperties>({
		});

	}

	export interface GetIpAccessSettingsRequest {
	}
	export interface GetIpAccessSettingsRequestFormProperties {
	}
	export function CreateGetIpAccessSettingsRequestFormGroup() {
		return new FormGroup<GetIpAccessSettingsRequestFormProperties>({
		});

	}

	export interface GetNetworkSettingsRequest {
	}
	export interface GetNetworkSettingsRequestFormProperties {
	}
	export function CreateGetNetworkSettingsRequestFormGroup() {
		return new FormGroup<GetNetworkSettingsRequestFormProperties>({
		});

	}

	export interface GetPortalRequest {
	}
	export interface GetPortalRequestFormProperties {
	}
	export function CreateGetPortalRequestFormGroup() {
		return new FormGroup<GetPortalRequestFormProperties>({
		});

	}

	export interface GetPortalServiceProviderMetadataRequest {
	}
	export interface GetPortalServiceProviderMetadataRequestFormProperties {
	}
	export function CreateGetPortalServiceProviderMetadataRequestFormGroup() {
		return new FormGroup<GetPortalServiceProviderMetadataRequestFormProperties>({
		});

	}

	export interface GetTrustStoreCertificateRequest {
	}
	export interface GetTrustStoreCertificateRequestFormProperties {
	}
	export function CreateGetTrustStoreCertificateRequestFormGroup() {
		return new FormGroup<GetTrustStoreCertificateRequestFormProperties>({
		});

	}

	export interface GetTrustStoreRequest {
	}
	export interface GetTrustStoreRequestFormProperties {
	}
	export function CreateGetTrustStoreRequestFormGroup() {
		return new FormGroup<GetTrustStoreRequestFormProperties>({
		});

	}

	export interface GetUserAccessLoggingSettingsRequest {
	}
	export interface GetUserAccessLoggingSettingsRequestFormProperties {
	}
	export function CreateGetUserAccessLoggingSettingsRequestFormGroup() {
		return new FormGroup<GetUserAccessLoggingSettingsRequestFormProperties>({
		});

	}

	export interface GetUserSettingsRequest {
	}
	export interface GetUserSettingsRequestFormProperties {
	}
	export function CreateGetUserSettingsRequestFormGroup() {
		return new FormGroup<GetUserSettingsRequestFormProperties>({
		});

	}

	export interface ListBrowserSettingsRequest {
	}
	export interface ListBrowserSettingsRequestFormProperties {
	}
	export function CreateListBrowserSettingsRequestFormGroup() {
		return new FormGroup<ListBrowserSettingsRequestFormProperties>({
		});

	}

	export interface ListIdentityProvidersRequest {
	}
	export interface ListIdentityProvidersRequestFormProperties {
	}
	export function CreateListIdentityProvidersRequestFormGroup() {
		return new FormGroup<ListIdentityProvidersRequestFormProperties>({
		});

	}

	export interface ListIpAccessSettingsRequest {
	}
	export interface ListIpAccessSettingsRequestFormProperties {
	}
	export function CreateListIpAccessSettingsRequestFormGroup() {
		return new FormGroup<ListIpAccessSettingsRequestFormProperties>({
		});

	}

	export interface ListNetworkSettingsRequest {
	}
	export interface ListNetworkSettingsRequestFormProperties {
	}
	export function CreateListNetworkSettingsRequestFormGroup() {
		return new FormGroup<ListNetworkSettingsRequestFormProperties>({
		});

	}

	export interface ListPortalsRequest {
	}
	export interface ListPortalsRequestFormProperties {
	}
	export function CreateListPortalsRequestFormGroup() {
		return new FormGroup<ListPortalsRequestFormProperties>({
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

	export interface ListTrustStoreCertificatesRequest {
	}
	export interface ListTrustStoreCertificatesRequestFormProperties {
	}
	export function CreateListTrustStoreCertificatesRequestFormGroup() {
		return new FormGroup<ListTrustStoreCertificatesRequestFormProperties>({
		});

	}

	export interface ListTrustStoresRequest {
	}
	export interface ListTrustStoresRequestFormProperties {
	}
	export function CreateListTrustStoresRequestFormGroup() {
		return new FormGroup<ListTrustStoresRequestFormProperties>({
		});

	}

	export interface ListUserAccessLoggingSettingsRequest {
	}
	export interface ListUserAccessLoggingSettingsRequestFormProperties {
	}
	export function CreateListUserAccessLoggingSettingsRequestFormGroup() {
		return new FormGroup<ListUserAccessLoggingSettingsRequestFormProperties>({
		});

	}

	export interface ListUserSettingsRequest {
	}
	export interface ListUserSettingsRequestFormProperties {
	}
	export function CreateListUserSettingsRequestFormGroup() {
		return new FormGroup<ListUserSettingsRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {
		clientToken?: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateBrowserSettingsRequest {
		browserPolicy?: string;
		clientToken?: string;
	}
	export interface UpdateBrowserSettingsRequestFormProperties {
		browserPolicy: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBrowserSettingsRequestFormGroup() {
		return new FormGroup<UpdateBrowserSettingsRequestFormProperties>({
			browserPolicy: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIdentityProviderRequest {
		clientToken?: string;
		identityProviderDetails?: IdentityProviderDetails;
		identityProviderName?: string;
		identityProviderType?: IdentityProviderType;
	}
	export interface UpdateIdentityProviderRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		identityProviderName: FormControl<string | null | undefined>,
		identityProviderType: FormControl<IdentityProviderType | null | undefined>,
	}
	export function CreateUpdateIdentityProviderRequestFormGroup() {
		return new FormGroup<UpdateIdentityProviderRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			identityProviderName: new FormControl<string | null | undefined>(undefined),
			identityProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined),
		});

	}

	export interface UpdateIpAccessSettingsRequest {
		clientToken?: string;
		description?: string;
		displayName?: string;
		ipRules?: Array<IpRule>;
	}
	export interface UpdateIpAccessSettingsRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIpAccessSettingsRequestFormGroup() {
		return new FormGroup<UpdateIpAccessSettingsRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSettingsRequest {
		clientToken?: string;
		securityGroupIds?: Array<string>;
		subnetIds?: Array<string>;
		vpcId?: string;
	}
	export interface UpdateNetworkSettingsRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSettingsRequestFormGroup() {
		return new FormGroup<UpdateNetworkSettingsRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			vpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePortalRequest {
		authenticationType?: AuthenticationType;
		displayName?: string;
	}
	export interface UpdatePortalRequestFormProperties {
		authenticationType: FormControl<AuthenticationType | null | undefined>,
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePortalRequestFormGroup() {
		return new FormGroup<UpdatePortalRequestFormProperties>({
			authenticationType: new FormControl<AuthenticationType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTrustStoreRequest {
		certificatesToAdd?: Array<string>;
		certificatesToDelete?: Array<string>;
		clientToken?: string;
	}
	export interface UpdateTrustStoreRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrustStoreRequestFormGroup() {
		return new FormGroup<UpdateTrustStoreRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUserAccessLoggingSettingsRequest {
		clientToken?: string;
		kinesisStreamArn?: string;
	}
	export interface UpdateUserAccessLoggingSettingsRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		kinesisStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserAccessLoggingSettingsRequestFormGroup() {
		return new FormGroup<UpdateUserAccessLoggingSettingsRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			kinesisStreamArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUserSettingsRequest {
		clientToken?: string;
		copyAllowed?: EnabledType;
		disconnectTimeoutInMinutes?: number | null;
		downloadAllowed?: EnabledType;
		idleDisconnectTimeoutInMinutes?: number | null;
		pasteAllowed?: EnabledType;
		printAllowed?: EnabledType;
		uploadAllowed?: EnabledType;
	}
	export interface UpdateUserSettingsRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		copyAllowed: FormControl<EnabledType | null | undefined>,
		disconnectTimeoutInMinutes: FormControl<number | null | undefined>,
		downloadAllowed: FormControl<EnabledType | null | undefined>,
		idleDisconnectTimeoutInMinutes: FormControl<number | null | undefined>,
		pasteAllowed: FormControl<EnabledType | null | undefined>,
		printAllowed: FormControl<EnabledType | null | undefined>,
		uploadAllowed: FormControl<EnabledType | null | undefined>,
	}
	export function CreateUpdateUserSettingsRequestFormGroup() {
		return new FormGroup<UpdateUserSettingsRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			copyAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			disconnectTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			downloadAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			idleDisconnectTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			pasteAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			printAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			uploadAllowed: new FormControl<EnabledType | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates a browser settings resource with a web portal.
		 * Put portals/{portalArn}/browserSettings#browserSettingsArn
		 * @param {string} browserSettingsArn The ARN of the browser settings.
		 * @param {string} portalArn The ARN of the web portal.
		 * @return {AssociateBrowserSettingsResponse} Success
		 */
		AssociateBrowserSettings(browserSettingsArn: string, portalArn: string): Observable<AssociateBrowserSettingsResponse> {
			return this.http.put<AssociateBrowserSettingsResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)) + '/browserSettings#browserSettingsArn?browserSettingsArn=' + (browserSettingsArn == null ? '' : encodeURIComponent(browserSettingsArn)), null, {});
		}

		/**
		 * Associates an IP access settings resource with a web portal.
		 * Put portals/{portalArn}/ipAccessSettings#ipAccessSettingsArn
		 * @param {string} ipAccessSettingsArn The ARN of the IP access settings.
		 * @param {string} portalArn The ARN of the web portal.
		 * @return {AssociateIpAccessSettingsResponse} Success
		 */
		AssociateIpAccessSettings(ipAccessSettingsArn: string, portalArn: string): Observable<AssociateIpAccessSettingsResponse> {
			return this.http.put<AssociateIpAccessSettingsResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)) + '/ipAccessSettings#ipAccessSettingsArn?ipAccessSettingsArn=' + (ipAccessSettingsArn == null ? '' : encodeURIComponent(ipAccessSettingsArn)), null, {});
		}

		/**
		 * Associates a network settings resource with a web portal.
		 * Put portals/{portalArn}/networkSettings#networkSettingsArn
		 * @param {string} networkSettingsArn The ARN of the network settings.
		 * @param {string} portalArn The ARN of the web portal.
		 * @return {AssociateNetworkSettingsResponse} Success
		 */
		AssociateNetworkSettings(networkSettingsArn: string, portalArn: string): Observable<AssociateNetworkSettingsResponse> {
			return this.http.put<AssociateNetworkSettingsResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)) + '/networkSettings#networkSettingsArn?networkSettingsArn=' + (networkSettingsArn == null ? '' : encodeURIComponent(networkSettingsArn)), null, {});
		}

		/**
		 * Associates a trust store with a web portal.
		 * Put portals/{portalArn}/trustStores#trustStoreArn
		 * @param {string} portalArn The ARN of the web portal.
		 * @param {string} trustStoreArn The ARN of the trust store.
		 * @return {AssociateTrustStoreResponse} Success
		 */
		AssociateTrustStore(portalArn: string, trustStoreArn: string): Observable<AssociateTrustStoreResponse> {
			return this.http.put<AssociateTrustStoreResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)) + '/trustStores#trustStoreArn&trustStoreArn=' + (trustStoreArn == null ? '' : encodeURIComponent(trustStoreArn)), null, {});
		}

		/**
		 * Associates a user access logging settings resource with a web portal.
		 * Put portals/{portalArn}/userAccessLoggingSettings#userAccessLoggingSettingsArn
		 * @param {string} portalArn The ARN of the web portal.
		 * @param {string} userAccessLoggingSettingsArn The ARN of the user access logging settings.
		 * @return {AssociateUserAccessLoggingSettingsResponse} Success
		 */
		AssociateUserAccessLoggingSettings(portalArn: string, userAccessLoggingSettingsArn: string): Observable<AssociateUserAccessLoggingSettingsResponse> {
			return this.http.put<AssociateUserAccessLoggingSettingsResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)) + '/userAccessLoggingSettings#userAccessLoggingSettingsArn&userAccessLoggingSettingsArn=' + (userAccessLoggingSettingsArn == null ? '' : encodeURIComponent(userAccessLoggingSettingsArn)), null, {});
		}

		/**
		 * Associates a user settings resource with a web portal.
		 * Put portals/{portalArn}/userSettings#userSettingsArn
		 * @param {string} portalArn The ARN of the web portal.
		 * @param {string} userSettingsArn The ARN of the user settings.
		 * @return {AssociateUserSettingsResponse} Success
		 */
		AssociateUserSettings(portalArn: string, userSettingsArn: string): Observable<AssociateUserSettingsResponse> {
			return this.http.put<AssociateUserSettingsResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)) + '/userSettings#userSettingsArn&userSettingsArn=' + (userSettingsArn == null ? '' : encodeURIComponent(userSettingsArn)), null, {});
		}

		/**
		 * Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal.
		 * Post browserSettings
		 * @return {CreateBrowserSettingsResponse} Success
		 */
		CreateBrowserSettings(requestBody: CreateBrowserSettingsPostBody): Observable<CreateBrowserSettingsResponse> {
			return this.http.post<CreateBrowserSettingsResponse>(this.baseUri + 'browserSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of browser settings.
		 * Get browserSettings
		 * @param {number} maxResults The maximum number of results to be included in the next page.
		 * @param {string} nextToken The pagination token used to retrieve the next page of results for this operation.
		 * @return {ListBrowserSettingsResponse} Success
		 */
		ListBrowserSettings(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListBrowserSettingsResponse> {
			return this.http.get<ListBrowserSettingsResponse>(this.baseUri + 'browserSettings?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates an identity provider resource that is then associated with a web portal.
		 * Post identityProviders
		 * @return {CreateIdentityProviderResponse} Success
		 */
		CreateIdentityProvider(requestBody: CreateIdentityProviderPostBody): Observable<CreateIdentityProviderResponse> {
			return this.http.post<CreateIdentityProviderResponse>(this.baseUri + 'identityProviders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an IP access settings resource that can be associated with a web portal.
		 * Post ipAccessSettings
		 * @return {CreateIpAccessSettingsResponse} Success
		 */
		CreateIpAccessSettings(requestBody: CreateIpAccessSettingsPostBody): Observable<CreateIpAccessSettingsResponse> {
			return this.http.post<CreateIpAccessSettingsResponse>(this.baseUri + 'ipAccessSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of IP access settings.
		 * Get ipAccessSettings
		 * @param {number} maxResults The maximum number of results to be included in the next page.
		 * @param {string} nextToken The pagination token used to retrieve the next page of results for this operation.
		 * @return {ListIpAccessSettingsResponse} Success
		 */
		ListIpAccessSettings(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListIpAccessSettingsResponse> {
			return this.http.get<ListIpAccessSettingsResponse>(this.baseUri + 'ipAccessSettings?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC.
		 * Post networkSettings
		 * @return {CreateNetworkSettingsResponse} Success
		 */
		CreateNetworkSettings(requestBody: CreateNetworkSettingsPostBody): Observable<CreateNetworkSettingsResponse> {
			return this.http.post<CreateNetworkSettingsResponse>(this.baseUri + 'networkSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of network settings.
		 * Get networkSettings
		 * @param {number} maxResults The maximum number of results to be included in the next page.
		 * @param {string} nextToken The pagination token used to retrieve the next page of results for this operation.
		 * @return {ListNetworkSettingsResponse} Success
		 */
		ListNetworkSettings(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListNetworkSettingsResponse> {
			return this.http.get<ListNetworkSettingsResponse>(this.baseUri + 'networkSettings?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a web portal.
		 * Post portals
		 * @return {CreatePortalResponse} Success
		 */
		CreatePortal(requestBody: CreatePortalPostBody): Observable<CreatePortalResponse> {
			return this.http.post<CreatePortalResponse>(this.baseUri + 'portals', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list or web portals.
		 * Get portals
		 * @param {number} maxResults The maximum number of results to be included in the next page.
		 * @param {string} nextToken The pagination token used to retrieve the next page of results for this operation. 
		 * @return {ListPortalsResponse} Success
		 */
		ListPortals(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListPortalsResponse> {
			return this.http.get<ListPortalsResponse>(this.baseUri + 'portals?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store.
		 * Post trustStores
		 * @return {CreateTrustStoreResponse} Success
		 */
		CreateTrustStore(requestBody: CreateTrustStorePostBody): Observable<CreateTrustStoreResponse> {
			return this.http.post<CreateTrustStoreResponse>(this.baseUri + 'trustStores', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of trust stores.
		 * Get trustStores
		 * @param {number} maxResults The maximum number of results to be included in the next page.
		 * @param {string} nextToken The pagination token used to retrieve the next page of results for this operation.
		 * @return {ListTrustStoresResponse} Success
		 */
		ListTrustStores(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListTrustStoresResponse> {
			return this.http.get<ListTrustStoresResponse>(this.baseUri + 'trustStores?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a user access logging settings resource that can be associated with a web portal.
		 * Post userAccessLoggingSettings
		 * @return {CreateUserAccessLoggingSettingsResponse} Success
		 */
		CreateUserAccessLoggingSettings(requestBody: CreateUserAccessLoggingSettingsPostBody): Observable<CreateUserAccessLoggingSettingsResponse> {
			return this.http.post<CreateUserAccessLoggingSettingsResponse>(this.baseUri + 'userAccessLoggingSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of user access logging settings.
		 * Get userAccessLoggingSettings
		 * @param {number} maxResults The maximum number of results to be included in the next page.
		 * @param {string} nextToken The pagination token used to retrieve the next page of results for this operation.
		 * @return {ListUserAccessLoggingSettingsResponse} Success
		 */
		ListUserAccessLoggingSettings(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListUserAccessLoggingSettingsResponse> {
			return this.http.get<ListUserAccessLoggingSettingsResponse>(this.baseUri + 'userAccessLoggingSettings?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices.
		 * Post userSettings
		 * @return {CreateUserSettingsResponse} Success
		 */
		CreateUserSettings(requestBody: CreateUserSettingsPostBody): Observable<CreateUserSettingsResponse> {
			return this.http.post<CreateUserSettingsResponse>(this.baseUri + 'userSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of user settings.
		 * Get userSettings
		 * @param {number} maxResults The maximum number of results to be included in the next page.
		 * @param {string} nextToken The pagination token used to retrieve the next page of results for this operation. 
		 * @return {ListUserSettingsResponse} Success
		 */
		ListUserSettings(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListUserSettingsResponse> {
			return this.http.get<ListUserSettingsResponse>(this.baseUri + 'userSettings?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Deletes browser settings.
		 * Delete browserSettings/{browserSettingsArn}
		 * @param {string} browserSettingsArn The ARN of the browser settings.
		 * @return {DeleteBrowserSettingsResponse} Success
		 */
		DeleteBrowserSettings(browserSettingsArn: string): Observable<DeleteBrowserSettingsResponse> {
			return this.http.delete<DeleteBrowserSettingsResponse>(this.baseUri + 'browserSettings/' + (browserSettingsArn == null ? '' : encodeURIComponent(browserSettingsArn)), {});
		}

		/**
		 * Gets browser settings.
		 * Get browserSettings/{browserSettingsArn}
		 * @param {string} browserSettingsArn The ARN of the browser settings.
		 * @return {GetBrowserSettingsResponse} Success
		 */
		GetBrowserSettings(browserSettingsArn: string): Observable<GetBrowserSettingsResponse> {
			return this.http.get<GetBrowserSettingsResponse>(this.baseUri + 'browserSettings/' + (browserSettingsArn == null ? '' : encodeURIComponent(browserSettingsArn)), {});
		}

		/**
		 * Updates browser settings.
		 * Patch browserSettings/{browserSettingsArn}
		 * @param {string} browserSettingsArn The ARN of the browser settings.
		 * @return {UpdateBrowserSettingsResponse} Success
		 */
		UpdateBrowserSettings(browserSettingsArn: string, requestBody: UpdateBrowserSettingsPatchBody): Observable<UpdateBrowserSettingsResponse> {
			return this.http.patch<UpdateBrowserSettingsResponse>(this.baseUri + 'browserSettings/' + (browserSettingsArn == null ? '' : encodeURIComponent(browserSettingsArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the identity provider.
		 * Delete identityProviders/{identityProviderArn}
		 * @param {string} identityProviderArn The ARN of the identity provider.
		 * @return {DeleteIdentityProviderResponse} Success
		 */
		DeleteIdentityProvider(identityProviderArn: string): Observable<DeleteIdentityProviderResponse> {
			return this.http.delete<DeleteIdentityProviderResponse>(this.baseUri + 'identityProviders/' + (identityProviderArn == null ? '' : encodeURIComponent(identityProviderArn)), {});
		}

		/**
		 * Gets the identity provider.
		 * Get identityProviders/{identityProviderArn}
		 * @param {string} identityProviderArn The ARN of the identity provider.
		 * @return {GetIdentityProviderResponse} Success
		 */
		GetIdentityProvider(identityProviderArn: string): Observable<GetIdentityProviderResponse> {
			return this.http.get<GetIdentityProviderResponse>(this.baseUri + 'identityProviders/' + (identityProviderArn == null ? '' : encodeURIComponent(identityProviderArn)), {});
		}

		/**
		 * Updates the identity provider.
		 * Patch identityProviders/{identityProviderArn}
		 * @param {string} identityProviderArn The ARN of the identity provider.
		 * @return {UpdateIdentityProviderResponse} Success
		 */
		UpdateIdentityProvider(identityProviderArn: string, requestBody: UpdateIdentityProviderPatchBody): Observable<UpdateIdentityProviderResponse> {
			return this.http.patch<UpdateIdentityProviderResponse>(this.baseUri + 'identityProviders/' + (identityProviderArn == null ? '' : encodeURIComponent(identityProviderArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes IP access settings.
		 * Delete ipAccessSettings/{ipAccessSettingsArn}
		 * @param {string} ipAccessSettingsArn The ARN of the IP access settings.
		 * @return {DeleteIpAccessSettingsResponse} Success
		 */
		DeleteIpAccessSettings(ipAccessSettingsArn: string): Observable<DeleteIpAccessSettingsResponse> {
			return this.http.delete<DeleteIpAccessSettingsResponse>(this.baseUri + 'ipAccessSettings/' + (ipAccessSettingsArn == null ? '' : encodeURIComponent(ipAccessSettingsArn)), {});
		}

		/**
		 * Gets the IP access settings.
		 * Get ipAccessSettings/{ipAccessSettingsArn}
		 * @param {string} ipAccessSettingsArn The ARN of the IP access settings.
		 * @return {GetIpAccessSettingsResponse} Success
		 */
		GetIpAccessSettings(ipAccessSettingsArn: string): Observable<GetIpAccessSettingsResponse> {
			return this.http.get<GetIpAccessSettingsResponse>(this.baseUri + 'ipAccessSettings/' + (ipAccessSettingsArn == null ? '' : encodeURIComponent(ipAccessSettingsArn)), {});
		}

		/**
		 * Updates IP access settings.
		 * Patch ipAccessSettings/{ipAccessSettingsArn}
		 * @param {string} ipAccessSettingsArn The ARN of the IP access settings.
		 * @return {UpdateIpAccessSettingsResponse} Success
		 */
		UpdateIpAccessSettings(ipAccessSettingsArn: string, requestBody: UpdateIpAccessSettingsPatchBody): Observable<UpdateIpAccessSettingsResponse> {
			return this.http.patch<UpdateIpAccessSettingsResponse>(this.baseUri + 'ipAccessSettings/' + (ipAccessSettingsArn == null ? '' : encodeURIComponent(ipAccessSettingsArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes network settings.
		 * Delete networkSettings/{networkSettingsArn}
		 * @param {string} networkSettingsArn The ARN of the network settings.
		 * @return {DeleteNetworkSettingsResponse} Success
		 */
		DeleteNetworkSettings(networkSettingsArn: string): Observable<DeleteNetworkSettingsResponse> {
			return this.http.delete<DeleteNetworkSettingsResponse>(this.baseUri + 'networkSettings/' + (networkSettingsArn == null ? '' : encodeURIComponent(networkSettingsArn)), {});
		}

		/**
		 * Gets the network settings.
		 * Get networkSettings/{networkSettingsArn}
		 * @param {string} networkSettingsArn The ARN of the network settings.
		 * @return {GetNetworkSettingsResponse} Success
		 */
		GetNetworkSettings(networkSettingsArn: string): Observable<GetNetworkSettingsResponse> {
			return this.http.get<GetNetworkSettingsResponse>(this.baseUri + 'networkSettings/' + (networkSettingsArn == null ? '' : encodeURIComponent(networkSettingsArn)), {});
		}

		/**
		 * Updates network settings.
		 * Patch networkSettings/{networkSettingsArn}
		 * @param {string} networkSettingsArn The ARN of the network settings.
		 * @return {UpdateNetworkSettingsResponse} Success
		 */
		UpdateNetworkSettings(networkSettingsArn: string, requestBody: UpdateNetworkSettingsPatchBody): Observable<UpdateNetworkSettingsResponse> {
			return this.http.patch<UpdateNetworkSettingsResponse>(this.baseUri + 'networkSettings/' + (networkSettingsArn == null ? '' : encodeURIComponent(networkSettingsArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a web portal.
		 * Delete portals/{portalArn}
		 * @param {string} portalArn The ARN of the web portal.
		 * @return {DeletePortalResponse} Success
		 */
		DeletePortal(portalArn: string): Observable<DeletePortalResponse> {
			return this.http.delete<DeletePortalResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)), {});
		}

		/**
		 * Gets the web portal.
		 * Get portals/{portalArn}
		 * @param {string} portalArn The ARN of the web portal.
		 * @return {GetPortalResponse} Success
		 */
		GetPortal(portalArn: string): Observable<GetPortalResponse> {
			return this.http.get<GetPortalResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)), {});
		}

		/**
		 * Updates a web portal.
		 * Put portals/{portalArn}
		 * @param {string} portalArn The ARN of the web portal.
		 * @return {UpdatePortalResponse} Success
		 */
		UpdatePortal(portalArn: string, requestBody: UpdatePortalPutBody): Observable<UpdatePortalResponse> {
			return this.http.put<UpdatePortalResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the trust store.
		 * Delete trustStores/{trustStoreArn}
		 * @param {string} trustStoreArn The ARN of the trust store.
		 * @return {DeleteTrustStoreResponse} Success
		 */
		DeleteTrustStore(trustStoreArn: string): Observable<DeleteTrustStoreResponse> {
			return this.http.delete<DeleteTrustStoreResponse>(this.baseUri + 'trustStores/' + (trustStoreArn == null ? '' : encodeURIComponent(trustStoreArn)), {});
		}

		/**
		 * Gets the trust store.
		 * Get trustStores/{trustStoreArn}
		 * @param {string} trustStoreArn The ARN of the trust store.
		 * @return {GetTrustStoreResponse} Success
		 */
		GetTrustStore(trustStoreArn: string): Observable<GetTrustStoreResponse> {
			return this.http.get<GetTrustStoreResponse>(this.baseUri + 'trustStores/' + (trustStoreArn == null ? '' : encodeURIComponent(trustStoreArn)), {});
		}

		/**
		 * Updates the trust store.
		 * Patch trustStores/{trustStoreArn}
		 * @param {string} trustStoreArn The ARN of the trust store.
		 * @return {UpdateTrustStoreResponse} Success
		 */
		UpdateTrustStore(trustStoreArn: string, requestBody: UpdateTrustStorePatchBody): Observable<UpdateTrustStoreResponse> {
			return this.http.patch<UpdateTrustStoreResponse>(this.baseUri + 'trustStores/' + (trustStoreArn == null ? '' : encodeURIComponent(trustStoreArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes user access logging settings.
		 * Delete userAccessLoggingSettings/{userAccessLoggingSettingsArn}
		 * @param {string} userAccessLoggingSettingsArn The ARN of the user access logging settings.
		 * @return {DeleteUserAccessLoggingSettingsResponse} Success
		 */
		DeleteUserAccessLoggingSettings(userAccessLoggingSettingsArn: string): Observable<DeleteUserAccessLoggingSettingsResponse> {
			return this.http.delete<DeleteUserAccessLoggingSettingsResponse>(this.baseUri + 'userAccessLoggingSettings/' + (userAccessLoggingSettingsArn == null ? '' : encodeURIComponent(userAccessLoggingSettingsArn)), {});
		}

		/**
		 * Gets user access logging settings.
		 * Get userAccessLoggingSettings/{userAccessLoggingSettingsArn}
		 * @param {string} userAccessLoggingSettingsArn The ARN of the user access logging settings.
		 * @return {GetUserAccessLoggingSettingsResponse} Success
		 */
		GetUserAccessLoggingSettings(userAccessLoggingSettingsArn: string): Observable<GetUserAccessLoggingSettingsResponse> {
			return this.http.get<GetUserAccessLoggingSettingsResponse>(this.baseUri + 'userAccessLoggingSettings/' + (userAccessLoggingSettingsArn == null ? '' : encodeURIComponent(userAccessLoggingSettingsArn)), {});
		}

		/**
		 * Updates the user access logging settings.
		 * Patch userAccessLoggingSettings/{userAccessLoggingSettingsArn}
		 * @param {string} userAccessLoggingSettingsArn The ARN of the user access logging settings.
		 * @return {UpdateUserAccessLoggingSettingsResponse} Success
		 */
		UpdateUserAccessLoggingSettings(userAccessLoggingSettingsArn: string, requestBody: UpdateUserAccessLoggingSettingsPatchBody): Observable<UpdateUserAccessLoggingSettingsResponse> {
			return this.http.patch<UpdateUserAccessLoggingSettingsResponse>(this.baseUri + 'userAccessLoggingSettings/' + (userAccessLoggingSettingsArn == null ? '' : encodeURIComponent(userAccessLoggingSettingsArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes user settings.
		 * Delete userSettings/{userSettingsArn}
		 * @param {string} userSettingsArn The ARN of the user settings.
		 * @return {DeleteUserSettingsResponse} Success
		 */
		DeleteUserSettings(userSettingsArn: string): Observable<DeleteUserSettingsResponse> {
			return this.http.delete<DeleteUserSettingsResponse>(this.baseUri + 'userSettings/' + (userSettingsArn == null ? '' : encodeURIComponent(userSettingsArn)), {});
		}

		/**
		 * Gets user settings.
		 * Get userSettings/{userSettingsArn}
		 * @param {string} userSettingsArn The ARN of the user settings.
		 * @return {GetUserSettingsResponse} Success
		 */
		GetUserSettings(userSettingsArn: string): Observable<GetUserSettingsResponse> {
			return this.http.get<GetUserSettingsResponse>(this.baseUri + 'userSettings/' + (userSettingsArn == null ? '' : encodeURIComponent(userSettingsArn)), {});
		}

		/**
		 * Updates the user settings.
		 * Patch userSettings/{userSettingsArn}
		 * @param {string} userSettingsArn The ARN of the user settings.
		 * @return {UpdateUserSettingsResponse} Success
		 */
		UpdateUserSettings(userSettingsArn: string, requestBody: UpdateUserSettingsPatchBody): Observable<UpdateUserSettingsResponse> {
			return this.http.patch<UpdateUserSettingsResponse>(this.baseUri + 'userSettings/' + (userSettingsArn == null ? '' : encodeURIComponent(userSettingsArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates browser settings from a web portal.
		 * Delete portals/{portalArn}/browserSettings
		 * @param {string} portalArn The ARN of the web portal.
		 * @return {DisassociateBrowserSettingsResponse} Success
		 */
		DisassociateBrowserSettings(portalArn: string): Observable<DisassociateBrowserSettingsResponse> {
			return this.http.delete<DisassociateBrowserSettingsResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)) + '/browserSettings', {});
		}

		/**
		 * Disassociates IP access settings from a web portal.
		 * Delete portals/{portalArn}/ipAccessSettings
		 * @param {string} portalArn The ARN of the web portal.
		 * @return {DisassociateIpAccessSettingsResponse} Success
		 */
		DisassociateIpAccessSettings(portalArn: string): Observable<DisassociateIpAccessSettingsResponse> {
			return this.http.delete<DisassociateIpAccessSettingsResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)) + '/ipAccessSettings', {});
		}

		/**
		 * Disassociates network settings from a web portal.
		 * Delete portals/{portalArn}/networkSettings
		 * @param {string} portalArn The ARN of the web portal.
		 * @return {DisassociateNetworkSettingsResponse} Success
		 */
		DisassociateNetworkSettings(portalArn: string): Observable<DisassociateNetworkSettingsResponse> {
			return this.http.delete<DisassociateNetworkSettingsResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)) + '/networkSettings', {});
		}

		/**
		 * Disassociates a trust store from a web portal.
		 * Delete portals/{portalArn}/trustStores
		 * @param {string} portalArn The ARN of the web portal.
		 * @return {DisassociateTrustStoreResponse} Success
		 */
		DisassociateTrustStore(portalArn: string): Observable<DisassociateTrustStoreResponse> {
			return this.http.delete<DisassociateTrustStoreResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)) + '/trustStores', {});
		}

		/**
		 * Disassociates user access logging settings from a web portal.
		 * Delete portals/{portalArn}/userAccessLoggingSettings
		 * @param {string} portalArn The ARN of the web portal.
		 * @return {DisassociateUserAccessLoggingSettingsResponse} Success
		 */
		DisassociateUserAccessLoggingSettings(portalArn: string): Observable<DisassociateUserAccessLoggingSettingsResponse> {
			return this.http.delete<DisassociateUserAccessLoggingSettingsResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)) + '/userAccessLoggingSettings', {});
		}

		/**
		 * Disassociates user settings from a web portal.
		 * Delete portals/{portalArn}/userSettings
		 * @param {string} portalArn The ARN of the web portal.
		 * @return {DisassociateUserSettingsResponse} Success
		 */
		DisassociateUserSettings(portalArn: string): Observable<DisassociateUserSettingsResponse> {
			return this.http.delete<DisassociateUserSettingsResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)) + '/userSettings', {});
		}

		/**
		 * Gets the service provider metadata.
		 * Get portalIdp/{portalArn}
		 * @param {string} portalArn The ARN of the web portal.
		 * @return {GetPortalServiceProviderMetadataResponse} Success
		 */
		GetPortalServiceProviderMetadata(portalArn: string): Observable<GetPortalServiceProviderMetadataResponse> {
			return this.http.get<GetPortalServiceProviderMetadataResponse>(this.baseUri + 'portalIdp/' + (portalArn == null ? '' : encodeURIComponent(portalArn)), {});
		}

		/**
		 * Gets the trust store certificate.
		 * Get trustStores/{trustStoreArn}/certificate#thumbprint
		 * @param {string} thumbprint The thumbprint of the trust store certificate.
		 * @param {string} trustStoreArn The ARN of the trust store certificate.
		 * @return {GetTrustStoreCertificateResponse} Success
		 */
		GetTrustStoreCertificate(thumbprint: string, trustStoreArn: string): Observable<GetTrustStoreCertificateResponse> {
			return this.http.get<GetTrustStoreCertificateResponse>(this.baseUri + 'trustStores/' + (trustStoreArn == null ? '' : encodeURIComponent(trustStoreArn)) + '/certificate#thumbprint?thumbprint=' + (thumbprint == null ? '' : encodeURIComponent(thumbprint)), {});
		}

		/**
		 * Retrieves a list of identity providers for a specific web portal.
		 * Get portals/{portalArn}/identityProviders
		 * @param {number} maxResults The maximum number of results to be included in the next page.
		 * @param {string} nextToken The pagination token used to retrieve the next page of results for this operation.
		 * @param {string} portalArn The ARN of the web portal.
		 * @return {ListIdentityProvidersResponse} Success
		 */
		ListIdentityProviders(maxResults: number | null | undefined, nextToken: string | null | undefined, portalArn: string): Observable<ListIdentityProvidersResponse> {
			return this.http.get<ListIdentityProvidersResponse>(this.baseUri + 'portals/' + (portalArn == null ? '' : encodeURIComponent(portalArn)) + '/identityProviders?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Retrieves a list of tags for a resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds or overwrites one or more tags for the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of trust store certificates.
		 * Get trustStores/{trustStoreArn}/certificates
		 * @param {number} maxResults The maximum number of results to be included in the next page.
		 * @param {string} nextToken The pagination token used to retrieve the next page of results for this operation.
		 * @param {string} trustStoreArn The ARN of the trust store
		 * @return {ListTrustStoreCertificatesResponse} Success
		 */
		ListTrustStoreCertificates(maxResults: number | null | undefined, nextToken: string | null | undefined, trustStoreArn: string): Observable<ListTrustStoreCertificatesResponse> {
			return this.http.get<ListTrustStoreCertificatesResponse>(this.baseUri + 'trustStores/' + (trustStoreArn == null ? '' : encodeURIComponent(trustStoreArn)) + '/certificates?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Removes one or more tags from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the resource.
		 * @param {Array<string>} tagKeys The list of tag keys to remove from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateBrowserSettingsPostBody {

		/** Additional encryption context of the browser settings. */
		additionalEncryptionContext?: {[id: string]: string };

		/**
		 * A JSON string containing Chrome Enterprise policies that will be applied to all streaming sessions.
		 * Required
		 * Max length: 131072
		 * Min length: 2
		 */
		browserPolicy: string;

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.</p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK. </p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The custom managed key of the browser settings.
		 * Max length: 2048
		 * Min length: 20
		 */
		customerManagedKey?: string | null;

		/**
		 * The tags to add to the browser settings resource. A tag is a key-value pair.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface CreateBrowserSettingsPostBodyFormProperties {

		/** Additional encryption context of the browser settings. */
		additionalEncryptionContext: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A JSON string containing Chrome Enterprise policies that will be applied to all streaming sessions.
		 * Required
		 * Max length: 131072
		 * Min length: 2
		 */
		browserPolicy: FormControl<string | null | undefined>,

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.</p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK. </p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The custom managed key of the browser settings.
		 * Max length: 2048
		 * Min length: 20
		 */
		customerManagedKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateBrowserSettingsPostBodyFormGroup() {
		return new FormGroup<CreateBrowserSettingsPostBodyFormProperties>({
			additionalEncryptionContext: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			browserPolicy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(131072), Validators.pattern('\{[\S\s]*\}\s*')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			customerManagedKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface CreateIdentityProviderPostBody {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.</p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * <p>The identity provider details. The following list describes the provider detail keys for each identity provider type. </p> <ul> <li> <p>For Google and Login with Amazon:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>client_secret</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> </ul> </li> <li> <p>For Facebook:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>client_secret</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> <li> <p> <code>api_version</code> </p> </li> </ul> </li> <li> <p>For Sign in with Apple:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>team_id</code> </p> </li> <li> <p> <code>key_id</code> </p> </li> <li> <p> <code>private_key</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> </ul> </li> <li> <p>For OIDC providers:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>client_secret</code> </p> </li> <li> <p> <code>attributes_request_method</code> </p> </li> <li> <p> <code>oidc_issuer</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> <li> <p> <code>authorize_url</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> <li> <p> <code>token_url</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> <li> <p> <code>attributes_url</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> <li> <p> <code>jwks_uri</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> </ul> </li> <li> <p>For SAML providers:</p> <ul> <li> <p> <code>MetadataFile</code> OR <code>MetadataURL</code> </p> </li> <li> <p> <code>IDPSignout</code> (boolean) <i>optional</i> </p> </li> </ul> </li> </ul>
		 * Required
		 */
		identityProviderDetails: {[id: string]: string };

		/**
		 * The identity provider name.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		identityProviderName: string;

		/**
		 * The identity provider type.
		 * Required
		 */
		identityProviderType: IdentityProviderType;

		/**
		 * The ARN of the web portal.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		portalArn: string;
	}
	export interface CreateIdentityProviderPostBodyFormProperties {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.</p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * <p>The identity provider details. The following list describes the provider detail keys for each identity provider type. </p> <ul> <li> <p>For Google and Login with Amazon:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>client_secret</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> </ul> </li> <li> <p>For Facebook:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>client_secret</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> <li> <p> <code>api_version</code> </p> </li> </ul> </li> <li> <p>For Sign in with Apple:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>team_id</code> </p> </li> <li> <p> <code>key_id</code> </p> </li> <li> <p> <code>private_key</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> </ul> </li> <li> <p>For OIDC providers:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>client_secret</code> </p> </li> <li> <p> <code>attributes_request_method</code> </p> </li> <li> <p> <code>oidc_issuer</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> <li> <p> <code>authorize_url</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> <li> <p> <code>token_url</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> <li> <p> <code>attributes_url</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> <li> <p> <code>jwks_uri</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> </ul> </li> <li> <p>For SAML providers:</p> <ul> <li> <p> <code>MetadataFile</code> OR <code>MetadataURL</code> </p> </li> <li> <p> <code>IDPSignout</code> (boolean) <i>optional</i> </p> </li> </ul> </li> </ul>
		 * Required
		 */
		identityProviderDetails: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The identity provider name.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		identityProviderName: FormControl<string | null | undefined>,

		/**
		 * The identity provider type.
		 * Required
		 */
		identityProviderType: FormControl<IdentityProviderType | null | undefined>,

		/**
		 * The ARN of the web portal.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		portalArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateIdentityProviderPostBodyFormGroup() {
		return new FormGroup<CreateIdentityProviderPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			identityProviderDetails: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			identityProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('^[^_][\p{L}\p{M}\p{S}\p{N}\p{P}][^_]+$')]),
			identityProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined, [Validators.required]),
			portalArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$')]),
		});

	}

	export interface CreateIpAccessSettingsPostBody {

		/** Additional encryption context of the IP access settings. */
		additionalEncryptionContext?: {[id: string]: string };

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The custom managed key of the IP access settings.
		 * Max length: 2048
		 * Min length: 20
		 */
		customerManagedKey?: string | null;

		/**
		 * The description of the IP access settings.
		 * Max length: 256
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The display name of the IP access settings.
		 * Max length: 64
		 * Min length: 1
		 */
		displayName?: string | null;

		/**
		 * The IP rules of the IP access settings.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		ipRules: Array<IpRule>;

		/**
		 * The tags to add to the browser settings resource. A tag is a key-value pair.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface CreateIpAccessSettingsPostBodyFormProperties {

		/** Additional encryption context of the IP access settings. */
		additionalEncryptionContext: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The custom managed key of the IP access settings.
		 * Max length: 2048
		 * Min length: 20
		 */
		customerManagedKey: FormControl<string | null | undefined>,

		/**
		 * The description of the IP access settings.
		 * Max length: 256
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The display name of the IP access settings.
		 * Max length: 64
		 * Min length: 1
		 */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateCreateIpAccessSettingsPostBodyFormGroup() {
		return new FormGroup<CreateIpAccessSettingsPostBodyFormProperties>({
			additionalEncryptionContext: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			customerManagedKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^.+$')]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^.+$')]),
		});

	}

	export interface CreateNetworkSettingsPostBody {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * One or more security groups used to control access from streaming instances to your VPC.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		securityGroupIds: Array<string>;

		/**
		 * The subnets in which network interfaces are created to connect streaming instances to your VPC. At least two of these subnets must be in different availability zones.
		 * Required
		 * Minimum items: 2
		 * Maximum items: 3
		 */
		subnetIds: Array<string>;

		/**
		 * The tags to add to the network settings resource. A tag is a key-value pair.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;

		/**
		 * The VPC that streaming instances will connect to.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		vpcId: string;
	}
	export interface CreateNetworkSettingsPostBodyFormProperties {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The VPC that streaming instances will connect to.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSettingsPostBodyFormGroup() {
		return new FormGroup<CreateNetworkSettingsPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			vpcId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^vpc-[0-9a-z]*$')]),
		});

	}

	export interface CreatePortalPostBody {

		/** The additional encryption context of the portal. */
		additionalEncryptionContext?: {[id: string]: string };

		/** <p>The type of authentication integration points used when signing into the web portal. Defaults to <code>Standard</code>.</p> <p> <code>Standard</code> web portals are authenticated directly through your identity provider. You need to call <code>CreateIdentityProvider</code> to integrate your identity provider with your web portal. User and group access to your web portal is controlled through your identity provider.</p> <p> <code>IAM_Identity_Center</code> web portals are authenticated through AWS IAM Identity Center (successor to AWS Single Sign-On). They provide additional features, such as IdP-initiated authentication. Identity sources (including external identity provider integration), plus user and group access to your web portal, can be configured in the IAM Identity Center.</p> */
		authenticationType?: AuthenticationType | null;

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The customer managed key of the web portal.
		 * Max length: 2048
		 * Min length: 20
		 */
		customerManagedKey?: string | null;

		/**
		 * The name of the web portal. This is not visible to users who log into the web portal.
		 * Max length: 64
		 * Min length: 1
		 */
		displayName?: string | null;

		/**
		 * The tags to add to the web portal. A tag is a key-value pair.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface CreatePortalPostBodyFormProperties {

		/** The additional encryption context of the portal. */
		additionalEncryptionContext: FormControl<{[id: string]: string } | null | undefined>,

		/** <p>The type of authentication integration points used when signing into the web portal. Defaults to <code>Standard</code>.</p> <p> <code>Standard</code> web portals are authenticated directly through your identity provider. You need to call <code>CreateIdentityProvider</code> to integrate your identity provider with your web portal. User and group access to your web portal is controlled through your identity provider.</p> <p> <code>IAM_Identity_Center</code> web portals are authenticated through AWS IAM Identity Center (successor to AWS Single Sign-On). They provide additional features, such as IdP-initiated authentication. Identity sources (including external identity provider integration), plus user and group access to your web portal, can be configured in the IAM Identity Center.</p> */
		authenticationType: FormControl<AuthenticationType | null | undefined>,

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The customer managed key of the web portal.
		 * Max length: 2048
		 * Min length: 20
		 */
		customerManagedKey: FormControl<string | null | undefined>,

		/**
		 * The name of the web portal. This is not visible to users who log into the web portal.
		 * Max length: 64
		 * Min length: 1
		 */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortalPostBodyFormGroup() {
		return new FormGroup<CreatePortalPostBodyFormProperties>({
			additionalEncryptionContext: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			authenticationType: new FormControl<AuthenticationType | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			customerManagedKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$')]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^.+$')]),
		});

	}

	export interface CreateTrustStorePostBody {

		/**
		 * A list of CA certificates to be added to the trust store.
		 * Required
		 */
		certificateList: Array<string>;

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The tags to add to the trust store. A tag is a key-value pair.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface CreateTrustStorePostBodyFormProperties {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrustStorePostBodyFormGroup() {
		return new FormGroup<CreateTrustStorePostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
		});

	}

	export interface CreateUserAccessLoggingSettingsPostBody {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Kinesis stream ARN to which log events are published.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		kinesisStreamArn: string;

		/**
		 * The tags to add to the user settings resource. A tag is a key-value pair.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface CreateUserAccessLoggingSettingsPostBodyFormProperties {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Kinesis stream ARN to which log events are published.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		kinesisStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserAccessLoggingSettingsPostBodyFormGroup() {
		return new FormGroup<CreateUserAccessLoggingSettingsPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			kinesisStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:kinesis:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:stream/.+')]),
		});

	}

	export interface CreateUserSettingsPostBody {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Specifies whether the user can copy text from the streaming session to the local device.
		 * Required
		 */
		copyAllowed: EnabledType;

		/**
		 * The amount of time that a streaming session remains active after users disconnect.
		 * Minimum: 1
		 * Maximum: 600
		 */
		disconnectTimeoutInMinutes?: number | null;

		/**
		 * Specifies whether the user can download files from the streaming session to the local device.
		 * Required
		 */
		downloadAllowed: EnabledType;

		/**
		 * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.
		 * Minimum: 0
		 * Maximum: 60
		 */
		idleDisconnectTimeoutInMinutes?: number | null;

		/**
		 * Specifies whether the user can paste text from the local device to the streaming session.
		 * Required
		 */
		pasteAllowed: EnabledType;

		/**
		 * Specifies whether the user can print to the local device.
		 * Required
		 */
		printAllowed: EnabledType;

		/**
		 * The tags to add to the user settings resource. A tag is a key-value pair.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;

		/**
		 * Specifies whether the user can upload files from the local device to the streaming session.
		 * Required
		 */
		uploadAllowed: EnabledType;
	}
	export interface CreateUserSettingsPostBodyFormProperties {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Specifies whether the user can copy text from the streaming session to the local device.
		 * Required
		 */
		copyAllowed: FormControl<EnabledType | null | undefined>,

		/**
		 * The amount of time that a streaming session remains active after users disconnect.
		 * Minimum: 1
		 * Maximum: 600
		 */
		disconnectTimeoutInMinutes: FormControl<number | null | undefined>,

		/**
		 * Specifies whether the user can download files from the streaming session to the local device.
		 * Required
		 */
		downloadAllowed: FormControl<EnabledType | null | undefined>,

		/**
		 * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.
		 * Minimum: 0
		 * Maximum: 60
		 */
		idleDisconnectTimeoutInMinutes: FormControl<number | null | undefined>,

		/**
		 * Specifies whether the user can paste text from the local device to the streaming session.
		 * Required
		 */
		pasteAllowed: FormControl<EnabledType | null | undefined>,

		/**
		 * Specifies whether the user can print to the local device.
		 * Required
		 */
		printAllowed: FormControl<EnabledType | null | undefined>,

		/**
		 * Specifies whether the user can upload files from the local device to the streaming session.
		 * Required
		 */
		uploadAllowed: FormControl<EnabledType | null | undefined>,
	}
	export function CreateCreateUserSettingsPostBodyFormGroup() {
		return new FormGroup<CreateUserSettingsPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			copyAllowed: new FormControl<EnabledType | null | undefined>(undefined, [Validators.required]),
			disconnectTimeoutInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(600)]),
			downloadAllowed: new FormControl<EnabledType | null | undefined>(undefined, [Validators.required]),
			idleDisconnectTimeoutInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(60)]),
			pasteAllowed: new FormControl<EnabledType | null | undefined>(undefined, [Validators.required]),
			printAllowed: new FormControl<EnabledType | null | undefined>(undefined, [Validators.required]),
			uploadAllowed: new FormControl<EnabledType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateBrowserSettingsPatchBody {

		/**
		 * A JSON string containing Chrome Enterprise policies that will be applied to all streaming sessions.
		 * Max length: 131072
		 * Min length: 2
		 */
		browserPolicy?: string | null;

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface UpdateBrowserSettingsPatchBodyFormProperties {

		/**
		 * A JSON string containing Chrome Enterprise policies that will be applied to all streaming sessions.
		 * Max length: 131072
		 * Min length: 2
		 */
		browserPolicy: FormControl<string | null | undefined>,

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBrowserSettingsPatchBodyFormGroup() {
		return new FormGroup<UpdateBrowserSettingsPatchBodyFormProperties>({
			browserPolicy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(131072), Validators.pattern('\{[\S\s]*\}\s*')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
		});

	}

	export interface UpdateIdentityProviderPatchBody {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** <p>The details of the identity provider. The following list describes the provider detail keys for each identity provider type. </p> <ul> <li> <p>For Google and Login with Amazon:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>client_secret</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> </ul> </li> <li> <p>For Facebook:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>client_secret</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> <li> <p> <code>api_version</code> </p> </li> </ul> </li> <li> <p>For Sign in with Apple:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>team_id</code> </p> </li> <li> <p> <code>key_id</code> </p> </li> <li> <p> <code>private_key</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> </ul> </li> <li> <p>For OIDC providers:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>client_secret</code> </p> </li> <li> <p> <code>attributes_request_method</code> </p> </li> <li> <p> <code>oidc_issuer</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> <li> <p> <code>authorize_url</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> <li> <p> <code>token_url</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> <li> <p> <code>attributes_url</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> <li> <p> <code>jwks_uri</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> </ul> </li> <li> <p>For SAML providers:</p> <ul> <li> <p> <code>MetadataFile</code> OR <code>MetadataURL</code> </p> </li> <li> <p> <code>IDPSignout</code> (boolean) <i>optional</i> </p> </li> </ul> </li> </ul> */
		identityProviderDetails?: {[id: string]: string };

		/**
		 * The name of the identity provider.
		 * Max length: 32
		 * Min length: 1
		 */
		identityProviderName?: string | null;

		/** The type of the identity provider. */
		identityProviderType?: IdentityProviderType | null;
	}
	export interface UpdateIdentityProviderPatchBodyFormProperties {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** <p>The details of the identity provider. The following list describes the provider detail keys for each identity provider type. </p> <ul> <li> <p>For Google and Login with Amazon:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>client_secret</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> </ul> </li> <li> <p>For Facebook:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>client_secret</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> <li> <p> <code>api_version</code> </p> </li> </ul> </li> <li> <p>For Sign in with Apple:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>team_id</code> </p> </li> <li> <p> <code>key_id</code> </p> </li> <li> <p> <code>private_key</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> </ul> </li> <li> <p>For OIDC providers:</p> <ul> <li> <p> <code>client_id</code> </p> </li> <li> <p> <code>client_secret</code> </p> </li> <li> <p> <code>attributes_request_method</code> </p> </li> <li> <p> <code>oidc_issuer</code> </p> </li> <li> <p> <code>authorize_scopes</code> </p> </li> <li> <p> <code>authorize_url</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> <li> <p> <code>token_url</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> <li> <p> <code>attributes_url</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> <li> <p> <code>jwks_uri</code> <i>if not available from discovery URL specified by <code>oidc_issuer</code> key</i> </p> </li> </ul> </li> <li> <p>For SAML providers:</p> <ul> <li> <p> <code>MetadataFile</code> OR <code>MetadataURL</code> </p> </li> <li> <p> <code>IDPSignout</code> (boolean) <i>optional</i> </p> </li> </ul> </li> </ul> */
		identityProviderDetails: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The name of the identity provider.
		 * Max length: 32
		 * Min length: 1
		 */
		identityProviderName: FormControl<string | null | undefined>,

		/** The type of the identity provider. */
		identityProviderType: FormControl<IdentityProviderType | null | undefined>,
	}
	export function CreateUpdateIdentityProviderPatchBodyFormGroup() {
		return new FormGroup<UpdateIdentityProviderPatchBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			identityProviderDetails: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			identityProviderName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32), Validators.pattern('^[^_][\p{L}\p{M}\p{S}\p{N}\p{P}][^_]+$')]),
			identityProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined),
		});

	}

	export interface UpdateIpAccessSettingsPatchBody {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The description of the IP access settings.
		 * Max length: 256
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The display name of the IP access settings.
		 * Max length: 64
		 * Min length: 1
		 */
		displayName?: string | null;

		/**
		 * The updated IP rules of the IP access settings.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		ipRules?: Array<IpRule>;
	}
	export interface UpdateIpAccessSettingsPatchBodyFormProperties {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The description of the IP access settings.
		 * Max length: 256
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The display name of the IP access settings.
		 * Max length: 64
		 * Min length: 1
		 */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIpAccessSettingsPatchBodyFormGroup() {
		return new FormGroup<UpdateIpAccessSettingsPatchBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^.+$')]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^.+$')]),
		});

	}

	export interface UpdateNetworkSettingsPatchBody {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * One or more security groups used to control access from streaming instances to your VPC.
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		securityGroupIds?: Array<string>;

		/**
		 * The subnets in which network interfaces are created to connect streaming instances to your VPC. At least two of these subnets must be in different availability zones.
		 * Minimum items: 2
		 * Maximum items: 3
		 */
		subnetIds?: Array<string>;

		/**
		 * The VPC that streaming instances will connect to.
		 * Max length: 255
		 * Min length: 1
		 */
		vpcId?: string | null;
	}
	export interface UpdateNetworkSettingsPatchBodyFormProperties {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The VPC that streaming instances will connect to.
		 * Max length: 255
		 * Min length: 1
		 */
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSettingsPatchBodyFormGroup() {
		return new FormGroup<UpdateNetworkSettingsPatchBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			vpcId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^vpc-[0-9a-z]*$')]),
		});

	}

	export interface UpdatePortalPutBody {

		/** <p>The type of authentication integration points used when signing into the web portal. Defaults to <code>Standard</code>.</p> <p> <code>Standard</code> web portals are authenticated directly through your identity provider. You need to call <code>CreateIdentityProvider</code> to integrate your identity provider with your web portal. User and group access to your web portal is controlled through your identity provider.</p> <p> <code>IAM_Identity_Center</code> web portals are authenticated through AWS IAM Identity Center (successor to AWS Single Sign-On). They provide additional features, such as IdP-initiated authentication. Identity sources (including external identity provider integration), plus user and group access to your web portal, can be configured in the IAM Identity Center.</p> */
		authenticationType?: AuthenticationType | null;

		/**
		 * The name of the web portal. This is not visible to users who log into the web portal.
		 * Max length: 64
		 * Min length: 1
		 */
		displayName?: string | null;
	}
	export interface UpdatePortalPutBodyFormProperties {

		/** <p>The type of authentication integration points used when signing into the web portal. Defaults to <code>Standard</code>.</p> <p> <code>Standard</code> web portals are authenticated directly through your identity provider. You need to call <code>CreateIdentityProvider</code> to integrate your identity provider with your web portal. User and group access to your web portal is controlled through your identity provider.</p> <p> <code>IAM_Identity_Center</code> web portals are authenticated through AWS IAM Identity Center (successor to AWS Single Sign-On). They provide additional features, such as IdP-initiated authentication. Identity sources (including external identity provider integration), plus user and group access to your web portal, can be configured in the IAM Identity Center.</p> */
		authenticationType: FormControl<AuthenticationType | null | undefined>,

		/**
		 * The name of the web portal. This is not visible to users who log into the web portal.
		 * Max length: 64
		 * Min length: 1
		 */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePortalPutBodyFormGroup() {
		return new FormGroup<UpdatePortalPutBodyFormProperties>({
			authenticationType: new FormControl<AuthenticationType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^.+$')]),
		});

	}

	export interface UpdateTrustStorePatchBody {

		/** A list of CA certificates to add to the trust store. */
		certificatesToAdd?: Array<string>;

		/** A list of CA certificates to delete from a trust store. */
		certificatesToDelete?: Array<string>;

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface UpdateTrustStorePatchBodyFormProperties {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrustStorePatchBodyFormGroup() {
		return new FormGroup<UpdateTrustStorePatchBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
		});

	}

	export interface UpdateUserAccessLoggingSettingsPatchBody {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Kinesis stream ARN to which log events are published.
		 * Max length: 2048
		 * Min length: 20
		 */
		kinesisStreamArn?: string | null;
	}
	export interface UpdateUserAccessLoggingSettingsPatchBodyFormProperties {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Kinesis stream ARN to which log events are published.
		 * Max length: 2048
		 * Min length: 20
		 */
		kinesisStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserAccessLoggingSettingsPatchBodyFormGroup() {
		return new FormGroup<UpdateUserAccessLoggingSettingsPatchBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			kinesisStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:kinesis:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:stream/.+')]),
		});

	}

	export interface UpdateUserSettingsPatchBody {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** Specifies whether the user can copy text from the streaming session to the local device. */
		copyAllowed?: EnabledType | null;

		/**
		 * The amount of time that a streaming session remains active after users disconnect.
		 * Minimum: 1
		 * Maximum: 600
		 */
		disconnectTimeoutInMinutes?: number | null;

		/** Specifies whether the user can download files from the streaming session to the local device. */
		downloadAllowed?: EnabledType | null;

		/**
		 * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.
		 * Minimum: 0
		 * Maximum: 60
		 */
		idleDisconnectTimeoutInMinutes?: number | null;

		/** Specifies whether the user can paste text from the local device to the streaming session. */
		pasteAllowed?: EnabledType | null;

		/** Specifies whether the user can print to the local device. */
		printAllowed?: EnabledType | null;

		/** Specifies whether the user can upload files from the local device to the streaming session. */
		uploadAllowed?: EnabledType | null;
	}
	export interface UpdateUserSettingsPatchBodyFormProperties {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** Specifies whether the user can copy text from the streaming session to the local device. */
		copyAllowed: FormControl<EnabledType | null | undefined>,

		/**
		 * The amount of time that a streaming session remains active after users disconnect.
		 * Minimum: 1
		 * Maximum: 600
		 */
		disconnectTimeoutInMinutes: FormControl<number | null | undefined>,

		/** Specifies whether the user can download files from the streaming session to the local device. */
		downloadAllowed: FormControl<EnabledType | null | undefined>,

		/**
		 * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.
		 * Minimum: 0
		 * Maximum: 60
		 */
		idleDisconnectTimeoutInMinutes: FormControl<number | null | undefined>,

		/** Specifies whether the user can paste text from the local device to the streaming session. */
		pasteAllowed: FormControl<EnabledType | null | undefined>,

		/** Specifies whether the user can print to the local device. */
		printAllowed: FormControl<EnabledType | null | undefined>,

		/** Specifies whether the user can upload files from the local device to the streaming session. */
		uploadAllowed: FormControl<EnabledType | null | undefined>,
	}
	export function CreateUpdateUserSettingsPatchBodyFormGroup() {
		return new FormGroup<UpdateUserSettingsPatchBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			copyAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			disconnectTimeoutInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(600)]),
			downloadAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			idleDisconnectTimeoutInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(60)]),
			pasteAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			printAllowed: new FormControl<EnabledType | null | undefined>(undefined),
			uploadAllowed: new FormControl<EnabledType | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The tags of the resource.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. </p> <p>If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
		 * Max length: 512
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
		});

	}

}

