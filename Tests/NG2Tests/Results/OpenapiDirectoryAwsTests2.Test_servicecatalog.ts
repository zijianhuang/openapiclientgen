import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AcceptPortfolioShareOutput {
	}

	export interface AcceptPortfolioShareInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		PortfolioShareType?: AcceptPortfolioShareInputPortfolioShareType | null;
	}

	export enum AcceptPortfolioShareInputPortfolioShareType { IMPORTED = 0, AWS_SERVICECATALOG = 1, AWS_ORGANIZATIONS = 2 }

	export interface InvalidParametersException {
	}

	export interface ResourceNotFoundException {
	}

	export interface LimitExceededException {
	}

	export interface AssociateBudgetWithResourceOutput {
	}

	export interface AssociateBudgetWithResourceInput {
		BudgetName: string;
		ResourceId: string;
	}

	export interface DuplicateResourceException {
	}

	export interface AssociatePrincipalWithPortfolioOutput {
	}

	export interface AssociatePrincipalWithPortfolioInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		PrincipalARN: string;
		PrincipalType: AssociatePrincipalWithPortfolioInputPrincipalType;
	}

	export enum AssociatePrincipalWithPortfolioInputPrincipalType { IAM = 0 }

	export interface AssociateProductWithPortfolioOutput {
	}

	export interface AssociateProductWithPortfolioInput {
		AcceptLanguage?: string | null;
		ProductId: string;
		PortfolioId: string;
		SourcePortfolioId?: string | null;
	}

	export interface AssociateServiceActionWithProvisioningArtifactOutput {
	}

	export interface AssociateServiceActionWithProvisioningArtifactInput {
		ProductId: string;
		ProvisioningArtifactId: string;
		ServiceActionId: string;
		AcceptLanguage?: string | null;
	}

	export interface AssociateTagOptionWithResourceOutput {
	}

	export interface AssociateTagOptionWithResourceInput {
		ResourceId: string;
		TagOptionId: string;
	}

	export interface TagOptionNotMigratedException {
	}

	export interface InvalidStateException {
	}

	export interface BatchAssociateServiceActionWithProvisioningArtifactOutput {
		FailedServiceActionAssociations?: Array<FailedServiceActionAssociation> | null;
	}


	/** An object containing information about the error, along with identifying information about the self-service action and its associations. */
	export interface FailedServiceActionAssociation {
		ServiceActionId?: string | null;
		ProductId?: string | null;
		ProvisioningArtifactId?: string | null;
		ErrorCode?: FailedServiceActionAssociationErrorCode | null;
		ErrorMessage?: string | null;
	}

	export enum FailedServiceActionAssociationErrorCode { DUPLICATE_RESOURCE = 0, INTERNAL_FAILURE = 1, LIMIT_EXCEEDED = 2, RESOURCE_NOT_FOUND = 3, THROTTLING = 4 }

	export interface BatchAssociateServiceActionWithProvisioningArtifactInput {
		ServiceActionAssociations: Array<ServiceActionAssociation>;
		AcceptLanguage?: string | null;
	}


	/** A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID. */
	export interface ServiceActionAssociation {
		ServiceActionId: string;
		ProductId: string;
		ProvisioningArtifactId: string;
	}

	export interface BatchDisassociateServiceActionFromProvisioningArtifactOutput {
		FailedServiceActionAssociations?: Array<FailedServiceActionAssociation> | null;
	}

	export interface BatchDisassociateServiceActionFromProvisioningArtifactInput {
		ServiceActionAssociations: Array<ServiceActionAssociation>;
		AcceptLanguage?: string | null;
	}

	export interface CopyProductOutput {
		CopyProductToken?: string | null;
	}

	export interface CopyProductInput {
		AcceptLanguage?: string | null;
		SourceProductArn: string;
		TargetProductId?: string | null;
		TargetProductName?: string | null;
		SourceProvisioningArtifactIdentifiers?: Array<SourceProvisioningArtifactPropertiesMap> | null;
		CopyOptions?: Array<CopyOption> | null;
		IdempotencyToken: string;
	}

	export interface SourceProvisioningArtifactPropertiesMap {
	}

	export enum CopyOption { CopyTags = 0 }

	export interface CreateConstraintOutput {

		/** Information about a constraint. */
		ConstraintDetail?: ConstraintDetail | null;
		ConstraintParameters?: string | null;
		Status?: CreateConstraintOutputStatus | null;
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

	export interface CreatePortfolioOutput {

		/** Information about a portfolio. */
		PortfolioDetail?: PortfolioDetail | null;
		Tags?: Array<Tag> | null;
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


	/** Information about a tag. A tag is a key-value pair. Tags are propagated to the resources created when provisioning a product. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface CreatePortfolioInput {
		AcceptLanguage?: string | null;
		DisplayName: string;
		Description?: string | null;
		ProviderName: string;
		Tags?: Array<Tag> | null;
		IdempotencyToken: string;
	}

	export interface CreatePortfolioShareOutput {
		PortfolioShareToken?: string | null;
	}

	export interface CreatePortfolioShareInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		AccountId?: string | null;

		/** Information about the organization node. */
		OrganizationNode?: OrganizationNode | null;
	}


	/** Information about the organization node. */
	export interface OrganizationNode {
		Type?: OrganizationNodeType | null;
		Value?: string | null;
	}

	export enum OrganizationNodeType { ORGANIZATION = 0, ORGANIZATIONAL_UNIT = 1, ACCOUNT = 2 }

	export interface OperationNotSupportedException {
	}

	export interface CreateProductOutput {

		/** Information about a product view. */
		ProductViewDetail?: ProductViewDetail | null;

		/** Information about a provisioning artifact (also known as a version) for a product. */
		ProvisioningArtifactDetail?: ProvisioningArtifactDetail | null;
		Tags?: Array<Tag> | null;
	}


	/** Information about a product view. */
	export interface ProductViewDetail {

		/** Summary information about a product view. */
		ProductViewSummary?: ProductViewSummary | null;
		Status?: CreateConstraintOutputStatus | null;
		ProductARN?: string | null;
		CreatedTime?: Date | null;
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
		Tags?: Array<Tag> | null;

		/**
		 * Information about a provisioning artifact (also known as a version) for a product.
		 * Required
		 */
		ProvisioningArtifactParameters: ProvisioningArtifactProperties;
		IdempotencyToken: string;
	}


	/** Information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactProperties {
		Name?: string | null;
		Description?: string | null;
		Info: ProvisioningArtifactInfo;
		Type?: ProvisioningArtifactDetailType | null;
		DisableTemplateValidation?: boolean | null;
	}

	export interface ProvisioningArtifactInfo {
	}

	export interface CreateProvisionedProductPlanOutput {
		PlanName?: string | null;
		PlanId?: string | null;
		ProvisionProductId?: string | null;
		ProvisionedProductName?: string | null;
		ProvisioningArtifactId?: string | null;
	}

	export interface CreateProvisionedProductPlanInput {
		AcceptLanguage?: string | null;
		PlanName: string;
		PlanType: CreateProvisionedProductPlanInputPlanType;
		NotificationArns?: Array<string> | null;
		PathId?: string | null;
		ProductId: string;
		ProvisionedProductName: string;
		ProvisioningArtifactId: string;
		ProvisioningParameters?: Array<UpdateProvisioningParameter> | null;
		IdempotencyToken: string;
		Tags?: Array<Tag> | null;
	}

	export enum CreateProvisionedProductPlanInputPlanType { CLOUDFORMATION = 0 }


	/** The parameter key-value pair used to update a provisioned product. */
	export interface UpdateProvisioningParameter {
		Key?: string | null;
		Value?: string | null;
		UsePreviousValue?: boolean | null;
	}

	export interface CreateProvisioningArtifactOutput {

		/** Information about a provisioning artifact (also known as a version) for a product. */
		ProvisioningArtifactDetail?: ProvisioningArtifactDetail | null;
		Info?: ProvisioningArtifactInfo | null;
		Status?: CreateConstraintOutputStatus | null;
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

	export interface CreateServiceActionOutput {

		/** An object containing detailed information about the self-service action. */
		ServiceActionDetail?: ServiceActionDetail | null;
	}


	/** An object containing detailed information about the self-service action. */
	export interface ServiceActionDetail {

		/** Detailed information about the self-service action. */
		ServiceActionSummary?: ServiceActionSummary | null;
		Definition?: ServiceActionDefinitionMap | null;
	}


	/** Detailed information about the self-service action. */
	export interface ServiceActionSummary {
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		DefinitionType?: ServiceActionSummaryDefinitionType | null;
	}

	export enum ServiceActionSummaryDefinitionType { SSM_AUTOMATION = 0 }

	export interface ServiceActionDefinitionMap {
	}

	export interface CreateServiceActionInput {
		Name: string;
		DefinitionType: ServiceActionSummaryDefinitionType;
		Definition: ServiceActionDefinitionMap;
		Description?: string | null;
		AcceptLanguage?: string | null;
		IdempotencyToken: string;
	}

	export interface CreateTagOptionOutput {

		/** Information about a TagOption. */
		TagOptionDetail?: TagOptionDetail | null;
	}


	/** Information about a TagOption. */
	export interface TagOptionDetail {
		Key?: string | null;
		Value?: string | null;
		Active?: boolean | null;
		Id?: string | null;
	}

	export interface CreateTagOptionInput {
		Key: string;
		Value: string;
	}

	export interface DeleteConstraintOutput {
	}

	export interface DeleteConstraintInput {
		AcceptLanguage?: string | null;
		Id: string;
	}

	export interface DeletePortfolioOutput {
	}

	export interface DeletePortfolioInput {
		AcceptLanguage?: string | null;
		Id: string;
	}

	export interface ResourceInUseException {
	}

	export interface DeletePortfolioShareOutput {
		PortfolioShareToken?: string | null;
	}

	export interface DeletePortfolioShareInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		AccountId?: string | null;

		/** Information about the organization node. */
		OrganizationNode?: OrganizationNode | null;
	}

	export interface DeleteProductOutput {
	}

	export interface DeleteProductInput {
		AcceptLanguage?: string | null;
		Id: string;
	}

	export interface DeleteProvisionedProductPlanOutput {
	}

	export interface DeleteProvisionedProductPlanInput {
		AcceptLanguage?: string | null;
		PlanId: string;
		IgnoreErrors?: boolean | null;
	}

	export interface DeleteProvisioningArtifactOutput {
	}

	export interface DeleteProvisioningArtifactInput {
		AcceptLanguage?: string | null;
		ProductId: string;
		ProvisioningArtifactId: string;
	}

	export interface DeleteServiceActionOutput {
	}

	export interface DeleteServiceActionInput {
		Id: string;
		AcceptLanguage?: string | null;
	}

	export interface DeleteTagOptionOutput {
	}

	export interface DeleteTagOptionInput {
		Id: string;
	}

	export interface DescribeConstraintOutput {

		/** Information about a constraint. */
		ConstraintDetail?: ConstraintDetail | null;
		ConstraintParameters?: string | null;
		Status?: CreateConstraintOutputStatus | null;
	}

	export interface DescribeConstraintInput {
		AcceptLanguage?: string | null;
		Id: string;
	}

	export interface DescribeCopyProductStatusOutput {
		CopyProductStatus?: DescribeCopyProductStatusOutputCopyProductStatus | null;
		TargetProductId?: string | null;
		StatusDetail?: string | null;
	}

	export enum DescribeCopyProductStatusOutputCopyProductStatus { SUCCEEDED = 0, IN_PROGRESS = 1, FAILED = 2 }

	export interface DescribeCopyProductStatusInput {
		AcceptLanguage?: string | null;
		CopyProductToken: string;
	}

	export interface DescribePortfolioOutput {

		/** Information about a portfolio. */
		PortfolioDetail?: PortfolioDetail | null;
		Tags?: Array<Tag> | null;
		TagOptions?: Array<TagOptionDetail> | null;
		Budgets?: Array<BudgetDetail> | null;
	}


	/** Information about a budget. */
	export interface BudgetDetail {
		BudgetName?: string | null;
	}

	export interface DescribePortfolioInput {
		AcceptLanguage?: string | null;
		Id: string;
	}

	export interface DescribePortfolioShareStatusOutput {
		PortfolioShareToken?: string | null;
		PortfolioId?: string | null;
		OrganizationNodeValue?: string | null;
		Status?: DescribePortfolioShareStatusOutputStatus | null;

		/** Information about the portfolio share operation. */
		ShareDetails?: ShareDetails | null;
	}

	export enum DescribePortfolioShareStatusOutputStatus { NOT_STARTED = 0, IN_PROGRESS = 1, COMPLETED = 2, COMPLETED_WITH_ERRORS = 3, ERROR = 4 }


	/** Information about the portfolio share operation. */
	export interface ShareDetails {
		SuccessfulShares?: Array<string> | null;
		ShareErrors?: Array<ShareError> | null;
	}


	/** Errors that occurred during the portfolio share operation. */
	export interface ShareError {
		Accounts?: Array<string> | null;
		Message?: string | null;
		Error?: string | null;
	}

	export interface DescribePortfolioShareStatusInput {
		PortfolioShareToken: string;
	}

	export interface DescribeProductOutput {

		/** Summary information about a product view. */
		ProductViewSummary?: ProductViewSummary | null;
		ProvisioningArtifacts?: Array<ProvisioningArtifact> | null;
		Budgets?: Array<BudgetDetail> | null;
		LaunchPaths?: Array<LaunchPath> | null;
	}


	/** Information about a provisioning artifact. A provisioning artifact is also known as a product version. */
	export interface ProvisioningArtifact {
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		CreatedTime?: Date | null;
		Guidance?: ProvisioningArtifactDetailGuidance | null;
	}


	/** A launch path object. */
	export interface LaunchPath {
		Id?: string | null;
		Name?: string | null;
	}

	export interface DescribeProductInput {
		AcceptLanguage?: string | null;
		Id?: string | null;
		Name?: string | null;
	}

	export interface DescribeProductAsAdminOutput {

		/** Information about a product view. */
		ProductViewDetail?: ProductViewDetail | null;
		ProvisioningArtifactSummaries?: Array<ProvisioningArtifactSummary> | null;
		Tags?: Array<Tag> | null;
		TagOptions?: Array<TagOptionDetail> | null;
		Budgets?: Array<BudgetDetail> | null;
	}


	/** Summary information about a provisioning artifact (also known as a version) for a product. */
	export interface ProvisioningArtifactSummary {
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		CreatedTime?: Date | null;
		ProvisioningArtifactMetadata?: ProvisioningArtifactInfo | null;
	}

	export interface DescribeProductAsAdminInput {
		AcceptLanguage?: string | null;
		Id?: string | null;
		Name?: string | null;
	}

	export interface DescribeProductViewOutput {

		/** Summary information about a product view. */
		ProductViewSummary?: ProductViewSummary | null;
		ProvisioningArtifacts?: Array<ProvisioningArtifact> | null;
	}

	export interface DescribeProductViewInput {
		AcceptLanguage?: string | null;
		Id: string;
	}

	export interface DescribeProvisionedProductOutput {

		/** Information about a provisioned product. */
		ProvisionedProductDetail?: ProvisionedProductDetail | null;
		CloudWatchDashboards?: Array<CloudWatchDashboard> | null;
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

	export enum ProvisionedProductDetailStatus { AVAILABLE = 0, UNDER_CHANGE = 1, TAINTED = 2, ERROR = 3, PLAN_IN_PROGRESS = 4 }


	/** Information about a CloudWatch dashboard. */
	export interface CloudWatchDashboard {
		Name?: string | null;
	}

	export interface DescribeProvisionedProductInput {
		AcceptLanguage?: string | null;
		Id: string;
	}

	export interface DescribeProvisionedProductPlanOutput {

		/** Information about a plan. */
		ProvisionedProductPlanDetails?: ProvisionedProductPlanDetails | null;
		ResourceChanges?: Array<ResourceChange> | null;
		NextPageToken?: string | null;
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
		NotificationArns?: Array<string> | null;
		ProvisioningParameters?: Array<UpdateProvisioningParameter> | null;
		Tags?: Array<Tag> | null;
		StatusMessage?: string | null;
	}

	export enum ProvisionedProductPlanDetailsStatus { CREATE_IN_PROGRESS = 0, CREATE_SUCCESS = 1, CREATE_FAILED = 2, EXECUTE_IN_PROGRESS = 3, EXECUTE_SUCCESS = 4, EXECUTE_FAILED = 5 }


	/** Information about a resource change that will occur when a plan is executed. */
	export interface ResourceChange {
		Action?: ResourceChangeAction | null;
		LogicalResourceId?: string | null;
		PhysicalResourceId?: string | null;
		ResourceType?: string | null;
		Replacement?: ResourceChangeReplacement | null;
		Scope?: Array<ResourceAttribute> | null;
		Details?: Array<ResourceChangeDetail> | null;
	}

	export enum ResourceChangeAction { ADD = 0, MODIFY = 1, REMOVE = 2 }

	export enum ResourceChangeReplacement { TRUE = 0, FALSE = 1, CONDITIONAL = 2 }

	export enum ResourceAttribute { PROPERTIES = 0, METADATA = 1, CREATIONPOLICY = 2, UPDATEPOLICY = 3, DELETIONPOLICY = 4, TAGS = 5 }


	/** Information about a change to a resource attribute. */
	export interface ResourceChangeDetail {

		/** Information about a change to a resource attribute. */
		Target?: ResourceTargetDefinition | null;
		Evaluation?: ResourceChangeDetailEvaluation | null;
		CausingEntity?: string | null;
	}


	/** Information about a change to a resource attribute. */
	export interface ResourceTargetDefinition {
		Attribute?: ResourceAttribute | null;
		Name?: string | null;
		RequiresRecreation?: ResourceTargetDefinitionRequiresRecreation | null;
	}

	export enum ResourceTargetDefinitionRequiresRecreation { NEVER = 0, CONDITIONALLY = 1, ALWAYS = 2 }

	export enum ResourceChangeDetailEvaluation { STATIC = 0, DYNAMIC = 1 }

	export interface DescribeProvisionedProductPlanInput {
		AcceptLanguage?: string | null;
		PlanId: string;
		PageSize?: number | null;
		PageToken?: string | null;
	}

	export interface DescribeProvisioningArtifactOutput {

		/** Information about a provisioning artifact (also known as a version) for a product. */
		ProvisioningArtifactDetail?: ProvisioningArtifactDetail | null;
		Info?: ProvisioningArtifactInfo | null;
		Status?: CreateConstraintOutputStatus | null;
	}

	export interface DescribeProvisioningArtifactInput {
		AcceptLanguage?: string | null;
		ProvisioningArtifactId?: string | null;
		ProductId?: string | null;
		ProvisioningArtifactName?: string | null;
		ProductName?: string | null;
		Verbose?: boolean | null;
	}

	export interface DescribeProvisioningParametersOutput {
		ProvisioningArtifactParameters?: Array<ProvisioningArtifactParameter> | null;
		ConstraintSummaries?: Array<ConstraintSummary> | null;
		UsageInstructions?: Array<UsageInstruction> | null;
		TagOptions?: Array<TagOptionSummary> | null;

		/** <p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
		ProvisioningArtifactPreferences?: ProvisioningArtifactPreferences | null;
	}


	/** Information about a parameter used to provision a product. */
	export interface ProvisioningArtifactParameter {
		ParameterKey?: string | null;
		DefaultValue?: string | null;
		ParameterType?: string | null;
		IsNoEcho?: boolean | null;
		Description?: string | null;

		/** The constraints that the administrator has put on the parameter. */
		ParameterConstraints?: ParameterConstraints | null;
	}


	/** The constraints that the administrator has put on the parameter. */
	export interface ParameterConstraints {
		AllowedValues?: Array<string> | null;
	}


	/** Summary information about a constraint. */
	export interface ConstraintSummary {
		Type?: string | null;
		Description?: string | null;
	}


	/** Additional information provided by the administrator. */
	export interface UsageInstruction {
		Type?: string | null;
		Value?: string | null;
	}


	/** Summary information about a TagOption. */
	export interface TagOptionSummary {
		Key?: string | null;
		Values?: Array<string> | null;
	}


	/** <p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
	export interface ProvisioningArtifactPreferences {
		StackSetAccounts?: Array<string> | null;
		StackSetRegions?: Array<string> | null;
	}

	export interface DescribeProvisioningParametersInput {
		AcceptLanguage?: string | null;
		ProductId: string;
		ProvisioningArtifactId: string;
		PathId?: string | null;
	}

	export interface DescribeRecordOutput {

		/** Information about a request operation. */
		RecordDetail?: RecordDetail | null;
		RecordOutputs?: Array<RecordOutput> | null;
		NextPageToken?: string | null;
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
		RecordErrors?: Array<RecordError> | null;
		RecordTags?: Array<RecordTag> | null;
	}

	export enum RecordDetailStatus { CREATED = 0, IN_PROGRESS = 1, IN_PROGRESS_IN_ERROR = 2, SUCCEEDED = 3, FAILED = 4 }


	/** The error code and description resulting from an operation. */
	export interface RecordError {
		Code?: string | null;
		Description?: string | null;
	}


	/** Information about a tag, which is a key-value pair. */
	export interface RecordTag {
		Key?: string | null;
		Value?: string | null;
	}


	/** The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL. */
	export interface RecordOutput {
		OutputKey?: string | null;
		OutputValue?: string | null;
		Description?: string | null;
	}

	export interface DescribeRecordInput {
		AcceptLanguage?: string | null;
		Id: string;
		PageToken?: string | null;
		PageSize?: number | null;
	}

	export interface DescribeServiceActionOutput {

		/** An object containing detailed information about the self-service action. */
		ServiceActionDetail?: ServiceActionDetail | null;
	}

	export interface DescribeServiceActionInput {
		Id: string;
		AcceptLanguage?: string | null;
	}

	export interface DescribeServiceActionExecutionParametersOutput {
		ServiceActionParameters?: Array<ExecutionParameter> | null;
	}


	/** Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product. */
	export interface ExecutionParameter {
		Name?: string | null;
		Type?: string | null;
		DefaultValues?: Array<string> | null;
	}

	export interface DescribeServiceActionExecutionParametersInput {
		ProvisionedProductId: string;
		ServiceActionId: string;
		AcceptLanguage?: string | null;
	}

	export interface DescribeTagOptionOutput {

		/** Information about a TagOption. */
		TagOptionDetail?: TagOptionDetail | null;
	}

	export interface DescribeTagOptionInput {
		Id: string;
	}

	export interface DisableAWSOrganizationsAccessOutput {
	}

	export interface DisableAWSOrganizationsAccessInput {
	}

	export interface DisassociateBudgetFromResourceOutput {
	}

	export interface DisassociateBudgetFromResourceInput {
		BudgetName: string;
		ResourceId: string;
	}

	export interface DisassociatePrincipalFromPortfolioOutput {
	}

	export interface DisassociatePrincipalFromPortfolioInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		PrincipalARN: string;
	}

	export interface DisassociateProductFromPortfolioOutput {
	}

	export interface DisassociateProductFromPortfolioInput {
		AcceptLanguage?: string | null;
		ProductId: string;
		PortfolioId: string;
	}

	export interface DisassociateServiceActionFromProvisioningArtifactOutput {
	}

	export interface DisassociateServiceActionFromProvisioningArtifactInput {
		ProductId: string;
		ProvisioningArtifactId: string;
		ServiceActionId: string;
		AcceptLanguage?: string | null;
	}

	export interface DisassociateTagOptionFromResourceOutput {
	}

	export interface DisassociateTagOptionFromResourceInput {
		ResourceId: string;
		TagOptionId: string;
	}

	export interface EnableAWSOrganizationsAccessOutput {
	}

	export interface EnableAWSOrganizationsAccessInput {
	}

	export interface ExecuteProvisionedProductPlanOutput {

		/** Information about a request operation. */
		RecordDetail?: RecordDetail | null;
	}

	export interface ExecuteProvisionedProductPlanInput {
		AcceptLanguage?: string | null;
		PlanId: string;
		IdempotencyToken: string;
	}

	export interface ExecuteProvisionedProductServiceActionOutput {

		/** Information about a request operation. */
		RecordDetail?: RecordDetail | null;
	}

	export interface ExecuteProvisionedProductServiceActionInput {
		ProvisionedProductId: string;
		ServiceActionId: string;
		ExecuteToken: string;
		AcceptLanguage?: string | null;
		Parameters?: ExecutionParameterMap | null;
	}

	export interface ExecutionParameterMap {
	}

	export interface GetAWSOrganizationsAccessStatusOutput {
		AccessStatus?: GetAWSOrganizationsAccessStatusOutputAccessStatus | null;
	}

	export enum GetAWSOrganizationsAccessStatusOutputAccessStatus { ENABLED = 0, UNDER_CHANGE = 1, DISABLED = 2 }

	export interface GetAWSOrganizationsAccessStatusInput {
	}

	export interface ListAcceptedPortfolioSharesOutput {
		PortfolioDetails?: Array<PortfolioDetail> | null;
		NextPageToken?: string | null;
	}

	export interface ListAcceptedPortfolioSharesInput {
		AcceptLanguage?: string | null;
		PageToken?: string | null;
		PageSize?: number | null;
		PortfolioShareType?: AcceptPortfolioShareInputPortfolioShareType | null;
	}

	export interface ListBudgetsForResourceOutput {
		Budgets?: Array<BudgetDetail> | null;
		NextPageToken?: string | null;
	}

	export interface ListBudgetsForResourceInput {
		AcceptLanguage?: string | null;
		ResourceId: string;
		PageSize?: number | null;
		PageToken?: string | null;
	}

	export interface ListConstraintsForPortfolioOutput {
		ConstraintDetails?: Array<ConstraintDetail> | null;
		NextPageToken?: string | null;
	}

	export interface ListConstraintsForPortfolioInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		ProductId?: string | null;
		PageSize?: number | null;
		PageToken?: string | null;
	}

	export interface ListLaunchPathsOutput {
		LaunchPathSummaries?: Array<LaunchPathSummary> | null;
		NextPageToken?: string | null;
	}


	/** Summary information about a product path for a user. */
	export interface LaunchPathSummary {
		Id?: string | null;
		ConstraintSummaries?: Array<ConstraintSummary> | null;
		Tags?: Array<Tag> | null;
		Name?: string | null;
	}

	export interface ListLaunchPathsInput {
		AcceptLanguage?: string | null;
		ProductId: string;
		PageSize?: number | null;
		PageToken?: string | null;
	}

	export interface ListOrganizationPortfolioAccessOutput {
		OrganizationNodes?: Array<OrganizationNode> | null;
		NextPageToken?: string | null;
	}

	export interface ListOrganizationPortfolioAccessInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		OrganizationNodeType: OrganizationNodeType;
		PageToken?: string | null;
		PageSize?: number | null;
	}

	export interface ListPortfolioAccessOutput {
		AccountIds?: Array<string> | null;
		NextPageToken?: string | null;
	}

	export interface ListPortfolioAccessInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		OrganizationParentId?: string | null;
		PageToken?: string | null;
		PageSize?: number | null;
	}

	export interface ListPortfoliosOutput {
		PortfolioDetails?: Array<PortfolioDetail> | null;
		NextPageToken?: string | null;
	}

	export interface ListPortfoliosInput {
		AcceptLanguage?: string | null;
		PageToken?: string | null;
		PageSize?: number | null;
	}

	export interface ListPortfoliosForProductOutput {
		PortfolioDetails?: Array<PortfolioDetail> | null;
		NextPageToken?: string | null;
	}

	export interface ListPortfoliosForProductInput {
		AcceptLanguage?: string | null;
		ProductId: string;
		PageToken?: string | null;
		PageSize?: number | null;
	}

	export interface ListPrincipalsForPortfolioOutput {
		Principals?: Array<Principal> | null;
		NextPageToken?: string | null;
	}


	/** Information about a principal. */
	export interface Principal {
		PrincipalARN?: string | null;
		PrincipalType?: AssociatePrincipalWithPortfolioInputPrincipalType | null;
	}

	export interface ListPrincipalsForPortfolioInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		PageSize?: number | null;
		PageToken?: string | null;
	}

	export interface ListProvisionedProductPlansOutput {
		ProvisionedProductPlans?: Array<ProvisionedProductPlanSummary> | null;
		NextPageToken?: string | null;
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

	export interface ListProvisionedProductPlansInput {
		AcceptLanguage?: string | null;
		ProvisionProductId?: string | null;
		PageSize?: number | null;
		PageToken?: string | null;

		/** The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter | null;
	}


	/** The access level to use to filter results. */
	export interface AccessLevelFilter {
		Key?: AccessLevelFilterKey | null;
		Value?: string | null;
	}

	export enum AccessLevelFilterKey { Account = 0, Role = 1, User = 2 }

	export interface ListProvisioningArtifactsOutput {
		ProvisioningArtifactDetails?: Array<ProvisioningArtifactDetail> | null;
		NextPageToken?: string | null;
	}

	export interface ListProvisioningArtifactsInput {
		AcceptLanguage?: string | null;
		ProductId: string;
	}

	export interface ListProvisioningArtifactsForServiceActionOutput {
		ProvisioningArtifactViews?: Array<ProvisioningArtifactView> | null;
		NextPageToken?: string | null;
	}


	/** An object that contains summary information about a product view and a provisioning artifact. */
	export interface ProvisioningArtifactView {

		/** Summary information about a product view. */
		ProductViewSummary?: ProductViewSummary | null;

		/** Information about a provisioning artifact. A provisioning artifact is also known as a product version. */
		ProvisioningArtifact?: ProvisioningArtifact | null;
	}

	export interface ListProvisioningArtifactsForServiceActionInput {
		ServiceActionId: string;
		PageSize?: number | null;
		PageToken?: string | null;
		AcceptLanguage?: string | null;
	}

	export interface ListRecordHistoryOutput {
		RecordDetails?: Array<RecordDetail> | null;
		NextPageToken?: string | null;
	}

	export interface ListRecordHistoryInput {
		AcceptLanguage?: string | null;

		/** The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter | null;

		/** The search filter to use when listing history records. */
		SearchFilter?: ListRecordHistorySearchFilter | null;
		PageSize?: number | null;
		PageToken?: string | null;
	}


	/** The search filter to use when listing history records. */
	export interface ListRecordHistorySearchFilter {
		Key?: string | null;
		Value?: string | null;
	}

	export interface ListResourcesForTagOptionOutput {
		ResourceDetails?: Array<ResourceDetail> | null;
		PageToken?: string | null;
	}


	/** Information about a resource. */
	export interface ResourceDetail {
		Id?: string | null;
		ARN?: string | null;
		Name?: string | null;
		Description?: string | null;
		CreatedTime?: Date | null;
	}

	export interface ListResourcesForTagOptionInput {
		TagOptionId: string;
		ResourceType?: string | null;
		PageSize?: number | null;
		PageToken?: string | null;
	}

	export interface ListServiceActionsOutput {
		ServiceActionSummaries?: Array<ServiceActionSummary> | null;
		NextPageToken?: string | null;
	}

	export interface ListServiceActionsInput {
		AcceptLanguage?: string | null;
		PageSize?: number | null;
		PageToken?: string | null;
	}

	export interface ListServiceActionsForProvisioningArtifactOutput {
		ServiceActionSummaries?: Array<ServiceActionSummary> | null;
		NextPageToken?: string | null;
	}

	export interface ListServiceActionsForProvisioningArtifactInput {
		ProductId: string;
		ProvisioningArtifactId: string;
		PageSize?: number | null;
		PageToken?: string | null;
		AcceptLanguage?: string | null;
	}

	export interface ListStackInstancesForProvisionedProductOutput {
		StackInstances?: Array<StackInstance> | null;
		NextPageToken?: string | null;
	}


	/** An AWS CloudFormation stack, in a specific account and region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status.  */
	export interface StackInstance {
		Account?: string | null;
		Region?: string | null;
		StackInstanceStatus?: StackInstanceStackInstanceStatus | null;
	}

	export enum StackInstanceStackInstanceStatus { CURRENT = 0, OUTDATED = 1, INOPERABLE = 2 }

	export interface ListStackInstancesForProvisionedProductInput {
		AcceptLanguage?: string | null;
		ProvisionedProductId: string;
		PageToken?: string | null;
		PageSize?: number | null;
	}

	export interface ListTagOptionsOutput {
		TagOptionDetails?: Array<TagOptionDetail> | null;
		PageToken?: string | null;
	}

	export interface ListTagOptionsInput {

		/** Filters to use when listing TagOptions. */
		Filters?: ListTagOptionsFilters | null;
		PageSize?: number | null;
		PageToken?: string | null;
	}


	/** Filters to use when listing TagOptions. */
	export interface ListTagOptionsFilters {
		Key?: string | null;
		Value?: string | null;
		Active?: boolean | null;
	}

	export interface ProvisionProductOutput {

		/** Information about a request operation. */
		RecordDetail?: RecordDetail | null;
	}

	export interface ProvisionProductInput {
		AcceptLanguage?: string | null;
		ProductId: string;
		ProvisioningArtifactId: string;
		PathId?: string | null;
		ProvisionedProductName: string;
		ProvisioningParameters?: Array<ProvisioningParameter> | null;

		/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
		ProvisioningPreferences?: ProvisioningPreferences | null;
		Tags?: Array<Tag> | null;
		NotificationArns?: Array<string> | null;
		ProvisionToken: string;
	}


	/** Information about a parameter used to provision a product. */
	export interface ProvisioningParameter {
		Key?: string | null;
		Value?: string | null;
	}


	/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
	export interface ProvisioningPreferences {
		StackSetAccounts?: Array<string> | null;
		StackSetRegions?: Array<string> | null;
		StackSetFailureToleranceCount?: number | null;
		StackSetFailureTolerancePercentage?: number | null;
		StackSetMaxConcurrencyCount?: number | null;
		StackSetMaxConcurrencyPercentage?: number | null;
	}

	export interface RejectPortfolioShareOutput {
	}

	export interface RejectPortfolioShareInput {
		AcceptLanguage?: string | null;
		PortfolioId: string;
		PortfolioShareType?: AcceptPortfolioShareInputPortfolioShareType | null;
	}

	export interface ScanProvisionedProductsOutput {
		ProvisionedProducts?: Array<ProvisionedProductDetail> | null;
		NextPageToken?: string | null;
	}

	export interface ScanProvisionedProductsInput {
		AcceptLanguage?: string | null;

		/** The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter | null;
		PageSize?: number | null;
		PageToken?: string | null;
	}

	export interface SearchProductsOutput {
		ProductViewSummaries?: Array<ProductViewSummary> | null;
		ProductViewAggregations?: ProductViewAggregations | null;
		NextPageToken?: string | null;
	}

	export interface ProductViewAggregations {
	}

	export interface SearchProductsInput {
		AcceptLanguage?: string | null;
		Filters?: ProductViewFilters | null;
		PageSize?: number | null;
		SortBy?: SearchProductsInputSortBy | null;
		SortOrder?: SearchProductsInputSortOrder | null;
		PageToken?: string | null;
	}

	export interface ProductViewFilters {
	}

	export enum SearchProductsInputSortBy { Title = 0, VersionCount = 1, CreationDate = 2 }

	export enum SearchProductsInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface SearchProductsAsAdminOutput {
		ProductViewDetails?: Array<ProductViewDetail> | null;
		NextPageToken?: string | null;
	}

	export interface SearchProductsAsAdminInput {
		AcceptLanguage?: string | null;
		PortfolioId?: string | null;
		Filters?: ProductViewFilters | null;
		SortBy?: SearchProductsInputSortBy | null;
		SortOrder?: SearchProductsInputSortOrder | null;
		PageToken?: string | null;
		PageSize?: number | null;
		ProductSource?: SearchProductsAsAdminInputProductSource | null;
	}

	export enum SearchProductsAsAdminInputProductSource { ACCOUNT = 0 }

	export interface SearchProvisionedProductsOutput {
		ProvisionedProducts?: Array<ProvisionedProductAttribute> | null;
		TotalResultsCount?: number | null;
		NextPageToken?: string | null;
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
		Tags?: Array<Tag> | null;
		PhysicalId?: string | null;
		ProductId?: string | null;
		ProvisioningArtifactId?: string | null;
		UserArn?: string | null;
		UserArnSession?: string | null;
	}

	export interface SearchProvisionedProductsInput {
		AcceptLanguage?: string | null;

		/** The access level to use to filter results. */
		AccessLevelFilter?: AccessLevelFilter | null;
		Filters?: ProvisionedProductFilters | null;
		SortBy?: string | null;
		SortOrder?: SearchProductsInputSortOrder | null;
		PageSize?: number | null;
		PageToken?: string | null;
	}

	export interface ProvisionedProductFilters {
	}

	export interface TerminateProvisionedProductOutput {

		/** Information about a request operation. */
		RecordDetail?: RecordDetail | null;
	}

	export interface TerminateProvisionedProductInput {
		ProvisionedProductName?: string | null;
		ProvisionedProductId?: string | null;
		TerminateToken: string;
		IgnoreErrors?: boolean | null;
		AcceptLanguage?: string | null;
	}

	export interface UpdateConstraintOutput {

		/** Information about a constraint. */
		ConstraintDetail?: ConstraintDetail | null;
		ConstraintParameters?: string | null;
		Status?: CreateConstraintOutputStatus | null;
	}

	export interface UpdateConstraintInput {
		AcceptLanguage?: string | null;
		Id: string;
		Description?: string | null;
		Parameters?: string | null;
	}

	export interface UpdatePortfolioOutput {

		/** Information about a portfolio. */
		PortfolioDetail?: PortfolioDetail | null;
		Tags?: Array<Tag> | null;
	}

	export interface UpdatePortfolioInput {
		AcceptLanguage?: string | null;
		Id: string;
		DisplayName?: string | null;
		Description?: string | null;
		ProviderName?: string | null;
		AddTags?: Array<Tag> | null;
		RemoveTags?: Array<string> | null;
	}

	export interface UpdateProductOutput {

		/** Information about a product view. */
		ProductViewDetail?: ProductViewDetail | null;
		Tags?: Array<Tag> | null;
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
		AddTags?: Array<Tag> | null;
		RemoveTags?: Array<string> | null;
	}

	export interface UpdateProvisionedProductOutput {

		/** Information about a request operation. */
		RecordDetail?: RecordDetail | null;
	}

	export interface UpdateProvisionedProductInput {
		AcceptLanguage?: string | null;
		ProvisionedProductName?: string | null;
		ProvisionedProductId?: string | null;
		ProductId?: string | null;
		ProvisioningArtifactId?: string | null;
		PathId?: string | null;
		ProvisioningParameters?: Array<UpdateProvisioningParameter> | null;

		/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
		ProvisioningPreferences?: UpdateProvisioningPreferences | null;
		Tags?: Array<Tag> | null;
		UpdateToken: string;
	}


	/** The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types. */
	export interface UpdateProvisioningPreferences {
		StackSetAccounts?: Array<string> | null;
		StackSetRegions?: Array<string> | null;
		StackSetFailureToleranceCount?: number | null;
		StackSetFailureTolerancePercentage?: number | null;
		StackSetMaxConcurrencyCount?: number | null;
		StackSetMaxConcurrencyPercentage?: number | null;
		StackSetOperationType?: UpdateProvisioningPreferencesStackSetOperationType | null;
	}

	export enum UpdateProvisioningPreferencesStackSetOperationType { CREATE = 0, UPDATE = 1, DELETE = 2 }

	export interface UpdateProvisionedProductPropertiesOutput {
		ProvisionedProductId?: string | null;
		ProvisionedProductProperties?: ProvisionedProductProperties | null;
		RecordId?: string | null;
		Status?: RecordDetailStatus | null;
	}

	export interface ProvisionedProductProperties {
	}

	export interface UpdateProvisionedProductPropertiesInput {
		AcceptLanguage?: string | null;
		ProvisionedProductId: string;
		ProvisionedProductProperties: ProvisionedProductProperties;
		IdempotencyToken: string;
	}

	export interface UpdateProvisioningArtifactOutput {

		/** Information about a provisioning artifact (also known as a version) for a product. */
		ProvisioningArtifactDetail?: ProvisioningArtifactDetail | null;
		Info?: ProvisioningArtifactInfo | null;
		Status?: CreateConstraintOutputStatus | null;
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

	export interface UpdateServiceActionOutput {

		/** An object containing detailed information about the self-service action. */
		ServiceActionDetail?: ServiceActionDetail | null;
	}

	export interface UpdateServiceActionInput {
		Id: string;
		Name?: string | null;
		Definition?: ServiceActionDefinitionMap | null;
		Description?: string | null;
		AcceptLanguage?: string | null;
	}

	export interface UpdateTagOptionOutput {

		/** Information about a TagOption. */
		TagOptionDetail?: TagOptionDetail | null;
	}

	export interface UpdateTagOptionInput {
		Id: string;
		Value?: string | null;
		Active?: boolean | null;
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

