import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface CreateSolFunctionPackageOutput {

		/** Required */
		arn: string;

		/** Required */
		id: string;

		/** Required */
		onboardingState: OnboardingState;

		/** Required */
		operationalState: OperationalState;
		tags?: TagMap;

		/** Required */
		usageState: UsageState;
	}
	export interface CreateSolFunctionPackageOutputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		onboardingState: FormControl<OnboardingState | null | undefined>,

		/** Required */
		operationalState: FormControl<OperationalState | null | undefined>,

		/** Required */
		usageState: FormControl<UsageState | null | undefined>,
	}
	export function CreateCreateSolFunctionPackageOutputFormGroup() {
		return new FormGroup<CreateSolFunctionPackageOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			onboardingState: new FormControl<OnboardingState | null | undefined>(undefined, [Validators.required]),
			operationalState: new FormControl<OperationalState | null | undefined>(undefined, [Validators.required]),
			usageState: new FormControl<UsageState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OnboardingState { CREATED = 'CREATED', ONBOARDED = 'ONBOARDED', ERROR = 'ERROR' }

	export enum OperationalState { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export enum UsageState { IN_USE = 'IN_USE', NOT_IN_USE = 'NOT_IN_USE' }

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateSolNetworkInstanceOutput {

		/** Required */
		arn: string;

		/** Required */
		id: string;

		/** Required */
		nsInstanceName: string;

		/** Required */
		nsdInfoId: string;
		tags?: TagMap;
	}
	export interface CreateSolNetworkInstanceOutputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		nsInstanceName: FormControl<string | null | undefined>,

		/** Required */
		nsdInfoId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSolNetworkInstanceOutputFormGroup() {
		return new FormGroup<CreateSolNetworkInstanceOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdInfoId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSolNetworkPackageOutput {

		/** Required */
		arn: string;

		/** Required */
		id: string;

		/** Required */
		nsdOnboardingState: OnboardingState;

		/** Required */
		nsdOperationalState: OperationalState;

		/** Required */
		nsdUsageState: UsageState;
		tags?: TagMap;
	}
	export interface CreateSolNetworkPackageOutputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		nsdOnboardingState: FormControl<OnboardingState | null | undefined>,

		/** Required */
		nsdOperationalState: FormControl<OperationalState | null | undefined>,

		/** Required */
		nsdUsageState: FormControl<UsageState | null | undefined>,
	}
	export function CreateCreateSolNetworkPackageOutputFormGroup() {
		return new FormGroup<CreateSolNetworkPackageOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdOnboardingState: new FormControl<OnboardingState | null | undefined>(undefined, [Validators.required]),
			nsdOperationalState: new FormControl<OperationalState | null | undefined>(undefined, [Validators.required]),
			nsdUsageState: new FormControl<UsageState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSolFunctionInstanceOutput {

		/** Required */
		arn: string;

		/** Required */
		id: string;

		/** <p>Information about the network function.</p> <p>A network function instance is a function in a function package .</p> */
		instantiatedVnfInfo?: GetSolVnfInfo;

		/** Required */
		instantiationState: VnfInstantiationState;

		/**
		 * <p>The metadata of a network function instance.</p> <p>A network function instance is a function in a function package .</p>
		 * Required
		 */
		metadata: GetSolFunctionInstanceMetadata;

		/** Required */
		nsInstanceId: string;
		tags?: TagMap;

		/** Required */
		vnfPkgId: string;
		vnfProductName?: string;
		vnfProvider?: string;

		/** Required */
		vnfdId: string;
		vnfdVersion?: string;
	}
	export interface GetSolFunctionInstanceOutputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		instantiationState: FormControl<VnfInstantiationState | null | undefined>,

		/** Required */
		nsInstanceId: FormControl<string | null | undefined>,

		/** Required */
		vnfPkgId: FormControl<string | null | undefined>,
		vnfProductName: FormControl<string | null | undefined>,
		vnfProvider: FormControl<string | null | undefined>,

		/** Required */
		vnfdId: FormControl<string | null | undefined>,
		vnfdVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetSolFunctionInstanceOutputFormGroup() {
		return new FormGroup<GetSolFunctionInstanceOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instantiationState: new FormControl<VnfInstantiationState | null | undefined>(undefined, [Validators.required]),
			nsInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vnfPkgId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vnfProductName: new FormControl<string | null | undefined>(undefined),
			vnfProvider: new FormControl<string | null | undefined>(undefined),
			vnfdId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vnfdVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about the network function.</p> <p>A network function instance is a function in a function package .</p> */
	export interface GetSolVnfInfo {
		vnfState?: VnfOperationalState;
		vnfcResourceInfo?: Array<GetSolVnfcResourceInfo>;
	}

	/** <p>Information about the network function.</p> <p>A network function instance is a function in a function package .</p> */
	export interface GetSolVnfInfoFormProperties {
		vnfState: FormControl<VnfOperationalState | null | undefined>,
	}
	export function CreateGetSolVnfInfoFormGroup() {
		return new FormGroup<GetSolVnfInfoFormProperties>({
			vnfState: new FormControl<VnfOperationalState | null | undefined>(undefined),
		});

	}

	export enum VnfOperationalState { STARTED = 'STARTED', STOPPED = 'STOPPED' }


	/** <p>Details of resource associated with a network function.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> */
	export interface GetSolVnfcResourceInfo {
		metadata?: GetSolVnfcResourceInfoMetadata;
	}

	/** <p>Details of resource associated with a network function.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> */
	export interface GetSolVnfcResourceInfoFormProperties {
	}
	export function CreateGetSolVnfcResourceInfoFormGroup() {
		return new FormGroup<GetSolVnfcResourceInfoFormProperties>({
		});

	}


	/** <p>The metadata of a network function.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> */
	export interface GetSolVnfcResourceInfoMetadata {
		cluster?: string;
		helmChart?: string;
		nodeGroup?: string;
	}

	/** <p>The metadata of a network function.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> */
	export interface GetSolVnfcResourceInfoMetadataFormProperties {
		cluster: FormControl<string | null | undefined>,
		helmChart: FormControl<string | null | undefined>,
		nodeGroup: FormControl<string | null | undefined>,
	}
	export function CreateGetSolVnfcResourceInfoMetadataFormGroup() {
		return new FormGroup<GetSolVnfcResourceInfoMetadataFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			helmChart: new FormControl<string | null | undefined>(undefined),
			nodeGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VnfInstantiationState { INSTANTIATED = 'INSTANTIATED', NOT_INSTANTIATED = 'NOT_INSTANTIATED' }


	/** <p>The metadata of a network function instance.</p> <p>A network function instance is a function in a function package .</p> */
	export interface GetSolFunctionInstanceMetadata {

		/** Required */
		createdAt: Date;

		/** Required */
		lastModified: Date;
	}

	/** <p>The metadata of a network function instance.</p> <p>A network function instance is a function in a function package .</p> */
	export interface GetSolFunctionInstanceMetadataFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateGetSolFunctionInstanceMetadataFormGroup() {
		return new FormGroup<GetSolFunctionInstanceMetadataFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSolFunctionPackageOutput {

		/** Required */
		arn: string;

		/** Required */
		id: string;

		/** <p>Metadata related to the function package.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p> */
		metadata?: GetSolFunctionPackageMetadata;

		/** Required */
		onboardingState: OnboardingState;

		/** Required */
		operationalState: OperationalState;
		tags?: TagMap;

		/** Required */
		usageState: UsageState;
		vnfProductName?: string;
		vnfProvider?: string;
		vnfdId?: string;
		vnfdVersion?: string;
	}
	export interface GetSolFunctionPackageOutputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		onboardingState: FormControl<OnboardingState | null | undefined>,

		/** Required */
		operationalState: FormControl<OperationalState | null | undefined>,

		/** Required */
		usageState: FormControl<UsageState | null | undefined>,
		vnfProductName: FormControl<string | null | undefined>,
		vnfProvider: FormControl<string | null | undefined>,
		vnfdId: FormControl<string | null | undefined>,
		vnfdVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetSolFunctionPackageOutputFormGroup() {
		return new FormGroup<GetSolFunctionPackageOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			onboardingState: new FormControl<OnboardingState | null | undefined>(undefined, [Validators.required]),
			operationalState: new FormControl<OperationalState | null | undefined>(undefined, [Validators.required]),
			usageState: new FormControl<UsageState | null | undefined>(undefined, [Validators.required]),
			vnfProductName: new FormControl<string | null | undefined>(undefined),
			vnfProvider: new FormControl<string | null | undefined>(undefined),
			vnfdId: new FormControl<string | null | undefined>(undefined),
			vnfdVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Metadata related to the function package.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p> */
	export interface GetSolFunctionPackageMetadata {

		/** Required */
		createdAt: Date;

		/** Required */
		lastModified: Date;
		vnfd?: FunctionArtifactMeta;
	}

	/** <p>Metadata related to the function package.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p> */
	export interface GetSolFunctionPackageMetadataFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateGetSolFunctionPackageMetadataFormGroup() {
		return new FormGroup<GetSolFunctionPackageMetadataFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Metadata for function package artifacts.</p> <p>Artifacts are the contents of the package descriptor file and the state of the package.</p> */
	export interface FunctionArtifactMeta {
		overrides?: Array<ToscaOverride>;
	}

	/** <p>Metadata for function package artifacts.</p> <p>Artifacts are the contents of the package descriptor file and the state of the package.</p> */
	export interface FunctionArtifactMetaFormProperties {
	}
	export function CreateFunctionArtifactMetaFormGroup() {
		return new FormGroup<FunctionArtifactMetaFormProperties>({
		});

	}


	/** Overrides of the TOSCA node. */
	export interface ToscaOverride {
		defaultValue?: string;
		name?: string;
	}

	/** Overrides of the TOSCA node. */
	export interface ToscaOverrideFormProperties {
		defaultValue: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateToscaOverrideFormGroup() {
		return new FormGroup<ToscaOverrideFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSolFunctionPackageContentOutput {
		packageContent?: string;
	}
	export interface GetSolFunctionPackageContentOutputFormProperties {
		packageContent: FormControl<string | null | undefined>,
	}
	export function CreateGetSolFunctionPackageContentOutputFormGroup() {
		return new FormGroup<GetSolFunctionPackageContentOutputFormProperties>({
			packageContent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSolFunctionPackageDescriptorOutput {
		vnfd?: string;
	}
	export interface GetSolFunctionPackageDescriptorOutputFormProperties {
		vnfd: FormControl<string | null | undefined>,
	}
	export function CreateGetSolFunctionPackageDescriptorOutputFormGroup() {
		return new FormGroup<GetSolFunctionPackageDescriptorOutputFormProperties>({
			vnfd: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSolNetworkInstanceOutput {

		/** Required */
		arn: string;

		/** Required */
		id: string;

		/** <p>Lifecycle management operation details on the network instance.</p> <p>Lifecycle management operations are deploy, update, or delete operations.</p> */
		lcmOpInfo?: LcmOperationInfo;

		/**
		 * <p>The metadata of a network instance.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
		 * Required
		 */
		metadata: GetSolNetworkInstanceMetadata;

		/** Required */
		nsInstanceDescription: string;

		/** Required */
		nsInstanceName: string;
		nsState?: NsState;

		/** Required */
		nsdId: string;

		/** Required */
		nsdInfoId: string;
		tags?: TagMap;
	}
	export interface GetSolNetworkInstanceOutputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		nsInstanceDescription: FormControl<string | null | undefined>,

		/** Required */
		nsInstanceName: FormControl<string | null | undefined>,
		nsState: FormControl<NsState | null | undefined>,

		/** Required */
		nsdId: FormControl<string | null | undefined>,

		/** Required */
		nsdInfoId: FormControl<string | null | undefined>,
	}
	export function CreateGetSolNetworkInstanceOutputFormGroup() {
		return new FormGroup<GetSolNetworkInstanceOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsInstanceDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsState: new FormControl<NsState | null | undefined>(undefined),
			nsdId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdInfoId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Lifecycle management operation details on the network instance.</p> <p>Lifecycle management operations are deploy, update, or delete operations.</p> */
	export interface LcmOperationInfo {

		/** Required */
		nsLcmOpOccId: string;
	}

	/** <p>Lifecycle management operation details on the network instance.</p> <p>Lifecycle management operations are deploy, update, or delete operations.</p> */
	export interface LcmOperationInfoFormProperties {

		/** Required */
		nsLcmOpOccId: FormControl<string | null | undefined>,
	}
	export function CreateLcmOperationInfoFormGroup() {
		return new FormGroup<LcmOperationInfoFormProperties>({
			nsLcmOpOccId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The metadata of a network instance.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> */
	export interface GetSolNetworkInstanceMetadata {

		/** Required */
		createdAt: Date;

		/** Required */
		lastModified: Date;
	}

	/** <p>The metadata of a network instance.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> */
	export interface GetSolNetworkInstanceMetadataFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateGetSolNetworkInstanceMetadataFormGroup() {
		return new FormGroup<GetSolNetworkInstanceMetadataFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NsState { INSTANTIATED = 'INSTANTIATED', NOT_INSTANTIATED = 'NOT_INSTANTIATED', IMPAIRED = 'IMPAIRED', STOPPED = 'STOPPED', DELETED = 'DELETED', INSTANTIATE_IN_PROGRESS = 'INSTANTIATE_IN_PROGRESS', UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS', TERMINATE_IN_PROGRESS = 'TERMINATE_IN_PROGRESS' }

	export interface GetSolNetworkOperationOutput {

		/** Required */
		arn: string;
		error?: ProblemDetails;
		id?: string;
		lcmOperationType?: LcmOperationType;
		metadata?: GetSolNetworkOperationMetadata;
		nsInstanceId?: string;
		operationState?: NsLcmOperationState;
		tags?: TagMap;
		tasks?: Array<GetSolNetworkOperationTaskDetails>;
	}
	export interface GetSolNetworkOperationOutputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lcmOperationType: FormControl<LcmOperationType | null | undefined>,
		nsInstanceId: FormControl<string | null | undefined>,
		operationState: FormControl<NsLcmOperationState | null | undefined>,
	}
	export function CreateGetSolNetworkOperationOutputFormGroup() {
		return new FormGroup<GetSolNetworkOperationOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			lcmOperationType: new FormControl<LcmOperationType | null | undefined>(undefined),
			nsInstanceId: new FormControl<string | null | undefined>(undefined),
			operationState: new FormControl<NsLcmOperationState | null | undefined>(undefined),
		});

	}


	/** Details related to problems with AWS TNB resources. */
	export interface ProblemDetails {

		/** Required */
		detail: string;
		title?: string;
	}

	/** Details related to problems with AWS TNB resources. */
	export interface ProblemDetailsFormProperties {

		/** Required */
		detail: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateProblemDetailsFormGroup() {
		return new FormGroup<ProblemDetailsFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LcmOperationType { INSTANTIATE = 'INSTANTIATE', UPDATE = 'UPDATE', TERMINATE = 'TERMINATE' }


	/** <p>Metadata related to a network operation occurrence.</p> <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p> */
	export interface GetSolNetworkOperationMetadata {

		/** Required */
		createdAt: Date;

		/** Required */
		lastModified: Date;
	}

	/** <p>Metadata related to a network operation occurrence.</p> <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p> */
	export interface GetSolNetworkOperationMetadataFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateGetSolNetworkOperationMetadataFormGroup() {
		return new FormGroup<GetSolNetworkOperationMetadataFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NsLcmOperationState { PROCESSING = 'PROCESSING', COMPLETED = 'COMPLETED', FAILED = 'FAILED', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED' }


	/** <p>Gets the details of a network operation.</p> <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p> */
	export interface GetSolNetworkOperationTaskDetails {
		taskContext?: StringMap;
		taskEndTime?: Date;
		taskErrorDetails?: ErrorInfo;
		taskName?: string;
		taskStartTime?: Date;
		taskStatus?: TaskStatus;
	}

	/** <p>Gets the details of a network operation.</p> <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p> */
	export interface GetSolNetworkOperationTaskDetailsFormProperties {
		taskEndTime: FormControl<Date | null | undefined>,
		taskName: FormControl<string | null | undefined>,
		taskStartTime: FormControl<Date | null | undefined>,
		taskStatus: FormControl<TaskStatus | null | undefined>,
	}
	export function CreateGetSolNetworkOperationTaskDetailsFormGroup() {
		return new FormGroup<GetSolNetworkOperationTaskDetailsFormProperties>({
			taskEndTime: new FormControl<Date | null | undefined>(undefined),
			taskName: new FormControl<string | null | undefined>(undefined),
			taskStartTime: new FormControl<Date | null | undefined>(undefined),
			taskStatus: new FormControl<TaskStatus | null | undefined>(undefined),
		});

	}

	export interface StringMap {
	}
	export interface StringMapFormProperties {
	}
	export function CreateStringMapFormGroup() {
		return new FormGroup<StringMapFormProperties>({
		});

	}


	/** Provides error information. */
	export interface ErrorInfo {
		cause?: string;
		details?: string;
	}

	/** Provides error information. */
	export interface ErrorInfoFormProperties {
		cause: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,
	}
	export function CreateErrorInfoFormGroup() {
		return new FormGroup<ErrorInfoFormProperties>({
			cause: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TaskStatus { SCHEDULED = 'SCHEDULED', STARTED = 'STARTED', IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', ERROR = 'ERROR', SKIPPED = 'SKIPPED', CANCELLED = 'CANCELLED' }

	export interface GetSolNetworkPackageOutput {

		/** Required */
		arn: string;

		/** Required */
		id: string;

		/**
		 * <p>Metadata associated with a network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
		 * Required
		 */
		metadata: GetSolNetworkPackageMetadata;

		/** Required */
		nsdId: string;

		/** Required */
		nsdName: string;

		/** Required */
		nsdOnboardingState: OnboardingState;

		/** Required */
		nsdOperationalState: OperationalState;

		/** Required */
		nsdUsageState: UsageState;

		/** Required */
		nsdVersion: string;
		tags?: TagMap;

		/** Required */
		vnfPkgIds: Array<string>;
	}
	export interface GetSolNetworkPackageOutputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		nsdId: FormControl<string | null | undefined>,

		/** Required */
		nsdName: FormControl<string | null | undefined>,

		/** Required */
		nsdOnboardingState: FormControl<OnboardingState | null | undefined>,

		/** Required */
		nsdOperationalState: FormControl<OperationalState | null | undefined>,

		/** Required */
		nsdUsageState: FormControl<UsageState | null | undefined>,

		/** Required */
		nsdVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetSolNetworkPackageOutputFormGroup() {
		return new FormGroup<GetSolNetworkPackageOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdOnboardingState: new FormControl<OnboardingState | null | undefined>(undefined, [Validators.required]),
			nsdOperationalState: new FormControl<OperationalState | null | undefined>(undefined, [Validators.required]),
			nsdUsageState: new FormControl<UsageState | null | undefined>(undefined, [Validators.required]),
			nsdVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Metadata associated with a network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p> */
	export interface GetSolNetworkPackageMetadata {

		/** Required */
		createdAt: Date;

		/** Required */
		lastModified: Date;
		nsd?: NetworkArtifactMeta;
	}

	/** <p>Metadata associated with a network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p> */
	export interface GetSolNetworkPackageMetadataFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateGetSolNetworkPackageMetadataFormGroup() {
		return new FormGroup<GetSolNetworkPackageMetadataFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Metadata for network package artifacts.</p> <p>Artifacts are the contents of the package descriptor file and the state of the package.</p> */
	export interface NetworkArtifactMeta {
		overrides?: Array<ToscaOverride>;
	}

	/** <p>Metadata for network package artifacts.</p> <p>Artifacts are the contents of the package descriptor file and the state of the package.</p> */
	export interface NetworkArtifactMetaFormProperties {
	}
	export function CreateNetworkArtifactMetaFormGroup() {
		return new FormGroup<NetworkArtifactMetaFormProperties>({
		});

	}

	export interface GetSolNetworkPackageContentOutput {
		nsdContent?: string;
	}
	export interface GetSolNetworkPackageContentOutputFormProperties {
		nsdContent: FormControl<string | null | undefined>,
	}
	export function CreateGetSolNetworkPackageContentOutputFormGroup() {
		return new FormGroup<GetSolNetworkPackageContentOutputFormProperties>({
			nsdContent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSolNetworkPackageDescriptorOutput {
		nsd?: string;
	}
	export interface GetSolNetworkPackageDescriptorOutputFormProperties {
		nsd: FormControl<string | null | undefined>,
	}
	export function CreateGetSolNetworkPackageDescriptorOutputFormGroup() {
		return new FormGroup<GetSolNetworkPackageDescriptorOutputFormProperties>({
			nsd: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InstantiateSolNetworkInstanceOutput {

		/** Required */
		nsLcmOpOccId: string;
		tags?: TagMap;
	}
	export interface InstantiateSolNetworkInstanceOutputFormProperties {

		/** Required */
		nsLcmOpOccId: FormControl<string | null | undefined>,
	}
	export function CreateInstantiateSolNetworkInstanceOutputFormGroup() {
		return new FormGroup<InstantiateSolNetworkInstanceOutputFormProperties>({
			nsLcmOpOccId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSolFunctionInstancesOutput {
		functionInstances?: Array<ListSolFunctionInstanceInfo>;
		nextToken?: string;
	}
	export interface ListSolFunctionInstancesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSolFunctionInstancesOutputFormGroup() {
		return new FormGroup<ListSolFunctionInstancesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Lists information about a network function instance.</p> <p>A network function instance is a function in a function package .</p> */
	export interface ListSolFunctionInstanceInfo {

		/** Required */
		arn: string;

		/** Required */
		id: string;

		/** <p>Information about a network function.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> */
		instantiatedVnfInfo?: GetSolInstantiatedVnfInfo;

		/** Required */
		instantiationState: VnfInstantiationState;

		/** Required */
		metadata: ListSolFunctionInstanceMetadata;

		/** Required */
		nsInstanceId: string;

		/** Required */
		vnfPkgId: string;
		vnfPkgName?: string;
	}

	/** <p>Lists information about a network function instance.</p> <p>A network function instance is a function in a function package .</p> */
	export interface ListSolFunctionInstanceInfoFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		instantiationState: FormControl<VnfInstantiationState | null | undefined>,

		/** Required */
		nsInstanceId: FormControl<string | null | undefined>,

		/** Required */
		vnfPkgId: FormControl<string | null | undefined>,
		vnfPkgName: FormControl<string | null | undefined>,
	}
	export function CreateListSolFunctionInstanceInfoFormGroup() {
		return new FormGroup<ListSolFunctionInstanceInfoFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instantiationState: new FormControl<VnfInstantiationState | null | undefined>(undefined, [Validators.required]),
			nsInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vnfPkgId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vnfPkgName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about a network function.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> */
	export interface GetSolInstantiatedVnfInfo {
		vnfState?: VnfOperationalState;
	}

	/** <p>Information about a network function.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> */
	export interface GetSolInstantiatedVnfInfoFormProperties {
		vnfState: FormControl<VnfOperationalState | null | undefined>,
	}
	export function CreateGetSolInstantiatedVnfInfoFormGroup() {
		return new FormGroup<GetSolInstantiatedVnfInfoFormProperties>({
			vnfState: new FormControl<VnfOperationalState | null | undefined>(undefined),
		});

	}


	/** <p>Lists network function instance metadata.</p> <p>A network function instance is a function in a function package .</p> */
	export interface ListSolFunctionInstanceMetadata {

		/** Required */
		createdAt: Date;

		/** Required */
		lastModified: Date;
	}

	/** <p>Lists network function instance metadata.</p> <p>A network function instance is a function in a function package .</p> */
	export interface ListSolFunctionInstanceMetadataFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateListSolFunctionInstanceMetadataFormGroup() {
		return new FormGroup<ListSolFunctionInstanceMetadataFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSolFunctionPackagesOutput {

		/** Required */
		functionPackages: Array<ListSolFunctionPackageInfo>;
		nextToken?: string;
	}
	export interface ListSolFunctionPackagesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSolFunctionPackagesOutputFormGroup() {
		return new FormGroup<ListSolFunctionPackagesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about a function package.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p> */
	export interface ListSolFunctionPackageInfo {

		/** Required */
		arn: string;

		/** Required */
		id: string;
		metadata?: ListSolFunctionPackageMetadata;

		/** Required */
		onboardingState: OnboardingState;

		/** Required */
		operationalState: OperationalState;

		/** Required */
		usageState: UsageState;
		vnfProductName?: string;
		vnfProvider?: string;
		vnfdId?: string;
		vnfdVersion?: string;
	}

	/** <p>Information about a function package.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p> */
	export interface ListSolFunctionPackageInfoFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		onboardingState: FormControl<OnboardingState | null | undefined>,

		/** Required */
		operationalState: FormControl<OperationalState | null | undefined>,

		/** Required */
		usageState: FormControl<UsageState | null | undefined>,
		vnfProductName: FormControl<string | null | undefined>,
		vnfProvider: FormControl<string | null | undefined>,
		vnfdId: FormControl<string | null | undefined>,
		vnfdVersion: FormControl<string | null | undefined>,
	}
	export function CreateListSolFunctionPackageInfoFormGroup() {
		return new FormGroup<ListSolFunctionPackageInfoFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			onboardingState: new FormControl<OnboardingState | null | undefined>(undefined, [Validators.required]),
			operationalState: new FormControl<OperationalState | null | undefined>(undefined, [Validators.required]),
			usageState: new FormControl<UsageState | null | undefined>(undefined, [Validators.required]),
			vnfProductName: new FormControl<string | null | undefined>(undefined),
			vnfProvider: new FormControl<string | null | undefined>(undefined),
			vnfdId: new FormControl<string | null | undefined>(undefined),
			vnfdVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Details for the function package metadata.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p> */
	export interface ListSolFunctionPackageMetadata {

		/** Required */
		createdAt: Date;

		/** Required */
		lastModified: Date;
	}

	/** <p>Details for the function package metadata.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p> */
	export interface ListSolFunctionPackageMetadataFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateListSolFunctionPackageMetadataFormGroup() {
		return new FormGroup<ListSolFunctionPackageMetadataFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSolNetworkInstancesOutput {
		networkInstances?: Array<ListSolNetworkInstanceInfo>;
		nextToken?: string;
	}
	export interface ListSolNetworkInstancesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSolNetworkInstancesOutputFormGroup() {
		return new FormGroup<ListSolNetworkInstancesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Info about the specific network instance.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> */
	export interface ListSolNetworkInstanceInfo {

		/** Required */
		arn: string;

		/** Required */
		id: string;

		/** Required */
		metadata: ListSolNetworkInstanceMetadata;

		/** Required */
		nsInstanceDescription: string;

		/** Required */
		nsInstanceName: string;

		/** Required */
		nsState: NsState;

		/** Required */
		nsdId: string;

		/** Required */
		nsdInfoId: string;
	}

	/** <p>Info about the specific network instance.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> */
	export interface ListSolNetworkInstanceInfoFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		nsInstanceDescription: FormControl<string | null | undefined>,

		/** Required */
		nsInstanceName: FormControl<string | null | undefined>,

		/** Required */
		nsState: FormControl<NsState | null | undefined>,

		/** Required */
		nsdId: FormControl<string | null | undefined>,

		/** Required */
		nsdInfoId: FormControl<string | null | undefined>,
	}
	export function CreateListSolNetworkInstanceInfoFormGroup() {
		return new FormGroup<ListSolNetworkInstanceInfoFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsInstanceDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsState: new FormControl<NsState | null | undefined>(undefined, [Validators.required]),
			nsdId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdInfoId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Metadata details for a network instance.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> */
	export interface ListSolNetworkInstanceMetadata {

		/** Required */
		createdAt: Date;

		/** Required */
		lastModified: Date;
	}

	/** <p>Metadata details for a network instance.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> */
	export interface ListSolNetworkInstanceMetadataFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateListSolNetworkInstanceMetadataFormGroup() {
		return new FormGroup<ListSolNetworkInstanceMetadataFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSolNetworkOperationsOutput {
		networkOperations?: Array<ListSolNetworkOperationsInfo>;
		nextToken?: string;
	}
	export interface ListSolNetworkOperationsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSolNetworkOperationsOutputFormGroup() {
		return new FormGroup<ListSolNetworkOperationsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information parameters for a network operation. */
	export interface ListSolNetworkOperationsInfo {

		/** Required */
		arn: string;
		error?: ProblemDetails;

		/** Required */
		id: string;

		/** Required */
		lcmOperationType: LcmOperationType;
		metadata?: ListSolNetworkOperationsMetadata;

		/** Required */
		nsInstanceId: string;

		/** Required */
		operationState: NsLcmOperationState;
	}

	/** Information parameters for a network operation. */
	export interface ListSolNetworkOperationsInfoFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		lcmOperationType: FormControl<LcmOperationType | null | undefined>,

		/** Required */
		nsInstanceId: FormControl<string | null | undefined>,

		/** Required */
		operationState: FormControl<NsLcmOperationState | null | undefined>,
	}
	export function CreateListSolNetworkOperationsInfoFormGroup() {
		return new FormGroup<ListSolNetworkOperationsInfoFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lcmOperationType: new FormControl<LcmOperationType | null | undefined>(undefined, [Validators.required]),
			nsInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operationState: new FormControl<NsLcmOperationState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Metadata related to a network operation.</p> <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p> */
	export interface ListSolNetworkOperationsMetadata {

		/** Required */
		createdAt: Date;

		/** Required */
		lastModified: Date;
	}

	/** <p>Metadata related to a network operation.</p> <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p> */
	export interface ListSolNetworkOperationsMetadataFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateListSolNetworkOperationsMetadataFormGroup() {
		return new FormGroup<ListSolNetworkOperationsMetadataFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSolNetworkPackagesOutput {

		/** Required */
		networkPackages: Array<ListSolNetworkPackageInfo>;
		nextToken?: string;
	}
	export interface ListSolNetworkPackagesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSolNetworkPackagesOutputFormGroup() {
		return new FormGroup<ListSolNetworkPackagesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Details of a network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p> */
	export interface ListSolNetworkPackageInfo {

		/** Required */
		arn: string;

		/** Required */
		id: string;

		/** Required */
		metadata: ListSolNetworkPackageMetadata;
		nsdDesigner?: string;
		nsdId?: string;
		nsdInvariantId?: string;
		nsdName?: string;

		/** Required */
		nsdOnboardingState: OnboardingState;

		/** Required */
		nsdOperationalState: OperationalState;

		/** Required */
		nsdUsageState: UsageState;
		nsdVersion?: string;
		vnfPkgIds?: Array<string>;
	}

	/** <p>Details of a network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p> */
	export interface ListSolNetworkPackageInfoFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		nsdDesigner: FormControl<string | null | undefined>,
		nsdId: FormControl<string | null | undefined>,
		nsdInvariantId: FormControl<string | null | undefined>,
		nsdName: FormControl<string | null | undefined>,

		/** Required */
		nsdOnboardingState: FormControl<OnboardingState | null | undefined>,

		/** Required */
		nsdOperationalState: FormControl<OperationalState | null | undefined>,

		/** Required */
		nsdUsageState: FormControl<UsageState | null | undefined>,
		nsdVersion: FormControl<string | null | undefined>,
	}
	export function CreateListSolNetworkPackageInfoFormGroup() {
		return new FormGroup<ListSolNetworkPackageInfoFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdDesigner: new FormControl<string | null | undefined>(undefined),
			nsdId: new FormControl<string | null | undefined>(undefined),
			nsdInvariantId: new FormControl<string | null | undefined>(undefined),
			nsdName: new FormControl<string | null | undefined>(undefined),
			nsdOnboardingState: new FormControl<OnboardingState | null | undefined>(undefined, [Validators.required]),
			nsdOperationalState: new FormControl<OperationalState | null | undefined>(undefined, [Validators.required]),
			nsdUsageState: new FormControl<UsageState | null | undefined>(undefined, [Validators.required]),
			nsdVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Metadata related to a network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p> */
	export interface ListSolNetworkPackageMetadata {

		/** Required */
		createdAt: Date;

		/** Required */
		lastModified: Date;
	}

	/** <p>Metadata related to a network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p> */
	export interface ListSolNetworkPackageMetadataFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateListSolNetworkPackageMetadataFormGroup() {
		return new FormGroup<ListSolNetworkPackageMetadataFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceOutput {

		/** Required */
		tags: TagMap;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
		});

	}

	export interface PutSolFunctionPackageContentOutput {

		/** Required */
		id: string;

		/** Required */
		metadata: PutSolFunctionPackageContentMetadata;

		/** Required */
		vnfProductName: string;

		/** Required */
		vnfProvider: string;

		/** Required */
		vnfdId: string;

		/** Required */
		vnfdVersion: string;
	}
	export interface PutSolFunctionPackageContentOutputFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		vnfProductName: FormControl<string | null | undefined>,

		/** Required */
		vnfProvider: FormControl<string | null | undefined>,

		/** Required */
		vnfdId: FormControl<string | null | undefined>,

		/** Required */
		vnfdVersion: FormControl<string | null | undefined>,
	}
	export function CreatePutSolFunctionPackageContentOutputFormGroup() {
		return new FormGroup<PutSolFunctionPackageContentOutputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vnfProductName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vnfProvider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vnfdId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vnfdVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Update metadata in a function package.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p> */
	export interface PutSolFunctionPackageContentMetadata {

		/** <p>Metadata for function package artifacts.</p> <p>Artifacts are the contents of the package descriptor file and the state of the package.</p> */
		vnfd?: FunctionArtifactMeta;
	}

	/** <p>Update metadata in a function package.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p> */
	export interface PutSolFunctionPackageContentMetadataFormProperties {
	}
	export function CreatePutSolFunctionPackageContentMetadataFormGroup() {
		return new FormGroup<PutSolFunctionPackageContentMetadataFormProperties>({
		});

	}

	export interface PutSolNetworkPackageContentOutput {

		/** Required */
		arn: string;

		/** Required */
		id: string;

		/** Required */
		metadata: PutSolNetworkPackageContentMetadata;

		/** Required */
		nsdId: string;

		/** Required */
		nsdName: string;

		/** Required */
		nsdVersion: string;

		/** Required */
		vnfPkgIds: Array<string>;
	}
	export interface PutSolNetworkPackageContentOutputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		nsdId: FormControl<string | null | undefined>,

		/** Required */
		nsdName: FormControl<string | null | undefined>,

		/** Required */
		nsdVersion: FormControl<string | null | undefined>,
	}
	export function CreatePutSolNetworkPackageContentOutputFormGroup() {
		return new FormGroup<PutSolNetworkPackageContentOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Update metadata in a network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p> */
	export interface PutSolNetworkPackageContentMetadata {

		/** <p>Metadata for network package artifacts.</p> <p>Artifacts are the contents of the package descriptor file and the state of the package.</p> */
		nsd?: NetworkArtifactMeta;
	}

	/** <p>Update metadata in a network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p> */
	export interface PutSolNetworkPackageContentMetadataFormProperties {
	}
	export function CreatePutSolNetworkPackageContentMetadataFormGroup() {
		return new FormGroup<PutSolNetworkPackageContentMetadataFormProperties>({
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface TerminateSolNetworkInstanceOutput {
		nsLcmOpOccId?: string;
		tags?: TagMap;
	}
	export interface TerminateSolNetworkInstanceOutputFormProperties {
		nsLcmOpOccId: FormControl<string | null | undefined>,
	}
	export function CreateTerminateSolNetworkInstanceOutputFormGroup() {
		return new FormGroup<TerminateSolNetworkInstanceOutputFormProperties>({
			nsLcmOpOccId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UpdateSolFunctionPackageOutput {

		/** Required */
		operationalState: OperationalState;
	}
	export interface UpdateSolFunctionPackageOutputFormProperties {

		/** Required */
		operationalState: FormControl<OperationalState | null | undefined>,
	}
	export function CreateUpdateSolFunctionPackageOutputFormGroup() {
		return new FormGroup<UpdateSolFunctionPackageOutputFormProperties>({
			operationalState: new FormControl<OperationalState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSolNetworkInstanceOutput {
		nsLcmOpOccId?: string;
		tags?: TagMap;
	}
	export interface UpdateSolNetworkInstanceOutputFormProperties {
		nsLcmOpOccId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSolNetworkInstanceOutputFormGroup() {
		return new FormGroup<UpdateSolNetworkInstanceOutputFormProperties>({
			nsLcmOpOccId: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateSolNetworkPackageOutput {

		/** Required */
		nsdOperationalState: OperationalState;
	}
	export interface UpdateSolNetworkPackageOutputFormProperties {

		/** Required */
		nsdOperationalState: FormControl<OperationalState | null | undefined>,
	}
	export function CreateUpdateSolNetworkPackageOutputFormGroup() {
		return new FormGroup<UpdateSolNetworkPackageOutputFormProperties>({
			nsdOperationalState: new FormControl<OperationalState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidateSolFunctionPackageContentOutput {

		/** Required */
		id: string;

		/** Required */
		metadata: ValidateSolFunctionPackageContentMetadata;

		/** Required */
		vnfProductName: string;

		/** Required */
		vnfProvider: string;

		/** Required */
		vnfdId: string;

		/** Required */
		vnfdVersion: string;
	}
	export interface ValidateSolFunctionPackageContentOutputFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		vnfProductName: FormControl<string | null | undefined>,

		/** Required */
		vnfProvider: FormControl<string | null | undefined>,

		/** Required */
		vnfdId: FormControl<string | null | undefined>,

		/** Required */
		vnfdVersion: FormControl<string | null | undefined>,
	}
	export function CreateValidateSolFunctionPackageContentOutputFormGroup() {
		return new FormGroup<ValidateSolFunctionPackageContentOutputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vnfProductName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vnfProvider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vnfdId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vnfdVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Validates function package content metadata.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p> */
	export interface ValidateSolFunctionPackageContentMetadata {

		/** <p>Metadata for function package artifacts.</p> <p>Artifacts are the contents of the package descriptor file and the state of the package.</p> */
		vnfd?: FunctionArtifactMeta;
	}

	/** <p>Validates function package content metadata.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p> */
	export interface ValidateSolFunctionPackageContentMetadataFormProperties {
	}
	export function CreateValidateSolFunctionPackageContentMetadataFormGroup() {
		return new FormGroup<ValidateSolFunctionPackageContentMetadataFormProperties>({
		});

	}

	export interface ValidateSolNetworkPackageContentOutput {

		/** Required */
		arn: string;

		/** Required */
		id: string;

		/** Required */
		metadata: ValidateSolNetworkPackageContentMetadata;

		/** Required */
		nsdId: string;

		/** Required */
		nsdName: string;

		/** Required */
		nsdVersion: string;

		/** Required */
		vnfPkgIds: Array<string>;
	}
	export interface ValidateSolNetworkPackageContentOutputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		nsdId: FormControl<string | null | undefined>,

		/** Required */
		nsdName: FormControl<string | null | undefined>,

		/** Required */
		nsdVersion: FormControl<string | null | undefined>,
	}
	export function CreateValidateSolNetworkPackageContentOutputFormGroup() {
		return new FormGroup<ValidateSolNetworkPackageContentOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Validates network package content metadata.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p> */
	export interface ValidateSolNetworkPackageContentMetadata {

		/** <p>Metadata for network package artifacts.</p> <p>Artifacts are the contents of the package descriptor file and the state of the package.</p> */
		nsd?: NetworkArtifactMeta;
	}

	/** <p>Validates network package content metadata.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p> */
	export interface ValidateSolNetworkPackageContentMetadataFormProperties {
	}
	export function CreateValidateSolNetworkPackageContentMetadataFormGroup() {
		return new FormGroup<ValidateSolNetworkPackageContentMetadataFormProperties>({
		});

	}

	export interface CancelSolNetworkOperationInput {
	}
	export interface CancelSolNetworkOperationInputFormProperties {
	}
	export function CreateCancelSolNetworkOperationInputFormGroup() {
		return new FormGroup<CancelSolNetworkOperationInputFormProperties>({
		});

	}

	export interface CreateSolFunctionPackageInput {
		tags?: TagMap;
	}
	export interface CreateSolFunctionPackageInputFormProperties {
	}
	export function CreateCreateSolFunctionPackageInputFormGroup() {
		return new FormGroup<CreateSolFunctionPackageInputFormProperties>({
		});

	}

	export interface CreateSolNetworkInstanceInput {
		nsDescription?: string;

		/** Required */
		nsName: string;

		/** Required */
		nsdInfoId: string;
		tags?: TagMap;
	}
	export interface CreateSolNetworkInstanceInputFormProperties {
		nsDescription: FormControl<string | null | undefined>,

		/** Required */
		nsName: FormControl<string | null | undefined>,

		/** Required */
		nsdInfoId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSolNetworkInstanceInputFormGroup() {
		return new FormGroup<CreateSolNetworkInstanceInputFormProperties>({
			nsDescription: new FormControl<string | null | undefined>(undefined),
			nsName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nsdInfoId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSolNetworkPackageInput {
		tags?: TagMap;
	}
	export interface CreateSolNetworkPackageInputFormProperties {
	}
	export function CreateCreateSolNetworkPackageInputFormGroup() {
		return new FormGroup<CreateSolNetworkPackageInputFormProperties>({
		});

	}

	export enum NsdOnboardingState { CREATED = 'CREATED', ONBOARDED = 'ONBOARDED', ERROR = 'ERROR' }

	export enum NsdOperationalState { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export enum NsdUsageState { IN_USE = 'IN_USE', NOT_IN_USE = 'NOT_IN_USE' }

	export interface DeleteSolFunctionPackageInput {
	}
	export interface DeleteSolFunctionPackageInputFormProperties {
	}
	export function CreateDeleteSolFunctionPackageInputFormGroup() {
		return new FormGroup<DeleteSolFunctionPackageInputFormProperties>({
		});

	}

	export interface DeleteSolNetworkInstanceInput {
	}
	export interface DeleteSolNetworkInstanceInputFormProperties {
	}
	export function CreateDeleteSolNetworkInstanceInputFormGroup() {
		return new FormGroup<DeleteSolNetworkInstanceInputFormProperties>({
		});

	}

	export interface DeleteSolNetworkPackageInput {
	}
	export interface DeleteSolNetworkPackageInputFormProperties {
	}
	export function CreateDeleteSolNetworkPackageInputFormGroup() {
		return new FormGroup<DeleteSolNetworkPackageInputFormProperties>({
		});

	}

	export enum DescriptorContentType { 'text/plain' = 'text/plain' }

	export interface GetSolFunctionInstanceInput {
	}
	export interface GetSolFunctionInstanceInputFormProperties {
	}
	export function CreateGetSolFunctionInstanceInputFormGroup() {
		return new FormGroup<GetSolFunctionInstanceInputFormProperties>({
		});

	}

	export enum PackageContentType { 'application/zip' = 'application/zip' }

	export interface GetSolFunctionPackageContentInput {
	}
	export interface GetSolFunctionPackageContentInputFormProperties {
	}
	export function CreateGetSolFunctionPackageContentInputFormGroup() {
		return new FormGroup<GetSolFunctionPackageContentInputFormProperties>({
		});

	}

	export interface GetSolFunctionPackageDescriptorInput {
	}
	export interface GetSolFunctionPackageDescriptorInputFormProperties {
	}
	export function CreateGetSolFunctionPackageDescriptorInputFormGroup() {
		return new FormGroup<GetSolFunctionPackageDescriptorInputFormProperties>({
		});

	}

	export interface GetSolFunctionPackageInput {
	}
	export interface GetSolFunctionPackageInputFormProperties {
	}
	export function CreateGetSolFunctionPackageInputFormGroup() {
		return new FormGroup<GetSolFunctionPackageInputFormProperties>({
		});

	}

	export interface GetSolNetworkInstanceInput {
	}
	export interface GetSolNetworkInstanceInputFormProperties {
	}
	export function CreateGetSolNetworkInstanceInputFormGroup() {
		return new FormGroup<GetSolNetworkInstanceInputFormProperties>({
		});

	}

	export interface GetSolNetworkOperationInput {
	}
	export interface GetSolNetworkOperationInputFormProperties {
	}
	export function CreateGetSolNetworkOperationInputFormGroup() {
		return new FormGroup<GetSolNetworkOperationInputFormProperties>({
		});

	}

	export interface GetSolNetworkPackageContentInput {
	}
	export interface GetSolNetworkPackageContentInputFormProperties {
	}
	export function CreateGetSolNetworkPackageContentInputFormGroup() {
		return new FormGroup<GetSolNetworkPackageContentInputFormProperties>({
		});

	}

	export interface GetSolNetworkPackageDescriptorInput {
	}
	export interface GetSolNetworkPackageDescriptorInputFormProperties {
	}
	export function CreateGetSolNetworkPackageDescriptorInputFormGroup() {
		return new FormGroup<GetSolNetworkPackageDescriptorInputFormProperties>({
		});

	}

	export interface GetSolNetworkPackageInput {
	}
	export interface GetSolNetworkPackageInputFormProperties {
	}
	export function CreateGetSolNetworkPackageInputFormGroup() {
		return new FormGroup<GetSolNetworkPackageInputFormProperties>({
		});

	}

	export interface InstantiateSolNetworkInstanceInput {
		additionalParamsForNs?: Document;
		tags?: TagMap;
	}
	export interface InstantiateSolNetworkInstanceInputFormProperties {
	}
	export function CreateInstantiateSolNetworkInstanceInputFormGroup() {
		return new FormGroup<InstantiateSolNetworkInstanceInputFormProperties>({
		});

	}

	export interface ListSolFunctionInstancesInput {
	}
	export interface ListSolFunctionInstancesInputFormProperties {
	}
	export function CreateListSolFunctionInstancesInputFormGroup() {
		return new FormGroup<ListSolFunctionInstancesInputFormProperties>({
		});

	}

	export interface ListSolFunctionPackagesInput {
	}
	export interface ListSolFunctionPackagesInputFormProperties {
	}
	export function CreateListSolFunctionPackagesInputFormGroup() {
		return new FormGroup<ListSolFunctionPackagesInputFormProperties>({
		});

	}

	export interface ListSolNetworkInstancesInput {
	}
	export interface ListSolNetworkInstancesInputFormProperties {
	}
	export function CreateListSolNetworkInstancesInputFormGroup() {
		return new FormGroup<ListSolNetworkInstancesInputFormProperties>({
		});

	}

	export interface ListSolNetworkOperationsInput {
	}
	export interface ListSolNetworkOperationsInputFormProperties {
	}
	export function CreateListSolNetworkOperationsInputFormGroup() {
		return new FormGroup<ListSolNetworkOperationsInputFormProperties>({
		});

	}

	export interface ListSolNetworkPackagesInput {
	}
	export interface ListSolNetworkPackagesInputFormProperties {
	}
	export function CreateListSolNetworkPackagesInputFormGroup() {
		return new FormGroup<ListSolNetworkPackagesInputFormProperties>({
		});

	}

	export interface ListTagsForResourceInput {
	}
	export interface ListTagsForResourceInputFormProperties {
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
		});

	}

	export interface PutSolFunctionPackageContentInput {

		/** Required */
		file: string;
	}
	export interface PutSolFunctionPackageContentInputFormProperties {

		/** Required */
		file: FormControl<string | null | undefined>,
	}
	export function CreatePutSolFunctionPackageContentInputFormGroup() {
		return new FormGroup<PutSolFunctionPackageContentInputFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutSolNetworkPackageContentInput {

		/** Required */
		file: string;
	}
	export interface PutSolNetworkPackageContentInputFormProperties {

		/** Required */
		file: FormControl<string | null | undefined>,
	}
	export function CreatePutSolNetworkPackageContentInputFormGroup() {
		return new FormGroup<PutSolNetworkPackageContentInputFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceInput {

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceInputFormProperties {
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
		});

	}

	export interface TerminateSolNetworkInstanceInput {
		tags?: TagMap;
	}
	export interface TerminateSolNetworkInstanceInputFormProperties {
	}
	export function CreateTerminateSolNetworkInstanceInputFormGroup() {
		return new FormGroup<TerminateSolNetworkInstanceInputFormProperties>({
		});

	}

	export interface UntagResourceInput {
	}
	export interface UntagResourceInputFormProperties {
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
		});

	}

	export interface UpdateSolFunctionPackageInput {

		/** Required */
		operationalState: OperationalState;
	}
	export interface UpdateSolFunctionPackageInputFormProperties {

		/** Required */
		operationalState: FormControl<OperationalState | null | undefined>,
	}
	export function CreateUpdateSolFunctionPackageInputFormGroup() {
		return new FormGroup<UpdateSolFunctionPackageInputFormProperties>({
			operationalState: new FormControl<OperationalState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Information parameters and/or the configurable properties for a network function.</p> <p>A network function instance is a function in a function package .</p> */
	export interface UpdateSolNetworkModify {

		/** Required */
		vnfConfigurableProperties: Document;

		/** Required */
		vnfInstanceId: string;
	}

	/** <p>Information parameters and/or the configurable properties for a network function.</p> <p>A network function instance is a function in a function package .</p> */
	export interface UpdateSolNetworkModifyFormProperties {

		/** Required */
		vnfInstanceId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSolNetworkModifyFormGroup() {
		return new FormGroup<UpdateSolNetworkModifyFormProperties>({
			vnfInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateSolNetworkType { MODIFY_VNF_INFORMATION = 'MODIFY_VNF_INFORMATION' }

	export interface UpdateSolNetworkInstanceInput {
		modifyVnfInfoData?: UpdateSolNetworkModify;
		tags?: TagMap;

		/** Required */
		updateType: UpdateSolNetworkType;
	}
	export interface UpdateSolNetworkInstanceInputFormProperties {

		/** Required */
		updateType: FormControl<UpdateSolNetworkType | null | undefined>,
	}
	export function CreateUpdateSolNetworkInstanceInputFormGroup() {
		return new FormGroup<UpdateSolNetworkInstanceInputFormProperties>({
			updateType: new FormControl<UpdateSolNetworkType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSolNetworkPackageInput {

		/** Required */
		nsdOperationalState: OperationalState;
	}
	export interface UpdateSolNetworkPackageInputFormProperties {

		/** Required */
		nsdOperationalState: FormControl<OperationalState | null | undefined>,
	}
	export function CreateUpdateSolNetworkPackageInputFormGroup() {
		return new FormGroup<UpdateSolNetworkPackageInputFormProperties>({
			nsdOperationalState: new FormControl<OperationalState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidateSolFunctionPackageContentInput {

		/** Required */
		file: string;
	}
	export interface ValidateSolFunctionPackageContentInputFormProperties {

		/** Required */
		file: FormControl<string | null | undefined>,
	}
	export function CreateValidateSolFunctionPackageContentInputFormGroup() {
		return new FormGroup<ValidateSolFunctionPackageContentInputFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidateSolNetworkPackageContentInput {

		/** Required */
		file: string;
	}
	export interface ValidateSolNetworkPackageContentInputFormProperties {

		/** Required */
		file: FormControl<string | null | undefined>,
	}
	export function CreateValidateSolNetworkPackageContentInputFormGroup() {
		return new FormGroup<ValidateSolNetworkPackageContentInputFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Cancels a network operation.</p> <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
		 * Post sol/nslcm/v1/ns_lcm_op_occs/{nsLcmOpOccId}/cancel
		 * @param {string} nsLcmOpOccId The identifier of the network operation.
		 * @return {void} 
		 */
		CancelSolNetworkOperation(nsLcmOpOccId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sol/nslcm/v1/ns_lcm_op_occs/' + (nsLcmOpOccId == null ? '' : encodeURIComponent(nsLcmOpOccId)) + '/cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a function package.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network. For more information, see <a href="https://docs.aws.amazon.com/tnb/latest/ug/function-packages.html">Function packages</a> in the <i>Amazon Web Services Telco Network Builder User Guide</i>. </p> <p>Creating a function package is the first step for creating a network in AWS TNB. This request creates an empty container with an ID. The next step is to upload the actual CSAR zip file into that empty container. To upload function package content, see <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_PutSolFunctionPackageContent.html">PutSolFunctionPackageContent</a>.</p>
		 * Post sol/vnfpkgm/v1/vnf_packages
		 * @return {void} 
		 */
		CreateSolFunctionPackage(requestBody: CreateSolFunctionPackagePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sol/vnfpkgm/v1/vnf_packages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists information about function packages.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
		 * Get sol/vnfpkgm/v1/vnf_packages
		 * @param {number} max_results The maximum number of results to include in the response.
		 * @param {string} nextpage_opaque_marker The token for the next page of results.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSolFunctionPackagesOutput} Success
		 */
		ListSolFunctionPackages(max_results: number | null | undefined, nextpage_opaque_marker: string | null | undefined, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<ListSolFunctionPackagesOutput> {
			return this.http.get<ListSolFunctionPackagesOutput>(this.baseUri + 'sol/vnfpkgm/v1/vnf_packages?max_results=' + max_results + '&nextpage_opaque_marker=' + (nextpage_opaque_marker == null ? '' : encodeURIComponent(nextpage_opaque_marker)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a network instance.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed. Creating a network instance is the third step after creating a network package. For more information about network instances, <a href="https://docs.aws.amazon.com/tnb/latest/ug/network-instances.html">Network instances</a> in the <i>Amazon Web Services Telco Network Builder User Guide</i>.</p> <p>Once you create a network instance, you can instantiate it. To instantiate a network, see <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_InstantiateSolNetworkInstance.html">InstantiateSolNetworkInstance</a>.</p>
		 * Post sol/nslcm/v1/ns_instances
		 * @return {void} 
		 */
		CreateSolNetworkInstance(requestBody: CreateSolNetworkInstancePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sol/nslcm/v1/ns_instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists your network instances.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
		 * Get sol/nslcm/v1/ns_instances
		 * @param {number} max_results The maximum number of results to include in the response.
		 * @param {string} nextpage_opaque_marker The token for the next page of results.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSolNetworkInstancesOutput} Success
		 */
		ListSolNetworkInstances(max_results: number | null | undefined, nextpage_opaque_marker: string | null | undefined, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<ListSolNetworkInstancesOutput> {
			return this.http.get<ListSolNetworkInstancesOutput>(this.baseUri + 'sol/nslcm/v1/ns_instances?max_results=' + max_results + '&nextpage_opaque_marker=' + (nextpage_opaque_marker == null ? '' : encodeURIComponent(nextpage_opaque_marker)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on. For more information, see <a href="https://docs.aws.amazon.com/tnb/latest/ug/network-instances.html">Network instances</a> in the <i>Amazon Web Services Telco Network Builder User Guide</i>. </p> <p>A network package consists of a network service descriptor (NSD) file (required) and any additional files (optional), such as scripts specific to your needs. For example, if you have multiple function packages in your network package, you can use the NSD to define which network functions should run in certain VPCs, subnets, or EKS clusters.</p> <p>This request creates an empty network package container with an ID. Once you create a network package, you can upload the network package content using <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_PutSolNetworkPackageContent.html">PutSolNetworkPackageContent</a>.</p>
		 * Post sol/nsd/v1/ns_descriptors
		 * @return {void} 
		 */
		CreateSolNetworkPackage(requestBody: CreateSolNetworkPackagePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sol/nsd/v1/ns_descriptors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists network packages.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
		 * Get sol/nsd/v1/ns_descriptors
		 * @param {number} max_results The maximum number of results to include in the response.
		 * @param {string} nextpage_opaque_marker The token for the next page of results.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSolNetworkPackagesOutput} Success
		 */
		ListSolNetworkPackages(max_results: number | null | undefined, nextpage_opaque_marker: string | null | undefined, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<ListSolNetworkPackagesOutput> {
			return this.http.get<ListSolNetworkPackagesOutput>(this.baseUri + 'sol/nsd/v1/ns_descriptors?max_results=' + max_results + '&nextpage_opaque_marker=' + (nextpage_opaque_marker == null ? '' : encodeURIComponent(nextpage_opaque_marker)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Deletes a function package.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p> <p>To delete a function package, the package must be in a disabled state. To disable a function package, see <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_UpdateSolFunctionPackage.html">UpdateSolFunctionPackage</a>. </p>
		 * Delete sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}
		 * @param {string} vnfPkgId ID of the function package.
		 * @return {void} 
		 */
		DeleteSolFunctionPackage(vnfPkgId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sol/vnfpkgm/v1/vnf_packages/' + (vnfPkgId == null ? '' : encodeURIComponent(vnfPkgId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the details of an individual function package, such as the operational state and whether the package is in use.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network..</p>
		 * Get sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}
		 * @param {string} vnfPkgId ID of the function package.
		 * @return {GetSolFunctionPackageOutput} Success
		 */
		GetSolFunctionPackage(vnfPkgId: string): Observable<GetSolFunctionPackageOutput> {
			return this.http.get<GetSolFunctionPackageOutput>(this.baseUri + 'sol/vnfpkgm/v1/vnf_packages/' + (vnfPkgId == null ? '' : encodeURIComponent(vnfPkgId)), {});
		}

		/**
		 * <p>Updates the operational state of function package.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
		 * Patch sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}
		 * @param {string} vnfPkgId ID of the function package.
		 * @return {UpdateSolFunctionPackageOutput} Success
		 */
		UpdateSolFunctionPackage(vnfPkgId: string, requestBody: UpdateSolFunctionPackagePatchBody): Observable<UpdateSolFunctionPackageOutput> {
			return this.http.patch<UpdateSolFunctionPackageOutput>(this.baseUri + 'sol/vnfpkgm/v1/vnf_packages/' + (vnfPkgId == null ? '' : encodeURIComponent(vnfPkgId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a network instance.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> <p>To delete a network instance, the instance must be in a stopped or terminated state. To terminate a network instance, see <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_TerminateSolNetworkInstance.html">TerminateSolNetworkInstance</a>.</p>
		 * Delete sol/nslcm/v1/ns_instances/{nsInstanceId}
		 * @param {string} nsInstanceId Network instance ID.
		 * @return {void} 
		 */
		DeleteSolNetworkInstance(nsInstanceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sol/nslcm/v1/ns_instances/' + (nsInstanceId == null ? '' : encodeURIComponent(nsInstanceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the details of the network instance.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
		 * Get sol/nslcm/v1/ns_instances/{nsInstanceId}
		 * @param {string} nsInstanceId ID of the network instance.
		 * @return {GetSolNetworkInstanceOutput} Success
		 */
		GetSolNetworkInstance(nsInstanceId: string): Observable<GetSolNetworkInstanceOutput> {
			return this.http.get<GetSolNetworkInstanceOutput>(this.baseUri + 'sol/nslcm/v1/ns_instances/' + (nsInstanceId == null ? '' : encodeURIComponent(nsInstanceId)), {});
		}

		/**
		 * <p>Deletes network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p> <p>To delete a network package, the package must be in a disable state. To disable a network package, see <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_UpdateSolNetworkPackage.html">UpdateSolNetworkPackage</a>.</p>
		 * Delete sol/nsd/v1/ns_descriptors/{nsdInfoId}
		 * @param {string} nsdInfoId ID of the network service descriptor in the network package.
		 * @return {void} 
		 */
		DeleteSolNetworkPackage(nsdInfoId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sol/nsd/v1/ns_descriptors/' + (nsdInfoId == null ? '' : encodeURIComponent(nsdInfoId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the details of a network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
		 * Get sol/nsd/v1/ns_descriptors/{nsdInfoId}
		 * @param {string} nsdInfoId ID of the network service descriptor in the network package.
		 * @return {GetSolNetworkPackageOutput} Success
		 */
		GetSolNetworkPackage(nsdInfoId: string): Observable<GetSolNetworkPackageOutput> {
			return this.http.get<GetSolNetworkPackageOutput>(this.baseUri + 'sol/nsd/v1/ns_descriptors/' + (nsdInfoId == null ? '' : encodeURIComponent(nsdInfoId)), {});
		}

		/**
		 * <p>Updates the operational state of a network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p> <p>A network service descriptor is a .yaml file in a network package that uses the TOSCA standard to describe the network functions you want to deploy and the Amazon Web Services infrastructure you want to deploy the network functions on.</p>
		 * Patch sol/nsd/v1/ns_descriptors/{nsdInfoId}
		 * @param {string} nsdInfoId ID of the network service descriptor in the network package.
		 * @return {UpdateSolNetworkPackageOutput} Success
		 */
		UpdateSolNetworkPackage(nsdInfoId: string, requestBody: UpdateSolNetworkPackagePatchBody): Observable<UpdateSolNetworkPackageOutput> {
			return this.http.patch<UpdateSolNetworkPackageOutput>(this.baseUri + 'sol/nsd/v1/ns_descriptors/' + (nsdInfoId == null ? '' : encodeURIComponent(nsdInfoId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the details of a network function instance, including the instantation state and metadata from the function package descriptor in the network function package.</p> <p>A network function instance is a function in a function package .</p>
		 * Get sol/vnflcm/v1/vnf_instances/{vnfInstanceId}
		 * @param {string} vnfInstanceId ID of the network function.
		 * @return {GetSolFunctionInstanceOutput} Success
		 */
		GetSolFunctionInstance(vnfInstanceId: string): Observable<GetSolFunctionInstanceOutput> {
			return this.http.get<GetSolFunctionInstanceOutput>(this.baseUri + 'sol/vnflcm/v1/vnf_instances/' + (vnfInstanceId == null ? '' : encodeURIComponent(vnfInstanceId)), {});
		}

		/**
		 * <p>Gets the contents of a function package.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
		 * Get sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content#Accept
		 * @param {string} vnfPkgId ID of the function package.
		 * @return {GetSolFunctionPackageContentOutput} Success
		 */
		GetSolFunctionPackageContent(vnfPkgId: string): Observable<GetSolFunctionPackageContentOutput> {
			return this.http.get<GetSolFunctionPackageContentOutput>(this.baseUri + 'sol/vnfpkgm/v1/vnf_packages/' + (vnfPkgId == null ? '' : encodeURIComponent(vnfPkgId)) + '/package_content#Accept', {});
		}

		/**
		 * <p>Gets a function package descriptor in a function package.</p> <p>A function package descriptor is a .yaml file in a function package that uses the TOSCA standard to describe how the network function in the function package should run on your network.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
		 * Get sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/vnfd#Accept
		 * @param {string} vnfPkgId ID of the function package.
		 * @return {GetSolFunctionPackageDescriptorOutput} Success
		 */
		GetSolFunctionPackageDescriptor(vnfPkgId: string): Observable<GetSolFunctionPackageDescriptorOutput> {
			return this.http.get<GetSolFunctionPackageDescriptorOutput>(this.baseUri + 'sol/vnfpkgm/v1/vnf_packages/' + (vnfPkgId == null ? '' : encodeURIComponent(vnfPkgId)) + '/vnfd#Accept', {});
		}

		/**
		 * <p>Gets the details of a network operation, including the tasks involved in the network operation and the status of the tasks.</p> <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
		 * Get sol/nslcm/v1/ns_lcm_op_occs/{nsLcmOpOccId}
		 * @param {string} nsLcmOpOccId The identifier of the network operation.
		 * @return {GetSolNetworkOperationOutput} Success
		 */
		GetSolNetworkOperation(nsLcmOpOccId: string): Observable<GetSolNetworkOperationOutput> {
			return this.http.get<GetSolNetworkOperationOutput>(this.baseUri + 'sol/nslcm/v1/ns_lcm_op_occs/' + (nsLcmOpOccId == null ? '' : encodeURIComponent(nsLcmOpOccId)), {});
		}

		/**
		 * <p>Gets the contents of a network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
		 * Get sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content#Accept
		 * @param {string} nsdInfoId ID of the network service descriptor in the network package.
		 * @return {GetSolNetworkPackageContentOutput} Success
		 */
		GetSolNetworkPackageContent(nsdInfoId: string): Observable<GetSolNetworkPackageContentOutput> {
			return this.http.get<GetSolNetworkPackageContentOutput>(this.baseUri + 'sol/nsd/v1/ns_descriptors/' + (nsdInfoId == null ? '' : encodeURIComponent(nsdInfoId)) + '/nsd_content#Accept', {});
		}

		/**
		 * <p>Gets the content of the network service descriptor.</p> <p>A network service descriptor is a .yaml file in a network package that uses the TOSCA standard to describe the network functions you want to deploy and the Amazon Web Services infrastructure you want to deploy the network functions on.</p>
		 * Get sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd
		 * @param {string} nsdInfoId ID of the network service descriptor in the network package.
		 * @return {GetSolNetworkPackageDescriptorOutput} Success
		 */
		GetSolNetworkPackageDescriptor(nsdInfoId: string): Observable<GetSolNetworkPackageDescriptorOutput> {
			return this.http.get<GetSolNetworkPackageDescriptorOutput>(this.baseUri + 'sol/nsd/v1/ns_descriptors/' + (nsdInfoId == null ? '' : encodeURIComponent(nsdInfoId)) + '/nsd', {});
		}

		/**
		 * <p>Instantiates a network instance.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> <p>Before you can instantiate a network instance, you have to create a network instance. For more information, see <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_CreateSolNetworkInstance.html">CreateSolNetworkInstance</a>.</p>
		 * Post sol/nslcm/v1/ns_instances/{nsInstanceId}/instantiate
		 * @param {boolean} dry_run A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
		 * @param {string} nsInstanceId ID of the network instance.
		 * @return {void} 
		 */
		InstantiateSolNetworkInstance(dry_run: boolean | null | undefined, nsInstanceId: string, requestBody: InstantiateSolNetworkInstancePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sol/nslcm/v1/ns_instances/' + (nsInstanceId == null ? '' : encodeURIComponent(nsInstanceId)) + '/instantiate?dry_run=' + dry_run, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists network function instances.</p> <p>A network function instance is a function in a function package .</p>
		 * Get sol/vnflcm/v1/vnf_instances
		 * @param {number} max_results The maximum number of results to include in the response.
		 * @param {string} nextpage_opaque_marker The token for the next page of results.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSolFunctionInstancesOutput} Success
		 */
		ListSolFunctionInstances(max_results: number | null | undefined, nextpage_opaque_marker: string | null | undefined, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<ListSolFunctionInstancesOutput> {
			return this.http.get<ListSolFunctionInstancesOutput>(this.baseUri + 'sol/vnflcm/v1/vnf_instances?max_results=' + max_results + '&nextpage_opaque_marker=' + (nextpage_opaque_marker == null ? '' : encodeURIComponent(nextpage_opaque_marker)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Lists details for a network operation, including when the operation started and the status of the operation.</p> <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
		 * Get sol/nslcm/v1/ns_lcm_op_occs
		 * @param {number} max_results The maximum number of results to include in the response.
		 * @param {string} nextpage_opaque_marker The token for the next page of results.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSolNetworkOperationsOutput} Success
		 */
		ListSolNetworkOperations(max_results: number | null | undefined, nextpage_opaque_marker: string | null | undefined, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<ListSolNetworkOperationsOutput> {
			return this.http.get<ListSolNetworkOperationsOutput>(this.baseUri + 'sol/nslcm/v1/ns_lcm_op_occs?max_results=' + max_results + '&nextpage_opaque_marker=' + (nextpage_opaque_marker == null ? '' : encodeURIComponent(nextpage_opaque_marker)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists tags for AWS TNB resources.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn Resource ARN.
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceOutput> {
			return this.http.get<ListTagsForResourceOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Tags an AWS TNB resource.</p> <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn Resource ARN.
		 * @return {TagResourceOutput} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Uploads the contents of a function package.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
		 * Put sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content
		 * @param {string} vnfPkgId Function package ID.
		 * @return {void} 
		 */
		PutSolFunctionPackageContent(vnfPkgId: string, requestBody: PutSolFunctionPackageContentPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sol/vnfpkgm/v1/vnf_packages/' + (vnfPkgId == null ? '' : encodeURIComponent(vnfPkgId)) + '/package_content', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Uploads the contents of a network package.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
		 * Put sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content
		 * @param {string} nsdInfoId Network service descriptor info ID.
		 * @return {PutSolNetworkPackageContentOutput} Success
		 */
		PutSolNetworkPackageContent(nsdInfoId: string, requestBody: PutSolNetworkPackageContentPutBody): Observable<PutSolNetworkPackageContentOutput> {
			return this.http.put<PutSolNetworkPackageContentOutput>(this.baseUri + 'sol/nsd/v1/ns_descriptors/' + (nsdInfoId == null ? '' : encodeURIComponent(nsdInfoId)) + '/nsd_content', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Terminates a network instance.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p> <p>You must terminate a network instance before you can delete it.</p>
		 * Post sol/nslcm/v1/ns_instances/{nsInstanceId}/terminate
		 * @param {string} nsInstanceId ID of the network instance.
		 * @return {void} 
		 */
		TerminateSolNetworkInstance(nsInstanceId: string, requestBody: TerminateSolNetworkInstancePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sol/nslcm/v1/ns_instances/' + (nsInstanceId == null ? '' : encodeURIComponent(nsInstanceId)) + '/terminate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Untags an AWS TNB resource.</p> <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn Resource ARN.
		 * @param {Array<string>} tagKeys Tag keys.
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceOutput> {
			return this.http.delete<UntagResourceOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * <p>Update a network instance.</p> <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
		 * Post sol/nslcm/v1/ns_instances/{nsInstanceId}/update
		 * @param {string} nsInstanceId ID of the network instance.
		 * @return {void} 
		 */
		UpdateSolNetworkInstance(nsInstanceId: string, requestBody: UpdateSolNetworkInstancePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sol/nslcm/v1/ns_instances/' + (nsInstanceId == null ? '' : encodeURIComponent(nsInstanceId)) + '/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Validates function package content. This can be used as a dry run before uploading function package content with <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_PutSolFunctionPackageContent.html">PutSolFunctionPackageContent</a>.</p> <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
		 * Put sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content/validate
		 * @param {string} vnfPkgId Function package ID.
		 * @return {void} 
		 */
		ValidateSolFunctionPackageContent(vnfPkgId: string, requestBody: ValidateSolFunctionPackageContentPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sol/vnfpkgm/v1/vnf_packages/' + (vnfPkgId == null ? '' : encodeURIComponent(vnfPkgId)) + '/package_content/validate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Validates network package content. This can be used as a dry run before uploading network package content with <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_PutSolNetworkPackageContent.html">PutSolNetworkPackageContent</a>.</p> <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
		 * Put sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content/validate
		 * @param {string} nsdInfoId Network service descriptor file.
		 * @return {ValidateSolNetworkPackageContentOutput} Success
		 */
		ValidateSolNetworkPackageContent(nsdInfoId: string, requestBody: ValidateSolNetworkPackageContentPutBody): Observable<ValidateSolNetworkPackageContentOutput> {
			return this.http.put<ValidateSolNetworkPackageContentOutput>(this.baseUri + 'sol/nsd/v1/ns_descriptors/' + (nsdInfoId == null ? '' : encodeURIComponent(nsdInfoId)) + '/nsd_content/validate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateSolFunctionPackagePostBody {

		/** A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs. */
		tags?: {[id: string]: string };
	}
	export interface CreateSolFunctionPackagePostBodyFormProperties {

		/** A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSolFunctionPackagePostBodyFormGroup() {
		return new FormGroup<CreateSolFunctionPackagePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSolNetworkInstancePostBody {

		/**
		 * Network instance description.
		 * Max length: 255
		 * Min length: 0
		 */
		nsDescription?: string | null;

		/**
		 * Network instance name.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		nsName: string;

		/**
		 * ID for network service descriptor.
		 * Required
		 */
		nsdInfoId: string;

		/** A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs. */
		tags?: {[id: string]: string };
	}
	export interface CreateSolNetworkInstancePostBodyFormProperties {

		/**
		 * Network instance description.
		 * Max length: 255
		 * Min length: 0
		 */
		nsDescription: FormControl<string | null | undefined>,

		/**
		 * Network instance name.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		nsName: FormControl<string | null | undefined>,

		/**
		 * ID for network service descriptor.
		 * Required
		 */
		nsdInfoId: FormControl<string | null | undefined>,

		/** A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSolNetworkInstancePostBodyFormGroup() {
		return new FormGroup<CreateSolNetworkInstancePostBodyFormProperties>({
			nsDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			nsName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			nsdInfoId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^np-[a-f0-9]{17}$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSolNetworkPackagePostBody {

		/** A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs. */
		tags?: {[id: string]: string };
	}
	export interface CreateSolNetworkPackagePostBodyFormProperties {

		/** A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSolNetworkPackagePostBodyFormGroup() {
		return new FormGroup<CreateSolNetworkPackagePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateSolFunctionPackagePatchBody {

		/**
		 * Operational state of the function package.
		 * Required
		 */
		operationalState: OperationalState;
	}
	export interface UpdateSolFunctionPackagePatchBodyFormProperties {

		/**
		 * Operational state of the function package.
		 * Required
		 */
		operationalState: FormControl<OperationalState | null | undefined>,
	}
	export function CreateUpdateSolFunctionPackagePatchBodyFormGroup() {
		return new FormGroup<UpdateSolFunctionPackagePatchBodyFormProperties>({
			operationalState: new FormControl<OperationalState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSolNetworkPackagePatchBody {

		/**
		 * Operational state of the network service descriptor in the network package.
		 * Required
		 */
		nsdOperationalState: OperationalState;
	}
	export interface UpdateSolNetworkPackagePatchBodyFormProperties {

		/**
		 * Operational state of the network service descriptor in the network package.
		 * Required
		 */
		nsdOperationalState: FormControl<OperationalState | null | undefined>,
	}
	export function CreateUpdateSolNetworkPackagePatchBodyFormGroup() {
		return new FormGroup<UpdateSolNetworkPackagePatchBodyFormProperties>({
			nsdOperationalState: new FormControl<OperationalState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InstantiateSolNetworkInstancePostBody {

		/** Provides values for the configurable properties. */
		additionalParamsForNs?: string | null;

		/** A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs. */
		tags?: {[id: string]: string };
	}
	export interface InstantiateSolNetworkInstancePostBodyFormProperties {

		/** Provides values for the configurable properties. */
		additionalParamsForNs: FormControl<string | null | undefined>,

		/** A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateInstantiateSolNetworkInstancePostBodyFormGroup() {
		return new FormGroup<InstantiateSolNetworkInstancePostBodyFormProperties>({
			additionalParamsForNs: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutSolFunctionPackageContentPutBody {

		/**
		 * Function package file.
		 * Required
		 */
		file: string;
	}
	export interface PutSolFunctionPackageContentPutBodyFormProperties {

		/**
		 * Function package file.
		 * Required
		 */
		file: FormControl<string | null | undefined>,
	}
	export function CreatePutSolFunctionPackageContentPutBodyFormGroup() {
		return new FormGroup<PutSolFunctionPackageContentPutBodyFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutSolNetworkPackageContentPutBody {

		/**
		 * Network package file.
		 * Required
		 */
		file: string;
	}
	export interface PutSolNetworkPackageContentPutBodyFormProperties {

		/**
		 * Network package file.
		 * Required
		 */
		file: FormControl<string | null | undefined>,
	}
	export function CreatePutSolNetworkPackageContentPutBodyFormGroup() {
		return new FormGroup<PutSolNetworkPackageContentPutBodyFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TerminateSolNetworkInstancePostBody {

		/** A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs. */
		tags?: {[id: string]: string };
	}
	export interface TerminateSolNetworkInstancePostBodyFormProperties {

		/** A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTerminateSolNetworkInstancePostBodyFormGroup() {
		return new FormGroup<TerminateSolNetworkInstancePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateSolNetworkInstancePostBody {

		/** <p>Information parameters and/or the configurable properties for a network function.</p> <p>A network function instance is a function in a function package .</p> */
		modifyVnfInfoData?: UpdateSolNetworkInstancePostBodyModifyVnfInfoData;

		/** A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs. */
		tags?: {[id: string]: string };

		/**
		 * The type of update.
		 * Required
		 */
		updateType: UpdateSolNetworkType;
	}
	export interface UpdateSolNetworkInstancePostBodyFormProperties {

		/** A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The type of update.
		 * Required
		 */
		updateType: FormControl<UpdateSolNetworkType | null | undefined>,
	}
	export function CreateUpdateSolNetworkInstancePostBodyFormGroup() {
		return new FormGroup<UpdateSolNetworkInstancePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			updateType: new FormControl<UpdateSolNetworkType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSolNetworkInstancePostBodyModifyVnfInfoData {
		vnfConfigurableProperties?: Document;
		vnfInstanceId?: string;
	}
	export interface UpdateSolNetworkInstancePostBodyModifyVnfInfoDataFormProperties {
		vnfInstanceId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSolNetworkInstancePostBodyModifyVnfInfoDataFormGroup() {
		return new FormGroup<UpdateSolNetworkInstancePostBodyModifyVnfInfoDataFormProperties>({
			vnfInstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValidateSolFunctionPackageContentPutBody {

		/**
		 * Function package file.
		 * Required
		 */
		file: string;
	}
	export interface ValidateSolFunctionPackageContentPutBodyFormProperties {

		/**
		 * Function package file.
		 * Required
		 */
		file: FormControl<string | null | undefined>,
	}
	export function CreateValidateSolFunctionPackageContentPutBodyFormGroup() {
		return new FormGroup<ValidateSolFunctionPackageContentPutBodyFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidateSolNetworkPackageContentPutBody {

		/**
		 * Network package file.
		 * Required
		 */
		file: string;
	}
	export interface ValidateSolNetworkPackageContentPutBodyFormProperties {

		/**
		 * Network package file.
		 * Required
		 */
		file: FormControl<string | null | undefined>,
	}
	export function CreateValidateSolNetworkPackageContentPutBodyFormGroup() {
		return new FormGroup<ValidateSolNetworkPackageContentPutBodyFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

