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
		AcceptLanguage?: string | null;
		PortfolioId: string;
		PortfolioShareType?: AcceptPortfolioShareInputPortfolioShareType | null;
	}
	export interface AcceptPortfolioShareInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
		PortfolioShareType: FormControl<AcceptPortfolioShareInputPortfolioShareType | null | undefined>,
	}
	export function CreateAcceptPortfolioShareInputFormGroup() {
		return new FormGroup<AcceptPortfolioShareInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
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
		BudgetName: string;
		ResourceId: string;
	}
	export interface AssociateBudgetWithResourceInputFormProperties {
		BudgetName: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateBudgetWithResourceInputFormGroup() {
		return new FormGroup<AssociateBudgetWithResourceInputFormProperties>({
			BudgetName: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		PortfolioId: string;
		PrincipalARN: string;
		PrincipalType: AssociatePrincipalWithPortfolioInputPrincipalType;
	}
	export interface AssociatePrincipalWithPortfolioInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
		PrincipalARN: FormControl<string | null | undefined>,
		PrincipalType: FormControl<AssociatePrincipalWithPortfolioInputPrincipalType | null | undefined>,
	}
	export function CreateAssociatePrincipalWithPortfolioInputFormGroup() {
		return new FormGroup<AssociatePrincipalWithPortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
			PrincipalARN: new FormControl<string | null | undefined>(undefined),
			PrincipalType: new FormControl<AssociatePrincipalWithPortfolioInputPrincipalType | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		ProductId: string;
		PortfolioId: string;
		SourcePortfolioId?: string | null;
	}
	export interface AssociateProductWithPortfolioInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
		SourcePortfolioId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateProductWithPortfolioInputFormGroup() {
		return new FormGroup<AssociateProductWithPortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
			SourcePortfolioId: new FormControl<string | null | undefined>(undefined),
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
		ProductId: string;
		ProvisioningArtifactId: string;
		ServiceActionId: string;
		AcceptLanguage?: string | null;
	}
	export interface AssociateServiceActionWithProvisioningArtifactInputFormProperties {
		ProductId: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		ServiceActionId: FormControl<string | null | undefined>,
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateAssociateServiceActionWithProvisioningArtifactInputFormGroup() {
		return new FormGroup<AssociateServiceActionWithProvisioningArtifactInputFormProperties>({
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
			ServiceActionId: new FormControl<string | null | undefined>(undefined),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
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
		ResourceId: string;
		TagOptionId: string;
	}
	export interface AssociateTagOptionWithResourceInputFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		TagOptionId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTagOptionWithResourceInputFormGroup() {
		return new FormGroup<AssociateTagOptionWithResourceInputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			TagOptionId: new FormControl<string | null | undefined>(undefined),
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
		ServiceActionId?: string | null;
		ProductId?: string | null;
		ProvisioningArtifactId?: string | null;
		ErrorCode?: FailedServiceActionAssociationErrorCode | null;
		ErrorMessage?: string | null;
	}

	/** An object containing information about the error, along with identifying information about the self-service action and its associations. */
	export interface FailedServiceActionAssociationFormProperties {
		ServiceActionId: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<FailedServiceActionAssociationErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedServiceActionAssociationFormGroup() {
		return new FormGroup<FailedServiceActionAssociationFormProperties>({
			ServiceActionId: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<FailedServiceActionAssociationErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FailedServiceActionAssociationErrorCode { DUPLICATE_RESOURCE = 0, INTERNAL_FAILURE = 1, LIMIT_EXCEEDED = 2, RESOURCE_NOT_FOUND = 3, THROTTLING = 4 }

	export interface BatchAssociateServiceActionWithProvisioningArtifactInput {
		ServiceActionAssociations: Array<ServiceActionAssociation>;
		AcceptLanguage?: string | null;
	}
	export interface BatchAssociateServiceActionWithProvisioningArtifactInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateServiceActionWithProvisioningArtifactInputFormGroup() {
		return new FormGroup<BatchAssociateServiceActionWithProvisioningArtifactInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID. */
	export interface ServiceActionAssociation {
		ServiceActionId: string;
		ProductId: string;
		ProvisioningArtifactId: string;
	}

	/** A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID. */
	export interface ServiceActionAssociationFormProperties {
		ServiceActionId: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
	}
	export function CreateServiceActionAssociationFormGroup() {
		return new FormGroup<ServiceActionAssociationFormProperties>({
			ServiceActionId: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDisassociateServiceActionFromProvisioningArtifactOutput {
		FailedServiceActionAssociations?: Array<FailedServiceActionAssociation>;
	}
	export interface BatchDisassociateServiceActionFromProvisioningArtifactOutputFormProperties {
	}
	export function CreateBatchDisassociateServiceActionFromProvisioningArtifactOutputFormGroup() {
		return new FormGroup<BatchDisassociateServiceActionFromProvisioningArtifactOutputFormProperties>({
		});

	}

	export interface BatchDisassociateServiceActionFromProvisioningArtifactInput {
		ServiceActionAssociations: Array<ServiceActionAssociation>;
		AcceptLanguage?: string | null;
	}
	export interface BatchDisassociateServiceActionFromProvisioningArtifactInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateServiceActionFromProvisioningArtifactInputFormGroup() {
		return new FormGroup<BatchDisassociateServiceActionFromProvisioningArtifactInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CopyProductOutput {
		CopyProductToken?: string | null;
	}
	export interface CopyProductOutputFormProperties {
		CopyProductToken: FormControl<string | null | undefined>,
	}
	export function CreateCopyProductOutputFormGroup() {
		return new FormGroup<CopyProductOutputFormProperties>({
			CopyProductToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CopyProductInput {
		AcceptLanguage?: string | null;
		SourceProductArn: string;
		TargetProductId?: string | null;
		TargetProductName?: string | null;
		SourceProvisioningArtifactIdentifiers?: Array<SourceProvisioningArtifactPropertiesMap>;
		CopyOptions?: Array<CopyOption>;
		IdempotencyToken: string;
	}
	export interface CopyProductInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		SourceProductArn: FormControl<string | null | undefined>,
		TargetProductId: FormControl<string | null | undefined>,
		TargetProductName: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCopyProductInputFormGroup() {
		return new FormGroup<CopyProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			SourceProductArn: new FormControl<string | null | undefined>(undefined),
			TargetProductId: new FormControl<string | null | undefined>(undefined),
			TargetProductName: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
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
		ConstraintId?: string | null;
		Type?: string | null;
		Description?: string | null;
		Owner?: string | null;
		ProductId?: string | null;
		PortfolioId?: string | null;
	}

	/** Information about a constraint. */
	export interface ConstraintDetailFormProperties {
		ConstraintId: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
	}
	export function CreateConstraintDetailFormGroup() {
		return new FormGroup<ConstraintDetailFormProperties>({
			ConstraintId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateConstraintOutputStatus { AVAILABLE = 0, CREATING = 1, FAILED = 2 }

	export interface CreateConstraintInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		ProductId: string;
		Parameters: string;
		Type: string;
		Description?: string | null;
		IdempotencyToken: string;
	}
	export interface CreateConstraintInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		Parameters: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateConstraintInputFormGroup() {
		return new FormGroup<CreateConstraintInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			Parameters: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePortfolioOutput {

		/** Information about a portfolio. */
		PortfolioDetail?: PortfolioDetail;
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
		Id?: string | null;
		ARN?: string | null;
		DisplayName?: string | null;
		Description?: string | null;
		CreatedTime?: Date | null;
		ProviderName?: string | null;
	}

	/** Information about a portfolio. */
	export interface PortfolioDetailFormProperties {
		Id: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		ProviderName: FormControl<string | null | undefined>,
	}
	export function CreatePortfolioDetailFormGroup() {
		return new FormGroup<PortfolioDetailFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a tag. A tag is a key-value pair. Tags are propagated to the resources created when provisioning a product. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	/** Information about a tag. A tag is a key-value pair. Tags are propagated to the resources created when provisioning a product. */
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

	export interface CreatePortfolioInput {
		AcceptLanguage?: string | null;
		DisplayName: string;
		Description?: string | null;
		ProviderName: string;
		Tags?: Array<Tag>;
		IdempotencyToken: string;
	}
	export interface CreatePortfolioInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ProviderName: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortfolioInputFormGroup() {
		return new FormGroup<CreatePortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePortfolioShareOutput {
		PortfolioShareToken?: string | null;
	}
	export interface CreatePortfolioShareOutputFormProperties {
		PortfolioShareToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortfolioShareOutputFormGroup() {
		return new FormGroup<CreatePortfolioShareOutputFormProperties>({
			PortfolioShareToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePortfolioShareInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		AccountId?: string | null;

		/** Information about the organization node. */
		OrganizationNode?: OrganizationNode;
	}
	export interface CreatePortfolioShareInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortfolioShareInputFormGroup() {
		return new FormGroup<CreatePortfolioShareInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
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
			Value: new FormControl<string | null | undefined>(undefined),
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
		ProductARN?: string | null;
		CreatedTime?: Date | null;
	}

	/** Information about a product view. */
	export interface ProductViewDetailFormProperties {
		Status: FormControl<CreateConstraintOutputStatus | null | undefined>,
		ProductARN: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateProductViewDetailFormGroup() {
		return new FormGroup<ProductViewDetailFormProperties>({
			Status: new FormControl<CreateConstraintOutputStatus | null | undefined>(undefined),
			ProductARN: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Summary information about a product view. */
	export interface ProductViewSummary {
		Id?: string | null;
		ProductId?: string | null;
		Name?: string | null;
		Owner?: string | null;
		ShortDescription?: string | null;
		Type?: ProductViewSummaryType | null;
		Distributor?: string | null;
		HasDefaultPath?: boolean | null;
		SupportEmail?: string | null;
		SupportDescription?: string | null;
		SupportUrl?: string | null;
	}

	/** Summary information about a product view. */
	export interface ProductViewSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		ShortDescription: FormControl<string | null | undefined>,
		Type: FormControl<ProductViewSummaryType | null | undefined>,
		Distributor: FormControl<string | null | undefined>,
		HasDefaultPath: FormControl<boolean | null | undefined>,
		SupportEmail: FormControl<string | null | undefined>,
		SupportDescription: FormControl<string | null | undefined>,
		SupportUrl: FormControl<string | null | undefined>,
	}
	export function CreateProductViewSummaryFormGroup() {
		return new FormGroup<ProductViewSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			ShortDescription: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ProductViewSummaryType | null | undefined>(undefined),
			Distributor: new FormControl<string | null | undefined>(undefined),
			HasDefaultPath: new FormControl<boolean | null | undefined>(undefined),
			SupportEmail: new FormControl<string | null | undefined>(undefined),
			SupportDescription: new FormControl<string | null | undefined>(undefined),
			SupportUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProductViewSummaryType { CLOUD_FORMATION_TEMPLATE = 0, MARKETPLACE = 1 }


	/** Information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactDetail {
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		Type?: ProvisioningArtifactDetailType | null;
		CreatedTime?: Date | null;
		Active?: boolean | null;
		Guidance?: ProvisioningArtifactDetailGuidance | null;
	}

	/** Information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactDetailFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<ProvisioningArtifactDetailType | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		Active: FormControl<boolean | null | undefined>,
		Guidance: FormControl<ProvisioningArtifactDetailGuidance | null | undefined>,
	}
	export function CreateProvisioningArtifactDetailFormGroup() {
		return new FormGroup<ProvisioningArtifactDetailFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ProvisioningArtifactDetailType | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			Active: new FormControl<boolean | null | undefined>(undefined),
			Guidance: new FormControl<ProvisioningArtifactDetailGuidance | null | undefined>(undefined),
		});

	}

	export enum ProvisioningArtifactDetailType { CLOUD_FORMATION_TEMPLATE = 0, MARKETPLACE_AMI = 1, MARKETPLACE_CAR = 2 }

	export enum ProvisioningArtifactDetailGuidance { DEFAULT = 0, DEPRECATED = 1 }

	export interface CreateProductInput {
		AcceptLanguage?: string | null;
		Name: string;
		Owner: string;
		Description?: string | null;
		Distributor?: string | null;
		SupportDescription?: string | null;
		SupportEmail?: string | null;
		SupportUrl?: string | null;
		ProductType: ProductViewSummaryType;
		Tags?: Array<Tag>;

		/**
		 * Information about a provisioning artifact (also known as a version) for a product.
		 * Required
		 */
		ProvisioningArtifactParameters: ProvisioningArtifactProperties;
		IdempotencyToken: string;
	}
	export interface CreateProductInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Distributor: FormControl<string | null | undefined>,
		SupportDescription: FormControl<string | null | undefined>,
		SupportEmail: FormControl<string | null | undefined>,
		SupportUrl: FormControl<string | null | undefined>,
		ProductType: FormControl<ProductViewSummaryType | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateProductInputFormGroup() {
		return new FormGroup<CreateProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Distributor: new FormControl<string | null | undefined>(undefined),
			SupportDescription: new FormControl<string | null | undefined>(undefined),
			SupportEmail: new FormControl<string | null | undefined>(undefined),
			SupportUrl: new FormControl<string | null | undefined>(undefined),
			ProductType: new FormControl<ProductViewSummaryType | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactProperties {
		Name?: string | null;
		Description?: string | null;
		Info: ProvisioningArtifactInfo;
		Type?: ProvisioningArtifactDetailType | null;
		DisableTemplateValidation?: boolean | null;
	}

	/** Information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactPropertiesFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<ProvisioningArtifactDetailType | null | undefined>,
		DisableTemplateValidation: FormControl<boolean | null | undefined>,
	}
	export function CreateProvisioningArtifactPropertiesFormGroup() {
		return new FormGroup<ProvisioningArtifactPropertiesFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
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
		PlanId?: string | null;
		ProvisionProductId?: string | null;
		ProvisionedProductName?: string | null;
		ProvisioningArtifactId?: string | null;
	}
	export interface CreateProvisionedProductPlanOutputFormProperties {
		PlanName: FormControl<string | null | undefined>,
		PlanId: FormControl<string | null | undefined>,
		ProvisionProductId: FormControl<string | null | undefined>,
		ProvisionedProductName: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
	}
	export function CreateCreateProvisionedProductPlanOutputFormGroup() {
		return new FormGroup<CreateProvisionedProductPlanOutputFormProperties>({
			PlanName: new FormControl<string | null | undefined>(undefined),
			PlanId: new FormControl<string | null | undefined>(undefined),
			ProvisionProductId: new FormControl<string | null | undefined>(undefined),
			ProvisionedProductName: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProvisionedProductPlanInput {
		AcceptLanguage?: string | null;
		PlanName: string;
		PlanType: CreateProvisionedProductPlanInputPlanType;
		NotificationArns?: Array<string>;
		PathId?: string | null;
		ProductId: string;
		ProvisionedProductName: string;
		ProvisioningArtifactId: string;
		ProvisioningParameters?: Array<UpdateProvisioningParameter>;
		IdempotencyToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateProvisionedProductPlanInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PlanName: FormControl<string | null | undefined>,
		PlanType: FormControl<CreateProvisionedProductPlanInputPlanType | null | undefined>,
		PathId: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		ProvisionedProductName: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateProvisionedProductPlanInputFormGroup() {
		return new FormGroup<CreateProvisionedProductPlanInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PlanName: new FormControl<string | null | undefined>(undefined),
			PlanType: new FormControl<CreateProvisionedProductPlanInputPlanType | null | undefined>(undefined),
			PathId: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisionedProductName: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateProvisionedProductPlanInputPlanType { CLOUDFORMATION = 0 }


	/** The parameter key-value pair used to update a provisioned product. */
	export interface UpdateProvisioningParameter {
		Key?: string | null;
		Value?: string | null;
		UsePreviousValue?: boolean | null;
	}

	/** The parameter key-value pair used to update a provisioned product. */
	export interface UpdateProvisioningParameterFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		UsePreviousValue: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateProvisioningParameterFormGroup() {
		return new FormGroup<UpdateProvisioningParameterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		ProductId: string;

		/**
		 * Information about a provisioning artifact (also known as a version) for a product.
		 * Required
		 */
		Parameters: ProvisioningArtifactProperties;
		IdempotencyToken: string;
	}
	export interface CreateProvisioningArtifactInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateProvisioningArtifactInputFormGroup() {
		return new FormGroup<CreateProvisioningArtifactInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
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
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		DefinitionType?: ServiceActionSummaryDefinitionType | null;
	}

	/** Detailed information about the self-service action. */
	export interface ServiceActionSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DefinitionType: FormControl<ServiceActionSummaryDefinitionType | null | undefined>,
	}
	export function CreateServiceActionSummaryFormGroup() {
		return new FormGroup<ServiceActionSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
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
		Name: string;
		DefinitionType: ServiceActionSummaryDefinitionType;
		Definition: ServiceActionDefinitionMap;
		Description?: string | null;
		AcceptLanguage?: string | null;
		IdempotencyToken: string;
	}
	export interface CreateServiceActionInputFormProperties {
		Name: FormControl<string | null | undefined>,
		DefinitionType: FormControl<ServiceActionSummaryDefinitionType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AcceptLanguage: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceActionInputFormGroup() {
		return new FormGroup<CreateServiceActionInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			DefinitionType: new FormControl<ServiceActionSummaryDefinitionType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
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
		Key?: string | null;
		Value?: string | null;
		Active?: boolean | null;
		Id?: string | null;
	}

	/** Information about a TagOption. */
	export interface TagOptionDetailFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Active: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateTagOptionDetailFormGroup() {
		return new FormGroup<TagOptionDetailFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Active: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTagOptionInput {
		Key: string;
		Value: string;
	}
	export interface CreateTagOptionInputFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateCreateTagOptionInputFormGroup() {
		return new FormGroup<CreateTagOptionInputFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		Id: string;
	}
	export interface DeleteConstraintInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConstraintInputFormGroup() {
		return new FormGroup<DeleteConstraintInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		Id: string;
	}
	export interface DeletePortfolioInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeletePortfolioInputFormGroup() {
		return new FormGroup<DeletePortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
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
		PortfolioShareToken?: string | null;
	}
	export interface DeletePortfolioShareOutputFormProperties {
		PortfolioShareToken: FormControl<string | null | undefined>,
	}
	export function CreateDeletePortfolioShareOutputFormGroup() {
		return new FormGroup<DeletePortfolioShareOutputFormProperties>({
			PortfolioShareToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePortfolioShareInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		AccountId?: string | null;

		/** Information about the organization node. */
		OrganizationNode?: OrganizationNode;
	}
	export interface DeletePortfolioShareInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePortfolioShareInputFormGroup() {
		return new FormGroup<DeletePortfolioShareInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		Id: string;
	}
	export interface DeleteProductInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProductInputFormGroup() {
		return new FormGroup<DeleteProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		PlanId: string;
		IgnoreErrors?: boolean | null;
	}
	export interface DeleteProvisionedProductPlanInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PlanId: FormControl<string | null | undefined>,
		IgnoreErrors: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteProvisionedProductPlanInputFormGroup() {
		return new FormGroup<DeleteProvisionedProductPlanInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PlanId: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		ProductId: string;
		ProvisioningArtifactId: string;
	}
	export interface DeleteProvisioningArtifactInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProvisioningArtifactInputFormGroup() {
		return new FormGroup<DeleteProvisioningArtifactInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
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
		Id: string;
		AcceptLanguage?: string | null;
	}
	export interface DeleteServiceActionInputFormProperties {
		Id: FormControl<string | null | undefined>,
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServiceActionInputFormGroup() {
		return new FormGroup<DeleteServiceActionInputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
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
		Id: string;
	}
	export interface DeleteTagOptionInputFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTagOptionInputFormGroup() {
		return new FormGroup<DeleteTagOptionInputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		Id: string;
	}
	export interface DescribeConstraintInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConstraintInputFormGroup() {
		return new FormGroup<DescribeConstraintInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCopyProductStatusOutput {
		CopyProductStatus?: DescribeCopyProductStatusOutputCopyProductStatus | null;
		TargetProductId?: string | null;
		StatusDetail?: string | null;
	}
	export interface DescribeCopyProductStatusOutputFormProperties {
		CopyProductStatus: FormControl<DescribeCopyProductStatusOutputCopyProductStatus | null | undefined>,
		TargetProductId: FormControl<string | null | undefined>,
		StatusDetail: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCopyProductStatusOutputFormGroup() {
		return new FormGroup<DescribeCopyProductStatusOutputFormProperties>({
			CopyProductStatus: new FormControl<DescribeCopyProductStatusOutputCopyProductStatus | null | undefined>(undefined),
			TargetProductId: new FormControl<string | null | undefined>(undefined),
			StatusDetail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeCopyProductStatusOutputCopyProductStatus { SUCCEEDED = 0, IN_PROGRESS = 1, FAILED = 2 }

	export interface DescribeCopyProductStatusInput {
		AcceptLanguage?: string | null;
		CopyProductToken: string;
	}
	export interface DescribeCopyProductStatusInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		CopyProductToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCopyProductStatusInputFormGroup() {
		return new FormGroup<DescribeCopyProductStatusInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			CopyProductToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePortfolioOutput {

		/** Information about a portfolio. */
		PortfolioDetail?: PortfolioDetail;
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
		BudgetName?: string | null;
	}

	/** Information about a budget. */
	export interface BudgetDetailFormProperties {
		BudgetName: FormControl<string | null | undefined>,
	}
	export function CreateBudgetDetailFormGroup() {
		return new FormGroup<BudgetDetailFormProperties>({
			BudgetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePortfolioInput {
		AcceptLanguage?: string | null;
		Id: string;
	}
	export interface DescribePortfolioInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribePortfolioInputFormGroup() {
		return new FormGroup<DescribePortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePortfolioShareStatusOutput {
		PortfolioShareToken?: string | null;
		PortfolioId?: string | null;
		OrganizationNodeValue?: string | null;
		Status?: DescribePortfolioShareStatusOutputStatus | null;

		/** Information about the portfolio share operation. */
		ShareDetails?: ShareDetails;
	}
	export interface DescribePortfolioShareStatusOutputFormProperties {
		PortfolioShareToken: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
		OrganizationNodeValue: FormControl<string | null | undefined>,
		Status: FormControl<DescribePortfolioShareStatusOutputStatus | null | undefined>,
	}
	export function CreateDescribePortfolioShareStatusOutputFormGroup() {
		return new FormGroup<DescribePortfolioShareStatusOutputFormProperties>({
			PortfolioShareToken: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
			OrganizationNodeValue: new FormControl<string | null | undefined>(undefined),
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
		PortfolioShareToken: string;
	}
	export interface DescribePortfolioShareStatusInputFormProperties {
		PortfolioShareToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePortfolioShareStatusInputFormGroup() {
		return new FormGroup<DescribePortfolioShareStatusInputFormProperties>({
			PortfolioShareToken: new FormControl<string | null | undefined>(undefined),
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
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		CreatedTime?: Date | null;
		Guidance?: ProvisioningArtifactDetailGuidance | null;
	}

	/** Information about a provisioning artifact. A provisioning artifact is also known as a product version. */
	export interface ProvisioningArtifactFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		Guidance: FormControl<ProvisioningArtifactDetailGuidance | null | undefined>,
	}
	export function CreateProvisioningArtifactFormGroup() {
		return new FormGroup<ProvisioningArtifactFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			Guidance: new FormControl<ProvisioningArtifactDetailGuidance | null | undefined>(undefined),
		});

	}


	/** A launch path object. */
	export interface LaunchPath {
		Id?: string | null;
		Name?: string | null;
	}

	/** A launch path object. */
	export interface LaunchPathFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateLaunchPathFormGroup() {
		return new FormGroup<LaunchPathFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeProductInput {
		AcceptLanguage?: string | null;
		Id?: string | null;
		Name?: string | null;
	}
	export interface DescribeProductInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProductInputFormGroup() {
		return new FormGroup<DescribeProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeProductAsAdminOutput {

		/** Information about a product view. */
		ProductViewDetail?: ProductViewDetail;
		ProvisioningArtifactSummaries?: Array<ProvisioningArtifactSummary>;
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
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		CreatedTime?: Date | null;
		ProvisioningArtifactMetadata?: ProvisioningArtifactInfo;
	}

	/** Summary information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateProvisioningArtifactSummaryFormGroup() {
		return new FormGroup<ProvisioningArtifactSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeProductAsAdminInput {
		AcceptLanguage?: string | null;
		Id?: string | null;
		Name?: string | null;
	}
	export interface DescribeProductAsAdminInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProductAsAdminInputFormGroup() {
		return new FormGroup<DescribeProductAsAdminInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		Id: string;
	}
	export interface DescribeProductViewInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProductViewInputFormGroup() {
		return new FormGroup<DescribeProductViewInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
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
		Name?: string | null;
		Arn?: string | null;
		Type?: string | null;
		Id?: string | null;
		Status?: ProvisionedProductDetailStatus | null;
		StatusMessage?: string | null;
		CreatedTime?: Date | null;
		IdempotencyToken?: string | null;
		LastRecordId?: string | null;
		ProductId?: string | null;
		ProvisioningArtifactId?: string | null;
	}

	/** Information about a provisioned product. */
	export interface ProvisionedProductDetailFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Status: FormControl<ProvisionedProductDetailStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
		LastRecordId: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionedProductDetailFormGroup() {
		return new FormGroup<ProvisionedProductDetailFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ProvisionedProductDetailStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
			LastRecordId: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		Id: string;
	}
	export interface DescribeProvisionedProductInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProvisionedProductInputFormGroup() {
		return new FormGroup<DescribeProvisionedProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeProvisionedProductPlanOutput {

		/** Information about a plan. */
		ProvisionedProductPlanDetails?: ProvisionedProductPlanDetails;
		ResourceChanges?: Array<ResourceChange>;
		NextPageToken?: string | null;
	}
	export interface DescribeProvisionedProductPlanOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProvisionedProductPlanOutputFormGroup() {
		return new FormGroup<DescribeProvisionedProductPlanOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a plan. */
	export interface ProvisionedProductPlanDetails {
		CreatedTime?: Date | null;
		PathId?: string | null;
		ProductId?: string | null;
		PlanName?: string | null;
		PlanId?: string | null;
		ProvisionProductId?: string | null;
		ProvisionProductName?: string | null;
		PlanType?: CreateProvisionedProductPlanInputPlanType | null;
		ProvisioningArtifactId?: string | null;
		Status?: ProvisionedProductPlanDetailsStatus | null;
		UpdatedTime?: Date | null;
		NotificationArns?: Array<string>;
		ProvisioningParameters?: Array<UpdateProvisioningParameter>;
		Tags?: Array<Tag>;
		StatusMessage?: string | null;
	}

	/** Information about a plan. */
	export interface ProvisionedProductPlanDetailsFormProperties {
		CreatedTime: FormControl<Date | null | undefined>,
		PathId: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		PlanName: FormControl<string | null | undefined>,
		PlanId: FormControl<string | null | undefined>,
		ProvisionProductId: FormControl<string | null | undefined>,
		ProvisionProductName: FormControl<string | null | undefined>,
		PlanType: FormControl<CreateProvisionedProductPlanInputPlanType | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		Status: FormControl<ProvisionedProductPlanDetailsStatus | null | undefined>,
		UpdatedTime: FormControl<Date | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateProvisionedProductPlanDetailsFormGroup() {
		return new FormGroup<ProvisionedProductPlanDetailsFormProperties>({
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			PathId: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			PlanName: new FormControl<string | null | undefined>(undefined),
			PlanId: new FormControl<string | null | undefined>(undefined),
			ProvisionProductId: new FormControl<string | null | undefined>(undefined),
			ProvisionProductName: new FormControl<string | null | undefined>(undefined),
			PlanType: new FormControl<CreateProvisionedProductPlanInputPlanType | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ProvisionedProductPlanDetailsStatus | null | undefined>(undefined),
			UpdatedTime: new FormControl<Date | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProvisionedProductPlanDetailsStatus { CREATE_IN_PROGRESS = 0, CREATE_SUCCESS = 1, CREATE_FAILED = 2, EXECUTE_IN_PROGRESS = 3, EXECUTE_SUCCESS = 4, EXECUTE_FAILED = 5 }


	/** Information about a resource change that will occur when a plan is executed. */
	export interface ResourceChange {
		Action?: ResourceChangeAction | null;
		LogicalResourceId?: string | null;
		PhysicalResourceId?: string | null;
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
		ResourceType: FormControl<string | null | undefined>,
		Replacement: FormControl<ResourceChangeReplacement | null | undefined>,
	}
	export function CreateResourceChangeFormGroup() {
		return new FormGroup<ResourceChangeFormProperties>({
			Action: new FormControl<ResourceChangeAction | null | undefined>(undefined),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		PlanId: string;
		PageSize?: number | null;
		PageToken?: string | null;
	}
	export interface DescribeProvisionedProductPlanInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PlanId: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProvisionedProductPlanInputFormGroup() {
		return new FormGroup<DescribeProvisionedProductPlanInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PlanId: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		ProvisioningArtifactId?: string | null;
		ProductId?: string | null;
		ProvisioningArtifactName?: string | null;
		ProductName?: string | null;
		Verbose?: boolean | null;
	}
	export interface DescribeProvisioningArtifactInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		ProvisioningArtifactName: FormControl<string | null | undefined>,
		ProductName: FormControl<string | null | undefined>,
		Verbose: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeProvisioningArtifactInputFormGroup() {
		return new FormGroup<DescribeProvisioningArtifactInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactName: new FormControl<string | null | undefined>(undefined),
			ProductName: new FormControl<string | null | undefined>(undefined),
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
		ParameterKey: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
		ParameterType: FormControl<string | null | undefined>,
		IsNoEcho: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateProvisioningArtifactParameterFormGroup() {
		return new FormGroup<ProvisioningArtifactParameterFormProperties>({
			ParameterKey: new FormControl<string | null | undefined>(undefined),
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
		Type?: string | null;
		Description?: string | null;
	}

	/** Summary information about a constraint. */
	export interface ConstraintSummaryFormProperties {
		Type: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateConstraintSummaryFormGroup() {
		return new FormGroup<ConstraintSummaryFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
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
		Key?: string | null;
		Values?: Array<string>;
	}

	/** Summary information about a TagOption. */
	export interface TagOptionSummaryFormProperties {
		Key: FormControl<string | null | undefined>,
	}
	export function CreateTagOptionSummaryFormGroup() {
		return new FormGroup<TagOptionSummaryFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		ProductId: string;
		ProvisioningArtifactId: string;
		PathId?: string | null;
	}
	export interface DescribeProvisioningParametersInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		PathId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProvisioningParametersInputFormGroup() {
		return new FormGroup<DescribeProvisioningParametersInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
			PathId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRecordOutput {

		/** Information about a request operation. */
		RecordDetail?: RecordDetail;
		RecordOutputs?: Array<RecordOutput>;
		NextPageToken?: string | null;
	}
	export interface DescribeRecordOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecordOutputFormGroup() {
		return new FormGroup<DescribeRecordOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a request operation. */
	export interface RecordDetail {
		RecordId?: string | null;
		ProvisionedProductName?: string | null;
		Status?: RecordDetailStatus | null;
		CreatedTime?: Date | null;
		UpdatedTime?: Date | null;
		ProvisionedProductType?: string | null;
		RecordType?: string | null;
		ProvisionedProductId?: string | null;
		ProductId?: string | null;
		ProvisioningArtifactId?: string | null;
		PathId?: string | null;
		RecordErrors?: Array<RecordError>;
		RecordTags?: Array<RecordTag>;
	}

	/** Information about a request operation. */
	export interface RecordDetailFormProperties {
		RecordId: FormControl<string | null | undefined>,
		ProvisionedProductName: FormControl<string | null | undefined>,
		Status: FormControl<RecordDetailStatus | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		UpdatedTime: FormControl<Date | null | undefined>,
		ProvisionedProductType: FormControl<string | null | undefined>,
		RecordType: FormControl<string | null | undefined>,
		ProvisionedProductId: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		PathId: FormControl<string | null | undefined>,
	}
	export function CreateRecordDetailFormGroup() {
		return new FormGroup<RecordDetailFormProperties>({
			RecordId: new FormControl<string | null | undefined>(undefined),
			ProvisionedProductName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<RecordDetailStatus | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			UpdatedTime: new FormControl<Date | null | undefined>(undefined),
			ProvisionedProductType: new FormControl<string | null | undefined>(undefined),
			RecordType: new FormControl<string | null | undefined>(undefined),
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
			PathId: new FormControl<string | null | undefined>(undefined),
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
		Key?: string | null;
		Value?: string | null;
	}

	/** Information about a tag, which is a key-value pair. */
	export interface RecordTagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateRecordTagFormGroup() {
		return new FormGroup<RecordTagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		Id: string;
		PageToken?: string | null;
		PageSize?: number | null;
	}
	export interface DescribeRecordInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateDescribeRecordInputFormGroup() {
		return new FormGroup<DescribeRecordInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
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
		Id: string;
		AcceptLanguage?: string | null;
	}
	export interface DescribeServiceActionInputFormProperties {
		Id: FormControl<string | null | undefined>,
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServiceActionInputFormGroup() {
		return new FormGroup<DescribeServiceActionInputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
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
		Name?: string | null;
		Type?: string | null;
		DefaultValues?: Array<string>;
	}

	/** Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product. */
	export interface ExecutionParameterFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateExecutionParameterFormGroup() {
		return new FormGroup<ExecutionParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeServiceActionExecutionParametersInput {
		ProvisionedProductId: string;
		ServiceActionId: string;
		AcceptLanguage?: string | null;
	}
	export interface DescribeServiceActionExecutionParametersInputFormProperties {
		ProvisionedProductId: FormControl<string | null | undefined>,
		ServiceActionId: FormControl<string | null | undefined>,
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServiceActionExecutionParametersInputFormGroup() {
		return new FormGroup<DescribeServiceActionExecutionParametersInputFormProperties>({
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined),
			ServiceActionId: new FormControl<string | null | undefined>(undefined),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
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
		Id: string;
	}
	export interface DescribeTagOptionInputFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTagOptionInputFormGroup() {
		return new FormGroup<DescribeTagOptionInputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
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
		BudgetName: string;
		ResourceId: string;
	}
	export interface DisassociateBudgetFromResourceInputFormProperties {
		BudgetName: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateBudgetFromResourceInputFormGroup() {
		return new FormGroup<DisassociateBudgetFromResourceInputFormProperties>({
			BudgetName: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		PortfolioId: string;
		PrincipalARN: string;
	}
	export interface DisassociatePrincipalFromPortfolioInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
		PrincipalARN: FormControl<string | null | undefined>,
	}
	export function CreateDisassociatePrincipalFromPortfolioInputFormGroup() {
		return new FormGroup<DisassociatePrincipalFromPortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
			PrincipalARN: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		ProductId: string;
		PortfolioId: string;
	}
	export interface DisassociateProductFromPortfolioInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateProductFromPortfolioInputFormGroup() {
		return new FormGroup<DisassociateProductFromPortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
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
		ProductId: string;
		ProvisioningArtifactId: string;
		ServiceActionId: string;
		AcceptLanguage?: string | null;
	}
	export interface DisassociateServiceActionFromProvisioningArtifactInputFormProperties {
		ProductId: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		ServiceActionId: FormControl<string | null | undefined>,
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateServiceActionFromProvisioningArtifactInputFormGroup() {
		return new FormGroup<DisassociateServiceActionFromProvisioningArtifactInputFormProperties>({
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
			ServiceActionId: new FormControl<string | null | undefined>(undefined),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
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
		ResourceId: string;
		TagOptionId: string;
	}
	export interface DisassociateTagOptionFromResourceInputFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		TagOptionId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateTagOptionFromResourceInputFormGroup() {
		return new FormGroup<DisassociateTagOptionFromResourceInputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			TagOptionId: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		PlanId: string;
		IdempotencyToken: string;
	}
	export interface ExecuteProvisionedProductPlanInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PlanId: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateExecuteProvisionedProductPlanInputFormGroup() {
		return new FormGroup<ExecuteProvisionedProductPlanInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PlanId: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
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
		ProvisionedProductId: string;
		ServiceActionId: string;
		ExecuteToken: string;
		AcceptLanguage?: string | null;
		Parameters?: ExecutionParameterMap;
	}
	export interface ExecuteProvisionedProductServiceActionInputFormProperties {
		ProvisionedProductId: FormControl<string | null | undefined>,
		ServiceActionId: FormControl<string | null | undefined>,
		ExecuteToken: FormControl<string | null | undefined>,
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateExecuteProvisionedProductServiceActionInputFormGroup() {
		return new FormGroup<ExecuteProvisionedProductServiceActionInputFormProperties>({
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined),
			ServiceActionId: new FormControl<string | null | undefined>(undefined),
			ExecuteToken: new FormControl<string | null | undefined>(undefined),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
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
		NextPageToken?: string | null;
	}
	export interface ListAcceptedPortfolioSharesOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAcceptedPortfolioSharesOutputFormGroup() {
		return new FormGroup<ListAcceptedPortfolioSharesOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAcceptedPortfolioSharesInput {
		AcceptLanguage?: string | null;
		PageToken?: string | null;
		PageSize?: number | null;
		PortfolioShareType?: AcceptPortfolioShareInputPortfolioShareType | null;
	}
	export interface ListAcceptedPortfolioSharesInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		PortfolioShareType: FormControl<AcceptPortfolioShareInputPortfolioShareType | null | undefined>,
	}
	export function CreateListAcceptedPortfolioSharesInputFormGroup() {
		return new FormGroup<ListAcceptedPortfolioSharesInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			PortfolioShareType: new FormControl<AcceptPortfolioShareInputPortfolioShareType | null | undefined>(undefined),
		});

	}

	export interface ListBudgetsForResourceOutput {
		Budgets?: Array<BudgetDetail>;
		NextPageToken?: string | null;
	}
	export interface ListBudgetsForResourceOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBudgetsForResourceOutputFormGroup() {
		return new FormGroup<ListBudgetsForResourceOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBudgetsForResourceInput {
		AcceptLanguage?: string | null;
		ResourceId: string;
		PageSize?: number | null;
		PageToken?: string | null;
	}
	export interface ListBudgetsForResourceInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBudgetsForResourceInputFormGroup() {
		return new FormGroup<ListBudgetsForResourceInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConstraintsForPortfolioOutput {
		ConstraintDetails?: Array<ConstraintDetail>;
		NextPageToken?: string | null;
	}
	export interface ListConstraintsForPortfolioOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConstraintsForPortfolioOutputFormGroup() {
		return new FormGroup<ListConstraintsForPortfolioOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConstraintsForPortfolioInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		ProductId?: string | null;
		PageSize?: number | null;
		PageToken?: string | null;
	}
	export interface ListConstraintsForPortfolioInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConstraintsForPortfolioInputFormGroup() {
		return new FormGroup<ListConstraintsForPortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLaunchPathsOutput {
		LaunchPathSummaries?: Array<LaunchPathSummary>;
		NextPageToken?: string | null;
	}
	export interface ListLaunchPathsOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLaunchPathsOutputFormGroup() {
		return new FormGroup<ListLaunchPathsOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a product path for a user. */
	export interface LaunchPathSummary {
		Id?: string | null;
		ConstraintSummaries?: Array<ConstraintSummary>;
		Tags?: Array<Tag>;
		Name?: string | null;
	}

	/** Summary information about a product path for a user. */
	export interface LaunchPathSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateLaunchPathSummaryFormGroup() {
		return new FormGroup<LaunchPathSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLaunchPathsInput {
		AcceptLanguage?: string | null;
		ProductId: string;
		PageSize?: number | null;
		PageToken?: string | null;
	}
	export interface ListLaunchPathsInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLaunchPathsInputFormGroup() {
		return new FormGroup<ListLaunchPathsInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationPortfolioAccessOutput {
		OrganizationNodes?: Array<OrganizationNode>;
		NextPageToken?: string | null;
	}
	export interface ListOrganizationPortfolioAccessOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationPortfolioAccessOutputFormGroup() {
		return new FormGroup<ListOrganizationPortfolioAccessOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationPortfolioAccessInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		OrganizationNodeType: OrganizationNodeType;
		PageToken?: string | null;
		PageSize?: number | null;
	}
	export interface ListOrganizationPortfolioAccessInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
		OrganizationNodeType: FormControl<OrganizationNodeType | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateListOrganizationPortfolioAccessInputFormGroup() {
		return new FormGroup<ListOrganizationPortfolioAccessInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
			OrganizationNodeType: new FormControl<OrganizationNodeType | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPortfolioAccessOutput {
		AccountIds?: Array<string>;
		NextPageToken?: string | null;
	}
	export interface ListPortfolioAccessOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPortfolioAccessOutputFormGroup() {
		return new FormGroup<ListPortfolioAccessOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPortfolioAccessInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		OrganizationParentId?: string | null;
		PageToken?: string | null;
		PageSize?: number | null;
	}
	export interface ListPortfolioAccessInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
		OrganizationParentId: FormControl<string | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateListPortfolioAccessInputFormGroup() {
		return new FormGroup<ListPortfolioAccessInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
			OrganizationParentId: new FormControl<string | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPortfoliosOutput {
		PortfolioDetails?: Array<PortfolioDetail>;
		NextPageToken?: string | null;
	}
	export interface ListPortfoliosOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPortfoliosOutputFormGroup() {
		return new FormGroup<ListPortfoliosOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPortfoliosInput {
		AcceptLanguage?: string | null;
		PageToken?: string | null;
		PageSize?: number | null;
	}
	export interface ListPortfoliosInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateListPortfoliosInputFormGroup() {
		return new FormGroup<ListPortfoliosInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPortfoliosForProductOutput {
		PortfolioDetails?: Array<PortfolioDetail>;
		NextPageToken?: string | null;
	}
	export interface ListPortfoliosForProductOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPortfoliosForProductOutputFormGroup() {
		return new FormGroup<ListPortfoliosForProductOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPortfoliosForProductInput {
		AcceptLanguage?: string | null;
		ProductId: string;
		PageToken?: string | null;
		PageSize?: number | null;
	}
	export interface ListPortfoliosForProductInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateListPortfoliosForProductInputFormGroup() {
		return new FormGroup<ListPortfoliosForProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPrincipalsForPortfolioOutput {
		Principals?: Array<Principal>;
		NextPageToken?: string | null;
	}
	export interface ListPrincipalsForPortfolioOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrincipalsForPortfolioOutputFormGroup() {
		return new FormGroup<ListPrincipalsForPortfolioOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a principal. */
	export interface Principal {
		PrincipalARN?: string | null;
		PrincipalType?: AssociatePrincipalWithPortfolioInputPrincipalType | null;
	}

	/** Information about a principal. */
	export interface PrincipalFormProperties {
		PrincipalARN: FormControl<string | null | undefined>,
		PrincipalType: FormControl<AssociatePrincipalWithPortfolioInputPrincipalType | null | undefined>,
	}
	export function CreatePrincipalFormGroup() {
		return new FormGroup<PrincipalFormProperties>({
			PrincipalARN: new FormControl<string | null | undefined>(undefined),
			PrincipalType: new FormControl<AssociatePrincipalWithPortfolioInputPrincipalType | null | undefined>(undefined),
		});

	}

	export interface ListPrincipalsForPortfolioInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		PageSize?: number | null;
		PageToken?: string | null;
	}
	export interface ListPrincipalsForPortfolioInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrincipalsForPortfolioInputFormGroup() {
		return new FormGroup<ListPrincipalsForPortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProvisionedProductPlansOutput {
		ProvisionedProductPlans?: Array<ProvisionedProductPlanSummary>;
		NextPageToken?: string | null;
	}
	export interface ListProvisionedProductPlansOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProvisionedProductPlansOutputFormGroup() {
		return new FormGroup<ListProvisionedProductPlansOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a plan. */
	export interface ProvisionedProductPlanSummary {
		PlanName?: string | null;
		PlanId?: string | null;
		ProvisionProductId?: string | null;
		ProvisionProductName?: string | null;
		PlanType?: CreateProvisionedProductPlanInputPlanType | null;
		ProvisioningArtifactId?: string | null;
	}

	/** Summary information about a plan. */
	export interface ProvisionedProductPlanSummaryFormProperties {
		PlanName: FormControl<string | null | undefined>,
		PlanId: FormControl<string | null | undefined>,
		ProvisionProductId: FormControl<string | null | undefined>,
		ProvisionProductName: FormControl<string | null | undefined>,
		PlanType: FormControl<CreateProvisionedProductPlanInputPlanType | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionedProductPlanSummaryFormGroup() {
		return new FormGroup<ProvisionedProductPlanSummaryFormProperties>({
			PlanName: new FormControl<string | null | undefined>(undefined),
			PlanId: new FormControl<string | null | undefined>(undefined),
			ProvisionProductId: new FormControl<string | null | undefined>(undefined),
			ProvisionProductName: new FormControl<string | null | undefined>(undefined),
			PlanType: new FormControl<CreateProvisionedProductPlanInputPlanType | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProvisionedProductPlansInput {
		AcceptLanguage?: string | null;
		ProvisionProductId?: string | null;
		PageSize?: number | null;
		PageToken?: string | null;

		/** The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter;
	}
	export interface ListProvisionedProductPlansInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProvisionProductId: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProvisionedProductPlansInputFormGroup() {
		return new FormGroup<ListProvisionedProductPlansInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProvisionProductId: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
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
		NextPageToken?: string | null;
	}
	export interface ListProvisioningArtifactsOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProvisioningArtifactsOutputFormGroup() {
		return new FormGroup<ListProvisioningArtifactsOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProvisioningArtifactsInput {
		AcceptLanguage?: string | null;
		ProductId: string;
	}
	export interface ListProvisioningArtifactsInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
	}
	export function CreateListProvisioningArtifactsInputFormGroup() {
		return new FormGroup<ListProvisioningArtifactsInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProvisioningArtifactsForServiceActionOutput {
		ProvisioningArtifactViews?: Array<ProvisioningArtifactView>;
		NextPageToken?: string | null;
	}
	export interface ListProvisioningArtifactsForServiceActionOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProvisioningArtifactsForServiceActionOutputFormGroup() {
		return new FormGroup<ListProvisioningArtifactsForServiceActionOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
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
		ServiceActionId: string;
		PageSize?: number | null;
		PageToken?: string | null;
		AcceptLanguage?: string | null;
	}
	export interface ListProvisioningArtifactsForServiceActionInputFormProperties {
		ServiceActionId: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateListProvisioningArtifactsForServiceActionInputFormGroup() {
		return new FormGroup<ListProvisioningArtifactsForServiceActionInputFormProperties>({
			ServiceActionId: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRecordHistoryOutput {
		RecordDetails?: Array<RecordDetail>;
		NextPageToken?: string | null;
	}
	export interface ListRecordHistoryOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecordHistoryOutputFormGroup() {
		return new FormGroup<ListRecordHistoryOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRecordHistoryInput {
		AcceptLanguage?: string | null;

		/** The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter;

		/** The search filter to use when listing history records. */
		SearchFilter?: ListRecordHistorySearchFilter;
		PageSize?: number | null;
		PageToken?: string | null;
	}
	export interface ListRecordHistoryInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecordHistoryInputFormGroup() {
		return new FormGroup<ListRecordHistoryInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
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
		PageToken?: string | null;
	}
	export interface ListResourcesForTagOptionOutputFormProperties {
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesForTagOptionOutputFormGroup() {
		return new FormGroup<ListResourcesForTagOptionOutputFormProperties>({
			PageToken: new FormControl<string | null | undefined>(undefined),
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
		TagOptionId: string;
		ResourceType?: string | null;
		PageSize?: number | null;
		PageToken?: string | null;
	}
	export interface ListResourcesForTagOptionInputFormProperties {
		TagOptionId: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesForTagOptionInputFormGroup() {
		return new FormGroup<ListResourcesForTagOptionInputFormProperties>({
			TagOptionId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServiceActionsOutput {
		ServiceActionSummaries?: Array<ServiceActionSummary>;
		NextPageToken?: string | null;
	}
	export interface ListServiceActionsOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceActionsOutputFormGroup() {
		return new FormGroup<ListServiceActionsOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServiceActionsInput {
		AcceptLanguage?: string | null;
		PageSize?: number | null;
		PageToken?: string | null;
	}
	export interface ListServiceActionsInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceActionsInputFormGroup() {
		return new FormGroup<ListServiceActionsInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServiceActionsForProvisioningArtifactOutput {
		ServiceActionSummaries?: Array<ServiceActionSummary>;
		NextPageToken?: string | null;
	}
	export interface ListServiceActionsForProvisioningArtifactOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceActionsForProvisioningArtifactOutputFormGroup() {
		return new FormGroup<ListServiceActionsForProvisioningArtifactOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServiceActionsForProvisioningArtifactInput {
		ProductId: string;
		ProvisioningArtifactId: string;
		PageSize?: number | null;
		PageToken?: string | null;
		AcceptLanguage?: string | null;
	}
	export interface ListServiceActionsForProvisioningArtifactInputFormProperties {
		ProductId: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateListServiceActionsForProvisioningArtifactInputFormGroup() {
		return new FormGroup<ListServiceActionsForProvisioningArtifactInputFormProperties>({
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStackInstancesForProvisionedProductOutput {
		StackInstances?: Array<StackInstance>;
		NextPageToken?: string | null;
	}
	export interface ListStackInstancesForProvisionedProductOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackInstancesForProvisionedProductOutputFormGroup() {
		return new FormGroup<ListStackInstancesForProvisionedProductOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
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
			Account: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			StackInstanceStatus: new FormControl<StackInstanceStackInstanceStatus | null | undefined>(undefined),
		});

	}

	export enum StackInstanceStackInstanceStatus { CURRENT = 0, OUTDATED = 1, INOPERABLE = 2 }

	export interface ListStackInstancesForProvisionedProductInput {
		AcceptLanguage?: string | null;
		ProvisionedProductId: string;
		PageToken?: string | null;
		PageSize?: number | null;
	}
	export interface ListStackInstancesForProvisionedProductInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProvisionedProductId: FormControl<string | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateListStackInstancesForProvisionedProductInputFormGroup() {
		return new FormGroup<ListStackInstancesForProvisionedProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagOptionsOutput {
		TagOptionDetails?: Array<TagOptionDetail>;
		PageToken?: string | null;
	}
	export interface ListTagOptionsOutputFormProperties {
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagOptionsOutputFormGroup() {
		return new FormGroup<ListTagOptionsOutputFormProperties>({
			PageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagOptionsInput {

		/** Filters to use when listing TagOptions. */
		Filters?: ListTagOptionsFilters;
		PageSize?: number | null;
		PageToken?: string | null;
	}
	export interface ListTagOptionsInputFormProperties {
		PageSize: FormControl<number | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagOptionsInputFormGroup() {
		return new FormGroup<ListTagOptionsInputFormProperties>({
			PageSize: new FormControl<number | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters to use when listing TagOptions. */
	export interface ListTagOptionsFilters {
		Key?: string | null;
		Value?: string | null;
		Active?: boolean | null;
	}

	/** Filters to use when listing TagOptions. */
	export interface ListTagOptionsFiltersFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Active: FormControl<boolean | null | undefined>,
	}
	export function CreateListTagOptionsFiltersFormGroup() {
		return new FormGroup<ListTagOptionsFiltersFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		ProductId: string;
		ProvisioningArtifactId: string;
		PathId?: string | null;
		ProvisionedProductName: string;
		ProvisioningParameters?: Array<ProvisioningParameter>;

		/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
		ProvisioningPreferences?: ProvisioningPreferences;
		Tags?: Array<Tag>;
		NotificationArns?: Array<string>;
		ProvisionToken: string;
	}
	export interface ProvisionProductInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		PathId: FormControl<string | null | undefined>,
		ProvisionedProductName: FormControl<string | null | undefined>,
		ProvisionToken: FormControl<string | null | undefined>,
	}
	export function CreateProvisionProductInputFormGroup() {
		return new FormGroup<ProvisionProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
			PathId: new FormControl<string | null | undefined>(undefined),
			ProvisionedProductName: new FormControl<string | null | undefined>(undefined),
			ProvisionToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a parameter used to provision a product. */
	export interface ProvisioningParameter {
		Key?: string | null;
		Value?: string | null;
	}

	/** Information about a parameter used to provision a product. */
	export interface ProvisioningParameterFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateProvisioningParameterFormGroup() {
		return new FormGroup<ProvisioningParameterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
	export interface ProvisioningPreferences {
		StackSetAccounts?: Array<string>;
		StackSetRegions?: Array<string>;
		StackSetFailureToleranceCount?: number | null;
		StackSetFailureTolerancePercentage?: number | null;
		StackSetMaxConcurrencyCount?: number | null;
		StackSetMaxConcurrencyPercentage?: number | null;
	}

	/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
	export interface ProvisioningPreferencesFormProperties {
		StackSetFailureToleranceCount: FormControl<number | null | undefined>,
		StackSetFailureTolerancePercentage: FormControl<number | null | undefined>,
		StackSetMaxConcurrencyCount: FormControl<number | null | undefined>,
		StackSetMaxConcurrencyPercentage: FormControl<number | null | undefined>,
	}
	export function CreateProvisioningPreferencesFormGroup() {
		return new FormGroup<ProvisioningPreferencesFormProperties>({
			StackSetFailureToleranceCount: new FormControl<number | null | undefined>(undefined),
			StackSetFailureTolerancePercentage: new FormControl<number | null | undefined>(undefined),
			StackSetMaxConcurrencyCount: new FormControl<number | null | undefined>(undefined),
			StackSetMaxConcurrencyPercentage: new FormControl<number | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		PortfolioId: string;
		PortfolioShareType?: AcceptPortfolioShareInputPortfolioShareType | null;
	}
	export interface RejectPortfolioShareInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
		PortfolioShareType: FormControl<AcceptPortfolioShareInputPortfolioShareType | null | undefined>,
	}
	export function CreateRejectPortfolioShareInputFormGroup() {
		return new FormGroup<RejectPortfolioShareInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
			PortfolioShareType: new FormControl<AcceptPortfolioShareInputPortfolioShareType | null | undefined>(undefined),
		});

	}

	export interface ScanProvisionedProductsOutput {
		ProvisionedProducts?: Array<ProvisionedProductDetail>;
		NextPageToken?: string | null;
	}
	export interface ScanProvisionedProductsOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateScanProvisionedProductsOutputFormGroup() {
		return new FormGroup<ScanProvisionedProductsOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScanProvisionedProductsInput {
		AcceptLanguage?: string | null;

		/** The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter;
		PageSize?: number | null;
		PageToken?: string | null;
	}
	export interface ScanProvisionedProductsInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateScanProvisionedProductsInputFormGroup() {
		return new FormGroup<ScanProvisionedProductsInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchProductsOutput {
		ProductViewSummaries?: Array<ProductViewSummary>;
		ProductViewAggregations?: ProductViewAggregations;
		NextPageToken?: string | null;
	}
	export interface SearchProductsOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchProductsOutputFormGroup() {
		return new FormGroup<SearchProductsOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		Filters?: ProductViewFilters;
		PageSize?: number | null;
		SortBy?: SearchProductsInputSortBy | null;
		SortOrder?: SearchProductsInputSortOrder | null;
		PageToken?: string | null;
	}
	export interface SearchProductsInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		SortBy: FormControl<SearchProductsInputSortBy | null | undefined>,
		SortOrder: FormControl<SearchProductsInputSortOrder | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchProductsInputFormGroup() {
		return new FormGroup<SearchProductsInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			SortBy: new FormControl<SearchProductsInputSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<SearchProductsInputSortOrder | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
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
		NextPageToken?: string | null;
	}
	export interface SearchProductsAsAdminOutputFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchProductsAsAdminOutputFormGroup() {
		return new FormGroup<SearchProductsAsAdminOutputFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchProductsAsAdminInput {
		AcceptLanguage?: string | null;
		PortfolioId?: string | null;
		Filters?: ProductViewFilters;
		SortBy?: SearchProductsInputSortBy | null;
		SortOrder?: SearchProductsInputSortOrder | null;
		PageToken?: string | null;
		PageSize?: number | null;
		ProductSource?: SearchProductsAsAdminInputProductSource | null;
	}
	export interface SearchProductsAsAdminInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		PortfolioId: FormControl<string | null | undefined>,
		SortBy: FormControl<SearchProductsInputSortBy | null | undefined>,
		SortOrder: FormControl<SearchProductsInputSortOrder | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		ProductSource: FormControl<SearchProductsAsAdminInputProductSource | null | undefined>,
	}
	export function CreateSearchProductsAsAdminInputFormGroup() {
		return new FormGroup<SearchProductsAsAdminInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			PortfolioId: new FormControl<string | null | undefined>(undefined),
			SortBy: new FormControl<SearchProductsInputSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<SearchProductsInputSortOrder | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			ProductSource: new FormControl<SearchProductsAsAdminInputProductSource | null | undefined>(undefined),
		});

	}

	export enum SearchProductsAsAdminInputProductSource { ACCOUNT = 0 }

	export interface SearchProvisionedProductsOutput {
		ProvisionedProducts?: Array<ProvisionedProductAttribute>;
		TotalResultsCount?: number | null;
		NextPageToken?: string | null;
	}
	export interface SearchProvisionedProductsOutputFormProperties {
		TotalResultsCount: FormControl<number | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchProvisionedProductsOutputFormGroup() {
		return new FormGroup<SearchProvisionedProductsOutputFormProperties>({
			TotalResultsCount: new FormControl<number | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a provisioned product. */
	export interface ProvisionedProductAttribute {
		Name?: string | null;
		Arn?: string | null;
		Type?: string | null;
		Id?: string | null;
		Status?: ProvisionedProductDetailStatus | null;
		StatusMessage?: string | null;
		CreatedTime?: Date | null;
		IdempotencyToken?: string | null;
		LastRecordId?: string | null;
		Tags?: Array<Tag>;
		PhysicalId?: string | null;
		ProductId?: string | null;
		ProvisioningArtifactId?: string | null;
		UserArn?: string | null;
		UserArnSession?: string | null;
	}

	/** Information about a provisioned product. */
	export interface ProvisionedProductAttributeFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Status: FormControl<ProvisionedProductDetailStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
		LastRecordId: FormControl<string | null | undefined>,
		PhysicalId: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		UserArn: FormControl<string | null | undefined>,
		UserArnSession: FormControl<string | null | undefined>,
	}
	export function CreateProvisionedProductAttributeFormGroup() {
		return new FormGroup<ProvisionedProductAttributeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ProvisionedProductDetailStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
			LastRecordId: new FormControl<string | null | undefined>(undefined),
			PhysicalId: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
			UserArn: new FormControl<string | null | undefined>(undefined),
			UserArnSession: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchProvisionedProductsInput {
		AcceptLanguage?: string | null;

		/** The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter;
		Filters?: ProvisionedProductFilters;
		SortBy?: string | null;
		SortOrder?: SearchProductsInputSortOrder | null;
		PageSize?: number | null;
		PageToken?: string | null;
	}
	export interface SearchProvisionedProductsInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		SortBy: FormControl<string | null | undefined>,
		SortOrder: FormControl<SearchProductsInputSortOrder | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		PageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchProvisionedProductsInputFormGroup() {
		return new FormGroup<SearchProvisionedProductsInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			SortBy: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SearchProductsInputSortOrder | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			PageToken: new FormControl<string | null | undefined>(undefined),
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
		ProvisionedProductName?: string | null;
		ProvisionedProductId?: string | null;
		TerminateToken: string;
		IgnoreErrors?: boolean | null;
		AcceptLanguage?: string | null;
	}
	export interface TerminateProvisionedProductInputFormProperties {
		ProvisionedProductName: FormControl<string | null | undefined>,
		ProvisionedProductId: FormControl<string | null | undefined>,
		TerminateToken: FormControl<string | null | undefined>,
		IgnoreErrors: FormControl<boolean | null | undefined>,
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateTerminateProvisionedProductInputFormGroup() {
		return new FormGroup<TerminateProvisionedProductInputFormProperties>({
			ProvisionedProductName: new FormControl<string | null | undefined>(undefined),
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined),
			TerminateToken: new FormControl<string | null | undefined>(undefined),
			IgnoreErrors: new FormControl<boolean | null | undefined>(undefined),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		Id: string;
		Description?: string | null;
		Parameters?: string | null;
	}
	export interface UpdateConstraintInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Parameters: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConstraintInputFormGroup() {
		return new FormGroup<UpdateConstraintInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Parameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePortfolioOutput {

		/** Information about a portfolio. */
		PortfolioDetail?: PortfolioDetail;
		Tags?: Array<Tag>;
	}
	export interface UpdatePortfolioOutputFormProperties {
	}
	export function CreateUpdatePortfolioOutputFormGroup() {
		return new FormGroup<UpdatePortfolioOutputFormProperties>({
		});

	}

	export interface UpdatePortfolioInput {
		AcceptLanguage?: string | null;
		Id: string;
		DisplayName?: string | null;
		Description?: string | null;
		ProviderName?: string | null;
		AddTags?: Array<Tag>;
		RemoveTags?: Array<string>;
	}
	export interface UpdatePortfolioInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ProviderName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePortfolioInputFormGroup() {
		return new FormGroup<UpdatePortfolioInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProductOutput {

		/** Information about a product view. */
		ProductViewDetail?: ProductViewDetail;
		Tags?: Array<Tag>;
	}
	export interface UpdateProductOutputFormProperties {
	}
	export function CreateUpdateProductOutputFormGroup() {
		return new FormGroup<UpdateProductOutputFormProperties>({
		});

	}

	export interface UpdateProductInput {
		AcceptLanguage?: string | null;
		Id: string;
		Name?: string | null;
		Owner?: string | null;
		Description?: string | null;
		Distributor?: string | null;
		SupportDescription?: string | null;
		SupportEmail?: string | null;
		SupportUrl?: string | null;
		AddTags?: Array<Tag>;
		RemoveTags?: Array<string>;
	}
	export interface UpdateProductInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Distributor: FormControl<string | null | undefined>,
		SupportDescription: FormControl<string | null | undefined>,
		SupportEmail: FormControl<string | null | undefined>,
		SupportUrl: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProductInputFormGroup() {
		return new FormGroup<UpdateProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Distributor: new FormControl<string | null | undefined>(undefined),
			SupportDescription: new FormControl<string | null | undefined>(undefined),
			SupportEmail: new FormControl<string | null | undefined>(undefined),
			SupportUrl: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		ProvisionedProductName?: string | null;
		ProvisionedProductId?: string | null;
		ProductId?: string | null;
		ProvisioningArtifactId?: string | null;
		PathId?: string | null;
		ProvisioningParameters?: Array<UpdateProvisioningParameter>;

		/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
		ProvisioningPreferences?: UpdateProvisioningPreferences;
		Tags?: Array<Tag>;
		UpdateToken: string;
	}
	export interface UpdateProvisionedProductInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProvisionedProductName: FormControl<string | null | undefined>,
		ProvisionedProductId: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		PathId: FormControl<string | null | undefined>,
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProvisionedProductInputFormGroup() {
		return new FormGroup<UpdateProvisionedProductInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProvisionedProductName: new FormControl<string | null | undefined>(undefined),
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
			PathId: new FormControl<string | null | undefined>(undefined),
			UpdateToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
	export interface UpdateProvisioningPreferences {
		StackSetAccounts?: Array<string>;
		StackSetRegions?: Array<string>;
		StackSetFailureToleranceCount?: number | null;
		StackSetFailureTolerancePercentage?: number | null;
		StackSetMaxConcurrencyCount?: number | null;
		StackSetMaxConcurrencyPercentage?: number | null;
		StackSetOperationType?: UpdateProvisioningPreferencesStackSetOperationType | null;
	}

	/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
	export interface UpdateProvisioningPreferencesFormProperties {
		StackSetFailureToleranceCount: FormControl<number | null | undefined>,
		StackSetFailureTolerancePercentage: FormControl<number | null | undefined>,
		StackSetMaxConcurrencyCount: FormControl<number | null | undefined>,
		StackSetMaxConcurrencyPercentage: FormControl<number | null | undefined>,
		StackSetOperationType: FormControl<UpdateProvisioningPreferencesStackSetOperationType | null | undefined>,
	}
	export function CreateUpdateProvisioningPreferencesFormGroup() {
		return new FormGroup<UpdateProvisioningPreferencesFormProperties>({
			StackSetFailureToleranceCount: new FormControl<number | null | undefined>(undefined),
			StackSetFailureTolerancePercentage: new FormControl<number | null | undefined>(undefined),
			StackSetMaxConcurrencyCount: new FormControl<number | null | undefined>(undefined),
			StackSetMaxConcurrencyPercentage: new FormControl<number | null | undefined>(undefined),
			StackSetOperationType: new FormControl<UpdateProvisioningPreferencesStackSetOperationType | null | undefined>(undefined),
		});

	}

	export enum UpdateProvisioningPreferencesStackSetOperationType { CREATE = 0, UPDATE = 1, DELETE = 2 }

	export interface UpdateProvisionedProductPropertiesOutput {
		ProvisionedProductId?: string | null;
		ProvisionedProductProperties?: ProvisionedProductProperties;
		RecordId?: string | null;
		Status?: RecordDetailStatus | null;
	}
	export interface UpdateProvisionedProductPropertiesOutputFormProperties {
		ProvisionedProductId: FormControl<string | null | undefined>,
		RecordId: FormControl<string | null | undefined>,
		Status: FormControl<RecordDetailStatus | null | undefined>,
	}
	export function CreateUpdateProvisionedProductPropertiesOutputFormGroup() {
		return new FormGroup<UpdateProvisionedProductPropertiesOutputFormProperties>({
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined),
			RecordId: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		ProvisionedProductId: string;
		ProvisionedProductProperties: ProvisionedProductProperties;
		IdempotencyToken: string;
	}
	export interface UpdateProvisionedProductPropertiesInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProvisionedProductId: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProvisionedProductPropertiesInputFormGroup() {
		return new FormGroup<UpdateProvisionedProductPropertiesInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProvisionedProductId: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
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
		AcceptLanguage?: string | null;
		ProductId: string;
		ProvisioningArtifactId: string;
		Name?: string | null;
		Description?: string | null;
		Active?: boolean | null;
		Guidance?: ProvisioningArtifactDetailGuidance | null;
	}
	export interface UpdateProvisioningArtifactInputFormProperties {
		AcceptLanguage: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		ProvisioningArtifactId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Active: FormControl<boolean | null | undefined>,
		Guidance: FormControl<ProvisioningArtifactDetailGuidance | null | undefined>,
	}
	export function CreateUpdateProvisioningArtifactInputFormGroup() {
		return new FormGroup<UpdateProvisioningArtifactInputFormProperties>({
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProvisioningArtifactId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
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
		Id: string;
		Name?: string | null;
		Definition?: ServiceActionDefinitionMap;
		Description?: string | null;
		AcceptLanguage?: string | null;
	}
	export interface UpdateServiceActionInputFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AcceptLanguage: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceActionInputFormGroup() {
		return new FormGroup<UpdateServiceActionInputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			AcceptLanguage: new FormControl<string | null | undefined>(undefined),
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
		Id: string;
		Value?: string | null;
		Active?: boolean | null;
	}
	export interface UpdateTagOptionInputFormProperties {
		Id: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Active: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateTagOptionInputFormGroup() {
		return new FormGroup<UpdateTagOptionInputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
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

	export enum AcceptPortfolioShareX_Amz_Target { AWS242ServiceCatalogService_AcceptPortfolioShare = 0 }

	export enum AssociateBudgetWithResourceX_Amz_Target { AWS242ServiceCatalogService_AssociateBudgetWithResource = 0 }

	export enum AssociatePrincipalWithPortfolioX_Amz_Target { AWS242ServiceCatalogService_AssociatePrincipalWithPortfolio = 0 }

	export enum AssociateProductWithPortfolioX_Amz_Target { AWS242ServiceCatalogService_AssociateProductWithPortfolio = 0 }

	export enum AssociateServiceActionWithProvisioningArtifactX_Amz_Target { AWS242ServiceCatalogService_AssociateServiceActionWithProvisioningArtifact = 0 }

	export enum AssociateTagOptionWithResourceX_Amz_Target { AWS242ServiceCatalogService_AssociateTagOptionWithResource = 0 }

	export enum BatchAssociateServiceActionWithProvisioningArtifactX_Amz_Target { AWS242ServiceCatalogService_BatchAssociateServiceActionWithProvisioningArtifact = 0 }

	export enum BatchDisassociateServiceActionFromProvisioningArtifactX_Amz_Target { AWS242ServiceCatalogService_BatchDisassociateServiceActionFromProvisioningArtifact = 0 }

	export enum CopyProductX_Amz_Target { AWS242ServiceCatalogService_CopyProduct = 0 }

	export enum CreateConstraintX_Amz_Target { AWS242ServiceCatalogService_CreateConstraint = 0 }

	export enum CreatePortfolioX_Amz_Target { AWS242ServiceCatalogService_CreatePortfolio = 0 }

	export enum CreatePortfolioShareX_Amz_Target { AWS242ServiceCatalogService_CreatePortfolioShare = 0 }

	export enum CreateProductX_Amz_Target { AWS242ServiceCatalogService_CreateProduct = 0 }

	export enum CreateProvisionedProductPlanX_Amz_Target { AWS242ServiceCatalogService_CreateProvisionedProductPlan = 0 }

	export enum CreateProvisioningArtifactX_Amz_Target { AWS242ServiceCatalogService_CreateProvisioningArtifact = 0 }

	export enum CreateServiceActionX_Amz_Target { AWS242ServiceCatalogService_CreateServiceAction = 0 }

	export enum CreateTagOptionX_Amz_Target { AWS242ServiceCatalogService_CreateTagOption = 0 }

	export enum DeleteConstraintX_Amz_Target { AWS242ServiceCatalogService_DeleteConstraint = 0 }

	export enum DeletePortfolioX_Amz_Target { AWS242ServiceCatalogService_DeletePortfolio = 0 }

	export enum DeletePortfolioShareX_Amz_Target { AWS242ServiceCatalogService_DeletePortfolioShare = 0 }

	export enum DeleteProductX_Amz_Target { AWS242ServiceCatalogService_DeleteProduct = 0 }

	export enum DeleteProvisionedProductPlanX_Amz_Target { AWS242ServiceCatalogService_DeleteProvisionedProductPlan = 0 }

	export enum DeleteProvisioningArtifactX_Amz_Target { AWS242ServiceCatalogService_DeleteProvisioningArtifact = 0 }

	export enum DeleteServiceActionX_Amz_Target { AWS242ServiceCatalogService_DeleteServiceAction = 0 }

	export enum DeleteTagOptionX_Amz_Target { AWS242ServiceCatalogService_DeleteTagOption = 0 }

	export enum DescribeConstraintX_Amz_Target { AWS242ServiceCatalogService_DescribeConstraint = 0 }

	export enum DescribeCopyProductStatusX_Amz_Target { AWS242ServiceCatalogService_DescribeCopyProductStatus = 0 }

	export enum DescribePortfolioX_Amz_Target { AWS242ServiceCatalogService_DescribePortfolio = 0 }

	export enum DescribePortfolioShareStatusX_Amz_Target { AWS242ServiceCatalogService_DescribePortfolioShareStatus = 0 }

	export enum DescribeProductX_Amz_Target { AWS242ServiceCatalogService_DescribeProduct = 0 }

	export enum DescribeProductAsAdminX_Amz_Target { AWS242ServiceCatalogService_DescribeProductAsAdmin = 0 }

	export enum DescribeProductViewX_Amz_Target { AWS242ServiceCatalogService_DescribeProductView = 0 }

	export enum DescribeProvisionedProductX_Amz_Target { AWS242ServiceCatalogService_DescribeProvisionedProduct = 0 }

	export enum DescribeProvisionedProductPlanX_Amz_Target { AWS242ServiceCatalogService_DescribeProvisionedProductPlan = 0 }

	export enum DescribeProvisioningArtifactX_Amz_Target { AWS242ServiceCatalogService_DescribeProvisioningArtifact = 0 }

	export enum DescribeProvisioningParametersX_Amz_Target { AWS242ServiceCatalogService_DescribeProvisioningParameters = 0 }

	export enum DescribeRecordX_Amz_Target { AWS242ServiceCatalogService_DescribeRecord = 0 }

	export enum DescribeServiceActionX_Amz_Target { AWS242ServiceCatalogService_DescribeServiceAction = 0 }

	export enum DescribeServiceActionExecutionParametersX_Amz_Target { AWS242ServiceCatalogService_DescribeServiceActionExecutionParameters = 0 }

	export enum DescribeTagOptionX_Amz_Target { AWS242ServiceCatalogService_DescribeTagOption = 0 }

	export enum DisableAWSOrganizationsAccessX_Amz_Target { AWS242ServiceCatalogService_DisableAWSOrganizationsAccess = 0 }

	export enum DisassociateBudgetFromResourceX_Amz_Target { AWS242ServiceCatalogService_DisassociateBudgetFromResource = 0 }

	export enum DisassociatePrincipalFromPortfolioX_Amz_Target { AWS242ServiceCatalogService_DisassociatePrincipalFromPortfolio = 0 }

	export enum DisassociateProductFromPortfolioX_Amz_Target { AWS242ServiceCatalogService_DisassociateProductFromPortfolio = 0 }

	export enum DisassociateServiceActionFromProvisioningArtifactX_Amz_Target { AWS242ServiceCatalogService_DisassociateServiceActionFromProvisioningArtifact = 0 }

	export enum DisassociateTagOptionFromResourceX_Amz_Target { AWS242ServiceCatalogService_DisassociateTagOptionFromResource = 0 }

	export enum EnableAWSOrganizationsAccessX_Amz_Target { AWS242ServiceCatalogService_EnableAWSOrganizationsAccess = 0 }

	export enum ExecuteProvisionedProductPlanX_Amz_Target { AWS242ServiceCatalogService_ExecuteProvisionedProductPlan = 0 }

	export enum ExecuteProvisionedProductServiceActionX_Amz_Target { AWS242ServiceCatalogService_ExecuteProvisionedProductServiceAction = 0 }

	export enum GetAWSOrganizationsAccessStatusX_Amz_Target { AWS242ServiceCatalogService_GetAWSOrganizationsAccessStatus = 0 }

	export enum ListAcceptedPortfolioSharesX_Amz_Target { AWS242ServiceCatalogService_ListAcceptedPortfolioShares = 0 }

	export enum ListBudgetsForResourceX_Amz_Target { AWS242ServiceCatalogService_ListBudgetsForResource = 0 }

	export enum ListConstraintsForPortfolioX_Amz_Target { AWS242ServiceCatalogService_ListConstraintsForPortfolio = 0 }

	export enum ListLaunchPathsX_Amz_Target { AWS242ServiceCatalogService_ListLaunchPaths = 0 }

	export enum ListOrganizationPortfolioAccessX_Amz_Target { AWS242ServiceCatalogService_ListOrganizationPortfolioAccess = 0 }

	export enum ListPortfolioAccessX_Amz_Target { AWS242ServiceCatalogService_ListPortfolioAccess = 0 }

	export enum ListPortfoliosX_Amz_Target { AWS242ServiceCatalogService_ListPortfolios = 0 }

	export enum ListPortfoliosForProductX_Amz_Target { AWS242ServiceCatalogService_ListPortfoliosForProduct = 0 }

	export enum ListPrincipalsForPortfolioX_Amz_Target { AWS242ServiceCatalogService_ListPrincipalsForPortfolio = 0 }

	export enum ListProvisionedProductPlansX_Amz_Target { AWS242ServiceCatalogService_ListProvisionedProductPlans = 0 }

	export enum ListProvisioningArtifactsX_Amz_Target { AWS242ServiceCatalogService_ListProvisioningArtifacts = 0 }

	export enum ListProvisioningArtifactsForServiceActionX_Amz_Target { AWS242ServiceCatalogService_ListProvisioningArtifactsForServiceAction = 0 }

	export enum ListRecordHistoryX_Amz_Target { AWS242ServiceCatalogService_ListRecordHistory = 0 }

	export enum ListResourcesForTagOptionX_Amz_Target { AWS242ServiceCatalogService_ListResourcesForTagOption = 0 }

	export enum ListServiceActionsX_Amz_Target { AWS242ServiceCatalogService_ListServiceActions = 0 }

	export enum ListServiceActionsForProvisioningArtifactX_Amz_Target { AWS242ServiceCatalogService_ListServiceActionsForProvisioningArtifact = 0 }

	export enum ListStackInstancesForProvisionedProductX_Amz_Target { AWS242ServiceCatalogService_ListStackInstancesForProvisionedProduct = 0 }

	export enum ListTagOptionsX_Amz_Target { AWS242ServiceCatalogService_ListTagOptions = 0 }

	export enum ProvisionProductX_Amz_Target { AWS242ServiceCatalogService_ProvisionProduct = 0 }

	export enum RejectPortfolioShareX_Amz_Target { AWS242ServiceCatalogService_RejectPortfolioShare = 0 }

	export enum ScanProvisionedProductsX_Amz_Target { AWS242ServiceCatalogService_ScanProvisionedProducts = 0 }

	export enum SearchProductsX_Amz_Target { AWS242ServiceCatalogService_SearchProducts = 0 }

	export enum SearchProductsAsAdminX_Amz_Target { AWS242ServiceCatalogService_SearchProductsAsAdmin = 0 }

	export enum SearchProvisionedProductsX_Amz_Target { AWS242ServiceCatalogService_SearchProvisionedProducts = 0 }

	export enum TerminateProvisionedProductX_Amz_Target { AWS242ServiceCatalogService_TerminateProvisionedProduct = 0 }

	export enum UpdateConstraintX_Amz_Target { AWS242ServiceCatalogService_UpdateConstraint = 0 }

	export enum UpdatePortfolioX_Amz_Target { AWS242ServiceCatalogService_UpdatePortfolio = 0 }

	export enum UpdateProductX_Amz_Target { AWS242ServiceCatalogService_UpdateProduct = 0 }

	export enum UpdateProvisionedProductX_Amz_Target { AWS242ServiceCatalogService_UpdateProvisionedProduct = 0 }

	export enum UpdateProvisionedProductPropertiesX_Amz_Target { AWS242ServiceCatalogService_UpdateProvisionedProductProperties = 0 }

	export enum UpdateProvisioningArtifactX_Amz_Target { AWS242ServiceCatalogService_UpdateProvisioningArtifact = 0 }

	export enum UpdateServiceActionX_Amz_Target { AWS242ServiceCatalogService_UpdateServiceAction = 0 }

	export enum UpdateTagOptionX_Amz_Target { AWS242ServiceCatalogService_UpdateTagOption = 0 }

}

