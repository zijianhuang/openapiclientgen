import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptPortfolioShareOutput {
	}
	export interface AcceptPortfolioShareOutputFormProperties {
	}
	export function CreateAcceptPortfolioShareOutputFormGroup() {
		return new FormGroup<AcceptPortfolioShareOutputFormProperties>({
		});

	}

	export interface AcceptPortfolioShareInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: string;
		PortfolioShareType?: AcceptPortfolioShareInputPortfolioShareType | null;
	}
	export interface AcceptPortfolioShareInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,
		PortfolioShareType: FormControl<AcceptPortfolioShareInputPortfolioShareType | null | undefined>,
	}
	export function CreateAcceptPortfolioShareInputFormGroup() {
		return new FormGroup<AcceptPortfolioShareInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PortfolioShareType: new FormControl<AcceptPortfolioShareInputPortfolioShareType | null | undefined>(undefined),
		});

	}

	export enum AcceptPortfolioShareInputPortfolioShareType { IMPORTED = 0, AWS_SERVICECATALOG = 1, AWS_ORGANIZATIONS = 2 }

	export interface InvalidParametersException {
	}
	export interface InvalidParametersExceptionFormProperties {
	}
	export function CreateInvalidParametersExceptionFormGroup() {
		return new FormGroup<InvalidParametersExceptionFormProperties>({
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface AssociateBudgetWithResourceOutput {
	}
	export interface AssociateBudgetWithResourceOutputFormProperties {
	}
	export function CreateAssociateBudgetWithResourceOutputFormGroup() {
		return new FormGroup<AssociateBudgetWithResourceOutputFormProperties>({
		});

	}

	export interface AssociateBudgetWithResourceInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ResourceId: string;
	}
	export interface AssociateBudgetWithResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateBudgetWithResourceInputFormGroup() {
		return new FormGroup<AssociateBudgetWithResourceInputFormProperties>({
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DuplicateResourceException {
	}
	export interface DuplicateResourceExceptionFormProperties {
	}
	export function CreateDuplicateResourceExceptionFormGroup() {
		return new FormGroup<DuplicateResourceExceptionFormProperties>({
		});

	}

	export interface AssociatePrincipalWithPortfolioOutput {
	}
	export interface AssociatePrincipalWithPortfolioOutputFormProperties {
	}
	export function CreateAssociatePrincipalWithPortfolioOutputFormGroup() {
		return new FormGroup<AssociatePrincipalWithPortfolioOutputFormProperties>({
		});

	}

	export interface AssociatePrincipalWithPortfolioInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: string;

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		PrincipalARN: string;

		/** Required */
		PrincipalType: AssociatePrincipalWithPortfolioInputPrincipalType;
	}
	export interface AssociatePrincipalWithPortfolioInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		PrincipalARN: FormControl<string | null | undefined>,

		/** Required */
		PrincipalType: FormControl<AssociatePrincipalWithPortfolioInputPrincipalType | null | undefined>,
	}
	export function CreateAssociatePrincipalWithPortfolioInputFormGroup() {
		return new FormGroup<AssociatePrincipalWithPortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PrincipalARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000)]),
			PrincipalType: new FormControl<AssociatePrincipalWithPortfolioInputPrincipalType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssociatePrincipalWithPortfolioInputPrincipalType { IAM = 0 }

	export interface AssociateProductWithPortfolioOutput {
	}
	export interface AssociateProductWithPortfolioOutputFormProperties {
	}
	export function CreateAssociateProductWithPortfolioOutputFormGroup() {
		return new FormGroup<AssociateProductWithPortfolioOutputFormProperties>({
		});

	}

	export interface AssociateProductWithPortfolioInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		SourcePortfolioId?: string | null;
	}
	export interface AssociateProductWithPortfolioInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		SourcePortfolioId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateProductWithPortfolioInputFormGroup() {
		return new FormGroup<AssociateProductWithPortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			SourcePortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface AssociateServiceActionWithProvisioningArtifactOutput {
	}
	export interface AssociateServiceActionWithProvisioningArtifactOutputFormProperties {
	}
	export function CreateAssociateServiceActionWithProvisioningArtifactOutputFormGroup() {
		return new FormGroup<AssociateServiceActionWithProvisioningArtifactOutputFormProperties>({
		});

	}

	export interface AssociateServiceActionWithProvisioningArtifactInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ServiceActionId: string;

		/** Max length: 100 */
		AcceptLanguage?: string | null;
	}
	export interface AssociateServiceActionWithProvisioningArtifactInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ServiceActionId: FormControl<string | null | undefined>,

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateAssociateServiceActionWithProvisioningArtifactInputFormGroup() {
		return new FormGroup<AssociateServiceActionWithProvisioningArtifactInputFormProperties>({
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ServiceActionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
		});

	}

	export interface AssociateTagOptionWithResourceOutput {
	}
	export interface AssociateTagOptionWithResourceOutputFormProperties {
	}
	export function CreateAssociateTagOptionWithResourceOutputFormGroup() {
		return new FormGroup<AssociateTagOptionWithResourceOutputFormProperties>({
		});

	}

	export interface AssociateTagOptionWithResourceInput {

		/** Required */
		ResourceId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TagOptionId: string;
	}
	export interface AssociateTagOptionWithResourceInputFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TagOptionId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTagOptionWithResourceInputFormGroup() {
		return new FormGroup<AssociateTagOptionWithResourceInputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TagOptionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface TagOptionNotMigratedException {
	}
	export interface TagOptionNotMigratedExceptionFormProperties {
	}
	export function CreateTagOptionNotMigratedExceptionFormGroup() {
		return new FormGroup<TagOptionNotMigratedExceptionFormProperties>({
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

	export interface BatchAssociateServiceActionWithProvisioningArtifactOutput {

		/** Maximum items: 50 */
		FailedServiceActionAssociations?: Array<FailedServiceActionAssociation>;
	}
	export interface BatchAssociateServiceActionWithProvisioningArtifactOutputFormProperties {
	}
	export function CreateBatchAssociateServiceActionWithProvisioningArtifactOutputFormGroup() {
		return new FormGroup<BatchAssociateServiceActionWithProvisioningArtifactOutputFormProperties>({
		});

	}


	/** An object containing information about the error, along with identifying information about the self-service action and its associations. */
	export interface FailedServiceActionAssociation {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ServiceActionId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId?: string | null;
		ErrorCode?: FailedServiceActionAssociationErrorCode | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ErrorMessage?: string | null;
	}

	/** An object containing information about the error, along with identifying information about the self-service action and its associations. */
	export interface FailedServiceActionAssociationFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ServiceActionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<FailedServiceActionAssociationErrorCode | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedServiceActionAssociationFormGroup() {
		return new FormGroup<FailedServiceActionAssociationFormProperties>({
			ServiceActionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ErrorCode: new FormControl<FailedServiceActionAssociationErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export enum FailedServiceActionAssociationErrorCode { DUPLICATE_RESOURCE = 0, INTERNAL_FAILURE = 1, LIMIT_EXCEEDED = 2, RESOURCE_NOT_FOUND = 3, THROTTLING = 4 }

	export interface BatchAssociateServiceActionWithProvisioningArtifactInput {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		ServiceActionAssociations: Array<ServiceActionAssociation>;

		/** Max length: 100 */
		AcceptLanguage?: string | null;
	}
	export interface BatchAssociateServiceActionWithProvisioningArtifactInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateServiceActionWithProvisioningArtifactInputFormGroup() {
		return new FormGroup<BatchAssociateServiceActionWithProvisioningArtifactInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
		});

	}


	/** A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID. */
	export interface ServiceActionAssociation {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ServiceActionId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: string;
	}

	/** A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID. */
	export interface ServiceActionAssociationFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ServiceActionId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,
	}
	export function CreateServiceActionAssociationFormGroup() {
		return new FormGroup<ServiceActionAssociationFormProperties>({
			ServiceActionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface BatchDisassociateServiceActionFromProvisioningArtifactOutput {

		/** Maximum items: 50 */
		FailedServiceActionAssociations?: Array<FailedServiceActionAssociation>;
	}
	export interface BatchDisassociateServiceActionFromProvisioningArtifactOutputFormProperties {
	}
	export function CreateBatchDisassociateServiceActionFromProvisioningArtifactOutputFormGroup() {
		return new FormGroup<BatchDisassociateServiceActionFromProvisioningArtifactOutputFormProperties>({
		});

	}

	export interface BatchDisassociateServiceActionFromProvisioningArtifactInput {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		ServiceActionAssociations: Array<ServiceActionAssociation>;

		/** Max length: 100 */
		AcceptLanguage?: string | null;
	}
	export interface BatchDisassociateServiceActionFromProvisioningArtifactInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateServiceActionFromProvisioningArtifactInputFormGroup() {
		return new FormGroup<BatchDisassociateServiceActionFromProvisioningArtifactInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
		});

	}

	export interface CopyProductOutput {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		CopyProductToken?: string | null;
	}
	export interface CopyProductOutputFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		CopyProductToken: FormControl<string | null | undefined>,
	}
	export function CreateCopyProductOutputFormGroup() {
		return new FormGroup<CopyProductOutputFormProperties>({
			CopyProductToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface CopyProductInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		SourceProductArn: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		TargetProductId?: string | null;

		/** Max length: 8191 */
		TargetProductName?: string | null;
		SourceProvisioningArtifactIdentifiers?: Array<SourceProvisioningArtifactPropertiesMap>;
		CopyOptions?: Array<CopyOption>;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: string;
	}
	export interface CopyProductInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 */
		SourceProductArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		TargetProductId: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		TargetProductName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCopyProductInputFormGroup() {
		return new FormGroup<CopyProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			SourceProductArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			TargetProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			TargetProductName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}

	export interface SourceProvisioningArtifactPropertiesMap {
	}
	export interface SourceProvisioningArtifactPropertiesMapFormProperties {
	}
	export function CreateSourceProvisioningArtifactPropertiesMapFormGroup() {
		return new FormGroup<SourceProvisioningArtifactPropertiesMapFormProperties>({
		});

	}

	export enum CopyOption { CopyTags = 0 }

	export interface CreateConstraintOutput {

		/** Information about a constraint. */
		ConstraintDetail?: ConstraintDetail;
		ConstraintParameters?: string | null;
		Status?: CreateConstraintOutputStatus | null;
	}
	export interface CreateConstraintOutputFormProperties {
		ConstraintParameters: FormControl<string | null | undefined>,
		Status: FormControl<CreateConstraintOutputStatus | null | undefined>,
	}
	export function CreateCreateConstraintOutputFormGroup() {
		return new FormGroup<CreateConstraintOutputFormProperties>({
			ConstraintParameters: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<CreateConstraintOutputStatus | null | undefined>(undefined),
		});

	}


	/** Information about a constraint. */
	export interface ConstraintDetail {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ConstraintId?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Type?: string | null;

		/** Max length: 2000 */
		Description?: string | null;
		Owner?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId?: string | null;
	}

	/** Information about a constraint. */
	export interface ConstraintDetailFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ConstraintId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Type: FormControl<string | null | undefined>,

		/** Max length: 2000 */
		Description: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,
	}
	export function CreateConstraintDetailFormGroup() {
		return new FormGroup<ConstraintDetailFormProperties>({
			ConstraintId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{12}$')]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export enum CreateConstraintOutputStatus { AVAILABLE = 0, CREATING = 1, FAILED = 2 }

	export interface CreateConstraintInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/** Required */
		Parameters: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Type: string;

		/** Max length: 2000 */
		Description?: string | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: string;
	}
	export interface CreateConstraintInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/** Required */
		Parameters: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Type: FormControl<string | null | undefined>,

		/** Max length: 2000 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateConstraintInputFormGroup() {
		return new FormGroup<CreateConstraintInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Parameters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}

	export interface CreatePortfolioOutput {

		/** Information about a portfolio. */
		PortfolioDetail?: PortfolioDetail;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;
	}
	export interface CreatePortfolioOutputFormProperties {
	}
	export function CreateCreatePortfolioOutputFormGroup() {
		return new FormGroup<CreatePortfolioOutputFormProperties>({
		});

	}


	/** Information about a portfolio. */
	export interface PortfolioDetail {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 150
		 * Min length: 1
		 */
		ARN?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/** Max length: 2000 */
		Description?: string | null;
		CreatedTime?: Date | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		ProviderName?: string | null;
	}

	/** Information about a portfolio. */
	export interface PortfolioDetailFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 150
		 * Min length: 1
		 */
		ARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,

		/** Max length: 2000 */
		Description: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		ProviderName: FormControl<string | null | undefined>,
	}
	export function CreatePortfolioDetailFormGroup() {
		return new FormGroup<PortfolioDetailFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(150)]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
		});

	}


	/** Information about a tag. A tag is a key-value pair. Tags are propagated to the resources created when provisioning a product. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Value: string;
	}

	/** Information about a tag. A tag is a key-value pair. Tags are propagated to the resources created when provisioning a product. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
		});

	}

	export interface CreatePortfolioInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DisplayName: string;

		/** Max length: 2000 */
		Description?: string | null;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		ProviderName: string;

		/** Maximum items: 20 */
		Tags?: Array<Tag>;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: string;
	}
	export interface CreatePortfolioInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,

		/** Max length: 2000 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		ProviderName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortfolioInputFormGroup() {
		return new FormGroup<CreatePortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}

	export interface CreatePortfolioShareOutput {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioShareToken?: string | null;
	}
	export interface CreatePortfolioShareOutputFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioShareToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortfolioShareOutputFormGroup() {
		return new FormGroup<CreatePortfolioShareOutputFormProperties>({
			PortfolioShareToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface CreatePortfolioShareInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: string;
		AccountId?: string | null;

		/** Information about the organization node. */
		OrganizationNode?: OrganizationNode;
	}
	export interface CreatePortfolioShareInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortfolioShareInputFormGroup() {
		return new FormGroup<CreatePortfolioShareInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{12}$')]),
		});

	}


	/** Information about the organization node. */
	export interface OrganizationNode {
		Type?: OrganizationNodeType | null;
		Value?: string | null;
	}

	/** Information about the organization node. */
	export interface OrganizationNodeFormProperties {
		Type: FormControl<OrganizationNodeType | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationNodeFormGroup() {
		return new FormGroup<OrganizationNodeFormProperties>({
			Type: new FormControl<OrganizationNodeType | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^[0-9]{12}$)|(^arn:aws:organizations::\d{12}:organization\/o-[a-z0-9]{10,32})|(^o-[a-z0-9]{10,32}$)|(^arn:aws:organizations::\d{12}:ou\/o-[a-z0-9]{10,32}\/ou-[0-9a-z]{4,32}-[0-9a-z]{8,32}$)|(^ou-[0-9a-z]{4,32}-[a-z0-9]{8,32}$)')]),
		});

	}

	export enum OrganizationNodeType { ORGANIZATION = 0, ORGANIZATIONAL_UNIT = 1, ACCOUNT = 2 }

	export interface OperationNotSupportedException {
	}
	export interface OperationNotSupportedExceptionFormProperties {
	}
	export function CreateOperationNotSupportedExceptionFormGroup() {
		return new FormGroup<OperationNotSupportedExceptionFormProperties>({
		});

	}

	export interface CreateProductOutput {

		/** Information about a product view. */
		ProductViewDetail?: ProductViewDetail;

		/** Information about a provisioning artifact (also known as a version) for a product. */
		ProvisioningArtifactDetail?: ProvisioningArtifactDetail;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;
	}
	export interface CreateProductOutputFormProperties {
	}
	export function CreateCreateProductOutputFormGroup() {
		return new FormGroup<CreateProductOutputFormProperties>({
		});

	}


	/** Information about a product view. */
	export interface ProductViewDetail {

		/** Summary information about a product view. */
		ProductViewSummary?: ProductViewSummary;
		Status?: CreateConstraintOutputStatus | null;

		/**
		 * Max length: 150
		 * Min length: 1
		 */
		ProductARN?: string | null;
		CreatedTime?: Date | null;
	}

	/** Information about a product view. */
	export interface ProductViewDetailFormProperties {
		Status: FormControl<CreateConstraintOutputStatus | null | undefined>,

		/**
		 * Max length: 150
		 * Min length: 1
		 */
		ProductARN: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateProductViewDetailFormGroup() {
		return new FormGroup<ProductViewDetailFormProperties>({
			Status: new FormControl<CreateConstraintOutputStatus | null | undefined>(undefined),
			ProductARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(150)]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Summary information about a product view. */
	export interface ProductViewSummary {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId?: string | null;

		/** Max length: 8191 */
		Name?: string | null;

		/** Max length: 8191 */
		Owner?: string | null;

		/** Max length: 8191 */
		ShortDescription?: string | null;

		/** Max length: 8191 */
		Type?: ProductViewSummaryType | null;
		Distributor?: string | null;
		HasDefaultPath?: boolean | null;

		/** Max length: 254 */
		SupportEmail?: string | null;

		/** Max length: 8191 */
		SupportDescription?: string | null;

		/** Max length: 2083 */
		SupportUrl?: string | null;
	}

	/** Summary information about a product view. */
	export interface ProductViewSummaryFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		Owner: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		ShortDescription: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		Type: FormControl<ProductViewSummaryType | null | undefined>,
		Distributor: FormControl<string | null | undefined>,
		HasDefaultPath: FormControl<boolean | null | undefined>,

		/** Max length: 254 */
		SupportEmail: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		SupportDescription: FormControl<string | null | undefined>,

		/** Max length: 2083 */
		SupportUrl: FormControl<string | null | undefined>,
	}
	export function CreateProductViewSummaryFormGroup() {
		return new FormGroup<ProductViewSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
			ShortDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
			Type: new FormControl<ProductViewSummaryType | null | undefined>(undefined, [Validators.maxLength(8191)]),
			Distributor: new FormControl<string | null | undefined>(undefined),
			HasDefaultPath: new FormControl<boolean | null | undefined>(undefined),
			SupportEmail: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(254)]),
			SupportDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
			SupportUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2083)]),
		});

	}

	export enum ProductViewSummaryType { CLOUD_FORMATION_TEMPLATE = 0, MARKETPLACE = 1 }


	/** Information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactDetail {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;

		/** Max length: 8192 */
		Name?: string | null;

		/** Max length: 8192 */
		Description?: string | null;
		Type?: ProvisioningArtifactDetailType | null;
		CreatedTime?: Date | null;
		Active?: boolean | null;
		Guidance?: ProvisioningArtifactDetailGuidance | null;
	}

	/** Information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactDetailFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		Description: FormControl<string | null | undefined>,
		Type: FormControl<ProvisioningArtifactDetailType | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		Active: FormControl<boolean | null | undefined>,
		Guidance: FormControl<ProvisioningArtifactDetailGuidance | null | undefined>,
	}
	export function CreateProvisioningArtifactDetailFormGroup() {
		return new FormGroup<ProvisioningArtifactDetailFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			Type: new FormControl<ProvisioningArtifactDetailType | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			Active: new FormControl<boolean | null | undefined>(undefined),
			Guidance: new FormControl<ProvisioningArtifactDetailGuidance | null | undefined>(undefined),
		});

	}

	export enum ProvisioningArtifactDetailType { CLOUD_FORMATION_TEMPLATE = 0, MARKETPLACE_AMI = 1, MARKETPLACE_CAR = 2 }

	export enum ProvisioningArtifactDetailGuidance { DEFAULT = 0, DEPRECATED = 1 }

	export interface CreateProductInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 8191
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 8191
		 */
		Owner: string;

		/** Max length: 8191 */
		Description?: string | null;

		/** Max length: 8191 */
		Distributor?: string | null;

		/** Max length: 8191 */
		SupportDescription?: string | null;

		/** Max length: 254 */
		SupportEmail?: string | null;

		/** Max length: 2083 */
		SupportUrl?: string | null;

		/**
		 * Required
		 * Max length: 8191
		 */
		ProductType: ProductViewSummaryType;

		/** Maximum items: 20 */
		Tags?: Array<Tag>;

		/**
		 * Information about a provisioning artifact (also known as a version) for a product.
		 * Required
		 */
		ProvisioningArtifactParameters: ProvisioningArtifactProperties;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: string;
	}
	export interface CreateProductInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 8191
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 8191
		 */
		Owner: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		Description: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		Distributor: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		SupportDescription: FormControl<string | null | undefined>,

		/** Max length: 254 */
		SupportEmail: FormControl<string | null | undefined>,

		/** Max length: 2083 */
		SupportUrl: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 8191
		 */
		ProductType: FormControl<ProductViewSummaryType | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateProductInputFormGroup() {
		return new FormGroup<CreateProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(8191)]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(8191)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
			Distributor: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
			SupportDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
			SupportEmail: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(254)]),
			SupportUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2083)]),
			ProductType: new FormControl<ProductViewSummaryType | null | undefined>(undefined, [Validators.required, Validators.maxLength(8191)]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}


	/** Information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactProperties {

		/** Max length: 8192 */
		Name?: string | null;

		/** Max length: 8192 */
		Description?: string | null;

		/** Required */
		Info: ProvisioningArtifactInfo;
		Type?: ProvisioningArtifactDetailType | null;
		DisableTemplateValidation?: boolean | null;
	}

	/** Information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactPropertiesFormProperties {

		/** Max length: 8192 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		Description: FormControl<string | null | undefined>,
		Type: FormControl<ProvisioningArtifactDetailType | null | undefined>,
		DisableTemplateValidation: FormControl<boolean | null | undefined>,
	}
	export function CreateProvisioningArtifactPropertiesFormGroup() {
		return new FormGroup<ProvisioningArtifactPropertiesFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			Type: new FormControl<ProvisioningArtifactDetailType | null | undefined>(undefined),
			DisableTemplateValidation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ProvisioningArtifactInfo {
	}
	export interface ProvisioningArtifactInfoFormProperties {
	}
	export function CreateProvisioningArtifactInfoFormGroup() {
		return new FormGroup<ProvisioningArtifactInfoFormProperties>({
		});

	}

	export interface CreateProvisionedProductPlanOutput {
		PlanName?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PlanId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionProductId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ProvisionedProductName?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId?: string | null;
	}
	export interface CreateProvisionedProductPlanOutputFormProperties {
		PlanName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PlanId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionProductId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ProvisionedProductName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,
	}
	export function CreateCreateProvisionedProductPlanOutputFormGroup() {
		return new FormGroup<CreateProvisionedProductPlanOutputFormProperties>({
			PlanName: new FormControl<string | null | undefined>(undefined),
			PlanId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisionProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisionedProductName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9._-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface CreateProvisionedProductPlanInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/** Required */
		PlanName: string;

		/** Required */
		PlanType: CreateProvisionedProductPlanInputPlanType;

		/** Maximum items: 5 */
		NotificationArns?: Array<string>;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PathId?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ProvisionedProductName: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: string;
		ProvisioningParameters?: Array<UpdateProvisioningParameter>;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: string;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;
	}
	export interface CreateProvisionedProductPlanInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/** Required */
		PlanName: FormControl<string | null | undefined>,

		/** Required */
		PlanType: FormControl<CreateProvisionedProductPlanInputPlanType | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PathId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ProvisionedProductName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateProvisionedProductPlanInputFormGroup() {
		return new FormGroup<CreateProvisionedProductPlanInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PlanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PlanType: new FormControl<CreateProvisionedProductPlanInputPlanType | null | undefined>(undefined, [Validators.required]),
			PathId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisionedProductName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9._-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}

	export enum CreateProvisionedProductPlanInputPlanType { CLOUDFORMATION = 0 }


	/** The parameter key-value pair used to update a provisioned product. */
	export interface UpdateProvisioningParameter {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Key?: string | null;

		/** Max length: 4096 */
		Value?: string | null;
		UsePreviousValue?: boolean | null;
	}

	/** The parameter key-value pair used to update a provisioned product. */
	export interface UpdateProvisioningParameterFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		Value: FormControl<string | null | undefined>,
		UsePreviousValue: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateProvisioningParameterFormGroup() {
		return new FormGroup<UpdateProvisioningParameterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			UsePreviousValue: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateProvisioningArtifactOutput {

		/** Information about a provisioning artifact (also known as a version) for a product. */
		ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
		Info?: ProvisioningArtifactInfo;
		Status?: CreateConstraintOutputStatus | null;
	}
	export interface CreateProvisioningArtifactOutputFormProperties {
		Status: FormControl<CreateConstraintOutputStatus | null | undefined>,
	}
	export function CreateCreateProvisioningArtifactOutputFormGroup() {
		return new FormGroup<CreateProvisioningArtifactOutputFormProperties>({
			Status: new FormControl<CreateConstraintOutputStatus | null | undefined>(undefined),
		});

	}

	export interface CreateProvisioningArtifactInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/**
		 * Information about a provisioning artifact (also known as a version) for a product.
		 * Required
		 */
		Parameters: ProvisioningArtifactProperties;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: string;
	}
	export interface CreateProvisioningArtifactInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateProvisioningArtifactInputFormGroup() {
		return new FormGroup<CreateProvisioningArtifactInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}

	export interface CreateServiceActionOutput {

		/** An object containing detailed information about the self-service action. */
		ServiceActionDetail?: ServiceActionDetail;
	}
	export interface CreateServiceActionOutputFormProperties {
	}
	export function CreateCreateServiceActionOutputFormGroup() {
		return new FormGroup<CreateServiceActionOutputFormProperties>({
		});

	}


	/** An object containing detailed information about the self-service action. */
	export interface ServiceActionDetail {

		/** Detailed information about the self-service action. */
		ServiceActionSummary?: ServiceActionSummary;
		Definition?: ServiceActionDefinitionMap;
	}

	/** An object containing detailed information about the self-service action. */
	export interface ServiceActionDetailFormProperties {
	}
	export function CreateServiceActionDetailFormGroup() {
		return new FormGroup<ServiceActionDetailFormProperties>({
		});

	}


	/** Detailed information about the self-service action. */
	export interface ServiceActionSummary {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name?: string | null;

		/** Max length: 1024 */
		Description?: string | null;
		DefinitionType?: ServiceActionSummaryDefinitionType | null;
	}

	/** Detailed information about the self-service action. */
	export interface ServiceActionSummaryFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		Description: FormControl<string | null | undefined>,
		DefinitionType: FormControl<ServiceActionSummaryDefinitionType | null | undefined>,
	}
	export function CreateServiceActionSummaryFormGroup() {
		return new FormGroup<ServiceActionSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9_\-.]*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			DefinitionType: new FormControl<ServiceActionSummaryDefinitionType | null | undefined>(undefined),
		});

	}

	export enum ServiceActionSummaryDefinitionType { SSM_AUTOMATION = 0 }

	export interface ServiceActionDefinitionMap {
	}
	export interface ServiceActionDefinitionMapFormProperties {
	}
	export function CreateServiceActionDefinitionMapFormGroup() {
		return new FormGroup<ServiceActionDefinitionMapFormProperties>({
		});

	}

	export interface CreateServiceActionInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		DefinitionType: ServiceActionSummaryDefinitionType;

		/** Required */
		Definition: ServiceActionDefinitionMap;

		/** Max length: 1024 */
		Description?: string | null;

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: string;
	}
	export interface CreateServiceActionInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		DefinitionType: FormControl<ServiceActionSummaryDefinitionType | null | undefined>,

		/** Max length: 1024 */
		Description: FormControl<string | null | undefined>,

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceActionInputFormGroup() {
		return new FormGroup<CreateServiceActionInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9_\-.]*')]),
			DefinitionType: new FormControl<ServiceActionSummaryDefinitionType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}

	export interface CreateTagOptionOutput {

		/** Information about a TagOption. */
		TagOptionDetail?: TagOptionDetail;
	}
	export interface CreateTagOptionOutputFormProperties {
	}
	export function CreateCreateTagOptionOutputFormGroup() {
		return new FormGroup<CreateTagOptionOutputFormProperties>({
		});

	}


	/** Information about a TagOption. */
	export interface TagOptionDetail {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Value?: string | null;
		Active?: boolean | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;
	}

	/** Information about a TagOption. */
	export interface TagOptionDetailFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
		Active: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateTagOptionDetailFormGroup() {
		return new FormGroup<TagOptionDetailFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Active: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface CreateTagOptionInput {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Value: string;
	}
	export interface CreateTagOptionInputFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateCreateTagOptionInputFormGroup() {
		return new FormGroup<CreateTagOptionInputFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
		});

	}

	export interface DeleteConstraintOutput {
	}
	export interface DeleteConstraintOutputFormProperties {
	}
	export function CreateDeleteConstraintOutputFormGroup() {
		return new FormGroup<DeleteConstraintOutputFormProperties>({
		});

	}

	export interface DeleteConstraintInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;
	}
	export interface DeleteConstraintInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConstraintInputFormGroup() {
		return new FormGroup<DeleteConstraintInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DeletePortfolioOutput {
	}
	export interface DeletePortfolioOutputFormProperties {
	}
	export function CreateDeletePortfolioOutputFormGroup() {
		return new FormGroup<DeletePortfolioOutputFormProperties>({
		});

	}

	export interface DeletePortfolioInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;
	}
	export interface DeletePortfolioInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeletePortfolioInputFormGroup() {
		return new FormGroup<DeletePortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface DeletePortfolioShareOutput {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioShareToken?: string | null;
	}
	export interface DeletePortfolioShareOutputFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioShareToken: FormControl<string | null | undefined>,
	}
	export function CreateDeletePortfolioShareOutputFormGroup() {
		return new FormGroup<DeletePortfolioShareOutputFormProperties>({
			PortfolioShareToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DeletePortfolioShareInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: string;
		AccountId?: string | null;

		/** Information about the organization node. */
		OrganizationNode?: OrganizationNode;
	}
	export interface DeletePortfolioShareInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePortfolioShareInputFormGroup() {
		return new FormGroup<DeletePortfolioShareInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{12}$')]),
		});

	}

	export interface DeleteProductOutput {
	}
	export interface DeleteProductOutputFormProperties {
	}
	export function CreateDeleteProductOutputFormGroup() {
		return new FormGroup<DeleteProductOutputFormProperties>({
		});

	}

	export interface DeleteProductInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;
	}
	export interface DeleteProductInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProductInputFormGroup() {
		return new FormGroup<DeleteProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DeleteProvisionedProductPlanOutput {
	}
	export interface DeleteProvisionedProductPlanOutputFormProperties {
	}
	export function CreateDeleteProvisionedProductPlanOutputFormGroup() {
		return new FormGroup<DeleteProvisionedProductPlanOutputFormProperties>({
		});

	}

	export interface DeleteProvisionedProductPlanInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PlanId: string;
		IgnoreErrors?: boolean | null;
	}
	export interface DeleteProvisionedProductPlanInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PlanId: FormControl<string | null | undefined>,
		IgnoreErrors: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteProvisionedProductPlanInputFormGroup() {
		return new FormGroup<DeleteProvisionedProductPlanInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PlanId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			IgnoreErrors: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteProvisioningArtifactOutput {
	}
	export interface DeleteProvisioningArtifactOutputFormProperties {
	}
	export function CreateDeleteProvisioningArtifactOutputFormGroup() {
		return new FormGroup<DeleteProvisioningArtifactOutputFormProperties>({
		});

	}

	export interface DeleteProvisioningArtifactInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: string;
	}
	export interface DeleteProvisioningArtifactInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProvisioningArtifactInputFormGroup() {
		return new FormGroup<DeleteProvisioningArtifactInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DeleteServiceActionOutput {
	}
	export interface DeleteServiceActionOutputFormProperties {
	}
	export function CreateDeleteServiceActionOutputFormGroup() {
		return new FormGroup<DeleteServiceActionOutputFormProperties>({
		});

	}

	export interface DeleteServiceActionInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/** Max length: 100 */
		AcceptLanguage?: string | null;
	}
	export interface DeleteServiceActionInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServiceActionInputFormGroup() {
		return new FormGroup<DeleteServiceActionInputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
		});

	}

	export interface DeleteTagOptionOutput {
	}
	export interface DeleteTagOptionOutputFormProperties {
	}
	export function CreateDeleteTagOptionOutputFormGroup() {
		return new FormGroup<DeleteTagOptionOutputFormProperties>({
		});

	}

	export interface DeleteTagOptionInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;
	}
	export interface DeleteTagOptionInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTagOptionInputFormGroup() {
		return new FormGroup<DeleteTagOptionInputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface DescribeConstraintOutput {

		/** Information about a constraint. */
		ConstraintDetail?: ConstraintDetail;
		ConstraintParameters?: string | null;
		Status?: CreateConstraintOutputStatus | null;
	}
	export interface DescribeConstraintOutputFormProperties {
		ConstraintParameters: FormControl<string | null | undefined>,
		Status: FormControl<CreateConstraintOutputStatus | null | undefined>,
	}
	export function CreateDescribeConstraintOutputFormGroup() {
		return new FormGroup<DescribeConstraintOutputFormProperties>({
			ConstraintParameters: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<CreateConstraintOutputStatus | null | undefined>(undefined),
		});

	}

	export interface DescribeConstraintInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;
	}
	export interface DescribeConstraintInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConstraintInputFormGroup() {
		return new FormGroup<DescribeConstraintInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DescribeCopyProductStatusOutput {
		CopyProductStatus?: DescribeCopyProductStatusOutputCopyProductStatus | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		TargetProductId?: string | null;
		StatusDetail?: string | null;
	}
	export interface DescribeCopyProductStatusOutputFormProperties {
		CopyProductStatus: FormControl<DescribeCopyProductStatusOutputCopyProductStatus | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		TargetProductId: FormControl<string | null | undefined>,
		StatusDetail: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCopyProductStatusOutputFormGroup() {
		return new FormGroup<DescribeCopyProductStatusOutputFormProperties>({
			CopyProductStatus: new FormControl<DescribeCopyProductStatusOutputCopyProductStatus | null | undefined>(undefined),
			TargetProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			StatusDetail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeCopyProductStatusOutputCopyProductStatus { SUCCEEDED = 0, IN_PROGRESS = 1, FAILED = 2 }

	export interface DescribeCopyProductStatusInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		CopyProductToken: string;
	}
	export interface DescribeCopyProductStatusInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		CopyProductToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCopyProductStatusInputFormGroup() {
		return new FormGroup<DescribeCopyProductStatusInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			CopyProductToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DescribePortfolioOutput {

		/** Information about a portfolio. */
		PortfolioDetail?: PortfolioDetail;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;
		TagOptions?: Array<TagOptionDetail>;
		Budgets?: Array<BudgetDetail>;
	}
	export interface DescribePortfolioOutputFormProperties {
	}
	export function CreateDescribePortfolioOutputFormGroup() {
		return new FormGroup<DescribePortfolioOutputFormProperties>({
		});

	}


	/** Information about a budget. */
	export interface BudgetDetail {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName?: string | null;
	}

	/** Information about a budget. */
	export interface BudgetDetailFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,
	}
	export function CreateBudgetDetailFormGroup() {
		return new FormGroup<BudgetDetailFormProperties>({
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface DescribePortfolioInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;
	}
	export interface DescribePortfolioInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribePortfolioInputFormGroup() {
		return new FormGroup<DescribePortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DescribePortfolioShareStatusOutput {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioShareToken?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId?: string | null;
		OrganizationNodeValue?: string | null;
		Status?: DescribePortfolioShareStatusOutputStatus | null;

		/** Information about the portfolio share operation. */
		ShareDetails?: ShareDetails;
	}
	export interface DescribePortfolioShareStatusOutputFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioShareToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,
		OrganizationNodeValue: FormControl<string | null | undefined>,
		Status: FormControl<DescribePortfolioShareStatusOutputStatus | null | undefined>,
	}
	export function CreateDescribePortfolioShareStatusOutputFormGroup() {
		return new FormGroup<DescribePortfolioShareStatusOutputFormProperties>({
			PortfolioShareToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			OrganizationNodeValue: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^[0-9]{12}$)|(^arn:aws:organizations::\d{12}:organization\/o-[a-z0-9]{10,32})|(^o-[a-z0-9]{10,32}$)|(^arn:aws:organizations::\d{12}:ou\/o-[a-z0-9]{10,32}\/ou-[0-9a-z]{4,32}-[0-9a-z]{8,32}$)|(^ou-[0-9a-z]{4,32}-[a-z0-9]{8,32}$)')]),
			Status: new FormControl<DescribePortfolioShareStatusOutputStatus | null | undefined>(undefined),
		});

	}

	export enum DescribePortfolioShareStatusOutputStatus { NOT_STARTED = 0, IN_PROGRESS = 1, COMPLETED = 2, COMPLETED_WITH_ERRORS = 3, ERROR = 4 }


	/** Information about the portfolio share operation. */
	export interface ShareDetails {
		SuccessfulShares?: Array<string>;
		ShareErrors?: Array<ShareError>;
	}

	/** Information about the portfolio share operation. */
	export interface ShareDetailsFormProperties {
	}
	export function CreateShareDetailsFormGroup() {
		return new FormGroup<ShareDetailsFormProperties>({
		});

	}


	/** Errors that occurred during the portfolio share operation. */
	export interface ShareError {
		Accounts?: Array<string>;
		Message?: string | null;
		Error?: string | null;
	}

	/** Errors that occurred during the portfolio share operation. */
	export interface ShareErrorFormProperties {
		Message: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
	}
	export function CreateShareErrorFormGroup() {
		return new FormGroup<ShareErrorFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePortfolioShareStatusInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioShareToken: string;
	}
	export interface DescribePortfolioShareStatusInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioShareToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePortfolioShareStatusInputFormGroup() {
		return new FormGroup<DescribePortfolioShareStatusInputFormProperties>({
			PortfolioShareToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DescribeProductOutput {

		/** Summary information about a product view. */
		ProductViewSummary?: ProductViewSummary;
		ProvisioningArtifacts?: Array<ProvisioningArtifact>;
		Budgets?: Array<BudgetDetail>;
		LaunchPaths?: Array<LaunchPath>;
	}
	export interface DescribeProductOutputFormProperties {
	}
	export function CreateDescribeProductOutputFormGroup() {
		return new FormGroup<DescribeProductOutputFormProperties>({
		});

	}


	/** Information about a provisioning artifact. A provisioning artifact is also known as a product version. */
	export interface ProvisioningArtifact {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;

		/** Max length: 8192 */
		Name?: string | null;

		/** Max length: 8192 */
		Description?: string | null;
		CreatedTime?: Date | null;
		Guidance?: ProvisioningArtifactDetailGuidance | null;
	}

	/** Information about a provisioning artifact. A provisioning artifact is also known as a product version. */
	export interface ProvisioningArtifactFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		Description: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		Guidance: FormControl<ProvisioningArtifactDetailGuidance | null | undefined>,
	}
	export function CreateProvisioningArtifactFormGroup() {
		return new FormGroup<ProvisioningArtifactFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			Guidance: new FormControl<ProvisioningArtifactDetailGuidance | null | undefined>(undefined),
		});

	}


	/** A launch path object. */
	export interface LaunchPath {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;
		Name?: string | null;
	}

	/** A launch path object. */
	export interface LaunchPathFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateLaunchPathFormGroup() {
		return new FormGroup<LaunchPathFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeProductInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;

		/** Max length: 8191 */
		Name?: string | null;
	}
	export interface DescribeProductInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProductInputFormGroup() {
		return new FormGroup<DescribeProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
		});

	}

	export interface DescribeProductAsAdminOutput {

		/** Information about a product view. */
		ProductViewDetail?: ProductViewDetail;
		ProvisioningArtifactSummaries?: Array<ProvisioningArtifactSummary>;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;
		TagOptions?: Array<TagOptionDetail>;
		Budgets?: Array<BudgetDetail>;
	}
	export interface DescribeProductAsAdminOutputFormProperties {
	}
	export function CreateDescribeProductAsAdminOutputFormGroup() {
		return new FormGroup<DescribeProductAsAdminOutputFormProperties>({
		});

	}


	/** Summary information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactSummary {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;

		/** Max length: 8192 */
		Name?: string | null;

		/** Max length: 8192 */
		Description?: string | null;
		CreatedTime?: Date | null;
		ProvisioningArtifactMetadata?: ProvisioningArtifactInfo;
	}

	/** Summary information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactSummaryFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		Description: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateProvisioningArtifactSummaryFormGroup() {
		return new FormGroup<ProvisioningArtifactSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeProductAsAdminInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;

		/** Max length: 8191 */
		Name?: string | null;
	}
	export interface DescribeProductAsAdminInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProductAsAdminInputFormGroup() {
		return new FormGroup<DescribeProductAsAdminInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
		});

	}

	export interface DescribeProductViewOutput {

		/** Summary information about a product view. */
		ProductViewSummary?: ProductViewSummary;
		ProvisioningArtifacts?: Array<ProvisioningArtifact>;
	}
	export interface DescribeProductViewOutputFormProperties {
	}
	export function CreateDescribeProductViewOutputFormGroup() {
		return new FormGroup<DescribeProductViewOutputFormProperties>({
		});

	}

	export interface DescribeProductViewInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;
	}
	export interface DescribeProductViewInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProductViewInputFormGroup() {
		return new FormGroup<DescribeProductViewInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DescribeProvisionedProductOutput {

		/** Information about a provisioned product. */
		ProvisionedProductDetail?: ProvisionedProductDetail;
		CloudWatchDashboards?: Array<CloudWatchDashboard>;
	}
	export interface DescribeProvisionedProductOutputFormProperties {
	}
	export function CreateDescribeProvisionedProductOutputFormGroup() {
		return new FormGroup<DescribeProvisionedProductOutputFormProperties>({
		});

	}


	/** Information about a provisioned product. */
	export interface ProvisionedProductDetail {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		Arn?: string | null;
		Type?: string | null;
		Id?: string | null;
		Status?: ProvisionedProductDetailStatus | null;
		StatusMessage?: string | null;
		CreatedTime?: Date | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken?: string | null;
		LastRecordId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId?: string | null;
	}

	/** Information about a provisioned product. */
	export interface ProvisionedProductDetailFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		Arn: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Status: FormControl<ProvisionedProductDetailStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: FormControl<string | null | undefined>,
		LastRecordId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionedProductDetailFormGroup() {
		return new FormGroup<ProvisionedProductDetailFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9._-]{0,127}|arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9._-]{0,127}|arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			Type: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ProvisionedProductDetailStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			LastRecordId: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export enum ProvisionedProductDetailStatus { AVAILABLE = 0, UNDER_CHANGE = 1, TAINTED = 2, ERROR = 3, PLAN_IN_PROGRESS = 4 }


	/** Information about a CloudWatch dashboard. */
	export interface CloudWatchDashboard {
		Name?: string | null;
	}

	/** Information about a CloudWatch dashboard. */
	export interface CloudWatchDashboardFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchDashboardFormGroup() {
		return new FormGroup<CloudWatchDashboardFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeProvisionedProductInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;
	}
	export interface DescribeProvisionedProductInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProvisionedProductInputFormGroup() {
		return new FormGroup<DescribeProvisionedProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DescribeProvisionedProductPlanOutput {

		/** Information about a plan. */
		ProvisionedProductPlanDetails?: ProvisionedProductPlanDetails;
		ResourceChanges?: Array<ResourceChange>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface DescribeProvisionedProductPlanOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProvisionedProductPlanOutputFormGroup() {
		return new FormGroup<DescribeProvisionedProductPlanOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}


	/** Information about a plan. */
	export interface ProvisionedProductPlanDetails {
		CreatedTime?: Date | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PathId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId?: string | null;
		PlanName?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PlanId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionProductId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ProvisionProductName?: string | null;
		PlanType?: CreateProvisionedProductPlanInputPlanType | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId?: string | null;
		Status?: ProvisionedProductPlanDetailsStatus | null;
		UpdatedTime?: Date | null;

		/** Maximum items: 5 */
		NotificationArns?: Array<string>;
		ProvisioningParameters?: Array<UpdateProvisioningParameter>;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;
		StatusMessage?: string | null;
	}

	/** Information about a plan. */
	export interface ProvisionedProductPlanDetailsFormProperties {
		CreatedTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PathId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,
		PlanName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PlanId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionProductId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ProvisionProductName: FormControl<string | null | undefined>,
		PlanType: FormControl<CreateProvisionedProductPlanInputPlanType | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		Status: FormControl<ProvisionedProductPlanDetailsStatus | null | undefined>,
		UpdatedTime: FormControl<Date | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateProvisionedProductPlanDetailsFormGroup() {
		return new FormGroup<ProvisionedProductPlanDetailsFormProperties>({
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			PathId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PlanName: new FormControl<string | null | undefined>(undefined),
			PlanId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisionProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisionProductName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9._-]*')]),
			PlanType: new FormControl<CreateProvisionedProductPlanInputPlanType | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Status: new FormControl<ProvisionedProductPlanDetailsStatus | null | undefined>(undefined),
			UpdatedTime: new FormControl<Date | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export enum ProvisionedProductPlanDetailsStatus { CREATE_IN_PROGRESS = 0, CREATE_SUCCESS = 1, CREATE_FAILED = 2, EXECUTE_IN_PROGRESS = 3, EXECUTE_SUCCESS = 4, EXECUTE_FAILED = 5 }


	/** Information about a resource change that will occur when a plan is executed. */
	export interface ResourceChange {
		Action?: ResourceChangeAction | null;
		LogicalResourceId?: string | null;
		PhysicalResourceId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType?: string | null;
		Replacement?: ResourceChangeReplacement | null;
		Scope?: Array<ResourceAttribute>;
		Details?: Array<ResourceChangeDetail>;
	}

	/** Information about a resource change that will occur when a plan is executed. */
	export interface ResourceChangeFormProperties {
		Action: FormControl<ResourceChangeAction | null | undefined>,
		LogicalResourceId: FormControl<string | null | undefined>,
		PhysicalResourceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType: FormControl<string | null | undefined>,
		Replacement: FormControl<ResourceChangeReplacement | null | undefined>,
	}
	export function CreateResourceChangeFormGroup() {
		return new FormGroup<ResourceChangeFormProperties>({
			Action: new FormControl<ResourceChangeAction | null | undefined>(undefined),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			Replacement: new FormControl<ResourceChangeReplacement | null | undefined>(undefined),
		});

	}

	export enum ResourceChangeAction { ADD = 0, MODIFY = 1, REMOVE = 2 }

	export enum ResourceChangeReplacement { TRUE = 0, FALSE = 1, CONDITIONAL = 2 }

	export enum ResourceAttribute { PROPERTIES = 0, METADATA = 1, CREATIONPOLICY = 2, UPDATEPOLICY = 3, DELETIONPOLICY = 4, TAGS = 5 }


	/** Information about a change to a resource attribute. */
	export interface ResourceChangeDetail {

		/** Information about a change to a resource attribute. */
		Target?: ResourceTargetDefinition;
		Evaluation?: ResourceChangeDetailEvaluation | null;
		CausingEntity?: string | null;
	}

	/** Information about a change to a resource attribute. */
	export interface ResourceChangeDetailFormProperties {
		Evaluation: FormControl<ResourceChangeDetailEvaluation | null | undefined>,
		CausingEntity: FormControl<string | null | undefined>,
	}
	export function CreateResourceChangeDetailFormGroup() {
		return new FormGroup<ResourceChangeDetailFormProperties>({
			Evaluation: new FormControl<ResourceChangeDetailEvaluation | null | undefined>(undefined),
			CausingEntity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a change to a resource attribute. */
	export interface ResourceTargetDefinition {
		Attribute?: ResourceAttribute | null;
		Name?: string | null;
		RequiresRecreation?: ResourceTargetDefinitionRequiresRecreation | null;
	}

	/** Information about a change to a resource attribute. */
	export interface ResourceTargetDefinitionFormProperties {
		Attribute: FormControl<ResourceAttribute | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RequiresRecreation: FormControl<ResourceTargetDefinitionRequiresRecreation | null | undefined>,
	}
	export function CreateResourceTargetDefinitionFormGroup() {
		return new FormGroup<ResourceTargetDefinitionFormProperties>({
			Attribute: new FormControl<ResourceAttribute | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RequiresRecreation: new FormControl<ResourceTargetDefinitionRequiresRecreation | null | undefined>(undefined),
		});

	}

	export enum ResourceTargetDefinitionRequiresRecreation { NEVER = 0, CONDITIONALLY = 1, ALWAYS = 2 }

	export enum ResourceChangeDetailEvaluation { STATIC = 0, DYNAMIC = 1 }

	export interface DescribeProvisionedProductPlanInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PlanId: string;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;

		/** Max length: 2024 */
		PageToken?: string | null;
	}
	export interface DescribeProvisionedProductPlanInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PlanId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProvisionedProductPlanInputFormGroup() {
		return new FormGroup<DescribeProvisionedProductPlanInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PlanId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface DescribeProvisioningArtifactOutput {

		/** Information about a provisioning artifact (also known as a version) for a product. */
		ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
		Info?: ProvisioningArtifactInfo;
		Status?: CreateConstraintOutputStatus | null;
	}
	export interface DescribeProvisioningArtifactOutputFormProperties {
		Status: FormControl<CreateConstraintOutputStatus | null | undefined>,
	}
	export function CreateDescribeProvisioningArtifactOutputFormGroup() {
		return new FormGroup<DescribeProvisioningArtifactOutputFormProperties>({
			Status: new FormControl<CreateConstraintOutputStatus | null | undefined>(undefined),
		});

	}

	export interface DescribeProvisioningArtifactInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId?: string | null;

		/** Max length: 8192 */
		ProvisioningArtifactName?: string | null;

		/** Max length: 8191 */
		ProductName?: string | null;
		Verbose?: boolean | null;
	}
	export interface DescribeProvisioningArtifactInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		ProvisioningArtifactName: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		ProductName: FormControl<string | null | undefined>,
		Verbose: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeProvisioningArtifactInputFormGroup() {
		return new FormGroup<DescribeProvisioningArtifactInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisioningArtifactName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			ProductName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
			Verbose: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeProvisioningParametersOutput {
		ProvisioningArtifactParameters?: Array<ProvisioningArtifactParameter>;
		ConstraintSummaries?: Array<ConstraintSummary>;
		UsageInstructions?: Array<UsageInstruction>;
		TagOptions?: Array<TagOptionSummary>;

		/** <p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
		ProvisioningArtifactPreferences?: ProvisioningArtifactPreferences;
	}
	export interface DescribeProvisioningParametersOutputFormProperties {
	}
	export function CreateDescribeProvisioningParametersOutputFormGroup() {
		return new FormGroup<DescribeProvisioningParametersOutputFormProperties>({
		});

	}


	/** Information about a parameter used to provision a product. */
	export interface ProvisioningArtifactParameter {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		ParameterKey?: string | null;
		DefaultValue?: string | null;
		ParameterType?: string | null;
		IsNoEcho?: boolean | null;
		Description?: string | null;

		/** The constraints that the administrator has put on the parameter. */
		ParameterConstraints?: ParameterConstraints;
	}

	/** Information about a parameter used to provision a product. */
	export interface ProvisioningArtifactParameterFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		ParameterKey: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
		ParameterType: FormControl<string | null | undefined>,
		IsNoEcho: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateProvisioningArtifactParameterFormGroup() {
		return new FormGroup<ProvisioningArtifactParameterFormProperties>({
			ParameterKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000)]),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			ParameterType: new FormControl<string | null | undefined>(undefined),
			IsNoEcho: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The constraints that the administrator has put on the parameter. */
	export interface ParameterConstraints {
		AllowedValues?: Array<string>;
	}

	/** The constraints that the administrator has put on the parameter. */
	export interface ParameterConstraintsFormProperties {
	}
	export function CreateParameterConstraintsFormGroup() {
		return new FormGroup<ParameterConstraintsFormProperties>({
		});

	}


	/** Summary information about a constraint. */
	export interface ConstraintSummary {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Type?: string | null;

		/** Max length: 2000 */
		Description?: string | null;
	}

	/** Summary information about a constraint. */
	export interface ConstraintSummaryFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Type: FormControl<string | null | undefined>,

		/** Max length: 2000 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateConstraintSummaryFormGroup() {
		return new FormGroup<ConstraintSummaryFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
		});

	}


	/** Additional information provided by the administrator. */
	export interface UsageInstruction {
		Type?: string | null;
		Value?: string | null;
	}

	/** Additional information provided by the administrator. */
	export interface UsageInstructionFormProperties {
		Type: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateUsageInstructionFormGroup() {
		return new FormGroup<UsageInstructionFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a TagOption. */
	export interface TagOptionSummary {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key?: string | null;
		Values?: Array<string>;
	}

	/** Summary information about a TagOption. */
	export interface TagOptionSummaryFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateTagOptionSummaryFormGroup() {
		return new FormGroup<TagOptionSummaryFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
		});

	}


	/** <p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
	export interface ProvisioningArtifactPreferences {
		StackSetAccounts?: Array<string>;
		StackSetRegions?: Array<string>;
	}

	/** <p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
	export interface ProvisioningArtifactPreferencesFormProperties {
	}
	export function CreateProvisioningArtifactPreferencesFormGroup() {
		return new FormGroup<ProvisioningArtifactPreferencesFormProperties>({
		});

	}

	export interface DescribeProvisioningParametersInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PathId?: string | null;
	}
	export interface DescribeProvisioningParametersInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PathId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProvisioningParametersInputFormGroup() {
		return new FormGroup<DescribeProvisioningParametersInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PathId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DescribeRecordOutput {

		/** Information about a request operation. */
		RecordDetail?: RecordDetail;
		RecordOutputs?: Array<RecordOutput>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface DescribeRecordOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecordOutputFormGroup() {
		return new FormGroup<DescribeRecordOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}


	/** Information about a request operation. */
	export interface RecordDetail {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		RecordId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ProvisionedProductName?: string | null;
		Status?: RecordDetailStatus | null;
		CreatedTime?: Date | null;
		UpdatedTime?: Date | null;
		ProvisionedProductType?: string | null;
		RecordType?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PathId?: string | null;
		RecordErrors?: Array<RecordError>;

		/** Maximum items: 50 */
		RecordTags?: Array<RecordTag>;
	}

	/** Information about a request operation. */
	export interface RecordDetailFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		RecordId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ProvisionedProductName: FormControl<string | null | undefined>,
		Status: FormControl<RecordDetailStatus | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		UpdatedTime: FormControl<Date | null | undefined>,
		ProvisionedProductType: FormControl<string | null | undefined>,
		RecordType: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PathId: FormControl<string | null | undefined>,
	}
	export function CreateRecordDetailFormGroup() {
		return new FormGroup<RecordDetailFormProperties>({
			RecordId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisionedProductName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9._-]*')]),
			Status: new FormControl<RecordDetailStatus | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			UpdatedTime: new FormControl<Date | null | undefined>(undefined),
			ProvisionedProductType: new FormControl<string | null | undefined>(undefined),
			RecordType: new FormControl<string | null | undefined>(undefined),
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PathId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export enum RecordDetailStatus { CREATED = 0, IN_PROGRESS = 1, IN_PROGRESS_IN_ERROR = 2, SUCCEEDED = 3, FAILED = 4 }


	/** The error code and description resulting from an operation. */
	export interface RecordError {
		Code?: string | null;
		Description?: string | null;
	}

	/** The error code and description resulting from an operation. */
	export interface RecordErrorFormProperties {
		Code: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateRecordErrorFormGroup() {
		return new FormGroup<RecordErrorFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a tag, which is a key-value pair. */
	export interface RecordTag {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Value?: string | null;
	}

	/** Information about a tag, which is a key-value pair. */
	export interface RecordTagFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateRecordTagFormGroup() {
		return new FormGroup<RecordTagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$')]),
		});

	}


	/** The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL. */
	export interface RecordOutput {
		OutputKey?: string | null;
		OutputValue?: string | null;
		Description?: string | null;
	}

	/** The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL. */
	export interface RecordOutputFormProperties {
		OutputKey: FormControl<string | null | undefined>,
		OutputValue: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateRecordOutputFormGroup() {
		return new FormGroup<RecordOutputFormProperties>({
			OutputKey: new FormControl<string | null | undefined>(undefined),
			OutputValue: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRecordInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/** Max length: 2024 */
		PageToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;
	}
	export interface DescribeRecordInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateDescribeRecordInputFormGroup() {
		return new FormGroup<DescribeRecordInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
		});

	}

	export interface DescribeServiceActionOutput {

		/** An object containing detailed information about the self-service action. */
		ServiceActionDetail?: ServiceActionDetail;
	}
	export interface DescribeServiceActionOutputFormProperties {
	}
	export function CreateDescribeServiceActionOutputFormGroup() {
		return new FormGroup<DescribeServiceActionOutputFormProperties>({
		});

	}

	export interface DescribeServiceActionInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/** Max length: 100 */
		AcceptLanguage?: string | null;
	}
	export interface DescribeServiceActionInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServiceActionInputFormGroup() {
		return new FormGroup<DescribeServiceActionInputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
		});

	}

	export interface DescribeServiceActionExecutionParametersOutput {
		ServiceActionParameters?: Array<ExecutionParameter>;
	}
	export interface DescribeServiceActionExecutionParametersOutputFormProperties {
	}
	export function CreateDescribeServiceActionExecutionParametersOutputFormGroup() {
		return new FormGroup<DescribeServiceActionExecutionParametersOutputFormProperties>({
		});

	}


	/** Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product. */
	export interface ExecutionParameter {

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Type?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 25
		 */
		DefaultValues?: Array<string>;
	}

	/** Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product. */
	export interface ExecutionParameterFormProperties {

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateExecutionParameterFormGroup() {
		return new FormGroup<ExecutionParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface DescribeServiceActionExecutionParametersInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ServiceActionId: string;

		/** Max length: 100 */
		AcceptLanguage?: string | null;
	}
	export interface DescribeServiceActionExecutionParametersInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ServiceActionId: FormControl<string | null | undefined>,

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServiceActionExecutionParametersInputFormGroup() {
		return new FormGroup<DescribeServiceActionExecutionParametersInputFormProperties>({
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ServiceActionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
		});

	}

	export interface DescribeTagOptionOutput {

		/** Information about a TagOption. */
		TagOptionDetail?: TagOptionDetail;
	}
	export interface DescribeTagOptionOutputFormProperties {
	}
	export function CreateDescribeTagOptionOutputFormGroup() {
		return new FormGroup<DescribeTagOptionOutputFormProperties>({
		});

	}

	export interface DescribeTagOptionInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;
	}
	export interface DescribeTagOptionInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTagOptionInputFormGroup() {
		return new FormGroup<DescribeTagOptionInputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface DisableAWSOrganizationsAccessOutput {
	}
	export interface DisableAWSOrganizationsAccessOutputFormProperties {
	}
	export function CreateDisableAWSOrganizationsAccessOutputFormGroup() {
		return new FormGroup<DisableAWSOrganizationsAccessOutputFormProperties>({
		});

	}

	export interface DisableAWSOrganizationsAccessInput {
	}
	export interface DisableAWSOrganizationsAccessInputFormProperties {
	}
	export function CreateDisableAWSOrganizationsAccessInputFormGroup() {
		return new FormGroup<DisableAWSOrganizationsAccessInputFormProperties>({
		});

	}

	export interface DisassociateBudgetFromResourceOutput {
	}
	export interface DisassociateBudgetFromResourceOutputFormProperties {
	}
	export function CreateDisassociateBudgetFromResourceOutputFormGroup() {
		return new FormGroup<DisassociateBudgetFromResourceOutputFormProperties>({
		});

	}

	export interface DisassociateBudgetFromResourceInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ResourceId: string;
	}
	export interface DisassociateBudgetFromResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		BudgetName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateBudgetFromResourceInputFormGroup() {
		return new FormGroup<DisassociateBudgetFromResourceInputFormProperties>({
			BudgetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DisassociatePrincipalFromPortfolioOutput {
	}
	export interface DisassociatePrincipalFromPortfolioOutputFormProperties {
	}
	export function CreateDisassociatePrincipalFromPortfolioOutputFormGroup() {
		return new FormGroup<DisassociatePrincipalFromPortfolioOutputFormProperties>({
		});

	}

	export interface DisassociatePrincipalFromPortfolioInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: string;

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		PrincipalARN: string;
	}
	export interface DisassociatePrincipalFromPortfolioInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		PrincipalARN: FormControl<string | null | undefined>,
	}
	export function CreateDisassociatePrincipalFromPortfolioInputFormGroup() {
		return new FormGroup<DisassociatePrincipalFromPortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PrincipalARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000)]),
		});

	}

	export interface DisassociateProductFromPortfolioOutput {
	}
	export interface DisassociateProductFromPortfolioOutputFormProperties {
	}
	export function CreateDisassociateProductFromPortfolioOutputFormGroup() {
		return new FormGroup<DisassociateProductFromPortfolioOutputFormProperties>({
		});

	}

	export interface DisassociateProductFromPortfolioInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: string;
	}
	export interface DisassociateProductFromPortfolioInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateProductFromPortfolioInputFormGroup() {
		return new FormGroup<DisassociateProductFromPortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DisassociateServiceActionFromProvisioningArtifactOutput {
	}
	export interface DisassociateServiceActionFromProvisioningArtifactOutputFormProperties {
	}
	export function CreateDisassociateServiceActionFromProvisioningArtifactOutputFormGroup() {
		return new FormGroup<DisassociateServiceActionFromProvisioningArtifactOutputFormProperties>({
		});

	}

	export interface DisassociateServiceActionFromProvisioningArtifactInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ServiceActionId: string;

		/** Max length: 100 */
		AcceptLanguage?: string | null;
	}
	export interface DisassociateServiceActionFromProvisioningArtifactInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ServiceActionId: FormControl<string | null | undefined>,

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateServiceActionFromProvisioningArtifactInputFormGroup() {
		return new FormGroup<DisassociateServiceActionFromProvisioningArtifactInputFormProperties>({
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ServiceActionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
		});

	}

	export interface DisassociateTagOptionFromResourceOutput {
	}
	export interface DisassociateTagOptionFromResourceOutputFormProperties {
	}
	export function CreateDisassociateTagOptionFromResourceOutputFormGroup() {
		return new FormGroup<DisassociateTagOptionFromResourceOutputFormProperties>({
		});

	}

	export interface DisassociateTagOptionFromResourceInput {

		/** Required */
		ResourceId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TagOptionId: string;
	}
	export interface DisassociateTagOptionFromResourceInputFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TagOptionId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateTagOptionFromResourceInputFormGroup() {
		return new FormGroup<DisassociateTagOptionFromResourceInputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TagOptionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface EnableAWSOrganizationsAccessOutput {
	}
	export interface EnableAWSOrganizationsAccessOutputFormProperties {
	}
	export function CreateEnableAWSOrganizationsAccessOutputFormGroup() {
		return new FormGroup<EnableAWSOrganizationsAccessOutputFormProperties>({
		});

	}

	export interface EnableAWSOrganizationsAccessInput {
	}
	export interface EnableAWSOrganizationsAccessInputFormProperties {
	}
	export function CreateEnableAWSOrganizationsAccessInputFormGroup() {
		return new FormGroup<EnableAWSOrganizationsAccessInputFormProperties>({
		});

	}

	export interface ExecuteProvisionedProductPlanOutput {

		/** Information about a request operation. */
		RecordDetail?: RecordDetail;
	}
	export interface ExecuteProvisionedProductPlanOutputFormProperties {
	}
	export function CreateExecuteProvisionedProductPlanOutputFormGroup() {
		return new FormGroup<ExecuteProvisionedProductPlanOutputFormProperties>({
		});

	}

	export interface ExecuteProvisionedProductPlanInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PlanId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: string;
	}
	export interface ExecuteProvisionedProductPlanInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PlanId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateExecuteProvisionedProductPlanInputFormGroup() {
		return new FormGroup<ExecuteProvisionedProductPlanInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PlanId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}

	export interface ExecuteProvisionedProductServiceActionOutput {

		/** Information about a request operation. */
		RecordDetail?: RecordDetail;
	}
	export interface ExecuteProvisionedProductServiceActionOutputFormProperties {
	}
	export function CreateExecuteProvisionedProductServiceActionOutputFormGroup() {
		return new FormGroup<ExecuteProvisionedProductServiceActionOutputFormProperties>({
		});

	}

	export interface ExecuteProvisionedProductServiceActionInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ServiceActionId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ExecuteToken: string;

		/** Max length: 100 */
		AcceptLanguage?: string | null;
		Parameters?: ExecutionParameterMap;
	}
	export interface ExecuteProvisionedProductServiceActionInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ServiceActionId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ExecuteToken: FormControl<string | null | undefined>,

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateExecuteProvisionedProductServiceActionInputFormGroup() {
		return new FormGroup<ExecuteProvisionedProductServiceActionInputFormProperties>({
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ServiceActionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ExecuteToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
		});

	}

	export interface ExecutionParameterMap {
	}
	export interface ExecutionParameterMapFormProperties {
	}
	export function CreateExecutionParameterMapFormGroup() {
		return new FormGroup<ExecutionParameterMapFormProperties>({
		});

	}

	export interface GetAWSOrganizationsAccessStatusOutput {
		AccessStatus?: GetAWSOrganizationsAccessStatusOutputAccessStatus | null;
	}
	export interface GetAWSOrganizationsAccessStatusOutputFormProperties {
		AccessStatus: FormControl<GetAWSOrganizationsAccessStatusOutputAccessStatus | null | undefined>,
	}
	export function CreateGetAWSOrganizationsAccessStatusOutputFormGroup() {
		return new FormGroup<GetAWSOrganizationsAccessStatusOutputFormProperties>({
			AccessStatus: new FormControl<GetAWSOrganizationsAccessStatusOutputAccessStatus | null | undefined>(undefined),
		});

	}

	export enum GetAWSOrganizationsAccessStatusOutputAccessStatus { ENABLED = 0, UNDER_CHANGE = 1, DISABLED = 2 }

	export interface GetAWSOrganizationsAccessStatusInput {
	}
	export interface GetAWSOrganizationsAccessStatusInputFormProperties {
	}
	export function CreateGetAWSOrganizationsAccessStatusInputFormGroup() {
		return new FormGroup<GetAWSOrganizationsAccessStatusInputFormProperties>({
		});

	}

	export interface ListAcceptedPortfolioSharesOutput {
		PortfolioDetails?: Array<PortfolioDetail>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListAcceptedPortfolioSharesOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAcceptedPortfolioSharesOutputFormGroup() {
		return new FormGroup<ListAcceptedPortfolioSharesOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListAcceptedPortfolioSharesInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/** Max length: 2024 */
		PageToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;
		PortfolioShareType?: AcceptPortfolioShareInputPortfolioShareType | null;
	}
	export interface ListAcceptedPortfolioSharesInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,
		PortfolioShareType: FormControl<AcceptPortfolioShareInputPortfolioShareType | null | undefined>,
	}
	export function CreateListAcceptedPortfolioSharesInputFormGroup() {
		return new FormGroup<ListAcceptedPortfolioSharesInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			PortfolioShareType: new FormControl<AcceptPortfolioShareInputPortfolioShareType | null | undefined>(undefined),
		});

	}

	export interface ListBudgetsForResourceOutput {
		Budgets?: Array<BudgetDetail>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListBudgetsForResourceOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBudgetsForResourceOutputFormGroup() {
		return new FormGroup<ListBudgetsForResourceOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListBudgetsForResourceInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ResourceId: string;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;

		/** Max length: 2024 */
		PageToken?: string | null;
	}
	export interface ListBudgetsForResourceInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBudgetsForResourceInputFormGroup() {
		return new FormGroup<ListBudgetsForResourceInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListConstraintsForPortfolioOutput {
		ConstraintDetails?: Array<ConstraintDetail>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListConstraintsForPortfolioOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConstraintsForPortfolioOutputFormGroup() {
		return new FormGroup<ListConstraintsForPortfolioOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListConstraintsForPortfolioInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;

		/** Max length: 2024 */
		PageToken?: string | null;
	}
	export interface ListConstraintsForPortfolioInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConstraintsForPortfolioInputFormGroup() {
		return new FormGroup<ListConstraintsForPortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListLaunchPathsOutput {
		LaunchPathSummaries?: Array<LaunchPathSummary>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListLaunchPathsOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLaunchPathsOutputFormGroup() {
		return new FormGroup<ListLaunchPathsOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}


	/** Summary information about a product path for a user. */
	export interface LaunchPathSummary {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;
		ConstraintSummaries?: Array<ConstraintSummary>;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;
		Name?: string | null;
	}

	/** Summary information about a product path for a user. */
	export interface LaunchPathSummaryFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateLaunchPathSummaryFormGroup() {
		return new FormGroup<LaunchPathSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLaunchPathsInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;

		/** Max length: 2024 */
		PageToken?: string | null;
	}
	export interface ListLaunchPathsInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLaunchPathsInputFormGroup() {
		return new FormGroup<ListLaunchPathsInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListOrganizationPortfolioAccessOutput {
		OrganizationNodes?: Array<OrganizationNode>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListOrganizationPortfolioAccessOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationPortfolioAccessOutputFormGroup() {
		return new FormGroup<ListOrganizationPortfolioAccessOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListOrganizationPortfolioAccessInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: string;

		/** Required */
		OrganizationNodeType: OrganizationNodeType;

		/** Max length: 2024 */
		PageToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;
	}
	export interface ListOrganizationPortfolioAccessInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,

		/** Required */
		OrganizationNodeType: FormControl<OrganizationNodeType | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateListOrganizationPortfolioAccessInputFormGroup() {
		return new FormGroup<ListOrganizationPortfolioAccessInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			OrganizationNodeType: new FormControl<OrganizationNodeType | null | undefined>(undefined, [Validators.required]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
		});

	}

	export interface ListPortfolioAccessOutput {
		AccountIds?: Array<string>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListPortfolioAccessOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPortfolioAccessOutputFormGroup() {
		return new FormGroup<ListPortfolioAccessOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListPortfolioAccessInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		OrganizationParentId?: string | null;

		/** Max length: 2024 */
		PageToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;
	}
	export interface ListPortfolioAccessInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		OrganizationParentId: FormControl<string | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateListPortfolioAccessInputFormGroup() {
		return new FormGroup<ListPortfolioAccessInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			OrganizationParentId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
		});

	}

	export interface ListPortfoliosOutput {
		PortfolioDetails?: Array<PortfolioDetail>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListPortfoliosOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPortfoliosOutputFormGroup() {
		return new FormGroup<ListPortfoliosOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListPortfoliosInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/** Max length: 2024 */
		PageToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;
	}
	export interface ListPortfoliosInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateListPortfoliosInputFormGroup() {
		return new FormGroup<ListPortfoliosInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
		});

	}

	export interface ListPortfoliosForProductOutput {
		PortfolioDetails?: Array<PortfolioDetail>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListPortfoliosForProductOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPortfoliosForProductOutputFormGroup() {
		return new FormGroup<ListPortfoliosForProductOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListPortfoliosForProductInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/** Max length: 2024 */
		PageToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;
	}
	export interface ListPortfoliosForProductInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateListPortfoliosForProductInputFormGroup() {
		return new FormGroup<ListPortfoliosForProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
		});

	}

	export interface ListPrincipalsForPortfolioOutput {
		Principals?: Array<Principal>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListPrincipalsForPortfolioOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrincipalsForPortfolioOutputFormGroup() {
		return new FormGroup<ListPrincipalsForPortfolioOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}


	/** Information about a principal. */
	export interface Principal {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		PrincipalARN?: string | null;
		PrincipalType?: AssociatePrincipalWithPortfolioInputPrincipalType | null;
	}

	/** Information about a principal. */
	export interface PrincipalFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		PrincipalARN: FormControl<string | null | undefined>,
		PrincipalType: FormControl<AssociatePrincipalWithPortfolioInputPrincipalType | null | undefined>,
	}
	export function CreatePrincipalFormGroup() {
		return new FormGroup<PrincipalFormProperties>({
			PrincipalARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000)]),
			PrincipalType: new FormControl<AssociatePrincipalWithPortfolioInputPrincipalType | null | undefined>(undefined),
		});

	}

	export interface ListPrincipalsForPortfolioInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: string;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;

		/** Max length: 2024 */
		PageToken?: string | null;
	}
	export interface ListPrincipalsForPortfolioInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrincipalsForPortfolioInputFormGroup() {
		return new FormGroup<ListPrincipalsForPortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListProvisionedProductPlansOutput {
		ProvisionedProductPlans?: Array<ProvisionedProductPlanSummary>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListProvisionedProductPlansOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProvisionedProductPlansOutputFormGroup() {
		return new FormGroup<ListProvisionedProductPlansOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}


	/** Summary information about a plan. */
	export interface ProvisionedProductPlanSummary {
		PlanName?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PlanId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionProductId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ProvisionProductName?: string | null;
		PlanType?: CreateProvisionedProductPlanInputPlanType | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId?: string | null;
	}

	/** Summary information about a plan. */
	export interface ProvisionedProductPlanSummaryFormProperties {
		PlanName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PlanId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionProductId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ProvisionProductName: FormControl<string | null | undefined>,
		PlanType: FormControl<CreateProvisionedProductPlanInputPlanType | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionedProductPlanSummaryFormGroup() {
		return new FormGroup<ProvisionedProductPlanSummaryFormProperties>({
			PlanName: new FormControl<string | null | undefined>(undefined),
			PlanId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisionProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisionProductName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9._-]*')]),
			PlanType: new FormControl<CreateProvisionedProductPlanInputPlanType | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface ListProvisionedProductPlansInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionProductId?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;

		/** Max length: 2024 */
		PageToken?: string | null;

		/** The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter;
	}
	export interface ListProvisionedProductPlansInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionProductId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProvisionedProductPlansInputFormGroup() {
		return new FormGroup<ListProvisionedProductPlansInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProvisionProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}


	/** The access level to use to filter results. */
	export interface AccessLevelFilter {
		Key?: AccessLevelFilterKey | null;
		Value?: string | null;
	}

	/** The access level to use to filter results. */
	export interface AccessLevelFilterFormProperties {
		Key: FormControl<AccessLevelFilterKey | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAccessLevelFilterFormGroup() {
		return new FormGroup<AccessLevelFilterFormProperties>({
			Key: new FormControl<AccessLevelFilterKey | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccessLevelFilterKey { Account = 0, Role = 1, User = 2 }

	export interface ListProvisioningArtifactsOutput {
		ProvisioningArtifactDetails?: Array<ProvisioningArtifactDetail>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListProvisioningArtifactsOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProvisioningArtifactsOutputFormGroup() {
		return new FormGroup<ListProvisioningArtifactsOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListProvisioningArtifactsInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;
	}
	export interface ListProvisioningArtifactsInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,
	}
	export function CreateListProvisioningArtifactsInputFormGroup() {
		return new FormGroup<ListProvisioningArtifactsInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
		});

	}

	export interface ListProvisioningArtifactsForServiceActionOutput {
		ProvisioningArtifactViews?: Array<ProvisioningArtifactView>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListProvisioningArtifactsForServiceActionOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProvisioningArtifactsForServiceActionOutputFormGroup() {
		return new FormGroup<ListProvisioningArtifactsForServiceActionOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}


	/** An object that contains summary information about a product view and a provisioning artifact. */
	export interface ProvisioningArtifactView {

		/** Summary information about a product view. */
		ProductViewSummary?: ProductViewSummary;

		/** Information about a provisioning artifact. A provisioning artifact is also known as a product version. */
		ProvisioningArtifact?: ProvisioningArtifact;
	}

	/** An object that contains summary information about a product view and a provisioning artifact. */
	export interface ProvisioningArtifactViewFormProperties {
	}
	export function CreateProvisioningArtifactViewFormGroup() {
		return new FormGroup<ProvisioningArtifactViewFormProperties>({
		});

	}

	export interface ListProvisioningArtifactsForServiceActionInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ServiceActionId: string;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;

		/** Max length: 2024 */
		PageToken?: string | null;

		/** Max length: 100 */
		AcceptLanguage?: string | null;
	}
	export interface ListProvisioningArtifactsForServiceActionInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ServiceActionId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateListProvisioningArtifactsForServiceActionInputFormGroup() {
		return new FormGroup<ListProvisioningArtifactsForServiceActionInputFormProperties>({
			ServiceActionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
		});

	}

	export interface ListRecordHistoryOutput {
		RecordDetails?: Array<RecordDetail>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListRecordHistoryOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecordHistoryOutputFormGroup() {
		return new FormGroup<ListRecordHistoryOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListRecordHistoryInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/** The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter;

		/** The search filter to use when listing history records. */
		SearchFilter?: ListRecordHistorySearchFilter;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;

		/** Max length: 2024 */
		PageToken?: string | null;
	}
	export interface ListRecordHistoryInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecordHistoryInputFormGroup() {
		return new FormGroup<ListRecordHistoryInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}


	/** The search filter to use when listing history records. */
	export interface ListRecordHistorySearchFilter {
		Key?: string | null;
		Value?: string | null;
	}

	/** The search filter to use when listing history records. */
	export interface ListRecordHistorySearchFilterFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateListRecordHistorySearchFilterFormGroup() {
		return new FormGroup<ListRecordHistorySearchFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourcesForTagOptionOutput {
		ResourceDetails?: Array<ResourceDetail>;

		/** Max length: 2024 */
		PageToken?: string | null;
	}
	export interface ListResourcesForTagOptionOutputFormProperties {

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesForTagOptionOutputFormGroup() {
		return new FormGroup<ListResourcesForTagOptionOutputFormProperties>({
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}


	/** Information about a resource. */
	export interface ResourceDetail {
		Id?: string | null;
		ARN?: string | null;
		Name?: string | null;
		Description?: string | null;
		CreatedTime?: Date | null;
	}

	/** Information about a resource. */
	export interface ResourceDetailFormProperties {
		Id: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateResourceDetailFormGroup() {
		return new FormGroup<ResourceDetailFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListResourcesForTagOptionInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TagOptionId: string;
		ResourceType?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;

		/** Max length: 2024 */
		PageToken?: string | null;
	}
	export interface ListResourcesForTagOptionInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TagOptionId: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesForTagOptionInputFormGroup() {
		return new FormGroup<ListResourcesForTagOptionInputFormProperties>({
			TagOptionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListServiceActionsOutput {
		ServiceActionSummaries?: Array<ServiceActionSummary>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListServiceActionsOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceActionsOutputFormGroup() {
		return new FormGroup<ListServiceActionsOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListServiceActionsInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;

		/** Max length: 2024 */
		PageToken?: string | null;
	}
	export interface ListServiceActionsInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceActionsInputFormGroup() {
		return new FormGroup<ListServiceActionsInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListServiceActionsForProvisioningArtifactOutput {
		ServiceActionSummaries?: Array<ServiceActionSummary>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListServiceActionsForProvisioningArtifactOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceActionsForProvisioningArtifactOutputFormGroup() {
		return new FormGroup<ListServiceActionsForProvisioningArtifactOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListServiceActionsForProvisioningArtifactInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: string;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;

		/** Max length: 2024 */
		PageToken?: string | null;

		/** Max length: 100 */
		AcceptLanguage?: string | null;
	}
	export interface ListServiceActionsForProvisioningArtifactInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateListServiceActionsForProvisioningArtifactInputFormGroup() {
		return new FormGroup<ListServiceActionsForProvisioningArtifactInputFormProperties>({
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
		});

	}

	export interface ListStackInstancesForProvisionedProductOutput {
		StackInstances?: Array<StackInstance>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ListStackInstancesForProvisionedProductOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackInstancesForProvisionedProductOutputFormGroup() {
		return new FormGroup<ListStackInstancesForProvisionedProductOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}


	/** An AWS CloudFormation stack, in a specific account and region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status.  */
	export interface StackInstance {
		Account?: string | null;
		Region?: string | null;
		StackInstanceStatus?: StackInstanceStackInstanceStatus | null;
	}

	/** An AWS CloudFormation stack, in a specific account and region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status.  */
	export interface StackInstanceFormProperties {
		Account: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		StackInstanceStatus: FormControl<StackInstanceStackInstanceStatus | null | undefined>,
	}
	export function CreateStackInstanceFormGroup() {
		return new FormGroup<StackInstanceFormProperties>({
			Account: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{12}$')]),
			Region: new FormControl<string | null | undefined>(undefined),
			StackInstanceStatus: new FormControl<StackInstanceStackInstanceStatus | null | undefined>(undefined),
		});

	}

	export enum StackInstanceStackInstanceStatus { CURRENT = 0, OUTDATED = 1, INOPERABLE = 2 }

	export interface ListStackInstancesForProvisionedProductInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId: string;

		/** Max length: 2024 */
		PageToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;
	}
	export interface ListStackInstancesForProvisionedProductInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId: FormControl<string | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateListStackInstancesForProvisionedProductInputFormGroup() {
		return new FormGroup<ListStackInstancesForProvisionedProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
		});

	}

	export interface ListTagOptionsOutput {
		TagOptionDetails?: Array<TagOptionDetail>;

		/** Max length: 2024 */
		PageToken?: string | null;
	}
	export interface ListTagOptionsOutputFormProperties {

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagOptionsOutputFormGroup() {
		return new FormGroup<ListTagOptionsOutputFormProperties>({
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ListTagOptionsInput {

		/** Filters to use when listing TagOptions. */
		Filters?: ListTagOptionsFilters;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;

		/** Max length: 2024 */
		PageToken?: string | null;
	}
	export interface ListTagOptionsInputFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagOptionsInputFormGroup() {
		return new FormGroup<ListTagOptionsInputFormProperties>({
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}


	/** Filters to use when listing TagOptions. */
	export interface ListTagOptionsFilters {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Value?: string | null;
		Active?: boolean | null;
	}

	/** Filters to use when listing TagOptions. */
	export interface ListTagOptionsFiltersFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
		Active: FormControl<boolean | null | undefined>,
	}
	export function CreateListTagOptionsFiltersFormGroup() {
		return new FormGroup<ListTagOptionsFiltersFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ProvisionProductOutput {

		/** Information about a request operation. */
		RecordDetail?: RecordDetail;
	}
	export interface ProvisionProductOutputFormProperties {
	}
	export function CreateProvisionProductOutputFormGroup() {
		return new FormGroup<ProvisionProductOutputFormProperties>({
		});

	}

	export interface ProvisionProductInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PathId?: string | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ProvisionedProductName: string;
		ProvisioningParameters?: Array<ProvisioningParameter>;

		/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
		ProvisioningPreferences?: ProvisioningPreferences;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;

		/** Maximum items: 5 */
		NotificationArns?: Array<string>;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ProvisionToken: string;
	}
	export interface ProvisionProductInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PathId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ProvisionedProductName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ProvisionToken: FormControl<string | null | undefined>,
	}
	export function CreateProvisionProductInputFormGroup() {
		return new FormGroup<ProvisionProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PathId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisionedProductName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9._-]*')]),
			ProvisionToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}


	/** Information about a parameter used to provision a product. */
	export interface ProvisioningParameter {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Key?: string | null;

		/** Max length: 4096 */
		Value?: string | null;
	}

	/** Information about a parameter used to provision a product. */
	export interface ProvisioningParameterFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateProvisioningParameterFormGroup() {
		return new FormGroup<ProvisioningParameterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}


	/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
	export interface ProvisioningPreferences {
		StackSetAccounts?: Array<string>;
		StackSetRegions?: Array<string>;

		/** Minimum: 0 */
		StackSetFailureToleranceCount?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		StackSetFailureTolerancePercentage?: number | null;

		/** Minimum: 1 */
		StackSetMaxConcurrencyCount?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		StackSetMaxConcurrencyPercentage?: number | null;
	}

	/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
	export interface ProvisioningPreferencesFormProperties {

		/** Minimum: 0 */
		StackSetFailureToleranceCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		StackSetFailureTolerancePercentage: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		StackSetMaxConcurrencyCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		StackSetMaxConcurrencyPercentage: FormControl<number | null | undefined>,
	}
	export function CreateProvisioningPreferencesFormGroup() {
		return new FormGroup<ProvisioningPreferencesFormProperties>({
			StackSetFailureToleranceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			StackSetFailureTolerancePercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			StackSetMaxConcurrencyCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			StackSetMaxConcurrencyPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface RejectPortfolioShareOutput {
	}
	export interface RejectPortfolioShareOutputFormProperties {
	}
	export function CreateRejectPortfolioShareOutputFormGroup() {
		return new FormGroup<RejectPortfolioShareOutputFormProperties>({
		});

	}

	export interface RejectPortfolioShareInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: string;
		PortfolioShareType?: AcceptPortfolioShareInputPortfolioShareType | null;
	}
	export interface RejectPortfolioShareInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,
		PortfolioShareType: FormControl<AcceptPortfolioShareInputPortfolioShareType | null | undefined>,
	}
	export function CreateRejectPortfolioShareInputFormGroup() {
		return new FormGroup<RejectPortfolioShareInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PortfolioShareType: new FormControl<AcceptPortfolioShareInputPortfolioShareType | null | undefined>(undefined),
		});

	}

	export interface ScanProvisionedProductsOutput {
		ProvisionedProducts?: Array<ProvisionedProductDetail>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface ScanProvisionedProductsOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateScanProvisionedProductsOutputFormGroup() {
		return new FormGroup<ScanProvisionedProductsOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ScanProvisionedProductsInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/** The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;

		/** Max length: 2024 */
		PageToken?: string | null;
	}
	export interface ScanProvisionedProductsInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateScanProvisionedProductsInputFormGroup() {
		return new FormGroup<ScanProvisionedProductsInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface SearchProductsOutput {
		ProductViewSummaries?: Array<ProductViewSummary>;
		ProductViewAggregations?: ProductViewAggregations;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface SearchProductsOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchProductsOutputFormGroup() {
		return new FormGroup<SearchProductsOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ProductViewAggregations {
	}
	export interface ProductViewAggregationsFormProperties {
	}
	export function CreateProductViewAggregationsFormGroup() {
		return new FormGroup<ProductViewAggregationsFormProperties>({
		});

	}

	export interface SearchProductsInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;
		Filters?: ProductViewFilters;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;
		SortBy?: SearchProductsInputSortBy | null;
		SortOrder?: SearchProductsInputSortOrder | null;

		/** Max length: 2024 */
		PageToken?: string | null;
	}
	export interface SearchProductsInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,
		SortBy: FormControl<SearchProductsInputSortBy | null | undefined>,
		SortOrder: FormControl<SearchProductsInputSortOrder | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchProductsInputFormGroup() {
		return new FormGroup<SearchProductsInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			SortBy: new FormControl<SearchProductsInputSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<SearchProductsInputSortOrder | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ProductViewFilters {
	}
	export interface ProductViewFiltersFormProperties {
	}
	export function CreateProductViewFiltersFormGroup() {
		return new FormGroup<ProductViewFiltersFormProperties>({
		});

	}

	export enum SearchProductsInputSortBy { Title = 0, VersionCount = 1, CreationDate = 2 }

	export enum SearchProductsInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface SearchProductsAsAdminOutput {
		ProductViewDetails?: Array<ProductViewDetail>;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface SearchProductsAsAdminOutputFormProperties {

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchProductsAsAdminOutputFormGroup() {
		return new FormGroup<SearchProductsAsAdminOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface SearchProductsAsAdminInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId?: string | null;
		Filters?: ProductViewFilters;
		SortBy?: SearchProductsInputSortBy | null;
		SortOrder?: SearchProductsInputSortOrder | null;

		/** Max length: 2024 */
		PageToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize?: number | null;
		ProductSource?: SearchProductsAsAdminInputProductSource | null;
	}
	export interface SearchProductsAsAdminInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PortfolioId: FormControl<string | null | undefined>,
		SortBy: FormControl<SearchProductsInputSortBy | null | undefined>,
		SortOrder: FormControl<SearchProductsInputSortOrder | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		PageSize: FormControl<number | null | undefined>,
		ProductSource: FormControl<SearchProductsAsAdminInputProductSource | null | undefined>,
	}
	export function CreateSearchProductsAsAdminInputFormGroup() {
		return new FormGroup<SearchProductsAsAdminInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			PortfolioId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			SortBy: new FormControl<SearchProductsInputSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<SearchProductsInputSortOrder | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			ProductSource: new FormControl<SearchProductsAsAdminInputProductSource | null | undefined>(undefined),
		});

	}

	export enum SearchProductsAsAdminInputProductSource { ACCOUNT = 0 }

	export interface SearchProvisionedProductsOutput {
		ProvisionedProducts?: Array<ProvisionedProductAttribute>;
		TotalResultsCount?: number | null;

		/** Max length: 2024 */
		NextPageToken?: string | null;
	}
	export interface SearchProvisionedProductsOutputFormProperties {
		TotalResultsCount: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchProvisionedProductsOutputFormGroup() {
		return new FormGroup<SearchProvisionedProductsOutputFormProperties>({
			TotalResultsCount: new FormControl<number | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}


	/** Information about a provisioned product. */
	export interface ProvisionedProductAttribute {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		Arn?: string | null;
		Type?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;
		Status?: ProvisionedProductDetailStatus | null;
		StatusMessage?: string | null;
		CreatedTime?: Date | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		LastRecordId?: string | null;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;
		PhysicalId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId?: string | null;
		UserArn?: string | null;
		UserArnSession?: string | null;
	}

	/** Information about a provisioned product. */
	export interface ProvisionedProductAttributeFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		Arn: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		Status: FormControl<ProvisionedProductDetailStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		LastRecordId: FormControl<string | null | undefined>,
		PhysicalId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		UserArn: FormControl<string | null | undefined>,
		UserArnSession: FormControl<string | null | undefined>,
	}
	export function CreateProvisionedProductAttributeFormGroup() {
		return new FormGroup<ProvisionedProductAttributeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9._-]{0,127}|arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9._-]{0,127}|arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			Type: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Status: new FormControl<ProvisionedProductDetailStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			LastRecordId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PhysicalId: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			UserArn: new FormControl<string | null | undefined>(undefined),
			UserArnSession: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchProvisionedProductsInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/** The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter;
		Filters?: ProvisionedProductFilters;
		SortBy?: string | null;
		SortOrder?: SearchProductsInputSortOrder | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		PageSize?: number | null;

		/** Max length: 2024 */
		PageToken?: string | null;
	}
	export interface SearchProvisionedProductsInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,
		SortBy: FormControl<string | null | undefined>,
		SortOrder: FormControl<SearchProductsInputSortOrder | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		PageSize: FormControl<number | null | undefined>,

		/** Max length: 2024 */
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchProvisionedProductsInputFormGroup() {
		return new FormGroup<SearchProvisionedProductsInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			SortBy: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SearchProductsInputSortOrder | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			PageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2024), Validators.pattern('[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*')]),
		});

	}

	export interface ProvisionedProductFilters {
	}
	export interface ProvisionedProductFiltersFormProperties {
	}
	export function CreateProvisionedProductFiltersFormGroup() {
		return new FormGroup<ProvisionedProductFiltersFormProperties>({
		});

	}

	export interface TerminateProvisionedProductOutput {

		/** Information about a request operation. */
		RecordDetail?: RecordDetail;
	}
	export interface TerminateProvisionedProductOutputFormProperties {
	}
	export function CreateTerminateProvisionedProductOutputFormGroup() {
		return new FormGroup<TerminateProvisionedProductOutputFormProperties>({
		});

	}

	export interface TerminateProvisionedProductInput {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		ProvisionedProductName?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId?: string | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TerminateToken: string;
		IgnoreErrors?: boolean | null;

		/** Max length: 100 */
		AcceptLanguage?: string | null;
	}
	export interface TerminateProvisionedProductInputFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		ProvisionedProductName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TerminateToken: FormControl<string | null | undefined>,
		IgnoreErrors: FormControl<boolean | null | undefined>,

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateTerminateProvisionedProductInputFormGroup() {
		return new FormGroup<TerminateProvisionedProductInputFormProperties>({
			ProvisionedProductName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9._-]{0,127}|arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			TerminateToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			IgnoreErrors: new FormControl<boolean | null | undefined>(undefined),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
		});

	}

	export interface UpdateConstraintOutput {

		/** Information about a constraint. */
		ConstraintDetail?: ConstraintDetail;
		ConstraintParameters?: string | null;
		Status?: CreateConstraintOutputStatus | null;
	}
	export interface UpdateConstraintOutputFormProperties {
		ConstraintParameters: FormControl<string | null | undefined>,
		Status: FormControl<CreateConstraintOutputStatus | null | undefined>,
	}
	export function CreateUpdateConstraintOutputFormGroup() {
		return new FormGroup<UpdateConstraintOutputFormProperties>({
			ConstraintParameters: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<CreateConstraintOutputStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateConstraintInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/** Max length: 2000 */
		Description?: string | null;
		Parameters?: string | null;
	}
	export interface UpdateConstraintInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Max length: 2000 */
		Description: FormControl<string | null | undefined>,
		Parameters: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConstraintInputFormGroup() {
		return new FormGroup<UpdateConstraintInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			Parameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePortfolioOutput {

		/** Information about a portfolio. */
		PortfolioDetail?: PortfolioDetail;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;
	}
	export interface UpdatePortfolioOutputFormProperties {
	}
	export function CreateUpdatePortfolioOutputFormGroup() {
		return new FormGroup<UpdatePortfolioOutputFormProperties>({
		});

	}

	export interface UpdatePortfolioInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/** Max length: 2000 */
		Description?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		ProviderName?: string | null;

		/** Maximum items: 20 */
		AddTags?: Array<Tag>;
		RemoveTags?: Array<string>;
	}
	export interface UpdatePortfolioInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,

		/** Max length: 2000 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		ProviderName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePortfolioInputFormGroup() {
		return new FormGroup<UpdatePortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
		});

	}

	export interface UpdateProductOutput {

		/** Information about a product view. */
		ProductViewDetail?: ProductViewDetail;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;
	}
	export interface UpdateProductOutputFormProperties {
	}
	export function CreateUpdateProductOutputFormGroup() {
		return new FormGroup<UpdateProductOutputFormProperties>({
		});

	}

	export interface UpdateProductInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/** Max length: 8191 */
		Name?: string | null;

		/** Max length: 8191 */
		Owner?: string | null;

		/** Max length: 8191 */
		Description?: string | null;

		/** Max length: 8191 */
		Distributor?: string | null;

		/** Max length: 8191 */
		SupportDescription?: string | null;

		/** Max length: 254 */
		SupportEmail?: string | null;

		/** Max length: 2083 */
		SupportUrl?: string | null;

		/** Maximum items: 20 */
		AddTags?: Array<Tag>;
		RemoveTags?: Array<string>;
	}
	export interface UpdateProductInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		Owner: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		Description: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		Distributor: FormControl<string | null | undefined>,

		/** Max length: 8191 */
		SupportDescription: FormControl<string | null | undefined>,

		/** Max length: 254 */
		SupportEmail: FormControl<string | null | undefined>,

		/** Max length: 2083 */
		SupportUrl: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProductInputFormGroup() {
		return new FormGroup<UpdateProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
			Distributor: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
			SupportDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8191)]),
			SupportEmail: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(254)]),
			SupportUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2083)]),
		});

	}

	export interface UpdateProvisionedProductOutput {

		/** Information about a request operation. */
		RecordDetail?: RecordDetail;
	}
	export interface UpdateProvisionedProductOutputFormProperties {
	}
	export function CreateUpdateProvisionedProductOutputFormGroup() {
		return new FormGroup<UpdateProvisionedProductOutputFormProperties>({
		});

	}

	export interface UpdateProvisionedProductInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		ProvisionedProductName?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PathId?: string | null;
		ProvisioningParameters?: Array<UpdateProvisioningParameter>;

		/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
		ProvisioningPreferences?: UpdateProvisioningPreferences;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		UpdateToken: string;
	}
	export interface UpdateProvisionedProductInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		ProvisionedProductName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		PathId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProvisionedProductInputFormGroup() {
		return new FormGroup<UpdateProvisionedProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProvisionedProductName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9._-]{0,127}|arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			PathId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			UpdateToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}


	/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
	export interface UpdateProvisioningPreferences {
		StackSetAccounts?: Array<string>;
		StackSetRegions?: Array<string>;

		/** Minimum: 0 */
		StackSetFailureToleranceCount?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		StackSetFailureTolerancePercentage?: number | null;

		/** Minimum: 1 */
		StackSetMaxConcurrencyCount?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		StackSetMaxConcurrencyPercentage?: number | null;
		StackSetOperationType?: UpdateProvisioningPreferencesStackSetOperationType | null;
	}

	/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
	export interface UpdateProvisioningPreferencesFormProperties {

		/** Minimum: 0 */
		StackSetFailureToleranceCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		StackSetFailureTolerancePercentage: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		StackSetMaxConcurrencyCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		StackSetMaxConcurrencyPercentage: FormControl<number | null | undefined>,
		StackSetOperationType: FormControl<UpdateProvisioningPreferencesStackSetOperationType | null | undefined>,
	}
	export function CreateUpdateProvisioningPreferencesFormGroup() {
		return new FormGroup<UpdateProvisioningPreferencesFormProperties>({
			StackSetFailureToleranceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			StackSetFailureTolerancePercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			StackSetMaxConcurrencyCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			StackSetMaxConcurrencyPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			StackSetOperationType: new FormControl<UpdateProvisioningPreferencesStackSetOperationType | null | undefined>(undefined),
		});

	}

	export enum UpdateProvisioningPreferencesStackSetOperationType { CREATE = 0, UPDATE = 1, DELETE = 2 }

	export interface UpdateProvisionedProductPropertiesOutput {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId?: string | null;
		ProvisionedProductProperties?: ProvisionedProductProperties;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		RecordId?: string | null;
		Status?: RecordDetailStatus | null;
	}
	export interface UpdateProvisionedProductPropertiesOutputFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		RecordId: FormControl<string | null | undefined>,
		Status: FormControl<RecordDetailStatus | null | undefined>,
	}
	export function CreateUpdateProvisionedProductPropertiesOutputFormGroup() {
		return new FormGroup<UpdateProvisionedProductPropertiesOutputFormProperties>({
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			RecordId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Status: new FormControl<RecordDetailStatus | null | undefined>(undefined),
		});

	}

	export interface ProvisionedProductProperties {
	}
	export interface ProvisionedProductPropertiesFormProperties {
	}
	export function CreateProvisionedProductPropertiesFormGroup() {
		return new FormGroup<ProvisionedProductPropertiesFormProperties>({
		});

	}

	export interface UpdateProvisionedProductPropertiesInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId: string;

		/** Required */
		ProvisionedProductProperties: ProvisionedProductProperties;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: string;
	}
	export interface UpdateProvisionedProductPropertiesInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisionedProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProvisionedProductPropertiesInputFormGroup() {
		return new FormGroup<UpdateProvisionedProductPropertiesInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}

	export interface UpdateProvisioningArtifactOutput {

		/** Information about a provisioning artifact (also known as a version) for a product. */
		ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
		Info?: ProvisioningArtifactInfo;
		Status?: CreateConstraintOutputStatus | null;
	}
	export interface UpdateProvisioningArtifactOutputFormProperties {
		Status: FormControl<CreateConstraintOutputStatus | null | undefined>,
	}
	export function CreateUpdateProvisioningArtifactOutputFormGroup() {
		return new FormGroup<UpdateProvisioningArtifactOutputFormProperties>({
			Status: new FormControl<CreateConstraintOutputStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateProvisioningArtifactInput {

		/** Max length: 100 */
		AcceptLanguage?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: string;

		/** Max length: 8192 */
		Name?: string | null;

		/** Max length: 8192 */
		Description?: string | null;
		Active?: boolean | null;
		Guidance?: ProvisioningArtifactDetailGuidance | null;
	}
	export interface UpdateProvisioningArtifactInputFormProperties {

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ProvisioningArtifactId: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		Description: FormControl<string | null | undefined>,
		Active: FormControl<boolean | null | undefined>,
		Guidance: FormControl<ProvisioningArtifactDetailGuidance | null | undefined>,
	}
	export function CreateUpdateProvisioningArtifactInputFormGroup() {
		return new FormGroup<UpdateProvisioningArtifactInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			Active: new FormControl<boolean | null | undefined>(undefined),
			Guidance: new FormControl<ProvisioningArtifactDetailGuidance | null | undefined>(undefined),
		});

	}

	export interface UpdateServiceActionOutput {

		/** An object containing detailed information about the self-service action. */
		ServiceActionDetail?: ServiceActionDetail;
	}
	export interface UpdateServiceActionOutputFormProperties {
	}
	export function CreateUpdateServiceActionOutputFormGroup() {
		return new FormGroup<UpdateServiceActionOutputFormProperties>({
		});

	}

	export interface UpdateServiceActionInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name?: string | null;
		Definition?: ServiceActionDefinitionMap;

		/** Max length: 1024 */
		Description?: string | null;

		/** Max length: 100 */
		AcceptLanguage?: string | null;
	}
	export interface UpdateServiceActionInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		Description: FormControl<string | null | undefined>,

		/** Max length: 100 */
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceActionInputFormGroup() {
		return new FormGroup<UpdateServiceActionInputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_\-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9_\-.]*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
		});

	}

	export interface UpdateTagOptionOutput {

		/** Information about a TagOption. */
		TagOptionDetail?: TagOptionDetail;
	}
	export interface UpdateTagOptionOutputFormProperties {
	}
	export function CreateUpdateTagOptionOutputFormGroup() {
		return new FormGroup<UpdateTagOptionOutputFormProperties>({
		});

	}

	export interface UpdateTagOptionInput {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Value?: string | null;
		Active?: boolean | null;
	}
	export interface UpdateTagOptionInputFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
		Active: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateTagOptionInputFormGroup() {
		return new FormGroup<UpdateTagOptionInputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PortfolioShareType { IMPORTED = 0, AWS_SERVICECATALOG = 1, AWS_ORGANIZATIONS = 2 }

	export enum AccessStatus { ENABLED = 0, UNDER_CHANGE = 1, DISABLED = 2 }

	export enum PrincipalType { IAM = 0 }

	export enum ChangeAction { ADD = 0, MODIFY = 1, REMOVE = 2 }

	export enum CopyProductStatus { SUCCEEDED = 0, IN_PROGRESS = 1, FAILED = 2 }

	export enum Status { AVAILABLE = 0, CREATING = 1, FAILED = 2 }

	export enum ProductType { CLOUD_FORMATION_TEMPLATE = 0, MARKETPLACE = 1 }

	export enum ProvisionedProductPlanType { CLOUDFORMATION = 0 }

	export enum ServiceActionDefinitionType { SSM_AUTOMATION = 0 }

	export enum ShareStatus { NOT_STARTED = 0, IN_PROGRESS = 1, COMPLETED = 2, COMPLETED_WITH_ERRORS = 3, ERROR = 4 }

	export enum EvaluationType { STATIC = 0, DYNAMIC = 1 }

	export enum ServiceActionAssociationErrorCode { DUPLICATE_RESOURCE = 0, INTERNAL_FAILURE = 1, LIMIT_EXCEEDED = 2, RESOURCE_NOT_FOUND = 3, THROTTLING = 4 }

	export enum ProductSource { ACCOUNT = 0 }


	/** A single product view aggregation value/count pair, containing metadata about each product to which the calling user has access. */
	export interface ProductViewAggregationValue {
		Value?: string | null;
		ApproximateCount?: number | null;
	}

	/** A single product view aggregation value/count pair, containing metadata about each product to which the calling user has access. */
	export interface ProductViewAggregationValueFormProperties {
		Value: FormControl<string | null | undefined>,
		ApproximateCount: FormControl<number | null | undefined>,
	}
	export function CreateProductViewAggregationValueFormGroup() {
		return new FormGroup<ProductViewAggregationValueFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			ApproximateCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ProductViewFilterBy { FullTextSearch = 0, Owner = 1, ProductType = 2, SourceProductId = 3 }

	export enum ProductViewSortBy { Title = 0, VersionCount = 1, CreationDate = 2 }

	export enum PropertyKey { OWNER = 0 }

	export enum ProvisionedProductStatus { AVAILABLE = 0, UNDER_CHANGE = 1, TAINTED = 2, ERROR = 3, PLAN_IN_PROGRESS = 4 }

	export enum ProvisionedProductPlanStatus { CREATE_IN_PROGRESS = 0, CREATE_SUCCESS = 1, CREATE_FAILED = 2, EXECUTE_IN_PROGRESS = 3, EXECUTE_SUCCESS = 4, EXECUTE_FAILED = 5 }

	export enum ProvisionedProductViewFilterBy { SearchQuery = 0 }

	export enum ProvisioningArtifactGuidance { DEFAULT = 0, DEPRECATED = 1 }

	export enum ProvisioningArtifactType { CLOUD_FORMATION_TEMPLATE = 0, MARKETPLACE_AMI = 1, MARKETPLACE_CAR = 2 }

	export enum ProvisioningArtifactPropertyName { Id = 0 }

	export enum RecordStatus { CREATED = 0, IN_PROGRESS = 1, IN_PROGRESS_IN_ERROR = 2, SUCCEEDED = 3, FAILED = 4 }

	export enum Replacement { TRUE = 0, FALSE = 1, CONDITIONAL = 2 }

	export enum RequiresRecreation { NEVER = 0, CONDITIONALLY = 1, ALWAYS = 2 }

	export enum SortOrder { ASCENDING = 0, DESCENDING = 1 }

	export enum ServiceActionDefinitionKey { Name = 0, Version = 1, AssumeRole = 2, Parameters = 3 }

	export enum StackInstanceStatus { CURRENT = 0, OUTDATED = 1, INOPERABLE = 2 }

	export enum StackSetOperationType { CREATE = 0, UPDATE = 1, DELETE = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Accepts an offer to share the specified portfolio.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare
		 * @return {AcceptPortfolioShareOutput} Success
		 */
		AcceptPortfolioShare(requestBody: AcceptPortfolioShareInput): Observable<AcceptPortfolioShareOutput> {
			return this.http.post<AcceptPortfolioShareOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates the specified budget with the specified resource.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource
		 * @return {AssociateBudgetWithResourceOutput} Success
		 */
		AssociateBudgetWithResource(requestBody: AssociateBudgetWithResourceInput): Observable<AssociateBudgetWithResourceOutput> {
			return this.http.post<AssociateBudgetWithResourceOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates the specified principal ARN with the specified portfolio.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio
		 * @return {AssociatePrincipalWithPortfolioOutput} Success
		 */
		AssociatePrincipalWithPortfolio(requestBody: AssociatePrincipalWithPortfolioInput): Observable<AssociatePrincipalWithPortfolioOutput> {
			return this.http.post<AssociatePrincipalWithPortfolioOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates the specified product with the specified portfolio.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio
		 * @return {AssociateProductWithPortfolioOutput} Success
		 */
		AssociateProductWithPortfolio(requestBody: AssociateProductWithPortfolioInput): Observable<AssociateProductWithPortfolioOutput> {
			return this.http.post<AssociateProductWithPortfolioOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a self-service action with a provisioning artifact.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact
		 * @return {AssociateServiceActionWithProvisioningArtifactOutput} Success
		 */
		AssociateServiceActionWithProvisioningArtifact(requestBody: AssociateServiceActionWithProvisioningArtifactInput): Observable<AssociateServiceActionWithProvisioningArtifactOutput> {
			return this.http.post<AssociateServiceActionWithProvisioningArtifactOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associate the specified TagOption with the specified portfolio or product.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource
		 * @return {AssociateTagOptionWithResourceOutput} Success
		 */
		AssociateTagOptionWithResource(requestBody: AssociateTagOptionWithResourceInput): Observable<AssociateTagOptionWithResourceOutput> {
			return this.http.post<AssociateTagOptionWithResourceOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates multiple self-service actions with provisioning artifacts.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact
		 * @return {BatchAssociateServiceActionWithProvisioningArtifactOutput} Success
		 */
		BatchAssociateServiceActionWithProvisioningArtifact(requestBody: BatchAssociateServiceActionWithProvisioningArtifactInput): Observable<BatchAssociateServiceActionWithProvisioningArtifactOutput> {
			return this.http.post<BatchAssociateServiceActionWithProvisioningArtifactOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a batch of self-service actions from the specified provisioning artifact.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact
		 * @return {BatchDisassociateServiceActionFromProvisioningArtifactOutput} Success
		 */
		BatchDisassociateServiceActionFromProvisioningArtifact(requestBody: BatchDisassociateServiceActionFromProvisioningArtifactInput): Observable<BatchDisassociateServiceActionFromProvisioningArtifactOutput> {
			return this.http.post<BatchDisassociateServiceActionFromProvisioningArtifactOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same region or another region.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.CopyProduct
		 * @return {CopyProductOutput} Success
		 */
		CopyProduct(requestBody: CopyProductInput): Observable<CopyProductOutput> {
			return this.http.post<CopyProductOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a constraint.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint
		 * @return {CreateConstraintOutput} Success
		 */
		CreateConstraint(requestBody: CreateConstraintInput): Observable<CreateConstraintOutput> {
			return this.http.post<CreateConstraintOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a portfolio.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio
		 * @return {CreatePortfolioOutput} Success
		 */
		CreatePortfolio(requestBody: CreatePortfolioInput): Observable<CreatePortfolioOutput> {
			return this.http.post<CreatePortfolioOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the master account of an Organization. AWSOrganizationsAccess must be enabled in order to create a portfolio share to an organization node.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare
		 * @return {CreatePortfolioShareOutput} Success
		 */
		CreatePortfolioShare(requestBody: CreatePortfolioShareInput): Observable<CreatePortfolioShareOutput> {
			return this.http.post<CreatePortfolioShareOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a product.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.CreateProduct
		 * @return {CreateProductOutput} Success
		 */
		CreateProduct(requestBody: CreateProductInput): Observable<CreateProductOutput> {
			return this.http.post<CreateProductOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a plan. A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan per provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILBLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan
		 * @return {CreateProvisionedProductPlanOutput} Success
		 */
		CreateProvisionedProductPlan(requestBody: CreateProvisionedProductPlanInput): Observable<CreateProvisionedProductPlanOutput> {
			return this.http.post<CreateProvisionedProductPlanOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact
		 * @return {CreateProvisioningArtifactOutput} Success
		 */
		CreateProvisioningArtifact(requestBody: CreateProvisioningArtifactInput): Observable<CreateProvisioningArtifactOutput> {
			return this.http.post<CreateProvisioningArtifactOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a self-service action.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction
		 * @return {CreateServiceActionOutput} Success
		 */
		CreateServiceAction(requestBody: CreateServiceActionInput): Observable<CreateServiceActionOutput> {
			return this.http.post<CreateServiceActionOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a TagOption.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption
		 * @return {CreateTagOptionOutput} Success
		 */
		CreateTagOption(requestBody: CreateTagOptionInput): Observable<CreateTagOptionOutput> {
			return this.http.post<CreateTagOptionOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified constraint.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint
		 * @return {DeleteConstraintOutput} Success
		 */
		DeleteConstraint(requestBody: DeleteConstraintInput): Observable<DeleteConstraintOutput> {
			return this.http.post<DeleteConstraintOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio
		 * @return {DeletePortfolioOutput} Success
		 */
		DeletePortfolio(requestBody: DeletePortfolioInput): Observable<DeletePortfolioOutput> {
			return this.http.post<DeletePortfolioOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the master account of an Organization.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare
		 * @return {DeletePortfolioShareOutput} Success
		 */
		DeletePortfolioShare(requestBody: DeletePortfolioShareInput): Observable<DeletePortfolioShareOutput> {
			return this.http.post<DeletePortfolioShareOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct
		 * @return {DeleteProductOutput} Success
		 */
		DeleteProduct(requestBody: DeleteProductInput): Observable<DeleteProductOutput> {
			return this.http.post<DeleteProductOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified plan.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan
		 * @return {DeleteProvisionedProductPlanOutput} Success
		 */
		DeleteProvisionedProductPlan(requestBody: DeleteProvisionedProductPlanInput): Observable<DeleteProvisionedProductPlanOutput> {
			return this.http.post<DeleteProvisionedProductPlanOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact
		 * @return {DeleteProvisioningArtifactOutput} Success
		 */
		DeleteProvisioningArtifact(requestBody: DeleteProvisioningArtifactInput): Observable<DeleteProvisioningArtifactOutput> {
			return this.http.post<DeleteProvisioningArtifactOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a self-service action.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction
		 * @return {DeleteServiceActionOutput} Success
		 */
		DeleteServiceAction(requestBody: DeleteServiceActionInput): Observable<DeleteServiceActionOutput> {
			return this.http.post<DeleteServiceActionOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption
		 * @return {DeleteTagOptionOutput} Success
		 */
		DeleteTagOption(requestBody: DeleteTagOptionInput): Observable<DeleteTagOptionOutput> {
			return this.http.post<DeleteTagOptionOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the specified constraint.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint
		 * @return {DescribeConstraintOutput} Success
		 */
		DescribeConstraint(requestBody: DescribeConstraintInput): Observable<DescribeConstraintOutput> {
			return this.http.post<DescribeConstraintOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the status of the specified copy product operation.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus
		 * @return {DescribeCopyProductStatusOutput} Success
		 */
		DescribeCopyProductStatus(requestBody: DescribeCopyProductStatusInput): Observable<DescribeCopyProductStatusOutput> {
			return this.http.post<DescribeCopyProductStatusOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the specified portfolio.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio
		 * @return {DescribePortfolioOutput} Success
		 */
		DescribePortfolio(requestBody: DescribePortfolioInput): Observable<DescribePortfolioOutput> {
			return this.http.post<DescribePortfolioOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the status of the specified portfolio share operation. This API can only be called by the master account in the organization.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus
		 * @return {DescribePortfolioShareStatusOutput} Success
		 */
		DescribePortfolioShareStatus(requestBody: DescribePortfolioShareStatusInput): Observable<DescribePortfolioShareStatusOutput> {
			return this.http.post<DescribePortfolioShareStatusOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the specified product.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct
		 * @return {DescribeProductOutput} Success
		 */
		DescribeProduct(requestBody: DescribeProductInput): Observable<DescribeProductOutput> {
			return this.http.post<DescribeProductOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the specified product. This operation is run with administrator access.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin
		 * @return {DescribeProductAsAdminOutput} Success
		 */
		DescribeProductAsAdmin(requestBody: DescribeProductAsAdminInput): Observable<DescribeProductAsAdminOutput> {
			return this.http.post<DescribeProductAsAdminOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the specified product.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView
		 * @return {DescribeProductViewOutput} Success
		 */
		DescribeProductView(requestBody: DescribeProductViewInput): Observable<DescribeProductViewOutput> {
			return this.http.post<DescribeProductViewOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the specified provisioned product.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct
		 * @return {DescribeProvisionedProductOutput} Success
		 */
		DescribeProvisionedProduct(requestBody: DescribeProvisionedProductInput): Observable<DescribeProvisionedProductOutput> {
			return this.http.post<DescribeProvisionedProductOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the resource changes for the specified plan.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan
		 * @return {DescribeProvisionedProductPlanOutput} Success
		 */
		DescribeProvisionedProductPlan(requestBody: DescribeProvisionedProductPlanInput): Observable<DescribeProvisionedProductPlanOutput> {
			return this.http.post<DescribeProvisionedProductPlanOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the specified provisioning artifact (also known as a version) for the specified product.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact
		 * @return {DescribeProvisioningArtifactOutput} Success
		 */
		DescribeProvisioningArtifact(requestBody: DescribeProvisioningArtifactInput): Observable<DescribeProvisioningArtifactOutput> {
			return this.http.post<DescribeProvisioningArtifactOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters
		 * @return {DescribeProvisioningParametersOutput} Success
		 */
		DescribeProvisioningParameters(requestBody: DescribeProvisioningParametersInput): Observable<DescribeProvisioningParametersOutput> {
			return this.http.post<DescribeProvisioningParametersOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord
		 * @return {DescribeRecordOutput} Success
		 */
		DescribeRecord(requestBody: DescribeRecordInput): Observable<DescribeRecordOutput> {
			return this.http.post<DescribeRecordOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a self-service action.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction
		 * @return {DescribeServiceActionOutput} Success
		 */
		DescribeServiceAction(requestBody: DescribeServiceActionInput): Observable<DescribeServiceActionOutput> {
			return this.http.post<DescribeServiceActionOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters
		 * @return {DescribeServiceActionExecutionParametersOutput} Success
		 */
		DescribeServiceActionExecutionParameters(requestBody: DescribeServiceActionExecutionParametersInput): Observable<DescribeServiceActionExecutionParametersOutput> {
			return this.http.post<DescribeServiceActionExecutionParametersOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the specified TagOption.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption
		 * @return {DescribeTagOptionOutput} Success
		 */
		DescribeTagOption(requestBody: DescribeTagOptionInput): Observable<DescribeTagOptionOutput> {
			return this.http.post<DescribeTagOptionOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable portfolio sharing through AWS Organizations feature. This feature will not delete your current shares but it will prevent you from creating new shares throughout your organization. Current shares will not be in sync with your organization structure if it changes after calling this API. This API can only be called by the master account in the organization.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess
		 * @return {DisableAWSOrganizationsAccessOutput} Success
		 */
		DisableAWSOrganizationsAccess(requestBody: DisableAWSOrganizationsAccessInput): Observable<DisableAWSOrganizationsAccessOutput> {
			return this.http.post<DisableAWSOrganizationsAccessOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the specified budget from the specified resource.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource
		 * @return {DisassociateBudgetFromResourceOutput} Success
		 */
		DisassociateBudgetFromResource(requestBody: DisassociateBudgetFromResourceInput): Observable<DisassociateBudgetFromResourceOutput> {
			return this.http.post<DisassociateBudgetFromResourceOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a previously associated principal ARN from a specified portfolio.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio
		 * @return {DisassociatePrincipalFromPortfolioOutput} Success
		 */
		DisassociatePrincipalFromPortfolio(requestBody: DisassociatePrincipalFromPortfolioInput): Observable<DisassociatePrincipalFromPortfolioOutput> {
			return this.http.post<DisassociatePrincipalFromPortfolioOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the specified product from the specified portfolio.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio
		 * @return {DisassociateProductFromPortfolioOutput} Success
		 */
		DisassociateProductFromPortfolio(requestBody: DisassociateProductFromPortfolioInput): Observable<DisassociateProductFromPortfolioOutput> {
			return this.http.post<DisassociateProductFromPortfolioOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the specified self-service action association from the specified provisioning artifact.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact
		 * @return {DisassociateServiceActionFromProvisioningArtifactOutput} Success
		 */
		DisassociateServiceActionFromProvisioningArtifact(requestBody: DisassociateServiceActionFromProvisioningArtifactInput): Observable<DisassociateServiceActionFromProvisioningArtifactOutput> {
			return this.http.post<DisassociateServiceActionFromProvisioningArtifactOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the specified TagOption from the specified resource.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource
		 * @return {DisassociateTagOptionFromResourceOutput} Success
		 */
		DisassociateTagOptionFromResource(requestBody: DisassociateTagOptionFromResourceInput): Observable<DisassociateTagOptionFromResourceOutput> {
			return this.http.post<DisassociateTagOptionFromResourceOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enable portfolio sharing feature through AWS Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the master account in the organization.</p> <p>By calling this API Service Catalog will make a call to organizations:EnableAWSServiceAccess on your behalf so that your shares can be in sync with any changes in your AWS Organizations structure.</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess
		 * @return {EnableAWSOrganizationsAccessOutput} Success
		 */
		EnableAWSOrganizationsAccess(requestBody: EnableAWSOrganizationsAccessInput): Observable<EnableAWSOrganizationsAccessOutput> {
			return this.http.post<EnableAWSOrganizationsAccessOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provisions or modifies a product based on the resource changes for the specified plan.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan
		 * @return {ExecuteProvisionedProductPlanOutput} Success
		 */
		ExecuteProvisionedProductPlan(requestBody: ExecuteProvisionedProductPlanInput): Observable<ExecuteProvisionedProductPlanOutput> {
			return this.http.post<ExecuteProvisionedProductPlanOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Executes a self-service action against a provisioned product.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction
		 * @return {ExecuteProvisionedProductServiceActionOutput} Success
		 */
		ExecuteProvisionedProductServiceAction(requestBody: ExecuteProvisionedProductServiceActionInput): Observable<ExecuteProvisionedProductServiceActionOutput> {
			return this.http.post<ExecuteProvisionedProductServiceActionOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the Access Status for AWS Organization portfolio share feature. This API can only be called by the master account in the organization.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus
		 * @return {GetAWSOrganizationsAccessStatusOutput} Success
		 */
		GetAWSOrganizationsAccessStatus(requestBody: GetAWSOrganizationsAccessStatusInput): Observable<GetAWSOrganizationsAccessStatusOutput> {
			return this.http.post<GetAWSOrganizationsAccessStatusOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all portfolios for which sharing was accepted by this account.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListAcceptedPortfolioSharesOutput} Success
		 */
		ListAcceptedPortfolioShares(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: ListAcceptedPortfolioSharesInput): Observable<ListAcceptedPortfolioSharesOutput> {
			return this.http.post<ListAcceptedPortfolioSharesOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the budgets associated to the specified resource.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListBudgetsForResourceOutput} Success
		 */
		ListBudgetsForResource(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: ListBudgetsForResourceInput): Observable<ListBudgetsForResourceOutput> {
			return this.http.post<ListBudgetsForResourceOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the constraints for the specified portfolio and product.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListConstraintsForPortfolioOutput} Success
		 */
		ListConstraintsForPortfolio(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: ListConstraintsForPortfolioInput): Observable<ListConstraintsForPortfolioOutput> {
			return this.http.post<ListConstraintsForPortfolioOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the paths to the specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListLaunchPathsOutput} Success
		 */
		ListLaunchPaths(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: ListLaunchPathsInput): Observable<ListLaunchPathsOutput> {
			return this.http.post<ListLaunchPathsOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the organization nodes that have access to the specified portfolio. This API can only be called by the master account in the organization.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListOrganizationPortfolioAccessOutput} Success
		 */
		ListOrganizationPortfolioAccess(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: ListOrganizationPortfolioAccessInput): Observable<ListOrganizationPortfolioAccessOutput> {
			return this.http.post<ListOrganizationPortfolioAccessOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the account IDs that have access to the specified portfolio.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListPortfolioAccessOutput} Success
		 */
		ListPortfolioAccess(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: ListPortfolioAccessInput): Observable<ListPortfolioAccessOutput> {
			return this.http.post<ListPortfolioAccessOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all portfolios in the catalog.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListPortfoliosOutput} Success
		 */
		ListPortfolios(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: ListPortfoliosInput): Observable<ListPortfoliosOutput> {
			return this.http.post<ListPortfoliosOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all portfolios that the specified product is associated with.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListPortfoliosForProductOutput} Success
		 */
		ListPortfoliosForProduct(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: ListPortfoliosForProductInput): Observable<ListPortfoliosForProductOutput> {
			return this.http.post<ListPortfoliosForProductOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all principal ARNs associated with the specified portfolio.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListPrincipalsForPortfolioOutput} Success
		 */
		ListPrincipalsForPortfolio(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: ListPrincipalsForPortfolioInput): Observable<ListPrincipalsForPortfolioOutput> {
			return this.http.post<ListPrincipalsForPortfolioOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the plans for the specified provisioned product or all plans to which the user has access.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans
		 * @return {ListProvisionedProductPlansOutput} Success
		 */
		ListProvisionedProductPlans(requestBody: ListProvisionedProductPlansInput): Observable<ListProvisionedProductPlansOutput> {
			return this.http.post<ListProvisionedProductPlansOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all provisioning artifacts (also known as versions) for the specified product.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts
		 * @return {ListProvisioningArtifactsOutput} Success
		 */
		ListProvisioningArtifacts(requestBody: ListProvisioningArtifactsInput): Observable<ListProvisioningArtifactsOutput> {
			return this.http.post<ListProvisioningArtifactsOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all provisioning artifacts (also known as versions) for the specified self-service action.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListProvisioningArtifactsForServiceActionOutput} Success
		 */
		ListProvisioningArtifactsForServiceAction(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: ListProvisioningArtifactsForServiceActionInput): Observable<ListProvisioningArtifactsForServiceActionOutput> {
			return this.http.post<ListProvisioningArtifactsForServiceActionOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the specified requests or all performed requests.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory
		 * @return {ListRecordHistoryOutput} Success
		 */
		ListRecordHistory(requestBody: ListRecordHistoryInput): Observable<ListRecordHistoryOutput> {
			return this.http.post<ListRecordHistoryOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resources associated with the specified TagOption.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListResourcesForTagOptionOutput} Success
		 */
		ListResourcesForTagOption(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: ListResourcesForTagOptionInput): Observable<ListResourcesForTagOptionOutput> {
			return this.http.post<ListResourcesForTagOptionOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all self-service actions.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListServiceActionsOutput} Success
		 */
		ListServiceActions(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: ListServiceActionsInput): Observable<ListServiceActionsOutput> {
			return this.http.post<ListServiceActionsOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListServiceActionsForProvisioningArtifactOutput} Success
		 */
		ListServiceActionsForProvisioningArtifact(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: ListServiceActionsForProvisioningArtifactInput): Observable<ListServiceActionsForProvisioningArtifactOutput> {
			return this.http.post<ListServiceActionsForProvisioningArtifactOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific AWS account name or region.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct
		 * @return {ListStackInstancesForProvisionedProductOutput} Success
		 */
		ListStackInstancesForProvisionedProduct(requestBody: ListStackInstancesForProvisionedProductInput): Observable<ListStackInstancesForProvisionedProductOutput> {
			return this.http.post<ListStackInstancesForProvisionedProductOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the specified TagOptions or all TagOptions.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {ListTagOptionsOutput} Success
		 */
		ListTagOptions(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: ListTagOptionsInput): Observable<ListTagOptionsOutput> {
			return this.http.post<ListTagOptionsOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provisions the specified product.</p> <p>A provisioned product is a resourced instance of a product. For example, provisioning a product based on a CloudFormation template launches a CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>.</p> <p>If the request contains a tag key with an empty list of values, there is a tag conflict for that key. Do not include conflicted keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>".</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct
		 * @return {ProvisionProductOutput} Success
		 */
		ProvisionProduct(requestBody: ProvisionProductInput): Observable<ProvisionProductOutput> {
			return this.http.post<ProvisionProductOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rejects an offer to share the specified portfolio.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare
		 * @return {RejectPortfolioShareOutput} Success
		 */
		RejectPortfolioShare(requestBody: RejectPortfolioShareInput): Observable<RejectPortfolioShareOutput> {
			return this.http.post<RejectPortfolioShareOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts
		 * @return {ScanProvisionedProductsOutput} Success
		 */
		ScanProvisionedProducts(requestBody: ScanProvisionedProductsInput): Observable<ScanProvisionedProductsOutput> {
			return this.http.post<ScanProvisionedProductsOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the products to which the caller has access.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.SearchProducts
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {SearchProductsOutput} Success
		 */
		SearchProducts(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: SearchProductsInput): Observable<SearchProductsOutput> {
			return this.http.post<SearchProductsOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the products for the specified portfolio or all products.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {SearchProductsAsAdminOutput} Success
		 */
		SearchProductsAsAdmin(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: SearchProductsAsAdminInput): Observable<SearchProductsAsAdminOutput> {
			return this.http.post<SearchProductsAsAdminOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the provisioned products that meet the specified criteria.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts
		 * @param {string} PageSize Pagination limit
		 * @param {string} PageToken Pagination token
		 * @return {SearchProvisionedProductsOutput} Success
		 */
		SearchProvisionedProducts(PageSize: string | null | undefined, PageToken: string | null | undefined, requestBody: SearchProvisionedProductsInput): Observable<SearchProvisionedProductsOutput> {
			return this.http.post<SearchProvisionedProductsOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct
		 * @return {TerminateProvisionedProductOutput} Success
		 */
		TerminateProvisionedProduct(requestBody: TerminateProvisionedProductInput): Observable<TerminateProvisionedProductOutput> {
			return this.http.post<TerminateProvisionedProductOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified constraint.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint
		 * @return {UpdateConstraintOutput} Success
		 */
		UpdateConstraint(requestBody: UpdateConstraintInput): Observable<UpdateConstraintOutput> {
			return this.http.post<UpdateConstraintOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio
		 * @return {UpdatePortfolioOutput} Success
		 */
		UpdatePortfolio(requestBody: UpdatePortfolioInput): Observable<UpdatePortfolioOutput> {
			return this.http.post<UpdatePortfolioOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified product.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct
		 * @return {UpdateProductOutput} Success
		 */
		UpdateProduct(requestBody: UpdateProductInput): Observable<UpdateProductOutput> {
			return this.http.post<UpdateProductOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct
		 * @return {UpdateProvisionedProductOutput} Success
		 */
		UpdateProvisionedProduct(requestBody: UpdateProvisionedProductInput): Observable<UpdateProvisionedProductOutput> {
			return this.http.post<UpdateProvisionedProductOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Requests updates to the properties of the specified provisioned product.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties
		 * @return {UpdateProvisionedProductPropertiesOutput} Success
		 */
		UpdateProvisionedProductProperties(requestBody: UpdateProvisionedProductPropertiesInput): Observable<UpdateProvisionedProductPropertiesOutput> {
			return this.http.post<UpdateProvisionedProductPropertiesOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact
		 * @return {UpdateProvisioningArtifactOutput} Success
		 */
		UpdateProvisioningArtifact(requestBody: UpdateProvisioningArtifactInput): Observable<UpdateProvisioningArtifactOutput> {
			return this.http.post<UpdateProvisioningArtifactOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a self-service action.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction
		 * @return {UpdateServiceActionOutput} Success
		 */
		UpdateServiceAction(requestBody: UpdateServiceActionInput): Observable<UpdateServiceActionOutput> {
			return this.http.post<UpdateServiceActionOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified TagOption.
		 * Post #X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption
		 * @return {UpdateTagOptionOutput} Success
		 */
		UpdateTagOption(requestBody: UpdateTagOptionInput): Observable<UpdateTagOptionOutput> {
			return this.http.post<UpdateTagOptionOutput>(this.baseUri + '#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptPortfolioShareX_Amz_Target { 'AWS242ServiceCatalogService.AcceptPortfolioShare' = 0 }

	export enum AssociateBudgetWithResourceX_Amz_Target { 'AWS242ServiceCatalogService.AssociateBudgetWithResource' = 0 }

	export enum AssociatePrincipalWithPortfolioX_Amz_Target { 'AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio' = 0 }

	export enum AssociateProductWithPortfolioX_Amz_Target { 'AWS242ServiceCatalogService.AssociateProductWithPortfolio' = 0 }

	export enum AssociateServiceActionWithProvisioningArtifactX_Amz_Target { 'AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact' = 0 }

	export enum AssociateTagOptionWithResourceX_Amz_Target { 'AWS242ServiceCatalogService.AssociateTagOptionWithResource' = 0 }

	export enum BatchAssociateServiceActionWithProvisioningArtifactX_Amz_Target { 'AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact' = 0 }

	export enum BatchDisassociateServiceActionFromProvisioningArtifactX_Amz_Target { 'AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact' = 0 }

	export enum CopyProductX_Amz_Target { 'AWS242ServiceCatalogService.CopyProduct' = 0 }

	export enum CreateConstraintX_Amz_Target { 'AWS242ServiceCatalogService.CreateConstraint' = 0 }

	export enum CreatePortfolioX_Amz_Target { 'AWS242ServiceCatalogService.CreatePortfolio' = 0 }

	export enum CreatePortfolioShareX_Amz_Target { 'AWS242ServiceCatalogService.CreatePortfolioShare' = 0 }

	export enum CreateProductX_Amz_Target { 'AWS242ServiceCatalogService.CreateProduct' = 0 }

	export enum CreateProvisionedProductPlanX_Amz_Target { 'AWS242ServiceCatalogService.CreateProvisionedProductPlan' = 0 }

	export enum CreateProvisioningArtifactX_Amz_Target { 'AWS242ServiceCatalogService.CreateProvisioningArtifact' = 0 }

	export enum CreateServiceActionX_Amz_Target { 'AWS242ServiceCatalogService.CreateServiceAction' = 0 }

	export enum CreateTagOptionX_Amz_Target { 'AWS242ServiceCatalogService.CreateTagOption' = 0 }

	export enum DeleteConstraintX_Amz_Target { 'AWS242ServiceCatalogService.DeleteConstraint' = 0 }

	export enum DeletePortfolioX_Amz_Target { 'AWS242ServiceCatalogService.DeletePortfolio' = 0 }

	export enum DeletePortfolioShareX_Amz_Target { 'AWS242ServiceCatalogService.DeletePortfolioShare' = 0 }

	export enum DeleteProductX_Amz_Target { 'AWS242ServiceCatalogService.DeleteProduct' = 0 }

	export enum DeleteProvisionedProductPlanX_Amz_Target { 'AWS242ServiceCatalogService.DeleteProvisionedProductPlan' = 0 }

	export enum DeleteProvisioningArtifactX_Amz_Target { 'AWS242ServiceCatalogService.DeleteProvisioningArtifact' = 0 }

	export enum DeleteServiceActionX_Amz_Target { 'AWS242ServiceCatalogService.DeleteServiceAction' = 0 }

	export enum DeleteTagOptionX_Amz_Target { 'AWS242ServiceCatalogService.DeleteTagOption' = 0 }

	export enum DescribeConstraintX_Amz_Target { 'AWS242ServiceCatalogService.DescribeConstraint' = 0 }

	export enum DescribeCopyProductStatusX_Amz_Target { 'AWS242ServiceCatalogService.DescribeCopyProductStatus' = 0 }

	export enum DescribePortfolioX_Amz_Target { 'AWS242ServiceCatalogService.DescribePortfolio' = 0 }

	export enum DescribePortfolioShareStatusX_Amz_Target { 'AWS242ServiceCatalogService.DescribePortfolioShareStatus' = 0 }

	export enum DescribeProductX_Amz_Target { 'AWS242ServiceCatalogService.DescribeProduct' = 0 }

	export enum DescribeProductAsAdminX_Amz_Target { 'AWS242ServiceCatalogService.DescribeProductAsAdmin' = 0 }

	export enum DescribeProductViewX_Amz_Target { 'AWS242ServiceCatalogService.DescribeProductView' = 0 }

	export enum DescribeProvisionedProductX_Amz_Target { 'AWS242ServiceCatalogService.DescribeProvisionedProduct' = 0 }

	export enum DescribeProvisionedProductPlanX_Amz_Target { 'AWS242ServiceCatalogService.DescribeProvisionedProductPlan' = 0 }

	export enum DescribeProvisioningArtifactX_Amz_Target { 'AWS242ServiceCatalogService.DescribeProvisioningArtifact' = 0 }

	export enum DescribeProvisioningParametersX_Amz_Target { 'AWS242ServiceCatalogService.DescribeProvisioningParameters' = 0 }

	export enum DescribeRecordX_Amz_Target { 'AWS242ServiceCatalogService.DescribeRecord' = 0 }

	export enum DescribeServiceActionX_Amz_Target { 'AWS242ServiceCatalogService.DescribeServiceAction' = 0 }

	export enum DescribeServiceActionExecutionParametersX_Amz_Target { 'AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters' = 0 }

	export enum DescribeTagOptionX_Amz_Target { 'AWS242ServiceCatalogService.DescribeTagOption' = 0 }

	export enum DisableAWSOrganizationsAccessX_Amz_Target { 'AWS242ServiceCatalogService.DisableAWSOrganizationsAccess' = 0 }

	export enum DisassociateBudgetFromResourceX_Amz_Target { 'AWS242ServiceCatalogService.DisassociateBudgetFromResource' = 0 }

	export enum DisassociatePrincipalFromPortfolioX_Amz_Target { 'AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio' = 0 }

	export enum DisassociateProductFromPortfolioX_Amz_Target { 'AWS242ServiceCatalogService.DisassociateProductFromPortfolio' = 0 }

	export enum DisassociateServiceActionFromProvisioningArtifactX_Amz_Target { 'AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact' = 0 }

	export enum DisassociateTagOptionFromResourceX_Amz_Target { 'AWS242ServiceCatalogService.DisassociateTagOptionFromResource' = 0 }

	export enum EnableAWSOrganizationsAccessX_Amz_Target { 'AWS242ServiceCatalogService.EnableAWSOrganizationsAccess' = 0 }

	export enum ExecuteProvisionedProductPlanX_Amz_Target { 'AWS242ServiceCatalogService.ExecuteProvisionedProductPlan' = 0 }

	export enum ExecuteProvisionedProductServiceActionX_Amz_Target { 'AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction' = 0 }

	export enum GetAWSOrganizationsAccessStatusX_Amz_Target { 'AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus' = 0 }

	export enum ListAcceptedPortfolioSharesX_Amz_Target { 'AWS242ServiceCatalogService.ListAcceptedPortfolioShares' = 0 }

	export enum ListBudgetsForResourceX_Amz_Target { 'AWS242ServiceCatalogService.ListBudgetsForResource' = 0 }

	export enum ListConstraintsForPortfolioX_Amz_Target { 'AWS242ServiceCatalogService.ListConstraintsForPortfolio' = 0 }

	export enum ListLaunchPathsX_Amz_Target { 'AWS242ServiceCatalogService.ListLaunchPaths' = 0 }

	export enum ListOrganizationPortfolioAccessX_Amz_Target { 'AWS242ServiceCatalogService.ListOrganizationPortfolioAccess' = 0 }

	export enum ListPortfolioAccessX_Amz_Target { 'AWS242ServiceCatalogService.ListPortfolioAccess' = 0 }

	export enum ListPortfoliosX_Amz_Target { 'AWS242ServiceCatalogService.ListPortfolios' = 0 }

	export enum ListPortfoliosForProductX_Amz_Target { 'AWS242ServiceCatalogService.ListPortfoliosForProduct' = 0 }

	export enum ListPrincipalsForPortfolioX_Amz_Target { 'AWS242ServiceCatalogService.ListPrincipalsForPortfolio' = 0 }

	export enum ListProvisionedProductPlansX_Amz_Target { 'AWS242ServiceCatalogService.ListProvisionedProductPlans' = 0 }

	export enum ListProvisioningArtifactsX_Amz_Target { 'AWS242ServiceCatalogService.ListProvisioningArtifacts' = 0 }

	export enum ListProvisioningArtifactsForServiceActionX_Amz_Target { 'AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction' = 0 }

	export enum ListRecordHistoryX_Amz_Target { 'AWS242ServiceCatalogService.ListRecordHistory' = 0 }

	export enum ListResourcesForTagOptionX_Amz_Target { 'AWS242ServiceCatalogService.ListResourcesForTagOption' = 0 }

	export enum ListServiceActionsX_Amz_Target { 'AWS242ServiceCatalogService.ListServiceActions' = 0 }

	export enum ListServiceActionsForProvisioningArtifactX_Amz_Target { 'AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact' = 0 }

	export enum ListStackInstancesForProvisionedProductX_Amz_Target { 'AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct' = 0 }

	export enum ListTagOptionsX_Amz_Target { 'AWS242ServiceCatalogService.ListTagOptions' = 0 }

	export enum ProvisionProductX_Amz_Target { 'AWS242ServiceCatalogService.ProvisionProduct' = 0 }

	export enum RejectPortfolioShareX_Amz_Target { 'AWS242ServiceCatalogService.RejectPortfolioShare' = 0 }

	export enum ScanProvisionedProductsX_Amz_Target { 'AWS242ServiceCatalogService.ScanProvisionedProducts' = 0 }

	export enum SearchProductsX_Amz_Target { 'AWS242ServiceCatalogService.SearchProducts' = 0 }

	export enum SearchProductsAsAdminX_Amz_Target { 'AWS242ServiceCatalogService.SearchProductsAsAdmin' = 0 }

	export enum SearchProvisionedProductsX_Amz_Target { 'AWS242ServiceCatalogService.SearchProvisionedProducts' = 0 }

	export enum TerminateProvisionedProductX_Amz_Target { 'AWS242ServiceCatalogService.TerminateProvisionedProduct' = 0 }

	export enum UpdateConstraintX_Amz_Target { 'AWS242ServiceCatalogService.UpdateConstraint' = 0 }

	export enum UpdatePortfolioX_Amz_Target { 'AWS242ServiceCatalogService.UpdatePortfolio' = 0 }

	export enum UpdateProductX_Amz_Target { 'AWS242ServiceCatalogService.UpdateProduct' = 0 }

	export enum UpdateProvisionedProductX_Amz_Target { 'AWS242ServiceCatalogService.UpdateProvisionedProduct' = 0 }

	export enum UpdateProvisionedProductPropertiesX_Amz_Target { 'AWS242ServiceCatalogService.UpdateProvisionedProductProperties' = 0 }

	export enum UpdateProvisioningArtifactX_Amz_Target { 'AWS242ServiceCatalogService.UpdateProvisioningArtifact' = 0 }

	export enum UpdateServiceActionX_Amz_Target { 'AWS242ServiceCatalogService.UpdateServiceAction' = 0 }

	export enum UpdateTagOptionX_Amz_Target { 'AWS242ServiceCatalogService.UpdateTagOption' = 0 }

}

