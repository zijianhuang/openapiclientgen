import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateIdentitySourceOutput {

		/** Required */
		createdDate: Date;

		/** Required */
		identitySourceId: string;

		/** Required */
		lastUpdatedDate: Date;

		/** Required */
		policyStoreId: string;
	}
	export interface CreateIdentitySourceOutputFormProperties {

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		identitySourceId: FormControl<string | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateCreateIdentitySourceOutputFormGroup() {
		return new FormGroup<CreateIdentitySourceOutputFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			identitySourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateIdentitySourceInput {
		clientToken?: string;

		/** Required */
		policyStoreId: string;

		/** Required */
		configuration: Configuration;
		principalEntityType?: string;
	}
	export interface CreateIdentitySourceInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
		principalEntityType: FormControl<string | null | undefined>,
	}
	export function CreateCreateIdentitySourceInputFormGroup() {
		return new FormGroup<CreateIdentitySourceInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principalEntityType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains configuration information used when creating a new identity source.</p> <note> <p>At this time, the only valid member of this structure is a Amazon Cognito user pool configuration.</p> <p>You must specify a <code>userPoolArn</code>, and optionally, a <code>ClientId</code>.</p> </note> <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a> operation.</p> */
	export interface Configuration {
		cognitoUserPoolConfiguration?: CognitoUserPoolConfiguration;
	}

	/** <p>Contains configuration information used when creating a new identity source.</p> <note> <p>At this time, the only valid member of this structure is a Amazon Cognito user pool configuration.</p> <p>You must specify a <code>userPoolArn</code>, and optionally, a <code>ClientId</code>.</p> </note> <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a> operation.</p> */
	export interface ConfigurationFormProperties {
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
		});

	}


	/** <p>The configuration for an identity source that represents a connection to an Amazon Cognito user pool used as an identity provider for Verified Permissions.</p> <p>This data type is used as a field that is part of an <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_Configuration.html">Configuration</a> structure that is used as a parameter to the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_Configuration.html">Configuration</a>.</p> <p>Example:<code>"CognitoUserPoolConfiguration":{"UserPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","ClientIds": ["a1b2c3d4e5f6g7h8i9j0kalbmc"]}</code> </p> */
	export interface CognitoUserPoolConfiguration {

		/** Required */
		userPoolArn: string;
		clientIds?: Array<string>;
	}

	/** <p>The configuration for an identity source that represents a connection to an Amazon Cognito user pool used as an identity provider for Verified Permissions.</p> <p>This data type is used as a field that is part of an <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_Configuration.html">Configuration</a> structure that is used as a parameter to the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_Configuration.html">Configuration</a>.</p> <p>Example:<code>"CognitoUserPoolConfiguration":{"UserPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","ClientIds": ["a1b2c3d4e5f6g7h8i9j0kalbmc"]}</code> </p> */
	export interface CognitoUserPoolConfigurationFormProperties {

		/** Required */
		userPoolArn: FormControl<string | null | undefined>,
	}
	export function CreateCognitoUserPoolConfigurationFormGroup() {
		return new FormGroup<CognitoUserPoolConfigurationFormProperties>({
			userPoolArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
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

	export interface CreatePolicyOutput {

		/** Required */
		policyStoreId: string;

		/** Required */
		policyId: string;

		/** Required */
		policyType: PolicyType;
		principal?: EntityIdentifier;
		resource?: EntityIdentifier;

		/** Required */
		createdDate: Date;

		/** Required */
		lastUpdatedDate: Date;
	}
	export interface CreatePolicyOutputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		policyId: FormControl<string | null | undefined>,

		/** Required */
		policyType: FormControl<PolicyType | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateCreatePolicyOutputFormGroup() {
		return new FormGroup<CreatePolicyOutputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyType: new FormControl<PolicyType | null | undefined>(undefined, [Validators.required]),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PolicyType { STATIC = 0, TEMPLATE_LINKED = 1 }


	/** <p>Contains the identifier of an entity, including its ID and type.</p> <p>This data type is used as a request parameter for <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> operation, and as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a>, <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicy.html">GetPolicy</a>, and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicy.html">UpdatePolicy</a> operations.</p> <p>Example: <code>{"entityId":"<i>string</i>","entityType":"<i>string</i>"}</code> </p> */
	export interface EntityIdentifier {

		/** Required */
		entityType: string;

		/** Required */
		entityId: string;
	}

	/** <p>Contains the identifier of an entity, including its ID and type.</p> <p>This data type is used as a request parameter for <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> operation, and as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a>, <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicy.html">GetPolicy</a>, and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicy.html">UpdatePolicy</a> operations.</p> <p>Example: <code>{"entityId":"<i>string</i>","entityType":"<i>string</i>"}</code> </p> */
	export interface EntityIdentifierFormProperties {

		/** Required */
		entityType: FormControl<string | null | undefined>,

		/** Required */
		entityId: FormControl<string | null | undefined>,
	}
	export function CreateEntityIdentifierFormGroup() {
		return new FormGroup<EntityIdentifierFormProperties>({
			entityType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			entityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePolicyInput {
		clientToken?: string;

		/** Required */
		policyStoreId: string;

		/** Required */
		definition: PolicyDefinition;
	}
	export interface CreatePolicyInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePolicyInputFormGroup() {
		return new FormGroup<CreatePolicyInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A structure that contains the details for a Cedar policy definition. It includes the policy type, a description, and a policy body. This is a top level data type used to create a policy.</p> <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> operation. This structure must always have either an <code>static</code> or a <code>templateLinked</code> element.</p> */
	export interface PolicyDefinition {
		static?: StaticPolicyDefinition;
		templateLinked?: TemplateLinkedPolicyDefinition;
	}

	/** <p>A structure that contains the details for a Cedar policy definition. It includes the policy type, a description, and a policy body. This is a top level data type used to create a policy.</p> <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> operation. This structure must always have either an <code>static</code> or a <code>templateLinked</code> element.</p> */
	export interface PolicyDefinitionFormProperties {
	}
	export function CreatePolicyDefinitionFormGroup() {
		return new FormGroup<PolicyDefinitionFormProperties>({
		});

	}


	/** <p>Contains information about a static policy.</p> <p>This data type is used as a field that is part of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinitionDetail.html">PolicyDefinitionDetail</a> type.</p> */
	export interface StaticPolicyDefinition {
		description?: string;

		/** Required */
		statement: string;
	}

	/** <p>Contains information about a static policy.</p> <p>This data type is used as a field that is part of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinitionDetail.html">PolicyDefinitionDetail</a> type.</p> */
	export interface StaticPolicyDefinitionFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		statement: FormControl<string | null | undefined>,
	}
	export function CreateStaticPolicyDefinitionFormGroup() {
		return new FormGroup<StaticPolicyDefinitionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			statement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about a policy created by instantiating a policy template. */
	export interface TemplateLinkedPolicyDefinition {

		/** Required */
		policyTemplateId: string;
		principal?: EntityIdentifier;
		resource?: EntityIdentifier;
	}

	/** Contains information about a policy created by instantiating a policy template. */
	export interface TemplateLinkedPolicyDefinitionFormProperties {

		/** Required */
		policyTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateTemplateLinkedPolicyDefinitionFormGroup() {
		return new FormGroup<TemplateLinkedPolicyDefinitionFormProperties>({
			policyTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePolicyStoreOutput {

		/** Required */
		policyStoreId: string;

		/** Required */
		arn: string;

		/** Required */
		createdDate: Date;

		/** Required */
		lastUpdatedDate: Date;
	}
	export interface CreatePolicyStoreOutputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateCreatePolicyStoreOutputFormGroup() {
		return new FormGroup<CreatePolicyStoreOutputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePolicyStoreInput {
		clientToken?: string;

		/** Required */
		validationSettings: ValidationSettings;
	}
	export interface CreatePolicyStoreInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePolicyStoreInputFormGroup() {
		return new FormGroup<CreatePolicyStoreInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A structure that contains Cedar policy validation settings for the policy store. The validation mode determines which validation failures that Cedar considers serious enough to block acceptance of a new or edited static policy or policy template. </p> <p>This data type is used as a request parameter in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicyStore.html">CreatePolicyStore</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore.html">UpdatePolicyStore</a> operations.</p> */
	export interface ValidationSettings {

		/** Required */
		mode: ValidationMode;
	}

	/** <p>A structure that contains Cedar policy validation settings for the policy store. The validation mode determines which validation failures that Cedar considers serious enough to block acceptance of a new or edited static policy or policy template. </p> <p>This data type is used as a request parameter in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicyStore.html">CreatePolicyStore</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore.html">UpdatePolicyStore</a> operations.</p> */
	export interface ValidationSettingsFormProperties {

		/** Required */
		mode: FormControl<ValidationMode | null | undefined>,
	}
	export function CreateValidationSettingsFormGroup() {
		return new FormGroup<ValidationSettingsFormProperties>({
			mode: new FormControl<ValidationMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ValidationMode { OFF = 0, STRICT = 1 }

	export interface CreatePolicyTemplateOutput {

		/** Required */
		policyStoreId: string;

		/** Required */
		policyTemplateId: string;

		/** Required */
		createdDate: Date;

		/** Required */
		lastUpdatedDate: Date;
	}
	export interface CreatePolicyTemplateOutputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		policyTemplateId: FormControl<string | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateCreatePolicyTemplateOutputFormGroup() {
		return new FormGroup<CreatePolicyTemplateOutputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePolicyTemplateInput {
		clientToken?: string;

		/** Required */
		policyStoreId: string;
		description?: string;

		/** Required */
		statement: string;
	}
	export interface CreatePolicyTemplateInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		statement: FormControl<string | null | undefined>,
	}
	export function CreateCreatePolicyTemplateInputFormGroup() {
		return new FormGroup<CreatePolicyTemplateInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			statement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteIdentitySourceOutput {
	}
	export interface DeleteIdentitySourceOutputFormProperties {
	}
	export function CreateDeleteIdentitySourceOutputFormGroup() {
		return new FormGroup<DeleteIdentitySourceOutputFormProperties>({
		});

	}

	export interface DeleteIdentitySourceInput {

		/** Required */
		policyStoreId: string;

		/** Required */
		identitySourceId: string;
	}
	export interface DeleteIdentitySourceInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		identitySourceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIdentitySourceInputFormGroup() {
		return new FormGroup<DeleteIdentitySourceInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			identitySourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeletePolicyOutput {
	}
	export interface DeletePolicyOutputFormProperties {
	}
	export function CreateDeletePolicyOutputFormGroup() {
		return new FormGroup<DeletePolicyOutputFormProperties>({
		});

	}

	export interface DeletePolicyInput {

		/** Required */
		policyStoreId: string;

		/** Required */
		policyId: string;
	}
	export interface DeletePolicyInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		policyId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePolicyInputFormGroup() {
		return new FormGroup<DeletePolicyInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePolicyStoreOutput {
	}
	export interface DeletePolicyStoreOutputFormProperties {
	}
	export function CreateDeletePolicyStoreOutputFormGroup() {
		return new FormGroup<DeletePolicyStoreOutputFormProperties>({
		});

	}

	export interface DeletePolicyStoreInput {

		/** Required */
		policyStoreId: string;
	}
	export interface DeletePolicyStoreInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePolicyStoreInputFormGroup() {
		return new FormGroup<DeletePolicyStoreInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePolicyTemplateOutput {
	}
	export interface DeletePolicyTemplateOutputFormProperties {
	}
	export function CreateDeletePolicyTemplateOutputFormGroup() {
		return new FormGroup<DeletePolicyTemplateOutputFormProperties>({
		});

	}

	export interface DeletePolicyTemplateInput {

		/** Required */
		policyStoreId: string;

		/** Required */
		policyTemplateId: string;
	}
	export interface DeletePolicyTemplateInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		policyTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePolicyTemplateInputFormGroup() {
		return new FormGroup<DeletePolicyTemplateInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetIdentitySourceOutput {

		/** Required */
		createdDate: Date;

		/** Required */
		details: IdentitySourceDetails;

		/** Required */
		identitySourceId: string;

		/** Required */
		lastUpdatedDate: Date;

		/** Required */
		policyStoreId: string;

		/** Required */
		principalEntityType: string;
	}
	export interface GetIdentitySourceOutputFormProperties {

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		identitySourceId: FormControl<string | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		principalEntityType: FormControl<string | null | undefined>,
	}
	export function CreateGetIdentitySourceOutputFormGroup() {
		return new FormGroup<GetIdentitySourceOutputFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			identitySourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principalEntityType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A structure that contains configuration of the identity source.</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a> operation.</p> */
	export interface IdentitySourceDetails {
		clientIds?: Array<string>;
		userPoolArn?: string;
		discoveryUrl?: string;
		openIdIssuer?: OpenIdIssuer;
	}

	/** <p>A structure that contains configuration of the identity source.</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a> operation.</p> */
	export interface IdentitySourceDetailsFormProperties {
		userPoolArn: FormControl<string | null | undefined>,
		discoveryUrl: FormControl<string | null | undefined>,
		openIdIssuer: FormControl<OpenIdIssuer | null | undefined>,
	}
	export function CreateIdentitySourceDetailsFormGroup() {
		return new FormGroup<IdentitySourceDetailsFormProperties>({
			userPoolArn: new FormControl<string | null | undefined>(undefined),
			discoveryUrl: new FormControl<string | null | undefined>(undefined),
			openIdIssuer: new FormControl<OpenIdIssuer | null | undefined>(undefined),
		});

	}

	export enum OpenIdIssuer { COGNITO = 0 }

	export interface GetIdentitySourceInput {

		/** Required */
		policyStoreId: string;

		/** Required */
		identitySourceId: string;
	}
	export interface GetIdentitySourceInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		identitySourceId: FormControl<string | null | undefined>,
	}
	export function CreateGetIdentitySourceInputFormGroup() {
		return new FormGroup<GetIdentitySourceInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			identitySourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPolicyOutput {

		/** Required */
		policyStoreId: string;

		/** Required */
		policyId: string;

		/** Required */
		policyType: PolicyType;
		principal?: EntityIdentifier;
		resource?: EntityIdentifier;

		/** Required */
		definition: PolicyDefinitionDetail;

		/** Required */
		createdDate: Date;

		/** Required */
		lastUpdatedDate: Date;
	}
	export interface GetPolicyOutputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		policyId: FormControl<string | null | undefined>,

		/** Required */
		policyType: FormControl<PolicyType | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetPolicyOutputFormGroup() {
		return new FormGroup<GetPolicyOutputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyType: new FormControl<PolicyType | null | undefined>(undefined, [Validators.required]),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A structure that describes a policy definition. It must always have either an <code>static</code> or a <code>templateLinked</code> element.</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicy.html">GetPolicy</a> operation.</p> */
	export interface PolicyDefinitionDetail {
		static?: StaticPolicyDefinitionDetail;
		templateLinked?: TemplateLinkedPolicyDefinitionDetail;
	}

	/** <p>A structure that describes a policy definition. It must always have either an <code>static</code> or a <code>templateLinked</code> element.</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicy.html">GetPolicy</a> operation.</p> */
	export interface PolicyDefinitionDetailFormProperties {
	}
	export function CreatePolicyDefinitionDetailFormGroup() {
		return new FormGroup<PolicyDefinitionDetailFormProperties>({
		});

	}


	/** <p>A structure that contains details about a static policy. It includes the description and policy body.</p> <p>This data type is used within a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinition.html">PolicyDefinition</a> structure as part of a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> operation.</p> */
	export interface StaticPolicyDefinitionDetail {
		description?: string;

		/** Required */
		statement: string;
	}

	/** <p>A structure that contains details about a static policy. It includes the description and policy body.</p> <p>This data type is used within a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinition.html">PolicyDefinition</a> structure as part of a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> operation.</p> */
	export interface StaticPolicyDefinitionDetailFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		statement: FormControl<string | null | undefined>,
	}
	export function CreateStaticPolicyDefinitionDetailFormGroup() {
		return new FormGroup<StaticPolicyDefinitionDetailFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			statement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains information about a policy that was </p> <p/> <p>created by instantiating a policy template. </p> <p>This </p> */
	export interface TemplateLinkedPolicyDefinitionDetail {

		/** Required */
		policyTemplateId: string;
		principal?: EntityIdentifier;
		resource?: EntityIdentifier;
	}

	/** <p>Contains information about a policy that was </p> <p/> <p>created by instantiating a policy template. </p> <p>This </p> */
	export interface TemplateLinkedPolicyDefinitionDetailFormProperties {

		/** Required */
		policyTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateTemplateLinkedPolicyDefinitionDetailFormGroup() {
		return new FormGroup<TemplateLinkedPolicyDefinitionDetailFormProperties>({
			policyTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPolicyInput {

		/** Required */
		policyStoreId: string;

		/** Required */
		policyId: string;
	}
	export interface GetPolicyInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		policyId: FormControl<string | null | undefined>,
	}
	export function CreateGetPolicyInputFormGroup() {
		return new FormGroup<GetPolicyInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPolicyStoreOutput {

		/** Required */
		policyStoreId: string;

		/** Required */
		arn: string;

		/** Required */
		validationSettings: ValidationSettings;

		/** Required */
		createdDate: Date;

		/** Required */
		lastUpdatedDate: Date;
	}
	export interface GetPolicyStoreOutputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetPolicyStoreOutputFormGroup() {
		return new FormGroup<GetPolicyStoreOutputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPolicyStoreInput {

		/** Required */
		policyStoreId: string;
	}
	export interface GetPolicyStoreInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateGetPolicyStoreInputFormGroup() {
		return new FormGroup<GetPolicyStoreInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPolicyTemplateOutput {

		/** Required */
		policyStoreId: string;

		/** Required */
		policyTemplateId: string;
		description?: string;

		/** Required */
		statement: string;

		/** Required */
		createdDate: Date;

		/** Required */
		lastUpdatedDate: Date;
	}
	export interface GetPolicyTemplateOutputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		policyTemplateId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		statement: FormControl<string | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetPolicyTemplateOutputFormGroup() {
		return new FormGroup<GetPolicyTemplateOutputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			statement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPolicyTemplateInput {

		/** Required */
		policyStoreId: string;

		/** Required */
		policyTemplateId: string;
	}
	export interface GetPolicyTemplateInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		policyTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateGetPolicyTemplateInputFormGroup() {
		return new FormGroup<GetPolicyTemplateInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSchemaOutput {

		/** Required */
		policyStoreId: string;

		/** Required */
		schema: string;

		/** Required */
		createdDate: Date;

		/** Required */
		lastUpdatedDate: Date;
	}
	export interface GetSchemaOutputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		schema: FormControl<string | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetSchemaOutputFormGroup() {
		return new FormGroup<GetSchemaOutputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSchemaInput {

		/** Required */
		policyStoreId: string;
	}
	export interface GetSchemaInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateGetSchemaInputFormGroup() {
		return new FormGroup<GetSchemaInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IsAuthorizedOutput {

		/** Required */
		decision: Decision;

		/** Required */
		determiningPolicies: Array<DeterminingPolicyItem>;

		/** Required */
		errors: Array<EvaluationErrorItem>;
	}
	export interface IsAuthorizedOutputFormProperties {

		/** Required */
		decision: FormControl<Decision | null | undefined>,
	}
	export function CreateIsAuthorizedOutputFormGroup() {
		return new FormGroup<IsAuthorizedOutputFormProperties>({
			decision: new FormControl<Decision | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Decision { ALLOW = 0, DENY = 1 }


	/** <p>Contains information about one of the policies that determined an authorization decision.</p> <p>This data type is used as an element in a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p> <p>Example: <code>"determiningPolicies":[{"policyId":"SPEXAMPLEabcdefg111111"}]</code> </p> */
	export interface DeterminingPolicyItem {

		/** Required */
		policyId: string;
	}

	/** <p>Contains information about one of the policies that determined an authorization decision.</p> <p>This data type is used as an element in a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p> <p>Example: <code>"determiningPolicies":[{"policyId":"SPEXAMPLEabcdefg111111"}]</code> </p> */
	export interface DeterminingPolicyItemFormProperties {

		/** Required */
		policyId: FormControl<string | null | undefined>,
	}
	export function CreateDeterminingPolicyItemFormGroup() {
		return new FormGroup<DeterminingPolicyItemFormProperties>({
			policyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains a description of an evaluation error.</p> <p>This data type is used as a request parameter in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p> */
	export interface EvaluationErrorItem {

		/** Required */
		errorDescription: string;
	}

	/** <p>Contains a description of an evaluation error.</p> <p>This data type is used as a request parameter in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p> */
	export interface EvaluationErrorItemFormProperties {

		/** Required */
		errorDescription: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationErrorItemFormGroup() {
		return new FormGroup<EvaluationErrorItemFormProperties>({
			errorDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IsAuthorizedInput {

		/** Required */
		policyStoreId: string;
		principal?: EntityIdentifier;
		action?: ActionIdentifier;
		resource?: EntityIdentifier;
		context?: ContextDefinition;
		entities?: EntitiesDefinition;
	}
	export interface IsAuthorizedInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateIsAuthorizedInputFormGroup() {
		return new FormGroup<IsAuthorizedInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains information about an action for a request for which an authorization decision is made.</p> <p>This data type is used as an request parameter to the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p> <p>Example: <code>{ "actionId": "&lt;action name&gt;", "actionType": "Action" }</code> </p> */
	export interface ActionIdentifier {

		/** Required */
		actionType: string;

		/** Required */
		actionId: string;
	}

	/** <p>Contains information about an action for a request for which an authorization decision is made.</p> <p>This data type is used as an request parameter to the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p> <p>Example: <code>{ "actionId": "&lt;action name&gt;", "actionType": "Action" }</code> </p> */
	export interface ActionIdentifierFormProperties {

		/** Required */
		actionType: FormControl<string | null | undefined>,

		/** Required */
		actionId: FormControl<string | null | undefined>,
	}
	export function CreateActionIdentifierFormGroup() {
		return new FormGroup<ActionIdentifierFormProperties>({
			actionType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			actionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains additional details about the context of the request. Verified Permissions evaluates this information in an authorization request as part of the <code>when</code> and <code>unless</code> clauses in a policy.</p> <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p> <p>Example: <code>"context":{"Context":{"&lt;KeyName1&gt;":{"boolean":true},"&lt;KeyName2&gt;":{"long":1234}}}</code> </p> */
	export interface ContextDefinition {
		contextMap?: ContextMap;
	}

	/** <p>Contains additional details about the context of the request. Verified Permissions evaluates this information in an authorization request as part of the <code>when</code> and <code>unless</code> clauses in a policy.</p> <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p> <p>Example: <code>"context":{"Context":{"&lt;KeyName1&gt;":{"boolean":true},"&lt;KeyName2&gt;":{"long":1234}}}</code> </p> */
	export interface ContextDefinitionFormProperties {
	}
	export function CreateContextDefinitionFormGroup() {
		return new FormGroup<ContextDefinitionFormProperties>({
		});

	}

	export interface ContextMap {
	}
	export interface ContextMapFormProperties {
	}
	export function CreateContextMapFormGroup() {
		return new FormGroup<ContextMapFormProperties>({
		});

	}


	/** <p>Contains the list of entities to be considered during an authorization request. This includes all principals, resources, and actions required to successfully evaluate the request.</p> <p>This data type is used as a field in the response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p> */
	export interface EntitiesDefinition {
		entityList?: Array<EntityItem>;
	}

	/** <p>Contains the list of entities to be considered during an authorization request. This includes all principals, resources, and actions required to successfully evaluate the request.</p> <p>This data type is used as a field in the response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p> */
	export interface EntitiesDefinitionFormProperties {
	}
	export function CreateEntitiesDefinitionFormGroup() {
		return new FormGroup<EntitiesDefinitionFormProperties>({
		});

	}


	/** <p>Contains information about an entity that can be referenced in a Cedar policy.</p> <p>This data type is used as one of the fields in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_EntitiesDefinition.html">EntitiesDefinition</a> structure.</p> <p> <code>{ "id": { "entityType": "Photo", "entityId": "VacationPhoto94.jpg" }, "Attributes": {}, "Parents": [ { "entityType": "Album", "entityId": "alice_folder" } ] }</code> </p> */
	export interface EntityItem {

		/** Required */
		identifier: EntityIdentifier;
		attributes?: EntityAttributes;
		parents?: Array<EntityIdentifier>;
	}

	/** <p>Contains information about an entity that can be referenced in a Cedar policy.</p> <p>This data type is used as one of the fields in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_EntitiesDefinition.html">EntitiesDefinition</a> structure.</p> <p> <code>{ "id": { "entityType": "Photo", "entityId": "VacationPhoto94.jpg" }, "Attributes": {}, "Parents": [ { "entityType": "Album", "entityId": "alice_folder" } ] }</code> </p> */
	export interface EntityItemFormProperties {
	}
	export function CreateEntityItemFormGroup() {
		return new FormGroup<EntityItemFormProperties>({
		});

	}

	export interface EntityAttributes {
	}
	export interface EntityAttributesFormProperties {
	}
	export function CreateEntityAttributesFormGroup() {
		return new FormGroup<EntityAttributesFormProperties>({
		});

	}

	export interface IsAuthorizedWithTokenOutput {

		/** Required */
		decision: Decision;

		/** Required */
		determiningPolicies: Array<DeterminingPolicyItem>;

		/** Required */
		errors: Array<EvaluationErrorItem>;
	}
	export interface IsAuthorizedWithTokenOutputFormProperties {

		/** Required */
		decision: FormControl<Decision | null | undefined>,
	}
	export function CreateIsAuthorizedWithTokenOutputFormGroup() {
		return new FormGroup<IsAuthorizedWithTokenOutputFormProperties>({
			decision: new FormControl<Decision | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IsAuthorizedWithTokenInput {

		/** Required */
		policyStoreId: string;
		identityToken?: string;
		accessToken?: string;
		action?: ActionIdentifier;
		resource?: EntityIdentifier;
		context?: ContextDefinition;
		entities?: EntitiesDefinition;
	}
	export interface IsAuthorizedWithTokenInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
		identityToken: FormControl<string | null | undefined>,
		accessToken: FormControl<string | null | undefined>,
	}
	export function CreateIsAuthorizedWithTokenInputFormGroup() {
		return new FormGroup<IsAuthorizedWithTokenInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			identityToken: new FormControl<string | null | undefined>(undefined),
			accessToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIdentitySourcesOutput {
		nextToken?: string;

		/** Required */
		identitySources: Array<IdentitySourceItem>;
	}
	export interface ListIdentitySourcesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentitySourcesOutputFormGroup() {
		return new FormGroup<ListIdentitySourcesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A structure that defines an identity source.</p> <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentityStores.html">ListIdentityStores</a> operation.</p> */
	export interface IdentitySourceItem {

		/** Required */
		createdDate: Date;

		/** Required */
		details: IdentitySourceItemDetails;

		/** Required */
		identitySourceId: string;

		/** Required */
		lastUpdatedDate: Date;

		/** Required */
		policyStoreId: string;

		/** Required */
		principalEntityType: string;
	}

	/** <p>A structure that defines an identity source.</p> <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentityStores.html">ListIdentityStores</a> operation.</p> */
	export interface IdentitySourceItemFormProperties {

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		identitySourceId: FormControl<string | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		principalEntityType: FormControl<string | null | undefined>,
	}
	export function CreateIdentitySourceItemFormGroup() {
		return new FormGroup<IdentitySourceItemFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			identitySourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principalEntityType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A structure that contains configuration of the identity source.</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a> operation.</p> */
	export interface IdentitySourceItemDetails {
		clientIds?: Array<string>;
		userPoolArn?: string;
		discoveryUrl?: string;
		openIdIssuer?: OpenIdIssuer;
	}

	/** <p>A structure that contains configuration of the identity source.</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a> operation.</p> */
	export interface IdentitySourceItemDetailsFormProperties {
		userPoolArn: FormControl<string | null | undefined>,
		discoveryUrl: FormControl<string | null | undefined>,
		openIdIssuer: FormControl<OpenIdIssuer | null | undefined>,
	}
	export function CreateIdentitySourceItemDetailsFormGroup() {
		return new FormGroup<IdentitySourceItemDetailsFormProperties>({
			userPoolArn: new FormControl<string | null | undefined>(undefined),
			discoveryUrl: new FormControl<string | null | undefined>(undefined),
			openIdIssuer: new FormControl<OpenIdIssuer | null | undefined>(undefined),
		});

	}

	export interface ListIdentitySourcesInput {

		/** Required */
		policyStoreId: string;
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<IdentitySourceFilter>;
	}
	export interface ListIdentitySourcesInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListIdentitySourcesInputFormGroup() {
		return new FormGroup<ListIdentitySourcesInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>A structure that defines characteristics of an identity source that you can use to filter.</p> <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentityStores.html">ListIdentityStores</a> operation.</p> */
	export interface IdentitySourceFilter {
		principalEntityType?: string;
	}

	/** <p>A structure that defines characteristics of an identity source that you can use to filter.</p> <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentityStores.html">ListIdentityStores</a> operation.</p> */
	export interface IdentitySourceFilterFormProperties {
		principalEntityType: FormControl<string | null | undefined>,
	}
	export function CreateIdentitySourceFilterFormGroup() {
		return new FormGroup<IdentitySourceFilterFormProperties>({
			principalEntityType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPoliciesOutput {
		nextToken?: string;

		/** Required */
		policies: Array<PolicyItem>;
	}
	export interface ListPoliciesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPoliciesOutputFormGroup() {
		return new FormGroup<ListPoliciesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about a policy.</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a> operation.</p> */
	export interface PolicyItem {

		/** Required */
		policyStoreId: string;

		/** Required */
		policyId: string;

		/** Required */
		policyType: PolicyType;
		principal?: EntityIdentifier;
		resource?: EntityIdentifier;

		/** Required */
		definition: PolicyDefinitionItem;

		/** Required */
		createdDate: Date;

		/** Required */
		lastUpdatedDate: Date;
	}

	/** <p>Contains information about a policy.</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a> operation.</p> */
	export interface PolicyItemFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		policyId: FormControl<string | null | undefined>,

		/** Required */
		policyType: FormControl<PolicyType | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreatePolicyItemFormGroup() {
		return new FormGroup<PolicyItemFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyType: new FormControl<PolicyType | null | undefined>(undefined, [Validators.required]),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A structure that describes a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinintion.html">PolicyDefinintion</a>. It will always have either an <code>StaticPolicy</code> or a <code>TemplateLinkedPolicy</code> element.</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a> operations. </p> */
	export interface PolicyDefinitionItem {
		static?: StaticPolicyDefinitionItem;
		templateLinked?: TemplateLinkedPolicyDefinitionItem;
	}

	/** <p>A structure that describes a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinintion.html">PolicyDefinintion</a>. It will always have either an <code>StaticPolicy</code> or a <code>TemplateLinkedPolicy</code> element.</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a> operations. </p> */
	export interface PolicyDefinitionItemFormProperties {
	}
	export function CreatePolicyDefinitionItemFormGroup() {
		return new FormGroup<PolicyDefinitionItemFormProperties>({
		});

	}


	/** <p>A structure that contains details about a static policy. It includes the description and policy statement.</p> <p>This data type is used within a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinition.html">PolicyDefinition</a> structure as part of a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> operation.</p> */
	export interface StaticPolicyDefinitionItem {
		description?: string;
	}

	/** <p>A structure that contains details about a static policy. It includes the description and policy statement.</p> <p>This data type is used within a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinition.html">PolicyDefinition</a> structure as part of a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> operation.</p> */
	export interface StaticPolicyDefinitionItemFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateStaticPolicyDefinitionItemFormGroup() {
		return new FormGroup<StaticPolicyDefinitionItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about a policy created by instantiating a policy template. </p> <p>This </p> */
	export interface TemplateLinkedPolicyDefinitionItem {

		/** Required */
		policyTemplateId: string;
		principal?: EntityIdentifier;
		resource?: EntityIdentifier;
	}

	/** <p>Contains information about a policy created by instantiating a policy template. </p> <p>This </p> */
	export interface TemplateLinkedPolicyDefinitionItemFormProperties {

		/** Required */
		policyTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateTemplateLinkedPolicyDefinitionItemFormGroup() {
		return new FormGroup<TemplateLinkedPolicyDefinitionItemFormProperties>({
			policyTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPoliciesInput {

		/** Required */
		policyStoreId: string;
		nextToken?: string;
		maxResults?: number | null;
		filter?: PolicyFilter;
	}
	export interface ListPoliciesInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPoliciesInputFormGroup() {
		return new FormGroup<ListPoliciesInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about a filter to refine policies returned in a query.</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a> operation.</p> */
	export interface PolicyFilter {
		principal?: EntityReference;
		resource?: EntityReference;
		policyType?: PolicyType;
		policyTemplateId?: string;
	}

	/** <p>Contains information about a filter to refine policies returned in a query.</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a> operation.</p> */
	export interface PolicyFilterFormProperties {
		policyType: FormControl<PolicyType | null | undefined>,
		policyTemplateId: FormControl<string | null | undefined>,
	}
	export function CreatePolicyFilterFormGroup() {
		return new FormGroup<PolicyFilterFormProperties>({
			policyType: new FormControl<PolicyType | null | undefined>(undefined),
			policyTemplateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about a principal or resource that can be referenced in a Cedar policy.</p> <p>This data type is used as part of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyFilter.html">PolicyFilter</a> structure that is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a> operation..</p> */
	export interface EntityReference {
		unspecified?: boolean | null;
		identifier?: EntityIdentifier;
	}

	/** <p>Contains information about a principal or resource that can be referenced in a Cedar policy.</p> <p>This data type is used as part of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyFilter.html">PolicyFilter</a> structure that is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a> operation..</p> */
	export interface EntityReferenceFormProperties {
		unspecified: FormControl<boolean | null | undefined>,
	}
	export function CreateEntityReferenceFormGroup() {
		return new FormGroup<EntityReferenceFormProperties>({
			unspecified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListPolicyStoresOutput {
		nextToken?: string;

		/** Required */
		policyStores: Array<PolicyStoreItem>;
	}
	export interface ListPolicyStoresOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPolicyStoresOutputFormGroup() {
		return new FormGroup<ListPolicyStoresOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about a policy store.</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStores.html">ListPolicyStores</a> operation.</p> */
	export interface PolicyStoreItem {

		/** Required */
		policyStoreId: string;

		/** Required */
		arn: string;

		/** Required */
		createdDate: Date;
	}

	/** <p>Contains information about a policy store.</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStores.html">ListPolicyStores</a> operation.</p> */
	export interface PolicyStoreItemFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,
	}
	export function CreatePolicyStoreItemFormGroup() {
		return new FormGroup<PolicyStoreItemFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPolicyStoresInput {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListPolicyStoresInputFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPolicyStoresInputFormGroup() {
		return new FormGroup<ListPolicyStoresInputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPolicyTemplatesOutput {
		nextToken?: string;

		/** Required */
		policyTemplates: Array<PolicyTemplateItem>;
	}
	export interface ListPolicyTemplatesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPolicyTemplatesOutputFormGroup() {
		return new FormGroup<ListPolicyTemplatesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains details about a policy template</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyTemplates.html">ListPolicyTemplates</a> operation.</p> */
	export interface PolicyTemplateItem {

		/** Required */
		policyStoreId: string;

		/** Required */
		policyTemplateId: string;
		description?: string;

		/** Required */
		createdDate: Date;

		/** Required */
		lastUpdatedDate: Date;
	}

	/** <p>Contains details about a policy template</p> <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyTemplates.html">ListPolicyTemplates</a> operation.</p> */
	export interface PolicyTemplateItemFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		policyTemplateId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreatePolicyTemplateItemFormGroup() {
		return new FormGroup<PolicyTemplateItemFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPolicyTemplatesInput {

		/** Required */
		policyStoreId: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListPolicyTemplatesInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPolicyTemplatesInputFormGroup() {
		return new FormGroup<ListPolicyTemplatesInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutSchemaOutput {

		/** Required */
		policyStoreId: string;

		/** Required */
		namespaces: Array<string>;

		/** Required */
		createdDate: Date;

		/** Required */
		lastUpdatedDate: Date;
	}
	export interface PutSchemaOutputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreatePutSchemaOutputFormGroup() {
		return new FormGroup<PutSchemaOutputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutSchemaInput {

		/** Required */
		policyStoreId: string;

		/** Required */
		definition: SchemaDefinition;
	}
	export interface PutSchemaInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
	}
	export function CreatePutSchemaInputFormGroup() {
		return new FormGroup<PutSchemaInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains a list of principal types, resource types, and actions that can be specified in policies stored in the same policy store. If the validation mode for the policy store is set to <code>STRICT</code>, then policies that can't be validated by this schema are rejected by Verified Permissions and can't be stored in the policy store. */
	export interface SchemaDefinition {
		cedarJson?: string;
	}

	/** Contains a list of principal types, resource types, and actions that can be specified in policies stored in the same policy store. If the validation mode for the policy store is set to <code>STRICT</code>, then policies that can't be validated by this schema are rejected by Verified Permissions and can't be stored in the policy store. */
	export interface SchemaDefinitionFormProperties {
		cedarJson: FormControl<string | null | undefined>,
	}
	export function CreateSchemaDefinitionFormGroup() {
		return new FormGroup<SchemaDefinitionFormProperties>({
			cedarJson: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIdentitySourceOutput {

		/** Required */
		createdDate: Date;

		/** Required */
		identitySourceId: string;

		/** Required */
		lastUpdatedDate: Date;

		/** Required */
		policyStoreId: string;
	}
	export interface UpdateIdentitySourceOutputFormProperties {

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		identitySourceId: FormControl<string | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIdentitySourceOutputFormGroup() {
		return new FormGroup<UpdateIdentitySourceOutputFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			identitySourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateIdentitySourceInput {

		/** Required */
		policyStoreId: string;

		/** Required */
		identitySourceId: string;

		/** Required */
		updateConfiguration: UpdateConfiguration;
		principalEntityType?: string;
	}
	export interface UpdateIdentitySourceInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		identitySourceId: FormControl<string | null | undefined>,
		principalEntityType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIdentitySourceInputFormGroup() {
		return new FormGroup<UpdateIdentitySourceInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			identitySourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principalEntityType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains an updated configuration to replace the configuration in an existing identity source.</p> <note> <p>At this time, the only valid member of this structure is a Amazon Cognito user pool configuration.</p> <p>You must specify a <code>userPoolArn</code>, and optionally, a <code>ClientId</code>.</p> </note> */
	export interface UpdateConfiguration {
		cognitoUserPoolConfiguration?: UpdateCognitoUserPoolConfiguration;
	}

	/** <p>Contains an updated configuration to replace the configuration in an existing identity source.</p> <note> <p>At this time, the only valid member of this structure is a Amazon Cognito user pool configuration.</p> <p>You must specify a <code>userPoolArn</code>, and optionally, a <code>ClientId</code>.</p> </note> */
	export interface UpdateConfigurationFormProperties {
	}
	export function CreateUpdateConfigurationFormGroup() {
		return new FormGroup<UpdateConfigurationFormProperties>({
		});

	}


	/** Contains configuration details of a Amazon Cognito user pool for use with an identity source. */
	export interface UpdateCognitoUserPoolConfiguration {

		/** Required */
		userPoolArn: string;
		clientIds?: Array<string>;
	}

	/** Contains configuration details of a Amazon Cognito user pool for use with an identity source. */
	export interface UpdateCognitoUserPoolConfigurationFormProperties {

		/** Required */
		userPoolArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCognitoUserPoolConfigurationFormGroup() {
		return new FormGroup<UpdateCognitoUserPoolConfigurationFormProperties>({
			userPoolArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePolicyOutput {

		/** Required */
		policyStoreId: string;

		/** Required */
		policyId: string;

		/** Required */
		policyType: PolicyType;
		principal?: EntityIdentifier;
		resource?: EntityIdentifier;

		/** Required */
		createdDate: Date;

		/** Required */
		lastUpdatedDate: Date;
	}
	export interface UpdatePolicyOutputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		policyId: FormControl<string | null | undefined>,

		/** Required */
		policyType: FormControl<PolicyType | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateUpdatePolicyOutputFormGroup() {
		return new FormGroup<UpdatePolicyOutputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyType: new FormControl<PolicyType | null | undefined>(undefined, [Validators.required]),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePolicyInput {

		/** Required */
		policyStoreId: string;

		/** Required */
		policyId: string;

		/** Required */
		definition: UpdatePolicyDefinition;
	}
	export interface UpdatePolicyInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		policyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePolicyInputFormGroup() {
		return new FormGroup<UpdatePolicyInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains information about updates to be applied to a policy.</p> <p>This data type is used as a request parameter in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicy.html">UpdatePolicy</a> operation.</p> */
	export interface UpdatePolicyDefinition {
		static?: UpdateStaticPolicyDefinition;
	}

	/** <p>Contains information about updates to be applied to a policy.</p> <p>This data type is used as a request parameter in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicy.html">UpdatePolicy</a> operation.</p> */
	export interface UpdatePolicyDefinitionFormProperties {
	}
	export function CreateUpdatePolicyDefinitionFormGroup() {
		return new FormGroup<UpdatePolicyDefinitionFormProperties>({
		});

	}


	/** Contains information about an update to a static policy. */
	export interface UpdateStaticPolicyDefinition {
		description?: string;

		/** Required */
		statement: string;
	}

	/** Contains information about an update to a static policy. */
	export interface UpdateStaticPolicyDefinitionFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		statement: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStaticPolicyDefinitionFormGroup() {
		return new FormGroup<UpdateStaticPolicyDefinitionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			statement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePolicyStoreOutput {

		/** Required */
		policyStoreId: string;

		/** Required */
		arn: string;

		/** Required */
		createdDate: Date;

		/** Required */
		lastUpdatedDate: Date;
	}
	export interface UpdatePolicyStoreOutputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateUpdatePolicyStoreOutputFormGroup() {
		return new FormGroup<UpdatePolicyStoreOutputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePolicyStoreInput {

		/** Required */
		policyStoreId: string;

		/** Required */
		validationSettings: ValidationSettings;
	}
	export interface UpdatePolicyStoreInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePolicyStoreInputFormGroup() {
		return new FormGroup<UpdatePolicyStoreInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePolicyTemplateOutput {

		/** Required */
		policyStoreId: string;

		/** Required */
		policyTemplateId: string;

		/** Required */
		createdDate: Date;

		/** Required */
		lastUpdatedDate: Date;
	}
	export interface UpdatePolicyTemplateOutputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		policyTemplateId: FormControl<string | null | undefined>,

		/** Required */
		createdDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateUpdatePolicyTemplateOutputFormGroup() {
		return new FormGroup<UpdatePolicyTemplateOutputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePolicyTemplateInput {

		/** Required */
		policyStoreId: string;

		/** Required */
		policyTemplateId: string;
		description?: string;

		/** Required */
		statement: string;
	}
	export interface UpdatePolicyTemplateInputFormProperties {

		/** Required */
		policyStoreId: FormControl<string | null | undefined>,

		/** Required */
		policyTemplateId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		statement: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePolicyTemplateInputFormGroup() {
		return new FormGroup<UpdatePolicyTemplateInputFormProperties>({
			policyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			statement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The value of an attribute.</p> <p>Contains information about the runtime context for a request for which an authorization decision is made. </p> <p>This data type is used as a member of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ContextDefinition.html">ContextDefinition</a> structure which is uses as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p> */
	export interface AttributeValue {
		boolean?: boolean | null;
		entityIdentifier?: EntityIdentifier;
		long?: number | null;
		string?: string;
		set?: Array<AttributeValue>;
		record?: RecordAttribute;
	}

	/** <p>The value of an attribute.</p> <p>Contains information about the runtime context for a request for which an authorization decision is made. </p> <p>This data type is used as a member of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ContextDefinition.html">ContextDefinition</a> structure which is uses as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p> */
	export interface AttributeValueFormProperties {
		boolean: FormControl<boolean | null | undefined>,
		long: FormControl<number | null | undefined>,
		string: FormControl<string | null | undefined>,
	}
	export function CreateAttributeValueFormGroup() {
		return new FormGroup<AttributeValueFormProperties>({
			boolean: new FormControl<boolean | null | undefined>(undefined),
			long: new FormControl<number | null | undefined>(undefined),
			string: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RecordAttribute {
	}
	export interface RecordAttributeFormProperties {
	}
	export function CreateRecordAttributeFormGroup() {
		return new FormGroup<RecordAttributeFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a reference to an Amazon Cognito user pool as an external identity provider (IdP). </p> <p>After you create an identity source, you can use the identities provided by the IdP as proxies for the principal in authorization queries that use the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operation. These identities take the form of tokens that contain claims about the user, such as IDs, attributes and group memberships. Amazon Cognito provides both identity tokens and access tokens, and Verified Permissions can use either or both. Any combination of identity and access tokens results in the same Cedar principal. Verified Permissions automatically translates the information about the identities into the standard Cedar attributes that can be evaluated by your policies. Because the Amazon Cognito identity and access tokens can contain different information, the tokens you choose to use determine which principal attributes are available to access when evaluating Cedar policies.</p> <important> <p>If you delete a Amazon Cognito user pool or user, tokens from that deleted pool or that deleted user continue to be usable until they expire.</p> </important> <note> <p>To reference a user from this identity source in your Cedar policies, use the following syntax.</p> <p> <i>IdentityType::"&lt;CognitoUserPoolIdentifier&gt;|&lt;CognitoClientId&gt;</i> </p> <p>Where <code>IdentityType</code> is the string that you provide to the <code>PrincipalEntityType</code> parameter for this operation. The <code>CognitoUserPoolId</code> and <code>CognitoClientId</code> are defined by the Amazon Cognito user pool.</p> </note>
		 * Post #X-Amz-Target=VerifiedPermissions.CreateIdentitySource
		 * @return {CreateIdentitySourceOutput} Success
		 */
		CreateIdentitySource(requestBody: CreateIdentitySourceInput): Observable<CreateIdentitySourceOutput> {
			return this.http.post<CreateIdentitySourceOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.CreateIdentitySource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Cedar policy and saves it in the specified policy store. You can create either a static policy or a policy linked to a policy template.</p> <ul> <li> <p>To create a static policy, provide the Cedar policy text in the <code>StaticPolicy</code> section of the <code>PolicyDefinition</code>.</p> </li> <li> <p>To create a policy that is dynamically linked to a policy template, specify the policy template ID and the principal and resource to associate with this policy in the <code>templateLinked</code> section of the <code>PolicyDefinition</code>. If the policy template is ever updated, any policies linked to the policy template automatically use the updated template.</p> </li> </ul> <note> <p>Creating a policy causes it to be validated against the schema in the policy store. If the policy doesn't pass validation, the operation fails and the policy isn't stored.</p> </note>
		 * Post #X-Amz-Target=VerifiedPermissions.CreatePolicy
		 * @return {CreatePolicyOutput} Success
		 */
		CreatePolicy(requestBody: CreatePolicyInput): Observable<CreatePolicyOutput> {
			return this.http.post<CreatePolicyOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.CreatePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a policy store. A policy store is a container for policy resources.</p> <note> <p>Although <a href="https://docs.cedarpolicy.com/schema.html#namespace">Cedar supports multiple namespaces</a>, Verified Permissions currently supports only one namespace per policy store.</p> </note>
		 * Post #X-Amz-Target=VerifiedPermissions.CreatePolicyStore
		 * @return {CreatePolicyStoreOutput} Success
		 */
		CreatePolicyStore(requestBody: CreatePolicyStoreInput): Observable<CreatePolicyStoreOutput> {
			return this.http.post<CreatePolicyStoreOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.CreatePolicyStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a policy template. A template can use placeholders for the principal and resource. A template must be instantiated into a policy by associating it with specific principals and resources to use for the placeholders. That instantiated policy can then be considered in authorization decisions. The instantiated policy works identically to any other policy, except that it is dynamically linked to the template. If the template changes, then any policies that are linked to that template are immediately updated as well.
		 * Post #X-Amz-Target=VerifiedPermissions.CreatePolicyTemplate
		 * @return {CreatePolicyTemplateOutput} Success
		 */
		CreatePolicyTemplate(requestBody: CreatePolicyTemplateInput): Observable<CreatePolicyTemplateOutput> {
			return this.http.post<CreatePolicyTemplateOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.CreatePolicyTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an identity source that references an identity provider (IdP) such as Amazon Cognito. After you delete the identity source, you can no longer use tokens for identities from that identity source to represent principals in authorization queries made using <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a>. operations.
		 * Post #X-Amz-Target=VerifiedPermissions.DeleteIdentitySource
		 * @return {DeleteIdentitySourceOutput} Success
		 */
		DeleteIdentitySource(requestBody: DeleteIdentitySourceInput): Observable<DeleteIdentitySourceOutput> {
			return this.http.post<DeleteIdentitySourceOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.DeleteIdentitySource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified policy from the policy store.</p> <p>This operation is idempotent; if you specify a policy that doesn't exist, the request response returns a successful <code>HTTP 200</code> status code.</p>
		 * Post #X-Amz-Target=VerifiedPermissions.DeletePolicy
		 * @return {DeletePolicyOutput} Success
		 */
		DeletePolicy(requestBody: DeletePolicyInput): Observable<DeletePolicyOutput> {
			return this.http.post<DeletePolicyOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.DeletePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified policy store.</p> <p>This operation is idempotent. If you specify a policy store that does not exist, the request response will still return a successful HTTP 200 status code.</p>
		 * Post #X-Amz-Target=VerifiedPermissions.DeletePolicyStore
		 * @return {DeletePolicyStoreOutput} Success
		 */
		DeletePolicyStore(requestBody: DeletePolicyStoreInput): Observable<DeletePolicyStoreOutput> {
			return this.http.post<DeletePolicyStoreOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.DeletePolicyStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified policy template from the policy store.</p> <important> <p>This operation also deletes any policies that were created from the specified policy template. Those policies are immediately removed from all future API responses, and are asynchronously deleted from the policy store.</p> </important>
		 * Post #X-Amz-Target=VerifiedPermissions.DeletePolicyTemplate
		 * @return {DeletePolicyTemplateOutput} Success
		 */
		DeletePolicyTemplate(requestBody: DeletePolicyTemplateInput): Observable<DeletePolicyTemplateOutput> {
			return this.http.post<DeletePolicyTemplateOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.DeletePolicyTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the details about the specified identity source.
		 * Post #X-Amz-Target=VerifiedPermissions.GetIdentitySource
		 * @return {GetIdentitySourceOutput} Success
		 */
		GetIdentitySource(requestBody: GetIdentitySourceInput): Observable<GetIdentitySourceOutput> {
			return this.http.post<GetIdentitySourceOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.GetIdentitySource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the specified policy.
		 * Post #X-Amz-Target=VerifiedPermissions.GetPolicy
		 * @return {GetPolicyOutput} Success
		 */
		GetPolicy(requestBody: GetPolicyInput): Observable<GetPolicyOutput> {
			return this.http.post<GetPolicyOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.GetPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves details about a policy store.
		 * Post #X-Amz-Target=VerifiedPermissions.GetPolicyStore
		 * @return {GetPolicyStoreOutput} Success
		 */
		GetPolicyStore(requestBody: GetPolicyStoreInput): Observable<GetPolicyStoreOutput> {
			return this.http.post<GetPolicyStoreOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.GetPolicyStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the details for the specified policy template in the specified policy store.
		 * Post #X-Amz-Target=VerifiedPermissions.GetPolicyTemplate
		 * @return {GetPolicyTemplateOutput} Success
		 */
		GetPolicyTemplate(requestBody: GetPolicyTemplateInput): Observable<GetPolicyTemplateOutput> {
			return this.http.post<GetPolicyTemplateOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.GetPolicyTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the details for the specified schema in the specified policy store.
		 * Post #X-Amz-Target=VerifiedPermissions.GetSchema
		 * @return {GetSchemaOutput} Success
		 */
		GetSchema(requestBody: GetSchemaInput): Observable<GetSchemaOutput> {
			return this.http.post<GetSchemaOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.GetSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Makes an authorization decision about a service request described in the parameters. The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either <code>Allow</code> or <code>Deny</code>, along with a list of the policies that resulted in the decision.
		 * Post #X-Amz-Target=VerifiedPermissions.IsAuthorized
		 * @return {IsAuthorizedOutput} Success
		 */
		IsAuthorized(requestBody: IsAuthorizedInput): Observable<IsAuthorizedOutput> {
			return this.http.post<IsAuthorizedOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.IsAuthorized', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Makes an authorization decision about a service request described in the parameters. The principal in this request comes from an external identity source. The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either <code>Allow</code> or <code>Deny</code>, along with a list of the policies that resulted in the decision.</p> <important> <p>If you delete a Amazon Cognito user pool or user, tokens from that deleted pool or that deleted user continue to be usable until they expire.</p> </important>
		 * Post #X-Amz-Target=VerifiedPermissions.IsAuthorizedWithToken
		 * @return {IsAuthorizedWithTokenOutput} Success
		 */
		IsAuthorizedWithToken(requestBody: IsAuthorizedWithTokenInput): Observable<IsAuthorizedWithTokenOutput> {
			return this.http.post<IsAuthorizedWithTokenOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.IsAuthorizedWithToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of all of the identity sources defined in the specified policy store.
		 * Post #X-Amz-Target=VerifiedPermissions.ListIdentitySources
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListIdentitySourcesOutput} Success
		 */
		ListIdentitySources(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListIdentitySourcesInput): Observable<ListIdentitySourcesOutput> {
			return this.http.post<ListIdentitySourcesOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.ListIdentitySources?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of all policies stored in the specified policy store.
		 * Post #X-Amz-Target=VerifiedPermissions.ListPolicies
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPoliciesOutput} Success
		 */
		ListPolicies(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListPoliciesInput): Observable<ListPoliciesOutput> {
			return this.http.post<ListPoliciesOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.ListPolicies?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of all policy stores in the calling Amazon Web Services account.
		 * Post #X-Amz-Target=VerifiedPermissions.ListPolicyStores
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPolicyStoresOutput} Success
		 */
		ListPolicyStores(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListPolicyStoresInput): Observable<ListPolicyStoresOutput> {
			return this.http.post<ListPolicyStoresOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.ListPolicyStores?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of all policy templates in the specified policy store.
		 * Post #X-Amz-Target=VerifiedPermissions.ListPolicyTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPolicyTemplatesOutput} Success
		 */
		ListPolicyTemplates(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListPolicyTemplatesInput): Observable<ListPolicyTemplatesOutput> {
			return this.http.post<ListPolicyTemplatesOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.ListPolicyTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates the policy schema in the specified policy store. The schema is used to validate any Cedar policies and policy templates submitted to the policy store. Any changes to the schema validate only policies and templates submitted after the schema change. Existing policies and templates are not re-evaluated against the changed schema. If you later update a policy, then it is evaluated against the new schema at that time.
		 * Post #X-Amz-Target=VerifiedPermissions.PutSchema
		 * @return {PutSchemaOutput} Success
		 */
		PutSchema(requestBody: PutSchemaInput): Observable<PutSchemaOutput> {
			return this.http.post<PutSchemaOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.PutSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified identity source to use a new identity provider (IdP) source, or to change the mapping of identities from the IdP to a different principal entity type.
		 * Post #X-Amz-Target=VerifiedPermissions.UpdateIdentitySource
		 * @return {UpdateIdentitySourceOutput} Success
		 */
		UpdateIdentitySource(requestBody: UpdateIdentitySourceInput): Observable<UpdateIdentitySourceOutput> {
			return this.http.post<UpdateIdentitySourceOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.UpdateIdentitySource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies a Cedar static policy in the specified policy store. You can change only certain elements of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyInput.html#amazonverifiedpermissions-UpdatePolicy-request-UpdatePolicyDefinition">UpdatePolicyDefinition</a> parameter. You can directly update only static policies. To change a template-linked policy, you must update the template instead, using <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyTemplate.html">UpdatePolicyTemplate</a>.</p> <note> <p>If policy validation is enabled in the policy store, then updating a static policy causes Verified Permissions to validate the policy against the schema in the policy store. If the updated static policy doesn't pass validation, the operation fails and the update isn't stored.</p> </note>
		 * Post #X-Amz-Target=VerifiedPermissions.UpdatePolicy
		 * @return {UpdatePolicyOutput} Success
		 */
		UpdatePolicy(requestBody: UpdatePolicyInput): Observable<UpdatePolicyOutput> {
			return this.http.post<UpdatePolicyOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.UpdatePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the validation setting for a policy store.
		 * Post #X-Amz-Target=VerifiedPermissions.UpdatePolicyStore
		 * @return {UpdatePolicyStoreOutput} Success
		 */
		UpdatePolicyStore(requestBody: UpdatePolicyStoreInput): Observable<UpdatePolicyStoreOutput> {
			return this.http.post<UpdatePolicyStoreOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.UpdatePolicyStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified policy template. You can update only the description and the some elements of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyTemplate.html#amazonverifiedpermissions-UpdatePolicyTemplate-request-policyBody">policyBody</a>. </p> <important> <p>Changes you make to the policy template content are immediately reflected in authorization decisions that involve all template-linked policies instantiated from this template.</p> </important>
		 * Post #X-Amz-Target=VerifiedPermissions.UpdatePolicyTemplate
		 * @return {UpdatePolicyTemplateOutput} Success
		 */
		UpdatePolicyTemplate(requestBody: UpdatePolicyTemplateInput): Observable<UpdatePolicyTemplateOutput> {
			return this.http.post<UpdatePolicyTemplateOutput>(this.baseUri + '#X-Amz-Target=VerifiedPermissions.UpdatePolicyTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateIdentitySourceX_Amz_Target { 'VerifiedPermissions.CreateIdentitySource' = 0 }

	export enum CreatePolicyX_Amz_Target { 'VerifiedPermissions.CreatePolicy' = 0 }

	export enum CreatePolicyStoreX_Amz_Target { 'VerifiedPermissions.CreatePolicyStore' = 0 }

	export enum CreatePolicyTemplateX_Amz_Target { 'VerifiedPermissions.CreatePolicyTemplate' = 0 }

	export enum DeleteIdentitySourceX_Amz_Target { 'VerifiedPermissions.DeleteIdentitySource' = 0 }

	export enum DeletePolicyX_Amz_Target { 'VerifiedPermissions.DeletePolicy' = 0 }

	export enum DeletePolicyStoreX_Amz_Target { 'VerifiedPermissions.DeletePolicyStore' = 0 }

	export enum DeletePolicyTemplateX_Amz_Target { 'VerifiedPermissions.DeletePolicyTemplate' = 0 }

	export enum GetIdentitySourceX_Amz_Target { 'VerifiedPermissions.GetIdentitySource' = 0 }

	export enum GetPolicyX_Amz_Target { 'VerifiedPermissions.GetPolicy' = 0 }

	export enum GetPolicyStoreX_Amz_Target { 'VerifiedPermissions.GetPolicyStore' = 0 }

	export enum GetPolicyTemplateX_Amz_Target { 'VerifiedPermissions.GetPolicyTemplate' = 0 }

	export enum GetSchemaX_Amz_Target { 'VerifiedPermissions.GetSchema' = 0 }

	export enum IsAuthorizedX_Amz_Target { 'VerifiedPermissions.IsAuthorized' = 0 }

	export enum IsAuthorizedWithTokenX_Amz_Target { 'VerifiedPermissions.IsAuthorizedWithToken' = 0 }

	export enum ListIdentitySourcesX_Amz_Target { 'VerifiedPermissions.ListIdentitySources' = 0 }

	export enum ListPoliciesX_Amz_Target { 'VerifiedPermissions.ListPolicies' = 0 }

	export enum ListPolicyStoresX_Amz_Target { 'VerifiedPermissions.ListPolicyStores' = 0 }

	export enum ListPolicyTemplatesX_Amz_Target { 'VerifiedPermissions.ListPolicyTemplates' = 0 }

	export enum PutSchemaX_Amz_Target { 'VerifiedPermissions.PutSchema' = 0 }

	export enum UpdateIdentitySourceX_Amz_Target { 'VerifiedPermissions.UpdateIdentitySource' = 0 }

	export enum UpdatePolicyX_Amz_Target { 'VerifiedPermissions.UpdatePolicy' = 0 }

	export enum UpdatePolicyStoreX_Amz_Target { 'VerifiedPermissions.UpdatePolicyStore' = 0 }

	export enum UpdatePolicyTemplateX_Amz_Target { 'VerifiedPermissions.UpdatePolicyTemplate' = 0 }

}

