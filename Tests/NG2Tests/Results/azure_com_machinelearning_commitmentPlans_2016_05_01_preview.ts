import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Details of a commitment plan SKU. */
	export interface CatalogSku {

		/** The capability information for the specified SKU. */
		capabilities?: Array<SkuCapability>;

		/** Describes scaling information of a SKU. */
		capacity?: SkuCapacity;

		/** The cost information for the specified SKU. */
		costs?: Array<SkuCost>;

		/** Regions where the SKU is available. */
		locations?: Array<string>;

		/** SKU name */
		name?: string | null;

		/** Resource type name */
		resourceType?: string | null;

		/** Restrictions which would prevent a SKU from being used. This is empty if there are no restrictions. */
		restrictions?: Array<SkuRestrictions>;

		/** SKU tier */
		tier?: string | null;
	}

	/** Details of a commitment plan SKU. */
	export interface CatalogSkuFormProperties {

		/** SKU name */
		name: FormControl<string | null | undefined>,

		/** Resource type name */
		resourceType: FormControl<string | null | undefined>,

		/** SKU tier */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateCatalogSkuFormGroup() {
		return new FormGroup<CatalogSkuFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes The SKU capabilities object. */
	export interface SkuCapability {

		/** The capability name. */
		name?: string | null;

		/** The capability value. */
		value?: string | null;
	}

	/** Describes The SKU capabilities object. */
	export interface SkuCapabilityFormProperties {

		/** The capability name. */
		name: FormControl<string | null | undefined>,

		/** The capability value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSkuCapabilityFormGroup() {
		return new FormGroup<SkuCapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes scaling information of a SKU. */
	export interface SkuCapacity {

		/** The default capacity. */
		default?: number | null;

		/** The maximum capacity that can be set. */
		maximum?: number | null;

		/** The minimum capacity. */
		minimum?: number | null;

		/** The scale type applicable to the sku. */
		scaleType?: SkuCapacityScaleType | null;
	}

	/** Describes scaling information of a SKU. */
	export interface SkuCapacityFormProperties {

		/** The default capacity. */
		default: FormControl<number | null | undefined>,

		/** The maximum capacity that can be set. */
		maximum: FormControl<number | null | undefined>,

		/** The minimum capacity. */
		minimum: FormControl<number | null | undefined>,

		/** The scale type applicable to the sku. */
		scaleType: FormControl<SkuCapacityScaleType | null | undefined>,
	}
	export function CreateSkuCapacityFormGroup() {
		return new FormGroup<SkuCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<SkuCapacityScaleType | null | undefined>(undefined),
		});

	}

	export enum SkuCapacityScaleType { Automatic = 'Automatic', Manual = 'Manual', None = 'None' }


	/** Describes metadata for SKU cost info. */
	export interface SkuCost {

		/** The overall duration represented by the quantity. */
		extendedUnit?: string | null;

		/** The meter used for this part of a SKU's cost. */
		meterID?: string | null;

		/** The multiplier for the meter ID. */
		quantity?: number | null;
	}

	/** Describes metadata for SKU cost info. */
	export interface SkuCostFormProperties {

		/** The overall duration represented by the quantity. */
		extendedUnit: FormControl<string | null | undefined>,

		/** The meter used for this part of a SKU's cost. */
		meterID: FormControl<string | null | undefined>,

		/** The multiplier for the meter ID. */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateSkuCostFormGroup() {
		return new FormGroup<SkuCostFormProperties>({
			extendedUnit: new FormControl<string | null | undefined>(undefined),
			meterID: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes restrictions which would prevent a SKU from being used. */
	export interface SkuRestrictions {

		/** The reason for restriction. */
		reasonCode?: SkuRestrictionsReasonCode | null;

		/** The type of restrictions. */
		type?: SkuRestrictionsType | null;

		/** The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted. */
		values?: Array<string>;
	}

	/** Describes restrictions which would prevent a SKU from being used. */
	export interface SkuRestrictionsFormProperties {

		/** The reason for restriction. */
		reasonCode: FormControl<SkuRestrictionsReasonCode | null | undefined>,

		/** The type of restrictions. */
		type: FormControl<SkuRestrictionsType | null | undefined>,
	}
	export function CreateSkuRestrictionsFormGroup() {
		return new FormGroup<SkuRestrictionsFormProperties>({
			reasonCode: new FormControl<SkuRestrictionsReasonCode | null | undefined>(undefined),
			type: new FormControl<SkuRestrictionsType | null | undefined>(undefined),
		});

	}

	export enum SkuRestrictionsReasonCode { QuotaId = 'QuotaId', NotAvailableForSubscription = 'NotAvailableForSubscription' }

	export enum SkuRestrictionsType { location = 'location', zone = 'zone' }


	/** Represents the association between a commitment plan and some other resource, such as a Machine Learning web service. */
	export interface CommitmentAssociation {

		/** An entity tag used to enforce optimistic concurrency. */
		etag?: string | null;

		/** Properties of an Azure ML commitment association. */
		properties?: CommitmentAssociationProperties;
	}

	/** Represents the association between a commitment plan and some other resource, such as a Machine Learning web service. */
	export interface CommitmentAssociationFormProperties {

		/** An entity tag used to enforce optimistic concurrency. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateCommitmentAssociationFormGroup() {
		return new FormGroup<CommitmentAssociationFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an Azure ML commitment association. */
	export interface CommitmentAssociationProperties {

		/** The ID of the resource this association points to, such as the ARM ID of an Azure ML web service. */
		associatedResourceId?: string | null;

		/** The ARM ID of the parent Azure ML commitment plan. */
		commitmentPlanId?: string | null;

		/** The date at which this commitment association was created, in ISO 8601 format. */
		creationDate?: Date | null;
	}

	/** Properties of an Azure ML commitment association. */
	export interface CommitmentAssociationPropertiesFormProperties {

		/** The ID of the resource this association points to, such as the ARM ID of an Azure ML web service. */
		associatedResourceId: FormControl<string | null | undefined>,

		/** The ARM ID of the parent Azure ML commitment plan. */
		commitmentPlanId: FormControl<string | null | undefined>,

		/** The date at which this commitment association was created, in ISO 8601 format. */
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCommitmentAssociationPropertiesFormGroup() {
		return new FormGroup<CommitmentAssociationPropertiesFormProperties>({
			associatedResourceId: new FormControl<string | null | undefined>(undefined),
			commitmentPlanId: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A page of commitment association resources. */
	export interface CommitmentAssociationListResult {

		/** A URI to retrieve the next page of results. */
		nextLink?: string | null;

		/** The set of results for this page. */
		value?: Array<CommitmentAssociation>;
	}

	/** A page of commitment association resources. */
	export interface CommitmentAssociationListResultFormProperties {

		/** A URI to retrieve the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCommitmentAssociationListResultFormGroup() {
		return new FormGroup<CommitmentAssociationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure ML commitment plan resource. */
	export interface CommitmentPlan {

		/** An entity tag used to enforce optimistic concurrency. */
		etag?: string | null;

		/** Properties of an Azure ML commitment plan. */
		properties?: CommitmentPlanProperties;

		/** The SKU of a resource. */
		sku?: ResourceSku;
	}

	/** An Azure ML commitment plan resource. */
	export interface CommitmentPlanFormProperties {

		/** An entity tag used to enforce optimistic concurrency. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateCommitmentPlanFormGroup() {
		return new FormGroup<CommitmentPlanFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an Azure ML commitment plan. */
	export interface CommitmentPlanProperties {

		/** Indicates whether usage beyond the commitment plan's included quantities will be charged. */
		chargeForOverage?: boolean | null;

		/** Indicates whether the commitment plan will incur a charge. */
		chargeForPlan?: boolean | null;

		/** The date at which this commitment plan was created, in ISO 8601 format. */
		creationDate?: Date | null;

		/** The included resource quantities this plan gives you. */
		includedQuantities?: {[id: string]: PlanQuantity };

		/** The maximum number of commitment associations that can be children of this commitment plan. */
		maxAssociationLimit?: number | null;

		/** The maximum scale-out capacity for this commitment plan. */
		maxCapacityLimit?: number | null;

		/** The minimum scale-out capacity for this commitment plan. */
		minCapacityLimit?: number | null;

		/** The Azure meter which will be used to charge for this commitment plan. */
		planMeter?: string | null;

		/** The frequency at which this commitment plan's included quantities are refilled. */
		refillFrequencyInDays?: number | null;

		/** Indicates whether this commitment plan will be moved into a suspended state if usage goes beyond the commitment plan's included quantities. */
		suspendPlanOnOverage?: boolean | null;
	}

	/** Properties of an Azure ML commitment plan. */
	export interface CommitmentPlanPropertiesFormProperties {

		/** Indicates whether usage beyond the commitment plan's included quantities will be charged. */
		chargeForOverage: FormControl<boolean | null | undefined>,

		/** Indicates whether the commitment plan will incur a charge. */
		chargeForPlan: FormControl<boolean | null | undefined>,

		/** The date at which this commitment plan was created, in ISO 8601 format. */
		creationDate: FormControl<Date | null | undefined>,

		/** The included resource quantities this plan gives you. */
		includedQuantities: FormControl<{[id: string]: PlanQuantity } | null | undefined>,

		/** The maximum number of commitment associations that can be children of this commitment plan. */
		maxAssociationLimit: FormControl<number | null | undefined>,

		/** The maximum scale-out capacity for this commitment plan. */
		maxCapacityLimit: FormControl<number | null | undefined>,

		/** The minimum scale-out capacity for this commitment plan. */
		minCapacityLimit: FormControl<number | null | undefined>,

		/** The Azure meter which will be used to charge for this commitment plan. */
		planMeter: FormControl<string | null | undefined>,

		/** The frequency at which this commitment plan's included quantities are refilled. */
		refillFrequencyInDays: FormControl<number | null | undefined>,

		/** Indicates whether this commitment plan will be moved into a suspended state if usage goes beyond the commitment plan's included quantities. */
		suspendPlanOnOverage: FormControl<boolean | null | undefined>,
	}
	export function CreateCommitmentPlanPropertiesFormGroup() {
		return new FormGroup<CommitmentPlanPropertiesFormProperties>({
			chargeForOverage: new FormControl<boolean | null | undefined>(undefined),
			chargeForPlan: new FormControl<boolean | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			includedQuantities: new FormControl<{[id: string]: PlanQuantity } | null | undefined>(undefined),
			maxAssociationLimit: new FormControl<number | null | undefined>(undefined),
			maxCapacityLimit: new FormControl<number | null | undefined>(undefined),
			minCapacityLimit: new FormControl<number | null | undefined>(undefined),
			planMeter: new FormControl<string | null | undefined>(undefined),
			refillFrequencyInDays: new FormControl<number | null | undefined>(undefined),
			suspendPlanOnOverage: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the quantity a commitment plan provides of a metered resource. */
	export interface PlanQuantity {

		/** The quantity added to the commitment plan at an interval specified by its allowance frequency. */
		allowance?: number | null;

		/** The quantity available to the plan the last time usage was calculated. */
		amount?: number | null;

		/** The Azure meter for usage against included quantities. */
		includedQuantityMeter?: string | null;

		/** The Azure meter for usage which exceeds included quantities. */
		overageMeter?: string | null;
	}

	/** Represents the quantity a commitment plan provides of a metered resource. */
	export interface PlanQuantityFormProperties {

		/** The quantity added to the commitment plan at an interval specified by its allowance frequency. */
		allowance: FormControl<number | null | undefined>,

		/** The quantity available to the plan the last time usage was calculated. */
		amount: FormControl<number | null | undefined>,

		/** The Azure meter for usage against included quantities. */
		includedQuantityMeter: FormControl<string | null | undefined>,

		/** The Azure meter for usage which exceeds included quantities. */
		overageMeter: FormControl<string | null | undefined>,
	}
	export function CreatePlanQuantityFormGroup() {
		return new FormGroup<PlanQuantityFormProperties>({
			allowance: new FormControl<number | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			includedQuantityMeter: new FormControl<string | null | undefined>(undefined),
			overageMeter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SKU of a resource. */
	export interface ResourceSku {

		/** The scale-out capacity of the resource. 1 is 1x, 2 is 2x, etc. This impacts the quantities and cost of any commitment plan resource. */
		capacity?: number | null;

		/** The SKU name. Along with tier, uniquely identifies the SKU. */
		name?: string | null;

		/** The SKU tier. Along with name, uniquely identifies the SKU. */
		tier?: string | null;
	}

	/** The SKU of a resource. */
	export interface ResourceSkuFormProperties {

		/** The scale-out capacity of the resource. 1 is 1x, 2 is 2x, etc. This impacts the quantities and cost of any commitment plan resource. */
		capacity: FormControl<number | null | undefined>,

		/** The SKU name. Along with tier, uniquely identifies the SKU. */
		name: FormControl<string | null | undefined>,

		/** The SKU tier. Along with name, uniquely identifies the SKU. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateResourceSkuFormGroup() {
		return new FormGroup<ResourceSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A page of commitment plan resources. */
	export interface CommitmentPlanListResult {

		/** A URI to retrieve the next page of results. */
		nextLink?: string | null;

		/** The set of results for this page. */
		value?: Array<CommitmentPlan>;
	}

	/** A page of commitment plan resources. */
	export interface CommitmentPlanListResultFormProperties {

		/** A URI to retrieve the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCommitmentPlanListResultFormGroup() {
		return new FormGroup<CommitmentPlanListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of a commitment plan which may be updated via PATCH. */
	export interface CommitmentPlanPatchPayload {

		/** The SKU of a resource. */
		sku?: ResourceSku;

		/** Resource tags */
		tags?: Tags;
	}

	/** The properties of a commitment plan which may be updated via PATCH. */
	export interface CommitmentPlanPatchPayloadFormProperties {
	}
	export function CreateCommitmentPlanPatchPayloadFormGroup() {
		return new FormGroup<CommitmentPlanPatchPayloadFormProperties>({
		});

	}


	/** Resource tags */
	export interface Tags {
	}

	/** Resource tags */
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}


	/** Specifies the destination Azure ML commitment plan for a move operation. */
	export interface MoveCommitmentAssociationRequest {

		/** The ARM ID of the commitment plan to re-parent the commitment association to. */
		destinationPlanId?: string | null;
	}

	/** Specifies the destination Azure ML commitment plan for a move operation. */
	export interface MoveCommitmentAssociationRequestFormProperties {

		/** The ARM ID of the commitment plan to re-parent the commitment association to. */
		destinationPlanId: FormControl<string | null | undefined>,
	}
	export function CreateMoveCommitmentAssociationRequestFormGroup() {
		return new FormGroup<MoveCommitmentAssociationRequestFormProperties>({
			destinationPlanId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The API operation info. */
	export interface OperationDisplayInfo {

		/** The description of the operation. */
		description?: string | null;

		/** The action that users can perform, based on their permission level. */
		operation?: string | null;

		/** The service provider. */
		provider?: string | null;

		/** The resource on which the operation is performed. */
		resource?: string | null;
	}

	/** The API operation info. */
	export interface OperationDisplayInfoFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The action that users can perform, based on their permission level. */
		operation: FormControl<string | null | undefined>,

		/** The service provider. */
		provider: FormControl<string | null | undefined>,

		/** The resource on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayInfoFormGroup() {
		return new FormGroup<OperationDisplayInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An API operation. */
	export interface OperationEntity {

		/** The API operation info. */
		display?: OperationDisplayInfo;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;
	}

	/** An API operation. */
	export interface OperationEntityFormProperties {

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityFormGroup() {
		return new FormGroup<OperationEntityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of REST API operations. */
	export interface OperationEntityListResult {

		/** The list of operations. */
		value?: Array<OperationEntity>;
	}

	/** The list of REST API operations. */
	export interface OperationEntityListResultFormProperties {
	}
	export function CreateOperationEntityListResultFormGroup() {
		return new FormGroup<OperationEntityListResultFormProperties>({
		});

	}


	/** Represents historical information about usage of the Azure resources associated with a commitment plan. */
	export interface PlanUsageHistory {

		/** Overage incurred as a result of deleting a commitment plan. */
		planDeletionOverage?: {[id: string]: number };

		/** Overage incurred as a result of migrating a commitment plan from one SKU to another. */
		planMigrationOverage?: {[id: string]: number };

		/** Included quantities remaining after usage against the commitment plan's associated resources was calculated. */
		planQuantitiesAfterUsage?: {[id: string]: number };

		/** Included quantities remaining before usage against the commitment plan's associated resources was calculated. */
		planQuantitiesBeforeUsage?: {[id: string]: number };

		/** Usage against the commitment plan's associated resources which was not covered by included quantities and is therefore overage. */
		planUsageOverage?: {[id: string]: number };

		/** Usage against the commitment plan's associated resources. */
		usage?: {[id: string]: number };

		/** The date of usage, in ISO 8601 format. */
		usageDate?: Date | null;
	}

	/** Represents historical information about usage of the Azure resources associated with a commitment plan. */
	export interface PlanUsageHistoryFormProperties {

		/** Overage incurred as a result of deleting a commitment plan. */
		planDeletionOverage: FormControl<{[id: string]: number } | null | undefined>,

		/** Overage incurred as a result of migrating a commitment plan from one SKU to another. */
		planMigrationOverage: FormControl<{[id: string]: number } | null | undefined>,

		/** Included quantities remaining after usage against the commitment plan's associated resources was calculated. */
		planQuantitiesAfterUsage: FormControl<{[id: string]: number } | null | undefined>,

		/** Included quantities remaining before usage against the commitment plan's associated resources was calculated. */
		planQuantitiesBeforeUsage: FormControl<{[id: string]: number } | null | undefined>,

		/** Usage against the commitment plan's associated resources which was not covered by included quantities and is therefore overage. */
		planUsageOverage: FormControl<{[id: string]: number } | null | undefined>,

		/** Usage against the commitment plan's associated resources. */
		usage: FormControl<{[id: string]: number } | null | undefined>,

		/** The date of usage, in ISO 8601 format. */
		usageDate: FormControl<Date | null | undefined>,
	}
	export function CreatePlanUsageHistoryFormGroup() {
		return new FormGroup<PlanUsageHistoryFormProperties>({
			planDeletionOverage: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			planMigrationOverage: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			planQuantitiesAfterUsage: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			planQuantitiesBeforeUsage: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			planUsageOverage: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			usage: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			usageDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A page of usage history. */
	export interface PlanUsageHistoryListResult {

		/** A URI to retrieve the next page of results. */
		nextLink?: string | null;

		/** The set of results for this page. */
		value?: Array<PlanUsageHistory>;
	}

	/** A page of usage history. */
	export interface PlanUsageHistoryListResultFormProperties {

		/** A URI to retrieve the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePlanUsageHistoryListResultFormGroup() {
		return new FormGroup<PlanUsageHistoryListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common properties of an ARM resource. */
	export interface Resource {

		/** Resource Id. */
		id?: string | null;

		/**
		 * Resource location.
		 * Required
		 */
		location: string;

		/** Resource name. */
		name?: string | null;

		/** Resource tags */
		tags?: Tags;

		/** Resource type. */
		type?: string | null;
	}

	/** Common properties of an ARM resource. */
	export interface ResourceFormProperties {

		/** Resource Id. */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of commitment plan SKUs. */
	export interface SkuListResult {
		value?: Array<CatalogSku>;
	}

	/** The list of commitment plan SKUs. */
	export interface SkuListResultFormProperties {
	}
	export function CreateSkuListResultFormGroup() {
		return new FormGroup<SkuListResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Azure Machine Learning Studio Commitment Plan RP REST API operations.
		 * Get providers/Microsoft.MachineLearning/operations
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @return {OperationEntityListResult} OK.
		 */
		Operations_List(api_version: string): Observable<OperationEntityListResult> {
			return this.http.get<OperationEntityListResult>(this.baseUri + 'providers/Microsoft.MachineLearning/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve all Azure ML commitment plans in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.MachineLearning/commitmentPlans
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} skipToken Continuation token for pagination.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @return {CommitmentPlanListResult} OK
		 */
		CommitmentPlans_List(subscriptionId: string, skipToken: string | null | undefined, api_version: string): Observable<CommitmentPlanListResult> {
			return this.http.get<CommitmentPlanListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.MachineLearning/commitmentPlans&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the available commitment plan SKUs.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.MachineLearning/skus
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @return {SkuListResult} OK
		 */
		Skus_List(subscriptionId: string, api_version: string): Observable<SkuListResult> {
			return this.http.get<SkuListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.MachineLearning/skus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve all Azure ML commitment plans in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} skipToken Continuation token for pagination.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @return {CommitmentPlanListResult} OK
		 */
		CommitmentPlans_ListInResourceGroup(subscriptionId: string, resourceGroupName: string, skipToken: string | null | undefined, api_version: string): Observable<CommitmentPlanListResult> {
			return this.http.get<CommitmentPlanListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/commitmentPlans&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve an Azure ML commitment plan by its subscription, resource group and name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}
		 * @return {CommitmentPlan} OK
		 */
		CommitmentPlans_Get(): Observable<CommitmentPlan> {
			return this.http.get<CommitmentPlan>(this.baseUri + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}', {});
		}

		/**
		 * Create a new Azure ML commitment plan resource or updates an existing one.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}
		 * @param {CommitmentPlan} requestBody The payload to create or update the Azure ML commitment plan.
		 * @return {CommitmentPlan} OK
		 */
		CommitmentPlans_CreateOrUpdate(requestBody: CommitmentPlan): Observable<CommitmentPlan> {
			return this.http.put<CommitmentPlan>(this.baseUri + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove an existing Azure ML commitment plan.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}
		 * @return {void} OK
		 */
		CommitmentPlans_Remove(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch an existing Azure ML commitment plan resource.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}
		 * @param {CommitmentPlanPatchPayload} requestBody The payload to use to patch the Azure ML commitment plan. Only tags and SKU may be modified on an existing commitment plan.
		 * @return {CommitmentPlan} OK
		 */
		CommitmentPlans_Patch(requestBody: CommitmentPlanPatchPayload): Observable<CommitmentPlan> {
			return this.http.patch<CommitmentPlan>(this.baseUri + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all commitment associations for a parent commitment plan.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}/commitmentAssociations
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} commitmentPlanName The Azure ML commitment plan name.
		 * @param {string} skipToken Continuation token for pagination.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @return {CommitmentAssociationListResult} OK
		 */
		CommitmentAssociations_List(subscriptionId: string, resourceGroupName: string, commitmentPlanName: string, skipToken: string | null | undefined, api_version: string): Observable<CommitmentAssociationListResult> {
			return this.http.get<CommitmentAssociationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/commitmentPlans/' + (commitmentPlanName == null ? '' : encodeURIComponent(commitmentPlanName)) + '/commitmentAssociations&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a commitment association.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}/commitmentAssociations/{commitmentAssociationName}
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} commitmentPlanName The Azure ML commitment plan name.
		 * @param {string} commitmentAssociationName The commitment association name.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @return {CommitmentAssociation} OK
		 */
		CommitmentAssociations_Get(subscriptionId: string, resourceGroupName: string, commitmentPlanName: string, commitmentAssociationName: string, api_version: string): Observable<CommitmentAssociation> {
			return this.http.get<CommitmentAssociation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/commitmentPlans/' + (commitmentPlanName == null ? '' : encodeURIComponent(commitmentPlanName)) + '/commitmentAssociations/' + (commitmentAssociationName == null ? '' : encodeURIComponent(commitmentAssociationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Re-parent a commitment association from one commitment plan to another.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}/commitmentAssociations/{commitmentAssociationName}/move
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} commitmentPlanName The Azure ML commitment plan name.
		 * @param {string} commitmentAssociationName The commitment association name.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @param {MoveCommitmentAssociationRequest} requestBody The move request payload.
		 * @return {CommitmentAssociation} OK
		 */
		CommitmentAssociations_Move(subscriptionId: string, resourceGroupName: string, commitmentPlanName: string, commitmentAssociationName: string, api_version: string, requestBody: MoveCommitmentAssociationRequest): Observable<CommitmentAssociation> {
			return this.http.post<CommitmentAssociation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/commitmentPlans/' + (commitmentPlanName == null ? '' : encodeURIComponent(commitmentPlanName)) + '/commitmentAssociations/' + (commitmentAssociationName == null ? '' : encodeURIComponent(commitmentAssociationName)) + '/move&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the usage history for an Azure ML commitment plan.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}/usageHistory
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} commitmentPlanName The Azure ML commitment plan name.
		 * @param {string} skipToken Continuation token for pagination.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @return {PlanUsageHistoryListResult} OK
		 */
		UsageHistory_List(subscriptionId: string, resourceGroupName: string, commitmentPlanName: string, skipToken: string | null | undefined, api_version: string): Observable<PlanUsageHistoryListResult> {
			return this.http.get<PlanUsageHistoryListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/commitmentPlans/' + (commitmentPlanName == null ? '' : encodeURIComponent(commitmentPlanName)) + '/usageHistory&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

