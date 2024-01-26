import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateCellResponse {
		CellArn?: string;
		CellName?: string;
		Cells?: Array<string>;
		ParentReadinessScopes?: Array<string>;
		Tags?: Tags;
	}
	export interface CreateCellResponseFormProperties {
		CellArn: FormControl<string | null | undefined>,
		CellName: FormControl<string | null | undefined>,
	}
	export function CreateCreateCellResponseFormGroup() {
		return new FormGroup<CreateCellResponseFormProperties>({
			CellArn: new FormControl<string | null | undefined>(undefined),
			CellName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of tags associated with a resource. */
	export interface Tags {
	}

	/** A collection of tags associated with a resource. */
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface CreateCrossAccountAuthorizationResponse {
		CrossAccountAuthorization?: string;
	}
	export interface CreateCrossAccountAuthorizationResponseFormProperties {
		CrossAccountAuthorization: FormControl<string | null | undefined>,
	}
	export function CreateCreateCrossAccountAuthorizationResponseFormGroup() {
		return new FormGroup<CreateCrossAccountAuthorizationResponseFormProperties>({
			CrossAccountAuthorization: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateReadinessCheckResponse {
		ReadinessCheckArn?: string;
		ReadinessCheckName?: string;
		ResourceSet?: string;
		Tags?: Tags;
	}
	export interface CreateReadinessCheckResponseFormProperties {
		ReadinessCheckArn: FormControl<string | null | undefined>,
		ReadinessCheckName: FormControl<string | null | undefined>,
		ResourceSet: FormControl<string | null | undefined>,
	}
	export function CreateCreateReadinessCheckResponseFormGroup() {
		return new FormGroup<CreateReadinessCheckResponseFormProperties>({
			ReadinessCheckArn: new FormControl<string | null | undefined>(undefined),
			ReadinessCheckName: new FormControl<string | null | undefined>(undefined),
			ResourceSet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRecoveryGroupResponse {
		Cells?: Array<string>;
		RecoveryGroupArn?: string;
		RecoveryGroupName?: string;
		Tags?: Tags;
	}
	export interface CreateRecoveryGroupResponseFormProperties {
		RecoveryGroupArn: FormControl<string | null | undefined>,
		RecoveryGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateRecoveryGroupResponseFormGroup() {
		return new FormGroup<CreateRecoveryGroupResponseFormProperties>({
			RecoveryGroupArn: new FormControl<string | null | undefined>(undefined),
			RecoveryGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResourceSetResponse {
		ResourceSetArn?: string;
		ResourceSetName?: string;
		ResourceSetType?: string;
		Resources?: Array<Resource>;
		Tags?: Tags;
	}
	export interface CreateResourceSetResponseFormProperties {
		ResourceSetArn: FormControl<string | null | undefined>,
		ResourceSetName: FormControl<string | null | undefined>,
		ResourceSetType: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceSetResponseFormGroup() {
		return new FormGroup<CreateResourceSetResponseFormProperties>({
			ResourceSetArn: new FormControl<string | null | undefined>(undefined),
			ResourceSetName: new FormControl<string | null | undefined>(undefined),
			ResourceSetType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource element of a resource set. */
	export interface Resource {
		ComponentId?: string;
		DnsTargetResource?: DNSTargetResource;
		ReadinessScopes?: Array<string>;
		ResourceArn?: string;
	}

	/** The resource element of a resource set. */
	export interface ResourceFormProperties {
		ComponentId: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			ComponentId: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A component for DNS/routing control readiness checks and architecture checks. */
	export interface DNSTargetResource {
		DomainName?: string;
		HostedZoneArn?: string;
		RecordSetId?: string;
		RecordType?: string;
		TargetResource?: TargetResource;
	}

	/** A component for DNS/routing control readiness checks and architecture checks. */
	export interface DNSTargetResourceFormProperties {
		DomainName: FormControl<string | null | undefined>,
		HostedZoneArn: FormControl<string | null | undefined>,
		RecordSetId: FormControl<string | null | undefined>,
		RecordType: FormControl<string | null | undefined>,
	}
	export function CreateDNSTargetResourceFormGroup() {
		return new FormGroup<DNSTargetResourceFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			HostedZoneArn: new FormControl<string | null | undefined>(undefined),
			RecordSetId: new FormControl<string | null | undefined>(undefined),
			RecordType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The target resource that the Route 53 record points to. */
	export interface TargetResource {
		NLBResource?: NLBResource;
		R53Resource?: R53ResourceRecord;
	}

	/** The target resource that the Route 53 record points to. */
	export interface TargetResourceFormProperties {
	}
	export function CreateTargetResourceFormGroup() {
		return new FormGroup<TargetResourceFormProperties>({
		});

	}


	/** The Network Load Balancer resource that a DNS target resource points to. */
	export interface NLBResource {
		Arn?: string;
	}

	/** The Network Load Balancer resource that a DNS target resource points to. */
	export interface NLBResourceFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateNLBResourceFormGroup() {
		return new FormGroup<NLBResourceFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Route 53 resource that a DNS target resource record points to. */
	export interface R53ResourceRecord {
		DomainName?: string;
		RecordSetId?: string;
	}

	/** The Route 53 resource that a DNS target resource record points to. */
	export interface R53ResourceRecordFormProperties {
		DomainName: FormControl<string | null | undefined>,
		RecordSetId: FormControl<string | null | undefined>,
	}
	export function CreateR53ResourceRecordFormGroup() {
		return new FormGroup<R53ResourceRecordFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			RecordSetId: new FormControl<string | null | undefined>(undefined),
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

	export interface DeleteCrossAccountAuthorizationResponse {
	}
	export interface DeleteCrossAccountAuthorizationResponseFormProperties {
	}
	export function CreateDeleteCrossAccountAuthorizationResponseFormGroup() {
		return new FormGroup<DeleteCrossAccountAuthorizationResponseFormProperties>({
		});

	}

	export interface GetArchitectureRecommendationsResponse {
		LastAuditTimestamp?: Date;
		NextToken?: string;
		Recommendations?: Array<Recommendation>;
	}
	export interface GetArchitectureRecommendationsResponseFormProperties {
		LastAuditTimestamp: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetArchitectureRecommendationsResponseFormGroup() {
		return new FormGroup<GetArchitectureRecommendationsResponseFormProperties>({
			LastAuditTimestamp: new FormControl<Date | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Recommendations that are provided to make an application more recovery resilient. */
	export interface Recommendation {

		/** Required */
		RecommendationText: string;
	}

	/** Recommendations that are provided to make an application more recovery resilient. */
	export interface RecommendationFormProperties {

		/** Required */
		RecommendationText: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationFormGroup() {
		return new FormGroup<RecommendationFormProperties>({
			RecommendationText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCellResponse {
		CellArn?: string;
		CellName?: string;
		Cells?: Array<string>;
		ParentReadinessScopes?: Array<string>;
		Tags?: Tags;
	}
	export interface GetCellResponseFormProperties {
		CellArn: FormControl<string | null | undefined>,
		CellName: FormControl<string | null | undefined>,
	}
	export function CreateGetCellResponseFormGroup() {
		return new FormGroup<GetCellResponseFormProperties>({
			CellArn: new FormControl<string | null | undefined>(undefined),
			CellName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCellReadinessSummaryResponse {
		NextToken?: string;
		Readiness?: Readiness;
		ReadinessChecks?: Array<ReadinessCheckSummary>;
	}
	export interface GetCellReadinessSummaryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		Readiness: FormControl<Readiness | null | undefined>,
	}
	export function CreateGetCellReadinessSummaryResponseFormGroup() {
		return new FormGroup<GetCellReadinessSummaryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Readiness: new FormControl<Readiness | null | undefined>(undefined),
		});

	}


	/** The readiness status. */
	export enum Readiness { READY = 0, NOT_READY = 1, UNKNOWN = 2, NOT_AUTHORIZED = 3 }


	/** Summary of all readiness check statuses in a recovery group, paginated in GetRecoveryGroupReadinessSummary and GetCellReadinessSummary. */
	export interface ReadinessCheckSummary {
		Readiness?: Readiness;
		ReadinessCheckName?: string;
	}

	/** Summary of all readiness check statuses in a recovery group, paginated in GetRecoveryGroupReadinessSummary and GetCellReadinessSummary. */
	export interface ReadinessCheckSummaryFormProperties {
		Readiness: FormControl<Readiness | null | undefined>,
		ReadinessCheckName: FormControl<string | null | undefined>,
	}
	export function CreateReadinessCheckSummaryFormGroup() {
		return new FormGroup<ReadinessCheckSummaryFormProperties>({
			Readiness: new FormControl<Readiness | null | undefined>(undefined),
			ReadinessCheckName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReadinessCheckResponse {
		ReadinessCheckArn?: string;
		ReadinessCheckName?: string;
		ResourceSet?: string;
		Tags?: Tags;
	}
	export interface GetReadinessCheckResponseFormProperties {
		ReadinessCheckArn: FormControl<string | null | undefined>,
		ReadinessCheckName: FormControl<string | null | undefined>,
		ResourceSet: FormControl<string | null | undefined>,
	}
	export function CreateGetReadinessCheckResponseFormGroup() {
		return new FormGroup<GetReadinessCheckResponseFormProperties>({
			ReadinessCheckArn: new FormControl<string | null | undefined>(undefined),
			ReadinessCheckName: new FormControl<string | null | undefined>(undefined),
			ResourceSet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReadinessCheckResourceStatusResponse {
		NextToken?: string;
		Readiness?: Readiness;
		Rules?: Array<RuleResult>;
	}
	export interface GetReadinessCheckResourceStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		Readiness: FormControl<Readiness | null | undefined>,
	}
	export function CreateGetReadinessCheckResourceStatusResponseFormGroup() {
		return new FormGroup<GetReadinessCheckResourceStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Readiness: new FormControl<Readiness | null | undefined>(undefined),
		});

	}


	/** The result of a successful Rule request, with status for an individual rule. */
	export interface RuleResult {

		/** Required */
		LastCheckedTimestamp: Date;

		/** Required */
		Messages: Array<Message>;

		/** Required */
		Readiness: Readiness;

		/** Required */
		RuleId: string;
	}

	/** The result of a successful Rule request, with status for an individual rule. */
	export interface RuleResultFormProperties {

		/** Required */
		LastCheckedTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		Readiness: FormControl<Readiness | null | undefined>,

		/** Required */
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateRuleResultFormGroup() {
		return new FormGroup<RuleResultFormProperties>({
			LastCheckedTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Readiness: new FormControl<Readiness | null | undefined>(undefined, [Validators.required]),
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information relating to readiness check status. */
	export interface Message {
		MessageText?: string;
	}

	/** Information relating to readiness check status. */
	export interface MessageFormProperties {
		MessageText: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			MessageText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReadinessCheckStatusResponse {
		Messages?: Array<Message>;
		NextToken?: string;
		Readiness?: Readiness;
		Resources?: Array<ResourceResult>;
	}
	export interface GetReadinessCheckStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		Readiness: FormControl<Readiness | null | undefined>,
	}
	export function CreateGetReadinessCheckStatusResponseFormGroup() {
		return new FormGroup<GetReadinessCheckStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Readiness: new FormControl<Readiness | null | undefined>(undefined),
		});

	}


	/** The result of a successful Resource request, with status for an individual resource. */
	export interface ResourceResult {
		ComponentId?: string;

		/** Required */
		LastCheckedTimestamp: Date;

		/** Required */
		Readiness: Readiness;
		ResourceArn?: string;
	}

	/** The result of a successful Resource request, with status for an individual resource. */
	export interface ResourceResultFormProperties {
		ComponentId: FormControl<string | null | undefined>,

		/** Required */
		LastCheckedTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		Readiness: FormControl<Readiness | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateResourceResultFormGroup() {
		return new FormGroup<ResourceResultFormProperties>({
			ComponentId: new FormControl<string | null | undefined>(undefined),
			LastCheckedTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Readiness: new FormControl<Readiness | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRecoveryGroupResponse {
		Cells?: Array<string>;
		RecoveryGroupArn?: string;
		RecoveryGroupName?: string;
		Tags?: Tags;
	}
	export interface GetRecoveryGroupResponseFormProperties {
		RecoveryGroupArn: FormControl<string | null | undefined>,
		RecoveryGroupName: FormControl<string | null | undefined>,
	}
	export function CreateGetRecoveryGroupResponseFormGroup() {
		return new FormGroup<GetRecoveryGroupResponseFormProperties>({
			RecoveryGroupArn: new FormControl<string | null | undefined>(undefined),
			RecoveryGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRecoveryGroupReadinessSummaryResponse {
		NextToken?: string;
		Readiness?: Readiness;
		ReadinessChecks?: Array<ReadinessCheckSummary>;
	}
	export interface GetRecoveryGroupReadinessSummaryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		Readiness: FormControl<Readiness | null | undefined>,
	}
	export function CreateGetRecoveryGroupReadinessSummaryResponseFormGroup() {
		return new FormGroup<GetRecoveryGroupReadinessSummaryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Readiness: new FormControl<Readiness | null | undefined>(undefined),
		});

	}

	export interface GetResourceSetResponse {
		ResourceSetArn?: string;
		ResourceSetName?: string;
		ResourceSetType?: string;
		Resources?: Array<Resource>;
		Tags?: Tags;
	}
	export interface GetResourceSetResponseFormProperties {
		ResourceSetArn: FormControl<string | null | undefined>,
		ResourceSetName: FormControl<string | null | undefined>,
		ResourceSetType: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceSetResponseFormGroup() {
		return new FormGroup<GetResourceSetResponseFormProperties>({
			ResourceSetArn: new FormControl<string | null | undefined>(undefined),
			ResourceSetName: new FormControl<string | null | undefined>(undefined),
			ResourceSetType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCellsResponse {
		Cells?: Array<CellOutput>;
		NextToken?: string;
	}
	export interface ListCellsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCellsResponseFormGroup() {
		return new FormGroup<ListCellsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a cell. */
	export interface CellOutput {

		/** Required */
		CellArn: string;

		/** Required */
		CellName: string;

		/** Required */
		Cells: Array<string>;

		/** Required */
		ParentReadinessScopes: Array<string>;
		Tags?: Tags;
	}

	/** Information about a cell. */
	export interface CellOutputFormProperties {

		/** Required */
		CellArn: FormControl<string | null | undefined>,

		/** Required */
		CellName: FormControl<string | null | undefined>,
	}
	export function CreateCellOutputFormGroup() {
		return new FormGroup<CellOutputFormProperties>({
			CellArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CellName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListCrossAccountAuthorizationsResponse {
		CrossAccountAuthorizations?: Array<string>;
		NextToken?: string;
	}
	export interface ListCrossAccountAuthorizationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCrossAccountAuthorizationsResponseFormGroup() {
		return new FormGroup<ListCrossAccountAuthorizationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReadinessChecksResponse {
		NextToken?: string;
		ReadinessChecks?: Array<ReadinessCheckOutput>;
	}
	export interface ListReadinessChecksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReadinessChecksResponseFormGroup() {
		return new FormGroup<ListReadinessChecksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A readiness check. */
	export interface ReadinessCheckOutput {

		/** Required */
		ReadinessCheckArn: string;
		ReadinessCheckName?: string;

		/** Required */
		ResourceSet: string;
		Tags?: Tags;
	}

	/** A readiness check. */
	export interface ReadinessCheckOutputFormProperties {

		/** Required */
		ReadinessCheckArn: FormControl<string | null | undefined>,
		ReadinessCheckName: FormControl<string | null | undefined>,

		/** Required */
		ResourceSet: FormControl<string | null | undefined>,
	}
	export function CreateReadinessCheckOutputFormGroup() {
		return new FormGroup<ReadinessCheckOutputFormProperties>({
			ReadinessCheckArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReadinessCheckName: new FormControl<string | null | undefined>(undefined),
			ResourceSet: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRecoveryGroupsResponse {
		NextToken?: string;
		RecoveryGroups?: Array<RecoveryGroupOutput>;
	}
	export interface ListRecoveryGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecoveryGroupsResponseFormGroup() {
		return new FormGroup<ListRecoveryGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of the application, typically containing multiple cells. */
	export interface RecoveryGroupOutput {

		/** Required */
		Cells: Array<string>;

		/** Required */
		RecoveryGroupArn: string;

		/** Required */
		RecoveryGroupName: string;
		Tags?: Tags;
	}

	/** A representation of the application, typically containing multiple cells. */
	export interface RecoveryGroupOutputFormProperties {

		/** Required */
		RecoveryGroupArn: FormControl<string | null | undefined>,

		/** Required */
		RecoveryGroupName: FormControl<string | null | undefined>,
	}
	export function CreateRecoveryGroupOutputFormGroup() {
		return new FormGroup<RecoveryGroupOutputFormProperties>({
			RecoveryGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecoveryGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListResourceSetsResponse {
		NextToken?: string;
		ResourceSets?: Array<ResourceSetOutput>;
	}
	export interface ListResourceSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceSetsResponseFormGroup() {
		return new FormGroup<ListResourceSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of resources of the same type. */
	export interface ResourceSetOutput {

		/** Required */
		ResourceSetArn: string;

		/** Required */
		ResourceSetName: string;

		/** Required */
		ResourceSetType: string;

		/** Required */
		Resources: Array<Resource>;
		Tags?: Tags;
	}

	/** A collection of resources of the same type. */
	export interface ResourceSetOutputFormProperties {

		/** Required */
		ResourceSetArn: FormControl<string | null | undefined>,

		/** Required */
		ResourceSetName: FormControl<string | null | undefined>,

		/** Required */
		ResourceSetType: FormControl<string | null | undefined>,
	}
	export function CreateResourceSetOutputFormGroup() {
		return new FormGroup<ResourceSetOutputFormProperties>({
			ResourceSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceSetType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRulesResponse {
		NextToken?: string;
		Rules?: Array<ListRulesOutput>;
	}
	export interface ListRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRulesResponseFormGroup() {
		return new FormGroup<ListRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Readiness rule information, including the resource type, rule ID, and rule description. */
	export interface ListRulesOutput {

		/** Required */
		ResourceType: string;

		/** Required */
		RuleDescription: string;

		/** Required */
		RuleId: string;
	}

	/** Readiness rule information, including the resource type, rule ID, and rule description. */
	export interface ListRulesOutputFormProperties {

		/** Required */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		RuleDescription: FormControl<string | null | undefined>,

		/** Required */
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateListRulesOutputFormGroup() {
		return new FormGroup<ListRulesOutputFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourcesResponse {
		Tags?: Tags;
	}
	export interface ListTagsForResourcesResponseFormProperties {
	}
	export function CreateListTagsForResourcesResponseFormGroup() {
		return new FormGroup<ListTagsForResourcesResponseFormProperties>({
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

	export interface UpdateCellResponse {
		CellArn?: string;
		CellName?: string;
		Cells?: Array<string>;
		ParentReadinessScopes?: Array<string>;
		Tags?: Tags;
	}
	export interface UpdateCellResponseFormProperties {
		CellArn: FormControl<string | null | undefined>,
		CellName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCellResponseFormGroup() {
		return new FormGroup<UpdateCellResponseFormProperties>({
			CellArn: new FormControl<string | null | undefined>(undefined),
			CellName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateReadinessCheckResponse {
		ReadinessCheckArn?: string;
		ReadinessCheckName?: string;
		ResourceSet?: string;
		Tags?: Tags;
	}
	export interface UpdateReadinessCheckResponseFormProperties {
		ReadinessCheckArn: FormControl<string | null | undefined>,
		ReadinessCheckName: FormControl<string | null | undefined>,
		ResourceSet: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReadinessCheckResponseFormGroup() {
		return new FormGroup<UpdateReadinessCheckResponseFormProperties>({
			ReadinessCheckArn: new FormControl<string | null | undefined>(undefined),
			ReadinessCheckName: new FormControl<string | null | undefined>(undefined),
			ResourceSet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRecoveryGroupResponse {
		Cells?: Array<string>;
		RecoveryGroupArn?: string;
		RecoveryGroupName?: string;
		Tags?: Tags;
	}
	export interface UpdateRecoveryGroupResponseFormProperties {
		RecoveryGroupArn: FormControl<string | null | undefined>,
		RecoveryGroupName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRecoveryGroupResponseFormGroup() {
		return new FormGroup<UpdateRecoveryGroupResponseFormProperties>({
			RecoveryGroupArn: new FormControl<string | null | undefined>(undefined),
			RecoveryGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceSetResponse {
		ResourceSetArn?: string;
		ResourceSetName?: string;
		ResourceSetType?: string;
		Resources?: Array<Resource>;
		Tags?: Tags;
	}
	export interface UpdateResourceSetResponseFormProperties {
		ResourceSetArn: FormControl<string | null | undefined>,
		ResourceSetName: FormControl<string | null | undefined>,
		ResourceSetType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceSetResponseFormGroup() {
		return new FormGroup<UpdateResourceSetResponseFormProperties>({
			ResourceSetArn: new FormControl<string | null | undefined>(undefined),
			ResourceSetName: new FormControl<string | null | undefined>(undefined),
			ResourceSetType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCellRequest {

		/** Required */
		CellName: string;
		Cells?: Array<string>;
		Tags?: Tags;
	}
	export interface CreateCellRequestFormProperties {

		/** Required */
		CellName: FormControl<string | null | undefined>,
	}
	export function CreateCreateCellRequestFormGroup() {
		return new FormGroup<CreateCellRequestFormProperties>({
			CellName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCrossAccountAuthorizationRequest {

		/** Required */
		CrossAccountAuthorization: string;
	}
	export interface CreateCrossAccountAuthorizationRequestFormProperties {

		/** Required */
		CrossAccountAuthorization: FormControl<string | null | undefined>,
	}
	export function CreateCreateCrossAccountAuthorizationRequestFormGroup() {
		return new FormGroup<CreateCrossAccountAuthorizationRequestFormProperties>({
			CrossAccountAuthorization: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReadinessCheckRequest {

		/** Required */
		ReadinessCheckName: string;

		/** Required */
		ResourceSetName: string;
		Tags?: Tags;
	}
	export interface CreateReadinessCheckRequestFormProperties {

		/** Required */
		ReadinessCheckName: FormControl<string | null | undefined>,

		/** Required */
		ResourceSetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateReadinessCheckRequestFormGroup() {
		return new FormGroup<CreateReadinessCheckRequestFormProperties>({
			ReadinessCheckName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRecoveryGroupRequest {
		Cells?: Array<string>;

		/** Required */
		RecoveryGroupName: string;
		Tags?: Tags;
	}
	export interface CreateRecoveryGroupRequestFormProperties {

		/** Required */
		RecoveryGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateRecoveryGroupRequestFormGroup() {
		return new FormGroup<CreateRecoveryGroupRequestFormProperties>({
			RecoveryGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateResourceSetRequest {

		/** Required */
		ResourceSetName: string;

		/** Required */
		ResourceSetType: string;

		/** Required */
		Resources: Array<Resource>;
		Tags?: Tags;
	}
	export interface CreateResourceSetRequestFormProperties {

		/** Required */
		ResourceSetName: FormControl<string | null | undefined>,

		/** Required */
		ResourceSetType: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceSetRequestFormGroup() {
		return new FormGroup<CreateResourceSetRequestFormProperties>({
			ResourceSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceSetType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteCellRequest {
	}
	export interface DeleteCellRequestFormProperties {
	}
	export function CreateDeleteCellRequestFormGroup() {
		return new FormGroup<DeleteCellRequestFormProperties>({
		});

	}

	export interface DeleteCrossAccountAuthorizationRequest {
	}
	export interface DeleteCrossAccountAuthorizationRequestFormProperties {
	}
	export function CreateDeleteCrossAccountAuthorizationRequestFormGroup() {
		return new FormGroup<DeleteCrossAccountAuthorizationRequestFormProperties>({
		});

	}

	export interface DeleteReadinessCheckRequest {
	}
	export interface DeleteReadinessCheckRequestFormProperties {
	}
	export function CreateDeleteReadinessCheckRequestFormGroup() {
		return new FormGroup<DeleteReadinessCheckRequestFormProperties>({
		});

	}

	export interface DeleteRecoveryGroupRequest {
	}
	export interface DeleteRecoveryGroupRequestFormProperties {
	}
	export function CreateDeleteRecoveryGroupRequestFormGroup() {
		return new FormGroup<DeleteRecoveryGroupRequestFormProperties>({
		});

	}

	export interface DeleteResourceSetRequest {
	}
	export interface DeleteResourceSetRequestFormProperties {
	}
	export function CreateDeleteResourceSetRequestFormGroup() {
		return new FormGroup<DeleteResourceSetRequestFormProperties>({
		});

	}

	export interface GetArchitectureRecommendationsRequest {
	}
	export interface GetArchitectureRecommendationsRequestFormProperties {
	}
	export function CreateGetArchitectureRecommendationsRequestFormGroup() {
		return new FormGroup<GetArchitectureRecommendationsRequestFormProperties>({
		});

	}

	export interface GetCellReadinessSummaryRequest {
	}
	export interface GetCellReadinessSummaryRequestFormProperties {
	}
	export function CreateGetCellReadinessSummaryRequestFormGroup() {
		return new FormGroup<GetCellReadinessSummaryRequestFormProperties>({
		});

	}

	export interface GetCellRequest {
	}
	export interface GetCellRequestFormProperties {
	}
	export function CreateGetCellRequestFormGroup() {
		return new FormGroup<GetCellRequestFormProperties>({
		});

	}

	export interface GetReadinessCheckRequest {
	}
	export interface GetReadinessCheckRequestFormProperties {
	}
	export function CreateGetReadinessCheckRequestFormGroup() {
		return new FormGroup<GetReadinessCheckRequestFormProperties>({
		});

	}

	export interface GetReadinessCheckResourceStatusRequest {
	}
	export interface GetReadinessCheckResourceStatusRequestFormProperties {
	}
	export function CreateGetReadinessCheckResourceStatusRequestFormGroup() {
		return new FormGroup<GetReadinessCheckResourceStatusRequestFormProperties>({
		});

	}

	export interface GetReadinessCheckStatusRequest {
	}
	export interface GetReadinessCheckStatusRequestFormProperties {
	}
	export function CreateGetReadinessCheckStatusRequestFormGroup() {
		return new FormGroup<GetReadinessCheckStatusRequestFormProperties>({
		});

	}

	export interface GetRecoveryGroupReadinessSummaryRequest {
	}
	export interface GetRecoveryGroupReadinessSummaryRequestFormProperties {
	}
	export function CreateGetRecoveryGroupReadinessSummaryRequestFormGroup() {
		return new FormGroup<GetRecoveryGroupReadinessSummaryRequestFormProperties>({
		});

	}

	export interface GetRecoveryGroupRequest {
	}
	export interface GetRecoveryGroupRequestFormProperties {
	}
	export function CreateGetRecoveryGroupRequestFormGroup() {
		return new FormGroup<GetRecoveryGroupRequestFormProperties>({
		});

	}

	export interface GetResourceSetRequest {
	}
	export interface GetResourceSetRequestFormProperties {
	}
	export function CreateGetResourceSetRequestFormGroup() {
		return new FormGroup<GetResourceSetRequestFormProperties>({
		});

	}

	export interface ListCellsRequest {
	}
	export interface ListCellsRequestFormProperties {
	}
	export function CreateListCellsRequestFormGroup() {
		return new FormGroup<ListCellsRequestFormProperties>({
		});

	}

	export interface ListCrossAccountAuthorizationsRequest {
	}
	export interface ListCrossAccountAuthorizationsRequestFormProperties {
	}
	export function CreateListCrossAccountAuthorizationsRequestFormGroup() {
		return new FormGroup<ListCrossAccountAuthorizationsRequestFormProperties>({
		});

	}

	export interface ListReadinessChecksRequest {
	}
	export interface ListReadinessChecksRequestFormProperties {
	}
	export function CreateListReadinessChecksRequestFormGroup() {
		return new FormGroup<ListReadinessChecksRequestFormProperties>({
		});

	}

	export interface ListRecoveryGroupsRequest {
	}
	export interface ListRecoveryGroupsRequestFormProperties {
	}
	export function CreateListRecoveryGroupsRequestFormGroup() {
		return new FormGroup<ListRecoveryGroupsRequestFormProperties>({
		});

	}

	export interface ListResourceSetsRequest {
	}
	export interface ListResourceSetsRequestFormProperties {
	}
	export function CreateListResourceSetsRequestFormGroup() {
		return new FormGroup<ListResourceSetsRequestFormProperties>({
		});

	}

	export interface ListRulesRequest {
	}
	export interface ListRulesRequestFormProperties {
	}
	export function CreateListRulesRequestFormGroup() {
		return new FormGroup<ListRulesRequestFormProperties>({
		});

	}

	export interface ListTagsForResourcesRequest {
	}
	export interface ListTagsForResourcesRequestFormProperties {
	}
	export function CreateListTagsForResourcesRequestFormGroup() {
		return new FormGroup<ListTagsForResourcesRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: Tags;
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

	export interface UpdateCellRequest {

		/** Required */
		Cells: Array<string>;
	}
	export interface UpdateCellRequestFormProperties {
	}
	export function CreateUpdateCellRequestFormGroup() {
		return new FormGroup<UpdateCellRequestFormProperties>({
		});

	}


	/** Name of a readiness check to describe. */
	export interface UpdateReadinessCheckRequest {

		/** Required */
		ResourceSetName: string;
	}

	/** Name of a readiness check to describe. */
	export interface UpdateReadinessCheckRequestFormProperties {

		/** Required */
		ResourceSetName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReadinessCheckRequestFormGroup() {
		return new FormGroup<UpdateReadinessCheckRequestFormProperties>({
			ResourceSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Name of a recovery group. */
	export interface UpdateRecoveryGroupRequest {

		/** Required */
		Cells: Array<string>;
	}

	/** Name of a recovery group. */
	export interface UpdateRecoveryGroupRequestFormProperties {
	}
	export function CreateUpdateRecoveryGroupRequestFormGroup() {
		return new FormGroup<UpdateRecoveryGroupRequestFormProperties>({
		});

	}


	/** Name of a resource set. */
	export interface UpdateResourceSetRequest {

		/** Required */
		ResourceSetType: string;

		/** Required */
		Resources: Array<Resource>;
	}

	/** Name of a resource set. */
	export interface UpdateResourceSetRequestFormProperties {

		/** Required */
		ResourceSetType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceSetRequestFormGroup() {
		return new FormGroup<UpdateResourceSetRequestFormProperties>({
			ResourceSetType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a cell in an account.
		 * Post cells
		 * @return {CreateCellResponse} Success
		 */
		CreateCell(requestBody: CreateCellPostBody): Observable<CreateCellResponse> {
			return this.http.post<CreateCellResponse>(this.baseUri + 'cells', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the cells for an account.
		 * Get cells
		 * @param {number} maxResults The number of objects that you want to return with this call.
		 * @param {string} nextToken The token that identifies which batch of results you want to see.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCellsResponse} Success
		 */
		ListCells(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListCellsResponse> {
			return this.http.get<ListCellsResponse>(this.baseUri + 'cells?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a cross-account readiness authorization. This lets you authorize another account to work with Route 53 Application Recovery Controller, for example, to check the readiness status of resources in a separate account.
		 * Post crossaccountauthorizations
		 * @return {CreateCrossAccountAuthorizationResponse} Success
		 */
		CreateCrossAccountAuthorization(requestBody: CreateCrossAccountAuthorizationPostBody): Observable<CreateCrossAccountAuthorizationResponse> {
			return this.http.post<CreateCrossAccountAuthorizationResponse>(this.baseUri + 'crossaccountauthorizations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the cross-account readiness authorizations that are in place for an account.
		 * Get crossaccountauthorizations
		 * @param {number} maxResults The number of objects that you want to return with this call.
		 * @param {string} nextToken The token that identifies which batch of results you want to see.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCrossAccountAuthorizationsResponse} Success
		 */
		ListCrossAccountAuthorizations(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListCrossAccountAuthorizationsResponse> {
			return this.http.get<ListCrossAccountAuthorizationsResponse>(this.baseUri + 'crossaccountauthorizations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a readiness check in an account. A readiness check monitors a resource set in your application, such as a set of Amazon Aurora instances, that Application Recovery Controller is auditing recovery readiness for. The audits run once every minute on every resource that's associated with a readiness check.
		 * Post readinesschecks
		 * @return {CreateReadinessCheckResponse} Success
		 */
		CreateReadinessCheck(requestBody: CreateReadinessCheckPostBody): Observable<CreateReadinessCheckResponse> {
			return this.http.post<CreateReadinessCheckResponse>(this.baseUri + 'readinesschecks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the readiness checks for an account.
		 * Get readinesschecks
		 * @param {number} maxResults The number of objects that you want to return with this call.
		 * @param {string} nextToken The token that identifies which batch of results you want to see.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListReadinessChecksResponse} Success
		 */
		ListReadinessChecks(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListReadinessChecksResponse> {
			return this.http.get<ListReadinessChecksResponse>(this.baseUri + 'readinesschecks?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a recovery group in an account. A recovery group corresponds to an application and includes a list of the cells that make up the application.
		 * Post recoverygroups
		 * @return {CreateRecoveryGroupResponse} Success
		 */
		CreateRecoveryGroup(requestBody: CreateRecoveryGroupPostBody): Observable<CreateRecoveryGroupResponse> {
			return this.http.post<CreateRecoveryGroupResponse>(this.baseUri + 'recoverygroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the recovery groups in an account.
		 * Get recoverygroups
		 * @param {number} maxResults The number of objects that you want to return with this call.
		 * @param {string} nextToken The token that identifies which batch of results you want to see.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRecoveryGroupsResponse} Success
		 */
		ListRecoveryGroups(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRecoveryGroupsResponse> {
			return this.http.get<ListRecoveryGroupsResponse>(this.baseUri + 'recoverygroups?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a resource set. A resource set is a set of resources of one type that span multiple cells. You can associate a resource set with a readiness check to monitor the resources for failover readiness.
		 * Post resourcesets
		 * @return {CreateResourceSetResponse} Success
		 */
		CreateResourceSet(requestBody: CreateResourceSetPostBody): Observable<CreateResourceSetResponse> {
			return this.http.post<CreateResourceSetResponse>(this.baseUri + 'resourcesets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resource sets in an account.
		 * Get resourcesets
		 * @param {number} maxResults The number of objects that you want to return with this call.
		 * @param {string} nextToken The token that identifies which batch of results you want to see.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourceSetsResponse} Success
		 */
		ListResourceSets(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListResourceSetsResponse> {
			return this.http.get<ListResourceSetsResponse>(this.baseUri + 'resourcesets?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Delete a cell. When successful, the response code is 204, with no response body.
		 * Delete cells/{cellName}
		 * @param {string} cellName The name of the cell.
		 * @return {void} 
		 */
		DeleteCell(cellName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'cells/' + (cellName == null ? '' : encodeURIComponent(cellName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a cell including cell name, cell Amazon Resource Name (ARN), ARNs of nested cells for this cell, and a list of those cell ARNs with their associated recovery group ARNs.
		 * Get cells/{cellName}
		 * @param {string} cellName The name of the cell.
		 * @return {GetCellResponse} Success
		 */
		GetCell(cellName: string): Observable<GetCellResponse> {
			return this.http.get<GetCellResponse>(this.baseUri + 'cells/' + (cellName == null ? '' : encodeURIComponent(cellName)), {});
		}

		/**
		 * Updates a cell to replace the list of nested cells with a new list of nested cells.
		 * Put cells/{cellName}
		 * @param {string} cellName The name of the cell.
		 * @return {UpdateCellResponse} Success
		 */
		UpdateCell(cellName: string, requestBody: UpdateCellPutBody): Observable<UpdateCellResponse> {
			return this.http.put<UpdateCellResponse>(this.baseUri + 'cells/' + (cellName == null ? '' : encodeURIComponent(cellName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes cross account readiness authorization.
		 * Delete crossaccountauthorizations/{crossAccountAuthorization}
		 * @param {string} crossAccountAuthorization The cross-account authorization.
		 * @return {DeleteCrossAccountAuthorizationResponse} Success
		 */
		DeleteCrossAccountAuthorization(crossAccountAuthorization: string): Observable<DeleteCrossAccountAuthorizationResponse> {
			return this.http.delete<DeleteCrossAccountAuthorizationResponse>(this.baseUri + 'crossaccountauthorizations/' + (crossAccountAuthorization == null ? '' : encodeURIComponent(crossAccountAuthorization)), {});
		}

		/**
		 * Deletes a readiness check.
		 * Delete readinesschecks/{readinessCheckName}
		 * @param {string} readinessCheckName Name of a readiness check.
		 * @return {void} 
		 */
		DeleteReadinessCheck(readinessCheckName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'readinesschecks/' + (readinessCheckName == null ? '' : encodeURIComponent(readinessCheckName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets details about a readiness check.
		 * Get readinesschecks/{readinessCheckName}
		 * @param {string} readinessCheckName Name of a readiness check.
		 * @return {GetReadinessCheckResponse} Success
		 */
		GetReadinessCheck(readinessCheckName: string): Observable<GetReadinessCheckResponse> {
			return this.http.get<GetReadinessCheckResponse>(this.baseUri + 'readinesschecks/' + (readinessCheckName == null ? '' : encodeURIComponent(readinessCheckName)), {});
		}

		/**
		 * Updates a readiness check.
		 * Put readinesschecks/{readinessCheckName}
		 * @param {string} readinessCheckName Name of a readiness check.
		 * @return {UpdateReadinessCheckResponse} Success
		 */
		UpdateReadinessCheck(readinessCheckName: string, requestBody: UpdateReadinessCheckPutBody): Observable<UpdateReadinessCheckResponse> {
			return this.http.put<UpdateReadinessCheckResponse>(this.baseUri + 'readinesschecks/' + (readinessCheckName == null ? '' : encodeURIComponent(readinessCheckName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a recovery group.
		 * Delete recoverygroups/{recoveryGroupName}
		 * @param {string} recoveryGroupName The name of a recovery group.
		 * @return {void} 
		 */
		DeleteRecoveryGroup(recoveryGroupName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'recoverygroups/' + (recoveryGroupName == null ? '' : encodeURIComponent(recoveryGroupName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets details about a recovery group, including a list of the cells that are included in it.
		 * Get recoverygroups/{recoveryGroupName}
		 * @param {string} recoveryGroupName The name of a recovery group.
		 * @return {GetRecoveryGroupResponse} Success
		 */
		GetRecoveryGroup(recoveryGroupName: string): Observable<GetRecoveryGroupResponse> {
			return this.http.get<GetRecoveryGroupResponse>(this.baseUri + 'recoverygroups/' + (recoveryGroupName == null ? '' : encodeURIComponent(recoveryGroupName)), {});
		}

		/**
		 * Updates a recovery group.
		 * Put recoverygroups/{recoveryGroupName}
		 * @param {string} recoveryGroupName The name of a recovery group.
		 * @return {UpdateRecoveryGroupResponse} Success
		 */
		UpdateRecoveryGroup(recoveryGroupName: string, requestBody: UpdateRecoveryGroupPutBody): Observable<UpdateRecoveryGroupResponse> {
			return this.http.put<UpdateRecoveryGroupResponse>(this.baseUri + 'recoverygroups/' + (recoveryGroupName == null ? '' : encodeURIComponent(recoveryGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource set.
		 * Delete resourcesets/{resourceSetName}
		 * @param {string} resourceSetName Name of a resource set.
		 * @return {void} 
		 */
		DeleteResourceSet(resourceSetName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'resourcesets/' + (resourceSetName == null ? '' : encodeURIComponent(resourceSetName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays the details about a resource set, including a list of the resources in the set.
		 * Get resourcesets/{resourceSetName}
		 * @param {string} resourceSetName Name of a resource set.
		 * @return {GetResourceSetResponse} Success
		 */
		GetResourceSet(resourceSetName: string): Observable<GetResourceSetResponse> {
			return this.http.get<GetResourceSetResponse>(this.baseUri + 'resourcesets/' + (resourceSetName == null ? '' : encodeURIComponent(resourceSetName)), {});
		}

		/**
		 * Updates a resource set.
		 * Put resourcesets/{resourceSetName}
		 * @param {string} resourceSetName Name of a resource set.
		 * @return {UpdateResourceSetResponse} Success
		 */
		UpdateResourceSet(resourceSetName: string, requestBody: UpdateResourceSetPutBody): Observable<UpdateResourceSetResponse> {
			return this.http.put<UpdateResourceSetResponse>(this.baseUri + 'resourcesets/' + (resourceSetName == null ? '' : encodeURIComponent(resourceSetName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets recommendations about architecture designs for improving resiliency for an application, based on a recovery group.
		 * Get recoverygroups/{recoveryGroupName}/architectureRecommendations
		 * @param {number} maxResults The number of objects that you want to return with this call.
		 * @param {string} nextToken The token that identifies which batch of results you want to see.
		 * @param {string} recoveryGroupName The name of a recovery group.
		 * @return {GetArchitectureRecommendationsResponse} Success
		 */
		GetArchitectureRecommendations(maxResults: number | null | undefined, nextToken: string | null | undefined, recoveryGroupName: string): Observable<GetArchitectureRecommendationsResponse> {
			return this.http.get<GetArchitectureRecommendationsResponse>(this.baseUri + 'recoverygroups/' + (recoveryGroupName == null ? '' : encodeURIComponent(recoveryGroupName)) + '/architectureRecommendations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Gets readiness for a cell. Aggregates the readiness of all the resources that are associated with the cell into a single value.
		 * Get cellreadiness/{cellName}
		 * @param {string} cellName The name of the cell.
		 * @param {number} maxResults The number of objects that you want to return with this call.
		 * @param {string} nextToken The token that identifies which batch of results you want to see.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCellReadinessSummaryResponse} Success
		 */
		GetCellReadinessSummary(cellName: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetCellReadinessSummaryResponse> {
			return this.http.get<GetCellReadinessSummaryResponse>(this.baseUri + 'cellreadiness/' + (cellName == null ? '' : encodeURIComponent(cellName)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Gets individual readiness status for a readiness check. To see the overall readiness status for a recovery group, that considers the readiness status for all the readiness checks in the recovery group, use GetRecoveryGroupReadinessSummary.
		 * Get readinesschecks/{readinessCheckName}/resource/{resourceIdentifier}/status
		 * @param {number} maxResults The number of objects that you want to return with this call.
		 * @param {string} nextToken The token that identifies which batch of results you want to see.
		 * @param {string} readinessCheckName Name of a readiness check.
		 * @param {string} resourceIdentifier The resource identifier, which is the Amazon Resource Name (ARN) or the identifier generated for the resource by Application Recovery Controller (for example, for a DNS target resource).
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetReadinessCheckResourceStatusResponse} Success
		 */
		GetReadinessCheckResourceStatus(maxResults: number | null | undefined, nextToken: string | null | undefined, readinessCheckName: string, resourceIdentifier: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetReadinessCheckResourceStatusResponse> {
			return this.http.get<GetReadinessCheckResourceStatusResponse>(this.baseUri + 'readinesschecks/' + (readinessCheckName == null ? '' : encodeURIComponent(readinessCheckName)) + '/resource/' + (resourceIdentifier == null ? '' : encodeURIComponent(resourceIdentifier)) + '/status?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Gets the readiness status for an individual readiness check. To see the overall readiness status for a recovery group, that considers the readiness status for all the readiness checks in a recovery group, use GetRecoveryGroupReadinessSummary.
		 * Get readinesschecks/{readinessCheckName}/status
		 * @param {number} maxResults The number of objects that you want to return with this call.
		 * @param {string} nextToken The token that identifies which batch of results you want to see.
		 * @param {string} readinessCheckName Name of a readiness check.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetReadinessCheckStatusResponse} Success
		 */
		GetReadinessCheckStatus(maxResults: number | null | undefined, nextToken: string | null | undefined, readinessCheckName: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetReadinessCheckStatusResponse> {
			return this.http.get<GetReadinessCheckStatusResponse>(this.baseUri + 'readinesschecks/' + (readinessCheckName == null ? '' : encodeURIComponent(readinessCheckName)) + '/status?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Displays a summary of information about a recovery group's readiness status. Includes the readiness checks for resources in the recovery group and the readiness status of each one.
		 * Get recoverygroupreadiness/{recoveryGroupName}
		 * @param {number} maxResults The number of objects that you want to return with this call.
		 * @param {string} nextToken The token that identifies which batch of results you want to see.
		 * @param {string} recoveryGroupName The name of a recovery group.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetRecoveryGroupReadinessSummaryResponse} Success
		 */
		GetRecoveryGroupReadinessSummary(maxResults: number | null | undefined, nextToken: string | null | undefined, recoveryGroupName: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetRecoveryGroupReadinessSummaryResponse> {
			return this.http.get<GetRecoveryGroupReadinessSummaryResponse>(this.baseUri + 'recoverygroupreadiness/' + (recoveryGroupName == null ? '' : encodeURIComponent(recoveryGroupName)) + '?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists all readiness rules, or lists the readiness rules for a specific resource type.
		 * Get rules
		 * @param {number} maxResults The number of objects that you want to return with this call.
		 * @param {string} nextToken The token that identifies which batch of results you want to see.
		 * @param {string} resourceType The resource type that a readiness rule applies to.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRulesResponse} Success
		 */
		ListRules(maxResults: number | null | undefined, nextToken: string | null | undefined, resourceType: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRulesResponse> {
			return this.http.get<ListRulesResponse>(this.baseUri + 'rules?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the tags for a resource.
		 * Get tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) for a resource.
		 * @return {ListTagsForResourcesResponse} Success
		 */
		ListTagsForResources(resource_arn: string): Observable<ListTagsForResourcesResponse> {
			return this.http.get<ListTagsForResourcesResponse>(this.baseUri + 'tags/{resource_arn}', {});
		}

		/**
		 * Adds a tag to a resource.
		 * Post tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) for a resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resource_arn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/{resource_arn}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from a resource.
		 * Delete tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The Amazon Resource Name (ARN) for a resource.
		 * @param {Array<string>} tagKeys The keys for tags you add to resources.
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/{resource_arn}#tagKeys?' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateCellPostBody {

		/**
		 * The name of the cell to create.
		 * Required
		 */
		cellName: string;

		/** A list of cell Amazon Resource Names (ARNs) contained within this cell, for use in nested cells. For example, Availability Zones within specific Amazon Web Services Regions. */
		cells?: Array<string>;

		/** A collection of tags associated with a resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateCellPostBodyFormProperties {

		/**
		 * The name of the cell to create.
		 * Required
		 */
		cellName: FormControl<string | null | undefined>,

		/** A collection of tags associated with a resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateCellPostBodyFormGroup() {
		return new FormGroup<CreateCellPostBodyFormProperties>({
			cellName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateCrossAccountAuthorizationPostBody {

		/**
		 * CrossAccountAuthorization
		 * Required
		 */
		crossAccountAuthorization: string;
	}
	export interface CreateCrossAccountAuthorizationPostBodyFormProperties {

		/**
		 * CrossAccountAuthorization
		 * Required
		 */
		crossAccountAuthorization: FormControl<string | null | undefined>,
	}
	export function CreateCreateCrossAccountAuthorizationPostBodyFormGroup() {
		return new FormGroup<CreateCrossAccountAuthorizationPostBodyFormProperties>({
			crossAccountAuthorization: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReadinessCheckPostBody {

		/**
		 * The name of the readiness check to create.
		 * Required
		 */
		readinessCheckName: string;

		/**
		 * The name of the resource set to check.
		 * Required
		 */
		resourceSetName: string;

		/** A collection of tags associated with a resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateReadinessCheckPostBodyFormProperties {

		/**
		 * The name of the readiness check to create.
		 * Required
		 */
		readinessCheckName: FormControl<string | null | undefined>,

		/**
		 * The name of the resource set to check.
		 * Required
		 */
		resourceSetName: FormControl<string | null | undefined>,

		/** A collection of tags associated with a resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateReadinessCheckPostBodyFormGroup() {
		return new FormGroup<CreateReadinessCheckPostBodyFormProperties>({
			readinessCheckName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateRecoveryGroupPostBody {

		/** A list of the cell Amazon Resource Names (ARNs) in the recovery group. */
		cells?: Array<string>;

		/**
		 * The name of the recovery group to create.
		 * Required
		 */
		recoveryGroupName: string;

		/** A collection of tags associated with a resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateRecoveryGroupPostBodyFormProperties {

		/**
		 * The name of the recovery group to create.
		 * Required
		 */
		recoveryGroupName: FormControl<string | null | undefined>,

		/** A collection of tags associated with a resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRecoveryGroupPostBodyFormGroup() {
		return new FormGroup<CreateRecoveryGroupPostBodyFormProperties>({
			recoveryGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateResourceSetPostBody {

		/**
		 * The name of the resource set to create.
		 * Required
		 */
		resourceSetName: string;

		/**
		 * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
		 * Required
		 */
		resourceSetType: string;

		/**
		 * A list of resource objects in the resource set.
		 * Required
		 */
		resources: Array<Resource>;

		/** A collection of tags associated with a resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateResourceSetPostBodyFormProperties {

		/**
		 * The name of the resource set to create.
		 * Required
		 */
		resourceSetName: FormControl<string | null | undefined>,

		/**
		 * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
		 * Required
		 */
		resourceSetType: FormControl<string | null | undefined>,

		/** A collection of tags associated with a resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateResourceSetPostBodyFormGroup() {
		return new FormGroup<CreateResourceSetPostBodyFormProperties>({
			resourceSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceSetType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('AWS::[A-Za-z0-9]+::[A-Za-z0-9]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateCellPutBody {

		/**
		 * A list of cell Amazon Resource Names (ARNs), which completely replaces the previous list.
		 * Required
		 */
		cells: Array<string>;
	}
	export interface UpdateCellPutBodyFormProperties {
	}
	export function CreateUpdateCellPutBodyFormGroup() {
		return new FormGroup<UpdateCellPutBodyFormProperties>({
		});

	}

	export interface UpdateReadinessCheckPutBody {

		/**
		 * The name of the resource set to be checked.
		 * Required
		 */
		resourceSetName: string;
	}
	export interface UpdateReadinessCheckPutBodyFormProperties {

		/**
		 * The name of the resource set to be checked.
		 * Required
		 */
		resourceSetName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReadinessCheckPutBodyFormGroup() {
		return new FormGroup<UpdateReadinessCheckPutBodyFormProperties>({
			resourceSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRecoveryGroupPutBody {

		/**
		 * A list of cell Amazon Resource Names (ARNs). This list completely replaces the previous list.
		 * Required
		 */
		cells: Array<string>;
	}
	export interface UpdateRecoveryGroupPutBodyFormProperties {
	}
	export function CreateUpdateRecoveryGroupPutBodyFormGroup() {
		return new FormGroup<UpdateRecoveryGroupPutBodyFormProperties>({
		});

	}

	export interface UpdateResourceSetPutBody {

		/**
		 * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
		 * Required
		 */
		resourceSetType: string;

		/**
		 * A list of resource objects.
		 * Required
		 */
		resources: Array<Resource>;
	}
	export interface UpdateResourceSetPutBodyFormProperties {

		/**
		 * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
		 * Required
		 */
		resourceSetType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceSetPutBodyFormGroup() {
		return new FormGroup<UpdateResourceSetPutBodyFormProperties>({
			resourceSetType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('AWS::[A-Za-z0-9]+::[A-Za-z0-9]+')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A collection of tags associated with a resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A collection of tags associated with a resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

