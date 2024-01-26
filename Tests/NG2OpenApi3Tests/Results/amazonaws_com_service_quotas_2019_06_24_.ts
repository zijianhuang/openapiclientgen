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

		/** Required */
		ServiceCode: string;

		/** Required */
		QuotaCode: string;

		/** Required */
		AwsRegion: string;
	}
	export interface DeleteServiceQuotaIncreaseRequestFromTemplateRequestFormProperties {

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,

		/** Required */
		QuotaCode: FormControl<string | null | undefined>,

		/** Required */
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServiceQuotaIncreaseRequestFromTemplateRequestFormGroup() {
		return new FormGroup<DeleteServiceQuotaIncreaseRequestFromTemplateRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QuotaCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AwsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		Quota?: ServiceQuota;
	}
	export interface GetAWSDefaultServiceQuotaResponseFormProperties {
	}
	export function CreateGetAWSDefaultServiceQuotaResponseFormGroup() {
		return new FormGroup<GetAWSDefaultServiceQuotaResponseFormProperties>({
		});

	}


	/** Information about a quota. */
	export interface ServiceQuota {
		ServiceCode?: string;
		ServiceName?: string;
		QuotaArn?: string;
		QuotaCode?: string;
		QuotaName?: string;
		Value?: number | null;
		Unit?: string;
		Adjustable?: boolean | null;
		GlobalQuota?: boolean | null;
		UsageMetric?: MetricInfo;
		Period?: QuotaPeriod;
		ErrorReason?: ErrorReason;
	}

	/** Information about a quota. */
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


	/** Information about the CloudWatch metric that reflects quota usage. */
	export interface MetricInfo {
		MetricNamespace?: string;
		MetricName?: string;
		MetricDimensions?: MetricDimensionsMapDefinition;
		MetricStatisticRecommendation?: string;
	}

	/** Information about the CloudWatch metric that reflects quota usage. */
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


	/** Information about the quota period. */
	export interface QuotaPeriod {
		PeriodValue?: number | null;
		PeriodUnit?: PeriodUnit;
	}

	/** Information about the quota period. */
	export interface QuotaPeriodFormProperties {
		PeriodValue: FormControl<number | null | undefined>,
		PeriodUnit: FormControl<PeriodUnit | null | undefined>,
	}
	export function CreateQuotaPeriodFormGroup() {
		return new FormGroup<QuotaPeriodFormProperties>({
			PeriodValue: new FormControl<number | null | undefined>(undefined),
			PeriodUnit: new FormControl<PeriodUnit | null | undefined>(undefined),
		});

	}

	export enum PeriodUnit { MICROSECOND = 0, MILLISECOND = 1, SECOND = 2, MINUTE = 3, HOUR = 4, DAY = 5, WEEK = 6 }


	/** An error that explains why an action did not succeed. */
	export interface ErrorReason {
		ErrorCode?: ErrorCode;
		ErrorMessage?: string;
	}

	/** An error that explains why an action did not succeed. */
	export interface ErrorReasonFormProperties {
		ErrorCode: FormControl<ErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorReasonFormGroup() {
		return new FormGroup<ErrorReasonFormProperties>({
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { DEPENDENCY_ACCESS_DENIED_ERROR = 0, DEPENDENCY_THROTTLING_ERROR = 1, DEPENDENCY_SERVICE_ERROR = 2, SERVICE_QUOTA_NOT_AVAILABLE_ERROR = 3 }

	export interface GetAWSDefaultServiceQuotaRequest {

		/** Required */
		ServiceCode: string;

		/** Required */
		QuotaCode: string;
	}
	export interface GetAWSDefaultServiceQuotaRequestFormProperties {

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,

		/** Required */
		QuotaCode: FormControl<string | null | undefined>,
	}
	export function CreateGetAWSDefaultServiceQuotaRequestFormGroup() {
		return new FormGroup<GetAWSDefaultServiceQuotaRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QuotaCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAssociationForServiceQuotaTemplateResponse {
		ServiceQuotaTemplateAssociationStatus?: ServiceQuotaTemplateAssociationStatus;
	}
	export interface GetAssociationForServiceQuotaTemplateResponseFormProperties {
		ServiceQuotaTemplateAssociationStatus: FormControl<ServiceQuotaTemplateAssociationStatus | null | undefined>,
	}
	export function CreateGetAssociationForServiceQuotaTemplateResponseFormGroup() {
		return new FormGroup<GetAssociationForServiceQuotaTemplateResponseFormProperties>({
			ServiceQuotaTemplateAssociationStatus: new FormControl<ServiceQuotaTemplateAssociationStatus | null | undefined>(undefined),
		});

	}

	export enum ServiceQuotaTemplateAssociationStatus { ASSOCIATED = 0, DISASSOCIATED = 1 }

	export interface GetAssociationForServiceQuotaTemplateRequest {
	}
	export interface GetAssociationForServiceQuotaTemplateRequestFormProperties {
	}
	export function CreateGetAssociationForServiceQuotaTemplateRequestFormGroup() {
		return new FormGroup<GetAssociationForServiceQuotaTemplateRequestFormProperties>({
		});

	}

	export interface GetRequestedServiceQuotaChangeResponse {
		RequestedQuota?: RequestedServiceQuotaChange;
	}
	export interface GetRequestedServiceQuotaChangeResponseFormProperties {
	}
	export function CreateGetRequestedServiceQuotaChangeResponseFormGroup() {
		return new FormGroup<GetRequestedServiceQuotaChangeResponseFormProperties>({
		});

	}


	/** Information about a quota increase request. */
	export interface RequestedServiceQuotaChange {
		Id?: string;
		CaseId?: string;
		ServiceCode?: string;
		ServiceName?: string;
		QuotaCode?: string;
		QuotaName?: string;
		DesiredValue?: number | null;
		Status?: RequestStatus;
		Created?: Date;
		LastUpdated?: Date;
		Requester?: string;
		QuotaArn?: string;
		GlobalQuota?: boolean | null;
		Unit?: string;
	}

	/** Information about a quota increase request. */
	export interface RequestedServiceQuotaChangeFormProperties {
		Id: FormControl<string | null | undefined>,
		CaseId: FormControl<string | null | undefined>,
		ServiceCode: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		QuotaCode: FormControl<string | null | undefined>,
		QuotaName: FormControl<string | null | undefined>,
		DesiredValue: FormControl<number | null | undefined>,
		Status: FormControl<RequestStatus | null | undefined>,
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
			Status: new FormControl<RequestStatus | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Requester: new FormControl<string | null | undefined>(undefined),
			QuotaArn: new FormControl<string | null | undefined>(undefined),
			GlobalQuota: new FormControl<boolean | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RequestStatus { PENDING = 0, CASE_OPENED = 1, APPROVED = 2, DENIED = 3, CASE_CLOSED = 4 }

	export interface GetRequestedServiceQuotaChangeRequest {

		/** Required */
		RequestId: string;
	}
	export interface GetRequestedServiceQuotaChangeRequestFormProperties {

		/** Required */
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateGetRequestedServiceQuotaChangeRequestFormGroup() {
		return new FormGroup<GetRequestedServiceQuotaChangeRequestFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetServiceQuotaResponse {
		Quota?: ServiceQuota;
	}
	export interface GetServiceQuotaResponseFormProperties {
	}
	export function CreateGetServiceQuotaResponseFormGroup() {
		return new FormGroup<GetServiceQuotaResponseFormProperties>({
		});

	}

	export interface GetServiceQuotaRequest {

		/** Required */
		ServiceCode: string;

		/** Required */
		QuotaCode: string;
	}
	export interface GetServiceQuotaRequestFormProperties {

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,

		/** Required */
		QuotaCode: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceQuotaRequestFormGroup() {
		return new FormGroup<GetServiceQuotaRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QuotaCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetServiceQuotaIncreaseRequestFromTemplateResponse {
		ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
	}
	export interface GetServiceQuotaIncreaseRequestFromTemplateResponseFormProperties {
	}
	export function CreateGetServiceQuotaIncreaseRequestFromTemplateResponseFormGroup() {
		return new FormGroup<GetServiceQuotaIncreaseRequestFromTemplateResponseFormProperties>({
		});

	}


	/** Information about a quota increase request. */
	export interface ServiceQuotaIncreaseRequestInTemplate {
		ServiceCode?: string;
		ServiceName?: string;
		QuotaCode?: string;
		QuotaName?: string;
		DesiredValue?: number | null;
		AwsRegion?: string;
		Unit?: string;
		GlobalQuota?: boolean | null;
	}

	/** Information about a quota increase request. */
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

		/** Required */
		ServiceCode: string;

		/** Required */
		QuotaCode: string;

		/** Required */
		AwsRegion: string;
	}
	export interface GetServiceQuotaIncreaseRequestFromTemplateRequestFormProperties {

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,

		/** Required */
		QuotaCode: FormControl<string | null | undefined>,

		/** Required */
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceQuotaIncreaseRequestFromTemplateRequestFormGroup() {
		return new FormGroup<GetServiceQuotaIncreaseRequestFromTemplateRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QuotaCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AwsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAWSDefaultServiceQuotasResponse {
		NextToken?: string;
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

		/** Required */
		ServiceCode: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListAWSDefaultServiceQuotasRequestFormProperties {

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAWSDefaultServiceQuotasRequestFormGroup() {
		return new FormGroup<ListAWSDefaultServiceQuotasRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		NextToken?: string;
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
		ServiceCode?: string;
		Status?: RequestStatus;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListRequestedServiceQuotaChangeHistoryRequestFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		Status: FormControl<RequestStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRequestedServiceQuotaChangeHistoryRequestFormGroup() {
		return new FormGroup<ListRequestedServiceQuotaChangeHistoryRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<RequestStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
		NextToken?: string;
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

		/** Required */
		ServiceCode: string;

		/** Required */
		QuotaCode: string;
		Status?: RequestStatus;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListRequestedServiceQuotaChangeHistoryByQuotaRequestFormProperties {

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,

		/** Required */
		QuotaCode: FormControl<string | null | undefined>,
		Status: FormControl<RequestStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRequestedServiceQuotaChangeHistoryByQuotaRequestFormGroup() {
		return new FormGroup<ListRequestedServiceQuotaChangeHistoryByQuotaRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QuotaCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<RequestStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListServiceQuotaIncreaseRequestsInTemplateResponse {
		ServiceQuotaIncreaseRequestInTemplateList?: Array<ServiceQuotaIncreaseRequestInTemplate>;
		NextToken?: string;
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
		ServiceCode?: string;
		AwsRegion?: string;
		NextToken?: string;
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
		NextToken?: string;
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

		/** Required */
		ServiceCode: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListServiceQuotasRequestFormProperties {

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListServiceQuotasRequestFormGroup() {
		return new FormGroup<ListServiceQuotasRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListServicesResponse {
		NextToken?: string;
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


	/** Information about a service. */
	export interface ServiceInfo {
		ServiceCode?: string;
		ServiceName?: string;
	}

	/** Information about a service. */
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
		NextToken?: string;
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

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** A complex data type that contains a tag key and tag value. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A complex data type that contains a tag key and tag value. */
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

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutServiceQuotaIncreaseRequestIntoTemplateResponse {
		ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
	}
	export interface PutServiceQuotaIncreaseRequestIntoTemplateResponseFormProperties {
	}
	export function CreatePutServiceQuotaIncreaseRequestIntoTemplateResponseFormGroup() {
		return new FormGroup<PutServiceQuotaIncreaseRequestIntoTemplateResponseFormProperties>({
		});

	}

	export interface PutServiceQuotaIncreaseRequestIntoTemplateRequest {

		/** Required */
		QuotaCode: string;

		/** Required */
		ServiceCode: string;

		/** Required */
		AwsRegion: string;

		/** Required */
		DesiredValue: number;
	}
	export interface PutServiceQuotaIncreaseRequestIntoTemplateRequestFormProperties {

		/** Required */
		QuotaCode: FormControl<string | null | undefined>,

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,

		/** Required */
		AwsRegion: FormControl<string | null | undefined>,

		/** Required */
		DesiredValue: FormControl<number | null | undefined>,
	}
	export function CreatePutServiceQuotaIncreaseRequestIntoTemplateRequestFormGroup() {
		return new FormGroup<PutServiceQuotaIncreaseRequestIntoTemplateRequestFormProperties>({
			QuotaCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AwsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DesiredValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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
		RequestedQuota?: RequestedServiceQuotaChange;
	}
	export interface RequestServiceQuotaIncreaseResponseFormProperties {
	}
	export function CreateRequestServiceQuotaIncreaseResponseFormGroup() {
		return new FormGroup<RequestServiceQuotaIncreaseResponseFormProperties>({
		});

	}

	export interface RequestServiceQuotaIncreaseRequest {

		/** Required */
		ServiceCode: string;

		/** Required */
		QuotaCode: string;

		/** Required */
		DesiredValue: number;
	}
	export interface RequestServiceQuotaIncreaseRequestFormProperties {

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,

		/** Required */
		QuotaCode: FormControl<string | null | undefined>,

		/** Required */
		DesiredValue: FormControl<number | null | undefined>,
	}
	export function CreateRequestServiceQuotaIncreaseRequestFormGroup() {
		return new FormGroup<RequestServiceQuotaIncreaseRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QuotaCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DesiredValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface TagPolicyViolationException {
	}
	export interface TagPolicyViolationExceptionFormProperties {
	}
	export function CreateTagPolicyViolationExceptionFormGroup() {
		return new FormGroup<TagPolicyViolationExceptionFormProperties>({
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
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate
		 * @return {AssociateServiceQuotaTemplateResponse} Success
		 */
		AssociateServiceQuotaTemplate(requestBody: AssociateServiceQuotaTemplateRequest): Observable<AssociateServiceQuotaTemplateResponse> {
			return this.http.post<AssociateServiceQuotaTemplateResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the quota increase request for the specified quota from your quota request template.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate
		 * @return {DeleteServiceQuotaIncreaseRequestFromTemplateResponse} Success
		 */
		DeleteServiceQuotaIncreaseRequestFromTemplate(requestBody: DeleteServiceQuotaIncreaseRequestFromTemplateRequest): Observable<DeleteServiceQuotaIncreaseRequestFromTemplateResponse> {
			return this.http.post<DeleteServiceQuotaIncreaseRequestFromTemplateResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate
		 * @return {DisassociateServiceQuotaTemplateResponse} Success
		 */
		DisassociateServiceQuotaTemplate(requestBody: DisassociateServiceQuotaTemplateRequest): Observable<DisassociateServiceQuotaTemplateResponse> {
			return this.http.post<DisassociateServiceQuotaTemplateResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the default value for the specified quota. The default value does not reflect any quota increases.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota
		 * @return {GetAWSDefaultServiceQuotaResponse} Success
		 */
		GetAWSDefaultServiceQuota(requestBody: GetAWSDefaultServiceQuotaRequest): Observable<GetAWSDefaultServiceQuotaResponse> {
			return this.http.post<GetAWSDefaultServiceQuotaResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the status of the association for the quota request template.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate
		 * @return {GetAssociationForServiceQuotaTemplateResponse} Success
		 */
		GetAssociationForServiceQuotaTemplate(requestBody: GetAssociationForServiceQuotaTemplateRequest): Observable<GetAssociationForServiceQuotaTemplateResponse> {
			return this.http.post<GetAssociationForServiceQuotaTemplateResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the specified quota increase request.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange
		 * @return {GetRequestedServiceQuotaChangeResponse} Success
		 */
		GetRequestedServiceQuotaChange(requestBody: GetRequestedServiceQuotaChangeRequest): Observable<GetRequestedServiceQuotaChangeResponse> {
			return this.http.post<GetRequestedServiceQuotaChangeResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota
		 * @return {GetServiceQuotaResponse} Success
		 */
		GetServiceQuota(requestBody: GetServiceQuotaRequest): Observable<GetServiceQuotaResponse> {
			return this.http.post<GetServiceQuotaResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the specified quota increase request in your quota request template.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate
		 * @return {GetServiceQuotaIncreaseRequestFromTemplateResponse} Success
		 */
		GetServiceQuotaIncreaseRequestFromTemplate(requestBody: GetServiceQuotaIncreaseRequestFromTemplateRequest): Observable<GetServiceQuotaIncreaseRequestFromTemplateResponse> {
			return this.http.post<GetServiceQuotaIncreaseRequestFromTemplateResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAWSDefaultServiceQuotasResponse} Success
		 */
		ListAWSDefaultServiceQuotas(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAWSDefaultServiceQuotasRequest): Observable<ListAWSDefaultServiceQuotasResponse> {
			return this.http.post<ListAWSDefaultServiceQuotasResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the quota increase requests for the specified service.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRequestedServiceQuotaChangeHistoryResponse} Success
		 */
		ListRequestedServiceQuotaChangeHistory(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRequestedServiceQuotaChangeHistoryRequest): Observable<ListRequestedServiceQuotaChangeHistoryResponse> {
			return this.http.post<ListRequestedServiceQuotaChangeHistoryResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the quota increase requests for the specified quota.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRequestedServiceQuotaChangeHistoryByQuotaResponse} Success
		 */
		ListRequestedServiceQuotaChangeHistoryByQuota(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRequestedServiceQuotaChangeHistoryByQuotaRequest): Observable<ListRequestedServiceQuotaChangeHistoryByQuotaResponse> {
			return this.http.post<ListRequestedServiceQuotaChangeHistoryByQuotaResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the quota increase requests in the specified quota request template.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListServiceQuotaIncreaseRequestsInTemplateResponse} Success
		 */
		ListServiceQuotaIncreaseRequestsInTemplate(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListServiceQuotaIncreaseRequestsInTemplateRequest): Observable<ListServiceQuotaIncreaseRequestsInTemplateResponse> {
			return this.http.post<ListServiceQuotaIncreaseRequestsInTemplateResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListServiceQuotasResponse} Success
		 */
		ListServiceQuotas(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListServiceQuotasRequest): Observable<ListServiceQuotasResponse> {
			return this.http.post<ListServiceQuotasResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the names and codes for the services integrated with Service Quotas.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.ListServices
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListServicesResponse} Success
		 */
		ListServices(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListServicesRequest): Observable<ListServicesResponse> {
			return this.http.post<ListServicesResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.ListServices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the tags assigned to the specified applied quota.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a quota increase request to your quota request template.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate
		 * @return {PutServiceQuotaIncreaseRequestIntoTemplateResponse} Success
		 */
		PutServiceQuotaIncreaseRequestIntoTemplate(requestBody: PutServiceQuotaIncreaseRequestIntoTemplateRequest): Observable<PutServiceQuotaIncreaseRequestIntoTemplateResponse> {
			return this.http.post<PutServiceQuotaIncreaseRequestIntoTemplateResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Submits a quota increase request for the specified quota.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease
		 * @return {RequestServiceQuotaIncreaseResponse} Success
		 */
		RequestServiceQuotaIncrease(requestBody: RequestServiceQuotaIncreaseRequest): Observable<RequestServiceQuotaIncreaseResponse> {
			return this.http.post<RequestServiceQuotaIncreaseResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds tags to the specified applied quota. You can include one or more tags to add to the quota.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from the specified applied quota. You can specify one or more tags to remove.
		 * Post #X-Amz-Target=ServiceQuotasV20190624.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=ServiceQuotasV20190624.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateServiceQuotaTemplateX_Amz_Target { 'ServiceQuotasV20190624.AssociateServiceQuotaTemplate' = 0 }

	export enum DeleteServiceQuotaIncreaseRequestFromTemplateX_Amz_Target { 'ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate' = 0 }

	export enum DisassociateServiceQuotaTemplateX_Amz_Target { 'ServiceQuotasV20190624.DisassociateServiceQuotaTemplate' = 0 }

	export enum GetAWSDefaultServiceQuotaX_Amz_Target { 'ServiceQuotasV20190624.GetAWSDefaultServiceQuota' = 0 }

	export enum GetAssociationForServiceQuotaTemplateX_Amz_Target { 'ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate' = 0 }

	export enum GetRequestedServiceQuotaChangeX_Amz_Target { 'ServiceQuotasV20190624.GetRequestedServiceQuotaChange' = 0 }

	export enum GetServiceQuotaX_Amz_Target { 'ServiceQuotasV20190624.GetServiceQuota' = 0 }

	export enum GetServiceQuotaIncreaseRequestFromTemplateX_Amz_Target { 'ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate' = 0 }

	export enum ListAWSDefaultServiceQuotasX_Amz_Target { 'ServiceQuotasV20190624.ListAWSDefaultServiceQuotas' = 0 }

	export enum ListRequestedServiceQuotaChangeHistoryX_Amz_Target { 'ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory' = 0 }

	export enum ListRequestedServiceQuotaChangeHistoryByQuotaX_Amz_Target { 'ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota' = 0 }

	export enum ListServiceQuotaIncreaseRequestsInTemplateX_Amz_Target { 'ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate' = 0 }

	export enum ListServiceQuotasX_Amz_Target { 'ServiceQuotasV20190624.ListServiceQuotas' = 0 }

	export enum ListServicesX_Amz_Target { 'ServiceQuotasV20190624.ListServices' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'ServiceQuotasV20190624.ListTagsForResource' = 0 }

	export enum PutServiceQuotaIncreaseRequestIntoTemplateX_Amz_Target { 'ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate' = 0 }

	export enum RequestServiceQuotaIncreaseX_Amz_Target { 'ServiceQuotasV20190624.RequestServiceQuotaIncrease' = 0 }

	export enum TagResourceX_Amz_Target { 'ServiceQuotasV20190624.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'ServiceQuotasV20190624.UntagResource' = 0 }

}

