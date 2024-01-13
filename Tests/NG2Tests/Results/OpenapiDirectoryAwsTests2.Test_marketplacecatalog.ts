import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelChangeSetResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ChangeSetId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ChangeSetArn?: string | null;
	}
	export interface CancelChangeSetResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ChangeSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ChangeSetArn: FormControl<string | null | undefined>,
	}
	export function CreateCancelChangeSetResponseFormGroup() {
		return new FormGroup<CancelChangeSetResponseFormProperties>({
			ChangeSetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[\w\-]+$')]),
			ChangeSetArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[a-zA-Z0-9:*/-]+$')]),
		});

	}

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface DescribeChangeSetResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ChangeSetId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ChangeSetArn?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ChangeSetName?: string | null;

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		StartTime?: string | null;

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		EndTime?: string | null;
		Status?: DescribeChangeSetResponseStatus | null;
		FailureDescription?: string | null;
		ChangeSet?: Array<ChangeSummary>;
	}
	export interface DescribeChangeSetResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ChangeSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ChangeSetArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ChangeSetName: FormControl<string | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		StartTime: FormControl<string | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		EndTime: FormControl<string | null | undefined>,
		Status: FormControl<DescribeChangeSetResponseStatus | null | undefined>,
		FailureDescription: FormControl<string | null | undefined>,
	}
	export function CreateDescribeChangeSetResponseFormGroup() {
		return new FormGroup<DescribeChangeSetResponseFormProperties>({
			ChangeSetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[\w\-]+$')]),
			ChangeSetArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[a-zA-Z0-9:*/-]+$')]),
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[\w\s+=.:@-]+$')]),
			StartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^([\d]{4})\-(1[0-2]|0[1-9])\-(3[01]|0[1-9]|[12][\d])T(2[0-3]|[01][\d]):([0-5][\d]):([0-5][\d])Z$')]),
			EndTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^([\d]{4})\-(1[0-2]|0[1-9])\-(3[01]|0[1-9]|[12][\d])T(2[0-3]|[01][\d]):([0-5][\d]):([0-5][\d])Z$')]),
			Status: new FormControl<DescribeChangeSetResponseStatus | null | undefined>(undefined),
			FailureDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeChangeSetResponseStatus { PREPARING = 0, APPLYING = 1, SUCCEEDED = 2, CANCELLED = 3, FAILED = 4 }


	/** This object is a container for common summary information about the change. The summary doesn't contain the whole change structure. */
	export interface ChangeSummary {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ChangeType?: string | null;

		/** A product entity contains data that describes your product, its supported features, and how it can be used or launched by your customer. */
		Entity?: Entity;

		/**
		 * Max length: 16384
		 * Min length: 2
		 */
		Details?: string | null;
		ErrorDetailList?: Array<ErrorDetail>;
	}

	/** This object is a container for common summary information about the change. The summary doesn't contain the whole change structure. */
	export interface ChangeSummaryFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ChangeType: FormControl<string | null | undefined>,

		/**
		 * Max length: 16384
		 * Min length: 2
		 */
		Details: FormControl<string | null | undefined>,
	}
	export function CreateChangeSummaryFormGroup() {
		return new FormGroup<ChangeSummaryFormProperties>({
			ChangeType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[A-Z][\w]*$')]),
			Details: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(16384), Validators.pattern('^[\s]*\{[\s\S]*\}[\s]*$')]),
		});

	}


	/** A product entity contains data that describes your product, its supported features, and how it can be used or launched by your customer.  */
	export interface Entity {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Type: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Identifier?: string | null;
	}

	/** A product entity contains data that describes your product, its supported features, and how it can be used or launched by your customer.  */
	export interface EntityFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Type: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z]+$')]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[\w\-@]+$')]),
		});

	}


	/** Details about the error. */
	export interface ErrorDetail {
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
	}

	/** Details about the error. */
	export interface ErrorDetailFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEntityResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		EntityType?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		EntityIdentifier?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		EntityArn?: string | null;
		LastModifiedDate?: string | null;

		/**
		 * Max length: 16384
		 * Min length: 2
		 */
		Details?: string | null;
	}
	export interface DescribeEntityResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		EntityType: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		EntityIdentifier: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		EntityArn: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,

		/**
		 * Max length: 16384
		 * Min length: 2
		 */
		Details: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEntityResponseFormGroup() {
		return new FormGroup<DescribeEntityResponseFormProperties>({
			EntityType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z]+$')]),
			EntityIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[\w\-@]+$')]),
			EntityArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[a-zA-Z0-9:*/-]+$')]),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Details: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(16384), Validators.pattern('^[\s]*\{[\s\S]*\}[\s]*$')]),
		});

	}

	export interface ResourceNotSupportedException {
	}
	export interface ResourceNotSupportedExceptionFormProperties {
	}
	export function CreateResourceNotSupportedExceptionFormGroup() {
		return new FormGroup<ResourceNotSupportedExceptionFormProperties>({
		});

	}

	export interface ListChangeSetsResponse {
		ChangeSetSummaryList?: Array<ChangeSetSummaryListItem>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListChangeSetsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChangeSetsResponseFormGroup() {
		return new FormGroup<ListChangeSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[\w+=.:@\-\/]$')]),
		});

	}


	/** A summary of a change set returned in a list of change sets when the <code>ListChangeSets</code> action is called. */
	export interface ChangeSetSummaryListItem {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ChangeSetId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ChangeSetArn?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ChangeSetName?: string | null;

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		StartTime?: string | null;

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		EndTime?: string | null;
		Status?: DescribeChangeSetResponseStatus | null;
		EntityIdList?: Array<string>;
	}

	/** A summary of a change set returned in a list of change sets when the <code>ListChangeSets</code> action is called. */
	export interface ChangeSetSummaryListItemFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ChangeSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ChangeSetArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ChangeSetName: FormControl<string | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		StartTime: FormControl<string | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		EndTime: FormControl<string | null | undefined>,
		Status: FormControl<DescribeChangeSetResponseStatus | null | undefined>,
	}
	export function CreateChangeSetSummaryListItemFormGroup() {
		return new FormGroup<ChangeSetSummaryListItemFormProperties>({
			ChangeSetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[\w\-]+$')]),
			ChangeSetArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[a-zA-Z0-9:*/-]+$')]),
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[\w\s+=.:@-]+$')]),
			StartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^([\d]{4})\-(1[0-2]|0[1-9])\-(3[01]|0[1-9]|[12][\d])T(2[0-3]|[01][\d]):([0-5][\d]):([0-5][\d])Z$')]),
			EndTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^([\d]{4})\-(1[0-2]|0[1-9])\-(3[01]|0[1-9]|[12][\d])T(2[0-3]|[01][\d]):([0-5][\d]):([0-5][\d])Z$')]),
			Status: new FormControl<DescribeChangeSetResponseStatus | null | undefined>(undefined),
		});

	}


	/** A filter object, used to optionally filter results from calls to the <code>ListEntities</code> and <code>ListChangeSets</code> actions. */
	export interface Filter {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		ValueList?: Array<string>;
	}

	/** A filter object, used to optionally filter results from calls to the <code>ListEntities</code> and <code>ListChangeSets</code> actions. */
	export interface FilterFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z]+$')]),
		});

	}

	export enum SortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListEntitiesResponse {
		EntitySummaryList?: Array<EntitySummary>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListEntitiesResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntitiesResponseFormGroup() {
		return new FormGroup<ListEntitiesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[\w+=.:@\-\/]$')]),
		});

	}


	/** This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities. */
	export interface EntitySummary {
		Name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		EntityType?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		EntityId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		EntityArn?: string | null;
		LastModifiedDate?: string | null;
		Visibility?: string | null;
	}

	/** This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities. */
	export interface EntitySummaryFormProperties {
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		EntityType: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		EntityId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		EntityArn: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,
		Visibility: FormControl<string | null | undefined>,
	}
	export function CreateEntitySummaryFormGroup() {
		return new FormGroup<EntitySummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			EntityType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z]+$')]),
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[\w\-]+$')]),
			EntityArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[a-zA-Z0-9:*/-]+$')]),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Visibility: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartChangeSetResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ChangeSetId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ChangeSetArn?: string | null;
	}
	export interface StartChangeSetResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ChangeSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ChangeSetArn: FormControl<string | null | undefined>,
	}
	export function CreateStartChangeSetResponseFormGroup() {
		return new FormGroup<StartChangeSetResponseFormProperties>({
			ChangeSetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[\w\-]+$')]),
			ChangeSetArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[a-zA-Z0-9:*/-]+$')]),
		});

	}


	/** An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>. */
	export interface Change {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ChangeType: string;

		/**
		 * A product entity contains data that describes your product, its supported features, and how it can be used or launched by your customer.
		 * Required
		 */
		Entity: Entity;

		/**
		 * Required
		 * Max length: 16384
		 * Min length: 2
		 */
		Details: string;
	}

	/** An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>. */
	export interface ChangeFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ChangeType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 16384
		 * Min length: 2
		 */
		Details: FormControl<string | null | undefined>,
	}
	export function CreateChangeFormGroup() {
		return new FormGroup<ChangeFormProperties>({
			ChangeType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[A-Z][\w]*$')]),
			Details: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(16384), Validators.pattern('^[\s]*\{[\s\S]*\}[\s]*$')]),
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CancelChangeSetRequest {
	}
	export interface CancelChangeSetRequestFormProperties {
	}
	export function CreateCancelChangeSetRequestFormGroup() {
		return new FormGroup<CancelChangeSetRequestFormProperties>({
		});

	}

	export enum ChangeStatus { PREPARING = 0, APPLYING = 1, SUCCEEDED = 2, CANCELLED = 3, FAILED = 4 }

	export interface DescribeChangeSetRequest {
	}
	export interface DescribeChangeSetRequestFormProperties {
	}
	export function CreateDescribeChangeSetRequestFormGroup() {
		return new FormGroup<DescribeChangeSetRequestFormProperties>({
		});

	}

	export interface DescribeEntityRequest {
	}
	export interface DescribeEntityRequestFormProperties {
	}
	export function CreateDescribeEntityRequestFormGroup() {
		return new FormGroup<DescribeEntityRequestFormProperties>({
		});

	}


	/** An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
	export interface Sort {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SortBy?: string | null;
		SortOrder?: SortOrder | null;
	}

	/** An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
	export interface SortFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SortBy: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateSortFormGroup() {
		return new FormGroup<SortFormProperties>({
			SortBy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z]+$')]),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListChangeSetsRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Catalog: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 8
		 */
		FilterList?: Array<Filter>;

		/** An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
		Sort?: Sort;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListChangeSetsRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Catalog: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChangeSetsRequestFormGroup() {
		return new FormGroup<ListChangeSetsRequestFormProperties>({
			Catalog: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z]+$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[\w+=.:@\-\/]$')]),
		});

	}

	export interface ListEntitiesRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Catalog: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		EntityType: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 8
		 */
		FilterList?: Array<Filter>;

		/** An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
		Sort?: Sort;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListEntitiesRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Catalog: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		EntityType: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEntitiesRequestFormGroup() {
		return new FormGroup<ListEntitiesRequestFormProperties>({
			Catalog: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z]+$')]),
			EntityType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z]+$')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[\w+=.:@\-\/]$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface StartChangeSetRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Catalog: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		ChangeSet: Array<Change>;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ChangeSetName?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface StartChangeSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Catalog: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ChangeSetName: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartChangeSetRequestFormGroup() {
		return new FormGroup<StartChangeSetRequestFormProperties>({
			Catalog: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z]+$')]),
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[\w\s+=.:@-]+$')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[\w\-]+$')]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Used to cancel an open change request. Must be sent before the status of the request changes to <code>APPLYING</code>, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls.
		 * Patch CancelChangeSet#catalog&changeSetId
		 * @param {string} catalog Required. The catalog related to the request. Fixed value: <code>AWSMarketplace</code>.
		 * @param {string} changeSetId Required. The unique identifier of the <code>StartChangeSet</code> request that you want to cancel.
		 * @return {CancelChangeSetResponse} Success
		 */
		CancelChangeSet(catalog: string, changeSetId: string): Observable<CancelChangeSetResponse> {
			return this.http.patch<CancelChangeSetResponse>(this.baseUri + 'CancelChangeSet#catalog&changeSetId?catalog=' + (catalog == null ? '' : encodeURIComponent(catalog)) + '&changeSetId=' + (changeSetId == null ? '' : encodeURIComponent(changeSetId)), null, {});
		}

		/**
		 * Provides information about a given change set.
		 * Get DescribeChangeSet#catalog&changeSetId
		 * @param {string} catalog Required. The catalog related to the request. Fixed value: <code>AWSMarketplace</code> 
		 * @param {string} changeSetId Required. The unique identifier for the <code>StartChangeSet</code> request that you want to describe the details for.
		 * @return {DescribeChangeSetResponse} Success
		 */
		DescribeChangeSet(catalog: string, changeSetId: string): Observable<DescribeChangeSetResponse> {
			return this.http.get<DescribeChangeSetResponse>(this.baseUri + 'DescribeChangeSet#catalog&changeSetId?catalog=' + (catalog == null ? '' : encodeURIComponent(catalog)) + '&changeSetId=' + (changeSetId == null ? '' : encodeURIComponent(changeSetId)), {});
		}

		/**
		 * Returns the metadata and content of the entity.
		 * Get DescribeEntity#catalog&entityId
		 * @param {string} catalog Required. The catalog related to the request. Fixed value: <code>AWSMarketplace</code> 
		 * @param {string} entityId Required. The unique ID of the entity to describe.
		 * @return {DescribeEntityResponse} Success
		 */
		DescribeEntity(catalog: string, entityId: string): Observable<DescribeEntityResponse> {
			return this.http.get<DescribeEntityResponse>(this.baseUri + 'DescribeEntity#catalog&entityId?catalog=' + (catalog == null ? '' : encodeURIComponent(catalog)) + '&entityId=' + (entityId == null ? '' : encodeURIComponent(entityId)), {});
		}

		/**
		 * <p>Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of <code>entityId</code>, <code>ChangeSetName</code>, and status. If you provide more than one filter, the API operation applies a logical AND between the filters.</p> <p>You can describe a change during the 60-day request history retention period for API calls.</p>
		 * Post ListChangeSets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChangeSetsResponse} Success
		 */
		ListChangeSets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListChangeSetsPostBody): Observable<ListChangeSetsResponse> {
			return this.http.post<ListChangeSetsResponse>(this.baseUri + 'ListChangeSets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the list of entities of a given type.
		 * Post ListEntities
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEntitiesResponse} Success
		 */
		ListEntities(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEntitiesPostBody): Observable<ListEntitiesResponse> {
			return this.http.post<ListEntitiesResponse>(this.baseUri + 'ListEntities?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation allows you to request changes for your entities. Within a single ChangeSet, you cannot start the same change type against the same entity multiple times. Additionally, when a ChangeSet is running, all the entities targeted by the different changes are locked until the ChangeSet has completed (either succeeded, cancelled, or failed). If you try to start a ChangeSet containing a change against an entity that is already locked, you will receive a <code>ResourceInUseException</code>.</p> <p>For example, you cannot start the ChangeSet described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> below because it contains two changes to execute the same change type (<code>AddRevisions</code>) against the same entity (<code>entity-id@1)</code>.</p>
		 * Post StartChangeSet
		 * @return {StartChangeSetResponse} Success
		 */
		StartChangeSet(requestBody: StartChangeSetPostBody): Observable<StartChangeSetResponse> {
			return this.http.post<StartChangeSetResponse>(this.baseUri + 'StartChangeSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface ListChangeSetsPostBody {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Catalog: string;

		/**
		 * An array of filter objects.
		 * Minimum items: 1
		 * Maximum items: 8
		 */
		FilterList?: Array<Filter>;

		/** An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
		Sort?: ListChangeSetsPostBodySort;

		/**
		 * The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results. By default, this value is 20.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;

		/**
		 * The token value retrieved from a previous call to access the next page of results.
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListChangeSetsPostBodyFormProperties {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Catalog: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results. By default, this value is 20.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The token value retrieved from a previous call to access the next page of results.
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChangeSetsPostBodyFormGroup() {
		return new FormGroup<ListChangeSetsPostBodyFormProperties>({
			Catalog: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z]+$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[\w+=.:@\-\/]$')]),
		});

	}

	export interface ListChangeSetsPostBodySort {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SortBy?: string | null;
		SortOrder?: SortOrder | null;
	}
	export interface ListChangeSetsPostBodySortFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SortBy: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListChangeSetsPostBodySortFormGroup() {
		return new FormGroup<ListChangeSetsPostBodySortFormProperties>({
			SortBy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z]+$')]),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListEntitiesPostBody {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Catalog: string;

		/**
		 * The type of entities to retrieve.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		EntityType: string;

		/**
		 * An array of filter objects. Each filter object contains two attributes, <code>filterName</code> and <code>filterValues</code>.
		 * Minimum items: 1
		 * Maximum items: 8
		 */
		FilterList?: Array<Filter>;

		/** An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
		Sort?: ListEntitiesPostBodySort;

		/**
		 * The value of the next token, if it exists. Null if there are no more results.
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Specifies the upper limit of the elements on a single page. If a value isn't provided, the default value is 20.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListEntitiesPostBodyFormProperties {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Catalog: FormControl<string | null | undefined>,

		/**
		 * The type of entities to retrieve.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		EntityType: FormControl<string | null | undefined>,

		/**
		 * The value of the next token, if it exists. Null if there are no more results.
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the upper limit of the elements on a single page. If a value isn't provided, the default value is 20.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEntitiesPostBodyFormGroup() {
		return new FormGroup<ListEntitiesPostBodyFormProperties>({
			Catalog: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z]+$')]),
			EntityType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z]+$')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[\w+=.:@\-\/]$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ListEntitiesPostBodySort {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SortBy?: string | null;
		SortOrder?: SortOrder | null;
	}
	export interface ListEntitiesPostBodySortFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SortBy: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListEntitiesPostBodySortFormGroup() {
		return new FormGroup<ListEntitiesPostBodySortFormProperties>({
			SortBy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z]+$')]),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface StartChangeSetPostBody {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Catalog: string;

		/**
		 * Array of <code>change</code> object.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		ChangeSet: Array<Change>;

		/**
		 * Optional case sensitive string of up to 100 ASCII characters. The change set name can be used to filter the list of change sets.
		 * Max length: 100
		 * Min length: 1
		 */
		ChangeSetName?: string | null;

		/**
		 * A unique token to identify the request to ensure idempotency.
		 * Max length: 36
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface StartChangeSetPostBodyFormProperties {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Catalog: FormControl<string | null | undefined>,

		/**
		 * Optional case sensitive string of up to 100 ASCII characters. The change set name can be used to filter the list of change sets.
		 * Max length: 100
		 * Min length: 1
		 */
		ChangeSetName: FormControl<string | null | undefined>,

		/**
		 * A unique token to identify the request to ensure idempotency.
		 * Max length: 36
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartChangeSetPostBodyFormGroup() {
		return new FormGroup<StartChangeSetPostBodyFormProperties>({
			Catalog: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z]+$')]),
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[\w\s+=.:@-]+$')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[\w\-]+$')]),
		});

	}

}

