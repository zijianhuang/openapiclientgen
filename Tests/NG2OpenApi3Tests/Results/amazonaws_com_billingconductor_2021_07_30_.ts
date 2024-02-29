import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateAccountsOutput {
		Arn?: string;
	}
	export interface AssociateAccountsOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAccountsOutputFormGroup() {
		return new FormGroup<AssociateAccountsOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ServiceLimitExceededException {
	}
	export interface ServiceLimitExceededExceptionFormProperties {
	}
	export function CreateServiceLimitExceededExceptionFormGroup() {
		return new FormGroup<ServiceLimitExceededExceptionFormProperties>({
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

	export interface AssociatePricingRulesOutput {
		Arn?: string;
	}
	export interface AssociatePricingRulesOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateAssociatePricingRulesOutputFormGroup() {
		return new FormGroup<AssociatePricingRulesOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchAssociateResourcesToCustomLineItemOutput {
		SuccessfullyAssociatedResources?: Array<AssociateResourceResponseElement>;
		FailedAssociatedResources?: Array<AssociateResourceResponseElement>;
	}
	export interface BatchAssociateResourcesToCustomLineItemOutputFormProperties {
	}
	export function CreateBatchAssociateResourcesToCustomLineItemOutputFormGroup() {
		return new FormGroup<BatchAssociateResourcesToCustomLineItemOutputFormProperties>({
		});

	}


	/** A resource association result for a percentage custom line item. */
	export interface AssociateResourceResponseElement {
		Arn?: string;
		Error?: AssociateResourceError;
	}

	/** A resource association result for a percentage custom line item. */
	export interface AssociateResourceResponseElementFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResourceResponseElementFormGroup() {
		return new FormGroup<AssociateResourceResponseElementFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a resource association error. */
	export interface AssociateResourceError {
		Message?: string;
		Reason?: AssociateResourceErrorReason;
	}

	/** A representation of a resource association error. */
	export interface AssociateResourceErrorFormProperties {
		Message: FormControl<string | null | undefined>,
		Reason: FormControl<AssociateResourceErrorReason | null | undefined>,
	}
	export function CreateAssociateResourceErrorFormGroup() {
		return new FormGroup<AssociateResourceErrorFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<AssociateResourceErrorReason | null | undefined>(undefined),
		});

	}

	export enum AssociateResourceErrorReason { INVALID_ARN = 'INVALID_ARN', SERVICE_LIMIT_EXCEEDED = 'SERVICE_LIMIT_EXCEEDED', ILLEGAL_CUSTOMLINEITEM = 'ILLEGAL_CUSTOMLINEITEM', INTERNAL_SERVER_EXCEPTION = 'INTERNAL_SERVER_EXCEPTION', INVALID_BILLING_PERIOD_RANGE = 'INVALID_BILLING_PERIOD_RANGE' }

	export interface BatchDisassociateResourcesFromCustomLineItemOutput {
		SuccessfullyDisassociatedResources?: Array<DisassociateResourceResponseElement>;
		FailedDisassociatedResources?: Array<DisassociateResourceResponseElement>;
	}
	export interface BatchDisassociateResourcesFromCustomLineItemOutputFormProperties {
	}
	export function CreateBatchDisassociateResourcesFromCustomLineItemOutputFormGroup() {
		return new FormGroup<BatchDisassociateResourcesFromCustomLineItemOutputFormProperties>({
		});

	}


	/** A resource disassociation result for a percentage custom line item. */
	export interface DisassociateResourceResponseElement {
		Arn?: string;
		Error?: AssociateResourceError;
	}

	/** A resource disassociation result for a percentage custom line item. */
	export interface DisassociateResourceResponseElementFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResourceResponseElementFormGroup() {
		return new FormGroup<DisassociateResourceResponseElementFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBillingGroupOutput {
		Arn?: string;
	}
	export interface CreateBillingGroupOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBillingGroupOutputFormGroup() {
		return new FormGroup<CreateBillingGroupOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCustomLineItemOutput {
		Arn?: string;
	}
	export interface CreateCustomLineItemOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomLineItemOutputFormGroup() {
		return new FormGroup<CreateCustomLineItemOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of the charge details that are associated with a flat custom line item. */
	export interface CustomLineItemFlatChargeDetails {

		/** Required */
		ChargeValue: number;
	}

	/** A representation of the charge details that are associated with a flat custom line item. */
	export interface CustomLineItemFlatChargeDetailsFormProperties {

		/** Required */
		ChargeValue: FormControl<number | null | undefined>,
	}
	export function CreateCustomLineItemFlatChargeDetailsFormGroup() {
		return new FormGroup<CustomLineItemFlatChargeDetailsFormProperties>({
			ChargeValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A representation of the charge details that are associated with a percentage custom line item. */
	export interface CustomLineItemPercentageChargeDetails {

		/** Required */
		PercentageValue: number;
		AssociatedValues?: Array<string>;
	}

	/** A representation of the charge details that are associated with a percentage custom line item. */
	export interface CustomLineItemPercentageChargeDetailsFormProperties {

		/** Required */
		PercentageValue: FormControl<number | null | undefined>,
	}
	export function CreateCustomLineItemPercentageChargeDetailsFormGroup() {
		return new FormGroup<CustomLineItemPercentageChargeDetailsFormProperties>({
			PercentageValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CustomLineItemType { CREDIT = 'CREDIT', FEE = 'FEE' }

	export interface CreatePricingPlanOutput {
		Arn?: string;
	}
	export interface CreatePricingPlanOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePricingPlanOutputFormGroup() {
		return new FormGroup<CreatePricingPlanOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePricingRuleOutput {
		Arn?: string;
	}
	export interface CreatePricingRuleOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePricingRuleOutputFormGroup() {
		return new FormGroup<CreatePricingRuleOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The possible Amazon Web Services Free Tier configurations.  */
	export interface CreateFreeTierConfig {

		/** Required */
		Activated: boolean;
	}

	/**  The possible Amazon Web Services Free Tier configurations.  */
	export interface CreateFreeTierConfigFormProperties {

		/** Required */
		Activated: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateFreeTierConfigFormGroup() {
		return new FormGroup<CreateFreeTierConfigFormProperties>({
			Activated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteBillingGroupOutput {
		Arn?: string;
	}
	export interface DeleteBillingGroupOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBillingGroupOutputFormGroup() {
		return new FormGroup<DeleteBillingGroupOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteCustomLineItemOutput {
		Arn?: string;
	}
	export interface DeleteCustomLineItemOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCustomLineItemOutputFormGroup() {
		return new FormGroup<DeleteCustomLineItemOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePricingPlanOutput {
		Arn?: string;
	}
	export interface DeletePricingPlanOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePricingPlanOutputFormGroup() {
		return new FormGroup<DeletePricingPlanOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePricingRuleOutput {
		Arn?: string;
	}
	export interface DeletePricingRuleOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePricingRuleOutputFormGroup() {
		return new FormGroup<DeletePricingRuleOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateAccountsOutput {
		Arn?: string;
	}
	export interface DisassociateAccountsOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateAccountsOutputFormGroup() {
		return new FormGroup<DisassociateAccountsOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociatePricingRulesOutput {
		Arn?: string;
	}
	export interface DisassociatePricingRulesOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociatePricingRulesOutputFormGroup() {
		return new FormGroup<DisassociatePricingRulesOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountAssociationsOutput {
		LinkedAccounts?: Array<AccountAssociationsListElement>;
		NextToken?: string;
	}
	export interface ListAccountAssociationsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountAssociationsOutputFormGroup() {
		return new FormGroup<ListAccountAssociationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a linked account. */
	export interface AccountAssociationsListElement {
		AccountId?: string;
		BillingGroupArn?: string;
		AccountName?: string;
		AccountEmail?: string;
	}

	/** A representation of a linked account. */
	export interface AccountAssociationsListElementFormProperties {
		AccountId: FormControl<string | null | undefined>,
		BillingGroupArn: FormControl<string | null | undefined>,
		AccountName: FormControl<string | null | undefined>,
		AccountEmail: FormControl<string | null | undefined>,
	}
	export function CreateAccountAssociationsListElementFormGroup() {
		return new FormGroup<AccountAssociationsListElementFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			BillingGroupArn: new FormControl<string | null | undefined>(undefined),
			AccountName: new FormControl<string | null | undefined>(undefined),
			AccountEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBillingGroupCostReportsOutput {
		BillingGroupCostReports?: Array<BillingGroupCostReportElement>;
		NextToken?: string;
	}
	export interface ListBillingGroupCostReportsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBillingGroupCostReportsOutputFormGroup() {
		return new FormGroup<ListBillingGroupCostReportsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary report of actual Amazon Web Services charges and calculated Amazon Web Services charges, based on the associated pricing plan of a billing group. */
	export interface BillingGroupCostReportElement {
		Arn?: string;
		AWSCost?: string;
		ProformaCost?: string;
		Margin?: string;
		MarginPercentage?: string;
		Currency?: string;
	}

	/** A summary report of actual Amazon Web Services charges and calculated Amazon Web Services charges, based on the associated pricing plan of a billing group. */
	export interface BillingGroupCostReportElementFormProperties {
		Arn: FormControl<string | null | undefined>,
		AWSCost: FormControl<string | null | undefined>,
		ProformaCost: FormControl<string | null | undefined>,
		Margin: FormControl<string | null | undefined>,
		MarginPercentage: FormControl<string | null | undefined>,
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateBillingGroupCostReportElementFormGroup() {
		return new FormGroup<BillingGroupCostReportElementFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AWSCost: new FormControl<string | null | undefined>(undefined),
			ProformaCost: new FormControl<string | null | undefined>(undefined),
			Margin: new FormControl<string | null | undefined>(undefined),
			MarginPercentage: new FormControl<string | null | undefined>(undefined),
			Currency: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBillingGroupsOutput {
		BillingGroups?: Array<BillingGroupListElement>;
		NextToken?: string;
	}
	export interface ListBillingGroupsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBillingGroupsOutputFormGroup() {
		return new FormGroup<ListBillingGroupsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a billing group. */
	export interface BillingGroupListElement {
		Name?: string;
		Arn?: string;
		Description?: string;
		PrimaryAccountId?: string;

		/** The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group. */
		ComputationPreference?: ComputationPreference;
		Size?: number | null;
		CreationTime?: number | null;
		LastModifiedTime?: number | null;
		Status?: BillingGroupStatus;
		StatusReason?: string;
		AccountGrouping?: ListBillingGroupAccountGrouping;
	}

	/** A representation of a billing group. */
	export interface BillingGroupListElementFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		PrimaryAccountId: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,
		CreationTime: FormControl<number | null | undefined>,
		LastModifiedTime: FormControl<number | null | undefined>,
		Status: FormControl<BillingGroupStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
	}
	export function CreateBillingGroupListElementFormGroup() {
		return new FormGroup<BillingGroupListElementFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			PrimaryAccountId: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<number | null | undefined>(undefined),
			LastModifiedTime: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<BillingGroupStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group. */
	export interface ComputationPreference {

		/** Required */
		PricingPlanArn: string;
	}

	/** The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group. */
	export interface ComputationPreferenceFormProperties {

		/** Required */
		PricingPlanArn: FormControl<string | null | undefined>,
	}
	export function CreateComputationPreferenceFormGroup() {
		return new FormGroup<ComputationPreferenceFormProperties>({
			PricingPlanArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BillingGroupStatus { ACTIVE = 'ACTIVE', PRIMARY_ACCOUNT_MISSING = 'PRIMARY_ACCOUNT_MISSING' }


	/** Specifies if the billing group has the following features enabled. */
	export interface ListBillingGroupAccountGrouping {
		AutoAssociate?: boolean | null;
	}

	/** Specifies if the billing group has the following features enabled. */
	export interface ListBillingGroupAccountGroupingFormProperties {
		AutoAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateListBillingGroupAccountGroupingFormGroup() {
		return new FormGroup<ListBillingGroupAccountGroupingFormProperties>({
			AutoAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListCustomLineItemVersionsOutput {
		CustomLineItemVersions?: Array<CustomLineItemVersionListElement>;
		NextToken?: string;
	}
	export interface ListCustomLineItemVersionsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomLineItemVersionsOutputFormGroup() {
		return new FormGroup<ListCustomLineItemVersionsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a custom line item version. */
	export interface CustomLineItemVersionListElement {
		Name?: string;

		/** A representation of the charge details of a custom line item. */
		ChargeDetails?: ListCustomLineItemChargeDetails;
		CurrencyCode?: CurrencyCode;
		Description?: string;
		ProductCode?: string;
		BillingGroupArn?: string;
		CreationTime?: number | null;
		LastModifiedTime?: number | null;
		AssociationSize?: number | null;
		StartBillingPeriod?: string;
		EndBillingPeriod?: string;
		Arn?: string;
		StartTime?: number | null;
	}

	/** A representation of a custom line item version. */
	export interface CustomLineItemVersionListElementFormProperties {
		Name: FormControl<string | null | undefined>,
		CurrencyCode: FormControl<CurrencyCode | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ProductCode: FormControl<string | null | undefined>,
		BillingGroupArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<number | null | undefined>,
		LastModifiedTime: FormControl<number | null | undefined>,
		AssociationSize: FormControl<number | null | undefined>,
		StartBillingPeriod: FormControl<string | null | undefined>,
		EndBillingPeriod: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		StartTime: FormControl<number | null | undefined>,
	}
	export function CreateCustomLineItemVersionListElementFormGroup() {
		return new FormGroup<CustomLineItemVersionListElementFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<CurrencyCode | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ProductCode: new FormControl<string | null | undefined>(undefined),
			BillingGroupArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<number | null | undefined>(undefined),
			LastModifiedTime: new FormControl<number | null | undefined>(undefined),
			AssociationSize: new FormControl<number | null | undefined>(undefined),
			StartBillingPeriod: new FormControl<string | null | undefined>(undefined),
			EndBillingPeriod: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  A representation of the charge details of a custom line item.  */
	export interface ListCustomLineItemChargeDetails {
		Flat?: ListCustomLineItemFlatChargeDetails;
		Percentage?: ListCustomLineItemPercentageChargeDetails;

		/** Required */
		Type: CustomLineItemType;
	}

	/**  A representation of the charge details of a custom line item.  */
	export interface ListCustomLineItemChargeDetailsFormProperties {

		/** Required */
		Type: FormControl<CustomLineItemType | null | undefined>,
	}
	export function CreateListCustomLineItemChargeDetailsFormGroup() {
		return new FormGroup<ListCustomLineItemChargeDetailsFormProperties>({
			Type: new FormControl<CustomLineItemType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  A representation of the charge details that are associated with a flat custom line item.  */
	export interface ListCustomLineItemFlatChargeDetails {

		/** Required */
		ChargeValue: number;
	}

	/**  A representation of the charge details that are associated with a flat custom line item.  */
	export interface ListCustomLineItemFlatChargeDetailsFormProperties {

		/** Required */
		ChargeValue: FormControl<number | null | undefined>,
	}
	export function CreateListCustomLineItemFlatChargeDetailsFormGroup() {
		return new FormGroup<ListCustomLineItemFlatChargeDetailsFormProperties>({
			ChargeValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  A representation of the charge details that are associated with a percentage custom line item.  */
	export interface ListCustomLineItemPercentageChargeDetails {

		/** Required */
		PercentageValue: number;
	}

	/**  A representation of the charge details that are associated with a percentage custom line item.  */
	export interface ListCustomLineItemPercentageChargeDetailsFormProperties {

		/** Required */
		PercentageValue: FormControl<number | null | undefined>,
	}
	export function CreateListCustomLineItemPercentageChargeDetailsFormGroup() {
		return new FormGroup<ListCustomLineItemPercentageChargeDetailsFormProperties>({
			PercentageValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CurrencyCode { USD = 'USD', CNY = 'CNY' }


	/** A billing period filter that specifies the custom line item versions to retrieve. */
	export interface ListCustomLineItemVersionsBillingPeriodRangeFilter {
		StartBillingPeriod?: string;
		EndBillingPeriod?: string;
	}

	/** A billing period filter that specifies the custom line item versions to retrieve. */
	export interface ListCustomLineItemVersionsBillingPeriodRangeFilterFormProperties {
		StartBillingPeriod: FormControl<string | null | undefined>,
		EndBillingPeriod: FormControl<string | null | undefined>,
	}
	export function CreateListCustomLineItemVersionsBillingPeriodRangeFilterFormGroup() {
		return new FormGroup<ListCustomLineItemVersionsBillingPeriodRangeFilterFormProperties>({
			StartBillingPeriod: new FormControl<string | null | undefined>(undefined),
			EndBillingPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomLineItemsOutput {
		CustomLineItems?: Array<CustomLineItemListElement>;
		NextToken?: string;
	}
	export interface ListCustomLineItemsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomLineItemsOutputFormGroup() {
		return new FormGroup<ListCustomLineItemsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a custom line item. */
	export interface CustomLineItemListElement {
		Arn?: string;
		Name?: string;
		ChargeDetails?: ListCustomLineItemChargeDetails;
		CurrencyCode?: CurrencyCode;
		Description?: string;
		ProductCode?: string;
		BillingGroupArn?: string;
		CreationTime?: number | null;
		LastModifiedTime?: number | null;
		AssociationSize?: number | null;
	}

	/** A representation of a custom line item. */
	export interface CustomLineItemListElementFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CurrencyCode: FormControl<CurrencyCode | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ProductCode: FormControl<string | null | undefined>,
		BillingGroupArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<number | null | undefined>,
		LastModifiedTime: FormControl<number | null | undefined>,
		AssociationSize: FormControl<number | null | undefined>,
	}
	export function CreateCustomLineItemListElementFormGroup() {
		return new FormGroup<CustomLineItemListElementFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<CurrencyCode | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ProductCode: new FormControl<string | null | undefined>(undefined),
			BillingGroupArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<number | null | undefined>(undefined),
			LastModifiedTime: new FormControl<number | null | undefined>(undefined),
			AssociationSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPricingPlansOutput {
		BillingPeriod?: string;
		PricingPlans?: Array<PricingPlanListElement>;
		NextToken?: string;
	}
	export interface ListPricingPlansOutputFormProperties {
		BillingPeriod: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPricingPlansOutputFormGroup() {
		return new FormGroup<ListPricingPlansOutputFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a pricing plan. */
	export interface PricingPlanListElement {
		Name?: string;
		Arn?: string;
		Description?: string;
		Size?: number | null;
		CreationTime?: number | null;
		LastModifiedTime?: number | null;
	}

	/** A representation of a pricing plan. */
	export interface PricingPlanListElementFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,
		CreationTime: FormControl<number | null | undefined>,
		LastModifiedTime: FormControl<number | null | undefined>,
	}
	export function CreatePricingPlanListElementFormGroup() {
		return new FormGroup<PricingPlanListElementFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<number | null | undefined>(undefined),
			LastModifiedTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPricingPlansAssociatedWithPricingRuleOutput {
		BillingPeriod?: string;
		PricingRuleArn?: string;
		PricingPlanArns?: Array<string>;
		NextToken?: string;
	}
	export interface ListPricingPlansAssociatedWithPricingRuleOutputFormProperties {
		BillingPeriod: FormControl<string | null | undefined>,
		PricingRuleArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPricingPlansAssociatedWithPricingRuleOutputFormGroup() {
		return new FormGroup<ListPricingPlansAssociatedWithPricingRuleOutputFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined),
			PricingRuleArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPricingRulesOutput {
		BillingPeriod?: string;
		PricingRules?: Array<PricingRuleListElement>;
		NextToken?: string;
	}
	export interface ListPricingRulesOutputFormProperties {
		BillingPeriod: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPricingRulesOutputFormGroup() {
		return new FormGroup<ListPricingRulesOutputFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a pricing rule. */
	export interface PricingRuleListElement {
		Name?: string;
		Arn?: string;
		Description?: string;
		Scope?: PricingRuleScope;
		Type?: PricingRuleType;
		ModifierPercentage?: number | null;
		Service?: string;
		AssociatedPricingPlanCount?: number | null;
		CreationTime?: number | null;
		LastModifiedTime?: number | null;
		BillingEntity?: string;
		Tiering?: Tiering;
		UsageType?: string;
		Operation?: string;
	}

	/** A representation of a pricing rule. */
	export interface PricingRuleListElementFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Scope: FormControl<PricingRuleScope | null | undefined>,
		Type: FormControl<PricingRuleType | null | undefined>,
		ModifierPercentage: FormControl<number | null | undefined>,
		Service: FormControl<string | null | undefined>,
		AssociatedPricingPlanCount: FormControl<number | null | undefined>,
		CreationTime: FormControl<number | null | undefined>,
		LastModifiedTime: FormControl<number | null | undefined>,
		BillingEntity: FormControl<string | null | undefined>,
		UsageType: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
	}
	export function CreatePricingRuleListElementFormGroup() {
		return new FormGroup<PricingRuleListElementFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Scope: new FormControl<PricingRuleScope | null | undefined>(undefined),
			Type: new FormControl<PricingRuleType | null | undefined>(undefined),
			ModifierPercentage: new FormControl<number | null | undefined>(undefined),
			Service: new FormControl<string | null | undefined>(undefined),
			AssociatedPricingPlanCount: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<number | null | undefined>(undefined),
			LastModifiedTime: new FormControl<number | null | undefined>(undefined),
			BillingEntity: new FormControl<string | null | undefined>(undefined),
			UsageType: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PricingRuleScope { GLOBAL = 'GLOBAL', SERVICE = 'SERVICE', BILLING_ENTITY = 'BILLING_ENTITY', SKU = 'SKU' }

	export enum PricingRuleType { MARKUP = 'MARKUP', DISCOUNT = 'DISCOUNT', TIERING = 'TIERING' }


	/**  The set of tiering configurations for the pricing rule.  */
	export interface Tiering {

		/** Required */
		FreeTier: FreeTierConfig;
	}

	/**  The set of tiering configurations for the pricing rule.  */
	export interface TieringFormProperties {
	}
	export function CreateTieringFormGroup() {
		return new FormGroup<TieringFormProperties>({
		});

	}


	/**  The possible Amazon Web Services Free Tier configurations.  */
	export interface FreeTierConfig {

		/** Required */
		Activated: boolean;
	}

	/**  The possible Amazon Web Services Free Tier configurations.  */
	export interface FreeTierConfigFormProperties {

		/** Required */
		Activated: FormControl<boolean | null | undefined>,
	}
	export function CreateFreeTierConfigFormGroup() {
		return new FormGroup<FreeTierConfigFormProperties>({
			Activated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPricingRulesAssociatedToPricingPlanOutput {
		BillingPeriod?: string;
		PricingPlanArn?: string;
		PricingRuleArns?: Array<string>;
		NextToken?: string;
	}
	export interface ListPricingRulesAssociatedToPricingPlanOutputFormProperties {
		BillingPeriod: FormControl<string | null | undefined>,
		PricingPlanArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPricingRulesAssociatedToPricingPlanOutputFormGroup() {
		return new FormGroup<ListPricingRulesAssociatedToPricingPlanOutputFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined),
			PricingPlanArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourcesAssociatedToCustomLineItemOutput {
		Arn?: string;
		AssociatedResources?: Array<ListResourcesAssociatedToCustomLineItemResponseElement>;
		NextToken?: string;
	}
	export interface ListResourcesAssociatedToCustomLineItemOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesAssociatedToCustomLineItemOutputFormGroup() {
		return new FormGroup<ListResourcesAssociatedToCustomLineItemOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A representation of a resource association for a custom line item.  */
	export interface ListResourcesAssociatedToCustomLineItemResponseElement {
		Arn?: string;
		Relationship?: CustomLineItemRelationship;
		EndBillingPeriod?: string;
	}

	/**  A representation of a resource association for a custom line item.  */
	export interface ListResourcesAssociatedToCustomLineItemResponseElementFormProperties {
		Arn: FormControl<string | null | undefined>,
		Relationship: FormControl<CustomLineItemRelationship | null | undefined>,
		EndBillingPeriod: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesAssociatedToCustomLineItemResponseElementFormGroup() {
		return new FormGroup<ListResourcesAssociatedToCustomLineItemResponseElementFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Relationship: new FormControl<CustomLineItemRelationship | null | undefined>(undefined),
			EndBillingPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomLineItemRelationship { PARENT = 'PARENT', CHILD = 'CHILD' }

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
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

	export interface UpdateBillingGroupOutput {
		Arn?: string;
		Name?: string;
		Description?: string;
		PrimaryAccountId?: string;
		PricingPlanArn?: string;
		Size?: number | null;
		LastModifiedTime?: number | null;
		Status?: BillingGroupStatus;
		StatusReason?: string;
		AccountGrouping?: UpdateBillingGroupAccountGrouping;
	}
	export interface UpdateBillingGroupOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		PrimaryAccountId: FormControl<string | null | undefined>,
		PricingPlanArn: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,
		LastModifiedTime: FormControl<number | null | undefined>,
		Status: FormControl<BillingGroupStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBillingGroupOutputFormGroup() {
		return new FormGroup<UpdateBillingGroupOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			PrimaryAccountId: new FormControl<string | null | undefined>(undefined),
			PricingPlanArn: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			LastModifiedTime: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<BillingGroupStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies if the billing group has the following features enabled. */
	export interface UpdateBillingGroupAccountGrouping {
		AutoAssociate?: boolean | null;
	}

	/** Specifies if the billing group has the following features enabled. */
	export interface UpdateBillingGroupAccountGroupingFormProperties {
		AutoAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateBillingGroupAccountGroupingFormGroup() {
		return new FormGroup<UpdateBillingGroupAccountGroupingFormProperties>({
			AutoAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateCustomLineItemOutput {
		Arn?: string;
		BillingGroupArn?: string;
		Name?: string;
		Description?: string;
		ChargeDetails?: ListCustomLineItemChargeDetails;
		LastModifiedTime?: number | null;
		AssociationSize?: number | null;
	}
	export interface UpdateCustomLineItemOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		BillingGroupArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<number | null | undefined>,
		AssociationSize: FormControl<number | null | undefined>,
	}
	export function CreateUpdateCustomLineItemOutputFormGroup() {
		return new FormGroup<UpdateCustomLineItemOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			BillingGroupArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastModifiedTime: new FormControl<number | null | undefined>(undefined),
			AssociationSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  A representation of the new charge details that are associated with a flat custom line item.  */
	export interface UpdateCustomLineItemFlatChargeDetails {

		/** Required */
		ChargeValue: number;
	}

	/**  A representation of the new charge details that are associated with a flat custom line item.  */
	export interface UpdateCustomLineItemFlatChargeDetailsFormProperties {

		/** Required */
		ChargeValue: FormControl<number | null | undefined>,
	}
	export function CreateUpdateCustomLineItemFlatChargeDetailsFormGroup() {
		return new FormGroup<UpdateCustomLineItemFlatChargeDetailsFormProperties>({
			ChargeValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  A representation of the new charge details that are associated with a percentage custom line item.  */
	export interface UpdateCustomLineItemPercentageChargeDetails {

		/** Required */
		PercentageValue: number;
	}

	/**  A representation of the new charge details that are associated with a percentage custom line item.  */
	export interface UpdateCustomLineItemPercentageChargeDetailsFormProperties {

		/** Required */
		PercentageValue: FormControl<number | null | undefined>,
	}
	export function CreateUpdateCustomLineItemPercentageChargeDetailsFormGroup() {
		return new FormGroup<UpdateCustomLineItemPercentageChargeDetailsFormProperties>({
			PercentageValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePricingPlanOutput {
		Arn?: string;
		Name?: string;
		Description?: string;
		Size?: number | null;
		LastModifiedTime?: number | null;
	}
	export interface UpdatePricingPlanOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,
		LastModifiedTime: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePricingPlanOutputFormGroup() {
		return new FormGroup<UpdatePricingPlanOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			LastModifiedTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdatePricingRuleOutput {
		Arn?: string;
		Name?: string;
		Description?: string;
		Scope?: PricingRuleScope;
		Type?: PricingRuleType;
		ModifierPercentage?: number | null;
		Service?: string;
		AssociatedPricingPlanCount?: number | null;
		LastModifiedTime?: number | null;
		BillingEntity?: string;
		Tiering?: UpdateTieringInput;
		UsageType?: string;
		Operation?: string;
	}
	export interface UpdatePricingRuleOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Scope: FormControl<PricingRuleScope | null | undefined>,
		Type: FormControl<PricingRuleType | null | undefined>,
		ModifierPercentage: FormControl<number | null | undefined>,
		Service: FormControl<string | null | undefined>,
		AssociatedPricingPlanCount: FormControl<number | null | undefined>,
		LastModifiedTime: FormControl<number | null | undefined>,
		BillingEntity: FormControl<string | null | undefined>,
		UsageType: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePricingRuleOutputFormGroup() {
		return new FormGroup<UpdatePricingRuleOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Scope: new FormControl<PricingRuleScope | null | undefined>(undefined),
			Type: new FormControl<PricingRuleType | null | undefined>(undefined),
			ModifierPercentage: new FormControl<number | null | undefined>(undefined),
			Service: new FormControl<string | null | undefined>(undefined),
			AssociatedPricingPlanCount: new FormControl<number | null | undefined>(undefined),
			LastModifiedTime: new FormControl<number | null | undefined>(undefined),
			BillingEntity: new FormControl<string | null | undefined>(undefined),
			UsageType: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The set of tiering configurations for the pricing rule.  */
	export interface UpdateTieringInput {

		/** Required */
		FreeTier: UpdateFreeTierConfig;
	}

	/**  The set of tiering configurations for the pricing rule.  */
	export interface UpdateTieringInputFormProperties {
	}
	export function CreateUpdateTieringInputFormGroup() {
		return new FormGroup<UpdateTieringInputFormProperties>({
		});

	}


	/**  The possible Amazon Web Services Free Tier configurations.  */
	export interface UpdateFreeTierConfig {

		/** Required */
		Activated: boolean;
	}

	/**  The possible Amazon Web Services Free Tier configurations.  */
	export interface UpdateFreeTierConfigFormProperties {

		/** Required */
		Activated: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateFreeTierConfigFormGroup() {
		return new FormGroup<UpdateFreeTierConfigFormProperties>({
			Activated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated billing family. */
	export interface AccountGrouping {

		/** Required */
		LinkedAccountIds: Array<string>;
		AutoAssociate?: boolean | null;
	}

	/** The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated billing family. */
	export interface AccountGroupingFormProperties {
		AutoAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountGroupingFormGroup() {
		return new FormGroup<AccountGroupingFormProperties>({
			AutoAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AssociateAccountsInput {

		/** Required */
		Arn: string;

		/** Required */
		AccountIds: Array<string>;
	}
	export interface AssociateAccountsInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAccountsInputFormGroup() {
		return new FormGroup<AssociateAccountsInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociatePricingRulesInput {

		/** Required */
		Arn: string;

		/** Required */
		PricingRuleArns: Array<string>;
	}
	export interface AssociatePricingRulesInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateAssociatePricingRulesInputFormGroup() {
		return new FormGroup<AssociatePricingRulesInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The billing period range in which the custom line item request will be applied. */
	export interface CustomLineItemBillingPeriodRange {

		/** Required */
		InclusiveStartBillingPeriod: string;
		ExclusiveEndBillingPeriod?: string;
	}

	/** The billing period range in which the custom line item request will be applied. */
	export interface CustomLineItemBillingPeriodRangeFormProperties {

		/** Required */
		InclusiveStartBillingPeriod: FormControl<string | null | undefined>,
		ExclusiveEndBillingPeriod: FormControl<string | null | undefined>,
	}
	export function CreateCustomLineItemBillingPeriodRangeFormGroup() {
		return new FormGroup<CustomLineItemBillingPeriodRangeFormProperties>({
			InclusiveStartBillingPeriod: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExclusiveEndBillingPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchAssociateResourcesToCustomLineItemInput {

		/** Required */
		TargetArn: string;

		/** Required */
		ResourceArns: Array<string>;

		/** The billing period range in which the custom line item request will be applied. */
		BillingPeriodRange?: CustomLineItemBillingPeriodRange;
	}
	export interface BatchAssociateResourcesToCustomLineItemInputFormProperties {

		/** Required */
		TargetArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateResourcesToCustomLineItemInputFormGroup() {
		return new FormGroup<BatchAssociateResourcesToCustomLineItemInputFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchDisassociateResourcesFromCustomLineItemInput {

		/** Required */
		TargetArn: string;

		/** Required */
		ResourceArns: Array<string>;

		/** The billing period range in which the custom line item request will be applied. */
		BillingPeriodRange?: CustomLineItemBillingPeriodRange;
	}
	export interface BatchDisassociateResourcesFromCustomLineItemInputFormProperties {

		/** Required */
		TargetArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateResourcesFromCustomLineItemInputFormGroup() {
		return new FormGroup<BatchDisassociateResourcesFromCustomLineItemInputFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBillingGroupInput {

		/** Required */
		Name: string;

		/** Required */
		AccountGrouping: AccountGrouping;

		/** Required */
		ComputationPreference: ComputationPreference;
		PrimaryAccountId?: string;
		Description?: string;
		Tags?: TagMap;
	}
	export interface CreateBillingGroupInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		PrimaryAccountId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateBillingGroupInputFormGroup() {
		return new FormGroup<CreateBillingGroupInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrimaryAccountId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The charge details of a custom line item. It should contain only one of <code>Flat</code> or <code>Percentage</code>. */
	export interface CustomLineItemChargeDetails {
		Flat?: CustomLineItemFlatChargeDetails;
		Percentage?: CustomLineItemPercentageChargeDetails;

		/** Required */
		Type: CustomLineItemType;
	}

	/** The charge details of a custom line item. It should contain only one of <code>Flat</code> or <code>Percentage</code>. */
	export interface CustomLineItemChargeDetailsFormProperties {

		/** Required */
		Type: FormControl<CustomLineItemType | null | undefined>,
	}
	export function CreateCustomLineItemChargeDetailsFormGroup() {
		return new FormGroup<CustomLineItemChargeDetailsFormProperties>({
			Type: new FormControl<CustomLineItemType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCustomLineItemInput {

		/** Required */
		Name: string;

		/** Required */
		Description: string;

		/** Required */
		BillingGroupArn: string;
		BillingPeriodRange?: CustomLineItemBillingPeriodRange;
		Tags?: TagMap;

		/** Required */
		ChargeDetails: CustomLineItemChargeDetails;
	}
	export interface CreateCustomLineItemInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		BillingGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomLineItemInputFormGroup() {
		return new FormGroup<CreateCustomLineItemInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BillingGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePricingPlanInput {

		/** Required */
		Name: string;
		Description?: string;
		PricingRuleArns?: Array<string>;
		Tags?: TagMap;
	}
	export interface CreatePricingPlanInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreatePricingPlanInputFormGroup() {
		return new FormGroup<CreatePricingPlanInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The set of tiering configurations for the pricing rule.  */
	export interface CreateTieringInput {

		/** Required */
		FreeTier: CreateFreeTierConfig;
	}

	/**  The set of tiering configurations for the pricing rule.  */
	export interface CreateTieringInputFormProperties {
	}
	export function CreateCreateTieringInputFormGroup() {
		return new FormGroup<CreateTieringInputFormProperties>({
		});

	}

	export interface CreatePricingRuleInput {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		Scope: PricingRuleScope;

		/** Required */
		Type: PricingRuleType;
		ModifierPercentage?: number | null;
		Service?: string;
		Tags?: TagMap;
		BillingEntity?: string;
		Tiering?: CreateTieringInput;
		UsageType?: string;
		Operation?: string;
	}
	export interface CreatePricingRuleInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<PricingRuleScope | null | undefined>,

		/** Required */
		Type: FormControl<PricingRuleType | null | undefined>,
		ModifierPercentage: FormControl<number | null | undefined>,
		Service: FormControl<string | null | undefined>,
		BillingEntity: FormControl<string | null | undefined>,
		UsageType: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
	}
	export function CreateCreatePricingRuleInputFormGroup() {
		return new FormGroup<CreatePricingRuleInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Scope: new FormControl<PricingRuleScope | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<PricingRuleType | null | undefined>(undefined, [Validators.required]),
			ModifierPercentage: new FormControl<number | null | undefined>(undefined),
			Service: new FormControl<string | null | undefined>(undefined),
			BillingEntity: new FormControl<string | null | undefined>(undefined),
			UsageType: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteBillingGroupInput {

		/** Required */
		Arn: string;
	}
	export interface DeleteBillingGroupInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBillingGroupInputFormGroup() {
		return new FormGroup<DeleteBillingGroupInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteCustomLineItemInput {

		/** Required */
		Arn: string;

		/** The billing period range in which the custom line item request will be applied. */
		BillingPeriodRange?: CustomLineItemBillingPeriodRange;
	}
	export interface DeleteCustomLineItemInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCustomLineItemInputFormGroup() {
		return new FormGroup<DeleteCustomLineItemInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePricingPlanInput {

		/** Required */
		Arn: string;
	}
	export interface DeletePricingPlanInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePricingPlanInputFormGroup() {
		return new FormGroup<DeletePricingPlanInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePricingRuleInput {

		/** Required */
		Arn: string;
	}
	export interface DeletePricingRuleInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePricingRuleInputFormGroup() {
		return new FormGroup<DeletePricingRuleInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateAccountsInput {

		/** Required */
		Arn: string;

		/** Required */
		AccountIds: Array<string>;
	}
	export interface DisassociateAccountsInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateAccountsInputFormGroup() {
		return new FormGroup<DisassociateAccountsInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociatePricingRulesInput {

		/** Required */
		Arn: string;

		/** Required */
		PricingRuleArns: Array<string>;
	}
	export interface DisassociatePricingRulesInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociatePricingRulesInputFormGroup() {
		return new FormGroup<DisassociatePricingRulesInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The filter on the account ID of the linked account, or any of the following:</p> <p> <code>MONITORED</code>: linked accounts that are associated to billing groups.</p> <p> <code>UNMONITORED</code>: linked accounts that are not associated to billing groups.</p> <p> <code>Billing Group Arn</code>: linked accounts that are associated to the provided Billing Group Arn.</p> */
	export interface ListAccountAssociationsFilter {
		Association?: string;
		AccountId?: string;
		AccountIds?: Array<string>;
	}

	/** <p>The filter on the account ID of the linked account, or any of the following:</p> <p> <code>MONITORED</code>: linked accounts that are associated to billing groups.</p> <p> <code>UNMONITORED</code>: linked accounts that are not associated to billing groups.</p> <p> <code>Billing Group Arn</code>: linked accounts that are associated to the provided Billing Group Arn.</p> */
	export interface ListAccountAssociationsFilterFormProperties {
		Association: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListAccountAssociationsFilterFormGroup() {
		return new FormGroup<ListAccountAssociationsFilterFormProperties>({
			Association: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountAssociationsInput {
		BillingPeriod?: string;
		Filters?: ListAccountAssociationsFilter;
		NextToken?: string;
	}
	export interface ListAccountAssociationsInputFormProperties {
		BillingPeriod: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountAssociationsInputFormGroup() {
		return new FormGroup<ListAccountAssociationsInputFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The filter used to retrieve specific <code>BillingGroupCostReportElements</code>. */
	export interface ListBillingGroupCostReportsFilter {
		BillingGroupArns?: Array<string>;
	}

	/** The filter used to retrieve specific <code>BillingGroupCostReportElements</code>. */
	export interface ListBillingGroupCostReportsFilterFormProperties {
	}
	export function CreateListBillingGroupCostReportsFilterFormGroup() {
		return new FormGroup<ListBillingGroupCostReportsFilterFormProperties>({
		});

	}

	export interface ListBillingGroupCostReportsInput {
		BillingPeriod?: string;
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: ListBillingGroupCostReportsFilter;
	}
	export interface ListBillingGroupCostReportsInputFormProperties {
		BillingPeriod: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBillingGroupCostReportsInputFormGroup() {
		return new FormGroup<ListBillingGroupCostReportsInputFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The filter that specifies the billing groups and pricing plans to retrieve billing group information. */
	export interface ListBillingGroupsFilter {
		Arns?: Array<string>;
		PricingPlan?: string;
		Statuses?: Array<BillingGroupStatus>;
		AutoAssociate?: boolean | null;
	}

	/** The filter that specifies the billing groups and pricing plans to retrieve billing group information. */
	export interface ListBillingGroupsFilterFormProperties {
		PricingPlan: FormControl<string | null | undefined>,
		AutoAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateListBillingGroupsFilterFormGroup() {
		return new FormGroup<ListBillingGroupsFilterFormProperties>({
			PricingPlan: new FormControl<string | null | undefined>(undefined),
			AutoAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListBillingGroupsInput {
		BillingPeriod?: string;
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: ListBillingGroupsFilter;
	}
	export interface ListBillingGroupsInputFormProperties {
		BillingPeriod: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBillingGroupsInputFormGroup() {
		return new FormGroup<ListBillingGroupsInputFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter that specifies the billing period range where the custom line item versions reside. */
	export interface ListCustomLineItemVersionsFilter {
		BillingPeriodRange?: ListCustomLineItemVersionsBillingPeriodRangeFilter;
	}

	/** A filter that specifies the billing period range where the custom line item versions reside. */
	export interface ListCustomLineItemVersionsFilterFormProperties {
	}
	export function CreateListCustomLineItemVersionsFilterFormGroup() {
		return new FormGroup<ListCustomLineItemVersionsFilterFormProperties>({
		});

	}

	export interface ListCustomLineItemVersionsInput {

		/** Required */
		Arn: string;
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: ListCustomLineItemVersionsFilter;
	}
	export interface ListCustomLineItemVersionsInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomLineItemVersionsInputFormGroup() {
		return new FormGroup<ListCustomLineItemVersionsInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter that specifies the custom line items and billing groups to retrieve FFLI information. */
	export interface ListCustomLineItemsFilter {
		Names?: Array<string>;
		BillingGroups?: Array<string>;
		Arns?: Array<string>;
	}

	/** A filter that specifies the custom line items and billing groups to retrieve FFLI information. */
	export interface ListCustomLineItemsFilterFormProperties {
	}
	export function CreateListCustomLineItemsFilterFormGroup() {
		return new FormGroup<ListCustomLineItemsFilterFormProperties>({
		});

	}

	export interface ListCustomLineItemsInput {
		BillingPeriod?: string;
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: ListCustomLineItemsFilter;
	}
	export interface ListCustomLineItemsInputFormProperties {
		BillingPeriod: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomLineItemsInputFormGroup() {
		return new FormGroup<ListCustomLineItemsInputFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPricingPlansAssociatedWithPricingRuleInput {
		BillingPeriod?: string;

		/** Required */
		PricingRuleArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListPricingPlansAssociatedWithPricingRuleInputFormProperties {
		BillingPeriod: FormControl<string | null | undefined>,

		/** Required */
		PricingRuleArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPricingPlansAssociatedWithPricingRuleInputFormGroup() {
		return new FormGroup<ListPricingPlansAssociatedWithPricingRuleInputFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined),
			PricingRuleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The filter that specifies the Amazon Resource Names (ARNs) of pricing plans, to retrieve pricing plan information. */
	export interface ListPricingPlansFilter {
		Arns?: Array<string>;
	}

	/** The filter that specifies the Amazon Resource Names (ARNs) of pricing plans, to retrieve pricing plan information. */
	export interface ListPricingPlansFilterFormProperties {
	}
	export function CreateListPricingPlansFilterFormGroup() {
		return new FormGroup<ListPricingPlansFilterFormProperties>({
		});

	}

	export interface ListPricingPlansInput {
		BillingPeriod?: string;
		Filters?: ListPricingPlansFilter;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListPricingPlansInputFormProperties {
		BillingPeriod: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPricingPlansInputFormGroup() {
		return new FormGroup<ListPricingPlansInputFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPricingRulesAssociatedToPricingPlanInput {
		BillingPeriod?: string;

		/** Required */
		PricingPlanArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListPricingRulesAssociatedToPricingPlanInputFormProperties {
		BillingPeriod: FormControl<string | null | undefined>,

		/** Required */
		PricingPlanArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPricingRulesAssociatedToPricingPlanInputFormGroup() {
		return new FormGroup<ListPricingRulesAssociatedToPricingPlanInputFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined),
			PricingPlanArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The filter that specifies criteria that the pricing rules returned by the <code>ListPricingRules</code> API will adhere to. */
	export interface ListPricingRulesFilter {
		Arns?: Array<string>;
	}

	/**  The filter that specifies criteria that the pricing rules returned by the <code>ListPricingRules</code> API will adhere to. */
	export interface ListPricingRulesFilterFormProperties {
	}
	export function CreateListPricingRulesFilterFormGroup() {
		return new FormGroup<ListPricingRulesFilterFormProperties>({
		});

	}

	export interface ListPricingRulesInput {
		BillingPeriod?: string;
		Filters?: ListPricingRulesFilter;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListPricingRulesInputFormProperties {
		BillingPeriod: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPricingRulesInputFormGroup() {
		return new FormGroup<ListPricingRulesInputFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A filter that specifies the type of resource associations that should be retrieved for a custom line item.  */
	export interface ListResourcesAssociatedToCustomLineItemFilter {
		Relationship?: CustomLineItemRelationship;
	}

	/**  A filter that specifies the type of resource associations that should be retrieved for a custom line item.  */
	export interface ListResourcesAssociatedToCustomLineItemFilterFormProperties {
		Relationship: FormControl<CustomLineItemRelationship | null | undefined>,
	}
	export function CreateListResourcesAssociatedToCustomLineItemFilterFormGroup() {
		return new FormGroup<ListResourcesAssociatedToCustomLineItemFilterFormProperties>({
			Relationship: new FormControl<CustomLineItemRelationship | null | undefined>(undefined),
		});

	}

	export interface ListResourcesAssociatedToCustomLineItemInput {
		BillingPeriod?: string;

		/** Required */
		Arn: string;
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: ListResourcesAssociatedToCustomLineItemFilter;
	}
	export interface ListResourcesAssociatedToCustomLineItemInputFormProperties {
		BillingPeriod: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesAssociatedToCustomLineItemInputFormGroup() {
		return new FormGroup<ListResourcesAssociatedToCustomLineItemInputFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
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

	export interface TagResourceRequest {

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
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

	export interface UpdateBillingGroupInput {

		/** Required */
		Arn: string;
		Name?: string;
		Status?: BillingGroupStatus;
		ComputationPreference?: ComputationPreference;
		Description?: string;
		AccountGrouping?: UpdateBillingGroupAccountGrouping;
	}
	export interface UpdateBillingGroupInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<BillingGroupStatus | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBillingGroupInputFormGroup() {
		return new FormGroup<UpdateBillingGroupInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<BillingGroupStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A representation of the new charge details of a custom line item. This should contain only one of <code>Flat</code> or <code>Percentage</code>.  */
	export interface UpdateCustomLineItemChargeDetails {
		Flat?: UpdateCustomLineItemFlatChargeDetails;
		Percentage?: UpdateCustomLineItemPercentageChargeDetails;
	}

	/**  A representation of the new charge details of a custom line item. This should contain only one of <code>Flat</code> or <code>Percentage</code>.  */
	export interface UpdateCustomLineItemChargeDetailsFormProperties {
	}
	export function CreateUpdateCustomLineItemChargeDetailsFormGroup() {
		return new FormGroup<UpdateCustomLineItemChargeDetailsFormProperties>({
		});

	}

	export interface UpdateCustomLineItemInput {

		/** Required */
		Arn: string;
		Name?: string;
		Description?: string;
		ChargeDetails?: UpdateCustomLineItemChargeDetails;

		/** The billing period range in which the custom line item request will be applied. */
		BillingPeriodRange?: CustomLineItemBillingPeriodRange;
	}
	export interface UpdateCustomLineItemInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomLineItemInputFormGroup() {
		return new FormGroup<UpdateCustomLineItemInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePricingPlanInput {

		/** Required */
		Arn: string;
		Name?: string;
		Description?: string;
	}
	export interface UpdatePricingPlanInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePricingPlanInputFormGroup() {
		return new FormGroup<UpdatePricingPlanInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePricingRuleInput {

		/** Required */
		Arn: string;
		Name?: string;
		Description?: string;
		Type?: PricingRuleType;
		ModifierPercentage?: number | null;
		Tiering?: UpdateTieringInput;
	}
	export interface UpdatePricingRuleInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<PricingRuleType | null | undefined>,
		ModifierPercentage: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePricingRuleInputFormGroup() {
		return new FormGroup<UpdatePricingRuleInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<PricingRuleType | null | undefined>(undefined),
			ModifierPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Connects an array of account IDs in a consolidated billing family to a predefined billing group. The account IDs must be a part of the consolidated billing family during the current month, and not already associated with another billing group. The maximum number of accounts that can be associated in one call is 30.
		 * Post associate-accounts
		 * @return {AssociateAccountsOutput} Success
		 */
		AssociateAccounts(requestBody: AssociateAccountsPostBody): Observable<AssociateAccountsOutput> {
			return this.http.post<AssociateAccountsOutput>(this.baseUri + 'associate-accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Connects an array of <code>PricingRuleArns</code> to a defined <code>PricingPlan</code>. The maximum number <code>PricingRuleArn</code> that can be associated in one call is 30.
		 * Put associate-pricing-rules
		 * @return {AssociatePricingRulesOutput} Success
		 */
		AssociatePricingRules(requestBody: AssociatePricingRulesPutBody): Observable<AssociatePricingRulesOutput> {
			return this.http.put<AssociatePricingRulesOutput>(this.baseUri + 'associate-pricing-rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a batch of resources to a percentage custom line item.
		 * Put batch-associate-resources-to-custom-line-item
		 * @return {BatchAssociateResourcesToCustomLineItemOutput} Success
		 */
		BatchAssociateResourcesToCustomLineItem(requestBody: BatchAssociateResourcesToCustomLineItemPutBody): Observable<BatchAssociateResourcesToCustomLineItemOutput> {
			return this.http.put<BatchAssociateResourcesToCustomLineItemOutput>(this.baseUri + 'batch-associate-resources-to-custom-line-item', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a batch of resources from a percentage custom line item.
		 * Put batch-disassociate-resources-from-custom-line-item
		 * @return {BatchDisassociateResourcesFromCustomLineItemOutput} Success
		 */
		BatchDisassociateResourcesFromCustomLineItem(requestBody: BatchDisassociateResourcesFromCustomLineItemPutBody): Observable<BatchDisassociateResourcesFromCustomLineItemOutput> {
			return this.http.put<BatchDisassociateResourcesFromCustomLineItemOutput>(this.baseUri + 'batch-disassociate-resources-from-custom-line-item', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation.
		 * Post create-billing-group
		 * @return {CreateBillingGroupOutput} Success
		 */
		CreateBillingGroup(requestBody: CreateBillingGroupPostBody): Observable<CreateBillingGroupOutput> {
			return this.http.post<CreateBillingGroupOutput>(this.baseUri + 'create-billing-group', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount.
		 * Post create-custom-line-item
		 * @return {CreateCustomLineItemOutput} Success
		 */
		CreateCustomLineItem(requestBody: CreateCustomLineItemPostBody): Observable<CreateCustomLineItemOutput> {
			return this.http.post<CreateCustomLineItemOutput>(this.baseUri + 'create-custom-line-item', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups.
		 * Post create-pricing-plan
		 * @return {CreatePricingPlanOutput} Success
		 */
		CreatePricingPlan(requestBody: CreatePricingPlanPostBody): Observable<CreatePricingPlanOutput> {
			return this.http.post<CreatePricingPlanOutput>(this.baseUri + 'create-pricing-plan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans.
		 * Post create-pricing-rule
		 * @return {CreatePricingRuleOutput} Success
		 */
		CreatePricingRule(requestBody: CreatePricingRulePostBody): Observable<CreatePricingRuleOutput> {
			return this.http.post<CreatePricingRuleOutput>(this.baseUri + 'create-pricing-rule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a billing group.
		 * Post delete-billing-group
		 * @return {DeleteBillingGroupOutput} Success
		 */
		DeleteBillingGroup(requestBody: DeleteBillingGroupPostBody): Observable<DeleteBillingGroupOutput> {
			return this.http.post<DeleteBillingGroupOutput>(this.baseUri + 'delete-billing-group', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the custom line item identified by the given ARN in the current, or previous billing period.
		 * Post delete-custom-line-item
		 * @return {DeleteCustomLineItemOutput} Success
		 */
		DeleteCustomLineItem(requestBody: DeleteCustomLineItemPostBody): Observable<DeleteCustomLineItemOutput> {
			return this.http.post<DeleteCustomLineItemOutput>(this.baseUri + 'delete-custom-line-item', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully.
		 * Post delete-pricing-plan
		 * @return {DeletePricingPlanOutput} Success
		 */
		DeletePricingPlan(requestBody: DeletePricingPlanPostBody): Observable<DeletePricingPlanOutput> {
			return this.http.post<DeletePricingPlanOutput>(this.baseUri + 'delete-pricing-plan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN).
		 * Post delete-pricing-rule
		 * @return {DeletePricingRuleOutput} Success
		 */
		DeletePricingRule(requestBody: DeletePricingRulePostBody): Observable<DeletePricingRuleOutput> {
			return this.http.post<DeletePricingRuleOutput>(this.baseUri + 'delete-pricing-rule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified list of account IDs from the given billing group.
		 * Post disassociate-accounts
		 * @return {DisassociateAccountsOutput} Success
		 */
		DisassociateAccounts(requestBody: DisassociateAccountsPostBody): Observable<DisassociateAccountsOutput> {
			return this.http.post<DisassociateAccountsOutput>(this.baseUri + 'disassociate-accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a list of pricing rules from a pricing plan.
		 * Put disassociate-pricing-rules
		 * @return {DisassociatePricingRulesOutput} Success
		 */
		DisassociatePricingRules(requestBody: DisassociatePricingRulesPutBody): Observable<DisassociatePricingRulesOutput> {
			return this.http.put<DisassociatePricingRulesOutput>(this.baseUri + 'disassociate-pricing-rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account.
		 * Post list-account-associations
		 * @param {string} NextToken Pagination token
		 * @return {ListAccountAssociationsOutput} Success
		 */
		ListAccountAssociations(NextToken: string | null | undefined, requestBody: ListAccountAssociationsPostBody): Observable<ListAccountAssociationsOutput> {
			return this.http.post<ListAccountAssociationsOutput>(this.baseUri + 'list-account-associations?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group.
		 * Post list-billing-group-cost-reports
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBillingGroupCostReportsOutput} Success
		 */
		ListBillingGroupCostReports(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListBillingGroupCostReportsPostBody): Observable<ListBillingGroupCostReportsOutput> {
			return this.http.post<ListBillingGroupCostReportsOutput>(this.baseUri + 'list-billing-group-cost-reports?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.
		 * Post list-billing-groups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBillingGroupsOutput} Success
		 */
		ListBillingGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListBillingGroupsPostBody): Observable<ListBillingGroupsOutput> {
			return this.http.post<ListBillingGroupsOutput>(this.baseUri + 'list-billing-groups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A paginated call to get a list of all custom line item versions.
		 * Post list-custom-line-item-versions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCustomLineItemVersionsOutput} Success
		 */
		ListCustomLineItemVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCustomLineItemVersionsPostBody): Observable<ListCustomLineItemVersionsOutput> {
			return this.http.post<ListCustomLineItemVersionsOutput>(this.baseUri + 'list-custom-line-item-versions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used.
		 * Post list-custom-line-items
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCustomLineItemsOutput} Success
		 */
		ListCustomLineItems(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCustomLineItemsPostBody): Observable<ListCustomLineItemsOutput> {
			return this.http.post<ListCustomLineItemsOutput>(this.baseUri + 'list-custom-line-items?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used.
		 * Post list-pricing-plans
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPricingPlansOutput} Success
		 */
		ListPricingPlans(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPricingPlansPostBody): Observable<ListPricingPlansOutput> {
			return this.http.post<ListPricingPlansOutput>(this.baseUri + 'list-pricing-plans?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A list of the pricing plans that are associated with a pricing rule.
		 * Post list-pricing-plans-associated-with-pricing-rule
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPricingPlansAssociatedWithPricingRuleOutput} Success
		 */
		ListPricingPlansAssociatedWithPricingRule(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPricingPlansAssociatedWithPricingRulePostBody): Observable<ListPricingPlansAssociatedWithPricingRuleOutput> {
			return this.http.post<ListPricingPlansAssociatedWithPricingRuleOutput>(this.baseUri + 'list-pricing-plans-associated-with-pricing-rule?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans.
		 * Post list-pricing-rules
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPricingRulesOutput} Success
		 */
		ListPricingRules(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPricingRulesPostBody): Observable<ListPricingRulesOutput> {
			return this.http.post<ListPricingRulesOutput>(this.baseUri + 'list-pricing-rules?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the pricing rules that are associated with a pricing plan.
		 * Post list-pricing-rules-associated-to-pricing-plan
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPricingRulesAssociatedToPricingPlanOutput} Success
		 */
		ListPricingRulesAssociatedToPricingPlan(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPricingRulesAssociatedToPricingPlanPostBody): Observable<ListPricingRulesAssociatedToPricingPlanOutput> {
			return this.http.post<ListPricingRulesAssociatedToPricingPlanOutput>(this.baseUri + 'list-pricing-rules-associated-to-pricing-plan?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the resources that are associated to a custom line item.
		 * Post list-resources-associated-to-custom-line-item
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourcesAssociatedToCustomLineItemOutput} Success
		 */
		ListResourcesAssociatedToCustomLineItem(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResourcesAssociatedToCustomLineItemPostBody): Observable<ListResourcesAssociatedToCustomLineItemOutput> {
			return this.http.post<ListResourcesAssociatedToCustomLineItemOutput>(this.baseUri + 'list-resources-associated-to-custom-line-item?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A list the tags for a resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn  The Amazon Resource Name (ARN) that identifies the resource to list the tags. 
		 *     Min length: 0    Max length: 100
		 * @return {void} 
		 */
		ListTagsForResource(ResourceArn: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn  The Amazon Resource Name (ARN) of the resource to which to add tags. 
		 *     Min length: 0    Max length: 100
		 * @return {void} 
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes specified tags from a resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn  The Amazon Resource Name (ARN) of the resource to which to delete tags. 
		 *     Min length: 0    Max length: 100
		 * @param {Array<string>} tagKeys  The tags to delete from the resource as a list of key-value pairs. 
		 *     Minimum items: 1    Maximum items: 200
		 * @return {void} 
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This updates an existing billing group.
		 * Post update-billing-group
		 * @return {UpdateBillingGroupOutput} Success
		 */
		UpdateBillingGroup(requestBody: UpdateBillingGroupPostBody): Observable<UpdateBillingGroupOutput> {
			return this.http.post<UpdateBillingGroupOutput>(this.baseUri + 'update-billing-group', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update an existing custom line item in the current or previous billing period.
		 * Post update-custom-line-item
		 * @return {UpdateCustomLineItemOutput} Success
		 */
		UpdateCustomLineItem(requestBody: UpdateCustomLineItemPostBody): Observable<UpdateCustomLineItemOutput> {
			return this.http.post<UpdateCustomLineItemOutput>(this.baseUri + 'update-custom-line-item', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This updates an existing pricing plan.
		 * Put update-pricing-plan
		 * @return {UpdatePricingPlanOutput} Success
		 */
		UpdatePricingPlan(requestBody: UpdatePricingPlanPutBody): Observable<UpdatePricingPlanOutput> {
			return this.http.put<UpdatePricingPlanOutput>(this.baseUri + 'update-pricing-plan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing pricing rule.
		 * Put update-pricing-rule
		 * @return {UpdatePricingRuleOutput} Success
		 */
		UpdatePricingRule(requestBody: UpdatePricingRulePutBody): Observable<UpdatePricingRuleOutput> {
			return this.http.put<UpdatePricingRuleOutput>(this.baseUri + 'update-pricing-rule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AssociateAccountsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the billing group that associates the array of account IDs.
		 * Required
		 */
		Arn: string;

		/**
		 * The associating array of account IDs.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 30
		 */
		AccountIds: Array<string>;
	}
	export interface AssociateAccountsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the billing group that associates the array of account IDs.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAccountsPostBodyFormGroup() {
		return new FormGroup<AssociateAccountsPostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:billinggroup/)?[0-9]{12}')]),
		});

	}

	export interface AssociatePricingRulesPutBody {

		/**
		 * The <code>PricingPlanArn</code> that the <code>PricingRuleArns</code> are associated with.
		 * Required
		 */
		Arn: string;

		/**
		 * The <code>PricingRuleArns</code> that are associated with the Pricing Plan.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 30
		 */
		PricingRuleArns: Array<string>;
	}
	export interface AssociatePricingRulesPutBodyFormProperties {

		/**
		 * The <code>PricingPlanArn</code> that the <code>PricingRuleArns</code> are associated with.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateAssociatePricingRulesPutBodyFormGroup() {
		return new FormGroup<AssociatePricingRulesPutBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:pricingplan/)?[a-zA-Z0-9]{10}')]),
		});

	}

	export interface BatchAssociateResourcesToCustomLineItemPutBody {

		/**
		 * A percentage custom line item ARN to associate the resources to.
		 * Required
		 */
		TargetArn: string;

		/**
		 * A list containing the ARNs of the resources to be associated.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 30
		 */
		ResourceArns: Array<string>;

		/** The billing period range in which the custom line item request will be applied. */
		BillingPeriodRange?: BatchAssociateResourcesToCustomLineItemPutBodyBillingPeriodRange;
	}
	export interface BatchAssociateResourcesToCustomLineItemPutBodyFormProperties {

		/**
		 * A percentage custom line item ARN to associate the resources to.
		 * Required
		 */
		TargetArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateResourcesToCustomLineItemPutBodyFormGroup() {
		return new FormGroup<BatchAssociateResourcesToCustomLineItemPutBodyFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:customlineitem/)?[a-zA-Z0-9]{10}')]),
		});

	}

	export interface BatchAssociateResourcesToCustomLineItemPutBodyBillingPeriodRange {
		InclusiveStartBillingPeriod?: string;
		ExclusiveEndBillingPeriod?: string;
	}
	export interface BatchAssociateResourcesToCustomLineItemPutBodyBillingPeriodRangeFormProperties {
		InclusiveStartBillingPeriod: FormControl<string | null | undefined>,
		ExclusiveEndBillingPeriod: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateResourcesToCustomLineItemPutBodyBillingPeriodRangeFormGroup() {
		return new FormGroup<BatchAssociateResourcesToCustomLineItemPutBodyBillingPeriodRangeFormProperties>({
			InclusiveStartBillingPeriod: new FormControl<string | null | undefined>(undefined),
			ExclusiveEndBillingPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDisassociateResourcesFromCustomLineItemPutBody {

		/**
		 * A percentage custom line item ARN to disassociate the resources from.
		 * Required
		 */
		TargetArn: string;

		/**
		 * A list containing the ARNs of resources to be disassociated.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 30
		 */
		ResourceArns: Array<string>;

		/** The billing period range in which the custom line item request will be applied. */
		BillingPeriodRange?: BatchDisassociateResourcesFromCustomLineItemPutBodyBillingPeriodRange;
	}
	export interface BatchDisassociateResourcesFromCustomLineItemPutBodyFormProperties {

		/**
		 * A percentage custom line item ARN to disassociate the resources from.
		 * Required
		 */
		TargetArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateResourcesFromCustomLineItemPutBodyFormGroup() {
		return new FormGroup<BatchDisassociateResourcesFromCustomLineItemPutBodyFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:customlineitem/)?[a-zA-Z0-9]{10}')]),
		});

	}

	export interface BatchDisassociateResourcesFromCustomLineItemPutBodyBillingPeriodRange {
		InclusiveStartBillingPeriod?: string;
		ExclusiveEndBillingPeriod?: string;
	}
	export interface BatchDisassociateResourcesFromCustomLineItemPutBodyBillingPeriodRangeFormProperties {
		InclusiveStartBillingPeriod: FormControl<string | null | undefined>,
		ExclusiveEndBillingPeriod: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateResourcesFromCustomLineItemPutBodyBillingPeriodRangeFormGroup() {
		return new FormGroup<BatchDisassociateResourcesFromCustomLineItemPutBodyBillingPeriodRangeFormProperties>({
			InclusiveStartBillingPeriod: new FormControl<string | null | undefined>(undefined),
			ExclusiveEndBillingPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBillingGroupPostBody {

		/**
		 * The billing group name. The names must be unique.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Name: string;

		/**
		 * The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated billing family.
		 * Required
		 */
		AccountGrouping: CreateBillingGroupPostBodyAccountGrouping;

		/**
		 * The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
		 * Required
		 */
		ComputationPreference: CreateBillingGroupPostBodyComputationPreference;

		/** The account ID that serves as the main account in a billing group. */
		PrimaryAccountId?: string | null;

		/**
		 * The description of the billing group.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/** A map that contains tag keys and tag values that are attached to a billing group. This feature isn't available during the beta. */
		Tags?: {[id: string]: string };
	}
	export interface CreateBillingGroupPostBodyFormProperties {

		/**
		 * The billing group name. The names must be unique.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Name: FormControl<string | null | undefined>,

		/** The account ID that serves as the main account in a billing group. */
		PrimaryAccountId: FormControl<string | null | undefined>,

		/**
		 * The description of the billing group.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to a billing group. This feature isn't available during the beta. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateBillingGroupPostBodyFormGroup() {
		return new FormGroup<CreateBillingGroupPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_\+=\.\-@]+')]),
			PrimaryAccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]{12}')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateBillingGroupPostBodyAccountGrouping {
		LinkedAccountIds?: Array<string>;
		AutoAssociate?: boolean | null;
	}
	export interface CreateBillingGroupPostBodyAccountGroupingFormProperties {
		AutoAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateBillingGroupPostBodyAccountGroupingFormGroup() {
		return new FormGroup<CreateBillingGroupPostBodyAccountGroupingFormProperties>({
			AutoAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateBillingGroupPostBodyComputationPreference {
		PricingPlanArn?: string;
	}
	export interface CreateBillingGroupPostBodyComputationPreferenceFormProperties {
		PricingPlanArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBillingGroupPostBodyComputationPreferenceFormGroup() {
		return new FormGroup<CreateBillingGroupPostBodyComputationPreferenceFormProperties>({
			PricingPlanArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCustomLineItemPostBody {

		/**
		 * The name of the custom line item.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Name: string;

		/**
		 * The description of the custom line item. This is shown on the Bills page in association with the charge value.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		Description: string;

		/**
		 * The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to.
		 * Required
		 */
		BillingGroupArn: string;

		/** The billing period range in which the custom line item request will be applied. */
		BillingPeriodRange?: CreateCustomLineItemPostBodyBillingPeriodRange;

		/** A map that contains tag keys and tag values that are attached to a custom line item. */
		Tags?: {[id: string]: string };

		/**
		 * The charge details of a custom line item. It should contain only one of <code>Flat</code> or <code>Percentage</code>.
		 * Required
		 */
		ChargeDetails: CreateCustomLineItemPostBodyChargeDetails;
	}
	export interface CreateCustomLineItemPostBodyFormProperties {

		/**
		 * The name of the custom line item.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the custom line item. This is shown on the Bills page in association with the charge value.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to.
		 * Required
		 */
		BillingGroupArn: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to a custom line item. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateCustomLineItemPostBodyFormGroup() {
		return new FormGroup<CreateCustomLineItemPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_\+=\.\-@]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			BillingGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:billinggroup/)?[0-9]{12}')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateCustomLineItemPostBodyBillingPeriodRange {
		InclusiveStartBillingPeriod?: string;
		ExclusiveEndBillingPeriod?: string;
	}
	export interface CreateCustomLineItemPostBodyBillingPeriodRangeFormProperties {
		InclusiveStartBillingPeriod: FormControl<string | null | undefined>,
		ExclusiveEndBillingPeriod: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomLineItemPostBodyBillingPeriodRangeFormGroup() {
		return new FormGroup<CreateCustomLineItemPostBodyBillingPeriodRangeFormProperties>({
			InclusiveStartBillingPeriod: new FormControl<string | null | undefined>(undefined),
			ExclusiveEndBillingPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCustomLineItemPostBodyChargeDetails {
		Flat?: CustomLineItemFlatChargeDetails;
		Percentage?: CustomLineItemPercentageChargeDetails;
		Type?: CustomLineItemType;
	}
	export interface CreateCustomLineItemPostBodyChargeDetailsFormProperties {
		Type: FormControl<CustomLineItemType | null | undefined>,
	}
	export function CreateCreateCustomLineItemPostBodyChargeDetailsFormGroup() {
		return new FormGroup<CreateCustomLineItemPostBodyChargeDetailsFormProperties>({
			Type: new FormControl<CustomLineItemType | null | undefined>(undefined),
		});

	}

	export interface CreatePricingPlanPostBody {

		/**
		 * The name of the pricing plan. The names must be unique to each pricing plan.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Name: string;

		/**
		 * The description of the pricing plan.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/**
		 * A list of Amazon Resource Names (ARNs) that define the pricing plan parameters.
		 * Minimum items: 0
		 * Maximum items: 30
		 */
		PricingRuleArns?: Array<string>;

		/** A map that contains tag keys and tag values that are attached to a pricing plan. */
		Tags?: {[id: string]: string };
	}
	export interface CreatePricingPlanPostBodyFormProperties {

		/**
		 * The name of the pricing plan. The names must be unique to each pricing plan.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the pricing plan.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to a pricing plan. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreatePricingPlanPostBodyFormGroup() {
		return new FormGroup<CreatePricingPlanPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_\+=\.\-@]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreatePricingRulePostBody {

		/**
		 * The pricing rule name. The names must be unique to each pricing rule.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Name: string;

		/**
		 * The pricing rule description.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/**
		 * The scope of pricing rule that indicates if it's globally applicable, or it's service-specific.
		 * Required
		 */
		Scope: PricingRuleScope;

		/**
		 * The type of pricing rule.
		 * Required
		 */
		Type: PricingRuleType;

		/**
		 * A percentage modifier that's applied on the public pricing rates.
		 * Minimum: 0
		 */
		ModifierPercentage?: number | null;

		/**
		 * If the <code>Scope</code> attribute is set to <code>SERVICE</code> or <code>SKU</code>, the attribute indicates which service the <code>PricingRule</code> is applicable for.
		 * Min length: 1
		 * Max length: 128
		 */
		Service?: string | null;

		/** A map that contains tag keys and tag values that are attached to a pricing rule. */
		Tags?: {[id: string]: string };

		/** The seller of services provided by Amazon Web Services, their affiliates, or third-party providers selling services via Amazon Web Services Marketplace. */
		BillingEntity?: string | null;

		/** The set of tiering configurations for the pricing rule. */
		Tiering?: CreatePricingRulePostBodyTiering;

		/**
		 * <p> Usage type is the unit that each service uses to measure the usage of a specific type of resource.</p> <p>If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which usage type the <code>PricingRule</code> is modifying. For example, <code>USW2-BoxUsage:m2.2xlarge</code> describes an<code> M2 High Memory Double Extra Large</code> instance in the US West (Oregon) Region. <pre><code>&lt;/p&gt; </code></pre>
		 * Min length: 1
		 * Max length: 256
		 */
		UsageType?: string | null;

		/**
		 * <p> Operation is the specific Amazon Web Services action covered by this line item. This describes the specific usage of the line item.</p> <p> If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which operation the <code>PricingRule</code> is modifying. For example, a value of <code>RunInstances:0202</code> indicates the operation of running an Amazon EC2 instance.</p>
		 * Min length: 1
		 * Max length: 256
		 */
		Operation?: string | null;
	}
	export interface CreatePricingRulePostBodyFormProperties {

		/**
		 * The pricing rule name. The names must be unique to each pricing rule.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The pricing rule description.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The scope of pricing rule that indicates if it's globally applicable, or it's service-specific.
		 * Required
		 */
		Scope: FormControl<PricingRuleScope | null | undefined>,

		/**
		 * The type of pricing rule.
		 * Required
		 */
		Type: FormControl<PricingRuleType | null | undefined>,

		/**
		 * A percentage modifier that's applied on the public pricing rates.
		 * Minimum: 0
		 */
		ModifierPercentage: FormControl<number | null | undefined>,

		/**
		 * If the <code>Scope</code> attribute is set to <code>SERVICE</code> or <code>SKU</code>, the attribute indicates which service the <code>PricingRule</code> is applicable for.
		 * Min length: 1
		 * Max length: 128
		 */
		Service: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to a pricing rule. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The seller of services provided by Amazon Web Services, their affiliates, or third-party providers selling services via Amazon Web Services Marketplace. */
		BillingEntity: FormControl<string | null | undefined>,

		/**
		 * <p> Usage type is the unit that each service uses to measure the usage of a specific type of resource.</p> <p>If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which usage type the <code>PricingRule</code> is modifying. For example, <code>USW2-BoxUsage:m2.2xlarge</code> describes an<code> M2 High Memory Double Extra Large</code> instance in the US West (Oregon) Region. <pre><code>&lt;/p&gt; </code></pre>
		 * Min length: 1
		 * Max length: 256
		 */
		UsageType: FormControl<string | null | undefined>,

		/**
		 * <p> Operation is the specific Amazon Web Services action covered by this line item. This describes the specific usage of the line item.</p> <p> If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which operation the <code>PricingRule</code> is modifying. For example, a value of <code>RunInstances:0202</code> indicates the operation of running an Amazon EC2 instance.</p>
		 * Min length: 1
		 * Max length: 256
		 */
		Operation: FormControl<string | null | undefined>,
	}
	export function CreateCreatePricingRulePostBodyFormGroup() {
		return new FormGroup<CreatePricingRulePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_\+=\.\-@]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			Scope: new FormControl<PricingRuleScope | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<PricingRuleType | null | undefined>(undefined, [Validators.required]),
			ModifierPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Service: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9]+')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			BillingEntity: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-zA-Z0-9 ]+')]),
			UsageType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('\S+')]),
			Operation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('\S+')]),
		});

	}

	export interface CreatePricingRulePostBodyTiering {
		FreeTier?: CreateFreeTierConfig;
	}
	export interface CreatePricingRulePostBodyTieringFormProperties {
	}
	export function CreateCreatePricingRulePostBodyTieringFormGroup() {
		return new FormGroup<CreatePricingRulePostBodyTieringFormProperties>({
		});

	}

	export interface DeleteBillingGroupPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the billing group that you're deleting.
		 * Required
		 */
		Arn: string;
	}
	export interface DeleteBillingGroupPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the billing group that you're deleting.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBillingGroupPostBodyFormGroup() {
		return new FormGroup<DeleteBillingGroupPostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:billinggroup/)?[0-9]{12}')]),
		});

	}

	export interface DeleteCustomLineItemPostBody {

		/**
		 * The ARN of the custom line item to be deleted.
		 * Required
		 */
		Arn: string;

		/** The billing period range in which the custom line item request will be applied. */
		BillingPeriodRange?: DeleteCustomLineItemPostBodyBillingPeriodRange;
	}
	export interface DeleteCustomLineItemPostBodyFormProperties {

		/**
		 * The ARN of the custom line item to be deleted.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCustomLineItemPostBodyFormGroup() {
		return new FormGroup<DeleteCustomLineItemPostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:customlineitem/)?[a-zA-Z0-9]{10}')]),
		});

	}

	export interface DeleteCustomLineItemPostBodyBillingPeriodRange {
		InclusiveStartBillingPeriod?: string;
		ExclusiveEndBillingPeriod?: string;
	}
	export interface DeleteCustomLineItemPostBodyBillingPeriodRangeFormProperties {
		InclusiveStartBillingPeriod: FormControl<string | null | undefined>,
		ExclusiveEndBillingPeriod: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCustomLineItemPostBodyBillingPeriodRangeFormGroup() {
		return new FormGroup<DeleteCustomLineItemPostBodyBillingPeriodRangeFormProperties>({
			InclusiveStartBillingPeriod: new FormControl<string | null | undefined>(undefined),
			ExclusiveEndBillingPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePricingPlanPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the pricing plan that you're deleting.
		 * Required
		 */
		Arn: string;
	}
	export interface DeletePricingPlanPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the pricing plan that you're deleting.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePricingPlanPostBodyFormGroup() {
		return new FormGroup<DeletePricingPlanPostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:pricingplan/)?[a-zA-Z0-9]{10}')]),
		});

	}

	export interface DeletePricingRulePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the pricing rule that you are deleting.
		 * Required
		 */
		Arn: string;
	}
	export interface DeletePricingRulePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the pricing rule that you are deleting.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePricingRulePostBodyFormGroup() {
		return new FormGroup<DeletePricingRulePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:pricingrule/)?[a-zA-Z0-9]{10}')]),
		});

	}

	export interface DisassociateAccountsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the billing group that the array of account IDs will disassociate from.
		 * Required
		 */
		Arn: string;

		/**
		 * The array of account IDs to disassociate.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 30
		 */
		AccountIds: Array<string>;
	}
	export interface DisassociateAccountsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the billing group that the array of account IDs will disassociate from.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateAccountsPostBodyFormGroup() {
		return new FormGroup<DisassociateAccountsPostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:billinggroup/)?[0-9]{12}')]),
		});

	}

	export interface DisassociatePricingRulesPutBody {

		/**
		 * The pricing plan Amazon Resource Name (ARN) to disassociate pricing rules from.
		 * Required
		 */
		Arn: string;

		/**
		 * A list containing the Amazon Resource Name (ARN) of the pricing rules that will be disassociated.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 30
		 */
		PricingRuleArns: Array<string>;
	}
	export interface DisassociatePricingRulesPutBodyFormProperties {

		/**
		 * The pricing plan Amazon Resource Name (ARN) to disassociate pricing rules from.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociatePricingRulesPutBodyFormGroup() {
		return new FormGroup<DisassociatePricingRulesPutBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:pricingplan/)?[a-zA-Z0-9]{10}')]),
		});

	}

	export interface ListAccountAssociationsPostBody {

		/** The preferred billing period to get account associations. */
		BillingPeriod?: string | null;

		/** <p>The filter on the account ID of the linked account, or any of the following:</p> <p> <code>MONITORED</code>: linked accounts that are associated to billing groups.</p> <p> <code>UNMONITORED</code>: linked accounts that are not associated to billing groups.</p> <p> <code>Billing Group Arn</code>: linked accounts that are associated to the provided Billing Group Arn.</p> */
		Filters?: ListAccountAssociationsPostBodyFilters;

		/** The pagination token that's used on subsequent calls to retrieve accounts. */
		NextToken?: string | null;
	}
	export interface ListAccountAssociationsPostBodyFormProperties {

		/** The preferred billing period to get account associations. */
		BillingPeriod: FormControl<string | null | undefined>,

		/** The pagination token that's used on subsequent calls to retrieve accounts. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountAssociationsPostBodyFormGroup() {
		return new FormGroup<ListAccountAssociationsPostBodyFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\d{4}-(0?[1-9]|1[012])')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountAssociationsPostBodyFilters {
		Association?: string;
		AccountId?: string;
		AccountIds?: Array<string>;
	}
	export interface ListAccountAssociationsPostBodyFiltersFormProperties {
		Association: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListAccountAssociationsPostBodyFiltersFormGroup() {
		return new FormGroup<ListAccountAssociationsPostBodyFiltersFormProperties>({
			Association: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBillingGroupCostReportsPostBody {

		/** The preferred billing period for your report. */
		BillingPeriod?: string | null;

		/**
		 * The maximum number of reports to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** The pagination token that's used on subsequent calls to get reports. */
		NextToken?: string | null;

		/** The filter used to retrieve specific <code>BillingGroupCostReportElements</code>. */
		Filters?: ListBillingGroupCostReportsPostBodyFilters;
	}
	export interface ListBillingGroupCostReportsPostBodyFormProperties {

		/** The preferred billing period for your report. */
		BillingPeriod: FormControl<string | null | undefined>,

		/**
		 * The maximum number of reports to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The pagination token that's used on subsequent calls to get reports. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBillingGroupCostReportsPostBodyFormGroup() {
		return new FormGroup<ListBillingGroupCostReportsPostBodyFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\d{4}-(0?[1-9]|1[012])')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBillingGroupCostReportsPostBodyFilters {
		BillingGroupArns?: Array<string>;
	}
	export interface ListBillingGroupCostReportsPostBodyFiltersFormProperties {
	}
	export function CreateListBillingGroupCostReportsPostBodyFiltersFormGroup() {
		return new FormGroup<ListBillingGroupCostReportsPostBodyFiltersFormProperties>({
		});

	}

	export interface ListBillingGroupsPostBody {

		/** The preferred billing period to get billing groups. */
		BillingPeriod?: string | null;

		/**
		 * The maximum number of billing groups to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** The pagination token that's used on subsequent calls to get billing groups. */
		NextToken?: string | null;

		/** The filter that specifies the billing groups and pricing plans to retrieve billing group information. */
		Filters?: ListBillingGroupsPostBodyFilters;
	}
	export interface ListBillingGroupsPostBodyFormProperties {

		/** The preferred billing period to get billing groups. */
		BillingPeriod: FormControl<string | null | undefined>,

		/**
		 * The maximum number of billing groups to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The pagination token that's used on subsequent calls to get billing groups. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBillingGroupsPostBodyFormGroup() {
		return new FormGroup<ListBillingGroupsPostBodyFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\d{4}-(0?[1-9]|1[012])')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBillingGroupsPostBodyFilters {
		Arns?: Array<string>;
		PricingPlan?: string;
		Statuses?: Array<BillingGroupStatus>;
		AutoAssociate?: boolean | null;
	}
	export interface ListBillingGroupsPostBodyFiltersFormProperties {
		PricingPlan: FormControl<string | null | undefined>,
		AutoAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateListBillingGroupsPostBodyFiltersFormGroup() {
		return new FormGroup<ListBillingGroupsPostBodyFiltersFormProperties>({
			PricingPlan: new FormControl<string | null | undefined>(undefined),
			AutoAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListCustomLineItemVersionsPostBody {

		/**
		 * The Amazon Resource Name (ARN) for the custom line item.
		 * Required
		 */
		Arn: string;

		/**
		 * The maximum number of custom line item versions to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** The pagination token that's used on subsequent calls to retrieve custom line item versions. */
		NextToken?: string | null;

		/** A filter that specifies the billing period range where the custom line item versions reside. */
		Filters?: ListCustomLineItemVersionsPostBodyFilters;
	}
	export interface ListCustomLineItemVersionsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) for the custom line item.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The maximum number of custom line item versions to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The pagination token that's used on subsequent calls to retrieve custom line item versions. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomLineItemVersionsPostBodyFormGroup() {
		return new FormGroup<ListCustomLineItemVersionsPostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:customlineitem/)?[a-zA-Z0-9]{10}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomLineItemVersionsPostBodyFilters {
		BillingPeriodRange?: ListCustomLineItemVersionsBillingPeriodRangeFilter;
	}
	export interface ListCustomLineItemVersionsPostBodyFiltersFormProperties {
	}
	export function CreateListCustomLineItemVersionsPostBodyFiltersFormGroup() {
		return new FormGroup<ListCustomLineItemVersionsPostBodyFiltersFormProperties>({
		});

	}

	export interface ListCustomLineItemsPostBody {

		/** The preferred billing period to get custom line items (FFLIs). */
		BillingPeriod?: string | null;

		/**
		 * The maximum number of billing groups to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** The pagination token that's used on subsequent calls to get custom line items (FFLIs). */
		NextToken?: string | null;

		/** A filter that specifies the custom line items and billing groups to retrieve FFLI information. */
		Filters?: ListCustomLineItemsPostBodyFilters;
	}
	export interface ListCustomLineItemsPostBodyFormProperties {

		/** The preferred billing period to get custom line items (FFLIs). */
		BillingPeriod: FormControl<string | null | undefined>,

		/**
		 * The maximum number of billing groups to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The pagination token that's used on subsequent calls to get custom line items (FFLIs). */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomLineItemsPostBodyFormGroup() {
		return new FormGroup<ListCustomLineItemsPostBodyFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\d{4}-(0?[1-9]|1[012])')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomLineItemsPostBodyFilters {
		Names?: Array<string>;
		BillingGroups?: Array<string>;
		Arns?: Array<string>;
	}
	export interface ListCustomLineItemsPostBodyFiltersFormProperties {
	}
	export function CreateListCustomLineItemsPostBodyFiltersFormGroup() {
		return new FormGroup<ListCustomLineItemsPostBodyFiltersFormProperties>({
		});

	}

	export interface ListPricingPlansPostBody {

		/** The preferred billing period to get pricing plan. */
		BillingPeriod?: string | null;

		/** The filter that specifies the Amazon Resource Names (ARNs) of pricing plans, to retrieve pricing plan information. */
		Filters?: ListPricingPlansPostBodyFilters;

		/**
		 * The maximum number of pricing plans to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** The pagination token that's used on subsequent call to get pricing plans. */
		NextToken?: string | null;
	}
	export interface ListPricingPlansPostBodyFormProperties {

		/** The preferred billing period to get pricing plan. */
		BillingPeriod: FormControl<string | null | undefined>,

		/**
		 * The maximum number of pricing plans to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The pagination token that's used on subsequent call to get pricing plans. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPricingPlansPostBodyFormGroup() {
		return new FormGroup<ListPricingPlansPostBodyFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\d{4}-(0?[1-9]|1[012])')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPricingPlansPostBodyFilters {
		Arns?: Array<string>;
	}
	export interface ListPricingPlansPostBodyFiltersFormProperties {
	}
	export function CreateListPricingPlansPostBodyFiltersFormGroup() {
		return new FormGroup<ListPricingPlansPostBodyFiltersFormProperties>({
		});

	}

	export interface ListPricingPlansAssociatedWithPricingRulePostBody {

		/** The pricing plan billing period for which associations will be listed. */
		BillingPeriod?: string | null;

		/**
		 * The pricing rule Amazon Resource Name (ARN) for which associations will be listed.
		 * Required
		 */
		PricingRuleArn: string;

		/**
		 * The optional maximum number of pricing rule associations to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** The optional pagination token returned by a previous call. */
		NextToken?: string | null;
	}
	export interface ListPricingPlansAssociatedWithPricingRulePostBodyFormProperties {

		/** The pricing plan billing period for which associations will be listed. */
		BillingPeriod: FormControl<string | null | undefined>,

		/**
		 * The pricing rule Amazon Resource Name (ARN) for which associations will be listed.
		 * Required
		 */
		PricingRuleArn: FormControl<string | null | undefined>,

		/**
		 * The optional maximum number of pricing rule associations to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The optional pagination token returned by a previous call. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPricingPlansAssociatedWithPricingRulePostBodyFormGroup() {
		return new FormGroup<ListPricingPlansAssociatedWithPricingRulePostBodyFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\d{4}-(0?[1-9]|1[012])')]),
			PricingRuleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:pricingrule/)?[a-zA-Z0-9]{10}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPricingRulesPostBody {

		/** The preferred billing period to get the pricing plan. */
		BillingPeriod?: string | null;

		/** The filter that specifies criteria that the pricing rules returned by the <code>ListPricingRules</code> API will adhere to. */
		Filters?: ListPricingRulesPostBodyFilters;

		/**
		 * The maximum number of pricing rules to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** The pagination token that's used on subsequent call to get pricing rules. */
		NextToken?: string | null;
	}
	export interface ListPricingRulesPostBodyFormProperties {

		/** The preferred billing period to get the pricing plan. */
		BillingPeriod: FormControl<string | null | undefined>,

		/**
		 * The maximum number of pricing rules to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The pagination token that's used on subsequent call to get pricing rules. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPricingRulesPostBodyFormGroup() {
		return new FormGroup<ListPricingRulesPostBodyFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\d{4}-(0?[1-9]|1[012])')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPricingRulesPostBodyFilters {
		Arns?: Array<string>;
	}
	export interface ListPricingRulesPostBodyFiltersFormProperties {
	}
	export function CreateListPricingRulesPostBodyFiltersFormGroup() {
		return new FormGroup<ListPricingRulesPostBodyFiltersFormProperties>({
		});

	}

	export interface ListPricingRulesAssociatedToPricingPlanPostBody {

		/** The billing period for which the pricing rule associations are to be listed. */
		BillingPeriod?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the pricing plan for which associations are to be listed.
		 * Required
		 */
		PricingPlanArn: string;

		/**
		 * The optional maximum number of pricing rule associations to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** The optional pagination token returned by a previous call. */
		NextToken?: string | null;
	}
	export interface ListPricingRulesAssociatedToPricingPlanPostBodyFormProperties {

		/** The billing period for which the pricing rule associations are to be listed. */
		BillingPeriod: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the pricing plan for which associations are to be listed.
		 * Required
		 */
		PricingPlanArn: FormControl<string | null | undefined>,

		/**
		 * The optional maximum number of pricing rule associations to retrieve.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The optional pagination token returned by a previous call. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPricingRulesAssociatedToPricingPlanPostBodyFormGroup() {
		return new FormGroup<ListPricingRulesAssociatedToPricingPlanPostBodyFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\d{4}-(0?[1-9]|1[012])')]),
			PricingPlanArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:pricingplan/)?[a-zA-Z0-9]{10}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourcesAssociatedToCustomLineItemPostBody {

		/** The billing period for which the resource associations will be listed. */
		BillingPeriod?: string | null;

		/**
		 * The ARN of the custom line item for which the resource associations will be listed.
		 * Required
		 */
		Arn: string;

		/**
		 * (Optional) The maximum number of resource associations to be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** (Optional) The pagination token that's returned by a previous request. */
		NextToken?: string | null;

		/** A filter that specifies the type of resource associations that should be retrieved for a custom line item. */
		Filters?: ListResourcesAssociatedToCustomLineItemPostBodyFilters;
	}
	export interface ListResourcesAssociatedToCustomLineItemPostBodyFormProperties {

		/** The billing period for which the resource associations will be listed. */
		BillingPeriod: FormControl<string | null | undefined>,

		/**
		 * The ARN of the custom line item for which the resource associations will be listed.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * (Optional) The maximum number of resource associations to be retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** (Optional) The pagination token that's returned by a previous request. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesAssociatedToCustomLineItemPostBodyFormGroup() {
		return new FormGroup<ListResourcesAssociatedToCustomLineItemPostBodyFormProperties>({
			BillingPeriod: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\d{4}-(0?[1-9]|1[012])')]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:customlineitem/)?[a-zA-Z0-9]{10}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourcesAssociatedToCustomLineItemPostBodyFilters {
		Relationship?: CustomLineItemRelationship;
	}
	export interface ListResourcesAssociatedToCustomLineItemPostBodyFiltersFormProperties {
		Relationship: FormControl<CustomLineItemRelationship | null | undefined>,
	}
	export function CreateListResourcesAssociatedToCustomLineItemPostBodyFiltersFormGroup() {
		return new FormGroup<ListResourcesAssociatedToCustomLineItemPostBodyFiltersFormProperties>({
			Relationship: new FormControl<CustomLineItemRelationship | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource as a list of key-value pairs.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to add to the resource as a list of key-value pairs.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateBillingGroupPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the billing group being updated.
		 * Required
		 */
		Arn: string;

		/**
		 * The name of the billing group. The names must be unique to each billing group.
		 * Min length: 1
		 * Max length: 128
		 */
		Name?: string | null;

		/** The status of the billing group. Only one of the valid values can be used. */
		Status?: BillingGroupStatus | null;

		/** The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group. */
		ComputationPreference?: UpdateBillingGroupPostBodyComputationPreference;

		/**
		 * A description of the billing group.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/** Specifies if the billing group has the following features enabled. */
		AccountGrouping?: UpdateBillingGroupPostBodyAccountGrouping;
	}
	export interface UpdateBillingGroupPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the billing group being updated.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The name of the billing group. The names must be unique to each billing group.
		 * Min length: 1
		 * Max length: 128
		 */
		Name: FormControl<string | null | undefined>,

		/** The status of the billing group. Only one of the valid values can be used. */
		Status: FormControl<BillingGroupStatus | null | undefined>,

		/**
		 * A description of the billing group.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBillingGroupPostBodyFormGroup() {
		return new FormGroup<UpdateBillingGroupPostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:billinggroup/)?[0-9]{12}')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_\+=\.\-@]+')]),
			Status: new FormControl<BillingGroupStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
		});

	}

	export interface UpdateBillingGroupPostBodyComputationPreference {
		PricingPlanArn?: string;
	}
	export interface UpdateBillingGroupPostBodyComputationPreferenceFormProperties {
		PricingPlanArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBillingGroupPostBodyComputationPreferenceFormGroup() {
		return new FormGroup<UpdateBillingGroupPostBodyComputationPreferenceFormProperties>({
			PricingPlanArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBillingGroupPostBodyAccountGrouping {
		AutoAssociate?: boolean | null;
	}
	export interface UpdateBillingGroupPostBodyAccountGroupingFormProperties {
		AutoAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateBillingGroupPostBodyAccountGroupingFormGroup() {
		return new FormGroup<UpdateBillingGroupPostBodyAccountGroupingFormProperties>({
			AutoAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateCustomLineItemPostBody {

		/**
		 * The ARN of the custom line item to be updated.
		 * Required
		 */
		Arn: string;

		/**
		 * The new name for the custom line item.
		 * Min length: 1
		 * Max length: 128
		 */
		Name?: string | null;

		/**
		 * The new line item description of the custom line item.
		 * Min length: 1
		 * Max length: 255
		 */
		Description?: string | null;

		/** A representation of the new charge details of a custom line item. This should contain only one of <code>Flat</code> or <code>Percentage</code>. */
		ChargeDetails?: UpdateCustomLineItemPostBodyChargeDetails;

		/** The billing period range in which the custom line item request will be applied. */
		BillingPeriodRange?: UpdateCustomLineItemPostBodyBillingPeriodRange;
	}
	export interface UpdateCustomLineItemPostBodyFormProperties {

		/**
		 * The ARN of the custom line item to be updated.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The new name for the custom line item.
		 * Min length: 1
		 * Max length: 128
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The new line item description of the custom line item.
		 * Min length: 1
		 * Max length: 255
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomLineItemPostBodyFormGroup() {
		return new FormGroup<UpdateCustomLineItemPostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:customlineitem/)?[a-zA-Z0-9]{10}')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_\+=\.\-@]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface UpdateCustomLineItemPostBodyChargeDetails {
		Flat?: UpdateCustomLineItemFlatChargeDetails;
		Percentage?: UpdateCustomLineItemPercentageChargeDetails;
	}
	export interface UpdateCustomLineItemPostBodyChargeDetailsFormProperties {
	}
	export function CreateUpdateCustomLineItemPostBodyChargeDetailsFormGroup() {
		return new FormGroup<UpdateCustomLineItemPostBodyChargeDetailsFormProperties>({
		});

	}

	export interface UpdateCustomLineItemPostBodyBillingPeriodRange {
		InclusiveStartBillingPeriod?: string;
		ExclusiveEndBillingPeriod?: string;
	}
	export interface UpdateCustomLineItemPostBodyBillingPeriodRangeFormProperties {
		InclusiveStartBillingPeriod: FormControl<string | null | undefined>,
		ExclusiveEndBillingPeriod: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomLineItemPostBodyBillingPeriodRangeFormGroup() {
		return new FormGroup<UpdateCustomLineItemPostBodyBillingPeriodRangeFormProperties>({
			InclusiveStartBillingPeriod: new FormControl<string | null | undefined>(undefined),
			ExclusiveEndBillingPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePricingPlanPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the pricing plan that you're updating.
		 * Required
		 */
		Arn: string;

		/**
		 * The name of the pricing plan. The name must be unique to each pricing plan.
		 * Min length: 1
		 * Max length: 128
		 */
		Name?: string | null;

		/**
		 * The description of the pricing plan.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;
	}
	export interface UpdatePricingPlanPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the pricing plan that you're updating.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The name of the pricing plan. The name must be unique to each pricing plan.
		 * Min length: 1
		 * Max length: 128
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the pricing plan.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePricingPlanPutBodyFormGroup() {
		return new FormGroup<UpdatePricingPlanPutBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:pricingplan/)?[a-zA-Z0-9]{10}')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_\+=\.\-@]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
		});

	}

	export interface UpdatePricingRulePutBody {

		/**
		 * The Amazon Resource Name (ARN) of the pricing rule to update.
		 * Required
		 */
		Arn: string;

		/**
		 * The new name of the pricing rule. The name must be unique to each pricing rule.
		 * Min length: 1
		 * Max length: 128
		 */
		Name?: string | null;

		/**
		 * The new description for the pricing rule.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/** The new pricing rule type. */
		Type?: PricingRuleType | null;

		/**
		 * The new modifier to show pricing plan rates as a percentage.
		 * Minimum: 0
		 */
		ModifierPercentage?: number | null;

		/** The set of tiering configurations for the pricing rule. */
		Tiering?: UpdatePricingRulePutBodyTiering;
	}
	export interface UpdatePricingRulePutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the pricing rule to update.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The new name of the pricing rule. The name must be unique to each pricing rule.
		 * Min length: 1
		 * Max length: 128
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The new description for the pricing rule.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/** The new pricing rule type. */
		Type: FormControl<PricingRuleType | null | undefined>,

		/**
		 * The new modifier to show pricing plan rates as a percentage.
		 * Minimum: 0
		 */
		ModifierPercentage: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePricingRulePutBodyFormGroup() {
		return new FormGroup<UpdatePricingRulePutBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(arn:aws(-cn)?:billingconductor::[0-9]{12}:pricingrule/)?[a-zA-Z0-9]{10}')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_\+=\.\-@]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			Type: new FormControl<PricingRuleType | null | undefined>(undefined),
			ModifierPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface UpdatePricingRulePutBodyTiering {
		FreeTier?: UpdateFreeTierConfig;
	}
	export interface UpdatePricingRulePutBodyTieringFormProperties {
	}
	export function CreateUpdatePricingRulePutBodyTieringFormGroup() {
		return new FormGroup<UpdatePricingRulePutBodyTieringFormProperties>({
		});

	}

}

