import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchGetCollectionResponse {
		collectionDetails?: Array<CollectionDetail>;
		collectionErrorDetails?: Array<CollectionErrorDetail>;
	}
	export interface BatchGetCollectionResponseFormProperties {
	}
	export function CreateBatchGetCollectionResponseFormGroup() {
		return new FormGroup<BatchGetCollectionResponseFormProperties>({
		});

	}


	/** Details about each OpenSearch Serverless collection, including the collection endpoint and the OpenSearch Dashboards endpoint. */
	export interface CollectionDetail {
		arn?: string;
		collectionEndpoint?: string;
		createdDate?: number | null;
		dashboardEndpoint?: string;
		description?: string;
		id?: string;
		kmsKeyArn?: string;
		lastModifiedDate?: number | null;
		name?: string;
		status?: CollectionStatus;
		type?: CollectionType;
	}

	/** Details about each OpenSearch Serverless collection, including the collection endpoint and the OpenSearch Dashboards endpoint. */
	export interface CollectionDetailFormProperties {
		arn: FormControl<string | null | undefined>,
		collectionEndpoint: FormControl<string | null | undefined>,
		createdDate: FormControl<number | null | undefined>,
		dashboardEndpoint: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
		lastModifiedDate: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<CollectionStatus | null | undefined>,
		type: FormControl<CollectionType | null | undefined>,
	}
	export function CreateCollectionDetailFormGroup() {
		return new FormGroup<CollectionDetailFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			collectionEndpoint: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<number | null | undefined>(undefined),
			dashboardEndpoint: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CollectionStatus | null | undefined>(undefined),
			type: new FormControl<CollectionType | null | undefined>(undefined),
		});

	}

	export enum CollectionStatus { CREATING = 0, DELETING = 1, ACTIVE = 2, FAILED = 3 }

	export enum CollectionType { SEARCH = 0, TIMESERIES = 1, VECTORSEARCH = 2 }


	/** Error information for an OpenSearch Serverless request. */
	export interface CollectionErrorDetail {
		errorCode?: string;
		errorMessage?: string;
		id?: string;
		name?: string;
	}

	/** Error information for an OpenSearch Serverless request. */
	export interface CollectionErrorDetailFormProperties {
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCollectionErrorDetailFormGroup() {
		return new FormGroup<CollectionErrorDetailFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetCollectionRequest {
		ids?: Array<string>;
		names?: Array<string>;
	}
	export interface BatchGetCollectionRequestFormProperties {
	}
	export function CreateBatchGetCollectionRequestFormGroup() {
		return new FormGroup<BatchGetCollectionRequestFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface BatchGetVpcEndpointResponse {
		vpcEndpointDetails?: Array<VpcEndpointDetail>;
		vpcEndpointErrorDetails?: Array<VpcEndpointErrorDetail>;
	}
	export interface BatchGetVpcEndpointResponseFormProperties {
	}
	export function CreateBatchGetVpcEndpointResponseFormGroup() {
		return new FormGroup<BatchGetVpcEndpointResponseFormProperties>({
		});

	}


	/** Details about an OpenSearch Serverless-managed interface endpoint. */
	export interface VpcEndpointDetail {
		createdDate?: number | null;
		id?: string;
		name?: string;
		securityGroupIds?: Array<string>;
		status?: VpcEndpointStatus;
		subnetIds?: Array<string>;
		vpcId?: string;
	}

	/** Details about an OpenSearch Serverless-managed interface endpoint. */
	export interface VpcEndpointDetailFormProperties {
		createdDate: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<VpcEndpointStatus | null | undefined>,
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcEndpointDetailFormGroup() {
		return new FormGroup<VpcEndpointDetailFormProperties>({
			createdDate: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<VpcEndpointStatus | null | undefined>(undefined),
			vpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VpcEndpointStatus { PENDING = 0, DELETING = 1, ACTIVE = 2, FAILED = 3 }


	/** Error information for a failed <code>BatchGetVpcEndpoint</code> request. */
	export interface VpcEndpointErrorDetail {
		errorCode?: string;
		errorMessage?: string;
		id?: string;
	}

	/** Error information for a failed <code>BatchGetVpcEndpoint</code> request. */
	export interface VpcEndpointErrorDetailFormProperties {
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateVpcEndpointErrorDetailFormGroup() {
		return new FormGroup<VpcEndpointErrorDetailFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetVpcEndpointRequest {

		/** Required */
		ids: Array<string>;
	}
	export interface BatchGetVpcEndpointRequestFormProperties {
	}
	export function CreateBatchGetVpcEndpointRequestFormGroup() {
		return new FormGroup<BatchGetVpcEndpointRequestFormProperties>({
		});

	}

	export interface CreateAccessPolicyResponse {
		accessPolicyDetail?: AccessPolicyDetail;
	}
	export interface CreateAccessPolicyResponseFormProperties {
	}
	export function CreateCreateAccessPolicyResponseFormGroup() {
		return new FormGroup<CreateAccessPolicyResponseFormProperties>({
		});

	}


	/** Details about an OpenSearch Serverless access policy. */
	export interface AccessPolicyDetail {
		createdDate?: number | null;
		description?: string;
		lastModifiedDate?: number | null;
		name?: string;
		policy?: Document;
		policyVersion?: string;
		type?: AccessPolicyType;
	}

	/** Details about an OpenSearch Serverless access policy. */
	export interface AccessPolicyDetailFormProperties {
		createdDate: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastModifiedDate: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		policyVersion: FormControl<string | null | undefined>,
		type: FormControl<AccessPolicyType | null | undefined>,
	}
	export function CreateAccessPolicyDetailFormGroup() {
		return new FormGroup<AccessPolicyDetailFormProperties>({
			createdDate: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			policyVersion: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AccessPolicyType | null | undefined>(undefined),
		});

	}

	export interface Document {
	}
	export interface DocumentFormProperties {
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
		});

	}

	export enum AccessPolicyType { data = 0 }

	export interface CreateAccessPolicyRequest {
		clientToken?: string;
		description?: string;

		/** Required */
		name: string;

		/** Required */
		policy: string;

		/** Required */
		type: AccessPolicyType;
	}
	export interface CreateAccessPolicyRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		policy: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AccessPolicyType | null | undefined>,
	}
	export function CreateCreateAccessPolicyRequestFormGroup() {
		return new FormGroup<CreateAccessPolicyRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AccessPolicyType | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateCollectionResponse {
		createCollectionDetail?: CreateCollectionDetail;
	}
	export interface CreateCollectionResponseFormProperties {
	}
	export function CreateCreateCollectionResponseFormGroup() {
		return new FormGroup<CreateCollectionResponseFormProperties>({
		});

	}


	/** Details about the created OpenSearch Serverless collection. */
	export interface CreateCollectionDetail {
		arn?: string;
		createdDate?: number | null;
		description?: string;
		id?: string;
		kmsKeyArn?: string;
		lastModifiedDate?: number | null;
		name?: string;
		status?: CollectionStatus;
		type?: CollectionType;
	}

	/** Details about the created OpenSearch Serverless collection. */
	export interface CreateCollectionDetailFormProperties {
		arn: FormControl<string | null | undefined>,
		createdDate: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
		lastModifiedDate: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<CollectionStatus | null | undefined>,
		type: FormControl<CollectionType | null | undefined>,
	}
	export function CreateCreateCollectionDetailFormGroup() {
		return new FormGroup<CreateCollectionDetailFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CollectionStatus | null | undefined>(undefined),
			type: new FormControl<CollectionType | null | undefined>(undefined),
		});

	}

	export interface CreateCollectionRequest {
		clientToken?: string;
		description?: string;

		/** Required */
		name: string;
		tags?: Array<Tag>;
		type?: CollectionType;
	}
	export interface CreateCollectionRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		type: FormControl<CollectionType | null | undefined>,
	}
	export function CreateCreateCollectionRequestFormGroup() {
		return new FormGroup<CreateCollectionRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CollectionType | null | undefined>(undefined),
		});

	}


	/** A map of key-value pairs associated to an OpenSearch Serverless resource. */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** A map of key-value pairs associated to an OpenSearch Serverless resource. */
	export interface TagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OcuLimitExceededException {
	}
	export interface OcuLimitExceededExceptionFormProperties {
	}
	export function CreateOcuLimitExceededExceptionFormGroup() {
		return new FormGroup<OcuLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateSecurityConfigResponse {
		securityConfigDetail?: SecurityConfigDetail;
	}
	export interface CreateSecurityConfigResponseFormProperties {
	}
	export function CreateCreateSecurityConfigResponseFormGroup() {
		return new FormGroup<CreateSecurityConfigResponseFormProperties>({
		});

	}


	/** Details about a security configuration for OpenSearch Serverless.  */
	export interface SecurityConfigDetail {
		configVersion?: string;
		createdDate?: number | null;
		description?: string;
		id?: string;
		lastModifiedDate?: number | null;
		samlOptions?: SamlConfigOptions;
		type?: SecurityConfigType;
	}

	/** Details about a security configuration for OpenSearch Serverless.  */
	export interface SecurityConfigDetailFormProperties {
		configVersion: FormControl<string | null | undefined>,
		createdDate: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastModifiedDate: FormControl<number | null | undefined>,
		type: FormControl<SecurityConfigType | null | undefined>,
	}
	export function CreateSecurityConfigDetailFormGroup() {
		return new FormGroup<SecurityConfigDetailFormProperties>({
			configVersion: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<SecurityConfigType | null | undefined>(undefined),
		});

	}


	/** Describes SAML options for an OpenSearch Serverless security configuration in the form of a key-value map. */
	export interface SamlConfigOptions {
		groupAttribute?: string;

		/** Required */
		metadata: string;
		sessionTimeout?: number | null;
		userAttribute?: string;
	}

	/** Describes SAML options for an OpenSearch Serverless security configuration in the form of a key-value map. */
	export interface SamlConfigOptionsFormProperties {
		groupAttribute: FormControl<string | null | undefined>,

		/** Required */
		metadata: FormControl<string | null | undefined>,
		sessionTimeout: FormControl<number | null | undefined>,
		userAttribute: FormControl<string | null | undefined>,
	}
	export function CreateSamlConfigOptionsFormGroup() {
		return new FormGroup<SamlConfigOptionsFormProperties>({
			groupAttribute: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionTimeout: new FormControl<number | null | undefined>(undefined),
			userAttribute: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SecurityConfigType { saml = 0 }

	export interface CreateSecurityConfigRequest {
		clientToken?: string;
		description?: string;

		/** Required */
		name: string;
		samlOptions?: SamlConfigOptions;

		/** Required */
		type: SecurityConfigType;
	}
	export interface CreateSecurityConfigRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SecurityConfigType | null | undefined>,
	}
	export function CreateCreateSecurityConfigRequestFormGroup() {
		return new FormGroup<CreateSecurityConfigRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SecurityConfigType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSecurityPolicyResponse {
		securityPolicyDetail?: SecurityPolicyDetail;
	}
	export interface CreateSecurityPolicyResponseFormProperties {
	}
	export function CreateCreateSecurityPolicyResponseFormGroup() {
		return new FormGroup<CreateSecurityPolicyResponseFormProperties>({
		});

	}


	/** Details about an OpenSearch Serverless security policy. */
	export interface SecurityPolicyDetail {
		createdDate?: number | null;
		description?: string;
		lastModifiedDate?: number | null;
		name?: string;
		policy?: Document;
		policyVersion?: string;
		type?: SecurityPolicyType;
	}

	/** Details about an OpenSearch Serverless security policy. */
	export interface SecurityPolicyDetailFormProperties {
		createdDate: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastModifiedDate: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		policyVersion: FormControl<string | null | undefined>,
		type: FormControl<SecurityPolicyType | null | undefined>,
	}
	export function CreateSecurityPolicyDetailFormGroup() {
		return new FormGroup<SecurityPolicyDetailFormProperties>({
			createdDate: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			policyVersion: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SecurityPolicyType | null | undefined>(undefined),
		});

	}

	export enum SecurityPolicyType { encryption = 0, network = 1 }

	export interface CreateSecurityPolicyRequest {
		clientToken?: string;
		description?: string;

		/** Required */
		name: string;

		/** Required */
		policy: string;

		/** Required */
		type: SecurityPolicyType;
	}
	export interface CreateSecurityPolicyRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		policy: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SecurityPolicyType | null | undefined>,
	}
	export function CreateCreateSecurityPolicyRequestFormGroup() {
		return new FormGroup<CreateSecurityPolicyRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SecurityPolicyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVpcEndpointResponse {
		createVpcEndpointDetail?: CreateVpcEndpointDetail;
	}
	export interface CreateVpcEndpointResponseFormProperties {
	}
	export function CreateCreateVpcEndpointResponseFormGroup() {
		return new FormGroup<CreateVpcEndpointResponseFormProperties>({
		});

	}


	/** Creation details for an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>. */
	export interface CreateVpcEndpointDetail {
		id?: string;
		name?: string;
		status?: VpcEndpointStatus;
	}

	/** Creation details for an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>. */
	export interface CreateVpcEndpointDetailFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<VpcEndpointStatus | null | undefined>,
	}
	export function CreateCreateVpcEndpointDetailFormGroup() {
		return new FormGroup<CreateVpcEndpointDetailFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<VpcEndpointStatus | null | undefined>(undefined),
		});

	}

	export interface CreateVpcEndpointRequest {
		clientToken?: string;

		/** Required */
		name: string;
		securityGroupIds?: Array<string>;

		/** Required */
		subnetIds: Array<string>;

		/** Required */
		vpcId: string;
	}
	export interface CreateVpcEndpointRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateCreateVpcEndpointRequestFormGroup() {
		return new FormGroup<CreateVpcEndpointRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAccessPolicyResponse {
	}
	export interface DeleteAccessPolicyResponseFormProperties {
	}
	export function CreateDeleteAccessPolicyResponseFormGroup() {
		return new FormGroup<DeleteAccessPolicyResponseFormProperties>({
		});

	}

	export interface DeleteAccessPolicyRequest {
		clientToken?: string;

		/** Required */
		name: string;

		/** Required */
		type: AccessPolicyType;
	}
	export interface DeleteAccessPolicyRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AccessPolicyType | null | undefined>,
	}
	export function CreateDeleteAccessPolicyRequestFormGroup() {
		return new FormGroup<DeleteAccessPolicyRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AccessPolicyType | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteCollectionResponse {
		deleteCollectionDetail?: DeleteCollectionDetail;
	}
	export interface DeleteCollectionResponseFormProperties {
	}
	export function CreateDeleteCollectionResponseFormGroup() {
		return new FormGroup<DeleteCollectionResponseFormProperties>({
		});

	}


	/** Details about a deleted OpenSearch Serverless collection. */
	export interface DeleteCollectionDetail {
		id?: string;
		name?: string;
		status?: CollectionStatus;
	}

	/** Details about a deleted OpenSearch Serverless collection. */
	export interface DeleteCollectionDetailFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<CollectionStatus | null | undefined>,
	}
	export function CreateDeleteCollectionDetailFormGroup() {
		return new FormGroup<DeleteCollectionDetailFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CollectionStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteCollectionRequest {
		clientToken?: string;

		/** Required */
		id: string;
	}
	export interface DeleteCollectionRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCollectionRequestFormGroup() {
		return new FormGroup<DeleteCollectionRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSecurityConfigResponse {
	}
	export interface DeleteSecurityConfigResponseFormProperties {
	}
	export function CreateDeleteSecurityConfigResponseFormGroup() {
		return new FormGroup<DeleteSecurityConfigResponseFormProperties>({
		});

	}

	export interface DeleteSecurityConfigRequest {
		clientToken?: string;

		/** Required */
		id: string;
	}
	export interface DeleteSecurityConfigRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSecurityConfigRequestFormGroup() {
		return new FormGroup<DeleteSecurityConfigRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSecurityPolicyResponse {
	}
	export interface DeleteSecurityPolicyResponseFormProperties {
	}
	export function CreateDeleteSecurityPolicyResponseFormGroup() {
		return new FormGroup<DeleteSecurityPolicyResponseFormProperties>({
		});

	}

	export interface DeleteSecurityPolicyRequest {
		clientToken?: string;

		/** Required */
		name: string;

		/** Required */
		type: SecurityPolicyType;
	}
	export interface DeleteSecurityPolicyRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SecurityPolicyType | null | undefined>,
	}
	export function CreateDeleteSecurityPolicyRequestFormGroup() {
		return new FormGroup<DeleteSecurityPolicyRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SecurityPolicyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteVpcEndpointResponse {
		deleteVpcEndpointDetail?: DeleteVpcEndpointDetail;
	}
	export interface DeleteVpcEndpointResponseFormProperties {
	}
	export function CreateDeleteVpcEndpointResponseFormGroup() {
		return new FormGroup<DeleteVpcEndpointResponseFormProperties>({
		});

	}


	/** Deletion details for an OpenSearch Serverless-managed interface endpoint. */
	export interface DeleteVpcEndpointDetail {
		id?: string;
		name?: string;
		status?: VpcEndpointStatus;
	}

	/** Deletion details for an OpenSearch Serverless-managed interface endpoint. */
	export interface DeleteVpcEndpointDetailFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<VpcEndpointStatus | null | undefined>,
	}
	export function CreateDeleteVpcEndpointDetailFormGroup() {
		return new FormGroup<DeleteVpcEndpointDetailFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<VpcEndpointStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteVpcEndpointRequest {
		clientToken?: string;

		/** Required */
		id: string;
	}
	export interface DeleteVpcEndpointRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVpcEndpointRequestFormGroup() {
		return new FormGroup<DeleteVpcEndpointRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAccessPolicyResponse {
		accessPolicyDetail?: AccessPolicyDetail;
	}
	export interface GetAccessPolicyResponseFormProperties {
	}
	export function CreateGetAccessPolicyResponseFormGroup() {
		return new FormGroup<GetAccessPolicyResponseFormProperties>({
		});

	}

	export interface GetAccessPolicyRequest {

		/** Required */
		name: string;

		/** Required */
		type: AccessPolicyType;
	}
	export interface GetAccessPolicyRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AccessPolicyType | null | undefined>,
	}
	export function CreateGetAccessPolicyRequestFormGroup() {
		return new FormGroup<GetAccessPolicyRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AccessPolicyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAccountSettingsResponse {
		accountSettingsDetail?: AccountSettingsDetail;
	}
	export interface GetAccountSettingsResponseFormProperties {
	}
	export function CreateGetAccountSettingsResponseFormGroup() {
		return new FormGroup<GetAccountSettingsResponseFormProperties>({
		});

	}


	/** OpenSearch Serverless-related information for the current account. */
	export interface AccountSettingsDetail {

		/** The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units (OCUs). These limits are used to scale your collections based on the current workload. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>. */
		capacityLimits?: CapacityLimits;
	}

	/** OpenSearch Serverless-related information for the current account. */
	export interface AccountSettingsDetailFormProperties {
	}
	export function CreateAccountSettingsDetailFormGroup() {
		return new FormGroup<AccountSettingsDetailFormProperties>({
		});

	}


	/** The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units (OCUs). These limits are used to scale your collections based on the current workload. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>. */
	export interface CapacityLimits {
		maxIndexingCapacityInOCU?: number | null;
		maxSearchCapacityInOCU?: number | null;
	}

	/** The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units (OCUs). These limits are used to scale your collections based on the current workload. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>. */
	export interface CapacityLimitsFormProperties {
		maxIndexingCapacityInOCU: FormControl<number | null | undefined>,
		maxSearchCapacityInOCU: FormControl<number | null | undefined>,
	}
	export function CreateCapacityLimitsFormGroup() {
		return new FormGroup<CapacityLimitsFormProperties>({
			maxIndexingCapacityInOCU: new FormControl<number | null | undefined>(undefined),
			maxSearchCapacityInOCU: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAccountSettingsRequest {
	}
	export interface GetAccountSettingsRequestFormProperties {
	}
	export function CreateGetAccountSettingsRequestFormGroup() {
		return new FormGroup<GetAccountSettingsRequestFormProperties>({
		});

	}

	export interface GetPoliciesStatsResponse {
		AccessPolicyStats?: AccessPolicyStats;
		SecurityConfigStats?: SecurityConfigStats;
		SecurityPolicyStats?: SecurityPolicyStats;
		TotalPolicyCount?: number | null;
	}
	export interface GetPoliciesStatsResponseFormProperties {
		TotalPolicyCount: FormControl<number | null | undefined>,
	}
	export function CreateGetPoliciesStatsResponseFormGroup() {
		return new FormGroup<GetPoliciesStatsResponseFormProperties>({
			TotalPolicyCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Statistics for an OpenSearch Serverless access policy. */
	export interface AccessPolicyStats {
		DataPolicyCount?: number | null;
	}

	/** Statistics for an OpenSearch Serverless access policy. */
	export interface AccessPolicyStatsFormProperties {
		DataPolicyCount: FormControl<number | null | undefined>,
	}
	export function CreateAccessPolicyStatsFormGroup() {
		return new FormGroup<AccessPolicyStatsFormProperties>({
			DataPolicyCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Statistics for an OpenSearch Serverless security configuration. */
	export interface SecurityConfigStats {
		SamlConfigCount?: number | null;
	}

	/** Statistics for an OpenSearch Serverless security configuration. */
	export interface SecurityConfigStatsFormProperties {
		SamlConfigCount: FormControl<number | null | undefined>,
	}
	export function CreateSecurityConfigStatsFormGroup() {
		return new FormGroup<SecurityConfigStatsFormProperties>({
			SamlConfigCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Statistics for an OpenSearch Serverless security policy. */
	export interface SecurityPolicyStats {
		EncryptionPolicyCount?: number | null;
		NetworkPolicyCount?: number | null;
	}

	/** Statistics for an OpenSearch Serverless security policy. */
	export interface SecurityPolicyStatsFormProperties {
		EncryptionPolicyCount: FormControl<number | null | undefined>,
		NetworkPolicyCount: FormControl<number | null | undefined>,
	}
	export function CreateSecurityPolicyStatsFormGroup() {
		return new FormGroup<SecurityPolicyStatsFormProperties>({
			EncryptionPolicyCount: new FormControl<number | null | undefined>(undefined),
			NetworkPolicyCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetPoliciesStatsRequest {
	}
	export interface GetPoliciesStatsRequestFormProperties {
	}
	export function CreateGetPoliciesStatsRequestFormGroup() {
		return new FormGroup<GetPoliciesStatsRequestFormProperties>({
		});

	}

	export interface GetSecurityConfigResponse {
		securityConfigDetail?: SecurityConfigDetail;
	}
	export interface GetSecurityConfigResponseFormProperties {
	}
	export function CreateGetSecurityConfigResponseFormGroup() {
		return new FormGroup<GetSecurityConfigResponseFormProperties>({
		});

	}

	export interface GetSecurityConfigRequest {

		/** Required */
		id: string;
	}
	export interface GetSecurityConfigRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGetSecurityConfigRequestFormGroup() {
		return new FormGroup<GetSecurityConfigRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSecurityPolicyResponse {
		securityPolicyDetail?: SecurityPolicyDetail;
	}
	export interface GetSecurityPolicyResponseFormProperties {
	}
	export function CreateGetSecurityPolicyResponseFormGroup() {
		return new FormGroup<GetSecurityPolicyResponseFormProperties>({
		});

	}

	export interface GetSecurityPolicyRequest {

		/** Required */
		name: string;

		/** Required */
		type: SecurityPolicyType;
	}
	export interface GetSecurityPolicyRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SecurityPolicyType | null | undefined>,
	}
	export function CreateGetSecurityPolicyRequestFormGroup() {
		return new FormGroup<GetSecurityPolicyRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SecurityPolicyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAccessPoliciesResponse {
		accessPolicySummaries?: Array<AccessPolicySummary>;
		nextToken?: string;
	}
	export interface ListAccessPoliciesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessPoliciesResponseFormGroup() {
		return new FormGroup<ListAccessPoliciesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of the data access policy. */
	export interface AccessPolicySummary {
		createdDate?: number | null;
		description?: string;
		lastModifiedDate?: number | null;
		name?: string;
		policyVersion?: string;
		type?: AccessPolicyType;
	}

	/** A summary of the data access policy. */
	export interface AccessPolicySummaryFormProperties {
		createdDate: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastModifiedDate: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		policyVersion: FormControl<string | null | undefined>,
		type: FormControl<AccessPolicyType | null | undefined>,
	}
	export function CreateAccessPolicySummaryFormGroup() {
		return new FormGroup<AccessPolicySummaryFormProperties>({
			createdDate: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			policyVersion: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AccessPolicyType | null | undefined>(undefined),
		});

	}

	export interface ListAccessPoliciesRequest {
		maxResults?: number | null;
		nextToken?: string;
		resource?: Array<string>;

		/** Required */
		type: AccessPolicyType;
	}
	export interface ListAccessPoliciesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AccessPolicyType | null | undefined>,
	}
	export function CreateListAccessPoliciesRequestFormGroup() {
		return new FormGroup<ListAccessPoliciesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AccessPolicyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListCollectionsResponse {
		collectionSummaries?: Array<CollectionSummary>;
		nextToken?: string;
	}
	export interface ListCollectionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCollectionsResponseFormGroup() {
		return new FormGroup<ListCollectionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about each OpenSearch Serverless collection. */
	export interface CollectionSummary {
		arn?: string;
		id?: string;
		name?: string;
		status?: CollectionStatus;
	}

	/** Details about each OpenSearch Serverless collection. */
	export interface CollectionSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<CollectionStatus | null | undefined>,
	}
	export function CreateCollectionSummaryFormGroup() {
		return new FormGroup<CollectionSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CollectionStatus | null | undefined>(undefined),
		});

	}

	export interface ListCollectionsRequest {
		collectionFilters?: CollectionFilters;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListCollectionsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCollectionsRequestFormGroup() {
		return new FormGroup<ListCollectionsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of filter keys that you can use for LIST, UPDATE, and DELETE requests to OpenSearch Serverless collections. */
	export interface CollectionFilters {
		name?: string;
		status?: CollectionStatus;
	}

	/** List of filter keys that you can use for LIST, UPDATE, and DELETE requests to OpenSearch Serverless collections. */
	export interface CollectionFiltersFormProperties {
		name: FormControl<string | null | undefined>,
		status: FormControl<CollectionStatus | null | undefined>,
	}
	export function CreateCollectionFiltersFormGroup() {
		return new FormGroup<CollectionFiltersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CollectionStatus | null | undefined>(undefined),
		});

	}

	export interface ListSecurityConfigsResponse {
		nextToken?: string;
		securityConfigSummaries?: Array<SecurityConfigSummary>;
	}
	export interface ListSecurityConfigsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSecurityConfigsResponseFormGroup() {
		return new FormGroup<ListSecurityConfigsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of a security configuration for OpenSearch Serverless. */
	export interface SecurityConfigSummary {
		configVersion?: string;
		createdDate?: number | null;
		description?: string;
		id?: string;
		lastModifiedDate?: number | null;
		type?: SecurityConfigType;
	}

	/** A summary of a security configuration for OpenSearch Serverless. */
	export interface SecurityConfigSummaryFormProperties {
		configVersion: FormControl<string | null | undefined>,
		createdDate: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastModifiedDate: FormControl<number | null | undefined>,
		type: FormControl<SecurityConfigType | null | undefined>,
	}
	export function CreateSecurityConfigSummaryFormGroup() {
		return new FormGroup<SecurityConfigSummaryFormProperties>({
			configVersion: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<SecurityConfigType | null | undefined>(undefined),
		});

	}

	export interface ListSecurityConfigsRequest {
		maxResults?: number | null;
		nextToken?: string;

		/** Required */
		type: SecurityConfigType;
	}
	export interface ListSecurityConfigsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SecurityConfigType | null | undefined>,
	}
	export function CreateListSecurityConfigsRequestFormGroup() {
		return new FormGroup<ListSecurityConfigsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SecurityConfigType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSecurityPoliciesResponse {
		nextToken?: string;
		securityPolicySummaries?: Array<SecurityPolicySummary>;
	}
	export interface ListSecurityPoliciesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSecurityPoliciesResponseFormGroup() {
		return new FormGroup<ListSecurityPoliciesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of a security policy for OpenSearch Serverless. */
	export interface SecurityPolicySummary {
		createdDate?: number | null;
		description?: string;
		lastModifiedDate?: number | null;
		name?: string;
		policyVersion?: string;
		type?: SecurityPolicyType;
	}

	/** A summary of a security policy for OpenSearch Serverless. */
	export interface SecurityPolicySummaryFormProperties {
		createdDate: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastModifiedDate: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		policyVersion: FormControl<string | null | undefined>,
		type: FormControl<SecurityPolicyType | null | undefined>,
	}
	export function CreateSecurityPolicySummaryFormGroup() {
		return new FormGroup<SecurityPolicySummaryFormProperties>({
			createdDate: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			policyVersion: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SecurityPolicyType | null | undefined>(undefined),
		});

	}

	export interface ListSecurityPoliciesRequest {
		maxResults?: number | null;
		nextToken?: string;
		resource?: Array<string>;

		/** Required */
		type: SecurityPolicyType;
	}
	export interface ListSecurityPoliciesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SecurityPolicyType | null | undefined>,
	}
	export function CreateListSecurityPoliciesRequestFormGroup() {
		return new FormGroup<ListSecurityPoliciesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SecurityPolicyType | null | undefined>(undefined, [Validators.required]),
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

	export interface ListTagsForResourceRequest {

		/** Required */
		resourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListVpcEndpointsResponse {
		nextToken?: string;
		vpcEndpointSummaries?: Array<VpcEndpointSummary>;
	}
	export interface ListVpcEndpointsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVpcEndpointsResponseFormGroup() {
		return new FormGroup<ListVpcEndpointsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The VPC endpoint object. */
	export interface VpcEndpointSummary {
		id?: string;
		name?: string;
		status?: VpcEndpointStatus;
	}

	/** The VPC endpoint object. */
	export interface VpcEndpointSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<VpcEndpointStatus | null | undefined>,
	}
	export function CreateVpcEndpointSummaryFormGroup() {
		return new FormGroup<VpcEndpointSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<VpcEndpointStatus | null | undefined>(undefined),
		});

	}

	export interface ListVpcEndpointsRequest {
		maxResults?: number | null;
		nextToken?: string;
		vpcEndpointFilters?: VpcEndpointFilters;
	}
	export interface ListVpcEndpointsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVpcEndpointsRequestFormGroup() {
		return new FormGroup<ListVpcEndpointsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filter the results of a <code>ListVpcEndpoints</code> request. */
	export interface VpcEndpointFilters {
		status?: VpcEndpointStatus;
	}

	/** Filter the results of a <code>ListVpcEndpoints</code> request. */
	export interface VpcEndpointFiltersFormProperties {
		status: FormControl<VpcEndpointStatus | null | undefined>,
	}
	export function CreateVpcEndpointFiltersFormGroup() {
		return new FormGroup<VpcEndpointFiltersFormProperties>({
			status: new FormControl<VpcEndpointStatus | null | undefined>(undefined),
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
		resourceArn: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAccessPolicyResponse {
		accessPolicyDetail?: AccessPolicyDetail;
	}
	export interface UpdateAccessPolicyResponseFormProperties {
	}
	export function CreateUpdateAccessPolicyResponseFormGroup() {
		return new FormGroup<UpdateAccessPolicyResponseFormProperties>({
		});

	}

	export interface UpdateAccessPolicyRequest {
		clientToken?: string;
		description?: string;

		/** Required */
		name: string;
		policy?: string;

		/** Required */
		policyVersion: string;

		/** Required */
		type: AccessPolicyType;
	}
	export interface UpdateAccessPolicyRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		policy: FormControl<string | null | undefined>,

		/** Required */
		policyVersion: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AccessPolicyType | null | undefined>,
	}
	export function CreateUpdateAccessPolicyRequestFormGroup() {
		return new FormGroup<UpdateAccessPolicyRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policy: new FormControl<string | null | undefined>(undefined),
			policyVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AccessPolicyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAccountSettingsResponse {
		accountSettingsDetail?: AccountSettingsDetail;
	}
	export interface UpdateAccountSettingsResponseFormProperties {
	}
	export function CreateUpdateAccountSettingsResponseFormGroup() {
		return new FormGroup<UpdateAccountSettingsResponseFormProperties>({
		});

	}

	export interface UpdateAccountSettingsRequest {

		/** The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units (OCUs). These limits are used to scale your collections based on the current workload. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>. */
		capacityLimits?: CapacityLimits;
	}
	export interface UpdateAccountSettingsRequestFormProperties {
	}
	export function CreateUpdateAccountSettingsRequestFormGroup() {
		return new FormGroup<UpdateAccountSettingsRequestFormProperties>({
		});

	}

	export interface UpdateCollectionResponse {
		updateCollectionDetail?: UpdateCollectionDetail;
	}
	export interface UpdateCollectionResponseFormProperties {
	}
	export function CreateUpdateCollectionResponseFormGroup() {
		return new FormGroup<UpdateCollectionResponseFormProperties>({
		});

	}


	/** Details about an updated OpenSearch Serverless collection. */
	export interface UpdateCollectionDetail {
		arn?: string;
		createdDate?: number | null;
		description?: string;
		id?: string;
		lastModifiedDate?: number | null;
		name?: string;
		status?: CollectionStatus;
		type?: CollectionType;
	}

	/** Details about an updated OpenSearch Serverless collection. */
	export interface UpdateCollectionDetailFormProperties {
		arn: FormControl<string | null | undefined>,
		createdDate: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastModifiedDate: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<CollectionStatus | null | undefined>,
		type: FormControl<CollectionType | null | undefined>,
	}
	export function CreateUpdateCollectionDetailFormGroup() {
		return new FormGroup<UpdateCollectionDetailFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CollectionStatus | null | undefined>(undefined),
			type: new FormControl<CollectionType | null | undefined>(undefined),
		});

	}

	export interface UpdateCollectionRequest {
		clientToken?: string;
		description?: string;

		/** Required */
		id: string;
	}
	export interface UpdateCollectionRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCollectionRequestFormGroup() {
		return new FormGroup<UpdateCollectionRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSecurityConfigResponse {
		securityConfigDetail?: SecurityConfigDetail;
	}
	export interface UpdateSecurityConfigResponseFormProperties {
	}
	export function CreateUpdateSecurityConfigResponseFormGroup() {
		return new FormGroup<UpdateSecurityConfigResponseFormProperties>({
		});

	}

	export interface UpdateSecurityConfigRequest {
		clientToken?: string;

		/** Required */
		configVersion: string;
		description?: string;

		/** Required */
		id: string;
		samlOptions?: SamlConfigOptions;
	}
	export interface UpdateSecurityConfigRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		configVersion: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSecurityConfigRequestFormGroup() {
		return new FormGroup<UpdateSecurityConfigRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			configVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSecurityPolicyResponse {
		securityPolicyDetail?: SecurityPolicyDetail;
	}
	export interface UpdateSecurityPolicyResponseFormProperties {
	}
	export function CreateUpdateSecurityPolicyResponseFormGroup() {
		return new FormGroup<UpdateSecurityPolicyResponseFormProperties>({
		});

	}

	export interface UpdateSecurityPolicyRequest {
		clientToken?: string;
		description?: string;

		/** Required */
		name: string;
		policy?: string;

		/** Required */
		policyVersion: string;

		/** Required */
		type: SecurityPolicyType;
	}
	export interface UpdateSecurityPolicyRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		policy: FormControl<string | null | undefined>,

		/** Required */
		policyVersion: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SecurityPolicyType | null | undefined>,
	}
	export function CreateUpdateSecurityPolicyRequestFormGroup() {
		return new FormGroup<UpdateSecurityPolicyRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policy: new FormControl<string | null | undefined>(undefined),
			policyVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SecurityPolicyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateVpcEndpointResponse {
		UpdateVpcEndpointDetail?: UpdateVpcEndpointDetail;
	}
	export interface UpdateVpcEndpointResponseFormProperties {
	}
	export function CreateUpdateVpcEndpointResponseFormGroup() {
		return new FormGroup<UpdateVpcEndpointResponseFormProperties>({
		});

	}


	/** Update details for an OpenSearch Serverless-managed interface endpoint. */
	export interface UpdateVpcEndpointDetail {
		id?: string;
		lastModifiedDate?: number | null;
		name?: string;
		securityGroupIds?: Array<string>;
		status?: VpcEndpointStatus;
		subnetIds?: Array<string>;
	}

	/** Update details for an OpenSearch Serverless-managed interface endpoint. */
	export interface UpdateVpcEndpointDetailFormProperties {
		id: FormControl<string | null | undefined>,
		lastModifiedDate: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<VpcEndpointStatus | null | undefined>,
	}
	export function CreateUpdateVpcEndpointDetailFormGroup() {
		return new FormGroup<UpdateVpcEndpointDetailFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<VpcEndpointStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateVpcEndpointRequest {
		addSecurityGroupIds?: Array<string>;
		addSubnetIds?: Array<string>;
		clientToken?: string;

		/** Required */
		id: string;
		removeSecurityGroupIds?: Array<string>;
		removeSubnetIds?: Array<string>;
	}
	export interface UpdateVpcEndpointRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVpcEndpointRequestFormGroup() {
		return new FormGroup<UpdateVpcEndpointRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns attributes for one or more collections, including the collection endpoint and the OpenSearch Dashboards endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.BatchGetCollection
		 * @return {BatchGetCollectionResponse} Success
		 */
		BatchGetCollection(requestBody: BatchGetCollectionRequest): Observable<BatchGetCollectionResponse> {
			return this.http.post<BatchGetCollectionResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.BatchGetCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns attributes for one or more VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.BatchGetVpcEndpoint
		 * @return {BatchGetVpcEndpointResponse} Success
		 */
		BatchGetVpcEndpoint(requestBody: BatchGetVpcEndpointRequest): Observable<BatchGetVpcEndpointResponse> {
			return this.http.post<BatchGetVpcEndpointResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.BatchGetVpcEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.CreateAccessPolicy
		 * @return {CreateAccessPolicyResponse} Success
		 */
		CreateAccessPolicy(requestBody: CreateAccessPolicyRequest): Observable<CreateAccessPolicyResponse> {
			return this.http.post<CreateAccessPolicyResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.CreateAccessPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.CreateCollection
		 * @return {CreateCollectionResponse} Success
		 */
		CreateCollection(requestBody: CreateCollectionRequest): Observable<CreateCollectionResponse> {
			return this.http.post<CreateCollectionResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.CreateCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specifies a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.CreateSecurityConfig
		 * @return {CreateSecurityConfigResponse} Success
		 */
		CreateSecurityConfig(requestBody: CreateSecurityConfigRequest): Observable<CreateSecurityConfigResponse> {
			return this.http.post<CreateSecurityConfigResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.CreateSecurityConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.CreateSecurityPolicy
		 * @return {CreateSecurityPolicyResponse} Success
		 */
		CreateSecurityPolicy(requestBody: CreateSecurityPolicyRequest): Observable<CreateSecurityPolicyResponse> {
			return this.http.post<CreateSecurityPolicyResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.CreateSecurityPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.CreateVpcEndpoint
		 * @return {CreateVpcEndpointResponse} Success
		 */
		CreateVpcEndpoint(requestBody: CreateVpcEndpointRequest): Observable<CreateVpcEndpointResponse> {
			return this.http.post<CreateVpcEndpointResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.CreateVpcEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.DeleteAccessPolicy
		 * @return {DeleteAccessPolicyResponse} Success
		 */
		DeleteAccessPolicy(requestBody: DeleteAccessPolicyRequest): Observable<DeleteAccessPolicyResponse> {
			return this.http.post<DeleteAccessPolicyResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.DeleteAccessPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.DeleteCollection
		 * @return {DeleteCollectionResponse} Success
		 */
		DeleteCollection(requestBody: DeleteCollectionRequest): Observable<DeleteCollectionResponse> {
			return this.http.post<DeleteCollectionResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.DeleteCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.DeleteSecurityConfig
		 * @return {DeleteSecurityConfigResponse} Success
		 */
		DeleteSecurityConfig(requestBody: DeleteSecurityConfigRequest): Observable<DeleteSecurityConfigResponse> {
			return this.http.post<DeleteSecurityConfigResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.DeleteSecurityConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an OpenSearch Serverless security policy.
		 * Post #X-Amz-Target=OpenSearchServerless.DeleteSecurityPolicy
		 * @return {DeleteSecurityPolicyResponse} Success
		 */
		DeleteSecurityPolicy(requestBody: DeleteSecurityPolicyRequest): Observable<DeleteSecurityPolicyResponse> {
			return this.http.post<DeleteSecurityPolicyResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.DeleteSecurityPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.DeleteVpcEndpoint
		 * @return {DeleteVpcEndpointResponse} Success
		 */
		DeleteVpcEndpoint(requestBody: DeleteVpcEndpointRequest): Observable<DeleteVpcEndpointResponse> {
			return this.http.post<DeleteVpcEndpointResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.DeleteVpcEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.GetAccessPolicy
		 * @return {GetAccessPolicyResponse} Success
		 */
		GetAccessPolicy(requestBody: GetAccessPolicyRequest): Observable<GetAccessPolicyResponse> {
			return this.http.post<GetAccessPolicyResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.GetAccessPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns account-level settings related to OpenSearch Serverless.
		 * Post #X-Amz-Target=OpenSearchServerless.GetAccountSettings
		 * @return {GetAccountSettingsResponse} Success
		 */
		GetAccountSettings(requestBody: GetAccountSettingsRequest): Observable<GetAccountSettingsResponse> {
			return this.http.post<GetAccountSettingsResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.GetAccountSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.
		 * Post #X-Amz-Target=OpenSearchServerless.GetPoliciesStats
		 * @return {GetPoliciesStatsResponse} Success
		 */
		GetPoliciesStats(requestBody: GetPoliciesStatsRequest): Observable<GetPoliciesStatsResponse> {
			return this.http.post<GetPoliciesStatsResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.GetPoliciesStats', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about an OpenSearch Serverless security configuration. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.GetSecurityConfig
		 * @return {GetSecurityConfigResponse} Success
		 */
		GetSecurityConfig(requestBody: GetSecurityConfigRequest): Observable<GetSecurityConfigResponse> {
			return this.http.post<GetSecurityConfigResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.GetSecurityConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a configured OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.GetSecurityPolicy
		 * @return {GetSecurityPolicyResponse} Success
		 */
		GetSecurityPolicy(requestBody: GetSecurityPolicyRequest): Observable<GetSecurityPolicyResponse> {
			return this.http.post<GetSecurityPolicyResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.GetSecurityPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a list of OpenSearch Serverless access policies.
		 * Post #X-Amz-Target=OpenSearchServerless.ListAccessPolicies
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAccessPoliciesResponse} Success
		 */
		ListAccessPolicies(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAccessPoliciesRequest): Observable<ListAccessPoliciesResponse> {
			return this.http.post<ListAccessPoliciesResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.ListAccessPolicies?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all OpenSearch Serverless collections. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.</p> <note> <p>Make sure to include an empty request body {} if you don't include any collection filters in the request.</p> </note>
		 * Post #X-Amz-Target=OpenSearchServerless.ListCollections
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListCollectionsResponse} Success
		 */
		ListCollections(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListCollectionsRequest): Observable<ListCollectionsResponse> {
			return this.http.post<ListCollectionsResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.ListCollections?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about configured OpenSearch Serverless security configurations. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.ListSecurityConfigs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSecurityConfigsResponse} Success
		 */
		ListSecurityConfigs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSecurityConfigsRequest): Observable<ListSecurityConfigsResponse> {
			return this.http.post<ListSecurityConfigsResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.ListSecurityConfigs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about configured OpenSearch Serverless security policies.
		 * Post #X-Amz-Target=OpenSearchServerless.ListSecurityPolicies
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSecurityPoliciesResponse} Success
		 */
		ListSecurityPolicies(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSecurityPoliciesRequest): Observable<ListSecurityPoliciesResponse> {
			return this.http.post<ListSecurityPoliciesResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.ListSecurityPolicies?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the tags for an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.ListVpcEndpoints
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListVpcEndpointsResponse} Success
		 */
		ListVpcEndpoints(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListVpcEndpointsRequest): Observable<ListVpcEndpointsResponse> {
			return this.http.post<ListVpcEndpointsResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.ListVpcEndpoints?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates tags with an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.UpdateAccessPolicy
		 * @return {UpdateAccessPolicyResponse} Success
		 */
		UpdateAccessPolicy(requestBody: UpdateAccessPolicyRequest): Observable<UpdateAccessPolicyResponse> {
			return this.http.post<UpdateAccessPolicyResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.UpdateAccessPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.UpdateAccountSettings
		 * @return {UpdateAccountSettingsResponse} Success
		 */
		UpdateAccountSettings(requestBody: UpdateAccountSettingsRequest): Observable<UpdateAccountSettingsResponse> {
			return this.http.post<UpdateAccountSettingsResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.UpdateAccountSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an OpenSearch Serverless collection.
		 * Post #X-Amz-Target=OpenSearchServerless.UpdateCollection
		 * @return {UpdateCollectionResponse} Success
		 */
		UpdateCollection(requestBody: UpdateCollectionRequest): Observable<UpdateCollectionResponse> {
			return this.http.post<UpdateCollectionResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.UpdateCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.UpdateSecurityConfig
		 * @return {UpdateSecurityConfigResponse} Success
		 */
		UpdateSecurityConfig(requestBody: UpdateSecurityConfigRequest): Observable<UpdateSecurityConfigResponse> {
			return this.http.post<UpdateSecurityConfigResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.UpdateSecurityConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.UpdateSecurityPolicy
		 * @return {UpdateSecurityPolicyResponse} Success
		 */
		UpdateSecurityPolicy(requestBody: UpdateSecurityPolicyRequest): Observable<UpdateSecurityPolicyResponse> {
			return this.http.post<UpdateSecurityPolicyResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.UpdateSecurityPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
		 * Post #X-Amz-Target=OpenSearchServerless.UpdateVpcEndpoint
		 * @return {UpdateVpcEndpointResponse} Success
		 */
		UpdateVpcEndpoint(requestBody: UpdateVpcEndpointRequest): Observable<UpdateVpcEndpointResponse> {
			return this.http.post<UpdateVpcEndpointResponse>(this.baseUri + '#X-Amz-Target=OpenSearchServerless.UpdateVpcEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchGetCollectionX_Amz_Target { 'OpenSearchServerless.BatchGetCollection' = 0 }

	export enum BatchGetVpcEndpointX_Amz_Target { 'OpenSearchServerless.BatchGetVpcEndpoint' = 0 }

	export enum CreateAccessPolicyX_Amz_Target { 'OpenSearchServerless.CreateAccessPolicy' = 0 }

	export enum CreateCollectionX_Amz_Target { 'OpenSearchServerless.CreateCollection' = 0 }

	export enum CreateSecurityConfigX_Amz_Target { 'OpenSearchServerless.CreateSecurityConfig' = 0 }

	export enum CreateSecurityPolicyX_Amz_Target { 'OpenSearchServerless.CreateSecurityPolicy' = 0 }

	export enum CreateVpcEndpointX_Amz_Target { 'OpenSearchServerless.CreateVpcEndpoint' = 0 }

	export enum DeleteAccessPolicyX_Amz_Target { 'OpenSearchServerless.DeleteAccessPolicy' = 0 }

	export enum DeleteCollectionX_Amz_Target { 'OpenSearchServerless.DeleteCollection' = 0 }

	export enum DeleteSecurityConfigX_Amz_Target { 'OpenSearchServerless.DeleteSecurityConfig' = 0 }

	export enum DeleteSecurityPolicyX_Amz_Target { 'OpenSearchServerless.DeleteSecurityPolicy' = 0 }

	export enum DeleteVpcEndpointX_Amz_Target { 'OpenSearchServerless.DeleteVpcEndpoint' = 0 }

	export enum GetAccessPolicyX_Amz_Target { 'OpenSearchServerless.GetAccessPolicy' = 0 }

	export enum GetAccountSettingsX_Amz_Target { 'OpenSearchServerless.GetAccountSettings' = 0 }

	export enum GetPoliciesStatsX_Amz_Target { 'OpenSearchServerless.GetPoliciesStats' = 0 }

	export enum GetSecurityConfigX_Amz_Target { 'OpenSearchServerless.GetSecurityConfig' = 0 }

	export enum GetSecurityPolicyX_Amz_Target { 'OpenSearchServerless.GetSecurityPolicy' = 0 }

	export enum ListAccessPoliciesX_Amz_Target { 'OpenSearchServerless.ListAccessPolicies' = 0 }

	export enum ListCollectionsX_Amz_Target { 'OpenSearchServerless.ListCollections' = 0 }

	export enum ListSecurityConfigsX_Amz_Target { 'OpenSearchServerless.ListSecurityConfigs' = 0 }

	export enum ListSecurityPoliciesX_Amz_Target { 'OpenSearchServerless.ListSecurityPolicies' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'OpenSearchServerless.ListTagsForResource' = 0 }

	export enum ListVpcEndpointsX_Amz_Target { 'OpenSearchServerless.ListVpcEndpoints' = 0 }

	export enum TagResourceX_Amz_Target { 'OpenSearchServerless.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'OpenSearchServerless.UntagResource' = 0 }

	export enum UpdateAccessPolicyX_Amz_Target { 'OpenSearchServerless.UpdateAccessPolicy' = 0 }

	export enum UpdateAccountSettingsX_Amz_Target { 'OpenSearchServerless.UpdateAccountSettings' = 0 }

	export enum UpdateCollectionX_Amz_Target { 'OpenSearchServerless.UpdateCollection' = 0 }

	export enum UpdateSecurityConfigX_Amz_Target { 'OpenSearchServerless.UpdateSecurityConfig' = 0 }

	export enum UpdateSecurityPolicyX_Amz_Target { 'OpenSearchServerless.UpdateSecurityPolicy' = 0 }

	export enum UpdateVpcEndpointX_Amz_Target { 'OpenSearchServerless.UpdateVpcEndpoint' = 0 }

}

