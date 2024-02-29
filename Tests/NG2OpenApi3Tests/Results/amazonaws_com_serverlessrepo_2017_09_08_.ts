import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateApplicationResponse {
		ApplicationId?: string;
		Author?: string;
		CreationTime?: string;
		Description?: string;
		HomePageUrl?: string;
		IsVerifiedAuthor?: boolean | null;
		Labels?: Array<string>;
		LicenseUrl?: string;
		Name?: string;
		ReadmeUrl?: string;
		SpdxLicenseId?: string;
		VerifiedAuthorUrl?: string;
		Version?: Version;
	}
	export interface CreateApplicationResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Author: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		HomePageUrl: FormControl<string | null | undefined>,
		IsVerifiedAuthor: FormControl<boolean | null | undefined>,
		LicenseUrl: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ReadmeUrl: FormControl<string | null | undefined>,
		SpdxLicenseId: FormControl<string | null | undefined>,
		VerifiedAuthorUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationResponseFormGroup() {
		return new FormGroup<CreateApplicationResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Author: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			HomePageUrl: new FormControl<string | null | undefined>(undefined),
			IsVerifiedAuthor: new FormControl<boolean | null | undefined>(undefined),
			LicenseUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ReadmeUrl: new FormControl<string | null | undefined>(undefined),
			SpdxLicenseId: new FormControl<string | null | undefined>(undefined),
			VerifiedAuthorUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Application version details. */
	export interface Version {

		/** Required */
		ApplicationId: string;

		/** Required */
		CreationTime: string;

		/** Required */
		ParameterDefinitions: Array<ParameterDefinition>;

		/** Required */
		RequiredCapabilities: Array<Capability>;

		/** Required */
		ResourcesSupported: boolean;

		/** Required */
		SemanticVersion: string;
		SourceCodeArchiveUrl?: string;
		SourceCodeUrl?: string;

		/** Required */
		TemplateUrl: string;
	}

	/** Application version details. */
	export interface VersionFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<string | null | undefined>,

		/** Required */
		ResourcesSupported: FormControl<boolean | null | undefined>,

		/** Required */
		SemanticVersion: FormControl<string | null | undefined>,
		SourceCodeArchiveUrl: FormControl<string | null | undefined>,
		SourceCodeUrl: FormControl<string | null | undefined>,

		/** Required */
		TemplateUrl: FormControl<string | null | undefined>,
	}
	export function CreateVersionFormGroup() {
		return new FormGroup<VersionFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourcesSupported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			SemanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceCodeArchiveUrl: new FormControl<string | null | undefined>(undefined),
			SourceCodeUrl: new FormControl<string | null | undefined>(undefined),
			TemplateUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters supported by the application. */
	export interface ParameterDefinition {
		AllowedPattern?: string;
		AllowedValues?: Array<string>;
		ConstraintDescription?: string;
		DefaultValue?: string;
		Description?: string;
		MaxLength?: number | null;
		MaxValue?: number | null;
		MinLength?: number | null;
		MinValue?: number | null;

		/** Required */
		Name: string;
		NoEcho?: boolean | null;

		/** Required */
		ReferencedByResources: Array<string>;
		Type?: string;
	}

	/** Parameters supported by the application. */
	export interface ParameterDefinitionFormProperties {
		AllowedPattern: FormControl<string | null | undefined>,
		ConstraintDescription: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		MaxLength: FormControl<number | null | undefined>,
		MaxValue: FormControl<number | null | undefined>,
		MinLength: FormControl<number | null | undefined>,
		MinValue: FormControl<number | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		NoEcho: FormControl<boolean | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateParameterDefinitionFormGroup() {
		return new FormGroup<ParameterDefinitionFormProperties>({
			AllowedPattern: new FormControl<string | null | undefined>(undefined),
			ConstraintDescription: new FormControl<string | null | undefined>(undefined),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			MaxLength: new FormControl<number | null | undefined>(undefined),
			MaxValue: new FormControl<number | null | undefined>(undefined),
			MinLength: new FormControl<number | null | undefined>(undefined),
			MinValue: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NoEcho: new FormControl<boolean | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Values that must be specified in order to deploy some applications. */
	export enum Capability { CAPABILITY_IAM = 'CAPABILITY_IAM', CAPABILITY_NAMED_IAM = 'CAPABILITY_NAMED_IAM', CAPABILITY_AUTO_EXPAND = 'CAPABILITY_AUTO_EXPAND', CAPABILITY_RESOURCE_POLICY = 'CAPABILITY_RESOURCE_POLICY' }

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
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

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
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

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface CreateApplicationVersionResponse {
		ApplicationId?: string;
		CreationTime?: string;
		ParameterDefinitions?: Array<ParameterDefinition>;
		RequiredCapabilities?: Array<Capability>;
		ResourcesSupported?: boolean | null;
		SemanticVersion?: string;
		SourceCodeArchiveUrl?: string;
		SourceCodeUrl?: string;
		TemplateUrl?: string;
	}
	export interface CreateApplicationVersionResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
		ResourcesSupported: FormControl<boolean | null | undefined>,
		SemanticVersion: FormControl<string | null | undefined>,
		SourceCodeArchiveUrl: FormControl<string | null | undefined>,
		SourceCodeUrl: FormControl<string | null | undefined>,
		TemplateUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationVersionResponseFormGroup() {
		return new FormGroup<CreateApplicationVersionResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			ResourcesSupported: new FormControl<boolean | null | undefined>(undefined),
			SemanticVersion: new FormControl<string | null | undefined>(undefined),
			SourceCodeArchiveUrl: new FormControl<string | null | undefined>(undefined),
			SourceCodeUrl: new FormControl<string | null | undefined>(undefined),
			TemplateUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCloudFormationChangeSetResponse {
		ApplicationId?: string;
		ChangeSetId?: string;
		SemanticVersion?: string;
		StackId?: string;
	}
	export interface CreateCloudFormationChangeSetResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		ChangeSetId: FormControl<string | null | undefined>,
		SemanticVersion: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCloudFormationChangeSetResponseFormGroup() {
		return new FormGroup<CreateCloudFormationChangeSetResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			ChangeSetId: new FormControl<string | null | undefined>(undefined),
			SemanticVersion: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameter value of the application. */
	export interface ParameterValue {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/** Parameter value of the application. */
	export interface ParameterValueFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateParameterValueFormGroup() {
		return new FormGroup<ParameterValueFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger">RollbackTrigger</a>
	 *  </i> Data Type.
	 */
	export interface RollbackTrigger {

		/** Required */
		Arn: string;

		/** Required */
		Type: string;
	}

	/**
	 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger">RollbackTrigger</a>
	 *  </i> Data Type.
	 */
	export interface RollbackTriggerFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateRollbackTriggerFormGroup() {
		return new FormGroup<RollbackTriggerFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag">Tag</a>
	 *  </i> Data Type.
	 */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/**
	 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag">Tag</a>
	 *  </i> Data Type.
	 */
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

	export interface CreateCloudFormationTemplateResponse {
		ApplicationId?: string;
		CreationTime?: string;
		ExpirationTime?: string;
		SemanticVersion?: string;
		Status?: Status;
		TemplateId?: string;
		TemplateUrl?: string;
	}
	export interface CreateCloudFormationTemplateResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
		ExpirationTime: FormControl<string | null | undefined>,
		SemanticVersion: FormControl<string | null | undefined>,
		Status: FormControl<Status | null | undefined>,
		TemplateId: FormControl<string | null | undefined>,
		TemplateUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateCloudFormationTemplateResponseFormGroup() {
		return new FormGroup<CreateCloudFormationTemplateResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			ExpirationTime: new FormControl<string | null | undefined>(undefined),
			SemanticVersion: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
			TemplateId: new FormControl<string | null | undefined>(undefined),
			TemplateUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Status { PREPARING = 'PREPARING', ACTIVE = 'ACTIVE', EXPIRED = 'EXPIRED' }

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface GetApplicationResponse {
		ApplicationId?: string;
		Author?: string;
		CreationTime?: string;
		Description?: string;
		HomePageUrl?: string;
		IsVerifiedAuthor?: boolean | null;
		Labels?: Array<string>;
		LicenseUrl?: string;
		Name?: string;
		ReadmeUrl?: string;
		SpdxLicenseId?: string;
		VerifiedAuthorUrl?: string;
		Version?: Version;
	}
	export interface GetApplicationResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Author: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		HomePageUrl: FormControl<string | null | undefined>,
		IsVerifiedAuthor: FormControl<boolean | null | undefined>,
		LicenseUrl: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ReadmeUrl: FormControl<string | null | undefined>,
		SpdxLicenseId: FormControl<string | null | undefined>,
		VerifiedAuthorUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetApplicationResponseFormGroup() {
		return new FormGroup<GetApplicationResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Author: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			HomePageUrl: new FormControl<string | null | undefined>(undefined),
			IsVerifiedAuthor: new FormControl<boolean | null | undefined>(undefined),
			LicenseUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ReadmeUrl: new FormControl<string | null | undefined>(undefined),
			SpdxLicenseId: new FormControl<string | null | undefined>(undefined),
			VerifiedAuthorUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetApplicationPolicyResponse {
		Statements?: Array<ApplicationPolicyStatement>;
	}
	export interface GetApplicationPolicyResponseFormProperties {
	}
	export function CreateGetApplicationPolicyResponseFormGroup() {
		return new FormGroup<GetApplicationPolicyResponseFormProperties>({
		});

	}


	/** Policy statement applied to the application. */
	export interface ApplicationPolicyStatement {

		/** Required */
		Actions: Array<string>;
		PrincipalOrgIDs?: Array<string>;

		/** Required */
		Principals: Array<string>;
		StatementId?: string;
	}

	/** Policy statement applied to the application. */
	export interface ApplicationPolicyStatementFormProperties {
		StatementId: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPolicyStatementFormGroup() {
		return new FormGroup<ApplicationPolicyStatementFormProperties>({
			StatementId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCloudFormationTemplateResponse {
		ApplicationId?: string;
		CreationTime?: string;
		ExpirationTime?: string;
		SemanticVersion?: string;
		Status?: Status;
		TemplateId?: string;
		TemplateUrl?: string;
	}
	export interface GetCloudFormationTemplateResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
		ExpirationTime: FormControl<string | null | undefined>,
		SemanticVersion: FormControl<string | null | undefined>,
		Status: FormControl<Status | null | undefined>,
		TemplateId: FormControl<string | null | undefined>,
		TemplateUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetCloudFormationTemplateResponseFormGroup() {
		return new FormGroup<GetCloudFormationTemplateResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			ExpirationTime: new FormControl<string | null | undefined>(undefined),
			SemanticVersion: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
			TemplateId: new FormControl<string | null | undefined>(undefined),
			TemplateUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApplicationDependenciesResponse {
		Dependencies?: Array<ApplicationDependencySummary>;
		NextToken?: string;
	}
	export interface ListApplicationDependenciesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationDependenciesResponseFormGroup() {
		return new FormGroup<ListApplicationDependenciesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A nested application summary. */
	export interface ApplicationDependencySummary {

		/** Required */
		ApplicationId: string;

		/** Required */
		SemanticVersion: string;
	}

	/** A nested application summary. */
	export interface ApplicationDependencySummaryFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		SemanticVersion: FormControl<string | null | undefined>,
	}
	export function CreateApplicationDependencySummaryFormGroup() {
		return new FormGroup<ApplicationDependencySummaryFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SemanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListApplicationVersionsResponse {
		NextToken?: string;
		Versions?: Array<VersionSummary>;
	}
	export interface ListApplicationVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationVersionsResponseFormGroup() {
		return new FormGroup<ListApplicationVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An application version summary. */
	export interface VersionSummary {

		/** Required */
		ApplicationId: string;

		/** Required */
		CreationTime: string;

		/** Required */
		SemanticVersion: string;
		SourceCodeUrl?: string;
	}

	/** An application version summary. */
	export interface VersionSummaryFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<string | null | undefined>,

		/** Required */
		SemanticVersion: FormControl<string | null | undefined>,
		SourceCodeUrl: FormControl<string | null | undefined>,
	}
	export function CreateVersionSummaryFormGroup() {
		return new FormGroup<VersionSummaryFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SemanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceCodeUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApplicationsResponse {
		Applications?: Array<ApplicationSummary>;
		NextToken?: string;
	}
	export interface ListApplicationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsResponseFormGroup() {
		return new FormGroup<ListApplicationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of details about the application. */
	export interface ApplicationSummary {

		/** Required */
		ApplicationId: string;

		/** Required */
		Author: string;
		CreationTime?: string;

		/** Required */
		Description: string;
		HomePageUrl?: string;
		Labels?: Array<string>;

		/** Required */
		Name: string;
		SpdxLicenseId?: string;
	}

	/** Summary of details about the application. */
	export interface ApplicationSummaryFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		Author: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		HomePageUrl: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		SpdxLicenseId: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSummaryFormGroup() {
		return new FormGroup<ApplicationSummaryFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Author: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HomePageUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SpdxLicenseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutApplicationPolicyResponse {
		Statements?: Array<ApplicationPolicyStatement>;
	}
	export interface PutApplicationPolicyResponseFormProperties {
	}
	export function CreatePutApplicationPolicyResponseFormGroup() {
		return new FormGroup<PutApplicationPolicyResponseFormProperties>({
		});

	}

	export interface UpdateApplicationResponse {
		ApplicationId?: string;
		Author?: string;
		CreationTime?: string;
		Description?: string;
		HomePageUrl?: string;
		IsVerifiedAuthor?: boolean | null;
		Labels?: Array<string>;
		LicenseUrl?: string;
		Name?: string;
		ReadmeUrl?: string;
		SpdxLicenseId?: string;
		VerifiedAuthorUrl?: string;
		Version?: Version;
	}
	export interface UpdateApplicationResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Author: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		HomePageUrl: FormControl<string | null | undefined>,
		IsVerifiedAuthor: FormControl<boolean | null | undefined>,
		LicenseUrl: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ReadmeUrl: FormControl<string | null | undefined>,
		SpdxLicenseId: FormControl<string | null | undefined>,
		VerifiedAuthorUrl: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationResponseFormGroup() {
		return new FormGroup<UpdateApplicationResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Author: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			HomePageUrl: new FormControl<string | null | undefined>(undefined),
			IsVerifiedAuthor: new FormControl<boolean | null | undefined>(undefined),
			LicenseUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ReadmeUrl: new FormControl<string | null | undefined>(undefined),
			SpdxLicenseId: new FormControl<string | null | undefined>(undefined),
			VerifiedAuthorUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationRequest {

		/** Required */
		Author: string;

		/** Required */
		Description: string;
		HomePageUrl?: string;
		Labels?: Array<string>;
		LicenseBody?: string;
		LicenseUrl?: string;

		/** Required */
		Name: string;
		ReadmeBody?: string;
		ReadmeUrl?: string;
		SemanticVersion?: string;
		SourceCodeArchiveUrl?: string;
		SourceCodeUrl?: string;
		SpdxLicenseId?: string;
		TemplateBody?: string;
		TemplateUrl?: string;
	}
	export interface CreateApplicationRequestFormProperties {

		/** Required */
		Author: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		HomePageUrl: FormControl<string | null | undefined>,
		LicenseBody: FormControl<string | null | undefined>,
		LicenseUrl: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		ReadmeBody: FormControl<string | null | undefined>,
		ReadmeUrl: FormControl<string | null | undefined>,
		SemanticVersion: FormControl<string | null | undefined>,
		SourceCodeArchiveUrl: FormControl<string | null | undefined>,
		SourceCodeUrl: FormControl<string | null | undefined>,
		SpdxLicenseId: FormControl<string | null | undefined>,
		TemplateBody: FormControl<string | null | undefined>,
		TemplateUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			Author: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HomePageUrl: new FormControl<string | null | undefined>(undefined),
			LicenseBody: new FormControl<string | null | undefined>(undefined),
			LicenseUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReadmeBody: new FormControl<string | null | undefined>(undefined),
			ReadmeUrl: new FormControl<string | null | undefined>(undefined),
			SemanticVersion: new FormControl<string | null | undefined>(undefined),
			SourceCodeArchiveUrl: new FormControl<string | null | undefined>(undefined),
			SourceCodeUrl: new FormControl<string | null | undefined>(undefined),
			SpdxLicenseId: new FormControl<string | null | undefined>(undefined),
			TemplateBody: new FormControl<string | null | undefined>(undefined),
			TemplateUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationVersionRequest {
		SourceCodeArchiveUrl?: string;
		SourceCodeUrl?: string;
		TemplateBody?: string;
		TemplateUrl?: string;
	}
	export interface CreateApplicationVersionRequestFormProperties {
		SourceCodeArchiveUrl: FormControl<string | null | undefined>,
		SourceCodeUrl: FormControl<string | null | undefined>,
		TemplateBody: FormControl<string | null | undefined>,
		TemplateUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationVersionRequestFormGroup() {
		return new FormGroup<CreateApplicationVersionRequestFormProperties>({
			SourceCodeArchiveUrl: new FormControl<string | null | undefined>(undefined),
			SourceCodeUrl: new FormControl<string | null | undefined>(undefined),
			TemplateBody: new FormControl<string | null | undefined>(undefined),
			TemplateUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
	 *  </i> Data Type.
	 */
	export interface RollbackConfiguration {
		MonitoringTimeInMinutes?: number | null;
		RollbackTriggers?: Array<RollbackTrigger>;
	}

	/**
	 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
	 *  </i> Data Type.
	 */
	export interface RollbackConfigurationFormProperties {
		MonitoringTimeInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateRollbackConfigurationFormGroup() {
		return new FormGroup<RollbackConfigurationFormProperties>({
			MonitoringTimeInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateCloudFormationChangeSetRequest {
		Capabilities?: Array<string>;
		ChangeSetName?: string;
		ClientToken?: string;
		Description?: string;
		NotificationArns?: Array<string>;
		ParameterOverrides?: Array<ParameterValue>;
		ResourceTypes?: Array<string>;
		RollbackConfiguration?: RollbackConfiguration;
		SemanticVersion?: string;

		/** Required */
		StackName: string;
		Tags?: Array<Tag>;
		TemplateId?: string;
	}
	export interface CreateCloudFormationChangeSetRequestFormProperties {
		ChangeSetName: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		SemanticVersion: FormControl<string | null | undefined>,

		/** Required */
		StackName: FormControl<string | null | undefined>,
		TemplateId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCloudFormationChangeSetRequestFormGroup() {
		return new FormGroup<CreateCloudFormationChangeSetRequestFormProperties>({
			ChangeSetName: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			SemanticVersion: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCloudFormationTemplateRequest {
		SemanticVersion?: string;
	}
	export interface CreateCloudFormationTemplateRequestFormProperties {
		SemanticVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateCloudFormationTemplateRequestFormGroup() {
		return new FormGroup<CreateCloudFormationTemplateRequestFormProperties>({
			SemanticVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteApplicationRequest {
	}
	export interface DeleteApplicationRequestFormProperties {
	}
	export function CreateDeleteApplicationRequestFormGroup() {
		return new FormGroup<DeleteApplicationRequestFormProperties>({
		});

	}

	export interface GetApplicationPolicyRequest {
	}
	export interface GetApplicationPolicyRequestFormProperties {
	}
	export function CreateGetApplicationPolicyRequestFormGroup() {
		return new FormGroup<GetApplicationPolicyRequestFormProperties>({
		});

	}

	export interface GetApplicationRequest {
	}
	export interface GetApplicationRequestFormProperties {
	}
	export function CreateGetApplicationRequestFormGroup() {
		return new FormGroup<GetApplicationRequestFormProperties>({
		});

	}

	export interface GetCloudFormationTemplateRequest {
	}
	export interface GetCloudFormationTemplateRequestFormProperties {
	}
	export function CreateGetCloudFormationTemplateRequestFormGroup() {
		return new FormGroup<GetCloudFormationTemplateRequestFormProperties>({
		});

	}

	export interface ListApplicationDependenciesRequest {
	}
	export interface ListApplicationDependenciesRequestFormProperties {
	}
	export function CreateListApplicationDependenciesRequestFormGroup() {
		return new FormGroup<ListApplicationDependenciesRequestFormProperties>({
		});

	}

	export interface ListApplicationVersionsRequest {
	}
	export interface ListApplicationVersionsRequestFormProperties {
	}
	export function CreateListApplicationVersionsRequestFormGroup() {
		return new FormGroup<ListApplicationVersionsRequestFormProperties>({
		});

	}

	export interface ListApplicationsRequest {
	}
	export interface ListApplicationsRequestFormProperties {
	}
	export function CreateListApplicationsRequestFormGroup() {
		return new FormGroup<ListApplicationsRequestFormProperties>({
		});

	}

	export interface PutApplicationPolicyRequest {

		/** Required */
		Statements: Array<ApplicationPolicyStatement>;
	}
	export interface PutApplicationPolicyRequestFormProperties {
	}
	export function CreatePutApplicationPolicyRequestFormGroup() {
		return new FormGroup<PutApplicationPolicyRequestFormProperties>({
		});

	}

	export interface UnshareApplicationRequest {

		/** Required */
		OrganizationId: string;
	}
	export interface UnshareApplicationRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateUnshareApplicationRequestFormGroup() {
		return new FormGroup<UnshareApplicationRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateApplicationRequest {
		Author?: string;
		Description?: string;
		HomePageUrl?: string;
		Labels?: Array<string>;
		ReadmeBody?: string;
		ReadmeUrl?: string;
	}
	export interface UpdateApplicationRequestFormProperties {
		Author: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		HomePageUrl: FormControl<string | null | undefined>,
		ReadmeBody: FormControl<string | null | undefined>,
		ReadmeUrl: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationRequestFormGroup() {
		return new FormGroup<UpdateApplicationRequestFormProperties>({
			Author: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			HomePageUrl: new FormControl<string | null | undefined>(undefined),
			ReadmeBody: new FormControl<string | null | undefined>(undefined),
			ReadmeUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an application, optionally including an AWS SAM file to create the first application version in the same call.
		 * Post applications
		 * @return {void} 
		 */
		CreateApplication(requestBody: CreateApplicationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists applications owned by the requester.
		 * Get applications
		 * @param {number} maxItems The total number of items to return.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken A token to specify where to start paginating.
		 * @param {string} MaxItems Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(maxItems: number | null | undefined, nextToken: string | null | undefined, MaxItems: string | null | undefined, NextToken: string | null | undefined): Observable<ListApplicationsResponse> {
			return this.http.get<ListApplicationsResponse>(this.baseUri + 'applications?maxItems=' + maxItems + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates an application version.
		 * Put applications/{applicationId}/versions/{semanticVersion}
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {string} semanticVersion The semantic version of the new version.
		 * @return {void} 
		 */
		CreateApplicationVersion(applicationId: string, semanticVersion: string, requestBody: CreateApplicationVersionPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/versions/' + (semanticVersion == null ? '' : encodeURIComponent(semanticVersion)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an AWS CloudFormation change set for the given application.
		 * Post applications/{applicationId}/changesets
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {void} 
		 */
		CreateCloudFormationChangeSet(applicationId: string, requestBody: CreateCloudFormationChangeSetPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/changesets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an AWS CloudFormation template.
		 * Post applications/{applicationId}/templates
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {void} 
		 */
		CreateCloudFormationTemplate(applicationId: string, requestBody: CreateCloudFormationTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified application.
		 * Delete applications/{applicationId}
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {void} 
		 */
		DeleteApplication(applicationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified application.
		 * Get applications/{applicationId}
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {string} semanticVersion The semantic version of the application to get.
		 * @return {GetApplicationResponse} Success
		 */
		GetApplication(applicationId: string, semanticVersion: string | null | undefined): Observable<GetApplicationResponse> {
			return this.http.get<GetApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&semanticVersion=' + (semanticVersion == null ? '' : encodeURIComponent(semanticVersion)), {});
		}

		/**
		 * Updates the specified application.
		 * Patch applications/{applicationId}
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {UpdateApplicationResponse} Success
		 */
		UpdateApplication(applicationId: string, requestBody: UpdateApplicationPatchBody): Observable<UpdateApplicationResponse> {
			return this.http.patch<UpdateApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the policy for the application.
		 * Get applications/{applicationId}/policy
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {GetApplicationPolicyResponse} Success
		 */
		GetApplicationPolicy(applicationId: string): Observable<GetApplicationPolicyResponse> {
			return this.http.get<GetApplicationPolicyResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/policy', {});
		}

		/**
		 * Sets the permission policy for an application. For the list of actions supported for this operation, see
		 * <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application
		 * Permissions</a>
		 * .
		 * Put applications/{applicationId}/policy
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {PutApplicationPolicyResponse} Success
		 */
		PutApplicationPolicy(applicationId: string, requestBody: PutApplicationPolicyPutBody): Observable<PutApplicationPolicyResponse> {
			return this.http.put<PutApplicationPolicyResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the specified AWS CloudFormation template.
		 * Get applications/{applicationId}/templates/{templateId}
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {string} templateId <p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p>
		 * @return {GetCloudFormationTemplateResponse} Success
		 */
		GetCloudFormationTemplate(applicationId: string, templateId: string): Observable<GetCloudFormationTemplateResponse> {
			return this.http.get<GetCloudFormationTemplateResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/templates/' + (templateId == null ? '' : encodeURIComponent(templateId)), {});
		}

		/**
		 * Retrieves the list of applications nested in the containing application.
		 * Get applications/{applicationId}/dependencies
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {number} maxItems The total number of items to return.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken A token to specify where to start paginating.
		 * @param {string} semanticVersion The semantic version of the application to get.
		 * @param {string} MaxItems Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationDependenciesResponse} Success
		 */
		ListApplicationDependencies(applicationId: string, maxItems: number | null | undefined, nextToken: string | null | undefined, semanticVersion: string | null | undefined, MaxItems: string | null | undefined, NextToken: string | null | undefined): Observable<ListApplicationDependenciesResponse> {
			return this.http.get<ListApplicationDependenciesResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/dependencies&maxItems=' + maxItems + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&semanticVersion=' + (semanticVersion == null ? '' : encodeURIComponent(semanticVersion)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists versions for the specified application.
		 * Get applications/{applicationId}/versions
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @param {number} maxItems The total number of items to return.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken A token to specify where to start paginating.
		 * @param {string} MaxItems Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationVersionsResponse} Success
		 */
		ListApplicationVersions(applicationId: string, maxItems: number | null | undefined, nextToken: string | null | undefined, MaxItems: string | null | undefined, NextToken: string | null | undefined): Observable<ListApplicationVersionsResponse> {
			return this.http.get<ListApplicationVersionsResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/versions&maxItems=' + maxItems + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Unshares an application from an AWS Organization.</p><p>This operation can be called only from the organization's master account.</p>
		 * Post applications/{applicationId}/unshare
		 * @param {string} applicationId The Amazon Resource Name (ARN) of the application.
		 * @return {void} 
		 */
		UnshareApplication(applicationId: string, requestBody: UnshareApplicationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/unshare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateApplicationPostBody {

		/**
		 * <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>
		 * Required
		 */
		author: string;

		/**
		 * <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>
		 * Required
		 */
		description: string;

		/** A URL with more information about the application, for example the location of your GitHub repository for the application. */
		homePageUrl?: string | null;

		/** <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p> */
		labels?: Array<string>;

		/**
		 * <p>A local text file that contains the license of the app that matches the spdxLicenseID value of your application.
		 * The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p>
		 */
		licenseBody?: string | null;

		/** <p>A link to the S3 object that contains the license of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p> */
		licenseUrl?: string | null;

		/**
		 * <p>The name of the application that you want to publish.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\-]+";</p>
		 * Required
		 */
		name: string;

		/**
		 * <p>A local text readme file in Markdown language that contains a more detailed description of the application and how it works.
		 * The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p>
		 */
		readmeBody?: string | null;

		/** <p>A link to the S3 object in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p> */
		readmeUrl?: string | null;

		/**
		 * <p>The semantic version of the application:</p><p>
		 * <a href="https://semver.org/">https://semver.org/</a>
		 * </p>
		 */
		semanticVersion?: string | null;

		/** <p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p> */
		sourceCodeArchiveUrl?: string | null;

		/** A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit. */
		sourceCodeUrl?: string | null;

		/** A valid identifier from <a href="https://spdx.org/licenses/">https://spdx.org/licenses/</a>. */
		spdxLicenseId?: string | null;

		/**
		 * <p>The local raw packaged AWS SAM template file of your application.
		 * The file has the format file://&lt;path>/&lt;filename>.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p>
		 */
		templateBody?: string | null;

		/** <p>A link to the S3 object containing the packaged AWS SAM template of your application.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p> */
		templateUrl?: string | null;
	}
	export interface CreateApplicationPostBodyFormProperties {

		/**
		 * <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>
		 * Required
		 */
		author: FormControl<string | null | undefined>,

		/**
		 * <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/** A URL with more information about the application, for example the location of your GitHub repository for the application. */
		homePageUrl: FormControl<string | null | undefined>,

		/**
		 * <p>A local text file that contains the license of the app that matches the spdxLicenseID value of your application.
		 * The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p>
		 */
		licenseBody: FormControl<string | null | undefined>,

		/** <p>A link to the S3 object that contains the license of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p> */
		licenseUrl: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the application that you want to publish.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\-]+";</p>
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * <p>A local text readme file in Markdown language that contains a more detailed description of the application and how it works.
		 * The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p>
		 */
		readmeBody: FormControl<string | null | undefined>,

		/** <p>A link to the S3 object in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p> */
		readmeUrl: FormControl<string | null | undefined>,

		/**
		 * <p>The semantic version of the application:</p><p>
		 * <a href="https://semver.org/">https://semver.org/</a>
		 * </p>
		 */
		semanticVersion: FormControl<string | null | undefined>,

		/** <p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p> */
		sourceCodeArchiveUrl: FormControl<string | null | undefined>,

		/** A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit. */
		sourceCodeUrl: FormControl<string | null | undefined>,

		/** A valid identifier from <a href="https://spdx.org/licenses/">https://spdx.org/licenses/</a>. */
		spdxLicenseId: FormControl<string | null | undefined>,

		/**
		 * <p>The local raw packaged AWS SAM template file of your application.
		 * The file has the format file://&lt;path>/&lt;filename>.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p>
		 */
		templateBody: FormControl<string | null | undefined>,

		/** <p>A link to the S3 object containing the packaged AWS SAM template of your application.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p> */
		templateUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyFormGroup() {
		return new FormGroup<CreateApplicationPostBodyFormProperties>({
			author: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			homePageUrl: new FormControl<string | null | undefined>(undefined),
			licenseBody: new FormControl<string | null | undefined>(undefined),
			licenseUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			readmeBody: new FormControl<string | null | undefined>(undefined),
			readmeUrl: new FormControl<string | null | undefined>(undefined),
			semanticVersion: new FormControl<string | null | undefined>(undefined),
			sourceCodeArchiveUrl: new FormControl<string | null | undefined>(undefined),
			sourceCodeUrl: new FormControl<string | null | undefined>(undefined),
			spdxLicenseId: new FormControl<string | null | undefined>(undefined),
			templateBody: new FormControl<string | null | undefined>(undefined),
			templateUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationVersionPutBody {

		/** <p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p> */
		sourceCodeArchiveUrl?: string | null;

		/** A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit. */
		sourceCodeUrl?: string | null;

		/** The raw packaged AWS SAM template of your application. */
		templateBody?: string | null;

		/** A link to the packaged AWS SAM template of your application. */
		templateUrl?: string | null;
	}
	export interface CreateApplicationVersionPutBodyFormProperties {

		/** <p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p> */
		sourceCodeArchiveUrl: FormControl<string | null | undefined>,

		/** A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit. */
		sourceCodeUrl: FormControl<string | null | undefined>,

		/** The raw packaged AWS SAM template of your application. */
		templateBody: FormControl<string | null | undefined>,

		/** A link to the packaged AWS SAM template of your application. */
		templateUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationVersionPutBodyFormGroup() {
		return new FormGroup<CreateApplicationVersionPutBodyFormProperties>({
			sourceCodeArchiveUrl: new FormControl<string | null | undefined>(undefined),
			sourceCodeUrl: new FormControl<string | null | undefined>(undefined),
			templateBody: new FormControl<string | null | undefined>(undefined),
			templateUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCloudFormationChangeSetPostBody {

		/**
		 * <p>A list of values that you must specify before you can deploy certain applications.
		 * Some applications might include resources that can affect permissions in your AWS
		 * account, for example, by creating new AWS Identity and Access Management (IAM) users.
		 * For those applications, you must explicitly acknowledge their capabilities by
		 * specifying this parameter.</p><p>The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM,
		 * CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.</p><p>The following resources require you to specify CAPABILITY_IAM or
		 * CAPABILITY_NAMED_IAM:
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">AWS::IAM::Group</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM::Policy</a>, and
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">AWS::IAM::Role</a>.
		 * If the application contains IAM resources, you can specify either CAPABILITY_IAM
		 * or CAPABILITY_NAMED_IAM. If the application contains IAM resources
		 * with custom names, you must specify CAPABILITY_NAMED_IAM.</p><p>The following resources require you to specify CAPABILITY_RESOURCE_POLICY:
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html">AWS::Lambda::Permission</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM:Policy</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html">AWS::ApplicationAutoScaling::ScalingPolicy</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html">AWS::S3::BucketPolicy</a>,
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html">AWS::SQS::QueuePolicy</a>, and
		 * <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html">AWS::SNS:TopicPolicy</a>.</p><p>Applications that contain one or more nested applications require you to specify
		 * CAPABILITY_AUTO_EXPAND.</p><p>If your application template contains any of the above resources, we recommend that you review
		 * all permissions associated with the application before deploying. If you don't specify
		 * this parameter for an application that requires capabilities, the call will fail.</p>
		 */
		capabilities?: Array<string>;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		changeSetName?: string | null;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		clientToken?: string | null;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		description?: string | null;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		notificationArns?: Array<string>;

		/** A list of parameter values for the parameters of the application. */
		parameterOverrides?: Array<ParameterValue>;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		resourceTypes?: Array<string>;

		/**
		 * This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
		 * </i> Data Type.
		 */
		rollbackConfiguration?: CreateCloudFormationChangeSetPostBodyRollbackConfiguration;

		/**
		 * <p>The semantic version of the application:</p><p>
		 * <a href="https://semver.org/">https://semver.org/</a>
		 * </p>
		 */
		semanticVersion?: string | null;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 * Required
		 */
		stackName: string;

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		tags?: Array<Tag>;

		/** <p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p> */
		templateId?: string | null;
	}
	export interface CreateCloudFormationChangeSetPostBodyFormProperties {

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		changeSetName: FormControl<string | null | undefined>,

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * <p>The semantic version of the application:</p><p>
		 * <a href="https://semver.org/">https://semver.org/</a>
		 * </p>
		 */
		semanticVersion: FormControl<string | null | undefined>,

		/**
		 * This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
		 * </i> API.
		 * Required
		 */
		stackName: FormControl<string | null | undefined>,

		/** <p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p> */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCloudFormationChangeSetPostBodyFormGroup() {
		return new FormGroup<CreateCloudFormationChangeSetPostBodyFormProperties>({
			changeSetName: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			semanticVersion: new FormControl<string | null | undefined>(undefined),
			stackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCloudFormationChangeSetPostBodyRollbackConfiguration {
		MonitoringTimeInMinutes?: number | null;
		RollbackTriggers?: Array<RollbackTrigger>;
	}
	export interface CreateCloudFormationChangeSetPostBodyRollbackConfigurationFormProperties {
		MonitoringTimeInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateCreateCloudFormationChangeSetPostBodyRollbackConfigurationFormGroup() {
		return new FormGroup<CreateCloudFormationChangeSetPostBodyRollbackConfigurationFormProperties>({
			MonitoringTimeInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateCloudFormationTemplatePostBody {

		/**
		 * <p>The semantic version of the application:</p><p>
		 * <a href="https://semver.org/">https://semver.org/</a>
		 * </p>
		 */
		semanticVersion?: string | null;
	}
	export interface CreateCloudFormationTemplatePostBodyFormProperties {

		/**
		 * <p>The semantic version of the application:</p><p>
		 * <a href="https://semver.org/">https://semver.org/</a>
		 * </p>
		 */
		semanticVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateCloudFormationTemplatePostBodyFormGroup() {
		return new FormGroup<CreateCloudFormationTemplatePostBodyFormProperties>({
			semanticVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateApplicationPatchBody {

		/** <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p> */
		author?: string | null;

		/** <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p> */
		description?: string | null;

		/** A URL with more information about the application, for example the location of your GitHub repository for the application. */
		homePageUrl?: string | null;

		/** <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p> */
		labels?: Array<string>;

		/** <p>A text readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p> */
		readmeBody?: string | null;

		/** <p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p> */
		readmeUrl?: string | null;
	}
	export interface UpdateApplicationPatchBodyFormProperties {

		/** <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p> */
		author: FormControl<string | null | undefined>,

		/** <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p> */
		description: FormControl<string | null | undefined>,

		/** A URL with more information about the application, for example the location of your GitHub repository for the application. */
		homePageUrl: FormControl<string | null | undefined>,

		/** <p>A text readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p> */
		readmeBody: FormControl<string | null | undefined>,

		/** <p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p> */
		readmeUrl: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationPatchBodyFormGroup() {
		return new FormGroup<UpdateApplicationPatchBodyFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			homePageUrl: new FormControl<string | null | undefined>(undefined),
			readmeBody: new FormControl<string | null | undefined>(undefined),
			readmeUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutApplicationPolicyPutBody {

		/**
		 * An array of policy statements applied to the application.
		 * Required
		 */
		statements: Array<ApplicationPolicyStatement>;
	}
	export interface PutApplicationPolicyPutBodyFormProperties {
	}
	export function CreatePutApplicationPolicyPutBodyFormGroup() {
		return new FormGroup<PutApplicationPolicyPutBodyFormProperties>({
		});

	}

	export interface UnshareApplicationPostBody {

		/**
		 * The AWS Organization ID to unshare the application from.
		 * Required
		 */
		organizationId: string;
	}
	export interface UnshareApplicationPostBodyFormProperties {

		/**
		 * The AWS Organization ID to unshare the application from.
		 * Required
		 */
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateUnshareApplicationPostBodyFormGroup() {
		return new FormGroup<UnshareApplicationPostBodyFormProperties>({
			organizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

