import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateServiceQuotaTemplateResponse {
	}
	export interface AssociateServiceQuotaTemplateResponseFormProperties {
	}
	export function CreateAssociateServiceQuotaTemplateResponseFormGroup() {
		return new FormGroup<AssociateServiceQuotaTemplateResponseFormProperties>({
		});

	}

	export interface AssociateServiceQuotaTemplateRequest {
	}
	export interface AssociateServiceQuotaTemplateRequestFormProperties {
	}
	export function CreateAssociateServiceQuotaTemplateRequestFormGroup() {
		return new FormGroup<AssociateServiceQuotaTemplateRequestFormProperties>({
		});

	}

	export interface DependencyAccessDeniedException {
	}
	export interface DependencyAccessDeniedExceptionFormProperties {
	}
	export function CreateDependencyAccessDeniedExceptionFormGroup() {
		return new FormGroup<DependencyAccessDeniedExceptionFormProperties>({
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

	export interface ServiceException {
	}
	export interface ServiceExceptionFormProperties {
	}
	export function CreateServiceExceptionFormGroup() {
		return new FormGroup<ServiceExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface AWSServiceAccessNotEnabledException {
	}
	export interface AWSServiceAccessNotEnabledExceptionFormProperties {
	}
	export function CreateAWSServiceAccessNotEnabledExceptionFormGroup() {
		return new FormGroup<AWSServiceAccessNotEnabledExceptionFormProperties>({
		});

	}

	export interface OrganizationNotInAllFeaturesModeException {
	}
	export interface OrganizationNotInAllFeaturesModeExceptionFormProperties {
	}
	export function CreateOrganizationNotInAllFeaturesModeExceptionFormGroup() {
		return new FormGroup<OrganizationNotInAllFeaturesModeExceptionFormProperties>({
		});

	}

	export interface TemplatesNotAvailableInRegionException {
	}
	export interface TemplatesNotAvailableInRegionExceptionFormProperties {
	}
	export function CreateTemplatesNotAvailableInRegionExceptionFormGroup() {
		return new FormGroup<TemplatesNotAvailableInRegionExceptionFormProperties>({
		});

	}

	export interface NoAvailableOrganizationException {
	}
	export interface NoAvailableOrganizationExceptionFormProperties {
	}
	export function CreateNoAvailableOrganizationExceptionFormGroup() {
		return new FormGroup<NoAvailableOrganizationExceptionFormProperties>({
		});

	}

	export interface DeleteServiceQuotaIncreaseRequestFromTemplateResponse {
	}
	export interface DeleteServiceQuotaIncreaseRequestFromTemplateResponseFormProperties {
	}
	export function CreateDeleteServiceQuotaIncreaseRequestFromTemplateResponseFormGroup() {
		return new FormGroup<DeleteServiceQuotaIncreaseRequestFromTemplateResponseFormProperties>({
		});

	}

	export interface DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
		ServiceCode: string;
		QuotaCode: string;
		AwsRegion: string;
	}
	export interface DeleteServiceQuotaIncreaseRequestFromTemplateRequestFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		QuotaCode: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServiceQuotaIncreaseRequestFromTemplateRequestFormGroup() {
		return new FormGroup<DeleteServiceQuotaIncreaseRequestFromTemplateRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			QuotaCode: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NoSuchResourceException {
	}
	export interface NoSuchResourceExceptionFormProperties {
	}
	export function CreateNoSuchResourceExceptionFormGroup() {
		return new FormGroup<NoSuchResourceExceptionFormProperties>({
		});

	}

	export interface IllegalArgumentException {
	}
	export interface IllegalArgumentExceptionFormProperties {
	}
	export function CreateIllegalArgumentExceptionFormGroup() {
		return new FormGroup<IllegalArgumentExceptionFormProperties>({
		});

	}

	export interface DisassociateServiceQuotaTemplateResponse {
	}
	export interface DisassociateServiceQuotaTemplateResponseFormProperties {
	}
	export function CreateDisassociateServiceQuotaTemplateResponseFormGroup() {
		return new FormGroup<DisassociateServiceQuotaTemplateResponseFormProperties>({
		});

	}

	export interface DisassociateServiceQuotaTemplateRequest {
	}
	export interface DisassociateServiceQuotaTemplateRequestFormProperties {
	}
	export function CreateDisassociateServiceQuotaTemplateRequestFormGroup() {
		return new FormGroup<DisassociateServiceQuotaTemplateRequestFormProperties>({
		});

	}

	export interface ServiceQuotaTemplateNotInUseException {
	}
	export interface ServiceQuotaTemplateNotInUseExceptionFormProperties {
	}
	export function CreateServiceQuotaTemplateNotInUseExceptionFormGroup() {
		return new FormGroup<ServiceQuotaTemplateNotInUseExceptionFormProperties>({
		});

	}

	export interface GetAWSDefaultServiceQuotaResponse {

		/** A structure that contains the full set of details that define the service quota. */
		Quota?: ServiceQuota;
	}
	export interface GetAWSDefaultServiceQuotaResponseFormProperties {
	}
	export function CreateGetAWSDefaultServiceQuotaResponseFormGroup() {
		return new FormGroup<GetAWSDefaultServiceQuotaResponseFormProperties>({
		});

	}


	/** A structure that contains the full set of details that define the service quota. */
	export interface ServiceQuota {
		ServiceCode?: string | null;
		ServiceName?: string | null;
		QuotaArn?: string | null;
		QuotaCode?: string | null;
		QuotaName?: string | null;
		Value?: number | null;
		Unit?: string | null;
		Adjustable?: boolean | null;
		GlobalQuota?: boolean | null;

		/** A structure that uses CloudWatch metrics to gather data about the service quota. */
		UsageMetric?: MetricInfo;

		/** A structure that contains information about the quota period. */
		Period?: QuotaPeriod;

		/** Returns an error that explains why the action did not succeed. */
		ErrorReason?: ErrorReason;
	}

	/** A structure that contains the full set of details that define the service quota. */
	export interface ServiceQuotaFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		QuotaArn: FormControl<string | null | undefined>,
		QuotaCode: FormControl<string | null | undefined>,
		QuotaName: FormControl<string | null | undefined>,
		Value: FormControl<number | null | undefined>,
		Unit: FormControl<string | null | undefined>,
		Adjustable: FormControl<boolean | null | undefined>,
		GlobalQuota: FormControl<boolean | null | undefined>,
	}
	export function CreateServiceQuotaFormGroup() {
		return new FormGroup<ServiceQuotaFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			QuotaArn: new FormControl<string | null | undefined>(undefined),
			QuotaCode: new FormControl<string | null | undefined>(undefined),
			QuotaName: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
			Adjustable: new FormControl<boolean | null | undefined>(undefined),
			GlobalQuota: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A structure that uses CloudWatch metrics to gather data about the service quota. */
	export interface MetricInfo {
		MetricNamespace?: string | null;
		MetricName?: string | null;
		MetricDimensions?: MetricDimensionsMapDefinition;
		MetricStatisticRecommendation?: string | null;
	}

	/** A structure that uses CloudWatch metrics to gather data about the service quota. */
	export interface MetricInfoFormProperties {
		MetricNamespace: FormControl<string | null | undefined>,
		MetricName: FormControl<string | null | undefined>,
		MetricStatisticRecommendation: FormControl<string | null | undefined>,
	}
	export function CreateMetricInfoFormGroup() {
		return new FormGroup<MetricInfoFormProperties>({
			MetricNamespace: new FormControl<string | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined),
			MetricStatisticRecommendation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MetricDimensionsMapDefinition {
	}
	export interface MetricDimensionsMapDefinitionFormProperties {
	}
	export function CreateMetricDimensionsMapDefinitionFormGroup() {
		return new FormGroup<MetricDimensionsMapDefinitionFormProperties>({
		});

	}


	/** A structure that contains information about the quota period. */
	export interface QuotaPeriod {
		PeriodValue?: number | null;
		PeriodUnit?: QuotaPeriodPeriodUnit | null;
	}

	/** A structure that contains information about the quota period. */
	export interface QuotaPeriodFormProperties {
		PeriodValue: FormControl<number | null | undefined>,
		PeriodUnit: FormControl<QuotaPeriodPeriodUnit | null | undefined>,
	}
	export function CreateQuotaPeriodFormGroup() {
		return new FormGroup<QuotaPeriodFormProperties>({
			PeriodValue: new FormControl<number | null | undefined>(undefined),
			PeriodUnit: new FormControl<QuotaPeriodPeriodUnit | null | undefined>(undefined),
		});

	}

	export enum QuotaPeriodPeriodUnit { MICROSECOND = 0, MILLISECOND = 1, SECOND = 2, MINUTE = 3, HOUR = 4, DAY = 5, WEEK = 6 }


	/** Returns an error that explains why the action did not succeed. */
	export interface ErrorReason {
		ErrorCode?: ErrorReasonErrorCode | null;
		ErrorMessage?: string | null;
	}

	/** Returns an error that explains why the action did not succeed. */
	export interface ErrorReasonFormProperties {
		ErrorCode: FormControl<ErrorReasonErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorReasonFormGroup() {
		return new FormGroup<ErrorReasonFormProperties>({
			ErrorCode: new FormControl<ErrorReasonErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorReasonErrorCode { DEPENDENCY_ACCESS_DENIED_ERROR = 0, DEPENDENCY_THROTTLING_ERROR = 1, DEPENDENCY_SERVICE_ERROR = 2, SERVICE_QUOTA_NOT_AVAILABLE_ERROR = 3 }

	export interface GetAWSDefaultServiceQuotaRequest {
		ServiceCode: string;
		QuotaCode: string;
	}
	export interface GetAWSDefaultServiceQuotaRequestFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		QuotaCode: FormControl<string | null | undefined>,
	}
	export function CreateGetAWSDefaultServiceQuotaRequestFormGroup() {
		return new FormGroup<GetAWSDefaultServiceQuotaRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			QuotaCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAssociationForServiceQuotaTemplateResponse {
		ServiceQuotaTemplateAssociationStatus?: GetAssociationForServiceQuotaTemplateResponseServiceQuotaTemplateAssociationStatus | null;
	}
	export interface GetAssociationForServiceQuotaTemplateResponseFormProperties {
		ServiceQuotaTemplateAssociationStatus: FormControl<GetAssociationForServiceQuotaTemplateResponseServiceQuotaTemplateAssociationStatus | null | undefined>,
	}
	export function CreateGetAssociationForServiceQuotaTemplateResponseFormGroup() {
		return new FormGroup<GetAssociationForServiceQuotaTemplateResponseFormProperties>({
			ServiceQuotaTemplateAssociationStatus: new FormControl<GetAssociationForServiceQuotaTemplateResponseServiceQuotaTemplateAssociationStatus | null | undefined>(undefined),
		});

	}

	export enum GetAssociationForServiceQuotaTemplateResponseServiceQuotaTemplateAssociationStatus { ASSOCIATED = 0, DISASSOCIATED = 1 }

	export interface GetAssociationForServiceQuotaTemplateRequest {
	}
	export interface GetAssociationForServiceQuotaTemplateRequestFormProperties {
	}
	export function CreateGetAssociationForServiceQuotaTemplateRequestFormGroup() {
		return new FormGroup<GetAssociationForServiceQuotaTemplateRequestFormProperties>({
		});

	}

	export interface GetRequestedServiceQuotaChangeResponse {

		/** A structure that contains information about a requested change for a quota. */
		RequestedQuota?: RequestedServiceQuotaChange;
	}
	export interface GetRequestedServiceQuotaChangeResponseFormProperties {
	}
	export function CreateGetRequestedServiceQuotaChangeResponseFormGroup() {
		return new FormGroup<GetRequestedServiceQuotaChangeResponseFormProperties>({
		});

	}


	/** A structure that contains information about a requested change for a quota. */
	export interface RequestedServiceQuotaChange {
		Id?: string | null;
		CaseId?: string | null;
		ServiceCode?: string | null;
		ServiceName?: string | null;
		QuotaCode?: string | null;
		QuotaName?: string | null;
		DesiredValue?: number | null;
		Status?: RequestedServiceQuotaChangeStatus | null;
		Created?: Date | null;
		LastUpdated?: Date | null;
		Requester?: string | null;
		QuotaArn?: string | null;
		GlobalQuota?: boolean | null;
		Unit?: string | null;
	}

	/** A structure that contains information about a requested change for a quota. */
	export interface RequestedServiceQuotaChangeFormProperties {
		Id: FormControl<string | null | undefined>,
		CaseId: FormControl<string | null | undefined>,
		ServiceCode: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		QuotaCode: FormControl<string | null | undefined>,
		QuotaName: FormControl<string | null | undefined>,
		DesiredValue: FormControl<number | null | undefined>,
		Status: FormControl<RequestedServiceQuotaChangeStatus | null | undefined>,
		Created: FormControl<Date | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		Requester: FormControl<string | null | undefined>,
		QuotaArn: FormControl<string | null | undefined>,
		GlobalQuota: FormControl<boolean | null | undefined>,
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateRequestedServiceQuotaChangeFormGroup() {
		return new FormGroup<RequestedServiceQuotaChangeFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			CaseId: new FormControl<string | null | undefined>(undefined),
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			QuotaCode: new FormControl<string | null | undefined>(undefined),
			QuotaName: new FormControl<string | null | undefined>(undefined),
			DesiredValue: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<RequestedServiceQuotaChangeStatus | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Requester: new FormControl<string | null | undefined>(undefined),
			QuotaArn: new FormControl<string | null | undefined>(undefined),
			GlobalQuota: new FormControl<boolean | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RequestedServiceQuotaChangeStatus { PENDING = 0, CASE_OPENED = 1, APPROVED = 2, DENIED = 3, CASE_CLOSED = 4 }

	export interface GetRequestedServiceQuotaChangeRequest {
		RequestId: string;
	}
	export interface GetRequestedServiceQuotaChangeRequestFormProperties {
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateGetRequestedServiceQuotaChangeRequestFormGroup() {
		return new FormGroup<GetRequestedServiceQuotaChangeRequestFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetServiceQuotaResponse {

		/** A structure that contains the full set of details that define the service quota. */
		Quota?: ServiceQuota;
	}
	export interface GetServiceQuotaResponseFormProperties {
	}
	export function CreateGetServiceQuotaResponseFormGroup() {
		return new FormGroup<GetServiceQuotaResponseFormProperties>({
		});

	}

	export interface GetServiceQuotaRequest {
		ServiceCode: string;
		QuotaCode: string;
	}
	export interface GetServiceQuotaRequestFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		QuotaCode: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceQuotaRequestFormGroup() {
		return new FormGroup<GetServiceQuotaRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			QuotaCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetServiceQuotaIncreaseRequestFromTemplateResponse {

		/** A structure that contains information about one service quota increase request. */
		ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
	}
	export interface GetServiceQuotaIncreaseRequestFromTemplateResponseFormProperties {
	}
	export function CreateGetServiceQuotaIncreaseRequestFromTemplateResponseFormGroup() {
		return new FormGroup<GetServiceQuotaIncreaseRequestFromTemplateResponseFormProperties>({
		});

	}


	/** A structure that contains information about one service quota increase request. */
	export interface ServiceQuotaIncreaseRequestInTemplate {
		ServiceCode?: string | null;
		ServiceName?: string | null;
		QuotaCode?: string | null;
		QuotaName?: string | null;
		DesiredValue?: number | null;
		AwsRegion?: string | null;
		Unit?: string | null;
		GlobalQuota?: boolean | null;
	}

	/** A structure that contains information about one service quota increase request. */
	export interface ServiceQuotaIncreaseRequestInTemplateFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		QuotaCode: FormControl<string | null | undefined>,
		QuotaName: FormControl<string | null | undefined>,
		DesiredValue: FormControl<number | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
		Unit: FormControl<string | null | undefined>,
		GlobalQuota: FormControl<boolean | null | undefined>,
	}
	export function CreateServiceQuotaIncreaseRequestInTemplateFormGroup() {
		return new FormGroup<ServiceQuotaIncreaseRequestInTemplateFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			QuotaCode: new FormControl<string | null | undefined>(undefined),
			QuotaName: new FormControl<string | null | undefined>(undefined),
			DesiredValue: new FormControl<number | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
			GlobalQuota: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetServiceQuotaIncreaseRequestFromTemplateRequest {
		ServiceCode: string;
		QuotaCode: string;
		AwsRegion: string;
	}
	export interface GetServiceQuotaIncreaseRequestFromTemplateRequestFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		QuotaCode: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceQuotaIncreaseRequestFromTemplateRequestFormGroup() {
		return new FormGroup<GetServiceQuotaIncreaseRequestFromTemplateRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			QuotaCode: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAWSDefaultServiceQuotasResponse {
		NextToken?: string | null;
		Quotas?: Array<ServiceQuota>;
	}
	export interface ListAWSDefaultServiceQuotasResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAWSDefaultServiceQuotasResponseFormGroup() {
		return new FormGroup<ListAWSDefaultServiceQuotasResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAWSDefaultServiceQuotasRequest {
		ServiceCode: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListAWSDefaultServiceQuotasRequestFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAWSDefaultServiceQuotasRequestFormGroup() {
		return new FormGroup<ListAWSDefaultServiceQuotasRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidPaginationTokenException {
	}
	export interface InvalidPaginationTokenExceptionFormProperties {
	}
	export function CreateInvalidPaginationTokenExceptionFormGroup() {
		return new FormGroup<InvalidPaginationTokenExceptionFormProperties>({
		});

	}

	export interface ListRequestedServiceQuotaChangeHistoryResponse {
		NextToken?: string | null;
		RequestedQuotas?: Array<RequestedServiceQuotaChange>;
	}
	export interface ListRequestedServiceQuotaChangeHistoryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRequestedServiceQuotaChangeHistoryResponseFormGroup() {
		return new FormGroup<ListRequestedServiceQuotaChangeHistoryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRequestedServiceQuotaChangeHistoryRequest {
		ServiceCode?: string | null;
		Status?: RequestedServiceQuotaChangeStatus | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListRequestedServiceQuotaChangeHistoryRequestFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		Status: FormControl<RequestedServiceQuotaChangeStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRequestedServiceQuotaChangeHistoryRequestFormGroup() {
		return new FormGroup<ListRequestedServiceQuotaChangeHistoryRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<RequestedServiceQuotaChangeStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
		NextToken?: string | null;
		RequestedQuotas?: Array<RequestedServiceQuotaChange>;
	}
	export interface ListRequestedServiceQuotaChangeHistoryByQuotaResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRequestedServiceQuotaChangeHistoryByQuotaResponseFormGroup() {
		return new FormGroup<ListRequestedServiceQuotaChangeHistoryByQuotaResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
		ServiceCode: string;
		QuotaCode: string;
		Status?: RequestedServiceQuotaChangeStatus | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListRequestedServiceQuotaChangeHistoryByQuotaRequestFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		QuotaCode: FormControl<string | null | undefined>,
		Status: FormControl<RequestedServiceQuotaChangeStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRequestedServiceQuotaChangeHistoryByQuotaRequestFormGroup() {
		return new FormGroup<ListRequestedServiceQuotaChangeHistoryByQuotaRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			QuotaCode: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<RequestedServiceQuotaChangeStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListServiceQuotaIncreaseRequestsInTemplateResponse {
		ServiceQuotaIncreaseRequestInTemplateList?: Array<ServiceQuotaIncreaseRequestInTemplate>;
		NextToken?: string | null;
	}
	export interface ListServiceQuotaIncreaseRequestsInTemplateResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceQuotaIncreaseRequestsInTemplateResponseFormGroup() {
		return new FormGroup<ListServiceQuotaIncreaseRequestsInTemplateResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServiceQuotaIncreaseRequestsInTemplateRequest {
		ServiceCode?: string | null;
		AwsRegion?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListServiceQuotaIncreaseRequestsInTemplateRequestFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListServiceQuotaIncreaseRequestsInTemplateRequestFormGroup() {
		return new FormGroup<ListServiceQuotaIncreaseRequestsInTemplateRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListServiceQuotasResponse {
		NextToken?: string | null;
		Quotas?: Array<ServiceQuota>;
	}
	export interface ListServiceQuotasResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceQuotasResponseFormGroup() {
		return new FormGroup<ListServiceQuotasResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServiceQuotasRequest {
		ServiceCode: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListServiceQuotasRequestFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListServiceQuotasRequestFormGroup() {
		return new FormGroup<ListServiceQuotasRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListServicesResponse {
		NextToken?: string | null;
		Services?: Array<ServiceInfo>;
	}
	export interface ListServicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicesResponseFormGroup() {
		return new FormGroup<ListServicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains the <code>ServiceName</code> and <code>ServiceCode</code>. It does not include all details of the service quota. To get those values, use the <a>ListServiceQuotas</a> operation.  */
	export interface ServiceInfo {
		ServiceCode?: string | null;
		ServiceName?: string | null;
	}

	/** A structure that contains the <code>ServiceName</code> and <code>ServiceCode</code>. It does not include all details of the service quota. To get those values, use the <a>ListServiceQuotas</a> operation.  */
	export interface ServiceInfoFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
	}
	export function CreateServiceInfoFormGroup() {
		return new FormGroup<ServiceInfoFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServicesRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListServicesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListServicesRequestFormGroup() {
		return new FormGroup<ListServicesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutServiceQuotaIncreaseRequestIntoTemplateResponse {

		/** A structure that contains information about one service quota increase request. */
		ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
	}
	export interface PutServiceQuotaIncreaseRequestIntoTemplateResponseFormProperties {
	}
	export function CreatePutServiceQuotaIncreaseRequestIntoTemplateResponseFormGroup() {
		return new FormGroup<PutServiceQuotaIncreaseRequestIntoTemplateResponseFormProperties>({
		});

	}

	export interface PutServiceQuotaIncreaseRequestIntoTemplateRequest {
		QuotaCode: string;
		ServiceCode: string;
		AwsRegion: string;
		DesiredValue: number;
	}
	export interface PutServiceQuotaIncreaseRequestIntoTemplateRequestFormProperties {
		QuotaCode: FormControl<string | null | undefined>,
		ServiceCode: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
		DesiredValue: FormControl<number | null | undefined>,
	}
	export function CreatePutServiceQuotaIncreaseRequestIntoTemplateRequestFormGroup() {
		return new FormGroup<PutServiceQuotaIncreaseRequestIntoTemplateRequestFormProperties>({
			QuotaCode: new FormControl<string | null | undefined>(undefined),
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
			DesiredValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QuotaExceededException {
	}
	export interface QuotaExceededExceptionFormProperties {
	}
	export function CreateQuotaExceededExceptionFormGroup() {
		return new FormGroup<QuotaExceededExceptionFormProperties>({
		});

	}

	export interface RequestServiceQuotaIncreaseResponse {

		/** A structure that contains information about a requested change for a quota. */
		RequestedQuota?: RequestedServiceQuotaChange;
	}
	export interface RequestServiceQuotaIncreaseResponseFormProperties {
	}
	export function CreateRequestServiceQuotaIncreaseResponseFormGroup() {
		return new FormGroup<RequestServiceQuotaIncreaseResponseFormProperties>({
		});

	}

	export interface RequestServiceQuotaIncreaseRequest {
		ServiceCode: string;
		QuotaCode: string;
		DesiredValue: number;
	}
	export interface RequestServiceQuotaIncreaseRequestFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		QuotaCode: FormControl<string | null | undefined>,
		DesiredValue: FormControl<number | null | undefined>,
	}
	export function CreateRequestServiceQuotaIncreaseRequestFormGroup() {
		return new FormGroup<RequestServiceQuotaIncreaseRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			QuotaCode: new FormControl<string | null | undefined>(undefined),
			DesiredValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface InvalidResourceStateException {
	}
	export interface InvalidResourceStateExceptionFormProperties {
	}
	export function CreateInvalidResourceStateExceptionFormGroup() {
		return new FormGroup<InvalidResourceStateExceptionFormProperties>({
		});

	}

	export enum ErrorCode { DEPENDENCY_ACCESS_DENIED_ERROR = 0, DEPENDENCY_THROTTLING_ERROR = 1, DEPENDENCY_SERVICE_ERROR = 2, SERVICE_QUOTA_NOT_AVAILABLE_ERROR = 3 }

	export enum ServiceQuotaTemplateAssociationStatus { ASSOCIATED = 0, DISASSOCIATED = 1 }

	export enum RequestStatus { PENDING = 0, CASE_OPENED = 1, APPROVED = 2, DENIED = 3, CASE_CLOSED = 4 }

	export enum PeriodUnit { MICROSECOND = 0, MILLISECOND = 1, SECOND = 2, MINUTE = 3, HOUR = 4, DAY = 5, WEEK = 6 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates the Service Quotas template with your organization so that when new accounts are created in your organization, the template submits increase requests for the specified service quotas. Use the Service Quotas template to request an increase for any adjustable quota value. After you define the Service Quotas template, use this operation to associate, or enable, the template.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate
		 * @return {AssociateServiceQuotaTemplateResponse} Success
		 */
		AssociateServiceQuotaTemplate(requestBody: AssociateServiceQuotaTemplateRequest): Observable<AssociateServiceQuotaTemplateResponse> {
			return this.http.post<AssociateServiceQuotaTemplateResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a service quota increase request from the Service Quotas template.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate
		 * @return {DeleteServiceQuotaIncreaseRequestFromTemplateResponse} Success
		 */
		DeleteServiceQuotaIncreaseRequestFromTemplate(requestBody: DeleteServiceQuotaIncreaseRequestFromTemplateRequest): Observable<DeleteServiceQuotaIncreaseRequestFromTemplateResponse> {
			return this.http.post<DeleteServiceQuotaIncreaseRequestFromTemplateResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables the Service Quotas template. Once the template is disabled, it does not request quota increases for new accounts in your organization. Disabling the quota template does not apply the quota increase requests from the template. </p> <p> <b>Related operations</b> </p> <ul> <li> <p>To enable the quota template, call <a>AssociateServiceQuotaTemplate</a>. </p> </li> <li> <p>To delete a specific service quota from the template, use <a>DeleteServiceQuotaIncreaseRequestFromTemplate</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate
		 * @return {DisassociateServiceQuotaTemplateResponse} Success
		 */
		DisassociateServiceQuotaTemplate(requestBody: DisassociateServiceQuotaTemplateRequest): Observable<DisassociateServiceQuotaTemplateResponse> {
			return this.http.post<DisassociateServiceQuotaTemplateResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the default service quotas values. The Value returned for each quota is the AWS default value, even if the quotas have been increased..
		 * Post #X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota
		 * @return {GetAWSDefaultServiceQuotaResponse} Success
		 */
		GetAWSDefaultServiceQuota(requestBody: GetAWSDefaultServiceQuotaRequest): Observable<GetAWSDefaultServiceQuotaResponse> {
			return this.http.post<GetAWSDefaultServiceQuotaResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the <code>ServiceQuotaTemplateAssociationStatus</code> value from the service. Use this action to determine if the Service Quota template is associated, or enabled.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate
		 * @return {GetAssociationForServiceQuotaTemplateResponse} Success
		 */
		GetAssociationForServiceQuotaTemplate(requestBody: GetAssociationForServiceQuotaTemplateRequest): Observable<GetAssociationForServiceQuotaTemplateResponse> {
			return this.http.post<GetAssociationForServiceQuotaTemplateResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the details for a particular increase request.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange
		 * @return {GetRequestedServiceQuotaChangeResponse} Success
		 */
		GetRequestedServiceQuotaChange(requestBody: GetRequestedServiceQuotaChangeRequest): Observable<GetRequestedServiceQuotaChangeResponse> {
			return this.http.post<GetRequestedServiceQuotaChangeResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the details for the specified service quota. This operation provides a different Value than the <code>GetAWSDefaultServiceQuota</code> operation. This operation returns the applied value for each quota. <code>GetAWSDefaultServiceQuota</code> returns the default AWS value for each quota.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota
		 * @return {GetServiceQuotaResponse} Success
		 */
		GetServiceQuota(requestBody: GetServiceQuotaRequest): Observable<GetServiceQuotaResponse> {
			return this.http.post<GetServiceQuotaResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the details of the service quota increase request in your template.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate
		 * @return {GetServiceQuotaIncreaseRequestFromTemplateResponse} Success
		 */
		GetServiceQuotaIncreaseRequestFromTemplate(requestBody: GetServiceQuotaIncreaseRequestFromTemplateRequest): Observable<GetServiceQuotaIncreaseRequestFromTemplateResponse> {
			return this.http.post<GetServiceQuotaIncreaseRequestFromTemplateResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all default service quotas for the specified AWS service or all AWS services. ListAWSDefaultServiceQuotas is similar to <a>ListServiceQuotas</a> except for the Value object. The Value object returned by <code>ListAWSDefaultServiceQuotas</code> is the default value assigned by AWS. This request returns a list of all service quotas for the specified service. The listing of each you'll see the default values are the values that AWS provides for the quotas. </p> <note> <p>Always check the <code>NextToken</code> response parameter when calling any of the <code>List*</code> operations. These operations can return an unexpected list of results, even when there are more results available. When this happens, the <code>NextToken</code> response parameter contains a value to pass the next call to the same API to request the next part of the list.</p> </note>
		 * Post #X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAWSDefaultServiceQuotasResponse} Success
		 */
		ListAWSDefaultServiceQuotas(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAWSDefaultServiceQuotasRequest): Observable<ListAWSDefaultServiceQuotasResponse> {
			return this.http.post<ListAWSDefaultServiceQuotasResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Requests a list of the changes to quotas for a service.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRequestedServiceQuotaChangeHistoryResponse} Success
		 */
		ListRequestedServiceQuotaChangeHistory(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRequestedServiceQuotaChangeHistoryRequest): Observable<ListRequestedServiceQuotaChangeHistoryResponse> {
			return this.http.post<ListRequestedServiceQuotaChangeHistoryResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Requests a list of the changes to specific service quotas. This command provides additional granularity over the <code>ListRequestedServiceQuotaChangeHistory</code> command. Once a quota change request has reached <code>CASE_CLOSED, APPROVED,</code> or <code>DENIED</code>, the history has been kept for 90 days.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRequestedServiceQuotaChangeHistoryByQuotaResponse} Success
		 */
		ListRequestedServiceQuotaChangeHistoryByQuota(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRequestedServiceQuotaChangeHistoryByQuotaRequest): Observable<ListRequestedServiceQuotaChangeHistoryByQuotaResponse> {
			return this.http.post<ListRequestedServiceQuotaChangeHistoryByQuotaResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the quota increase requests in the template.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListServiceQuotaIncreaseRequestsInTemplateResponse} Success
		 */
		ListServiceQuotaIncreaseRequestsInTemplate(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListServiceQuotaIncreaseRequestsInTemplateRequest): Observable<ListServiceQuotaIncreaseRequestsInTemplateResponse> {
			return this.http.post<ListServiceQuotaIncreaseRequestsInTemplateResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all service quotas for the specified AWS service. This request returns a list of the service quotas for the specified service. you'll see the default values are the values that AWS provides for the quotas. </p> <note> <p>Always check the <code>NextToken</code> response parameter when calling any of the <code>List*</code> operations. These operations can return an unexpected list of results, even when there are more results available. When this happens, the <code>NextToken</code> response parameter contains a value to pass the next call to the same API to request the next part of the list.</p> </note>
		 * Post #X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListServiceQuotasResponse} Success
		 */
		ListServiceQuotas(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListServiceQuotasRequest): Observable<ListServiceQuotasResponse> {
			return this.http.post<ListServiceQuotasResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the AWS services available in Service Quotas. Not all AWS services are available in Service Quotas. To list the see the list of the service quotas for a specific service, use <a>ListServiceQuotas</a>.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.ListServices
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListServicesResponse} Success
		 */
		ListServices(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListServicesRequest): Observable<ListServicesResponse> {
			return this.http.post<ListServicesResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.ListServices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Defines and adds a quota to the service quota template. To add a quota to the template, you must provide the <code>ServiceCode</code>, <code>QuotaCode</code>, <code>AwsRegion</code>, and <code>DesiredValue</code>. Once you add a quota to the template, use <a>ListServiceQuotaIncreaseRequestsInTemplate</a> to see the list of quotas in the template.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate
		 * @return {PutServiceQuotaIncreaseRequestIntoTemplateResponse} Success
		 */
		PutServiceQuotaIncreaseRequestIntoTemplate(requestBody: PutServiceQuotaIncreaseRequestIntoTemplateRequest): Observable<PutServiceQuotaIncreaseRequestIntoTemplateResponse> {
			return this.http.post<PutServiceQuotaIncreaseRequestIntoTemplateResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the details of a service quota increase request. The response to this command provides the details in the <a>RequestedServiceQuotaChange</a> object.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease
		 * @return {RequestServiceQuotaIncreaseResponse} Success
		 */
		RequestServiceQuotaIncrease(requestBody: RequestServiceQuotaIncreaseRequest): Observable<RequestServiceQuotaIncreaseResponse> {
			return this.http.post<RequestServiceQuotaIncreaseResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateServiceQuotaTemplateX_Amz_Target { ServiceQuotasV20190624_AssociateServiceQuotaTemplate = 0 }

	export enum DeleteServiceQuotaIncreaseRequestFromTemplateX_Amz_Target { ServiceQuotasV20190624_DeleteServiceQuotaIncreaseRequestFromTemplate = 0 }

	export enum DisassociateServiceQuotaTemplateX_Amz_Target { ServiceQuotasV20190624_DisassociateServiceQuotaTemplate = 0 }

	export enum GetAWSDefaultServiceQuotaX_Amz_Target { ServiceQuotasV20190624_GetAWSDefaultServiceQuota = 0 }

	export enum GetAssociationForServiceQuotaTemplateX_Amz_Target { ServiceQuotasV20190624_GetAssociationForServiceQuotaTemplate = 0 }

	export enum GetRequestedServiceQuotaChangeX_Amz_Target { ServiceQuotasV20190624_GetRequestedServiceQuotaChange = 0 }

	export enum GetServiceQuotaX_Amz_Target { ServiceQuotasV20190624_GetServiceQuota = 0 }

	export enum GetServiceQuotaIncreaseRequestFromTemplateX_Amz_Target { ServiceQuotasV20190624_GetServiceQuotaIncreaseRequestFromTemplate = 0 }

	export enum ListAWSDefaultServiceQuotasX_Amz_Target { ServiceQuotasV20190624_ListAWSDefaultServiceQuotas = 0 }

	export enum ListRequestedServiceQuotaChangeHistoryX_Amz_Target { ServiceQuotasV20190624_ListRequestedServiceQuotaChangeHistory = 0 }

	export enum ListRequestedServiceQuotaChangeHistoryByQuotaX_Amz_Target { ServiceQuotasV20190624_ListRequestedServiceQuotaChangeHistoryByQuota = 0 }

	export enum ListServiceQuotaIncreaseRequestsInTemplateX_Amz_Target { ServiceQuotasV20190624_ListServiceQuotaIncreaseRequestsInTemplate = 0 }

	export enum ListServiceQuotasX_Amz_Target { ServiceQuotasV20190624_ListServiceQuotas = 0 }

	export enum ListServicesX_Amz_Target { ServiceQuotasV20190624_ListServices = 0 }

	export enum PutServiceQuotaIncreaseRequestIntoTemplateX_Amz_Target { ServiceQuotasV20190624_PutServiceQuotaIncreaseRequestIntoTemplate = 0 }

	export enum RequestServiceQuotaIncreaseX_Amz_Target { ServiceQuotasV20190624_RequestServiceQuotaIncrease = 0 }

}

